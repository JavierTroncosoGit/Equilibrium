"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonialsConfig = siteConfig.sections.find((s) => s.type === "testimonials");
  if (!testimonialsConfig) return null;

  const config = testimonialsConfig as any;
  const items = config.items || [];

  return (
    <section id={config.id} className="py-12 lg:py-16 bg-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          {config.sectionLabel && (
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block"
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

        {/* CSS-based Carousel on mobile, Grid on desktop */}
        <div className="flex overflow-x-auto lg:overflow-visible lg:flex-nowrap gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:justify-center">
          {items.map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-bgSecondary rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 flex-none w-[85vw] sm:w-[350px] lg:flex-1 lg:w-auto lg:max-w-md relative snap-center"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-primary/10">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>

              <div className="flex text-[#f59e0b] mb-6">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-textPrimary text-lg font-medium leading-relaxed mb-8 relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-primary relative border border-primary/5">
                  {(() => {
                    const hasRealImage = item.avatar && !item.avatar.includes('avatar');
                    if (hasRealImage) {
                      return (
                        <Image 
                          src={item.avatar} 
                          alt={item.author} 
                          fill 
                          className="object-cover"
                          unoptimized={item.avatar.startsWith("/")}
                        />
                      );
                    }
                    // Generate initials
                    const parts = (item.author || "").trim().split(/\s+/);
                    const initials = parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0]?.[0]?.toUpperCase() || "?";
                    // Generate color from name
                    let hash = 0;
                    for (let i = 0; i < (item.author || "").length; i++) {
                      hash = (item.author || "").charCodeAt(i) + ((hash << 5) - hash);
                    }
                    const hue = Math.abs(hash % 360);
                    return (
                      <div
                        className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: `hsl(${hue}, 45%, 55%)` }}
                      >
                        {initials}
                      </div>
                    );
                  })()}
                </div>
                <div>
                  <h4 className="font-bold text-textPrimary">{item.author}</h4>
                  <p className="text-sm text-textSecondary">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
