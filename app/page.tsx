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

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
