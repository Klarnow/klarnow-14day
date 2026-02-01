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
    <section className="section-padding bg-background" id="problem">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Copy */}
          <div className="max-w-lg">
            <p className="eyebrow mb-4">THE PROBLEM</p>
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
                className="card-feature flex items-start gap-4 hover:translate-x-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="h-5 w-5 text-destructive" />
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
