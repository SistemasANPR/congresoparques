# Congreso Parques Tijuana 2026 — Sistema de Diseno

> Describe lo que el cliente hace hoy y las reglas para codigo nuevo. Donde el
> repo difiere del objetivo de la plantilla (Atomic Design, tokens, tests
> guardianes), se dice y el trabajo esta en `docs/sprints/deuda-tecnica.md`.
> Ultima actualizacion: noviembre de 2026

---

## 1. Componentes

### 1.1 Estado actual

`client/src/components/` es plano: 12 componentes propios
(`Navigation`, `Footer`, `PageHeader`, `AnnouncementBanner`, `BrandMarquee`,
`HexagonPhoto`, `NewsletterBar`, `SupportSection`, `VideoPopup`, `CustomCursor`,
`CatalogoPDF`, `ProgramaPDF`...) mas 47 primitivas de shadcn/ui en `components/ui/`.
La mayor parte de la interfaz esta escrita directamente en las paginas
(`client/src/pages/*.tsx`, 10.840 lineas en total).

No existe catalogo de componentes ni niveles de Atomic Design. Adoptarlos es la
deuda D3-4 (esfuerzo L, con plan propio). Hasta entonces:

- Reutilizar un componente de `components/` o `components/ui/` antes de crear uno.
- Una seccion que se toca en una pagina grande se extrae a un componente propio.
- Un componente nuevo: `export function` nombrada, un archivo, PascalCase
  espanol, imports por alias sin barrels.
- Un componente que deja de usarse se borra.
- Las primitivas `components/ui/` solo se anaden con el CLI de shadcn/ui
  (`components.json` esta configurado).

### 1.2 Nivel de cada pieza (referencia para la migracion futura)

| Nivel | Que es | Ejemplos actuales |
|---|---|---|
| atomo | unidad minima | `ui/button`, `ui/badge`, `ui/input` |
| molecula | combinacion con un fin | `HexagonPhoto`, `PageHeader` |
| organismo | seccion completa | `Navigation`, `Footer`, `SupportSection`, `NewsletterBar` |
| plantilla | layout sin datos | (no existe) |
| infraestructura | sin aspecto propio | `CustomCursor` |

---

## 2. Estructura Interna de Componentes React

- Declaracion: `export function NombreDelComponente(props: Props)`; nunca
  `export default` en codigo nuevo.
- Props tipadas con una `interface`/`type` local, nombres en espanol.
- Un componente hace una cosa: si pasa de ~200 lineas o mezcla datos con
  presentacion, dividirlo.
- Los datos (listas de ponentes, programa) viven en `src/data/` o llegan por
  `useQuery`; no incrustarlos en el JSX.
- Efectos de entrada con framer-motion: respetar `prefers-reduced-motion`
  (`index.css` ya lo hace para el scroll suave).
- Comentarios solo para explicar el porque.

### 2.1 Tests guardianes

No hay framework de tests (deuda D3-1). Cuando exista, los guardianes por crear
son: sin `export default` en codigo nuevo, sin hex nuevos, catalogo de
componentes completo y contraste AA de los pares texto/fondo de la identidad.

---

## 3. Colores y Sistema de Estilos

### 3.1 Estado real: dos sistemas

**Tokens CSS (shadcn)** en `client/src/index.css`, mapeados en
`tailwind.config.ts` (`bg-primary`, `text-foreground`...). Valores base: azul ANPR
`--primary` `#012787`, lima `--accent` `#BCCE16`, neutros slate. Se usan solo
~44 veces fuera de `components/ui/`.

**Hex directos de la identidad del congreso 2026**, escritos como clases
arbitrarias de Tailwind (~645 veces) y en CSS propio:

| Color | Hex | Uso |
|---|---|---|
| Violeta | `#6847F6` | principal de secciones y botones (~291 usos) |
| Azul oscuro | `#0E0477` | fondos oscuros y texto de titulos (~227) |
| Lima | `#BCCE16` | acento (~155) |
| Violeta profundo | `#35219B` | degradados y hover (~56) |
| Lima brillante | `#D0DD15` | acento secundario (~43) |
| Magenta | `#F71CDD` | detalles (~13) |

El conteo es de noviembre de 2026; el objetivo es que baje, no que suba.

### 3.2 Reglas para codigo nuevo

- No introducir hex nuevos. Para un color de la identidad, usar uno de la tabla
  de arriba; mejor aun, usar una variable CSS o token semantico.
- Convertir los hex repetidos a tokens es la deuda D3-3 (esfuerzo L); no hacerlo
  de manera aislada en una sola pagina.
- Cadenas de clases que se repiten en varias paginas: extraer a un componente,
  no copiarlas.
- Contraste de texto suficiente (AA): lima `#BCCE16` sobre blanco no cumple;
  usarlo sobre `#0E0477` o `#012787` o con texto oscuro.
- No hay modo oscuro: no anadir clases `dark:`.

---

## 4. Tipografia y activos

- Fuentes cargadas en `client/index.html` desde Google Fonts: **Inter**, **Montserrat** y
  **Antonio** (esta ultima en cajas de titulo; ver `index.css`). La fuente de los PDF es
  `client/public/fonts/Antonio-Bold.ttf`.
- Imagenes: las nuevas van en `client/public/` o se piden por URL; no agregar a
  `attached_assets/` (heredado, 155 MB). Optimizarlas antes de subir (peso,
  dimensiones) y dar siempre texto alternativo.
- Iconos: `lucide-react` (y `react-icons` en codigo heredado).

---

## 5. Responsive Design (Mobile-First)

TODA pantalla y componente nuevo se construye mobile-first.

- Base sin prefijo = movil (< 640 px); escalar con `sm:` `md:` `lg:` `xl:`.
- Tablas densas: tarjetas apiladas en < lg, tabla en lg+.
- Modales y menus: pantalla completa en < md.
- Imagenes con `object-fit` y relacion de aspecto fija para evitar saltos de
  layout.

### 5.1 Verificacion

Abrir la ruta en el navegador a ~375 px y ~1280 px (`npx vite --host 127.0.0.1
--port 5173`) y revisar la consola sin errores. Las animaciones de entrada
pueden dejar una captura en blanco: esperar o hacer scroll antes de concluir que
hay un fallo.
