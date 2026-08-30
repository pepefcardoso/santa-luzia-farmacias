"use client";

import { useEffect, useState, useRef } from "react";
import { TESTIMONIALS, UNITS } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (TESTIMONIALS.length === 0) return;
    
    const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    let auto = setInterval(next, 5000);
    
    const track = trackRef.current;
    if (track) {
      const handleEnter = () => clearInterval(auto);
      const handleLeave = () => { auto = setInterval(next, 5000); };
      
      track.addEventListener("mouseenter", handleEnter);
      track.addEventListener("mouseleave", handleLeave);
      
      return () => {
        clearInterval(auto);
        track.removeEventListener("mouseenter", handleEnter);
        track.removeEventListener("mouseleave", handleLeave);
      };
    }
    
    return () => clearInterval(auto);
  }, []);

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-14 bg-white px-4 sm:px-6 text-center">
      <h2 className="font-display font-black text-2xl text-brand-900 mb-6">
        Veja o que dizem sobre a gente
      </h2>
      <div className="relative max-w-md mx-auto mb-8">
        <div className="overflow-hidden rounded-2xl" ref={trackRef}>
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full shrink-0 bg-brand-50 rounded-2xl p-5 border border-brand-100 text-left">
                <div className="text-brand-500 text-sm mb-1">
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
                {t.text && <p className="text-sm text-ink-muted mb-3">{t.text}</p>}
                <p className="text-xs font-bold text-brand-700">{t.name}</p>
                <p className="text-xs text-ink-muted">{UNITS[t.unit]?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-1.5 mt-4">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-brand-600' : 'bg-brand-200'}`}
              aria-label={`Avaliação ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
