import Image from "next/image";

const features = [
  {
    icon: "corporate_fare",
    title: "Consultoría",
    description:
      "Guía estratégica para líderes de alto perfil navegando cambios globales complejos.",
  },
  {
    icon: "psychology",
    title: "Crecimiento Personal",
    description:
      "Desbloqueando el potencial individual mediante coaching riguroso basado en evidencia.",
  },
  {
    icon: "gavel",
    title: "Ética y Liderazgo",
    description:
      "Construyendo cimientos sobre la integridad y la credibilidad auténtica duradera.",
  },
  {
    icon: "auto_graph",
    title: "Resiliencia",
    description:
      "Forjando la fortaleza mental para prosperar bajo presión extrema y escrutinio.",
  },
];

export function BrandPositioning() {
  return (
    <section id="filosofia" className="py-24 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text + cards */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Posicionamiento de Marca
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              Especializados en liderazgo, desarrollo personal y consultoría
              ética. Cerramos la brecha entre la teoría abstracta y la realidad
              de alto nivel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-6 border border-primary/10 bg-primary/5 rounded-xl hover:border-primary/40 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl block">
                    {f.icon}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-transparent opacity-20 group-hover:opacity-40 transition-opacity rounded-xl" />
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/pg_bck_3.png"
                alt="Entorno Profesional de Alto Nivel"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
