# Cognitive Atlas — Executive/Cognitive Control (`ctp_C4`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Executive/Cognitive Control** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C4` — Executive/Cognitive Control
- **Definición registrada en la ontología:** Executive-Cognitive Control
- **TRM conectados directamente:** 42
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 20
- **Relaciones `kind_of` encontradas para esos TRM:** 21

## 2. Cómo leer esta categoría
En este archivo, una categoría superior `ctp_` funciona como un contenedor amplio. Los términos `trm_` no son todos del mismo tipo filosófico: algunos son procesos, capacidades, fenómenos, constructos psicológicos, tareas o etiquetas de uso histórico. Por eso este documento no debe leerse como una taxonomía perfecta, sino como una **superficie de organización ontológica**.
Estructura mínima:
```txt
ctp_ categoría superior
  → trm_ término conectado directamente por hasTopConcept
      → posible padre trm_ mediante kind_of
      → definición textual si existe
```
## 3. TRM conectados directamente
| # | trm_id | término | padre(s) `kind_of` | definición registrada |
|---:|---|---|---|---|
| 1 | `trm_4a3fd79d0ba0d` | active maintenance | `trm_55b6b9d7c9435` working memory maintenance | The maintenance of information in working memory through active (volitional) rather than passive means |
| 2 | `trm_4b7c270940f9d` | behavioral inhibition (cognitive) | — | Often used as a synonym of &#34;response inhibition&#34; to describe the inhibition of actions. |
| 3 | `trm_4a3fd79d0ba25` | central executive | — | Theoretical &#39;top-down&#39; cognitive system responsible for the management of executive functions including planning, working memory, attention, problem solving, reasoning, inhibition, multi-tasking, and the initiation and monitoring of actions. |
| 4 | `trm_4a3fd79d09cae` | chunking | — | The process of recoding information by splitting or reorganizing it into smaller parts. Actually: combining several smaller items into a larger &#34;group&#34; item, i.e.: 3 separate &#34;incoming aircraft&#34; considered as &#34;3 incoming aircraft&#34;. Significantly reduces the working memory space used. Likely concept model for computer programming data-forms that list pointers to numerous specific data. Larger classes of concepts include: Learning and Memory, Attention, Action (Planning), Executive Control. |
| 5 | `trm_4aae62e4ad209` | cognitive control | — | The top-down modulation of cognitive processes based on higher-order representations such as goals or plans. |
| 6 | `trm_4a3fd79d09d64` | cognitive load | — | The amount of demand placed on working memory, typically expressed along some continuum and within a theoretical maximum. |
| 7 | `trm_4a3fd79d0a20c` | error detection | — | Processes that identify when an error has been made. |
| 8 | `trm_4a3fd79d0a419` | goal | — | The desired end-point of behavior(s). |
| 9 | `trm_4a3fd79d0a425` | goal formation | — | The processes that create and maintain representations of goal states. |
| 10 | `trm_4a3fd79d0a431` | goal maintenance | `trm_4a3fd79d0ba30` maintenance | The maintenance of information regarding task goals in working memory. |
| 11 | `trm_4a3fd79d0a43c` | goal management | — | consists of the process of recognizing or inferring goals, abandoning no longer relevant goals, identifying and resolving conflicts among goals, and prioritizing goals consistently for optimal success. |
| 12 | `trm_4a3fd79d0a448` | goal state | — | A point reached when goal directed behavior has successfully concluded. |
| 13 | `trm_4a3fd79d0a613` | inhibition | `trm_4aae62e4ad209` cognitive control | The process by which a response or thought is suppressed. |
| 14 | `trm_4a3fd79d0a61f` | inhibition of return | — | the phenomenon in which the speed and accuracy with which an object is detected are first briefly enhanced (for perhaps 100-300 milliseconds) after the object is attended, and then detection speed and accuracy are impaired (for perhaps 500-3000 milliseconds). |
| 15 | `trm_4c3e04d656f06` | interference resolution | `trm_4aae62e4ad209` cognitive control | The process of selecting information with regard to its relevance to an ongoing task and suppressing the processing of irrelevant information. |
| 16 | `trm_4a3fd79d0ba30` | maintenance | — | The process of keeping information in active and immediately accessible state. |
| 17 | `trm_4a3fd79d0ba3c` | manipulation | — | performance of operations upon information held in working memory |
| 18 | `trm_4a3fd79d0b94f` | metamemory | `trm_4a3fd79d0a920` metacognition | subjective awareness of and knowledge about memory, and strategies for its effective access and application; includes: awareness of memory contents, different and appropriate memory strategies for particular tasks, and how to use a given memory strategy most effectively. |
| 19 | `trm_4a3fd79d0a94f` | monitoring | — | the act of checking for particular kinds of information |
| 20 | `trm_4a3fd79d0ac30` | performance monitoring | `trm_4aae62e4ad209` cognitive control | the online evaluation of one&#39;s performance on a task |
| 21 | `trm_4a3fd79d0ac9e` | phonological working memory | `trm_52b5f1ef4f9cc` phonological processing, `trm_4a3fd79d0b5a7` working memory | The process of maintaining sound information online for a limited amount of time. |
| 22 | `trm_4a3fd79d0acc1` | planning | — | formulation, evaluation and selection of a sequence of actions to achieve a desired goal. |
| 23 | `trm_557b49851e991` | proactive control | `trm_4aae62e4ad209` cognitive control | Top down modulation of cognitive processes in anticipation of future goals or task demands. Often involves reaction time slowing |
| 24 | `trm_557b499fac085` | resistance to distractor inference | `trm_4c3e04d656f06` interference resolution | ADD DEFINITION HERE |
| 25 | `trm_4a3fd79d0af4c` | resource limit | — | the maximum amount of cognitive resources that can be allocated to various, often competing tasks |
| 26 | `trm_557b49ad14adf` | response conflict | `trm_557b4add1837e` task difficulty | The coactivation of competing response alternatives |
| 27 | `trm_4a3fd79d0af66` | response inhibition | `trm_4a3fd79d0a613` inhibition | Suppression of actions that are inappropriate in a given context and that interfere with goal-driven behavior. |
| 28 | `trm_557b4aa070c10` | selective control | `trm_4aae62e4ad209` cognitive control | Top-down modulation of specific response output or of specific stimuli in the environment. |
| 29 | `trm_4ee8facd77dfc` | self control | `trm_4aae62e4ad209` cognitive control | The effortful control of behaviors, thoughts, or emotions with the aim of increasing the likelihood of attaining long-term over short-term outcomes. |
| 30 | `trm_4a3fd79d0b05e` | self monitoring | `trm_4a3fd79d0a94f` monitoring | monitoring of one&#39;s own behavior. |
| 31 | `trm_4a3fd79d0b08f` | semantic working memory | `trm_4a3fd79d0b5a7` working memory | Working memory for meaning |
| 32 | `trm_4a3fd79d0b607` | set shifting | `trm_4a3fd79d0b613` task switching | disengagement of an irrelevant task set and subsequent engagement of a relevant task set despite interference and/or priming |
| 33 | `trm_4a3fd79d0b2fa` | supervisory attentional system | — | a loosely defined collection of brain processes that are responsible for planning, cognitive flexibility, abstract thinking, rule acquisition, initiating appropriate actions and inhibiting inappropriate actions, and selecting relevant sensory information. |
| 34 | `trm_4c3e0646a2408` | task set | — | The set of rules and/or stimulus-response mappings that define how a task should be performed. |
| 35 | `trm_4a3fd79d0b613` | task switching | `trm_4aae62e4ad209` cognitive control | The process of switching from one task or goal to another, depending on the context or instructions, that is, the process of switching between task sets. |
| 36 | `trm_4a3fd79d0b3cb` | top down processing | — | perceptions formed by starting with the larger concept or idea, then working down to the finer details of that concept or idea. |
| 37 | `trm_4c3e05903e4bb` | updating | `trm_4aae62e4ad209` cognitive control | The revision or refreshing of information that is maintained in working memory |
| 38 | `trm_4a3fd79d0b507` | visuospatial sketch pad | — | The cognitive construct and mental process of temporarily storing visual and spatial information for online use in operations of working memory (c.f., Alan Baddeley) . |
| 39 | `trm_4a3fd79d0b5a7` | working memory | `trm_4a3fd79d0a891` memory | active maintenance and flexible updating of goal/task relevant information (items, goals, strategies, etc.) in a form that resists interference but has limited capacity. These representations may involve flexible binding of representations, may be characterized by the absence of external support for the internally maintained representations, and are frequently temporary due to ongoing interference |
| 40 | `trm_55b6b9d7c9435` | working memory maintenance | `trm_4a3fd79d0ba30` maintenance | the active retention of information in a short-term memory store |
| 41 | `trm_4a3fd79d0ba6c` | working memory retrieval | — | The process of accessing information that is maintained in working memory; the sub-process by which the contents of working memory are accessed. |
| 42 | `trm_4a3fd79d0ba77` | working memory storage | — | The maintenance of information of working memory; a sub-component of working memory that allows for contents of working memory to be retained. |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_4aae62e4ad209` — cognitive control
- `trm_4a3fd79d0a613` — inhibition
- `trm_4c3e04d656f06` — interference resolution
- `trm_4a3fd79d0ac30` — performance monitoring
- `trm_557b49851e991` — proactive control
- `trm_557b4aa070c10` — selective control
- `trm_4ee8facd77dfc` — self control
- `trm_4a3fd79d0b613` — task switching
- `trm_4c3e05903e4bb` — updating

### `trm_4a3fd79d0a613` — inhibition
- `trm_4a3fd79d0af66` — response inhibition

### `trm_4c3e04d656f06` — interference resolution
- `trm_557b499fac085` — resistance to distractor inference

### `trm_4a3fd79d0ba30` — maintenance
- `trm_4a3fd79d0a431` — goal maintenance
- `trm_55b6b9d7c9435` — working memory maintenance

### `trm_4a3fd79d0a94f` — monitoring
- `trm_4a3fd79d0b05e` — self monitoring

### `trm_4a3fd79d0b613` — task switching
- `trm_4a3fd79d0b607` — set shifting

### `trm_4a3fd79d0b5a7` — working memory
- `trm_4a3fd79d0ac9e` — phonological working memory
- `trm_4a3fd79d0b08f` — semantic working memory

### `trm_55b6b9d7c9435` — working memory maintenance
- `trm_4a3fd79d0ba0d` — active maintenance

## 5. Padres `kind_of` externos a la categoría
Estos padres aparecen como superiores de términos de esta categoría, pero no están conectados directamente a esta misma categoría superior en el conjunto `hasTopConcept` usado aquí. Esto muestra que la ontología no opera como árbol limpio, sino como grafo.

### `trm_4a3fd79d0a891` — memory
- `trm_4a3fd79d0b5a7` — working memory

### `trm_4a3fd79d0a920` — metacognition
- `trm_4a3fd79d0b94f` — metamemory

### `trm_52b5f1ef4f9cc` — phonological processing
- `trm_4a3fd79d0ac9e` — phonological working memory

### `trm_557b4add1837e` — task difficulty
- `trm_557b49ad14adf` — response conflict

## 6. Interpretación estructural
La categoría **Executive/Cognitive Control** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
