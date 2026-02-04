import { Check, Clock, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const roadmapItems = [{
  status: "Live",
  statusBg: "bg-success/10",
  statusText: "text-success",
  icon: Check,
  iconBg: "bg-success",
  title: "Instant Receptionist + Call-First System",
  chips: ["Calls", "Transcripts", "Booking", "Reminders"]
}, {
  status: "Soon",
  statusBg: "bg-amber-500/10",
  statusText: "text-amber-600",
  icon: Clock,
  iconBg: "bg-amber-500",
  title: "Every Channel",
  chips: ["SMS", "WhatsApp", "Email"]
}, {
  status: "Coming",
  statusBg: "bg-muted",
  statusText: "text-muted-foreground",
  icon: Zap,
  iconBg: "bg-muted-foreground",
  title: "Proactive Outbound",
  chips: ["Reminders", "Follow-ups", "Reviews"]
}];
const Roadmap = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return;
};
export default Roadmap;