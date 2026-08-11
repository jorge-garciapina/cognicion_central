# Fixture — Construcción conceptual del fraude del collar

```yaml
construccion_conceptual:
  coleccion_de_ideas_activas:
    ideas_activas:
      - idea_id: mentira_no_produce_directamente_resultado_material
        formulacion_de_la_idea: proposicion_argumentativa
        formulacion_textual_de_la_idea: >-
          La mentira no produce directamente el resultado material: primero debe
          operar sobre una configuración cognitiva y atravesar varias mediaciones.
        rol_conceptual: nuclear
        peso_relativo: 0.96
        modo_de_presencia: explicita_reiterada
        relaciones_con_otras_ideas:
          - idea_relacionada: intervencion_reconfigura_cognicion_de_rohan
            tipo_de_relacion: expansion
            descripcion_de_la_relacion: >-
              La transformación cognitiva despliega la primera mediación que impide
              interpretar la mentira como causa material directa.
          - idea_relacionada: capacidad_y_manifestacion_son_distintas
            tipo_de_relacion: soporte
            descripcion_de_la_relacion: >-
              La diferencia entre capacidad y manifestación confirma que entre la
              intervención inicial y el resultado externo existen operaciones intermedias.

      - idea_id: intervencion_reconfigura_cognicion_de_rohan
        formulacion_de_la_idea: proposicion_relacional
        formulacion_textual_de_la_idea: >-
          La intervención fraudulenta modifica la configuración cognitiva de Rohan:
          aumenta la confianza en la narrativa y reduce el peso de la posibilidad de engaño.
        rol_conceptual: nuclear
        peso_relativo: 0.92
        modo_de_presencia: explicita
        relaciones_con_otras_ideas:
          - idea_relacionada: configuracion_cognitiva_habilita_accion
            tipo_de_relacion: condicion
            descripcion_de_la_relacion: >-
              La nueva configuración establece las condiciones cognitivas desde las
              cuales la acción de intermediación se vuelve inteligible y probable.
          - idea_relacionada: mentira_no_produce_directamente_resultado_material
            tipo_de_relacion: soporte
            descripcion_de_la_relacion: >-
              La transformación de Rohan explica por qué la intervención necesita una
              mediación cognitiva antes de producir consecuencias externas.

      - idea_id: configuracion_cognitiva_habilita_accion
        formulacion_de_la_idea: proposicion_relacional
        formulacion_textual_de_la_idea: >-
          La configuración cognitiva alcanzada no es todavía una acción, pero aumenta
          la disposición de Rohan a intervenir y comprometer su nombre.
        rol_conceptual: puente
        peso_relativo: 0.86
        modo_de_presencia: transversal
        relaciones_con_otras_ideas:
          - idea_relacionada: accion_moviliza_prestigio_preexistente
            tipo_de_relacion: condicion
            descripcion_de_la_relacion: >-
              La disposición cognitiva precede a la conducta que finalmente moviliza
              una capacidad social ya poseída por Rohan.
          - idea_relacionada: intervencion_reconfigura_cognicion_de_rohan
            tipo_de_relacion: consecuencia
            descripcion_de_la_relacion: >-
              La disposición a actuar resulta de la transformación cognitiva previa.

      - idea_id: accion_moviliza_prestigio_preexistente
        formulacion_de_la_idea: proposicion_relacional
        formulacion_textual_de_la_idea: >-
          Al actuar como intermediario, Rohan moviliza una capacidad social que ya
          poseía: su prestigio y la credibilidad asociada con su posición.
        rol_conceptual: nuclear
        peso_relativo: 0.94
        modo_de_presencia: explicita
        relaciones_con_otras_ideas:
          - idea_relacionada: prestigio_requiere_contexto_que_lo_reconozca
            tipo_de_relacion: condicion
            descripcion_de_la_relacion: >-
              El prestigio sólo puede volverse eficaz si opera dentro de relaciones
              sociales que reconocen y responden a esa capacidad.
          - idea_relacionada: capacidad_y_manifestacion_son_distintas
            tipo_de_relacion: soporte
            descripcion_de_la_relacion: >-
              Identificar el prestigio como capacidad permite distinguirlo del cambio
              material que aparece después.

      - idea_id: prestigio_requiere_contexto_que_lo_reconozca
        formulacion_de_la_idea: proposicion_relacional
        formulacion_textual_de_la_idea: >-
          El prestigio de Rohan no produce efectos por sí solo; necesita un contexto
          social e institucional en el que terceros reconozcan su nombre como garantía.
        rol_conceptual: nuclear
        peso_relativo: 0.93
        modo_de_presencia: transversal
        relaciones_con_otras_ideas:
          - idea_relacionada: joyeros_median_entre_prestigio_y_entrega
            tipo_de_relacion: expansion
            descripcion_de_la_relacion: >-
              La conducta de los joyeros muestra de manera concreta cómo el contexto
              reconoce la capacidad y la vuelve operativa.
          - idea_relacionada: accion_moviliza_prestigio_preexistente
            tipo_de_relacion: condicion
            descripcion_de_la_relacion: >-
              La capacidad movilizada por la acción requiere este contexto para poder
              contribuir a una manifestación externa.

      - idea_id: joyeros_median_entre_prestigio_y_entrega
        formulacion_de_la_idea: proposicion_relacional
        formulacion_textual_de_la_idea: >-
          La respuesta de los joyeros media entre el prestigio movilizado por Rohan y
          la entrega material: ellos interpretan su intervención y actúan dentro de las reglas sociales del caso.
        rol_conceptual: complementaria
        peso_relativo: 0.78
        modo_de_presencia: localizada
        relaciones_con_otras_ideas:
          - idea_relacionada: collar_disponible_es_manifestacion
            tipo_de_relacion: condicion
            descripcion_de_la_relacion: >-
              La respuesta de los joyeros es una condición de la transferencia que
              termina haciendo disponible el collar.
          - idea_relacionada: prestigio_requiere_contexto_que_lo_reconozca
            tipo_de_relacion: soporte
            descripcion_de_la_relacion: >-
              Su respuesta ejemplifica la eficacia contextual del prestigio de Rohan.

      - idea_id: collar_disponible_es_manifestacion
        formulacion_de_la_idea: proposicion_definicional
        formulacion_textual_de_la_idea: >-
          El collar disponible para Jeanne es la manifestación externa del mecanismo:
          un cambio observable en el control material del bien.
        rol_conceptual: derivada
        peso_relativo: 0.84
        modo_de_presencia: explicita
        relaciones_con_otras_ideas:
          - idea_relacionada: joyeros_median_entre_prestigio_y_entrega
            tipo_de_relacion: consecuencia
            descripcion_de_la_relacion: >-
              La disponibilidad material del collar resulta de la respuesta y la acción
              de quienes podían entregarlo.
          - idea_relacionada: capacidad_y_manifestacion_son_distintas
            tipo_de_relacion: contraste
            descripcion_de_la_relacion: >-
              El estado material final debe distinguirse de la capacidad social que
              contribuyó a producirlo.

      - idea_id: capacidad_y_manifestacion_son_distintas
        formulacion_de_la_idea: proposicion_argumentativa
        formulacion_textual_de_la_idea: >-
          El prestigio de Rohan y el collar disponible para Jeanne no son la misma
          cosa: el primero es una capacidad movilizada y el segundo es la manifestación producida bajo contexto.
        rol_conceptual: contrastiva
        peso_relativo: 1.00
        modo_de_presencia: explicita_reiterada
        relaciones_con_otras_ideas:
          - idea_relacionada: accion_moviliza_prestigio_preexistente
            tipo_de_relacion: soporte
            descripcion_de_la_relacion: >-
              La identificación del prestigio como capacidad establece uno de los polos
              de la distinción.
          - idea_relacionada: collar_disponible_es_manifestacion
            tipo_de_relacion: contraste
            descripcion_de_la_relacion: >-
              La disponibilidad del collar ocupa una función ontológica distinta: es
              el cambio externo producido, no la potencia generativa.
```

