import { useState } from "react";
import { DashboardShell } from "./DashboardShell";
import KudosPanel from "./KudosPanel";

const annualSummary = [
  { label: "Ideas propuestas", value: "5", icon: "💡" },
  { label: "Medallas ganadas", value: "12", icon: "🏅" },
  { label: "Asistencia activa", value: "94%", icon: "✦" },
  { label: "Kudos recibidos", value: "8", icon: "♡" },
];

const moodHistory = [
  { day: "Lun", mood: "Bueno", value: 58, emoji: "😊" },
  { day: "Mar", mood: "Bueno", value: 52, emoji: "🙂" },
  { day: "Mié", mood: "Neutral", value: 42, emoji: "😐" },
  { day: "Jue", mood: "Bueno", value: 65, emoji: "🙂" },
  { day: "Vie", mood: "Excelente", value: 82, emoji: "😄" },
];

const badges = [
  { name: "Corazón de Cristal", date: "12 oct, 2023", description: "Resiliencia emocional y calma bajo presión académica." },
  { name: "Mente Brillante", date: "05 sep, 2023", description: "Excelencia en innovación tecnológica y resolución." },
  { name: "Compañera Empática", date: "15 ago, 2023", description: "Apoyo constante a compañeros durante exámenes." },
];

const sentKudos = [
  {
    recipient: "Mateo Salazar",
    date: "22 nov, 2023",
    category: "CREATIVIDAD",
    message: "¡Mateo, tu idea para el prototipo de robótica fue increíble! Gracias por explicarme el código base con tanta paciencia.",
  },
  {
    recipient: "Valentina Ruiz",
    date: "18 nov, 2023",
    category: "COMPAÑERISMO",
    message: "Gracias por liderar el grupo de estudio de matemáticas ayer. Haces que los temas difíciles parezcan súper simples.",
  },
];

function DashboardOverview() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-white/10 bg-[#10101d] p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Resumen anual</h1>
            <p className="text-sm text-slate-400">Tus avances y participación durante 2024</p>
          </div>
          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200">2024</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {annualSummary.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xl text-violet-200">{item.icon}</div>
              <div className="mt-2 text-2xl font-bold text-white">{item.value}</div>
              <div className="text-xs uppercase tracking-wide text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)]">
        <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-200">Resumen personal</p>
          <h2 className="mt-2 text-2xl font-bold text-white">¡Hola, Sofía!</h2>
          <p className="mt-3 text-sm text-slate-300">Puntos acumulados</p>
          <div className="mt-1 text-4xl font-bold text-violet-200">1.240</div>
          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
            <span className="text-3xl">🏅</span>
            <div><div className="text-2xl font-bold text-amber-300">12</div><div className="text-xs text-slate-400">medallas</div></div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div><h2 className="text-xl font-bold text-white">Mi estado de ánimo</h2><p className="text-sm text-slate-400">Registro docente: <span className="text-violet-200">Enfoque positivo</span></p></div>
            <span className="rounded-lg bg-violet-300 px-3 py-1.5 text-xs font-semibold text-slate-900">Diario</span>
          </div>
          <div className="mt-5 grid grid-cols-5 items-end gap-3">
            {moodHistory.map((item) => (
              <div key={item.day} className="text-center">
                <div className="mb-2 text-lg">{item.emoji}</div>
                <div className="mx-auto flex h-32 items-end justify-center"><div className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-violet-300/30 to-violet-300" style={{ height: `${item.value}%` }} /></div>
                <div className="mt-2 text-xs font-medium text-slate-300">{item.day}</div>
                <div className="text-[10px] text-slate-500">{item.mood}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
        <h2 className="text-xl font-bold text-white">Botiquín de calma</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4"><h3 className="font-semibold text-violet-100">Respiración 4-7-8</h3><p className="mt-1 text-sm text-slate-400">Inhala, mantén y exhala con la esfera.</p></div>
          <div className="rounded-xl bg-white/5 p-4"><h3 className="font-semibold text-violet-100">Sonido OM</h3><p className="mt-1 text-sm italic text-amber-200">“Soy capaz de lograr lo que me propongo”</p></div>
        </div>
      </section>
      <section className="rounded-2xl border border-white/10 bg-[#10101d] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-white">▣ Historial de Kudos enviados</h2>
          <span className="rounded-full bg-violet-500/20 px-2 py-1 text-[10px] font-bold text-violet-200">12 ENVIADOS</span>
        </div>
        <div className="mt-4 space-y-3">
          {sentKudos.map((kudo) => (
            <article key={kudo.recipient} className="rounded-xl border-l-2 border-violet-300 bg-white/5 p-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div><h3 className="text-sm font-semibold text-white">{kudo.recipient}</h3><p className="text-[10px] text-slate-500">{kudo.date}</p></div>
                <span className="rounded bg-violet-500/15 px-2 py-1 text-[9px] font-bold text-violet-200">{kudo.category}</span>
              </div>
              <p className="mt-2 text-xs italic leading-5 text-slate-300">“{kudo.message}”</p>
            </article>
          ))}
        </div>
        <button className="mt-3 w-full rounded-xl border border-dashed border-white/20 px-3 py-2.5 text-sm font-semibold text-violet-200 hover:bg-white/5">☺ Enviar un nuevo Kudo</button>
      </section>
      <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><h2 className="text-xl font-bold text-white">Mis Ideas & Propuestas</h2><p className="text-sm text-slate-400">Tus propuestas son privadas y anónimas.</p></div>
          <button className="rounded-xl bg-violet-300 px-4 py-2 text-sm font-semibold text-slate-900">＋ Nueva idea</button>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <span className="rounded-lg bg-violet-500/15 p-2 text-lg text-violet-200">♧</span>
          <div><h3 className="text-sm font-semibold text-white">Más zonas de sombra</h3><p className="text-xs text-slate-400">En revisión</p></div>
          <span className="ml-auto text-xs text-slate-400">🔒</span>
        </div>
      </section>
    </div>
  );
}

const pointRules = [
  { points: "+5 pts", label: "Cada Kudo aprobado", icon: "♡" },
  { points: "+10 pts", label: "80% del curso con ánimo positivo", icon: "☻" },
  { points: "+15 pts", label: "Logro grupal en actividades", icon: "♟" },
  { points: "+20 pts", label: "Semana sin atrasos", icon: "🛡" },
  { points: "+25 pts", label: "Reconocimiento de dirección", icon: "✥" },
  { points: "+30 pts", label: "Meta mensual cumplida", icon: "⚑" },
];

const availableRewards = [
  { name: "Música en Clase", description: "Escuchar música suave mientras trabajan por 15 minutos", cost: 100, current: 75, icon: "♫", unlocked: true },
  { name: "10 Minutos Extra", description: "El curso gana 10 minutos adicionales de recreo", cost: 150, current: 75, icon: "◴", unlocked: false },
  { name: "Tarde de Película", description: "Ver una película educativa en clase", cost: 250, current: 75, icon: "▣", unlocked: false },
  { name: "Sesión de Juegos", description: "30 minutos de juegos educativos en equipo", cost: 120, current: 75, icon: "⌁", unlocked: false },
  { name: "Actividad Especial", description: "El curso elige una actividad especial creativa", cost: 180, current: 75, icon: "◉", unlocked: false },
  { name: "Día sin Tarea", description: "Un día completo sin tareas para la casa", cost: 200, current: 75, icon: "▤", unlocked: false },
];

function MedalsSection() {
  return (
    <div className="space-y-5">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-white">Mis puntos y premios</h1><p className="mt-1 text-sm text-slate-400">Sigue esforzándote para desbloquear beneficios para ti y tu clase.</p></div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-right"><p className="text-[10px] uppercase tracking-wide text-slate-400">Puntos totales</p><strong className="text-2xl text-violet-200">1.245</strong><span className="ml-1 text-xs text-slate-400">pts</span></div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#10101d] p-4 sm:p-5">
        <h2 className="text-lg font-bold text-white">◎ ¿Cómo ganar puntos?</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {pointRules.map((rule) => <div key={rule.points + rule.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-3"><div className="flex items-center gap-3"><span className="text-lg text-violet-300">{rule.icon}</span><div><strong className="text-sm text-violet-200">{rule.points}</strong><p className="text-xs text-slate-400">{rule.label}</p></div></div></div>)}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-white">♙ Premios disponibles</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {availableRewards.map((reward) => {
            const progress = Math.min(100, (reward.current / reward.cost) * 100);
            return <article key={reward.name} className={`rounded-2xl border p-4 ${reward.unlocked ? "border-violet-300/50 bg-violet-500/10" : "border-white/10 bg-[#10101d]"}`}>
              <div className="flex items-start justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-2xl text-violet-200">{reward.icon}</span><span className="text-sm text-slate-500">{reward.unlocked ? "⚡" : "🔒"}</span></div>
              <h3 className="mt-4 text-center text-lg font-bold text-white">{reward.name}</h3><p className="mt-1 min-h-10 text-center text-xs text-slate-400">{reward.description}</p>
              <div className="mx-auto mt-3 w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-300">{reward.cost} puntos</div>
              <div className="mt-4 flex justify-between text-[10px] font-semibold text-slate-300"><span>{reward.current}/{reward.cost} pts</span>{reward.unlocked && <span className="text-violet-300">¡Casi! 🚀</span>}</div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" style={{ width: `${progress}%` }} /></div>
              <p className="mt-2 text-center text-[10px] italic text-slate-400">Faltan {Math.max(0, reward.cost - reward.current)} pts</p>
            </article>;
          })}
        </div>
      </section>
    </div>
  );
}

const ideaCategories = ["Convivencia", "Bullying", "Infraestructura", "Talleres"];

const initialIdeas = [
  { category: "Infraestructura", title: "Mejora de iluminación en patio central", description: "El patio central está muy oscuro durante las actividades vespertinas. Propongo instalar luces LED solares en los pilares principales.", date: "12 octubre, 2023", status: "En revisión" },
  { category: "Talleres", title: "Taller de Robótica Competitiva", description: "Muchos estudiantes están interesados en robótica pero no hay un equipo formal. Sería genial tener un espacio semanal.", date: "05 septiembre, 2023", status: "Implementada" },
  { category: "Convivencia", title: "Buzón de gratitud semanal", description: "Implementar un sistema donde podamos dejar notas positivas anónimas para nuestros compañeros o profesores.", date: "28 agosto, 2023", status: "Recibida" },
];

function IdeasSection() {
  const [category, setCategory] = useState("Convivencia");
  const [description, setDescription] = useState("");
  const [ideas, setIdeas] = useState(initialIdeas);
  const [notice, setNotice] = useState("");

  const submitIdea = () => {
    const text = description.trim();
    if (!text) {
      setNotice("Describe tu idea antes de enviarla.");
      return;
    }

    setIdeas((current) => [
      { category, title: text.length > 48 ? `${text.slice(0, 48)}…` : text, description: text, date: "Hoy", status: "Recibida" },
      ...current,
    ]);
    setDescription("");
    setNotice("Tu propuesta fue enviada de forma anónima.");
  };

  const statusTone: Record<string, string> = {
    "En revisión": "text-amber-200",
    Implementada: "text-emerald-300",
    Recibida: "text-violet-200",
  };

  return (
    <div className="space-y-5">
      <section>
        <h1 className="text-2xl font-bold text-white">Ideas & Propuestas</h1>
        <p className="mt-1 text-sm text-slate-400">Propón mejoras para tu comunidad escolar de forma segura y anónima.</p>
      </section>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
        <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-white">⊕ Nueva propuesta</h2>
            <span className="rounded-full bg-violet-500/15 px-2 py-1 text-[10px] font-bold text-violet-200">🔒 100% ANÓNIMO</span>
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">Categoría de la propuesta</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {ideaCategories.map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`rounded-xl border px-3 py-3 text-xs font-semibold transition ${category === item ? "border-violet-300 bg-violet-500/20 text-violet-100" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}>{item}</button>
            ))}
          </div>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-400" htmlFor="student-idea">Describe tu idea</label>
          <textarea id="student-idea" value={description} onChange={(event) => setDescription(event.target.value)} className="mt-2 min-h-32 w-full resize-y rounded-xl border border-white/10 bg-black/10 p-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-300/60" placeholder="Escribe aquí tu propuesta detalladamente..." />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500">ⓘ Tu identidad será reemplazada por un hash único.</p>
            <button onClick={submitIdea} className="rounded-xl bg-violet-300 px-5 py-2.5 text-sm font-semibold text-slate-900">Enviar propuesta</button>
          </div>
          {notice && <p className="mt-3 text-xs text-violet-200">{notice}</p>}
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
          <div className="flex items-center justify-between gap-3"><h2 className="text-lg font-bold text-white">Mis ideas enviadas</h2><span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">{ideas.length} TOTAL</span></div>
          <div className="mt-4 space-y-3">
            {ideas.map((idea) => <article key={`${idea.title}-${idea.date}`} className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="flex items-start justify-between gap-2"><div><p className="text-[9px] font-bold uppercase tracking-wide text-violet-300">{idea.category}</p><h3 className="mt-1 text-sm font-semibold text-white">{idea.title}</h3></div><span className={`text-[10px] font-bold ${statusTone[idea.status] ?? "text-slate-300"}`}>{idea.status}</span></div><p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{idea.description}</p><p className="mt-2 text-[10px] text-slate-500">{idea.date} · 🔒 Anónima</p></article>)}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-violet-300/20 bg-violet-500/5 p-5">
        <h2 className="font-bold text-violet-100">🛡 Garantía de privacidad</h2>
        <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-300">Todas las propuestas son cifradas de extremo a extremo mediante el protocolo FLS de Conecta V2 Pro. Ni siquiera los administradores del sistema pueden rastrear el origen de tu propuesta. Solo el Director y tu Tutor podrán verla en contenido para su evaluación.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#10101d] p-5">
        <h2 className="text-lg font-bold text-white">💡 ¿Para qué puedo usar esto?</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {["Compartir ideas para mejorar las clases o el ambiente del curso", "Expresar una preocupación sobre algo que está pasando", "Contar algo que te cuesta decir en persona", "Hacer una pregunta que te da vergüenza hacer en clase"].map((item, index) => <div key={item} className="rounded-xl bg-white/5 p-3 text-sm text-slate-300"><span className="mr-2 text-xs font-bold text-violet-300">0{index + 1}.</span>{item}</div>)}
        </div>
      </section>
    </div>
  );
}

function ChatSection() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "star", text: "Hola Sofía, he notado que has estado conectada hasta tarde repasando tus materiales de estudio. ¿Cómo te sientes con los exámenes finales que se aproximan?" },
    { from: "student", text: "Hola Estrella. La verdad es que me siento bastante abrumada. Siento que por más que estudio, no es suficiente. Me da miedo fallar." },
    { from: "star", text: "Es comprensible sentirse así, Sofía. ¡Respiremos profundo! Recuerda que eres muy capaz." },
  ]);

  const sendMessage = () => {
    const text = message.trim();
    if (!text) return;
    setMessages((current) => [...current, { from: "student", text }]);
    setMessage("");
  };

  return (
    <div className="space-y-5">
      <section><h1 className="text-2xl font-bold text-white">Bienvenida, Sofía ✨</h1><p className="mt-1 text-sm text-slate-400">Estamos aquí para apoyarte en tu camino escolar.</p></section>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
        <section className="flex min-h-[620px] flex-col rounded-2xl border border-white/10 bg-[#10101d]">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-xl">✦</span><div><h2 className="font-bold text-white">Estrella</h2><p className="text-xs text-emerald-200">● Consejera virtual · En línea</p></div></div>
            <div className="flex gap-2 text-slate-400"><button aria-label="Historial" className="rounded-lg p-2 hover:bg-white/10">↶</button><button aria-label="Más opciones" className="rounded-lg p-2 hover:bg-white/10">⋮</button></div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
            <div className="text-center text-[10px] font-bold uppercase tracking-wide text-slate-500">Hoy, 14:32</div>
            {messages.map((item, index) => <div key={`${item.from}-${index}`} className={`flex gap-3 ${item.from === "student" ? "justify-end" : ""}`}><span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${item.from === "star" ? "bg-violet-500/20" : "bg-slate-700"}`}>{item.from === "star" ? "✦" : "SC"}</span><div className={`max-w-[85%] rounded-xl p-3 text-sm leading-6 text-slate-100 ${item.from === "student" ? "rounded-tr-sm bg-white/10" : "rounded-tl-sm bg-violet-500/10"}`}>{item.text}{item.from === "star" && index === 2 && <div className="mt-3 rounded-lg border border-violet-300/20 bg-violet-300/10 p-3 text-xs italic text-violet-100"><span className="font-semibold not-italic">✦ Tip de Bienestar</span><br />Prueba la técnica de estudio “Pomodoro”: 25 minutos de enfoque total y 5 minutos de descanso. ¡Te ayudará a no saturarte!</div>}</div></div>)}
            <div className="flex flex-wrap justify-center gap-2 pt-1"><button onClick={() => setMessage("Me gustaría intentar el Pomodoro")} className="rounded-full border border-violet-300/30 px-3 py-1.5 text-xs text-violet-100">Me gustaría intentar el Pomodoro</button><button onClick={() => setMessage("¿Qué más puedo hacer?")} className="rounded-full border border-violet-300/30 px-3 py-1.5 text-xs text-violet-100">¿Qué más puedo hacer?</button></div>
          </div>
          <div className="border-t border-white/10 bg-black/10 p-3"><div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"><button aria-label="Adjuntar" className="px-2 text-lg text-slate-400">⊕</button><input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => event.key === "Enter" && sendMessage()} className="min-w-0 flex-1 bg-transparent px-1 text-sm text-white placeholder:text-slate-500 focus:outline-none" placeholder="Escribe un mensaje para Estrella..." /><button onClick={sendMessage} aria-label="Enviar mensaje" className="rounded-lg bg-violet-300 px-3 py-2 text-slate-900">➤</button></div><p className="mt-2 text-center text-[10px] text-slate-500">Tus conversaciones son privadas y confidenciales.</p></div>
        </section>
        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#17151b] p-4 sm:p-5">
          <div className="flex items-center justify-between"><h2 className="font-bold text-white">Evaluación Clínica (UTA)</h2><span className="rounded bg-white/10 px-2 py-1 text-[9px] text-slate-300">Actualizado hoy</span></div>
          {[{ label: "Autoestima", value: "72%", tone: "bg-violet-300" }, { label: "Ansiedad", value: "45%", tone: "bg-amber-300" }, { label: "Bullying", value: "0%", tone: "bg-emerald-300" }].map((item) => <div key={item.label}><div className="mb-1 flex justify-between text-xs text-slate-300"><span>{item.label}</span><span>{item.value}</span></div><div className="h-1.5 rounded-full bg-white/10"><div className={`h-full rounded-full ${item.tone}`} style={{ width: item.value }} /></div></div>)}
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3"><div className="text-xs text-slate-300">Riesgo Vital</div><div className="mt-1 text-lg font-bold text-emerald-300">🛡 NULO</div></div>
          <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-4"><div className="mb-2 font-semibold text-violet-100">✦ Insights de Estrella</div><p className="text-xs italic leading-5 text-slate-300">“Sofía muestra una fuerte correlación entre rendimiento académico y percepción de valor propio. Se recomienda reforzar autocompasión.”</p><div className="mt-3 text-right text-[9px] uppercase text-violet-200">Analítica predictiva v2.1</div></div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="mb-2 font-semibold text-violet-100">☷ Notas del especialista</div><p className="text-xs leading-5 text-slate-400">Sofía ha mostrado un incremento leve en ansiedad académica durante la sesión de hoy. Se recomienda seguimiento de su técnica Pomodoro en el próximo control.</p><div className="mt-3 text-right text-[9px] text-slate-500">Registrado por Dr. Valenzuela · 14:45</div></div>
          <button className="w-full rounded-xl bg-violet-300 px-3 py-3 text-sm font-semibold text-slate-900">▣ Generar reporte UTA</button>
        </aside>
      </div>
    </div>
  );
}

function StudentKudosHistory() {
  return (
    <div className="space-y-5">
      <section><h1 className="text-2xl font-bold text-white">Historial de kudos enviados</h1><p className="mt-1 text-sm text-slate-400">Reconocimientos que has compartido con tus compañeros.</p></section>
      <div className="space-y-3">{sentKudos.map((kudo) => <article key={kudo.recipient} className="rounded-2xl border border-white/10 bg-[#10101d] p-4"><div className="flex flex-wrap items-start justify-between gap-2"><div><h2 className="font-semibold text-white">{kudo.recipient}</h2><p className="text-xs text-slate-500">{kudo.date}</p></div><span className="rounded bg-violet-500/15 px-2 py-1 text-[10px] font-bold text-violet-200">{kudo.category}</span></div><p className="mt-3 text-sm italic text-slate-300">“{kudo.message}”</p></article>)}</div>
    </div>
  );
}

export default function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  const [showConfig, setShowConfig] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const content = activeSection === 0 ? <DashboardOverview /> : activeSection === 1 ? <MedalsSection /> : activeSection === 2 ? <><StudentKudosHistory /><KudosPanel role="student" /></> : activeSection === 3 ? <IdeasSection /> : <ChatSection />;

  return (
    <DashboardShell role="estudiante" userName="Sofía Carvajal" userTitle="7° Año Básico A" course="7° Básico A" schoolName="Colegio Chile Norte" schoolRbd="12412-4" onLogout={onLogout} activeItem={activeSection} onActiveItemChange={setActiveSection}>
      <div className="flex flex-wrap items-center justify-end gap-2 pb-4">
        <button onClick={() => setShowConfig(true)} className="rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-100">Configuración</button>
        <button onClick={onLogout} className="rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-100">Cerrar sesión</button>
      </div>
      {showConfig && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowConfig(false)}><div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6 text-slate-200" onClick={(event) => event.stopPropagation()}><h2 className="text-lg font-bold text-white">Configuración del estudiante</h2><p className="mt-2 text-sm text-slate-400">La configuración personal estará disponible próximamente.</p><button onClick={() => setShowConfig(false)} className="mt-5 rounded-lg bg-violet-300 px-4 py-2 text-sm font-semibold text-slate-900">Cerrar</button></div></div>}
      {content}
    </DashboardShell>
  );
}
