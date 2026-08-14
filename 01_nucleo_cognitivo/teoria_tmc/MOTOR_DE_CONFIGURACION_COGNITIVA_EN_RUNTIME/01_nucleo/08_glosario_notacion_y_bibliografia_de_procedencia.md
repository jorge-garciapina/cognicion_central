# Glosario, notación y bibliografía de procedencia

**ID:** `MCCR-CORE-GLOSS-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Este documento estabiliza el vocabulario local de MCCR y evita que símbolos o nombres candidatos se atribuyan al canon.

## Responsabilidad

Este documento es responsable de:

- definiciones compactas de términos nucleares
- notación explicada símbolo por símbolo
- regla de procedencia

No es responsable de:

- sustituir el Registro semántico
- inventar etimologías o fuentes externas
- dar precisión matemática no demostrada

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| LEXICON_REGISTER | términos auditados | REQUIRED |
| SOURCE_AUDIT | rutas y estados | REQUIRED |
| PACKAGE_DOCUMENTS | usos locales | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Buscar primero el término en fuentes CC.
2. Conservar su definición y estado.
3. Si es local, marcar `MCCR_LOCAL`.
4. Introducir concepto, relación CC, ejemplo, notación y símbolos en ese orden.
5. Abrir decisión ante conflicto material.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| CONTROLLED_VOCABULARY | términos y no equivalencias | MCCR |
| PROVENANCE_BIBLIOGRAPHY | rutas responsables | MCCR |

## Especificación

Definiciones nucleares:

- **MCCR:** servicio candidato de configuración situada.
- **configuración operacional:** asignación de roles, componentes, bindings, orden y control.
- **EXECUTION_PLAN:** configuración contractualizada y prevalidada.
- **subgrafo activo:** corte mínimo seleccionado del grafo disponible.
- **runtime:** capacidades efectivamente expuestas por el host.
- **fixture:** caso reproducible con entradas, pasos, salidas y oráculos.
- **factible:** satisface todas las restricciones duras.
- **preferido:** plan factible favorecido por objetivos blandos declarados.

Notación local:

```text
G_possible → G_available(t) → G_active(Q_t) → Π_t
```

`t` es el snapshot situado; `Q_t` la solicitud estructurada; `Π_t` una instancia de plan. La flecha significa reducción/materialización, no una función matemática demostrada.

Etiquetas: `[FUENTE_CC]`, `[DECISION_HUMANA]`, `[INFERENCIA]`, `[HIPOTESIS]`, `[AUSENCIA]`.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Todo término local se identifica como tal.
- Una ruta sólo se cita si fue localizada.

## Ejemplo operativo

Primero se explica que un generador visual puede existir pero no estar disponible; después se introduce `G_possible` y `G_available(t)`. No se abre con símbolos sin referente.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Término con sentidos incompatibles | no fusionar; registrar alias o decisión |
| Fuente no localizada | etiquetar `[AUSENCIA]` |
| Símbolo sin necesidad operativa | omitirlo |

## Relaciones y límites

Amplía `LEXICON_REGISTER.md`; `06_referencias/01_mapa_de_fuentes_internas.md` conserva la bibliografía detallada.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/03_contratos/01_contratos_de_intercambio.md`: EXECUTION_REQUEST y EXECUTION_PLAN.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Se definen los seis términos exigidos.
- La notación sigue la secuencia pedagógica.
- Las etiquetas epistemológicas son utilizables.
