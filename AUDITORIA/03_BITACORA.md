# Bitácora CONECTA PRO V1

## 2026-09-05 — Auditoría inicial del repositorio

### Objetivo
Revisar el repositorio `CONECTA_REPOSITORIO` sin modificar la lógica funcional, construir mapeo técnico/funcional y preparar correcciones futuras trazables.

### Decisiones
- Se conserva el frontend actual como referencia de UX.
- No se elimina funcionalidad por parecer demo, antigua o duplicada.
- La autenticación, persistencia, IA y seguridad se auditarán antes de implementar.
- Las modificaciones futuras deberán ser quirúrgicas y trazables mediante commits.

### Evidencia revisada
- `src/main.tsx`: punto de entrada React.
- `src/App.tsx`: navegación y perfiles.
- `src/index.css`: sistema visual y tokens CONECTA.
- `src/DashboardShell.tsx`: navegación por roles.
- `src/Login.tsx`: login demo.
- `src/StudentDashboard.tsx`.
- `src/TeacherDashboard.tsx`.
- `src/TeacherDashboardV2.tsx`.
- `src/DirectorDashboard.tsx`.
- `src/directorData.ts`.
- `src/PsychoDashboard.tsx`.
- `src/ParentPortal.tsx`.
- `src/KudosPanel.tsx`.
- `vite.config.ts`.
- `index.html`.
- `AGENTS.md`.

### Resultado inicial
El repositorio es actualmente un frontend React/Vite de alta fidelidad con gran cobertura de perfiles y módulos. Hay interacciones locales y datos estáticos; todavía no se ha demostrado una integración productiva con base de datos, autenticación institucional o Gemini dentro de este repo.

### Hallazgos críticos iniciales
1. Login demo/local.
2. Autorización real de backend no demostrada.
3. Persistencia local en ideas de apoderado.
4. Numerosos datos mock incrustados.
5. Información psicosocial sensible representada en UI; requiere controles antes de datos reales.
6. Fechas y contenidos heredados de distintas iteraciones.
7. Asistente directivo actualmente simulado en el código revisado.

### Próxima etapa
Auditar exhaustivamente servicios, utilidades, archivos restantes y cualquier integración escondida/no indexada; después producir matriz de funcionalidades `existente / parcial / mock / faltante / riesgo` y prompts quirúrgicos.

---

## Regla permanente de bitácora
Cada cambio importante deberá registrar:
- fecha,
- objetivo,
- archivos afectados,
- problema resuelto,
- comportamiento anterior,
- comportamiento nuevo,
- prueba realizada,
- commit asociado,
- riesgo/regresión posible.
