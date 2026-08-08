# EC-FREQ-008 — Representación relacional en grafo

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `8 de 10`  
**Frecuencia:** `103 / 760 unidades únicas (13.6%)`  
**Dispersión:** `6 áreas`  
**Rol dominante:** externalizar entidades y relaciones como una topología consultable  
**Familias candidatas:** `Diseño + Modelo mental`  

## Definición

La representación relacional en grafo modela una estructura mediante nodos distinguibles y aristas tipificadas. Su valor no está en dibujar puntos y líneas, sino en hacer explícitas dependencias, composición, dirección, jerarquía, compatibilidad, causalidad o flujo.

El grafo es una proyección de la estructura, no la estructura mental ni el fenómeno completo.

## Firma estructural

```text
G = (V, E)

V: nodos con identidad, tipo, rol y atributos
E: relaciones tipificadas entre nodos

consultas: vecindad + dependencia + trayectoria + subgrafo + integración
```

## Funcionamiento

1. Delimita el fenómeno que se representará.
2. Decide qué entidades merecen identidad de nodo.
3. Define tipos de relación y dirección.
4. Proyecta nodos y aristas con procedencia.
5. Valida bordes, duplicados, referencias y restricciones.
6. Consulta vecindades, caminos, dependencias o patrones.
7. Integra subgrafos mediante reglas de alineación.
8. Versiona la proyección cuando cambia la estructura fuente.

## Invariantes

- Existen nodos distinguibles.
- Existen relaciones que aportan significado operacional.
- Los tipos y direcciones son interpretables.
- La representación conserva procedencia suficiente.
- Una arista no sustituye una explicación causal cuando sólo expresa asociación.
- El grafo puede consultarse sin contexto privado oculto.

## Dominio de variación

Pueden variar formato, herramienta, orientación visual, cantidad de nodos, granularidad, tipos de arista, atributos, particiones y vistas. La identidad se pierde si se reducen relaciones diferentes a una conexión genérica o si los nodos carecen de criterio de identidad.

## Ejemplos localizados

### 1. cNode como proyección portable

[`estructuras-cognitivas-Esp.txt`](../../cnode/estructuras-cognitivas-Esp.txt) proyecta estructuras internas a paquetes ontológicos integrables con identidad, invariantes, familia, roles y relaciones.

### 2. Teoría de Máquinas Cognitivas

[`maquinas-cognitivas.txt`](../../teoria_tmc/maquinas-cognitivas.txt) conecta mNodes, familias, criterios de pertenencia, proyección, cNodes, grafo compartido e integración en cApps.

### 3. Ingeniería de Estructuras Cognitivas

[`ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt`](../../../02_metodos_y_herramientas/ingenieria_de_estructuras_cognitivas/ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt) trata módulos como subgrafos y el ensamblaje como integración por bordes explícitos.

### 4. Artefactos y grafos documentales

El registro `metodo-artefactos-y-grafos-documentales.md` de `ART_uso_de_artefactos.txt` modela documentos, registros, fuentes y salidas como nodos relacionados, preservando materialización y procedencia.

### 5. Casos de cNode

`05_casos_y_ejemplos/cnode` proyecta dominios como educación, seguros, fabricación y creación de contenido para demostrar cómo se conserva una forma relacional al cambiar el tema.

## Relaciones con otras estructuras frecuentes

- Una jerarquía es una topología particular representable como grafo.
- Un pipeline es un grafo dirigido de transformaciones.
- La composición modular usa subgrafos y puertos.
- La trazabilidad agrega aristas de procedencia y producción.
- La mediación compara grafos o superficies heterogéneas.

## Validación

Pasa si cada nodo y arista tiene semántica, las referencias resuelven y las consultas devuelven relaciones coherentes con las fuentes. Falla con “espagueti”, aristas sin tipo, nodos duplicados o visualización que inventa estructura.

## Lectura de frecuencia

La firma apareció en 103 unidades de seis áreas. El conteo es conservador para documentos que usan listas relacionales sin decir “grafo”; es más fiable en fuentes TMC, cNode, IEC y artefactos.

## Proyección portable

```yaml
relational_graph:
  graph_id:
  nodes:
    - id:
      type:
      role:
      provenance:
  edges:
    - from:
      to:
      type:
      rationale:
  constraints: []
  validation: []
```

