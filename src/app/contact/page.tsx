"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        deadline: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        toast({
            title: "Message sent!",
            description: "We'll get back to you within one business day.",
        });
        // Reset form
        setFormData({
            name: "",
            email: "",
            company: "",
            budget: "",
            deadline: "",
            message: "",
        });
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative hero-gradient pt-32 pb-8 md:pt-40 md:pb-12">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="eyebrow mb-4 md:mb-6 animate-fade-in">Get in touch</p>
                        <h1 className="heading-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Let's Fix Your Lead Leaks
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            The fastest way to find what is leaking leads and what to fix first.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-background">
                <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Information */}
                        <div className="space-y-8 lg:sticky lg:top-24">
                            {/* Message Card */}
                            <div className="card-premium p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-foreground" />
                                    </div>
                                    <div>
                                        <h2 className="heading-subsection mb-2">Send Us a Message</h2>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            If you are not ready to book, you can message us here. If you are ready to fix conversion, the audit is the cleanest next step.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    We reply within one business day.
                                </p>
                            </div>

                            {/* Email Direct Contact */}
                            <div className="card-premium p-8 bg-muted/30">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Email us directly</h3>
                                        <a
                                            href="mailto:hello@klarnow.uk"
                                            className="text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            hello@klarnow.uk
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 rounded-full bg-muted/60 text-xs text-muted-foreground">
                                    Reply within 24 hours
                                </span>
                                <span className="px-4 py-2 rounded-full bg-muted/60 text-xs text-muted-foreground">
                                    No obligation
                                </span>
                                <span className="px-4 py-2 rounded-full bg-muted/60 text-xs text-muted-foreground">
                                    Free consultation
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="card-premium p-8 lg:p-10">
                            <h2 className="heading-subsection mb-6">Get in Touch</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email - Side by Side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                {/* Company - Full Width */}
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        placeholder="Your Company Name"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="h-12"
                                    />
                                </div>

                                {/* Budget and Deadline - Side by Side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="budget">Budget Band</Label>
                                        <Select
                                            value={formData.budget}
                                            onValueChange={(value) =>
                                                setFormData({ ...formData, budget: value })
                                            }
                                        >
                                            <SelectTrigger id="budget" className="h-12">
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="under-5k">Under £5,000</SelectItem>
                                                <SelectItem value="5k-10k">£5,000 - £10,000</SelectItem>
                                                <SelectItem value="10k-25k">£10,000 - £25,000</SelectItem>
                                                <SelectItem value="25k-50k">£25,000 - £50,000</SelectItem>
                                                <SelectItem value="50k-plus">£50,000+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="deadline">Deadline</Label>
                                        <Select
                                            value={formData.deadline}
                                            onValueChange={(value) =>
                                                setFormData({ ...formData, deadline: value })
                                            }
                                        >
                                            <SelectTrigger id="deadline" className="h-12">
                                                <SelectValue placeholder="Select timeline" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="urgent">Urgent (Within 2 weeks)</SelectItem>
                                                <SelectItem value="1-month">Within 1 month</SelectItem>
                                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                                <SelectItem value="3-6-months">3-6 months</SelectItem>
                                                <SelectItem value="flexible">Flexible</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <Label htmlFor="message">What do you need?</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project requirements, goals, and how we can help"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 h-12"
                                >
                                    Send Message
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
