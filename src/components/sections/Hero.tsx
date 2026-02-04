import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const PHONE_NUMBER = "+441616960976";
const trustChips = ["Installed in 14 days", "4 slots per month", "See it live on the call"];
const Hero = () => {
  return <section className="relative hero-gradient min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-16 overflow-hidden">
    <div className="container-wide relative">
      <div className="max-w-3xl mx-auto text-center shadow-none my-0">
        {/* Eyebrow */}
        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">Every enquiry get handled right</p>

        {/* Main headline */}
        <h1 className="heading-display mb-4 md:mb-6 animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
          You're not missing leads.<br />You're leaking bookings.
        </h1>

        {/* Sub-head */}
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up leading-relaxed" style={{
          animationDelay: "0.2s"
        }}>The 14-Day Call-First System that answers calls, books appointments and follows up when you're busy.  </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
          <Button variant="hero" size="lg" asChild>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
              Call now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

        </div>

        {/* Micro text */}
        <p className="text-xs md:text-sm text-muted-foreground mb-10 md:mb-12 animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
          60-second Fit Check. We'll tell you what's breaking and when we can fix it.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14 animate-fade-in-up" style={{
          animationDelay: "0.45s"
        }}>
          {trustChips.map(chip => <span key={chip} className="px-3 py-1.5 rounded-full bg-muted/60 text-xs text-muted-foreground">
            {chip}
          </span>)}
        </div>

        {/* Dashboard mockup card */}
        <div className="relative max-w-md mx-auto animate-fade-in-up" style={{
          animationDelay: "0.5s"
        }}>
          {/* Floating gradient orbs */}
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-pink)/0.4)] to-transparent blur-3xl" />
          <div className="absolute -bottom-8 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-orange)/0.3)] to-transparent blur-3xl" />

          <div className="relative card-premium p-4 md:p-5 backdrop-blur-sm bg-card/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                <span className="text-xs font-medium text-foreground">Live Activity</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Today</span>
            </div>
            <div className="space-y-2">
              {[{
                event: "Call answered • Sarah M.",
                status: "Booked",
                time: "2m ago"
              }, {
                event: "Follow-up sent • James T.",
                status: "Pending",
                time: "15m ago"
              }, {
                event: "Enquiry captured • David K.",
                status: "New",
                time: "1h ago"
              }].map((item, i) => <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/30 last:border-0">
                <div className="text-left">
                  <p className="text-xs font-medium text-foreground">{item.event}</p>
                  <p className="text-[10px] text-muted-foreground">{item.time}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${item.status === 'Booked' ? 'bg-success/10 text-success' : item.status === 'Pending' ? 'bg-amber-500/10 text-amber-600' : 'bg-primary/10 text-primary'}`}>
                  {item.status}
                </span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;