# Protocolo-prompt para generar títulos de YouTube desde análisis cognitivo-atencional

**Versión:** v3.0  
**Tipo de documento:** prompt-protocolo ejecutable por IA  
**Uso:** adjuntar este documento junto con un guion/texto en crudo, el `modelador_de_situacion_cognitiva` y el `analizador_intencional_atencional`.  
**Resultado esperado:** una salida estable con análisis del guion, núcleo titular, tensión titular dominante, familias de títulos, variantes A/B/C, evaluación, validación y recomendación final.

---

## 0. Mandato para la IA ejecutora

Tu tarea es generar títulos de YouTube a partir del texto en crudo compartido por el usuario.

No debes generar títulos directamente desde el tema superficial. Primero debes reconstruir:

```txt
1. qué transformación cognitiva produce el guion;
2. cómo el guion conduce la atención del espectador;
3. qué tensión titular dominante puede captar atención legítima;
4. qué promesa de valor atencional puede formularse sin traicionar el contenido;
5. qué familias de títulos expresan mejor esa promesa;
6. qué variantes conviene probar.
```

La salida debe seguir la estructura fija indicada en este documento. No sustituyas la estructura por una respuesta libre.

---

## 1. Principio central

Un título de YouTube no debe salir solamente del tema del video. Debe salir de la transformación que el video promete producir en la mente del espectador.

```txt
título_de_youtube =
  promesa honesta de transformación
  + tensión interpretativa clara
  + foco atencional de entrada
  + brecha de curiosidad calibrada
  + valor percibido por el espectador
  + cumplimiento real en el guion
```

El título funciona como una promesa previa al video: abre un foco, activa una tensión y ofrece una razón para invertir atención.

---

## 2. Principio de valor atencional

El espectador invierte recursos limitados:

```txt
atención
tiempo
curiosidad
energía mental
disposición emocional
confianza inicial
```

Por eso, el título debe formularse desde el valor percibido por el espectador, no desde el interés del creador ni desde el material analizado.

Evita títulos centrados en el creador o en el material:

```txt
Mi análisis de...
Resumen de...
Explico el capítulo...
Análisis del libro...
```

Prefiere títulos centrados en el valor que recibirá el espectador:

```txt
Por qué X casi nunca funciona
Cómo X se convierte en Y
El mecanismo que hace que X produzca Y
Lo que ocurre cuando intentas X y aparece Y
No es X: es Y
```

El título no debe pedir atención. Debe justificarla.

---

## 3. Motores obligatorios del protocolo

Debes integrar tres motores analíticos. Ninguno es opcional.

### 3.1. Motor cognitivo

Usa el `modelador_de_situacion_cognitiva` para identificar:

```txt
estado cognitivo inicial del espectador;
tensiones interpretativas;
actualizaciones por tramo;
operadores cognitivos;
inferencias puente;
reencuadres;
estado cognitivo final;
transformación cognitiva central.
```

Pregunta central del motor cognitivo:

```txt
¿Qué empieza creyendo, suponiendo o ignorando el espectador, y qué entiende al final?
```

---

### 3.2. Motor intencional-atencional

Usa el `analizador_intencional_atencional` para identificar:

```txt
intención global del guion;
foco global;
focos de alta captura;
operaciones atencionales;
estados atencionales dominantes;
puntos de autoimplicación;
zonas de intensidad;
zonas de descompresión;
zona de cierre o promesa cumplida.
```

Pregunta central del motor atencional:

```txt
¿Cómo conduce el guion la atención del espectador para producir la transformación cognitiva?
```

---

### 3.3. Motor titular-investigativo

Usa los principios de investigación sobre titulares como criterios de generación y evaluación.

No los trates como bibliografía decorativa. Deben operar en cada título generado.

Principios obligatorios:

```yaml
principios_titulares:
  brecha_de_informacion:
    uso: el título debe abrir una pregunta clara que el video pueda cerrar.
    peligro: misterio vacío o promesa nebulosa.

  concrecion_calibrada:
    uso: el título debe ser suficientemente concreto para comunicar valor, pero no tan completo que elimine curiosidad.
    escala: 1 demasiado vago, 2 vago, 3 balanceado, 4 concreto potente, 5 demasiado completo.
    zona_preferida: 3 o 4.

  emocion_funcional:
    uso: el título puede activar sorpresa, inquietud, reconocimiento, tensión, indignación, alivio o curiosidad si ese afecto existe en el guion.
    peligro: emoción artificial no sostenida por el contenido.

  alineacion_titulo_contenido:
    uso: la promesa del título debe cumplirse en el guion.
    peligro: clickbait funcional.

  variacion_experimental:
    uso: generar variantes realmente distintas, no simples cambios de palabras.
    peligro: A/B testing inútil por variantes demasiado parecidas.

  retencion_probable:
    uso: el título debe atraer al público que probablemente permanecerá en el video.
    peligro: atraer clics de una audiencia equivocada.
```

---

## 4. Flujo de ejecución obligatorio

Ejecuta las fases en este orden:

```txt
FASE 1  → lectura general del guion
FASE 2  → análisis con modelador de situación cognitiva
FASE 3  → análisis intencional-atencional
FASE 4  → integración en núcleo titular
FASE 5  → determinación de tensión titular dominante
FASE 6  → identificación de principios titulares aplicables
FASE 7  → generación de familias de títulos
FASE 8  → variantes A/B/C por familia
FASE 9  → calibración de curiosidad y concreción
FASE 10 → validación anti-clickbait
FASE 11 → puntuación y ranking
FASE 12 → top 3 para prueba A/B
FASE 13 → recomendación final
```

No saltes directamente a la generación de títulos.

---

# 5. SALIDA FINAL OBLIGATORIA

Cuando ejecutes este protocolo, entrega la respuesta con la estructura exacta siguiente.

---

# Sistema de títulos para el video

## 1. Lectura general del material

Completa los campos:

```yaml
lectura_general:
  tipo_de_texto:
  tema_superficial:
  audiencia_probable:
  objetivo_aparente_del_video:
  promesa_general_detectada:
  advertencia_de_alcance:
```

Después añade un párrafo breve:

```txt
El texto parece intentar llevar al espectador desde [estado inicial] hacia [estado final], mediante [recorrido general].
```

---

## 2. Análisis con modelador de situación cognitiva

Esta sección debe resumir el análisis cognitivo necesario para construir títulos. No debe ser un resumen temático del guion.

### 2.1. Estado cognitivo inicial

```yaml
estado_cognitivo_inicial:
  creencia_probable_del_espectador:
  presuposiciones_activadas:
  deficit_cognitivo:
  tension_inicial:
  foco_inicial_del_problema:
```

### 2.2. Entidades cognitivas titularizables

Lista sólo las entidades que pueden servir para construir títulos.

```yaml
entidades_titularizables:
  conceptos_centrales:
  mecanismos:
  oposiciones:
  reglas_o_principios:
  afectos_activados:
  imagenes_o_metaforas_fuertes:
```

### 2.3. Tensiones interpretativas del guion

Incluye entre 3 y 7 tensiones.

| ID  | Tensión | Expectativa inicial | Movimiento del guion | Potencial titular |
| --- | ------- | ------------------- | -------------------- | ----------------- |
| T1  |         |                     |                      | Alto/Medio/Bajo   |

### 2.4. Actualizaciones cognitivas clave

No listes todo el guion. Selecciona las actualizaciones que importan para titular.

| Tramo | Estado antes | Operación cognitiva | Estado después | Utilidad para título |
| ----- | ------------ | ------------------- | -------------- | -------------------- |

### 2.5. Reencuadres principales

| Marco anterior | Nuevo marco | Efecto en el espectador | Posible fórmula titular |
| -------------- | ----------- | ----------------------- | ----------------------- |

### 2.6. Transformación cognitiva central

Formula la transformación en tres niveles:

```yaml
transformacion_cognitiva_central:
  version_breve: "De X a Y"
  version_explicativa: "El espectador deja de ver X como Y y empieza a verlo como Z."
  version_titularizable: "La tensión más útil para título es..."
```

### 2.7. Estado cognitivo final

```yaml
estado_cognitivo_final:
  comprension_resultante:
  regla_o_criterio_instalado:
  tensiones_resueltas:
  tensiones_abiertas:
  disposicion_final_del_espectador:
```

---

## 3. Análisis intencional-atencional

Esta sección debe mostrar cómo el guion administra la atención del espectador.

### 3.1. Intención global

```yaml
intencion_global:
  formulacion:
  tipo:
  estrategia_dominante:
  estado_atencional_inicial:
  estado_atencional_final:
```

### 3.2. Foco global

```yaml
foco_global:
  objeto_de_atencion:
  tipo_de_foco:
  tension_central:
  desplazamiento_principal:
  clausura_o_proyeccion:
```

### 3.3. Trayectoria atencional

Usa estados como: atención capturada, intrigada, en disonancia, focalizada, expandida, generalizante, reflexiva, identificatoria, emocionalizada, normativizada, clausurada o proyectada.

| Fase | Estado atencional | Foco | Operación atencional | Función en el guion |
| ---- | ----------------- | ---- | -------------------- | ------------------- |

### 3.4. Focos de alta captura

Identifica los focos más útiles para crear títulos.

| Foco | Tipo | Operación atencional | Intensidad | Razón de potencial titular |
| ---- | ---- | -------------------- | ---------- | -------------------------- |

### 3.5. Diagnóstico atencional para el título

```yaml
diagnostico_atencional_titular:
  mejor_foco_de_entrada:
  operacion_que_debe_realizar_el_titulo:
  estado_atencional_que_debe_activar:
  afecto_de_entrada_recomendado:
  riesgo_de_saturacion_o_confusion:
```

---

## 4. Núcleo titular integrado

Integra el análisis cognitivo y el análisis atencional.

```yaml
nucleo_titular_integrado:
  tema_superficial:
  estado_inicial_del_espectador:
  estado_final_del_espectador:
  transformacion_cognitiva_central:
  foco_atencional_de_entrada:
  tension_principal:
  mecanismo_central:
  reencuadre_principal:
  afecto_dominante:
  promesa_de_valor_atencional:
  pregunta_que_debe_abrir_el_titulo:
  deuda_cognitiva_del_video:
  evidencia_minima_que_debe_cumplir_el_guion:
```

Añade una frase de síntesis:

```txt
El título debería prometer que el espectador entenderá [transformación] mediante [tensión/foco], sin revelar completamente [elemento que sostiene la curiosidad].
```

---

## 5. Determinar la tensión titular dominante

Debes elegir una tensión titular dominante y justificarla. También debes señalar tensiones secundarias que pueden alimentar familias alternativas.

### 5.1. Tipos de tensión disponibles

Evalúa estas dimensiones:

```yaml
tipos_de_tension:
  cognitiva:
    descripcion: cambia una forma de entender.
    formula: "Creías X, pero en realidad Y."

  emocional:
    descripcion: activa contradicción, incomodidad, reconocimiento, inquietud o sorpresa.
    formula: "Eso que parece ayudar puede estar dañando."

  practica:
    descripcion: ofrece criterio aplicable o regla de acción.
    formula: "Cómo hacer X sin caer en Y."

  moral:
    descripcion: muestra que una conducta aparentemente correcta puede tener costos humanos o relacionales.
    formula: "Lo correcto puede no ser lo eficaz."

  estrategica:
    descripcion: revela mecanismo de poder, influencia, diseño o manipulación.
    formula: "El mecanismo que convierte X en Y."

  narrativa:
    descripcion: promete un recorrido de descubrimiento progresivo.
    formula: "La historia de cómo X terminó siendo Y."

  metacognitiva:
    descripcion: revela un error en la forma de pensar del espectador.
    formula: "El error mental que te hace interpretar mal X."
```

### 5.2. Matriz de selección de tensión

| Tipo de tensión | Presencia en el guion | Fuerza atencional | Claridad para público | Riesgo | Puntuación 1-5 |
| --------------- | --------------------: | ----------------: | --------------------: | ------ | -------------: |
| Cognitiva       |                       |                   |                       |        |                |
| Emocional       |                       |                   |                       |        |                |
| Práctica        |                       |                   |                       |        |                |
| Moral           |                       |                   |                       |        |                |
| Estratégica     |                       |                   |                       |        |                |
| Narrativa       |                       |                   |                       |        |                |
| Metacognitiva   |                       |                   |                       |        |                |

### 5.3. Dictamen de tensión dominante

```yaml
tension_titular_dominante:
  tipo:
  formulacion:
  por_que_es_la_mas_fuerte:
  que_estado_inicial_activa:
  que_estado_final_promete:
  que_foco_atencional_abre:
  que_operacion_atencional_realiza:
  que_afecto_activa:
  riesgo_principal:
```

### 5.4. Tensiones secundarias utilizables

| Tensión secundaria | Uso recomendado | Familia de título compatible |
| ------------------ | --------------- | ---------------------------- |

---

## 6. Principios de investigación aplicados al caso

Esta sección debe traducir la investigación sobre títulos al guion analizado.

```yaml
principios_aplicados_al_guion:
  brecha_de_informacion:
    pregunta_que_conviene_abrir:
    informacion_que_debe_retenerse:
    informacion_que_si_debe_revelarse:

  concrecion_calibrada:
    nivel_recomendado_1_a_5:
    razon:
    peligro_si_es_muy_vago:
    peligro_si_es_muy_completo:

  emocion_funcional:
    afecto_disponible_en_el_guion:
    intensidad_recomendada:
    emocion_que_no_debe_forzarse:

  alineacion_titulo_contenido:
    promesa_que_el_guion_si_puede_cumplir:
    promesa_que_no_debe_hacerse:

  retencion_probable:
    tipo_de_espectador_que_debe_atraer:
    tipo_de_espectador_que_debe_evitar_atraer:

  estrategia_de_variacion:
    variantes_que_conviene_probar:
    variantes_que_no_serian_utiles_por_ser_demasiado_parecidas:
```

---

## 7. Familias de títulos con variantes A/B/C

Genera títulos por familias. Cada familia debe tener exactamente tres variantes: A, B y C. Las variantes deben representar diferencias reales de estrategia, no sólo cambios menores de redacción.

Genera como mínimo las siguientes 10 familias, salvo que el guion no lo permita. Si alguna familia no aplica, explícitalo y justifica por qué.

---

### 7.1. Familia A — Mecanismo oculto

**Función:** prometer la explicación de una causa invisible o poco evidente.  
**Se extrae de:** mecanismos, inferencias puente, relaciones causales.  
**Fórmulas:** `El mecanismo que convierte X en Y`, `Por qué X produce Y`, `Cómo X activa Y`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.2. Familia B — Inversión

**Función:** mostrar que algo funciona al revés de lo esperado.  
**Se extrae de:** inversiones, reencuadres, tensiones interpretativas.  
**Fórmulas:** `X no produce Y: produce Z`, `La mejor forma de X es dejar de Y`, `Lo que parece X en realidad es Y`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.3. Familia C — Error común

**Función:** atacar una presuposición inicial del espectador.  
**Se extrae de:** estado cognitivo inicial, déficit cognitivo, presuposiciones activadas.  
**Fórmulas:** `El error de creer que X`, `Por qué interpretamos mal X`, `La confusión que hace fracasar X`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.4. Familia D — Consecuencia inesperada

**Función:** mostrar un efecto contrario al buscado.  
**Se extrae de:** dimensión causal-explicativa.  
**Fórmulas:** `Cuando intentas X, ocurre Y`, `Lo que pasa después de X`, `El efecto invisible de X`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.5. Familia E — Transformación

**Función:** presentar el cambio completo de comprensión.  
**Se extrae de:** estado inicial + estado final.  
**Fórmulas:** `De X a Y`, `Cómo X se convierte en Y`, `Por qué dejamos de ver X como Y`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.6. Familia F — Regla práctica

**Función:** prometer un criterio aplicable.  
**Se extrae de:** regla internalizada, disposición final, dimensión normativa-operativa.  
**Fórmulas:** `Cómo lograr X sin activar Y`, `La regla para X sin Y`, `No hagas X: haz Y`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.7. Familia G — Advertencia

**Función:** mostrar un riesgo oculto.  
**Se extrae de:** tensiones abiertas, puntos de fallo, consecuencias negativas.  
**Fórmulas:** `El peligro de X`, `Cuando X se vuelve contra ti`, `El costo oculto de X`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.8. Familia H — Pregunta

**Función:** activar curiosidad mediante interrogación directa.  
**Se extrae de:** tensión inicial, inferencia puente o mecanismo central.  
**Fórmulas:** `¿Por qué X no funciona?`, `¿Qué pasa cuando X intenta Y?`, `¿Cómo se convierte X en Y?`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.9. Familia I — No es X, es Y

**Función:** condensar un reencuadre.  
**Se extrae de:** reencuadres principales.  
**Fórmulas:** `No es X: es Y`, `No empieza con X: empieza con Y`, `No falla por X: falla por Y`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.10. Familia J — Reconocimiento subjetivo

**Función:** implicar al espectador en la tensión.  
**Se extrae de:** transferencia al receptor, dimensión metacognitiva, puntos de autoimplicación.  
**Fórmulas:** `Eso que haces para X puede estar causando Y`, `La razón por la que X te sale mal`, `Cuando intentas X, activas Y`.

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

## 8. Matriz global de evaluación

Evalúa todos los títulos generados. Puntúa de 1 a 5.

| ID  | Título | Familia | Alineación con guion | Valor atencional | Claridad | Curiosidad | Concreción calibrada | Tensión | Emoción funcional | Honestidad | Retención probable | Total /50 | Dictamen |
| --- | ------ | ------- | -------------------: | ---------------: | -------: | ---------: | -------------------: | ------: | ----------------: | ---------: | -----------------: | --------: | -------- |

Criterios:

```yaml
alineacion_con_guion:
  pregunta: ¿el título promete algo que el guion realmente entrega?

valor_atencional:
  pregunta: ¿el espectador recibe una razón clara para invertir atención?

claridad:
  pregunta: ¿se entiende de qué trata el video o qué problema aborda?

curiosidad:
  pregunta: ¿abre una brecha de información que invita a mirar?

concrecion_calibrada:
  pregunta: ¿evita ser demasiado vago o demasiado completo?

 tension:
  pregunta: ¿contiene conflicto, oposición, paradoja o pregunta relevante?

emocion_funcional:
  pregunta: ¿activa un afecto coherente con el guion?

honestidad:
  pregunta: ¿evita exageración, engaño o promesa falsa?

retencion_probable:
  pregunta: ¿atrae al tipo de espectador que probablemente se quedará?
```

Interpretación:

```txt
45-50: título fuerte, candidato principal.
38-44: título usable, puede mejorar con ajustes.
30-37: título con potencial, pero débil en claridad, tensión o promesa.
menos de 30: título no recomendado.
```

---

## 9. Calibración de curiosidad y concreción

Selecciona los 10 mejores títulos de la matriz y evalúalos con esta tabla.

| Título | Pregunta que abre | Qué revela | Qué retiene | Nivel de concreción 1-5 | ¿Balanceado? | Ajuste recomendado |
| ------ | ----------------- | ---------- | ----------- | ----------------------: | ------------ | ------------------ |

Reglas:

```txt
1 = demasiado vago
2 = vago pero usable
3 = balanceado
4 = concreto potente
5 = demasiado completo
```

Zona recomendada: 3 o 4.

---

## 10. Validación anti-clickbait

Valida como mínimo los 10 títulos mejor puntuados.

| Título | Promesa explícita | Promesa implícita | Evidencia en el guion | Riesgo de exageración | Riesgo de audiencia equivocada | Dictamen |
| ------ | ----------------- | ----------------- | --------------------- | --------------------- | ------------------------------ | -------- |

Dictámenes posibles:

```txt
Aprobado
Modificar
Rechazar
```

Rechaza un título si:

```txt
1. promete una revelación que el guion no entrega;
2. usa una emoción que el video no sostiene;
3. sugiere utilidad práctica que el guion no desarrolla;
4. exagera el alcance de la conclusión;
5. atrae a una audiencia que abandonará rápido;
6. depende de una palabra de moda no desarrollada;
7. usa una afirmación total donde el guion sólo sostiene una tendencia parcial.
```

---

## 11. Ranking final

Entrega los 10 mejores títulos.

| Ranking | Título | Familia | Puntaje | Principal fortaleza | Principal riesgo | Ajuste recomendado |
| ------: | ------ | ------- | ------: | ------------------- | ---------------- | ------------------ |

---

## 12. Top 3 para prueba A/B

Selecciona tres títulos que representen estrategias diferentes. No elijas tres títulos de la misma familia salvo que sea inevitable.

```yaml
top_3_prueba_AB:
  A:
    titulo:
    familia:
    estrategia:
    promesa:
    tension:
    principio_de_investigacion_dominante:
    por_que_conviene_probarlo:
    riesgo:

  B:
    titulo:
    familia:
    estrategia:
    promesa:
    tension:
    principio_de_investigacion_dominante:
    por_que_conviene_probarlo:
    riesgo:

  C:
    titulo:
    familia:
    estrategia:
    promesa:
    tension:
    principio_de_investigacion_dominante:
    por_que_conviene_probarlo:
    riesgo:
```

Las tres estrategias recomendadas suelen ser:

```txt
A: mecanismo oculto o pregunta causal
B: inversión o no es X, es Y
C: regla práctica, advertencia o reconocimiento subjetivo
```

---

## 13. Recomendación final

Entrega una recomendación breve y clara.

```yaml
recomendacion_final:
  titulo_mas_fuerte:
  razon:
  titulo_mas_seguro:
  razon:
  titulo_mas_arriesgado_pero_potente:
  razon:
  familia_mas_prometedora:
  tension_titular_que_conviene_explotar:
  ajuste_general_recomendado:
```

Añade un cierre en prosa:

```txt
El título recomendado es [X] porque condensa [transformación], abre [brecha de información], activa [tensión] y mantiene una promesa que el guion sí puede cumplir.
```

---

# 6. Reglas de ejecución detalladas

## 6.1. No titular desde el tema superficial

No uses el título del libro, capítulo, autor o tema como título principal salvo que eso aumente claramente el valor atencional.

Mal enfoque:

```txt
Análisis de X
Resumen de X
Explicación de X
```

Buen enfoque:

```txt
Por qué X produce Y
Cómo X se convierte en Y
El error de creer que X
No es X: es Y
```

---

## 6.2. Cada título debe responder a una deuda del guion

Para cada título generado, verifica:

```txt
¿Qué promete?
¿Qué parte del guion lo cumple?
¿Qué transformación ofrece?
¿Qué tensión abre?
¿Qué riesgo produce?
```

Si no puedes responder estas preguntas, el título debe modificarse o rechazarse.

---

## 6.3. La emoción debe salir del guion

No agregues emociones artificiales. Si el guion trabaja con inquietud, usa inquietud. Si trabaja con reconocimiento, usa reconocimiento. Si trabaja con sorpresa conceptual, usa sorpresa conceptual.

No conviertas todo en alarma, escándalo o urgencia.

---

## 6.4. La curiosidad debe ser concreta

Evita misterio vacío:

```txt
Esto lo cambia todo
La verdad que nadie te cuenta
No vas a creer esto
```

Prefiere brechas claras:

```txt
Por qué X no funciona como crees
Cómo X termina produciendo Y
El mecanismo que convierte X en Y
```

---

## 6.5. La prueba A/B debe comparar estrategias

No propongas variantes casi iguales.

Incorrecto:

```txt
A: Por qué criticar no funciona
B: Por qué la crítica no funciona
C: Por qué criticar casi nunca funciona
```

Correcto:

```txt
A: Por qué criticar casi nunca cambia a nadie
B: Cuando criticas, el otro no aprende: se defiende
C: Cómo influir sin activar defensa
```

---

# 7. Bibliografía operativa integrada

Estas fuentes fundamentan los criterios del protocolo. No es necesario citarlas en la salida final salvo que el usuario lo pida. Úsalas como base conceptual para evaluar títulos.

## 7.1. Curiosidad e information gap

**Loewenstein, G. (1994). “The Psychology of Curiosity: A Review and Reinterpretation.” Psychological Bulletin, 116(1), 75–98.**  
Uso: curiosidad como brecha entre lo que se sabe y lo que se quiere saber.  
URL: https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf

**Qiu, J., & Golman, R. (2024). “Curiosity in News Consumption.”**  
Uso: aplicación de la brecha de información a titulares y consumo de noticias.  
URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4221372

**van Lieshout, L. L. F., de Lange, F. P., & Cools, R. (2021). “Uncertainty increases curiosity, but decreases happiness.” Scientific Reports, 11, 14014.**  
Uso: la incertidumbre aumenta curiosidad, pero puede reducir satisfacción si se vuelve excesiva.  
URL: https://www.nature.com/articles/s41598-021-93464-6

## 7.2. Titulares, concreción y experimentación

**Gligorić, K., Lifchits, G., West, R., & Anderson, A. (2023). “Linguistic effects on news headline success: Evidence from thousands of online field experiments.” PLOS ONE, 18(3), e0281682.**  
Uso: evidencia experimental sobre rasgos lingüísticos de titulares; justifica generar y evaluar variantes.  
URL: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0281682

**Le Quéré, M. A., & Matias, J. N. (2025). “When curiosity gaps backfire: effects of headline concreteness on information selection decisions.” Scientific Reports, 15, 994.**  
Uso: concreción calibrada; evitar vaguedad extrema y exceso de información.  
URL: https://www.nature.com/articles/s41598-024-81575-9

**Matias, J. N., Munger, K., Le Quéré, M. A., & Ebersole, C. (2021). “The Upworthy Research Archive, a time series of 32,487 experiments in U.S. media.” Scientific Data.**  
Uso: cultura de prueba experimental con titulares.  
URL: https://www.nature.com/articles/s41597-021-00934-7

## 7.3. Clickbait y límites de la curiosidad

**Molina, M. D., Sundar, S. S., Le, T., & Lee, D. (2021). “Does Clickbait Actually Attract More Clicks? Three Clickbait Studies You Must Read.” CHI 2021.**  
Uso: no asumir que clickbait siempre genera mejores resultados; priorizar promesa cumplida.  
URL: https://pike.psu.edu/publications/chi21.pdf

**Jung, A.-K., Stieglitz, S., Kissmer, T., Mirbabaie, M., & Kroll, T. (2022). “Click me…! The influence of clickbait on user engagement in social media and the role of digital nudging.” PLOS ONE, 17(6), e0266743.**  
Uso: relación entre clickbait, interacción y credibilidad.  
URL: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0266743

## 7.4. YouTube, título, miniatura y alineación

**Gothankar, R., Di Troia, F., & Stamp, M. (2021). “Clickbait Detection in YouTube Videos.” arXiv:2107.12791.**  
Uso: título y miniatura como señales previas al clic.  
URL: https://arxiv.org/pdf/2107.12791

**Mowar, P., Jain, M., Goel, R., & Vishwakarma, D. K. (2021/2022). “Clickbait in YouTube: Prevention, Detection and Analysis of the Bait using Ensemble Learning.” arXiv:2112.08611.**  
Uso: categorías de clickbait en YouTube: promesa falsa, exageración, desalineación y curiosidad explotada.  
URL: https://arxiv.org/pdf/2112.08611

**Qu, J., Potthast, M., & Hagen, M. (2018). “Towards Crowdsourcing Clickbait Labels for YouTube Videos.” CEUR Workshop Proceedings.**  
Uso: metodología de comparación entre título, miniatura, teaser y contenido.  
URL: https://ceur-ws.org/Vol-2173/paper11.pdf

## 7.5. Emoción, activación y transmisión social

**Berger, J., & Milkman, K. L. (2012). “What Makes Online Content Viral?” Journal of Marketing Research, 49(2), 192–205.**  
Uso: emoción, interés y activación como factores de transmisión.  
URL: https://jonahberger.com/wp-content/uploads/2013/02/ViralityB.pdf

**Berger, J. (2011). “Arousal Increases Social Transmission of Information.” Psychological Science, 22(7), 891–893.**  
Uso: la activación emocional puede aumentar la transmisión de información.  
URL: https://jonahberger.com/wp-content/uploads/2013/02/Arousal2.pdf

## 7.6. Criterios operativos de plataforma

**YouTube Help. “Impressions & click-through-rate FAQs.”**  
Uso: no optimizar sólo CTR; considerar duración media, satisfacción y continuidad.  
URL: https://support.google.com/youtube/answer/7628154?hl=en

**YouTube Help. “A/B test titles and thumbnails.”**  
Uso: evaluar variantes por desempeño, especialmente tiempo de visualización.  
URL: https://support.google.com/youtube/answer/16391400?hl=en-GB

---

# 8. Fórmula final del protocolo

```txt
guion_en_crudo
  → transformación cognitiva
    → trayectoria atencional
      → núcleo titular integrado
        → tensión titular dominante
          → principios de investigación aplicados
            → familias de títulos
              → variantes A/B/C
                → calibración curiosidad-concreción
                  → validación anti-clickbait
                    → ranking
                      → top 3 para prueba
```

Versión compacta:

```txt
Buen título =
  atención merecida
  + promesa clara
  + curiosidad calibrada
  + tensión real
  + emoción funcional
  + cumplimiento en el guion
  + potencial de retención.
```

---

# 9. Checklist final para la IA ejecutora

Antes de entregar la respuesta, verifica:

```txt
[ ] No generé títulos desde el tema superficial.
[ ] Reconstruí la transformación cognitiva central.
[ ] Analicé la trayectoria atencional.
[ ] Identifiqué tensión titular dominante.
[ ] Apliqué principios de investigación en cada familia.
[ ] Generé familias de títulos con variantes A/B/C.
[ ] Evalué todos los títulos con puntuación.
[ ] Calibré curiosidad y concreción.
[ ] Validé riesgos de clickbait.
[ ] Entregué ranking final.
[ ] Entregué top 3 para prueba A/B.
[ ] Justifiqué la recomendación final.
```

Fin del documento.

# 10. Plantilla estricta de salida esperada

Cuando ejecutes este protocolo, la respuesta final debe seguir exactamente la estructura indicada en esta sección.

No entregues una respuesta libre.
No entregues solamente títulos.
No entregues solamente recomendaciones.
No omitas secciones salvo que el contenido del guion lo haga imposible; en ese caso, escribe `No aplica` y justifica brevemente por qué.

La salida debe estar organizada en Markdown y debe incluir análisis, matrices, títulos, evaluación, ranking y recomendación final.

---

# Sistema de títulos para el video

## 1. Identificación del material analizado

Entrega una lectura inicial del material recibido.

```yaml
identificacion:
  tipo_de_material:
  extension_aproximada:
  tema_superficial:
  genero_discursivo:
  audiencia_probable:
  objetivo_aparente_del_video:
  promesa_general_detectada:
  advertencia_de_alcance:
```

Después añade un párrafo breve con esta forma:

```txt
El material parece intentar llevar al espectador desde [estado inicial probable] hacia [estado final esperado], mediante [recorrido general del guion].
```

---

## 2. Diagnóstico cognitivo del guion

Esta sección debe aplicar el `modelador_de_situacion_cognitiva`. No debe ser un resumen temático. Debe reconstruir la transformación mental que el guion produce.

### 2.1. Estado cognitivo inicial del espectador

```yaml
estado_cognitivo_inicial:
  creencia_probable_del_espectador:
  presuposiciones_activadas:
  deficit_cognitivo:
  tension_inicial:
  foco_inicial_del_problema:
  expectativa_que_el_guion_va_a_modificar:
```

### 2.2. Entidades cognitivas titularizables

Incluye sólo entidades útiles para crear títulos.

```yaml
entidades_titularizables:
  conceptos_centrales:
  mecanismos:
  oposiciones:
  reglas_o_principios:
  afectos_activados:
  imagenes_o_metaforas_fuertes:
  palabras_clave_potenciales:
```

### 2.3. Tensiones interpretativas del guion

Incluye entre 3 y 7 tensiones.

| ID  | Tensión interpretativa | Expectativa inicial | Movimiento del guion | Potencial titular |
| --- | ---------------------- | ------------------- | -------------------- | ----------------- |
| T1  |                        |                     |                      | Alto/Medio/Bajo   |
| T2  |                        |                     |                      | Alto/Medio/Bajo   |
| T3  |                        |                     |                      | Alto/Medio/Bajo   |

### 2.4. Actualizaciones cognitivas clave

Selecciona sólo las actualizaciones que sirven para construir títulos.

| Tramo | Estado antes | Operación cognitiva | Estado después | Utilidad para título |
| ----- | ------------ | ------------------- | -------------- | -------------------- |
| 1     |              |                     |                |                      |
| 2     |              |                     |                |                      |
| 3     |              |                     |                |                      |

### 2.5. Reencuadres principales

| Marco anterior | Nuevo marco | Efecto en el espectador | Posible fórmula titular |
| -------------- | ----------- | ----------------------- | ----------------------- |
|                |             |                         |                         |

### 2.6. Transformación cognitiva central

Formula la transformación en tres niveles.

```yaml
transformacion_cognitiva_central:
  version_breve: "De X a Y"
  version_explicativa: "El espectador deja de ver X como Y y empieza a verlo como Z."
  version_titularizable: "La tensión más útil para título es..."
```

### 2.7. Estado cognitivo final

```yaml
estado_cognitivo_final:
  comprension_resultante:
  regla_o_criterio_instalado:
  tensiones_resueltas:
  tensiones_abiertas:
  disposicion_final_del_espectador:
```

---

## 3. Diagnóstico intencional-atencional

Esta sección debe aplicar el `analizador_intencional_atencional`. Debe mostrar cómo el guion administra la atención del espectador.

### 3.1. Intención global

```yaml
intencion_global:
  formulacion:
  tipo:
  estrategia_dominante:
  estado_atencional_inicial:
  estado_atencional_final:
```

### 3.2. Foco global

```yaml
foco_global:
  objeto_de_atencion:
  tipo_de_foco:
  tension_central:
  desplazamiento_principal:
  clausura_o_proyeccion:
```

### 3.3. Trayectoria atencional

Usa estados como: atención capturada, intrigada, en disonancia, focalizada, expandida, generalizante, reflexiva, identificatoria, emocionalizada, normativizada, clausurada o proyectada.

| Fase | Estado atencional | Foco | Operación atencional | Función en el guion |
| ---- | ----------------- | ---- | -------------------- | ------------------- |
| 1    |                   |      |                      |                     |
| 2    |                   |      |                      |                     |
| 3    |                   |      |                      |                     |

### 3.4. Focos de alta captura

Identifica los focos más útiles para crear títulos.

| Foco | Tipo | Operación atencional | Intensidad      | Razón de potencial titular |
| ---- | ---- | -------------------- | --------------- | -------------------------- |
|      |      |                      | Alta/Media/Baja |                            |

### 3.5. Diagnóstico atencional para el título

```yaml
diagnostico_atencional_titular:
  mejor_foco_de_entrada:
  operacion_que_debe_realizar_el_titulo:
  estado_atencional_que_debe_activar:
  afecto_de_entrada_recomendado:
  riesgo_de_saturacion_o_confusion:
```

---

## 4. Núcleo titular integrado

Integra el diagnóstico cognitivo y el diagnóstico intencional-atencional.

```yaml
nucleo_titular_integrado:
  tema_superficial:
  estado_inicial_del_espectador:
  estado_final_del_espectador:
  transformacion_cognitiva_central:
  foco_atencional_de_entrada:
  tension_principal:
  mecanismo_central:
  reencuadre_principal:
  afecto_dominante:
  promesa_de_valor_atencional:
  pregunta_que_debe_abrir_el_titulo:
  deuda_cognitiva_del_video:
  evidencia_minima_que_debe_cumplir_el_guion:
```

Después añade una frase de síntesis:

```txt
El título debería prometer que el espectador entenderá [transformación] mediante [tensión/foco], sin revelar completamente [elemento que sostiene la curiosidad].
```

---

## 5. Determinación de la tensión titular dominante

Evalúa las tensiones posibles y elige una tensión titular dominante.

### 5.1. Matriz de selección de tensión

| Tipo de tensión | Presencia en el guion | Fuerza atencional | Claridad para público | Riesgo | Puntuación 1-5 |
| --------------- | --------------------: | ----------------: | --------------------: | ------ | -------------: |
| Cognitiva       |                       |                   |                       |        |                |
| Emocional       |                       |                   |                       |        |                |
| Práctica        |                       |                   |                       |        |                |
| Moral           |                       |                   |                       |        |                |
| Estratégica     |                       |                   |                       |        |                |
| Narrativa       |                       |                   |                       |        |                |
| Metacognitiva   |                       |                   |                       |        |                |

### 5.2. Dictamen de tensión dominante

```yaml
tension_titular_dominante:
  tipo:
  formulacion:
  por_que_es_la_mas_fuerte:
  que_estado_inicial_activa:
  que_estado_final_promete:
  que_foco_atencional_abre:
  que_operacion_atencional_realiza:
  que_afecto_activa:
  riesgo_principal:
```

### 5.3. Tensiones secundarias utilizables

| Tensión secundaria | Uso recomendado | Familia de título compatible |
| ------------------ | --------------- | ---------------------------- |
|                    |                 |                              |

---

## 6. Principios de investigación aplicados al caso

Esta sección debe traducir los principios de investigación sobre títulos al guion analizado. No los menciones como teoría abstracta: aplícalos al caso.

```yaml
principios_aplicados_al_guion:
  brecha_de_informacion:
    pregunta_que_conviene_abrir:
    informacion_que_debe_revelarse:
    informacion_que_debe_retenerse:

  concrecion_calibrada:
    nivel_recomendado_1_a_5:
    razon:
    peligro_si_el_titulo_es_muy_vago:
    peligro_si_el_titulo_es_muy_completo:

  emocion_funcional:
    afecto_disponible_en_el_guion:
    intensidad_recomendada:
    emocion_que_no_debe_forzarse:

  alineacion_titulo_contenido:
    promesa_que_el_guion_si_puede_cumplir:
    promesa_que_no_debe_hacerse:

  retencion_probable:
    tipo_de_espectador_que_debe_atraer:
    tipo_de_espectador_que_debe_evitar_atraer:

  estrategia_de_variacion:
    variantes_que_conviene_probar:
    variantes_que_no_serian_utiles_por_ser_demasiado_parecidas:
```

---

## 7. Familias de títulos con variantes A/B/C

Genera títulos por familias. Cada familia debe tener exactamente tres variantes: A, B y C. Las variantes deben representar diferencias reales de estrategia, no simples cambios menores de redacción.

Genera como mínimo las 10 familias siguientes. Si alguna familia no aplica, escribe `No aplica` y justifica por qué.

---

### 7.1. Familia A — Mecanismo oculto

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.2. Familia B — Inversión

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.3. Familia C — Error común

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.4. Familia D — Consecuencia inesperada

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.5. Familia E — Transformación

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.6. Familia F — Regla práctica

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.7. Familia G — Advertencia

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.8. Familia H — Pregunta

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.9. Familia I — No es X, es Y

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

### 7.10. Familia J — Reconocimiento subjetivo

| Variante | Título | Promesa | Tensión | Operación atencional | Principio de investigación aplicado | Riesgo |
| -------- | ------ | ------- | ------- | -------------------- | ----------------------------------- | ------ |
| A        |        |         |         |                      |                                     |        |
| B        |        |         |         |                      |                                     |        |
| C        |        |         |         |                      |                                     |        |

---

## 8. Matriz global de evaluación

Evalúa todos los títulos generados. Puntúa cada criterio de 1 a 5.

| ID  | Título | Familia | Alineación con guion | Valor atencional | Claridad | Curiosidad | Concreción calibrada | Tensión | Emoción funcional | Honestidad | Retención probable | Total /50 | Dictamen |
| --- | ------ | ------- | -------------------: | ---------------: | -------: | ---------: | -------------------: | ------: | ----------------: | ---------: | -----------------: | --------: | -------- |
|     |        |         |                      |                  |          |            |                      |         |                   |            |                    |           |          |

Interpretación del puntaje:

```txt
45-50: título fuerte; candidato principal.
38-44: título usable; puede mejorar con ajustes.
30-37: título con potencial, pero débil en claridad, tensión o promesa.
menos de 30: título no recomendado.
```

---

## 9. Calibración de curiosidad y concreción

Selecciona los 10 mejores títulos de la matriz y evalúalos con esta tabla.

| Título | Pregunta que abre | Qué revela | Qué retiene | Nivel de concreción 1-5 | ¿Balanceado? | Ajuste recomendado |
| ------ | ----------------- | ---------- | ----------- | ----------------------: | ------------ | ------------------ |
|        |                   |            |             |                         | Sí/No        |                    |

Reglas:

```txt
1 = demasiado vago
2 = vago pero usable
3 = balanceado
4 = concreto potente
5 = demasiado completo
```

Zona recomendada: 3 o 4.

---

## 10. Validación anti-clickbait

Valida como mínimo los 10 títulos mejor puntuados.

| Título | Promesa explícita | Promesa implícita | Evidencia en el guion | Riesgo de exageración | Riesgo de audiencia equivocada | Dictamen                    |
| ------ | ----------------- | ----------------- | --------------------- | --------------------- | ------------------------------ | --------------------------- |
|        |                   |                   |                       | Bajo/Medio/Alto       | Bajo/Medio/Alto                | Aprobado/Modificar/Rechazar |

Rechaza un título si:

```txt
1. promete una revelación que el guion no entrega;
2. usa una emoción que el video no sostiene;
3. sugiere utilidad práctica que el guion no desarrolla;
4. exagera el alcance de la conclusión;
5. atrae a una audiencia que abandonará rápido;
6. depende de una palabra de moda no desarrollada;
7. usa una afirmación total donde el guion sólo sostiene una tendencia parcial.
```

---

## 11. Ranking final

Entrega los 10 mejores títulos.

| Ranking | Título | Familia | Puntaje | Principal fortaleza | Principal riesgo | Ajuste recomendado |
| ------: | ------ | ------- | ------: | ------------------- | ---------------- | ------------------ |
|       1 |        |         |         |                     |                  |                    |
|       2 |        |         |         |                     |                  |                    |
|       3 |        |         |         |                     |                  |                    |

---

## 12. Top 3 para prueba A/B

Selecciona tres títulos que representen estrategias diferentes. No elijas tres títulos de la misma familia salvo que sea inevitable.

```yaml
top_3_prueba_AB:
  A:
    titulo:
    familia:
    estrategia:
    promesa:
    tension:
    principio_de_investigacion_dominante:
    por_que_conviene_probarlo:
    riesgo:

  B:
    titulo:
    familia:
    estrategia:
    promesa:
    tension:
    principio_de_investigacion_dominante:
    por_que_conviene_probarlo:
    riesgo:

  C:
    titulo:
    familia:
    estrategia:
    promesa:
    tension:
    principio_de_investigacion_dominante:
    por_que_conviene_probarlo:
    riesgo:
```

Las tres estrategias recomendadas suelen ser:

```txt
A: mecanismo oculto o pregunta causal.
B: inversión o no es X, es Y.
C: regla práctica, advertencia o reconocimiento subjetivo.
```

---

## 13. Recomendación final

Entrega una recomendación breve y clara.

```yaml
recomendacion_final:
  titulo_mas_fuerte:
  razon:
  titulo_mas_seguro:
  razon:
  titulo_mas_arriesgado_pero_potente:
  razon:
  familia_mas_prometedora:
  tension_titular_que_conviene_explotar:
  ajuste_general_recomendado:
```

Añade un cierre en prosa:

```txt
El título recomendado es [X] porque condensa [transformación], abre [brecha de información], activa [tensión] y mantiene una promesa que el guion sí puede cumplir.
```

---

## 14. Checklist de cumplimiento de salida

Antes de finalizar la respuesta, verifica:

```txt
[ ] La respuesta siguió la estructura completa de esta plantilla.
[ ] Se entregó diagnóstico cognitivo.
[ ] Se entregó diagnóstico intencional-atencional.
[ ] Se formuló el núcleo titular integrado.
[ ] Se eligió tensión titular dominante.
[ ] Se aplicaron principios de investigación al caso.
[ ] Se generaron familias de títulos con variantes A/B/C.
[ ] Se evaluaron los títulos con matriz numérica.
[ ] Se calibraron curiosidad y concreción.
[ ] Se validó riesgo de clickbait.
[ ] Se entregó ranking final.
[ ] Se entregó top 3 para prueba A/B.
[ ] Se entregó recomendación final.
```
