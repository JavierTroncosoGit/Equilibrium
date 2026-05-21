"use client";

import { siteConfig } from "@/lib/config";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useEffect, useRef } from "react";

/** Animated counter component for numeric values */
function AnimatedCounter({ value }: { value: string }) {
  const numericMatch = value.match(/^(\d+)(.*)$/);

  if (!numericMatch) {
    // Non-numeric value (e.g. "Fonasa", "Chonchi")
    return <span>{value}</span>;
  }

  const target = parseInt(numericMatch[1], 10);
  const suffix = numericMatch[2] || "";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, target, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const statsConfig = siteConfig.sections.find((s) => s.type === "stats");
  if (!statsConfig) return null;

  const config = statsConfig as any;
  const items = config.items || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id={config.id}
      className="py-12 bg-white relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-5xl rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 ring-1 ring-gray-50"
    >
      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          {items.map((item: any, index: number) => {
            // Dynamically get the Lucide icon based on name
            const IconName = item.icon
              ? item.icon
                  .split("-")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join("")
              : null;
            const Icon = IconName ? (LucideIcons as any)[IconName] : null;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center px-4 py-6 md:py-2 group"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {Icon ? <Icon className="w-6 h-6" /> : null}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-textPrimary mb-2">
                  <AnimatedCounter value={item.value} />
                </h3>
                <p className="text-textSecondary font-medium">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
