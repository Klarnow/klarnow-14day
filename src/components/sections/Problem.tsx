import { PhoneMissed, Clock, UserX, Eye } from "lucide-react";

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
    title: "No follow-up system",
    description: "Leads sit in messages with no outcome.",
  },
  {
    icon: Eye,
    title: "No visibility",
    description: "You can't see what is working without chasing.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-background-subtle" id="problem">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Copy */}
          <div className="max-w-lg">
            <p className="eyebrow mb-6">The Problem</p>
            <h2 className="heading-section mb-6">
              You're getting enquiries and still losing bookings.
            </h2>
            <p className="text-body">
              It is not demand. It is leakage. Missed calls, slow replies, and weak follow-up 
              quietly drain your calendar.
            </p>
          </div>

          {/* Right Column - Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div 
                key={problem.title} 
                className="flex items-start gap-5 p-5 rounded-2xl bg-card border border-border/30 hover:border-border/60 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/5 flex items-center justify-center">
                  <problem.icon className="h-5 w-5 text-destructive/70" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
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
