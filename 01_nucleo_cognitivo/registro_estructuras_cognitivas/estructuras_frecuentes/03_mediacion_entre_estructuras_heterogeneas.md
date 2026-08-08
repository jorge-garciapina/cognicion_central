# EC-FREQ-003 — Mediación entre estructuras heterogéneas

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `3 de 10`  
**Frecuencia:** `219 / 760 unidades únicas (28.8%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** acoplar estructuras incompatibles en superficie sin perder su identidad operativa  
**Familias candidatas:** `Método + Diseño + Patrón de razonamiento`  

## Definición

La mediación entre estructuras heterogéneas es el patrón por el cual una estructura fuente se vuelve comprensible, transferible o realizable en una estructura destino mediante una interfaz, puente o adaptador explícito.

No exige igualdad de vocabulario o formato. Exige compatibilidad suficiente de roles, relaciones, invariantes, restricciones y tipos.

## Firma estructural

```text
ESTRUCTURA FUENTE
  → superficie de comunicación
  → prueba de compatibilidad
  → adaptador / puente / mediador
  → reexpresión regulada
  → ESTRUCTURA DESTINO

preserva: identidad y relaciones críticas
declara: pérdidas, alias, límites y restricciones
```

## Funcionamiento

1. Reconstruye la firma de la fuente.
2. Describe lo que ofrece y requiere cada superficie.
3. Compara tipos, roles, relaciones e invariantes.
4. Rechaza incompatibilidades irresolubles.
5. Construye correspondencias, alias o transformaciones locales.
6. Reexpresa la estructura en el destino.
7. Valida que la salida conserve la función relevante y declara pérdidas.

La mediación evita dos extremos: copiar rígidamente la superficie de origen y transformar libremente hasta destruir la estructura.

## Invariantes

- Existen fuente y destino distinguibles.
- Hay una incompatibilidad o heterogeneidad real que justifica la mediación.
- La identidad relevante de la fuente está declarada.
- El mediador tiene reglas observables.
- La salida puede contrastarse con invariantes de la fuente y restricciones del destino.
- Los límites de correspondencia permanecen visibles.

## Dominio de variación

Pueden variar lenguaje, formato, granularidad, dominio, modalidad, codominio, agente mediador y grado de automatización. La estructura deja de ser mediación cuando no existe destino, no hay transformación o la equivalencia se afirma sin prueba.

## Ejemplos localizados

### 1. Comunicación Estructural

`FILE-CC-004`, registro `comunicacion-estructural.txt` de [`ART_core_tmc.txt`](../../teoria_tmc/ART_core_tmc.txt), define estructura fuente, lenguaje de estructuras, superficie de comunicación, compatibilidad, intermediación y adaptador estructural. Es la manifestación más completa de esta firma.

### 2. Principio de Integración Universal

[`principio-de-integracion-universal.txt`](../../teoria_tmc/principio-de-integracion-universal.txt) plantea integración mediante superficies, alineación y adaptación, sin exigir que los sistemas de origen compartan representación superficial.

### 3. Meta-Metáfora

[`meta-metafora-v2.txt`](../../../02_metodos_y_herramientas/transferencia_estructural/meta-metafora-v2.txt) convierte la relación fuente-objetivo en un protocolo de anclas, relaciones, invariantes, diccionario, reglas, límites, prueba y trazabilidad.

### 4. Aprendizaje Estructural

[`APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf`, p. 20](../../../03_aplicaciones/aprendizaje_estructural/APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf) usa estructuras conocidas como anclas, construye puentes y exige desanclaje para que la persona pueda operar el objetivo sin depender de la analogía.

### 5. Adaptador ACCD

El registro `definiciones/planteamiento-adaptador-v2.md` de `ART_arquitectura-operativa-accd.txt` transforma una Instancia Contextual en manifestación codominial sin reconstruir arbitrariamente el caso.

## Relaciones con otras estructuras frecuentes

- El mapeo analógico es una forma particular de mediación.
- La instanciación contextual prepara la entrada para un adaptador.
- El pipeline ubica la mediación como una o varias etapas.
- El grafo permite comparar topologías fuente y destino.
- Identidad/variación define qué debe conservarse y qué puede reexpresarse.

## Validación

La mediación pasa cuando un tercero puede reconstruir las correspondencias, observar qué se transformó y comprobar que los invariantes relevantes siguen presentes. Falla con semejanza verbal, alias opacos, pérdida no declarada o contradicción entre restricciones.

## Antipatrones

- Traducción de palabras sin relaciones.
- Adaptador que inventa campos ausentes.
- Equivalencia declarada por tema compartido.
- Puente que se vuelve indispensable y oculta el objetivo.
- Compatibilidad asumida sin revisar tipos y límites.

## Lectura de frecuencia

La firma registró 219 unidades y 98 coincidencias cubrieron sus cinco componentes. Su dispersión por todas las áreas y la existencia de fuentes especializadas dan confianza alta al hallazgo.

## Proyección portable

```yaml
mediation:
  source_signature:
  target_signature:
  compatibility:
    preserved: []
    conflicts: []
  mappings: []
  transformations: []
  declared_losses: []
  validation:
```
