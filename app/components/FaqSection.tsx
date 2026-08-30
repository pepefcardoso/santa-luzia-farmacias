import { FAQ } from "@/lib/data";

export default function FaqSection() {
  return (
    <section id="faq" className="py-14 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase tracking-widest text-accent-600 text-xs font-bold mb-2 text-center">
          Dúvidas frequentes
        </p>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-900 mb-10 text-center">
          Perguntas frequentes
        </h2>
        <div className="space-y-3">
          {FAQ.map((faq, index) => (
            <details
              key={index}
              className="group bg-brand-50 rounded-2xl border border-brand-100 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-display font-bold text-brand-900 list-none">
                {faq.question}
                <svg
                  className="w-5 h-5 shrink-0 text-brand-600 transition group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p
                className="px-5 pb-5 text-sm text-ink-muted"
                dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
