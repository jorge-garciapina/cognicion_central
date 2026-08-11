# Definición y fronteras

## 1. Definición exacta

El adaptador es un mediador cognitivo de compresión preservadora entre dos contratos heterogéneos:

```text
MTC_OUTPUT
  = representación ontológica, causal, operacional y epistemológicamente marcada

CONSTRUCCION_CONCEPTUAL
  = colección de ideas activas formuladas, jerarquizadas, ponderadas y relacionadas
```

Su función es decidir qué contenido estructural de la primera representación debe comparecer como materia conceptual en la segunda, sin volver a ejecutar la cognición propia de MTC y sin anticipar la realización propia de ACCD.

Formalmente:

```text
ADP : (MTC_INSTANCE_VALIDADA, MTC_TRACE, ACCD_CONTRACT)
      → (CONSTRUCCION_CONCEPTUAL, TRACE_SIDECAR, VALIDATION_REPORT)
```

No es una función puramente sintáctica, porque la cardinalidad no es uno a uno:

```text
un componente MTC    → puede alimentar varias ideas;
varios componentes   → pueden condensarse en una idea;
una relación MTC     → puede requerir una idea puente;
un invariante        → puede producir una idea contrastiva;
un detalle MTC       → puede descartarse sin producir idea;
una idea activa      → puede integrar estructura, relación y restricción.
```

## 2. Frontera de entrada

El adaptador comienza cuando MTC ya ha:

- interpretado el fenómeno;
- activado su región cognitiva mínima suficiente;
- reconstruido la instancia;
- distinguido `I`, `Q`, `EC`, `τ`, `θ`, `A`, `V`, `K`, `M`, `G`, `F` y `C` cuando correspondan;
- validado pertenencia;
- identificado invariantes y variación pertinentes;
- marcado estatus epistemológico;
- y dejado trazabilidad.

Si alguna de estas operaciones falta, el adaptador puede formular una solicitud de ampliación a MTC. No debe ejecutarla internamente como lógica propia.

## 3. Frontera de salida

El adaptador termina al emitir:

```yaml
construccion_conceptual:
  coleccion_de_ideas_activas:
    ideas_activas: []
```

Después de esa frontera, ACCD puede:

- unir la construcción con un ensamblaje;
- reconstruir la instancia contextual modular efectiva;
- distribuir ideas en bloques;
- decidir guion, texto, visualidad, audio, continuidad y performance;
- validar el codominio;
- y producir una manifestación.

## 4. Responsabilidades

El adaptador debe:

1. verificar contratos y suficiencia de entrada;
2. solicitar a MTC la vista estructural necesaria;
3. separar estructura candidata de materia conceptual seleccionada;
4. identificar núcleo, mecanismos e invariantes que deben sobrevivir;
5. descomponer el contenido en proposiciones inteligibles;
6. fusionar redundancias sin colapsar distinciones;
7. descartar periferia sin romper reconstructibilidad;
8. construir relaciones semántico-funcionales entre ideas;
9. asignar rol, peso y modo de presencia con reglas explícitas;
10. conservar epistemología en la formulación y el sidecar;
11. serializar usando el vocabulario vigente de ACCD;
12. ejecutar validación reconstructiva y de esquema.

## 5. No-responsabilidades

El adaptador no debe:

- leer linealmente los 27 documentos MTC para redescubrir el sistema;
- reimplementar router, vecindarios, operadores o validadores de MTC;
- corregir silenciosamente una instancia MTC;
- decidir si un hecho histórico es verdadero sin fuente externa;
- construir una instancia regional o contextual de ACCD;
- elegir plataforma, duración, audiencia o estrategia atencional;
- producir hook, guion, montaje, planos, imágenes, audio o texto en pantalla;
- validar una manifestación codominial;
- inventar campos o enumeraciones dentro de `construccion_conceptual`;
- convertir el sidecar en parte del puerto ACCD;
- persistir o promover el resultado sin autorización.

## 6. Objeto intermedio mínimo

El adaptador usa un objeto interno transitorio:

```text
MAPA_DE_DERIVACION_CONCEPTUAL
```

No se crea por elegancia. Resuelve tres problemas reales:

1. ACCD no declara campos para procedencia o estatus epistemológico dentro de `idea_activa`.
2. La derivación no es uno a uno y necesita registrar fusiones, descartes y preservaciones antes de serializar.
3. La validación reconstructiva debe ocurrir antes de perder la granularidad MTC.

El mapa no es una nueva arquitectura cognitiva, no se entrega a ACCD y no persiste por defecto. Es `ADAPTER-WORK://`.

## 7. Regla de mínima suficiencia

El adaptador debe ser tan pequeño como sea posible:

```text
si MTC ya puede obtener o validar una estructura
  → el adaptador la solicita;

si ACCD ya puede realizar una decisión de forma
  → el adaptador no la anticipa;

si una operación sólo existe al decidir qué debe convertirse en materia conceptual
  → pertenece al adaptador.
```

