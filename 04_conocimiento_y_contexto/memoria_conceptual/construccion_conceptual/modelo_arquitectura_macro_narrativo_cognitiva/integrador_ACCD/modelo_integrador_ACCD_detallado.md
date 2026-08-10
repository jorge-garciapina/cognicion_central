# Módulo 13 — `integrador_ACCD`

## Modelo especializado del integrador ACCD para el MAANC

**Nombre del módulo:** `integrador_ACCD`  
**Sistema mayor:** MAANC — Modelo de Arquitectura Macro Narrativo-Cognitiva  
**Relación con ACCD/TMC:** módulo de síntesis arquitectónica compatible con familias cognitivas, responsabilidades narrativo-cognitivas, nodos, aristas, agrupamientos, inferencias y patrones reutilizables.  
**Modo de uso:** analítico y generativo.  
**Salida principal:** `arquitectura_macro_ACCD`.

---

# 0. Propósito del módulo

El `integrador_ACCD` es el módulo encargado de convertir los resultados parciales de los demás módulos del MAANC en una estructura unificada, auditable, jerárquica, graficable y reutilizable dentro de la ACCD.

No es un módulo de resumen.

No es un módulo de clasificación superficial.

No es un módulo de extracción aislada.

Es un **compilador arquitectónico de análisis narrativo-cognitivo**.

Su operación central consiste en recibir análisis heterogéneos de un texto o manifestación y traducirlos a una arquitectura macro integrada:

```txt
resultados_modulares
  → normalizacion
    → alineacion_de_evidencia
      → fusion_de_unidades
        → jerarquizacion_macro_meso_micro
          → clasificacion_de_familias
            → asignacion_de_responsabilidades
              → construccion_de_grafo
                → validacion
                  → arquitectura_macro_ACCD
```

La salida no debe ser una simple lista de secciones. Debe mostrar cómo una manifestación evoluciona, qué responsabilidades cumple cada tramo, cómo se relacionan sus partes y qué transformación cognitiva produce en el receptor.

---

# 1. Definición especializada

```txt
integrador_ACCD =
  módulo de síntesis que transforma análisis modulares dispersos
  en una arquitectura macro narrativo-cognitiva compatible con ACCD/TMC.
```

Definición expandida:

```txt
integrador_ACCD =
  adaptador arquitectónico entre teorías académicas de análisis textual
  y el sistema ACCD/TMC, encargado de producir una representación integrada
  de secciones, subsecciones, familias cognitivas, relaciones, inferencias,
  agrupamientos, responsabilidades funcionales, transformación cognitiva
  y patrones reutilizables.
```

El módulo está diseñado para responder a esta pregunta:

```txt
¿Cómo se convierte un conjunto de análisis parciales en una arquitectura macro
que explique el funcionamiento global de una manifestación?
```

---

# 2. Problema que resuelve

Los módulos anteriores del MAANC producen análisis útiles, pero separados:

```txt
extractor_de_macroestructura
  produce macroproposiciones y gist global.

detector_de_estructura_expositiva
  detecta si el texto avanza por descripción, secuencia, comparación,
  problema-solución, causa-efecto o enumeración.

segmentador_funcional
  detecta cambios de función, límites de sección y subsección.

constructor_de_trayectoria_narrativa
  detecta estado inicial, tensión, transformación, resolución y cierre.

analizador_de_relaciones_retóricas
  detecta relaciones como elaboración, contraste, evidencia o justificación.

analizador_de_coherencia
  clasifica conexiones causales, temporales, aditivas, contrastivas,
  condicionales o inferenciales.

modelador_de_situacion_cognitiva
  reconstruye cómo cambia la comprensión del receptor.

analizador_intencional_atencional
  identifica intenciones discursivas y focos atencionales.

detector_de_esquemas_narrativos
  detecta patrones reutilizables o esquemas narrativos.

analizador_de_moves_retoricos
  identifica movimientos retóricos propios de un género.

analizador_de_metadiscurso
  detecta marcas de guía textual, transiciones, postura y relación con lector.

analizador_argumentativo
  reconstruye claims, grounds, warrants, backing, qualifiers y rebuttals.
```

El problema es que esas salidas pueden quedar como capas paralelas. El `integrador_ACCD` las reúne en una sola representación estructural.

Sin el integrador, el análisis queda fragmentado.

Con el integrador, el análisis se convierte en arquitectura.

---

# 3. Entrada del módulo

El `integrador_ACCD` recibe dos tipos de entrada:

1. El texto o manifestación base.
2. Las salidas de los módulos analíticos previos.

## 3.1 Entrada textual base

```yaml
texto_base:
  titulo:
  autor:
  fuente:
  unidad_de_analisis:
  extension:
  observaciones:
```

## 3.2 Entradas modulares

```yaml
entradas_modulares:
  extractor_de_macroestructura:
    gist_global:
    macroproposiciones:
    jerarquia_semantica:

  detector_de_estructura_expositiva:
    tipo_expositivo_dominante:
    estructuras_secundarias:
    evidencia:

  segmentador_funcional:
    secciones:
    subsecciones:
    limites_funcionales:

  constructor_de_trayectoria_narrativa:
    estado_inicial:
    operaciones_transformadoras:
    estado_final:
    grado_de_clausura:

  analizador_de_relaciones_retóricas:
    relaciones_rst:
    nucleos:
    satelites:

  analizador_de_coherencia:
    relaciones_causales:
    relaciones_contrastivas:
    relaciones_aditivas:
    relaciones_condicionales:
    relaciones_inferenciales:

  modelador_de_situacion_cognitiva:
    estado_cognitivo_inicial:
    actualizaciones_por_seccion:
    estado_cognitivo_final:

  analizador_intencional_atencional:
    focos_atencionales:
    intenciones_discursivas:
    cambios_de_foco:

  detector_de_esquemas_narrativos:
    esquemas_detectados:
    grado_de_ajuste:
    desviaciones:

  analizador_de_moves_retoricos:
    movimientos:
    pasos:
    funciones_de_genero:

  analizador_de_metadiscurso:
    marcadores_de_transicion:
    marcadores_de_marco:
    engagement_markers:
    recursos_de_postura:

  analizador_argumentativo:
    claims:
    grounds:
    warrants:
    backing:
    qualifiers:
    rebuttals:
```

No todos los textos requerirán la misma intensidad de todos los módulos. El integrador debe ponderar.

---

# 4. Salida del módulo

La salida principal es:

```txt
arquitectura_macro_ACCD
```

Debe poder expresarse en cuatro formatos:

```txt
1. Descripción narrativa explicativa.
2. YAML estructurado.
3. Grafo de nodos y aristas.
4. Patrón reutilizable.
```

## 4.1 Esquema general de salida

```yaml
arquitectura_macro_ACCD:
  identidad_del_analisis:
    texto_analizado:
    unidad_de_analisis:
    modo:
    version_del_modelo:

  trayectoria_global:
    nombre_funcional:
    descripcion:
    estado_inicial:
    operacion_transformadora_dominante:
    operaciones_secundarias:
    estado_final:
    tipo_de_evolucion:
    grado_de_linealidad:
    grado_de_ramificacion:
    grado_de_clausura:

  macroestructura_semantica:
    gist_global:
    macroproposiciones:
      - macro_id:
        formulacion:
        secciones_asociadas:

  secciones_macro:
    - section_id:
      rango_textual:
      nombre_funcional:
      responsabilidad_narrativo_cognitiva:
      familia_cognitiva_dominante:
      familias_secundarias:
      criterios_de_pertenencia:
      macroproposicion_asociada:
      move_retorico:
      relacion_rst_dominante:
      funcion_argumentativa:
      foco_atencional:
      estado_cognitivo_de_entrada:
      operacion_sobre_el_receptor:
      estado_cognitivo_de_salida:
      subsecciones:

  conexiones:
    - connection_id:
      from:
      to:
      tipo_de_relacion:
      funcion_de_la_relacion:
      evidencia_textual:

  agrupamientos:
    - group_id:
      nombre:
      unidades_incluidas:
      criterio_de_agrupamiento:
      funcion_del_agrupamiento:

  inferencias:
    - inferencia_id:
      premisas:
      paso_inferencial:
      conclusion:
      ubicacion:
      funcion_en_la_trayectoria:

  transformacion_cognitiva:
    estado_inicial_del_receptor:
    transformaciones:
    estado_final_del_receptor:

  patron_reutilizable:
    nombre:
    descripcion:
    estructura:
    condiciones_de_uso:
    codominios_compatibles:

  validacion:
    cobertura_textual:
    coherencia_de_trayectoria:
    justificacion_de_familias:
    continuidad_narrativa:
    transformacion_cognitiva_global:
    puntos_de_ambiguedad:
```

---

# 5. Submódulos internos del `integrador_ACCD`

El módulo se divide en once submódulos especializados:

```txt
13.1 normalizador_intermodular
13.2 alineador_de_evidencia_textual
13.3 fusionador_de_unidades_funcionales
13.4 jerarquizador_macro_meso_micro
13.5 clasificador_de_familias_cognitivas
13.6 asignador_de_responsabilidades_narrativo_cognitivas
13.7 sintetizador_de_trayectoria_global
13.8 constructor_de_grafo_arquitectonico
13.9 resolvedor_de_conflictos_intermodulares
13.10 validador_de_integridad_arquitectonica
13.11 compilador_de_salida_ACCD
```

---

# 6. Submódulo 13.1 — `normalizador_intermodular`

## 6.1 Función

Convierte los lenguajes de los módulos previos a un vocabulario común compatible con ACCD/TMC.

Cada módulo usa una terminología distinta. El normalizador crea equivalencias operativas.

## 6.2 Traducciones típicas

```yaml
normalizacion_intermodular:
  RST:
    elaboracion: expansion_funcional
    evidencia: soporte_evidencial
    contraste: tension_diferencial
    preparacion: apertura_de_condicion
    resumen: condensacion
    justificacion: respaldo_funcional

  Toulmin:
    claim: afirmacion_tesis
    grounds: soporte_argumentativo
    warrant: puente_inferencial
    backing: respaldo_de_garantia
    qualifier: modulador_de_alcance
    rebuttal: objecion_o_limite

  Labov:
    orientation: situacion_inicial
    complicating_action: complicacion_o_tension
    evaluation: evaluacion_de_importancia
    resolution: resolucion_narrativa
    coda: cierre_de_marco

  Swales:
    establish_territory: establecimiento_de_campo
    establish_niche: apertura_de_vacio_o_problema
    occupy_niche: ocupacion_de_posicion

  Hyland:
    transition_marker: marcador_de_transicion
    frame_marker: marcador_de_marco
    engagement_marker: interpelacion_al_receptor
    booster: intensificador_de_postura
    hedge: modulador_de_certeza

  ACCD:
    node: nodo_funcional
    edge: conexion_funcional
    family: familia_cognitiva
    responsibility: responsabilidad_narrativo_cognitiva
```

## 6.3 Salida

```yaml
unidad_normalizada:
  id:
  rango_textual:
  tipo_normalizado:
  funcion_normalizada:
  fuente_modular:
  confianza:
```

---

# 7. Submódulo 13.2 — `alineador_de_evidencia_textual`

## 7.1 Función

Vincula cada afirmación estructural con evidencia textual.

El integrador no debe producir una arquitectura basada únicamente en inferencias no localizadas. Toda sección, conexión, familia o responsabilidad debe tener anclaje.

## 7.2 Salida

```yaml
evidencia_textual:
  unidad_id:
  rango:
  fragmento:
  funcion_del_fragmento:
  razon_de_asignacion:
  grado_de_apoyo:
```

## 7.3 Criterios de alineación

```txt
1. El fragmento debe representar una operación funcional reconocible.
2. El fragmento debe corresponder al rango asignado.
3. La evidencia no debe ser puramente ornamental.
4. Si la evidencia es indirecta, debe declararse como inferida.
5. Si varias unidades comparten evidencia, se debe señalar el solapamiento.
```

---

# 8. Submódulo 13.3 — `fusionador_de_unidades_funcionales`

## 8.1 Función

Agrupa detecciones de distintos módulos que corresponden al mismo tramo textual.

Un mismo tramo puede ser simultáneamente:

```txt
mini-historia
apertura atencional
evidencia argumentativa
ejemplo extremo
actualización del modelo cognitivo
```

El fusionador no debe duplicar ese tramo. Debe producir una sola unidad enriquecida.

## 8.2 Reglas de fusión

```txt
1. Fusionar si dos módulos apuntan al mismo rango textual y cumplen funciones compatibles.
2. Separar si el mismo rango contiene cambios funcionales internos relevantes.
3. Mantener familias secundarias cuando la unidad tenga varias funciones.
4. Asignar una familia dominante por función dentro de la trayectoria.
5. Registrar conflictos si las clasificaciones son incompatibles.
```

## 8.3 Salida

```yaml
unidad_integrada:
  id:
  rango_textual:
  nombre_funcional:
  familia_dominante:
  familias_secundarias:
  capas_de_analisis:
    semantica:
    expositiva:
    narrativa:
    retorica:
    coherencia:
    cognitiva:
    atencional:
    argumentativa:
  evidencia:
```

---

# 9. Submódulo 13.4 — `jerarquizador_macro_meso_micro`

## 9.1 Función

Organiza las unidades en niveles.

```txt
macro:
  grandes movimientos de la arquitectura.

meso:
  subsecciones funcionales dentro de cada movimiento.

micro:
  unidades locales: ejemplo, analogía, frase-pivote, cita, inferencia,
  transición, mini-historia, remate.
```

## 9.2 Criterios de jerarquía

Una unidad se considera macro si:

```txt
- cambia el estado cognitivo global del receptor;
- inicia, transforma o cierra un movimiento mayor;
- reorganiza el sentido de secciones posteriores;
- introduce una responsabilidad arquitectónica dominante;
- agrupa varias unidades meso o micro.
```

Una unidad se considera meso si:

```txt
- cumple una función local dentro de una sección macro;
- desarrolla, ejemplifica, contrasta o refuerza un movimiento mayor;
- tiene límites funcionales reconocibles;
- puede contener unidades micro.
```

Una unidad se considera micro si:

```txt
- opera como frase, imagen, cita, ejemplo breve, transición, remate local;
- no sostiene por sí sola un movimiento macro;
- aporta una función específica a una unidad mayor.
```

## 9.3 Salida

```yaml
jerarquia_funcional:
  macro:
    - id:
      contiene:
  meso:
    - id:
      parent:
      contiene:
  micro:
    - id:
      parent:
      funcion:
```

---

# 10. Submódulo 13.5 — `clasificador_de_familias_cognitivas`

## 10.1 Función

Asigna una familia cognitiva dominante y familias secundarias a cada unidad.

La familia se asigna por rol operativo, no por forma superficial.

## 10.2 Regla central

```txt
La familia cognitiva dominante se decide por la función que la unidad cumple
 dentro de la trayectoria global, no por el tipo textual visible.
```

Una historia no siempre es familia historia. Puede funcionar como ejemplo, prueba, contraste, apertura, analogía o cierre emocional.

Una cita no siempre es prueba. Puede funcionar como autoridad, remate, transición, síntesis o intensificación.

## 10.3 Familias funcionales posibles

```txt
apertura_problematica
situacion_inicial
mini_historia_ancla
ejemplo_extremo
ejemplo_estructurante
acumulacion_ejemplificativa
definicion
distincion
principio_psicologico
principio_antropologico
principio_normativo
analogía
contraste
refutacion
evidencia_historica
evidencia_experimental
modelo_de_conducta
inferencia
sintesis
recapitulacion
giro_reflexivo
interpelacion_practica
cierre_emocional
remate
proyeccion
```

## 10.4 Salida

```yaml
familia_cognitiva:
  unidad_id:
  dominante:
  secundarias:
  criterios_de_pertenencia:
  evidencia:
  confianza:
```

---

# 11. Submódulo 13.6 — `asignador_de_responsabilidades_narrativo_cognitivas`

## 11.1 Función

Define qué hace cada unidad dentro de la transformación global del texto.

## 11.2 Plantilla

```yaml
responsabilidad_narrativo_cognitiva:
  unidad_id:
  entrada_cognitiva:
  operacion:
  salida_cognitiva:
  funcion_en_trayectoria:
  impacto_en_receptor:
```

## 11.3 Tipos de responsabilidad

```txt
abrir_foco
instalar_tension
activar_pregunta
presentar_caso
particularizar_idea
generalizar_desde_casos
formular_principio
introducir_distincion
ejemplificar
contrastar
refutar
probar
derivar_inferencia
reencuadrar
interpelar
internalizar
cerrar
proyectar
```

---

# 12. Submódulo 13.7 — `sintetizador_de_trayectoria_global`

## 12.1 Función

Produce la descripción global del recorrido narrativo-cognitivo.

Este submódulo debe responder:

```txt
¿Desde qué estado parte el receptor?
¿Qué operaciones transforman ese estado?
¿Cuál es el estado final?
¿Qué tipo de evolución domina?
¿Qué grado de cierre tiene la manifestación?
```

## 12.2 Salida

```yaml
trayectoria_global:
  nombre_funcional:
  descripcion:
  estado_inicial:
  operacion_transformadora_dominante:
  operaciones_secundarias:
  estado_final:
  tipo_de_evolucion:
  grado_de_linealidad:
  grado_de_ramificacion:
  grado_de_clausura:
  forma_de_cierre:
```

## 12.3 Tipos de evolución posibles

```txt
inductiva_ejemplificativa
argumentativa_progresiva
problema_solucion
dialectica
contraste_resolucion
acumulativa
secuencial
pedagogica
metodologica
historica_interpretativa
moral_practica
conceptual_distincional
narrativa_con_internalizacion
```

---

# 13. Submódulo 13.8 — `constructor_de_grafo_arquitectonico`

## 13.1 Función

Convierte la arquitectura macro en un grafo de nodos y aristas.

## 13.2 Nodos

Los nodos pueden ser:

```txt
seccion_macro
subseccion_meso
unidad_micro
macroproposicion
inferencia
familia_cognitiva
agrupamiento
patron_reutilizable
```

## 13.3 Aristas

Las aristas pueden representar:

```txt
prepara
expande
elabora
ejemplifica
contrasta
refuta
causa
permite_inferir
respalda
reformula
condensa
abre
cierra
intensifica
internaliza
proyecta
```

## 13.4 Salida

```yaml
grafo_arquitectonico:
  nodes:
    - id:
      label:
      type:
      family:
      responsibility:
  edges:
    - id:
      source:
      target:
      type:
      function:
      evidence:
```

---

# 14. Submódulo 13.9 — `resolvedor_de_conflictos_intermodulares`

## 14.1 Función

Resuelve contradicciones o ambigüedades entre módulos.

## 14.2 Tipos de conflicto

```txt
conflicto_de_familia:
  distintos módulos asignan funciones distintas a la misma unidad.

conflicto_de_limite_segmental:
  un módulo separa dos unidades y otro las fusiona.

conflicto_de_jerarquia:
  un módulo considera macro una unidad y otro la considera meso.

conflicto_de_funcion_dominante:
  una unidad puede ser ejemplo, evidencia, contraste o cierre.

conflicto_de_relacion:
  una conexión puede ser causal, elaborativa, contrastiva o inferencial.
```

## 14.3 Reglas de resolución

```txt
1. La función dentro de la trayectoria global tiene prioridad sobre la forma superficial.
2. La evidencia textual explícita tiene prioridad sobre inferencias débiles.
3. Si una unidad cumple dos funciones fuertes, asignar dominante y secundarias.
4. Si dos unidades pueden fusionarse pero tienen responsabilidades distintas, mantenerlas separadas.
5. Si una clasificación es ambigua, declararla en puntos_de_ambiguedad.
```

## 14.4 Salida

```yaml
conflicto_resuelto:
  unidad:
  conflicto:
  opciones:
  decision:
  justificacion:
  confianza:
```

---

# 15. Submódulo 13.10 — `validador_de_integridad_arquitectonica`

## 15.1 Función

Verifica que la arquitectura integrada sea coherente, completa y reusable.

## 15.2 Validadores

```yaml
validadores:
  cobertura_textual:
    pregunta: ¿todas las partes relevantes del texto fueron incorporadas?

  continuidad_de_trayectoria:
    pregunta: ¿las secciones muestran evolución y no sólo acumulación?

  justificacion_de_familias:
    pregunta: ¿cada familia cognitiva está justificada por función y evidencia?

  coherencia_de_aristas:
    pregunta: ¿las conexiones entre secciones son explícitas y plausibles?

  transformacion_cognitiva:
    pregunta: ¿se puede describir el cambio del receptor de inicio a final?

  no_reduccion_superficial:
    pregunta: ¿el análisis evita etiquetas vagas sin responsabilidad funcional?

  reutilizabilidad:
    pregunta: ¿puede extraerse un patrón aplicable a otros textos o codominios?
```

## 15.3 Escala de evaluación

```txt
alta
media
baja
ambigua
insuficiente
```

---

# 16. Submódulo 13.11 — `compilador_de_salida_ACCD`

## 16.1 Función

Produce la salida final en los formatos requeridos.

## 16.2 Formatos de salida

```txt
1. Markdown explicativo.
2. YAML estructurado.
3. Tabla de secciones.
4. Grafo nodes/edges.
5. Patrón reutilizable.
6. Esquema para visualización.
7. Plantilla generativa.
```

## 16.3 Reglas

```txt
1. La salida debe separar modelo, análisis y patrón reutilizable.
2. La salida debe conservar evidencia textual cuando sea análisis.
3. La salida debe poder reutilizarse en futuras realizaciones ACCD.
4. La salida no debe mezclar comentarios libres con estructura principal.
5. La salida debe permitir auditoría posterior.
```

---

# 17. Modo analítico

En modo analítico, el integrador recibe un texto existente y produce una arquitectura macro detectada.

```txt
texto_existente
  → módulos MAANC
    → integrador_ACCD
      → arquitectura_macro_detectada
```

## 17.1 Flujo analítico

```txt
1. Recibir texto.
2. Recibir o generar resultados modulares.
3. Normalizar vocabularios.
4. Alinear evidencia textual.
5. Fusionar unidades equivalentes.
6. Jerarquizar macro/meso/micro.
7. Clasificar familias cognitivas.
8. Asignar responsabilidades.
9. Construir trayectoria global.
10. Construir grafo.
11. Resolver conflictos.
12. Validar arquitectura.
13. Compilar salida ACCD.
14. Extraer patrón reutilizable.
```

---

# 18. Modo generativo

En modo generativo, el integrador puede utilizar una arquitectura macro diseñada o detectada para alimentar protocolos de realización.

```txt
arquitectura_macro_diseñada
  → codominio_objetivo
    → protocolo_de_realizacion
      → manifestacion_codominial
```

## 18.1 Flujo generativo

```txt
1. Definir estado inicial del receptor.
2. Definir estado final deseado.
3. Seleccionar operación transformadora dominante.
4. Diseñar secciones funcionales.
5. Asignar familias cognitivas.
6. Construir conexiones.
7. Validar continuidad.
8. Traducir al codominio.
```

---

# 19. Patrón reutilizable

Una de las salidas más valiosas del integrador es el patrón reutilizable.

```yaml
patron_reutilizable:
  nombre:
  descripcion:
  estructura:
    - unidad_funcional_1
    - unidad_funcional_2
    - unidad_funcional_3
  condiciones_de_uso:
  riesgos:
  codominios_compatibles:
  variantes:
```

El patrón reutilizable permite transferir la arquitectura de un texto a otras manifestaciones.

Por ejemplo:

```txt
capitulo
  → arquitectura_macro_detectada
    → patron_reutilizable
      → video_corto
      → carousel
      → clase
      → hilo
      → newsletter
```

---

# 20. Criterios de calidad del módulo

El `integrador_ACCD` será bueno si cumple estos criterios:

```txt
1. No resume superficialmente.
2. No confunde forma textual con función cognitiva.
3. No fuerza estructuras de tres partes si el texto tiene más movimientos.
4. No etiqueta ejemplos sin explicar su responsabilidad.
5. No ignora subsecciones funcionales.
6. No produce listas planas si hay grafo.
7. No abandona evidencia textual.
8. No mezcla familias dominantes y secundarias sin jerarquía.
9. No omite conflictos interpretativos.
10. No pierde la transformación cognitiva global.
11. Produce una arquitectura reusable.
12. Puede alimentar otros módulos o realizaciones de la ACCD.
```

---

# 21. Plantilla operativa completa

```yaml
integrador_ACCD:
  entrada:
    texto_base:
      titulo:
      autor:
      fuente:
      unidad_de_analisis:

    resultados_modulares:
      extractor_de_macroestructura:
      detector_de_estructura_expositiva:
      segmentador_funcional:
      constructor_de_trayectoria_narrativa:
      analizador_de_relaciones_retoricas:
      analizador_de_coherencia:
      modelador_de_situacion_cognitiva:
      analizador_intencional_atencional:
      detector_de_esquemas_narrativos:
      analizador_de_moves_retoricos:
      analizador_de_metadiscurso:
      analizador_argumentativo:

  proceso:
    normalizacion_intermodular:
    alineacion_de_evidencia_textual:
    fusion_de_unidades_funcionales:
    jerarquizacion_macro_meso_micro:
    clasificacion_de_familias_cognitivas:
    asignacion_de_responsabilidades_narrativo_cognitivas:
    sintesis_de_trayectoria_global:
    construccion_de_grafo_arquitectonico:
    resolucion_de_conflictos_intermodulares:
    validacion_de_integridad_arquitectonica:
    compilacion_de_salida_ACCD:

  salida:
    arquitectura_macro_ACCD:
      identidad_del_analisis:
      trayectoria_global:
      macroestructura_semantica:
      secciones_macro:
      conexiones:
      agrupamientos:
      inferencias:
      transformacion_cognitiva:
      validacion:

    patron_reutilizable:
      nombre:
      descripcion:
      estructura:
      condiciones_de_uso:
      codominios_compatibles:
```

---

# 22. Definición final

```txt
integrador_ACCD es el compilador arquitectónico del MAANC.
Su función es transformar análisis modulares dispersos en una arquitectura macro
narrativo-cognitiva completa, jerárquica, graficable, auditable y reutilizable
dentro de la ACCD.
```

En una frase:

```txt
integrador_ACCD convierte análisis en arquitectura.
```
