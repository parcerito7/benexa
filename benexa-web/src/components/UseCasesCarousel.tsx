"use client";
import { useEffect, useRef, useState } from "react";

type Item = { cat: string; title: string; line: string };

const ITEMS: Item[] = [
  { cat: "Estudios",   title: "Becas que encajan contigo",          line: "Benexa, filtra mis becas para FP este año." },
  { cat: "Transporte", title: "Ayuda para moverte",                  line: "Benexa, dime si puedo pedir ayuda de transporte." },
  { cat: "Familia",    title: "Apoyos para familias",                line: "Benexa, ¿hay ayudas si tengo dos peques?" },
  { cat: "Matrícula",  title: "Paga menos en tu matrícula",          line: "Benexa, calcula si tengo descuento de matrícula." },
  { cat: "Vivienda",   title: "Ayuda al alquiler (según renta)",     line: "Benexa, mira si cumplo requisitos de alquiler." },
  { cat: "Material",   title: "Libros y material escolar",           line: "Benexa, ¿me corresponde ayuda para material?" },
];

export default function UseCasesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Auto-slide cada 4.5s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  // Desplaza cuando cambia el índice
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement;
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setIndex((i) => (i + 1) % ITEMS.length);

  return (
    <section id="usecases" className="section band-green">
      <div className="container">
        <h2 className="text-center">Ejemplos (desliza)</h2>
        <p className="lead text-center mt-2 max-w-3xl mx-auto">
          Ideas para empezar. Desliza con el dedo o usa las flechas.
        </p>

        {/* Controles */}
        <div className="mt-6 flex justify-end gap-3">
          <button aria-label="Anterior" onClick={prev}
            className="h-10 w-10 rounded-full border border-benexa-dark/15 bg-white hover:bg-benexa-teal/10">
            ‹
          </button>
          <button aria-label="Siguiente" onClick={next}
            className="h-10 w-10 rounded-full border border-benexa-dark/15 bg-white hover:bg-benexa-teal/10">
            ›
          </button>
        </div>

        {/* Pista deslizante con snap */}
        <div
          ref={trackRef}
          className="mt-6 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth
                     [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Ocultar scrollbar en WebKit */}
          <style>{`
            #usecases ::-webkit-scrollbar { display: none; }
          `}</style>

          {ITEMS.map((it, i) => (
            <article
              key={i}
              className="pill snap-center shrink-0 w-[85%] md:w-[48%] lg:w-[32%] p-6 md:p-8"
              onClick={() => setIndex(i)}
              role="button"
            >
              <div className="eyebrow">{it.cat}</div>
              <h3 className="mt-1 text-2xl md:text-[28px] leading-snug text-benexa-dark">
                {it.title}
              </h3>
              <p className="mt-3 text-benexa-dark/70">{it.line}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-benexa-dark/70">
                <span className="h-2 w-2 rounded-full bg-benexa-teal"></span>
                <span>Explorar</span>
              </div>
            </article>
          ))}
        </div>

        {/* Indicadores */}
        <div className="mt-6 flex justify-center gap-2">
          {ITEMS.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={`h-1.5 rounded-full transition-all
                 ${i === index ? "w-6 bg-benexa-teal" : "w-3 bg-benexa-dark/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
