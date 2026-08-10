# Documento de unificación — Sistema de Transferencia Estructural v2

## 0. Propósito del documento

Este documento presenta una formulación actualizada del **Sistema de Transferencia Estructural**.

La versión anterior del sistema estaba organizada alrededor de la secuencia:

```txt
modelo_base
  → instancia_contextual
    → adaptador / protocolo
      → codominio
        → manifestacion_codominial
```

Esa formulación sigue siendo útil como antecedente, pero debe actualizarse porque el concepto de `modelo_base` local ya no ocupa el lugar operativo central dentro de una realización específica.

En la arquitectura nueva, el sistema se organiza así:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial ∈ codominio
```

La corrección más importante es esta:

> La Instancia Contextual ya no se construye directamente desde un Modelo Base local, sino dentro del espacio habilitado por una Instancia Regional.

La Instancia Regional funciona como recorte referencial de un sistema mayor previamente construido. Selecciona dimensiones, campos, valores posibles y restricciones ya existentes, y los vuelve operables para una realización específica.

Este documento, por tanto, no sustituye los planteamientos particulares de cada componente. Su función es explicar cómo trabajan juntos dentro de la arquitectura migrada.

Los documentos especializados asociados son:

```txt
planteamiento-instancia-regional.md
planteamiento-instancia-contextual-v2.md
planteamiento-adaptador-v2.md
planteamiento-codominio-manifestacion-codominial-v2.md
```

---

## 1. Nombre del mecanismo

El nombre recomendado sigue siendo:

```txt
Sistema de Transferencia Estructural
```

Este nombre conserva tres ideas esenciales:

1. **Sistema**: no se trata de una pieza aislada, sino de una coordinación de componentes.
2. **Transferencia**: el objetivo es pasar una organización desde un plano interno hacia un plano externo.
3. **Estructural**: no se transfiere solo contenido superficial, sino organización, relaciones, restricciones, valores y forma.

También pueden usarse, según el contexto, nombres secundarios:

```txt
mecanismo_de_transferencia_estructural
arquitectura_de_transferencia_estructural
sistema_de_proyeccion_codominial
mecanismo_de_materializacion_estructural
arquitectura_de_proyeccion_interno_externo
```

Sin embargo, la forma canónica sugerida es:

```txt
Sistema de Transferencia Estructural
```

---

## 2. Definición general actualizada

Un **Sistema de Transferencia Estructural** es el conjunto operativo mediante el cual una estructura interna organizada es:

1. organizada en un sistema mayor de regiones;
2. materializada como conjunto de regiones, dimensiones, campos, valores y restricciones;
3. recortada para una realización mediante una Instancia Regional;
4. configurada para un caso mediante una Instancia Contextual;
5. proyectada hacia una forma de salida mediante un Adaptador o Protocolo;
6. validada por un Codominio;
7. y realizada como Manifestación Codominial.

La fórmula general es:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial ∈ codominio
```

O de forma más conceptual:

```txt
arquitectura interna distribuida
  → región habilitada
    → configuración contextual
      → proyección codominial
        → manifestación externa válida
```

El sistema permite que una estructura interna no salte directamente a una salida improvisada, sino que pase por una cadena de mediaciones explícitas.

---

## 3. Tesis central del sistema migrado

La tesis central de esta versión es:

> Una estructura interna no debe proyectarse directamente hacia una manifestación externa. Primero debe ser seleccionada regionalmente, luego configurada contextualmente, y finalmente proyectada hacia un codominio mediante un adaptador.

La versión anterior decía:

```txt
estructura interna
  → modelo_base
    → instancia_contextual
      → adaptador
        → manifestacion_codominial
```

La versión actualizada dice:

```txt
estructura interna / sistema mayor
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial ∈ codominio
```

La diferencia es decisiva.

Antes, el `modelo_base` local definía el espacio de posibilidades de una realización.

Ahora, el espacio de posibilidades vive en un sistema mayor. La realización específica no redefine ese espacio; lo selecciona mediante una Instancia Regional.

---

## 4. Problema que resuelve la migración

La arquitectura anterior podía producir una duplicación innecesaria.

Por ejemplo:

```txt
video-corto/
  modelos-base/
    mb-contenido-digital.md

carrusel/
  modelos-base/
    mb-carrusel.md

newsletter/
  modelos-base/
    mb-newsletter.md

clase/
  modelos-base/
    mb-clase.md
```

Cada realización podía tender a construir su propio modelo base local, repitiendo dimensiones, campos y valores que pertenecen a un sistema común.

La arquitectura nueva evita esa duplicación:

```txt
grafo_de_regiones/
  dimension_identidad_operativa_de_la_realizacion/
  dimension_orientacion_funcional_pragmatica/
  dimension_escala_temporal_y_resolucion_realizativa/
  dimension_dinamica_atencional_y_procesual/
  dimension_comparecencia_performativa/
  dimension_marco_de_materializacion/
  dimension_composicion_segmental_de_la_salida/
  dimension_recursos_complementarios_de_manifestacion/
  ...

realizaciones/
  video-corto/
    instancias-regionales/
      instancia-regional-video-corto-tiktok.md

  carrusel/
    instancias-regionales/
      instancia-regional-carrusel-instagram.md

  newsletter/
    instancias-regionales/
      instancia-regional-newsletter.md
```

El sistema mayor conserva las definiciones reutilizables.

Cada realización solo declara qué parte de ese sistema mayor necesita.

---

## 5. Componentes del sistema actualizado

La arquitectura migrada está compuesta por siete niveles funcionales.

```txt
1. modelo_base_de_regiones
2. grafo_de_regiones
3. instancia_regional
4. instancia_contextual
5. adaptador / protocolo
6. codominio
7. manifestacion_codominial
```

Cada nivel tiene una responsabilidad propia.

---

## 6. Modelo Base de Regiones

El **Modelo Base de Regiones** es el nivel conceptual que organiza la posibilidad de construir regiones reutilizables.

No debe confundirse con un modelo base local de una realización.

La diferencia es:

```txt
modelo_base_local:
  define posibilidades para una realización particular.

modelo_base_de_regiones:
  organiza el sistema mayor del cual muchas realizaciones pueden seleccionar regiones.
```

El Modelo Base de Regiones responde:

```txt
¿Qué tipo de sistema permite contener dimensiones, campos, valores,
restricciones y relaciones reutilizables para muchas realizaciones?
```

Su función no es producir instancias contextuales directamente.

Su función es sostener el sistema mayor desde el cual podrán construirse Instancias Regionales.

---

## 7. Grafo de Regiones

El **Grafo de Regiones** es la materialización organizada del sistema mayor.

Contiene:

- dimensiones;
- campos;
- campos internos;
- valores;
- definiciones;
- restricciones;
- relaciones de pertenencia;
- relaciones de compatibilidad;
- referencias externas;
- estructuras reutilizables.

El Grafo de Regiones responde:

```txt
¿Qué nodos, campos, valores y relaciones existen ya como material seleccionable?
```

Una Instancia Regional debe referirse al Grafo de Regiones por medio de ids canónicos.

Ejemplo:

```txt
dimension:
  grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion

campo:
  grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad

valor:
  grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-especifica-especifica
```

La regla es:

> La Instancia Regional no inventa estos ids. Los referencia.

---

## 8. Instancia Regional

La **Instancia Regional** es la pieza que reemplaza la función operativa del antiguo modelo base local.

Una Instancia Regional es un recorte referencial del Grafo de Regiones.

Su función es declarar:

- qué realización habilita;
- qué sistema mayor referencia;
- qué dimensiones quedan activas;
- qué campos quedan disponibles;
- qué valores posibles puede seleccionar una instancia contextual;
- qué valores quedan fijados regionalmente;
- qué restricciones aplican;
- qué adaptador o protocolo podrá recibir las futuras instancias contextuales.

La Instancia Regional responde:

```txt
¿Qué parte del sistema mayor queda habilitada para esta clase de realización?
```

Ejemplo:

```txt
instancia-regional-video-corto-tiktok:
  habilita dimensiones de identidad, orientación funcional,
  acoplamiento receptoral, dinámica atencional, construcción del caso,
  comparecencia performativa, marco de materialización,
  composición segmental y recursos complementarios.

  fija regionalmente:
    plataforma = tiktok
    clase_de_materializacion = guion_audiovisual_breve
    aplicacion_de_plataforma = video_tiktok
```

La Instancia Regional no configura un caso particular.

Configura el espacio disponible para casos futuros.

---

## 9. Instancia Contextual

La **Instancia Contextual** es una selección concreta de valores dentro del espacio habilitado por una Instancia Regional.

La Instancia Contextual responde:

```txt
Dentro de esta región habilitada,
¿qué valores toma este caso particular?
```

Ejemplo:

```yaml
instancia_contextual:
  instancia_regional_usada: instancia-regional-video-corto-tiktok

  dimension_orientacion_funcional_pragmatica:
    funcion_dominante:
      valor: enseñar
      id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-funcion_dominante-enseñar-enseñar

    efecto_buscado:
      dominante:
        valor: comprension_rapida
        id: grafo_de_regiones-grafo_dimension_orientacion_funcional_pragmatica-efecto_buscado-comprension_rapida-comprension_rapida
```

La Instancia Contextual no debe seleccionar campos que no estén habilitados por la Instancia Regional, salvo que se declare una extensión regional explícita.

La Instancia Contextual tampoco debe redefinir valores.

Debe seleccionar valores ya habilitados o declarar valores descriptivos en campos que permitan valor abierto/controlado.

---

## 10. Adaptador / Protocolo

El **Adaptador** o **Protocolo** es el mecanismo que transforma una Instancia Contextual validada en una Manifestación Codominial.

El Adaptador responde:

```txt
¿Cómo se transforma esta configuración contextual en una salida válida?
```

El Adaptador no debe recibir:

```txt
idea_en_crudo
grafo_de_regiones_completo
instancia_regional_como_si_fuera_caso
```

Debe recibir:

```txt
instancia_contextual_validada
```

La Instancia Regional habilita.

La Instancia Contextual configura.

El Adaptador proyecta.

```txt
instancia_regional
  → instancia_contextual
    → adaptador / protocolo
      → manifestacion_codominial
```

El Adaptador debe conocer el Codominio hacia el cual proyecta.

Un mismo conjunto de valores contextuales podría proyectarse hacia codominios distintos si existen adaptadores adecuados.

---

## 11. Codominio

El **Codominio** es el espacio formal de salidas válidas.

No es una salida concreta.

No es la instancia contextual.

No es el adaptador.

No es el tema expresado.

Es la familia estructural de manifestaciones posibles.

El Codominio responde:

```txt
¿Qué forma debe tener una salida para considerarse válida?
```

Un Codominio puede definir:

- tipo de objeto externo;
- unidades internas;
- capas de manifestación;
- relaciones internas;
- criterios de pertenencia;
- restricciones formales;
- condiciones de completitud;
- criterios de validación.

Ejemplo:

```txt
codominio_video_corto:
  tipo_de_objeto: guion_audiovisual_breve
  unidades: bloques
  capas: verbal, visual, escenica, auditiva
  relaciones: apertura, desarrollo, cierre, retención
  criterios: brevedad, claridad, ritmo, ejecutabilidad
```

El Codominio no se define por el tema.

Se define por la forma de salida.

---

## 12. Manifestación Codominial

La **Manifestación Codominial** es la salida concreta producida por un Adaptador y perteneciente a un Codominio.

La Manifestación Codominial responde:

```txt
¿Qué objeto externo aparece finalmente?
```

Ejemplos:

```txt
guion_de_video_corto
carrusel_de_laminas
newsletter
clase
landing
hilo
documento
prompt_operativo
pieza_visual
```

Una Manifestación Codominial debe conservar trazabilidad hacia:

```txt
instancia_regional
instancia_contextual
adaptador / protocolo
codominio
especificacion_codominial
```

Ejemplo:

```yaml
manifestacion_codominial:
  codominio_de_pertenencia: codominio_video_corto
  especificacion_codominial_usada: salida-esperada-video-corto
  instancia_regional_usada: instancia-regional-video-corto-tiktok
  instancia_contextual_de_origen: instancia-contextual-caso-x
  adaptador_usado: protocolo-videos-cortos
```

La manifestación puede ser evaluada preguntando:

```txt
¿pertenece realmente al codominio?
¿deriva de una instancia contextual válida?
¿esa instancia contextual fue construida dentro de una instancia regional válida?
¿el adaptador aplicó las reglas correctas?
¿la salida conserva trazabilidad?
```

---

## 13. Separación de planos

El sistema distingue dos planos principales.

## 13.1. Plano interno

El plano interno contiene estructuras que todavía no son salidas externas.

Ejemplos:

```txt
modelo_base_de_regiones
grafo_de_regiones
dimensiones
campos
valores
regiones seleccionables
instancias_regionales
instancias_contextuales
```

Estas estructuras organizan, habilitan o configuran.

No son todavía objetos finales.

## 13.2. Plano externo

El plano externo contiene manifestaciones ya producidas.

Ejemplos:

```txt
guion_de_video_corto
carrusel
newsletter
clase
landing
hilo
documento
interfaz
producto
```

Estas salidas ya tienen forma codominial.

## 13.3. Mediación

El Sistema de Transferencia Estructural media entre ambos planos:

```txt
plano_interno
  → seleccion regional
    → configuracion contextual
      → proyeccion codominial
        → plano_externo
```

La mediación evita que una estructura interna se convierta en salida por improvisación.

---

## 14. Principio de no sustitución entre componentes

Cada componente cumple una función propia.

El sistema falla cuando una pieza absorbe la responsabilidad de otra.

## 14.1. El Grafo de Regiones no sustituye a la Instancia Regional

El Grafo de Regiones contiene el sistema mayor.

La Instancia Regional selecciona una parte operable.

## 14.2. La Instancia Regional no sustituye a la Instancia Contextual

La Instancia Regional habilita posibilidades.

La Instancia Contextual selecciona valores concretos.

## 14.3. La Instancia Contextual no sustituye al Adaptador

La Instancia Contextual configura.

El Adaptador proyecta.

## 14.4. El Adaptador no sustituye al Codominio

El Adaptador transforma hacia una salida.

El Codominio define el espacio formal de validez de esa salida.

## 14.5. El Codominio no sustituye a la Manifestación Codominial

El Codominio define la familia de salida.

La Manifestación Codominial es un elemento concreto de esa familia.

## 14.6. La Manifestación Codominial no sustituye al sistema

La manifestación es el resultado visible.

No debe confundirse con la arquitectura que la produjo.

---

## 15. Fórmula actualizada del sistema

Podemos expresar el sistema con estas variables:

```txt
R = instancia_regional
I = instancia_contextual
A = adaptador / protocolo
C = codominio
Y = manifestacion_codominial
G = grafo_de_regiones
```

Entonces:

```txt
R ⊂ G
```

Es decir:

```txt
la Instancia Regional selecciona una parte operable del Grafo de Regiones
```

Luego:

```txt
I ∈ R
```

Es decir:

```txt
la Instancia Contextual pertenece al espacio habilitado por la Instancia Regional
```

Después:

```txt
A_C(I) → Y_C
```

Es decir:

```txt
un Adaptador orientado al Codominio C transforma la Instancia Contextual I
en una Manifestación Codominial Y perteneciente a C
```

La forma completa sería:

```txt
A_C(I_R) → Y_C
```

Donde:

- `I_R` es una Instancia Contextual construida dentro de la Instancia Regional `R`;
- `A_C` es un Adaptador orientado al Codominio `C`;
- `Y_C` es una Manifestación Codominial válida dentro de `C`.

Si se incluye el sistema mayor completo:

```txt
G
  → R
    → I_R
      → A_C
        → Y_C ∈ C
```

---

## 16. Estructura funcional del mecanismo

El mecanismo migrado tiene seis momentos funcionales.

## 16.1. Organización regional

El Modelo Base de Regiones y el Grafo de Regiones organizan el espacio mayor.

Aquí se definen o materializan:

- dimensiones;
- campos;
- valores;
- restricciones;
- relaciones;
- definiciones;
- referencias externas.

## 16.2. Selección regional

La Instancia Regional selecciona qué partes del Grafo de Regiones quedan habilitadas para una realización.

Aquí se decide:

- qué dimensiones entran;
- qué campos se habilitan;
- qué valores quedan disponibles;
- qué valores quedan fijados regionalmente;
- qué restricciones se activan.

## 16.3. Configuración contextual

La Instancia Contextual selecciona valores concretos para un caso particular.

Aquí se decide:

- qué función dominante tiene el caso;
- qué efecto busca;
- qué público o receptor se considera;
- qué construcción conceptual usa;
- qué dinámica atencional activa;
- qué estructura de salida se espera;
- qué recursos complementarios aparecen.

## 16.4. Proyección adaptativa

El Adaptador o Protocolo interpreta la Instancia Contextual y produce una salida.

Aquí se decide:

- qué parte de la salida corresponde a cada valor;
- cómo se resuelven tensiones;
- qué contribuciones se activan;
- qué estructura codominial debe seguirse;
- qué decisiones de composición deben justificarse.

## 16.5. Validación codominial

El Codominio evalúa si la salida pertenece a la familia formal esperada.

Aquí se decide:

- si la salida tiene las unidades requeridas;
- si respeta capas y relaciones internas;
- si cumple criterios de pertenencia;
- si es reconocible como salida válida del tipo esperado.

## 16.6. Manifestación

Finalmente aparece la Manifestación Codominial.

Aquí la estructura se vuelve objeto externo.

---

## 17. Patrón de uso general para una IA

Una IA que reciba este sistema debe actuar de la siguiente forma.

## 17.1. Identificar el Grafo de Regiones

Debe reconocer el sistema mayor desde el cual se tomarán dimensiones, campos y valores.

No debe asumir que falta construirlo si ya existe.

## 17.2. Identificar o construir la Instancia Regional

Debe revisar qué realización se quiere habilitar y qué nodos del sistema mayor quedan seleccionados.

Si la Instancia Regional ya existe, debe usarla.

Si no existe, debe construirla por referencia, no por redefinición.

## 17.3. Construir o leer la Instancia Contextual

Debe seleccionar valores concretos dentro de lo habilitado por la Instancia Regional.

No debe tomar valores fuera de la región sin declarar extensión.

## 17.4. Identificar el Adaptador o Protocolo

Debe reconocer qué mecanismo proyectará la instancia hacia la salida.

## 17.5. Identificar el Codominio

Debe revisar qué forma de salida se espera.

No debe producir una salida genérica.

## 17.6. Producir la Manifestación Codominial

Debe aplicar el Adaptador a la Instancia Contextual y producir una salida perteneciente al Codominio.

## 17.7. Conservar trazabilidad

Debe poder explicar:

```txt
qué Instancia Regional habilitó el espacio;
qué Instancia Contextual seleccionó valores;
qué Adaptador proyectó esos valores;
qué Codominio reguló la salida;
qué Manifestación apareció.
```

---

## 18. Patrón de validación

Una salida del sistema debe evaluarse con preguntas como:

```txt
¿La Instancia Regional referencia nodos existentes?
¿La Instancia Regional habilita campos suficientes para la realización?
¿La Instancia Contextual selecciona valores dentro de la región?
¿Los valores regionalmente fijados se respetan?
¿El Adaptador recibió una Instancia Contextual suficientemente determinada?
¿El Codominio está claro?
¿La Manifestación pertenece realmente al Codominio?
¿La salida conserva trazabilidad?
¿Se distingue entre región, contexto, adaptador, codominio y manifestación?
```

Si alguna respuesta es negativa, el sistema debe revisarse antes de considerar válida la salida.

---

## 19. Diferencia entre generación y transferencia estructural

Generar contenido puede significar simplemente producir una pieza.

Transferir estructura significa producir una pieza que conserva una relación controlada con una organización interna previa.

La diferencia puede representarse así:

```txt
generación simple:
  idea
    → pieza

transferencia estructural:
  grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador
          → manifestacion_codominial ∈ codominio
```

La segunda forma es más lenta al inicio, pero mucho más auditable, reutilizable y escalable.

El objetivo no es producir una salida que solo “suene bien”.

El objetivo es producir una salida que:

- derive de una región habilitada;
- esté configurada contextualmente;
- sea proyectada por un adaptador;
- pertenezca a un codominio;
- y conserve trazabilidad.

---

## 20. Ejemplo abstracto del sistema completo

Supongamos un Grafo de Regiones con tres dimensiones:

```txt
grafo_de_regiones:
  dimension_1:
    campo_1_1:
      valores_posibles:
        - valor_1_1_a
        - valor_1_1_b
        - valor_1_1_c

  dimension_2:
    campo_2_1:
      valores_posibles:
        - valor_2_1_a
        - valor_2_1_b

  dimension_3:
    campo_3_1:
      valores_posibles:
        - valor_3_1_a
        - valor_3_1_b
        - valor_3_1_c
```

Una Instancia Regional podría seleccionar:

```txt
instancia_regional_X:
  dimension_1:
    campo_1_1:
      valores_habilitados:
        - valor_1_1_a
        - valor_1_1_b

  dimension_3:
    campo_3_1:
      valores_habilitados:
        - valor_3_1_c
```

Una Instancia Contextual podría seleccionar:

```txt
instancia_contextual_X_01:
  instancia_regional_usada: instancia_regional_X

  dimension_1:
    campo_1_1: valor_1_1_b

  dimension_3:
    campo_3_1: valor_3_1_c
```

Un Adaptador podría proyectarla:

```txt
adaptador_Y:
  entrada: instancia_contextual_X_01
  codominio: codominio_Y
  salida: manifestacion_codominial_Y_01
```

La salida final pertenece al Codominio:

```txt
manifestacion_codominial_Y_01 ∈ codominio_Y
```

---

## 21. Ejemplo aplicado a contenido digital

Una arquitectura de contenido digital puede usar una Instancia Regional para video corto TikTok.

```txt
grafo_de_regiones
  → instancia-regional-video-corto-tiktok
```

Esa Instancia Regional puede habilitar dimensiones como:

```txt
dimension_identidad_operativa_de_la_realizacion
dimension_orientacion_funcional_pragmatica
dimension_acoplamiento_receptoral
dimension_escala_temporal_y_resolucion_realizativa
dimension_dinamica_atencional_y_procesual
dimension_construccion_del_caso
dimension_comparecencia_performativa
dimension_marco_de_materializacion
dimension_composicion_segmental_de_la_salida
dimension_recursos_complementarios_de_manifestacion
```

Luego una Instancia Contextual de caso puede seleccionar valores concretos:

```txt
instancia_contextual_caso_x:
  instancia_regional_usada: instancia-regional-video-corto-tiktok

  funcion_dominante: enseñar
  efecto_buscado: comprension_rapida
  accion_esperada: ver_hasta_el_final
  configuracion_discursiva: explicativa
  plataforma: tiktok
  aplicacion_de_plataforma: video_tiktok
```

El protocolo de video corto proyecta esa instancia:

```txt
protocolo-videos-cortos(
  instancia_contextual_caso_x
)
→ manifestacion_codominial_video_corto
```

La manifestación resultante pertenece al codominio:

```txt
manifestacion_codominial_video_corto ∈ codominio_guion_audiovisual_breve
```

---

## 22. Importancia para la ACCD

Dentro de la ACCD, este sistema es fundamental porque evita que la creación de contenido sea entendida como generación textual directa.

La ACCD no busca producir piezas aisladas.

Busca producir manifestaciones a partir de estructuras.

La cadena actualizada permite que la ACCD opere como arquitectura:

```txt
grafo_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador / protocolo
        → manifestacion_codominial ∈ codominio
```

Esto permite:

- reutilizar dimensiones;
- crear múltiples realizaciones sin duplicar modelos base locales;
- mantener trazabilidad;
- validar configuraciones;
- comparar manifestaciones;
- crear adaptadores distintos para codominios distintos;
- y mantener una arquitectura común.

Sin este mecanismo, la ACCD correría el riesgo de convertirse en un conjunto de prompts o plantillas aisladas.

Con este mecanismo, la ACCD puede operar como un sistema de producción estructural.

---

## 23. Relación con artefactos y fotografías cognitivas

Los artefactos permiten capturar y transportar arquitecturas distribuidas.

El Sistema de Transferencia Estructural puede ser descrito, documentado y evolucionado dentro de un artefacto.

En ese contexto:

```txt
artefacto:
  conserva documentos, definiciones, instancias, protocolos y ejemplos

fotografia_cognitiva:
  permite que una IA vea la arquitectura distribuida como unidad

sistema_de_transferencia_estructural:
  explica cómo las estructuras internas se convierten en manifestaciones externas
```

La fotografía cognitiva permite que la IA observe el sistema completo.

El Sistema de Transferencia Estructural permite que la IA entienda cómo se produce una salida válida dentro de ese sistema.

---

## 24. Relación con entidades federadas

Una entidad federada puede contener múltiples regiones, instancias, adaptadores, codominios y manifestaciones.

La nueva arquitectura facilita esta pluralidad.

Ejemplo:

```txt
entidad_federada:
  grafo_de_regiones

  realizaciones:
    video_corto:
      instancia_regional_video_corto_tiktok
      adaptador_video_corto
      codominio_video_corto

    carrusel:
      instancia_regional_carrusel_instagram
      adaptador_carrusel
      codominio_carrusel

    newsletter:
      instancia_regional_newsletter
      adaptador_newsletter
      codominio_newsletter
```

Cada realización puede tener su propia Instancia Regional, pero todas pueden referirse al mismo sistema mayor.

Esto permite conservar unidad arquitectónica sin impedir diferenciación.

---

## 25. Relación con isomorfismo y reutilización

Casos distintos pueden compartir estructura.

La Instancia Regional permite detectar qué parte de la arquitectura mayor se reutiliza.

La Instancia Contextual permite adaptar esa región a un caso particular.

El Adaptador permite proyectar el caso hacia una forma externa.

El Codominio permite comparar salidas dentro de la misma familia.

Por ejemplo:

```txt
misma_region
  → multiples_instancias_contextuales
    → mismo_adaptador
      → multiples_manifestaciones_codominiales
```

O también:

```txt
misma_instancia_contextual
  → adaptador_video
  → adaptador_carrusel
  → adaptador_newsletter
```

Esto permite que la arquitectura sea:

- reusable;
- extensible;
- comparable;
- auditable;
- transferible.

---

## 26. Uso recomendado dentro de un artefacto

Si este documento se añade a un artefacto, debe funcionar como orientación global.

Debe leerse antes o junto con los documentos especializados:

```txt
definiciones/
  planteamiento-instancia-regional.md
  planteamiento-instancia-contextual-v2.md
  planteamiento-adaptador-v2.md
  planteamiento-codominio-manifestacion-codominial-v2.md
  documento-unificacion-sistema-transferencia-estructural-v2.md
```

Su función es impedir que las piezas sean entendidas como documentos aislados.

Debe mostrar que todas pertenecen a una misma cadena.

---

## 27. Actualización de vocabulario

La migración exige actualizar algunas frases.

### Frase antigua

```txt
La Instancia Contextual selecciona valores dentro de un Modelo Base.
```

### Frase nueva

```txt
La Instancia Contextual selecciona valores dentro del espacio habilitado por una Instancia Regional.
```

---

### Frase antigua

```txt
El Adaptador recibe una Instancia Contextual construida sobre un Modelo Base.
```

### Frase nueva

```txt
El Adaptador recibe una Instancia Contextual validada, construida dentro de una Instancia Regional.
```

---

### Frase antigua

```txt
El Modelo Base define las posibilidades de configuración de una realización.
```

### Frase nueva

```txt
El Grafo de Regiones contiene el sistema mayor de posibilidades, y la Instancia Regional selecciona las posibilidades operables para una realización.
```

---

### Frase antigua

```txt
Una misma Instancia Contextual puede proyectarse hacia distintos Codominios.
```

### Frase nueva

```txt
Una misma Instancia Contextual, si está validada dentro de su Instancia Regional, puede proyectarse hacia distintos Codominios mediante Adaptadores compatibles.
```

---

## 28. Checklist de validación del sistema completo

Una aplicación correcta del Sistema de Transferencia Estructural debe cumplir:

```txt
[ ] Existe un sistema mayor o Grafo de Regiones identificable.
[ ] La Instancia Regional referencia nodos existentes.
[ ] La Instancia Regional declara dimensiones habilitadas.
[ ] La Instancia Regional declara campos habilitados.
[ ] La Instancia Regional distingue valores posibles de valores regionalmente fijados.
[ ] La Instancia Contextual declara qué Instancia Regional usa.
[ ] La Instancia Contextual selecciona valores dentro de lo habilitado.
[ ] El Adaptador recibe una Instancia Contextual suficientemente determinada.
[ ] El Adaptador declara o presupone un Codominio claro.
[ ] El Codominio define criterios de pertenencia.
[ ] La Manifestación Codominial conserva trazabilidad.
[ ] La salida puede justificarse por la cadena completa.
```

---

## 29. Errores frecuentes

### 29.1. Tratar el Grafo de Regiones como si fuera Instancia Regional

El Grafo de Regiones es el sistema mayor.

La Instancia Regional es un recorte.

### 29.2. Tratar la Instancia Regional como si fuera Instancia Contextual

La Instancia Regional habilita posibilidades.

La Instancia Contextual selecciona valores concretos.

### 29.3. Tratar la Instancia Contextual como salida

La Instancia Contextual no es todavía manifestación.

Es configuración de entrada.

### 29.4. Hacer que el Adaptador interprete ideas en crudo

El Adaptador debe recibir una Instancia Contextual validada.

### 29.5. Usar el Codominio como plantilla superficial

El Codominio es espacio formal de validez, no solo formato visual.

### 29.6. Producir manifestaciones sin trazabilidad

Una salida que no puede explicar de dónde provienen sus decisiones no está suficientemente integrada al sistema.

### 29.7. Reconstruir modelos base locales innecesarios

Si ya existe un Grafo de Regiones, la realización debe usar una Instancia Regional, no crear otro modelo base local completo.

---

## 30. Definición canónica actualizada

Un **Sistema de Transferencia Estructural** es la arquitectura mediante la cual un sistema mayor de regiones se recorta en una Instancia Regional, se configura como Instancia Contextual, se proyecta mediante un Adaptador hacia un Codominio y aparece como Manifestación Codominial. Su función es permitir que estructuras internas distribuidas se conviertan en objetos externos válidos, trazables y reutilizables, sin depender de improvisación ni de modelos base locales duplicados.

---

## 31. Definición breve actualizada

El Sistema de Transferencia Estructural es el mecanismo que convierte una región habilitada de un sistema mayor en una manifestación externa válida mediante configuración contextual, adaptación protocolaria y pertenencia codominial.

---

## 32. Fórmula final

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → manifestacion_codominial ∈ codominio
```

O, en forma funcional:

```txt
G → R → I_R → A_C(I_R) → Y_C ∈ C
```

Donde:

```txt
G = grafo_de_regiones
R = instancia_regional
I_R = instancia_contextual construida dentro de R
A_C = adaptador orientado al codominio C
Y_C = manifestacion_codominial perteneciente a C
```

---

## 33. Cierre conceptual

La función final del Sistema de Transferencia Estructural es hacer posible el paso desde una arquitectura interna distribuida hacia una salida externa válida.

La arquitectura nueva mejora la anterior porque evita duplicar modelos base locales.

En su lugar, mantiene un sistema mayor de regiones y permite que cada realización cree su propio recorte regional.

Así:

```txt
lo común vive en grafo_de_regiones
lo específico vive en instancia_regional
lo particular vive en instancia_contextual
lo proyectivo vive en adaptador
lo formal vive en codominio
lo manifiesto vive en manifestacion_codominial
```

Esta separación permite que el sistema sea más claro, más reutilizable, más extensible y más auditable.

La manifestación final ya no aparece como una pieza aislada.

Aparece como el último tramo de una cadena estructural:

```txt
sistema mayor
  → región
    → contexto
      → proyección
        → forma válida
          → manifestación
```
