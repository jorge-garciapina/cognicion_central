# 1. Diagnóstico argumentativo global

El guion tiene una arquitectura clara: parte de una **pregunta existencial** y la conduce hacia una **máquina de desidentificación**.

La tesis profunda del texto no es simplemente:

```txt
No soy el cuerpo.
No soy mis sensaciones.
No soy mi percepción.
No soy mis formaciones mentales.
No soy mi conciencia.
```

La tesis real es más fuerte:

```txt
Aquello que no puedo controlar soberanamente,
aquello que cambia,
aquello que puede conducir a la aflicción,
no puede ser identificado legítimamente como “Yo”.
```

El guion funciona como una cadena de descarte. Primero abre la pregunta máxima: **“¿Qué soy Yo?”**. Después muestra que una explicación puramente materialista resulta insuficiente para responder a la experiencia íntima de vivir: el canto de las aves, el olor de la tierra mojada, la experiencia subjetiva del mundo. Luego introduce el segundo sermón del Buddha como una vía para llevar la pregunta más allá del cuerpo y del pensamiento.

La trayectoria argumentativa puede resumirse así:

```txt
pregunta existencial por el Yo
  → insuficiencia de una explicación puramente material
    → búsqueda de una explicación más profunda
      → aparición del Anattalakkhaṇa Sutta
        → prueba de control y aflicción
          → descarte de la forma como Yo
            → descarte de la sensación como Yo
              → descarte de la percepción como Yo
                → descarte de las formaciones mentales como Yo
                  → descarte de la conciencia como Yo
                    → conclusión: los agregados son reales, pero no son el Yo
                      → desapasionamiento, libertad y conocimiento
```

# 2. Tesis global del guion

```yaml
tesis_global:
  claim_id: CL_GLOBAL_01
  formulacion: >
    Ninguno de los cinco agregados puede ser considerado el Yo,
    porque todos son impermanentes, no están bajo control soberano
    y pueden conducir a la aflicción; la liberación comienza cuando
    el sujeto deja de identificarse con ellos.
  tipo:
    - claim_filosofico
    - claim_espiritual
    - claim_argumentativo
    - claim_experiencial
  funcion_macro: >
    Transformar la pregunta “¿qué soy Yo?” en una operación de descarte:
    no responder directamente qué es el Yo, sino mostrar qué no puede ser
    legítimamente tomado como Yo.
```

Esta tesis es fuerte porque no intenta definir el Yo de forma positiva. El guion hace algo más cercano al procedimiento del propio sermón: examina los lugares donde normalmente se aloja la identidad y muestra que ninguno resiste la prueba.

# 3. Claims principales

## CL_01 — La pregunta por el Yo no queda satisfecha por la explicación científica-material

```yaml
claim_id: CL_01
formulacion: >
  La ciencia puede describir al ser humano como materia, partículas,
  fuerzas y procesos químicos, pero esa descripción no basta para comprender
  la experiencia íntima de ser alguien.
tipo:
  - claim_de_insuficiencia
  - claim_existencial
funcion_macro: abrir_la_brecha_entre_explicacion_fisica_y_experiencia_vivida
```

**Ground principal:** el guion dice que una explicación basada en electrones, protones, neutrones, glándulas y procesos químicos no alcanza para explicar el sentimiento producido por el canto de las aves o el aroma de la tierra mojada.

**Warrant:**

```txt
Si una explicación describe la composición física del sujeto,
pero no ilumina la experiencia subjetiva de vivir,
entonces esa explicación es válida pero incompleta.
```

Este claim funciona muy bien como apertura porque evita atacar a la ciencia. El texto dice que acepta sus fundamentos lógicos y experimentales, pero la considera incompleta para responder la pregunta existencial.

## CL_02 — El segundo sermón del Buddha permite llevar la pregunta por el Yo más allá del cuerpo y del pensamiento

```yaml
claim_id: CL_02
formulacion: >
  El Anattalakkhaṇa Sutta es útil porque desplaza la pregunta por el Yo
  desde una respuesta superficial hacia una investigación de las capas
  de la experiencia.
tipo:
  - claim_de_transicion
  - claim_de_autoridad_textual
funcion_macro: justificar_la_entrada_del_sermon_al_guion
```

**Ground:** el guion afirma que el segundo sermón del Buddha lleva la cuestión del Yo “más allá del cuerpo y más allá del pensamiento”.

**Warrant:**

```txt
Si el problema del Yo no se resuelve en la superficie corporal ni en una
explicación material, entonces un texto que examina cuerpo, sensación,
percepción, formaciones y conciencia ofrece una vía más profunda.
```

Aquí hay una buena transición narrativa. La pregunta inicial no se abandona; se transforma en una búsqueda.

## CL_03 — Si algo fuera realmente el Yo, debería poder ser gobernado soberanamente

```yaml
claim_id: CL_03
formulacion: >
  Si algo fuera verdaderamente el Yo, debería estar bajo dominio soberano del Yo.
tipo:
  - claim_condicional
  - claim_argumentativo
funcion_macro: instalar_la_primera_prueba_del_sermon
```

Este es uno de los pilares del guion.

## CL_04 — Si algo fuera realmente el Yo, no debería conducir a la aflicción

```yaml
claim_id: CL_04
formulacion: >
  Si algo fuera el Yo en sentido soberano, no sería una entidad ajena, cambiante y resistente capaz de volverse contra la voluntad del propio Yo.
tipo:
  - claim_condicional
  - claim_pragmatico-existencial
funcion_macro: instalar_la_segunda_prueba_del_sermon
```

# 4. Análisis de los cinco movimientos argumentativos

## MOV_01 — Rūpa / Forma: el cuerpo no puede ser el Yo

```yaml
movimiento_id: MOV_01
agregado: Rūpa / Forma
claim: >
  El cuerpo no puede ser el Yo porque no está bajo control soberano:
  envejece, enferma, cambia y presenta rasgos que no podemos modificar a voluntad.
ground_dominante: >
  Enfermedades que no se curan, defectos que no se reparan, rasgos que no
  se cambian, envejecimiento inevitable.
warrant: >
  Si el cuerpo fuera el Yo, el sujeto podría ordenar que fuera de una manera
  y no de otra; como no puede hacerlo, el cuerpo no puede ser el Yo.
funcion_macro: >
  Desactivar la identificación más inmediata: “yo soy este cuerpo”.
```

Esta es una de las secciones más fuertes del guion. Tiene una lógica clara y ejemplos accesibles: tratamientos de rejuvenecimiento, cremas, dietas, enfermedad, vejez, defectos e imperfecciones.

La fuerza de esta sección está en que empieza por el refugio identitario más común. La mayoría de las personas entiende de inmediato la frase:

```txt
Yo soy este cuerpo.
```

Y también entiende de inmediato su fragilidad:

```txt
No puedo evitar que envejezca.
No puedo evitar que enferme.
No puedo decidir plenamente su forma.
```

La nota sobre teorías modernas de modificación del cuerpo mediante la mente puede ser útil, pero debe manejarse con cuidado. Si se incluye, no debería abrir una discusión lateral sobre si esas teorías son verdaderas o falsas. Su función tendría que ser otra:

```txt
Incluso si pudiéramos modificar el cuerpo más de lo que creemos,
seguiríamos atrapados en el problema central:
la apropiación del cuerpo como identidad.
```

## MOV_02 — Vedanā / Sensación: lo agradable y desagradable no puede ser el Yo

```yaml
movimiento_id: MOV_02
agregado: Vedanā / Sensación
claim: >
  La sensación no puede ser el Yo porque no decidimos soberanamente
  qué nos resulta agradable, desagradable o neutro.
ground_dominante:
  - ejemplo_de_la_chica_que_disfruta_el_olor_a_gasolina
  - ejemplo_del_aficionado_al_futbol_que_no_puede_evitar_la_molestia
warrant: >
  Si la sensación fuera el Yo, podríamos decidir qué sentir ante cada objeto
  o acontecimiento; como no podemos, la sensación no puede ser el Yo.
funcion_macro: >
  Desplazar el análisis desde el cuerpo hacia una capa más íntima:
  el gusto, el rechazo y la neutralidad.
```

Esta sección tiene un buen ejemplo: la chica que disfruta el olor a gasolina porque lo asocia con su abuelo y con viajes de infancia. Es narrativo, concreto y muestra que una sensación agradable puede surgir de una historia afectiva que no elegimos deliberadamente.

El ejemplo del fanático de fútbol también funciona, porque muestra que alguien puede evitar el estímulo externo —dejar de ver partidos— pero no controlar completamente la reacción afectiva ante la derrota de su equipo.

La mejora conceptual aquí sería distinguir mejor:

```txt
sensación hedónica
≠ emoción compleja
≠ pensamiento sobre la emoción
```

Para el guion, conviene formularlo así:

```txt
Vedanā no es “emoción” en el sentido moderno.
Es algo más primario:
esto se siente agradable,
esto se siente desagradable,
esto se siente neutro.
```

## MOV_03 — Saññā / Percepción: la forma en que interpretamos no puede ser el Yo

```yaml
movimiento_id: MOV_03
agregado: Saññā / Percepción
claim: >
  La percepción no puede ser el Yo porque no percibimos los acontecimientos
  desde una neutralidad soberana, sino desde marcos, afiliaciones,
  historias y condiciones previas.
ground_dominante: >
  Una misma noticia política produce júbilo en un grupo y aflicción en otro.
warrant: >
  Si la percepción fuera el Yo, no estaría sujeta a configuraciones
  condicionadas que transforman un mismo hecho en realidades opuestas.
funcion_macro: >
  Mostrar que el Yo tampoco puede refugiarse en “yo soy quien interpreta”.
```

El ejemplo político tiene fuerza porque muestra cómo un mismo acontecimiento puede ser vivido como triunfo o tragedia dependiendo del marco perceptivo.

Sin embargo, aquí hay un riesgo. El ejemplo puede activar polarización y hacer que el espectador empiece a pensar en política, no en percepción. Para evitar eso, se puede mantener la estructura, pero desactivar la referencia concreta:

```txt
Una misma noticia electoral puede ser vivida como esperanza por unos
y como amenaza por otros.
El hecho externo es el mismo.
Lo que cambia es la percepción organizada alrededor de identidad,
memoria, miedo, pertenencia y expectativa.
```

Así el ejemplo conserva la fuerza, pero no arrastra el video hacia una discusión política local.

## MOV_04 — Saṅkhārā / Formaciones mentales: pensamientos, hábitos y configuraciones no pueden ser el Yo

```yaml
movimiento_id: MOV_04
agregado: Saṅkhārā / Formaciones mentales
claim: >
  Las formaciones mentales no pueden ser el Yo porque se forman,
  cambian, se reconfiguran y dependen de la experiencia previa.
ground_dominante:
  - ejemplo_de_pensar_en_distintas_frutas
  - ejemplo_de_la_palabra_banco_como_dinero_o_asiento
warrant: >
  Si las formaciones mentales fueran el Yo, no surgirían de asociaciones,
  hábitos, experiencias y configuraciones cambiantes.
funcion_macro: >
  Atacar una identificación más sutil: “yo soy mis pensamientos”,
  “yo soy mis ideas”, “yo soy mi voluntad”.
```

Esta sección está bien encaminada, pero necesita más precisión. Los ejemplos de “rambután/mango” y “banco/dinero/asiento” funcionan muy bien para **saññā**, porque muestran reconocimiento, clasificación y asociación semántica. Pero **saṅkhārā** es más amplio y más profundo: incluye formaciones, disposiciones, impulsos, hábitos, tendencias, intenciones, configuraciones volitivas.

Para fortalecer esta parte, convendría añadir ejemplos como:

```txt
Decido no enojarme, pero el enojo aparece.
Decido no desear algo, pero el deseo vuelve.
Decido dejar un hábito, pero el impulso se repite.
Decido pensar con calma, pero la mente fabrica escenarios de miedo.
```

Eso mostraría mejor la tesis:

```txt
No soy mis formaciones mentales,
porque muchas de ellas se forman antes de que pueda gobernarlas.
```

## MOV_05 — Viññāṇa / Conciencia: la conciencia tampoco puede ser refugio final del Yo

```yaml
movimiento_id: MOV_05
agregado: Viññāṇa / Conciencia
claim: >
  La conciencia no puede ser el Yo porque no es permanente,
  no está siempre presente del mismo modo y tampoco puede ser gobernada
  soberanamente.
ground_dominante:
  - momentos_de_modo_automatico
  - pregunta: si decidimos estar atentos, ¿quién decide?
warrant: >
  Si la conciencia fuera el Yo, debería ser estable, disponible y gobernable;
  como aparece, desaparece, fluctúa y se condiciona, no puede ser el Yo.
funcion_macro: >
  Cerrar el último refugio metafísico: “si no soy cuerpo ni pensamiento,
  entonces soy la conciencia”.
```

Esta es probablemente la sección que más necesita refinamiento. Tiene una intuición muy buena: cuando ya se descartó el cuerpo, la sensación, la percepción y las formaciones, aparece el refugio más sofisticado:

```txt
Entonces soy mi conciencia.
Soy la atención que pongo en el mundo.
```

Pero la frase “la conciencia aumenta o disminuye pero no se transforma, es lo que es” es problemática. En el modelo del sutta, la conciencia también es impermanente, condicionada y cambiante. Conviene cambiarla por:

```txt
La conciencia no aparece siempre igual.
A veces es clara, a veces confusa.
A veces está despierta, a veces está absorbida.
A veces se dirige a un objeto, luego a otro.
No permanece idéntica a sí misma.
```

Eso conecta mejor con la estructura argumental del sermón.

# 5. Warrants centrales del guion

## WA_01 — Warrant de control soberano

```yaml
warrant_id: WA_01
formulacion: >
  Si algo fuera verdaderamente el Yo, debería estar bajo dominio soberano
  del Yo.
conecta:
  grounds:
    - imposibilidad_de_controlar_el_cuerpo
    - imposibilidad_de_elegir_totalmente_los_gustos
    - imposibilidad_de_controlar_completamente_la_percepcion
    - imposibilidad_de_gobernar_formaciones_mentales
    - fluctuacion_de_la_conciencia
  claims:
    - ninguno_de_los_agregados_es_el_yo
vulnerabilidad: >
  Debe distinguirse control soberano de influencia parcial.
```

Este es el warrant más importante del guion. Hay que protegerlo, porque si se formula como “si algo es mío puedo modificarlo”, queda débil. La versión fuerte es:

```txt
No basta con poder influir algo.
Para que algo sea el Yo absoluto,
tendría que estar bajo gobierno absoluto.
```

## WA_02 — Warrant de aflicción

```yaml
warrant_id: WA_02
formulacion: >
  Si algo puede volverse causa de aflicción, no puede ser identificado
  como un Yo soberano, estable y último.
conecta:
  grounds:
    - enfermedad
    - vejez
    - gustos_no_controlados
    - derrota_del_equipo
    - percepciones_politicas_opuestas
    - pensamientos_no_gobernables
    - conciencia_de_objetos_aflictivos
  claims:
    - los_agregados_no_son_el_yo
vulnerabilidad: >
  Debe aclararse que el problema no es que algo produzca dolor una vez,
  sino que lo condicionado no puede ofrecer seguridad absoluta.
```

## WA_03 — Warrant de impermanencia

```yaml
warrant_id: WA_03
formulacion: >
  Lo impermanente no puede funcionar como identidad última,
  porque una identidad última exigiría estabilidad suficiente para sostener
  apropiación absoluta.
conecta:
  claims:
    - cuerpo_no_es_yo
    - sensación_no_es_yo
    - percepción_no_es_yo
    - formaciones_no_son_yo
    - conciencia_no_es_yo
```

Este warrant aparece hacia el final del texto, cuando el guion afirma que ninguno de los agregados puede ser considerado Yo porque son impermanentes.

# 6. Backing principal

```yaml
backing:
  - backing_id: BK_01
    tipo: fuente_textual_primaria
    fuente: Anattalakkhaṇa Sutta
    funcion: >
      Sostiene la estructura de los cinco agregados y la prueba:
      si fuera el Yo, sería controlable y no conduciría a aflicción.

  - backing_id: BK_02
    tipo: experiencia_cotidiana
    fuente:
      - envejecimiento
      - enfermedad
      - gustos_involuntarios
      - reacciones_afectivas
      - percepción_política
      - asociaciones_mentales
      - estados_de_conciencia
    funcion: >
      Traducir el argumento del sermón a escenas reconocibles para el espectador.

  - backing_id: BK_03
    tipo: contraste_explicativo
    fuente: explicación científica-material inicial
    funcion: >
      Mostrar que una descripción física del ser humano no agota
      la pregunta por la experiencia subjetiva.
```

El guion funciona porque no se queda en exposición doctrinal. Usa ejemplos cotidianos para llevar el argumento al plano experiencial.

# 7. Qualifiers y matices necesarios

El texto ya tiene un matiz muy importante:

```txt
Buddha no dijo que los agregados fueran falsos.
No cuestionó su existencia o inexistencia.
Dijo algo más profundo:
el cuerpo es real, pero no eres el cuerpo;
la conciencia es real, pero no eres la conciencia.
```

Ese es uno de los mejores momentos del guion.

Debe convertirse en un punto estructural, no solo en una aclaración final.

```yaml
qualifier_id: QL_01
formulacion: >
  Los agregados no son falsos; son reales como procesos,
  pero no son legítimos como identidad última.
funcion: evitar_lectura_nihilista
```

Otro qualifier necesario:

```yaml
qualifier_id: QL_02
formulacion: >
  No se trata de negar que podamos influir parcialmente en el cuerpo,
  las sensaciones, la percepción, las formaciones o la conciencia;
  se trata de negar que podamos gobernarlos soberanamente.
funcion: evitar_objecion_de_control_parcial
```

Y uno más:

```yaml
qualifier_id: QL_03
formulacion: >
  No basta con pensar intelectualmente “esto no soy yo”;
  el sermón apunta a una visión transformadora, no a una frase repetida.
funcion: fortalecer_el_cierre_espiritual
```

Este último es importante porque el guion dice: “Para liberarse del sufrimiento es necesario pensar que ninguno de estos agregados es realmente Yo.” Sería mejor decir:

```txt
Para liberarse, no basta con pensarlo.
Hay que verlo de tal modo que la identificación pierda fuerza.
```

# 8. Rebuttals: objeciones internas que el guion ya contiene o debería contener

## RB_01 — “Pero la ciencia sí responde qué soy”

```yaml
rebuttal_id: RB_01
objecion: >
  La ciencia ya responde qué soy: materia, biología, química, sistema nervioso.
respuesta_del_guion: >
  Esa explicación es válida, pero incompleta para responder la experiencia íntima
  de ser alguien.
estado: presente_en_el_texto
```

Esta objeción está bien manejada porque el texto no rechaza la ciencia. La acepta, pero le asigna un límite.

## RB_02 — “Puedo modificar mi cuerpo, entonces tal vez sí soy mi cuerpo”

```yaml
rebuttal_id: RB_02
objecion: >
  Puedo modificar mi cuerpo mediante dieta, ejercicio, medicina o tecnología.
respuesta_recomendada: >
  La modificación parcial no equivale a dominio soberano.
  Puedes intervenir el cuerpo, pero no puedes impedir completamente
  enfermedad, vejez, deterioro o muerte.
estado: sugerido_por_la_nota_del_guion
```

## RB_03 — “Puedo modificar mis pensamientos, entonces tal vez soy mis formaciones mentales”

```yaml
rebuttal_id: RB_03
objecion: >
  Puedo dirigir mi atención y modificar mis pensamientos.
respuesta_del_guion: >
  Si decides estar atento, todavía queda la pregunta:
  ¿quién decide?, ¿desde dónde surge esa decisión?,
  ¿por qué la atención fluctúa?
estado: presente_pero_necesita_refinamiento
```

Esta objeción aparece muy bien antes de la conciencia. Pero debe afinarse para no caer en paradoja confusa.

## RB_04 — “Entonces nada existe”

```yaml
rebuttal_id: RB_04
objecion: >
  Si no soy cuerpo, sensación, percepción, formaciones ni conciencia,
  entonces quizá nada existe o todo es falso.
respuesta_del_guion: >
  Los agregados no son falsos. Existen como procesos,
  pero no deben ser apropiados como Yo.
estado: presente_y_muy_fuerte
```

Esta es una de las defensas más importantes del guion.

# 9. Esquemas argumentativos detectados

## SCH_01 — Argumento por descarte progresivo

```yaml
scheme_id: SCH_01
tipo: descarte_progresivo_de_candidatos
estructura: >
  Si el Yo fuera X, X tendría propiedades A y B.
  X no tiene propiedades A y B.
  Por tanto, X no es el Yo.
aplicacion:
  - cuerpo
  - sensación
  - percepción
  - formaciones
  - conciencia
funcion: >
  Convertir la pregunta “qué soy” en una serie de invalidaciones.
```

Este es el esquema dominante del guion.

## SCH_02 — Argumento por experiencia cotidiana

```yaml
scheme_id: SCH_02
tipo: ejemplificacion_experiencial
estructura: >
  Una escena cotidiana muestra que no controlamos plenamente un agregado.
  Esa falta de control vuelve intuitiva la tesis doctrinal.
ejemplos:
  - envejecimiento
  - gusto_por_la_gasolina
  - enojo_del_aficionado
  - percepción_politica
  - asociaciones_con_frutas_o_banco
```

Este esquema es muy útil para un video porque baja la abstracción.

## SCH_03 — Argumento por insuficiencia explicativa

```yaml
scheme_id: SCH_03
tipo: contraste_entre_explicacion_externa_y_experiencia_interna
estructura: >
  Una explicación puede ser correcta en su dominio,
  pero insuficiente para responder una pregunta de otro nivel.
funcion: >
  Abrir espacio para una búsqueda espiritual sin negar la validez científica.
```

## SCH_04 — Argumento anti-nihilista

```yaml
scheme_id: SCH_04
tipo: distincion_entre_existencia_y_apropiacion
estructura: >
  X existe.
  Pero X no es el Yo.
  Por tanto, negar X como Yo no equivale a negar X como fenómeno.
funcion: >
  Evitar que el espectador entienda anattā como nihilismo.
```

# 10. Arquitectura macro del guion

```yaml
arquitectura_argumentativa:
  tipo_global: investigacion_existencial_por_descarte_de_agregados

  trayectoria:
    - fase: apertura_existencial
      funcion: instalar_la_pregunta_que_gobierna_el_video
      texto_base: "¿Qué soy Yo?"

    - fase: insuficiencia_de_la_respuesta_material
      funcion: abrir_brecha_entre_descripcion_fisica_y_experiencia_subjetiva

    - fase: entrada_del_sermon
      funcion: presentar_el_Anattalakkhaṇa_Sutta_como_herramienta_de_investigacion

    - fase: instalacion_de_la_prueba
      funcion: fijar_los_criterios_control_y_no_afliccion

    - fase: descarte_de_Rūpa
      funcion: romper_identificacion_con_el_cuerpo

    - fase: descarte_de_Vedanā
      funcion: romper_identificacion_con_el_gusto_rechazo_neutralidad

    - fase: descarte_de_Saññā
      funcion: romper_identificacion_con_la_percepcion_interpretativa

    - fase: descarte_de_Saṅkhārā
      funcion: romper_identificacion_con_pensamientos_habitos_configuraciones

    - fase: descarte_de_Viññāṇa
      funcion: romper_identificacion_con_la_conciencia_como_refugio_final

    - fase: sintesis_de_los_cinco_agregados
      funcion: condensar_el_modelo

    - fase: cierre_anti_nihilista_y_liberador
      funcion: afirmar_que_los_agregados_son_reales_pero_no_son_el_Yo
```

# 11. Transformación cognitiva del espectador

```yaml
transformacion_cognitiva:
  estado_inicial:
    descripcion: >
      El espectador cree que la pregunta “¿qué soy?” exige una respuesta directa:
      cuerpo, mente, alma, conciencia, personalidad o materia.

  operaciones_transformadoras:
    - mostrar_que_la_explicacion_material_no_agota_la_experiencia
    - introducir_un_criterio_de_control_y_afliccion
    - aplicar_el_criterio_al_cuerpo
    - aplicar_el_criterio_a_las_sensaciones
    - aplicar_el_criterio_a_la_percepcion
    - aplicar_el_criterio_a_las_formaciones_mentales
    - aplicar_el_criterio_a_la_conciencia
    - aclarar_que_no_se_niega_la_realidad_de_los_agregados
    - desplazar_la_identidad_desde_apropiacion_hacia_desidentificacion

  estado_final:
    descripcion: >
      El espectador entiende que el sermón no responde “qué cosa soy”,
      sino que desmonta los lugares donde el Yo intenta fijarse.
```

# 12. Diagnóstico de fuerza y debilidad

## Fuerzas principales

La apertura es potente porque parte de una pregunta universal. El contraste entre ciencia y experiencia subjetiva funciona bien porque no cae en anticiencia. La estructura de los cinco agregados es clara. Los ejemplos son comprensibles. El cierre anti-nihilista es muy importante y debe conservarse.

## Debilidades principales

La premisa “si algo es tuyo, debes poder influirlo” necesita precisión. Debe cambiarse por **dominio soberano**, no influencia parcial.

La sección de **Saṅkhārā** todavía no expresa con suficiente fuerza las formaciones mentales como impulsos, hábitos, intenciones y disposiciones. Usa ejemplos más cercanos a asociación semántica.

La sección de **Viññāṇa** necesita más cuidado. No conviene decir que la conciencia “no se transforma”. El argumento debe ser que la conciencia también fluctúa, depende de condiciones, cambia de objeto y no está bajo control absoluto.

El ejemplo político para la percepción funciona, pero puede distraer. Sería mejor hacerlo más universal o menos local.

La frase “todo lo impermanente lleva al sufrimiento” debe matizarse. Para el guion conviene decir:

```txt
Todo lo impermanente, cuando se toma como identidad última,
se vuelve incapaz de ofrecer seguridad absoluta.
```

# 13. Formulación condensada del guion actual

Desde el `analizador_argumentativo`, esta primera versión puede resumirse así:

```txt
claim central:
  ninguno de los cinco agregados puede ser el Yo.

soporte dominante:
  ejemplos cotidianos de falta de control, cambio y aflicción.

warrant central:
  lo que no está bajo dominio soberano,
  lo que cambia,
  y lo que puede causar aflicción,
  no puede ser identidad última.

qualifier principal:
  los agregados no son falsos;
  son reales como procesos,
  pero no son el Yo.

rebuttal principal:
  la explicación científica-material es válida,
  pero no responde completamente la experiencia subjetiva de ser alguien.

función macro:
  convertir la pregunta “¿qué soy Yo?”
  en un recorrido de desidentificación progresiva.
```

# 14. Conclusión operativa

La primera versión ya tiene una columna vertebral clara. No es todavía un guion final, pero sí tiene una **arquitectura argumentativa funcional**:

```txt
pregunta por el Yo
  → insuficiencia de respuestas superficiales
    → introducción del sermón
      → prueba de los agregados
        → invalidación de cada refugio identitario
          → aclaración anti-nihilista
            → liberación como desidentificación
```

La prioridad del siguiente paso debería ser **refinar el modelo argumentativo antes de reescribir el guion**. Especialmente estos tres nodos:

```txt
1. Control soberano, no simple modificación.
2. Saṅkhārā como hábitos, impulsos, intenciones y formaciones.
3. Viññāṇa como conciencia condicionada y fluctuante, no como atención pura.
```
