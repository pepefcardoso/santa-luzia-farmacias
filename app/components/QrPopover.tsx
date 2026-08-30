"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface QrPopoverProps {
  url: string;
  alt: string;
}

export default function QrPopover({ url, alt }: QrPopoverProps) {
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
    <div className="relative inline-flex items-center gap-2" ref={containerRef}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-brand-600 text-brand-700 hover:bg-brand-50 font-bold px-6 py-3 rounded-2xl transition active:scale-95"
      >
        {alt}
      </a>
      <button
        type="button"
        aria-label={`Mostrar QR code para avaliação - ${alt}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border-2 border-brand-600 text-brand-700 hover:bg-brand-50 transition active:scale-95"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path strokeLinecap="round" d="M14 14h3m4 0h0M14 18h3m-3 3h3m4-7v7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-brand-100 p-3">
          <Image
            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`}
            width={180}
            height={180}
            alt={`QR code para ${alt}`}
            className="rounded-lg"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
