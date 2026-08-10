# Cognitive Atlas — Reasoning and Decision Making (`ctp_C3`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Reasoning and Decision Making** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C3` — Reasoning and Decision Making
- **Definición registrada en la ontología:** Reasoning and Decision Making
- **TRM conectados directamente:** 64
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 30
- **Relaciones `kind_of` encontradas para esos TRM:** 31

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
| 1 | `trm_4a3fd79d096be` | abductive reasoning | `trm_4a3fd79d0aec1` reasoning | The process of adopting an explanatory hypothesis; inferring the cause A as a possible explanation for the consequence B |
| 2 | `trm_4a3fd79d096e3` | abstract analogy | `trm_4a3fd79d09827` analogy | high-level analogy that retains general information relevant to many specific instances |
| 3 | `trm_4a3fd79d096f0` | abstract knowledge | `trm_4a3fd79d0a746` knowledge | Knowledge that is general and not tied to a specific instance. |
| 4 | `trm_4a3fd79d09804` | analogical problem solving | — | using principles or concepts from a well-understood situation to solve problems in a new domain or area |
| 5 | `trm_4a3fd79d09810` | analogical reasoning | `trm_4a3fd79d0aec1` reasoning | a method of processing information that compares the similarities between new and understood concepts, then uses those similarities to gain understanding of the new concept; a form of inductive reasoning. |
| 6 | `trm_4a3fd79d0981b` | analogical transfer | — | The transfer of knowledge from one situation to another by finding a set of one-to-one correspondences between aspects of one body of information and aspects of another. |
| 7 | `trm_4a3fd79d09833` | anchoring | `trm_4a3fd79d09d58` cognitive heuristic | a cognitive bias that describes the common human tendency to rely too heavily, or &#34;anchor,&#34; on one trait or piece of information when making decisions. |
| 8 | `trm_557b471bc6cd8` | animacy decision | `trm_4a3fd79d0a038` decision making | decision about whether a stimulus exhibits animacy |
| 9 | `trm_4a3fd79d09b33` | availability heuristic | `trm_4a3fd79d09d58` cognitive heuristic | A heuristic in which people predict the frequency of classes or the probability of events based on the ease with which relevant instances come to mind. |
| 10 | `trm_4a3fd79d09b62` | backward chaining | — | an inference method used in automated theorem provers, proof assistants and other artificial intelligence applications. Backward chaining starts with a list of goals (or a hypothesis) and works backwards from the consequent to the antecedent to see if there is data available that will support any of these consequents. |
| 11 | `trm_4a3fd79d09bf9` | case based reasoning | — | the process of solving new problems based on the solutions of similar past problems. |
| 12 | `trm_4a3fd79d09c11` | categorical knowledge | `trm_4a3fd79d0a746` knowledge | knowledge about different attributes and uses of an object that allows it to be placed in a group of objects with similar attributes and uses. |
| 13 | `trm_4a3fd79d09c28` | categorization | `trm_4a3fd79d0a038` decision making | The assignment of a stimulus to one of a set of categories |
| 14 | `trm_4a3fd79d09c34` | category based induction | — | requires that information about one set of categories is used to infer something about another category. A set of premises establishes that one or more categories possess a certain property. The premises are followed by an assertion (the conclusion) that a target category also possesses that property. |
| 15 | `trm_4a3fd79d09c5b` | causal inference | `trm_4a3fd79d0a5ed` inference | The process of inferring that one state/object/event causes the occurrence of another state/object/event. |
| 16 | `trm_4a3fd79d09d58` | cognitive heuristic | — | are simple, efficient rules, hard-coded by evolutionary processes or learned, which have been proposed to explain how people make decisions, come to judgments, and solve problems, typically when facing complex problems or incomplete information. These rules work well under most circumstances, but in certain cases lead to systematic errors or cognitive biases. |
| 17 | `trm_4a3fd79d09e07` | conditional reasoning | `trm_4a3fd79d0aec1` reasoning | the reasoner must draw a conclusion based on a conditional, or âifâ¦then,â proposition. |
| 18 | `trm_55ef153d47bc0` | confidence judgment | `trm_558c736199abd` subjective value judgment | Assessing the confidence or certainty of a decision |
| 19 | `trm_56798c5f25b0c` | context representation | `trm_4a3fd79d0a908` mental representation | The representation of features other than the primary stimulus that are relevant to a decision |
| 20 | `trm_4a3fd79d09f36` | creative problem solving | — | the mental process of independently creating a solution to a problem without learned assistance. |
| 21 | `trm_4a3fd79d09f64` | crystallized intelligence | — | the ability to utilize previously acquired knowledge and experience. |
| 22 | `trm_4a3fd79d0b61f` | decision | — | The outcome of a process during which a choice is made, usually between several possible options |
| 23 | `trm_557b47abe9a34` | decision certainty | — | the confidence of knowledge regarding the likelihood of an outcome. |
| 24 | `trm_4a3fd79d0a038` | decision making | — | The deliberate selection of a single alternative amongst multiple alternatives. |
| 25 | `trm_567982752ff4a` | decision under uncertainty | `trm_4a3fd79d0b61f` decision | A decision in which the likelihood of possible outcomes is unknown or uncertain. |
| 26 | `trm_4a3fd79d0a066` | deductive inference | `trm_4a3fd79d0a5ed` inference | A type of inference in which the conclusion always follows from the stated premises.If the premises are true, then the conclusion is valid. |
| 27 | `trm_4a3fd79d0a072` | deductive reasoning | `trm_4a3fd79d0aec1` reasoning | is reasoning which constructs or evaluates deductive arguments. Deductive arguments are attempts to show that a conclusion necessarily follows from a set of premises or hypotheses. |
| 28 | `trm_4fa28299dbddd` | deliberation | — | the process of judging the merits of multiple options, which may then be followed by choice. |
| 29 | `trm_4a3fd79d0a10a` | divergent thinking | — | a thought process or method used to generate creative ideas by exploring many possible solutions. |
| 30 | `trm_557b4891e9265` | feature comparison | `trm_4a3fd79d0a038` decision making | Comparison of stimuli based on a shared feature. |
| 31 | `trm_4a3fd79d0a375` | fluid intelligence | — | a factor of general intelligence originally identified by Raymond Cattell; Cattell defined fluid intelligence as &#34;â¦the ability to perceive relationships independent of previous specific practice or instruction concerning those relationships.&#34; Fluid intelligence is the ability to think and reason abstractly and solve problems. This ability is considered independent of learning, experience, and education. |
| 32 | `trm_4a3fd79d0b636` | framing | — | Framing is a method of biasing opinions- a framing effect occurs when the description of information, such as a speaker presenting an issue, has an emphasis on a subset of potentially <br /> relevant considerations and causes individuals to focus on these considerations when constructing their opinions. |
| 33 | `trm_4a3fd79d0a3a4` | functional fixedness | — | a cognitive bias that limits a person to using an object only in the way it is traditionally used. |
| 34 | `trm_4a3fd79d0a3f6` | generic knowledge | — | Generic knowledge is knowledge that is applicable not just to a single entity but to a class of entities. |
| 35 | `trm_4a3fd79d0a4be` | heuristic search | — | refers to experience-based techniques for problem solving, learning, and discovery. Heuristic methods are used to speed up the process of finding a good enough solution, where an exhaustive search is impractical. Examples of this method include using a &#34;rule of thumb&#34;, an educated guess, an intuitive judgment, or common sense. In more precise terms, heuristics are strategies using readily accessible, though loosely applicable, information to control problem solving in human beings and machines |
| 36 | `trm_4a3fd79d0a4c9` | hill climbing | — | A fast but sometimes unreliable optimization method. When searching for the minimum/maximum value of a function a random step is taken; if the value improves it replaces the current value, then another random step is taken. |
| 37 | `trm_4a3fd79d0a562` | incubation | — | the process of thinking about a problem subconsciously while being involved in other activities |
| 38 | `trm_4a3fd79d0a590` | inductive reasoning | `trm_4a3fd79d0a5ed` inference, `trm_4a3fd79d0aec1` reasoning | reasoning from a specific case or cases and deriving a general rule, drawing inferences from observations in order to make generalizations. |
| 39 | `trm_4a3fd79d0a5ed` | inference | `trm_4a3fd79d0a038` decision making | the act of passing from one proposition, statement, or judgment considered as true to another whose truth is believed to follow from that of the former; the act of passing from statistical sample data to generalizations (as of the value of population parameters) usually with calculated degrees of certainty. |
| 40 | `trm_4a3fd79d0a62b` | insight | — | In problem solving, the moment at which an underlying relation between cause and effect is discovered/identified. |
| 41 | `trm_4a3fd79d0a666` | intelligence | — | the ability to learn or understand or to deal with new or trying situations; the skilled use of reason; the ability to apply knowledge to manipulate one&#39;s environment or to think abstractly as measured by objective criteria |
| 42 | `trm_4a3fd79d0a723` | judgment | — | the process of forming an opinion or evaluation by discerning and comparing |
| 43 | `trm_4a3fd79d0a80f` | logic | — | a science that deals with the principles and criteria of validity of inference and demonstration; the science of the formal principles of reasoning. |
| 44 | `trm_4a3fd79d0a81b` | logical reasoning | `trm_4a3fd79d0aec1` reasoning | The strategy when one uses deduction, induction, or abduction to evaluate preconditions and rules to determnie a conclusion. |
| 45 | `trm_4a3fd79d0a83f` | loss aversion | — | The tendency of individuals to be more sensitive to the possibility of losing objects or money than they are to the possibility of gaining the same objects or amounts of money. |
| 46 | `trm_4a3fd79d0a862` | mathematical reasoning | `trm_4a3fd79d0aec1` reasoning | Reasoning about mathematical objects |
| 47 | `trm_4a3fd79d0a87a` | mechanical reasoning | `trm_4a3fd79d0aec1` reasoning | Reasoning about mechanical objects or functions |
| 48 | `trm_4a3fd79d0a8ed` | mental arithmetic | — | mathematical calculations done mentally, without writing them down. |
| 49 | `trm_559f0a5b4cd36` | monetary reward prediction error | — | the difference between expected and received monetary reward |
| 50 | `trm_5678a999f1c19` | numerical comparison | `trm_555cfb890d721` relational comparison | Mental comparison of numerical quantities |
| 51 | `trm_557b48f22ba99` | numerical scale judgment | — | ADD DEFINITION HERE |
| 52 | `trm_4a3fd79d0ad12` | pragmatic inference | `trm_4a3fd79d0a5ed` inference | Inferences are made when a person (or machine) goes beyond available evidence to form a conclusion. A pragmatic inference (also known as an inductive inference) is one which is likely to be true because of the state of the world. Unlike deductive inferences, pragmatic (inductive) inferences do yield conclusions that increase the semantic information over and above that found in the initial premises. |
| 53 | `trm_4a3fd79d0ad29` | pragmatic reasoning | `trm_4a3fd79d0aec1` reasoning | Pragmatic reasoning is defined as the process of finding the intended meaning(s) of the given, and it is suggested that this amounts to the process of inferring the appropriate context(s) in which to interpret the given. |
| 54 | `trm_4a3fd79d0adb7` | problem solving | `trm_4a3fd79d0aec1` reasoning | Broadly, the mental processes involved in finding a solution to a problem. |
| 55 | `trm_4a3fd79d0aec1` | reasoning | `trm_4a3fd79d0a038` decision making | drawing of inferences or conclusions through the use of reason. |
| 56 | `trm_4a3fd79d0afcf` | risk | — | Formally and mathematically speaking, the minimal definition of risk is what (Rothschild and Stiglitz, 1970) call a mean-preserving increase in dispersion. A typical example is a gamble offering $400 or $600 based on the outcome of a coin flip (i.e. with equal probability (50%)); this is less risky as compared to a similar gamble offering $200 or $800 [again depending on the outcome of a coin flip]. Notice here that the mean outcome (or âexpected valueâ) remains the same for both gambles. Thus risk can increase by keeping both the probabilities and the expected value the same. There are other approaches to risk that are less mathematically stringent but have higher ecological validity... |
| 57 | `trm_557b4a913f8cc` | risk processing | — | the extraction of information about the potential or current risk associated with a stimulus |
| 58 | `trm_4a3fd79d0b64e` | risk seeking | — | The willingness of an individual to choose an option with a less-than-certain probability of reward over an option with a certain reward of equal or higher expected value. BEHAVIORAL PHENOMENA |
| 59 | `trm_4a3fd79d0b02c` | schema | — | a structured representation that includes a particular organized way of perceiving and responding to a complex situation or set of stimuli. |
| 60 | `trm_5595be14a57c5` | social inference | `trm_4a3fd79d0a5ed` inference | write definition here |
| 61 | `trm_559f09a5cdca9` | subjective food value | `trm_558c736199abd` subjective value judgment | Subjective food value is used as term to indicate a food&#39;s worth, based on an individuals&#39; current desires and needs (e.g., hunger). Subjective food value assessment is an intermediate step during food decision making. |
| 62 | `trm_558c736199abd` | subjective value judgment | `trm_4a3fd79d0a723` judgment | the process of comparing, at an idiosyncratic level, the relatively desirability of two or more options or the internal idiosyncratic value represented internally for such a judgement |
| 63 | `trm_4a3fd79d0b3fa` | uncertainty | — | the lack of knowledge regarding the likelihood of potential outcomes |
| 64 | `trm_4a3fd79d0b412` | utility | — | a measure of the subjective worth of an outcome. |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_4a3fd79d09d58` — cognitive heuristic
- `trm_4a3fd79d09833` — anchoring
- `trm_4a3fd79d09b33` — availability heuristic

### `trm_4a3fd79d0b61f` — decision
- `trm_567982752ff4a` — decision under uncertainty

### `trm_4a3fd79d0a038` — decision making
- `trm_557b471bc6cd8` — animacy decision
- `trm_4a3fd79d09c28` — categorization
- `trm_557b4891e9265` — feature comparison
- `trm_4a3fd79d0a5ed` — inference
- `trm_4a3fd79d0aec1` — reasoning

### `trm_4a3fd79d0a5ed` — inference
- `trm_4a3fd79d09c5b` — causal inference
- `trm_4a3fd79d0a066` — deductive inference
- `trm_4a3fd79d0a590` — inductive reasoning
- `trm_4a3fd79d0ad12` — pragmatic inference
- `trm_5595be14a57c5` — social inference

### `trm_4a3fd79d0a723` — judgment
- `trm_558c736199abd` — subjective value judgment

### `trm_4a3fd79d0aec1` — reasoning
- `trm_4a3fd79d096be` — abductive reasoning
- `trm_4a3fd79d09810` — analogical reasoning
- `trm_4a3fd79d09e07` — conditional reasoning
- `trm_4a3fd79d0a072` — deductive reasoning
- `trm_4a3fd79d0a590` — inductive reasoning
- `trm_4a3fd79d0a81b` — logical reasoning
- `trm_4a3fd79d0a862` — mathematical reasoning
- `trm_4a3fd79d0a87a` — mechanical reasoning
- `trm_4a3fd79d0ad29` — pragmatic reasoning
- `trm_4a3fd79d0adb7` — problem solving

### `trm_558c736199abd` — subjective value judgment
- `trm_55ef153d47bc0` — confidence judgment
- `trm_559f09a5cdca9` — subjective food value

## 5. Padres `kind_of` externos a la categoría
Estos padres aparecen como superiores de términos de esta categoría, pero no están conectados directamente a esta misma categoría superior en el conjunto `hasTopConcept` usado aquí. Esto muestra que la ontología no opera como árbol limpio, sino como grafo.

### `trm_4a3fd79d09827` — analogy
- `trm_4a3fd79d096e3` — abstract analogy

### `trm_4a3fd79d0a746` — knowledge
- `trm_4a3fd79d096f0` — abstract knowledge
- `trm_4a3fd79d09c11` — categorical knowledge

### `trm_4a3fd79d0a908` — mental representation
- `trm_56798c5f25b0c` — context representation

### `trm_555cfb890d721` — relational comparison
- `trm_5678a999f1c19` — numerical comparison

## 6. Interpretación estructural
La categoría **Reasoning and Decision Making** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
