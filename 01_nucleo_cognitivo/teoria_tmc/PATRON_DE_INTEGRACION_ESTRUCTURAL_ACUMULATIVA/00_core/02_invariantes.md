# Invariantes

Los invariantes siguientes constituyen el núcleo preservable PIEA. Una adaptación puede cambiar representaciones, escalas y mecanismos, pero no puede eliminar estos roles sin dejar de pertenecer al patrón.

## INV-PIEA-01 — Sistema delimitable

Debe existir una unidad de análisis `X` cuyas transiciones puedan distinguirse de cambios atribuidos exclusivamente al observador o a otro sistema.

## INV-PIEA-02 — Estado relevante

Antes de cada integración debe poder describirse un estado `S_t` con información suficiente para explicar, en el nivel adoptado, cómo el sistema trata el aporte.

## INV-PIEA-03 — Aporte parcial diferenciable

Debe existir un aporte `u_t` distinguible analíticamente del estado previo, aunque durante la integración pueda transformarse o perder su identidad original.

## INV-PIEA-04 — Integración y no mera coexistencia

El aporte debe modificar alguna relación, disposición, peso, acceso, restricción, capacidad o componente relevante del estado. Estar presente junto al sistema no equivale a ser integrado.

## INV-PIEA-05 — Dependencia del estado previo

`S_t` debe participar en la determinación de `S_{t+1}`. Una función que produzca siempre el mismo resultado a partir de `u_t`, ignorando por completo el estado, no satisface PIEA.

## INV-PIEA-06 — Condicionamiento contextual

La transición debe admitir que condiciones operativas `κ_t` seleccionen, limiten o modulen la integración. El contexto puede ser constante en un caso particular, pero debe ser conceptualmente distinguible del estado y del aporte.

## INV-PIEA-07 — Estado posterior efectivo

La integración debe producir un estado posterior `S_{t+1}`. Una interpretación o salida que no modifica el estado relevante del sistema puede ser una observación, pero no demuestra por sí misma una transición PIEA.

## INV-PIEA-08 — Persistencia selectiva de trayectoria

Al menos parte del efecto estructural de transiciones previas debe permanecer disponible para condicionar transiciones o comportamientos posteriores. No se exige memoria exhaustiva.

## INV-PIEA-09 — Acumulación no reducible a suma

Debe existir alguna consecuencia organizativa que no quede explicada por enumerar o sumar aportes aislados. Puede consistir en orden, relación, inhibición, umbral, compatibilidad, transformación o función emergente en el nivel declarado.

## INV-PIEA-10 — Trazabilidad de la transición

Debe poder declararse, aunque sea cualitativamente:

```txt
qué era S_t;
qué contó como u_t;
qué condiciones κ_t fueron relevantes;
qué hizo 𝓘;
qué cambió en S_{t+1};
qué efecto de trayectoria quedó preservado.
```

## Tabla de destrucción del patrón

| Invariante eliminado | Resultado |
|---|---|
| Estado previo | Procesamiento sin dependencia acumulativa demostrada |
| Aporte diferenciable | Cambio interno sin unidad de integración identificable |
| Integración | Yuxtaposición o coexistencia |
| Contexto operativo | Regla incondicionada; puede ser otro patrón más simple |
| Estado posterior | Descripción sin actualización |
| Persistencia de trayectoria | Reinicio entre pasos |
| Organización | Almacenamiento o suma indiferenciada |

