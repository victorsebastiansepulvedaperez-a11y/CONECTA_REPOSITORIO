import { useState } from "react";
import { DashboardShell } from "./DashboardShell";

const interventionRows = [
  { initials: "JM", student: "Jessica Muñoz", course: "7th Grade A", type: "Crisis Containment", protocol: "Protocol #88-C", status: "In Progress", priority: "Critical" },
  { initials: "RA", student: "Ricardo Alarcón", course: "8th Grade B", type: "Family Meeting", protocol: "Follow-up Phase", status: "Scheduled", priority: "Medium" },
  { initials: "SP", student: "Sofía Paredes", course: "1st High School", type: "Peer Conflict", protocol: "Mediation", status: "Completed", priority: "Low" },
  { initials: "MS", student: "Marco Silva", course: "4th Grade C", type: "Evaluation", protocol: "Initial Screening", status: "In Progress", priority: "Medium" },
];

const criticalAlerts = [
  { initials: "JM", student: "Jessica Muñoz", course: "8th Grade B · 2do Medio B", time: "Hace 12 mins", reason: "Riesgo de Deserción" },
  { initials: "ML", student: "Matías Lagos", course: "4th Grade C · 4to Medio C", time: "Hace 45 mins", reason: "Conducta Disruptiva" },
];

const activeProtocols = [
  { name: "Intervención de Salud Mental Intensa", value: 60 },
  { name: "Apoyo Psicoeducativo Nivel Medio", value: 85 },
  { name: "Protocolo Social", value: 25 },
  { name: "Visita Domiciliaria en Proceso", value: 40 },
];

function CriticalAlertsSection({ onNotice }: { onNotice: (message: string) => void }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[11px] uppercase tracking-[0.22em] text-rose-200/80">Panel institucional de Conecta V2 Pro</p><h1 className="text-3xl font-black tracking-[-0.05em] text-white">Gestión de Alertas Críticas</h1></div><button onClick={() => onNotice("Historial de alertas abierto.")} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white">◷ Historial</button></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{[{ label: "Crítica", value: "12", detail: "Alertas Activas", tone: "rose" }, { label: "Alta", value: "28", detail: "Casos Pendientes", tone: "amber" }, { label: "Media", value: "45", detail: "En Seguimiento", tone: "violet" }, { label: "Baja", value: "102", detail: "Estables", tone: "emerald" }].map((item) => <div key={item.label} className="rounded-2xl border border-white/10 bg-[#10101d] p-4"><div className={`text-xs font-bold ${item.tone === "rose" ? "text-rose-200" : item.tone === "amber" ? "text-amber-200" : item.tone === "violet" ? "text-violet-200" : "text-emerald-200"}`}>{item.label}</div><strong className="mt-2 block text-3xl text-white">{item.value}</strong><span className="text-xs text-slate-400">{item.detail}</span></div>)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
        <section className="rounded-2xl border border-white/10 bg-[#10101d] p-4 sm:p-5"><div className="mb-4 flex items-center justify-between"><h2 className="font-bold text-white">◉ Feed de Alertas Críticas</h2><button onClick={() => onNotice("Mostrando todas las alertas críticas.")} className="text-xs text-violet-200">Ver todo</button></div><div className="space-y-3">{criticalAlerts.map((alert) => <article key={alert.student} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border-l-2 border-rose-300 bg-white/5 p-3"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-xs font-bold text-violet-100">{alert.initials}</span><div><h3 className="font-semibold text-white">{alert.student}</h3><p className="text-xs text-slate-400">{alert.course}</p><p className="mt-1 text-[10px] text-rose-200">● {alert.time} · {alert.reason}</p></div></div><div className="flex items-center gap-2"><button onClick={() => onNotice(`Protocolo iniciado para ${alert.student}.`)} className="rounded-lg bg-rose-200 px-3 py-2 text-[10px] font-bold text-slate-900">▶ Iniciar Protocolo</button><button onClick={() => onNotice(`Abriendo alerta de ${alert.student}.`)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-slate-300">↗</button></div></article>)}</div></section>
        <section className="rounded-2xl border border-white/10 bg-[#10101d] p-4 sm:p-5"><div className="flex items-center justify-between"><h2 className="font-bold text-white">♧ Protocolos Activos</h2><span className="text-xs text-slate-500">Progreso</span></div><div className="mt-4 space-y-4">{activeProtocols.map((protocol) => <div key={protocol.name}><div className="mb-1 flex justify-between text-xs text-slate-300"><span>{protocol.name}</span><b>{protocol.value}%</b></div><div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-violet-300 to-amber-200" style={{ width: `${protocol.value}%` }} /></div></div>)}<button onClick={() => onNotice("Formulario de nuevo protocolo abierto.")} className="mt-2 w-full rounded-xl border border-dashed border-white/20 px-3 py-2 text-xs text-slate-300">＋ Nuevo Protocolo</button></div></section>
      </div>
      <section className="rounded-2xl border border-violet-300/40 bg-[#10101d] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-200">▣ Matriz de Riesgo Escolar</h2>
          <span className="text-slate-400">↗</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {[["Crítico", "12", "bg-rose-500/20 text-rose-100", "↑ 3"], ["Alto", "28", "bg-amber-500/15 text-amber-100", "↓ 3"], ["Medio", "45", "bg-violet-500/15 text-violet-100", "→ 2"], ["Bajo", "102", "bg-emerald-500/15 text-emerald-100", "↓ 5"]].map(([label, value, tone, trend]) => (
            <div key={label} className={`rounded-xl border border-white/10 p-3 ${tone}`}>
              <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-wide">{label}</span><span className="text-[10px]">{trend}</span></div>
              <strong className="mt-2 block text-2xl">{value}</strong>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-16 items-end gap-2 rounded-xl bg-white/[0.03] px-3 pt-3">
          {[28, 46, 34, 66, 82, 51, 70].map((height, index) => <div key={index} className={`flex-1 rounded-t ${index === 4 ? "bg-rose-300/60" : index === 5 ? "bg-violet-300/60" : "bg-slate-500/60"}`} style={{ height: `${height}%` }} />)}
        </div>
      </section>
      <div className="grid gap-3 sm:grid-cols-3">{[["14", "Especialistas Disponibles"], ["08", "Derivaciones Externas"], ["92%", "Efectividad de Protocolos"]].map(([value, label]) => <div key={label} className="rounded-xl border border-white/10 bg-[#10101d] p-4"><strong className="text-xl text-white">{value}</strong><p className="text-xs text-slate-400">{label}</p></div>)}</div>
    </div>
  );
}

export default function PsychoDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeSection, setActiveSection] = useState(0);
  const [notice, setNotice] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const filteredRows = statusFilter === "All Status" ? interventionRows : interventionRows.filter((row) => row.status === statusFilter);
  if (activeSection === 5) {
    return <DashboardShell role="psicosocial" userName="Dra. Andrea Torres" userTitle="Psicóloga clínica" course="Intervenciones y casos" schoolName="Colegio Chile Norte" schoolRbd="12412-4" onLogout={onLogout} activeItem={activeSection} onActiveItemChange={setActiveSection}><CriticalAlertsSection onNotice={setNotice} />{notice && <p className="mt-4 rounded-xl border border-violet-300/20 bg-violet-500/10 p-3 text-sm text-violet-100">{notice}</p>}</DashboardShell>;
  }

  return (
    <DashboardShell role="psicosocial" userName="Dra. Andrea Torres" userTitle="Psicóloga clínica" course="Intervenciones y casos" schoolName="Colegio Chile Norte" schoolRbd="12412-4" onLogout={onLogout} activeItem={activeSection} onActiveItemChange={setActiveSection}>
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-xs text-slate-400"><span>Case Management</span><span>›</span><span className="text-violet-200">Panel de Intervenciones</span></div>
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h1 className="text-3xl font-black tracking-[-0.05em] text-white">Panel de Intervenciones</h1><p className="mt-1 text-sm text-slate-400">Monitoreo activo de apoyo psicológico y casos críticos.</p></div><div className="flex gap-2"><button onClick={() => setNotice("Reporte de intervenciones generado.")} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white">▣ Generar Reporte</button><button onClick={() => setNotice("Caso preparado para derivación a red.")} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white">♧ Derive to Network</button><button onClick={() => setNotice("Formulario de nueva intervención listo.")} className="rounded-xl bg-violet-300 px-4 py-2.5 text-xs font-semibold text-slate-900">＋ New Intervention</button></div></div>
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
          <section className="rounded-2xl border border-white/10 bg-[#10101d] p-4 sm:p-5"><div className="mb-4 flex items-center justify-between gap-3"><h2 className="font-bold text-white">Active Interventions</h2><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200"><option>All Status</option><option>In Progress</option><option>Scheduled</option><option>Completed</option></select></div><div className="overflow-x-auto"><table className="min-w-full text-left text-xs text-slate-200"><thead className="text-[10px] uppercase tracking-wide text-slate-400"><tr>{["Student", "Type", "Status", "Priority", ""].map((heading) => <th key={heading} className="px-2 py-3">{heading}</th>)}</tr></thead><tbody>{filteredRows.map((row) => <tr key={row.student} className="border-t border-white/10"><td className="px-2 py-3"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-[10px] font-bold text-violet-100">{row.initials}</span><span><b className="block text-white">{row.student}</b><small className="text-slate-400">{row.course}</small></span></div></td><td className="px-2 py-3"><b className="block text-slate-200">{row.type}</b><small className="text-slate-500">{row.protocol}</small></td><td className="px-2 py-3"><span className={`rounded-full px-2 py-1 text-[10px] ${row.status === "Completed" ? "bg-emerald-500/15 text-emerald-200" : row.status === "Scheduled" ? "bg-amber-500/15 text-amber-200" : "bg-violet-500/15 text-violet-200"}`}>{row.status}</span></td><td className="px-2 py-3"><span className={`rounded-full px-2 py-1 text-[10px] ${row.priority === "Critical" ? "bg-rose-500/20 text-rose-200" : row.priority === "Medium" ? "bg-amber-500/15 text-amber-200" : "bg-white/10 text-slate-300"}`}>{row.priority}</span></td><td className="px-2 py-3 text-violet-200"><button onClick={() => setNotice(`Abriendo intervención de ${row.student}.`)} aria-label={`Abrir intervención de ${row.student}`}>↗</button></td></tr>)}</tbody></table></div><button onClick={() => setNotice("Mostrando todas las intervenciones.")} className="mt-5 w-full text-center text-sm font-semibold text-violet-200">View all interventions</button></section>
          <aside className="space-y-4"><div className="grid grid-cols-2 gap-3"><div className="rounded-2xl border border-violet-300/60 bg-[#10101d] p-4"><p className="text-[10px] uppercase text-slate-400">Active Cases</p><strong className="text-3xl text-white">24</strong></div><div className="rounded-2xl border border-rose-300/60 bg-[#10101d] p-4"><p className="text-[10px] uppercase text-slate-400">Critical</p><strong className="text-3xl text-rose-100">03</strong></div></div><section className="rounded-2xl border border-white/10 bg-[#10101d] p-4"><div className="flex items-center justify-between"><h2 className="font-bold text-white">Timeline</h2><span className="text-slate-400">▣</span></div><div className="mt-4 space-y-4 border-l border-violet-300/30 pl-4 text-xs"><div><b className="text-violet-200">14:30 - TODAY</b><p className="mt-1 font-semibold text-white">Jessica Muñoz</p><p className="text-slate-400">Home Visit Planning - Case #441</p></div><div><b className="text-slate-400">16:00 - TODAY</b><p className="mt-1 font-semibold text-white">Derivation Review</p><p className="text-slate-400">Municipal Network Coordination</p></div><div><b className="text-slate-400">09:00 - TOMORROW</b><p className="mt-1 font-semibold text-white">Staff Briefing</p><p className="text-slate-400">Weekly intervention sync</p></div></div><div className="mt-5 rounded-xl border border-violet-300/20 bg-violet-500/10 p-3 text-xs text-violet-100">ⓘ Protocol Alert: 3 interventions for Jessica Muñoz are pending final signature from the technical director.</div></section></aside>
        </div>
        {notice && <p className="rounded-xl border border-violet-300/20 bg-violet-500/10 p-3 text-sm text-violet-100">{notice}</p>}
      </div>
    </DashboardShell>
  );
}
