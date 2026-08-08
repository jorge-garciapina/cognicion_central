# DEUDAS DE ORGANIZACION

**Fecha de revisión:** `2026-08-08`

## 1. Referencias sin archivo independiente localizado

Los siguientes nombres aparecen en documentos activos, pero no existen como archivos independientes dentro del repositorio reorganizado:

| Referencia | Documento que la menciona | Estado |
|---|---|---|
| `COGNICION_CENTRAL_Descripcion_Exhaustiva_v0_1.pdf` | canon | ausente |
| `ENTREVISTA_COGNITIVA.md` | canon y protocolo | ausente |
| `trazabilidad_conceptual_integral_guion_traicion.md` | prompt de creación de contenido y protocolo | ausente |
| `ART_ejemplo_4_de_video.txt` | prompt de creación de contenido | ausente |
| `ART_ejemplo_2_de_video.txt` | prompt de creación de contenido | ausente |
| `ART_ejemplo_1_de_video.txt` | prompt de creación de contenido | ausente |
| `ART_modelado_matematico_de_textos.txt` | prompt de creación de contenido | localizado sólo como registro 94 dentro de `ART_incubacion-conceptual.txt`; no está materializado como archivo independiente |
| `conflicto_emocional.pdf` | prompt de creación de contenido | ausente |
| `ART_ejemplos_de_guion_de_youtube.txt` | prompt de creación de contenido | ausente |
| `modelo_analizador_intencional_atencional.md` | protocolo de títulos de YouTube v3 | localizado sólo como registro 68 dentro de `ART_construccion_conceptual.txt`; no está materializado como archivo independiente |
| `modelo_modelador_de_situacion_cognitiva.md` | protocolo de títulos de YouTube v3 | localizado sólo como registro 128 dentro de `ART_construccion_conceptual.txt`; no está materializado como archivo independiente |
| `materialize-src-from-jsonl.cjs` | prompt-artifact del compilador cognitivo | localizado sólo como registro dentro de `ART_incubacion-conceptual.txt`; no está materializado como herramienta independiente |
| `modelo_equivalencias_estructurales_segmentacion.md` | modelo de pertenencia atencional racionalizada | mencionado dentro del registro `scientific_advertising/comentarios.md` de `ART_construccion_conceptual.txt`; no está materializado como archivo independiente |
| `procesamiento_estructural_racionalizacion_verbal.md` | modelo de pertenencia atencional racionalizada | ausente como archivo independiente y no localizado por nombre en los artefactos registrados |
| `investigacion_precio_valor_racionalizacion_cuantitativa.md` | modelo de pertenencia atencional racionalizada | ausente como archivo independiente y no localizado por nombre en los artefactos registrados |
| `modelo_secciones_adaptaciones_contextuales.md` | modelo de pertenencia atencional racionalizada | mencionado dentro del registro `scientific_advertising/comentarios.md` de `ART_construccion_conceptual.txt`; no está materializado como archivo independiente |
| `modelo_seccion_microsistema_produccion.md` | modelo de pertenencia atencional racionalizada | ausente como archivo independiente y no localizado por nombre en los artefactos registrados |

La ausencia no demuestra pérdida: una referencia puede existir dentro de un artefacto serializado, en otro proyecto o en una memoria externa. Hasta comprobarlo, la IA debe declarar que no dispone del archivo independiente.

### Referencias resueltas

| Referencia | Resolución | Evento |
|---|---|---|
| `ART_estilo_de_escritura_sesion_1.txt` | incorporado en `03_aplicaciones/creacion_de_contenido/referencias_de_estilo` como `FILE-CC-055` | `ORG-EVT-0002` |
| `arquitectura-cognitiva-fractal.txt` | materializado en `01_nucleo_cognitivo/arquitecturas` como `FILE-CC-056`; conserva relación con su registro serializado en `ART_planteamientos-estructurales.txt` | `ORG-EVT-0002` |
| `principio-de-integracion-universal.txt` | materializado en `01_nucleo_cognitivo/teoria_tmc` como `FILE-CC-072`; conserva relación con su registro serializado en `ART_incubacion-conceptual.txt` | `ORG-EVT-0003` |
| `mecanismo_espejo_autorreferencial_ajuste.md` | incorporado en `03_aplicaciones/campos_atencionales/modelos/principios_psicologicos` como `FILE-CC-089` | `ORG-EVT-0005` |
| `modelo_barnum_effect_publicidad_venta.md` | incorporado en `03_aplicaciones/campos_atencionales/modelos/principios_psicologicos` como `FILE-CC-090` | `ORG-EVT-0005` |
| `modelo_propiedad_psicologica_personalizacion.md` | incorporado en `03_aplicaciones/campos_atencionales/modelos/principios_psicologicos` como `FILE-CC-093`; relacionado con la fuente primaria `FILE-CC-088` | `ORG-EVT-0005` |
| `modelo_entidades_organizadoras_atencion.md` | materializado como antecedente sustituido en `90_historial/desarrollo_conceptual/campos_atencionales` con ID `FILE-CC-098`; resuelve su localización, pero no debe tratarse como modelo vigente | `ORG-EVT-0007` |

## 2. Tensión de precedencia pendiente

`03_aplicaciones/creacion_de_contenido/prompt_central.md` contiene lenguaje heredado que presenta un núcleo de creación de contenido como identidad total del proyecto. `00_gobierno/protocolos/cognicion_central.md` lo reubica conceptualmente como aplicación subordinada a COGNICION_CENTRAL.

La reorganización física resuelve la ubicación, pero no reescribe el prompt. Queda pendiente una decisión humana sobre producir un protocolo central limpio y dejar el prompt heredado exclusivamente como configuración de la aplicación.

## 3. Archivos pendientes de decisión

- `90_historial/artefactos/ejemplo.txt` está vacío. Se conservó para evitar eliminación silenciosa.
- `00_gobierno/protocolos/cognicion_central.md` conserva la forma de una respuesta de chat que propone un bloque de integración. Conviene convertir su contenido aprobado en un protocolo autónomo en una versión futura.
- `01_nucleo_cognitivo/cnode/cNode-v4.txt` declara estado `Working Draft`; su ubicación es activa, pero no implica aprobación canónica.
- `02_metodos_y_herramientas/artefactos/company_code/artifact-writter.txt` describe un writer, pero su slot de código está vacío. Debe localizarse o implementarse y probarse antes de tratarlo como herramienta ejecutable.
- `02_metodos_y_herramientas/artefactos/company_code/artifact-description.txt` contiene un generador embebido. Queda pendiente decidir si se extrae como script autónomo después de compararlo y probarlo contra las herramientas vigentes.
- `03_aplicaciones/entendimiento_de_proyectos/# CNode cappspov-entendimiento-proy.txt` autodeclara estado estable, pero contiene un signo `+` residual y no tiene prueba de ejecución registrada; permanece `WORKING`.
- `03_aplicaciones/company_code/Proyecto COMPANY CODE — GENERACIÓN.txt` conserva marcadores `:contentReference[...]` propios de otra interfaz. Las dependencias locales están resueltas en el registro, pero conviene generar una versión limpia si el proyecto se vuelve operativo.
- El generador vigente `02_metodos_y_herramientas/artefactos/make-project-dump.cjs` produce registros `path + text`, pero todavía no antepone el manifiesto `cc_manifest`, `bootstrapPath`, hash del artefacto completo ni lista consolidada de exclusiones requerida por `PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`. Debe adaptarse y probarse antes de distribuir el artefacto central autosuficiente de un solo TXT.

## 4. Próxima revisión recomendada

1. Buscar las referencias ausentes dentro de los nueve artefactos NDJSON registrados, incluidas las cinco dependencias de `FILE-CC-081` que siguen sin materializarse.
2. Determinar cuáles deben materializarse como archivos independientes.
3. Validar y ampliar `REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: las primeras diez entradas ya están formalizadas como `A3 / PROVISIONAL`, pero falta evaluar promoción, fusión o división de identidades con pruebas adicionales.
4. Formalizar un `MAPA_DE_DEPENDENCIAS` con relaciones entre canon, núcleo, métodos, aplicaciones, fuentes y casos.
