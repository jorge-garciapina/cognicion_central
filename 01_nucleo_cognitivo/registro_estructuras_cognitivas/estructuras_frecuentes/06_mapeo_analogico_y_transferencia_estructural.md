# EC-FREQ-006 — Mapeo analógico y transferencia estructural

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `6 de 10`  
**Frecuencia:** `110 / 760 unidades únicas (14.5%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** usar una estructura conocida para reconstruir u operar otra sin confundir sus superficies  
**Familias candidatas:** `Patrón de razonamiento + Método`  

## Definición

El mapeo analógico relaciona un dominio fuente con un dominio objetivo mediante correspondencias entre roles, relaciones, restricciones o transformaciones. La transferencia estructural ocurre cuando la forma reconstruida puede operar en el objetivo y no queda reducida a semejanza expresiva.

Una analogía explica; una transferencia completa exige además límites, desanclaje y prueba en casos nuevos.

## Firma estructural

```text
DOMINIO FUENTE B
  roles + relaciones + invariantes
          ⇅ mapeo explícito
DOMINIO OBJETIVO A
  roles + relaciones + restricciones

→ comprensión inicial
→ declaración de rupturas
→ desanclaje
→ prueba de transferencia en A
```

## Funcionamiento

1. Declara qué se quiere comprender o hacer en el objetivo.
2. Elige una fuente cuya organización sea conocida y relevante.
3. Extrae relaciones e invariantes, no sólo nombres parecidos.
4. Construye un diccionario mínimo de correspondencias.
5. Marca relaciones preservadas, no preservadas y contradictorias.
6. Usa el puente para guiar comprensión o decisión.
7. Retira progresivamente la dependencia de la fuente.
8. Valida la estructura en casos del objetivo y, si procede, en otro dominio.

## Invariantes

- Existen fuente y objetivo distintos.
- Hay correspondencias explícitas entre componentes o relaciones.
- Al menos una relación estructural relevante se preserva.
- Se declaran alcance y límites.
- La validez puede probarse en el objetivo.
- La persona o sistema puede abandonar la superficie fuente sin perder la estructura aprendida.

## Dominio de variación

Pueden variar dominio, granularidad, número de correspondencias, modalidad, propósito didáctico o decisional y grado de formalización. Se pierde la identidad cuando sólo hay parecido verbal, asociación temática o metáfora sin consecuencias operativas.

## Ejemplos localizados

### 1. Meta-Metáfora

[`meta-metafora-v2.txt`](../../../02_metodos_y_herramientas/transferencia_estructural/meta-metafora-v2.txt) formaliza anclas A/B, relaciones, invariantes, diccionario, reglas si-entonces, límites, pruebas, métricas y trazabilidad. Convierte metáfora en protocolo reproducible.

### 2. Aprendizaje Estructural

[`APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf`, p. 20](../../../03_aplicaciones/aprendizaje_estructural/APRENDIZAJE_ESTRUCTURAL_COGNICION_CENTRAL_v0_1.pdf) identifica analogía bonita, sobreextensión y dependencia del ancla como fallos; exige correspondencias, rupturas y desanclaje.

### 3. Cocina mexicana como sistema

[`COGNICION_CENTRAL_EXPLICADA_CON_ANALOGIAS_v0_1.pdf`, p. 13](../../../00_gobierno/explicaciones/COGNICION_CENTRAL_EXPLICADA_CON_ANALOGIAS_v0_1.pdf) mapea identidad del platillo, receta, memoria distribuida, técnicas, preparación, feedback, tradición adaptativa y cocinas regionales hacia estructuras de COGNICION_CENTRAL.

### 4. Casos cNode

Los archivos de `05_casos_y_ejemplos/cnode` usan seguros, educación, contenido y fabricación para proyectar núcleos, variación, relaciones y funciones a dominios concretos.

### 5. BÚSQUEDA_COGNITIVA

[`EJEMPLO_001_BUSQUEDA_FABRICA_ADAPTACIONES_CONTEXTUALES.md`](../../../03_aplicaciones/busqueda_cognitiva/ejemplos/EJEMPLO_001_BUSQUEDA_FABRICA_ADAPTACIONES_CONTEXTUALES.md) compara una firma con analogías industrial y culinaria, y declara qué parte preservan y dónde dejan de corresponder.

## Relaciones con otras estructuras frecuentes

- Es una especialización de mediación.
- Usa identidad/variación para decidir qué transferir.
- Puede comparar grafos fuente y objetivo.
- La trazabilidad conserva correspondencias y límites.
- La transición de estados permite describir el cambio de comprensión producido por el puente.

## Validación

Pasa cuando el mapeo mejora comprensión u operación, preserva relaciones críticas y permite resolver un caso nuevo sin depender permanentemente de la fuente. Falla por similitud superficial, sobreextensión, precisión falsa o ausencia de límites.

## Lectura de frecuencia

La firma apareció en 110 unidades de siete áreas. Sólo seis coincidencias cubrieron los cinco indicadores más estrictos; muchas analogías son parciales. La existencia transversal tiene confianza alta, pero el conteo de transferencias plenamente validadas es bastante menor que la frecuencia general.

## Proyección portable

```yaml
structural_mapping:
  objective:
  source_domain:
  target_domain:
  correspondences: []
  preserved_relations: []
  broken_relations: []
  limits: []
  deanchoring_test:
  transfer_test:
```

