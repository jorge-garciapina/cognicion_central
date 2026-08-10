# Estructura general propuesta de la Manifestación codominial compuesta
## Con trazabilidad de contribuciones desde las Dimensiones de configuración

---

## 0. Propósito del documento

Este documento vuelve a presentar la **Estructura general propuesta de la Manifestación codominial compuesta**, pero ahora con un objetivo más preciso:

- para **cada campo** de cada **capa** de la manifestación,
- indicar **qué campos de las Dimensiones de configuración** intervienen en su construcción,
- y **cómo contribuyen** a ese campo de salida.

No se fijan todavía valores concretos.

La intención aquí no es instanciar una pieza, sino dejar explícita la **mecánica de contribución estructural** entre:

- `Dimensiones de configuración`
- `Protocolos de composición dimensional`
- `Manifestación codominial compuesta`

De este modo, la manifestación deja de verse como una plantilla aislada y pasa a entenderse como un objeto de salida compuesto cuya estructura puede absorber la incidencia de todos los campos del modelo base.

---

## 1. Criterio de lectura

Para cada campo de salida se usarán dos marcas:

### A. Campos de las Dimensiones de configuración que contribuyen
Se indicarán los campos de entrada que alimentan ese campo de salida.

### B. Modo de contribución
Se indicará si ese campo de entrada contribuye mediante:

- **fijación**: determina directamente el valor o la forma del campo de salida;
- **restricción**: limita el rango de configuraciones admisibles;
- **modulación**: ajusta intensidad, tono, densidad o forma de manifestación;
- **distribución**: reparte contenido o recursos entre bloques o capas;
- **justificación**: explica por qué ese campo de salida quedó configurado así;
- **derivación**: no lo fija directamente, pero permite inferirlo o construirlo.

---

## 2. Estructura general con contribuciones

```yaml
manifestacion_codominial_compuesta:
  cabecera_identidad_general_de_la_pieza:
    identificacion_general:
      id_de_manifestacion:
      clase_de_materializacion:
      plataforma:
      aplicacion_de_plataforma:

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
        ideas_nucleares_activadas_globalmente:
        ideas_complementarias_activadas_globalmente:
        ideas_de_puente_activadas_globalmente:
        ideas_contrastivas_activadas_globalmente:
        ideas_derivadas_activadas_globalmente:
        relaciones_entre_ideas_activadas_globalmente:
      configuracion_narrativa:

    comparecencia_performativa_resultante:
      modalidad_de_guion:
      modo_de_comparecencia_verbal:
      comparecencia_performativa:
        cercania:
        autoridad:
        calidez:
        intensidad:
        sobriedad:

    marco_de_materializacion_resultante:
      clase_de_materializacion:
      plataforma:
      aplicacion_de_plataforma:

  capa_macroestructural:
    arquitectura_global:
      duracion_objetivo:
      arquitectura_macro:
      componentes_macroestructurales_activados:
      segmentacion_interna:
      unidad_de_segmento:
      longitud_por_segmento:
      cantidad_total_de_bloques:

    recursos_complementarios_globales:
      regimen_general_de_texto_en_pantalla:
      regimen_general_de_indicaciones_escenicas:
      regimen_general_de_imagen_en_pantalla:
      regimen_general_de_video_en_pantalla:
      regimen_general_de_recurso_auditivo:
      funcion_predominante_de_los_recursos_complementarios:
      grado_de_dependencia_de_recursos_complementarios:
      regimen_de_distribucion_de_recursos_complementarios:
      criterio_de_coherencia_de_recursos_complementarios:

  capa_de_bloques:
    bloques:
      - bloque_id:
        tipo_de_bloque:
        posicion_en_arquitectura_macro:
        funcion_del_bloque:
        objetivo_local:

        relacion_con_el_caso:
          ideas_nucleares_activadas:
          ideas_complementarias_activadas:
          ideas_de_puente_activadas:
          ideas_contrastivas_activadas:
          ideas_derivadas_activadas:
          relaciones_entre_ideas_activadas:

        composicion_local:
          duracion_estimada:
          longitud_verbal_estimada:
          grado_de_carga_conceptual:
          grado_de_resolucion_local:

        capa_verbal:
          realizacion_verbal:
            emisor:
            dialogo:
            texto_oral_principal:
            texto_oral_secundario:
            remate_verbal_local:

          comparecencia_local:
            modalidad_de_guion:
            modo_de_comparecencia_verbal:
            comparecencia_performativa:
              cercania:
              autoridad:
              calidez:
              intensidad:
              sobriedad:

        capa_de_superficie_textual:
          inscripcion_de_superficie_textual:
            esquema_de_texto_en_pantalla:
            texto_en_pantalla:
              presencia:
              funcion:
              contenido:
              posicion_aproximada:
              duracion_en_pantalla:
              notas_de_coherencia:

        capa_de_superficie_escenica:
          inscripcion_de_superficie_escenica:
            esquema_de_indicaciones_escenicas:
            indicaciones_escenicas:
              presencia:
              funcion:
              contenido:
              notas_de_ejecucion:
            acciones_por_bloque:
              presencia:
              funcion:
              contenido:
              notas_de_coherencia:

        capa_visual_generable:
          recursos_visuales_generables:
            imagen_en_pantalla:
              presencia:
              funcion:
              descripcion_conceptual:
              prompt_de_generacion:
              notas_de_coherencia:

        capa_audiovisual_generable:
          recursos_audiovisuales_generables:
            video_en_pantalla:
              presencia:
              funcion:
              descripcion_conceptual:
              prompt_de_generacion:
              duracion_sugerida:
              notas_de_coherencia:

        capa_auditiva:
          recursos_auditivos_generables:
            recurso_auditivo:
              presencia:
              funcion:
              tipo_de_recurso:
              descripcion_conceptual:
              prompt_de_generacion:
              duracion_sugerida:
              notas_de_coherencia:
            musica:
            sonido_ambiente:
            efecto_sonoro:

        capa_de_continuidad_transversal:
          continuidad_transversal:
            continuidad_con_bloque_anterior:
            proyeccion_hacia_bloque_siguiente:
            continuidad_argumental:
            continuidad_atencional:

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
              dimension_inscripcion_de_superficie_de_la_salida:
              dimension_recursos_complementarios_de_manifestacion:
```

---

## 3. Cabecera o identidad general de la pieza

### 3.1. `identificacion_general`

#### `id_de_manifestacion`
**Campos que contribuyen:**
- `formulacion_canonica`
- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`
- `alcance_de_realizacion`

**Cómo contribuyen:**
- `formulacion_canonica` aporta el núcleo nominativo.
- `clase_de_materializacion`, `plataforma` y `aplicacion_de_plataforma` restringen la clase de salida.
- `alcance_de_realizacion` permite distinguir si la pieza es única, apertura, continuidad o cierre.
- El `id_de_manifestacion` se construye por **derivación controlada** de estos campos y no debe ser arbitrario.

#### `clase_de_materializacion`
**Campos que contribuyen:**
- `clase_de_materializacion`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Define la clase codominial final.

#### `plataforma`
**Campos que contribuyen:**
- `plataforma`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Determina el entorno de salida.

#### `aplicacion_de_plataforma`
**Campos que contribuyen:**
- `aplicacion_de_plataforma`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Especifica la modalidad concreta dentro de la plataforma.

---

### 3.2. `identidad_operativa_resultante`

#### `formulacion_canonica`
**Campos que contribuyen:**
- `formulacion_canonica`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Declara qué realización se está construyendo.

#### `nivel_de_especificidad`
**Campos que contribuyen:**
- `nivel_de_especificidad`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Restringe el grado de detalle permitido en toda la pieza.

#### `prioridad_de_intencion`
**Campos que contribuyen:**
- `prioridad_de_intencion`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Establece la jerarquía de esta realización dentro del sistema.

---

### 3.3. `orientacion_funcional_resultante`

#### `funcion_dominante`
**Campos que contribuyen:**
- `funcion_dominante`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Establece la operación principal que la pieza debe cumplir.

#### `efecto_buscado`
**Campos que contribuyen:**
- `efecto_buscado`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Determina el tipo de efecto que la pieza debe procurar en el receptor.

#### `accion_esperada`
**Campos que contribuyen:**
- `accion_esperada`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Determina la respuesta pragmática que el cierre o la estructura global debe favorecer.

#### `configuracion_discursiva`
**Campos que contribuyen:**
- `configuracion_discursiva`
- `funcion_dominante`

**Cómo contribuyen:**
- `configuracion_discursiva` fija el régimen discursivo principal.
- `funcion_dominante` actúa por **restricción**, limitando qué configuraciones discursivas son coherentes.

---

### 3.4. `escala_temporal_y_resolucion_resultante`

#### `alcance_de_realizacion`
**Campos que contribuyen:**
- `alcance_de_realizacion`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Define si la pieza es autónoma, de apertura, continuidad, cierre, etc.

#### `horizonte_temporal`
**Campos que contribuyen:**
- `horizonte_temporal`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Sitúa la operación en una escala temporal.

#### `regimen_de_resolucion_buscada`
**Campos que contribuyen:**
- `regimen_de_resolucion_buscada`
- `alcance_de_realizacion`
- `horizonte_temporal`

**Cómo contribuyen:**
- `regimen_de_resolucion_buscada` fija el modo de cierre o apertura.
- `alcance_de_realizacion` y `horizonte_temporal` actúan por **restricción**, determinando qué resolución es compatible.

---

### 3.5. `acoplamiento_receptoral_resultante`

#### `publico_objetivo_inmediato`
**Campos que contribuyen:**
- `publico_objetivo_inmediato`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Determina el receptor inmediato al que se ajusta la pieza.

#### `adecuacion_lexico_formulativa.registro_predominante`
**Campos que contribuyen:**
- `registro_predominante`
- `publico_objetivo_inmediato`

**Cómo contribuyen:**
- `registro_predominante` fija el régimen léxico principal.
- `publico_objetivo_inmediato` modula el nivel de ajuste adecuado.

#### `adecuacion_lexico_formulativa.densidad_terminologica`
**Campos que contribuyen:**
- `densidad_terminologica`
- `publico_objetivo_inmediato`
- `estado_atencional`

**Cómo contribuyen:**
- `densidad_terminologica` fija la concentración terminológica.
- `publico_objetivo_inmediato` y `estado_atencional` la restringen para evitar sobrecarga o simplificación excesiva.

#### `adecuacion_lexico_formulativa.grado_de_abstraccion`
**Campos que contribuyen:**
- `grado_de_abstraccion`
- `publico_objetivo_inmediato`
- `funcion_dominante`

**Cómo contribuyen:**
- `grado_de_abstraccion` fija la altura conceptual.
- `publico_objetivo_inmediato` y `funcion_dominante` modulan cuánto puede elevarse o concretarse.

#### `adecuacion_lexico_formulativa.accesibilidad_lexica`
**Campos que contribuyen:**
- `accesibilidad_lexica`
- `estado_atencional`
- `regimen_de_activacion_atencional`

**Cómo contribuyen:**
- `accesibilidad_lexica` fija la facilidad de recepción verbal.
- `estado_atencional` y `regimen_de_activacion_atencional` restringen el nivel compatible de complejidad.

#### `adecuacion_lexico_formulativa.variacion_lexica`
**Campos que contribuyen:**
- `variacion_lexica`
- `configuracion_discursiva`

**Cómo contribuyen:**
- `variacion_lexica` fija el grado de repetición o variación expresiva.
- `configuracion_discursiva` modula si conviene reiteración, condensación o variación.

---

### 3.6. `dinamica_atencional_y_procesual_resultante`

#### `estado_atencional`
**Campos que contribuyen:**
- `estado_atencional`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Declara el estado de entrada del receptor.

#### `regimen_de_activacion_atencional`
**Campos que contribuyen:**
- `regimen_de_activacion_atencional`
- `estado_atencional`

**Cómo contribuyen:**
- `regimen_de_activacion_atencional` fija el tipo de activación buscada.
- `estado_atencional` restringe la activación compatible.

#### `dinamica_procesual.explicitud`
**Campos que contribuyen:**
- `explicitud`
- `funcion_dominante`
- `publico_objetivo_inmediato`

**Cómo contribuyen:**
- `explicitud` fija la proporción de información explicada versus implícita.
- `funcion_dominante` y `publico_objetivo_inmediato` modulan el grado admisible.

#### `dinamica_procesual.continuidad`
**Campos que contribuyen:**
- `continuidad`
- `configuracion_narrativa`
- `segmentacion_interna`

**Cómo contribuyen:**
- `continuidad` fija la trabazón procesual deseada.
- `configuracion_narrativa` y `segmentacion_interna` distribuyen esa continuidad a escala de pieza.

#### `dinamica_procesual.friccion_interpretativa`
**Campos que contribuyen:**
- `friccion_interpretativa`
- `grado_de_abstraccion`
- `densidad_terminologica`

**Cómo contribuyen:**
- `friccion_interpretativa` fija el nivel de dificultad o resistencia.
- `grado_de_abstraccion` y `densidad_terminologica` modulan su intensidad real.

#### `dinamica_procesual.compresion`
**Campos que contribuyen:**
- `compresion`
- `duracion_objetivo`
- `longitud_por_segmento`

**Cómo contribuyen:**
- `compresion` fija la condensación procesual.
- `duracion_objetivo` y `longitud_por_segmento` restringen cuánto puede comprimirse sin romper legibilidad.

#### `dinamica_procesual.recapitulacion`
**Campos que contribuyen:**
- `recapitulacion`
- `regimen_de_resolucion_buscada`
- `arquitectura_macro`

**Cómo contribuyen:**
- `recapitulacion` fija el grado de recuperación explícita del recorrido.
- `regimen_de_resolucion_buscada` y `arquitectura_macro` modulan dónde y cómo aparece.

---

### 3.7. `construccion_del_caso_resultante`

#### `construccion_conceptual.ideas_nucleares_activadas_globalmente`
**Campos que contribuyen:**
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Cómo contribuyen:**
- `rol_conceptual` selecciona qué ideas son nucleares.
- `peso_relativo` jerarquiza su importancia.
- `modo_de_presencia` modula si deben aparecer de modo explícito, reiterado o transversal.

#### `ideas_complementarias_activadas_globalmente`
**Campos que contribuyen:**
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Cómo contribuyen:**
- Igual lógica que las nucleares, pero aplicadas a ideas complementarias.

#### `ideas_de_puente_activadas_globalmente`
**Campos que contribuyen:**
- `rol_conceptual`
- `relaciones_con_otras_ideas`

**Cómo contribuyen:**
- `rol_conceptual` identifica ideas de articulación.
- `relaciones_con_otras_ideas` justifica cómo unen regiones del caso.

#### `ideas_contrastivas_activadas_globalmente`
**Campos que contribuyen:**
- `rol_conceptual`
- `relaciones_con_otras_ideas`
- `configuracion_narrativa`

**Cómo contribuyen:**
- `rol_conceptual` selecciona ideas contrastivas.
- `relaciones_con_otras_ideas` explica el tipo de contraste.
- `configuracion_narrativa` determina si el contraste organiza el recorrido global.

#### `ideas_derivadas_activadas_globalmente`
**Campos que contribuyen:**
- `rol_conceptual`
- `peso_relativo`

**Cómo contribuyen:**
- `rol_conceptual` identifica ideas derivadas.
- `peso_relativo` decide su expansión o brevedad global.

#### `relaciones_entre_ideas_activadas_globalmente`
**Campos que contribuyen:**
- `relaciones_con_otras_ideas`
- `configuracion_narrativa`
- `configuracion_discursiva`

**Cómo contribuyen:**
- `relaciones_con_otras_ideas` fija las relaciones conceptuales.
- `configuracion_narrativa` y `configuracion_discursiva` distribuyen cómo se manifiestan en la pieza.

#### `configuracion_narrativa`
**Campos que contribuyen:**
- `configuracion_narrativa`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Determina el patrón de despliegue del caso.

---

### 3.8. `comparecencia_performativa_resultante`

#### `modalidad_de_guion`
**Campos que contribuyen:**
- `modalidad_de_guion`
- `clase_de_materializacion`

**Cómo contribuyen:**
- `modalidad_de_guion` fija el régimen de guionización.
- `clase_de_materializacion` restringe las modalidades compatibles.

#### `modo_de_comparecencia_verbal`
**Campos que contribuyen:**
- `modo_de_comparecencia_verbal`
- `modalidad_de_guion`

**Cómo contribuyen:**
- `modo_de_comparecencia_verbal` fija la forma verbal dominante.
- `modalidad_de_guion` restringe y modula ese modo.

#### `comparecencia_performativa.cercania`
**Campos que contribuyen:**
- `cercania`
- `publico_objetivo_inmediato`

**Cómo contribuyen:**
- `cercania` fija la distancia performativa.
- `publico_objetivo_inmediato` modula qué cercanía es pertinente.

#### `comparecencia_performativa.autoridad`
**Campos que contribuyen:**
- `autoridad`
- `funcion_dominante`

**Cómo contribuyen:**
- `autoridad` fija el nivel de aserción o respaldo performativo.
- `funcion_dominante` modula el grado necesario.

#### `comparecencia_performativa.calidez`
**Campos que contribuyen:**
- `calidez`
- `efecto_buscado`

**Cómo contribuyen:**
- `calidez` fija la temperatura afectiva.
- `efecto_buscado` modula si conviene intensificarla o reducirla.

#### `comparecencia_performativa.intensidad`
**Campos que contribuyen:**
- `intensidad`
- `regimen_de_activacion_atencional`

**Cómo contribuyen:**
- `intensidad` fija la energía visible de la comparecencia.
- `regimen_de_activacion_atencional` modula el grado requerido para abrir, sostener o cerrar.

#### `comparecencia_performativa.sobriedad`
**Campos que contribuyen:**
- `sobriedad`
- `configuracion_discursiva`

**Cómo contribuyen:**
- `sobriedad` fija el grado de contención performativa.
- `configuracion_discursiva` modula si la pieza tolera más o menos despliegue expresivo.

---

### 3.9. `marco_de_materializacion_resultante`

#### `clase_de_materializacion`
**Campos que contribuyen:**
- `clase_de_materializacion`

**Cómo contribuyen:**
- Contribución por **fijación directa**.

#### `plataforma`
**Campos que contribuyen:**
- `plataforma`

**Cómo contribuyen:**
- Contribución por **fijación directa**.

#### `aplicacion_de_plataforma`
**Campos que contribuyen:**
- `aplicacion_de_plataforma`

**Cómo contribuyen:**
- Contribución por **fijación directa**.

---

## 4. Capa macroestructural

### 4.1. `arquitectura_global`

#### `duracion_objetivo`
**Campos que contribuyen:**
- `duracion_objetivo`
- `alcance_de_realizacion`
- `horizonte_temporal`

**Cómo contribuyen:**
- `duracion_objetivo` fija la región de duración.
- `alcance_de_realizacion` y `horizonte_temporal` la restringen según el tipo de pieza.

#### `arquitectura_macro`
**Campos que contribuyen:**
- `arquitectura_macro`
- `configuracion_narrativa`
- `regimen_de_resolucion_buscada`

**Cómo contribuyen:**
- `arquitectura_macro` fija el patrón macroestructural.
- `configuracion_narrativa` modula el modo de despliegue.
- `regimen_de_resolucion_buscada` restringe la clase de cierre o apertura final.

#### `componentes_macroestructurales_activados`
**Campos que contribuyen:**
- `arquitectura_macro`
- `alcance_de_realizacion`
- `regimen_de_resolucion_buscada`

**Cómo contribuyen:**
- Se construyen por **derivación** a partir del tipo de arquitectura seleccionado y del régimen de resolución.

#### `segmentacion_interna`
**Campos que contribuyen:**
- `segmentacion_interna`
- `arquitectura_macro`
- `duracion_objetivo`

**Cómo contribuyen:**
- `segmentacion_interna` fija el patrón de división.
- `arquitectura_macro` y `duracion_objetivo` lo restringen para que sea realizable.

#### `unidad_de_segmento`
**Campos que contribuyen:**
- `unidad_de_segmento`
- `modo_de_comparecencia_verbal`
- `modalidad_de_guion`

**Cómo contribuyen:**
- `unidad_de_segmento` fija la unidad compositiva mínima.
- `modo_de_comparecencia_verbal` y `modalidad_de_guion` modulan qué clase de unidad verbal es adecuada.

#### `longitud_por_segmento`
**Campos que contribuyen:**
- `longitud_por_segmento`
- `duracion_objetivo`
- `compresion`

**Cómo contribuyen:**
- `longitud_por_segmento` fija la longitud local.
- `duracion_objetivo` y `compresion` restringen cuánta verbalización cabe en esa longitud.

#### `cantidad_total_de_bloques`
**Campos que contribuyen:**
- `segmentacion_interna`
- `arquitectura_macro`
- `duracion_objetivo`

**Cómo contribuyen:**
- Se construye por **derivación** a partir del patrón de segmentación y la arquitectura global.

---

### 4.2. `recursos_complementarios_globales`

#### `regimen_general_de_texto_en_pantalla`
**Campos que contribuyen:**
- `uso_de_texto_en_pantalla`
- `esquema_de_texto_en_pantalla` (si coexistiera en documentación anterior)

**Cómo contribuyen:**
- `uso_de_texto_en_pantalla` fija la intensidad y distribución global del recurso.
- Si coexistieran esquemas previos, actúan como antecedentes semánticos.

#### `regimen_general_de_indicaciones_escenicas`
**Campos que contribuyen:**
- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `regimen_de_encuadre_performativo`
- `grado_de_dependencia_de_la_performance_visible`

**Cómo contribuyen:**
- Estos campos fijan cuánto de la ejecución visible debe quedar explicitado, qué tipos de acciones se toleran y cuánto depende la pieza de su performance visible.

#### `regimen_general_de_imagen_en_pantalla`
**Campos que contribuyen:**
- `uso_de_imagen_generada`
- `funcion_predominante_de_los_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`

**Cómo contribuyen:**
- `uso_de_imagen_generada` fija la presencia estructural del recurso imagen.
- `funcion_predominante...` fija para qué sirve.
- `regimen_de_distribucion...` decide cómo se reparte.
- `criterio_de_coherencia...` restringe su consistencia con el caso.

#### `regimen_general_de_video_en_pantalla`
**Campos que contribuyen:**
- `uso_de_video_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`

**Cómo contribuyen:**
- Misma lógica que en imagen, pero aplicada a recurso audiovisual dinámico.

#### `regimen_general_de_recurso_auditivo`
**Campos que contribuyen:**
- `uso_de_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`
- `musica`
- `sonido_ambiente`
- `efecto_sonoro`

**Cómo contribuyen:**
- `uso_de_audio_generado` fija si habrá recursos auditivos generados.
- Los otros campos de la dimensión 12 regulan su función, distribución y coherencia.
- `musica`, `sonido_ambiente` y `efecto_sonoro` aportan clases locales de realización auditiva.

#### `funcion_predominante_de_los_recursos_complementarios`
**Campos que contribuyen:**
- `funcion_predominante_de_los_recursos_complementarios`

**Cómo contribuyen:**
- Contribución por **fijación directa**. Determina para qué sirven globalmente los recursos complementarios.

#### `grado_de_dependencia_de_recursos_complementarios`
**Campos que contribuyen:**
- `grado_de_dependencia_de_recursos_complementarios`
- `grado_de_dependencia_de_la_performance_visible`

**Cómo contribuyen:**
- El primero fija cuánto depende la pieza de recursos complementarios.
- El segundo modula cuánto de esa dependencia recae en performance visible frente a recursos externos.

#### `regimen_de_distribucion_de_recursos_complementarios`
**Campos que contribuyen:**
- `regimen_de_distribucion_de_recursos_complementarios`
- `segmentacion_interna`

**Cómo contribuyen:**
- `regimen_de_distribucion...` fija si los recursos son puntuales, distribuidos, estructurales, etc.
- `segmentacion_interna` restringe la forma de reparto entre bloques.

#### `criterio_de_coherencia_de_recursos_complementarios`
**Campos que contribuyen:**
- `criterio_de_coherencia_de_recursos_complementarios`
- `funcion_dominante`
- `construccion_conceptual`

**Cómo contribuyen:**
- `criterio_de_coherencia...` fija la regla general de compatibilidad.
- `funcion_dominante` y `construccion_conceptual` modulan qué tipo de recursos son pertinentes.

---

## 5. Capa de bloques

### 5.1. Meta del bloque

#### `bloque_id`
**Campos que contribuyen:**
- `arquitectura_macro`
- `componentes_macroestructurales_activados`
- `cantidad_total_de_bloques`

**Cómo contribuyen:**
- El identificador del bloque se genera por **derivación** a partir de su lugar en la macroestructura.

#### `tipo_de_bloque`
**Campos que contribuyen:**
- `arquitectura_macro`
- `configuracion_narrativa`
- `regimen_de_resolucion_buscada`

**Cómo contribuyen:**
- Estos campos determinan si el bloque funciona como apertura, desarrollo, cierre, contraste, remate, secuencia, etc.

#### `posicion_en_arquitectura_macro`
**Campos que contribuyen:**
- `arquitectura_macro`
- `segmentacion_interna`

**Cómo contribuyen:**
- Se deriva de la posición del bloque dentro de la estructura macro y del patrón segmental.

#### `funcion_del_bloque`
**Campos que contribuyen:**
- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `configuracion_discursiva`
- `configuracion_narrativa`

**Cómo contribuyen:**
- La función dominante y el efecto buscado fijan la tarea pragmática.
- La configuración discursiva y la narrativa traducen esa tarea en función local de bloque.

#### `objetivo_local`
**Campos que contribuyen:**
- `funcion_del_bloque`
- `estado_atencional`
- `regimen_de_activacion_atencional`
- `regimen_de_resolucion_buscada`

**Cómo contribuyen:**
- El objetivo local especifica qué debe lograr ese bloque dentro del estado atencional y de la trayectoria de resolución.

---

### 5.2. `relacion_con_el_caso`

#### `ideas_nucleares_activadas`
**Campos que contribuyen:**
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`
- `configuracion_narrativa`

**Cómo contribuyen:**
- Seleccionan qué ideas nucleares entran en ese bloque y con qué peso local.

#### `ideas_complementarias_activadas`
**Campos que contribuyen:**
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`

**Cómo contribuyen:**
- Igual lógica aplicada a ideas complementarias.

#### `ideas_de_puente_activadas`
**Campos que contribuyen:**
- `rol_conceptual`
- `relaciones_con_otras_ideas`

**Cómo contribuyen:**
- Permiten enlazar ideas entre bloques o subtramos.

#### `ideas_contrastivas_activadas`
**Campos que contribuyen:**
- `rol_conceptual`
- `relaciones_con_otras_ideas`
- `configuracion_narrativa`

**Cómo contribuyen:**
- Organizan la oposición local dentro del bloque o entre bloques cercanos.

#### `ideas_derivadas_activadas`
**Campos que contribuyen:**
- `rol_conceptual`
- `peso_relativo`

**Cómo contribuyen:**
- Introducen efectos secundarios, aplicaciones o consecuencias locales.

#### `relaciones_entre_ideas_activadas`
**Campos que contribuyen:**
- `relaciones_con_otras_ideas`
- `configuracion_discursiva`
- `configuracion_narrativa`

**Cómo contribuyen:**
- Hacen explícita la red relacional que el bloque debe realizar.

---

### 5.3. `composicion_local`

#### `duracion_estimada`
**Campos que contribuyen:**
- `duracion_objetivo`
- `segmentacion_interna`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Se deriva de la duración global y del tipo de bloque.

#### `longitud_verbal_estimada`
**Campos que contribuyen:**
- `longitud_por_segmento`
- `compresion`
- `densidad_terminologica`
- `grado_de_abstraccion`

**Cómo contribuyen:**
- `longitud_por_segmento` fija el rango verbal.
- `compresion`, `densidad_terminologica` y `grado_de_abstraccion` modulan cuánto contenido cabe verbalmente.

#### `grado_de_carga_conceptual`
**Campos que contribuyen:**
- `peso_relativo`
- `rol_conceptual`
- `densidad_terminologica`
- `grado_de_abstraccion`

**Cómo contribuyen:**
- Se deriva del peso y tipo de ideas activadas y de la densidad del registro.

#### `grado_de_resolucion_local`
**Campos que contribuyen:**
- `regimen_de_resolucion_buscada`
- `tipo_de_bloque`
- `posicion_en_arquitectura_macro`

**Cómo contribuyen:**
- Determina si el bloque abre, sostiene, resuelve o recapitula localmente.

---

## 6. Capa verbal

### 6.1. `realizacion_verbal`

#### `emisor`
**Campos que contribuyen:**
- `emisor`
- `modo_de_comparecencia_verbal`
- `modalidad_de_guion`

**Cómo contribuyen:**
- `emisor` fija la voz enunciadora local.
- `modo_de_comparecencia_verbal` y `modalidad_de_guion` restringen la forma de esa voz.

#### `dialogo`
**Campos que contribuyen:**
- `dialogo`
- `configuracion_discursiva`
- `publico_objetivo_inmediato`

**Cómo contribuyen:**
- `dialogo` aporta la estructura dialogal local.
- `configuracion_discursiva` y `publico_objetivo_inmediato` modulan su forma y claridad.

#### `texto_oral_principal`
**Campos que contribuyen:**
- `formulacion_de_la_idea`
- `modo_de_presencia`
- `funcion_dominante`
- `configuracion_discursiva`
- `registro_predominante`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `accesibilidad_lexica`
- `explicitud`
- `compresion`

**Cómo contribuyen:**
- Las ideas activadas aportan el contenido.
- La orientación funcional y discursiva fijan la forma pragmática.
- La adecuación léxica fija el nivel verbal.
- La dinámica procesual modula cuánto se explicita y condensa.

#### `texto_oral_secundario`
**Campos que contribuyen:**
- `ideas_complementarias_activadas`
- `ideas_de_puente_activadas`
- `ideas_derivadas_activadas`
- `recapitulacion`

**Cómo contribuyen:**
- Introducen apoyos, puentes o reformulaciones secundarias.

#### `remate_verbal_local`
**Campos que contribuyen:**
- `accion_esperada`
- `efecto_buscado`
- `regimen_de_resolucion_buscada`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Determinan si el bloque necesita cierre, síntesis, llamada o condensación final.

---

### 6.2. `comparecencia_local`

#### `modalidad_de_guion`
**Campos que contribuyen:**
- `modalidad_de_guion`

**Cómo contribuyen:**
- Contribución por **fijación directa** a escala local, salvo restricción global.

#### `modo_de_comparecencia_verbal`
**Campos que contribuyen:**
- `modo_de_comparecencia_verbal`

**Cómo contribuyen:**
- Contribución por **fijación directa** a escala local.

#### `comparecencia_performativa.cercania`
**Campos que contribuyen:**
- `cercania`
- `publico_objetivo_inmediato`
- `tipo_de_bloque`

**Cómo contribuyen:**
- La cercanía global se modula según el tipo de bloque y el receptor.

#### `comparecencia_performativa.autoridad`
**Campos que contribuyen:**
- `autoridad`
- `funcion_dominante`
- `grado_de_resolucion_local`

**Cómo contribuyen:**
- La autoridad local puede variar según si el bloque explica, diagnostica o remata.

#### `comparecencia_performativa.calidez`
**Campos que contribuyen:**
- `calidez`
- `efecto_buscado`

**Cómo contribuyen:**
- Modula el tono afectivo local según el efecto perseguido.

#### `comparecencia_performativa.intensidad`
**Campos que contribuyen:**
- `intensidad`
- `regimen_de_activacion_atencional`
- `tipo_de_bloque`

**Cómo contribuyen:**
- La intensidad aumenta o desciende según la función local del bloque.

#### `comparecencia_performativa.sobriedad`
**Campos que contribuyen:**
- `sobriedad`
- `configuracion_discursiva`

**Cómo contribuyen:**
- Regula el grado de contención expresiva del tramo.

---

## 7. Capa de superficie textual

### 7.1. `inscripcion_de_superficie_textual`

#### `esquema_de_texto_en_pantalla`
**Campos que contribuyen:**
- `uso_de_texto_en_pantalla`

**Cómo contribuyen:**
- Fija el régimen local del texto visible: ausencia, apoyo puntual, distribución, función estructural, etc.

#### `texto_en_pantalla.presencia`
**Campos que contribuyen:**
- `uso_de_texto_en_pantalla`
- `regimen_de_distribucion_de_recursos_complementarios`

**Cómo contribuyen:**
- Determinan si este bloque lleva texto en pantalla o no.

#### `texto_en_pantalla.funcion`
**Campos que contribuyen:**
- `funcion_predominante_de_los_recursos_complementarios`
- `funcion_dominante`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Determinan si el texto en pantalla refuerza, contrasta, resume, subtitula o guía.

#### `texto_en_pantalla.contenido`
**Campos que contribuyen:**
- `ideas_activadas_en_el_bloque`
- `texto_oral_principal`
- `explicitud`
- `compresion`
- `accesibilidad_lexica`

**Cómo contribuyen:**
- Se deriva del contenido verbal y conceptual, pero comprimido y optimizado para superficie.

#### `texto_en_pantalla.posicion_aproximada`
**Campos que contribuyen:**
- `tipo_de_escenificacion_admitida`
- `regimen_de_encuadre_performativo`
- `criterio_de_coherencia_de_recursos_complementarios`

**Cómo contribuyen:**
- Restringen la ubicación de la inscripción visible para que no interfiera con la performance o la coherencia visual.

#### `texto_en_pantalla.duracion_en_pantalla`
**Campos que contribuyen:**
- `duracion_estimada`
- `regimen_de_distribucion_de_recursos_complementarios`

**Cómo contribuyen:**
- Se deriva de la duración local y del régimen general de distribución del recurso.

#### `texto_en_pantalla.notas_de_coherencia`
**Campos que contribuyen:**
- `criterio_de_coherencia_de_recursos_complementarios`
- `publico_objetivo_inmediato`
- `configuracion_discursiva`

**Cómo contribuyen:**
- Explican por qué el texto visible es coherente con la pieza y con el receptor.

---

## 8. Capa de superficie escénica

### 8.1. `inscripcion_de_superficie_escenica`

#### `esquema_de_indicaciones_escenicas`
**Campos que contribuyen:**
- `regimen_de_explicitacion_escenica`

**Cómo contribuyen:**
- Fija el grado general de explicitación escénica del bloque.

#### `indicaciones_escenicas.presencia`
**Campos que contribuyen:**
- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`

**Cómo contribuyen:**
- Determinan si el bloque debe o no contener indicaciones escénicas.

#### `indicaciones_escenicas.funcion`
**Campos que contribuyen:**
- `funcion_dominante`
- `tipo_de_bloque`
- `funcion_predominante_de_los_recursos_complementarios`

**Cómo contribuyen:**
- Determinan si las indicaciones sirven para énfasis, tránsito, contraste, explicación o acompañamiento.

#### `indicaciones_escenicas.contenido`
**Campos que contribuyen:**
- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `regimen_de_encuadre_performativo`
- `grado_de_dependencia_de_la_performance_visible`

**Cómo contribuyen:**
- Definen qué tipo de acción, gesto, encuadre o puesta en escena es admisible y cuánto detalle requiere.

#### `indicaciones_escenicas.notas_de_ejecucion`
**Campos que contribuyen:**
- `grado_de_dependencia_de_la_performance_visible`
- `criterio_de_coherencia_de_recursos_complementarios`

**Cómo contribuyen:**
- Añaden observaciones sobre cuánto depende el bloque de su realización visible.

#### `acciones_por_bloque.presencia`
**Campos que contribuyen:**
- `densidad_de_accion_visible`
- `tipo_de_escenificacion_admitida`

**Cómo contribuyen:**
- Determinan si el bloque debe incluir acciones visibles adicionales.

#### `acciones_por_bloque.funcion`
**Campos que contribuyen:**
- `funcion_dominante`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Definen si la acción visible ilustra, intensifica, contrasta, acompaña o resuelve.

#### `acciones_por_bloque.contenido`
**Campos que contribuyen:**
- `ideas_activadas_en_el_bloque`
- `tipo_de_escenificacion_admitida`
- `regimen_de_encuadre_performativo`

**Cómo contribuyen:**
- Traducen el contenido conceptual del bloque a una forma visible compatible con el régimen performativo.

#### `acciones_por_bloque.notas_de_coherencia`
**Campos que contribuyen:**
- `criterio_de_coherencia_de_recursos_complementarios`
- `grado_de_dependencia_de_la_performance_visible`

**Cómo contribuyen:**
- Justifican la consistencia entre acción visible, caso y estilo global.

---

## 9. Capa visual generable

### 9.1. `imagen_en_pantalla`

#### `presencia`
**Campos que contribuyen:**
- `uso_de_imagen_generada`
- `regimen_de_distribucion_de_recursos_complementarios`

**Cómo contribuyen:**
- Determinan si el bloque lleva recurso visual estático generado.

#### `funcion`
**Campos que contribuyen:**
- `funcion_predominante_de_los_recursos_complementarios`
- `funcion_dominante`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Establecen si la imagen sirve para ilustrar, contrastar, reforzar, ambientar o sintetizar.

#### `descripcion_conceptual`
**Campos que contribuyen:**
- `ideas_activadas_en_el_bloque`
- `relaciones_entre_ideas_activadas`
- `grado_de_abstraccion`

**Cómo contribuyen:**
- Traducen el contenido conceptual del bloque a una descripción visual coherente con su nivel de abstracción.

#### `prompt_de_generacion`
**Campos que contribuyen:**
- `descripcion_conceptual`
- `registro_predominante`
- `criterio_de_coherencia_de_recursos_complementarios`
- `plataforma`
- `aplicacion_de_plataforma`

**Cómo contribuyen:**
- La descripción conceptual es la base.
- El registro y la coherencia modulan el tono del prompt.
- La plataforma restringe formato y estilo de utilidad.

#### `notas_de_coherencia`
**Campos que contribuyen:**
- `criterio_de_coherencia_de_recursos_complementarios`
- `publico_objetivo_inmediato`
- `funcion_dominante`

**Cómo contribuyen:**
- Explican por qué la imagen es pertinente para esa pieza y para ese receptor.

---

## 10. Capa audiovisual generable

### 10.1. `video_en_pantalla`

#### `presencia`
**Campos que contribuyen:**
- `uso_de_video_generado`
- `regimen_de_distribucion_de_recursos_complementarios`

**Cómo contribuyen:**
- Determinan si el bloque incorpora un recurso audiovisual generado.

#### `funcion`
**Campos que contribuyen:**
- `funcion_predominante_de_los_recursos_complementarios`
- `tipo_de_bloque`
- `funcion_dominante`

**Cómo contribuyen:**
- Definen si el video acompaña, ilustra, demuestra, contrasta o refuerza.

#### `descripcion_conceptual`
**Campos que contribuyen:**
- `ideas_activadas_en_el_bloque`
- `configuracion_narrativa`
- `grado_de_abstraccion`

**Cómo contribuyen:**
- Traduce la función conceptual y narrativa del bloque a una escena dinámica.

#### `prompt_de_generacion`
**Campos que contribuyen:**
- `descripcion_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios`
- `plataforma`
- `aplicacion_de_plataforma`
- `duracion_objetivo`

**Cómo contribuyen:**
- Construyen un prompt utilizable para IA de video, ajustado a coherencia y formato de salida.

#### `duracion_sugerida`
**Campos que contribuyen:**
- `duracion_estimada`
- `uso_de_video_generado`
- `regimen_de_distribucion_de_recursos_complementarios`

**Cómo contribuyen:**
- Se deriva de la duración del bloque y del peso permitido del recurso en él.

#### `notas_de_coherencia`
**Campos que contribuyen:**
- `criterio_de_coherencia_de_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`

**Cómo contribuyen:**
- Indican si el bloque depende fuerte o débilmente de este recurso y por qué sigue siendo coherente.

---

## 11. Capa auditiva

### 11.1. `recurso_auditivo`

#### `presencia`
**Campos que contribuyen:**
- `uso_de_audio_generado`
- `regimen_de_distribucion_de_recursos_complementarios`

**Cómo contribuyen:**
- Determinan si el bloque incorpora recurso auditivo generado.

#### `funcion`
**Campos que contribuyen:**
- `funcion_predominante_de_los_recursos_complementarios`
- `funcion_dominante`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Determinan si el recurso auditivo ambienta, refuerza, marca, transiciona o subraya.

#### `tipo_de_recurso`
**Campos que contribuyen:**
- `musica`
- `sonido_ambiente`
- `efecto_sonoro`
- `uso_de_audio_generado`

**Cómo contribuyen:**
- Seleccionan la clase de recurso auditivo pertinente.

#### `descripcion_conceptual`
**Campos que contribuyen:**
- `ideas_activadas_en_el_bloque`
- `efecto_buscado`
- `calidez`
- `intensidad`

**Cómo contribuyen:**
- Traducen la función conceptual y afectiva del bloque a una descripción sonora.

#### `prompt_de_generacion`
**Campos que contribuyen:**
- `descripcion_conceptual`
- `criterio_de_coherencia_de_recursos_complementarios`
- `tipo_de_recurso`

**Cómo contribuyen:**
- Construyen el prompt para IA sonora a partir del tipo de recurso y su coherencia con la pieza.

#### `duracion_sugerida`
**Campos que contribuyen:**
- `duracion_estimada`
- `uso_de_audio_generado`

**Cómo contribuyen:**
- Se deriva de la duración del bloque y del régimen de uso del recurso.

#### `notas_de_coherencia`
**Campos que contribuyen:**
- `criterio_de_coherencia_de_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`

**Cómo contribuyen:**
- Justifican la pertinencia del recurso auditivo.

#### `musica`
**Campos que contribuyen:**
- `musica`
- `funcion_predominante_de_los_recursos_complementarios`

**Cómo contribuyen:**
- Determinan si hay soporte musical y qué papel cumple.

#### `sonido_ambiente`
**Campos que contribuyen:**
- `sonido_ambiente`
- `descripcion_conceptual`

**Cómo contribuyen:**
- Añaden ambiente sonoro coherente con el bloque.

#### `efecto_sonoro`
**Campos que contribuyen:**
- `efecto_sonoro`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Añaden marcas sonoras puntuales según función del bloque.

---

## 12. Capa de continuidad transversal

### 12.1. `continuidad_transversal`

#### `continuidad_con_bloque_anterior`
**Campos que contribuyen:**
- `continuidad`
- `configuracion_narrativa`
- `segmentacion_interna`
- `tipo_de_bloque`

**Cómo contribuyen:**
- Determinan si el bloque continúa, contrasta, corta o reencadena con el anterior.

#### `proyeccion_hacia_bloque_siguiente`
**Campos que contribuyen:**
- `regimen_de_resolucion_buscada`
- `configuracion_narrativa`
- `continuidad`

**Cómo contribuyen:**
- Determinan si el bloque cierra localmente o proyecta tensión hacia el siguiente.

#### `continuidad_argumental`
**Campos que contribuyen:**
- `relaciones_entre_ideas_activadas`
- `configuracion_discursiva`
- `configuracion_narrativa`

**Cómo contribuyen:**
- Explican cómo se mantiene la continuidad del caso y del argumento entre bloques.

#### `continuidad_atencional`
**Campos que contribuyen:**
- `regimen_de_activacion_atencional`
- `estado_atencional`
- `recapitulacion`
- `intensidad`

**Cómo contribuyen:**
- Regulan la continuidad del hilo atencional y el reenganche entre bloques.

---

## 13. Capa de justificación de composición

### 13.1. `justificaciones_dimensionales`

#### `dimension_identidad_operativa_de_la_realizacion`
**Campos que contribuyen:**
- `formulacion_canonica`
- `nivel_de_especificidad`
- `prioridad_de_intencion`

**Cómo contribuyen:**
- Justifican por qué el bloque o la pieza responden a la realización declarada.

#### `dimension_orientacion_funcional_pragmatica`
**Campos que contribuyen:**
- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `configuracion_discursiva`

**Cómo contribuyen:**
- Justifican la función pragmática del bloque y de la pieza.

#### `dimension_escala_temporal_y_resolucion_realizativa`
**Campos que contribuyen:**
- `alcance_de_realizacion`
- `horizonte_temporal`
- `regimen_de_resolucion_buscada`

**Cómo contribuyen:**
- Justifican el ritmo global, la autonomía o continuidad de la pieza y el tipo de cierre.

#### `dimension_acoplamiento_receptoral`
**Campos que contribuyen:**
- `publico_objetivo_inmediato`
- `registro_predominante`
- `densidad_terminologica`
- `grado_de_abstraccion`
- `accesibilidad_lexica`
- `variacion_lexica`

**Cómo contribuyen:**
- Justifican el ajuste de la manifestación al receptor.

#### `dimension_dinamica_atencional_y_procesual`
**Campos que contribuyen:**
- `estado_atencional`
- `regimen_de_activacion_atencional`
- `explicitud`
- `continuidad`
- `friccion_interpretativa`
- `compresion`
- `recapitulacion`

**Cómo contribuyen:**
- Justifican apertura, fluidez, dificultad, condensación y recapitulación.

#### `dimension_construccion_del_caso`
**Campos que contribuyen:**
- `formulacion_de_la_idea`
- `rol_conceptual`
- `peso_relativo`
- `modo_de_presencia`
- `relaciones_con_otras_ideas`
- `configuracion_narrativa`

**Cómo contribuyen:**
- Justifican el reparto del contenido conceptual entre bloques y capas.

#### `dimension_comparecencia_performativa`
**Campos que contribuyen:**
- `cercania`
- `autoridad`
- `calidez`
- `intensidad`
- `sobriedad`
- `modalidad_de_guion`
- `modo_de_comparecencia_verbal`
- `emisor`
- `dialogo`
- `musica`
- `sonido_ambiente`
- `efecto_sonoro`
- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `regimen_de_encuadre_performativo`
- `grado_de_dependencia_de_la_performance_visible`

**Cómo contribuyen:**
- Justifican la forma visible y audible de comparecencia de la pieza.

#### `dimension_marco_de_materializacion`
**Campos que contribuyen:**
- `clase_de_materializacion`
- `plataforma`
- `aplicacion_de_plataforma`

**Cómo contribuyen:**
- Justifican la pertenencia codominial de la manifestación.

#### `dimension_composicion_segmental_de_la_salida`
**Campos que contribuyen:**
- `duracion_objetivo`
- `arquitectura_macro`

**Cómo contribuyen:**
- Justifican la arquitectura global y la organización por bloques.

#### `dimension_inscripcion_de_superficie_de_la_salida`
**Campos que contribuyen:**
- `uso_de_texto_en_pantalla`
- `regimen_de_explicitacion_escenica`
- `tipo_de_escenificacion_admitida`
- `densidad_de_accion_visible`
- `regimen_de_encuadre_performativo`
- `grado_de_dependencia_de_la_performance_visible`

**Cómo contribuyen:**
- Justifican la superficie textual y la superficie escénica.

#### `dimension_recursos_complementarios_de_manifestacion`
**Campos que contribuyen:**
- `uso_de_imagen_generada`
- `uso_de_video_generado`
- `uso_de_audio_generado`
- `funcion_predominante_de_los_recursos_complementarios`
- `grado_de_dependencia_de_recursos_complementarios`
- `regimen_de_distribucion_de_recursos_complementarios`
- `criterio_de_coherencia_de_recursos_complementarios`

**Cómo contribuyen:**
- Justifican la presencia, distribución, función y coherencia de imagen, video y recurso auditivo generados.

---

## 14. Fórmula de cierre

La Manifestación codominial compuesta, entendida en esta versión expandida, ya no es solo un esquema de capas, sino una estructura con trazabilidad explícita entre:

- cada campo de salida,
- los campos de las Dimensiones de configuración que lo alimentan,
- y el modo exacto en que dichos campos contribuyen a su construcción.

Esto permite verificar que:

1. ninguna dimensión quede sin locus de incidencia;
2. ningún campo quede sin función composicional;
3. y toda parte de la manifestación pueda ser justificada por contribuciones estructurales provenientes del modelo base.
