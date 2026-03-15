"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

import valuecareLogo from "@/assets/valuecare.png";
import iacwLogo from "@/assets/iacw.png";
import projectcareerLogo from "@/assets/projectcareer.png";
import jsLogo from "@/assets/jslogo.png";

const baseTestimonials = [
    {
        content: "The speed and delivery were exceptional. We were live within 14 days and the system started producing results immediately.",
        name: "JS Healthy Living",
        role: "Service Business",
        logoSrc: jsLogo
    },
    {
        content: "They rebuilt our entire conversion system. We're now consistently getting both high-quality clients and new recruits through the same managed setup.",
        name: "ValueCare",
        role: "Healthcare Provider",
        logoSrc: valuecareLogo
    },
    {
        content: "A structured, intentional, and proper system. For the first time, we feel in total control of how our enquiries are handled and moved forward.",
        name: "ProjectCareer",
        role: "Consultancy",
        logoSrc: projectcareerLogo
    },
    {
        content: "The trust they've built through multiple campaigns is why we keep them on retainer. It's not just a system; it's a partnership that grows with us.",
        name: "IACW",
        role: "Business Owner",
        logoSrc: iacwLogo
    }
];

// Combine multiple copies to ensure seamless infinite scroll
const testimonials = [
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
];

export default function Proof() {
    return (
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden border-b border-border/40" id="proof">
            <div className="container-wide mb-10 md:mb-16 text-center">
                <p className="eyebrow mb-4 uppercase tracking-widest">WHAT CLIENTS NOTICE FIRST</p>
                <h2 className="heading-section mb-6">
                    More leads. More structure. <br />
                    <span className="serif-italic text-primary">More conversion.</span>
                </h2>
                <p className="text-body max-w-2xl mx-auto font-medium">
                    What changes first is not just the system. It is how the business feels once more leads are being handled properly.
                </p>
            </div>
            
            <div className="relative flex max-w-full overflow-hidden">
                {/* Left and right gradient masks for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex flex-nowrap gap-6 w-max items-stretch"
                    initial={{ x: "-33.33%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                >
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="w-[340px] sm:w-[420px] md:w-[480px] shrink-0 bg-white border border-border/50 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-sm relative group hover:border-primary/20 transition-colors"
                        >
                            <div className="absolute top-8 right-8 opacity-[0.1] text-primary">
                                <Quote fill="currentColor" size={48} className="rotate-180" />
                            </div>
                            <p className="text-foreground/80 font-bold text-base sm:text-lg leading-relaxed mb-10 relative z-10 pt-8">
                                "{testimonial.content}"
                            </p>

                            <div className="pt-8 border-t border-border flex items-center gap-5 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-border relative shadow-sm">
                                    <Image
                                        src={testimonial.logoSrc}
                                        alt={`${testimonial.name} logo`}
                                        fill
                                        className="object-contain p-2"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-base">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

