import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const timelineItems = [
  {
    number: "1",
    title: "A mobile conversion page with one clear next step",
    subtitle: "Fit Check → audit booking flow"
  },
  {
    number: "2",
    title: "Follow-up messages",
    subtitle: "That nudge non-responders and reduce no-shows"
  },
  {
    number: "3",
    title: "Owner Dashboard",
    subtitle: "Pipeline + follow-up due list"
  },
  {
    number: "4",
    title: "Tracking",
    subtitle: "So you can see what is working"
  },
  {
    number: "5",
    title: "Missed Call Capture (included)",
    subtitle: "Inbound call handling that captures details and routes to booking or callback"
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
          <p className="eyebrow mb-4">Roadmap</p>
          <h2 className="heading-section heading-mixed mb-3">
            What's <span className="serif-italic">next</span>
          </h2>
          <p className="text-body max-w-md mx-auto">
            A mobile conversion page with one clear next step
          </p>
        </div>

        {/* Clean Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line - visible on all screen sizes */}
            <div className="absolute left-4 top-8 bottom-8 w-px bg-border/50" />

            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="relative flex gap-4 md:gap-6"
                >
                  {/* Number circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.2,
                      ease: "backOut"
                    }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm relative z-10"
                  >
                    {item.number}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-1.5 pb-2">
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
