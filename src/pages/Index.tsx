import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import ProductPreview from "@/components/sections/ProductPreview";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
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
        <ProductPreview />
        <Problem />
        <Solution />
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
