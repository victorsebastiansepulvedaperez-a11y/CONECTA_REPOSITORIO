import { useMemo, useState } from "react";

export type DashboardRole = "docente" | "estudiante" | "director" | "psicosocial" | "apoderado";

export type DashboardMenuItem = {
  label: string;
  icon: string;
  children?: DashboardMenuItem[];
};

const mockCourseCatalog = {
  docente: [
    { label: "7°A", icon: "group" },
    { label: "8°B", icon: "group" },
  ],
  estudiante: [],
  director: [],
  psicosocial: [],
  apoderado: [],
};

const roleMenus: Record<DashboardRole, DashboardMenuItem[]> = {
  docente: [
    { label: "Dashboard", icon: "dashboard" },
    {
      label: "Asistencia",
      icon: "check_circle",
      children: mockCourseCatalog.docente,
    },
    { label: "Kudos", icon: "star" },
    { label: "Chat Estrella", icon: "chat" },
    { label: "Caja de Ideas", icon: "lightbulb" },
  ],
  estudiante: [
    { label: "Dashboard", icon: "dashboard" },
    { label: "Medallas", icon: "grade" },
    { label: "Kudos", icon: "star" },
    { label: "Ideas", icon: "lightbulb" },
    { label: "Chat Estrella", icon: "chat" },
  ],
  director: [
    { label: "Dashboard", icon: "dashboard" },
    { label: "Carga de Datos", icon: "upload" },
    { label: "Carga manual de datos", icon: "edit_document" },
    { label: "Configuración", icon: "settings" },
    { label: "Detalle de Auditoría", icon: "audit" },
    { label: "Detalles por curso de alertas", icon: "alert" },
    { label: "Gestión de Reportes", icon: "report" },
    { label: "Asistente MCP", icon: "lightbulb" },
  ],
  psicosocial: [
    { label: "Casos", icon: "folder" },
    { label: "Seguimiento", icon: "timeline" },
    { label: "Intervenciones", icon: "medical_services" },
    { label: "Riesgos", icon: "warning" },
    { label: "Documentos", icon: "description" },
    { label: "Alertas Críticas", icon: "warning" },
    { label: "Perfil", icon: "person" },
  ],
  apoderado: [
    { label: "Resumen", icon: "home" },
    { label: "Mi hijo", icon: "family_restroom" },
    { label: "Asistencia", icon: "check_circle" },
    { label: "Calificaciones", icon: "grade" },
    { label: "Pagos", icon: "payments" },
    { label: "Mensajes", icon: "chat" },
    { label: "Caja de Ideas", icon: "lightbulb" },
    { label: "Perfil", icon: "person" },
  ],
};

const profileMeta: Record<DashboardRole, { title: string; subtitle: string; accent: string; softAccent: string }> = {
  docente: {
    title: "Panel docente",
    subtitle: "Gestión de aula y seguimiento académico",
    accent: "#8b5cf6",
    softAccent: "rgba(139, 92, 246, 0.18)",
  },
  estudiante: {
    title: "Portal del estudiante",
    subtitle: "Mi aprendizaje en un solo lugar",
    accent: "#a78bfa",
    softAccent: "rgba(167, 139, 250, 0.18)",
  },
  director: {
    title: "Panel directivo",
    subtitle: "Monitoreo institucional y resultados",
    accent: "#60a5fa",
    softAccent: "rgba(96, 165, 250, 0.18)",
  },
  psicosocial: {
    title: "Dupla psicosocial",
    subtitle: "Atención, riesgo y seguimiento",
    accent: "#f472b6",
    softAccent: "rgba(244, 114, 182, 0.18)",
  },
  apoderado: {
    title: "Portal del apoderado",
    subtitle: "Información de mi hijo y comunidad",
    accent: "#34d399",
    softAccent: "rgba(52, 211, 153, 0.18)",
  },
};

function Icon({ name }: { name: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V20h14V9.5" />
      </svg>
    ),
    school: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M3 9.5 12 4l9 5.5-9 5.5L3 9.5Z" />
        <path d="M7 11.8V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.2" />
      </svg>
    ),
    group: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
        <circle cx="10" cy="7" r="3" />
        <path d="M20 19v-1a4 4 0 0 0-3-3.87" />
        <path d="M16 4.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    check_circle: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    assignment: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M8 4h9l3 3v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M14 4v4h5" />
        <path d="M8 12h8M8 16h8" />
      </svg>
    ),
    bar_chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M4 20V9" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20v-11" />
      </svg>
    ),
    dashboard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="4" rx="2" />
        <rect x="14" y="11" width="7" height="10" rx="2" />
        <rect x="3" y="12" width="7" height="9" rx="2" />
      </svg>
    ),
    grade: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="m12 2 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 0l-5.4 2.8 1-6.1L3.2 8.4l6.1-.9L12 2Z" transform="translate(0 2)" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.4l6.2-.9L12 2.8Z" />
      </svg>
    ),
    lightbulb: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M9.5 14.5c-1.5-1-2.5-2.8-2.5-4.7A5 5 0 0 1 17 9.8c0 2-.9 3.8-2.5 4.7" />
        <path d="M12 3.5A7 7 0 0 0 7 10c0 1.4.5 2.7 1.4 3.7" />
      </svg>
    ),
    mood: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" />
        <path d="M9 10h.01M15 10h.01" />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
      </svg>
    ),
    person: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.7-3 4.8-4.5 8-4.5s6.3 1.5 8 4.5" />
      </svg>
    ),
    folder: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" />
      </svg>
    ),
    timeline: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M4 18h16" />
        <path d="M7 15V9" />
        <path d="M12 15V5" />
        <path d="M17 15v-3" />
      </svg>
    ),
    medical_services: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M4 9.5A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 20 9.5v5A2.5 2.5 0 0 1 17.5 17h-11A2.5 2.5 0 0 1 4 14.5v-5Z" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
    warning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M12 3.5 21 19H3L12 3.5Z" />
        <path d="M12 9v4" />
        <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    description: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M7 4h9l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M14 4v5h5" />
        <path d="M8 12h8M8 16h8" />
      </svg>
    ),
    family_restroom: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="7" cy="7" r="2" />
        <circle cx="17" cy="7" r="2" />
        <path d="M3 19c1-2.4 3-3.6 5-3.6S9.8 16.6 11 19" />
        <path d="M13 19c1-2.4 3-3.6 5-3.6s3 1.2 5 3.6" />
      </svg>
    ),
    payments: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="M4 10h16M8 15h4" />
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.86l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .7 1.7 1.7 0 0 0-.2 1.1V21a2 2 0 1 1-4 0v-.08a1.7 1.7 0 0 0-.2-1.1 1.7 1.7 0 0 0-1-.7 1.7 1.7 0 0 0-1.86.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.7-1 1.7 1.7 0 0 0-1.1-.2H2.7a2 2 0 1 1 0-4h.08a1.7 1.7 0 0 0 1.1-.2 1.7 1.7 0 0 0 .7-1 1.7 1.7 0 0 0-.34-1.86l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.7 1.7 1.7 0 0 0 .2-1.1V2.7a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 .2 1.1 1.7 1.7 0 0 0 1 .7 1.7 1.7 0 0 0 1.86-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.28.28.67.43 1.06.43h.08a2 2 0 1 1 0 4h-.08a1.7 1.7 0 0 0-1.06.43 1.7 1.7 0 0 0-.34 1.86Z" />
      </svg>
    ),
    apartment: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M3 21V7l9-4 9 4v14" />
        <path d="M9 21v-7h6v7" />
        <path d="M7 10h2M15 10h2M7 13h2M15 13h2" />
      </svg>
    ),
    upload: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 18v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
      </svg>
    ),
    edit_document: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M14 3h5v5" />
        <path d="M14 3 20 9v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8Z" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
    audit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M9 3h6" />
        <path d="M10 7h4" />
        <path d="M8 12h8" />
        <path d="M8 16h8" />
        <path d="M6 3h12a2 2 0 0 1 2 2v15l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    alert: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M12 4a7 7 0 0 1 7 7v4l2 3H3l2-3v-4a7 7 0 0 1 7-7Z" />
        <path d="M10 18h4" />
      </svg>
    ),
    report: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M7 18V9" />
        <path d="M12 18V5" />
        <path d="M17 18v-7" />
        <path d="M4 20h16" />
      </svg>
    ),
    insights: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M6 18V9" />
        <path d="M12 18V5" />
        <path d="M18 18v-7" />
        <path d="M3 20h18" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 5 5" />
      </svg>
    ),
    menu: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
    close: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    ),
    logout: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="M16 17l5-5-5-5" />
        <path d="M21 12H9" />
      </svg>
    ),
    diversity_3: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M4 18c1.3-2.5 3.5-3.8 6-3.8s4.7 1.3 6 3.8" />
        <path d="M15 18c1-2 2.5-3 4-3" />
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 0 4 21.5v-15Z" />
        <path d="M4 6.5V19" />
      </svg>
    ),
  };

  return <span className="inline-flex items-center justify-center">{iconMap[name] ?? <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" /></svg>}</span>;
}

function Avatar({ name, initial, accent }: { name: string; initial: string; accent: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white shadow-inner" style={{ background: accent }}>
      {initial}
    </div>
  );
}

export function DashboardShell({
  role,
  userName,
  userTitle,
  course,
  schoolName,
  schoolRbd,
  onLogout,
  children,
  activeItem,
  onActiveItemChange,
}: {
  role: DashboardRole;
  userName: string;
  userTitle: string;
  course: string;
  schoolName: string;
  schoolRbd: string;
  onLogout: () => void;
  children: React.ReactNode;
  activeItem?: number;
  onActiveItemChange?: (index: number) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [internalActiveItem, setInternalActiveItem] = useState(0);
  const currentActiveItem = activeItem ?? internalActiveItem;

  const setActiveItem = (index: number) => {
    if (onActiveItemChange) {
      onActiveItemChange(index);
    } else {
      setInternalActiveItem(index);
    }
  };

  const meta = profileMeta[role];
  const menuItems = useMemo(() => {
    if (role === "docente") {
      return [
        { label: "Dashboard", icon: "dashboard" },
        {
          label: "Asistencia",
          icon: "check_circle",
          children: mockCourseCatalog.docente,
        },
        { label: "Kudos", icon: "star" },
        { label: "Chat Estrella", icon: "chat" },
        { label: "Caja de Ideas", icon: "lightbulb" },
      ];
    }

    return roleMenus[role];
  }, [role]);

  const menuBlock = (
    <aside className="hidden md:flex fixed inset-y-0 left-0 z-30 w-[290px] flex-col border-r border-white/10 bg-[#0f0d13]/90 backdrop-blur-xl">
      <div className="border-b border-white/10 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg font-extrabold text-violet-200">C</div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-violet-200/80">CONECTA</div>
            <div className="text-sm font-bold text-white">V1 PRO</div>
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">Perfil</div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="mb-2 text-base font-semibold text-white">{meta.title}</div>
          <div className="text-sm text-slate-300">{meta.subtitle}</div>
        </div>
      </div>

      <div className="px-5 pb-4">
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Institución</div>
        <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 p-3">
          <div className="text-[11px] text-violet-200">RBD {schoolRbd}</div>
          <div className="mt-1 text-sm font-semibold text-white">{schoolName}</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-3">
        {menuItems.map((item, index) => {
          const selected = index === currentActiveItem;
          const hasChildren = Boolean(item.children?.length);

          return (
            <div key={item.label} className="space-y-1">
              <button
                onClick={() => setActiveItem(index)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${selected ? "bg-violet-500/15 text-violet-100" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-violet-200">
                  <Icon name={item.icon} />
                </span>
                <span className="flex-1 font-medium">{item.label}</span>
                {hasChildren ? <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">▾</span> : null}
              </button>

              {hasChildren && selected ? (
                <div className="ml-6 space-y-1 border-l border-white/10 pl-3">
                  {item.children!.map((child, childIndex) => (
                    <button
                      key={`${item.label}-${child.label}`}
                      onClick={() => setActiveItem(index + childIndex + 0.1)}
                      className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm ${Math.abs(currentActiveItem - (index + childIndex + 0.1)) < 0.01 ? "bg-white/5 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-violet-200">
                        <Icon name={child.icon} />
                      </span>
                      <span>{child.label}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <button
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-400/30 bg-rose-500/10 px-3 py-2.5 text-sm font-medium text-rose-100"
        >
          <Icon name="logout" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );

  const mobileDrawer = (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/70 transition ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-[320px] transform border-r border-white/10 bg-[#0f0d13]/95 p-0 transition duration-200 md:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="border-b border-white/10 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-sm font-extrabold text-violet-200">C</div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-violet-200/80">CONECTA</div>
                <div className="text-sm font-bold text-white">V1 PRO</div>
              </div>
            </div>
            <button onClick={() => setMobileOpen(false)} className="rounded-lg border border-white/10 p-2 text-white">
              <Icon name="close" />
            </button>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Perfil</div>
          <div className="text-lg font-semibold text-white">{meta.title}</div>
          <div className="mt-1 text-sm text-slate-300">{meta.subtitle}</div>
        </div>

        <div className="px-4 pb-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Institución</div>
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 p-3">
            <div className="text-[11px] text-violet-200">RBD {schoolRbd}</div>
            <div className="mt-1 text-sm font-semibold text-white">{schoolName}</div>
          </div>
        </div>

        <nav className="space-y-1 px-3 pb-3">
          {menuItems.map((item, index) => {
            const hasChildren = Boolean(item.children?.length);
            const selected = index === currentActiveItem;

            return (
              <div key={item.label} className="space-y-1">
                <button
                  onClick={() => {
                    setActiveItem(index);
                    if (!hasChildren) setMobileOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${selected ? "bg-violet-500/15 text-violet-100" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-violet-200">
                    <Icon name={item.icon} />
                  </span>
                  <span className="flex-1 font-medium">{item.label}</span>
                  {hasChildren ? <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">▾</span> : null}
                </button>

                {hasChildren && selected ? (
                  <div className="ml-6 space-y-1 border-l border-white/10 pl-3">
                    {item.children!.map((child, childIndex) => (
                      <button
                        key={`${item.label}-${child.label}`}
                        onClick={() => {
                          setActiveItem(index + childIndex + 0.1);
                          setMobileOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm ${Math.abs(currentActiveItem - (index + childIndex + 0.1)) < 0.01 ? "bg-white/5 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-violet-200">
                          <Icon name={child.icon} />
                        </span>
                        <span>{child.label}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <button
            onClick={onLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-400/30 bg-rose-500/10 px-3 py-2.5 text-sm font-medium text-rose-100"
          >
            <Icon name="logout" />
            Cerrar sesión
          </button>
        </div>
      </aside>
    </>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#141218] text-white">
      {menuBlock}
      {mobileDrawer}

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-[1800px] items-center gap-2.5 px-3 md:gap-3 md:pl-[310px] md:pr-6">
          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Icon name="menu" />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-300">
              <span className="shrink-0"><Icon name="search" /></span>
              <input
                className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                placeholder="Buscar"
              />
            </label>
          </div>

          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-slate-200 xl:flex">
              <Icon name="diversity_3" />
              <span>Inclusión</span>
            </div>

            <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-slate-200 lg:flex">
              <Icon name="book" />
              <span>{course}</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-2 py-2">
              <Avatar name={userName} initial={userName.charAt(0).toUpperCase()} accent={meta.accent} />
              <div className="hidden text-left sm:block">
                <div className="text-sm font-semibold text-white">{userName}</div>
                <div className="text-[11px] text-slate-300">{userTitle}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen w-full pb-24 pt-20 md:pl-[290px] md:pr-6">
        <div className="w-full px-3 pt-4 sm:px-4 md:px-6">{children}</div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0f0d13]/90 p-2 backdrop-blur-lg md:hidden">
        <div className="grid grid-cols-4 gap-2">
          {menuItems.slice(0, 4).map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(index)}
              className={`flex min-h-[58px] flex-col items-center justify-center rounded-xl px-1.5 py-2 text-[9px] ${index === currentActiveItem ? "bg-violet-500/15 text-violet-100" : "text-slate-300"}`}
            >
              <span className="text-base"><Icon name={item.icon} /></span>
              <span className="mt-1 leading-tight text-center">{item.label}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

export { roleMenus };
