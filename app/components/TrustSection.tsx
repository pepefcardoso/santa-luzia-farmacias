import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="py-14 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="uppercase tracking-widest text-accent-600 text-xs font-bold mb-2">
            Quem já é cliente sabe
          </p>
          <h2 className="font-display font-black text-2xl sm:text-3xl leading-tight mb-4">
            <span className="text-brand-900">Farmácia nova por aí?</span><br />
            <span className="text-brand-600">20 anos de experiência valem mais.</span>
          </h2>
          <p className="text-ink-muted mb-6">
            Experiência real não se copia. Aqui você é atendido por quem conhece
            a sua história, sabe as suas alergias e nunca vai só te vender, vai
            te orientar.
          </p>
          <ul className="space-y-3">
            {[
              "Farmacêutico presente todos os dias, não só no papel",
              "Estoque completo, opções para todas as suas necessidades",
              "Relacionamento de anos com médicos e clínicas do bairro",
              "Orientação gratuita sobre interações medicamentosas"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink">
                <svg
                  className="w-4 h-4 shrink-0 text-brand-600 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-96 relative">
          <Image
            src="/img/comunidade-bairro.jpg"
            alt="Cliente fiel das Farmácias Santa Luzia"
            width={800}
            height={600}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
