import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import ServicesSection from "./components/ServicesSection";
import HoursSection from "./components/HoursSection";
import UnitsSection from "./components/UnitsSection";
import TrustSection from "./components/TrustSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ReviewsSection from "./components/ReviewsSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import ApoioSection from "./components/ApoioSection";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import WhatsAppFab from "./components/WhatsAppFab";
import fs from "fs/promises";
import path from "path";
import { CampaignGallery } from "./components/CampaignGallery";

export const revalidate = 60;

export default async function Home() {
  const galleryDir = path.join(process.cwd(), "public", "img", "gallery");
  let galleryImages: string[] = [];

  try {
    const files = await fs.readdir(galleryDir);
    galleryImages = files.filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file),
    );
  } catch (error) {
    console.error("Gallery directory not found or unreadable.", error);
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {galleryImages.length > 0 && (
          <section className="py-8">
            <CampaignGallery images={galleryImages} />
          </section>
        )}
        <WhyUsSection />
        <ServicesSection />
        <HoursSection />
        <UnitsSection />
        <TrustSection />
        <TestimonialsSection />
        <ReviewsSection />
        <FaqSection />
        <CtaSection />
        <ApoioSection />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppFab />
    </>
  );
}
