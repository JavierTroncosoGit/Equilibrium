"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function Steps() {
  const stepsConfig = siteConfig.sections.find((s) => s.type === "steps");
  if (!stepsConfig) return null;

  const config = stepsConfig as any;
  const items = config.steps || [];

  return (
    <section id={config.id} className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          {config.sectionLabel && (
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block"
            >
              {config.sectionLabel}
            </motion.span>
          )}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display font-bold text-textPrimary leading-tight"
          >
            {config.headline}
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line (visible on md+) */}
          <div className="hidden md:block absolute top-[2.5rem] left-8 right-8 h-1 bg-gray-100 rounded-full">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-primary/20 rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {items.map((item: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group hover:border-primary transition-colors duration-300 relative z-10">
                  <span className="text-2xl font-black text-gray-300 group-hover:text-primary transition-colors">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3">{item.title}</h3>
                <p className="text-textSecondary leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
