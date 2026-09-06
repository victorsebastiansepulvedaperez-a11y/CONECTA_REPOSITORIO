# Prompts quirúrgicos — CONECTA PRO V1

Estos prompts quedan preparados pero **NO deben ejecutarse todavía**. Primero debe terminar la auditoría.

## P0 — Autenticación real

> Audita y reemplaza únicamente la autenticación demo de CONECTA por una autenticación real, sin alterar el diseño ni los módulos existentes. Antes de editar, identifica todos los puntos donde el rol y la sesión se crean/consumen. Implementa sesión segura, expiración, logout y manejo de errores. El frontend nunca debe contener contraseñas reales, llaves maestras ni secretos. Mantén los datos mock disponibles mediante una bandera de desarrollo. No elimines componentes ni cambies rutas sin demostrar que no tienen consumidores. Entrega diff, pruebas y lista de archivos modificados.

## P0 — Autorización

> Implementa autorización por rol en el servidor/capa de datos, no solamente ocultamiento de menú. Define permisos mínimos para estudiante, docente, director, psicosocial y apoderado. Un usuario no debe poder consultar por manipulación del frontend información de otro rol, otro curso o otro estudiante. Mantén el contrato visual actual. Añade pruebas de acceso permitido/denegado.

## P0 — Persistencia

> Sustituye gradualmente la persistencia local de producción por una capa de servicios. No modifiques la UX. Crea primero interfaces/contratos para ideas, Kudos, check-ins, alertas y perfiles. Mantén localStorage únicamente como adapter de desarrollo hasta validar el backend. No dupliques lógica de negocio dentro de los componentes.

## P1 — IA

> Integra el asistente de CONECTA mediante un backend seguro. La clave de Gemini nunca debe llegar al navegador. La IA debe recibir solamente el contexto mínimo autorizado por el rol. No exponer conversaciones privadas de estudiantes a dirección por defecto. Toda alerta de riesgo debe quedar marcada como señal para revisión humana, no como diagnóstico automático. Mantén el componente visual actual y reemplaza solamente el proveedor de datos simulado.

## P1 — Datos mock

> Reemplaza datos mock por servicios reales módulo por módulo. No hagas una migración masiva. Para cada módulo identifica: fuente actual, contrato requerido, estado de carga, error, vacío y éxito. Conserva mocks detrás de un adapter de desarrollo hasta completar pruebas.

## P1 — Fechas/contexto institucional

> Centraliza año académico, colegio, RBD, período y zona horaria en un contexto institucional. Elimina fechas hardcodeadas únicamente después de crear la fuente central. No alterar textos históricos necesarios para fixtures de prueba.

## Regla de seguridad

Ningún prompt de corrección debe ordenar “reescribir todo”, “modernizar todo”, “eliminar archivos no usados” o “simplificar componentes” sin una auditoría de dependencias previa.
