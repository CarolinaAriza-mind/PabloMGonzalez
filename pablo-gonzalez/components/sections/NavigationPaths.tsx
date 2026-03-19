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
    <section className="relative z-30 px-4 md:px-6 py-14 md:py-24 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 md:mb-16 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-[#3b8c5e] uppercase">
              ¿Donde está tu batalla?
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-end">
            <h2
              className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Elegí tu{" "}
              <span className="text-[#C9A84C]">camino.</span>
            </h2>

            <div className="lg:text-right">
             <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                {subtitle}
              </p>
              <div className="flex lg:justify-end mt-3">
                <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-40" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {PATHS.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className="group relative overflow-hidden bg-background-dark p-6 md:p-10
                transition-all duration-500
                hover:bg-white/[0.03] active:bg-white/[0.05]"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 z-0 pointer-events-none
                bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.07)_50%,transparent_60%)]
                translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%]
                transition-transform duration-1000 ease-in-out" />

              {/* Glow */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-0
                group-hover:opacity-100 group-active:opacity-100
                transition-opacity duration-700
                bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

              {/* Línea superior */}
              <div className="absolute top-0 left-0 right-0 h-px z-10
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 group-active:scale-x-100
                transition-transform duration-700" />

              {/* Línea inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-px z-10
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 group-active:scale-x-100
                transition-transform duration-700" />

              <div className="relative z-10">
                <span
                  className="text-xs tracking-[0.2em] text-white/10 font-medium mb-4 md:mb-6 block"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  0{index + 1}
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.18em] text-[#C9A84C] uppercase font-medium mb-2 md:mb-3 block opacity-70">
                  {path.eyebrow}
                </span>

                <h2
                  className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3 md:mb-4 leading-none
                    group-hover:text-[#E0BD6A] group-active:text-[#E0BD6A]
                    transition-colors duration-300"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {path.title}
                </h2>

                <div className="w-6 md:w-8 h-px bg-[#C9A84C]/30 mb-4 md:mb-6
                  group-hover:bg-[#C9A84C] group-active:bg-[#C9A84C]
                  transition-colors duration-500" />

                <p
                  className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 font-light"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {path.description}
                </p>

                <div className="flex items-center gap-2 text-[#3b8c5e]
                  group-hover:text-[#C9A84C] group-active:text-[#C9A84C]
                  font-bold uppercase tracking-[0.15em] text-xs
                  group-hover:gap-4 group-active:gap-4
                  transition-all duration-300">
                  {path.cta}
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
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