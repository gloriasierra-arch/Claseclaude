import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import SubsidyBanner from "@/components/SubsidyBanner";
import Sectors from "@/components/Sectors";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PropertyGrid />
      <SubsidyBanner />
      <Sectors />
      <ContactSection />
      <Footer />
    </main>
  );
}
