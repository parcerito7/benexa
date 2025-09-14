export default function Faq() {
  const Item = ({ q, a }: { q: string; a: string }) => (
    <details className="rounded-xl2 border border-black/10 bg-white p-5 open:shadow-soft">
      <summary className="cursor-pointer select-none text-benexa-dark font-medium tracking-tight">
        {q}
      </summary>
      <p className="mt-3 text-benexa-gray">{a}</p>
    </details>
  );

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <h2 className="text-center">Preguntas frecuentes</h2>
        <p className="lead text-center mt-2 mx-auto max-w-3xl">
          Dudas normales, respuestas claras. Si falta algo, escríbenos.
        </p>
        <div className="mt-10 grid gap-4 md:max-w-3xl mx-auto">
          <Item
            q="¿De dónde sacáis las ayudas?"
            a="De portales y boletines oficiales. Cada resultado muestra la fuente para que puedas comprobarlo."
          />
          <Item
            q="¿Necesito saber de trámites?"
            a="No. Traducimos requisitos a lenguaje normal y te indicamos los pasos. Menos jerga, más acción."
          />
          <Item
            q="¿Qué pasa con mis datos?"
            a="Pedimos lo mínimo para ayudarte. No vendemos datos. Tu información es tuya."
          />
          <Item
            q="¿Puedo cancelar?"
            a="Sí. En cualquier momento. Sin permanencias ni sorpresas."
          />
        </div>
      </div>
    </section>
  );
}
