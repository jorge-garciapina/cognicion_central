# Caso de la aspiradora

**Fixture:** `FX-VACUUM-01` · **Estado:** fixture explicativo sintético.

Prueba mecanismo, parte–todo, causalidad, alineación descendente/ascendente y riesgo léxico.

```mermaid
flowchart LR
    Motor --> Ventilador --> DiferenciaPresion["Diferencia de presión"]
    DiferenciaPresion --> Flujo["Flujo de aire"]
    Flujo --> Transporte["Transporte de partículas"]
    Transporte --> FiltroDeposito["Filtro/depósito"]
```

La palabra “succión” debe tratarse como posible compresión útil pero causalmente riesgosa.

## Ejecución completa

[CASE-MRRE-VACUUM](DOSSIER_OPERATIVO.md) parte del texto completo y produce campo, dos cortes, segmentación multiescala, cuatro subgrafos, chain tipado, pruebas de remoción, rival y esqueleto.

Recorrido: [fixture](inputs/fixture.yaml) → [dossier](DOSSIER_OPERATIVO.md) → [expected result](expected_results/expected.yaml) → [run 0.2.0](runs/run_v0_2_0.yaml) → [lecciones](lessons.md). Para repetirlo usa [MRRE-WORKBOOK](../../03_protocolos_operacionales/07_libro_de_trabajo_y_algoritmos.md).
