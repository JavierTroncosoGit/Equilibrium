# 🚀 SETUP — Inicio Rápido (Landing Edition)

## Opción A — Script automático (recomendado)

```powershell
.\scripts\bootstrap.ps1 "NombreDelProyecto"
```

El script crea la carpeta, copia los archivos y te abre CONTEXTO.md.

## Opción B — Manual

### 1. Preparar el proyecto
- [ ] Crear carpeta nueva para el proyecto
- [ ] Copiar la carpeta `template/.mission_control/` dentro del proyecto
- [ ] Copiar `AGENTS.md` a la raíz del proyecto

### 2. Describir tu proyecto
- [ ] Abrir `.mission_control/usuario/CONTEXTO.md`
- [ ] Marcar un preset en §0
- [ ] Llenar las secciones §1 y §2
- [ ] Meter logos/fotos en `.mission_control/usuario/assets/`

### 3. Arrancar con la IA
- [ ] Abrir `.mission_control/usuario/PROMPT.md`
- [ ] Copiar el prompt **"🟢 Iniciar Proyecto Nuevo"**
- [ ] Pegarlo en tu IA
- [ ] Revisar y aprobar el plan que proponga la IA

---

## Estructura final esperada

```
mi-proyecto/
├── .mission_control/             ← Sistema de la IA
├── AGENTS.md                     ← Instrucciones para la IA
├── site.config.json              ← Generado por la IA (formato sections[])
├── src/                          ← Código generado por la IA
└── public/                       ← Imágenes estáticas
```
