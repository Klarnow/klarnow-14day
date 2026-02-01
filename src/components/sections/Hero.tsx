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
    <section className="relative hero-gradient pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="max-w-2xl">
            {/* Live pill */}
            <div className="inline-flex items-center gap-2 pill-success mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Live now
            </div>

            {/* Main headline */}
            <h1 className="heading-display mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Instant Receptionist
            </h1>

            {/* Explanation line */}
            <p 
              className="text-xl md:text-2xl font-semibold text-foreground/90 mb-6 animate-fade-in-up" 
              style={{ animationDelay: "0.2s" }}
            >
              The 14-Day Call-First System that stops missed calls, slow replies, and no-shows.
            </p>

            {/* Sub-head */}
            <p 
              className="text-body mb-8 animate-fade-in-up" 
              style={{ animationDelay: "0.3s" }}
            >
              Answers calls when you're busy or closed. Captures every enquiry. Books appointments. 
              Follows up until they decide. You stay in control.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-4 animate-fade-in-up" 
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call now
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="https://staging.klarnow.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Generate my Brand OS
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Micro text */}
            <p 
              className="text-sm text-muted-foreground mb-6 animate-fade-in-up" 
              style={{ animationDelay: "0.5s" }}
            >
              60-second Fit Check. No pitch.
            </p>

            {/* Support line */}
            <p 
              className="text-sm text-muted-foreground mb-8 animate-fade-in-up" 
              style={{ animationDelay: "0.5s" }}
            >
              Built for established UK service businesses that already get enquiries.
            </p>

            {/* Trust chips */}
            <div 
              className="flex flex-wrap gap-2 animate-fade-in-up" 
              style={{ animationDelay: "0.6s" }}
            >
              {trustChips.map((chip) => (
                <span key={chip} className="pill text-xs">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - UI Mockup */}
          <div 
            className="relative animate-fade-in-up lg:pl-8" 
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="card-premium p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Activity Feed</h3>
                  <span className="pill-success text-xs">Live</span>
                </div>
                <div className="space-y-3">
                  {[
                    { time: "2m ago", event: "Call answered • Sarah M.", status: "Booked", statusColor: "bg-success" },
                    { time: "15m ago", event: "Follow-up sent • James T.", status: "Pending", statusColor: "bg-amber-500" },
                    { time: "1h ago", event: "Enquiry captured • David K.", status: "New", statusColor: "bg-primary" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.event}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating transcript card */}
              <div className="card-premium p-4 absolute -bottom-4 -left-4 w-64 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Call Transcript</p>
                    <p className="text-xs text-muted-foreground">Today 2:34 PM</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  "Hi, I'd like to book an appointment for next week..."
                </p>
              </div>

              {/* Floating stats card */}
              <div className="card-premium p-4 absolute -top-4 -right-4 w-48 shadow-xl hidden md:block">
                <p className="text-xs text-muted-foreground mb-1">This week</p>
                <p className="text-2xl font-bold text-foreground">47</p>
                <p className="text-xs text-success font-medium">Calls answered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
