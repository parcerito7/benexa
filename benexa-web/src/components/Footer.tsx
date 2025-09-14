import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-benexa-dark/10 bg-white">
      <div className="container py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Benexa logo" width={32} height={32} className="h-8 w-auto" />
          <span className="font-semibold text-benexa-dark">Benexa</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-benexa-dark/80">
          <a href="#features" className="hover:text-benexa-dark">Funciones</a>
          <a href="#pricing" className="hover:text-benexa-dark">Precios</a>
          <a href="#faq" className="hover:text-benexa-dark">FAQ</a>
          <a href="#contact" className="hover:text-benexa-dark">Contacto</a>
          <a href="#" className="hover:text-benexa-dark">Privacidad</a>
          <a href="#" className="hover:text-benexa-dark">Términos</a>
        </nav>
        <div className="text-sm text-benexa-dark/60">
          © {new Date().getFullYear()} Benexa · Hecho con ❤️
        </div>
      </div>
    </footer>
  );
}
