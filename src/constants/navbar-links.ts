import {
  BookOpen,
  Contact,
  Home,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

export const navigationLinks = [
  { href: "/", icon: Home, label: "Home", active: true },
  { href: "/about", icon: BookOpen, label: "About" },
  { href: "/features", icon: Sparkles, label: "Features" },
  { href: "/faq", icon: MessageCircleQuestion, label: "FAQ" },
  { href: "/contact", icon: Contact, label: "Contact" },
];
