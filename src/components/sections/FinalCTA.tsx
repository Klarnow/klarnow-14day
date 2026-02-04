import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      <div className={cn("hero-gradient h-48 md:h-64 flex items-center justify-center scroll-fade-in", isVisible && "visible")}>
        <div className="text-center px-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90 mb-5">
            {title || "Stop leaking bookings?"}
          </h2>
          <Button variant="hero" size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              Call now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <div className="text-xs text-foreground/60 mt-3">
            {subhead || "60-second Fit Check. See it live."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
