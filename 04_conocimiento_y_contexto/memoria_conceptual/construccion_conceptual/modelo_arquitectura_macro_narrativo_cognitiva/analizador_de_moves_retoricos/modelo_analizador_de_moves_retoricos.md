# Modelo especializado: `analizador_de_moves_retoricos`

**Módulo:** 10 del MAANC — Modelo de Arquitectura Macro Narrativo-Cognitiva  
**Tipo de documento:** modelo operativo reutilizable  
**Uso:** análisis de textos, capítulos, ensayos, transcripciones, guiones, clases o manifestaciones discursivas  
**Estado:** versión especializada para uso independiente en nuevos análisis  

---

## 0. Propósito del documento

Este documento describe en detalle el modelo `analizador_de_moves_retoricos`. Su función es servir como módulo independiente dentro del MAANC para analizar textos sin mezclar el modelo con ejemplos particulares.

El modelo permite detectar, clasificar, jerarquizar y conectar los **moves retóricos** mediante los cuales un texto hace avanzar su arquitectura macro. No se limita a etiquetar partes del texto como “introducción”, “desarrollo” o “conclusión”; reconstruye las operaciones discursivas que transforman el estado interpretativo del lector.

---

## 1. Definición central

```txt
analizador_de_moves_retoricos =
  módulo encargado de identificar las acciones discursivas mediante las cuales
  un texto construye su espacio de intervención, organiza su desarrollo,
  guía al lector, sostiene sus afirmaciones, responde tensiones y produce
  una transformación cognitiva dentro de una arquitectura macro.
```

Una versión más compacta:

```txt
analizador_de_moves_retoricos = detector de operaciones discursivas funcionales.
```

La pregunta central del módulo no es:

```txt
¿De qué habla esta parte del texto?
```

Sino:

```txt
¿Qué está haciendo esta parte del texto dentro de la evolución global?
```

---

## 2. Diferencia entre tema y move

Un error frecuente consiste en confundir el tema de una unidad textual con su move retórico.

Ejemplo incorrecto:

```yaml
unidad_textual: "la crítica"
move: critica
```

Eso sólo nombra el tema.

Ejemplo correcto:

```yaml
unidad_textual: "fragmento sobre la crítica"
move: formulacion_de_principio_psicologico
funcion: convertir casos previos en una regla general sobre la conducta humana
```

El move no nombra aquello de lo que se habla. El move nombra la **operación discursiva** que el texto realiza.

---

## 3. Lugar del módulo dentro del MAANC

El MAANC analiza la arquitectura macro como trayectoria narrativo-cognitiva. Dentro de esa arquitectura, el `analizador_de_moves_retoricos` ocupa esta posición:

```txt
segmentador_funcional
  → detecta unidades de cambio funcional

extractor_de_macroestructura
  → identifica macroproposiciones y sentido global

constructor_de_trayectoria_narrativa
  → reconstruye evolución global

analizador_de_moves_retoricos
  → identifica qué acción discursiva cumple cada unidad

analizador_de_relaciones_retoricas
  → conecta unidades por relaciones funcionales

integrador_ACCD
  → traduce todo a arquitectura macro narrativo-cognitiva
```

De forma más simple:

```txt
El segmentador dice dónde cambia el texto.
El analizador de moves dice qué está haciendo cada cambio.
```

---

## 4. Qué es un move retórico-operativo

Un **move retórico-operativo** es una acción discursiva reconocible que cumple una responsabilidad dentro del avance global del texto.

Puede ocupar:

```txt
- una frase;
- un párrafo;
- varios párrafos;
- una sección completa;
- varias secciones discontinuas;
- un bloque textual embebido dentro de otro move mayor.
```

Lo importante no es su tamaño, sino su función.

---

## 5. Estructura de un move retórico-operativo

Todo move detectado debe representarse con una estructura rica, no con una etiqueta simple.

```yaml
move_retorico:
  move_id:
  rango_textual:
  unidad_asociada:
    section_id:
    subsection_id:
    pagina_o_rango:
  nombre_funcional:
  familia_de_move:
  escala:
    - macro
    - meso
    - micro
  funcion_retorica:
  responsabilidad_narrativo_cognitiva:
  estado_cognitivo_de_entrada:
  operacion_sobre_el_receptor:
  estado_cognitivo_de_salida:
  mecanismo_de_realizacion:
  evidencia_textual:
    fragmentos_clave:
    senales_linguisticas:
    justificacion:
  relacion_con_moves_previos:
  relacion_con_moves_posteriores:
  grado_de_centralidad:
    - nuclear
    - auxiliar
    - intensificador
    - transicional
  grado_de_confianza:
    - alto
    - medio
    - bajo
  riesgos_de_malinterpretacion:
  observaciones:
```

---

## 6. Componentes explicados

### 6.1. `move_id`

Identificador estable del move.

Ejemplo:

```yaml
move_id: MOVE_07
```

### 6.2. `rango_textual`

Ubicación del fragmento analizado. Puede incluir páginas, párrafos, líneas o una descripción aproximada.

```yaml
rango_textual: "páginas 31-33"
```

### 6.3. `nombre_funcional`

Nombre específico del move. Debe describir la operación, no el tema.

Malo:

```yaml
nombre_funcional: ejemplo
```

Mejor:

```yaml
nombre_funcional: anclaje_narrativo_extremo
```

Malo:

```yaml
nombre_funcional: historia
```

Mejor:

```yaml
nombre_funcional: exemplum_moral_negativo
```

### 6.4. `familia_de_move`

Agrupa moves similares por función general.

Ejemplos:

```txt
territorializacion
problematizacion
anclaje_narrativo
generalizacion
contraste
legitimacion
transferencia
prescripcion
integracion
cierre_axiologico
```

### 6.5. `escala`

Indica si el move opera a nivel macro, meso o micro.

```txt
macro:
  organiza una región amplia del texto.

meso:
  opera dentro de un macro-move.

micro:
  ejecuta una función local, fraseológica o puntual.
```

### 6.6. `funcion_retorica`

Describe qué hace el move dentro de la estrategia discursiva.

Ejemplo:

```yaml
funcion_retorica: mostrar que un caso aislado representa un patrón más amplio
```

### 6.7. `responsabilidad_narrativo_cognitiva`

Describe qué responsabilidad cumple el move en la evolución del estado interpretativo del lector.

Ejemplo:

```yaml
responsabilidad_narrativo_cognitiva: convertir una intuición inicial en una necesidad de reencuadre
```

### 6.8. `estado_cognitivo_de_entrada`

Estado interpretativo que el texto presupone antes del move.

Ejemplo:

```yaml
estado_cognitivo_de_entrada: el lector cree que la crítica puede ser útil o merecida
```

### 6.9. `operacion_sobre_el_receptor`

Acción cognitiva o retórica ejercida sobre el lector.

```yaml
operacion_sobre_el_receptor: desplazar el foco desde juzgar a comprender
```

### 6.10. `estado_cognitivo_de_salida`

Estado interpretativo que el move intenta producir.

```yaml
estado_cognitivo_de_salida: el lector reconoce que la crítica produce defensa y resentimiento
```

### 6.11. `mecanismo_de_realizacion`

Modo por el cual el texto ejecuta el move.

Ejemplos:

```txt
narracion extrema
mini-historia afectiva
pregunta retorica
contraste conceptual
cita de autoridad
analogía
metáfora
acumulación de casos
confesión personal
```

### 6.12. `evidencia_textual`

Todo move debe tener evidencia textual. Sin evidencia, el move debe marcarse como hipótesis.

### 6.13. `relacion_con_moves_previos` y `relacion_con_moves_posteriores`

Un move no está aislado. Debe indicarse si amplía, contrasta, corrige, intensifica, prepara o concluye otro move.

### 6.14. `grado_de_centralidad`

Permite diferenciar moves principales y moves auxiliares.

```txt
nuclear:
  indispensable para la arquitectura macro.

auxiliar:
  apoya un move nuclear.

intensificador:
  aumenta fuerza emocional, retórica o cognitiva.

transicional:
  conecta regiones del texto.
```

### 6.15. `grado_de_confianza`

Permite registrar incertidumbre analítica.

---

## 7. Jerarquía de moves

El modelo debe reconocer que los moves forman una jerarquía.

```txt
macro-move
  → meso-move
    → micro-move
```

### 7.1. Macro-move

Organiza una región amplia del texto.

Ejemplo genérico:

```txt
MACRO-MOVE:
  demostrar que una práctica común es contraproducente.
```

### 7.2. Meso-move

Opera dentro de un macro-move.

```txt
MESO-MOVE:
  presentar un caso extremo.
```

### 7.3. Micro-move

Ejecuta un gesto local.

```txt
MICRO-MOVE:
  explicitar la moraleja de un relato.
```

---

## 8. Familias especializadas de moves

El módulo no debe limitarse al modelo CARS clásico. Debe usar una taxonomía más amplia, capaz de analizar capítulos, ensayos, libros, transcripciones, guiones y textos de divulgación.

### 8.1. Moves de programación paratextual

Preparan la interpretación antes del desarrollo principal.

Subtipos:

```txt
programacion_metaforica_del_principio
anticipacion_de_tesis
encuadre_por_titulo
contrato_de_lectura
```

Responsabilidad:

```txt
activar una imagen, expectativa o regla interpretativa antes del cuerpo del texto.
```

### 8.2. Moves de territorialización

Establecen el campo en el que el texto opera.

Subtipos:

```txt
establecer_campo
presentar_contexto
reconocer_tradicion
activar_conocimiento_compartido
situar_problema_en_marco_general
```

Responsabilidad:

```txt
dar al lector un territorio común desde el cual entender el avance del texto.
```

### 8.3. Moves de problematización

Introducen insuficiencia, tensión o necesidad de avance.

Subtipos:

```txt
marcar_insuficiencia
formular_pregunta
mostrar_anomalia
cuestionar_explicacion_previa
abrir_tension
```

Responsabilidad:

```txt
producir una necesidad cognitiva que justifique el desarrollo posterior.
```

### 8.4. Moves de anclaje narrativo

Usan relatos, casos o escenas para concretar una idea.

Subtipos:

```txt
anclaje_narrativo_extremo
mini_historia_ilustrativa
caso_ancla
escena_domestica
exemplum_moral_negativo
exemplum_moral_positivo
```

Responsabilidad:

```txt
volver visible una tesis mediante un caso memorable.
```

### 8.5. Moves de contraste

Oponen dos elementos para producir tensión o distinción.

Subtipos:

```txt
contraste_moral
contraste_conceptual
contraste_de_autopercepcion
contraste_entre_metodos
contraste_entre_expectativa_y_resultado
```

Responsabilidad:

```txt
hacer visible una diferencia que transforma la interpretación del lector.
```

### 8.6. Moves de generalización

Transforman casos particulares en patrones.

Subtipos:

```txt
generalizacion_inductiva
formulacion_de_principio
generalizacion_antropologica
generalizacion_psicologica
generalizacion_practica
```

Responsabilidad:

```txt
pasar de ejemplo a regla, de caso a principio o de escena a modelo.
```

### 8.7. Moves de legitimación

Aumentan credibilidad mediante autoridad, ciencia, historia, experiencia o prueba.

Subtipos:

```txt
legitimacion_por_autoridad
legitimacion_cientifica
legitimacion_historica
legitimacion_por_experiencia_personal
legitimacion_por_recursividad_de_casos
```

Responsabilidad:

```txt
hacer que la tesis no parezca opinión aislada, sino conocimiento respaldado.
```

### 8.8. Moves de transferencia

Mueven una conclusión de un dominio a otro.

Subtipos:

```txt
transferencia_del_caso_extremo_al_mundo_ordinario
transferencia_de_lo_historico_a_lo_personal
transferencia_de_lo_conceptual_a_lo_practico
transferencia_del_otro_al_lector
```

Responsabilidad:

```txt
implicar al lector y hacer aplicable la tesis.
```

### 8.9. Moves de prescripción

Transforman comprensión en orientación de conducta.

Subtipos:

```txt
prescripcion_directa
pregunta_prescriptiva
inversion_hacia_el_lector
llamado_a_autocorreccion
regla_de_conducta
```

Responsabilidad:

```txt
convertir una tesis en una acción o disposición recomendada.
```

### 8.10. Moves de ejemplaridad positiva

Presentan modelos de conducta alternativa.

Subtipos:

```txt
ejemplaridad_transformativa
ejemplaridad_de_autocontrol
ejemplaridad_practica
ejemplaridad_etica
ejemplaridad_de_liderazgo
```

Responsabilidad:

```txt
mostrar que la conducta propuesta puede encarnarse en una figura o caso.
```

### 8.11. Moves de intensificación afectiva

Desplazan el análisis hacia una experiencia emocionalmente reconocible.

Subtipos:

```txt
confesion_afectiva
escena_intima
remordimiento
vulnerabilidad
apelacion_a_la_memoria_personal
```

Responsabilidad:

```txt
hacer que el principio deje de ser abstracto y se sienta personalmente.
```

### 8.12. Moves de integración

Reúnen partes anteriores en una síntesis.

Subtipos:

```txt
sintesis_conceptual
integracion_de_casos
reformulacion_global
condensacion_proverbial
metafora_de_retencion
```

Responsabilidad:

```txt
estabilizar una comprensión formada por varias unidades previas.
```

### 8.13. Moves de cierre o proyección

Terminan, rematan o proyectan la trayectoria.

Subtipos:

```txt
cierre_axiologico
cierre_practico
cierre_etico
proyeccion_aplicativa
formulacion_de_regla_final
```

Responsabilidad:

```txt
producir el estado interpretativo final del texto.
```

---

## 9. Criterios de detección

El módulo debe usar criterios combinados. Ningún criterio por sí solo es suficiente.

### 9.1. Criterio de cambio de dominio

Un cambio de dominio puede indicar un nuevo move.

```txt
crimen → vida cotidiana → ciencia → historia → familia → ética
```

### 9.2. Criterio de función inferencial

Cuando un fragmento permite pasar de caso a principio, hay un move de generalización o inferencia.

### 9.3. Criterio de dirección al lector

La aparición de preguntas directas o apelaciones al lector suele indicar moves de transferencia, prescripción o guía.

### 9.4. Criterio de cambio de régimen discursivo

Cambios como narración → principio → cita → ejemplo → prescripción → confesión pueden indicar moves distintos.

### 9.5. Criterio de función emocional

Un fragmento puede no aportar nueva información conceptual, pero sí intensificar el efecto afectivo del texto.

### 9.6. Criterio de densidad funcional

Un fragmento con varias operaciones debe dividirse en moves internos.

### 9.7. Criterio de centralidad arquitectónica

Un move es central si, al retirarlo, la trayectoria global se debilita o cambia.

---

## 10. Operaciones del módulo

El módulo trabaja en seis capas.

```yaml
analizador_de_moves_retoricos:
  capa_1_deteccion:
    detectar_unidades_textuales:
    detectar_cambios_de_operacion:
    detectar_senales_linguisticas:
    detectar_cambios_de_dominio:

  capa_2_clasificacion:
    asignar_familia_de_move:
    asignar_nombre_funcional:
    distinguir_move_nuclear_auxiliar:
    distinguir_macro_meso_micro_move:

  capa_3_funcion:
    identificar_funcion_retorica:
    identificar_responsabilidad_narrativo_cognitiva:
    identificar_estado_cognitivo_de_entrada:
    identificar_estado_cognitivo_de_salida:

  capa_4_relacion:
    conectar_con_move_anterior:
    conectar_con_move_posterior:
    detectar_acumulacion:
    detectar_contraste:
    detectar_transferencia:
    detectar_reencuadre:

  capa_5_validacion:
    exigir_evidencia_textual:
    evaluar_grado_de_confianza:
    registrar_ambiguedad:
    validar_con_arquitectura_macro_global:

  capa_6_integracion_ACCD:
    vincular_con_familia_cognitiva:
    vincular_con_seccion_macro:
    vincular_con_trayectoria_narrativo_cognitiva:
    producir_salida_operativa:
```

---

## 11. Tipos de relación entre moves

Los moves deben conectarse entre sí. Algunas relaciones posibles:

```txt
prepara
amplia
contrasta
reformula
intensifica
legitima
transfiere
abre
cierra
corrige
resuelve
proyecta
condensa
invierte
```

Ejemplo genérico:

```yaml
relacion_entre_moves:
  from: MOVE_03
  to: MOVE_04
  tipo: amplia
  funcion: convierte un caso particular en patrón general
```

---

## 12. Salida general del módulo

```yaml
analisis_de_moves_retoricos:
  metadata:
    texto_analizado:
    genero_estimado:
    unidad_de_analisis:
    proposito_del_analisis:

  tesis_operativa_detectada:

  arquitectura_macro_retórica:
    tipo:
    estrategia_dominante:
    estado_inicial_del_lector:
    estado_final_del_lector:
    trayectoria:
      - etapa:
        funcion:

  inventario_de_moves:
    - move_id:
      rango_textual:
      nombre_funcional:
      familia_de_move:
      escala:
      funcion_retorica:
      responsabilidad_narrativo_cognitiva:
      evidencia_textual:
      estado_cognitivo_de_entrada:
      operacion_sobre_el_receptor:
      estado_cognitivo_de_salida:
      relacion_con_moves_previos:
      relacion_con_moves_posteriores:
      centralidad:
      confianza:

  jerarquia_de_moves:
    macro_moves:
      - macro_move_id:
        meso_moves:
          - meso_move_id:
            micro_moves:
              - micro_move_id:

  conexiones:
    - from:
      to:
      tipo:
      funcion:

  diagnostico:
    move_nuclear_global:
    estrategia_retórica_dominante:
    grado_de_acumulacion:
    grado_de_conversion_del_lector:
    puntos_de_ambiguedad:
```

---

## 13. Relación con arquitectura macro

El módulo aporta a la arquitectura macro una capa de **intencionalidad discursiva**.

Sin este módulo, un análisis podría decir:

```txt
SEC_01 abre el tema.
SEC_02 desarrolla el tema.
SEC_03 cierra el tema.
```

Con este módulo:

```txt
SEC_01 establece territorio.
SEC_02 marca una insuficiencia.
SEC_03 introduce una distinción.
SEC_04 sostiene la distinción con ejemplo.
SEC_05 transfiere la tesis al lector.
SEC_06 cierra con orientación ética o práctica.
```

Esto permite reconstruir la arquitectura macro como una cadena de moves:

```txt
territorialización
  → problematización
    → contribución conceptual
      → desarrollo / evidencia
        → transferencia
          → integración
            → cierre / proyección
```

---

## 14. Relación con ACCD/TMC

Dentro de ACCD/TMC, el módulo funciona como puente entre texto y familias cognitivas.

```yaml
move: introducir_distincion
familia_cognitiva_probable: FAM-Idea
rol_operativo: separar categorías para reorganizar comprensión
```

```yaml
move: presentar_ejemplo_ancla
familia_cognitiva_probable: ejemplo
rol_operativo: concretar una idea abstracta
```

```yaml
move: proponer_metodo
familia_cognitiva_probable: FAM-Metodo
rol_operativo: transformar comprensión en procedimiento
```

```yaml
move: proyectar_consecuencia
familia_cognitiva_probable: inferencia / aplicación
rol_operativo: extender el alcance de una tesis
```

El módulo no sustituye la clasificación de familias cognitivas; le proporciona evidencia funcional.

---

## 15. Validadores

### 15.1. Validador de evidencia

Cada move debe tener evidencia textual.

```txt
Si no hay evidencia textual, el move debe marcarse como hipótesis.
```

### 15.2. Validador de función

Cada move debe responder:

```txt
¿Qué hace esta unidad dentro del texto?
```

Si la respuesta solo resume contenido, no es un análisis de move.

### 15.3. Validador de escala

Cada move debe marcarse como macro, meso o micro.

### 15.4. Validador de centralidad

Cada move debe indicar si es nuclear, auxiliar, intensificador o transicional.

### 15.5. Validador de trayectoria

La secuencia de moves debe explicar la evolución global del texto.

### 15.6. Validador de no reducción temática

No se permite nombrar un move con el tema tratado.

### 15.7. Validador de no reducción posicional

No se permite nombrar un move simplemente como “introducción”, “desarrollo” o “conclusión”.

### 15.8. Validador de conexión

Todo move debe conectarse con moves previos, posteriores o con la arquitectura macro global.

---

## 16. Errores frecuentes

### Error 1: confundir tema con move

Incorrecto:

```yaml
move: critica
```

Correcto:

```yaml
move: formulacion_de_principio_psicologico_sobre_la_critica
```

### Error 2: confundir posición con función

Incorrecto:

```yaml
move: introduccion
```

Correcto:

```yaml
move: establecimiento_del_territorio_del_problema
```

### Error 3: etiquetar historias como “ejemplo” sin precisar su función

Incorrecto:

```yaml
move: ejemplo
```

Correcto:

```yaml
move: exemplum_moral_negativo
funcion: mostrar las consecuencias de una conducta
```

### Error 4: no detectar moves embebidos

Una sección puede contener varios moves internos.

### Error 5: reducir todo a CARS

El modelo CARS es útil, pero no todo texto es introducción académica. Este módulo debe poder analizar capítulos narrativos, textos de autoayuda, ensayos, discursos, libros teóricos y guiones.

---

## 17. Checklist operativo

```txt
[ ] Identifiqué la unidad textual analizada.
[ ] Separé tema de función.
[ ] Detecté cambios de operación discursiva.
[ ] Clasifiqué moves por familia.
[ ] Asigné nombre funcional específico.
[ ] Determiné escala: macro, meso o micro.
[ ] Determiné centralidad: nuclear, auxiliar, intensificador o transicional.
[ ] Identifiqué estado cognitivo de entrada.
[ ] Identifiqué operación sobre el receptor.
[ ] Identifiqué estado cognitivo de salida.
[ ] Registré evidencia textual.
[ ] Conecté cada move con moves vecinos.
[ ] Reconstruí la trayectoria retórica global.
[ ] Validé que el análisis no sea solo resumen de contenido.
```

---

## 18. Plantilla de aplicación a nuevos textos

Cuando se aplique este módulo a un nuevo texto, se recomienda usar esta estructura:

```markdown
# Análisis de moves retóricos

## 1. Identificación del texto

## 2. Tesis operativa detectada

## 3. Arquitectura macro retórica global

## 4. Secuencia general de moves

## 5. Inventario detallado de moves

### MOVE_01 — Nombre funcional

```yaml
move_id:
rango_textual:
nombre_funcional:
familia_de_move:
escala:
funcion_retorica:
responsabilidad_narrativo_cognitiva:
estado_cognitivo_de_entrada:
operacion_sobre_el_receptor:
estado_cognitivo_de_salida:
mecanismo_de_realizacion:
evidencia_textual:
relacion_con_moves_previos:
relacion_con_moves_posteriores:
centralidad:
confianza:
```

## 6. Jerarquía macro/meso/micro

## 7. Conexiones entre moves

## 8. Diagnóstico retórico global

## 9. Integración con arquitectura macro

## 10. Validación
```

---

## 19. Definición final

```txt
El analizador_de_moves_retoricos es el módulo que reconstruye la cadena de
acciones discursivas mediante las cuales un texto hace avanzar su arquitectura
macro, no por acumulación de contenido, sino por transformación progresiva del
estado interpretativo del lector.
```

En forma breve:

```txt
analizador_de_moves_retoricos = detector de las acciones discursivas que hacen avanzar la arquitectura macro.
```
