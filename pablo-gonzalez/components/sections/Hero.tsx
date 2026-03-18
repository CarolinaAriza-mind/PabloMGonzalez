import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ── Background image + gradient overlay ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/60 to-background-dark z-10" />
        <Image
          src="/spartano.jpeg"
          alt="Casco Espartano — Liderazgo"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none uppercase">
          Pablo M <span className="text-primary">Gonzalez</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Consultor de liderazgo ético para personas y organizaciones.
          Estrategias de alto impacto para quienes lideran el futuro.
        </p>
      </div>
    </section>
  );
}
