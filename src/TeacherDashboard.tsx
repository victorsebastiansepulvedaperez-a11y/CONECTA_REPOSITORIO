import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { DashboardShell } from "./DashboardShell";
import KudosPanel from "./KudosPanel";
import {
  createKioskSession,
  createKioskUrl,
  kioskMoods,
  loadKioskSession,
  saveKioskSession,
  type KioskSession,
} from "./kioskSession";

const overviewStats = [
  { label: "Check-ins hoy", value: "23", icon: "👥" },
  { label: "Clima positivo", value: "74%", icon: "📈", accent: true },
  { label: "Esta semana", value: "89", icon: "📅" },
  { label: "Medallas dadas", value: "24", icon: "🏅" },
];

const recommendations = [
  { title: "Clima positivo", text: "74% del curso muestra emociones positivas. Sigue así.", icon: "✓" },
  { title: "Más logros", text: "Considera otorgar reconocimientos por pequeños logros diarios.", icon: "◎" },
  { title: "Atención individual", text: "6 alumnos requieren atención. Considera un check-in personal.", icon: "◌" },
  { title: "Seguimiento", text: "Revisa tendencias para identificar patrones y ajustar estrategias.", icon: "↗" },
];

const praisedStudents = [
  { name: "Sofía Henríquez", note: "Colaboración Proactiva", badge: "🏆" },
  { name: "Francisco Arancibia", note: "Kudo: Mentoría", badge: "⭐" },
  { name: "Diego Velásquez", note: "Constancia", badge: "🎯" },
];

const actionCards = ["Warm up divertido", "Juegos cooperativos"];

const attendanceRows = [
  { name: "Sofía Henríquez", time: "08:05", tag: "Falta" },
  { name: "Francisco A.", time: "08:12", tag: "Falta" },
];

const moderationQueue = {
  name: "Francisco para Sofía",
  reason: "Gracias por ayudarme con el ejercicio de física, realmente no lo entendía hasta que me lo explicaste tú.",
};

const recipeCard = {
  title: "Recetario MINEDUC",
  suggestion: "Sugerencia: \"Frustración Alta\"",
  activity: "Actividad recomendada para hoy:",
  pause: "Pausa: \"El Espejo\"",
  detail: "Dinámica de 5 min para liberar tensión corporal y reconectar.",
};

const resourceCards = [
  { label: "Atención", icon: "◉" },
  { label: "Diálogo", icon: "✦" },
  { label: "Creativa", icon: "✎" },
];

const quickTips = [
  "Saluda a cada alumno por su nombre",
  "Usa música suave durante actividades",
];

const videos = [
  { title: "Warm-Up: Fun Edition", duration: "5 min", tag: "WARM-UP" },
  { title: "Team Building", duration: "10 min", tag: "EQUIPO" },
];

type ParentIdea = {
  id: number;
  title: string;
  description: string;
  category: string;
  sender: string;
  date: string;
  status: string;
};

export default function TeacherDashboard({
  onLogout,
  initialCourse,
  initialSessionId,
}: {
  onLogout: () => void;
  initialCourse?: string;
  initialSessionId?: string;
}) {
  const [activeSection, setActiveSection] = useState(initialSessionId ? 1.1 : 0);
  const [ideaCategory, setIdeaCategory] = useState("Convivencia");
  const [selectedCourse, setSelectedCourse] = useState(initialCourse ?? "7° Básico A");
  const [session, setSession] = useState<KioskSession | null>(null);
  const [confirmFinish, setConfirmFinish] = useState(false);
  const [parentIdeas, setParentIdeas] = useState<ParentIdea[]>([]);

  useEffect(() => {
    const loadParentIdeas = () => {
      const saved = JSON.parse(localStorage.getItem("conecta-parent-ideas") ?? "[]") as ParentIdea[];
      setParentIdeas(saved);
    };
    loadParentIdeas();
    window.addEventListener("conecta-parent-idea-created", loadParentIdeas);
    return () => window.removeEventListener("conecta-parent-idea-created", loadParentIdeas);
  }, []);

  useEffect(() => {
    const courseLookup: Record<string, string> = {
      "1.1": "7° Básico A",
      "2.1": "8° Básico B",
    };

    const courseKey = Number(activeSection).toFixed(1);
    if (courseLookup[courseKey]) {
      setSelectedCourse(courseLookup[courseKey]);
    }
  }, [activeSection]);

  useEffect(() => {
    if (initialSessionId) {
      const existingSession = loadKioskSession(initialSessionId);
      if (existingSession) {
        setSession(existingSession);
        return;
      }
    }
    const nextSession = createKioskSession(selectedCourse);
    saveKioskSession(nextSession);
    setSession(nextSession);
  }, [initialSessionId, selectedCourse]);

  useEffect(() => {
    if (!session) return;
    const syncSession = (event: StorageEvent) => {
      if (event.key !== `conecta-kiosk-session:${session.id}`) return;
      const updated = loadKioskSession(session.id);
      if (updated) setSession(updated);
    };
    window.addEventListener("storage", syncSession);
    return () => window.removeEventListener("storage", syncSession);
  }, [session?.id]);

  const students = session?.students ?? [];
  const attendanceStatus = students.filter((student) => student.mood !== null).length;
  const pendingStudents = students.length - attendanceStatus;
  const recordedStudents = students.filter((student) => student.mood !== null);
  const positiveCount = recordedStudents.filter((student) => student.mood === "Feliz" || student.mood === "Bien").length;
  const tiredCount = recordedStudents.filter((student) => student.mood === "Cansado").length;
  const criticalCount = recordedStudents.filter((student) => student.mood === "Triste" || student.mood === "Enojado").length;
  const totalRecorded = recordedStudents.length;
  const percentage = (count: number) => totalRecorded ? Math.round((count / totalRecorded) * 100) : 0;
  const positivePercentage = percentage(positiveCount);
  const moodSummary = [
    { label: "Crítico", value: percentage(criticalCount), tone: "bg-[#f4d380]" },
    { label: "Bajo", value: percentage(tiredCount), tone: "bg-[#d7c7ff]" },
    { label: "Neutral", value: 0, tone: "bg-[#b4b7d8]" },
    { label: "Óptimo", value: percentage(positiveCount), tone: "bg-[#c5b7f5]" },
  ];
  const currentPedagogicalTips = totalRecorded === 0
    ? [{
        title: "Esperando registros",
        type: "Preparación",
        text: "Al finalizar la toma de emociones, aquí aparecerán actividades sugeridas según el clima real del curso.",
        accent: "bg-[#dbe1ff] text-[#1d2033]",
      }]
    : [
        ...(criticalCount > 0 ? [{
          title: "Acompañamiento cercano",
          type: "Prioridad de bienestar",
          text: `${criticalCount} estudiante${criticalCount === 1 ? " reportó tristeza o enojo" : "s reportaron tristeza o enojo"}. Propón una conversación privada y ofrece apoyo sin exponer a nadie frente al curso.`,
          accent: "bg-[#e0bf69] text-[#1d1a1a]",
        }] : []),
        ...(tiredCount > 0 ? [{
          title: "Pausa activa breve",
          type: "Regulación de energía",
          text: `${tiredCount} estudiante${tiredCount === 1 ? " reportó cansancio" : "s reportaron cansancio"}. Realiza una pausa de respiración y movimiento de 3 minutos antes de comenzar.`,
          accent: "bg-[#dbe1ff] text-[#1d2033]",
        }] : []),
        {
          title: positivePercentage >= 60 ? "Dinámica de gratitud" : "Círculo de diálogo",
          type: "Actividad sugerida",
          text: positivePercentage >= 60
            ? "Aprovecha el buen clima para compartir un logro reciente y reconocer la colaboración entre compañeros."
            : "Invita al curso a expresar qué necesita para sentirse acompañado, con participación voluntaria y escucha respetuosa.",
          accent: "bg-[#e5d8ff] text-[#1f1d2e]",
        },
      ];

  const startNewSession = () => {
    const nextSession = createKioskSession(selectedCourse);
    saveKioskSession(nextSession);
    setSession(nextSession);
    setConfirmFinish(false);
  };

  const finishSession = () => {
    if (!session) return;
    const nextSession = { ...session, status: "completed" as const, completedAt: new Date().toISOString() };
    saveKioskSession(nextSession);
    setSession(nextSession);
    setConfirmFinish(false);
  };

  const reactivateStudent = (studentId: string) => {
    if (!session) return;
    const nextStudents = session.students.map((student) =>
      student.id === studentId ? { ...student, mood: null, recordedAt: null } : student,
    );
    const nextSession: KioskSession = {
      ...session,
      students: nextStudents,
      status: "active",
      completedAt: null,
    };
    saveKioskSession(nextSession);
    setSession(nextSession);
  };

  const openKiosk = () => {
    if (!session) return;
    window.open(createKioskUrl(session), "_blank", "noopener,noreferrer");
  };

  return (
    <DashboardShell
      role="docente"
      userName="Prof. Omar Lobos"
      userTitle="Tutor 7° Año Básico A"
      course="7° Básico A"
      schoolName="Colegio Chile Norte"
      schoolRbd="12412-4"
      onLogout={onLogout}
      activeItem={activeSection}
      onActiveItemChange={setActiveSection}
    >
      {activeSection === 0 ? (
        <div className="space-y-6 text-sm">
          <div className="rounded-2xl border border-white/10 bg-[#171d2e] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-black tracking-[-0.04em] text-white md:text-3xl">
                  Hola, Prof. Omar Lobos
                </h1>
                <p className="mt-1 text-sm text-[#aeb4ca]">
                  Tutor 7° Año Básico A • Gestión del día
                </p>
              </div>

              <button
                type="button"
                onClick={onLogout}
                className="inline-flex items-center gap-2 self-start rounded-xl border border-[#7a7fd1]/40 bg-[#1a1f2d] px-4 py-2 text-sm font-medium text-[#eff2ff] transition hover:border-[#8d95ff] hover:bg-[#202847]"
              >
                <span aria-hidden="true">👥</span>
                <span>32 Estudiantes</span>
              </button>
            </div>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl border p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                  stat.accent
                    ? "border-[#8d8be8]/30 bg-[#d5d2f7] text-[#1b1b2b]"
                    : "border-[#7a7fd1]/20 bg-[#181d2b] text-white"
                }`}
              >
                <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] opacity-80">
                  <span>{stat.label}</span>
                  <span aria-hidden="true">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold tracking-[-0.06em]">{stat.value}</div>
              </div>
            ))}
          </section>

          <div className="rounded-2xl border border-[#7a7fd1]/20 bg-[#171d2e] px-5 py-4 text-[#dfe7ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span aria-hidden="true" className="text-[#9aa8ff]">✦</span>
              <span>Temperatura Emocional: El curso muestra un clima mayormente positivo hoy (74%).</span>
            </div>
          </div>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.9fr)]">
            <div className="rounded-2xl border border-[#7a7fd1]/20 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black tracking-[-0.05em] text-white">Resumen Anual Emociones</h2>
                  <p className="mt-1 text-sm text-[#9ca9c8]">Tendencias emocionales 2024</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black tracking-[-0.06em] text-white">82%</div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#aeb4ca]">
                    Bienestar promedio
                  </p>
                </div>
              </div>

              <div className="flex h-56 items-end justify-between gap-3 rounded-2xl border border-[#2e3351] bg-[#121827] px-4 pb-4 pt-5">
                {['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Sep'].map((month, index) => (
                  <div key={month} className="flex flex-1 flex-col items-center gap-3">
                    <div className="flex h-full w-full items-end justify-center">
                      <div
                        className={`w-full rounded-t-xl ${index === 3 ? 'bg-[#c5b7f5]' : 'bg-[#bfc2e3]/70'}`}
                        style={{ height: `${[42, 58, 43, 78, 61, 70][index]}%` }}
                      />
                    </div>
                    <span className="text-[0.7rem] text-[#9ca9c8]">{month}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {[
                  { emoji: '😊', value: '54%' },
                  { emoji: '😄', value: '22%' },
                  { emoji: '😐', value: '18%' },
                  { emoji: '😕', value: '6%' },
                ].map((item) => (
                  <div key={item.value} className="flex items-center justify-center gap-2 rounded-xl bg-[#121827] px-2 py-3 text-[#dfe7ff]">
                    <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                    <span className="text-xl font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-[#7a7fd1]/20 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-black tracking-[-0.05em] text-white">Alumnos Premiados</h3>
              </div>

              <div className="space-y-3">
                {praisedStudents.map((student) => (
                  <div
                    key={student.name}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#7a7fd1]/15 bg-[#1a2132] p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#d9d2ff] via-[#8da2ff] to-[#7c6ae9] text-lg font-bold text-[#181d2b]">
                        {student.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{student.name}</p>
                        <p className="truncate text-sm text-[#aeb4ca]">{student.note}</p>
                      </div>
                    </div>
                    <div className="text-xl" aria-hidden="true">{student.badge}</div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl border border-[#8d95ff]/40 bg-[#2c2f4b] px-4 py-3 text-sm font-semibold text-[#edf0ff] transition hover:bg-[#3a3e64]"
              >
                Ver Cuadro de Honor
              </button>
            </aside>
          </section>

          <section className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[2.25rem] font-black tracking-[-0.06em] text-white">Asistencia</h3>
                <button
                  type="button"
                  className="rounded-xl border border-[#a98cff]/35 bg-[#8f7be5]/15 px-4 py-2 text-[0.85rem] font-semibold text-[#e5dfff] transition hover:border-[#b6a9ff] hover:bg-[#8f7be5]/25"
                >
                  Exportar Reporte
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {attendanceRows.map((student) => (
                  <div
                    key={student.name}
                    className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d9d2ff] via-[#8da2ff] to-[#7c6ae9] text-xs font-bold text-[#181d2b]">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[1.15rem] font-semibold text-white">{student.name}</p>
                          <p className="text-[0.75rem] text-[#aeb4ca]">{student.time}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        aria-label={`Marcar ${student.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#ef5d70]/40 bg-[#d55f6d]/20 text-[0.75rem] font-bold text-[#ffb8c0]"
                      >
                        !
                      </button>
                    </div>

                    <div className="mt-4 rounded-xl bg-[#5d2d39] px-3 py-2 text-center text-base font-bold text-white">
                      {student.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-[2rem] font-black tracking-[-0.06em] text-white">Moderación Kudos</h3>
                  <span className="rounded-full bg-[#a78bfa]/20 px-2.5 py-1 text-[0.75rem] font-bold text-[#d7c6ff]">
                    4 Pendientes
                  </span>
                </div>

                <div className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d9d2ff] via-[#8da2ff] to-[#7c6ae9] text-xs font-bold text-[#181d2b]">
                      F
                    </div>
                    <p className="text-[1.05rem] font-semibold text-white">{moderationQueue.name}</p>
                  </div>

                  <p className="text-[0.95rem] leading-7 text-[#c4cde7]">“{moderationQueue.reason}”</p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="rounded-xl bg-[#b9b1ff] px-3 py-3 text-sm font-semibold text-[#1a1d32] transition hover:bg-[#c8c0ff]"
                    >
                      Autorizar
                    </button>
                    <button
                      type="button"
                      className="rounded-xl border border-white/10 bg-transparent px-3 py-3 text-sm font-semibold text-[#e5edf6] transition hover:bg-white/5"
                    >
                      Rechazar
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-3 flex items-center gap-3 text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#dfe5ff] text-[#1a1d32] text-sm">▣</span>
                  <h3 className="text-[2rem] font-black tracking-[-0.06em]">Recetario MINEDUC</h3>
                </div>

                <p className="mb-3 text-[0.98rem] font-medium text-[#dfe5ff]">Sugerencia: "Frustración Alta"</p>
                <p className="text-[0.96rem] text-[#dfe5ff]">Actividad recomendada para hoy:</p>

                <div className="mt-4 rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                  <p className="text-[1.7rem] font-black tracking-[-0.05em] text-white">Pausa: "El Espejo"</p>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[#c4cde7]">
                    Dinámica de 5 min para liberar tensión corporal y reconectar.
                  </p>

                  <div className="mt-5 flex items-center justify-between text-[#bfc9ea]">
                    <span className="inline-flex items-center gap-2 text-[0.95rem]">
                      <span>◔</span> 5 min
                    </span>
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c7bbff] text-xl text-[#171b2e] transition hover:bg-[#d6ccff]"
                      aria-label="Reproducir pausa"
                    >
                      ▶
                    </button>
                  </div>
                </div>

                <button type="button" className="mt-4 w-full text-center text-base font-medium text-[#dfe5ff] hover:text-white">
                  Ver todo el recetario
                </button>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-4 flex items-center gap-3 text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e6ebff] text-[#1a1d32] text-sm">▤</span>
                  <h3 className="text-[2rem] font-black tracking-[-0.06em]">Recursos</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {resourceCards.map((card) => (
                    <div key={card.label} className="rounded-[18px] border border-white/10 bg-[#1d2333] p-3 text-center">
                      <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2f344b] text-xl text-[#e5eaff] mx-auto">
                        {card.icon}
                      </div>
                      <p className="text-base font-medium text-white">{card.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#b6a9ff] bg-[#b6a9ff]/15 text-[#d7c6ff]">✦</span>
                  <h3 className="text-[2rem] font-black tracking-[-0.06em] text-white">Tips Rápidos</h3>
                </div>

                <div className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                  <ul className="space-y-3 text-[0.98rem] text-[#dfe7ff]">
                    {quickTips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <span className="mt-1 text-[#d7c6ff]">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#7a7fd1]/20 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h3 className="mb-4 text-xl font-black tracking-[-0.05em] text-white">Recomendaciones Basadas en Datos</h3>
            <div className="grid gap-4 lg:grid-cols-4">
              {recommendations.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#7a7fd1]/15 bg-[#1b2234] p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#dfe5ff] text-[#1f2341] text-sm font-bold">
                      {item.icon}
                    </span>
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm leading-6 text-[#b8c0d9]">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.8fr)]">
            <div className="rounded-2xl border border-[#7a7fd1]/20 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#fbbf24]" aria-hidden="true">★</span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.05em] text-white">Levanta el Ánimo</h3>
                    <p className="text-sm text-[#aeb4ca]">Actividades para mejorar el clima grupal.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#bec6df]">
                  Acciones recomendadas
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {actionCards.map((card) => (
                    <button
                      key={card}
                      type="button"
                      className="flex items-center justify-between rounded-xl border border-[#7a7fd1]/20 bg-[#1b2234] px-4 py-3 text-left text-sm font-medium text-white transition hover:border-[#8d95ff] hover:bg-[#212a3d]"
                    >
                      <span>{card}</span>
                      <span className="text-[#9adbb5]">✓</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#7a7fd1]/20 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl text-[#9aa8ff]" aria-hidden="true">◉</span>
                <h3 className="text-xl font-black tracking-[-0.05em] text-white">Videos</h3>
              </div>

              <div className="space-y-3">
                {videos.map((video) => (
                  <div key={video.title} className="flex items-center gap-3 rounded-xl border border-[#7a7fd1]/15 bg-[#1b2234] p-3">
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2b2d42] text-lg text-white transition hover:bg-[#3a3e64]"
                      aria-label={`Reproducir ${video.title}`}
                    >
                      ▶
                    </button>
                    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-white">{video.title}</p>
                      </div>
                      <div className="text-right">
                        <span className="mb-1 inline-flex rounded-md bg-[#4a3e68] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#e6d5ff]">
                          {video.tag}
                        </span>
                        <p className="mt-1 text-sm text-[#aeb4ca]">{video.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : activeSection >= 1 && activeSection < 2 ? (
        <div className="space-y-6 text-sm text-slate-200">
          <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">Profesor · Curso</div>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">{selectedCourse}</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Docente: Prof. Omar Lobos · {session?.status === "completed" ? "Sesión finalizada" : "Sesión activa"}
                </p>
              </div>

              <div className={`flex items-center gap-3 self-start rounded-full border px-3 py-2 text-sm font-medium ${session?.status === "completed" ? "border-slate-400/30 bg-slate-500/10 text-slate-200" : "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"}`}>
                <span className={`h-2.5 w-2.5 rounded-full ${session?.status === "completed" ? "bg-slate-400" : "bg-emerald-400"}`} aria-hidden="true" />
                {session?.status === "completed" ? "Sesión finalizada" : "Sesión activa"}
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
              <div className="rounded-[24px] border border-white/10 bg-[#1d2333] p-4">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">QR del kiosco</div>
                <div className="flex min-h-52 items-center justify-center rounded-[22px] border border-white/10 bg-white p-4">
                  {session ? (
                    <QRCodeSVG
                      value={createKioskUrl(session)}
                      size={184}
                      level="H"
                      marginSize={2}
                      title={`Código QR del kiosco de ${selectedCourse}`}
                    />
                  ) : (
                    <span className="text-sm text-slate-500">Preparando sesión…</span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={openKiosk}
                    disabled={!session || session.status === "completed"}
                    className="min-h-11 rounded-xl border border-violet-300/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/20 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Abrir kiosco
                  </button>
                  <button
                    type="button"
                    onClick={startNewSession}
                    className="min-h-11 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                  >
                    Generar nuevo QR
                  </button>
                  {session?.status === "active" ? (
                    <button
                      type="button"
                      onClick={() => setConfirmFinish(true)}
                      className="min-h-11 rounded-xl bg-rose-500/15 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/25"
                    >
                      Finalizar pasado de lista
                    </button>
                  ) : session ? (
                    <span className="rounded-full border border-slate-400/20 bg-slate-500/10 px-3 py-2 text-xs font-semibold text-slate-300">
                      Sesión cerrada
                    </span>
                  ) : null}
                </div>

                {session ? (
                  <div className="mt-4 rounded-xl border border-white/10 bg-[#131827] p-3 text-xs text-slate-300">
                    <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-violet-200/80">Enlace único de esta sesión</div>
                    <a className="break-all font-mono text-xs text-sky-200 underline decoration-sky-200/30 underline-offset-4" href={createKioskUrl(session)} target="_blank" rel="noreferrer">
                      {createKioskUrl(session)}
                    </a>
                    <p className="mt-2 text-[11px] text-slate-400">El QR abre esta dirección en el dispositivo que lo escanee.</p>
                  </div>
                ) : null}

                {confirmFinish ? (
                  <div role="alertdialog" aria-modal="true" aria-label="Confirmar finalización" className="mt-4 rounded-xl border border-amber-300/20 bg-amber-500/10 p-4">
                    <p className="text-sm font-semibold text-amber-100">¿Finalizar el pasado de lista?</p>
                    <p className="mt-1 text-xs text-amber-100/70">Los estudiantes pendientes no podrán registrar su emoción hasta que el docente reactive a alguien o genere otra sesión.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button type="button" onClick={finishSession} className="min-h-10 rounded-lg bg-rose-500 px-3 py-2 text-xs font-bold text-white hover:bg-rose-400">Sí, finalizar</button>
                      <button type="button" onClick={() => setConfirmFinish(false)} className="min-h-10 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-white/5">Seguir registrando</button>
                    </div>
                  </div>
                ) : null}

                <p className="mt-3 text-[11px] leading-5 text-slate-400">
                  Prototipo: el registro queda guardado localmente en este navegador. La sincronización entre dispositivos se activará al conectar la base de datos.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#1d2333] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Clima del curso</div>
                    <h3 className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">{positivePercentage}% Positivo</h3>
                    <p className="mt-1 text-sm text-slate-300">Basado en {totalRecorded} registros de esta sesión</p>
                  </div>
                  <span className="rounded-full border border-violet-300/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-100">
                    {selectedCourse}
                  </span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#2a2f46]">
                  <div className="flex h-full w-full">
                    {moodSummary.map((bar) => (
                      <div
                        key={bar.label}
                        className={`${bar.tone} h-full`}
                        style={{ width: `${bar.value}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                  {moodSummary.map((bar) => (
                    <div key={bar.label}>
                      <div className="mb-2 text-[12px] font-bold text-white">{bar.value}%</div>
                      <div>{bar.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-500/10 p-3 text-sm text-amber-100">
                  <span className="font-bold">⚠</span> {criticalCount > 0 ? `${criticalCount} estudiante${criticalCount === 1 ? "" : "s"} reportaron tristeza o enojo. Revisa el recetario pedagógico.` : "Sin alertas emocionales críticas registradas en esta sesión."}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.8fr)]">
            <section className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[2rem] font-black tracking-[-0.06em] text-white">Lista de Asistencia</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">
                  {attendanceStatus} registrados · {pendingStudents} pendientes
                </span>
              </div>

              <div className="space-y-3">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-[#1d2333] p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d9d2ff] via-[#8da2ff] to-[#7c6ae9] text-xs font-bold text-[#141827]">
                        {student.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold text-white">{student.name}</div>
                        <div className="text-xs text-slate-400">
                          {student.mood && student.recordedAt
                            ? `Registrado ${new Date(student.recordedAt).toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" })}`
                            : "Pendiente de registro"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#2a2f46] px-2.5 py-1 text-xs font-semibold text-[#dfe7ff]">
                        {student.mood
                          ? `${kioskMoods.find((mood) => mood.label === student.mood)?.emoji ?? ""} ${student.mood}`
                          : "Sin respuesta"}
                      </span>

                      {student.mood ? (
                        <button
                          type="button"
                          onClick={() => reactivateStudent(student.id)}
                          className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                        >
                          Reactivar
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[2rem] font-black tracking-[-0.06em] text-white">Recetario Pedagógico</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">Aula</span>
              </div>

              <div className="space-y-4">
                {currentPedagogicalTips.map((tip) => (
                  <div key={tip.title} className="rounded-[20px] border border-white/10 bg-[#1d2333] p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${tip.accent}`}>
                        {tip.title.slice(0, 1)}
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-400">{tip.type}</div>
                        <div className="text-lg font-bold text-white">{tip.title}</div>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{tip.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

        </div>
      ) : activeSection === 2 ? (
        <KudosPanel role="teacher" />
      ) : activeSection === 3 ? (
        <div className="grid gap-5 text-sm xl:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.75fr)]">
          <section className="min-w-0 overflow-hidden rounded-2xl border border-violet-400/30 bg-[#10101d]">
            <div className="border-b border-white/10 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xl">✦</div>
                  <div className="min-w-0">
                    <h2 className="truncate text-base font-bold text-white">Estrella</h2>
                    <p className="text-xs text-emerald-200">● Asistente docente · En línea</p>
                  </div>
                </div>
                <div className="flex gap-2 text-slate-400">
                  <button aria-label="Historial" className="rounded-lg p-2 hover:bg-white/10">↶</button>
                  <button aria-label="Más opciones" className="rounded-lg p-2 hover:bg-white/10">⋮</button>
                </div>
              </div>
            </div>
            <div className="space-y-5 p-4 sm:p-6">
              <div className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Hoy, 15:10</div>
              <div className="flex gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm">✦</div><div className="max-w-[88%] rounded-xl rounded-tl-sm border border-violet-300/10 bg-violet-500/10 p-3 text-sm leading-6 text-slate-100">Hola Martín. Detecté que el 6° Básico A presenta una baja en la participación durante las últimas clases. ¿Quieres revisar algunas estrategias para apoyar al curso?</div></div>
              <div className="flex justify-end gap-3"><div className="max-w-[88%] rounded-xl rounded-tr-sm border border-white/10 bg-white/10 p-3 text-sm leading-6 text-slate-100">Sí, me gustaría identificar qué estudiantes necesitan acompañamiento y cómo abordarlo en la próxima clase.</div><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">MP</div></div>
              <div className="flex gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm">✦</div><div className="max-w-[92%] rounded-xl rounded-tl-sm border border-violet-300/10 bg-violet-500/10 p-3 text-sm leading-6 text-slate-100">Puedo preparar un resumen privado con las señales observadas, sin exponer información sensible al curso.<div className="mt-3 rounded-lg border border-violet-300/20 bg-violet-300/10 p-3 text-xs italic text-violet-100"><span className="font-semibold not-italic">✦ Sugerencia pedagógica</span><br />Comienza con una actividad breve en parejas y ofrece una salida de apoyo individual para quienes prefieran conversar en privado.</div></div></div>
              <div className="flex flex-wrap justify-center gap-2 pt-1"><button className="rounded-full border border-violet-300/30 px-3 py-1.5 text-xs text-violet-100 hover:bg-violet-500/10">Ver resumen del curso</button><button className="rounded-full border border-violet-300/30 px-3 py-1.5 text-xs text-violet-100 hover:bg-violet-500/10">Crear estrategia de aula</button></div>
            </div>
            <div className="border-t border-white/10 bg-black/10 p-3"><div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"><button aria-label="Adjuntar" className="px-2 text-lg text-slate-400">⊕</button><input className="min-w-0 flex-1 bg-transparent px-1 text-sm text-white placeholder:text-slate-500 focus:outline-none" placeholder="Escribe un mensaje para Estrella..." /><button aria-label="Enviar mensaje" className="rounded-lg bg-violet-300 px-3 py-2 text-slate-900">➤</button></div><p className="mt-2 text-center text-[10px] text-slate-500">La información de estudiantes se muestra según tus permisos docentes.</p></div>
          </section>
          <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#17151b] p-4 sm:p-5">
            <div className="flex items-center justify-between"><h3 className="font-bold text-white">Resumen del curso</h3><span className="rounded bg-white/10 px-2 py-1 text-[9px] text-slate-300">Actualizado hoy</span></div>
            {[{ label: "Participación", value: "68%", width: "68%", tone: "bg-violet-300" }, { label: "Asistencia", value: "91%", width: "91%", tone: "bg-emerald-300" }, { label: "Alertas de apoyo", value: "3", width: "24%", tone: "bg-amber-300" }].map(item => <div key={item.label}><div className="mb-1 flex justify-between text-xs text-slate-300"><span>{item.label}</span><span>{item.value}</span></div><div className="h-1.5 rounded-full bg-white/10"><div className={`h-full rounded-full ${item.tone}`} style={{ width: item.width }} /></div></div>)}
            <div className="rounded-xl border border-amber-400/20 bg-amber-500/10 p-3"><div className="text-xs text-slate-300">Seguimiento recomendado</div><div className="mt-1 text-lg font-bold text-amber-200">3 estudiantes</div></div>
            <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-4"><div className="mb-2 font-semibold text-violet-100">✦ Insights de Estrella</div><p className="text-xs italic leading-5 text-slate-300">“La participación disminuye en actividades individuales extensas. Se recomienda alternar trabajo colaborativo y pausas activas.”</p><div className="mt-3 text-right text-[9px] uppercase text-violet-200">Analítica pedagógica v2.1</div></div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="mb-2 font-semibold text-violet-100">☷ Nota para el docente</div><p className="text-xs leading-5 text-slate-400">Revisar el registro de asistencia y conversar con orientación antes de generar una derivación.</p><div className="mt-3 text-right text-[9px] text-slate-500">Última actualización · 15:08</div></div>
            <button className="w-full rounded-xl bg-violet-300 px-3 py-3 text-sm font-semibold text-slate-900">▣ Generar resumen del curso</button>
          </aside>
        </div>
      ) : activeSection === 4 ? (
        <section className="space-y-5 text-sm">
          <div className="rounded-2xl border border-violet-400/30 bg-slate-900/70 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-violet-200/80">Participación docente</p>
                <h2 className="mt-1 text-xl font-bold text-violet-100">Caja de Ideas · 6° Básico A</h2>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em]">
                  <span className="rounded border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-violet-100">3 propuestas nuevas</span>
                  <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-300">8 en revisión</span>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-center">
                <div className="text-xl font-bold text-emerald-200">85%</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-emerald-100">Implementación</div>
              </div>
            </div>
          </div>

          {parentIdeas.length > 0 ? (
            <div className="rounded-2xl border border-emerald-400/30 bg-slate-900/70 p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div><p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200/80">Recibidas de apoderados</p><h3 className="mt-1 text-lg font-bold text-white">Propuestas para revisar</h3></div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-bold text-emerald-200">{parentIdeas.length} NUEVAS</span>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                {parentIdeas.map((idea) => (
                  <article key={idea.id} className="rounded-xl border border-white/10 bg-[#1d2333] p-3">
                    <div className="flex items-start justify-between gap-2"><span className="rounded bg-violet-500/15 px-2 py-1 text-[10px] font-semibold text-violet-100">{idea.category}</span><span className="text-[10px] text-slate-400">{idea.date}</span></div>
                    <h4 className="mt-3 font-bold text-white">{idea.title}</h4><p className="mt-1 text-sm leading-5 text-slate-300">{idea.description}</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400"><span>{idea.sender}</span><span className="rounded bg-amber-500/15 px-2 py-1 text-amber-200">{idea.status}</span></div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
            <div className="mb-4 text-base font-bold text-white">Proponer una nueva idea</div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-300"><span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Título de la idea</span><input className="w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/50 focus:outline-none" placeholder="Ej: Implementar huerto escolar..." /></label>
              <label className="text-sm text-slate-300"><span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Categoría</span><select value={ideaCategory} onChange={event => setIdeaCategory(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white focus:border-violet-400/50 focus:outline-none"><option>Convivencia</option><option>Infraestructura</option><option>Talleres</option><option>Apoyo pedagógico</option><option>Bullying (Anónimo)</option></select></label>
              <label className="text-sm text-slate-300 md:col-span-2"><span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Descripción detallada</span><textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-[#111827] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/50 focus:outline-none" placeholder="Cuéntanos más sobre tu propuesta y cómo beneficiaría a la comunidad..." /></label>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-400">Las propuestas de bullying se registran como anónimas y se derivan automáticamente a la dupla psicosocial.</p><button className="rounded-xl bg-violet-300 px-4 py-2.5 text-sm font-semibold text-slate-900">➤ Enviar propuesta</button></div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Todas', 'Convivencia', 'Bullying (Anónimo)', 'Infraestructura', 'Talleres'].map(category => <button key={category} className={`rounded-lg border px-3 py-2 text-xs ${category === 'Todas' ? 'border-violet-300 bg-violet-300 text-slate-900' : 'border-white/10 bg-white/5 text-slate-200'}`}>{category === 'Bullying (Anónimo)' ? '🔒 ' : ''}{category}</button>)}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-violet-300/30 bg-slate-900/70 p-4 sm:p-5"><div className="mb-3 flex items-start justify-between gap-3"><span className="rounded-lg bg-violet-500/20 px-2 py-1 text-[10px] font-semibold text-violet-100">Infraestructura</span><span className="text-xs text-slate-400">12 Oct, 2023</span></div><h3 className="text-base font-bold text-white">Mejorar iluminación en patio central</h3><p className="mt-2 text-sm italic leading-6 text-slate-300">“En las tardes de invierno se vuelve muy oscuro y nos sentimos inseguros en el sector de las mesas.”</p><span className="mt-4 inline-flex rounded bg-amber-500/20 px-2 py-1 text-[10px] font-semibold text-amber-200">En revisión</span></div>
            <div className="rounded-2xl border border-rose-400/30 bg-slate-900/70 p-4 sm:p-5"><div className="mb-3 flex items-start justify-between gap-3"><span className="rounded-lg bg-rose-500/20 px-2 py-1 text-[10px] font-semibold text-rose-100">🔒 Bullying (Anónimo)</span><span className="rounded bg-white/5 px-2 py-1 text-[10px] text-slate-400">Cifrado RLS</span></div><h3 className="text-base font-bold text-white">Reporte sensible derivado</h3><p className="mt-2 text-sm italic leading-6 text-slate-300">“Este reporte fue derivado automáticamente para garantizar el apoyo especializado.”</p><div className="mt-4 flex items-center justify-between"><span className="rounded bg-rose-500/20 px-2 py-1 text-[10px] font-semibold text-rose-200">Derivada</span><span className="text-[10px] uppercase tracking-[0.14em] text-rose-200">Visible solo por Dupla Psicosocial</span></div></div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-5"><div className="mb-3 flex items-start justify-between"><span className="rounded-lg bg-violet-500/20 px-2 py-1 text-[10px] font-semibold text-violet-100">Talleres</span><span className="text-xs text-slate-400">14 Oct, 2023</span></div><h3 className="text-base font-bold text-white">Taller de Robótica avanzada</h3><p className="mt-2 text-sm italic leading-6 text-slate-300">“Nos gustaría aprender a programar drones para el concurso interescolar de noviembre.”</p><span className="mt-4 inline-flex rounded bg-violet-500/20 px-2 py-1 text-[10px] font-semibold text-violet-100">Nueva</span></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-slate-900/70 p-4 sm:p-5"><div className="mb-3 flex items-start justify-between"><span className="rounded-lg bg-violet-500/20 px-2 py-1 text-[10px] font-semibold text-violet-100">Convivencia</span><span className="text-xs text-slate-400">05 Oct, 2023</span></div><h3 className="text-base font-bold text-white">Implementar sistema de reciclaje en sala</h3><p className="mt-2 text-sm italic leading-6 text-slate-300">“Poner botes diferenciados para papel y plástico. Nosotros nos encargamos de vaciarlos.”</p><span className="mt-4 inline-flex rounded bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold text-emerald-200">Implementada</span></div>
          </div>
        </section>
      ) : (
        <div className="flex min-h-[70vh] w-full items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 p-6 text-center text-sm text-slate-300">
          Contenido del módulo docente
        </div>
      )}
    </DashboardShell>
  );
}
