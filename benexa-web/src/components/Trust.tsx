import Image from "next/image";
import Counter from "./Counter";

export default function Trust() {
  return (
    <section id="trust" className="section bg-white">
      <div className="container">
        {/* Cabecera */}
        <h2 className="text-center">Confían en Benexa</h2>
        <p className="lead text-center mt-2">
          Personas, centros y ayuntamientos que prefieren claridad antes que jerga.
        </p>

        {/* Logos (pon tus archivos en /public y cámbialos aquí) */}
        <div className="mt-10 grid gap-6 md:grid-cols-4 items-center">
          {/* Placeholders (cámbialos por <Image /> cuando tengas logos) */}
          <div className="card text-center">Centro Educativo</div>
          <div className="card text-center">Ayuntamiento</div>
          <div className="card text-center">ONG Local</div>
          <div className="card text-center">Fundación</div>

          {/*
          Ejemplo con imágenes reales:
          <div className="flex items-center justify-center p-4">
            <Image src="/logo1.png" alt="Logo 1" width={140} height={40} className="h-8 w-auto opacity-80" />
          </div>
          */}
        </div>

        {/* Contadores estilo Siri */}
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          <div className="card text-center">
            <div className="text-4xl font-semibold text-benexa-dark">
              <Counter value={3200} suffix="+" />
            </div>
            <div className="mt-2 text-benexa-dark/70">Solicitudes guiadas</div>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-semibold text-benexa-dark">
              <Counter value={180} suffix="+" />
            </div>
            <div className="mt-2 text-benexa-dark/70">Ayudas activas rastreadas</div>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-semibold text-benexa-dark">
              <Counter value={45} suffix="+" />
            </div>
            <div className="mt-2 text-benexa-dark/70">Centros colaboradores</div>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-semibold text-benexa-dark">
              <Counter value={96} suffix="%" />
            </div>
            <div className="mt-2 text-benexa-dark/70">Satisfacción de usuarios</div>
          </div>
        </div>

        {/* Nota */}
        <p className="mt-6 text-center text-sm text-benexa-dark/60">
          ¿Tienes logos oficiales? Súbelos a <code>/public</code> y los añadimos arriba.
        </p>
      </div>
    </section>
  );
}
