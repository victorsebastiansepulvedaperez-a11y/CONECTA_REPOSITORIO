import { useState } from "react";

type KudosPanelProps = {
  role: "student" | "teacher";
};

const recognitionTypes = [
  { icon: "🤝", label: "Gracias por tu ayuda" },
  { icon: "💡", label: "Gran idea en clase" },
  { icon: "❤️", label: "Buen compañero" },
  { icon: "👥", label: "Excelente trabajo en equipo" },
  { icon: "⭐", label: "Reconozco tu esfuerzo" },
  { icon: "✨", label: "Actitud positiva" },
];

const studentMedals = [
  { icon: "🏆", title: "Colaboración", detail: "Ayudaste a un compañero", date: "12 mayo 2026" },
  { icon: "⭐", title: "Participación", detail: "Participaste activamente", date: "08 mayo 2026" },
  { icon: "🎯", title: "Constancia", detail: "Cumpliste tus metas", date: "02 mayo 2026" },
];

const pendingKudos = [
  {
    id: "kudo-1",
    author: "Francisco Arancibia",
    recipient: "Sofía Carvajal",
    type: "Gran idea en clase",
    message: "Gracias por explicar el ejercicio de física y ayudarme a entenderlo.",
    date: "Hoy · 08:40",
  },
  {
    id: "kudo-2",
    author: "Camila Torres",
    recipient: "Mateo Rivera",
    type: "Excelente trabajo en equipo",
    message: "Organizó al grupo y se aseguró de que todos pudieran participar.",
    date: "Ayer · 14:20",
  },
];

const courseRewards = [
  { title: "10 minutos extra de recreo", points: 100, progress: 75 },
  { title: "Tarde de película", points: 150, progress: 75 },
  { title: "Sesión de juegos educativos", points: 120, progress: 75 },
];

export default function KudosPanel({ role }: KudosPanelProps) {
  const [showComposer, setShowComposer] = useState(false);
  const [selectedType, setSelectedType] = useState(recognitionTypes[0].label);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(pendingKudos);
  const [sentMessage, setSentMessage] = useState("");

  const isTeacher = role === "teacher";

  const sendKudo = () => {
    if (!recipient) {
      setSentMessage("Selecciona un destinatario antes de enviar el Kudo.");
      return;
    }

    setSentMessage(
      isTeacher
        ? `Kudo enviado a ${recipient}. Quedará registrado en el muro del curso.`
        : `Kudo enviado a ${recipient}. Quedará pendiente de autorización docente.`,
    );
    setShowComposer(false);
    setRecipient("");
    setMessage("");
  };

  return (
    <div className="space-y-6 text-sm text-slate-200">
      {sentMessage ? (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-100">
          {sentMessage}
        </div>
      ) : null}

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.8fr)]">
        <div className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-violet-200/80">
                {isTeacher ? "Muro de Kudos del curso" : "Mis reconocimientos"}
              </div>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">
                {isTeacher ? "Felicitaciones por autorizar" : "Medallas ganadas"}
              </h2>
              <p className="mt-1 text-slate-300">
                {isTeacher
                  ? "Revisa las buenas acciones de 7° Básico A antes de publicarlas."
                  : "Estas medallas se obtienen por tus buenas acciones y participación."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowComposer(true)}
              className="rounded-xl bg-violet-300 px-4 py-2 font-semibold text-slate-900 transition hover:bg-violet-200"
            >
              + Enviar Kudo
            </button>
          </div>

          {isTeacher ? (
            <div className="space-y-3">
              {pending.length ? (
                pending.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-[#1d2333] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-semibold text-white">
                        {item.author} <span className="text-slate-400">para</span> {item.recipient}
                      </div>
                      <span className="text-xs text-slate-400">{item.date}</span>
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-violet-200">{item.type}</div>
                    <p className="mt-2 leading-6 text-slate-300">“{item.message}”</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPending((current) => current.filter((kudo) => kudo.id !== item.id))}
                        className="rounded-xl bg-violet-300 px-3 py-2 font-semibold text-slate-900 hover:bg-violet-200"
                      >
                        Autorizar
                      </button>
                      <button
                        type="button"
                        onClick={() => setPending((current) => current.filter((kudo) => kudo.id !== item.id))}
                        className="rounded-xl border border-white/10 px-3 py-2 font-semibold text-slate-200 hover:bg-white/5"
                      >
                        Rechazar
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-slate-400">
                  No hay felicitaciones pendientes de autorización.
                </div>
              )}
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-3">
              {studentMedals.map((medal) => (
                <div key={medal.title} className="rounded-2xl border border-white/10 bg-[#1d2333] p-4">
                  <div className="text-4xl">{medal.icon}</div>
                  <div className="mt-3 font-bold text-white">{medal.title}</div>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{medal.detail}</p>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-slate-400">{medal.date}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Progreso del curso</h3>
            <span className="text-3xl font-black text-violet-200">75</span>
          </div>
          <p className="text-xs text-slate-400">Puntos colectivos acumulados para premios grupales.</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[75%] rounded-full bg-violet-300" />
          </div>
          <div className="mt-4 space-y-3">
            {courseRewards.map((reward) => (
              <div key={reward.title} className="rounded-xl border border-white/10 bg-[#1d2333] p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-white">{reward.title}</span>
                  <span className="text-xs text-violet-200">{reward.points} pts</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-violet-300" style={{ width: `${reward.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-[28px] border border-white/10 bg-[#171d2e] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Buenas acciones del curso</h3>
            <p className="mt-1 text-slate-300">
              {isTeacher
                ? "Los Kudos autorizados se suman al muro y a las medallas de cada alumno."
                : "Mira cómo avanza tu curso y celebra las buenas acciones de tus compañeros."}
            </p>
          </div>
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-100">120 Kudos</span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {["Sofía Carvajal · Colaboración", "Mateo Rivera · Participación", "Camila Torres · Actitud positiva"].map((item, index) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-[#1d2333] p-4">
              <div className="text-2xl">{["🏆", "⭐", "🎯"][index]}</div>
              <div className="mt-2 font-semibold text-white">{item}</div>
              <div className="mt-1 text-xs text-slate-400">Reconocimiento publicado en el Kudo Wall</div>
            </div>
          ))}
        </div>
      </section>

      {showComposer ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#17151b] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white">Enviar un Kudo</h3>
                <p className="mt-1 text-sm text-slate-400">Reconoce una buena acción de tu curso.</p>
              </div>
              <button type="button" onClick={() => setShowComposer(false)} className="rounded-lg px-2 py-1 text-slate-400 hover:bg-white/5">×</button>
            </div>
            <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Para quién es el Kudo
              <select
                value={recipient}
                onChange={(event) => setRecipient(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#1d2333] px-3 py-3 text-sm text-white outline-none"
              >
                <option value="">Selecciona un compañero...</option>
                {["Sofía Carvajal", "Mateo Rivera", "Camila Torres", "Francisco Arancibia"].map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </label>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {recognitionTypes.map((type) => (
                <button
                  key={type.label}
                  type="button"
                  onClick={() => setSelectedType(type.label)}
                  className={`rounded-xl border p-3 text-left transition ${selectedType === type.label ? "border-violet-300 bg-violet-500/10 text-violet-100" : "border-white/10 text-slate-200 hover:bg-white/5"}`}
                >
                  <span className="mr-2 text-xl">{type.icon}</span>{type.label}
                </button>
              ))}
            </div>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Escribe un mensaje opcional..."
              className="mt-4 min-h-20 w-full resize-none rounded-xl border border-white/10 bg-[#1d2333] p-3 text-sm text-white placeholder:text-slate-500 outline-none"
            />
            <button type="button" onClick={sendKudo} className="mt-4 w-full rounded-xl bg-violet-300 px-4 py-3 font-semibold text-slate-900 hover:bg-violet-200">
              Enviar Kudo
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
