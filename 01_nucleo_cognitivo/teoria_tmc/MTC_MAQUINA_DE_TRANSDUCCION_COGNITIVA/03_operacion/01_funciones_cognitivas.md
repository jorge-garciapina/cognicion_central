# Funciones cognitivas del adaptador

## `F00_CONTRACT_PREFLIGHT`

- **Objetivo:** comprobar que MTC está instalada y que el contrato ACCD fue recuperado.
- **Input:** runtime, artefactos disponibles y orden humana.
- **Pide a MTC:** versión, estado operativo y disponibilidad de operadores.
- **Operación propia:** resolver versiones y precedencia; detectar contratos ausentes.
- **Output:** `preflight_report`.
- **Alimenta:** control de ejecución.
- **Validación:** MTC v0.1.0 reconocible; valores ACCD recuperados; destino confirmado.
- **Dependencias:** bootstrap MTC, Grafo de Regiones ACCD.
- **Fallas:** versión incompatible, contrato no localizado, destino ambiguo.

## `F01_FORMULATE_MTC_REQUEST`

- **Objetivo:** expresar una necesidad cognitiva sin indicar manualmente cómo reconstruir MTC.
- **Input:** realización y objetivo del humano.
- **Pide a MTC:** vista `MTC_OUTPUT_PARA_ADAPTADOR` con alcance mínimo suficiente.
- **Operación propia:** declarar qué debe resultar reconstructible y qué granularidad de traza se necesita.
- **Output:** `peticion_mtc_para_construccion_conceptual`.
- **Alimenta:** interfaz MTC→adaptador.
- **Validación:** no contiene decisiones conceptuales prefabricadas ni operaciones audiovisuales.
- **Dependencias:** contrato MTC→adaptador.
- **Fallas:** petición demasiado amplia, sesgo hacia una conclusión, lista indiscriminada de operadores.

## `F02_VALIDATE_MTC_DELIVERY`

- **Objetivo:** decidir si la salida MTC es suficiente para conceptualización.
- **Input:** `mtc_output_para_adaptador`.
- **Pide a MTC:** ampliación dirigida cuando falte una capacidad ya existente.
- **Operación propia:** validar completitud de interfaz, no la pertenencia MTC de fondo.
- **Output:** `accepted`, `extension_required`, `partial` o `rejected`.
- **Alimenta:** mapa de derivación.
- **Validación:** mecanismo, invariantes y claims trazables presentes.
- **Dependencias:** `OP_VALIDATE_MEMBERSHIP`, `OP_MARK_EPISTEMIC_STATUS`.
- **Fallas:** claims sin etiqueta, cadena mágica, componentes colapsados, fuentes ausentes.

## `F03_BUILD_DERIVATION_MAP`

- **Objetivo:** crear el espacio transitorio donde se registran candidatos, preservaciones y descartes.
- **Input:** salida MTC aceptada.
- **Pide a MTC:** nada si la entrega es suficiente.
- **Operación propia:** indexar claims por mecanismo, componente, estatus y función.
- **Output:** `mapa_de_derivacion_conceptual`.
- **Alimenta:** todas las funciones siguientes y el sidecar.
- **Validación:** cada unidad conserva su `claim_id` y origen.
- **Dependencias:** trace MTC.
- **Fallas:** pérdida de referencias, mezcla de hechos e inferencias, ids duplicados.

## `F04_IDENTIFY_CONCEPTUAL_KERNEL`

- **Objetivo:** localizar lo que debe comprenderse para explicar la identidad operativa del caso.
- **Input:** mapa de derivación, mecanismos e invariantes.
- **Pide a MTC:** `OP_ABSTRACT` o explicación de un mecanismo sólo si faltan.
- **Operación propia:** clasificar claims como núcleo, mediación, condición, contraste, consecuencia o periferia.
- **Output:** `conceptual_kernel` y `mechanisms_to_preserve`.
- **Alimenta:** ideas nucleares y de puente.
- **Validación:** al retirar el núcleo deja de reconocerse el mecanismo relevante.
- **Dependencias:** invariantes MTC y objetivo humano.
- **Fallas:** confundir frecuencia con centralidad, convertir toda la ontología en núcleo.

## `F05_DECLARE_PRESERVATION_OBLIGATIONS`

- **Objetivo:** convertir invariantes y fronteras relevantes en condiciones de compresión.
- **Input:** núcleo, no-colapsos y cadenas MTC.
- **Pide a MTC:** confirmación de invariantes del caso si la salida es ambigua.
- **Operación propia:** declarar qué diferencias, secuencias y condiciones deben sobrevivir.
- **Output:** `preservation_obligations`.
- **Alimenta:** ideas contrastivas, relaciones y validación reconstructiva.
- **Validación:** incluye sólo invariantes pertinentes, no todo el núcleo universal.
- **Dependencias:** `MTC_INVARIANTS`, especialización y contratos.
- **Fallas:** sobrepreservación, pérdida de `V ≠ M`, pérdida de `EC ≠ A`.

## `F06_PROPOSITIONAL_DECOMPOSITION`

- **Objetivo:** transformar estructura seleccionada en proposiciones comprensibles.
- **Input:** núcleo, mecanismos, preservaciones y claims.
- **Pide a MTC:** nada; ésta es la primera transformación cognitiva propia del adaptador.
- **Operación propia:** crear ideas candidatas que expresen identidad, relación, operación, tesis o forma abierta controlada.
- **Output:** `candidate_ideas` con trazas.
- **Alimenta:** `formulacion_textual_de_la_idea` y `formulacion_de_la_idea`.
- **Validación:** cada proposición es autosuficiente, funcional y trazable.
- **Dependencias:** categorías de formulación ACCD.
- **Fallas:** etiquetas ontológicas sin proposición, resumen superficial, mezcla de varios mecanismos incompatibles.

## `F07_FILTER_AND_MERGE`

- **Objetivo:** eliminar ruido y fusionar equivalencias sin romper el modelo.
- **Input:** ideas candidatas.
- **Pide a MTC:** aclaración sólo si la aparente duplicación puede ser una distinción ontológica.
- **Operación propia:** descartar repetición, periferia, tautología, falta de función e inferencia no soportada; fusionar claims compatibles.
- **Output:** `selected_ideas` y `discard_log`.
- **Alimenta:** colección final y sidecar.
- **Validación:** prueba de omisión y prueba de no-colapso.
- **Dependencias:** obligaciones de preservación.
- **Fallas:** pérdida de una interfaz causal, fusión de capacidad y manifestación, descarte basado sólo en baja frecuencia.

## `F08_BUILD_IDEA_GRAPH`

- **Objetivo:** construir relaciones conceptuales entre las ideas seleccionadas.
- **Input:** ideas y estructura MTC de origen.
- **Pide a MTC:** relaciones fuente cuando la conexión estructural no esté justificada.
- **Operación propia:** determinar cómo una idea condiciona, sostiene, expande, contrasta o se deriva de otra.
- **Output:** grafo dirigido de ideas.
- **Alimenta:** `relaciones_con_otras_ideas`.
- **Validación:** toda arista tiene descripción concreta y usa categoría ACCD válida.
- **Dependencias:** tipos de relación ACCD.
- **Fallas:** copiar aristas MTC mecánicamente, ciclos semánticos vacíos, referencias inexistentes.

## `F09_ASSIGN_CONCEPTUAL_ROLES`

- **Objetivo:** determinar el papel de cada idea dentro del conjunto.
- **Input:** grafo de ideas, núcleo y preservaciones.
- **Pide a MTC:** nada.
- **Operación propia:** asignar exactamente un rol cerrado por idea.
- **Output:** `rol_conceptual`.
- **Alimenta:** clasificación global que ACCD consumirá.
- **Validación:** prueba contrafactual de rol y coherencia topológica.
- **Dependencias:** definiciones ACCD de rol.
- **Fallas:** usar rol como sinónimo de importancia, declarar todas las ideas nucleares.

## `F10_ASSIGN_RELATIVE_WEIGHTS`

- **Objetivo:** expresar importancia estructural relativa sin confundirla con certeza.
- **Input:** grafo, roles y prueba de omisión.
- **Pide a MTC:** nada.
- **Operación propia:** calcular y calibrar un escalar `0..1`.
- **Output:** `peso_relativo`.
- **Alimenta:** priorización posterior de ACCD.
- **Validación:** ranking coherente; límites válidos; independencia del estatus epistemológico.
- **Dependencias:** contrato ACCD.
- **Fallas:** normalizar suma a 1 sin necesidad, premiar longitud, penalizar hipótesis sólo por ser hipótesis.

## `F11_ASSIGN_PRESENCE_MODE`

- **Objetivo:** indicar cómo debe comparecer conceptualmente la idea sin decidir su realización audiovisual.
- **Input:** alcance de la idea, necesidad de explicitación y distribución en el mecanismo.
- **Pide a MTC:** nada.
- **Operación propia:** elegir un valor cerrado de presencia.
- **Output:** `modo_de_presencia`.
- **Alimenta:** planificación posterior de ACCD.
- **Validación:** el modo describe función conceptual, no plataforma, bloque o repetición literal.
- **Dependencias:** contrato ACCD.
- **Fallas:** usar `localizada` para elegir una escena, usar `explicita_reiterada` como hook.

## `F12_ENFORCE_EPISTEMIC_SAFETY`

- **Objetivo:** impedir que la formulación convierta inferencias en hechos.
- **Input:** ideas, claims y estatus MTC.
- **Pide a MTC:** clarificación si una etiqueta falta o se contradice.
- **Operación propia:** ajustar modalidad lingüística y registrar estatus en sidecar.
- **Output:** formulaciones epistemológicamente seguras.
- **Alimenta:** texto de la idea y trazabilidad.
- **Validación:** cada cláusula afirmativa tiene soporte compatible.
- **Dependencias:** política epistemológica MTC.
- **Fallas:** ocultar hipótesis, insertar etiquetas extra en ACCD, degradar importancia por incertidumbre.

## `F13_SERIALIZE_ACCD`

- **Objetivo:** emitir la estructura exacta consumible por ACCD.
- **Input:** ideas completas y grafo de relaciones.
- **Pide a MTC:** nada.
- **Operación propia:** serializar `construccion_conceptual` con categorías vigentes.
- **Output:** archivo Markdown con bloque YAML.
- **Alimenta:** puerto temático ACCD.
- **Validación:** esquema, cardinalidad, enum, ids y referencias.
- **Dependencias:** contrato Adaptador→ACCD.
- **Fallas:** valor legacy, campo inventado, peso fuera de rango, relación huérfana.

## `F14_RECONSTRUCTIVE_VALIDATION`

- **Objetivo:** verificar que la compresión conserva las partes relevantes de la realización MTC.
- **Input:** construcción conceptual, sidecar y salida MTC.
- **Pide a MTC:** revalidación sólo si la reconstrucción revela un hueco de origen.
- **Operación propia:** reconstruir mecanismo e invariantes desde las ideas y comparar con el alcance seleccionado.
- **Output:** `validation_report`.
- **Alimenta:** aceptación o bucle de reparación.
- **Validación:** cobertura, no-colapso, cadena, epistemología y fronteras.
- **Dependencias:** obligations y claims.
- **Fallas:** falso positivo por coincidencia de palabras, exigencia de reconstruir detalles descartables.

## `F15_EMIT_RESULT`

- **Objetivo:** entregar outputs separados y declarar estado.
- **Input:** construcción, sidecar e informe válidos.
- **Pide a MTC:** nada.
- **Operación propia:** empaquetar sin fusionar espacios lógicos.
- **Output:** `COMPLETED`, `PARTIAL` o `BLOCKED`.
- **Alimenta:** humano y ACCD.
- **Validación:** ACCD recibe sólo su puerto; persistencia sigue desactivada.
- **Dependencias:** autorización humana.
- **Fallas:** presentar propuesta como canon, omitir advertencias de salida parcial.

