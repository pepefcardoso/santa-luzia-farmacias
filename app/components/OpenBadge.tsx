"use client";
import { useEffect, useState } from "react";
import { SCHEDULE, UnitId, DaySchedule } from "@/lib/data";

// Função responsável por calcular se a farmácia está aberta no momento
function isOpenNow(unit: UnitId): boolean {
  console.log(`[OpenBadge] 🕒 Calculando horário para a unidade: ${unit}`);
  
  try {
    const schedule = SCHEDULE[unit];
    if (!schedule || !Array.isArray(schedule) || schedule.length === 0) {
       console.log(`[OpenBadge] ❌ Sem agenda configurada para a unidade ${unit}`);
       return false;
    }

    // Pega o horário atual e força para o fuso de Brasília/SC para evitar bugs de fuso horário
    const nowStr = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    const now = new Date(nowStr);

    const dow = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const minutes = now.getHours() * 60 + now.getMinutes();

    console.log(`[OpenBadge] 📅 Dia da semana (0=Dom, 6=Sáb): ${dow} | ⏰ Minutos do dia: ${minutes}`);

    let rule: DaySchedule | undefined;

    // Busca qual regra do lib/data.ts devemos aplicar ao dia de hoje
    if (dow === 0) { // Domingo
      rule = schedule.find((r) => r.day.toLowerCase().includes("domingo"));
    } else if (dow === 6) { // Sábado
      rule = schedule.find((r) => {
        // Remove os acentos da palavra para evitar bugs de texto (ex: Sábado vs Sabado)
        const normalized = r.day.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalized.includes("sabado");
      }) || schedule[0];
    } else { // Segunda a Sexta
      rule = schedule[0];
    }

    if (!rule || !Array.isArray(rule.ranges)) {
        console.log(`[OpenBadge] ❌ Nenhuma regra encontrada para hoje.`);
        return false;
    }

    console.log(`[OpenBadge] ✅ Regra escolhida para hoje: "${rule.label}"`);

    // Compara os minutos atuais com os horários de abertura e fechamento
    const isOpen = rule.ranges.some(([open, close]) => {
        const isInRange = minutes >= open && minutes < close;
        console.log(`[OpenBadge] 🔍 Testando intervalo ${open} até ${close}: ${isInRange ? 'DENTRO' : 'FORA'}`);
        return isInRange;
    });

    console.log(`[OpenBadge] 🟢 Resultado Final - Está aberto? ${isOpen}`);
    return isOpen;

  } catch (error) {
    console.error("[OpenBadge] 🛑 Erro inesperado:", error);
    return false;
  }
}

export default function OpenBadge({ unitId, className = "" }: { unitId: UnitId, className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  // useEffect só roda no cliente (navegador). Se não rodar, a tela fica presa.
  useEffect(() => {
    console.log(`[OpenBadge] 🚀 useEffect funcionou! O React montou a unidade ${unitId}.`);
    
    // Calcula na hora que a página carrega
    setIsOpen(isOpenNow(unitId));

    // Refaz o cálculo a cada 1 minuto (60000 milissegundos)
    const interval = setInterval(() => {
      console.log(`[OpenBadge] 🔄 Refazendo cálculo de 1 minuto para a unidade ${unitId}.`);
      setIsOpen(isOpenNow(unitId));
    }, 60000);

    return () => clearInterval(interval);
  }, [unitId]);

  // Enquanto isOpen for null, mostramos a tela de carregamento (Passo 1)
  if (isOpen === null) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-500 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span>Verificando horário...</span>
      </span>
    );
  }

  // Se já calculamos, mostramos o resultado final (Passo 2)
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${isOpen ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-500'} ${className}`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-accent-600 animate-pulse' : 'bg-gray-400'}`}></span>
      <span>{isOpen ? 'Aberto agora' : 'Fechado no momento'}</span>
    </span>
  );
}
