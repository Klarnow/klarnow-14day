"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, StepBack } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+441616960976";

interface FinalCTAProps {
  title?: string;
  subhead?: React.ReactNode;
}

const FinalCTA = ({ title, subhead }: FinalCTAProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
    >
      <div className={cn("hero-gradient py-16 md:py-24 flex items-center justify-center scroll-fade-in", isVisible && "visible")}>
        <div className="text-center px-5 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">Ready to see what is leaking?</p>
          <h2 className="heading-section mb-6">
            Let’s find the gap in your lead flow.
          </h2>
          <p className="text-body mb-8">
            Book a 60-Second Fit Check and we’ll show you what needs fixing first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                Call Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild className="border-foreground/20 hover:bg-muted/30">
              <a href="/fit-check">60-Second Fit Check</a>
            </Button>
          </div>
          <div className="text-xs text-foreground/60 mt-4 font-medium">
            See the AI Receptionist live on the call.
          </div>
        </div>
      </div>
    </section>
  );

};

export default FinalCTA;
StepBack