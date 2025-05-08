import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
