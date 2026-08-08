# EC-FREQ-001 — Jerarquía de capas y estratos

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `1 de 10`  
**Frecuencia:** `340 / 760 unidades únicas (44.7%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** organizar niveles de responsabilidad, abstracción, control o composición  
**Familias candidatas:** `Diseño + Patrón de razonamiento`  

## Definición

Una jerarquía de capas y estratos es una estructura que distribuye unidades, funciones o decisiones entre niveles distinguibles y declara cómo se contienen, condicionan, especializan o coordinan entre sí.

No es una lista vertical. Existe jerarquía cuando la posición de una unidad cambia qué puede hacer, de qué depende, qué gobierna o qué información recibe de niveles vecinos.

## Firma estructural

```text
NIVEL SUPERIOR
  define alcance, restricciones o coordinación
    ↓
NIVEL INTERMEDIO
  traduce o distribuye responsabilidades
    ↓
NIVEL LOCAL
  ejecuta operaciones concretas

relaciones: contiene + depende_de + especializa + informa + restringe
```

## Funcionamiento

1. Se identifica el fenómeno total y la escala de observación.
2. Se separan niveles por función, no sólo por tamaño.
3. Cada unidad recibe una responsabilidad local y un borde.
4. Se declaran relaciones verticales y, cuando corresponde, relaciones horizontales dentro del mismo nivel.
5. Las restricciones superiores se proyectan hacia abajo.
6. Evidencia, excepciones o resultados locales pueden escalar hacia arriba.
7. Se valida que ningún nivel absorba indebidamente funciones de otro.

La estructura permite cambiar resolución sin perder el mapa del sistema: un nodo local puede abrirse como subjerarquía y una jerarquía completa puede tratarse como módulo de otra mayor.

## Invariantes

- Existen al menos dos niveles funcionalmente diferentes.
- Cada nivel tiene una responsabilidad declarable.
- Hay relaciones verticales explícitas.
- El nivel superior no sustituye la ejecución local y el nivel local no redefine silenciosamente el propósito superior.
- Puede seguirse una decisión, restricción o flujo a través de los niveles.

## Dominio de variación

Pueden variar la cantidad de niveles, sus nombres, profundidad, granularidad, centralización, dirección de los flujos y grado de autonomía local. La identidad se conserva mientras sigan existiendo estratificación funcional y relaciones entre escalas.

## Ejemplos localizados

### 1. Jerarquías de control, semántica, ACCD y evidencia

[`Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf`, p. 35](../../arquitecturas/Arquitecturas_Cognitivas_en_Accion_COGNICION_CENTRAL_Vol_II_EDICION_AMPLIADA.pdf) presenta cuatro jerarquías simultáneas: humano-orquestador-cApp-funciones-runtime; hechos-inferencias-decisiones; proyecto-instancia-adaptadores-salidas; y fuente-manifestación-feedback-corrección. El ejemplo demuestra que un mismo sistema puede requerir varias jerarquías ortogonales.

### 2. Escalas macro, meso y micro de la IEC

[`ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt`](../../../02_metodos_y_herramientas/ingenieria_de_estructuras_cognitivas/ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt) aplica el mismo ciclo al proyecto completo, a un módulo y a una operación específica. La escala cambia el catálogo consultado, pero no la forma del ciclo.

### 3. Composición narrativo-cognitiva

El registro `modelo_arquitectura_macro_narrativo_cognitiva/ART_modelo_arquitectura_macro_narrativo_cognitiva.txt` de `ART_construccion_conceptual.txt` distribuye arquitectura macro, módulos analizadores, componentes, movimientos y beats. Cada nivel cumple una transformación cognitiva distinta.

### 4. Organización física de COGNICION_CENTRAL

La taxonomía `GOV → CORE → METHOD → APP → CONTEXT → CASE → ARTIFACT → HIST` no es una jerarquía de autoridad lineal, pero sí una estratificación funcional. Las autoridades `A1-A6` forman otra jerarquía separada. Distinguir ambas evita confundir ubicación con precedencia.

## Relaciones con otras estructuras frecuentes

- Un pipeline usa jerarquía cuando agrupa etapas en fases.
- Un grafo representa jerarquías sin reducir todas sus relaciones a árbol.
- La composición modular permite que cada nivel contenga unidades reutilizables.
- La trazabilidad recorre niveles desde fuente hasta decisión o salida.
- La instanciación contextual sitúa una realización debajo de modelos y regiones más generales.

## Validación

La jerarquía es válida si puede responder: qué hay en cada nivel, por qué está ahí, qué gobierna, de qué depende y cómo una modificación cruza niveles. Falla cuando los niveles son decorativos, mezclan escalas o esconden circularidades.

## Lectura de frecuencia

Su primer lugar se explica parcialmente porque muchos documentos extensos describen arquitecturas complejas. La coincidencia fue auditada en siete áreas, pero la firma es amplia; por ello la confianza en la **existencia transversal** es alta y la confianza en el **conteo exacto** es media.

## Proyección portable

```yaml
hierarchy:
  levels:
    - id:
      role:
      contains: []
      depends_on: []
      constrains: []
  upward_flows: []
  downward_flows: []
  cross_level_invariants: []
```
