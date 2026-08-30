"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function WhatsAppFab() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed right-4 md:right-6 bottom-24 md:bottom-6 z-50" ref={containerRef}>
      {isOpen && (
        <div className="mb-3 flex flex-col gap-2 items-end">
          <Link
            href="/go/km60"
            className="flex items-center gap-2 bg-white shadow-lg border border-brand-100 text-brand-800 text-sm font-bold pl-4 pr-2 py-2 rounded-full whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            Unidade KM 60
            <span className="w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" />
              </svg>
            </span>
          </Link>
          <Link
            href="/go/morrotes"
            className="flex items-center gap-2 bg-white shadow-lg border border-brand-100 text-brand-800 text-sm font-bold pl-4 pr-2 py-2 rounded-full whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            Unidade Morrotes
            <span className="w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" />
              </svg>
            </span>
          </Link>
        </div>
      )}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white shadow-xl flex items-center justify-center transition active:scale-95"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.57.82 1.98.9 2.12.08.15.13.32.03.51-.11.19-.16.31-.32.48-.16.17-.34.38-.48.51-.16.15-.33.32-.14.63.19.32.85 1.41 1.83 2.28 1.26 1.13 2.32 1.48 2.64 1.65.32.16.5.14.69-.08.19-.22.81-.94 1.03-1.26.22-.32.43-.27.73-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.75-.16 1.43z" />
        </svg>
      </button>
    </div>
  );
}
