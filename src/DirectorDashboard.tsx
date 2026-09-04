import { useState } from "react";
import { DashboardShell } from "./DashboardShell";
import { directorInstitutionData } from "./directorData";

const uploadCards = [
  {
    title: "Alumnos y matrícula",
    subtitle: "Carga desde archivo SIGE o CSV institucional",
    source: "Origen: mineduc / SIGE",
    badge: "347 registros",
    status: "Validado",
    tone: "violet",
  },
  {
    title: "Docentes y asignaturas",
    subtitle: "Profesores, cursos y horas lectivas por jornada",
    source: "Origen: coordinación académica",
    badge: "28 asistentes",
    status: "Pendiente",
    tone: "sky",
  },
  {
    title: "Apoderados",
    subtitle: "Contactos, relación con alumnos y comunicaciones",
    source: "Origen: apoderado / matrícula",
    badge: "290 registros",
    status: "Validado",
    tone: "emerald",
  },
  {
    title: "Dupla psicosocial",
    subtitle: "Casos, seguimiento y alertas por curso",
    source: "Origen: bienestar escolar",
    badge: "12 casos",
    status: "Revisión",
    tone: "rose",
  },
];

const manualCollections = [
  {
    title: "Alumnos",
    fields: ["RUT", "Nombre completo", "Curso", "Apoderado", "Estado"],
    accent: "violet",
  },
  {
    title: "Profesores",
    fields: ["Nombre", "Asignatura", "Curso", "Jornada", "Correo"],
    accent: "sky",
  },
  {
    title: "Asignaturas",
    fields: ["Código", "Nombre", "Nivel", "Profesor", "Tipo"],
    accent: "emerald",
  },
  {
    title: "Apoderados",
    fields: ["Nombre", "Relación", "Alumno", "Teléfono", "Correo"],
    accent: "amber",
  },
  {
    title: "Dupla psicosocial",
    fields: ["Nombre", "Rol", "Curso", "Casos", "Seguimiento"],
    accent: "rose",
  },
  {
    title: "Cursos",
    fields: ["Curso", "Nivel", "Profesor jefe", "Sala", "N° alumnos"],
    accent: "indigo",
  },
];

const configurationCards = [
  {
    title: "Roles y permisos",
    body: "Director, docente, alumno, apoderado y psicosocial con accesos diferenciados.",
    value: "5 perfiles",
  },
  {
    title: "Sincronización SIGE",
    body: "Validación automática del archivo, consistencia de cursos y rut escolar.",
    value: "Activo",
  },
  {
    title: "Plantillas CSV",
    body: "Versiones descargables por entidad: alumnos, docentes, apoderados y alertas.",
    value: "8 plantillas",
  },
  {
    title: "Notificaciones",
    body: "Alertas por riesgo, cambios de matrícula y cierre de procesos institucionales.",
    value: "Configurado",
  },
];

const auditEntries = [
  { id: "AUD-1104", user: "Directora", entity: "Cursos", action: "Asignación masiva", date: "02 sep 2026", status: "Ok" },
  { id: "AUD-1103", user: "Coordinación", entity: "Profesores", action: "Sincronización CSV", date: "01 sep 2026", status: "Ok" },
  { id: "AUD-1102", user: "Sistema", entity: "Alumnos", action: "Validación de RUT", date: "31 ago 2026", status: "Revisado" },
  { id: "AUD-1101", user: "Bienestar", entity: "Dupla psicosocial", action: "Caso de riesgo", date: "30 ago 2026", status: "Atendido" },
];

const courseAlerts = [
  {
    course: "7° A",
    level: "7° Básico",
    teacher: "María Elena Ortiz",
    risk: "Medio",
    students: 34,
    openCases: 4,
    source: "Importación SIGE",
  },
  {
    course: "8° B",
    level: "8° Básico",
    teacher: "César Muñoz",
    risk: "Bajo",
    students: 31,
    openCases: 2,
    source: "Importación SIGE",
  },
  {
    course: "1° Medio A",
    level: "1° Medio",
    teacher: "Patricia Salazar",
    risk: "Medio",
    students: 28,
    openCases: 5,
    source: "Carga manual",
  },
  {
    course: "4° Medio B",
    level: "4° Medio",
    teacher: "Ramón Iglesias",
    risk: "Alto",
    students: 30,
    openCases: 8,
    source: "Asignación directiva",
  },
];

const reportTemplates = [
  { title: "Reporte mensual académico", owner: "Coordinación académica", updated: "2 días atrás" },
  { title: "Reporte de bienestar emocional", owner: "Dupla psicosocial", updated: "Hoy" },
  { title: "Reporte de apoderados y asistencia", owner: "Secretaría", updated: "Ayer" },
  { title: "Reporte de riesgo institucional", owner: "Dirección", updated: "Hace 6 horas" },
];

const climateSummary = [
  { label: "Felices", value: "60%", tone: "text-emerald-200" },
  { label: "Neutrales", value: "20%", tone: "text-slate-200" },
  { label: "Estresados", value: "12%", tone: "text-amber-200" },
];

const criticalIndicators = [
  { title: "Critical alerts", value: "12", detail: "8 casos sin asignar", tone: "rose" },
  { title: "Kudos activity", value: "92.4", detail: "Estable", tone: "emerald" },
  { title: "Alerta de bullying", value: "8", detail: "Casos activos esta semana", tone: "amber" },
  { title: "Casos críticos", value: "15.4%", detail: "Faltan por atender", tone: "rose" },
];

const emotionalRisk = [
  { label: "1° Básico", value: "12.4%", tone: "text-emerald-200" },
  { label: "4° Medio", value: "25.9%", tone: "text-rose-200" },
  { label: "8° Básico", value: "11.8%", tone: "text-slate-200" },
  { label: "Inst. Avg", value: "15.7%", tone: "text-violet-200" },
];

const priorityStudents = [
  { name: "Alonso Martínez", detail: "ID: 942 · 4° Medio", level: "CRITICAL", tone: "text-rose-200" },
  { name: "Sofía Paredes", detail: "ID: 881 · 2° Medio", level: "RISK", tone: "text-amber-200" },
];

const reportRows = [
  { date: "Oct 24, 2024", author: "M. Valenzuela", category: "CLÍNICO" },
  { date: "Oct 23, 2024", author: "P. Herrera", category: "EMOCIONAL" },
];

const reportManagementRows = [
  { date: "24/05/2024", title: "Auditoría Asistencia Semanal Mayo", author: "Carlos Pérez", category: "ASISTENCIA", status: "Finalizado" },
  { date: "22/05/2024", title: "Seguimiento Casos Clínicos Críticos", author: "IA Core Engine", category: "CLÍNICO", status: "Borrador" },
  { date: "20/05/2024", title: "Evaluación Docente Anual Trimestre 1", author: "Marta Gómez", category: "ACADÉMICO", status: "Firmado" },
];

const alertCategories = [
  { label: "Bullying / Convivencia", value: 34, tone: "bg-rose-300" },
  { label: "Riesgo Deserción", value: 26, tone: "bg-amber-300" },
  { label: "Conflicto Familiar", value: 22, tone: "bg-violet-300" },
];

function toneClass(tone: string) {
  const map: Record<string, string> = {
    violet: "border-violet-400/30 bg-violet-500/10 text-violet-100",
    sky: "border-sky-400/30 bg-sky-500/10 text-sky-100",
    emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
    rose: "border-rose-400/30 bg-rose-500/10 text-rose-100",
    amber: "border-amber-400/30 bg-amber-500/10 text-amber-100",
    indigo: "border-indigo-400/30 bg-indigo-500/10 text-indigo-100",
  };

  return map[tone] ?? "border-white/10 bg-white/5 text-slate-100";
}

function riskTone(risk: string) {
  const map: Record<string, string> = {
    Bajo: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
    Medio: "border-amber-400/30 bg-amber-500/10 text-amber-100",
    Alto: "border-rose-400/30 bg-rose-500/10 text-rose-100",
  };

  return map[risk] ?? "border-white/10 bg-white/5 text-slate-100";
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block text-sm text-slate-300">
      <span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</span>
      <input
        className="w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/50 focus:outline-none"
        placeholder={placeholder}
      />
    </label>
  );
}

export default function DirectorDashboard({ onLogout }: { onLogout: () => void }) {
  const { summary, courses, teachers, roleAssignments, syncStatus } = directorInstitutionData;
  const [activeDirectorSection, setActiveDirectorSection] = useState(0);
  const [manualStep, setManualStep] = useState(1);
  const [auditFilters, setAuditFilters] = useState({ user: "Todos", entity: "Todos", status: "Todos" });
  const [mcpQuery, setMcpQuery] = useState("");
  const [reportFilter, setReportFilter] = useState("Todos");
  const [reportNotice, setReportNotice] = useState("");
  const [mcpMessages, setMcpMessages] = useState<string[]>([
    "Hola Directora. He analizado las métricas de este mes. Se observa una correlación entre el aumento de Kudos en 7° Básico y la mejora en la asistencia. ¿Desea profundizar en este reporte?",
  ]);
  const filteredAuditEntries = auditEntries.filter(item =>
    (auditFilters.user === "Todos" || item.user === auditFilters.user) &&
    (auditFilters.entity === "Todos" || item.entity === auditFilters.entity) &&
    (auditFilters.status === "Todos" || item.status === auditFilters.status)
  );
  const downloadAuditCsv = () => {
    const header = ["ID", "Usuario", "Entidad", "Acción", "Fecha", "Estado"];
    const rows = filteredAuditEntries.map(item => [item.id, item.user, item.entity, item.action, item.date, item.status]);
    const csv = [header, ...rows].map(row => row.map(value => `"${value.replaceAll('"', '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "auditoria-conecta.csv";
    link.click();
    URL.revokeObjectURL(url);
  };
  const sendMcpQuery = () => {
    const query = mcpQuery.trim();
    if (!query) return;
    setMcpMessages((messages) => [...messages, `Consulta recibida: ${query}`, "He cruzado los indicadores institucionales disponibles. La tendencia requiere revisión por curso antes de tomar una decisión." ]);
    setMcpQuery("");
  };
  const visibleReports = reportFilter === "Todos" ? reportManagementRows : reportManagementRows.filter(report => report.category === reportFilter);

  const directorModuleContent: Record<number, React.ReactNode> = {
    0: (
      <div className="space-y-6">
        <section className="rounded-2xl border border-violet-400/20 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Resumen institucional</p>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-[18px]">Dashboard del director</h3>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-emerald-200">{syncStatus}</div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Cursos activos", value: summary.activeCourses },
              { label: "Profesores", value: summary.teachers },
              { label: "Alumnos", value: summary.students },
              { label: "Perfiles", value: summary.roles },
            ].map(item => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                <div className="mt-3 text-3xl font-bold text-white">{item.value}</div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-800"><div className="h-full w-[72%] rounded-full bg-violet-400" /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4">
            <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-rose-100"><span>Resumen clima hoy</span><span>☻</span></div>
            <div className="space-y-2 text-sm">{climateSummary.map(item => <div key={item.label} className="flex justify-between"><span>{item.label}</span><span className={item.tone}>{item.value}</span></div>)}</div>
          </div>
          {criticalIndicators.map(item => (
            <div key={item.title} className={`rounded-2xl border p-4 ${toneClass(item.tone)}`}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-300">{item.title}</div>
              <div className="mt-3 text-3xl font-bold text-white">{item.value}</div>
              <div className="mt-2 text-xs text-slate-200">{item.detail}</div>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-[18px]">Índice de Riesgo Emocional por Curso</h3>
              <p className="text-xs text-slate-400">Tendencia de estados críticos y alertas de vulnerabilidad inter-curso</p>
            </div>
            <div className="flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1 text-[11px] text-slate-300"><span className="rounded-lg bg-violet-500/20 px-2.5 py-1.5 text-violet-100">Semanal</span><span className="px-2.5 py-1.5">Diario</span><span className="px-2.5 py-1.5">Semestral</span></div>
          </div>
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-100"><span className="font-semibold">Alerta de Estado: Clima Institucional Estable.</span> No se detectan anomalías críticas hoy en la red institucional.</div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#0d1117] p-3 sm:p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Tendencia semanal · porcentaje de riesgo</div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.14em]">
                <span className="flex items-center gap-1.5 text-rose-200"><span className="h-2 w-2 rounded-full bg-rose-300" />Riesgo actual</span>
                <span className="flex items-center gap-1.5 text-amber-200"><span className="h-2 w-2 rounded-full bg-amber-300" />Referencia</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <svg viewBox="0 0 800 250" role="img" aria-label="Gráfico de tendencia del riesgo emocional por curso" className="h-auto min-w-[620px] w-full">
                {[40, 85, 130, 175, 220].map(y => <line key={y} x1="55" y1={y} x2="780" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />)}
                {[55, 200, 345, 490, 635, 780].map(x => <line key={x} x1={x} y1="25" x2={x} y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
                <text x="8" y="44" fill="#64748b" fontSize="11">30%</text>
                <text x="8" y="134" fill="#64748b" fontSize="11">15%</text>
                <text x="20" y="224" fill="#64748b" fontSize="11">0%</text>
                <path d="M55 157 C110 125 145 170 200 146 S290 116 345 150 S430 190 490 132 S570 98 635 145 S715 177 780 92" fill="none" stroke="#f4b6b3" strokeWidth="4" strokeLinecap="round" />
                <path d="M55 141 C115 135 150 144 200 132 S290 139 345 126 S430 145 490 157 S570 132 635 111 S715 120 780 102" fill="none" stroke="#e7c955" strokeWidth="2.5" strokeDasharray="8 8" opacity="0.85" />
                <circle cx="200" cy="146" r="5" fill="#f4b6b3" stroke="#0d1117" strokeWidth="3" />
                <circle cx="490" cy="132" r="5" fill="#f4b6b3" stroke="#0d1117" strokeWidth="3" />
                <circle cx="780" cy="92" r="5" fill="#f4b6b3" stroke="#0d1117" strokeWidth="3" />
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Hoy"].map((label, index) => <text key={label} x={55 + index * 145} y="242" textAnchor={index === 0 ? "start" : index === 5 ? "end" : "middle"} fill="#64748b" fontSize="11">{label}</text>)}
              </svg>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-4">
              {emotionalRisk.map(item => <div key={item.label} className="rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5"><div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{item.label}</div><div className={`mt-1 text-xl font-bold ${item.tone}`}>{item.value}</div></div>)}
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400"><span>Riesgo mínimo histórico: <strong className="text-emerald-200">7.9%</strong></span><span>Delta: <strong className="text-emerald-200">-4.2%</strong></span></div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold text-white sm:text-[18px]">Top intervention priority</h3><span className="text-xs text-slate-400">Filtro</span></div>
            <div className="space-y-3">{priorityStudents.map(item => <div key={item.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1117] p-3"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">{item.name.split(" ").map(part => part[0]).slice(0, 2).join("")}</div><div><div className="font-medium text-white">{item.name}</div><div className="text-xs text-slate-400">{item.detail}</div></div></div><span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${item.tone}`}>{item.level}</span></div>)}</div>
            <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-100">Ver nómina completa</button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold text-white sm:text-[18px]">Registro de auditoría</h3><span className="text-[10px] uppercase tracking-[0.18em] text-emerald-200">Secure_node</span></div>
            <div className="space-y-3">{["USR_DIR_01", "SYS_AUTO_NODE", "USR_ADM_942"].map(id => <div key={id} className="flex justify-between border-b border-white/10 pb-2 text-sm last:border-0"><span className="uppercase tracking-[0.16em] text-slate-400">{id}</span><span className="text-emerald-200">VERIFIED</span></div>)}</div>
            <button className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">Ver registro completo</button>
          </div>
        </section>

        <section className="rounded-2xl border border-violet-400/30 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-lg font-bold text-white sm:text-[18px]">Asistente MCP</h3><div className="text-[10px] uppercase tracking-[0.18em] text-emerald-200">Neural engine optimized</div></div><div className="flex gap-2 text-[11px] text-slate-300"><span className="rounded-full border border-white/10 px-2.5 py-1">Historial</span><span className="rounded-full border border-white/10 px-2.5 py-1">Config</span></div></div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"><div><div className="rounded-xl border-l-2 border-violet-400 bg-white/5 p-4 text-sm leading-6 text-slate-200">He detectado una anomalía en el sentimiento del 4° Medio B. La correlación con las notas de matemáticas sugiere burnout académico precoz. Se recomienda intervención inmediata del equipo de orientación.</div><div className="mt-3 flex gap-2 rounded-xl border border-white/10 bg-[#0d1117] p-3"><input className="min-w-0 flex-1 bg-transparent text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none" placeholder="Escribe una consulta analítica profunda..." /><button className="text-lg text-violet-200">➤</button></div></div><div className="space-y-2 text-sm"><div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Acciones sugeridas</div><button className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-left text-slate-100">Generar reporte detallado para 4° Medio B</button><button className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-left text-slate-100">Comparativa distrital de salud mental</button></div></div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold text-white sm:text-[18px]">Gestión de reportes institucionales</h3><button className="text-[10px] uppercase tracking-[0.18em] text-violet-100">Exportar todo</button></div>
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4"><div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">Temperatura emocional por nivel</div><div className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-12">{["1° B", "2° B", "3° B", "4° B", "5° B", "6° B", "7° B", "8° B", "1° M", "2° M", "3° M", "4° M"].map((level, index) => <div key={level} className="text-center"><div className="text-[9px] text-slate-500">{level}</div><div className="mt-2 h-8 rounded-md" style={{ backgroundColor: ["#e7c7b0", "#c3b4d9", "#d8bf8a", "#d8a0a0", "#c8b8d8", "#9aa8d8", "#c7c9d0", "#d5b35b", "#d9c8b9", "#b5a4d8", "#d2c0a8", "#c7a3ae"][index] }} /></div>)}</div><div className="mt-4 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.16em] text-slate-400"><span>Escala:</span><span className="text-rose-200">Crítico</span><span className="text-amber-200">Riesgo</span><span className="text-emerald-200">Estable</span><span className="text-violet-200">Positivo</span></div></div>
            <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4"><div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">Categorías de alerta</div><div className="space-y-4">{alertCategories.map(item => <div key={item.label}><div className="mb-1 flex justify-between text-sm text-slate-200"><span>{item.label}</span><span>{item.value}%</span></div><div className="h-2 rounded-full bg-slate-800"><div className={`h-full rounded-full ${item.tone}`} style={{ width: `${item.value}%` }} /></div></div>)}</div></div>
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10"><table className="min-w-full text-left text-sm text-slate-200"><thead className="bg-white/5 text-[10px] uppercase tracking-[0.18em] text-slate-400"><tr><th className="px-4 py-3">Fecha</th><th className="px-4 py-3">Autor</th><th className="px-4 py-3">Categoría</th><th className="px-4 py-3">Estado</th><th className="px-4 py-3">Acciones</th></tr></thead><tbody>{reportRows.map(row => <tr key={row.date} className="border-t border-white/10"><td className="px-4 py-3">{row.date}</td><td className="px-4 py-3">{row.author}</td><td className="px-4 py-3"><span className="rounded-md border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-[10px]">{row.category}</span></td><td className="px-4 py-3 text-amber-200">• Final</td><td className="px-4 py-3 text-violet-200">◉</td></tr>)}</tbody></table></div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5"><div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">Cursos y asignación</div><div className="space-y-3">{courses.map(course => <div key={course.id} className="rounded-xl border border-white/10 bg-[#0d1117] p-3"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><div className="font-semibold text-white">{course.name}</div><div className="text-xs text-slate-400">{course.level} · {course.source}</div></div><div className="flex items-center gap-2 text-xs text-slate-200"><span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-violet-100">{course.teacher.name}</span><span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-emerald-100">{course.totalStudents} alumnos</span></div></div></div>)}</div></div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5"><div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">Perfiles institucionales</div><div className="space-y-3">{roleAssignments.map(role => <div key={role.role} className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1117] p-3"><div><div className="font-medium text-white">{role.role}</div><div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{role.source}</div></div><div className="text-lg font-bold text-violet-100">{role.total}</div></div>)}</div></div>
        </section>
      </div>
    ),

    1: (
      <section className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Carga de datos</p>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-[18px]">Importación institucional</h3>
            </div>
            <button className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-violet-100">
              Subir lote
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {uploadCards.map(item => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.title}</div>
                    <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                  </div>
                  <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.18em] ${toneClass(item.tone)}`}>
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-white/15 bg-white/5 p-3 text-sm text-slate-300">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">Archivo esperado</div>
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.source}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-white">
                  Seleccionar archivo
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">Validación automática</div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Registros leídos", value: "1.284" },
              { label: "Validado OK", value: "1.171" },
              { label: "Errores corregidos", value: "42" },
            ].map(item => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                <div className="mt-3 text-3xl font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),

    2: (
      <section className="space-y-5">
        <div className="flex items-center gap-2 text-xs text-slate-400"><span>Carga de Datos</span><span>›</span><span className="text-violet-200">Manual</span></div>
        <div><h1 className="text-3xl font-black tracking-[-0.05em] text-white">Carga Manual de Datos</h1><p className="mt-1 text-sm text-slate-400">Registra información individual de la comunidad escolar paso a paso.</p></div>
        <div className="grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-violet-400/30 bg-slate-900/70 p-5"><div className="text-2xl text-violet-200">♙</div><h2 className="mt-3 text-lg font-bold text-white">Carga Individual</h2><p className="mt-1 text-sm text-slate-400">Ingresa los datos de un estudiante de forma manual paso a paso.</p></div><div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"><div className="text-2xl text-amber-200">▣</div><h2 className="mt-3 text-lg font-bold text-white">Carga Masiva</h2><p className="mt-1 text-sm text-slate-400">Sube archivos CSV o Excel para actualizar múltiples registros.</p></div></div>
        <div className="grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)]"><aside className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">{["Identificación", "Académicos", "Bienestar"].map((step, index) => <button key={step} onClick={() => setManualStep(index + 1)} className={`mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-semibold ${manualStep === index + 1 ? "bg-violet-500/60 text-white" : "text-slate-400 hover:bg-white/5"}`}><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">{index + 1}</span>{step}</button>)}<div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-500/10 p-3 text-xs leading-5 text-violet-100">Asegúrate de validar el RUT del estudiante antes de continuar para evitar duplicidad de registros.</div></aside>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"><div className="mb-5 flex items-center justify-between"><h2 className="text-lg font-bold text-white">{manualStep === 1 ? "Datos del Estudiante" : manualStep === 2 ? "Información Académica" : "Bienestar y Observaciones"}</h2><span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-bold text-violet-200">Progreso: {Math.round((manualStep / 3) * 100)}%</span></div>{manualStep === 1 ? <div className="grid gap-4 md:grid-cols-2"><Field label="RUT Estudiante" placeholder="12.345.678-9" /><Field label="Nombre Completo" placeholder="Ej: Juan Pérez González" /><Field label="Establecimiento" placeholder="Seleccionar colegio" /><Field label="Curso" placeholder="Seleccionar curso" /><div className="md:col-span-2"><Field label="Asistencia Acumulada (%)" placeholder="85%" /></div></div> : manualStep === 2 ? <div className="grid gap-4 md:grid-cols-2"><Field label="Promedio general" placeholder="6,0" /><Field label="Asignatura destacada" placeholder="Matemática" /><Field label="Promedio de lenguaje" placeholder="5,8" /><Field label="Promedio de matemática" placeholder="6,2" /><div className="md:col-span-2"><Field label="Observación académica" placeholder="Detalles relevantes sobre el desempeño..." /></div></div> : <div className="space-y-4"><Field label="Estado socioemocional" placeholder="Seleccionar estado" /><Field label="Observación socioemocional" placeholder="Detalles relevantes sobre el estado o contexto del estudiante..." /><Field label="Plan de apoyo" placeholder="Acciones o seguimiento recomendado..." /></div>}<div className="mt-6 flex justify-end gap-3"><button onClick={() => setManualStep(Math.max(1, manualStep - 1))} className="rounded-xl px-4 py-2.5 text-sm text-slate-400">Cancelar</button>{manualStep < 3 ? <button onClick={() => setManualStep(manualStep + 1)} className="rounded-xl bg-violet-300 px-5 py-2.5 text-sm font-semibold text-slate-900">Siguiente paso →</button> : <button className="rounded-xl bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-900">Guardar estudiante</button>}</div></div></div>
      </section>
    ),

    3: (
      <section className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Configuración</p>
            <h3 className="mt-1 text-lg font-bold text-white sm:text-[18px]">Parámetros del sistema</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {configurationCards.map(card => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{card.title}</div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                    {card.value}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),

    4: (
      <section className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Detalle de auditoría</p>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-[18px]">Bitácora de cambios</h3>
            </div>
            <button onClick={downloadAuditCsv} className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-violet-100">↓ Descargar CSV</button>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              { label: "Movimientos hoy", value: "42" },
              { label: "Validaciones", value: "31" },
              { label: "Error críticos", value: "01" },
            ].map(item => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                <div className="mt-3 text-3xl font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-[#0d1117] p-3">
            {(["user", "entity", "status"] as const).map(filter => {
              const options = filter === "user" ? ["Todos", ...new Set(auditEntries.map(item => item.user))] : filter === "entity" ? ["Todos", ...new Set(auditEntries.map(item => item.entity))] : ["Todos", ...new Set(auditEntries.map(item => item.status))];
              return <label key={filter} className="min-w-44 flex-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{filter === "user" ? "Usuario" : filter === "entity" ? "Entidad" : "Estado"}<select value={auditFilters[filter]} onChange={event => setAuditFilters(current => ({ ...current, [filter]: event.target.value }))} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm normal-case tracking-normal text-white focus:border-violet-400/50 focus:outline-none">{options.map(option => <option key={option}>{option}</option>)}</select></label>;
            })}
            <div className="flex items-end text-xs text-slate-400">{filteredAuditEntries.length} registros visibles</div>
          </div>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="bg-white/5 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Usuario</th>
                  <th className="px-4 py-3">Entidad</th>
                  <th className="px-4 py-3">Acción</th>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredAuditEntries.map(item => (
                  <tr key={item.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-slate-300">{item.id}</td>
                    <td className="px-4 py-3 text-white">{item.user}</td>
                    <td className="px-4 py-3 text-slate-300">{item.entity}</td>
                    <td className="px-4 py-3 text-slate-300">{item.action}</td>
                    <td className="px-4 py-3 text-slate-300">{item.date}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-100">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredAuditEntries.length === 0 ? <tr><td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-400">No hay registros para los filtros seleccionados.</td></tr> : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),

    5: (
      <section className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Cursos</p>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-[18px]">Detalle por curso de alertas</h3>
            </div>
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white">
              Exportar análisis
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {courseAlerts.map(item => (
              <div key={item.course} className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-white">{item.course}</div>
                    <div className="text-xs text-slate-400">{item.level}</div>
                  </div>
                  <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.18em] ${riskTone(item.risk)}`}>
                    {item.risk}
                  </span>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between"><span>Docente</span><span className="text-white">{item.teacher}</span></div>
                  <div className="flex items-center justify-between"><span>Alumnos</span><span className="text-white">{item.students}</span></div>
                  <div className="flex items-center justify-between"><span>Casos abiertos</span><span className="text-white">{item.openCases}</span></div>
                  <div className="flex items-center justify-between"><span>Origen</span><span className="text-white">{item.source}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),

    6: (
      <section className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Reportes</p><h1 className="mt-1 text-2xl font-black text-white">Gestión de Reportes</h1><p className="mt-1 text-sm text-slate-400">Monitorización avanzada de métricas SLP. Generación de informes automatizados mediante núcleos de IA.</p></div>
          <div className="flex gap-2"><button onClick={() => setReportNotice("Datos actualizados correctamente.")} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">↻ Actualizar datos</button><button onClick={() => setReportNotice("Nuevo reporte listo para configurar.")} className="rounded-lg bg-violet-300 px-3 py-2 text-xs font-semibold text-slate-900">＋ Nuevo reporte</button></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{[{ label: "Total generados", value: "1284", detail: "+12%" }, { label: "Pendientes de firma", value: "42", detail: "Urgentes" }, { label: "Tasa de descarga", value: "92,4", detail: "↑4%" }, { label: "Alertas críticas", value: "8", detail: "3 requieren atención" }].map((item, index) => <div key={item.label} className={`rounded-2xl border p-4 ${index === 3 ? "border-rose-400/20 bg-rose-500/5" : "border-white/10 bg-slate-900/70"}`}><p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{item.label}</p><div className="mt-2 text-3xl font-black text-white">{item.value}</div><p className="mt-1 text-[10px] text-violet-200">{item.detail}</p></div>)}</div>
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5"><h2 className="text-sm font-bold text-white">✦ Generación rápida con IA Core</h2><div className="mt-3 grid gap-3 lg:grid-cols-3">{[["Análisis Clima Global", "Procesa datos cualitativos de encuestas y asistencia."], ["Reporte Deserción Distrital", "Identifica patrones de riesgo por zona geográfica."], ["Resumen Logros SLEP", "Consolidado trimestral de KPI del sistema educativo."]].map(([title, description]) => <button key={title} onClick={() => setReportNotice(`${title} generado y agregado a la tabla.`)} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"><div className="font-semibold text-white">{title}</div><p className="mt-2 text-xs text-slate-400">{description}</p></button>)}</div></section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-2"><select value={reportFilter} onChange={event => setReportFilter(event.target.value)} className="rounded-lg border border-white/10 bg-[#0d1117] px-3 py-2 text-xs text-white"><option>Todos</option><option>ASISTENCIA</option><option>CLÍNICO</option><option>ACADÉMICO</option></select><button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">Últimos 30 días ▾</button><button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">Todos los establecimientos ▾</button></div><span className="text-[10px] uppercase tracking-wide text-slate-400">Mostrando {visibleReports.length} resultados</span></div>
          <div className="overflow-x-auto rounded-xl border border-white/10"><table className="min-w-full text-left text-xs text-slate-200"><thead className="bg-white/5 text-[10px] uppercase tracking-wide text-slate-400"><tr>{["Fecha", "Nombre del Reporte", "Autor", "Categoría", "Estado", "Acciones"].map(header => <th key={header} className="px-3 py-3">{header}</th>)}</tr></thead><tbody>{visibleReports.map(report => <tr key={report.title} className="border-t border-white/10"><td className="px-3 py-3 text-slate-300">{report.date}</td><td className="px-3 py-3 font-semibold text-white">{report.title}</td><td className="px-3 py-3 text-slate-300">{report.author}</td><td className="px-3 py-3"><span className="rounded bg-violet-500/15 px-2 py-1 text-[9px] text-violet-100">{report.category}</span></td><td className="px-3 py-3"><span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${report.status === "Finalizado" ? "bg-emerald-500/15 text-emerald-200" : report.status === "Borrador" ? "bg-amber-500/15 text-amber-200" : "bg-violet-500/15 text-violet-200"}`}>{report.status}</span></td><td className="px-3 py-3 text-violet-200"><button onClick={() => setReportNotice(`Abriendo ${report.title}.`)}>Ver ▸</button></td></tr>)}</tbody></table></div>
          {reportNotice && <p className="mt-3 text-xs text-violet-200">{reportNotice}</p>}
        </section>
      </section>
    ),
    7: (
      <section className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Inteligencia institucional</p><h1 className="mt-1 text-3xl font-black tracking-[-0.05em] text-white">Asistente MCP · Análisis Predictivo Institucional</h1><div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-emerald-200">● Quantum-grade encryption active <span className="text-slate-500">NODE-MCP-PRD-882</span></div></div>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200">◷ Historial de consultas</button>
        </div>
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
          <section className="flex min-h-[560px] flex-col rounded-2xl border border-violet-400/50 bg-[#0d0b12] p-4">
            <div className="flex-1 space-y-4 overflow-y-auto rounded-xl border border-white/5 bg-black/20 p-4">
              {mcpMessages.map((message, index) => <div key={`${message}-${index}`} className={`max-w-[90%] rounded-xl p-4 text-sm leading-6 ${index === 0 || message.startsWith("He cruzado") ? "bg-violet-500/15 text-slate-100" : "ml-auto bg-white/10 text-slate-200"}`}><span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-violet-200">{index === 0 || message.startsWith("He cruzado") ? "MCP" : "Directora"}</span>{message}</div>)}
            </div>
            <div className="mt-3 flex flex-wrap gap-2"><button onClick={() => setMcpQuery("¿Cuál es el curso con mayor riesgo vital?")} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">◉ ¿Cuál es el curso con mayor riesgo vital?</button><button onClick={() => setMcpQuery("Comparar 7°A vs 7°B")} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">⚒ Comparar 7°A vs 7°B</button><button onClick={() => setMcpQuery("Previsión de clima para el próximo mes")} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">◉ Previsión de clima para el próximo mes</button></div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"><span className="text-violet-200">✦</span><input value={mcpQuery} onChange={(event) => setMcpQuery(event.target.value)} onKeyDown={(event) => event.key === "Enter" && sendMcpQuery()} className="min-w-0 flex-1 bg-transparent px-1 text-sm text-white placeholder:text-slate-500 focus:outline-none" placeholder="Escribe tu consulta al Asistente MCP..." /><button onClick={sendMcpQuery} className="rounded-lg bg-violet-300 px-3 py-2 text-slate-900">➤</button></div>
          </section>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#10101d] p-4"><div className="flex justify-between text-xs text-slate-400"><span>Tendencia positiva</span><span>Tendencia crítica</span></div><div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-violet-300 via-violet-300/60 to-rose-300" /><div className="mt-3 flex justify-between"><strong className="text-2xl text-white">74.2%</strong><strong className="text-2xl text-rose-200">12.8%</strong></div></div>
            <div className="rounded-2xl border border-white/10 bg-[#10101d] p-4"><h2 className="font-bold text-white">! Alertas de Riesgo Vital</h2><div className="mt-3 space-y-2"><div className="flex items-center justify-between rounded-xl border border-rose-400/20 bg-rose-500/5 p-3 text-sm text-white"><span>M. Arancibia<br /><small className="text-slate-400">7° Básico A</small></span><b className="text-[10px] text-rose-200">CRÍTICO</b></div><div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-sm text-white"><span>J. Soto<br /><small className="text-slate-400">1° Medio B</small></span><b className="text-[10px] text-amber-200">MEDIO</b></div></div></div>
            <div className="rounded-2xl border border-white/10 bg-[#10101d] p-4"><h2 className="font-bold text-white">Impacto de Actividades Co-curriculares</h2><div className="mt-5 flex h-24 items-end gap-2">{[38, 68, 88, 55].map((height, index) => <div key={index} className="flex-1 rounded-t bg-violet-300/70" style={{ height: `${height}%` }} />)}</div><p className="mt-3 text-xs italic text-slate-400">El taller de “Ciencia” presentó el mayor impacto en estabilidad emocional (+24%).</p></div>
            <div className="rounded-2xl border border-violet-400/30 bg-[#10101d] p-4"><h2 className="font-bold text-violet-100">🛡 Auditoría Criptográfica</h2><p className="mt-1 text-xs text-slate-400">Protocolo AES-256-GCM Activo</p><div className="mt-4 flex gap-2 text-[9px] uppercase text-slate-300"><span className="rounded bg-white/10 px-2 py-1">SOC2 Type II</span><span className="rounded bg-white/10 px-2 py-1">GDPR</span></div></div>
          </aside>
        </div>
      </section>
    ),
  };

  return (
    <DashboardShell
      role="director"
      userName="Claudia Rivas"
      userTitle="Directora general"
      course="Colegio completo"
      schoolName="Colegio Chile Norte"
      schoolRbd="12412-4"
      onLogout={onLogout}
      activeItem={activeDirectorSection}
      onActiveItemChange={setActiveDirectorSection}
    >
      {directorModuleContent[activeDirectorSection] ?? directorModuleContent[0]}
    </DashboardShell>
  );
}
