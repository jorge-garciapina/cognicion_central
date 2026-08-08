# COMMAND_CENTER_COGNICION_CENTRAL — ESPECIFICACIÓN OPERATIVA

**ID:** `APP-CC-COMMAND-CENTER`  
**Versión:** `0.1.0`  
**Estado:** `PROVISIONAL / OPERATIVO POR INTERPRETACIÓN`  
**Rol dominante:** aplicación de gobierno humano  
**Soberanía:** `HUMANO`

## 1. Tesis

La unidad principal de interacción con COGNICION_CENTRAL no debe ser necesariamente el mensaje conversacional. Debe poder ser un **Comando Central**: una representación operativa, inspeccionable y trazable de la intención humana.

```text
PROMPT HUMANO
  → INTERPRETACIÓN
    → COMANDO CENTRAL
      → PLAN
        → EJECUCIÓN
          → RESULTADO
            → EVIDENCIA
              → VALIDACIÓN
                → EVENTO / ESTADO cuando corresponda
```

El Command Center hace visible y gobernable esa transformación.

## 2. Objetivos funcionales

La aplicación debe cumplir simultáneamente estas funciones:

1. aceptar lenguaje natural;
2. aceptar, cuando exista HMI, entradas estructuradas;
3. normalizar ambas formas a un contrato común;
4. preservar el comando humano original;
5. distinguir inferencias de campos explícitos;
6. identificar el objeto sobre el que se actuará;
7. resolver el espacio lógico afectado (`CC://`, `PROJECT://`, `OVERLAY://`, `OUTPUT://`);
8. determinar el riesgo y nivel de autorización;
9. impedir persistencia silenciosa;
10. resolver un plan de ejecución;
11. seleccionar capacidades por función y contrato;
12. comprobar herramientas realmente disponibles antes de prometer acciones;
13. registrar trace de la operación;
14. detenerse en puntos de validación humana;
15. producir un resultado revisable;
16. separar resultado, evidencia, evento y cambio de estado;
17. permitir reejecución conceptual del mismo comando;
18. mantener compatibilidad con futuros runtimes externos.

## 3. Tres capas

### 3.1 COMMAND_CENTER

Superficie humana. Puede ser chat, formulario, panel React, app MCP o interfaz futura.

Responsabilidades:

- capturar intención;
- mostrar estado suficiente;
- mostrar advertencias;
- permitir corrección del comando;
- pedir autorización cuando corresponda;
- presentar resultado y trace.

No debe contener la lógica semántica profunda de todas las aplicaciones.

### 3.2 COMMAND_PROTOCOL

Representación estable que desacopla la expresión humana del runtime.

```text
lenguaje natural / HMI
        ↓
COMMAND_PROTOCOL
        ↓
ChatGPT / modelo local / orquestador / MCP / workers
```

Su definición reside en `01_nucleo_cognitivo/comandos_centrales`.

### 3.3 COMMAND_RUNTIME

Capa que convierte el comando validado en plan y ejecución compatible con las capacidades presentes.

Responsabilidades:

- descubrir capacidades disponibles;
- resolver dependencias;
- seleccionar estructuras, métodos, aplicaciones y herramientas;
- construir plan;
- ejecutar hasta el límite permitido;
- registrar trace;
- detenerse cuando falta autorización o herramienta;
- producir salida o patch en lugar de fingir persistencia.

Su procedimiento se define en `02_metodos_y_herramientas/comandos_centrales`.

## 4. Flujo normal

```text
HUMANO
  ↓
PROMPT
  ↓
CAPTURA
  ↓
INTERPRETACIÓN
  ↓
NORMALIZACIÓN
  ↓
VALIDACIÓN DEL CONTRATO
  ↓
CLASIFICACIÓN DE RIESGO
  ↓
AUTORIZACIÓN SI APLICA
  ↓
PLANIFICACIÓN
  ↓
DESCUBRIMIENTO DE CAPACIDADES
  ↓
ENRUTAMIENTO
  ↓
EJECUCIÓN
  ↓
VALIDACIÓN
  ↓
RESULTADO
  ↓
EVIDENCIA / TRACE
  ↓
PERSISTENCIA SÓLO SI FUE AUTORIZADA Y ES TÉCNICAMENTE POSIBLE
```

## 5. Regla de transparencia adaptativa

No todos los prompts deben generar una pantalla de metadatos. La interfaz debe adaptar la visibilidad del comando al contexto.

- consultas ordinarias de riesgo bajo: normalización interna; respuesta natural;
- operaciones de desarrollo: mostrar recibo breve del comando cuando aporte control;
- operaciones persistentes o externas: mostrar comando, alcance, riesgo y punto de autorización antes de ejecutar;
- modo TRACE/DEV: mostrar todas las capas solicitadas.

## 6. Regla de no-fricción

El humano no necesita memorizar IDs internos. El sistema debe aceptar expresiones como:

```text
"Muéstrame el estado de memoria cognitiva."
"Compara estas dos estructuras."
"Formaliza esta idea, pero no la integres todavía."
"Actualiza sólo los artefactos afectados por este cambio."
"Aprueba la propuesta y genera el patch canónico."
```

El Command Center traduce a la gramática normalizada.

## 7. Regla de dos fuentes de entrada

### Lenguaje natural

Entrada principal para trabajo exploratorio y complejo.

### Controles estructurados

Entrada útil para operaciones repetibles, de alto riesgo o de administración.

Ambas producen el mismo `CommandEnvelope`.

## 8. Resultado de una ejecución

Una ejecución no devuelve solamente texto. Conceptualmente devuelve:

```yaml
execution_result:
  command_id:
  status:
  answer_or_output:
  artifacts:
  evidence:
  trace:
  warnings:
  blocked_actions:
  persistence_effect:
  human_validation_required:
```

La interfaz puede presentar sólo la parte pertinente.

## 9. Regla de degradación segura

Si una capacidad descrita en el plan no está disponible, el sistema debe:

1. declararlo;
2. intentar una ruta compatible si no altera el objetivo ni permisos;
3. marcar la sustitución;
4. no afirmar que ejecutó la capacidad ausente;
5. detenerse si la sustitución cambiaría el sentido del comando.

## 10. Invariantes de la aplicación

- soberanía humana;
- preservación del prompt original;
- trazabilidad;
- separación ejecución/persistencia;
- separación `CC://`, `PROJECT://`, `OVERLAY://`, `OUTPUT://`;
- no escalamiento implícito de permisos;
- validación proporcional al riesgo;
- recuperación mínima suficiente;
- explicitación de bloqueos;
- compatibilidad con múltiples runtimes.

## 11. Criterio de éxito

El Command Center funciona correctamente cuando un humano puede expresar una intención sin conocer toda la arquitectura interna y, aun así, el sistema puede responder a estas preguntas:

```text
¿Qué entendí?
¿Qué voy a hacer?
¿Sobre qué?
¿Con qué restricciones?
¿Qué capacidades usaré?
¿Qué puede cambiar?
¿Qué no puede cambiar?
¿Qué necesito que autorice el humano?
¿Qué ocurrió realmente?
¿Qué quedó persistido y qué no?
```
