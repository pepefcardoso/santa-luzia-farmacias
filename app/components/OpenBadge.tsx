"use client";
import { useEffect, useState } from "react";
import { UnitId } from "@/lib/data";
import { isUnitOpenNow } from "@/lib/schedule";

export default function OpenBadge({
  unitId,
  initialOpen,
  className = "",
}: {
  unitId: UnitId;
  initialOpen: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    const interval = setInterval(() => setIsOpen(isUnitOpenNow(unitId)), 60000);
    return () => clearInterval(interval);
  }, [unitId]);

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${isOpen ? "bg-brand-100 text-brand-700" : "bg-gray-100 text-gray-500"} ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isOpen ? "bg-accent-600 animate-pulse" : "bg-gray-400"}`}
      ></span>
      <span>{isOpen ? "Aberto agora" : "Fechado no momento"}</span>
    </span>
  );
}
