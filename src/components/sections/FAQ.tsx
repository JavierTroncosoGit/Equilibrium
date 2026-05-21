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
    <section id={config.id} className="py-12 lg:py-16 bg-bgSecondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
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

        {/* CTA Below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-textSecondary text-lg mb-4">
            ¿Tienes otra pregunta?
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact?.whatsapp?.number?.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.contact?.whatsapp?.message || "Hola, tengo una consulta.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primaryDark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
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
