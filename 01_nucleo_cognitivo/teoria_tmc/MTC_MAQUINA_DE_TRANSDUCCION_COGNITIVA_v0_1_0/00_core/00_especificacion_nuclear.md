# Especificación nuclear de la MTC

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Definición nuclear

> **Una Máquina de Transducción Cognitiva es un sistema en el que una intervención informativa, simbólica, perceptiva o social modifica la configuración cognitiva de uno o más agentes; esa configuración orienta acciones que movilizan capacidades de dichos agentes dentro de un contexto; la operación de esas capacidades produce manifestaciones externas observables; y, en variantes adaptativas, la evidencia producida por esas manifestaciones retroalimenta el diseño de nuevas intervenciones.**

## 2. Problema que resuelve

La MTC permite describir con una misma gramática fenómenos que superficialmente pertenecen a dominios distintos:

```text
fraude
publicidad
educación
orden institucional
narrativa
coordinación
```

La identidad común no se fija por el tema, sino por la operación:

```text
I → ΔEC → A → V* → K → M
```

## 3. Fronteras

La MTC NO DEBE confundirse con:

- cualquier secuencia causal donde aparezca una persona;
- una metáfora genérica de "máquina";
- un pipeline que no modela estados cognitivos;
- una teoría psicológica total de la decisión;
- una equivalencia moral entre sus especializaciones;
- ACCD, ACSI o el Transformador Cognitivo.

## 4. Invariantes nucleares

`INV-MTC-01` — Debe existir al menos un **estado cognitivo** distinguible de la acción observable.

`INV-MTC-02` — Debe existir al menos una **transformación interna** del estado cognitivo o una diferencia relevante entre estado inicial y estado de acción.

`INV-MTC-03` — La acción `A` NO DEBE tratarse como si fuera simplemente otro estado cognitivo. Es una salida conductual o una transición hacia el dominio conductual.

`INV-MTC-04` — Debe existir una **capacidad `V`** cuya movilización explique por qué la acción puede producir una manifestación externa.

`INV-MTC-05` — `V` NO ES `M`. La capacidad generativa y su manifestación son ontológicamente distintas.

`INV-MTC-06` — `M` NO TIENE que ser un objeto. Puede ser un cambio de estado externo: fondos transferidos, permiso concedido, edificio evacuado, título otorgado, problema resuelto.

`INV-MTC-07` — `K` es funcionalmente necesario: una capacidad sólo puede manifestarse dentro de un entorno que la reconozca o permita operar.

`INV-MTC-08` — La intervención `I` NO TIENE que ser falsa. `W~` pertenece sólo a ciertas especializaciones, como el fraude.

`INV-MTC-09` — La estructura motivacional `Q` NO TIENE que ser un deseo consciente. Puede incluir obligación, hábito, meta, necesidad, miedo, identidad, norma o incentivo.

`INV-MTC-10` — La intervención no se interpreta como control determinista. La máquina orienta, habilita, incrementa probabilidad o reorganiza condiciones de acción.

`INV-MTC-11` — Compartir arquitectura no implica identidad ética, política o epistemológica.

`INV-MTC-12` — Toda inferencia estructural importante DEBE distinguirse de evidencia empírica sobre una instancia particular.

## 5. Dominio de variación

Pueden variar sin destruir la identidad MTC:

- número de operadores;
- número de receptores;
- medios y canales de intervención;
- composición de `Q`;
- granularidad de `EC`;
- transformaciones `τ`;
- acciones posibles;
- naturaleza de `V`;
- entorno `K`;
- forma de `M`;
- función `G`;
- existencia o no de feedback adaptativo;
- escala micro, meso o macro.

## 6. Criterio mínimo de pertenencia

Un candidato `S` pertenece provisionalmente a MTC si es posible construir sin forzar el caso:

```text
I
↓
EC₀ ──τ──→ EC*
            ↓
            A
            ↓
            V
            ↓ bajo K
            M
```

Si `A` puede eliminarse sin pérdida explicativa y `M` aparece por causalidad puramente física, el sistema probablemente NO pertenece a MTC.

## 7. Estado de formalización

`FORMALIZADA COMO PROPUESTA` significa que sus piezas, contratos y pruebas están explicitados. No significa que haya sido incorporada al canon ni que su generalidad haya sido demostrada empíricamente para todos los dominios propuestos.
