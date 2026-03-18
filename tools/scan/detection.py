"""Brand detection logic for AI platform responses."""

import re
from typing import Any


# Simple accent normalization using unicodedata
import unicodedata

def _build_accent_map() -> dict[int, int]:
    """Build accent map using unicodedata for reliability."""
    result = {}
    for i in range(0x00C0, 0x0500):
        c = chr(i)
        decomposed = unicodedata.normalize("NFD", c)
        base = decomposed[0]
        if len(decomposed) > 1 and base.isascii() and base.isalpha():
            result[ord(c)] = ord(base)
    # Explicit extras
    result[ord("\u00e7")] = ord("c")  # ç -> c
    result[ord("\u00c7")] = ord("C")  # Ç -> C
    result[ord("\u00f1")] = ord("n")  # ñ -> n
    result[ord("\u00d1")] = ord("N")  # Ñ -> N
    return result

_ACCENT_MAP = _build_accent_map()


def _normalize(text: str) -> str:
    """Normalize text by removing accents and lowering case."""
    return text.translate(_ACCENT_MAP).lower()


def _extract_urls_from_text(text: str) -> list[str]:
    """Extract URLs from raw text (for Perplexity which embeds URLs in markdown)."""
    url_pattern = r'https?://[^\s\)\]\"\'<>]+'
    return re.findall(url_pattern, text)


def _domain_from_url(url: str) -> str:
    """Extract domain from URL string."""
    # Remove protocol
    domain = re.sub(r'^https?://', '', url)
    # Remove path
    domain = domain.split('/')[0]
    # Remove www.
    domain = re.sub(r'^www\.', '', domain)
    return domain.lower()


def detect_brand(response_data: dict[str, Any], platform: str, brand_config: dict) -> dict[str, Any]:
    """Detect brand presence in a platform response.

    Returns detection result dict with brand_mentioned, website_cited, etc.
    """
    domain = brand_config["domain"].lower()
    domain_no_www = re.sub(r'^www\.', '', domain)
    variations = brand_config.get("brand_variations", [brand_config["brand_name"]])

    has_response = response_data.get("has_response", False)

    result: dict[str, Any] = {
        "brand_mentioned": False,
        "website_cited": False,
        "mention_source": None,
        "citation_urls": [],
        "competitors_found": [],
        "has_ai_response": has_response,
        "raw_text_snippet": "",
    }

    if not has_response:
        return result

    # Get full text for regex matching
    markdown = response_data.get("markdown", "")
    result["raw_text_snippet"] = markdown[:200] if markdown else ""

    # --- Layer 1: Built-in brand detection (ChatGPT & Gemini only) ---
    if platform in ("chatgpt", "gemini"):
        brand_mentions = response_data.get("brand_mentions") or []
        brand_entities = response_data.get("brand_entities") or []

        if brand_mentions or brand_entities:
            # Check if any built-in mention matches our brand
            for mention in brand_mentions:
                mention_name = mention if isinstance(mention, str) else mention.get("name", "")
                if _matches_brand(mention_name, variations):
                    result["brand_mentioned"] = True
                    result["mention_source"] = "built-in"
                    break

            if not result["brand_mentioned"]:
                for entity in brand_entities:
                    entity_name = entity if isinstance(entity, str) else entity.get("name", "")
                    entity_domain = "" if isinstance(entity, str) else entity.get("domain", "")
                    if _matches_brand(entity_name, variations) or _matches_domain(entity_domain, domain_no_www):
                        result["brand_mentioned"] = True
                        result["mention_source"] = "built-in"
                        break

    # --- Layer 2: Domain match in sources/search_results ---
    sources = response_data.get("sources") or []
    search_results = response_data.get("search_results") or []
    aio_refs = response_data.get("ai_overview_references") or []

    all_source_entries = sources + search_results + aio_refs

    for entry in all_source_entries:
        entry_domain = entry.get("domain", "")
        entry_url = entry.get("url", "")
        if _matches_domain(entry_domain, domain_no_www):
            result["website_cited"] = True
            if entry_url and entry_url not in result["citation_urls"]:
                result["citation_urls"].append(entry_url)

    # For Perplexity: also check URLs embedded in text
    if platform == "perplexity" and markdown:
        urls_in_text = _extract_urls_from_text(markdown)
        for url in urls_in_text:
            url_domain = _domain_from_url(url)
            if _matches_domain(url_domain, domain_no_www):
                result["website_cited"] = True
                if url not in result["citation_urls"]:
                    result["citation_urls"].append(url)

    # --- Layer 3: Regex fallback on full text ---
    if not result["brand_mentioned"] and markdown:
        normalized_text = _normalize(markdown)
        for variation in variations:
            pattern = re.escape(_normalize(variation))
            if re.search(pattern, normalized_text):
                result["brand_mentioned"] = True
                result["mention_source"] = "regex"
                break

    # --- Competitor detection ---
    result["competitors_found"] = _detect_competitors(
        response_data, platform, domain_no_www, markdown
    )

    return result


def _matches_brand(name: str, variations: list[str]) -> bool:
    """Check if a name matches any brand variation."""
    if not name:
        return False
    normalized_name = _normalize(name)
    for variation in variations:
        if _normalize(variation) in normalized_name or normalized_name in _normalize(variation):
            return True
    return False


def _matches_domain(entry_domain: str, target_domain: str) -> bool:
    """Check if a domain matches the target domain."""
    if not entry_domain:
        return False
    clean = re.sub(r'^www\.', '', entry_domain.lower())
    return clean == target_domain or clean.endswith(f".{target_domain}")


def _detect_competitors(
    response_data: dict, platform: str, own_domain: str, markdown: str
) -> list[dict[str, str]]:
    """Extract competitor domains/brands from response."""
    competitors: dict[str, str] = {}  # domain -> name

    # From structured sources
    sources = response_data.get("sources") or []
    search_results = response_data.get("search_results") or []
    aio_refs = response_data.get("ai_overview_references") or []
    brand_entities = response_data.get("brand_entities") or []

    for entry in sources + aio_refs:
        d = re.sub(r'^www\.', '', (entry.get("domain", "") or "").lower())
        if d and not _matches_domain(d, own_domain):
            name = entry.get("source_name") or entry.get("title") or d
            competitors.setdefault(d, name)

    for entity in brand_entities:
        if isinstance(entity, dict):
            d = re.sub(r'^www\.', '', (entity.get("domain", "") or "").lower())
            name = entity.get("name", d)
            if d and not _matches_domain(d, own_domain):
                competitors.setdefault(d, name)

    # For Perplexity: extract URLs from text
    if platform == "perplexity" and markdown:
        urls_in_text = _extract_urls_from_text(markdown)
        for url in urls_in_text:
            d = _domain_from_url(url)
            if d and not _matches_domain(d, own_domain):
                competitors.setdefault(d, d)

    # Return top 5
    comp_list = [{"name": name, "domain": domain} for domain, name in competitors.items()]
    return comp_list[:5]
