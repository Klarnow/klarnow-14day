"use client";
import { Button } from "@/components/ui/button";
import { Database, CheckCircle, GitBranch, Tag, Puzzle, Headphones, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const features = [
  { icon: Database, title: "Script updates", description: "Keep your AI matching your offers." },
  { icon: GitBranch, title: "Routing changes", description: "Re-route calls anytime." },
  { icon: CheckCircle, title: "Optimisation", description: "Improve conversion rates." },
  { icon: Headphones, title: "Priority support", description: "Direct line for fast changes." },
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
            <p className="eyebrow mb-4">Need hands-on support?</p>
            <h2 className="heading-section heading-mixed mb-4">
              Optional <span className="serif-italic">management</span>
            </h2>
            <p className="text-body mb-6">
              Add monthly management for:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-muted-foreground list-disc pl-5">
              <li>script updates</li>
              <li>routing changes</li>
              <li>optimisation</li>
              <li>priority support</li>
            </ul>
            <Button variant="hero-secondary" size="default" className="group">
              Ask About Management
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Right Column */}
          <div className={cn("grid grid-cols-2 gap-3 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
            {features.map((feature) => (
              <div key={feature.title} className="bg-card rounded-lg border border-border/30 p-4 hover:border-border/60 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-3">
                  <feature.icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-xs mb-0.5">{feature.title}</h3>
                <p className="text-[10px] text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
