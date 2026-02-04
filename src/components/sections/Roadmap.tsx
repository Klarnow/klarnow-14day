import { Check, Clock, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const roadmapItems = [
  {
    status: "Live",
    statusBg: "bg-success/10",
    statusText: "text-success",
    icon: Check,
    iconBg: "bg-success",
    title: "Instant Receptionist + Call-First System",
    chips: ["Calls", "Transcripts", "Booking", "Reminders"],
  },
  {
    status: "Soon",
    statusBg: "bg-amber-500/10",
    statusText: "text-amber-600",
    icon: Clock,
    iconBg: "bg-amber-500",
    title: "Every Channel",
    chips: ["SMS", "WhatsApp", "Email"],
  },
  {
    status: "Coming",
    statusBg: "bg-muted",
    statusText: "text-muted-foreground",
    icon: Zap,
    iconBg: "bg-muted-foreground",
    title: "Proactive Outbound",
    chips: ["Reminders", "Follow-ups", "Reviews"],
  },
];

const Roadmap = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background-subtle" 
      id="roadmap"
    >
      <div className="container-wide">
        <div className={cn("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">Roadmap</p>
          <h2 className="heading-section heading-mixed mb-3">
            What's <span className="serif-italic">next</span>
          </h2>
          <p className="text-body max-w-md mx-auto">
            Starting with calls. Expanding across every channel.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-lg mx-auto">
          <div className="space-y-4">
            {roadmapItems.map((item, index) => (
              <div 
                key={item.title} 
                className={cn("relative flex gap-4 scroll-fade-in", isVisible && "visible")}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center`}>
                  <item.icon className="h-3.5 w-3.5 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl border border-border/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${item.statusBg} ${item.statusText}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">{item.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {item.chips.map((chip) => (
                      <span key={chip} className="px-2 py-0.5 rounded-full bg-muted text-[10px] text-muted-foreground">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
