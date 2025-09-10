export default function Hero() {
  return (
    <section className="section pt-28 md:pt-36 bg-benexa-pastel">
      <div className="container text-center">
        <h1>
          Encuentra ayudas <span className="text-benexa-teal">sin drama</span>
        </h1>
        <p className="lead mt-6">
          Benexa te guía paso a paso. Ni humo, ni jerga. (Café opcional ☕)
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#cta" className="btn btn-primary">Quiero empezar</a>
          <a href="#features" className="btn btn-ghost">Ver cómo me ayudas</a>
        </div>

        {/* Mock de interfaz en cristal */}
        <div className="mt-14 mx-auto max-w-5xl glass p-6 md:p-10 text-left">
          <div className="text-sm text-benexa-dark/60 mb-3">Benexa · Asistente</div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-benexa-dark/10 bg-white/70 p-5">
              <div className="text-benexa-dark">“Soy estudiante de FP. ¿Qué becas tengo?”</div>
              <div className="mt-3 text-benexa-dark/60 text-sm">Pregunta corta, respuesta clara.</div>
            </div>
            <div className="rounded-2xl border border-benexa-dark/10 bg-white/70 p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-benexa-teal/10 px-3 py-1 text-sm text-benexa-dark">
                <span className="h-2 w-2 rounded-full bg-benexa-teal" /> 3 coincidencias
              </div>
              <ul className="mt-3 space-y-2 text-benexa-dark">
                <li className="rounded-lg border border-benexa-dark/10 px-3 py-2">✓ Beca general 2025–26</li>
                <li className="rounded-lg border border-benexa-dark/10 px-3 py-2">✓ Ayuda transporte</li>
                <li className="rounded-lg border border-benexa-dark/10 px-3 py-2">✓ Descuento matrícula FP</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
