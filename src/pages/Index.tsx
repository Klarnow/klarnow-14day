import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import Testimonial from "@/components/sections/Testimonial";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Modules from "@/components/sections/Modules";
import HumanControl from "@/components/sections/HumanControl";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import Enterprise from "@/components/sections/Enterprise";
import BrandOS from "@/components/sections/BrandOS";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <LogoBar />
        <Testimonial />
        <Problem />
        <Solution />
        <Features />
        <Modules />
        <HumanControl />
        <HowItWorks />
        <Pricing />
        <Roadmap />
        <Enterprise />
        <BrandOS />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
