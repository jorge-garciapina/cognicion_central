# Plantilla formal para especializaciones

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Principio

Una especialización hereda el núcleo y añade restricciones sin destruirlo.

```text
SPECIALIZATION_X = MTC + Constraints_X + Vocabulary_X + Tests_X
```

## 2. Plantilla

```yaml
specialization:
  id:
  name:
  purpose:
  status: proposed

  inherited_core:
    - intervention
    - cognitive_state
    - transformation
    - action
    - capability
    - context
    - manifestation

  added_roles: []
  added_state_types: []
  added_relations: []
  mandatory_constraints: []
  prohibited_collapses: []

  operator:
  receiver:
  motivational_structure:
  intervention:
  cognitive_trajectory:
  action:
  capability:
  context:
  manifestation:
  goal:
  feedback:

  epistemic_contract:
  ethical_contract:
  operational_contract:

  domain_of_variation:
  invariants:
  failure_modes:
  acceptance_tests:
```

## 3. Reglas

- La especialización DEBE explicar por qué necesita sus piezas adicionales.
- No debe convertir una propiedad local en invariante global.
- Debe incluir al menos un contrafactual.
- Debe incluir un caso incompatible o un límite.
- Debe declarar qué elementos son descriptivos y cuáles normativos.

## 4. Reutilización

Una vez formalizada, una especialización puede instanciar nuevos casos cambiando el dominio de variación sin reconstruir el núcleo.
