"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do I need ads for this to work?",
        answer: "No. If you already have traffic from referrals, partnerships, organic content, or an existing audience, we plug the system into what you have and stop the leak. If you want more volume, we recommend ads—because once the leak is closed, ad spend becomes an investment, not a gamble."
    },
    {
        question: "What does \"Traffic switch-on\" mean?",
        answer: "Traffic is actively hitting your system when we go live on Day 12. That can be your existing traffic sources, paid ads, or both. If we use paid ads, you pay ad spend directly to the platform."
    },
    {
        question: "Can I start with just the Instant Receptionist?",
        answer: "Yes. It's the fastest way to stop missed calls and book appointments automatically. You can add the full system later."
    },
    {
        question: "When do installs start?",
        answer: "We run 4 install slots per month. Call now to confirm fit and lock in the next start date."
    },
];

const FAQ = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="section-padding bg-background-subtle"
            id="faq"
        >
            <div className="container-narrow">
                <div className={cn("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible")}>
                    <p className="eyebrow mb-4">FAQ</p>
                    <h2 className="heading-section mb-6">
                        Common questions
                    </h2>
                </div>

                <div className={cn("max-w-2xl mx-auto scroll-fade-up", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-medium text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
