# Manual de operación MRRE para agentes

**ID:** `MRRE-AGENT-MANUAL`  
**Versión:** `0.2.0`  
**Propósito:** convertir el paquete en conducta ejecutable para una IA o equipo humano–IA.

## 1. Regla de uso

No “apliques MRRE” de forma implícita. Abre un run, crea artefactos identificables, ejecuta gates y entrega un resultado reconstruible. La prosa razonada puede acompañar el run, pero no sustituye sus objetos.

La solicitud puede llegar normalizada por AC-HIA conforme a [SRC-ACHIA-NORMALIZATION](../../ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/06_normalizacion_de_comandos.md), y el plan puede llegar de MCCR conforme a [SRC-MCCR-PLAN](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/01_nucleo/05_execution_plan_definicion_y_contrato.md). Si no existen, MRRE crea representaciones locales `REQUEST_ADAPTER` y `LOCAL_EXECUTION_PLAN`, claramente marcadas como adaptaciones y sin atribuirse autoridad externa.

## 2. Orden de carga

Antes de analizar el contenido, carga sólo la especificación necesaria en este orden:

1. [README-MRRE](../README.md): propósito, selector de operación e índice.
2. [MRRE-REF-NORM-01](../00_gobierno/06_norma_de_referencias_y_citacion.md): cómo citar y enlazar.
3. [MRRE-INVARIANTS](01_definicion_fronteras_e_invariantes.md): fronteras e invariantes.
4. [MRRE-ONTOLOGY](03_ontologia_minima.md): tipos que puedes emitir.
5. [MRRE-NON-COLLAPSE](05_reglas_de_no_colapso.md): separaciones que no puedes abreviar.
6. [MRRE-PROTOCOL-GENERAL](07_protocolo_general_mrre.md): P0–P13.
7. el protocolo de la operación elegida en [MRRE-PROTOCOLS](../03_protocolos_operacionales/07_libro_de_trabajo_y_algoritmos.md).
8. los schemas de los artefactos que realmente producirás.
9. especialización e integración sólo si el plan las activa.
10. el acervo de patrones después de navegar el campo, nunca antes.

## 3. Estado de trabajo obligatorio

Mantén un ledger visible con esta estructura:

```yaml
run_state:
  run_id: RUN-MRRE-...
  operation: RETROCONSTRUIR | REINSTANCIAR | COMPARAR | TRIANGULAR | VALIDAR
  phase: P0..P13
  status: NOT_STARTED | RUNNING | WAITING | PARTIAL | FAILED | COMPLETED
  purpose: "resultado que se busca"
  authority:
    source_scope: []
    allowed_transformations: []
    persistence: false
    promotion: false
  active_artifacts: []
  observations: []
  inferences: []
  hypotheses: []
  human_decisions: []
  alternatives: []
  uncertainties: []
  failures: []
  next_action: "acción concreta"
```

Cada cambio de fase registra `COMPONENT_STARTED`, `COMPONENT_OUTPUT` o `COMPONENT_FAILED`, siguiendo el modelo de run log de [SRC-MCCR-RUNLOG](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/06_trazabilidad_observabilidad_y_run_log.md) (`ADAPTADO`).

## 4. Algoritmo de ejecución

### P0 — Recibir y tipar

1. Asigna `request_id` y `run_id`.
2. Copia literalmente el propósito del solicitante; no lo reemplaces con tu interpretación.
3. Separa manifestación, materiales fuente, instrucciones, restricciones y resultado esperado.
4. Valida la forma con [MRRE-SCHEMA-MANIFESTATION](../02_contratos_y_schemas/manifestation_input.schema.yaml).
5. Si hay varias operaciones, crea un orden y dependencias; no las ejecutes como una sola etiqueta.

**Salida:** `CASE_SPEC` + `MANIFESTATION_INPUT`.  
**Stop:** portador ausente o propósito contradictorio.

### P1 — Delimitar autoridad y alcance

1. Lista fuentes autorizadas y fuentes prohibidas.
2. Declara qué inferencias son aceptables: observacional, reconstructiva, abductiva o receptoral.
3. Define si se permite comparar, recuperar, generar, persistir o promover.
4. Convierte toda ambigüedad material en gate; no la resuelvas por conveniencia.

**Salida:** `AUTHORITY_SCOPE`.  
**Stop:** `HG-SOURCE`, `HG-SCOPE`, `HG-BINDING` o `HG-PROMOTE`.

### P2 — Registrar portadores y fuentes

1. Conserva texto original o enlace relativo recuperable.
2. Registra modalidad, versión, fecha y contexto de obtención.
3. Asigna locators reversibles: líneas, párrafos, spans, frames, timecodes o claves.
4. Distingue afirmación de fuente, observación del portador e interpretación MRRE.

**Salida:** `MANIFESTATION_RECORD` con `source_bindings`.

### P3 — Navegar antes del matching

Ejecuta [MRRE-PROC-NAVIGATE](../03_protocolos_operacionales/01_navegacion_estructural.md). Construye identidad, frontera, capas, contextos, conflictos y regiones ausentes. No abras todavía el catálogo de patrones. Esta separación evita el sesgo de recuperación descrito por `PAT-COG-076/105` en [SRC-CAT-MRRE-02](../05_acervo_estructural/CATALOGO_COMPLEMENTARIO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_v0_2_0.md) y [SRC-CAT-MRRE-03](../05_acervo_estructural/CATALOGO_DE_PATRONES_DE_DISENO_COGNITIVO_REUTILIZABLES_EXTENSION_v0_3_0.md).

**Salida:** `STRUCTURAL_FIELD`, cero o más `ORIENTED_CUT`, `SEARCH_SIGNATURE`.

### P4 — Segmentar en varias escalas

1. Crea unidades reversibles desde el portador.
2. Añade jerarquía, solapamiento, orden y pertenencia.
3. Abre cada unidad como mNode cuando su interior cambie la función externa, adaptando [SRC-MAANC-COMPOSITION](../../../../04_conocimiento_y_contexto/memoria_conceptual/construccion_conceptual/modelo-composicion-cognitiva.md).
4. Conserva negación, modalidad, atribución y conectores; no segmentes sólo por puntuación.
5. Prueba que cada span puede regresar al portador.

**Salida:** `SEGMENTATION_GRAPH`.

### P5 — Reconstruir subgrafos

Para cada unidad focal:

1. identifica nodos relacionados antes, durante, después y presupuestos;
2. tipa edges y separa `OBSERVED`, `SOURCE_ASSERTED`, `INFERRED` y `HYPOTHETICAL`;
3. declara función local, efecto y contexto;
4. añade alternativa material si más de una relación explica la superficie;
5. marca qué evidencia falsaría la hipótesis;
6. valida con [MRRE-SCHEMA-SUBGRAPH](../02_contratos_y_schemas/reconstructed_subgraph.schema.yaml).

**Salida:** conjunto de `RECONSTRUCTED_SUBGRAPH`.

### P6 — Detectar chains y arquitecturas

1. Busca rutas que conecten estados, mediaciones y efectos.
2. Une rutas sólo cuando sus IDs, tiempos, contextos y tipos son compatibles.
3. Identifica bifurcaciones, ciclos, feedback y rutas redundantes.
4. Ejecuta remoción contrafactual de cada edge crítico.
5. Agrupa chains en una o más arquitecturas candidatas.
6. Explica qué pierde el resultado si se elimina cada chain.

Usa el algoritmo reproducible de [MRRE-WORKBOOK § Algoritmo D](../03_protocolos_operacionales/07_libro_de_trabajo_y_algoritmos.md#algoritmo-d-detección-y-prueba-de-chains).

**Salida:** `CHAIN_SET` + `CANDIDATE_ARCHITECTURE_SET`.

### P7 — Abstraer esqueletos

1. Sustituye entidades concretas por roles funcionales.
2. Conserva topología, cardinalidad, restricciones, orden necesario y condiciones.
3. Separa invariantes de rasgos frecuentes o decorativos.
4. Declara dominio de variación de cada rol.
5. Construye al menos un contraejemplo que parezca similar pero viole el esqueleto.
6. Valida con [MRRE-SCHEMA-SKELETON](../02_contratos_y_schemas/structural_skeleton.schema.yaml).

**Salida:** `STRUCTURAL_SKELETON` con procedencia.

### P8 — Comparar y falsar

1. compara candidatas en el mismo nivel;
2. cuenta evidencia discriminante, no sólo evidencia compatible;
3. prueba parsimonia, cobertura, huecos, contradicciones y predicciones;
4. conserva candidatas rivales si la evidencia no decide;
5. baja confianza si una fuente crítica no es independiente.

**Salida:** `COMPARISON` + `FALSIFICATION_REPORT`.

### P9–P11 — Reinstanciar cuando aplique

Esta macrofase ejecuta P9 (decidir ruta), P10 (evaluar y bindear) y P11 (componer, producir diff y reingresar).

1. navega el dominio nuevo antes de recuperar;
2. recupera candidatos mediante firma estructural;
3. prueba equivalencia funcional, relacional, topológica y contextual;
4. solicita o verifica autorización de binding;
5. deja `UNBOUND_GAP` en vez de inventar;
6. compone, produce diff y reingresa la instancia por P2–P8;
7. rechaza una instancia que sólo conserve vocabulario o secuencia superficial.

**Salidas:** `REINSTANTIATION_BINDING`, `REINSTANTIATION`, `STRUCTURE_PRESERVATION_DIFF`.

### P12–P13 — Validar, entregar y persistir

1. verifica schemas, IDs, enlaces y trazas;
2. valida contra el propósito y criterios del caso;
3. ejecuta pruebas negativas y de remoción;
4. explica alcance de todo `PASS`, `PARTIAL` o `FAIL`;
5. envuelve el resultado con [MRRE-SCHEMA-RESULT](../02_contratos_y_schemas/mrre_result.schema.yaml);
6. persiste sólo si la política lo permite;
7. nunca conviertas persistencia en promoción.

La separación entre ejecución y autoridad adopta [SRC-MCCR-AUTH](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/07_autoridad_permisos_validadores_y_gates.md).

## 5. Cómo escribir observaciones e inferencias

| Estatus | Forma correcta | Forma incorrecta |
|---|---|---|
| `OBSERVATION` | “el span S3 contiene una comparación explícita” | “el autor quiere desacreditar” |
| `SOURCE_ASSERTION` | “la fuente F1 afirma X en P4” | “X es verdadero” |
| `RECONSTRUCTION_CLOSE` | “S2 conecta nombramiento y rol mediante `APPOINTS_TO`” | “ésta es la única estructura” |
| `STRUCTURAL_INFERENCE` | “la ruta C1 funciona como chain de cambio institucional” | “se probó causalidad histórica” |
| `DESIGN_HYPOTHESIS` | “el productor pudo orientar el corte a perfil” | “ésa fue su intención” |
| `RECEIVER_EVIDENCE` | “la prueba PIEA observó transición E0→E1” | “el texto siempre produce ese efecto” |

## 6. Política de confianza

No inventes porcentajes. Una confianza cuantitativa requiere método, conjunto de comparación y calibración. Si no existen, usa clases:

```text
SUPPORTED_STRONG   múltiples bindings independientes + falsadores superados
SUPPORTED_LOCAL    soporte suficiente dentro del alcance declarado
AMBIGUOUS          candidatas materiales no discriminadas
WEAK               inferencia depende de supuestos no comprobados
UNSUPPORTED        falta evidencia o contradicción decisiva
```

## 7. Selección de patrones sin secuestrar el análisis

Después de obtener `SEARCH_SIGNATURE`:

1. consulta [MRRE-PATTERN-INDEX](../05_acervo_estructural/01_indice_federado_de_patrones_mrre.md);
2. recupera por problema, fuerzas, solución e invariantes;
3. registra por qué cada patrón fue recuperado;
4. prueba compatibilidad contractual;
5. conserva “sin patrón adecuado” como resultado válido;
6. si emerge una estructura nueva, regístrala como candidata, no la fuerces al catálogo.

## 8. Entrega legible por otra IA

El orden de entrega recomendado es:

1. dictamen y estado;
2. alcance/fuentes;
3. campo y cortes;
4. segmentación;
5. subgrafos;
6. chains y arquitectura;
7. esqueleto;
8. bindings/reinstanciación si aplican;
9. alternativas e incertidumbre;
10. pruebas y fallos;
11. trace de citas `[ID](ruta)`;
12. siguiente acción o gate.

Una IA receptora debe poder reconstruir cada afirmación sin acceder a razonamiento privado. Sólo necesita artefactos, source bindings, decisiones y reglas de derivación explícitas.

## 9. Recuperación ante fallos

| Fallo | Recuperación permitida | Prohibición |
|---|---|---|
| fuente ausente | `WAITING_SOURCE` + contrato de reanudación | inventar contenido/ruta |
| segmentación ambigua | conservar variantes y probar efectos | elegir por fluidez |
| chain incompleto | `PARTIAL` + edge faltante | saltar directamente al efecto |
| patrón no encontrado | crear candidata local | usar match léxico débil |
| binding crítico vacío | solicitar fuente o reducir alcance | rellenar con material ficticio |
| validador no disponible | `NOT_RUN` + impacto | reportar `PASS` |
| conflicto entre fuentes | preservar ramas y contexto | promediar contradicción |

El catálogo completo de fallos está en [MRRE-FAILURES](../04_runtime/04_manejo_de_fallas_y_recuperacion.md), adaptado de [SRC-MCCR-FAILURES](../../MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME/03_contratos/05_no_feasible_plan_fallos_y_degradacion.md).

## 10. Ejecuciones modelo

- [CASE-MRRE-REUTERS](../09_casos_y_ejemplos/reuters/DOSSIER_OPERATIVO.md): reconstrucción, comparación y reinstanciación textual.
- [CASE-MRRE-COLLAR](../09_casos_y_ejemplos/caso_del_collar/DOSSIER_OPERATIVO.md): chain cognitivo-social con integración MTC.
- [CASE-MRRE-VACUUM](../09_casos_y_ejemplos/aspiradora/DOSSIER_OPERATIVO.md): mecanismo y contrafactual de remoción.
- [CASE-MRRE-MULTIMODAL](../09_casos_y_ejemplos/triangulacion_multimodal/DOSSIER_OPERATIVO.md): triangulación por modalidad.
- [CASE-MRRE-BRIDGE](../09_casos_y_ejemplos/puente_del_valle/DOSSIER_OPERATIVO.md): bloqueo correcto por fuente ausente.

## 11. Checklist de cierre

- [ ] ¿El portador o referencia original es recuperable?
- [ ] ¿Cada unidad vuelve a un locator?
- [ ] ¿Los edges tienen tipo, dirección, evidencia y estatus?
- [ ] ¿Los chains tienen condiciones y prueba de remoción?
- [ ] ¿Hay al menos una alternativa o razón de unicidad?
- [ ] ¿El esqueleto distingue invariantes y dominio de variación?
- [ ] ¿Retrieval, equivalencia y binding permanecen separados?
- [ ] ¿La nueva instancia pasó por diff y reingreso?
- [ ] ¿Cada fuente usa `[ID](ruta-relativa)`?
- [ ] ¿El resultado declara límites, fallos y siguiente acción?
- [ ] ¿Una persona distinta puede reproducir la derivación?

Si alguna respuesta es “no”, el run no es `COMPLETED`; usa `PARTIAL`, `WAITING` o `FAILED` con precisión.
