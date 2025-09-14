"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-white/90 backdrop-blur border-b border-benexa-dark/10" : "bg-white"}`}>
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Benexa logo" width={32} height={32} className="h-8 w-auto" />
          <span className="font-semibold text-benexa-dark">Benexa</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-benexa-dark/80">
          <li><a href="#trust" className="hover:text-benexa-dark">Confían</a></li>
          <li><a href="#features" className="hover:text-benexa-dark">Funciones</a></li>
          <li><a href="#testimonials" className="hover:text-benexa-dark">Opiniones</a></li>
          <li><a href="#pricing" className="hover:text-benexa-dark">Precios</a></li>
          <li><a href="#faq" className="hover:text-benexa-dark">FAQ</a></li>
          <li><a href="#contact" className="hover:text-benexa-dark">Contacto</a></li>
        </ul>
        <a href="#cta" className="btn btn-primary">Empezar</a>
      </nav>
    </header>
  );
}
