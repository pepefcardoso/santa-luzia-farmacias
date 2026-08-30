import { WHY_US } from "@/lib/data";

const icons = {
  delivery: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1h1m8 0a2 2 0 11-4 0m4 0a2 2 0 004 0m-4 0h4m0 0h2a1 1 0 001-1v-3.5a1 1 0 00-.29-.7L18 8.5a1 1 0 00-.71-.3H13m-8 8a2 2 0 104 0" />
    </svg>
  ),
  card: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path strokeLinecap="round" d="M3 10h18" />
    </svg>
  ),
  smile: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 15.5 4 9.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
    </svg>
  ),
};

export default function WhyUsSection() {
  return (
    <section className="py-14 bg-brand-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center uppercase tracking-widest text-accent-600 text-xs font-bold mb-2">
          Por que a Santa Luzia
        </p>
        <h2 className="text-center font-display font-black text-2xl sm:text-3xl text-brand-900 mb-10">
          Por que escolher a Santa Luzia
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {WHY_US.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center text-brand-700">
                {icons[item.icon as keyof typeof icons]}
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted">
                  {item.description}
                  {item.linkText && item.linkUrl && (
                    <>
                      {" "}
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-700 font-semibold underline"
                      >
                        {item.linkText}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
