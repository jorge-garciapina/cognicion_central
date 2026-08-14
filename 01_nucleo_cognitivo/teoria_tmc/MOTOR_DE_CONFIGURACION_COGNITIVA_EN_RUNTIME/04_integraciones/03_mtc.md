# Integración con MTC

**ID:** `MCCR-INT-MTC-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

MTC aporta modelos y operaciones de transformación/transducción, subgrafos de trabajo, estado y validación. MCCR decide si y cómo esas capacidades participan en un plan situado.

## Responsabilidad

Este documento es responsable de:

- adaptación MTC-WORK a nodos/cadenas MCCR
- mapeo de puertos y validadores
- separación entre pipeline MTC y C0–C12

No es responsable de:

- renombrar C0–C12 como etapas MTC
- hacer que MTC seleccione todo el plan del host
- confundir transformación con manifestación final

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| MTC_REGION/OPERATORS | vecindades y operaciones | REQUIRED |
| MTC-WORK | subgrafo mínimo de transformación | REQUIRED |
| MCCR_REQUEST | objetivo situado | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Recuperar región/operadores pertinentes.
2. Construir o validar `MTC-WORK` según MTC.
3. Proyectar entradas, salidas, invariantes y validadores como puertos MCCR.
4. Combinar con otros componentes sólo mediante mediadores explícitos.
5. Conservar traza y estados de MTC dentro del plan.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| MTC_COMPONENT_VIEW | roles y puertos | MCCR |
| MTC_CHAIN_FRAGMENT | fragmento insertable en plan | MCCR |

## Especificación

Correspondencia prudente:

```text
MTC-WORK → candidato a subgrafo activo de transformación
operadores MTC → pasos/componentes con contratos
estado cognitivo ponderado → estado interno del fragmento
capacidad/contexto/manifestación → condiciones de binding y salida
feedback/validación → eventos y validators del fragmento
```

`[INFERENCIA]` La secuencia local C0–C12 organiza la selección/configuración del plan; no es una reproducción del pipeline MTC. MTC mantiene identidad y versión propias.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Transformación y transducción no se colapsan.
- El feedback MTC no se convierte en verdad.

## Ejemplo operativo

MTC transforma un tema en construcción conceptual; el adaptador MTC→ACCD entrega esa construcción como puerto temático. ACCD, no MTC, realiza el video.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Operador sin contrato de salida | no acoplar |
| MTC-WORK excede alcance | reconstruir corte mínimo |
| Validador MTC falla | detener fragmento y propagar evento |

## Relaciones y límites

MTC es fuente no canónica relacionada; MCCR la consume con procedencia visible y sin promoción.

## Procedencia

- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/13_pipeline_y_maquina_de_estados.md`: pipeline y estado.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- C0–C12 no se atribuye a MTC.
- Puertos/estado se preservan.
- La salida puede acoplarse a ACCD.
