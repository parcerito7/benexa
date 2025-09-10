function Card({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <div className="glass p-8 text-left">
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-3 text-2xl font-semibold text-benexa-dark">{title}</h3>
      <p className="mt-3 text-benexa-dark/80">{children}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="text-center">Lo hacemos fácil (y un pelín divertido)</h2>
        <p className="mt-4 text-center text-lg text-benexa-dark/80 max-w-2xl mx-auto">
          Sin PDFs infinitos. Sin “vuelva usted mañana”.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card emoji="🧭" title="Búsqueda guiada">
            Te preguntamos lo mínimo y filtramos por ti. Nada de 40 casillas.
          </Card>
          <Card emoji="✅" title="Resultados verificados">
            Requisitos claros y fuentes oficiales. Cero humo, todo útil.
          </Card>
          <Card emoji="🤝" title="Acompañamiento">
            Pasos pequeños y claros. Estamos contigo hasta enviar la solicitud.
          </Card>
        </div>
      </div>
    </section>
  );
}
