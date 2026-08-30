import { SERVICES } from "@/lib/data";

const icons = {
  delivery: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1h1m8 0a2 2 0 11-4 0m4 0a2 2 0 004 0m-4 0h4m0 0h2a1 1 0 001-1v-3.5a1 1 0 00-.29-.7L18 8.5a1 1 0 00-.71-.3H13m-8 8a2 2 0 104 0" />
    </svg>
  ),
  pressure: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  injection: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M9.76 14.24l-2.83 2.83m0-10.14l2.83 2.83m4.48 4.48l2.83 2.83" />
    </svg>
  ),
  earring: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4" />
    </svg>
  ),
  pharmacy: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 15.5 4 9.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
    </svg>
  ),
  store: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-9 9-5-5M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
    </svg>
  )
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-14 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center uppercase tracking-widest text-accent-600 text-xs font-bold mb-2">
          O que oferecemos
        </p>
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl text-brand-900 mb-10">
          Serviços nas Farmácias Santa Luzia
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-brand-50 rounded-2xl p-6 border border-brand-100 flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center text-brand-700">
                {icons[service.icon as keyof typeof icons]}
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-900 mb-1 flex items-center gap-2">
                  {service.title}
                  {service.free && (
                    <span className="text-[10px] uppercase tracking-wide font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">
                      Grátis
                    </span>
                  )}
                </h3>
                <p className="text-sm text-ink-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
