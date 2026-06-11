import { siteConfig } from "@/lib/config";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesBanner } from "@/components/sections/ServicesBanner";
import { Team } from "@/components/sections/Team";
import { ReservaSection } from "@/components/sections/ReservaSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Alianzas } from "@/components/sections/Alianzas";
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
      case "services-banner":
        return <ServicesBanner key={section.id} />;
      case "team":
        return <Team key={section.id} />;
      case "reserva-unified":
        return <ReservaSection key={section.id} />;
      case "testimonials":
        return <Testimonials key={section.id} />;
      case "alianzas":
        return <Alianzas key={section.id} />;
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
