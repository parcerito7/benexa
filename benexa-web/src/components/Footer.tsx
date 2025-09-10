export default function Footer() {
  return (
    <footer className="section border-t border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <div>© {new Date().getFullYear()} Benexa</div>
        <div className="flex gap-6">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
