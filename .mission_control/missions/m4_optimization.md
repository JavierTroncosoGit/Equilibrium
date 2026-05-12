# M4 — Optimización + Deploy

Deps: todas las anteriores

## Checkpoint: M4 — Optimización
- **Lee:** `site.config.json` (seo, analytics)
- **Verifica:** SEO, imágenes, Lighthouse, Deploy en Vercel

## Checklist

### SEO
- [ ] Metadata API con `siteConfig.seo`
- [ ] Open Graph (og:title, og:description, og:image)
- [ ] Canonical URL
- [ ] `robots.txt` en `/public/`
- [ ] Un solo `<h1>` en toda la página (Hero)

### Imágenes
- [ ] `next/image` en todas partes
- [ ] Alt descriptivo
- [ ] `priority` en la imagen del Hero (LCP)

### Performance
- [ ] `npm run build` sin errores
- [ ] Lighthouse > 90 en Perf, A11y, SEO
- [ ] Eliminar "use client" innecesarios
- [ ] Sin console.log

### Deploy
- [ ] Conectar GitHub con Vercel
- [ ] Verificar que carga correctamente en la URL de producción

## Done

- Lighthouse en verde, SEO configurado, sitio en producción
- → state.md: M4 🟢, M5 ⚪ (Opcional)
