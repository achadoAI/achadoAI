"""achadoAI — Prospect fetcher via DataForSEO Business Listings API."""

import argparse
import csv
import sys
from datetime import datetime
from pathlib import Path

import requests
from rich.console import Console

from config import (
    OUTPUT_DIR,
    get_categories_from_preset,
    get_location,
    load_credentials,
)

console = Console()

API_URL = "https://api.dataforseo.com/v3/business_data/business_listings/search/live"


# ---------------------------------------------------------------------------
# API
# ---------------------------------------------------------------------------

def fetch_listings(
    category: str,
    location: dict,
    min_rating: float,
    min_reviews: int,
    claimed_only: bool,
    limit: int,
    auth: tuple[str, str],
) -> tuple[list[dict], float]:
    """Fetch business listings for one category + location. Returns (items, cost)."""
    coordinate = f"{location['lat']},{location['lon']},{location['radius_km']}"

    filters = [
        ["rating.value", ">=", min_rating],
        "and",
        ["rating.votes_count", ">=", min_reviews],
    ]

    payload = [{
        "categories": [category],
        "location_coordinate": coordinate,
        "order_by": ["rating.value,desc"],
        "filters": filters,
        "limit": min(limit, 1000),
    }]
    if claimed_only:
        payload[0]["is_claimed"] = True

    all_items: list[dict] = []
    total_cost = 0.0

    while True:
        try:
            resp = requests.post(API_URL, json=payload, auth=auth, timeout=60)
            resp.raise_for_status()
        except requests.RequestException as e:
            console.print(f"    [red]Erro HTTP: {e}[/red]")
            break

        data = resp.json()
        task = data.get("tasks", [{}])[0]
        status_code = task.get("status_code")

        if status_code != 20000:
            msg = task.get("status_message", "unknown error")
            console.print(f"    [red]API erro {status_code}: {msg}[/red]")
            break

        total_cost += task.get("cost", 0)
        result = (task.get("result") or [{}])[0]
        items = result.get("items") or []
        total_count = result.get("total_count", 0)
        all_items.extend(items)

        # Inform if there are more results than requested
        if total_count > limit and len(all_items) >= limit:
            console.print(
                f"    [yellow]Existem {total_count} resultados, mas limit={limit}. "
                f"Aumente --limit para buscar mais.[/yellow]"
            )
            break

        # Pagination via offset_token
        offset_token = result.get("offset_token")
        if offset_token and len(all_items) < limit:
            payload[0]["offset_token"] = offset_token
            payload[0]["limit"] = min(limit - len(all_items), 1000)
        else:
            break

    return all_items[:limit], total_cost


# ---------------------------------------------------------------------------
# Transform / qualify
# ---------------------------------------------------------------------------

def normalize_item(item: dict, search_category: str) -> dict:
    """Flatten an API item into a prospect dict."""
    rating = item.get("rating") or {}
    address_info = item.get("address_info") or {}

    # Top 5 place topics
    place_topics_raw = item.get("place_topics") or {}
    if isinstance(place_topics_raw, dict):
        sorted_topics = sorted(place_topics_raw.items(), key=lambda x: x[1], reverse=True)[:5]
        place_topics = ", ".join(f"{k}: {v}" for k, v in sorted_topics)
    elif isinstance(place_topics_raw, list):
        topics = []
        for t in place_topics_raw[:5]:
            if isinstance(t, dict):
                topics.append(f"{t.get('topic_name', '')}: {t.get('mentions_count', 0)}")
            else:
                topics.append(str(t))
        place_topics = ", ".join(topics)
    else:
        place_topics = ""

    cid = item.get("cid") or ""
    gbp_url = f"https://www.google.com/maps?cid={cid}" if cid else ""

    return {
        "title": item.get("title", ""),
        "category": item.get("category") or search_category,
        "city": address_info.get("city", ""),
        "borough": address_info.get("borough", ""),
        "domain": item.get("domain", ""),
        "url": item.get("url", ""),
        "phone": item.get("phone", ""),
        "rating_value": rating.get("value", 0) or 0,
        "votes_count": rating.get("votes_count", 0) or 0,
        "is_claimed": item.get("is_claimed", False),
        "address": item.get("address", ""),
        "place_id": item.get("place_id", ""),
        "cid": cid,
        "latitude": item.get("latitude", ""),
        "longitude": item.get("longitude", ""),
        "place_topics": place_topics,
        "gbp_url": gbp_url,
    }


def deduplicate(businesses: list[dict]) -> list[dict]:
    """Deduplicate by CID, then by domain+city."""
    seen_cids: set[str] = set()
    seen_domain_city: set[str] = set()
    unique: list[dict] = []

    for b in businesses:
        cid = b.get("cid", "")
        if cid:
            if cid in seen_cids:
                continue
            seen_cids.add(cid)
        else:
            key = f"{b.get('domain', '')}|{b.get('city', '')}".lower()
            if key in seen_domain_city:
                continue
            seen_domain_city.add(key)
        unique.append(b)

    return unique


def score_icp(business: dict) -> int:
    """Score a prospect 1-5 based on ICP criteria."""
    score = 0

    if business.get("domain"):
        score += 2
    else:
        return 1

    if business.get("rating_value", 0) >= 4.0:
        score += 1

    if business.get("votes_count", 0) >= 20:
        score += 1

    if business.get("is_claimed"):
        score += 1

    return min(score, 5)


# ---------------------------------------------------------------------------
# Export
# ---------------------------------------------------------------------------

CSV_COLUMNS = [
    "icp_score", "title", "category", "city", "borough", "domain", "phone",
    "rating", "reviews", "is_claimed", "address", "place_id", "cid",
    "latitude", "longitude", "place_topics", "url", "gbp_url",
]


def export_csv(prospects: list[dict], output_path: Path) -> None:
    """Write prospects to CSV."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS, extrasaction="ignore")
        writer.writeheader()
        for p in prospects:
            writer.writerow({
                "icp_score": p["icp_score"],
                "title": p["title"],
                "category": p["category"],
                "city": p["city"],
                "borough": p["borough"],
                "domain": p["domain"],
                "phone": p["phone"],
                "rating": p["rating_value"],
                "reviews": p["votes_count"],
                "is_claimed": p["is_claimed"],
                "address": p["address"],
                "place_id": p["place_id"],
                "cid": p["cid"],
                "latitude": p["latitude"],
                "longitude": p["longitude"],
                "place_topics": p["place_topics"],
                "url": p["url"],
                "gbp_url": p["gbp_url"],
            })


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="achadoAI — Busca prospects via DataForSEO Business Listings"
    )
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--categories", nargs="+", help="Categorias DataForSEO (ex: dermatologist dentist)")
    group.add_argument("--preset", help="Nome do preset em categories.yaml (ex: saude_privada)")

    parser.add_argument("--location", nargs="+", required=True, help="Localização(ões) do YAML (ex: campinas sao_paulo)")
    parser.add_argument("--min-rating", type=float, default=3.5, help="Rating mínimo (default: 3.5)")
    parser.add_argument("--min-reviews", type=int, default=5, help="Reviews mínimas (default: 5)")
    parser.add_argument("--has-website", action="store_true", help="Filtrar só quem tem site")
    parser.add_argument("--claimed-only", action="store_true", default=True, help="Só verificados (default: True)")
    parser.add_argument("--no-claimed-only", dest="claimed_only", action="store_false", help="Incluir não verificados")
    parser.add_argument("--limit", type=int, default=200, help="Limite por categoria x localização (default: 200)")
    parser.add_argument("--output", help="Caminho do CSV de saída")

    return parser.parse_args()


def main() -> None:
    args = parse_args()
    login, password = load_credentials()
    auth = (login, password)

    # Resolve categories
    categories = args.categories or get_categories_from_preset(args.preset)

    # Resolve locations
    locations = [get_location(loc) for loc in args.location]

    # Output path
    if args.output:
        output_path = Path(args.output)
    else:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_path = OUTPUT_DIR / f"prospects_{timestamp}.csv"

    console.print(f"\n[bold]achadoAI Prospects[/bold]")
    console.print(f"  Categorias: {', '.join(categories)}")
    console.print(f"  Localizações: {', '.join(loc['name'] for loc in locations)}")
    console.print(f"  Filtros: rating >= {args.min_rating}, reviews >= {args.min_reviews}, "
                  f"claimed={args.claimed_only}, has_website={args.has_website}\n")

    all_businesses: list[dict] = []
    total_cost = 0.0

    for location in locations:
        for category in categories:
            console.print(f"  [cyan]>[/cyan] {category} em {location['name']}...")

            items, cost = fetch_listings(
                category=category,
                location=location,
                min_rating=args.min_rating,
                min_reviews=args.min_reviews,
                claimed_only=args.claimed_only,
                limit=args.limit,
                auth=auth,
            )

            normalized = [normalize_item(item, category) for item in items]
            all_businesses.extend(normalized)
            total_cost += cost

            console.print(f"    -> {len(items)} encontrados (${cost:.4f})")

    # Filter has-website if requested
    if args.has_website:
        all_businesses = [b for b in all_businesses if b.get("domain")]

    # Deduplicate
    unique = deduplicate(all_businesses)

    # Score ICP
    for b in unique:
        b["icp_score"] = score_icp(b)

    # Sort by icp_score desc, then rating desc
    unique.sort(key=lambda x: (x["icp_score"], x["rating_value"]), reverse=True)

    # Export
    export_csv(unique, output_path)

    # Summary
    console.print(f"\n[bold]Resumo:[/bold]")
    console.print(f"   Total encontrados: {len(all_businesses)}")
    console.print(f"   Unicos (dedup): {len(unique)}")
    console.print(f"   Custo total: ${total_cost:.4f}")
    console.print(f"   Arquivo: {output_path}")

    # Score distribution
    scores = {}
    for b in unique:
        s = b["icp_score"]
        scores[s] = scores.get(s, 0) + 1
    console.print(f"   Distribuicao ICP: {dict(sorted(scores.items(), reverse=True))}")


if __name__ == "__main__":
    main()
