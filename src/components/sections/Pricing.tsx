import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "+441616960976";

const plans = [
  {
    name: "System Install",
    price: "£1,995",
    description: "Core install in 14 days.",
    bestFor: "You have demand, want leak fixed.",
    featured: false,
  },
  {
    name: "Install + Activation",
    price: "£2,795",
    description: "Core + team activation.",
    bestFor: "Most businesses.",
    featured: true,
  },
  {
    name: "Activation + Proof",
    price: "£3,245",
    description: "Activation + content capture.",
    bestFor: "Competitive markets.",
    featured: false,
  },
];

const notes = [
  "Tools & ad spend paid by client.",
  "We guarantee installation, not revenue.",
  "4 priority slots per month.",
];

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
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="heading-section heading-mixed mb-3">
            Choose your <span className="serif-italic">level</span>
          </h2>
          <p className="text-body max-w-lg mx-auto">
            Every option installs the core system. Difference is activation support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8 md:mb-10">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={cn(
                "bg-card rounded-xl border p-5 relative transition-all duration-300 scroll-fade-in",
                plan.featured ? "border-foreground/20 shadow-lg" : "border-border/30 hover:border-border/60",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-2.5 left-5">
                  <span className="px-2.5 py-0.5 rounded-full bg-foreground text-background text-[10px] font-medium">
                    Most chosen
                  </span>
                </div>
              )}
              
              <h3 className="text-sm font-semibold text-foreground mb-1">{plan.name}</h3>
              <div className="text-2xl font-bold text-foreground mb-3">{plan.price}</div>
              <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
              
              <div className="pt-3 border-t border-border/30">
                <p className="text-[10px] text-muted-foreground mb-0.5">Best for:</p>
                <p className="text-xs text-foreground/80">{plan.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className={cn("max-w-md mx-auto mb-8 md:mb-10 scroll-fade-in", isVisible && "visible")} style={{ transitionDelay: "400ms" }}>
          <div className="space-y-1.5">
            {notes.map((note) => (
              <div key={note} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={cn("text-center scroll-fade-in", isVisible && "visible")} style={{ transitionDelay: "500ms" }}>
          <Button variant="hero" size="lg" asChild>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              Call now
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
