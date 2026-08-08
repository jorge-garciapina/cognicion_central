# EC-FREQ-007 — Identidad preservada bajo variación

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `7 de 10`  
**Frecuencia:** `105 / 760 unidades únicas (13.8%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** distinguir cambios legítimos de pérdida de identidad  
**Familias candidatas:** `Idea + Diseño + Patrón de razonamiento`  

## Definición

Esta estructura organiza una entidad mediante un núcleo o límite de identidad, un conjunto de invariantes y un dominio de variación. Permite producir, comparar o reconocer manifestaciones distintas como realizaciones de la misma estructura.

Es el patrón base de esencificación: especifica qué debe permanecer, qué puede cambiar y qué ruptura convierte una variación en otra entidad.

## Firma estructural

```text
IDENTIDAD = invariantes + relaciones críticas + restricciones de borde

REALIZACIÓN 1 ─┐
REALIZACIÓN 2 ─┼→ misma identidad si preservan el núcleo
REALIZACIÓN N ─┘

dominio de variación = dimensiones permitidas de cambio
```

## Funcionamiento

1. Delimita la entidad y su función.
2. Aplica pruebas de sustracción, sustitución o contraste.
3. Declara invariantes y relaciones críticas.
4. Declara dimensiones variables y rangos permitidos.
5. Genera o recibe una realización candidata.
6. Compara la candidata con el límite de identidad.
7. Clasifica como realización válida, caso fronterizo o ruptura.
8. Refina criterios cuando evidencia repetida revela un borde mal definido.

## Invariantes

- Existe una identidad reconstruible.
- Puede enunciarse al menos un invariante.
- Puede enunciarse al menos una dimensión de variación.
- Hay criterio para distinguir continuidad de ruptura.
- Las manifestaciones no sustituyen la definición de la estructura.

## Dominio de variación

El dominio pertenece a cada estructura concreta: formato, estilo, contexto, escala, orden local, componentes opcionales, valores o recursos. El metapatrón permite variar qué dimensiones cumplen esos papeles, pero siempre exige separar preservación y cambio.

## Ejemplos localizados

### 1. Criterio CS1

[`estructuras-cognitivas-Esp.txt`](../../cnode/estructuras-cognitivas-Esp.txt) exige que toda estructura cognitiva tenga al menos un invariante y una dimensión de variación permitida. Sin ese límite, sigue siendo contenido, no estructura portable.

### 2. Fábrica de Adaptaciones Contextuales

El registro `fabrica-de-adaptaciones-contextuales.txt` de [`ART_core_tmc.txt`](../../teoria_tmc/ART_core_tmc.txt) conserva un núcleo mientras sujeto, medio, distribución, ejecución, heurísticas y salidas varían bajo un régimen legítimo.

### 3. Seguros, enseñanza y nichos

[`analisis-de-estructuras.pdf`, p. 1](../../cnode/analisis-de-estructuras.pdf) muestra contrato/coberturas frente a discurso para cada prospecto; definición matemática frente a analogías para cada alumno; y mensaje central frente a formato/tono para nichos distintos.

### 4. Principios psicológicos transcontextuales

[`modelo_principios_psicologicos_patrones_transcontextuales.md`](../../../03_aplicaciones/campos_atencionales/modelos/principios_psicologicos/modelo_principios_psicologicos_patrones_transcontextuales.md) conserva relaciones entre estímulo, mecanismo y reacción probable mientras cambia la realización publicitaria.

### 5. Cocina regional

[`COGNICION_CENTRAL_EXPLICADA_CON_ANALOGIAS_v0_1.pdf`, p. 13](../../../00_gobierno/explicaciones/COGNICION_CENTRAL_EXPLICADA_CON_ANALOGIAS_v0_1.pdf) pregunta cuánto puede cambiar un mole y seguir siendo reconocido como mole; el problema culinario proyecta directamente el límite de identidad.

## Relaciones con otras estructuras frecuentes

- La mediación necesita saber qué preservar.
- La instanciación selecciona valores dentro del dominio permitido.
- La composición modular conserva contratos de módulos.
- La analogía debe preservar relaciones invariantes.
- La transición de estados distingue cambio legítimo de sustitución.

## Validación

Pasa si observadores distintos pueden aplicar los criterios y justificar por qué una variación sigue perteneciendo. Falla cuando “esencia” significa intuición privada, cuando todo es invariante o cuando cualquier cambio se acepta sin borde.

## Lectura de frecuencia

La firma estricta de cuatro componentes apareció en 105 unidades de todas las áreas. La confianza es alta: además de frecuencia, CS1 convierte esta estructura en requisito explícito de toda estructura cognitiva del proyecto.

## Proyección portable

```yaml
identity_under_variation:
  entity:
  operational_identity:
  invariants: []
  critical_relations: []
  variation_dimensions: []
  allowed_ranges: []
  rupture_conditions: []
  membership_tests: []
```

