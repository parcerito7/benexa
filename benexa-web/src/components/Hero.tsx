export default function Hero() {
  return (
    <section className="section pt-28 md:pt-36 bg-hero-pastel">
      <div className="container text-center">
        <h1>
          Tu asistente para ayudas,{" "}
          <span className="text-animated-green">sin complicarse</span>
        </h1>
        <p className="lead mt-6 mx-auto max-w-3xl">
          Preguntas simples, explicaciones claras y resultados verificados. Paso a paso,
          sin jerga y con humor suave. Funciona para jóvenes y también para quien no quiere líos.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#cta" className="btn btn-animated-green">Buscar mi ayuda ahora</a>
          <a href="#usecases" className="btn btn-ghost">Ver ayudas</a>
        </div>

        {/* --- VISTA PREVIA estilo Siri con acento animado --- */}
        <div className="mt-16 mx-auto max-w-5xl card-preview text-left">
          {/* Cabecera con acento animado verde */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm badge-animated-green">
            <span className="h-2 w-2 rounded-full bg-white" />
            Vista previa
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-4">
            {/* Pregunta */}
            <div className="preview-box">
              <div className="text-benexa-dark text-[18px] md:text-[20px] leading-snug">
                «Trabajo y estudio FP. ¿Qué becas puedo pedir?»
              </div>
              <div className="mt-3 text-benexa-dark/70 text-sm">
                Pregunta corta, respuesta clara. Sin PDF de 40 páginas.
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip-accent">Estudiante FP</span>
                <span className="chip">Provincia: Madrid</span>
                <span className="chip">Renta: Media</span>
              </div>
            </div>

            {/* Respuesta */}
            <div className="preview-box">
              <div className="chip-accent">
                <span className="h-2 w-2 rounded-full bg-white" />
                3 opciones encontradas
              </div>

              <ul className="list-soft mt-3 space-y-2 text-benexa-dark">
                <li>✓ Beca general MEC 2025–26</li>
                <li>✓ Ayuda de transporte escolar</li>
                <li>✓ Descuento en matrícula FP</li>
              </ul>

              <div className="mt-3 text-sm text-benexa-dark/70">
                Con requisitos y enlace a la fuente oficial. Sin trucos.
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip">Requisitos claros</span>
                <span className="chip">Pasos guiados</span>
                <span className="chip">Fuentes oficiales</span>
              </div>
            </div>
          </div>
        </div>
        {/* --- /VISTA PREVIA --- */}
      </div>
    </section>
  );
}
