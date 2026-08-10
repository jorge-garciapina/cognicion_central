# Cognitive Atlas — Emotion (`ctp_C8`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Emotion** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C8` — Emotion
- **Definición registrada en la ontología:** Emotion
- **TRM conectados directamente:** 33
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 10
- **Relaciones `kind_of` encontradas para esos TRM:** 12

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
| 1 | `trm_4a3fd79d0977b` | affect recognition | — | The ability to understand a physical expression that serves as an indicator of emotion. |
| 2 | `trm_5022ef7599294` | anxiety | `trm_4a3fd79d0a17f` emotion | An aversive psychophysiological state characterized by fear, worry, or concern associated with current or impending threat often elicited by general and specific interoceptive or exteroceptive cues. |
| 3 | `trm_59d184d09066b` | arousal (emotion) | — | The intensity of an emotion (as distinguished in the circumplex model from its valence) |
| 4 | `trm_4a3fd79d0a17f` | emotion | — | a complex of psychological phenomena that involve some degree of arousal and valence (positive/negative) |
| 5 | `trm_4a3fd79d0b65a` | emotion perception | — | The process involving understanding feelings with different valences of oneself or of others |
| 6 | `trm_4a3fd79d0b665` | emotion recognition | `trm_4a3fd79d0b967` recognition | The process of assigning an emotion to one of the discrete categories of emotion available in a particular culture. |
| 7 | `trm_4a3fd79d0a18b` | emotional decision making | `trm_4a3fd79d0a038` decision making | The use of affective information as information in a decision making process or as a basis for making a decision. Hot cognition. |
| 8 | `trm_4a3fd79d0a196` | emotional expression | — | observable verbal and nonverbal behavior that communicates emotion with or without self-awareness. |
| 9 | `trm_4a3fd79d0a1a2` | emotional intelligence | — | the capacity, skill or ability to identify, assess, and manage the emotions of one&#39;s self, of others, and of groups. |
| 10 | `trm_4a3fd79d0a1b9` | emotional mimicry | — | is the ability of a person to imitate, copy, and experience the physical and emotional characteristics of another persons emotion. |
| 11 | `trm_4a3fd79d0a1d1` | emotional suppression | `trm_51a690a7492eb` emotion regulation | A process to reduce or inhibit the impact of an emotion on ones current conscious state or behavior. |
| 12 | `trm_4a3fd79d0b67d` | empathy | — | The act of understanding, being aware of, being sensitive to, and or experiencing the feelings, thoughts, and experience of another. |
| 13 | `trm_4a3fd79d0a22f` | excitation | — | a state of increased emotional arousal |
| 14 | `trm_4a3fd79d0a318` | facial expression | — | Movements and positions of the facial muscles that can be used as a form of nonverbal communication, particularly in conveying emotional states. |
| 15 | `trm_4a3fd79d0b689` | fear | `trm_557b48d40d3cf` negative emotion | A state of high negative emotional arousal triggered by an impending threat (real or imaginary) and generally associated with the flight or fight response. Fear is the activation of the brainâs defensive motivational system to promote behaviors that protect the organism from perceived danger. Normal fear involves a pattern of adaptive responses to conditioned or unconditioned threat stimuli (exteroceptive or interoceptive). Fear can involve internal representations and cognitive processing, and can be modulated by a variety of factors. |
| 16 | `trm_4a3fd79d0b695` | frustration | — | a deep chronic sense or state of insecurity and dissatisfaction arising from unresolved problems or unfulfilled needs. |
| 17 | `trm_4a3fd79d0b6a1` | grief | — | deep and poignant distress caused by or as if by bereavement. |
| 18 | `trm_4a3fd79d0b6ad` | happiness | — | a state of mind or feeling characterized by contentment, love, satisfaction, pleasure, or joy. |
| 19 | `trm_4a3fd79d0a4e1` | humiliation | — | to reduce to a lower position in one&#39;s own eyes or others&#39; eyes. |
| 20 | `trm_4a3fd79d0a4ed` | humor | — | the tendency of particular cognitive experiences to provoke laughter and provide amusement. |
| 21 | `trm_4a3fd79d0a56e` | indignation | — | anger aroused by something unjust, unworthy, or mean. |
| 22 | `trm_4a3fd79d0a95a` | mood | — | a conscious state of mind or predominant emotion. |
| 23 | `trm_557b48d40d3cf` | negative emotion | `trm_4a3fd79d0a17f` emotion | ADD DEFINITION HERE |
| 24 | `trm_4b65259eeee34` | pain | `trm_4a3fd79d0aa0c` nociception, `trm_4a3fd79d0b160` somatosensation | An unpleasant sensory and emotional experience associated with actual or potential tissue damage. |
| 25 | `trm_4e6127bd91be9` | pain habituation | — | A painful stimulus is perceived less painful over the time course of stimulation. |
| 26 | `trm_4e61264db33d4` | pain sensitization  | — | A painful stimulus is perceived more painful over the time course of stimulation. |
| 27 | `trm_4a3fd79d0aecd` | regret | — | an emotional response to remembrance of a past state, condition, or experience that one wishes had been different |
| 28 | `trm_4a3fd79d0b014` | sadness | `trm_4a3fd79d0a17f` emotion, `trm_557b48d40d3cf` negative emotion | an emotion characterized by feelings of unhappiness, disadvantage, loss, and helplessness. |
| 29 | `trm_4a3fd79d0b0eb` | shame | `trm_4a3fd79d0a17f` emotion | a painful emotion caused by consciousness of guilt, shortcoming, or impropriety; a condition of humiliating disgrace or disrepute; something that brings censure or reproach. |
| 30 | `trm_4a3fd79d0b2a8` | stress | — | refers to the consequence of the failure of an organism â human or animal â to respond appropriately to emotional or physical threats, whether actual or imagined. |
| 31 | `trm_4a3fd79d0b306` | surprise | `trm_4a3fd79d0a17f` emotion | a brief emotional state that is the result of experiencing an unexpected relevant event. |
| 32 | `trm_4a3fd79d0b363` | taste aversion | — | occurs when the taste of a certain food is associated with symptoms caused by a toxic, spoiled, or poisonous substance; generally caused after ingestion of the food causes nausea, sickness, or vomiting. The ability to develop a taste aversion is considered an adaptive trait or survival mechanism that trains the body to avoid poisonous substances (e.g., poisonous berries) before they can cause harm. |
| 33 | `trm_4a3fd79d0b429` | valence | — | the degree of attractiveness an individual, activity, or thing possesses as a behavioral goal. |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_4a3fd79d0a17f` — emotion
- `trm_5022ef7599294` — anxiety
- `trm_557b48d40d3cf` — negative emotion
- `trm_4a3fd79d0b014` — sadness
- `trm_4a3fd79d0b0eb` — shame
- `trm_4a3fd79d0b306` — surprise

### `trm_557b48d40d3cf` — negative emotion
- `trm_4a3fd79d0b689` — fear
- `trm_4a3fd79d0b014` — sadness

## 5. Padres `kind_of` externos a la categoría
Estos padres aparecen como superiores de términos de esta categoría, pero no están conectados directamente a esta misma categoría superior en el conjunto `hasTopConcept` usado aquí. Esto muestra que la ontología no opera como árbol limpio, sino como grafo.

### `trm_4a3fd79d0a038` — decision making
- `trm_4a3fd79d0a18b` — emotional decision making

### `trm_51a690a7492eb` — emotion regulation
- `trm_4a3fd79d0a1d1` — emotional suppression

### `trm_4a3fd79d0aa0c` — nociception
- `trm_4b65259eeee34` — pain

### `trm_4a3fd79d0b967` — recognition
- `trm_4a3fd79d0b665` — emotion recognition

### `trm_4a3fd79d0b160` — somatosensation
- `trm_4b65259eeee34` — pain

## 6. Interpretación estructural
La categoría **Emotion** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
