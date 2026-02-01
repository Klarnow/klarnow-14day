import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const BrandOS = () => {
  return (
    <section className="section-padding bg-background" id="brand-os">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center gap-2 pill-accent mb-6">
          <Sparkles className="h-4 w-4" />
          Free tool
        </div>
        
        <h2 className="heading-section mb-6">Want the words first?</h2>
        <p className="text-body max-w-2xl mx-auto mb-8">
          Generate your Brand OS in 60 seconds. Get positioning, offer clarity, and messaging 
          you can paste into your site today.
        </p>
        
        <Button variant="hero-secondary" size="xl" asChild>
          <a 
            href="https://staging.klarnow.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2"
          >
            Generate my Brand OS
            <ArrowRight className="h-5 w-5" />
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
