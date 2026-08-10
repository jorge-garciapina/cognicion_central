# Modelo especializado: `detector_de_esquemas_narrativos`

**Sistema:** MAANC / Arquitectura Macro Narrativo-Cognitiva  
**Módulo:** 9. `detector_de_esquemas_narrativos`  
**Tipo de documento:** modelo operativo reusable  
**Uso previsto:** análisis de textos, capítulos, guiones, discursos, clases, carousels, videos cortos y otras manifestaciones narrativo-cognitivas.  
**Nota de alcance:** este documento describe el modelo en abstracto. No contiene aplicación a ningún texto particular.

---

## 1. Definición general

El `detector_de_esquemas_narrativos` es el módulo del MAANC encargado de identificar la **gramática abstracta de transformación** que organiza una manifestación.

No se limita a detectar si un texto “cuenta una historia”. Detecta si la manifestación instancia un patrón reutilizable de evolución cognitiva, narrativa, expositiva, argumentativa, emocional o práctica.

En forma compacta:

```txt
detector_de_esquemas_narrativos =
módulo que identifica la estructura profunda reutilizable que hace avanzar una manifestación.
```

En forma extendida:

```txt
detector_de_esquemas_narrativos =
módulo que reconoce patrones abstractos de transformación textual,
compuestos por estados, funciones, transiciones, pruebas, desvíos,
ejemplos, contraejemplos, acumulaciones, revelaciones, cierres y reglas,
para convertir una manifestación concreta en una estructura reutilizable dentro de la ACCD.
```

Su unidad de análisis no es simplemente la sección visible, el párrafo o el episodio. Su unidad propia es el **esquema narrativo-cognitivo**.

---

## 2. Problema que resuelve

El análisis textual suele quedarse en niveles superficiales:

```txt
- El texto tiene ejemplos.
- El texto tiene una introducción.
- El texto tiene una conclusión.
- El texto cuenta una historia.
- El texto da una regla.
```

El detector especializado debe ir más profundo:

```txt
- ¿Qué función cumplen esos ejemplos?
- ¿Qué transformación produce la introducción?
- ¿Qué tipo de cierre genera la conclusión?
- ¿La historia funciona como prueba, analogía, contraste, apertura emocional o advertencia?
- ¿La regla final condensa una trayectoria previa o aparece sin preparación?
```

El problema que resuelve es este:

```txt
Dado un texto o manifestación, identificar qué patrón abstracto organiza su avance,
qué subesquemas aparecen dentro de él,
qué función cumple cada uno,
y cómo esa estructura puede reutilizarse en otros codominios de la ACCD.
```

---

## 3. Diferencia entre patrón, esquema y gramática

### 3.1. Patrón superficial

Un patrón superficial es una secuencia visible o una forma de organización aparente.

```txt
ejemplo → explicación → conclusión
```

Sirve como pista, pero no basta para caracterizar la estructura profunda.

### 3.2. Esquema narrativo-cognitivo

Un esquema narrativo-cognitivo es una trayectoria abstracta de transformación.

```txt
confusión inicial
  → distinción conceptual
    → aplicación práctica
      → criterio operativo
```

El esquema explica cómo la manifestación transforma el estado interpretativo del receptor.

### 3.3. Gramática de esquema

Una gramática de esquema define qué componentes son obligatorios, opcionales, repetibles o incrustables.

```yaml
gramatica_de_esquema:
  componentes_obligatorios: []
  componentes_repetibles: []
  componentes_opcionales: []
  forma_de_cierre: []
  condiciones_de_pertenencia: []
```

Este nivel convierte una trayectoria detectada en una estructura reusable.

---

## 4. Diferencia con otros módulos del MAANC

El detector trabaja conectado con otros módulos, pero no se confunde con ellos.

### 4.1. Diferencia con `extractor_de_macroestructura`

El `extractor_de_macroestructura` responde:

```txt
¿Cuál es el sentido global del texto?
```

El `detector_de_esquemas_narrativos` responde:

```txt
¿Qué patrón de transformación organiza ese sentido global?
```

### 4.2. Diferencia con `segmentador_funcional`

El `segmentador_funcional` responde:

```txt
¿Dónde cambian las funciones del texto?
```

El detector responde:

```txt
¿Qué esquema se forma cuando esas funciones se encadenan?
```

### 4.3. Diferencia con `constructor_de_trayectoria_narrativa`

El constructor de trayectoria reconstruye la evolución concreta de la manifestación.

El detector abstrae esa trayectoria para reconocer un esquema reutilizable.

```txt
trayectoria concreta:
  esta pieza avanza de A a B a C.

esquema narrativo:
  esta pieza instancia el patrón abstracto X.
```

### 4.4. Diferencia con `analizador_argumentativo`

El analizador argumentativo detecta claims, grounds, warrants, objeciones y respaldos.

El detector puede reconocer que toda esa estructura argumentativa instancia un esquema mayor, por ejemplo:

```txt
tesis → objeción → respuesta → tesis refinada
```

### 4.5. Diferencia con `integrador_ACCD`

El integrador ACCD traduce los resultados de todos los módulos al lenguaje del sistema.

El detector produce una ficha de esquema; el integrador decide cómo esa ficha se incorpora a arquitectura macro, familias cognitivas, codominios y protocolos.

---

## 5. Fundamento conceptual

El módulo combina cuatro ideas académicas principales:

### 5.1. Story grammars

La tradición de las story grammars permite entender que una historia o manifestación puede describirse como una estructura generada por reglas. El módulo toma de aquí la idea de que una trayectoria narrativa puede tener componentes recurrentes y relaciones esperables.

### 5.2. Schemas

Los esquemas permiten pensar que el receptor procesa una manifestación apoyándose en patrones previos de comprensión.

Dentro del detector, un esquema no es una etiqueta literaria, sino una estructura cognitiva que organiza expectativas, transiciones y estados interpretativos.

### 5.3. Scripts, plans y goals

La tradición de scripts, plans y goals permite separar:

```txt
script:
  situación recurrente esperada.

plan:
  organización de acciones hacia un objetivo.

goal:
  meta que orienta acciones o decisiones.

esquema narrativo:
  patrón de transformación global de sentido.
```

Esta distinción es importante porque muchos textos no cuentan historias literales, pero sí activan scripts, planes o metas.

### 5.4. Funciones narrativas

La tradición morfológica de análisis narrativo enseña que lo importante no es solo quién aparece o qué escena se presenta, sino qué función cumple cada componente.

Una anécdota, por ejemplo, puede funcionar como:

```txt
prueba
advertencia
analogía
contraste
legitimación
apertura emocional
transición
revelación
```

El detector debe reconocer la función, no la superficie.

---

## 6. Entrada del módulo

El módulo puede operar con el texto crudo, pero funciona mejor si recibe una representación previamente procesada por otros módulos del MAANC.

```yaml
entrada_detector_de_esquemas_narrativos:
  texto_o_manifestacion:
    titulo:
    tipo:
    fuente:
    unidad_de_analisis:

  segmentacion_funcional:
    secciones_macro:
      - section_id:
        rango_textual:
        responsabilidad_narrativo_cognitiva:
        funcion_local:
        subsecciones:

  trayectoria_narrativa:
    estado_inicial:
    operaciones_transformadoras:
    estado_final:
    grado_de_clausura:

  relaciones:
    conexiones:
      - from:
        to:
        tipo_de_relacion:
        funcion_de_la_relacion:

  macroestructura_semantica:
    macroproposiciones:
      - macro_id:
        formulacion:
        funcion:
```

---

## 7. Salida del módulo

La salida no debe ser una etiqueta aislada. Debe ser una ficha completa del esquema detectado.

```yaml
salida_detector_de_esquemas_narrativos:
  esquema_narrativo_detectado:
    nombre_del_esquema:
    formulacion_abstracta:
    tipo_de_esquema:
    grado_de_ajuste:
    evidencia_global:

  estructura_del_esquema:
    estado_inicial_esperado:
    disparador_o_transformacion:
    desarrollo_del_esquema:
    forma_de_llegada:
    estado_final_resultante:

  correspondencia_con_el_texto:
    - componente_del_esquema:
      secciones_textuales_asociadas:
      funcion_en_el_texto:
      evidencia:

  esquemas_locales:
    - nombre:
      ubicacion:
      funcion_local:
      relacion_con_esquema_global:

  incrustaciones:
    - esquema_insertado:
      esquema_contenedor:
      funcion_de_la_incrustacion:

  desviaciones:
    - desviacion_id:
      descripcion:
      funcion_de_la_desviacion:
      efecto_interpretativo:

  potencial_de_reutilizacion:
    puede_usarse_para:
      - analisis
      - generacion
      - comparacion
      - transferencia_a_otro_codominio
```

---

## 8. Arquitectura interna del módulo

El detector se compone de nueve submódulos.

```txt
detector_de_esquemas_narrativos
  1. detector_de_estado_inicial
  2. detector_de_disparador_esquemático
  3. extractor_de_funciones_narrativo_cognitivas
  4. normalizador_de_trayectoria
  5. detector_de_esquema_global
  6. detector_de_esquemas_locales
  7. analizador_de_incrustaciones
  8. evaluador_de_dominancia_y_ajuste
  9. generador_de_ficha_reutilizable
```

---

## 9. Submódulo 1: `detector_de_estado_inicial`

### 9.1. Pregunta principal

```txt
¿Qué cree, siente, espera, presupone o necesita el receptor antes de la transformación?
```

### 9.2. Qué detecta

```yaml
estado_inicial:
  presuposiciones:
  intuiciones_comunes:
  expectativas:
  errores_probables:
  carencias_cognitivas:
  disposiciones_afectivas:
```

### 9.3. Señales de detección

- preguntas iniciales;
- problemas formulados;
- errores comunes;
- escenas impactantes;
- afirmaciones contraintuitivas;
- descripciones de una práctica habitual;
- presuposiciones que luego serán corregidas.

### 9.4. Validación

Un estado inicial es válido si explica por qué el texto necesita avanzar.

---

## 10. Submódulo 2: `detector_de_disparador_esquemático`

### 10.1. Pregunta principal

```txt
¿Qué unidad activa el esquema?
```

### 10.2. Qué puede ser un disparador

```txt
caso extremo
anécdota
pregunta
problema
contradicción
escena emocional
dato sorprendente
objeción
fracaso
error
ruptura de expectativa
```

### 10.3. Salida

```yaml
disparador_esquematico:
  unidad:
  tipo:
  funcion:
  efecto_sobre_receptor:
  relacion_con_estado_inicial:
```

---

## 11. Submódulo 3: `extractor_de_funciones_narrativo_cognitivas`

### 11.1. Pregunta principal

```txt
¿Qué hace cada unidad dentro de la transformación global?
```

### 11.2. Funciones posibles

```txt
abrir problema
instalar tensión
revelar mecanismo
generalizar
particularizar
ejemplificar
contrastar
refutar
respaldar
legitimar
transferir
acumular evidencia
producir inferencia
interiorizar emocionalmente
condensar regla
cerrar
proyectar continuidad
```

### 11.3. Forma de salida

```yaml
funcion_narrativo_cognitiva:
  tipo_superficial:
  funcion_profunda:
  responsabilidad:
  operacion_cognitiva:
  efecto_sobre_receptor:
```

---

## 12. Submódulo 4: `normalizador_de_trayectoria`

### 12.1. Pregunta principal

```txt
¿Cómo se reduce la trayectoria concreta a una fórmula abstracta?
```

### 12.2. Operación

Convierte una secuencia concreta de secciones en una trayectoria reutilizable.

```txt
texto concreto:
  sección A → sección B → sección C → sección D

trayectoria normalizada:
  problema → distinción → aplicación → regla
```

### 12.3. Salida

```yaml
trayectoria_normalizada:
  formula:
  componentes:
  tipo_de_transformacion:
  grado_de_abstraccion:
```

---

## 13. Submódulo 5: `detector_de_esquema_global`

### 13.1. Pregunta principal

```txt
¿Qué esquema organiza la manifestación completa?
```

### 13.2. Operación

Compara la trayectoria normalizada con una biblioteca de esquemas.

```yaml
esquemas_candidatos:
  - nombre:
    grado_de_ajuste:
    evidencia:
    limitaciones:
```

### 13.3. Resultado

```yaml
esquema_global_detectado:
  nombre:
  familia:
  formula:
  ajuste:
  razon_de_seleccion:
```

---

## 14. Submódulo 6: `detector_de_esquemas_locales`

### 14.1. Pregunta principal

```txt
¿Qué esquemas aparecen dentro de secciones o subsecciones específicas?
```

### 14.2. Diferencia entre global y local

```txt
esquema_global:
  organiza la manifestación completa.

esquema_local:
  organiza una sección, ejemplo, anécdota, argumento o tramo interno.
```

### 14.3. Salida

```yaml
esquemas_locales:
  - ubicacion:
    esquema:
    trayectoria_local:
    funcion_dentro_del_esquema_global:
```

---

## 15. Submódulo 7: `analizador_de_incrustaciones`

### 15.1. Pregunta principal

```txt
¿Qué esquemas aparecen insertados dentro de otros esquemas?
```

### 15.2. Concepto de incrustación

Una incrustación ocurre cuando una unidad local usa una mini-estructura propia para cumplir una función dentro de una estructura mayor.

Ejemplo abstracto:

```txt
esquema global:
  problema → solución

esquema insertado:
  mini-historia de fracaso → aprendizaje
```

### 15.3. Salida

```yaml
incrustacion:
  esquema_insertado:
  esquema_contenedor:
  funcion:
  efecto:
```

---

## 16. Submódulo 8: `evaluador_de_dominancia_y_ajuste`

### 16.1. Pregunta principal

```txt
¿El esquema detectado realmente domina la manifestación?
```

### 16.2. Criterios

```yaml
criterios_de_dominancia:
  cobertura:
    pregunta: el esquema explica la mayor parte del texto?

  dependencia:
    pregunta: las secciones dependen del esquema para tener sentido?

  terminalidad:
    pregunta: el cierre completa la trayectoria del esquema?

  recurrencia:
    pregunta: el mismo principio estructural reaparece en varias zonas?

  poder_explicativo:
    pregunta: este esquema explica mejor el texto que otros candidatos?
```

### 16.3. Escala sugerida

```txt
muy_alto
alto
medio
bajo
ambiguo
```

---

## 17. Submódulo 9: `generador_de_ficha_reutilizable`

### 17.1. Pregunta principal

```txt
¿Cómo convertir el esquema detectado en una estructura reusable?
```

### 17.2. Ficha de salida

```yaml
ficha_de_esquema_narrativo:
  id_esquema:
  nombre:
  familia:
  descripcion:
  trayectoria_abstracta:
  componentes_obligatorios:
  componentes_repetibles:
  componentes_opcionales:
  señales_de_deteccion:
  condiciones_de_pertenencia:
  variantes:
  desviaciones:
  compatibilidad_codominial:
  usos_generativos:
```

---

## 18. Biblioteca inicial de familias de esquemas

Esta biblioteca no debe entenderse como cerrada. Es un repertorio inicial.

### 18.1. Esquemas de revelación

```yaml
revelacion_de_mecanismo:
  formula: superficie → mecanismo_oculto → nueva_lectura
  funcion: hacer visible la estructura invisible detrás de una conducta o fenómeno

revelacion_de_autoengaño:
  formula: justificacion_aparente → mecanismo_defensivo → reinterpretacion
  funcion: mostrar que una explicación consciente oculta otro proceso

revelacion_de_costo_oculto:
  formula: practica_comun → daño_no_visto → regla_preventiva
  funcion: mostrar que algo aparentemente normal produce daño
```

### 18.2. Esquemas de transferencia

```yaml
caso_extremo_a_vida_cotidiana:
  formula: caso_extremo → generalizacion → receptor
  funcion: transferir una verdad desde una situación límite hacia la vida común

caso_historico_a_principio:
  formula: evento_historico → interpretacion → principio
  funcion: convertir historia en regla práctica

caso_personal_a_norma:
  formula: experiencia_personal → aprendizaje → recomendacion
  funcion: legitimar una norma desde experiencia propia
```

### 18.3. Esquemas de acumulación

```yaml
acumulacion_confirmatoria:
  formula: ejemplo_1 → ejemplo_2 → ejemplo_3 → generalizacion
  funcion: convertir repetición en patrón

acumulacion_multidominio:
  formula: dominio_A → dominio_B → dominio_C → principio_general
  funcion: mostrar que el principio atraviesa contextos distintos

acumulacion_por_intensificacion:
  formula: caso_menor → caso_mayor → caso_extremo
  funcion: aumentar fuerza persuasiva
```

### 18.4. Esquemas de sustitución conductual

```yaml
conducta_reactiva_a_conducta_reflexiva:
  formula: impulso → daño → alternativa
  funcion: sustituir una respuesta inmediata por una respuesta regulada

castigo_a_refuerzo:
  formula: castigo → resistencia → refuerzo → aprendizaje
  funcion: reemplazar control negativo por motivación positiva

reproche_a_autodominio:
  formula: ira → impulso_de_reproche → contencion → sabiduria
  funcion: transformar emoción reactiva en autocontrol
```

### 18.5. Esquemas de distinción conceptual

```yaml
confusion_distincion_aplicacion:
  formula: confusion → distincion → aplicacion
  funcion: producir claridad conceptual utilizable

apariencia_mecanismo_criterio:
  formula: apariencia → mecanismo → criterio
  funcion: reemplazar interpretación superficial por criterio operativo
```

### 18.6. Esquemas de argumentación

```yaml
tesis_objecion_sintesis:
  formula: tesis → objecion → respuesta → tesis_refinada
  funcion: fortalecer una posición mediante oposición controlada

claim_evidencia_garantia:
  formula: afirmacion → evidencia → garantia → conclusion
  funcion: justificar una tesis
```

### 18.7. Esquemas de interiorización

```yaml
lector_como_objeto_del_principio:
  formula: ellos_hacen_X → nosotros_tambien → yo_debo_cambiar
  funcion: impedir que el receptor se mantenga como observador externo

herida_recordada:
  formula: reproche_recibido → dolor_duradero → comprension_del_daño
  funcion: hacer sentir el efecto de una conducta

remordimiento_empatico:
  formula: conducta_dura → reconocimiento_del_otro → arrepentimiento → promesa
  funcion: transformar juicio en comprensión emocional
```

---

## 19. Criterios de pertenencia a un esquema

Un texto pertenece a un esquema si cumple criterios funcionales, no si solo se parece superficialmente.

```yaml
criterios_de_pertenencia:
  trayectoria:
    descripcion: la trayectoria global coincide con el patrón abstracto

  funciones:
    descripcion: las secciones principales cumplen funciones necesarias del esquema

  dependencia:
    descripcion: el estado final depende de las transformaciones previas

  relaciones:
    descripcion: las conexiones entre secciones sostienen el esquema

  poder_explicativo:
    descripcion: el esquema explica mejor el texto que otros candidatos

  evidencia:
    descripcion: cada componente del esquema tiene evidencia textual
```

---

## 20. Validadores del módulo

```yaml
validadores:
  validador_de_cobertura:
    pregunta: el esquema explica la totalidad del texto o solo una parte?

  validador_de_funcion:
    pregunta: las secciones cumplen funciones necesarias del esquema?

  validador_de_transformacion:
    pregunta: el estado final depende realmente del recorrido?

  validador_de_alternativas:
    pregunta: hay otro esquema que explique mejor la arquitectura?

  validador_de_evidencia:
    pregunta: cada componente del esquema tiene evidencia textual?

  validador_de_jerarquia:
    pregunta: se distinguió esquema global de esquemas locales?

  validador_de_no_superficialidad:
    pregunta: la etiqueta se asignó por función y no por forma superficial?
```

---

## 21. Errores frecuentes

### 21.1. Confundir historia con esquema

Una historia es una unidad textual. Un esquema es la estructura funcional que puede organizar esa historia.

### 21.2. Confundir ejemplo con función

No basta decir que una unidad es un ejemplo. Hay que decir si ejemplifica, prueba, contrasta, transfiere, legitima, emociona o prepara una inferencia.

### 21.3. Confundir secuencia con transformación

Una secuencia enumera partes. Una transformación modifica el estado cognitivo del receptor.

### 21.4. Confundir esquema global con esquema local

Un texto puede tener un esquema global y muchos esquemas locales.

### 21.5. Etiquetar sin validar

Toda etiqueta debe estar respaldada por evidencia y por criterios de pertenencia.

---

## 22. Plantilla de salida operativa

```yaml
detector_de_esquemas_narrativos:
  identificacion:
    texto_analizado:
    unidad_de_analisis:
    fecha_del_analisis:

  esquema_global:
    id:
    nombre:
    familia:
    trayectoria_abstracta:
    descripcion:
    grado_de_ajuste:
    justificacion:

  estado_inicial:
    presuposiciones:
    expectativa_del_receptor:
    carencia_cognitiva:

  estado_final:
    comprension_resultante:
    transformacion_del_receptor:
    regla_o_conclusion_si_aplica:

  componentes_del_esquema:
    - componente_id:
      nombre:
      funcion:
      secciones_asociadas:
      evidencia_textual:
      efecto_cognitivo:

  esquemas_locales:
    - esquema_id:
      nombre:
      ubicacion:
      trayectoria_local:
      funcion_local:
      relacion_con_esquema_global:

  incrustaciones:
    - incrustacion_id:
      esquema_insertado:
      esquema_contenedor:
      funcion:
      efecto:

  desviaciones_y_variantes:
    - desviacion_id:
      descripcion:
      funcion:
      efecto:

  evaluacion:
    cobertura:
    dependencia:
    terminalidad:
    recurrencia:
    poder_explicativo:

  conclusion_operativa:
    como_ayuda_a_entender_el_texto:
    como_puede_reutilizarse:
    posibles_codominios_de_transferencia:
```

---

## 23. Relación con la ACCD

El detector permite convertir un texto en una arquitectura reutilizable.

```txt
texto existente
  → trayectoria funcional
    → esquema narrativo-cognitivo
      → ficha reutilizable
        → posible transferencia a codominios ACCD
```

Esto permite reutilizar una estructura en:

```txt
video_corto
carousel
clase
ensayo
hilo
newsletter
campo_atencional
procesamiento_estructural
```

La función principal dentro de la ACCD es transformar la lectura de un texto en una **estructura operativa transferible**.

---

## 24. Definición final

```txt
El detector_de_esquemas_narrativos es el módulo del MAANC encargado de
identificar la gramática abstracta que organiza la transformación de una
manifestación. Detecta esquemas globales, esquemas locales e incrustaciones,
distingue superficie y función, evalúa dominancia y ajuste, y produce una
ficha reutilizable capaz de transferirse a otros codominios de la ACCD.
```
