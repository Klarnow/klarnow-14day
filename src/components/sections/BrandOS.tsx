"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const BrandOS = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding hero-gradient"
      id="brand-os"
    >
      <div className="container-narrow text-center">
        <div className={cn("scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">We launching soon, be one of the first to</p>

          <h2 className="heading-section heading-mixed mb-4">
            Generate your <span className="serif-italic">Brand OS</span> in 60 seconds.
          </h2>
          <p className="text-body max-w-lg mx-auto mb-2">
            Get positioning, offer clarity, and messaging you can use today. Free. Instant. No email required.
          </p>
          <p className="text-body max-w-lg mx-auto mb-8 font-medium">
            Then call when you want the system installed.
          </p>

          <Button variant="hero-secondary" size="lg" asChild>
            <a
              href="https://staging.klarnow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Generate my Brand OS
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandOS;
