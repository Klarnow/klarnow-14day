"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ProductPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container-wide">
        {/* Header */}
        <div className={cn(
          "grid lg:grid-cols-2 gap-6 lg:gap-12 items-start mb-12 md:mb-16 scroll-fade-in",
          isVisible && "visible"
        )}>
          <h2 className="heading-section heading-mixed">
            Do More<br />
            <span className="serif-italic">With Less Stress</span>
          </h2>
          <div className="lg:pt-2">
            <p className="text-body max-w-md">
              Built for modern service businesses who want to stay organized and in control of every enquiry.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className={cn(
          "grid md:grid-cols-3 gap-6 lg:gap-8 scroll-fade-in",
          isVisible && "visible"
        )} style={{ transitionDelay: "150ms" }}>
          {[
            { 
              title: "Smart Call Handling", 
              description: "Answer, qualify, and route calls with an AI receptionist that adapts to your workflow."
            },
            { 
              title: "Integrated Booking", 
              description: "Built-in booking that syncs across devices and follows up automatically."
            },
            { 
              title: "Focus Mode", 
              description: "Minimalist dashboard and time-blocking tools to get into deep work fast."
            },
          ].map((feature) => (
            <div key={feature.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
