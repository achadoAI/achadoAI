"""ChatGPT platform — DataForSEO LLM Scraper."""

from typing import Any

from .base import DataForSEOClient


ENDPOINT = "ai_optimization/chat_gpt/llm_scraper/live/advanced"
COST_PER_REQUEST = 0.004


def query(client: DataForSEOClient, keyword: str, location_code: int, language_code: str) -> dict[str, Any]:
    """Query ChatGPT via DataForSEO LLM Scraper."""
    payload = [{
        "keyword": keyword,
        "location_code": location_code,
        "language_code": language_code,
        "force_web_search": True,
    }]

    data = client.post(ENDPOINT, payload)

    if "error" in data:
        return {
            "platform": "chatgpt",
            "error": data["error"],
            "message": data.get("message", ""),
            "cost": 0,
            "has_response": False,
        }

    result = _extract_result(data)
    result["cost"] = COST_PER_REQUEST
    result["platform"] = "chatgpt"
    result["raw"] = data
    return result


def _extract_result(data: dict) -> dict[str, Any]:
    """Extract relevant fields from ChatGPT response."""
    tasks = data.get("tasks", [])
    if not tasks or not tasks[0].get("result"):
        return {"has_response": False}

    result = tasks[0]["result"][0] if tasks[0]["result"] else {}

    return {
        "has_response": True,
        "keyword": result.get("keyword", ""),
        "model": result.get("model", ""),
        "markdown": result.get("markdown", ""),
        "items": result.get("items", []),
        "sources": result.get("sources", []),
        "search_results": result.get("search_results", []),
        "brand_mentions": result.get("brand_mentions", []),
        "brand_entities": result.get("brand_entities", []),
        "fan_out_queries": result.get("fan_out_queries", []),
    }
