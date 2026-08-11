# Transducción cognitiva

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Definición

> **Transducción cognitiva** es la conversión funcional entre dominios distintos en una cadena donde la cognición participa como interfaz de interpretación, decisión o coordinación.

Formalmente:

```text
θᵢⱼ : Dᵢ → Dⱼ,  Dᵢ ≠ Dⱼ
```

## 2. Transducciones principales de MTC

### `θ_IC` — información/percepción → cognición

```text
I → EC
```

La señal no "se vuelve" literalmente una creencia; es interpretada y produce una perturbación estructural.

### `θ_CA` — cognición → acción

```text
EC* → A
```

Cruza de una configuración interna a una conducta ejecutada.

### `θ_AM` — acción/capacidad/contexto → manifestación

```text
A + V + K → M
```

La acción moviliza una capacidad que sólo produce el efecto si el contexto permite o reconoce esa capacidad.

## 3. Diferencia con transformación

```text
TRANSFORMACIÓN:
  creencia débil → creencia fuerte
  dominio cognitivo → dominio cognitivo

TRANSDUCCIÓN:
  intención → firma
  dominio cognitivo → dominio conductual
```

## 4. La transducción no es identidad

No debe decirse:

```text
prestigio = collar
```

sino:

```text
prestigio V
+ acción de Rohan
+ contexto de credibilidad
→ entrega del collar M
```

La manifestación es evidencia de operación de una capacidad, no la capacidad misma.

## 5. La agencia como interfaz

En sistemas humanos, `θ_CA` está mediada por agencia. Por ello:

```text
EC* no determina necesariamente A
```

La máquina puede modelar:

- probabilidad de acción;
- umbral de acción;
- habilitación;
- reducción de fricción;
- aumento de saliencia;
- coordinación de alternativas.

## 6. Transducción multinivel

Una MTC social puede encadenar agentes:

```text
señal de A
→ cognición de B
→ acción de B
→ señal para C
→ cognición de C
→ acción de C
→ M
```

Cada cruce constituye una interfaz de transducción local dentro de una máquina meso o macro.

## 7. Regla formal

Una transducción válida debe declarar:

```yaml
transduction:
  source_domain:
  target_domain:
  carrier_or_interface:
  enabling_conditions:
  source_state:
  target_event_or_state:
  non_determinism:
  validation_evidence:
```

## 8. Falla típica

Si no puede identificarse qué cambia de dominio, probablemente se está describiendo sólo una transformación, una causalidad física ordinaria o una metáfora no formalizada.
