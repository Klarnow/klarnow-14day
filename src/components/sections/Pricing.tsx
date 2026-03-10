"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { PricingCards } from "@/components/pricing/PricingCards";

const PHONE_NUMBER = "+441616960976";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background-subtle"
      id="pricing"
    >
      <div className="container-wide">
        <div className={cn("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">What Klarnow installs</p>
          <h2 className="heading-section heading-mixed mb-3">
            Two ways to fix the leak
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Start with the AI Receptionist.<br />
            Upgrade to the full system when you need more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className={cn("scroll-fade-in", isVisible && "visible")}>
          <PricingCards showCTA={false} />
        </div>

        {/* CTA */}
        <div className={cn("text-center mt-10 scroll-fade-in", isVisible && "visible")} style={{ transitionDelay: "500ms" }}>
          <Button variant="hero" size="lg" asChild>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              Call Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">See it live on the call.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
