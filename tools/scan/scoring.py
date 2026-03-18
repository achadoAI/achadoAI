"""Scoring and classification for scan results."""

from typing import Any


def classify_cell(detection_result: dict[str, Any]) -> str:
    """Classify a keyword x platform cell.

    Returns: "present", "competitor", "absent", or "no_response"
    """
    if not detection_result.get("has_ai_response"):
        return "no_response"
    if detection_result.get("brand_mentioned") or detection_result.get("website_cited"):
        return "present"
    if detection_result.get("competitors_found"):
        return "competitor"
    return "absent"


def calculate_score(all_results: list[dict[str, Any]]) -> int:
    """Calculate global AI Visibility Score (0-100)."""
    cells_with_response = [r for r in all_results if r.get("has_ai_response")]
    if not cells_with_response:
        return 0
    present = sum(
        1 for r in cells_with_response
        if r.get("brand_mentioned") or r.get("website_cited")
    )
    return round((present / len(cells_with_response)) * 100)
