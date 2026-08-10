https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0f8e61-a4ec-83e8-8a05-f5f286edde8a

# Modelo especializado — `detector_de_estructura_expositiva`

**Pertenece a:** MAANC — Modelo de Arquitectura Macro Narrativo-Cognitiva  
**Función:** reconstruir cómo un texto hace comprender una idea mediante operaciones expositivas, soportes, agrupamientos, conexiones, responsabilidades cognitivas y transformaciones del estado interpretativo del receptor.  
**Uso previsto:** análisis de capítulos, ensayos, artículos, transcripciones, discursos, clases, guiones y cualquier manifestación donde el avance principal no sea necesariamente narrativo-eventual, sino expositivo-conceptual.  
**Tipo de documento:** modelo reusable.  
**Importante:** este documento no contiene aplicación a un texto concreto. Su propósito es definir el modelo general.

---

## 1. Problema que resuelve el módulo

Un análisis superficial suele clasificar un texto con etiquetas generales como:

```txt
texto descriptivo
texto comparativo
texto de causa-efecto
texto de problema-solución
texto secuencial
```

Ese nivel puede ser útil como primera aproximación, pero no permite reconstruir la arquitectura real de un capítulo o de una exposición compleja. Muchos textos no se organizan de manera pura. Un mismo capítulo puede abrir con una anécdota, generalizar desde esa anécdota, formular un principio, validarlo con autoridad, acumular ejemplos, introducir un modelo positivo, interpelar al lector y terminar con una regla práctica.

El `detector_de_estructura_expositiva` resuelve este problema porque no se limita a etiquetar el texto; reconstruye el mecanismo mediante el cual el texto **enseña, prueba, desplaza, generaliza, ejemplifica, corrige, interioriza o convierte una idea en regla práctica**.

La pregunta central del módulo no es:

```txt
¿Qué tipo de texto es?
```

sino:

```txt
¿Cómo hace este texto para producir comprensión?
```

---

## 2. Definición especializada

```txt
detector_de_estructura_expositiva =
módulo que reconstruye la arquitectura funcional mediante la cual un texto
organiza conocimiento, produce comprensión y transforma el estado interpretativo
del receptor.
```

En términos del MAANC:

```txt
detector_de_estructura_expositiva =
submódulo que detecta la trayectoria expositiva de una manifestación,
identificando operaciones, responsabilidades, conexiones, soportes y agrupamientos.
```

En términos de la ACCD:

```txt
detector_de_estructura_expositiva =
mecanismo que convierte un texto en una estructura expositiva auditable,
compatible con arquitectura_macro, familias cognitivas, procesamiento estructural
y futuras manifestaciones codominiales.
```

---

## 3. Tesis nuclear del módulo

Todo texto expositivo puede analizarse como una trayectoria de transformación cognitiva.

```txt
estado cognitivo inicial
  → operaciones expositivas
    → agrupamientos y conexiones
      → transformación interpretativa
        → estado cognitivo final
```

El texto no sólo contiene información. Organiza una experiencia de comprensión. Por eso, cada tramo textual debe analizarse según su responsabilidad dentro del recorrido.

Ejemplos de responsabilidades:

```txt
abrir una dificultad
estabilizar un concepto
definir un criterio
mostrar un caso
convertir un caso en patrón
probar una tesis
contrastar dos modos de entender algo
explicar una causa
presentar una consecuencia
introducir una solución
modelar una conducta
transferir una idea al lector
interiorizar emocionalmente un principio
cerrar con una regla
```

---

## 4. Diferencia entre forma superficial y función expositiva

Una de las distinciones centrales del modelo es separar:

```txt
forma superficial
  = cómo aparece el tramo en la superficie textual.

función expositiva
  = qué hace ese tramo dentro de la comprensión.
```

La misma forma superficial puede cumplir funciones muy distintas.

| Forma superficial | Posibles funciones expositivas                                                         |
| ----------------- | -------------------------------------------------------------------------------------- |
| Anécdota          | caso extremo, ejemplo, contraejemplo, prueba, apertura, interiorización emocional      |
| Cita              | autoridad, transición, condensación, legitimación, cierre                              |
| Lista             | colección, clasificación, acumulación probatoria, inventario de opciones               |
| Historia breve    | ejemplificación, modelo positivo, modelo negativo, analogía, intensificación emocional |
| Pregunta retórica | apertura de problema, interpelación, cambio de foco, transferencia al lector           |
| Definición        | estabilización conceptual, delimitación, criterio de pertenencia                       |
| Comparación       | distinción, contraste, diagnóstico, jerarquización                                     |
| Regla             | cierre normativo, síntesis práctica, instrucción memorizable                           |

Por eso, el módulo no debe decir solamente:

```txt
Aquí hay una anécdota.
```

Debe decir:

```yaml
forma_superficial: anecdota
operacion_expositiva: caso_extremo
responsabilidad_cognitiva: romper expectativa inicial
funcion_macro: preparar generalización posterior
```

---

## 5. Niveles de análisis

El detector trabaja en seis niveles.

```txt
Nivel 1. Superficie textual
Nivel 2. Operación expositiva
Nivel 3. Responsabilidad cognitiva
Nivel 4. Función macro
Nivel 5. Conexión funcional
Nivel 6. Transformación del receptor
```

### 5.1. Nivel 1 — Superficie textual

Identifica la forma visible del tramo:

```txt
anécdota
cita
definición
ejemplo
caso histórico
mini-historia
comparación
pregunta retórica
afirmación general
consejo directo
regla
clasificación
secuencia de pasos
explicación causal
```

### 5.2. Nivel 2 — Operación expositiva

Detecta qué operación realiza el tramo:

```txt
abrir problema
definir concepto
generalizar desde caso
validar por autoridad
probar por acumulación
comparar
contrastar
explicar mecanismo
mostrar consecuencia
ofrecer modelo positivo
ofrecer modelo negativo
transferir al lector
interiorizar emocionalmente
normativizar
```

### 5.3. Nivel 3 — Responsabilidad cognitiva

Determina qué cambio produce en la comprensión:

```txt
hacer visible un patrón
desactivar una intuición errónea
crear tensión conceptual
estabilizar una distinción
aumentar plausibilidad
convertir una idea en experiencia
preparar una inferencia
mostrar aplicabilidad
activar reconocimiento personal
```

### 5.4. Nivel 4 — Función macro

Ubica el tramo dentro de la arquitectura global:

```txt
apertura
generalización
formulación de principio
validación
acumulación
contraste
modelo
transferencia
interiorización
cierre
remate
proyección
```

### 5.5. Nivel 5 — Conexión funcional

Describe cómo un tramo se conecta con otro:

```txt
prepara
amplía
ejemplifica
generaliza
contrasta
refuta
explica
causa
deriva
condiciona
integra
transfiere
cierra
```

### 5.6. Nivel 6 — Transformación del receptor

Reconstruye el cambio global:

```yaml
estado_cognitivo_inicial: qué cree, desconoce, confunde o presupone el receptor al inicio.

transformaciones: cómo cada tramo modifica ese estado.

estado_cognitivo_final: qué entiende, distingue, acepta, siente o está preparado para hacer al final.
```

---

## 6. Unidad básica de análisis

El módulo trabaja con `unidad_expositiva`.

```yaml
unidad_expositiva:
  id:
  rango_textual:
  forma_superficial:
  operacion_expositiva:
  responsabilidad_cognitiva:
  funcion_macro:
  soporte_utilizado:
  relacion_con_unidades_previas:
  relacion_con_unidades_siguientes:
  salida_cognitiva:
  evidencia_textual_breve:
```

### 6.1. `id`

Identificador estable de la unidad.

Ejemplo:

```txt
UEX_01
UEX_02
SEC_01
SEC_01_SUB_01
```

### 6.2. `rango_textual`

Ubicación aproximada dentro del texto.

Puede ser:

```txt
página
párrafo
sección
minuto de transcripción
líneas
fragmento delimitado
```

### 6.3. `forma_superficial`

Forma visible del tramo.

### 6.4. `operacion_expositiva`

Operación que realiza para hacer avanzar la comprensión.

### 6.5. `responsabilidad_cognitiva`

Cambio cognitivo que debe producir.

### 6.6. `funcion_macro`

Lugar funcional dentro de la trayectoria global.

### 6.7. `soporte_utilizado`

Tipo de material usado para sostener la exposición.

```txt
caso extremo
caso histórico
autoridad científica
ejemplo personal
mini-historia emocional
regla
analogía
estadística
cita
experimento
```

### 6.8. `relacion_con_unidades_previas` y `relacion_con_unidades_siguientes`

Conexiones que permiten reconstruir el grafo.

### 6.9. `salida_cognitiva`

Qué debe haber cambiado en el receptor al terminar esa unidad.

### 6.10. `evidencia_textual_breve`

Fragmento breve o paráfrasis del texto que justifica el diagnóstico.

---

## 7. Repertorio especializado de operaciones expositivas

Este repertorio no es cerrado, pero sirve como base operativa.

### 7.1. Apertura por caso extremo

Se usa cuando el texto abre con un caso dramático, llamativo o límite.

```yaml
operacion: apertura_por_caso_extremo
funcion: capturar atención y preparar una generalización
responsabilidad: hacer visible un fenómeno en su forma más intensa
riesgo_analitico: confundir el caso con una narración autónoma
```

### 7.2. Anomalía conceptual o psicológica

Muestra un hecho que contradice una expectativa inicial.

```yaml
operacion: anomalia_conceptual
funcion: producir sorpresa explicativa
responsabilidad: obligar a buscar un principio más profundo
```

### 7.3. Generalización desde caso

Transforma un caso particular en patrón.

```yaml
operacion: generalizacion_desde_caso
funcion: pasar de ejemplo singular a fenómeno general
responsabilidad: impedir que el lector reduzca el caso a excepción
```

### 7.4. Formulación explícita de principio

Convierte la evidencia o intuición acumulada en tesis conceptual.

```yaml
operacion: formulacion_de_principio
funcion: estabilizar una regla o tesis
responsabilidad: dar forma conceptual a lo que el texto ya mostró
```

### 7.5. Validación por autoridad

Usa una fuente, autor, experto, experimento o tradición para legitimar.

```yaml
operacion: validacion_por_autoridad
funcion: aumentar credibilidad
responsabilidad: hacer que la tesis parezca fundada, no arbitraria
```

### 7.6. Acumulación ejemplificativa

Sostiene una tesis mediante muchos casos de dominios distintos.

```yaml
operacion: acumulacion_ejemplificativa
funcion: aumentar fuerza por repetición variada
responsabilidad: mostrar amplitud del patrón
```

### 7.7. Modelo negativo

Muestra qué no hacer o qué falla.

```yaml
operacion: modelo_negativo
funcion: desactivar conducta o interpretación
responsabilidad: evidenciar consecuencias indeseables
```

### 7.8. Modelo positivo

Muestra una conducta, método o interpretación deseable.

```yaml
operacion: modelo_positivo
funcion: ofrecer alternativa imitable
responsabilidad: convertir la tesis en conducta o criterio aplicable
```

### 7.9. Interpelación directa

El texto se dirige al receptor para implicarlo.

```yaml
operacion: interpelacion_directa
funcion: transferir la idea desde ejemplos externos hacia el lector
responsabilidad: convertir observación en autoevaluación
```

### 7.10. Interiorización emocional

El texto usa una escena, mini-historia o imagen para hacer sentir la idea.

```yaml
operacion: interiorizacion_emocional
funcion: transformar comprensión racional en reconocimiento afectivo
responsabilidad: hacer que el receptor se vea implicado emocionalmente
```

### 7.11. Normativización final

Cierra la exposición como regla, principio o mandato práctico.

```yaml
operacion: normativizacion_final
funcion: convertir recorrido expositivo en regla memorable
responsabilidad: dejar una forma aplicable de la comprensión producida
```

### 7.12. Reformulación antropológica

Reformula el fenómeno como afirmación sobre la condición humana.

```yaml
operacion: reformulacion_antropologica
funcion: elevar un caso práctico a principio sobre las personas
responsabilidad: dar base general al consejo o método
```

### 7.13. Transferencia pragmática

Convierte una tesis en acción o tarea para el receptor.

```yaml
operacion: transferencia_pragmatica
funcion: mover la idea hacia aplicación
responsabilidad: hacer que el receptor sepa qué cambiar o hacer
```

---

## 8. Tipos globales de arquitectura expositiva

El detector debe poder identificar patrones globales, pero siempre como hipótesis revisable.

### 8.1. Exposición descriptiva

```txt
objeto → propiedades → componentes → función
```

### 8.2. Exposición comparativa

```txt
objeto A ↔ objeto B → criterio → diferencia relevante → conclusión
```

### 8.3. Exposición causal

```txt
fenómeno → causa → mecanismo → efecto → consecuencia
```

### 8.4. Exposición problema-solución

```txt
problema → diagnóstico → solución → justificación → aplicación
```

### 8.5. Exposición definicional-clasificatoria

```txt
concepto → definición → criterios → tipos → casos límite
```

### 8.6. Exposición secuencial-procedimental

```txt
principio → paso 1 → paso 2 → paso 3 → resultado
```

### 8.7. Exposición por acumulación de casos

```txt
caso 1 → caso 2 → caso 3 → generalización → principio
```

### 8.8. Exposición persuasivo-práctica

```txt
tensión inicial → demostración → modelo → transferencia → regla práctica
```

### 8.9. Exposición por conversión del receptor

```txt
observación externa → reconocimiento general → implicación personal → regla interiorizada
```

### 8.10. Exposición híbrida

Combinación de varias arquitecturas locales bajo una trayectoria global.

```yaml
estructura_global: problema_solucion
estructuras_locales:
  - descripcion
  - causa_efecto
  - comparacion
  - metodo_aplicacion
```

---

## 9. Detección de agrupamientos

Una arquitectura expositiva no es una lista plana de unidades. Algunas unidades forman agrupamientos.

```yaml
agrupamiento_expositivo:
  group_id:
  nombre:
  unidades_incluidas:
  criterio_de_agrupamiento:
  funcion_en_la_trayectoria:
```

Tipos frecuentes de agrupamiento:

```txt
evidencia negativa
explicación del mecanismo
modelos positivos
modelos negativos
marco conceptual
interiorización personal
aplicación práctica
validación por autoridad
acumulación histórica
```

El agrupamiento permite detectar estructuras superiores dentro del texto.

---

## 10. Detección de transiciones

Las transiciones son esenciales. El detector debe identificar cambios de escala, función, dominio y posición del receptor.

```yaml
transicion_expositiva:
  from:
  to:
  tipo_de_transicion:
  funcion:
  cambio_cognitivo:
```

Tipos frecuentes:

```txt
caso → patrón
patrón → principio
principio → evidencia
principio → modelo
observación externa → aplicación personal
comprensión racional → interiorización emocional
experiencia emocional → regla práctica
```

Las transiciones explican cómo evoluciona la exposición.

---

## 11. Procedimiento operativo del detector

### Paso 1. Preparar el texto

Identificar título, unidad de análisis, extensión, marcas visibles y posibles cortes.

### Paso 2. Detectar formas superficiales

Registrar anécdotas, definiciones, citas, ejemplos, listas, preguntas, reglas y otras formas visibles.

### Paso 3. Inferir operaciones expositivas

Determinar qué hace cada forma superficial dentro de la comprensión.

### Paso 4. Asignar responsabilidades cognitivas

Preguntar qué cambio produce cada unidad en el receptor.

### Paso 5. Detectar estructura global dominante

Proponer una hipótesis de arquitectura expositiva global.

### Paso 6. Detectar estructuras locales

Marcar si dentro de la estructura global hay descripción, comparación, causalidad, secuencia, ejemplo, definición u otras formas.

### Paso 7. Construir agrupamientos

Agrupar unidades que comparten función superior.

### Paso 8. Construir transiciones

Detectar cómo una unidad o agrupamiento conduce al siguiente.

### Paso 9. Reconstruir trayectoria expositiva

Formular el estado cognitivo inicial, transformaciones y estado final.

### Paso 10. Validar con evidencia

Cada diagnóstico debe estar apoyado por evidencia textual breve o paráfrasis verificable.

---

## 12. Salida operativa del módulo

```yaml
detector_de_estructura_expositiva:
  texto_analizado:
    titulo:
    autor:
    unidad_de_analisis:
    observaciones:

  diagnostico_global:
    tipo_global:
    subtipo:
    tesis_expositiva:
    patron_de_avance:
    estado_cognitivo_inicial:
    estado_cognitivo_final:
    grado_de_mixtura:
    grado_de_linealidad:
    grado_de_conversion_del_receptor:

  secciones_expositivas:
    - section_id:
      rango_textual:
      forma_superficial:
      operacion_expositiva:
      responsabilidad_cognitiva:
      funcion_macro:
      soporte_utilizado:
      salida_cognitiva:
      conexiones:
      evidencia_textual_breve:

  agrupamientos:
    - group_id:
      nombre:
      secciones:
      criterio_de_agrupamiento:
      funcion_en_la_trayectoria:

  transiciones:
    - transition_id:
      from:
      to:
      tipo_de_transicion:
      funcion:
      cambio_cognitivo:

  grafo_expositivo:
    nodos:
    aristas:

  validacion:
    cobertura_textual:
    coherencia_de_trayectoria:
    ambiguedades:
    confianza:
```

---

## 13. Relación con otros módulos del MAANC

### 13.1. Con `segmentador_funcional`

El segmentador detecta límites funcionales. El detector expositivo les asigna estructura y responsabilidad.

```txt
segmentador_funcional:
  aquí cambia la operación.

detector_de_estructura_expositiva:
  esta operación es una generalización desde caso.
```

### 13.2. Con `extractor_de_macroestructura`

El extractor identifica macroproposiciones. El detector explica cómo esas macroproposiciones son expuestas.

### 13.3. Con `analizador_de_relaciones_retóricas`

El detector identifica funciones expositivas. El analizador retórico clasifica relaciones como elaboración, evidencia, justificación, contraste, preparación o resumen.

### 13.4. Con `modelador_de_situacion_cognitiva`

El detector indica operaciones. El modelador reconstruye cambios en el modelo mental del receptor.

### 13.5. Con `integrador_ACCD`

El integrador traduce las unidades detectadas a familias cognitivas, mNodes, conexiones, agrupamientos y arquitectura macro compatible con el sistema.

---

## 14. Relación con arquitectura macro

El detector no reemplaza la arquitectura macro. La alimenta.

```txt
detector_de_estructura_expositiva
  → detecta patrón de exposición
    → arquitectura_macro
      → integra ese patrón como trayectoria narrativo-cognitiva
```

Ejemplo abstracto:

```yaml
estructura_expositiva_detectada:
  dominante: acumulacion_de_casos

arquitectura_macro:
  estado_inicial: el receptor tiene una intuición no examinada
  operacion_transformadora: casos múltiples vuelven visible un patrón
  estado_final: el receptor acepta un principio general
```

---

## 15. Criterios de profundidad

El análisis es profundo si cumple estas condiciones:

```txt
1. Distingue forma superficial y función expositiva.
2. Identifica operaciones, no sólo tipos.
3. Asigna responsabilidades cognitivas.
4. Detecta agrupamientos superiores.
5. Reconstruye transiciones.
6. Explica cambios de escala.
7. Identifica soportes utilizados.
8. Construye un grafo expositivo.
9. Describe la transformación del receptor.
10. Valida cada diagnóstico con evidencia textual.
```

El análisis es superficial si sólo dice:

```txt
este texto es descriptivo
este texto es de causa-efecto
este texto es problema-solución
```

---

## 16. Errores frecuentes

### Error 1. Confundir forma con función

Una anécdota no siempre es “ejemplo”. Puede ser apertura, prueba, contraejemplo, interiorización emocional o modelo positivo.

### Error 2. Forzar una sola etiqueta global

Muchos textos tienen una estructura dominante y estructuras locales.

### Error 3. Ignorar transiciones

Las transiciones son las que permiten reconstruir la evolución.

### Error 4. Ignorar el estado del receptor

La exposición debe analizarse como transformación del receptor.

### Error 5. Confundir resumen con arquitectura

Resumir dice qué contenido hay. Analizar arquitectura dice qué función cumple cada parte.

---

## 17. Checklist de ejecución

```txt
[ ] Identifiqué la unidad de análisis.
[ ] Detecté formas superficiales.
[ ] Inferí operaciones expositivas.
[ ] Asigné responsabilidades cognitivas.
[ ] Propuse estructura global dominante.
[ ] Detecté estructuras locales.
[ ] Construí agrupamientos.
[ ] Identifiqué transiciones.
[ ] Reconstruí estado inicial, transformaciones y estado final.
[ ] Construí grafo de nodos y aristas.
[ ] Validé con evidencia textual.
[ ] Separé diagnóstico global de análisis local.
[ ] Registré ambigüedades.
```

---

## 18. Definición final

```txt
detector_de_estructura_expositiva =
detector de cómo un texto enseña, prueba y transforma comprensión.
```

Definición extendida:

```txt
detector_de_estructura_expositiva =
módulo del MAANC que reconstruye la arquitectura funcional mediante la cual
un texto organiza información conceptual, moviliza soportes, conecta unidades,
produce agrupamientos, genera transiciones y transforma el estado interpretativo
del receptor.
```
