import Image from "next/image";

export default function ApoioSection() {
  return (
    <section className="bg-brand-50 py-10 text-center">
      <h3 className="uppercase tracking-widest text-ink-muted text-xs font-bold mb-4">
        Apoio
      </h3>
      <div className="flex justify-center">
        <a
          href="https://pedidosaqui.com.br"
          target="_blank"
          rel="noopener noreferrer"
          title="PedidosAqui — Cardápio digital, pedidos, salão e impressão automática"
          className="block bg-gray-900 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Image 
            src="/img/pedidos_aqui_logo.png" 
            alt="Pedidos Aqui" 
            width={120} 
            height={40} 
            className="h-10 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </a>
      </div>
    </section>
  );
}
