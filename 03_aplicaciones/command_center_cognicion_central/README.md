# COMMAND_CENTER_COGNICION_CENTRAL

**ID lógico:** `APP-CC-COMMAND-CENTER`  
**Versión:** `0.1.0`  
**Estado:** `PROVISIONAL / OPERATIVO POR INTERPRETACIÓN`  
**Clase:** `APP`  
**Autoridad soberana:** `HUMANO`  
**Fecha:** `2026-08-08`

## Propósito

`COMMAND_CENTER_COGNICION_CENTRAL` es la aplicación de control humano que convierte intención expresada en lenguaje natural o controles estructurados en **Comandos Centrales normalizados**, los somete a reglas de autoridad, riesgo, persistencia y validación, y los entrega al runtime disponible de COGNICION_CENTRAL.

La aplicación no reemplaza a COGNICION_CENTRAL. Funciona como **superficie de gobierno**.

```text
HUMANO
  ↓ intención
COMMAND_CENTER
  ↓ normaliza
COMMAND_PROTOCOL
  ↓ valida
COMMAND_RUNTIME
  ↓ resuelve plan + capacidades + herramientas
RESULTADO / EVIDENCIA
  ↓
VALIDACIÓN HUMANA
```

## Ubicación canónica recomendada

Esta carpeta debe colocarse exactamente en:

```text
03_aplicaciones/command_center_cognicion_central/
```

La razón es funcional: se trata de una aplicación orientada al objetivo concreto de **gobernar la interacción humano → comando → ejecución**. Sus primitivas reutilizables se mantienen fuera de esta carpeta, en `01_nucleo_cognitivo/comandos_centrales` y `02_metodos_y_herramientas/comandos_centrales`. Las reglas de interpretación que afectan a la interfaz de ChatGPT se mantienen en `00_gobierno/protocolos`.

## Documentos de la aplicación

- `COMMAND_CENTER_COGNICION_CENTRAL_v0_1_0.md`: especificación integral de la aplicación.
- `CONFIGURACION_OPERATIVA_CHAT_v0_1_0.md`: comportamiento que debe adoptar ChatGPT cuando el Command Center está activo.
- `MODOS_DE_OPERACION_v0_1_0.md`: modos NORMAL, TRACE, STRICT y DEV.
- `INTERFAZ_COMMAND_CENTER_v0_1_0.md`: especificación de la futura HMI visual.
- `INSTALACION_E_INTEGRACION_v0_1_0.md`: instrucciones de colocación, activación y materialización.
- `PROPUESTA_INTEGRACION_CANONICA_v0_1_0.md`: cambios canónicos sugeridos, no autoaplicados.
- `MANIFEST_COMMAND_CENTER_v0_1_0.md`: inventario y dependencias del paquete.

## Dependencias

```text
00_gobierno/canon/COGNICION_CENTRAL_CANONICA.md
00_gobierno/registros/POLITICA_DE_ORGANIZACION.md
00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
01_nucleo_cognitivo/registro_estructuras_cognitivas/
02_metodos_y_herramientas/trazabilidad/
03_aplicaciones/busqueda_cognitiva/
```

La aplicación se apoya además en las arquitecturas de Compilador Cognitivo, Registro + Orquestador, IR Cognitiva, validación y artefactos portables ya descritas dentro de COGNICION_CENTRAL.

## Estado operativo real

Esta versión implementa una **capa interpretativa** que puede ser ejecutada por una IA que lea el artefacto y los protocolos. Permite:

- interpretar cada prompt como candidato a comando;
- normalizar intención;
- clasificar verbo y target;
- definir alcance;
- declarar restricciones;
- clasificar riesgo;
- distinguir ejecución de persistencia;
- producir plan;
- enrutar hacia capacidades disponibles;
- mantener trace de ejecución;
- detener operaciones que requieren autoridad humana;
- producir propuestas o parches cuando el runtime no puede modificar la fuente;
- exponer el comando normalizado cuando el modo o el riesgo lo requieran.

No implementa por sí misma un servidor MCP, una base de datos, un NAS, un backend Node.js ni una interfaz React. Esas son realizaciones futuras del mismo contrato.

## Papel dentro del artefacto integral

- **Función:** proporcionar la superficie de gobierno mediante la cual el humano emite, inspecciona, autoriza y revisa Comandos Centrales.
- **Entradas:** intención humana, contexto del proyecto, estado de COGNICION_CENTRAL, permisos y capacidades del runtime.
- **Salidas:** comando normalizado, plan, trace, resultado, evidencia, solicitudes de autorización y propuestas de persistencia.
- **Consumidores:** humano soberano, protocolos de chat, orquestador, aplicaciones, métodos y herramientas.
- **Límite:** esta aplicación no concede permisos, no modifica el canon silenciosamente y no convierte una respuesta de chat en persistencia aprobada.
