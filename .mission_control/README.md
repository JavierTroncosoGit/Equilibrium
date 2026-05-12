# 🗂️ Mission Control v3.0 — Landing Page Edition

> Sistema para crear landing pages de alto impacto con Next.js 15 y Tailwind v4.
> Optimizado para conversión, velocidad y SEO.

---

## Cómo Funciona

```text
TÚ (5 min)                         IA (automático)

1. Marca un preset de industria      1. Valida que hay info suficiente
2. Describe el proyecto              2. Genera brief, design, copy
3. Marca qué secciones quieres       3. Propone plan en site.config.json
4. Copia el prompt                   4. Tú apruebas el plan
5. Pega en tu IA                     5. Ejecuta misiones → código
```

## Estructura

```text
/.mission_control
├── 🧠 ROUTER.md              ← La IA lee esto primero
│
├── 👤 /usuario                ← TU CARPETA (solo tú tocas aquí)
│   ├── MANUAL.md              ← 📖 Manual completo del sistema
│   ├── CONTEXTO.md            ← Describe el proyecto
│   ├── REVISIONES.md          ← Anota correcciones
│   ├── PROMPT.md              ← Prompts listos para copiar
│   └── /assets                ← Logos, fotos, videos del proyecto
│
├── 🤖 /ia                     ← Generado por la IA (no toques)
│   ├── stack.md               ← Next.js + Tailwind v4 + shadcn
│   ├── config-schema.md       ← Spec para site.config.json (sections[])
│   ├── design.md              ← Colores, fuentes, tokens
│   └── responsive-mandamientos.md ← Reglas responsive
│
└── 📋 /missions               ← Tareas paso a paso
    ├── m1_scaffolding         → Setup Next.js + Layout base
    ├── m2_landing             → Construcción de todas las secciones
    ├── m3_responsive          → Auditoría mobile-first
    └── m4_optimization        → SEO, performance, deploy
```

## Stack

| Pilar | Tecnología |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui |
| Animations | Framer Motion + Lenis |
| Deploy | Vercel |

---

Mission Control Template v3.0 — DARW Agency 2026
