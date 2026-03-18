export interface Vertical {
  id: string;
  label: string;
  body: string;
  idealFor: string[];
  cta: string;
}

export const verticals: Vertical[] = [
  {
    id: "saude",
    label: "Saúde Privada",
    body: "40 milhões de perguntas sobre saúde são feitas ao ChatGPT todos os dias. 89% das buscas de saúde no Google já exibem AI Overviews. Seus pacientes estão perguntando à IA qual clínica escolher. Se a resposta não inclui seu nome, eles marcam com quem aparece.\n\nOtimizamos a presença de clínicas e profissionais de saúde nas plataformas de IA com compliance regulatório (CFM) e integração com Doctoralia, Google Meu Negócio e Reclame Aqui.",
    idealFor: [
      "Dermatologia",
      "Odontologia",
      "Estética",
      "Oftalmologia",
      "Clínicas multidisciplinares",
      "Hospitais privados",
    ],
    cta: "Ver como funciona para saúde →",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    body: "Consumidores já pedem recomendações de produtos diretamente ao ChatGPT e Perplexity. As respostas citam marcas, comparam preços e indicam onde comprar. Se sua loja não aparece nessas respostas, você perde vendas para quem aparece sem sequer saber que perdeu.\n\nOtimizamos catálogos, páginas de produto e dados estruturados para que as IAs recomendem seus produtos como primeira opção. Integração com VTEX e Nuvemshop.",
    idealFor: [
      "Moda e vestuário",
      "Cosméticos",
      "Eletrônicos",
      "Casa e decoração",
      "Suplementos",
      "Marketplaces próprios",
    ],
    cta: "Ver como funciona para e-commerce →",
  },
  {
    id: "saas",
    label: "SaaS B2B",
    body: "Decisores de compra já usam IA para pesquisar ferramentas, comparar soluções e montar shortlists. Quando alguém pergunta \u201Cqual o melhor CRM para pequenas empresas?\u201D, a IA monta a resposta a partir de fontes que ela consegue verificar. Se seu SaaS não está nessas fontes, não entra na lista.\n\nOtimizamos sua presença em repositórios de conhecimento, diretórios de software, help centers e conteúdo técnico para que os modelos de linguagem reconheçam sua solução como referência na categoria.",
    idealFor: [
      "CRMs e ERPs",
      "Plataformas de marketing",
      "Ferramentas de produtividade",
      "Fintechs",
      "HRtechs",
      "Healthtechs",
    ],
    cta: "Ver como funciona para SaaS →",
  },
  {
    id: "local",
    label: "Serviços Locais",
    body: "\u201CMelhor encanador perto de mim.\u201D \u201CEscritório de advocacia em Campinas.\u201D \u201CAcademia com horário flexível.\u201D Essas perguntas já estão sendo feitas para IAs, não só para o Google. E a IA responde com base em dados estruturados, avaliações e consistência de informações entre plataformas.\n\nOtimizamos Google Meu Negócio, Bing Places, Apple Business Connect e diretórios locais para que a IA recomende seu negócio quando alguém busca na sua região.",
    idealFor: [
      "Escritórios de advocacia",
      "Contabilidade",
      "Academias",
      "Restaurantes",
      "Serviços residenciais",
      "Franquias locais",
    ],
    cta: "Ver como funciona para negócios locais →",
  },
];

export const verticalsHeadline =
  "Para empresas ambiciosas prontas para vencer na era da busca por IA.";
export const verticalsSubtitle =
  "De e-commerces a empresas SaaS, clínicas privadas e negócios locais, a achadoAI mantém sua marca visível conforme a busca evolui. À medida que mais pessoas recorrem ao ChatGPT, Perplexity e aos AI Overviews do Google para decidir, fazemos com que essas respostas levem até você.";
