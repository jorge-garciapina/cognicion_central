# EC-FREQ-010 — Instanciación contextual y realización

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `10 de 10`  
**Frecuencia:** `90 / 760 unidades únicas (11.8%)`  
**Dispersión:** `6 áreas`  
**Rol dominante:** configurar un caso concreto y proyectarlo hacia una manifestación válida  
**Familias candidatas:** `Diseño + Método`  

## Definición

La instanciación contextual selecciona valores concretos dentro de un espacio estructural permitido para formar un caso operable. La realización transforma después ese caso, mediante adaptador o protocolo, en una manifestación perteneciente a un codominio.

La estructura distingue modelo, región posible, caso configurado, mecanismo de realización y salida material.

## Firma estructural

```text
MODELO / FUENTE ESTRUCTURAL
  → espacio de posibilidades
  → instancia regional o recorte habilitado
  + caso + contexto + intención + restricciones
  → INSTANCIA CONTEXTUAL
  → adaptador / protocolo de realización
  → MANIFESTACIÓN CODOMINIAL
```

## Funcionamiento

1. Recupera un modelo o fuente con identidad estable.
2. Delimita regiones, dimensiones y valores habilitados.
3. Selecciona valores para un caso, sin inventar regiones nuevas.
4. Declara propósito, contexto, cardinalidad, restricciones y omisiones.
5. Valida coherencia interna y compatibilidad con un adaptador.
6. El adaptador transforma la configuración hacia un codominio.
7. La manifestación resultante se valida contra el caso y el tipo de salida.
8. Evidencia posterior puede corregir futuras instancias o adaptadores.

## Invariantes

- Existe una fuente o modelo anterior al caso.
- El espacio de posibilidades está delimitado.
- La selección contextual es explícita.
- Se distingue configuración de manifestación.
- El mecanismo de realización tiene contrato.
- La salida pertenece a un codominio identificable.
- La trazabilidad permite regresar desde la salida hasta la fuente.

## Dominio de variación

Pueden variar valores seleccionados, grado de completitud, contexto, propósito, restricciones, adaptador, codominio y número de manifestaciones. Se pierde identidad si la instancia inventa estructura no habilitada, si el adaptador redefine el caso o si la salida se confunde con el modelo.

## Ejemplos localizados

### 1. Caso de Proyección Contextual de FAC

El registro `fabrica-de-adaptaciones-contextuales.txt` de [`ART_core_tmc.txt`](../../teoria_tmc/ART_core_tmc.txt) integra núcleo, composición contextual e intención como unidad realizable anterior a la intervención situada.

### 2. Instancia Contextual ACCD

El registro `definiciones/planteamiento-instancia-contextual-v2.md` de [`ART_arquitectura-operativa-accd.txt`](../../../03_aplicaciones/creacion_de_contenido/ART_arquitectura-operativa-accd.txt) sitúa la instancia entre Instancia Regional y adaptador, y declara selección, propósito, restricciones, compatibilidad y trazabilidad.

### 3. Ecuación de protocolo

[`base_teorica_ecuacion_de_protocolo_ACCD.md`](../../../03_aplicaciones/creacion_de_contenido/accd/base_teorica_ecuacion_de_protocolo_ACCD.md) formaliza `P^(r)(construcción, instancia contextual) = manifestación` dentro del codominio de una realización.

### 4. Una instancia, cuatro salidas

[`Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf`, p. 35](../../arquitecturas/Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf) proyecta la misma instancia industrial a brief, slides, video y dashboard, cada uno con función distinta.

### 5. Entidad federada

`definiciones/entidad-federada.md` muestra varias superficies coordinadas que se generan mediante la misma lógica de instanciación contextual y conservan un núcleo portable.

## Relaciones con otras estructuras frecuentes

- Identidad/variación delimita valores posibles.
- La jerarquía separa modelo, región, instancia y manifestación.
- La mediación implementa el adaptador.
- El pipeline ordena configuración, validación y realización.
- La trazabilidad conecta cada salida con su caso.

## Validación

Pasa si todos los valores elegidos están habilitados, las restricciones son coherentes, el adaptador acepta la instancia y la salida pertenece al codominio sin perder el núcleo. Falla por completar mediante intuición, introducir campos no autorizados o confundir configuración con pieza final.

## Lectura de frecuencia

La firma apareció en 90 unidades de seis áreas y 41 coincidencias cubrieron sus cinco indicadores. Está concentrada en ACCD y memoria conceptual; su frecuencia transversal es menor que la de pipelines o mediación, pero su formalización operativa es fuerte.

## Proyección portable

```yaml
contextual_instantiation:
  source_model:
  enabled_region:
  case:
  context:
  intention:
  selected_values: []
  restrictions: []
  adapter:
  target_codomain:
  manifestation:
  validation:
  traceability:
```

