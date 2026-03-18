"""DataForSEO API base client with auth and retry."""

import json
import time
from pathlib import Path
from typing import Any

import requests


class DataForSEOClient:
    """Base client for DataForSEO API calls."""

    BASE_URL = "https://api.dataforseo.com/v3"
    TIMEOUT = 120  # seconds

    def __init__(self, login: str, password: str):
        self.auth = (login, password)
        self.session = requests.Session()
        self.session.auth = self.auth
        self.session.headers.update({"Content-Type": "application/json"})

    def post(self, endpoint: str, payload: list[dict], max_retries: int = 1) -> dict[str, Any]:
        """Make a POST request to DataForSEO API with retry on timeout."""
        url = f"{self.BASE_URL}/{endpoint}"
        last_error = None

        for attempt in range(max_retries + 1):
            try:
                response = self.session.post(
                    url,
                    data=json.dumps(payload),
                    timeout=self.TIMEOUT,
                )
            except requests.exceptions.Timeout:
                last_error = "timeout"
                if attempt < max_retries:
                    time.sleep(2)
                    continue
                return {"error": "timeout", "message": f"Request timed out after {self.TIMEOUT}s"}
            except requests.exceptions.ConnectionError as e:
                return {"error": "connection", "message": str(e)}
            except requests.exceptions.RequestException as e:
                return {"error": "request", "message": str(e)}

            # Parse response
            try:
                data = response.json()
            except ValueError:
                return {"error": "parse", "message": "Invalid JSON response from API"}

            # Check for auth errors
            status_code = data.get("status_code", 0)
            if status_code == 40100:
                return {"error": "auth", "message": "Credenciais DataForSEO invalidas. Verifique DATAFORSEO_LOGIN e DATAFORSEO_PASSWORD."}
            if status_code == 40200:
                return {"error": "balance", "message": "Saldo DataForSEO insuficiente. Recarregue sua conta."}

            # Check task-level errors
            tasks = data.get("tasks", [])
            if tasks:
                task = tasks[0]
                task_status = task.get("status_code", 0)
                if task_status != 20000:
                    msg = task.get("status_message", "Unknown API error")
                    return {"error": "api", "message": f"DataForSEO error {task_status}: {msg}"}

            return data

        return {"error": last_error or "unknown", "message": "Request failed after retries"}

    def save_raw_response(self, data: dict, output_path: Path) -> None:
        """Save raw API response to a JSON file."""
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
