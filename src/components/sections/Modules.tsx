import { Phone, FileText, RefreshCw, LayoutDashboard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const modules = [
  {
    icon: Phone,
    title: "Instant Receptionist",
    description: "Answers missed calls in your tone.",
    bullets: [
      "Answers and qualifies calls",
      "Captures details or books directly",
      "Escalates when needed",
    ],
    chips: ["Calls", "Transcripts", "Booking"],
  },
  {
    icon: FileText,
    title: "Conversion Page",
    description: "Mobile-first, one clear action.",
    bullets: [
      "Call button for high intent",
      "Form for low intent",
      "Simple flow for staff",
    ],
    chips: ["Mobile-first", "High conversion"],
  },
  {
    icon: RefreshCw,
    title: "Follow-up Engine",
    description: "Runs until they decide.",
    bullets: [
      "Unbooked lead follow-up",
      "Confirmations & reminders",
      "No-show recovery",
    ],
    chips: ["Automated", "Recovery"],
  },
  {
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    description: "Every enquiry tracked.",
    bullets: [
      "Booked, pending, closed status",
      "Daily action list",
      "Clear outcomes",
    ],
    chips: ["Real-time", "Visibility"],
  },
];

const Modules = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background-subtle" 
      id="instant-receptionist"
    >
      <div className="container-wide">
        <div className={cn("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">Core Modules</p>
          <h2 className="heading-section heading-mixed">
            Stop leaking <span className="serif-italic">bookings</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {modules.map((module, index) => (
            <div 
              key={module.title} 
              className={cn(
                "bg-card rounded-xl border border-border/30 p-5 lg:p-6 hover:border-border/60 transition-all duration-300 scroll-fade-in",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <module.icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-0.5">{module.title}</h3>
                  <p className="text-xs text-muted-foreground">{module.description}</p>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-foreground/40 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {module.chips.map((chip) => (
                  <span key={chip} className="px-2 py-0.5 rounded-full bg-muted text-[10px] text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
