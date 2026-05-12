<!-- IA: NO LEER — Este documento es exclusivamente para el usuario humano. -->

# 📖 MANUAL DEL USUARIO — Mission Control v3 (Landing Page Edition)

> **Todo lo que necesitas saber para crear una landing page con este sistema.**
> No necesitas saber programar. Solo seguir estos pasos.

---

## ¿Qué es Mission Control?

Es un sistema que te permite crear landing pages profesionales trabajando con una IA (Gemini, Claude, ChatGPT, etc). Tú pones la información del cliente y el material gráfico. La IA se encarga de todo lo técnico: código, diseño, SEO, deploy.

```
TÚ                                    LA IA
───                                    ─────
Describes al cliente                → Genera la estructura técnica
Marcas qué secciones quieres        → Propone diseño y textos
Metes fotos, logos, videos           → Los integra al código
Apruebas o pides cambios             → Los aplica
                                     → Despliega la web
```

---

## Tu carpeta: `/usuario`

**Solo tocas lo que está dentro de esta carpeta.** Todo lo demás es de la IA.

```
/usuario
├── CONTEXTO.md      ← Aquí describes todo sobre el cliente
├── REVISIONES.md    ← Aquí anotas cambios después de ver el resultado
├── PROMPT.md        ← Prompts listos para copiar y pegar en la IA
├── EJEMPLO.md       ← Un ejemplo inventado para que veas cómo se llena
├── MANUAL.md        ← Este archivo que estás leyendo
└── /assets          ← Aquí metes fotos, logos, videos, PDFs
```

---

## Paso a Paso: Tu Primer Proyecto

### Paso 1 — Iniciar el proyecto

**Opción rápida (script):**
```powershell
.\scripts\bootstrap.ps1 "NombreDelProyecto"
```

**Opción manual:**
1. Crea una carpeta nueva para el proyecto
2. Copia `.mission_control/` y `AGENTS.md` dentro

### Paso 2 — Revisar el ejemplo (opcional)

Abre `EJEMPLO.md` para ver un caso completo inventado (una clínica dental llamada "DentPlus"). Te servirá para entender qué tipo de cosas escribir. **No es un cliente real — es solo de referencia.**

### Paso 3 — Llenar CONTEXTO.md

Este es el archivo más importante. Tiene 5 secciones:

| Sección | Qué poner | ¿Obligatorio? |
|---------|-----------|---------------|
| **0. Preset** | Marca la industria → la IA preconfigura colores y estilo | ⚡ Recomendado |
| **1. Sobre el Cliente** | Quién es, a qué se dedica, su público, su tono | ✅ Sí |
| **2. Objetivo y Conversión** | La acción #1, el diferenciador, la oferta | ✅ Sí |
| **3. Estructura de la Landing** | Qué secciones necesita (Hero, Testimonios, FAQ, etc.) | ✅ Sí |
| **4. Diseño** | Colores, fuentes, estilo | ⚡ Opcional (preset cubre) |
| **5. Contenido y Notas** | Textos, testimonios, FAQs, instrucciones | ⚡ Opcional |

**Tips para llenar:**

- Escribe natural, como si le explicaras a un compañero
- Si marcas un preset en §0, puedes saltar §4 por completo
- Mientras más escribas en §1 y §5, mejor resultado
- Los campos `[Tu respuesta aquí]` → borra eso y escribe encima

### Paso 4 — Meter material gráfico en /assets

Mete todo lo que tengas en `usuario/assets/`:

| Nombre | La IA entiende |
|--------|---------------|
| `hero--foto-local.jpg` | Imagen para el hero |
| `logo.svg` | Logo del cliente |
| `galeria--01.jpg` | Foto para la galería |
| `favicon.png` | Favicon del sitio |

### Paso 5 — Copiar un prompt y arrancar

Abre `PROMPT.md` y copia el prompt que necesites:

| Prompt | Cuándo usarlo |
|--------|--------------|
| 🟢 **Iniciar Proyecto Nuevo** | Ya llenaste CONTEXTO.md |
| 🔵 **Continuar Sesión** | Regresas otro día o cambias de IA |
| 🟡 **Pedir Cambios** | Anotaste correcciones en REVISIONES.md |
| ⚡ **Prototipo Rápido** | Solo quieres ver el Hero rápido |
| 🔧 **Hotfix** | Un cambio puntual |
| ➕ **Agregar Sección** | El cliente pidió algo nuevo en la landing |
| 📄 **Actualizar desde Config** | Editaste site.config.json |
| 🔍 **Auto-Revisión** | Que la IA critique el resultado |
| 🔄 **Sincronizar** | Cada 3-4 mensajes para no perder hilo |

---

## Después del primer resultado: Revisiones

1. **Revísalo** en el navegador
2. **Anota** lo que quieras cambiar en `REVISIONES.md`
3. **Copia** el prompt "Pedir Cambios" de `PROMPT.md`
4. **Pégalo** en la IA

---

## Iteración rápida: site.config.json

Cuando la IA termina de construir el sitio, genera `site.config.json` en la raíz del proyecto. **Este archivo es tu panel de control para cambios rápidos.**

**¿Qué puedes editar?** Textos, FAQs, testimonios, links, colores, agregar items a arrays.

**¿Qué NO editar?** La estructura (`{` por `[`), campos `"type"`, campos que no entiendas.

**Cómo aplicar:** Edita → guarda → usa el prompt "Actualizar desde Config".

> **Nota:** El config usa formato `sections[]` — una lista plana de secciones de la landing page.

---

## Las 4 Misiones (+1 Opcional)

| # | Misión | Qué hace |
|---|--------|----------|
| M1 | **Scaffolding** | Crea el proyecto, instala dependencias, configura layout |
| M2 | **Landing Page** | Construye todas las secciones (Hero, Benefits, FAQ, etc.) |
| M3 | **Responsive** | Audita que todo se vea perfecto en celular y tablet |
| M4 | **Deploy** | SEO, performance, y subida a producción |
| M5 | **Formularios** *(opcional)* | Integra envío de emails si hay formulario de contacto |

---

## Consejo: sesiones cortas

**Lo óptimo es 1 misión por sesión.** Cuando termine M1, cierra y re-abre con "Continuar Sesión". Usa "Sincronizar Sistema" cada 3-4 mensajes.

Señales de que la IA se perdió: genera código sin avisarte, no actualiza state.md, inventa cosas → usa "Reencuadrar IA".

---

## Stack tecnológico

- **Next.js 15** (App Router) — Framework
- **Tailwind CSS v4** — Estilos
- **shadcn/ui** — Componentes
- **Framer Motion** — Animaciones
- **Vercel** — Hosting
- **TypeScript** — Lenguaje

---

## Preguntas Frecuentes

**¿Funciona con cualquier IA?** Sí. Gemini, Claude, ChatGPT.

**¿Necesito saber programar?** No. Solo llenar CONTEXTO.md.

**¿Qué pasa si no tengo los colores?** Marca un preset o deja §4 vacío.

**¿Puedo agregar secciones después?** Sí. Usa el prompt "Agregar Sección".

**¿Puedo reusar esto?** Sí. Copia `.mission_control/` a un proyecto nuevo.

---

DARW Agency — 2026
