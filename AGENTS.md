# AGENTS.md

Instrucciones de trabajo para agentes de codigo en todo el repositorio
`congresoparques`.
Mantener este archivo estable, conciso y libre de estado temporal de una sesion.

## Objetivo del producto

Sitio web (landing multipagina) del **Congreso Parques Tijuana 2026**, congreso
latinoamericano de espacios publicos y parques urbanos organizado por la ANPR.
Informa del evento (programa, ponentes, sede, hospedaje, expo, talleres) y
dirige a los registros que viven en `congresoparques.com`.

Una modificacion debe proteger primero:
- Los enlaces y flujos de registro y compra (`congresoparques.com/registro_*.php`,
  formulario de newsletter de ActiveCampaign): si se rompen, se pierden inscripciones.
- La exactitud del contenido del evento (fechas, programa, ponentes, precios);
  parte viene de `congresoparques.com/cpanel/api/*` y parte esta escrita en las paginas.
- Que el sitio publicado en Vercel siga construyendo y funcionando
  (`npm run build:vercel`).
- Los PDF y recursos descargables en `client/public/`.

## Fuentes de verdad y contexto

- Antes de editar, identificar el modulo afectado y revisar `git status --short`.
  Preservar todos los cambios del usuario, aunque no esten relacionados.
- Tratar `package.json`, `tsconfig.json`, `vite.config*.ts` y el codigo vigente
  como fuentes de verdad ejecutables.
- Leer `CLAUDE.md` para las reglas generales y, segun el alcance:
  - `server/CLAUDE.md` para el servidor Express o el proxy de imagenes.
  - `client/CLAUDE.md` y `design.md` para frontend o UX/UI.
  - `docs/api/endpoints.md` al crear o cambiar contratos HTTP.
  - `docs/database-design.md` antes de crear, modificar o eliminar datos
    persistentes (la base de datos esta por implementar).
  - `docs/adr/0001-desarrollo-guiado-por-especificaciones.md` antes de
    construir cualquier funcionalidad o modulo nuevo.
  - `docs/sprints/deuda-tecnica.md` antes de tocar un area con deuda abierta.
  - `docs/historico/replit.md`: descripcion heredada de Replit. Contiene
    informacion desactualizada (base de datos, sesiones); no es fuente de verdad.
  - `docs/adr/` para decisiones transversales; `docs/plans/` es la
    especificacion vigente de lo que esta en curso e historico de lo terminado.
- Las secciones de sesion, rama o "proxima tarea" dentro de otros documentos son
  contexto historico: verificarlo contra Git y el codigo. No actualizar esos
  bloques salvo peticion explicita.
- Si una guia contradice la configuracion ejecutable o el comportamiento
  comprobado, no adivinar: conservar el comportamiento seguro, documentar la
  discrepancia y pedir criterio solo si cambia materialmente el resultado.

## Arquitectura del repositorio

- Proyecto de un solo paquete (sin workspaces) con npm. Usar npm; no introducir
  otro gestor. Runtime: Node.js 22 (el de la maquina local; `.replit` declara
  Node 20; no hay `engines` en el manifiesto).
- `client/`: SPA React (paginas en `client/src/pages`, componentes en
  `client/src/components`, primitivas shadcn en `components/ui`, datos
  estaticos en `client/src/data`, activos en `client/public`).
- `server/index.ts`: servidor Express de produccion; sirve `dist/public` y
  expone `/api/image-proxy`. Hoy no hay otras rutas, base de datos ni
  autenticacion; la base de datos esta decidida y por implementar.
- `attached_assets/`: imagenes importadas con el alias `@assets` (heredado de
  Replit; ~155 MB). No agregar activos nuevos ahi: usar `client/public/`.
- Hay tres configuraciones de Vite, por plataforma: `vite.config.ts` (Replit y
  build general), `vite.config.local.ts` y `vite.config.vercel.ts` (Vercel).
  Un cambio de alias o plugins debe replicarse en las que correspondan.
- Los artefactos generados (`dist/`) y los archivos de log no se editan ni se
  incluyen en cambios.

## Forma de trabajar

- Resolver la causa raiz con el cambio mas pequeno y coherente posible. No hacer
  refactors, renombrados o reformateos masivos fuera del alcance solicitado.
- Buscar primero una implementacion analoga en el mismo modulo y respetar sus
  contratos, estructura, estilo e imports. Antes de crear un componente, buscar
  en `client/src/components/`; antes de un hook o helper, en `client/src/hooks/`
  y `client/src/lib/`.
- No eliminar archivos, descartar cambios, reescribir historial, hacer push ni
  modificar infraestructura remota salvo autorizacion explicita.
- Los commits son locales y se hacen en la rama `staging` (ver `CLAUDE.md` §5).
  Nunca commitear en `main`: el merge a `main` lo hace el usuario.
- No agregar, quitar ni actualizar dependencias sin autorizacion explicita. Si
  una dependencia cambia, mantener sincronizados el manifiesto y el lockfile.
- No leer, mostrar, copiar ni versionar secretos. No modificar `.env`.
- No editar archivos fuera del modulo afectado excepto contratos compartidos,
  pruebas o documentacion que deban mantenerse sincronizados.
- No suprimir errores con `any`, `@ts-ignore`, `@ts-expect-error` o casts amplios
  sin una justificacion localizada y comprobable.
- Mantener compatibilidad hacia atras en rutas publicas (URLs de las paginas,
  `/api/image-proxy`) y en los enlaces de registro.

## Desarrollo guiado por especificaciones

Toda funcionalidad o modulo nuevo sigue **SDD** (ADR-0001). Orden fijo:
especificacion → contrato → tests → codigo → verificacion. La especificacion
manda: si el codigo se desvia, se corrige primero la especificacion.

1. **Especificacion.** Problema, alcance (y que queda fuera) y **criterios de
   aceptacion numerados** (`CA-1`, `CA-2`...), verificables, con casos de error y
   limites. Formato: _Dado_ / _cuando_ / _entonces_. Para esfuerzo M o L, un plan
   en `docs/plans/` (formato en `docs/plans/0000-plantilla-plan.md`); para S, en
   la descripcion del commit. Las decisiones abiertas se numeran (`DA-1`...) con
   su recomendacion. Se presenta y se espera aprobacion antes de implementar.
2. **Contrato.** Primero lo que otros consumen: endpoint en
   `docs/api/endpoints.md`; tipos y validacion (Zod) en `client/src/lib/`.
3. **Tests.** Cada criterio tiene al menos un test cuyo nombre cita el criterio
   (`CA-2: ...`) o declara su comprobacion manual. Mientras no exista framework
   de tests (deuda D3-1), la comprobacion manual en navegador se registra en el
   plan o en el commit.
4. **Codigo limpio.** El cambio minimo que cumple los criterios; nombres que
   revelan intencion; funciones pequenas de una sola responsabilidad; sin
   duplicacion, codigo muerto ni abstracciones anticipadas (YAGNI, KISS);
   comentarios que explican el porque; errores explicitos, nunca degradados en
   silencio; validar toda entrada en el servidor.
5. **Terminado.** Ver "Documentacion y terminado".

Proporcionalidad: un cambio trivial (texto, typo, formato, actualizar un dato de
contenido) no necesita especificacion formal. Todo lo que anada comportamiento,
contrato o un flujo de registro sigue el flujo completo.

Trabajo grande (dividir una pagina de mil lineas, migrar a Atomic Design): por
fases, cada una deja el repo en verde y termina en su propio commit; el plan
registra el avance de cada fase con su hash.

## Convenciones de codigo

- TypeScript `strict`: respetar las opciones activas del `tsconfig.json`
  (`strict`, `noEmit`, `moduleResolution: bundler`, alias `@/*` y `@shared/*`;
  `shared/` no existe).
- Seguir el formato local (comillas dobles en la mayoria del cliente, punto y
  coma, indentacion de dos espacios). No reformatear codigo ajeno.
- Codigo nuevo: identificadores, componentes y hooks en espanol sin tildes
  (PascalCase para componentes, `use` para hooks). El codigo heredado en ingles
  (`shadcn/ui`, `use-mobile`, `lib/utils.ts`, `queryClient`) queda como
  excepcion documentada en `CLAUDE.md` §4 y no se extiende. Los textos visibles
  van en espanol con tildes.
- Evitar abreviaturas opacas y utilidades genericas. Extraer una abstraccion solo
  cuando exista reutilizacion o reduzca complejidad real.
- Toda convencion que se pueda comprobar mecanicamente deberia vigilarse con un
  test guardian cuando exista framework de tests (deuda D3-1).
- Agregar comentarios para explicar decisiones, invariantes o riesgos, no para
  narrar codigo evidente.
- Imports del cliente por alias (`@/...`, `@assets/...`) y sin extension. En
  `server/` los imports relativos no llevan extension (se ejecuta con `tsx` y se
  empaqueta con esbuild).

## Backend y API

El backend es minimo (`server/index.ts`). Reglas que aplican:

- Validar toda entrada no confiable en el borde. `/api/image-proxy` recibe una
  URL arbitraria del cliente: cualquier cambio debe considerar SSRF (ver deuda
  D1-1) y no ampliar lo que acepta.
- No exponer detalles internos en mensajes de error ni registrar secretos.
- Un endpoint nuevo se documenta primero en `docs/api/endpoints.md`.
- Mantener timestamps en UTC y formatear con zona horaria en los bordes
  (Tijuana: `America/Tijuana`).
- La base de datos esta por implementar. Antes de la primera tabla: ADR (motor,
  ORM y donde corre el backend) y propuesta de la seccion 6 de
  `docs/database-design.md`. Los cambios de schema requieren alcance explicito;
  el agente genera el SQL de migracion y solo el humano lo ejecuta contra una
  base real. Reglas de datos (soft delete, paginacion, limite de datos, errores
  5xx en vez de listas vacias) en `server/CLAUDE.md`.

## Frontend

- El estado remoto usa TanStack Query solo si hace falta; hoy ningun archivo lo
  usa: el contenido llega con `fetch` directo o esta incrustado. Una llamada nueva
  conviene hacerla con `useQuery`.
- Reutilizar componentes y patrones existentes antes de crear variantes. Seguir
  `client/CLAUDE.md` y los tokens de `design.md`; no introducir mas hexadecimales
  ni estilos aislados si existe un token o una clase compartida (hoy hay muchos
  hex heredados: deuda D3-3).
- Construir mobile-first y comprobar al menos estados de carga, vacio, error y
  exito cuando la vista dependa de datos remotos. No ocultar errores de red
  como lista vacia.
- Sin i18n: el sitio esta en espanol. No introducir una libreria de i18n sin
  autorizacion.
- Fechas y numeros se formatean con `Intl` o `date-fns` (ya instalado); no
  concatenar formatos a mano.
- Mantener accesibilidad: HTML semantico, texto alternativo en imagenes,
  navegacion por teclado, foco visible, contraste suficiente y respeto de
  `prefers-reduced-motion`.
- No exponer secretos en variables publicas del bundler (`VITE_*`).

## Pruebas y validacion

Usar la comprobacion minima suficiente y ampliarla segun el riesgo. No afirmar
que un comando paso si no se ejecuto o si fallo por configuracion previa.

```powershell
npm run check           # typecheck (tsc); hoy pasa limpio
npm run build           # vite build + esbuild del servidor (a dist/)
npm run build:vercel    # build de produccion para Vercel (a dist/)
npx vite --host 127.0.0.1 --port 5173   # servidor de desarrollo del cliente
```

- No inventar una validacion ni descargar tooling con `npx`. Usar solo scripts y
  herramientas ya instalados, o informar la limitacion. No hay lint, formateador
  ni tests (deuda D3-1).
- `npm run dev` ejecuta `NODE_ENV=development tsx server/index.ts`, que no
  funciona en Windows (variable de entorno inline) y solo sirve `dist/public`,
  no el cliente en caliente. Para desarrollo local usar el comando de Vite de
  arriba (deuda D3-2).
- Para un cambio de frontend, ejecutar al menos `npm run check` y
  `npm run build`. Verificar visualmente en el navegador cuando cambien layout,
  interaccion o responsive (~375 px y ~1280 px), mirando tambien la consola sin
  errores.
- Al final ejecutar `git diff --check`, revisar el diff completo y confirmar que
  no se incluyeron secretos, logs, artefactos ni cambios no relacionados.

## Documentacion y terminado

- Actualizar contratos o documentacion solo cuando el comportamiento publico
  correspondiente cambie.
- Registrar una ADR para decisiones arquitectonicas costosas de revertir; no
  crear ADR para implementaciones locales rutinarias.
- Una tarea esta terminada cuando el comportamiento solicitado esta implementado,
  las validaciones proporcionales pasan y se reportan con claridad las
  comprobaciones no ejecutadas o bloqueadas.
- Una **funcionalidad o modulo nuevo** (ADR-0001) esta terminado cuando, ademas:
  la especificacion esta actualizada y viaja en el mismo commit o rama que el
  codigo; cada criterio de aceptacion tiene su comprobacion registrada y pasa;
  `npm run check` y `npm run build` pasan con salida real; se reviso el diff
  completo; y las decisiones costosas tienen ADR y la deuda dejada esta en
  `docs/sprints/deuda-tecnica.md`.
- Al cerrar un punto de deuda tecnica, moverlo a "Resueltos" con su commit en
  un commit `docs(debt)` aparte.
- Commits: Conventional Commits con scope descriptivo (`CLAUDE.md` §5), locales
  y en `staging`. Nunca hacer push sin peticion explicita.

## Code Review Rules

En revisiones, priorizar defectos comprobables sobre preferencias de estilo:

- enlaces de registro rotos o apuntando a entornos equivocados, y contenido del
  evento incorrecto (fechas, precios, ponentes);
- el proxy de imagenes y cualquier ruta que haga peticiones a URLs recibidas;
- degradar un fallo de red a lista vacia o a estado "sin datos" en vez de mostrarlo;
- rupturas de rutas publicas o del build de Vercel;
- regresiones responsive (375 px) y de accesibilidad;
- peso de activos (imagenes y PDF sin optimizar) que degraden la carga;
- criterios de aceptacion sin comprobacion registrada.

Cada hallazgo debe indicar archivo y linea, impacto, escenario que lo reproduce y
una correccion segura. Si no hay hallazgos, decirlo y mencionar riesgos residuales
o validaciones que no pudieron ejecutarse.
