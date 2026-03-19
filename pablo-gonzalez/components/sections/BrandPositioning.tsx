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

const quote =
  "Las heridas no son el final de tu historia — son el prólogo de tu mayor fortaleza.";
const p1 =
  "He navegado la incertidumbre, enfrentado mis propios miedos y transformado los momentos más oscuros en lecciones de fortaleza interior. No desde la teoría — desde la experiencia real de quien tocó fondo y eligió levantarse.";
const p2 =
  "Mi compromiso es acompañarte desde la autenticidad, no desde la perfección. Porque el verdadero liderazgo no nace de no haber caído — nace de saber levantarse con más claridad que antes.";
const p3 =
  "Ofrezco acompañamiento real, basado en empatía y experiencia vivida. Cierro la brecha entre la teoría abstracta y la realidad de alto nivel — porque yo mismo he estado en ese punto de quiebre.";

export function BrandPositioning() {
  return (
    <section
      id="filosofia"
      className="py-16 md:py-24 px-4 md:px-6 bg-background-dark"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
        {/* ── BLOQUE 1 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Imagen */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-transparent opacity-20 group-hover:opacity-40 group-active:opacity-40 transition-opacity rounded-xl" />
            <div className="absolute inset-0 z-10 rounded-xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0
                bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.1)_50%,transparent_60%)]
                translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%]
                transition-transform duration-1000 ease-in-out"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700
                bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.15)_0%,transparent_70%)]"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-700"
              />
            </div>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/pg_bck_3.png"
                alt="Pablo González"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-105 group-active:scale-105 transition-all duration-700"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 space-y-5 md:space-y-8">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
              <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
                Mi Historia
              </span>
            </div>

            <h2
              className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              La vida no te rompe,
              <br /> <span className="text-[#C9A84C]">Te prepara</span>
            </h2>
            <blockquote className="border-l-2 border-[#3b8c5e] pl-4 md:pl-6 my-4 md:my-8">
              <p
                className="text-base md:text-lg lg:text-xl text-slate-300 font-light leading-relaxed italic"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                {quote}
              </p>
            </blockquote>

            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
              {p1}
            </p>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
              {p2}
            </p>
          </div>
        </div>

        {/* ── BLOQUE 2 ── */}
        <div className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4">
            <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
              Enfoque
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-4 md:space-y-6">
              <h2
                className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                No ofrezco soluciones{" "}
                <span className="text-[#C9A84C]">mágicas.</span>
              </h2>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
                {p3}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group/card relative overflow-hidden p-5 md:p-6 border border-white/5 bg-white/[0.02]
                    hover:border-[rgba(201,168,76,0.3)] active:border-[rgba(201,168,76,0.3)]
                    transition-all duration-500 cursor-default"
                >
                  <div
                    className="absolute inset-0
                    bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.06)_50%,transparent_60%)]
                    translate-x-[-100%] group-hover/card:translate-x-[100%] group-active/card:translate-x-[100%]
                    transition-transform duration-1000 ease-in-out pointer-events-none"
                  />
                  <span
                    className="material-symbols-outlined text-primary group-hover/card:text-[#C9A84C] group-active/card:text-[#C9A84C] mb-3 md:mb-4 block transition-colors duration-300"
                    style={{ fontSize: "24px" }}
                  >
                    {f.icon}
                  </span>
                  <h3 className="text-sm md:text-base font-bold mb-2 group-hover/card:text-[#E0BD6A] group-active/card:text-[#E0BD6A] transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
