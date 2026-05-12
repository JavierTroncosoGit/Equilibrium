# M2 — Landing Page (Secciones)

Deps: M1

## Checkpoint: M2 — Landing
- **Lee:** `site.config.json` (sections[])
- **Crea:** Navbar, Hero, Secciones (Benefits, Steps, etc.), Footer, WhatsApp button
- **No toca:** lib/config.ts, layout.tsx (excepto para importar componentes)

**Fuente de verdad: `site.config.json` para todo el contenido y estructura.**

## Checklist

### Navbar
- [ ] Logo + links de ancla (#seccion)
- [ ] CTA button (si existe en config)
- [ ] Mobile → Sheet shadcn (hamburguesa)
- [ ] Sticky/transparent sobre Hero

### Secciones (Iterar sobre `site.config.json.sections`)
- [ ] Por cada sección en el array → crear componente en `src/components/sections/`
- [ ] Usar el `id` como HTML `id` para permitir navegación por anclas
- [ ] Implementar diseño según `ia/stack.md` (Layout Base de 1200px)
- [ ] Aplicar animaciones según `siteConfig.animations.level` (Framer Motion)

### Tipos de sección a implementar
- [ ] **hero**: Headline (H1), Subheadline, CTAs, Imagen/Video
- [ ] **stats**: Grid de números/logros
- [ ] **benefits-grid**: Grid de beneficios con iconos
- [ ] **steps**: Proceso paso a paso (numbered o timeline)
- [ ] **testimonials**: Carousel o grid de testimonios con rating
- [ ] **faq**: Accordion de shadcn
- [ ] **cta-banner**: Banner simple de llamada a la acción
- [ ] **footer**: Tagline, redes sociales, copyright

### WhatsApp Floating Button
- [ ] Si `siteConfig.contact.whatsapp` existe → botón flotante en la esquina inferior derecha
- [ ] Usar `env(safe-area-inset-bottom)` para compatibilidad con iPhone

### Verificar
- [ ] La navegación por anclas desde el Navbar funciona
- [ ] Los textos coinciden exactamente con el config
- [ ] Las imágenes cargan correctamente (usar `next/image`)

## Done

- Todas las secciones construidas, navegación funcional, WhatsApp integrado
- → state.md: M2 🟢, M3 🟡
