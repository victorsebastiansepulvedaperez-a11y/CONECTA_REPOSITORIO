export type CourseRecord = {
  id: string;
  name: string;
  level: string;
  teacher: {
    id: string;
    name: string;
  };
  totalStudents: number;
  riskLevel: "Bajo" | "Medio" | "Alto";
  source: "Importación Sige" | "Carga manual" | "Asignación directiva";
};

export type TeacherRecord = {
  id: string;
  name: string;
  role: "Docente" | "Orientación" | "Dirección";
  assignedCourses: string[];
  status: "Activo" | "Pendiente";
};

export type RoleAssignment = {
  role: "Director" | "Docente" | "Alumno" | "Psicosocial" | "Apoderado";
  total: number;
  source: "Sistema" | "Importación Sige" | "Carga manual";
};

export const directorInstitutionData = {
  schoolName: "Colegio Chile Norte",
  syncStatus: "Datos institucionales sincronizados",
  summary: {
    activeCourses: 12,
    teachers: 28,
    students: 316,
    roles: 5,
  },
  courses: [
    {
      id: "CUR-101",
      name: "7° A",
      level: "7° Básico",
      teacher: { id: "DOC-01", name: "María Elena Ortiz" },
      totalStudents: 34,
      riskLevel: "Medio",
      source: "Importación Sige",
    },
    {
      id: "CUR-102",
      name: "8° B",
      level: "8° Básico",
      teacher: { id: "DOC-02", name: "César Muñoz" },
      totalStudents: 31,
      riskLevel: "Bajo",
      source: "Importación Sige",
    },
    {
      id: "CUR-201",
      name: "1° Medio A",
      level: "1° Medio",
      teacher: { id: "DOC-03", name: "Patricia Salazar" },
      totalStudents: 28,
      riskLevel: "Medio",
      source: "Carga manual",
    },
    {
      id: "CUR-202",
      name: "4° Medio B",
      level: "4° Medio",
      teacher: { id: "DOC-04", name: "Ramón Iglesias" },
      totalStudents: 30,
      riskLevel: "Alto",
      source: "Asignación directiva",
    },
  ] as CourseRecord[],
  teachers: [
    { id: "DOC-01", name: "María Elena Ortiz", role: "Docente", assignedCourses: ["7° A"], status: "Activo" },
    { id: "DOC-02", name: "César Muñoz", role: "Docente", assignedCourses: ["8° B"], status: "Activo" },
    { id: "DOC-03", name: "Patricia Salazar", role: "Docente", assignedCourses: ["1° Medio A"], status: "Activo" },
    { id: "DOC-04", name: "Ramón Iglesias", role: "Docente", assignedCourses: ["4° Medio B"], status: "Activo" },
    { id: "PSI-01", name: "Daniela Flores", role: "Orientación", assignedCourses: ["Toda la institución"], status: "Activo" },
  ] as TeacherRecord[],
  roleAssignments: [
    { role: "Director", total: 1, source: "Sistema" },
    { role: "Docente", total: 28, source: "Carga manual" },
    { role: "Alumno", total: 316, source: "Importación Sige" },
    { role: "Psicosocial", total: 4, source: "Carga manual" },
    { role: "Apoderado", total: 290, source: "Importación Sige" },
  ] as RoleAssignment[],
};
