import HtmlBody from "./imports/Html→Body/index";

export default function TeacherDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      className="relative w-full min-h-screen overflow-auto"
      style={{ background: "#14131800", backgroundImage: "linear-gradient(135deg, #14131800 0%, #14131800 100%)" }}
    >
      {/* Floating action bar */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2">
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
          style={{
            background: "rgba(255,180,171,0.15)",
            color: "#ffb4ab",
            border: "1px solid rgba(255,180,171,0.25)",
            backdropFilter: "blur(8px)",
          }}
          title="Cerrar sesión"
        >
          <svg viewBox="0 0 18 18" fill="currentColor" width="14" height="14">
            <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V2V2V16V16V16H9V18H2V18M13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14V14" />
          </svg>
          Cerrar sesión
        </button>
      </div>

      {/* The Figma-exported dashboard rendered at its native dimensions with scroll */}
      <div style={{ width: 1576, minHeight: 1024, position: "relative" }}>
        <HtmlBody />
      </div>
    </div>
  );
}
