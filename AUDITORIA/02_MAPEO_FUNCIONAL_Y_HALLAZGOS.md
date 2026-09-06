# CONECTA PRO V1 — Mapeo funcional y hallazgos

## Estado de implementación observado

| Área | Estado observado | Tipo |
|---|---|---|
| Login | Interfaz completa + validación demo | Prototipo funcional |
| Navegación por perfiles | Implementada en React | UI/estado local |
| Dashboard estudiante | Amplio | Datos estáticos |
| Dashboard docente | Amplio | Datos estáticos + estado local |
| Dashboard director | Amplio | Datos estáticos + estado local |
| Psicosocial | Amplio | Datos estáticos + estado local |
| Apoderado | Amplio | Datos estáticos + localStorage |
| Kudos | Interacciones de UI | Estado local |
| Ideas | Crear/guardar localmente | localStorage |
| Asistencia | Interfaz/estado local | Sin persistencia institucional confirmada |
| Alertas | Visualización/prototipo | Sin backend confirmado |
| Reportes | UI y CSV local en director | Sin repositorio central confirmado |
| IA | Interfaz/asistente simulado | Integración Gemini no confirmada |
| SIGE/CSV | UI de carga/configuración | Backend de importación no confirmado |
| Supabase | No confirmado | Pendiente |
| MongoDB/Render | No confirmado en repo actual | Pendiente |

## Hallazgos prioritarios

### H-01 — Autenticación demo
El login compara credenciales contra perfiles de demostración definidos en frontend y usa temporizadores para simular el acceso. Esto no constituye autenticación segura de producción.

**Prioridad:** P0 antes de datos reales.

### H-02 — Autorización dependiente de frontend
`App.tsx` selecciona el dashboard según el rol obtenido del flujo de login. Debe comprobarse posteriormente que el backend también imponga permisos; ocultar un menú no es autorización.

**Prioridad:** P0.

### H-03 — Datos de demostración incrustados
Los dashboards contienen nombres, cursos, métricas, fechas, alertas y casos directamente en código. Esto es apropiado para prototipo, pero no para producción.

**Prioridad:** P1.

### H-04 — Persistencia local
Ideas de apoderado utilizan `localStorage` y un evento de ventana para comunicarse con el dashboard docente. Funciona dentro del mismo navegador/origen, pero no crea un registro institucional multiusuario.

**Prioridad:** P0 para migración a producción.

### H-05 — Datos sensibles en UI de demostración
Existen casos psicosociales, alertas, nombres de estudiantes y contenidos familiares/emocionales de ejemplo. Antes de usar datos reales se requiere modelo de privacidad, mínimo privilegio, auditoría y control de acceso.

**Prioridad:** P0.

### H-06 — Fechas históricas mezcladas
Algunos módulos muestran 2023/2024 mientras otros muestran 2026. Esto parece provenir de prototipos Stitch/Figma reutilizados. Debe existir un contexto temporal institucional único.

**Prioridad:** P1.

### H-07 — Idioma inconsistente
El módulo psicosocial contiene textos en español e inglés (`Case Management`, `In Progress`, `New Intervention`, etc.). Debe normalizarse para la versión institucional chilena.

**Prioridad:** P2.

### H-08 — TeacherDashboardV2 es alias
`TeacherDashboardV2.tsx` solamente reexporta `TeacherDashboard.tsx`. No existe una segunda implementación real en ese archivo. No eliminarlo todavía porque puede formar parte del historial/compatibilidad de imports.

**Prioridad:** P2.

### H-09 — Integración IA no demostrada en repo actual
El panel directivo incluye un “Asistente MCP”, pero el código revisado genera respuestas locales mediante estado. No debe presentarse como IA conectada mientras no exista servicio verificable.

**Prioridad:** P1.

### H-10 — Integración institucional no demostrada
`directorData.ts` declara “Importación Sige”, “Datos institucionales sincronizados” y cifras institucionales, pero el archivo es un conjunto de constantes. Esos textos no constituyen evidencia de sincronización real.

**Prioridad:** P0 para producción.

## Lo que NO debe tocarse todavía

- Diseño visual global.
- Componentes de navegación.
- Funcionalidades demostrativas que sirven para validar UX.
- `TeacherDashboardV2.tsx` hasta revisar dependencias.
- Datos mock hasta definir contratos de datos reales.
- Configuración específica de Figma Make mientras el prototipo siga dependiendo de ella.

## Estrategia recomendada

1. Congelar este frontend como referencia UX.
2. Definir contratos de datos y roles.
3. Definir autenticación/autorización.
4. Elegir persistencia final (Apps Script/Sheets para MVP controlado o Supabase para plataforma multiusuario; la decisión debe hacerse por alcance y seguridad).
5. Crear capa de servicios desacoplada de componentes.
6. Integrar IA mediante backend/proxy seguro.
7. Migrar cada módulo uno por uno.
8. Pruebas de permisos y privacidad.
9. Recién después retirar mocks.
