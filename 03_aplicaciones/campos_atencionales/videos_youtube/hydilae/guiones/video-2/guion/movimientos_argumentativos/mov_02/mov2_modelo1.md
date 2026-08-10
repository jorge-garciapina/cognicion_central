```yaml
claims_MOV_02:
  - claim_id: CL_05
    nombre: principio_general_del_barnum
    formulacion: >
      El efecto Barnum no funciona porque la descripción sea realmente precisa,
      sino porque una descripción amplia y ambigua activa asociaciones personales
      que el receptor usa para completarla.
    tipo: claim_causal_interpretativo
    funcion_macro: fijar_el_principio_general

  - claim_id: CL_06
    nombre: alta_aplicabilidad
    formulacion: >
      La frase Barnum debe ser lo suficientemente general para poder aplicarse
      a muchas personas, pero lo suficientemente emocional o existencial para
      sentirse relevante.
    tipo: claim_definicional_funcional
    funcion_macro: identificar_la_primera_capa_del_mecanismo

  - claim_id: CL_07
    nombre: ambiguedad_como_espacio_de_completado
    formulacion: >
      La ambigüedad no es un defecto accidental del mensaje, sino el espacio
      que permite al receptor introducir su propia historia.
    tipo: claim_causal_interpretativo
    funcion_macro: explicar_por_que_el_mensaje_no_necesita_ser_preciso

  - claim_id: CL_08
    nombre: autoridad_aparente
    formulacion: >
      La sensación de precisión aumenta cuando la descripción parece venir de
      un método, una lectura, un test, un diagnóstico, un algoritmo o una autoridad.
    tipo: claim_causal
    funcion_macro: explicar_el_marco_de_credibilidad_del_mensaje

  - claim_id: CL_09
    nombre: completado_autobiografico
    formulacion: >
      El receptor completa los huecos de la descripción con recuerdos, deseos,
      inseguridades y tensiones propias.
    tipo: claim_psicologico
    funcion_macro: ubicar_la_operacion_cognitiva_del_receptor

  - claim_id: CL_10
    nombre: confusion_resonancia_precision
    formulacion: >
      El error central ocurre cuando el receptor confunde la resonancia subjetiva
      producida por sus propias asociaciones con precisión diagnóstica del mensaje.
    tipo: claim_definicional_interpretativo
    funcion_macro: fijar_la_distincion_central_del_movimiento
```

```yaml
grounds_MOV_02:
  - ground_id: GR_06
    formulacion: >
      En el caso de Persona X, la tarotista no aporta información verificable
      sobre su vida concreta; aporta una frase abierta que Persona X conecta
      con su situación personal.
    tipo: ground_textual_narrativo
    soporta:
      - CL_05
      - CL_09
    fuerza: >
      Reutiliza el caso ya instalado para extraer el principio general.

  - ground_id: GR_07
    formulacion: >
      La frase Barnum contiene conceptos amplios como duda, bloqueo, potencial,
      sufrimiento, necesidad de cambio o tensión interior, que pueden conectarse
      con muchas experiencias distintas.
    tipo: ground_conceptual
    soporta:
      - CL_06
      - CL_07
    fuerza: >
      Muestra por qué la alta aplicabilidad permite múltiples rutas de identificación.

  - ground_id: GR_08
    formulacion: >
      La situación de lectura de tarot crea un marco de autoridad simbólica:
      Persona X no escucha la frase como comentario casual, sino como resultado
      de una supuesta capacidad interpretativa.
    tipo: ground_psicologico_contextual
    soporta:
      - CL_08
    fuerza: >
      Explica por qué el mensaje se recibe como diagnóstico y no como frase genérica.

  - ground_id: GR_09
    formulacion: >
      Persona X interpreta la frase desde su situación económica, afectiva,
      laboral y familiar, de modo que el contenido aparentemente preciso surge
      de las asociaciones que ella misma activa.
    tipo: ground_psicologico
    soporta:
      - CL_09
      - CL_10
    fuerza: >
      Ubica el completado autobiográfico como operación central del receptor.
```

```yaml
warrant:
  warrant_id: WR_04
  formulacion: >
    Si una descripción no contiene información específica suficiente, pero aun
    así se siente personalmente precisa, entonces la precisión sentida debe
    explicarse por la interacción entre la apertura del mensaje y el completado
    interpretativo del receptor.
  tipo: warrant_abductivo_causal
  explicitud: explícito
  conecta:
    grounds:
      - GR_06
      - GR_07
      - GR_09
    claim: CL_05

warrants_MOV_02:
  - warrant_id: WR_05
    formulacion: >
      Si una frase contiene conceptos suficientemente generales, entonces puede
      funcionar como nodo superior bajo el cual muchas experiencias personales
      pueden ser reconocidas.
    tipo: warrant_causal_conceptual
    conecta:
      grounds:
        - GR_07
      claim: CL_06

  - warrant_id: WR_06
    formulacion: >
      Si el contexto de emisión presenta la frase como lectura, método o diagnóstico,
      entonces el receptor tiende a interpretarla como información dirigida a él,
      no como frase genérica.
    tipo: warrant_psicologico_contextual
    conecta:
      grounds:
        - GR_08
      claim: CL_08

  - warrant_id: WR_07
    formulacion: >
      Que una frase produzca reconocimiento subjetivo no implica que contenga
      precisión diagnóstica objetiva.
    tipo: warrant_epistemico
    conecta:
      grounds:
        - GR_09
      claim: CL_10
```

```yaml
backing:
  backing_id: BK_02
  formulacion: >
    El modelo psicológico del efecto Barnum describe una secuencia en la que
    una descripción general, ambigua y de alta aplicabilidad es aceptada como
    personalmente precisa cuando el receptor la interpreta de forma
    autorreferencial y la completa con su propia experiencia.
  tipo: backing_teorico_psicologico
  respalda:
    - WR_04
    - WR_05
    - WR_07
  alcance: >
    Respalda la explicación general del mecanismo, sin afirmar todavía que
    todas sus aplicaciones sean equivalentes entre sí.
```

```yaml
qualifier:
  qualifier_id: QL_01
  formulacion: >
    El efecto Barnum no implica que toda identificación personal sea falsa,
    sino que la sensación de identificación no basta por sí sola para demostrar
    precisión diagnóstica.
  afecta:
    - CL_05
    - CL_10
  tipo_de_limitacion: limite_epistemico
  efecto_sobre_fuerza: >
    Evita que el argumento se convierta en la afirmación exagerada de que
    toda resonancia subjetiva es engañosa.
```

```yaml
rebuttal:
  rebuttal_id: RB_01
  formulacion: >
    Una persona podría objetar que una frase general puede ser útil aunque no
    sea diagnósticamente precisa, porque ayuda a ordenar una experiencia real.
  afecta:
    - CL_10
  tipo: objecion_de_utilidad_pragmatica
  funcion: >
    Preparar la distinción entre utilidad subjetiva y precisión diagnóstica.
```

```yaml
MOV_02
│
├── CL_05: el Barnum funciona por completado interpretativo, no por precisión real
│   ├── GR_06: Persona X recibe una frase abierta, no información verificable
│   ├── GR_07: la frase contiene conceptos amplios
│   ├── GR_09: Persona X conecta la frase con su historia
│   └── WR_04: si no hay información específica, la precisión sentida se explica
│              por completado del receptor
│
├── CL_06: la alta aplicabilidad permite reconocimiento amplio
│   ├── GR_07
│   └── WR_05
│
├── CL_07: la ambigüedad abre espacio de completado
│   ├── GR_06
│   └── WR_04
│
├── CL_08: la autoridad aparente transforma frase genérica en supuesto diagnóstico
│   ├── GR_08
│   └── WR_06
│
├── CL_09: el receptor completa autobiográficamente el mensaje
│   ├── GR_09
│   └── WR_04
│
├── CL_10: resonancia subjetiva no equivale a precisión diagnóstica
│   ├── GR_09
│   ├── WR_07
│   ├── QL_01
│   ├── RB_01
│   └── RP_01
│
└── BK_02: modelo psicológico general del efecto Barnum
```

```yaml

```
