import configData from "../../site.config.json";

export type SiteConfig = typeof configData;
export const siteConfig = configData as SiteConfig;
