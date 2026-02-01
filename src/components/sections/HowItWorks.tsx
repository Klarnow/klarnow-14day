import { Phone, Eye, Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+441616960976";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Call now",
    description: "60-second Fit Check. We confirm if this is a fit.",
  },
  {
    icon: Eye,
    number: "2",
    title: "See it live",
    description: "We show the receptionist, follow-ups, and dashboard in action.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Install",
    description: "We build and go live in 14 days.",
  },
];

const requirements = [
  "Business hours and services",
  "Booking rules and calendar access",
  "Escalation contact",
  "Tone check and approvals",
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background" id="how-it-works">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Call. See it live. Install in 14 days.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.title} className="card-premium p-6 lg:p-8 text-center hover:border-primary/30">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step {step.number}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="max-w-2xl mx-auto">
          <div className="card-feature p-6 lg:p-8">
            <h4 className="font-semibold text-foreground mb-4">What we need from you</h4>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {requirements.map((req) => (
                <div key={req} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{req}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              We plug into Cal.com or your current calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
