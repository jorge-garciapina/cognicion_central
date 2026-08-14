# FUTURO — RECURSOS DERIVADOS DE MODELOS COGNITIVOS

> **Proyecto:** COGNICIÓN_CENTRAL
> **Fecha:** 2026-08-10
> **Estado:** `BACKLOG CONCEPTUAL / TRABAJO FUTURO / NO CANÓNICO`
> **Decisión actual:** formalizar y probar primero `cAPP_VIDEO_MTC`; las demás familias no se implementan todavía.

## 0. Idea futura

La Teoría General de Modelado de Ideas permite pensar un modelo base como infraestructura generativa. Una vez formalizado un modelo `M`, pueden derivarse cApps orientadas a finalidades diferentes sin reconstruir el conocimiento desde cero.

```text
                           MODELO M
                              │
              ┌───────────────┼────────────────┐
              ▼               ▼                ▼
        cAPP_VIDEO[M]    cAPP_STUDY[M]   cAPP_EXPLAIN[M]
              │               │                │
              ▼               ▼                ▼
      diseño audiovisual  aprendizaje      explicación
```

La implementación actual sólo desarrolla:

```text
M = MTC
→ cAPP_VIDEO_MTC
```

## 1. `cAPP_VIDEO[M]` — familia audiovisual

**Estado:** clase formalizada; primera especialización `cAPP_VIDEO_MTC` creada.

### Trabajo futuro

- probar la clase con al menos dos modelos base adicionales;
- identificar qué módulos audiovisuales son realmente transversales y pueden extraerse a una biblioteca común;
- crear un método formal `DERIVE_VIDEO_CAPP(M)`;
- decidir cuándo ACSI debe ser subcApp, módulo o arquitectura vecina;
- probar backends de salida: documental largo, corto vertical, carousel audiovisual, clase-video;
- formalizar criterios de similitud entre `cAPP_VIDEO[M1]` y `cAPP_VIDEO[M2]`.

## 2. `cAPP_STUDY[M]` — recurso de aprendizaje personalizado

### Intuición

Dado un modelo formal `M` y un sujeto `S`, producir un sistema de estudio que seleccione recorridos, analogías, ejercicios, evaluaciones y repeticiones de acuerdo con:

```text
modelo M
+ conocimiento previo de S
+ objetivos de S
+ errores detectados
+ contexto
→ arquitectura de aprendizaje personalizada
```

### Outputs futuros candidatos

- mapa de prerrequisitos;
- plan de estudio;
- trayectorias alternativas;
- banco de analogías anclado al modelo;
- ejercicios por nodo/arista;
- pruebas de transferencia;
- sistema de feedback y corrección;
- registro de estado de dominio por componente.

### Preguntas abiertas

- ¿el modelo de conocimiento y el modelo del estudiante deben ser artefactos separados?
- ¿qué significa “dominar” una relación del modelo?
- ¿cómo representar error conceptual, olvido y transferencia?
- ¿cómo evitar adaptar tanto que se rompa el núcleo?

## 3. `cAPP_EXPLAIN[M]` — recurso explicativo general

### Intuición

Construir explicaciones no necesariamente audiovisuales desde un modelo base:

```text
M
+ audiencia
+ pregunta
+ restricciones
→ explicación contextualizada
```

### Realizaciones posibles

- texto largo;
- respuesta breve;
- diagrama;
- tutorial;
- clase;
- documento técnico;
- conversación socrática;
- explicación por analogías.

### Diferencia respecto de `cAPP_VIDEO[M]`

`cAPP_EXPLAIN[M]` no presupone temporalidad audiovisual ni red visual. Puede convertirse en una dependencia compartida de futuras cApps, pero no debe suponerse todavía que sustituya al puente audiovisual.

## 4. Otras cApps derivables candidatas

Estas NO están aprobadas para implementación; sólo quedan registradas como posibilidades:

```text
cAPP_INTERVIEW[M]
  entrevistar a un experto/revisor usando la ontología de M

cAPP_COMPARE[M]
  comparar realizaciones por bindings e invariantes

cAPP_DIAGNOSE[M]
  diagnosticar un caso respecto del modelo

cAPP_SIMULATE[M]
  explorar cambios de variables y manifestaciones

cAPP_RESEARCH[M]
  organizar investigación para completar bindings/vacíos del modelo

cAPP_AUDIT[M]
  comprobar fidelidad de una intervención o realización respecto de M
```

## 5. Fábrica futura de cApps derivadas

Una línea futura importante es formalizar una **meta-arquitectura de derivación**:

```text
MODEL_ARTIFACT
      +
TARGET_FUNCTION
      +
LIBRARY_OF_COGNITIVE_MODULES
      ↓
DERIVATION_METHOD
      ↓
cAPP[TARGET_FUNCTION, MODEL]
```

Ejemplo:

```text
MTC + VIDEO → cAPP_VIDEO_MTC
MTC + STUDY → cAPP_STUDY_MTC
BARNUM + VIDEO → cAPP_VIDEO_BARNUM
```

La meta-arquitectura debe definir qué se hereda del modelo, qué aporta la finalidad y qué módulos son compartibles.

## 6. Orden recomendado de trabajo futuro

1. **Probar `cAPP_VIDEO_MTC` con varios casos.**
2. Corregir sus módulos antes de generalizar.
3. Crear una segunda `cAPP_VIDEO[M2]` y comparar ensamblajes.
4. Extraer sólo entonces la biblioteca audiovisual verdaderamente transversal.
5. Formalizar `DERIVE_VIDEO_CAPP(M)`.
6. Iniciar `cAPP_STUDY[M]` como segunda familia de finalidad distinta.
7. Iniciar `cAPP_EXPLAIN[M]` y comparar qué módulos comparte con VIDEO/STUDY.
8. Sólo después evaluar una fábrica general de cApps derivadas.

## 7. Regla de prudencia

No asumir que porque una cApp funcione bien para MTC sus módulos son universales. La transversalidad debe demostrarse por comparación de múltiples modelos y conservar invariantes explícitos.

## 8. Estado

```yaml
future_work:
  cAPP_VIDEO_MTC:
    state: IMPLEMENTED_AS_FORMAL_ARTIFACT_v0_1_0
  cAPP_VIDEO_other_models:
    state: FUTURE
  cAPP_STUDY:
    state: FUTURE
  cAPP_EXPLAIN:
    state: FUTURE
  generic_capp_derivation_factory:
    state: FUTURE_AFTER_MULTI_MODEL_EVIDENCE
```
