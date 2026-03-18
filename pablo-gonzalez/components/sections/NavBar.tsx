"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Pilares", href: "#pilares" },
  { label: "Consultoría", href: "#consultoria" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ── Logo ── */}
        <div className="flex items-center gap-4">
          {/* Hamburger — solo mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              menu
            </span>
          </button>

          <Link href="/" className="flex items-center">
            <div className="relative h-32 w-40">
              <Image
                src="/ICONO PNG (4).png"
                alt="Pablo González"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* ── CTA ── */}
        <Link
          href="#contacto"
          className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded"
        >
          Contacto
        </Link>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-background-dark border-t border-primary/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
