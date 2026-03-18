# T02 — Script Python Scan Manual | Prompt para Claude Code

## Contexto

Este é o **T02** do backlog MUST-HAVE NOW da achadoAI — uma agência brasileira de GEO (Generative Engine Optimization). O script é a ferramenta de trabalho do fundador solo para rodar scans de AI visibility manualmente em prospects antes de abordá-los. É o item que desbloqueia todo o outbound comercial.

**O que o script faz:** recebe dados de um prospect (marca, domínio, keywords, cidade) e consulta 4 plataformas de IA via DataForSEO para detectar onde a marca aparece e onde NÃO aparece. O output é uma matriz visual de presença/ausência que cria urgência comercial na call de vendas.

**O que o script NÃO é:** não é uma ferramenta web, não tem UI, não grava em banco de dados, não é o Quick Scan automatizado (esse vem depois). É um CLI Python que o fundador roda no terminal.

---

## Localização no repositório

Este projeto vive dentro do monorepo da LP achadoAI, em `tools/scan/`. A LP é Next.js — o scan é Python. Não interferem.

```
ACHADOAI/                        ← raiz do repo (LP Next.js)
├── src/                         ← LP (não mexer)
├── public/                      ← LP (não mexer)
├── tools/                       ← ferramentas internas
│   └── scan/                    ← ★ ESTE PROJETO ★
│       ├── requirements.txt
│       ├── .env.example
│       ├── scan.py              # Entry point CLI
│       ├── config.py            # Carrega .env, constantes
│       ├── platforms/
│       │   ├── __init__.py
│       │   ├── base.py          # DataForSEO client base
│       │   ├── chatgpt.py       # LLM Scraper
│       │   ├── gemini.py        # LLM Scraper
│       │   ├── perplexity.py    # LLM Responses
│       │   └── google_aio.py    # SERP API
│       ├── detection.py         # Brand detection
│       ├── scoring.py           # Score 0-100
│       ├── output.py            # Terminal (rich) + JSON
│       ├── presets/
│       │   └── saude_privada.yaml
│       └── results/             # gitignored
├── CLAUDE.md                    ← LP (já existe)
├── package.json                 ← LP
└── ...
```

**Importante:** criar tudo dentro de `tools/scan/`. Não alterar nada fora dessa pasta. Adicionar ao `.gitignore` da raiz:

```gitignore
# Python / scan tool
tools/scan/.env
tools/scan/results/
tools/scan/__pycache__/
tools/scan/platforms/__pycache__/
tools/scan/.venv/
*.pyc
```

---

## Decisões de arquitetura (já tomadas, não alterar)

1. **Python CLI puro** — sem framework web, sem FastAPI, sem Flask
2. **4 plataformas via DataForSEO:** ChatGPT (LLM Scraper), Gemini (LLM Scraper), Perplexity (LLM Responses), Google AIO (SERP API)
3. **Credenciais via `.env`** dentro de `tools/scan/` — `DATAFORSEO_LOGIN` e `DATAFORSEO_PASSWORD`
4. **Output:** terminal colorido (rich) + JSON salvo em `tools/scan/results/`
5. **Sem Supabase/banco** — apenas arquivos JSON locais
6. **Sem asyncio na v1** — chamadas sequenciais (simplicidade > performance nesta fase)
7. **Preset de vertical** — arquivo YAML com keywords default para Saúde Privada
8. **`brand_variations[]`** — array de variações da marca para regex matching

---

## Dependências (requirements.txt)

```
requests>=2.31.0
python-dotenv>=1.0.0
rich>=13.0.0
pyyaml>=6.0
```

Usar apenas libs estáveis e leves. Sem pandas, sem aiohttp, sem frameworks pesados.

---

## .env.example

```
DATAFORSEO_LOGIN=seu_login_aqui
DATAFORSEO_PASSWORD=sua_senha_aqui
```

---

## Endpoints DataForSEO — Specs completas

### 1. ChatGPT — LLM Scraper

```
POST https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/live/advanced
```

**Request body (array com 1 objeto):**
```json
[{
  "keyword": "melhor dermatologista em Campinas",
  "location_code": 2076,
  "language_code": "pt",
  "force_web_search": true
}]
```

**Autenticação:** HTTP Basic Auth (login:password)

**Response relevante (dentro de `tasks[0].result[0]`):**
- `keyword` — keyword usada
- `model` — modelo usado (ex: "gpt-4o")
- `markdown` — texto completo da resposta em markdown
- `items[]` — array de elementos estruturados:
  - `type: "chat_gpt_text"` — blocos de texto da resposta
  - `type: "chat_gpt_source"` — fontes citadas na resposta (com `domain`, `url`, `title`)
  - `type: "chat_gpt_local_businesses"` — negócios locais mencionados (OURO para saúde)
  - `type: "chat_gpt_products"` — produtos mencionados
  - `type: "chat_gpt_table"` — tabelas na resposta
  - `type: "chat_gpt_images"` — imagens
- `search_results[]` — todas as buscas web que o modelo consultou (com `domain`, `url`, `title`)
- `sources[]` — fontes efetivamente citadas na resposta final (com `domain`, `url`, `title`, `source_name`)
- `fan_out_queries[]` — buscas derivadas que o ChatGPT gerou internamente
- `brand_mentions[]` — menções de marca detectadas automaticamente
- `brand_entities[]` — entidades de marca estruturadas detectadas automaticamente

**Custo:** ~$0.004/request

**Detecção de marca:** DUPLA camada
1. Usar `brand_mentions` e `brand_entities` do response (built-in do DataForSEO)
2. Fallback: regex no campo `markdown` com `brand_variations[]`

**Detecção de citação do site:** Procurar domínio do prospect em `sources[].domain` e `search_results[].domain`

**Detecção de concorrentes:** Extrair todos os `domain` de `sources[]` e `brand_entities[]` que NÃO são do prospect

---

### 2. Gemini — LLM Scraper

```
POST https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/live/advanced
```

**Request body (array com 1 objeto):**
```json
[{
  "keyword": "melhor dermatologista em Campinas",
  "location_code": 2076,
  "language_code": "pt"
}]
```

**Response:** mesma estrutura do ChatGPT Scraper, mas com prefixo `gemini_` nos tipos:
- `gemini_text`, `gemini_table`, `gemini_images`
- `sources[]`, `search_results[]`, `brand_mentions[]`, `brand_entities[]`

**Custo:** ~$0.004/request

**Nota:** Gemini Scraper NÃO tem `force_web_search` — o Gemini decide sozinho quando usar busca.

---

### 3. Perplexity — LLM Responses

```
POST https://api.dataforseo.com/v3/ai_optimization/perplexity/llm_responses/live
```

**Request body (array com 1 objeto):**
```json
[{
  "user_prompt": "melhor dermatologista em Campinas",
  "model_name": "sonar-reasoning",
  "web_search": true,
  "web_search_country_iso_code": "BR",
  "temperature": 0.3,
  "max_output_tokens": 1000
}]
```

**Response relevante (dentro de `tasks[0].result[0]`):**
- `model_name` — modelo usado
- `items[0].message` — texto completo da resposta
- `web_search` — se usou busca web
- `input_tokens`, `output_tokens`

**NÃO retorna:** `brand_mentions`, `brand_entities`, `sources[]` estruturado. A detecção é 100% via regex no texto da resposta + domain matching em URLs encontradas no texto.

**Custo:** ~$0.001-0.01/request (base + tokens)

**Nota:** Perplexity Sonar models usam web search por default. `web_search: true` é redundante mas explícito.

---

### 4. Google AI Overviews — SERP API

```
POST https://api.dataforseo.com/v3/serp/google/organic/live/advanced
```

**Request body (array com 1 objeto):**
```json
[{
  "keyword": "melhor dermatologista em Campinas",
  "location_code": 2076,
  "language_code": "pt",
  "device": "desktop",
  "os": "windows",
  "load_async_ai_overview": true,
  "expand_ai_overview": true
}]
```

**Response relevante (dentro de `tasks[0].result[0].items[]`):**

Procurar item com `type: "ai_overview"`:
- `items[]` — sub-itens do AI Overview:
  - `type: "ai_overview_element"` — blocos de texto com `title`, `text`
  - `type: "ai_overview_reference"` — referências citadas com `domain`, `url`, `title`
- `markdown` — texto completo do AIO em markdown

Se NÃO existir item `ai_overview` no response, significa que Google não gerou AIO para essa query. Isso é um dado válido (registrar como "Sem AI Overview").

**Custo:** ~$0.002/request

**Detecção de marca:** regex no `markdown` do ai_overview + match de domínio em `ai_overview_reference[].domain`

---

## Lógica de detecção de marca (detection.py)

### Função principal: `detect_brand(response_data, platform, brand_config)`

`brand_config` contém:
```python
{
    "brand_name": "Clínica Exemplo",
    "domain": "clinicaexemplo.com.br",
    "brand_variations": [
        "Clínica Exemplo",
        "clinica exemplo",
        "Clinica Exemplo",
        "Dra. Maria Silva",  # médica dona
        "clinicaexemplo"
    ]
}
```

### Camada 1 — Built-in (ChatGPT e Gemini apenas)
- Verificar `brand_mentions[]` e `brand_entities[]` do response
- Se encontrar match → `brand_mentioned: True`

### Camada 2 — Domain match
- Verificar `sources[].domain` e `search_results[].domain` contra `brand_config.domain`
- Se encontrar → `website_cited: True`

### Camada 3 — Regex fallback (todas as plataformas)
- Aplicar regex case-insensitive para cada item em `brand_variations[]` no texto completo da resposta
- O texto completo = `markdown` (ChatGPT/Gemini/AIO) ou `items[0].message` (Perplexity)
- Normalizar acentos antes do match (unidecode ou similar simples: á→a, ã→a, ç→c)
- Se encontrar → `brand_mentioned: True`

### Detecção de concorrentes
- Extrair todos os domínios/marcas mencionados que NÃO são do prospect
- Retornar top 3-5 concorrentes por keyword × plataforma
- Para ChatGPT/Gemini: usar `brand_entities[]` + `sources[].domain`
- Para Perplexity: extrair URLs do texto (regex de URLs)
- Para AIO: usar `ai_overview_reference[].domain`

### Output da detecção (por keyword × plataforma)
```python
{
    "keyword": "melhor dermatologista em Campinas",
    "platform": "chatgpt",
    "brand_mentioned": True | False,
    "website_cited": True | False,
    "mention_source": "built-in" | "regex" | None,
    "citation_urls": ["https://clinicaexemplo.com.br/dermatologia"],
    "competitors_found": [
        {"name": "Clínica Rival", "domain": "clinicarival.com.br"},
        {"name": "Doctoralia", "domain": "doctoralia.com.br"}
    ],
    "has_ai_response": True | False,  # Para AIO: se gerou overview
    "raw_text_snippet": "...primeiros 200 chars da resposta..."  # Para debug
}
```

---

## Classificação e Score (scoring.py)

### Status por célula (keyword × plataforma)

```python
def classify_cell(detection_result):
    if not detection_result["has_ai_response"]:
        return "no_response"  # ➖ Sem resposta IA (só para AIO)
    if detection_result["brand_mentioned"] or detection_result["website_cited"]:
        return "present"       # ✅ Presente
    if detection_result["competitors_found"]:
        return "competitor"    # ⚠️ Concorrente aparece
    return "absent"            # ❌ Ausente
```

### Score global 0-100

```python
def calculate_score(all_results):
    cells_with_response = [r for r in all_results if r["has_ai_response"]]
    if not cells_with_response:
        return 0
    present = sum(1 for r in cells_with_response if r["brand_mentioned"] or r["website_cited"])
    return round((present / len(cells_with_response)) * 100)
```

---

## CLI (scan.py)

### Uso

```bash
# Rodar de dentro de tools/scan/
cd tools/scan

# Scan com argumentos diretos
python scan.py \
  --brand "Clínica Exemplo" \
  --domain "clinicaexemplo.com.br" \
  --variations "Clínica Exemplo" "Dra. Maria Silva" "clinicaexemplo" \
  --keywords "melhor dermatologista em Campinas" "dermatologista Campinas preço" "clínica dermatológica Campinas" \
  --city "Campinas"

# Scan com preset de vertical
python scan.py \
  --brand "Clínica Exemplo" \
  --domain "clinicaexemplo.com.br" \
  --variations "Clínica Exemplo" "Dra. Maria Silva" \
  --preset saude_privada \
  --city "Campinas"

# Scan com arquivo de config do prospect
python scan.py --config prospects/clinica-exemplo.yaml
```

### Argparse

| Argumento | Obrigatório | Descrição |
|---|---|---|
| `--brand` | Sim (ou --config) | Nome da marca |
| `--domain` | Sim (ou --config) | Domínio do site |
| `--variations` | Não | Lista de variações. Se omitido, gera automaticamente a partir de --brand |
| `--keywords` | Sim (ou --preset/--config) | 3 keywords para testar |
| `--city` | Não | Cidade (para contextualizar; default: "Campinas") |
| `--preset` | Não | Nome do preset YAML (ex: saude_privada) |
| `--config` | Não | Caminho para YAML do prospect com tudo preenchido |
| `--output-dir` | Não | Diretório de output (default: results/) |
| `--platforms` | Não | Plataformas para testar (default: todas). Ex: `--platforms chatgpt google_aio` |

### Fluxo principal

```python
def main():
    args = parse_args()
    config = load_config(args)  # Mescla args + preset + config file
    
    console.print(f"[bold]🔍 achadoAI Scan — {config.brand_name}[/bold]")
    console.print(f"Domínio: {config.domain}")
    console.print(f"Keywords: {', '.join(config.keywords)}")
    console.print(f"Plataformas: {', '.join(config.platforms)}")
    console.print()
    
    all_results = []
    total_cost = 0
    
    for keyword in config.keywords:
        for platform in config.platforms:
            console.print(f"  ⏳ {platform} — \"{keyword}\"...", end=" ")
            
            result = query_platform(platform, keyword, config)
            detection = detect_brand(result, platform, config.brand_config)
            detection["keyword"] = keyword
            detection["platform"] = platform
            
            all_results.append(detection)
            total_cost += result.get("cost", 0)
            
            status = classify_cell(detection)
            print_status(status)  # ✅, ⚠️, ❌, ou ➖
    
    # Score e output
    score = calculate_score(all_results)
    
    print_matrix(config.keywords, config.platforms, all_results)  # Tabela rich
    print_competitors(all_results)  # Top concorrentes
    print_score(score)
    print_cost(total_cost)
    
    # Salvar JSON
    save_results(config, all_results, score, total_cost)
    
    console.print(f"\n[dim]Resultados salvos em {output_path}[/dim]")
```

---

## Output terminal (output.py) — usar rich

### Matriz de presença

```
┌─────────────────────────────────────┬──────────┬─────────┬────────────┬────────────┐
│ Keyword                             │ ChatGPT  │ Gemini  │ Perplexity │ Google AIO │
├─────────────────────────────────────┼──────────┼─────────┼────────────┼────────────┤
│ melhor dermatologista em Campinas   │ ❌       │ ⚠️      │ ✅         │ ❌         │
│ dermatologista Campinas preço       │ ✅       │ ❌      │ ❌         │ ➖         │
│ clínica dermatológica Campinas      │ ⚠️       │ ❌      │ ❌         │ ⚠️         │
└─────────────────────────────────────┴──────────┴─────────┴────────────┴────────────┘

Legenda: ✅ Presente  ⚠️ Concorrente aparece  ❌ Ausente  ➖ Sem AI Overview
```

### Concorrentes identificados

```
🏥 Concorrentes mais citados:
  1. Doctoralia (doctoralia.com.br) — 4 aparições
  2. Clínica Rival (clinicarival.com.br) — 2 aparições
  3. Dr. João Silva — 1 aparição
```

### Score

```
📊 AI Visibility Score: 17/100
   Sua marca aparece em apenas 2 de 12 oportunidades de IA.
```

---

## Output JSON (salvo em tools/scan/results/)

Nome do arquivo: `{brand_slug}_{timestamp}.json`

```json
{
  "scan_metadata": {
    "timestamp": "2026-03-17T14:30:00-03:00",
    "version": "1.0.0",
    "brand_name": "Clínica Exemplo",
    "domain": "clinicaexemplo.com.br",
    "brand_variations": ["Clínica Exemplo", "Dra. Maria Silva", "clinicaexemplo"],
    "city": "Campinas",
    "platforms": ["chatgpt", "gemini", "perplexity", "google_aio"],
    "keywords": ["melhor dermatologista em Campinas", "..."],
    "total_cost_usd": 0.042,
    "score": 17
  },
  "results": [
    {
      "keyword": "melhor dermatologista em Campinas",
      "platform": "chatgpt",
      "status": "absent",
      "brand_mentioned": false,
      "website_cited": false,
      "mention_source": null,
      "citation_urls": [],
      "competitors_found": [
        {"name": "Doctoralia", "domain": "doctoralia.com.br"},
        {"name": "Clínica Rival", "domain": "clinicarival.com.br"}
      ],
      "has_ai_response": true,
      "raw_text_snippet": "Os melhores dermatologistas em Campinas incluem...",
      "fan_out_queries": ["dermatologista campinas avaliação", "..."],
      "api_cost_usd": 0.004,
      "model_used": "gpt-4o"
    }
  ],
  "summary": {
    "score": 17,
    "total_cells": 12,
    "cells_with_response": 11,
    "present": 2,
    "competitor": 3,
    "absent": 6,
    "no_response": 1,
    "top_competitors": [
      {"name": "Doctoralia", "domain": "doctoralia.com.br", "count": 4}
    ]
  },
  "raw_responses_dir": "results/clinica-exemplo_20260317_143000/raw/"
}
```

**Raw responses:** salvar o JSON bruto completo de cada chamada DataForSEO em `results/{slug}_{timestamp}/raw/{platform}_{keyword_slug}.json`. Isso permite re-processar sem rechamar a API.

---

## Preset YAML (presets/saude_privada.yaml)

```yaml
vertical: saude_privada
description: "Preset para clínicas e consultórios de saúde privada"
default_city: "Campinas"

# Keywords template — usar {especialidade} e {cidade} como placeholders
keyword_templates:
  - "melhor {especialidade} em {cidade}"
  - "{especialidade} {cidade} preço"
  - "clínica de {especialidade} {cidade}"

# Especialidades comuns para sugerir
especialidades:
  - dermatologista
  - dentista
  - oftalmologista
  - ortodontista
  - cirurgião plástico
  - nutricionista
  - fisioterapeuta

# Concorrentes conhecidos no ecossistema (para enriquecer detecção)
known_aggregators:
  - doctoralia.com.br
  - boavidasaude.com.br
  - medico123.com.br
```

---

## Tratamento de erros

### Por chamada de API
- Status code != 20000 → logar erro, marcar célula como "error", continuar próxima
- Timeout (>120s por chamada) → retry 1x, depois marcar como "timeout"
- Credenciais inválidas → parar imediatamente com mensagem clara
- Saldo insuficiente → parar com mensagem clara

### Geral
- Se TODAS as chamadas falharem → provavelmente credenciais/rede. Mensagem clara.
- Se UMA plataforma falhar em todas keywords → pular e notar no output
- Nunca crashar sem salvar os resultados parciais

---

## O que NÃO construir (explicitamente fora de escopo)

- ❌ Interface web ou API
- ❌ Gravação em banco de dados (Supabase)
- ❌ Asyncio / paralelismo
- ❌ Geração de PDF
- ❌ Envio de email
- ❌ Testes automatizados (pode adicionar depois)
- ❌ Docker
- ❌ CI/CD
- ❌ Rate limiting sofisticado
- ❌ Cache de respostas
- ❌ Sentimento ou posição ordinal
- ❌ Score de AI Readiness técnico

---

## Validação: como saber que está pronto

1. `cd tools/scan && python scan.py --brand "achadoAI" --domain "achadoai.com.br" --keywords "agência geo brasil" "otimização ia generativa" "geo aeo brasil" --city "Campinas"` roda sem erro
2. Matriz aparece colorida no terminal com ✅/⚠️/❌
3. JSON é salvo em `tools/scan/results/` com estrutura completa
4. Raw responses são salvas separadamente
5. Score 0-100 é calculado corretamente
6. Custo total em USD é exibido
7. Se uma keyword não gera AIO, aparece ➖ (não erro)
8. Se credenciais estiverem erradas, mensagem clara sem stack trace

---

## Notas para o Claude Code

- **Localização:** tudo dentro de `tools/scan/`. Não alterar nada fora dessa pasta, exceto adicionar entradas ao `.gitignore` da raiz.
- **Linguagem do código:** inglês (variáveis, funções, comentários). Output do terminal pode ser PT-BR.
- **Estilo:** PEP 8, type hints, docstrings curtas.
- **Não usar classes desnecessárias** — funções são suficientes para a maioria dos módulos. Classes só onde faça sentido (ex: base client para DataForSEO).
- **Testar com a API real** assim que estruturado. Usar o sandbox do DataForSEO se disponível, ou a API live com keywords baratas.
- **Location code Brasil = 2076**, language code = "pt"
- **Encoding:** respostas podem conter acentos (português). Garantir UTF-8 em todo o pipeline.
- **Virtual env:** criar um venv dentro de `tools/scan/` se necessário (`python -m venv .venv`). Adicionar `.venv/` ao gitignore.
