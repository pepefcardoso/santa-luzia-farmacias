import Link from "next/link";
import FooterYear from "./FooterYear";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 px-4 sm:px-6 py-10 text-center text-sm">
      <div className="flex justify-center gap-5 mb-5">
        <Link href="/go/instagram" aria-label="Instagram" className="hover:text-white">
          Instagram
        </Link>
        <Link href="/go/facebook" aria-label="Facebook" className="hover:text-white">
          Facebook
        </Link>
        <a
          href="https://g.page/r/CRVNVsoFMlP9EBI/review"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Avaliações Google - Unidade KM 60"
          className="hover:text-white"
        >
          Google KM 60
        </a>
        <a
          href="https://g.page/r/CRVNVsoFMlP9EBI/review"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Avaliações Google - Unidade Morrotes"
          className="hover:text-white"
        >
          Google Morrotes
        </a>
      </div>
      <p className="mb-1">Farmácias Santa Luzia Ltda</p>
      <p className="mb-1">
        CNPJ 07.847.597/0001-53 (KM 60) · 07.847.597/0002-34 (Morrotes)
      </p>
      <p className="text-brand-300">Responsável Técnico: Andrea Machado Luciano</p>
      <p className="text-brand-300 mt-4">
        © <FooterYear /> Farmácias Santa Luzia. Todos os direitos reservados.
      </p>
      <p className="text-brand-300">
        Desenvolvido por{" "}
        <a
          href="https://wa.me/5548991155026"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Pedro Paulo
        </a>
      </p>
    </footer>
  );
}
