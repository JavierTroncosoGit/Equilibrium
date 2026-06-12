"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Calendar, Clock, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { resolveHref } from "@/lib/whatsapp";

export function ReservaSection() {
  const config = siteConfig.sections.find((s) => s.type === "reserva-unified") as any;
  if (!config) return null;
  const trustBadges = config.trustBadges || [];
  const whatsappResolved = resolveHref("#whatsapp");

  // Resolve trust badge icons
  const trustIconMap: Record<string, any> = {
    clock: Clock,
    "shield-check": ShieldCheck,
    "check-circle-2": CheckCircle2,
  };

  return (
    <section
      id={config.id}
      className="relative py-16 lg:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#025273] via-[#034e6b] to-[#013a52]" />

      {/* Decorative shapes */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#e20514]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1150px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-white/10"
          >
            <Calendar className="w-4 h-4" />
            <span>{config.sectionLabel}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display font-bold text-white leading-tight"
          >
            {config.headline}
          </motion.h2>
        </div>

        {/* Iframe Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind card */}
          <div className="absolute -inset-4 bg-white/10 rounded-[2.5rem] blur-2xl" />

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            {config.iframeSrc ? (
              <div
                className="w-full relative"
                style={{ height: config.iframeHeight || 650 }}
              >
                <iframe
                  src={config.iframeSrc}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{
                    overflow: "hidden",
                    borderRadius: "0px",
                    minHeight: "100%",
                  }}
                  title="Agenda Online Reservo"
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Iframe no configurado</p>
              </div>
            )}

            {/* Powered by strip */}
            <div className="bg-primary/5 p-4 flex items-center justify-center gap-3 border-t border-gray-100">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Plataforma Segura Reservo
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges Row */}
        {trustBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
          >
            {trustBadges.map((badge: any, idx: number) => {
              const BadgeIcon = trustIconMap[badge.icon] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-white/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <BadgeIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-sm">{badge.text}</span>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* WhatsApp Alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-blue-100/60 text-sm mb-4">
            ¿Prefieres agendar por WhatsApp?
          </p>
          <Link
            href={whatsappResolved.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 px-8 h-12 font-semibold transition-all duration-300 gap-2"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
