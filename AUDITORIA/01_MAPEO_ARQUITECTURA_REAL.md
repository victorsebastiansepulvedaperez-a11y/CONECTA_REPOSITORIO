# CONECTA PRO V1 — Mapeo de arquitectura real

**Fecha:** 2026-09-05  
**Rama:** main  
**Objetivo:** diagnóstico, sin reemplazar la arquitectura existente durante esta fase.

## 1. Entrada de aplicación

`index.html` monta `src/main.tsx`; `main.tsx` importa `index.css` y monta `<App />` dentro de `#root`. La aplicación se ejecuta como SPA React. 

## 2. Capa frontend

Stack confirmado:
- React 19
- React DOM 19
- TypeScript 5.7
- Vite 8
- Tailwind CSS 4
- plugins/configuración de Figma Make

`vite.config.ts` conserva integración específica de Figma Make y servidor Vite sobre `$PORT`.

## 3. Router/estado actual

No se observa un router dedicado en los archivos revisados. `App.tsx` mantiene un estado de vista y selecciona componentes según perfil/vista.

Perfiles detectados en App:
- docente
- estudiante
- director
- psi
- apoderado

Vistas detectadas:
- login
- dashboard/docente
- estudiante
- director
- psicosocial
- apoderado

## 4. Shell de navegación

`DashboardShell.tsx` centraliza menú, metadatos visuales y navegación por perfil.

Menús:
- Docente: Dashboard, Asistencia, Kudos, Chat Estrella, Caja de Ideas.
- Estudiante: Dashboard, Medallas, Kudos, Ideas, Chat Estrella.
- Director: Dashboard, Carga de Datos, Carga manual, Configuración, Auditoría, alertas por curso, Reportes, Asistente MCP.
- Psicosocial: Casos, Seguimiento, Intervenciones, Riesgos, Documentos, Alertas Críticas, Perfil.
- Apoderado: Resumen, Mi hijo, Asistencia, Calificaciones, Pagos, Mensajes, Caja de Ideas, Perfil.

## 5. Componentes funcionales revisados

- `Login.tsx`: interfaz y validación de credenciales de demostración.
- `StudentDashboard.tsx`: resumen emocional, puntos, medallas, Kudos, ideas y botiquín de calma.
- `TeacherDashboard.tsx`: métricas, clima emocional, asistencia, recomendaciones, recetario, Kudos e ideas.
- `DirectorDashboard.tsx`: indicadores institucionales, carga de datos, configuración, auditoría, alertas, reportes y asistente.
- `PsychoDashboard.tsx`: intervenciones, casos, alertas críticas, protocolos y matriz de riesgo.
- `ParentPortal.tsx`: resumen del estudiante, notificaciones, actividades, Kudos, clima y caja de ideas.
- `KudosPanel.tsx`: composición, autorización y visualización de reconocimientos.

## 6. Persistencia REAL detectada

Se confirmó uso de `localStorage` en:
- `TeacherDashboard.tsx`, para propuestas de apoderados.
- `ParentPortal.tsx`, para crear y guardar propuestas.

La comunicación entre ambos usa un evento de ventana: `conecta-parent-idea-created`.

Esto demuestra persistencia local del navegador, no persistencia institucional multiusuario.

## 7. Datos estáticos/mock

Se encontraron numerosos arrays y objetos constantes con nombres, alumnos, cursos, métricas, fechas, alertas, puntos y resultados. `directorData.ts` contiene explícitamente datos institucionales estáticos, incluyendo 12 cursos, 28 profesores, 316 alumnos, 4 psicosociales y 290 apoderados como resumen declarado.

## 8. Backend / BD / IA

En las búsquedas realizadas sobre el repositorio actual no aparecieron referencias indexadas a `fetch(`, `localStorage` por búsqueda global, `gemini`, `supabase`, ni `http`. Sin embargo, sí se confirmó `localStorage` mediante lectura directa de componentes. Por lo tanto, las búsquedas globales del conector no deben tomarse como prueba de ausencia.

No se ha encontrado todavía evidencia suficiente, dentro de los archivos revisados, para afirmar que el repositorio actual tenga una conexión funcional a Supabase, MongoDB, Render o Gemini.

## 9. Conclusión de arquitectura

El estado actual debe considerarse **frontend/prototipo funcional de alta fidelidad**, con interacciones locales y datos de demostración. La arquitectura histórica de CONECTA (Apps Script + backend + MongoDB + Gemini) no debe asumirse como parte activa de este repositorio hasta encontrar sus conectores/código.

## 10. Riesgo arquitectónico principal

Hay una brecha entre la riqueza visual/funcional del prototipo y la persistencia/autorización real necesaria para producción escolar. La próxima fase debe separar claramente:

`UI/UX → servicios → autenticación → autorización → persistencia → IA → auditoría`.

No conviene conectar una BD directamente desde cada dashboard ni exponer secretos de IA en el navegador.
