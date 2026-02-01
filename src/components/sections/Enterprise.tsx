import { Button } from "@/components/ui/button";
import { Database, CheckCircle, GitBranch, Tag, Puzzle, Headphones } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "CRM Integration",
    description: "Connect to your systems",
  },
  {
    icon: CheckCircle,
    title: "Live Checks",
    description: "Customer lookup mid-call",
  },
  {
    icon: GitBranch,
    title: "Custom Workflows",
    description: "Match your process",
  },
  {
    icon: Tag,
    title: "White Label",
    description: "Your brand, our system",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description: "Connect booking, CRM, email, SMS",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Direct line to the team",
  },
];

const Enterprise = () => {
  return (
    <section className="section-padding bg-background-subtle" id="enterprise">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Copy */}
          <div>
            <p className="eyebrow mb-4">ENTERPRISE</p>
            <h2 className="heading-section mb-6">Need something custom?</h2>
            <p className="text-body mb-8">
              For larger teams, multi-location businesses, and higher call volume. We can tailor 
              call flows, escalation rules, and integrations.
            </p>
            <Button variant="hero-secondary" size="lg">
              Learn more
            </Button>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="card-feature">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
