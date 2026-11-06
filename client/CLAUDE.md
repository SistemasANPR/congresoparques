# Congreso Parques Client — Convenciones y Reglas

> Complementa el CLAUDE.md raiz. Se aplica a todo archivo bajo `client/`.
> Ultima actualizacion: noviembre de 2026

> **Para reglas de diseno detalladas (tokens, paleta, tipografia, responsive):**
> leer `design.md`.

---

## 1. Estructura del Cliente

```
client/
├── index.html         ← metadatos SEO, fuentes de Google, JSON-LD
├── public/            ← PDF, fuentes (Antonio-Bold.ttf) y recursos descargables
└── src/
    ├── main.tsx · App.tsx   ← montaje y rutas (wouter, 19 rutas)
    ├── pages/               ← una pagina por ruta, kebab-case espanol
    ├── components/          ← componentes propios (plano; sin Atomic Design)
    │   └── ui/              ← primitivas shadcn/ui (47 archivos)
    ├── data/                ← datos estaticos (expositores.ts)
    ├── hooks/               ← use-mobile.tsx · use-toast.ts
    ├── lib/                 ← queryClient.ts · utils.ts (cn)
    └── index.css            ← Tailwind + tokens CSS + estilos de secciones
```

Alias (`vite.config*.ts` y `tsconfig.json`): `@` → `client/src`, `@assets` →
`attached_assets/` (imagenes), `@shared` → `shared/` (no existe).

El router vive en `App.tsx` (wouter `Switch`/`Route`); una pagina nueva se
registra ahi y, si aplica, en `Navigation.tsx`. Hay una pagina `not-found`.

No se usa Atomic Design: `components/` es plano. Migrarlo es deuda (D3-4); no
reorganizar carpetas sin autorizacion.

---

## 2. Componentes

- Primitivas de `components/ui/` vienen del CLI de shadcn/ui: no editarlas para
  logica de la pagina; si hace falta una variante, anadirla con `cva` como ya
  hacen ahi. Un componente nuevo de shadcn se anade con su CLI.
- Componentes propios: PascalCase, en `components/`. Nuevos: `export function`
  nombrada (los heredados usan `export default`; no se renombran en masa).
- Las paginas son largas (landing 1.776 lineas, programa 1.126, directorio
  1.033). Al modificar una, extraer la seccion tocada a un componente propio en
  vez de seguir agrandando el archivo.
- Antes de crear uno, buscar en `components/` (ver `CLAUDE.md` raiz, Anexo B).
- Imports por alias, sin barrels (`@/components/PageHeader`).

---

## 3. Datos y llamadas de red

- `congresoparques.com/cpanel/api/programa.php` y `conferencistas.php` alimentan
  `eventos-sociales.tsx` y `landing.tsx` con `fetch` directo y estado local.
  Codigo nuevo: usar `useQuery` de TanStack Query (instalado, pero hoy nadie lo usa) con una `queryKey` estable y
  mostrar estados de carga y error (nunca lista vacia ante un fallo).
- Las imagenes remotas de `congresoparques.com` se piden por
  `/api/image-proxy?url=...` (ver `server/CLAUDE.md`); solo funciona con el
  servidor Express, no con `vite dev`.
- Enlaces a `congresoparques.com/registro_*.php` son criticos del negocio:
  centralizarlos en una constante al tocarlos y no cambiarlos sin confirmacion.
- Los datos estaticos (expositores) viven en `src/data/`. Contenido nuevo de
  gran volumen (ponentes, programa) va ahi y no incrustado en el JSX.
- El estado puramente local usa `useState`/`useReducer`; no hay stores globales
  (Zustand no esta instalado).

---

## 4. Responsive Design

> Referencia rapida; patrones en `design.md` §5.

TODA pantalla, layout y componente nuevo se construye mobile-first.

- Viewport base (sin prefijo) = movil (< 640px); escalar con `sm:` / `md:` /
  `lg:` / `xl:`.
- Nunca construir para desktop y adaptar hacia abajo.
- Verificar toda vista nueva en el navegador a ~375px y ~1280px antes de darla
  por terminada.

---

## 5. Hooks

`use` + sustantivo en espanol que describe el recurso o la capacidad
(`usePonentes`, `useProgramaDelDia`). Archivo: `hooks/use-<nombre-en-kebab>.ts`.
`useToast` y `useIsMobile` (shadcn) conservan su nombre.

---

## 6. Idioma y textos

El sitio esta solo en espanol y no tiene libreria de i18n. Los textos van
directos en el JSX, en espanol con tildes. Fechas y numeros con `Intl` o
`date-fns`; zona horaria del evento `America/Tijuana`. No introducir i18n sin
ADR y autorizacion.

---

## 7. Paleta de Colores

> Estado real y tokens en `design.md` §3. Resumen:

Hay **dos sistemas**: tokens CSS de shadcn en `index.css` (`--primary` azul ANPR
`#012787`, `--accent` lima `#BCCE16`) y, en el codigo de las paginas, colores
hexadecimales directos de la identidad del congreso 2026 (violeta `#6847F6`,
azul oscuro `#0E0477`, lima `#BCCE16`, violeta profundo `#35219B`, lima
`#D0DD15`, magenta `#F71CDD`), usados unas 645 veces como clases arbitrarias
(`bg-[#6847F6]`).

Reglas para codigo nuevo:
- Preferir un token semantico o una variable CSS antes que un hex nuevo.
- Si hay que usar un color de la identidad del congreso, usar exactamente uno de
  los de la lista; no introducir tonos nuevos.
- No hay modo oscuro; no anadir clases `dark:`.

---

## 8. Documentos PDF y exportaciones

`CatalogoPDF.tsx` y `ProgramaPDF.tsx` generan PDF con `@react-pdf/renderer`;
`jspdf`, `html2canvas` y `xlsx` estan instaladas pero ningun archivo las importa
(deuda D3-5). `@react-pdf/renderer` es pesado: cargarlo con `import()` dinamico
en codigo nuevo. La fuente `Antonio-Bold.ttf`
en `public/fonts/` es la usada en los PDF.

---

*Congreso Parques Client CLAUDE.md v1.0 — noviembre de 2026*
