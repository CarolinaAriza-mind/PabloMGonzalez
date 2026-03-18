"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subtitle = "Consultor de liderazgo ético para personas y organizaciones.";
const subtitle2 = "Estrategias de alto impacto para quienes lideran el futuro.";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden">

      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30 z-10" />
        <Image
          src="/pg_bck_2.png"
          alt="Liderazgo"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* ── Contenido ── */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-6 pb-16 space-y-4 text-center">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="w-8 h-px bg-[#3b8c5e] opacity-60" />
          <span className="text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase">
            Liderazgo Ético · Transformación Auténtica
          </span>
          <span className="w-8 h-px bg-[#3b8c5e] opacity-60" />
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <p
            className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            {subtitle}
          </p>
          <p
            className="text-base md:text-lg text-slate-500 font-light leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            {subtitle2}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
