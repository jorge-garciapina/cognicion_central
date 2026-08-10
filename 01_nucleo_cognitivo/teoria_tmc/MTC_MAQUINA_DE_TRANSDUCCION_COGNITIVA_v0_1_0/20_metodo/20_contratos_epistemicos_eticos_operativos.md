# Contratos epistemológicos, éticos y operativos

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Motivo

La misma topología de conversión puede aparecer en sistemas legítimos, neutrales o dañinos. La arquitectura no debe borrar esas diferencias.

## 2. Contrato epistemológico

```yaml
epistemic_contract:
  truth_alignment:
  uncertainty_marking:
  source_traceability:
  correction_channels:
  deception_allowed: false|restricted|true_by_specialization
```

## 3. Contrato ético

Dimensiones mínimas:

```text
TRANSPARENCIA
¿el receptor conoce la intención relevante?

CONSENTIMIENTO
¿acepta participar?

AUTONOMÍA
¿se preservan alternativas reales?

ALINEACIÓN DE BENEFICIOS
¿G es compatible con el bienestar/interés del receptor?

REVERSIBILIDAD
¿los efectos pueden corregirse?

ASIMETRÍA
¿el operador explota información o poder no disponible al receptor?
```

## 4. Contrato operativo

```yaml
operational_contract:
  inputs:
  outputs:
  required_context:
  action_threshold:
  failure_modes:
  stop_conditions:
  observability:
```

## 5. Contrato de autoridad

En COGNICIÓN_CENTRAL:

```text
propuesta local
≠
canon
```

La formalización puede describir una máquina sin autorizar su ejecución ni su persistencia.

## 6. Especialización fraudulenta

El fraude añade típicamente:

```text
W~ diverge deliberadamente de W*
objetivo anunciado ≠ objetivo real
asimetría informacional alta
opacidad funcional necesaria
perjuicio/riesgo no transparentado
```

## 7. Especialización educativa

Debería exigir:

```text
corrección epistemológica
capacidad de revisión
objetivo educativo explícito
no confundir obediencia con aprendizaje
```

## 8. Regla

`MISMA_ARQUITECTURA_DE_TRANSDUCCIÓN ≠ MISMO_CONTRATO`.
