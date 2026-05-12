"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export function BenefitsGrid() {
  const benefitsConfig = siteConfig.sections.find((s) => s.type === "benefits-grid");
  if (!benefitsConfig) return null;

  const config = benefitsConfig as any;
  const items = config.items || [];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id={config.id} className="py-12 lg:py-24 bg-bgSecondary">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${config.columns || 3} gap-6 lg:gap-8`}
        >
          {items.map((item: any, index: number) => {
            const IconName = item.icon ? item.icon.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join('') : null;
            const Icon = IconName ? (LucideIcons as any)[IconName] : null;

            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {Icon ? <Icon className="w-7 h-7" /> : null}
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary mb-3">{item.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
