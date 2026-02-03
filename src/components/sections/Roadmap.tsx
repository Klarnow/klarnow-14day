import { Check, Clock, Zap } from "lucide-react";

const roadmapItems = [
  {
    status: "Live now",
    statusBg: "bg-success/10",
    statusText: "text-success",
    icon: Check,
    iconBg: "bg-success",
    title: "Instant Receptionist + Call-First System",
    chips: ["Calls", "Transcripts", "Lead capture", "Booking", "Reminders"],
  },
  {
    status: "Soon",
    statusBg: "bg-amber-500/10",
    statusText: "text-amber-600",
    icon: Clock,
    iconBg: "bg-amber-500",
    title: "Every Channel",
    chips: ["SMS", "WhatsApp", "Email", "Web enquiries"],
  },
  {
    status: "Coming",
    statusBg: "bg-muted",
    statusText: "text-muted-foreground",
    icon: Zap,
    iconBg: "bg-muted-foreground",
    title: "Proactive Outbound",
    chips: ["Timed reminders", "Context-aware follow-ups", "Review requests", "Updates"],
  },
];

const Roadmap = () => {
  return (
    <section className="section-padding bg-background-subtle" id="roadmap">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">The Roadmap</p>
          <h2 className="heading-section heading-mixed mb-4">
            What we're <span className="serif-italic">building next</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Starting with calls. Expanding across every channel. Automating the admin that follows.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {roadmapItems.map((item) => (
              <div key={item.title} className="relative flex gap-5">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center`}>
                  <item.icon className="h-4 w-4 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl border border-border/30 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusBg} ${item.statusText}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-4">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span key={chip} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
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
