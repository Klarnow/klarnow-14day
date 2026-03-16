"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search, Construction, Rocket, ShieldCheck, RefreshCw  } from "lucide-react";

const timelineItems = [
  {
    title: "Find the leak. Plan the fix.",
    description: "We identify where leads are dropping off and where growth is being blocked.",
    status: "Days 1–3",
    statusColor: "success",
    icon: Search,
    iconBg: "bg-success"
  },
  {
    title: "Build the system.",
    description: "We shape the receptionist, booking flow, follow-up automations, and your 5 content assets around how people actually buy from you.",
    status: "Days 4–11",
    statusColor: "warning",
    icon: Construction,
    iconBg: "bg-amber-500"
  },
  {
    title: "Go live.",
    description: "Your system starts capturing more opportunities and moving more leads forward.",
    status: "Day 12",
    statusColor: "muted",
    icon: Rocket,
    iconBg: "bg-muted-foreground"
  },
  {
    title: "Test, adjust, and hand over.",
    description: "We tighten the setup so it starts producing better results from day one.",
    status: "Days 13–14",
    statusColor: "muted",
    icon: ShieldCheck,
    iconBg: "bg-muted-foreground"
  },
  {
    title: "Every month after",
    description: "Klarnow manages, improves, and grows the system — so your business keeps getting more leads over time.",
    status: "Growth phase",
    statusColor: "success",
    icon: RefreshCw,
    iconBg: "bg-success"
  }
];

const Roadmap = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background-subtle"
      id="roadmap"
    >
      <div className="container-wide">
        <div className={cn("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible")}>
          <p className="eyebrow mb-4">HOW IT WORKS</p>
          <h2 className="heading-section heading-mixed mb-4">
            Live in 14 days.
          </h2>
          <p className="text-body max-w-2xl mx-auto font-medium">
            You do not get dumped with software. You get a working growth system built around how your business wins customers. Then Klarnow manages it every month.
          </p>
        </div>

        {/* Vertical Roadmap */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 relative">
            {/* Connecting line */}
            <div className="absolute left-[23px] md:left-[27px] top-4 bottom-4 w-0.5 bg-border/40" />

            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`roadmap-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex gap-4 md:gap-6 relative z-10"
                >
                  {/* Icon - Outside the box */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.2,
                        ease: "backOut"
                      }}
                      className={cn(
                        "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white border-4 border-background-subtle shadow-sm",
                        item.iconBg
                      )}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>
                  </div>

                  {/* Content - Inside the box */}
                  <div className="flex-1 min-w-0 p-5 md:p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                    {/* Status badge */}
                    <div className="mb-3">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          item.statusColor === "success" && "bg-success/10 text-success",
                          item.statusColor === "warning" && "bg-amber-500/10 text-amber-600",
                          item.statusColor === "muted" && "bg-muted text-muted-foreground"
                        )}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Title & Copy */}
                    <h3 className="font-bold text-foreground text-xl md:text-2xl mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

