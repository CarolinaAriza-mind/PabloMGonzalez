import Link from "next/link";

const PATHS = [
  {
    href: "/personas",
    icon: "person",
    title: "Personas",
    eyebrow: "Desarrollo Individual",
    description:
      "Para quienes buscan sanar, crecer y liderar su propia vida con propósito y autenticidad.",
    cta: "Explorar Crecimiento",
  },
  {
    href: "/empresas",
    icon: "corporate_fare",
    title: "Empresas",
    eyebrow: "Consultoría Corporativa",
    description:
      "Para organizaciones que entienden que la ética no es un costo, es su mayor ventaja competitiva.",
    cta: "Servicios Corporativos",
  },
  {
    href: "/deportistas",
    icon: "sports",
    title: "Deportistas",
    eyebrow: "Alto Rendimiento",
    description:
      "Para atletas que saben que la fortaleza mental es tan decisiva como el talento físico.",
    cta: "Ver Mentoría",
  },
];

const subtitle =
  "Cada proceso es único. Cada historia merece un acompañamiento a medida. Encontrá el espacio que fue diseñado para vos.";

export function NavigationPaths() {
  return (
    <section className="relative z-30 px-6 py-24 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-16 space-y-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span
              className="text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase"
            >
              ¿Donde está tu batalla?
            </span>
          </div>

          {/* Título + subtítulo en grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Elegí tu{" "}
              <span className="text-[#C9A84C]">camino.</span>
            </h2>

            {/* Subtítulo — alineado a la derecha en desktop */}
            <div className="lg:text-right">
              <p
                className="text-slate-500 text-sm leading-relaxed font-light max-w-sm lg:ml-auto"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                {subtitle}
              </p>
              {/* Línea decorativa debajo del texto */}
              <div className="flex lg:justify-end mt-4">
                <span className="w-8 h-px bg-[#3b8c5e] opacity-40" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {PATHS.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className="group relative overflow-hidden bg-background-dark p-10 transition-all duration-500 hover:bg-white/[0.03]"
            >
              {/* Shimmer dorado */}
              <div className="absolute inset-0 z-0
                bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.07)_50%,transparent_60%)]
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Glow dorado */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />

              {/* Línea dorada superior */}
              <div className="absolute top-0 left-0 right-0 h-px z-10
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              {/* Línea dorada inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-px z-10
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              <div className="relative z-10">

                {/* Número */}
                <span
                  className="text-xs tracking-[0.2em] text-white/10 font-medium mb-6 block"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  0{index + 1}
                </span>

                {/* Eyebrow */}
                <span
                  className="text-xs tracking-[0.18em] text-[#C9A84C] uppercase font-medium mb-3 block opacity-70"
                >
                  {path.eyebrow}
                </span>

                {/* Título */}
                <h2
                  className="text-3xl font-black text-white uppercase tracking-tight mb-4 leading-none
                    group-hover:text-[#E0BD6A] transition-colors duration-300"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {path.title}
                </h2>

                {/* Separador */}
                <div className="w-8 h-px bg-[#C9A84C]/30 mb-6 group-hover:bg-[#C9A84C] transition-colors duration-500" />

                {/* Descripción */}
                <p
                  className="text-slate-500 text-sm leading-relaxed mb-10 font-light"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {path.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#3b8c5e] group-hover:text-[#C9A84C] font-bold uppercase tracking-[0.15em] text-xs group-hover:gap-4 transition-all duration-300">
                  {path.cta}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}