https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0f80f5-18d0-83e8-a63e-64b33d3031c5

# Modelo especializado: `extractor_de_macroestructura`

**Sistema:** MAANC / ACCD  
**Módulo:** `extractor_de_macroestructura`  
**Tipo:** modelo operativo reusable  
**Propósito:** reconstruir la columna vertebral macrosemántica de cualquier texto o manifestación.  
**Nota de uso:** este documento contiene sólo el modelo. No contiene aplicación a textos concretos.

---

## 0. Posición del módulo dentro del MAANC

El `extractor_de_macroestructura` es el primer módulo especializado del MAANC. Su función es producir la capa semántica global sobre la que después podrán operar otros módulos, como el `detector_de_estructura_expositiva`, el `segmentador_funcional`, el `constructor_de_trayectoria_narrativa`, el `analizador_de_relaciones_retóricas` o el `integrador_ACCD`.

La relación general es:

```txt
texto completo
  → extractor_de_macroestructura
    → macroestructura_semantica
      → arquitectura_macro_narrativo_cognitiva
```

Este módulo no produce todavía toda la arquitectura macro. Produce la **base macrosemántica** de dicha arquitectura.

---

## 1. Definición formal

El `extractor_de_macroestructura` es el módulo encargado de reconstruir la organización semántica global de un texto mediante la identificación de proposiciones locales, recurrencias, agrupamientos, macroproposiciones, jerarquías de sentido, macrotesis raíz y cobertura textual.

Su salida no es un resumen. Su salida es una representación macrosemántica auditable.

Definición compacta:

```txt
extractor_de_macroestructura = máquina de extracción de macroproposiciones y jerarquía global de sentido
```

Definición extendida:

```txt
extractor_de_macroestructura = módulo que convierte un texto completo en una estructura jerárquica de sentido, capaz de mostrar qué ideas locales se subordinan a qué ideas mayores, cuál es la macrotesis raíz, qué agrupamientos semánticos sostienen esa macrotesis y qué partes del texto quedan cubiertas por la reconstrucción.
```

---

## 2. Problema que resuelve

Un texto extenso contiene muchas unidades locales: frases, ejemplos, definiciones, anécdotas, analogías, inferencias, objeciones, citas, transiciones y cierres parciales. Si esas unidades quedan como una lista plana, el análisis no alcanza todavía la macroestructura.

El módulo resuelve este problema:

```txt
muchas unidades locales dispersas
  → organización jerárquica de sentido
```

Preguntas que responde:

```txt
¿Cuál es la columna vertebral semántica del texto?
¿Qué ideas locales se agrupan bajo ideas mayores?
¿Qué macroproposiciones sostienen la comprensión global?
¿Cuál es la macrotesis raíz?
¿Qué zonas del texto sostienen cada macroproposición?
¿Qué partes del texto quedan fuera o son ambiguas?
```

---

## 3. Distinciones básicas

### 3.1 Tema

El tema nombra el dominio general del texto. Es una etiqueta de asunto.

```txt
tema = de qué trata el texto en un nivel muy general
```

El tema no basta para reconstruir la macroestructura.

### 3.2 Tesis

La tesis es una afirmación central que el texto sostiene, defiende, presupone o construye.

```txt
tesis = afirmación principal defendida o construida por el texto
```

La tesis puede ser explícita o inferida.

### 3.3 Proposición local

La proposición local es una unidad semántica relativamente pequeña que formula una afirmación, contraste, regla, evidencia, ejemplo o inferencia dentro de una zona específica del texto.

```txt
proposición local = formulación analítica de una unidad de significado localizada
```

### 3.4 Agrupamiento semántico

Un agrupamiento semántico reúne varias proposiciones locales que comparten una función, un núcleo temático, una operación conceptual o una dirección argumentativa.

```txt
agrupamiento semántico = conjunto de proposiciones locales que sostienen una región mayor de sentido
```

### 3.5 Macroproposición

Una macroproposición es una formulación de alto nivel que condensa, integra o generaliza un agrupamiento de proposiciones locales.

```txt
macroproposición = idea global que agrupa y organiza varias proposiciones locales
```

### 3.6 Macrotesis raíz

La macrotesis raíz es la formulación de mayor nivel que integra el recorrido semántico completo del texto.

```txt
macrotesis raíz = formulación que explica el sentido global del texto y la relación entre sus macroproposiciones principales
```

### 3.7 Macroestructura

La macroestructura es la jerarquía completa de macroproposiciones, agrupamientos semánticos, proposiciones locales y evidencias textuales.

```txt
macroestructura = sistema jerárquico de sentido global del texto
```

---

## 4. Entrada del módulo

### 4.1 Entrada mínima

```yaml
entrada_minima:
  texto_fuente:
    contenido_completo:
```

### 4.2 Entrada enriquecida

```yaml
entrada_enriquecida:
  texto_fuente:
    contenido_completo:
  metadatos:
    titulo:
    autor:
    fuente:
    fecha:
    genero:
    unidad_de_analisis:
    objetivo_del_analisis:
  marcas_visibles:
    titulos:
    subtitulos:
    paginas:
    parrafos:
    notas:
    citas:
    listas:
    cortes_de_seccion:
```

### 4.3 Tipos de texto admitidos

```yaml
tipos_de_texto:
  - capitulo_de_libro
  - ensayo
  - articulo_academico
  - transcripcion
  - guion
  - discurso
  - clase
  - hilo_argumentativo
  - informe
  - manifiesto
  - texto_publicitario_extenso
  - pieza_hibrida
```

---

## 5. Salida del módulo

La salida debe ser una estructura explícita, no un párrafo narrativo libre.

```yaml
extraccion_de_macroestructura:
  identificacion:
    texto_analizado:
    tipo_de_texto:
    unidad_de_analisis:

  gist_global:
    formulacion_breve:
    formulacion_ultracorta:
    funcion_del_gist:

  proposiciones_locales:
    - prop_id:
      formulacion:
      tipo:
      unidad_fuente:
      funcion_local:
      evidencia_textual:

  recurrencias_semanticas:
    - recurrencia_id:
      nucleo:
      apariciones:
      funcion:

  agrupamientos_macrosemanticos:
    - group_id:
      nombre:
      proposiciones_incluidas:
      criterio_de_agrupamiento:
      funcion_global:
      zonas_textuales:

  macroproposiciones:
    - macro_id:
      tipo:
      formulacion:
      deriva_de:
      funcion_en_el_texto:
      centralidad:
      evidencia_textual:

  jerarquia_macroestructural:
    nivel_0_macrotesis_raiz:
    nivel_1_soportes_principales:
    nivel_2_soportes_secundarios:
    nivel_3_evidencias_y_casos:

  macroestructura_latente:
    tipo:
    trayectoria:

  evaluacion_de_cobertura:
    cobertura_global:
    partes_integradas:
    partes_no_integradas:
    riesgos_interpretativos:

  base_para_arquitectura_macro:
    estado_cognitivo_inicial_del_receptor:
    tension_inicial:
    transformaciones:
    estado_cognitivo_final_del_receptor:
```

---

## 6. Componentes internos del módulo

El módulo se compone de once componentes internos.

```txt
extractor_de_macroestructura
  1. normalizador_de_texto
  2. detector_de_unidades_semanticas_locales
  3. clasificador_de_proposiciones_locales
  4. detector_de_recurrencias_semanticas
  5. agrupador_macrosemantico
  6. constructor_de_macroproposiciones
  7. jerarquizador_macroestructural
  8. formulador_de_macrotesis_raiz
  9. evaluador_de_cobertura
  10. detector_de_macroestructura_latente
  11. preparador_para_arquitectura_macro
```

---

## 7. Componente 1: `normalizador_de_texto`

### 7.1 Función

Preparar el texto para análisis macroestructural sin alterar su contenido.

### 7.2 Operaciones

```txt
1. Conservar títulos y subtítulos relevantes.
2. Separar cortes de página o sección.
3. Distinguir texto principal de notas, citas, listas o piezas insertadas.
4. Detectar unidades largas que funcionen como relato, ejemplo, cita o regla.
5. Marcar zonas textuales visibles.
6. Preparar el texto para segmentación semántica.
```

### 7.3 Salida

```yaml
texto_normalizado:
  titulo_principal:
  zonas_visibles:
    - zona_id:
      tipo:
      rango:
      contenido:
  inserciones_detectadas:
    - insercion_id:
      tipo:
      funcion_probable:
```

### 7.4 Riesgos

```txt
- Tratar una pieza insertada como ruido.
- Eliminar marcas que luego podrían servir para detectar macroestructura.
- Confundir subtítulos visibles con funciones reales.
```

---

## 8. Componente 2: `detector_de_unidades_semanticas_locales`

### 8.1 Función

Detectar unidades locales de significado que puedan convertirse en proposiciones analíticas.

### 8.2 Tipos de unidad local

```yaml
tipos_de_unidad_local:
  caso:
    funcion: presentar una situación concreta.

  mini_historia:
    funcion: introducir una secuencia narrativa breve con función probatoria, ilustrativa o afectiva.

  afirmacion_general:
    funcion: formular una regla, tesis o generalización.

  mecanismo_psicologico:
    funcion: explicar por qué ocurre algo en sujetos, receptores o actores.

  evidencia_de_autoridad:
    funcion: sostener una proposición mediante experto, figura histórica, estudio o cita.

  contraste:
    funcion: oponer dos interpretaciones, conductas, estados o efectos.

  inferencia:
    funcion: derivar una conclusión a partir de premisas previas.

  analogia:
    funcion: transferir comprensión desde un dominio fuente hacia un dominio destino.

  recomendacion:
    funcion: orientar acción.

  regla:
    funcion: condensar el recorrido en una instrucción normativa.

  escena_emocional:
    funcion: producir interiorización afectiva de una idea.
```

### 8.3 Salida

```yaml
unidades_semanticas_locales:
  - unidad_id:
    tipo:
    contenido:
    ubicacion:
    funcion_local:
    evidencia_textual:
```

---

## 9. Componente 3: `clasificador_de_proposiciones_locales`

### 9.1 Función

Convertir unidades semánticas locales en proposiciones analíticas.

### 9.2 Reglas de formulación

Una proposición local debe:

```txt
1. Ser una oración analítica completa.
2. Conservar el sentido funcional de la unidad fuente.
3. Indicar el tipo de operación que cumple.
4. Poder agruparse con otras proposiciones.
5. Ser rastreable a evidencia textual.
```

### 9.3 Tipos de proposición local

```yaml
tipos_de_proposicion_local:
  tesis_local:
  caso:
  evidencia:
  contraste:
  mecanismo:
  generalizacion:
  consecuencia:
  regla:
  objecion:
  refutacion:
  transicion:
  sintesis:
  cierre_parcial:
```

### 9.4 Salida

```yaml
proposiciones_locales:
  - prop_id:
    formulacion:
    tipo:
    unidad_fuente:
    funcion_local:
    evidencia_textual:
```

---

## 10. Componente 4: `detector_de_recurrencias_semanticas`

### 10.1 Función

Detectar núcleos semánticos que reaparecen en distintas zonas del texto.

### 10.2 Criterios de recurrencia

```txt
Una recurrencia es relevante cuando:
1. aparece en varias zonas;
2. cambia de forma pero conserva función;
3. sostiene ejemplos o casos distintos;
4. se retoma en cierres parciales;
5. conecta zonas separadas del texto;
6. permite formular una macroproposición.
```

### 10.3 Tipos de recurrencia

```yaml
tipos_de_recurrencia:
  conceptual:
  narrativa:
  argumentativa:
  afectiva:
  normativa:
  ejemplificativa:
  metodologica:
```

### 10.4 Salida

```yaml
recurrencias_semanticas:
  - recurrencia_id:
    nucleo:
    apariciones:
    variaciones:
    funcion:
    posible_macroproposicion:
```

---

## 11. Componente 5: `agrupador_macrosemantico`

### 11.1 Función

Agrupar proposiciones locales en regiones semánticas mayores.

### 11.2 Criterios de agrupamiento

```txt
1. Mismo núcleo conceptual.
2. Misma función argumentativa.
3. Misma operación cognitiva.
4. Mismo mecanismo explicativo.
5. Misma orientación normativa.
6. Misma función dentro de la trayectoria textual.
7. Dependencia mutua entre proposiciones.
```

### 11.3 Salida

```yaml
agrupamientos_macrosemanticos:
  - group_id:
    nombre:
    proposiciones_incluidas:
    criterio_de_agrupamiento:
    funcion_global:
    zonas_textuales:
    macroproposicion_candidata:
```

---

## 12. Componente 6: `constructor_de_macroproposiciones`

### 12.1 Función

Construir macroproposiciones a partir de agrupamientos macrosemánticos.

### 12.2 Reglas de construcción

Una macroproposición debe:

```txt
1. Condensar varias proposiciones locales.
2. Ser más abstracta que las proposiciones que agrupa.
3. No perder la función del agrupamiento.
4. Ser formulada de forma autónoma.
5. Mantener evidencia textual rastreable.
6. Tener centralidad estimable.
7. Poder conectarse con otras macroproposiciones.
```

### 12.3 Tipos de macroproposición

```yaml
tipos_de_macroproposicion:
  diagnostico:
  problema:
  tesis:
  distincion:
  mecanismo:
  principio:
  consecuencia:
  metodo:
  critica:
  sintesis:
  marco:
  aplicacion:
  regla_normativa:
  modelo_ejemplar:
  confirmacion_extensiva:
```

### 12.4 Operaciones para construir macroproposiciones

```yaml
operaciones:
  seleccion:
    descripcion: conservar una proposición local porque ya expresa una idea central.

  generalizacion:
    descripcion: reemplazar varias proposiciones específicas por una formulación más general.

  construccion:
    descripcion: crear una macroproposición inferida que integra varias proposiciones locales.

  integracion:
    descripcion: unir dos o más agrupamientos bajo una formulación superior.

  reduccion:
    descripcion: eliminar detalles locales que no cambian el núcleo macrosemántico.
```

---

## 13. Componente 7: `jerarquizador_macroestructural`

### 13.1 Función

Organizar macroproposiciones en niveles.

### 13.2 Niveles

```yaml
niveles_de_macroestructura:
  nivel_0_macrotesis_raiz:
    descripcion: formulación que integra la totalidad del texto.

  nivel_1_soportes_principales:
    descripcion: macroproposiciones indispensables para sostener la macrotesis raíz.

  nivel_2_soportes_secundarios:
    descripcion: macroproposiciones que amplían, confirman o ejemplifican los soportes principales.

  nivel_3_evidencias_y_casos:
    descripcion: unidades locales, ejemplos, escenas, citas o detalles que sostienen los niveles superiores.
```

### 13.3 Criterios para determinar nivel

```txt
1. Centralidad dentro del texto.
2. Dependencia de otras proposiciones.
3. Capacidad integradora.
4. Posición estratégica.
5. Reaparición o recurrencia.
6. Conexión con la conclusión o regla final.
7. Cantidad de evidencia que organiza.
```

---

## 14. Componente 8: `formulador_de_macrotesis_raiz`

### 14.1 Función

Formular la proposición de mayor nivel que integra la totalidad del texto.

### 14.2 Criterios de calidad

La macrotesis raíz debe:

```txt
1. Integrar la mayor parte del texto.
2. Explicar por qué aparecen los casos principales.
3. Conectar diagnóstico, mecanismo, consecuencia y cierre.
4. No reducir el texto a una moraleja simple.
5. No ser tan abstracta que pierda contenido.
6. Contener la lógica central del texto.
7. Preparar la transición hacia arquitectura macro.
```

### 14.3 Formato

```yaml
macrotesis_raiz:
  formulacion:
  funcion:
  macroproposiciones_integradas:
  regla_o_consecuencia_derivada:
  grado_de_confianza:
```

---

## 15. Componente 9: `evaluador_de_cobertura`

### 15.1 Función

Verificar que la macroestructura cubra el texto completo y no sólo las partes más llamativas.

### 15.2 Criterios de cobertura

```txt
1. Cobertura de apertura.
2. Cobertura de desarrollo.
3. Cobertura de ejemplos principales.
4. Cobertura de citas o autoridades.
5. Cobertura de transiciones.
6. Cobertura de cierre.
7. Cobertura de piezas insertadas.
8. Cobertura de reglas o conclusiones finales.
```

### 15.3 Salida

```yaml
evaluacion_de_cobertura:
  cobertura_global:
  partes_integradas:
  partes_no_integradas:
  razones_de_no_integracion:
  riesgos_interpretativos:
  posibles_lecturas_alternativas:
```

---

## 16. Componente 10: `detector_de_macroestructura_latente`

### 16.1 Función

Detectar la estructura profunda que organiza el texto aunque no esté declarada explícitamente.

### 16.2 Preguntas guía

```txt
¿Qué movimiento profundo realiza el texto?
Qué tipo de secuencia produce?
Qué patrón de acumulación, contraste, demostración o conversión aparece?
Cómo se transforma la posición del receptor?
Qué función cumplen los casos o ejemplos dentro de ese patrón?
```

### 16.3 Salida

```yaml
macroestructura_latente:
  tipo:
  descripcion:
  trayectoria:
    - movimiento_id:
      nombre:
      descripcion:
      funcion:
      zonas_textuales:
```

### 16.4 Tipos posibles

```yaml
tipos_de_macroestructura_latente:
  acumulacion_probatoria:
  problema_distincion_consecuencia:
  contraste_resolucion:
  diagnostico_metodo_aplicacion:
  caso_principio_aplicacion:
  tesis_objecion_sintesis:
  secuencia_transformadora:
  conversion_etica:
  interiorizacion_afectiva:
  expansion_historica:
  desmontaje_de_creencia:
  reconstruccion_conceptual:
```

---

## 17. Componente 11: `preparador_para_arquitectura_macro`

### 17.1 Función

Transformar la macroestructura semántica en base para la arquitectura macro narrativo-cognitiva.

### 17.2 Operación principal

```txt
macroestructura_semantica
  → trayectoria_de_transformacion_cognitiva
```

### 17.3 Salida

```yaml
base_para_arquitectura_macro:
  estado_cognitivo_inicial_del_receptor:
    descripcion:
  tension_inicial:
    descripcion:
  transformaciones:
    - transformacion_id:
      nombre:
      descripcion:
      macroproposiciones_implicadas:
  estado_cognitivo_final_del_receptor:
    descripcion:
```

### 17.4 Diferencia con arquitectura macro completa

El `extractor_de_macroestructura` no debe producir todavía toda la arquitectura macro. Sólo entrega la base semántica y la hipótesis de transformación que otros módulos profundizarán.

```txt
macroestructura = qué sentido global organiza el texto
arquitectura_macro = cómo ese sentido evoluciona narrativo-cognitivamente
```

---

## 18. Criterios de centralidad macroestructural

Una idea puede elevarse a macroproposición si cumple varios de estos criterios:

```yaml
criterios_de_centralidad:
  recurrencia:
    pregunta: aparece o reaparece en varias zonas del texto?

  subordinacion:
    pregunta: otras ideas dependen de ella?

  topicalidad:
    pregunta: aparece como tesis, pregunta, cierre o frase temática?

  poder_integrador:
    pregunta: permite agrupar varias proposiciones locales?

  funcion_transformadora:
    pregunta: cambia la comprensión del receptor?

  posicion_estrategica:
    pregunta: aparece en apertura, cierre, transición o recapitulación?

  densidad_relacional:
    pregunta: se conecta con muchas otras ideas?

  indispensabilidad:
    pregunta: si se elimina, el texto pierde dirección?
```

---

## 19. Errores frecuentes

### 19.1 Confundir tema con macroestructura

El tema nombra el dominio. La macroestructura reconstruye la organización global del sentido.

### 19.2 Hacer resumen lineal

Una secuencia de “primero, luego, finalmente” puede ser útil, pero no basta. Hay que explicar cómo cada parte contribuye al sentido global.

### 19.3 Extraer demasiadas macroproposiciones

Si todo es macroproposición, nada es macroproposición. El módulo debe comprimir, no multiplicar sin jerarquía.

### 19.4 Depender sólo de títulos visibles

Los títulos son pistas. La función macrosemántica puede no coincidir con la división visible.

### 19.5 Ignorar piezas afectivas o narrativas

Un ejemplo, historia o escena emocional puede ser macroestructural si sostiene la transformación global del texto.

### 19.6 Inventar una tesis no sostenida

Toda macroproposición debe estar anclada en evidencia textual suficiente.

---

## 20. Plantilla operativa reusable

```yaml
extraccion_de_macroestructura:
  texto_analizado:
    titulo:
    fuente:
    tipo_de_texto:
    unidad_de_analisis:

  normalizacion:
    zonas_visibles:
    inserciones_detectadas:
    observaciones:

  gist_global:
    formulacion_breve:
    formulacion_ultracorta:
    funcion_del_gist:

  unidades_semanticas_locales:
    - unidad_id:
      tipo:
      contenido:
      ubicacion:
      funcion_local:

  proposiciones_locales:
    - prop_id:
      formulacion:
      tipo:
      unidad_fuente:
      funcion_local:

  recurrencias_semanticas:
    - recurrencia_id:
      nucleo:
      apariciones:
      funcion:

  agrupamientos_macrosemanticos:
    - group_id:
      nombre:
      proposiciones_incluidas:
      criterio_de_agrupamiento:
      funcion_global:

  macroproposiciones:
    - macro_id:
      tipo:
      formulacion:
      deriva_de:
      funcion_en_el_texto:
      centralidad:

  jerarquia_macroestructural:
    nivel_0_macrotesis_raiz:
    nivel_1_soportes_principales:
    nivel_2_soportes_secundarios:
    nivel_3_evidencias_y_casos:

  macrotesis_raiz:
    formulacion:
    funcion:
    regla_o_consecuencia_derivada:

  macroestructura_latente:
    tipo:
    trayectoria:

  evaluacion_de_cobertura:
    cobertura_global:
    partes_integradas:
    partes_no_integradas:
    riesgos_interpretativos:

  base_para_arquitectura_macro:
    estado_cognitivo_inicial_del_receptor:
    tension_inicial:
    transformaciones:
    estado_cognitivo_final_del_receptor:
```

---

## 21. Definición final

```txt
El extractor_de_macroestructura es el módulo del MAANC encargado de reconstruir la columna vertebral semántica de un texto mediante la identificación de proposiciones locales, la detección de recurrencias, el agrupamiento de unidades, la construcción de macroproposiciones, la jerarquización de niveles de sentido, la formulación de una macrotesis raíz y la validación de cobertura textual.

Su salida no es un resumen, sino una representación macrosemántica auditable que sirve como base para reconstruir la arquitectura macro narrativo-cognitiva del texto.
```
