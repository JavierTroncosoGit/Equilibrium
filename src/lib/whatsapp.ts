import { siteConfig } from "./config";

/**
 * Builds the WhatsApp URL from site config.
 * Used by any component whose href points to "#whatsapp".
 */
export function getWhatsAppUrl(): string {
  const wa = siteConfig.contact?.whatsapp;
  if (!wa) return "#";

  const cleanNumber = wa.number.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(
    wa.message || "Hola, me gustaría agendar una hora en Equilibrium Chonchi."
  );

  return cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${encodedMessage}`
    : "#";
}

/**
 * Resolves an href: if it's "#whatsapp", returns the actual wa.me URL.
 * Otherwise returns the original href unchanged.
 */
export function resolveHref(href: string): {
  url: string;
  isExternal: boolean;
} {
  if (href === "#whatsapp") {
    return { url: getWhatsAppUrl(), isExternal: true };
  }
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  return { url: href, isExternal };
}
