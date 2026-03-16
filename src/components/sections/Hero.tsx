"use client";

import { Button } from "@/components/ui/button"; 
import { ArrowRight } from "lucide-react";

const PHONE_NUMBER = "+441616960976";
const trustChips = ["Installed in 14 days", "Managed monthly", "Built for UK service businesses"];

const Hero = () => {
  return <section className="relative hero-gradient min-h-[80vh] md:min-h-[85vh] flex items-center justify-center pt-40 pb-12 md:pt-52 md:pb-16 overflow-hidden">
    <div className="container-wide relative">
      <div className="max-w-4xl mx-auto text-center shadow-none my-0">
        {/* Subtitle */}
        <p className="eyebrow mb-4 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          Klarnow for UK service businesses
        </p>

        {/* Main headline */}
        <h1 className="heading-display mb-4 md:mb-6 animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
          Get more leads. <br />
          Book more customers. <br />
          <span className="gradient-text">Grow without the gaps.</span>
        </h1>

        {/* Sub-head */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up leading-relaxed" style={{
          animationDelay: "0.2s"
        }}>
          Klarnow helps UK service businesses get more of the right enquiries, convert more of 
          them into paying customers, and grow with a managed system that keeps working every 
          month. Installed in 14 days.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-12 animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
          <Button variant="hero" size="lg" asChild>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              Call Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="hero-secondary" size="lg" asChild>
            <a href="/fit-check">60-Second Fit Check</a>
          </Button>
        </div>

        {/* Trust chips / Proof Strip */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in-up" style={{
          animationDelay: "0.45s"
        }}>
          {trustChips.map(chip => (
            <div key={chip} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[hsl(262,83%,58%)] rounded-full" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;

