import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 bg-brand-700 px-4 sm:px-6 text-center">
      <p className="uppercase tracking-widest text-accent-200 text-sm font-bold mb-3">
        Estamos aqui pra ajudar
      </p>
      <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6">
        Fale agora com a farmácia mais perto de você.
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/go/km60"
          className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-whatsapp/25 transition active:scale-95"
        >
          Unidade KM 60
        </Link>
        <Link
          href="/go/morrotes"
          className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-6 py-4 rounded-2xl shadow-lg transition active:scale-95"
        >
          Unidade Morrotes
        </Link>
      </div>
    </section>
  );
}
