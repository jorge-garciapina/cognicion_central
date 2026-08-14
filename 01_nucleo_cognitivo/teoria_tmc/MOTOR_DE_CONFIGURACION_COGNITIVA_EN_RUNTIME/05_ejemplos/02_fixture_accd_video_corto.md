# Fixture ACCD: video corto

**ID:** `MCCR-FIX-ACCD-VIDEO-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba selección de una región ACCD de video corto, efecto de valores y adaptación a capacidades actuales.

**Oráculo principal:** Todos los valores activos afectan cabecera, macroestructura, bloque o justificación, y la manifestación pertenece al codominio.

## Comando humano de origen

> “Crea un borrador de guion para un video corto de TikTok que explique MCCR con comprensión rápida, registro analítico y apertura de serie. No publiques ni persistas.”

## Estructuras de COGNICION_CENTRAL activadas

- AC-HIA
- MCCR
- ACCD instancia regional video_corto
- protocolo videos cortos
- manifestación codominial compuesta

## Estado y condiciones iniciales

Archivos ACCD de video accesibles; LLM textual disponible; generación visual marcada `UNKNOWN` y no indispensable porque se pide borrador de guion. Salida revisable, no publicación.

## Transformación paso a paso

1. Normalizar el comando y fijar no publicación/no persistencia.
2. C3 recuperar región, protocolo y codominio video_corto.
3. C4 compilar pertenencia, valores activos y efecto obligatorio.
4. C5 excluir producción/publicación y recursos no disponibles.
5. C6 generar plan de guion con marcadores visuales opcionales.
6. C7 validar valores dentro de región.
7. C8 evaluar fidelidad y costo.
8. C10 materializar bloques y validators.
9. Host produce borrador; ACCD valida efecto y codominio.

## Salida intermedia esperada

```yaml
active_values:
  formulacion: crear_guion_video_TikTok
  efecto: comprension_rapida
  registro: analitico
  alcance: apertura_de_serie
plan_result: DRAFT_SCRIPT_WITH_OPTIONAL_VISUAL_CUES
```

## Salida final esperada

Borrador de bloques: apertura que define el problema, desarrollo que muestra posibles→disponibles→activos y remate que distingue plan de ejecución. Cada bloque registra qué valores ACCD realiza. Estado `REVIEWABLE_NOT_PUBLISHED`.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Selected⊆Allowed | PASS según instancia regional |
| Efecto de valores | PASS o excepción explícita |
| Codominio | estructura coincide con manifestación esperada |
| Autoridad | sin publicación/persistencia |

## Por qué demuestra el concepto

Demuestra que MCCR configura según dominio y host: no exige visuales para un borrador textual, pero tampoco los finge.

## Variantes negativas

- Copiar valores sólo en cabecera falla efecto.
- Publicar falla autoridad.
- Generar un artículo en lugar de guion falla codominio.

## Procedencia

- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/protocolo-videos-cortos.md`: realización video corto y efecto de valores.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/04_backend_cognitivo.md`: backend, componentes y planificación.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
