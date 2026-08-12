# Ejemplo PIEA: textos

**Identificador del ejemplo:** `PIEA-EJ-TXT-001`  
**Versión del ejemplo:** `0.1.0`  
**Fecha:** `2026-08-11`  
**Paquete receptor:** `ART_patron_de_integracion_estructural_acumulativa`  
**Versión del paquete receptor:** `PIEA 0.2.0`  
**Ruta recomendada dentro del paquete:** `ejemplos/01_textos.md`  
**Estado:** `PROVISIONAL · instancia desarrollada para revisión humana`  
**Representación:** `SOURCE`  
**Autoridad:** `OUTPUT://`  
**Clasificación principal:** `CONFIRMED_INSTANCE`, limitada al nivel funcional de la reconstrucción interpretativa durante la lectura

---

## 1. Función de este documento

Este documento desarrolla los **textos** como una realización contextual del **Patrón de Integración Estructural Acumulativa** (`PIEA`). Su función no es modificar el núcleo del patrón, sino demostrar cómo la lectura de una manifestación textual puede producir una trayectoria de estados interpretativos dependientes de aportes parciales, del contexto operativo y de la organización alcanzada por el receptor.

La ecuación normativa del ejemplo es la ecuación nuclear de PIEA 0.2.0:

```math
S_{t+1}=\mathcal I_{\kappa_t}(S_t,u_t)
```

La tesis principal es:

> Durante una lectura efectiva, cada unidad textual disponible se integra desde una configuración interpretativa previa. Esa integración puede añadir, relacionar, reponderar, inhibir, sustituir o reinterpretar componentes ya construidos, de modo que el resultado de leer una unidad no depende exclusivamente de esa unidad aislada, sino también del estado alcanzado y de las condiciones bajo las que se procesa.

El ejemplo preserva cinco separaciones fundamentales:

1. la arquitectura conceptual del productor no equivale al texto realizado;
2. el texto realizado no equivale a la configuración reconstruida por el receptor;
3. el orden perceptible del texto no equivale a la forma multidimensional de la interpretación;
4. una descripción o resumen del estado interpretativo no equivale al estado completo;
5. la producción de una manifestación textual pertenece a una capa distinta de la transición PIEA que ocurre durante su integración.

La formulación consolidada es:

```txt
estructura conceptual del productor
→ configuración narrativa
→ manifestación textual
→ recorrido efectivo del receptor
→ integración de aportes parciales
→ configuración interpretativa reconstruida
→ posibles efectos pragmáticos y nuevas acciones
```

Sólo la región delimitada como transición de estado del receptor se modela directamente mediante PIEA. La producción de la manifestación textual puede relacionarse con ACCD, pero no debe introducirse dentro de `𝓘_{κ_t}` como si fuera la misma operación.

---

## 2. Resultado de la adaptación

### 2.1 Sistema principal

El sistema elegido para la instancia principal es:

```txt
X_TXT-R
= configuración interpretativa operativa de un receptor
  durante un episodio de lectura delimitado.
```

En este nivel:

```txt
S_t
= estado interpretativo relevante antes de integrar una unidad textual

u_t
= unidad perceptible o semiótica disponible para integración

κ_t
= condiciones lingüísticas, discursivas, atencionales, situacionales
  y epistémicas que modulan esa integración

𝓘_{κ_t}
= proceso funcional de admisión, decodificación, activación,
  vinculación, inferencia, reponderación y actualización

S_{t+1}
= configuración interpretativa posterior
```

### 2.2 Qué se afirma

Se afirma que una lectura pertenece a PIEA cuando puede mostrarse que:

- existe una configuración interpretativa antes de una unidad;
- la unidad puede distinguirse antes de ser integrada;
- el receptor la trata desde el estado ya alcanzado;
- las condiciones de lectura modulan el tratamiento;
- la integración produce una diferencia relevante;
- alguna consecuencia de esa diferencia alcanza una interpretación, expectativa, inferencia o acción posterior;
- el estado reconstruido no se reduce a una lista de palabras o frases leídas.

### 2.3 Qué no se afirma

Este ejemplo no afirma que:

- todo texto sea por sí mismo un sistema PIEA activo;
- cada palabra produzca una transición relevante;
- la lectura sea exclusivamente lineal;
- todos los lectores reconstruyan la misma estructura;
- el autor transfiera intacta su mente al receptor;
- el texto contenga materialmente una única interpretación completa;
- el mecanismo funcional descrito equivalga a una teoría neurobiológica exhaustiva;
- toda emoción, recuerdo o conducta posterior haya sido causada únicamente por el texto;
- la manifestación textual sea automáticamente `S_{t+1}`;
- PIEA produzca por sí mismo documentos, párrafos o narraciones.

---

## 3. Adaptación mediante FAC

### 3.1 Núcleo preservado

La adaptación conserva los invariantes de PIEA 0.2.0:

- sistema delimitable;
- estado previo relevante;
- aporte parcial diferenciable;
- integración y no mera coexistencia;
- dependencia del estado previo;
- condicionamiento contextual;
- estado posterior efectivo;
- persistencia selectiva de trayectoria;
- acumulación no reducible a suma o enumeración;
- trazabilidad de la transición.

### 3.2 Composición contextual

La configuración del caso se construye mediante las cuatro regiones de `FAC-Composicion-Contextual`.

#### Contexto de sujeto

- productor individual o colectivo del texto;
- receptor o comunidad de receptores;
- editores, traductores, diseñadores o mediadores;
- conocimientos, expectativas y capacidades lingüísticas relevantes;
- autoridad diferenciada entre autor, fuente, institución, narrador y lector;
- posibles objetivos de producción y lectura.

#### Contexto de medio

- página impresa;
- pantalla;
- libro, artículo, chat, subtítulo, pie de imagen o interfaz;
- tipografía y organización visual;
- disponibilidad de imágenes, tablas, enlaces, notas o grafos;
- navegación lineal, hipertextual, fragmentaria o asistida;
- persistencia física o digital del portador.

#### Contexto de distribución

- orden de presentación;
- segmentación en título, subtítulo, párrafos y secciones;
- acceso total o parcial al documento;
- circulación pública, privada, académica, periodística o técnica;
- aparición aislada, cita, recorte, captura o recontextualización;
- posibilidad de relectura, búsqueda, anotación y comparación.

#### Contexto de ejecución

- idioma y registro;
- género discursivo;
- propósito de lectura;
- tiempo disponible;
- atención efectiva;
- conocimientos previos accesibles;
- fuentes auxiliares;
- instrucciones de lectura;
- posición del fragmento dentro del documento;
- condiciones de credibilidad, incertidumbre y contraste;
- criterios bajo los que el receptor considera una interpretación suficiente.

### 3.3 Intención de intervención o estudio

La intención es explicar por qué una secuencia textual no debe modelarse como una simple fila de unidades independientes. Cada unidad se encuentra con una configuración ya organizada y puede:

1. incorporar una entidad nueva;
2. establecer una relación entre entidades previas;
3. resolver una referencia;
4. cambiar la interpretación de una unidad anterior;
5. elevar o reducir una hipótesis;
6. inhibir una lectura incompatible;
7. modificar la expectativa sobre lo que sigue;
8. comprimir varias unidades en una estructura más abstracta;
9. activar conocimiento que no estaba explícito en la superficie;
10. producir un efecto pragmático que influya en acciones posteriores.

### 3.4 Heurísticas de transformación

La adaptación utiliza estas heurísticas:

- mapear roles funcionales, no semejanzas temáticas;
- tomar como sistema principal al receptor en lectura, no al archivo inerte;
- definir la unidad ontológica según la integración efectiva, no según una división gramatical obligatoria;
- distinguir el orden inscrito en el portador del recorrido realmente realizado;
- representar el estado como configuración relacional y no como almacén literal;
- permitir relectura, anticipación, regresión y navegación no lineal;
- tratar títulos, imágenes, notas y paratextos como aportes posibles cuando sean efectivamente integrados;
- distinguir inferencias del receptor de afirmaciones explícitas del texto;
- conservar grados de confianza, ambigüedad y conflicto dentro del estado;
- separar producción textual, integración del receptor y descripción posterior de la interpretación;
- usar ACCD por referencia cuando se analice la manifestación producida;
- evitar atribuir procesos internos no observables cuando basta una descripción funcional.

### 3.5 Restricciones de salida

La adaptación prohíbe:

- identificar `texto = estructura conceptual`;
- identificar `significado = lista de palabras`;
- identificar `orden de frases = estructura final de comprensión`;
- identificar `interpretación del receptor = intención completa del autor`;
- tratar toda asociación activada como parte estable de `S_{t+1}`;
- usar el resumen del lector como copia exhaustiva del estado;
- confundir `κ_t` de PIEA con `φ_n` de ACCD;
- usar `𝓘_{κ_t}` como operador de redacción o proyección codominial;
- afirmar que una unidad no leída ya fue integrada sólo porque existe en el archivo;
- convertir una analogía sobre lectura en una teoría causal completa de la cognición;
- atribuir uniformidad interpretativa donde existen trayectorias o contextos diferentes;
- usar el último enunciado como explicación total cuando el estado previo es necesario.

---

## 4. Arquitectura completa: productor, texto y receptor

### 4.1 Sistema productor

En el lado productor puede distinguirse:

```txt
arquitectura conceptual
→ selección de relaciones relevantes
→ configuración narrativa o expositiva
→ realización lingüística y perceptible
```

La arquitectura conceptual puede contener actores, eventos, relaciones causales, jerarquías, oposiciones, incertidumbres, objetivos pragmáticos y criterios de relevancia. La configuración narrativa selecciona un recorrido posible por esa arquitectura: decide dónde comenzar, qué revelar primero, qué omitir, qué repetir y cómo distribuir la información.

La realización textual materializa ese recorrido mediante palabras, frases, párrafos, títulos, recursos visuales u otras unidades perceptibles.

```txt
arquitectura conceptual
≠ configuración narrativa
≠ manifestación textual
```

Una misma arquitectura puede realizarse como:

- crónica cronológica;
- explicación causal;
- perfil de un actor;
- investigación retrospectiva;
- manual;
- documental escrito;
- infografía textual;
- tabla de relaciones;
- resumen ejecutivo;
- relato literario.

### 4.2 Texto como interfaz

El texto se encuentra en la frontera entre dos sistemas.

```txt
SISTEMA PRODUCTOR
estructura conceptual
→ configuración narrativa
→ texto realizado

SISTEMA RECEPTOR
texto encontrado por recorrido
→ integración situada
→ estructura interpretativa reconstruida
```

El texto no contiene la totalidad de ninguno de los dos sistemas. Es una proyección selectiva del productor y una fuente de aportes parciales para el receptor.

### 4.3 Sistema receptor

El receptor no recibe de una vez la totalidad funcional de la arquitectura productora. Encuentra unidades en un orden concreto, bajo condiciones concretas y desde un estado propio.

```txt
realización perceptible
→ activación asociativa
→ vinculación con el estado previo
→ reconstrucción estructural
→ efecto interpretativo o pragmático
```

La reconstrucción puede aproximarse a la arquitectura del productor, diferir de ella, enriquecerla con conocimiento previo, reducirla, deformarla o mantener varias interpretaciones abiertas.

### 4.4 No transporte intacto

La relación correcta no es:

```txt
mente del autor
→ texto
→ copia de la mente en el lector
```

La relación más precisa es:

```txt
estructura disponible en el productor
→ proyección textual selectiva
→ aportes perceptibles
→ integración desde el estado del receptor
→ estructura reconstruida
```

Por tanto:

```txt
estructura pretendida por el productor
≠ estructura manifestada en el texto
≠ estructura reconstruida por el receptor
≠ descripción posterior de esa reconstrucción
```

Estas desigualdades no implican incomunicación absoluta. Delimitan las interfaces en las que pueden evaluarse fidelidad, comprensión, ambigüedad y divergencia.

---

## 5. Delimitación del sistema `X`

### 5.1 Sistema principal

El sistema principal es la configuración interpretativa funcional del receptor durante un episodio de lectura.

Incluye, en el nivel adoptado:

- entidades discursivas activas;
- relaciones atribuidas entre ellas;
- modelo provisional de acontecimientos;
- hipótesis causales o intencionales;
- referentes resueltos y pendientes;
- conocimiento previo activado y admitido;
- pesos de credibilidad;
- expectativas sobre unidades posteriores;
- contradicciones detectadas;
- preguntas abiertas;
- criterios de género relevantes;
- acoplamientos con notas o fuentes efectivamente consultadas.

### 5.2 Lo que queda fuera

Quedan fuera de la frontera principal, salvo delimitación adicional:

- el estado mental completo del lector;
- procesos neuronales específicos no observados;
- la totalidad de la biografía del receptor;
- el archivo completo cuando sólo una parte ha sido leída;
- la intención privada del autor no manifestada;
- asociaciones momentáneas sin consecuencia funcional;
- contenidos visualmente presentes pero no atendidos;
- interpretaciones posibles que ningún receptor haya construido;
- acciones posteriores no vinculadas de forma demostrable con la lectura.

### 5.3 Por qué no se elige el archivo como sistema principal

Un archivo puede conservar una secuencia de signos sin actualizarse cuando alguien lo lee. En ese caso, el cambio interpretativo ocurre en el receptor, no en el portador.

```txt
archivo antes de la lectura = archivo después de la lectura
```

El archivo puede ser sistema PIEA en otro análisis —por ejemplo, durante una edición acumulativa—, pero esa sería una instancia diferente con otro `X`, otro estado y otro mecanismo.

### 5.4 Por qué no se elige «el texto» sin especificación

La palabra «texto» puede designar:

- el portador físico;
- la cadena de signos;
- la obra abstracta;
- el proceso de producción;
- el recorrido de lectura;
- la interpretación construida;
- el conjunto de relaciones atribuidas.

PIEA exige seleccionar una unidad de análisis. Este ejemplo usa como `X` la configuración del receptor y trata la manifestación textual como fuente ordenada de aportes potenciales.

---

## 6. Estado interpretativo `S_t`

### 6.1 Definición

`S_t` es la organización relevante que el receptor ha construido antes de integrar `u_t`. No equivale a «todo lo leído» ni a una transcripción interna literal.

Una representación funcional puede incluir:

| Región | Contenido | Función posterior |
|---|---|---|
| Entidades | Personas, objetos, lugares, instituciones, conceptos | Permite resolver referencias y atribuir propiedades |
| Relaciones | Causalidad, pertenencia, oposición, temporalidad, analogía | Organiza la estructura más allá de unidades aisladas |
| Eventos | Acciones y cambios ya reconstruidos | Permite continuidad y secuenciación |
| Hipótesis | Explicaciones posibles con distintos pesos | Orienta la integración de nueva evidencia |
| Marco discursivo | Género, voz, propósito, registro | Modula expectativas y criterios de interpretación |
| Foco atencional | Componentes actualmente accesibles | Influye en qué relaciones se activan |
| Incertidumbres | Ambigüedades, referentes abiertos, contradicciones | Mantiene opciones sin resolverlas prematuramente |
| Conocimiento acoplado | Saberes previos o fuentes consultadas | Permite inferencias no inscritas literalmente |
| Evaluación | Credibilidad, relevancia, postura provisional | Condiciona aceptación o rechazo de aportes |
| Expectativas | Predicciones sobre lo siguiente | Permite sorpresa, confirmación o revisión |

### 6.2 Representación relacional

El estado puede representarse como un grafo provisional:

```txt
[evento]
  ├─CAUSED_BY?→ [hipótesis A]
  ├─CAUSED_BY?→ [hipótesis B]
  ├─INVOLVES→ [actor 1]
  ├─OCCURS_AT→ [momento]
  └─CONTRADICTS?→ [dato pendiente]
```

Los signos de interrogación indican que el estado puede contener relaciones tentativas. PIEA no exige que cada transición produzca certeza; exige una configuración posterior funcionalmente distinta.

### 6.3 Suficiencia del estado

La representación debe incluir lo necesario para explicar por qué la misma unidad puede integrarse de manera diferente.

Si dos lectores se describen con el mismo `S_t`, reciben el mismo `u_t` bajo el mismo `κ_t` y producen diferencias sistemáticas que dependen de conocimientos previos, entonces esos conocimientos o su accesibilidad estaban omitidos del estado o del contexto.

No debe añadirse una «historia total» como argumento paralelo. Debe mejorarse la delimitación de `S_t`.

### 6.4 Estado comprimido

El receptor no necesita conservar cada palabra como objeto independiente para mantener continuidad. Puede comprimir:

```txt
«La inspección detectó corrosión»
+
«La reparación fue postergada»
+
«El puente siguió abierto»

→

«existía un riesgo conocido y no corregido»
```

La formulación comprimida puede condicionar unidades posteriores aunque los enunciados originales ya no estén en el foco atencional.

---

## 7. Aportes parciales `u_t`

### 7.1 Unidad ontológica de lectura

`u_t` no tiene una correspondencia obligatoria con «palabra», «oración» o «párrafo». Es la unidad que el sistema trata como aporte diferenciable en la transición analizada.

Puede ser:

- una palabra;
- una cláusula;
- una oración;
- un párrafo;
- un título;
- un subtítulo;
- una nota;
- una cita;
- una imagen con pie;
- una entrada de tabla;
- un bloque leído como conjunto;
- una relación reconstruida desde varias marcas;
- una corrección editorial encontrada después;
- una unidad reactivada durante la relectura.

### 7.2 Disponibilidad no equivale a integración

Una página completa puede estar visible, pero sólo algunas unidades son atendidas e integradas.

```txt
unidad inscrita en el portador
≠ unidad perceptualmente disponible
≠ unidad admitida por 𝓘
≠ efecto conservado en S_{t+1}
```

### 7.3 Aportes compuestos

Cuando varias marcas se procesan como una sola configuración funcional, pueden modelarse como un `u_t` compuesto. Por ejemplo:

```txt
título + fotografía + pie
```

Si cada componente genera estados intermedios relevantes, deben modelarse transiciones distintas.

### 7.4 Procedencia

El aporte puede proceder de:

- la secuencia principal;
- una nota al pie;
- un enlace;
- una búsqueda dentro del documento;
- una anotación previa;
- una traducción;
- una voz que lee el texto;
- una memoria reactivada por relectura;
- una fuente externa consultada durante el episodio.

Cuando procede de una fuente externa, debe declararse el acoplamiento. No debe atribuirse al texto información que ingresó por otro canal.

---

## 8. Contexto operativo `κ_t`

### 8.1 Función

`κ_t` reúne condiciones que modifican la integración en una transición concreta. No es una bolsa genérica de «todo el contexto».

Puede incluir:

- idioma y competencia lingüística;
- género supuesto;
- propósito de lectura;
- posición de la unidad en el recorrido;
- atención disponible;
- legibilidad del portador;
- conocimiento accesible en ese momento;
- presencia de título, imagen o nota;
- expectativas culturales relevantes;
- instrucción de lectura;
- tiempo y posibilidad de relectura;
- confianza atribuida a la fuente;
- coexistencia de versiones o correcciones;
- entorno conversacional o institucional;
- accesibilidad de diccionarios, archivos o referencias.

### 8.2 Estado y contexto no son intercambiables

Algunas propiedades pueden representarse en `S_t` o en `κ_t` según el nivel elegido. La decisión debe ser estable y explicativa.

Ejemplo:

- el conocimiento ya activado y relacionado con el pasaje puede formar parte de `S_t`;
- la disponibilidad de un diccionario externo durante la transición puede formar parte de `κ_t`;
- después de consultar el diccionario, la definición encontrada puede entrar como un nuevo `u_t`.

### 8.3 Contexto de transición y composición FAC

No deben confundirse:

```txt
composición contextual FAC
= configuración general del caso de adaptación

κ_t PIEA
= condiciones operativas de una transición particular
```

### 8.4 Contexto PIEA y ACCD

Tampoco deben confundirse:

```txt
κ_t
= condiciones que modulan la integración del receptor

φ_n
= instancia contextual de una realización ACCD
```

---

## 9. Operador de integración `𝓘_{κ_t}`

### 9.1 Nivel de descripción

Este ejemplo describe `𝓘_{κ_t}` en un nivel funcional. No postula un algoritmo psicológico o neurobiológico universal.

### 9.2 Secuencia funcional posible

```txt
1. Disponibilizar una unidad del recorrido.
2. Identificar marcas lingüísticas o semióticas relevantes.
3. Resolver o mantener abiertas referencias.
4. Activar asociaciones y conocimiento pertinente.
5. Comparar el aporte con relaciones e hipótesis de S_t.
6. Admitir, filtrar, transformar o rechazar componentes.
7. Añadir o modificar entidades, relaciones, pesos y restricciones.
8. Comprobar coherencia local y global.
9. Actualizar expectativas e incertidumbres.
10. Estabilizar provisionalmente S_{t+1}.
```

Estas operaciones no tienen que ejecutarse como módulos discretos ni en ese orden exacto. Constituyen una descomposición funcional para la trazabilidad del caso.

### 9.3 Formas de integración textual

#### Incorporación

Una entidad o relación nueva pasa a formar parte del estado.

#### Resolución

Una unidad posterior determina el referente de una expresión anterior.

#### Reponderación

Una hipótesis existente gana o pierde plausibilidad.

#### Inhibición

Una interpretación incompatible deja de estar disponible o pierde prioridad.

#### Sustitución parcial

Una explicación previa es reemplazada sin borrar todos los datos ya integrados.

#### Reorganización

Elementos anteriores conservan identidad, pero cambian de función o relación.

#### Compresión

Varias unidades se consolidan en una estructura más abstracta.

#### Activación diferida

Una unidad aparentemente secundaria adquiere función cuando aparece información posterior.

#### Rechazo con efecto

El receptor rechaza una afirmación, pero ese rechazo modifica su evaluación de la fuente o su estrategia de lectura.

#### Rechazo sin efecto

La unidad no produce una diferencia relevante. Esa transición puede ser nula y no demuestra por sí sola PIEA.

### 9.4 Activación asociativa

La lectura puede activar relaciones no escritas literalmente. Sin embargo:

```txt
asociación activada
≠ asociación admitida
≠ relación estabilizada
≠ afirmación atribuible al autor
```

`𝓘_{κ_t}` debe distinguir entre activación potencial y cambio conservado en `S_{t+1}`.

### 9.5 Integración probabilística

Cuando una unidad admite varias interpretaciones, `𝓘` puede producir un estado con hipótesis ponderadas en lugar de una lectura única.

```txt
interpretación A: peso alto
interpretación B: peso medio
interpretación C: inhibida
```

Una unidad posterior puede redistribuir esos pesos sin borrar toda la trayectoria.

---

## 10. Estado posterior `S_{t+1}`

### 10.1 Definición

`S_{t+1}` es la configuración interpretativa posterior a la integración. Puede contener:

- entidades nuevas;
- relaciones añadidas o modificadas;
- referentes resueltos;
- hipótesis reponderadas;
- contradicciones detectadas;
- expectativas actualizadas;
- evaluaciones de credibilidad;
- conocimiento comprimido;
- instrucciones para relectura;
- una decisión pragmática.

### 10.2 La unidad no tiene que conservarse literalmente

El aporte puede perder su forma superficial y persistir como efecto.

```txt
u_t superficial:
«El presupuesto había sido aprobado catorce meses antes.»

efecto conservado:
existían recursos formalmente autorizados antes del colapso
```

### 10.3 Interpretación no equivale a salida verbal

Si el receptor responde con un resumen, esa respuesta es una manifestación parcial de su estado. No debe identificarse automáticamente con la configuración completa.

```txt
S_{t+1}
≠ resumen producido
≠ subrayado realizado
≠ respuesta de examen
≠ recuerdo posterior completo
```

### 10.4 Efecto pragmático

El efecto pragmático puede ocupar dos lugares según la frontera:

1. puede formar parte del estado ampliado del receptor, como una intención, valoración o decisión;
2. puede ser un comportamiento posterior condicionado por el estado, como verificar una fuente o cambiar una acción.

No debe asumirse causalidad exclusiva. La relación debe declararse y, cuando sea empírica, sustentarse con evidencia.

---

## 11. Linealidad perceptible y multidimensionalidad estructural

### 11.1 La superficie puede ser lineal

Muchos textos presentan unidades en una secuencia:

```txt
u_0 → u_1 → u_2 → … → u_n
```

Esta expresión sólo representa el orden de disponibilidad o recorrido. PIEA exige estados intermedios:

```txt
S_0 --integra u_0--> S_1
S_1 --integra u_1--> S_2
S_2 --integra u_2--> S_3
```

### 11.2 El estado no es una fila

Aunque las unidades se encuentren sucesivamente, la configuración reconstruida puede contener:

- jerarquías;
- causas múltiples;
- relaciones temporales no coincidentes con el orden narrativo;
- actores conectados a varios eventos;
- hipótesis alternativas;
- referencias retrospectivas;
- oposiciones;
- categorías;
- dependencias condicionales.

La linealidad pertenece al acceso; la multidimensionalidad pertenece a la organización resultante.

### 11.3 Recorrido no necesariamente único

El recorrido puede incluir:

- lectura de principio a fin;
- salto al resumen;
- consulta de una nota;
- regreso a un párrafo;
- búsqueda por palabra;
- lectura de una tabla antes del cuerpo;
- navegación hipertextual;
- lectura parcial;
- relectura después de conocer el desenlace.

Por tanto, `t` indexa la transición efectiva del receptor, no necesariamente la posición tipográfica.

### 11.4 Relectura

En una relectura, la misma unidad puede actuar sobre un estado diferente:

```txt
primera lectura:
𝓘_{κ}(S_a,u)

relectura después de información posterior:
𝓘_{κ'}(S_b,u)
```

La unidad superficial puede ser idéntica, pero el estado y el contexto operativo ya no lo son. PIEA explica por qué aparecen funciones interpretativas nuevas.

---

## 12. Caso desarrollado: «El Puente del Valle»

### 12.1 Naturaleza del caso

El siguiente caso es **ficticio** y fue construido exclusivamente para demostrar la dinámica PIEA. No describe un acontecimiento real ni pretende aportar evidencia histórica.

### 12.2 Arquitectura conceptual subyacente

La estructura conceptual completa del caso contiene:

```txt
[lluvia intensa]
  └─AUMENTA_CARGA→ [puente]

[corrosión previa]
  └─DEBILITA→ [soporte principal]

[informe de inspección]
  └─ADVIERTE→ [corrosión previa]

[presupuesto aprobado]
  └─DESTINADO_A→ [reparación]

[reasignación administrativa]
  └─IMPIDE→ [reparación]

[sensores desactivados]
  └─REDUCE→ [detección operativa]

[cierre técnico temporal]
  └─CONTRADICHO_POR→ [reapertura administrativa]

[colapso]
  ├─CONDICIONADO_POR→ [lluvia intensa]
  ├─CONDICIONADO_POR→ [corrosión previa]
  ├─CONDICIONADO_POR→ [reparación omitida]
  └─CONDICIONADO_POR→ [reapertura]
```

La arquitectura es relacional y multicausal. El texto la proyectará mediante un recorrido parcial.

### 12.3 Manifestación textual elegida

```txt
U0 — Título
«La tormenta derribó el Puente del Valle.»

U1
«El colapso ocurrió a las 18:40, después de tres días de lluvia intensa.»

U2
«Catorce meses antes, una inspección había advertido corrosión en el soporte principal.»

U3
«El presupuesto de reparación fue aprobado, pero se reasignó antes de iniciar las obras.»

U4
«Los sensores del soporte llevaban seis semanas desactivados después de emitir varias falsas alarmas.»

U5
«Un ingeniero ordenó el cierre temporal esa tarde; la administración reabrió el paso sin completar una segunda revisión.»
```

### 12.4 Estado inicial `S_0`

Antes del título, el receptor puede tener:

```txt
entidades del caso: ninguna
causas específicas: ninguna
género supuesto: noticia breve
expectativa: identificar qué ocurrió y por qué
```

### 12.5 Transición con `U0`

El título introduce:

- tormenta;
- puente;
- relación causal explícita o fuertemente sugerida;
- colapso como evento central.

Estado posterior provisional:

```txt
[tormenta] --CAUSES?→ [colapso del puente]
```

El signo de interrogación conserva el carácter provisional de la reconstrucción. El receptor puede aceptar el marco causal, mantener reserva o tratarlo como simplificación titular.

### 12.6 Transición con `U1`

`U1` añade hora, duración de la lluvia y proximidad temporal.

Efectos posibles:

- refuerzo de la hipótesis meteorológica;
- construcción de una secuencia temporal;
- expectativa de que el texto explique el mecanismo del colapso.

El estado no es una lista `título + oración`. Se organiza como:

```txt
[lluvia durante tres días]
  └─PRECEDES_AND_POSSIBLY_CONTRIBUTES→ [colapso a las 18:40]
```

### 12.7 Transición con `U2`

`U2` introduce información retrospectiva. El orden narrativo retrocede catorce meses, pero el estado integra el dato como condición previa.

Cambios:

- aparece corrosión como vulnerabilidad estructural;
- el colapso deja de explicarse sólo por la tormenta;
- el título puede reinterpretarse como causalidad incompleta;
- surge una entidad documental: informe de inspección;
- aparece la posibilidad de conocimiento institucional previo.

```txt
antes de U2:
tormenta → colapso

después de U2:
corrosión previa + lluvia intensa → colapso
informe → conocimiento previo de riesgo
```

### 12.8 Transición con `U3`

`U3` incorpora presupuesto aprobado y reasignación.

Cambios relacionales:

- la ausencia de reparación deja de parecer simple desconocimiento;
- se construye una cadena administrativa;
- aumenta el peso de una explicación institucional;
- la inspección adquiere una nueva función: no sólo detectó un problema, sino que precedió una respuesta incompleta.

`U3` también reorganiza `U2`. El informe anterior adquiere mayor relevancia porque ahora existe evidencia de que fue seguido por una decisión presupuestaria.

### 12.9 Transición con `U4`

`U4` introduce sensores desactivados y falsas alarmas.

La integración puede:

- añadir una falla de observación operativa;
- explicar por qué el deterioro reciente no fue detectado;
- crear una ambigüedad legítima: desactivar sensores pudo ser una decisión razonable, negligente o ambas según información faltante;
- abrir una pregunta sobre protocolos de respaldo.

El estado debe conservar incertidumbre. No corresponde convertir automáticamente el dato en culpabilidad.

### 12.10 Transición con `U5`

`U5` añade cierre técnico, reapertura administrativa y ausencia de segunda revisión.

Cambios:

- se introduce un conflicto de autoridad;
- la reapertura se vuelve condición inmediata de exposición;
- el ingeniero y la administración ocupan roles distintos;
- el colapso se reconstruye como resultado de una trayectoria material e institucional;
- el título inicial pierde capacidad explicativa exhaustiva.

Estado final resumido:

```txt
colapso
  ← carga meteorológica
  ← vulnerabilidad material conocida
  ← reparación no ejecutada
  ← observación degradada
  ← reapertura después de cierre técnico
```

### 12.11 Evidencia de dependencia de trayectoria

La unidad `U5` aislada no produce la misma estructura.

Sin `U2` y `U3`, la reapertura puede interpretarse como una decisión puntual equivocada. Después de integrar inspección, corrosión y reasignación, la misma reapertura se integra dentro de una trayectoria más extensa de riesgo conocido y respuesta insuficiente.

```txt
S_a
= tormenta + colapso

S_b
= tormenta + corrosión conocida + reparación no ejecutada + sensores desactivados

mismo aporte relevante:
reapertura sin segunda revisión

resultado desde S_a:
error inmediato posible

resultado desde S_b:
último eslabón de una trayectoria institucional y material
```

Esta diferencia no depende del último aporte aislado. Depende de la estructura previa.

### 12.12 Reinterpretación retrospectiva

Las unidades posteriores no cambian físicamente el título, pero cambian su función dentro del estado:

```txt
primera función del título:
explicación causal principal

función posterior:
marco inicial incompleto o simplificador
```

La retroactividad aquí es interpretativa: `S_{t+1}` reorganiza relaciones atribuidas a unidades previas. No modifica el pasado material ni requiere un operador distinto de `𝓘`.

---

## 13. Múltiples textos desde una misma arquitectura

La arquitectura conceptual del caso podría proyectarse mediante diferentes recorridos.

### 13.1 Crónica cronológica

```txt
inspección
→ presupuesto
→ reasignación
→ desactivación de sensores
→ lluvia
→ cierre
→ reapertura
→ colapso
```

### 13.2 Explicación causal

```txt
colapso
← vulnerabilidad material
← carga meteorológica
← mantenimiento omitido
← observación degradada
← decisión de reapertura
```

### 13.3 Perfil de actor

```txt
ingeniero
→ detecta riesgo
→ ordena cierre
→ es contradicho
→ documenta la decisión
```

### 13.4 Investigación retrospectiva

```txt
colapso
→ recuperación de informes
→ seguimiento presupuestario
→ reconstrucción de decisiones
→ contraste de responsabilidades
```

### 13.5 Resumen público

```txt
qué ocurrió
+ por qué ocurrió
+ qué se sabía
+ qué decisiones faltan esclarecer
```

Las cinco versiones pueden partir de la misma construcción conceptual y producir estados interpretativos diferentes porque seleccionan entradas, órdenes, focos y grados de explicitud distintos.

```txt
misma arquitectura fuente
≠ manifestación textual única
```

---

## 14. Múltiples reconstrucciones desde un mismo texto

### 14.1 Diferencia de estado previo

El mismo texto puede encontrar receptores con:

- conocimiento de ingeniería;
- conocimiento administrativo;
- desconocimiento técnico;
- experiencia previa con titulares simplificadores;
- confianza alta o baja en la fuente;
- objetivos de lectura distintos.

### 14.2 Diferencia de contexto operativo

También puede leerse:

- con tiempo para consultar documentos;
- como recorte sin fuente;
- bajo una instrucción académica;
- en una pantalla pequeña;
- junto a una imagen de la tormenta;
- junto a una tabla de mantenimiento;
- después de conocer una rectificación.

### 14.3 Resultados legítimamente diferentes

Un receptor puede reconstruir principalmente:

- una explicación material;
- una explicación institucional;
- un problema de comunicación de riesgo;
- una secuencia de decisiones;
- una crítica al encuadre del título;
- una red multicausal con incertidumbres.

PIEA no declara que todas las interpretaciones sean igualmente justificadas. Permite modelar cómo surgen desde estados y contextos diferentes. La evaluación de fidelidad requiere contrastar texto, fuentes, reglas inferenciales y propósito.

---

## 15. Acumulación estructural durante la lectura

### 15.1 Persistencia relacional

Persisten vínculos entre actores, eventos y causas.

### 15.2 Persistencia ponderal

Cambian los pesos de hipótesis como «causa meteorológica suficiente» o «trayectoria institucional».

### 15.3 Persistencia procedimental

El lector puede adoptar una estrategia: tratar títulos causales como marcos provisionales hasta leer la evidencia.

### 15.4 Persistencia selectiva

Algunos detalles se olvidan mientras permanece la relación abstracta «riesgo conocido sin reparación».

### 15.5 Persistencia comprimida

Varias oraciones se condensan en una explicación multicausal.

### 15.6 Persistencia potencial

Una frase temprana puede quedar latente y adquirir relevancia cuando aparece una unidad posterior.

### 15.7 Sustitución compatible

La hipótesis «la tormenta fue la causa suficiente» puede ser sustituida por «la tormenta activó una vulnerabilidad preexistente». La sustitución no destruye la trayectoria: conserva la tormenta y reorganiza su función.

### 15.8 Olvido compatible

El receptor puede olvidar la hora exacta y conservar la secuencia causal. PIEA no exige memoria literal exhaustiva.

---

## 16. Activación asociativa y reconstrucción

### 16.1 Función de las asociaciones

Las unidades textuales pueden activar conceptos, escenas, valores y experiencias no escritos literalmente. Esa activación ayuda a integrar, pero también puede introducir distorsiones.

### 16.2 Tres niveles

```txt
nivel 1: activación
una relación se vuelve disponible

nivel 2: evaluación
la relación se compara con texto, estado y contexto

nivel 3: integración
la relación modifica de manera funcional S_{t+1}
```

### 16.3 Ejemplo léxico

La palabra «banco» puede activar institución financiera, asiento o margen de un río. El estado previo y las unidades posteriores reponderan estas posibilidades.

La palabra aislada no determina por sí sola la reconstrucción.

### 16.4 Ejemplo pragmático

La frase «Ya viene» puede construir expectativas diferentes en una escena de tormenta, una sala de espera o una conversación sobre una prueba médica. La superficie se conserva; el estado y el contexto cambian la integración.

### 16.5 Límite

No toda asociación activada es una interpretación legítima. La reconstrucción debe poder evaluarse respecto de marcas textuales, coherencia, fuentes y propósito.

---

## 17. Configuración narrativa como recorrido por un grafo

### 17.1 Grafo conceptual

Una arquitectura conceptual puede representarse como un grafo con múltiples rutas posibles.

### 17.2 Configuración narrativa

La configuración narrativa selecciona:

- punto de entrada;
- secuencia de revelación;
- foco;
- granularidad;
- ritmo informativo;
- omisiones;
- repeticiones;
- transiciones;
- cierre.

### 17.3 Trayectoria del receptor

El receptor no integra el grafo entero de una vez. Recorre una proyección y reconstruye relaciones progresivamente.

```txt
grafo fuente
→ ruta narrativa seleccionada
→ unidades perceptibles
→ trayectoria PIEA del receptor
→ grafo interpretativo provisional
```

### 17.4 No identidad de grafos

El grafo reconstruido puede diferir del grafo fuente porque:

- algunas relaciones no fueron manifestadas;
- otras quedaron implícitas;
- el receptor añadió conocimiento previo;
- una ambigüedad quedó abierta;
- una unidad fue omitida o malinterpretada;
- el contexto cambió los pesos;
- el recorrido fue parcial.

---

## 18. Proyecciones parciales y no únicas

### 18.1 Proyección desde el productor

El texto es una proyección parcial de una estructura disponible para el productor. Selecciona y organiza, pero no agota esa estructura.

### 18.2 Proyección desde el receptor

Cuando el receptor resume, dibuja un grafo, responde una pregunta o explica el texto, produce otra proyección parcial.

```txt
estado interpretativo
→ resumen

estado interpretativo
→ grafo

estado interpretativo
→ comentario crítico

estado interpretativo
→ decisión práctica
```

### 18.3 No unicidad

Dos resúmenes diferentes pueden ser compatibles con un mismo estado. Un mismo resumen superficial puede ocultar estados diferentes.

Por ello:

```txt
salida observable
≠ estado interpretativo completo
```

### 18.4 Función de las proyecciones

Las proyecciones pueden servir para:

- comunicar comprensión;
- auditar relaciones reconstruidas;
- detectar omisiones;
- comparar lectores;
- corregir interpretaciones;
- construir una nueva entrada para otro sistema.

### 18.5 Retorno como extensión

Si el resumen o grafo es revisado y su corrección entra de nuevo al episodio, se forma una extensión de retroalimentación:

```txt
estado interpretativo
→ manifestación parcial
→ revisión
→ corrección disponible como nuevo aporte
→ nueva transición PIEA
```

El retorno no pertenece al régimen mínimo. Sólo existe cuando se acopla efectivamente.

---

## 19. Relación con ACCD

### 19.1 Preguntas diferentes

```txt
PIEA
¿cómo cambia el estado interpretativo del receptor al integrar una unidad?

ACCD
¿cómo se proyecta una construcción conceptual bajo una instancia contextual
hacia el codominio de una realización?
```

### 19.2 Producción textual

Cuando una construcción conceptual se proyecta como texto, ACCD puede formalizar esa realización mediante su propia ecuación:

```math
P^{r_k}(m^i_j,\varphi_n)
=
\mu^{r_k}(m^i_j,\varphi_n)
\in
\Omega^{r_k}
```

Esta ecuación se cita con sus significados ACCD. No redefine PIEA.

### 19.3 Encadenamiento correcto

```txt
construcción conceptual del productor
→ protocolo ACCD de realización textual
→ manifestación textual
→ segmentación según recorrido efectivo
→ unidades disponibles para el receptor
→ transiciones PIEA de integración
→ estado interpretativo
→ posible nueva manifestación mediante ACCD
```

### 19.4 No correspondencias

No deben aplicarse estas equivalencias:

```txt
S_t ≠ m^i_j
u_t ≠ φ_n
𝓘_{κ_t} ≠ P^{r_k}
S_{t+1} ≠ μ^{r_k}
estado interpretativo ≠ codominio de realización
```

### 19.5 Texto como manifestación y aporte

Una manifestación ACCD puede convertirse en fuente de aportes PIEA para otro sistema. El cambio de rol ocurre en la interfaz:

```txt
salida del productor
→ portador disponible
→ unidad encontrada por el receptor
→ aporte candidato u_t
```

No existe equivalencia ontológica automática entre manifestación completa y aporte individual. La granularidad debe declararse.

---

## 20. Relación con FAC

### 20.1 Función de FAC

FAC conserva el núcleo PIEA y lo adapta al dominio textual. No produce por sí misma la lectura ni la manifestación.

### 20.2 Mapeo utilizado

| Componente FAC | Realización en este ejemplo |
|---|---|
| Núcleo preservable | Ecuación, roles, invariantes y fronteras PIEA |
| Régimen de variación | Tipo de texto, receptor, unidad, recorrido, mecanismo y escala |
| Composición contextual | Sujeto, medio, distribución y ejecución |
| Intención | Explicar reconstrucción acumulativa durante la lectura |
| Caso de proyección contextual | PIEA configurado para recepción textual |
| Heurísticas | Mapeo funcional, separación productor–receptor, unidad flexible |
| Restricciones | No identificar texto, estructura, interpretación y manifestación |
| Intervención situada | Análisis del caso ficticio y de sus transiciones |
| Evidencia de retorno | Resultados de pruebas, contraejemplos y revisión humana |
| Corrección acumulativa | Futuras mejoras de esta adaptación, no de la trayectoria lectora |

### 20.3 Dos acumulaciones

```txt
acumulación PIEA
= cambios conservados dentro de la lectura analizada

corrección acumulativa FAC
= cambios en futuras adaptaciones del ejemplo a partir de evidencia
```

No deben fusionarse.

---

## 21. Relación con COGNICIÓN_CENTRAL

### 21.1 Espacios lógicos

```txt
CC://
  fuentes canónicas o vigentes de COGNICIÓN_CENTRAL

PROJECT://
  discusión que descubrió y desarrolló el caso textual

OVERLAY://
  futura configuración local que vincule PIEA al proyecto receptor

OUTPUT://
  este Markdown generado para revisión e incorporación manual
```

### 21.2 Función del ejemplo

El ejemplo permite a COGNICIÓN_CENTRAL:

- reconocer lecturas como trayectorias de estado;
- distinguir arquitectura conceptual, narración y manifestación;
- modelar reconstrucciones parciales;
- comparar recorridos y receptores;
- pedir snapshots o grafos sin confundirlos con el estado;
- preparar análisis textuales más profundos;
- integrar el caso con ACCD sin duplicar su ecuación;
- conservar soberanía humana sobre aceptación e incorporación.

### 21.3 Gobierno

El humano conserva autoridad para:

- aceptar o rechazar el ejemplo;
- modificar su delimitación;
- elegir otra escala;
- incorporarlo manualmente al paquete;
- promoverlo posteriormente a COGNICIÓN_CENTRAL.

La creación de este archivo no modifica `CC://` ni el artefacto PIEA vigente.

---

## 22. Pruebas de pertenencia PIEA

| Prueba | Aplicación al caso textual | Resultado |
|---|---|---|
| P1 — Estado previo | Puede describirse como configuración de entidades, relaciones, hipótesis y expectativas | `SATISFECHA` |
| P2 — Aporte | Una unidad perceptible puede distinguirse antes de integrarse | `SATISFECHA` |
| P3 — Actualización | La unidad puede modificar relaciones, pesos, referentes o expectativas | `SATISFECHA` |
| P4 — Dependencia del estado | La misma unidad produce funciones distintas según lectura previa y conocimiento activado | `SATISFECHA` |
| P5 — Contexto | Idioma, género, recorrido, atención y fuentes pueden cambiar la integración | `SATISFECHA` |
| P6 — Organización | El resultado no es una lista: forma redes, jerarquías y explicaciones | `SATISFECHA` |
| P7 — Persistencia | Relaciones previas condicionan inferencias y unidades posteriores | `SATISFECHA` |
| P8 — Último aporte | El caso del puente no se explica por la última oración aislada | `SATISFECHA` |
| P9 — Contexto omitido | Se declaran condiciones y se prohíbe atribuir toda diferencia a trayectoria | `SATISFECHA CON LÍMITE` |
| P10 — Suficiencia | Se exige ampliar `S_t` si conocimientos omitidos explican diferencias | `SATISFECHA COMO REGLA` |
| P11 — Nivel | Estado, aporte y mecanismo se mantienen en escala funcional de lectura | `SATISFECHA` |
| P12 — No equivalencia ACCD | Manifestación textual y estado interpretativo se separan explícitamente | `SATISFECHA` |

### 22.1 Evidencia fuerte

La evidencia estructural más fuerte es la reinterpretación de una unidad anterior por información posterior. En el caso desarrollado, el título y la tormenta no desaparecen; cambian de posición causal cuando se integran corrosión, presupuesto, sensores y reapertura.

### 22.2 Límite de evidencia

La clasificación se aplica al nivel funcional de la lectura. El ejemplo no verifica mecanismos neuronales concretos ni garantiza que cada lector real construya exactamente el estado descrito.

---

## 23. Modelos alternativos

### 23.1 Sucesión pura

```txt
frase 1
→ frase 2
→ frase 3
```

Explica orden, pero no explica cómo una frase posterior reinterpreta relaciones anteriores.

### 23.2 Almacenamiento literal

```txt
memoria = lista de frases leídas
```

Explica conservación, pero no reponderación, compresión, inhibición ni reorganización.

### 23.3 Suma de significados aislados

```txt
significado total = significado de frase 1 + frase 2 + frase 3
```

No explica resolución de ambigüedad, dependencia de orden ni cambio de función de unidades previas.

### 23.4 Respuesta al último aporte

```txt
interpretación actual = función de la última frase
```

Falla cuando la última frase sólo adquiere sentido por entidades y relaciones construidas antes.

### 23.5 Contexto sin estado

Un modelo puede atribuir toda interpretación al género o situación. Falla cuando dos momentos del mismo episodio y contexto difieren porque se integraron unidades intermedias.

### 23.6 Interpretación del observador

Un analista puede construir una red que el lector nunca produjo. PIEA exige indicadores de integración en el sistema delimitado, no sólo una reconstrucción externa elegante.

### 23.7 Modelo PIEA

Explica conjuntamente:

- estado previo;
- unidad parcial;
- condiciones de lectura;
- transformación del estado;
- persistencia;
- reorganización retrospectiva;
- consecuencias futuras.

---

## 24. Contraejemplos deliberados

### CE-TXT-01 — Archivo nunca leído

Un documento existe en un disco, pero ningún sistema accede a él.

```txt
clasificación:
NON_INSTANCE para la lectura
```

Existe un portador, pero no una integración receptora.

### CE-TXT-02 — Concatenación automática

Un programa añade frases a un archivo sin analizar relaciones ni usar el estado previo salvo para ubicar el final.

```txt
clasificación:
NON_INSTANCE o BOUNDARY_CASE según el estado elegido
```

La concatenación por sí sola demuestra almacenamiento, no organización semántica.

### CE-TXT-03 — Pantalla visible sin atención

Un párrafo permanece delante del receptor, pero no modifica ninguna dimensión relevante de su estado.

```txt
clasificación:
transición nula
```

Disponibilidad física no equivale a integración.

### CE-TXT-04 — Procesamiento independiente de cada frase

Un clasificador asigna una etiqueta a cada oración usando sólo esa oración y reinicia entre entradas.

```txt
clasificación:
NON_INSTANCE en esa escala
```

No existe dependencia del estado previo.

### CE-TXT-05 — Lista de palabras recordadas

El sistema conserva tokens, pero ninguna relación entre ellos modifica el procesamiento posterior.

```txt
clasificación:
NON_INSTANCE
```

Memoria literal no demuestra integración estructural.

### CE-TXT-06 — Resumen externo atribuido al lector

Un analista crea un grafo detallado, pero no hay evidencia de que el receptor haya construido relaciones equivalentes.

```txt
clasificación:
INSUFFICIENT_EVIDENCE
```

La estructura del observador no puede sustituir automáticamente el estado del sistema.

### CE-TXT-07 — Última frase autosuficiente

Una instrucción independiente produce la misma respuesta sin importar las unidades previas.

```txt
clasificación:
NON_INSTANCE para esa transición si S_t no participa
```

### CE-TXT-08 — Manifestación confundida con estado

Se declara que el texto impreso es la comprensión del receptor.

```txt
clasificación:
DEFORMACIÓN
```

Se han fusionado portador, aporte y estado.

---

## 25. Escalas del ejemplo

### 25.1 Escala micro

```txt
estado:
referentes y relaciones locales

aporte:
palabra, cláusula o marca

transición:
resolución inmediata o actualización local
```

### 25.2 Escala meso

```txt
estado:
modelo de una sección o episodio

aporte:
párrafo, escena o bloque argumentativo

transición:
reorganización de hipótesis y relaciones de sección
```

### 25.3 Escala macro

```txt
estado:
comprensión global provisional de la obra

aporte:
capítulo, sección mayor, relectura o fuente complementaria

transición:
cambio de arquitectura interpretativa general
```

### 25.4 Escala social

```txt
estado:
interpretación distribuida de una comunidad

aporte:
reseña, debate, traducción, edición o nueva evidencia

transición:
reorganización colectiva documentada
```

La escala social requiere un sistema distinto, mecanismos de interacción y evidencia de acoplamiento. No se deriva automáticamente de la lectura individual.

### 25.5 Interfaz entre escalas

Una comprensión local puede convertirse en aporte para una estructura mayor. Debe declararse la interfaz:

```txt
resultado micro
→ aporte meso

resultado meso
→ aporte macro
```

No deben reutilizarse los mismos símbolos como si las escalas fueran idénticas.

---

## 26. Variaciones legítimas del caso textual

| Dimensión | Variaciones admitidas | Condición |
|---|---|---|
| Tipo de texto | narrativo, expositivo, argumentativo, técnico, jurídico, poético | Debe existir integración dependiente de estado |
| Soporte | papel, pantalla, audio con base textual, interfaz | Debe declararse el recorrido efectivo |
| Unidad | palabra, cláusula, oración, párrafo, bloque multimodal | Debe ser diferenciable antes de integrarse |
| Receptor | individual, asistido, colectivo | Debe delimitarse el portador del estado |
| Recorrido | lineal, selectivo, hipertextual, relectura | Deben poder ordenarse transiciones efectivas |
| Estado | grafo, modelo discursivo, conjunto de hipótesis, descripción cualitativa | Debe ser suficiente para explicar integración |
| Mecanismo | humano, computacional, híbrido | No transferir causalidad no demostrada |
| Persistencia | breve, larga, comprimida, reversible | Algún efecto debe alcanzar el futuro |
| Contexto | estable o variable | Debe distinguirse de estado y aporte |
| Salida | comprensión tácita, respuesta, resumen, grafo, acción | La salida no equivale automáticamente al estado |

---

## 27. Plantilla de instancia completada

```yaml
piea_instance:
  id: PIEA-EJ-TXT-001
  title: "Textos: reconstrucción interpretativa acumulativa durante la lectura"
  version: 0.1.0
  status: REVIEWED

  scope:
    domain: "recepción e interpretación textual"
    system_X: >-
      Configuración interpretativa funcional de un receptor durante
      un episodio de lectura delimitado.
    scale: "meso; recorrido de un texto breve"
    transition_index_meaning: >-
      Orden efectivo en el que el receptor integra unidades;
      no equivale necesariamente a la posición tipográfica.
    observation_window: >-
      Desde el estado anterior al título hasta la configuración posterior
      a la última unidad del caso ficticio El Puente del Valle.

  state_before:
    symbol: S_t
    representation: >-
      Grafo interpretativo provisional con entidades, eventos, relaciones,
      hipótesis ponderadas, incertidumbres, evaluaciones y expectativas.
    relevant_components:
      - entidades discursivas activas
      - eventos reconstruidos
      - hipótesis causales
      - referentes abiertos o resueltos
      - evaluación de fuente
      - expectativas narrativas
    relevant_relations:
      - causalidad provisional
      - temporalidad
      - conocimiento institucional
      - contradicción
      - dependencia
      - relevancia
    sufficiency_justification: >-
      Estas regiones permiten explicar por qué una unidad posterior puede
      reforzar, inhibir o reorganizar interpretaciones previas. Si aparecen
      diferencias sistemáticas no explicadas, el estado debe ampliarse.

  contribution:
    symbol: u_t
    description: >-
      Unidad textual o semiótica efectivamente disponible para integración;
      en el caso puede ser el título o una de las cinco oraciones.
    origin: "manifestación textual ficticia preparada para el ejemplo"
    granularity: "título u oración; variable en otras instancias"

  operational_context:
    symbol: kappa_t
    conditions:
      - idioma español comprendido
      - género supuesto de noticia explicativa
      - recorrido secuencial inicial
      - atención suficiente
      - acceso a todas las unidades
      - caso declarado como ficticio
      - propósito analítico de reconstruir causas
    uncertainties:
      - conocimiento previo específico del receptor
      - grado de confianza inicial en el título
      - asociaciones individuales no observadas

  integration:
    symbol: I_kappa_t
    mechanism_type: "secuencia funcional cognitivo-interpretativa"
    mechanism_description: >-
      Admite marcas, activa asociaciones pertinentes, resuelve referencias,
      compara el aporte con el estado, actualiza entidades y relaciones,
      repondera hipótesis, conserva incertidumbres y estabiliza un estado
      interpretativo provisional.
    admission_or_filtering: >-
      Sólo los componentes atendidos, comprendidos y considerados pertinentes
      modifican el estado; otros pueden ser rechazados o producir transición nula.
    transformations:
      - incorporación
      - resolución referencial
      - reponderación
      - inhibición
      - reorganización retrospectiva
      - compresión
      - sustitución parcial

  state_after:
    symbol: S_t_plus_1
    representation: >-
      Red multicausal que relaciona lluvia, corrosión, inspección, presupuesto,
      sensores, cierre, reapertura y colapso, con incertidumbres conservadas.
    relevant_change: >-
      El colapso deja de atribuirse exclusivamente a la tormenta y pasa a
      reconstruirse como resultado de una trayectoria material e institucional.
    preserved_path_effect: >-
      Las unidades anteriores determinan la función causal e institucional
      atribuida a la reapertura descrita en la última unidad.
    future_consequence: >-
      El receptor puede evaluar el título como incompleto, formular preguntas
      sobre responsabilidad o buscar documentos de inspección y presupuesto.

  invariants:
    system_delimited: true
    state_present: true
    contribution_differentiated: true
    integration_present: true
    state_dependence: true
    contextual_conditioning: true
    state_updated: true
    selective_persistence: true
    structural_nonreducibility: true
    transition_traceability: true

  alternative_models:
    succession_only: >-
      Rechazado como explicación suficiente: registra el orden, pero no la
      reorganización de relaciones.
    storage_only: >-
      Rechazado: una lista de oraciones no explica hipótesis, pesos ni compresión.
    addition_only: >-
      Rechazado: el efecto de U2-U5 modifica el significado funcional del título.
    last_input_only: >-
      Rechazado: U5 cambia de interpretación según el estado construido antes.
    omitted_context: >-
      Controlado parcialmente mediante declaración de idioma, género, propósito,
      recorrido y acceso; permanece incertidumbre individual explícita.

  fac_adaptation:
    source_nucleus: "PIEA 0.2.0"
    contextual_composition: >-
      Receptor humano, manifestación escrita, distribución secuencial y
      ejecución bajo propósito analítico en español.
    transformation_heuristics:
      - mapear funciones y no vocabulario superficial
      - elegir al receptor como sistema principal
      - definir unidad por integración efectiva
      - distinguir superficie lineal y estado relacional
      - separar producción ACCD y recepción PIEA
      - conservar incertidumbre
    output_restrictions:
      - no identificar texto con estructura conceptual
      - no identificar interpretación con lista de palabras
      - no atribuir asociaciones al autor sin evidencia
      - no confundir kappa_t con phi_n
      - no usar la salida observable como estado completo
    valid_correspondences:
      - estado PIEA ↔ configuración interpretativa previa
      - aporte PIEA ↔ unidad textual efectivamente integrada
      - contexto PIEA ↔ condiciones operativas de lectura
      - integración PIEA ↔ actualización funcional de la reconstrucción
      - estado posterior PIEA ↔ configuración interpretativa actualizada
    broken_correspondences:
      - archivo ≠ receptor
      - palabra ≠ aporte obligatorio
      - texto ≠ arquitectura completa del productor
      - resumen ≠ estado completo
      - manifestación ACCD ≠ estado PIEA automático

  accd_handoff:
    required: true
    cognitive_structure_ref: >-
      Arquitectura conceptual del caso o configuración interpretativa preparada
      para una realización posterior.
    realization_ref: "texto, grafo, resumen, documental u otra realización elegida"
    protocol_ref: "[ACCD-EQ], recuperado con su autoridad vigente"
    note: >-
      ACCD se usa para formalizar la manifestación; no sustituye las transiciones
      PIEA del receptor ni se incorpora dentro de I_kappa_t.

  evidence:
    observations:
      - cada unidad modifica la red interpretativa provisional
      - la información posterior repondera la causa sugerida por el título
      - la última unidad depende de relaciones construidas anteriormente
      - el estado final se comprime como explicación multicausal
      - una relectura permite integrar el mismo título desde otro estado
    sources:
      - ART_patron_de_integracion_estructural_acumulativa.txt, PIEA 0.2.0
      - discusión del proyecto sobre estructura, recorrido y reconstrucción textual
      - PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
    counterevidence:
      - no toda unidad produce una transición relevante
      - diferentes lectores pueden construir estados distintos
      - el estado funcional se infiere mediante manifestaciones parciales
    unknowns:
      - mecanismos neurobiológicos específicos
      - contenido mental total del receptor
      - estabilidad de largo plazo sin observación adicional

  classification:
    result: CONFIRMED_INSTANCE
    rationale: >-
      En el nivel funcional delimitado existen estado previo, aporte diferenciable,
      integración contextual, estado posterior, persistencia selectiva,
      dependencia de trayectoria y organización no reducible a suma de unidades.
```

---

## 28. Clasificación final

### 28.1 Resultado principal

```txt
CLASIFICACIÓN:
CONFIRMED_INSTANCE

NIVEL:
configuración interpretativa funcional durante un episodio de lectura

ALCANCE:
lecturas con continuidad funcional demostrable entre unidades
```

### 28.2 Resultados que no se transfieren automáticamente

```txt
texto como sistema activo por sí mismo:
NO AFIRMADO

arquitectura completa del autor:
FUERA DE LA FRONTERA PRINCIPAL

procesos neuronales específicos:
INSUFFICIENT_EVIDENCE

interpretación única y universal:
RECHAZADA

equivalencia entre orden textual y estructura cognitiva:
RECHAZADA

persistencia de largo plazo:
NO PRESUMIDA

causalidad exclusiva sobre conducta posterior:
NO PRESUMIDA
```

---

## 29. Qué demuestra este ejemplo sobre PIEA

### 29.1 La unidad llega a un estado

Una frase no llega a un vacío. Encuentra entidades, hipótesis, expectativas y relaciones ya activas.

### 29.2 Integrar no es concatenar

Una unidad posterior puede cambiar la función de una anterior sin borrar su contenido superficial.

### 29.3 La linealidad es de recorrido

La sucesión perceptible puede producir una organización relacional, jerárquica y multicausal.

### 29.4 La trayectoria puede comprimirse

El receptor puede olvidar palabras y conservar una estructura que sigue condicionando la comprensión.

### 29.5 La proyección no es única

Una misma arquitectura puede producir textos diferentes; un mismo texto puede contribuir a reconstrucciones diferentes.

### 29.6 La manifestación no es el estado

El texto es portador y fuente de aportes; el resumen del lector es otra superficie parcial. Ninguno equivale automáticamente a la configuración completa.

### 29.7 Lo posterior puede reinterpretar lo anterior

La acumulación admite reorganización retrospectiva local: el estado nuevo cambia relaciones atribuidas a unidades previas.

---

## 30. Trazabilidad y fuentes

### `[PIEA-0.2.0]`

```txt
ART_patron_de_integracion_estructural_acumulativa.txt
versión: 0.2.0
fecha: 2026-08-11
```

Unidades principales utilizadas:

- `00_core/00_especificacion_nuclear.md`;
- `00_core/01_ontologia_y_notacion.md`;
- `00_core/02_invariantes.md`;
- `00_core/03_dominio_de_variacion.md`;
- `00_core/04_fronteras_y_no_equivalencias.md`;
- `10_mecanismo/10_transicion_de_estado.md`;
- `10_mecanismo/11_integracion_acumulativa.md`;
- `10_mecanismo/12_trayectoria_memoria_y_escala.md`;
- `10_mecanismo/13_regimen_minimo_y_extensiones.md`;
- `20_metodo/20_contrato_de_adaptacion_fac.md`;
- `20_metodo/21_instanciacion.md`;
- `20_metodo/22_pruebas_de_pertenencia_y_falsacion.md`;
- `20_metodo/23_plantilla_de_instancia.md`;
- `20_metodo/24_auditoria_de_notacion.md`;
- `30_relaciones/30_relacion_con_accd.md`;
- `30_relaciones/31_relacion_con_fac.md`;
- `30_relaciones/32_relacion_con_cognicion_central.md`;
- `90_meta/90_trazabilidad_y_fuentes.md`.

### `[CC-BOOT]`

```txt
PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
ID: PROT-CC-CHATGPT-001
versión: 0.1.0
```

Funciones utilizadas:

- soberanía humana;
- separación `CC://`, `PROJECT://`, `OVERLAY://`, `OUTPUT://`;
- distinción entre portador, manifestación y estructura cognitiva;
- recuperación mínima suficiente;
- trazabilidad;
- prohibición de cambios canónicos silenciosos.

### `[PROJECT-DISCUSSION]`

```txt
Conversación del proyecto sobre descubrimiento y consolidación de PIEA,
con énfasis en textos como caso descubridor.
```

Funciones recuperadas:

- distinción entre arquitectura conceptual y texto;
- configuración narrativa como recorrido por una estructura;
- separación entre productor y receptor;
- texto como interfaz;
- activación asociativa;
- reconstrucción estructural;
- efecto pragmático;
- linealidad perceptible y multidimensionalidad interpretativa;
- proyecciones parciales y no únicas;
- decisión humana de desarrollar el ejemplo por separado;
- incorporación manual posterior al paquete PIEA.

### `[PIEA-EJ-HIA-001]`

```txt
PIEA_EJEMPLO_INTERACCION_HUMANO_IA_v0_1_0.md
```

Función comparativa:

- mantiene el mismo contrato de instancia;
- separa estado, aporte, integración y manifestación;
- demuestra que ejemplos diferentes pueden compartir el núcleo sin que el paquete dependa de ninguno de ellos;
- no constituye fuente normativa del núcleo PIEA.

---

## 31. Estado de incorporación

```txt
Documento de ejemplo:
GENERADO

Paquete PIEA 0.2.0:
NO MODIFICADO

Ruta recomendada:
ejemplos/01_textos.md

Incorporación al paquete:
PENDIENTE DE ACCIÓN HUMANA

Promoción a COGNICIÓN_CENTRAL:
NO REALIZADA

Validación canónica:
PENDIENTE
```

La existencia de este Markdown en `OUTPUT://` no modifica el paquete ni el canon. Su incorporación, revisión y aceptación corresponden al humano.
