import { UNITS } from "@/lib/data";
import QrPopover from "./QrPopover";

export default function ReviewsSection() {
  return (
    <div className="pb-14 bg-white px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        {Object.values(UNITS).map((unit) => (
          <QrPopover 
            key={unit.id}
            url={unit.reviewUrl}
            alt={`Avaliações - ${unit.name}`}
          />
        ))}
      </div>
    </div>
  );
}
