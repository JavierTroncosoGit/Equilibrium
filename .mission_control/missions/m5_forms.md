# M5 — Formularios + Integraciones (OPCIONAL)

Deps: M2

## Checkpoint: M5 — Formularios
- **Crea:** Server Actions para envío de email (Resend/EmailJS) o integración con Google Sheets
- **Modifica:** `src/components/sections/ContactForm.tsx` para manejar el estado de envío

## Checklist

### Formulario (Client Component)
- [ ] `react-hook-form` + `zod` para validación
- [ ] Manejo de estados: Cargando, Éxito, Error
- [ ] Feedback visual al usuario (Toast o mensaje en pantalla)

### Envío de Datos
- [ ] Configurar API key de Resend (o similar) en `.env.local`
- [ ] Crear Server Action en `src/lib/actions/forms.ts`
- [ ] Formatear el email que recibe el cliente

### Verificar
- [ ] El formulario valida campos requeridos
- [ ] El email llega correctamente con todos los datos
- [ ] No hay fugas de API keys en el frontend

## Done

- Formulario de contacto funcional e integrado con email
- → state.md: M5 🟢, Estado Final: 🟢 Completado
