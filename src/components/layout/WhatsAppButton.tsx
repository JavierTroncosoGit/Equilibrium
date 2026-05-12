"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappConfig = siteConfig.contact?.whatsapp;
  
  if (!whatsappConfig) return null;

  // Format message for URL
  const encodedMessage = encodeURIComponent(whatsappConfig.message || "Hola, me gustaría más información.");
  // Basic number cleaning (assuming it's formatted +569... or similar)
  const cleanNumber = whatsappConfig.number.replace(/\D/g, "");
  
  // If no number is provided, don't show the button (or fallback)
  // But we still render it if the config demands it (for placeholder UI)
  const href = cleanNumber ? `https://wa.me/${cleanNumber}?text=${encodedMessage}` : "#";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsappConfig.label || "Contactar por WhatsApp"}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        {/* Optional Pulse effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20"></span>
      </Link>
    </motion.div>
  );
}
