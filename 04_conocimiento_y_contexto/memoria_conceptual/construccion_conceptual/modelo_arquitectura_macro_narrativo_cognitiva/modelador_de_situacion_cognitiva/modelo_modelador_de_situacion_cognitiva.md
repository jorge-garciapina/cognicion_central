# Modelo especializado — `modelador_de_situacion_cognitiva`

**Módulo del MAANC:** 7. `modelador_de_situacion_cognitiva`  
**Familia de uso:** análisis de arquitectura macro narrativo-cognitiva  
**Propósito:** reconstruir cómo un texto transforma progresivamente el modelo mental del receptor.  
**Estado:** modelo reutilizable para futuros textos.  

---

## 0. Advertencia de uso

Este documento contiene únicamente el **modelo**. No incluye aplicación a un texto particular. La aplicación a Carnegie se entrega en un segundo archivo separado.

La finalidad de esta separación es que este modelo pueda usarse como plantilla operativa para analizar otros textos: capítulos de libros, ensayos, discursos, transcripciones, guiones, clases, artículos o cualquier manifestación extensa que produzca una trayectoria de comprensión.

---

## 1. Definición general del módulo

El `modelador_de_situacion_cognitiva` es el módulo encargado de reconstruir cómo cambia el modelo mental del receptor mientras avanza por una manifestación.

No pregunta solamente:

```txt
¿Qué dice el texto?
```

Pregunta:

```txt
¿Qué pasa en la mente del receptor mientras el texto avanza?
¿Qué entiende ahora que antes no entendía?
Qué entidades cognitivas fueron introducidas?
Qué relaciones fueron activadas?
Qué inferencias se volvieron necesarias?
Qué presuposición fue debilitada, corregida o reemplazada?
Qué regla, criterio o disposición final queda instalada?
```

Su definición especializada es:

```txt
modelador_de_situacion_cognitiva =
módulo que reconstruye cómo un texto transforma progresivamente el modelo
mental del receptor, identificando entidades cognitivas activadas, tensiones
interpretativas, operadores de actualización, inferencias puente, cambios de
escala, reencuadres, modelos ejemplares, afectos activados y estado final de
comprensión.
```

Versión breve:

```txt
modelador_de_situacion_cognitiva =
rastreador de transformaciones del estado interpretativo del receptor.
```

Dentro del MAANC, su papel es convertir la arquitectura macro en una trayectoria interna:

```txt
arquitectura_macro
  → trayectoria externa de la manifestación
    → modelo_de_situacion_cognitiva
      → trayectoria interna del receptor
```

---

## 2. Diferencia con resumen, macroestructura y análisis temático

### 2.1. Resumen

Un resumen condensa lo que el texto dice.

```txt
resumen = contenido reducido
```

### 2.2. Macroestructura

La macroestructura organiza los grandes tramos del texto.

```txt
macroestructura = forma global del recorrido textual
```

### 2.3. Modelo de situación cognitiva

El modelo de situación cognitiva reconstruye cómo la comprensión del receptor cambia por efecto del texto.

```txt
modelo_de_situacion_cognitiva = transformación del estado interpretativo
```

Una misma sección puede tener un contenido superficial y una función cognitiva distinta.

```txt
contenido superficial:
  se cuenta una historia.

función cognitiva:
  desestabilizar una creencia inicial.
```

Por eso, el módulo no debe limitarse a resumir. Debe describir actualizaciones.

---

## 3. Objeto analítico del módulo

El objeto central del módulo no es la oración, el párrafo ni la sección visible. Su unidad fundamental es la **actualización cognitiva**.

Una actualización cognitiva ocurre cuando un tramo del texto modifica el modelo mental del receptor.

```txt
estado_antes
  → operación_cognitiva
    → estado_despues
```

Ejemplos de actualización:

```txt
introducir un concepto nuevo
corregir una creencia previa
mostrar una excepción
crear una oposición
convertir un caso en patrón
desplazar el foco explicativo
hacer necesaria una inferencia
activar una regla práctica
llevar una idea al plano emocional
cerrar una tensión interpretativa
```

El módulo debe identificar estas actualizaciones, nombrarlas y justificar su función dentro del recorrido global.

---

## 4. Supuestos teóricos del módulo

El módulo se apoya en una idea central: comprender un texto implica construir un modelo mental dinámico.

Ese modelo mental no contiene únicamente ideas aisladas. Contiene:

```txt
conceptos
agentes
procesos
causas
condiciones
consecuencias
oposiciones
categorías
escalas
contextos
normas
reglas de aplicación
expectativas
emociones funcionales
puntos de incertidumbre
inferencias implícitas
```

Cuando el texto avanza, este modelo se actualiza.

Por tanto, un análisis profundo debe reconstruir:

```txt
1. desde qué estado cognitivo parte el receptor;
2. qué entidades se activan;
3. qué tensiones aparecen;
4. qué operaciones modifican el modelo;
5. qué inferencias debe construir el receptor;
6. qué reencuadres transforman la interpretación;
7. qué estado final queda instalado.
```

---

## 5. Componentes internos del módulo

El módulo se compone de once subcomponentes:

```txt
modelador_de_situacion_cognitiva
  1. detector_de_estado_cognitivo_inicial
  2. inventario_de_entidades_cognitivas
  3. detector_de_tensiones_interpretativas
  4. analizador_de_actualizaciones_por_tramo
  5. clasificador_de_operadores_cognitivos
  6. rastreador_de_inferencias_puente
  7. modelador_de_reencuadres
  8. analizador_de_generalizacion
  9. analizador_de_transferencia_al_receptor
  10. constructor_de_estado_cognitivo_final
  11. validador_de_transformacion
```

Cada subcomponente cumple una tarea distinta.

---

## 6. `detector_de_estado_cognitivo_inicial`

### 6.1. Función

Reconstruir desde qué estado de comprensión parte el lector.

No se trata solamente de identificar cómo empieza el texto. Se trata de detectar qué forma de pensar presupone, activa o necesita transformar.

Preguntas:

```txt
¿Qué cree probablemente el receptor antes de leer?
Qué intuición común activa el texto?
Qué déficit cognitivo existe al inicio?
Qué expectativa inicial instala el primer tramo?
Qué confusión, tensión o presuposición será trabajada después?
```

### 6.2. Campos de salida

```yaml
estado_cognitivo_inicial:
  creencia_probable_del_receptor:
  presuposiciones_activadas:
  foco_inicial:
  disposicion_interpretativa:
  deficit_cognitivo:
  tension_inicial:
  objetivo_cognitivo_del_inicio:
```

### 6.3. Criterios de calidad

Un buen estado inicial debe:

```txt
1. estar inferido desde el texto;
2. no ser una opinión externa del analista;
3. explicar por qué el texto empieza como empieza;
4. preparar la trayectoria de transformación;
5. permitir comparar el estado inicial con el estado final.
```

---

## 7. `inventario_de_entidades_cognitivas`

### 7.1. Función

Identificar las entidades que el lector debe mantener activas para comprender el texto.

Estas entidades pueden ser:

```txt
personajes
actores históricos
instituciones
conceptos
mecanismos
fuerzas causales
categorías
oposiciones
procesos
valores
reglas
objetos simbólicos
```

### 7.2. Campos de salida

```yaml
entidades_cognitivas:
  personajes_o_casos:
  actores:
  conceptos:
  mecanismos:
  procesos:
  categorias:
  oposiciones:
  reglas_o_principios:
  afectos_activados:
```

### 7.3. Regla operativa

No basta con listar entidades. Hay que indicar su función.

```yaml
entidad:
  nombre:
  tipo:
  funcion_en_el_modelo:
  tramo_de_activacion:
  relaciones_principales:
```

---

## 8. `detector_de_tensiones_interpretativas`

### 8.1. Función

Detectar fricciones entre lo que el lector espera y lo que el texto muestra, afirma o transforma.

Una tensión interpretativa puede surgir cuando:

```txt
un caso contradice una intuición;
una afirmación desplaza una creencia;
un ejemplo produce sorpresa;
una categoría obliga a separar cosas confundidas;
un dato hace insuficiente la interpretación previa;
una regla práctica contradice un impulso común;
un texto mueve el foco desde el otro hacia el lector.
```

### 8.2. Campos de salida

```yaml
tensiones_interpretativas:
  - tension_id:
    expectativa_del_receptor:
    dato_o_movimiento_del_texto:
    oposicion_activada:
    efecto_cognitivo:
    tramo_asociado:
```

### 8.3. Tipos de tensión

```txt
culpa_objetiva_vs_autoimagen_subjetiva
intuicion_comun_vs_mecanismo_oculto
caso_extremo_vs_aplicacion_cotidiana
juicio_moral_vs_eficacia_practica
correccion_racional_vs_defensa_afectiva
conocimiento_abstracto_vs_internalizacion_emocional
```

---

## 9. `analizador_de_actualizaciones_por_tramo`

### 9.1. Función

Analizar cada tramo del texto como una operación que modifica el estado cognitivo del receptor.

### 9.2. Formato obligatorio

```yaml
actualizacion_por_tramo:
  tramo_id:
  rango_textual:
  contenido_superficial:
  estado_antes:
  operacion_cognitiva:
  informacion_introducida:
  relaciones_activadas:
  inferencias_requeridas:
  estado_despues:
  tipo_de_actualizacion:
  funcion_en_la_trayectoria_global:
```

### 9.3. Regla central

Cada tramo debe responder:

```txt
¿Qué cambia en el modelo mental del receptor gracias a este tramo?
```

Si un tramo no produce actualización, puede cumplir una función de:

```txt
sostener
recapitular
intensificar
preparar
transicionar
reparar
consolidar
```

Pero esa función también debe declararse.

---

## 10. `clasificador_de_operadores_cognitivos`

### 10.1. Función

Nombrar el tipo de operación que realiza cada tramo.

### 10.2. Operadores básicos

```txt
introduccion
activacion
especificacion
expansion
ejemplificacion
contraste
correccion
inversion
desplazamiento
integracion
inferencia
aplicacion
recapitulacion
clausura
apertura_proyectiva
```

### 10.3. Operadores especializados

Para análisis de textos extensos, conviene usar operadores más finos:

```txt
shock_ejemplar
acumulacion_ejemplificativa
universalizacion_del_patron
causalizacion_psicologica
sustitucion_operativa
expansion_de_escala
modelado_de_autocontrol
proyeccion_temporal_del_daño
reencuadre_antropologico
consolidacion_normativa
simulacion_emocional
condensacion_normativa
```

### 10.4. Campos de salida

```yaml
operadores_cognitivos:
  - operador_id:
    nombre:
    descripcion:
    tramo_asociado:
    funcion:
    efecto_sobre_el_receptor:
```

---

## 11. `rastreador_de_inferencias_puente`

### 11.1. Función

Identificar las inferencias que el lector debe construir para que el texto avance con coherencia.

No todo está dicho explícitamente. A menudo, el texto presenta casos, ejemplos o afirmaciones, y el lector debe unirlos.

### 11.2. Formato

```yaml
inferencias_puente:
  - inferencia_id:
    from:
    to:
    premisas:
    conclusion:
    grado_de_explicitud:
    funcion_en_la_trayectoria:
```

### 11.3. Tipos de inferencia

```txt
de caso a regla
de ejemplo a patrón
de causa a consecuencia
de contraste a distinción
de analogía a transferencia
de historia a principio
de principio a aplicación
de evidencia a tesis
de experiencia a norma
```

---

## 12. `modelador_de_reencuadres`

### 12.1. Función

Detectar cuándo el texto obliga al receptor a reinterpretar algo que ya había entendido.

Un reencuadre no añade solamente información nueva. Cambia el marco desde el cual se interpreta información previa.

### 12.2. Formato

```yaml
reencuadres:
  - reencuadre_id:
    marco_anterior:
    nuevo_marco:
    tramo_activador:
    elementos_reinterpretados:
    efecto_en_el_receptor:
```

### 12.3. Tipos de reencuadre

```txt
moral_a_psicologico
individual_a_general
caso_extremo_a_patron_humano
racional_a_afectivo
culpa_a_autojustificacion
critica_a_estimulo_defensivo
teoria_a_autovigilancia
```

---

## 13. `analizador_de_generalizacion`

### 13.1. Función

Rastrear cómo un texto pasa de un caso particular a una regla, patrón o principio general.

### 13.2. Formato

```yaml
generalizaciones:
  - generalizacion_id:
    caso_origen:
    mecanismo_de_generalizacion:
    principio_resultante:
    limites_de_la_generalizacion:
    funcion_en_el_texto:
```

### 13.3. Tipos

```txt
acumulacion_de_casos
analogía
contraste_repetido
autoridad_testimonial
experimento_o_evidencia
experiencia_personal
historia_ejemplar
```

---

## 14. `analizador_de_transferencia_al_receptor`

### 14.1. Función

Detectar cuándo el texto deja de hablar de otros y empieza a involucrar al lector.

Esto es crucial en textos persuasivos, didácticos, morales o prácticos.

### 14.2. Formato

```yaml
transferencia_al_receptor:
  punto_de_transferencia:
  mecanismo:
  de_quien_se_hablaba:
  hacia_quien_se_transfiere:
  efecto_en_el_receptor:
  nueva_responsabilidad_del_receptor:
```

### 14.3. Mecanismos frecuentes

```txt
pregunta_directa
segunda_persona
universalizacion
analogía_con_vida_cotidiana
ejemplo_intimo
regla_practica
apelacion_moral
```

---

## 15. `constructor_de_estado_cognitivo_final`

### 15.1. Función

Reconstruir qué comprensión, regla, disposición o modelo queda instalado al final del texto.

### 15.2. Campos de salida

```yaml
estado_cognitivo_final:
  comprension_resultante:
  transformacion_lograda:
  regla_internalizada:
  conceptos_estabilizados:
  tensiones_resueltas:
  tensiones_abiertas:
  disposicion_final_del_receptor:
  grado_de_clausura:
```

### 15.3. Regla de calidad

El estado final debe poder derivarse del recorrido. No debe aparecer como conclusión externa.

---

## 16. `validador_de_transformacion`

### 16.1. Función

Comprobar que el análisis realmente muestra una transformación cognitiva y no solo una descripción de contenido.

### 16.2. Checklist

```txt
[ ] Se identificó un estado cognitivo inicial.
[ ] Se identificaron entidades cognitivas activadas.
[ ] Se detectaron tensiones interpretativas.
[ ] Cada tramo relevante tiene estado antes y estado después.
[ ] Las operaciones cognitivas están nombradas.
[ ] Las inferencias puente están explícitas.
[ ] Se detectaron reencuadres, si existen.
[ ] Se explicó cómo ocurre la generalización.
[ ] Se identificó la transferencia al receptor, si existe.
[ ] El estado final deriva de los tramos previos.
[ ] El análisis no se limita a resumir el contenido.
```

---

## 17. Dimensiones del modelo de situación cognitiva

El módulo debe poder rastrear varias dimensiones. No todas aparecen en todos los textos.

```txt
1. conceptual
2. causal-explicativa
3. intencional
4. agentiva
5. temporal-procesual
6. espacial-contextual
7. categorial
8. contrastiva
9. inferencial
10. normativa-operativa
11. afectivo-atencional
12. metacognitiva
```

### 17.1. Dimensión conceptual

Registra conceptos activados y transformados.

```yaml
dimension_conceptual:
  conceptos_iniciales:
  conceptos_introducidos:
  conceptos_redefinidos:
  conceptos_estabilizados:
```

### 17.2. Dimensión causal-explicativa

Registra causas, efectos y mecanismos.

```yaml
dimension_causal_explicativa:
  causas_introducidas:
  consecuencias_derivadas:
  mecanismos_explicativos:
  inversiones_causales:
```

### 17.3. Dimensión intencional

Registra objetivos, motivos o direcciones.

```yaml
dimension_intencional:
  intenciones_de_actores:
  intencion_del_autor:
  intencion_atribuida_al_receptor:
```

### 17.4. Dimensión agentiva

Registra agentes humanos, institucionales o conceptuales.

```yaml
dimension_agentiva:
  agentes:
  acciones:
  responsabilidades:
  desplazamientos_de_agencia:
```

### 17.5. Dimensión temporal-procesual

Registra secuencias, fases, duración y persistencia.

```yaml
dimension_temporal_procesual:
  antes:
  durante:
  despues:
  persistencias:
  cambios_de_escala_temporal:
```

### 17.6. Dimensión espacial-contextual

Registra contextos, marcos o escenarios.

```yaml
dimension_espacial_contextual:
  escenarios:
  contextos_sociales:
  contextos_discursivos:
  cambios_de_contexto:
```

### 17.7. Dimensión categorial

Registra clasificaciones y distinciones.

```yaml
dimension_categorial:
  categorias:
  criterios_de_pertenencia:
  distinciones:
```

### 17.8. Dimensión contrastiva

Registra oposiciones.

```yaml
dimension_contrastiva:
  polos:
  funcion_del_contraste:
  resolucion_del_contraste:
```

### 17.9. Dimensión inferencial

Registra inferencias.

```yaml
dimension_inferencial:
  premisas:
  inferencias:
  conclusiones:
  grado_de_explicitud:
```

### 17.10. Dimensión normativa-operativa

Registra reglas, criterios y métodos.

```yaml
dimension_normativa_operativa:
  reglas:
  criterios:
  metodos:
  prohibiciones:
  recomendaciones:
```

### 17.11. Dimensión afectivo-atencional

Registra afectos funcionales y atención.

```yaml
dimension_afectivo_atencional:
  afectos_activados:
  cambios_de_disposicion:
  foco_atencional:
  intensidad:
```

### 17.12. Dimensión metacognitiva

Registra cambios en la forma en que el receptor entiende su propia comprensión.

```yaml
dimension_metacognitiva:
  toma_de_conciencia:
  autocorreccion:
  vigilancia_interpretativa:
  nueva_disposicion_reflexiva:
```

---

## 18. Tipos de actualización cognitiva

```txt
introduccion:
  aparece una entidad nueva.

activacion:
  se vuelve saliente algo que el receptor ya podía conocer.

especificacion:
  una entidad se vuelve más precisa.

expansion:
  se amplía el alcance de una idea.

ejemplificacion:
  se concreta una idea abstracta.

contraste:
  se separan dos posibilidades.

correccion:
  se repara una comprensión previa.

inversion:
  se invierte una relación causal o interpretativa.

desplazamiento:
  se mueve el foco desde un objeto a otro.

integracion:
  se unen elementos previamente separados.

inferencia:
  se deriva algo no dicho directamente.

aplicacion:
  se lleva una idea a un caso o uso.

recapitulacion:
  se recupera y ordena el recorrido.

clausura:
  se cierra una tensión.

apertura_proyectiva:
  se abre una continuación.
```

---

## 19. Formato completo de salida

```yaml
modelador_de_situacion_cognitiva:
  identificacion:
    texto:
    unidad_analizada:
    modo:
      - analitico
      - generativo

  estado_cognitivo_inicial:
    creencia_probable_del_receptor:
    presuposiciones_activadas:
    foco_inicial:
    disposicion_interpretativa:
    deficit_cognitivo:
    tension_inicial:
    objetivo_cognitivo_del_inicio:

  entidades_cognitivas:
    personajes_o_casos:
    actores:
    conceptos:
    mecanismos:
    procesos:
    categorias:
    oposiciones:
    reglas_o_principios:
    afectos_activados:

  tensiones_interpretativas:
    - tension_id:
      expectativa_del_receptor:
      dato_o_movimiento_del_texto:
      oposicion_activada:
      efecto_cognitivo:
      tramo_asociado:

  dimensiones_activas:
    conceptual:
    causal_explicativa:
    intencional:
    agentiva:
    temporal_procesual:
    espacial_contextual:
    categorial:
    contrastiva:
    inferencial:
    normativa_operativa:
    afectivo_atencional:
    metacognitiva:

  actualizaciones_por_tramo:
    - tramo_id:
      rango_textual:
      contenido_superficial:
      estado_antes:
      operacion_cognitiva:
      informacion_introducida:
      relaciones_activadas:
      inferencias_requeridas:
      estado_despues:
      tipo_de_actualizacion:
      funcion_en_la_trayectoria_global:

  operadores_cognitivos:
    - operador_id:
      nombre:
      descripcion:
      tramo_asociado:
      funcion:
      efecto_sobre_el_receptor:

  inferencias_puente:
    - inferencia_id:
      from:
      to:
      premisas:
      conclusion:
      grado_de_explicitud:
      funcion_en_la_trayectoria:

  reencuadres:
    - reencuadre_id:
      marco_anterior:
      nuevo_marco:
      tramo_activador:
      elementos_reinterpretados:
      efecto_en_el_receptor:

  generalizaciones:
    - generalizacion_id:
      caso_origen:
      mecanismo_de_generalizacion:
      principio_resultante:
      limites_de_la_generalizacion:
      funcion_en_el_texto:

  transferencia_al_receptor:
    punto_de_transferencia:
    mecanismo:
    de_quien_se_hablaba:
    hacia_quien_se_transfiere:
    efecto_en_el_receptor:
    nueva_responsabilidad_del_receptor:

  estado_cognitivo_final:
    comprension_resultante:
    transformacion_lograda:
    regla_internalizada:
    conceptos_estabilizados:
    tensiones_resueltas:
    tensiones_abiertas:
    disposicion_final_del_receptor:
    grado_de_clausura:

  validacion:
    coherencia_de_actualizaciones:
    cobertura_de_secciones:
    continuidad_del_modelo:
    puntos_de_salto:
    inferencias_no_soportadas:
```

---

## 20. Procedimiento de aplicación

### Paso 1. Leer el texto completo

No analizar sólo el inicio. El estado inicial se entiende mejor cuando se conoce el estado final.

### Paso 2. Identificar la regla, tesis o transformación final

Antes de mapear tramos, detectar hacia dónde conduce el texto.

### Paso 3. Inferir el estado cognitivo inicial

Reconstruir qué creencia o disposición necesita transformar el texto.

### Paso 4. Inventariar entidades cognitivas

Identificar personajes, conceptos, oposiciones, mecanismos y reglas.

### Paso 5. Dividir en tramos funcionales

La división no depende únicamente de subtítulos. Depende de cambios de operación cognitiva.

### Paso 6. Analizar cada tramo

Para cada tramo: estado antes, operación, información, inferencias, estado después.

### Paso 7. Detectar operadores cognitivos

Nombrar las operaciones: shock ejemplar, contraste, generalización, etc.

### Paso 8. Rastrear inferencias puente

Explicitar conclusiones que el lector debe construir.

### Paso 9. Detectar reencuadres

Ver dónde el texto obliga a reinterpretar algo ya leído.

### Paso 10. Construir trayectoria global

Unir los tramos en una curva de transformación.

### Paso 11. Formular estado final

Definir qué comprensión queda instalada.

### Paso 12. Validar

Comprobar que cada tramo aporta al cambio global.

---

## 21. Relación con arquitectura macro

El `modelador_de_situacion_cognitiva` no reemplaza la arquitectura macro. La profundiza.

```txt
arquitectura_macro:
  describe cómo evoluciona la manifestación.

modelador_de_situacion_cognitiva:
  describe cómo evoluciona el modelo mental del receptor.
```

Ambos deben relacionarse así:

```txt
sección_macro
  → responsabilidad_narrativa
    → operación_cognitiva
      → actualización_del_modelo_de_situación
        → cambio_en_estado_interpretativo
```

---

## 22. Relación con procesamiento estructural

El módulo permite enriquecer los mNodes con efectos cognitivos.

```yaml
mnode_id:
familia_cognitiva:
formulacion:
rol_operativo:
efecto_en_modelo_de_situacion:
  estado_antes:
  actualizacion:
  estado_despues:
```

Esto evita que el procesamiento estructural produzca sólo una lista de ideas. Permite ubicar cada nodo dentro de la transformación del receptor.

---

## 23. Criterios de calidad

Una buena aplicación del módulo debe:

```txt
1. identificar un estado inicial plausible;
2. no confundir contenido con efecto cognitivo;
3. mostrar actualizaciones tramo por tramo;
4. nombrar operadores cognitivos específicos;
5. rastrear inferencias puente;
6. detectar reencuadres;
7. explicar generalizaciones;
8. indicar transferencia al receptor;
9. formular estado final derivado del recorrido;
10. validar la continuidad de la transformación.
```

---

## 24. Errores comunes

### Error 1. Resumir en lugar de modelar

Incorrecto:

```txt
El texto dice que no hay que criticar.
```

Correcto:

```txt
El texto transforma la creencia de que la crítica corrige en la comprensión de
que la crítica activa defensa, resentimiento y autojustificación.
```

### Error 2. Tratar ejemplos como adornos

Incorrecto:

```txt
El texto da un ejemplo.
```

Correcto:

```txt
El ejemplo funciona como shock ejemplar que destruye la expectativa inicial del receptor.
```

### Error 3. No distinguir información de inferencia

Incorrecto:

```txt
El texto dice X, por lo tanto el receptor entiende Y.
```

Correcto:

```txt
El texto dice X. Para llegar a Y, el receptor debe construir la inferencia Z.
```

### Error 4. No registrar reencuadres

Incorrecto:

```txt
Después aparece otra idea.
```

Correcto:

```txt
El texto reencuadra lo anterior: lo que parecía problema moral se vuelve mecanismo psicológico.
```

---

## 25. Fórmula final del módulo

```txt
texto
  → estado_cognitivo_inicial
    → entidades_activadas
      → tensiones_interpretativas
        → actualizaciones_por_tramo
          → operadores_cognitivos
            → inferencias_puente
              → reencuadres
                → estado_cognitivo_final
```

En clave ACCD:

```txt
arquitectura_macro
  → evolución de la manifestación
    → modelador_de_situacion_cognitiva
      → evolución interna del receptor
```

---

## 26. Resultado esperado

El resultado no debe ser un resumen del texto. Debe ser una reconstrucción de la transformación cognitiva que el texto produce.

```txt
El módulo está bien aplicado cuando permite responder:

¿Cómo empieza pensando el receptor?
Qué hace cada tramo para modificarlo?
Qué inferencias construye?
Qué reencuadres ocurren?
Qué comprensión final queda instalada?
```
