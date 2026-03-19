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

const bridgeQuote =
  "El camino hacia tu mejor versión ya existe. Solo necesita ser recorrido con el guía correcto.";

export function ThreePillars() {
  return (
    <section id="pilares" className="py-16 md:py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-5 md:mb-6">
            <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-[#3b8c5e] uppercase">
              Los Cimientos
            </span>
            <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
          </div>

          <h2
            className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-6 md:mb-8"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            Tres pilares, <br />
            <span className="text-[#C9A84C]">Un solo camino.</span>
          </h2>


          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
            Todo proceso de transformación genuina descansa sobre tres verdades
            inamovibles. No son conceptos, son el resultado de haberlos vivido,
            perdido y reconquistado.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative overflow-hidden cursor-pointer
                aspect-[4/3] sm:aspect-[3/4]"
            >
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover
                  grayscale group-hover:grayscale-0 group-active:grayscale-0
                  group-hover:scale-110 group-active:scale-105
                  transition-all duration-700"
              />

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />

              {/* Glow dorado */}
              <div
                className="absolute inset-0 z-10 opacity-0
                group-hover:opacity-100 group-active:opacity-100
                transition-opacity duration-700
                bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.35)_0%,transparent_70%)]"
              />

              {/* Shimmer */}
              <div
                className="absolute inset-0 z-10
                bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.15)_50%,transparent_60%)]
                translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%]
                transition-transform duration-1000 ease-in-out"
              />

              {/* Borde inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px z-20
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 group-active:scale-x-100
                transition-transform duration-700"
              />

              {/* Contenido — siempre visible en mobile */}
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 z-20">
                <span
                  className="text-2xl sm:text-3xl md:text-5xl font-light mb-2 md:mb-4 block
                    text-white/20 group-hover:text-[#C9A84C] group-active:text-[#C9A84C]
                    transition-colors duration-300"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {pillar.title}
                </h3>
                <div
                  className="w-6 md:w-8 h-px bg-[#C9A84C] mb-2 md:mb-3
                  scale-x-0 group-hover:scale-x-100 group-active:scale-x-100
                  transition-transform duration-500 origin-left"
                />
                {/* Descripción visible siempre en mobile */}
                <p
                  className="text-slate-300 text-xs leading-relaxed font-light max-w-xs
                  md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300 delay-150"
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Puente narrativo */}
        <div className="mt-12 md:mt-24 text-center max-w-2xl mx-auto px-4 md:px-0">
          <p
            className="text-base md:text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed italic"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            {bridgeQuote}
          </p>
          <div className="w-10 md:w-12 h-px bg-[#C9A84C] mx-auto mt-6 md:mt-8 opacity-60" />
        </div>
      </div>
    </section>
  );
}
