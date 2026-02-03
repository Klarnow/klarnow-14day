import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient banner */}
      <div className="gradient-bottom h-64 md:h-80 flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 mb-6">
            Want to stop leaking bookings?
          </h2>
          <Button variant="hero" size="xl" asChild className="bg-foreground text-background hover:bg-foreground/90">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3">
              Call now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-foreground/60 mt-4">
            60-second Fit Check. See it live on the call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
