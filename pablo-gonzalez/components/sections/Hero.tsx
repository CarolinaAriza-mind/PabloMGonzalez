"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden">

      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        {/* Difuminado inferior — cubre el corte de sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark z-10" />
        {/* Difuminado lateral suave */}
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

      {/* ── Subtítulo abajo ── */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pb-32">
        <motion.p
          className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Consultor de liderazgo ético para personas y organizaciones.
          Estrategias de alto impacto para quienes lideran el futuro.
        </motion.p>
      </div>

    </section>
  );
}