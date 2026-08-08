# INSTALACIÓN E INTEGRACIÓN DEL COMMAND CENTER

**Versión:** `0.1.0`

## 1. Dónde colocar la carpeta del proyecto

El proyecto propiamente dicho debe quedar en:

```text
COGNICION_CENTRAL/
└── 03_aplicaciones/
    └── command_center_cognicion_central/
```

No coloques todo el ZIP dentro de `03_aplicaciones`. El paquete incluye dependencias que pertenecen a gobierno, núcleo y métodos.

## 2. Cómo fusionar el ZIP

El ZIP está organizado con las mismas rutas del repositorio. Copia su contenido sobre la **raíz de COGNICION_CENTRAL**, conservando carpetas:

```text
00_gobierno/protocolos/...
01_nucleo_cognitivo/comandos_centrales/...
02_metodos_y_herramientas/comandos_centrales/...
03_aplicaciones/command_center_cognicion_central/...
05_casos_y_ejemplos/command_center_cognicion_central/...
```

No sustituye archivos existentes; añade archivos nuevos.

## 3. Por qué el proyecto está distribuido

La política actual separa por función:

```text
GOBIERNO
→ protocolo que decide cómo interpretar y autorizar

NÚCLEO
→ identidad del objeto Comando Central

MÉTODO
→ cómo normalizar, planificar, enrutar, trazar y validar

APLICACIÓN
→ superficie de gobierno Command Center

CASOS
→ pruebas y ejemplos
```

Guardar todo dentro de una sola carpeta de aplicación mezclaría autoridad, primitivas transversales y procedimientos.

## 4. Activación en ChatGPT

Para que los prompts posteriores utilicen el nuevo comportamiento, hay dos rutas.

### Ruta recomendada

Después de reconstruir el artefacto central con estos archivos, usa como protocolo de instalación:

```text
00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_2_0.md
```

Ese protocolo carga el Command Center como overlay operacional predeterminado.

El primer comando de un chat puede ser:

```text
INSTALA COGNICION_CENTRAL Y ACTIVA COMMAND_CENTER EN MODO NORMAL USANDO EL ARTEFACTO ADJUNTO.
```

### Ruta compatible con el bootstrap anterior

Si el proyecto todavía usa `v0_1_0`, después de la instalación escribe:

```text
ACTIVA COMMAND_CENTER_COGNICION_CENTRAL USANDO:
CC://00_gobierno/protocolos/PROTOCOLO_OPERACION_POR_COMANDOS_CENTRALES_v0_1_0.md
MODO: CC-NORMAL
```

La activación es contextual. No modifica por sí sola el canon.

## 5. Cambio recomendado en el bootstrap del artefacto

Cuando materialices una nueva versión completa del artefacto, cambia la referencia de arranque de:

```text
...PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
```

a:

```text
...PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_2_0.md
```

No borres la versión anterior; consérvala como antecedente/historial según la política vigente.

## 6. Qué cambia después de activar

Un prompt como:

```text
"Analiza el estado de APRENDIZAJE_ESTRUCTURAL y dime qué falta."
```

se procesa conceptualmente como:

```yaml
verb: ANALYZE
target: APRENDIZAJE_ESTRUCTURAL
objective: evaluar estado y gaps
scope: [CC://, PROJECT://]
risk: R1
persistence: NONE
```

La respuesta sigue siendo natural porque `CC-NORMAL` no fuerza a mostrar el YAML.

Un prompt como:

```text
"Integra esta arquitectura al canon."
```

se normaliza como cambio persistente de alto impacto y debe detenerse para mostrar alcance y pedir autorización explícita antes de cualquier materialización.

## 7. Integración canónica

Los archivos de este paquete son utilizables como configuración contextual aunque la integración canónica permanezca pendiente.

Para convertirlos en parte vigente de COGNICION_CENTRAL se recomienda:

1. revisar `PROPUESTA_INTEGRACION_CANONICA_v0_1_0.md`;
2. asignar IDs físicos en `REGISTRO_DE_ARCHIVOS.md`;
3. actualizar los README de las carpetas padre;
4. registrar evento de incorporación;
5. actualizar estado de `CC-CMD`, gramática de comandos y orquestador en el canon;
6. incrementar versión según la magnitud aprobada;
7. generar nuevo artefacto central.

## 8. Limitación actual

Esta versión habilita la **operación interpretativa** del Command Center en ChatGPT. Si la interfaz no tiene escritura directa al repositorio, una orden de persistencia produce un patch/artefacto para revisión y materialización humana; no debe fingir que `CC://` fue modificado.
