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
    <section className="section-padding bg-background-subtle" id="instant-receptionist">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">Core Modules</p>
          <h2 className="heading-section heading-mixed">
            Everything you need to<br />
            <span className="serif-italic">stop leaking bookings</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <div 
              key={module.title} 
              className="bg-card rounded-2xl border border-border/30 p-6 lg:p-8 hover:border-border/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                  <module.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-foreground/40 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {module.chips.map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
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
