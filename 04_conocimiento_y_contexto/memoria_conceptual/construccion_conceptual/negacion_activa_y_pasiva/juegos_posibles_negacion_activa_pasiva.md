https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a0b6963-832c-83e8-8431-5abee2a598ba

# Juegos posibles derivados del texto sobre negación activa y negación pasiva

**Documento:** `juegos_posibles_negacion_activa_pasiva.md`  
**Texto base:** procesamiento estructural sobre la negación activa y pasiva en Elster/Sinoviev  
**Función:** enumerar y esbozar posibles juegos derivados de las estructuras dinámicas del texto.  
**Alcance:** este documento no desarrolla los juegos en versión completa. Sólo identifica candidatos, describe su núcleo y modela sus componentes mínimos.

---

## 0. Principio de lectura

El texto sobre negación activa y pasiva no parece producir un único juego total. Más bien contiene varias estructuras dinámicas que pueden convertirse en juegos parciales.

La regla metodológica es:

```txt
No buscar un único juego forzado.
Detectar estructuras dinámicas locales.
Para cada estructura, preguntar:
  - ¿hay jugadores o posiciones funcionales?
  - ¿hay acciones?
  - ¿hay estados que cambian?
  - ¿hay paradoja, recompensa, castigo o inversión de efecto?
  - ¿hay ejemplos ancla?
```

La forma general de estos juegos es:

```txt
Jugador / agente intenta producir un estado
  → elige una acción
    → la acción modifica el estado del sistema
      → a veces produce el resultado contrario al buscado
```

La estructura común más importante es:

```txt
negación activa
  intenta producir negación pasiva
    pero al intervenir activamente
      conserva, intensifica o vuelve visible aquello que quería ausentar
```

---

# I. Juegos principales

---

## 1. Juego de la ausencia imposible

### Descripción

Modela el intento de producir activamente una ausencia.

El problema central es que ciertos estados sólo existen como **negación pasiva**: olvido, indiferencia, espontaneidad, gratitud auténtica, adoración auténtica, ausencia de pensamiento prohibido. Cuando se intenta producirlos por mandato, vigilancia o prohibición, se convierten en negación activa y fracasan.

### Núcleo

```txt
Jugador 1 quiere que p esté ausente.
Pero al intervenir activamente contra p,
vuelve p presente.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    rol: "quien intenta producir una ausencia"
    ejemplos:
      - sujeto_que_quiere_olvidar
      - autoridad_que_prohibe_pensar
      - tirano_que_exige_adoracion
      - regimen_que_quiere_borrar_un_nombre

  jugador_2:
    rol: "quien debe alcanzar el estado pasivo"
    ejemplos:
      - sujeto_que_debe_olvidar
      - ciudadano
      - subordinado
      - creyente
      - opositor
```

### Variables

```yaml
variables:
  P_t:
    nombre: "presencia del objeto negado"
    rango: [0, 100]

  A_t:
    nombre: "autenticidad del estado pasivo"
    rango: [0, 100]
```

### Acciones básicas

```yaml
acciones_jugador_1:
  prohibicion_directa:
    efecto: "P_t sube; A_t baja"

  mandato_directo:
    efecto: "P_t sube; A_t baja"

  vigilancia:
    efecto: "P_t sube; A_t baja"

  silencio_real:
    efecto: "P_t baja lentamente; A_t puede subir"

  produccion_indirecta_de_condiciones:
    efecto: "P_t puede bajar; A_t puede subir"
```

### Regla del juego

```txt
Si Jugador 1 usa negación activa para producir negación pasiva,
el objeto negado se vuelve más presente y la autenticidad del estado buscado disminuye.
```

### Casos ancla

```txt
querer olvidar
no pensar en cosas prohibidas
sé espontáneo
no seas sumiso
adórenme
gratitud exigida
desestalinización
```

---

## 2. Juego del mandato contradictorio

### Descripción

Este juego es una variante más específica del anterior. Se enfoca en órdenes cuyo cumplimiento destruye aquello que la orden busca producir.

### Núcleo

```txt
Jugador 1 ordena a Jugador 2 producir un estado.
Pero ese estado sólo puede existir si no surge de obediencia directa.
Si Jugador 2 obedece, fracasa.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    rol: "emisor del mandato"

  jugador_2:
    rol: "receptor que intenta obedecer"
```

### Variables

```yaml
variables:
  O_t:
    nombre: "obediencia externa"
    rango: [0, 100]

  E_t:
    nombre: "existencia auténtica del estado ordenado"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_jugador_1:
  ordenar_estado_pasivo:
    ejemplos:
      - "sé espontáneo"
      - "no seas tan sumiso"
      - "siente gratitud"
      - "adórame auténticamente"

acciones_jugador_2:
  obedecer_literalmente:
    efecto: "O_t sube; E_t baja"

  resistir:
    efecto: "O_t baja; puede preservar algo de E_t"

  responder_de_forma_no_deliberada:
    efecto: "E_t puede subir, pero no como cumplimiento directo"
```

### Regla del juego

```txt
Cuanto más intenta Jugador 2 obedecer el mandato contradictorio,
menos auténticamente produce el estado que se le exige.
```

### Casos ancla

```txt
“Sé espontáneo”
“No seas tan sumiso”
“Adórenme”
“Sientan gratitud”
```

---

## 3. Juego del pensamiento prohibido

### Descripción

Este juego modela el caso en el que prohibir pensar en algo obliga a representarlo mentalmente para evitarlo.

### Núcleo

```txt
Para evitar pensar en p,
Jugador 2 debe vigilar si p aparece.
Pero vigilar p lo vuelve presente.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    rol: "autoridad que prohíbe pensar"

  jugador_2:
    rol: "sujeto que intenta no pensar"
```

### Variables

```yaml
variables:
  P_t:
    nombre: "presencia mental del contenido prohibido"
    rango: [0, 100]

  V_t:
    nombre: "vigilancia contra el pensamiento"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_jugador_1:
  prohibir_pensamiento:
    efecto: "V_t sube"

acciones_jugador_2:
  vigilar_para_no_pensar:
    efecto: "P_t sube"

  no_focalizar:
    efecto: "P_t puede bajar lentamente"
```

### Regla del juego

```txt
La vigilancia contra el pensamiento prohibido conserva presente el contenido prohibido.
```

### Casos ancla

```txt
“Ten presente que no se debe ni pensar en estas cosas prohibidas”
querer olvidar
contemplar aquello que se intenta rechazar
```

---

## 4. Juego del olvido intrapsíquico

### Descripción

Este juego no tiene necesariamente dos jugadores externos. Puede modelarse como un juego interno entre el sujeto que quiere olvidar y el contenido que se conserva por el acto de querer olvidarlo.

### Núcleo

```txt
El sujeto quiere olvidar p.
Pero querer olvidar p exige mantener p como objeto de atención.
```

### Jugadores funcionales

```yaml
jugadores_funcionales:
  yo_volitivo:
    rol: "quien quiere olvidar"

  contenido_recordado:
    rol: "objeto que permanece presente al ser combatido"
```

### Variables

```yaml
variables:
  R_t:
    nombre: "recordación de p"
    rango: [0, 100]

  I_t:
    nombre: "intensidad de la voluntad de olvidar"
    rango: [0, 100]
```

### Regla

```txt
Si I_t sube por vía directa,
R_t también tiende a subir.
```

### Casos ancla

```txt
Emily Dickinson: el corazón no puede olvidar sin contemplar
voluntad de olvidar
imposibilidad de producir olvido por decisión directa
```

---

# II. Juegos políticos y de oposición

---

## 5. Juego régimen-oposición

### Descripción

Este juego modela el dilema del régimen frente a la oposición. Si la condena, la reconoce y la difunde; si la calla, puede parecer que la oposición tiene razón; si finge indiferencia, puede revelar intención activa.

### Núcleo

```txt
El régimen quiere negar la oposición.
Pero cada forma de negarla puede fortalecerla, reconocerla o revelar miedo.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "régimen"
    objetivo: "neutralizar oposición"

  jugador_2:
    nombre: "oposición"
    objetivo: "existir, ser reconocida o ganar visibilidad"
```

### Variables

```yaml
variables:
  V_t:
    nombre: "visibilidad de la oposición"
    rango: [0, 100]

  C_t:
    nombre: "control del régimen"
    rango: [0, 100]

  L_t:
    nombre: "legitimidad percibida del régimen"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_regimen:
  condenar:
    efecto: "V_t sube; C_t puede subir; L_t puede bajar"

  callar:
    efecto: "V_t puede bajar; pero L_t puede bajar si el silencio parece admisión"

  indiferencia_activa:
    efecto: "V_t baja parcialmente; pero revela intención si es sistemática"

  prohibir:
    efecto: "V_t sube como objeto prohibido; C_t sube a corto plazo"

acciones_oposicion:
  provocar_condena:
    efecto: "busca subir V_t"

  producir_antitexto:
    efecto: "fuerza respuesta del régimen"

  buscar_martirio_simbolico:
    efecto: "convierte castigo en visibilidad"
```

### Regla del juego

```txt
La oposición puede beneficiarse de ser condenada,
porque la condena estatal la convierte en objeto reconocido.
```

### Casos ancla

```txt
régimen ante oposición
oposición que pide ser condenada
antitexto
indiferencia activa
```

---

## 6. Juego de la indiferencia activa

### Descripción

Modela una situación en la que un agente intenta parecer indiferente, pero su silencio sistemático delata que la indiferencia es intencional.

### Núcleo

```txt
No mencionar algo puede parecer indiferencia.
Pero no mencionarlo de forma demasiado sistemática revela que se lo está evitando activamente.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    rol: "agente que quiere parecer indiferente"

  jugador_2:
    rol: "observador que interpreta el silencio"
```

### Variables

```yaml
variables:
  I_t:
    nombre: "apariencia de indiferencia pasiva"
    rango: [0, 100]

  S_t:
    nombre: "sospecha de intención activa"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_jugador_1:
  silencio_ocasional:
    efecto: "I_t sube"

  silencio_sistematico:
    efecto: "S_t sube"

  condena_directa:
    efecto: "I_t baja; reconoce importancia del objeto"
```

### Regla

```txt
La indiferencia fingida fracasa cuando su regularidad permite inferir intención.
```

### Casos ancla

```txt
silencio intencional del régimen
indiferencia activa
no mencionar algo de forma demasiado sistemática
```

---

## 7. Juego de la desestalinización fallida

### Descripción

Este juego modela la paradoja de intentar borrar una figura histórica convirtiéndola en objeto de prohibición.

### Núcleo

```txt
El régimen quiere borrar a Stalin.
Pero al prohibir citarlo,
lo conserva como objeto prohibido.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "régimen desestalinizador"
    objetivo: "reducir presencia de Stalin"

  jugador_2:
    nombre: "campo social / memoria colectiva"
    rol: "espacio donde Stalin puede seguir presente"
```

### Variables

```yaml
variables:
  P_t:
    nombre: "presencia simbólica de Stalin"
    rango: [0, 100]

  C_t:
    nombre: "control discursivo del régimen"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_regimen:
  no_nombrar:
    efecto: "P_t puede bajar"

  prohibir_citar:
    efecto: "P_t sube como objeto prohibido"

  criticar_excesivamente:
    efecto: "P_t sube por centralidad negativa"
```

### Regla

```txt
Una figura puede seguir triunfando en su derrota si la prohibición la conserva como centro negativo.
```

### Casos ancla

```txt
no nombrar a Stalin
prohibir citar a Stalin
Stalin sigue triunfando en su derrota
```

---

## 8. Juego de reforma violenta

### Descripción

Este juego modela la incapacidad de un régimen para abandonar un repertorio de acción porque intenta reformarse usando las mismas herramientas que quiere superar.

### Núcleo

```txt
El régimen quiere dejar de ser violento.
Pero sólo sabe producir cambio mediante violencia.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "reformador interno"
    objetivo: "reducir violencia del sistema"

  jugador_2:
    nombre: "aparato institucional"
    rol: "sistema que sólo opera mediante violencia"
```

### Variables

```yaml
variables:
  V_t:
    nombre: "nivel de violencia institucional"
    rango: [0, 100]

  R_t:
    nombre: "avance real de reforma"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_reformador:
  reforma_por_coaccion:
    efecto: "V_t se mantiene o sube; R_t es inestable"

  reforma_por_desactivacion_gradual:
    efecto: "V_t puede bajar; R_t sube lentamente"

  purga_para_acabar_con_purgas:
    efecto: "reproduce el mecanismo que intenta eliminar"
```

### Regla

```txt
Un sistema no supera su lógica si intenta negarla usando exactamente esa misma lógica.
```

### Casos ancla

```txt
Kruschov
violencia para dejar la violencia
incapacidad reformista
```

---

# III. Juegos institucionales

---

## 9. Juego de denuncia contra información

### Descripción

Modela una institución que necesita información verdadera, pero cuyo mecanismo de control convierte la información en denuncia, sospecha o secreto.

### Núcleo

```txt
El sistema quiere saber.
Pero su forma de saber destruye la calidad de lo sabido.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "aparato de control"
    objetivo: "obtener información útil"

  jugador_2:
    nombre: "miembros de la sociedad / informantes"
    rol: "producen información bajo incentivos de denuncia"
```

### Variables

```yaml
variables:
  Q_t:
    nombre: "calidad de la información"
    rango: [0, 100]

  D_t:
    nombre: "nivel de denuncia"
    rango: [0, 100]

  C_t:
    nombre: "control aparente"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_aparato:
  incentivar_denuncia:
    efecto: "D_t sube; Q_t baja o se distorsiona"

  investigar_causalmente:
    efecto: "Q_t puede subir; C_t menos espectacular"

  premiar_sospecha:
    efecto: "D_t sube; confianza social baja"
```

### Regla

```txt
Cuando la información se obtiene bajo lógica de denuncia,
el sistema acumula señales de control, pero pierde conocimiento confiable.
```

### Casos ancla

```txt
denuncia como fenómeno constitutivo
información transformada en denuncia
totalitarismo no omnisciente
```

---

## 10. Juego de solución que busca problema

### Descripción

Modela instituciones que no buscan soluciones para problemas reales, sino problemas que encajen con las soluciones que ya tienen disponibles o deseadas.

### Núcleo

```txt
La institución no parte del problema.
Parte de una solución predeterminada y fuerza la realidad para que encaje.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "institución"
    objetivo: "aplicar solución disponible o deseada"

  jugador_2:
    nombre: "realidad / problema social"
    rol: "debe ser deformado para corresponder a la solución"
```

### Variables

```yaml
variables:
  A_t:
    nombre: "ajuste artificial entre solución y problema"
    rango: [0, 100]

  E_t:
    nombre: "eficacia real"
    rango: [0, 100]

  I_t:
    nombre: "indicador burocrático"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_institucion:
  buscar_problema_para_solucion:
    efecto: "A_t sube; E_t puede bajar"

  manipular_indicador:
    efecto: "I_t sube; E_t baja"

  analizar_problema_real:
    efecto: "E_t puede subir; I_t no necesariamente sube"
```

### Regla

```txt
Cuando la solución precede al problema,
la institución optimiza indicadores, no realidad.
```

### Casos ancla

```txt
solución busca problema
indicadores policiales
delitos esclarecidos
suprimir delincuentes para mejorar indicadores
```

---

## 11. Juego de culpabilización burocrática

### Descripción

Modela una institución que sustituye la pregunta por la causa por la pregunta por el culpable.

### Núcleo

```txt
El sistema no pregunta “¿por qué ocurrió?”.
Pregunta “¿a quién culpar?”.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "centro de poder / burocracia"
    objetivo: "preservar su propia inocencia estructural"

  jugador_2:
    nombre: "funcionario, grupo o enemigo externo"
    rol: "recibe la culpa del fracaso"
```

### Variables

```yaml
variables:
  C_t:
    nombre: "culpa desplazada"
    rango: [0, 100]

  K_t:
    nombre: "conocimiento causal real"
    rango: [0, 100]

  P_t:
    nombre: "protección del centro de poder"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_burocracia:
  buscar_culpable:
    efecto: "C_t sube; K_t baja; P_t sube"

  analizar_causas:
    efecto: "K_t sube; P_t puede bajar"

  atribuir_exito_al_centro:
    efecto: "P_t sube"
```

### Regla

```txt
La culpabilización protege al centro a corto plazo,
pero destruye aprendizaje institucional a largo plazo.
```

### Casos ancla

```txt
causalidad sustituida por culpa
todo fracaso tiene responsable externo
todo éxito pertenece a la conducción
```

---

## 12. Juego del poder negativamente todopoderoso

### Descripción

Modela un poder que puede destruir, bloquear y prohibir, pero no puede crear positivamente.

### Núcleo

```txt
El poder puede decir no a casi todo.
Pero no puede producir positivamente lo que necesita.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "poder institucional"
    objetivo: "controlar sociedad"

  jugador_2:
    nombre: "realidad social"
    rol: "campo que requiere creación, cooperación y complejidad"
```

### Variables

```yaml
variables:
  N_t:
    nombre: "capacidad negativa de bloqueo"
    rango: [0, 100]

  C_t:
    nombre: "capacidad creadora positiva"
    rango: [0, 100]

  E_t:
    nombre: "efectividad social real"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_poder:
  prohibir:
    efecto: "N_t sube; C_t no sube"

  destruir:
    efecto: "N_t sube; E_t baja"

  crear_condiciones:
    efecto: "C_t puede subir, pero requiere perder control total"
```

### Regla

```txt
Un poder puramente negativo puede dominar,
pero no puede construir lo que la sociedad necesita para funcionar.
```

### Casos ancla

```txt
poder negativamente todopoderoso
positivamente impotente
puede bloquear pero no construir
```

---

# IV. Juegos sociales y de trayectoria

---

## 13. Juego del carrerismo mediocre

### Descripción

Modela una sociedad donde asciende quien mejor se adapta a la mediocridad funcional, no quien posee excelencia.

### Núcleo

```txt
En Ibansk, el éxito no siempre premia al más talentoso.
Puede premiar al extraordinariamente mediocre.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "aspirante a carrera"
    objetivo: "ascender"

  jugador_2:
    nombre: "sistema social de Ibansk"
    rol: "selecciona rasgos funcionales al ascenso"
```

### Variables

```yaml
variables:
  T_t:
    nombre: "talento visible"
    rango: [0, 100]

  M_t:
    nombre: "mediocridad funcional"
    rango: [0, 100]

  A_t:
    nombre: "probabilidad de ascenso"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_aspirante:
  mostrar_talento:
    efecto: "T_t sube; A_t puede bajar si el sistema castiga excepcionalidad"

  adaptarse_mediocremente:
    efecto: "M_t sube; A_t sube"

  cinismo_talentoso:
    efecto: "puede funcionar, pero sigue siendo demasiado visible"
```

### Regla

```txt
El ascenso máximo puede pertenecer a quien posee menos talento para destacar,
pero más ajuste al ambiente mediocre.
```

### Casos ancla

```txt
Agafonow
carrerista talentoso
carrerista extraordinariamente mediocre
rey de las ratas, no león
```

---

## 14. Juego de la personalidad negativa

### Descripción

Modela la formación de un sujeto que no se define por una oposición activa al hombre racional y moral, sino por ausencia pasiva de cualidades fuertes.

### Núcleo

```txt
El sujeto no es un antihombre demoníaco.
Es una normalidad banal, amoral y pasiva.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "sistema de Ibansk"
    objetivo: "producir sujetos funcionales"

  jugador_2:
    nombre: "individuo"
    rol: "se forma bajo condiciones de negación pasiva"
```

### Variables

```yaml
variables:
  Q_t:
    nombre: "cualidades positivas fuertes"
    rango: [0, 100]

  N_t:
    nombre: "normalidad pasiva"
    rango: [0, 100]

  F_t:
    nombre: "funcionalidad social dentro de Ibansk"
    rango: [0, 100]
```

### Acciones del sistema

```yaml
acciones_sistema:
  eliminar_excepcionalidad:
    efecto: "Q_t baja; N_t sube"

  premiar_adaptacion:
    efecto: "F_t sube para sujetos pasivos"

  no_exigir_virtud:
    efecto: "normalidad_amoral se estabiliza"
```

### Regla

```txt
La forma más desarrollada del hombre de Ibansk no es oposición activa al bien,
sino ausencia pasiva de cualidades notables.
```

### Casos ancla

```txt
personalidad negativa
hombre de Ibansk
normalidad amoral
Agafonow
```

---

## 15. Juego de antieducación

### Descripción

Modela una formación social que no produce directamente el antihombre, sino una mediocridad pasiva mediante antieducación activa.

### Núcleo

```txt
La antieducación actúa activamente,
pero produce negación pasiva: mediocridad, grosería espontánea y ausencia de autodominio.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "sistema antieducativo"
    objetivo: "producir sujetos adaptados a Ibansk"

  jugador_2:
    nombre: "sujeto en formación"
    rol: "recibe antieducación"
```

### Variables

```yaml
variables:
  A_t:
    nombre: "autodominio civilizador"
    rango: [0, 100]

  M_t:
    nombre: "mediocridad pasiva"
    rango: [0, 100]

  G_t:
    nombre: "grosería espontánea"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_sistema:
  destruir_autodominio:
    efecto: "A_t baja; M_t sube"

  denunciar_cortesia_como_falsedad:
    efecto: "G_t sube"

  producir_ausencia_de_cualidades:
    efecto: "M_t sube"
```

### Regla

```txt
Una acción formativa activa puede producir una ausencia pasiva de cualidades.
```

### Casos ancla

```txt
antieducación ibanskiana
antieducación no produce antihombre
produce mediocridad pasiva
denuncia de la cortesía como falsedad
```

---

# V. Juegos lógico-jurídicos

---

## 16. Juego de no obligación convertida en prohibición

### Descripción

Modela una perversión normativa: confundir “no estás obligado a hacer p” con “tienes prohibido hacer p”.

### Núcleo

```txt
El sistema convierte la ausencia de obligación en prohibición.
La libertad negativa se recodifica como delito.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "autoridad normativa"
    objetivo: "conservar monopolio de iniciativa"

  jugador_2:
    nombre: "ciudadano"
    objetivo: "actuar voluntariamente dentro de una zona no obligatoria"
```

### Variables

```yaml
variables:
  L_t:
    nombre: "espacio de libertad negativa"
    rango: [0, 100]

  P_t:
    nombre: "nivel de prohibición"
    rango: [0, 100]

  I_t:
    nombre: "iniciativa propia del ciudadano"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_ciudadano:
  no_hacer_lo_no_obligatorio:
    efecto: "no amenaza al sistema"

  hacer_voluntariamente_lo_no_obligatorio:
    efecto: "la autoridad lo puede leer como usurpación"

acciones_autoridad:
  recodificar_como_prohibido:
    efecto: "L_t baja; P_t sube"
```

### Regla

```txt
Cuando el poder no tolera iniciativa propia,
lo no obligatorio se vuelve prohibido si alguien lo elige voluntariamente.
```

### Casos ancla

```txt
confusión no obligación / prohibición
emigración como delito
patriota arrestado por ofrecerse voluntariamente
espontaneidad política recodificada como transgresión
```

---

## 17. Juego del derecho-antitexto

### Descripción

Modela la situación en la que un código jurídico que define antitextos abre un espacio de oposición o regresión interpretativa.

### Núcleo

```txt
Todo código que clasifica textos como antitextos permite producir un nuevo texto sobre ese texto.
Eso abre una regresión y un espacio posible de oposición.
```

### Jugadores

```yaml
jugadores:
  jugador_1:
    nombre: "fiscal / régimen jurídico"
    objetivo: "clasificar y condenar antitexto"

  jugador_2:
    nombre: "autor / opositor / lector estratégico"
    objetivo: "producir texto o metatexto que explote la regla"
```

### Variables

```yaml
variables:
  O_t:
    nombre: "espacio de oposición formal"
    rango: [0, 100]

  R_t:
    nombre: "regresión interpretativa"
    rango: [0, 100]

  C_t:
    nombre: "capacidad de cierre jurídico"
    rango: [0, 100]
```

### Acciones

```yaml
acciones_regimen:
  declarar_antitexto:
    efecto: "C_t sube a corto plazo; R_t puede subir"

acciones_opositor:
  producir_metatexto:
    efecto: "R_t sube; O_t puede subir"

  citar_para_acusar:
    efecto: "puede repetir el contenido condenado"
```

### Regla

```txt
La formalización jurídica de la oposición puede abrir un espacio para reproducirla como objeto legal, comentario o metatexto.
```

### Casos ancla

```txt
antitexto
fiscal que repite el texto al acusarlo
regressio
oposición formal
```

---

## 18. Juego de la negación de la negación

### Descripción

Este juego es más abstracto. Modela trayectorias donde negar una negación no produce superación dialéctica, sino retorno, repetición o nueva forma de esclavitud.

### Núcleo

```txt
La negación de la negación no siempre supera.
Puede devolver al punto de partida bajo otra forma.
```

### Jugadores funcionales

```yaml
jugadores_funcionales:
  proceso_historico:
    rol: "serie de transformaciones"

  sujeto_social:
    rol: "quien experimenta la transformación como liberación o nueva dominación"
```

### Variables

```yaml
variables:
  L_t:
    nombre: "liberación real"
    rango: [0, 100]

  D_t:
    nombre: "dominación bajo nueva forma"
    rango: [0, 100]

  R_t:
    nombre: "retorno estructural"
    rango: [0, 100]
```

### Acciones / fases

```yaml
fases:
  estado_inicial:
    descripcion: "primera forma de dominación"

  primera_negacion:
    descripcion: "se niega la dominación inicial"

  segunda_negacion:
    descripcion: "se niega la negación anterior"
    riesgo: "retorno lógico o nueva esclavitud"
```

### Regla

```txt
La segunda negación debe evaluarse estructuralmente:
puede liberar, pero también puede restaurar o intensificar lo negado.
```

### Casos ancla

```txt
negación de la negación lógica
tercera esclavitud
retorno histórico
```

---

# VI. Matriz comparativa rápida

| Juego                       | Tipo de dinámica                      | Jugadores claros | Variables claras | Viabilidad como juego |
| --------------------------- | ------------------------------------- | ---------------: | ---------------: | --------------------- |
| Ausencia imposible          | paradoja activo/pasivo                |            media |             alta | muy alta              |
| Mandato contradictorio      | obediencia que fracasa                |             alta |             alta | muy alta              |
| Pensamiento prohibido       | vigilancia que activa objeto          |            media |             alta | alta                  |
| Olvido intrapsíquico        | juego interno                         |       baja/media |             alta | media                 |
| Régimen-oposición           | estrategia política                   |             alta |             alta | muy alta              |
| Indiferencia activa         | silencio que revela intención         |             alta |            media | alta                  |
| Desestalinización fallida   | borrar conservando como prohibido     |            media |             alta | alta                  |
| Reforma violenta            | cambio con medios contradictorios     |            media |            media | media/alta            |
| Denuncia contra información | control que degrada información       |             alta |             alta | alta                  |
| Solución busca problema     | institución deforma realidad          |            media |             alta | alta                  |
| Culpabilización burocrática | culpa sustituye causalidad            |             alta |             alta | alta                  |
| Poder negativo              | bloqueo sin creación                  |            media |            media | media                 |
| Carrerismo mediocre         | ascenso por adaptación mediocre       |             alta |             alta | alta                  |
| Personalidad negativa       | formación de sujeto pasivo            |            media |            media | media                 |
| Antieducación               | acción activa produce ausencia pasiva |             alta |             alta | alta                  |
| No obligación/prohibición   | libertad recodificada como delito     |             alta |             alta | alta                  |
| Derecho-antitexto           | norma abre regresión                  |             alta |             alta | alta                  |
| Negación de la negación     | trayectoria histórica abstracta       |       baja/media |            media | media                 |

---

# VII. Priorización recomendada

Para desarrollo posterior, los juegos más prometedores son:

```txt
1. Juego de la ausencia imposible
2. Juego del mandato contradictorio
3. Juego régimen-oposición
4. Juego de la indiferencia activa
5. Juego de la desestalinización fallida
6. Juego de denuncia contra información
7. Juego de solución que busca problema
8. Juego de culpabilización burocrática
9. Juego del carrerismo mediocre
10. Juego de no obligación convertida en prohibición
```

Los demás pueden desarrollarse como variantes, juegos secundarios o submodelos conceptuales.

---

# VIII. Fórmula final

```txt
El texto no debe forzarse a un único juego.
Debe leerse como una colección de estructuras dinámicas:
  paradojas psicológicas,
  dilemas políticos,
  mecanismos institucionales,
  trayectorias sociales,
  y perversiones lógico-jurídicas.

Cada una puede producir un juego parcial.
```

La operación general será:

```txt
estructura_detectada_en_el_texto
  → relación dinámica
    → jugadores o posiciones funcionales
      → variables
        → acciones
          → regla/paradoja
            → posible juego
```
