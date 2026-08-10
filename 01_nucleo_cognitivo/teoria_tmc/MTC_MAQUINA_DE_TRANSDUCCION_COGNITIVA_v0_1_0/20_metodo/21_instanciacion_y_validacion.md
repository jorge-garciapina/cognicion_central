# Método de instanciación y validación

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Entrada

Puede recibirse:

- historia;
- sistema social;
- campaña;
- protocolo;
- guion;
- institución;
- intervención educativa;
- proceso organizacional.

## 2. Procedimiento MTC-INSTANTIATE-001

### P0 — declarar objetivo del análisis

```text
¿describir, explicar, comparar, diseñar o validar?
```

### P1 — localizar manifestación `M`

¿Qué cambio externo observable se produjo o se pretende producir?

### P2 — reconstruir capacidad `V`

¿Qué capacidad hace posible ese cambio?

### P3 — identificar contexto `K`

¿Qué debe ser verdadero del entorno para que `V` pueda operar?

### P4 — identificar acción `A`

¿Qué conducta activa/moviliza `V`?

### P5 — reconstruir estado `EC*`

¿Qué configuración cognitiva hace inteligible o probable `A`?

### P6 — reconstruir trayectoria `EC₀ → EC*`

¿Qué estados intermedios importan?

### P7 — identificar intervención `I`

¿Qué señales/representaciones perturban el estado?

### P8 — modelar `Q`

¿Qué deseos, normas, miedos, metas o hábitos modulan la trayectoria?

### P9 — identificar operador `O` y resultado `G`

¿Quién diseña/selecciona la intervención y con qué criterio?

### P10 — separar transformación y transducción

Marcar explícitamente cada `τ` y cada `θ`.

### P11 — definir feedback `F`

Si existe adaptación, ¿qué evidencia se lee y qué se cambia?

### P12 — declarar contratos `C`

Verdad, consentimiento, autoridad, trazabilidad, límites.

### P13 — ejecutar pruebas de pertenencia

Usar `23_pruebas_de_pertenencia.md`.

### P14 — abstraer invariantes/variación

Eliminar nombres concretos y realizar sustituciones.

### P15 — validar contra al menos una segunda instancia

No declarar universalidad desde un solo caso.

## 3. Salida mínima

```yaml
mtc_instance:
  operator:
  receiver:
  intervention:
  motivational_structure:
  cognitive_states:
  transformations:
  transductions:
  action:
  capability:
  context:
  manifestation:
  goal:
  feedback:
  contracts:
  epistemic_status:
```

## 4. Gates

```text
G1  estado ≠ acción
G2  capacidad ≠ manifestación
G3  transformación ≠ transducción
G4  contexto explícito
G5  cadena causal no mágica
G6  inferencia marcada
G7  especialización compatible
G8  no sobre-generalización
```
