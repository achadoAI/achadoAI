"""Google AI Overviews platform — DataForSEO SERP API."""

from typing import Any

from .base import DataForSEOClient


ENDPOINT = "serp/google/organic/live/advanced"
COST_PER_REQUEST = 0.002


def query(client: DataForSEOClient, keyword: str, location_code: int, language_code: str) -> dict[str, Any]:
    """Query Google SERP for AI Overviews."""
    payload = [{
        "keyword": keyword,
        "location_code": location_code,
        "language_code": language_code,
        "device": "desktop",
        "os": "windows",
        "load_async_ai_overview": True,
        "expand_ai_overview": True,
    }]

    data = client.post(ENDPOINT, payload)

    if "error" in data:
        return {
            "platform": "google_aio",
            "error": data["error"],
            "message": data.get("message", ""),
            "cost": 0,
            "has_response": False,
        }

    result = _extract_result(data)
    result["cost"] = COST_PER_REQUEST
    result["platform"] = "google_aio"
    result["raw"] = data
    return result


def _extract_result(data: dict) -> dict[str, Any]:
    """Extract AI Overview from SERP results."""
    tasks = data.get("tasks", [])
    if not tasks or not tasks[0].get("result"):
        return {"has_response": False}

    serp_result = tasks[0]["result"][0] if tasks[0]["result"] else {}
    serp_items = serp_result.get("items", [])

    # Find ai_overview item
    ai_overview = None
    for item in (serp_items or []):
        if item.get("type") == "ai_overview":
            ai_overview = item
            break

    if not ai_overview:
        return {
            "has_response": False,
            "keyword": serp_result.get("keyword", ""),
            "model": "",
            "markdown": "",
            "items": [],
            "sources": [],
            "search_results": [],
            "brand_mentions": [],
            "brand_entities": [],
            "fan_out_queries": [],
            "ai_overview_references": [],
        }

    # Extract references from ai_overview items
    aio_items = ai_overview.get("items", [])
    references = []
    markdown_parts = []

    for aio_item in (aio_items or []):
        item_type = aio_item.get("type", "")
        if item_type == "ai_overview_reference":
            references.append({
                "domain": aio_item.get("domain", ""),
                "url": aio_item.get("url", ""),
                "title": aio_item.get("title", ""),
            })
        elif item_type == "ai_overview_element":
            text = aio_item.get("text", "")
            if text:
                markdown_parts.append(text)

    markdown = ai_overview.get("markdown", "") or "\n".join(markdown_parts)

    return {
        "has_response": True,
        "keyword": serp_result.get("keyword", ""),
        "model": "",
        "markdown": markdown,
        "items": aio_items or [],
        "sources": references,
        "search_results": [],
        "brand_mentions": [],
        "brand_entities": [],
        "fan_out_queries": [],
        "ai_overview_references": references,
    }
