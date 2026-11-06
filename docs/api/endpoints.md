# Catalogo de Endpoints — Congreso Parques Tijuana 2026

> Todo endpoint nuevo se documenta aqui **antes** de implementarse (ADR-0001).
> Si este documento contradice `server/index.ts`, gana el codigo; corregir el
> documento.

> Servidor: `server/index.ts` (Express 5). Sin prefijo global ni versionado.
> Sin autenticacion. No usa el sobre `{ success, data }`: es un proxy que
> devuelve bytes o texto plano.

## Servidos propios

### GET /api/image-proxy
Auth:      ninguna
Modulo:    server/index.ts

Descarga una imagen remota y la devuelve (evita bloqueos de origen de
`congresoparques.com`).

Query:
- `url` (obligatorio): URL absoluta de la imagen.

Respuestas:
- `200`: bytes de la imagen. `Content-Type` copiado del origen (por defecto
  `image/jpeg`); `Cache-Control: public, max-age=86400`.
- `400`: `URL parameter required` (texto plano) si falta `url`.
- `<estado del origen>`: `Image not found` (texto plano) si el origen responde
  no-OK.
- `500`: `Error fetching image` si la peticion falla.

Notas:
- Usado por `HexagonPhoto.tsx`, `programa.tsx` y `talleres.tsx`.
- No valida el host destino, el tipo de contenido ni el tamano; riesgo SSRF
  registrado como D1-1. Contrato congelado: no cambiar parametros ni respuestas
  sin autorizacion.
- No existe en el despliegue de Vercel (solo estatico): deuda D2-1.

### GET /* (fallback de SPA)
Auth:      ninguna
Modulo:    server/index.ts

Toda peticion `GET` cuya ruta no contiene `.` y no empieza por `/api` devuelve
`dist/public/index.html`. Los archivos estaticos de `dist/public` se sirven
antes.

## Consumidos de terceros

APIs externas que el cliente llama directamente (no pasan por este servidor).
Son contrato de otro sistema; no se modifican desde este repo.

| URL | Usada en | Contenido |
|---|---|---|
| `https://congresoparques.com/cpanel/api/programa.php` | `eventos-sociales.tsx` | Programa del congreso |
| `https://congresoparques.com/cpanel/api/conferencistas.php` | `landing.tsx` | Conferencistas |
| `https://anpr.activehosted.com/f/embed.php?id=15` | `NewsletterBar.tsx` | Formulario de newsletter (ActiveCampaign) |
