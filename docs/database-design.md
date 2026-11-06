# Diseno y evolucion de la base de datos — Congreso Parques Tijuana 2026

**Ambito:** cualquier cambio que cree, modifique, migre o elimine datos persistentes.
**Objetivo:** preservar integridad, aislamiento de datos y capacidad de evolucion de los modulos.

> Prevalece sobre cualquier otro documento para datos persistentes. **Estado:** el proyecto aun no tiene base de datos (noviembre de 2026); se va a
> implementar. Este documento rige desde la primera tabla. Antes de crearla,
> registrar una ADR con el motor y el ORM elegidos [PENDIENTE: motor y ORM] y
> presentar la propuesta de la seccion 6.

## 1. Antes de modificar el esquema

1. Inspecciona el esquema actual, migraciones, restricciones, indices, consultas y reglas del modulo afectado. Comprueba si la informacion ya existe con otro nombre o pertenece a otra entidad.
2. Define el hecho de negocio que se guardara, quien es dueno del dato, su ambito ([PENDIENTE: confirmar el ambito: edicion del congreso, organizacion, persona...]), su ciclo de vida y quien puede cambiarlo.
3. Distingue si corresponde a un atributo de una entidad existente, una nueva entidad, una referencia mediante clave foranea, una relacion muchos a muchos o un evento historico. Una tabla pivote con atributos, vigencia o estados es una entidad de relacion con reglas propias.
4. Expon al responsable de la tarea la propuesta de modelo (seccion 6) antes de escribir la migracion. Pregunta solo si falta una regla de negocio que cambie las relaciones o las restricciones; no inventes esa regla.

## 2. Modelado relacional

- Modela entidades y dependencias funcionales. Aplica primera, segunda y tercera forma normal cuando corresponda: valores atomicos, sin grupos repetidos, sin dependencias parciales ni atributos que dependan de otra entidad. No crees tablas solo por formalismo; explica las excepciones.
- No guardes listas de identificadores separados por comas ni relaciones en arrays o JSON. Usa claves foraneas y tablas de relacion. JSON puede contener datos flexibles de verdad, con validacion y una justificacion, pero no sustituye entidades consultables ni restricciones esenciales.
- Separa cuenta de acceso, persona, organizacion, rol y permiso. No uses el correo como clave primaria ni como prueba suficiente de identidad o autorizacion.
- Define cardinalidades, obligatoriedad y propiedad de cada relacion. Toda relacion persistente declara sus claves foraneas y su comportamiento al borrar o desactivar registros. Prefiere desactivacion o historial cuando borrar destruya evidencia de pagos, vigencias o permisos.
- Distingue lo ofrecido (plan, tarifa, catalogo) de lo contratado y su historial. Un cambio de la oferta no altera retroactivamente contratos historicos sin una regla explicita.
- Separa hechos financieros (cargo, pago, devolucion, comision) de estados derivados. Registra referencias externas del proveedor de pagos de manera unica e idempotente. Usa importes exactos (unidades menores enteras) y codigo de moneda explicito; nunca punto flotante para dinero.
- Para fechas distingue fecha civil, instante y periodo de vigencia. Guarda instantes con zona horaria y define la zona relevante para cada regla. Evita varios booleanos que puedan representar estados contradictorios: usa un estado enumerado.

## 3. Aislamiento de datos y permisos

Aplica solo si se decide un esquema multi-inquilino (por ejemplo, varias ediciones del congreso u organizaciones). Si el sitio sirve una sola edicion, esta seccion no aplica y se anota en la ADR. [PENDIENTE: una sola edicion o varias?]

- Cada registro propio de un inquilino tiene un ambito inequivoco. Los datos globales del operador se mantienen separados de los de cualquier inquilino.
- Disena claves unicas e indices en el ambito correcto (por inquilino cuando la misma clave de negocio puede repetirse en otro). No confies solo en un filtro de interfaz o subdominio.
- Evita referencias cruzadas entre inquilinos por error: usa restricciones que comprueben el mismo ambito en ambos extremos de la relacion, ademas de validaciones de aplicacion.
- Si se adopta Row Level Security, define como se establece y limpia el contexto en cada transaccion y como se prueban los accesos negados. RLS complementa la autorizacion; no la reemplaza.
- Las operaciones de soporte y exportacion de datos requieren autorizacion explicita, alcance acotado y auditoria.

## 4. Restricciones, indices e historial

- Usa tipos adecuados, `NOT NULL` cuando el dato sea obligatorio, `UNIQUE`, `CHECK` y claves foraneas para las reglas que la base puede garantizar. No dejes invariantes centrales solo en codigo de aplicacion.
- Indices segun consultas, relaciones y volumen esperado. Evalua el costo de escritura; no indexes todas las columnas por defecto. Revisa indices compuestos y parciales para consultas frecuentes por inquilino y estado.
- Conserva el historial necesario para explicar altas manuales, renovaciones, contratos, descuentos, devoluciones y cambios de permisos. Distingue el estado actual del registro de las acciones que lo produjeron.
- Para eventos entre modulos y efectos externos, define identificadores de evento, reintentos e idempotencia. Con patron _outbox_, el hecho de negocio y su publicacion pendiente se registran en la misma transaccion.
- La desnormalizacion, cache o vistas materializadas requieren un caso medido, una fuente de verdad identificada y un mecanismo de actualizacion o reconstruccion.

## 5. Migraciones y despliegue

1. Todo cambio de esquema se versiona en una migracion del repositorio. No se modifica produccion a mano.
2. Revisa los datos existentes antes de imponer una restriccion nueva. Especifica respaldo, transformacion, validacion y comportamiento ante registros incompatibles.
3. Para cambios incompatibles, secuencia gradual: anadir estructura, adaptar lecturas y escrituras, migrar y verificar datos, y retirar lo anterior en una entrega posterior. Considera que convivan temporalmente versiones distintas de la aplicacion.
4. Evita migraciones que bloqueen tablas extensas sin evaluar su impacto. Describe como volver a una version operativa; no prometas revertir automaticamente una transformacion destructiva.
5. Actualiza tipos, consultas, documentacion y pruebas afectadas en el mismo cambio. El agente genera el SQL; **solo el humano lo ejecuta contra una base real**.

## 6. Formato obligatorio de propuesta antes de implementar

Al anadir un tipo de dato o cambiar el esquema, presenta brevemente:

1. **Necesidad:** hecho de negocio, modulo dueno y ciclo de vida.
2. **Inspeccion:** tablas, columnas, migraciones y relaciones existentes que revisaste.
3. **Modelo propuesto:** tablas y columnas nuevas o reutilizadas, cardinalidades, ambito y motivo de la decision entre columna, tabla o pivote.
4. **Integridad:** tipos, claves, restricciones, indices, permisos e historial.
5. **Cambio:** migracion, tratamiento de datos actuales, compatibilidad durante el despliegue y verificacion.
6. **Alternativa descartada:** al menos una, con la razon concreta.
7. **Preguntas de negocio:** unicamente las que impidan definir correctamente el esquema.

Despues de la aprobacion, implementa la migracion y el codigo correspondiente, verifica los casos significativos y resume los resultados. Para cambios pequenos la propuesta puede ser breve; la inspeccion del esquema y el respeto de las restricciones nunca se omiten.
