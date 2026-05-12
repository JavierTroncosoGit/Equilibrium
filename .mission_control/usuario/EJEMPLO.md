# 📝 EJEMPLO — Caso: Clínica Dental "DentPlus"

> **Esto es un ejemplo para que veas cómo llenar CONTEXTO.md.**

---

## 0. Preset Rápido
- [x] 🏥 Clínica / Salud

---

## 1. Sobre el Cliente
> Clínica dental de alta calidad en Providencia, Santiago. Se enfocan en ortodoncia invisible e implantes. Tono profesional pero amable. Quieren transmitir confianza y tecnología.

---

## 2. Objetivo y Conversión
**Acción #1**: Agendar una primera consulta gratis por formulario o WhatsApp.
**Diferenciador**: Tecnología digital de punta y diagnóstico 100% gratuito.
**Oferta/Gancho**: Primera consulta y radiografía digital sin costo.

---

## 3. Estructura de la Landing
- [x] Hero con imagen/video
- [x] Barra de números/stats
- [x] Beneficios o servicios (grid)
- [x] Proceso paso a paso (cómo funciona)
- [x] Testimonios de clientes
- [x] Preguntas Frecuentes (FAQ)
- [x] Formulario de contacto
- [x] Banner CTA final

---

## 4. Diseño
**Estilo**: Premium, limpio, mucha luz. Colores azul cielo y blanco.

---

## 5. Contenido y Notas
> Slogan: "Una sonrisa que te cambia la vida."
>
> Stats: 8.000+ pacientes, 15 años de experiencia, 98% satisfacción.
>
> FAQ:
> 1. ¿La primera consulta es gratis? Sí, incluye diagnóstico.
> 2. ¿Tienen cuotas? Hasta 12 cuotas sin interés.
>
> Nota: Priorizar mobile, mucha gente llega desde anuncios en Instagram.

---

## 📤 Resultado: site.config.json (Formato v3 Landing)

```json
{
  "_meta": { "version": "3.0.0", "project": "DentPlus", "type": "landing" },
  "brand": { "name": "DentPlus", "logo": { "src": "/images/logo.svg", "alt": "DentPlus" } },
  "sections": [
    { "id": "navbar", "type": "navbar", "links": [ { "text": "Tratamientos", "href": "#tratamientos" } ], "cta": { "text": "Agenda Gratis", "href": "#agendar" } },
    { "id": "hero", "type": "hero", "headline": "Una sonrisa que te cambia la vida", "subheadline": "Primera consulta gratis en Providencia.", "media": { "type": "image", "src": "/images/hero.jpg" } },
    { "id": "numeros", "type": "stats", "items": [ { "value": "8.000+", "label": "Pacientes" } ] },
    { "id": "tratamientos", "type": "benefits-grid", "headline": "Nuestros Tratamientos", "items": [ { "title": "Ortodoncia", "body": "Invisible y rápida." } ] },
    { "id": "agendar", "type": "contact-form", "headline": "Agenda tu hora", "fields": [ { "id": "nombre", "type": "text", "label": "Nombre" } ] },
    { "id": "footer", "type": "footer", "tagline": "Tu sonrisa, nuestra especialidad." }
  ]
}
```
