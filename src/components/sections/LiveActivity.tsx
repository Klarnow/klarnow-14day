"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const items = [
  {
    event: "Call answered • Sarah M.",
    status: "Booked",
    time: "2m ago"
  },
  {
    event: "Follow-up sent • James T.",
    status: "Pending",
    time: "15m ago"
  },
  {
    event: "Enquiry captured • David K.",
    status: "New",
    time: "1h ago"
  }
];

const LiveActivity = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background overflow-hidden"
      id="live-activity"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Copy */}
          <div className={cn("scroll-fade-left", isVisible && "visible")}>
            <p className="eyebrow mb-4">LIVE ACTIVITY</p>
            <h2 className="heading-section mb-6">
              What growth looks like <br />
              <span className="serif-italic">when the system is working.</span>
            </h2>
            <p className="text-body max-w-md">
              Your business keeps moving forward even when you are not looking. Every enquiry, call, and booking is handled, logged, and moved to the next stage automatically.
            </p>
          </div>

          {/* Right Side: Activity Card */}
          <div className={cn("relative scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "150ms" }}>
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[hsl(262,83%,58%)]/5 blur-3xl" />

            <div className="relative card-premium p-6 md:p-8 backdrop-blur-sm bg-card/80 max-w-lg mx-auto lg:ml-auto lg:mr-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Live Activity Feed</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Today</span>
              </div>

              <div className="space-y-4">
                {items.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between py-4 border-b border-border/40 last:border-0 animate-fade-in-up" 
                    style={{ animationDelay: `${0.1 * i}s` }}
                  >
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground mb-1">{item.event}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
                      item.status === 'Booked' ? 'bg-success/10 text-success' : 
                      item.status === 'Pending' ? 'bg-amber-500/10 text-amber-600' : 
                      'bg-primary/10 text-primary'
                    )}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-center">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  System status: <span className="text-success font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-success rounded-full" /> 
                    Online & Active
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivity;
