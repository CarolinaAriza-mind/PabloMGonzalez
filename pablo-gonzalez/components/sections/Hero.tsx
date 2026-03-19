"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subtitle = "Consultor de liderazgo ético para personas y organizaciones.";
const subtitle2 = "Estrategias de alto impacto para quienes lideran el futuro.";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ── MOBILE — imagen horizontal completa ── */}
      <div className="block md:hidden">

        {/* aspect-[16/9] respeta la proporción real de la imagen */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/pg_bck_2.png"
            alt="Liderazgo"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark" />
        </div>

        {/* Texto debajo */}
        <div className="bg-background-dark px-4 pb-12 pt-4 space-y-4 text-center">
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="w-5 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-[#3b8c5e] uppercase">
              Liderazgo Ético · Transformación Auténtica
            </span>
            <span className="w-5 h-px bg-[#3b8c5e] opacity-60" />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p
              className="text-base text-slate-300 font-light leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              {subtitle}
            </p>
            <p
              className="text-sm text-slate-500 font-light leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              {subtitle2}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── TABLET / DESKTOP — full screen ── */}
      <div className="hidden md:flex relative h-screen items-end justify-center">
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
            sizes="100vw"
          />
        </div>

        <div className="relative z-30 w-full max-w-6xl mx-auto px-6 pb-16 space-y-4 text-center">
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

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p
              className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              {subtitle}
            </p>
            <p
              className="text-base lg:text-lg text-slate-500 font-light leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              {subtitle2}
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}