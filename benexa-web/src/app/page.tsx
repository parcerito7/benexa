// /src/app/page.tsx
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UseCasesMarquee from "../components/UseCasesMarquee";
import Powers from "../components/Powers";
import Trust from "../components/Trust";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <UseCasesMarquee />
      <Powers />
      <Trust />
      <Features />
      <Testimonials />
      <Pricing />

      {/* CTA nueva con color */}
      <section id="cta" className="section bg-white">
        <div className="container">
          <div className="cta-band p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              ¿Listo para encontrar tu ayuda en minutos?
            </h2>
            <p className="mt-2 text-white/90">
              Guiado, claro y sin vueltas. Tú preguntas, Benexa filtra.
            </p>
            <a href="#contact" className="btn btn-animated-green mt-6">
              Empezar gratis
            </a>

            {/* Enlace a la página de ayudas nuevas */}
            <div className="mt-6">
              <Link
                href="/ayudas-nuevas"
                className="inline-block rounded-lg border px-4 py-2 hover:bg-gray-50"
              >
                Ver ayudas nuevas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
