import PortalApoderadoParticipacionYLogros from "./imports/PortalApoderadoParticipacionYLogros/index";

export default function ParentPortal({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="relative w-full min-h-screen overflow-auto" style={{ background: "#141218" }}>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
          style={{
            background: "rgba(255,180,171,0.15)",
            color: "#ffb4ab",
            border: "1px solid rgba(255,180,171,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <svg viewBox="0 0 18 18" fill="currentColor" width="13" height="13">
            <path d="M2 18C1.45 18 0.979 17.804 0.588 17.413C0.196 17.021 0 16.55 0 16V2C0 1.45 0.196 0.979 0.588 0.588C0.979 0.196 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z" />
          </svg>
          Cerrar sesión
        </button>
      </div>
      <div style={{ width: 1280, minHeight: 1698, position: "relative" }}>
        <PortalApoderadoParticipacionYLogros />
      </div>
    </div>
  );
}
