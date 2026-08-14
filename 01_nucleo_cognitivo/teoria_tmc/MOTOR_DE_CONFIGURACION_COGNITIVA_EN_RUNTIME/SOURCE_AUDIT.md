# Auditoría de fuentes para MCCR

## Identidad


```yaml
audit_id: MCCR-SOURCE-AUDIT-001
date: 2026-08-14
scope: repositorio COGNICION_CENTRAL y dos artefactos MCCR
result: SUFFICIENT_FOR_CANDIDATE_BUILD
canonical_integration_authorized: false
```

## Etiquetas epistemológicas

- `[FUENTE_CC]`: afirmación recuperada de un archivo localizado del repositorio.
- `[DECISION_HUMANA]`: requisito o decisión expresamente conservado por el prompt rector o el Artefacto B.
- `[INFERENCIA]`: solución de diseño derivada de fuentes sin atribuirla a ellas.
- `[HIPOTESIS]`: relación plausible que requiere prueba o decisión.
- `[AUSENCIA]`: fuente, capacidad o formalización buscada que no fue localizada.

## Matriz de fuentes rectoras

| Grupo | Ruta principal | Estado observado | Uso autorizado en MCCR |
|---|---|---|---|
| Gobierno | `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md` | Canónico, v0.1.0 | Autoridad, invariantes y ciclo general |
| Organización | `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md` | Política vigente, ORG-CC 1.9.0 | Función dominante, ubicación y contratos README |
| Instalación | `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt` | Protocolo `LIVE` | Espacios lógicos, recuperación mínima, permisos y no persistencia silenciosa |
| AC-HIA | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/` | Paquete `DEVELOPMENT`; especificado, no implementado | Entrada normalizada, backend, contratos, validadores y ciclo |
| MTC | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/` | Propuesta no canónica | Subgrafos de trabajo, pipeline, estado, feedback, composición y validación |
| ACCD base | `03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md` | Fuente de aplicación | Separación construcción/protocolo/codominio/manifestación |
| ACCD unificado | `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md` | Modelo evolucionado | Grafo de regiones, instancia regional/contextual, adaptador y manifestación |
| ACCD video | `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/` | Realización detallada | Fixture y regla de efecto de valores seleccionados |
| Búsqueda Cognitiva | `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md` | `PROVISIONAL / WORKING DRAFT` | Recuperación estructural trazable y sólo lectura por defecto |
| Registro | `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md` | `LIVE`; entradas `PROVISIONAL` | Catálogo semántico de candidatos y procedencia |
| cApp | `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt` | Paquete conceptual | Aplicación compuesta orientada a resultado reproducible |
| cApp ejemplo | `03_aplicaciones/entendimiento_de_proyectos/# CNode cappspov-entendimiento-proy.txt` | Ejemplo local `stable`, no canon global | Fixture de FSM, contratos, validadores y emisión |

## Fuentes AC-HIA recuperadas

Se leyeron como mínimo la ficha, autoridad/versionado, manifiesto, definición/límites, topología, invariantes, configuración, modelo de comandos, estado, frontend, backend, ciclo, normalización, intercambio y validadores. Las rutas responsables son:

- `.../ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`;
- `.../02_modelo_operativo/05_ciclo_operativo.md`;
- `.../02_modelo_operativo/06_normalizacion_de_comandos.md`;
- `.../03_contratos/01_contratos_de_intercambio.md`;
- `.../03_contratos/02_validadores.md`.

`[FUENTE_CC]` El backend ya incluye selección de estructuras, resolución de dependencias, routing de capacidades, planificación, compilación, clasificación, validación, trazabilidad y persistencia coordinada. Por ello MCCR no redefine el backend: especializa la construcción y selección de configuraciones dentro de su fase de planificación.

## Fuentes MTC recuperadas

Se localizaron núcleo, ontología, invariantes, transformación, transducción, estado ponderado, pipeline, capacidad/contexto/manifestación, feedback, composición, contratos, instanciación, pertenencia e integraciones. También se revisó `cognicion_central_mtc.md` para los operadores de recuperación y construcción de `MTC-WORK`.

`[INFERENCIA]` El pipeline `C0–C12` de MCCR no se atribuye a MTC: es una descomposición local que reutiliza sus principios de subgrafo de trabajo, transformación, estado, feedback y validación.

## Fuentes ACCD recuperadas

`[FUENTE_CC]` La cadena unificada conservada es:


```text
modelo_base_de_regiones
→ grafo_de_regiones
→ instancia_regional
→ instancia_contextual
→ adaptador/protocolo
→ manifestación_codominial ∈ codominio
```

La instancia contextual selecciona valores dentro de una región habilitada; una extensión fuera de región debe ser explícita. En video corto, ningún valor activo puede quedar sin efecto salvo desactivación, incompatibilidad o subordinación explícita. MCCR usa estas reglas como restricciones del fixture, no como definición universal de todo plan.

## Hallazgos negativos y límites

1. `[AUSENCIA]` No se localizó un paquete independiente del Orquestador; el canon lo marca pendiente.
2. `[AUSENCIA]` AC-HIA declara runtime y adaptadores de host `NOT_IMPLEMENTED`.
3. `[AUSENCIA]` No se localizó una fuente externa identificable y estable para la “superficie kill-web”; sólo existe el requisito histórico del Artefacto B.
4. `[HIPOTESIS]` No hay fuente suficiente para afirmar equivalencia entre `EXECUTION_PLAN` e `IDENTITY_SELECTION`.
5. `[DECISION_HUMANA]` Los nombres MCCR, `Q_t`, `Π`, `C0–C12` y los estados del plan son vocabulario candidato que debe permanecer local hasta aprobación.
6. `[AUSENCIA]` No existe autorización para persistir cambios en canon, Prompt Central, Registro o README raíz.

## Conclusión

Las fuentes son suficientes para producir un paquete conceptual candidato completo y fixtures normativos. No son suficientes para declarar implementación ejecutable, integración canónica, Orquestador disponible ni validación empírica de algoritmos avanzados. Esas limitaciones se convierten en contratos explícitos y decisiones abiertas, no en contenido inventado.

## Preservación posterior al build

El Artefacto A original fue preservado sin sustitución conceptual en `BUILD_INPUT_ARTIFACT_A_GUIDES_v0_1_0.txt`. `ART_MOTOR_DE_CONFIGURACION_COGNITIVA_EN_RUNTIME.txt` y `project-dump.jsonl` son ahora fotografías NDJSON del candidato final y sus reportes.
