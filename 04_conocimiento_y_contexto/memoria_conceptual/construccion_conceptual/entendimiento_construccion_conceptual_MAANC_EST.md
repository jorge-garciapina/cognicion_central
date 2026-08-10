# Entendimiento actualizado: construcción conceptual, MAANC y segmentación de manifestaciones lineales

**Documento:** Entendimiento base para desarrollar el procedimiento de creación de `construccion_conceptual` mediante MAANC  
**Contexto:** ACCD / Sistema de Transferencia Estructural / Realizaciones lineales  
**Estado:** Nota conceptual de integración  

---

# 1. Punto de partida

En la ACCD ya quedó clara la relación entre:

```txt
instancia_contextual
construccion_conceptual
protocolo
realizacion
manifestacion_codominial
```

La relación central puede formularse así:

```txt
instancia_contextual
  = régimen operativo, restricciones y condiciones de aparición

construccion_conceptual
  = materia cognitiva activa organizada para ser manifestada

protocolo
  = mecanismo de acoplamiento proyectivo entre ambas
```

Hasta este punto, los protocolos de `carousel` y `video_corto` han operado con construcciones conceptuales ya dadas. Es decir, se asumía que la `construccion_conceptual` existía previamente, y que el protocolo sólo debía distribuirla dentro de una realización codominial.

Sin embargo, ahora se vuelve necesario desarrollar un paso anterior:

```txt
¿Cómo se crea la construccion_conceptual?
```

La ACCD necesita explicitar el procedimiento mediante el cual una fuente, tema, texto, sección, campo atencional o estructura cognitiva general se transforma en una `construccion_conceptual` usable por los protocolos.

---

# 2. Corrección terminológica: de `idea` a `estructura_cognitiva`

Hasta ahora se venía usando el término `idea` dentro de la forma de la construcción conceptual. Sin embargo, para generalizar el sistema y hacerlo compatible con MAANC, conviene reemplazar ese término por:

```txt
estructura_cognitiva
```

La razón es que MAANC no trabaja únicamente con ideas en sentido estrecho. Puede detectar, construir o reorganizar entidades como:

```txt
ideas
conceptos
distinciones
inferencias
ejemplos
analogías
mini-historias
argumentos
contraargumentos
métodos
planes
secuencias
clasificaciones
categorías
problemas
soluciones
principios
patrones
esquemas narrativos
moves retóricos
relaciones de coherencia
responsabilidades narrativo-cognitivas
```

Todas estas entidades pueden participar en una construcción conceptual, pero no todas son simplemente “ideas”. Por eso, el término más general y correcto es:

```txt
estructura_cognitiva_activa
```

Así, la construcción conceptual deja de ser entendida como una colección de ideas y pasa a ser entendida como una arquitectura compuesta por estructuras cognitivas activas.

---

# 3. Nueva forma esperada de la construcción conceptual

La forma anterior era:

```txt
construccion_conceptual
  idea_activa_i
```

La forma actualizada debe ser:

```txt
construccion_conceptual
  estructura_cognitiva_activa_i
```

Forma propuesta:

```yaml
construccion_conceptual:
  corriente_conceptual_segmentada:
    eventos_gruesos:
      - evento_id:
        nombre_funcional:
        responsabilidad_narrativo_cognitiva:
        funcion_en_la_trayectoria:
        estado_cognitivo_de_entrada:
        operacion_transformadora:
        estado_cognitivo_de_salida:
        estructuras_cognitivas_activas:
          - estructura_cognitiva_id:
            identificador_de_trabajo:
            formulacion_textual_de_la_estructura:
            formulacion_de_la_estructura:
            familia_cognitiva:
            rol_cognitivo_conceptual:
            peso_relativo:
            modo_de_presencia:
            relaciones_con_otras_estructuras:
              - estructura_relacionada:
                tipo_de_relacion:
                descripcion_de_la_relacion:
        eventos_finos:
          - evento_fino_id:
            nombre_funcional:
            responsabilidad_local:
            estructuras_cognitivas_activas:
              - estructura_cognitiva_id:
```

Esta forma conserva la utilidad de la forma anterior, pero la vuelve más general. Ahora la construcción conceptual puede contener una distinción, una inferencia, una analogía, una secuencia, una mini-historia, una tesis o un patrón, no sólo una idea en sentido estrecho.

---

# 4. Forma mínima de una estructura cognitiva activa

Cada estructura cognitiva activa debe tener, como mínimo, esta forma:

```yaml
estructura_cognitiva_activa_i:
  identificador_de_trabajo:
  formulacion_textual_de_la_estructura:
  formulacion_de_la_estructura:
  familia_cognitiva:
  rol_cognitivo_conceptual:
  peso_relativo:
  modo_de_presencia:
  relaciones_con_otras_estructuras:
    - estructura_relacionada:
      tipo_de_relacion:
      descripcion_de_la_relacion:
```

## 4.1. `identificador_de_trabajo`

Identificador operativo de la estructura cognitiva dentro de la construcción conceptual.

Ejemplo:

```yaml
identificador_de_trabajo: EC_01
```

## 4.2. `formulacion_textual_de_la_estructura`

Forma textual original, cercana a la fuente o al material de origen.

Ejemplo:

```yaml
formulacion_textual_de_la_estructura: "La crítica rara vez corrige; con frecuencia activa defensa."
```

## 4.3. `formulacion_de_la_estructura`

Formulación normalizada, abstracta o funcional de la estructura cognitiva.

Ejemplo:

```yaml
formulacion_de_la_estructura: "La crítica tiende a producir defensa antes que transformación."
```

## 4.4. `familia_cognitiva`

Indica qué tipo de estructura es.

Ejemplos:

```txt
concepto
distincion
inferencia
ejemplo
analogía
mini_historia
argumento
contraargumento
principio
metodo
secuencia
clasificacion
problema
solucion
patron
```

## 4.5. `rol_cognitivo_conceptual`

Indica qué función cumple dentro de la construcción conceptual.

Ejemplos:

```txt
nuclear
soporte
puente
contraste
derivacion
apertura
resolucion
cierre
remate
expansion
condicion
consecuencia
ejemplificacion
validacion
```

## 4.6. `peso_relativo`

Indica la importancia relativa dentro de la construcción.

Ejemplos:

```txt
alto
medio
bajo
```

## 4.7. `modo_de_presencia`

Indica cómo debe aparecer en la manifestación.

Ejemplos:

```txt
explicita
implicita
transversal
localizada
estructurante
reiterada
visualizable
argumentativa
narrativa
metadiscursiva
```

## 4.8. `relaciones_con_otras_estructuras`

Indica cómo se conecta con otras estructuras cognitivas.

Ejemplos de relación:

```txt
soporte
contraste
causa
consecuencia
condicion
expansion
elaboracion
ejemplificacion
analogía
secuencia
reformulacion
refutacion
sintesis
preparacion
resolucion
```

---

# 5. Razón de desarrollar el procedimiento de construcción conceptual

Actualmente, la ACCD usa construcciones conceptuales ya hechas. Eso permite que los protocolos funcionen, pero deja sin resolver una etapa fundamental:

```txt
fuente / tema / texto / sección
  → construccion_conceptual
```

La nueva tarea consiste en desarrollar explícitamente ese procedimiento.

La cadena completa debe entenderse así:

```txt
fuente / tema / campo / sección / texto
  → MAANC
    → corriente conceptual segmentada
      → construccion_conceptual
        → instancia_contextual + protocolo
          → manifestacion_codominial
```

Esto significa que MAANC debe convertirse en el mecanismo que permite pasar de material cognitivo bruto a materia conceptual organizada.

---

# 6. Tarea 1: procedimiento de creación de la construcción conceptual mediante MAANC

La primera tarea consiste en definir cómo los módulos del MAANC pueden ser utilizados para construir `construccion_conceptual`.

El objetivo no es simplemente extraer ideas de un texto. El objetivo es producir una estructura operativa que pueda ser usada por los protocolos de realización.

La salida esperada del procedimiento no debe ser:

```txt
lista de ideas
```

sino:

```txt
corriente conceptual segmentada
  + estructuras cognitivas activas
  + relaciones
  + roles
  + pesos
  + modos de presencia
  + eventos gruesos y finos
```

---

# 7. Tarea 2: organización temática del campo atencional

La segunda tarea consiste en definir la organización temática de un campo atencional.

Aunque esta tarea se trabajará después, queda relacionada con la primera por composición ascendente.

Una posible cadena general es:

```txt
campo_atencional
  → UOA
    → secciones
      → temas / líneas conceptuales
        → construcciones_conceptuales
          → realizaciones
            → manifestaciones_codominiales
```

La construcción conceptual funciona como puente entre la organización temática del campo y las manifestaciones concretas.

---

# 8. Desacoplamiento entre construcción conceptual y protocolo

Uno de los cambios más importantes es que el protocolo no debe decidir por sí solo el número profundo de partes de una manifestación.

El protocolo debe operar sobre las partes recibidas desde la construcción conceptual.

Antes, podía parecer que el protocolo hacía esto:

```txt
protocolo
  → decide arquitectura macro
  → decide número de partes
  → distribuye estructuras cognitivas
  → genera manifestación
```

La nueva distribución de responsabilidades debe ser:

```txt
MAANC / procedimiento de construcción conceptual
  → define eventos conceptuales, agrupamientos, relaciones y trayectoria

construccion_conceptual
  → entrega la corriente conceptual segmentada

instancia_contextual
  → define condiciones operativas de manifestación

protocolo
  → proyecta esa corriente conceptual al codominio de una realización
```

Así, el protocolo no inventa la estructura profunda. La recibe, la adapta y la materializa.

---

# 9. Manifestaciones lineales y Event Segmentation Theory

Las realizaciones actuales, como `carousel` y `video_corto`, tienen una estructura de manifestación lineal.

Esto significa que tienen:

```txt
principio
  → desarrollo secuencial
    → fin
```

En cambio, una imagen estática no funciona del mismo modo. Una imagen tiene composición espacial simultánea; no posee necesariamente un “antes” y un “después” interno como una secuencia lineal.

Para modelar realizaciones lineales se propone usar Event Segmentation Theory.

Según la formulación de trabajo:

```txt
Event Segmentation Theory estudia cómo las personas dividen una corriente continua de actividad en unidades significativas llamadas eventos.
```

La equivalencia dentro de la ACCD es:

```txt
corriente continua de actividad
  ↔ estructura de manifestación lineal

evento
  ↔ unidad dentro de la manifestación
```

---

# 10. Corriente conceptual y eventos

La estructura lineal puede representarse así:

```txt
C = e₁ → e₂ → e₃ → ... → eₙ
```

Donde:

```txt
eⱼ = evento dentro de la corriente
```

En la ACCD, esa corriente puede entenderse como una corriente conceptual, narrativa, argumentativa, expositiva o cognitiva.

Ejemplo:

```txt
C = apertura → contraste → resolución
```

Pero ahora la meta es que esos eventos no sean sólo etiquetas heurísticas. Deben ser resultado de un procedimiento analítico-constructivo.

---

# 11. Segmentación gruesa y segmentación fina

Event Segmentation Theory permite distinguir entre segmentación gruesa y segmentación fina.

Dentro de ACCD:

```txt
segmentacion_gruesa
  = eventos macro de la construcción conceptual

segmentacion_fina
  = unidades internas dentro de cada evento macro
```

Ejemplo:

```yaml
corriente_conceptual_segmentada:
  eventos_gruesos:
    - evento_id: EG_01
      nombre_funcional: apertura_de_tension
      eventos_finos:
        - EF_01: escena_inicial
        - EF_02: formulacion_del_problema
        - EF_03: pregunta_implicita

    - evento_id: EG_02
      nombre_funcional: contraste_interpretativo
      eventos_finos:
        - EF_04: posicion_A
        - EF_05: posicion_B
        - EF_06: diferencia_relevante

    - evento_id: EG_03
      nombre_funcional: resolucion_conceptual
      eventos_finos:
        - EF_07: inferencia
        - EF_08: sintesis
        - EF_09: consecuencia
```

La construcción conceptual debe poder contener ambos niveles.

---

# 12. Arquitectura macro heurística y refinamiento mediante MAANC

En el estado actual, tanto para `carousel` como para `video_corto`, los eventos gruesos están dados por la arquitectura macro.

Ejemplos:

```txt
C₁ = apertura → contraste → resolución
C₂ = apertura → desarrollo → cierre
C₃ = apertura → desarrollo → remate
C₄ = apertura → lista → cierre
C₅ = apertura → secuencia → remate
```

Esto es correcto como punto de partida, pero esas arquitecturas fueron creadas de forma heurística.

El MAANC fue creado para refinar la arquitectura macro.

Su función es permitir que la arquitectura macro no sea sólo una plantilla general, sino una estructura derivada de operaciones cognitivas, narrativas, retóricas, argumentativas, expositivas y atencionales.

---

# 13. MAANC como mecanismo de creación de construcción conceptual

Los módulos del MAANC pueden trabajar en dos direcciones:

```txt
1. extraer estructuras cognitivas de un texto existente
2. construir un texto o manifestación a partir de estructuras cognitivas
```

Para la creación de `construccion_conceptual`, MAANC debe producir:

```txt
estructuras_cognitivas_activas
eventos conceptuales gruesos
eventos conceptuales finos
macroestructura
trayectoria narrativa-cognitiva
relaciones retóricas
relaciones de coherencia
inferencias
moves retóricos
estado cognitivo inicial y final
focos atencionales
modos de presencia
pesos relativos
roles cognitivo-conceptuales
```

El resultado debe ser una construcción conceptual lista para que un protocolo la proyecte.

---

# 14. Aporte de cada módulo del MAANC a la construcción conceptual

## 14.1. `extractor_de_macroestructura`

Aporta:

```txt
macroproposiciones
macrotesis
núcleo conceptual
ejes semánticos
jerarquía de sentido
```

Uso en construcción conceptual:

```txt
identificar estructuras cognitivas nucleares y agrupamientos semánticos mayores.
```

## 14.2. `detector_de_estructura_expositiva`

Aporta:

```txt
operaciones explicativas
estructura expositiva dominante
descripción
comparación
causalidad
problema-solución
secuencia
clasificación
```

Uso en construcción conceptual:

```txt
detectar cómo la construcción hace comprender un fenómeno.
```

## 14.3. `segmentador_funcional`

Aporta:

```txt
eventos gruesos
eventos finos
límites funcionales
cambios de operación cognitiva
```

Uso en construcción conceptual:

```txt
construir la corriente conceptual segmentada.
```

## 14.4. `constructor_de_trayectoria_narrativa`

Aporta:

```txt
estado inicial
tensión
transformación
resolución
estado final
curva narrativo-cognitiva
```

Uso en construcción conceptual:

```txt
ordenar los eventos como trayectoria de evolución de sentido.
```

## 14.5. `analizador_de_relaciones_retóricas`

Aporta:

```txt
elaboración
evidencia
justificación
contraste
preparación
resumen
reformulación
```

Uso en construcción conceptual:

```txt
construir relaciones funcionales entre estructuras cognitivas y eventos.
```

## 14.6. `analizador_de_coherencia`

Aporta:

```txt
relaciones causales
relaciones contrastivas
relaciones aditivas
relaciones temporales
relaciones condicionales
inferencias necesarias
```

Uso en construcción conceptual:

```txt
hacer explícita la conectividad cognitiva entre partes.
```

## 14.7. `modelador_de_situacion_cognitiva`

Aporta:

```txt
estado cognitivo inicial
actualizaciones cognitivas
modelo mental resultante
transformación interpretativa del receptor
```

Uso en construcción conceptual:

```txt
definir qué cambio cognitivo produce cada evento.
```

## 14.8. `analizador_intencional_atencional`

Aporta:

```txt
foco atencional
intención discursiva
cambio de foco
demanda cognitiva
demanda emocional
```

Uso en construcción conceptual:

```txt
definir la responsabilidad atencional de cada evento o estructura cognitiva.
```

## 14.9. `detector_de_esquemas_narrativos`

Aporta:

```txt
patrones reutilizables
esquemas narrativo-cognitivos
problema-solución
contraste-resolución
caso-principio-aplicación
tesis-objeción-síntesis
```

Uso en construcción conceptual:

```txt
identificar el patrón global de evolución de la construcción.
```

## 14.10. `analizador_de_moves_retoricos`

Aporta:

```txt
movimientos retóricos
establecer problema
ocupar posición
formular regla
anticipar objeción
proyectar consecuencia
```

Uso en construcción conceptual:

```txt
definir qué acción retórica ejecuta cada evento.
```

## 14.11. `analizador_de_metadiscurso`

Aporta:

```txt
señales de transición
marcadores de marco
reformulaciones
recapitulaciones
anuncios de avance
orientación al receptor
```

Uso en construcción conceptual:

```txt
definir cómo la construcción guiará su propia lectura o manifestación.
```

## 14.12. `analizador_argumentativo`

Aporta:

```txt
tesis
fundamentos
garantías
respaldo
objeciones
matices
conclusiones
```

Uso en construcción conceptual:

```txt
construir estructuras cognitivas argumentativas y sus dependencias.
```

## 14.13. `integrador_ACCD`

Aporta:

```txt
normalización
fusión intermodular
jerarquización
conversión a estructura ACCD
```

Uso en construcción conceptual:

```txt
convertir los resultados de todos los módulos en una construccion_conceptual operativa.
```

---

# 15. Nuevo rol del protocolo

Con este cambio, el protocolo debe ser entendido así:

```txt
protocolo
  = adaptador codominial que proyecta una construcción conceptual ya segmentada
    hacia una realización específica, bajo las condiciones de la instancia contextual.
```

El protocolo no debe producir desde cero la estructura profunda.

Debe recibir:

```txt
corriente_conceptual_segmentada
estructuras_cognitivas_activas
eventos gruesos
eventos finos
relaciones
roles
pesos
modos de presencia
```

Y debe proyectar eso hacia:

```txt
video_corto:
  bloques audiovisuales

carousel:
  láminas

texto:
  secciones y subsecciones

clase:
  módulos pedagógicos

newsletter:
  bloques editoriales
```

---

# 16. Ejemplo abstracto de proyección

Una construcción conceptual puede contener:

```yaml
construccion_conceptual:
  corriente_conceptual_segmentada:
    eventos_gruesos:
      - evento_id: EG_01
        nombre_funcional: apertura_de_problema
        estructuras_cognitivas_activas:
          - EC_01
          - EC_02

      - evento_id: EG_02
        nombre_funcional: contraste_interpretativo
        estructuras_cognitivas_activas:
          - EC_03
          - EC_04

      - evento_id: EG_03
        nombre_funcional: resolucion_conceptual
        estructuras_cognitivas_activas:
          - EC_05
```

El protocolo de video corto puede proyectar esto así:

```txt
EG_01 → bloque audiovisual 1
EG_02 → bloque audiovisual 2
EG_03 → bloque audiovisual 3
```

El protocolo de carousel puede proyectarlo así:

```txt
EG_01 → lámina 1
EG_02 → láminas 2 y 3
EG_03 → lámina 4
```

La construcción conceptual define la estructura cognitiva. El protocolo define la traducción codominial.

---

# 17. Relación con composición ascendente

La composición ascendente se vuelve más clara con este ajuste.

En una dirección de análisis:

```txt
manifestación existente
  → MAANC
    → construcción conceptual detectada
      → estructuras cognitivas
        → campo / sección / patrón
```

En una dirección de producción:

```txt
campo atencional
  → UOA
    → sección
      → construcción conceptual
        → realización
          → manifestación codominial
```

La construcción conceptual queda situada como el puente entre:

```txt
organización temática / cognitiva
```

y:

```txt
producción de manifestaciones concretas
```

---

# 18. Conclusión

El entendimiento actualizado es:

```txt
La construccion_conceptual ya no debe entenderse como una simple colección
plana de ideas activas.

Debe entenderse como una arquitectura cognitiva segmentada,
compuesta por estructuras cognitivas activas,
eventos gruesos, eventos finos, relaciones, roles, pesos,
modos de presencia y trayectorias narrativo-cognitivas.
```

La fórmula final es:

```txt
fuente / tema / texto / sección / campo
  → MAANC
    → corriente conceptual segmentada
      → construccion_conceptual
        → instancia_contextual + protocolo
          → manifestacion_codominial
```

Y el cambio terminológico central es:

```txt
idea_activa
  → estructura_cognitiva_activa
```

Porque el sistema no debe limitarse a ideas. Debe poder trabajar con cualquier estructura cognitiva que MAANC pueda detectar, organizar o construir.

---

# 19. Definición final propuesta

```txt
construccion_conceptual:
  arquitectura cognitiva segmentada que organiza estructuras cognitivas activas
  dentro de una corriente conceptual compuesta por eventos gruesos y finos.
  Su función es entregar al protocolo una materia conceptual ya estructurada,
  relacional y jerarquizada, para que éste pueda proyectarla hacia una
  manifestación codominial bajo las condiciones de una instancia contextual.
```
