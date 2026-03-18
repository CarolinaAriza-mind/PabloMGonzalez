"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subtitle = "Consultor de liderazgo ético para personas y organizaciones.";
const subtitle2 = "Estrategias de alto impacto para quienes lideran el futuro.";

export function Hero() {
  return (
    <section className="relative w-full flex items-end justify-center overflow-hidden
      h-[100svh] md:h-screen">

      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30 z-10" />
        <Image
          src="/pg_bck_2.png"
          alt="Liderazgo"
          fill
          className="
            object-cover
            object-top          
            sm:object-center    
          "
          priority
          quality={100}
          unoptimized
          sizes="100vw"
        />
      </div>

      {/* ── Contenido ── */}
      <div className="relative z-30 w-full max-w-6xl mx-auto
        px-4 sm:px-6
        pb-10 sm:pb-14 md:pb-16
        space-y-3 md:space-y-4
        text-center">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="w-5 sm:w-6 md:w-8 h-px bg-[#C9A84C] opacity-60" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.18em] md:tracking-[0.25em] text-[#C9A84C] uppercase">
            Liderazgo Ético · Transformación Auténtica
          </span>
          <span className="w-5 sm:w-6 md:w-8 h-px bg-[#C9A84C] opacity-60" />
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          className="space-y-1 md:space-y-2 px-2 sm:px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            {subtitle}
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-slate-500 font-light leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            {subtitle2}
          </p>
        </motion.div>

      </div>
    </section>
  );
}