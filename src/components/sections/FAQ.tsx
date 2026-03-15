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
        question: "Do I need ads?",
        answer: "No. Klarnow helps you get more from the leads you already generate. Ads can be added when you want to grow volume further."
    },
    {
        question: "What is the difference between the Receptionist and the Growth System?",
        answer: "The Receptionist gets your business answering calls and booking enquiries straight away. The Growth System is the full managed service — Klarnow installs everything, runs it monthly, and is accountable for results."
    },
    {
        question: "What does installed in 14 days mean?",
        answer: "Your full system — receptionist, booking flow, follow-up, and content assets — is planned, built, tested, and live within 14 days of starting."
    },
    {
        question: "What happens after install?",
        answer: "Klarnow manages the system monthly — improving performance, updating scripts, and making sure your business keeps getting more leads over time."
    },
    {
        question: "What are the 5 content assets?",
        answer: "A lead-generation post, an authority post, an objection-handling post, an ad creative, and a follow-up message sequence. Ready to use for organic or paid from day one."
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
                    <h2 className="heading-section mb-6 text-foreground">
                        Common questions.
                    </h2>
                </div>

                <div className={cn("max-w-2xl mx-auto scroll-fade-up", isVisible && "visible")} style={{ transitionDelay: "100ms" }}>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:text-primary transition-colors py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed pb-6 font-medium">
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

