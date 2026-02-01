import { Check, Clock, Zap } from "lucide-react";

const roadmapItems = [
  {
    status: "Live now",
    statusColor: "bg-success",
    icon: Check,
    title: "Instant Receptionist + Call-First System",
    chips: ["Calls", "Transcripts", "Lead capture", "Booking", "Reminders"],
  },
  {
    status: "Soon",
    statusColor: "bg-amber-500",
    icon: Clock,
    title: "Every Channel",
    chips: ["SMS", "WhatsApp", "Email", "Web enquiries"],
  },
  {
    status: "Coming",
    statusColor: "bg-muted-foreground",
    icon: Zap,
    title: "Proactive Outbound",
    chips: ["Timed reminders", "Context-aware follow-ups", "Review requests", "Updates"],
  },
];

const Roadmap = () => {
  return (
    <section className="section-padding bg-background" id="roadmap">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">THE ROADMAP</p>
          <h2 className="heading-section mb-4">What we're building next</h2>
          <p className="text-body max-w-2xl mx-auto">
            Starting with calls. Expanding across every channel. Automating the admin that follows.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={item.title} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${item.statusColor} flex items-center justify-center z-10`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-premium p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium text-white ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <span key={chip} className="pill text-xs">
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
      </div>
    </section>
  );
};

export default Roadmap;
