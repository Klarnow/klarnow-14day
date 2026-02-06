"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "+441616960976";

 export default function Banner() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#8359ee] text-primary-foreground py-2.5 px-4">
            <div className="container-wide flex flex-row items-center justify-between gap-4">
                <p className="text-[14.9px] sm:text-sm font-bold flex-1">
                    See a live demo of the instant receptionist 
                </p>
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className="bg-white hover:bg-white/90 border-0  rounded-full px-[10px] animate-pulse-glow"
                    asChild
                >
                    <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center group">
                        <Phone className="h-3.5 w-3.5 text-[#8359ee] group-hover:animate-ring" />
                    </a>
                </Button>
            </div>
        </div>
    );
 }