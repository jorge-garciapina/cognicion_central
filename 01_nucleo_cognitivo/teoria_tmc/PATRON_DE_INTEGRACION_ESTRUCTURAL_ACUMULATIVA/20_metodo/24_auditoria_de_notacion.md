# Auditoría de notación

## 1. Forma histórica y forma canónica

| Función | Forma descubriente | Forma canónica PIEA 0.2.0 | Motivo |
|---|---|---|---|
| Transición | `S_{t+1}=T_C(S_t,u_t)` | `S_{t+1}=𝓘_{κ_t}(S_t,u_t)` | `T` y `C` ya tienen usos definidos en ACCD. |
| Estado | `S_t` | `S_t` | No produce colisión funcional con la ecuación ACCD. |
| Aporte | `u_t` | `u_t` | Se conserva por continuidad; no equivale a UOA. |
| Contexto de transición | `C` o `c_t` | `κ_t` | Se separa de `C` corriente y `𝓒` construcción en ACCD. |
| Integración | `T` | `𝓘` | Evita confundir operador PIEA con espacio temático ACCD. |

## 2. Símbolos eliminados del núcleo

| Símbolo anterior | Decisión | Razón |
|---|---|---|
| `H_t` | Eliminado como argumento general | La historia relevante debe estar contenida en la definición funcional de `S_t`. |
| `θ_t` | Eliminado | Parámetros y umbrales pertenecen a `κ_t`, a `S_t` o a la implementación de `𝓘`; añadir otro bloque era redundante. |
| `Γ_t` | Eliminado | Duplicaba la función de `S_{t+1}` como configuración resultante. |
| `π` | Eliminado | La observación no pertenece al núcleo; la manifestación se deriva mediante ACCD cuando corresponda. |
| `F` y `dS/dt` | Eliminados | La variante continua era prematura y no añadía identidad al patrón. |
| `J` | Eliminado | Un segundo operador para saltos duplicaba el rol de `𝓘`. |

## 3. Regla de integración con ACCD

No usar en PIEA, con significados propios, `T`, `M`, `m`, `C`, `𝓒`, `Φ`, `φ`, `R`, `r`, `P`, `μ` u `Ω` cuando el documento forme parte de un flujo ACCD, salvo que se cite explícitamente su significado ACCD.

## 4. Control automático recomendado

Antes de publicar una versión, buscar en el paquete:

```txt
T(
T_C
Γ
H_t
θ_t
π(
dS/dt
P^{
μ^{
Ω^{
φ_n
```

Las coincidencias sólo son válidas dentro de citas históricas, explicaciones de retirada o referencias explícitas a ACCD.

