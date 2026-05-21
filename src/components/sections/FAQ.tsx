"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FAQ() {
  const faqConfig = siteConfig.sections.find((s) => s.type === "faq");
  if (!faqConfig) return null;

  const config = faqConfig as any;
  const items = config.items || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentItem = items[activeIndex];

  // Slide animation variants
  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    }),
  };

  return (
    <section id={config.id} className="py-20 lg:py-24 bg-gradient-to-b from-bgSecondary to-white relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          {config.sectionLabel && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-wider text-xs md:text-sm mb-4 block"
            >
              {config.sectionLabel}
            </motion.span>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display md:text-4xl font-extrabold text-textPrimary leading-tight tracking-tight max-w-xl mx-auto"
          >
            {config.headline}
          </motion.h2>
        </div>

        {/* Testimonial-styled FAQ Carousel Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-slate-100/60 border border-slate-100/80 flex flex-col items-center relative min-h-[380px] justify-between"
        >
          {/* Trust rating pill (Google reviews representation) */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm text-xs font-semibold text-textSecondary mb-8 pointer-events-none select-none">
            <span className="text-[#4285F4] font-extrabold text-sm">G</span>
            <div className="flex gap-0.5 text-amber-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="font-bold text-textPrimary">5.0</span>
            <span className="text-slate-300">·</span>
            <span>Opiniones de Pacientes</span>
          </div>

          {/* Active Question & Answer with animations */}
          <div className="w-full relative overflow-hidden flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col items-center text-center"
              >
                {/* Large Quotation / Question */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-textPrimary leading-snug tracking-tight max-w-2xl mx-auto mb-6 text-center px-2">
                  “{currentItem.question}”
                </h3>

                {/* Subtitle / Answer Body */}
                <p className="text-textSecondary text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-8 text-center">
                  {currentItem.answer}
                </p>

                {/* Author Badge (Equilibrium stamp) */}
                <div className="flex items-center gap-3.5 mt-2 justify-center select-none">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-primary/10 shrink-0">
                    E
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-textPrimary text-sm md:text-base leading-none">
                      Equipo Equilibrium
                    </span>
                    <span className="text-textSecondary text-xs md:text-sm font-medium mt-1">
                      Centro de Salud Integral
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Arrows and dot-line bar) */}
          <div className="flex items-center justify-center gap-6 mt-12 w-full">
            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:border-slate-300 transition-all shadow-sm active:scale-95"
              aria-label="Pregunta anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots & Line Indicator */}
            <div className="flex items-center gap-2.5">
              {items.map((_: any, idx: number) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "w-8 h-2.5 rounded-full bg-slate-900" 
                        : "w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Ir a pregunta ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-primary bg-white flex items-center justify-center text-primary hover:bg-primary/5 transition-all shadow-sm active:scale-95"
              aria-label="Siguiente pregunta"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* CTA below FAQ card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-textSecondary text-base md:text-lg mb-4">
            ¿Tienes otra pregunta?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact?.whatsapp?.number?.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact?.whatsapp?.message || "Hola, tengo una consulta.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primaryDark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base shadow-md shadow-primary/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Escríbenos por WhatsApp
          </a>
        </motion.div>

      </div>

      {/* JSON-LD Schema for SEO */}
      {config.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((item: any) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
    </section>
  );
}
