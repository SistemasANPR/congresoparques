# Deuda tecnica

Registro vivo. Sale del diagnostico de alineacion con la plantilla de documentos
de contexto (2026-11-06). Cada punto se trabaja **uno a uno y con aprobacion
previa**: propuesta (archivos, antes/despues, riesgo, verificacion) → "adelante"
→ cambio minimo con pruebas → salida real de las validaciones → commit →
mover a "Resueltos" con su hash en un commit `docs(debt)`.

Prioridades: **P1** seguridad y datos · **P2** contratos API · **P3**
convenciones · **P4** estilo. Esfuerzo: S (< 1 h), M (media jornada), L (una o
mas jornadas). Un punto L se trabaja con un plan en `docs/plans/` (ADR-0001).

Lo que NO esta aqui porque se decidio no cambiarlo:
- **Estructura `client/` y `server/`** en la raiz; no se migra a `packages/*`
  (no hay codigo compartido que lo justifique).
- **Idioma de los nombres heredados**: el codigo existente en ingles o mezclado
  (shadcn/ui, `Navigation`, `Footer`, `useIsMobile`...) es excepcion
  documentada en `CLAUDE.md` §4; no se renombra en masa. Solo el codigo nuevo
  va en espanol.
- **Contrato de `/api/image-proxy`**: parametros y respuestas congelados
  (D1-1 lo endurece sin cambiar el contrato para los usos legitimos).
- **Archivos de Replit** (`.replit`, plugins `@replit/*`, las tres
  configuraciones de Vite): se conservan porque el equipo de diseno trabaja
  desde Replit.
- **Sin i18n ni modo oscuro**: el sitio es solo en espanol y claro.
- **Base de datos**: decidida, pero no es deuda; es trabajo nuevo y empieza con
  una ADR y una propuesta segun `docs/database-design.md`.

---

## Pendientes

### P1 · Seguridad y datos

| #    | Punto | Archivos | Esfuerzo |
| ---- | ----- | -------- | -------- |
| D1-1 | `/api/image-proxy` descarga cualquier URL que reciba (SSRF), sin validar host, esquema, `Content-Type`, tamano ni timeout. Restringir a los hosts de imagenes que el sitio usa realmente y limitar tamano y tiempo | `server/index.ts` | S |
| D1-2 | `npm audit`: 27 vulnerabilidades (1 critica en `proxy-addr`, 17 altas; entre ellas `vite`, `body-parser`, `path-to-regexp`, `rollup`, `postcss`, `xlsx`, `zod`). Evaluar cuales llegan a produccion y actualizar sin `--force`; no aprobar scripts de instalacion por reflejo | `package.json`, `package-lock.json` | M |

### P2 · Contratos API

| #    | Punto | Archivos | Esfuerzo |
| ---- | ----- | -------- | -------- |
| D2-1 | `/api/image-proxy` no existe en el despliegue de Vercel (solo estatico), asi que las fotos que pasan por el proxy no cargarian alli. Decidir: funcion serverless, quitar el proxy o servir las imagenes desde `client/public/` | `vercel.json`, `server/index.ts`, `HexagonPhoto.tsx`, `programa.tsx`, `talleres.tsx` | M |
| D2-2 | Las llamadas a `congresoparques.com/cpanel/api/*` usan `fetch` directo sin contrato tipado ni validacion con Zod, y sin estados de error comprobados. Tipar y validar la respuesta y usar `useQuery` | `landing.tsx`, `eventos-sociales.tsx` | M |

### P3 · Convenciones

| #    | Punto | Archivos | Esfuerzo |
| ---- | ----- | -------- | -------- |
| D3-1 | Sin tests, linter, formateador ni CI. Instalar Vitest, ESLint y Prettier (requiere autorizacion de dependencias), un script `lint`/`test`, la excepcion de `**/*.test.ts` en `tsconfig.json` y un CI minimo. Despues, los tests guardianes (sin `export default` nuevo, sin hex nuevos, catalogo, contraste) | `package.json`, `tsconfig.json`, nuevos | L |
| D3-2 | `npm run dev` no funciona en Windows (`NODE_ENV=` inline) y solo sirve `dist/public`, no el cliente con recarga. Anadir un script `dev:cliente` (`vite`) y `cross-env` o equivalente | `package.json` | S |
| D3-3 | ~645 colores hex directos como clases arbitrarias (`bg-[#6847F6]`) frente a ~44 usos de tokens semanticos. Definir tokens de la identidad 2026 en `index.css`/`tailwind.config.ts` y migrar pagina por pagina | `index.css`, `tailwind.config.ts`, `client/src/pages/*`, `components/*` | L |
| D3-4 | Sin Atomic Design ni catalogo de componentes: `components/` es plano y la interfaz esta dentro de las paginas. Plan propio con fases | `client/src/components/*`, `design.md` | L |
| D3-5 | Dependencias sin uso: `jspdf`, `html2canvas` y `xlsx` (ningun archivo las importa; `xlsx` ademas tiene vulnerabilidad alta). Revisar tambien los componentes `components/ui/*` que ninguna pagina usa y los plugins de Replit fuera de Replit | `package.json`, `components/ui/*` | M |
| D3-6 | Paginas gigantes: `landing.tsx` (1.776 lineas), `programa.tsx` (1.126), `directorio-expositores.tsx` (1.033), `congreso.tsx` (954). Extraer secciones y datos a `components/` y `data/` (una pagina por fase) | `client/src/pages/*` | L |
| D3-7 | Configuracion inconsistente: `tsconfig.json` y Vite referencian `shared/` que no existe; `db:push` apunta a `drizzle-kit` (no instalado) y `server/index.ts` imprime "Production server" siempre; tres `vite.config*.ts` con duplicacion | `tsconfig.json`, `package.json`, `server/index.ts`, `vite.config*.ts` | S |
| D3-8 | `attached_assets/` pesa 155 MB (526 archivos) y `client/public/` 15 MB, con imagenes y PDF sin optimizar. Auditar uso, optimizar o mover lo que no se importe | `attached_assets/`, `client/public/` | M |
| D3-9 | 25 archivos con `export default` (heredado). Migrar a `export function` nombrada gradualmente, al tocar cada archivo; el guardian de D3-1 impide anadir nuevos | `client/src/**` | M |

### P4 · Estilo

| #    | Punto | Archivos | Esfuerzo |
| ---- | ----- | -------- | -------- |
| D4-1 | `index.css` (1.642 lineas) mezcla tokens, clases de secciones y reglas de imagen globales (`img { transform: translateZ(0) ... }`); separar y depurar CSS sin uso | `client/src/index.css` | M |

---

## Resueltos

> Cada fila cita lo que se hizo, cuantos tests nuevos y como se verifico. Un
> punto que cierra en varios commits los lista todos.

| #   | Punto | Commit | Fecha |
| --- | ----- | ------ | ----- |
