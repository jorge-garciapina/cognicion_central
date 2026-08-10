# Modelo especializado — `analizador_de_relaciones_retóricas`

**Módulo:** 5 del MAANC — Modelo de Arquitectura Macro Narrativo-Cognitiva  
**Nombre operativo:** `analizador_de_relaciones_retóricas`  
**Función general:** convertir secciones, subsecciones y unidades locales de un texto en un **grafo de relaciones funcionales** que explique cómo cada parte contribuye a la evolución narrativo-cognitiva global.

---

## 0. Propósito del módulo

El `analizador_de_relaciones_retóricas` no identifica únicamente “partes” del texto. Su tarea principal es identificar **responsabilidades conectadas**.

Un análisis superficial diría:

```txt
SEC_01: introducción
SEC_02: ejemplo
SEC_03: explicación
SEC_04: conclusión
```

El módulo especializado debe decir:

```txt
SEC_01 prepara el problema que SEC_02 ejemplifica.
SEC_02 funciona como caso ancla de la tesis que SEC_03 generaliza.
SEC_04 no sólo concluye: condensa la inferencia producida por SEC_02 y SEC_03.
```

Por tanto, este módulo transforma una arquitectura macro lineal en una estructura relacional:

```txt
segmentos detectados
  → relaciones funcionales
    → grafo retórico
      → trayectoria narrativo-cognitiva explicada
```

---

## 1. Lugar dentro del MAANC

El módulo se ubica después de que otros módulos ya han detectado unidades, macroproposiciones o trayectoria general.

```txt
1. extractor_de_macroestructura
2. detector_de_estructura_expositiva
3. segmentador_funcional
4. constructor_de_trayectoria_narrativa
5. analizador_de_relaciones_retóricas
```

Este módulo recibe unidades relativamente delimitadas y pregunta:

```txt
¿Qué hace una unidad respecto de otra?
¿Qué unidad porta el núcleo de sentido?
Qué unidad apoya, prepara, contrasta, evidencia o reformula?
Qué conexiones locales y transversales sostienen la arquitectura macro?
```

---

## 2. Definición técnica

```txt
analizador_de_relaciones_retóricas =
constructor de aristas funcionales entre unidades narrativo-cognitivas.
```

O, de forma más completa:

```txt
Módulo que identifica, clasifica, jerarquiza y justifica las relaciones funcionales
entre unidades textuales, determinando qué unidades actúan como núcleos,
cuáles como satélites, qué relaciones multinucleares existen, y cómo esas
relaciones contribuyen a la evolución narrativo-cognitiva global.
```

---

## 3. Distinción fundamental: relación retórica ≠ tema compartido

Dos unidades pueden hablar del mismo tema sin tener la misma relación retórica.

Ejemplo abstracto:

```txt
Unidad A habla de crítica.
Unidad B también habla de crítica.
```

Eso no basta. El módulo debe decidir si B:

```txt
elabora A,
ejemplifica A,
contrasta A,
justifica A,
refuta A,
reformula A,
resume A,
prepara una inferencia posterior,
o abre una aplicación práctica.
```

La relación retórica no se determina por coincidencia temática, sino por **función de dependencia** dentro del avance del texto.

---

## 4. Unidad mínima de análisis

El módulo puede operar en cuatro niveles.

```txt
nivel macro:
  relaciones entre grandes secciones del texto.

nivel meso:
  relaciones entre subsecciones dentro de una sección.

nivel micro:
  relaciones entre párrafos, ejemplos, frases, citas o inferencias locales.

nivel transversal:
  relaciones entre unidades no contiguas, por ejemplo una conclusión que cierra
  una tensión abierta muchas páginas antes.
```

La unidad no se define por extensión, sino por función. Una sola frase puede ser una unidad si cumple una responsabilidad clara. Un conjunto de páginas puede ser una unidad si sostiene una misma función macro.

---

## 5. Objeto `unidad_retórica`

Toda unidad que entra al módulo debe representarse así:

```yaml
unidad_retórica:
  unit_id:
  nivel:
    - macro
    - meso
    - micro
    - transversal
  rango_textual:
  formulacion_resumida:
  responsabilidad_narrativo_cognitiva:
  familia_cognitiva_probable:
  macroproposicion_asociada:
  marcas_textuales_relevantes:
  estado_cognitivo_de_entrada:
  estado_cognitivo_de_salida:
```

### Componentes

#### `unit_id`
Identificador estable de la unidad.

Ejemplo:

```txt
SEC_01
SUB_03_A
MICRO_07
```

#### `nivel`
Indica si la unidad pertenece al nivel macro, meso, micro o transversal.

#### `rango_textual`
Ubicación en el texto: páginas, párrafos, líneas, subtítulos o fragmentos.

#### `formulacion_resumida`
Resumen de lo que la unidad dice.

#### `responsabilidad_narrativo_cognitiva`
Lo que la unidad hace dentro del recorrido.

Ejemplos:

```txt
instalar problema
presentar caso extremo
generalizar desde casos
aportar respaldo psicológico
contraponer método fallido y método eficaz
modelar alternativa positiva
condensar regla normativa
```

#### `familia_cognitiva_probable`
Familia funcional dominante.

Ejemplos:

```txt
caso_ancla
generalización
contraste
justificación
analogía
ejemplo
inferencía
regla
cierre
```

#### `estado_cognitivo_de_entrada` / `estado_cognitivo_de_salida`
Permite conectar este módulo con el modelador de situación cognitiva.

---

## 6. Objeto `relacion_retórica`

La salida central del módulo es una colección de relaciones.

```yaml
relacion_retórica:
  relation_id:
  from:
  to:
  tipo_de_relacion:
  familia_de_relacion:
  nuclearidad:
    tipo:
    nucleo:
    satelite:
  direccion:
    linealidad:
    dependencia:
  alcance:
    nivel:
    unidades_afectadas:
  funcion_en_la_arquitectura_macro:
  efecto_en_el_receptor:
  evidencia_textual:
  marcas_discursivas:
  inferencia_necesaria:
  confianza:
    nivel:
    razon:
```

### `from` y `to`
Indican las unidades conectadas. La dirección no siempre equivale al orden textual. Una sección final puede cerrar una sección inicial.

### `tipo_de_relacion`
Nombre fino de la relación: elaboración, evidencia, contraste, concesión, preparación, resumen, etc.

### `familia_de_relacion`
Agrupación mayor: expansión, soporte, contraste, preparación, consecuencia, organización, evaluación, aplicación.

### `nuclearidad`
Indica si la relación es núcleo-satélite o multinuclear.

### `alcance`
Aclara si la relación opera entre párrafos, subsecciones, secciones o zonas completas.

### `funcion_en_la_arquitectura_macro`
Explica para qué sirve la relación dentro del recorrido global.

### `efecto_en_el_receptor`
Explica cómo la relación modifica la comprensión del lector.

---

## 7. Nuclearidad

La nuclearidad distingue entre unidades centrales y unidades auxiliares.

```txt
núcleo = unidad que porta la responsabilidad principal del tramo.
satélite = unidad que apoya, prepara, aclara, evidencia, contrasta o expande.
```

### Criterios para identificar núcleo

Una unidad tiende a ser núcleo si:

```txt
1. Si se elimina, el propósito principal del tramo se pierde.
2. Porta la tesis, distinción, inferencia o movimiento principal.
3. Otras unidades dependen de ella.
4. Es retomada o elaborada posteriormente.
5. Produce cambio reconocible en la trayectoria global.
```

### Criterios para identificar satélite

Una unidad tiende a ser satélite si:

```txt
1. Su función es apoyar una unidad más central.
2. Ejemplifica, justifica, prepara, contextualiza o reformula.
3. Puede eliminarse sin destruir totalmente la tesis local.
4. Su sentido depende de una unidad principal.
5. Opera como recurso local de comprensión.
```

### Relaciones multinucleares

Algunas relaciones no tienen núcleo y satélite. Dos o más unidades tienen peso similar.

Ejemplos:

```txt
contraste entre dos posiciones
lista de elementos equivalentes
secuencia de pasos coordinados
comparación simétrica
alternativa A / alternativa B
```

---

## 8. Inventario especializado de familias de relación

El módulo utiliza familias de relación para evitar una taxonomía plana.

```txt
familias_de_relacion:
  1. expansión
  2. soporte
  3. contraste
  4. preparación
  5. consecuencia
  6. organización
  7. evaluación
  8. aplicación / transferencia
  9. reentrada / cierre transversal
```

---

## 9. Familia 1: Relaciones de expansión

Las relaciones de expansión hacen crecer una unidad sin cambiar radicalmente su dirección.

### 9.1. Elaboración

Una unidad desarrolla o amplía otra.

```yaml
tipo_de_relacion: elaboracion
funcion: ampliar el contenido de una unidad nuclear
pregunta_diagnostica: ¿esta unidad añade detalle a una idea ya planteada?
```

### 9.2. Especificación

Una unidad vuelve más precisa otra.

```yaml
tipo_de_relacion: especificacion
funcion: reducir ambigüedad o delimitar alcance
pregunta_diagnostica: ¿esta unidad acota lo dicho anteriormente?
```

### 9.3. Reformulación

Una unidad expresa lo anterior de otra manera.

```yaml
tipo_de_relacion: reformulacion
funcion: hacer accesible una idea mediante otra formulación
marcadores: dicho de otro modo, es decir, en otras palabras
```

### 9.4. Ejemplificación

Una unidad ofrece un caso concreto.

```yaml
tipo_de_relacion: ejemplificacion
funcion: particularizar una abstracción
marcadores: por ejemplo, tomemos el caso, consideremos
```

### 9.5. Analogía

Una unidad traslada una estructura desde otro dominio.

```yaml
tipo_de_relacion: analogia
funcion: transferir comprensión estructural
pregunta_diagnostica: ¿se usa un dominio fuente para entender otro?
```

---

## 10. Familia 2: Relaciones de soporte

Las relaciones de soporte aumentan aceptabilidad, credibilidad o fuerza epistémica.

### 10.1. Evidencia

Una unidad aporta prueba, caso, dato o testimonio.

```yaml
tipo_de_relacion: evidencia
funcion: sostener una afirmación
pregunta_diagnostica: ¿esta unidad hace más creíble una tesis?
```

### 10.2. Justificación

Una unidad explica por qué la tesis debe aceptarse.

```yaml
tipo_de_relacion: justificacion
funcion: dar razón de aceptabilidad
pregunta_diagnostica: ¿esta unidad explica por qué el lector debería aceptar lo anterior?
```

### 10.3. Autoridad

Una unidad apela a una fuente reconocida.

```yaml
tipo_de_relacion: autoridad
funcion: transferir peso epistémico desde una figura o institución
```

### 10.4. Respaldo psicológico / científico

Una unidad invoca teoría, experimento o principio psicológico.

```yaml
tipo_de_relacion: respaldo_psicologico
funcion: convertir una observación narrativa en ley psicológica o regularidad humana
```

---

## 11. Familia 3: Relaciones de contraste

Las relaciones de contraste producen diferenciación, tensión o reencuadre.

### 11.1. Contraste

Dos unidades muestran diferencias relevantes.

```yaml
tipo_de_relacion: contraste
nuclearidad: multinuclear
funcion: producir distinción cognitiva
```

### 11.2. Antítesis

Una unidad se opone directamente a otra.

```yaml
tipo_de_relacion: antitesis
funcion: hacer visible una oposición fuerte
```

### 11.3. Concesión

Una unidad admite parcialmente algo que podría debilitar la tesis, pero la tesis se mantiene.

```yaml
tipo_de_relacion: concesion
funcion: incorporar una objeción sin ceder el núcleo argumental
```

### 11.4. Corrección

Una unidad corrige una expectativa o interpretación previa.

```yaml
tipo_de_relacion: correccion
funcion: reemplazar una lectura por otra
```

### 11.5. Contraejemplo

Una unidad muestra un caso que contradice una generalización o expectativa.

```yaml
tipo_de_relacion: contraejemplo
funcion: limitar o refutar una interpretación
```

---

## 12. Familia 4: Relaciones de preparación

Preparan al receptor para recibir una unidad posterior.

### 12.1. Background

Aporta contexto.

```yaml
tipo_de_relacion: background
funcion: dar información previa necesaria
```

### 12.2. Orientación

Sitúa al lector en escena, problema o marco.

```yaml
tipo_de_relacion: orientacion
funcion: abrir el campo de comprensión
```

### 12.3. Preparación atencional

Crea expectativa.

```yaml
tipo_de_relacion: preparacion_atencional
funcion: predisponer al receptor a valorar lo que sigue
```

### 12.4. Pregunta preparatoria

Una pregunta abre necesidad de respuesta.

```yaml
tipo_de_relacion: pregunta_preparatoria
funcion: producir vacío cognitivo que una unidad posterior llena
```

---

## 13. Familia 5: Relaciones de consecuencia

Establecen dependencia causal, lógica, pragmática o inferencial.

### 13.1. Causa

Una unidad explica por qué ocurre otra.

### 13.2. Resultado

Una unidad presenta el efecto de otra.

### 13.3. Consecuencia normativa

Una unidad deriva una regla, recomendación o deber práctico.

### 13.4. Condición

Una unidad establece condición de validez para otra.

### 13.5. Inferencia

Una unidad extrae una conclusión de unidades previas.

```yaml
tipo_de_relacion: inferencia
funcion: transformar material previo en conclusión nueva
```

---

## 14. Familia 6: Relaciones de organización

Ordenan el recorrido.

### 14.1. Lista

Unidades equivalentes se presentan como serie.

### 14.2. Secuencia

Unidades se encadenan temporal o procedimentalmente.

### 14.3. Transición

Una unidad conecta dos zonas funcionales.

### 14.4. Recapitulación

Una unidad recupera material previo.

### 14.5. Resumen

Una unidad condensa varias unidades previas.

### 14.6. Cierre

Una unidad clausura un tramo.

---

## 15. Familia 7: Relaciones de evaluación

Asignan importancia, valor, peligro, utilidad o relevancia.

### 15.1. Relevancia

La unidad explica por qué algo importa.

### 15.2. Evaluación moral

La unidad valora una acción o actitud.

### 15.3. Evaluación pragmática

La unidad valora por utilidad, eficacia, riesgo o resultado práctico.

### 15.4. Intensificación

La unidad aumenta peso emocional o cognitivo.

---

## 16. Familia 8: Relaciones de aplicación / transferencia

Trasladan una tesis hacia acción, método o regla.

### 16.1. Aplicación práctica

Una unidad muestra cómo usar una idea.

### 16.2. Recomendación

Una unidad indica qué hacer.

### 16.3. Regla

Una unidad condensa la trayectoria en principio operativo.

### 16.4. Transferencia de dominio

Una unidad traslada una comprensión desde un caso a otro contexto.

---

## 17. Familia 9: Reentrada / cierre transversal

Relaciones que conectan zonas distantes.

### 17.1. Retorno temático

Una unidad final retoma una tensión inicial.

### 17.2. Cierre de arco

Una unidad clausura una trayectoria abierta antes.

### 17.3. Recontextualización

Una unidad posterior cambia el sentido de una unidad anterior.

### 17.4. Resonancia

Una unidad no depende formalmente de otra, pero reproduce su patrón emocional o cognitivo.

---

## 18. Procedimiento operativo

### Paso 1. Preparar unidades

Tomar las secciones y subsecciones del módulo de segmentación funcional. Si no existen, proponer unidades provisionales.

### Paso 2. Identificar pares candidatos

Para cada unidad, preguntar:

```txt
¿Esta unidad depende de otra?
¿Esta unidad sostiene otra?
¿Esta unidad responde a una pregunta previa?
¿Esta unidad prepara una unidad posterior?
¿Esta unidad contrasta con otra?
¿Esta unidad cierra una tensión previa?
```

### Paso 3. Clasificar relación

Asignar tipo de relación y familia.

### Paso 4. Determinar nuclearidad

Decidir si la relación es núcleo-satélite o multinuclear.

### Paso 5. Determinar alcance

Identificar si la relación es micro, meso, macro o transversal.

### Paso 6. Justificar con evidencia

Registrar marcas textuales, señales discursivas, repetición conceptual o inferencia necesaria.

### Paso 7. Construir grafo retórico

Crear nodos y aristas.

### Paso 8. Validar trayectoria

Comprobar si el grafo explica la evolución cognitiva del texto.

---

## 19. Heurísticas de detección

### Marcadores de ejemplificación

```txt
por ejemplo
tomemos el caso
consideremos
como muestra
```

### Marcadores de contraste

```txt
pero
en cambio
sin embargo
a diferencia de
no obstante
```

### Marcadores de consecuencia

```txt
por consiguiente
por eso
de modo que
esto implica
entonces
```

### Marcadores de reformulación

```txt
es decir
dicho de otro modo
en otras palabras
lo que quiero decir
```

### Marcadores de resumen

```txt
en síntesis
en suma
en resumen
lo importante es
```

### Marcadores de preparación

```txt
antes de
para entender esto
recordemos
conviene mirar
```

Las marcas ayudan, pero no son obligatorias. Una relación puede estar implícita.

---

## 20. Errores frecuentes

### Error 1: confundir orden con relación

Que B venga después de A no significa que B elabore A.

### Error 2: llamar “ejemplo” a todo caso narrativo

Un caso puede funcionar como evidencia, contraste, analogía, preparación emocional o cierre.

### Error 3: no distinguir núcleo y satélite

Sin nuclearidad, el grafo pierde jerarquía.

### Error 4: analizar sólo relaciones locales

Muchos textos tienen relaciones transversales: el final cierra algo abierto al inicio.

### Error 5: ignorar función en el receptor

Toda relación debe explicar su efecto cognitivo: aclarar, intensificar, desplazar, estabilizar, tensionar, reencuadrar.

---

## 21. Salida estándar del módulo

```yaml
analisis_de_relaciones_retóricas:
  unidad_analizada:
    titulo:
    tipo_de_texto:
    escala:

  inventario_de_unidades:
    - unit_id:
      nivel:
      rango_textual:
      formulacion_resumida:
      responsabilidad_narrativo_cognitiva:
      familia_cognitiva_probable:

  relaciones:
    - relation_id:
      from:
      to:
      tipo_de_relacion:
      familia_de_relacion:
      nuclearidad:
        tipo:
        nucleo:
        satelite:
      direccion:
        linealidad:
        dependencia:
      alcance:
      funcion_en_la_arquitectura_macro:
      efecto_en_el_receptor:
      evidencia_textual:
      confianza:
        nivel:
        razon:

  grafo_retórico:
    nodos:
    aristas:
    agrupamientos:

  diagnostico_global:
    patron_retórico_dominante:
    relaciones_dominantes:
    grado_de_jerarquia:
    grado_de_ramificacion:
    zonas_de_ambiguedad:
    funcion_del_modulo_en_la_arquitectura_macro:
```

---

## 22. Criterios de validación

El análisis es aceptable si cumple estos criterios:

```txt
1. Cada unidad macro tiene al menos una relación entrante o saliente.
2. Cada relación tiene tipo, familia y función.
3. Las relaciones núcleo-satélite distinguen unidad central y unidad auxiliar.
4. Las relaciones multinucleares se usan cuando hay coordinación real.
5. Hay evidencia textual o inferencial para cada relación.
6. Se detectan relaciones transversales cuando existen.
7. El grafo explica mejor el texto que una lista lineal.
8. El análisis muestra cómo las relaciones producen evolución cognitiva.
9. Se registran ambigüedades cuando no puede decidirse una relación.
10. La salida puede integrarse a la arquitectura macro del MAANC.
```

---

## 23. Integración con ACCD/TMC

En ACCD, este módulo se interpreta como un **constructor de aristas entre unidades cognitivas**.

```txt
secciones / subsecciones / ejemplos / inferencias
  → nodos cognitivos

relaciones retóricas
  → aristas funcionales

arquitectura macro
  → grafo narrativo-cognitivo jerárquico
```

La función profunda del módulo es permitir que una arquitectura macro no sea sólo una secuencia, sino una red de responsabilidades.

```txt
arquitectura_macro =
trayectoria + nodos + aristas + jerarquías + responsabilidades + transformación del receptor
```

---

## 24. Fórmula final del módulo

```txt
analizador_de_relaciones_retóricas:
  unidades funcionales detectadas
    → relaciones retóricas clasificadas
      → nuclearidad y jerarquía
        → grafo retórico
          → explicación de la evolución narrativo-cognitiva
```

Definición mínima:

```txt
relaciones retóricas = aristas de responsabilidad entre unidades cognitivas.
```
