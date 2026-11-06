# Congreso Parques Tijuana 2026 — Contexto del Proyecto para Claude Code

> Contrato de trabajo del agente. No modificar sin revision del equipo.
> Ultima actualizacion: noviembre de 2026

---

## Documentos de Contexto

| Archivo | Cuando leerlo |
|---|---|
| `CLAUDE.md` (este) | Inicio de cada sesion. Reglas globales |
| `AGENTS.md` | Reglas estables para cualquier agente; sin estado de sesion |
| `server/CLAUDE.md` | Al trabajar en `server/` (Express y proxy de imagenes) |
| `client/CLAUDE.md` | Al trabajar en cualquier archivo del cliente |
| `docs/api/endpoints.md` | Al crear o modificar endpoints |
| `docs/database-design.md` | Antes de crear, modificar o eliminar datos persistentes (BD por implementar) |
| `design.md` | Al crear o modificar componentes o estilos |
| `docs/adr/0001-desarrollo-guiado-por-especificaciones.md` | Antes de construir cualquier funcionalidad o modulo nuevo |
| `docs/sprints/deuda-tecnica.md` | Antes de tocar un area con deuda abierta; al cerrar un punto |
| `docs/historico/replit.md` | Solo como contexto historico (desactualizado) |

> Claude Code carga los CLAUDE.md del directorio activo hacia arriba automaticamente.
> En caso de conflicto entre documentos, `design.md` prevalece para todo lo visual
> y `docs/database-design.md` prevalece para datos persistentes.
> Si un documento contradice el codigo o la configuracion, gana el codigo.

---

## 1. Descripcion del Proyecto

Sitio web publico del **Congreso Parques Tijuana 2026**, congreso latinoamericano
de espacios publicos y parques urbanos organizado por la ANPR (Asociacion
Nacional de Parques y Recreacion). Es una landing multipagina informativa
(19 rutas) que dirige a los registros alojados en `congresoparques.com`. Hoy no tiene
base de datos, usuarios ni autenticacion (**se va a implementar una base de
datos**, ver `docs/database-design.md`); el contenido dinamico (programa,
conferencistas) se lee de `congresoparques.com/cpanel/api/`.

- **Despliegue:** Vercel (`vercel.json`, `npm run build:vercel`) y Replit (`.replit`,
  lo usa el equipo de diseno). Sin base de datos ni almacenamiento propio todavia; el backend para la futura base de datos aun no tiene destino de despliegue [PENDIENTE: donde correra el servidor].
- **Idiomas V1:** espanol (sin i18n)
- **Dominio publico:** `congresoparques2026.mx` (segun `client/index.html`)

---

## 2. Stack

```
Proyecto:   Un solo paquete npm · Node 22 (local) · TypeScript 5.6 strict
Backend:    Express 5 (server/index.ts): archivos estaticos + /api/image-proxy
Frontend:   React 18 + Vite 5 + wouter · Tailwind 3.4 + shadcn/ui (Radix)
            · TanStack Query 5 (sin uso real) · react-hook-form + zod · framer-motion
Auth:       ninguna (por definir con la base de datos)
Base datos: por implementar [PENDIENTE: motor y ORM; ADR antes de la primera tabla]
Externos:   congresoparques.com (API de programa, registros, imagenes),
            ActiveCampaign (newsletter), Unsplash (imagenes de hero)
Documentos: @react-pdf/renderer en el cliente (jspdf, html2canvas y xlsx
            estan instaladas pero sin uso)
Testing:    ninguno todavia (deuda D3-1)
Calidad:    solo `tsc`. Sin linter, formateador ni CI (deuda D3-1)
```

> Toda libreria que no este en esta lista requiere autorizacion explicita antes de
> agregarse (ver seccion 6).

---

## 3. Estructura

```
congresoparques/
├── CLAUDE.md                ← reglas globales (este archivo)
├── AGENTS.md                ← reglas estables para agentes
├── design.md                ← sistema de diseno
├── client/                  ← SPA (root de Vite)
│   ├── CLAUDE.md
│   ├── index.html
│   ├── public/              ← PDF, fuentes y recursos descargables
│   └── src/                 ← pages · components (+ ui/) · data · hooks · lib
├── server/
│   ├── CLAUDE.md
│   └── index.ts             ← Express: estaticos + /api/image-proxy
├── attached_assets/         ← imagenes importadas con @assets (heredado de Replit)
├── vite.config.ts           ← Replit y build general
├── vite.config.local.ts     ← variante local
├── vite.config.vercel.ts    ← build de Vercel (dist/)
└── docs/
    ├── api/endpoints.md     ← catalogo de endpoints
    ├── database-design.md   ← reglas de datos persistentes
    ├── adr/                 ← Architecture Decision Records
    ├── plans/               ← especificaciones (SDD) con criterios de aceptacion
    ├── sprints/             ← deuda tecnica y cierre de sprints
    └── historico/           ← documentos heredados (replit.md)
```

Se decidio mantener `client/` y `server/` en la raiz en lugar de `packages/*`:
no hay codigo compartido ni workspaces que lo justifiquen.

---

## 4. Convenciones de Nomenclatura

Regla general para codigo **nuevo**: **espanol sin tildes en identificadores,
componentes, hooks y archivos**; comentarios y textos visibles en espanol (estos
si con tildes). Los sufijos tecnicos (`.test.ts`) se quedan en ingles.

**Excepciones documentadas:**
- Primitivas de `client/src/components/ui/` (generadas por el CLI de shadcn/ui):
  nombres en ingles y kebab-case.
- Hooks heredados `useToast` y `useIsMobile` (`hooks/use-toast.ts`,
  `hooks/use-mobile.tsx`) y helpers `cn` (`lib/utils.ts`), `queryClient`
  (`lib/queryClient.ts`).
- Componentes y paginas existentes, que usan una mezcla de espanol e ingles
  (`Navigation`, `Footer`, `PageHeader`, `HexagonPhoto`, `BrandMarquee`...). Se
  conservan; no se renombran en masa.
- Archivos de `pages/` en kebab-case espanol (`sesiones-educativas.tsx`): es el
  patron correcto y se mantiene.
- Uso masivo de `export default` en componentes y paginas heredados.

Una excepcion no se extiende a codigo nuevo.

### Funciones y variables — espanol camelCase, sin abreviar

```
✅  obtenerPonentes · filtrarPorDia · sesionesDelDia · fechaDeInicio
❌  getSpeakers (ingles) · fn1 · data · temp · e (en catch — usar error)
```

### Constantes — SCREAMING_SNAKE espanol sin tildes

```
✅  FECHA_INICIO_CONGRESO · URL_REGISTRO_SESIONES
❌  START_DATE · registroUrl
```

### Tipos e interfaces — PascalCase espanol sin tildes

```
✅  Ponente · SesionDelPrograma · Expositor
❌  ISpeaker (ingles, prefijo I)
```

### Archivos

```
Componentes:  PascalCase espanol          TarjetaPonente.tsx · BannerAnuncio.tsx
Paginas:      kebab-case espanol          hospedaje.tsx · sesiones-educativas.tsx
Hooks:        kebab-case con prefijo use- use-ponentes.ts
Lib y data:   kebab-case espanol          formato-fechas.ts · expositores.ts
❌  utils2.ts · misc.ts · helpers.ts (genericos)
```

### Componentes React y hooks

Componentes nuevos: `export function` nombrada, nunca `export default`.
Hooks: `use` + sustantivo espanol (`usePonentes`, `useProgramaDelDia`).

---

## 5. Commits y ramas

Conventional Commits · scope en ingles · descripcion en espanol sin tildes.

```bash
feat(programa): agregar filtro por dia en la agenda
fix(registro): corregir enlace de registro de posters
refactor(landing): extraer seccion de ponentes a componente propio
docs(plans): registrar la fase F1 de la division de landing
docs(debt): cerrar el punto D3-2 con su commit
chore(deps): actualizar vite a version 5.4.x
```

Tipos validos: `feat` `fix` `refactor` `test` `docs` `chore` `perf`

Prohibido: tildes en la descripcion · sin tipo ni scope · mensajes genericos como "fix bug"

Un commit por cambio logico: la especificacion viaja con su codigo; el cierre
de un punto de deuda (`docs(debt)`) y el avance de un plan (`docs(plans)`) van
en commits propios. Terminar siempre con la linea de coautoria que indique la
sesion.

**Politica de ramas y push:**
- `main` es produccion. Solo el usuario hace merge a `main`; el agente nunca
  commitea ni mergea en `main`.
- `staging` es la rama de pruebas: todo el trabajo y los merges automaticos
  van ahi.
- Commits locales permitidos sin pedir confirmacion cada vez. **Push nunca sin
  peticion explicita.**
- Remoto: `origin` = `https://github.com/SistemasANPR/congresoparques.git`.
- **Cuenta de GitHub de este proyecto: `Antonio1491`.** Es la unica cuenta con la
  que se hace push aqui (`credential.username` fijado en la config local del
  repo y cuenta activa de `gh`). No usar `support-parksys` en este proyecto.
  Verificar con `gh auth status` antes de un push. La cuenta necesita permiso
  de escritura en `SistemasANPR/congresoparques` [PENDIENTE: invitacion como
  colaborador; a 2026-11-06 solo tiene lectura y el push da 403].

---

## 6. Cuando Pausar y Preguntar

**Claude NUNCA debe hacer estas acciones sin que el humano lo pida explicitamente:**

1. Eliminar archivos existentes (excepcion: un componente que deja de usarse)
2. Cambiar la firma o el contrato de una funcion o de `/api/image-proxy`
3. Agregar, quitar o actualizar una dependencia npm. Un componente de shadcn/ui
   se anade con su CLI, nunca a mano
4. Crear o modificar `.env`, `.env.example` o variables de entorno
5. Cambiar la estructura de carpetas del proyecto o mover activos entre
   `attached_assets/` y `client/public/`
6. Crear un endpoint que no este en `docs/api/endpoints.md`
7. Modificar archivos fuera del modulo en el que se esta trabajando
8. Implementar una funcionalidad nueva sin especificacion aprobada con sus
   criterios de aceptacion (ADR-0001)
9. Hacer push, commitear o mergear en `main`, reescribir historial o tocar la
   configuracion de despliegue (`vercel.json`, `.replit`, `vite.config*.ts`)
10. Cambiar enlaces de registro, precios, fechas o datos del programa sin
    confirmacion del contenido por parte del usuario
11. Crear la primera tabla, elegir motor u ORM, o agregar sesiones o
    autenticacion sin ADR; escribir una migracion sin la propuesta de la
    seccion 6 de `docs/database-design.md`, o ejecutarla contra una base real
    (el agente solo genera SQL; el humano revisa y ejecuta)
12. Ejecutar `npm audit fix --force` o aprobar scripts de instalacion de
    paquetes (`npm install-scripts approve`)

**Ante cualquier duda sobre el alcance de una tarea: preguntar antes de actuar.**

---

## 7. Sesion Actual

> Actualizar este bloque al inicio de cada sesion de trabajo.
> Limite: ~40 lineas. Lo cerrado se mueve a `docs/sprints/`.

```
Fecha del bloque: 2026-11-06
Rama:             staging (creada desde main; sin push). origin/main: 652 commits
                  de historia heredada de Replit.

Deuda tecnica:    Registro vivo en docs/sprints/deuda-tecnica.md. Consultarlo
                  antes de tocar server/index.ts, landing.tsx, programa.tsx o
                  directorio-expositores.tsx; al cerrar un punto, moverlo a
                  "Resueltos" con su commit.
Metodo:           SDD (ADR-0001). Plan en curso: ninguno. Verificacion visual:
                  manual en navegador (375 px y 1280 px).

Cerrado:          Adopcion de la estructura de documentos de contexto (fase 2).

Runtime:          Node 22.22 (local). Dependencias instaladas con npm install.

Migraciones:      Ninguna (la base de datos esta por implementar).

En diseno:        Alineacion de codigo con la plantilla, punto a punto (fase 3).
                  Base de datos: sin ADR ni propuesta todavia.

Archivos OK:      client/src/**, docs/**, documentos raiz (.md)
Archivos NO:      attached_assets/ (activos), vercel.json, .replit,
                  vite.config*.ts, package.json y lockfile (sin autorizacion)

Nota entorno:     Equipo de diseno trabaja desde Replit; ahi se conserva
                  .replit y los plugins @replit/*.
                  [PENDIENTE: como sincroniza Replit con Git — de que rama
                  lee y a cual hace push el equipo de diseno?]
```

---

## 8. Prompt de Inicio de Sesion

```
Lee el CLAUDE.md raiz y el CLAUDE.md del directorio en el que trabajaremos hoy.
Confirma que entendiste:

1. El modulo en el que trabajamos hoy: [MODULO]
2. La tarea exacta: [DESCRIPCION]
3. Las convenciones de nomenclatura activas
4. Los archivos que NO debes modificar en esta sesion
5. El criterio de terminado para esta tarea

No escribas codigo hasta confirmar estos cinco puntos.
Cuando confirmes, muestrame el plan de implementacion en pasos antes de ejecutar.
```

---

## Anexo A. Comandos y entorno

```bash
npm run check           # typecheck (tsc --noEmit segun tsconfig)
npm run build           # vite build + esbuild de server/ a dist/
npm run build:vercel    # build de produccion para Vercel (a dist/)
npm run start           # sirve dist/ con Express (requiere build previo)
npx vite --host 127.0.0.1 --port 5173   # desarrollo local del cliente
```

`npm run check` es la puerta de calidad antes de cualquier commit; `npm run
build` confirma que compila. No hay CI ni linter.

Entorno (comprobado en esta maquina):
- Windows 11 con PowerShell y Git Bash. Node 22.22.
- `npm run dev` no funciona en Windows (`NODE_ENV=...` inline) y solo sirve
  `dist/public`; por eso el desarrollo local usa Vite directamente (D3-2).
- El servidor Express usa el puerto 5000 (`PORT`); Vite en desarrollo, 5173.
- `npm install` avisa de 5 paquetes con scripts de instalacion sin aprobar
  (`bufferutil`, `core-js`, `esbuild` x3) y de vulnerabilidades en `npm audit`.
- Cuenta de GitHub del proyecto: `Antonio1491` (ver §5). La identidad de commits
  (`user.name`/`user.email`) es la configurada globalmente en la maquina.

## Anexo B. Convenciones de trabajo

### Componentes: reutiliza antes de crear

No hay catalogo de componentes todavia (deuda D3-4). Mientras tanto, antes de
crear un componente o una seccion:

1. Busca en `client/src/components/` y `components/ui/` uno que ya lo resuelva.
   Reutilizalo; si le falta una variante, anadela al existente. Revisa tambien
   `client/src/hooks/` y `client/src/lib/` antes de escribir un hook o helper.
2. Si hace falta uno nuevo: `export function` nombrada, nunca `export default`.
3. Un componente que deja de usarse se borra.
4. Las paginas de mas de ~500 lineas no deben crecer: extraer secciones a
   componentes propios al tocarlas.

### Como se construye una funcionalidad (SDD)

Regla de desarrollo de toda funcionalidad o modulo nuevo (ADR-0001; el detalle
operativo esta en `AGENTS.md`):

1. **Especificacion** con criterios de aceptacion numerados (`CA-1`...); se
   presenta y se espera aprobacion antes de escribir codigo.
2. **Contrato** primero (`endpoints.md`, tipos y validacion en `client/src/lib/`).
3. **Comprobacion** derivada de los criterios y que cita el `CA-n` (manual
   mientras no haya tests).
4. **Codigo limpio** y cambio minimo.
5. **Terminado** = especificacion al dia, criterios comprobados,
   validaciones con salida real y diff revisado.

Un cambio trivial (texto, typo, formato, dato de contenido) queda exento.

### Verificar el trabajo

Un cambio no esta hecho hasta que se ve funcionando:

```bash
npm run check
npx vite --host 127.0.0.1 --port 5173
# abrir http://127.0.0.1:5173/<ruta afectada>
```

Para cambios de UI, abrir la ruta afectada en el navegador a ~375 px y
~1280 px, y mirar la consola. Las animaciones de entrada (framer-motion) pueden
dejar una captura instantanea en blanco sin que nada este roto: esperar o hacer
scroll antes de concluir que hay un fallo. El proxy de imagenes solo existe con
el servidor Express (`npm run build` + `npm run start`), no con Vite.

---

*Congreso Parques Tijuana 2026 — CLAUDE.md v1.0 — noviembre de 2026*
*Este archivo es el contrato de trabajo del agente. Toda sesion comienza aqui.*
