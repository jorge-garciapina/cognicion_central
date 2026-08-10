# Modelo especializado — `constructor_de_trayectoria_narrativa`

**Sistema:** MAANC / ACCD  
**Módulo:** `constructor_de_trayectoria_narrativa`  
**Tipo:** modelo operativo de análisis narrativo-cognitivo  
**Uso:** analizar textos existentes o preparar trayectorias narrativas generativas  
**Separación:** este documento describe el modelo sin aplicarlo a ningún texto concreto.

---

## 0. Propósito del documento

Este documento define en detalle el módulo `constructor_de_trayectoria_narrativa`. Su función no es resumir textos ni dividirlos en introducción, desarrollo y cierre. Su función es reconstruir la **curva de transformación narrativo-cognitiva** mediante la cual una manifestación conduce al receptor desde un estado inicial hacia un estado final.

La unidad principal del módulo no es el párrafo, ni la sección visible, ni el subtítulo. La unidad principal es el **movimiento narrativo-cognitivo**: una operación textual que modifica el estado interpretativo del receptor.

---

## 1. Definición general

```txt
constructor_de_trayectoria_narrativa =
  módulo que reconstruye la evolución narrativo-cognitiva de una manifestación,
  identificando estados de entrada, operaciones transformadoras, tensiones,
  puntos de giro, cambios de escala, evaluaciones, resoluciones, modos de
  clausura y estados de salida.
```

En lenguaje ACCD:

```txt
constructor_de_trayectoria_narrativa =
  operador que transforma una segmentación funcional en una curva dinámica
  compatible con arquitectura_macro.
```

El módulo responde preguntas como:

```txt
¿Desde qué estado cognitivo parte el receptor?
¿Qué tensión, expectativa, problema o intuición se instala?
¿Qué operación realiza cada sección sobre ese estado?
¿Qué ejemplos o historias funcionan como pruebas narrativas?
¿Qué cambios de escala producen generalización o transferencia?
¿Dónde ocurre el punto de giro?
¿Cómo se transforma el estado interpretativo?
¿Qué forma de llegada produce la pieza: cierre, resolución, remate, proyección?
```

---

## 2. Diferencia con otros módulos del MAANC

### 2.1. Diferencia con `extractor_de_macroestructura`

El `extractor_de_macroestructura` responde:

```txt
¿Cuáles son las ideas globales del texto?
```

El `constructor_de_trayectoria_narrativa` responde:

```txt
¿Cómo se mueven esas ideas a través del texto?
```

La macroestructura semántica identifica núcleos de sentido. La trayectoria narrativa identifica la evolución de esos núcleos.

### 2.2. Diferencia con `segmentador_funcional`

El `segmentador_funcional` detecta unidades.

El `constructor_de_trayectoria_narrativa` interpreta qué transformación realiza cada unidad.

```txt
segmentador_funcional:
  aquí empieza una nueva unidad.

constructor_de_trayectoria_narrativa:
  esta unidad transforma la expectativa inicial en una distinción operativa.
```

### 2.3. Diferencia con `analizador_argumentativo`

El `analizador_argumentativo` reconstruye tesis, evidencia, garantías, respaldos, objeciones y refutaciones.

El `constructor_de_trayectoria_narrativa` reconstruye cómo esos elementos argumentativos se convierten en recorrido para el receptor.

### 2.4. Diferencia con `analizador_de_relaciones_retóricas`

El `analizador_de_relaciones_retóricas` identifica relaciones entre unidades: elaboración, contraste, evidencia, motivación, justificación, concesión, etc.

El `constructor_de_trayectoria_narrativa` usa esas relaciones para reconstruir la curva global.

---

## 3. Objeto de análisis

El módulo analiza una manifestación como trayectoria.

```txt
manifestación = secuencia de operaciones que transforma un estado receptoral
```

La manifestación puede ser:

```txt
capítulo de libro
ensayo
artículo
video corto
carousel
clase
conferencia
hilo
transcripción
manifiesto
pieza argumentativa
pieza narrativa
pieza pedagógica
```

El módulo no presupone que todo texto tenga tres partes. Puede detectar trayectorias lineales, acumulativas, ramificadas, espirales, dialécticas, pedagógicas, investigativas, argumentativas o híbridas.

---

## 4. Unidad básica: movimiento narrativo-cognitivo

La unidad básica es el **movimiento narrativo-cognitivo**.

```txt
movimiento_narrativo_cognitivo =
  unidad funcional que produce una transformación en el estado interpretativo
  del receptor.
```

### 4.1. Estructura formal

```yaml
movimiento_narrativo_cognitivo:
  id:
  rango_textual:
  nombre_funcional:
  estado_de_entrada:
  operacion_narrativa:
  estado_de_salida:
  responsabilidad_narrativa:
  mecanismo_de_transformacion:
  evidencia_textual:
  relacion_con_movimiento_anterior:
  relacion_con_movimiento_siguiente:
  familia_cognitiva_dominante:
  grado_de_necesidad_en_la_trayectoria:
  notas_de_ambiguedad:
```

### 4.2. Tríada mínima

Todo movimiento debe poder expresarse como:

```txt
estado_de_entrada → operación_narrativa → estado_de_salida
```

Sin esa tríada, la unidad no está suficientemente modelada.

---

## 5. Estados narrativo-cognitivos

Un estado narrativo-cognitivo describe la posición interpretativa del receptor antes o después de una operación.

### 5.1. Estados iniciales posibles

```txt
desconocimiento
confusión
intuición vaga
expectativa abierta
creencia común
prejuicio
resistencia
marco interpretativo limitado
pregunta latente
tensión no formulada
curiosidad
disposición de juicio
seguridad moral
incomodidad conceptual
```

### 5.2. Estados intermedios posibles

```txt
duda activada
tensión intensificada
distinción provisional adquirida
caso concreto disponible
patrón emergente reconocido
modelo mental parcialmente actualizado
objeción abierta
alternativa sugerida
foco desplazado
responsabilidad transferida al receptor
```

### 5.3. Estados finales posibles

```txt
comprensión estabilizada
distinción adquirida
problema reformulado
tensión resuelta
tensión parcialmente resuelta
tensión abierta
criterio operativo adquirido
modelo mental actualizado
tesis aceptada provisionalmente
duda intensificada
regla práctica interiorizada
apertura hacia continuación
```

---

## 6. Operaciones narrativas

Una operación narrativa es una acción estructural que el texto realiza sobre el estado del receptor.

```txt
operacion_narrativa = transformación funcional del estado interpretativo
```

### 6.1. Operaciones básicas

```txt
abrir
situar
orientar
anclar
prometer
problematizar
tensionar
contrastar
complicar
desplazar
distinguir
ejemplificar
analogizar
evaluar
demostrar
inferir
generalizar
transferir
recapitular
resolver
sintetizar
condensar
rematar
proyectar
reabrir
```

### 6.2. Operaciones especializadas

```txt
anclaje_por_caso_extremo
generalizacion_por_acumulacion
transferencia_del_caso_extremo_a_la_vida_cotidiana
validacion_por_autoridad
validacion_por_experimento
validacion_por_ejemplo_practico
ejemplificacion_practica_positiva
intensificacion_historica
autoimplicacion_del_receptor
reencuadre_etico
reencuadre_antropologico
contraste_entre_dos_metodos
condensacion_emocional
cristalizacion_normativa
apertura_de_continuidad
resolucion_parcial
resolucion_total
```

---

## 7. Submódulos internos

El `constructor_de_trayectoria_narrativa` se compone de diez submódulos.

```txt
1. identificador_de_estado_inicial
2. detector_de_disparador_narrativo
3. extractor_de_movimientos_narrativo_cognitivos
4. constructor_de_curva_de_tension
5. detector_de_puntos_de_giro
6. detector_de_cambios_de_escala
7. modelador_de_estado_final
8. clasificador_de_tipo_de_trayectoria
9. constructor_de_grafo_narrativo_cognitivo
10. validador_de_coherencia_de_trayectoria
```

---

## 8. Submódulo 1 — Identificador de estado inicial

### Función

Determina desde qué posición cognitiva, moral, emocional, narrativa o interpretativa parte la manifestación.

### Preguntas operativas

```txt
¿Qué supone el texto que el receptor cree al inicio?
¿Qué intuición quiere corregir?
¿Qué disposición quiere modificar?
¿Qué pregunta o tensión abre?
¿Qué expectativa activa?
¿Qué marco interpretativo presupone?
```

### Salida

```yaml
estado_inicial:
  creencia_presupuesta:
  disposicion_emocional:
  marco_interpretativo:
  tension_latente:
  vulnerabilidad_del_receptor:
  evidencia_textual:
```

---

## 9. Submódulo 2 — Detector de disparador narrativo

### Función

Identifica el evento, caso, imagen, pregunta, escena, contraste o afirmación que pone en movimiento la trayectoria.

### Tipos de disparador

```txt
caso extremo
pregunta inicial
anécdota
contradicción
imagen fuerte
problema explícito
objeción
escena emocional
hecho sorprendente
tesis provocadora
```

### Salida

```yaml
disparador_narrativo:
  tipo:
  ubicacion:
  funcion:
  estado_que_activa:
  tension_que_introduce:
  evidencia_textual:
```

---

## 10. Submódulo 3 — Extractor de movimientos narrativo-cognitivos

### Función

Reconstruye los movimientos que componen la trayectoria.

### Procedimiento

```txt
1. localizar cambio de estado interpretativo.
2. identificar operación que produce el cambio.
3. nombrar la responsabilidad narrativa.
4. vincular evidencia textual.
5. conectar el movimiento con los movimientos anterior y siguiente.
```

### Salida

```yaml
movimientos_narrativos:
  - id:
    nombre_funcional:
    rango_textual:
    estado_de_entrada:
    operacion_narrativa:
    estado_de_salida:
    responsabilidad_narrativa:
    mecanismo_de_transformacion:
    evidencia_textual:
```

---

## 11. Submódulo 4 — Constructor de curva de tensión

### Función

Reconstruye cómo se abre, intensifica, desplaza, descarga, resuelve o deja abierta una tensión.

### Tipos de tensión

```txt
pregunta no resuelta
conflicto moral
contradicción conceptual
vacío explicativo
problema práctico
objeción
choque entre intuición y teoría
tensión emocional
discrepancia entre expectativa y caso
```

### Salida

```yaml
curva_de_tension:
  tension_inicial:
  tipo:
  origen:
  intensificaciones:
    - movimiento_id:
      modo_de_intensificacion:
  desplazamientos:
    - movimiento_id:
      de:
      hacia:
  descargas_o_resoluciones_parciales:
    - movimiento_id:
      modo_de_descarga:
  tension_final:
    estado:
    descripcion:
```

---

## 12. Submódulo 5 — Detector de puntos de giro

### Función

Detecta momentos donde cambia la dirección interpretativa de la manifestación.

### Tipos de punto de giro

```txt
distinción decisiva
contraejemplo
objeción
prueba
revelación
analogía estructurante
reformulación
cambio de escala
inversión de perspectiva
transferencia al receptor
```

### Salida

```yaml
puntos_de_giro:
  - punto_id:
    ubicacion:
    tipo:
    que_habia_antes:
    que_cambia:
    que_habilita_despues:
    evidencia_textual:
```

---

## 13. Submódulo 6 — Detector de cambios de escala

### Función

Identifica desplazamientos de dominio, nivel, alcance o escala que amplían, intensifican o transfieren la tesis.

### Tipos de escala

```txt
individual
interpersonal
familiar
laboral
institucional
histórica
política
social
íntima
universal
conceptual
práctica
```

### Salida

```yaml
cambios_de_escala:
  - cambio_id:
    desde:
    hacia:
    funcion:
    efecto_en_la_trayectoria:
    evidencia_textual:
```

---

## 14. Submódulo 7 — Modelador de estado final

### Función

Determina en qué estado cognitivo, moral, interpretativo o práctico busca dejar al receptor la manifestación.

### Preguntas

```txt
¿Qué comprensión queda estabilizada?
¿Qué regla queda disponible?
¿Qué emoción se interioriza?
¿Qué acción se vuelve plausible?
¿Qué pregunta queda abierta?
¿Qué modelo mental cambió?
```

### Salida

```yaml
estado_final:
  comprension_instalada:
  regla_o_criterio:
  disposicion_emocional:
  accion_potencial:
  tension_residual:
  modo_de_clausura:
  evidencia_textual:
```

---

## 15. Submódulo 8 — Clasificador de tipo de trayectoria

### Función

Clasifica la forma global del recorrido.

### Tipos de trayectoria

```txt
lineal_explicativa
contrastiva
dialectica
acumulativa
espiral
investigativa
pedagogica
narrativa_clasica
persuasiva_por_conversion
argumentativa_con_sintesis
expositiva_con_reencuadre
emocional_normativa
```

### Salida

```yaml
tipo_de_trayectoria:
  dominante:
  secundaria:
  justificacion:
  evidencia:
  grado_de_hibridacion:
```

---

## 16. Submódulo 9 — Constructor de grafo narrativo-cognitivo

### Función

Construye un grafo donde cada movimiento es un nodo y cada relación es una arista funcional.

### Estructura

```yaml
grafo_narrativo_cognitivo:
  nodos:
    - node_id:
      movimiento_id:
      nombre:
      funcion:
      estado_entrada:
      estado_salida:
  aristas:
    - from:
      to:
      tipo:
      funcion:
      evidencia:
```

### Tipos de aristas

```txt
generalizacion
transferencia
contraste
causalizacion
validacion
intensificacion
descarga
reencuadre
ampliacion_de_escala
autoimplicacion
cristalizacion
proyeccion
```

---

## 17. Submódulo 10 — Validador de coherencia de trayectoria

### Función

Verifica que la trayectoria reconstruida explique la totalidad relevante del texto.

### Criterios

```txt
1. Cada sección importante tiene responsabilidad narrativa.
2. Cada movimiento transforma el estado anterior.
3. La trayectoria explica el estado final.
4. Los ejemplos no se tratan como decoración.
5. Las analogías, historias e inferencias tienen función explícita.
6. Hay continuidad entre movimientos.
7. Los puntos de giro están justificados.
8. Los cambios de escala tienen función.
9. El cierre condensa, resuelve, desplaza o proyecta la trayectoria.
10. Las zonas ambiguas se declaran.
```

### Salida

```yaml
validacion:
  cobertura_de_secciones:
  coherencia_de_trayectoria:
  transformacion_cognitiva_detectada:
  puntos_fuertes:
  zonas_ambiguas:
  hipotesis_alternativas:
```

---

## 18. Tipología de trayectorias narrativo-cognitivas

### 18.1. Trayectoria lineal-explicativa

```txt
problema → explicación → cierre
```

Usada cuando la manifestación toma una pregunta y la responde progresivamente.

### 18.2. Trayectoria contrastiva

```txt
posición A → posición B → diferencia crítica → resolución
```

Usada cuando el avance depende de oposición o comparación.

### 18.3. Trayectoria dialéctica

```txt
tesis → objeción → respuesta → síntesis
```

Usada cuando la comprensión avanza por conflicto argumentativo.

### 18.4. Trayectoria acumulativa

```txt
elemento 1 → elemento 2 → elemento 3 → integración
```

Usada cuando la comprensión se construye por suma de casos o componentes.

### 18.5. Trayectoria espiral

```txt
idea inicial → ejemplo → retorno → expansión → nuevo ejemplo → reformulación
```

Usada cuando el texto vuelve al mismo núcleo varias veces con mayor profundidad.

### 18.6. Trayectoria investigativa

```txt
pregunta → hipótesis → evidencia → ajuste → conclusión provisional
```

Usada cuando el texto simula o despliega una búsqueda.

### 18.7. Trayectoria pedagógica

```txt
intuición → definición → ejemplo → contraejemplo → regla → aplicación
```

Usada cuando la manifestación enseña una distinción o procedimiento.

### 18.8. Trayectoria persuasiva por conversión

```txt
creencia inicial → desestabilización → evidencia → autoimplicación → reencuadre → regla
```

Usada cuando el objetivo es modificar la disposición del receptor.

---

## 19. Relación con familias cognitivas

Cada movimiento puede asociarse con una familia cognitiva dominante.

```yaml
familia_cognitiva_en_movimiento:
  movimiento_id:
  familia_dominante:
  responsabilidad:
  criterio_de_pertenencia:
  evidencia:
```

Posibles familias o responsabilidades:

```txt
problematización
definición
distinción
ejemplo
analogía
mini-historia
prueba
evidencia
inferencia
contraste
refutación
síntesis
reencuadre
aplicación
regla
remate
proyección
```

---

## 20. Relación con codominio

El módulo es abstracto respecto al codominio. Puede analizar una trayectoria y luego permitir su traducción a distintas realizaciones.

```txt
trayectoria narrativa
  → video corto: bloques audiovisuales
  → carousel: láminas
  → capítulo: secciones y subsecciones
  → clase: módulos pedagógicos
  → hilo: publicaciones secuenciales
```

La trayectoria es independiente del soporte. El codominio decide cómo se materializa.

---

## 21. Procedimiento operativo completo

```txt
1. Recibir texto o segmentación funcional.
2. Identificar estado inicial.
3. Detectar disparador narrativo.
4. Extraer movimientos narrativo-cognitivos.
5. Construir curva de tensión.
6. Detectar puntos de giro.
7. Detectar cambios de escala.
8. Modelar estado final.
9. Clasificar tipo de trayectoria.
10. Construir grafo narrativo-cognitivo.
11. Extraer patrón reutilizable.
12. Validar coherencia de trayectoria.
```

---

## 22. Formato operativo de salida

```yaml
constructor_de_trayectoria_narrativa:
  trayectoria_global:
    nombre_funcional:
    tipo_de_trayectoria:
    estado_narrativo_inicial:
    disparador_narrativo:
    tension_o_expectativa_inicial:
    operaciones_transformadoras:
    puntos_de_giro:
    cambios_de_escala:
    evaluacion_o_reencuadre:
    estado_narrativo_final:
    modo_de_clausura:
    grado_de_linealidad:
    grado_de_ramificacion:
    grado_de_clausura:

  movimientos_narrativo_cognitivos:
    - movimiento_id:
      nombre_funcional:
      rango_textual:
      estado_de_entrada:
      operacion_narrativa:
      estado_de_salida:
      responsabilidad_narrativa:
      mecanismo_de_transformacion:
      familia_cognitiva_dominante:
      evidencia_textual:
      relacion_con_movimiento_anterior:
      relacion_con_movimiento_siguiente:

  curva_de_tension:
    tension_inicial:
    intensificaciones:
    desplazamientos:
    descargas_o_resoluciones_parciales:
    tension_final:

  grafo_narrativo_cognitivo:
    nodos:
    aristas:

  patron_reutilizable:
    nombre:
    secuencia_de_operaciones:
    condiciones_de_uso:
    codominios_compatibles:

  validacion:
    cobertura_de_secciones:
    coherencia_de_trayectoria:
    transformacion_cognitiva_detectada:
    zonas_ambiguas:
    hipotesis_alternativas:
```

---

## 23. Criterios de calidad

Una buena salida del módulo debe cumplir:

```txt
1. No reducir el texto a introducción-desarrollo-conclusión.
2. Identificar estados de entrada y salida.
3. Nombrar operaciones transformadoras.
4. Detectar tensión, giro, evaluación o reencuadre.
5. Permitir trayectorias no lineales.
6. Distinguir trayectoria global y trayectorias locales.
7. Asociar movimientos con secciones o grupos de secciones.
8. Justificar cada movimiento con evidencia textual.
9. Explicar cómo cambia el estado interpretativo del receptor.
10. Extraer patrones reutilizables.
11. Distinguir ejemplos decorativos de ejemplos estructurales.
12. Reconocer cambios de escala.
13. Reconocer movimientos de autoimplicación del receptor.
14. Producir una salida traducible a arquitectura_macro ACCD.
```

---

## 24. Errores comunes que debe evitar

```txt
1. Confundir subtítulos con movimientos narrativos.
2. Forzar todo texto a tres partes.
3. Resumir contenido sin explicar función.
4. Etiquetar ejemplos sin describir su responsabilidad.
5. No modelar estado del receptor.
6. No detectar puntos de giro.
7. Ignorar cambios de escala.
8. Confundir argumento con trayectoria.
9. No distinguir cierre, resolución, remate y proyección.
10. Tratar la emoción como ornamento y no como operación narrativa.
```

---

## 25. Definición final refinada

```txt
constructor_de_trayectoria_narrativa =
  módulo del MAANC que reconstruye la curva de transformación de una manifestación,
  identificando cómo cada sección, subsección, ejemplo, historia, analogía,
  argumento o escena cumple una responsabilidad narrativa dentro del paso de un
  estado cognitivo inicial a un estado cognitivo final.
```

Más breve:

```txt
constructor_de_trayectoria_narrativa =
  módulo que detecta cómo evoluciona narrativamente una manifestación.
```
