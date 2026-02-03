import { PhoneMissed, Clock, UserX, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed calls",
    description: "If you don't answer fast, they call the next option.",
  },
  {
    icon: Clock,
    title: "Slow replies",
    description: "People move on while you're busy.",
  },
  {
    icon: UserX,
    title: "No follow-up",
    description: "Leads sit in messages with no outcome.",
  },
  {
    icon: Eye,
    title: "No visibility",
    description: "You can't see what's working.",
  },
];

const Problem = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background-subtle" 
      id="problem"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className={cn("max-w-md scroll-fade-left", isVisible && "visible")}>
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="heading-section mb-4">
              Getting enquiries, still losing bookings.
            </h2>
            <p className="text-body">
              It's not demand. It's leakage. Missed calls and weak follow-up drain your calendar.
            </p>
          </div>

          {/* Right Column */}
          <div className={cn("space-y-3 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
            {problems.map((problem) => (
              <div 
                key={problem.title} 
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/30 hover:border-border/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-destructive/5 flex items-center justify-center">
                  <problem.icon className="h-4 w-4 text-destructive/70" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">{problem.title}</h3>
                  <p className="text-xs text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
