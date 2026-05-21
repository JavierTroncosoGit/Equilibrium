"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function ServicesBanner() {
  const config = siteConfig.sections.find((s) => s.type === "services-banner") as any;
  if (!config) return null;

  const items = config.items || [];

  // Duplicate items for a seamless infinite loop
  const doubledItems = [...items, ...items];

  return (
    <section 
      id={config.id} 
      className="relative w-full bg-gradient-to-r from-primary via-primaryDark to-primary py-7 overflow-hidden border-y border-white/10 shadow-xl z-20"
    >
      {/* Soft edge gradients for a fading visual effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling container */}
      <div className="relative flex items-center overflow-hidden w-full">
        <div className="flex items-center gap-8 animate-marquee min-w-max py-2 cursor-default select-none">
          {doubledItems.map((item: any, i: number) => {
            return (
              <div
                key={`banner-item-${i}`}
                className="flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 hover:border-white/30 hover:scale-[1.04] transition-all duration-300 shadow-md shadow-black/10 hover:shadow-cyan-500/10"
              >
                {/* Modern glowing indicator dot */}
                <span className="relative flex h-2 w-2 mr-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                </span>
                
                {/* Title */}
                <span className="font-bold text-sm md:text-base text-white tracking-wide whitespace-nowrap uppercase">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
