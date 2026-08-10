# Cognitive Atlas — Social Function (`ctp_C9`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Social Function** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C9` — Social Function
- **Definición registrada en la ontología:** Social Function
- **TRM conectados directamente:** 13
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 1
- **Relaciones `kind_of` encontradas para esos TRM:** 1

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
| 1 | `trm_4a3fd79d098e0` | attachment | — | a social connection between individuals |
| 2 | `trm_4a3fd79d09d9e` | communication | — | a process by which information is exchanged between individuals through a common system of symbols, signs, or behavior. |
| 3 | `trm_4a3fd79d09ee6` | conversational skill | — | Ability to engage in appropriate communication of sentiments, observations, opinions, or ideas through dialogue. |
| 4 | `trm_4a3fd79d0a02c` | deception | — | an act to propagate beliefs that are not true, or not the whole truth (as in half-truths or omission). |
| 5 | `trm_4a3fd79d0b671` | emotional bonding | — | A process of bringing people together based on mutually shared emotions. |
| 6 | `trm_4a3fd79d0a84a` | lying | — | the expression of a falsehood |
| 7 | `trm_5154a9f45903f` | reception of facial communication | — | The capacity to perceive someoneâs emotional state non-verbally based on facial expressions. Examples include affect recognition, facial recognition and characterization. |
| 8 | `trm_4a3fd79d0af5a` | resource sharing | — | is a unique characteristic of humans and several primates that involve sharing resources such as food, shelter, etc., as a collective risk-reduction against variability in resource supply. |
| 9 | `trm_4a3fd79d0b13d` | social cognition | — | the encoding, storage, retrieval, and processing, in the brain, of information relating to conspecifics, or members of the same species. |
| 10 | `trm_4a3fd79d0b148` | social context | — | the identical or similar social positions and social roles as a whole that influence the individuals of a group. |
| 11 | `trm_4a3fd79d0b154` | social intelligence | — | the ability to function successfully in interpersonal situations. |
| 12 | `trm_4a3fd79d0b285` | stereotypes | — | something conforming to a fixed or general pattern; a standardized mental picture that is held in common by members of a group and that represents an oversimplified opinion, prejudiced attitude, or uncritical judgment. |
| 13 | `trm_4a3fd79d0b392` | theory of mind | `trm_4a3fd79d0b13d` social cognition | the ability for a person to connect emotional states to themselves and others and understand that other people may have different beliefs, desires, or intentions from one&#39;s self. It is intimately connected with the development of a person&#39;s ability to analyze and interpret the intentions of others. |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_4a3fd79d0b13d` — social cognition
- `trm_4a3fd79d0b392` — theory of mind

## 5. Padres `kind_of` externos a la categoría
No se detectaron padres externos para los términos de esta categoría.

## 6. Interpretación estructural
La categoría **Social Function** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
