https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69de802c-018c-83e8-beae-5c547c51e6e9

PLANTEAMIENTO DEL ADAPTADOR
Formulación conceptual inicial para el sistema de instancia, adaptación y manifestación

0. CARÁCTER DE ESTE PLANTEAMIENTO

Este texto fija un planteamiento general del concepto de adaptador.

No debe leerse como la descripción de un adaptador particular para textos,
ni como una teoría cerrada sobre sus implementaciones posibles.
Su función es formular con claridad la estructura mínima del adaptador
dentro del sistema que ya distingue:

- modelo base,
- instancia contextual,
- adaptación,
- y manifestación material.

Este planteamiento debe poder convivir con documentos posteriores más específicos,
por ejemplo:

- adaptadores textuales,
- adaptadores pedagógicos,
- adaptadores comerciales,
- o implementaciones particulares.

1. PROBLEMA QUE RESUELVE EL ADAPTADOR

Una vez que existe una instancia contextual suficientemente determinada,
todavía falta una operación esencial:

la instancia no comparece por sí sola como manifestación material.

Entre la instancia contextual y la materialización concreta existe una operación de
traducción, realización y ajuste que no debe confundirse:

- ni con el modelo base,
- ni con la instancia misma,
- ni con la pieza final ya materializada.

El adaptador aparece para resolver ese problema.

Dicho de manera simple:

si el modelo base permite construir una instancia,
el adaptador permite realizar esa instancia como manifestación concreta.

2. DEFINICIÓN GENERAL

Un adaptador es un operador de realización protocolizada que recibe una instancia
contextual ya configurada sobre un modelo base suficientemente completo y la
transforma en una materialización concreta perteneciente a un codominio de
salida definido por condiciones de realización.

Esta definición implica varias tesis:

1. el adaptador no trabaja sobre material amorfo, sino sobre una instancia;
2. la instancia ya debe venir suficientemente determinada por su modelo base;
3. el adaptador no define la ontología del caso, sino su realización;
4. la salida del adaptador no es arbitraria, sino una materialización válida
   dentro de un codominio;
5. la transformación no es libre, sino normada por un protocolo.

## 3. SECUENCIA ESTRUCTURAL

La secuencia correcta del sistema es:

modelo base completo
→ instancia contextual
→ adaptador
→ manifestación material

Esta secuencia debe preservarse.

No debe colapsarse en fórmulas como:

- contenido → pieza,
- idea → formato,
- o caso → salida inmediata.

El adaptador ocupa exactamente la posición intermedia entre:

- la configuración contextual del caso,
- y la comparecencia material de ese caso.

## 4. RELACIÓN CON EL MODELO BASE

El adaptador depende estructuralmente del modelo base.

Esta dependencia no es secundaria ni externa al concepto de adaptador.
Pertenece a su definición misma.

La razón es que el adaptador no opera sobre materiales amorfos, ni sobre
descripciones vagas, ni sobre casos construidos de manera arbitraria.
Opera sobre una **instancia contextual**.

Y una instancia contextual solo puede llegar con suficiente claridad al
adaptador si ha sido construida sobre un **modelo base suficientemente completo**.

Dicho de manera más fuerte:

sin modelo base suficientemente completo, el adaptador no recibe un caso
suficientemente determinado, sino una configuración parcialmente abierta que lo
obliga a compensar con interpretación aquello que el sistema no fijó antes.

### 4.1. El modelo base determina la calidad de la instancia

La calidad operativa del adaptador depende directamente de la calidad estructural
de la instancia que recibe.

Pero la instancia no se construye desde la nada.
Deriva de un modelo base.

Por eso, cuando se afirma que el adaptador depende del modelo base, lo que se
está diciendo en realidad es esto:

- el modelo base determina qué elementos componen el caso;
- determina qué tipo de valores puede tomar cada elemento;
- determina qué configuraciones son válidas;
- y determina qué restricciones estructurales deben cumplirse.

Entonces, si el modelo base es insuficiente, la instancia llega al adaptador con
problemas heredados.

Y si la instancia llega al adaptador con problemas heredados, el adaptador deja
de operar con claridad.

### 4.2. Qué ocurre cuando el modelo base es incompleto

Cuando el modelo base no está suficientemente refinado, la instancia contextual
queda abierta en un sentido que no debe quedar abierto.

Eso obliga al adaptador a hacer cosas que no le corresponden, por ejemplo:

- interpretar qué significa realmente cada rasgo de la instancia;
- decidir qué parte del caso es central y cuál es secundaria;
- reconstruir relaciones que el modelo no dejó fijadas;
- completar por intuición lo que la instancia no explicitó;
- o introducir criterios locales para hacer operable un caso mal determinado.

En ese momento, el adaptador deja de ser un operador claro de realización y se
convierte en un compensador de indeterminación.

Ése es justamente el problema que debe evitarse.

### 4.3. Qué debe hacer un adaptador y qué no debe hacer

La dependencia del adaptador respecto del modelo base permite distinguir con más
precisión su función legítima de sus desviaciones.

#### Lo que no debe hacer

El adaptador no debe:

- adivinar;
- completar por intuición;
- redefinir el significado de los elementos del caso;
- reconstruir la ontología de la instancia;
- ni decidir por su cuenta lo que el modelo base debió dejar ya fijado.

#### Lo que sí debe hacer

El adaptador debe:

- recibir una instancia suficientemente determinada;
- operar sobre ella bajo un protocolo;
- respetar las restricciones que esa instancia ya porta;
- y traducirla a una materialización válida dentro de un codominio.

Por tanto, la diferencia entre un adaptador correcto y uno defectuoso no se juega
solo en la calidad de la salida que produce, sino en el hecho de si necesita o no
reconstruir por sí mismo aquello que debió venir ya resuelto por el modelo base y
por la instancia.

### 4.4. El modelo base completo desplaza la complejidad al lugar correcto

Una de las ventajas más importantes del modelo base completo es que desplaza la
complejidad ontológica al lugar donde debe resolverse.

En vez de dejar que cada adaptador:

- interprete,
- complete,
- y rehaga localmente el caso,

el sistema concentra el esfuerzo en:

- definir con claridad el modelo base;
- construir con rigor la instancia;
- y dejar que el adaptador opere sobre una configuración ya suficientemente
  determinada.

Esto no elimina la complejidad del sistema.
La reubica.

Y esa reubicación es una mejora estructural importante, porque vuelve al sistema:

- más claro;
- más reusable;
- más auditable;
- y más implementable.

### 4.5. La relación correcta entre modelo base, instancia y adaptador

La secuencia correcta no debe formularse como si el adaptador recibiera el caso
“tal como aparezca”.

La secuencia correcta es esta:

- el modelo base fija la estructura mínima de lo que puede ser instanciado;
- la instancia contextual configura un caso concreto sobre esa estructura;
- el adaptador recibe esa instancia y opera sobre ella;
- y el resultado es una materialización válida.

Esto significa que el adaptador nunca debe tratarse como punto de partida del
proceso.

Su claridad depende de que antes estén suficientemente resueltos:

- el modelo base,
- y la instancia.

### 4.6. El modelo base como condición de auditabilidad del adaptador

La relación entre adaptador y modelo base no solo importa para la descripción,
sino también para la auditoría del sistema.

Cuando el modelo base está bien definido, se vuelve posible distinguir si un
problema proviene:

- del modelo base;
- de la instancia construida sobre él;
- del protocolo del adaptador;
- o de la salida material producida.

En cambio, cuando el modelo base es deficiente, todo eso se mezcla y el adaptador
carga con una opacidad que no le corresponde.

Por eso, un modelo base suficientemente completo no solo ayuda al adaptador:
también vuelve posible diagnosticarlo con mayor rigor.

### 4.7. El modelo base como condición de reusabilidad del adaptador

La reusabilidad del adaptador también depende del modelo base.

Si cada instancia llega construida bajo criterios distintos, entonces el
adaptador:

- no puede operar de manera estable;
- no puede reaplicarse con claridad;
- y termina dependiendo de ajustes locales constantes.

En cambio, cuando las instancias derivan de un mismo modelo base suficientemente
detallado, el adaptador puede operar sobre una clase reconocible de casos.

Esto no significa que toda instancia sea idéntica, sino que todas pertenecen a
un mismo espacio estructural.

Y eso vuelve reutilizable al adaptador.

### 4.8. El modelo base como condición de no arbitrariedad

El punto más importante puede formularse así:

el modelo base completo protege al adaptador de la arbitrariedad.

No porque lo vuelva mecánico en un sentido trivial,
sino porque impide que su operación dependa de reconstrucciones tácitas del caso.

Cuando esto no se cumple, el adaptador puede parecer creativo, flexible o útil,
pero en realidad está cargando con una tarea ontológica que no le corresponde.

Cuando sí se cumple, el adaptador puede concentrarse en su función propia:
realizar, bajo protocolo, una instancia ya suficientemente determinada.

### 4.9. Fórmula condensada

Puede formularse así:

el adaptador depende estructuralmente del modelo base porque solo puede operar
con claridad cuando la instancia contextual que recibe ha sido construida sobre
una estructura suficientemente completa, tipificada y restringida.

### 4.10. Consecuencia metodológica

La consecuencia metodológica de todo esto es decisiva:

no se debe intentar perfeccionar adaptadores antes de haber refinado
suficientemente los modelos base de los que dependen las instancias.

Si el sistema quiere adaptadores claros, auditables y reutilizables, primero debe
resolver con rigor:

- qué estructura tiene el caso;
- cómo se instancia;
- qué elementos lo componen;
- qué valores pueden tomar;
- y qué restricciones deben cumplirse.

Solo entonces el adaptador puede dejar de adivinar y empezar verdaderamente a
operar.

## 5. RELACIÓN CON LA INSTANCIA CONTEXTUAL

La instancia contextual es el dominio inmediato del adaptador.

Esta afirmación debe tomarse con toda su fuerza.

El adaptador no recibe:

- una intención vaga;
- un tema general;
- una idea todavía amorfa;
- una simple descripción libre;
- ni una pieza ya materializada.

Recibe una **instancia contextual**.

Esto es decisivo porque fija con claridad el punto exacto en el que comienza a
operar el adaptador dentro del sistema.

La instancia contextual es una configuración ya compuesta, derivada de un modelo
base suficientemente completo y determinada hasta el punto en que puede ser
operada sin exigir que el adaptador reconstruya la ontología del caso.

Dicho de otro modo:

- antes de la instancia contextual, el problema es de modelado e instanciación;
- a partir de la instancia contextual, el problema pasa a ser de adaptación y
  realización.

Por eso, el adaptador no debe confundirse con un mecanismo de descripción.
La descripción y la determinación del caso ya ocurrieron antes.

El adaptador comienza cuando el caso ya está configurado y debe ser realizado.

### 5.1. La instancia contextual como punto de arranque del adaptador

La instancia contextual fija el punto de arranque correcto del adaptador.

Esto significa que el adaptador no trabaja sobre:

- posibilidades abiertas;
- bocetos conceptuales;
- o intuiciones todavía no estructuradas.

Trabaja sobre una unidad que ya porta:

- una estructura;
- una composición;
- una delimitación;
- y un grado suficiente de determinación.

La instancia contextual debe entenderse, por tanto, como el umbral entre:

- la fase en que el caso todavía se está construyendo;
- y la fase en que el caso ya puede ser llevado a una materialización.

Ese umbral es precisamente lo que vuelve inteligible al adaptador.

### 5.2. La instancia contextual no es una suma de rasgos sueltos

Una fuente importante de confusión consiste en tratar la instancia contextual como
si fuera solo una colección de atributos o una lista de rasgos.

Esa reducción es inadecuada.

La instancia contextual no es un inventario informal de propiedades.
Es una configuración compuesta.

Eso significa que:

- sus elementos ya fueron fijados por un modelo base;
- sus valores ya fueron instanciados bajo ciertas restricciones;
- y el caso ya existe como unidad estructurada, no como una suma arbitraria de
  observaciones.

Por eso, el adaptador no debería operar seleccionando informalmente “lo que le
parece importante” de la instancia, sino recibiendo una configuración que ya fue
producida como unidad.

### 5.3. La instancia contextual no sustituye al modelo base

Aunque la instancia contextual es el dominio inmediato del adaptador, no debe
olvidarse que la instancia deriva de un modelo base.

Eso significa que la instancia no es autosuficiente en sentido absoluto:
porta en sí misma la marca de la estructura de la que proviene.

Por eso, cuando se dice que el adaptador recibe una instancia contextual, no se
está diciendo que pueda ignorar el modelo base, sino algo más preciso:

- el adaptador opera inmediatamente sobre la instancia;
- pero la inteligibilidad de esa instancia depende del modelo base que la hizo
  posible.

Esto permite conservar correctamente la secuencia:

modelo base
→ instancia contextual
→ adaptador
→ materialización

### 5.4. La instancia contextual no es la intención

También es importante no confundir la instancia contextual con la intención.

La intención orienta la clase de realización que se busca, pero no describe por
sí sola el caso concreto.

La instancia contextual, en cambio, sí fija el caso.

Esto significa que dos instancias distintas pueden quedar bajo una misma
intención general y, sin embargo, exigir adaptaciones diferentes porque la
configuración del caso no es la misma.

Entonces:

- la intención orienta;
- la instancia contextual concreta el caso;
- y el adaptador opera sobre esa concreción.

### 5.5. La instancia contextual no es la pieza final

La instancia contextual tampoco debe confundirse con la materialización.

Ésta es una distinción crucial.

La instancia ya es una unidad estructurada, pero todavía no comparece como pieza
final.

No es todavía:

- el documento;
- el texto visible;
- el recurso pedagógico;
- la salida de plataforma;
- ni la manifestación concreta.

La instancia contextual existe todavía del lado del caso configurado.
La materialización pertenece ya al lado de la comparecencia.

El adaptador ocupa exactamente el tránsito entre ambos.

### 5.6. Qué significa que la instancia sea “suficientemente determinada”

Decir que la instancia contextual debe estar suficientemente determinada no
significa que deba fijarlo todo hasta el último detalle.

Significa algo más preciso:

debe estar determinada hasta el punto en que el adaptador pueda operar sin tener
que suplir por intuición lo que todavía no fue resuelto por el sistema.

Eso implica, al menos, que la instancia:

- no sea ambigua en sus elementos fundamentales;
- no mezcle niveles incompatibles;
- no deje abiertas cuestiones ontológicas centrales;
- y no obligue al adaptador a reinterpretar el caso para hacerlo operable.

La suficiencia de la determinación se mide, entonces, no por exhaustividad
absoluta, sino por la posibilidad de operación no arbitraria.

### 5.7. Qué ocurre cuando la instancia contextual está mal construida

Si la instancia contextual está mal construida, el adaptador hereda un problema
que no debería cargar.

Tiene que:

- interpretar lo que no fue fijado;
- decidir qué significa cada rasgo;
- reorganizar un caso todavía mal delimitado;
- o completar por cuenta propia lo que el sistema dejó abierto.

En ese momento, el adaptador deja de trabajar sobre una instancia y empieza a
trabajar sobre una semidescripción todavía inestable.

Eso es justamente lo que este planteamiento quiere evitar.

Por eso, la calidad del adaptador depende de manera directa de la calidad de la
instancia contextual que recibe.

### 5.8. La instancia contextual como condición de auditabilidad

La instancia contextual no solo vuelve operable al adaptador.
También vuelve auditable el sistema.

Cuando la instancia está bien configurada, se puede distinguir con más claridad:

- qué pertenece al caso;
- qué pertenece al protocolo del adaptador;
- y qué pertenece a la materialización resultante.

Sin esa distinción, cualquier fallo se vuelve difícil de localizar.

Entonces, la instancia contextual funciona también como una pieza de separación
estructural entre niveles del sistema.

### 5.9. Consecuencia metodológica

La consecuencia metodológica de todo esto es clara:

no se debe diseñar un adaptador partiendo de materiales todavía vagos o de
descripciones insuficientemente estructuradas.

Primero debe existir una instancia contextual válida.

Solo después tiene sentido preguntar:

- cómo debe adaptarse;
- hacia qué codominio;
- bajo qué protocolo;
- y con qué criterios de validez de salida.

Esto protege al sistema de una confusión frecuente:
hacer que el adaptador empiece demasiado pronto, cuando todavía no ha concluido
la construcción del caso.

### 5.10. Fórmula condensada

Puede formularse así:

la instancia contextual es el dominio inmediato del adaptador porque constituye
la forma ya compuesta y suficientemente determinada del caso sobre el cual la
adaptación puede comenzar sin reconstruir lo que debió haberse resuelto antes en
el modelo base y en la instanciación.

## 6. RELACIÓN CON LA MATERIALIZACIÓN

El adaptador sirve para transformar una instancia contextual en una
materialización.

Ésta es una tesis central y debe conservarse con toda claridad.

No se trata de una consecuencia secundaria del sistema, sino de una de sus
operaciones fundamentales. Si el modelo base fija la estructura de lo que puede
ser instanciado y la instancia contextual fija la configuración concreta del
caso, el adaptador aparece precisamente cuando ese caso ya no debe permanecer
solo como configuración interna y debe comparecer como realización concreta.

Por eso, la materialización no es un añadido accidental ni una simple “salida”
en sentido débil. Es la comparecencia efectiva del caso adaptado.

La materialización:

- no es la instancia;
- no es el protocolo;
- no es el modelo base;
- no es el adaptador.

Es el resultado del trabajo del adaptador.

Dicho con precisión:

- el modelo base hace posible la estructuración del caso;
- la instancia contextual fija el caso en una configuración operable;
- el adaptador realiza la transformación;
- y la materialización es la comparecencia concreta producida por esa operación.

### 6.1. Qué significa materialización

La materialización debe entenderse como la forma concreta en que un caso
adaptado comparece dentro de un régimen de salida determinado.

No equivale a una abstracción, ni a una descripción interna del caso, ni a un
mero estado intermedio del proceso.

Materializar significa hacer comparecer algo que antes existía como instancia
contextual en una forma concreta, reconocible y operable dentro del plano de la
salida.

Por eso, la materialización pertenece al lado de la comparecencia y no al lado
de la configuración.

### 6.2. La materialización no debe confundirse con la instancia

Una fuente frecuente de confusión consiste en tratar la materialización como si
fuera simplemente la misma instancia bajo otro nombre.

Eso es incorrecto.

La instancia contextual es el caso configurado antes de su comparecencia final.
La materialización es la forma concreta en que ese caso comparece después de la
adaptación.

La diferencia entre ambas no es solo terminológica. Es una diferencia de
estatuto dentro del sistema:

- la instancia existe como configuración contextual operable;
- la materialización existe como comparecencia concreta del caso.

Por eso, no basta con tener una instancia para decir que ya existe
materialización.

### 6.3. La materialización no debe confundirse con el adaptador

Tampoco debe ocurrir el error inverso: absorber la materialización dentro del
adaptador.

El adaptador es el operador de transformación.
La materialización es el resultado de esa transformación.

Esto implica que el adaptador no debe describirse como si ya fuera la pieza
final, la salida visible o la comparecencia concreta.

Hacer eso colapsa dos niveles distintos del sistema:

- el nivel de la operación;
- y el nivel del resultado.

La claridad del planteamiento depende de mantener separadas ambas cosas.

### 6.4. La materialización no sustituye al protocolo

El protocolo fija cómo debe realizarse la adaptación.
La materialización muestra qué ha sido producido por esa adaptación.

Por eso, el protocolo no es la salida.
Es la estructura normativa que guía el paso desde la instancia hasta la
materialización.

La materialización, en cambio, es el caso ya realizado.

Entonces:

- el protocolo regula;
- la materialización comparece.

### 6.5. La materialización es el lugar donde el caso se vuelve visible

La materialización tiene una función decisiva dentro del sistema:
es el punto en que el caso deja de existir únicamente como configuración interna
y se vuelve visible, legible, utilizable o desplegable en un plano de salida.

Eso significa que la materialización no es solo un efecto terminal del proceso,
sino el lugar en que la adaptación se hace realmente constatable.

Solo en la materialización se vuelve plenamente posible preguntar:

- qué se produjo;
- si la adaptación fue válida;
- si el caso sigue siendo reconocible;
- si las restricciones fueron respetadas;
- y si la salida pertenece verdaderamente al codominio previsto.

### 6.6. La materialización como criterio de realidad operativa

La materialización es también el punto en que el sistema deja de ser solo
descriptivo y se vuelve operativamente constatable.

Mientras el caso permanece solo como instancia contextual, todavía no ha sido
realizado en el plano de comparecencia final.

La materialización introduce algo más que una simple transformación: introduce
un criterio de realidad operativa.

Es ahí donde el sistema puede verificar si la adaptación fue capaz de hacer
comparecer el caso como una realización válida.

### 6.7. La materialización y el codominio

La relación entre materialización y codominio es estrecha, pero no debe
confundirse.

El codominio es el espacio de materializaciones posibles.
La materialización concreta es una realización particular dentro de ese espacio.

Por eso:

- el codominio no es la pieza singular;
- la materialización sí lo es.

Esta distinción permite conservar correctamente la secuencia:

instancia contextual
→ adaptador
→ materialización concreta perteneciente a un codominio

La materialización, entonces, no elimina la necesidad del codominio; la
presupone.

### 6.8. La materialización como resultado y no como criterio de partida

Otro error importante consiste en pensar la adaptación partiendo
primordialmente de la pieza final deseada y reconstruyendo hacia atrás el resto
del sistema.

La lógica correcta no debe ser:

pieza final imaginada
→ intuición adaptativa
→ justificación posterior

La lógica correcta es otra:

- primero se construye el modelo base;
- después se configura la instancia contextual;
- luego se diseña el adaptador;
- y finalmente se obtiene la materialización.

Esto significa que la materialización no debe ocupar el lugar de criterio
originario del sistema, sino el de resultado de una secuencia correctamente
estructurada.

### 6.9. Qué hace visible la materialización sobre el adaptador

La materialización permite evaluar retrospectivamente el trabajo del adaptador.

No solo muestra que algo fue producido. También permite observar:

- si el adaptador preservó lo que debía preservar;
- si transformó correctamente lo que debía transformar;
- si la salida pertenece al codominio pertinente;
- y si la intención que orientaba la adaptación fue realmente realizada.

Por eso, la materialización no es solo “lo que sale”, sino el punto de prueba de
la operación del adaptador.

### 6.10. Función esencial del adaptador

A la luz de todo esto, la función esencial del adaptador no es describir,
clasificar ni comentar la instancia.

Su función es realizar.

Dicho de manera más fuerte:

el adaptador existe para hacer comparecer materialmente una instancia contextual.

Ésta es una formulación central y debe preservarse, porque fija de manera clara
el lugar del adaptador dentro del sistema:

- no describe el caso;
- no lo inventa;
- no lo sustituye;
- no es la materialización misma;
- sino que opera para que el caso comparezca materialmente.

### 6.11. Fórmula condensada

Puede formularse así:

la materialización es la comparecencia concreta del caso adaptado, y el
adaptador existe para hacer posible el paso desde una instancia contextual ya
configurada hasta esa comparecencia material, sin colapsarse con ella ni
sustituir las estructuras que la hacen posible.

## 7. RELACIÓN CON EL CODOMINIO

El adaptador no produce una salida cualquiera.
Produce una salida perteneciente a un **codominio determinado**.

Esta afirmación es importante porque evita dos errores opuestos:

- pensar que el adaptador puede materializar una instancia contextual de cualquier
  manera;
- o pensar que el adaptador ya está definido por una pieza individual y concreta.

El codominio no debe entenderse como una pieza singular ya producida, sino como
el **espacio de materializaciones posibles** para cierta clase de realización.

Dicho de manera más precisa:

- el dominio está formado por instancias contextuales;
- el codominio está formado por materializaciones posibles;
- y el adaptador opera entre ambos.

La función del adaptador consiste en transformar un elemento del dominio en un
elemento del codominio.

### 7.1. El codominio como espacio de materialización

El codominio no nombra una sola salida.
Nombra una **clase de salidas posibles**.

Esto significa que, cuando se habla de codominio, no se está diciendo todavía:

- “ésta es la pieza final”,
- ni “ésta es la única forma que puede tomar la salida”,
- ni “éste es un formato aislado sin relación con una operación de adaptación”.

Lo que se está diciendo es otra cosa:

> existe un espacio de materializaciones válidas dentro del cual el adaptador
> debe producir una realización concreta.

Por eso, el codominio tiene un estatuto distinto del de la pieza final.

- la **pieza final** es una materialización particular;
- el **codominio** es el conjunto o espacio de materializaciones posibles al que
  dicha pieza pertenece.

Esta distinción es importante porque evita colapsar:

- el espacio de salida,
- con una salida ya individualizada.

### 7.2. El codominio no debe confundirse con la pieza individual

Una pieza concreta siempre es posterior al codominio.

Por ejemplo, si el sistema trabaja con una instancia contextual textual, el
adaptador no produce directamente “la idea de newsletter” o “la idea de hilo”,
sino una materialización concreta que pertenece al espacio de salidas posibles de
esa clase de realización.

Entonces, debe distinguirse entre:

- **codominio**: espacio de materializaciones posibles;
- **manifestación concreta**: una salida específica perteneciente a ese espacio.

Esta diferencia es importante porque permite entender que el adaptador no se
agota en “apuntar a una pieza”, sino en operar correctamente hacia una clase de
materialización válida.

### 7.3. El codominio tampoco debe confundirse con el dominio

El dominio y el codominio no pertenecen al mismo nivel.

El dominio está compuesto por **instancias contextuales ya configuradas**.
Es decir, por casos suficientemente determinados que todavía no comparecen como
materializaciones finales.

El codominio, en cambio, está compuesto por **materializaciones posibles**.

Eso significa que el paso del dominio al codominio no es una mera renombración
del mismo objeto, sino una transformación real de estatuto:

- en el dominio, el caso existe como instancia contextual;
- en el codominio, el caso comparece como materialización posible.

Por eso, el adaptador no opera dentro de un mismo plano.
Opera precisamente en el tránsito entre ambos.

### 7.4. El codominio depende de la clase de realización

El codominio no existe en abstracto ni se define sin relación con la clase de
realización que se busca.

Esto quiere decir que un mismo sistema puede tener múltiples codominios,
dependiendo de:

- la intención bajo la cual se opera;
- la clase de manifestación que se desea construir;
- y las condiciones de realización que deban respetarse.

Así, el codominio no debe pensarse como una bolsa indiferenciada de salidas, sino
como un espacio ya estructurado por condiciones de validez.

No cualquier materialización pertenece a cualquier codominio.
Cada codominio está ligado a una clase de realización.

### 7.5. El codominio como límite de validez de la adaptación

El codominio no solo indica hacia dónde se dirige el adaptador.
También impone límites a la adaptación.

Esto significa que el codominio participa en la determinación de preguntas como:

- qué cuenta como salida válida;
- qué deformaciones siguen siendo admisibles;
- qué transformaciones exceden la clase de realización buscada;
- y en qué punto una salida deja de pertenecer al espacio para el cual el
  adaptador fue concebido.

En este sentido, el codominio no es únicamente “el lugar de llegada”.
También actúa como criterio estructural de corrección de la salida.

### 7.6. Relación entre codominio y materialización

La relación correcta no debe formularse como si el codominio fuera algo opuesto a
la materialización.

Al contrario:
el codominio pertenece al lado de la materialización.

La precisión necesaria es otra:

- el codominio no es la materialización singular;
- es el espacio de materializaciones posibles;
- y la pieza o salida concreta es una instancia particular dentro de ese espacio.

Esto permite conservar algo central del sistema:

el adaptador sí sirve para transformar una instancia contextual en una
materialización.

Pero esa materialización no aparece como pieza aislada y arbitraria, sino como
elemento perteneciente a un codominio determinado.

### 7.7. Relación entre codominio e intención

La intención no debe confundirse con el codominio, pero sí condiciona qué clase
de codominio tiene sentido.

No toda intención conduce al mismo espacio de materialización.

Por eso, la intención no reemplaza al codominio, pero sí participa en la
determinación del horizonte bajo el cual un cierto codominio resulta pertinente.

Así, puede decirse que:

- la intención orienta la clase de adaptación que debe construirse;
- y el codominio fija el espacio de materializaciones posibles de esa adaptación.

### 7.8. Fórmula condensada

Puede formularse así:

el codominio es el espacio de materializaciones posibles para una cierta clase de
realización, y el adaptador opera transformando una instancia contextual del
dominio en una materialización concreta perteneciente a ese espacio.

### 7.9. El codominio no se agota en el nombre del formato

No basta con nombrar el codominio mediante etiquetas como:

- Instagram Reel,
- Instagram Carousel,
- newsletter,
- hilo,
- guía,
- microsecuencia,
- documento,
- ficha técnica.

Esas etiquetas solo nombran de manera inicial una clase de materialización.

Para que el codominio quede verdaderamente descrito, el adaptador debe
especificar también las condiciones estructurales de validez de la salida.

Eso significa que el codominio debe ser descrito en términos de:

- restricciones materiales;
- convenciones de realización;
- límites de tamaño o extensión cuando apliquen;
- organización interna esperable;
- criterios de legibilidad o segmentación;
- y mejores prácticas relevantes para esa clase de materialización.

Por tanto, el codominio no debe pensarse solo como un rótulo de formato,
sino como un espacio de materializaciones posibles con condiciones explícitas de
realización.

### 7.10. La descripción del codominio forma parte del trabajo del adaptador

Si el adaptador transforma una instancia contextual en una materialización
concreta, entonces no basta con que “apunte” a un codominio.
Debe describir suficientemente qué cuenta como materialización válida dentro de
ese codominio.

Por ejemplo, si el codominio es:

- Instagram Reel,

el adaptador no debería limitarse a decir que produce “un guión para reel”.

Debería poder explicitar:

- qué tipo de estructura debe tener ese guión;
- qué restricciones de longitud son razonables;
- cómo debe organizarse el contenido;
- qué distribución verbal resulta compatible con esa clase de salida;
- y qué condiciones permiten considerar válida la materialización.

Lo mismo ocurre con:

- Instagram Carousel,
- newsletter,
- guía de reexplicación,
- microsecuencia guiada,
- o cualquier otro codominio.

Esto vuelve más fuerte la definición del adaptador, porque muestra que no solo
recibe una instancia y produce algo, sino que:

- conoce el espacio de salida,
- y opera bajo una descripción estructural de ese espacio.

### 7.11. Consecuencia metodológica

La principal consecuencia metodológica de esta distinción es que ya no debe
pensarse al adaptador como un mecanismo que “produce piezas” en sentido bruto.

Debe pensarse como un operador que:

- recibe una instancia contextual;
- actúa bajo un protocolo;
- y conduce esa instancia a una materialización válida dentro de un codominio.

Eso vuelve mucho más claro el lugar del adaptador dentro del sistema:

no define el caso,
no sustituye a la intención,
no se confunde con la pieza final,
y no se agota en el formato visible de salida.

Su lugar está en la transformación que lleva desde la instancia contextual hasta
una materialización concreta perteneciente a un codominio determinado.

## 8. RELACIÓN CON LA INTENCIÓN

La intención ocupa una posición necesaria dentro del planteamiento del adaptador,
pero no debe confundirse con ninguna de las otras piezas del sistema.

No equivale:

- al modelo base;
- ni a la instancia contextual;
- ni al dominio;
- ni al codominio;
- ni a la manifestación material;
- ni a la pieza final ya producida.

Sin embargo, tampoco puede quedar fuera del planteamiento, porque sin intención
no se vuelve inteligible qué clase de realización debe llevar a cabo el
adaptador.

La intención responde a una pregunta distinta de las demás:

**¿para qué debe realizarse esta instancia contextual?**

Ésa es su función específica.

Mientras que:

- el modelo base fija la estructura de aquello que puede ser instanciado;
- la instancia contextual fija la configuración concreta del caso;
- el adaptador fija la operación de transformación;
- y el codominio fija el espacio de materializaciones posibles;

la intención fija el **horizonte de realización** bajo el cual el adaptador cobra
sentido.

En otras palabras:

- la instancia dice **qué caso ha sido configurado**;
- el adaptador dice **cómo se transforma ese caso**;
- la materialización dice **en qué comparece finalmente**;
- y la intención dice **para qué debía comparecer de ese modo y no de otro**.

Por eso, la intención no debe entenderse como una capa decorativa ni como una
mera nota contextual. Introduce una diferencia estructural en la construcción del
adaptador.

No es lo mismo construir un adaptador para:

- enseñar;
- sintetizar;
- persuadir;
- evaluar;
- diagnosticar;
- distribuir;
- manifestar comercialmente;
- organizar atención;
- producir validación;
- o abrir una relación de valor.

En todos esos casos puede existir:

- una misma clase general de instancia;
- e incluso un mismo espacio amplio de materializaciones posibles;

pero la lógica de adaptación no será la misma, porque no se está buscando la
misma clase de realización.

Eso significa que la intención no determina por sí sola la salida final, pero sí
determina el tipo de problema adaptativo que debe resolverse.

Pero tampoco debe suponerse que la intención solo puede formularse en ese nivel
de generalidad.

También son intenciones válidas formulaciones más específicas, por ejemplo:

- crear guión para Instagram Reel;
- crear texto para Instagram Carousel;
- crear guía de reexplicación;
- crear microsecuencia guiada.

Esto obliga a reconocer que la intención puede variar en granularidad sin dejar
de seguir siendo intención.

### 8.1. La intención no es equivalente a la salida

Una fuente importante de confusión consiste en identificar la intención con la
pieza resultante.

Esa identificación es incorrecta.

Por ejemplo:

- “enseñar” no equivale a “guía didáctica”;
- “sintetizar” no equivale a “resumen”;
- “persuadir” no equivale a “anuncio”;
- “evaluar” no equivale a “examen”;
- “diagnosticar” no equivale a “informe”;
- “manifestar comercialmente” no equivale a “landing page” o “pieza promocional”.

En cada uno de estos casos, la pieza visible es solo una de las posibles
materializaciones de una intención dada.

Por tanto, la intención no debe definirse por el nombre de una pieza, sino por el
tipo de realización que orienta la adaptación.

### 8.2. La intención no sustituye a la instancia

Tampoco debe ocurrir el movimiento opuesto: absorber la instancia dentro de la
intención.

No basta con saber que se quiere:

- enseñar,
- persuadir,
- o sintetizar.

Todavía hace falta saber **qué caso concreto** se está tratando.

La intención no reemplaza a la instancia porque no configura por sí misma:

- los rasgos del caso;
- sus restricciones;
- sus valores;
- ni su estructura.

Dos instancias distintas pueden compartir la misma intención general y, sin
embargo, requerir adaptaciones distintas precisamente porque la instancia no es
idéntica.

Entonces, la intención orienta la adaptación, pero no describe el caso.

### 8.3. La intención no sustituye al codominio

También sería un error absorber el codominio dentro de la intención.

La intención fija el horizonte de realización, pero no determina por sí sola el
espacio de salidas posibles.

Por ejemplo, una intención como “enseñar” puede realizarse en más de un
codominio:

- una secuencia guiada;
- una explicación estructurada;
- una pieza comparativa;
- una actividad de verificación;
- una manifestación textual pedagógica;
- una manifestación audiovisual pedagógica.

Eso significa que intención y codominio están relacionados, pero no son lo mismo.

La intención responde a:
**para qué adaptar**.

El codominio responde a:
**en qué tipo de materialización puede comparecer válidamente esa adaptación**.

### 8.4. La intención condiciona la clase de adaptación

Éste es el punto más importante.

La intención no reemplaza al adaptador, pero condiciona la clase de adaptación
que debe diseñarse.

Eso quiere decir que la intención participa en preguntas como:

- qué debe preservarse del caso para cumplir la realización buscada;
- qué puede transformarse sin perder validez;
- qué tipo de protocolo tiene sentido;
- qué criterios permiten juzgar que la adaptación fue correcta;
- y qué clase de materialización cuenta como logro de la intención.

Por eso, una misma instancia contextual no queda automáticamente asociada a un
solo adaptador universal.

Puede haber distintas clases de adaptación sobre una misma instancia, según la
intención bajo la cual se opere.

Esto no significa que todo dependa arbitrariamente de la intención, sino que la
intención introduce una orientación estructural en la operación del adaptador.

### 8.5. La intención como condición de diseño del adaptador

En la construcción del adaptador, la intención debe entrar como condición de
diseño.

Eso significa que, para describir un adaptador de manera suficientemente clara,
no basta con declarar:

- qué dominio recibe;
- qué codominio produce;
- qué protocolo sigue.

También debe declararse:

- bajo qué intención fue construido;
- qué clase de realización busca;
- y qué criterio de éxito adopta respecto de esa intención.

Así, la intención no se añade al final como comentario interpretativo, sino que
forma parte del marco bajo el cual el adaptador es inteligible.

### 8.6. La intención puede tener distintos niveles de especificidad

La intención no debe pensarse solo en términos amplios o abstractos.

Puede aparecer en distintos niveles de especificidad, por ejemplo:

- enseñar;
- sintetizar;
- persuadir;
- evaluar;
- diagnosticar;
- distribuir;
- manifestar comercialmente;
- crear guión para Instagram Reel;
- crear texto para Instagram Carousel;
- crear guía de reexplicación;
- crear microsecuencia guiada.

Esto significa que la intención no tiene una sola escala natural.

Puede ser:

- general;
- intermedia;
- o altamente específica.

Esta observación es importante porque impide suponer que toda intención debe
formularse primero en un nivel amplio y solo después traducirse a piezas
particulares.

En muchos casos, la intención ya puede venir dada en un nivel suficientemente
concreto como para orientar directamente el diseño del adaptador.

Por eso, el sistema no debe imponer de antemano una única granularidad de la
intención.

Debe admitir que una intención válida puede estar formulada:

- como finalidad general;
- como clase de realización buscada;
- o como objetivo adaptativo muy específico.

### 8.7. La especificidad de la intención modifica el diseño del adaptador

El nivel de especificidad de la intención influye directamente en el diseño del
adaptador.

No exige el mismo tipo de descripción un adaptador orientado a:

- enseñar un tema;
  que un adaptador orientado a:
- crear un guión para Instagram Reel;
  o uno orientado a:
- crear una guía de reexplicación.

Esto no significa que haya que confundir intención, codominio y pieza final.

Significa algo más preciso:

la intención puede ya venir formulada en un grado de especificidad suficiente
como para condicionar de manera fuerte:

- el tipo de protocolo,
- el tipo de codominio relevante,
- y la forma de materialización esperable.

Por tanto, el planteamiento del adaptador debe admitir que la intención:

- no siempre es macro,
- no siempre es genérica,
- y no siempre necesita una cadena larga de mediaciones para volverse operativa.

### 8.8. Fórmula condensada

Puede formularse así:

La intención no es la instancia, ni el codominio, ni la pieza final.
Es el horizonte bajo el cual una instancia contextual debe ser realizada.
Por eso, no sustituye al adaptador, pero sí condiciona decisivamente la clase de
adaptación que debe construirse.

9. LO QUE EL ADAPTADOR NO ES

Para que el concepto no se deforme, conviene fijar lo que el adaptador no es.

9.1. No es el modelo base
No fija la estructura mínima de la entidad.
Eso corresponde al modelo base.

9.2. No es la instancia contextual
No configura el caso.
Opera sobre un caso ya configurado.

9.3. No es la manifestación material
No es la pieza visible final.
La produce.

9.4. No es una plantilla vacía
No toma cualquier cosa y la convierte sin restricciones.

9.5. No es una operación intuitiva
No debe compensar por intuición las deficiencias del modelo base o de la instancia.

9.6. No es un clasificador de casos
Su función principal no es decidir para qué tipo de casos sirve.
Su función principal es transformar un caso del dominio en una materialización del codominio.

## 10. EL ADAPTADOR COMO PROTOCOLO

El adaptador no debe entenderse solo como una transformación abstracta entre un
dominio y un codominio.

Esa formulación es necesaria, pero no suficiente.

Si se lo tratara únicamente como una función en sentido abstracto, bastaría con
decir que recibe una instancia y produce una salida. Sin embargo, esa
formulación deja abierta una parte decisiva del problema:

**cómo debe realizarse la transformación para que siga siendo válida, consistente
y evaluable.**

Por eso, el adaptador no es solo una función.
Es una **función protocolizada de realización**.

Esto significa que la transformación que ejecuta no ocurre de manera libre, sino
bajo una estructura normativa explícita.

Dicho de otro modo:

- no basta con que el adaptador transforme;
- debe transformar de un modo controlado;
- y ese control lo introduce el protocolo.

### 10.1. Qué significa que el adaptador opere bajo protocolo

Decir que el adaptador opera bajo protocolo significa que su funcionamiento no
queda entregado a improvisación local ni a intuiciones no declaradas.

El protocolo fija las condiciones bajo las cuales la operación del adaptador
puede considerarse correcta.

Eso implica que el adaptador no actúa como una simple caja negra que recibe una
instancia y arroja una pieza, sino como una operación reglada que debe poder
responder, al menos, a estas preguntas:

- qué recibe exactamente;
- qué parte de lo recibido toma como operable;
- qué reglas usa para transformar;
- qué límites no puede romper;
- qué cuenta como salida válida;
- y cómo puede diagnosticarse si la adaptación fue adecuada o fallida.

Así, el protocolo no es un adorno metodológico del adaptador.
Es la estructura que vuelve inteligible su operación.

También debe admitirse que una misma intención puede quedar satisfecha por más de
un protocolo válido.

Por eso, la protocolización no debe entenderse como un cierre que reduzca toda
intención a una sola forma de adaptación, sino como la explicitación rigurosa de
una manera posible de realizarla.

### 10.2. El protocolo no reemplaza al adaptador

También conviene evitar una confusión inversa.

Que el adaptador opere bajo protocolo no significa que el protocolo y el
adaptador sean idénticos.

El adaptador sigue siendo el operador de transformación.

El protocolo fija:

- las reglas de su operación;
- las condiciones de validez;
- los criterios de preservación y transformación;
- y el modo en que puede juzgarse la corrección de la salida.

Por tanto:

- el adaptador realiza;
- el protocolo norma esa realización.

El primero es la pieza operativa.
El segundo es la estructura normativa de esa operación.

### 10.3. Qué fija el protocolo

En términos mínimos, el protocolo del adaptador debe fijar seis cuestiones.

#### a) Qué recibe el adaptador

Debe quedar explícito cuál es la clase de instancia contextual que el adaptador
puede recibir.

Esto es importante porque el adaptador no opera sobre cualquier cosa, sino sobre
una instancia ya configurada.

Entonces, el protocolo debe aclarar:

- qué forma de instancia acepta;
- qué grado de completitud requiere;
- y qué condiciones mínimas debe cumplir la entrada para que la operación tenga
  sentido.

#### b) Qué parte de la instancia toma como operable

No toda instancia se opera del mismo modo.

El protocolo debe fijar qué partes de la instancia entran en juego directo en la
adaptación y bajo qué estatuto.

Esto no significa que el adaptador “elija arbitrariamente” qué le importa.
Significa que el protocolo debe declarar con claridad:

- qué componentes de la instancia son relevantes para la operación;
- cuáles funcionan como invariantes;
- cuáles pueden ser redistribuidos;
- y cuáles solo sirven como restricciones de contexto.

Esta parte es importante porque impide que la adaptación se vuelva opaca.

#### c) Qué reglas de transformación aplica

Aquí se encuentra el núcleo operativo del protocolo.

El protocolo debe declarar:

- qué transformaciones están permitidas;
- cómo se realiza el paso de la instancia a la materialización;
- bajo qué secuencia;
- y con qué criterio se decide que una transformación es legítima.

Sin esta capa, el adaptador corre el riesgo de convertirse en una noción vaga de
“traducción”, sin estructura verificable.

#### d) Qué restricciones debe respetar

La adaptación no debe deformar arbitrariamente la instancia.

Por eso, el protocolo debe declarar restricciones, por ejemplo:

- qué no puede perderse;
- qué no puede introducirse de forma injustificada;
- qué límites impone el codominio;
- y qué umbrales de desviación ya volverían inválida la salida.

Las restricciones hacen visible algo muy importante:
el adaptador no produce simplemente una versión distinta del caso, sino una
realización que debe seguir siendo reconocible como realización válida de ese
caso.

#### e) Qué cuenta como salida válida

No toda salida producida por el adaptador es automáticamente correcta.

El protocolo debe fijar criterios de validez de la salida.

Eso implica poder responder preguntas como:

- cuándo una materialización pertenece realmente al codominio previsto;
- cuándo una salida preserva lo que debía preservarse;
- cuándo una adaptación sigue respondiendo a la intención bajo la cual fue
  diseñada;
- y cuándo una pieza producida por el adaptador ya no cuenta como realización
  válida del caso.

#### f) Cómo se evalúa si la adaptación fue correcta

El protocolo no solo debe normar la transformación, sino también abrir la
posibilidad de evaluación y diagnóstico.

Eso significa que debe poder aclararse:

- qué signos permiten considerar exitosa la adaptación;
- qué tipo de errores pueden aparecer;
- cómo distinguir entre error de instancia, error de protocolo y error de
  materialización;
- y bajo qué condiciones conviene revisar el adaptador mismo.

### 10.4. Qué gana el sistema cuando el adaptador es protocolizado

Cuando el adaptador queda descrito protocolariamente, el sistema gana varias
cosas al mismo tiempo.

#### a) Gana consistencia

La adaptación deja de depender solo del juicio local de quien opera el caso.

#### b) Gana repetibilidad

Dos operaciones sobre instancias análogas pueden realizarse bajo la misma lógica
sin necesidad de reconstruir todo desde cero.

#### c) Gana auditabilidad

Puede examinarse qué parte del proceso falló y por qué.

#### d) Gana comparabilidad

Dos adaptadores pueden compararse no solo por sus salidas, sino por sus
protocolos de operación.

#### e) Gana implementabilidad

Un adaptador protocolizado se acerca más a una pieza implementable que uno cuya
lógica permanece tácita.

### 10.5. Qué relación tiene esto con el modelo base completo

El carácter protocolizado del adaptador depende directamente del refinamiento del
modelo base y de la calidad de la instancia.

Si la instancia llega mal definida, el protocolo se vuelve frágil, porque tendrá
que compensar con reglas locales lo que el modelo no resolvió.

En cambio, si la instancia está suficientemente determinada, el protocolo puede
concentrarse en lo que sí le corresponde:

- normar la transformación;
- controlar la realización;
- y hacer evaluable la salida.

Por eso, el adaptador se vuelve protocolizable en sentido fuerte solo cuando ya
opera sobre instancias suficientemente claras.

### 10.6. El protocolo como condición de claridad del adaptador

La idea central de esta sección puede condensarse así:

el adaptador deja de ser una noción opaca cuando su operación se vuelve
protocolaria.

Mientras el adaptador solo se entienda como “algo que transforma”, seguirá
habiendo demasiada indeterminación acerca de:

- cómo transforma;
- bajo qué límites;
- con qué criterio;
- y cuándo su trabajo puede considerarse correcto.

En cambio, cuando el adaptador se formula bajo protocolo, su operación queda
mucho más cerca de una estructura clara de realización.

### 10.7. La intención no determina un único protocolo

Una misma intención no determina necesariamente un único protocolo de adaptación.

Esto significa que, incluso manteniendo constantes:

- la intención,
- la clase de instancia contextual,
- y el codominio general de salida,

pueden existir múltiples protocolos válidos de adaptación.

Dicho de otro modo:

no debe suponerse que a una intención dada corresponde automáticamente un único
adaptador.

Puede haber más de un adaptador para la misma intención,
siempre que cada uno:

- opere sobre la misma clase de instancia o sobre una clase compatible;
- respete las restricciones estructurales del caso;
- y produzca una materialización válida dentro del codominio pertinente.

### 10.8. Pluralidad de protocolos y comparación entre adaptadores

La existencia de más de un protocolo para la misma intención no debe leerse como
defecto del sistema.

Al contrario, muestra que el espacio de adaptación puede admitir más de una forma
válida de realización.

Esto permite pensar, para una misma intención, en:

- protocolos más directos o más desarrollados;
- protocolos más condensados o más progresivos;
- protocolos más estables o más experimentales;
- y, en general, familias de adaptadores que comparten intención pero difieren en
  la forma de realización.

Por eso, la relación entre intención y adaptador no debe formularse como una
asociación uno a uno.

Lo correcto es decir:

la intención orienta la clase de adaptación que debe diseñarse,
pero no fija por sí sola un único protocolo posible.

### 10.9. Fórmula condensada

Puede decirse entonces:

el adaptador no es solo una transformación entre instancia y materialización;
es una transformación reglada por un protocolo que fija la entrada operable, las
reglas de transformación, las restricciones, las condiciones de validez de la
salida y los criterios de evaluación de la adaptación.

11. EL ADAPTADOR COMO OPERADOR Y NO COMO COMPENSADOR

Esta distinción es decisiva.

Un adaptador mal fundado compensa:

- vacíos del modelo,
- ambigüedades de la instancia,
- y decisiones no tomadas antes.

Un adaptador bien fundado opera:

- sobre una instancia ya determinada,
- con reglas explícitas,
- hacia una materialización válida.

La diferencia entre ambos es profunda.

El primero:

- interpreta demasiado,
- inventa demasiado,
- y oscurece el sistema.

El segundo:

- transforma con claridad,
- permite auditoría,
- y conserva la arquitectura del proceso.

## 12. ESTRUCTURA MÍNIMA DE UN ADAPTADOR

Un adaptador suficientemente bien planteado no puede quedar descrito solo por su
nombre o por la pieza que eventualmente produce.

Si el concepto ha de operar con claridad dentro del sistema, debe poder
describirse, al menos, mediante una estructura mínima explícita.

Esta estructura mínima no pretende cerrar todavía todas las variantes posibles de
adaptador, pero sí fijar los componentes sin los cuales el concepto seguiría
siendo demasiado difuso, demasiado local o demasiado dependiente de intuiciones
no declaradas.

Dicho de otra manera:

la estructura mínima del adaptador no agota su teoría, pero establece el umbral a
partir del cual deja de ser una noción vaga y comienza a comportarse como una
pieza estructural del sistema.

### 12.1. Identidad del adaptador

Todo adaptador debe poder ser identificado como unidad distinguible.

Esto implica que debe poseer:

- una identidad propia;
- una delimitación conceptual;
- y una diferencia respecto de otros adaptadores posibles.

La identidad del adaptador no cumple una función decorativa.
Permite:

- distinguir una familia de adaptación de otra;
- registrar versiones;
- hacer comparaciones;
- y evitar que adaptaciones diferentes queden confundidas bajo un mismo nombre.

Un adaptador sin identidad explícita no puede integrarse con claridad a un
sistema más amplio.

### 12.2. Intención bajo la cual opera

Ningún adaptador existe en abstracto, como si toda transformación contextual
respondiera al mismo problema.

Por eso, la estructura mínima del adaptador debe declarar la intención bajo la
cual opera.

Esto no significa que la intención sustituya al adaptador.
Significa que el adaptador debe quedar ligado a la clase de realización que busca
producir.

Sin esa explicitación, el adaptador queda demasiado abierto y se vuelve difícil
determinar:

- qué clase de operación realiza;
- bajo qué horizonte debe evaluarse;
- y qué cuenta como éxito de su adaptación.

### 12.3. Modelo base del que depende indirectamente

El adaptador no opera directamente sobre el modelo base, pero sí depende de él de
manera estructural.

La razón es que la instancia contextual sobre la que trabaja deriva de ese modelo
base.

Por eso, un adaptador bien descrito debe indicar de qué modelo base depende
indirectamente, es decir:

- qué estructura hace posible la instancia que recibe;
- bajo qué tipificación fue configurada;
- y qué condiciones de completitud presupone.

Esto es importante porque impide tratar al adaptador como si pudiera operar sobre
cualquier instancia con independencia de la arquitectura que la produjo.

### 12.4. Clase de instancia contextual que recibe

El adaptador no recibe cualquier entrada imaginable.

Recibe una clase de instancias contextuales.

Por eso, la estructura mínima del adaptador debe poder declarar con suficiente
claridad:

- qué tipo de instancia recibe;
- qué forma general tiene esa instancia;
- y qué condiciones mínimas debe cumplir para que la adaptación tenga sentido.

Esto no significa que el adaptador deba diagnosticar el caso.
Significa que debe poder definirse con claridad cuál es la clase de instancia
sobre la que está diseñado para operar.

### 12.5. Dominio sobre el que opera

La estructura mínima debe poder declarar su dominio.

El dominio no es la intención ni la pieza final, sino el conjunto de instancias
contextuales sobre las que el adaptador puede operar válidamente.

Fijar el dominio es importante porque:

- delimita el alcance del adaptador;
- evita que se lo use como operador universal;
- y permite distinguir cuándo una instancia realmente pertenece a la clase de
  entrada para la cual fue diseñado.

Sin esta delimitación, el adaptador queda expuesto a usos arbitrarios y pierde
rigor estructural.

### 12.6. Codominio de materializaciones posibles

La estructura mínima también debe declarar el codominio.

El codominio no es una pieza concreta ya producida, sino el espacio de
materializaciones posibles al que pertenece la salida del adaptador.

Esto es necesario porque el adaptador no transforma solo “hacia algo útil”, sino
hacia una clase de realización definida.

Declarar el codominio permite fijar:

- qué tipo de salidas son admisibles;
- qué clase de materialización se está buscando;
- y bajo qué marco puede evaluarse la pertenencia válida de la salida.

### 12.7. Protocolo de transformación

El adaptador no es solo una transformación abstracta.
Opera bajo protocolo.

Por eso, su estructura mínima debe poder declarar el protocolo de transformación
que lo rige.

Ese protocolo debe fijar:

- cómo recibe la instancia;
- cómo la toma como operable;
- qué reglas de transformación aplica;
- qué secuencia de operación sigue;
- y bajo qué criterios la adaptación se considera correctamente ejecutada.

Sin protocolo explícito, el adaptador queda demasiado cerca de una caja negra.

### 12.8. Restricciones de validez

No toda transformación cuenta como adaptación válida.

Por eso, el adaptador debe declarar las restricciones que delimitan su operación.

Estas restricciones pueden referirse a cuestiones como:

- qué no puede perderse de la instancia;
- qué no puede introducirse arbitrariamente;
- qué límites impone el codominio;
- y qué umbral de desviación vuelve inválida la salida.

Las restricciones son necesarias porque convierten la adaptación en una operación
controlada y no en una mera variación libre del caso.

### 12.9. Criterios de preservación

Un adaptador bien planteado debe poder decir qué debe preservarse.

Esto no significa que el adaptador redefina por sí mismo la ontología del caso,
sino que debe declarar bajo qué criterios reconoce qué aspectos de la instancia
deben permanecer identificables a través de la transformación.

Los criterios de preservación sirven para evitar que la adaptación destruya la
continuidad estructural del caso.

Sin ellos, la adaptación corre el riesgo de convertirse en una reescritura
arbitraria más que en una realización válida.

### 12.10. Criterios de transformación

Tan importante como saber qué debe preservarse es saber qué puede o debe
transformarse.

Por eso, la estructura mínima del adaptador debe fijar también sus criterios de
transformación.

Estos criterios permiten declarar:

- qué partes del caso pueden redistribuirse;
- qué aspectos pueden reconfigurarse;
- qué cambios exige el codominio;
- y qué transformaciones siguen siendo compatibles con la intención y con la
  identidad operativa del caso.

Con esto se evita que la adaptación se entienda como preservación absoluta o como
transformación ilimitada.

### 12.11. Criterios de salida válida

No basta con producir una materialización.
Hace falta poder juzgar si esa materialización cuenta efectivamente como salida
válida del adaptador.

Por eso, la estructura mínima debe incluir criterios de salida válida.

Estos criterios permiten responder preguntas como:

- cuándo una salida pertenece realmente al codominio;
- cuándo puede considerarse una realización correcta de la instancia;
- y cuándo, aunque haya una pieza visible, ya no se está ante una adaptación
  válida.

Esto introduce un criterio explícito de evaluación interna del adaptador.

### 12.12. Estado del adaptador

Finalmente, el adaptador debe poder declarar su estado.

Esto es importante porque no todos los adaptadores tienen el mismo nivel de
estabilidad, consolidación o madurez operativa.

El estado puede servir para distinguir, por ejemplo:

- formulaciones provisionales;
- formulaciones estables;
- versiones en revisión;
- o adaptadores ya suficientemente consolidados para uso recurrente.

Sin esta marca de estado, el sistema pierde capacidad de seguimiento y corrección.

### 12.13. Sentido conjunto de la estructura mínima

Tomados por separado, estos componentes pueden parecer una simple lista.

Tomados en conjunto, muestran algo más importante:

un adaptador solo deja de ser una noción difusa cuando puede ser descrito como
una unidad con:

- identidad;
- orientación intencional;
- dependencia estructural respecto del modelo base;
- clase de instancia de entrada;
- dominio;
- codominio;
- protocolo;
- restricciones;
- criterios de preservación;
- criterios de transformación;
- criterios de salida válida;
- y estado.

Esto no significa que toda formulación de adaptador deba estar ya completamente
cerrada en todos esos puntos.
Pero sí significa que, sin una estructura de este tipo, el concepto permanece
demasiado vago para operar con precisión dentro del sistema.

### 12.14. Función metodológica de esta estructura mínima

La principal función metodológica de esta estructura mínima es impedir que el
adaptador quede reducido a una intuición útil pero opaca.

Gracias a esta estructura, el adaptador puede empezar a ser:

- comparable;
- auditable;
- reusable;
- refinable;
- e incluso eventualmente implementable.

Por eso, esta lista no debe verse como una formalidad excesiva, sino como la
condición mínima para que el concepto de adaptador pueda formar parte de una
arquitectura rigurosa de instancia, adaptación y manifestación.

### 12.15. Fórmula condensada

Puede formularse así:

la estructura mínima de un adaptador es el conjunto de componentes necesarios para
describir con claridad qué instancia recibe, bajo qué intención opera, sobre qué
dominio y codominio trabaja, con qué protocolo transforma, bajo qué
restricciones lo hace y con qué criterios puede juzgarse la validez de su
materialización.

## 13. VENTAJAS DE FUNDAR EL ADAPTADOR EN MODELOS BASE COMPLETOS

Cuando el adaptador trabaja sobre instancias derivadas de modelos base
suficientemente completos, no solo mejora la claridad del sistema en general:
cambia la naturaleza misma de la adaptación.

Esto ocurre porque el adaptador deja de operar sobre casos parcialmente abiertos
o insuficientemente determinados y comienza a operar sobre instancias cuya
estructura, valores posibles, restricciones y condiciones de validez ya fueron
resueltos en un nivel anterior del sistema.

La consecuencia es profunda:

el adaptador deja de compensar debilidades ontológicas del caso y pasa a
concentrarse en su función propia de realización protocolizada.

Dicho de manera más fuerte:

un modelo base completo no solo mejora la instancia; también vuelve más claro,
más reusable y más controlable al adaptador.

### 13.1. Primera ventaja: reduce opacidad

La primera gran mejora es la reducción de opacidad.

Cuando el modelo base es incompleto, el adaptador se ve obligado a decidir en
sombra cuestiones como:

- qué significa realmente cada rasgo de la instancia;
- qué parte del caso debe considerarse central;
- qué relaciones internas deben suponerse;
- y qué transformaciones siguen siendo admisibles.

En ese escenario, la operación del adaptador queda cargada de interpretación
tácita.

En cambio, cuando la instancia deriva de un modelo base suficientemente completo,
el adaptador ya no necesita reconstruir en silencio aquello que el sistema debió
haber fijado antes.

Eso vuelve mucho más visible:

- qué recibe;
- qué transforma;
- bajo qué reglas opera;
- y por qué produce cierta salida y no otra.

La opacidad disminuye porque la complejidad del caso deja de estar escondida en
la operación del adaptador y pasa a estar mejor resuelta en el modelo base y en
la instancia.

### 13.2. Segunda ventaja: aumenta reusabilidad

La segunda mejora importante es la reusabilidad.

Un adaptador no puede reutilizarse con estabilidad si cada nueva instancia llega
formada bajo criterios distintos, con ambigüedades diferentes o con vacíos
ontológicos que deben resolverse de nuevo en cada caso.

En ese contexto, lo que parece el “mismo adaptador” en realidad no lo es:
solo conserva el nombre, mientras cambia internamente su lógica de operación.

En cambio, cuando las instancias derivan de un mismo modelo base suficientemente
detallado, el adaptador puede trabajar sobre una clase estable de casos.

Eso no significa que todas las instancias sean idénticas.
Significa algo más importante:

pertenecen a un mismo espacio estructural y, por lo tanto, pueden ser operadas
sin rehacer desde cero la lógica del adaptador.

Por eso, el modelo base completo vuelve reutilizable al adaptador no por
simplificación artificial, sino por estabilidad del campo sobre el que opera.

### 13.3. Tercera ventaja: mejora auditabilidad

La tercera mejora es la auditabilidad.

Cuando el modelo base es deficiente, cualquier problema de salida tiende a
quedar mezclado:

- no se sabe si la falla provino del modelo base;
- de la instancia;
- del protocolo del adaptador;
- o del codominio hacia el que se intentó realizar el caso.

Esto hace muy difícil diagnosticar el sistema, porque cada error puede parecer
a la vez un problema de descripción, de adaptación y de materialización.

En cambio, cuando el modelo base está suficientemente completado, las capas del
sistema quedan mejor separadas.

Eso permite preguntar con mayor claridad:

- ¿el problema ya venía en la estructura del modelo base?
- ¿la instancia fue mal construida?
- ¿el protocolo del adaptador operó mal?
- ¿la salida producida no pertenece realmente al codominio?
- ¿la intención y el tipo de adaptación estaban mal articulados?

Esta posibilidad de separar errores es una ventaja crítica, porque vuelve al
sistema más controlable, más corregible y menos dependiente de intuiciones
globales.

### 13.4. Cuarta ventaja: hace comparables a los adaptadores

La cuarta mejora es la comparabilidad entre adaptadores.

Si los adaptadores operan sobre instancias heterogéneas, mal delimitadas o
construidas bajo criterios distintos, entonces compararlos se vuelve muy difícil.

Puede parecer que dos adaptadores hacen cosas parecidas, pero en realidad quizá:

- están resolviendo problemas ontológicos distintos;
- reciben clases de instancia no equivalentes;
- o compensan de maneras diferentes las debilidades del modelo.

En cambio, cuando los adaptadores trabajan sobre instancias derivadas de modelos
base suficientemente completos, se vuelve más legítimo compararlos.

Esa comparación puede hacerse con más rigor porque:

- operan sobre clases de instancia mejor definidas;
- sus entradas son más homogéneas en términos estructurales;
- y sus diferencias se vuelven más claramente atribuibles a su protocolo, a su
  codominio o a su intención de realización.

Entonces, el modelo base completo no solo mejora cada adaptador por separado:
también vuelve posible una teoría comparativa de los adaptadores.

### 13.5. Quinta ventaja: acerca el sistema a la implementación

La quinta mejora es que el sistema se acerca más a la implementación.

Un adaptador apoyado en descripciones vagas o incompletas puede funcionar solo a
costa de introducir:

- interpretación tácita;
- decisiones locales no formalizadas;
- y criterios difíciles de repetir con consistencia.

Ese tipo de adaptador puede parecer útil en un contexto artesanal, pero resulta
débil como pieza implementable.

En cambio, cuando la instancia está suficientemente determinada por un modelo
base completo, el adaptador se aproxima más a una pieza que puede describirse,
replicarse, auditarse e incluso implementarse de manera más fuerte.

La razón es clara:

- recibe una clase de entrada mejor definida;
- opera bajo restricciones más explícitas;
- y puede juzgarse con más claridad si su salida es válida o no.

Por eso, la completitud del modelo base no solo ayuda a pensar mejor el
adaptador: también lo vuelve más cercano a un operador realmente realizable en
arquitecturas más formales o implementables.

### 13.6. Ventaja de conjunto

Tomadas por separado, estas cinco ventajas ya son importantes.

Tomadas en conjunto, muestran algo más fuerte:

fundar el adaptador en modelos base completos transforma el lugar del adaptador
dentro del sistema.

Antes, el adaptador corre el riesgo de ser:

- opaco;
- irrepetible;
- difícil de auditar;
- poco comparable;
- y débilmente implementable.

Después, el adaptador puede convertirse en una pieza:

- más clara;
- más reusable;
- más diagnosable;
- más comparable;
- y más cercana a una implementación rigurosa.

La diferencia no es solo cuantitativa, sino cualitativa.

### 13.7. Consecuencia metodológica

La consecuencia metodológica de estas ventajas es directa:

si se quiere trabajar seriamente en el diseño de adaptadores, no basta con
refinar el protocolo del adaptador por sí solo.

Primero debe garantizarse que:

- el modelo base esté suficientemente completado;
- la instancia contextual pueda derivarse con claridad;
- y la arquitectura de entrada del adaptador no dependa de vacíos no resueltos.

De otro modo, el trabajo sobre adaptadores corre el riesgo de convertirse en una
compensación técnica de una insuficiencia estructural previa.

### 13.8. Fórmula condensada

Puede decirse entonces:

fundar el adaptador en modelos base completos reduce opacidad, aumenta
reusabilidad, mejora auditabilidad, vuelve comparables a los adaptadores y
acerca el sistema a la implementación, porque desplaza la complejidad ontológica
al nivel del modelo y de la instancia, liberando al adaptador para operar como
verdadero protocolo de realización.

## 14. CONSECUENCIA METODOLÓGICA

El adaptador obliga a pensar el sistema completo de manera más rigurosa.

Esta afirmación no debe entenderse como una observación secundaria, sino como una
consecuencia estructural del lugar que el adaptador ocupa dentro del sistema.

Mientras el análisis se mantiene solo en el plano de:

- la entidad que se quiere describir;
- o del caso que se quiere instanciar,

todavía puede parecer suficiente concentrarse en:

- la definición del modelo base;
- la composición de la instancia;
- y la coherencia interna de la configuración obtenida.

Pero en cuanto aparece el problema del adaptador, el sistema ya no puede
detenerse ahí.

El adaptador obliga a formular una pregunta más exigente:

**¿cómo se vuelve realizable una instancia contextual sin perder estructura y sin
caer en improvisación?**

Ésa es la pregunta metodológica que introduce el adaptador.

### 14.1. Del problema de descripción al problema de realización

Sin adaptador, el sistema podría quedar formulado como si su tarea principal
fuera solo describir correctamente una entidad o construir adecuadamente una
instancia.

Con adaptador, eso ya no basta.

Ahora también hay que pensar:

- cómo esa instancia se transforma;
- bajo qué reglas se realiza;
- hacia qué espacio de materialización se dirige;
- y qué condiciones deben cumplirse para que la salida siga siendo válida.

Esto significa que el adaptador desplaza el sistema desde una arquitectura
puramente descriptiva hacia una arquitectura de realización.

La descripción sigue siendo necesaria.
La instanciación sigue siendo necesaria.
Pero ninguna de las dos agota ya el problema.

### 14.2. El adaptador fuerza a explicitar lo que antes podía quedar implícito

Mientras solo se describe o se instancia, muchas decisiones pueden permanecer en
un nivel de intuición relativamente tolerable.

Pero cuando el caso debe ser adaptado, esas intuiciones ya no bastan.

El adaptador obliga a explicitar cosas como:

- qué cuenta como entrada operable;
- qué debe preservarse;
- qué puede transformarse;
- qué restricciones deben respetarse;
- qué clase de salida cuenta como válida;
- y cómo puede evaluarse si la adaptación fue correcta.

Esto quiere decir que el adaptador empuja al sistema a salir de una lógica de
descripción suficientemente buena y entrar en una lógica de operación
suficientemente clara.

Por eso, su efecto metodológico es tan importante.

### 14.3. El adaptador vuelve insuficiente una arquitectura solo orientada al caso

Otra consecuencia importante es que el adaptador impide pensar el sistema como si
bastara con:

- definir qué entidad se quiere describir;
- o qué caso se quiere instanciar.

Esas dos preguntas siguen siendo necesarias, pero ya no son suficientes.

A ellas se suman otras:

- ¿qué clase de realización se busca?
- ¿bajo qué intención se adaptará el caso?
- ¿qué codominio de materialización es pertinente?
- ¿qué protocolo permitirá la transformación?
- ¿qué errores podrían producirse en la adaptación?
- ¿cómo distinguir entre falla del modelo, de la instancia y del adaptador?

Esto amplía el horizonte del sistema.

Ya no alcanza con preguntar:
**qué es el caso**.

Ahora también hay que preguntar:
**cómo comparece materialmente ese caso bajo reglas explícitas**.

### 14.4. El adaptador vuelve visibles las insuficiencias previas del sistema

El adaptador también tiene una consecuencia metodológica más incisiva:
hace visibles defectos del sistema que antes podían permanecer ocultos.

Por ejemplo, cuando se intenta adaptar una instancia y aparecen problemas, puede
quedar expuesto que:

- el modelo base estaba incompleto;
- la instancia estaba mal construida;
- la intención estaba mal delimitada;
- el codominio estaba mal entendido;
- o el protocolo del adaptador estaba mal formulado.

Esto significa que el adaptador no solo opera sobre el sistema, sino que también
funciona como una prueba de su madurez.

En otras palabras:

un sistema puede parecer coherente mientras solo describe e instancia;  
pero es la necesidad de adaptación la que pone verdaderamente a prueba su
arquitectura.

### 14.5. El adaptador introduce exigencia de separación de niveles

Una de las consecuencias metodológicas más fuertes del adaptador es que obliga a
separar con más rigor niveles que de otro modo podrían mezclarse.

Por ejemplo, empuja a distinguir entre:

- modelo base;
- instancia contextual;
- intención;
- adaptador;
- codominio;
- y materialización concreta.

Sin esa separación, el sistema tiende a confundirse:

- la instancia absorbe decisiones adaptativas;
- el adaptador absorbe rasgos ontológicos del caso;
- el codominio se confunde con la pieza final;
- y la intención queda mezclada con la salida.

Entonces, el adaptador no solo añade una operación nueva.
También obliga a reorganizar mejor el sistema entero.

### 14.6. El adaptador introduce una disciplina de no improvisación

La presencia del adaptador obliga a rechazar una forma de trabajo muy frecuente:
la improvisación situada como sustituto de estructura.

Sin adaptador bien pensado, puede parecer aceptable pasar de la instancia a la
pieza por medio de:

- intuición del operador;
- costumbre local;
- hábitos no explicitados;
- o decisiones tomadas caso por caso sin marco común.

Pero eso debilita el sistema.

El adaptador, cuando se formula con claridad, exige otra cosa:

- reglas,
- protocolo,
- criterios de validez,
- y posibilidad de evaluación.

Por eso, su consecuencia metodológica no es solo agregar un paso intermedio,
sino introducir una disciplina de realización no improvisada.

### 14.7. El adaptador cambia el criterio de completitud del sistema

Antes de introducir el adaptador, un sistema podría considerarse relativamente
completo si logra:

- definir una entidad,
- construir un modelo base,
- e instanciar casos con cierta claridad.

Después de introducir el adaptador, ese criterio ya no alcanza.

Ahora un sistema solo puede considerarse más completo si también puede responder:

- cómo se realiza una instancia;
- cómo se valida esa realización;
- cómo se la audita;
- y cómo se evita que la salida dependa de interpretaciones tácitas no
  controladas.

Esto significa que el adaptador eleva el estándar de completitud del sistema.

### 14.8. El adaptador como pieza no tardía, sino constitutiva

A veces podría parecer que el adaptador es un añadido posterior, introducido solo
cuando ya existe una estructura suficientemente definida.

Esa lectura es engañosa.

Aunque el adaptador opera después del modelo base y de la instancia, no por eso
es un agregado marginal.

Es una pieza constitutiva del sistema porque hace posible algo que, sin él, el
sistema no podría lograr:

**el paso desde estructura configurada hasta comparecencia concreta.**

Sin ese paso, la arquitectura puede describir y organizar, pero no realizar.

Por eso, el adaptador no debe pensarse como un módulo opcional del final, sino
como una condición estructural para que el sistema complete su recorrido.

### 14.9. El adaptador como operador que obliga a pensar en recorrido completo

La consecuencia metodológica final es esta:

el adaptador obliga a pensar el recorrido completo del sistema.

No basta con pensar:

- qué entidad se modela,
- cómo se instancia,
- y qué rasgos tiene.

También hay que pensar:

- cómo esa instancia circula;
- cómo se transforma;
- bajo qué reglas comparece;
- y cómo se reconoce la validez de su comparecencia.

Así, el sistema deja de ser una arquitectura solo de descripción y se vuelve una
arquitectura de recorrido completo:

- configuración,
- adaptación,
- materialización.

### 14.10. Fórmula condensada

Puede formularse así:

el adaptador obliga a pensar el sistema completo de manera más rigurosa porque
ya no basta con describir una entidad o instanciar un caso; también hay que
explicitar cómo ese caso se vuelve realizable, bajo qué protocolo, hacia qué
codominio y con qué criterios de validez de salida.

### 14.11. Cierre de la consecuencia metodológica

Por eso, el adaptador no es un añadido tardío del sistema.

Es la pieza que obliga a cerrar el recorrido entre:

- estructura;
- instancia;
- adaptación;
- y comparecencia material.

Y precisamente por eso vuelve al sistema más exigente, pero también más claro,
más auditable y más cercano a una arquitectura verdaderamente operativa.

15. FÓRMULA CONDENSADA

El adaptador puede formularse así:

un adaptador es el operador protocolizado que transforma una instancia contextual,
derivada de un modelo base suficientemente completo, en una materialización
concreta perteneciente a un codominio de salida.

16. CIERRE

El adaptador aparece cuando una instancia contextual ya no debe permanecer solo
como configuración interna y debe comparecer como manifestación material.

Su función no es definir el caso, ni sustituir al modelo base, ni improvisar la
salida.

Su función es realizar:

- con protocolo,
- con restricciones,
- con validez,
- y con una relación explícita entre dominio y codominio.

Por eso, el adaptador ocupa una posición central en el sistema:

sin él, la instancia queda sin comparecencia;
sin modelo base completo, él queda condenado a adivinar;
y sin codominio, su operación pierde dirección.

El adaptador es, por tanto, la pieza que hace posible el paso controlado entre
instancia contextual y materialización. 17. NOTA METODOLÓGICA SOBRE EL USO DEL ADAPTADOR

El adaptador no debe diseñarse partiendo de la pieza final que se desea producir.

La secuencia correcta de construcción no es:

pieza deseada
→ intuición sobre cómo llegar a ella
→ adaptación

La secuencia correcta es:

modelo base completo
→ instancia contextual
→ definición del dominio
→ definición del codominio
→ protocolo de adaptación
→ materialización concreta

Esto tiene una consecuencia importante:

el adaptador no debe justificarse por el hecho de que “produce algo útil”,
sino por el hecho de que:

- recibe una clase bien definida de instancias;
- opera bajo reglas explícitas;
- preserva lo que debe preservarse;
- transforma lo que debe transformarse;
- y conduce a una materialización válida.

18. NOTA SOBRE EL ERROR MÁS FRECUENTE

El error más frecuente al pensar adaptadores consiste en confundir:

- adaptador,
- estrategia,
- pieza,
- formato,
- y materialización.

Estas entidades no deben colapsarse.

Más precisamente:

- la estrategia puede orientar la adaptación;
- el adaptador realiza la transformación;
- la pieza es una materialización concreta;
- el formato pertenece al régimen de salida;
- y la materialización es el resultado visible del proceso.

Cuando estas capas se mezclan, el adaptador se vuelve opaco y el sistema pierde
claridad.

19. CRITERIO DE CORRECCIÓN DE UN ADAPTADOR

Un adaptador está mejor formulado cuanto menos necesita:

- adivinar;
- reinterpretar;
- completar ontologías ausentes;
- o improvisar reglas locales.

Y está peor formulado cuanto más depende de:

- intuiciones del diseñador;
- decisiones tomadas fuera del modelo;
- o suposiciones no fijadas por la instancia.

Por eso, el criterio más fuerte de corrección no es solo:
“¿produce una salida?”

sino este otro:

“¿produce una salida válida sin tener que reconstruir por su cuenta aquello que
debió venir ya determinado por el modelo base y por la instancia contextual?”

20. FÓRMULA FINAL EXTENDIDA

Un adaptador es un operador protocolizado de realización que, dado un dominio de
instancias contextuales suficientemente determinadas por modelos base completos,
produce materializaciones válidas en un codominio de salida, sin sustituir al
modelo, sin redefinir la instancia y sin colapsarse con la pieza final.
