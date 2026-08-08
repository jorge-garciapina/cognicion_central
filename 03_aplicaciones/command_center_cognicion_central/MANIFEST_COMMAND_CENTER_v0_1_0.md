# MANIFEST — COMMAND CENTER COGNICION_CENTRAL

**Versión del paquete:** `0.1.0`  
**Fecha:** `2026-08-08`  
**Formato:** sólo archivos Markdown (`.md`)

## Inventario

| Ruta | Bytes | SHA-256 |
|---|---:|---|
| `00_gobierno/protocolos/PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_2_0.md` | 3846 | `69e74d1cc105aa19cae2fcf12e1c3b738ab5bcd60ac3283a933a28b42251d983` |
| `00_gobierno/protocolos/PROTOCOLO_OPERACION_POR_COMANDOS_CENTRALES_v0_1_0.md` | 3092 | `d35d48fb61a2ce4ae631af688c75317199d5e61988162478d27b07faf2779fd7` |
| `01_nucleo_cognitivo/comandos_centrales/GRAMATICA_DE_COMANDOS_CENTRALES_v0_1_0.md` | 2499 | `141715f344f3750fb08d302426133a2657e28ed8a47acdea35e6d2505e00515b` |
| `01_nucleo_cognitivo/comandos_centrales/MODELO_DE_COMANDO_CENTRAL_v0_1_0.md` | 2470 | `7ab1ba2cf7d829268745c1cbe59577ebaf344d8526abb76c1592a01dc60ea112` |
| `01_nucleo_cognitivo/comandos_centrales/ONTOLOGIA_DE_VERBOS_Y_TARGETS_v0_1_0.md` | 1958 | `f1188c298504c4cb20e4215419b512e8f1729efd667bf1ee95357de37a551513` |
| `01_nucleo_cognitivo/comandos_centrales/README.md` | 979 | `35a61658a00b83bef17edfa46b988f72512855deef6e653b6b7954b8ce4c9201` |
| `02_metodos_y_herramientas/comandos_centrales/AUTORIZACION_RIESGO_Y_PERSISTENCIA_v0_1_0.md` | 2297 | `563029f8ba8ce0a3525026ce8a874b0eea7438969ed0bf31f10969dc10330fe7` |
| `02_metodos_y_herramientas/comandos_centrales/CICLO_DE_VIDA_DEL_COMANDO_v0_1_0.md` | 1429 | `255d39a9e05b06fd755af18e91677d8a3d994c90ecbf52a480f3e783a8e92618` |
| `02_metodos_y_herramientas/comandos_centrales/NORMALIZACION_DE_COMANDOS_v0_1_0.md` | 1752 | `a3449f52fec8ca79ef661e1a23af71f5149885c75e2046366b11855f83cecad5` |
| `02_metodos_y_herramientas/comandos_centrales/PLANIFICACION_Y_ENRUTAMIENTO_v0_1_0.md` | 2005 | `184167a4c6c3bfad030964a389d62cb32026999c2665de1857f9a6d8fad1b232` |
| `02_metodos_y_herramientas/comandos_centrales/README.md` | 914 | `3117eaf9c60358279129908b04e50116838c38787d8de811ff2c611d01eb9e5f` |
| `02_metodos_y_herramientas/comandos_centrales/TRAZABILIDAD_Y_EVENTOS_DE_COMANDO_v0_1_0.md` | 1507 | `0154544efe416145efb5f1da95c8420aebd24319a24c0ea6a6dba30909d33898` |
| `03_aplicaciones/command_center_cognicion_central/COMMAND_CENTER_COGNICION_CENTRAL_v0_1_0.md` | 6297 | `1ca2717b71bb5cb01ad05fc269722e014f6ffb79d81ee0fcc6b77ab9c253182b` |
| `03_aplicaciones/command_center_cognicion_central/CONFIGURACION_OPERATIVA_CHAT_v0_1_0.md` | 4644 | `a5596b3bb097480dd3ad686a78d76f1b0e9bec76a8fb60f496aa9a5bf80d5255` |
| `03_aplicaciones/command_center_cognicion_central/INSTALACION_E_INTEGRACION_v0_1_0.md` | 4253 | `d65a714e07e1e22d891ff9d33c5a18c06844bed36ee7d62bda9bc6b2b79ff0c1` |
| `03_aplicaciones/command_center_cognicion_central/INTERFAZ_COMMAND_CENTER_v0_1_0.md` | 2356 | `f4c79d319f8821ac323126842edcb92abe2701d6659a3472cd92a74af78523c9` |
| `03_aplicaciones/command_center_cognicion_central/MODOS_DE_OPERACION_v0_1_0.md` | 1932 | `854ff1dff9ed90e732d8b51eb67156ea522c4f826b9e283b6c6ab2a5fc205c14` |
| `03_aplicaciones/command_center_cognicion_central/PATCHES_DE_INTEGRACION_REPOSITORIO_v0_1_0.md` | 3758 | `a4867bab351f67c2e836123a99f47829e728a7c3959116921588ff1ea74bb32f` |
| `03_aplicaciones/command_center_cognicion_central/PROPUESTA_INTEGRACION_CANONICA_v0_1_0.md` | 2530 | `c6abf86b75c8b73cbc095e907badc29ed491dec2e767ea4c82ecf9e885e0cc06` |
| `03_aplicaciones/command_center_cognicion_central/README.md` | 4193 | `2bd74ccdb9a9678602ae8dc4ceb841788cd1b5e01f221f426c6d952cabadcc6c` |
| `05_casos_y_ejemplos/command_center_cognicion_central/CASOS_DE_PRUEBA_COMMAND_CENTER_v0_1_0.md` | 2826 | `e99a6356d08846ba1aa31e2a7e053974b7973c546696ee5494f7c9c82b4d1ac2` |
| `05_casos_y_ejemplos/command_center_cognicion_central/README.md` | 638 | `b184cdda5c6b959aa0efb575aff4a4e0de78a5f299bdafda079b922914305b6d` |

## Regla de integración

El ZIP reproduce rutas relativas a la raíz de COGNICION_CENTRAL. Fusionar por ruta. No mover todas las piezas a `03_aplicaciones`, porque el paquete separa gobierno, núcleo, métodos, aplicación y casos por función.

## Estado

El paquete es una implementación documental/interpretativa provisional. Su integración canónica requiere la decisión humana descrita en `PROPUESTA_INTEGRACION_CANONICA_v0_1_0.md`.
