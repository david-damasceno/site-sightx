
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DataSection from "@/components/DataSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import ChatSimulation from "@/components/ChatSimulation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="bg-gray-50">
          <About />
        </div>
        <WhatsAppSection />
        <div className="bg-gray-50">
          <DataSection />
        </div>
        <div className="bg-gray-50" id="demo">
          <ChatSimulation />
        </div>
        <CTASection id="waitlist" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
