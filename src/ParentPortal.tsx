import { useState } from "react";
import { DashboardShell } from "./DashboardShell";

const notifications = [
  {
    title: "Citación",
    text: "Tu hijo tiene una cita con la dupla psicosocial el próximo miércoles a las 15:30.",
    tone: "amber",
    time: "Hoy · 09:20",
  },
  {
    title: "Felicitación",
    text: "Benjamín recibió un kudo por colaborar en clase y apoyar a sus compañeros.",
    tone: "violet",
    time: "Ayer · 18:40",
  },
  {
    title: "Alerta psicosocial",
    text: "Se registraron 3 emociones negativas en la última semana y la dupla revisó su seguimiento.",
    tone: "rose",
    time: "Hoy · 07:10",
  },
];

const kudoWall = [
  { label: "Colaboración", value: "+50", accent: "bg-violet-500/15 text-violet-100" },
  { label: "Participación", value: "+30", accent: "bg-amber-500/15 text-amber-100" },
  { label: "Empatía", value: "+20", accent: "bg-emerald-500/15 text-emerald-100" },
];

const emotionalTrend = [
  { label: "Crítico", value: "12%" },
  { label: "Bajo", value: "8%" },
  { label: "Neutral", value: "20%" },
  { label: "Óptimo", value: "60%" },
];

const supportActions = [
  {
    title: "Atención de la dupla",
    description: "Seguimiento semanal con orientador y apoyo emocional para reforzar la rutina escolar.",
  },
  {
    title: "Plan de acompañamiento",
    description: "Se recomienda reforzar pausas activas, sueño y comunicación con el curso.",
  },
  {
    title: "Metas semanales",
    description: "Participar en clase, mantener agenda y registrar emociones diarias en el kiosco.",
  },
];

const ideaCards = [
  { title: "Hablar de emociones", emoji: "💬", text: "Espacios breves para identificar emociones y pedir ayuda cuando se sientan abrumados." },
  { title: "Rutina saludable", emoji: "🌿", text: "Proponer pausas activas, sueño temprano y hábitos diarios de bienestar." },
  { title: "Apoyo colectivo", emoji: "🤝", text: "Incentivar el trabajo en equipo y reconocer actitudes positivas dentro del curso." },
];

const historicTimeline = [
  { label: "Reunión de apoderados", date: "12 mayo 2026", status: "Revisado" },
  { label: "Seguimiento emocional", date: "08 mayo 2026", status: "Activo" },
  { label: "Reforzamiento de hábitos", date: "02 mayo 2026", status: "Completado" },
];

export default function ParentPortal({ onLogout }: { onLogout: () => void }) {
  const [activeSection, setActiveSection] = useState(0);
  const [ideaCategory, setIdeaCategory] = useState("Bienestar");
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [ideaNotice, setIdeaNotice] = useState("");

  const submitParentIdea = () => {
    const title = ideaTitle.trim();
    const description = ideaDescription.trim();
    if (!title || !description) {
      setIdeaNotice("Completa el título y la descripción de tu propuesta.");
      return;
    }

    const proposal = {
      id: Date.now(),
      title,
      description,
      category: ideaCategory,
      sender: "Apoderado · María Pérez",
      date: new Date().toLocaleDateString("es-CL"),
      status: "Nueva",
    };
    const saved = JSON.parse(localStorage.getItem("conecta-parent-ideas") ?? "[]");
    localStorage.setItem("conecta-parent-ideas", JSON.stringify([proposal, ...saved]));
    window.dispatchEvent(new Event("conecta-parent-idea-created"));
    setIdeaTitle("");
    setIdeaDescription("");
    setIdeaNotice("Propuesta enviada. El docente del curso podrá revisarla.");
  };

  return (
    <DashboardShell
      role="apoderado"
      userName="María Pérez"
      userTitle="Apoderada principal"
      course="Hijo: Benjamín Pérez"
      schoolName="Colegio Chile Norte"
      schoolRbd="12412-4"
      onLogout={onLogout}
      activeItem={activeSection}
      onActiveItemChange={setActiveSection}
    >
      <div className="flex flex-wrap items-center justify-end gap-2 pb-4">
        <button
          type="button"
          className="rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-100"
        >
          Ver historial
        </button>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-100"
        >
          Cerrar sesión
        </button>
      </div>

      {activeSection === 0 || activeSection === 1 || activeSection === 2 || activeSection === 3 ? (
        <div className="space-y-6 text-sm text-slate-200">
          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.85fr)]">
            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 via-violet-500 to-indigo-500 text-lg font-bold text-white">
                    B
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-violet-200/80">Estudiante</div>
                    <h2 className="text-xl font-black tracking-[-0.05em] text-white">Benjamín Pérez</h2>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                  Estudiante regular
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Rendimiento</div>
                  <div className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">89%</div>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Asistencia</div>
                  <div className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">96%</div>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Kudos</div>
                  <div className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">120</div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[1.8rem] font-black tracking-[-0.06em] text-white">Notificaciones</h3>
                <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-100">
                  3 nuevas
                </span>
              </div>

              <div className="space-y-3">
                {notifications.map((item) => (
                  <div key={item.title} className="rounded-[18px] border border-white/10 bg-[#1d2333] p-3">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] ${
                          item.tone === "amber"
                            ? "bg-amber-500/15 text-amber-200"
                            : item.tone === "violet"
                              ? "bg-violet-500/15 text-violet-100"
                              : "bg-rose-500/15 text-rose-200"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">{item.time}</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-200">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.8fr)]">
            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-[1.9rem] font-black tracking-[-0.06em] text-white">Historial de Actividades</h3>
              </div>

              <div className="space-y-3">
                {historicTimeline.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-[#1d2333] p-3">
                    <div>
                      <div className="text-base font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.date}</div>
                    </div>
                    <span className="rounded-full border border-violet-300/30 bg-violet-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-100">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[1.8rem] font-black tracking-[-0.06em] text-white">Kudos y Reconocimientos</h3>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {kudoWall.map((item) => (
                  <span key={item.label} className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${item.accent}`}>
                    {item.label} · {item.value}
                  </span>
                ))}
              </div>

              <div className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Medallas</div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-2xl">
                    <span>🏆</span>
                    <span>⭐</span>
                    <span>🎖️</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black tracking-[-0.06em] text-white">120</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Puntaje total</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)]">
            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-[1.9rem] font-black tracking-[-0.06em] text-white">Clima del curso</h3>
                <span className="rounded-full border border-violet-300/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-100">
                  74% positivo
                </span>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#2a2f46]">
                <div className="flex h-full w-full">
                  {emotionalTrend.map((bar) => (
                    <div
                      key={bar.label}
                      className={
                        bar.label === "Crítico"
                          ? "bg-[#f4d380]"
                          : bar.label === "Bajo"
                            ? "bg-[#d7c7ff]"
                            : bar.label === "Neutral"
                              ? "bg-[#b4b7d8]"
                              : "bg-[#c5b7f5]"
                      }
                      style={{ width: `${bar.label === "Óptimo" ? 60 : bar.label === "Neutral" ? 20 : bar.label === "Bajo" ? 8 : 12}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                {emotionalTrend.map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-2 text-[12px] font-bold text-white">{bar.value}</div>
                    <div>{bar.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[1.8rem] font-black tracking-[-0.06em] text-white">Dupla psicosocial</h3>
              </div>

              <div className="space-y-3">
                {supportActions.map((item) => (
                  <div key={item.title} className="rounded-[18px] border border-white/10 bg-[#1d2333] p-3">
                    <div className="text-base font-semibold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-[1.9rem] font-black tracking-[-0.06em] text-white">Recursos de Crianza Recomendados</h3>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {ideaCards.map((card) => (
                <div key={card.title} className="rounded-[22px] border border-white/10 bg-[#1d2333] p-4">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-2xl">{card.emoji}</div>
                  <div className="text-lg font-bold text-white">{card.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}

      {activeSection === 6 ? (
        <section className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-violet-200/80">Caja de Ideas</div>
              <h3 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-white">Proponer una nueva idea</h3>
              <p className="mt-1 text-sm text-slate-400">Comparte propuestas para mejorar la comunidad escolar. Serán recibidas por el docente del curso.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300"><span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Título de la idea</span><input value={ideaTitle} onChange={(event) => setIdeaTitle(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/50 focus:outline-none" placeholder="Ej: Implementar huerto escolar..." /></label>
            <label className="text-sm text-slate-300"><span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Categoría</span><select value={ideaCategory} onChange={(event) => setIdeaCategory(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white focus:border-violet-400/50 focus:outline-none"><option>Bienestar</option><option>Convivencia</option><option>Academia</option><option>Familia</option><option>Infraestructura</option></select></label>
            <label className="text-sm text-slate-300 md:col-span-2"><span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Descripción detallada</span><textarea value={ideaDescription} onChange={(event) => setIdeaDescription(event.target.value)} className="min-h-32 w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/50 focus:outline-none" placeholder="Cuéntanos más sobre tu propuesta y cómo beneficiaría a la comunidad..." /></label>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-400">Tu propuesta será compartida con el docente responsable del curso para su revisión.</p><button type="button" onClick={submitParentIdea} className="rounded-xl bg-violet-300 px-4 py-2.5 text-sm font-semibold text-slate-900">➤ Enviar propuesta</button></div>
          {ideaNotice && <p className="mt-3 text-xs text-violet-200">{ideaNotice}</p>}
        </section>
      ) : null}
    </DashboardShell>
  );
}
