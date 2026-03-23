"""Configuration loader for achadoAI prospects tool."""

import os
import sys
from pathlib import Path

import yaml
from dotenv import load_dotenv

PROSPECTS_DIR = Path(__file__).parent
SCAN_DIR = PROSPECTS_DIR.parent / "scan"
CATEGORIES_PATH = PROSPECTS_DIR / "categories.yaml"
OUTPUT_DIR = PROSPECTS_DIR / "output"


def load_credentials() -> tuple[str, str]:
    """Load DataForSEO credentials from .env (scan dir or repo root)."""
    # Try scan/.env first, then repo root .env
    for env_path in [SCAN_DIR / ".env", PROSPECTS_DIR.parent.parent / ".env"]:
        if env_path.exists():
            load_dotenv(env_path)
            break

    login = os.getenv("DATAFORSEO_LOGIN", "")
    password = os.getenv("DATAFORSEO_PASSWORD", "")
    if not login or not password:
        print("Erro: credenciais DataForSEO nao encontradas.")
        print(f"Crie .env em {SCAN_DIR} ou na raiz do repo com DATAFORSEO_LOGIN e DATAFORSEO_PASSWORD.")
        sys.exit(1)
    return login, password


def load_categories_yaml() -> dict:
    """Load categories.yaml."""
    if not CATEGORIES_PATH.exists():
        print(f"Erro: {CATEGORIES_PATH} nao encontrado.")
        sys.exit(1)
    with open(CATEGORIES_PATH, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def get_categories_from_preset(preset_name: str) -> list[str]:
    """Get category list from a named preset in categories.yaml."""
    data = load_categories_yaml()
    preset = data.get(preset_name)
    if not preset or "categories" not in preset:
        print(f"Erro: preset '{preset_name}' nao encontrado em categories.yaml.")
        available = [k for k, v in data.items() if isinstance(v, dict) and "categories" in v]
        if available:
            print(f"Presets disponiveis: {', '.join(available)}")
        sys.exit(1)
    return preset["categories"]


def get_location(location_name: str) -> dict:
    """Get location config from categories.yaml."""
    data = load_categories_yaml()
    locations = data.get("locations", {})
    loc = locations.get(location_name)
    if not loc:
        print(f"Erro: localização '{location_name}' nao encontrada em categories.yaml.")
        available = list(locations.keys())
        if available:
            print(f"Localizações disponiveis: {', '.join(available)}")
        sys.exit(1)
    return loc
