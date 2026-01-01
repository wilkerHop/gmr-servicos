import { BentoGrid } from "@/components/BentoGrid";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <TrustSection />
      <ContactSection />
    </>
  );
}
