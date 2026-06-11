"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Check, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Alianzas() {
  const alianzasConfig = siteConfig.sections.find((s) => s.type === "alianzas");
  if (!alianzasConfig) return null;

  const config = alianzasConfig as any;
  const partners = config.partners || [];

  return (
    <section id={config.id} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Decorative gradient blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1150px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
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
            className="text-display font-bold text-textPrimary leading-tight mb-4"
          >
            {config.headline}
          </motion.h2>
          {config.subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-textSecondary text-lg"
            >
              {config.subheadline}
            </motion.p>
          )}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner: any, index: number) => {
            const hasWebsite = !!partner.website;
            
            // Build WhatsApp link
            const waNumber = partner.whatsapp?.number;
            const waMsg = encodeURIComponent(partner.whatsapp?.message || "");
            const waUrl = waNumber ? `https://wa.me/${waNumber}?text=${waMsg}` : "#";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col bg-bgSecondary rounded-[2.5rem] border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group"
              >
                {/* Logo and Header container */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Logo Container */}
                  <div className="w-full h-32 rounded-2xl bg-white flex items-center justify-center p-6 border border-gray-50 shadow-inner mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="text-xl font-bold text-textPrimary mb-3">
                    {partner.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-textSecondary text-sm sm:text-base leading-relaxed max-w-sm">
                    {partner.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gray-200/60 my-2" />

                {/* Services List */}
                <div className="flex-grow my-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-textSecondary mb-3">
                    Servicios Disponibles:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-textPrimary">
                    {partner.services.map((service: string, serviceIndex: number) => (
                      <li key={serviceIndex} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 pt-4 border-t border-gray-100">
                  {/* WhatsApp Button */}
                  <Link
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.992L2 22l5.18-.1.354.211A9.953 9.953 0 0 0 12.013 22c5.506 0 9.989-4.478 9.99-9.984C22.007 6.51 17.519 2 12.012 2zm5.835 14.165c-.244.693-1.42 1.268-1.954 1.352-.486.076-1.12.13-3.268-.744-2.75-1.118-4.524-3.905-4.66-4.089-.138-.184-1.116-1.487-1.116-2.836 0-1.348.702-2.01.954-2.278.254-.268.553-.335.738-.335.185 0 .37.004.532.012.169.008.397-.064.621.468.223.532.766 1.865.832 1.997.066.13.11.282.022.458-.088.176-.132.282-.265.435-.132.153-.277.34-.396.457-.132.13-.27.272-.116.533.153.261.68 1.108 1.458 1.796.997.886 1.839 1.162 2.098 1.292.26.13.41.11.565-.067.153-.176.66-.767.838-1.026.176-.26.353-.217.595-.128.243.088 1.543.727 1.808.859.265.132.441.197.507.31.066.113.066.654-.178 1.347z"/>
                    </svg>
                    <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
                  </Link>

                  {/* Instagram Button */}
                  <Link
                    href={partner.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:opacity-95 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span className="text-xs font-semibold tracking-wide">Instagram</span>
                  </Link>

                  {/* Website Button */}
                  {hasWebsite ? (
                    <Link
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-primary text-white hover:bg-primaryDark active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <Globe className="w-5 h-5" />
                      <span className="text-xs font-semibold tracking-wide">Sitio Web</span>
                    </Link>
                  ) : (
                    <div
                      title="Sitio web en desarrollo"
                      className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed select-none transition-all duration-200"
                    >
                      <Globe className="w-5 h-5 opacity-60" />
                      <span className="text-xs font-semibold tracking-wide">Próximamente</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
