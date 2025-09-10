import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import How from "../components/How";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <How />
      <Cta />
      <section id="contact" className="section">
        <div className="container">
          <h2>Contacto</h2>
          <form className="mt-6 grid gap-4 md:max-w-lg">
            <input className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10" placeholder="Tu nombre" />
            <input type="email" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10" placeholder="Tu email" />
            <textarea className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10" placeholder="Cuéntanos qué necesitas"></textarea>
            <button type="button" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
