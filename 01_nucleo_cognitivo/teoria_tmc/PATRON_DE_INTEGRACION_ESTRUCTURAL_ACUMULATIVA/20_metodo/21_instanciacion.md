# Método de instanciación

## Fase 0 — Declarar el nivel

Definir dominio, escala, intervalo y sistema `X`.

## Fase 1 — Delimitar el estado

Listar las variables o relaciones que constituyen `S_t` y justificar por qué son suficientes para explicar la transición.

## Fase 2 — Identificar el aporte

Definir `u_t`, su procedencia, granularidad y condición de disponibilidad. Separarlo del estado previo.

## Fase 3 — Recortar el contexto operativo

Declarar `κ_t` sólo con condiciones que puedan modificar admisión, transformación, peso, secuencia o persistencia del aporte.

## Fase 4 — Especificar la integración

Describir `𝓘` mediante uno o más de estos niveles:

1. regla formal;
2. algoritmo;
3. mecanismo causal documentado;
4. secuencia funcional observable;
5. hipótesis explícita pendiente de validación.

## Fase 5 — Describir el estado posterior

Registrar `S_{t+1}` y el cambio `Δ_t`. Evitar crear una entidad redundante para la «configuración resultante»: el estado posterior ya cumple esa función.

## Fase 6 — Demostrar persistencia

Mostrar al menos una forma en que `S_{t+1}` cambia una transición, una respuesta o una capacidad posterior.

## Fase 7 — Probar alternativas

Comparar la explicación PIEA con posibilidades más simples:

- sucesión;
- almacenamiento;
- suma;
- respuesta al último aporte;
- efecto del contexto sin integración;
- interpretación del observador.

## Fase 8 — Clasificar

Asignar:

```txt
CONFIRMED_INSTANCE
PLAUSIBLE_INSTANCE
BOUNDARY_CASE
NON_INSTANCE
INSUFFICIENT_EVIDENCE
```

## Fase 9 — Separar adaptación y manifestación

Si el análisis se convertirá en documento, video, grafo u otra salida, cerrar primero la instancia PIEA. Después aplicar el protocolo ACCD correspondiente; no insertar la lógica de realización dentro de `𝓘` salvo que la producción de esa salida sea el fenómeno analizado.

