import { useEffect, useState } from "react";
import Login from "./Login";
import TeacherDashboard from "./TeacherDashboard";
import TeacherDashboardV2 from "./TeacherDashboardV2";
import StudentDashboard from "./StudentDashboard";
import DirectorDashboard from "./DirectorDashboard";
import PsychoDashboard from "./PsychoDashboard";
import ParentPortal from "./ParentPortal";

type DemoRole = "docente" | "estudiante" | "director" | "psi" | "apoderado";
type AppView = "login" | "ds" | "dashboard" | "student" | "director" | "psycho" | "parent";

/* ─── ICONS (inline SVG micro-set) ───────────────────────────────────── */

const Icon = {
  Home: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zM4.93 16.5c-.356-.892-.535-1.848-.535-2.834 0-1.226.27-2.39.764-3.437A6.002 6.002 0 004 16.5h.93zm10.14 0H16a6.002 6.002 0 00-1.158-5.77c.493 1.046.764 2.21.764 3.436 0 .987-.18 1.943-.536 2.834zM8 16.5a6 6 0 1110.657-3.85 6.004 6.004 0 01-1.314 3.85H8z" />
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a2 2 0 002-2H8a2 2 0 002 2z" />
    </svg>
  ),
  Book: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4 7.97 7.97 0 009 4.804z" />
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  Info: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  Alert: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Smile: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944A11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  ),
};

/* ─── DESIGN TOKENS — Color Palette ──────────────────────────────────── */

const colorGroups = [
  {
    name: "Azul Primario",
    subtitle: "Tecnología · Confianza · Seguridad",
    swatches: [
      { label: "50", hex: "#EEF2FF", text: "dark" },
      { label: "100", hex: "#E0E7FF", text: "dark" },
      { label: "200", hex: "#C7D2FE", text: "dark" },
      { label: "300", hex: "#A5B4FC", text: "dark" },
      { label: "400", hex: "#818CF8", text: "dark" },
      { label: "500", hex: "#4F67F5", text: "light" },
      { label: "600", hex: "#3251E8", text: "light" },
      { label: "700", hex: "#2640C8", text: "light" },
      { label: "800", hex: "#1E32A0", text: "light" },
      { label: "900", hex: "#172580", text: "light" },
    ],
  },
  {
    name: "Teal Secundario",
    subtitle: "Bienestar · Crecimiento · Equilibrio",
    swatches: [
      { label: "50", hex: "#F0FDFA", text: "dark" },
      { label: "100", hex: "#CCFBF1", text: "dark" },
      { label: "200", hex: "#99F6E4", text: "dark" },
      { label: "300", hex: "#5EEAD4", text: "dark" },
      { label: "400", hex: "#2DD4BF", text: "dark" },
      { label: "500", hex: "#14B8A6", text: "light" },
      { label: "600", hex: "#0D9488", text: "light" },
      { label: "700", hex: "#0F766E", text: "light" },
      { label: "800", hex: "#115E59", text: "light" },
      { label: "900", hex: "#134E4A", text: "light" },
    ],
  },
  {
    name: "Violeta Acento",
    subtitle: "Inteligencia Emocional · Creatividad",
    swatches: [
      { label: "50", hex: "#F5F3FF", text: "dark" },
      { label: "100", hex: "#EDE9FE", text: "dark" },
      { label: "200", hex: "#DDD6FE", text: "dark" },
      { label: "300", hex: "#C4B5FD", text: "dark" },
      { label: "400", hex: "#A78BFA", text: "dark" },
      { label: "500", hex: "#8B5CF6", text: "light" },
      { label: "600", hex: "#7C3AED", text: "light" },
      { label: "700", hex: "#6D28D9", text: "light" },
      { label: "800", hex: "#5B21B6", text: "light" },
      { label: "900", hex: "#4C1D95", text: "light" },
    ],
  },
  {
    name: "Neutros",
    subtitle: "Texto · Superficies · Estructura",
    swatches: [
      { label: "0", hex: "#FFFFFF", text: "dark", border: true },
      { label: "50", hex: "#F8F9FF", text: "dark", border: true },
      { label: "100", hex: "#F1F3FA", text: "dark" },
      { label: "200", hex: "#E4E7F0", text: "dark" },
      { label: "300", hex: "#CBD0DC", text: "dark" },
      { label: "400", hex: "#9AA1B2", text: "dark" },
      { label: "500", hex: "#6B7280", text: "light" },
      { label: "600", hex: "#4B5563", text: "light" },
      { label: "700", hex: "#374151", text: "light" },
      { label: "800", hex: "#1F2937", text: "light" },
      { label: "950", hex: "#0A0F1A", text: "light" },
    ],
  },
];

const semanticColors = [
  { label: "Éxito", hex: "#10B981", light: "#ECFDF5", name: "success" },
  { label: "Advertencia", hex: "#F59E0B", light: "#FFFBEB", name: "warning" },
  { label: "Error / Alerta", hex: "#F43F5E", light: "#FFF1F2", name: "danger" },
  { label: "Información", hex: "#3B82F6", light: "#EFF6FF", name: "info" },
];

/* ─── PRIMITIVE COMPONENTS ───────────────────────────────────────────── */

// Button
type BtnVariant = "primary" | "secondary" | "ghost" | "danger" | "teal";
type BtnSize = "sm" | "md" | "lg";

const btnBase =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[8px] transition-all duration-150 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed";

const btnVariants: Record<BtnVariant, string> = {
  primary:
    "bg-[#3251E8] text-white hover:bg-[#2640C8] active:bg-[#1E32A0] focus-visible:outline-[#3251E8] shadow-[0_4px_14px_0_rgba(79,103,245,0.25)] hover:shadow-[0_6px_18px_0_rgba(79,103,245,0.35)]",
  secondary:
    "bg-[#EEF2FF] text-[#3251E8] hover:bg-[#E0E7FF] active:bg-[#C7D2FE] border border-[#C7D2FE] focus-visible:outline-[#3251E8]",
  ghost:
    "bg-transparent text-[#374151] hover:bg-[#F1F3FA] active:bg-[#E4E7F0] focus-visible:outline-[#3251E8]",
  danger:
    "bg-[#F43F5E] text-white hover:bg-[#E11D48] active:bg-[#BE123C] focus-visible:outline-[#F43F5E] shadow-[0_4px_14px_0_rgba(244,63,94,0.22)]",
  teal:
    "bg-[#0D9488] text-white hover:bg-[#0F766E] active:bg-[#115E59] focus-visible:outline-[#0D9488] shadow-[0_4px_14px_0_rgba(13,148,136,0.22)]",
};

const btnSizes: Record<BtnSize, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

function Button({
  variant = "primary",
  size = "md",
  children,
  disabled,
  icon,
}: {
  variant?: BtnVariant;
  size?: BtnSize;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <button
      className={`${btnBase} ${btnVariants[variant]} ${btnSizes[size]}`}
      disabled={disabled}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

// Badge
type BadgeColor = "blue" | "teal" | "violet" | "success" | "warning" | "danger" | "neutral";

const badgeColors: Record<BadgeColor, string> = {
  blue:    "bg-[#EEF2FF] text-[#3251E8] border border-[#C7D2FE]",
  teal:    "bg-[#F0FDFA] text-[#0D9488] border border-[#99F6E4]",
  violet:  "bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]",
  success: "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]",
  warning: "bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]",
  danger:  "bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3]",
  neutral: "bg-[#F1F3FA] text-[#4B5563] border border-[#E4E7F0]",
};

function Badge({
  color = "blue",
  children,
  dot,
}: {
  color?: BadgeColor;
  children: React.ReactNode;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[12px] font-semibold ${badgeColors[color]}`}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "currentColor" }}
        />
      )}
      {children}
    </span>
  );
}

// Alert
type AlertType = "info" | "success" | "warning" | "danger";

const alertConfig: Record<AlertType, { bg: string; border: string; icon: string; title: string }> = {
  info:    { bg: "#EFF6FF", border: "#BFDBFE", icon: "#3B82F6", title: "#1E40AF" },
  success: { bg: "#ECFDF5", border: "#A7F3D0", icon: "#10B981", title: "#065F46" },
  warning: { bg: "#FFFBEB", border: "#FDE68A", icon: "#F59E0B", title: "#92400E" },
  danger:  { bg: "#FFF1F2", border: "#FECDD3", icon: "#F43F5E", title: "#881337" },
};

const alertIcons: Record<AlertType, React.ReactNode> = {
  info:    <Icon.Info />,
  success: <Icon.Check />,
  warning: <Icon.Alert />,
  danger:  <Icon.X />,
};

function Alert({ type, title, children }: { type: AlertType; title: string; children: React.ReactNode }) {
  const cfg = alertConfig[type];
  return (
    <div
      className="flex gap-3 p-4 rounded-[12px] border"
      style={{ background: cfg.bg, borderColor: cfg.border }}
    >
      <span style={{ color: cfg.icon }} className="shrink-0 mt-0.5">{alertIcons[type]}</span>
      <div>
        <p className="text-[13px] font-semibold mb-0.5" style={{ color: cfg.title }}>{title}</p>
        <p className="text-[13px]" style={{ color: cfg.title, opacity: 0.8 }}>{children}</p>
      </div>
    </div>
  );
}

// Card
function Card({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-[16px] border border-[#E4E7F0] shadow-[0_1px_3px_0_rgba(16,24,40,0.08),0_1px_2px_-1px_rgba(16,24,40,0.05)] ${hover ? "hover:shadow-[0_10px_15px_-3px_rgba(16,24,40,0.08),0_4px_6px_-4px_rgba(16,24,40,0.04)] hover:-translate-y-0.5 transition-all duration-200" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// Input
function Input({
  label,
  placeholder,
  type = "text",
  error,
  hint,
  icon,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[13px] font-semibold text-[#374151]">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA1B2]">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full h-10 ${icon ? "pl-10" : "pl-3.5"} pr-3.5 rounded-[8px] border text-[14px] text-[#1F2937] placeholder:text-[#9AA1B2] bg-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#3251E8]/20 ${
            error
              ? "border-[#F43F5E] focus:border-[#F43F5E]"
              : "border-[#CBD0DC] hover:border-[#9AA1B2] focus:border-[#3251E8]"
          }`}
        />
      </div>
      {error && <p className="text-[12px] text-[#F43F5E] font-medium">{error}</p>}
      {hint && !error && <p className="text-[12px] text-[#6B7280]">{hint}</p>}
    </div>
  );
}

// Avatar
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
const avatarSizes: Record<AvatarSize, string> = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-[12px]",
  md: "w-10 h-10 text-[14px]",
  lg: "w-12 h-12 text-[16px]",
  xl: "w-16 h-16 text-[20px]",
};
const avatarColors = [
  ["#EEF2FF", "#3251E8"],
  ["#F0FDFA", "#0D9488"],
  ["#F5F3FF", "#7C3AED"],
  ["#FFFBEB", "#D97706"],
  ["#FFF1F2", "#E11D48"],
];

function Avatar({
  name,
  size = "md",
  src,
  status,
  colorIndex = 0,
}: {
  name: string;
  size?: AvatarSize;
  src?: string;
  status?: "online" | "away" | "busy" | "offline";
  colorIndex?: number;
}) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const [bg, fg] = avatarColors[colorIndex % avatarColors.length];
  const statusColors = { online: "#10B981", away: "#F59E0B", busy: "#F43F5E", offline: "#9AA1B2" };

  return (
    <div className="relative inline-flex shrink-0">
      <div
        className={`rounded-full flex items-center justify-center font-semibold ${avatarSizes[size]}`}
        style={src ? {} : { background: bg, color: fg }}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full rounded-full object-cover" />
        ) : (
          initials
        )}
      </div>
      {status && (
        <span
          className="absolute bottom-0 right-0 rounded-full border-2 border-white"
          style={{
            background: statusColors[status],
            width: size === "xs" ? 6 : size === "sm" ? 8 : size === "lg" ? 12 : size === "xl" ? 14 : 10,
            height: size === "xs" ? 6 : size === "sm" ? 8 : size === "lg" ? 12 : size === "xl" ? 14 : 10,
          }}
        />
      )}
    </div>
  );
}

/* ─── SECTION WRAPPER ────────────────────────────────────────────────── */

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 border-b border-[#E4E7F0]">
      <div className="mb-8">
        <h2
          className="text-2xl font-bold text-[#111827] mb-1"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </h2>
        {subtitle && <p className="text-[14px] text-[#6B7280]">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function TokenLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] font-mono text-[#6B7280] bg-[#F1F3FA] px-2 py-0.5 rounded-[4px]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {children}
    </span>
  );
}

/* ─── EMOTION COMPONENTS ─────────────────────────────────────────────── */

const emotions = [
  { id: "joy",      label: "Alegría",    emoji: "😊", color: "#FCD34D", bg: "#FFFDE7", border: "#FDE68A" },
  { id: "calm",     label: "Calma",      emoji: "😌", color: "#6EE7B7", bg: "#ECFDF5", border: "#A7F3D0" },
  { id: "sadness",  label: "Tristeza",   emoji: "😢", color: "#93C5FD", bg: "#EFF6FF", border: "#BFDBFE" },
  { id: "anger",    label: "Enojo",      emoji: "😠", color: "#FCA5A5", bg: "#FFF1F2", border: "#FECDD3" },
  { id: "anxiety",  label: "Ansiedad",   emoji: "😰", color: "#F9A8D4", bg: "#FDF4FF", border: "#F0ABFC" },
  { id: "surprise", label: "Sorpresa",   emoji: "😲", color: "#C4B5FD", bg: "#F5F3FF", border: "#DDD6FE" },
  { id: "fear",     label: "Miedo",      emoji: "😨", color: "#A5B4FC", bg: "#EEF2FF", border: "#C7D2FE" },
  { id: "boredom",  label: "Aburrimiento", emoji: "😑", color: "#D1D5DB", bg: "#F9FAFB", border: "#E5E7EB" },
];

const intensityLevels = [
  { value: 1, label: "Muy bajo" },
  { value: 2, label: "Bajo" },
  { value: 3, label: "Medio" },
  { value: 4, label: "Alto" },
  { value: 5, label: "Muy alto" },
];

function EmotionSelector() {
  const [selected, setSelected] = useState<string | null>("calm");
  const [intensity, setIntensity] = useState(3);
  const selectedEmotion = emotions.find((e) => e.id === selected);

  return (
    <Card className="p-6 max-w-lg">
      <p
        className="text-[13px] font-semibold text-[#374151] mb-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        ¿Cómo te sientes hoy?
      </p>
      <div className="grid grid-cols-4 gap-2 mb-5">
        {emotions.map((e) => (
          <button
            key={e.id}
            onClick={() => setSelected(e.id)}
            className={`flex flex-col items-center gap-1 p-2.5 rounded-[10px] border transition-all duration-150 cursor-pointer ${
              selected === e.id
                ? "border-2 shadow-sm scale-105"
                : "border-[#E4E7F0] hover:border-[#CBD0DC] hover:bg-[#F8F9FF]"
            }`}
            style={
              selected === e.id
                ? { borderColor: e.color, background: e.bg }
                : {}
            }
          >
            <span className="text-2xl leading-none">{e.emoji}</span>
            <span className="text-[10px] font-medium text-[#4B5563] leading-tight text-center">
              {e.label}
            </span>
          </button>
        ))}
      </div>
      {selected && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-[#374151]">
              Intensidad de {selectedEmotion?.label.toLowerCase()}
            </p>
            <span className="text-[12px] text-[#6B7280]">
              {intensityLevels[intensity - 1].label}
            </span>
          </div>
          <div className="flex gap-1.5">
            {intensityLevels.map((lvl) => (
              <button
                key={lvl.value}
                onClick={() => setIntensity(lvl.value)}
                className="flex-1 h-2 rounded-full transition-all duration-150 cursor-pointer"
                style={{
                  background:
                    lvl.value <= intensity
                      ? selectedEmotion?.color || "#4F67F5"
                      : "#E4E7F0",
                  opacity: lvl.value <= intensity ? 1 : 0.6,
                }}
              />
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="primary" size="sm">
              Registrar
            </Button>
            <Button variant="ghost" size="sm">
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

function EmotionHistoryCard() {
  const days = ["L", "M", "X", "J", "V", "S", "D"];
  const data = [
    { day: "L", emotion: "calm",    emoji: "😌" },
    { day: "M", emotion: "joy",     emoji: "😊" },
    { day: "X", emotion: "anxiety", emoji: "😰" },
    { day: "J", emotion: "sadness", emoji: "😢" },
    { day: "V", emotion: "calm",    emoji: "😌" },
    { day: "S", emotion: "joy",     emoji: "😊" },
    { day: "D", emotion: "joy",     emoji: "😊" },
  ];

  return (
    <Card className="p-6 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <p
          className="text-[13px] font-semibold text-[#374151]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Mi semana emocional
        </p>
        <Badge color="blue">Esta semana</Badge>
      </div>
      <div className="flex gap-2 justify-between">
        {data.map((d) => {
          const em = emotions.find((e) => e.id === d.emotion)!;
          return (
            <div key={d.day} className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg"
                style={{ background: em.bg, border: `1px solid ${em.border}` }}
              >
                {d.emoji}
              </div>
              <span className="text-[10px] font-medium text-[#9AA1B2]">{d.day}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-[#F1F3FA] flex items-center gap-2">
        <span className="text-2xl">😊</span>
        <div>
          <p className="text-[12px] font-semibold text-[#374151]">Predominante: Alegría</p>
          <p className="text-[11px] text-[#6B7280]">3 de 7 días esta semana</p>
        </div>
      </div>
    </Card>
  );
}

function EmotionBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {emotions.map((e) => (
        <div
          key={e.id}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] font-semibold"
          style={{ background: e.bg, borderColor: e.border, color: "#374151" }}
        >
          <span>{e.emoji}</span>
          <span>{e.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   RESPONSIVE NAVIGATION SYSTEM — único componente, tres modos de render
   ─ Desktop  (≥1024px): sidebar expandida fija, 240px, etiquetas visibles
   ─ Tablet   (768–1023px): sidebar compacta, 64px, solo íconos + tooltip
   ─ Mobile   (<768px): drawer deslizable desde la izquierda, con overlay
   ═══════════════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { icon: <Icon.Home />,   label: "Inicio",         badge: null },
  { icon: <Icon.Heart />,  label: "Bienestar",       badge: "3" },
  { icon: <Icon.Book />,   label: "Mi Aprendizaje",  badge: null },
  { icon: <Icon.Chart />,  label: "Reportes",        badge: null },
  { icon: <Icon.Users />,  label: "Comunidad",       badge: "12" },
  { icon: <Icon.Globe />,  label: "Recursos",        badge: null },
  { icon: <Icon.Shield />, label: "Privacidad",      badge: null },
] as const;

/* ── Logo mark shared across all states ── */
function NavLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? "justify-center" : "gap-2.5"}`}>
      <div
        className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
        style={{ background: "linear-gradient(135deg, #3251E8 0%, #7C3AED 100%)" }}
      >
        <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
      {!compact && (
        <div>
          <p className="text-[14px] font-bold text-[#111827] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            CONECTA
          </p>
          <p className="text-[10px] font-semibold text-[#3251E8] tracking-widest uppercase leading-none mt-0.5">
            PRO
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Animated hamburger ↔ close icon ── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-5 flex flex-col justify-center gap-[5px] relative">
      <span
        className="block h-[2px] bg-current rounded-full transition-all duration-250 origin-center"
        style={{
          transform: open ? "translateY(7px) rotate(45deg)" : "none",
          width: open ? "100%" : "100%",
        }}
      />
      <span
        className="block h-[2px] bg-current rounded-full transition-all duration-250"
        style={{
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "scaleX(1)",
        }}
      />
      <span
        className="block h-[2px] bg-current rounded-full transition-all duration-250 origin-center"
        style={{
          width: open ? "100%" : "75%",
          transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
        }}
      />
    </div>
  );
}

/* ── Single nav item, renders expanded or compact ── */
function NavItemRow({
  item,
  active,
  compact,
  onClick,
}: {
  item: typeof NAV_ITEMS[number];
  active: boolean;
  compact: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`w-full flex items-center rounded-[8px] transition-all duration-150 cursor-pointer
          ${compact ? "justify-center h-10 w-10 mx-auto" : "gap-3 px-3 py-2.5"}
          ${active
            ? "bg-[#EEF2FF] text-[#3251E8]"
            : "text-[#4B5563] hover:bg-[#F1F3FA] hover:text-[#1F2937]"
          }`}
      >
        <span className={`shrink-0 ${active ? "text-[#3251E8]" : "text-[#9AA1B2]"}`}>
          {item.icon}
        </span>
        {!compact && (
          <>
            <span className={`flex-1 text-[13px] text-left ${active ? "font-semibold" : "font-medium"}`}>
              {item.label}
            </span>
            {item.badge && (
              <span
                className="text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none"
                style={{
                  background: active ? "#3251E8" : "#F1F3FA",
                  color: active ? "white" : "#6B7280",
                }}
              >
                {item.badge}
              </span>
            )}
          </>
        )}
        {compact && item.badge && (
          <span
            className="absolute top-0 right-0 w-4 h-4 text-[9px] font-bold rounded-full flex items-center justify-center"
            style={{ background: "#F43F5E", color: "white", transform: "translate(2px,-2px)" }}
          >
            {Number(item.badge) > 9 ? "9+" : item.badge}
          </span>
        )}
      </button>

      {/* Tooltip — compact mode only */}
      {compact && (
        <div
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2.5 px-2.5 py-1.5 rounded-[8px] text-[12px] font-semibold text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50"
          style={{ background: "#1F2937", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
        >
          {item.label}
          <span
            className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
            style={{ borderRightColor: "#1F2937" }}
          />
        </div>
      )}
    </div>
  );
}

/* ── Sidebar interior shared by desktop + tablet + drawer ── */
function SidebarContent({
  activeIdx,
  setActiveIdx,
  compact = false,
  onItemClick,
}: {
  activeIdx: number;
  setActiveIdx: (i: number) => void;
  compact?: boolean;
  onItemClick?: () => void;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`${compact ? "py-5 flex justify-center" : "px-5 py-5"} border-b border-[#F1F3FA]`}>
        <NavLogo compact={compact} />
      </div>

      {/* Profile chip */}
      {!compact && (
        <div className="px-3 py-3">
          <div className="flex items-center gap-2.5 px-2 py-2 rounded-[10px] bg-[#F8F9FF]">
            <Avatar name="Valentina Rojas" size="sm" colorIndex={0} status="online" />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-[#1F2937] truncate">Valentina Rojas</p>
              <p className="text-[10px] text-[#6B7280]">Estudiante · 8° Básico</p>
            </div>
          </div>
        </div>
      )}
      {compact && (
        <div className="py-3 flex justify-center">
          <Avatar name="Valentina Rojas" size="sm" colorIndex={0} status="online" />
        </div>
      )}

      {/* Nav items */}
      <nav className={`flex-1 overflow-y-auto ${compact ? "px-2 py-1 flex flex-col gap-0.5 items-center" : "px-3 py-1 flex flex-col gap-0.5"}`}>
        {NAV_ITEMS.map((item, i) => (
          <NavItemRow
            key={i}
            item={item}
            active={activeIdx === i}
            compact={compact}
            onClick={() => {
              setActiveIdx(i);
              onItemClick?.();
            }}
          />
        ))}
      </nav>

      {/* Settings footer */}
      <div className={`border-t border-[#F1F3FA] ${compact ? "py-3 flex justify-center px-2" : "px-3 py-3"}`}>
        <div className="relative group">
          <button
            className={`flex items-center rounded-[8px] text-[#4B5563] hover:bg-[#F1F3FA] transition-all duration-150 cursor-pointer
              ${compact ? "w-10 h-10 justify-center" : "w-full gap-3 px-3 py-2.5"}`}
          >
            <span className="text-[#9AA1B2] shrink-0"><Icon.Settings /></span>
            {!compact && <span className="text-[13px] font-medium">Configuración</span>}
          </button>
          {compact && (
            <div
              className="absolute left-full top-1/2 -translate-y-1/2 ml-2.5 px-2.5 py-1.5 rounded-[8px] text-[12px] font-semibold text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50"
              style={{ background: "#1F2937" }}
            >
              Configuración
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent" style={{ borderRightColor: "#1F2937" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/*
 * ResponsiveNav — el único componente de navegación de CONECTA PRO.
 *
 * Breakpoints:
 *   < 768px   → oculto; el drawer se activa con el botón hamburger del TopBar
 *   768–1023px → sidebar compacta fija (64px), íconos + tooltip
 *   ≥ 1024px  → sidebar expandida fija (240px), íconos + etiquetas
 *
 * Props:
 *   activeIdx / setActiveIdx  — ítem activo actual
 *   mobileOpen / setMobileOpen — estado abierto/cerrado del drawer mobile
 */
export function ResponsiveNav({
  activeIdx,
  setActiveIdx,
  mobileOpen,
  setMobileOpen,
}: {
  activeIdx: number;
  setActiveIdx: (i: number) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ── DESKTOP: sidebar expandida ≥1024px ── */}
      <aside
        className="hidden lg:flex flex-col fixed top-0 left-0 h-full z-30 bg-white border-r border-[#E4E7F0]"
        style={{ width: 240, boxShadow: "1px 0 0 0 #E4E7F0" }}
      >
        <SidebarContent activeIdx={activeIdx} setActiveIdx={setActiveIdx} compact={false} />
      </aside>

      {/* ── TABLET: sidebar compacta 768–1023px ── */}
      <aside
        className="hidden md:flex lg:hidden flex-col fixed top-0 left-0 h-full z-30 bg-white border-r border-[#E4E7F0]"
        style={{ width: 64 }}
      >
        <SidebarContent activeIdx={activeIdx} setActiveIdx={setActiveIdx} compact={true} />
      </aside>

      {/* ── MOBILE: overlay + drawer deslizable <768px ── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(15, 23, 42, 0.62)", backdropFilter: "blur(4px)" }}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 md:hidden bg-white/95 backdrop-blur-sm flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: 280, boxShadow: "0 20px 50px rgba(15,23,42,0.18)" }}
        aria-label="Menú de navegación"
      >
        {/* Drawer header with close button */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#F1F3FA]">
          <NavLogo compact={false} />
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#6B7280] hover:bg-[#F1F3FA] transition-colors cursor-pointer"
            aria-label="Cerrar menú"
          >
            <Icon.X />
          </button>
        </div>

        {/* Reuse the same content (without logo, it's in header) */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Profile chip */}
          <div className="px-4 py-3">
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-[12px] bg-[#F8F9FF]">
              <Avatar name="Valentina Rojas" size="sm" colorIndex={0} status="online" />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#1F2937] truncate">Valentina Rojas</p>
                <p className="text-[11px] text-[#6B7280]">Estudiante · 8° Básico</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-4 py-1 overflow-y-auto flex flex-col gap-0.5">
            {NAV_ITEMS.map((item, i) => (
              <NavItemRow
                key={i}
                item={item}
                active={activeIdx === i}
                compact={false}
                onClick={() => { setActiveIdx(i); close(); }}
              />
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-[#F1F3FA]">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-[#4B5563] hover:bg-[#F1F3FA] transition-all duration-150 cursor-pointer">
              <span className="text-[#9AA1B2]"><Icon.Settings /></span>
              <span className="text-[13px] font-medium">Configuración</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ─── TOP BAR — integrado con el sistema de navegación responsive ─────── */

function AppTopBar({
  mobileOpen,
  setMobileOpen,
  pageTitle = "Dashboard",
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  pageTitle?: string;
}) {
  return (
    <div
      className="flex items-center gap-3 px-4 h-14 bg-white border-b border-[#E4E7F0]"
      style={{ boxShadow: "0 1px 0 0 #E4E7F0" }}
    >
      {/* Hamburger — visible solo en mobile y tablet */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden w-9 h-9 flex items-center justify-center rounded-[8px] text-[#374151] hover:bg-[#F1F3FA] transition-colors cursor-pointer shrink-0"
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={mobileOpen}
      >
        <HamburgerIcon open={mobileOpen} />
      </button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[13px] flex-1 min-w-0">
        <span className="text-[#9AA1B2] hidden sm:block truncate">CONECTA PRO</span>
        <span className="text-[#CBD0DC] hidden sm:block">/</span>
        <span className="font-semibold text-[#374151] truncate">{pageTitle}</span>
      </div>

      {/* Search — desktop only */}
      <div className="relative hidden lg:block">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA1B2]">
          <Icon.Search />
        </span>
        <input
          placeholder="Buscar en CONECTA..."
          className="w-56 h-9 pl-10 pr-10 rounded-[8px] bg-[#F1F3FA] border border-transparent text-[13px] placeholder:text-[#9AA1B2] focus:outline-none focus:bg-white focus:border-[#CBD0DC] transition-all duration-150"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#9AA1B2] bg-[#E4E7F0] px-1.5 py-0.5 rounded-[4px]">
          ⌘K
        </span>
      </div>

      {/* Search button — tablet */}
      <button className="hidden md:flex lg:hidden w-9 h-9 items-center justify-center rounded-[8px] text-[#6B7280] hover:bg-[#F1F3FA] transition-colors cursor-pointer">
        <Icon.Search />
      </button>

      {/* Actions */}
      <div className="flex items-center gap-1.5 shrink-0">
        <div className="relative">
          <button className="w-9 h-9 rounded-[8px] flex items-center justify-center text-[#6B7280] hover:bg-[#F1F3FA] transition-colors cursor-pointer">
            <Icon.Bell />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F43F5E] rounded-full border-2 border-white" />
        </div>
        <div className="w-px h-5 bg-[#E4E7F0] mx-1" />
        <div className="flex items-center gap-2 cursor-pointer group">
          <Avatar name="Valentina Rojas" size="sm" colorIndex={0} status="online" />
          <div className="hidden md:block">
            <p className="text-[12px] font-semibold text-[#1F2937] leading-none">Valentina R.</p>
            <p className="text-[10px] text-[#6B7280]">Estudiante</p>
          </div>
          <span className="text-[#9AA1B2] group-hover:text-[#374151] transition-colors">
            <Icon.ChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── NAVIGATION DEMO — para el design system showcase ───────────────── */

type NavDemoState = "desktop" | "tablet" | "mobile-closed" | "mobile-open";

function NavigationShowcase() {
  const [demoMode, setDemoMode] = useState<NavDemoState>("desktop");
  const [activeNav, setActiveNav] = useState(0);

  const modes: { key: NavDemoState; label: string; tag: string }[] = [
    { key: "desktop",      label: "Desktop",       tag: "≥1024px" },
    { key: "tablet",       label: "Tablet",        tag: "768–1023px" },
    { key: "mobile-closed",label: "Mobile",        tag: "<768px · cerrado" },
    { key: "mobile-open",  label: "Mobile abierto",tag: "<768px · drawer" },
  ];

  const isDesktop     = demoMode === "desktop";
  const isTablet      = demoMode === "tablet";
  const isMobClosed   = demoMode === "mobile-closed";
  const isMobOpen     = demoMode === "mobile-open";
  const isMobile      = isMobClosed || isMobOpen;

  const frameW = isDesktop ? 680 : isTablet ? 480 : 360;
  const frameH = 440;

  return (
    <div>
      {/* Mode selector tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {modes.map((m) => (
          <button
            key={m.key}
            onClick={() => setDemoMode(m.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-[8px] text-[13px] font-semibold border transition-all duration-150 cursor-pointer ${
              demoMode === m.key
                ? "bg-[#EEF2FF] border-[#C7D2FE] text-[#3251E8]"
                : "bg-white border-[#E4E7F0] text-[#4B5563] hover:border-[#CBD0DC]"
            }`}
          >
            {m.label}
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-[4px] ${
                demoMode === m.key ? "bg-[#C7D2FE] text-[#2640C8]" : "bg-[#F1F3FA] text-[#6B7280]"
              }`}
            >
              {m.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Preview frame */}
      <div className="overflow-x-auto pb-2">
        <div
          className="relative rounded-[16px] border border-[#E4E7F0] overflow-hidden bg-[#F8F9FF] transition-all duration-300"
          style={{ width: frameW, height: frameH, boxShadow: "0 4px 24px rgba(16,24,40,0.1)" }}
        >

          {/* ── Desktop preview ── */}
          {isDesktop && (
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="flex flex-col bg-white border-r border-[#E4E7F0]" style={{ width: 200 }}>
                <div className="px-4 py-4 border-b border-[#F1F3FA]">
                  <NavLogo compact={false} />
                </div>
                <div className="px-2 py-2">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-[8px] bg-[#F8F9FF]">
                    <Avatar name="Valentina Rojas" size="xs" colorIndex={0} status="online" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-[#1F2937] truncate">Valentina Rojas</p>
                      <p className="text-[9px] text-[#6B7280]">Estudiante</p>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 px-2 flex flex-col gap-0.5">
                  {NAV_ITEMS.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveNav(i)}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[6px] text-left transition-all duration-150 cursor-pointer ${
                        activeNav === i ? "bg-[#EEF2FF] text-[#3251E8]" : "text-[#4B5563] hover:bg-[#F1F3FA]"
                      }`}
                    >
                      <span className={`shrink-0 ${activeNav === i ? "text-[#3251E8]" : "text-[#9AA1B2]"}`} style={{ transform: "scale(0.85)" }}>
                        {item.icon}
                      </span>
                      <span className={`text-[11px] flex-1 ${activeNav === i ? "font-semibold" : "font-medium"}`}>{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold rounded-full px-1 min-w-[16px] text-center" style={{ background: activeNav === i ? "#3251E8" : "#F1F3FA", color: activeNav === i ? "white" : "#6B7280" }}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
                <div className="px-2 py-2 border-t border-[#F1F3FA]">
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[6px] text-[#4B5563] hover:bg-[#F1F3FA] cursor-pointer">
                    <span className="text-[#9AA1B2]" style={{ transform: "scale(0.85)" }}><Icon.Settings /></span>
                    <span className="text-[11px]">Configuración</span>
                  </button>
                </div>
              </div>
              {/* Content area */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 px-4 h-10 bg-white border-b border-[#E4E7F0]">
                  <span className="text-[10px] text-[#9AA1B2]">CONECTA PRO /</span>
                  <span className="text-[11px] font-semibold text-[#374151]">{NAV_ITEMS[activeNav].label}</span>
                  <div className="flex-1" />
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#9AA1B2]" style={{ transform: "translateY(-50%) scale(0.7)" }}><Icon.Search /></span>
                    <div className="w-36 h-6 pl-7 rounded-[6px] bg-[#F1F3FA] text-[10px] text-[#9AA1B2] flex items-center">Buscar...</div>
                  </div>
                  <div className="relative ml-1">
                    <div className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[#6B7280] bg-[#F1F3FA]" style={{ transform: "scale(0.85)" }}><Icon.Bell /></div>
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#F43F5E] rounded-full border border-white" />
                  </div>
                  <Avatar name="Valentina Rojas" size="xs" colorIndex={0} />
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[28px]">{["🏠","💚","📖","📊","👥","🌐","🛡️"][activeNav]}</p>
                    <p className="text-[12px] font-semibold text-[#374151] mt-1">{NAV_ITEMS[activeNav].label}</p>
                    <p className="text-[10px] text-[#9AA1B2]">Área de contenido</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Tablet preview ── */}
          {isTablet && (
            <div className="flex h-full">
              {/* Compact sidebar */}
              <div className="flex flex-col bg-white border-r border-[#E4E7F0]" style={{ width: 56 }}>
                <div className="h-14 flex items-center justify-center border-b border-[#F1F3FA]">
                  <div className="w-7 h-7 rounded-[8px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3251E8 0%, #7C3AED 100%)" }}>
                    <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="py-2 flex justify-center border-b border-[#F1F3FA]">
                  <Avatar name="Valentina Rojas" size="xs" colorIndex={0} status="online" />
                </div>
                <nav className="flex-1 py-2 flex flex-col items-center gap-1">
                  {NAV_ITEMS.map((item, i) => (
                    <div key={i} className="relative group">
                      <button
                        onClick={() => setActiveNav(i)}
                        className={`w-9 h-9 flex items-center justify-center rounded-[6px] transition-all duration-150 cursor-pointer ${
                          activeNav === i ? "bg-[#EEF2FF] text-[#3251E8]" : "text-[#9AA1B2] hover:bg-[#F1F3FA] hover:text-[#374151]"
                        }`}
                        style={{ transform: "scale(0.9)" }}
                      >
                        {item.icon}
                        {item.badge && (
                          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 text-[7px] font-bold rounded-full flex items-center justify-center" style={{ background: "#F43F5E", color: "white" }}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded-[6px] text-[11px] font-semibold text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 z-10" style={{ background: "#1F2937" }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </nav>
                <div className="py-2 flex justify-center border-t border-[#F1F3FA]">
                  <button className="w-9 h-9 flex items-center justify-center rounded-[6px] text-[#9AA1B2] hover:bg-[#F1F3FA] cursor-pointer" style={{ transform: "scale(0.9)" }}>
                    <Icon.Settings />
                  </button>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 px-3 h-10 bg-white border-b border-[#E4E7F0]">
                  <span className="text-[11px] font-semibold text-[#374151]">{NAV_ITEMS[activeNav].label}</span>
                  <div className="flex-1" />
                  <div className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[#6B7280]" style={{ transform: "scale(0.8)" }}><Icon.Search /></div>
                  <div className="relative">
                    <div className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[#6B7280]" style={{ transform: "scale(0.8)" }}><Icon.Bell /></div>
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#F43F5E] rounded-full border border-white" />
                  </div>
                  <Avatar name="Valentina Rojas" size="xs" colorIndex={0} />
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[28px]">{["🏠","💚","📖","📊","👥","🌐","🛡️"][activeNav]}</p>
                    <p className="text-[12px] font-semibold text-[#374151] mt-1">{NAV_ITEMS[activeNav].label}</p>
                    <p className="text-[10px] text-[#9AA1B2]">Íconos + tooltip hover</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Mobile closed ── */}
          {isMobClosed && (
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 px-4 h-12 bg-white border-b border-[#E4E7F0]">
                <button
                  onClick={() => setDemoMode("mobile-open")}
                  className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#374151] hover:bg-[#F1F3FA] cursor-pointer"
                >
                  <HamburgerIcon open={false} />
                </button>
                <span className="text-[12px] font-semibold text-[#374151]">{NAV_ITEMS[activeNav].label}</span>
                <div className="flex-1" />
                <div className="relative">
                  <div className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[#6B7280]" style={{ transform: "scale(0.85)" }}><Icon.Bell /></div>
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-[#F43F5E] rounded-full border border-white" />
                </div>
                <Avatar name="Valentina Rojas" size="xs" colorIndex={0} />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-2 p-6">
                <p className="text-[28px]">{["🏠","💚","📖","📊","👥","🌐","🛡️"][activeNav]}</p>
                <p className="text-[13px] font-semibold text-[#374151]">{NAV_ITEMS[activeNav].label}</p>
                <p className="text-[11px] text-[#9AA1B2]">Pulsa ☰ para abrir el menú</p>
                <button
                  onClick={() => setDemoMode("mobile-open")}
                  className="mt-2 px-4 py-2 rounded-[8px] text-[12px] font-semibold bg-[#EEF2FF] text-[#3251E8] border border-[#C7D2FE] cursor-pointer hover:bg-[#E0E7FF] transition-colors"
                >
                  Abrir menú →
                </button>
              </div>
            </div>
          )}

          {/* ── Mobile open (drawer) ── */}
          {isMobOpen && (
            <div className="flex flex-col h-full relative overflow-hidden">
              {/* TopBar behind */}
              <div className="flex items-center gap-3 px-4 h-12 bg-white border-b border-[#E4E7F0]">
                <div className="w-8 h-8" />
                <span className="text-[12px] font-semibold text-[#374151]">{NAV_ITEMS[activeNav].label}</span>
                <div className="flex-1" />
                <Avatar name="Valentina Rojas" size="xs" colorIndex={0} />
              </div>
              {/* Overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{ background: "rgba(17,24,39,0.45)", backdropFilter: "blur(2px)" }}
                onClick={() => setDemoMode("mobile-closed")}
              />
              {/* Drawer */}
              <div className="absolute top-0 left-0 h-full z-20 bg-white flex flex-col" style={{ width: 240, boxShadow: "4px 0 20px rgba(16,24,40,0.15)" }}>
                <div className="flex items-center justify-between px-4 py-4 border-b border-[#F1F3FA]">
                  <NavLogo compact={false} />
                  <button
                    onClick={() => setDemoMode("mobile-closed")}
                    className="w-7 h-7 flex items-center justify-center rounded-[6px] text-[#6B7280] hover:bg-[#F1F3FA] cursor-pointer"
                  >
                    <Icon.X />
                  </button>
                </div>
                <div className="px-3 py-2">
                  <div className="flex items-center gap-2.5 px-2 py-2 rounded-[10px] bg-[#F8F9FF]">
                    <Avatar name="Valentina Rojas" size="xs" colorIndex={0} status="online" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-[#1F2937] truncate">Valentina Rojas</p>
                      <p className="text-[9px] text-[#6B7280]">Estudiante · 8° Básico</p>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 px-3 flex flex-col gap-0.5 overflow-y-auto">
                  {NAV_ITEMS.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveNav(i); setDemoMode("mobile-closed"); }}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-[8px] text-left cursor-pointer transition-all duration-150 ${
                        activeNav === i ? "bg-[#EEF2FF] text-[#3251E8]" : "text-[#4B5563] hover:bg-[#F1F3FA]"
                      }`}
                    >
                      <span className={`shrink-0 ${activeNav === i ? "text-[#3251E8]" : "text-[#9AA1B2]"}`} style={{ transform: "scale(0.9)" }}>{item.icon}</span>
                      <span className={`text-[12px] flex-1 ${activeNav === i ? "font-semibold" : "font-medium"}`}>{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold rounded-full px-1.5 min-w-[18px] text-center" style={{ background: activeNav === i ? "#3251E8" : "#F1F3FA", color: activeNav === i ? "white" : "#6B7280" }}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
                <div className="px-3 py-2 border-t border-[#F1F3FA]">
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[#4B5563] hover:bg-[#F1F3FA] cursor-pointer">
                    <span className="text-[#9AA1B2]" style={{ transform: "scale(0.9)" }}><Icon.Settings /></span>
                    <span className="text-[12px]">Configuración</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spec table */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            bp: "Desktop ≥1024px",
            icon: "🖥",
            specs: ["Sidebar fija 240px", "Ícono + etiqueta + badge", "Chip de perfil expandido", "Siempre visible"],
          },
          {
            bp: "Tablet 768–1023px",
            icon: "📱",
            specs: ["Sidebar compacta 64px", "Solo íconos", "Tooltip en hover", "Avatar de perfil"],
          },
          {
            bp: "Mobile <768px",
            icon: "📲",
            specs: ["Botón hamburger animado", "Drawer 280px + overlay", "Mismos ítems y jerarquía", "Cierra al seleccionar"],
          },
        ].map((col) => (
          <div key={col.bp} className="p-4 rounded-[12px] bg-white border border-[#E4E7F0]">
            <p className="text-[13px] font-bold text-[#111827] mb-1">{col.icon} {col.bp}</p>
            <ul className="flex flex-col gap-1">
              {col.specs.map((s) => (
                <li key={s} className="flex items-center gap-2 text-[12px] text-[#4B5563]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3251E8] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TYPOGRAPHY SCALE ───────────────────────────────────────────────── */

const typeScale = [
  { name: "Display XL",  size: "48px", weight: "800", lh: "1.1", ls: "-0.03em",  sample: "Bienestar estudiantil" },
  { name: "Display L",   size: "36px", weight: "700", lh: "1.15", ls: "-0.025em", sample: "Tu mundo interior" },
  { name: "Heading 1",   size: "28px", weight: "700", lh: "1.2",  ls: "-0.02em",  sample: "Panel de seguimiento" },
  { name: "Heading 2",   size: "22px", weight: "700", lh: "1.25", ls: "-0.018em", sample: "Registro emocional semanal" },
  { name: "Heading 3",   size: "18px", weight: "600", lh: "1.3",  ls: "-0.015em", sample: "Actividades del día" },
  { name: "Body Large",  size: "16px", weight: "400", lh: "1.6",  ls: "0",        sample: "El acompañamiento socioemocional fortalece el desarrollo integral de cada estudiante y su comunidad educativa." },
  { name: "Body",        size: "14px", weight: "400", lh: "1.6",  ls: "0",        sample: "Registra cómo te sientes cada día para que podamos acompañarte mejor en tu proceso de aprendizaje." },
  { name: "Body Small",  size: "13px", weight: "400", lh: "1.5",  ls: "0",        sample: "Última actualización hace 5 minutos · Semana 24 del año escolar" },
  { name: "Label",       size: "12px", weight: "600", lh: "1.4",  ls: "0.01em",   sample: "ESTADO ACTUAL · NIVEL DE ALERTA" },
  { name: "Mono",        size: "13px", weight: "400", lh: "1.5",  ls: "0",        sample: "student_id: 2024-0847 · session: active", mono: true },
];

/* ─── SPACING & RADIUS SCALE ─────────────────────────────────────────── */

const spacingScale = [
  { name: "--space-1",  value: "4px" },
  { name: "--space-2",  value: "8px" },
  { name: "--space-3",  value: "12px" },
  { name: "--space-4",  value: "16px" },
  { name: "--space-5",  value: "20px" },
  { name: "--space-6",  value: "24px" },
  { name: "--space-8",  value: "32px" },
  { name: "--space-10", value: "40px" },
  { name: "--space-12", value: "48px" },
  { name: "--space-16", value: "64px" },
];

const radiusScale = [
  { name: "--radius-sm",   value: "4px",    label: "sm" },
  { name: "--radius-md",   value: "8px",    label: "md" },
  { name: "--radius-lg",   value: "12px",   label: "lg" },
  { name: "--radius-xl",   value: "16px",   label: "xl" },
  { name: "--radius-2xl",  value: "24px",   label: "2xl" },
  { name: "--radius-full", value: "9999px", label: "full" },
];

const shadowScale = [
  { name: "--shadow-xs", label: "XS", style: "0 1px 2px 0 rgba(16,24,40,0.05)" },
  { name: "--shadow-sm", label: "SM", style: "0 1px 3px 0 rgba(16,24,40,0.1),0 1px 2px -1px rgba(16,24,40,0.06)" },
  { name: "--shadow-md", label: "MD", style: "0 4px 6px -1px rgba(16,24,40,0.08),0 2px 4px -2px rgba(16,24,40,0.05)" },
  { name: "--shadow-lg", label: "LG", style: "0 10px 15px -3px rgba(16,24,40,0.08),0 4px 6px -4px rgba(16,24,40,0.04)" },
  { name: "--shadow-xl", label: "XL", style: "0 20px 25px -5px rgba(16,24,40,0.1),0 8px 10px -6px rgba(16,24,40,0.04)" },
  { name: "--shadow-primary", label: "Brand Blue", style: "0 4px 14px 0 rgba(79,103,245,0.25)" },
  { name: "--shadow-teal",    label: "Brand Teal", style: "0 4px 14px 0 rgba(13,148,136,0.22)" },
  { name: "--shadow-violet",  label: "Brand Violet", style: "0 4px 14px 0 rgba(124,58,237,0.22)" },
];

/* ─── USER PROFILE ROLES ─────────────────────────────────────────────── */

const roles = [
  { label: "Estudiante",        color: "blue",   emoji: "🎒" },
  { label: "Docente",           color: "teal",   emoji: "📚" },
  { label: "Apoderado",         color: "success", emoji: "👨‍👩‍👧" },
  { label: "Dupla Psicosocial", color: "violet", emoji: "🧠" },
  { label: "Director",          color: "warning", emoji: "🏫" },
  { label: "Administrador",     color: "neutral", emoji: "⚙️" },
  { label: "Superadministrador",color: "danger",  emoji: "🛡️" },
] as const;

/* ─── DS NAVIGATION (sticky left) ───────────────────────────────────── */

const dsNav = [
  { id: "colores",     label: "Colores" },
  { id: "tipografia",  label: "Tipografía" },
  { id: "espaciado",   label: "Espaciado & Radio" },
  { id: "sombras",     label: "Sombras" },
  { id: "botones",     label: "Botones" },
  { id: "inputs",      label: "Campos" },
  { id: "tarjetas",    label: "Tarjetas" },
  { id: "badges",      label: "Badges" },
  { id: "alertas",     label: "Alertas" },
  { id: "avatares",    label: "Avatares" },
  { id: "navegacion",  label: "Navegación responsive" },
  { id: "emociones",   label: "Emociones" },
  { id: "perfiles",    label: "Perfiles" },
];

/* ─── APP ROOT ───────────────────────────────────────────────────────── */

export default function App() {
  const [view, setView] = useState<AppView>("login");
  const [activeSection, setActiveSection] = useState("colores");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appNavActive, setAppNavActive] = useState(0);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const roleToView: Record<DemoRole, AppView> = {
    docente: "dashboard",
    estudiante: "student",
    director: "director",
    psi: "psycho",
    apoderado: "parent",
  };

  if (view === "login") {
    return <Login onEnterModule={(role) => setView(roleToView[role])} />;
  }

  if (view === "dashboard") {
    return <TeacherDashboardV2 onLogout={() => setView("login")} />;
  }

  if (view === "student") {
    return <StudentDashboard onLogout={() => setView("login")} />;
  }

  if (view === "director") {
    return <DirectorDashboard onLogout={() => setView("login")} />;
  }

  if (view === "psycho") {
    return <PsychoDashboard onLogout={() => setView("login")} />;
  }

  if (view === "parent") {
    return <ParentPortal onLogout={() => setView("login")} />;
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FF" }}>

      {/* ══ TOP BAR — sticky, responde al hamburger en mobile/tablet ══ */}
      <header className="sticky top-0 z-40">
        {/* Topbar con hamburger integrado */}
        <div
          className="flex items-center gap-3 px-3 sm:px-4 h-14 bg-white/95 backdrop-blur-md border-b border-[#E4E7F0]"
          style={{ boxShadow: "0 1px 0 0 #E4E7F0" }}
        >
          {/* Hamburger — visible en mobile/tablet, oculto en desktop */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-[10px] text-[#374151] hover:bg-[#F1F3FA] active:bg-[#EEF2FF] transition-all duration-150 cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <HamburgerIcon open={mobileMenuOpen} />
          </button>

          {/* Logo visible en mobile (cuando no hay sidebar) */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="w-6 h-6 rounded-[7px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3251E8 0%, #7C3AED 100%)" }}>
              <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-[14px] font-bold text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>CONECTA PRO</span>
          </div>

          {/* Title hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-baseline gap-1.5">
            <span className="text-[15px] font-bold text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              CONECTA PRO
            </span>
            <span className="text-[11px] font-semibold text-[#6B7280] tracking-wide hidden lg:inline">
              · Design System v1.0
            </span>
          </div>

          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("login")}
              className="text-[11px] font-medium px-3 py-1.5 rounded-[6px] border border-[#E4E7F0] text-[#4B5563] hover:bg-[#F1F3FA] hover:border-[#CBD0DC] transition-all duration-150 cursor-pointer hidden sm:flex items-center gap-1.5"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-60">
                <path fillRule="evenodd" d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z" clipRule="evenodd" />
              </svg>
              Login
            </button>
            <Badge color="blue" dot>En desarrollo</Badge>
            <Badge color="teal">v1.0.0</Badge>
          </div>
        </div>
      </header>

      {/* ══ RESPONSIVE NAV — único sistema de navegación real ══ */}
      <ResponsiveNav
        activeIdx={appNavActive}
        setActiveIdx={setAppNavActive}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      {/* ══ LAYOUT BODY — desplazado según sidebar activa ══ */}
      <div
        className="flex transition-all duration-300"
        style={{ paddingLeft: 0 }}
      >
        {/* Left DS index nav — visible solo en pantallas muy anchas (xl+), a la derecha de la sidebar */}
        <aside className="hidden xl:block w-52 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pl-4 pr-3 ml-[240px]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1B2] mb-3 px-2">
            Componentes
          </p>
          <nav className="flex flex-col gap-0.5">
            {dsNav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-3 py-2 rounded-[8px] text-[13px] transition-all duration-150 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-[#EEF2FF] text-[#3251E8] font-semibold"
                    : "text-[#4B5563] hover:bg-[#F1F3FA] font-medium"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Main content — con padding-left que respeta la sidebar responsive ── */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 md:ml-[64px] lg:ml-[240px] xl:ml-0 max-w-4xl">

          {/* Hero */}
          <div className="mb-12 pb-10 border-b border-[#E4E7F0]">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-[20px] flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3251E8 0%, #7C3AED 60%, #0D9488 100%)",
                  boxShadow: "0 8px 24px 0 rgba(79,103,245,0.3)",
                }}
              >
                <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
                  <circle cx="16" cy="16" r="8" fill="rgba(255,255,255,0.25)" />
                  <circle cx="16" cy="16" r="4" fill="rgba(255,255,255,0.7)" />
                  <path d="M16 4 C10 4 6 9 6 16 C6 23 10 28 16 28 C22 28 26 23 26 16 C26 9 22 4 16 4Z" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                </svg>
              </div>
              <div>
                <h1
                  className="text-4xl font-extrabold text-[#111827] mb-2 leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.03em" }}
                >
                  Design System
                </h1>
                <p className="text-[15px] text-[#6B7280]">
                  Base visual de la plataforma de acompañamiento socioemocional CONECTA PRO
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Tecnología", "Inteligencia Emocional", "Protección", "Confianza", "Inclusión", "Bienestar"].map((tag) => (
                <Badge key={tag} color="neutral">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* ══ 1. COLORS ══ */}
          <Section id="colores" title="Paleta de colores" subtitle="Tres escalas de color de marca + neutros + colores semánticos">
            <div className="flex flex-col gap-10">
              {colorGroups.map((group) => (
                <div key={group.name}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3
                      className="text-[14px] font-bold text-[#111827]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {group.name}
                    </h3>
                    <span className="text-[12px] text-[#6B7280]">— {group.subtitle}</span>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {group.swatches.map((sw) => (
                      <div key={sw.label} className="flex flex-col gap-1 items-center">
                        <div
                          className="w-14 h-14 rounded-[10px] transition-transform duration-150 hover:scale-105 cursor-default"
                          style={{
                            background: sw.hex,
                            border: (sw as any).border ? "1px solid #E4E7F0" : undefined,
                          }}
                        />
                        <span className="text-[10px] font-mono text-[#6B7280]">{sw.label}</span>
                        <span className="text-[9px] font-mono text-[#9AA1B2]">{sw.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Semantic */}
              <div>
                <h3
                  className="text-[14px] font-bold text-[#111827] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Colores semánticos
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {semanticColors.map((s) => (
                    <div key={s.name} className="rounded-[12px] overflow-hidden border border-[#E4E7F0]">
                      <div className="h-16" style={{ background: s.hex }} />
                      <div className="px-3 py-2 bg-white">
                        <p className="text-[12px] font-semibold text-[#374151]">{s.label}</p>
                        <p className="text-[10px] font-mono text-[#9AA1B2]">{s.hex}</p>
                        <div className="mt-1.5 h-4 rounded-[4px]" style={{ background: s.light, border: `1px solid ${s.hex}33` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 2. TYPOGRAPHY ══ */}
          <Section id="tipografia" title="Tipografía" subtitle="Plus Jakarta Sans (display/headings) · Inter (body) · JetBrains Mono (datos)">
            <div className="flex flex-col divide-y divide-[#F1F3FA]">
              {typeScale.map((t) => (
                <div key={t.name} className="py-5 flex items-baseline gap-6 flex-wrap">
                  <div className="w-28 shrink-0">
                    <p className="text-[12px] font-semibold text-[#374151]">{t.name}</p>
                    <div className="flex flex-col gap-0.5 mt-1">
                      <TokenLabel>{t.size}</TokenLabel>
                      <TokenLabel>w{t.weight}</TokenLabel>
                    </div>
                  </div>
                  <p
                    className="flex-1 text-[#1F2937] min-w-0"
                    style={{
                      fontFamily: t.mono
                        ? "'JetBrains Mono', monospace"
                        : t.name.includes("Display") || t.name.includes("Heading")
                        ? "'Plus Jakarta Sans', sans-serif"
                        : "'Inter', sans-serif",
                      fontSize: t.size,
                      fontWeight: t.weight,
                      lineHeight: t.lh,
                      letterSpacing: t.ls,
                    }}
                  >
                    {t.sample}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* ══ 3. SPACING & RADIUS ══ */}
          <Section id="espaciado" title="Espaciado y radios" subtitle="Escala de 8 puntos con tokens CSS custom properties">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Spacing */}
              <div>
                <h3 className="text-[13px] font-bold text-[#374151] mb-4">Espaciado</h3>
                <div className="flex flex-col gap-2">
                  {spacingScale.map((s) => (
                    <div key={s.name} className="flex items-center gap-3">
                      <TokenLabel>{s.name}</TokenLabel>
                      <div
                        className="bg-[#3251E8] rounded-[3px] h-4 shrink-0"
                        style={{ width: s.value, opacity: 0.7 }}
                      />
                      <span className="text-[12px] font-mono text-[#6B7280]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Radius */}
              <div>
                <h3 className="text-[13px] font-bold text-[#374151] mb-4">Border radius</h3>
                <div className="flex flex-col gap-3">
                  {radiusScale.map((r) => (
                    <div key={r.name} className="flex items-center gap-3">
                      <TokenLabel>{r.name}</TokenLabel>
                      <div
                        className="w-12 h-8 bg-[#EEF2FF] border-2 border-[#818CF8] shrink-0"
                        style={{ borderRadius: r.value === "9999px" ? "9999px" : r.value }}
                      />
                      <span className="text-[12px] font-mono text-[#6B7280]">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 4. SHADOWS ══ */}
          <Section id="sombras" title="Sombras" subtitle="Escala neutra + sombras de color para componentes de marca">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {shadowScale.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-3">
                  <div
                    className="w-full h-20 bg-white rounded-[12px]"
                    style={{ boxShadow: s.style }}
                  />
                  <div className="text-center">
                    <p className="text-[12px] font-semibold text-[#374151]">{s.label}</p>
                    <TokenLabel>{s.name}</TokenLabel>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ══ 5. BUTTONS ══ */}
          <Section id="botones" title="Botones" subtitle="5 variantes · 3 tamaños · estados: default, hover, activo, desactivado">
            <div className="flex flex-col gap-8">
              {/* Variants */}
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Variantes</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Registrar emoción</Button>
                  <Button variant="secondary">Ver reporte</Button>
                  <Button variant="ghost">Cancelar</Button>
                  <Button variant="teal" icon={<Icon.Heart />}>Bienestar</Button>
                  <Button variant="danger">Eliminar registro</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Tamaños</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Pequeño</Button>
                  <Button size="md">Mediano</Button>
                  <Button size="lg">Grande</Button>
                </div>
              </div>

              {/* Icons */}
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Con íconos</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" icon={<Icon.Heart />}>Añadir nota emocional</Button>
                  <Button variant="secondary" icon={<Icon.Chart />}>Ver estadísticas</Button>
                  <Button variant="ghost" icon={<Icon.Bell />}>Notificaciones</Button>
                </div>
              </div>

              {/* Disabled */}
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Desactivado</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" disabled>Enviar</Button>
                  <Button variant="secondary" disabled>Guardar borrador</Button>
                  <Button variant="ghost" disabled>Cancelar</Button>
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 6. INPUTS ══ */}
          <Section id="inputs" title="Campos de entrada" subtitle="Texto, con ícono, error, hint · foco con ring azul">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <Input label="Nombre del estudiante" placeholder="Ej: María González" />
              <Input label="Correo electrónico" placeholder="nombre@escuela.cl" type="email" icon={<Icon.Globe />} />
              <Input label="Buscar recurso" placeholder="Buscar..." icon={<Icon.Search />} hint="Puedes buscar por nombre, tema o nivel." />
              <Input label="Contraseña" placeholder="••••••••" type="password" icon={<Icon.Eye />} error="La contraseña debe tener al menos 8 caracteres." />
              <div className="sm:col-span-2">
                <label className="block text-[13px] font-semibold text-[#374151] mb-1.5">Nota o comentario</label>
                <textarea
                  rows={3}
                  placeholder="Escribe aquí tu observación sobre el estudiante..."
                  className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#CBD0DC] text-[14px] text-[#1F2937] placeholder:text-[#9AA1B2] bg-white hover:border-[#9AA1B2] focus:outline-none focus:border-[#3251E8] focus:ring-2 focus:ring-[#3251E8]/20 transition-all duration-150 resize-none"
                />
                <p className="text-[12px] text-[#6B7280] mt-1">Máximo 500 caracteres.</p>
              </div>
            </div>
          </Section>

          {/* ══ 7. CARDS ══ */}
          <Section id="tarjetas" title="Tarjetas" subtitle="Contenedor base · con hover · destacada · estadística">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Basic */}
              <Card className="p-5">
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1">Tarjeta base</p>
                <p className="text-[14px] text-[#374151]">Contenedor estándar para información agrupada. Borde sutil, radio 16px, sombra xs.</p>
              </Card>

              {/* Hover */}
              <Card className="p-5" hover>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1">Con hover</p>
                <p className="text-[14px] text-[#374151]">Interactiva. Eleva la sombra y sube 2px al pasar el cursor.</p>
                <div className="mt-3 flex gap-1.5">
                  <Badge color="blue">Hover</Badge>
                  <Badge color="neutral">Interactiva</Badge>
                </div>
              </Card>

              {/* Stat */}
              <Card className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white"
                    style={{ background: "linear-gradient(135deg, #3251E8, #7C3AED)" }}
                  >
                    <Icon.Heart />
                  </div>
                  <Badge color="success" dot>+12%</Badge>
                </div>
                <p className="text-3xl font-bold text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>84%</p>
                <p className="text-[13px] text-[#6B7280] mt-0.5">Índice de bienestar grupal</p>
              </Card>

              {/* Profile card */}
              <Card className="p-5 sm:col-span-2">
                <div className="flex items-center gap-4">
                  <Avatar name="Carlos Mendoza" size="lg" colorIndex={1} status="online" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[15px] font-bold text-[#111827]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Carlos Mendoza</p>
                      <Badge color="teal">Docente</Badge>
                    </div>
                    <p className="text-[13px] text-[#6B7280]">Matemáticas · 7° y 8° Básico</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="secondary">Ver perfil</Button>
                      <Button size="sm" variant="ghost">Mensaje</Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Alert card */}
              <div
                className="p-5 bg-white rounded-[16px] border border-[#E4E7F0] border-l-4 shadow-[0_1px_3px_0_rgba(16,24,40,0.08)]"
                style={{ borderLeftColor: "#F59E0B" }}
              >
                <div className="flex gap-2.5">
                  <span className="text-[#F59E0B] mt-0.5"><Icon.Alert /></span>
                  <div>
                    <p className="text-[13px] font-semibold text-[#374151]">Estudiante requiere atención</p>
                    <p className="text-[12px] text-[#6B7280] mt-0.5">Andrea Silva ha registrado emociones negativas por 3 días consecutivos.</p>
                    <div className="mt-3">
                      <Button size="sm" variant="secondary">Ver caso</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 8. BADGES ══ */}
          <Section id="badges" title="Badges" subtitle="7 variantes de color · con y sin indicador de estado">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Variantes</p>
                <div className="flex flex-wrap gap-2">
                  <Badge color="blue">Azul · Primario</Badge>
                  <Badge color="teal">Teal · Bienestar</Badge>
                  <Badge color="violet">Violeta · Acento</Badge>
                  <Badge color="success">Éxito</Badge>
                  <Badge color="warning">Advertencia</Badge>
                  <Badge color="danger">Error</Badge>
                  <Badge color="neutral">Neutro</Badge>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Con indicador de estado</p>
                <div className="flex flex-wrap gap-2">
                  <Badge color="success" dot>En línea</Badge>
                  <Badge color="warning" dot>Ausente</Badge>
                  <Badge color="danger" dot>Urgente</Badge>
                  <Badge color="blue" dot>En progreso</Badge>
                  <Badge color="neutral" dot>Inactivo</Badge>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Uso contextual</p>
                <div className="flex flex-wrap gap-2">
                  <Badge color="blue">Estudiante</Badge>
                  <Badge color="teal">Docente</Badge>
                  <Badge color="violet">Dupla Psicosocial</Badge>
                  <Badge color="success">Apoderado</Badge>
                  <Badge color="warning">Director</Badge>
                  <Badge color="neutral">Administrador</Badge>
                  <Badge color="danger">Superadmin</Badge>
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 9. ALERTS ══ */}
          <Section id="alertas" title="Alertas" subtitle="4 tipos semánticos · icono + título + descripción">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Alert type="info" title="Sesión de bienestar programada">
                Tienes una sesión con la dupla psicosocial el próximo martes a las 10:30 hrs.
              </Alert>
              <Alert type="success" title="Registro guardado correctamente">
                Tu emoción del día ha sido registrada. ¡Gracias por compartir cómo te sientes!
              </Alert>
              <Alert type="warning" title="Patrón emocional recurrente detectado">
                El estudiante ha reportado emociones de alta intensidad durante 4 días. Se sugiere seguimiento.
              </Alert>
              <Alert type="danger" title="Protocolo de alerta activado">
                Se ha detectado una situación que requiere intervención inmediata del equipo psicosocial.
              </Alert>
            </div>
          </Section>

          {/* ══ 10. AVATARS ══ */}
          <Section id="avatares" title="Avatares" subtitle="5 tamaños · 5 paletas de color · estados de presencia">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Tamaños</p>
                <div className="flex items-end gap-4">
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((size, i) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <Avatar name="Andrea Silva" size={size} colorIndex={i} />
                      <TokenLabel>{size}</TokenLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Estado de presencia</p>
                <div className="flex items-center gap-4">
                  {(["online", "away", "busy", "offline"] as const).map((status, i) => (
                    <div key={status} className="flex flex-col items-center gap-2">
                      <Avatar name="Luis Torres" size="md" colorIndex={i} status={status} />
                      <span className="text-[11px] text-[#6B7280] capitalize">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Grupo de avatares</p>
                <div className="flex -space-x-2.5">
                  {["Valentina Rojas", "Carlos Mendoza", "Andrea Silva", "Luis Torres", "María González"].map((name, i) => (
                    <div key={name} className="ring-2 ring-white rounded-full">
                      <Avatar name={name} size="md" colorIndex={i} />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full ring-2 ring-white bg-[#F1F3FA] flex items-center justify-center text-[12px] font-semibold text-[#6B7280]">
                    +8
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 11. NAVEGACIÓN RESPONSIVE ══ */}
          <Section
            id="navegacion"
            title="Navegación responsive"
            subtitle="Un único sistema — sidebar expandida (desktop) · compacta (tablet) · drawer hamburger (mobile)"
          >
            <NavigationShowcase />
          </Section>

          {/* ══ 13. EMOTIONS ══ */}
          <Section id="emociones" title="Componentes de emociones" subtitle="Selector, historial semanal, badges emocionales · diseñados para check-in diario">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Selector de emoción con intensidad</p>
                <EmotionSelector />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Historial semanal</p>
                <EmotionHistoryCard />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Paleta de emociones · Chips</p>
                <EmotionBadges />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Mapa de color emocional</p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {emotions.map((e) => (
                    <div key={e.id} className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2"
                        style={{ background: e.bg, borderColor: e.color }}
                      >
                        {e.emoji}
                      </div>
                      <span className="text-[9px] text-center text-[#6B7280] font-medium leading-tight">{e.label}</span>
                      <span className="text-[8px] font-mono text-[#9AA1B2]">{e.color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ══ 14. USER PROFILES ══ */}
          <Section id="perfiles" title="Perfiles de usuario" subtitle="7 perfiles comparten el mismo lenguaje visual — diferenciados por color de badge y acceso">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, i) => (
                <Card key={role.label} className="p-4" hover>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xl shrink-0"
                      style={{ background: "#F8F9FF" }}
                    >
                      {role.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-semibold text-[#1F2937]">{role.label}</p>
                        <Badge color={role.color as BadgeColor}>{role.label.split(" ")[0]}</Badge>
                      </div>
                      <p className="text-[12px] text-[#9AA1B2] mt-0.5">
                        Acceso nivel {i + 1} · Perfil {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <Avatar name={["Valentina R.", "Carlos M.", "Sandra P.", "Dra. Mora", "Jorge V.", "Admin CP", "Root SA"][i]} size="sm" colorIndex={i} />
                  </div>
                </Card>
              ))}
            </div>

            {/* Shared language note */}
            <div className="mt-6 p-5 rounded-[12px] bg-[#EEF2FF] border border-[#C7D2FE]">
              <div className="flex gap-3">
                <span className="text-[#3251E8] mt-0.5"><Icon.Info /></span>
                <div>
                  <p className="text-[13px] font-semibold text-[#2640C8]">Lenguaje visual compartido</p>
                  <p className="text-[13px] text-[#3251E8]/80 mt-0.5">
                    Todos los perfiles comparten la misma tipografía, escala de radios, sistema de sombras, tokens de color y componentes base. La diferenciación por perfil se logra únicamente a través de badges, nivel de acceso visible y personalización de contenido — no del sistema visual.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="py-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div
                className="w-6 h-6 rounded-[7px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3251E8 0%, #7C3AED 100%)" }}
              >
                <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#374151]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                CONECTA PRO · Design System v1.0
              </span>
            </div>
            <p className="text-[12px] text-[#9AA1B2]">
              Base visual lista para construir módulos de Estudiante, Docente, Apoderado, Dupla Psicosocial, Director, Administrador y Superadministrador.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
