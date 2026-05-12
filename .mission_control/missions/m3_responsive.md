# M3 — Responsive

Deps: M1, M2

## Checkpoint: M3 — Responsive
- **Lee:** `ia/responsive-mandamientos.md` (LOS 10 MANDAMIENTOS)
- **Audita:** todos los componentes en `src/components/`
- **Modifica:** correcciones de layout, tamaños de fuente, touch targets
- **No crea:** componentes nuevos

## Checklist

### Auditoría por Secciones
- [ ] **Navbar**: Hamburguesa funcional, Sheet con links grandes, área táctil >= 44px
- [ ] **Hero**: Título legible en 375px (usar `clamp()`), imagen no se corta
- [ ] **Grids (Benefits/Stats)**: Colapsar a 1 columna en mobile
- [ ] **Testimonials**: Carousel usable con scroll táctil
- [ ] **Footer**: Padding adecuado, sin overflow horizontal

### Los 10 Mandamientos
- [ ] **I. Mobile-First**: ¿Clase base = mobile?
- [ ] **II. Sin Scroll Horizontal**: Verificar en 375px
- [ ] **III. Touch Targets**: Botones >= 44x44px
- [ ] **IV. iOS Zoom**: Inputs >= 16px (si hay formularios)
- [ ] **V. Imágenes**: `next/image` con `sizes` correcto
- [ ] **VI. Tipografía Fluida**: Usar `clamp()` para H1/H2
- [ ] **VII. Grids**: Colapso a 1col
- [ ] **VIII. Navbar Mobile**: Sheet usables
- [ ] **IX. Espaciado**: `py-12 lg:py-20`
- [ ] **X. Viewports**: Verificar 375px y 768px

## Done

- Auditoría completada, 10 mandamientos cumplidos, perfecto en mobile
- → state.md: M3 🟢, M4 🟡
