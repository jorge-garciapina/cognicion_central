https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a30403f-e5dc-83e8-a935-3487f76d2cb2

# Constructor de Plano Lógico-Argumentativo

## Cómo construir la estructura argumentativa de una idea antes de cualquier redacción

**Sistema superior:** MAANC — Modelo de Arquitectura Macro Narrativo-Cognitiva  
**Arquitectura de integración:** ACCD / TMC  
**Base teórica:** `modelo_analizador_argumentativo_maanc12.md`  
**Submódulo derivado:** `constructor_de_estructura_argumentativa`  
**Tipo:** procedimiento pre-redaccional  
**Función:** construir el plano lógico-argumentativo de una idea antes de producir texto literal.

---

# 0. Propósito del documento

Este documento define un procedimiento para **construir una estructura argumentativa antes de cualquier redacción**.

No busca generar un texto final.

No busca decidir voz, estilo, formato, codominio, párrafos, tono, guion, ensayo, carousel ni manifestación literal.

Su única función es esta:

```txt
idea / tema / postura inicial
  → plano lógico-argumentativo
```

El producto final debe ser una estructura abstracta pero operable, compuesta por:

```txt
tesis central
claims secundarios
grounds
warrants
backing
qualifiers
rebuttals
esquemas argumentativos
preguntas críticas
mapa argumentativo
arquitectura macro argumentativa
secciones argumentativas opcionales
validación del plano
```

Este procedimiento es una inversión controlada del `analizador_argumentativo`.

El analizador trabaja así:

```txt
texto existente
  → reconstrucción de su arquitectura argumentativa
```

El constructor trabaja así:

```txt
idea inicial
  → diseño de su arquitectura argumentativa
```

Ambos usan los mismos componentes internos. Cambia la dirección de operación.

---

# 1. Definición del submódulo

```txt
constructor_de_estructura_argumentativa =
procedimiento pre-redaccional que toma una idea, tema o postura inicial
 y la convierte en un plano lógico-argumentativo compuesto por tesis central,
claims secundarios, grounds, warrants, backing, qualifiers, rebuttals,
esquemas argumentativos, mapa de relaciones y arquitectura macro argumentativa.
```

La función del submódulo no es escribir.

Su función es responder:

```txt
¿Qué se quiere defender?
Qué afirmaciones secundarias sostienen esa defensa?
Qué soportes se necesitan?
Qué puentes inferenciales conectan soporte y tesis?
Qué respaldos estabilizan esos puentes?
Qué matices evitan exageración?
Qué objeciones deben anticiparse?
Qué arquitectura macro organiza el avance del argumento?
```

El resultado no es una manifestación discursiva.

El resultado es:

```txt
la estructura de justificación que hará posible una manifestación posterior.
```

---

# 2. Límites del submódulo

Este submódulo se detiene en el plano lógico-argumentativo.

Incluye:

```txt
1. Diseñar tesis central.
2. Diseñar mapa argumentativo.
3. Definir claims secundarios.
4. Asignar grounds, warrants, backing, qualifiers y rebuttals.
5. Elegir arquitectura macro argumentativa.
6. Opcionalmente, distribuir el argumento en secciones.
7. Opcionalmente, definir función argumentativa de cada sección.
```

No incluye:

```txt
redacción literal
voz
estilo
tono
párrafos
formato final
codominio
guion
carousel
ensayo
post
video
manifestación codominial
```

El límite operativo es:

```txt
estructura_argumentativa diseñada
```

No:

```txt
texto redactado
```

---

# 3. Relación con el `modelo_analizador_argumentativo_maanc12`

El `modelo_analizador_argumentativo_maanc12` define el módulo como herramienta para reconstruir cómo una manifestación defiende, justifica, matiza, refuta o transforma una posición dentro de su arquitectura macro.

El constructor conserva esa misma teoría, pero invierte su dirección.

## 3.1. Modo análisis

```txt
manifestación existente
  → claim
  → grounds
  → warrant
  → backing
  → qualifier
  → rebuttal
  → esquema argumentativo
  → mapa argumentativo
  → arquitectura macro detectada
```

## 3.2. Modo construcción

```txt
idea inicial
  → claim global diseñado
  → claims secundarios diseñados
  → grounds asignados
  → warrants construidos
  → backing previsto
  → qualifiers incorporados
  → rebuttals anticipados
  → esquemas argumentativos elegidos
  → mapa argumentativo diseñado
  → arquitectura macro argumentativa elegida
```

La estructura conceptual es la misma.

La diferencia es que el analizador detecta y el constructor diseña.

---

# 4. Entrada mínima del constructor

El constructor no necesita todavía un texto. Necesita una idea inicial.

Entrada mínima:

```yaml
entrada:
  tema:
  postura_inicial:
  objetivo_argumentativo:
```

Ejemplo:

```yaml
entrada:
  tema: negacion_activa_y_pasiva
  postura_inicial: >
    La negación pasiva no debe confundirse con la negación activa.
  objetivo_argumentativo: >
    Mostrar que esta distinción permite evitar errores lógicos,
    psicológicos e institucionales.
```

Esta entrada todavía no es una estructura argumentativa. Es el punto de partida.

---

# 5. Paso 1 — Diseñar tesis central

La tesis central es el **claim global**.

Debe ser una afirmación defendible, no un tema.

Tema:

```txt
la negación activa y pasiva
```

Tesis:

```txt
La distinción entre negación activa y negación pasiva es necesaria para evitar
confusiones entre ausencia, oposición, prohibición e indiferencia.
```

La tesis debe tener:

```yaml
tesis_central:
  claim_id:
  formulacion:
  tipo:
  centralidad:
  requiere_soporte:
  funcion_argumentativa:
```

Tipos posibles de claim, según el modelo base:

```txt
claim descriptivo
claim causal
claim normativo
claim definicional
claim clasificatorio
claim evaluativo
claim metodológico
claim interpretativo
claim pragmático
```

Ejemplo:

```yaml
tesis_central:
  claim_id: CL_GLOBAL
  formulacion: >
    La distinción entre negación activa y negación pasiva es necesaria para
    evitar confusiones entre ausencia, oposición, prohibición, indiferencia
    y rechazo, porque esas confusiones producen errores lógicos,
    psicológicos e institucionales.
  tipo: claim_definicional_interpretativo
  centralidad: tesis_global
  requiere_soporte: true
  funcion_argumentativa: instalar_la_distincion_como_herramienta_de_analisis
```

La tesis global debe ser lo suficientemente fuerte para requerir defensa, pero no tan absoluta que no pueda matizarse.

---

# 6. Paso 2 — Definir claims secundarios

Los claims secundarios son subtesis que sostienen la tesis global.

No son ejemplos sueltos.

No son notas temáticas.

Son afirmaciones funcionales conectadas con el claim global.

Formato:

```yaml
claims_secundarios:
  - claim_id:
    formulacion:
    tipo:
    nivel:
    soporta:
    funcion_argumentativa:
```

Ejemplo unificado:

```yaml
claims_secundarios:
  - claim_id: CL_01
    formulacion: >
      La ausencia de una creencia no equivale a la creencia activa en lo contrario.
    tipo: claim_definicional_logico
    nivel: subclaim
    soporta: CL_GLOBAL
    funcion_argumentativa: fundar_la_distincion_en_el_nivel_logico

  - claim_id: CL_02
    formulacion: >
      La ausencia de obligación no equivale a prohibición.
    tipo: claim_deontologico
    nivel: subclaim
    soporta: CL_GLOBAL
    funcion_argumentativa: extender_la_distincion_al_campo_normativo

  - claim_id: CL_03
    formulacion: >
      La ausencia de deseo no equivale al deseo activo de que algo no ocurra.
    tipo: claim_psicologico
    nivel: subclaim
    soporta: CL_GLOBAL
    funcion_argumentativa: extender_la_distincion_al_campo_de_los_estados_internos

  - claim_id: CL_04
    formulacion: >
      Cuando una institución confunde ausencia con oposición, transforma
      posiciones intermedias en sospecha, prohibición o enemistad.
    tipo: claim_institucional
    nivel: subclaim
    soporta: CL_GLOBAL
    funcion_argumentativa: mostrar_la_consecuencia_social_de_la_confusion

  - claim_id: CL_05
    formulacion: >
      Algunas negaciones activas pueden aparecer disfrazadas como negaciones
      pasivas, como ocurre con el silencio estratégico o la indiferencia organizada.
    tipo: claim_pragmatico_institucional
    nivel: subclaim
    soporta: CL_GLOBAL
    funcion_argumentativa: introducir_el_matiz_de_enmascaramiento

  - claim_id: CL_06
    formulacion: >
      La negación de una negación no siempre restaura el punto inicial; en procesos
      sociales puede reproducir, desplazar o deformar aquello que intenta superar.
    tipo: claim_dialectico
    nivel: subclaim
    soporta: CL_GLOBAL
    funcion_argumentativa: ampliar_la_distincion_hacia_procesos_historicos_o_institucionales
```

La prueba de calidad es simple:

```txt
Si un claim secundario no sostiene la tesis global,
no pertenece todavía al plano argumentativo.
```

---

# 7. Paso 3 — Asignar grounds

Los grounds son soportes.

Responden:

```txt
¿Qué sostiene este claim?
```

Tipos de grounds del modelo base:

```txt
ground empírico
ground ejemplificativo
ground narrativo
ground testimonial
ground conceptual
ground histórico
ground psicológico
ground pragmático
ground analógico
ground textual
```

Formato:

```yaml
grounds:
  - ground_id:
    formulacion:
    tipo:
    soporta:
    fuerza:
    dependencia_contextual:
```

Ejemplo conectado:

```yaml
grounds:
  - ground_id: GR_01
    tipo: ground_conceptual_logico
    formulacion: >
      Una persona puede no creer que p sin por ello creer que no-p.
    soporta: CL_01
    fuerza: alta
    dependencia_contextual: baja

  - ground_id: GR_02
    tipo: ground_deontologico
    formulacion: >
      Que una acción no sea obligatoria sólo significa que no hay deber positivo
      de realizarla; no significa que exista un deber de no realizarla.
    soporta: CL_02
    fuerza: alta
    dependencia_contextual: baja

  - ground_id: GR_03
    tipo: ground_psicologico
    formulacion: >
      Una persona puede no desear algo por indiferencia, falta de atención,
      suspensión o ausencia de orientación, sin desear activamente su desaparición.
    soporta: CL_03
    fuerza: media_alta
    dependencia_contextual: media

  - ground_id: GR_04
    tipo: ground_institucional
    formulacion: >
      Una institución puede tratar la falta de adhesión explícita como oposición,
      la falta de obligación como prohibición o el silencio como amenaza.
    soporta: CL_04
    fuerza: media
    dependencia_contextual: alta

  - ground_id: GR_05
    tipo: ground_pragmatico
    formulacion: >
      El silencio sistemático hacia un objeto conocido puede no ser indiferencia
      real, sino una forma de borramiento intencional.
    soporta: CL_05
    fuerza: media_alta
    dependencia_contextual: alta

  - ground_id: GR_06
    tipo: ground_dialectico
    formulacion: >
      En procesos sociales, una reforma puede negar una práctica anterior
      conservando sus mismos instrumentos, con lo cual reproduce parcialmente
      aquello que pretendía superar.
    soporta: CL_06
    fuerza: media
    dependencia_contextual: alta
```

Los grounds deben ser suficientes para dar contenido a los claims, pero todavía no deben redactarse como texto final.

---

# 8. Paso 4 — Construir warrants

El warrant es el puente entre ground y claim.

Responde:

```txt
¿Por qué este soporte permite sostener esta afirmación?
```

En el modelo base, el warrant es decisivo porque evita saltos inferenciales.

Formato:

```yaml
warrants:
  - warrant_id:
    formulacion:
    tipo:
    conecta:
      ground:
      claim:
    explicitud:
    vulnerabilidad:
```

Tipos de warrants del modelo base:

```txt
warrant causal
warrant pragmático
warrant psicológico
warrant ético
warrant analógico
warrant por autoridad
warrant por generalización
warrant definicional
warrant abductivo
warrant de modelaje ejemplar
```

Ejemplo conectado:

```yaml
warrants:
  - warrant_id: WA_01
    tipo: warrant_definicional
    formulacion: >
      La ausencia de una actitud proposicional no implica la presencia de la
      actitud proposicional contraria.
    conecta:
      ground: GR_01
      claim: CL_01
    explicitud: diseñado_como_necesario
    vulnerabilidad: baja

  - warrant_id: WA_02
    tipo: warrant_modal
    formulacion: >
      La posición de la negación respecto del operador normativo cambia el
      significado de la proposición.
    conecta:
      ground: GR_02
      claim: CL_02
    explicitud: diseñado_como_necesario
    vulnerabilidad: baja

  - warrant_id: WA_03
    tipo: warrant_psicologico
    formulacion: >
      Un estado mental ausente no debe interpretarse automáticamente como un
      estado mental contrario.
    conecta:
      ground: GR_03
      claim: CL_03
    explicitud: diseñado_como_necesario
    vulnerabilidad: media

  - warrant_id: WA_04
    tipo: warrant_pragmatico_institucional
    formulacion: >
      Cuando una institución elimina posiciones intermedias, produce falsos
      dilemas operativos y convierte la neutralidad en sospecha.
    conecta:
      ground: GR_04
      claim: CL_04
    explicitud: diseñado_como_necesario
    vulnerabilidad: media

  - warrant_id: WA_05
    tipo: warrant_de_enmascaramiento
    formulacion: >
      Si una ausencia es sistemática, selectiva y dirigida, puede funcionar como
      negación activa enmascarada.
    conecta:
      ground: GR_05
      claim: CL_05
    explicitud: diseñado_como_necesario
    vulnerabilidad: media

  - warrant_id: WA_06
    tipo: warrant_dialectico
    formulacion: >
      Negar una estructura no garantiza superarla si la negación conserva la
      forma operativa de la estructura negada.
    conecta:
      ground: GR_06
      claim: CL_06
    explicitud: diseñado_como_necesario
    vulnerabilidad: media_alta
```

El warrant es el componente que más conviene diseñar con cuidado. Un plano argumentativo puede tener buenos claims y grounds, pero seguir siendo débil si sus warrants son vagos.

---

# 9. Paso 5 — Asignar backing

El backing respalda el warrant.

No respalda directamente el claim. Respalda el puente que hace posible pasar del soporte a la afirmación.

Pregunta:

```txt
¿Qué principio, teoría, marco, autoridad, tradición o regularidad respalda este warrant?
```

Formato:

```yaml
backing:
  - backing_id:
    formulacion:
    tipo:
    respalda:
    alcance:
```

Ejemplo conectado:

```yaml
backing:
  - backing_id: BK_01
    tipo: respaldo_logico
    formulacion: >
      La diferencia entre no afirmar una proposición y afirmar su negación es
      una distinción básica para evitar falsas oposiciones.
    respalda: WA_01
    alcance: logico_conceptual

  - backing_id: BK_02
    tipo: respaldo_modal_deontologico
    formulacion: >
      En contextos normativos, permiso, obligación, no obligación y prohibición
      deben distinguirse porque producen campos de acción diferentes.
    respalda: WA_02
    alcance: tecnico_normativo

  - backing_id: BK_03
    tipo: respaldo_psicologico_conceptual
    formulacion: >
      Deseo, indiferencia, aversión, rechazo y falta de orientación son estados
      distintos, aunque superficialmente puedan confundirse.
    respalda: WA_03
    alcance: psicologico_conceptual

  - backing_id: BK_04
    tipo: respaldo_sociologico
    formulacion: >
      Los sistemas de poder pueden organizarse mediante reglas implícitas que
      transforman ausencia, silencio o no participación en signos de enemistad.
    respalda: WA_04
    alcance: institucional

  - backing_id: BK_05
    tipo: respaldo_pragmatico_institucional
    formulacion: >
      Las omisiones organizadas pueden operar como actos, aunque su forma visible
      sea la no intervención.
    respalda: WA_05
    alcance: pragmatico_institucional

  - backing_id: BK_06
    tipo: respaldo_historico_conceptual
    formulacion: >
      Los procesos institucionales no funcionan como simples operaciones formales:
      pueden producir retornos, desplazamientos, inversiones o reproducciones.
    respalda: WA_06
    alcance: historico_dialectico
```

---

# 10. Paso 6 — Diseñar qualifiers

Los qualifiers regulan alcance, fuerza, certeza, frecuencia o generalidad.

Impiden que la estructura argumentativa se vuelva excesiva.

Tipos de limitación:

```txt
alcance
certeza
frecuencia
intensidad
provisionalidad
generalidad
condición contextual
grado de aplicabilidad
```

Formato:

```yaml
qualifiers:
  - qualifier_id:
    formulacion:
    afecta:
    tipo_de_limitacion:
    efecto_sobre_fuerza:
```

Ejemplo conectado:

```yaml
qualifiers:
  - qualifier_id: QL_01
    formulacion: >
      La distinción entre negación activa y pasiva no explica toda forma de
      irracionalidad, pero sí una familia precisa de confusiones entre ausencia,
      oposición y prohibición.
    afecta: CL_GLOBAL
    tipo_de_limitacion: alcance
    efecto_sobre_fuerza: evita_sobregeneralizacion

  - qualifier_id: QL_02
    formulacion: >
      En contextos sociales, una ausencia puede funcionar pragmáticamente como
      oposición, pero eso debe demostrarse caso por caso.
    afecta:
      - CL_01
      - CL_04
    tipo_de_limitacion: condicion_contextual
    efecto_sobre_fuerza: reconoce_ambiguedad_pragmatica

  - qualifier_id: QL_03
    formulacion: >
      Algunas negaciones activas pueden aparecer como pasivas, por lo que el
      análisis debe distinguir forma visible, intención estructural y efecto.
    afecta: CL_05
    tipo_de_limitacion: refinamiento_analitico
    efecto_sobre_fuerza: evita_clasificacion_ingenua
```

Un plano sin qualifiers tiende a producir tesis demasiado rígidas.

---

# 11. Paso 7 — Diseñar rebuttals

Los rebuttals son objeciones, excepciones, contraejemplos, limitaciones o respuestas previstas.

En modo construcción, se anticipan antes de redactar.

Tipos del modelo base:

```txt
excepción
objeción directa
contraejemplo
limitación metodológica
matización
concesión
respuesta a objeción
desplazamiento
```

Formato:

```yaml
rebuttals:
  - rebuttal_id:
    formulacion:
    afecta:
    tipo:
    funcion:
    respuesta_prevista:
```

Ejemplo conectado:

```yaml
rebuttals:
  - rebuttal_id: RB_01
    tipo: objecion_directa
    formulacion: >
      En la práctica, no apoyar algo muchas veces equivale a oponerse.
    afecta: CL_01
    funcion: cuestionar_la_separacion_entre_ausencia_y_oposicion
    respuesta_prevista: >
      Puede equivaler pragmáticamente, pero no conceptualmente. El análisis debe
      explicar cuándo y por qué una ausencia adquiere valor de oposición.

  - rebuttal_id: RB_02
    tipo: objecion_de_aplicabilidad
    formulacion: >
      La distinción es clara en lógica, pero demasiado abstracta para instituciones reales.
    afecta: CL_04
    funcion: limitar_extension_interdominio
    respuesta_prevista: >
      Precisamente en instituciones reales conviene separar forma normativa,
      intención práctica y efecto social.

  - rebuttal_id: RB_03
    tipo: contraejemplo
    formulacion: >
      El silencio puede ser una forma activa de rechazo, no una simple negación pasiva.
    afecta: CL_GLOBAL
    funcion: mostrar_casos_mixtos
    respuesta_prevista: >
      Ese caso confirma la necesidad de la distinción, porque obliga a reconocer
      una categoría especial: negación activa enmascarada como pasividad.

  - rebuttal_id: RB_04
    tipo: objecion_dialectica
    formulacion: >
      Si se niega una negación, debería restaurarse la afirmación inicial.
    afecta: CL_06
    funcion: cuestionar_extension_dialectica
    respuesta_prevista: >
      Eso puede valer en ciertos sistemas formales, pero no necesariamente en
      procesos sociales, donde la negación puede conservar la forma de lo negado.
```

Los rebuttals no son adornos. Son parte estructural de la fuerza del argumento.

---

# 12. Paso 8 — Elegir esquemas argumentativos

Los esquemas argumentativos indican qué tipo de razonamiento organiza el plano.

El modelo base incluye, entre otros:

```txt
argumento por ejemplo
argumento por acumulación de ejemplos
argumento por autoridad
argumento causal
argumento pragmático
argumento por analogía
argumento por modelo ejemplar
argumento emocional-controlado
argumento por contraste
argumento abductivo
```

Para el constructor, cada esquema debe cumplir una función.

Formato:

```yaml
esquemas_argumentativos:
  - scheme_id:
    tipo:
    argumentos_asociados:
    funcion:
    preguntas_criticas:
```

Ejemplo:

```yaml
esquemas_argumentativos:
  - scheme_id: SCH_01
    tipo: argumento_por_distincion_conceptual
    argumentos_asociados:
      - CL_01
      - CL_02
      - CL_03
    funcion: separar_fenomenos_confundidos
    preguntas_criticas:
      - ¿La distinción produce consecuencias analíticas reales?
      - ¿Hay casos donde las categorías se mezclan?
      - ¿Qué gana el análisis al separar ausencia y contrario?

  - scheme_id: SCH_02
    tipo: argumento_por_acumulacion_de_dominios
    argumentos_asociados:
      - CL_01
      - CL_02
      - CL_03
      - CL_04
    funcion: mostrar_que_la_distincion_no_es_local
    preguntas_criticas:
      - ¿Los dominios son realmente comparables?
      - ¿La misma estructura se conserva en todos?
      - ¿El argumento se fortalece por acumulación o sólo se dispersa?

  - scheme_id: SCH_03
    tipo: argumento_por_contraste
    argumentos_asociados:
      - CL_01
      - CL_02
      - CL_03
    funcion: contrastar_ausencia_y_contrario
    preguntas_criticas:
      - ¿El contraste deja fuera casos intermedios?
      - ¿El contraste es definicional o pragmático?

  - scheme_id: SCH_04
    tipo: argumento_pragmatico
    argumentos_asociados:
      - CL_04
      - CL_05
    funcion: mostrar_consecuencias_institucionales_de_la_confusion
    preguntas_criticas:
      - ¿La consecuencia institucional está suficientemente conectada con la confusión conceptual?
      - ¿La institución actúa como agente o como patrón de reglas?
```

---

# 13. Paso 9 — Construir mapa argumentativo

El mapa argumentativo organiza la estructura como grafo.

No debe ser una lista plana.

Formato:

```yaml
mapa_argumentativo:
  nodos:
    - node_id:
      tipo:
      contenido:
  aristas:
    - edge_id:
      source:
      target:
      tipo:
      funcion:
```

Tipos de nodos:

```txt
claim
ground
warrant
backing
qualifier
rebuttal
scheme
critical_question
```

Tipos de aristas:

```txt
soporta
justifica
conecta
respalda
limita
objeta
responde
matiza
deriva
```

Mapa simplificado del ejemplo:

```txt
CL_GLOBAL
│
├── CL_01: ausencia de creencia ≠ creencia contraria
│   ├── GR_01
│   ├── WA_01
│   └── BK_01
│
├── CL_02: no obligación ≠ prohibición
│   ├── GR_02
│   ├── WA_02
│   └── BK_02
│
├── CL_03: no deseo ≠ deseo de ausencia
│   ├── GR_03
│   ├── WA_03
│   └── BK_03
│
├── CL_04: confusión institucional → falsa oposición
│   ├── GR_04
│   ├── WA_04
│   └── BK_04
│
├── CL_05: negación activa puede enmascararse como pasiva
│   ├── GR_05
│   ├── WA_05
│   └── BK_05
│
├── CL_06: doble negación social no garantiza restauración
│   ├── GR_06
│   ├── WA_06
│   └── BK_06
│
├── QL_01: no explica toda irracionalidad
├── QL_02: hay efectos pragmáticos contextuales
├── QL_03: hay pasividades aparentes
│
├── RB_01: no apoyar puede equivaler a oponerse
├── RB_02: distinción demasiado abstracta para instituciones
├── RB_03: silencio como rechazo activo
└── RB_04: doble negación debería restaurar afirmación
```

Este es el plano de relaciones. Todavía no es redacción.

---

# 14. Paso 10 — Elegir arquitectura macro argumentativa

La arquitectura macro argumentativa organiza la trayectoria del argumento.

No decide párrafos ni estilo.

Decide:

```txt
por dónde entra el argumento,
qué movimiento realiza,
qué objeciones integra,
y dónde estabiliza su tesis.
```

El modelo base incluye arquitecturas como:

```txt
tesis → soporte → cierre
problema → tesis → justificación
tesis → objeción → respuesta
evidencia → inferencia → tesis
tesis rival → refutación → tesis propia
concesión → distinción → tesis refinada
caso → principio → aplicación
acumulación de casos → regularidad → prescripción
error común → consecuencia negativa → alternativa superior
modelo negativo → modelo positivo → regla de conducta
```

Una misma estructura argumentativa puede organizarse en varias arquitecturas macro.

El contenido argumentativo permanece, pero cambia la trayectoria.

---

# 15. Ejemplo unificado: una misma estructura en dos arquitecturas macro

A continuación se toma la estructura argumentativa ya construida sobre **negación activa y pasiva** y se distribuye en dos arquitecturas macro distintas.

La estructura base es la misma:

```txt
CL_GLOBAL
  sostenido por CL_01, CL_02, CL_03, CL_04, CL_05, CL_06
  con grounds GR_01-GR_06
  warrants WA_01-WA_06
  backing BK_01-BK_06
  qualifiers QL_01-QL_03
  rebuttals RB_01-RB_04
```

Lo que cambia es el recorrido macroargumentativo.

---

# 16. Arquitectura macro 1

## Error común → consecuencia negativa → alternativa superior

Esta arquitectura parte de una confusión inicial.

Sirve cuando el objetivo es mostrar que el lector probablemente opera con una distinción insuficiente y necesita una herramienta mejor.

Trayectoria:

```txt
error común
  → consecuencia negativa
    → distinción correctiva
      → aplicaciones
        → objeciones y refinamiento
          → tesis refinada
```

Distribución:

```yaml
arquitectura_macro_1:
  tipo: error_comun_consecuencia_negativa_alternativa_superior

  etapa_1:
    nombre_funcional: error_comun
    funcion_argumentativa: mostrar_la_confusion_que_vuelve_necesaria_la_distincion
    contenido:
      claim_dominante: CL_GLOBAL
      claims_secundarios:
        - CL_01
        - CL_02
      componentes:
        - GR_01
        - GR_02
        - WA_01
        - WA_02
    tesis_de_etapa: >
      Se suele confundir la ausencia de una creencia, obligación o posición
      con la afirmación activa de su contrario.

  etapa_2:
    nombre_funcional: consecuencia_negativa
    funcion_argumentativa: mostrar_que_la_confusion_no_es_inofensiva
    contenido:
      claim_dominante: CL_04
      componentes:
        - GR_04
        - WA_04
        - BK_04
    tesis_de_etapa: >
      Cuando esa confusión se vuelve institucional, elimina posiciones intermedias
      y convierte neutralidad, silencio o no adhesión en sospecha u oposición.

  etapa_3:
    nombre_funcional: distincion_correctiva
    funcion_argumentativa: introducir_la_diferencia_entre_negacion_pasiva_y_activa
    contenido:
      claim_dominante: CL_01
      claims_secundarios:
        - CL_02
        - CL_03
      componentes:
        - WA_01
        - WA_02
        - WA_03
        - BK_01
        - BK_02
        - BK_03
    tesis_de_etapa: >
      La distinción permite separar ausencia, contrario, prohibición, indiferencia
      y deseo negativo.

  etapa_4:
    nombre_funcional: aplicaciones_expansivas
    funcion_argumentativa: mostrar_que_la_distincion_funciona_en_varios_dominios
    contenido:
      claims_secundarios:
        - CL_02
        - CL_03
        - CL_04
        - CL_05
      componentes:
        - GR_02
        - GR_03
        - GR_04
        - GR_05
        - WA_02
        - WA_03
        - WA_04
        - WA_05
    tesis_de_etapa: >
      La distinción no sólo opera en lógica; también permite analizar normas,
      deseos, instituciones y silencios estratégicos.

  etapa_5:
    nombre_funcional: objeciones_y_refinamiento
    funcion_argumentativa: anticipar_casos_ambiguos_y_evitar_sobregeneralizacion
    contenido:
      qualifiers:
        - QL_01
        - QL_02
        - QL_03
      rebuttals:
        - RB_01
        - RB_02
        - RB_03
    tesis_de_etapa: >
      Algunas ausencias pueden funcionar pragmáticamente como oposición o como
      negación activa enmascarada; por eso hay que analizar forma, intención
      y efecto.

  etapa_6:
    nombre_funcional: tesis_refinada
    funcion_argumentativa: estabilizar_la_conclusion_argumentativa
    contenido:
      claim_dominante: CL_GLOBAL
      claim_de_extension:
        - CL_06
      componentes:
        - WA_GLOBAL
        - WA_06
        - BK_06
        - RB_04
    tesis_de_etapa: >
      La distinción entre negación activa y pasiva no es una sutileza formal:
      es una herramienta para analizar confusiones lógicas, psicológicas,
      institucionales e históricas.
```

Resultado estructural:

```txt
La argumentación empieza por el error.
Luego muestra por qué ese error importa.
Después introduce la distinción.
Luego la aplica.
Después la matiza.
Finalmente estabiliza una tesis refinada.
```

Esta arquitectura es útil cuando el plano argumentativo busca producir una **corrección cognitiva**.

---

# 17. Arquitectura macro 2

## Distinción → principio → aplicación → refinamiento

Esta arquitectura parte directamente de la distinción conceptual.

Sirve cuando el objetivo es construir una herramienta teórica desde el inicio.

Trayectoria:

```txt
distinción central
  → principio general
    → expansión por dominios
      → casos límite
        → objeciones
          → alcance final
```

Distribución:

```yaml
arquitectura_macro_2:
  tipo: distincion_principio_aplicacion_refinamiento

  etapa_1:
    nombre_funcional: distincion_central
    funcion_argumentativa: instalar_desde_el_inicio_la_diferencia_conceptual
    contenido:
      claim_dominante: CL_01
      componentes:
        - GR_01
        - WA_01
        - BK_01
    tesis_de_etapa: >
      No es lo mismo que una posición esté ausente a que exista una posición
      contraria.

  etapa_2:
    nombre_funcional: principio_general
    funcion_argumentativa: convertir_la_distincion_en_regla_de_analisis
    contenido:
      claim_dominante: CL_GLOBAL
      componentes:
        - WA_GLOBAL
        - QL_01
    tesis_de_etapa: >
      Siempre que una ausencia pueda confundirse con oposición, prohibición o
      rechazo, debe distinguirse entre negación pasiva y negación activa.

  etapa_3:
    nombre_funcional: expansion_logico_modal
    funcion_argumentativa: demostrar_que_el_principio_opera_en_creencias_y_normas
    contenido:
      claims_secundarios:
        - CL_01
        - CL_02
      componentes:
        - GR_01
        - GR_02
        - WA_01
        - WA_02
        - BK_01
        - BK_02
    tesis_de_etapa: >
      La distinción se verifica en creencias y normas: no creer no equivale a
      creer lo contrario; no obligación no equivale a prohibición.

  etapa_4:
    nombre_funcional: expansion_psicologica
    funcion_argumentativa: trasladar_el_principio_a_estados_internos
    contenido:
      claim_dominante: CL_03
      componentes:
        - GR_03
        - WA_03
        - BK_03
    tesis_de_etapa: >
      La ausencia de deseo, atención o compromiso no debe confundirse con deseo
      negativo, rechazo o contraintención.

  etapa_5:
    nombre_funcional: expansion_institucional
    funcion_argumentativa: mostrar_el_valor_del_principio_para_analizar_sistemas_sociales
    contenido:
      claims_secundarios:
        - CL_04
        - CL_05
      componentes:
        - GR_04
        - GR_05
        - WA_04
        - WA_05
        - BK_04
        - BK_05
    tesis_de_etapa: >
      Las instituciones pueden convertir ausencias en oposiciones, pero también
      pueden esconder negaciones activas bajo formas pasivas.

  etapa_6:
    nombre_funcional: casos_limite_y_objeciones
    funcion_argumentativa: probar_la_resistencia_del_principio_frente_a_objeciones
    contenido:
      qualifiers:
        - QL_02
        - QL_03
      rebuttals:
        - RB_01
        - RB_02
        - RB_03
    tesis_de_etapa: >
      Los casos donde la ausencia funciona como oposición no eliminan la distinción;
      exigen un análisis más fino entre forma visible, intención y efecto.

  etapa_7:
    nombre_funcional: extension_dialectica_y_alcance
    funcion_argumentativa: ampliar_el_principio_a_transformaciones_historicas_o_sociales
    contenido:
      claim_dominante: CL_06
      componentes:
        - GR_06
        - WA_06
        - BK_06
        - RB_04
    tesis_de_etapa: >
      Incluso la negación de una negación debe analizarse cuidadosamente, porque
      negar una estructura no garantiza superarla.

  etapa_8:
    nombre_funcional: alcance_final
    funcion_argumentativa: fijar_la_utilidad_exacta_de_la_distincion
    contenido:
      claim_dominante: CL_GLOBAL
      qualifier_dominante: QL_01
    tesis_de_etapa: >
      La distinción no explica toda irracionalidad, pero sí permite analizar una
      familia precisa de errores donde ausencia, oposición, prohibición e
      indiferencia se confunden.
```

Resultado estructural:

```txt
La argumentación empieza por la distinción.
Luego la convierte en principio.
Después la expande por dominios.
Luego introduce casos límite.
Finalmente define su alcance.
```

Esta arquitectura es útil cuando el plano argumentativo busca producir una **construcción teórica progresiva**.

---

# 18. Comparación de las dos arquitecturas macro

Las dos arquitecturas usan la misma estructura argumentativa base.

Lo que cambia es el recorrido.

```yaml
comparacion:
  arquitectura_1:
    nombre: error_comun_consecuencia_negativa_alternativa_superior
    punto_de_partida: confusion_del_receptor
    movimiento: correccion
    fuerza: pedagogica_critica
    riesgo: depender_demasiado_del_error_inicial

  arquitectura_2:
    nombre: distincion_principio_aplicacion_refinamiento
    punto_de_partida: concepto_central
    movimiento: expansion
    fuerza: teorica_sistematica
    riesgo: ser_mas_abstracta_al_inicio
```

La diferencia puede resumirse así:

```txt
Arquitectura 1:
  primero muestra que hay un error.
  Después introduce la herramienta que lo corrige.

Arquitectura 2:
  primero introduce la herramienta.
  Después muestra sus campos de aplicación y límites.
```

---

# 19. Estructura YAML final del constructor

Esta es la salida general que debería producir el submódulo.

```yaml
constructor_de_estructura_argumentativa:
  identidad:
    tema:
    objetivo_argumentativo:
    modo: diseño_pre_redaccional

  tesis_central:
    claim_id:
    formulacion:
    tipo:
    centralidad:
    requiere_soporte:
    funcion_argumentativa:

  claims_secundarios:
    - claim_id:
      formulacion:
      tipo:
      nivel:
      soporta:
      funcion_argumentativa:

  grounds:
    - ground_id:
      formulacion:
      tipo:
      soporta:
      fuerza:
      dependencia_contextual:

  warrants:
    - warrant_id:
      formulacion:
      tipo:
      conecta:
        ground:
        claim:
      explicitud:
      vulnerabilidad:

  backing:
    - backing_id:
      formulacion:
      tipo:
      respalda:
      alcance:

  qualifiers:
    - qualifier_id:
      formulacion:
      afecta:
      tipo_de_limitacion:
      efecto_sobre_fuerza:

  rebuttals:
    - rebuttal_id:
      formulacion:
      afecta:
      tipo:
      funcion:
      respuesta_prevista:

  esquemas_argumentativos:
    - scheme_id:
      tipo:
      argumentos_asociados:
      funcion:
      preguntas_criticas:

  mapa_argumentativo:
    nodos:
      - node_id:
        tipo:
        contenido:
    aristas:
      - edge_id:
        source:
        target:
        tipo:
        funcion:

  arquitectura_macro_argumentativa:
    tipo:
    trayectoria:
      - etapa_id:
        nombre_funcional:
        funcion_argumentativa:
        contenido:
        tesis_de_etapa:

  secciones_argumentativas_opcionales:
    - section_id:
      nombre_funcional:
      responsabilidad_argumentativa:
      claims_dominantes:
      componentes:

  validacion:
    claims_sin_ground:
    grounds_sin_warrant:
    warrants_sin_backing:
    claims_sin_qualifier:
    objeciones_no_previstas:
    saltos_inferenciales:
    coherencia_global:
```

---

# 20. Validación del plano lógico-argumentativo

Antes de usar el plano para redactar, debe validarse.

Checklist:

```txt
[ ] La tesis central es una afirmación defendible, no un tema.
[ ] Cada claim secundario sostiene la tesis global.
[ ] Cada claim importante tiene al menos un ground.
[ ] Cada ground está conectado por un warrant.
[ ] Los warrants centrales tienen backing.
[ ] Hay qualifiers para evitar sobregeneralización.
[ ] Hay rebuttals para objeciones previsibles.
[ ] Los esquemas argumentativos están identificados.
[ ] Las preguntas críticas revelan vulnerabilidades.
[ ] El mapa argumentativo no es una lista plana.
[ ] La arquitectura macro argumentativa tiene trayectoria.
[ ] Las secciones argumentativas, si existen, tienen responsabilidad clara.
[ ] No hay salto de soporte a conclusión sin puente.
[ ] El plano se detiene antes de la redacción literal.
```

---

# 21. Errores frecuentes

## 21.1. Confundir tema con tesis

Incorrecto:

```txt
Tema: la negación activa y pasiva.
```

Correcto:

```txt
Tesis: la distinción entre negación activa y pasiva es necesaria para evitar
confusiones entre ausencia y oposición.
```

## 21.2. Confundir claims con ejemplos

Un ejemplo no es un claim.

Un claim afirma algo defendible.

Un ejemplo puede sostenerlo.

## 21.3. Usar grounds sin warrants

Esto produce saltos inferenciales.

```txt
Ground: una persona puede no creer p.
Claim: no creer p no equivale a creer no-p.
```

El warrant necesario es:

```txt
La ausencia de una actitud proposicional no implica la actitud contraria.
```

## 21.4. No incluir qualifiers

Sin qualifiers, el argumento tiende a sobregeneralizar.

## 21.5. Tratar rebuttals como añadidos finales

Los rebuttals deben estar integrados desde el plano.

## 21.6. Elegir arquitectura macro demasiado tarde

La arquitectura macro no debe aparecer al final como ornamentación. Debe organizar la trayectoria del argumento.

## 21.7. Redactar antes de cerrar el plano

Este submódulo no debe saltar a frases finales, estilo o párrafos.

Primero se construye la estructura.

---

# 22. Fórmula final

La fórmula operativa del submódulo es:

```txt
idea_inicial
  → tesis_central
    → claims_secundarios
      → grounds
        → warrants
          → backing
            → qualifiers
              → rebuttals
                → esquemas_argumentativos
                  → mapa_argumentativo
                    → arquitectura_macro_argumentativa
```

El producto final es:

```txt
plano_lógico_argumentativo
```

No:

```txt
texto_literal
```

Definición final:

```txt
Construir el plano lógico-argumentativo de una idea antes de cualquier redacción
significa diseñar la estructura de justificación que hará defendible esa idea:
qué tesis sostiene, qué subtesis la apoyan, qué soportes usa, qué warrants
conectan esos soportes con las conclusiones, qué backing respalda los warrants,
qué qualifiers regulan el alcance, qué rebuttals anticipan objeciones y qué
arquitectura macro organiza la trayectoria completa del argumento.
```
