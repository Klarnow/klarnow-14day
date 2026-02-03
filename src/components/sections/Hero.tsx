import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

const trustChips = [
  "Installed in 14 days",
  "4 priority install slots per month",
  "We guarantee installation, not revenue",
  "See it live on the call",
];

const Hero = () => {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="container-wide relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p 
            className="eyebrow mb-6 animate-fade-in"
          >
            Your calls, in perfect rhythm.
          </p>

          {/* Main headline */}
          <h1 
            className="heading-display mb-6 animate-fade-in-up" 
            style={{ animationDelay: "0.1s" }}
          >
            Instant Receptionist
          </h1>

          {/* Sub-head */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" 
            style={{ animationDelay: "0.2s" }}
          >
            The 14-Day Call-First System that stops missed calls, slow replies, and no-shows. 
            Answers when you're busy. Books appointments. You stay in control.
          </p>

          {/* Primary CTA */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up" 
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3">
                Call now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="https://staging.klarnow.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Generate my Brand OS
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Micro text */}
          <p 
            className="text-sm text-muted-foreground mb-16 animate-fade-in-up" 
            style={{ animationDelay: "0.4s" }}
          >
            60-second Fit Check. No pitch.
          </p>

          {/* Abstract phone/dashboard visual */}
          <div 
            className="relative max-w-lg mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Floating gradient orbs behind */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-pink)/0.5)] to-transparent blur-3xl" />
            <div className="absolute -bottom-10 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-orange)/0.4)] to-transparent blur-3xl" />
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-purple)/0.3)] to-transparent blur-3xl" />
            
            {/* Dashboard mockup card */}
            <div className="relative card-premium p-6 backdrop-blur-sm bg-card/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Activity</span>
                </div>
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <div className="space-y-3">
                {[
                  { event: "Call answered • Sarah M.", status: "Booked", time: "2m ago" },
                  { event: "Follow-up sent • James T.", status: "Pending", time: "15m ago" },
                  { event: "Enquiry captured • David K.", status: "New", time: "1h ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">{item.event}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Booked' ? 'bg-success/10 text-success' :
                      item.status === 'Pending' ? 'bg-amber-500/10 text-amber-600' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
