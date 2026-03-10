"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Before Klarnow, too many enquiries were slipping through the cracks. Now calls get answered faster, bookings happen easier, and the follow-up is far more organised.",
    author: "Client Name",
    business: "Business Type",
  },
  {
    quote: "The biggest difference was speed. Leads were no longer sitting there waiting. We finally had a proper system for handling what came in.",
    author: "Client Name",
    business: "Business Type",
  },
  {
    quote: "It stopped feeling random. We had a clearer process, fewer missed opportunities, and better visibility on what was actually happening.",
    author: "Client Name",
    business: "Business Type",
  },
];

const Proof = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="section-padding bg-background"
            id="proof"
        >
            <div className="container-wide">
                <div className={cn("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible")}>
                    <p className="eyebrow mb-4">What clients notice first</p>
                    <h2 className="heading-section heading-mixed mb-4">
                        Faster response. Better follow-up. <span className="serif-italic">Less leakage.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div 
                            key={i} 
                            className={cn(
                                "bg-card rounded-2xl p-6 sm:p-8 border border-border/30 hover:border-border/60 transition-all duration-300 scroll-fade-in flex flex-col",
                                isVisible && "visible"
                            )}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <p className="text-sm md:text-base text-foreground mb-6 flex-grow leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <h4 className="font-semibold text-foreground text-sm">{testimonial.author}</h4>
                                <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proof;
