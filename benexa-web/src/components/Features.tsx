"use client";
import Reveal from "./Reveal";

function Card({ emoji, title, children, delay = 0 }: { emoji: string; title: string; children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card">
        <div className="text-3xl">{emoji}</div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-benexa-dark">{title}</h3>
        <p className="mt-3 text-benexa-dark/70">{children}</p>
      </div>
    </Reveal>
  );
}

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <h2 className="text-center text-benexa-dark">Lo hacemos fácil</h2>
        <p className="lead text-center mt-2 max-w-3xl mx-auto text-benexa-dark/70">
          Cero jerga, cero estrés. Un camino claro desde “¿por dónde empiezo?” hasta “enviada”.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card emoji="🧭" title="Búsqueda guiada" delay={0.05}>
            Te preguntamos solo lo importante (sí, poquito). Filtramos lo que encaja contigo. Sentido común, no laberintos.
          </Card>
          <Card emoji="✅" title="Resultados verificados" delay={0.15}>
            Requisitos y fuentes oficiales. Sabes por qué aplicas y qué necesitas. Sin humo, todo útil.
          </Card>
          <Card emoji="🤝" title="Acompañamiento" delay={0.25}>
            Pasos cortos, recordatorios y checklist. Llegas al “enviar” con confianza (y una sonrisa).
          </Card>
        </div>
      </div>
    </section>
  );
}
