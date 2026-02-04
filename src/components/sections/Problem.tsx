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
      className="section-padding bg-muted/30" 
      id="problem"
    >
      <div className="container-wide">
        {/* Header */}
        <div className={cn("text-center mb-10 md:mb-12 scroll-fade-in", isVisible && "visible")}>
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">The Problem</p>
          <h2 className="heading-section mb-4">
            Getting enquiries, still losing bookings
          </h2>
          <p className="text-body max-w-md mx-auto">
            It's not demand. It's leakage from missed calls and weak follow-up.
          </p>
        </div>

        {/* Problems grid */}
        <div className={cn(
          "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-fade-in",
          isVisible && "visible"
        )} style={{ transitionDelay: "100ms" }}>
          {problems.map((problem) => (
            <div 
              key={problem.title} 
              className="bg-card rounded-xl border border-border/30 p-5 hover:border-border/60 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/5 flex items-center justify-center mx-auto mb-3">
                <problem.icon className="h-5 w-5 text-destructive/70" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{problem.title}</h3>
              <p className="text-xs text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
