import { Phone, FileText, Target, RefreshCw, LayoutDashboard, Bell, Calendar, BarChart } from "lucide-react";

const modules = [
  {
    icon: Phone,
    title: "Instant Receptionist",
    description: "Answers missed calls and after-hours in your tone.",
    bullets: [
      "Answers and qualifies calls",
      "Captures details when the caller cannot book",
      "Books directly when rules allow",
      "Escalates only when a human is needed",
    ],
    chips: ["Phone calls", "Transcripts", "Lead capture", "Appointment booking", "Tone and scripting"],
  },
  {
    icon: FileText,
    title: "Call-First Conversion Page",
    description: "Mobile-first page with one clear action.",
    bullets: [
      "Call now button for high intent",
      "Simple enquiry form for low intent",
      "One flow staff can follow",
    ],
    chips: ["Mobile-first", "High conversion", "Simple forms"],
  },
  {
    icon: RefreshCw,
    title: "Follow-up Engine",
    description: "Follow-ups run until they decide.",
    bullets: [
      "Follow-up for unbooked leads",
      "Confirmations and reminders",
      "No-show recovery and reschedule",
    ],
    chips: ["Automated", "Reminders", "Recovery"],
  },
  {
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    description: "Every enquiry becomes a tracked outcome.",
    bullets: [
      "Booked, follow-up due, closed, no-show, rescheduled",
      "Daily list of what needs attention",
      "Clear outcomes without chasing staff",
    ],
    chips: ["Real-time", "Outcomes", "Visibility"],
  },
];

const Modules = () => {
  return (
    <section className="section-padding bg-background" id="instant-receptionist">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">CORE MODULES</p>
          <h2 className="heading-section">Everything you need to stop leaking bookings</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <div 
              key={module.title} 
              className="card-premium p-6 lg:p-8 hover:border-primary/30"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <module.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {module.chips.map((chip) => (
                  <span key={chip} className="pill-accent text-xs">
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
