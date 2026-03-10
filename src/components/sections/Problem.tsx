"use client";
import { PhoneMissed, Clock, UserX, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed calls",
    description: "Leads ring. No one picks up.",
  },
  {
    icon: Clock,
    title: "Slow follow-up",
    description: "Interest fades fast.",
  },
  {
    icon: UserX,
    title: "Lost bookings",
    description: "Too much friction. No clear next step.",
  },
  {
    icon: Eye,
    title: "No visibility",
    description: "You do not know what got answered, booked, or lost.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className={cn("max-w-md min-w-0 scroll-fade-left", isVisible && "visible")}>
            <p className="eyebrow mb-4">The problem</p>
            <h2 className="heading-section mb-4">
              The lead came in. <br /><span className="serif-italic">The system failed.</span>
            </h2>
          
            <p className="text-body font-medium">
              You do not need more attention if calls go unanswered, follow-up is slow, and bookings fall through.
            </p>
          </div>

          {/* Right Column */}
          <div className={cn("space-y-3 min-w-0 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
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
