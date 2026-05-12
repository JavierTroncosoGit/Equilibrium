# 🚀 PROMPTS — Copia y Pega

> **Copia el prompt que necesites y pégalo en tu IA.**

---

## 🟢 Iniciar Proyecto Nuevo

*Usa después de completar CONTEXTO.md.*

```
Lee el archivo .mission_control/ROUTER.md para entender el sistema.
Luego lee .mission_control/usuario/CONTEXTO.md con la información del cliente.
Sigue el flujo del ROUTER.md:
1. Genera /ia/brief.md, /ia/design.md y /ia/copy.md
2. Genera site.config.json con formato sections[] (v3 landing)
3. Muéstrame el plan propuesto (orden de secciones, colores, fuentes) para que lo apruebe
NO empieces a generar código hasta que yo apruebe el plan.
```

---

## 🔵 Continuar Sesión

```
Lee .mission_control/ROUTER.md y luego .mission_control/ia/state.md
para saber dónde quedamos. Identifica la misión activa y continúa
desde donde se quedó la última sesión.
```

---

## 🟡 Pedir Cambios

```
Lee .mission_control/usuario/REVISIONES.md donde anoté los cambios que quiero.
Aplica las correcciones en el código y actualiza state.md cuando termines.
```

---

## ⚡ Prototipo Rápido

*Para ver el Hero y Navbar funcionando rápido.*

```
Lee .mission_control/ROUTER.md y opera en MODO FULL pero prioriza
solo M1 y la primera sección de M2 (Hero + Navbar).
Necesito ver algo visual rápido antes de seguir con el resto de secciones.
```

---

## 🔧 Hotfix

*Cambio puntual.*

```
Lee .mission_control/ROUTER.md y opera en MODO HOTFIX.
Necesito que hagas este cambio puntual: [DESCRIBE TU CAMBIO AQUÍ]
```

---

## ➕ Agregar Sección

```
Lee .mission_control/ROUTER.md y opera en MODO AGREGAR_SECCIÓN.
Necesito agregar una sección de [TIPO] en la landing.
Primero actualiza site.config.json. Muéstramela para que la apruebe.
Luego crea el componente React siguiendo el design system.
```

---

## 📄 Actualizar desde Config

```
Lee .mission_control/ROUTER.md y opera en MODO ACTUALIZAR_CONFIG.
Revisar site.config.json y detectar qué cambió.
Actualizar solo los componentes afectados por esos cambios.
```

---

## 🔍 Auto-Revisión

```
Revisa el código y el site.config.json y hazme una autocrítica honesta:
1. ¿El headline es potente?
2. ¿Hay CTAs claros?
3. ¿Cómo se ve en mobile (375px)?
4. ¿La jerarquía visual es clara?
```

---

## 🔄 Sincronizar Sistema

```
Confirma:
1. ¿Qué misión estás ejecutando?
2. ¿Estado en state.md?
3. ¿Archivos modificados?
Responde en 3 líneas.
```
