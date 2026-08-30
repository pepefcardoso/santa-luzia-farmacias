"use client";

import { SCHEDULE, UNITS } from "@/lib/data";
import OpenBadge from "./OpenBadge";

export default function HoursSection() {
  return (
    <section id="horario" className="py-14 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-widest text-accent-600 text-xs font-bold mb-2">
          Horários
        </p>
        <h2 className="font-display font-black text-2xl text-brand-900 mb-2">
          Horário de funcionamento
        </h2>
        <p className="text-sm text-ink-muted mb-8">
          Horários variam entre as unidades
        </p>
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {Object.values(UNITS).map((unit) => (
            <div key={unit.id}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display font-bold text-brand-900">
                  {unit.name}
                </h3>
                <OpenBadge unitId={unit.id} className="text-xs" />
              </div>
              <div className="bg-brand-50 rounded-2xl overflow-hidden border border-brand-100 divide-y divide-brand-100">
                {SCHEDULE[unit.id].map((s, index) => (
                  <div key={index} className="flex justify-between items-center px-5 py-4 text-sm">
                    <span className="font-semibold text-brand-900">{s.day}</span>
                    <span className="text-brand-600 font-bold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
