import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Credibilidad Auténtica",
    description:
      "Más allá de la percepción. Construyendo un núcleo de verdad que resuena con cada parte interesada.",
    image: "/pg_bck_3.png",
    alt: "Credibilidad Auténtica",
  },
  {
    number: "02",
    title: "Exclusividad",
    description:
      "Estrategias a medida para desafíos de liderazgo únicos. No ofrecemos soluciones genéricas.",
    image: "/pilar.png",
    alt: "Exclusividad",
  },
  {
    number: "03",
    title: "Transformación y Resiliencia",
    description:
      "Cambio sostenible que perdura a través de la volatilidad del mercado y transiciones personales.",
    image: "/spartano.jpeg",
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
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              {/* Imagen — escala + desaturación en hover */}
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient overlay base */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />

              {/* Gradiente dorado — aparece en hover con movimiento */}
              <div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700
        bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.35)_0%,transparent_70%)]"
              />

              {/* Shimmer dorado — barre de izquierda a derecha */}
              <div
                className="absolute inset-0 z-10 
        bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.15)_50%,transparent_60%)]
        translate-x-[-100%] group-hover:translate-x-[100%] 
        transition-transform duration-1000 ease-in-out"
              />

              {/* Borde dorado inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px z-20 
        bg-gradient-to-r from-transparent via-primary to-transparent 
        scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span
                  className="text-primary text-4xl font-light mb-4 block 
          group-hover:text-[#E0BD6A] transition-colors duration-300"
                >
                  {pillar.number}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p
                  className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 delay-150"
                >
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
