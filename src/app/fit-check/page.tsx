import React from "react";
import { FitCheckQuiz } from "@/components/quiz/FitCheckQuiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit Check | Klarnow",
  description: "Take the 60-second fit check to see which Klarnow system is right for your service business.",
};

export default function FitCheckPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 md:pt-40 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto mb-8 text-center px-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight sm:text-5xl mb-4">
          60-Second Fit Check
        </h1>
        <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
          Answer these quick questions to find out where your lead flow is leaking and if Klarnow is the right solution.
        </p>
      </div>
      
      <div className="w-full">
        <FitCheckQuiz />
      </div>
    </div>
  );
}
