# Superficie de descubrimiento “kill-web”

**ID:** `MCCR-FIX-DISCOVERY-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Modela, con cautela, una superficie externa opcional de descubrimiento de candidatos. `[AUSENCIA]` No se localizó en el repositorio una fuente estable que defina “kill-web”.

**Oráculo principal:** Los candidatos externos permanecen no confiables hasta validación interna; la ausencia de fuente se muestra y no se atribuye una implementación.

## Comando humano de origen

> “Si las fuentes internas no bastan, busca candidatos externos, pero no los ejecutes ni los incorpores automáticamente.”

## Estructuras de COGNICION_CENTRAL activadas

- Búsqueda Cognitiva
- MCCR C3/C7
- scope externo autorizado
- validadores de procedencia

## Estado y condiciones iniciales

Consulta interna agotada; el humano autoriza búsqueda externa de sólo lectura. “kill-web” se usa sólo como alias histórico de la superficie, no como producto o algoritmo identificado.

## Transformación paso a paso

1. Registrar `[AUSENCIA]` de definición exacta.
2. Construir consulta externa con alcance.
3. Recuperar candidatos y fuente primaria cuando exista.
4. Etiquetar `EXTERNAL_UNVERIFIED`.
5. Proyectar firma/puertos.
6. Validar autoridad, identidad, compatibilidad y seguridad.
7. Añadir a C3 sólo candidatos calificados.
8. Solicitar autorización separada para instalar/ejecutar.

## Salida intermedia esperada

```yaml
discovery_candidate:
  origin: EXTERNAL
  status: EXTERNAL_UNVERIFIED
  source_url_or_ref:
  claimed_capabilities: []
  validated_capabilities: []
  install_authorized: false
```

## Salida final esperada

Lista trazable de candidatos o `SOURCE_NOT_FOUND`; nunca un plan que presupone instalación.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Procedencia | fuente directa registrada |
| Autoridad | sólo lectura |
| Compatibilidad | prueba separada de similitud |
| Instalación | false salvo nuevo comando |

## Por qué demuestra el concepto

Demuestra cómo una superficie de descubrimiento alimenta candidatos sin convertirse en solver, autoridad o runtime.

## Variantes negativas

- Inventar definición de kill-web falla fuente.
- Contar snippet como capacidad verificada falla evidencia.
- Instalar automáticamente falla autoridad.

## Procedencia

- [FUENTE_CC] `03_aplicaciones/busqueda_cognitiva/BUSQUEDA_COGNITIVA_v0_1_0.md`: consulta y recuperación estructural.
- [FUENTE_CC] `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`: recuperación mínima, espacios, permisos y persistencia.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
