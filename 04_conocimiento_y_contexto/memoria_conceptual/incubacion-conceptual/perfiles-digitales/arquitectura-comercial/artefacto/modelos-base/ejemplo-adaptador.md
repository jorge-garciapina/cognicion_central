# Documento educativo

## Ejemplo detallado para comprender el concepto de adaptador

## 1. Carácter de este documento

Este documento tiene una función pedagógica.

No busca reemplazar la definición conceptual de **adaptador**, sino mostrar, por
medio de un ejemplo suficientemente detallado, qué problema resuelve y por qué
su forma correcta depende de que exista previamente una **instancia contextual
bien formada**, derivada de un **modelo base completo**.

El ejemplo retoma el contexto educativo, porque ahí se ve con claridad la
diferencia entre:

- describir un caso;
- intervenir sobre él;
- y construir un operador que traduzca una instancia ya determinada a una salida
  compatible con un codominio específico.

---

## 2. Objetivo del ejemplo

Se quiere enseñar el **Tema A** a estudiantes distintos.

Ya no estamos en la fase de definir el modelo base del estudiante respecto del
Tema A. Supondremos que ese trabajo ya fue realizado y que, por tanto, los
estudiantes pueden describirse como **instancias válidas** de un modelo base
completo.

El nuevo problema es este:

> dada una instancia ya configurada, ¿cómo producir una salida concreta adecuada
> sin tener que reinterpretar desde cero el caso en cada intervención?

Éste es exactamente el lugar donde aparece el adaptador.

---

## 3. Qué ya está dado antes del adaptador

ESTO ESTÁ INCOMPLETO: ANTES DEL ADAPTADOR ESTÁ EL MODELO BASE, REALMENTE ES POSIBLE TENER ADAPTADOR SIN INSTANCIAS CONTEXTUALES. EL ADAPTADOR DEBE CONOCER EL MODELO BASE. SE DEBE ESPECIFICAR QUE SIN UN CONOCIMIENTO DEL MODELO, ENTONCES SE TIENE EL MISMO PROBLEMA QUE SE MENCIONA EN LA TEORIA GENERAL DE MODELADO DE IDEAS: TENDRÁ QUE IMPROVISAR LA RESPUESTA.

Antes del adaptador, ya existe una instancia contextual bien formada.

Eso significa que ya no estamos trabajando con frases vagas como:

- “este estudiante necesita más ejemplos”;
- “a este otro hay que explicarle más despacio”;
- “este entiende, pero no sabe aplicar”.

En lugar de eso, ya existe una instancia con elementos definidos sobre un modelo
base completo.

Para este ejemplo, tomaremos tres estudiantes ya descritos de forma válida.

---

## 4. Instancias de partida

### Estudiante 1

- `familiaridad_con_el_tema`: `introductoria`
- `tipo_de_dificultad_dominante`: `expresiva`
- `modo_de_entrada_mas_efectivo`: `ejemplo_resuelto`
- `grado_de_guia_requerida`: `media`
- `ritmo_de_progresion_compatible`: `pasos_medios`
- `modo_de_verificacion_mas_fiable`: `reexplicacion`
- `tolerancia_a_la_abstraccion`: `media`
- `estado_de_instancia`: `estable`

### Estudiante 2

- `familiaridad_con_el_tema`: `operativa`
- `tipo_de_dificultad_dominante`: `de_transferencia`
- `modo_de_entrada_mas_efectivo`: `comparacion`
- `grado_de_guia_requerida`: `baja`
- `ritmo_de_progresion_compatible`: `saltos_compactos`
- `modo_de_verificacion_mas_fiable`: `aplicacion_a_nuevo_caso`
- `tolerancia_a_la_abstraccion`: `alta`
- `estado_de_instancia`: `estable`

### Estudiante 3

- `familiaridad_con_el_tema`: `incidental`
- `tipo_de_dificultad_dominante`: `atencional`
- `modo_de_entrada_mas_efectivo`: `caso_concreto`
- `grado_de_guia_requerida`: `alta`
- `ritmo_de_progresion_compatible`: `micro_pasos`
- `modo_de_verificacion_mas_fiable`: `resolucion_guiada`
- `tolerancia_a_la_abstraccion`: `baja`
- `estado_de_instancia`: `estable`

Estas instancias pertenecen al **dominio** del sistema de adaptación.

---

## 5. Qué problema aparece si no existe adaptador

Aunque las instancias ya estén bien descritas, todavía no tenemos una salida.

ESTA AFIRMACIÓN ESTÁ MAL: LA INSTANCIA NO NOS DICE NINGUNA DE LAS COSAS DE LAS QUE HABLAS (entra mejor por caso concreto, necesita guía alta, requiere micro-pasos, y tiene tolerancia baja a la abstracción), POR DEFINICIÓN LA INSTANCIA CONTEXTUAL NO DEBE DECIR NADA DE ESO, ESAS SON RESPUESTAS PROTOCOLARIAS QUE NO PERTENECEN A LA INSTANCIA CONTEXTUAL.
Saber que el Estudiante 3:

- entra mejor por caso concreto,
- necesita guía alta,
- requiere micro-pasos,
- y tiene tolerancia baja a la abstracción,

no nos dice todavía, por sí solo, qué pieza concreta producir.

Todavía queda decidir, por ejemplo, si la salida será:
AQUÍ VEO QUE COMETÍ UN ERROR AL PEDIRTE QUE SIGUIERAS LA MISMA ESTRUCTURA DE DOCUMENTO-CON-DEFINICION/EJEMPLO YA QUE RESULTÓ EN ESTE ERROR: TRATASTE DE CREAR UN ADAPTADOR "GLOBAL". CADA ADAPTADOR QUE SE CREE DEBE TENER UN FIN PARTICULAR: SUS PIEZAS PERTERECERÁN A UN CODOMINIO CARACTERÍSTICO. EN LOS EJEMPLOS EDUCATIVOS QUE ESTAMOS TRABAJANDO SE TOMA COMO PUNTO DE PARTIDA LA INTENCIÓN "ENSEÑAR TEMA A", ESTE EJEMPLO LO HICISTE CON ESA INTENCIÓN. LO QUE DEBE GENERAR EL ADAPTADOR ES UNA ESTRATEGIA DE ENSEÑANZA, LOS ELEMENTOS DE LA LISTA MÁS ABAJO (una ficha de trabajo paso a paso; una microsecuencia guiada; un ejercicio comparativo; una guía de reexplicación; una secuencia de resolución; una actividad de transferencia) SON INSTANCIAS DE ESA ESTRATEGIA, PERO NO SON LA ESTRATEGIA.
NOTA: ESTE EJEMPLO ES MUCHO MÁS COMPLEJO, QUIZÁS MI FORMA DE VERLO COMPLICA MÁS LA SITUACIÓN, QUIERO QUE CUESTIONES SI LO QUE DIGO SOBRE UNA "ESTRATEGIA DE ENSEÑANZA" COMO EL FIN DEL ADAPTADOR ES CORRECTO.

COMPLEMENTO MI ARGUMENTO ANTERIOR DEBIDO A QUE SI SE CAMBIA LA INTENCIÓN DE "ENSEÑAR TEMA A" A OTRO DISTINTO, LOS ADAPTADORES TAMBIÉN CAMBIARÍAN, POR EJEMPLO:

- DISEÑAR EVALUACIÓN (LO QUE SE BUSCARÍA SERÍA EVALUAR AL ESTUDIANTE SEGÚN SU PROPIO PROGRESO EN VEZ DE APLICARLE UN EXAMEN GLOBAL)
- DISEÑAR ASESORÍA PERSONALIZADA (CERCANO A "DISEÑAR ESTRATEGIA", PERO MÁS PUNTUAL)
- DISEÑAR TEXTO DE LECTURA (COMO TAREA O AYUDA)
  ES DECIR "ENSEÑAR TEMA A" TIENE UN ADAPTADOR, CUALQUIER OTRA INTENCIÓN TENDRÍA OTRO ADAPTADOR DISTINTO (TODAS LAS INTENCIONES RELATIVAS AL TEMA A)

* una ficha de trabajo paso a paso;
* una microsecuencia guiada;
* un ejercicio comparativo;
* una guía de reexplicación;
* una secuencia de resolución;
* una actividad de transferencia.

Sin adaptador, esa decisión tiende a hacerse así:

- por intuición local,
- por costumbre del docente,
- por improvisación,
- o mezclando de forma opaca lo que viene de la instancia con lo que viene del
  formato de intervención.

Ahí es donde el adaptador se vuelve necesario.

---

## 6. Definición operativa del adaptador dentro del ejemplo

En este ejemplo, un adaptador será entendido como una **función protocolizada de
manifestación pedagógica**.

Eso significa que:

- recibe una instancia del estudiante respecto del Tema A;
- trabaja bajo reglas explícitas;
- y la traduce a una salida concreta compatible con un tipo de intervención.

No inventa el diagnóstico.
No redefine el caso.
No sustituye el modelo base.

Su función consiste en realizar una traducción reglada.

---

## 7. Dominio y codominios del ejemplo

### 7.1. Dominio

El dominio está formado por las instancias válidas de estudiantes respecto del
Tema A.

Podemos escribirlo así, en forma legible:

**X = conjunto de estudiantes ya descritos mediante el modelo base completo**

Los tres estudiantes anteriores pertenecen a ese dominio.

---

### 7.2. Codominios

COMO YA SE MENCIONÓ EN LA NOTA DE LA SECCIÓN 5: ES NECESARIO REPLANTEAR ESTO, YA QUE EL DOMINIO DEPENDERÁ DE LA INTENCIÓN
Los codominios serán espacios de salidas pedagógicas posibles.

Por ejemplo:

- **Y_Ficha_Paso_a_Paso** = conjunto de fichas de trabajo altamente guiadas
- **Y_Guia_Reexplicacion** = conjunto de guías para que el estudiante vuelva a
  explicar lo aprendido
- **Y_Comparacion_de_Casos** = conjunto de actividades basadas en contraste de
  situaciones
- **Y_Ejercicio_Transferencia** = conjunto de ejercicios donde el estudiante debe
  aplicar a un caso nuevo
- **Y_Microsecuencia_Guiada** = conjunto de intervenciones divididas en micro-pasos

Cada uno de estos codominios no es una salida individual, sino una familia de
salidas posibles.

---

## 8. Qué significa construir un adaptador

Construir un adaptador significa fijar una ley protocolizada del tipo:

**A_Microsecuencia_Guiada: X → Y_Microsecuencia_Guiada**

o

**A_Guia_Reexplicacion: X → Y_Guia_Reexplicacion**

o

**A_Comparacion_de_Casos: X → Y_Comparacion_de_Casos**

Cada adaptador toma una instancia del dominio y produce una salida concreta
perteneciente a uno de esos codominios.

---

## 9. Primer adaptador: microsecuencia guiada

### 9.1. Intuición del adaptador

Este adaptador sirve para producir una intervención muy guiada, de avance fino y
baja carga de abstracción.

### 9.2. Clase de instancia que recibe

Trabaja especialmente bien con instancias que presentan:
ESTA FORMULACIÓN ES INCORRECTA. SI SE FORMULA ASÍ, NO SERÍA PROTOCOLARIA: SE DEBEN CONSIDERAR TODOS LOS ELEMENTOS DE LA CONFIGURACIÓN CONTEXTUAL, EN CASO DE NO HACERLO SE REGRESA AL PROBLEMA DE TENER QUE ADIVINAR. ADEMÁS AQUÍ SE EVIDENCIA OTRO ERROR:
LA microsecuencia guiada NO ES SÓLO PARA ALUMNOS CON UNA CONFIGURACIÓN (AUNQUE LA PROPONES INCOMPLETA) COMO LA QUE PROPONES: LA microsecuencia guiada ESTÁ DISPONIBLE PARA TODOS LOS ALUMNOS, LO QUE CAMBIA ES QUÉ SE PRESENTARÁ EN LA MICROSECUENCIA.
CREO QUE EL ERROR ANTERIOR SE RELACIONA CON LO MENCIONO EN EL COMENTARIO DE LA SECCIÓN 5: HAY CONFUSIÓN DE ADAPTADORES.

- `grado_de_guia_requerida = alta`
- `ritmo_de_progresion_compatible = micro_pasos`
- `tolerancia_a_la_abstraccion = baja`
- `modo_de_verificacion_mas_fiable = resolucion_guiada` o equivalente

### 9.3. Objetivo

Traducir la instancia a una secuencia concreta de pasos breves, explícitos y
acompañados.

### 9.4. Protocolo mínimo

1. comenzar por un caso concreto;
2. dividir el contenido en unidades mínimas;
3. formular una instrucción por paso;
4. evitar saltos compactos;
5. introducir verificación guiada al final de cada tramo;
6. cerrar con una resolución guiada del caso.

### 9.5. Aplicación al Estudiante 3

La instancia del Estudiante 3 es compatible con este adaptador.
EL ADAPTADOR NO MIDE QUÉ ES COMPATIBLE Y QUÉ NO (ESO CONTRADICE LA LÓGICA QUE VENIMOS CONSTRUYENDO): EL ADAPTADOR TIENE COMO OBJETIVO TRANSFORMAR UNA INSTANCIA CONTEXTUAL (UN ELEMENTO DEL DOMINIO) EN UNA PIEZA (UN ELEMENTO DEL CODOMIINO).

Resultado:

**A_Microsecuencia_Guiada(Estudiante 3) = m1**

donde **m1** es una salida concreta del codominio
`Y_Microsecuencia_Guiada`.

### 9.6. Forma visible de la salida

Por ejemplo, una microsecuencia podría verse así:

**Paso 1:** observar un caso concreto del Tema A  
**Paso 2:** identificar una sola característica relevante  
**Paso 3:** comparar esa característica con una segunda situación  
**Paso 4:** formular una regla mínima  
**Paso 5:** resolver un mini-ejercicio guiado  
**Paso 6:** repetir la regla con apoyo explícito

Aquí se ve bien qué hace el adaptador:
no inventa que el estudiante necesita micro-pasos.
Eso ya venía dado por la instancia.
Lo que hace es traducir esa configuración a una pieza concreta.

---

## 10. Segundo adaptador: guía de reexplicación

### 10.1. Intuición del adaptador

MISMO ERROR: LOS ADAPTADORES NO SE ENCARGAN DE DECIDIR NADA: SE ENCARGAN DE TRANSFORMAR UN ELEMENTO DEL DOMINIO, EN UN ELEMENTO DEL CODOMINIO (DE ALGÚN CODOMINIO)
Este adaptador sirve para estudiantes que ya comprenden bastante, pero cuya
dificultad dominante está en volver formulable lo aprendido.

### 10.2. Clase de instancia que recibe

Trabaja especialmente bien con instancias que presentan:

- `tipo_de_dificultad_dominante = expresiva`
- `modo_de_verificacion_mas_fiable = reexplicacion`
- `grado_de_guia_requerida = media` o `baja`

### 10.3. Objetivo

Traducir la instancia a una pieza de apoyo que ayude al estudiante a reorganizar
y verbalizar lo comprendido.

### 10.4. Protocolo mínimo

1. presentar un ejemplo resuelto;
2. pedir al estudiante que identifique qué pasó;
3. descomponer el ejemplo en partes nombrables;
4. pedir una reformulación en sus propias palabras;
5. exigir una síntesis final;
6. comparar la reformulación con la versión estructurada del docente.

### 10.5. Aplicación al Estudiante 1

La instancia del Estudiante 1 es compatible con este adaptador.

Resultado:

**A_Guia_Reexplicacion(Estudiante 1) = m2**

donde **m2** pertenece al codominio `Y_Guia_Reexplicacion`.

### 10.6. Forma visible de la salida

Por ejemplo, una guía de reexplicación podría verse así:

- Observa el ejemplo resuelto.
- Señala qué parte entiendes mejor.
- Explica con tus palabras qué se hizo primero.
- Explica qué se hizo después.
- Resume en una frase cuál es la regla general.
- Compara tu explicación con esta formulación estructurada.

Aquí otra vez se ve que el adaptador no decide arbitrariamente:
trabaja sobre lo que la instancia ya indicaba.

---

## 11. Tercer adaptador: comparación de casos orientada a transferencia

### 11.1. Intuición del adaptador

MISMO ERROR
Este adaptador sirve cuando el estudiante entiende bastante, pero falla al pasar
de un caso conocido a uno nuevo.

### 11.2. Clase de instancia que recibe

Trabaja especialmente bien con instancias que presentan:

- `tipo_de_dificultad_dominante = de_transferencia`
- `modo_de_entrada_mas_efectivo = comparacion`
- `modo_de_verificacion_mas_fiable = aplicacion_a_nuevo_caso`
- `tolerancia_a_la_abstraccion = media` o `alta`

### 11.3. Objetivo

Construir una salida donde la comprensión avance por contraste estructural y
culmine en aplicación a un caso nuevo.

### 11.4. Protocolo mínimo

1. presentar dos casos cercanos;
2. identificar semejanzas estructurales;
3. identificar diferencias relevantes;
4. formular la regla subyacente;
5. presentar un tercer caso no visto;
6. pedir aplicación autónoma de la regla.

### 11.5. Aplicación al Estudiante 2

La instancia del Estudiante 2 es compatible con este adaptador.

Resultado:

**A_Comparacion_de_Casos(Estudiante 2) = m3**

donde **m3** pertenece al codominio `Y_Comparacion_de_Casos`.

### 11.6. Forma visible de la salida

Por ejemplo:

- Caso A: situación conocida
- Caso B: situación similar con diferencia clave
- Pregunta 1: ¿qué estructura comparten?
- Pregunta 2: ¿qué cambia y por qué importa?
- Regla general: formulación explícita
- Caso C: situación nueva para aplicar la regla

Aquí el adaptador traduce la instancia a una salida orientada a transferencia, no
porque “alguien intuya que sería útil”, sino porque la propia instancia ya
apuntaba a ese tipo de intervención.

---

CON RESPECTO A LOS ADAPTADORES QUE PROPONES:

- ESTÁN MAL PLANTEADOS
- CONTRADICEN AL MODELO
- NO CUMPLEN CON LA FUNCIÓN DE EXPLICAR, SINO AL CONTRARIO, DEBIDO A QUE ESTÁN MAL, CAUSAN CONFUSIÓN

## 12. Qué pasaría sin modelo base completo

Ahora podemos ver por qué el adaptador depende del modelo base completo.

Supón que no tuviéramos una instancia bien determinada y solo dijéramos algo como:

- “el Estudiante 2 es bueno, pero le cuesta aplicar”
- “el Estudiante 3 necesita más apoyo”
- “el Estudiante 1 entiende, pero no lo explica bien”

Con descripciones así, el adaptador tendría que suponer demasiado:

- qué significa “más apoyo”;
- qué clase de aplicación falla;
- qué modo de entrada conviene;
- cuánto guiar;
- qué tan abstracto puede ser el contenido;
- y cómo verificar la mejora.

En ese caso, el adaptador ya no sería una función protocolizada clara.
Se volvería un compensador de ambigüedad.

---

## 13. Qué se gana con el modelo base completo

Aquí se ve con mucha fuerza la ventaja ya discutida.

### 13.1. Reduce opacidad

El adaptador ya no tiene que decidir en sombra lo que la instancia no especificó.

### 13.2. Aumenta reusabilidad

El mismo adaptador puede reutilizarse sobre instancias distintas, siempre que
pertenezcan a la clase para la cual fue construido.

### 13.3. Mejora auditabilidad

Si la salida falla, puede preguntarse con más claridad:

- ¿falló el modelo base?
- ¿falló la instancia?
- ¿falló el protocolo del adaptador?
- ¿o era incorrecto el codominio elegido?

### 13.4. Permite comparación entre adaptadores

Ahora puede compararse, por ejemplo:

- un adaptador de reexplicación,
- frente a uno de comparación de casos,
- frente a uno de microsecuencia guiada.

### 13.5. Acerca el sistema a la implementación

Cada adaptador se parece mucho más a algo implementable porque recibe una
instancia mejor determinada.

---

## 14. Qué enseña este ejemplo sobre el adaptador

Este ejemplo muestra algo decisivo:

el adaptador no es un pedagogo improvisando sobre una descripción vaga.

El adaptador es una pieza estructural que:

- recibe una instancia bien formada;
- reconoce una clase de caso;
- opera bajo un protocolo;
- y la traduce a una manifestación concreta en un codominio definido.

Eso es muy distinto de una intervención intuitiva.

---

## 15. Qué debe quedar claro al final

Después de este ejemplo, deberían quedar claras cinco cosas.

### 15.1.

El adaptador aparece **después** del modelo base y de la instancia.

### 15.2.

No define ontológicamente el caso, sino que trabaja sobre él.

### 15.3.

No produce cualquier salida, sino una salida compatible con un codominio
específico.

### 15.4.

Su calidad depende en gran medida de la calidad de la instancia que recibe.

### 15.5.

El adaptador se entiende mejor cuando se lo ve operar sobre un caso concreto,
porque ahí se nota que no inventa el caso: lo realiza.

---

## 16. Cierre

Este ejemplo educativo muestra por qué el adaptador es una pieza indispensable
entre la instancia y la manifestación.

No basta con tener una buena descripción del caso.
Tampoco basta con tener una salida final.

Hace falta una operación intermedia que traduzca de manera normada una instancia
suficientemente determinada a un espacio de manifestación concreto.

Eso es lo que hace el adaptador.

Y eso es también lo que permite que una estructura bien modelada deje de ser solo
legible y empiece a ser operable.
