import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const controls = [
  "Set what AI handles vs escalates",
  "Get transcripts and summaries",
  "Choose tone and booking rules",
  "Smart notifications only",
];

const HumanControl = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className={cn("scroll-fade-left", isVisible && "visible")}>
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Control</p>
            <h2 className="heading-section mb-4">
              AI works.{" "}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-base md:text-lg">
                You control.
              </span>
            </h2>

            <div className="space-y-3 mt-6">
              {controls.map((control) => (
                <div key={control} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <p className="text-sm text-muted-foreground">{control}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className={cn("bg-muted/30 rounded-xl border border-border/30 p-5 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground text-sm">Activity</h4>
              <span className="px-2 py-0.5 rounded-full bg-muted text-[10px] text-muted-foreground">Today</span>
            </div>

            <div className="space-y-2">
              {[
                { title: "Escalation request", desc: "Custom pricing query", time: "5m ago", action: "Review" },
                { title: "Booking confirmed", desc: "Sarah M. • Tomorrow 2PM", time: "12m ago", action: null },
                { title: "Follow-up done", desc: "James T. • Not interested", time: "1h ago", action: null },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between p-3 bg-card rounded-lg border border-border/20">
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-xs">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">{item.time}</p>
                  </div>
                  {item.action && (
                    <button className="text-[10px] font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-2">
                      {item.action}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanControl;
