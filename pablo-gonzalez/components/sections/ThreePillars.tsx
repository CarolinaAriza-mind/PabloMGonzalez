
const pillars = [
  {
    number: "01",
    title: "Credibilidad Auténtica",
    description:
      "Más allá de la percepción. Construyendo un núcleo de verdad que resuena con cada parte interesada.",
    alt: "Credibilidad Auténtica",
  },
  {
    number: "02",
    title: "Exclusividad",
    description:
      "Estrategias a medida para desafíos de liderazgo únicos. No ofrecemos soluciones genéricas.",
    alt: "Exclusividad",
  },
  {
    number: "03",
    title: "Transformación y Resiliencia",
    description:
      "Cambio sostenible que perdura a través de la volatilidad del mercado y transiciones personales.",
    alt: "Transformación y Resiliencia",
  },
];

export function ThreePillars() {
  return (
    <section id="pilares" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">
            Los Cimientos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Los Tres Pilares
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="text-primary text-4xl font-light mb-4 block">
                  {pillar.number}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
