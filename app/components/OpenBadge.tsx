"use client";

import { useEffect, useState } from "react";
import { SCHEDULE, UnitId } from "@/lib/data";

function isOpenNow(unit: UnitId) {
  const schedule = SCHEDULE[unit];
  
  if (!schedule || !Array.isArray(schedule)) return false; 
  
  const now = new Date();
  const dow = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  
  let rule;
  
  if (dow === 0) {
    rule = schedule.find((r) => r.day === "Domingo");
  } else if (dow === 6) {
    rule = schedule.find((r) => r.day === "Sábado") || 
           schedule.find((r) => r.day.toLowerCase().includes("sábado")) || 
           schedule[0];
  } else {
    rule = schedule[0];
  }
  
  if (!rule || !Array.isArray(rule.ranges)) return false;
  
  return rule.ranges.some(([open, close]) => minutes >= open && minutes < close);
}

export default function OpenBadge({ unitId, className = "" }: { unitId: UnitId, className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(isOpenNow(unitId));
    
    const interval = setInterval(() => {
      setIsOpen(isOpenNow(unitId));
    }, 60000);
    
    return () => clearInterval(interval);
  }, [unitId]);

  if (isOpen === null) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-500 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span>Verificando horário…</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${isOpen ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-500'} ${className}`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-accent-600 animate-pulse' : 'bg-gray-400'}`}></span>
      <span>{isOpen ? 'Aberto agora' : 'Fechado no momento'}</span>
    </span>
  );
}
