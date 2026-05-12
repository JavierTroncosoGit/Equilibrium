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
  ExternalLink
} from "lucide-react";
import { resolveHref } from "@/lib/whatsapp";

export function Footer() {
  const footerConfig = siteConfig.sections.find((s) => s.type === "footer");
  if (!footerConfig) return null;

  const config = footerConfig as any;
  const navLinks = siteConfig.sections.find(s => s.type === "navbar")?.links || [];
  const instagramUrl = "https://www.instagram.com/equilibriumchonchi/";

  return (
    <footer id={config.id} className="relative bg-white pt-16 pb-12 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px] relative z-10">
        
        {/* Instagram Creative Section */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-12 rounded-[2.5rem] bg-gradient-to-br from-[#025273] to-[#013a52] p-8 md:p-10 overflow-hidden shadow-2xl"
        >
          {/* Abstract circles */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-md border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>@equilibriumchonchi</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Únete a nuestra comunidad <br />de bienestar en redes sociales
              </h2>
              <p className="text-blue-100/80 text-lg mb-8 max-w-xl">
                Encuentra consejos de salud, conoce a nuestro equipo y mantente al tanto de nuevos convenios y especialidades.
              </p>
              <Link 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl group"
              >
                Seguir en Instagram
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Mock Instagram Feed Teaser */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md lg:max-w-none">
              {[1, 2, 3].map((i) => (
                <div key={i} className={i === 3 ? "hidden sm:block" : ""}>
                  <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-equilibrium.png"
                alt={siteConfig.brand.logo.alt}
                width={180}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-textSecondary leading-relaxed">
              {config.tagline || "Centro de salud integral dedicado a brindar atención de calidad a la comunidad de Chonchi y sus alrededores."}
            </p>
            <div className="flex items-center gap-4">
              <Link href={instagramUrl} target="_blank" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href={resolveHref("#whatsapp").url} target="_blank" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-primary font-bold mb-6 text-lg">Navegación</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-textSecondary hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-primary font-bold mb-6 text-lg">Contacto</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-textSecondary uppercase font-bold tracking-wider mb-1">Llámanos</span>
                  <a href={`tel:${siteConfig.contact.whatsapp.number}`} className="text-textPrimary font-semibold hover:text-primary transition-colors">
                    +{siteConfig.contact.whatsapp.number}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-textSecondary uppercase font-bold tracking-wider mb-1">Email</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-textPrimary font-semibold hover:text-primary transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="text-primary font-bold mb-6 text-lg">Ubicación</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-textPrimary font-medium">
                  Sargento Candelaria 346,<br />Chonchi, Chiloé.
                </p>
              </div>
              <Link 
                href="https://maps.google.com/?q=Sargento+Candelaria+346+Chonchi" 
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Ver en Google Maps
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-textSecondary text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold text-primary">{siteConfig.brand.name}</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-textSecondary hover:text-primary transition-colors">Términos</Link>
            <Link href="#" className="text-textSecondary hover:text-primary transition-colors">Privacidad</Link>
            <div className="flex items-center gap-2 text-textSecondary">
              <span>Hecho con</span>
              <span className="text-accent animate-pulse">❤️</span>
              <span>en Chonchi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
