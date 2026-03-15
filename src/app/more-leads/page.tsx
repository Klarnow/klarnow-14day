"use client";

import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  PhoneMissed, 
  Clock, 
  UserX, 
  Eye, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Target, 
  MessageSquare,
  BarChart3,
  Phone,
  RefreshCw
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Roadmap from "@/components/sections/Roadmap";

const PHONE_NUMBER = "+441616960976";

const SectionHeader = ({ label, title, subhead, centered = true }: { label?: string, title: string, subhead?: string, centered?: boolean }) => (
  <div className={cn("mb-12 md:mb-16", centered ? "text-center mx-auto max-w-3xl" : "text-left")}>
    {label && <p className="eyebrow mb-4">{label}</p>}
    <h2 className="heading-section mb-6">{title}</h2>
    {subhead && <p className="text-body font-medium">{subhead}</p>}
  </div>
);

const MoreLeadsPage = () => {
    return (
        <div className="flex flex-col overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-display mb-8 animate-fade-in-up">
                            Your business should be getting <br />
                            <span className="gradient-text">more leads than this.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Most UK service businesses are already getting attention. 
                            The problem is what happens after the interest shows up.
                        </p>
                        <p className="text-lg md:text-xl font-medium text-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Klarnow installs the system that turns more of that attention into leads, 
                            bookings, and paying customers. Then manages it every month so the results compound.
                        </p>
                        
                        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                           <Button variant="hero" size="lg" asChild className="min-w-[280px]">
                              <a href="/fit-check" className="flex items-center gap-2">
                                Book a Free Lead Leak Audit
                                <ArrowRight className="h-5 w-5" />
                              </a>
                           </Button>
                           <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                             We find where your business is losing leads. We show you what to fix. No pitch. No pressure.
                           </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <SectionHeader 
                      title="Built for service businesses that already get interest but want more of it to convert."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                          "Trades, plumbers, heating engineers, electricians, and contractors",
                          "Care homes and residential care providers",
                          "Consultants, coaches, and advisory businesses",
                          "Commercial cleaning and facilities management firms",
                          "Any service business that relies on enquiries, calls, and booked appointments"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/30">
                            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                            <p className="text-base font-semibold text-foreground/80 leading-snug">{item}</p>
                          </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-primary/5 border border-primary/10">
                      <p className="text-lg font-bold text-foreground">
                        If your business already gets calls, referrals, or digital enquiries but too many of them are not turning into revenue — this is for you.
                      </p>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM */}
            <section className="section-padding bg-background-subtle">
                <div className="container-wide">
                    <SectionHeader 
                      title="The lead came in. The business lost momentum."
                    />
                    
                    <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/40 shadow-xl bg-card">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-muted/50 border-b border-border/40">
                                    <th className="p-6 text-base font-bold uppercase tracking-wider text-muted-foreground">The leak</th>
                                    <th className="p-6 text-base font-bold uppercase tracking-wider text-muted-foreground">What it costs you</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {[
                                  { leak: "Calls go unanswered while the team is busy", cost: "The enquiry goes cold. They call the next business on the list." },
                                  { leak: "No fast follow-up after an enquiry", cost: "Buyers lose confidence. The window closes quickly." },
                                  { leak: "The booking process has too much friction", cost: "People drop off between showing interest and confirming an appointment." },
                                  { leak: "Quotes go out without follow-up", cost: "Work that was nearly won gets forgotten." },
                                  { leak: "No visibility on what happened to each lead", cost: "You cannot see where enquiries are being lost or what is converting." }
                                ].map((item, i) => (
                                  <tr key={i} className="hover:bg-muted/20 transition-colors">
                                    <td className="p-6">
                                      <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-destructive rounded-full" />
                                        <span className="font-bold text-foreground">{item.leak}</span>
                                      </div>
                                    </td>
                                    <td className="p-6 text-muted-foreground font-medium">{item.cost}</td>
                                  </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <p className="text-2xl font-bold mb-8">
                          You do not always need more leads. <br />
                          <span className="serif-italic text-primary">You need a better system to handle the ones already coming in.</span>
                        </p>
                        <p className="text-lg text-muted-foreground">That is what Klarnow installs — and manages every month after.</p>
                    </div>
                </div>
            </section>

            {/* WHAT CHANGES AFTER KLARNOW */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <SectionHeader 
                      title="What your business looks like 30 days after installation."
                    />
                    
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="p-8 rounded-3xl border border-destructive/20 bg-destructive/5">
                            <h3 className="text-xl font-bold text-destructive mb-8 flex items-center gap-3">
                              <XCircle className="h-6 w-6" />
                              Before Klarnow
                            </h3>
                            <ul className="space-y-6">
                                {[
                                  "Calls go unanswered during busy periods",
                                  "Leads go cold because follow-up is slow",
                                  "No content ready to drive organic or paid leads",
                                  "Booking friction loses customers between interest and appointment",
                                  "No visibility on which leads converted",
                                  "Revenue feels inconsistent"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-destructive/80 font-medium">
                                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* After */}
                        <div className="p-8 rounded-3xl border border-success/20 bg-success/5 shadow-premium">
                            <h3 className="text-xl font-bold text-success mb-8 flex items-center gap-3">
                              <CheckCircle2 className="h-6 w-6" />
                              After Klarnow
                            </h3>
                            <ul className="space-y-6">
                                {[
                                  "Every enquiry gets an instant response, day or night",
                                  "Follow-up is automatic and fast — buyers stay warm",
                                  "5 high-converting assets ready from day one",
                                  "The path from enquiry to booked appointment is clear and simple",
                                  "The owner can see every lead and what happened to it",
                                  "More enquiries converting into paying customers every month"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-success/80 font-bold">
                                    <Zap className="h-5 w-5 flex-shrink-0 mt-0.5 text-success" />
                                    {item}
                                  </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE OFFER */}
            <section className="section-padding bg-background-subtle">
                <div className="container-wide">
                    <SectionHeader 
                      title="One setup. One managed monthly system. More leads every month."
                      subhead="Choose the starting point that fits where your business is today."
                    />
                    
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Card 1 */}
                         <div className="card-premium p-10 flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">Klarnow Receptionist</h3>
                            <div className="text-xl font-medium text-primary mb-6">From £95/month</div>
                            <p className="text-base font-semibold mb-8 text-muted-foreground">Best for: Get your business answering and booking straight away</p>
                            
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Call answering & lead capture</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Booking flow</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Follow-up automation</li>
                            </ul>
                            
                            <Button variant="outline" className="w-full border-primary/20" asChild>
                              <a href={`tel:${PHONE_NUMBER}`}>Start with Receptionist</a>
                            </Button>
                         </div>
                         
                         {/* Card 2 */}
                         <div className="card-premium p-10 flex flex-col ring-2 ring-primary relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">Most popular</div>
                            <h3 className="text-2xl font-bold mb-2">Klarnow Growth System</h3>
                            <div className="text-xl font-medium text-primary mb-6">£995 setup + £495/month</div>
                            <p className="text-base font-semibold mb-8 text-muted-foreground">Best for: Full managed system — Klarnow runs and grows it for you</p>
                            
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Call answering & lead capture</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Booking flow</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Follow-up automation</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Mobile-first landing page</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> 5 content assets at setup</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Monthly managed service</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-primary" /> Script & routing updates monthly</li>
                            </ul>
                            
                            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                              <a href={`tel:${PHONE_NUMBER}`}>Start Growth System</a>
                            </Button>
                         </div>
                    </div>
                    
                    <div className="mt-12 text-center max-w-2xl mx-auto space-y-4">
                        <p className="text-lg font-bold">Setup gets the system live in 14 days. Monthly keeps it running and generating more leads.</p>
                        <p className="text-sm font-medium text-destructive">If the system is not live in 14 days — the setup fee is not charged.</p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <Roadmap />

            {/* THE 5 CONTENT ASSETS */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <SectionHeader 
                      label="CONTENT PIPELINE"
                      title="Included at setup. Ready for organic or paid from day one."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                          { title: "1. Lead-generation post", desc: "Drives enquiries from your existing organic audience immediately", icon: Target },
                          { title: "2. Authority post", desc: "Positions your business as the obvious choice before a buyer even calls", icon: ShieldCheck },
                          { title: "3. Objection-handling post", desc: "Removes the top reason prospects hesitate before booking", icon: MessageSquare },
                          { title: "4. Ad creative (static)", desc: "Drives cold traffic from paid ads into your booking flow", icon: FileText },
                          { title: "5. Follow-up message sequence", desc: "Recovers leads that showed interest but did not book", icon: RefreshCw }
                        ].map((asset, i) => (
                          <div key={i} className="bg-card rounded-2xl border border-border/30 p-8 hover:border-primary/40 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                              <asset.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{asset.title}</h3>
                            <p className="text-lg text-muted-foreground font-medium m-0 leading-relaxed text-left">{asset.desc}</p>
                          </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF - Testimonials would be inserted here */}
            {/* The user said "Keep all four existing testimonials" - usually they are in a section/Proof component */}
            <section className="section-padding bg-background-subtle">
              <div className="container-wide text-center">
                <SectionHeader 
                  title="What service businesses say after Klarnow goes live."
                />
                <p className="text-body max-w-xl mx-auto mb-10">
                  Trust is built by delivery. Here is what changes first.
                </p>
                {/* Simplified testimonial list for now as per recommended order */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                   <div className="card-premium p-8 text-left">
                      <p className="italic font-medium mb-6">"The speed of response is what changed everything. We don't miss calls anymore."</p>
                      <p className="font-bold">JS Healthy Living</p>
                   </div>
                   <div className="card-premium p-8 text-left">
                      <p className="italic font-medium mb-6">"Rebuilt our entire conversion system. Now getting clients and recruits consistently."</p>
                      <p className="font-bold">ValueCare</p>
                   </div>
                   <div className="card-premium p-8 text-left">
                      <p className="italic font-medium mb-6">"A structured, intentional, proper system. Finally feel in control of the growth."</p>
                      <p className="font-bold">ProjectCareer</p>
                   </div>
                   <div className="card-premium p-8 text-left">
                      <p className="italic font-medium mb-6">"Built trust through multiple campaigns. The retainer is worth every penny."</p>
                      <p className="font-bold">IACW</p>
                   </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <FAQ />

            {/* FINAL CTA */}
            <section className="relative overflow-hidden section-padding bg-foreground text-background">
                <div className="container-wide relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Still reading? Your competitors are already answering faster.</h2>
                    <p className="text-xl md:text-2xl text-background/80 max-w-3xl mx-auto mb-12">
                      Every day without a proper lead capture and follow-up system is another day of 
                      enquiries going cold, bookings being lost, and revenue leaking. <br /><br />
                      Klarnow fixes that in 14 days. Then manages it every month after.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90 font-bold min-w-[280px]" asChild>
                          <a href="/fit-check">Book Your Free Lead Leak Audit</a>
                        </Button>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3 text-xl font-bold">
                          <Phone className="h-6 w-6" />
                          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                        </div>
                        <a href="https://klarnow.uk" className="text-background/60 font-medium hover:text-background transition-colors">klarnow.uk</a>
                    </div>
                </div>
                
                {/* Decorative background flare */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            </section>
        </div>
    );
};

export default MoreLeadsPage;
