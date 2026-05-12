# M1 — Scaffolding

Deps: ninguna

> **Prerrequisito:** `site.config.json` ya existe en la raíz del proyecto y fue aprobado
> por el humano durante el inicio de sesión (ver ROUTER.md). M1 no lo genera — lo consume.

## Checkpoint: M1 — Scaffolding
- **Crea:** proyecto Next.js, dependencias, layout, config.ts, types.ts base
- **No toca:** site.config.json (solo lo lee)

## Checklist

### Init

- [ ] `npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] `npx shadcn@latest init`
- [ ] Instalar componentes shadcn necesarios según el config:
  - Base mínima: `button input label form card accordion sheet`
- [ ] `npm install framer-motion lenis lucide-react`
- [ ] Si `siteConfig.animations.level === 3` → `npm install gsap`

### Carpetas

- [ ] `/public/images/`
- [ ] `/src/components/layout/`
- [ ] `/src/components/sections/`
- [ ] `/src/hooks/`

### Config → Código

- [ ] Crear `src/lib/config.ts` → importar y re-exportar `site.config.json` con tipo

### Tailwind y Diseño

- [ ] Leer `siteConfig.colors` → mapear a tokens en `globals.css` (@theme)
- [ ] Leer `siteConfig.fonts` → configurar `next/font` en `layout.tsx`
- [ ] Crear `src/components/layout/SmoothScroll.tsx` (Lenis, "use client", wraps children)

### Root Layout

- [ ] `layout.tsx`: lang="es", fonts, `<SmoothScroll>`, body classes
- [ ] Metadata desde `siteConfig.seo`

### Verificar

- [ ] `npm run dev` sin errores TypeScript
- [ ] `npm run build` ok
- [ ] Tokens de color funcionan
- [ ] Fuentes cargando correctamente

## Done

- Build ok, shadcn ok, tokens ok, fonts ok, Lenis ok
- → state.md: M1 🟢, M2 🟡
