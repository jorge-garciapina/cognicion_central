# Ficha del paquete

## Registro

```yaml
package:
  id: PC-AC-HIA
  name: ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  formal_name: ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  alias:
    - ARQUITECTURA_DE_COMUNICACION_HUMANO_IA
  version: 0.1.0
  date: 2026-08-12
  lifecycle: DEVELOPMENT
  authority: HUMAN
  language: es

classification:
  type: COGNITIVE_ARCHITECTURE_PACKAGE
  family: HUMAN_AI_INTERACTION
  role: INTERACTION_COORDINATION
  scope: CHAT_OR_PROJECT_LOCAL_ARCHITECTURE

status:
  conceptual_core: FORMALIZED
  basic_functionality: SPECIFIED
  runtime: NOT_IMPLEMENTED
  contextual_installer: NOT_INCLUDED
```

## Problema que atiende

Las interfaces de chat presentan la interacción como una secuencia de mensajes. Esa presentación es útil, pero insuficiente cuando los aportes humanos:

- corrigen estructuras anteriores;
- establecen directivas globales;
- activan o desactivan componentes;
- sustituyen versiones;
- producen artefactos;
- abren y cierran tareas;
- modifican el estado del trabajo a lo largo del tiempo.

El paquete modela cada aporte humano como un **comando situado** y la interacción como una sucesión de transiciones sobre un estado estructural acumulado.

## Función dominante

```text
COORDINAR LA COMUNICACIÓN BIDIRECCIONAL
ENTRE EL HUMANO, UNA ARQUITECTURA COGNITIVA LOCAL
Y UN SISTEMA DE IA ANFITRIÓN.
```

## Entradas

- prompts humanos;
- estado cognitivo local vigente;
- estructuras cognitivas activas;
- fuentes y artefactos disponibles;
- capacidades y restricciones del runtime;
- resultados de modelos y herramientas;
- decisiones de validación humana.

## Salidas

- comandos normalizados;
- planes de ejecución;
- subgrafos de trabajo;
- resultados clasificados;
- transiciones de estado;
- snapshots;
- grafos, tablas, textos u otras manifestaciones;
- trazas de operación;
- solicitudes de validación o resolución humana.

## Consumidores

- chats que adopten la arquitectura;
- proyectos de ChatGPT;
- aplicaciones con COGNICIÓN_CENTRAL;
- runtimes externos o locales;
- adaptadores de proveedor;
- interfaces visuales o conversacionales;
- generadores de artefactos.

## Criterio mínimo de pertenencia

Una realización pertenece a esta arquitectura sólo si:

1. reconoce al humano como autoridad soberana dentro de los límites de la plataforma;
2. distingue prompt, comando, estado, resultado y manifestación;
3. mantiene separadas las funciones del frontend, la arquitectura local, el backend y el sistema anfitrión;
4. integra comandos con alcance explícito;
5. no incorpora resultados del modelo como verdad o decisión automática;
6. permite inspección y corrección humana;
7. conserva trazabilidad suficiente;
8. adapta la ejecución a las capacidades reales del runtime.

## Exclusiones de la versión 0.1.0

- implementación en código;
- persistencia automática;
- interfaz gráfica terminada;
- adaptador específico para un proveedor;
- bootloader del artefacto;
- documento de cognición local de instalación;
- integración canónica dentro de COGNICIÓN_CENTRAL;
- formalización exhaustiva de PIEA o ACCD.
