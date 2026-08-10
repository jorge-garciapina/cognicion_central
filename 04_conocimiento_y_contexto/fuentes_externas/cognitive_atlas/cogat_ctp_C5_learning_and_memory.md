# Cognitive Atlas — Learning and Memory (`ctp_C5`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Learning and Memory** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C5` — Learning and Memory
- **Definición registrada en la ontología:** Learning and Memory
- **TRM conectados directamente:** 116
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 70
- **Relaciones `kind_of` encontradas para esos TRM:** 76

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
| 1 | `trm_4a3fd79d0b8b5` | active recall | — | a principle of efficient learning, which claims the need to actively stimulate memory during the learning process. |
| 2 | `trm_4a3fd79d0b8c1` | active retrieval | — | Effortful (volitional) attempt to consciously recollect a memory; often required when retrieval cannot be automatically driven by stimuli. |
| 3 | `trm_4a3fd79d09758` | adaptation | — | adjustment to environmental conditions; adjustment of a sense organ to the intensity or quality of stimulation; modification of an organism or its parts that makes it more fit for existence under the conditions of its environment. |
| 4 | `trm_4a3fd79d0ba19` | articulatory loop | `trm_4a3fd79d0ba60` rehearsal loop | one of the subsystems postulated in Alan Baddeleyâs multicomponent model of WORKING MEMORY, specialized for the temporary storage of verbal information. It consists of a phonological store and an articulatory rehearsal process. The phonological store can hold speech-based information, subject to a rapid decay. The articulatory rehearsal process can refresh the decaying representation by reading it off and feeding it back to the store. It also serves to convert visually presented information (such as written words) into phonological codes and register them into the phonological store. |
| 5 | `trm_4a3fd79d098a6` | articulatory rehearsal | `trm_4a3fd79d0ba54` rehearsal | the process of subvocally repeating material that is to be stored in memory. |
| 6 | `trm_4a3fd79d098c9` | association learning | `trm_565bce2791089` implicit learning | learning process in which two or more items or concepts become associated with each other; often used in relation to learned stimulus-response associations |
| 7 | `trm_4a3fd79d09a49` | auditory encoding | `trm_4a3fd79d0b8e5` encoding | the process of storing auditory information in memory. |
| 8 | `trm_4a3fd79d09a78` | auditory learning | — | learning of auditorily presented information |
| 9 | `trm_4a3fd79d09aa7` | auditory memory | `trm_4a3fd79d0a891` memory | the cognitive capacity of storing and retrieving information related to sound. |
| 10 | `trm_4a3fd79d09b04` | auditory working memory | `trm_4a3fd79d0b5a7` working memory | Working memory for auditory information |
| 11 | `trm_4a3fd79d09b10` | autobiographical memory | `trm_4a3fd79d0a1f4` episodic memory | a memory system consisting of episodes recollected from an individualâs life, based on a combination of episodic (personal experiences and specific objects, people and events experienced at particular time and place) and semantic (general knowledge and facts about the world) memory. |
| 12 | `trm_4a3fd79d09b28` | automaticity | — | behavior performed without intention |
| 13 | `trm_4a3fd79d09b3f` | aversive learning | — | behavior modification using an adverse stimulus in response to the inappropriate or undesirable behavior. |
| 14 | `trm_557b477b4a15f` | body maintenance | `trm_55b6b9d7c9435` working memory maintenance | keeping information about the body in active and immediately accessible state. |
| 15 | `trm_4a3fd79d09c05` | categorical clustering | — | the clustering of recalled items based on category membership |
| 16 | `trm_4a3fd79d09c3f` | category learning | — | is a strategy which requires a learner to compare and contrast groups or categories that contain concept-relevant features with groups or categories that do not contain concept-relevant features. |
| 17 | `trm_4a3fd79d09ca3` | chunk | — | Structure in memory that is used as a unit of knowledge representation. Also refers to the process of learning by which these units are acquired. |
| 18 | `trm_4a3fd79d09dc1` | concept learning | — | Concept learning, also known as category learning and concept attainment, is largely based on the works of the cognitive psychologist Jerome Bruner. Bruner, Goodnow, & Austin (1967) defined concept attainment (or concept learning) as &#34;the search for and listing of attributes that can be used to distinguish exemplars from non exemplars of various categories.&#34; More simply put, concepts are the mental categories that help us classify objects, events, or ideas and each object, event, or idea has a set of common relevant features. Thus, concept learning is a strategy which requires a learner to compare and contrast groups or categories that contain concept-relevant features with groups... |
| 19 | `trm_4a3fd79d09dcd` | conceptual category | — | a way of organizing information, generally derived from experience; they can be part of a hierarchy, as in a taxonomy, or without, as in an alphabet. |
| 20 | `trm_4a3fd79d0b8cd` | consolidation | — | the process by which a representation becomes stabilized |
| 21 | `trm_4a3fd79d09e7b` | context dependent | — | is a class of memory that refers to improved recall of specific episodes or information when the context present at encoding and retrieval are the same. |
| 22 | `trm_4a3fd79d09e87` | context memory | `trm_4a3fd79d0a891` memory | refers to improved recall of specific episodes or information when the context present at encoding and retrieval are similar. |
| 23 | `trm_4a3fd79d09e9e` | contingency learning | — | Learning of the contingencies between different events |
| 24 | `trm_4a3fd79d09f70` | cue dependent forgetting | `trm_4a3fd79d0b908` forgetting | is the failure to recall a memory due to missing stimuli or cues that were present at the time the memory was encoded. |
| 25 | `trm_4a3fd79d0a021` | decay of activation | — | An explanation for why spreading activation, in network-based models of knowledge representation, peters out as a function of the distance between nodes. |
| 26 | `trm_4a3fd79d0a044` | declarative knowledge | `trm_4a3fd79d0a746` knowledge | Knowledge that is descriptive and includes knowing &#34;that&#34; rather than knowing &#34;how&#34; (can be expressed in declarative sentences). |
| 27 | `trm_4a3fd79d0a04f` | declarative memory | `trm_4a3fd79d0a833` long-term memory, `trm_4a3fd79d0a891` memory | Memory for facts, and that can be intentionally articulated in some manner. |
| 28 | `trm_4a3fd79d0a05b` | declarative rule | `trm_4a3fd79d0a044` declarative knowledge | A criterion for which one possesses declarative knowledge. Contrasts with an implicit or non-declarative rule, which one might follow but not represent as a rule or even be aware that they are following. |
| 29 | `trm_4a3fd79d0a07e` | deep processing | — | Evaluating a piece of information in terms of meaning or associations to other concepts as opposed to surface or incidental characteristics. |
| 30 | `trm_4a3fd79d0a0ff` | distributed coding | — | A type of coding in which the information that constitutes a concept (or mental representation) is spread amongst a number of constituent representations. |
| 31 | `trm_4b185801de7a1` | echoic memory | `trm_4a3fd79d09aa7` auditory memory | refers to the phenomenon in which there is a brief mental echo that continues to sound after an auditory stimulus has been heard. |
| 32 | `trm_4a3fd79d0b8d9` | elaborative rehearsal | — | a type of rehearsal proposed by Craik and Lockhart (1972) in their Levels of Processing model of memory. Elaborative rehearsal involves deep semantic processing of a to-be-remembered item resulting in the production of durable memories. |
| 33 | `trm_4a3fd79d0a1ae` | emotional memory | `trm_4a3fd79d0a891` memory | Emotional memory is the storage and recall of events and details that are couple with the physiological response that was present when the event occurred. |
| 34 | `trm_4a3fd79d0b8e5` | encoding | — | The process of creating a new memory trace. |
| 35 | `trm_4a3fd79d0b8f0` | episodic buffer | — | A theoretical construct that is part of Alan Baddeley&#39;s working memory model and the object of which is to integrate information across sensory domains and communicate with long term memory in the service of working memory. |
| 36 | `trm_4a3fd79d0a1e8` | episodic learning | — | a change in behavior that occurs as a result of an event; episodic learning is so named because events are recorded into episodic memory. |
| 37 | `trm_4a3fd79d0a1f4` | episodic memory | `trm_4a3fd79d0a04f` declarative memory | memory of autobiographical events (times, places, associated emotions, and other contextual knowledge) that can be explicitly stated. |
| 38 | `trm_4a3fd79d0a25e` | expertise | — | Having a highly cultivated level of skill in a particular domain. Occurs after prolonged experience in a domain. |
| 39 | `trm_4a3fd79d0a275` | explicit learning | `trm_4a3fd79d0a7bb` learning | Acquisition of skills and/or knowledge actively and with awareness. Typically such learning is accompanied by meta-awareness - individuals can explain how they acquired the skill/knowledge. |
| 40 | `trm_4a3fd79d0a281` | explicit memory | `trm_4a3fd79d0a04f` declarative memory | the conscious, intentional recollection of previous experiences and information. |
| 41 | `trm_4a3fd79d0a30c` | face recognition | `trm_4a3fd79d0b967` recognition, `trm_4a3fd79d0b4a9` visual object recognition | The process of determining whether a face is the same as another face that has been previously encountered. |
| 42 | `trm_4a3fd79d0a323` | false memory | — | a memory that refers to an event that did not actually occur |
| 43 | `trm_4a3fd79d0b8fc` | familiarity | — | A quality of memory that is associated with a feeling of knowing that an event has previously occurred, but often not including enough contextual or episodic details sufficient for claiming actual remembering of the event. |
| 44 | `trm_4a3fd79d0b908` | forgetting | — | The loss of or inability to retrieve a memory. |
| 45 | `trm_4a3fd79d0a3ea` | generalization | `trm_4a3fd79d0a5ed` inference | The act of transferring knowledge learned from one event to a novel event that is similar in some respect. |
| 46 | `trm_4a3fd79d0a460` | gustatory learning | `trm_4a3fd79d0b9e9` gustation processing, `trm_4a3fd79d0a7bb` learning | The formation of a knowledge representation that contains information about gustatory percepts. |
| 47 | `trm_4a3fd79d0a46b` | gustatory memory | — | the cognitive capacity of storing and retrieving information related to taste. |
| 48 | `trm_4a3fd79d0a483` | habit | — | An acquired pattern of behavior that often occurs automatically and is reliably triggered by some event or stimulus. |
| 49 | `trm_4a3fd79d0a48e` | habit learning | — | The process of acquiring a habit |
| 50 | `trm_4a3fd79d0a49a` | habit memory | — | the memory representation of a learned habit, generally thought to be represented as a stimulus-response association |
| 51 | `trm_4a3fd79d0a4f9` | iconic memory | `trm_4a3fd79d0b49e` visual memory | very brief sensory memory of some visual stimuli, that occur in the form of mental pictures. |
| 52 | `trm_4a3fd79d0a533` | implicit memory | `trm_4a3fd79d0a891` memory | Type of memory in which experiences increases performance of task without one&#39;s conscious awareness of these previous experiences. This type of memory applies to habit learning, skills, conditioning. |
| 53 | `trm_4a3fd79d0a556` | incidental learning | `trm_565bce2791089` implicit learning | Learning without explicit knowledge of doing so, but occurring through interaction with the environment (e.g., by observation/copying of behavior or response to reinforcement). |
| 54 | `trm_4a3fd79d0a642` | instrumental conditioning | — | a learning process in which the consequences of an action are used to modify aspects of that action thereafter; these aspects include form and frequency (including the likelihood of reoccurrence at all). |
| 55 | `trm_4a3fd79d0a64e` | instrumental learning | — | learning based on reward; a form of learning that takes place as a direct consequence of a reward or pleasant outcome for the learner. |
| 56 | `trm_4a3fd79d0a689` | intentional forgetting | `trm_4a3fd79d0b908` forgetting | the purposeful forgetting of information that is no longer needed. |
| 57 | `trm_4a3fd79d0a695` | intentional learning | `trm_4a3fd79d0a275` explicit learning | learning that is motivated with intention and is usually goal directed. |
| 58 | `trm_4a3fd79d0a6b9` | intermediate-term memory | `trm_4a3fd79d0a891` memory | a specialized term referring for information about a current task. |
| 59 | `trm_4a3fd79d0a746` | knowledge | — | information acquired and represented by a person through experience or education |
| 60 | `trm_4a3fd79d0a7bb` | learning | — | The process of acquiring new skills/knowledge/information |
| 61 | `trm_4a3fd79d0a833` | long-term memory | `trm_4a3fd79d0a891` memory | a system for permanently storing, managing, and retrieving information for later use, items of information stored as long-term memory may be available for a lifetime. |
| 62 | `trm_4a3fd79d0a891` | memory | — | The ability of an organism to use past events to inform/influence current actions |
| 63 | `trm_4a3fd79d0b914` | memory acquisition | — | is the process of storage and retrieval of new information in memory. |
| 64 | `trm_4a3fd79d0ba01` | memory retrieval | `trm_4a3fd79d0af94` retrieval | the process of accessing a stored memory |
| 65 | `trm_4a3fd79d0b938` | memory storage | — | The representation of information in the brain in a form that enables potential retrieval at a later time. |
| 66 | `trm_4a3fd79d0a92b` | metacognitive skill | — | a learners&#39; automatic awareness of their own knowledge and their ability to understand, control, and manipulate their own cognitive processes. |
| 67 | `trm_4a3fd79d0a995` | motor learning | — | the process of improving motor skills, the smoothness and accuracy of movements. |
| 68 | `trm_4a3fd79d0a9b9` | motor sequence learning | `trm_4a3fd79d0b0a6` sequence learning | The acquisition of knowledge regarding sequences of motor action |
| 69 | `trm_4a3fd79d0aa2f` | nondeclarative memory | `trm_4a3fd79d0a833` long-term memory | Memory acquired through experience and which can not be consciously articulated (such as by recall or recognition). This type of memory includes priming, conditioning, skill-acquisition, and habits. |
| 70 | `trm_557b4904ee26d` | object maintenance | `trm_4a3fd79d0ba30` maintenance | The process of keeping object information in active and immediately accessible state. |
| 71 | `trm_557b49206928b` | pattern maintenance | `trm_55b6b9d7c9435` working memory maintenance | The process of keeping pattern information in active and immediately accessible state. |
| 72 | `trm_4a3fd79d0ab70` | pavlovian conditioning | `trm_4a3fd79d098c9` association learning | a form of learning in which a stimulus (designated the &#34;conditional stimulus&#34; or CS and being one without inherent significance) is paired with an unconditional stimulus or US, so named because it is biologically significant (e.g. food, sex, drug, pain), until the participant responds to the former in a way that conveys its association of the two. Importantly, participant response may be different between the US and its paired CS. |
| 73 | `trm_4a3fd79d0abb6` | perceptual learning | `trm_4a3fd79d0a527` implicit learning, `trm_565bce2791089` implicit learning | long lasting improvement in performing perceptual (visual, auditory, tactile, olfactory or taste) tasks as a function of experience. |
| 74 | `trm_4a3fd79d0ba48` | phonological loop | `trm_4a3fd79d0ba60` rehearsal loop | deals with sound or phonological information and consists of two parts: a short-term phonological store with auditory memory traces that are subject to rapid decay and an articulatory rehearsal component that can revive the memory traces. |
| 75 | `trm_557b493133416` | place maintenance | `trm_55b6b9d7c9435` working memory maintenance | keeping information about a scene or place in active and immediately accessible state. |
| 76 | `trm_4a3fd79d0ad94` | primary memory | `trm_4a3fd79d0a891` memory | the temporary maintenance system for conscious processing of information. |
| 77 | `trm_4e89aebaa311d` | priming | `trm_565bce2791089` implicit learning, `trm_4a3fd79d0a533` implicit memory | Priming is the effect of prior exposure to a somehow (e.g. perceptually or semantically) related stimulus on the response to a subsequent stimulus. This effect may be positive and facilitatory (e.g. naming of an object is typically faster when that object has already been recently named) or negative and detrimental (e.g. slower response to a previously ignored stimulus). |
| 78 | `trm_4a3fd79d0adab` | proactive interference | — | the forgetting of information due to interference from the traces of events or learning that occurred prior to the materials to be remembered; occurs when in any given context, past memories inhibit an individualâs full potential to retain new memories. |
| 79 | `trm_4a3fd79d0adc3` | procedural knowledge | `trm_4a3fd79d0a746` knowledge | Knowledge exercised in the performance of a task/activity. Its acquisition or structure is often unavailable to the actor. |
| 80 | `trm_4a3fd79d0adcf` | procedural learning | `trm_565bce2791089` implicit learning | The acquisition of a skill or ability through practice which is not accessible to verbalization or conscious awareness. |
| 81 | `trm_4a3fd79d0ae70` | prospective memory | `trm_4a3fd79d0a891` memory | remembering to perform an intended action...prospective memory is self-initiated and does not operate directly on external stimuli. |
| 82 | `trm_4a3fd79d0ae87` | prototype | `trm_4a3fd79d0a908` mental representation | A most common, standard or basic mental representation of some category. |
| 83 | `trm_4a3fd79d0b95b` | recall | `trm_4a3fd79d0a891` memory | The process of retrieving previously stored information, done without the aid of external cues. |
| 84 | `trm_4a3fd79d0b967` | recognition | `trm_4a3fd79d0a891` memory | assigning a detected stimulus into a category (not necessarily task defined) |
| 85 | `trm_4a3fd79d0b972` | reconsolidation | `trm_4a3fd79d0b920` memory consolidation | the process of previously consolidated memories being recalled and actively consolidated, it is a distinct process that serves to maintain, strengthen and modify memories that are already stored in the long-term memory. |
| 86 | `trm_4a3fd79d0ba54` | rehearsal | — | The repetition of information in an attempt to maintain it longer in memory. |
| 87 | `trm_4a3fd79d0ba60` | rehearsal loop | — | or phonological loop, also called the phonetic loop or the articulatory loop, is the part of working memory that rehearses verbal information. It consists of two parts: a short-term phonological store with auditory memory traces that are subject to rapid decay and an articulatory rehearsal component that can revive the memory traces.The first component is a phonological memory store which can hold traces of acoustic or speech based material. Material in this short term store lasts about two seconds unless it is maintained through the use of the second subcomponent, articulatory subvocal rehearsal. Prevention of articulatory rehearsal results in very rapid forgetting (a process known as de... |
| 88 | `trm_557b4993a0fdd` | reinforcement learning | `trm_4a3fd79d0a7bb` learning | the modification of the value placed on potential stimulus/action combinations based on the outcomes associated with those actions in the past |
| 89 | `trm_4a3fd79d0aed8` | relational learning | `trm_4a3fd79d0a275` explicit learning | learning to differentiate among stimuli on the basis of relational properties (e.g., the larger of two stimuli) rather than absolute properties (e.g., the stimulus that has a given size). |
| 90 | `trm_4a3fd79d0aee4` | remote memory | `trm_4a3fd79d0a04f` declarative memory | memory for events of long ago as opposed to recent events. |
| 91 | `trm_4a3fd79d0aeef` | repressed memory | `trm_4a3fd79d0a891` memory | A memory (often traumatic) that is unavailable for recall. |
| 92 | `trm_4a3fd79d0af7d` | retention | `trm_4a3fd79d0b8e5` encoding | a preservation of the aftereffects of experience and learning that makes recall or recognition possible. Persistence of learned behavior or experience during a period when it is not being performed o r practiced. Retention is the second stage of memory after encoding and before retrival |
| 93 | `trm_4a3fd79d0af94` | retrieval | — | The process of accessing information from memory or other storage devices; the possibility of recovery, restoration, or rectification. Retrieval is the third stage of memory after encoding and retention. |
| 94 | `trm_4a3fd79d0afa0` | retrieval cue | — | An event or experience that facilitates retrieval of information from long-term memory because of its association to that information. |
| 95 | `trm_4a3fd79d0afab` | retroactive interference | `trm_4a3fd79d0a6ad` interference | impeded retrieval and performance of previously learnt information due to newly acquired and practiced information. |
| 96 | `trm_4b6525253c63f` | reward processing | `trm_4a3fd79d0a33b` feedback processing, `trm_557b493e4203a` positive feedback processing | A positive return for performance of a specific behavior. |
| 97 | `trm_4a3fd79d0affd` | rule learning | `trm_4a3fd79d0a7bb` learning | process in which a participant gradually acquires knowledge about a fixed but unstated standard that defines, for example, the acceptability of a response or membership of category |
| 98 | `trm_4a3fd79d0b09a` | sensory memory | `trm_4a3fd79d0a891` memory | brief storage of sensory information in each of the senses, which temporarily holds material (e.g., a perceptual experience) for recoding into another memory (such as short-term memory) or for comprehension. |
| 99 | `trm_4a3fd79d0b0a6` | sequence learning | `trm_4a3fd79d0a7bb` learning | learning of a sequence of items or responses in the precise order of their presentation. |
| 100 | `trm_4a3fd79d0b0b1` | serial learning | `trm_4a3fd79d0a275` explicit learning | The process of acquiring information in sequence and following an order that must be preserved at recall. |
| 101 | `trm_4a3fd79d0b0f7` | short-term memory | `trm_4a3fd79d0a891` memory | A limited-capacity and short-lasting representation of information in the mind. The duration of short-term memory is on the order of seconds, while its capacity is on the order of 4 to 9 independent items. |
| 102 | `trm_4a3fd79d0b11a` | skill | — | Proficiency, facility, or dexterity that is acquired or developed through training or experience. |
| 103 | `trm_4a3fd79d0b125` | skill acquisition | `trm_565bce2791089` implicit learning | The process of learning to perform a task or set of tasks with increasing facility. Typically implies the formation of procedural (as distinct from semantic or episodic) memories. |
| 104 | `trm_4a3fd79d0b18f` | source memory | `trm_4a3fd79d0a1f4` episodic memory | the episodic source from which a specific item was acquired (e.g., from a person, a book, or television (Schacter, Kaszniak, Kihlstrom, & Valdiserri, 1991, p. 559). |
| 105 | `trm_4a3fd79d0b19b` | source monitoring | — | The process of identifying the the source or context at acquisition of information that has been stored in memory. |
| 106 | `trm_4a3fd79d0b1d5` | spatial memory | `trm_4a3fd79d0a891` memory | the part of memory responsible for recording information about one&#39;s environment and its spatial orientation. |
| 107 | `trm_5024002a85b1f` | spontaneous recovery | — | recovery of a conditioned response following extinction, simply as a function of time |
| 108 | `trm_557b4acdee820` | string maintenance | `trm_55b6b9d7c9435` working memory maintenance | The process of keeping string (e.g., consonant) information in active and immediately accessible state. |
| 109 | `trm_4e416f1373936` | tactile working memory | `trm_4a3fd79d0b5a7` working memory | working memory for tactile information |
| 110 | `trm_557b4aeaeb744` | tool maintenance | `trm_55b6b9d7c9435` working memory maintenance | keeping information about a tool in active and immediately accessible state. |
| 111 | `trm_4a3fd79d0b3ef` | traumatic memory | `trm_4a3fd79d0a891` memory | A type of memory results from trauma experience, such as a natural disaster or violent events. |
| 112 | `trm_4a3fd79d0b457` | verbal memory | `trm_4a3fd79d0a891` memory | Recall based on spoken words. |
| 113 | `trm_4a3fd79d0b49e` | visual memory | `trm_4a3fd79d0a891` memory | a part of memory preserving some characteristics of our senses pertaining to visual experience. |
| 114 | `trm_557b4b7e68727` | visual place recognition | `trm_557b4b7176394` visual recognition | assigning a detected visual place or scene into a category, not necessarily task defined |
| 115 | `trm_557b4bb7cf05b` | word maintenance | `trm_55b6b9d7c9435` working memory maintenance | The process of keeping word information in active and immediately accessible state. |
| 116 | `trm_55b6b9a666604` | working memory updating | `trm_4c3e05903e4bb` updating | WRITE DEFINITION HERE |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_4a3fd79d098c9` — association learning
- `trm_4a3fd79d0ab70` — pavlovian conditioning

### `trm_4a3fd79d09aa7` — auditory memory
- `trm_4b185801de7a1` — echoic memory

### `trm_4a3fd79d0a044` — declarative knowledge
- `trm_4a3fd79d0a05b` — declarative rule

### `trm_4a3fd79d0a04f` — declarative memory
- `trm_4a3fd79d0a1f4` — episodic memory
- `trm_4a3fd79d0a281` — explicit memory
- `trm_4a3fd79d0aee4` — remote memory

### `trm_4a3fd79d0b8e5` — encoding
- `trm_4a3fd79d09a49` — auditory encoding
- `trm_4a3fd79d0af7d` — retention

### `trm_4a3fd79d0a1f4` — episodic memory
- `trm_4a3fd79d09b10` — autobiographical memory
- `trm_4a3fd79d0b18f` — source memory

### `trm_4a3fd79d0a275` — explicit learning
- `trm_4a3fd79d0a695` — intentional learning
- `trm_4a3fd79d0aed8` — relational learning
- `trm_4a3fd79d0b0b1` — serial learning

### `trm_4a3fd79d0b908` — forgetting
- `trm_4a3fd79d09f70` — cue dependent forgetting
- `trm_4a3fd79d0a689` — intentional forgetting

### `trm_4a3fd79d0a533` — implicit memory
- `trm_4e89aebaa311d` — priming

### `trm_4a3fd79d0a746` — knowledge
- `trm_4a3fd79d0a044` — declarative knowledge
- `trm_4a3fd79d0adc3` — procedural knowledge

### `trm_4a3fd79d0a7bb` — learning
- `trm_4a3fd79d0a275` — explicit learning
- `trm_4a3fd79d0a460` — gustatory learning
- `trm_557b4993a0fdd` — reinforcement learning
- `trm_4a3fd79d0affd` — rule learning
- `trm_4a3fd79d0b0a6` — sequence learning

### `trm_4a3fd79d0a833` — long-term memory
- `trm_4a3fd79d0a04f` — declarative memory
- `trm_4a3fd79d0aa2f` — nondeclarative memory

### `trm_4a3fd79d0a891` — memory
- `trm_4a3fd79d09aa7` — auditory memory
- `trm_4a3fd79d09e87` — context memory
- `trm_4a3fd79d0a04f` — declarative memory
- `trm_4a3fd79d0a1ae` — emotional memory
- `trm_4a3fd79d0a533` — implicit memory
- `trm_4a3fd79d0a6b9` — intermediate-term memory
- `trm_4a3fd79d0a833` — long-term memory
- `trm_4a3fd79d0ad94` — primary memory
- `trm_4a3fd79d0ae70` — prospective memory
- `trm_4a3fd79d0b95b` — recall
- `trm_4a3fd79d0b967` — recognition
- `trm_4a3fd79d0aeef` — repressed memory
- `trm_4a3fd79d0b09a` — sensory memory
- `trm_4a3fd79d0b0f7` — short-term memory
- `trm_4a3fd79d0b1d5` — spatial memory
- `trm_4a3fd79d0b3ef` — traumatic memory
- `trm_4a3fd79d0b457` — verbal memory
- `trm_4a3fd79d0b49e` — visual memory

### `trm_4a3fd79d0b967` — recognition
- `trm_4a3fd79d0a30c` — face recognition

### `trm_4a3fd79d0ba54` — rehearsal
- `trm_4a3fd79d098a6` — articulatory rehearsal

### `trm_4a3fd79d0ba60` — rehearsal loop
- `trm_4a3fd79d0ba19` — articulatory loop
- `trm_4a3fd79d0ba48` — phonological loop

### `trm_4a3fd79d0af94` — retrieval
- `trm_4a3fd79d0ba01` — memory retrieval

### `trm_4a3fd79d0b0a6` — sequence learning
- `trm_4a3fd79d0a9b9` — motor sequence learning

### `trm_4a3fd79d0b49e` — visual memory
- `trm_4a3fd79d0a4f9` — iconic memory

## 5. Padres `kind_of` externos a la categoría
Estos padres aparecen como superiores de términos de esta categoría, pero no están conectados directamente a esta misma categoría superior en el conjunto `hasTopConcept` usado aquí. Esto muestra que la ontología no opera como árbol limpio, sino como grafo.

### `trm_4a3fd79d0a33b` — feedback processing
- `trm_4b6525253c63f` — reward processing

### `trm_4a3fd79d0b9e9` — gustation processing
- `trm_4a3fd79d0a460` — gustatory learning

### `trm_4a3fd79d0a527` — implicit learning
- `trm_4a3fd79d0abb6` — perceptual learning

### `trm_565bce2791089` — implicit learning
- `trm_4a3fd79d098c9` — association learning
- `trm_4a3fd79d0a556` — incidental learning
- `trm_4a3fd79d0abb6` — perceptual learning
- `trm_4e89aebaa311d` — priming
- `trm_4a3fd79d0adcf` — procedural learning
- `trm_4a3fd79d0b125` — skill acquisition

### `trm_4a3fd79d0a5ed` — inference
- `trm_4a3fd79d0a3ea` — generalization

### `trm_4a3fd79d0a6ad` — interference
- `trm_4a3fd79d0afab` — retroactive interference

### `trm_4a3fd79d0ba30` — maintenance
- `trm_557b4904ee26d` — object maintenance

### `trm_4a3fd79d0b920` — memory consolidation
- `trm_4a3fd79d0b972` — reconsolidation

### `trm_4a3fd79d0a908` — mental representation
- `trm_4a3fd79d0ae87` — prototype

### `trm_557b493e4203a` — positive feedback processing
- `trm_4b6525253c63f` — reward processing

### `trm_4c3e05903e4bb` — updating
- `trm_55b6b9a666604` — working memory updating

### `trm_4a3fd79d0b4a9` — visual object recognition
- `trm_4a3fd79d0a30c` — face recognition

### `trm_557b4b7176394` — visual recognition
- `trm_557b4b7e68727` — visual place recognition

### `trm_4a3fd79d0b5a7` — working memory
- `trm_4a3fd79d09b04` — auditory working memory
- `trm_4e416f1373936` — tactile working memory

### `trm_55b6b9d7c9435` — working memory maintenance
- `trm_557b477b4a15f` — body maintenance
- `trm_557b49206928b` — pattern maintenance
- `trm_557b493133416` — place maintenance
- `trm_557b4acdee820` — string maintenance
- `trm_557b4aeaeb744` — tool maintenance
- `trm_557b4bb7cf05b` — word maintenance

## 6. Interpretación estructural
La categoría **Learning and Memory** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
