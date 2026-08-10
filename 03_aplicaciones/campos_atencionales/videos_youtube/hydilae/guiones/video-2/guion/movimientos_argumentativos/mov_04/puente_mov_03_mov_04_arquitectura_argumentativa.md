# Arquitectura argumentativa — Puente entre MOV_03 y MOV_04

## 0. Identidad del movimiento

```yaml
movimiento:
  id: PUENTE_MOV_03_MOV_04
  nombre: reenfoque_del_juego_hacia_el_artefacto_intermedio
  tipo:
    - transicion_macro
    - cambio_de_foco_argumentativo
    - preparacion_de_refinamiento
  funcion_narrativo_cognitiva: >
    Conducir al espectador desde la comprensión del juego estratégico Barnum
    hacia el análisis específico del mensaje_barnum como pieza crítica del sistema.
```

## 1. Rol dentro de la arquitectura total

```txt
MOV_01:
  puente narrativo de entrada al mecanismo

MOV_02:
  comprensión de las partes internas del mecanismo

MOV_03:
  comprensión de la aplicación del mecanismo como juego:
    emisor → mensaje_barnum → receptor → validación / descarte

PUENTE_MOV_03_MOV_04:
  cambio de foco:
    del juego completo
    al artefacto intermedio que decide si el juego puede funcionar

MOV_04:
  condiciones de validación de la frase

MOV_05:
  forma interna de la frase
```

## 2. Claim dominante

```yaml
claim_dominante:
  id: CL_PUENTE_01
  formulacion: >
    Una vez entendido el juego Barnum, el siguiente problema argumentativo
    consiste en aislar el mensaje_barnum como artefacto intermedio, porque
    de su condición de validación y de su forma interna depende que el receptor
    lo procese como significativo o lo descarte como una descripción vaga.
  tipo: claim_metodologico_arquitectonico
  funcion: >
    Justificar el paso desde la estructura estratégica del juego hacia el
    análisis técnico de la frase.
```

## 3. Grounds

```yaml
grounds:
  - id: GR_PUENTE_01
    tipo: ground_estructural
    contenido: >
      MOV_03 ya separó los componentes del juego: emisor, receptor, mensaje,
      operación de validación y salida.

  - id: GR_PUENTE_02
    tipo: ground_funcional
    contenido: >
      El mensaje_barnum es la pieza que conecta la intención del emisor con
      la interpretación del receptor.

  - id: GR_PUENTE_03
    tipo: ground_de_continuidad
    contenido: >
      Las salidas del juego —reconocimiento o no reconocimiento— dependen
      de cómo el receptor procese el mensaje.
```

## 4. Warrant

```yaml
warrant:
  id: WA_PUENTE_01
  formulacion: >
    Si un sistema estratégico depende de un artefacto intermedio para producir
    su salida, entonces el siguiente movimiento debe explicar bajo qué condiciones
    ese artefacto puede operar.
  tipo: warrant_arquitectonico
```

## 5. Backing

```yaml
backing:
  id: BK_PUENTE_01
  formulacion: >
    En la arquitectura ya construida, el mensaje_barnum no es una frase aislada:
    es el punto de contacto entre el diseño del emisor y la interpretación
    autobiográfica del receptor.
```

## 6. Operación argumentativa

```yaml
operacion_argumentativa:
  entrada: >
    El espectador entiende el juego Barnum como interacción estratégica.

  operacion: >
    Reubicar el foco explicativo sobre el mensaje_barnum, sin escribir todavía
    la frase ni desarrollar aplicaciones externas.

  salida: >
    El espectador queda preparado para comprender dos refinamientos:
    primero, qué hace que la frase sea tomada como válida; segundo, qué forma
    debe tener para permitir completado autobiográfico.
```

## 7. Pregunta que abre

```txt
Ya entendido el juego, la pregunta no es todavía:
  ¿cómo se aplica en publicidad, venta o política?

La pregunta inmediata es:
  ¿qué debe tener el mensaje_barnum para que pueda producir reconocimiento?
```

## 8. Conexión con los movimientos siguientes

```yaml
conexiones:
  hacia_MOV_04:
    funcion: >
      Abrir el análisis de las condiciones externas o escénicas que permiten
      que la frase sea validada.

  hacia_MOV_05:
    funcion: >
      Preparar el análisis de la forma interna de la frase: alta aplicabilidad,
      tensión común, ambigüedad y aprovechamiento del contexto.
```
