"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink,
  Heart,
  Activity,
  Award,
  Clock
} from "lucide-react";
import { resolveHref } from "@/lib/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function Footer() {
  const footerConfig = siteConfig.sections.find((s) => s.type === "footer");
  if (!footerConfig) return null;

  const config = footerConfig as any;
  const navLinksRaw = siteConfig.sections.find(s => s.type === "navbar")?.links || [];
  const navLinks = [...navLinksRaw as any[]];
  const instagramUrl = "https://www.instagram.com/equilibriumchonchi/";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <footer id={config.id} className="relative bg-gradient-to-b from-white to-slate-50/90 pt-20 pb-12 overflow-hidden border-t border-gray-100/50">
      {/* Decorative floating blurred lights */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1150px] relative z-10">

        {/* Instagram Creative Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-16 rounded-[2.5rem] bg-gradient-to-br from-primary via-[#046187] to-primaryDark p-8 md:p-12 overflow-hidden shadow-xl shadow-primary/10 border border-white/20 bg-clip-padding"
        >
          {/* Internal gradient glows */}
          <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/15">
                <InstagramIcon className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span>@equilibriumchonchi</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                Únete a nuestra comunidad <br />de bienestar digital
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                Encuentra valiosos consejos de prevención, conoce las opiniones de nuestros especialistas y entérate de nuevas especialidades y convenios de salud.
              </p>

              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all hover:scale-[1.03] shadow-lg shadow-black/10 group"
              >
                Seguir en Instagram
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mock Instagram Feed Teaser */}
            <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {[
                  { icon: Heart, label: "Consejos", gradient: "from-pink-500/20 to-rose-600/20" },
                  { icon: Activity, label: "Prevención", gradient: "from-cyan-500/20 to-blue-600/20" },
                  { icon: Award, label: "Salud", gradient: "from-emerald-500/20 to-teal-600/20" },
                  { icon: MessageCircle, label: "Equipo", gradient: "from-purple-500/20 to-indigo-600/20" },
                  { icon: Heart, label: "Bienestar", gradient: "from-orange-500/20 to-amber-600/20" },
                  { icon: Activity, label: "Hábitos", gradient: "from-blue-500/20 to-indigo-600/20" }
                ].map((post, i) => {
                  const PostIcon = post.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="aspect-square rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all duration-300 relative group overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white group-hover:text-primary transition-all duration-300 z-10">
                        <PostIcon className="text-white group-hover:text-primary w-5 h-5 transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold text-white/60 tracking-wider uppercase group-hover:text-white transition-colors z-10">
                        {post.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 pt-4 items-center"
        >
          {/* Column 1: Brand & Contact Info (5 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block self-start hover:opacity-90 transition-opacity">
              <Image
                src="/assets/logo-equilibrium.png"
                alt={siteConfig.brand.logo.alt}
                width={180}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-textSecondary leading-relaxed text-sm md:text-base pr-4">
              {config.tagline || "Centro de salud integral dedicado a brindar atención de calidad a la comunidad de Chonchi y sus alrededores."}
            </p>

            {/* Contact Info Items in a clean format */}
            <div className="flex flex-col gap-3.5 pt-2 text-sm text-textSecondary">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Sargento Candelaria 346, Chonchi, Chiloé.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.whatsapp.number}`} className="hover:text-primary transition-colors font-medium">
                  +{siteConfig.contact.whatsapp.number}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors font-medium break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Lun - Vie: 09:00 - 18:00 | Sáb: 09:00 - 13:00</span>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-[11px] text-textSecondary uppercase font-bold tracking-wider">
                Conéctate con Nosotros
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href={instagramUrl}
                  target="_blank"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center text-textSecondary hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] hover:shadow-lg hover:shadow-[#e1306c]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <InstagramIcon className="w-4.5 h-4.5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center text-textSecondary hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-lg hover:shadow-[#1877f2]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <FacebookIcon className="w-4.5 h-4.5" />
                </Link>
                <Link
                  href={resolveHref("#whatsapp").url}
                  target="_blank"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center text-textSecondary hover:bg-[#25d366] hover:text-white hover:border-[#25d366] hover:shadow-lg hover:shadow-[#25d366]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Google Maps Embed (7 cols) */}
          <motion.div variants={itemVariants} className="md:col-span-7 w-full">
            <div className="bg-white border border-slate-200/50 rounded-[2rem] p-2.5 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:border-slate-200 transition-all duration-500 overflow-hidden h-[340px] relative group">
              {/* Subtle glass header on map */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-2xl py-2.5 px-4 shadow-md flex items-center gap-2.5 pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-textSecondary uppercase font-extrabold tracking-wider leading-none">Nuestra Ubicación</span>
                  <span className="text-textPrimary font-bold text-xs mt-0.5 leading-none">Sargento Candelaria 346, Chonchi</span>
                </div>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Sargento%20Candelaria%20346,%20Chonchi,%20Chilo%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="rounded-[1.7rem] border-0 grayscale-[10%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright & Legal links */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-textSecondary text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold text-primary">{siteConfig.brand.name}</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs md:text-sm font-medium">
            <Link href="#" className="text-textSecondary hover:text-primary transition-colors">Términos de Uso</Link>
            <Link href="#" className="text-textSecondary hover:text-primary transition-colors">Políticas de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
