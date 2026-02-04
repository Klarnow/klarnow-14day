import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Testimonial = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-20 bg-background"
    >
      <div className="container-narrow">
        <div className={cn(
          "flex flex-col items-center text-center scroll-fade-in",
          isVisible && "visible"
        )}>
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mb-6">
            <span className="text-xl font-semibold text-primary">JB</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Quick and Easy Setup
          </h3>

          {/* Quote */}
          <blockquote className="text-sm text-muted-foreground leading-relaxed max-w-md mb-4">
            "We went from missing half our calls to booking 90% of enquiries. The system just handles it—I check the dashboard once a day."
          </blockquote>

          {/* Attribution */}
          <p className="text-xs text-muted-foreground/70">
            — James Brown, <span className="text-primary/80">Owner, Premier Cleaning</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
