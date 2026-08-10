# Cognitive Atlas — Action (`ctp_C7`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Action** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C7` — Action
- **Definición registrada en la ontología:** Action
- **TRM conectados directamente:** 10
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 0
- **Relaciones `kind_of` encontradas para esos TRM:** 0

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
| 1 | `trm_4a3fd79d09735` | action | — | the bringing about of an alteration by force or through a natural agency; expression by means of attitude, voice, and gesture; a function of the body or one of its parts; an act of will; a thing done; the accomplishment of a thing usually over a period of time, in stages, or with the possibility of repetition. |
| 2 | `trm_4a3fd79d0b5c0` | action initiation | — | the facilitation or initiation of an act |
| 3 | `trm_4a3fd79d09764` | adaptive control | — | modifying the control law used by a controller to cope with the fact that the parameters of the system being controlled are slowly time-varying or uncertain. |
| 4 | `trm_4a3fd79d0a972` | motor control | — | The function of supervising motor activities |
| 5 | `trm_4a3fd79d0a9a1` | motor planning | — | the conception of a future motoric action |
| 6 | `trm_4a3fd79d0a9ad` | motor program | — | abstract representation of a movement |
| 7 | `trm_4a3fd79d0a9c4` | movement | — | change of place or position or posture |
| 8 | `trm_4a3fd79d0aa8d` | object manipulation | — | is a form of dexterity play or performance in which one or more artists physically interact with props such as balls, hoops, rings, poi, staff, devil sticks, or clubs. Object manipulation can be considered an advanced combinatorial form of sports, dance, and games. |
| 9 | `trm_557b4a7315f1b` | response execution | — | Performance of an action in accordance with task demands, enacting a specific overt behavior |
| 10 | `trm_4a3fd79d0af71` | response selection | — | The selection of one action from a limited set of possible actions. |

## 4. Jerarquía interna visible por `kind_of`
No se detectaron relaciones `kind_of` internas entre términos de esta misma categoría usando los CSV generados.

## 5. Padres `kind_of` externos a la categoría
No se detectaron padres externos para los términos de esta categoría.

## 6. Interpretación estructural
La categoría **Action** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
