"""Terminal output (rich) and JSON export for scan results."""

import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from rich.console import Console
from rich.table import Table

from scoring import classify_cell

console = Console()

PLATFORM_LABELS = {
    "chatgpt": "ChatGPT",
    "gemini": "Gemini",
    "perplexity": "Perplexity",
    "google_aio": "Google AIO",
}

STATUS_ICONS = {
    "present": "[green]OK[/green]",
    "competitor": "[yellow]!![/yellow]",
    "absent": "[red]--[/red]",
    "no_response": "[dim]- [/dim]",
    "error": "[red]ER[/red]",
}


def print_status(status: str) -> None:
    """Print inline status icon for a cell."""
    console.print(STATUS_ICONS.get(status, "?"), end="")


def print_matrix(
    keywords: list[str], platforms: list[str], all_results: list[dict[str, Any]]
) -> None:
    """Print the presence/absence matrix as a rich table."""
    console.print()

    table = Table(title="Matriz de Presenca IA", show_lines=True)
    table.add_column("Keyword", style="bold", min_width=30)
    for p in platforms:
        table.add_column(PLATFORM_LABELS.get(p, p), justify="center", min_width=10)

    # Build lookup: (keyword, platform) -> result
    lookup: dict[tuple[str, str], dict] = {}
    for r in all_results:
        lookup[(r["keyword"], r["platform"])] = r

    for kw in keywords:
        row = [kw]
        for p in platforms:
            det = lookup.get((kw, p))
            if det is None:
                row.append("[dim]-[/dim]")
                continue
            if det.get("error"):
                row.append(STATUS_ICONS["error"])
                continue
            status = classify_cell(det)
            row.append(STATUS_ICONS.get(status, "?"))
        table.add_row(*row)

    console.print(table)
    console.print(
        "[dim]Legenda: [green]OK[/green] Presente  "
        "[yellow]!![/yellow] Concorrente aparece  "
        "[red]--[/red] Ausente  "
        "[dim]- [/dim] Sem AI Overview[/dim]"
    )


def print_competitors(all_results: list[dict[str, Any]]) -> None:
    """Print top competitors found across all results."""
    domain_counter: Counter[str] = Counter()
    domain_names: dict[str, str] = {}

    for r in all_results:
        for comp in r.get("competitors_found", []):
            d = comp.get("domain", "")
            if d:
                domain_counter[d] += 1
                if d not in domain_names:
                    domain_names[d] = comp.get("name", d)

    if not domain_counter:
        return

    console.print("\n[bold]Concorrentes mais citados:[/bold]")
    for i, (domain, count) in enumerate(domain_counter.most_common(5), 1):
        name = domain_names.get(domain, domain)
        display_name = name if name != domain else domain
        console.print(f"  {i}. {display_name} ({domain}) - {count} aparicao(oes)")


def print_score(score: int, total_cells: int, present_count: int) -> None:
    """Print the AI Visibility Score."""
    console.print(f"\n[bold]AI Visibility Score: {score}/100[/bold]")
    console.print(
        f"   Sua marca aparece em {present_count} de {total_cells} oportunidades de IA."
    )


def print_cost(total_cost: float) -> None:
    """Print total API cost."""
    console.print(f"\n[dim]Custo total estimado: ${total_cost:.3f} USD[/dim]")


def _slugify(text: str) -> str:
    """Create a filesystem-safe slug from text."""
    import re
    slug = text.lower().strip()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    slug = re.sub(r'-+', '-', slug)
    return slug[:50]


def save_results(
    config: Any,
    all_results: list[dict[str, Any]],
    score: int,
    total_cost: float,
) -> Path:
    """Save scan results to JSON and raw responses to separate files."""
    now = datetime.now(timezone.utc)
    timestamp = now.strftime("%Y%m%d_%H%M%S")
    brand_slug = _slugify(config.brand_name)
    dir_name = f"{brand_slug}_{timestamp}"

    output_base = Path(config.output_dir)
    scan_dir = output_base / dir_name
    raw_dir = scan_dir / "raw"
    raw_dir.mkdir(parents=True, exist_ok=True)

    # Classify each result
    cells_with_response = [r for r in all_results if r.get("has_ai_response")]
    present_count = sum(
        1 for r in cells_with_response
        if r.get("brand_mentioned") or r.get("website_cited")
    )
    competitor_count = sum(
        1 for r in cells_with_response
        if classify_cell(r) == "competitor"
    )
    absent_count = sum(
        1 for r in cells_with_response
        if classify_cell(r) == "absent"
    )
    no_response_count = sum(
        1 for r in all_results
        if not r.get("has_ai_response")
    )

    # Top competitors
    from collections import Counter
    domain_counter: Counter[str] = Counter()
    domain_names: dict[str, str] = {}
    for r in all_results:
        for comp in r.get("competitors_found", []):
            d = comp.get("domain", "")
            if d:
                domain_counter[d] += 1
                if d not in domain_names:
                    domain_names[d] = comp.get("name", d)

    top_competitors = [
        {"name": domain_names.get(d, d), "domain": d, "count": c}
        for d, c in domain_counter.most_common(5)
    ]

    # Save raw responses
    for r in all_results:
        raw_data = r.pop("raw", None)
        if raw_data:
            kw_slug = _slugify(r["keyword"])
            raw_path = raw_dir / f"{r['platform']}_{kw_slug}.json"
            with open(raw_path, "w", encoding="utf-8") as f:
                json.dump(raw_data, f, ensure_ascii=False, indent=2)

    # Remove error details from serialized results, keep clean output
    clean_results = []
    for r in all_results:
        clean = {
            "keyword": r.get("keyword", ""),
            "platform": r.get("platform", ""),
            "status": classify_cell(r) if not r.get("error") else "error",
            "brand_mentioned": r.get("brand_mentioned", False),
            "website_cited": r.get("website_cited", False),
            "mention_source": r.get("mention_source"),
            "citation_urls": r.get("citation_urls", []),
            "competitors_found": r.get("competitors_found", []),
            "has_ai_response": r.get("has_ai_response", False),
            "raw_text_snippet": r.get("raw_text_snippet", ""),
            "fan_out_queries": r.get("fan_out_queries", []),
            "api_cost_usd": r.get("cost", 0),
            "model_used": r.get("model", ""),
        }
        if r.get("error"):
            clean["error"] = r["error"]
            clean["error_message"] = r.get("message", "")
        clean_results.append(clean)

    output_data = {
        "scan_metadata": {
            "timestamp": now.isoformat(),
            "version": "1.0.0",
            "brand_name": config.brand_name,
            "domain": config.domain,
            "brand_variations": config.brand_variations,
            "city": config.city,
            "platforms": config.platforms,
            "keywords": config.keywords,
            "total_cost_usd": round(total_cost, 4),
            "score": score,
        },
        "results": clean_results,
        "summary": {
            "score": score,
            "total_cells": len(all_results),
            "cells_with_response": len(cells_with_response),
            "present": present_count,
            "competitor": competitor_count,
            "absent": absent_count,
            "no_response": no_response_count,
            "top_competitors": top_competitors,
        },
        "raw_responses_dir": str(raw_dir),
    }

    output_path = scan_dir / "scan_result.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    return output_path
