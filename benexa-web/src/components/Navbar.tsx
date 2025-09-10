"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-white/90 backdrop-blur-xs border-b border-benexa-dark/10" : "bg-transparent"}`}>
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-benexa-teal"></div>
          <span className="font-semibold text-benexa-dark">Benexa</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-benexa-dark/80">
          <li><a href="#features" className="hover:text-benexa-dark">Funciones</a></li>
          <li><a href="#how" className="hover:text-benexa-dark">Cómo funciona</a></li>
          <li><a href="#cta" className="hover:text-benexa-dark">Probar</a></li>
          <li><a href="#contact" className="hover:text-benexa-dark">Contacto</a></li>
        </ul>
        <a href="#cta" className="btn btn-primary">Empezar</a>
      </nav>
    </header>
  );
}
