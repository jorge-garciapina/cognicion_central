# COGNICION_CENTRAL

COGNICION_CENTRAL se interpreta como un **artefacto cognitivo integral, compuesto y gobernado**. Su unidad de sentido es el repositorio completo: ningún archivo aislado representa por sí solo el sistema.

El repositorio es la representación viva y editable de esa unidad. Una exportación JSONL, NDJSON u otro empaquetado será una fotografía del artefacto en un momento determinado, no un sustituto automático de su estado vivo.

## Identidad del artefacto integral

```yaml
artifact:
  id: CC-ARTEFACTO-INTEGRAL
  name: COGNICION_CENTRAL
  type: repositorio_cognitivo_compuesto
  boundary: todo_el_repositorio
  entrypoint: README.md
  bootstrap_protocol: 00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
  authoritative_state: 00_gobierno/canon
  physical_index: 00_gobierno/registros/REGISTRO_DE_ARCHIVOS.md
  semantic_index: 01_nucleo_cognitivo/registro_estructuras_cognitivas
  lifecycle: LIVE
  serialization_rule: toda_exportacion_es_una_fotografia_versionada
```

## Cómo funciona como unidad

```text
COMANDO, NECESIDAD O ARCHIVO NUEVO
  → GOBIERNO delimita autoridad, alcance y reglas
  → NÚCLEO aporta estructuras y capacidades reutilizables
  → MÉTODOS transforman, comparan, ensamblan o validan
  → APLICACIONES orientan esas capacidades hacia un objetivo
  ↔ CONOCIMIENTO Y CONTEXTO aporta memoria, fuentes y evidencia
  → CASOS hacen observable o ponen a prueba el funcionamiento
  → ARTEFACTOS GENERADOS conservan resultados reproducibles
  → REGISTROS E HISTORIAL preservan trazabilidad y evolución
```

La operación normal recupera el conjunto mínimo suficiente. “Unidad” no significa cargar indiscriminadamente todos los archivos, sino conservar las relaciones necesarias para interpretar cada parte dentro del todo.

## Mapa funcional

| Parte | Para qué sirve | Qué recibe | Qué entrega al resto |
|---|---|---|---|
| `00_gobierno` | controlar autoridad, estado, organización y trazabilidad | comandos humanos, cambios y estado del repositorio | canon, políticas, protocolos, registros y límites |
| `01_nucleo_cognitivo` | proporcionar estructuras cognitivas reutilizables | decisiones vigentes y desarrollos validados | teoría, cNodes, arquitecturas e identidades estructurales |
| `02_metodos_y_herramientas` | ejecutar transformaciones transversales | estructuras, intenciones, fuentes y artefactos | procedimientos, contratos, análisis y herramientas |
| `03_aplicaciones` | orientar capacidades hacia objetivos concretos | núcleo, métodos, contexto y comandos | diseños, decisiones y procesos específicos de dominio |
| `04_conocimiento_y_contexto` | suministrar memoria, evidencia y referencias | fuentes internas, externas y transcripciones | contexto recuperable, restricciones y candidatos conceptuales |
| `05_casos_y_ejemplos` | demostrar, enseñar o validar | estructuras, métodos y aplicaciones | instancias observables, pruebas y contraejemplos |
| `06_artefactos_generados` | persistir resultados reproducibles | ejecuciones gobernadas y corpus declarados | fotografías, índices, exportaciones y evidencia computacional |
| `90_historial` | conservar genealogía sin competir con lo vigente | versiones sustituidas y desarrollo conceptual | auditoría, comparación y posibilidad de recuperación |
| `99_entrada` | controlar el ingreso de material externo | archivos aún no clasificados | unidades verificadas y propuestas de clasificación |

## Contrato de los README

Cada README describe su carpeta como una subunidad del artefacto mediante cinco campos comunes:

- **Función:** transformación o responsabilidad específica de la carpeta.
- **Entradas:** información que necesita para cumplir esa función.
- **Salidas:** conocimiento, decisiones o artefactos que aporta al resto.
- **Consumidores:** partes que normalmente utilizan esas salidas.
- **Límite:** interpretación que debe evitarse para no romper autoridad, procedencia o alcance.

Los inventarios y explicaciones particulares de cada carpeta complementan esta ficha. Si una carpeta cambia de función, deben actualizarse su README, la política, el registro y la bitácora en la misma operación.

## Orden de lectura recomendado

1. Leer `00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md` para conocer el estado vigente.
2. Consultar `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md` para entender clasificación, recuperación y autoridad.
3. Para instalar el artefacto en un proyecto de ChatGPT, aplicar `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt`.
4. Usar `00_gobierno/registros/REGISTRO_DE_ARCHIVOS.md` para localizar portadores y `01_nucleo_cognitivo/registro_estructuras_cognitivas` para localizar estructuras por identidad y operación.
5. Abrir el núcleo, método o aplicación responsable de la tarea.
6. Recuperar contexto, fuentes y casos sólo cuando sean pertinentes.
7. Persistir resultados reproducibles en `06_artefactos_generados` y registrar los cambios.
8. Consultar `90_historial` únicamente para auditoría, genealogía, recuperación o comparación.

## Reglas de integridad

- La autoridad humana y el canon vigente prevalecen sobre cualquier documento derivado.
- Un archivo tiene una sola ubicación primaria; las relaciones adicionales se registran sin crear copias silenciosas.
- La ubicación se decide por función operativa, no por extensión, nombre o tema superficial.
- Una repetición o copia serializada no cuenta automáticamente como evidencia independiente.
- Las versiones históricas nunca se sobrescriben ni se usan como vigentes si existe una fuente activa con precedencia.
- Todo archivo externo nuevo entra por `99_entrada`. Una generación interna sólo puede ir directamente a destino bajo la excepción gobernada.
- Mover, describir o volver frecuente una estructura no la convierte en canon.
- Una serialización del repositorio debe declarar fecha, versión, alcance, exclusiones, herramienta y hash.

## Gobierno de esta organización

La taxonomía vigente es `ORG-CC 1.9.0`, actualizada el 8 de agosto de 2026. Sus parámetros, estados y procedimiento de actualización se encuentran en `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`.
