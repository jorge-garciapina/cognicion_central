# MODOS DE OPERACIÓN DEL COMMAND CENTER

**Versión:** `0.1.0`

Los modos modifican cuánta estructura operacional se hace visible al humano. No alteran la autoridad ni los permisos.

## CC-NORMAL — predeterminado

Objetivo: mínima fricción.

- normaliza cada prompt internamente;
- muestra la respuesta natural;
- muestra recibo sólo en riesgo elevado, persistencia, acción externa o ambigüedad relevante;
- trace disponible bajo demanda.

Uso típico: trabajo cotidiano.

## CC-TRACE

Objetivo: observabilidad.

Además de la respuesta:

- muestra comando normalizado resumido;
- muestra plan ejecutado;
- lista fuentes/capacidades principales;
- distingue hechos, inferencias y decisiones;
- muestra persistencia real.

Uso típico: auditoría conceptual y desarrollo de COGNICION_CENTRAL.

## CC-STRICT

Objetivo: control preventivo.

- todo comando se normaliza de forma visible;
- no se ejecuta hasta autorización humana, salvo operaciones puramente locales expresamente marcadas como autoautorizadas;
- no se infieren targets críticos;
- toda persistencia requiere autorización específica.

Uso típico: cambios canónicos, mantenimiento y operaciones de alto impacto.

## CC-DEV

Objetivo: ingeniería del sistema.

Muestra:

- prompt original;
- parsing semántico;
- comando normalizado completo;
- campos inferidos y confianza;
- resolución de targets;
- dependencias;
- capacidades seleccionadas y descartadas;
- plan;
- estados del ciclo de vida;
- trace;
- validadores;
- efectos de persistencia;
- fallos y fallbacks.

No revela razonamiento privado interno del modelo. Expone únicamente estructuras operacionales que el sistema puede registrar y justificar de forma segura.

## Cambio de modo

```text
CC MODE NORMAL
CC MODE TRACE
CC MODE STRICT
CC MODE DEV
```

El cambio de modo puede ser de sesión. No modifica el canon salvo que el humano solicite formalizar una política de modo predeterminado.
