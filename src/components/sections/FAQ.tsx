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
        answer: "No. This helps you handle the leads you already get."
    },
    {
        question: "Can I start with just the AI Receptionist?",
        answer: "Yes. That is the easiest starting point."
    },
    {
        question: "What does installed in 14 days mean?",
        answer: "We map, build, connect, test, and launch within 14 days."
    },
    {
        question: "What happens after install?",
        answer: "You stay on the plan that fits your business and upgrade when needed."
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
                                <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
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
