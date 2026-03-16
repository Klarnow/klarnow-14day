"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
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
      <div className={cn("hero-gradient py-20 md:py-32 flex items-center justify-center scroll-fade-in", isVisible && "visible")}>
        <div className="text-center px-5 max-w-3xl mx-auto">
          <p className="eyebrow mb-6">FINAL STEP</p>
          <h2 className="heading-section mb-6">
            Ready to see what is slowing <br />
            <span className="serif-italic">your lead flow down?</span>
          </h2>
          <p className="text-body mb-10 max-w-2xl mx-auto font-medium">
            Book a 60-Second Fit Check and we will show you where growth is leaking,
            what is getting missed, and what Klarnow should fix first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild className="bg-primary hover:bg-primary/90 min-w-[200px]">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild className="border-primary/20 hover:bg-primary/5 min-w-[200px]">
              <a href="/fit-check" className="flex items-center gap-2">
                60-Second Fit Check
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-foreground/60 mt-8 font-bold uppercase tracking-widest">
            See the AI Receptionist live on the call.
          </p>
        </div>
      </div>
    </section>
  );

};

export default FinalCTA;