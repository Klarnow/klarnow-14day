import { useState } from "react";
import { Check, Phone, FileText, RefreshCw, LayoutDashboard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "calls", label: "Calls", icon: Phone },
  { id: "booking", label: "Booking", icon: FileText },
  { id: "followup", label: "Follow-up", icon: RefreshCw },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
];

const tabContent = {
  calls: {
    title: "Calls That Never Miss",
    description: "Answer every enquiry instantly, even when you're busy on-site.",
    features: [
      "AI answers in your brand voice",
      "Qualifies and routes callers",
      "Captures details automatically",
      "Escalates urgent calls to you",
    ],
  },
  booking: {
    title: "Bookings That Just Work",
    description: "Seamless scheduling that syncs with your calendar.",
    features: [
      "Direct calendar integration",
      "Smart availability detection",
      "Confirmation messages sent",
      "Easy rescheduling for clients",
    ],
  },
  followup: {
    title: "Follow-up That Converts",
    description: "Automated sequences that turn maybes into bookings.",
    features: [
      "Unbooked lead nurturing",
      "Appointment reminders",
      "No-show recovery flows",
      "Smart timing optimization",
    ],
  },
  dashboard: {
    title: "Visibility You Control",
    description: "See every enquiry, booking, and outcome in one place.",
    features: [
      "Real-time status updates",
      "Daily action items",
      "Performance insights",
      "Export and reporting",
    ],
  },
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("calls");
  const { ref, isVisible } = useScrollAnimation();
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background" 
      id="features"
    >
      <div className="container-wide">
        {/* Header */}
        <div className={cn(
          "text-center mb-10 md:mb-12 scroll-fade-in",
          isVisible && "visible"
        )}>
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Features</p>
          <h2 className="heading-section mb-4">
            Customize the full experience
          </h2>
          <p className="text-body max-w-md mx-auto">
            From first call to final booking, every touchpoint feels like you.
          </p>
        </div>

        {/* Tabs */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-10 scroll-fade-in",
          isVisible && "visible"
        )} style={{ transitionDelay: "100ms" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className={cn(
          "max-w-3xl mx-auto scroll-fade-in",
          isVisible && "visible"
        )} style={{ transitionDelay: "200ms" }}>
          <div className="bg-muted/30 rounded-2xl border border-border/30 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left: Text */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                  {tabs.find(t => t.id === activeTab)?.icon && (
                    <span className="text-foreground">
                      {(() => {
                        const IconComponent = tabs.find(t => t.id === activeTab)?.icon;
                        return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
                      })()}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {content.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {content.description}
                </p>
                <ul className="space-y-2.5">
                  {content.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Mockup */}
              <div className="relative">
                <div className="bg-card rounded-xl border border-border/50 p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/30">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Live Activity</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { event: "Call answered", name: "Sarah M.", status: "Booked" },
                      { event: "Follow-up sent", name: "James T.", status: "Pending" },
                      { event: "New enquiry", name: "David K.", status: "New" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                        <div>
                          <p className="text-xs font-medium text-foreground">{item.event}</p>
                          <p className="text-[10px] text-muted-foreground">{item.name}</p>
                        </div>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-medium",
                          item.status === "Booked" && "bg-success-muted text-success",
                          item.status === "Pending" && "bg-muted text-muted-foreground",
                          item.status === "New" && "bg-accent text-accent-foreground"
                        )}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
