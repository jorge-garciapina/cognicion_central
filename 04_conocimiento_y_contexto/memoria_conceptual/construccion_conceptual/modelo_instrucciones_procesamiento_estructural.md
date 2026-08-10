https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0e0459-38d8-83e8-bfb3-bc2f93c3e9c2

# Modelo de instrucciones para procesamiento estructural

**Tipo de documento:** modelo operativo reutilizable  
**Uso esperado:** copiar y pegar estas instrucciones en otro chat para indicarle cómo realizar un `procesamiento_estructural` sobre un texto en crudo.  
**Función:** estandarizar el primer paso de análisis estructural antes de construir una construcción conceptual, grafo, modelo de juego, composición cognitiva o realización posterior.

---

# 0. Instrucción principal reutilizable

```txt
Quiero que realices un procesamiento estructural del texto que te voy a dar.

El objetivo NO es resumir el texto.
El objetivo NO es todavía construir una teoría completa o un modelo analítico profundo.
El objetivo es convertir el texto en crudo en una secuencia ordenada de estructuras cognitivas detectadas.

Debes respetar el orden en que las ideas aparecen en el texto.

Cada estructura importante del texto debe convertirse en un mNode o en una unidad estructural relacionada.

El procesamiento debe funcionar como primer paso para análisis posteriores, por ejemplo:
- construcción conceptual
- modelo de juego
- grafo de mNodes
- lectura por familias cognitivas
- realización en video corto
- realización en carousel
- composición cognitiva
```

---

# 1. Principio central del procesamiento

```txt
texto_en_crudo
  → segmentación estructural
    → detección de unidades cognitivas
      → normalización en mNodes
        → clasificación por familia cognitiva
          → relaciones básicas
            → síntesis estructural
```

El procesamiento debe responder:

```txt
¿Qué estructuras cognitivas aparecen en el texto?
¿En qué orden aparecen?
¿Qué función cumple cada una?
¿A qué familia cognitiva pertenece?
¿Qué relación tiene con otras estructuras?
¿Qué moldes, patrones, métodos o reglas aparecen?
```

---

# 2. Formato obligatorio para cada mNode

Usa esta estructura para **todos los nodos principales**:

```yaml
orden_textual:
mnode_id:
tipo_de_unidad:
familia_cognitiva:
estatus_de_extraccion:
segmento_fuente:
formulacion: >
rol_operativo:
funcion_local_en_el_texto:
estructura_interna:
  condicion:
  accion:
  objetivo:
conecta_con:
```

Cuando la unidad no encaje perfectamente en `condicion / accion / objetivo`, conserva igualmente esos campos y añade subcampos si hace falta.

Ejemplo:

```yaml
estructura_interna:
  condicion: "El lector está apurado y sólo presta atención si reconoce un interés propio."
  accion: "El titular revela de inmediato el beneficio o tema relevante."
  objetivo: "Lograr que el prospecto correcto lea el anuncio."
  subestructura:
    lector:
      - apurado
      - selectivo
      - saturado_de_informacion
    titular:
      - selecciona
      - revela_interes
      - filtra_audiencia
```

---

# 3. Campos explicados

## 3.1. `orden_textual`

Debe indicar el lugar aproximado en que aparece la unidad dentro del texto.

Ejemplo:

```yaml
orden_textual: 05
```

Debe conservarse el orden del texto. No reorganices todavía por importancia lógica.

---

## 3.2. `mnode_id`

Identificador estable, claro y reutilizable.

Ejemplos:

```yaml
mnode_id: MN_PUBLICIDAD_ES_VENTA
mnode_id: MET_JUZGAR_ANUNCIO_COMO_VENDEDOR
mnode_id: DIS_MOLDE_TITULAR_COMO_SELECTOR
mnode_id: PR_CASOS_EXTREMOS_A_REGLA_GENERAL
```

Convenciones recomendadas:

```txt
MN_    = idea, tesis, distinción o principio
MET_   = método, procedimiento o técnica
DIS_   = diseño, molde o estructura organizadora
PR_    = patrón de razonamiento
EJ_    = ejemplo
CASO_  = caso desarrollado
PLAN_  = plan o secuencia
REGLA_ = regla terminal
```

---

## 3.3. `tipo_de_unidad`

Debe decir qué clase de unidad es.

Valores posibles:

```txt
definicion_nuclear
tesis_funcional
delimitacion_negativa
mecanismo_psicologico
mecanismo_operativo
principio_de_equivalencia
patron_de_razonamiento
metodo_principal
submetodo_de_evaluacion
caso_metodologico
historia_ancla
ejemplo_comparativo
molde
regla_terminal
advertencia_operativa
modelo_del_receptor
formulacion_antropologica
metafora_funcional
plan_expositivo
```

No llames “idea” a todo. Un ejemplo no es lo mismo que un método; una inferencia no es lo mismo que una historia; una regla terminal no es lo mismo que un molde.

---

## 3.4. `familia_cognitiva`

Clasifica la unidad según las familias cognitivas.

Valores base:

```txt
FAM-Idea
FAM-Patrón-de-razonamiento
FAM-Diseño
FAM-Método
FAM-Plan
```

También puedes usar:

```txt
forma_compuesta
forma_derivada
```

cuando la unidad combine varias funciones, por ejemplo una historia que contiene ejemplo, contraste, método y regla.

---

## 3.5. `estatus_de_extraccion`

Debes indicar de dónde sale la estructura.

Valores recomendados:

```txt
textual_explicito
textual_implicito
inferencia_local
molde_derivado
estructura_analitica_posterior
```

Regla importante:

```txt
Si el texto lo dice directamente:
  textual_explicito

Si el texto lo implica de manera clara:
  textual_implicito

Si surge al conectar dos o más partes próximas del texto:
  inferencia_local

Si abstraes una estructura repetida desde varios ejemplos:
  molde_derivado

Si es un modelo construido por el analista y no aparece como tal en el texto:
  estructura_analitica_posterior
```

En el procesamiento estructural, evita desarrollar demasiado las `estructura_analitica_posterior`. Sólo márcalas como posibles análisis posteriores.

---

## 3.6. `segmento_fuente`

Incluye una referencia breve al fragmento del texto que origina el nodo.

No copies demasiado. Sólo lo suficiente para anclar el mNode.

Ejemplo:

```yaml
segmento_fuente: "Advertising is salesmanship. Its principles are the principles of salesmanship."
```

---

## 3.7. `formulacion`

Reformula la unidad de manera estructural.

Debe ser más clara que el texto literal, pero no debe inventar algo que el texto no sostiene.

Ejemplo:

```yaml
formulacion: >
  La publicidad es venta; sus principios son los mismos principios de la venta.
```

---

## 3.8. `rol_operativo`

Explica qué hace esa estructura dentro del procesamiento.

Ejemplos:

```txt
formular_tesis_central
delimitar_falso_criterio
justificar_metodo
organizar_casos_isomorfos
mostrar_transgresion
mostrar_observancia
convertir_tesis_en_procedimiento
cerrar_con_regla_terminal
```

---

## 3.9. `funcion_local_en_el_texto`

Explica para qué aparece esa unidad justo en ese lugar del texto.

Ejemplo:

```yaml
funcion_local_en_el_texto:
  - establecer la concepción correcta desde el inicio
  - eliminar una interpretación equivocada
  - preparar el método que se desarrollará después
```

---

## 3.10. `estructura_interna`

Debe conservar esta forma base:

```yaml
estructura_interna:
  condicion:
  accion:
  objetivo:
```

Pero puede expandirse si hace falta.

Ejemplo:

```yaml
estructura_interna:
  condicion: "El anuncio puede ser ignorado por el lector."
  accion: "El titular debe llamar al prospecto correcto."
  objetivo: "Conseguir que el anuncio sea leído por quien puede comprar."
  subestructura:
    problema:
      - atención_limitada
      - lectores_apurados
      - multitud_de_anuncios
    solución:
      - titular_selectivo
      - beneficio_visible
```

---

## 3.11. `conecta_con`

Lista los mNodes relacionados.

Ejemplo:

```yaml
conecta_con:
  - MN_TITULAR_SELECCIONA_INTERESADOS
  - MET_PROBAR_TITULARES_POR_RETORNOS
  - REGLA_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
```

---

# 4. Estructura general del entregable

El procesamiento debe tener estas secciones:

```txt
# procesamiento_estructural

1. Texto raíz
2. Núcleo estructural provisional
3. Secuencia lineal de mNodes
4. Moldes estructurales detectados
5. Relaciones básicas entre mNodes
6. Perfil familiar preliminar
7. Plan expositivo del texto
8. Síntesis estructural
9. Observaciones para análisis posteriores
```

---

# 5. Plantilla completa del entregable

````md
# procesamiento_estructural

## Texto raíz

```yaml
texto_raiz:
  texto_id:
  titulo:
  dominio:
  tipo_de_fuente:
  funcion_global: >
```
````

---

## Núcleo estructural provisional

```txt
Aquí se formula, de manera breve, qué parece estar haciendo el texto.
No debe ser todavía una construcción conceptual final.
Debe ser una orientación provisional.
```

```yaml
nucleo_estructural_provisional:
  formulacion: >
  oposicion_central:
    polo_1:
      -
    polo_2:
      -
```

---

## Secuencia lineal de mNodes detectados

### 00. `MNode_ID`

```yaml
orden_textual:
mnode_id:
tipo_de_unidad:
familia_cognitiva:
estatus_de_extraccion:
segmento_fuente:
formulacion: >
rol_operativo:
funcion_local_en_el_texto:
  -
estructura_interna:
  condicion:
  accion:
  objetivo:
conecta_con:
  -
```

---

## Moldes estructurales detectados

```yaml
molde:
  mnode_id:
  familia_cognitiva: FAM-Diseño
  formulacion: >
  estructura:
    condicion:
    accion:
    objetivo:
  invariantes:
    -
  instancias:
    -
```

---

## Relaciones básicas entre mNodes

```yaml
relaciones_basicas:
  - origen:
    tipo:
    destino:

  - origen:
    tipo:
    destino:
```

Tipos de relación recomendados:

```txt
desarrolla_en
fundamenta
contrasta_con
ejemplifica
instancia_de
soporta
justifica
prepara
deriva_en
corrige
operacionaliza
condensa
delimita
refuerza
produce
```

---

## Perfil familiar preliminar

```yaml
perfil_familiar_preliminar:
  FAM-Idea:
    funcion:
    nodos:
      -

  FAM-Patrón-de-razonamiento:
    funcion:
    nodos:
      -

  FAM-Diseño:
    funcion:
    nodos:
      -

  FAM-Método:
    funcion:
    nodos:
      -

  FAM-Plan:
    funcion:
    nodos:
      -
```

---

## Plan expositivo del texto

```yaml
mnode_id: PLAN_RECORRIDO_TEXTO
familia_cognitiva: FAM-Plan
tipo_de_unidad: plan_expositivo
estatus_de_extraccion: molde_derivado
formulacion: >
secuencia:
  -
  -
  -
```

---

## Síntesis estructural

```txt
Aquí se presenta el recorrido general del texto en forma esquemática.
```

---

## Observaciones para análisis posteriores

```yaml
observaciones_para_pasos_posteriores:
  posible_construccion_conceptual:
    estatus: analisis_posterior
    descripcion: >

  posible_modelo_analitico:
    estatus: analisis_posterior
    descripcion: >

  posible_grafo:
    estatus: analisis_posterior
    descripcion: >
```

````

---

# 6. Instrucciones de procedimiento para el chat

Puedes darle estas instrucciones al chat:

```txt
Procede así:

1. Lee el texto completo antes de empezar.
2. Identifica el tema general, pero no hagas todavía una interpretación profunda.
3. Segmenta el texto según el orden en que aparecen las ideas.
4. Detecta unidades cognitivas mínimas:
   - ideas
   - métodos
   - ejemplos
   - historias
   - inferencias
   - contrastes
   - reglas
   - advertencias
   - metáforas
   - moldes
5. Convierte cada unidad importante en un mNode.
6. Usa obligatoriamente esta estructura para cada mNode:

orden_textual:
mnode_id:
tipo_de_unidad:
familia_cognitiva:
estatus_de_extraccion:
segmento_fuente:
formulacion: >
rol_operativo:
funcion_local_en_el_texto:
estructura_interna:
  condicion:
  accion:
  objetivo:
conecta_con:

7. No mezcles el procesamiento estructural con la construcción conceptual final.
8. Si detectas modelos analíticos posibles, guárdalos en observaciones para pasos posteriores.
9. No inventes relaciones que no estén justificadas por el texto.
10. Al final, entrega:
   - moldes estructurales detectados
   - relaciones básicas
   - perfil familiar preliminar
   - plan expositivo
   - síntesis estructural
````

---

# 7. Reglas negativas

El chat debe evitar esto:

```txt
No resumir el texto como si fuera una reseña.
No convertir todo en “ideas principales”.
No ignorar el orden textual.
No mezclar el texto con modelos externos no explicitados.
No confundir ejemplo con molde.
No confundir método con idea.
No llamar “concepto” a cualquier fragmento.
No eliminar detalles operativos.
No crear una construcción conceptual final si sólo se pidió procesamiento estructural.
No usar una estructura distinta para cada nodo.
```

---

# 8. Diferencia entre procesamiento estructural y construcción conceptual

Esto es importante comunicarlo:

```txt
Procesamiento estructural:
  ordena lo que aparece en el texto.
  preserva la secuencia.
  detecta unidades.
  clasifica familias.
  identifica relaciones básicas.
  deja listo el material.

Construcción conceptual:
  reorganiza el material.
  identifica núcleo conceptual.
  jerarquiza nodos.
  formula modelos derivados.
  construye campos conceptuales.
  define superficies de transferencia.
```

En fórmula:

```txt
procesamiento_estructural =
  extracción ordenada + clasificación + relaciones mínimas

construcción_conceptual =
  reorganización profunda + núcleo + modelos + campo + transferencia
```

---

# 9. Ejemplo mínimo de mNode bien formado

```yaml
orden_textual: 03
mnode_id: MN_TITULAR_SELECCIONA_INTERESADOS
tipo_de_unidad: definicion_funcional
familia_cognitiva: FAM-Idea
estatus_de_extraccion: textual_explicito
segmento_fuente: "The purpose of a headline is to pick out people you can interest."
formulacion: >
  El propósito del titular es seleccionar a las personas que pueden interesarse
  en la oferta.
rol_operativo: formular_funcion_del_titular
funcion_local_en_el_texto:
  - definir la función central del titular
  - desplazar el criterio desde atención general hacia atención cualificada
  - preparar la crítica contra titulares ciegos o meramente ingeniosos
estructura_interna:
  condicion: "Existe una multitud de lectores, pero sólo algunos pueden interesarse en la oferta."
  accion: "El titular debe llamar a esos lectores específicos."
  objetivo: "Conseguir que el anuncio sea leído por prospectos reales, no por curiosos irrelevantes."
conecta_con:
  - MN_ATENCION_NO_ES_VALOR_SI_NO_ES_DEL_PROSPECTO
  - MN_TITULAR_CIEGO_ATRAE_ATENCION_INUTIL
  - REGLA_DIRIGIRSE_SOLO_A_LOS_BUSCADOS
```

---

# 10. Prompt completo reutilizable

Puedes copiar y pegar esto en otro chat:

```txt
Quiero que hagas un procesamiento estructural del texto que te voy a proporcionar.

No quiero un resumen.
No quiero todavía una construcción conceptual final.
No quiero un ensayo interpretativo.

Quiero que conviertas el texto en una secuencia ordenada de estructuras cognitivas detectadas.

Debes respetar el orden en que aparecen las partes en el texto.

Para cada estructura importante debes crear un mNode con este formato obligatorio:

orden_textual:
mnode_id:
tipo_de_unidad:
familia_cognitiva:
estatus_de_extraccion:
segmento_fuente:
formulacion: >
rol_operativo:
funcion_local_en_el_texto:
estructura_interna:
  condicion:
  accion:
  objetivo:
conecta_con:

Usa estas familias cognitivas:
- FAM-Idea
- FAM-Patrón-de-razonamiento
- FAM-Diseño
- FAM-Método
- FAM-Plan

Usa estos estatus de extracción:
- textual_explicito
- textual_implicito
- inferencia_local
- molde_derivado
- estructura_analitica_posterior

Distingue entre:
- idea
- ejemplo
- historia
- método
- patrón de razonamiento
- molde
- regla
- advertencia
- metáfora
- plan expositivo

Después de la secuencia de mNodes, incluye:

1. Moldes estructurales detectados.
2. Relaciones básicas entre mNodes.
3. Perfil familiar preliminar.
4. Plan expositivo del texto.
5. Síntesis estructural.
6. Observaciones para pasos posteriores.

No desarrolles modelos analíticos posteriores todavía. Si detectas uno, sólo márcalo como posible análisis posterior.

El resultado debe servir como materia prima para una construcción conceptual, un grafo de mNodes o una realización posterior.
```
