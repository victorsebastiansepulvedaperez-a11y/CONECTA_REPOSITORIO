import { useState } from "react";
import PortalEstudianteDashboardMovilDefinitivoFusionado from "./imports/PortalEstudianteDashboardMovilDefinitivoFusionado/index";
import ConfiguracionFondoGalaxiaDifuminado from "./imports/ConfiguracionFondoGalaxiaDifuminado/index";

export default function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-auto" style={{ background: "#14121800" }}>
      {/* Floating bar */}
      <div className="fixed bottom-4 left-[300px] z-50 flex items-center gap-2">
        <button
          onClick={() => setShowConfig(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
          style={{
            background: "rgba(207,189,255,0.15)",
            color: "#cfbdff",
            border: "1px solid rgba(207,189,255,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <svg viewBox="0 0 18 18" fill="currentColor" width="13" height="13">
            <path d="M7.47 1.97a.75.75 0 011.06 0 5.25 5.25 0 017.07 7.07.75.75 0 11-1.06-1.06A3.75 3.75 0 0014.25 9a3.75 3.75 0 00-6-3V7.5a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H9.56A5.25 5.25 0 017.47 1.97z" />
          </svg>
          Configuración
        </button>
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
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
          Salir
        </button>
      </div>

      {/* Config overlay */}
      {showConfig && (
        <div
          className="fixed inset-0 z-[100] overflow-hidden"
          onClick={() => setShowConfig(false)}
        >
          <div
            className="relative w-full h-full"
            style={{ width: 1000, height: 800 }}
            onClick={e => e.stopPropagation()}
          >
            <ConfiguracionFondoGalaxiaDifuminado />
          </div>
        </div>
      )}

      {/* Main dashboard */}
      <div style={{ width: 1870, minHeight: 1024, position: "relative" }}>
        <PortalEstudianteDashboardMovilDefinitivoFusionado />
      </div>
    </div>
  );
}
