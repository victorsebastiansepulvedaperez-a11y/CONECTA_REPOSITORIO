import { useEffect, useState } from "react";
import {
  demoStudents,
  kioskMoods,
  loadKioskSession,
  saveKioskSession,
  type KioskMood,
  type KioskSession,
} from "./kioskSession";

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
    <div className="flex min-h-screen flex-col bg-[#111015] text-[#eeeaf4]">
      <header className="flex min-h-14 items-center justify-between gap-3 border-b border-white/[0.06] bg-[#17161c] px-4 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7354bd] text-lg font-bold text-white">C</div>
          <strong className="truncate text-sm font-extrabold sm:text-base">CONECTA</strong>
          <span className="hidden text-sm text-[#a8a3b2] sm:block">· Kiosco de bienestar</span>
        </div>
        <span className="flex shrink-0 items-center gap-2 text-xs text-emerald-200">
          <i className="h-2 w-2 rounded-full bg-emerald-400" />
          Sesión {sessionFinished ? "finalizada" : "activa"}
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 pb-8 pt-8 sm:pt-12">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">{course}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.06em] text-[#f3eff8] sm:text-5xl">
            {sessionFinished ? "¡Gracias por participar!" : "¡Hola! 👋"}
          </h1>
          <p className="mt-3 text-sm text-[#c7c1ce] sm:text-base">
            {sessionFinished
              ? "El pasado de lista de este curso ya terminó."
              : "Busca tu nombre y cuéntanos cómo te sientes hoy."}
          </p>
        </div>

        <section className="mt-8 w-full rounded-[28px] border border-white/[0.08] bg-[#1b1a20] p-5 shadow-[0_16px_44px_rgba(0,0,0,0.28)] sm:p-8">
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

              <div className="mt-7 border-t border-white/[0.06] pt-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-[#bca8e8]">
                  ¿Cómo te sientes en este momento?
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {kioskMoods.map((mood) => (
                    <button
                      key={mood.label}
                      type="button"
                      disabled={!selectedStudent}
                      onClick={() => recordMood(mood.label)}
                      className="flex min-h-28 flex-col items-center justify-center gap-2 rounded-[20px] border border-white/[0.06] bg-[#27262c] px-2 transition hover:-translate-y-0.5 hover:border-[#8d7bb8] hover:bg-[#302b40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span className="text-4xl" aria-hidden="true">{mood.emoji}</span>
                      <span className="text-sm font-bold text-[#e9e4ed]">{mood.label}</span>
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

      <footer className="border-t border-white/[0.06] px-5 py-4 text-center text-[10px] font-semibold text-[#817b88]">
        CONECTA · Kiosco de bienestar · Sesión segura
      </footer>
    </div>
  );
}
