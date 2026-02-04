import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

const Hero = () => {
  return (
    <section className="relative bg-background min-h-[80vh] md:min-h-[85vh] flex items-center justify-center pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      <div className="container-wide relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Announcement pill */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <a 
              href="#modules" 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/80 text-xs text-muted-foreground hover:bg-muted transition-colors"
            >
              <span className="px-1.5 py-0.5 rounded bg-foreground text-background text-[10px] font-medium">
                New
              </span>
              <span>14-day setup guarantee</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* Main headline */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5 animate-fade-in-up" 
            style={{ animationDelay: "0.1s" }}
          >
            A receptionist that<br />
            works like an{" "}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground">
              Owner
            </span>
          </h1>

          {/* Sub-head */}
          <p 
            className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-8 animate-fade-in-up leading-relaxed" 
            style={{ animationDelay: "0.2s" }}
          >
            Answer calls, book appointments, and follow up—automatically. Built for service businesses who don't have time to chase leads.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 animate-fade-in-up" 
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="default" size="lg" asChild>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Get Started
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Book a Call
              </a>
            </Button>
          </div>

          {/* Micro text */}
          <p 
            className="text-xs text-muted-foreground/60 animate-fade-in-up" 
            style={{ animationDelay: "0.4s" }}
          >
            No credit card required • 60-second fit check
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;