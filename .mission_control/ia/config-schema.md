# Config Schema — Spec Generativa v3 (Landing Page)

> **Este es el archivo canónico** para la estructura de `site.config.json`.
> Define la **parte estática** y el contenido de la landing page.
> Para ver un ejemplo completo con datos ficticios, ver `usuario/SITE_CONFIG_TEMPLATE.json`.

## Concepto central

`site.config.json` usa un array de `sections[]` en la raíz para definir el orden y contenido de la landing.

---

## Estructura base del JSON

```json
{
  "_meta": {
    "version": "3.0.0",
    "project": "...",
    "type": "landing"
  },
  "brand": {
    "name": "...",
    "logo": { "src": "...", "alt": "...", "width": 130, "height": 44 },
    "favicon": "/favicon.ico"
  },
  "colors": {
    "_guide": {
      "primary": "Color de marca — botones CTA, links activos",
      "primaryDark": "Hover de botones (se calcula automático si no se define)",
      "accent": "Badges, detalles decorativos",
      "bgPrimary": "Fondo principal de la página",
      "bgSecondary": "Fondo alternado para ritmo visual",
      "textPrimary": "Títulos, párrafos principales",
      "textSecondary": "Subtítulos, labels, descripciones"
    },
    "primary": "#...",
    "primaryDark": "#...",
    "accent": "#...",
    "bgPrimary": "#...",
    "bgSecondary": "#...",
    "textPrimary": "#...",
    "textSecondary": "#..."
  },
  "fonts": {
    "heading": "...",
    "body": "..."
  },
  "seo": {
    "title": "...",
    "title_max": "60 caracteres",
    "description": "...",
    "description_max": "155 caracteres",
    "ogTitle": "...",
    "ogDescription": "...",
    "ogImage": "/images/og-image.jpg",
    "canonicalUrl": "...",
    "locale": "es"
  },
  "contact": {
    "whatsapp": {
      "number": "...",
      "message": "...",
      "label": "..."
    },
    "email": "..."
  },
  "analytics": {
    "_guide": "Incluir solo si tienes los IDs. Omitir este bloque si no hay analytics.",
    "googleAnalyticsId": "G-XXXXXXXXXX",
    "facebookPixelId": "1234567890"
  },
  "animations": { "level": 1|2|3 },
  "sections": [
    { "id": "navbar", "type": "navbar", ... },
    { "id": "hero", "type": "hero", ... },
    ...
    { "id": "footer", "type": "footer", ... }
  ]
}
```

> **Patrón `_note` / `_guide`:** Cada sección y bloque puede incluir campos `_note` o `_guide`
> con explicaciones para el humano. La IA los ignora al construir componentes.

---

## Tipos de Sección Soportados

### `navbar`
```json
{
  "id": "navbar",
  "type": "navbar",
  "links": [ { "text": "...", "href": "#id" } ],
  "cta": { "text": "...", "href": "..." }
}
```

### `hero`
```json
{
  "id": "hero",
  "type": "hero",
  "badge": "...",
  "headline": "...",
  "subheadline": "...",
  "ctas": [ { "text": "...", "href": "...", "variant": "primary|secondary" } ],
  "media": { "type": "image|video|none", "src": "...", "alt": "..." }
}
```

### `stats`
```json
{
  "id": "stats",
  "type": "stats",
  "items": [ { "value": "...", "label": "...", "icon": "..." } ]
}
```

### `benefits-grid`
```json
{
  "id": "benefits",
  "type": "benefits-grid",
  "sectionLabel": "...",
  "headline": "...",
  "columns": 3,
  "items": [ { "icon": "...", "title": "...", "body": "..." } ]
}
```

### `steps`
```json
{
  "id": "proceso",
  "type": "steps",
  "sectionLabel": "...",
  "headline": "...",
  "style": "numbered|timeline|horizontal",
  "steps": [ { "number": "01", "title": "...", "body": "..." } ]
}
```

### `testimonials`
```json
{
  "id": "testimonios",
  "type": "testimonials",
  "sectionLabel": "...",
  "headline": "...",
  "style": "carousel|grid|masonry",
  "items": [ { "quote": "...", "author": "...", "role": "...", "avatar": "...", "rating": 5 } ]
}
```

### `before-after`
```json
{
  "id": "antes-despues",
  "type": "before-after",
  "sectionLabel": "...",
  "headline": "...",
  "subheadline": "...",
  "cases": [
    {
      "treatment": "...",
      "before": { "src": "...", "alt": "..." },
      "after": { "src": "...", "alt": "..." }
    }
  ]
}
```

### `faq`
```json
{
  "id": "faq",
  "type": "faq",
  "sectionLabel": "...",
  "headline": "...",
  "schema": true,
  "items": [ { "question": "...", "answer": "..." } ]
}
```
> `schema: true` genera JSON-LD FAQPage para SEO.

### `contact-form`
```json
{
  "id": "contacto",
  "type": "contact-form",
  "sectionLabel": "...",
  "headline": "...",
  "subheadline": "...",
  "destinationEmail": "...",
  "fields": [
    { "id": "nombre", "type": "text", "label": "Tu nombre", "required": true },
    { "id": "email", "type": "email", "label": "Email", "required": true },
    { "id": "telefono", "type": "tel", "label": "Teléfono", "required": true },
    { "id": "servicio", "type": "select", "label": "¿Qué te interesa?", "required": false,
      "options": ["Opción A", "Opción B", "No sé"] },
    { "id": "mensaje", "type": "textarea", "label": "Mensaje", "required": false }
  ],
  "submitLabel": "Enviar",
  "successMessage": "¡Listo! Te contactaremos pronto.",
  "errorMessage": "Hubo un problema. Intenta por WhatsApp.",
  "successAction": "message"
}
```
> `fields[].type`: `text`, `email`, `tel`, `select`, `textarea`, `checkbox`, `date`.
> `successAction`: `message` (mostrar texto) o `redirect` (ir a otra URL).

### `cta-banner`
```json
{
  "id": "cta",
  "type": "cta-banner",
  "headline": "...",
  "subheadline": "...",
  "cta": { "text": "...", "href": "..." }
}
```

### `footer`
```json
{
  "id": "footer",
  "type": "footer",
  "tagline": "...",
  "links": [ { "text": "Política de Privacidad", "href": "/privacidad" } ],
  "social": { "instagram": "...", "facebook": "...", "twitter": "..." }
}
```
> `links[]` es opcional — para links legales o de navegación extra.

---

## Tipos Custom

La IA puede crear tipos de sección nuevos si el proyecto lo requiere (ej: `before-after`, `pricing`, `gallery`). La convención es:
- `id` único en kebab-case
- `type` descriptivo
- Documentar con `_note` la intención

---

## Referencia de Íconos Lucide

| Concepto | Icon |
|----------|------|
| Usuarios / Clientes | `users` |
| Tiempo | `clock` |
| Satisfacción | `star` |
| Salud | `heart-pulse` |
| Seguridad | `shield` |
| Velocidad | `zap` |
| Logro | `trophy` |
| Verificado | `check-circle` |
| Ubicación | `map-pin` |
| Teléfono | `phone` |
| Email | `mail` |

---

## Reglas

- Cada `id` debe coincidir con el `href` de los links del navbar (ej: `#id`).
- Cada `id` es único, en kebab-case.
- Nunca dejar campos con valor vacío `""` o `null` — si no hay dato, omitir el campo.
- Los iconos deben ser nombres válidos de Lucide React.
- Los `_note` y `_guide` son para documentación — la IA los ignora al construir.
