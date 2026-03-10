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
        content: "I only answered a few questions and they completely rebuilt my conversion system. I was honestly shocked. It’s now helping us bring in clients and even attract recruits at the same time. They saw things in my business that I didn’t even see myself.",
        name: "ValueCare",
        role: "Client",
        logoSrc: valuecareLogo
    },
    {
        content: "I came in as a client, but after seeing the level of work and care they put into my campaigns, it turned into something more long-term. We’re now on retainer and running multiple campaigns together. I genuinely trust them with my brand.",
        name: "IACW",
        role: "Client",
        logoSrc: iacwLogo
    },
    {
        content: "What I appreciate most is that everything was structured and intentional. It wasn’t guesswork. It was a proper system with clear stages and follow-up. That’s what made the difference.",
        name: "ProjectCareer",
        role: "Client",
        logoSrc: projectcareerLogo
    },
    {
        content: "We needed to move fast, and they delivered. Within 14 days we had a proper conversion page live and we’re already taking orders through it. It felt organised, focused, and very intentional.",
        name: "JS Healthy Living",
        role: "Client",
        logoSrc: jsLogo
    }
];

// Combine multiple copies to ensure seamless infinite scroll
const testimonials = [
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials
];

export default function Proof() {
    return (
        <section className="pt-10 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden border-b border-border/40" id="proof">
            <div className="container-wide mb-10 md:mb-14 text-center">
                <p className="eyebrow mb-4">What clients notice first</p>
                <h2 className="heading-section heading-mixed mb-4">
                    Faster response. Better follow-up. <span className="serif-italic">Less leakage.</span>
                </h2>
            </div>
            
            <div className="relative flex max-w-full overflow-hidden">
                {/* Left and right gradient masks for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex flex-nowrap gap-6 w-max items-stretch"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 75, ease: "linear", repeat: Infinity }}
                >
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="w-[340px] sm:w-[420px] md:w-[480px] shrink-0 bg-white border border-gray-100/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative group"
                        >
                            <div className="absolute top-6 right-6 sm:right-8 opacity-[0.15] text-[#8359ee]">
                                <Quote fill="currentColor" size={40} className="rotate-180" />
                            </div>
                            <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-8 relative z-10 pt-12">
                                "{testimonial.content}"
                            </p>

                            <div className="pt-6 border-t border-gray-100 flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-gray-100 relative">
                                    <Image
                                        src={testimonial.logoSrc}
                                        alt={`${testimonial.name} logo`}
                                        fill
                                        className="object-contain p-1"
                                        sizes="40px"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-0.5">
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
