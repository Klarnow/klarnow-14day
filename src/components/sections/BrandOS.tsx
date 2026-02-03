import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const BrandOS = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background-subtle" 
      id="brand-os"
    >
      <div className="container-narrow text-center">
        <div className={cn("scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">Free tool</p>
          
          <h2 className="heading-section heading-mixed mb-4">
            Want the <span className="serif-italic">words</span> first?
          </h2>
          <p className="text-body max-w-lg mx-auto mb-8">
            Generate your Brand OS in 60 seconds. Get positioning and messaging you can use today.
          </p>
          
          <Button variant="hero-secondary" size="lg" asChild>
            <a 
              href="https://staging.klarnow.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              Generate Brand OS
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          
          <p className="text-xs text-muted-foreground mt-3">
            Built for Instagram posts & ads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandOS;
