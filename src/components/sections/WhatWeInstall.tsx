"use client";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const features = [
    "Call-first landing page with one clear action",
    "Instant Receptionist that answers all calls, books appointments, and follows up when you're busy",
    "Follow-up automation for unbooked enquiries",
    "Confirmations and reminders",
    "No-show recovery",
    "Owner visibility every lead timestamped, logged, with next action",
];

const WhatWeInstall = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="section-padding bg-background"
            id="what-we-install"
        >
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Column - Copy */}
                    <div className={cn("max-w-xl scroll-fade-in", isVisible && "visible")}>
                        <p className="eyebrow mb-4">What We Install</p>
                        <h2 className="heading-section heading-mixed mb-4">
                            The Call-First <span className="serif-italic">System</span>
                        </h2>
                        <p className="text-xl font-medium text-foreground mb-4">
                            Booking infrastructure designed to convert enquiries into outcomes.
                        </p>
                        <p className="text-lg font-semibold text-primary mb-8">
                            Answered. Booked. Followed up. Logged.
                        </p>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-body">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Visual/Placeholder (Optional, can be removed or replaced with an image later) */}
                    <div className={cn("bg-muted rounded-2xl aspect-square w-full lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center relative overflow-hidden scroll-fade-in", isVisible && "visible")} style={{ transitionDelay: "200ms" }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                        <div className="text-center p-8 relative z-10">
                            <p className="text-muted-foreground font-medium">System Visual Placeholder</p>
                            <p className="text-xs text-muted-foreground mt-2">(Dashboard or Flow Diagram)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeInstall;
