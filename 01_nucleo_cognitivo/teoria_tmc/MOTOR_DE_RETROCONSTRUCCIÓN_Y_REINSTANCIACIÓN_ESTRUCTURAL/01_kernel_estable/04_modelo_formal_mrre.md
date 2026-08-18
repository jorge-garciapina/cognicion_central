# Modelo formal MRRE

## Conjuntos

- `M`: manifestaciones observables.
- `F`: campos estructurales con frontera y procedencia.
- `C(F,e)`: cortes orientados de `F` bajo `EXPECTED_RESULT e`.
- `SG`: subgrafos de efecto reconstruidos.
- `Â`: arquitecturas candidatas, no verdades históricas.
- `Σ`: esqueletos estructurales.
- `D_n`: materiales de un dominio nuevo.
- `B`: bindings contractuales.
- `I`: reinstanciaciones.
- `E`: evidencia y estados epistemológicos.
- `T`: trazas bidireccionales.

## Transformaciones nucleares

```text
ρ : (M, F?, Q, E) → P(Â × Σ × T)
β : (Σ, D_n, Q, E) → P(B × T)
ι : (Σ, B, Q) → I
δ : (Σ, I) → STRUCTURE_PRESERVATION_DIFF
ν : (artefacto, criterio, evidencia) → VALIDATION_RESULT
```

`ρ` devuelve un conjunto potencia porque pueden sobrevivir varias arquitecturas. `F?` expresa que, sin fuentes, sólo puede reconstruirse un campo mínimo compatible.

```text
M → Â → Σ
Σ + D_n → B → I
MANIFESTACIÓN → SEGMENTACIÓN → SUBGRAFOS → ARQUITECTURA → ESQUELETO
G_P → G_R → G_A → G_U
```

La última cadena no implica identidad ni causalidad automática entre redes.

## Subgrafo de efecto

```text
SGE = (V, R, v_f, D, S_in, S_out?, τ, K, φ, ε)
```

donde `V` son nodos, `R` aristas tipadas, `v_f` foco, `D` dependencias, `S_in/S_out?` estados de entrada/salida proyectada, `τ` posición/trayectoria, `K` contexto, `φ` hipótesis de función/efecto y `ε` evidencia/estatus.

La emergencia permite `effect(SG) ≠ Σ effect(v_i)`; orden y vecindario son parte de la estructura.

## Preservación

Para esqueleto `Σ=(R_s,E_s,I_s,V_s,K_s)` e instancia `I`, el diff clasifica cada elemento como:

```text
PRESERVED | MODIFIED_ALLOWED | LOST | ADDED_JUSTIFIED |
UNBOUND_GAP | FORBIDDEN_INVENTION | NOT_APPLICABLE
```

La aceptación exige que invariantes críticos no estén `LOST` y que toda adición tenga regla/evidencia. Un score agregado nunca sobreescribe una ruptura dura.

## Certeza

`confidence` no sustituye `epistemic_status`. La confianza se interpreta sólo dentro de método, capa, corpus y calibración declarados. Una observación de baja calidad y una hipótesis de alta plausibilidad siguen siendo clases distintas.

## Separación de grafos runtime y cognitivos

`G_possible → G_available(t) → G_active(Q_t) → Π_t` de MCCR selecciona capacidades de ejecución. No es `G_D/G_P/G_R/G_A/G_U`. Los schemas y traces deben tipar `graph_kind` para impedir el colapso.

## Traducción a ejecución

| Símbolo | Artefacto | Productor | Prueba |
|---|---|---|---|
| `M` | `MANIFESTATION_RECORD` | ingestión | portador/locator recuperable |
| `F,C` | `STRUCTURAL_FIELD_AND_CUT` | field/cut engine | frontera y reversibilidad |
| `SG` | `RECONSTRUCTED_SUBGRAPH_SET` | reconstructor | edges con evidencia |
| `Â` | `CANDIDATE_ARCHITECTURE_SET` | integración | alternativa/falsador |
| `Σ` | `STRUCTURAL_SKELETON` | inferer | variación/contraejemplo |
| `B` | `REINSTANTIATION_BINDING` | selector | equivalencia + autoridad |
| `I,δ` | instancia + diff | engine | reingreso |
| `E,T` | ledger + trace | transversales | consultas bidireccionales |

La potencia `P(Â × Σ × T)` se materializa conservando arrays de alternativas; elegir una candidata exige criterio discriminante. No existe una función total cuando falta evidencia: el resultado puede ser `PARTIAL` o `WAITING`.

El grafo runtime se adopta de [SRC-MCCR-GRAPHS](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/06_grafos_possible_available_active.md). Una realización concreta del diff puede verse en [CASE-MRRE-REUTERS](../09_casos_y_ejemplos/reuters/DOSSIER_OPERATIVO.md).
