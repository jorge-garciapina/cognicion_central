# Descripción actualizada de la migración

## Hacia un nuevo modelo base para guión de video corto

## Caso privilegiado: guión para video de TikTok

---

## 0. Carácter de este documento

Este documento **no es todavía el nuevo modelo base completo**.

Su función es más acotada y más precisa:

- corregir la arquitectura conceptual de la migración;
- fijar la terminología correcta;
- preservar el trabajo ya desarrollado en los modelos previos;
- evitar nuevas pérdidas de valores, restricciones o descripciones;
- y dejar explícito el orden en que deberá reconstruirse el nuevo modelo.

Este texto sustituye a versiones anteriores de la migración en todo aquello que:

- confundía **dimensión** con **campo**;
- colapsaba estructuras ya separadas;
- o empobrecía dimensiones que en los modelos previos ya contaban con
  espacios de valores, descripciones y restricciones desarrolladas.

---

## 1. Restricción fuerte del proyecto

La migración **no** busca construir un modelo general de materialización textual.

La migración **sí** busca construir un modelo base cuyo dominio de salida quede
restringido a una familia material muy concreta:

- **guión para video corto**
- y, de forma especialmente prioritaria,
- **guión para video de TikTok**

Esto implica que el nuevo modelo:

- no debe abrirse a salidas como libro, ensayo, hilo, artículo o newsletter;
- no debe desbordar la lógica audiovisual breve ya contenida en el codominio;
- y debe conservar compatibilidad fuerte con dimensiones como:
  - `modalidad_de_guion`
  - `duracion_objetivo`
  - `arquitectura_macro`
  - `segmentacion_interna`
  - `modo_de_comparecencia_verbal`
  - `esquema_de_texto_en_pantalla`
  - `esquema_de_indicaciones_escenicas`

La salida final del sistema debe seguir siendo **muy cercana** a la familia de
salidas mostradas en `mb-codominio.md` y `mb-video-corto.md`.

---

## 2. Objetivo de la migración

El objetivo de la migración es este:

> pasar de una arquitectura apoyada en varios modelos relativamente separados
> (`mb-intencion`, `mb-arquitectura-textual`, `mb-codominio`) a un solo modelo
> base reorganizado por **dimensiones nuevas**, dentro de las cuales se
> redistribuyen los **campos** heredados y reconstruidos.

Esto no significa borrar los modelos anteriores.

Significa otra cosa:

- tomar sus dimensiones y campos;
- reasignarlos a una nueva organización más coherente;
- conservar los valores ya desarrollados;
- y reconstruir un nuevo modelo base completo sobre esa nueva organización.

---

## 3. Corrección terminológica obligatoria

A partir de este punto, la gramática correcta del sistema es la siguiente:

### 3.1. `dimensión`

Unidad mayor de organización del modelo base.

La dimensión agrupa un conjunto de campos que pertenecen a una misma región de
responsabilidad estructural.

### 3.2. `campo`

Elemento interno de una dimensión.

Cada campo debe tener, cuando el modelo esté completo:

- función;
- pregunta a la que responde;
- tipo de valor;
- cardinalidad;
- espacio de valores;
- descripción de valores;
- y restricciones.

### 3.3. `valor`

Posibilidad válida dentro del espacio de valores de un campo.

### 3.4. Consecuencia terminológica

Las unidades que antes veníamos llamando:

- `campo_identidad_operativa_de_la_realizacion`
- `campo_orientacion_funcional_pragmatica`
- `campo_escala_temporal_y_resolucion_realizativa`
- `campo_acoplamiento_receptoral`
- `campo_dinamica_atencional_y_procesual`
- `campo_construccion_del_caso`
- `campo_comparecencia_performativa`
- `campo_marco_de_materializacion`
- `campo_composicion_segmental_de_la_salida`
- `campo_inscripcion_de_superficie_de_la_salida`

ya no deben llamarse **campos**.

Deben llamarse **dimensiones**.

---

## 4. Regla metodológica central

La reconstrucción del nuevo modelo debe obedecer simultáneamente dos principios.

### 4.1. Principio conservativo

Nada valioso ya desarrollado en los modelos previos debe perderse sin
justificación explícita.

Esto incluye:

- valores ya definidos;
- descripciones ya redactadas;
- restricciones ya declaradas;
- y relaciones ya establecidas entre dimensiones o campos.

### 4.2. Principio reconstructivo

No basta con trasladar nombres a una nueva organización.

Hay que reconstruir cada dimensión nueva con todos sus campos, y cada campo con
el nivel de completitud exigido por `construccion-de-modelos-base.md`.

Por tanto, la migración correcta no consiste en:

- resumir;
- renombrar;
- o reagrupar superficialmente.

Consiste en:

- reubicar;
- conservar;
- completar;
- y formalizar de nuevo.

---

## 5. Qué debe evitarse a partir de ahora

La siguiente lista debe entenderse como una lista de errores a evitar durante el
refinamiento.

### 5.1. No colapsar varias dimensiones nuevas bajo una sola etiqueta heredada

Por ejemplo, no debe reintroducirse un bloque superior como:

- `materializacion`

si con ello se vuelven a mezclar cosas que ahora deben permanecer separadas, como:

- dimensión de marco de materialización;
- dimensión de composición segmental de la salida;
- dimensión de inscripción de superficie de la salida.

### 5.2. No reemplazar valores ya desarrollados por formulaciones vacías

Si un campo ya tenía un espacio de valores trabajado en el modelo anterior,
ese espacio debe conservarse mientras no exista una razón fuerte y explícita
para reformularlo.

### 5.3. No tratar como modelo completo una simple reorganización preliminar

Una lista de dimensiones con nombres nuevos no equivale todavía a un modelo base
completo.

### 5.4. No omitir campos mostrados en los modelos anteriores

Deben considerarse no solo las dimensiones principales, sino también los campos
mostrados dentro de estructuras como:

- `clase_de_materializacion`
- `LECTURA_PREVIA_DE_BLOQUES`
- `JUSTIFICACIONES_DIMENSIONALES`
- capas verbal, visual, escénica y auditiva del bloque.

---

## 6. Nueva organización dimensional del modelo

La organización vigente de la migración queda fijada, por ahora, en estas diez
**dimensiones** nuevas:

1. `dimension_identidad_operativa_de_la_realizacion`
2. `dimension_orientacion_funcional_pragmatica`
3. `dimension_escala_temporal_y_resolucion_realizativa`
4. `dimension_acoplamiento_receptoral`
5. `dimension_dinamica_atencional_y_procesual`
6. `dimension_construccion_del_caso`
7. `dimension_comparecencia_performativa`
8. `dimension_marco_de_materializacion`
9. `dimension_composicion_segmental_de_la_salida`
10. `dimension_inscripcion_de_superficie_de_la_salida`

Estas dimensiones no son todavía equivalentes al modelo completo.

Son la **nueva arquitectura de organización** sobre la que el modelo completo se
reconstruirá.

---

## 7. Estado actual de la migración

En este punto ya está resuelto:

- el caso de uso general del nuevo modelo;
- la restricción fuerte de salida hacia guión para video corto;
- la nueva organización por dimensiones;
- la necesidad de distinguir dimensión, campo y valor;
- y el principio de conservación de valores ya desarrollados.

En este punto todavía **no** está resuelto completamente:

- el nuevo modelo base dimensión por dimensión;
- la formalización completa de todos sus campos;
- la restitución íntegra de todos los espacios de valores heredados;
- ni la redacción final de descripciones y restricciones bajo la nueva organización.

---

## 8. Eeordenamiento completo

# Orden preliminar del nuevo modelo base

## Dimensiones nuevas, campos internos y valores heredados

## Sin descripciones, solo orden

> **Criterio de lectura**
>
> - **dimensión** = unidad mayor de organización del nuevo modelo
> - **campo** = elemento interno de la dimensión
> - **valor** = espacio de valores heredado o, si no existe espacio cerrado, marca de que el valor sigue siendo abierto/controlado
>
> Donde un campo nuevo **colapsa** una dimensión antigua o varios campos antiguos, eso se indica explícitamente.

---

## 1. `dimension_identidad_operativa_de_la_realizacion`

### Campos

#### 1.1. `formulacion_canonica`

- **Proviene de:** `mb-intencion.md -> formulacion_canonica`
- **Espacio de valor heredado:** `descriptivo_controlado`
- **Ejemplos válidos heredados:**
  - `crear guion para video de TikTok`
  - `crear texto para Instagram Carousel`
  - `crear guía de reexplicación`
  - `crear microsecuencia guiada`
  - `crear síntesis operativa`

#### 1.2. `nivel_de_especificidad`

- **Proviene de:** `mb-intencion.md -> nivel_de_especificidad`
- **Valores heredados:**
  - `general`
  - `intermedia`
  - `especifica`

#### 1.3. `prioridad_de_intencion`

- **Proviene de:** `mb-intencion.md -> prioridad_de_intencion`
- **Valores heredados:**
  - `principal`
  - `secundaria`
  - `terciaria`
  - `auxiliar`

---

## 2. `dimension_orientacion_funcional_pragmatica`

### Campos

#### 2.1. `funcion_dominante`

- **Proviene de:** `mb-intencion.md -> funcion_dominante`
- **Valores heredados:**
  - `enseñar`
  - `sintetizar`
  - `persuadir`
  - `evaluar`
  - `diagnosticar`
  - `captar_atencion`
  - `activar_interaccion`
  - `convertir`
  - `distribuir`
  - `manifestar_comercialmente`
  - `abrir_serie`
  - `continuar_serie`
  - `cerrar_serie`

#### 2.2. `efecto_buscado`

- **Proviene de:** `mb-intencion.md -> efecto_buscado`
- **Valores heredados sugeridos:**
  - `comprension_rapida`
  - `curiosidad`
  - `identificacion`
  - `sorpresa`
  - `urgencia`
  - `retencion`
  - `expectativa_de_resolucion`
  - `deseo_de_guardar`
  - `deseo_de_comentar`
  - `deseo_de_compartir`
  - `deseo_de_ver_hasta_el_final`
  - `deseo_de_ir_al_perfil`
  - `predisposicion_a_serie`
  - `disposicion_a_accion`

#### 2.3. `accion_esperada`

- **Proviene de:** `mb-intencion.md -> accion_esperada`
- **Valores heredados:**
  - `ver_hasta_el_final`
  - `comentar`
  - `guardar`
  - `compartir`
  - `seguir_cuenta`
  - `ir_al_perfil`
  - `consumir_parte_siguiente`
  - `solicitar_mas_informacion`
  - `hacer_click`
  - `aplicar_lo_mostrado`
  - `ninguna_explicita`

#### 2.4. `configuracion_discursiva`

- **Proviene de:** `mb-arquitectura-textual.md -> configuracion_discursiva`
- **Valores heredados:**
  - `definicional`
  - `explicativa`
  - `argumentativa`
  - `operativa`
  - `sintetizadora`
  - `captativa`
  - `hibrida_controlada`

---

## 3. `dimension_escala_temporal_y_resolucion_realizativa`

### Campos

#### 3.1. `alcance_de_realizacion`

- **Proviene de:** `mb-intencion.md -> alcance_de_realizacion`
- **Valores heredados:**
  - `pieza_unica`
  - `apertura_de_serie`
  - `continuidad_de_serie`
  - `cierre_de_serie`
  - `pieza_de_transicion`
  - `pieza_de_prueba`
  - `pieza_de_validacion`
  - `pieza_de_acceso`
  - `pieza_de_profundizacion`

#### 3.2. `horizonte_temporal`

- **Proviene de:** `mb-intencion.md -> horizonte_temporal`
- **Valores heredados:**
  - `inmediato`
  - `corto_plazo`
  - `mediano_plazo`
  - `acumulativo`
  - `seriado`

#### 3.3. `regimen_de_resolucion_buscada`

- **Proviene de:** `mb-intencion.md -> regimen_de_resolucion_buscada`
- **Valores heredados:**
  - `resolucion_inmediata`
  - `resolucion_progresiva`
  - `resolucion_diferida`
  - `resolucion_parcial`
  - `resolucion_abierta_a_continuidad`

---

## 4. `dimension_acoplamiento_receptoral`

### Campos

#### 4.1. `publico_objetivo_inmediato`

- **Proviene de:** `mb-intencion.md -> publico_objetivo_inmediato`
- **Valores heredados sugeridos:**
  - `audiencia_fria`
  - `audiencia_tibia`
  - `audiencia_caliente`
  - `seguidores_actuales`
  - `personas_sin_conocimiento_previos`
  - `personas_con_interes_previos`
  - `personas_que_no_aplican`
  - `personas_que_no_comprenden`
  - `personas_que_ya_comprenden`

#### 4.2. `adecuacion_lexico_formulativa`

- **Colapsa la antigua dimensión:** `mb-arquitectura-textual.md -> configuracion_lexica`

##### 4.2.1. `registro_predominante`

- **Proviene de:** `configuracion_lexica -> registro_predominante`
- **Valores heredados:**
  - `tecnico`
  - `pedagogico`
  - `institucional`
  - `analitico`
  - `coloquial_controlado`
  - `hibrido`

##### 4.2.2. `densidad_terminologica`

- **Proviene de:** `configuracion_lexica -> densidad_terminologica`
- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 4.2.3. `grado_de_abstraccion`

- **Proviene de:** `configuracion_lexica -> grado_de_abstraccion`
- **Valores heredados:**
  - `concreto`
  - `intermedio`
  - `abstracto`

##### 4.2.4. `accesibilidad_lexica`

- **Proviene de:** `configuracion_lexica -> accesibilidad_lexica`
- **Valores heredados:**
  - `alta`
  - `media`
  - `baja`

##### 4.2.5. `variacion_lexica`

- **Proviene de:** `configuracion_lexica -> variacion_lexica`
- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

---

## 5. `dimension_dinamica_atencional_y_procesual`

### Campos

#### 5.1. `estado_atencional`

- **Proviene de:** `mb-intencion.md -> estado_atencional`
- **Valores heredados sugeridos:**
  - `atencion_no_abierta`
  - `atencion_inestable`
  - `atencion_fragmentada`
  - `atencion_superficial`
  - `atencion_sostenida`
  - `atencion_en_exploracion`
  - `atencion_lista_para_profundizacion`
  - `atencion_lista_para_activacion`
  - `atencion_lista_para_continuidad`
  - `atencion_requiere_reenganche`

#### 5.2. `regimen_de_activacion_atencional`

- **Proviene de:** `mb-intencion.md -> regimen_de_activacion_atencional`
- **Valores heredados:**
  - `apertura_inmediata`
  - `apertura_progresiva`
  - `reenganche`
  - `sostenimiento_desde_el_inicio`
  - `activacion_por_continuidad`

#### 5.3. `dinamica_procesual`

- **Colapsa la antigua dimensión:** `mb-arquitectura-textual.md -> configuracion_de_ritmo_y_legibilidad`

##### 5.3.1. `explicitud`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 5.3.2. `continuidad`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 5.3.3. `friccion_interpretativa`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 5.3.4. `compresion`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 5.3.5. `recapitulacion`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

---

## 6. `dimension_construccion_del_caso`

### Campos

#### 6.1. `construccion_conceptual`

- **Colapsa la antigua dimensión:** `mb-arquitectura-textual.md -> configuracion_conceptual`
- **Valor estructural heredado:**
  - `coleccion_de_ideas_activas`

##### 6.1.1. `idea_activa`

- **Valor estructural heredado:** `idea_activa`

###### 6.1.1.1. `formulacion_de_la_idea`

- **Valores heredados:**
  - `proposicion_definicional`
  - `proposicion_relacional`
  - `proposicion_argumentativa`
  - `proposicion_operativa`
  - `formulacion_abierta_controlada`

###### 6.1.1.2. `rol_conceptual`

- **Valores heredados:**
  - `nuclear`
  - `complementaria`
  - `puente`
  - `contrastiva`
  - `derivada`

###### 6.1.1.3. `peso_relativo`

- **Espacio de valor heredado:**
  - cualquier valor escalar normalizado entre `0` y `1`

###### 6.1.1.4. `modo_de_presencia`

- **Valores heredados:**
  - `explicita`
  - `explicita_reiterada`
  - `implicita_estructurante`
  - `localizada`
  - `transversal`

###### 6.1.1.5. `relaciones_con_otras_ideas`

- **Valor estructural heredado:**
  - `coleccion_de_relaciones_formuladas`

####### 6.1.1.5.1. `idea_relacionada`

- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

####### 6.1.1.5.2. `tipo_de_relacion`

- **Valores heredados:**
  - `soporte`
  - `subordinacion`
  - `expansion`
  - `contraste`
  - `condicion`
  - `consecuencia`
  - `equivalencia_parcial`
  - `articulacion_libre_controlada`

####### 6.1.1.5.3. `descripcion_de_la_relacion`

- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

#### 6.2. `configuracion_narrativa`

- **Proviene de:** `mb-arquitectura-textual.md -> configuracion_narrativa`
- **Valores heredados:**
  - `lineal_progresiva`
  - `apertura_profundizacion_cierre`
  - `contrastiva`
  - `acumulativa`
  - `recapitulativa`
  - `modular`
  - `abierta_controlada`

---

## 7. `dimension_comparecencia_performativa`

### Campos

#### 7.1. `comparecencia_performativa`

- **Colapsa la antigua dimensión:** `mb-arquitectura-textual.md -> configuracion_de_voz_o_comparecencia`

##### 7.1.1. `cercania`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 7.1.2. `autoridad`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 7.1.3. `calidez`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 7.1.4. `intensidad`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

##### 7.1.5. `sobriedad`

- **Valores heredados:**
  - `baja`
  - `media`
  - `alta`

#### 7.2. `modalidad_de_guion`

- **Proviene de:** `mb-codominio.md -> modalidad_de_guion`
- **Valores heredados:**
  - `presentacion_a_camara`
  - `voz_en_off`
  - `escenificado`
  - `mixto`

#### 7.3. `modo_de_comparecencia_verbal`

- **Proviene de:** `mb-codominio.md -> modo_de_comparecencia_verbal`
- **Valores heredados:**
  - `oral_directo`
  - `oral_guiado`
  - `oral_escenico`
  - `oral_mixto`

#### 7.4. `realizacion_verbal_de_bloque`

- **Colapsa campos mostrados dentro de:** `mb-codominio.md -> clase_de_materializacion`
- **Campos heredados:**
  - `EMISOR`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`
  - `DIALOGO`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

#### 7.5. `acompanamiento_auditivo`

- **Colapsa campos mostrados dentro de:** `mb-codominio.md -> clase_de_materializacion`
- **Campos heredados:**
  - `MUSICA`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`
  - `SONIDO_AMBIENTE`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`
  - `EFECTO_SONORO`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

---

## 8. `dimension_marco_de_materializacion`

### Campos

#### 8.1. `clase_de_materializacion`

- **Proviene de:** `mb-codominio.md -> clase_de_materializacion`
- **Valores heredados:**
  - `guion_audiovisual_breve`

#### 8.2. `plataforma`

- **Proviene de:** `mb-codominio.md -> plataforma`
- **Valores heredados:**
  - `tiktok`

#### 8.3. `aplicacion_de_plataforma`

- **Proviene de:** `mb-codominio.md -> aplicacion_de_plataforma`
- **Valores heredados:**
  - `video_tiktok`

---

## 9. `dimension_composicion_segmental_de_la_salida`

### Campos

#### 9.1. `duracion_objetivo`

- **Proviene de:** `mb-codominio.md -> duracion_objetivo`
- **Valores heredados:**
  - `muy_breve`
  - `breve`
  - `breve_expandido`

#### 9.2. `arquitectura_macro`

- **Proviene de:** `mb-codominio.md -> arquitectura_macro`
- **Valores heredados:**
  - `apertura_desarrollo_cierre`
  - `apertura_desarrollo_remate`
  - `apertura_lista_cierre`
  - `apertura_contraste_resolucion`
  - `apertura_secuencia_remate`

#### 9.3. `componentes_macroestructurales_posibles`

- **Reubica componentes mostrados dentro de:** `mb-codominio.md -> clase_de_materializacion`
- **Valores heredados mostrados:**
  - `APERTURA`
  - `DESARROLLO`
  - `CIERRE`
  - `REMATE`
  - `LISTA`
  - `CONTRASTE`
  - `SECUENCIA`
  - `RESOLUCION`

#### 9.4. `segmentacion_interna`

- **Proviene de:** `mb-codominio.md -> segmentacion_interna`
- **Valores heredados:**
  - `microsegmentado`
  - `segmentado`
  - `segmentado_extenso`

#### 9.5. `unidad_de_segmento`

- **Proviene de:** `mb-codominio.md -> unidad_de_segmento`
- **Valores heredados:**
  - `enunciado_breve`
  - `bloque_de_oraciones`
  - `parlamento_breve`
  - `accion_mas_enunciado`
  - `unidad_mixta`

#### 9.6. `longitud_por_segmento`

- **Proviene de:** `mb-codominio.md -> longitud_por_segmento`
- **Espacio de valor heredado visible en los archivos actuales:**
  - `corta`
- **Nota de orden:** en el archivo visible no aparece desarrollada como sección autónoma completa; solo queda mencionada en estructura, restricciones y ejemplo.

#### 9.7. `lectura_previa_de_bloques`

- **Reubica campo mostrado dentro de:** `mb-codominio.md -> clase_de_materializacion`
- **Campos heredados mínimos mostrados:**
  - `identificacion_de_bloque`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`
  - `emisor_principal`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`
  - `texto_verbal_principal`
    - **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

#### 9.8. `estructura_local_de_bloque`

- **Colapsa campos mostrados dentro de:** `mb-codominio.md -> clase_de_materializacion`

##### 9.8.1. `FUNCION_DEL_BLOQUE`

- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

##### 9.8.2. `IDEA_DESARROLLADA`

- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

##### 9.8.3. `JUSTIFICACIONES_DIMENSIONALES`

- **Espacio de valor heredado:** `coleccion_de_justificaciones_por_dimension`

###### 9.8.3.1. `arquitectura_macro`

- **Valores heredados asociados:** ver `9.2. arquitectura_macro`

###### 9.8.3.2. `segmentacion_interna`

- **Valores heredados asociados:** ver `9.4. segmentacion_interna`

###### 9.8.3.3. `unidad_de_segmento`

- **Valores heredados asociados:** ver `9.5. unidad_de_segmento`

###### 9.8.3.4. `modo_de_comparecencia_verbal`

- **Valores heredados asociados:** ver `7.3. modo_de_comparecencia_verbal`

###### 9.8.3.5. `esquema_de_texto_en_pantalla`

- **Valores heredados asociados:** ver `10.1. esquema_de_texto_en_pantalla`

###### 9.8.3.6. `esquema_de_indicaciones_escenicas`

- **Valores heredados asociados:** ver `10.2. esquema_de_indicaciones_escenicas`

---

## 10. `dimension_inscripcion_de_superficie_de_la_salida`

### Campos

#### 10.1. `esquema_de_texto_en_pantalla`

- **Proviene de:** `mb-codominio.md -> esquema_de_texto_en_pantalla`
- **Valores heredados:**
  - `sin_texto_en_pantalla`
  - `texto_de_refuerzo_minimo`
  - `texto_de_refuerzo_segmentado`
  - `texto_en_pantalla_dominante`
  - `texto_en_pantalla_mixto`

#### 10.2. `esquema_de_indicaciones_escenicas`

- **Proviene de:** `mb-codominio.md -> esquema_de_indicaciones_escenicas`
- **Valores heredados:**
  - `ninguna`
  - `minimas`
  - `moderadas`
  - `detalladas`

#### 10.3. `texto_en_pantalla_por_bloque`

- **Reubica campo mostrado dentro de:** `mb-codominio.md -> clase_de_materializacion -> capa_visual -> TEXTO_EN_PANTALLA`
- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

#### 10.4. `imagen_en_pantalla_por_bloque`

- **Reubica campo mostrado dentro de:** `mb-codominio.md -> clase_de_materializacion -> capa_visual -> IMAGEN_EN_PANTALLA`
- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

#### 10.5. `acciones_por_bloque`

- **Reubica campo mostrado dentro de:** `mb-codominio.md -> clase_de_materializacion -> capa_escenica -> ACCIONES`
- **Espacio de valor heredado:** `sin_espacio_cerrado_heredado`

---

## 11. Control de no omisión

### Dimensiones antiguas consideradas

#### Desde `mb-intencion.md`

- `formulacion_canonica`
- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `nivel_de_especificidad`
- `alcance_de_realizacion`
- `prioridad_de_intencion`
- `publico_objetivo_inmediato`
- `estado_atencional`
- `horizonte_temporal`
- `regimen_de_activacion_atencional`
- `regimen_de_resolucion_buscada`

#### Desde `mb-arquitectura-textual.md`

- `configuracion_conceptual`
  - `formulacion_de_la_idea`
  - `rol_conceptual`
  - `peso_relativo`
  - `modo_de_presencia`
  - `relaciones_con_otras_ideas`
    - `idea_relacionada`
    - `tipo_de_relacion`
    - `descripcion_de_la_relacion`
- `configuracion_narrativa`
- `configuracion_lexica`
  - `registro_predominante`
  - `densidad_terminologica`
  - `grado_de_abstraccion`
  - `accesibilidad_lexica`
  - `variacion_lexica`
- `configuracion_de_voz_o_comparecencia`
  - `cercania`
  - `autoridad`
  - `calidez`
  - `intensidad`
  - `sobriedad`
- `configuracion_de_ritmo_y_legibilidad`
  - `explicitud`
  - `continuidad`
  - `friccion_interpretativa`
  - `compresion`
  - `recapitulacion`
- `configuracion_discursiva`

#### Desde `mb-codominio.md`

- `clase_de_materializacion`
  - `LECTURA_PREVIA_DE_BLOQUES`
  - componentes macroestructurales mostrados:
    - `APERTURA`
    - `DESARROLLO`
    - `CIERRE`
    - `REMATE`
    - `LISTA`
    - `CONTRASTE`
    - `SECUENCIA`
    - `RESOLUCION`
  - campos mostrados en bloques:
    - `FUNCION_DEL_BLOQUE`
    - `IDEA_DESARROLLADA`
    - `JUSTIFICACIONES_DIMENSIONALES`
    - `EMISOR`
    - `DIALOGO`
    - `TEXTO_EN_PANTALLA`
    - `IMAGEN_EN_PANTALLA`
    - `ACCIONES`
    - `MUSICA`
    - `SONIDO_AMBIENTE`
    - `EFECTO_SONORO`
- `plataforma`
- `aplicacion_de_plataforma`
- `modalidad_de_guion`
- `duracion_objetivo`
- `arquitectura_macro`
- `segmentacion_interna`
- `unidad_de_segmento`
- `modo_de_comparecencia_verbal`
- `esquema_de_texto_en_pantalla`
- `esquema_de_indicaciones_escenicas`
- `longitud_por_segmento`

---

## 12. Nota final de método

Este documento **no** describe todavía los campos ni sus valores.  
Solo hace tres cosas:

1. reordena todo según las **nuevas dimensiones**;
2. deja visible qué campos internos tendrá cada dimensión;
3. y fuerza a no omitir ninguna dimensión ni campo mostrado en los modelos antiguos.

---

## 9. Qué debe producir el refinamiento a partir de este documento

A partir de esta versión actualizada de la migración, el trabajo ya no debería
consistir en seguir discutiendo la arquitectura en abstracto, sino en reconstruir
el nuevo modelo base de forma controlada.

El orden correcto de trabajo debería ser este:

### 9.1. Tomar una dimensión nueva

Por ejemplo:

- `dimension_composicion_segmental_de_la_salida`

### 9.2. Enumerar todos sus campos

Sin omitir ninguno.

### 9.3. Rastrear en los modelos antiguos qué desarrollo previo existe

Esto incluye:

- espacios de valores;
- descripciones;
- restricciones.

### 9.4. Conservar todo lo ya desarrollado que siga siendo válido

No resumirlo ni sustituirlo por una versión debilitada.

### 9.5. Completar únicamente lo que aún no exista

Si un campo nuevo no tenía equivalente completo en los modelos anteriores,
recién ahí se construye desde cero.

---

## 10. Forma de salida esperada del nuevo modelo

El nuevo modelo base, una vez reconstruido, no debe entenderse solo como una
máquina de “llenar campos”, sino como una arquitectura capaz de producir una
**salida final reconocible, utilizable y estructuralmente válida** dentro de una
familia muy concreta de materialización.

Esa familia no es “texto en general”.

Es esta:

- **guión para video corto**
- y, de manera especialmente prioritaria,
- **guión para TikTok**

Por tanto, la pregunta correcta no es solo:

**¿qué información recibe el modelo?**

Sino también:

**¿qué forma de salida debe poder producir legítimamente?**

---

### 10.1. Entrada esperada

La entrada esperada del nuevo modelo es una **configuración global distribuida por
las diez dimensiones nuevas del sistema**.

Eso significa que una entrada válida no consiste en una idea suelta ni en una
instrucción aislada, sino en una configuración que declara, al menos:

- identidad operativa de la realización;
- orientación funcional-pragmática;
- escala temporal y resolución realizativa;
- acoplamiento receptoral;
- dinámica atencional y procesual;
- construcción del caso;
- comparecencia performativa;
- marco de materialización;
- composición segmental de la salida;
- e inscripción de superficie de la salida.

La entrada, por tanto, debe ser suficiente para fijar no solo **qué se quiere
decir**, sino también:

- cómo debe orientarse la pieza,
- para quién está hecha,
- cómo debe sostener la atención,
- cómo debe comparecer,
- y bajo qué forma concreta de guión debe materializarse.

---

### 10.2. Salida esperada

La salida esperada del nuevo modelo es una **pieza final del tipo guión para video
corto**, ya estructurada para una realización compatible con TikTok o con una
familia equivalente de video breve.

Esa salida debe ser reconocible como guión y no como mera prosa explicativa,
lista de ideas o nota de trabajo.

Esto implica que la salida final debe poder contener, de manera explícita o
implícita pero estructuralmente reconocible, elementos como:

- una arquitectura macro;
- una segmentación interna;
- una unidad de segmento definida;
- una longitud verbal aproximada por segmento;
- una modalidad de guión;
- un modo de comparecencia verbal;
- un posible texto en pantalla;
- posibles indicaciones escénicas;
- y una organización por bloques o tramos de realización.

Dicho de forma más precisa:

> la salida esperada del modelo no es “un texto sobre un tema”, sino una pieza
> guionizada, segmentada y realizable, perteneciente a la familia de guiones
> breves audiovisuales.

---

### 10.3. Qué debe poder reconocerse en la salida final

Una salida válida del nuevo modelo debe permitir reconocer con claridad cosas como
las siguientes:

#### a) Qué clase de bloque es cada tramo

Por ejemplo:

- apertura,
- desarrollo,
- cierre,
- remate,
- contraste,
- secuencia,
- lista.

#### b) Qué función cumple cada bloque

Por ejemplo:

- abrir atención,
- introducir contraste,
- desarrollar una idea nuclear,
- resolver una tensión,
- cerrar con fórmula guardable,
- rematar.

#### c) Qué régimen verbal tiene la pieza

Por ejemplo:

- oral directo,
- oral guiado,
- oral escénico,
- oral mixto.

#### d) Cómo se distribuye el contenido

Por ejemplo:

- tres bloques breves,
- una lista interna,
- una secuencia progresiva,
- un contraste con resolución.

#### e) Qué elementos de superficie acompañan la pieza

Por ejemplo:

- texto en pantalla mínimo;
- texto en pantalla por bloque;
- indicaciones escénicas mínimas;
- indicaciones escénicas moderadas.

---

### 10.4. Qué no debe confundirse con la salida esperada

No debe confundirse la salida esperada con:

- una nota conceptual;
- un resumen del tema;
- una explicación corrida sin segmentación;
- una lista informal de ideas;
- un simple prompt;
- o una descripción parcial de la pieza.

Tampoco debe entenderse que basta con entregar:

- un párrafo,
- una opinión,
- o una formulación general del contenido.

La salida correcta debe aparecer ya como **estructura de guión realizable**.

---

### 10.5. Grado de cercanía con `mb-codominio.md` y `mb-video-corto.md`

La salida esperada del nuevo modelo debe ser **muy cercana en forma** a lo que ya
muestran los ejemplos de `mb-codominio.md` y `mb-video-corto.md`.

Esto significa que el nuevo modelo no debe producir una salida genérica que luego
“habría que adaptar” desde cero, sino una salida que ya nazca con rasgos como:

- división en bloques;
- función local de cada bloque;
- articulación macro reconocible;
- comparecencia verbal plausible;
- y acompañamientos de superficie compatibles con video corto.

La migración, por tanto, no busca alejarse del codominio ya construido, sino
**reconstruirlo mejor dentro de una arquitectura unificada**.

---

### 10.6. Ejemplos de formas válidas de salida esperada

Los siguientes ejemplos no fijan contenido temático concreto.
Su función es mostrar **qué forma de salida** debe ser posible.

#### Ejemplo A — salida con arquitectura `apertura_desarrollo_cierre`

```txt
[BLOQUE 1 — APERTURA]
Función: abrir atención e introducir el problema.
Modo verbal: oral_directo.
Texto en pantalla: mínimo.
Indicaciones escénicas: mínimas.

[BLOQUE 2 — DESARROLLO]
Función: explicar la idea nuclear y desarrollar el núcleo del caso.
Modo verbal: oral_directo_reflexivo o equivalente.
Texto en pantalla: opcional de refuerzo.
Indicaciones escénicas: mínimas o moderadas.

[BLOQUE 3 — CIERRE]
Función: condensar la resolución y fijar una fórmula guardable.
Modo verbal: oral_directo con clausura clara.
Texto en pantalla: breve frase final o palabra clave.
Indicaciones escénicas: mínimas.
```

---

## 11. Qué cambia respecto de versiones anteriores del archivo de migración

Esta versión actualizada corrige, al menos, los siguientes puntos:

1. deja de llamar **campos** a las unidades mayores de organización;
2. fija que esas unidades deben llamarse **dimensiones**;
3. distingue claramente entre dimensión, campo y valor;
4. prohíbe seguir tratando la reorganización preliminar como si ya fuera un
   modelo base completo;
5. fija el principio de conservación de valores ya desarrollados;
6. y deja un placeholder explícito para insertar el reordenamiento completo de
   dimensiones, campos y valores heredados.

---

## 12. Fórmula final de esta versión de la migración

La migración debe entenderse, a partir de ahora, así:

> la arquitectura nueva ya no se formula como un conjunto de “campos mayores”
> vagamente definidos, sino como una organización por **dimensiones** nuevas,
> dentro de las cuales se redistribuyen los **campos** heredados de los modelos
> previos. La reconstrucción correcta del nuevo modelo exige conservar los
> espacios de valores, restricciones y desarrollos ya existentes cuando sigan
> siendo válidos, y completar desde cero únicamente lo que todavía no exista.
> El proceso de migración no está concluido hasta que cada dimensión nueva haya
> sido reconstruida con todos sus campos y con el nivel de completitud exigido
> por la teoría de construcción de modelos base.

---

## 13. Cierre operativo

Este documento debe tomarse como **punto de reinicio controlado** del trabajo de
migración.

No ofrece todavía el modelo completo, pero sí fija con claridad:

- el objetivo de la migración;
- la restricción fuerte del caso de uso;
- la gramática correcta del modelo;
- la nueva organización por dimensiones;
- los principios de conservación y reconstrucción;
- y el lugar donde debe insertarse el reordenamiento completo de dimensiones,
  campos y valores heredados.

A partir de aquí, la migración puede continuar con mucha menos fricción y con
mucho menor riesgo de pérdida estructural.
