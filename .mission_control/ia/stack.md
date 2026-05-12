# Stack (LEY — no cambiar)

## Core

| Pilar | Tecnología | Versión |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Styling | Tailwind CSS (CSS-first) | v4.x |
| Deploy | Vercel | — |
| UI | shadcn/ui | latest |
| Lenguaje | TypeScript (strict) | — |
| Runtime | Node.js 20.x LTS | — |
| Package Manager | npm | — |

## Estructura de Rutas (Landing Page)

> Este proyecto es una landing page de una sola página.

```
app/
├── layout.tsx                    ← Root layout
├── page.tsx                      ← Landing Page (todas las secciones)
├── components/
│   ├── layout/                   ← Navbar, Footer, SmoothScroll
│   ├── sections/                 ← Secciones de contenido (Hero, Benefits, etc.)
│   └── ui/                       ← shadcn components
├── lib/
│   ├── config.ts                 ← Import site.config.json
│   └── utils.ts                  ← cn() y helpers
└── middleware.ts                  ← Opcional
```

## Patrones de UI (OBLIGATORIO)

### Server Components por defecto
Casi todas las secciones de la landing deben ser Server Components.

### Client Components solo para interactividad
`"use client"` solo para:
- Smooth scroll (Lenis)
- Mobile navbar (Sheet)
- Carousels / Testimonials
- Animaciones complejas (Framer Motion)
- Formularios de contacto

## Layout Base (LEY)

Todo el contenido vive dentro de un contenedor de **1200px máximo**.
Los fondos de secciones son siempre **full-width**.

```tsx
<section id={id} className="w-full bg-bg-secondary py-16 lg:py-24">
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
    {/* contenido */}
  </div>
</section>
```

## Patrones

- App Router, nunca Pages Router
- `next/image`, nunca `<img>`
- `next/font`, nunca Google Fonts CDN
- Metadata API, nunca `<head>` manual
- Tailwind utilities, nunca CSS Modules/styled-components
- Server Components default, `"use client"` solo si necesario
- `cn()` de `lib/utils.ts` para clases condicionales
- Lenis para smooth scroll
- Datos de secciones SIEMPRE desde `site.config.json`

## Libs Aprobadas

| Lib | Uso |
|-----|-----|
| shadcn/ui | Button, Accordion, Sheet, Card, Badge, Input, Textarea |
| lenis | Smooth scroll |
| framer-motion | Animaciones Nivel 2 |
| lucide-react | Íconos |
| embla-carousel-react | Carousels (via shadcn) |

## Animaciones

| Nivel | Tool | Cuándo |
|-------|------|--------|
| 1 | Tailwind transition/animate | Hovers, fades |
| 2 | Framer Motion | Scroll reveals, stagger |
| 3 | GSAP + ScrollTrigger | Parallax, pin. Requiere aprobación |

## Prohibido

jQuery, Bootstrap, Moment.js, styled-components, CSS Modules, Axios, React Router, Supabase (en esta versión landing), exponer llaves privadas en frontend.

## Naming

| Tipo | Formato | Ejemplo |
|------|---------|---------| 
| Componentes | PascalCase | Hero.tsx |
| Pages | page.tsx | app/page.tsx |
| Tipos | PascalCase | SiteConfig |
| Hooks | camelCase+use | useScroll |

## Performance

LCP <2.5s, CLS <0.1, INP <200ms, Lighthouse >90, SEO >95
