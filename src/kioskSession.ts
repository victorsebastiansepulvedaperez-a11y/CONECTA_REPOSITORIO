export const KIOSK_STORAGE_PREFIX = "conecta-kiosk-session:";

export const kioskMoods = [
  { label: "Feliz", emoji: "😊" },
  { label: "Bien", emoji: "😮" },
  { label: "Cansado", emoji: "🥱" },
  { label: "Triste", emoji: "😔" },
  { label: "Enojado", emoji: "😡" },
] as const;

export type KioskMood = (typeof kioskMoods)[number]["label"];
export type KioskSessionStatus = "active" | "completed";

export type KioskStudent = {
  id: string;
  name: string;
  mood: KioskMood | null;
  recordedAt: string | null;
};

export type KioskSession = {
  id: string;
  course: string;
  status: KioskSessionStatus;
  startedAt: string;
  completedAt: string | null;
  students: KioskStudent[];
};

export const demoStudents = [
  "Mateo Rivera",
  "Sofía Carvajal",
  "Valentina Soto",
  "Andrés Rojas",
  "Camila Torres",
  "Javier Peña",
].map((name) => ({
  id: name.toLocaleLowerCase("es-CL").replace(/\s+/g, "-"),
  name,
}));

export function createKioskSession(course: string): KioskSession {
  return {
    id: crypto.randomUUID(),
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

export function saveKioskSession(session: KioskSession): void {
  localStorage.setItem(
    `${KIOSK_STORAGE_PREFIX}${session.id}`,
    JSON.stringify(session),
  );
}

export function loadKioskSession(sessionId: string): KioskSession | null {
  const raw = localStorage.getItem(`${KIOSK_STORAGE_PREFIX}${sessionId}`);
  if (!raw) return null;

  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("id" in parsed) ||
    !("course" in parsed) ||
    !("status" in parsed) ||
    !("students" in parsed) ||
    parsed.id !== sessionId ||
    typeof parsed.course !== "string" ||
    (parsed.status !== "active" && parsed.status !== "completed") ||
    !Array.isArray(parsed.students)
  ) {
    throw new Error("La sesión del kiosco guardada no tiene un formato válido.");
  }

  return parsed as KioskSession;
}

export function createKioskUrl(session: KioskSession): string {
  const url = new URL("/", window.location.origin);
  url.searchParams.set("kiosco", session.id);
  url.searchParams.set("curso", session.course);
  return url.toString();
}
