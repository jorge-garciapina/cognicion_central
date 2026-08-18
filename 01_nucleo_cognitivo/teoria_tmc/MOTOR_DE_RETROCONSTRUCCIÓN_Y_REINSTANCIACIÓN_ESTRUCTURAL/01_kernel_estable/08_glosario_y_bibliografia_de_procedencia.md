# Glosario y bibliografía de procedencia

## Glosario operativo

| Término MRRE | Definición | Sinónimo/colapso prohibido | Fuente/adaptación | Responsable |
|---|---|---|---|---|
| `carrier` | portador recuperable de la manifestación | interpretación | `PAT-COG-001/028` | manifestation schema |
| `field` | región relacional con frontera y procedencia | corpus amorfo | `074/075`; ACCD regions como ejemplo | field builder |
| `cut` | vista orientada y reversible del campo | instancia contextual | `015/024/025` | cut engine |
| `mNode` | unidad encapsulable que puede abrirse | frase autosuficiente | MAANC composición | segmenter/subgraph |
| `subgraph_of_effect` | configuración mínima que explica función/efecto | oración | `012/026`; antecedente MRRE | reconstructor |
| `candidate_architecture` | hipótesis integrada y refutable | intención real | `065/073/080` | skeleton inferer |
| `structural_skeleton` | roles/relaciones/invariantes transferibles | plantilla editorial | `067/068` | skeleton inferer |
| `retrieval` | recuperación de candidato | equivalencia | `076/077` | selector |
| `equivalence` | cumplimiento funcional-relacional acotado | semejanza | `078` | selector/validator |
| `binding` | asignación autorizada a rol contractual | match | `077/079/104` | selector |
| `reinstantiation` | población y prueba de un esqueleto | copia | `076…082` | engine |
| `reingreso` | volver a analizar la instancia para probar preservación | autoaprobación | `082` | V&V |
| `trace_graph` | derivación técnica forward/backward | autoridad epistémica | `028/072/104` | trace component |
| `epistemic_ledger` | clase, evidencia, confianza y promoción | run log | `073/097/108/115` | ledger component |
| `expected_result` | orientación y prueba del resultado | producto literal | `025`; AC-HIA | cut/validation |

## Bibliografía de procedencia

Las rutas completas y transformaciones se mantienen en `00_gobierno/04_fuentes_genealogia_y_dependencias.md` y `05_acervo_estructural/05_mapa_de_procedencia_estructural.md`. Las familias principales son:

- catálogos federados `PAT-COG-001…130`;
- Kernel de Ingeniería 1.1 (`SRC-KI-11`);
- Construcción Conceptual/MAANC, sus mNodes y 83 archivos macro (`SRC-MAANC-*`);
- AC-HIA y MCCR para interacción/configuración;
- MTC y PIEA para transformaciones/recepción sin apropiación;
- ACCD para realización codominial opcional;
- Consciencia y Soberanía para gobierno, redes y no-colapsos.

## Fuentes no materializadas

Las fuentes adjuntas listadas como `PATH_PENDING_CONFIRMATION` no adquieren ruta por inferencia. Pueden mencionarse como antecedente no recuperable, pero no soportar una afirmación fuerte hasta ser localizadas y registradas.

## Referencias navegables

La bibliografía científica vigente es [MRRE-BIB-CC](../00_gobierno/07_bibliografia_cognicion_central.md), y la sintaxis obligatoria es [MRRE-REF-NORM-01](../00_gobierno/06_norma_de_referencias_y_citacion.md). Entre las definiciones principales:

- `mNode` adapta [SRC-MAANC-COMPOSITION](../../../../04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/modelo-composicion-cognitiva.md);
- `capacidad/contexto/manifestación` adopta [SRC-MTC-MANIFESTATION](../../MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/10_mecanismo/14_capacidad_contexto_manifestacion.md);
- plan/runtime adopta [SRC-MCCR-PLAN](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/05_execution_plan_definicion_y_contrato.md);
- autoridad/gates adopta [SRC-MCCR-AUTH](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/07_autoridad_permisos_validadores_y_gates.md);
- patrones federados se resuelven desde [MRRE-PATTERN-INDEX](../05_acervo_estructural/01_indice_federado_de_patrones_mrre.md).

Una definición nueva debe añadir cita, transformación, contraejemplo y responsable antes de usarse como término normativo.
