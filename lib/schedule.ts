import { SCHEDULE, UnitId, DaySchedule } from "@/lib/data";

export function isUnitOpenNow(unitId: UnitId): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const minutes = hour * 60 + minute;
  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    weekday,
  );

  const rules = SCHEDULE[unitId];
  if (!rules?.length) return false;

  let rule: DaySchedule | undefined;
  if (dow === 0) {
    rule = rules.find((r) => r.day.toLowerCase().includes("domingo"));
  } else if (dow === 6) {
    rule =
      rules.find((r) => {
        const n = r.day
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return n.includes("sabado");
      }) ?? rules[0];
  } else {
    rule = rules[0];
  }

  if (!rule?.ranges?.length) return false;
  return rule.ranges.some(
    ([open, close]) => minutes >= open && minutes < close,
  );
}
