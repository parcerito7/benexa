function Plan({
  name,
  price,
  note,
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  note?: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl3 border p-8 shadow-soft ${
        highlight ? "border-benexa-teal" : "border-black/10"
      } bg-white`}
    >
      <h3 className="text-2xl font-semibold tracking-tight text-benexa-dark">
        {name}
      </h3>
      <div className="mt-2 text-4xl font-bold text-benexa-dark">{price}</div>
      {note && (
        <div className="mt-1 text-sm text-benexa-gray">
          {note}
        </div>
      )}
      <ul className="mt-6 space-y-2 text-benexa-gray">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <a
        href="#cta"
        className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium bg-benexa-teal text-white hover:opacity-90"
      >
        Empezar
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <h2 className="text-center">Precios simples</h2>
        <p className="lead text-center mt-2 mx-auto max-w-3xl">
          Empieza gratis. Paga solo si te sirve. Sin permanencias ni letras pequeñas.
          La idea es ayudarte, no liarte.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Plan
            name="Gratis"
            price="0€"
            note="Para empezar sin miedo"
            features={[
              "Búsqueda guiada",
              "3 coincidencias/mes",
              "Guía básica de solicitud",
            ]}
          />
          <Plan
            name="Pro"
            price="9€/mes"
            note="Para ir a por todas"
            features={[
              "Coincidencias ilimitadas",
              "Historial, favoritos y recordatorios",
              "Soporte prioritario",
            ]}
            highlight
          />
          <Plan
            name="Equipos"
            price="Consultar"
            note="Centros, ONGs y ayuntamientos"
            features={[
              "Múltiples usuarios y panel",
              "Exportación de datos",
              "Acompañamiento dedicado",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
