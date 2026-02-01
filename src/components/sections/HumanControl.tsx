import { Check, Settings, FileText, Bell, Shield } from "lucide-react";

const controls = [
  {
    icon: Settings,
    text: "Set what the receptionist handles alone vs what gets escalated",
  },
  {
    icon: FileText,
    text: "Get call transcripts and summaries",
  },
  {
    icon: Shield,
    text: "Choose tone, rules, and booking boundaries",
  },
  {
    icon: Bell,
    text: "Smart notifications for what actually matters",
  },
];

const HumanControl = () => {
  return (
    <section className="section-padding bg-background-subtle">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div>
            <h2 className="heading-section mb-8">
              AI does the work. You stay in control.
            </h2>

            <div className="space-y-4">
              {controls.map((control) => (
                <div key={control.text} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-foreground/80 pt-1">{control.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - UI Panel */}
          <div className="card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-foreground">Activity & Approvals</h4>
              <span className="pill text-xs">Today</span>
            </div>

            <div className="space-y-4">
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
                <div key={i} className="flex items-start justify-between p-4 bg-background-subtle rounded-xl">
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                  </div>
                  {item.action && (
                    <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
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
