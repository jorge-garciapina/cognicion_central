# Feedback, control y observabilidad

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Máquina abierta vs. cerrada

### Abierta

```text
I → EC → A → M
```

No ajusta su comportamiento a partir del resultado.

### Cerrada/adaptativa

```text
I → EC → A → M → F
↑               │
└──── ajuste ───┘
```

## 2. Feedback `F`

Puede provenir de:

- respuesta verbal;
- acción o no-acción;
- métricas;
- error;
- verificación externa;
- consecuencia material;
- cambio institucional;
- evaluación humana.

## 3. Qué puede actualizar

```text
I      intervención
τ      transformaciones
Q_hat  estimación de motivaciones
K_hat  modelo del contexto
G      función de evaluación
policy regla de selección de siguiente intervención
```

## 4. Observabilidad

La máquina debería registrar, cuando sea posible:

```yaml
trace:
  intervention:
  observed_response:
  inferred_state_delta:
  action:
  manifestation:
  evaluation:
  uncertainty:
```

## 5. Feedback no es verdad

Una reacción favorable no demuestra que la representación sea verdadera. El feedback informa sobre el efecto del sistema, no valida automáticamente sus premisas.

## 6. Control humano

En COGNICIÓN_CENTRAL, cualquier actualización persistente de objetivos, contratos o canon requiere autorización humana. La existencia de feedback no otorga soberanía a la máquina.

## 7. Ejemplo Jeanne

```text
Rohan duda
→ Jeanne observa resistencia
→ añade señal / cambia relato
→ Rohan aumenta confianza
→ Jeanne introduce siguiente paso
```

La interpretación histórica concreta requiere evidencia; el patrón se usa aquí como modelado funcional de la especialización fraudulenta.
