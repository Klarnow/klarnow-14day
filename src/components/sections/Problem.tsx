"use client";
import { PhoneMissed, Clock, UserX, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: PhoneMissed,
    title: "Calls go to voicemail",
    description: "Calls during a job go straight to voicemail.",
  },
  {
    icon: Clock,
    title: "Evening enquiries wait",
    description: "Evening enquiries sit until morning (they've already moved on).",
  },
  {
    icon: UserX,
    title: "Indecision",
    description: "\"Just checking prices\" becomes \"I'll think about it\".",
  },
  {
    icon: Eye,
    title: "No visibility",
    description: "You can't see what happened without chasing people down.",
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
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="heading-section mb-4">
              You already do the hard part, getting people interested. <span className="serif-italic">If not,<br /> we help you.</span>
            </h2>
          
            <p className="text-body font-medium">
              The problem isn't leads. It's <span className="serif-italic font-bold text-md">conversion</span> 
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
