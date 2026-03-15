"use client";
import { Search, Zap, ArrowRightCircle, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: Search,
    title: "More people are interested than you realise",
    description: "You already get attention through Google, referrals, social, and word of mouth. Too much of it never turns into revenue.",
  },
  {
    icon: Zap,
    title: "Enquiries lose momentum",
    description: "People show interest, then hear nothing fast enough, get distracted, or go elsewhere.",
  },
  {
    icon: ArrowRightCircle,
    title: "Leads do not become bookings",
    description: "Interest comes in but there is no smooth path from enquiry to booked customer.",
  },
  {
    icon: BarChart3,
    title: "Growth feels inconsistent",
    description: "One week looks busy. The next feels quiet. You stay active without feeling in control.",
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
          <div className={cn("max-w-xl min-w-0 scroll-fade-left", isVisible && "visible")}>
            <p className="eyebrow mb-4">THE PROBLEM</p>
            <h2 className="heading-section mb-6">
              You should be getting more from the <span className="serif-italic">attention around your business.</span>
            </h2>
          
            <p className="text-body font-medium leading-relaxed">
              Most service businesses do not just need more leads. They need a better way to attract,
              convert, and follow up — so more of the right people actually become paying customers.
            </p>
          </div>

          {/* Right Column */}
          <div className={cn("space-y-4 min-w-0 scroll-fade-right", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/30 hover:border-border/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <problem.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{problem.description}</p>
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

