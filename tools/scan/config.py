"""Configuration loader for achadoAI scan tool."""

import os
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

import yaml
from dotenv import load_dotenv

SCAN_DIR = Path(__file__).parent
ENV_PATH = SCAN_DIR / ".env"
PRESETS_DIR = SCAN_DIR / "presets"
RESULTS_DIR = SCAN_DIR / "results"

LOCATION_CODE_BRAZIL = 2076
LANGUAGE_CODE = "pt"
VERSION = "1.0.0"

ALL_PLATFORMS = ["chatgpt", "gemini", "perplexity", "google_aio"]


@dataclass
class ScanConfig:
    brand_name: str
    domain: str
    brand_variations: list[str]
    keywords: list[str]
    city: str = "Campinas"
    platforms: list[str] = field(default_factory=lambda: list(ALL_PLATFORMS))
    output_dir: str = str(RESULTS_DIR)
    dataforseo_login: str = ""
    dataforseo_password: str = ""

    @property
    def brand_config(self) -> dict:
        return {
            "brand_name": self.brand_name,
            "domain": self.domain,
            "brand_variations": self.brand_variations,
        }


def generate_variations(brand_name: str) -> list[str]:
    """Generate brand variations from the brand name."""
    variations = [brand_name]

    # Lowercase version
    lower = brand_name.lower()
    if lower != brand_name:
        variations.append(lower)

    # Without spaces (slug-like)
    no_spaces = re.sub(r"\s+", "", lower)
    if no_spaces not in variations:
        variations.append(no_spaces)

    # Without accents (simple)
    accent_map = str.maketrans("áàãâéêíóôõúüçÁÀÃÂÉÊÍÓÔÕÚÜÇ", "aaaaeeiooouucAAAAEEIOOOUUC")
    no_accents = brand_name.translate(accent_map)
    if no_accents not in variations:
        variations.append(no_accents)

    no_accents_lower = no_accents.lower()
    if no_accents_lower not in variations:
        variations.append(no_accents_lower)

    return variations


def load_credentials() -> tuple[str, str]:
    """Load DataForSEO credentials from .env file."""
    load_dotenv(ENV_PATH)
    login = os.getenv("DATAFORSEO_LOGIN", "")
    password = os.getenv("DATAFORSEO_PASSWORD", "")
    if not login or not password:
        print("Erro: credenciais DataForSEO nao encontradas.")
        print(f"Crie o arquivo {ENV_PATH} com DATAFORSEO_LOGIN e DATAFORSEO_PASSWORD.")
        print(f"Veja {SCAN_DIR / '.env.example'} como modelo.")
        sys.exit(1)
    return login, password


def load_preset(preset_name: str, city: str) -> list[str]:
    """Load keywords from a preset YAML file."""
    preset_path = PRESETS_DIR / f"{preset_name}.yaml"
    if not preset_path.exists():
        print(f"Erro: preset '{preset_name}' nao encontrado em {PRESETS_DIR}/")
        available = [f.stem for f in PRESETS_DIR.glob("*.yaml")]
        if available:
            print(f"Presets disponiveis: {', '.join(available)}")
        sys.exit(1)

    with open(preset_path, "r", encoding="utf-8") as f:
        preset = yaml.safe_load(f)

    templates = preset.get("keyword_templates", [])
    especialidades = preset.get("especialidades", [])
    use_city = city or preset.get("default_city", "Campinas")

    # Generate keywords from first especialidade + all templates
    keywords = []
    if especialidades and templates:
        esp = especialidades[0]  # Use first as default
        for tpl in templates:
            kw = tpl.format(especialidade=esp, cidade=use_city)
            keywords.append(kw)

    return keywords


def load_config_file(config_path: str) -> ScanConfig:
    """Load full scan config from a YAML file."""
    path = Path(config_path)
    if not path.exists():
        print(f"Erro: arquivo de config '{config_path}' nao encontrado.")
        sys.exit(1)

    with open(path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f)

    login, password = load_credentials()

    brand_name = data["brand_name"]
    variations = data.get("brand_variations", generate_variations(brand_name))

    return ScanConfig(
        brand_name=brand_name,
        domain=data["domain"],
        brand_variations=variations,
        keywords=data["keywords"],
        city=data.get("city", "Campinas"),
        platforms=data.get("platforms", ALL_PLATFORMS),
        output_dir=data.get("output_dir", str(RESULTS_DIR)),
        dataforseo_login=login,
        dataforseo_password=password,
    )


def load_config_from_args(args) -> ScanConfig:
    """Build ScanConfig from CLI arguments."""
    login, password = load_credentials()

    # Determine keywords
    keywords = args.keywords
    if not keywords and args.preset:
        keywords = load_preset(args.preset, args.city)
    if not keywords:
        print("Erro: forneça --keywords ou --preset.")
        sys.exit(1)

    # Determine variations
    variations = args.variations if args.variations else generate_variations(args.brand)

    # Determine platforms
    platforms = args.platforms if args.platforms else ALL_PLATFORMS

    return ScanConfig(
        brand_name=args.brand,
        domain=args.domain,
        brand_variations=variations,
        keywords=keywords,
        city=args.city or "Campinas",
        platforms=platforms,
        output_dir=args.output_dir or str(RESULTS_DIR),
        dataforseo_login=login,
        dataforseo_password=password,
    )
