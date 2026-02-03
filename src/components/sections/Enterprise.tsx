import { Button } from "@/components/ui/button";
import { Database, CheckCircle, GitBranch, Tag, Puzzle, Headphones, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const features = [
  { icon: Database, title: "CRM Integration", description: "Connect systems" },
  { icon: CheckCircle, title: "Live Checks", description: "Mid-call lookup" },
  { icon: GitBranch, title: "Custom Workflows", description: "Match your process" },
  { icon: Tag, title: "White Label", description: "Your brand" },
  { icon: Puzzle, title: "Integrations", description: "CRM, email, SMS" },
  { icon: Headphones, title: "Dedicated Support", description: "Direct line" },
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
            <p className="eyebrow mb-4">Enterprise</p>
            <h2 className="heading-section heading-mixed mb-4">
              Need <span className="serif-italic">custom?</span>
            </h2>
            <p className="text-body mb-6">
              Multi-location, high volume. Tailored call flows and integrations.
            </p>
            <Button variant="hero-secondary" size="default" className="group">
              Learn more
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
