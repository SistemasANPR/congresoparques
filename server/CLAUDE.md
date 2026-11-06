# Congreso Parques Server — Convenciones y Reglas

> Complementa el CLAUDE.md raiz. Se aplica a todo archivo bajo `server/`.
> Ultima actualizacion: noviembre de 2026

Hoy el servidor es **un solo archivo** (`server/index.ts`, ~70 lineas, Express 5)
sin base de datos, autenticacion ni tests. **Se va a implementar una base de
datos** (decision del usuario, noviembre de 2026): las secciones 2 a 9 son las
reglas que aplican desde el primer modulo que la use. La seccion 1 describe lo
que existe hoy.

---

## 1. Estado actual

1. Sirve los archivos estaticos de `dist/public` (el build del cliente).
2. `GET /api/image-proxy?url=<URL>`: descarga la imagen de `<URL>` y la devuelve
   con `Cache-Control: public, max-age=86400`. Existe porque las imagenes de
   `congresoparques.com` no se pueden pedir directo desde el navegador.
3. Fallback de SPA: toda peticion `GET` sin extension y fuera de `/api` recibe
   `dist/public/index.html`.
4. Escucha en `0.0.0.0:${PORT}` (por defecto 5000).

El archivo siempre se comporta como servidor de produccion (su log dice
"Production server"), incluso con `NODE_ENV=development`. No integra Vite.

Se ejecuta con `tsx` (`npm run dev`) o empaquetado con esbuild
(`npm run build` → `dist/index.js`, `npm run start`). En Vercel no se usa: Vercel
sirve el build estatico de `vite.config.vercel.ts`, asi que `/api/image-proxy`
no existe alli (deuda D2-1). **Una base de datos exige un backend en el
despliegue**: la ADR de la base debe resolver donde corre el servidor
(Vercel con funciones, Replit u otro).

Reglas de hoy:
- `url` de `/api/image-proxy` es una URL arbitraria del cliente: no ampliar lo
  que acepta; cualquier cambio pasa por la deuda D1-1 (hosts permitidos,
  `https`, `image/*`, tamano y timeout).
- Imports relativos sin extension (se ejecuta con `tsx`; esbuild empaqueta con
  `--bundle`). TypeScript `strict`; el servidor entra en `npm run check`.
- `replit.md` menciona PostgreSQL, Drizzle y sesiones: es heredado de una
  plantilla de Replit y no existia nada de eso en el codigo.

---

## 2. Base de datos — reglas criticas de datos

> Previenen bugs de seguridad graves. Sin excepcion.
> Antes de crear o cambiar una tabla, presentar la propuesta de la seccion 6 de
> `docs/database-design.md`, que prevalece en modelado, integridad y
> migraciones. Antes de la primera tabla, registrar una ADR con el motor y el
> ORM elegidos y la ubicacion del backend. Los ejemplos usan Drizzle; adaptar
> al ORM que se decida [PENDIENTE: motor y ORM].

### 2.1 Limite de datos del dominio

Todo dato de usuario o de inscripcion se filtra por la entidad duena
autenticada. [PENDIENTE: definir el ambito (una edicion del congreso o varias,
organizacion, persona) en la ADR; esa decision fija la columna que se filtra
siempre, como `edicionId` u `organizacionId`.]

```typescript
// Obligatorio: filtrar siempre por el limite de datos y excluir eliminados
const registros = await db.select().from(tabla)
  .where(and(eq(tabla.edicionId, edicionId), isNull(tabla.deletedAt)))

// Rompe el limite — NUNCA
const registro = await db.select().from(tabla).where(eq(tabla.slug, slug))
```

### 2.2 Soft delete — nunca eliminar registros fisicamente

```typescript
// Correcto
await db.update(tabla).set({ deletedAt: new Date() }).where(eq(tabla.id, id))

// Prohibido
await db.delete(tabla).where(eq(tabla.id, id))
```

### 2.3 Paginacion obligatoria en listas

```typescript
const { pagina = 1, limite = 20 } = query
const limiteSeguro = Math.min(limite, 100)
const registros = await db.select().from(tabla)
  .where(/* filtros + limite de datos + deletedAt */)
  .limit(limiteSeguro).offset((pagina - 1) * limiteSeguro)

// Prohibido — sin limite
const todos = await db.select().from(tabla)
```

### 2.4 Definicion del schema

```typescript
// Toda tabla lleva: id, createdAt, updatedAt, deletedAt (y la FK del limite de datos)
export const tabla = pgTable('tabla', {
  id:        uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
})

// Tipos inferidos automaticamente — sin comandos de generacion
type Entidad      = typeof tabla.$inferSelect
type NuevaEntidad = typeof tabla.$inferInsert
```

El schema vivira en un modulo que el servidor y el cliente puedan importar para
los tipos; el alias `@shared/*` ya esta declarado en `tsconfig.json` y en Vite
(`shared/` no existe todavia). [PENDIENTE: confirmar que ahi va el schema.]

### 2.5 Migraciones

El agente **solo genera SQL**; el humano lo revisa y lo ejecuta contra una base
real. Nunca aplicar migraciones ni seeds sin permiso.

```bash
npm run db:push     # hoy existe en package.json y apunta a drizzle-kit (no instalado)
# [PENDIENTE: scripts de generate / migrate / check, segun el ORM elegido]
```

---

## 3. Formato de respuestas del API (endpoints nuevos)

```typescript
// Exito — objeto
{ "success": true, "data": { ... } }

// Exito — lista con paginacion
{ "success": true, "data": [...], "meta": { "total": 150, "pagina": 1, "limite": 20, "totalPaginas": 8 } }

// Error
{ "success": false, "error": { "codigo": "RECURSO_NO_ENCONTRADO", "mensaje": "...", "campo": "recursoId" } }
```

Codigos de error (SCREAMING_SNAKE sin tildes). Base universal:

```
TOKEN_INVALIDO · SESION_EXPIRADA · PERMISO_DENEGADO · VALIDACION_FALLIDA
RECURSO_NO_ENCONTRADO · CONFLICTO_UNICIDAD · ERROR_INTERNO
```

Codigos del dominio: se anaden con cada regla de negocio que pueda fallar
(patron `ENTIDAD_NO_ENCONTRADA`, `ENTIDAD_YA_EXISTE`...).

`/api/image-proxy` conserva su contrato actual (texto plano y bytes); se
congela y esta documentado en `docs/api/endpoints.md`. Los endpoints nuevos
responden el sobre unico.

---

## 4. Manejo de errores

**Siempre `ErrorDeAplicacion`. Nunca `throw new Error()` generico.**

```typescript
// server/lib/errores.ts (a crear con el primer endpoint nuevo)
throw new ErrorDeAplicacion('RECURSO_NO_ENCONTRADO', 404, 'El recurso no existe', 'recursoId')

// Prohibido
throw new Error('no encontrado')
res.status(400).json({ error: 'algo salio mal' })
```

Un middleware global captura y formatea `ErrorDeAplicacion`; hay un solo
manejador, que registra el error sin PII ni secretos.

**Los fallos se ven.** Un fallo de la base o de un proveedor se propaga y sale
como 5xx; nunca se degrada a `[]`, `null` o "sin datos". El cliente necesita
distinguir "no se pudo cargar" de "no hay resultados". El unico `404`
legitimo es el de un recurso concreto que no existe.

---

## 5. Autenticacion y seguridad

Hoy no hay autenticacion. Al introducir una base de datos con datos personales
(inscripciones, correos) o un panel de administracion, definir en la ADR:
mecanismo de tokens o sesion, duraciones, roles y rate limiting.
[PENDIENTE: ¿habra usuarios o panel de administracion? ¿quien escribe en la
base: solo un administrador o tambien el publico (formularios)?]

Reglas desde ya:
- Validar toda entrada en el borde (Zod, ya instalado); no confiar en IDs, URLs ni
  importes enviados por el cliente.
- Datos personales: guardar el minimo, no registrarlos en logs, aviso de
  privacidad antes de recolectarlos [PENDIENTE: requisitos legales aplicables].
- Secretos solo en variables de entorno, nunca en el bundle del cliente ni en
  `VITE_*`.
- No exponer detalles internos en mensajes de error.

---

## 6. Convenciones de endpoints (nuevos)

Ver catalogo en `docs/api/endpoints.md`.

```
Prefijo:    /api/v1/  (el proxy actual /api/image-proxy se queda como esta)
Formato:    kebab-case, sustantivos en plural, sin trailing slash
Sin verbo en URL · Params de ruta: camelCase (:recursoId)
```

```
GET    leer (sin side effects, sin body)
POST   crear → 201 + recurso creado
PATCH  actualizar parcial → 200
DELETE eliminar (soft) → 204 sin body
```

```
200 GET/PATCH exitoso     201 POST creacion          204 DELETE
400 validacion fallida    401 sin token              403 sin permisos
404 no encontrado         409 conflicto unicidad     422 regla de negocio
429 rate limit            500 error no manejado
```

Query params estandar: `pagina` · `limite` · `ordenPor` · `direccion` · `buscar` · `desde` · `hasta`

---

## 7. Tests

No hay framework de tests (deuda D3-1). Al instalarlo, regla para el servidor:

```typescript
// Estructura AAA obligatoria. El nombre cita el criterio de aceptacion (ADR-0001)
it('CA-1: calcula correctamente el caso base', async () => {
  // Arrange · Act · Assert
})
```

- Un `.test.ts` por cada servicio y por cada modulo de logica compartida.
- **Test primero** en logica de negocio, permisos, aislamiento de datos y toda
  correccion de bug.
- Mocks del ORM, de `fetch` y de variables de entorno; nunca BD real ni red en
  tests unitarios; sin Docker ni `.env` reales.
- Los tests tambien pasan el typecheck (hoy `tsconfig.json` excluye
  `**/*.test.ts`: cambiarlo cuando haya tests).
- Cobertura con umbral en CI: el valor medido redondeado hacia abajo; sube,
  nunca baja.

---

## 8. Documentacion inline (JSDoc)

Obligatorio en funciones publicas de servicios y tipos exportados, en espanol
sin tildes: que hace, invariantes no obvias, `@param`, `@returns` y `@throws`.

---

## 9. Variables de entorno

El servidor lanza error explicito al arrancar si falta alguna requerida. Hoy:

```bash
PORT=5000        # puerto; por defecto 5000
NODE_ENV=        # 'production' en el script start
```

Con la base de datos se anadiran (solo nombres, nunca valores):

```bash
DATABASE_URL=    # [PENDIENTE: segun el motor elegido]
```

No hay `.env` ni `.env.example` en el repo. No crear uno sin autorizacion; al
agregar la primera variable publica, crear `.env.example` con valores vacios.

---

*Congreso Parques Server CLAUDE.md v1.0 — noviembre de 2026*
