import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-brand-100 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          aria-current="page"
          className="flex flex-col items-center gap-1 text-brand-700 font-bold"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
          </svg>
          <span className="text-[10px] uppercase tracking-wide">Início</span>
        </Link>
      </div>
    </nav>
  );
}
