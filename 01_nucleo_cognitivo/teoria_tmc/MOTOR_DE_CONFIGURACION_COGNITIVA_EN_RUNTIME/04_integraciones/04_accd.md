# Integración con ACCD

**ID:** `MCCR-INT-ACCD-001`  
**Versión:** `0.1.0`  
**Estado:** `CANDIDATE / NON_CANONICAL`  
**Autoridad:** `HUMAN`  
**Fecha:** `2026-08-14`

> Este documento es una especificación candidata. No declara implementación de runtime ni modifica el canon.

## Tesis y propósito

ACCD aporta un dominio estructurado de instanciación y realización. MCCR configura la cadena y verifica restricciones; ACCD conserva la semántica de región, instancia, adaptador, codominio y manifestación.

## Responsabilidad

Este documento es responsable de:

- proyección de componentes ACCD al plan
- restricciones de pertenencia y efecto
- selección de realizaciones según resultado/capacidades

No es responsable de:

- redefinir ACCD
- seleccionar valores fuera de región sin extensión
- tratar codominio como salida concreta

## Contrato de entrada

| Entrada | Función | Condición |
|---|---|---|
| CONSTRUCCION_CONCEPTUAL | contenido temático-relacional | REQUIRED |
| REGION/INSTANCE SOURCES | valores permitidos/seleccionados | REQUIRED |
| REALIZATION_REQUIREMENT | codominio y manifestación esperada | REQUIRED |

El humano expresa intención, restricciones y decisiones en lenguaje natural. AC-HIA/backend materializa la representación estructurada; MCCR no exige que el humano escriba YAML, grafos, fórmulas ni restricciones formales.

## Procedimiento normativo

1. Recuperar modelo/grafo/región aplicables.
2. Validar que los valores contextuales pertenecen a la región.
3. Construir instancia contextual efectiva.
4. Elegir adaptador/protocolo compatible con el host.
5. Materializar manifestación dentro del codominio.
6. Validar que cada valor activo tiene efecto o excepción explícita.

## Contrato de salida

| Salida | Significado | Consumidor |
|---|---|---|
| ACCD_PLAN_FRAGMENT | pasos y gates de realización | MCCR |
| MANIFESTATION_CONTRACT | tipo de resultado esperado | MCCR |
| ACCD_VALIDATION_SET | región, efecto y codominio | MCCR |

## Especificación

Cadena fuente:

```text
modelo_base_de_regiones
→ grafo_de_regiones
→ instancia_regional
→ instancia_contextual
→ adaptador/protocolo
→ manifestación_codominial ∈ codominio
```

La instancia regional delimita posibilidades; la contextual selecciona el caso; el adaptador proyecta; el codominio define la familia válida; la manifestación es la salida concreta. Para video corto, el protocolo exige efecto observable de cada valor activo salvo desactivación, incompatibilidad o subordinación explícita.

## Invariantes y gates

- La autoridad humana y las restricciones de plataforma prevalecen.
- La trazabilidad enlaza comando, fuentes, decisiones, plan, ejecución y resultado.
- Primero se determina `VALID`; sólo después se compara `OPTIMAL` entre planes válidos.
- Una restricción dura nunca se relaja de forma silenciosa.
- Feedback y resultado no se convierten automáticamente en verdad, decisión o persistencia.
- Selected values permanecen dentro de Allowed o registran extensión autorizada.
- Codominio y manifestación no se colapsan.

## Ejemplo operativo

Un ensamblaje activa `comprensión rápida`, registro analítico y apertura de serie. El plan exige que esos valores afecten cabecera, macroestructura o bloques y queden justificados; no basta copiarlos a metadatos.

## Fallos y comportamiento requerido

| Condición | Respuesta |
|---|---|
| Valor fuera de región | rechazar o pedir extensión |
| Valor activo sin efecto | manifestación inválida/replan |
| Adaptador no disponible | buscar otra realización autorizada o inviabilidad |

## Relaciones y límites

MCCR decide el acoplamiento situado; ACCD decide pertenencia y validez de su dominio.

## Procedencia

- [FUENTE_CC] `03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md`: ecuación de protocolo y codominio.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/definiciones/documento-unificacion-sistema-transferencia-estructural-v2.md`: cadena región–instancia–adaptador–manifestación.
- [FUENTE_CC] `03_aplicaciones/sistema-de-transferencia-accd/realizaciones/video_corto/protocolos/protocolo-videos-cortos.md`: realización video corto y efecto de valores.
- [DECISION_HUMANA] `MCCR_CONTEXTO_DE_CONSTRUCCION_CODEX_v0_1_0`: requisitos, decisiones y preguntas abiertas.

Los elementos no atribuidos literalmente a esas fuentes son `[INFERENCIA]` de diseño local de MCCR. Una ausencia se registra como `[AUSENCIA]`; no se rellena con contenido inventado.

## Criterios de aceptación

- Se conserva toda la cadena ACCD.
- Hay gates de región/efecto/codominio.
- MCCR no redefine el dominio.
