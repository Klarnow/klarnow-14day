import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";

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
        <div className="text-center mb-6">
          <h2 className="heading-section mb-4">Choose your install level</h2>
          <p className="text-body max-w-2xl mx-auto">
            Every option installs the core system. The difference is activation support and proof creation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`card-premium p-6 lg:p-8 relative ${
                plan.featured ? "border-primary shadow-lg ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="pill-accent text-xs font-semibold">Most chosen</span>
                </div>
              )}
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-foreground mb-4">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Best for:</p>
                <p className="text-sm text-foreground/80">{plan.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-2">
            {notes.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call now
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">See it live on the call.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
