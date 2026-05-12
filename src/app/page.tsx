import { siteConfig } from "@/lib/config";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { Steps } from "@/components/sections/Steps";
import { IframeReserva } from "@/components/sections/IframeReserva";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function Home() {
  const sections = siteConfig.sections;

  // Function to render the correct section component based on its type
  const renderSection = (section: any) => {
    switch (section.type) {
      case "navbar":
        return <Navbar key={section.id} />;
      case "hero":
        return <Hero key={section.id} />;
      case "stats":
        return <Stats key={section.id} />;
      case "benefits-grid":
        return <BenefitsGrid key={section.id} />;
      case "steps":
        return <Steps key={section.id} />;
      case "iframe-reserva":
        return <IframeReserva key={section.id} />;
      case "testimonials":
        return <Testimonials key={section.id} />;
      case "faq":
        return <FAQ key={section.id} />;

      case "footer":
        return <Footer key={section.id} />;
      default:
        // Handle unknown sections or skip them
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {sections.map((section) => renderSection(section))}
      <WhatsAppButton />
    </main>
  );
}
