# MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA — paquete formal v0.1.0

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 0. Propósito del paquete

Este paquete formaliza la **Máquina de Transducción Cognitiva (MTC)** como arquitectura transversal para describir sistemas donde una intervención informativa, simbólica, perceptiva o social altera la configuración cognitiva de uno o más agentes; esa configuración orienta acciones; las acciones movilizan capacidades; las capacidades operan dentro de un contexto; y el resultado se manifiesta externamente.

La tesis mínima es:

```text
INTERVENCIÓN
    ↓
TRANSFORMACIÓN COGNITIVA
    ↓
ACCIÓN
    ↓
CAPACIDAD MOVILIZADA
    ↓
CONTEXTO
    ↓
MANIFESTACIÓN
    ↓
RESULTADO / EVALUACIÓN
```

La MTC **no es una teoría de fraude**. El fraude es una especialización. Publicidad, educación y sistemas institucionales se incluyen como otras especializaciones de prueba.

## 1. Distinción central

Este paquete separa rigurosamente dos operaciones:

```text
TRANSFORMACIÓN
D → D
cambia la configuración dentro de un mismo dominio

TRANSDUCCIÓN
Dᵢ → Dⱼ     con Dᵢ ≠ Dⱼ
cruza entre dominios funcionalmente distintos
```

Ejemplo:

```text
EC₀ → EC₁ → EC₂ → EC*       = transformación cognitiva
EC* → ACCIÓN                  = transducción cognición→conducta
ACCIÓN + V + K → M            = transducción conducta/capacidad→mundo
```

## 2. Grafo nuclear

```text
                         O · OPERADOR
                              │
                         diseña I
                              ▼
                       I · INTERVENCIÓN
                              │
                              ▼
                     R · RECEPTOR/AGENTE
                              │
                             EC₀
                              │
                         τ₁…τₙ
                              ▼
                             EC*
                              │
                              ▼
                         A · ACCIÓN
                              │
                         moviliza V*
                              ▼
                       V · CAPACIDAD
                              │
                         opera en K
                              ▼
                       K · CONTEXTO
                              │
                              ▼
                    M · MANIFESTACIÓN
                              │
                    evaluación/captura
                              ▼
                        G · RESULTADO
                              │
                              ▼
                        F · FEEDBACK
                              │
                              └──────→ ajuste de I / τ / K
```

## 3. Forma formal compacta

La máquina se representa provisionalmente como:

```text
MTC = ⟨O, R, I, Q, EC, Τ, Θ, A, V, K, M, G, F, C⟩
```

Donde:

- `O`: operador o diseñador de la intervención;
- `R`: receptor o conjunto de agentes receptores;
- `I`: intervención;
- `Q`: estructura motivacional/normativa del receptor;
- `EC`: espacio de estados cognitivos;
- `Τ`: transformaciones internas `τ` dentro del dominio cognitivo;
- `Θ`: transducciones entre dominios;
- `A`: acciones posibles;
- `V`: capacidades movilizables;
- `K`: contexto donde las capacidades pueden operar;
- `M`: manifestaciones externas;
- `G`: función de objetivo, resultado o valor de evaluación;
- `F`: evidencia/feedback;
- `C`: contratos epistemológicos, éticos, operativos y de trazabilidad.

## 4. Dos versiones de la máquina

### MTC mínima, abierta

```text
MTC_min = ⟨I, R, EC, Τ, Θ, A, V, K, M⟩
```

Es suficiente para describir una cadena de conversión sin adaptación posterior.

### MTC adaptativa, cerrada

```text
MTC_closed = MTC_min + O + G + F + C
```

Incluye objetivo, observabilidad, evaluación, retroalimentación y reglas de ajuste.

## 5. Estructura del paquete

```text
00_core/
  definición, ontología, invariantes

10_mecanismo/
  transformación, transducción, estados,
  pipeline, capacidad, manifestación, feedback, escalas

20_metodo/
  contratos, método de instanciación, plantilla y pruebas

30_especializaciones/
  fraude del collar, publicidad, educación,
  institución y comparación

40_integraciones/
  Teoría de Máquinas Cognitivas, COGNICIÓN_CENTRAL,
  Transformador Cognitivo, ACSI y ACCD

90_meta/
  trazabilidad, glosario y changelog
```

## 6. Regla de autoridad

Este ZIP constituye un **artefacto de formalización local**. No modifica por sí mismo el canon de COGNICIÓN_CENTRAL, ACCD, ACSI ni la Teoría de Máquinas Cognitivas.

## 7. Orden recomendado de lectura

1. `00_core/00_especificacion_nuclear.md`
2. `10_mecanismo/10_transformacion_cognitiva.md`
3. `10_mecanismo/11_transduccion_cognitiva.md`
4. `10_mecanismo/12_estado_cognitivo_grafo_ponderado.md`
5. `10_mecanismo/14_capacidad_contexto_manifestacion.md`
6. `20_metodo/21_instanciacion_y_validacion.md`
7. `30_especializaciones/30_fraude_collar.md`
8. resto de especializaciones e integraciones.
