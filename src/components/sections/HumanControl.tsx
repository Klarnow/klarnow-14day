import { Check } from "lucide-react";

const controls = [
  "Set what the receptionist handles alone vs what gets escalated",
  "Get call transcripts and summaries",
  "Choose tone, rules, and booking boundaries",
  "Smart notifications for what actually matters",
];

const HumanControl = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Copy */}
          <div>
            <p className="eyebrow mb-6">Control</p>
            <h2 className="heading-section heading-mixed mb-8">
              AI does the work.<br />
              <span className="serif-italic">You stay in control.</span>
            </h2>

            <div className="space-y-4">
              {controls.map((control) => (
                <div key={control} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-success" />
                  </div>
                  <p className="text-muted-foreground">{control}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - UI Panel */}
          <div className="bg-card rounded-2xl border border-border/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-foreground">Activity & Approvals</h4>
              <span className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">Today</span>
            </div>

            <div className="space-y-3">
              {[
                { 
                  title: "Call escalation request",
                  desc: "Customer asking about custom pricing",
                  time: "5 min ago",
                  action: "Review"
                },
                { 
                  title: "New booking confirmed",
                  desc: "Sarah M. • Tomorrow 2:00 PM",
                  time: "12 min ago",
                  action: null
                },
                { 
                  title: "Follow-up sequence completed",
                  desc: "James T. • Marked as not interested",
                  time: "1 hour ago",
                  action: null
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between p-4 bg-muted/30 rounded-xl">
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">{item.time}</p>
                  </div>
                  {item.action && (
                    <button className="text-xs font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-2">
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
