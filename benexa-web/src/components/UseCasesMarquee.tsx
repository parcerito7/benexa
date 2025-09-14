// Carrusel continuo tipo Apple: auto, sin flechas, full-bleed, con colores suaves y icono circular.
const ITEMS = [
  { cat: "Estudios",   title: "Beca General MEC 2025–26",         line: "Para FP, grados y bachillerato según renta y expediente.", color: "pill-green",  icon: "🎓" },
  { cat: "Transporte", title: "Ayuda de transporte escolar",       line: "Apoyo para desplazamientos diarios al centro educativo.",   color: "pill-blue",   icon: "🚌" },
  { cat: "Familia",    title: "Apoyo a familias numerosas",        line: "Descuentos y becas específicas por título de familia.",     color: "pill-violet", icon: "👨‍👩‍👧‍👦" },
  { cat: "Matrícula",  title: "Bonificación en matrícula FP/Uni",  line: "Reducciones por renta, situación laboral y excelencia.",    color: "pill-rose",   icon: "🏷️" },
  { cat: "Vivienda",   title: "Bono alquiler joven",               line: "Subvención mensual con límites de renta y edad.",           color: "pill-blue",   icon: "🏠" },
  { cat: "Material",   title: "Ayuda para libros y material",      line: "Cheque o reembolso para material escolar obligatorio.",     color: "pill-green",  icon: "📚" },
];

function Card({cat,title,line,color,icon}:{cat:string;title:string;line:string;color:string;icon:string}) {
  return (
    <article className={`pill ${color} shrink-0 w-[92vw] sm:w-[64vw] md:w-[44vw] lg:w-[34vw]`}>
      <div className="pill-inner">
        <div className="flex items-center gap-3">
          <div className="icon-circle">{icon}</div>
          <div className="eyebrow">{cat}</div>
        </div>
        <div className="mt-2 text-2xl md:text-[28px] leading-snug text-benexa-dark">
          {title}
        </div>
        <p className="mt-3 text-benexa-dark/70">{line}</p>
      </div>
    </article>
  );
}

export default function UseCasesMarquee() {
  // Duplicamos ítems para un loop perfecto (la animación mueve -50%)
  const sequence = [...ITEMS, ...ITEMS];

  return (
    <section id="usecases" className="section band-green">
      {/* Full-bleed: pista ocupa de borde a borde con desvanecido lateral */}
      <div className="full-bleed">
        <div
          className="marquee-viewport"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)",
            maskImage: "linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="marquee-track px-4">
            {sequence.map((it, i) => (
              <Card key={i} cat={it.cat} title={it.title} line={it.line} color={it.color} icon={it.icon} />
            ))}
          </div>
        </div>
      </div>

      {/* Encabezado breve (sin instrucciones de deslizar) */}
      <div className="container mt-10">
        <h2 className="text-center">Ayudas que ahora mismo están activas</h2>
        <p className="lead text-center mt-2 max-w-3xl mx-auto">
          Ejemplos reales que solemos encontrar según perfil y requisitos.
        </p>
      </div>
    </section>
  );
}
