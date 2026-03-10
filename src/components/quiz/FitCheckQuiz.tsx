"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type QuestionnaireData = {
  business_type: string;
  enquiry_volume: string;
  lead_sources: string[];
  biggest_leak: string;
  desired_setup: string;
  readiness: string;
};

const INITIAL_DATA: QuestionnaireData = {
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
  const [isDone, setIsDone] = useState(false);

  // Constants
  const totalSteps = 6;

  // Option definitions
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
    // Determine the result based on the logic
    let calculatedResult: "A" | "B" | "C" = "A";

    // AI Receptionist route: 0 to 15 enquiries, missing calls / slow follow up, AI receptionist / not sure
    const isLowVolume = data.enquiry_volume === "0 to 5" || data.enquiry_volume === "6 to 15";
    const isCallLeak = data.biggest_leak === "Missed calls" || data.biggest_leak === "Slow follow-up";
    const wantsAI = data.desired_setup === "AI Receptionist" || data.desired_setup === "Not sure yet";

    // 14-Day system route: 16+ enquiries, booking system/visibility/no-shows, wants full system
    const isHighVolume = data.enquiry_volume === "16 to 30" || data.enquiry_volume === "31+";
    const isSystemLeak = data.biggest_leak === "No clear booking system" || data.biggest_leak === "No visibility on leads" || data.biggest_leak === "Too many no-shows";
    const wantsSystem = data.desired_setup === "Full 14-Day Call-First System";

    const isLowIntent = data.readiness === "Just exploring";

    if (isLowIntent) {
      calculatedResult = "A"; // General strong fit
    } else if (isHighVolume || isSystemLeak || wantsSystem) {
      calculatedResult = "C"; // 14-Day System
    } else if (isLowVolume || isCallLeak || wantsAI) {
      calculatedResult = "B"; // AI Receptionist
    } else {
      calculatedResult = "A"; // Fallback
    }

    setResult(calculatedResult);
    
    // Send data to CSV backend and log locally
    const payload = { ...data, fit_result: calculatedResult, priority: isLowIntent ? "low" : "normal" };
    console.log("Captured Data:", payload);
    
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
      case 1:
        return !data.business_type;
      case 2:
        return !data.enquiry_volume;
      case 3:
        return data.lead_sources.length === 0;
      case 4:
        return !data.biggest_leak;
      case 5:
        return !data.desired_setup;
      case 6:
        return !data.readiness;
      default:
        return false;
    }
  };

  if (isDone) {
    return (
      <div className="max-w-xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">You’re one step closer to fixing the leak</h2>
        <p className="text-slate-600 mb-8 text-lg">
          Book your Fit Check and we’ll show you what is breaking, what matters most, and what Klarnow would recommend.
        </p>
        <Button 
          size="lg" 
          className="w-full text-lg font-medium"
          onClick={() => window.open("https://calendly.com", "_blank")} // Placeholder scheduling link
        >
          Book Now
        </Button>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-xl text-center space-y-6">
        {result === "A" && (
          <>
            <h2 className="text-3xl font-bold text-slate-900">You look like a strong fit for Klarnow</h2>
            <p className="text-slate-600 text-lg">
              Your answers suggest there is a clear gap in your lead handling. The next step is a quick call so we can show you what is leaking and which setup makes the most sense.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full text-lg font-medium py-6" onClick={() => setIsDone(true)}>
                Book My Fit Check
              </Button>
              <p className="text-sm text-slate-500 mt-3 hover:text-slate-800 transition-colors">See the AI Receptionist live on the call.</p>
            </div>
          </>
        )}
        {result === "B" && (
          <>
            <h2 className="text-3xl font-bold text-slate-900">The AI Receptionist looks like the right place to start</h2>
            <p className="text-slate-600 text-lg">
              You likely do not need the full system first. Start by fixing missed calls, basic bookings, and follow-up gaps.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full text-lg font-medium py-6" onClick={() => setIsDone(true)}>
                Book My Fit Check
              </Button>
              <p className="text-sm text-slate-500 mt-3 hover:text-slate-800 transition-colors">We’ll show you how it would work for your business.</p>
            </div>
          </>
        )}
        {result === "C" && (
          <>
            <h2 className="text-3xl font-bold text-slate-900">You likely need the full 14-Day Call-First System</h2>
            <p className="text-slate-600 text-lg">
              Your answers suggest the problem is bigger than missed calls alone. You likely need the booking flow, follow-up, reminders, and full lead journey installed properly.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full text-lg font-medium py-6" onClick={() => setIsDone(true)}>
                Book My Fit Check
              </Button>
              <p className="text-sm text-slate-500 mt-3 hover:text-slate-800 transition-colors">We’ll walk you through what needs fixing first.</p>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden relative min-h-[500px] flex flex-col justify-between">
      <div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-500">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full"
              style={{ backgroundColor: "#8359ee" }}
              initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What kind of service business do you run?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setData({ ...data, business_type: type })}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                        data.business_type === type
                          ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                          : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">How many calls or enquiries do you get in a typical week?</h2>
                <p className="text-slate-500 mb-6 text-sm">A rough estimate is fine.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {enquiryVolumes.map((vol) => (
                    <button
                      key={vol}
                      onClick={() => setData({ ...data, enquiry_volume: vol })}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                        data.enquiry_volume === vol
                          ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                          : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Where do most of your enquiries come from right now?</h2>
                <p className="text-slate-500 mb-6 text-sm">Select all that apply.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {leadSources.map((source) => {
                    const isSelected = data.lead_sources.includes(source);
                    return (
                      <button
                        key={source}
                        onClick={() => toggleMultiSelect(source)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                            : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                        }`}
                      >
                        {source}
                        {isSelected && <Check className="w-5 h-5 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What is the biggest leak in your lead flow right now?</h2>
                <div className="grid grid-cols-1 gap-3">
                  {biggestLeaks.map((leak) => (
                    <button
                      key={leak}
                      onClick={() => setData({ ...data, biggest_leak: leak })}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                        data.biggest_leak === leak
                          ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                          : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      {leak}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What are you looking for right now?</h2>
                <div className="grid grid-cols-1 gap-3">
                  {desiredSetups.map((setup) => (
                    <button
                      key={setup}
                      onClick={() => setData({ ...data, desired_setup: setup })}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                        data.desired_setup === setup
                          ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                          : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      {setup}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How ready are you to fix this?</h2>
                <div className="grid grid-cols-1 gap-3">
                  {readinessOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setData({ ...data, readiness: option })}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                        data.readiness === option
                          ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                          : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end">
        <Button
          onClick={handleNext}
          disabled={isNextDisabled()}
          className="flex items-center gap-2 pr-4 h-12 px-6"
        >
          {step === totalSteps ? "See My Result" : "Next"}
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
