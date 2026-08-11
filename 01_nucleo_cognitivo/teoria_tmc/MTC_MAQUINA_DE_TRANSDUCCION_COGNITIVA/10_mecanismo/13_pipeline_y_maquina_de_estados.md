# Pipeline cognitivo y máquina de estados

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Pipeline

Un pipeline cognitivo es una cadena controlada de operaciones que transforma estados cognitivos y prepara transducciones hacia acción.

```text
entrada
→ stage₁
→ EC₁
→ stage₂
→ EC₂
→ ...
→ EC*
→ acción
```

## 2. Stage como contrato

```yaml
stage:
  id:
  requires:
    cognitive_state:
  consumes:
    intervention_fragment:
  applies:
    transformation:
  produces:
    cognitive_state:
  exit_gate:
  fallbacks:
```

El siguiente stage DEBE tomar como entrada una condición realmente producida por el anterior.

## 3. Transiciones

Las transiciones no son flechas vacías. Pueden:

- reforzar conexiones;
- inhibir objeciones;
- activar nuevos nodos;
- trasladar relevancia;
- reducir fricción;
- cambiar la interpretación de evidencia previa.

## 4. Máquina de estados

```text
S0 --evento/intervención→ S1
S1 --condición→ S2
S2 --gate→ S3
S3 --acción→ salida
```

La máquina puede contener ramas:

```text
               → confianza alta → acción
EC₂ → evaluación
               → duda alta → verificación → abandono
```

## 5. Acción como salida, no estado

Puede utilizarse un macroestado llamado `READY_TO_ACT`, pero la ejecución debe mantenerse separada:

```text
READY_TO_ACT ≠ ACTED
```

## 6. Errores

```text
FAIL-1: stage recibe un estado que no existe
FAIL-2: transición no justificada
FAIL-3: acción tratada como estado interno
FAIL-4: no existe criterio de salida
FAIL-5: pipeline describe discurso, no cambio cognitivo
```

## 7. Relación con MTC

El pipeline implementa principalmente la región:

```text
I → EC₀ → τ₁…τₙ → EC*
```

La MTC añade explícitamente:

```text
EC* → A → V → K → M
```
