import { useEffect, useState } from "react";
import {
  demoStudents,
  kioskMoods,
  loadKioskSession,
  saveKioskSession,
  type KioskMood,
  type KioskSession,
} from "./kioskSession";

const moodStyles: Record<KioskMood, string> = {
  Feliz: "border-amber-200/15 bg-amber-300/[0.08] hover:border-amber-200/40 hover:bg-amber-300/[0.14]",
  Bien: "border-emerald-200/15 bg-emerald-300/[0.08] hover:border-emerald-200/40 hover:bg-emerald-300/[0.14]",
  Cansado: "border-sky-200/15 bg-sky-300/[0.08] hover:border-sky-200/40 hover:bg-sky-300/[0.14]",
  Triste: "border-indigo-200/15 bg-indigo-300/[0.08] hover:border-indigo-200/40 hover:bg-indigo-300/[0.14]",
  Enojado: "border-rose-200/15 bg-rose-300/[0.08] hover:border-rose-200/40 hover:bg-rose-300/[0.14]",
};

function createLinkedDemoSession(sessionId: string, course: string): KioskSession {
  return {
    id: sessionId,
    course,
    status: "active",
    startedAt: new Date().toISOString(),
    completedAt: null,
    students: demoStudents.map((student) => ({
      ...student,
      mood: null,
      recordedAt: null,
    })),
  };
}

export default function KioskPage() {
  const query = new URLSearchParams(window.location.search);
  const legacyPathId = window.location.pathname.split("/").filter(Boolean)[1] ?? "";
  const sessionId = query.get("kiosco") ?? legacyPathId;
  const course = query.get("curso") ?? "Curso";
  const [session, setSession] = useState<KioskSession | null>(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [confirmFinish, setConfirmFinish] = useState(false);

  useEffect(() => {
    if (!sessionId) return;
    const saved = loadKioskSession(sessionId);
    const initial = saved ?? createLinkedDemoSession(sessionId, course);
    if (!saved) saveKioskSession(initial);
    setSession(initial);
  }, [course, sessionId]);

  useEffect(() => {
    if (!sessionId) return;
    const syncSession = (event: StorageEvent) => {
      if (event.key !== `conecta-kiosk-session:${sessionId}`) return;
      const updated = loadKioskSession(sessionId);
      if (updated) setSession(updated);
    };
    window.addEventListener("storage", syncSession);
    return () => window.removeEventListener("storage", syncSession);
  }, [sessionId]);

  const availableStudents = session?.students.filter((student) => !student.mood) ?? [];
  const sessionFinished = session?.status === "completed";

  function returnToTeacherCourse() {
    if (!session) return;
    const url = new URL("/", window.location.origin);
    url.searchParams.set("docente", "1");
    url.searchParams.set("curso", session.course);
    url.searchParams.set("sesion", session.id);
    window.location.assign(url.toString());
  }

  useEffect(() => {
    if (!sessionFinished) return;
    const timeout = window.setTimeout(returnToTeacherCourse, 1800);
    return () => window.clearTimeout(timeout);
  }, [sessionFinished, session?.id]);

  function recordMood(mood: KioskMood) {
    if (!session || !selectedStudent || session.status !== "active") return;

    const recordedAt = new Date().toISOString();
    const students = session.students.map((student) =>
      student.id === selectedStudent ? { ...student, mood, recordedAt } : student,
    );
    const completed = students.every((student) => student.mood !== null);
    const nextSession: KioskSession = {
      ...session,
      students,
      status: completed ? "completed" : "active",
      completedAt: completed ? recordedAt : null,
    };

    saveKioskSession(nextSession);
    setSession(nextSession);
    setSelectedStudent("");
    setConfirmation("¡Listo! Tu emoción quedó registrada.");
  }

  function finishSession() {
    if (!session || session.status === "completed") return;

    const nextSession: KioskSession = {
      ...session,
      status: "completed",
      completedAt: new Date().toISOString(),
    };
    saveKioskSession(nextSession);
    setSession(nextSession);
    setSelectedStudent("");
    setConfirmFinish(false);
  }

  if (!sessionId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#111015] p-6 text-center text-white">
        <div className="max-w-md rounded-3xl border border-white/10 bg-[#1b1a20] p-8">
          <div className="text-4xl">🔗</div>
          <h1 className="mt-4 text-2xl font-bold">Enlace de sesión no válido</h1>
          <p className="mt-2 text-sm text-slate-300">Solicita al docente que genere un nuevo código QR.</p>
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#111015] p-6 text-center text-white">
        <p role="status" className="text-sm text-slate-300">Cargando sesión del kiosco…</p>
      </main>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#111015] text-[#eeeaf4]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-40 h-80 w-80 rounded-full bg-violet-500/[0.12] blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-3xl" />
      </div>

      <header className="relative flex min-h-16 items-center justify-between gap-3 border-b border-white/[0.07] bg-[#17161c]/80 px-4 backdrop-blur-xl sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-300 to-indigo-500 text-lg font-black text-[#171320] shadow-lg shadow-violet-950/30">C</div>
          <div className="min-w-0">
            <strong className="block truncate text-sm font-extrabold tracking-wide sm:text-base">CONECTA</strong>
            <span className="block truncate text-[10px] font-medium text-[#a8a3b2] sm:text-xs">Kiosco de bienestar</span>
          </div>
        </div>
        <span className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold sm:text-xs ${sessionFinished ? "border-slate-300/15 bg-white/[0.04] text-slate-300" : "border-emerald-300/15 bg-emerald-300/[0.07] text-emerald-200"}`}>
          <i className={`h-2 w-2 rounded-full ${sessionFinished ? "bg-slate-400" : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"}`} />
          Sesión {sessionFinished ? "finalizada" : "activa"}
        </span>
      </header>

      <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200/15 bg-violet-300/[0.07] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-100 sm:text-xs">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-300" />
            {course}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.06em] text-[#f8f5fc] sm:text-5xl">
            {sessionFinished ? "¡Gracias por participar!" : "¡Hola! 👋"}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#c7c1ce] sm:text-base">
            {sessionFinished
              ? "El pasado de lista de este curso ya terminó."
              : "Busca tu nombre y cuéntanos cómo te sientes hoy."}
          </p>
        </div>

        <section className="mt-8 w-full rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#211e29] via-[#1b1a20] to-[#181820] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-8">
          {sessionFinished ? (
            <div className="py-8 text-center">
              <span className="text-5xl">🌟</span>
              <p className="mt-4 text-lg font-bold">Registro completado</p>
              <p className="mt-2 text-sm text-slate-400">Gracias por participar. Volviendo al curso docente…</p>
              <button
                type="button"
                onClick={returnToTeacherCourse}
                className="mt-6 min-h-11 rounded-xl bg-violet-300 px-5 py-3 text-sm font-bold text-[#201832] transition hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200"
              >
                Volver al curso docente ahora
              </button>
            </div>
          ) : availableStudents.length === 0 ? (
            <div className="py-8 text-center">
              <span className="text-5xl">🎉</span>
              <p className="mt-4 text-lg font-bold">¡Todo el curso participó!</p>
              <p className="mt-2 text-sm text-slate-400">El pasado de lista se cerró automáticamente.</p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label htmlFor="kiosk-student" className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#bca8e8]">
                  ¿Quién eres?
                </label>
                <span className="text-[10px] text-[#a8a3b2]">
                  {availableStudents.length} {availableStudents.length === 1 ? "nombre disponible" : "nombres disponibles"}
                </span>
              </div>
              <select
                id="kiosk-student"
                value={selectedStudent}
                onChange={(event) => {
                  setSelectedStudent(event.target.value);
                  setConfirmation("");
                }}
                className="mt-3 min-h-14 w-full rounded-xl border border-white/[0.12] bg-[#0f0e13] px-4 py-3 text-base font-bold text-[#eeeaf4] outline-none transition focus:border-[#9c83ff] focus:ring-2 focus:ring-[#8065e8]/30 sm:px-6"
              >
                <option value="">-- Elige tu nombre de la lista --</option>
                {availableStudents.map((student) => (
                  <option key={student.id} value={student.id}>{student.name}</option>
                ))}
              </select>

              <div className="mt-7 border-t border-white/[0.08] pt-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-[#d1bfff]">
                  ¿Cómo te sientes en este momento?
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {kioskMoods.map((mood) => (
                    <button
                      key={mood.label}
                      type="button"
                      disabled={!selectedStudent}
                      onClick={() => recordMood(mood.label)}
                      className={`group flex min-h-28 flex-col items-center justify-center gap-2 rounded-[20px] border px-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:shadow-none ${moodStyles[mood.label]}`}
                    >
                      <span className="text-4xl transition-transform duration-200 group-hover:scale-110" aria-hidden="true">{mood.emoji}</span>
                      <span className="text-sm font-bold text-[#f0ecf5]">{mood.label}</span>
                    </button>
                  ))}
                </div>
                {confirmation ? (
                  <p role="status" className="mt-4 rounded-xl bg-emerald-500/10 px-4 py-3 text-center text-sm font-semibold text-emerald-200">
                    {confirmation}
                  </p>
                ) : (
                  <p className="mt-4 text-center text-xs text-slate-400">
                    Selecciona tu nombre; al tocar una emoción se registrará automáticamente.
                  </p>
                )}
              </div>
            </>
          )}

          {!sessionFinished && availableStudents.length > 0 ? (
            <div className="mt-7 border-t border-white/[0.06] pt-5">
              {confirmFinish ? (
                <div role="alertdialog" aria-modal="true" aria-labelledby="finish-session-title" className="rounded-2xl border border-amber-300/20 bg-amber-500/10 p-4">
                  <h2 id="finish-session-title" className="text-sm font-bold text-amber-100">¿Cerrar el pasado de lista?</h2>
                  <p className="mt-1 text-xs leading-5 text-amber-100/80">
                    Se guardarán los registros realizados y los {availableStudents.length} estudiantes pendientes quedarán sin respuesta. Ya no podrán registrar emociones en esta sesión.
                  </p>
                  <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setConfirmFinish(false)}
                      className="min-h-11 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                    >
                      Volver al kiosco
                    </button>
                    <button
                      type="button"
                      onClick={finishSession}
                      className="min-h-11 rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-rose-400"
                    >
                      Confirmar y guardar
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmFinish(true)}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-violet-300/20 bg-[#3b354c] px-4 py-3 text-sm font-bold text-[#eee7ff] transition hover:bg-[#49415d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
                >
                  <span aria-hidden="true">✓</span>
                  Finalizar y guardar pasado de lista
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">Docente</span>
                </button>
              )}
            </div>
          ) : null}
        </section>

        <p className="mt-5 max-w-xl text-center text-[11px] leading-5 text-slate-500">
          Prototipo: los registros se guardan en este dispositivo. La sincronización entre dispositivos y la base de datos se conectarán en la siguiente etapa.
        </p>
      </main>

      <footer className="relative border-t border-white/[0.06] bg-[#17161c]/60 px-5 py-4 text-center text-[10px] font-semibold tracking-wide text-[#817b88]">
        CONECTA · Kiosco de bienestar · Sesión segura
      </footer>
    </div>
  );
}
