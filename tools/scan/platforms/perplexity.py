"""Perplexity platform — DataForSEO LLM Responses."""

from typing import Any

from .base import DataForSEOClient


ENDPOINT = "ai_optimization/perplexity/llm_responses/live"
COST_PER_REQUEST = 0.005  # ~$0.001-0.01, using midpoint estimate


def query(client: DataForSEOClient, keyword: str, location_code: int, language_code: str) -> dict[str, Any]:
    """Query Perplexity via DataForSEO LLM Responses."""
    payload = [{
        "user_prompt": keyword,
        "model_name": "sonar-reasoning",
        "web_search": True,
        "web_search_country_iso_code": "BR",
        "temperature": 0.3,
        "max_output_tokens": 1000,
    }]

    data = client.post(ENDPOINT, payload)

    if "error" in data:
        return {
            "platform": "perplexity",
            "error": data["error"],
            "message": data.get("message", ""),
            "cost": 0,
            "has_response": False,
        }

    result = _extract_result(data)
    result["cost"] = COST_PER_REQUEST
    result["platform"] = "perplexity"
    result["raw"] = data
    return result


def _extract_result(data: dict) -> dict[str, Any]:
    """Extract relevant fields from Perplexity response."""
    tasks = data.get("tasks", [])
    if not tasks or not tasks[0].get("result"):
        return {"has_response": False}

    result = tasks[0]["result"][0] if tasks[0]["result"] else {}
    items = result.get("items", [])
    message = items[0].get("message", "") if items else ""

    return {
        "has_response": bool(message),
        "keyword": result.get("keyword", ""),
        "model": result.get("model_name", ""),
        "markdown": message,
        "items": items,
        "sources": [],  # Perplexity doesn't return structured sources
        "search_results": [],
        "brand_mentions": [],  # Not available
        "brand_entities": [],  # Not available
        "fan_out_queries": [],
        "web_search": result.get("web_search", False),
        "input_tokens": result.get("input_tokens", 0),
        "output_tokens": result.get("output_tokens", 0),
    }
