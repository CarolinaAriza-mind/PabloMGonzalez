import Link from "next/link";

export function CallToAction() {
  return (
    <section id="consultoria" className="py-24 px-6 border-t border-primary/10">
      <div className="max-w-5xl mx-auto bg-primary/10 rounded-3xl p-12 md:p-20 text-center border border-primary/20 relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight relative z-10">
          ¿Listo para el Siguiente Nivel de{" "}
          <span className="text-primary">Liderazgo?</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light relative z-10">
          La solicitud de consultoría es estrictamente selectiva. Solo nos
          asociamos con quienes están comprometidos con una transformación ética
          radical.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contacto"
            className="bg-primary text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(59,140,94,0.4)] transition-all rounded-lg"
          >
            Contactar para Consultoría
          </Link>
        </div>
      </div>
    </section>
  );
}
