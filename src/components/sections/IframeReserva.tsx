"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export function IframeReserva() {
  const iframeConfig = siteConfig.sections.find((s) => s.type === "iframe-reserva");
  if (!iframeConfig) return null;

  const config = iframeConfig as any;

  return (
    <section 
      id={config.id} 
      className="py-20 lg:py-32 bg-white relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          
          {/* Left Side: Info and Trust */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              {config.sectionLabel && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{config.sectionLabel}</span>
                </motion.div>
              )}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-textPrimary leading-tight"
              >
                {config.headline || "Reserva tu hora ahora"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-textSecondary"
              >
                Accede a nuestra agenda online en tiempo real. Rápido, seguro y sin esperas telefónicas.
              </motion.p>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Clock, text: "Confirmación inmediata" },
                { icon: ShieldCheck, text: "Reserva 100% segura" },
                { icon: CheckCircle2, text: "Especialistas certificados" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-bgSecondary border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-textPrimary">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="p-6 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
              <p className="text-sm font-medium">
                Si prefieres agendar por WhatsApp, también puedes hacerlo presionando el botón flotante.
              </p>
            </div>
          </div>

          {/* Right Side: The Iframe Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glossy background element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 w-full">
              {config.iframeSrc ? (
                <div className="w-full relative" style={{ height: config.iframeHeight || 650 }}>
                  <iframe
                    src={config.iframeSrc}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ overflow: "hidden", borderRadius: "0px", minHeight: "100%" }}
                    title="Agenda Online Reservo"
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Iframe no configurado</p>
                </div>
              )}
              <div className="bg-primary/5 p-4 flex items-center justify-center gap-3 border-t border-gray-100">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                  Plataforma Segura Reservo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
