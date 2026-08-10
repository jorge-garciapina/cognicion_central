# Estado cognitivo como grafo ponderado

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Definición operativa

El estado cognitivo se modela como una configuración, no como una etiqueta única.

```text
EC(t) = (N, E, W_N, W_E, Q, H)
```

- `N`: nodos relevantes;
- `E`: relaciones activas;
- `W_N`: pesos de nodos;
- `W_E`: pesos de aristas;
- `Q`: estructura motivacional/normativa activa;
- `H`: historial necesario para interpretar la configuración.

## 2. Dirección cognitiva

La dirección se aproxima por la concentración relativa de peso en subgrafos asociados a ciertas interpretaciones o acciones.

```text
subgrafo_A domina
→ A se vuelve más accesible/plausible
```

Esto NO implica determinismo.

## 3. Tipos de nodos

```text
Idea
Evidencia
Objeción
Heurística
Meta
Miedo
Norma
Plan
Acción candidata
Costo
Recompensa
Identidad
Confianza
```

## 4. Ejemplo fraudulento

```text
N1: Jeanne tiene acceso a la reina
N2: la reina puede reconciliarse conmigo
N3: ayudar con el collar mejorará mi posición
N4: esto podría ser un fraude
N5: actuar ahora es conveniente
```

Las señales de Jeanne buscan reforzar `N1..N3/N5` e inhibir o explicar `N4`.

## 5. Umbral de acción

Definimos provisionalmente:

```text
A se habilita si Φ(EC, Q, K) ≥ θ_A
```

`Φ` no es una función psicológica universal; representa un criterio abstracto de suficiencia para la instancia.

## 6. Observación indirecta

El estado cognitivo no siempre es directamente observable. Puede inferirse a partir de:

- declaraciones;
- elecciones;
- secuencia de acciones;
- tiempo de respuesta;
- contradicciones;
- métricas;
- resultados de prueba.

Toda inferencia debe marcarse como tal.

## 7. Granularidad

```text
macro: atención / intención / confianza
meso: familias de nodos y relaciones
micro: proposiciones, objeciones, recuerdos, señales concretas
```

La MTC DEBE permitir cambiar de granularidad sin confundir una vista comprimida con la totalidad del estado.
