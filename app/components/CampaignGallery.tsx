import Image from "next/image";

interface CampaignGalleryProps {
  images: string[];
}

export function CampaignGallery({ images }: CampaignGalleryProps) {
  if (!images || images.length === 0) return null;

  const largeImage = images[0];
  const smallImages = images.slice(1, 4);

  return (
    <section className="hidden lg:block w-full max-w-7xl mx-auto px-8 mb-16">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[550px]">
        {/* 1. Text Block: Top Left (Spans 3 columns) */}
        <div className="bg-[#004d40] text-white p-10 flex flex-col justify-center rounded-xl col-span-3 row-span-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Acompanhe Nossas Novidades
          </h2>
          <p className="text-white/90 text-lg max-w-prose">
            Fique por dentro das nossas ofertas, campanhas especiais, avisos e
            datas comemorativas. Nossa dedicação é cuidar de você e da sua
            família diariamente.
          </p>
        </div>

        {largeImage && (
          <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
            <Image
              src={`/img/gallery/${largeImage}`}
              alt=""
              fill
              className="object-contain p-2"
              sizes="40vw"
              priority
            />
          </div>
        )}

        {smallImages.map((img, idx) => (
          <div
            key={idx}
            className="relative col-span-1 row-span-1 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center"
          >
            <Image
              src={`/img/gallery/${img}`}
              alt=""
              fill
              className="object-contain p-2"
              sizes="20vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
