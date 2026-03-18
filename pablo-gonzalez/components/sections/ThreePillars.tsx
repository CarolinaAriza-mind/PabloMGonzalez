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
    <section id="pilares" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header narrativo ── */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase">
              Los Cimientos
            </span>
            <span className="w-8 h-px bg-[#3b8c5e] opacity-60" />
          </div>

          <h2
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-8"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            Tres pilares.
            <br />{" "}
            <span className="text-[#C9A84C]">Un solo camino.</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed font-light max-w-xl mx-auto">
            Todo proceso de transformación genuina descansa sobre tres verdades
            inamovibles. No son conceptos — son el resultado de haberlos vivido,
            perdido y reconquistado.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Imagen */}
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient base */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />

              {/* Glow dorado */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.35)_0%,transparent_70%)]" />

              {/* Shimmer */}
              <div className="absolute inset-0 z-10
                bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.15)_50%,transparent_60%)]
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-transform duration-1000 ease-in-out" />

              {/* Borde dorado inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-px z-20
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span
                  className="text-5xl font-light mb-4 block transition-colors duration-300 text-white/20 group-hover:text-[#C9A84C]"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="text-2xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {pillar.title}
                </h3>
                <div className="w-8 h-px bg-[#C9A84C] mb-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 delay-150 font-light max-w-xs">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Puente narrativo hacia los servicios ── */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <p
            className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed italic"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            &ldquo;El camino hacia tu mejor versión ya existe.
            Solo necesita ser recorrido con el guía correcto.&rdquo;
          </p>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-8 opacity-60" />
        </div>

      </div>
    </section>
  );
}