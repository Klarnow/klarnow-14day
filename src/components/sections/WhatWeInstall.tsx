"use client";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import placeholderImage from "@/assets/placeholder-iimage.jpg";

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
            <div className="container-wide px-5 sm:px-6 lg:px-8 lg:pr-6">
                <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.6fr] gap-8 lg:gap-16 items-center lg:-mr-10">
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

                    {/* Right Column - Visual */}
                    <div className={cn("rounded-2xl w-full flex items-center justify-center relative overflow-hidden scroll-fade-in", "aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[350px] lg:min-h-[400px]", "max-w-md sm:max-w-lg mx-auto lg:max-w-none lg:mx-0", isVisible && "visible")} style={{ transitionDelay: "200ms" }}>
                        <Image
                            src={placeholderImage}
                            alt="Klarnow - The 14-Day System"
                            className="object-cover object-left w-full h-full rounded-2xl"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 60vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeInstall;
