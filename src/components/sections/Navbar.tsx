"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { resolveHref } from "@/lib/whatsapp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarConfig = siteConfig.sections.find((s) => s.type === "navbar");
  if (!navbarConfig) return null;

  const links = (navbarConfig as any).links || [];
  const cta = (navbarConfig as any).cta;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1150px]">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/assets/logo-equilibrium.png"
            alt={siteConfig.brand.logo.alt}
            width={200}
            height={120}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link: any, index: number) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-medium text-textSecondary hover:text-primary transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
          {cta && (() => {
            const resolved = resolveHref(cta.href);
            return (
              <Link
                href={resolved.url}
                {...(resolved.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  buttonVariants(),
                  "rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primaryDark text-white flex items-center gap-2 px-6"
                )}
              >
                <Calendar className="w-4 h-4" />
                {cta.text}
              </Link>
            );
          })()}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" className="h-11 w-11" aria-label="Abrir menú" />}
          >
            <Menu className="h-6 w-6 text-primary" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-gray-100 flex flex-col p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Menú de navegación</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-8 mt-16 px-6">
              <nav className="flex flex-col gap-4 items-end">
                {links.map((link: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex justify-end w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-semibold text-primary px-6 py-3 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all border border-primary/10 shadow-sm w-[240px] text-center"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              {cta && (() => {
                const resolved = resolveHref(cta.href);
                return (
                  <div className="mt-4 pt-6 border-t border-gray-100">
                    <Link
                      href={resolved.url}
                      {...(resolved.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        buttonVariants(),
                        "w-full rounded-full shadow-md bg-primary hover:bg-primaryDark text-white flex items-center justify-center gap-2"
                      )}
                    >
                      <Calendar className="w-4 h-4" />
                      {cta.text}
                    </Link>
                  </div>
                );
              })()}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
