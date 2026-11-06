# [tipo]: <titulo corto de la funcionalidad o el cambio>

> Copiar como `AAAA-MM-DD-NNN-tipo-titulo-en-kebab-case.md` (ej.
> `2026-10-13-001-feat-alta-de-socios-plan.md`). Es la especificacion de SDD
> (ADR-0001) para esfuerzo M o L. Se presenta y se espera aprobacion antes de
> escribir codigo. Tipos: los mismos de los commits (`feat`, `fix`,
> `refactor`...).

- **Fecha:** <AAAA-MM-DD>
- **Estado:** Borrador | Aprobado | En curso | Terminado
- **Esfuerzo:** S | M | L
- **Deuda relacionada:** <puntos de `docs/sprints/deuda-tecnica.md`, o "ninguna">

## 1. Objetivo y alcance

<que problema resuelve y para quien, en tres o cuatro lineas.>

**Dentro:** <...>

**Fuera:** <lo que explicitamente no se hace en este plan>

## 2. Punto de partida

<estado actual medido, con fecha: archivos, conteos, comportamiento
comprobado. Hechos, no suposiciones.>

## 3. Decisiones

Resumen en una linea de las decisiones cerradas. Cada una se detalla abajo con
la opcion recomendada y por que.

### DA-1 · <decision> — se recomienda **<...>**

<opciones, recomendacion y motivo. Al cerrarse, anotar "Cerrada el
AAAA-MM-DD: [opcion>".]

## 4. Contrato

<lo que otros consumen. Endpoints (y su entrada en
`docs/api/endpoints.md`), tipos y validacion compartidos, cambios de datos (con
la propuesta de la seccion 6 de `docs/database-design.md`). Si no hay contrato
nuevo, decirlo.>

## 5. Estrategia por fases

Cada fase deja el repo en verde y termina en su propio commit.

| Fase | Que se hace | Esfuerzo |
| ---- | ----------- | -------- |
| F0   | <preparar sin cambiar comportamiento: tests en modo lista, tipos> | S |
| F1   | <...> | M |

## 6. Criterios de aceptacion

Cada uno tiene al menos un test cuyo nombre lo cita (`CA-1: ...`) o declara su
comprobacion manual.

- **CA-1:** _Dado_ [estado], _cuando_ [accion], _entonces_ [resultado observable].
- **CA-2:** <caso de error o limite>

## 7. Riesgos

| Riesgo | Mitigacion |
| ------ | ---------- |
| <...> | <...> |

## 8. Registro de avance

> Se actualiza al cerrar cada fase, en un commit `docs(plans)`.

| Fase | Commit | Fecha | Notas (salida real de las validaciones) |
| ---- | ------ | ----- | --------------------------------------- |
