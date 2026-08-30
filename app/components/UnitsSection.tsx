import { UNITS } from "@/lib/data";
import Link from "next/link";

export default function UnitsSection() {
  return (
    <section id="unidades" className="py-14 bg-brand-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl text-brand-900 mb-10">
          Nossas unidades em Tubarão
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.values(UNITS).map((unit) => (
            <div key={unit.id} className="bg-white rounded-2xl border border-brand-100 shadow-sm overflow-hidden">
              <div className="rounded-t-2xl overflow-hidden h-56">
                <iframe
                  title={`${unit.name} - Farmácias Santa Luzia`}
                  src={unit.mapEmbedSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-brand-900 mb-1">
                  {unit.name}
                </h3>
                <p className="text-sm text-ink-muted mb-4 flex items-start gap-2 whitespace-pre-line">
                  <svg
                    className="w-4 h-4 shrink-0 text-brand-600 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21z"
                    />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  {unit.address}, CEP {unit.cep}
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href={unit.id === 1 ? "/go/km60" : "/go/morrotes"}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-bold px-4 py-3 rounded-xl transition active:scale-95"
                  >
                    WhatsApp
                  </Link>
                  <a
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-brand-600 text-brand-700 hover:bg-brand-50 text-sm font-bold px-4 py-3 rounded-xl transition active:scale-95"
                  >
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
