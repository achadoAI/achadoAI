import type { Metadata } from "next";
import { BUILD_DATE, PRIVACY_URL, SEO_TITLE } from "@/data/seo";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SEO_TITLE}`,
  description:
    "Política de privacidade da achadoAI para navegação no site institucional e contatos comerciais.",
  alternates: {
    canonical: PRIVACY_URL,
  },
};

const sections = [
  {
    title: "1. Dados que podemos tratar",
    body: "Podemos tratar dados que você envia voluntariamente ao entrar em contato com a achadoAI, como nome, email, empresa e contexto comercial. Também podemos registrar dados básicos de navegação, interação e performance, como páginas visitadas, cliques em CTAs, profundidade de rolagem, abertura de perguntas frequentes e métricas técnicas da experiência da página, quando ferramentas de analytics estiverem ativas.",
  },
  {
    title: "2. Finalidade de uso",
    body: "Usamos essas informações para responder contatos, entender o uso da landing page, melhorar a comunicação comercial e acompanhar o interesse por nossos serviços de GEO e AEO.",
  },
  {
    title: "3. Compartilhamento",
    body: "Não vendemos seus dados pessoais. Informações podem ser tratadas por fornecedores técnicos necessários para hospedagem, mensuração e comunicação, sempre dentro do escopo operacional do site.",
  },
  {
    title: "4. Retenção e segurança",
    body: "Mantemos dados apenas pelo tempo necessário para atender a finalidade do contato, cumprir obrigações aplicáveis e preservar a operação do site com segurança razoável.",
  },
  {
    title: "5. Seus direitos",
    body: "Você pode solicitar atualização, correção ou exclusão de dados pessoais compartilhados com a achadoAI, observadas as obrigações legais e operacionais aplicáveis.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <main className="bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-0">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-green-accent">
          Política de Privacidade
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary md:text-5xl">
          Como a achadoAI trata informações no site institucional
        </h1>
        <p className="mt-6 font-body text-lg leading-relaxed text-text-secondary">
          Esta página descreve, de forma objetiva, como tratamos dados no
          contexto do site institucional da achadoAI.
        </p>
        <p className="mt-3 font-body text-sm text-text-placeholder">
          Última atualização: {BUILD_DATE}
        </p>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-border-light bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            >
              <h2 className="font-display text-2xl font-semibold text-text-primary">
                {section.title}
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-border-light bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            6. Contato
          </h2>
          <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
            Para assuntos relacionados a privacidade, contato comercial ou
            atualização de informações, escreva para{" "}
            <a
              href="mailto:contato@achadoai.com.br"
              className="text-green-accent underline-offset-4 hover:underline"
            >
              contato@achadoai.com.br
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
