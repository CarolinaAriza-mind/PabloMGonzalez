import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="py-12 bg-background-dark border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <Link href="/">
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            Pablo M <span className="text-primary">González</span>
          </span>
        </Link>
        {/* Copyright */}
        <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
          © {new Date().getFullYear()} Pablo González. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
