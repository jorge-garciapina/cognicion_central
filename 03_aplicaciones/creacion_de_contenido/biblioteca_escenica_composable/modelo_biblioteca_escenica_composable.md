# Modelo — Biblioteca escénica composable

**Tipo de documento:** modelo autónomo  
**Estado:** versión provisional 1.0  
**Familia probable:** modelo / método / cApp potencial / sistema de contenido digital  

---

## 0. Propósito

Este documento formaliza el modelo de **Biblioteca escénica composable** como una estructura para diseñar, almacenar, adaptar y reutilizar escenas base en la creación de obras audiovisuales, narrativas, musicales, interactivas o generativas.

El modelo parte de una intuición:

```text
Las obras narrativas pueden descomponerse en unidades escénicas con función.
Si esas unidades se diseñan con invariantes y dominio de variación,
pueden convertirse en una biblioteca reutilizable para crear nuevas obras.
```

---

## 1. Definición central

**Biblioteca escénica composable** = sistema organizado de escenas base diseñadas como unidades narrativo-visuales reutilizables, cada una con núcleo, función, invariantes, dominio de variación, capas expresivas y salidas derivables.

No es solo una colección de imágenes.

No es solo un banco de clips.

No es solo un canal de videos.

Es una infraestructura de composición narrativa.

---

## 2. Núcleo del modelo

```text
escenas base
+ núcleo narrativo
+ capa verbal
+ capa icónica-retórica
+ invariantes
+ dominio de variación
+ puntos de adaptación
+ salidas derivables
+ comunidad de recomposición
```

Versión mínima:

```text
Escena base = función narrativa reutilizable.
Canal = repositorio público de funciones escénicas.
Obra derivada = composición nueva creada a partir de esas funciones.
```

---

## 3. Unidad mínima: escena base composable

Una escena base composable es una unidad narrativa diseñada para poder separarse de una obra final y ser reutilizada en nuevas composiciones.

Debe contener:

1. **Núcleo narrativo**  
   Qué ocurre en esencia.

2. **Función emocional**  
   Qué debe sentir el receptor.

3. **Función narrativa**  
   Qué cambio produce en la historia.

4. **Capa verbal**  
   Qué se dice o podría decirse.

5. **Capa icónica-retórica**  
   Qué muestra la imagen y qué operación visual realiza.

6. **Relación texto-imagen**  
   Repetición, contraste, ironía, intensificación, silencio, desplazamiento.

7. **Invariantes**  
   Qué debe permanecer para que la escena siga siendo la misma.

8. **Dominio de variación**  
   Qué puede cambiar sin romper identidad.

9. **Puntos de adaptación**  
   Música, diálogo, estilo visual, ritmo, edición, género, plataforma.

10. **Salidas posibles**  
   Animación, doblaje, meme, short, cómic, videojuego, prompt, storyboard, análisis.

---

## 4. Ejemplo de escena base

```text
Escena: “El personaje sonríe mientras todo se derrumba detrás.”
```

### Núcleo

Contraste entre calma externa y colapso ambiental.

### Invariantes

- Debe haber un sujeto aparentemente tranquilo.
- Debe haber un entorno en crisis.
- La imagen debe producir tensión entre control y desastre.

### Dominio de variación

- Puede ser comedia, terror, drama o sátira.
- Puede ocurrir en una oficina, ciudad, nave espacial, escuela o casa.
- Puede tener diálogo o ser muda.

### Relación texto-imagen

Si el personaje dice:

```text
“Todo está bajo control.”
```

la imagen produce ironía.

---

## 5. Estructura jerárquica de la biblioteca

```text
Nivel 0 — Gesto
Nivel 1 — Microescena
Nivel 2 — Escena
Nivel 3 — Secuencia
Nivel 4 — Arco
Nivel 5 — Trama
Nivel 6 — Universo
```

### Nivel 0 — Gesto

Una acción mínima:

- mirar,
- caer,
- correr,
- sonreír,
- temblar,
- abrir una puerta.

### Nivel 1 — Microescena

Una unidad breve con intención:

- personaje corre hacia algo,
- personaje descubre algo,
- personaje oculta algo.

### Nivel 2 — Escena

Unidad narrativa completa:

- discusión,
- persecución,
- revelación,
- derrota,
- transformación.

### Nivel 3 — Secuencia

Conjunto de escenas:

- huida por la ciudad,
- preparación para batalla,
- investigación del misterio.

### Nivel 4 — Arco

Conjunto de secuencias:

- traición,
- entrenamiento,
- caída,
- venganza,
- redención.

### Nivel 5 — Trama

Organización global:

- ascenso del héroe,
- corrupción del poder,
- pérdida de inocencia.

### Nivel 6 — Universo

Reglas, estética, personajes, conflictos, instituciones.

---

## 6. Tipos de reutilización

Una escena base puede derivar en:

### Animación

- 2D,
- 3D,
- motion comic,
- animatic,
- stop motion,
- pixel art,
- anime style,
- rotoscopia,
- machinima.

### Musicalización

- tensión,
- comedia,
- nostalgia,
- épica,
- terror,
- ironía,
- sátira,
- romance,
- absurdo.

### Doblaje

- serio,
- cómico,
- fandub,
- parodia,
- traducción,
- doblaje multilingüe.

### Edición

- trailers falsos,
- intros,
- reels,
- shorts,
- memes,
- remixes,
- comparativas.

### Escritura

- guiones,
- fanfiction,
- cuentos,
- diálogos alternativos,
- worldbuilding.

### Videojuegos

- cutscenes,
- misiones,
- diálogos interactivos,
- eventos narrativos,
- visual novels.

### IA generativa

- prompt base,
- prompt negativo,
- variantes de estilo,
- instrucciones para imagen o video,
- descripción estructural de escena.

---

## 7. Artefacto escénico

Una escena puede convertirse en artefacto portable.

Ejemplo de estructura:

```json
{
  "id": "SCENE-001",
  "title": "El héroe descubre la traición",
  "core": "revelación de ruptura de confianza",
  "invariants": [
    "debe haber un vínculo previo",
    "debe haber evidencia de traición",
    "debe producir cambio emocional"
  ],
  "variation_domain": [
    "género",
    "época",
    "estilo visual",
    "tipo de relación",
    "intensidad emocional"
  ],
  "verbal_layer": {
    "dialogue_options": [],
    "narration_options": []
  },
  "iconic_layer": {
    "composition": "personaje en primer plano, evidencia al fondo",
    "symbolic_elements": ["sombra", "objeto roto", "puerta entreabierta"]
  },
  "adaptation_targets": [
    "anime",
    "motion comic",
    "short",
    "meme",
    "video essay",
    "game cutscene"
  ]
}
```

---

## 8. Relación con cApp escénica

Una escena base puede funcionar como cApp si se define como unidad operativa.

```text
cApp escénica = unidad que recibe contexto de adaptación y produce una escena derivada preservando un núcleo narrativo-visual.
```

### Entrada

- escena base,
- género,
- tono,
- duración,
- estilo visual,
- música,
- diálogo,
- público objetivo,
- plataforma.

### Operación

- preservar núcleo,
- adaptar forma,
- ajustar ritmo,
- modificar capa verbal,
- modificar capa icónica,
- producir salida.

### Salida

- guion,
- storyboard,
- prompt,
- animatic,
- video,
- escena editada,
- assets,
- versión doblada.

### Validación

- conserva el núcleo,
- se entiende la función narrativa,
- la variación no rompe identidad,
- el receptor puede reutilizarla,
- la salida se integra en una composición mayor.

---

## 9. Modelo de canal asociado

El canal asociado al modelo no publica solamente piezas finales.

Publica unidades reutilizables.

```text
Canal tradicional:
creador → audiencia

Canal-biblioteca:
creador → biblioteca base → otros creadores → nuevas obras
```

El canal funciona como infraestructura cultural composable.

---

## 10. Invariantes del modelo

1. Debe haber unidades escénicas identificables.
2. Cada unidad debe tener función narrativa o emocional.
3. Cada unidad debe poder separarse de una obra final.
4. Cada unidad debe tener núcleo e invariantes.
5. Debe existir dominio de variación.
6. Debe haber puntos de adaptación.
7. Debe permitir derivaciones.
8. Debe conservar identidad bajo variación.
9. Debe poder documentarse para terceros.
10. Debe ser compatible con ensamblaje en estructuras mayores.

---

## 11. Fórmula de cierre

```text
Biblioteca escénica composable = infraestructura de escenas base diseñadas como funciones narrativas reutilizables.
```

La biblioteca no reemplaza la obra final. La hace más producible, más adaptable y más compartible.
