"use client";
import Reveal from "./Reveal";

function Quote({ text, name, role, delay = 0 }: { text: string; name: string; role: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card">
        <p className="text-benexa-dark/90 text-lg leading-relaxed">“{text}”</p>
        <div className="mt-4 text-sm text-benexa-dark/60">— {name}, {role}</div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="text-center">Opiniones reales</h2>
        <p className="lead text-center mt-2 mx-auto max-w-3xl">
          Gente que quería claridad y la encontró. Sin tecnicismos, sin rodeos.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Quote text="En 5 minutos tenía 3 ayudas que no conocía. Como hablar con una amiga." name="Laura G." role="Estudiante de FP" delay={0.05} />
          <Quote text="Ahorro de tiempo brutal. Sin marrones con papeleo. Por fin alguien te guía." name="Carlos R." role="Padre de dos" delay={0.15} />
          <Quote text="Menos dudas repetidas y más solicitudes bien hechas. Para el centro, un alivio." name="IES Montclar" role="Orientación" delay={0.25} />
        </div>
      </div>
    </section>
  );
}
