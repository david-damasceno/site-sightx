
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DonnaSection from "@/components/DonnaSection";
import DataSection from "@/components/DataSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import ChatSimulation from "@/components/ChatSimulation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <DonnaSection />
        <DataSection />
        <WhatsAppSection />
        <ChatSimulation />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
