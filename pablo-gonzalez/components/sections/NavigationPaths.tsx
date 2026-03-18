import Link from "next/link";

const PATHS = [
  {
    href: "/personas",
    icon: "person",
    title: "Personas",
    description:
      "Desarrollo individual, coaching ejecutivo y maestría personal para líderes visionarios.",
    cta: "Explorar Crecimiento",
  },
  {
    href: "/empresas",
    icon: "corporate_fare",
    title: "Empresas",
    description:
      "Consultoría corporativa estratégica centrada en la ética y el rendimiento sostenible.",
    cta: "Servicios Corporativos",
  },
  {
    href: "/deportistas",
    icon: "sports",
    title: "Deportistas",
    description:
      "Mentoría de alto rendimiento, resiliencia mental y liderazgo dentro y fuera del campo.",
    cta: "Ver Mentoría",
  },
];

export function NavigationPaths() {
  return (
    <section className="relative z-30 px-6 mb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PATHS.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="group relative overflow-hidden bg-background-dark border border-white/10 rounded-2xl p-8 md:p-12 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,140,94,0.15)]"
          >
            <div className="relative z-10">
              {/* Ícono */}
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                {path.icon}
              </span>

              {/* Título */}
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                {path.title}
              </h2>

              {/* Descripción */}
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {path.description}
              </p>

              {/* CTA inline */}
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                {path.cta}
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>

            {/* Glow blob */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  );
}