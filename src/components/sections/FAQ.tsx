"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqConfig = siteConfig.sections.find((s) => s.type === "faq");
  if (!faqConfig) return null;

  const config = faqConfig as any;
  const items = config.items || [];

  return (
    <section id={config.id} className="py-12 lg:py-24 bg-bgSecondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100"
        >
          <Accordion className="w-full">
            {items.map((item: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0 py-4">
                <AccordionTrigger className="text-left text-lg font-bold text-textPrimary hover:text-primary transition-colors hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-textSecondary text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
