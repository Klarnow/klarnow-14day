"use client";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import Results from "@/components/sections/Results";
import Proof from "@/components/sections/Proof";
import Enterprise from "@/components/sections/Enterprise";
import FAQ from "@/components/sections/FAQ";
import CustomServices from "@/components/sections/CustomServices";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
    return (
        <main>
            <Hero />
            <Problem />
            <Roadmap />
            <Pricing />
            <Results />
            <Proof />
            <Enterprise />
            <FAQ />
            <CustomServices />
            <FinalCTA />
        </main>
    );
};

export default Index;
