# Cognitive Atlas — Perception (`ctp_C1`)
## 0. Propósito del documento
Este documento separa y describe los términos `trm_` que el archivo `cogat.owl` conecta directamente con la categoría superior **Perception** mediante la relación `skos:hasTopConcept`. No es una explicación externa del dominio: es una lectura ordenada de la distribución interna de la ontología.
## 1. Lectura rápida
- **Categoría superior:** `ctp_C1` — Perception
- **Definición registrada en la ontología:** Perception
- **TRM conectados directamente:** 94
- **TRM de esta categoría con relación `kind_of` hacia algún padre:** 46
- **Relaciones `kind_of` encontradas para esos TRM:** 59

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
| 1 | `trm_4a3fd79d096fc` | acoustic coding | — | a type of short term memory coding that represents the acoustic properties of the signal |
| 2 | `trm_4a3fd79d09707` | acoustic encoding | `trm_4a3fd79d0b8e5` encoding | the processing and encoding of auditory input for storage and later retrieval. |
| 3 | `trm_4a3fd79d0971e` | acoustic processing | — | the extraction of information from signals propagated undersea, in the atmosphere, or in the solid earth in the presence of acoustic noise. |
| 4 | `trm_4a3fd79d0b98a` | acuity | — | accuracy of perception. |
| 5 | `trm_4a3fd79d09770` | affect perception | — | The ability to understand a facial, vocal, or gestural behavior that serves as an indicator of emotion. |
| 6 | `trm_5159beaf80413` | animacy perception | `trm_4a3fd79d0ab7c` perception, `trm_4a3fd79d0b392` theory of mind | The ability to appropriately perceive that another entity is an agent (i.e., has a face, interacts contingently, and exhibits biological motion). |
| 7 | `trm_4a3fd79d09855` | apparent motion | `trm_4fb2c38960950` optical illusion, `trm_4a3fd79d0b4b5` visual perception | The illusory perception that movement is occurring in one or more static images. |
| 8 | `trm_4a3fd79d09953` | audiovisual perception | `trm_4a3fd79d0ab7c` perception | a single unified awareness derived from the integration of auditory and visual sensory processes when a audiovisual stimulus is present. |
| 9 | `trm_4a3fd79d0995e` | audition | — | the sense or act of hearing. |
| 10 | `trm_4a3fd79d09a61` | auditory grouping | — | joining disparate sounds together into one percept; assessing which acoustic streams belong together |
| 11 | `trm_4a3fd79d09a8f` | auditory localization | `trm_5521a0512df9a` localization | a listener&#39;s ability to identify the location or origin of a detected sound. |
| 12 | `trm_4a3fd79d09a9b` | auditory masking | — | the perception of one sound is affected by the presence of another sound; presenting a sound to interfere with or terminate a target sound |
| 13 | `trm_4a3fd79d09ab2` | auditory perception | `trm_4a3fd79d0ab7c` perception | The ability to identify, interpret, and attach meaning to sound. |
| 14 | `trm_4a3fd79d09abe` | auditory scene | — | auditory scene analysis is the process by which the human auditory system organizes sound into perceptually meaningful elements. |
| 15 | `trm_4a3fd79d09ae1` | auditory stream segregation | — | the perceptual grouping of sounds to form coherent representations of objects in the acoustic scene; a fundamental aspect of hearing and speech perception. |
| 16 | `trm_557b474e2b578` | auditory tone detection | `trm_4a3fd79d09ab2` auditory perception, `trm_5519b80525e89` stimulus detection | determining the presence of an auditory stimulus such as a sound or tone |
| 17 | `trm_557b476527a27` | auditory tone discrimination | `trm_4a3fd79d09ab2` auditory perception, `trm_5519b7525d7a2` discrimination | It is the ability to perceive and respond to differences among auditory stimuli |
| 18 | `trm_55ef273a77a86` | auditory tone perception | `trm_4a3fd79d09ab2` auditory perception | the registration of an auditory tone |
| 19 | `trm_4a3fd79d09b9c` | binocular convergence | `trm_4fea04a02ce37` binocular depth cue | when you look at an object that is closer than approximately 25 feet, your eyes must converge on the object to perceive it as a single object clearly in focus.&#34; |
| 20 | `trm_4a3fd79d09bb3` | binocular disparity | — | the difference in image location of an object seen by the left and right eyes, resulting from the eyes&#39; horizontal separation. The brain uses binocular disparity to extract depth information from the two-dimensional retinal images in stereopsis. |
| 21 | `trm_4a3fd79d09bbf` | binocular vision | — | is vision in which both eyes are used together. Having two eyes confers at least four advantages over having one. First, it gives a creature a spare eye in case one is damaged. Second, it gives a wider field of view. Third, it gives binocular summation in which the ability to detect faint objects is enhanced. Fourth it can give stereopsis in which parallax provided by the two eyes&#39; different positions on the head give precise depth perception. Such binocular vision is usually accompanied by singleness of vision or binocular fusion, in which a single image is seen despite each eye&#39;s having its own image of any object. Other phenomena of binocular vision include utrocular discrimina... |
| 22 | `trm_4a3fd79d09bcb` | bitterness | — | being or inducing the one of the four basic taste sensations that is peculiarly acrid, astringent, or disagreeable; marked by intensity or severity; marked by cynicism and rancor; intensely unpleasant especially in coldness or rawness; expressive of severe pain, grief, or regret. |
| 23 | `trm_4a3fd79d09c1c` | categorical perception | — | A form of perception in which the individual perceives a categorical distinction rather than a continuous scale of a varying perceptual feature. |
| 24 | `trm_4a3fd79d09c80` | chemonociception | — | perception of stimulation by noxious chemical agents |
| 25 | `trm_4a3fd79d09c97` | chromatic contrast | — | When a small patch is surrounded by a color field, the patch appears to be tinted in the opponent color of the surrounding field. |
| 26 | `trm_4a3fd79d09d93` | color perception | — | The process of distinguishing objects based on the wavelengths of the light they reflect or emit. |
| 27 | `trm_557b478ce1c24` | color recognition | `trm_4a3fd79d09d93` color perception, `trm_557b4b7176394` visual recognition | assigning a detected color stimulus into a category (not necessarily task defined) |
| 28 | `trm_4a3fd79d09e13` | conflict detection | `trm_55ce70b20186b` detection | arises in the presence of concurrently active, mutually exclusive representations |
| 29 | `trm_4a3fd79d0a095` | depth cue | — | Depth perception arises from a variety of depth cues. These are typically classified into binocular cues that require input from both eyes and monocular cues that require the input from just one eye. Binocular cues include stereopsis, yielding depth from binocular vision through exploitation of parallax. Monocular cues include size: distant objects subtend smaller visual angles than near objects. A third class of cues requires synthetic integration of binocular and monocular cues. |
| 30 | `trm_4a3fd79d0a0a1` | depth perception | `trm_4a3fd79d0ab7c` perception | Ability to perceive the visual world in three dimensions. |
| 31 | `trm_55ce70b20186b` | detection | `trm_4a3fd79d0ab7c` perception | to determine the presence of a stimulus |
| 32 | `trm_5519b7525d7a2` | discrimination | `trm_4a3fd79d0ab7c` perception | Responding differently to stimuli that differ in some aspect |
| 33 | `trm_4a3fd79d0b996` | echolocation | — | the general method of locating objects by determining the time for an echo to return and the direction from which it returns, used by some animals |
| 34 | `trm_4a3fd79d0b9a1` | edge detection | `trm_4a3fd79d0b9ad` feature detection | a fundamental tool in image processing and computer vision, particularly in the areas of feature detection and feature extraction, which aim at identifying points in a digital image at which the image brightness changes sharply or more formally has discontinuities. |
| 35 | `trm_557b482a7c62b` | emotional face recognition | `trm_4a3fd79d0b665` emotion recognition, `trm_557b4b154e0d9` visual face recognition | The process of determining whether an emotional face is the same as another face that has been previously encountered. |
| 36 | `trm_4a3fd79d0a300` | face perception | — | The processes by which faces are identified as such. |
| 37 | `trm_4a3fd79d0b9ad` | feature detection | `trm_55ce70b20186b` detection | a process of recognizing specific aspects of a stimulus, such as lines, edges, angle, or movement. |
| 38 | `trm_4a3fd79d0a32f` | feature extraction | — | Processes by which relevant aspects of a data stream are separated from irrelevant aspects. |
| 39 | `trm_4a3fd79d0b9d1` | figure ground reversal | — | Occurs in certain visual illusions (e.g., Vases and Faces or &#34;Rubin&#39;s Vase&#34;) in which there are multiple valid figure-ground segmentations that can be selected depending on an observer&#39;s interpretation. |
| 40 | `trm_4a3fd79d0b9dd` | figure ground segregation | — | Discriminating objects from their surroundings by the visual system. |
| 41 | `trm_4a3fd79d0a398` | form perception | — | the sensory discrimination of a pattern, shape or outline. |
| 42 | `trm_4a3fd79d0a402` | gestalt | — | a collection of physical, biological, psychological or symbolic entities that creates a unified concept, configuration or pattern which is greater than the sum of its parts (of a character, personality, or being). |
| 43 | `trm_4a3fd79d0b9e9` | gustation processing | `trm_4a3fd79d0ab7c` perception | Form of chemoreception that facilitates taste perception. |
| 44 | `trm_4a3fd79d0a477` | gustatory perception | — | The processes involved with representing gustatory sensations as such. |
| 45 | `trm_AGb7jCLHtJ1sj` | imagined emotional pain | `trm_4b65259eeee34` pain | emotional pain caused by ideation of emotional distress |
| 46 | `trm_LWGVPX20JubrD` | imagined pain | `trm_4b65259eeee34` pain | psychological-induced pain, i.e. pain in the absence of unpleasant stimulus |
| 47 | `trm_MIl7ueSc43aen` | imagined physical pain | `trm_LWGVPX20JubrD` imagined pain | bodily pain caused by ideation of physical suffering |
| 48 | `trm_4a3fd79d0a73a` | kinesthesia | `trm_4a3fd79d0b160` somatosensation | a sense mediated by receptors located in muscles, tendons, and joints and stimulated by bodily movements and tensions. |
| 49 | `trm_5521a0512df9a` | localization | — | write definition here |
| 50 | `trm_4a3fd79d0a886` | melody | — | a linear succession of musical tones which is perceived as a single entity. |
| 51 | `trm_4a3fd79d0a8fc` | mental imagery | `trm_4f4511e519b53` imagination | is an experience that, on most occasions, significantly resembles the experience of perceiving (through any of the senses) of some object, event, or scene, but occurs when the relevant object, event, or scene is not actually present to the senses. |
| 52 | `trm_4a3fd79d0a914` | mental rotation | — | Ability to rotate an object in one&#39;s mind; ability to make perceptual judgments on a new spatial configuration of an object. |
| 53 | `trm_557b48aeb7d58` | motion detection | `trm_55ce70b20186b` detection | to determine the presence of motion. |
| 54 | `trm_4e31d3ba7d25b` | multisensory | — | a process associated with multiple sensory modalities |
| 55 | `trm_4e31ced566649` | multisensory integration | — | The process by which unisensory signals are combined to form a new product. It is operationally defined as a multisensory response (neural or behavioral) that is significantly different from the responses evoked by the modality-specific component stimuli |
| 56 | `trm_yeQ7crXFocNza` | music perception | `trm_4a3fd79d0ab7c` perception | the conscious experience of discriminate music among all types of sensory stimuli. |
| 57 | `trm_4a3fd79d0aa00` | navigation | — | The process of controlling the movement of a body/entity/vehicle through space from one point to another. |
| 58 | `trm_4a3fd79d0aa0c` | nociception | `trm_4fe39e4388409` interoception, `trm_4a3fd79d0b160` somatosensation | the processes of encoding and processing noxious stimuli. |
| 59 | `trm_Vn5ZVrIz7GedN` | numerosity | — | non-symbolic number sense of percepts |
| 60 | `trm_4a3fd79d0aa76` | object detection | `trm_5519b80525e89` stimulus detection | deals with detecting instances of semantic objects of a certain class (such as humans, buildings, cars, etc.). |
| 61 | `trm_4a3fd79d0aaa4` | object perception | `trm_4a3fd79d0ab7c` perception | The process of transforming basic visual sensory input (such as contrast, edge, motion, color etc) into a more abstract and semantically identifiable whole. |
| 62 | `trm_4a3fd79d0aab0` | object recognition | `trm_4a3fd79d0b967` recognition | is the ability to perceive an objectâs physical properties (such as shape, colour and texture) and apply semantic attributes to the object, which includes the understanding of its use, previous experience with the object and how it relates to others. |
| 63 | `trm_4a3fd79d0aabc` | olfaction | — | the sense of smell; the act or process of smelling. |
| 64 | `trm_4a3fd79d0aac8` | olfactory perception | `trm_4a3fd79d0ab7c` perception | the sensation that results when olfactory receptors in the nose are stimulated by particular chemicals in gaseous form. |
| 65 | `trm_4a3fd79d0ab65` | pattern recognition | `trm_4a3fd79d0b967` recognition | The process of identifying a meaningful pattern in raw data. |
| 66 | `trm_4a3fd79d0ab7c` | perception | — | the conscious experience or mental registration of a sensory stimulus |
| 67 | `trm_4a3fd79d0ab88` | perceptual binding | — | is the cognitive ability to couple characteristics between items that one is perceiving. This can be illustrated by the one observing a blue square and a yellow circle. Through the neural mechanisms of perceptual binding, one can ensure that the sensing of blue is coupled to that of a square shape and that of yellow is coupled to that of a circle. |
| 68 | `trm_4a3fd79d0ab93` | perceptual categorization | — | A selective system that can have no a priori information about the particular stimuli that might be encountered in its environment, other than boundary conditions implicit in the construction of its recognizing elements. Perceptual categorization, according to this view, does not involve the &#34;reading in&#34; of readily available information about the stimulus category; rather, it involves the utilization of multiple cues in degenerate, overlapping sets and under the influence of context. |
| 69 | `trm_4a3fd79d0ab9f` | perceptual fluency | — | is the ease at which the brain can process information. |
| 70 | `trm_4a3fd79d0abaa` | perceptual identification | — | has two different processing stages. The first stage yields a state of of perceptual information about the stimulus presented. The second stage is the processing of attained perceptual information in a response. |
| 71 | `trm_4a3fd79d0abc1` | perceptual similarity | — | Perceptual similarity is the subjective similarity between two stimuli as perceived by the observer. Thus, object A may be rated as more similar to object B than to object C despite a greater difference in some physical metric (such as height or width) between objects A and C than between objects A and B. This may differ across modalities: for example, two objects may be rated as more similar when seen than when touched. However, the physical, objective similarity between the two objects remains the same regardless of which modality is used to explore them. |
| 72 | `trm_4a3fd79d0abcd` | perceptual skill | — | The ability to observe and understand the events surrounding an individual. |
| 73 | `trm_4a3fd79d0ad4c` | preconscious perception | — | is the subthreshold process of visual perception. |
| 74 | `trm_4a3fd79d0ae3d` | proprioception | `trm_4a3fd79d0b160` somatosensation | the sense of the relative position of neighboring parts of the body. |
| 75 | `trm_4a3fd79d0afc3` | rhythm | — | Movement marked by the regulated succession of strong and weak elements, or of opposite or different conditions. While rhythm most commonly applies to sound, such as music and spoken language, it may also refer to visual presentation, as timed movement through space. |
| 76 | `trm_4a3fd79d0b160` | somatosensation | `trm_4a3fd79d0ab7c` perception | the components of the central and peripheral nervous systems that receive and interpret sensory information from organs in the joints, ligaments, muscles, and skin. This system processes information about the length, degree of stretch, tension, and contraction of muscles; pain; temperature; pressure; and joint position. |
| 77 | `trm_4a3fd79d0b1a6` | spatial ability | — | skill in perceiving the visual world, transforming and modifying initial perceptions, and mentally recreating spatial aspects of one&#39;s visual experience without the relevant stimuli. |
| 78 | `trm_4a3fd79d0b279` | stereopsis | `trm_4fea04a02ce37` binocular depth cue | the process in visual perception leading to the sensation of depth from the two slightly different projections of the world onto the retinas of the two eyes. |
| 79 | `trm_5519b80525e89` | stimulus detection | `trm_55ce70b20186b` detection | It is the ability to discern between information-bearing patterns and random patterns that distract from the information |
| 80 | `trm_4a3fd79d0b2bf` | subliminal perception | — | a visual or auditory message that is allegedly perceived psychologically, but not consciously; occurs when a stimulus is too weak to be perceived yet a person is influenced by it. |
| 81 | `trm_4e31e6dca01ca` | synchrony perception | `trm_4a3fd79d0ab7c` perception | the process of perceiving whether or not the crossmodal cues (e.g., audio and visual) to an event (e.g., audiovisual speech) are in temporal synchrony with each other. |
| 82 | `trm_4a3fd79d0b39d` | thermosensation | `trm_4a3fd79d0b160` somatosensation | the sensory perception of thermal stimuli. |
| 83 | `trm_KcaEi0Mc9grrz` | time perception | — | subjective experience, or sense, of time, which is measured by someone's own perception of the duration of the indefinite and unfolding of events. |
| 84 | `trm_4e31d365bc7e2` | unisensory | — | Describes any sensory process associated with a single sensory modality |
| 85 | `trm_4a3fd79d0b47b` | visual buffer | — | a short-term memory store for visual information |
| 86 | `trm_557b4b05ae470` | visual color discrimination | `trm_4a3fd79d09d93` color perception, `trm_5519b7525d7a2` discrimination | the identification of differences in color amongst visual stimuli |
| 87 | `trm_557b4b27dfd5e` | visual form discrimination | `trm_5519b7525d7a2` discrimination, `trm_4a3fd79d0a398` form perception, `trm_4a3fd79d0b4b5` visual perception | the identification of differences among visual forms. |
| 88 | `trm_557b4b3a6a34d` | visual form recognition | `trm_4a3fd79d0a398` form perception, `trm_4a3fd79d0b4b5` visual perception, `trm_557b4b7176394` visual recognition | assigning a detected visual form into a category, not necessarily task defined |
| 89 | `trm_5519b92bde7dc` | visual localization | `trm_5521a0512df9a` localization | Localization of visually perceived objects relative to other visually perceived objects (either simultaneously or successively) or relative to a visual norm, or by absolute identification. |
| 90 | `trm_4a3fd79d0b492` | visual masking | — | the reduction or elimination of the visibility of a brief a target stimulus by the presentation of a second stimulus (the mask) contiguous in space and/or time |
| 91 | `trm_4a3fd79d0b4a9` | visual object recognition | `trm_4a3fd79d0aab0` object recognition, `trm_557b4b7176394` visual recognition | is the process of identifying an object based on its visual attributes |
| 92 | `trm_4a3fd79d0b4b5` | visual perception | `trm_4a3fd79d0ab7c` perception | Visual perception is the ability to interpret the surrounding environment by processing information that is contained in visible light. The resulting perception is also known as eyesight, sight, or vision. |
| 93 | `trm_4a3fd79d0b4c1` | visual representation | `trm_4a3fd79d0a908` mental representation | An internal representation of visual information |
| 94 | `trm_wrOXIUJWEWEYf` | visual scene perception | `trm_4a3fd79d0b4b5` visual perception | Perceiving visual input — typically of a real-world scene — that contains multiple elements in a spatial layout (e.g., may have multiple objects and object relations, with a foreground and a background). |

## 4. Jerarquía interna visible por `kind_of`
Estas relaciones sólo incluyen padres que también aparecen dentro de la misma categoría superior.

### `trm_4a3fd79d09ab2` — auditory perception
- `trm_557b474e2b578` — auditory tone detection
- `trm_557b476527a27` — auditory tone discrimination
- `trm_55ef273a77a86` — auditory tone perception

### `trm_4a3fd79d09d93` — color perception
- `trm_557b478ce1c24` — color recognition
- `trm_557b4b05ae470` — visual color discrimination

### `trm_55ce70b20186b` — detection
- `trm_4a3fd79d09e13` — conflict detection
- `trm_4a3fd79d0b9ad` — feature detection
- `trm_557b48aeb7d58` — motion detection
- `trm_5519b80525e89` — stimulus detection

### `trm_5519b7525d7a2` — discrimination
- `trm_557b476527a27` — auditory tone discrimination
- `trm_557b4b05ae470` — visual color discrimination
- `trm_557b4b27dfd5e` — visual form discrimination

### `trm_4a3fd79d0b9ad` — feature detection
- `trm_4a3fd79d0b9a1` — edge detection

### `trm_4a3fd79d0a398` — form perception
- `trm_557b4b27dfd5e` — visual form discrimination
- `trm_557b4b3a6a34d` — visual form recognition

### `trm_LWGVPX20JubrD` — imagined pain
- `trm_MIl7ueSc43aen` — imagined physical pain

### `trm_5521a0512df9a` — localization
- `trm_4a3fd79d09a8f` — auditory localization
- `trm_5519b92bde7dc` — visual localization

### `trm_4a3fd79d0aab0` — object recognition
- `trm_4a3fd79d0b4a9` — visual object recognition

### `trm_4a3fd79d0ab7c` — perception
- `trm_5159beaf80413` — animacy perception
- `trm_4a3fd79d09953` — audiovisual perception
- `trm_4a3fd79d09ab2` — auditory perception
- `trm_4a3fd79d0a0a1` — depth perception
- `trm_55ce70b20186b` — detection
- `trm_5519b7525d7a2` — discrimination
- `trm_4a3fd79d0b9e9` — gustation processing
- `trm_yeQ7crXFocNza` — music perception
- `trm_4a3fd79d0aaa4` — object perception
- `trm_4a3fd79d0aac8` — olfactory perception
- `trm_4a3fd79d0b160` — somatosensation
- `trm_4e31e6dca01ca` — synchrony perception
- `trm_4a3fd79d0b4b5` — visual perception

### `trm_4a3fd79d0b160` — somatosensation
- `trm_4a3fd79d0a73a` — kinesthesia
- `trm_4a3fd79d0aa0c` — nociception
- `trm_4a3fd79d0ae3d` — proprioception
- `trm_4a3fd79d0b39d` — thermosensation

### `trm_5519b80525e89` — stimulus detection
- `trm_557b474e2b578` — auditory tone detection
- `trm_4a3fd79d0aa76` — object detection

### `trm_4a3fd79d0b4b5` — visual perception
- `trm_4a3fd79d09855` — apparent motion
- `trm_557b4b27dfd5e` — visual form discrimination
- `trm_557b4b3a6a34d` — visual form recognition
- `trm_wrOXIUJWEWEYf` — visual scene perception

## 5. Padres `kind_of` externos a la categoría
Estos padres aparecen como superiores de términos de esta categoría, pero no están conectados directamente a esta misma categoría superior en el conjunto `hasTopConcept` usado aquí. Esto muestra que la ontología no opera como árbol limpio, sino como grafo.

### `trm_4fea04a02ce37` — binocular depth cue
- `trm_4a3fd79d09b9c` — binocular convergence
- `trm_4a3fd79d0b279` — stereopsis

### `trm_4a3fd79d0b665` — emotion recognition
- `trm_557b482a7c62b` — emotional face recognition

### `trm_4a3fd79d0b8e5` — encoding
- `trm_4a3fd79d09707` — acoustic encoding

### `trm_4f4511e519b53` — imagination
- `trm_4a3fd79d0a8fc` — mental imagery

### `trm_4fe39e4388409` — interoception
- `trm_4a3fd79d0aa0c` — nociception

### `trm_4a3fd79d0a908` — mental representation
- `trm_4a3fd79d0b4c1` — visual representation

### `trm_4fb2c38960950` — optical illusion
- `trm_4a3fd79d09855` — apparent motion

### `trm_4b65259eeee34` — pain
- `trm_AGb7jCLHtJ1sj` — imagined emotional pain
- `trm_LWGVPX20JubrD` — imagined pain

### `trm_4a3fd79d0b967` — recognition
- `trm_4a3fd79d0aab0` — object recognition
- `trm_4a3fd79d0ab65` — pattern recognition

### `trm_4a3fd79d0b392` — theory of mind
- `trm_5159beaf80413` — animacy perception

### `trm_557b4b154e0d9` — visual face recognition
- `trm_557b482a7c62b` — emotional face recognition

### `trm_557b4b7176394` — visual recognition
- `trm_557b478ce1c24` — color recognition
- `trm_557b4b3a6a34d` — visual form recognition
- `trm_4a3fd79d0b4a9` — visual object recognition

## 6. Interpretación estructural
La categoría **Perception** debe entenderse como una región de entrada al grafo del Cognitive Atlas. Su función no es agotar el dominio, sino agrupar términos que la ontología conecta explícitamente con ese campo. Para análisis más finos conviene usar simultáneamente tres capas: `hasTopConcept` para el dominio superior, `kind_of` para jerarquía interna y definiciones/contrastes/tareas para operacionalización empírica.

## 7. Advertencia de alcance
Este documento deriva de la lectura estructural del archivo `cogat.owl` y de los CSV extraídos previamente. No incorpora investigación bibliográfica adicional ni corrige manualmente la ontología. Si un término parece raro dentro de la categoría, debe tratarse como evidencia de la heterogeneidad del archivo, no como error necesariamente confirmado.
