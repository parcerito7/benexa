export default function How() {
  return (
    <section id="how" className="section">
      <div className="container grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h2>Cómo funciona</h2>
          <p className="lead mt-4">
            1) Te hacemos 4 preguntas. 2) Te mostramos ayudas que encajan. 3) Te guiamos para solicitarlas.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Lenguaje simple.</li>
            <li>• Verás siempre la fuente oficial.</li>
            <li>• Sin vender tus datos.</li>
          </ul>
        </div>
        <div className="card">
          <div className="text-sm text-white/70 mb-2">Vista previa</div>
          <div className="rounded-2xl bg-black/50 p-5 ring-1 ring-white/10">
            <div className="text-white/80">“Trabajo y tengo 21 años. Busco ayudas de alquiler.”</div>
          </div>
          <div className="mt-4 rounded-2xl bg-benexa-teal/20 p-5 ring-1 ring-white/10">
            <div className="text-white">✓ 2 ayudas probables · 1 opcional</div>
          </div>
        </div>
      </div>
    </section>
  );
}
