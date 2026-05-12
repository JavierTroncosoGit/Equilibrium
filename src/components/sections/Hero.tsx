"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { resolveHref } from "@/lib/whatsapp";

export function Hero() {
  const heroConfig = siteConfig.sections.find((s) => s.type === "hero");
  if (!heroConfig) return null;

  const config = heroConfig as any;
  const ctas = config.ctas || [];

  return (
    <section 
      id={config.id} 
      className="relative min-h-[70vh] flex items-center pt-20 pb-10 overflow-hidden bg-bgSecondary"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1150px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            {config.badge && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center self-center lg:self-start rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                {config.badge}
              </motion.div>
            )}

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-hero font-bold tracking-tight text-textPrimary leading-[1.1]"
            >
              {config.headline}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-textSecondary max-w-[600px] mx-auto lg:mx-0"
            >
              {config.subheadline}
            </motion.p>

            {ctas.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
              >
                {ctas.map((cta: any, index: number) => {
                  const resolved = resolveHref(cta.href);
                  return (
                    <Link 
                      key={index} 
                      href={resolved.url}
                      {...(resolved.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={cn(
                        buttonVariants({ variant: cta.variant === "primary" ? "default" : "outline", size: "lg" }),
                        "rounded-full shadow-lg h-14 px-8 text-base font-semibold transition-all duration-300",
                        cta.variant === "primary" 
                          ? "bg-primary hover:bg-primaryDark text-white hover:shadow-xl hover:-translate-y-1" 
                          : "border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary"
                      )}
                    >
                      {cta.text}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </motion.div>

          {/* Media */}
          {config.media && config.media.type !== "none" && (
            <div className="md:w-[85%] lg:w-[85%] mx-auto w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20"
              >
                {config.media.type === "image" && (
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 rounded-[2rem]"></div>
                )}
                {config.media.type === "image" ? (
                  <Image
                    src={config.media.src || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"}
                    alt={config.media.alt || "Hero Image"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    Video Placeholder
                  </div>
                )}
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
