import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

const plans = [
  {
    name: "System Install",
    price: "£1,995",
    description: "Core install in 14 days.",
    bestFor: "You already have demand and want the leak fixed.",
    featured: false,
  },
  {
    name: "System Install + Activation",
    price: "£2,795",
    description: "Core install plus activation so the team uses it properly.",
    bestFor: "Most businesses.",
    featured: true,
  },
  {
    name: "Activation + Proof Pack",
    price: "£3,245",
    description: "Activation plus content capture so marketing matches the system.",
    bestFor: "Competitive markets.",
    featured: false,
  },
];

const notes = [
  "Software tools and ad spend are paid by the client directly.",
  "We guarantee installation, not revenue.",
  "4 priority install slots per month.",
];

const Pricing = () => {
  return (
    <section className="section-padding bg-background-subtle" id="pricing">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">Pricing</p>
          <h2 className="heading-section heading-mixed mb-4">
            Choose your <span className="serif-italic">install level</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Every option installs the core system. The difference is activation support and proof creation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-card rounded-2xl border p-6 lg:p-8 relative transition-all duration-300 ${
                plan.featured 
                  ? "border-foreground/20 shadow-lg" 
                  : "border-border/30 hover:border-border/60"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                    Most chosen
                  </span>
                </div>
              )}
              
              <h3 className="text-base font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-foreground mb-4">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground mb-1">Best for:</p>
                <p className="text-sm text-foreground/80">{plan.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="space-y-2">
            {notes.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              Call now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">See it live on the call.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
