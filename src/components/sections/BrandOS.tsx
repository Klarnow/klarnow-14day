import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BrandOS = () => {
  return (
    <section className="section-padding bg-background-subtle" id="brand-os">
      <div className="container-narrow text-center">
        <p className="eyebrow mb-6">Free tool</p>
        
        <h2 className="heading-section heading-mixed mb-6">
          Want the <span className="serif-italic">words</span> first?
        </h2>
        <p className="text-body max-w-2xl mx-auto mb-10">
          Generate your Brand OS in 60 seconds. Get positioning, offer clarity, and messaging 
          you can paste into your site today.
        </p>
        
        <Button variant="hero-secondary" size="xl" asChild>
          <a 
            href="https://staging.klarnow.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3"
          >
            Generate my Brand OS
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          Built for posts and ads on Instagram.
        </p>
      </div>
    </section>
  );
};

export default BrandOS;
