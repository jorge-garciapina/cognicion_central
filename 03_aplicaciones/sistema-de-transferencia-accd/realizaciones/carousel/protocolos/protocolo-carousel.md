https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a036783-4804-83e8-8640-36044504184c

# Protocolo Carousel — Adaptador Codominial Modular Detallado

**id_documental:** `protocolo-carousel-adaptador-codominial-modular-detallado`  
**tipo:** `protocolo_de_transformacion_codominial`  
**realizacion:** `carousel`  
**salida:** `manifestacion_codominial_carousel`  
**estado:** modelo detallado listo para uso como guía de construcción

---

## 1. Principio rector

Este protocolo existe para que un chat pueda recibir una entrada modular compuesta por un archivo `ART_` de ensamblaje y un archivo de `construccion_conceptual`, construir internamente una `instancia_contextual_modular_efectiva` y producir una `manifestacion_codominial_carousel` completa, sin depender de suposiciones no declaradas.

La regla central es:

```txt
El ensamblaje configura la forma operativa.
La construcción conceptual aporta el contenido temático-relacional.
El protocolo construye la manifestación codominial carousel.
```

Ningún valor seleccionado en el ensamblaje puede quedar sin efecto. Todo valor activo debe aparecer en al menos uno de estos lugares:

1. cabecera resultante;
2. capa macroestructural;
3. decisión local de lámina;
4. continuidad interlaminar;
5. justificación dimensional.

## 2. Contrato de ejecución

### 2.1 Entradas obligatorias

El protocolo requiere exactamente dos entradas materiales obligatorias:

```txt
1. ART_ensamblaje_carousel
2. construccion_conceptual
```

El archivo cuyo nombre comienza con `ART_` se interpreta como **ensamblaje**. Contiene la selección concreta de valores regionalmente habilitados.

El archivo `construccion_conceptual` se interpreta como **puerto temático intercambiable**. Contiene las ideas activas que serán distribuidas en láminas.

### 2.2 Entradas opcionales

- `salida-esperada.md`: referencia de auditoría. No sustituye al protocolo.
- `instancia-regional-carousel.md`: referencia de validación. No sustituye al ensamblaje.

### 2.3 Construcción interna obligatoria

El protocolo debe construir internamente esta entidad de trabajo:

```yaml
instancia_contextual_modular_efectiva:
  fuente_ensamblaje: ART_...
  fuente_construccion_conceptual: construccion_conceptual
  valores_seleccionados:
    dimension_identidad_operativa_de_la_realizacion: {}
    dimension_orientacion_funcional_pragmatica: {}
    dimension_escala_temporal_y_resolucion_realizativa: {}
    dimension_dinamica_atencional_y_procesual: {}
    dimension_acoplamiento_receptoral: {}
    dimension_construccion_del_caso: {}
    dimension_comparecencia_performativa: {}
    dimension_marco_de_materializacion: {}
    dimension_composicion_segmental_de_la_salida: {}
    dimension_recursos_complementarios_de_manifestacion: {}
  construccion_conceptual:
    coleccion_de_ideas_activas: []
```

Esta entidad interna no es un archivo obligatorio. Es la vista lógica que el chat debe construir antes de escribir la manifestación.

### 2.4 Política de no suposición

El protocolo no debe inventar valores. Si un campo obligatorio no aparece en el ensamblaje, debe registrar una incidencia de validación. Sólo se permite continuar si el campo tiene un valor regionalmente fijado o si el usuario pidió explícitamente una salida parcial.

Regla operativa:

```txt
campo_obligatorio_ausente
  → no inferir
  → no reemplazar por gusto editorial
  → registrar incidencia
  → detener estrictamente y reportar error
```

---

## 3. Modelo interno de salida codominial

La salida producida debe ajustarse al siguiente modelo. Este modelo se incorpora al protocolo, por lo que `salida-esperada.md` deja de ser una dependencia obligatoria de ejecución.

```yaml
manifestacion_codominial_carousel:
  cabecera_identidad_general_de_la_pieza:
    identificacion_general:
      id_de_manifestacion:
      clase_de_materializacion:
      plataforma:
      aplicacion_de_plataforma:
      cantidad_de_laminas:

    identidad_operativa_resultante:
      formulacion_canonica:
      nivel_de_especificidad:
      prioridad_de_intencion:

    orientacion_funcional_resultante:
      funcion_dominante:
      efecto_buscado:
      accion_esperada:
      configuracion_discursiva:

    escala_temporal_y_resolucion_resultante:
      alcance_de_realizacion:
      horizonte_temporal:
      regimen_de_resolucion_buscada:

    acoplamiento_receptoral_resultante:
      publico_objetivo_inmediato:
      adecuacion_lexico_formulativa:
        registro_predominante:
        densidad_terminologica:
        grado_de_abstraccion:
        accesibilidad_lexica:
        variacion_lexica:

    dinamica_atencional_y_procesual_resultante:
      estado_atencional:
      regimen_de_activacion_atencional:
      dinamica_procesual:
        explicitud:
        continuidad:
        friccion_interpretativa:
        compresion:
        recapitulacion:

    construccion_del_caso_resultante:
      construccion_conceptual:
        coleccion_de_ideas_activas:
          ideas_activas:
            - idea_id:
              formulacion_de_la_idea:
              rol_conceptual:
              peso_relativo:
              modo_de_presencia:
              relaciones_con_otras_ideas:
        ideas_nucleares_activadas_globalmente:
        ideas_complementarias_activadas_globalmente:
        ideas_de_puente_activadas_globalmente:
        ideas_contrastivas_activadas_globalmente:
        ideas_derivadas_activadas_globalmente:
        relaciones_entre_ideas_activadas_globalmente:
      configuracion_narrativa:

    comparecencia_visual_editorial_resultante:
      rama_visual_editorial:
        tono_editorial:
        estilo_de_titulares:
        densidad_textual_visible:
        jerarquia_grafica:
        presencia_de_marca:
        regimen_de_iconografia:
        estilo_de_composicion_visual:

    marco_de_materializacion_resultante:
      clase_de_materializacion:
      plataforma:
      aplicacion_de_plataforma:

  capa_macroestructural:
    arquitectura_global:
      cantidad_de_laminas:
      arquitectura_macro:
      componentes_macroestructurales_activados:
      segmentacion_interna:
      unidad_de_segmento:
      cantidad_total_de_laminas:
      funcion_global_de_la_secuencia:
      progresion_interlaminar:
      relacion_portada_desarrollo_cierre:

    recursos_complementarios_globales:
      regimen_general_de_texto_visible:
      regimen_general_de_imagen_o_estructura_visual:
      regimen_general_de_video_generado:
      regimen_general_de_audio_generado:
      funcion_predominante_de_los_recursos_complementarios:
      grado_de_dependencia_de_recursos_complementarios:
      criterio_de_coherencia_visual_textual:
      regimen_de_distribucion_de_recursos_por_lamina:

  capa_de_laminas:
    laminas:
      - lamina_id:
        numero_de_lamina:
        tipo_de_lamina:
        posicion_en_arquitectura_macro:
        funcion_de_la_lamina:
        objetivo_local:

        relacion_con_el_caso:
          ideas_nucleares_activadas:
          ideas_complementarias_activadas:
          ideas_de_puente_activadas:
          ideas_contrastivas_activadas:
          ideas_derivadas_activadas:
          relaciones_entre_ideas_activadas:

        composicion_local:
          grado_de_carga_conceptual:
          grado_de_resolucion_local:
          densidad_textual_local:
          jerarquia_grafica_local:
          funcion_visual_local:
          dependencia_texto_imagen:

        capa_textual_visible:
          texto_visible:
            presencia:
            funcion:
            titular:
            subtitulo:
            cuerpo_textual:
            microcopy:
            CTA_local:
            notas_de_coherencia:

        capa_visual:
          composicion_visual:
            tipo_de_recurso_visual:
            descripcion_conceptual:
            estructura_visual:
            prompt_de_generacion:
            elementos_visuales_obligatorios:
            elementos_visuales_prohibidos:
            notas_de_coherencia:

        capa_editorial:
          comparecencia_visual_editorial_local:
            tono_editorial_local:
            estilo_de_titular_local:
            presencia_de_marca_local:
            regimen_de_iconografia_local:
            estilo_de_composicion_visual_local:

        capa_de_continuidad_interlaminar:
          continuidad_interlaminar:
            continuidad_con_lamina_anterior:
            proyeccion_hacia_lamina_siguiente:
            continuidad_argumental:
            continuidad_atencional:
            continuidad_visual:
            funcion_del_deslizamiento:

        capa_de_justificacion_de_composicion:
          justificacion_de_composicion:
            justificaciones_dimensionales:
              dimension_identidad_operativa_de_la_realizacion:
              dimension_orientacion_funcional_pragmatica:
              dimension_escala_temporal_y_resolucion_realizativa:
              dimension_acoplamiento_receptoral:
              dimension_dinamica_atencional_y_procesual:
              dimension_construccion_del_caso:
              dimension_comparecencia_performativa:
              dimension_marco_de_materializacion:
              dimension_composicion_segmental_de_la_salida:
              dimension_recursos_complementarios_de_manifestacion:
```

---

## 4. Procedimiento ejecutivo completo

### Paso 1. Identificar entradas

Localizar el archivo `ART_` y el archivo `construccion_conceptual`. Si hay más de un `ART_`, usar el indicado explícitamente por el usuario; si no hay indicación, registrar ambigüedad.

### Paso 2. Validar región

Comprobar que los valores del `ART_` pertenecen a la instancia regional de `carousel/`. No aceptar valores que no pertenezcan al dominio de carousel

### Paso 3. Construir instancia contextual modular efectiva

Unir internamente los valores seleccionados del ensamblaje con la colección de ideas activas de `construccion_conceptual`.

### Paso 4. Extraer valores dimensionales

Leer los campos directos e internos de las 10 dimensiones habilitadas.

### Paso 5. Extraer ideas activas

Leer cada idea con `idea_id`, `formulacion_de_la_idea`, `rol_conceptual`, `peso_relativo`, `modo_de_presencia` y `relaciones_con_otras_ideas`.

### Paso 6. Clasificar ideas

Clasificar ideas como nucleares, complementarias, de puente, contrastivas o derivadas. Si el archivo ya lo declara, respetar esa clasificación.

### Paso 7. Activar reglas por valor

Para cada valor seleccionado, ejecutar la ficha correspondiente de la Biblioteca Integral de Valores de este documento.

### Paso 8. Determinar macroestructura

Construir `arquitectura_global` desde `arquitectura_macro`, `cantidad_de_laminas`, `configuracion_narrativa`, `funcion_dominante` y `regimen_de_resolucion_buscada`.

### Paso 9. Distribuir ideas por lámina

Asignar ideas a láminas según peso, rol conceptual y arquitectura macro. Ninguna idea nuclear puede quedar sin uso o sin justificación explícita.

### Paso 10. Construir láminas

Para cada lámina, construir identidad local, relación con el caso, composición local, texto visible, visualidad, editorialidad, continuidad y justificación.

### Paso 11. Validar cobertura

Verificar que cada valor activo tenga efecto y que cada campo requerido del modelo de salida esté completo.

### Paso 12. Entregar manifestación

Emitir `manifestacion_codominial_carousel` completa en YAML o en el formato pedido por el usuario.

---

## 5. Reglas de extracción del ensamblaje `ART_`

El extractor debe leer todas las dimensiones habilitadas. Esta sección reemplaza la tabla original por una estructura jerárquica optimizada para lectura en VSCode.

Formato de lectura:

```txt
dimension
  campo o campo interno
    número de valores habilitados
    campos de salida afectados
```

Un campo interno se escribe como `campo.subcampo`.

---

### 5.1. `dimension_acoplamiento_receptoral`

#### 5.1.1. `adecuacion_lexico_formulativa.accesibilidad_lexica`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.accesibilidad_lexica`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
  3. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`

#### 5.1.2. `adecuacion_lexico_formulativa.densidad_terminologica`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.densidad_terminologica`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
  3. `capa_de_laminas.laminas.composicion_local.densidad_textual_local`

#### 5.1.3. `adecuacion_lexico_formulativa.grado_de_abstraccion`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.grado_de_abstraccion`
  2. `capa_de_laminas.laminas.capa_visual.composicion_visual.descripcion_conceptual`
  3. `capa_de_laminas.laminas.relacion_con_el_caso`

#### 5.1.4. `adecuacion_lexico_formulativa.registro_predominante`

- **Número de valores habilitados:** `6`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`
  3. `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`

#### 5.1.5. `adecuacion_lexico_formulativa.variacion_lexica`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.variacion_lexica`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

#### 5.1.6. `publico_objetivo_inmediato`

- **Número de valores habilitados:** `8`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
  3. `capa_de_laminas.laminas.composicion_local.densidad_textual_local`

---

### 5.2. `dimension_comparecencia_performativa`

#### 5.2.1. `rama_visual_editorial.densidad_textual_visible`

- **Número de valores habilitados:** `4`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible`
  2. `capa_de_laminas.laminas.composicion_local.densidad_textual_local`
  3. `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`

#### 5.2.2. `rama_visual_editorial.estilo_de_composicion_visual`

- **Número de valores habilitados:** `6`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`
  2. `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`
  3. `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`

#### 5.2.3. `rama_visual_editorial.estilo_de_titulares`

- **Número de valores habilitados:** `7`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`
  3. `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`

#### 5.2.4. `rama_visual_editorial.jerarquia_grafica`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`
  2. `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`
  3. `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`

#### 5.2.5. `rama_visual_editorial.presencia_de_marca`

- **Número de valores habilitados:** `4`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca`
  2. `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local`
  3. `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`

#### 5.2.6. `rama_visual_editorial.regimen_de_iconografia`

- **Número de valores habilitados:** `4`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia`
  2. `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local`
  3. `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`

#### 5.2.7. `rama_visual_editorial.tono_editorial`

- **Número de valores habilitados:** `6`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`
  2. `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`
  3. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`

---

### 5.3. `dimension_composicion_segmental_de_la_salida`

#### 5.3.1. `arquitectura_macro`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `capa_macroestructural.arquitectura_global.arquitectura_macro`
  2. `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`
  3. `capa_de_laminas.laminas.posicion_en_arquitectura_macro`

#### 5.3.2. `cantidad_de_laminas`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas`
  2. `capa_macroestructural.arquitectura_global.cantidad_de_laminas`
  3. `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`
  4. `capa_de_laminas.laminas.numero_de_lamina`

---

### 5.4. `dimension_construccion_del_caso`

#### 5.4.1. `configuracion_narrativa`

- **Número de valores habilitados:** `6`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`
  2. `capa_macroestructural.arquitectura_global.progresion_interlaminar`
  3. `capa_de_laminas.laminas.posicion_en_arquitectura_macro`

#### 5.4.2. `construccion_conceptual`

- **Número de valores habilitados:** `1`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual`
  2. `capa_de_laminas.laminas.relacion_con_el_caso`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

---

### 5.5. `dimension_dinamica_atencional_y_procesual`

#### 5.5.1. `dinamica_procesual.compresion`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.compresion`
  2. `capa_de_laminas.laminas.composicion_local.densidad_textual_local`
  3. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`

#### 5.5.2. `dinamica_procesual.continuidad`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.continuidad`
  2. `capa_macroestructural.arquitectura_global.progresion_interlaminar`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

#### 5.5.3. `dinamica_procesual.explicitud`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.explicitud`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`
  3. `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`

#### 5.5.4. `dinamica_procesual.friccion_interpretativa`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.friccion_interpretativa`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`
  3. `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`

#### 5.5.5. `dinamica_procesual.recapitulacion`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.recapitulacion`
  2. `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`
  3. `capa_de_laminas.laminas.funcion_de_la_lamina`

#### 5.5.6. `estado_atencional`

- **Número de valores habilitados:** `7`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`
  2. `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`

#### 5.5.7. `regimen_de_activacion_atencional`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`
  2. `capa_de_laminas.laminas.tipo_de_lamina`
  3. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`

---

### 5.6. `dimension_escala_temporal_y_resolucion_realizativa`

#### 5.6.1. `alcance_de_realizacion`

- **Número de valores habilitados:** `9`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`
  2. `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`

#### 5.6.2. `horizonte_temporal`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`
  2. `capa_macroestructural.arquitectura_global.progresion_interlaminar`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

#### 5.6.3. `regimen_de_resolucion_buscada`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`
  2. `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`

---

### 5.7. `dimension_identidad_operativa_de_la_realizacion`

#### 5.7.1. `formulacion_canonica`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.formulacion_canonica`
  2. `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`
  3. `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`

#### 5.7.2. `nivel_de_especificidad`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.nivel_de_especificidad`
  2. `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`
  3. `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`

#### 5.7.3. `prioridad_de_intencion`

- **Número de valores habilitados:** `4`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion`
  2. `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`
  3. `capa_de_laminas.laminas.funcion_de_la_lamina`

---

### 5.8. `dimension_marco_de_materializacion`

#### 5.8.1. `aplicacion_de_plataforma`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`
  2. `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`
  3. `capa_macroestructural.arquitectura_global.segmentacion_interna`

#### 5.8.2. `clase_de_materializacion`

- **Número de valores habilitados:** `1`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identificacion_general.clase_de_materializacion`
  2. `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.clase_de_materializacion`
  3. `capa_macroestructural.arquitectura_global.unidad_de_segmento`

#### 5.8.3. `plataforma`

- **Número de valores habilitados:** `5`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`
  2. `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`
  3. `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`

---

### 5.9. `dimension_orientacion_funcional_pragmatica`

#### 5.9.1. `accion_esperada`

- **Número de valores habilitados:** `7`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`
  3. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`

#### 5.9.2. `configuracion_discursiva`

- **Número de valores habilitados:** `7`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
  3. `capa_macroestructural.arquitectura_global.progresion_interlaminar`

#### 5.9.3. `efecto_buscado`

- **Número de valores habilitados:** `8`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`
  2. `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`
  3. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`

#### 5.9.4. `funcion_dominante`

- **Número de valores habilitados:** `9`
- **Campos de salida afectados:**
  1. `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`
  2. `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`
  3. `capa_de_laminas.laminas.funcion_de_la_lamina`
  4. `capa_de_laminas.laminas.objetivo_local`

---

### 5.10. `dimension_recursos_complementarios_de_manifestacion`

#### 5.10.1. `funcion_predominante_de_los_recursos_complementarios`

- **Número de valores habilitados:** `8`
- **Campos de salida afectados:**
  1. `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`
  2. `capa_de_laminas.laminas.composicion_local.funcion_visual_local`
  3. `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`

#### 5.10.2. `grado_de_dependencia_de_recursos_complementarios`

- **Número de valores habilitados:** `4`
- **Campos de salida afectados:**
  1. `capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios`
  2. `capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen`
  3. `capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina`

#### 5.10.3. `uso_de_audio_generado`

- **Número de valores habilitados:** `1`
- **Campos de salida afectados:**
  1. `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_audio_generado`
  2. `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_prohibidos`

#### 5.10.4. `uso_de_imagen_generada`

- **Número de valores habilitados:** `18`
- **Campos de salida afectados:**
  1. `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`
  2. `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`
  3. `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`

#### 5.10.5. `uso_de_texto_en_pantalla`

- **Número de valores habilitados:** `3`
- **Campos de salida afectados:**
  1. `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`
  2. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.presencia`
  3. `capa_de_laminas.laminas.capa_textual_visible.texto_visible.funcion`

#### 5.10.6. `uso_de_video_generado`

- **Número de valores habilitados:** `1`
- **Campos de salida afectados:**
  1. `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_video_generado`
  2. `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_prohibidos`

---

### 5.X. Checklist de extracción

Al terminar de leer el `ART_`, el protocolo debe verificar lo siguiente:

1. Cada dimensión listada en esta sección fue buscada en el ensamblaje.
2. Cada campo directo o interno fue leído cuando aparece en el ensamblaje.
3. Cada valor extraído pertenece al conjunto de valores habilitados por la instancia regional de `carousel/`.
4. Cada valor extraído queda vinculado al menos con uno de los campos de salida afectados declarados aquí.
5. Ningún campo de salida afectado debe llenarse por intuición si la ruta de entrada correspondiente está ausente.
6. Si un campo obligatorio está ausente, debe registrarse una incidencia de validación antes de construir la manifestación.

# 5.B. Índice operativo inverso `salida → entrada`

**id_documental:** `indice-operativo-inverso-salida-entrada-protocolo-carousel`  
**tipo:** `modulo_insertable_de_protocolo`  
**realizacion:** `carousel`  
**ubicacion_sugerida:** después de `## 5. Reglas de extracción del ensamblaje ART_` y antes de `## 8. Recetas por campo de salida`  
**funcion:** permitir que el chat, al estar construyendo un campo específico de la `manifestacion_codominial_carousel`, sepa de forma inmediata qué campos de entrada debe consultar.

---

## 5.B.0. Regla de lectura del índice

Este índice opera en dirección inversa al mapa `entrada → salida`.

```txt
campo_de_salida
  → campos_de_entrada_que_deben_consultarse
```

No sustituye las recetas por campo de salida. Su función es acelerar la ejecución: cuando el chat está situado en un campo de la manifestación, este índice le indica qué valores del ensamblaje y qué partes de la construcción conceptual debe recuperar antes de escribir el campo.

Regla obligatoria:

```txt
Antes de construir cualquier campo de salida,
el chat debe consultar este índice,
recuperar los campos de entrada indicados,
y luego aplicar la receta correspondiente del protocolo.
```

Este índice no autoriza a inventar valores. Si un campo de entrada requerido no está presente en el ensamblaje y no tiene valor regionalmente fijado, debe aplicarse la política de no suposición del protocolo.

---

## 5.B.1. Convención de claves

Cada campo de salida se describe con cuatro listas posibles:

```yaml
consultar_obligatoriamente:
  # campos fuente sin los cuales el campo de salida no debe construirse

consultar_para_modular:
  # campos fuente que ajustan intensidad, tono, densidad, orden, forma o distribución

consultar_para_restringir:
  # campos fuente que limitan lo permitido o bloquean opciones incompatibles

validar_con:
  # campos fuente usados para comprobar trazabilidad y coherencia
```

Cuando un campo sólo copia o normaliza un valor de entrada, `consultar_obligatoriamente` puede contener un único campo. Cuando un campo deriva una decisión composicional, debe consultar varias dimensiones.

---

## 5.B.2. Índice para `cabecera_identidad_general_de_la_pieza`

```yaml
indice_salida_a_entrada:
  cabecera_identidad_general_de_la_pieza.identificacion_general.id_de_manifestacion:
    consultar_obligatoriamente:
      - dimension_identidad_operativa_de_la_realizacion.formulacion_canonica
      - dimension_marco_de_materializacion.clase_de_materializacion
      - dimension_marco_de_materializacion.plataforma
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion
      - dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
    consultar_para_restringir:
      - dimension_marco_de_materializacion.clase_de_materializacion
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - instancia_regional_usada
      - realizacion_habilitada

  cabecera_identidad_general_de_la_pieza.identificacion_general.clase_de_materializacion:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.clase_de_materializacion
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    consultar_para_restringir:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
    validar_con:
      - dimension_marco_de_materializacion.aplicacion_de_plataforma

  cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.plataforma
    consultar_para_modular:
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
    consultar_para_restringir:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    validar_con:
      - dimension_marco_de_materializacion.clase_de_materializacion

  cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    consultar_para_modular:
      - dimension_marco_de_materializacion.plataforma
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    consultar_para_restringir:
      - dimension_marco_de_materializacion.clase_de_materializacion
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
    validar_con:
      - dimension_marco_de_materializacion.plataforma

  cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    consultar_para_restringir:
      - dimension_marco_de_materializacion.plataforma
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - capa_macroestructural.arquitectura_global.cantidad_total_de_laminas
```

---

## 5.B.3. Índice para resultados dimensionales de cabecera

```yaml
indice_salida_a_entrada:
  cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.formulacion_canonica:
    consultar_obligatoriamente:
      - dimension_identidad_operativa_de_la_realizacion.formulacion_canonica
    consultar_para_modular:
      - dimension_marco_de_materializacion.clase_de_materializacion
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia

  cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.nivel_de_especificidad:
    consultar_obligatoriamente:
      - dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad
    consultar_para_modular:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
    validar_con:
      - capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual

  cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion:
    consultar_obligatoriamente:
      - dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    validar_con:
      - capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados
      - capa_de_laminas.laminas.funcion_de_la_lamina

  cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_construccion_del_caso.configuracion_narrativa
    validar_con:
      - capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia
      - capa_de_laminas.laminas.funcion_de_la_lamina

  cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.estado_atencional
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
    validar_con:
      - capa_de_laminas.laminas.objetivo_local
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local

  cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    consultar_para_modular:
      - dimension_marco_de_materializacion.plataforma
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente

  cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica
      - dimension_construccion_del_caso.configuracion_narrativa
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual
```

```yaml
indice_salida_a_entrada:
  cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion:
    consultar_obligatoriamente:
      - dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre

  cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal:
    consultar_obligatoriamente:
      - dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    validar_con:
      - capa_macroestructural.arquitectura_global.progresion_interlaminar

  cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada:
    consultar_obligatoriamente:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    validar_con:
      - capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente

  cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
      - dimension_dinamica_atencional_y_procesual.estado_atencional
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual

  cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual

  cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.densidad_terminologica:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual

  cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.grado_de_abstraccion:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
    consultar_para_modular:
      - dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    validar_con:
      - capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual
      - capa_de_laminas.laminas.capa_visual.composicion_visual.descripcion_conceptual

  cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.accesibilidad_lexica:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.subtitulo
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual

  cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.variacion_lexica:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia
```

```yaml
indice_salida_a_entrada:
  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.estado_atencional
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
    validar_con:
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional

  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento

  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.explicitud:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual

  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.continuidad:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_macroestructural.arquitectura_global.progresion_interlaminar
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental

  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.friccion_interpretativa:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular

  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.compresion:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
    validar_con:
      - capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual

  cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.recapitulacion:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente
```

---

## 5.B.4. Índice para `construccion_del_caso_resultante`

```yaml
indice_salida_a_entrada:
  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].idea_id:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].idea_id
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].formulacion_de_la_idea:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].formulacion_de_la_idea
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].rol_conceptual:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].rol_conceptual
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_nucleares_activadas
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_complementarias_activadas
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_de_puente_activadas
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_contrastivas_activadas
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_derivadas_activadas

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].peso_relativo:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].peso_relativo
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
    validar_con:
      - capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual
      - capa_de_laminas.laminas.funcion_de_la_lamina

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].modo_de_presencia:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].modo_de_presencia
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible
      - capa_de_laminas.laminas.capa_visual

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].relaciones_con_otras_ideas:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].relaciones_con_otras_ideas
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    validar_con:
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_nucleares_activadas_globalmente:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[rol_conceptual=nuclear]
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_nucleares_activadas

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_complementarias_activadas_globalmente:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[rol_conceptual=complementaria]
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_complementarias_activadas

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_de_puente_activadas_globalmente:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[rol_conceptual=puente]
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_de_puente_activadas
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_contrastivas_activadas_globalmente:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[rol_conceptual=contrastiva]
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_contrastivas_activadas
      - capa_visual.composicion_visual.estructura_visual

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_derivadas_activadas_globalmente:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[rol_conceptual=derivada]
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.ideas_derivadas_activadas

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.relaciones_entre_ideas_activadas_globalmente:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].relaciones_con_otras_ideas
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_de_laminas.laminas.relacion_con_el_caso.relaciones_entre_ideas_activadas
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental

  cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.configuracion_narrativa
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    validar_con:
      - capa_macroestructural.arquitectura_global.progresion_interlaminar
      - capa_de_laminas.laminas.posicion_en_arquitectura_macro
```

---

## 5.B.5. Índice para comparecencia visual-editorial y marco de materialización

```yaml
indice_salida_a_entrada:
  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    validar_con:
      - capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local

  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular
      - capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local

  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
    validar_con:
      - capa_de_laminas.laminas.composicion_local.densidad_textual_local

  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
    validar_con:
      - capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local

  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
    consultar_para_modular:
      - dimension_marco_de_materializacion.plataforma
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local
      - capa_visual.composicion_visual.elementos_visuales_obligatorios
      - capa_visual.composicion_visual.elementos_visuales_prohibidos

  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    validar_con:
      - capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local
      - capa_visual.composicion_visual.elementos_visuales_obligatorios

  cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    validar_con:
      - capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local
      - capa_visual.composicion_visual.estructura_visual

  cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.clase_de_materializacion:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.clase_de_materializacion
    consultar_para_restringir:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
    validar_con:
      - cabecera_identidad_general_de_la_pieza.identificacion_general.clase_de_materializacion

  cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.plataforma
    consultar_para_modular:
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma

  cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    consultar_para_modular:
      - dimension_marco_de_materializacion.plataforma
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    validar_con:
      - cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma
```

---

## 5.B.6. Índice para `capa_macroestructural`

```yaml
indice_salida_a_entrada:
  capa_macroestructural.arquitectura_global.cantidad_de_laminas:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas

  capa_macroestructural.arquitectura_global.arquitectura_macro:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    validar_con:
      - capa_de_laminas.laminas.posicion_en_arquitectura_macro

  capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    consultar_para_modular:
      - dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion
      - dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    validar_con:
      - capa_de_laminas.laminas.tipo_de_lamina
      - capa_de_laminas.laminas.funcion_de_la_lamina

  capa_macroestructural.arquitectura_global.segmentacion_interna:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    consultar_para_modular:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
    validar_con:
      - capa_de_laminas.laminas.numero_de_lamina
      - capa_de_laminas.laminas.posicion_en_arquitectura_macro

  capa_macroestructural.arquitectura_global.unidad_de_segmento:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.clase_de_materializacion
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - capa_de_laminas.laminas.lamina_id

  capa_macroestructural.arquitectura_global.cantidad_total_de_laminas:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    consultar_para_modular:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - capa_de_laminas.laminas.numero_de_lamina

  capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    consultar_para_modular:
      - dimension_identidad_operativa_de_la_realizacion.formulacion_canonica
      - dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion
      - dimension_construccion_del_caso.configuracion_narrativa
    validar_con:
      - capa_de_laminas.laminas.objetivo_local

  capa_macroestructural.arquitectura_global.progresion_interlaminar:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    validar_con:
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental
      - capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento

  capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    validar_con:
      - capa_de_laminas.laminas.posicion_en_arquitectura_macro
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local
```

```yaml
indice_salida_a_entrada:
  capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.presencia

  capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    validar_con:
      - capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual

  capa_macroestructural.recursos_complementarios_globales.regimen_general_de_video_generado:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
    consultar_para_restringir:
      - dimension_marco_de_materializacion.clase_de_materializacion
    validar_con:
      - capa_visual.composicion_visual.elementos_visuales_prohibidos

  capa_macroestructural.recursos_complementarios_globales.regimen_general_de_audio_generado:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
    consultar_para_restringir:
      - dimension_marco_de_materializacion.clase_de_materializacion
    validar_con:
      - capa_visual.composicion_visual.elementos_visuales_prohibidos

  capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
    validar_con:
      - capa_de_laminas.laminas.composicion_local.funcion_visual_local
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.funcion

  capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
    validar_con:
      - capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen

  capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia
      - capa_de_laminas.laminas.capa_visual.composicion_visual.notas_de_coherencia

  capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
    validar_con:
      - capa_de_laminas.laminas.capa_textual_visible
      - capa_de_laminas.laminas.capa_visual
```

---

## 5.B.7. Índice para identificación y función local de láminas

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].lamina_id:
    consultar_obligatoriamente:
      - capa_macroestructural.arquitectura_global.cantidad_total_de_laminas
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    consultar_para_modular:
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    validar_con:
      - capa_de_laminas.laminas[].numero_de_lamina

  capa_de_laminas.laminas[].numero_de_lamina:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
      - capa_macroestructural.arquitectura_global.cantidad_total_de_laminas
    validar_con:
      - capa_de_laminas.laminas[].posicion_en_arquitectura_macro

  capa_de_laminas.laminas[].tipo_de_lamina:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].rol_conceptual
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    validar_con:
      - capa_de_laminas.laminas[].funcion_de_la_lamina

  capa_de_laminas.laminas[].posicion_en_arquitectura_macro:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_construccion_del_caso.configuracion_narrativa
    validar_con:
      - capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre

  capa_de_laminas.laminas[].funcion_de_la_lamina:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    validar_con:
      - capa_de_laminas.laminas[].objetivo_local
      - capa_de_laminas.laminas[].relacion_con_el_caso

  capa_de_laminas.laminas[].objetivo_local:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - capa_de_laminas.laminas[].funcion_de_la_lamina
      - ideas_activas_asignadas_a_la_lamina
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.CTA_local
      - capa_de_laminas.laminas[].composicion_local.grado_de_resolucion_local
```

---

## 5.B.8. Índice para `relacion_con_el_caso`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].relacion_con_el_caso.ideas_nucleares_activadas:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[rol_conceptual=nuclear]
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
    validar_con:
      - cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_nucleares_activadas_globalmente

  capa_de_laminas.laminas[].relacion_con_el_caso.ideas_complementarias_activadas:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[rol_conceptual=complementaria]
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
    validar_con:
      - cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_complementarias_activadas_globalmente

  capa_de_laminas.laminas[].relacion_con_el_caso.ideas_de_puente_activadas:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[rol_conceptual=puente]
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    validar_con:
      - cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_de_puente_activadas_globalmente
      - capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_argumental

  capa_de_laminas.laminas[].relacion_con_el_caso.ideas_contrastivas_activadas:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[rol_conceptual=contrastiva]
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    validar_con:
      - cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_contrastivas_activadas_globalmente
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.estructura_visual

  capa_de_laminas.laminas[].relacion_con_el_caso.ideas_derivadas_activadas:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[rol_conceptual=derivada]
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual.ideas_derivadas_activadas_globalmente

  capa_de_laminas.laminas[].relacion_con_el_caso.relaciones_entre_ideas_activadas:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[].relaciones_con_otras_ideas
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_argumental
```

---

## 5.B.9. Índice para `composicion_local`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].composicion_local.grado_de_carga_conceptual:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina[].peso_relativo
      - dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.cuerpo_textual
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.descripcion_conceptual

  capa_de_laminas.laminas[].composicion_local.grado_de_resolucion_local:
    consultar_obligatoriamente:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - capa_de_laminas.laminas[].posicion_en_arquitectura_macro
      - capa_de_laminas.laminas[].funcion_de_la_lamina
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    validar_con:
      - capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente

  capa_de_laminas.laminas[].composicion_local.densidad_textual_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.presencia
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.cuerpo_textual

  capa_de_laminas.laminas[].composicion_local.jerarquia_grafica_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    validar_con:
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.estructura_visual
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.titular

  capa_de_laminas.laminas[].composicion_local.funcion_visual_local:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
      - capa_de_laminas.laminas[].funcion_de_la_lamina
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    validar_con:
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.tipo_de_recurso_visual

  capa_de_laminas.laminas[].composicion_local.dependencia_texto_imagen:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.notas_de_coherencia
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.notas_de_coherencia
```

---

## 5.B.10. Índice para `capa_textual_visible`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.presencia:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
    consultar_para_restringir:
      - dimension_marco_de_materializacion.clase_de_materializacion
    validar_con:
      - capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.funcion:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - capa_de_laminas.laminas[].funcion_de_la_lamina
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.cuerpo_textual

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.titular:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
      - capa_de_laminas.laminas[].funcion_de_la_lamina
      - idea_principal_de_la_lamina
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
      - dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
    validar_con:
      - capa_de_laminas.laminas[].relacion_con_el_caso
      - capa_de_laminas.laminas[].capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.subtitulo:
    consultar_obligatoriamente:
      - capa_de_laminas.laminas[].composicion_local.densidad_textual_local
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
      - capa_de_laminas.laminas[].funcion_de_la_lamina
    consultar_para_modular:
      - idea_complementaria_o_puente_de_la_lamina
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.titular

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.cuerpo_textual:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
      - capa_de_laminas.laminas[].composicion_local.densidad_textual_local
      - ideas_activas_asignadas_a_la_lamina
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica
    validar_con:
      - capa_de_laminas.laminas[].relacion_con_el_caso
      - capa_de_laminas.laminas[].composicion_local.grado_de_carga_conceptual

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.microcopy:
    consultar_obligatoriamente:
      - capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.estado_atencional
      - dimension_marco_de_materializacion.plataforma
      - dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal
    validar_con:
      - capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.funcion_del_deslizamiento

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.CTA_local:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - capa_de_laminas.laminas[].objetivo_local
    consultar_para_modular:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_marco_de_materializacion.plataforma
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion
    validar_con:
      - capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente

  capa_de_laminas.laminas[].capa_textual_visible.texto_visible.notas_de_coherencia:
    consultar_obligatoriamente:
      - capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual
      - capa_de_laminas.laminas[].composicion_local.dependencia_texto_imagen
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa
      - dimension_comparecencia_performativa.rama_visual_editorial
      - dimension_recursos_complementarios_de_manifestacion
    validar_con:
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.notas_de_coherencia
```

---

## 5.B.11. Índice para `capa_visual`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].capa_visual.composicion_visual.tipo_de_recurso_visual:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
      - capa_de_laminas.laminas[].funcion_de_la_lamina
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    validar_con:
      - capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual

  capa_de_laminas.laminas[].capa_visual.composicion_visual.descripcion_conceptual:
    consultar_obligatoriamente:
      - ideas_activas_asignadas_a_la_lamina
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - capa_de_laminas.laminas[].funcion_de_la_lamina
    consultar_para_modular:
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
    validar_con:
      - capa_de_laminas.laminas[].relacion_con_el_caso

  capa_de_laminas.laminas[].capa_visual.composicion_visual.estructura_visual:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
      - ideas_activas_asignadas_a_la_lamina[].rol_conceptual
    validar_con:
      - capa_de_laminas.laminas[].composicion_local.jerarquia_grafica_local

  capa_de_laminas.laminas[].capa_visual.composicion_visual.prompt_de_generacion:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.descripcion_conceptual
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.estructura_visual
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
      - dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    consultar_para_restringir:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
      - dimension_marco_de_materializacion.clase_de_materializacion
    validar_con:
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.elementos_visuales_obligatorios
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.elementos_visuales_prohibidos

  capa_de_laminas.laminas[].capa_visual.composicion_visual.elementos_visuales_obligatorios:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - ideas_activas_asignadas_a_la_lamina
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
      - dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - capa_de_laminas.laminas[].tipo_de_lamina
    validar_con:
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.prompt_de_generacion

  capa_de_laminas.laminas[].capa_visual.composicion_visual.elementos_visuales_prohibidos:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.clase_de_materializacion
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
    consultar_para_restringir:
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
    validar_con:
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.prompt_de_generacion

  capa_de_laminas.laminas[].capa_visual.composicion_visual.notas_de_coherencia:
    consultar_obligatoriamente:
      - capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual
      - capa_de_laminas.laminas[].composicion_local.dependencia_texto_imagen
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion
      - dimension_comparecencia_performativa.rama_visual_editorial
      - ideas_activas_asignadas_a_la_lamina
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.notas_de_coherencia
```

---

## 5.B.12. Índice para `capa_editorial`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
    consultar_para_modular:
      - capa_de_laminas.laminas[].funcion_de_la_lamina
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
    validar_con:
      - cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial

  capa_de_laminas.laminas[].capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.titular
    consultar_para_modular:
      - capa_de_laminas.laminas[].funcion_de_la_lamina
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
    validar_con:
      - cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares

  capa_de_laminas.laminas[].capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
    consultar_para_modular:
      - dimension_marco_de_materializacion.plataforma
      - capa_de_laminas.laminas[].posicion_en_arquitectura_macro
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca

  capa_de_laminas.laminas[].capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia
    consultar_para_modular:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.tipo_de_recurso_visual
    validar_con:
      - cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia

  capa_de_laminas.laminas[].capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.estructura_visual
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
    validar_con:
      - cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual
```

---

## 5.B.13. Índice para `capa_de_continuidad_interlaminar`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar.continuidad_con_lamina_anterior:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - capa_de_laminas.laminas[].posicion_en_arquitectura_macro
    consultar_para_modular:
      - dimension_construccion_del_caso.configuracion_narrativa
      - relaciones_entre_ideas_activadas_en_lamina_anterior_y_actual
    validar_con:
      - capa_macroestructural.arquitectura_global.progresion_interlaminar

  capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar.proyeccion_hacia_lamina_siguiente:
    consultar_obligatoriamente:
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
      - capa_de_laminas.laminas[].posicion_en_arquitectura_macro
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.microcopy
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.CTA_local

  capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar.continuidad_argumental:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[].relaciones_con_otras_ideas
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    consultar_para_modular:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
    validar_con:
      - capa_de_laminas.laminas[].relacion_con_el_caso.relaciones_entre_ideas_activadas

  capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar.continuidad_atencional:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.estado_atencional
      - dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
    consultar_para_modular:
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
      - dimension_orientacion_funcional_pragmatica.accion_esperada
    validar_con:
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.microcopy
      - capa_de_laminas.laminas[].funcion_de_la_lamina

  capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar.continuidad_visual:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
    consultar_para_modular:
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
      - capa_de_laminas.laminas[].capa_visual.composicion_visual.estructura_visual
    validar_con:
      - capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual

  capa_de_laminas.laminas[].capa_de_continuidad_interlaminar.continuidad_interlaminar.funcion_del_deslizamiento:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional
    consultar_para_modular:
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    validar_con:
      - capa_macroestructural.arquitectura_global.progresion_interlaminar
      - capa_de_laminas.laminas[].capa_textual_visible.texto_visible.microcopy
```

---

## 5.B.14. Índice para `capa_de_justificacion_de_composicion`

```yaml
indice_salida_a_entrada:
  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion:
    consultar_obligatoriamente:
      - dimension_identidad_operativa_de_la_realizacion.formulacion_canonica
      - dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad
      - dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion
    validar_con:
      - decisiones_locales_afectadas_por_identidad_operativa

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_orientacion_funcional_pragmatica:
    consultar_obligatoriamente:
      - dimension_orientacion_funcional_pragmatica.funcion_dominante
      - dimension_orientacion_funcional_pragmatica.efecto_buscado
      - dimension_orientacion_funcional_pragmatica.accion_esperada
      - dimension_orientacion_funcional_pragmatica.configuracion_discursiva
    validar_con:
      - decisiones_locales_afectadas_por_orientacion_funcional

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_escala_temporal_y_resolucion_realizativa:
    consultar_obligatoriamente:
      - dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion
      - dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal
      - dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada
    validar_con:
      - decisiones_locales_afectadas_por_escala_y_resolucion

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_acoplamiento_receptoral:
    consultar_obligatoriamente:
      - dimension_acoplamiento_receptoral.publico_objetivo_inmediato
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica
      - dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica
    validar_con:
      - decisiones_locales_afectadas_por_acoplamiento_receptoral

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_dinamica_atencional_y_procesual:
    consultar_obligatoriamente:
      - dimension_dinamica_atencional_y_procesual.estado_atencional
      - dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion
      - dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion
    validar_con:
      - decisiones_locales_afectadas_por_dinamica_atencional_y_procesual

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_construccion_del_caso:
    consultar_obligatoriamente:
      - dimension_construccion_del_caso.configuracion_narrativa
      - dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas
    validar_con:
      - ideas_activas_asignadas_a_la_lamina
      - relaciones_entre_ideas_activadas_en_la_lamina

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_comparecencia_performativa:
    consultar_obligatoriamente:
      - dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares
      - dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible
      - dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica
      - dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca
      - dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia
      - dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual
    validar_con:
      - decisiones_locales_afectadas_por_comparecencia_visual_editorial

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_marco_de_materializacion:
    consultar_obligatoriamente:
      - dimension_marco_de_materializacion.clase_de_materializacion
      - dimension_marco_de_materializacion.plataforma
      - dimension_marco_de_materializacion.aplicacion_de_plataforma
    validar_con:
      - decisiones_locales_afectadas_por_marco_de_materializacion

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_composicion_segmental_de_la_salida:
    consultar_obligatoriamente:
      - dimension_composicion_segmental_de_la_salida.arquitectura_macro
      - dimension_composicion_segmental_de_la_salida.cantidad_de_laminas
    validar_con:
      - decisiones_locales_afectadas_por_composicion_segmental

  capa_de_laminas.laminas[].capa_de_justificacion_de_composicion.justificacion_de_composicion.justificaciones_dimensionales.dimension_recursos_complementarios_de_manifestacion:
    consultar_obligatoriamente:
      - dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla
      - dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada
      - dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado
      - dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado
      - dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios
      - dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios
    validar_con:
      - decisiones_locales_afectadas_por_recursos_complementarios
```

---

## 5.B.15. Regla de cierre del índice inverso

Al terminar la construcción de cada campo de salida, el chat debe hacer esta verificación local:

```txt
1. ¿Consulté todos los campos obligatorios indicados por el índice?
2. ¿Apliqué la receta correspondiente del protocolo?
3. ¿La decisión final puede rastrearse hacia al menos un valor activo de la instancia contextual?
4. ¿La decisión no contradice restricciones de materialización, plataforma, cantidad de láminas o no audiovisualidad?
5. ¿El campo resultante contribuye a cabecera, macroestructura, lámina, continuidad o justificación?
```

Si alguna respuesta es negativa, el campo no debe considerarse terminado.

---

## 6. Reglas de extracción de `construccion_conceptual`

El archivo de construcción conceptual debe transformarse en una colección de ideas activas. La forma mínima requerida es:

```yaml
construccion_conceptual:
  coleccion_de_ideas_activas:
    ideas_activas:
      - idea_id:
        formulacion_de_la_idea:
        rol_conceptual:
        peso_relativo:
        modo_de_presencia:
        relaciones_con_otras_ideas:
```

Reglas obligatorias:

- Una idea con `rol_conceptual: nuclear` debe aparecer en portada, tesis, lámina central o cierre.
- Una idea complementaria debe servir como explicación, ejemplo, soporte, matiz o ampliación.
- Una idea de puente debe convertirse en transición interlaminar.
- Una idea contrastiva debe activar contraste textual, visual o argumental.
- Una idea derivada debe colocarse después de la idea de la que depende.
- Una relación entre ideas debe aparecer en `relaciones_entre_ideas_activadas` y en `continuidad_argumental`.

---

## 7. Reglas macroestructurales de carousel

### 7.1 Unidad mínima

La unidad mínima de composición es la **lámina**. No se debe construir como escena, toma, plano, voz en off ni continuidad audiovisual temporal.

### 7.2 Cantidad de láminas

La cantidad de láminas se decide desde el valor seleccionado en `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`:

- `2`: exactamente dos láminas; estructura mínima de tensión/resolución, problema/respuesta o antes/después.
- `3_a_5`: entre tres y cinco láminas; usar el número mínimo que cubra ideas nucleares y relaciones principales.
- `6_a_8`: entre seis y ocho láminas; usar desarrollo por capas, pasos, contraste o método.

### 7.3 Funciones locales obligatorias

Toda lámina debe declarar:

```yaml
tipo_de_lamina: portada | desarrollo | transición | contraste | método | síntesis | cierre | CTA
posicion_en_arquitectura_macro: inicio | desarrollo | bisagra | cierre
funcion_de_la_lamina: ...
objetivo_local: ...
```

### 7.4 Distribución mínima

- La primera lámina debe activar la lectura.
- Cada lámina intermedia debe añadir, contrastar, explicar, ejemplificar o transicionar.
- La última lámina debe cerrar, resolver, recapitular, activar o proyectar continuidad según el régimen de resolución y la acción esperada.

---

## 8. Recetas atómicas por campo de salida

Esta sección sustituye la versión anterior de `## 8. Recetas por campo de salida`.

La versión anterior operaba por bloques. Esta versión opera por **campos finos de salida** para que el protocolo pueda ser ejecutado por un chat sin depender de inferencias globales. Cada receta indica qué debe construirse, qué valores de la instancia contextual debe consultar, qué forma debe adoptar el campo, qué interacciones debe resolver y cómo debe validarse.

Regla general:

```txt
Para cada campo de salida:
  1. identificar su función;
  2. consultar fuentes regionales activas;
  3. aplicar reglas por valor desde la Biblioteca Integral de Valores Regionales;
  4. resolver interacciones entre valores;
  5. producir el campo;
  6. validar que el campo refleja decisiones de la instancia contextual.
```

Ninguna receta de esta sección sustituye a la Biblioteca Integral de Valores Regionales. Las recetas indican **dónde y cómo construir** cada campo; la biblioteca de valores indica **qué operación introduce cada valor activo**.

---

# 8.0. Convención interna de las recetas

Cada receta usa esta estructura:

```txt
Campo de salida:
  ruta exacta dentro de manifestacion_codominial_carousel

Función:
  qué representa el campo dentro de la salida

Fuentes obligatorias:
  valores de la instancia contextual que deben consultarse

Regla de construcción:
  cómo se debe llenar el campo

Interacciones críticas:
  combinaciones de valores que modifican la decisión

Validación local:
  condición mínima para considerar correcto el campo

Errores a evitar:
  formas incorrectas de llenar el campo
```

Cuando una receta mencione `ideas activas`, debe consultar la colección de ideas derivada de `construccion_conceptual`, no inventar contenido nuevo.

Cuando una receta mencione `valores activos`, debe consultar el ensamblaje `ART_`, no escoger valores por preferencia editorial.

Cuando una receta mencione `lámina`, debe operar sobre cada elemento de:

```yaml
capa_de_laminas:
  laminas:
    - ...
```

---

# 8.1. Cabecera — identificación general

## 8.1.1. `cabecera_identidad_general_de_la_pieza.identificacion_general.id_de_manifestacion`

**Función:** identificar de forma única la manifestación construida.

**Fuentes obligatorias:**

- `dimension_identidad_operativa_de_la_realizacion.formulacion_canonica`
- `dimension_marco_de_materializacion.clase_de_materializacion`
- `dimension_marco_de_materializacion.plataforma`
- `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`

**Regla de construcción:** construir un identificador normalizado, legible y estable. Debe combinar el tipo de realización, la plataforma o condición multiplataforma, la aplicación de plataforma, el rango de láminas y una síntesis de la formulación canónica.

Ejemplo de forma:

```txt
carousel-{plataforma}-{aplicacion}-{cantidad_laminas}-{formulacion_normalizada}
```

**Interacciones críticas:**

- Si `plataforma = multiplataforma`, el id no debe fijar una sola plataforma.
- Si `aplicacion_de_plataforma = aplicacion_pendiente_de_especificacion`, el id debe declarar esa indefinición.
- Si `cantidad_de_laminas = 3_a_5` o `6_a_8`, el id debe conservar el rango y no inventar una cantidad exacta si todavía no fue determinada por la macroestructura.

**Validación local:** el identificador debe permitir rastrear la manifestación hacia `carousel`, clase laminar, plataforma/aplicación, cantidad de láminas y formulación canónica.

**Errores a evitar:** usar títulos comerciales libres, omitir plataforma, omitir cantidad de láminas, convertir el id en frase extensa o inventar una plataforma no habilitada.

---

## 8.1.2. `cabecera_identidad_general_de_la_pieza.identificacion_general.clase_de_materializacion`

**Función:** declarar la clase material de la realización.

**Fuentes obligatorias:**

- `dimension_marco_de_materializacion.clase_de_materializacion`

**Regla de construcción:** copiar el valor regional fijado. Para carousel debe ser `secuencia_laminar_visual`.

**Interacciones críticas:**

- Debe restringir todo el resto de la salida: no se puede construir como guion audiovisual, hilo textual puro o publicación estática única.
- Debe gobernar la interpretación de `cantidad_de_laminas`, `arquitectura_macro`, `uso_de_texto_en_pantalla` y `uso_de_imagen_generada`.

**Validación local:** el campo debe contener `secuencia_laminar_visual`.

**Errores a evitar:** reemplazarlo por `carousel`, `post`, `video`, `slide_deck` o cualquier etiqueta no regional.

---

## 8.1.3. `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`

**Función:** declarar el entorno principal de publicación o adaptación.

**Fuentes obligatorias:**

- `dimension_marco_de_materializacion.plataforma`
- `dimension_marco_de_materializacion.aplicacion_de_plataforma`

**Regla de construcción:** copiar o normalizar el valor activo: `instagram`, `tiktok`, `linkedin`, `multiplataforma` o `plataforma_pendiente_de_especificacion`.

**Interacciones críticas:**

- Si la plataforma es `instagram`, la aplicación esperada debe ser compatible con `instagram_carousel_post`.
- Si la plataforma es `tiktok`, la aplicación esperada debe ser compatible con `tiktok_photo_mode`.
- Si la plataforma es `linkedin`, la aplicación esperada debe ser compatible con `linkedin_document_post`.
- Si la plataforma es `multiplataforma`, la salida debe evitar rasgos exclusivos de una sola plataforma salvo que se declaren adaptaciones.

**Validación local:** plataforma y aplicación de plataforma no deben contradecirse.

**Errores a evitar:** convertir la plataforma en realización separada, crear subregiones por plataforma o usar requisitos técnicos externos no declarados por la instancia contextual.

---

## 8.1.4. `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`

**Función:** declarar la forma concreta en la que la plataforma implementa la secuencia laminar.

**Fuentes obligatorias:**

- `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- `dimension_marco_de_materializacion.plataforma`
- `dimension_marco_de_materializacion.clase_de_materializacion`

**Regla de construcción:** copiar el valor activo y usarlo como restricción material para las láminas. Los valores habilitados son: `instagram_carousel_post`, `tiktok_photo_mode`, `linkedin_document_post`, `carousel_multiplataforma` o `aplicacion_pendiente_de_especificacion`.

**Interacciones críticas:**

- La aplicación debe mantener la clase `secuencia_laminar_visual`.
- Si la aplicación está pendiente, las recetas visuales y textuales deben mantenerse genéricas y transferibles.
- Si la aplicación es multiplataforma, no fijar medidas, gestos, límites o convenciones exclusivas de una plataforma específica.

**Validación local:** el campo debe ser compatible con plataforma y clase de materialización.

**Errores a evitar:** inferir una aplicación no declarada, convertir `tiktok_photo_mode` en video o convertir `linkedin_document_post` en documento largo no laminar.

---

## 8.1.5. `cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas`

**Función:** declarar el rango o cantidad operativa de láminas que gobernará la composición.

**Fuentes obligatorias:**

- `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- `dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas`
- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion`

**Regla de construcción:** copiar el valor regional activo (`2`, `3_a_5`, `6_a_8`) y, cuando la salida requiera una cantidad exacta, derivarla dentro del rango usando arquitectura macro, cantidad de ideas nucleares y nivel de compresión.

**Interacciones críticas:**

- `2` exige condensación extrema: apertura/cierre o contraste/resolución mínima.
- `3_a_5` permite una progresión breve: apertura, desarrollo y cierre.
- `6_a_8` permite distribución más fina: portada, desarrollo por bloques, transición, recapitulación y cierre.
- Si `compresion = alta`, reducir desarrollo por lámina y favorecer síntesis.
- Si `compresion = baja`, permitir mayor despliegue dentro del rango permitido.

**Validación local:** el número de láminas generadas en `capa_de_laminas.laminas` debe coincidir con la cantidad o rango declarado.

**Errores a evitar:** producir más láminas que el rango, usar una sola lámina, ignorar la carga conceptual o elegir una cantidad exacta sin justificarla.

---

# 8.2. Cabecera — identidad operativa resultante

## 8.2.1. `identidad_operativa_resultante.formulacion_canonica`

**Función:** declarar qué tipo de operación realizativa está siendo ejecutada.

**Fuentes obligatorias:**

- `dimension_identidad_operativa_de_la_realizacion.formulacion_canonica`

**Regla de construcción:** copiar todos los valores activos y normalizarlos como formulaciones canónicas de la realización. En carousel, pueden coexistir formulaciones como `crear_manifestacion_codominial_carousel`, `crear_secuencia_laminar_visual_textual` y `crear_carousel_visual_textual`.

**Interacciones críticas:**

- Debe condicionar `id_de_manifestacion`, `funcion_global_de_la_secuencia` y justificación de identidad.
- Si hay varias formulaciones, no escoger una sola sin razón; declarar que operan como formulación compuesta.

**Validación local:** la identidad operativa debe poder explicar por qué la salida es carousel y no otra realización.

**Errores a evitar:** convertir formulaciones canónicas en título comercial, omitir alguna formulación activa o sustituirlas por una descripción libre.

---

## 8.2.2. `identidad_operativa_resultante.nivel_de_especificidad`

**Función:** declarar el grado de especificidad conceptual-operativa de la pieza.

**Fuentes obligatorias:**

- `dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad`
- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion`
- `dimension_construccion_del_caso.construccion_conceptual.coleccion_de_ideas_activas`

**Regla de construcción:** copiar el valor activo (`general`, `intermedia`, `especifica`) y aplicarlo al nivel de detalle de titulares, cuerpos textuales, ejemplos y selección de ideas.

**Interacciones críticas:**

- `general` favorece definiciones amplias, mapas y orientación inicial.
- `intermedia` permite explicar relaciones, distinciones y funcionamiento.
- `especifica` exige decisiones más concretas, caso, método o aplicación.

**Validación local:** el nivel de especificidad debe reflejarse en la densidad conceptual y en la selección de ideas por lámina.

**Errores a evitar:** copiar el valor solo en cabecera sin afectar contenido.

---

## 8.2.3. `identidad_operativa_resultante.prioridad_de_intencion`

**Función:** declarar la centralidad de la intención dentro de la manifestación.

**Fuentes obligatorias:**

- `dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion`
- `dimension_orientacion_funcional_pragmatica.funcion_dominante`

**Regla de construcción:** copiar el valor activo (`principal`, `secundaria`, `terciaria`, `auxiliar`) y usarlo para ponderar qué intención domina la macroestructura y qué intenciones quedan subordinadas.

**Interacciones críticas:**

- Si es `principal`, debe gobernar portada, cierre y función global.
- Si es `secundaria` o menor, debe aparecer como soporte sin desplazar la función dominante.

**Validación local:** debe quedar claro qué intención domina y qué decisiones se subordinan a ella.

**Errores a evitar:** tratar todas las intenciones como equivalentes.

---

# 8.3. Cabecera — orientación funcional resultante

## 8.3.1. `orientacion_funcional_resultante.funcion_dominante`

**Función:** declarar la función global principal de la pieza.

**Fuentes obligatorias:**

- `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`

**Regla de construcción:** copiar el valor activo y usarlo para definir `funcion_global_de_la_secuencia`, `funcion_de_la_lamina` y `objetivo_local` de cada lámina.

**Interacciones críticas:**

- `captar_atencion` exige portada fuerte y continuidad atencional temprana.
- `sintetizar` exige reducción de carga, jerarquía clara y cierre memorable.
- `enseñar` exige progresión didáctica y resolución conceptual.
- `activar_interaccion` exige preguntas, CTA o participación explícita.
- `distribuir` exige claridad compartible y unidades autónomas.
- `convertir` exige puente hacia acción y cierre operativo.
- `abrir_serie`, `continuar_serie`, `cerrar_serie` deben afectar relación con continuidad temporal.

**Validación local:** la función dominante debe aparecer en cabecera, macroestructura, funciones de lámina y justificación.

**Errores a evitar:** declarar una función dominante y construir la pieza como otra.

---

## 8.3.2. `orientacion_funcional_resultante.efecto_buscado`

**Función:** declarar el efecto cognitivo, atencional o comportamental esperado.

**Fuentes obligatorias:**

- `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- `dimension_dinamica_atencional_y_procesual.estado_atencional`
- `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`

**Regla de construcción:** copiar todos los efectos activos y traducirlos a decisiones de portada, desarrollo, cierre, texto, visualidad y CTA.

**Interacciones críticas:**

- `comprension_rapida` requiere claridad, contraste y baja ambigüedad.
- `deseo_de_guardar` requiere utilidad condensada, plantilla, lista, mapa o fórmula.
- `deseo_de_compartir` requiere formulaciones memorables o contraste socialmente comunicable.
- `curiosidad` requiere apertura incompleta y promesa de resolución.
- `expectativa_de_resolucion` exige tensión inicial y resolución posterior.
- `retencion` exige continuidad interlaminar fuerte.
- `identificacion` exige escena, caso o formulación reconocible.
- `disposicion_a_accion` exige CTA y cierre operativo.

**Validación local:** cada efecto buscado debe tener al menos una decisión visible en la secuencia.

**Errores a evitar:** listar efectos sin materializarlos.

---

## 8.3.3. `orientacion_funcional_resultante.accion_esperada`

**Función:** declarar qué acción debe quedar favorecida al final o durante la secuencia.

**Fuentes obligatorias:**

- `dimension_orientacion_funcional_pragmatica.accion_esperada`
- `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`

**Regla de construcción:** copiar las acciones activas y convertirlas en `CTA_local`, cierre o microcopy cuando corresponda.

**Interacciones críticas:**

- `guardar` funciona mejor con listas, plantillas, mapas, fórmulas, tablas o mini-infografías.
- `compartir` exige frase transferible, contraste fuerte o valor social claro.
- `comentar` exige pregunta guía o tensión abierta.
- `ir_al_perfil`, `hacer_click` y `seguir_cuenta` requieren CTA explícito y coherente con la plataforma.
- `consumir_parte_siguiente` debe activar continuidad serial.

**Validación local:** si hay acción esperada, debe existir al menos un CTA o señal de desplazamiento hacia esa acción.

**Errores a evitar:** usar CTA genérico que no corresponda a la acción esperada.

---

## 8.3.4. `orientacion_funcional_resultante.configuracion_discursiva`

**Función:** declarar la forma discursiva dominante de la secuencia.

**Fuentes obligatorias:**

- `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`

**Regla de construcción:** copiar el valor activo y usarlo como patrón de desarrollo del texto visible y la progresión entre láminas.

**Interacciones críticas:**

- `sintetizadora` reduce y jerarquiza.
- `explicativa` despliega relaciones.
- `operativa` convierte en pasos, criterios o herramienta.
- `definicional` fija conceptos y fronteras.
- `argumentativa` presenta tesis, razones y conclusión.
- `captativa` prioriza apertura y tensión.
- `hibrida_controlada` combina formas, pero debe declarar qué forma domina en cada lámina.

**Validación local:** la estructura textual debe reflejar la configuración discursiva.

**Errores a evitar:** mezclar formas sin declarar función local.

---

# 8.4. Cabecera — escala temporal y resolución resultante

## 8.4.1. `escala_temporal_y_resolucion_resultante.alcance_de_realizacion`

**Función:** declarar el papel de la pieza dentro de una unidad mayor o como pieza autónoma.

**Fuentes obligatorias:**

- `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- `dimension_orientacion_funcional_pragmatica.funcion_dominante`

**Regla de construcción:** copiar el valor activo y usarlo para definir si la pieza se comporta como acceso, profundización, prueba, transición, validación, apertura, continuidad o cierre.

**Interacciones críticas:**

- Las piezas de acceso deben reducir fricción e introducir tensión.
- Las piezas de profundización pueden aumentar densidad conceptual.
- Las piezas de validación deben usar caso, prueba o contraste.
- Las piezas de serie deben incluir continuidad hacia piezas anteriores o posteriores.

**Validación local:** el alcance debe reflejarse en la portada, la progresión y el cierre.

**Errores a evitar:** construir una pieza de acceso como si fuera cierre definitivo, o una pieza de cierre como si abriera demasiadas preguntas nuevas.

---

## 8.4.2. `escala_temporal_y_resolucion_resultante.horizonte_temporal`

**Función:** declarar la escala de uso o efecto temporal de la pieza.

**Fuentes obligatorias:**

- `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- `dimension_orientacion_funcional_pragmatica.accion_esperada`

**Regla de construcción:** copiar el valor activo y ajustar cierre, CTA y continuidad.

**Interacciones críticas:**

- `inmediato` favorece acción rápida y comprensión veloz.
- `corto_plazo` permite uso posterior cercano.
- `mediano_plazo` debe aumentar estructura y memorabilidad.
- `seriado` exige continuidad explícita.
- `acumulativo` exige guardar, volver o integrar la pieza en arquitectura mayor.

**Validación local:** el horizonte temporal debe afectar la forma del cierre y la continuidad.

**Errores a evitar:** declarar horizonte acumulativo sin dar estructura reusable.

---

## 8.4.3. `escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`

**Función:** declarar cuánto se resuelve dentro de la pieza.

**Fuentes obligatorias:**

- `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`
- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion`

**Regla de construcción:** copiar el valor activo y usarlo para determinar el grado de cierre de la última lámina y el grado de resolución local por lámina.

**Interacciones críticas:**

- `resolucion_inmediata` exige entregar respuesta dentro de la secuencia.
- `resolucion_parcial` entrega un avance y conserva una zona abierta.
- `resolucion_progresiva` distribuye resolución entre láminas.
- `resolucion_diferida` abre tensión para pieza posterior.
- `resolucion_abierta_a_continuidad` debe cerrar sin clausurar del todo.

**Validación local:** el cierre debe coincidir con el régimen de resolución.

**Errores a evitar:** prometer resolución y no entregarla, o cerrar completamente una pieza marcada como abierta a continuidad.

---

# 8.5. Cabecera — acoplamiento receptoral resultante

## 8.5.1. `acoplamiento_receptoral_resultante.publico_objetivo_inmediato`

**Función:** declarar el receptor inmediato para el cual se ajusta la pieza.

**Fuentes obligatorias:**

- `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa`

**Regla de construcción:** copiar los valores activos y traducirlos en nivel de explicación, presupuestos, ejemplos, densidad y tono.

**Interacciones críticas:**

- `audiencia_fria` requiere contexto, baja suposición y apertura clara.
- `audiencia_tibia` permite conectar con interés previo.
- `audiencia_caliente` permite mayor orientación a acción.
- `personas_que_no_comprenden` exige clarificación y ejemplos.
- `personas_que_ya_comprenden` permite profundización, distinción o herramienta.

**Validación local:** el lenguaje y la progresión deben ser compatibles con el público declarado.

**Errores a evitar:** escribir para expertos si el público es frío o escribir demasiado básico si el público ya comprende.

---

## 8.5.2. `adecuacion_lexico_formulativa.registro_predominante`

**Función:** declarar el registro verbal dominante.

**Fuentes obligatorias:**

- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`

**Regla de construcción:** copiar el valor activo y aplicar su efecto en titulares, cuerpo textual, microcopy y CTA.

**Interacciones críticas:**

- `coloquial_controlado` exige cercanía sin perder precisión.
- `pedagogico` exige claridad didáctica.
- `tecnico` permite términos especializados.
- `analitico` privilegia distinciones y relaciones.
- `institucional` exige formalidad y control.
- `hibrido` debe combinar registros con jerarquía clara.

**Validación local:** el texto visible debe sonar compatible con el registro declarado.

**Errores a evitar:** confundir registro con tema o mezclar registros de forma inestable.

---

## 8.5.3. `adecuacion_lexico_formulativa.densidad_terminologica`

**Función:** declarar cuánta terminología especializada puede soportar la pieza.

**Fuentes obligatorias:**

- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica`
- `dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad`
- `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`

**Regla de construcción:** copiar el valor activo y modular número de términos especializados, definiciones y apoyos contextuales.

**Interacciones críticas:**

- `baja` favorece lenguaje común y pocos conceptos técnicos.
- `media` permite términos con apoyo.
- `alta` permite léxico especializado si el público y el nivel de especificidad lo permiten.

**Validación local:** la terminología debe ser legible para el público y consistente con la especificidad.

**Errores a evitar:** usar densidad alta sin soporte cuando el público es frío.

---

## 8.5.4. `adecuacion_lexico_formulativa.grado_de_abstraccion`

**Función:** declarar el nivel de abstracción permitido.

**Fuentes obligatorias:**

- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion`
- `dimension_construccion_del_caso.configuracion_narrativa`
- `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`

**Regla de construcción:** copiar el valor activo y decidir si la lámina debe usar caso concreto, explicación intermedia o formulación abstracta.

**Interacciones críticas:**

- `concreto` exige escena, ejemplo, caso o imagen reconocible.
- `intermedio` combina concepto con ejemplo.
- `abstracto` permite fórmulas, mapas, matrices o definiciones de alto nivel.

**Validación local:** cada lámina debe respetar el grado de abstracción o compensarlo con recurso visual adecuado.

**Errores a evitar:** usar abstracción alta sin estructura visual o ejemplo cuando el público no la soporta.

---

## 8.5.5. `adecuacion_lexico_formulativa.accesibilidad_lexica`

**Función:** declarar qué tan accesible debe ser el vocabulario.

**Fuentes obligatorias:**

- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica`
- `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa`

**Regla de construcción:** copiar el valor activo y ajustar claridad de palabras, longitud de frases y necesidad de definiciones.

**Interacciones críticas:**

- `alta` exige vocabulario común, frases claras y baja barrera de entrada.
- `media` permite precisión con explicación.
- `baja` permite lenguaje más especializado, pero debe ser compatible con público y fricción deseada.

**Validación local:** el texto visible debe tener el grado de accesibilidad declarado.

**Errores a evitar:** interpretar `baja` como “menor importancia”; significa menor accesibilidad léxica, no menor peso operativo.

---

## 8.5.6. `adecuacion_lexico_formulativa.variacion_lexica`

**Función:** declarar el grado de variedad verbal permitido.

**Fuentes obligatorias:**

- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica`
- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad`

**Regla de construcción:** copiar el valor activo y modular repetición, reformulación y consistencia terminológica entre láminas.

**Interacciones críticas:**

- `baja` favorece repetición estable de términos clave.
- `media` permite reformulación controlada.
- `alta` permite variedad expresiva si no rompe continuidad.

**Validación local:** los términos centrales deben conservar continuidad aunque varíe el lenguaje.

**Errores a evitar:** variar términos clave hasta perder trazabilidad conceptual.

---

# 8.6. Cabecera — dinámica atencional y procesual resultante

## 8.6.1. `dinamica_atencional_y_procesual_resultante.estado_atencional`

**Función:** declarar el estado de atención desde el que se espera recibir al usuario.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.estado_atencional`
- `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`

**Regla de construcción:** copiar el valor activo y usarlo para diseñar portada, ritmo de entrada, fricción inicial y continuidad.

**Interacciones críticas:**

- `atencion_fragmentada` exige apertura inmediata, titular claro y bajo costo de entrada.
- `atencion_superficial` exige estímulo reconocible y promesa de valor.
- `atencion_en_exploracion` permite pregunta o mapa.
- `atencion_sostenida` permite desarrollo más denso.
- estados listos para activación, continuidad o profundización deben empujar a CTA, serie o desarrollo más profundo.

**Validación local:** portada y primera lámina deben estar ajustadas al estado atencional.

**Errores a evitar:** iniciar con abstracción pesada cuando el estado es fragmentado.

---

## 8.6.2. `dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`

**Función:** declarar cómo se activa o reactiva la atención.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional`
- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`

**Regla de construcción:** copiar el valor activo y convertirlo en estrategia de apertura y deslizamiento.

**Interacciones críticas:**

- `apertura_inmediata` exige gancho explícito desde lámina 1.
- `apertura_progresiva` permite construir tensión en varias láminas.
- `sostenimiento_desde_el_inicio` exige continuidad fuerte desde portada.
- `activacion_por_continuidad` debe enlazar con serie o pieza anterior.
- `reenganche` requiere recuperar atención mediante recapitulación o contraste.

**Validación local:** debe haber una estrategia clara de activación en la primera parte de la secuencia.

**Errores a evitar:** dejar la activación como resultado esperado pero no diseñado.

---

## 8.6.3. `dinamica_procesual.explicitud`

**Función:** declarar cuánto debe decirse de forma explícita.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud`
- `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`

**Regla de construcción:** copiar el valor activo y modular instrucciones, conectores, explicaciones y cierres.

**Interacciones críticas:**

- `alta` exige declarar relaciones y pasos.
- `media` permite dejar algunas inferencias guiadas.
- `baja` permite mayor implicación simbólica o conceptual, solo si público y fricción lo permiten.

**Validación local:** el grado de explicitud debe notarse en cuerpo textual y continuidad argumental.

**Errores a evitar:** confundir baja explicitud con vaguedad.

---

## 8.6.4. `dinamica_procesual.continuidad`

**Función:** declarar la fuerza de encadenamiento entre láminas.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad`
- `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`

**Regla de construcción:** copiar el valor activo y aplicarlo a `progresion_interlaminar`, `continuidad_argumental`, `continuidad_atencional`, `continuidad_visual` y `funcion_del_deslizamiento`.

**Interacciones críticas:**

- `alta` exige que cada lámina necesite a la siguiente.
- `media` permite láminas relativamente autónomas con progresión clara.
- `baja` permite modularidad, pero sin romper la unidad global.

**Validación local:** cada lámina debe declarar continuidad anterior y proyección siguiente cuando aplique.

**Errores a evitar:** construir láminas aisladas si continuidad es alta.

---

## 8.6.5. `dinamica_procesual.friccion_interpretativa`

**Función:** declarar cuánta dificultad interpretativa se permite.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa`
- `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion`

**Regla de construcción:** copiar el valor activo y modular tensión, ambigüedad, abstracción y necesidad de inferencia.

**Interacciones críticas:**

- `baja` exige lectura directa.
- `media` permite desafío moderado.
- `alta` permite tensión conceptual, paradoja o contraste fuerte si hay soporte visual/textual.

**Validación local:** la fricción debe ser intencional y resoluble.

**Errores a evitar:** producir confusión no diseñada.

---

## 8.6.6. `dinamica_procesual.compresion`

**Función:** declarar el grado de condensación del contenido.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion`
- `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- `dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible`

**Regla de construcción:** copiar el valor activo y ajustar número de ideas por lámina, longitud textual y dependencia visual.

**Interacciones críticas:**

- `alta` exige síntesis, fórmulas, listas o contrastes compactos.
- `media` permite explicación breve.
- `baja` permite despliegue mayor dentro del rango de láminas.

**Validación local:** carga conceptual y densidad textual local deben reflejar compresión.

**Errores a evitar:** interpretar compresión baja como falta de estructura.

---

## 8.6.7. `dinamica_procesual.recapitulacion`

**Función:** declarar cuánto debe retomarse, sintetizarse o cerrarse.

**Fuentes obligatorias:**

- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion`
- `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`

**Regla de construcción:** copiar el valor activo y decidir si habrá lámina de resumen, micro-resúmenes o cierre recapitulativo.

**Interacciones críticas:**

- `alta` exige una síntesis explícita.
- `media` permite cierre con recordatorio parcial.
- `baja` permite cierre directo o transición sin resumen.

**Validación local:** el cierre debe reflejar el nivel de recapitulación.

**Errores a evitar:** omitir recapitulación cuando el régimen de resolución exige cierre progresivo o acumulativo.

---

# 8.7. Cabecera — construcción del caso resultante

## 8.7.1. `construccion_conceptual.coleccion_de_ideas_activas.ideas_activas[]`

**Función:** declarar la materia conceptual que será distribuida en láminas.

**Fuentes obligatorias:**

- archivo `construccion_conceptual`
- `dimension_construccion_del_caso.configuracion_narrativa`
- `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`

**Regla de construcción:** transformar la construcción conceptual en una lista de ideas con `idea_id`, formulación, rol conceptual, peso relativo, modo de presencia y relaciones.

**Interacciones críticas:**

- Las ideas nucleares deben aparecer en cabecera global y al menos una lámina.
- Las ideas complementarias deben apoyar o explicar ideas nucleares.
- Las ideas de puente deben conectar transiciones.
- Las ideas contrastivas deben alimentar contraste, tensión o reestructuración.
- Las ideas derivadas deben aparecer como consecuencia, aplicación o cierre.

**Validación local:** ninguna idea nuclear puede quedar sin uso o sin justificación de exclusión.

**Errores a evitar:** inventar ideas no presentes en la construcción conceptual o perder relaciones declaradas.

---

## 8.7.2. `ideas_nucleares_activadas_globalmente`

**Función:** declarar las ideas que sostienen la identidad conceptual global.

**Fuentes obligatorias:**

- `construccion_conceptual.coleccion_de_ideas_activas`
- clasificación de roles conceptuales

**Regla de construcción:** listar las ideas con rol nuclear o peso más alto. Deben orientar portada, desarrollo y cierre.

**Interacciones críticas:** si hay demasiadas ideas nucleares para la cantidad de láminas, priorizar por peso y fusionar formulaciones compatibles.

**Validación local:** cada idea nuclear debe tener presencia en láminas o justificación explícita.

**Errores a evitar:** convertir ideas complementarias en nucleares sin criterio.

---

## 8.7.3. `ideas_complementarias_activadas_globalmente`

**Función:** declarar ideas que apoyan, aclaran o extienden las nucleares.

**Fuentes obligatorias:**

- `construccion_conceptual.coleccion_de_ideas_activas`
- relaciones con ideas nucleares

**Regla de construcción:** listar ideas complementarias y asignarles función de soporte, ejemplo, explicación o ampliación.

**Interacciones críticas:** deben distribuirse sin desplazar el peso de las nucleares.

**Validación local:** cada complementaria usada debe apoyar una idea central identificable.

**Errores a evitar:** saturar la secuencia con apoyos sin núcleo.

---

## 8.7.4. `ideas_de_puente_activadas_globalmente`

**Función:** declarar ideas que conectan bloques, láminas o niveles de abstracción.

**Fuentes obligatorias:**

- relaciones entre ideas activas
- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad`

**Regla de construcción:** listar ideas que permiten pasar de apertura a desarrollo, de concepto a caso, de contraste a resolución o de explicación a CTA.

**Interacciones críticas:** si continuidad es alta, estas ideas deben aparecer explícitamente en transiciones.

**Validación local:** las transiciones entre láminas deben poder explicar qué idea de puente las sostiene.

**Errores a evitar:** usar transiciones retóricas vacías sin puente conceptual.

---

## 8.7.5. `ideas_contrastivas_activadas_globalmente`

**Función:** declarar ideas que producen oposición, tensión o reestructuración interpretativa.

**Fuentes obligatorias:**

- ideas activas marcadas como contrastivas
- `dimension_construccion_del_caso.configuracion_narrativa`
- `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`

**Regla de construcción:** listar pares o tensiones contrastivas y usarlas en titulares, láminas comparativas o estructura visual cuando corresponda.

**Interacciones críticas:** si `arquitectura_macro = apertura_contraste_resolucion`, estas ideas deben tener papel central.

**Validación local:** cada contraste debe tener términos claros y función dentro de la progresión.

**Errores a evitar:** usar contraste decorativo que no modifica comprensión.

---

## 8.7.6. `ideas_derivadas_activadas_globalmente`

**Función:** declarar consecuencias, aplicaciones o extensiones derivadas de las ideas principales.

**Fuentes obligatorias:**

- ideas activas y relaciones causales/consecuenciales
- `regimen_de_resolucion_buscada`

**Regla de construcción:** listar derivaciones y ubicarlas preferentemente en desarrollo final, cierre, CTA o lámina de aplicación.

**Interacciones críticas:** si la pieza busca conversión o acción, las ideas derivadas deben conectar con acción esperada.

**Validación local:** debe quedar claro de qué idea nuclear deriva cada idea derivada.

**Errores a evitar:** introducir derivaciones sin conexión conceptual.

---

## 8.7.7. `relaciones_entre_ideas_activadas_globalmente`

**Función:** declarar las relaciones conceptuales que organizan la secuencia.

**Fuentes obligatorias:**

- relaciones declaradas en `construccion_conceptual`
- `dimension_construccion_del_caso.configuracion_narrativa`

**Regla de construcción:** transformar relaciones en progresión: causa, contraste, dependencia, ejemplo, consecuencia, analogía, secuencia, clasificación o método.

**Interacciones críticas:** la arquitectura macro debe respetar el tipo dominante de relación.

**Validación local:** la progresión interlaminar debe apoyarse en relaciones explícitas, no en yuxtaposición.

**Errores a evitar:** listar ideas sin declarar relaciones.

---

## 8.7.8. `construccion_del_caso_resultante.configuracion_narrativa`

**Función:** declarar cómo se organiza el caso o la construcción conceptual.

**Fuentes obligatorias:**

- `dimension_construccion_del_caso.configuracion_narrativa`
- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`

**Regla de construcción:** copiar el valor activo y usarlo para ordenar ideas por lámina.

**Interacciones críticas:**

- `modular` permite bloques relativamente autónomos.
- `acumulativa` exige progresión incremental.
- `contrastiva` exige oposición explícita.
- `lineal_progresiva` exige avance secuencial.
- `recapitulativa` exige síntesis o retorno.
- `apertura_profundizacion_cierre` exige tres funciones macro claras.

**Validación local:** el orden de láminas debe reflejar la configuración narrativa.

**Errores a evitar:** declarar configuración narrativa y usar otra arquitectura sin justificación.

---

# 8.8. Cabecera — comparecencia visual-editorial resultante

## 8.8.1. `rama_visual_editorial.tono_editorial`

**Función:** declarar el tono global de la manifestación.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- `registro_predominante`
- `funcion_dominante`

**Regla de construcción:** copiar el valor activo y aplicarlo a titulares, cuerpos textuales, microcopy, visualidad y CTA.

**Interacciones críticas:** el tono debe mantenerse globalmente, pero puede modularse localmente por función de lámina.

**Validación local:** cada lámina debe declarar `tono_editorial_local` compatible.

**Errores a evitar:** cambiar tono entre láminas sin razón funcional.

---

## 8.8.2. `rama_visual_editorial.estilo_de_titulares`

**Función:** declarar la forma dominante de los titulares.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- `funcion_dominante`
- `efecto_buscado`

**Regla de construcción:** copiar el valor activo y usarlo para construir `titular` y `estilo_de_titular_local`.

**Interacciones críticas:**

- `pregunta_directa` debe formular interrogación relevante.
- `promesa_de_comprension` debe prometer una comprensión concreta.
- `contraste_conceptual` debe oponer dos formas, ideas o estados.
- `afirmacion_tesis` debe declarar una proposición fuerte.
- `advertencia` debe activar riesgo o error.
- `lista_numerada` debe conectar con estructura enumerada.
- `formula_memorable` debe condensar relación en fórmula.

**Validación local:** cada titular debe responder al estilo declarado.

**Errores a evitar:** usar estilo de titular diferente sin declararlo como variación local.

---

## 8.8.3. `rama_visual_editorial.densidad_textual_visible`

**Función:** declarar cuánta carga textual visible acepta la pieza.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible`
- `dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion`
- `cantidad_de_laminas`

**Regla de construcción:** copiar el valor activo y convertirlo en densidad textual local por lámina.

**Interacciones críticas:**

- `baja` exige titulares fuertes y cuerpo mínimo.
- `media` permite titular, subtítulo y cuerpo breve.
- `alta` permite explicación más densa con jerarquía fuerte.
- `variable_controlada` debe asignar densidad distinta por función de lámina.

**Validación local:** cada lámina debe respetar o justificar su densidad textual local.

**Errores a evitar:** saturar láminas con texto si la densidad declarada es baja.

---

## 8.8.4. `rama_visual_editorial.jerarquia_grafica`

**Función:** declarar qué componente domina visualmente la composición.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica`
- `uso_de_imagen_generada`
- `densidad_textual_visible`

**Regla de construcción:** copiar el valor activo y aplicarlo a `jerarquia_grafica_local`, `tipo_de_recurso_visual`, `estructura_visual` y relación texto-imagen.

**Interacciones críticas:**

- `titular_dominante` prioriza lectura verbal inmediata.
- `texto_visual_balanceado` equilibra texto e imagen.
- `imagen_dominante_texto_secundario` exige imagen como soporte central.
- `diagrama_dominante` exige estructura visual operativa.
- `estructura_mixta_controlada` combina recursos con jerarquía declarada.

**Validación local:** la jerarquía declarada debe verse reflejada en cada lámina.

**Errores a evitar:** declarar diagrama dominante y producir imagen decorativa.

---

## 8.8.5. `rama_visual_editorial.presencia_de_marca`

**Función:** declarar el grado de presencia marcaria.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca`
- `funcion_dominante`
- `accion_esperada`

**Regla de construcción:** copiar el valor activo y aplicarlo global y localmente.

**Interacciones críticas:**

- `ausente` no debe incluir signos de marca.
- `minima` puede incluir firma o señal discreta.
- `moderada` permite consistencia visual y firma más visible.
- `dominante` permite marca como parte explícita de la composición.

**Validación local:** presencia local de marca debe coincidir con régimen global.

**Errores a evitar:** introducir marca dominante si el valor es ausente o mínima.

---

## 8.8.6. `rama_visual_editorial.regimen_de_iconografia`

**Función:** declarar el uso global de iconos.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia`
- `uso_de_imagen_generada`
- `jerarquia_grafica`

**Regla de construcción:** copiar el valor activo y traducirlo en elementos obligatorios/prohibidos y régimen local.

**Interacciones críticas:**

- `sin_iconografia` prohíbe iconos como recurso compositivo.
- `iconografia_minima` permite apoyos puntuales.
- `iconografia_funcional` usa iconos para señalar relaciones, pasos o categorías.
- `iconografia_sistematica` exige consistencia de sistema iconográfico.

**Validación local:** cada lámina debe respetar régimen local de iconografía.

**Errores a evitar:** usar iconos decorativos cuando la función es operativa.

---

## 8.8.7. `rama_visual_editorial.estilo_de_composicion_visual`

**Función:** declarar el estilo visual global.

**Fuentes obligatorias:**

- `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- `jerarquia_grafica`
- `uso_de_imagen_generada`

**Regla de construcción:** copiar el valor activo y usarlo como criterio de composición en cada lámina.

**Interacciones críticas:**

- `limpio_minimal` exige aire, pocas capas y claridad.
- `editorial_sobrio` exige composición seria y controlada.
- `didactico_visual` prioriza comprensión.
- `conceptual_simbolico` permite metáfora e imagen conceptual.
- `infografico` exige estructura de información visible.
- `contraste_fuerte` exige oposición visual legible.

**Validación local:** `estilo_de_composicion_visual_local` debe derivar del estilo global.

**Errores a evitar:** aplicar estética incompatible con tono o función.

---

# 8.9. Cabecera — marco de materialización resultante

## 8.9.1. `marco_de_materializacion_resultante.clase_de_materializacion`

**Función:** reafirmar materialmente la clase de salida.

**Fuentes obligatorias:**

- `dimension_marco_de_materializacion.clase_de_materializacion`

**Regla de construcción:** copiar `secuencia_laminar_visual` y usarlo como restricción final de validación.

**Interacciones críticas:** debe coincidir con `identificacion_general.clase_de_materializacion`.

**Validación local:** no debe haber diferencia entre ambos campos de clase.

**Errores a evitar:** duplicar con nombres distintos.

---

## 8.9.2. `marco_de_materializacion_resultante.plataforma`

**Función:** reafirmar el entorno de publicación.

**Fuentes obligatorias:**

- `dimension_marco_de_materializacion.plataforma`

**Regla de construcción:** copiar el valor activo y mantenerlo idéntico o normalizado respecto a identificación general.

**Interacciones críticas:** debe gobernar aplicación y notas de materialización, no crear región nueva.

**Validación local:** debe coincidir con `identificacion_general.plataforma`.

**Errores a evitar:** tratar plataforma como carpeta o realización separada.

---

## 8.9.3. `marco_de_materializacion_resultante.aplicacion_de_plataforma`

**Función:** reafirmar la implementación de plataforma usada.

**Fuentes obligatorias:**

- `dimension_marco_de_materializacion.aplicacion_de_plataforma`

**Regla de construcción:** copiar el valor activo y mantenerlo compatible con clase y plataforma.

**Interacciones críticas:** debe coincidir con `identificacion_general.aplicacion_de_plataforma`.

**Validación local:** no debe contradecir plataforma ni clase material.

**Errores a evitar:** cambiar aplicación en la cabecera y el marco.

---

# 8.10. Capa macroestructural — arquitectura global

## 8.10.1. `arquitectura_global.cantidad_de_laminas`

**Función:** declarar la cantidad o rango que gobierna la macroestructura.

**Fuentes obligatorias:**

- `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- `cantidad_de_laminas` de identificación general

**Regla de construcción:** copiar el valor activo y, si se deriva cantidad exacta, declararla también en `cantidad_total_de_laminas`.

**Interacciones críticas:** debe ser compatible con arquitectura macro y carga conceptual.

**Validación local:** debe coincidir con número de láminas generadas.

**Errores a evitar:** contradicción entre cabecera y macroestructura.

---

## 8.10.2. `arquitectura_global.arquitectura_macro`

**Función:** declarar el patrón global de organización de la secuencia.

**Fuentes obligatorias:**

- `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- `dimension_construccion_del_caso.configuracion_narrativa`
- `regimen_de_resolucion_buscada`

**Regla de construcción:** copiar el valor activo y traducirlo en componentes macroestructurales.

**Interacciones críticas:**

- `apertura_desarrollo_cierre` exige tres zonas funcionales.
- `apertura_lista_cierre` exige enumeración organizada.
- `apertura_contraste_resolucion` exige tensión y resolución.
- `apertura_secuencia_remate` exige avance y golpe final.
- `apertura_desarrollo_remate` exige desarrollo con cierre fuerte.

**Validación local:** cada lámina debe tener posición compatible con la arquitectura.

**Errores a evitar:** usar una arquitectura distinta a la declarada.

---

## 8.10.3. `arquitectura_global.componentes_macroestructurales_activados`

**Función:** listar los bloques funcionales que componen la secuencia.

**Fuentes obligatorias:**

- `arquitectura_macro`
- `cantidad_de_laminas`
- `configuracion_narrativa`

**Regla de construcción:** derivar componentes como portada, apertura, desarrollo, lista, contraste, resolución, recapitulación, remate o CTA.

**Interacciones críticas:** si la cantidad de láminas es baja, fusionar componentes; si es alta, distribuirlos.

**Validación local:** cada componente debe corresponder a una o más láminas.

**Errores a evitar:** listar componentes que no aparecen en láminas.

---

## 8.10.4. `arquitectura_global.segmentacion_interna`

**Función:** declarar cómo se divide internamente la secuencia.

**Fuentes obligatorias:**

- `cantidad_de_laminas`
- `arquitectura_macro`
- `configuracion_narrativa`

**Regla de construcción:** describir la partición funcional de las láminas. Ejemplo: `1 apertura / 2-4 desarrollo / 5 cierre`.

**Interacciones críticas:** debe adaptarse al número exacto de láminas cuando se derive dentro de un rango.

**Validación local:** la segmentación debe coincidir con `posicion_en_arquitectura_macro` de cada lámina.

**Errores a evitar:** segmentar por estética y no por función.

---

## 8.10.5. `arquitectura_global.unidad_de_segmento`

**Función:** declarar cuál es la unidad mínima de segmentación.

**Fuentes obligatorias:**

- `clase_de_materializacion`
- `cantidad_de_laminas`

**Regla de construcción:** para carousel debe ser `lamina`, `slide`, `card` o una normalización equivalente; se recomienda `lamina` para mantener consistencia con la salida.

**Interacciones críticas:** no debe convertirse en escena, toma, bloque temporal o párrafo.

**Validación local:** cada segmento debe corresponder a una lámina.

**Errores a evitar:** usar unidad audiovisual.

---

## 8.10.6. `arquitectura_global.cantidad_total_de_laminas`

**Función:** declarar el número exacto de láminas construidas.

**Fuentes obligatorias:**

- `cantidad_de_laminas`
- `segmentacion_interna`
- `coleccion_de_ideas_activas`

**Regla de construcción:** si el valor regional es un rango, derivar número exacto y justificarlo por carga conceptual, arquitectura macro y compresión.

**Interacciones críticas:** debe coincidir con el número de objetos en `laminas`.

**Validación local:** conteo exacto igual a láminas generadas.

**Errores a evitar:** declarar 5 y construir 4 o 6.

---

## 8.10.7. `arquitectura_global.funcion_global_de_la_secuencia`

**Función:** declarar qué hace la secuencia como totalidad.

**Fuentes obligatorias:**

- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `alcance_de_realizacion`

**Regla de construcción:** formular una función global breve que sintetice función, efecto y acción.

**Interacciones críticas:** si hay varias funciones, declarar dominante y subordinadas.

**Validación local:** cada lámina debe contribuir a esta función global.

**Errores a evitar:** escribir una descripción temática sin función operativa.

---

## 8.10.8. `arquitectura_global.progresion_interlaminar`

**Función:** declarar el avance entre láminas.

**Fuentes obligatorias:**

- `arquitectura_macro`
- `configuracion_narrativa`
- `dinamica_procesual.continuidad`
- `relaciones_entre_ideas_activadas_globalmente`

**Regla de construcción:** describir cómo la secuencia avanza: de problema a marco, de contraste a resolución, de lista a acción, de caso a principio, etc.

**Interacciones críticas:** si continuidad es alta, la progresión debe ser estricta; si es baja, puede ser modular pero coherente.

**Validación local:** cada lámina debe declarar continuidad con anterior y siguiente según corresponda.

**Errores a evitar:** colocar láminas intercambiables cuando la progresión dice ser acumulativa.

---

## 8.10.9. `arquitectura_global.relacion_portada_desarrollo_cierre`

**Función:** declarar cómo se relacionan inicio, cuerpo y final.

**Fuentes obligatorias:**

- `arquitectura_macro`
- `regimen_de_activacion_atencional`
- `regimen_de_resolucion_buscada`
- `accion_esperada`

**Regla de construcción:** explicar cómo la portada abre tensión, cómo el desarrollo la procesa y cómo el cierre la resuelve, deriva o activa.

**Interacciones críticas:** si la pieza es serial, el cierre puede abrir continuidad; si es inmediata, debe resolver.

**Validación local:** portada, desarrollo y cierre deben tener funciones distinguibles.

**Errores a evitar:** que portada y cierre repitan la misma información sin transformación.

---

# 8.11. Capa macroestructural — recursos complementarios globales

## 8.11.1. `regimen_general_de_texto_visible`

**Función:** declarar cómo se usa texto visible en la secuencia.

**Fuentes obligatorias:**

- `dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla`
- `densidad_textual_visible`
- `jerarquia_grafica`

**Regla de construcción:** copiar el valor activo y traducirlo en presencia textual global: estructural, variable por bloque o ausente.

**Interacciones críticas:** si `sin_texto_visible`, las láminas deben resolver sentido visualmente; si texto estructural, todas las láminas deben tener función textual clara.

**Validación local:** cada lámina debe respetar el régimen textual global.

**Errores a evitar:** declarar sin texto visible y escribir titulares extensos.

---

## 8.11.2. `regimen_general_de_imagen_o_estructura_visual`

**Función:** declarar el tipo global de imagen, diagrama o estructura visual.

**Fuentes obligatorias:**

- `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- `jerarquia_grafica`
- `estilo_de_composicion_visual`

**Regla de construcción:** copiar o sintetizar el valor activo de imagen generada y definir si la secuencia usará imagen simbólica, diagrama, tabla, timeline, matriz, lista, fórmula, metáfora, escena, infografía, plantilla, pregunta, contraste o CTA visual.

**Interacciones críticas:** debe afectar `tipo_de_recurso_visual`, `estructura_visual` y `prompt_de_generacion`.

**Validación local:** al menos una lámina debe materializar el régimen visual si no es `sin_imagen_generada`.

**Errores a evitar:** tratar la imagen como decoración si el valor exige función operativa o metodológica.

---

## 8.11.3. `regimen_general_de_video_generado`

**Función:** declarar el uso global de video generado.

**Fuentes obligatorias:**

- `dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado`

**Regla de construcción:** para carousel debe copiar `sin_video_generado` salvo extensión regional explícita.

**Interacciones críticas:** debe reforzar que la realización es laminar visual, no audiovisual temporal.

**Validación local:** ningún campo visual debe pedir video generado.

**Errores a evitar:** convertir `tiktok_photo_mode` en video o pedir animaciones no declaradas.

---

## 8.11.4. `regimen_general_de_audio_generado`

**Función:** declarar el uso global de audio generado.

**Fuentes obligatorias:**

- `dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado`

**Regla de construcción:** para carousel debe copiar `sin_audio_generado` salvo extensión regional explícita.

**Interacciones críticas:** debe impedir instrucciones de voz, música o efectos sonoros.

**Validación local:** la salida no debe depender de audio.

**Errores a evitar:** incluir narración o audio como requisito de comprensión.

---

## 8.11.5. `funcion_predominante_de_los_recursos_complementarios`

**Función:** declarar qué función cumplen texto, imagen, iconografía o estructura visual.

**Fuentes obligatorias:**

- `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- `funcion_dominante`
- `uso_de_imagen_generada`

**Regla de construcción:** copiar el valor activo y aplicarlo a función visual local y dependencia texto-imagen.

**Interacciones críticas:**

- `explicativa` aclara.
- `ilustrativa` muestra.
- `simbolica` representa.
- `atencional` capta.
- `contrastiva` opone.
- `operativa` permite usar.
- `metodologica` organiza procedimiento.
- `mixta_controlada` combina funciones declarando jerarquía.

**Validación local:** cada recurso debe tener función, no solo presencia.

**Errores a evitar:** usar recurso complementario sin función predominante.

---

## 8.11.6. `grado_de_dependencia_de_recursos_complementarios`

**Función:** declarar cuánto depende la comprensión de los recursos complementarios.

**Fuentes obligatorias:**

- `dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios`
- `uso_de_texto_en_pantalla`
- `uso_de_imagen_generada`

**Regla de construcción:** copiar el valor activo y ajustar si el sentido reside en texto, imagen o combinación.

**Interacciones críticas:**

- `baja` permite que texto o estructura principal baste.
- `media` exige apoyo visible relevante.
- `alta` exige que recurso sea necesario.
- `dominante` hace que el recurso estructure la comprensión.

**Validación local:** dependencia texto-imagen local debe coincidir con grado global.

**Errores a evitar:** marcar dependencia dominante y producir imagen secundaria.

---

## 8.11.7. `criterio_de_coherencia_visual_textual`

**Función:** declarar cómo texto y visualidad se mantienen coherentes.

**Fuentes obligatorias:**

- `uso_de_texto_en_pantalla`
- `uso_de_imagen_generada`
- `jerarquia_grafica`
- `funcion_predominante_de_los_recursos_complementarios`

**Regla de construcción:** formular un criterio que indique si el texto guía la imagen, si la imagen estructura el texto o si ambos se co-determinan.

**Interacciones críticas:** si hay diagrama dominante, el texto debe nombrar partes del diagrama; si hay titular dominante, la imagen debe soportar el titular.

**Validación local:** las notas de coherencia de cada lámina deben derivar de este criterio global.

**Errores a evitar:** crear visuales que no correspondan al texto visible.

---

## 8.11.8. `regimen_de_distribucion_de_recursos_por_lamina`

**Función:** declarar cómo se distribuyen recursos textuales, visuales e iconográficos a lo largo de la secuencia.

**Fuentes obligatorias:**

- `cantidad_de_laminas`
- `arquitectura_macro`
- `uso_de_imagen_generada`
- `densidad_textual_visible`
- `regimen_de_iconografia`

**Regla de construcción:** definir qué láminas llevan recurso visual principal, cuáles llevan apoyo textual, cuáles funcionan como transición y cuáles como cierre/CTA.

**Interacciones críticas:** si `variable_controlada`, la distribución puede cambiar por lámina; si jerarquía es dominante, mantener consistencia.

**Validación local:** la distribución declarada debe coincidir con cada lámina.

**Errores a evitar:** asignar el mismo peso visual a todas las láminas cuando la macroestructura exige diferencias.

---

# 8.12. Capa de láminas — identidad local de lámina

## 8.12.1. `lamina_id`

**Función:** identificar cada lámina dentro de la secuencia.

**Fuentes obligatorias:**

- `id_de_manifestacion`
- `numero_de_lamina`
- `posicion_en_arquitectura_macro`

**Regla de construcción:** crear id estable y secuencial. Ejemplo: `{id_de_manifestacion}-lamina-01`.

**Interacciones críticas:** debe preservar orden y trazabilidad.

**Validación local:** no puede haber ids repetidos.

**Errores a evitar:** usar nombres decorativos no trazables.

---

## 8.12.2. `numero_de_lamina`

**Función:** declarar posición ordinal de la lámina.

**Fuentes obligatorias:**

- `cantidad_total_de_laminas`

**Regla de construcción:** numerar desde 1 hasta la cantidad exacta generada.

**Interacciones críticas:** debe coincidir con continuidad anterior/siguiente.

**Validación local:** no debe faltar ni repetirse ningún número.

**Errores a evitar:** saltos de numeración.

---

## 8.12.3. `tipo_de_lamina`

**Función:** declarar la función tipológica de la lámina.

**Fuentes obligatorias:**

- `arquitectura_macro`
- `componentes_macroestructurales_activados`
- `funcion_dominante`
- `uso_de_imagen_generada`

**Regla de construcción:** asignar tipo como portada, apertura, desarrollo, contraste, lista, explicación, caso, plantilla, recapitulación, cierre, CTA o transición.

**Interacciones críticas:** debe derivar de arquitectura y función local.

**Validación local:** el tipo debe explicar la función de la lámina.

**Errores a evitar:** llamar todas las láminas “desarrollo”.

---

## 8.12.4. `posicion_en_arquitectura_macro`

**Función:** ubicar la lámina dentro del patrón global.

**Fuentes obligatorias:**

- `segmentacion_interna`
- `arquitectura_macro`

**Regla de construcción:** declarar si la lámina pertenece a apertura, desarrollo, lista, contraste, resolución, remate, recapitulación o cierre.

**Interacciones críticas:** debe coincidir con segmentación interna.

**Validación local:** cada lámina debe pertenecer a un segmento.

**Errores a evitar:** posición ambigua o incompatible con su función.

---

## 8.12.5. `funcion_de_la_lamina`

**Función:** declarar qué hace la lámina dentro de la secuencia.

**Fuentes obligatorias:**

- `funcion_dominante`
- `tipo_de_lamina`
- `ideas_activas_asignadas`
- `arquitectura_macro`

**Regla de construcción:** formular una función local breve: captar, definir, contrastar, explicar, ejemplificar, ordenar, resolver, activar, guardar, compartir, comentar, cerrar o continuar.

**Interacciones críticas:** la suma de funciones locales debe producir la función global.

**Validación local:** cada lámina debe tener una función local no decorativa.

**Errores a evitar:** describir tema en vez de función.

---

## 8.12.6. `objetivo_local`

**Función:** declarar qué debe lograr la lámina en el receptor.

**Fuentes obligatorias:**

- `efecto_buscado`
- `accion_esperada`
- `estado_atencional`
- `funcion_de_la_lamina`

**Regla de construcción:** formular objetivo medible en términos de comprensión, atención, deseo de guardar, interacción, acción o continuidad.

**Interacciones críticas:** si la lámina no es final, su objetivo debe incluir proyección hacia la siguiente.

**Validación local:** el objetivo debe poder evaluarse con la composición textual/visual.

**Errores a evitar:** escribir objetivos vagos como “informar sobre el tema”.

---

# 8.13. Capa de láminas — relación con el caso

## 8.13.1. `ideas_nucleares_activadas`

**Función:** declarar qué ideas nucleares aparecen en la lámina.

**Fuentes obligatorias:**

- `ideas_nucleares_activadas_globalmente`
- distribución de ideas por lámina

**Regla de construcción:** listar ids o formulaciones breves de ideas nucleares presentes en la lámina.

**Interacciones críticas:** si una lámina es portada o cierre, normalmente debe tocar al menos una idea nuclear.

**Validación local:** la idea nuclear debe aparecer reflejada en titular, visual o cuerpo.

**Errores a evitar:** declarar idea nuclear sin materialización visible.

---

## 8.13.2. `ideas_complementarias_activadas`

**Función:** declarar apoyos conceptuales usados localmente.

**Fuentes obligatorias:**

- `ideas_complementarias_activadas_globalmente`
- idea nuclear de la lámina

**Regla de construcción:** listar ideas complementarias que aclaran, ejemplifican o amplían la idea local.

**Interacciones críticas:** deben estar subordinadas a la función local.

**Validación local:** cada complementaria debe apoyar una idea explícita.

**Errores a evitar:** introducir complementos que saturan la lámina.

---

## 8.13.3. `ideas_de_puente_activadas`

**Función:** declarar ideas que permiten transición local.

**Fuentes obligatorias:**

- `ideas_de_puente_activadas_globalmente`
- continuidad anterior/siguiente

**Regla de construcción:** listar ideas que conectan esta lámina con anterior o siguiente.

**Interacciones críticas:** si la lámina es transición, este campo debe ser especialmente explícito.

**Validación local:** debe existir relación clara con continuidad interlaminar.

**Errores a evitar:** usar puentes retóricos sin relación conceptual.

---

## 8.13.4. `ideas_contrastivas_activadas`

**Función:** declarar oposiciones o tensiones locales.

**Fuentes obligatorias:**

- `ideas_contrastivas_activadas_globalmente`
- `tipo_de_lamina`
- `uso_de_imagen_generada`

**Regla de construcción:** listar ideas o pares contrastivos que la lámina contrapone.

**Interacciones críticas:** si el recurso visual es tabla, antes/después o contraste visual fuerte, este campo debe alimentar la estructura visual.

**Validación local:** el contraste debe verse en texto o visualidad.

**Errores a evitar:** declarar contraste sin dos términos comparables.

---

## 8.13.5. `ideas_derivadas_activadas`

**Función:** declarar consecuencias o aplicaciones locales.

**Fuentes obligatorias:**

- `ideas_derivadas_activadas_globalmente`
- `regimen_de_resolucion_buscada`
- `accion_esperada`

**Regla de construcción:** listar derivaciones que aparecen en la lámina como aplicación, conclusión o puente a acción.

**Interacciones críticas:** en cierre y CTA suelen tener más peso.

**Validación local:** cada derivada debe conectarse con una idea previa.

**Errores a evitar:** presentar derivaciones como ideas nuevas sin antecedente.

---

## 8.13.6. `relaciones_entre_ideas_activadas`

**Función:** declarar relaciones conceptuales locales.

**Fuentes obligatorias:**

- relaciones globales entre ideas
- ideas activadas en la lámina

**Regla de construcción:** declarar relación como causa, contraste, analogía, secuencia, composición, dependencia, ejemplo, consecuencia o clasificación.

**Interacciones críticas:** debe alimentar `continuidad_argumental` y `estructura_visual` si hay diagrama.

**Validación local:** la relación debe ser legible desde texto o visualidad.

**Errores a evitar:** yuxtaponer ideas sin relación.

---

# 8.14. Capa de láminas — composición local

## 8.14.1. `grado_de_carga_conceptual`

**Función:** declarar cuánta carga conceptual porta la lámina.

**Fuentes obligatorias:**

- número y peso de ideas activadas
- `compresion`
- `densidad_textual_visible`
- `grado_de_abstraccion`

**Regla de construcción:** asignar baja, media, alta o una descripción equivalente según cantidad, peso y abstracción de ideas.

**Interacciones críticas:** carga alta exige jerarquía gráfica fuerte o división en más láminas si el rango lo permite.

**Validación local:** carga conceptual debe coincidir con texto y visualidad.

**Errores a evitar:** saturar una lámina sin declarar carga alta.

---

## 8.14.2. `grado_de_resolucion_local`

**Función:** declarar cuánto se resuelve en esa lámina.

**Fuentes obligatorias:**

- `regimen_de_resolucion_buscada`
- `tipo_de_lamina`
- `funcion_de_la_lamina`

**Regla de construcción:** indicar si la lámina abre, desarrolla, resuelve parcialmente, resuelve totalmente, recapitula o deriva.

**Interacciones críticas:** láminas de cierre deben tener mayor resolución salvo régimen diferido o abierto.

**Validación local:** el campo debe coincidir con continuidad hacia siguiente.

**Errores a evitar:** cerrar localmente una lámina que debe mantener tensión.

---

## 8.14.3. `densidad_textual_local`

**Función:** declarar la densidad textual específica de la lámina.

**Fuentes obligatorias:**

- `densidad_textual_visible`
- `compresion`
- `tipo_de_lamina`
- `publico_objetivo_inmediato`

**Regla de construcción:** derivar densidad local: baja, media, alta o variable, explicando su función.

**Interacciones críticas:** portada suele requerir menor densidad; láminas metodológicas pueden aceptar más.

**Validación local:** debe coincidir con titular, subtítulo, cuerpo y microcopy.

**Errores a evitar:** densidad local incompatible con régimen global.

---

## 8.14.4. `jerarquia_grafica_local`

**Función:** declarar qué domina visualmente en la lámina.

**Fuentes obligatorias:**

- `jerarquia_grafica`
- `uso_de_imagen_generada`
- `tipo_de_lamina`

**Regla de construcción:** derivar jerarquía local compatible con régimen global: titular dominante, imagen dominante, diagrama dominante, estructura mixta, etc.

**Interacciones críticas:** si el valor visual elegido es diagrama, matriz, tabla o infografía, la estructura puede dominar sobre texto.

**Validación local:** la jerarquía debe verse en composición visual.

**Errores a evitar:** declarar titular dominante y hacer que la imagen cargue el sentido principal.

---

## 8.14.5. `funcion_visual_local`

**Función:** declarar qué hace visualmente la lámina.

**Fuentes obligatorias:**

- `funcion_predominante_de_los_recursos_complementarios`
- `uso_de_imagen_generada`
- `funcion_de_la_lamina`

**Regla de construcción:** formular función visual: captar, explicar, ilustrar, simbolizar, contrastar, ordenar, operacionalizar, metodologizar o cerrar.

**Interacciones críticas:** debe coincidir con tipo de recurso visual.

**Validación local:** la función visual debe poder rastrearse en prompt y estructura visual.

**Errores a evitar:** imagen sin función o función visual contradictoria.

---

## 8.14.6. `dependencia_texto_imagen`

**Función:** declarar cómo se relacionan texto e imagen en la comprensión.

**Fuentes obligatorias:**

- `grado_de_dependencia_de_recursos_complementarios`
- `uso_de_texto_en_pantalla`
- `uso_de_imagen_generada`
- `jerarquia_grafica`

**Regla de construcción:** indicar si el texto domina, la imagen domina, ambos se complementan o uno no es necesario.

**Interacciones críticas:** si dependencia global es dominante, la lámina debe depender realmente del recurso.

**Validación local:** la relación debe reflejarse en notas de coherencia.

**Errores a evitar:** decir que imagen es dominante y explicar todo solo en texto.

---

# 8.15. Capa textual visible

## 8.15.1. `texto_visible.presencia`

**Función:** declarar si hay texto visible en la lámina.

**Fuentes obligatorias:**

- `uso_de_texto_en_pantalla`
- `densidad_textual_visible`
- `tipo_de_lamina`

**Regla de construcción:** definir presencia como presente, ausente o mínima según régimen global.

**Interacciones críticas:** si `sin_texto_visible`, no construir titular/cuerpo salvo campos nulos o justificación de ausencia.

**Validación local:** presencia debe coincidir con campos textuales llenos o vacíos.

**Errores a evitar:** marcar ausencia y luego incluir texto extenso.

---

## 8.15.2. `texto_visible.funcion`

**Función:** declarar qué función cumple el texto visible.

**Fuentes obligatorias:**

- `configuracion_discursiva`
- `funcion_de_la_lamina`
- `funcion_predominante_de_los_recursos_complementarios`

**Regla de construcción:** declarar si el texto capta, define, explica, ordena, contrasta, guía, resume, pregunta o activa.

**Interacciones críticas:** debe coordinar con función visual local.

**Validación local:** el contenido textual debe cumplir la función declarada.

**Errores a evitar:** texto que repite la imagen sin añadir función.

---

## 8.15.3. `texto_visible.titular`

**Función:** abrir la lectura local de la lámina.

**Fuentes obligatorias:**

- `estilo_de_titulares`
- `tono_editorial`
- `funcion_de_la_lamina`
- idea principal de la lámina
- `efecto_buscado`

**Regla de construcción:** escribir un titular compatible con el estilo global y la función local. Debe ser breve, legible y no genérico.

**Interacciones críticas:** si el estilo es `pregunta_directa`, debe ser pregunta; si es `contraste_conceptual`, debe contener oposición; si es `lista_numerada`, debe conectar con número o estructura.

**Validación local:** el titular debe activar la idea principal de la lámina.

**Errores a evitar:** titular ornamental, clickbait no justificado o titular que no coincide con la lámina.

---

## 8.15.4. `texto_visible.subtitulo`

**Función:** precisar o ampliar el titular sin desplazarlo.

**Fuentes obligatorias:**

- `densidad_textual_local`
- `accesibilidad_lexica`
- `funcion_de_la_lamina`
- idea complementaria o puente

**Regla de construcción:** escribir una frase secundaria que aclare promesa, relación o contexto.

**Interacciones críticas:** si densidad textual es baja, puede omitirse o ser mínimo.

**Validación local:** debe añadir claridad, no repetir el titular.

**Errores a evitar:** usar subtítulo como cuerpo largo.

---

## 8.15.5. `texto_visible.cuerpo_textual`

**Función:** desarrollar el contenido verbal principal de la lámina.

**Fuentes obligatorias:**

- `configuracion_discursiva`
- `densidad_textual_local`
- ideas activadas localmente
- `registro_predominante`
- `densidad_terminologica`
- `grado_de_abstraccion`

**Regla de construcción:** escribir cuerpo breve o desarrollado según densidad local, usando ideas activas sin añadir ideas externas.

**Interacciones críticas:** si la lámina es visualmente dominante, el cuerpo debe ser soporte; si es texto dominante, el cuerpo puede explicar más.

**Validación local:** el cuerpo debe materializar las ideas declaradas en relación con el caso.

**Errores a evitar:** cuerpo textual sin relación con ideas activadas.

---

## 8.15.6. `texto_visible.microcopy`

**Función:** aportar señales breves de navegación, énfasis o uso.

**Fuentes obligatorias:**

- `continuidad_interlaminar`
- `accion_esperada`
- `regimen_de_activacion_atencional`

**Regla de construcción:** usar microcopy para guiar deslizamiento, marcar paso, indicar lectura o reforzar CTA sin saturar.

**Interacciones críticas:** si continuidad es alta, microcopy puede anticipar la siguiente lámina.

**Validación local:** debe tener función práctica o atencional.

**Errores a evitar:** microcopy decorativo o redundante.

---

## 8.15.7. `texto_visible.CTA_local`

**Función:** activar una acción local o final.

**Fuentes obligatorias:**

- `accion_esperada`
- `efecto_buscado`
- `tipo_de_lamina`
- `horizonte_temporal`

**Regla de construcción:** incluir CTA solo cuando la función local lo requiere. Debe coincidir con acción esperada.

**Interacciones críticas:** en láminas intermedias puede ser CTA de deslizamiento; en cierre puede ser guardar, comentar, compartir, seguir, ir al perfil, hacer click o consumir parte siguiente.

**Validación local:** todo CTA debe estar conectado con acción esperada.

**Errores a evitar:** CTA genérico o incompatible.

---

## 8.15.8. `texto_visible.notas_de_coherencia`

**Función:** declarar por qué el texto visible es coherente con la lámina.

**Fuentes obligatorias:**

- función de texto
- ideas activadas
- densidad textual local
- tono y registro

**Regla de construcción:** explicar brevemente cómo titular, subtítulo, cuerpo, microcopy y CTA materializan función local y valores activos.

**Interacciones críticas:** debe conectar con justificación dimensional, pero en escala local.

**Validación local:** la nota debe permitir auditar decisiones textuales.

**Errores a evitar:** notas genéricas como “el texto es claro”.

---

# 8.16. Capa visual

## 8.16.1. `composicion_visual.tipo_de_recurso_visual`

**Función:** declarar qué tipo de recurso visual usa la lámina.

**Fuentes obligatorias:**

- `uso_de_imagen_generada`
- `jerarquia_grafica_local`
- `funcion_visual_local`
- `tipo_de_lamina`

**Regla de construcción:** seleccionar el tipo visual compatible: sin imagen, texto + imagen simbólica, flowchart, tabla, antes/después, caso/escena, visualización de datos, timeline, matriz, lista, fórmula conceptual, metáfora visual, ilustración, mini-infografía, plantilla, pregunta guía, contraste visual fuerte o CTA visual.

**Interacciones críticas:** si `uso_de_imagen_generada` fija un tipo específico, no sustituirlo por otro sin justificarlo como equivalencia funcional.

**Validación local:** el tipo debe coincidir con el valor regional activo o su distribución global.

**Errores a evitar:** elegir recurso visual por gusto estético.

---

## 8.16.2. `composicion_visual.descripcion_conceptual`

**Función:** explicar qué debe representar la imagen o estructura visual.

**Fuentes obligatorias:**

- ideas activadas localmente
- `funcion_visual_local`
- `grado_de_abstraccion`
- `estilo_de_composicion_visual_local`

**Regla de construcción:** describir la visualidad como representación de una relación conceptual, no como decoración.

**Interacciones críticas:** si el recurso es metáfora, escena o imagen simbólica, la descripción debe traducir la idea abstracta en imagen.

**Validación local:** la descripción debe conectar visualidad con idea activa.

**Errores a evitar:** describir fondos genéricos sin función conceptual.

---

## 8.16.3. `composicion_visual.estructura_visual`

**Función:** declarar la organización interna del recurso visual.

**Fuentes obligatorias:**

- `tipo_de_recurso_visual`
- `jerarquia_grafica_local`
- `funcion_predominante_de_los_recursos_complementarios`
- relaciones entre ideas activadas

**Regla de construcción:** especificar si la estructura es eje, tabla, matriz, bloques, flechas, capas, contraste, escena, plantilla, lista o composición mixta.

**Interacciones críticas:** diagrama, tabla, matriz, timeline y mini-infografía exigen estructura explícita.

**Validación local:** la estructura visual debe ser suficiente para que alguien pueda construir la imagen.

**Errores a evitar:** decir “imagen conceptual” sin estructura.

---

## 8.16.4. `composicion_visual.prompt_de_generacion`

**Función:** producir una instrucción utilizable para generar o diseñar la imagen/estructura.

**Fuentes obligatorias:**

- `descripcion_conceptual`
- `estructura_visual`
- `estilo_de_composicion_visual_local`
- `elementos_visuales_obligatorios`
- `elementos_visuales_prohibidos`
- `tono_editorial_local`

**Regla de construcción:** escribir un prompt claro, materializable y restringido. Debe incluir composición, elementos, estilo, propósito visual y prohibiciones relevantes.

**Interacciones críticas:** si la lámina usa tabla, flowchart, matriz o plantilla, el prompt debe pedir estructura legible, no solo estética.

**Validación local:** el prompt debe poder producir una imagen coherente con texto y función visual.

**Errores a evitar:** prompts vagos, demasiado narrativos o con elementos prohibidos.

---

## 8.16.5. `composicion_visual.elementos_visuales_obligatorios`

**Función:** declarar elementos visuales que deben aparecer.

**Fuentes obligatorias:**

- `tipo_de_recurso_visual`
- `regimen_de_iconografia_local`
- ideas activadas
- `estructura_visual`

**Regla de construcción:** listar elementos necesarios: ejes, flechas, columnas, nodos, personajes, símbolos, divisiones, números, espacios para rellenar, etc.

**Interacciones críticas:** si iconografía es funcional o sistemática, incluir iconos obligatorios con función.

**Validación local:** los elementos deben estar presentes en prompt o estructura.

**Errores a evitar:** listar elementos decorativos como obligatorios.

---

## 8.16.6. `composicion_visual.elementos_visuales_prohibidos`

**Función:** declarar elementos que no deben aparecer.

**Fuentes obligatorias:**

- `tono_editorial_local`
- `presencia_de_marca_local`
- `regimen_de_iconografia_local`
- `estilo_de_composicion_visual_local`
- restricciones del caso

**Regla de construcción:** listar prohibiciones visuales: caricatura, exceso de iconos, marcas no declaradas, elementos audiovisuales, ruido visual, símbolos contradictorios, texto ilegible, etc.

**Interacciones críticas:** si `sin_iconografia`, prohibir iconos; si marca ausente, prohibir logos.

**Validación local:** el prompt debe respetar estas prohibiciones.

**Errores a evitar:** dejar prohibiciones vacías cuando hay restricciones activas.

---

## 8.16.7. `composicion_visual.notas_de_coherencia`

**Función:** justificar la coherencia visual local.

**Fuentes obligatorias:**

- `funcion_visual_local`
- `tipo_de_recurso_visual`
- `ideas activadas`
- `criterio_de_coherencia_visual_textual`

**Regla de construcción:** explicar cómo el recurso visual representa la idea, sostiene el texto y cumple la función de la lámina.

**Interacciones críticas:** debe conectar con dependencia texto-imagen.

**Validación local:** la nota debe permitir auditar la decisión visual.

**Errores a evitar:** notas visuales genéricas.

---

# 8.17. Capa editorial local

## 8.17.1. `tono_editorial_local`

**Función:** declarar el tono usado en la lámina.

**Fuentes obligatorias:**

- `tono_editorial`
- `tipo_de_lamina`
- `funcion_de_la_lamina`

**Regla de construcción:** derivar tono local del tono global, ajustando intensidad según función local.

**Interacciones críticas:** una lámina de advertencia puede intensificar tono; una lámina de recapitulación puede suavizarlo.

**Validación local:** tono local debe ser compatible con tono global.

**Errores a evitar:** ruptura tonal sin razón.

---

## 8.17.2. `estilo_de_titular_local`

**Función:** declarar la forma de titular usada localmente.

**Fuentes obligatorias:**

- `estilo_de_titulares`
- `texto_visible.titular`
- `tipo_de_lamina`

**Regla de construcción:** copiar estilo global o declarar variación local compatible.

**Interacciones críticas:** si hay variación local, debe justificarse por función de lámina.

**Validación local:** titular debe corresponder al estilo local declarado.

**Errores a evitar:** declarar estilo diferente al titular construido.

---

## 8.17.3. `presencia_de_marca_local`

**Función:** declarar presencia marcaria en la lámina.

**Fuentes obligatorias:**

- `presencia_de_marca`
- `tipo_de_lamina`
- `accion_esperada`

**Regla de construcción:** aplicar presencia local compatible con valor global.

**Interacciones críticas:** cierre o CTA puede admitir más presencia si el régimen global lo permite.

**Validación local:** no puede exceder el nivel global sin justificación.

**Errores a evitar:** introducir marca donde el régimen la excluye.

---

## 8.17.4. `regimen_de_iconografia_local`

**Función:** declarar uso de iconografía en la lámina.

**Fuentes obligatorias:**

- `regimen_de_iconografia`
- `tipo_de_recurso_visual`
- `estructura_visual`

**Regla de construcción:** derivar el régimen local: sin iconografía, mínima, funcional o sistemática.

**Interacciones críticas:** en diagramas o infografías puede aumentar función iconográfica si el valor global lo permite.

**Validación local:** debe coincidir con elementos obligatorios/prohibidos.

**Errores a evitar:** iconografía decorativa no declarada.

---

## 8.17.5. `estilo_de_composicion_visual_local`

**Función:** declarar el estilo visual usado en la lámina.

**Fuentes obligatorias:**

- `estilo_de_composicion_visual`
- `tipo_de_recurso_visual`
- `jerarquia_grafica_local`

**Regla de construcción:** copiar o modular el estilo global según función local.

**Interacciones críticas:** si el recurso cambia de tipo por lámina, mantener coherencia visual por paleta conceptual, estructura o tono.

**Validación local:** debe coincidir con prompt y estructura visual.

**Errores a evitar:** cambiar estilo radicalmente entre láminas sin razón.

---

# 8.18. Capa de continuidad interlaminar

## 8.18.1. `continuidad_con_lamina_anterior`

**Función:** declarar cómo la lámina recibe la anterior.

**Fuentes obligatorias:**

- `dinamica_procesual.continuidad`
- `progresion_interlaminar`
- lámina anterior

**Regla de construcción:** indicar si continúa una pregunta, resuelve una tensión, amplía una idea, contrasta o cambia de bloque.

**Interacciones críticas:** en lámina 1 debe declararse como inicio sin anterior.

**Validación local:** debe ser coherente con la lámina anterior real.

**Errores a evitar:** continuidad genérica que no menciona relación específica.

---

## 8.18.2. `proyeccion_hacia_lamina_siguiente`

**Función:** declarar cómo la lámina empuja a la siguiente.

**Fuentes obligatorias:**

- `dinamica_procesual.continuidad`
- `regimen_de_activacion_atencional`
- lámina siguiente

**Regla de construcción:** indicar qué queda abierto, qué se anticipa o qué transición se prepara.

**Interacciones críticas:** en última lámina debe proyectar a CTA, acción o continuidad externa si aplica.

**Validación local:** debe coincidir con la función de la siguiente lámina.

**Errores a evitar:** prometer algo que la siguiente lámina no entrega.

---

## 8.18.3. `continuidad_argumental`

**Función:** declarar la continuidad lógica o conceptual.

**Fuentes obligatorias:**

- relaciones entre ideas
- `configuracion_discursiva`
- `configuracion_narrativa`

**Regla de construcción:** explicar la relación argumental: por tanto, sin embargo, además, por ejemplo, en contraste, entonces, etc.

**Interacciones críticas:** debe mantener coherencia con arquitectura macro.

**Validación local:** la secuencia debe poder leerse como argumento, explicación, método o progresión.

**Errores a evitar:** continuidad solo estética.

---

## 8.18.4. `continuidad_atencional`

**Función:** declarar cómo se mantiene la atención.

**Fuentes obligatorias:**

- `estado_atencional`
- `regimen_de_activacion_atencional`
- `efecto_buscado`

**Regla de construcción:** indicar qué mantiene interés: pregunta, tensión, promesa, revelación, contraste, utilidad o avance.

**Interacciones críticas:** si atención es fragmentada, continuidad atencional debe ser más explícita.

**Validación local:** debe existir razón para deslizar a la siguiente lámina.

**Errores a evitar:** asumir que el usuario continuará sin incentivo.

---

## 8.18.5. `continuidad_visual`

**Función:** declarar cómo se mantiene coherencia visual entre láminas.

**Fuentes obligatorias:**

- `estilo_de_composicion_visual`
- `jerarquia_grafica`
- `regimen_de_iconografia`
- lámina anterior/siguiente

**Regla de construcción:** declarar continuidad por composición, estructura, color conceptual, iconografía, tipo de recurso o disposición.

**Interacciones críticas:** si cada lámina usa recurso distinto, la continuidad debe estar en el sistema editorial.

**Validación local:** la secuencia debe verse como una misma pieza.

**Errores a evitar:** láminas visualmente inconexas.

---

## 8.18.6. `funcion_del_deslizamiento`

**Función:** declarar qué significa avanzar a la siguiente lámina.

**Fuentes obligatorias:**

- `arquitectura_macro`
- `progresion_interlaminar`
- `regimen_de_resolucion_buscada`

**Regla de construcción:** cada deslizamiento debe cumplir una función: revelar, contrastar, profundizar, demostrar, resolver, aplicar, recapitular o activar.

**Interacciones críticas:** si la pieza busca retención, cada deslizamiento debe aportar valor nuevo.

**Validación local:** avanzar no debe ser redundante.

**Errores a evitar:** deslizamiento como simple cambio de página.

---

# 8.19. Capa de justificación de composición

## 8.19.1. `justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`

**Función:** justificar cómo la identidad operativa configuró la pieza.

**Fuentes obligatorias:**

- `formulacion_canonica`
- `nivel_de_especificidad`
- `prioridad_de_intencion`

**Regla de construcción:** explicar cómo esos valores aparecen en identidad, macroestructura y láminas.

**Validación local:** debe mencionar decisiones concretas, no solo copiar valores.

**Errores a evitar:** justificación tautológica.

---

## 8.19.2. `justificaciones_dimensionales.dimension_orientacion_funcional_pragmatica`

**Función:** justificar función, efecto, acción y forma discursiva.

**Fuentes obligatorias:**

- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `configuracion_discursiva`

**Regla de construcción:** explicar cómo la lámina o secuencia capta, enseña, sintetiza, convierte, activa u orienta.

**Validación local:** debe conectar con función de lámina, CTA o cierre.

**Errores a evitar:** no explicar cómo se materializa la acción esperada.

---

## 8.19.3. `justificaciones_dimensionales.dimension_escala_temporal_y_resolucion_realizativa`

**Función:** justificar alcance, horizonte y resolución.

**Fuentes obligatorias:**

- `alcance_de_realizacion`
- `horizonte_temporal`
- `regimen_de_resolucion_buscada`

**Regla de construcción:** explicar si la secuencia actúa como pieza única, acceso, profundización, prueba, transición, validación o serie, y cuánto resuelve.

**Validación local:** debe conectar con cierre y continuidad.

**Errores a evitar:** ignorar serialidad o resolución diferida.

---

## 8.19.4. `justificaciones_dimensionales.dimension_acoplamiento_receptoral`

**Función:** justificar ajuste al receptor.

**Fuentes obligatorias:**

- `publico_objetivo_inmediato`
- `adecuacion_lexico_formulativa`

**Regla de construcción:** explicar cómo se ajustaron registro, densidad, abstracción, accesibilidad y variación.

**Validación local:** debe reflejarse en texto visible y carga conceptual.

**Errores a evitar:** justificar con “es claro” sin vincular a valores.

---

## 8.19.5. `justificaciones_dimensionales.dimension_dinamica_atencional_y_procesual`

**Función:** justificar atención, activación y proceso.

**Fuentes obligatorias:**

- `estado_atencional`
- `regimen_de_activacion_atencional`
- `dinamica_procesual`

**Regla de construcción:** explicar apertura, continuidad, fricción, explicitud, compresión y recapitulación.

**Validación local:** debe conectar con portada, continuidad y cierre.

**Errores a evitar:** no explicar cómo se sostiene el deslizamiento.

---

## 8.19.6. `justificaciones_dimensionales.dimension_construccion_del_caso`

**Función:** justificar uso de construcción conceptual y configuración narrativa.

**Fuentes obligatorias:**

- ideas activas globales y locales
- relaciones entre ideas
- `configuracion_narrativa`

**Regla de construcción:** explicar por qué esas ideas aparecen en esa lámina o bloque y cómo se relacionan.

**Validación local:** debe demostrar que no se inventó contenido externo.

**Errores a evitar:** ocultar la procedencia de las ideas.

---

## 8.19.7. `justificaciones_dimensionales.dimension_comparecencia_performativa`

**Función:** justificar tono visual-editorial, titulares, densidad, marca, iconografía y composición.

**Fuentes obligatorias:**

- `rama_visual_editorial` completa

**Regla de construcción:** explicar cómo los valores visual-editoriales aparecen localmente.

**Validación local:** debe conectar con capa textual, visual y editorial.

**Errores a evitar:** tratar la comparecencia como estética libre.

---

## 8.19.8. `justificaciones_dimensionales.dimension_marco_de_materializacion`

**Función:** justificar plataforma, aplicación y clase de materialización.

**Fuentes obligatorias:**

- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`

**Regla de construcción:** explicar cómo la lámina o secuencia se mantiene como secuencia laminar visual compatible con el marco declarado.

**Validación local:** no debe introducir rasgos ajenos al marco material.

**Errores a evitar:** convertir plataforma en realización distinta.

---

## 8.19.9. `justificaciones_dimensionales.dimension_composicion_segmental_de_la_salida`

**Función:** justificar cantidad de láminas y arquitectura macro.

**Fuentes obligatorias:**

- `arquitectura_macro`
- `cantidad_de_laminas`
- `segmentacion_interna`

**Regla de construcción:** explicar por qué la lámina ocupa su posición y cómo contribuye a la arquitectura.

**Validación local:** debe coincidir con segmentación y número de lámina.

**Errores a evitar:** justificar una lámina sin relación con arquitectura global.

---

## 8.19.10. `justificaciones_dimensionales.dimension_recursos_complementarios_de_manifestacion`

**Función:** justificar texto, imagen, video, audio, función de recursos y dependencia.

**Fuentes obligatorias:**

- `uso_de_texto_en_pantalla`
- `uso_de_imagen_generada`
- `uso_de_video_generado`
- `uso_de_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`

**Regla de construcción:** explicar cómo los recursos complementarios fueron usados, limitados o excluidos.

**Validación local:** debe demostrar que video y audio no se usaron si sus valores son `sin_video_generado` y `sin_audio_generado`.

**Errores a evitar:** omitir justificación de recursos ausentes cuando la ausencia es una restricción regional.

---

# 8.20. Checklist local de ejecución de sección 8

Antes de pasar a matrices o validadores finales, el chat debe comprobar:

```txt
cabecera:
  - todos los campos de cabecera están llenos
  - todos los valores copiados corresponden a la instancia contextual
  - no hay valores inventados

macroestructura:
  - cantidad de láminas coincide con rango/cantidad declarada
  - arquitectura macro se traduce en segmentación
  - recursos globales gobiernan las láminas

láminas:
  - cada lámina tiene identidad local
  - cada lámina activa ideas
  - cada lámina tiene composición local
  - cada lámina tiene texto visible coherente con régimen textual
  - cada lámina tiene visualidad coherente con régimen visual
  - cada lámina tiene editorialidad local
  - cada lámina declara continuidad
  - cada lámina justifica las 10 dimensiones

recursos:
  - no hay video generado si el valor es sin_video_generado
  - no hay audio generado si el valor es sin_audio_generado
  - imagen, texto e iconografía respetan sus regímenes

trazabilidad:
  - cada valor activo afecta al menos un campo de salida
  - cada campo de salida puede rastrearse a fuentes obligatorias
```

---

## 9. Matrices de interacción obligatorias

Estas matrices resuelven combinaciones de valores. Si dos valores activos parecen competir, gana la matriz más específica y la decisión debe justificarse.

### 9.1 `cantidad_de_laminas × arquitectura_macro`

| Cantidad | Arquitectura                    | Regla de distribución                                                                                     |
| -------- | ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `2`      | `apertura_desarrollo_cierre`    | Comprimir en dos funciones: lámina 1 abre/declara tensión; lámina 2 resuelve, remata o activa.            |
| `2`      | `apertura_lista_cierre`         | Comprimir en dos funciones: lámina 1 abre/declara tensión; lámina 2 resuelve, remata o activa.            |
| `2`      | `apertura_contraste_resolucion` | Comprimir en dos funciones: lámina 1 abre/declara tensión; lámina 2 resuelve, remata o activa.            |
| `2`      | `apertura_secuencia_remate`     | Comprimir en dos funciones: lámina 1 abre/declara tensión; lámina 2 resuelve, remata o activa.            |
| `2`      | `apertura_desarrollo_remate`    | Comprimir en dos funciones: lámina 1 abre/declara tensión; lámina 2 resuelve, remata o activa.            |
| `3_a_5`  | `apertura_desarrollo_cierre`    | Asignar portada, desarrollo mínimo y cierre; sólo añadir láminas si una idea nuclear o relación lo exige. |
| `3_a_5`  | `apertura_lista_cierre`         | Asignar portada, desarrollo mínimo y cierre; sólo añadir láminas si una idea nuclear o relación lo exige. |
| `3_a_5`  | `apertura_contraste_resolucion` | Asignar portada, desarrollo mínimo y cierre; sólo añadir láminas si una idea nuclear o relación lo exige. |
| `3_a_5`  | `apertura_secuencia_remate`     | Asignar portada, desarrollo mínimo y cierre; sólo añadir láminas si una idea nuclear o relación lo exige. |
| `3_a_5`  | `apertura_desarrollo_remate`    | Asignar portada, desarrollo mínimo y cierre; sólo añadir láminas si una idea nuclear o relación lo exige. |
| `6_a_8`  | `apertura_desarrollo_cierre`    | Distribuir desarrollo por capas; reservar lámina de bisagra si hay contraste, método o transición.        |
| `6_a_8`  | `apertura_lista_cierre`         | Distribuir desarrollo por capas; reservar lámina de bisagra si hay contraste, método o transición.        |
| `6_a_8`  | `apertura_contraste_resolucion` | Distribuir desarrollo por capas; reservar lámina de bisagra si hay contraste, método o transición.        |
| `6_a_8`  | `apertura_secuencia_remate`     | Distribuir desarrollo por capas; reservar lámina de bisagra si hay contraste, método o transición.        |
| `6_a_8`  | `apertura_desarrollo_remate`    | Distribuir desarrollo por capas; reservar lámina de bisagra si hay contraste, método o transición.        |

### 9.2 `funcion_dominante × accion_esperada`

- Si la función dominante es `captar_atencion`, el CTA no debe aparecer antes de que exista recompensa mínima de comprensión.
- Si la función dominante es `enseñar`, el CTA debe ser coherente con aprendizaje: guardar, seguir, consumir parte siguiente o comentar duda.
- Si la función dominante es `convertir`, el CTA debe estar en cierre y puede tener refuerzo visual.
- Si la función dominante es `abrir_serie`, `continuar_serie` o `cerrar_serie`, la acción esperada debe conectar con continuidad, consumo siguiente o recapitulación.

### 9.3 `uso_de_imagen_generada × jerarquia_grafica`

- Si `uso_de_imagen_generada = sin_imagen_generada`, la jerarquía gráfica no puede depender de imagen generada; debe resolverse con texto, composición o estructura.
- Si `jerarquia_grafica = diagrama_dominante`, los valores como `flowchart_o_diagrama_de_decision`, `tabla_comparativa`, `matriz_o_mapa_de_posicionamiento`, `timeline_o_secuencia_temporal` y `mini_infografia` tienen prioridad visual natural.
- Si `jerarquia_grafica = imagen_dominante_texto_secundario`, los valores simbólicos o escénicos deben cargar la idea principal y el texto sólo anclar lectura.
- Si `jerarquia_grafica = titular_dominante`, el recurso visual no debe competir con el titular.

### 9.4 `publico_objetivo_inmediato × adecuacion_lexico_formulativa`

- Audiencia fría o sin conocimiento previo exige mayor accesibilidad y menor densidad terminológica.
- Audiencia caliente o personas que ya comprenden admite mayor abstracción, terminología y compresión.
- Si hay conflicto, gana la legibilidad del receptor sobre la preferencia estilística.

### 9.5 `regimen_de_resolucion_buscada × alcance_de_realizacion`

- `pieza_unica` no debe cerrarse con resolución totalmente diferida.
- `apertura_de_serie` puede usar resolución parcial, diferida o abierta a continuidad.
- `cierre_de_serie` debe tender a recapitulación y resolución explícita.
- `pieza_de_transicion` puede resolver parcialmente y proyectar la siguiente interpretación.

---

## 10. Validadores finales

### Validador de entrada

Debe existir un `ART_` y una `construccion_conceptual`. Si falta uno, no se puede construir una manifestación completa.

### Validador regional

Todo valor del ensamblaje debe existir en la Biblioteca Integral de Valores. Si no existe, se marca como valor no regional.

### Validador de clase material

`clase_de_materializacion` debe ser `secuencia_laminar_visual`.

### Validador de plataforma

`plataforma` y `aplicacion_de_plataforma` deben estar en los valores habilitados. No se crean regiones separadas por plataforma.

### Validador de salida

Todos los bloques de `manifestacion_codominial_carousel` deben estar presentes.

### Validador de láminas

El número real de láminas debe coincidir con `cantidad_de_laminas` o con la elección concreta dentro del rango declarado.

### Validador de ideas

Toda idea nuclear debe estar activada globalmente y en al menos una lámina. Toda omisión debe justificarse.

### Validador de relaciones

Toda relación conceptual usada debe aparecer en continuidad argumental o en relación con el caso.

### Validador de recursos

Los recursos visuales/textuales no deben ser decorativos; deben tener función y coherencia visual-textual.

### Validador de cobertura dimensional

Cada una de las 10 dimensiones debe aparecer en la justificación de composición de cada lámina o en una justificación global si no aplica localmente.

### Validador de no suposición

Ningún campo obligatorio puede llenarse con inferencias no declaradas. Los faltantes se registran como incidencias.

### Validador de no audiovisualidad

No introducir voz, audio, escena temporal, toma, encuadre audiovisual o edición de video como si fueran unidades compositivas de carousel.

---

## 11. Biblioteca integral de valores regionales

Esta biblioteca declara todos los valores/entradas encontrados en las secciones `Valores habilitados` de la instancia regional. Total cubierto: **210** entradas operativas. La instancia regional declara 209 valores referenciados directamente; aquí se incluye además `coleccion_de_ideas_activas` como entrada estructural de construcción conceptual para que no quede sin tratamiento.

### 11.0. Regla semántica obligatoria para toda la biblioteca

Cada valor debe leerse como **operador composicional**, no como etiqueta. El protocolo debe evitar las fórmulas genéricas de intensidad y sustituirlas por una decisión concreta en la manifestación.

Formato de cada ficha:

```txt
valor
  ruta de entrada
  id regional
  resumen regional
  operación semántica obligatoria
  campos de salida afectados
  uso mínimo exigido
  validación local
```

---

### dimension_acoplamiento_receptoral

#### `adecuacion_lexico_formulativa.accesibilidad_lexica`

**Función semántica del campo:** Regula qué tan inmediatamente comprensible debe ser el léxico para el receptor previsto. No mide valor estético; mide esfuerzo de decodificación verbal.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.accesibilidad_lexica`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-baja-baja`
- **Resumen regional:** Valor baja declarado para el campo interno accesibilidad_lexica.
- **Operación semántica obligatoria:** Permite léxico menos accesible o más especializado, pero obliga a compensar con estructura clara, definición local, ejemplo o anclaje visual cuando el receptor no sea avanzado.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.accesibilidad_lexica`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Permite léxico menos accesible o más especializado, pero obliga a compensar con estructura clara, definición local, ejemplo o anclaje visual cuando el receptor no sea avanzado."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Permite léxico menos accesible o más especializado, pero obliga a compensar con estructura clara, definición local, ejemplo o anclaje visual cuando el receptor no sea avanzado."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-media-media`
- **Resumen regional:** Valor media declarado para el campo interno accesibilidad_lexica.
- **Operación semántica obligatoria:** Usa léxico comprensible con algunos términos específicos; cada término relevante debe tener contexto suficiente para no cortar la lectura.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.accesibilidad_lexica`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Usa léxico comprensible con algunos términos específicos; cada término relevante debe tener contexto suficiente para no cortar la lectura."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Usa léxico comprensible con algunos términos específicos; cada término relevante debe tener contexto suficiente para no cortar la lectura."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.accesibilidad_lexica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-accesibilidad_lexica-alta-alta`
- **Resumen regional:** Valor alta declarado para el campo interno accesibilidad_lexica.
- **Operación semántica obligatoria:** Prioriza palabras transparentes, frases directas y baja carga de decodificación; evita tecnicismos no explicados y favorece comprensión inmediata.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.accesibilidad_lexica`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Prioriza palabras transparentes, frases directas y baja carga de decodificación; evita tecnicismos no explicados y favorece comprensión inmediata."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Prioriza palabras transparentes, frases directas y baja carga de decodificación; evita tecnicismos no explicados y favorece comprensión inmediata."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `adecuacion_lexico_formulativa.densidad_terminologica`

**Función semántica del campo:** Regula la cantidad de términos especializados o conceptos técnicos que pueden concentrarse en el texto visible.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.densidad_terminologica`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
- `capa_de_laminas.laminas.composicion_local.densidad_textual_local`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-baja-baja`
- **Resumen regional:** Valor baja declarado para el campo interno densidad_terminologica.
- **Operación semántica obligatoria:** Reduce la cantidad de términos técnicos; usa lenguaje común y, si aparece un término especializado, lo convierte en eje explícito de la lámina.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.densidad_terminologica`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Reduce la cantidad de términos técnicos; usa lenguaje común y, si aparece un término especializado, lo convierte en eje explícito de la lámina."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Reduce la cantidad de términos técnicos; usa lenguaje común y, si aparece un término especializado, lo convierte en eje explícito de la lámina."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-media-media`
- **Resumen regional:** Valor media declarado para el campo interno densidad_terminologica.
- **Operación semántica obligatoria:** Admite términos técnicos seleccionados; distribúyelos sin acumulación y acompáñalos con explicación breve o contraste.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.densidad_terminologica`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Admite términos técnicos seleccionados; distribúyelos sin acumulación y acompáñalos con explicación breve o contraste."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Admite términos técnicos seleccionados; distribúyelos sin acumulación y acompáñalos con explicación breve o contraste."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.densidad_terminologica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-densidad_terminologica-alta-alta`
- **Resumen regional:** Valor alta declarado para el campo interno densidad_terminologica.
- **Operación semántica obligatoria:** Permite mayor concentración terminológica; requiere jerarquía visual, definiciones operativas o láminas de soporte para evitar opacidad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.densidad_terminologica`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Permite mayor concentración terminológica; requiere jerarquía visual, definiciones operativas o láminas de soporte para evitar opacidad."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Permite mayor concentración terminológica; requiere jerarquía visual, definiciones operativas o láminas de soporte para evitar opacidad."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `adecuacion_lexico_formulativa.grado_de_abstraccion`

**Función semántica del campo:** Regula si la pieza trabaja con ejemplos concretos, categorías intermedias o formulaciones abstractas.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.grado_de_abstraccion`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.descripcion_conceptual`
- `capa_de_laminas.laminas.relacion_con_el_caso`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `concreto`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-concreto-concreto`
- **Resumen regional:** Valor concreto declarado para el campo interno grado_de_abstraccion.
- **Operación semántica obligatoria:** Construye la lámina desde casos, escenas, objetos, acciones o ejemplos visibles; la idea debe aterrizarse antes de generalizar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.grado_de_abstraccion`: "Debe registrar `concreto` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.descripcion_conceptual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Construye la lámina desde casos, escenas, objetos, acciones o ejemplos visibles; la idea debe aterrizarse antes de generalizar."
  - debe afectar `capa_de_laminas.laminas.relacion_con_el_caso`: "Debe modificar la distribución de ideas activas, roles conceptuales o relaciones entre ideas aplicando esta regla: Construye la lámina desde casos, escenas, objetos, acciones o ejemplos visibles; la idea debe aterrizarse antes de generalizar."
- **Validación local:** La salida es válida sólo si `concreto` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `intermedio`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-intermedio-intermedio`
- **Resumen regional:** Valor intermedio declarado para el campo interno grado_de_abstraccion.
- **Operación semántica obligatoria:** Combina ejemplo y categoría; permite conceptos, pero cada abstracción debe estar conectada con una situación o función reconocible.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.grado_de_abstraccion`: "Debe registrar `intermedio` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.descripcion_conceptual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combina ejemplo y categoría; permite conceptos, pero cada abstracción debe estar conectada con una situación o función reconocible."
  - debe afectar `capa_de_laminas.laminas.relacion_con_el_caso`: "Debe modificar la distribución de ideas activas, roles conceptuales o relaciones entre ideas aplicando esta regla: Combina ejemplo y categoría; permite conceptos, pero cada abstracción debe estar conectada con una situación o función reconocible."
- **Validación local:** La salida es válida sólo si `intermedio` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `abstracto`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.grado_de_abstraccion`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-grado_de_abstraccion-abstracto-abstracto`
- **Resumen regional:** Valor abstracto declarado para el campo interno grado_de_abstraccion.
- **Operación semántica obligatoria:** Permite formulación conceptual alta; exige estructura, definición o diagrama para que la abstracción no se vuelva decorativa.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.grado_de_abstraccion`: "Debe registrar `abstracto` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.descripcion_conceptual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Permite formulación conceptual alta; exige estructura, definición o diagrama para que la abstracción no se vuelva decorativa."
  - debe afectar `capa_de_laminas.laminas.relacion_con_el_caso`: "Debe modificar la distribución de ideas activas, roles conceptuales o relaciones entre ideas aplicando esta regla: Permite formulación conceptual alta; exige estructura, definición o diagrama para que la abstracción no se vuelva decorativa."
- **Validación local:** La salida es válida sólo si `abstracto` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `adecuacion_lexico_formulativa.registro_predominante`

**Función semántica del campo:** Regula el modo verbal dominante con el que la pieza habla: cercano, pedagógico, técnico, analítico, institucional o híbrido.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`
- `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `coloquial_controlado`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-coloquial_controlado-coloquial_controlado`
- **Resumen regional:** Valor coloquial_controlado declarado para el campo interno registro_predominante.
- **Operación semántica obligatoria:** Usa cercanía verbal sin perder precisión; evita exceso técnico y también evita informalidad que debilite autoridad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`: "Debe registrar `coloquial_controlado` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Usa cercanía verbal sin perder precisión; evita exceso técnico y también evita informalidad que debilite autoridad."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Usa cercanía verbal sin perder precisión; evita exceso técnico y también evita informalidad que debilite autoridad."
- **Validación local:** La salida es válida sólo si `coloquial_controlado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pedagogico`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-pedagogico-pedagogico`
- **Resumen regional:** Valor pedagogico declarado para el campo interno registro_predominante.
- **Operación semántica obligatoria:** Organiza el texto para enseñar: secuencia clara, definiciones breves, pasos, ejemplos y recapitulación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`: "Debe registrar `pedagogico` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Organiza el texto para enseñar: secuencia clara, definiciones breves, pasos, ejemplos y recapitulación."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Organiza el texto para enseñar: secuencia clara, definiciones breves, pasos, ejemplos y recapitulación."
- **Validación local:** La salida es válida sólo si `pedagogico` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `tecnico`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-tecnico-tecnico`
- **Resumen regional:** Valor tecnico declarado para el campo interno registro_predominante.
- **Operación semántica obligatoria:** Usa lenguaje especializado con control de legibilidad; prioriza exactitud sobre impacto retórico.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`: "Debe registrar `tecnico` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Usa lenguaje especializado con control de legibilidad; prioriza exactitud sobre impacto retórico."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Usa lenguaje especializado con control de legibilidad; prioriza exactitud sobre impacto retórico."
- **Validación local:** La salida es válida sólo si `tecnico` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `analitico`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-analitico-analitico`
- **Resumen regional:** Valor analitico declarado para el campo interno registro_predominante.
- **Operación semántica obligatoria:** Presenta distinciones, relaciones causales y lectura estructural; evita simplificación excesiva.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`: "Debe registrar `analitico` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Presenta distinciones, relaciones causales y lectura estructural; evita simplificación excesiva."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Presenta distinciones, relaciones causales y lectura estructural; evita simplificación excesiva."
- **Validación local:** La salida es válida sólo si `analitico` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `institucional`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-institucional-institucional`
- **Resumen regional:** Valor institucional declarado para el campo interno registro_predominante.
- **Operación semántica obligatoria:** Mantiene tono formal, estable y confiable; evita provocación innecesaria y lenguaje demasiado íntimo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`: "Debe registrar `institucional` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Mantiene tono formal, estable y confiable; evita provocación innecesaria y lenguaje demasiado íntimo."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Mantiene tono formal, estable y confiable; evita provocación innecesaria y lenguaje demasiado íntimo."
- **Validación local:** La salida es válida sólo si `institucional` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `hibrido`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.registro_predominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-registro_predominante-hibrido-hibrido`
- **Resumen regional:** Valor hibrido declarado para el campo interno registro_predominante.
- **Operación semántica obligatoria:** Combina registros, pero debe declarar una dominante local por lámina para no producir mezcla incoherente.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.registro_predominante`: "Debe registrar `hibrido` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Combina registros, pero debe declarar una dominante local por lámina para no producir mezcla incoherente."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Combina registros, pero debe declarar una dominante local por lámina para no producir mezcla incoherente."
- **Validación local:** La salida es válida sólo si `hibrido` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `adecuacion_lexico_formulativa.variacion_lexica`

**Función semántica del campo:** Regula cuánto varían las palabras para nombrar los mismos conceptos a lo largo de la secuencia.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.variacion_lexica`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-baja-baja`
- **Resumen regional:** Valor baja declarado para el campo interno variacion_lexica.
- **Operación semántica obligatoria:** Repite términos clave de forma estable para fijar memoria y evitar ambigüedad; útil cuando la pieza introduce una categoría nueva.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.variacion_lexica`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Repite términos clave de forma estable para fijar memoria y evitar ambigüedad; útil cuando la pieza introduce una categoría nueva."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Repite términos clave de forma estable para fijar memoria y evitar ambigüedad; útil cuando la pieza introduce una categoría nueva."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-media-media`
- **Resumen regional:** Valor media declarado para el campo interno variacion_lexica.
- **Operación semántica obligatoria:** Alterna vocabulario sin perder anclas conceptuales; permite fluidez manteniendo términos centrales constantes.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.variacion_lexica`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Alterna vocabulario sin perder anclas conceptuales; permite fluidez manteniendo términos centrales constantes."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Alterna vocabulario sin perder anclas conceptuales; permite fluidez manteniendo términos centrales constantes."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.adecuacion_lexico_formulativa.variacion_lexica`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-adecuacion_lexico_formulativa-variacion_lexica-alta-alta`
- **Resumen regional:** Valor alta declarado para el campo interno variacion_lexica.
- **Operación semántica obligatoria:** Admite reformulaciones y sinónimos; exige notas de coherencia o recurrencias visuales para evitar que parezcan conceptos distintos.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.adecuacion_lexico_formulativa.variacion_lexica`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Admite reformulaciones y sinónimos; exige notas de coherencia o recurrencias visuales para evitar que parezcan conceptos distintos."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Admite reformulaciones y sinónimos; exige notas de coherencia o recurrencias visuales para evitar que parezcan conceptos distintos."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `publico_objetivo_inmediato`

**Función semántica del campo:** Define el receptor inmediato que debe poder comprender, interesarse o actuar ante el carousel.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
- `capa_de_laminas.laminas.composicion_local.densidad_textual_local`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `audiencia_fria`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_fria-audiencia_fria`
- **Resumen regional:** Valor audiencia_fria declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Debe abrir con contexto mínimo, reducir presuposiciones y explicar por qué el tema importa antes de profundizar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `audiencia_fria` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Debe abrir con contexto mínimo, reducir presuposiciones y explicar por qué el tema importa antes de profundizar."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Debe abrir con contexto mínimo, reducir presuposiciones y explicar por qué el tema importa antes de profundizar."
- **Validación local:** La salida es válida sólo si `audiencia_fria` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `audiencia_tibia`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_tibia-audiencia_tibia`
- **Resumen regional:** Valor audiencia_tibia declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Puede asumir interés parcial; debe conectar rápido con una promesa de utilidad o aclaración.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `audiencia_tibia` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Puede asumir interés parcial; debe conectar rápido con una promesa de utilidad o aclaración."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Puede asumir interés parcial; debe conectar rápido con una promesa de utilidad o aclaración."
- **Validación local:** La salida es válida sólo si `audiencia_tibia` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `audiencia_caliente`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-audiencia_caliente-audiencia_caliente`
- **Resumen regional:** Valor audiencia_caliente declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Puede avanzar con mayor densidad, continuidad de serie y llamados a acción más directos.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `audiencia_caliente` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Puede avanzar con mayor densidad, continuidad de serie y llamados a acción más directos."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Puede avanzar con mayor densidad, continuidad de serie y llamados a acción más directos."
- **Validación local:** La salida es válida sólo si `audiencia_caliente` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `seguidores_actuales`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-seguidores_actuales-seguidores_actuales`
- **Resumen regional:** Valor seguidores_actuales declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Puede usar códigos, series o conceptos ya trabajados, pero debe dejar suficientes anclas para lectura autónoma.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `seguidores_actuales` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Puede usar códigos, series o conceptos ya trabajados, pero debe dejar suficientes anclas para lectura autónoma."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Puede usar códigos, series o conceptos ya trabajados, pero debe dejar suficientes anclas para lectura autónoma."
- **Validación local:** La salida es válida sólo si `seguidores_actuales` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `personas_sin_conocimiento_previos`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_sin_conocimiento_previos-personas_sin_conocimiento_previos`
- **Resumen regional:** Valor personas_sin_conocimiento_previos declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Debe construir desde definiciones, ejemplos y baja fricción; no debe exigir vocabulario previo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `personas_sin_conocimiento_previos` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Debe construir desde definiciones, ejemplos y baja fricción; no debe exigir vocabulario previo."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Debe construir desde definiciones, ejemplos y baja fricción; no debe exigir vocabulario previo."
- **Validación local:** La salida es válida sólo si `personas_sin_conocimiento_previos` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `personas_con_interes_previos`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_con_interes_previos-personas_con_interes_previos`
- **Resumen regional:** Valor personas_con_interes_previos declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Puede entrar con una tensión específica y profundizar sin justificar todo desde cero.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `personas_con_interes_previos` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Puede entrar con una tensión específica y profundizar sin justificar todo desde cero."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Puede entrar con una tensión específica y profundizar sin justificar todo desde cero."
- **Validación local:** La salida es válida sólo si `personas_con_interes_previos` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `personas_que_no_comprenden`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_no_comprenden-personas_que_no_comprenden`
- **Resumen regional:** Valor personas_que_no_comprenden declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Debe diagnosticar la confusión, separar conceptos y usar láminas de clarificación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `personas_que_no_comprenden` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Debe diagnosticar la confusión, separar conceptos y usar láminas de clarificación."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Debe diagnosticar la confusión, separar conceptos y usar láminas de clarificación."
- **Validación local:** La salida es válida sólo si `personas_que_no_comprenden` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `personas_que_ya_comprenden`

- **Ruta de entrada:** `dimension_acoplamiento_receptoral.publico_objetivo_inmediato`
- **id regional:** `grafo_de_regiones-grafo_dimension_acoplamiento_receptoral-publico_objetivo_inmediato-personas_que_ya_comprenden-personas_que_ya_comprenden`
- **Resumen regional:** Valor personas_que_ya_comprenden declarado para el campo publico_objetivo_inmediato.
- **Operación semántica obligatoria:** Debe aportar matiz, método, contraste o avance; evita explicar demasiado lo básico.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.acoplamiento_receptoral_resultante.publico_objetivo_inmediato`: "Debe registrar `personas_que_ya_comprenden` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Debe aportar matiz, método, contraste o avance; evita explicar demasiado lo básico."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Debe aportar matiz, método, contraste o avance; evita explicar demasiado lo básico."
- **Validación local:** La salida es válida sólo si `personas_que_ya_comprenden` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_comparecencia_performativa

#### `rama_visual_editorial.densidad_textual_visible`

**Función semántica del campo:** Regula la cantidad de texto visible admisible por lámina y su distribución dentro de la secuencia.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible`
- `capa_de_laminas.laminas.composicion_local.densidad_textual_local`
- `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-baja-baja`
- **Resumen regional:** Valor que indica que cada lámina debe contener poco texto visible.
- **Operación semántica obligatoria:** Usa poco texto: titulares fuertes, frases núcleo, microcopy y apoyo visual. No intentes explicar todo en una lámina.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Usa poco texto: titulares fuertes, frases núcleo, microcopy y apoyo visual. No intentes explicar todo en una lámina."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usa poco texto: titulares fuertes, frases núcleo, microcopy y apoyo visual. No intentes explicar todo en una lámina."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-media-media`
- **Resumen regional:** Valor que indica una cantidad moderada de texto por lámina.
- **Operación semántica obligatoria:** Equilibra titular, explicación breve y apoyo visual; cada lámina puede contener una idea desarrollada con moderación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Equilibra titular, explicación breve y apoyo visual; cada lámina puede contener una idea desarrollada con moderación."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Equilibra titular, explicación breve y apoyo visual; cada lámina puede contener una idea desarrollada con moderación."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-alta-alta`
- **Resumen regional:** Valor que permite una mayor carga textual por lámina.
- **Operación semántica obligatoria:** Permite texto denso, pero exige jerarquía, secciones internas y respiración visual para que no parezca documento comprimido.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Permite texto denso, pero exige jerarquía, secciones internas y respiración visual para que no parezca documento comprimido."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Permite texto denso, pero exige jerarquía, secciones internas y respiración visual para que no parezca documento comprimido."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `variable_controlada`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.densidad_textual_visible`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-densidad_textual_visible-variable_controlada-variable_controlada`
- **Resumen regional:** Valor que permite variar la densidad textual entre láminas, pero siguiendo una lógica explícita.
- **Operación semántica obligatoria:** Alterna láminas ligeras y densas según función local; la variación debe justificarse por arquitectura, no por azar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.densidad_textual_visible`: "Debe registrar `variable_controlada` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Alterna láminas ligeras y densas según función local; la variación debe justificarse por arquitectura, no por azar."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Alterna láminas ligeras y densas según función local; la variación debe justificarse por arquitectura, no por azar."
- **Validación local:** La salida es válida sólo si `variable_controlada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `rama_visual_editorial.estilo_de_composicion_visual`

**Función semántica del campo:** Define la gramática visual-editorial dominante de la pieza.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`
- `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `limpio_minimal`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-limpio_minimal-limpio_minimal`
- **Resumen regional:** Valor que prioriza pocos elementos, mucho espacio visual y lectura inmediata.
- **Operación semántica obligatoria:** Prioriza espacio, pocos elementos y lectura inmediata; todo elemento visual debe tener función clara.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`: "Debe registrar `limpio_minimal` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Prioriza espacio, pocos elementos y lectura inmediata; todo elemento visual debe tener función clara."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Prioriza espacio, pocos elementos y lectura inmediata; todo elemento visual debe tener función clara."
- **Validación local:** La salida es válida sólo si `limpio_minimal` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `editorial_sobrio`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-editorial_sobrio-editorial_sobrio`
- **Resumen regional:** Valor que adopta una apariencia cercana a una publicación editorial, ensayo visual o documento analítico.
- **Operación semántica obligatoria:** Construye apariencia de pieza analítica o documento visual; usa orden, márgenes, títulos y composición estable.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`: "Debe registrar `editorial_sobrio` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Construye apariencia de pieza analítica o documento visual; usa orden, márgenes, títulos y composición estable."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Construye apariencia de pieza analítica o documento visual; usa orden, márgenes, títulos y composición estable."
- **Validación local:** La salida es válida sólo si `editorial_sobrio` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `didactico_visual`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-didactico_visual-didactico_visual`
- **Resumen regional:** Valor que organiza la lámina para enseñar algo de manera clara.
- **Operación semántica obligatoria:** Organiza la lámina para enseñar: pasos, flechas, señalización, ejemplos y estructura de lectura.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`: "Debe registrar `didactico_visual` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Organiza la lámina para enseñar: pasos, flechas, señalización, ejemplos y estructura de lectura."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Organiza la lámina para enseñar: pasos, flechas, señalización, ejemplos y estructura de lectura."
- **Validación local:** La salida es válida sólo si `didactico_visual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `conceptual_simbolico`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-conceptual_simbolico-conceptual_simbolico`
- **Resumen regional:** Valor que usa imágenes, metáforas o símbolos para representar ideas abstractas.
- **Operación semántica obligatoria:** Usa símbolos, metáforas o escenas abstractas para hacer recordable una idea.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`: "Debe registrar `conceptual_simbolico` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Usa símbolos, metáforas o escenas abstractas para hacer recordable una idea."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usa símbolos, metáforas o escenas abstractas para hacer recordable una idea."
- **Validación local:** La salida es válida sólo si `conceptual_simbolico` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `infografico`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-infografico-infografico`
- **Resumen regional:** Valor que combina información, estructura visual, iconos, flechas, datos, categorías o procesos.
- **Operación semántica obligatoria:** Combina datos, iconos, flechas, categorías o relaciones visuales; debe ser legible como mapa de información.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`: "Debe registrar `infografico` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Combina datos, iconos, flechas, categorías o relaciones visuales; debe ser legible como mapa de información."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combina datos, iconos, flechas, categorías o relaciones visuales; debe ser legible como mapa de información."
- **Validación local:** La salida es válida sólo si `infografico` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `contraste_fuerte`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_composicion_visual`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_composicion_visual-contraste_fuerte-contraste_fuerte`
- **Resumen regional:** Valor que organiza la composición mediante oposición visual clara.
- **Operación semántica obligatoria:** Organiza la composición por oposición visible: antes/después, A/B, correcto/incorrecto, mito/realidad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_composicion_visual`: "Debe registrar `contraste_fuerte` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_composicion_visual_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Organiza la composición por oposición visible: antes/después, A/B, correcto/incorrecto, mito/realidad."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Organiza la composición por oposición visible: antes/después, A/B, correcto/incorrecto, mito/realidad."
- **Validación local:** La salida es válida sólo si `contraste_fuerte` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `rama_visual_editorial.estilo_de_titulares`

**Función semántica del campo:** Define la forma retórica de los titulares que abren y orientan la lectura de las láminas.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`
- `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `pregunta_directa`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-pregunta_directa-pregunta_directa`
- **Resumen regional:** Valor en el que el titular se formula como una pregunta clara que activa reflexión o curiosidad.
- **Operación semántica obligatoria:** El titular debe formular una pregunta clara que active tensión o reflexión y que la lámina responda o profundice.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `pregunta_directa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe formular una pregunta clara que active tensión o reflexión y que la lámina responda o profundice."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe formular una pregunta clara que active tensión o reflexión y que la lámina responda o profundice."
- **Validación local:** La salida es válida sólo si `pregunta_directa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `promesa_de_comprension`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-promesa_de_comprension-promesa_de_comprension`
- **Resumen regional:** Valor en el que el titular promete que el receptor entenderá algo de forma más clara después de recorrer el carousel.
- **Operación semántica obligatoria:** El titular debe prometer claridad: entender, distinguir, ordenar o ver algo que antes estaba confuso.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `promesa_de_comprension` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe prometer claridad: entender, distinguir, ordenar o ver algo que antes estaba confuso."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe prometer claridad: entender, distinguir, ordenar o ver algo que antes estaba confuso."
- **Validación local:** La salida es válida sólo si `promesa_de_comprension` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `contraste_conceptual`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-contraste_conceptual-contraste_conceptual`
- **Resumen regional:** Valor en el que el titular se construye mediante oposición entre dos conceptos, prácticas o interpretaciones.
- **Operación semántica obligatoria:** El titular debe oponer dos nociones, prácticas o estados y hacer visible la diferencia.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `contraste_conceptual` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe oponer dos nociones, prácticas o estados y hacer visible la diferencia."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe oponer dos nociones, prácticas o estados y hacer visible la diferencia."
- **Validación local:** La salida es válida sólo si `contraste_conceptual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `afirmacion_tesis`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-afirmacion_tesis-afirmacion_tesis`
- **Resumen regional:** Valor en el que el titular presenta una tesis clara que el carousel desarrollará o demostrará.
- **Operación semántica obligatoria:** El titular debe declarar una posición interpretativa que la lámina sostenga.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `afirmacion_tesis` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe declarar una posición interpretativa que la lámina sostenga."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe declarar una posición interpretativa que la lámina sostenga."
- **Validación local:** La salida es válida sólo si `afirmacion_tesis` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `advertencia`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-advertencia-advertencia`
- **Resumen regional:** Valor en el que el titular avisa sobre un error, riesgo, confusión o consecuencia negativa.
- **Operación semántica obligatoria:** El titular debe señalar riesgo, error, trampa o consecuencia; debe evitar alarmismo vacío.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `advertencia` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe señalar riesgo, error, trampa o consecuencia; debe evitar alarmismo vacío."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe señalar riesgo, error, trampa o consecuencia; debe evitar alarmismo vacío."
- **Validación local:** La salida es válida sólo si `advertencia` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `lista_numerada`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-lista_numerada-lista_numerada`
- **Resumen regional:** Valor en el que el titular anuncia una cantidad cerrada de elementos, pasos, errores, señales o niveles.
- **Operación semántica obligatoria:** El titular debe organizar un conjunto cerrado: pasos, niveles, errores, señales, tipos o preguntas.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `lista_numerada` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe organizar un conjunto cerrado: pasos, niveles, errores, señales, tipos o preguntas."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe organizar un conjunto cerrado: pasos, niveles, errores, señales, tipos o preguntas."
- **Validación local:** La salida es válida sólo si `lista_numerada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `formula_memorable`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.estilo_de_titulares`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-estilo_de_titulares-formula_memorable-formula_memorable`
- **Resumen regional:** Valor en el que el titular se presenta como una fórmula conceptual breve y recordable.
- **Operación semántica obligatoria:** El titular debe condensar una relación en una fórmula verbal recordable.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.estilo_de_titulares`: "Debe registrar `formula_memorable` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El titular debe condensar una relación en una fórmula verbal recordable."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.estilo_de_titular_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: El titular debe condensar una relación en una fórmula verbal recordable."
- **Validación local:** La salida es válida sólo si `formula_memorable` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `rama_visual_editorial.jerarquia_grafica`

**Función semántica del campo:** Define qué elemento debe ocupar la prioridad perceptiva dentro de la lámina.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`
- `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `titular_dominante`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-titular_dominante-titular_dominante`
- **Resumen regional:** Valor en el que el titular ocupa la mayor jerarquía visual de la lámina.
- **Operación semántica obligatoria:** El titular manda la lectura; imagen y estructura sólo refuerzan la frase principal.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`: "Debe registrar `titular_dominante` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El titular manda la lectura; imagen y estructura sólo refuerzan la frase principal."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: El titular manda la lectura; imagen y estructura sólo refuerzan la frase principal."
- **Validación local:** La salida es válida sólo si `titular_dominante` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `texto_visual_balanceado`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-texto_visual_balanceado-texto_visual_balanceado`
- **Resumen regional:** Valor en el que texto e imagen comparten peso compositivo.
- **Operación semántica obligatoria:** Texto y visualidad comparten peso; ninguno debe exigir comprensión sin el otro.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`: "Debe registrar `texto_visual_balanceado` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Texto y visualidad comparten peso; ninguno debe exigir comprensión sin el otro."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Texto y visualidad comparten peso; ninguno debe exigir comprensión sin el otro."
- **Validación local:** La salida es válida sólo si `texto_visual_balanceado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `imagen_dominante_texto_secundario`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-imagen_dominante_texto_secundario-imagen_dominante_texto_secundario`
- **Resumen regional:** Valor en el que la imagen o escena ocupa el peso principal de la lámina, mientras el texto guía la interpretación.
- **Operación semántica obligatoria:** La imagen o escena porta el sentido principal; el texto ancla o interpreta sin competir.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`: "Debe registrar `imagen_dominante_texto_secundario` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: La imagen o escena porta el sentido principal; el texto ancla o interpreta sin competir."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: La imagen o escena porta el sentido principal; el texto ancla o interpreta sin competir."
- **Validación local:** La salida es válida sólo si `imagen_dominante_texto_secundario` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `diagrama_dominante`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-diagrama_dominante-diagrama_dominante`
- **Resumen regional:** Valor en el que la estructura visual principal es un diagrama, flujo, matriz, mapa, tabla o esquema.
- **Operación semántica obligatoria:** La estructura gráfica organiza la comprensión; el texto etiqueta, aclara o guía.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`: "Debe registrar `diagrama_dominante` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: La estructura gráfica organiza la comprensión; el texto etiqueta, aclara o guía."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: La estructura gráfica organiza la comprensión; el texto etiqueta, aclara o guía."
- **Validación local:** La salida es válida sólo si `diagrama_dominante` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `estructura_mixta_controlada`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.jerarquia_grafica`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-jerarquia_grafica-estructura_mixta_controlada-estructura_mixta_controlada`
- **Resumen regional:** Valor en el que se combinan varios recursos visuales y textuales con una jerarquía definida.
- **Operación semántica obligatoria:** Combina titular, texto, imagen y estructura, pero debe mantener una prioridad de lectura explícita.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.jerarquia_grafica`: "Debe registrar `estructura_mixta_controlada` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.jerarquia_grafica_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Combina titular, texto, imagen y estructura, pero debe mantener una prioridad de lectura explícita."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combina titular, texto, imagen y estructura, pero debe mantener una prioridad de lectura explícita."
- **Validación local:** La salida es válida sólo si `estructura_mixta_controlada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `rama_visual_editorial.presencia_de_marca`

**Función semántica del campo:** Regula cuánto aparece la identidad de marca o firma visual en la composición.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca`
- `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `ausente`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-ausente-ausente`
- **Resumen regional:** Valor en el que la pieza no incluye elementos explícitos de marca.
- **Operación semántica obligatoria:** No introducir marcas, firmas, colores propietarios ni elementos identitarios visibles salvo que sean parte del caso.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca`: "Debe registrar `ausente` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: No introducir marcas, firmas, colores propietarios ni elementos identitarios visibles salvo que sean parte del caso."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: No introducir marcas, firmas, colores propietarios ni elementos identitarios visibles salvo que sean parte del caso."
- **Validación local:** La salida es válida sólo si `ausente` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `minima`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-minima-minima`
- **Resumen regional:** Valor en el que la marca aparece de forma discreta.
- **Operación semántica obligatoria:** Usar marca o firma como presencia discreta; no debe competir con la idea ni con el recurso visual.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca`: "Debe registrar `minima` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Usar marca o firma como presencia discreta; no debe competir con la idea ni con el recurso visual."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar marca o firma como presencia discreta; no debe competir con la idea ni con el recurso visual."
- **Validación local:** La salida es válida sólo si `minima` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `moderada`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-moderada-moderada`
- **Resumen regional:** Valor en el que la marca participa de forma visible pero no domina la pieza.
- **Operación semántica obligatoria:** Permitir consistencia visual reconocible; la marca acompaña la arquitectura sin dominar el contenido.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca`: "Debe registrar `moderada` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Permitir consistencia visual reconocible; la marca acompaña la arquitectura sin dominar el contenido."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Permitir consistencia visual reconocible; la marca acompaña la arquitectura sin dominar el contenido."
- **Validación local:** La salida es válida sólo si `moderada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `dominante`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.presencia_de_marca`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-presencia_de_marca-dominante-dominante`
- **Resumen regional:** Valor en el que la marca organiza fuertemente la apariencia de la pieza.
- **Operación semántica obligatoria:** La identidad de marca estructura la composición; exige que cada lámina conserve coherencia visual propietaria.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.presencia_de_marca`: "Debe registrar `dominante` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.presencia_de_marca_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: La identidad de marca estructura la composición; exige que cada lámina conserve coherencia visual propietaria."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: La identidad de marca estructura la composición; exige que cada lámina conserve coherencia visual propietaria."
- **Validación local:** La salida es válida sólo si `dominante` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `rama_visual_editorial.regimen_de_iconografia`

**Función semántica del campo:** Regula si los iconos están ausentes, acompañan, estructuran o sistematizan la lectura visual.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia`
- `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `sin_iconografia`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-sin_iconografia-sin_iconografia`
- **Resumen regional:** Valor en el que no se usan iconos como parte de la composición.
- **Operación semántica obligatoria:** No usar iconos como sistema de lectura; resolver orientación con composición, texto o imagen.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia`: "Debe registrar `sin_iconografia` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: No usar iconos como sistema de lectura; resolver orientación con composición, texto o imagen."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: No usar iconos como sistema de lectura; resolver orientación con composición, texto o imagen."
- **Validación local:** La salida es válida sólo si `sin_iconografia` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `iconografia_minima`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_minima-iconografia_minima`
- **Resumen regional:** Valor en el que se usan pocos iconos, de forma puntual.
- **Operación semántica obligatoria:** Usar pocos iconos como apoyo puntual o señal de categoría; no deben crear una gramática paralela.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia`: "Debe registrar `iconografia_minima` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Usar pocos iconos como apoyo puntual o señal de categoría; no deben crear una gramática paralela."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar pocos iconos como apoyo puntual o señal de categoría; no deben crear una gramática paralela."
- **Validación local:** La salida es válida sólo si `iconografia_minima` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `iconografia_funcional`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_funcional-iconografia_funcional`
- **Resumen regional:** Valor en el que los iconos cumplen una función operativa en la lectura.
- **Operación semántica obligatoria:** Usar iconos para marcar pasos, tipos, alertas, acciones o relaciones.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia`: "Debe registrar `iconografia_funcional` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Usar iconos para marcar pasos, tipos, alertas, acciones o relaciones."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar iconos para marcar pasos, tipos, alertas, acciones o relaciones."
- **Validación local:** La salida es válida sólo si `iconografia_funcional` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `iconografia_sistematica`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.regimen_de_iconografia`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-regimen_de_iconografia-iconografia_sistematica-iconografia_sistematica`
- **Resumen regional:** Valor en el que la iconografía forma un sistema visual recurrente a lo largo de todo el carousel.
- **Operación semántica obligatoria:** Construir un sistema recurrente de iconos con significado estable a lo largo de la secuencia.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.regimen_de_iconografia`: "Debe registrar `iconografia_sistematica` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.regimen_de_iconografia_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Construir un sistema recurrente de iconos con significado estable a lo largo de la secuencia."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_obligatorios`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Construir un sistema recurrente de iconos con significado estable a lo largo de la secuencia."
- **Validación local:** La salida es válida sólo si `iconografia_sistematica` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `rama_visual_editorial.tono_editorial`

**Función semántica del campo:** Regula la actitud editorial de la pieza ante el receptor.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`
- `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `pedagogico_directo`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-pedagogico_directo-pedagogico_directo`
- **Resumen regional:** Valor que orienta la pieza hacia una explicación clara, didáctica y sin rodeos.
- **Operación semántica obligatoria:** Enseñar sin rodeos: claridad, orden y utilidad por encima de ambigüedad estética.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`: "Debe registrar `pedagogico_directo` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Enseñar sin rodeos: claridad, orden y utilidad por encima de ambigüedad estética."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Enseñar sin rodeos: claridad, orden y utilidad por encima de ambigüedad estética."
- **Validación local:** La salida es válida sólo si `pedagogico_directo` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `analitico_sobrio`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-analitico_sobrio-analitico_sobrio`
- **Resumen regional:** Valor que orienta la pieza hacia una lectura seria, estructurada y de baja espectacularidad emocional.
- **Operación semántica obligatoria:** Mostrar precisión y control interpretativo; evitar exageración y lenguaje emocional excesivo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`: "Debe registrar `analitico_sobrio` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Mostrar precisión y control interpretativo; evitar exageración y lenguaje emocional excesivo."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Mostrar precisión y control interpretativo; evitar exageración y lenguaje emocional excesivo."
- **Validación local:** La salida es válida sólo si `analitico_sobrio` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `divulgativo_claro`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-divulgativo_claro-divulgativo_claro`
- **Resumen regional:** Valor que orienta la pieza hacia la explicación accesible de una idea que podría ser compleja.
- **Operación semántica obligatoria:** Hacer accesible una idea compleja sin trivializarla; usar ejemplos y formulaciones limpias.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`: "Debe registrar `divulgativo_claro` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Hacer accesible una idea compleja sin trivializarla; usar ejemplos y formulaciones limpias."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Hacer accesible una idea compleja sin trivializarla; usar ejemplos y formulaciones limpias."
- **Validación local:** La salida es válida sólo si `divulgativo_claro` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `tecnico_controlado`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-tecnico_controlado-tecnico_controlado`
- **Resumen regional:** Valor que permite usar lenguaje especializado, pero con control de densidad y legibilidad.
- **Operación semántica obligatoria:** Permitir precisión técnica manteniendo estructura de lectura; explicar sólo lo necesario para operar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`: "Debe registrar `tecnico_controlado` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Permitir precisión técnica manteniendo estructura de lectura; explicar sólo lo necesario para operar."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Permitir precisión técnica manteniendo estructura de lectura; explicar sólo lo necesario para operar."
- **Validación local:** La salida es válida sólo si `tecnico_controlado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `provocador_controlado`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-provocador_controlado-provocador_controlado`
- **Resumen regional:** Valor que orienta el carousel hacia una apertura con tensión, contraste o desafío interpretativo, sin caer en exageración vacía.
- **Operación semántica obligatoria:** Abrir tensión, incomodidad o contraste fuerte, pero con fundamento conceptual y cierre claro.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`: "Debe registrar `provocador_controlado` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Abrir tensión, incomodidad o contraste fuerte, pero con fundamento conceptual y cierre claro."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Abrir tensión, incomodidad o contraste fuerte, pero con fundamento conceptual y cierre claro."
- **Validación local:** La salida es válida sólo si `provocador_controlado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `comercial_sutil`

- **Ruta de entrada:** `dimension_comparecencia_performativa.rama_visual_editorial.tono_editorial`
- **id regional:** `grafo_de_regiones-grafo_dimension_comparecencia_performativa-rama_visual_editorial-tono_editorial-comercial_sutil-comercial_sutil`
- **Resumen regional:** Valor que permite orientar el carousel hacia una acción de valor o conversión, pero sin volverlo agresivamente publicitario.
- **Operación semántica obligatoria:** Orientar hacia acción, conversión o valor ofrecido sin parecer venta agresiva.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.comparecencia_visual_editorial_resultante.rama_visual_editorial.tono_editorial`: "Debe registrar `comercial_sutil` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_editorial.comparecencia_visual_editorial_local.tono_editorial_local`: "Debe modificar tono local, marca, iconografía, titular o composición editorial aplicando esta regla: Orientar hacia acción, conversión o valor ofrecido sin parecer venta agresiva."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Orientar hacia acción, conversión o valor ofrecido sin parecer venta agresiva."
- **Validación local:** La salida es válida sólo si `comercial_sutil` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_composicion_segmental_de_la_salida

#### `arquitectura_macro`

**Función semántica del campo:** Define el patrón global de organización de la secuencia laminar.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.arquitectura_global.arquitectura_macro`
- `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`
- `capa_de_laminas.laminas.posicion_en_arquitectura_macro`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `apertura_desarrollo_cierre`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_cierre-apertura_desarrollo_cierre`
- **Resumen regional:** Valor apertura_desarrollo_cierre declarado para el campo arquitectura_macro.
- **Operación semántica obligatoria:** Distribuir la secuencia en entrada, desarrollo y cierre reconocibles.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.arquitectura_global.arquitectura_macro`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Distribuir la secuencia en entrada, desarrollo y cierre reconocibles."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Distribuir la secuencia en entrada, desarrollo y cierre reconocibles."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `apertura_desarrollo_cierre` en este campo mediante una decisión visible y trazable: Distribuir la secuencia en entrada, desarrollo y cierre reconocibles."
- **Validación local:** La salida es válida sólo si `apertura_desarrollo_cierre` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_lista_cierre`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_lista_cierre-apertura_lista_cierre`
- **Resumen regional:** Valor apertura_lista_cierre declarado para el campo arquitectura_macro.
- **Operación semántica obligatoria:** Abrir con promesa o tensión, desarrollar una lista estructurada y cerrar con síntesis o acción.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.arquitectura_global.arquitectura_macro`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir con promesa o tensión, desarrollar una lista estructurada y cerrar con síntesis o acción."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir con promesa o tensión, desarrollar una lista estructurada y cerrar con síntesis o acción."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `apertura_lista_cierre` en este campo mediante una decisión visible y trazable: Abrir con promesa o tensión, desarrollar una lista estructurada y cerrar con síntesis o acción."
- **Validación local:** La salida es válida sólo si `apertura_lista_cierre` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_contraste_resolucion`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_contraste_resolucion-apertura_contraste_resolucion`
- **Resumen regional:** Valor apertura_contraste_resolucion declarado para el campo arquitectura_macro.
- **Operación semántica obligatoria:** Abrir una oposición, desplegar sus polos y resolver la distinción.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.arquitectura_global.arquitectura_macro`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir una oposición, desplegar sus polos y resolver la distinción."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir una oposición, desplegar sus polos y resolver la distinción."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `apertura_contraste_resolucion` en este campo mediante una decisión visible y trazable: Abrir una oposición, desplegar sus polos y resolver la distinción."
- **Validación local:** La salida es válida sólo si `apertura_contraste_resolucion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_secuencia_remate`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_secuencia_remate-apertura_secuencia_remate`
- **Resumen regional:** Valor apertura_secuencia_remate declarado para el campo arquitectura_macro.
- **Operación semántica obligatoria:** Abrir expectativa, avanzar por pasos o progresión y cerrar con remate memorable.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.arquitectura_global.arquitectura_macro`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir expectativa, avanzar por pasos o progresión y cerrar con remate memorable."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir expectativa, avanzar por pasos o progresión y cerrar con remate memorable."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `apertura_secuencia_remate` en este campo mediante una decisión visible y trazable: Abrir expectativa, avanzar por pasos o progresión y cerrar con remate memorable."
- **Validación local:** La salida es válida sólo si `apertura_secuencia_remate` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_desarrollo_remate`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.arquitectura_macro`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-arquitectura_macro-apertura_desarrollo_remate-apertura_desarrollo_remate`
- **Resumen regional:** Valor apertura_desarrollo_remate declarado para el campo arquitectura_macro.
- **Operación semántica obligatoria:** Abrir con tensión, desarrollar el marco y terminar con una frase, giro o síntesis fuerte.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.arquitectura_global.arquitectura_macro`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir con tensión, desarrollar el marco y terminar con una frase, giro o síntesis fuerte."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Abrir con tensión, desarrollar el marco y terminar con una frase, giro o síntesis fuerte."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `apertura_desarrollo_remate` en este campo mediante una decisión visible y trazable: Abrir con tensión, desarrollar el marco y terminar con una frase, giro o síntesis fuerte."
- **Validación local:** La salida es válida sólo si `apertura_desarrollo_remate` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `cantidad_de_laminas`

**Función semántica del campo:** Regula la extensión material de la pieza y el espacio disponible para distribuir ideas.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas`
- `capa_macroestructural.arquitectura_global.cantidad_de_laminas`
- `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`
- `capa_de_laminas.laminas.numero_de_lamina`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `2`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-2-2`
- **Resumen regional:** Valor que indica una secuencia mínima de dos láminas.
- **Operación semántica obligatoria:** Usar exactamente dos láminas: contraste mínimo, problema/respuesta, antes/después o tensión/resolución compacta.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas`: "Debe registrar `2` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar exactamente dos láminas: contraste mínimo, problema/respuesta, antes/después o tensión/resolución compacta."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar exactamente dos láminas: contraste mínimo, problema/respuesta, antes/después o tensión/resolución compacta."
  - debe afectar `capa_de_laminas.laminas.numero_de_lamina`: "Debe aplicar `2` en este campo mediante una decisión visible y trazable: Usar exactamente dos láminas: contraste mínimo, problema/respuesta, antes/después o tensión/resolución compacta."
- **Validación local:** La salida es válida sólo si `2` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `3_a_5`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-3_a_5-3_a_5`
- **Resumen regional:** Valor que indica una secuencia breve y manejable de tres a cinco láminas.
- **Operación semántica obligatoria:** Usar entre tres y cinco láminas; cubrir apertura, desarrollo mínimo y cierre sin sobreextender.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas`: "Debe registrar `3_a_5` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar entre tres y cinco láminas; cubrir apertura, desarrollo mínimo y cierre sin sobreextender."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar entre tres y cinco láminas; cubrir apertura, desarrollo mínimo y cierre sin sobreextender."
  - debe afectar `capa_de_laminas.laminas.numero_de_lamina`: "Debe aplicar `3_a_5` en este campo mediante una decisión visible y trazable: Usar entre tres y cinco láminas; cubrir apertura, desarrollo mínimo y cierre sin sobreextender."
- **Validación local:** La salida es válida sólo si `3_a_5` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `6_a_8`

- **Ruta de entrada:** `dimension_composicion_segmental_de_la_salida.cantidad_de_laminas`
- **id regional:** `grafo_de_regiones-grafo_dimension_composicion_segmental_de_la_salida-cantidad_de_laminas-6_a_8-6_a_8`
- **Resumen regional:** Valor que indica una secuencia media, adecuada para desarrollar una idea con mayor profundidad.
- **Operación semántica obligatoria:** Usar seis a ocho láminas para desplegar método, capas, clasificación, ejemplo o progresión conceptual más amplia.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.cantidad_de_laminas`: "Debe registrar `6_a_8` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar seis a ocho láminas para desplegar método, capas, clasificación, ejemplo o progresión conceptual más amplia."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar seis a ocho láminas para desplegar método, capas, clasificación, ejemplo o progresión conceptual más amplia."
  - debe afectar `capa_de_laminas.laminas.numero_de_lamina`: "Debe aplicar `6_a_8` en este campo mediante una decisión visible y trazable: Usar seis a ocho láminas para desplegar método, capas, clasificación, ejemplo o progresión conceptual más amplia."
- **Validación local:** La salida es válida sólo si `6_a_8` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_construccion_del_caso

#### `configuracion_narrativa`

**Función semántica del campo:** Define la lógica de progresión conceptual del caso dentro de la secuencia.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`
- `capa_macroestructural.arquitectura_global.progresion_interlaminar`
- `capa_de_laminas.laminas.posicion_en_arquitectura_macro`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `modular`

- **Ruta de entrada:** `dimension_construccion_del_caso.configuracion_narrativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-modular-modular`
- **Resumen regional:** Valor modular declarado para configuracion_narrativa.
- **Operación semántica obligatoria:** Permite láminas relativamente autónomas; cada módulo debe tener función local clara.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`: "Debe registrar `modular` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Permite láminas relativamente autónomas; cada módulo debe tener función local clara."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `modular` en este campo mediante una decisión visible y trazable: Permite láminas relativamente autónomas; cada módulo debe tener función local clara."
- **Validación local:** La salida es válida sólo si `modular` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `acumulativa`

- **Ruta de entrada:** `dimension_construccion_del_caso.configuracion_narrativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-acumulativa-acumulativa`
- **Resumen regional:** Valor acumulativa declarado para configuracion_narrativa.
- **Operación semántica obligatoria:** Cada lámina añade una capa necesaria; no debe haber saltos que rompan acumulación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`: "Debe registrar `acumulativa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Cada lámina añade una capa necesaria; no debe haber saltos que rompan acumulación."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `acumulativa` en este campo mediante una decisión visible y trazable: Cada lámina añade una capa necesaria; no debe haber saltos que rompan acumulación."
- **Validación local:** La salida es válida sólo si `acumulativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `contrastiva`

- **Ruta de entrada:** `dimension_construccion_del_caso.configuracion_narrativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-contrastiva-contrastiva`
- **Resumen regional:** Valor contrastiva declarado para configuracion_narrativa.
- **Operación semántica obligatoria:** La secuencia se organiza por oposición entre ideas, estados, prácticas o interpretaciones.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`: "Debe registrar `contrastiva` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La secuencia se organiza por oposición entre ideas, estados, prácticas o interpretaciones."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `contrastiva` en este campo mediante una decisión visible y trazable: La secuencia se organiza por oposición entre ideas, estados, prácticas o interpretaciones."
- **Validación local:** La salida es válida sólo si `contrastiva` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `lineal_progresiva`

- **Ruta de entrada:** `dimension_construccion_del_caso.configuracion_narrativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-lineal_progresiva-lineal_progresiva`
- **Resumen regional:** Valor lineal_progresiva declarado para configuracion_narrativa.
- **Operación semántica obligatoria:** La lectura avanza paso a paso; cada lámina depende de la anterior.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`: "Debe registrar `lineal_progresiva` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La lectura avanza paso a paso; cada lámina depende de la anterior."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `lineal_progresiva` en este campo mediante una decisión visible y trazable: La lectura avanza paso a paso; cada lámina depende de la anterior."
- **Validación local:** La salida es válida sólo si `lineal_progresiva` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `recapitulativa`

- **Ruta de entrada:** `dimension_construccion_del_caso.configuracion_narrativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-recapitulativa-recapitulativa`
- **Resumen regional:** Valor recapitulativa declarado para configuracion_narrativa.
- **Operación semántica obligatoria:** La pieza reordena o sintetiza algo ya explicado, visto o conocido.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`: "Debe registrar `recapitulativa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La pieza reordena o sintetiza algo ya explicado, visto o conocido."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `recapitulativa` en este campo mediante una decisión visible y trazable: La pieza reordena o sintetiza algo ya explicado, visto o conocido."
- **Validación local:** La salida es válida sólo si `recapitulativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_profundizacion_cierre`

- **Ruta de entrada:** `dimension_construccion_del_caso.configuracion_narrativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-configuracion_narrativa-apertura_profundizacion_cierre-apertura_profundizacion_cierre`
- **Resumen regional:** Valor apertura_profundizacion_cierre declarado para configuracion_narrativa.
- **Operación semántica obligatoria:** La secuencia abre una tensión, la desarrolla y la cierra con resolución o acción.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.configuracion_narrativa`: "Debe registrar `apertura_profundizacion_cierre` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La secuencia abre una tensión, la desarrolla y la cierra con resolución o acción."
  - debe afectar `capa_de_laminas.laminas.posicion_en_arquitectura_macro`: "Debe aplicar `apertura_profundizacion_cierre` en este campo mediante una decisión visible y trazable: La secuencia abre una tensión, la desarrolla y la cierra con resolución o acción."
- **Validación local:** La salida es válida sólo si `apertura_profundizacion_cierre` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `construccion_conceptual`

**Función semántica del campo:** Aporta la materia conceptual activa que debe distribuirse y justificarse en láminas.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual`
- `capa_de_laminas.laminas.relacion_con_el_caso`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `coleccion_de_ideas_activas`

- **Ruta de entrada:** `dimension_construccion_del_caso.construccion_conceptual`
- **id regional:** `grafo_de_regiones-grafo_dimension_construccion_del_caso-construccion_conceptual-coleccion_de_ideas_activas-coleccion_de_ideas_activas`
- **Resumen regional:** Entrada regional habilitada por la instancia regional.
- **Operación semántica obligatoria:** Distribuir todas las ideas activas por lámina según rol, peso, modo de presencia y relaciones; ninguna idea nuclear puede quedar sin uso.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.construccion_del_caso_resultante.construccion_conceptual`: "Debe registrar `coleccion_de_ideas_activas` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.relacion_con_el_caso`: "Debe modificar la distribución de ideas activas, roles conceptuales o relaciones entre ideas aplicando esta regla: Distribuir todas las ideas activas por lámina según rol, peso, modo de presencia y relaciones; ninguna idea nuclear puede quedar sin uso."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Distribuir todas las ideas activas por lámina según rol, peso, modo de presencia y relaciones; ninguna idea nuclear puede quedar sin uso."
- **Validación local:** La salida es válida sólo si `coleccion_de_ideas_activas` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_dinamica_atencional_y_procesual

#### `dinamica_procesual.compresion`

**Función semántica del campo:** Regula el grado de concentración o despliegue de la información por lámina.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.compresion`
- `capa_de_laminas.laminas.composicion_local.densidad_textual_local`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-baja-baja`
- **Resumen regional:** Valor baja del eje compresion.
- **Operación semántica obligatoria:** Desplegar más; evitar concentración excesiva; permitir explicación, ejemplos y aire por lámina.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.compresion`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Desplegar más; evitar concentración excesiva; permitir explicación, ejemplos y aire por lámina."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Desplegar más; evitar concentración excesiva; permitir explicación, ejemplos y aire por lámina."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-media-media`
- **Resumen regional:** Valor media del eje compresion.
- **Operación semántica obligatoria:** Condensar con equilibrio; cada lámina debe contener una unidad de sentido clara sin saturación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.compresion`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Condensar con equilibrio; cada lámina debe contener una unidad de sentido clara sin saturación."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Condensar con equilibrio; cada lámina debe contener una unidad de sentido clara sin saturación."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.compresion`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-compresion-alta-alta`
- **Resumen regional:** Valor alta del eje compresion.
- **Operación semántica obligatoria:** Comprimir información; usar fórmulas, listas, diagramas o síntesis fuertes y compensar con jerarquía visual.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.compresion`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.densidad_textual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Comprimir información; usar fórmulas, listas, diagramas o síntesis fuertes y compensar con jerarquía visual."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Comprimir información; usar fórmulas, listas, diagramas o síntesis fuertes y compensar con jerarquía visual."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `dinamica_procesual.continuidad`

**Función semántica del campo:** Regula cuánto debe sentirse la secuencia como encadenamiento entre láminas.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.continuidad`
- `capa_macroestructural.arquitectura_global.progresion_interlaminar`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-baja-baja`
- **Resumen regional:** Valor baja del eje continuidad.
- **Operación semántica obligatoria:** Permitir láminas más independientes; cada una debe entenderse con mínima dependencia de la anterior.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.continuidad`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Permitir láminas más independientes; cada una debe entenderse con mínima dependencia de la anterior."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Permitir láminas más independientes; cada una debe entenderse con mínima dependencia de la anterior."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-media-media`
- **Resumen regional:** Valor media del eje continuidad.
- **Operación semántica obligatoria:** Mantener conexión reconocible entre láminas con transiciones claras pero no rígidas.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.continuidad`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Mantener conexión reconocible entre láminas con transiciones claras pero no rígidas."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Mantener conexión reconocible entre láminas con transiciones claras pero no rígidas."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.continuidad`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-continuidad-alta-alta`
- **Resumen regional:** Valor alta del eje continuidad.
- **Operación semántica obligatoria:** Construir encadenamiento fuerte; cada lámina debe proyectar la siguiente y depender de la secuencia.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.continuidad`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Construir encadenamiento fuerte; cada lámina debe proyectar la siguiente y depender de la secuencia."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Construir encadenamiento fuerte; cada lámina debe proyectar la siguiente y depender de la secuencia."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `dinamica_procesual.explicitud`

**Función semántica del campo:** Regula cuánto debe declararse directamente y cuánto puede quedar inferido.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.explicitud`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`
- `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-baja-baja`
- **Resumen regional:** Valor baja del eje explicitud.
- **Operación semántica obligatoria:** Permitir inferencia y sugerencia; debe haber suficientes anclas para no volver opaca la interpretación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.explicitud`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Permitir inferencia y sugerencia; debe haber suficientes anclas para no volver opaca la interpretación."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Permitir inferencia y sugerencia; debe haber suficientes anclas para no volver opaca la interpretación."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-media-media`
- **Resumen regional:** Valor media del eje explicitud.
- **Operación semántica obligatoria:** Declarar lo central y dejar algunos matices implícitos.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.explicitud`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Declarar lo central y dejar algunos matices implícitos."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Declarar lo central y dejar algunos matices implícitos."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.explicitud`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-explicitud-alta-alta`
- **Resumen regional:** Valor alta del eje explicitud.
- **Operación semántica obligatoria:** Explicar directamente propósito, relación y resolución; reducir ambigüedad y hacer visible la estructura.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.explicitud`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.notas_de_coherencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Explicar directamente propósito, relación y resolución; reducir ambigüedad y hacer visible la estructura."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Explicar directamente propósito, relación y resolución; reducir ambigüedad y hacer visible la estructura."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `dinamica_procesual.friccion_interpretativa`

**Función semántica del campo:** Regula el esfuerzo interpretativo admisible antes de que el receptor entienda la función de la lámina.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.friccion_interpretativa`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-baja-baja`
- **Resumen regional:** Valor baja del eje friccion_interpretativa.
- **Operación semántica obligatoria:** Hacer comprensión inmediata; evitar metáforas opacas, saltos conceptuales o titulares ambiguos.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.friccion_interpretativa`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Hacer comprensión inmediata; evitar metáforas opacas, saltos conceptuales o titulares ambiguos."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Hacer comprensión inmediata; evitar metáforas opacas, saltos conceptuales o titulares ambiguos."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-media-media`
- **Resumen regional:** Valor media del eje friccion_interpretativa.
- **Operación semántica obligatoria:** Permitir una tensión interpretativa moderada que invite a seguir leyendo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.friccion_interpretativa`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Permitir una tensión interpretativa moderada que invite a seguir leyendo."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Permitir una tensión interpretativa moderada que invite a seguir leyendo."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.friccion_interpretativa`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-friccion_interpretativa-alta-alta`
- **Resumen regional:** Valor alta del eje friccion_interpretativa.
- **Operación semántica obligatoria:** Usar desafío, paradoja o abstracción; debe compensarse con resolución posterior clara.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.friccion_interpretativa`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Usar desafío, paradoja o abstracción; debe compensarse con resolución posterior clara."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.estructura_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar desafío, paradoja o abstracción; debe compensarse con resolución posterior clara."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `dinamica_procesual.recapitulacion`

**Función semántica del campo:** Regula cuánto debe reactivar la pieza lo ya visto para consolidar comprensión.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.recapitulacion`
- `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`
- `capa_de_laminas.laminas.funcion_de_la_lamina`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-baja-baja`
- **Resumen regional:** Valor baja del eje recapitulacion.
- **Operación semántica obligatoria:** No repetir demasiado; avanzar con poca reactivación de contenido previo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.recapitulacion`: "Debe registrar `baja` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: No repetir demasiado; avanzar con poca reactivación de contenido previo."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `baja` en este campo mediante una decisión visible y trazable: No repetir demasiado; avanzar con poca reactivación de contenido previo."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-media-media`
- **Resumen regional:** Valor media del eje recapitulacion.
- **Operación semántica obligatoria:** Reactivar puntos clave cuando cambie de bloque o antes del cierre.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.recapitulacion`: "Debe registrar `media` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Reactivar puntos clave cuando cambie de bloque o antes del cierre."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `media` en este campo mediante una decisión visible y trazable: Reactivar puntos clave cuando cambie de bloque o antes del cierre."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.dinamica_procesual.recapitulacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-dinamica_procesual-recapitulacion-alta-alta`
- **Resumen regional:** Valor alta del eje recapitulacion.
- **Operación semántica obligatoria:** Usar recapitulaciones visibles, síntesis y referencias cruzadas para consolidar aprendizaje o serie.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.dinamica_procesual.recapitulacion`: "Debe registrar `alta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar recapitulaciones visibles, síntesis y referencias cruzadas para consolidar aprendizaje o serie."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `alta` en este campo mediante una decisión visible y trazable: Usar recapitulaciones visibles, síntesis y referencias cruzadas para consolidar aprendizaje o serie."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `estado_atencional`

**Función semántica del campo:** Describe el estado de atención desde el cual se presupone que entra el receptor.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`
- `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `atencion_fragmentada`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_fragmentada-atencion_fragmentada`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Diseñar entrada rápida, baja fricción y alta señal visual; no exigir lectura larga al inicio.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_fragmentada` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Diseñar entrada rápida, baja fricción y alta señal visual; no exigir lectura larga al inicio."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Diseñar entrada rápida, baja fricción y alta señal visual; no exigir lectura larga al inicio."
- **Validación local:** La salida es válida sólo si `atencion_fragmentada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencion_superficial`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_superficial-atencion_superficial`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Capturar con titular claro y beneficio inmediato antes de profundizar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_superficial` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Capturar con titular claro y beneficio inmediato antes de profundizar."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Capturar con titular claro y beneficio inmediato antes de profundizar."
- **Validación local:** La salida es válida sólo si `atencion_superficial` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencion_en_exploracion`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_en_exploracion-atencion_en_exploracion`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Ofrecer rutas, preguntas o promesas de descubrimiento; permitir que el receptor entre por curiosidad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_en_exploracion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Ofrecer rutas, preguntas o promesas de descubrimiento; permitir que el receptor entre por curiosidad."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Ofrecer rutas, preguntas o promesas de descubrimiento; permitir que el receptor entre por curiosidad."
- **Validación local:** La salida es válida sólo si `atencion_en_exploracion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencion_sostenida`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_sostenida-atencion_sostenida`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Puede sostener desarrollo más denso y continuidad conceptual.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_sostenida` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Puede sostener desarrollo más denso y continuidad conceptual."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Puede sostener desarrollo más denso y continuidad conceptual."
- **Validación local:** La salida es válida sólo si `atencion_sostenida` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencion_lista_para_activacion`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_activacion-atencion_lista_para_activacion`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Preparar CTA, pregunta o acción; el cierre debe convertir disposición en movimiento.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_lista_para_activacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Preparar CTA, pregunta o acción; el cierre debe convertir disposición en movimiento."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Preparar CTA, pregunta o acción; el cierre debe convertir disposición en movimiento."
- **Validación local:** La salida es válida sólo si `atencion_lista_para_activacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencion_lista_para_continuidad`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_continuidad-atencion_lista_para_continuidad`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Conectar con serie, siguiente pieza o recorrido acumulativo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_lista_para_continuidad` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Conectar con serie, siguiente pieza o recorrido acumulativo."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Conectar con serie, siguiente pieza o recorrido acumulativo."
- **Validación local:** La salida es válida sólo si `atencion_lista_para_continuidad` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencion_lista_para_profundizacion`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.estado_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-estado_atencional-atencion_lista_para_profundizacion-atencion_lista_para_profundizacion`
- **Resumen regional:** Valor declarado para el campo estado_atencional.
- **Operación semántica obligatoria:** Ofrecer marco, método, plantilla o recurso que permita ir más allá de la pieza.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.estado_atencional`: "Debe registrar `atencion_lista_para_profundizacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Ofrecer marco, método, plantilla o recurso que permita ir más allá de la pieza."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Ofrecer marco, método, plantilla o recurso que permita ir más allá de la pieza."
- **Validación local:** La salida es válida sólo si `atencion_lista_para_profundizacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `regimen_de_activacion_atencional`

**Función semántica del campo:** Define cómo se activa o sostiene la atención a través de la secuencia.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`
- `capa_de_laminas.laminas.tipo_de_lamina`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `apertura_inmediata`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_inmediata-apertura_inmediata`
- **Resumen regional:** Valor declarado para el campo regimen_de_activacion_atencional.
- **Operación semántica obligatoria:** La primera lámina debe activar interés sin preámbulo; usar tensión, pregunta o promesa clara.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`: "Debe registrar `apertura_inmediata` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.tipo_de_lamina`: "Debe aplicar `apertura_inmediata` en este campo mediante una decisión visible y trazable: La primera lámina debe activar interés sin preámbulo; usar tensión, pregunta o promesa clara."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: La primera lámina debe activar interés sin preámbulo; usar tensión, pregunta o promesa clara."
- **Validación local:** La salida es válida sólo si `apertura_inmediata` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_progresiva`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-apertura_progresiva-apertura_progresiva`
- **Resumen regional:** Valor declarado para el campo regimen_de_activacion_atencional.
- **Operación semántica obligatoria:** La atención puede crecer por acumulación; permitir entrada más suave pero con dirección visible.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`: "Debe registrar `apertura_progresiva` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.tipo_de_lamina`: "Debe aplicar `apertura_progresiva` en este campo mediante una decisión visible y trazable: La atención puede crecer por acumulación; permitir entrada más suave pero con dirección visible."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: La atención puede crecer por acumulación; permitir entrada más suave pero con dirección visible."
- **Validación local:** La salida es válida sólo si `apertura_progresiva` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `sostenimiento_desde_el_inicio`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-sostenimiento_desde_el_inicio-sostenimiento_desde_el_inicio`
- **Resumen regional:** Valor declarado para el campo regimen_de_activacion_atencional.
- **Operación semántica obligatoria:** Cada lámina debe mantener recompensa cognitiva; evitar tramos de transición sin valor.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`: "Debe registrar `sostenimiento_desde_el_inicio` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.tipo_de_lamina`: "Debe aplicar `sostenimiento_desde_el_inicio` en este campo mediante una decisión visible y trazable: Cada lámina debe mantener recompensa cognitiva; evitar tramos de transición sin valor."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Cada lámina debe mantener recompensa cognitiva; evitar tramos de transición sin valor."
- **Validación local:** La salida es válida sólo si `sostenimiento_desde_el_inicio` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `activacion_por_continuidad`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-activacion_por_continuidad-activacion_por_continuidad`
- **Resumen regional:** Valor declarado para el campo regimen_de_activacion_atencional.
- **Operación semántica obligatoria:** El interés surge de seguir la secuencia; cada lámina debe abrir una necesidad de deslizar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`: "Debe registrar `activacion_por_continuidad` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.tipo_de_lamina`: "Debe aplicar `activacion_por_continuidad` en este campo mediante una decisión visible y trazable: El interés surge de seguir la secuencia; cada lámina debe abrir una necesidad de deslizar."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El interés surge de seguir la secuencia; cada lámina debe abrir una necesidad de deslizar."
- **Validación local:** La salida es válida sólo si `activacion_por_continuidad` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `reenganche`

- **Ruta de entrada:** `dimension_dinamica_atencional_y_procesual.regimen_de_activacion_atencional`
- **id regional:** `grafo_de_regiones-grafo_dimension_dinamica_atencional_y_procesual-regimen_de_activacion_atencional-reenganche-reenganche`
- **Resumen regional:** Valor declarado para el campo regimen_de_activacion_atencional.
- **Operación semántica obligatoria:** Introducir giro, contraste o recapitulación para recuperar atención en mitad o cierre.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.dinamica_atencional_y_procesual_resultante.regimen_de_activacion_atencional`: "Debe registrar `reenganche` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.tipo_de_lamina`: "Debe aplicar `reenganche` en este campo mediante una decisión visible y trazable: Introducir giro, contraste o recapitulación para recuperar atención en mitad o cierre."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.titular`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Introducir giro, contraste o recapitulación para recuperar atención en mitad o cierre."
- **Validación local:** La salida es válida sólo si `reenganche` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_escala_temporal_y_resolucion_realizativa

#### `alcance_de_realizacion`

**Función semántica del campo:** Define si la pieza funciona como unidad aislada, acceso, profundización, prueba, transición, validación o parte de serie.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`
- `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `pieza_unica`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_unica-pieza_unica`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: pieza_unica.
- **Operación semántica obligatoria:** La pieza debe ser autosuficiente; no depender de contexto externo para cumplir su función.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `pieza_unica` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La pieza debe ser autosuficiente; no depender de contexto externo para cumplir su función."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: La pieza debe ser autosuficiente; no depender de contexto externo para cumplir su función."
- **Validación local:** La salida es válida sólo si `pieza_unica` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pieza_de_acceso`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_acceso-pieza_de_acceso`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: pieza_de_acceso.
- **Operación semántica obligatoria:** Funciona como entrada a un tema, serie, método o perfil; debe abrir más de lo que cierra.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `pieza_de_acceso` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Funciona como entrada a un tema, serie, método o perfil; debe abrir más de lo que cierra."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Funciona como entrada a un tema, serie, método o perfil; debe abrir más de lo que cierra."
- **Validación local:** La salida es válida sólo si `pieza_de_acceso` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pieza_de_profundizacion`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_profundizacion-pieza_de_profundizacion`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: pieza_de_profundizacion.
- **Operación semántica obligatoria:** Desarrolla un punto ya introducido; puede asumir cierto conocimiento previo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `pieza_de_profundizacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Desarrolla un punto ya introducido; puede asumir cierto conocimiento previo."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Desarrolla un punto ya introducido; puede asumir cierto conocimiento previo."
- **Validación local:** La salida es válida sólo si `pieza_de_profundizacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pieza_de_prueba`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_prueba-pieza_de_prueba`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: pieza_de_prueba.
- **Operación semántica obligatoria:** Demuestra valor, método o criterio; debe mostrar evidencia de utilidad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `pieza_de_prueba` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Demuestra valor, método o criterio; debe mostrar evidencia de utilidad."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Demuestra valor, método o criterio; debe mostrar evidencia de utilidad."
- **Validación local:** La salida es válida sólo si `pieza_de_prueba` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pieza_de_transicion`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_transicion-pieza_de_transicion`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: pieza_de_transicion.
- **Operación semántica obligatoria:** Conecta una interpretación con otra; la continuidad hacia una pieza posterior debe ser visible.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `pieza_de_transicion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Conecta una interpretación con otra; la continuidad hacia una pieza posterior debe ser visible."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Conecta una interpretación con otra; la continuidad hacia una pieza posterior debe ser visible."
- **Validación local:** La salida es válida sólo si `pieza_de_transicion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pieza_de_validacion`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-pieza_de_validacion-pieza_de_validacion`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: pieza_de_validacion.
- **Operación semántica obligatoria:** Refuerza credibilidad, prueba o legitimidad; debe sostener una afirmación ya presentada.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `pieza_de_validacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Refuerza credibilidad, prueba o legitimidad; debe sostener una afirmación ya presentada."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Refuerza credibilidad, prueba o legitimidad; debe sostener una afirmación ya presentada."
- **Validación local:** La salida es válida sólo si `pieza_de_validacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `apertura_de_serie`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-apertura_de_serie-apertura_de_serie`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: apertura_de_serie.
- **Operación semántica obligatoria:** Debe iniciar una cadena; el cierre debe proyectar continuidad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `apertura_de_serie` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe iniciar una cadena; el cierre debe proyectar continuidad."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Debe iniciar una cadena; el cierre debe proyectar continuidad."
- **Validación local:** La salida es válida sólo si `apertura_de_serie` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `continuidad_de_serie`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-continuidad_de_serie-continuidad_de_serie`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: continuidad_de_serie.
- **Operación semántica obligatoria:** Debe conectar con episodios previos y siguientes, sin exigir que el receptor recuerde todo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `continuidad_de_serie` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe conectar con episodios previos y siguientes, sin exigir que el receptor recuerde todo."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Debe conectar con episodios previos y siguientes, sin exigir que el receptor recuerde todo."
- **Validación local:** La salida es válida sólo si `continuidad_de_serie` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `cierre_de_serie`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.alcance_de_realizacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-alcance_de_realizacion-cierre_de_serie-cierre_de_serie`
- **Resumen regional:** Valor declarado para el campo alcance_de_realizacion: cierre_de_serie.
- **Operación semántica obligatoria:** Debe recapitular, resolver y cerrar un recorrido acumulado.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.alcance_de_realizacion`: "Debe registrar `cierre_de_serie` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.relacion_portada_desarrollo_cierre`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe recapitular, resolver y cerrar un recorrido acumulado."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Debe recapitular, resolver y cerrar un recorrido acumulado."
- **Validación local:** La salida es válida sólo si `cierre_de_serie` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `horizonte_temporal`

**Función semántica del campo:** Define el horizonte de efecto esperado de la pieza en relación con la audiencia y el sistema de contenido.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`
- `capa_macroestructural.arquitectura_global.progresion_interlaminar`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `inmediato`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-inmediato-inmediato`
- **Resumen regional:** Valor declarado para el campo horizonte_temporal: inmediato.
- **Operación semántica obligatoria:** Diseñar efecto rápido: comprensión, guardado, comentario o acción cercana.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`: "Debe registrar `inmediato` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Diseñar efecto rápido: comprensión, guardado, comentario o acción cercana."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Diseñar efecto rápido: comprensión, guardado, comentario o acción cercana."
- **Validación local:** La salida es válida sólo si `inmediato` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `corto_plazo`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-corto_plazo-corto_plazo`
- **Resumen regional:** Valor declarado para el campo horizonte_temporal: corto_plazo.
- **Operación semántica obligatoria:** Preparar uso posterior cercano; favorecer guardado, aplicación o regreso a la pieza.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`: "Debe registrar `corto_plazo` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Preparar uso posterior cercano; favorecer guardado, aplicación o regreso a la pieza."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Preparar uso posterior cercano; favorecer guardado, aplicación o regreso a la pieza."
- **Validación local:** La salida es válida sólo si `corto_plazo` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `mediano_plazo`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-mediano_plazo-mediano_plazo`
- **Resumen regional:** Valor declarado para el campo horizonte_temporal: mediano_plazo.
- **Operación semántica obligatoria:** Construir memoria, autoridad o marco conceptual que madure con el tiempo.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`: "Debe registrar `mediano_plazo` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Construir memoria, autoridad o marco conceptual que madure con el tiempo."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Construir memoria, autoridad o marco conceptual que madure con el tiempo."
- **Validación local:** La salida es válida sólo si `mediano_plazo` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `seriado`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-seriado-seriado`
- **Resumen regional:** Valor declarado para el campo horizonte_temporal: seriado.
- **Operación semántica obligatoria:** La pieza debe funcionar como parte de cadena; incluir continuidad, referencias o siguiente paso.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`: "Debe registrar `seriado` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La pieza debe funcionar como parte de cadena; incluir continuidad, referencias o siguiente paso."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: La pieza debe funcionar como parte de cadena; incluir continuidad, referencias o siguiente paso."
- **Validación local:** La salida es válida sólo si `seriado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `acumulativo`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.horizonte_temporal`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-horizonte_temporal-acumulativo-acumulativo`
- **Resumen regional:** Valor declarado para el campo horizonte_temporal: acumulativo.
- **Operación semántica obligatoria:** La pieza debe sumar a un sistema de contenido o aprendizaje; preservar conceptos recurrentes.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.horizonte_temporal`: "Debe registrar `acumulativo` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La pieza debe sumar a un sistema de contenido o aprendizaje; preservar conceptos recurrentes."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_argumental`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: La pieza debe sumar a un sistema de contenido o aprendizaje; preservar conceptos recurrentes."
- **Validación local:** La salida es válida sólo si `acumulativo` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `regimen_de_resolucion_buscada`

**Función semántica del campo:** Define el modo en que la pieza resuelve o deja abierta la tensión conceptual.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`
- `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `resolucion_inmediata`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_inmediata-resolucion_inmediata`
- **Resumen regional:** Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_inmediata.
- **Operación semántica obligatoria:** Cerrar la tensión dentro del carousel; el receptor debe salir con respuesta clara.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`: "Debe registrar `resolucion_inmediata` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Cerrar la tensión dentro del carousel; el receptor debe salir con respuesta clara."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Cerrar la tensión dentro del carousel; el receptor debe salir con respuesta clara."
- **Validación local:** La salida es válida sólo si `resolucion_inmediata` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `resolucion_parcial`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_parcial-resolucion_parcial`
- **Resumen regional:** Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_parcial.
- **Operación semántica obligatoria:** Resolver una parte y dejar una pregunta, caso o aplicación para continuar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`: "Debe registrar `resolucion_parcial` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Resolver una parte y dejar una pregunta, caso o aplicación para continuar."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Resolver una parte y dejar una pregunta, caso o aplicación para continuar."
- **Validación local:** La salida es válida sólo si `resolucion_parcial` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `resolucion_progresiva`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_progresiva-resolucion_progresiva`
- **Resumen regional:** Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_progresiva.
- **Operación semántica obligatoria:** Distribuir la resolución por láminas; cada paso debe acercar a una comprensión final.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`: "Debe registrar `resolucion_progresiva` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Distribuir la resolución por láminas; cada paso debe acercar a una comprensión final."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Distribuir la resolución por láminas; cada paso debe acercar a una comprensión final."
- **Validación local:** La salida es válida sólo si `resolucion_progresiva` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `resolucion_diferida`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_diferida-resolucion_diferida`
- **Resumen regional:** Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_diferida.
- **Operación semántica obligatoria:** Posponer cierre hacia otra pieza, recurso o interacción; debe explicitar continuidad.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`: "Debe registrar `resolucion_diferida` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Posponer cierre hacia otra pieza, recurso o interacción; debe explicitar continuidad."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Posponer cierre hacia otra pieza, recurso o interacción; debe explicitar continuidad."
- **Validación local:** La salida es válida sólo si `resolucion_diferida` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `resolucion_abierta_a_continuidad`

- **Ruta de entrada:** `dimension_escala_temporal_y_resolucion_realizativa.regimen_de_resolucion_buscada`
- **id regional:** `grafo_de_regiones-grafo_dimension_escala_temporal_y_resolucion_realizativa-regimen_de_resolucion_buscada-resolucion_abierta_a_continuidad-resolucion_abierta_a_continuidad`
- **Resumen regional:** Valor declarado para el campo regimen_de_resolucion_buscada: resolucion_abierta_a_continuidad.
- **Operación semántica obligatoria:** Cerrar lo mínimo y dejar el sistema abierto a serie, comentario o profundización.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.escala_temporal_y_resolucion_resultante.regimen_de_resolucion_buscada`: "Debe registrar `resolucion_abierta_a_continuidad` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_resolucion_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Cerrar lo mínimo y dejar el sistema abierto a serie, comentario o profundización."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.proyeccion_hacia_lamina_siguiente`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Cerrar lo mínimo y dejar el sistema abierto a serie, comentario o profundización."
- **Validación local:** La salida es válida sólo si `resolucion_abierta_a_continuidad` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_identidad_operativa_de_la_realizacion

#### `formulacion_canonica`

**Función semántica del campo:** Define la identidad operativa de la realización que el protocolo debe construir.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.formulacion_canonica`
- `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`
- `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `crear_manifestacion_codominial_carousel`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.formulacion_canonica`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_manifestacion_codominial_carousel-crear_manifestacion_codominial_carousel`
- **Resumen regional:** Valor que define la intención operativa de producir una salida final perteneciente al codominio `carousel`.
- **Operación semántica obligatoria:** Construir la salida como manifestación completa con cabecera, macroestructura, láminas, continuidad y justificación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.formulacion_canonica`: "Debe registrar `crear_manifestacion_codominial_carousel` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Construir la salida como manifestación completa con cabecera, macroestructura, láminas, continuidad y justificación."
  - debe afectar `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`: "Debe aplicar `crear_manifestacion_codominial_carousel` en este campo mediante una decisión visible y trazable: Construir la salida como manifestación completa con cabecera, macroestructura, láminas, continuidad y justificación."
- **Validación local:** La salida es válida sólo si `crear_manifestacion_codominial_carousel` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `crear_secuencia_laminar_visual_textual`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.formulacion_canonica`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_secuencia_laminar_visual_textual-crear_secuencia_laminar_visual_textual`
- **Resumen regional:** Valor que define la realización como una secuencia compuesta por unidades laminares, donde texto e imagen pueden operar como partes estructurales de la pieza.
- **Operación semántica obligatoria:** Priorizar la secuencia de láminas como unidad material visual-textual.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.formulacion_canonica`: "Debe registrar `crear_secuencia_laminar_visual_textual` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Priorizar la secuencia de láminas como unidad material visual-textual."
  - debe afectar `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`: "Debe aplicar `crear_secuencia_laminar_visual_textual` en este campo mediante una decisión visible y trazable: Priorizar la secuencia de láminas como unidad material visual-textual."
- **Validación local:** La salida es válida sólo si `crear_secuencia_laminar_visual_textual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `crear_carousel_visual_textual`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.formulacion_canonica`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-formulacion_canonica-crear_carousel_visual_textual-crear_carousel_visual_textual`
- **Resumen regional:** Valor más directo y legible para declarar que la realización esperada es un carousel compuesto por texto e imagen.
- **Operación semántica obligatoria:** Asegurar compatibilidad con formato carousel: lectura por deslizamiento, láminas discretas y continuidad interlaminar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.formulacion_canonica`: "Debe registrar `crear_carousel_visual_textual` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Asegurar compatibilidad con formato carousel: lectura por deslizamiento, láminas discretas y continuidad interlaminar."
  - debe afectar `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`: "Debe aplicar `crear_carousel_visual_textual` en este campo mediante una decisión visible y trazable: Asegurar compatibilidad con formato carousel: lectura por deslizamiento, láminas discretas y continuidad interlaminar."
- **Validación local:** La salida es válida sólo si `crear_carousel_visual_textual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `nivel_de_especificidad`

**Función semántica del campo:** Define el grado de precisión con el que se enmarca la pieza.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.nivel_de_especificidad`
- `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`
- `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `general`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-general-general`
- **Resumen regional:** Valor general declarado para el campo nivel_de_especificidad.
- **Operación semántica obligatoria:** Mantener formulación amplia y transferible; evitar detalles contextuales innecesarios.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.nivel_de_especificidad`: "Debe registrar `general` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Mantener formulación amplia y transferible; evitar detalles contextuales innecesarios."
  - debe afectar `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`: "Debe aplicar `general` en este campo mediante una decisión visible y trazable: Mantener formulación amplia y transferible; evitar detalles contextuales innecesarios."
- **Validación local:** La salida es válida sólo si `general` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `intermedia`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-intermedia-intermedia`
- **Resumen regional:** Valor intermedia declarado para el campo nivel_de_especificidad.
- **Operación semántica obligatoria:** Combinar orientación general con decisiones concretas suficientes para producir salida.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.nivel_de_especificidad`: "Debe registrar `intermedia` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Combinar orientación general con decisiones concretas suficientes para producir salida."
  - debe afectar `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`: "Debe aplicar `intermedia` en este campo mediante una decisión visible y trazable: Combinar orientación general con decisiones concretas suficientes para producir salida."
- **Validación local:** La salida es válida sólo si `intermedia` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `especifica`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.nivel_de_especificidad`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-especifica-especifica`
- **Resumen regional:** Valor especifica declarado para el campo nivel_de_especificidad.
- **Operación semántica obligatoria:** Fijar decisiones locales, detalles de lámina y restricciones concretas con alta precisión.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.nivel_de_especificidad`: "Debe registrar `especifica` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.composicion_local.grado_de_carga_conceptual`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Fijar decisiones locales, detalles de lámina y restricciones concretas con alta precisión."
  - debe afectar `capa_de_laminas.laminas.capa_de_justificacion_de_composicion.justificaciones_dimensionales.dimension_identidad_operativa_de_la_realizacion`: "Debe aplicar `especifica` en este campo mediante una decisión visible y trazable: Fijar decisiones locales, detalles de lámina y restricciones concretas con alta precisión."
- **Validación local:** La salida es válida sólo si `especifica` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `prioridad_de_intencion`

**Función semántica del campo:** Define la jerarquía de la intención dentro de la pieza y frente a otras funciones auxiliares.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion`
- `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`
- `capa_de_laminas.laminas.funcion_de_la_lamina`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `principal`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-principal-principal`
- **Resumen regional:** Valor principal declarado para el campo prioridad_de_intencion.
- **Operación semántica obligatoria:** La intención gobierna arquitectura, apertura, cierre y justificación.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion`: "Debe registrar `principal` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La intención gobierna arquitectura, apertura, cierre y justificación."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `principal` en este campo mediante una decisión visible y trazable: La intención gobierna arquitectura, apertura, cierre y justificación."
- **Validación local:** La salida es válida sólo si `principal` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `secundaria`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-secundaria-secundaria`
- **Resumen regional:** Valor secundaria declarado para el campo prioridad_de_intencion.
- **Operación semántica obligatoria:** La intención modula decisiones sin desplazar la función dominante.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion`: "Debe registrar `secundaria` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La intención modula decisiones sin desplazar la función dominante."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `secundaria` en este campo mediante una decisión visible y trazable: La intención modula decisiones sin desplazar la función dominante."
- **Validación local:** La salida es válida sólo si `secundaria` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `terciaria`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-terciaria-terciaria`
- **Resumen regional:** Valor terciaria declarado para el campo prioridad_de_intencion.
- **Operación semántica obligatoria:** La intención aparece como apoyo o matiz, no como eje visible.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion`: "Debe registrar `terciaria` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La intención aparece como apoyo o matiz, no como eje visible."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `terciaria` en este campo mediante una decisión visible y trazable: La intención aparece como apoyo o matiz, no como eje visible."
- **Validación local:** La salida es válida sólo si `terciaria` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `auxiliar`

- **Ruta de entrada:** `dimension_identidad_operativa_de_la_realizacion.prioridad_de_intencion`
- **id regional:** `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-prioridad_de_intencion-auxiliar-auxiliar`
- **Resumen regional:** Valor auxiliar declarado para el campo prioridad_de_intencion.
- **Operación semántica obligatoria:** La intención sólo sirve para resolver detalles, coherencia o soporte.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identidad_operativa_resultante.prioridad_de_intencion`: "Debe registrar `auxiliar` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.componentes_macroestructurales_activados`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La intención sólo sirve para resolver detalles, coherencia o soporte."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `auxiliar` en este campo mediante una decisión visible y trazable: La intención sólo sirve para resolver detalles, coherencia o soporte."
- **Validación local:** La salida es válida sólo si `auxiliar` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_marco_de_materializacion

#### `aplicacion_de_plataforma`

**Función semántica del campo:** Define la implementación concreta de plataforma en la que la secuencia laminar debe poder publicarse o adaptarse.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`
- `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`
- `capa_macroestructural.arquitectura_global.segmentacion_interna`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `instagram_carousel_post`

- **Ruta de entrada:** `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-instagram_carousel_post-instagram_carousel_post`
- **Resumen regional:** Valor que indica que la pieza se publicará como post carousel en Instagram.
- **Operación semántica obligatoria:** Ajustar a lectura visual por tarjetas, guardabilidad y coherencia estética de feed.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`: "Debe registrar `instagram_carousel_post` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`: "Debe registrar `instagram_carousel_post` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.segmentacion_interna`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Ajustar a lectura visual por tarjetas, guardabilidad y coherencia estética de feed."
- **Validación local:** La salida es válida sólo si `instagram_carousel_post` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `tiktok_photo_mode`

- **Ruta de entrada:** `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-tiktok_photo_mode-tiktok_photo_mode`
- **Resumen regional:** Valor que indica que la pieza se adaptará al modo fotográfico o carousel de TikTok.
- **Operación semántica obligatoria:** Priorizar ritmo de deslizamiento, impacto rápido y lectura móvil de alta fricción competitiva.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`: "Debe registrar `tiktok_photo_mode` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`: "Debe registrar `tiktok_photo_mode` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.segmentacion_interna`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Priorizar ritmo de deslizamiento, impacto rápido y lectura móvil de alta fricción competitiva."
- **Validación local:** La salida es válida sólo si `tiktok_photo_mode` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `linkedin_document_post`

- **Ruta de entrada:** `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-linkedin_document_post-linkedin_document_post`
- **Resumen regional:** Valor que indica que la pieza se adaptará como documento, carrusel o secuencia visual consumible dentro de LinkedIn.
- **Operación semántica obligatoria:** Priorizar claridad profesional, densidad moderada/alta y autoridad editorial.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`: "Debe registrar `linkedin_document_post` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`: "Debe registrar `linkedin_document_post` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.segmentacion_interna`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Priorizar claridad profesional, densidad moderada/alta y autoridad editorial."
- **Validación local:** La salida es válida sólo si `linkedin_document_post` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `carousel_multiplataforma`

- **Ruta de entrada:** `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-carousel_multiplataforma-carousel_multiplataforma`
- **Resumen regional:** Valor que indica que la manifestación se construirá como base reutilizable para varias plataformas.
- **Operación semántica obligatoria:** Construir estructura robusta adaptable a varias plataformas sin depender de un gesto propio de una sola.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`: "Debe registrar `carousel_multiplataforma` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`: "Debe registrar `carousel_multiplataforma` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.segmentacion_interna`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Construir estructura robusta adaptable a varias plataformas sin depender de un gesto propio de una sola."
- **Validación local:** La salida es válida sólo si `carousel_multiplataforma` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `aplicacion_pendiente_de_especificacion`

- **Ruta de entrada:** `dimension_marco_de_materializacion.aplicacion_de_plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-aplicacion_pendiente_de_especificacion-aplicacion_pendiente_de_especificacion`
- **Resumen regional:** Valor provisional para casos en los que se conoce que la realización será carousel, pero aún no se sabe bajo qué aplicación concreta de plataforma se publicará.
- **Operación semántica obligatoria:** Mantener decisiones neutrales y declarar supuestos pendientes de plataforma.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.aplicacion_de_plataforma`: "Debe registrar `aplicacion_pendiente_de_especificacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.aplicacion_de_plataforma`: "Debe registrar `aplicacion_pendiente_de_especificacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.segmentacion_interna`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Mantener decisiones neutrales y declarar supuestos pendientes de plataforma."
- **Validación local:** La salida es válida sólo si `aplicacion_pendiente_de_especificacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `clase_de_materializacion`

**Función semántica del campo:** Fija la clase material de la salida como secuencia laminar visual.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identificacion_general.clase_de_materializacion`
- `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.clase_de_materializacion`
- `capa_macroestructural.arquitectura_global.unidad_de_segmento`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `secuencia_laminar_visual`

- **Ruta de entrada:** `dimension_marco_de_materializacion.clase_de_materializacion`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion-secuencia_laminar_visual-secuencia_laminar_visual`
- **Resumen regional:** Valor que fija la materialidad propia de `carousel/`: una salida compuesta por láminas visuales organizadas en secuencia.
- **Operación semántica obligatoria:** Construir como serie de láminas fijas; no como escena, video, audio, hilo textual ni guion audiovisual.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.clase_de_materializacion`: "Debe registrar `secuencia_laminar_visual` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.clase_de_materializacion`: "Debe registrar `secuencia_laminar_visual` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.unidad_de_segmento`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Construir como serie de láminas fijas; no como escena, video, audio, hilo textual ni guion audiovisual."
- **Validación local:** La salida es válida sólo si `secuencia_laminar_visual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `plataforma`

**Función semántica del campo:** Define el entorno de distribución o adaptación de la pieza.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`
- `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`
- `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `instagram`

- **Ruta de entrada:** `dimension_marco_de_materializacion.plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-instagram-instagram`
- **Resumen regional:** Valor que indica que la manifestación será adaptada para publicación en Instagram.
- **Operación semántica obligatoria:** Optimizar para guardado, estética visual, portada fuerte y coherencia de feed.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`: "Debe registrar `instagram` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`: "Debe registrar `instagram` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Optimizar para guardado, estética visual, portada fuerte y coherencia de feed."
- **Validación local:** La salida es válida sólo si `instagram` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `tiktok`

- **Ruta de entrada:** `dimension_marco_de_materializacion.plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-tiktok-tiktok`
- **Resumen regional:** Valor declarado para el campo plataforma: tiktok.
- **Operación semántica obligatoria:** Optimizar para atención rápida, lectura móvil y progresión de alta inmediatez.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`: "Debe registrar `tiktok` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`: "Debe registrar `tiktok` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Optimizar para atención rápida, lectura móvil y progresión de alta inmediatez."
- **Validación local:** La salida es válida sólo si `tiktok` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `linkedin`

- **Ruta de entrada:** `dimension_marco_de_materializacion.plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-linkedin-linkedin`
- **Resumen regional:** Valor que indica que la manifestación será adaptada a un entorno profesional, educativo, técnico o institucional.
- **Operación semántica obligatoria:** Optimizar para credibilidad, claridad profesional, valor metodológico y lectura documental.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`: "Debe registrar `linkedin` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`: "Debe registrar `linkedin` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Optimizar para credibilidad, claridad profesional, valor metodológico y lectura documental."
- **Validación local:** La salida es válida sólo si `linkedin` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `multiplataforma`

- **Ruta de entrada:** `dimension_marco_de_materializacion.plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-multiplataforma-multiplataforma`
- **Resumen regional:** Valor que indica que el carousel debe construirse de forma suficientemente general para poder adaptarse a más de una plataforma.
- **Operación semántica obligatoria:** Evitar dependencias excesivas de una plataforma; usar estructura visual-textual adaptable.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`: "Debe registrar `multiplataforma` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`: "Debe registrar `multiplataforma` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Evitar dependencias excesivas de una plataforma; usar estructura visual-textual adaptable."
- **Validación local:** La salida es válida sólo si `multiplataforma` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `plataforma_pendiente_de_especificacion`

- **Ruta de entrada:** `dimension_marco_de_materializacion.plataforma`
- **id regional:** `grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-plataforma_pendiente_de_especificacion-plataforma_pendiente_de_especificacion`
- **Resumen regional:** Valor provisional para casos en los que aún no se decide la plataforma final.
- **Operación semántica obligatoria:** Mantener neutralidad y declarar adaptaciones pendientes en notas de coherencia.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.identificacion_general.plataforma`: "Debe registrar `plataforma_pendiente_de_especificacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `cabecera_identidad_general_de_la_pieza.marco_de_materializacion_resultante.plataforma`: "Debe registrar `plataforma_pendiente_de_especificacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.cantidad_total_de_laminas`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Mantener neutralidad y declarar adaptaciones pendientes en notas de coherencia."
- **Validación local:** La salida es válida sólo si `plataforma_pendiente_de_especificacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_orientacion_funcional_pragmatica

#### `accion_esperada`

**Función semántica del campo:** Define la acción que la pieza debe facilitar después o durante la lectura.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `guardar`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-guardar-guardar`
- **Resumen regional:** Valor guardar declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Construir utilidad conservable: lista, método, plantilla, fórmula, mapa o síntesis.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `guardar` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Construir utilidad conservable: lista, método, plantilla, fórmula, mapa o síntesis."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Construir utilidad conservable: lista, método, plantilla, fórmula, mapa o síntesis."
- **Validación local:** La salida es válida sólo si `guardar` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `compartir`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-compartir-compartir`
- **Resumen regional:** Valor compartir declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Construir valor socialmente transferible: contraste claro, frase memorable o utilidad para terceros.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `compartir` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Construir valor socialmente transferible: contraste claro, frase memorable o utilidad para terceros."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Construir valor socialmente transferible: contraste claro, frase memorable o utilidad para terceros."
- **Validación local:** La salida es válida sólo si `compartir` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `comentar`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-comentar-comentar`
- **Resumen regional:** Valor comentar declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Abrir pregunta, toma de postura o diagnóstico que invite respuesta.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `comentar` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Abrir pregunta, toma de postura o diagnóstico que invite respuesta."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Abrir pregunta, toma de postura o diagnóstico que invite respuesta."
- **Validación local:** La salida es válida sólo si `comentar` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `ir_al_perfil`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-ir_al_perfil-ir_al_perfil`
- **Resumen regional:** Valor ir_al_perfil declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Presentar valor o autoridad que motive explorar más contenido del emisor.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `ir_al_perfil` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Presentar valor o autoridad que motive explorar más contenido del emisor."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Presentar valor o autoridad que motive explorar más contenido del emisor."
- **Validación local:** La salida es válida sólo si `ir_al_perfil` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `hacer_click`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-hacer_click-hacer_click`
- **Resumen regional:** Valor hacer_click declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Orientar la pieza hacia una acción externa; debe justificar por qué salir del carousel.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `hacer_click` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Orientar la pieza hacia una acción externa; debe justificar por qué salir del carousel."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Orientar la pieza hacia una acción externa; debe justificar por qué salir del carousel."
- **Validación local:** La salida es válida sólo si `hacer_click` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `seguir_cuenta`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-seguir_cuenta-seguir_cuenta`
- **Resumen regional:** Valor seguir_cuenta declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Mostrar promesa de continuidad y consistencia temática.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `seguir_cuenta` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Mostrar promesa de continuidad y consistencia temática."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Mostrar promesa de continuidad y consistencia temática."
- **Validación local:** La salida es válida sólo si `seguir_cuenta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `consumir_parte_siguiente`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.accion_esperada`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-accion_esperada-consumir_parte_siguiente-consumir_parte_siguiente`
- **Resumen regional:** Valor consumir_parte_siguiente declarado para el campo accion_esperada.
- **Operación semántica obligatoria:** Cerrar con tensión o promesa que apunte a la siguiente pieza.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.accion_esperada`: "Debe registrar `consumir_parte_siguiente` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.CTA_local`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Cerrar con tensión o promesa que apunte a la siguiente pieza."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.funcion_del_deslizamiento`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Cerrar con tensión o promesa que apunte a la siguiente pieza."
- **Validación local:** La salida es válida sólo si `consumir_parte_siguiente` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `configuracion_discursiva`

**Función semántica del campo:** Define el modo discursivo dominante: síntesis, explicación, operación, definición, argumento, captación o combinación controlada.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`
- `capa_macroestructural.arquitectura_global.progresion_interlaminar`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `sintetizadora`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-sintetizadora-sintetizadora`
- **Resumen regional:** Valor sintetizadora declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Reducir a núcleo, fórmula, lista breve o mapa compacto.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `sintetizadora` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Reducir a núcleo, fórmula, lista breve o mapa compacto."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Reducir a núcleo, fórmula, lista breve o mapa compacto."
- **Validación local:** La salida es válida sólo si `sintetizadora` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `explicativa`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-explicativa-explicativa`
- **Resumen regional:** Valor explicativa declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Desplegar causa, función, ejemplo o mecanismo de comprensión.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `explicativa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Desplegar causa, función, ejemplo o mecanismo de comprensión."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Desplegar causa, función, ejemplo o mecanismo de comprensión."
- **Validación local:** La salida es válida sólo si `explicativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `operativa`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-operativa-operativa`
- **Resumen regional:** Valor operativa declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Convertir la idea en pasos, plantilla, método o criterio aplicable.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `operativa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Convertir la idea en pasos, plantilla, método o criterio aplicable."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Convertir la idea en pasos, plantilla, método o criterio aplicable."
- **Validación local:** La salida es válida sólo si `operativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `definicional`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-definicional-definicional`
- **Resumen regional:** Valor definicional declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Fijar fronteras, identidad, diferencias y condiciones de pertenencia.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `definicional` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Fijar fronteras, identidad, diferencias y condiciones de pertenencia."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Fijar fronteras, identidad, diferencias y condiciones de pertenencia."
- **Validación local:** La salida es válida sólo si `definicional` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `argumentativa`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-argumentativa-argumentativa`
- **Resumen regional:** Valor argumentativa declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Sostener una tesis mediante razones, contraste o evidencia conceptual.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `argumentativa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Sostener una tesis mediante razones, contraste o evidencia conceptual."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Sostener una tesis mediante razones, contraste o evidencia conceptual."
- **Validación local:** La salida es válida sólo si `argumentativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `captativa`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-captativa-captativa`
- **Resumen regional:** Valor captativa declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Priorizar gancho, tensión, curiosidad y entrada rápida.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `captativa` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Priorizar gancho, tensión, curiosidad y entrada rápida."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Priorizar gancho, tensión, curiosidad y entrada rápida."
- **Validación local:** La salida es válida sólo si `captativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `hibrida_controlada`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.configuracion_discursiva`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-configuracion_discursiva-hibrida_controlada-hibrida_controlada`
- **Resumen regional:** Valor hibrida_controlada declarado para el campo configuracion_discursiva.
- **Operación semántica obligatoria:** Combinar modos, pero declarar qué modo domina en cada tramo o lámina.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.configuracion_discursiva`: "Debe registrar `hibrida_controlada` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.cuerpo_textual`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Combinar modos, pero declarar qué modo domina en cada tramo o lámina."
  - debe afectar `capa_macroestructural.arquitectura_global.progresion_interlaminar`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Combinar modos, pero declarar qué modo domina en cada tramo o lámina."
- **Validación local:** La salida es válida sólo si `hibrida_controlada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `efecto_buscado`

**Función semántica del campo:** Define el efecto cognitivo, afectivo o conductual que la pieza debe producir en el receptor.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`
- `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `comprension_rapida`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-comprension_rapida-comprension_rapida`
- **Resumen regional:** Valor comprension_rapida declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Reducir carga, usar estructura evidente y entregar claridad temprana.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `comprension_rapida` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Reducir carga, usar estructura evidente y entregar claridad temprana."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Reducir carga, usar estructura evidente y entregar claridad temprana."
- **Validación local:** La salida es válida sólo si `comprension_rapida` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `deseo_de_guardar`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_guardar-deseo_de_guardar`
- **Resumen regional:** Valor deseo_de_guardar declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Producir utilidad reutilizable: mapa, lista, fórmula, plantilla o checklist.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `deseo_de_guardar` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Producir utilidad reutilizable: mapa, lista, fórmula, plantilla o checklist."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Producir utilidad reutilizable: mapa, lista, fórmula, plantilla o checklist."
- **Validación local:** La salida es válida sólo si `deseo_de_guardar` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `deseo_de_compartir`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-deseo_de_compartir-deseo_de_compartir`
- **Resumen regional:** Valor deseo_de_compartir declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Hacer que la pieza sea socialmente útil, sorprendente, clara o identificable.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `deseo_de_compartir` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Hacer que la pieza sea socialmente útil, sorprendente, clara o identificable."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Hacer que la pieza sea socialmente útil, sorprendente, clara o identificable."
- **Validación local:** La salida es válida sólo si `deseo_de_compartir` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `curiosidad`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-curiosidad-curiosidad`
- **Resumen regional:** Valor curiosidad declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Abrir una brecha de información sin frustrar al receptor.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `curiosidad` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Abrir una brecha de información sin frustrar al receptor."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Abrir una brecha de información sin frustrar al receptor."
- **Validación local:** La salida es válida sólo si `curiosidad` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `expectativa_de_resolucion`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-expectativa_de_resolucion-expectativa_de_resolucion`
- **Resumen regional:** Valor expectativa_de_resolucion declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Prometer cierre o explicación y sostener tensión hasta resolver.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `expectativa_de_resolucion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Prometer cierre o explicación y sostener tensión hasta resolver."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Prometer cierre o explicación y sostener tensión hasta resolver."
- **Validación local:** La salida es válida sólo si `expectativa_de_resolucion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `retencion`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-retencion-retencion`
- **Resumen regional:** Valor retencion declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Crear razones sucesivas para deslizar: preguntas, pasos, contraste o progreso visible.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `retencion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Crear razones sucesivas para deslizar: preguntas, pasos, contraste o progreso visible."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Crear razones sucesivas para deslizar: preguntas, pasos, contraste o progreso visible."
- **Validación local:** La salida es válida sólo si `retencion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `identificacion`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-identificacion-identificacion`
- **Resumen regional:** Valor identificacion declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Hacer que el receptor reconozca su situación, problema o aspiración.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `identificacion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Hacer que el receptor reconozca su situación, problema o aspiración."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Hacer que el receptor reconozca su situación, problema o aspiración."
- **Validación local:** La salida es válida sólo si `identificacion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `disposicion_a_accion`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.efecto_buscado`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-disposicion_a_accion-disposicion_a_accion`
- **Resumen regional:** Valor disposicion_a_accion declarado para el campo efecto_buscado.
- **Operación semántica obligatoria:** Preparar al receptor para comentar, guardar, seguir, hacer clic o aplicar.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.efecto_buscado`: "Debe registrar `disposicion_a_accion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_de_laminas.laminas.capa_de_continuidad_interlaminar.continuidad_atencional`: "Debe modificar transición, continuidad argumental o función del deslizamiento aplicando esta regla: Preparar al receptor para comentar, guardar, seguir, hacer clic o aplicar."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.microcopy`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Preparar al receptor para comentar, guardar, seguir, hacer clic o aplicar."
- **Validación local:** La salida es válida sólo si `disposicion_a_accion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `funcion_dominante`

**Función semántica del campo:** Define la función principal de la pieza dentro del sistema de contenido.

**Campos de salida afectados por cualquier valor de este campo:**

- `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`
- `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`
- `capa_de_laminas.laminas.funcion_de_la_lamina`
- `capa_de_laminas.laminas.objetivo_local`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `captar_atencion`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-captar_atencion-captar_atencion`
- **Resumen regional:** Valor captar_atencion declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** La portada y primera transición deben detener el desplazamiento con tensión o promesa clara.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `captar_atencion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La portada y primera transición deben detener el desplazamiento con tensión o promesa clara."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `captar_atencion` en este campo mediante una decisión visible y trazable: La portada y primera transición deben detener el desplazamiento con tensión o promesa clara."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `captar_atencion` en este campo mediante una decisión visible y trazable: La portada y primera transición deben detener el desplazamiento con tensión o promesa clara."
- **Validación local:** La salida es válida sólo si `captar_atencion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `sintetizar`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-sintetizar-sintetizar`
- **Resumen regional:** Valor sintetizar declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** La pieza debe comprimir un marco o idea en una estructura fácil de retener.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `sintetizar` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La pieza debe comprimir un marco o idea en una estructura fácil de retener."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `sintetizar` en este campo mediante una decisión visible y trazable: La pieza debe comprimir un marco o idea en una estructura fácil de retener."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `sintetizar` en este campo mediante una decisión visible y trazable: La pieza debe comprimir un marco o idea en una estructura fácil de retener."
- **Validación local:** La salida es válida sólo si `sintetizar` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `enseñar`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-enseñar-enseñar`
- **Resumen regional:** Valor enseñar declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** La pieza debe producir aprendizaje explícito, progresión didáctica y ejemplo o método.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `enseñar` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La pieza debe producir aprendizaje explícito, progresión didáctica y ejemplo o método."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `enseñar` en este campo mediante una decisión visible y trazable: La pieza debe producir aprendizaje explícito, progresión didáctica y ejemplo o método."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `enseñar` en este campo mediante una decisión visible y trazable: La pieza debe producir aprendizaje explícito, progresión didáctica y ejemplo o método."
- **Validación local:** La salida es válida sólo si `enseñar` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `activar_interaccion`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-activar_interaccion-activar_interaccion`
- **Resumen regional:** Valor activar_interaccion declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** Debe abrir pregunta, CTA o dinámica que convierta lectura en respuesta.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `activar_interaccion` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe abrir pregunta, CTA o dinámica que convierta lectura en respuesta."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `activar_interaccion` en este campo mediante una decisión visible y trazable: Debe abrir pregunta, CTA o dinámica que convierta lectura en respuesta."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `activar_interaccion` en este campo mediante una decisión visible y trazable: Debe abrir pregunta, CTA o dinámica que convierta lectura en respuesta."
- **Validación local:** La salida es válida sólo si `activar_interaccion` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `distribuir`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-distribuir-distribuir`
- **Resumen regional:** Valor distribuir declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** Debe hacer la idea compartible, transferible o socialmente útil.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `distribuir` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe hacer la idea compartible, transferible o socialmente útil."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `distribuir` en este campo mediante una decisión visible y trazable: Debe hacer la idea compartible, transferible o socialmente útil."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `distribuir` en este campo mediante una decisión visible y trazable: Debe hacer la idea compartible, transferible o socialmente útil."
- **Validación local:** La salida es válida sólo si `distribuir` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `convertir`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-convertir-convertir`
- **Resumen regional:** Valor convertir declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** Debe conducir hacia acción de valor: perfil, click, mensaje, recurso, compra o seguimiento.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `convertir` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe conducir hacia acción de valor: perfil, click, mensaje, recurso, compra o seguimiento."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `convertir` en este campo mediante una decisión visible y trazable: Debe conducir hacia acción de valor: perfil, click, mensaje, recurso, compra o seguimiento."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `convertir` en este campo mediante una decisión visible y trazable: Debe conducir hacia acción de valor: perfil, click, mensaje, recurso, compra o seguimiento."
- **Validación local:** La salida es válida sólo si `convertir` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `abrir_serie`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-abrir_serie-abrir_serie`
- **Resumen regional:** Valor abrir_serie declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** Debe iniciar continuidad y dejar una promesa explícita de desarrollo posterior.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `abrir_serie` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe iniciar continuidad y dejar una promesa explícita de desarrollo posterior."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `abrir_serie` en este campo mediante una decisión visible y trazable: Debe iniciar continuidad y dejar una promesa explícita de desarrollo posterior."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `abrir_serie` en este campo mediante una decisión visible y trazable: Debe iniciar continuidad y dejar una promesa explícita de desarrollo posterior."
- **Validación local:** La salida es válida sólo si `abrir_serie` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `continuar_serie`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-continuar_serie-continuar_serie`
- **Resumen regional:** Valor continuar_serie declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** Debe enlazar con lo anterior y avanzar el recorrido.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `continuar_serie` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe enlazar con lo anterior y avanzar el recorrido."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `continuar_serie` en este campo mediante una decisión visible y trazable: Debe enlazar con lo anterior y avanzar el recorrido."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `continuar_serie` en este campo mediante una decisión visible y trazable: Debe enlazar con lo anterior y avanzar el recorrido."
- **Validación local:** La salida es válida sólo si `continuar_serie` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `cerrar_serie`

- **Ruta de entrada:** `dimension_orientacion_funcional_pragmatica.funcion_dominante`
- **id regional:** `grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-cerrar_serie-cerrar_serie`
- **Resumen regional:** Valor cerrar_serie declarado para el campo funcion_dominante.
- **Operación semántica obligatoria:** Debe recapitular, resolver y cerrar el arco de contenido.
- **Uso mínimo exigido:**
  - debe afectar `cabecera_identidad_general_de_la_pieza.orientacion_funcional_resultante.funcion_dominante`: "Debe registrar `cerrar_serie` como valor resultante y declarar que gobierna decisiones posteriores; no debe quedar como etiqueta decorativa."
  - debe afectar `capa_macroestructural.arquitectura_global.funcion_global_de_la_secuencia`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Debe recapitular, resolver y cerrar el arco de contenido."
  - debe afectar `capa_de_laminas.laminas.funcion_de_la_lamina`: "Debe aplicar `cerrar_serie` en este campo mediante una decisión visible y trazable: Debe recapitular, resolver y cerrar el arco de contenido."
  - debe afectar `capa_de_laminas.laminas.objetivo_local`: "Debe aplicar `cerrar_serie` en este campo mediante una decisión visible y trazable: Debe recapitular, resolver y cerrar el arco de contenido."
- **Validación local:** La salida es válida sólo si `cerrar_serie` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

### dimension_recursos_complementarios_de_manifestacion

#### `funcion_predominante_de_los_recursos_complementarios`

**Función semántica del campo:** Define para qué sirven principalmente los recursos visuales/textuales/estructurales usados en la manifestación.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`
- `capa_de_laminas.laminas.composicion_local.funcion_visual_local`
- `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `explicativa`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-explicativa-explicativa`
- **Resumen regional:** Valor explicativa declarado para el campo funcion_predominante_de_los_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso debe aclarar una relación o mecanismo.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe aclarar una relación o mecanismo."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe aclarar una relación o mecanismo."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe aclarar una relación o mecanismo."
- **Validación local:** La salida es válida sólo si `explicativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `ilustrativa`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-ilustrativa-ilustrativa`
- **Resumen regional:** Valor ilustrativa declarado para el campo funcion_predominante_de_los_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso debe ejemplificar o hacer visible una idea.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe ejemplificar o hacer visible una idea."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe ejemplificar o hacer visible una idea."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe ejemplificar o hacer visible una idea."
- **Validación local:** La salida es válida sólo si `ilustrativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `simbolica`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-simbolica-simbolica`
- **Resumen regional:** Valor simbolica declarado para el campo funcion_predominante_de_los_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso debe condensar significado mediante metáfora, objeto o escena.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe condensar significado mediante metáfora, objeto o escena."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe condensar significado mediante metáfora, objeto o escena."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe condensar significado mediante metáfora, objeto o escena."
- **Validación local:** La salida es válida sólo si `simbolica` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `atencional`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-atencional-atencional`
- **Resumen regional:** Valor atencional declarado para el campo funcion_predominante_de_los_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso debe capturar o sostener atención sin romper coherencia.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe capturar o sostener atención sin romper coherencia."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe capturar o sostener atención sin romper coherencia."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe capturar o sostener atención sin romper coherencia."
- **Validación local:** La salida es válida sólo si `atencional` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `contrastiva`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-contrastiva-contrastiva`
- **Resumen regional:** Valor contrastiva declarado para el campo funcion_predominante_de_los_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso debe organizar diferencias, oposición o comparación.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe organizar diferencias, oposición o comparación."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe organizar diferencias, oposición o comparación."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe organizar diferencias, oposición o comparación."
- **Validación local:** La salida es válida sólo si `contrastiva` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `operativa`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-operativa-operativa`
- **Resumen regional:** Valor que indica que el recurso no solo ilustra, sino que ayuda a ejecutar una acción o aplicar una estructura.
- **Operación semántica obligatoria:** El recurso debe ayudar a usar, aplicar o ejecutar una estructura.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe ayudar a usar, aplicar o ejecutar una estructura."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe ayudar a usar, aplicar o ejecutar una estructura."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe ayudar a usar, aplicar o ejecutar una estructura."
- **Validación local:** La salida es válida sólo si `operativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `metodologica`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-metodologica-metodologica`
- **Resumen regional:** Valor que indica que el recurso presenta o sostiene un método.
- **Operación semántica obligatoria:** El recurso debe presentar un método reproducible, proceso o framework.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe presentar un método reproducible, proceso o framework."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso debe presentar un método reproducible, proceso o framework."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso debe presentar un método reproducible, proceso o framework."
- **Validación local:** La salida es válida sólo si `metodologica` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `mixta_controlada`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.funcion_predominante_de_los_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-funcion_predominante_de_los_recursos_complementarios-mixta_controlada-mixta_controlada`
- **Resumen regional:** Valor mixta_controlada declarado para el campo funcion_predominante_de_los_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso puede cumplir varias funciones, pero debe declarar función dominante por lámina.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.funcion_predominante_de_los_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso puede cumplir varias funciones, pero debe declarar función dominante por lámina."
  - debe afectar `capa_de_laminas.laminas.composicion_local.funcion_visual_local`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso puede cumplir varias funciones, pero debe declarar función dominante por lámina."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.criterio_de_coherencia_visual_textual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso puede cumplir varias funciones, pero debe declarar función dominante por lámina."
- **Validación local:** La salida es válida sólo si `mixta_controlada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `grado_de_dependencia_de_recursos_complementarios`

**Función semántica del campo:** Define cuánto depende la comprensión de recursos visuales o estructurales más allá del texto principal.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios`
- `capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen`
- `capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `baja`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-baja-baja`
- **Resumen regional:** Valor baja declarado para el campo grado_de_dependencia_de_recursos_complementarios.
- **Operación semántica obligatoria:** La comprensión debe sobrevivir aun sin recurso visual fuerte; el recurso acompaña.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La comprensión debe sobrevivir aun sin recurso visual fuerte; el recurso acompaña."
  - debe afectar `capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: La comprensión debe sobrevivir aun sin recurso visual fuerte; el recurso acompaña."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La comprensión debe sobrevivir aun sin recurso visual fuerte; el recurso acompaña."
- **Validación local:** La salida es válida sólo si `baja` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `media`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-media-media`
- **Resumen regional:** Valor media declarado para el campo grado_de_dependencia_de_recursos_complementarios.
- **Operación semántica obligatoria:** Texto y recurso se complementan; ambos aportan parte de la comprensión.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Texto y recurso se complementan; ambos aportan parte de la comprensión."
  - debe afectar `capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: Texto y recurso se complementan; ambos aportan parte de la comprensión."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Texto y recurso se complementan; ambos aportan parte de la comprensión."
- **Validación local:** La salida es válida sólo si `media` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `alta`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-alta-alta`
- **Resumen regional:** Valor alta declarado para el campo grado_de_dependencia_de_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso es necesario para entender o recordar la lámina; debe ser claro y bien justificado.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso es necesario para entender o recordar la lámina; debe ser claro y bien justificado."
  - debe afectar `capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso es necesario para entender o recordar la lámina; debe ser claro y bien justificado."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso es necesario para entender o recordar la lámina; debe ser claro y bien justificado."
- **Validación local:** La salida es válida sólo si `alta` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `dominante`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.grado_de_dependencia_de_recursos_complementarios`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-grado_de_dependencia_de_recursos_complementarios-dominante-dominante`
- **Resumen regional:** Valor dominante declarado para el campo grado_de_dependencia_de_recursos_complementarios.
- **Operación semántica obligatoria:** El recurso visual/estructural porta el sentido principal; el texto solo ancla, etiqueta o guía.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.grado_de_dependencia_de_recursos_complementarios`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso visual/estructural porta el sentido principal; el texto solo ancla, etiqueta o guía."
  - debe afectar `capa_de_laminas.laminas.composicion_local.dependencia_texto_imagen`: "Debe modificar carga conceptual, resolución local, densidad, jerarquía o dependencia texto-imagen aplicando esta regla: El recurso visual/estructural porta el sentido principal; el texto solo ancla, etiqueta o guía."
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_de_distribucion_de_recursos_por_lamina`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El recurso visual/estructural porta el sentido principal; el texto solo ancla, etiqueta o guía."
- **Validación local:** La salida es válida sólo si `dominante` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `uso_de_audio_generado`

**Función semántica del campo:** Define si la salida puede o no activar recursos auditivos generados.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_audio_generado`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_prohibidos`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `sin_audio_generado`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_audio_generado`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_audio_generado-sin_audio_generado-sin_audio_generado`
- **Resumen regional:** Valor sin_audio_generado declarado para el campo uso_de_audio_generado.
- **Operación semántica obligatoria:** Prohibir audio como componente de salida; toda orientación debe resolverse visual o textualmente.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_audio_generado`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Prohibir audio como componente de salida; toda orientación debe resolverse visual o textualmente."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_prohibidos`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Prohibir audio como componente de salida; toda orientación debe resolverse visual o textualmente."
- **Validación local:** La salida es válida sólo si `sin_audio_generado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `uso_de_imagen_generada`

**Función semántica del campo:** Define el tipo de estructura visual o recurso generable que puede aparecer en las láminas.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `sin_imagen_generada`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-sin_imagen_generada-sin_imagen_generada`
- **Resumen regional:** Valor sin_imagen_generada declarado para el campo uso_de_imagen_generada.
- **Operación semántica obligatoria:** No usar imagen generada; resolver visualidad con texto, composición, diagramas simples o estructura editorial.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: No usar imagen generada; resolver visualidad con texto, composición, diagramas simples o estructura editorial."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: No usar imagen generada; resolver visualidad con texto, composición, diagramas simples o estructura editorial."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: No usar imagen generada; resolver visualidad con texto, composición, diagramas simples o estructura editorial."
- **Validación local:** La salida es válida sólo si `sin_imagen_generada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `texto_imagen_simbolica`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-texto_imagen_simbolica-texto_imagen_simbolica`
- **Resumen regional:** Aquí hay una imagen de fondo o elemento visual, pero el sentido principal sigue estando en el texto.
- **Operación semántica obligatoria:** Combinar texto principal con imagen simbólica que refuerce emoción, identidad o memoria.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Combinar texto principal con imagen simbólica que refuerce emoción, identidad o memoria."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combinar texto principal con imagen simbólica que refuerce emoción, identidad o memoria."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combinar texto principal con imagen simbólica que refuerce emoción, identidad o memoria."
- **Validación local:** La salida es válida sólo si `texto_imagen_simbolica` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `flowchart_o_diagrama_de_decision`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-flowchart_o_diagrama_de_decision-flowchart_o_diagrama_de_decision`
- **Resumen regional:** Sirve para representar rutas, bifurcaciones o decisiones.
- **Operación semántica obligatoria:** Representar rutas, decisiones o pasos condicionales; útil para procesos operables.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Representar rutas, decisiones o pasos condicionales; útil para procesos operables."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Representar rutas, decisiones o pasos condicionales; útil para procesos operables."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Representar rutas, decisiones o pasos condicionales; útil para procesos operables."
- **Validación local:** La salida es válida sólo si `flowchart_o_diagrama_de_decision` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `tabla_comparativa`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-tabla_comparativa-tabla_comparativa`
- **Resumen regional:** La lámina compara dos o más elementos.
- **Operación semántica obligatoria:** Comparar elementos en columnas o filas; debe cambiar la separación conceptual del receptor.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Comparar elementos en columnas o filas; debe cambiar la separación conceptual del receptor."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Comparar elementos en columnas o filas; debe cambiar la separación conceptual del receptor."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Comparar elementos en columnas o filas; debe cambiar la separación conceptual del receptor."
- **Validación local:** La salida es válida sólo si `tabla_comparativa` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `antes_despues`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-antes_despues-antes_despues`
- **Resumen regional:** Muy útil cuando se quiere mostrar transformación.
- **Operación semántica obligatoria:** Mostrar transformación entre estado inicial y estado final.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Mostrar transformación entre estado inicial y estado final."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Mostrar transformación entre estado inicial y estado final."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Mostrar transformación entre estado inicial y estado final."
- **Validación local:** La salida es válida sólo si `antes_despues` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `caso_o_escena`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-caso_o_escena-caso_o_escena`
- **Resumen regional:** La lámina muestra un caso concreto, real o hipotético.
- **Operación semántica obligatoria:** Bajar abstracción a situación concreta, personaje, conflicto o microhistoria.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Bajar abstracción a situación concreta, personaje, conflicto o microhistoria."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Bajar abstracción a situación concreta, personaje, conflicto o microhistoria."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Bajar abstracción a situación concreta, personaje, conflicto o microhistoria."
- **Validación local:** La salida es válida sólo si `caso_o_escena` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `visualizacion_de_datos`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-visualizacion_de_datos-visualizacion_de_datos`
- **Resumen regional:** No es exactamente un diagrama conceptual; aquí hay datos, magnitudes, distribuciones o relaciones cuantificables.
- **Operación semántica obligatoria:** Usar barras, matriz, ranking, embudo, porcentaje o gráfico cuando haya datos o relaciones cuantificables.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar barras, matriz, ranking, embudo, porcentaje o gráfico cuando haya datos o relaciones cuantificables."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar barras, matriz, ranking, embudo, porcentaje o gráfico cuando haya datos o relaciones cuantificables."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar barras, matriz, ranking, embudo, porcentaje o gráfico cuando haya datos o relaciones cuantificables."
- **Validación local:** La salida es válida sólo si `visualizacion_de_datos` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `timeline_o_secuencia_temporal`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-timeline_o_secuencia_temporal-timeline_o_secuencia_temporal`
- **Resumen regional:** La lámina muestra evolución, proceso o cambio a través del tiempo.
- **Operación semántica obligatoria:** Mostrar evolución, fases o pasos en el tiempo o en orden causal.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Mostrar evolución, fases o pasos en el tiempo o en orden causal."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Mostrar evolución, fases o pasos en el tiempo o en orden causal."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Mostrar evolución, fases o pasos en el tiempo o en orden causal."
- **Validación local:** La salida es válida sólo si `timeline_o_secuencia_temporal` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `matriz_o_mapa_de_posicionamiento`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-matriz_o_mapa_de_posicionamiento-matriz_o_mapa_de_posicionamiento`
- **Resumen regional:** Sirve para ubicar elementos en dos o más ejes.
- **Operación semántica obligatoria:** Ubicar elementos en ejes para crear categorías o lectura estratégica.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Ubicar elementos en ejes para crear categorías o lectura estratégica."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Ubicar elementos en ejes para crear categorías o lectura estratégica."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Ubicar elementos en ejes para crear categorías o lectura estratégica."
- **Validación local:** La salida es válida sólo si `matriz_o_mapa_de_posicionamiento` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `lista_estructurada`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-lista_estructurada-lista_estructurada`
- **Resumen regional:** No es solo una lista de bullets; es una lista con lógica interna.
- **Operación semántica obligatoria:** Organizar puntos con lógica interna: niveles, errores, pasos, señales o preguntas.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Organizar puntos con lógica interna: niveles, errores, pasos, señales o preguntas."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Organizar puntos con lógica interna: niveles, errores, pasos, señales o preguntas."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Organizar puntos con lógica interna: niveles, errores, pasos, señales o preguntas."
- **Validación local:** La salida es válida sólo si `lista_estructurada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `formula_o_ecuacion_conceptual`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-formula_o_ecuacion_conceptual-formula_o_ecuacion_conceptual`
- **Resumen regional:** No necesariamente matemática; puede ser una fórmula de relaciones.
- **Operación semántica obligatoria:** Condensar relaciones en fórmula memorable no necesariamente matemática.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Condensar relaciones en fórmula memorable no necesariamente matemática."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Condensar relaciones en fórmula memorable no necesariamente matemática."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Condensar relaciones en fórmula memorable no necesariamente matemática."
- **Validación local:** La salida es válida sólo si `formula_o_ecuacion_conceptual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `metafora_visual`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-metafora_visual-metafora_visual`
- **Resumen regional:** La lámina usa una imagen para explicar una idea abstracta.
- **Operación semántica obligatoria:** Usar imagen para representar una abstracción mediante objeto o escena simbólica.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar imagen para representar una abstracción mediante objeto o escena simbólica."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar imagen para representar una abstracción mediante objeto o escena simbólica."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar imagen para representar una abstracción mediante objeto o escena simbólica."
- **Validación local:** La salida es válida sólo si `metafora_visual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `ilustracion_o_escena_generada`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-ilustracion_o_escena_generada-ilustracion_o_escena_generada`
- **Resumen regional:** Aquí la imagen no es solo decoración: representa un concepto mediante una escena visual.
- **Operación semántica obligatoria:** Generar escena conceptual donde la imagen representa la idea, no sólo decora.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Generar escena conceptual donde la imagen representa la idea, no sólo decora."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Generar escena conceptual donde la imagen representa la idea, no sólo decora."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Generar escena conceptual donde la imagen representa la idea, no sólo decora."
- **Validación local:** La salida es válida sólo si `ilustracion_o_escena_generada` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `mini_infografia`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-mini_infografia-mini_infografia`
- **Resumen regional:** Combina texto, iconos, flechas y estructura.
- **Operación semántica obligatoria:** Combinar texto, iconos, flechas y estructura para explicar componentes o procesos.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Combinar texto, iconos, flechas y estructura para explicar componentes o procesos."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combinar texto, iconos, flechas y estructura para explicar componentes o procesos."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Combinar texto, iconos, flechas y estructura para explicar componentes o procesos."
- **Validación local:** La salida es válida sólo si `mini_infografia` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `plantilla_rellenable`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-plantilla_rellenable-plantilla_rellenable`
- **Resumen regional:** La lámina no solo informa; da una estructura para usar.
- **Operación semántica obligatoria:** Dar una estructura usable que el receptor pueda completar.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Dar una estructura usable que el receptor pueda completar."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Dar una estructura usable que el receptor pueda completar."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Dar una estructura usable que el receptor pueda completar."
- **Validación local:** La salida es válida sólo si `plantilla_rellenable` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `pregunta_guia`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-pregunta_guia-pregunta_guia`
- **Resumen regional:** Una lámina puede ser únicamente una pregunta potente.
- **Operación semántica obligatoria:** Usar una pregunta potente como pausa, transición, diagnóstico o cierre.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Usar una pregunta potente como pausa, transición, diagnóstico o cierre."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar una pregunta potente como pausa, transición, diagnóstico o cierre."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Usar una pregunta potente como pausa, transición, diagnóstico o cierre."
- **Validación local:** La salida es válida sólo si `pregunta_guia` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `contraste_visual_fuerte`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-contraste_visual_fuerte-contraste_visual_fuerte`
- **Resumen regional:** La lámina divide el espacio en oposición.
- **Operación semántica obligatoria:** Dividir la composición en oposición clara para comprensión inmediata.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Dividir la composición en oposición clara para comprensión inmediata."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Dividir la composición en oposición clara para comprensión inmediata."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Dividir la composición en oposición clara para comprensión inmediata."
- **Validación local:** La salida es válida sólo si `contraste_visual_fuerte` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `CTA_visual`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_imagen_generada`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_imagen_generada-CTA_visual-CTA_visual`
- **Resumen regional:** La última o penúltima lámina puede contener una acción visualmente clara.
- **Operación semántica obligatoria:** Hacer que la acción esperada sea visible y fácil de ejecutar.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_imagen_o_estructura_visual`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Hacer que la acción esperada sea visible y fácil de ejecutar."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.tipo_de_recurso_visual`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Hacer que la acción esperada sea visible y fácil de ejecutar."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.prompt_de_generacion`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Hacer que la acción esperada sea visible y fácil de ejecutar."
- **Validación local:** La salida es válida sólo si `CTA_visual` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `uso_de_texto_en_pantalla`

**Función semántica del campo:** Define el régimen de texto visible como componente estructural de la pieza.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.presencia`
- `capa_de_laminas.laminas.capa_textual_visible.texto_visible.funcion`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `texto_estructural`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_estructural-texto_estructural`
- **Resumen regional:** Valor texto_estructural declarado para el campo uso_de_texto_en_pantalla.
- **Operación semántica obligatoria:** El texto visible organiza la comprensión y debe existir en toda lámina relevante.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: El texto visible organiza la comprensión y debe existir en toda lámina relevante."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.presencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El texto visible organiza la comprensión y debe existir en toda lámina relevante."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.funcion`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: El texto visible organiza la comprensión y debe existir en toda lámina relevante."
- **Validación local:** La salida es válida sólo si `texto_estructural` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `texto_variable_segun_bloque`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-texto_variable_segun_bloque-texto_variable_segun_bloque`
- **Resumen regional:** Valor texto_variable_segun_bloque declarado para el campo uso_de_texto_en_pantalla.
- **Operación semántica obligatoria:** La presencia textual varía por función local; no todas las láminas tienen la misma carga.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: La presencia textual varía por función local; no todas las láminas tienen la misma carga."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.presencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: La presencia textual varía por función local; no todas las láminas tienen la misma carga."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.funcion`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: La presencia textual varía por función local; no todas las láminas tienen la misma carga."
- **Validación local:** La salida es válida sólo si `texto_variable_segun_bloque` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

##### `sin_texto_visible`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_texto_en_pantalla`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_texto_en_pantalla-sin_texto_visible-sin_texto_visible`
- **Resumen regional:** Valor que indica que la lámina puede no contener texto visible o usarlo de manera nula.
- **Operación semántica obligatoria:** Evitar texto visible salvo anclajes mínimos; la imagen o estructura debe portar sentido.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_texto_visible`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Evitar texto visible salvo anclajes mínimos; la imagen o estructura debe portar sentido."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.presencia`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Evitar texto visible salvo anclajes mínimos; la imagen o estructura debe portar sentido."
  - debe afectar `capa_de_laminas.laminas.capa_textual_visible.texto_visible.funcion`: "Debe modificar titular, cuerpo, microcopy, CTA o notas de coherencia aplicando esta regla: Evitar texto visible salvo anclajes mínimos; la imagen o estructura debe portar sentido."
- **Validación local:** La salida es válida sólo si `sin_texto_visible` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

#### `uso_de_video_generado`

**Función semántica del campo:** Define si la salida puede o no activar recursos de video generado.

**Campos de salida afectados por cualquier valor de este campo:**

- `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_video_generado`
- `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_prohibidos`

**Regla de interpretación:** el valor seleccionado en este campo debe traducirse a una decisión concreta sobre esos campos de salida. No se permite registrar el valor sólo en cabecera sin efecto local o global.

##### `sin_video_generado`

- **Ruta de entrada:** `dimension_recursos_complementarios_de_manifestacion.uso_de_video_generado`
- **id regional:** `grafo_de_regiones-grafo_dimension_recursos_complementarios_de_manifestacion-uso_de_video_generado-sin_video_generado-sin_video_generado`
- **Resumen regional:** Valor sin_video_generado declarado para el campo uso_de_video_generado.
- **Operación semántica obligatoria:** Prohibir video generado; mantener la salida como secuencia laminar fija.
- **Uso mínimo exigido:**
  - debe afectar `capa_macroestructural.recursos_complementarios_globales.regimen_general_de_video_generado`: "Debe modificar la arquitectura global, el régimen de recursos o la progresión general aplicando esta regla: Prohibir video generado; mantener la salida como secuencia laminar fija."
  - debe afectar `capa_de_laminas.laminas.capa_visual.composicion_visual.elementos_visuales_prohibidos`: "Debe modificar recurso visual, estructura, prompt, elementos obligatorios/prohibidos o descripción conceptual aplicando esta regla: Prohibir video generado; mantener la salida como secuencia laminar fija."
- **Validación local:** La salida es válida sólo si `sin_video_generado` produce una decisión observable en al menos uno de los campos afectados y esa decisión aparece justificada sin usar fórmulas genéricas de intensidad.

---

## 11.X. Validador específico de la biblioteca refinada

Al terminar de construir la manifestación, el protocolo debe ejecutar esta validación adicional:

1. Ninguna ficha de valor debe haber sido aplicada mediante una frase genérica de intensidad.
2. Todo valor activo debe tener al menos una consecuencia observable en cabecera, macroestructura, lámina, continuidad o justificación.
3. Si el valor pertenece a un campo con valores `baja/media/alta`, debe verificarse que la interpretación corresponde al campo específico y no a una escala abstracta indiferenciada.
4. Si dos valores activos entran en tensión, la salida debe resolver la tensión en `notas_de_coherencia` o `justificacion_de_composicion`.
5. La justificación dimensional debe nombrar el valor activo y explicar qué decisión produjo.

---

## 12. Checklist de ejecución

- [ ] Identifiqué el archivo `ART_` de ensamblaje.
- [ ] Identifiqué el archivo `construccion_conceptual`.
- [ ] Construí internamente la `instancia_contextual_modular_efectiva`.
- [ ] Validé que `clase_de_materializacion` sea `secuencia_laminar_visual`.
- [ ] Validé que cada valor seleccionado exista en la Biblioteca Integral de Valores.
- [ ] Copié los valores de cabecera desde el ensamblaje, sin inventarlos.
- [ ] Procesé todas las ideas activas y sus relaciones.
- [ ] Determiní cantidad concreta de láminas dentro del valor seleccionado.
- [ ] Distribuí ideas nucleares, complementarias, de puente, contrastivas y derivadas.
- [ ] Construí todas las láminas con texto, visualidad, editorialidad, continuidad y justificación.
- [ ] Comprobé que no haya valores activos sin uso.
- [ ] Comprobé que no haya campos obligatorios de salida vacíos.
- [ ] Comprobé que no se introdujeron campos propios de video corto.
- [ ] Entregué la `manifestacion_codominial_carousel` completa.

---

## 13. Fórmula final

```txt
PROTOCOL(carousel)
  recibe:
    ART_ensamblaje
    construccion_conceptual

  construye internamente:
    instancia_contextual_modular_efectiva

  consulta:
    modelo_de_salida_codominial_carousel
    biblioteca_integral_de_valores_regionales
    recetas_por_campo_de_salida
    matrices_de_interaccion
    validadores_finales

  produce:
    manifestacion_codominial_carousel
```
