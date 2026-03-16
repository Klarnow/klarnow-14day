"use client";
import { Button } from "@/components/ui/button";
import { Edit3, GitBranch, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const managementFeatures = [
  { 
    icon: Edit3, 
    title: "Script updates", 
    description: "Your AI stays aligned with your current offers, positioning, and customer questions." 
  },
  { 
    icon: GitBranch, 
    title: "Routing changes", 
    description: "Calls and enquiries get directed correctly as your business changes." 
  },
  { 
    icon: TrendingUp, 
    title: "Optimisation", 
    description: "We improve how the system converts leads into bookings over time." 
  },
  { 
    icon: ShieldCheck, 
    title: "Priority support", 
    description: "Faster help when you need changes made quickly." 
  },
];

const Enterprise = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background" 
      id="enterprise"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className={cn("scroll-fade-left", isVisible && "visible")}>
            <p className="eyebrow mb-4">NEED MORE HANDS-ON SUPPORT?</p>
            <h2 className="heading-section mb-6">
              Optional <span className="serif-italic">monthly management.</span>
            </h2>
            <p className="text-body mb-8 max-w-md font-medium">
              Available for businesses that want a more active growth partner, not just the system.
            </p>
            
            <Button variant="hero" size="lg" className="group">
              <a href="tel:+441616960976" className="flex items-center gap-2">
                Ask About Management
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right Column */}
          <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
            {managementFeatures.map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl border border-border/30 p-5 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;

