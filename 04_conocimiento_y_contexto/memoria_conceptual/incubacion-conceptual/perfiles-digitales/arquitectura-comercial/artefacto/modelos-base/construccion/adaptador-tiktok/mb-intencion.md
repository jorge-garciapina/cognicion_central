# Modelo base completo de la intención

## 1. Unidad modelada

La unidad modelada es una **intención de adaptación**.

Una intención de adaptación no es:

- una pieza final;
- un formato;
- un protocolo;
- ni una materialización.

Es la configuración que fija **para qué** debe realizarse una instancia
contextual.

---

## 2. Función del modelo

Este modelo base tiene la función de permitir que una intención pueda ser:

- descrita de forma estructural;
- instanciada sin arbitrariedad;
- comparada con otras intenciones;
- usada como entrada para el diseño de adaptadores;
- y distinguida con claridad de otras dimensiones del sistema.

---

## 3. Estructura general del modelo

Una instancia válida de intención se representa como una configuración compuesta
por las siguientes dimensiones:

- `formulacion_canonica`
- `funcion_dominante`
- `efecto_buscado`
- `accion_esperada`
- `nivel_de_especificidad`
- `alcance_de_realizacion`
- `prioridad_de_intencion`
- `publico_objetivo_inmediato`
- `regimen_de_activacion_atencional`
- `horizonte_temporal`

---

## 4. Dimensiones del modelo base

### 4.1. `formulacion_canonica`

**Función:**  
Nombrar de manera explícita la intención que será instanciada.

**Tipo de valor:**  
Descriptivo controlado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**  
Una formulación breve, inequívoca y operativa de la intención.

**Ejemplos de valores válidos:**

- `crear guion para video de TikTok`
- `crear texto para Instagram Carousel`
- `crear guía de reexplicación`
- `crear microsecuencia guiada`
- `crear síntesis operativa`

**Restricciones:**

- Debe formular una intención de realización, no un tema.
- No debe confundirse con el nombre de un archivo ni con una instrucción
  completa de ejecución.
- Debe poder leerse como finalidad de adaptación.

---

### 4.2. `funcion_dominante`

**Función:**  
Fijar qué operación principal busca cumplir la intención.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `enseñar`
- `sintetizar`
- `persuadir`
- `evaluar`
- `diagnosticar`
- `captar_atencion`
- `activar_interaccion`
- `convertir`
- `distribuir`
- `manifestar_comercialmente`
- `abrir_serie`
- `continuar_serie`
- `cerrar_serie`

**Descripción de los valores:**

- `enseñar`:  
  La intención busca que la materialización facilite comprensión, asimilación o
  aprendizaje de un contenido, una idea, una estructura o una operación. La
  prioridad no está en condensar ni en persuadir, sino en hacer que el receptor
  entienda algo mejor que antes.

- `sintetizar`:  
  La intención busca condensar un contenido largo en una forma más breve,
  manejable o concentrada, preservando lo más importante. La prioridad está en
  reducir extensión o complejidad sin perder el núcleo de lo que debe
  conservarse.

- `persuadir`:  
  La intención busca mover al receptor hacia una adhesión, aceptación o cambio de
  postura. La materialización debe operar principalmente sobre la disposición del
  receptor frente a una idea, una valoración o una propuesta.

- `evaluar`:  
  La intención busca poner a prueba, medir o verificar algo en el receptor o en
  un proceso. La materialización se orienta a obtener evidencia sobre desempeño,
  comprensión, respuesta o cumplimiento, más que a enseñar o captar atención.

- `diagnosticar`:  
  La intención busca identificar, distinguir o describir el estado de una
  situación, de un caso o de un receptor. La prioridad está en revelar la
  estructura del problema o del estado observado, no en transformarlo
  directamente.

- `captar_atencion`:  
  La intención busca producir detención, curiosidad o interés inicial. La
  materialización debe conseguir que el receptor se fije en la pieza, permanezca
  en ella o se disponga a seguirla, aunque todavía no se busque una comprensión
  profunda o una conversión directa.

- `activar_interaccion`:  
  La intención busca provocar una respuesta explícita del receptor, por ejemplo
  comentar, guardar, compartir, responder, reaccionar o continuar la interacción.
  La prioridad está en abrir una acción relacional, no solo en captar atención o
  transmitir contenido.

- `convertir`:  
  La intención busca llevar al receptor hacia una acción de paso o cambio más
  fuerte, por ejemplo seguir una cuenta, ir al perfil, solicitar información,
  registrarse, comprar o entrar en una relación de valor. La materialización se
  orienta a producir tránsito hacia otra fase del sistema.

- `distribuir`:  
  La intención busca hacer circular un contenido, una pieza o una formulación en
  un entorno determinado. La prioridad está en adaptar la salida para su tránsito
  eficaz dentro de un contexto de difusión, más que en enseñar, persuadir o
  evaluar por sí mismos.

- `manifestar_comercialmente`:  
  La intención busca que una entidad, oferta, servicio, activo o propuesta
  comparezca de forma apta para abrir relaciones de valor. No se trata solo de
  vender, sino de hacer visible una forma comercializable de la entidad dentro de
  un régimen de mercado o intercambio.

- `abrir_serie`:  
  La intención busca iniciar una secuencia de piezas relacionadas. La
  materialización debe funcionar como punto de entrada, habilitando continuidad y
  dejando preparado un desarrollo posterior.

- `continuar_serie`:  
  La intención busca prolongar una secuencia ya iniciada. La materialización debe
  operar como pieza de continuidad, manteniendo coherencia con lo anterior y
  haciendo avanzar la trayectoria de la serie.

- `cerrar_serie`:  
  La intención busca concluir una secuencia de piezas relacionadas. La
  materialización debe operar como cierre, síntesis terminal o resolución de la
  trayectoria abierta por las piezas previas.

**Restricciones:**

- Debe existir una función dominante.
- Si la intención combina varias funciones, una de ellas debe declararse como
  dominante y las demás deben quedar reflejadas en otros campos del modelo.

---

### 4.3. `efecto_buscado`

**Función:**  
Describir el efecto principal que la materialización pretende provocar en el
receptor.

**Tipo de valor:**  
Categorial semiabierto.

**Cardinalidad:**  
Uno o más valores, con una dominancia explícita.

**Espacio de valores sugerido:**

- `comprension_rapida`
- `curiosidad`
- `identificacion`
- `sorpresa`
- `urgencia`
- `retencion`
- `expectativa_de_resolucion`
- `deseo_de_guardar`
- `deseo_de_comentar`
- `deseo_de_compartir`
- `deseo_de_ver_hasta_el_final`
- `deseo_de_ir_al_perfil`
- `predisposicion_a_serie`
- `disposicion_a_accion`

**Descripción de los valores:**

- `comprension_rapida`:  
  La materialización busca que el receptor entienda con rapidez una idea, una
  distinción, una estructura o una operación, sin exigir un recorrido largo ni
  una elaboración profunda inmediata. El efecto dominante es la ganancia rápida
  de inteligibilidad.

- `curiosidad`:  
  La materialización busca abrir una disposición exploratoria en el receptor. No
  pretende todavía comprensión plena ni acción directa, sino generar interés por
  seguir, averiguar más, continuar viendo o entrar en contacto con el contenido.

- `identificacion`:  
  La materialización busca que el receptor se reconozca en lo que se presenta:
  en un problema, una situación, un deseo, una limitación o una experiencia. El
  efecto dominante es la percepción de afinidad entre el contenido y la propia
  situación del receptor.

- `sorpresa`:  
  La materialización busca producir una ruptura de expectativa, extrañeza o
  contraste suficientemente fuerte como para desautomatizar la percepción del
  receptor. El efecto dominante es el quiebre del curso esperado de atención.

- `urgencia`:  
  La materialización busca instalar la sensación de que algo requiere respuesta,
  atención o decisión en un plazo corto o bajo presión relevante. El efecto
  dominante no es solo interés, sino percepción de necesidad de actuar o no
  postergar.

- `retencion`:  
  La materialización busca sostener la permanencia del receptor dentro del
  recorrido de la pieza. El efecto dominante no es solo captar atención inicial,
  sino impedir que se disuelva prematuramente y favorecer continuidad hasta una
  zona posterior de la realización.

- `expectativa_de_resolucion`:  
  La materialización busca dejar al receptor en espera activa de una resolución,
  aclaración, remate o cumplimiento posterior. El efecto dominante consiste en
  instalar una promesa estructural que empuje a seguir atendiendo.

- `deseo_de_guardar`:  
  La materialización busca que el receptor perciba la pieza como algo que vale la
  pena conservar para consulta, uso o recuperación posterior.

- `deseo_de_comentar`:  
  La materialización busca que el receptor perciba la pieza como algo que invita
  a responder, reaccionar, acordar, disentir o ampliar verbalmente.

- `deseo_de_compartir`:  
  La materialización busca que el receptor perciba la pieza como algo digno de
  ser transmitido, recomendado o difundido hacia otros.

- `deseo_de_ver_hasta_el_final`:  
  La materialización busca que el receptor no abandone la pieza antes de su
  cierre, sosteniendo una orientación clara hacia su recorrido completo.

- `deseo_de_ir_al_perfil`:  
  La materialización busca que el receptor salga de la pieza puntual para
  explorar el entorno más amplio de la fuente.

- `predisposicion_a_serie`:  
  La materialización busca dejar al receptor en disposición favorable para
  continuar una secuencia de piezas relacionadas. El efecto dominante no se agota
  en esta pieza aislada, sino que prepara continuidad.

- `disposicion_a_accion`:  
  La materialización busca dejar al receptor en un estado de disponibilidad para
  actuar, aplicar, decidir o responder. El efecto dominante es la transición
  desde recepción pasiva hacia una posible ejecución.

**Restricciones:**

- Debe haber al menos un efecto buscado.
- Si se declaran varios, debe existir uno dominante o un orden explícito.
- Los efectos buscados no deben confundirse con la estructura formal del
  codominio ni con reglas técnicas del protocolo.
- Si se declara `expectativa_de_resolucion`, debe haber coherencia con
  `horizonte_temporal`, `alcance_de_realizacion` o con una forma de continuidad
  explícita de la intención.

---

### 4.4. `accion_esperada`

**Función:**  
Fijar la acción concreta que la intención espera activar en el receptor.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Uno o más valores.

**Espacio de valores:**

- `ver_hasta_el_final`
- `comentar`
- `guardar`
- `compartir`
- `seguir_cuenta`
- `ir_al_perfil`
- `consumir_parte_siguiente`
- `solicitar_mas_informacion`
- `hacer_click`
- `aplicar_lo_mostrado`
- `ninguna_explicita`

**Descripción de los valores:**

- `ver_hasta_el_final`:  
  La acción esperada consiste en que el receptor permanezca en la pieza hasta su
  cierre. No se busca solo captar atención inicial, sino sostenerla a lo largo
  de todo el recorrido de la materialización.

- `comentar`:  
  La acción esperada consiste en que el receptor produzca una respuesta verbal o
  reactiva explícita, dejando una intervención en forma de comentario, opinión,
  respuesta, acuerdo, desacuerdo o ampliación.

- `guardar`:  
  La acción esperada consiste en que el receptor conserve la pieza para un uso
  posterior. La materialización debe inducir la percepción de que el contenido
  tiene valor recuperable o reutilizable.

- `compartir`:  
  La acción esperada consiste en que el receptor haga circular la pieza hacia
  otros. La materialización debe ser percibida como digna de transmisión,
  recomendación o difusión interpersonal.

- `seguir_cuenta`:  
  La acción esperada consiste en que el receptor establezca una relación de
  continuidad con la fuente de la pieza, suscribiéndose a sus futuras
  manifestaciones o integrándose a su trayectoria de publicación.

- `ir_al_perfil`:  
  La acción esperada consiste en que el receptor abandone la pieza puntual para
  explorar el entorno de procedencia de esa pieza. La materialización debe
  operar como puerta de entrada hacia una identidad, archivo o trayectoria más
  amplia.

- `consumir_parte_siguiente`:  
  La acción esperada consiste en que el receptor continúe con una pieza
  posterior o relacionada. La materialización no se cierra sobre sí misma, sino
  que deja abierta una continuidad explícita.

- `solicitar_mas_informacion`:  
  La acción esperada consiste en que el receptor demande una ampliación,
  aclaración o contacto posterior. La materialización debe dejar suficiente
  interés o insuficiencia productiva como para abrir esa solicitud.

- `hacer_click`:  
  La acción esperada consiste en que el receptor ejecute una acción de tránsito
  puntual sobre un enlace, botón o elemento equivalente. La materialización debe
  conducir a una salida donde el clic funcione como paso relevante del proceso.

- `aplicar_lo_mostrado`:  
  La acción esperada consiste en que el receptor no solo comprenda el contenido,
  sino que lo ejecute, use o ponga en práctica en su propia situación. La
  materialización debe orientar a la transferencia o implementación de lo
  presentado.

- `ninguna_explicita`:  
  La intención no busca activar una acción manifiesta e inmediata por parte del
  receptor. Esto no significa ausencia de efecto, sino que la materialización se
  orienta a producir comprensión, disposición, reconocimiento o apertura sin
  exigir una respuesta visible como condición principal.

**Restricciones:**

- Puede haber varias acciones esperadas, pero una debe quedar como principal.
- Si el valor es `ninguna_explicita`, debe ser coherente con la función
  dominante y con la condición de éxito.

---

### 4.5. `nivel_de_especificidad`

**Función:**  
Indicar el grado de precisión con el que está formulada la intención.

**Tipo de valor:**  
Categorial ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `general`
- `intermedia`
- `especifica`

**Descripción de los valores:**

- `general`:  
  La intención está formulada en un nivel amplio de finalidad. Nombra una clase
  de realización sin fijar todavía con mucha precisión el tipo concreto de
  materialización o la operación adaptativa específica. Sirve para orientar el
  campo general de la adaptación, pero deja abiertas varias formas posibles de
  realización.

- `intermedia`:  
  La intención está formulada en un nivel de precisión mayor que el general, pero
  aún no desciende al grado más concreto de realización. Delimita mejor la clase
  de adaptación buscada y reduce el espacio de posibilidades, aunque todavía
  admite varias materializaciones o protocolos posibles sin quedar completamente
  cerrada en una sola formulación específica.

- `especifica`:  
  La intención está formulada con un grado alto de precisión y ya orienta de
  manera fuerte la clase concreta de adaptación que debe construirse. Reduce
  significativamente la ambigüedad sobre el tipo de realización buscada y acerca
  la intención a una forma directamente operable dentro del diseño del adaptador.

**Restricciones:**

- Toda instancia de intención debe declarar su nivel de especificidad.
- El nivel declarado debe ser coherente con la formulación canónica.

---

### 4.6. `alcance_de_realizacion`

**Función:**  
Indicar si la intención busca una pieza aislada o una unidad dentro de una
estructura mayor.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `pieza_unica`
- `apertura_de_serie`
- `continuidad_de_serie`
- `cierre_de_serie`
- `pieza_de_transicion`
- `pieza_de_prueba`
- `pieza_de_validacion`
- `pieza_de_acceso`
- `pieza_de_profundizacion`

**Descripción de los valores:**

- `pieza_unica`:  
  La intención busca una materialización autosuficiente, concebida para operar
  por sí misma sin depender estructuralmente de piezas previas o posteriores.
  Puede insertarse dentro de una estrategia mayor, pero su sentido operativo
  inmediato no exige continuidad explícita con una serie.

- `apertura_de_serie`:  
  La intención busca una materialización cuyo papel principal es iniciar una
  secuencia de piezas relacionadas. Debe abrir un recorrido, introducir un campo
  de interés, establecer un punto de entrada o dejar preparado un desarrollo
  posterior.

- `continuidad_de_serie`:  
  La intención busca una materialización que prolonga una secuencia ya iniciada.
  Su función no es abrir ni cerrar, sino mantener la coherencia de una línea en
  curso, hacerla avanzar o sostener la atención y la inteligibilidad a través de
  piezas sucesivas.

- `cierre_de_serie`:  
  La intención busca una materialización cuya función principal es concluir una
  secuencia. Debe operar como cierre, resolución, síntesis terminal o punto de
  remate de una trayectoria previamente abierta.

- `pieza_de_transicion`:  
  La intención busca una materialización que conecte dos zonas distintas de una
  secuencia, de un recorrido o de una arquitectura de contenidos. Su función
  principal es facilitar el paso entre estados, enfoques, niveles o momentos
  diferentes, más que operar como apertura, continuidad simple o cierre.

- `pieza_de_prueba`:  
  La intención busca una materialización cuyo papel es ensayar, explorar o testear
  una forma de realización sin exigir todavía consolidación plena. Su valor
  principal está en la experimentación controlada de una operación, formato,
  enfoque o mecanismo de adaptación.

- `pieza_de_validacion`:  
  La intención busca una materialización orientada a verificar si cierta
  hipótesis, línea de adaptación, estrategia o configuración funciona como se
  esperaba. Su función principal es producir evidencia sobre la validez o
  pertinencia de una realización.

- `pieza_de_acceso`:  
  La intención busca una materialización que funcione como puerta de entrada a un
  sistema mayor, a una serie, a una trayectoria, a un perfil o a una propuesta
  más amplia. Su función es habilitar el ingreso, no necesariamente desarrollar
  de forma extensa el contenido por sí misma.

- `pieza_de_profundizacion`:  
  La intención busca una materialización orientada a llevar más lejos una línea ya
  abierta, aumentando densidad, detalle, complejidad o elaboración. Su función no
  es introducir por primera vez ni simplemente continuar, sino profundizar de
  manera clara una región del contenido o de la operación ya establecida.

**Restricciones:**

- Debe elegirse un único alcance dominante.
- Debe ser compatible con la relación con otras intenciones.

---

### 4.7. `prioridad_de_intencion`

**Función:**  
Indicar la jerarquía relativa de esta intención dentro del sistema de
realización.

**Tipo de valor:**  
Ordinal.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `principal`
- `secundaria`
- `terciaria`
- `auxiliar`

**Descripción de los valores:**

- `principal`:  
  La intención ocupa el lugar dominante dentro del sistema de realización. Es la
  orientación principal a la que debe subordinarse la construcción del adaptador
  y la evaluación de la salida. Si existen otras intenciones activas, deben
  entenderse en relación con ésta.

- `secundaria`:  
  La intención cumple una función relevante, pero no dominante. Acompaña,
  refuerza o matiza a una intención principal sin sustituirla. Puede influir en
  el diseño de la realización, pero no define por sí sola el criterio central de
  éxito.

- `terciaria`:  
  La intención tiene una presencia complementaria de menor peso dentro del
  sistema de realización. Su función es añadir una orientación adicional, una
  capa de apoyo o una finalidad derivada, sin ocupar el centro organizador de la
  adaptación.

- `auxiliar`:  
  La intención cumple una función de soporte. No organiza la adaptación en su
  conjunto, sino que contribuye de manera instrumental a que otras intenciones
  puedan cumplirse mejor. Su valor está en asistir, facilitar o reforzar la
  realización de intenciones de mayor jerarquía.

**Restricciones:**

- La prioridad debe poder coexistir con el campo
  `relacion_con_otras_intenciones`.
- Si la intención se modela aisladamente, puede declararse como `principal`.

---

### 4.8. `publico_objetivo_inmediato`

**Función:**  
Delimitar el público inmediato al que la intención orienta la realización.

**Tipo de valor:**  
Categorial semiabierto.

**Cardinalidad:**  
Uno o más valores.

**Espacio de valores sugerido:**

- `audiencia_fria`
- `audiencia_tibia`
- `audiencia_caliente`
- `seguidores_actuales`
- `personas_sin_conocimiento_previos`
- `personas_con_interes_previos`
- `personas_que_no_aplican`
- `personas_que_no_comprenden`
- `personas_que_ya_comprenden`

**Descripción de los valores:**

- `audiencia_fria`:  
  El público objetivo inmediato está compuesto por receptores que no tienen una
  relación previa fuerte con la fuente, con la propuesta o con el contenido.
  Requieren una realización capaz de abrir atención, generar interés inicial o
  producir una primera entrada comprensible.

- `audiencia_tibia`:  
  El público objetivo inmediato está compuesto por receptores que ya tienen algún
  grado de familiaridad, contacto o disposición favorable, pero que todavía no
  se encuentran plenamente comprometidos. La realización puede apoyarse en un
  reconocimiento previo parcial y avanzar con menos esfuerzo de apertura que en
  una audiencia fría.

- `audiencia_caliente`:  
  El público objetivo inmediato está compuesto por receptores ya fuertemente
  interesados, comprometidos o cercanos a la fuente, al contenido o a la
  propuesta. La realización no necesita concentrarse tanto en abrir atención,
  sino que puede orientarse con mayor fuerza a profundización, acción o
  conversión.

- `seguidores_actuales`:  
  El público objetivo inmediato está compuesto por personas que ya mantienen una
  relación explícita de seguimiento con la fuente. La realización puede apoyarse
  en continuidad, reconocimiento e historial previo de interacción.

- `personas_sin_conocimiento_previos`:  
  El público objetivo inmediato está compuesto por receptores que no cuentan con
  conocimientos previos relevantes sobre el tema o la estructura tratada. La
  realización debe asumir una distancia mayor respecto del contenido y evitar
  apoyarse en presupuestos no introducidos.

- `personas_con_interes_previos`:  
  El público objetivo inmediato está compuesto por receptores que ya muestran
  interés por el tema, aunque no necesariamente lo comprendan bien o lo apliquen.
  La realización puede apoyarse en una disposición favorable previa y orientar el
  contenido hacia profundización, clarificación o activación.

- `personas_que_no_aplican`:  
  El público objetivo inmediato está compuesto por receptores que ya conocen o
  reconocen algo del contenido, pero no lo llevan a la práctica. La realización
  debe orientarse a cerrar la distancia entre comprensión y ejecución.

- `personas_que_no_comprenden`:  
  El público objetivo inmediato está compuesto por receptores que están expuestos
  al tema o a la propuesta, pero todavía no logran entenderla con claridad. La
  realización debe privilegiar inteligibilidad, mediación y reducción de
  confusión.

- `personas_que_ya_comprenden`:  
  El público objetivo inmediato está compuesto por receptores que ya entienden el
  tema o la estructura básica implicada. La realización puede asumir esa base y
  orientarse a profundización, articulación, uso, continuación o acción.

**Restricciones:**

- Debe haber al menos un público objetivo inmediato.
- Si se declaran varios, debe existir uno dominante.

---

### 4.9. `estado_atencional`

https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69e27854-5ba8-83e8-b34f-1c38c8f25433

**Función:**  
Describir la configuración dominante de la relación atencional del receptor con
la pieza al momento de la realización, de modo que la intención pueda fijar qué
operación atencional debe cumplir la materialización.

**Tipo de valor:**  
Categorial semiabierto.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores sugerido:**

- `atencion_no_abierta`
- `atencion_inestable`
- `atencion_fragmentada`
- `atencion_superficial`
- `atencion_sostenida`
- `atencion_en_exploracion`
- `atencion_lista_para_profundizacion`
- `atencion_lista_para_activacion`
- `atencion_lista_para_continuidad`
- `atencion_requiere_reenganche`

**Descripción de los valores:**

- `atencion_no_abierta`:  
  La atención del receptor todavía no ha sido captada de manera efectiva. La
  realización debe operar principalmente como apertura atencional.

- `atencion_inestable`:  
  La atención del receptor se activa parcialmente, pero tiende a perderse con
  facilidad. La realización debe trabajar en estabilizarla y sostenerla.

- `atencion_fragmentada`:  
  La atención del receptor aparece dispersa, discontinua o dividida. La
  realización debe reducir dispersión y reorganizar el foco atencional.

- `atencion_superficial`:  
  La atención del receptor se mantiene en un nivel rápido o poco profundo. La
  realización debe decidir si basta con operar en esa superficie o si necesita
  conducir hacia mayor densidad.

- `atencion_sostenida`:  
  La atención del receptor se mantiene con continuidad suficiente. La
  realización puede apoyarse en esa estabilidad para desarrollar mejor el
  contenido o la acción buscada.

- `atencion_en_exploracion`:  
  La atención del receptor está abierta a recorrer, tantear o reconocer el campo,
  pero aún no se fija en una línea fuerte de comprensión o acción. La
  realización debe orientar la exploración sin cerrarla prematuramente.

- `atencion_lista_para_profundizacion`:  
  La atención del receptor ya está suficientemente captada y estabilizada como
  para recibir una realización más densa, elaborada o conceptualmente más rica.

- `atencion_lista_para_activacion`:  
  La atención del receptor ya no necesita solo captación o sostén, sino una
  operación que la convierta en disposición para actuar, responder o ejecutar.

- `atencion_lista_para_continuidad`:  
  La atención del receptor está en condiciones de pasar a una pieza siguiente, a
  una serie o a una trayectoria de continuidad. La realización puede orientarse a
  encadenar y prolongar el recorrido.

- `atencion_requiere_reenganche`:  
  La atención del receptor ha sido parcialmente abierta o sostenida antes, pero
  en el punto actual necesita ser recuperada, reactivada o reconducida. La
  realización debe operar como reenganche.

- `atencion_abierta_pero_sin_retencion`:  
  La atención del receptor puede ser captada en el inicio, pero no logra
  mantenerse con estabilidad suficiente. La realización debe trabajar no solo en
  abrir atención, sino en impedir su pérdida temprana.

- `atencion_en_espera_de_resolucion`:  
  La atención del receptor ya fue captada y permanece orientada hacia una
  resolución, remate o aclaración todavía no entregada. La realización debe
  decidir si cumple, posterga o redistribuye esa resolución.

**Restricciones:**

- Debe ser coherente con el `publico_objetivo_inmediato`.
- No debe describir conocimiento temático general ni disposición comercial
  global, sino la forma concreta en que la atención del receptor se supone
  situada frente a la realización.
- No debe confundirse con la estructura del codominio ni con las reglas del
  protocolo.
- Si se requiere más de un estado atencional, uno debe quedar como dominante y
  los demás deberán modelarse en otra dimensión o en una ampliación posterior del
  modelo.

### 4.10. `horizonte_temporal`

**Función:**  
Indicar en qué escala temporal busca operar la intención.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `inmediato`
- `corto_plazo`
- `mediano_plazo`
- `acumulativo`
- `seriado`

**Descripción de los valores:**

- `inmediato`:  
  La intención busca operar en el corto instante de recepción de la pieza. El
  efecto esperado y la acción buscada deben activarse en la misma interacción o
  en una proximidad temporal muy alta. La materialización se orienta a producir
  respuesta rápida, sin depender de sedimentación prolongada.

- `corto_plazo`:  
  La intención busca operar en una escala temporal breve, pero no necesariamente
  en el mismo instante de recepción. La materialización puede dejar instalado un
  efecto que se concrete poco después, por ejemplo en las siguientes horas o en
  un tramo cercano del recorrido del receptor.

- `mediano_plazo`:  
  La intención busca producir efectos que no dependen de respuesta inmediata, sino
  de una maduración parcial en el tiempo. La materialización debe ser coherente
  con un proceso más extendido de reconocimiento, comprensión, disposición o
  tránsito, sin quedar restringida al instante inicial.

- `acumulativo`:  
  La intención busca operar por suma o sedimentación de múltiples exposiciones,
  piezas o contactos. La materialización individual no agota por sí sola el
  efecto buscado, sino que contribuye a un proceso que gana fuerza mediante
  repetición, consistencia o acumulación de recorridos.

- `seriado`:  
  La intención busca operar dentro de una secuencia explícita de piezas
  relacionadas. La materialización debe entenderse como parte de un encadenamiento
  temporal mayor, en el que su función depende de una continuidad estructurada
  con otras realizaciones anteriores o posteriores.

**Restricciones:**

- Debe ser coherente con el alcance de realización.
- El horizonte `seriado` exige consistencia con `apertura_de_serie`,
  `continuidad_de_serie` o `cierre_de_serie`.

---

### 4.11. `regimen_de_activacion_atencional`

**Función:**  
Describir qué clase de activación atencional busca producir la intención en la
fase inicial o temprana de la realización, sin convertir todavía esa orientación
en reglas concretas de protocolo.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `apertura_inmediata`
- `apertura_progresiva`
- `reenganche`
- `sostenimiento_desde_el_inicio`
- `activacion_por_continuidad`

**Descripción de los valores:**

- `apertura_inmediata`:  
  La intención busca abrir atención de manera rápida en el primer tramo de la
  realización. El objetivo dominante es producir fijación temprana del receptor.

- `apertura_progresiva`:  
  La intención no exige una captura máxima inmediata, sino una entrada que gane
  atención de forma gradual a medida que avanza la pieza.

- `reenganche`:  
  La intención busca reabrir o reactivar una atención ya previamente expuesta al
  campo, a la serie o a la fuente, pero que necesita ser recuperada.

- `sostenimiento_desde_el_inicio`:  
  La intención no solo quiere captar, sino instalar desde el primer tramo una
  relación atencional estable, orientada a permanencia y no solo a impacto.

- `activacion_por_continuidad`:  
  La intención busca activar atención a partir de una continuidad ya en marcha:
  una serie, una secuencia o un recorrido previamente abierto.

**Restricciones:**

- Debe ser coherente con `funcion_dominante`, `efecto_buscado` y
  `estado_atencional`.
- No debe describir todavía mecanismos concretos de apertura, promesa, conflicto,
  ritmo o distribución interna de la pieza, porque eso corresponde al protocolo.
- No debe confundirse con la estructura del codominio.

---

### 4.12. `regimen_de_resolucion_buscada`

**Función:**  
Describir cómo se espera que la intención trate la relación entre apertura y
resolución, es decir, si busca resolver rápido, dejar expectativa abierta o
distribuir la resolución en el tiempo.

**Tipo de valor:**  
Categorial cerrado.

**Cardinalidad:**  
Un valor obligatorio.

**Espacio de valores:**

- `resolucion_inmediata`
- `resolucion_progresiva`
- `resolucion_diferida`
- `resolucion_parcial`
- `resolucion_abierta_a_continuidad`

**Descripción de los valores:**

- `resolucion_inmediata`:  
  La intención busca que la pieza entregue rápidamente su cumplimiento,
  aclaración o remate principal, sin depender de continuidad fuerte posterior.

- `resolucion_progresiva`:  
  La intención busca que la resolución se construya por etapas dentro de la
  misma realización, ganando densidad o claridad a medida que avanza.

- `resolucion_diferida`:  
  La intención busca dejar una expectativa activa cuya resolución principal no se
  entrega de inmediato en el mismo tramo inicial de la realización.

- `resolucion_parcial`:  
  La intención busca resolver solo una parte del recorrido abierto, dejando
  elementos todavía pendientes o desplazados.

- `resolucion_abierta_a_continuidad`:  
  La intención busca que la resolución completa no quede cerrada en una sola
  pieza, sino que abra paso a continuidad, serie o trayecto posterior.

**Restricciones:**

- Debe ser coherente con `horizonte_temporal` y `alcance_de_realizacion`.
- No debe describir la técnica concreta mediante la cual se posterga, distribuye
  o entrega la resolución; eso pertenece al protocolo.
- No debe confundirse con la estructura formal del codominio.

---

## 5. Restricciones globales del modelo

Para que una instancia de intención sea válida, debe cumplir al menos las
siguientes restricciones:

1. debe tener valores obligatorios en:
   - `formulacion_canonica`
   - `funcion_dominante`
   - `efecto_buscado`
   - `accion_esperada`
   - `nivel_de_especificidad`
   - `alcance_de_realizacion`
   - `prioridad_de_intencion`
   - `publico_objetivo_inmediato`
   - `regimen_de_activacion_atencional`
   - `horizonte_temporal`

2. la `formulacion_canonica` debe ser coherente con:
   - `funcion_dominante`
   - `nivel_de_especificidad`
   - `alcance_de_realizacion`

## 6. Criterio de completitud

Una instancia de intención puede considerarse suficientemente completa cuando:

- fija con claridad para qué debe realizarse el caso;
- distingue la función dominante de la acción esperada;
- explicita el efecto buscado;
- declara el grado de especificidad de la intención;
- fija invariantes intencionales;
- y explicita una condición de éxito reconocible.

---

## 7. Criterio de exclusión

No pertenecen al modelo base de la intención, aunque puedan relacionarse con él:

- estructura detallada del codominio;
- longitud exacta de la salida;
- tamaño de párrafos;
- número de escenas;
- número de slides;
- estructura técnica del guion;
- mejores prácticas de plataforma;
- reglas de segmentación material;
- instrucciones protocolarias de transformación.

Esos elementos pertenecen a:

- la descripción del codominio,
- el protocolo,
- o la validación de salida,
  pero no al modelo base de la intención.

---

## 8. Fórmula condensada

La intención, como unidad modelada, es una configuración estructural que fija
para qué debe realizarse una instancia contextual, bajo qué función dominante,
con qué efecto buscado, con qué acción esperada, con qué grado de especificidad,
con qué invariantes y bajo qué condición de éxito.

---

## 9. Instancia mínima válida

Una instancia mínima válida de este modelo debe poder responder, al menos, a las
siguientes preguntas:

- ¿qué se quiere realizar?
- ¿qué función domina esa realización?
- ¿qué efecto se busca provocar?
- ¿qué acción se espera?
- ¿qué tan específica es la intención?
- ¿qué no puede perderse?
- ¿qué cuenta como éxito?

Si una formulación de intención no puede responder estructuralmente a esas
preguntas, todavía no constituye una instancia suficientemente fuerte del modelo
base de la intención.
