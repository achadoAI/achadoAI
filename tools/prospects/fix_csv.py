"""Fix CSV files corrupted by Excel (encoding/delimiter issues)."""

import argparse
import csv
import sys
from pathlib import Path


def detect_encoding(file_path: Path) -> str:
    """Try common encodings, return the first that works."""
    for enc in ["utf-8", "utf-8-sig", "latin-1", "cp1252"]:
        try:
            file_path.read_text(encoding=enc)
            return enc
        except (UnicodeDecodeError, ValueError):
            continue
    return "latin-1"


def try_parse(text: str, delimiter: str) -> list[list[str]] | None:
    """Try parsing text with a given delimiter. Returns rows or None."""
    try:
        reader = csv.reader(text.splitlines(), delimiter=delimiter)
        rows = list(reader)
        if len(rows) < 2:
            return None
        # Sanity: header and first data row should have same column count
        header_len = len(rows[0])
        if header_len < 5:
            return None
        # At least 50% of rows should match header length
        matching = sum(1 for r in rows[1:] if len(r) == header_len)
        if matching / max(len(rows) - 1, 1) < 0.5:
            return None
        return rows
    except csv.Error:
        return None


def unwrap_excel_rows(text: str) -> str:
    """Fix Excel corruption where each data row is wrapped in outer quotes.

    Pattern: header is normal, but data rows look like:
      "5,Name,Category,...,""quoted,field"",...,url"
    i.e. the entire row is one quoted string with internal quotes doubled.
    """
    lines = text.splitlines()
    if len(lines) < 2:
        return text

    # Check if data rows are wrapped: starts and ends with quote,
    # and parsing yields 1 field per row instead of many
    sample_line = lines[1].strip()
    if not (sample_line.startswith('"') and sample_line.endswith('"')):
        return text

    # Count fields in header vs first data row
    header_fields = len(list(csv.reader([lines[0]]))[0])
    data_fields = len(list(csv.reader([sample_line]))[0])
    if data_fields >= header_fields // 2:
        return text  # Not the wrapping pattern

    print("Detectado: Excel envolveu cada linha em aspas externas. Corrigindo...")
    fixed_lines = [lines[0]]  # Header is fine
    for line in lines[1:]:
        line = line.strip()
        if not line:
            continue
        # Strip outer quotes and un-double internal quotes
        if line.startswith('"') and line.endswith('"'):
            line = line[1:-1].replace('""', '"')
        fixed_lines.append(line)

    return "\n".join(fixed_lines)


def fix_csv(input_path: Path) -> None:
    encoding = detect_encoding(input_path)
    print(f"Encoding detectado: {encoding}")
    text = input_path.read_text(encoding=encoding)

    # 0) Fix Excel outer-quote wrapping
    text = unwrap_excel_rows(text)

    # 1) Try csv.Sniffer
    rows = None
    try:
        sample = "\n".join(text.splitlines()[:20])
        dialect = csv.Sniffer().sniff(sample, delimiters=",;\t|")
        print(f"Sniffer detectou delimitador: {repr(dialect.delimiter)}")
        rows = try_parse(text, dialect.delimiter)
    except csv.Error:
        print("Sniffer falhou, tentando delimitadores manualmente...")

    # 2) Try common delimiters
    if rows is None:
        for delim in [",", ";", "\t", "|"]:
            rows = try_parse(text, delim)
            if rows is not None:
                print(f"Delimitador detectado por fallback: {repr(delim)}")
                break

    # 3) Give up
    if rows is None:
        print("\nNao consegui parsear o CSV. Primeiras 5 linhas raw:\n")
        for line in text.splitlines()[:5]:
            print(repr(line))
        sys.exit(1)

    # Build output path
    stem = input_path.stem
    output_path = input_path.parent / f"{stem}_fixed.csv"

    header = rows[0]
    print(f"Colunas ({len(header)}): {', '.join(header[:6])}...")
    print(f"Linhas de dados: {len(rows) - 1}")

    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, quoting=csv.QUOTE_MINIMAL)
        writer.writerows(rows)

    print(f"\nSalvo em: {output_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Fix CSV corrompido pelo Excel")
    parser.add_argument("file", help="Caminho do CSV corrompido")
    args = parser.parse_args()

    path = Path(args.file)
    if not path.exists():
        print(f"Erro: arquivo '{path}' nao encontrado.")
        sys.exit(1)

    fix_csv(path)


if __name__ == "__main__":
    main()
