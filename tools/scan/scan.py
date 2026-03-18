"""achadoAI Scan — CLI tool for AI visibility analysis."""

import argparse
import sys
from typing import Any

from rich.console import Console

from config import (
    ALL_PLATFORMS,
    LANGUAGE_CODE,
    LOCATION_CODE_BRAZIL,
    RESULTS_DIR,
    ScanConfig,
    load_config_file,
    load_config_from_args,
)
from detection import detect_brand
from output import (
    console,
    print_competitors,
    print_cost,
    print_matrix,
    print_score,
    print_status,
    save_results,
)
from platforms.base import DataForSEOClient
from platforms import chatgpt, gemini, perplexity, google_aio
from scoring import calculate_score, classify_cell


PLATFORM_MODULES = {
    "chatgpt": chatgpt,
    "gemini": gemini,
    "perplexity": perplexity,
    "google_aio": google_aio,
}


def parse_args() -> argparse.Namespace:
    """Parse CLI arguments."""
    parser = argparse.ArgumentParser(
        description="achadoAI Scan - Analise de visibilidade em plataformas de IA",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    parser.add_argument("--brand", type=str, help="Nome da marca")
    parser.add_argument("--domain", type=str, help="Dominio do site")
    parser.add_argument("--variations", nargs="+", help="Variacoes da marca para deteccao")
    parser.add_argument("--keywords", nargs="+", help="Keywords para testar (3 recomendado)")
    parser.add_argument("--city", type=str, default="Campinas", help="Cidade (default: Campinas)")
    parser.add_argument("--preset", type=str, help="Nome do preset YAML (ex: saude_privada)")
    parser.add_argument("--config", type=str, help="Caminho para YAML de config do prospect")
    parser.add_argument("--output-dir", type=str, help=f"Diretorio de output (default: {RESULTS_DIR})")
    parser.add_argument(
        "--platforms",
        nargs="+",
        choices=ALL_PLATFORMS,
        help="Plataformas para testar (default: todas)",
    )

    return parser.parse_args()


def load_config(args: argparse.Namespace) -> ScanConfig:
    """Load config from args, config file, or preset."""
    if args.config:
        return load_config_file(args.config)

    if not args.brand or not args.domain:
        console.print("[red]Erro: --brand e --domain sao obrigatorios (ou use --config).[/red]")
        sys.exit(1)

    return load_config_from_args(args)


def query_platform(
    platform: str, keyword: str, config: ScanConfig, client: DataForSEOClient
) -> dict[str, Any]:
    """Query a specific platform via DataForSEO."""
    module = PLATFORM_MODULES.get(platform)
    if not module:
        return {"error": "unknown_platform", "message": f"Plataforma '{platform}' desconhecida", "has_response": False, "cost": 0}

    return module.query(client, keyword, LOCATION_CODE_BRAZIL, LANGUAGE_CODE)


def main() -> None:
    """Main entry point."""
    args = parse_args()
    config = load_config(args)

    # Initialize DataForSEO client
    client = DataForSEOClient(config.dataforseo_login, config.dataforseo_password)

    console.print(f"\n[bold]achadoAI Scan - {config.brand_name}[/bold]")
    console.print(f"Dominio: {config.domain}")
    console.print(f"Keywords: {', '.join(config.keywords)}")
    console.print(f"Plataformas: {', '.join(config.platforms)}")
    console.print()

    all_results: list[dict[str, Any]] = []
    total_cost: float = 0
    has_fatal_error = False

    for keyword in config.keywords:
        console.print(f'  [bold]"{keyword}"[/bold]')
        for platform in config.platforms:
            console.print(f"    {platform}... ", end="")

            result = query_platform(platform, keyword, config, client)

            # Check for fatal errors (auth, balance)
            if result.get("error") in ("auth", "balance"):
                console.print(f"[red]{result['message']}[/red]")
                has_fatal_error = True
                break

            if result.get("error"):
                detection: dict[str, Any] = {
                    "keyword": keyword,
                    "platform": platform,
                    "brand_mentioned": False,
                    "website_cited": False,
                    "mention_source": None,
                    "citation_urls": [],
                    "competitors_found": [],
                    "has_ai_response": False,
                    "raw_text_snippet": "",
                    "error": result["error"],
                    "message": result.get("message", ""),
                    "cost": 0,
                    "model": "",
                    "fan_out_queries": [],
                    "raw": result.get("raw"),
                }
                all_results.append(detection)
                console.print(f"[red]erro: {result.get('message', result['error'])}[/red]")
                continue

            detection = detect_brand(result, platform, config.brand_config)
            detection["keyword"] = keyword
            detection["platform"] = platform
            detection["cost"] = result.get("cost", 0)
            detection["model"] = result.get("model", "")
            detection["fan_out_queries"] = result.get("fan_out_queries", [])
            detection["raw"] = result.get("raw")

            all_results.append(detection)
            total_cost += result.get("cost", 0)

            status = classify_cell(detection)
            print_status(status)
            console.print()

        if has_fatal_error:
            break

    if not all_results:
        console.print("\n[red]Nenhum resultado obtido. Verifique credenciais e conexao.[/red]")
        sys.exit(1)

    # Score
    score = calculate_score(all_results)
    cells_with_response = [r for r in all_results if r.get("has_ai_response")]
    present_count = sum(
        1 for r in cells_with_response
        if r.get("brand_mentioned") or r.get("website_cited")
    )

    # Output
    print_matrix(config.keywords, config.platforms, all_results)
    print_competitors(all_results)
    print_score(score, len(all_results), present_count)
    print_cost(total_cost)

    # Save
    output_path = save_results(config, all_results, score, total_cost)
    console.print(f"\n[dim]Resultados salvos em {output_path}[/dim]")


if __name__ == "__main__":
    main()
