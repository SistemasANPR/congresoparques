# ADR-0001: Desarrollo guiado por especificaciones (SDD) con codigo limpio

> ADR adoptada de la plantilla de contexto. La regla se conserva; solo se
> ajustaron rutas y comandos a este repo.

- **Fecha:** 2026-11-06
- **Estado:** Aceptada
- **Alcance:** todo el repositorio; toda funcionalidad o modulo nuevo

## Contexto

La disciplina de "documentar primero, cambiar poco y probar" suele quedar
repartida en varios documentos: endpoints documentados antes de implementarse,
migraciones con propuesta previa, ADR para decisiones costosas, deuda tecnica
cerrada punto a punto. Sin una regla unica no queda claro como se construye una
funcionalidad nueva, que significa "terminada" ni como se derivan los tests de
lo que se pidio. Permisos, pagos y aislamiento de datos multiplican el costo de
un requisito mal entendido o sin cobertura.

## Decision

Toda funcionalidad o modulo nuevo se construye con **desarrollo guiado por
especificaciones (SDD)** y las practicas de codigo limpio de esta decision. El
orden es siempre: especificacion → contrato → tests → codigo → verificacion. La
especificacion manda: si la implementacion se desvia, primero se corrige la
especificacion y se vuelve a acordar.

### 1. Especificacion (antes del codigo)

Responde que se construye y como se sabra que esta bien. Contiene:

- **Problema y alcance:** que cambia, para quien, y que queda **fuera**.
- **Criterios de aceptacion numerados** (`CA-1`, `CA-2`...), cada uno
  verificable por un test o por una comprobacion manual descrita. Formato:
  _Dado_ un estado, _cuando_ ocurre algo, _entonces_ se observa un resultado.
  Incluyen los casos de error y los limites, no solo el camino feliz.
- **Decisiones abiertas** numeradas (`DA-1`...) con la opcion recomendada, que
  se cierran antes de implementar.
- **Riesgos y casos sensibles:** permisos, datos personales, dinero,
  concurrencia, aislamiento de datos.

Donde vive, sin crear carpetas nuevas:

| Que se especifica                           | Donde                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------- |
| Funcionalidad o modulo (esfuerzo M o L)     | Un plan en `docs/plans/` (formato en `docs/plans/0000-plantilla-plan.md`)   |
| Cambio pequeno (esfuerzo S)                 | Los criterios en la descripcion del commit o en la propuesta aprobada       |
| Endpoint HTTP                               | `docs/api/endpoints.md`, antes de implementarlo                             |
| Datos persistentes                          | La propuesta de la seccion 6 de `docs/database-design.md`                   |
| Componente o vista                          | El catalogo de componentes (`design.md` §1.5) y `design.md`                 |
| Decision arquitectonica costosa de deshacer | Una ADR en `docs/adr/`                                                      |

### 2. Contrato (antes del codigo)

El contrato es lo que otros consumen: forma de la peticion y la respuesta,
errores, tipos. Se escribe primero y es **ejecutable**:

- Tipos y validacion en `client/src/lib/` (esquemas Zod; no existe `shared/`), con su `.test.ts`, compartidos por servidor y cliente.
- Los endpoints nuevos responden el sobre unico
  (`{ success, data | error }`, lanzado con `ErrorDeAplicacion`).
- Los cambios de contrato son compatibles hacia atras o se documentan como
  ruptura.

### 3. Tests derivados de la especificacion

- Cada criterio de aceptacion tiene al menos un test, y el nombre del test cita
  el criterio (`it('CA-2: rechaza un correo sin dominio', ...)`). Un criterio
  sin test declara su comprobacion manual.
- **Test primero** (el test falla antes de escribir el codigo) es obligatorio
  para: logica de negocio, permisos y autorizacion, dinero, aislamiento de datos
  y toda correccion de un bug (prueba de regresion). Para el resto es la
  practica recomendada.
- Piramide: muchas pruebas unitarias, algunas de integracion (servidor en un
  puerto libre) y pocas de extremo a extremo. Datos ficticios, sin red ni `.env`.
- La interfaz visual se verifica ademas en el navegador (~375 px y ~1280 px).

### 4. Codigo limpio al implementar

- **Cambio minimo y coherente:** lo necesario para cumplir los criterios. Nada
  de abstracciones anticipadas (YAGNI, KISS) ni refactors fuera de alcance.
- **Nombres que revelan intencion** y funciones pequenas con una sola
  responsabilidad; sin duplicacion ni codigo muerto.
- **Comentarios que explican el porque**, no lo que el codigo ya dice.
- **Errores explicitos:** se lanzan o se devuelven con su tipo; nunca se
  degradan en silencio (un fallo no se convierte en lista vacia).
- **Dependencias hacia dentro:** la logica de negocio no depende del framework
  HTTP, de la red ni de un proveedor; esos detalles se montan en los bordes.
  Cada modulo es dueno de sus datos y expone operaciones a los demas.
- **Seguridad por defecto:** denegar por defecto, validar toda entrada en el
  servidor y no registrar datos personales ni secretos.
- **Convenciones vigiladas por tests:** toda regla que se pueda comprobar
  mecanicamente (sin `export default`, sin hex directos, contraste AA, catalogo
  completo, extensiones de import) se convierte en un test que falla si se
  rompe, en vez de confiar en la revision.

### 5. Definicion de terminado

Una funcionalidad esta terminada cuando se cumple todo lo siguiente:

1. La especificacion esta actualizada y refleja lo que se construyo.
2. Cada criterio de aceptacion tiene su test (o su comprobacion manual
   registrada) y pasa.
3. `npm run check` (typecheck) y `npm run build` (no hay lint, formato ni tests todavia: deuda D3-1) pasan, y se informa la salida real.
4. Se reviso el diff completo (`git diff --check`): sin cambios ajenos, secretos
   ni artefactos.
5. Si hubo una decision costosa de deshacer, tiene su ADR; si se dejo deuda,
   esta en `docs/sprints/deuda-tecnica.md`.
6. La especificacion y el codigo llegan en el mismo commit o la misma rama.

### Proporcionalidad

La regla se aplica en proporcion al tamano. Un cambio trivial (corregir un
texto, un typo, un formato) no necesita especificacion formal: basta con
describir el cambio. Cualquier funcionalidad con comportamiento nuevo, contrato,
datos, permisos o dinero sigue el flujo completo.

## Alternativas consideradas

| Alternativa                                    | Por que se descarto                                                                                 |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Disciplina implicita, sin regla unica          | La regla queda repartida, el "terminado" depende de quien trabaje y los criterios no llegan a tests |
| TDD estricto en todo el codigo                 | Costo desproporcionado para texto y maquetacion; se exige solo donde el riesgo lo justifica         |
| Carpeta `docs/specs/` y herramienta de specs   | Anade estructura y tooling; los lugares actuales cubren cada tipo de especificacion                 |

## Consecuencias

**Positivas**

- Un criterio de aceptacion equivale a un test: es mas dificil entregar algo que
  nadie pidio o dejar sin cubrir un caso de error.
- Un "terminado" unico y verificable para todo el repositorio.
- Las areas de riesgo (autorizacion, pagos, aislamiento) quedan cubiertas antes
  de implementarse.

**Negativas o riesgos**

- Mas trabajo previo por funcionalidad. Se mitiga con la proporcionalidad: lo
  pequeno no exige documento.
- Las especificaciones pueden quedarse obsoletas si se cambian solo en el
  codigo; por eso viajan en el mismo commit y la especificacion manda.

**Que cambia para el equipo**

- Antes de implementar algo no trivial, se presenta la especificacion con sus
  criterios de aceptacion y se espera la aprobacion.
- Los tests citan sus criterios (`CA-n`).
- La checklist de la seccion 5 sustituye al "terminado" informal.
- Las reglas operativas resumidas viven en `AGENTS.md`, seccion "Desarrollo
  guiado por especificaciones", y se referencian desde `CLAUDE.md`.

## Referencias

- `AGENTS.md`, "Desarrollo guiado por especificaciones" y "Documentacion y terminado"
- `docs/plans/0000-plantilla-plan.md`, `docs/api/endpoints.md` y `docs/database-design.md`
