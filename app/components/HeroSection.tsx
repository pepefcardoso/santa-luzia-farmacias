import Image from "next/image";
import Link from "next/link";
import OpenBadge from "./OpenBadge";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white pt-10 pb-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            <OpenBadge unitId={1} />
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-brand-900 leading-[1.1] mb-4">
            Farmácias Santa Luzia em <span className="text-brand-600">Tubarão</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Duas unidades pra te atender: <strong className="text-brand-700">KM 60</strong> e <strong className="text-brand-700">Morrotes</strong>. Entrega rápida e atendimento humanizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start max-w-md sm:max-w-none mx-auto md:mx-0">
            <Link
              href="/go/km60"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-whatsapp/25 transition active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" />
              </svg>
              Fale no WhatsApp
            </Link>
            <Link
              href="#unidades"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-600 text-brand-700 hover:bg-brand-50 font-bold px-6 py-4 rounded-2xl transition active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              Ver unidades
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl h-72 sm:h-96 md:h-full relative">
            <Image
              src="/img/hero-farmacia.jpg"
              alt="Farmacêutico da Santa Luzia preparando medicamento"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="absolute -bottom-4 left-4 sm:left-6 bg-white shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
                <circle cx="7.5" cy="17.5" r="1.5" />
                <circle cx="17.5" cy="17.5" r="1.5" />
              </svg>
            </span>
            <div className="text-left leading-tight">
              <p className="text-xs font-bold text-brand-900">Entrega sem complicação</p>
              <p className="text-[11px] text-ink-muted">Saiba mais no WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
