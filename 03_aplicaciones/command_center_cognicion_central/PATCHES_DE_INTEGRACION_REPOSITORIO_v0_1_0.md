# PATCHES DE INTEGRACIÓN DEL REPOSITORIO — COMMAND CENTER

**Versión:** `0.1.0`  
**Estado:** `PROPUESTA / APLICAR SÓLO CON DECISIÓN HUMANA`

Este documento contiene los cambios mínimos que conviene aplicar a archivos existentes después de incorporar las nuevas carpetas. No se incluyen como reemplazos automáticos para evitar sobrescribir estado vivo.

## 1. `README.md` raíz

Cambiar el `bootstrap_protocol` cuando el humano apruebe usar v0.2 como arranque vigente:

```yaml
bootstrap_protocol: 00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_2_0.md
```

En el mapa funcional puede conservarse la taxonomía actual; no se añade una clase principal nueva.

## 2. `00_gobierno/protocolos/README.md`

Añadir a protocolos disponibles:

```text
- `PROTOCOLO_OPERACION_POR_COMANDOS_CENTRALES_v0_1_0.md`: protocolo contextual que normaliza prompts como Comandos Centrales, clasifica riesgo y separa ejecución de persistencia.
- `PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_2_0.md`: sucesor propuesto del bootstrap v0.1 con activación contextual del Command Center.
```

## 3. `01_nucleo_cognitivo/README.md`

Añadir al inventario:

```text
- `comandos_centrales`: modelo, gramática y ontología de la representación operativa de intención humana.
```

El límite del núcleo no cambia.

## 4. `02_metodos_y_herramientas/README.md`

Añadir:

```text
- `comandos_centrales`: normalización, ciclo de vida, planificación, riesgo, persistencia y trazabilidad operacional de comandos.
```

## 5. `03_aplicaciones/README.md`

Añadir:

```text
- `command_center_cognicion_central`: superficie de gobierno para emitir, normalizar, autorizar, ejecutar y revisar Comandos Centrales.
```

## 6. `05_casos_y_ejemplos/README.md`

Añadir referencia a:

```text
- `command_center_cognicion_central`: fixtures de normalización, riesgo, gates, persistencia y routing.
```

## 7. `REGISTRO_DE_ARCHIVOS.md`

Asignar un `FILE-CC-xxx` nuevo a cada archivo después de integrarlo físicamente. Para cada ficha usar:

```yaml
- id: FILE-CC-<NEXT>
  name: <filename>
  current_path: <ruta>
  previous_path: null
  operational_class: <GOV|CORE|METHOD|APP|CASE>
  function: <función declarada en README>
  authority: <según revisión humana>
  lifecycle: PROVISIONAL
  representation: SOURCE
  domain: command_center
  version: 0.1.0
  dependencies: []
  related_files: []
  duplicate_of: null
  decision: incorporar como especificación provisional del Command Center
  last_reviewed: <fecha>
  sha256: <hash real>
```

No reutilizar IDs existentes.

## 8. `BITACORA_DE_REORGANIZACION.md`

Registrar un evento único de incorporación que indique:

- comando humano que originó el paquete;
- rutas nuevas;
- decisión de mantener separación GOV/CORE/METHOD/APP/CASE;
- protocolo bootstrap seleccionado;
- estado provisional;
- ausencia de persistencia canónica automática.

## 9. `COGNICION_CENTRAL_CANONICA.md`

Aplicar únicamente después de aprobar `PROPUESTA_INTEGRACION_CANONICA_v0_1_0.md`.

Cambios mínimos sugeridos:

```text
CC-CMD: de "parcial" a "especificación v0.1 / requiere pruebas"
Gramática de comandos: "especificación v0.1 / requiere pruebas"
Command Center: nueva aplicación provisional
Orquestador: "diseño interpretativo parcial / backend autónomo pendiente"
```

Añadir el comando humano de aprobación sólo cuando la aprobación haya ocurrido realmente.

## 10. Versionado

La incorporación de una aplicación, una nueva subárea de núcleo y un método transversal es un cambio sustancial. La política vigente debe decidir el incremento exacto; como propuesta de trabajo, tratarlo como cambio `MINOR` compatible mientras no cambien las clases principales ni la precedencia.
