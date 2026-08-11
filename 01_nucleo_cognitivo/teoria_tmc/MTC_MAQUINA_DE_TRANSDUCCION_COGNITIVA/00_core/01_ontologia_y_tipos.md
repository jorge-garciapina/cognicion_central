# Ontología y tipos de la MTC

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Objetivo

Definir las entidades mínimas sin depender de una especialización particular.

## 2. Tipos nucleares

### `Operator O`
Agente, organización o sistema que selecciona/diseña una intervención con respecto a un objetivo o criterio.

### `Receiver R`
Agente o conjunto de agentes cuyo estado cognitivo participa en la cadena de conversión.

### `Intervention I`
Paquete de información, percepción, señal, narrativa, instrucción, entorno o interacción que perturba el estado cognitivo.

### `MotivationalStructure Q`
Subgrafo de metas, necesidades, deseos, miedos, obligaciones, normas, hábitos, identidad, recompensas esperadas y costos percibidos que afecta la evaluación del receptor.

### `CognitiveState EC`
Configuración interna relevante para la acción. Puede representarse como grafo ponderado.

### `Transformation τ`
Operación interna que mapea un estado de un dominio en otro estado del mismo dominio.

### `Transduction θ`
Operación/interfaz que cruza entre dominios funcionalmente diferentes.

### `Action A`
Conducta ejecutada por el agente o sistema actuador.

### `Capability V`
Capacidad operativa disponible en el momento de actuar y capaz de producir efectos externos. Puede ser preexistente (`V₀`), reforzada (`V+`) o parcialmente creada durante el proceso.

### `Context K`
Conjunto de condiciones sociales, materiales, institucionales, tecnológicas y normativas bajo las cuales `V` puede o no realizarse.

### `Manifestation M`
Cambio externo observable producido por la operación de `A + V + K`.

### `Goal/Value G`
Criterio mediante el cual se evalúa el resultado. No debe confundirse con `V`.

### `Feedback F`
Evidencia derivada de estados, acciones o manifestaciones y utilizada para modificar futuras intervenciones o reglas.

### `Contract C`
Restricciones epistemológicas, éticas, operativas, de autoridad y de trazabilidad.

## 3. Relaciones tipadas

```text
O  --DESIGNS-->          I
I  --PERTURBS-->         EC
Q  --MODULATES-->        τ / evaluación
EC --TRANSFORMS_BY-->    τ
EC* --ENABLES-->         A
A  --MOBILIZES-->        V
V  --OPERATES_IN-->      K
A+V+K --REALIZES-->      M
M  --EVALUATED_BY-->     G
M  --GENERATES-->        F
F  --UPDATES-->          I / τ / K / política
C  --CONSTRAINS-->       todo el sistema
```

## 4. Cardinalidades

La forma mínima admite:

```text
1..n operadores
1..n receptores
1..n intervenciones
1..n estados
0..n estructuras motivacionales explícitas
1..n transformaciones
1..n acciones candidatas
1..n capacidades
1..n contextos
1..n manifestaciones
0..n bucles de feedback
```

## 5. Tipos de capacidad `V`

```text
material       dinero, propiedad, infraestructura
social         prestigio, confianza, red, influencia
institucional  autoridad, firma, permiso, cargo
cognitiva      conocimiento, competencia, memoria
corporal       tiempo, trabajo, presencia, movimiento
tecnológica    credenciales, acceso, control de sistemas
política       voto, poder de decisión, legitimidad
atencional     tiempo/foco disponibles para procesamiento
```

## 6. Tipos de manifestación `M`

```text
transferencia de control
movimiento físico
compra
contrato
permiso
título
voto emitido
conducta coordinada
solución producida
competencia demostrada
infraestructura construida
estado social alterado
```

## 7. Regla de no-colapso

```text
I ≠ EC ≠ A ≠ V ≠ M ≠ G
```

Cada símbolo representa una función distinta. Una instancia puede materializar dos funciones en el mismo actor u objeto, pero la formalización DEBE preservar las distinciones analíticas.
