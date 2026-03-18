import Link from "next/link";

const links = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos de Servicio", href: "/terminos" },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
];

export function Footer() {
  return (
    <footer id="contacto" className="py-12 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <Link href="/">
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            Pablo M <span className="text-primary">González</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm text-slate-500 font-medium">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Pablo González. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}