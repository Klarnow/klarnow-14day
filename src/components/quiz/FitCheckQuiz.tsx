"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";

type QuestionnaireData = {
  name: string;
  email: string;
  phone: string;
  business_type: string;
  enquiry_volume: string;
  lead_sources: string[];
  biggest_leak: string;
  desired_setup: string;
  readiness: string;
};

const INITIAL_DATA: QuestionnaireData = {
  name: "",
  email: "",
  phone: "",
  business_type: "",
  enquiry_volume: "",
  lead_sources: [],
  biggest_leak: "",
  desired_setup: "",
  readiness: "",
};

export function FitCheckQuiz() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuestionnaireData>(INITIAL_DATA);
  const [result, setResult] = useState<"A" | "B" | "C" | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#8359ee" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Constants
  const totalSteps = 7;
  // ... rest of the option definitions remain same as previous version but I'll provide the full component to ensure integration
  const businessTypes = [
    "Barber / Salon",
    "Clinic / Med Spa",
    "Trades / Home Services",
    "Restaurant / Hospitality",
    "Agency / Consultancy",
    "Other service business",
  ];

  const enquiryVolumes = ["0 to 5", "6 to 15", "16 to 30", "31+"];

  const leadSources = [
    "Phone calls",
    "WhatsApp",
    "Website",
    "Instagram / Facebook",
    "Ads",
    "Referrals",
    "Other",
  ];

  const biggestLeaks = [
    "Missed calls",
    "Slow follow-up",
    "No clear booking system",
    "No visibility on leads",
    "Too many no-shows",
    "Not sure",
  ];

  const desiredSetups = [
    "AI Receptionist",
    "Full 14-Day Call-First System",
    "Not sure yet",
  ];

  const readinessOptions = ["Ready now", "Within 30 days", "Just exploring"];

  const calculateResult = () => {
    let calculatedResult: "A" | "B" | "C" = "A";

    const isHighVolume = data.enquiry_volume === "16 to 30" || data.enquiry_volume === "31+";
    const isSystemLeak = ["No clear booking system", "No visibility on leads", "Too many no-shows"].includes(data.biggest_leak);
    const wantsFullSystem = data.desired_setup === "Full 14-Day Call-First System";

    const isLowVolume = data.enquiry_volume === "0 to 5" || data.enquiry_volume === "6 to 15";
    const isCallLeak = ["Missed calls", "Slow follow-up"].includes(data.biggest_leak);
    const wantsAIOrNotSure = ["AI Receptionist", "Not sure yet"].includes(data.desired_setup);

    const isLowIntent = data.readiness === "Just exploring";

    if (isLowIntent) {
      calculatedResult = "A";
    } else if (isHighVolume || isSystemLeak || wantsFullSystem) {
      calculatedResult = "C";
    } else if (isLowVolume || isCallLeak || wantsAIOrNotSure) {
      calculatedResult = "B";
    } else {
      calculatedResult = "A";
    }

    setResult(calculatedResult);
    
    // API tag/hidden field mapping
    const payload = { 
      ...data, 
      fit_result: calculatedResult, 
      priority: isLowIntent ? "low" : "normal" 
    };
    
    fetch('/api/save-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(err => console.error("Could not save quiz data:", err));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };

  const toggleMultiSelect = (source: string) => {
    setData((prev) => {
      const current = prev.lead_sources;
      if (current.includes(source)) {
        return { ...prev, lead_sources: current.filter((s) => s !== source) };
      } else {
        return { ...prev, lead_sources: [...current, source] };
      }
    });
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1: return !data.name || !data.email || !data.phone;
      case 2: return !data.business_type;
      case 3: return !data.enquiry_volume;
      case 4: return data.lead_sources.length === 0;
      case 5: return !data.biggest_leak;
      case 6: return !data.desired_setup;
      case 7: return !data.readiness;
      default: return false;
    }
  };

  const cardClasses = "max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-slate-100 relative overflow-hidden transition-all duration-500 min-h-[600px] h-auto md:h-[750px] flex flex-col";

  if (showCalendar) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto w-full p-4 sm:p-8 rounded-3xl bg-white border border-slate-100 relative transition-all duration-500"
      >
        <div className="mb-8 text-center px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Book Your Fit Check</h2>
            <p className="text-slate-500">Pick a time that works for you. 60 seconds to find the leak.</p>
        </div>
        <div className="w-full min-h-[700px]">
            <Cal 
                calLink="klarnow/discovery-session"
                style={{width:"100%", height:"100%", minHeight: "800px"}}
                config={{
                    layout: "month_view", 
                    theme: "light",
                    name: data.name,
                    email: data.email,
                    notes: `Business: ${data.business_type}\nPhone: ${data.phone}`
                }}
            />
        </div>
      </motion.div>
    );
  }

  if (result) {
    const resultsMap = {
      A: {
        headline: "You look like a strong fit for Klarnow",
        body: "Your answers suggest there is a clear gap in your lead handling. The next step is a quick call so we can show you what is leaking and which setup makes the most sense.",
        secondaryText: "See the AI Receptionist live on the call."
      },
      B: {
        headline: "The AI Receptionist looks like the right place to start",
        body: "You likely do not need the full system first. Start by fixing missed calls, basic bookings, and follow-up gaps.",
        secondaryText: "We’ll show you how it would work for your business."
      },
      C: {
        headline: "You likely need the full 14-Day Call-First System",
        body: "Your answers suggest the problem is bigger than missed calls alone. You likely need the booking flow, follow-up, reminders, and full lead journey installed properly.",
        secondaryText: "We’ll walk you through what needs fixing first."
      }
    };

    const currentResult = resultsMap[result];

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-slate-100 relative overflow-hidden min-h-[500px] h-auto md:h-[750px] flex flex-col justify-center"
      >
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-success/10 text-success text-sm font-semibold rounded-full mb-2">
            Assessment Complete
          </div>
          <h2 className="text-3xl font-bold text-slate-900 leading-tight">{currentResult.headline}</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {currentResult.body}
          </p>
          <div className="pt-6">
            <Button 
                size="lg" 
                className="w-full text-lg font-semibold py-7 rounded-2xl bg-[#8359ee] hover:bg-[#7248db] shadow-lg shadow-[#8359ee]/20 flex items-center justify-center gap-3" 
                onClick={() => setShowCalendar(true)}
            >
                <Calendar className="w-5 h-5" />
                Select Your Time Slot
            </Button>
            <p className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              {currentResult.secondaryText}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={cardClasses}>
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {step}/{totalSteps}
            </span>
            <span className="text-xs font-bold text-[#8359ee]">
              {Math.round((step / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-[#8359ee]"
              initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">First, let's get your details</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1">We'll use this to personalize your fit check.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Full Name *</label>
                    <input 
                      type="text" 
                      value={data.name}
                      onChange={(e) => setData({...data, name: e.target.value})}
                      placeholder="Jane Cooper"
                      className="w-full p-4 rounded-xl border-2 border-slate-100 bg-white focus:border-[#8359ee] focus:ring-2 focus:ring-[#8359ee]/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Email address *</label>
                    <input 
                      type="email" 
                      value={data.email}
                      onChange={(e) => setData({...data, email: e.target.value})}
                      placeholder="jane@company.com"
                      className="w-full p-4 rounded-xl border-2 border-slate-100 bg-white focus:border-[#8359ee] focus:ring-2 focus:ring-[#8359ee]/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Phone number *</label>
                    <input 
                      type="tel" 
                      value={data.phone}
                      onChange={(e) => setData({...data, phone: e.target.value})}
                      placeholder="+44 7123 456789"
                      className="w-full p-4 rounded-xl border-2 border-slate-100 bg-white focus:border-[#8359ee] focus:ring-2 focus:ring-[#8359ee]/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">What kind of service business do you run?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setData({ ...data, business_type: type })}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 group relative ${
                        data.business_type === type
                          ? "border-[#8359ee] bg-[#8359ee]/5 text-slate-900 ring-2 ring-[#8359ee]/10"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-sm font-semibold">{type}</span>
                      {data.business_type === type && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#8359ee] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-2">How many calls or enquiries do you get in a typical week?</h2>
                    <p className="text-slate-500 text-sm font-medium">A rough estimate is fine.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {enquiryVolumes.map((vol) => (
                    <button
                      key={vol}
                      onClick={() => setData({ ...data, enquiry_volume: vol })}
                      className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 relative ${
                        data.enquiry_volume === vol
                          ? "border-[#8359ee] bg-[#8359ee]/5 text-slate-900 ring-2 ring-[#8359ee]/10"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-base font-bold">{vol}</span>
                      {data.enquiry_volume === vol && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#8359ee] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-2">Where do most of your enquiries come from right now?</h2>
                    <p className="text-slate-500 text-sm font-medium">Select all that apply.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {leadSources.map((source) => {
                    const isSelected = data.lead_sources.includes(source);
                    return (
                      <button
                        key={source}
                        onClick={() => toggleMultiSelect(source)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 relative flex items-center justify-between ${
                          isSelected
                            ? "border-[#8359ee] bg-[#8359ee]/5 text-slate-900 ring-2 ring-[#8359ee]/10"
                            : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                        }`}
                      >
                        <span className="text-sm font-semibold">{source}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-[#8359ee] border-[#8359ee]' : 'border-slate-200'}`}>
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">What is the biggest leak in your lead flow right now?</h2>
                <div className="grid grid-cols-1 gap-2.5">
                  {biggestLeaks.map((leak) => (
                    <button
                      key={leak}
                      onClick={() => setData({ ...data, biggest_leak: leak })}
                      className={`p-4 px-5 rounded-2xl border-2 text-left transition-all duration-200 relative flex items-center justify-between ${
                        data.biggest_leak === leak
                          ? "border-[#8359ee] bg-[#8359ee]/5 text-slate-900 ring-2 ring-[#8359ee]/10"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-sm font-semibold">{leak}</span>
                      {data.biggest_leak === leak && (
                        <div className="w-5 h-5 bg-[#8359ee] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">What are you looking for right now?</h2>
                <div className="grid grid-cols-1 gap-3">
                  {desiredSetups.map((setup) => (
                    <button
                      key={setup}
                      onClick={() => setData({ ...data, desired_setup: setup })}
                      className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 relative flex items-center justify-between ${
                        data.desired_setup === setup
                          ? "border-[#8359ee] bg-[#8359ee]/5 text-slate-900 ring-2 ring-[#8359ee]/10"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-base font-bold">{setup}</span>
                      {data.desired_setup === setup && (
                        <div className="w-5 h-5 bg-[#8359ee] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">How ready are you to fix this?</h2>
                <div className="grid grid-cols-1 gap-3">
                  {readinessOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setData({ ...data, readiness: option })}
                      className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 relative flex items-center justify-between ${
                        data.readiness === option
                          ? "border-[#8359ee] bg-[#8359ee]/5 text-slate-900 ring-2 ring-[#8359ee]/10"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-base font-bold">{option}</span>
                      {data.readiness === option && (
                        <div className="w-5 h-5 bg-[#8359ee] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 md:mt-10 flex items-center justify-end">
            <Button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-base font-bold bg-slate-900 hover:bg-slate-800 disabled:opacity-20 transition-all duration-300 w-full md:w-auto"
            >
            {step === totalSteps ? "See My Result" : "Next"}
            <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
        </div>
      </div>
    </div>
  );
}
