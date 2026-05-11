import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import Services from "@/components/Services";
import BusinessFramework from "@/components/BusinessFramework";
import SolutionsSlider from "@/components/SolutionsSlider";
import LeadGen from "@/components/LeadGen";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <LogoBanner />
        <Services />
        <BusinessFramework />
        <SolutionsSlider />
        <LeadGen />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
