import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const steps = [
  { number: "1", title: "Call now", description: "60-second Fit Check." },
  { number: "2", title: "See it live", description: "Watch it in action." },
  { number: "3", title: "Install", description: "Go live in 14 days." },
];

const requirements = [
  "Business hours & services",
  "Booking rules & calendar",
  "Escalation contact",
  "Tone approvals",
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-muted/30" 
      id="how-it-works"
    >
      <div className="container-wide">
        <div className={cn("text-center mb-10 md:mb-12 scroll-fade-in", isVisible && "visible")}>
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Process</p>
          <h2 className="heading-section">
            Call. See it. Install.
          </h2>
        </div>

        {/* Steps */}
        <div className={cn("grid md:grid-cols-3 gap-6 mb-10 md:mb-12 scroll-fade-in", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background mb-4">
                <span className="text-sm font-semibold">{step.number}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className={cn("max-w-md mx-auto scroll-fade-in", isVisible && "visible")} style={{ transitionDelay: "200ms" }}>
          <div className="bg-card rounded-xl border border-border/30 p-5">
            <h4 className="font-semibold text-foreground text-sm mb-4 text-center">What we need from you</h4>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {requirements.map((req) => (
                <div key={req} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-success flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{req}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/70 text-center">
              We plug into Cal.com or your existing calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
