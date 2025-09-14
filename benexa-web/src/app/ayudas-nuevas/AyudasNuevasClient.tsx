// /workspaces/benexa/benexa-web/src/app/ayudas-nuevas/AyudasNuevasClient.tsx
"use client";
import { useMemo, useState } from "react";

/** Categorías oficiales */
type Category =
  | "Vivienda y alquiler"
  | "Educación y formación"
  | "Empleo y emprendimiento"
  | "Familia y natalidad"
  | "Inclusión social y discapacidad"
  | "Mayores y pensiones"
  | "Transporte y movilidad"
  | "Energía y suministros"
  | "Medio ambiente y sostenibilidad"
  | "Rural, agricultura, ganadería y pesca"
  | "Digitalización y tecnología"
  | "Cultura, deporte y ocio"
  | "Salud y bienestar"
  | "Igualdad y diversidad"
  | "Emergencias y situaciones excepcionales"
  | "Administraciones públicas";

/** Paleta por categoría (tarjetas coloridas) */
const CAT_COLORS: Record<Category, string> = {
  "Vivienda y alquiler": "from-green-500 to-emerald-500",
  "Educación y formación": "from-sky-500 to-blue-500",
  "Empleo y emprendimiento": "from-lime-500 to-green-500",
  "Familia y natalidad": "from-rose-500 to-pink-500",
  "Inclusión social y discapacidad": "from-indigo-500 to-violet-500",
  "Mayores y pensiones": "from-amber-500 to-yellow-500",
  "Transporte y movilidad": "from-cyan-500 to-sky-500",
  "Energía y suministros": "from-yellow-500 to-orange-500",
  "Medio ambiente y sostenibilidad": "from-emerald-500 to-teal-500",
  "Rural, agricultura, ganadería y pesca": "from-lime-600 to-green-600",
  "Digitalización y tecnología": "from-fuchsia-500 to-purple-500",
  "Cultura, deporte y ocio": "from-orange-500 to-red-500",
  "Salud y bienestar": "from-teal-500 to-emerald-500",
  "Igualdad y diversidad": "from-purple-500 to-pink-500",
  "Emergencias y situaciones excepcionales": "from-red-500 to-rose-500",
  "Administraciones públicas": "from-slate-500 to-gray-600",
};

const ALL_CATEGORIES = Object.keys(CAT_COLORS) as Category[];

/** Tipo de ayuda */
type Ayuda = {
  id: string;
  titulo: string;
  categoria: Category;
  publicada: string; // YYYY-MM-DD
  cierre?: string;   // YYYY-MM-DD
  resumen?: string;
};

/** Datos de ejemplo */
const AYUDAS: Ayuda[] = [
  { id: "BDNS-815619", titulo: "Programa bono alquiler joven 2025", categoria: "Vivienda y alquiler", publicada: "2025-02-19", cierre: "2025-03-15", resumen: "Ayuda mensual para jóvenes inquilinos con límites de renta." },
  { id: "BDNS-815722", titulo: "Ayudas a arrendatarios de vivienda 2025", categoria: "Vivienda y alquiler", publicada: "2025-02-19", cierre: "2025-04-01", resumen: "Subvención al alquiler para hogares con ingresos limitados." },
  { id: "BDNS-817156", titulo: "Ayudas a la natalidad 2024 (Pedralba)", categoria: "Familia y natalidad", publicada: "2024-11-15", cierre: "2025-01-31", resumen: "Pago único por nacimiento/adopción para empadronados." },
  { id: "BDNS-815786", titulo: "Subvención IBI familias monoparentales 2025", categoria: "Familia y natalidad", publicada: "2025-02-19", cierre: "2025-03-10", resumen: "Descuento en el IBI para unidades monoparentales." },
  { id: "BDNS-815720", titulo: "Emprendedores 2025", categoria: "Empleo y emprendimiento", publicada: "2025-02-19", cierre: "2025-05-30", resumen: "Apoyo a nuevos proyectos y autoempleo." },
  { id: "BDNS-812431", titulo: "Cheque empleo 2025", categoria: "Empleo y emprendimiento", publicada: "2025-02-19", cierre: "2025-04-15", resumen: "Incentivo a la contratación con requisitos." },
  { id: "BDNS-744943", titulo: "Descuento transporte aéreo residentes", categoria: "Transporte y movilidad", publicada: "2024-06-10", cierre: "2025-12-31", resumen: "Bonificación para residentes en islas, Ceuta y Melilla." },
  { id: "BDNS-900001", titulo: "Bono energía hogares vulnerables", categoria: "Energía y suministros", publicada: "2025-01-10", resumen: "Descuento en factura energética." },
  { id: "BDNS-900010", titulo: "Formación digital para desempleados", categoria: "Digitalización y tecnología", publicada: "2025-02-01", resumen: "Cursos gratuitos de competencias digitales." },
];

/** Helpers fecha */
const toDate = (s: string) => new Date(s + "T00:00:00");
const startOfISOWeek = (d: Date) => {
  const x = new Date(d);
  const day = (x.getDay() + 6) % 7; // 0=lunes
  x.setHours(0, 0, 0, 0);
  x.setDate(x.getDate() - day);
  return x;
};
const sameISOWeek = (a: Date, b: Date) => startOfISOWeek(a).getTime() === startOfISOWeek(b).getTime();
const sameMonth = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
const fmtFecha = (s?: string) => (s ? toDate(s).toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "2-digit" }) : "—");

/** Iconos SVG (simples) por categoría */
function Icon({ name, className = "w-6 h-6" }: { name: Category, className?: string }) {
  // Iconos básicos, sólidos
  switch (name) {
    case "Vivienda y alquiler":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 3 3 10v10h6v-6h6v6h6V10z"/></svg>);
    case "Educación y formación":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="m12 3 10 5-10 5L2 8l10-5Zm0 7 6.5-3.25V13c0 3.59-3.58 6.5-6.5 6.5S5.5 16.59 5.5 13V6.75L12 10Z"/></svg>);
    case "Empleo y emprendimiento":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M9 3h6a2 2 0 0 1 2 2v2h3v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7h3V5a2 2 0 0 1 2-2Zm0 4h6V5H9v2Z"/></svg>);
    case "Familia y natalidad":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M7 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 22v-3a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v3H4Zm10 0v-2a5 5 0 0 1 10 0v2h-10Z"/></svg>);
    case "Inclusión social y discapacidad":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm-2.5 7h5l1 7h3l1 4h-2l-.5-2h-2l-.5 2h-2l.5-2h-2l-1-7Z"/></svg>);
    case "Mayores y pensiones":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M9 5a3 3 0 1 0-3 3 3 3 0 0 0 3-3Zm2 3h5a3 3 0 0 1 3 3v11h-3v-6h-2v6H6V14a6 6 0 0 1 5-6Z"/></svg>);
    case "Transporte y movilidad":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M4 16V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H4Z"/></svg>);
    case "Energía y suministros":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="m13 2-8 12h6l-2 8 8-12h-6l2-8Z"/></svg>);
    case "Medio ambiente y sostenibilidad":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2a9 9 0 1 0 9 9h-4a5 5 0 1 1-5-5V2Z"/></svg>);
    case "Rural, agricultura, ganadería y pesca":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3 20h18v-2l-4-3-5 3-4-5-5 5v2Z"/></svg>);
    case "Digitalización y tecnología":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M5 3h14v12H5V3Zm-2 14h18v2H3v-2Z"/></svg>);
    case "Cultura, deporte y ocio":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="m4 6 8 5 8-5v12H4V6Z"/></svg>);
    case "Salud y bienestar":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M10 3h4v4h4v4h-4v4h-4v-4H6V7h4V3Z"/></svg>);
    case "Igualdad y diversidad":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3 7h8v2H3V7Zm10 0h8v2h-8V7ZM3 15h8v2H3v-2Zm10 0h8v2h-8v-2Z"/></svg>);
    case "Emergencias y situaciones excepcionales":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/></svg>);
    case "Administraciones públicas":
      return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3 10h18v10H3V10Zm9-8 9 8H3l9-8Z"/></svg>);
  }
}

/** Tarjeta colorida de categoría (grande, icono SVG, clic filtra) */
function CategoryCard({ name, active, onClick }: { name: Category; active: boolean; onClick: () => void; }) {
  const grad = CAT_COLORS[name];
  return (
    <button
      onClick={onClick}
      className={[
        "group relative overflow-hidden rounded-2xl border text-left",
        "bg-gradient-to-br", grad,
        active ? "ring-2 ring-white/70 shadow-lg" : "shadow-sm",
        "transition transform hover:scale-[1.01]"
      ].join(" ")}
      aria-pressed={active}
      aria-label={`Filtrar por ${name}`}
    >
      <div className="absolute inset-0 opacity-15 mix-blend-overlay" />
      <div className="p-5 md:p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/15 rounded-xl p-2">
            <Icon name={name} className="w-6 h-6" />
          </div>
          <h3 className="text-[18px] md:text-[22px] font-semibold tracking-tight leading-[1.1]">{name}</h3>
        </div>
        <div className="mt-4 text-xs opacity-90">Toca para ver solo esta categoría</div>
      </div>
    </button>
  );
}

/** Tarjeta mini de resultado (hover verde) */
function ResultCard({ a }: { a: Ayuda }) {
  const isCheque = /cheque empleo/i.test(a.titulo); // resaltar “Cheque empleo”
  return (
    <div
      className={[
        "rounded-xl border p-4 bg-white transition",
        "hover:ring-2 hover:ring-green-500 hover:shadow-md hover:translate-y-[-1px]"
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div className="text-[11px] text-gray-500">{a.id}</div>
        <span className={[
          "text-[10px] px-2 py-0.5 rounded-full border",
          isCheque ? "bg-green-100 border-green-500 text-green-700" : "text-gray-600"
        ].join(" ")}>{isCheque ? "Cheque empleo" : a.categoria}</span>
      </div>
      <div className={[
        "mt-1 text-[15px] font-semibold leading-snug",
        isCheque ? "text-green-700" : ""
      ].join(" ")}>{a.titulo}</div>
      {a.resumen && <p className="text-[13px] mt-1 text-gray-700">{a.resumen}</p>}
      <div className="text-[12px] mt-1 text-gray-700">
        <span className="font-medium">Publicada:</span> {fmtFecha(a.publicada)}
        {a.cierre ? <> · <span className="font-medium">Cierre:</span> {fmtFecha(a.cierre)}</> : null}
      </div>
    </div>
  );
}

/** Componente principal */
export default function AyudasNuevasClient() {
  // Filtros y búsqueda
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<"Todas" | Category>("Todas");
  const [sort, setSort] = useState<"recientes" | "antiguas" | "alfabetico">("recientes");

  // Suscripción (demo desplegable)
  const [email, setEmail] = useState("");
  const [prefs, setPrefs] = useState<Category[]>([]);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Métricas suaves
  const soft = useMemo(() => {
    const hoy = new Date();
    return {
      estaSemana: AYUDAS.filter(a => sameISOWeek(toDate(a.publicada), hoy)).length,
      esteMes: AYUDAS.filter(a => sameMonth(toDate(a.publicada), hoy)).length,
    };
  }, []);

  // Cierran pronto (30 días)
  const proximas = useMemo(() => {
    const hoy = new Date();
    const en30 = new Date(); en30.setDate(hoy.getDate() + 30);
    return AYUDAS.filter(a => a.cierre && toDate(a.cierre) >= hoy && toDate(a.cierre) <= en30)
      .sort((a, b) => toDate(a.cierre!).getTime() - toDate(b.cierre!).getTime());
  }, []);

  // Destacada (más reciente)
  const destacada = useMemo(() =>
    AYUDAS.slice().sort((a, b) => (a.publicada < b.publicada ? 1 : -1))[0]
  , []);

  // Resultados buscador
  const resultados = useMemo(() => {
    let lista = AYUDAS.slice();
    const query = q.trim().toLowerCase();
    if (query) lista = lista.filter(a => a.titulo.toLowerCase().includes(query) || a.id.toLowerCase().includes(query));
    if (cat !== "Todas") lista = lista.filter(a => a.categoria === cat);
    if (sort === "recientes") lista.sort((a, b) => (a.publicada < b.publicada ? 1 : -1));
    else if (sort === "antiguas") lista.sort((a, b) => (a.publicada > b.publicada ? 1 : -1));
    else lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
    return lista;
  }, [q, cat, sort]);

  // Suscripción (demo)
  function togglePref(c: Category) {
    setPrefs(prev => (prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]));
  }
  function suscribir(e: React.FormEvent) {
    e.preventDefault();
    setOk(null); setErr(null);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) { setErr("Introduce un correo válido."); return; }
    if (prefs.length === 0) { setErr("Elige al menos una categoría."); return; }
    setTimeout(() => setOk("¡Listo! Te avisaremos de lo relevante para ti."), 300);
  }

  return (
    <>
      {/* Título estilo Apple: grande, centrado, compacto */}
      <section className="section bg-white py-8">
        <div className="container">
          <h1 className="text-center text-[34px] md:text-[48px] font-semibold tracking-tight leading-[1.05]">
            Ayudas nuevas
          </h1>
          <p className="mt-2 text-center text-gray-700 max-w-2xl mx-auto">
            Lo último, explicado simple. Si quieres buscar algo concreto, abajo tienes un buscador.
          </p>

          {/* Métricas compactas */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
            <div className="rounded-xl border p-4 text-center">
              <div className="text-xs text-gray-500">Novedades esta semana</div>
              <div className="text-2xl font-semibold">{soft.estaSemana}</div>
            </div>
            <div className="rounded-xl border p-4 text-center">
              <div className="text-xs text-gray-500">En lo que va de mes</div>
              <div className="text-2xl font-semibold">{soft.esteMes}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explorar por categorías — grande y colorido con iconos SVG */}
      <section className="section bg-white py-8">
        <div className="container">
          <h2 className="text-center text-[24px] md:text-[32px] font-semibold tracking-tight leading-[1.08]">
            Explorar por categorías
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ALL_CATEGORIES.map(c => (
              <CategoryCard key={c} name={c} active={cat === c} onClick={() => setCat(c)} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={() => setCat("Todas")}
              className="inline-block rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
            >
              Ver todas
            </button>
          </div>
        </div>
      </section>

      {/* Avisos por correo — aviso con desplegable */}
      <section className="section bg-white py-6">
        <div className="container">
          <div className="rounded-2xl border bg-white overflow-hidden">
            <button
              onClick={() => setOpen(o => !o)}
              className="w-full flex items-center justify-between px-5 md:px-6 py-4"
              aria-expanded={open}
              aria-controls="avisos-panel"
            >
              <div className="text-[18px] font-semibold tracking-tight">🔔 ¿No quieres perderte nada?</div>
              <span className="text-xl">{open ? "▾" : "▸"}</span>
            </button>
            {open && (
              <div id="avisos-panel" className="px-5 md:px-6 pb-5">
                <p className="text-gray-700">Elige temas. Te avisamos solo de eso (sin spam).</p>
                <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                  {ALL_CATEGORIES.map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => togglePref(c)}
                      className={`flex items-center gap-2 rounded-2xl border p-3 text-left transition
                      ${prefs.includes(c) ? "bg-black text-white border-black" : "bg-white hover:bg-gray-50"}`}
                      aria-pressed={prefs.includes(c)}
                    >
                      <span className="w-5 h-5">
                        <Icon name={c} className="w-5 h-5" />
                      </span>
                      <span className="text-sm md:text-base">{c}</span>
                    </button>
                  ))}
                </div>
                <form onSubmit={suscribir} className="mt-4 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full sm:flex-1 border rounded-lg px-3 py-2 outline-none" required
                  />
                  <button type="submit" className="btn btn-animated-green">Quiero avisos</button>
                </form>
                {ok && <p className="text-green-700 text-sm mt-2">{ok}</p>}
                {err && <p className="text-red-700 text-sm mt-2">{err}</p>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cierran pronto (rejilla compacta) */}
      <section id="cierran-pronto" className="section bg-white py-8">
        <div className="container">
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight leading-[1.08]">⏳ Cierran pronto</h2>
          {proximas.length === 0 ? (
            <p className="text-gray-500 mt-3">No hay ayudas con cierre cercano.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              {proximas.map(a => (
                <div key={a.id} className="rounded-xl border p-4 bg-red-50">
                  <div className="text-[11px] text-gray-600">{a.id}</div>
                  <div className="mt-1 text-[16px] font-semibold leading-snug">{a.titulo}</div>
                  {a.resumen && <p className="text-[13px] mt-1 text-gray-700">{a.resumen}</p>}
                  <div className="text-[12px] mt-1">
                    <span className="font-medium">Categoría:</span> {a.categoria} · <span className="font-medium">Cierra:</span> {fmtFecha(a.cierre)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Buscador (mini tarjetas con hover verde) */}
      <section id="buscar" className="section bg-white py-8">
        <div className="container">
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight leading-[1.08]">Buscar algo concreto</h2>
          <p className="text-gray-600 text-sm mt-1">Busca por título o código BDNS. Es simple 😊.</p>

          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <input
              value={q} onChange={e => setQ(e.target.value)}
              placeholder="Ej.: alquiler, BDNS-815619…"
              className="w-full md:w-1/2 border rounded-lg px-3 py-2 outline-none" aria-label="Buscar ayudas"
            />
            <select value={sort} onChange={e => setSort(e.target.value as any)} className="border rounded-lg px-3 py-2">
              <option value="recientes">Más recientes</option>
              <option value="antiguas">Más antiguas</option>
              <option value="alfabetico">A-Z (título)</option>
            </select>
            <select value={cat} onChange={e => setCat(e.target.value as any)} className="border rounded-lg px-3 py-2">
              <option value="Todas">Todas</option>
              {ALL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Resultados mini */}
          {resultados.length === 0 ? (
            <p className="text-gray-500 mt-5">No hay resultados con esos filtros.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-5">
              {resultados.map(a => <ResultCard key={a.id} a={a} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
