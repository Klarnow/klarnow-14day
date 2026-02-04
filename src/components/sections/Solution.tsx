import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background" 
      id="solution"
    >
      <div className="container-narrow text-center">
        <div className={cn("scroll-fade-in", isVisible && "visible")}>
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">The Solution</p>
          <h2 className="heading-section mb-4">
            We install the system.{" "}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-lg md:text-xl lg:text-2xl">
              You focus on delivery.
            </span>
          </h2>
          <p className="text-body max-w-lg mx-auto mb-6">
            Instant Receptionist handles enquiries, books properly, and follows up—so you can focus on the work.
          </p>
          <Button variant="outline" size="default" asChild>
            <a href="#features" className="flex items-center gap-2">
              See how it works
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
