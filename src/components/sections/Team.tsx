"use client";

import { siteConfig } from "@/lib/config";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Generates initials from a name string.
 * "Dr. Juan Pérez" → "JP", "[Nombre Apellido]" → "NA"
 */
function getInitials(name: string): string {
  const cleaned = name.replace(/^(Dr\.|Dra\.|Kgo\.|Flga\.|T\.M\.)\s*/i, "").replace(/[\[\]]/g, "");
  const parts = cleaned.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0]?.[0]?.toUpperCase() || "?";
}

/**
 * Generates a consistent HSL color from a string.
 */
function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 45%, 55%)`;
}

export function Team() {
  const teamConfig = siteConfig.sections.find((s) => s.type === "team");
  if (!teamConfig) return null;

  const config = teamConfig as any;
  const members = config.members || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [imageError, setImageError] = useState(false);

  if (members.length === 0) return null;

  const handlePrev = () => {
    setDirection(-1);
    setImageError(false);
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setImageError(false);
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const currentMember = members[currentIndex];
  const initials = getInitials(currentMember.name);
  const fallbackBg = stringToColor(currentMember.role + currentIndex);

  // Checks if we should try to render the actual image file
  const hasRealImage =
    currentMember.image &&
    !currentMember.image.includes("[") &&
    typeof currentMember.image === "string";

  // Sliding animation variants for smooth transition
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 600, damping: 38 },
        opacity: { duration: 0.12 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 600, damping: 38 },
        opacity: { duration: 0.12 }
      }
    })
  };

  return (
    <section id={config.id} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px]">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
            {config.headline || "Nuestros especialistas opinan"}
          </motion.h2>
          {config.subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textSecondary mt-3 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {config.subheadline}
            </motion.p>
          )}
        </div>

        {/* Custom Specialist Showcase Slider Card */}
        <div className="relative max-w-4xl mx-auto mt-8">
          <div className="bg-[#f8fafc] rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5 p-6 md:p-10 lg:p-12 min-h-[420px] flex flex-col justify-between relative">

            {/* Animating Card Content Area */}
            <div className="relative overflow-hidden w-full h-full flex-grow">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(event, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      handleNext();
                    } else if (info.offset.x > swipeThreshold) {
                      handlePrev();
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >

                  {/* Left Column: Avatar and Name */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="relative w-36 h-44 md:w-full md:aspect-[3/4] rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100/50 shrink-0">
                      {hasRealImage && !imageError ? (
                        <Image
                          src={currentMember.image}
                          alt={currentMember.name}
                          fill
                          sizes="(max-width: 768px) 150px, 300px"
                          className="object-cover"
                          priority
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: fallbackBg }}
                        >
                          <span className="text-white text-4xl md:text-5xl font-bold opacity-80 select-none">
                            {initials}
                          </span>
                        </div>
                      )}

                      {/* Gentle shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Specialist Info */}
                    <div className="mt-4 w-full">
                      <h3 className="text-lg md:text-xl font-bold text-textPrimary leading-tight break-words">
                        {currentMember.name}
                      </h3>
                      <p className="text-sm font-semibold text-textSecondary/80 mt-1 uppercase tracking-wider">
                        {currentMember.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Opinion, Quote & Category */}
                  <div className="md:col-span-8 flex flex-col justify-center h-full text-center md:text-left">
                    {/* Category / Date Badge */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm font-bold text-accent uppercase tracking-widest mb-4">
                      <span>{currentMember.category || "Especialidad"}</span>
                      {currentMember.date && (
                        <>
                          <span className="text-gray-300">•</span>
                          <span className="text-textSecondary font-medium lowercase first-letter:uppercase">{currentMember.date}</span>
                        </>
                      )}
                    </div>

                    {/* Opinion/Quote Title */}
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-textPrimary leading-snug mb-4 tracking-tight">
                      {currentMember.quoteTitle || "El valor de una atención personalizada"}
                    </h4>

                    {/* Opinion Content Quote */}
                    <p className="text-base md:text-lg text-textSecondary leading-relaxed italic relative">
                      &ldquo;{currentMember.description}&rdquo;
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation pill aligned to bottom right in desktop, centered in mobile */}
            <div className="flex justify-center md:justify-end mt-8 md:mt-4">
              <div className="flex items-center bg-white border border-gray-100 rounded-full py-2 px-3 shadow-md shadow-primary/5 select-none gap-2">
                {/* Slide indicator */}
                <span className="text-sm font-bold text-textSecondary/80 px-3 min-w-[50px] text-center border-r border-gray-100">
                  {currentIndex + 1} / {members.length}
                </span>

                {/* Left Action Button */}
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-textSecondary hover:text-primary hover:bg-slate-50 active:scale-95 transition-all duration-200"
                  aria-label="Especialista anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Action Button */}
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-textSecondary hover:text-primary hover:bg-slate-50 active:scale-95 transition-all duration-200"
                  aria-label="Siguiente especialista"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
