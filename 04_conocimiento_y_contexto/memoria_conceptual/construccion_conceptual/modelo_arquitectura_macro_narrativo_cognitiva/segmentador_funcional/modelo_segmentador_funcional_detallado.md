https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0f9e1c-0160-83e8-a44f-4c82e1604b44

# Segmentador Funcional — Modelo Operativo Detallado

**Módulo:** `segmentador_funcional`  
**Sistema mayor:** MAANC — Modelo de Arquitectura Macro Narrativo-Cognitiva  
**Uso:** análisis de textos existentes y preparación de arquitectura macro  
**Estado:** versión especializada reutilizable  
**Propósito:** detectar, jerarquizar y justificar unidades funcionales dentro de una manifestación textual.

---

## 0. Resumen ejecutivo

El `segmentador_funcional` es el módulo que transforma un texto continuo en una jerarquía de unidades funcionales. Su unidad básica no es el párrafo, la página, el subtítulo o la longitud, sino el **cambio de responsabilidad narrativo-cognitiva**.

La pregunta central del módulo es:

```txt
¿Dónde deja el texto de cumplir una función y empieza a cumplir otra?
```

El módulo no divide por superficie. Divide por operación.

Por eso, un mismo párrafo puede contener varios segmentos funcionales, y varias páginas pueden pertenecer al mismo segmento si sostienen una misma responsabilidad. El objetivo final no es producir una tabla de partes, sino crear el material estructural con el que después se podrá reconstruir la `arquitectura_macro` de un texto.

La fórmula general es:

```txt
texto continuo
  → detección de cambios funcionales
    → cortes candidatos
      → unidades macro / meso / micro
        → responsabilidades narrativo-cognitivas
          → segmentación funcional validada
            → insumo para arquitectura_macro
```

---

## 1. Definición formal

```txt
segmentador_funcional =
  módulo que detecta y jerarquiza cortes funcionales dentro de una manifestación,
  identificando cambios de operación cognitiva, narrativa, retórica, argumentativa
  o atencional, para producir unidades macro, meso y micro que después serán
  integradas en la arquitectura macro narrativo-cognitiva.
```

Versión compacta:

```txt
segmentador_funcional = detector jerárquico de cambios de responsabilidad textual
```

Versión orientada a análisis:

```txt
segmentador_funcional =
  instrumento de lectura estructural que identifica qué está haciendo el texto
  en cada tramo y dónde cambia de operación.
```

Versión orientada a ACCD:

```txt
segmentador_funcional =
  operador que produce nodos funcionales preliminares para una arquitectura macro,
  permitiendo que el texto sea tratado como trayectoria narrativo-cognitiva.
```

---

## 2. Problema que resuelve

En un análisis superficial, un texto se divide por marcas externas:

```txt
capítulos
subtítulos
párrafos
páginas
listas
bloques tipográficos
```

Pero esas marcas no siempre corresponden a cambios reales de función. Un subtítulo puede introducir un cambio importante, pero también puede ser un simple marcador editorial. Un párrafo puede contener una tesis, un ejemplo y una inferencia. Varias páginas pueden sostener una sola analogía.

El `segmentador_funcional` resuelve este problema separando:

```txt
segmentación formal
  división por marcas visibles

segmentación funcional
  división por cambios de responsabilidad cognitiva
```

El resultado permite analizar textos complejos sin reducirlos a esquemas rígidos de introducción, desarrollo y conclusión.

---

## 3. Principio nuclear

El principio nuclear del módulo es:

```txt
Un texto cambia de segmento funcional cuando cambia la operación que realiza
sobre el estado cognitivo del receptor.
```

Esto implica tres preguntas obligatorias para cada tramo:

```txt
1. ¿Qué estado cognitivo recibe este tramo?
2. ¿Qué operación realiza sobre ese estado?
3. ¿Qué estado cognitivo deja preparado para el siguiente tramo?
```

La unidad funcional se define por esa triple relación:

```yaml
segmento_funcional:
  estado_cognitivo_de_entrada:
  operacion_realizada:
  estado_cognitivo_de_salida:
```

Ejemplos de operaciones:

```txt
definir
ejemplificar
contrastar
generalizar
inferir
refutar
sintetizar
aplicar
abrir problema
cerrar trayectoria
activar emoción
transferir al lector
legitimar con autoridad
```

---

## 4. Fundamento académico resumido

Este módulo puede apoyarse en varias tradiciones académicas. No se copian como teorías independientes, sino como funciones internas del módulo.

### 4.1 Event Segmentation Theory

Aporta la idea de que los flujos continuos se dividen en eventos significativos. En el módulo, esta teoría se adapta así:

```txt
evento perceptivo → evento textual-cognitivo
límite de evento → corte funcional
jerarquía de eventos → macro / meso / microsegmentos
```

### 4.2 Structure Building Framework

Aporta la idea de que la comprensión construye estructuras mentales y cambia hacia otra estructura cuando la información ya no encaja. En el módulo:

```txt
corte funcional = punto donde el lector debe actualizar o cambiar estructura mental
```

### 4.3 Rhetorical Structure Theory

Aporta relaciones funcionales entre unidades:

```txt
elaboración
evidencia
contraste
justificación
preparación
motivación
resultado
condición
resumen
```

El segmentador no sólo corta; también prepara las relaciones entre segmentos.

### 4.4 Van Dijk y Kintsch

Aportan la idea de macroestructura semántica. El segmentador debe producir unidades que puedan integrarse después en macroproposiciones y en una comprensión global del texto.

### 4.5 Integración ACCD/TMC

Aporta el criterio de familia cognitiva y responsabilidad operativa. Una unidad textual se clasifica por lo que hace, no por su superficie.

---

## 5. Unidad básica: segmento funcional

Un segmento funcional es un tramo textual que cumple una responsabilidad dominante dentro de la evolución narrativo-cognitiva de una manifestación.

### 5.1 Estructura del segmento funcional

```yaml
segmento_funcional:
  id:
  rango_textual:
    inicio:
    fin:
  nombre_funcional:
  familia_funcional:
  responsabilidad_narrativo_cognitiva:
  estado_cognitivo_de_entrada:
  operacion_dominante:
  estado_cognitivo_de_salida:
  evidencia_de_inicio:
  evidencia_de_cierre:
  relacion_con_segmento_anterior:
  relacion_con_segmento_siguiente:
  subsegmentos:
  notas_de_segmentacion:
    tipo_de_corte:
    grado_de_confianza:
    posible_segmentacion_alternativa:
```

### 5.2 Qué no es un segmento funcional

No es simplemente:

```txt
una página
un párrafo
un bloque visual
un título
una cita
una anécdota
```

Puede coincidir con esas formas, pero no se define por ellas.

### 5.3 Qué sí es un segmento funcional

Es un tramo que cumple una operación reconocible:

```txt
abre un problema
define un concepto
narra un caso
ejemplifica una tesis
contrasta dos posiciones
extrae una inferencia
responde una objeción
transfiere una idea al lector
cierra una trayectoria
```

---

## 6. Niveles de segmentación

El módulo debe operar en tres niveles.

### 6.1 Nivel macro

Detecta las grandes fases de la arquitectura global.

```yaml
segmento_macro:
  id: SEC_01
  funcion: apertura_problematica
  responsabilidad: instalar el problema central
```

Los segmentos macro son los que después formarán la arquitectura macro del texto.

### 6.2 Nivel meso

Detecta suboperaciones dentro de cada segmento macro.

```yaml
subsegmento_meso:
  id: SEC_01_02
  funcion: ejemplo_ancla
  parent: SEC_01
  responsabilidad: concretar el problema inicial
```

El nivel meso evita que una sección amplia se vuelva una caja negra.

### 6.3 Nivel micro

Detecta operaciones locales:

```txt
frase de transición
conector inferencial
aclaración
marcador de contraste
cita de autoridad
pregunta retórica
mini conclusión
```

El nivel micro no siempre debe aparecer completo en la salida final, pero ayuda a justificar cortes y relaciones.

---

## 7. Submódulos internos

El `segmentador_funcional` se compone de siete submódulos.

```txt
segmentador_funcional
  1. detector_de_unidades_formales
  2. detector_de_operacion_dominante
  3. detector_de_cambio_de_estado_cognitivo
  4. detector_de_cambio_de_escala
  5. detector_de_subsegmentos
  6. asignador_de_responsabilidad
  7. validador_de_segmentacion
```

---

## 7.1 Detector de unidades formales

Registra marcas visibles del texto.

```yaml
unidades_formales:
  titulos:
  subtitulos:
  paginas:
  parrafos:
  listas:
  citas:
  cambios_tipograficos:
```

### Función

No decide la segmentación final. Sólo produce pistas.

### Error frecuente

Confundir una marca formal con un corte funcional.

```txt
Incorrecto:
  hay subtítulo → hay nuevo segmento funcional

Correcto:
  hay subtítulo → posible pista de cambio funcional
```

---

## 7.2 Detector de operación dominante

Identifica la acción principal que realiza un tramo.

Operaciones comunes:

```txt
narrar
abrir
contextualizar
definir
distinguir
ejemplificar
contrastar
legitimar
generalizar
inferir
aplicar
advertir
recapitular
cerrar
rematar
proyectar
```

### Salida

```yaml
operacion_dominante:
  tipo:
  evidencia:
  confianza:
```

---

## 7.3 Detector de cambio de estado cognitivo

Evalúa cómo cambia la comprensión del receptor.

```yaml
cambio_de_estado_cognitivo:
  antes:
  operacion:
  despues:
```

### Preguntas guía

```txt
¿Qué sabía o suponía el lector antes?
¿Qué le hace hacer este tramo?
¿Qué entiende, siente o espera después?
```

Este submódulo es esencial porque vincula la segmentación con arquitectura macro.

---

## 7.4 Detector de cambio de escala

Detecta si el texto cambia de nivel.

Cambios típicos:

```txt
caso particular → principio general
principio general → aplicación concreta
individuo → grupo
grupo → humanidad general
historia externa → lector
lectura racional → experiencia emocional
```

### Salida

```yaml
cambio_de_escala:
  escala_anterior:
  escala_nueva:
  funcion_del_cambio:
```

---

## 7.5 Detector de subsegmentos

Divide un segmento macro en operaciones internas.

```yaml
subsegmentos:
  - id:
    funcion_local:
    responsabilidad_local:
    evidencia:
```

### Criterio

Sólo se subsegmenta cuando las partes internas cumplen responsabilidades diferenciables.

---

## 7.6 Asignador de responsabilidad

Asigna una responsabilidad narrativo-cognitiva específica.

No basta con decir:

```txt
ejemplo
```

Hay que precisar:

```txt
ejemplo_ancla
ejemplo_acumulativo
ejemplo_de_transferencia
ejemplo_contraintuitivo
ejemplo_de_legitimacion
ejemplo_moral_extremo
```

### Fórmula

```txt
tipo superficial + función dentro de la trayectoria = responsabilidad funcional
```

---

## 7.7 Validador de segmentación

Evalúa si la segmentación es útil.

Criterios:

```txt
cobertura total del texto
no sobresegmentación
no subsegmentación
cortes justificados
jerarquía macro/meso/micro
continuidad entre segmentos
compatibilidad con arquitectura macro
```

---

## 8. Criterios finos de corte funcional

### 8.1 Cambio de operación dominante

```txt
narración → moraleja
caso → generalización
principio → ejemplo
ejemplo → exhortación
exhortación → regla
```

### 8.2 Cambio de pregunta implícita

Cada segmento responde una pregunta.

```txt
¿Qué ocurre?
¿Qué significa?
Por qué importa?
Qué se concluye?
Cómo se aplica?
```

Cuando cambia la pregunta, probablemente cambia el segmento.

### 8.3 Cambio de escala

```txt
individuo → grupo
caso → regla
historia → lector
abstracto → concreto
concreto → general
```

### 8.4 Cambio de fuente de autoridad

```txt
experiencia personal → ciencia
ciencia → historia
historia → testimonio
caso cotidiano → regla normativa
```

### 8.5 Cambio de modo de prueba

```txt
dramatización → acumulación
acumulación → principio
principio → ejemplo práctico
modelo moral → transferencia al lector
```

### 8.6 Cambio de relación con el lector

```txt
lector como espectador
lector como juez
lector como participante
lector como sujeto implicado
lector como agente de aplicación
```

### 8.7 Cambio de régimen textual

```txt
exposición → narración
narración → inferencia
inferencia → aplicación
aplicación → cierre
```

### 8.8 Marcador metadiscursivo

Marcadores comunes:

```txt
por ejemplo
en cambio
sin embargo
por tanto
esto significa que
veamos ahora
recordemos
la diferencia es
la consecuencia es
en resumen
```

Estos marcadores son pistas, no pruebas definitivas.

---

## 9. Taxonomía especializada de tipos funcionales

Esta taxonomía es extensible. Sirve como repertorio inicial.

### 9.1 Segmentos de apertura

```txt
apertura_narrativa
apertura_problematica
apertura_por_caso_extremo
apertura_por_pregunta
apertura_por_tension_moral
```

Función: abrir el campo cognitivo del texto.

### 9.2 Segmentos de contextualización

```txt
marco_historico
marco_conceptual
marco_biografico
marco_situacional
orientacion_inicial
```

Función: dar condiciones de lectura.

### 9.3 Segmentos de definición y distinción

```txt
definicion_operativa
definicion_conceptual
distincion_central
diferenciacion_de_terminos
clasificacion
```

Función: fijar categorías de interpretación.

### 9.4 Segmentos de evidencia narrativa

```txt
caso_extremo
caso_historico
mini_historia
anecdota_demostrativa
testimonio
escena_emocional
```

Función: hacer visible una tesis mediante situación.

### 9.5 Segmentos de acumulación

```txt
acumulacion_de_casos
serie_de_ejemplos
ampliacion_de_escala
refuerzo_por_repeticion
```

Función: convertir caso en patrón.

### 9.6 Segmentos de analogía

```txt
analogia_explicativa
analogia_estructural
analogia_moral
analogia_operativa
```

Función: transferir comprensión entre dominios.

### 9.7 Segmentos de legitimación

```txt
cita_de_autoridad
referencia_cientifica
referencia_historica
experimento
autoridad_moral
```

Función: aumentar credibilidad de una tesis.

### 9.8 Segmentos de inferencia

```txt
inferencia_local
generalizacion
consecuencia
moraleja
tesis_derivada
```

Función: pasar de material previo a conclusión.

### 9.9 Segmentos de contraste

```txt
contraste_conceptual
contraste_moral
contraste_de_metodos
contraste_de_casos
contraste_antes_despues
```

Función: producir diferencia relevante.

### 9.10 Segmentos de transferencia al lector

```txt
interpelacion_directa
pregunta_al_lector
aplicacion_cotidiana
advertencia_practica
autoexamen
```

Función: mover el texto hacia la conducta del receptor.

### 9.11 Segmentos terminales

```txt
cierre_principial
remate_normativo
regla_memorizable
proyeccion_etica
cierre_emocional
```

Función: estabilizar o proyectar la trayectoria.

---

## 10. Salida esperada del módulo

La salida debe ser estructurada.

```yaml
segmentacion_funcional:
  texto:
    titulo:
    tipo:
    unidad_analizada:
    hipotesis_de_arquitectura_macro:

  niveles:
    macro:
      descripcion:
    meso:
      descripcion:
    micro:
      descripcion:

  segmentos_macro:
    - id:
      rango:
      nombre_funcional:
      familia_funcional:
      responsabilidad_narrativo_cognitiva:
      estado_cognitivo_de_entrada:
      operacion_dominante:
      estado_cognitivo_de_salida:
      evidencia_de_inicio:
      evidencia_de_cierre:
      relacion_con_anterior:
      relacion_con_siguiente:
      subsegmentos:
        - id:
          rango:
          nombre_funcional:
          operacion_local:
          responsabilidad_local:
          evidencia:
      notas_de_segmentacion:
        tipo_de_corte:
        grado_de_confianza:
        posible_segmentacion_alternativa:

  cortes_funcionales:
    - id:
      ubicacion:
      tipo_de_corte:
      justificacion:
      evidencia:

  trayectoria_resultante:
    secuencia_de_responsabilidades:
    evolucion_del_receptor:
    arquitectura_macro_preliminar:

  zonas_ambiguas:
    - ubicacion:
      motivo:
      posibles_lecturas:
      decision_tomada:
```

---

## 11. Algoritmo operativo

### Paso 1. Lectura global

Leer todo el texto para formular una hipótesis inicial de trayectoria.

```yaml
hipotesis_inicial:
  estado_inicial:
  estado_final:
  tipo_de_movimiento:
```

### Paso 2. Registro formal

Registrar marcas visibles sin aceptarlas todavía como segmentación.

### Paso 3. Detección de operaciones

Asignar operación dominante a tramos candidatos.

### Paso 4. Detección de cortes candidatos

Marcar puntos donde cambian operación, escala, foco, relación o estado cognitivo.

### Paso 5. Jerarquización

Organizar cortes en niveles macro, meso y micro.

### Paso 6. Etiquetado funcional

Asignar nombre funcional y responsabilidad.

### Paso 7. Validación

Verificar cobertura, coherencia, no sobresegmentación y no subsegmentación.

### Paso 8. Producción de salida

Emitir `segmentacion_funcional` en formato estructurado.

---

## 12. Reglas de validación

### 12.1 Cobertura

Todo el texto debe quedar incluido en algún segmento.

### 12.2 No sobresegmentación

No debe cortarse cada oración si no hay cambio funcional suficiente.

### 12.3 No subsegmentación

No deben agruparse operaciones incompatibles sin diferenciación meso.

### 12.4 Trazabilidad

Cada corte debe tener evidencia textual o funcional.

### 12.5 Jerarquía

Debe existir distinción entre macro, meso y micro.

### 12.6 Continuidad

Los segmentos deben poder conectarse en una trayectoria.

### 12.7 Compatibilidad con arquitectura macro

La segmentación debe alimentar una arquitectura macro, no quedar como lista suelta.

---

## 13. Relación con otros módulos del MAANC

### Con `extractor_de_macroestructura`

El segmentador produce unidades. El extractor formula macroproposiciones para esas unidades.

```txt
segmentador_funcional → unidades
extractor_de_macroestructura → sentido global de las unidades
```

### Con `analizador_de_relaciones_retóricas`

El segmentador define nodos. El analizador retórico define aristas.

```txt
segmentos → relaciones funcionales
```

### Con `modelador_de_situacion_cognitiva`

El segmentador identifica tramos de cambio. El modelador describe cómo cambia el modelo mental.

### Con `integrador_ACCD`

El segmentador aporta los nodos funcionales que después se integran como arquitectura macro compatible con ACCD.

---

## 14. Plantilla de trabajo para nuevos textos

Cuando se analice un nuevo texto, usar esta secuencia:

```md
# Segmentación funcional de [título]

## 1. Identificación del texto

## 2. Hipótesis inicial de trayectoria

## 3. Criterio general de segmentación usado

## 4. Segmentos macro

### SEC_01 — [nombre funcional]

- Rango textual:
- Familia funcional:
- Responsabilidad narrativo-cognitiva:
- Estado cognitivo de entrada:
- Operación dominante:
- Estado cognitivo de salida:
- Evidencia de inicio:
- Evidencia de cierre:
- Relación con segmento anterior:
- Relación con segmento siguiente:

#### Subsegmentos

## 5. Cortes funcionales detectados

## 6. Zonas ambiguas

## 7. Trayectoria resultante

## 8. Validación de segmentación
```

---

## 15. Definición final del modelo

```txt
segmentador_funcional es el módulo que transforma un texto continuo en una
jerarquía de unidades funcionales, identificando los puntos donde cambia la
responsabilidad narrativo-cognitiva del discurso y describiendo para cada unidad
qué estado cognitivo recibe, qué operación realiza y qué estado deja preparado
para la siguiente unidad.
```

En forma compacta:

```txt
segmentador_funcional = detector jerárquico de cambios de responsabilidad textual
```

---

## 16. Bibliografía orientativa

- Gernsbacher, M. A. (1990). _Language Comprehension as Structure Building_.
- Mann, W. C., & Thompson, S. A. (1988). Rhetorical Structure Theory: Toward a functional theory of text organization.
- van Dijk, T. A., & Kintsch, W. (1983). _Strategies of Discourse Comprehension_.
- Zacks, J. M., Speer, N. K., Swallow, K. M., Braver, T. S., & Reynolds, J. R. (2007). Event perception: A mind-brain perspective.
- Zacks, J. M., & Swallow, K. M. (2007). Event segmentation.
