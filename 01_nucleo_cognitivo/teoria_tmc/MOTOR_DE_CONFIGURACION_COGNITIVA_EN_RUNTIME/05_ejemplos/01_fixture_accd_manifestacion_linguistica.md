# Fixture ACCD: manifestación lingüística

**ID:** `MCCR-FIX-ACCD-LANG-001`  
**Versión:** `0.1.0`  
**Estado:** `NORMATIVE_FIXTURE / CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este fixture prueba contratos MCCR; no prueba que exista un runtime autónomo.

## Propósito y oráculo

Prueba una realización ACCD puramente lingüística y la frontera plan→ejecución.

**Oráculo principal:** El plan separa construcción conceptual, instancia contextual, protocolo y manifestación, y no persiste el texto.

## Comando humano de origen

> “Convierte la construcción conceptual sobre COGNICION_CENTRAL en una explicación lingüística breve para un lector nuevo; conserva trazabilidad y no la guardes.”

## Estructuras de COGNICION_CENTRAL activadas

- AC-HIA normalización
- MCCR configuración
- ACCD ecuación de protocolo
- validador de codominio lingüístico

## Estado y condiciones iniciales

Existe construcción conceptual con ideas nucleares “gobierno humano”, “estructuras cognitivas” y “trazabilidad”. El host expone LLM textual; no requiere herramientas externas. Persistencia `EPHEMERAL`.

## Transformación paso a paso

1. AC-HIA normaliza CREATE, audiencia nueva, explicación breve y no persistencia.
2. C1 identifica roles: fuente, selección contextual, realización y validación.
3. C2 confirma capacidad textual.
4. C3 recupera ACCD base.
5. C4 compila preservación de tres ideas y salida lingüística.
6. C6 compone construcción→protocolo→manifestación.
7. C7 valida puertos y persistencia.
8. C10 crea plan; C12 lo entrega.
9. El host redacta; el validador confirma cobertura y trazabilidad.

## Salida intermedia esperada

```text
S1 recuperar construcción conceptual
S2 fijar instancia: audiencia=nueva, extensión=breve
S3 aplicar protocolo lingüístico
S4 validar tres ideas y procedencia
S5 emitir salida efímera
```

## Salida final esperada

Una explicación breve que presenta CC como arquitectura gobernada por el humano, distingue estructuras de sus portadores y enlaza decisiones con fuentes. Se etiqueta `REVIEWABLE_NOT_PERSISTED`.

## Validaciones

| Prueba | Resultado esperado |
|---|---|
| Región/instancia | los valores seleccionados están permitidos |
| Cobertura | aparecen las tres ideas nucleares |
| Plan/resultado | la redacción ocurre después de C12 |
| Persistencia | EPHEMERAL |

## Por qué demuestra el concepto

Es el recorrido mínimo completo comando→AC-HIA→MCCR→plan→runtime textual→validación.

## Variantes negativas

- Omitir una idea nuclear falla cobertura.
- Guardar el texto falla persistencia.
- Llamar “plan” a la explicación final falla el contrato.

## Procedencia

- [FUENTE_CC] `03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md`: ecuación de protocolo y codominio.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `01_nucleo_cognitivo/teoria_tmc/ARQUITECTURA_DE_COMUNICACION_HUMANO_IA/02_modelo_operativo/05_ciclo_operativo.md`: ciclo F0–F10.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los datos de salida son mínimos de prueba y no sustituyen la producción completa del dominio.
