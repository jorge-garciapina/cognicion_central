https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a091e2f-59d0-83e8-bd4a-8d374306b8ad

# Modelo de Composición Cognitiva

**Nombre del modelo:** Modelo de Composición Cognitiva sobre Banco Transcontextual de mNodes  
**Tipo:** modelo transversal para construcción conceptual  
**Función:** convertir mNodes extraídos de uno o varios procesamientos estructurales en construcciones conceptuales nuevas, trazables, validables y transferibles.

---

## 1. Idea central

La construcción conceptual no debe entenderse como una simple lista de ideas ni como un grafo improvisado. Debe entenderse como el resultado de una **composición validada de mNodes trazables**.

La fórmula central es:

```txt
Construcción Conceptual =
composición validada de mNodes trazables,
extraídos de uno o varios procesamientos estructurales,
organizados bajo una pregunta o núcleo composicional,
con relaciones nuevas,
invariantes globales
y superficie de transferencia.
```

De forma compacta:

```txt
CCN = composición_validada(Banco_mNodes, Pregunta_organizadora, Criterio_de_composición)
```

Donde:

```txt
CCN = construcción conceptual normalizada
```

---

## 2. Cambio arquitectónico principal

El modelo anterior podía entenderse de forma lineal:

```txt
texto crudo
  → procesamiento estructural
    → construcción conceptual
```

Pero esta cadena es insuficiente, porque el procesamiento estructural no produce necesariamente una sola construcción conceptual. Más bien produce **materia prima cognitiva reutilizable**.

El modelo actualizado es:

```txt
texto crudo
  → procesamiento estructural
    → banco de mNodes extraídos
      → composición cognitiva
        → una o varias construcciones conceptuales
```

Y si existen varios textos:

```txt
Texto A
  → Procesamiento Estructural A
    → mNodes A

Texto B
  → Procesamiento Estructural B
    → mNodes B

Texto C
  → Procesamiento Estructural C
    → mNodes C

mNodes A + mNodes B + mNodes C
  → Composición Cognitiva
    → Construcción Conceptual Nueva
```

Esto significa que la construcción conceptual no tiene que estar limitada a un solo texto fuente. Puede tomar mNodes de distintos procesamientos estructurales y componerlos bajo una nueva pregunta organizadora.

---

## 3. Definición de composición cognitiva

La **composición cognitiva** es la operación mediante la cual mNodes trazables, extraídos de uno o varios procesamientos estructurales, son seleccionados, alineados, articulados y sintetizados bajo una pregunta organizadora para producir una construcción conceptual nueva, validada y transferible.

No es una suma de ideas.

No es esto:

```txt
idea A + idea B + idea C = construcción conceptual
```

Sino esto:

```txt
mNode A cumple función de fundamento
mNode B cumple función de caso aplicado
mNode C cumple función de mecanismo explicativo
mNode D cumple función de consecuencia

A fundamenta B
B prepara C
C explica D
A + B + C + D forman un núcleo conceptual nuevo
```

La composición cognitiva puede formularse así:

```txt
composición cognitiva =
selección de mNodes
+ alineación de invariantes
+ evaluación de compatibilidad
+ articulación relacional
+ resolución de tensiones
+ síntesis nuclear
+ validación compositiva
+ estabilización de la construcción resultante
```

---

## 4. Diferencia entre procesamiento estructural y construcción conceptual

### 4.1 Procesamiento estructural

El procesamiento estructural mira hacia el texto fuente.

Pregunta:

```txt
¿Qué estructuras cognitivas están contenidas en este texto?
```

Produce:

```txt
mNodes extraídos
moldes
familias cognitivas
roles operativos
inferencias locales
casos
modelos positivos
cierres afectivos
relaciones básicas
estructuras metodológicas
estructuras de razonamiento
estructuras de diseño
```

Ejemplo:

```yaml
mnode_id: MN_BASE_ANTROPOLOGICA
fuente: Carnegie_cap_1
estatus_de_extraccion: textual_implicito / inferencia_local
familia_cognitiva: FAM-Idea
rol_operativo: establecer_base_antropologica
formulacion: "El ser humano no opera como agente puramente racional, sino como sujeto atravesado por emoción, orgullo, deseo de aprobación y defensa de la autoimagen."
```

### 4.2 Construcción conceptual

La construcción conceptual mira hacia el nuevo modelo que puede componerse.

Pregunta:

```txt
¿Qué construcción conceptual puedo formar combinando mNodes disponibles?
```

Produce:

```txt
núcleo conceptual
mNodes seleccionados
relaciones nuevas
invariantes globales
tesis resultante
modelo conceptual
superficie de transferencia
validación compositiva
```

Ejemplo:

```yaml
construccion_conceptual:
  id: CC_RACIONALIZACION_EMOCIONAL_CONSUMO
  mNodes_compuestos:
    - MN_BASE_ANTROPOLOGICA
    - MN_COMPRA_POR_EMOCION
    - MN_JUSTIFICACION_RACIONAL_POSTERIOR
    - MN_SIMBOLO_ACTIVA_DESEO
  tesis_resultante: "Muchas decisiones de consumo se forman afectivamente y luego se justifican racionalmente mediante lenguaje."
```

---

## 5. El procesamiento estructural como cantera cognitiva

El procesamiento estructural no debe verse solo como preparación para una construcción específica. Debe verse como una **cantera cognitiva**.

Un solo procesamiento estructural puede alimentar muchas construcciones conceptuales.

Por ejemplo, desde un procesamiento estructural del capítulo 1 de Carnegie podrían surgir varias construcciones:

```txt
Construcción 1:
  crítica produce defensa y resentimiento

Construcción 2:
  corrección sin humillación

Construcción 3:
  refuerzo positivo y modificación de conducta

Construcción 4:
  sujetos culpables y protección de autoimagen

Construcción 5:
  base antropológica emocional de la acción humana

Construcción 6:
  juego iterado de disposición relacional

Construcción 7:
  liderazgo como contención del juicio inmediato

Construcción 8:
  racionalización emocional de decisiones y consumo
```

La misma materia prima puede alimentar distintas construcciones porque cada construcción activa una pregunta organizadora distinta.

---

## 6. Banco Transcontextual de mNodes

La arquitectura requiere un repositorio intermedio:

```txt
Banco Transcontextual de mNodes
```

Este banco almacena mNodes extraídos de múltiples procesamientos estructurales.

```txt
procesamiento_estructural_Carnegie
  → mNodes_Carnegie

procesamiento_estructural_texto_marketing
  → mNodes_marketing

procesamiento_estructural_texto_psicologia
  → mNodes_psicologia

procesamiento_estructural_texto_identidad
  → mNodes_identidad
```

Luego, la construcción conceptual puede seleccionar desde todos:

```txt
mNodes_Carnegie
+ mNodes_marketing
+ mNodes_psicologia
+ mNodes_identidad
  → construcción conceptual nueva
```

Esto permite que el sistema deje de ser texto-céntrico y se vuelva composición-céntrico.

Antes:

```txt
un texto → una interpretación
```

Ahora:

```txt
muchos textos → banco de estructuras → muchas composiciones posibles
```

---

## 7. Estructura mínima de un mNode componible

Un mNode no debe ser solo una frase. Debe ser una unidad cognitiva con identidad, trazabilidad y condiciones de transferencia.

```yaml
mNode:
  mnode_id:
  formulacion:
  fuente:
  segmento_fuente:
  estatus_de_extraccion:
  familia_cognitiva:
  rol_operativo:
  invariantes:
  dominio_de_variacion:
  criterio_de_validacion:
  relaciones_originales:
  notas_de_transferibilidad:
```

### Componentes

#### `mnode_id`

Identificador estable del mNode.

#### `formulacion`

Forma textual condensada del mNode.

#### `fuente`

Documento, texto, conversación o material del que fue extraído.

#### `segmento_fuente`

Fragmento o región textual que sostiene la extracción.

#### `estatus_de_extraccion`

Indica el tipo de dependencia respecto de la fuente.

Valores posibles:

```txt
textual_explicito
textual_implicito
inferencia_local
molde_derivado
estructura_analitica_posterior
```

#### `familia_cognitiva`

Clasificación por modo operativo dominante.

Ejemplos:

```txt
FAM-Idea
FAM-Patrón-de-razonamiento
FAM-Diseño
FAM-Método
FAM-Plan
```

#### `rol_operativo`

Qué hace el mNode al operar sobre información.

Ejemplos:

```txt
definir
inferir
organizar
procedimentalizar
secuenciar
contrastar
sintetizar
aplicar
fundamentar
```

#### `invariantes`

Elementos que deben conservarse para que el mNode siga siendo el mismo.

#### `dominio_de_variacion`

Contextos o dominios en los que el mNode puede variar sin perder identidad.

#### `criterio_de_validacion`

Condición que permite decidir si una nueva formulación o uso sigue perteneciendo al mismo mNode.

#### `relaciones_originales`

Relaciones que el mNode tenía dentro de su procesamiento estructural original.

#### `notas_de_transferibilidad`

Indicaciones sobre cómo puede entrar en nuevas composiciones.

---

## 8. Pregunta organizadora

La composición cognitiva necesita una pregunta organizadora.

Sin pregunta organizadora, el banco de mNodes es demasiado amplio.

La pregunta organizadora funciona como campo gravitacional: atrae ciertos mNodes, excluye otros y orienta las relaciones posibles.

Ejemplo:

```yaml
pregunta_organizadora:
  formulacion: "¿Cómo se forman decisiones afectivas que luego son justificadas racionalmente?"
  tipo: explicativa
  dominio: conducta_humana / consumo / identidad
  funcion: seleccionar y orientar composición de mNodes
```

La pregunta organizadora cumple tres funciones:

```txt
1. selecciona mNodes relevantes;
2. define qué relaciones importan;
3. limita la síntesis final.
```

### Ejemplos

Pregunta:

```txt
¿Por qué la crítica no persuade?
```

Selecciona:

```txt
MN_CRITICA_PRODUCE_DEFENSA
MN_CRITICA_DAÑA_ORGULLO
MN_BASE_ANTROPOLOGICA
MN_NADIE_SE_CRITICA_A_SI_MISMO
```

Pregunta:

```txt
¿Por qué el consumidor justifica racionalmente una compra emocional?
```

Selecciona:

```txt
MN_BASE_ANTROPOLOGICA
MN_COMPRA_POR_EMOCION
MN_JUSTIFICACION_RACIONAL_POSTERIOR
MN_SIMBOLO_ACTIVA_DESEO
MN_CONSUMIDOR_PROTEGE_AUTOIMAGEN
```

Pregunta:

```txt
¿Cómo diseñar feedback laboral que no destruya disposición?
```

Selecciona:

```txt
MN_CRITICA_PRODUCE_DEFENSA
MET_CORREGIR_SIN_HUMILLAR
MN_REFUERZO_POSITIVO_MAS_EFICAZ
MODELO_JUEGO_DISPOSICION_RELACIONAL
```

---

## 9. Criterio de composición

La pregunta dice qué queremos construir.

El criterio de composición dice bajo qué lógica se combinarán los mNodes.

```yaml
criterio_de_composicion:
  tipo:
  prioridad:
  restricciones:
  resultado_esperado:
```

Tipos posibles:

```txt
composición explicativa
composición metodológica
composición contrastiva
composición diagnóstica
composición narrativa
composición aplicada
composición teórica
composición transferencial
```

### Ejemplo: criterio explicativo

```yaml
criterio_de_composicion:
  tipo: explicativo
  prioridad:
    - establecer causa o condición
    - mostrar mecanismo
    - evitar ejemplos anecdóticos como núcleo
    - conservar trazabilidad entre mNodes
  resultado_esperado: modelo explicativo
```

### Ejemplo: criterio metodológico

```yaml
criterio_de_composicion:
  tipo: metodologico
  prioridad:
    - extraer pasos
    - convertir distinciones en operaciones
    - producir secuencia aplicable
    - validar caso de uso
  resultado_esperado: método aplicable
```

### Ejemplo: criterio transferencial

```yaml
criterio_de_composicion:
  tipo: transferencial
  prioridad:
    - preservar núcleo conceptual
    - permitir uso en varias realizaciones
    - declarar variación legítima
    - evitar deformaciones por codominio
  resultado_esperado: construcción conceptual proyectable a realizaciones
```

---

## 10. Operaciones de composición cognitiva

La composición cognitiva puede dividirse en cinco operaciones principales:

```txt
1. selección
2. alineación
3. articulación
4. síntesis
5. validación
```

---

### 10.1 Selección

La selección responde:

```txt
¿Qué mNodes entran en esta construcción?
```

Criterios de selección:

```txt
1. relevancia para la pregunta organizadora;
2. compatibilidad con el núcleo buscado;
3. fuerza explicativa;
4. transferibilidad;
5. trazabilidad de fuente;
6. capacidad de relación con otros mNodes;
7. ausencia de contradicción fuerte no resuelta.
```

Ejemplo:

```yaml
seleccion:
  pregunta_organizadora: "¿Cómo se forman decisiones afectivas que luego son justificadas racionalmente?"
  mNodes_seleccionados:
    - MN_BASE_ANTROPOLOGICA
    - MN_COMPRA_POR_EMOCION
    - MN_JUSTIFICACION_RACIONAL_POSTERIOR
    - MN_SIMBOLO_ACTIVA_DESEO
    - MN_AUTOIMAGEN_DEL_CONSUMIDOR
  mNodes_excluidos:
    - MN_CARTAS_NO_ENVIADAS_MARK_TWAIN
  justificacion_exclusion:
    MN_CARTAS_NO_ENVIADAS_MARK_TWAIN: "Pertenece mejor a una construcción sobre contención emocional y no sobre racionalización de consumo."
```

---

### 10.2 Alineación

La alineación responde:

```txt
¿Estos mNodes pueden trabajar juntos?
```

La alineación busca compatibilidad entre invariantes, dominios, roles operativos y familias cognitivas.

Tipos de compatibilidad:

```txt
compatibilidad por soporte
compatibilidad por contraste
compatibilidad por aplicación
compatibilidad por analogía
compatibilidad por secuencia
compatibilidad por condición
compatibilidad por generalización
compatibilidad baja o inválida
```

Ejemplo:

```yaml
alineacion:
  mnode_a: MN_BASE_ANTROPOLOGICA
  mnode_b: MN_COMPRA_POR_EMOCION

  invariantes_compartidos:
    - accion_humana_no_puramente_racional
    - presencia_de_disposicion_afectiva
    - racionalidad_como_capa_no_siempre_originaria

  compatibilidad: alta
  tipo_de_compatibilidad: soporte
```

---

### 10.3 Articulación

La articulación responde:

```txt
¿Qué relación nueva se establece entre los mNodes?
```

La articulación crea el grafo compositivo.

Ejemplo:

```txt
MN_BASE_ANTROPOLOGICA
  fundamenta
MN_COMPRA_POR_EMOCION

MN_COMPRA_POR_EMOCION
  prepara
MN_JUSTIFICACION_RACIONAL_POSTERIOR

MN_JUSTIFICACION_RACIONAL_POSTERIOR
  protege
MN_AUTOIMAGEN_DEL_CONSUMIDOR
```

En formato estructurado:

```yaml
relaciones_compositivas:
  - origen: MN_BASE_ANTROPOLOGICA
    tipo: fundamenta
    destino: MN_COMPRA_POR_EMOCION
    descripcion: "La base antropológica emocional fundamenta que la compra pueda formarse afectivamente."

  - origen: MN_COMPRA_POR_EMOCION
    tipo: prepara
    destino: MN_JUSTIFICACION_RACIONAL_POSTERIOR
    descripcion: "La compra emocional crea la necesidad posterior de una razón que la haga defendible."

  - origen: MN_JUSTIFICACION_RACIONAL_POSTERIOR
    tipo: protege
    destino: MN_AUTOIMAGEN_DEL_CONSUMIDOR
    descripcion: "La justificación ayuda a conservar la autoimagen del consumidor como sujeto razonable."
```

---

### 10.4 Síntesis

La síntesis responde:

```txt
¿Qué construcción nueva emerge de esta composición?
```

No debe ser una frase decorativa. Debe condensar la estructura.

Ejemplo:

```yaml
sintesis:
  nucleo_composicional: "La racionalidad declarada puede funcionar como capa posterior que legitima decisiones formadas afectivamente."

  tesis_aplicada: "Muchas compras no nacen de una razón explícita, sino de una disposición afectiva activada por símbolos; la razón aparece después como justificación socialmente aceptable."

  invariantes_globales:
    - la acción humana no es puramente racional
    - la disposición afectiva puede preceder a la explicación
    - el lenguaje puede operar como justificación posterior
    - la justificación protege autoimagen o legitimidad social
```

---

### 10.5 Validación

La validación responde:

```txt
¿La composición es legítima?
```

Riesgos que debe controlar:

```txt
mezcla arbitraria
analogía superficial
sobregeneralización
contradicción no resuelta
pérdida de trazabilidad
uso de un mNode contra sus invariantes
conclusión más fuerte que lo que los mNodes soportan
```

Preguntas mínimas:

```txt
1. ¿Cada mNode conserva su identidad?
2. ¿La relación propuesta está justificada?
3. ¿Los invariantes son compatibles?
4. ¿La fuente de cada mNode queda trazada?
5. ¿Hay tensiones declaradas?
6. ¿La síntesis no exagera lo que los mNodes permiten afirmar?
7. ¿La construcción resultante tiene núcleo claro?
8. ¿Puede transferirse a más de una realización?
```

Ejemplo:

```yaml
validacion_compositiva:
  composicion: CC_DECISION_AFECTIVA_RACIONALIZADA

  mNodes:
    - MN_BASE_ANTROPOLOGICA
    - MN_COMPRA_POR_EMOCION
    - MN_JUSTIFICACION_RACIONAL_POSTERIOR

  compatibilidad:
    nivel: alta
    razon: "Los tres mNodes comparten la estructura afecto previo / racionalización posterior."

  tensiones:
    - tension: "El mNode de Carnegie se refiere a crítica interpersonal, no a consumo."
      resolucion: "Se usa como fundamento antropológico general, no como prueba directa del comportamiento de compra."

  trazabilidad:
    completa: true

  riesgo_de_sobregeneralizacion:
    nivel: medio
    control: "La construcción se formula como 'puede funcionar', no como 'siempre funciona'."

  decision:
    estado: composicion_valida
```

---

## 11. Tipos de relaciones compositivas

La composición cognitiva necesita una biblioteca de relaciones.

### `fundamenta`

Un mNode da base a otro.

```txt
MN_BASE_ANTROPOLOGICA fundamenta MN_COMPRA_POR_EMOCION
```

### `prepara`

Un mNode crea condiciones para otro.

```txt
MN_COMPRA_POR_EMOCION prepara MN_JUSTIFICACION_RACIONAL_POSTERIOR
```

### `explica`

Un mNode hace inteligible otro.

```txt
MN_DEFENSA_AUTOIMAGEN explica MN_CRITICA_PRODUCE_DEFENSA
```

### `contrasta_con`

Un mNode se opone a otro y permite construir una distinción.

```txt
MN_CASTIGO_DIRECTO contrasta_con MN_REFUERZO_POSITIVO
```

### `generaliza`

Varios mNodes producen una regla o molde.

```txt
HISTORIA_CROWLEY + HISTORIA_CAPONE + HISTORIA_SCHULTZ generalizan DIS_MOLDE_NO_ACEPTA_CULPA
```

### `aplica_a`

Un mNode se proyecta a un dominio.

```txt
MN_CRITICA_PRODUCE_DEFENSA aplica_a feedback_laboral
```

### `deriva_en`

Un mNode permite construir otro.

```txt
MN_CRITICA_PRODUCE_DEFENSA deriva_en MODELO_JUEGO_DISPOSICION
```

### `limita`

Un mNode restringe el uso de otro.

```txt
MN_NO_HUMILLAR limita MET_CORREGIR
```

### `legitima`

Un mNode da autoridad o respaldo.

```txt
MODELO_LINCOLN legitima MET_MESURA_RELACIONAL
```

### `traduce`

Un mNode reformula otro en otro nivel.

```txt
MN_BASE_ANTROPOLOGICA traduce PRINCIPIO_DE_DISENO_DE_FEEDBACK
```

### `protege`

Un mNode ayuda a preservar otro elemento, como autoimagen, disposición o continuidad relacional.

```txt
MN_JUSTIFICACION_RACIONAL_POSTERIOR protege MN_AUTOIMAGEN_DEL_CONSUMIDOR
```

### `tensiona`

Un mNode introduce una tensión frente a otro.

```txt
MN_DECISION_RACIONAL tensiona MN_COMPRA_POR_EMOCION
```

---

## 12. Tipos de construcción conceptual según composición

### 12.1 Construcción intra-textual

Usa mNodes de un solo procesamiento estructural.

```txt
Carnegie_cap_1
  → construcción sobre crítica y resentimiento
```

### 12.2 Construcción inter-textual

Usa mNodes de varios textos.

```txt
Carnegie + marketing emocional
  → construcción sobre racionalización emocional del consumo
```

### 12.3 Construcción trans-teórica

Usa mNodes de distintas familias o marcos teóricos.

```txt
Carnegie + Skinner + Selye + teoría de identidad
  → construcción sobre refuerzo, aprobación y conducta social
```

### 12.4 Construcción aplicada

Usa mNodes teóricos para resolver un problema práctico.

```txt
crítica produce defensa
+ refuerzo positivo
+ juego iterado de disposición
  → método para feedback laboral
```

### 12.5 Construcción derivada

Produce un modelo nuevo a partir de composiciones.

```txt
mNodes sobre crítica, premio, mesura y disposición
  → modelo de juego iterado relacional
```

### 12.6 Construcción transferencial

Organiza mNodes para ser proyectados a varias realizaciones.

```txt
mGraph conceptual
  → video corto
  → carousel
  → clase
  → newsletter
```

---

## 13. Composición por niveles

No todos los mNodes entran al mismo nivel. Una construcción conceptual madura debe distinguir profundidad estructural.

```yaml
construccion_conceptual:
  nivel_fundacional:
    - MN_BASE_ANTROPOLOGICA

  nivel_mecanismo:
    - MN_COMPRA_POR_EMOCION
    - MN_JUSTIFICACION_RACIONAL_POSTERIOR

  nivel_identitario:
    - MN_AUTOIMAGEN
    - MN_IDENTIDAD_DE_MARCA

  nivel_aplicado:
    - MN_CONSUMO_SIMBOLICO

  nivel_metodologico:
    - MET_ANALIZAR_DECISION_EMOCIONAL

  nivel_transferencial:
    - USO_VIDEO_CORTO
    - USO_CAROUSEL
```

Esto evita que todas las ideas aparezcan planas.

Una construcción fuerte suele tener:

```txt
fundamento
mecanismo
aplicación
método
transferencia
validación
```

---

## 14. Composición y familias cognitivas

Las familias cognitivas ayudan a saber qué hace cada mNode en la composición.

Ejemplo:

```yaml
mNodes_compuestos:
  - mnode_id: MN_BASE_ANTROPOLOGICA
    familia: FAM-Idea
    funcion_en_composicion: fundamento

  - mnode_id: PR_EMOCION_A_JUSTIFICACION
    familia: FAM-Patron-de-razonamiento
    funcion_en_composicion: inferencia_central

  - mnode_id: DIS_SIMBOLO_EMOCION_DECISION
    familia: FAM-Diseño
    funcion_en_composicion: arquitectura_del_mecanismo

  - mnode_id: MET_ANALIZAR_COMPRA
    familia: FAM-Metodo
    funcion_en_composicion: procedimiento_aplicado

  - mnode_id: PLAN_EXPLICAR_EN_CONTENIDO
    familia: FAM-Plan
    funcion_en_composicion: recorrido_expositivo
```

Una construcción conceptual puede ser multifamiliar.

```yaml
perfil_multifamiliar:
  familia_dominante: FAM-Idea
  familias_auxiliares:
    FAM-Patron-de-razonamiento:
      funcion: sostener inferencia
    FAM-Diseño:
      funcion: organizar mecanismo
    FAM-Metodo:
      funcion: permitir aplicación
```

Esto permite distinguir:

```txt
qué mNodes definen
qué mNodes razonan
qué mNodes diseñan
qué mNodes procedimentalizan
qué mNodes secuencian
```

---

## 15. Composición y trazabilidad

Una construcción conceptual compuesta debe recordar de dónde viene cada mNode.

Ejemplo:

```yaml
mNodes_compuestos:
  - mnode_id: MN_BASE_ANTROPOLOGICA
    fuente: Carnegie_cap_1
    estatus: inferencia_local
    segmento_fuente: "sección donde se afirma que la crítica falla por orgullo, emoción y defensa"

  - mnode_id: MN_COMPRA_POR_EMOCION
    fuente: texto_marketing_emocional
    estatus: textual_explicito

  - mnode_id: MN_JUSTIFICACION_RACIONAL_POSTERIOR
    fuente: texto_psicologia_decision
    estatus: textual_implicito
```

La trazabilidad permite reconstruir:

```txt
qué parte viene de cada fuente
qué relación nueva introdujo la composición
qué es textual
qué es inferido
qué es derivado
qué es modelo posterior
```

Sin trazabilidad, la construcción conceptual se vuelve ensayo libre. Con trazabilidad, se vuelve arquitectura conceptual.

---

## 16. Composición y tensiones

Una construcción fuerte no solo junta compatibilidades. También puede usar tensiones.

Ejemplo:

```txt
Carnegie:
  la crítica directa falla porque produce defensa.

Marketing emocional:
  el consumidor justifica sus decisiones para sentirse racional.

Tensión:
  en Carnegie, la defensa surge ante crítica externa.
  en consumo, la justificación puede surgir sin crítica externa directa.
```

Resolución posible:

```txt
Ambos casos comparten defensa de autoimagen,
pero en Carnegie la amenaza viene de otro sujeto,
mientras que en consumo la amenaza puede ser interna o social anticipada.
```

Eso produce una construcción más fina:

```txt
La justificación racional puede operar como defensa de la autoimagen
tanto ante crítica externa como ante necesidad interna de coherencia.
```

La composición debe saber declarar:

```txt
no son equivalentes temáticamente,
pero son análogos estructuralmente bajo cierto invariante.
```

---

## 17. Validación de composición

Toda composición debería tener una sección de validación.

```yaml
validacion_compositiva:
  pregunta_organizadora:
    presente: true
    formulacion:

  seleccion:
    mNodes_relevantes:
    mNodes_excluidos_justificados:

  alineacion:
    invariantes_compartidos:
    compatibilidad_global:

  articulacion:
    relaciones_definidas:
    relaciones_arbitrarias:

  tensiones:
    detectadas:
    resueltas:

  sintesis:
    nucleo_claro:
    invariantes_globales_presentes:

  trazabilidad:
    fuentes_registradas:
    estatus_epistemico_conservado:

  riesgo:
    sobregeneralizacion:
    control:

  decision:
    estado:
```

Ejemplo:

```yaml
validacion_compositiva:
  pregunta_organizadora:
    presente: true
    formulacion: "¿Cómo se justifican racionalmente decisiones afectivas?"

  seleccion:
    mNodes_relevantes: true
    mNodes_excluidos_justificados: true

  alineacion:
    invariantes_compartidos:
      - accion_no_puramente_racional
      - defensa_de_autoimagen
      - justificacion_posterior
    compatibilidad_global: alta

  articulacion:
    relaciones_definidas: true
    relaciones_arbitrarias: false

  tensiones:
    detectadas:
      - critica_externa_vs_justificacion_interna
    resueltas:
      - ambas se interpretan como defensa de autoimagen bajo condiciones diferentes

  sintesis:
    nucleo_claro: true
    invariantes_globales_presentes: true

  trazabilidad:
    fuentes_registradas: true
    estatus_epistemico_conservado: true

  riesgo:
    sobregeneralizacion: medio
    control: "Formular con 'puede' y no con 'siempre'."

  decision:
    estado: composicion_valida
```

---

## 18. Superficie de transferencia

Una vez construida, la construcción conceptual debe poder viajar a realizaciones.

Ejemplo:

```yaml
superficie_de_transferencia:
  video_corto:
    uso_preferente:
      - convertir tensión en gancho
      - usar ejemplo rápido de compra
      - cerrar con frase de diagnóstico
    mNodes_activables:
      - MN_COMPRA_POR_EMOCION
      - MN_JUSTIFICACION_RACIONAL_POSTERIOR
      - MN_BASE_ANTROPOLOGICA
    evitar:
      - desplegar todo el marco teórico

  carousel:
    uso_preferente:
      - organizar en secuencia emoción → compra → justificación
      - usar lámina de contraste razón/emoción
      - incluir diagrama de autoimagen
    mNodes_activables:
      - DIS_SIMBOLO_EMOCION_DECISION
      - MN_BASE_ANTROPOLOGICA
      - MN_AUTOIMAGEN

  clase:
    uso_preferente:
      - explicar diferencia entre causa y justificación
      - discutir ejemplos
      - aplicar método diagnóstico
```

La construcción conceptual no es todavía video ni carousel, pero ya trae condiciones abstractas de transferencia.

---

## 19. Resultado final de una composición cognitiva

Una composición cognitiva debería producir una estructura como esta:

```yaml
construccion_conceptual_normalizada:
  identificacion:
    id: CC_DECISION_AFECTIVA_RACIONALIZADA
    tipo: construccion_intertextual
    estado: validada

  pregunta_organizadora:
    formulacion: "¿Cómo se forman decisiones afectivas que luego son justificadas racionalmente?"

  criterio_de_composicion:
    tipo: explicativo
    prioridad:
      - fundamentar antropológicamente
      - mostrar mecanismo
      - evitar sobregeneralización

  nucleo_composicional:
    tesis: "La racionalidad declarada puede funcionar como capa posterior que legitima decisiones formadas afectivamente."
    invariantes_globales:
      - accion_humana_no_puramente_racional
      - disposicion_afectiva_previa
      - justificacion_racional_posterior
      - proteccion_de_autoimagen

  mNodes_compuestos:
    - mnode_id: MN_BASE_ANTROPOLOGICA
      fuente: Carnegie_cap_1
      funcion_en_composicion: fundamento_antropologico

    - mnode_id: MN_COMPRA_POR_EMOCION
      fuente: texto_marketing
      funcion_en_composicion: caso_aplicado

    - mnode_id: MN_JUSTIFICACION_RACIONAL_POSTERIOR
      fuente: texto_psicologia
      funcion_en_composicion: mecanismo_explicativo

    - mnode_id: MN_AUTOIMAGEN
      fuente: Carnegie_cap_1
      funcion_en_composicion: mecanismo_identitario

  relaciones_compositivas:
    - origen: MN_BASE_ANTROPOLOGICA
      tipo: fundamenta
      destino: MN_COMPRA_POR_EMOCION

    - origen: MN_COMPRA_POR_EMOCION
      tipo: prepara
      destino: MN_JUSTIFICACION_RACIONAL_POSTERIOR

    - origen: MN_JUSTIFICACION_RACIONAL_POSTERIOR
      tipo: protege
      destino: MN_AUTOIMAGEN

  tensiones_resueltas:
    - tension: "crítica interpersonal vs consumo individual"
      resolucion: "ambos se conectan por defensa de autoimagen y racionalización posterior"

  validacion_compositiva:
    compatibilidad_global: alta
    trazabilidad: completa
    riesgo_de_sobregeneralizacion: medio
    estado: valida_con_restricciones

  superficie_de_transferencia:
    video_corto:
      recomendacion: "usar contraste razón/emoción como gancho"
    carousel:
      recomendacion: "diagramar secuencia emoción → decisión → justificación"
```

---

## 20. Arquitectura completa del modelo

La arquitectura completa queda así:

```txt
Texto crudo
  → procesamiento estructural
    → mNodes trazables

Muchos procesamientos estructurales
  → banco transcontextual de mNodes

Banco transcontextual de mNodes
  + pregunta organizadora
  + criterio de composición
    → composición cognitiva

Composición cognitiva
  → construcción conceptual normalizada

Construcción conceptual normalizada
  + configuración dimensional
    → protocolo de realización
      → manifestación codominial
```

También puede expresarse así:

```txt
textos_crudos
  → procesamientos_estructurales
    → banco_transcontextual_de_mNodes
      → composición_cognitiva
        → construcción_conceptual_normalizada
          → realizaciones_codominiales
```

---

## 21. Conexión con ACCD

Dentro de la ACCD, la composición cognitiva se ubica antes de las realizaciones.

```txt
materiales_fuente
  → procesamiento estructural
    → banco de mNodes
      → composición cognitiva
        → construcción conceptual normalizada
          → video_corto / carousel / newsletter / clase / landing
```

Esto significa que los protocolos de realización no deben cargar con la responsabilidad de construir toda la arquitectura conceptual profunda.

Su función debe ser:

```txt
proyectar una construcción conceptual ya validada hacia un codominio.
```

La construcción conceptual, en cambio, debe producirse antes, mediante composición cognitiva.

---

## 22. Ventajas del modelo

### 22.1 Reutilización

Un mNode extraído de un texto puede servir en muchas construcciones.

```txt
MN_BASE_ANTROPOLOGICA
  → crítica
  → consumo
  → liderazgo
  → feedback laboral
  → identidad digital
```

### 22.2 Intertextualidad controlada

Se pueden mezclar estructuras de varios textos sin perder trazabilidad.

```txt
Carnegie + marketing + teoría de identidad
  → construcción nueva
```

### 22.3 Generación conceptual real

El sistema deja de solo analizar contenido y empieza a producir modelos nuevos.

```txt
mNodes existentes
  → composición
    → modelo conceptual nuevo
```

### 22.4 Validación

La construcción puede evaluarse antes de pasar a una realización.

```txt
¿Es compatible?
¿Es trazable?
¿Tiene núcleo claro?
¿Tiene tensiones resueltas?
¿Evita sobregeneralización?
```

### 22.5 Transferibilidad

La construcción conceptual puede alimentar varias realizaciones sin depender de una forma material concreta.

```txt
construcción conceptual normalizada
  → video corto
  → carousel
  → clase
  → newsletter
```

---

## 23. Checklist operativo

Antes de aceptar una construcción conceptual compuesta, verificar:

```txt
[ ] Existe pregunta organizadora.
[ ] Existe criterio de composición.
[ ] Cada mNode seleccionado tiene fuente.
[ ] Cada mNode conserva identidad.
[ ] Cada mNode tiene función en la composición.
[ ] Las relaciones compositivas están declaradas.
[ ] Las relaciones compositivas están justificadas.
[ ] Existen invariantes globales.
[ ] Existen tensiones detectadas y resueltas.
[ ] Existe validación compositiva.
[ ] Existe superficie de transferencia.
[ ] La síntesis no sobrepasa lo que los mNodes permiten sostener.
[ ] La construcción puede alimentar más de una realización.
```

---

## 24. Definición final

La definición final del modelo es:

```txt
Composición cognitiva es la operación mediante la cual mNodes trazables,
extraídos de uno o varios procesamientos estructurales,
son seleccionados, alineados, articulados y sintetizados
bajo una pregunta organizadora,
para producir una construcción conceptual nueva, validada y transferible.
```

La definición final de construcción conceptual, dentro de este modelo, es:

```txt
Una construcción conceptual normalizada es una composición validada de mNodes,
gobernada por una pregunta organizadora,
articulada mediante relaciones compositivas,
respaldada por trazabilidad,
controlada por invariantes globales
y preparada para proyectarse a múltiples realizaciones codominiales.
```

---

## 25. Fórmula final

```txt
CCN = composición_validada(Banco_mNodes, Pregunta_organizadora, Criterio_de_composición)
```

Y la arquitectura general:

```txt
textos_crudos
  → procesamientos_estructurales
    → banco_transcontextual_de_mNodes
      → composición_cognitiva
        → construcción_conceptual_normalizada
          → realizaciones_codominiales
```
