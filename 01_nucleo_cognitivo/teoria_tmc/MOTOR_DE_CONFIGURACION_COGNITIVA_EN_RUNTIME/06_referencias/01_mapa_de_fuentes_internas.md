# Mapa de fuentes internas

**ID:** `MCCR-REF-SOURCES-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

Este mapa identifica la ruta responsable de cada concepto usado por MCCR y conserva su estado. Citar una ruta significa que fue localizada; no significa que sea canónica.

## Responsabilidad

Este documento es responsable de:

- inventario de fuentes y funciones
- estado/autoridad de cada familia
- rutas de recuperación por concepto

No es responsable de:

- duplicar el texto fuente
- elevar propuestas a canon
- ocultar ausencias

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| SOURCE_AUDIT | fuentes recuperadas | REQUIRED |
| PACKAGE_CLAIMS | afirmaciones MCCR | REQUIRED |
| REPOSITORY_PATHS | direcciones estables | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Identificar afirmación.
2. Asignar fuente responsable.
3. Registrar estado y versión observada.
4. Marcar inferencia/hipótesis/ausencia.
5. Actualizar el mapa si cambia una definición.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| INTERNAL_SOURCE_MAP | concepto→ruta→estado | MCCR |
| UNSOURCED_CLAIM_REPORT | afirmaciones a corregir | MCCR |

## Especificación

| Concepto | Ruta responsable | Estado observado |
|---|---|---|
| autoridad e invariantes CC | `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md` | CANONICAL 0.1.0 |
| organización | `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md` | vigente 1.9.0 |
| instalación contextual | `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt` | LIVE |
| normalización/backend/ciclo | `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/` | DEVELOPMENT; runtime no implementado |
| transformación/subgrafo | `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/` | propuesta no canónica |
| ACCD base | `03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md` | fuente local |
| ACCD unificado/video | `03_aplicaciones/sistema-de-transferencia-accd/` | sistema evolucionado |
| búsqueda estructural | `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md` | provisional |
| Registro | `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md` | LIVE; entradas provisionales |
| cApp | `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt` | paquete conceptual |

Artefactos rectores MCCR: prompt maestro en `.../NUEVO_PAQUETE/`; Artefacto A en este directorio; Artefacto B en `.../NUEVO_PAQUETE/MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0/`.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Una fuente duplicada/serializada no cuenta como corroboración independiente.

## Ejemplo operativo

La afirmación “runtime no implementado” se dirige a la ficha/manifiesto AC-HIA; la secuencia C0–C12 se etiqueta como decisión local MCCR, no se busca falsa cita MTC.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Ruta ya no existe | marcar ausencia y revisar dependientes |
| Dos versiones divergen | aplicar autoridad/versionado, no mezclar |
| Afirmación sin fuente | etiquetar inferencia o retirar |

## Relaciones y límites

Complementa `SOURCE_AUDIT.md` y alimenta el crosswalk.

## Procedencia

- [FUENTE_CC] `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md`: autoridad, invariantes y ciclo general.
- [FUENTE_CC] `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`: ubicación por función dominante y contratos de carpetas.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/MTC_MAQUINA_DE_TRANSDUCCION_COGNITIVA/cognicion_central_mtc.md`: recuperación, MTC-WORK, operadores y validación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `01_nucleo_cognitivo/registro_estructuras_cognitivas/REGISTRO_DE_ESTRUCTURAS_COGNITIVAS_v0_1_0.md`: registro semántico provisional.
- [FUENTE_CC] `01_nucleo_cognitivo/paquetes-conceptuales/nucleo-de-teoria.txt`: definición de cApp.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Cada familia nuclear tiene ruta.
- El estado se conserva.
- Las decisiones locales no se atribuyen a fuentes.
