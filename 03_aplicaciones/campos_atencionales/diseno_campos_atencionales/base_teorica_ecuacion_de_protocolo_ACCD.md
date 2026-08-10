https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/6a12029c-6964-83e8-82e5-e92f016e681a

# Base teórica de la ecuación de protocolo en la ACCD

**Documento:** `base_teorica_ecuacion_de_protocolo_ACCD.md`  
**Objeto central:** ecuación de protocolo  
**Marco:** ACCD · MAANC · Event Segmentation Theory · instancia contextual · realización · codominio · manifestación codominial  
**Propósito:** ofrecer una formulación matemática autosuficiente para entender la ecuación de protocolo como condensación de la arquitectura de producción de manifestaciones codominiales.

---

## 1. Tesis central

La ecuación de protocolo es el punto de condensación formal de la ACCD porque reúne, en una sola expresión, los componentes fundamentales del sistema:

```txt
estructura cognitiva construida
+
instancia contextual
+
realización
+
protocolo
=
manifestación codominial
```

La ecuación expresa que una manifestación no surge directamente de un tema ni de una forma superficial. Surge cuando una estructura cognitiva organizada es proyectada, bajo una configuración contextual determinada, hacia el codominio de una realización mediante un protocolo especializado.

La forma general es:

```math
P^{r_k}(m^i_j, \varphi_n) = \mu^{r_k}(m^i_j, \varphi_n)
```

También puede escribirse en forma expandida:

```math
P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

La segunda forma muestra que la construcción conceptual `m^i_j` puede entenderse como resultado de aplicar un módulo del MAANC `M^i` sobre un tema `t_j`.

---

## 2. Notación fundamental

### 2.1. Espacio de temas

Sea:

```math
T = \{t_1, t_2, \ldots, t_n\}
```

Donde `T` representa el conjunto de temas disponibles dentro de un campo atencional, una UOA, una sección o cualquier dominio de trabajo.

Cada elemento:

```math
t_j \in T
```

representa un tema particular.

Un tema no es todavía una manifestación. Tampoco es todavía una estructura cognitiva organizada. Es un punto de partida que puede ser procesado por distintos módulos.

---

### 2.2. Conjunto de módulos MAANC

Sea:

```math
MAANC = \{M^1, M^2, \ldots, M^q\}
```

Cada `M^i` representa un módulo del MAANC.

Cada módulo funciona como un operador:

```math
M^i : T \to \mathcal{C}
```

Donde `\mathcal{C}` representa el espacio de construcciones conceptuales posibles.

Al aplicar un módulo a un tema se obtiene:

```math
M^i(t_j) = m^i_j
```

Donde:

```txt
M^i
  = módulo MAANC i

t_j
  = tema j

m^i_j
  = construcción conceptual producida al aplicar M^i sobre t_j
```

Esta notación permite expresar algo importante: un mismo tema puede generar diferentes construcciones conceptuales dependiendo del módulo MAANC que lo procese.

Por ejemplo:

```math
M^1(t_j) = m^1_j
```

```math
M^2(t_j) = m^2_j
```

```math
M^3(t_j) = m^3_j
```

Todas estas construcciones comparten el mismo tema de origen, pero difieren en su forma de organización cognitiva.

---

### 2.3. Construcción conceptual como corriente de continuidad

Cada construcción conceptual puede entenderse como una corriente organizada:

```math
m^i_j = e^i_1 \to e^i_2 \to e^i_3 \to \cdots \to e^i_s
```

Donde cada `e^i_k` representa un evento cognitivo o segmento funcional dentro de la construcción.

La flecha `\to` no indica simplemente sucesión temporal. Indica continuidad estructural. Es decir, cada evento ocupa una posición dentro de una trayectoria cognitiva.

La forma general es:

```math
m^i_j = (E^i_j, \prec, \rho)
```

Donde:

```txt
E^i_j
  = conjunto de eventos cognitivos de la construcción conceptual

\prec
  = relación de precedencia o continuidad entre eventos

\rho
  = conjunto de relaciones internas entre eventos
```

Así, una construcción conceptual no es solamente un conjunto de elementos. Es una estructura ordenada, relacional y funcional.

---

## 3. Event Segmentation Theory como fundamento formal

La Event Segmentation Theory permite modelar una manifestación lineal como una corriente continua segmentada en unidades significativas.

En la ACCD, esto se traduce así:

```txt
corriente continua de actividad
  ↔ estructura de manifestación lineal

evento
  ↔ unidad significativa dentro de la manifestación o de la construcción conceptual
```

Por tanto, una corriente puede expresarse como:

```math
C = e_1 \to e_2 \to e_3 \to \cdots \to e_n
```

Donde cada `e_k` es un evento.

La EST reconoce distintos niveles de segmentación:

```txt
segmentación gruesa
  = eventos amplios, de alto nivel, cercanos a la arquitectura macro

segmentación fina
  = eventos internos, subeventos o unidades funcionales más específicas
```

En términos de la ACCD:

```math
e_k = \{e_{k,1}, e_{k,2}, \ldots, e_{k,h}\}
```

Esto significa que un evento grueso `e_k` puede contener eventos finos:

```txt
evento grueso
  → subevento 1
  → subevento 2
  → subevento 3
```

La estructura completa puede representarse como una jerarquía:

```math
C = \big(e_1, e_2, \ldots, e_n\big)
```

con:

```math
e_k = \big(e_{k,1}, e_{k,2}, \ldots, e_{k,h_k}\big)
```

Así, la arquitectura no es plana. Una manifestación lineal puede tener macroeventos, eventos intermedios y microeventos.

---

## 4. Arquitectura macro como segmentación gruesa

La arquitectura macro puede entenderse como una segmentación gruesa de la corriente de continuidad.

Ejemplos:

```math
C_1 = apertura \to contraste \to resolucion
```

```math
C_2 = apertura \to desarrollo \to cierre
```

```math
C_3 = apertura \to desarrollo \to remate
```

```math
C_4 = apertura \to lista \to cierre
```

```math
C_5 = apertura \to secuencia \to remate
```

Estas formas no deben entenderse solamente como nombres de partes. Cada una describe una trayectoria.

Por ejemplo:

```txt
apertura → contraste → resolución
```

significa:

```txt
instalar un estado inicial
  → introducir una tensión diferencial
    → reorganizar el sentido mediante una llegada resolutiva
```

Y:

```txt
apertura → secuencia → remate
```

significa:

```txt
abrir un recorrido
  → hacerlo avanzar por momentos encadenados
    → condensar el efecto final
```

En este sentido, la arquitectura macro funciona como una forma de evolución narrativo-cognitiva.

---

## 5. Instancia contextual

Sea:

```math
\Phi = \{\varphi_1, \varphi_2, \ldots, \varphi_p\}
```

Donde `\Phi` representa el conjunto de instancias contextuales disponibles.

Cada:

```math
\varphi_n \in \Phi
```

representa una configuración contextual.

Una instancia contextual puede entenderse como una configuración de valores seleccionados desde una instancia regional.

Formalmente:

```math
\varphi_n = \{v_1, v_2, \ldots, v_l\}
```

Donde cada `v_l` es un valor contextual activo.

La instancia contextual especifica condiciones como:

```txt
función dominante
orientación pragmática
efecto buscado
acción esperada
escala temporal o extensión
estado atencional
régimen de activación
acoplamiento receptoral
marco de materialización
recursos admitidos
restricciones de realización
```

Por tanto, `\varphi_n` no aporta la corriente cognitiva en sí misma. Aporta el régimen bajo el cual esa corriente será manifestada.

La diferencia puede expresarse así:

```txt
m^i_j
  = qué estructura cognitiva se proyecta

\varphi_n
  = bajo qué condiciones se proyecta
```

---

## 6. Realización y codominio

Sea:

```math
R = \{r_1, r_2, \ldots, r_w\}
```

Donde `R` representa el conjunto de realizaciones posibles.

Cada realización `r_k` tiene un codominio asociado:

```math
\Omega^{r_k}
```

El codominio es la familia de salidas válidas para esa realización.

Así:

```math
\mu^{r_k} \in \Omega^{r_k}
```

Donde `\mu^{r_k}` es una manifestación codominial perteneciente al codominio de `r_k`.

Ejemplos:

```txt
r_k = video_corto
\Omega^{r_k} = codominio de guion audiovisual breve / manifestación audiovisual breve
```

```txt
r_k = carousel
\Omega^{r_k} = codominio de secuencia laminar visual-textual
```

La realización define la materialidad de la salida:

```txt
video_corto
  → bloques audiovisuales
  → duración objetivo
  → oralidad
  → visualidad
  → performance
  → audio
  → continuidad temporal

carousel
  → láminas
  → progresión interlaminar
  → texto visible
  → composición visual
  → continuidad visual-editorial
```

Por tanto, una misma construcción conceptual puede manifestarse de formas distintas según la realización.

---

## 7. Protocolo como operador de proyección codominial

Para cada realización `r_k` existe un protocolo:

```math
P^{r_k}
```

El protocolo es un operador que recibe una construcción conceptual y una instancia contextual, y produce una manifestación codominial.

Formalmente:

```math
P^{r_k}: \mathcal{C} \times \Phi \to \Omega^{r_k}
```

De modo que:

```math
P^{r_k}(m^i_j, \varphi_n) = \mu^{r_k}(m^i_j, \varphi_n)
```

Esta es la ecuación central.

El protocolo no es únicamente un generador textual. Es un operador de traducción estructural entre tres planos:

```txt
plano cognitivo
  construcción conceptual

plano contextual
  instancia contextual

plano codominial
  manifestación perteneciente a una realización
```

La ecuación expresa que la manifestación codominial es función de dos entradas principales:

```txt
m^i_j
  estructura cognitiva organizada

\varphi_n
  configuración contextual
```

y de un operador especializado:

```txt
P^{r_k}
  protocolo de la realización r_k
```

---

## 8. Forma expandida de la ecuación

Como:

```math
M^i(t_j) = m^i_j
```

podemos sustituir `m^i_j` dentro de la ecuación:

```math
P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

Esta forma es más expresiva porque muestra toda la cadena:

```txt
tema
  → módulo MAANC
    → construcción conceptual
      → protocolo + instancia contextual
        → manifestación codominial
```

La ecuación expandida condensa cuatro operaciones:

```txt
1. Selección de un tema t_j.
2. Aplicación de un módulo MAANC M^i.
3. Acoplamiento con una instancia contextual \varphi_n.
4. Proyección mediante el protocolo de una realización r_k.
```

La salida es:

```math
\mu^{r_k}(M^i(t_j), \varphi_n) \in \Omega^{r_k}
```

Esto significa que la manifestación producida pertenece al codominio de la realización seleccionada.

---

## 9. Interpretación conceptual de la ecuación

La ecuación:

```math
P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

puede leerse así:

```txt
El protocolo de la realización r_k toma la construcción conceptual producida
por el módulo M^i sobre el tema t_j, la acopla con la instancia contextual
\varphi_n, y produce una manifestación codominial perteneciente al codominio
de r_k.
```

En forma más compacta:

```txt
protocolo = puente entre estructura cognitiva, contexto y codominio
```

La ecuación es importante porque impide confundir niveles:

```txt
El tema no es la manifestación.
El módulo no es la manifestación.
La construcción conceptual no es la manifestación.
La instancia contextual no es la manifestación.
La realización no es la manifestación.
El protocolo no es la manifestación.
```

La manifestación aparece cuando todos estos elementos se articulan bajo una operación de proyección.

---

## 10. Manifestación codominial

La manifestación codominial es la salida concreta:

```math
\mu^{r_k}(m^i_j, \varphi_n)
```

Pertenece al codominio:

```math
\mu^{r_k}(m^i_j, \varphi_n) \in \Omega^{r_k}
```

Esto significa que debe cumplir la forma válida de la realización.

Para video corto, la manifestación debe comportarse como una secuencia audiovisual breve. Para carousel, debe comportarse como una secuencia laminar visual-textual.

La manifestación codominial no es solamente contenido. Es contenido estructurado bajo una forma válida.

```txt
manifestación codominial
  = estructura cognitiva proyectada
  + condiciones contextuales
  + forma material de la realización
  + pertenencia al codominio
```

---

## 11. Descomposición de la ecuación por planos

La ecuación puede descomponerse en planos.

### 11.1. Plano temático

```math
t_j \in T
```

Aporta el dominio de referencia.

### 11.2. Plano cognitivo-operativo

```math
M^i(t_j) = m^i_j
```

Convierte el tema en una estructura cognitiva organizada.

### 11.3. Plano segmental

```math
m^i_j = e^i_1 \to e^i_2 \to \cdots \to e^i_s
```

Organiza la construcción conceptual como corriente de continuidad.

### 11.4. Plano contextual

```math
\varphi_n \in \Phi
```

Aporta los valores que regulan la aparición de la manifestación.

### 11.5. Plano realizativo

```math
r_k \in R
```

Selecciona la familia material de salida.

### 11.6. Plano protocolario

```math
P^{r_k}: \mathcal{C} \times \Phi \to \Omega^{r_k}
```

Proyecta la construcción conceptual y la instancia contextual hacia el codominio.

### 11.7. Plano codominial

```math
\mu^{r_k}(m^i_j, \varphi_n) \in \Omega^{r_k}
```

Garantiza que la salida pertenece a una familia formal válida.

---

## 12. La ecuación como puente entre EST y ACCD

La EST aporta la noción de corriente segmentada:

```math
C = e_1 \to e_2 \to \cdots \to e_n
```

La ACCD aporta la noción de realización codominial:

```math
\mu^{r_k} \in \Omega^{r_k}
```

El MAANC aporta el mecanismo para producir una corriente cognitiva:

```math
M^i(t_j) = m^i_j
```

La instancia contextual aporta los valores de configuración:

```math
\varphi_n
```

El protocolo une todo:

```math
P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

Por eso, la ecuación de protocolo es el puente entre:

```txt
segmentación de eventos
construcción cognitiva
configuración contextual
proyección realizativa
pertenencia codominial
```

---

## 13. Relación con secciones

Una sección puede entenderse como una familia recurrente de manifestaciones generadas bajo una selección estable de valores.

Sea una sección `\sigma` definida por una selección:

```math
\sigma = (T_\sigma, M_\sigma, \Phi_\sigma, R_\sigma)
```

Donde:

```txt
T_\sigma
  = subconjunto de temas admitidos por la sección

M_\sigma
  = subconjunto de módulos u operaciones cognitivas admitidas por la sección

\Phi_\sigma
  = subconjunto de instancias contextuales admitidas por la sección

R_\sigma
  = subconjunto de realizaciones admitidas por la sección
```

La extensión de la sección puede definirse como:

```math
Ext(\sigma) = \{\mu^{r_k}(M^i(t_j), \varphi_n) \mid t_j \in T_\sigma, M^i \in M_\sigma, \varphi_n \in \Phi_\sigma, r_k \in R_\sigma\}
```

Esto significa que una sección no es una manifestación individual. Es una familia de manifestaciones posibles producidas bajo una misma lógica recurrente.

Así, la sección funciona como una regla generativa:

```txt
sección
  → selecciona temas, operaciones, contextos y realizaciones
  → produce una familia reconocible de manifestaciones
```

---

## 14. Relación con UOA

Una Unidad Organizadora de Atención puede entenderse como un subespacio local del campo atencional.

Sea un campo atencional definido por:

```math
\mathcal{F} = (T, M, \Phi, R)
```

Una UOA `u` puede definirse como:

```math
UOA_u = (T_u, M_u, \Phi_u, R_u, \Sigma_u)
```

Donde:

```txt
T_u \subseteq T
  = temas admitidos por la UOA

M_u \subseteq M
  = operaciones MAANC disponibles en la UOA

\Phi_u \subseteq \Phi
  = instancias contextuales disponibles en la UOA

R_u \subseteq R
  = realizaciones compatibles con la UOA

\Sigma_u
  = conjunto de secciones internas de la UOA
```

La UOA no se reduce a una plataforma. Puede estar situada en una plataforma, entorno, canal, superficie o contexto de consumo, pero formalmente es una selección local dentro del espacio del campo.

La UOA organiza una parte del campo atencional mediante:

```txt
temas disponibles
operaciones recurrentes
contextos permitidos
realizaciones compatibles
secciones internas
recorridos de consumo
expectativas recurrentes
```

---

## 15. Campo atencional como espacio generativo

Un campo atencional puede definirse como un espacio generativo amplio:

```math
\mathcal{F} = (T, M, \Phi, R, \mathcal{U})
```

Donde:

```txt
T
  = espacio de temas

M
  = espacio de módulos u operaciones MAANC

\Phi
  = espacio de instancias contextuales

R
  = espacio de realizaciones

\mathcal{U}
  = conjunto de UOA derivadas del campo
```

El campo atencional no es una manifestación. Tampoco es una sección individual. Es el espacio amplio del cual pueden desprenderse UOA, secciones y manifestaciones.

La relación puede expresarse así:

```txt
campo atencional
  → UOA
    → sección
      → manifestación codominial
```

Formalmente:

```math
\mathcal{F} \supset UOA_u \supset \sigma \ni \mu^{r_k}(M^i(t_j), \varphi_n)
```

Esta expresión indica pertenencia jerárquica:

```txt
la manifestación pertenece a una sección;
la sección pertenece a una UOA;
la UOA pertenece a un campo atencional.
```

---

## 16. Composición ascendente

La composición ascendente puede formularse como una jerarquía de pertenencia.

Nivel mínimo:

```math
\mu^{r_k}(M^i(t_j), \varphi_n)
```

Nivel sección:

```math
\mu^{r_k}(M^i(t_j), \varphi_n) \in Ext(\sigma)
```

Nivel UOA:

```math
\sigma \in \Sigma_u
```

Nivel campo atencional:

```math
UOA_u \in \mathcal{U}
```

Cadena completa:

```math
\mu^{r_k}(M^i(t_j), \varphi_n) \in Ext(\sigma), \quad \sigma \in \Sigma_u, \quad UOA_u \in \mathcal{U}
```

En forma textual:

```txt
manifestación codominial
  → miembro de una sección
    → sección interna de una UOA
      → UOA derivada de un campo atencional
```

La ecuación de protocolo es el punto mínimo donde comienza esta composición ascendente, porque produce la manifestación que luego puede integrarse en niveles superiores.

---

## 17. La ecuación como condensación de la ACCD

La ecuación:

```math
P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

condensa múltiples distinciones:

```txt
1. Distingue tema y construcción conceptual.
2. Distingue construcción conceptual e instancia contextual.
3. Distingue instancia contextual y protocolo.
4. Distingue protocolo y realización.
5. Distingue realización y codominio.
6. Distingue codominio y manifestación concreta.
7. Conecta MAANC con ACCD.
8. Conecta Event Segmentation Theory con estructura de manifestación lineal.
9. Conecta secciones, UOA y campos atencionales mediante composición ascendente.
```

La ecuación no es solamente una fórmula de producción. Es una fórmula de articulación arquitectónica.

Permite leer una manifestación como resultado de una trayectoria:

```txt
tema
  → operación MAANC
    → corriente conceptual
      → instancia contextual
        → protocolo de realización
          → codominio
            → manifestación
              → sección
                → UOA
                  → campo atencional
```

---

## 18. Ejemplo formal mínimo

Sea:

```math
t_5 \in T
```

Sea:

```math
M^3 \in MAANC
```

Entonces:

```math
M^3(t_5) = m^3_5
```

Y:

```math
m^3_5 = e^3_1 \to e^3_2 \to e^3_3
```

Sea una instancia contextual:

```math
\varphi_2 \in \Phi
```

Sea una realización:

```math
r_1 = video\_corto
```

Entonces:

```math
P^{video\_corto}(m^3_5, \varphi_2) = \mu^{video\_corto}(m^3_5, \varphi_2)
```

Y:

```math
\mu^{video\_corto}(m^3_5, \varphi_2) \in \Omega^{video\_corto}
```

Si esa manifestación pertenece a una sección `\sigma_a`, entonces:

```math
\mu^{video\_corto}(m^3_5, \varphi_2) \in Ext(\sigma_a)
```

Si esa sección pertenece a una UOA `UOA_b`, entonces:

```math
\sigma_a \in \Sigma_b
```

Si esa UOA pertenece al campo `\mathcal{F}`, entonces:

```math
UOA_b \in \mathcal{U}_{\mathcal{F}}
```

La cadena completa queda:

```math
\mu^{video\_corto}(M^3(t_5), \varphi_2) \in Ext(\sigma_a), \quad \sigma_a \in \Sigma_b, \quad UOA_b \in \mathcal{U}_{\mathcal{F}}
```

---

## 19. Forma categorial de la ecuación

La ecuación puede verse como una composición de funciones.

Primero:

```math
M^i : T \to \mathcal{C}
```

Luego:

```math
P^{r_k} : \mathcal{C} \times \Phi \to \Omega^{r_k}
```

La composición parcial queda:

```math
t_j \mapsto M^i(t_j) \mapsto P^{r_k}(M^i(t_j), \varphi_n)
```

O:

```math
P^{r_k}_{\varphi_n} \circ M^i : T \to \Omega^{r_k}
```

Donde:

```math
P^{r_k}_{\varphi_n}(m) = P^{r_k}(m, \varphi_n)
```

Así:

```math
(P^{r_k}_{\varphi_n} \circ M^i)(t_j) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

Esta forma permite ver que el protocolo, fijada una instancia contextual, transforma el resultado del MAANC en una manifestación codominial.

---

## 20. Matriz generativa

Si se consideran todos los temas, módulos, contextos y realizaciones, el sistema genera una matriz de posibilidades.

Para cada:

```math
(t_j, M^i, \varphi_n, r_k) \in T \times M \times \Phi \times R
```

existe una manifestación potencial:

```math
\mu^{r_k}(M^i(t_j), \varphi_n)
```

La totalidad del espacio generativo puede expresarse como:

```math
\mathcal{G} = \{\mu^{r_k}(M^i(t_j), \varphi_n) \mid t_j \in T, M^i \in M, \varphi_n \in \Phi, r_k \in R\}
```

Este conjunto representa el espacio de manifestaciones posibles del sistema bajo las combinaciones disponibles.

Las secciones y UOA no son ajenas a este espacio. Son selecciones recurrentes dentro de él.

```math
Ext(\sigma) \subseteq \mathcal{G}
```

```math
Ext(UOA_u) = \bigcup_{\sigma \in \Sigma_u} Ext(\sigma)
```

```math
Ext(UOA_u) \subseteq \mathcal{G}
```

Así, la ecuación de protocolo no produce solamente una pieza. Define la unidad mínima del espacio generativo de la ACCD.

---

## 21. Equivalencias conceptuales

| Elemento formal | Lectura en ACCD                    | Función                                   |
| --------------- | ---------------------------------- | ----------------------------------------- |
| `T`             | Espacio de temas                   | Dominio temático disponible               |
| `t_j`           | Tema particular                    | Punto de partida temático                 |
| `M^i`           | Módulo MAANC                       | Operador de construcción cognitiva        |
| `m^i_j`         | Construcción conceptual            | Corriente cognitiva organizada            |
| `e^i_k`         | Evento cognitivo                   | Unidad segmental de la corriente          |
| `\Phi`          | Espacio de instancias contextuales | Configuraciones posibles                  |
| `\varphi_n`     | Instancia contextual               | Condiciones de manifestación              |
| `R`             | Espacio de realizaciones           | Familias de materialización               |
| `r_k`           | Realización particular             | Tipo de salida codominial                 |
| `P^{r_k}`       | Protocolo                          | Operador de proyección codominial         |
| `\Omega^{r_k}`  | Codominio                          | Familia válida de salidas                 |
| `\mu^{r_k}`     | Manifestación codominial           | Salida concreta válida                    |
| `\sigma`        | Sección                            | Familia recurrente de manifestaciones     |
| `UOA_u`         | Unidad Organizadora de Atención    | Subespacio local recorrible del campo     |
| `\mathcal{F}`   | Campo atencional                   | Espacio amplio de organización atencional |

---

## 22. Principio de no colapso de niveles

La ecuación también sirve para evitar colapsos conceptuales.

No debe confundirse:

```txt
t_j
  con
m^i_j
```

porque un tema no es lo mismo que una construcción conceptual.

No debe confundirse:

```txt
m^i_j
  con
\varphi_n
```

porque la construcción conceptual y la instancia contextual cumplen funciones distintas.

No debe confundirse:

```txt
P^{r_k}
  con
\mu^{r_k}
```

porque el protocolo es operador, no salida.

No debe confundirse:

```txt
\Omega^{r_k}
  con
\mu^{r_k}
```

porque el codominio es familia de salidas válidas, no una salida concreta.

No debe confundirse:

```txt
\sigma
  con
\mu^{r_k}
```

porque una sección es una familia recurrente de manifestaciones, no una manifestación individual.

No debe confundirse:

```txt
UOA_u
  con
\sigma
```

porque una UOA puede contener múltiples secciones.

No debe confundirse:

```txt
\mathcal{F}
  con
UOA_u
```

porque el campo atencional es más amplio que cualquier UOA particular.

---

## 23. Lectura final de la ecuación

La ecuación:

```math
P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n)
```

puede leerse finalmente así:

```txt
Dado un tema t_j, un módulo MAANC M^i construye una corriente cognitiva.
Dada una instancia contextual \varphi_n, esa corriente queda sometida a un régimen de manifestación.
Dada una realización r_k, el protocolo P^{r_k} proyecta la corriente y el contexto hacia el codominio correspondiente.
El resultado es una manifestación codominial μ^{r_k}.
```

La ecuación es el punto en el que convergen:

```txt
MAANC
Event Segmentation Theory
instancia contextual
realización
protocolo
codominio
manifestación codominial
sección
UOA
campo atencional
composición ascendente
```

Por eso, la ecuación de protocolo no debe verse como una fórmula auxiliar. Debe verse como la forma mínima que expresa la operación central de la ACCD:

```txt
transformar estructura cognitiva organizada en manifestación codominial
bajo condiciones contextuales y mediante una realización específica.
```

---

## 24. Fórmula condensada final

La formulación completa puede resumirse así:

```math
\boxed{P^{r_k}(M^i(t_j), \varphi_n) = \mu^{r_k}(M^i(t_j), \varphi_n) \in \Omega^{r_k}}
```

Y su expansión arquitectónica es:

```txt
t_j
  → M^i(t_j)
    → m^i_j = e_1 → e_2 → ... → e_s
      → P^{r_k}(m^i_j, φ_n)
        → μ^{r_k}(m^i_j, φ_n) ∈ Ω^{r_k}
          → sección
            → UOA
              → campo atencional
```

Esta es la ecuación como puente.

Une el plano cognitivo, el plano contextual, el plano realizativo y el plano codominial.

Y, al mismo tiempo, funda la composición ascendente que permite que una manifestación individual pertenezca a una sección, una UOA y un campo atencional.
