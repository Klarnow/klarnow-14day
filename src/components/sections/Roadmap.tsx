"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Clock, Zap, Monitor  } from "lucide-react";

const timelineItems = [
  {
    title: "Map the leak. Plan the build.",
    status: "Days 1 to 3",
    statusColor: "success",
    icon: Check,
    iconBg: "bg-success"
  },
  {
    title: "Set up the receptionist, page, booking flow, and automations.",
    status: "Days 4 to 11",
    statusColor: "warning",
    icon: Clock,
    iconBg: "bg-amber-500"
  },
  {
    title: "Go live.",
    status: "Day 12",
    statusColor: "muted",
    icon: Zap,
    iconBg: "bg-muted-foreground"
  },
  {
    title: "Test, adjust, and hand over.",
    status: "Days 13 to 14",
    statusColor: "muted",
    icon: Monitor,
    iconBg: "bg-muted-foreground"
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
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="heading-section heading-mixed mb-3">
            Live in 14 days
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            You do not get dumped with software. You get a working setup.
          </p>
        </div>

        {/* Vertical Roadmap */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
              {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`roadmap-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex gap-4 md:gap-6"
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
                        "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white",
                        item.iconBg
                      )}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>
                  </div>

                  {/* Content - Inside the box */}
                  <div className="flex-1 min-w-0 p-4 sm:p-5 md:p-6 rounded-lg border border-border/50">
                    {/* Status badge */}
                    <div className="mb-4">
                      <span
                        className={cn(
                          "inline-block px-3 py-1.5 rounded-full text-xs font-medium",
                          item.statusColor === "success" && "bg-success/10 text-success",
                          item.statusColor === "warning" && "bg-amber-500/10 text-amber-600",
                          item.statusColor === "muted" && "bg-muted text-muted-foreground"
                        )}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-foreground text-base sm:text-lg md:text-xl leading-tight">
                      {item.title}
                    </h3>
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
