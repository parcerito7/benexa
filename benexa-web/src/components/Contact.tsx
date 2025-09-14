"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2>Contacto</h2>
        <p className="lead mt-2">Dinos qué necesitas y te respondemos.</p>

        {status === "sent" ? (
          <div className="mt-6 rounded-xl border border-benexa-dark/20 bg-white p-4 text-benexa-dark">
            ¡Gracias! Te contactaremos en breve.
          </div>
        ) : (
          <form className="mt-6 grid gap-4 md:max-w-xl" onSubmit={handleSubmit}>
            <input className="rounded-xl border border-benexa-dark/20 bg-white px-4 py-3" placeholder="Tu nombre" required />
            <input type="email" className="rounded-xl border border-benexa-dark/20 bg-white px-4 py-3" placeholder="Tu email" required />
            <textarea className="rounded-xl border border-benexa-dark/20 bg-white px-4 py-3" placeholder="Cuéntanos tu caso (breve mejor 😉)" rows={4} required />
            <button type="submit" className="btn btn-primary w-fit">Enviar</button>
          </form>
        )}
      </div>
    </section>
  );
}
