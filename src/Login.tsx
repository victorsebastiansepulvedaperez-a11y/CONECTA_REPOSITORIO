import { useState, useEffect, useRef } from "react";

/* ════════════════════════════════════════════════════════════════════════
   CONECTA PRO — Login Screen
   Referencia: dark cósmico · tarjeta sin bordes · header horizontal
   Estados: idle · focused · error · loading · success
   ════════════════════════════════════════════════════════════════════════ */

type LoginState = "idle" | "loading" | "error" | "success";

/* ─── Ícono circular de CONECTA (cerebro tecnológico) ─────────────────── */
function ConnectaIcon({ size = 72 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bg1" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="55%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0F0E24" />
        </radialGradient>
        <radialGradient id="glow1" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heartInner" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#A5B4FC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
        </radialGradient>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx="36" cy="36" r="34" fill="url(#bg1)" />
      <circle cx="36" cy="36" r="34" stroke="rgba(129,140,248,0.35)" strokeWidth="1" fill="none" />
      <circle cx="36" cy="36" r="30" stroke="rgba(129,140,248,0.12)" strokeWidth="0.5" fill="none" />

      {/* Inner glow blob */}
      <circle cx="36" cy="30" r="20" fill="url(#glow1)" />

      {/* Brain shape */}
      <path
        d="M36 12 C27 12 20 18 19 26 C16 24 13 27 13 32 C13 37 16 40 19 40
           C18 44 19 49 23 51 C25 55 30 57 35 56 L35 59 L37 59 L37 56
           C42 57 47 55 49 51 C53 49 54 44 53 40 C56 40 59 37 59 32
           C59 27 56 24 53 26 C52 18 45 12 36 12Z"
        fill="rgba(99,102,241,0.55)"
        filter="url(#softGlow)"
      />

      {/* Brain hemisphere divider */}
      <path d="M36 14 L36 58" stroke="rgba(165,180,252,0.2)" strokeWidth="0.7" strokeDasharray="2.5 2" />

      {/* Neural lines left */}
      <path d="M22 26 Q17 31 19 37 Q21 43 26 45" stroke="rgba(165,180,252,0.4)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M18 34 Q22 36 24 32" stroke="rgba(165,180,252,0.25)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M20 48 Q24 50 26 54" stroke="rgba(165,180,252,0.3)" strokeWidth="0.7" fill="none" strokeLinecap="round" />

      {/* Neural lines right */}
      <path d="M50 26 Q55 31 53 37 Q51 43 46 45" stroke="rgba(165,180,252,0.4)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M54 34 Q50 36 48 32" stroke="rgba(165,180,252,0.25)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M52 48 Q48 50 46 54" stroke="rgba(165,180,252,0.3)" strokeWidth="0.7" fill="none" strokeLinecap="round" />

      {/* Neural nodes */}
      {[[22,26],[26,45],[19,37],[20,48],[50,26],[46,45],[53,37],[52,48],[30,20],[42,20]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.4" fill="rgba(165,180,252,0.7)" />
      ))}

      {/* Crystal heart */}
      <path
        d="M36 50 L26 39 L28 31 L36 27 L44 31 L46 39 Z"
        fill="url(#heartInner)"
        opacity="0.88"
      />
      <path d="M36 27 L36 50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <path d="M26 39 L46 39" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <path d="M28 31 L44 31" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

      {/* Universe stars in heart */}
      {[[33,35,0.9],[39,37,0.7],[36,41,0.85],[34,40,0.5],[38,34,0.6],[36,44,0.5],[37,38,0.4]].map(([x,y,op],i)=>(
        <circle key={i} cx={x} cy={y} r={i%3===0?0.8:0.45} fill="#6EE7B7" opacity={op} />
      ))}
      <circle cx="36" cy="39" r="3.5" fill="rgba(110,231,183,0.18)" />

      {/* Metallic rim highlight */}
      <path
        d="M36 3 A33 33 0 0 1 63 20"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── Eye toggle ───────────────────────────────────────────────────────── */
function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
    </svg>
  );
}

/* ─── Spinner ──────────────────────────────────────────────────────────── */
function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Shield icon ──────────────────────────────────────────────────────── */
function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M8 .5l6 2.25v4.5A6.75 6.75 0 018 15.5 6.75 6.75 0 012 7.25v-4.5L8 .5zm0 1.15L3 3.5v3.75A5.75 5.75 0 008 14.5a5.75 5.75 0 005-7.25V3.5L8 1.65z" />
      <path d="M7.25 9.5L5.5 7.75l.75-.75 1 1 2.5-2.5.75.75-3.25 3.25z" />
    </svg>
  );
}

/* ─── Input field — dark themed ────────────────────────────────────────── */
function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  disabled,
  icon,
  right,
  onFocus,
  onBlur,
  isFocused,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  disabled?: boolean;
  icon: React.ReactNode;
  right?: React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  isFocused?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[10px] font-bold tracking-[0.15em] uppercase"
        style={{ color: error ? "#FCA5A5" : "rgba(255,255,255,0.45)" }}
      >
        {label}
      </label>
      <div className="relative">
        {/* Left icon */}
        <span
          className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: isFocused ? "rgba(167,139,250,0.85)" : error ? "rgba(252,165,165,0.7)" : "rgba(255,255,255,0.28)" }}
        >
          {icon}
        </span>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full h-12 pl-11 pr-11 text-[13px] rounded-[10px] transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: isFocused
              ? "rgba(99,102,241,0.1)"
              : error
              ? "rgba(239,68,68,0.07)"
              : "rgba(255,255,255,0.055)",
            border: `1px solid ${
              error
                ? "rgba(252,165,165,0.55)"
                : isFocused
                ? "rgba(129,140,248,0.65)"
                : "rgba(255,255,255,0.1)"
            }`,
            boxShadow: isFocused
              ? "0 0 0 3px rgba(99,102,241,0.14), inset 0 1px 0 rgba(255,255,255,0.04)"
              : error
              ? "0 0 0 3px rgba(239,68,68,0.1)"
              : "inset 0 1px 0 rgba(255,255,255,0.04)",
            color: "#F1F5F9",
          }}
        />
        {right && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {right}
          </span>
        )}
      </div>
      {error && (
        <p className="flex items-center gap-1.5 text-[11px]" style={{ color: "#FCA5A5" }}>
          <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3 shrink-0">
            <path fillRule="evenodd" d="M5.05 2.286c.424-.756 1.476-.756 1.9 0l3.826 6.8c.414.737-.117 1.664-.95 1.664H2.174c-.833 0-1.364-.927-.95-1.663l3.827-6.8ZM6 4.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2ZM5.5 8.25a.75.75 0 100 1.5.75.75 0 000-1.5Z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Security items — visual reference only ───────────────────────────── */
const secItems = [
  "Conexión protegida y verificada",
  "Monitoreo por Inteligencia Artificial Proactiva",
  "Privacidad y protección de datos institucionales",
];

/* ════════════════════════════════════════════════════════════════════════
   MAIN LOGIN COMPONENT
   ════════════════════════════════════════════════════════════════════════ */

/* ── Demo user registry (5 roles → 5 dashboards) ─────────────────────── */
type DemoRole = "docente" | "estudiante" | "director" | "psi" | "apoderado";

const DEMO_USERS: Record<DemoRole, { rbd: string; cred: string; pass: string; label: string; icon: string; color: string }> = {
  docente:    { rbd: "12412-4", cred: "omar.lobos@colegiochile.cl",    pass: "conecta2024", label: "Docente",          icon: "📚", color: "#cfbdff" },
  estudiante: { rbd: "12412-4", cred: "sofia.carvajal@estudia.cl",     pass: "sofia2024",   label: "Estudiante",       icon: "🎓", color: "#6ee7b7" },
  director:   { rbd: "12412-4", cred: "admin@colegiochile.cl",         pass: "admin2024",   label: "Directivo",        icon: "🏛️", color: "#fcd34d" },
  psi:        { rbd: "16466-K", cred: "sergio.arias@colegio.cl",       pass: "psi2024",     label: "Dupla Psicosocial",icon: "🧠", color: "#f9a8d4" },
  apoderado:  { rbd: "12412-4", cred: "victor.sepulveda@familia.cl",   pass: "victor2024",  label: "Apoderado",        icon: "👨‍👩‍👧", color: "#93c5fd" },
};

export default function Login({ onEnterModule }: { onEnterModule?: (role: DemoRole) => void }) {
  const [rbd, setRbd]               = useState("");
  const [cred, setCred]             = useState("");
  const [pass, setPass]             = useState("");
  const [showPass, setShowPass]     = useState(false);
  const [focused, setFocused]       = useState<string | null>(null);
  const [loginState, setLoginState] = useState<LoginState>("idle");
  const [errors, setErrors]         = useState({ rbd: "", cred: "", pass: "" });
  const [pendingRole, setPendingRole] = useState<DemoRole | null>(null);
  const canvasRef                   = useRef<HTMLCanvasElement>(null);
  const st                          = loginState; // alias to avoid type-narrowing issues inside JSX

  /* ── Quick-fill from profile card ── */
  const fillProfile = (role: DemoRole) => {
    const u = DEMO_USERS[role];
    setRbd(u.rbd);
    setCred(u.cred);
    setPass(u.pass);
    setErrors({ rbd: "", cred: "", pass: "" });
    setLoginState("idle");
  };

  /* ── Animated particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; op: number; hue: number };
    const pts: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.4 + 0.3,
      op: Math.random() * 0.4 + 0.08,
      hue: Math.random() < 0.6 ? 240 : Math.random() < 0.5 ? 270 : 190,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,70%,${p.op})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.07 * (1 - d / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  /* ── Validate ── */
  const validate = () => {
    const e = { rbd: "", cred: "", pass: "" };
    let ok = true;
    if (!rbd.trim())  { e.rbd  = "Ingresa el RBD o nombre del establecimiento"; ok = false; }
    if (!cred.trim()) { e.cred = "Ingresa tu RUT o correo electrónico"; ok = false; }
    if (!pass.trim()) { e.pass = "La contraseña o llave de acceso es requerida"; ok = false; }
    setErrors(e);
    return ok;
  };

  const clearErr = (f: keyof typeof errors) => {
    if (errors[f]) setErrors(p => ({ ...p, [f]: "" }));
    if (loginState === "error") setLoginState("idle");
  };

  /* ── Submit ── */
  const submit = () => {
    if (st === "loading" || st === "success") return;
    if (!validate()) { setLoginState("error"); return; }

    const matchedRole = (Object.keys(DEMO_USERS) as DemoRole[]).find(role => {
      const u = DEMO_USERS[role];
      return rbd.trim() === u.rbd && cred.trim() === u.cred && pass === u.pass;
    });

    if (!matchedRole) {
      setErrors(e => ({ ...e, pass: "Credenciales incorrectas. Selecciona un perfil de demostración." }));
      setLoginState("error");
      return;
    }

    setPendingRole(matchedRole);
    setLoginState("loading");
    setTimeout(() => {
      setLoginState("success");
      setTimeout(() => onEnterModule?.(matchedRole), 900);
    }, 2000);
  };

  const disabled = st === "loading" || st === "success";

  /* ── Icons for fields ── */
  const BuildingIcon = (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 8.64V5.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 9.694L1 11.014V15h5V9.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z" />
      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
    </svg>
  );
  const UserIcon = (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.029 10 8 10c-2.03 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    </svg>
  );
  const LockIcon = (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
  );
  const EnterIcon = (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-5 py-10 overflow-hidden"
      style={{ background: "#06090F" }}
    >
      {/* ── Particle canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Cosmic background gradients ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Main nebula — upper right, teal-purple bright glow (matches reference) */}
        <div style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle at 60% 40%, rgba(56,189,248,0.18) 0%, rgba(99,102,241,0.14) 35%, rgba(139,92,246,0.08) 60%, transparent 80%)",
          filter: "blur(30px)",
        }} />
        {/* Secondary glow — lower left */}
        <div style={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,103,245,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        {/* Centre subtle warm */}
        <div style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(20px)",
        }} />
      </div>

      {/* ══ LOGIN CARD ══ */}
      <div
        className="relative z-10 w-full"
        style={{ maxWidth: 400 }}
      >
        <div
          className="rounded-[20px] px-7 py-8 sm:px-8 sm:py-9"
          style={{
            background: "linear-gradient(155deg, rgba(13,16,28,0.95) 0%, rgba(8,10,20,0.97) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "0 0 0 1px rgba(99,102,241,0.1), 0 24px 48px rgba(0,0,0,0.65), 0 0 60px rgba(99,102,241,0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* ── SUCCESS STATE ── */}
          {st === "success" ? (
            <div className="flex flex-col items-center justify-center gap-5 py-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "2px solid rgba(16,185,129,0.5)",
                  boxShadow: "0 0 28px rgba(16,185,129,0.25)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[17px] font-bold mb-1" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#F8FAFC", letterSpacing: "-0.01em" }}>
                  Acceso concedido
                </p>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {pendingRole ? `Cargando módulo ${DEMO_USERS[pendingRole].label}…` : "Ingresando al panel de CONECTA PRO…"}
                </p>
              </div>
              <div className="flex gap-1.5">
                {[0,1,2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981", animation: `bdot 0.9s ${i*0.16}s infinite`, opacity: 0.8 }} />
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* ── HEADER — horizontal ── */}
              <div className="flex items-start gap-4 mb-7">
                {/* Icon with glow */}
                <div
                  className="shrink-0"
                  style={{ filter: "drop-shadow(0 0 14px rgba(99,102,241,0.5)) drop-shadow(0 0 4px rgba(139,92,246,0.3))" }}
                >
                  <ConnectaIcon size={64} />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center pt-1">
                  <h1
                    className="text-[28px] font-extrabold leading-none tracking-wide"
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      color: "#FFFFFF",
                      letterSpacing: "0.04em",
                    }}
                  >
                    CONECTA
                  </h1>
                  <p
                    className="text-[12px] mt-1.5 leading-snug"
                    style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Inter',sans-serif" }}
                  >
                    Inteligencia Emocional<br />en el Aula
                  </p>
                </div>
              </div>

              {/* ── FIELDS ── */}
              <div className="flex flex-col gap-3.5 mb-5">
                <Field
                  label="RBD o Nombre Colegio"
                  placeholder="Ej: 12345-6 o Colegio San José"
                  value={rbd}
                  onChange={v => { setRbd(v); clearErr("rbd"); }}
                  error={errors.rbd}
                  disabled={disabled}
                  icon={BuildingIcon}
                  isFocused={focused === "rbd"}
                  onFocus={() => setFocused("rbd")}
                  onBlur={() => setFocused(null)}
                  autoComplete="organization"
                />
                <Field
                  label="RUT o Correo"
                  placeholder="24.374.599-3 o correo"
                  value={cred}
                  onChange={v => { setCred(v); clearErr("cred"); }}
                  error={errors.cred}
                  disabled={disabled}
                  icon={UserIcon}
                  isFocused={focused === "cred"}
                  onFocus={() => setFocused("cred")}
                  onBlur={() => setFocused(null)}
                  autoComplete="username"
                />
                <Field
                  label="Contraseña o Llave de Acceso"
                  placeholder="••••••••"
                  value={pass}
                  onChange={v => { setPass(v); clearErr("pass"); }}
                  type={showPass ? "text" : "password"}
                  error={errors.pass}
                  disabled={disabled}
                  icon={LockIcon}
                  isFocused={focused === "pass"}
                  onFocus={() => setFocused("pass")}
                  onBlur={() => setFocused(null)}
                  autoComplete="current-password"
                  right={
                    <button
                      type="button"
                      onClick={() => setShowPass(s => !s)}
                      disabled={disabled}
                      className="cursor-pointer disabled:cursor-not-allowed transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                      aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      <EyeIcon open={showPass} />
                    </button>
                  }
                />
              </div>

              {/* ── Demo profile cards ── */}
              <div className="mb-4">
                <p
                  className="text-[9px] font-bold tracking-[0.18em] uppercase mb-2.5"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  Perfiles de Demostración
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {(Object.keys(DEMO_USERS) as DemoRole[]).map(role => {
                    const u = DEMO_USERS[role];
                    const isActive = cred === u.cred && rbd === u.rbd;
                    return (
                      <button
                        key={role}
                        onClick={() => fillProfile(role)}
                        disabled={disabled}
                        className="flex flex-col items-center gap-1 py-2 px-1 rounded-[8px] transition-all duration-150 cursor-pointer disabled:opacity-40"
                        style={{
                          background: isActive ? `${u.color}18` : "rgba(255,255,255,0.04)",
                          border: isActive ? `1px solid ${u.color}55` : "1px solid rgba(255,255,255,0.07)",
                          outline: "none",
                        }}
                      >
                        <span className="text-[16px] leading-none">{u.icon}</span>
                        <span className="text-[8.5px] font-semibold leading-tight text-center" style={{ color: isActive ? u.color : "rgba(255,255,255,0.35)", fontFamily: "'Inter',sans-serif" }}>
                          {u.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── SUBMIT ── */}
              <button
                onClick={submit}
                disabled={disabled}
                className="w-full h-12 rounded-[10px] font-bold text-[14px] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed mb-1"
                style={{
                  background: st === "error"
                    ? "#BE123C"
                    : "#7C3AED",
                  boxShadow: st === "loading"
                    ? "none"
                    : st === "error"
                    ? "0 0 20px rgba(190,18,60,0.4)"
                    : "0 0 24px rgba(124,58,237,0.5), 0 4px 12px rgba(79,103,245,0.3)",
                  color: "white",
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  if (!disabled) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = st === "error" ? "#9F1239" : "#6D28D9";
                    el.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = st === "error" ? "#BE123C" : "#7C3AED";
                  el.style.transform = "translateY(0)";
                }}
              >
                {st === "loading" ? (
                  <><Spinner /><span>Verificando acceso…</span></>
                ) : (
                  <><span style={{ opacity: 0.85 }}>{EnterIcon}</span><span>Ingresar al Panel</span></>
                )}
              </button>

              {/* Forgot */}
              <div className="text-right mb-5">
                <button
                  className="text-[11px] cursor-pointer transition-colors duration-150"
                  style={{ color: "rgba(165,180,252,0.45)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(165,180,252,0.85)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(165,180,252,0.45)")}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* ── SECURITY PROTOCOLS ── */}
              <div>
                <p
                  className="text-center text-[9px] font-bold tracking-[0.18em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  Protocolos de Seguridad Activos
                </p>
                <div className="flex flex-col gap-2">
                  {secItems.map((txt, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span style={{ color: i === 0 ? "rgba(129,140,248,0.65)" : i === 1 ? "rgba(110,231,183,0.65)" : "rgba(167,139,250,0.65)" }}>
                        <ShieldIcon />
                      </span>
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {txt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── FOOTER ── */}
          <div className="mt-7 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {/* Google AI */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.2)" }}>
                Powered by
              </span>
              <span
                className="text-[12px] font-semibold"
                style={{
                  background: "linear-gradient(90deg, #4285F4, #EA4335 40%, #FBBC05 70%, #34A853)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.65,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                }}
              >
                Google AI
              </span>
            </div>

            {onEnterModule && (
              <div className="text-center mt-3">
                <button
                  onClick={() => onEnterModule("docente")}
                  className="text-[10px] cursor-pointer transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.15)")}
                >
                  Acceso rápido Docente →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Version */}
      <p className="relative z-10 mt-5 text-[10px]" style={{ color: "rgba(255,255,255,0.1)" }}>
        CONECTA PRO · v1.0.0
      </p>

      <style>{`
        @keyframes bdot {
          0%,100% { transform:translateY(0); opacity:0.8; }
          50%      { transform:translateY(-5px); opacity:0.4; }
        }
      `}</style>
    </div>
  );
}
