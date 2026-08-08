# PLANIFICACIÓN Y ENRUTAMIENTO

**ID:** `METH-CC-CMD-ROUTE`  
**Versión:** `0.1.0`

## Objetivo

Convertir un comando validado en un plan ejecutable usando únicamente capacidades realmente disponibles.

## 1. Descubrimiento de capacidades

Antes de planificar acciones materiales, identificar:

```text
FUENTES ACCESIBLES
REGISTROS
APLICACIONES
MÉTODOS
HERRAMIENTAS
MODELOS
RUNTIME
PERMISOS
```

No confundir capacidad descrita en el artefacto con herramienta disponible en la interfaz actual.

## 2. Resolución mínima suficiente

Recuperar:

```text
gobierno pertinente
+ target
+ dependencias directas
+ método/aplicación necesaria
+ contexto necesario
+ evidencia cuando aplique
```

Evitar cargar todo el repositorio por defecto.

## 3. Selección por rol operativo

La selección debe responder "qué transformación se necesita", no solamente "qué archivo habla del tema".

Ejemplo:

```text
"traza de dónde salió esta idea"
→ método de trazabilidad

"encuentra una estructura equivalente"
→ búsqueda cognitiva + transferencia estructural

"enséñame usando algo que ya conozco"
→ APRENDIZAJE_ESTRUCTURAL
```

## 4. Plan

Cada step debe declarar:

```yaml
step:
  id:
  operation:
  consumes:
  capability:
  produces:
  permission:
  validator:
  stop_if:
```

## 5. Enrutamiento

Un runtime puede elegir entre:

```text
CHAT_MODEL
FILE_RETRIEVAL
WEB_RESEARCH
LOCAL_TOOL
MCP_TOOL
ARTIFACT_GENERATOR
EXTERNAL_MODEL
LOCAL_MODEL
HUMAN_GATE
```

Sólo seleccionar opciones existentes en el entorno.

## 6. Fallback

Un fallback es válido cuando conserva:

- objetivo;
- restricciones;
- autoridad;
- nivel epistemológico;
- output contract.

Si no puede conservarlos, detenerse.

## 7. Plan visible

En modos TRACE/DEV, mostrar el plan sin revelar razonamiento privado. Mostrar acciones observables y justificables:

```text
1. localizar canon
2. localizar aplicación
3. recuperar dependencias
4. comparar estado
5. generar propuesta
6. validar
7. detener antes de persistir
```
