import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container-narrow text-center">
        <h2 className="heading-section mb-6">Want to stop leaking bookings?</h2>
        <p className="text-body max-w-2xl mx-auto mb-8">
          Call now for a 60-second Fit Check. We'll confirm fit and the next start date.
        </p>
        
        <Button variant="hero" size="xl" asChild>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call now
          </a>
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          See it live on the call.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
