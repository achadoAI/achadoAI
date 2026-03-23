"""
Filtro de prospects DataForSEO → Planilha achadoAI
Reduz 1500+ prospects para ~80-150 qualificados

USO: python filtrar_prospects.py input.csv [--output prospects_filtrados.xlsx]
"""

import pandas as pd
import argparse
import re
import sys
import os

CATEGORY_MAP = {
    'Dermatologist': 'Dermatologista',
    'Dentist': 'Dentista',
    'Dental Clinic': 'Clínica Odontológica',
    'Cosmetic Dentist': 'Dentista Estético',
    'Orthodontist': 'Ortodontista',
    'Implant Dentist': 'Implantodontista',
    'Skin Care Clinic': 'Clínica de Estética',
    'Plastic Surgeon': 'Cirurgião Plástico',
    'Ophthalmologist': 'Oftalmologista',
    'Eye Care Center': 'Centro Oftalmológico',
    'Hair Removal Service': 'Depilação/Estética',
    'Beauty Salon': 'Salão de Beleza/Estética',
    'Medical Clinic': 'Clínica Médica',
    'Medical Spa': 'Clínica de Estética',
}

IDEAL_CATEGORIES = [
    'dermat', 'dentist', 'dental', 'orthodon', 'implant', 'skin', 'plastic',
    'ophthal', 'eye care', 'cosmetic', 'beauty', 'estetic', 'estet', 'spa',
    'hair removal', 'laser'
]

CAMPINAS_SP = ['campinas', 'são paulo', 'sao paulo', 'sp']

def format_phone(phone):
    if pd.isna(phone):
        return ''
    phone = re.sub(r'[^\d+]', '', str(phone))
    if phone and not phone.startswith('+'):
        phone = '+55' + phone
    return phone

def translate_category(cat):
    if pd.isna(cat):
        return ''
    for en, pt in CATEGORY_MAP.items():
        if en.lower() in str(cat).lower():
            return pt
    return str(cat)

def is_relevant_category(cat):
    if pd.isna(cat):
        return False
    cat_lower = str(cat).lower()
    return any(kw in cat_lower for kw in IDEAL_CATEGORIES)

def calculate_icp_score(row):
    score = 0
    cat = str(row.get('category', '')).lower()
    if any(kw in cat for kw in ['dermat', 'dentist', 'dental', 'orthodon', 'estetic', 'estet', 'cosmetic', 'ophthal', 'plastic', 'implant']):
        score += 1
    elif any(kw in cat for kw in ['skin', 'beauty', 'spa', 'hair', 'laser', 'eye']):
        score += 0.5
    city = str(row.get('city', '')).lower()
    if 'campinas' in city or 'são paulo' in city or 'sao paulo' in city:
        score += 1
    elif any(c in city for c in ['jundiaí', 'sorocaba', 'ribeirão preto', 'santos', 'piracicaba']):
        score += 0.5
    if pd.notna(row.get('domain')) and str(row['domain']).strip():
        score += 0.5
    if row.get('is_claimed') in [True, 'VERDADEIRO', 'TRUE', 'true', 1]:
        score += 0.5
    rating = row.get('rating', 0)
    reviews = row.get('reviews', 0)
    try:
        rating = float(rating) if pd.notna(rating) else 0
        reviews = int(reviews) if pd.notna(reviews) else 0
    except (ValueError, TypeError):
        rating, reviews = 0, 0
    if rating >= 4.5 and reviews >= 30:
        score += 1
    elif rating >= 4.0 and reviews >= 10:
        score += 0.5
    return min(round(score, 1), 5)

def main():
    parser = argparse.ArgumentParser(description='Filtra prospects DataForSEO para achadoAI')
    parser.add_argument('input', help='CSV exportado do DataForSEO')
    parser.add_argument('--output', '-o', default='prospects_filtrados.xlsx', help='Arquivo de saída')
    parser.add_argument('--min-score', type=float, default=3.0, help='Score ICP mínimo (default: 3.0)')
    parser.add_argument('--min-rating', type=float, default=3.5, help='Rating mínimo no GBP (default: 3.5)')
    parser.add_argument('--min-reviews', type=int, default=5, help='Reviews mínimos (default: 5)')
    args = parser.parse_args()

    input_path = args.input
    if not os.path.exists(input_path):
        alt_path = os.path.join(os.path.dirname(__file__), 'output', os.path.basename(input_path))
        if os.path.exists(alt_path):
            input_path = alt_path
        else:
            print(f"Erro: arquivo '{args.input}' não encontrado.")
            print(f"Também procurei em: {alt_path}")
            sys.exit(1)

    print(f"Lendo {input_path}...")
    try:
        df = pd.read_csv(input_path, encoding='utf-8')
    except UnicodeDecodeError:
        df = pd.read_csv(input_path, encoding='latin-1')

    total = len(df)
    print(f"Total de prospects: {total}")

    # Filtro 1: categoria relevante
    df = df[df['category'].apply(is_relevant_category)]
    print(f"Após filtro de categoria: {len(df)}")

    # Filtro 2: tem domínio
    df = df[df['domain'].notna() & (df['domain'].str.strip() != '')]
    print(f"Após filtro de domínio: {len(df)}")

    # Filtro 3: GBP claimed
    df = df[df['is_claimed'].isin([True, 'VERDADEIRO', 'TRUE', 'true', 1])]
    print(f"Após filtro GBP claimed: {len(df)}")

    # Filtro 4: rating mínimo
    df['rating'] = pd.to_numeric(df['rating'], errors='coerce')
    df = df[df['rating'] >= args.min_rating]
    print(f"Após filtro rating >= {args.min_rating}: {len(df)}")

    # Filtro 5: reviews mínimos
    df['reviews'] = pd.to_numeric(df['reviews'], errors='coerce').fillna(0).astype(int)
    df = df[df['reviews'] >= args.min_reviews]
    print(f"Após filtro reviews >= {args.min_reviews}: {len(df)}")

    # Calcular score ICP
    df['icp_score_calc'] = df.apply(calculate_icp_score, axis=1)

    # Filtro 6: score mínimo
    df = df[df['icp_score_calc'] >= args.min_score]
    print(f"Após filtro score >= {args.min_score}: {len(df)}")

    # Ordenar por score desc, depois reviews desc
    df = df.sort_values(['icp_score_calc', 'reviews'], ascending=[False, False])

    # Montar formato da planilha Prospects
    output = pd.DataFrame()
    output['ID'] = range(1, len(df) + 1)
    output['Clínica / Marca'] = df['title'].values
    output['Especialidade'] = df['category'].apply(translate_category).values
    output['Cidade'] = df['city'].values
    output['Bairro'] = df['borough'].values
    output['Domínio'] = df['domain'].values
    output['GBP (link)'] = df['gbp_url'].values
    output['Doctoralia'] = ''
    output['Instagram'] = ''
    output['Decisor (nome)'] = ''
    output['Cargo'] = ''
    output['WhatsApp'] = df['phone'].apply(format_phone).values
    output['Email'] = ''
    output['LinkedIn'] = ''
    output['Tem site?'] = df['domain'].apply(lambda x: 'Sim' if pd.notna(x) and str(x).strip() else 'Não').values
    output['Tem GBP?'] = 'Sim'
    output['Google Ads ativo?'] = ''
    output['Invest. digital est.'] = ''
    output['Score ICP (1-5)'] = df['icp_score_calc'].values
    output['Scan rodado?'] = ''
    output['Score AI Visibility'] = ''
    output['Data scan'] = ''
    output['Status'] = ''
    output['Canal abordagem'] = ''
    output['Data 1º contato'] = ''
    output['Data follow-up'] = ''
    output['Call agendada?'] = ''
    output['Data call'] = ''
    output['Proposta enviada?'] = ''
    output['Data proposta'] = ''
    output['Resultado'] = ''
    output['Notas'] = df.apply(
        lambda r: f"Rating: {r['rating']} | Reviews: {r['reviews']} | Topics: {r.get('place_topics', '')}"[:200],
        axis=1
    ).values

    output.to_excel(args.output, index=False, sheet_name='Prospects')
    print(f"\n[OK] Exportado {len(output)} prospects para {args.output}")
    print(f"\nDistribuição de scores:")
    print(output['Score ICP (1-5)'].value_counts().sort_index(ascending=False).to_string())
    print(f"\nTop especialidades:")
    print(output['Especialidade'].value_counts().head(10).to_string())
    print(f"\nPróximo passo: abrir {args.output} no Excel, copiar para a planilha achadoai-prospects.xlsx, e usar Claude no Excel para enriquecer.")

if __name__ == '__main__':
    main()
