"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-brand-100 transition-shadow ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image
            src="/img/logo.png"
            alt="Farmácias Santa Luzia"
            width={160}
            height={40}
            className="h-8 w-auto object-contain shrink-0"
            priority
          />
        </Link>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="#unidades"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 px-2"
          >
            <svg
              className="w-4 h-4"
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
            Nossas unidades
          </Link>
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              id="cta-whatsapp"
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-bold px-4 py-2.5 rounded-2xl shadow-sm transition active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" />
              </svg>
              WhatsApp
            </button>
            
            {/* Popover Menu */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                id="nav-wa-menu"
                className="absolute right-0 mt-2 flex flex-col gap-1 bg-white shadow-lg border border-brand-100 rounded-2xl p-2 min-w-[180px] z-50"
              >
                <Link
                  href="/go/km60"
                  className="text-sm font-semibold text-brand-800 hover:bg-brand-50 px-3 py-2 rounded-xl transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Unidade KM 60
                </Link>
                <Link
                  href="/go/morrotes"
                  className="text-sm font-semibold text-brand-800 hover:bg-brand-50 px-3 py-2 rounded-xl transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Unidade Morrotes
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
