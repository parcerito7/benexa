export default function UseCases() {
  const items = [
    { cat: "Estudios", text: "Benexa, ¿qué becas puedo pedir si hago FP?" },
    { cat: "Transporte", text: "Benexa, calcula si puedo pedir ayuda de transporte." },
    { cat: "Familia", text: "Benexa, ¿hay ayudas si tengo dos peques?" },
    { cat: "Matrícula", text: "Benexa, ¿puedo conseguir descuento en la matrícula?" },
    { cat: "Vivienda", text: "Benexa, dime si hay ayudas al alquiler para mí." },
    { cat: "Material", text: "Benexa, ¿me corresponde ayuda para libros y material?" },
  ];

  return (
    <section id="usecases" className="section band-green">
      <div className="container">
        <h2 className="text-center">Ejemplos rápidos</h2>
        <p className="lead text-center mt-2 max-w-3xl mx-auto">
          Frases simples que puedes probar. Tú pregunta, nosotros filtramos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <div key={i} className="pill p-6 md:p-8">
              <div className="eyebrow">{it.cat}</div>
              <div className="mt-1 text-2xl md:text-[28px] leading-snug">
                <span className="text-animated-green">Benexa,</span> {it.text.replace("Benexa, ", "")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
