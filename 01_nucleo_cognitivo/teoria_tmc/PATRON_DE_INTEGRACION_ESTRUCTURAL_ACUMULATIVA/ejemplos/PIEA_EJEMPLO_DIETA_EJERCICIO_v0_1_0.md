# Ejemplo PIEA: dieta–ejercicio

**Identificador del ejemplo:** `PIEA-EJ-DIE-001`  
**Versión del ejemplo:** `0.1.0`  
**Fecha:** `2026-08-11`  
**Paquete receptor:** `ART_patron_de_integracion_estructural_acumulativa`  
**Versión del paquete receptor:** `PIEA 0.2.0`  
**Ruta recomendada dentro del paquete:** `ejemplos/03_dieta_ejercicio.md`  
**Estado:** `PROVISIONAL · instancia conceptual desarrollada para revisión humana`  
**Representación:** `SOURCE`  
**Autoridad:** `OUTPUT://`  
**Clasificación principal:** `PLAUSIBLE_INSTANCE`, con pertenencia estructural fuerte y trayectoria particular ficticia  

---

## 1. Función de este documento

Este documento desarrolla **dieta–ejercicio** como una realización contextual del **Patrón de Integración Estructural Acumulativa** (`PIEA`). Su función no es modificar el núcleo de PIEA, prescribir un régimen alimentario ni ofrecer un programa clínico. Su función es comprobar si una transformación corporal producida mediante intervenciones sucesivas puede describirse legítimamente mediante:

```math
S_{t+1}=\mathcal I_{\kappa_t}(S_t,u_t)
```

La tesis del ejemplo es:

> Un proceso de dieta–ejercicio puede constituir una instancia de PIEA cuando un organismo integra ingestas, actividad física, descanso y otras perturbaciones desde un estado fisiológico previo, bajo condiciones operativas situadas, produciendo estados posteriores cuyos efectos modifican respuestas, capacidades y posibilidades futuras.

La pertenencia no se demuestra porque exista una lista cronológica de desayunos, comidas, cenas y entrenamientos. Se demuestra cuando:

1. existe un estado corporal relevante antes de cada intervención;
2. puede distinguirse el acontecimiento que se integra;
3. la respuesta depende del estado previo y de condiciones operativas;
4. ocurre una modificación efectiva del estado elegido;
5. parte de esa modificación persiste y condiciona eventos posteriores;
6. la trayectoria produce una organización que no puede reducirse a enumerar acontecimientos.

El ejemplo articula dos antecedentes internos de COGNICIÓN_CENTRAL:

- el dominio **ACONDICIONAMIENTO FÍSICO**, que modela objetivos, variables corporales, `fNodes`, familias físicas y módulos de ejecución;
- PIEA `0.2.0`, que formaliza la transición interna de estado y separa estado, aporte, contexto, integración y manifestación.

La adaptación conserva una frontera epistemológica estricta: el cuerpo real posee una complejidad muy superior al modelo utilizado. Las variables, valores y trayectorias del caso desarrollado son **ficticios y didácticos**. No constituyen diagnóstico, tratamiento, dieta personalizada ni recomendación médica.

---

## 2. Resultado de la adaptación

### 2.1 Sistema principal

El sistema PIEA principal será:

```txt
X_DIE
= estado fisiológico-funcional relevante de un sujeto delimitado
  durante una trayectoria de alimentación, actividad y recuperación.
```

No se elige como sistema principal:

- el plan de dieta escrito;
- el menú;
- el registro de comidas;
- la rutina de entrenamiento;
- la báscula;
- una aplicación de seguimiento;
- la representación completa del cuerpo;
- el observador que interpreta las mediciones.

Esos elementos pueden intervenir como aportes, portadores, instrumentos, superficies de observación o sistemas acoplados, pero no sustituyen al estado corporal cuya transformación se analiza.

### 2.2 Mapeo nuclear

En esta adaptación:

```txt
S_t
= estado fisiológico-funcional relevante antes de la transición

u_t
= ingesta, sesión de ejercicio, episodio de descanso, sueño,
  hidratación, perturbación o aporte compuesto candidato a integración

κ_t
= condiciones operativas que modulan la integración en ese momento

𝓘_{κ_t}
= conjunto de procesos fisiológicos y funcionales mediante los cuales
  el organismo trata el aporte desde su estado actual

S_{t+1}
= estado fisiológico-funcional relevante después de la integración
```

### 2.3 Forma compacta

```txt
estado corporal previo
+ intervención situada
+ condiciones vigentes
→ integración fisiológica y funcional
→ estado corporal posterior
→ modificación de respuestas o capacidades futuras
```

### 2.4 Qué se afirma

Se afirma que:

- una comida llega a un organismo que ya posee un estado;
- una sesión de entrenamiento actúa sobre capacidades, fatiga y recursos previamente configurados;
- el sueño, el descanso y el estrés pueden cambiar la forma en que se integra una intervención;
- el estado posterior conserva efectos de la trayectoria de forma selectiva;
- distintas escalas de integración pueden anidarse;
- las mediciones sólo permiten observar regiones parciales del estado;
- un plan puede convertirse en intervención únicamente cuando se ejecuta;
- la retroalimentación puede ajustar futuras intervenciones, pero no pertenece al núcleo mínimo de PIEA.

### 2.5 Qué no se afirma

No se afirma que:

- el cuerpo «lea» una comida como si fuera una oración;
- un desayuno sea literalmente una palabra o un prompt;
- toda respuesta corporal pueda inferirse con exactitud desde un modelo simple;
- el peso represente por sí solo salud, composición corporal o condición física;
- una cifra aislada permita identificar causalidad;
- todas las personas integren la misma intervención de la misma manera;
- dieta y ejercicio sean los únicos determinantes del estado corporal;
- el modelo sustituya evaluación profesional;
- un caso ficticio demuestre universalidad fisiológica.

---

## 3. Adaptación mediante FAC

### 3.1 Núcleo preservado

La adaptación conserva los invariantes PIEA:

- sistema delimitable;
- estado relevante previo;
- aporte parcial diferenciable;
- integración y no mera coexistencia;
- dependencia del estado previo;
- condicionamiento contextual;
- estado posterior efectivo;
- persistencia selectiva de trayectoria;
- acumulación no reducible a suma;
- trazabilidad de la transición.

### 3.2 Composición contextual

#### Contexto de sujeto

- sujeto corporal delimitado;
- objetivos declarados por el humano;
- experiencia previa de alimentación y ejercicio;
- capacidades físicas actuales;
- restricciones, molestias o condiciones conocidas;
- hábitos disponibles y grado de adherencia;
- participación eventual de profesionales autorizados;
- soberanía humana sobre aceptación, interrupción y modificación del caso.

#### Contexto de medio

- alimentos y bebidas disponibles;
- espacios de alimentación;
- casa, parque, gimnasio u otro lugar de actividad;
- equipo de entrenamiento;
- horarios reales;
- instrumentos de medición;
- registro manual o digital;
- condiciones ambientales relevantes.

#### Contexto de distribución

- distribución temporal de ingestas;
- distribución de sesiones y descansos;
- alternancia entre carga y recuperación;
- acceso del sujeto a alimentos, espacios y equipo;
- frecuencia de mediciones;
- canales por los que se registra y revisa la trayectoria;
- separación entre información privada, resumen de seguimiento y documento explicativo.

#### Contexto de ejecución

- estado corporal inmediatamente anterior;
- tiempo transcurrido desde otras ingestas o esfuerzos;
- sueño previo;
- fatiga;
- dolor o molestia reportada;
- disponibilidad temporal;
- intensidad y duración de la intervención;
- compatibilidad entre la intervención y las restricciones del sujeto;
- incertidumbre de los datos disponibles.

### 3.3 Intención de intervención o estudio

La intención es demostrar cómo un plan corporal se convierte en una trayectoria PIEA sólo cuando las intervenciones se ejecutan y son integradas por un organismo con estado.

El caso permitirá mostrar:

1. la diferencia entre ontología corporal y ejecución temporal;
2. la diferencia entre un objetivo y el estado actual;
3. la diferencia entre plan, acción y resultado;
4. la dependencia de cada intervención respecto del estado previo;
5. la composición ascendente desde eventos hasta semanas y ciclos;
6. la coexistencia de cambios rápidos, intermedios y lentos;
7. la observabilidad parcial mediante varias mediciones;
8. el acoplamiento opcional con un circuito de control.

### 3.4 Heurísticas de transformación

La adaptación usa estas heurísticas:

- mapear roles estructurales, no semejanzas lingüísticas;
- elegir el estado fisiológico-funcional como sistema principal;
- mantener separados el eje ontológico y el eje de ejecución;
- definir cada variable en una escala explícita;
- tratar una comida o sesión como unidad operacional, no como unidad ontológica universal;
- permitir que un fenómeno cambie de rol según la transición analizada;
- incluir sólo memoria externa que afecte efectivamente decisiones o acciones;
- distinguir suma cuantitativa de integración estructural;
- declarar que el estado real es parcialmente latente;
- utilizar mediciones como indicadores parciales y falibles;
- separar la transición corporal de la producción de documentos o gráficas;
- conservar incertidumbre y límites causales.

### 3.5 Restricciones de salida

Esta adaptación prohíbe:

- prescribir cantidades personalizadas como si fueran clínicamente válidas;
- diagnosticar enfermedades;
- usar peso o IMC como representación exhaustiva del cuerpo;
- convertir una correlación temporal en causalidad demostrada;
- atribuir todo cambio a la última comida o al último entrenamiento;
- ignorar sueño, estrés, hidratación, enfermedad, medicación o error de medición cuando sean relevantes;
- mezclar escalas sin declarar interfaces;
- tratar una medición como `S_t` completo;
- introducir un operador de manifestación propio de PIEA;
- confundir `κ_t` con la instancia contextual ACCD `φ_n`;
- confundir acumulación PIEA con corrección acumulativa FAC;
- transferir propiedades semánticas del ejemplo textual al cuerpo.

---

## 4. Delimitación del sistema `X_DIE`

### 4.1 Frontera principal

El sistema se delimita como el organismo del sujeto en las dimensiones necesarias para explicar una trayectoria de dieta–ejercicio. No se intenta modelar el organismo completo.

```txt
INCLUIDO EN X_DIE
  configuración fisiológica y funcional relevante
  capacidades físicas seleccionadas
  estado de recuperación y fatiga
  disponibilidad funcional de recursos
  composición corporal en la escala pertinente
  tolerancias y restricciones ya incorporadas

FUERA DE X_DIE
  plan escrito
  aplicación de seguimiento
  juicio del observador
  entorno social completo
  mundo material no acoplado
  variables biológicas no utilizadas en el modelo
```

### 4.2 Frontera operacional

Una entidad externa pasa a participar en la transición cuando afecta realmente la integración. Un menú que permanece en un archivo no modifica el cuerpo. Una sesión programada pero no realizada tampoco constituye carga de entrenamiento.

```txt
plan disponible ≠ aporte integrado
alimento comprado ≠ alimento ingerido
rutina escrita ≠ sesión ejecutada
medición registrada ≠ cambio corporal
```

### 4.3 Por qué no se elige «la dieta» como sistema

La palabra «dieta» puede designar:

- un patrón habitual de alimentación;
- un plan prescrito;
- una lista de comidas;
- una restricción temporal;
- el conjunto real de ingestas durante un intervalo.

Estas entidades no son equivalentes. Para evitar ambigüedad, este documento usa:

```txt
PLAN ALIMENTARIO
= organización propuesta de intervenciones

TRAYECTORIA DE INGESTAS
= acontecimientos efectivamente ejecutados

ESTADO CORPORAL
= organización del sistema que integra esas ingestas
```

### 4.4 Por qué no se elige el registro

El registro puede conservar:

- hora;
- alimentos;
- cantidades estimadas;
- sensaciones;
- entrenamiento;
- sueño;
- mediciones.

Sin embargo, el registro describe acontecimientos y observaciones. No ejecuta por sí mismo la integración fisiológica. Sólo se vuelve memoria externa acoplada cuando es consultado y modifica una decisión posterior.

### 4.5 Sistema acoplado ampliado

En una extensión de control puede modelarse un sistema mayor:

```txt
sujeto corporal
+ planificador humano o profesional
+ registro
+ instrumentos
+ reglas de ajuste
```

Ese sistema ampliado no debe confundirse con `X_DIE`. Contiene un organismo PIEA y un circuito externo que observa y modifica intervenciones futuras.

---

## 5. Relación con `ACONDICIONAMIENTO FÍSICO`

### 5.1 Aporte del modelo previo

El antecedente de `ACONDICIONAMIENTO FÍSICO` propone que un objetivo corporal puede entenderse como una configuración final de variables de estado. También distingue:

- variables o dimensiones corporales;
- contexto del sujeto;
- operaciones disponibles en el dominio;
- unidades mínimas de estado (`fNodes`);
- unidades temporales de ejecución;
- sesiones, semanas y ciclos como composiciones ascendentes.

PIEA no reemplaza esa ontología. La usa para seleccionar una representación de `S_t` y describir cómo cambia.

### 5.2 Familias físicas pertinentes

Para el caso dieta–ejercicio se activan principalmente:

| Familia | Función en el estado |
|---|---|
| `PFAM-1` Producción de fuerza | Capacidad funcional que se intenta mantener o desarrollar |
| `PFAM-4` Capacidad cardiorrespiratoria y energética | Tolerancia al esfuerzo y recuperación entre esfuerzos |
| `PFAM-5` Movilidad funcional | Capacidad que condiciona la ejecución segura de patrones |
| `PFAM-6` Estabilidad y robustez | Restricciones técnicas y tolerancia articular |
| `PFAM-8` Estructura corporal y composición | Región lenta del estado corporal |
| `PFAM-9` Recuperación y tolerancia sistémica | Capacidad de sostener la trayectoria sin deterioro acumulado |

No todas las familias deben cambiar en cada transición. Su presencia delimita el espacio de estado; la intervención activa sólo regiones pertinentes.

### 5.3 `fNode` no equivale a ejercicio

Un `fNode` es una capacidad o atributo evaluable, entrenable y con borde. Una sentadilla es un evento o patrón de ejecución.

```txt
fuerza de extensión de piernas
  = dimensión de estado

serie de sentadillas
  = módulo de ejecución

sesión de fuerza
  = composición temporal de módulos
```

La sesión puede modificar el `fNode`, pero no es el `fNode`.

### 5.4 Extensión local para dieta

La fuente de acondicionamiento físico no ofrece una ontología nutricional exhaustiva. Por ello, esta adaptación añade sólo dimensiones locales mínimas, sin promoverlas a canon:

- disponibilidad funcional de energía y sustratos;
- hidratación funcional;
- hambre y saciedad observables;
- tolerancia digestiva reportada;
- regularidad de ingestas;
- compatibilidad entre alimentación, actividad y recuperación.

Estas dimensiones son instrumentos del ejemplo. Requieren revisión especializada antes de convertirse en un modelo nutricional reutilizable.

---

## 6. Estado fisiológico-funcional `S_t`

### 6.1 Definición

`S_t` es la organización relevante del sujeto inmediatamente antes de integrar `u_t`.

Una representación didáctica puede escribirse como un objeto estructurado:

```yaml
state_snapshot:
  fast_regions:
    hydration_functional:
    hunger_satiety:
    digestive_tolerance:
    acute_fatigue:
    immediate_energy_availability:
  intermediate_regions:
    recovery_between_sessions:
    training_tolerance:
    habitual_appetite_pattern:
    performance_readiness:
  slow_regions:
    strength_capacity:
    cardiorespiratory_capacity:
    body_composition:
    tissue_tolerance:
```

La división rápida, intermedia y lenta no afirma fronteras fisiológicas rígidas. Sirve para impedir que una variación aguda de peso se interprete automáticamente como una modificación lenta de composición corporal.

### 6.2 Estado latente y estado observado

Gran parte del estado corporal no es observable directamente. Por ello deben separarse:

```txt
ESTADO RELEVANTE
= organización corporal que participa en la transición

INDICADORES
= mediciones o reportes utilizados para inferir regiones del estado
```

Ejemplos de indicadores:

- masa corporal medida;
- circunferencia;
- repeticiones con técnica;
- tiempo o distancia;
- percepción de esfuerzo;
- hambre reportada;
- calidad de sueño reportada;
- molestia o dolor reportado.

Ningún indicador aislado equivale a `S_t`.

### 6.3 Estado relacional

El estado no es una tabla de valores independientes. Incluye relaciones como:

- fatiga que limita la expresión de fuerza;
- sueño que modifica disposición para entrenar;
- dolor que restringe rango o selección de ejercicios;
- regularidad alimentaria que afecta conducta posterior;
- carga previa que modifica tolerancia a otra sesión;
- hidratación que puede alterar masa medida y desempeño observable;
- composición corporal que cambia lentamente respecto de variables agudas.

### 6.4 Suficiencia del estado

La representación es suficiente sólo si permite explicar la transición al nivel elegido. Si dos casos con estados aparentemente iguales integran sistemáticamente la misma intervención de manera diferente bajo el mismo contexto, el estado está subespecificado.

La corrección no consiste en añadir «toda la historia» como argumento externo. Consiste en ampliar `S_t` con la región histórica funcionalmente activa, por ejemplo:

- fatiga acumulada;
- tolerancia construida;
- lesión previa relevante;
- adaptación consolidada;
- patrón de sueño;
- respuesta habitual a determinada carga.

### 6.5 Historia comprimida

El cuerpo no necesita conservar cada menú como una lista literal para que la trayectoria tenga efectos. La historia puede persistir como:

- tejido adaptado;
- capacidad de trabajo;
- fatiga residual;
- reservas alteradas;
- hábito conductual acoplado;
- tolerancia digestiva;
- composición corporal;
- restricción o robustez articular.

Esto satisface la exigencia PIEA de que la historia pertinente quede absorbida en el estado funcional.

---

## 7. Aportes parciales `u_t`

### 7.1 Tipos de aporte

En este dominio, `u_t` puede ser:

- una ingesta;
- agua u otra bebida;
- una sesión de fuerza;
- una caminata;
- un intervalo de cardio;
- un episodio de sueño;
- un periodo de descanso;
- una perturbación de estrés;
- una enfermedad o malestar, si se analiza como acontecimiento;
- un lote compuesto de varias unidades cuando la granularidad lo justifique.

### 7.2 Ingesta como unidad operacional

Una ingesta puede representarse mediante:

```yaml
intake_event:
  foods: []
  estimated_amounts: []
  energy_content: unknown_or_estimated
  nutrient_profile: qualitative_or_measured
  water_content: qualitative_or_measured
  timing:
  duration:
  observed_tolerance:
```

Esta descripción no convierte la ingesta en una unidad ontológica universal. Es una unidad operacional elegida para el nivel del ejemplo.

### 7.3 Ejercicio como aporte

Una sesión puede representarse como un aporte compuesto:

```yaml
exercise_session:
  target_fnodes: []
  modules: []
  volume:
  intensity:
  duration:
  technique_constraints: []
  observed_effort:
```

Internamente, la sesión contiene transiciones más finas: repetición, serie, bloque y descanso. Cuando la escala es semanal, puede tratarse como un solo `u_t` compuesto; cuando se analiza técnica o fatiga aguda, debe descomponerse.

### 7.4 Sueño como aporte o contexto

El sueño puede ocupar dos roles legítimos:

```txt
COMO u_t
  se analiza el episodio de sueño y su integración en el estado corporal

COMO PARTE DE κ_t
  el sueño previo condiciona la integración de una sesión posterior
```

No se asignan ambos roles simultáneamente en la misma transición sin declarar escalas o interfaces.

### 7.5 Estrés como aporte o contexto

Un acontecimiento estresante puede ser `u_t` cuando el foco es el cambio que produce. El nivel de estrés ya activo puede pertenecer a `S_t`; las condiciones laborales durante una comida pueden pertenecer a `κ_t`.

La clasificación depende de la pregunta:

```txt
¿qué está siendo integrado?
  → u_t

¿qué condición modifica esa integración?
  → κ_t

¿qué efecto previo ya forma parte del organismo?
  → S_t
```

### 7.6 Disponibilidad no equivale a integración

```txt
comida servida pero no ingerida:
NO INTEGRADA

sesión programada pero omitida:
NO INTEGRADA COMO CARGA

agua disponible pero no bebida:
NO INTEGRADA

plan leído:
puede modificar conducta del sistema acoplado,
pero no constituye por sí mismo nutrición corporal
```

### 7.7 Aportes nulos o rechazados

PIEA admite rechazo sin efecto. Una intervención puede no modificar la región de estado elegida o producir un cambio por debajo del umbral analítico.

Ejemplos:

- una ingesta registrada con error no es un aporte corporal diferente, aunque sí altera el sistema de seguimiento;
- una repetición intentada pero no completada puede ser carga parcial;
- una recomendación no ejecutada no modifica el cuerpo, aunque pueda modificar intención o planificación.

---

## 8. Contexto operativo `κ_t`

### 8.1 Función

`κ_t` contiene condiciones que modifican admisión, intensidad, transformación o persistencia del aporte en la transición concreta.

Puede incluir:

- tiempo desde la última ingesta;
- proximidad a una sesión;
- temperatura ambiental;
- disponibilidad de agua;
- sueño previo;
- fatiga activa;
- dolor;
- intensidad efectiva del ejercicio;
- duración real;
- horario;
- medicación o condición conocida, cuando sea pertinente y autorizada;
- incertidumbre de las cantidades;
- técnica ejecutada;
- restricción de tiempo;
- acceso a equipo.

### 8.2 Estado y contexto no son intercambiables

Una condición puede cambiar de categoría entre análisis, pero no debe duplicarse sin justificación.

Ejemplo:

```txt
fatiga residual consolidada antes de la sesión
  → región de S_t

temperatura del lugar durante la sesión
  → κ_t

sesión de intervalos que produce nueva fatiga
  → u_t respecto de la transición global
```

### 8.3 Contexto fijo

Un estudio breve puede mantener constantes algunas condiciones. Esto no elimina `κ_t`; sólo declara que ciertas variables permanecen estables dentro de la ventana elegida.

### 8.4 Contexto omitido

Si se atribuye a la trayectoria una diferencia que en realidad procede de:

- error de medición;
- temperatura;
- enfermedad;
- variación de sueño;
- horario;
- hidratación;
- cambio de equipo;
- diferencia técnica;

entonces se incumple la prueba P9. El contexto omitido debe incorporarse o la conclusión debe debilitarse.

### 8.5 `κ_t` no equivale a `φ_n`

```txt
κ_t
  condiciona la transición corporal interna

φ_n
  configura una realización codominial ACCD
```

El hecho de que este ejemplo se materialice como Markdown no convierte el formato Markdown en contexto fisiológico.

---

## 9. Operador de integración `𝓘_{κ_t}`

### 9.1 Nivel de descripción

Este documento no propone un algoritmo biológico universal. `𝓘_{κ_t}` nombra el rol estructural realizado por múltiples procesos fisiológicos y funcionales.

La descripción se mantiene en un nivel operacional:

```txt
admisión material
→ procesamiento y distribución
→ respuesta aguda
→ interacción con el estado previo
→ retención, utilización, disipación o transformación selectiva
→ estado posterior
```

Para ejercicio:

```txt
carga ejecutada
→ respuesta aguda y fatiga
→ recuperación
→ posible adaptación o deterioro
→ modificación de capacidad futura
```

### 9.2 Familia de mecanismos

`𝓘` puede incluir, según el aporte y la escala:

- digestión y absorción;
- distribución y utilización de recursos;
- regulación aguda de hambre y saciedad;
- reposición o consumo de reservas;
- respuesta a carga mecánica;
- producción y disipación de fatiga;
- recuperación;
- adaptación de capacidades;
- reorganización de hábitos en el sistema acoplado;
- eliminación o no retención de componentes.

La lista no afirma exhaustividad ni equivalencia entre procesos.

### 9.3 Formas de integración compatibles

#### Incorporación

Parte del aporte pasa a formar parte funcional del estado.

#### Transformación

El aporte pierde su forma inicial y participa en procesos diferentes.

#### Reponderación

Una región del estado gana o pierde relevancia para la acción futura; por ejemplo, fatiga que reduce la prioridad de progresar carga.

#### Inhibición

Una condición limita una respuesta que habría sido posible en otro estado.

#### Sustitución parcial

Una estrategia de alimentación o ejercicio reemplaza otra en el sistema conductual acoplado.

#### Rechazo con efecto

El organismo no tolera o no completa una intervención, pero el intento deja fatiga, malestar o información para decisiones futuras.

#### Rechazo sin efecto relevante

El aporte no modifica la región de estado elegida en la resolución analítica utilizada.

#### Compresión

Múltiples eventos dejan una modificación estable sin conservar cada evento como unidad separada.

### 9.4 Integración no equivale a suma

Una suma puede ser parte del mecanismo. Por ejemplo, volumen total de entrenamiento o energía total ingerida pueden ser agregados relevantes. Sin embargo:

```txt
lista de calorías
≠ estado corporal

suma de repeticiones
≠ adaptación

número de comidas
≠ regulación de conducta
```

PIEA exige explicar cómo el agregado interactúa con el estado, bajo qué condiciones y qué organización posterior produce.

### 9.5 Integración probabilística

La misma intervención no garantiza un resultado idéntico. La respuesta puede ser probabilística por variabilidad biológica, medición incompleta y condiciones no observadas.

La pertenencia a PIEA no exige determinismo. Exige que `S_t`, `u_t` y `κ_t` participen en la distribución de resultados posibles.

---

## 10. Estado posterior `S_{t+1}`

### 10.1 Definición

`S_{t+1}` es el estado relevante después de la integración. Puede contener cambios simultáneos en distintas direcciones:

- mayor saciedad y mayor carga digestiva;
- menor disponibilidad inmediata de energía y mayor señal de adaptación tras ejercicio;
- mayor fatiga aguda y, después de recuperación, mayor capacidad;
- menor masa medida por variación de agua sin cambio equivalente de composición;
- mejor desempeño con composición estable;
- composición modificada con rendimiento temporalmente estable.

### 10.2 Cambio rápido no equivale a adaptación lenta

Una transición puede cambiar regiones rápidas sin cambiar regiones lentas.

```txt
después de una comida:
pueden cambiar saciedad, hidratación y disponibilidad inmediata

después de una sesión:
pueden cambiar fatiga y rendimiento inmediato

después de semanas:
pueden cambiar capacidades, tolerancia y composición
```

### 10.3 Persistencia selectiva

No todo cambio agudo persiste. La trayectoria PIEA requiere que al menos algún efecto alcance una transición posterior.

Ejemplos:

- fatiga que modifica la sesión del día siguiente;
- recuperación que permite progresión;
- adaptación que altera la respuesta a la misma carga;
- regularidad de comidas que modifica decisiones alimentarias posteriores;
- experiencia de malestar que lleva a cambiar selección o cantidad;
- mejora técnica que cambia el estímulo producido por una repetición futura.

### 10.4 El estado posterior no es una medición

```txt
S_{t+1}
≠ peso de la mañana
≠ perímetro aislado
≠ fotografía
≠ puntuación de energía
≠ total de calorías
```

Estas salidas pueden aportar evidencia sobre regiones de `S_{t+1}`.

---

## 11. Dos ejes coordinados: ontología y ejecución

### 11.1 Eje ontológico

Describe qué dimensiones existen en el modelo corporal:

- fuerza;
- capacidad cardiorrespiratoria;
- movilidad;
- estabilidad;
- composición;
- recuperación;
- disponibilidad funcional;
- hambre y saciedad;
- tolerancia.

Su pregunta es:

> ¿Qué regiones del estado pueden cambiar y cómo se representan?

### 11.2 Eje de ejecución

Describe qué ocurre en el tiempo:

- ingesta;
- caminata;
- repetición;
- serie;
- sesión;
- descanso;
- sueño;
- día de ejecución;
- semana;
- ciclo.

Su pregunta es:

> ¿Qué acontecimientos producen o condicionan transiciones?

### 11.3 Acoplamiento

```txt
estado actual
  condiciona qué intervención es viable

intervención ejecutada
  modifica el estado

estado posterior
  condiciona la siguiente intervención
```

### 11.4 Ruptura que debe evitarse

No debe modelarse una serie de sentadillas como si fuera una dimensión corporal, ni una capacidad de fuerza como si fuera un acontecimiento temporal.

---

## 12. Unidades ontológicas y ventanas de agregación

### 12.1 No existe una única unidad obligatoria

En el ejemplo textual podía elegirse palabra, oración o párrafo según la integración efectiva. En dieta–ejercicio ocurre algo semejante en el nivel abstracto, pero no por semántica.

Pueden elegirse:

- bocado;
- ingesta;
- comida;
- sesión;
- día;
- semana;
- mesociclo.

La elección depende de la pregunta y la escala.

### 12.2 El día como ventana útil

Un día permite agrupar:

- desayuno;
- comida;
- cena;
- pasabocas;
- agua;
- actividad;
- entrenamiento;
- descanso;
- sueño.

Sin embargo:

> El día es una ventana de agregación conveniente, no una unidad ontológica obligatoria del cuerpo.

Los procesos corporales atraviesan los límites del calendario.

### 12.3 Unidad mínima de ejecución

Una unidad mínima depende del nivel:

| Nivel | Unidad operacional posible | Criterio |
|---|---|---|
| Ingesta | episodio delimitado de consumo | puede distinguirse antes de integrarse |
| Fuerza | repetición con patrón definido | perdería identidad si se fragmenta más en ese nivel |
| Cardio | intervalo con duración e intensidad | conserva identidad operacional |
| Recuperación | episodio o intervalo delimitado | puede relacionarse con un antes y un después |
| Seguimiento | medición | observa, pero no necesariamente modifica el cuerpo |

### 12.4 Composición ascendente

```txt
componentes alimentarios
→ ingesta
→ patrón diario observado
→ semana
→ ciclo

repetición
→ serie
→ bloque
→ sesión
→ microciclo
→ mesociclo
```

La composición no autoriza a usar el mismo `S_t` en todos los niveles. Cada escala requiere estado, aporte y mecanismo adecuados.

---

## 13. Dieta y ejercicio como corrientes acopladas

### 13.1 Corriente alimentaria

Produce una secuencia irregular de aportes materiales:

```txt
u_ingesta_0 → u_ingesta_1 → u_ingesta_2 → ...
```

La flecha sólo muestra sucesión. PIEA aparece al introducir estados intermedios:

```txt
S_0 --integra ingesta_0--> S_1
S_1 --integra ingesta_1--> S_2
```

### 13.2 Corriente de actividad

```txt
S_a --integra caminata--> S_b
S_b --integra sesión de fuerza--> S_c
S_c --integra recuperación--> S_d
```

### 13.3 Intersección

Las dos corrientes no son independientes. El estado producido por una altera la integración de la otra.

Ejemplos estructurales:

- la carga de entrenamiento modifica necesidades y tolerancias posteriores;
- la alimentación previa cambia condiciones de ejecución;
- la recuperación determina si la siguiente carga produce progreso, mantenimiento o deterioro;
- la composición corporal y capacidad física alteran el costo funcional de una misma actividad.

### 13.4 No equivalencia causal automática

El hecho de que las corrientes se acoplen no permite atribuir un resultado a un único evento sin evidencia. El modelo debe conservar múltiples causas y condiciones.

---

## 14. Acumulación estructural corporal

### 14.1 Persistencia material

Parte de la trayectoria puede persistir como cambio de composición o tejido.

### 14.2 Persistencia funcional

Puede persistir como fuerza, resistencia, movilidad, coordinación o tolerancia.

### 14.3 Persistencia regulatoria

Puede persistir como cambio de hambre, saciedad, tolerancia o recuperación.

### 14.4 Persistencia conductual acoplada

Fuera del organismo estricto, el sistema humano–plan–registro puede conservar horarios, preferencias, reglas y hábitos que alteran futuras intervenciones.

### 14.5 Persistencia selectiva

El cuerpo no conserva todo:

- una variación aguda puede disiparse;
- una carga puede no consolidarse como adaptación;
- una comida puede no dejar un efecto relevante en la escala semanal elegida;
- una semana de interrupción puede reducir ciertas capacidades sin borrar toda trayectoria;
- cambios previos pueden ser parcialmente reversibles.

### 14.6 Acumulación no monotónica

«Acumulativa» no significa que todo mejore progresivamente. Puede haber:

- fatiga;
- pérdida;
- estancamiento;
- compensación;
- recuperación;
- adaptación;
- deterioro;
- reorganización de prioridades.

La trayectoria sigue siendo acumulativa cuando el estado alcanzado condiciona el tratamiento de lo siguiente.

---

## 15. Caso desarrollado: «Sujeto Beta»

### 15.1 Naturaleza del caso

El caso es ficticio. Sus cifras no son estándares clínicos ni metas recomendadas. Se utilizan para demostrar trazabilidad PIEA.

```txt
SUJETO:
Beta

HORIZONTE ANALÍTICO:
12 semanas

OBJETIVO HUMANO:
mejorar consistencia de alimentación y actividad,
reducir gradualmente la circunferencia de cintura,
mantener o mejorar fuerza y energía funcional

RESTRICCIÓN:
no convertir el objetivo en una dieta clínica ni en una prescripción universal
```

### 15.2 Contexto del sujeto

```yaml
subject_context:
  schedule: trabajo de oficina con horario variable
  training_time: 45 a 60 minutos, cuatro ventanas semanales posibles
  location: casa y parque
  equipment: mancuernas ajustables y banda
  prior_experience: intermitente
  food_access: cocina doméstica y comida fuera de casa dos días por semana
  known_limitation: molestia ocasional de rodilla, no diagnosticada en este ejemplo
  observation_horizon: 12 semanas
  uncertainty: cantidades alimentarias y sueño auto-reportados
```

La molestia no se interpreta clínicamente. Opera como restricción de salida: dolor creciente detiene o modifica la sesión y requiere valoración adecuada fuera del alcance del documento.

### 15.3 Estado inicial `S_0`

El estado inicial se representa mediante indicadores parciales:

| Región | Indicador ficticio | Estado inicial |
|---|---|---|
| Fuerza de empuje | repeticiones con técnica | 10 |
| Resistencia de core | plancha técnica | 30 s |
| Capacidad aeróbica | recorrido en 12 min | 1.5 km |
| Composición | circunferencia de cintura | 99 cm |
| Recuperación | escala funcional no clínica | 4/10 |
| Regularidad alimentaria | días con estructura prevista | 2/7 |
| Hambre vespertina | reporte cualitativo | alta e irregular |
| Sueño | duración y calidad auto-reportadas | variable |

Representación estructural:

```txt
S_0
= fuerza baja-moderada
+ recuperación inestable
+ actividad irregular
+ alimentación poco predecible
+ hambre vespertina frecuente
+ composición observada mediante cintura
+ incertidumbre alta de cantidades y sueño
```

### 15.4 Estado objetivo

El objetivo no se trata como resultado garantizado. Es una configuración deseada usada para seleccionar intervenciones y criterios de revisión.

```yaml
target_configuration:
  force: trend_up
  core_endurance: trend_up
  aerobic_capacity: trend_up
  waist_circumference: gradual_trend_down
  recovery: stable_or_improving
  eating_regularness: at_least_five_days_per_week
  afternoon_hunger: more_predictable
  safety: no_progressive_pain
```

### 15.5 Arquitectura de intervención

La trayectoria propuesta del caso ficticio contiene:

- tres sesiones semanales de fuerza de cuerpo completo;
- una o dos sesiones de caminata rápida o cardio moderado;
- estructura alimentaria regular, sin cantidades prescriptivas en este documento;
- observación de hambre, saciedad y tolerancia;
- disponibilidad de agua;
- ventana de sueño más consistente;
- revisión semanal;
- descarga o ajuste si recuperación o dolor empeoran.

La estructura alimentaria de cada comida se describe funcionalmente:

```txt
fuente de proteína
+ alimento vegetal o fruta
+ fuente de energía ajustada al contexto
+ agua
+ cantidad determinada fuera de este ejemplo conceptual
```

Esto no constituye menú obligatorio. Sólo crea unidades suficientemente descritas para la trayectoria ficticia.

### 15.6 Transición 0: primera ingesta estructurada

```txt
t = 0

S_0:
  hambre matutina moderada
  hidratación funcional incierta
  sueño previo irregular
  sin entrenamiento inmediato

u_0:
  desayuno estructurado ejecutado

κ_0:
  tiempo disponible limitado
  alimentos domésticos disponibles
  sin dolor ni malestar reportado

𝓘_{κ_0}:
  ingesta material + respuesta fisiológica y conductual

S_1:
  saciedad modificada
  hidratación funcional posiblemente mejorada
  patrón alimentario del día iniciado
  composición corporal lenta sin cambio atribuible demostrado
```

La transición no se interpreta como pérdida de peso. El cambio ocurre principalmente en regiones rápidas y en el sistema conductual acoplado.

### 15.7 Transición 1: actividad laboral y estrés

```txt
t = 1

S_1:
  estado posterior a la primera ingesta

u_1:
  bloque prolongado de trabajo con estrés reportado

κ_1:
  sedentarismo durante varias horas
  acceso limitado a pausa

𝓘_{κ_1}:
  respuesta al acontecimiento y modificación de disposición conductual

S_2:
  fatiga mental aumentada
  señales de hambre reponderadas
  menor probabilidad de ejecutar el plan sin preparación previa
```

Aquí el estrés se modela como aporte. En la siguiente comida, su efecto ya forma parte de `S_2`.

### 15.8 Transición 2: comida disponible bajo restricción

```txt
t = 2

S_2:
  hambre y fatiga configuradas por la mañana

u_2:
  comida preparada con estructura prevista

κ_2:
  pausa breve
  atención dividida
  horario retrasado

𝓘_{κ_2}:
  consumo parcial, tolerancia y regulación posterior

S_3:
  hambre reducida
  estado energético inmediato modificado
  persistencia de fatiga laboral
  intervención alimentaria integrada sólo en la cantidad realmente consumida
```

La comida planificada y la comida ingerida no son idénticas. `u_2` se define por ejecución efectiva.

### 15.9 Transición 3: sesión de fuerza

```txt
t = 3

S_3:
  alimentación previa disponible
  fatiga laboral moderada
  recuperación inicial 4/10
  técnica todavía inestable

u_3:
  sesión de fuerza de 45 minutos
  con empuje, tracción, bisagra y core

κ_3:
  equipo doméstico
  molestia de rodilla ausente ese día
  intensidad moderada
  límite de tiempo real

𝓘_{κ_3}:
  respuesta a carga + fatiga aguda + señal de adaptación

S_4:
  fatiga muscular aumentada
  disponibilidad inmediata modificada
  evidencia técnica registrada
  capacidad lenta todavía sin cambio demostrable
  próxima sesión condicionada por recuperación
```

### 15.10 Transición 4: cena posterior a la sesión

```txt
t = 4

S_4:
  fatiga posterior a entrenamiento
  hambre aumentada
  tolerancia digestiva normal reportada

u_4:
  cena ejecutada

κ_4:
  cercanía temporal a la sesión
  hora nocturna
  alimentos disponibles

𝓘_{κ_4}:
  integración alimentaria desde un estado posterior a carga

S_5:
  saciedad modificada
  recursos funcionales disponibles para recuperación
  carga digestiva temporal
  trayectoria del día comprimida en un estado previo al sueño
```

La cena no «repara» automáticamente el cuerpo ni determina por sí sola el resultado semanal. Se integra en una trayectoria ya configurada.

### 15.11 Transición 5: episodio de sueño

```txt
t = 5

S_5:
  estado previo al sueño con fatiga y alimentación reciente

u_5:
  episodio de sueño

κ_5:
  duración real
  interrupciones
  ambiente

𝓘_{κ_5}:
  procesos de descanso y recuperación

S_6:
  fatiga parcialmente reducida o persistente
  disposición para el día siguiente modificada
  respuesta a la próxima sesión condicionada
```

### 15.12 La trayectoria del día

El día completo puede resumirse como:

```txt
S_0
--integra desayuno--> S_1
--integra estrés laboral--> S_2
--integra comida--> S_3
--integra fuerza--> S_4
--integra cena--> S_5
--integra sueño--> S_6
```

La lista de acontecimientos no sustituye los estados intermedios. Cada transición cambia las condiciones desde las que se integra la siguiente.

### 15.13 Segunda sesión: misma rutina, estado diferente

Tres días después se ejecuta nominalmente la misma sesión `u_fuerza`.

Caso A:

```txt
S_a:
  recuperación 7/10
  técnica estable
  sueño consistente
  sin dolor

κ_a:
  tiempo completo
  equipo disponible

resultado posible:
  volumen completado
  fatiga controlada
  progresión habilitada
```

Caso B:

```txt
S_b:
  recuperación 3/10
  fatiga residual
  sueño interrumpido
  molestia de rodilla

κ_b:
  tiempo reducido
  misma ubicación

resultado posible:
  volumen reducido
  patrón modificado
  progresión inhibida
  protección priorizada
```

Formalmente:

```math
S_a\neq S_b
\quad\Longrightarrow\quad
\mathcal I_{\kappa}(S_a,u_{fuerza})
\;\text{puede diferir de}\;
\mathcal I_{\kappa}(S_b,u_{fuerza})
```

### 15.14 Misma comida, estados diferentes

Una comida nominalmente igual puede integrarse desde:

- hambre moderada y descanso adecuado;
- hambre intensa después de un intervalo prolongado;
- estado posterior a entrenamiento;
- malestar digestivo;
- hidratación diferente;
- horarios distintos.

PIEA no afirma cuál será exactamente el resultado. Afirma que el estado previo y el contexto pueden cambiar la integración; por ello, el nombre superficial de la comida no basta para predecir `S_{t+1}`.

### 15.15 Semana 1 como lote

En escala semanal, los aportes se agrupan:

```yaml
week_1_batch:
  structured_intake_days: 4
  strength_sessions_completed: 2
  planned_strength_sessions: 3
  cardio_sessions_completed: 1
  sleep_consistency: low
  progressive_pain: false
  recovery_trend: unstable
```

El lote no borra la secuencia cuando ésta es relevante. La sesión omitida no se cuenta como carga, pero sí puede modificar el sistema conductual y la planificación posterior.

### 15.16 Estado `S_semana_1`

```txt
S_semana_1
= exposición parcial a carga
+ regularidad alimentaria mejorada respecto de S_0
+ fatiga irregular
+ técnica observada
+ composición sin cambio concluyente
+ información suficiente para ajustar el siguiente lote
```

### 15.17 Semanas 2 a 4

La trayectoria ficticia conserva:

- aumento gradual de regularidad alimentaria;
- tres sesiones completadas en semanas 2 y 3;
- reducción de volumen en semana 4;
- mejoría de técnica;
- sueño todavía variable;
- cintura con tendencia leve, no concluyente en una sola medición;
- fuerza de empuje con mejora observable;
- recuperación promedio de 5/10.

El estado al cierre del primer mes no es la suma de 28 días. Es una configuración en la que:

- algunas capacidades cambiaron;
- algunas respuestas agudas desaparecieron;
- algunos hábitos se consolidaron parcialmente;
- la fatiga fue regulada mediante descarga;
- las mediciones produjeron evidencia desigual;
- la trayectoria condiciona el diseño del mes siguiente.

### 15.18 Semanas 5 a 12

La continuidad ficticia incorpora progresiones pequeñas cuando recuperación y técnica lo permiten, conserva alimentación regular flexible y ajusta el plan cuando el horario cambia.

Al final se observan:

| Región | Inicio | Final ficticio | Interpretación limitada |
|---|---:|---:|---|
| Empuje técnico | 10 repeticiones | 18 repeticiones | capacidad observable mejorada |
| Plancha técnica | 30 s | 55 s | resistencia funcional mejorada |
| Recorrido 12 min | 1.5 km | 1.8 km | desempeño aeróbico mejorado |
| Cintura | 99 cm | 95 cm | proyección de composición con error posible |
| Recuperación | 4/10 | 6/10 | reporte funcional más estable |
| Regularidad alimentaria | 2/7 días | 5/7 días | cambio conductual acoplado |

Estas cifras sólo materializan el caso. No demuestran que el plan cause necesariamente esos resultados en una persona real.

### 15.19 Evidencia de dependencia de trayectoria

La dependencia aparece porque:

1. la carga tolerable en semana 8 depende de adaptación y fatiga acumuladas;
2. la misma sesión cambia de función según técnica y recuperación alcanzadas;
3. la regularidad alimentaria modifica la probabilidad de ejecutar decisiones posteriores;
4. la descarga tiene sentido sólo respecto de carga previa;
5. la medición final se interpreta contra una trayectoria, no contra un último evento;
6. el siguiente objetivo se define desde `S_final`, no desde `S_0` ni desde la última comida.

---

## 16. El cuerpo no integra «días» como una lista

### 16.1 Superposición temporal

Las consecuencias de una sesión pueden extenderse sobre varias ingestas y episodios de sueño. Una comida puede influir más allá del momento de consumo. La recuperación de una semana puede depender de cargas anteriores.

Por ello, la secuencia real se parece más a procesos superpuestos que a cajas cerradas:

```txt
evento A ───────── efecto residual ───────┐
evento B ─── efecto ───────────────┐      │
evento C ───────── efecto ─────────┴──────┘
                         estado actual
```

### 16.2 Discretización analítica

PIEA usa `t` como índice de transición. No exige que la fisiología sea realmente discreta. La discretización es una herramienta para declarar antes y después funcionales.

### 16.3 Lotes

Puede escribirse:

```math
S_{t+1}=\mathcal I_{\kappa_t}(S_t,U_t)
```

donde `U_t` es un lote compuesto, siempre que:

- se declare su contenido;
- no se oculte un orden causalmente relevante;
- la escala de `S_t` corresponda al lote;
- el mecanismo describa la integración del conjunto.

---

## 17. Acoplamiento entre dieta y ejercicio

### 17.1 Interdependencia

El plan de ejercicio selecciona capacidades objetivo y produce carga. La alimentación participa en disponibilidad y recuperación. El sueño y descanso modulan la posibilidad de consolidar o sostener la trayectoria.

### 17.2 El objetivo no determina por sí solo la intervención

Dos sujetos con el mismo objetivo pueden requerir trayectorias distintas por:

- tiempo disponible;
- experiencia;
- acceso a alimentos;
- presupuesto;
- lesiones o restricciones;
- preferencias;
- equipo;
- horario;
- plazo;
- respuesta observada.

Ésta es una adaptación contextual FAC. Dentro de cada trayectoria, PIEA modela las transiciones corporales.

### 17.3 Colisiones

Las intervenciones pueden competir:

- carga alta con recuperación insuficiente;
- restricción alimentaria incompatible con desempeño esperado;
- horarios que reducen sueño;
- volumen que supera tolerancia;
- alimentos elegidos que producen malestar reportado.

La integración no es una suma armónica por defecto. Incluye inhibiciones y compensaciones.

### 17.4 Sinergias no presumidas

Una combinación puede producir mejores resultados que intervenciones aisladas, pero la sinergia debe observarse o sustentarse. PIEA permite representarla como relación emergente limitada; no la garantiza.

---

## 18. Sueño, estrés, hidratación y condiciones metabólicas

### 18.1 No son ruido periférico

Pueden operar como:

- componentes de `S_t`;
- aportes `u_t`;
- condiciones `κ_t`;
- variables omitidas que invalidan una inferencia.

### 18.2 Regla de clasificación

| Pregunta | Rol |
|---|---|
| ¿Qué episodio se está integrando? | `u_t` |
| ¿Qué condición modula la transición? | `κ_t` |
| ¿Qué efecto previo ya está activo? | `S_t` |
| ¿Qué medición permite inferirlo? | indicador externo |

### 18.3 Condiciones metabólicas

Este documento utiliza «condiciones metabólicas» como categoría abierta. No diagnostica ni modela patologías. En aplicación real, cualquier condición clínica relevante exige fuentes y profesionales apropiados.

---

## 19. Proyecciones parciales y no únicas

### 19.1 La báscula no es el cuerpo

```txt
masa corporal medida
≠ composición corporal completa
≠ fuerza
≠ rendimiento
≠ recuperación
≠ salud metabólica
≠ S_t completo
```

### 19.2 Superficies de observación

| Superficie | Región aproximada | Limitación |
|---|---|---|
| Peso | masa total | varía por múltiples componentes |
| Cintura | composición y distribución aproximada | técnica y momento afectan medición |
| Repeticiones | capacidad y técnica | depende de motivación, fatiga y ejecución |
| Tiempo o distancia | rendimiento | depende de ambiente y estrategia |
| Percepción de esfuerzo | experiencia funcional | subjetiva y contextual |
| Sueño reportado | recuperación potencial | auto-reporte parcial |
| Fotografía | manifestación visual | no muestra procesos internos |

### 19.3 Proyección no única

El mismo estado puede producir:

- un registro numérico;
- una gráfica;
- una descripción cualitativa;
- un plan ajustado;
- una decisión de mantener;
- una decisión de reducir carga.

Estas realizaciones no son equivalentes entre sí ni exhaustivas.

### 19.4 Medición como aporte a otro sistema

La medición no necesariamente cambia el cuerpo de forma relevante. Sí puede convertirse en `u_t` para el sistema acoplado de planificación:

```txt
medición
→ integración por entrenador, sujeto o aplicación
→ plan actualizado
→ intervención futura
→ posible nueva transición corporal
```

---

## 20. Extensión de observación

PIEA mínimo termina en `S_{t+1}` y su consecuencia futura. Para observar el estado se añade una extensión:

```txt
S_{t+1}
→ medición o reporte parcial
→ interpretación con incertidumbre
```

Esta extensión:

- no reemplaza `S_{t+1}`;
- no introduce un operador nuclear nuevo;
- puede producir evidencia incompleta;
- requiere instrumentos y protocolos consistentes;
- debe distinguir variación real y ruido.

Si la observación se convierte en documento, gráfica o interfaz, su realización pertenece al nivel ACCD.

---

## 21. Extensión de retroalimentación y control

### 21.1 Circuito

```txt
intervención
→ estado posterior
→ medición parcial
→ evaluación
→ ajuste del plan
→ nueva intervención
```

### 21.2 Sensor

- registro de sesiones;
- técnica;
- rendimiento;
- medidas;
- hambre;
- sueño;
- dolor o malestar.

### 21.3 Evaluador

Compara tendencias contra:

- objetivo;
- restricciones;
- tolerancia;
- seguridad;
- incertidumbre;
- consistencia de medición.

### 21.4 Actuador

Puede modificar:

- selección de ejercicio;
- volumen;
- intensidad;
- duración;
- distribución semanal;
- estructura de comidas;
- preparación logística;
- frecuencia de revisión.

### 21.5 Memoria externa

El registro conserva:

- qué se ejecutó;
- qué se observó;
- qué cambió;
- por qué se ajustó;
- qué incertidumbre permanece.

### 21.6 Frontera PIEA

El circuito es una extensión de control. PIEA no exige que todo sistema tenga sensor externo, evaluador y planificador. El organismo ya puede satisfacer el núcleo si existen transiciones dependientes de estado y persistencia. El circuito añade gobierno y ajuste.

---

## 22. Retroactividad: diferencia respecto del texto

### 22.1 En lectura

Una frase posterior puede reorganizar el significado atribuido a una frase anterior.

### 22.2 En dieta–ejercicio

Una comida posterior no cambia el significado físico del entrenamiento pasado. Puede:

- modificar consecuencias posteriores;
- compensar parcialmente un estado;
- sostener recuperación;
- cambiar la interpretación humana de la trayectoria;
- alterar el plan futuro.

### 22.3 Ruptura de correspondencia

```txt
reinterpretación semántica retrospectiva
≠ modificación material del pasado
```

La trayectoria corporal admite reorganización del estado presente, pero no reescritura causal del acontecimiento ya ocurrido.

---

## 23. Relación con FAC

### 23.1 Función de FAC

FAC permite adaptar el núcleo PIEA a un sujeto, objetivo y entorno sin confundir la adaptación con el patrón.

### 23.2 Mapeo utilizado

| Componente FAC | Realización en el caso |
|---|---|
| Núcleo preservable | transición PIEA e invariantes |
| Régimen de variación | tipos de ingesta, ejercicio, escala, estado y medición |
| Composición contextual | sujeto, medio, distribución y ejecución |
| Intención | estudiar una transformación dieta–ejercicio |
| Caso de proyección | `Sujeto Beta` |
| Heurísticas | separar estado, evento, contexto y medición |
| Restricciones | no prescribir ni diagnosticar |
| Transformación contextual | mapeo de roles PIEA al dominio corporal |
| Intervención situada | trayectoria ficticia de 12 semanas |
| Evidencia de retorno | mediciones y reportes parciales |
| Corrección acumulativa | mejora futura del adaptador, separada del cuerpo |

### 23.3 Dos acumulaciones

```txt
ACUMULACIÓN PIEA
  ocurre en el estado corporal de la trayectoria modelada

CORRECCIÓN ACUMULATIVA FAC
  ocurre cuando evidencia de casos modifica la fábrica de adaptaciones
```

No deben fusionarse.

---

## 24. Relación con ACCD

### 24.1 Preguntas diferentes

| Arquitectura | Pregunta |
|---|---|
| PIEA | ¿Cómo cambia el estado corporal al integrar una intervención? |
| FAC | ¿Cómo se adapta el núcleo PIEA a este sujeto y caso? |
| ACCD | ¿Cómo se realiza la estructura resultante como documento, gráfica o interfaz? |

### 24.2 Encadenamiento

```txt
PIEA 0.2.0
→ adaptación dieta–ejercicio mediante FAC
→ estructura cognitiva contextualizada
→ protocolo ACCD
→ Markdown, gráfica, tablero, video o interfaz
```

### 24.3 No correspondencias

```txt
S_t ≠ construcción conceptual ACCD por definición
u_t ≠ instancia contextual ACCD
𝓘_{κ_t} ≠ protocolo de proyección
S_{t+1} ≠ manifestación codominial automática
medición ≠ estado completo
```

### 24.4 Este documento

El Markdown es una manifestación explicativa del ejemplo. No es el cuerpo, no es la trayectoria y no sustituye `S_{t+1}`.

---

## 25. Relación con COGNICIÓN_CENTRAL

### 25.1 Espacios lógicos

```txt
CC://
  PIEA, FAC y antecedentes de ACONDICIONAMIENTO FÍSICO recuperados

PROJECT://
  conversación actual y decisiones humanas sobre los ejemplos

OVERLAY://
  adaptación local dieta–ejercicio y mapeos utilizados

OUTPUT://
  este Markdown preparado para revisión
```

### 25.2 Gobierno

El humano conserva autoridad para:

- aceptar o rechazar la adaptación;
- modificar el alcance;
- incorporar manualmente el archivo;
- pedir revisión profesional del dominio;
- promover o no promover el ejemplo;
- cambiar la versión del paquete.

### 25.3 Estado de persistencia

La generación de este documento no modifica automáticamente:

- `ART_patron_de_integracion_estructural_acumulativa`;
- COGNICIÓN_CENTRAL;
- el canon de `ACONDICIONAMIENTO FÍSICO`;
- FAC;
- ACCD.

---

## 26. Pruebas de pertenencia PIEA

| Prueba | Resultado | Evidencia en el ejemplo |
|---|---|---|
| P1 — Estado previo | `PASA` | Se describe un estado fisiológico-funcional antes de cada transición |
| P2 — Aporte | `PASA` | Ingesta, sesión, sueño o perturbación se distinguen antes de integrar |
| P3 — Actualización | `PASA` | Cambian saciedad, fatiga, recuperación, capacidad o composición en la escala pertinente |
| P4 — Dependencia del estado | `PASA` | La misma sesión puede producir resultados distintos desde estados diferentes |
| P5 — Contexto | `PASA` | Horario, técnica, sueño, dolor y disponibilidad modulan integración |
| P6 — Organización | `PASA` | La trayectoria altera relaciones y capacidades, no sólo almacena eventos |
| P7 — Persistencia | `PASA` | Fatiga, adaptación y regularidad alcanzan transiciones posteriores |
| P8 — Contra último aporte | `PASA` | El resultado final no se explica por la última comida o sesión |
| P9 — Contexto omitido | `PASA CON LÍMITE` | Se declaran variables principales; permanecen incertidumbres biológicas |
| P10 — Suficiencia del estado | `PASA PROVISIONALMENTE` | El estado incluye regiones rápidas, intermedias y lentas; puede requerir ampliación |
| P11 — Nivel | `PASA` | Se separan evento, día, semana y ciclo, con interfaces explícitas |
| P12 — No equivalencia ACCD | `PASA` | Medición y Markdown se separan de `S_{t+1}` |

### 26.1 Evidencia fuerte

La evidencia estructural más fuerte es:

```txt
misma intervención nominal
+ estados previos diferentes
→ integración y estado posterior potencialmente diferentes
```

### 26.2 Límite de la evidencia

El caso particular es ficticio y no contiene observaciones clínicas verificadas. Por ello, la pertenencia estructural es fuerte, pero la clasificación del caso desarrollado se mantiene como `PLAUSIBLE_INSTANCE`.

---

## 27. Modelos alternativos

### 27.1 Sucesión pura

```txt
desayuno → comida → entrenamiento → cena → sueño
```

Insuficiente: no explica estados intermedios ni dependencia de trayectoria.

### 27.2 Diario de comidas

Insuficiente: conserva eventos, pero no demuestra integración corporal.

### 27.3 Suma energética aislada

Puede explicar una región cuantitativa importante, pero es insuficiente como modelo completo de fuerza, fatiga, hidratación, composición observada y respuesta futura.

### 27.4 Última comida

Falsado como explicación total: no explica adaptación acumulada ni capacidades.

### 27.5 Último entrenamiento

Falsado: el rendimiento y respuesta dependen de trayectoria, técnica, recuperación y contexto.

### 27.6 Contexto sin estado

Insuficiente: horario y equipo no explican por sí solos la respuesta si se ignora el organismo.

### 27.7 Interpretación del observador

Insuficiente: una gráfica puede reorganizar el conocimiento del observador sin demostrar que el cuerpo cambió.

### 27.8 Modelo PIEA

Explica:

- estado previo;
- evento diferenciable;
- integración condicionada;
- estado posterior;
- persistencia;
- sensibilidad a trayectoria;
- observación parcial.

---

## 28. Contraejemplos deliberados

### CE-DIE-01 — Menú nunca ejecutado

Un archivo contiene una dieta perfecta, pero el sujeto no la sigue.

```txt
resultado:
NON_INSTANCE respecto de transformación corporal por ese menú
```

Puede existir una transición cognitiva al leerlo, pero es otro sistema.

### CE-DIE-02 — Registro sin integración demostrada

Una aplicación acumula fotografías de comidas.

```txt
resultado:
STORAGE_ONLY para el sistema de registro
```

No demuestra organización del estado corporal.

### CE-DIE-03 — Peso aislado

La báscula muestra un valor menor al día siguiente.

```txt
resultado:
INSUFFICIENT_EVIDENCE para composición corporal
```

### CE-DIE-04 — Rutina reiniciada cada día

Un algoritmo propone la misma sesión ignorando dolor, fatiga, técnica y progreso.

```txt
resultado:
NON_INSTANCE del planificador como PIEA acumulativo
```

El cuerpo todavía puede ser PIEA; el planificador no.

### CE-DIE-05 — Calorías como lista

Se suman cantidades, pero el total no modifica decisión, estado representado ni acción.

```txt
resultado:
ADDITION_ONLY
```

### CE-DIE-06 — Medición confundida con cuerpo

Una gráfica es tratada como estado fisiológico completo.

```txt
resultado:
FALLA P12
```

### CE-DIE-07 — Cambio atribuido a la última comida

Se atribuye una tendencia de doce semanas a la cena final.

```txt
resultado:
LAST_INPUT_ONLY, explicación insuficiente
```

### CE-DIE-08 — Diferencia por contexto omitido

Dos sesiones muestran rendimientos distintos, pero una ocurrió con equipo diferente y enfermedad no declarada.

```txt
resultado:
FALLA P9 hasta ampliar κ_t o S_t
```

### CE-DIE-09 — Analogía semántica literal

Se afirma que comida = palabra y cuerpo = lector.

```txt
resultado:
SUSTITUCIÓN ANALÓGICA INVÁLIDA
```

---

## 29. Escalas del ejemplo

### 29.1 Escala micro

```txt
X:
  región fisiológica funcional inmediata

u_t:
  ingesta, repetición o intervalo

S_t:
  estado inmediatamente anterior
```

### 29.2 Escala de sesión o comida

```txt
X:
  estado corporal durante un episodio delimitado

u_t:
  comida o sesión compuesta

S_t:
  configuración previa al episodio
```

### 29.3 Escala diaria

```txt
X:
  estado funcional a través de una ventana de 24 horas

u_t:
  lote ordenado de acontecimientos

S_t:
  estado al comienzo de la ventana
```

### 29.4 Escala semanal

```txt
X:
  trayectoria de carga, alimentación y recuperación

u_t:
  lote semanal o sesión individual según la pregunta

S_t:
  capacidades y fatiga al inicio de la semana
```

### 29.5 Escala de ciclo

```txt
X:
  estado fisiológico-funcional a lo largo de semanas

u_t:
  microciclo o mesociclo

S_t:
  configuración de capacidades, tolerancia y composición
```

### 29.6 Interfaz entre escalas

El estado final de una escala puede convertirse en componente del estado inicial de otra. No debe reutilizarse la misma descripción sin agregación explícita.

---

## 30. Variaciones legítimas

| Dimensión | Variación admitida | Condición |
|---|---|---|
| Objetivo | fuerza, resistencia, composición, recuperación, regularidad | Debe expresarse como configuración de estado |
| Sujeto | edad, experiencia, contexto y capacidades diferentes | No transferir prescripción entre sujetos |
| Aporte | alimento, agua, ejercicio, sueño, descanso, perturbación | Debe distinguirse antes de integrar |
| Granularidad | evento, comida, sesión, día, semana, ciclo | Estado y mecanismo deben usar la misma escala |
| Estado | vector, grafo, descripción cualitativa, modelo híbrido | Debe ser suficiente para explicar transición |
| Contexto | estable, variable, parcialmente observado | Incertidumbre declarada |
| Mecanismo | material, fisiológico, conductual acoplado | No mezclar mecanismos sin interfaz |
| Persistencia | aguda, residual, consolidada, reversible | Algún efecto debe alcanzar el futuro |
| Observación | directa, indirecta, inferida | Instrumento y límite declarados |
| Control | abierto o con retroalimentación | El feedback es extensión, no núcleo obligatorio |

---

## 31. Plantilla de instancia completada

```yaml
piea_instance:
  id: PIEA-EJ-DIE-001
  title: "Dieta–ejercicio como transformación fisiológica acumulativa"
  version: 0.1.0
  status: DRAFT

  scope:
    domain: "alimentación, actividad física y recuperación"
    system_X: >-
      Estado fisiológico-funcional relevante de un sujeto delimitado durante
      una trayectoria de dieta–ejercicio.
    scale: "meso; trayectoria de 12 semanas con interfaces micro y macro"
    transition_index_meaning: >-
      Acontecimiento integrado o lote funcional; no exige intervalos uniformes.
    observation_window: >-
      Desde la caracterización inicial de Sujeto Beta hasta la evaluación
      ficticia al cierre de doce semanas.

  state_before:
    symbol: S_t
    representation: >-
      Configuración híbrida de regiones rápidas, intermedias y lentas,
      inferida mediante capacidades, mediciones y reportes parciales.
    relevant_components:
      - disponibilidad funcional inmediata
      - hidratación funcional
      - hambre y saciedad
      - fatiga aguda
      - recuperación entre sesiones
      - fuerza
      - capacidad cardiorrespiratoria
      - composición corporal
      - tolerancia de tejidos
      - regularidad conductual acoplada
    relevant_relations:
      - fatiga limita rendimiento
      - recuperación habilita progresión
      - alimentación interactúa con actividad
      - dolor restringe ejecución
      - trayectoria modifica tolerancia
      - mediciones observan regiones parciales
    sufficiency_justification: >-
      Las regiones permiten explicar por qué ingestas y cargas nominalmente
      iguales pueden producir resultados diferentes. Si quedan diferencias
      sistemáticas no explicadas, debe ampliarse el estado o el contexto.

  contribution:
    symbol: u_t
    description: >-
      Ingesta, sesión de ejercicio, episodio de sueño, descanso, hidratación,
      perturbación o lote compuesto efectivamente ejecutado.
    origin: "entorno material, conducta del sujeto o proceso interno delimitado"
    granularity: "evento, comida, sesión, día o semana según la escala"

  operational_context:
    symbol: kappa_t
    conditions:
      - tiempo desde eventos previos
      - sueño previo
      - fatiga
      - dolor o molestia
      - horario
      - técnica
      - duración e intensidad reales
      - alimentos, agua y equipo disponibles
      - ambiente
      - restricciones del sujeto
    uncertainties:
      - estado fisiológico parcialmente latente
      - cantidades alimentarias estimadas
      - variabilidad biológica
      - auto-reportes
      - variables clínicas fuera de alcance

  integration:
    symbol: I_kappa_t
    mechanism_type: "material, fisiológico y funcional; parcialmente observable"
    mechanism_description: >-
      El organismo admite, transforma, utiliza, almacena, disipa o inhibe
      componentes del aporte desde su estado previo; las cargas producen
      respuestas agudas y, bajo recuperación, posibles adaptaciones.
    admission_or_filtering: >-
      Sólo la intervención realmente ejecutada se integra; su efecto puede ser
      total, parcial, transitorio, inhibido o irrelevante para la escala elegida.
    transformations:
      - incorporación material
      - utilización y distribución
      - respuesta aguda
      - fatiga
      - recuperación
      - adaptación
      - inhibición
      - compresión de trayectoria
      - pérdida selectiva

  state_after:
    symbol: S_t_plus_1
    representation: >-
      Configuración corporal actualizada con cambios de distinta velocidad y
      persistencia, observada mediante indicadores parciales.
    relevant_change: >-
      En el caso ficticio cambian regularidad, fatiga, recuperación, fuerza,
      rendimiento aeróbico y proyecciones de composición.
    preserved_path_effect: >-
      Adaptación, técnica, tolerancia, fatiga residual y hábitos acoplados
      modifican las intervenciones posteriores.
    future_consequence: >-
      La siguiente comida, sesión y decisión de ajuste se produce desde un
      estado diferente al inicial.

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
    succession_only: "insuficiente; no explica estados intermedios"
    storage_only: "insuficiente; el registro no es el cuerpo"
    addition_only: >-
      útil para ciertos agregados, insuficiente para organización funcional,
      fatiga, adaptación y mediciones múltiples
    last_input_only: "falsado por la dependencia de trayectoria"
    omitted_context: >-
      controlado parcialmente; persisten incertidumbres biológicas y de medición

  fac_adaptation:
    source_nucleus: "PIEA 0.2.0"
    contextual_composition: >-
      Sujeto Beta + alimentos + actividad + descanso + entorno + instrumentos
      + horizonte de doce semanas.
    transformation_heuristics:
      - mapear funciones y no vocabulario
      - elegir el estado corporal como sistema principal
      - separar ontología y ejecución
      - distinguir estado, aporte, contexto y medición
      - declarar escalas
      - conservar incertidumbre
      - evitar prescripción
    output_restrictions:
      - no diagnosticar
      - no prescribir cantidades clínicas
      - no identificar peso con salud
      - no atribuir causalidad a una medición aislada
      - no confundir kappa_t con phi_n
      - no convertir manifestación en estado
    valid_correspondences:
      - estado PIEA ↔ configuración fisiológica-funcional previa
      - aporte PIEA ↔ ingesta, carga, descanso o perturbación
      - contexto PIEA ↔ condiciones operativas de integración
      - integración PIEA ↔ procesamiento y respuesta corporal
      - persistencia PIEA ↔ fatiga, recuperación, adaptación o composición
    broken_correspondences:
      - comida != palabra
      - cuerpo != lector
      - día != unidad ontológica obligatoria
      - báscula != cuerpo
      - plan != intervención ejecutada
      - gráfica != estado fisiológico completo

  accd_handoff:
    required: true
    cognitive_structure_ref: >-
      Estructura contextualizada del ejemplo PIEA dieta–ejercicio.
    realization_ref: "Markdown incorporable al paquete PIEA"
    protocol_ref: "[ACCD-EQ], recuperado con su autoridad vigente"
    note: >-
      ACCD formaliza la manifestación documental; no reemplaza la transición
      fisiológica descrita por PIEA.

  evidence:
    observations:
      - misma sesión nominal integrada desde estados diferentes
      - trayectorias de comidas, carga y sueño con estados intermedios
      - persistencia de fatiga, técnica, tolerancia y adaptación
      - mediciones múltiples y no equivalentes
      - composición ascendente entre escalas
    sources:
      - ART_patron_de_integracion_estructural_acumulativa.txt, PIEA 0.2.0
      - ejemplo-acondicionamiento-fisico.txt
      - familias-dominio-fisico.txt
      - ejemplo-acondicionamiento-mejorado-teoria-de-lazo.txt
      - PROMPT_CENTRAL_INSTALACION_COGNICION_CENTRAL_EN_CHATGPT_v0_1_0.txt
      - discusión del proyecto sobre dieta–ejercicio como tercer ejemplo PIEA
    counterevidence:
      - trayectoria particular ficticia
      - variables fisiológicas simplificadas
      - ausencia de mediciones clínicas verificadas
      - mecanismos internos descritos sólo a nivel operacional
    unknowns:
      - respuesta individual real
      - variables metabólicas no observadas
      - causalidad específica entre cada intervención y resultado
      - validez de la extensión nutricional local

  classification:
    result: PLAUSIBLE_INSTANCE
    rationale: >-
      El dominio satisface fuertemente la firma PIEA, pero la trayectoria
      desarrollada es ficticia y no constituye evidencia empírica suficiente
      para confirmar sus resultados particulares.
```

---

## 32. Clasificación final

### 32.1 Resultado principal

```txt
CLASIFICACIÓN DEL DOMINIO:
CONFIRMED_INSTANCE en el nivel estructural general

CLASIFICACIÓN DE LA TRAYECTORIA SUJETO BETA:
PLAUSIBLE_INSTANCE

NIVEL:
estado fisiológico-funcional durante una trayectoria dieta–ejercicio

ALCANCE:
transformaciones con estado previo, intervención diferenciable,
integración contextual, persistencia y consecuencias futuras
```

La plantilla adopta `PLAUSIBLE_INSTANCE` porque registra el caso concreto, no la existencia general de integración fisiológica acumulativa.

### 32.2 Resultados que no se transfieren automáticamente

```txt
plan ficticio como recomendación:
RECHAZADO

causalidad de cada comida:
INSUFFICIENT_EVIDENCE

respuesta universal:
RECHAZADA

estado metabólico completo:
FUERA DEL MODELO

diagnóstico clínico:
FUERA DE ALCANCE

peso como salud total:
RECHAZADO

misma intervención = mismo resultado:
RECHAZADO

retroactividad semántica:
NO TRANSFERIDA
```

---

## 33. Qué demuestra este ejemplo sobre PIEA

### 33.1 La intervención llega a un estado

Una comida o sesión nunca llega a un vacío fisiológico.

### 33.2 Integrar no es registrar

El menú, la fotografía y el diario son portadores externos; la integración corporal es otra operación.

### 33.3 Acumular no es sumar

Los totales cuantitativos pueden importar, pero la trayectoria también reorganiza fatiga, tolerancia, capacidad, recuperación y conducta.

### 33.4 La pérdida es compatible

El estado puede olvidar, disipar, revertir o sustituir efectos sin dejar de depender de la trayectoria.

### 33.5 Las escalas se anidan

Repetición, sesión, día, semana y ciclo pueden modelarse, pero no comparten automáticamente el mismo estado.

### 33.6 La proyección es parcial

Peso, cintura, fuerza y rendimiento muestran regiones diferentes.

### 33.7 La retroalimentación es una extensión

Medir y ajustar crea un circuito de control acoplado; no redefine el núcleo PIEA.

### 33.8 El contexto cambia la integración

Sueño, dolor, horario, técnica y recursos pueden cambiar el resultado de una intervención nominalmente igual.

### 33.9 La analogía tiene límites

El cuerpo transforma materia y responde fisiológicamente; no reconstruye significado como un lector.

---

## 34. Trazabilidad y fuentes

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
- distinción entre portador, manifestación y estructura;
- recuperación mínima suficiente;
- autoridad y trazabilidad;
- prohibición de cambios canónicos silenciosos.

### `[CC-ACOND-FISICO-BASE]`

```txt
04_conocimiento_y_contexto/memoria_conceptual/incubacion-conceptual/
acondicionamiento-fisico/ejemplo-acondicionamiento-fisico.txt
```

Funciones recuperadas:

- objetivos como estados finales;
- variables de estado;
- contexto de sujeto;
- operaciones de dominio;
- unidades y módulos de ejecución;
- composición temporal ascendente;
- relación entre objetivo, contexto y sesión particular.

### `[CC-FAMILIAS-FISICAS]`

```txt
04_conocimiento_y_contexto/memoria_conceptual/incubacion-conceptual/
acondicionamiento-fisico/familias-dominio-fisico.txt
```

Funciones recuperadas:

- definición de `fNode`;
- familias `PFAM-1` a `PFAM-9`;
- criterios de pertenencia;
- distinción entre capacidad física y ejercicio;
- medición, intervención y borde de identidad.

### `[CC-ACOND-LAZO]`

```txt
04_conocimiento_y_contexto/memoria_conceptual/incubacion-conceptual/
teoria-de-lazo/ejemplo-acondicionamiento-mejorado-teoria-de-lazo.txt
```

Funciones recuperadas:

- separación entre eje ontológico y eje de ejecución;
- `UMD-S` y `UMD-E`;
- composición repetición–serie–bloque–sesión–semana–mesociclo;
- sensor, evaluador, actuador y memoria;
- estado inicial, objetivo y contexto;
- cierre y retroalimentación.

El documento de Teoría de Lazo es una fuente genealógica y comparativa. PIEA `0.2.0` conserva precedencia para la notación y el contrato de instancia.

### `[PROJECT-DISCUSSION]`

```txt
Conversación del proyecto del 2026-08-11 sobre descubrimiento,
formalización y ejemplos de PIEA.
```

Funciones recuperadas:

- dieta–ejercicio como tercer ejemplo separado;
- estado corporal previo;
- alimentación, actividad, sueño y estrés;
- integración fisiológica;
- nuevo estado corporal;
- peso, medidas, fuerza y rendimiento como proyecciones parciales;
- báscula ≠ cuerpo;
- día como ventana posible, no unidad ontológica obligatoria;
- diferencia entre comunicación e intervención material.

### `[PIEA-EJ-TXT-001]`

```txt
PIEA_EJEMPLO_TEXTOS_v0_1_0.md
```

Función comparativa:

- demuestra el mismo núcleo en una integración semántica;
- aporta el contraste entre reinterpretación textual y transformación material;
- no es fuente normativa del ejemplo corporal.

### `[PIEA-EJ-HIA-001]`

```txt
PIEA_EJEMPLO_INTERACCION_HUMANO_IA_v0_1_0.md
```

Función comparativa:

- demuestra el mismo núcleo en una interacción operativa;
- aporta la separación entre estado, superficie visible y retroalimentación;
- no autoriza antropomorfizar el organismo ni la IA.

---

## 35. Estado de incorporación

```txt
Documento de ejemplo:
GENERADO

Paquete PIEA 0.2.0:
NO MODIFICADO

Ruta recomendada:
ejemplos/03_dieta_ejercicio.md

Incorporación al paquete:
PENDIENTE DE ACCIÓN HUMANA

Promoción a COGNICIÓN_CENTRAL:
NO REALIZADA

Validación del dominio por especialista:
PENDIENTE

Validación canónica:
PENDIENTE
```

La existencia de este Markdown en `OUTPUT://` no modifica el paquete PIEA ni el canon. Su incorporación, revisión y aceptación corresponden al humano.

