https://chatgpt.com/g/g-p-6982824b09dc8191931cbd751ea6bba8-teoria-de-maquinas-cognitivas/c/69f261b8-6078-83e8-9a6e-4ea25707ed02

# Planteamiento de la Instancia Regional

## Documento de definición para la ACCD y el sistema de transferencia estructural ampliado

---

## 0. Propósito del documento

Este documento define el concepto de **Instancia Regional** como una pieza arquitectónica general dentro de la ACCD y dentro de cualquier sistema que busque transformar estructuras internas extensas en manifestaciones externas mediante una cadena controlada de selección, configuración y adaptación.

La función de este documento es actualizar la arquitectura conceptual anterior, en la que un `modelo_base` local ocupaba el primer lugar operativo dentro de una realización específica.

En la arquitectura anterior, una carpeta de realización podía organizarse así:

```txt
realizacion/
  modelos-base/
    modelo-base-local.md

  ejemplos/
    caso_x/
      instancia-contextual.md

  protocolos/
    protocolo.md

  codominios/
    salida-esperada.md
```

En esa forma, el `modelo-base-local.md` definía directamente las dimensiones, campos, valores y restricciones que después usaba la instancia contextual.

La arquitectura nueva desplaza esa función. Ya no es necesario que cada realización contenga su propio modelo base local completo. En su lugar, se usa una **Instancia Regional** que selecciona, dentro de un sistema mayor previamente construido, qué dimensiones, campos, valores y restricciones quedan habilitados para una realización específica.

La forma nueva puede representarse así:

```txt
sistema_mayor_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador / protocolo
        → codominio
          → manifestacion_codominial
```

La Instancia Regional no destruye las definiciones anteriores. Las reorganiza.

Los documentos de definición de `instancia_contextual`, `adaptador`, `codominio` y `manifestacion_codominial` siguen funcionando en gran medida, siempre que se actualice el punto de origen:

```txt
antes:
  modelo_base_local → instancia_contextual

ahora:
  instancia_regional → instancia_contextual
```

La Instancia Regional se convierte así en el equivalente funcional del antiguo modelo base local, pero con una diferencia decisiva: **no redefine el espacio de configuración, sino que lo selecciona por referencia desde una arquitectura mayor**.

---

## 1. Definición breve

Una **Instancia Regional** es una selección estructurada de dimensiones, campos, valores posibles y restricciones tomadas de un sistema mayor de regiones, construida para habilitar una clase específica de realización.

Dicho de forma compacta:

> Una Instancia Regional define qué partes de una arquitectura mayor pueden ser usadas por futuras instancias contextuales de una realización determinada.

O de manera todavía más operativa:

```txt
Instancia Regional = recorte referencial del sistema mayor
                     que habilita el espacio configurable de una realización
```

La Instancia Regional no selecciona todavía valores concretos para un caso particular.

Selecciona el espacio dentro del cual esos valores podrán ser elegidos posteriormente.

---

## 2. Definición desarrollada

Una Instancia Regional es una estructura de habilitación.

Su función es tomar un sistema mayor compuesto por regiones, dimensiones, campos, valores y restricciones, y declarar qué parte de ese sistema será usada por una realización específica.

Por ejemplo, una realización orientada a video corto puede requerir dimensiones relacionadas con:

- identidad operativa de la realización;
- orientación funcional-pragmática;
- escala temporal;
- acoplamiento receptoral;
- dinámica atencional;
- construcción del caso;
- comparecencia performativa;
- marco de materialización;
- composición segmental;
- recursos complementarios.

Pero esas dimensiones no tienen que vivir como un modelo base local duplicado dentro de `video-corto/`.

Pueden existir ya dentro de una arquitectura mayor.

La Instancia Regional para video corto se limita entonces a decir:

```txt
para esta realización:
  se habilitan estas dimensiones;
  se habilitan estos campos;
  se habilitan estos valores posibles;
  se aplican estas restricciones;
  se restringen estas opciones cuando el codominio lo exige;
  y las futuras instancias contextuales deben seleccionar valores dentro de este recorte.
```

La Instancia Regional responde a preguntas como:

- ¿qué partes del sistema mayor necesita esta realización?;
- ¿qué dimensiones serán visibles para las instancias contextuales de esta realización?;
- ¿qué campos quedan habilitados?;
- ¿qué valores posibles puede seleccionar una instancia contextual?;
- ¿qué valores quedan regionalmente fijados por la realización?;
- ¿qué valores quedan disponibles pero no fijados?;
- ¿qué restricciones del sistema mayor siguen activas?;
- ¿qué restricciones nuevas aparecen por el codominio específico?;
- ¿qué adaptadores o protocolos pueden consumir instancias contextuales creadas desde esta región?;
- ¿cómo se conserva trazabilidad hacia los nodos originales del sistema mayor?

---

## 3. Tesis central

La tesis central de este documento es:

> Una realización específica no debe construir un modelo base local autónomo si ya existe una arquitectura mayor de regiones. Debe construir una Instancia Regional que seleccione, por referencia, las partes de esa arquitectura mayor que serán operables para esa realización.

Esto permite pasar de una lógica de duplicación local:

```txt
realizacion_A/modelo_base_A
realizacion_B/modelo_base_B
realizacion_C/modelo_base_C
```

hacia una lógica de selección regional:

```txt
sistema_mayor_de_regiones
  ├── instancia_regional_A
  ├── instancia_regional_B
  └── instancia_regional_C
```

Las realizaciones dejan de ser sistemas aislados.

Pasan a ser recortes diferenciados de una arquitectura común.

---

## 4. Lugar de la Instancia Regional dentro del sistema

La cadena ampliada es:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

Cada componente cumple una función distinta.

```txt
modelo_base_de_regiones:
  organiza el espacio general de regiones posibles

grafo_de_regiones:
  contiene dimensiones, campos, valores y relaciones ya materializados

instancia_regional:
  selecciona una región operable para una realización

instancia_contextual:
  selecciona valores concretos dentro de esa región

adaptador / protocolo:
  transforma la instancia contextual en una salida

codominio:
  define el espacio formal de salida

manifestacion_codominial:
  salida concreta producida dentro del codominio
```

La Instancia Regional ocupa un lugar intermedio entre el sistema mayor y la instancia contextual.

No es todavía una configuración de caso.

Tampoco es el sistema mayor completo.

Es el recorte habilitante que vuelve operable una parte del sistema mayor para una realización específica.

---

## 5. Diferencia entre Modelo Base local e Instancia Regional

La Instancia Regional puede reemplazar al antiguo Modelo Base local, pero no es idéntica a él.

### 5.1. El Modelo Base local definía posibilidades

En la arquitectura anterior, un modelo base local contenía directamente:

- dimensiones;
- campos;
- tipos de valor;
- cardinalidades;
- espacios de valores;
- descripciones;
- restricciones.

Ejemplo abstracto:

```txt
modelo_base_local:
  dimension_1:
    campo_1:
      valores_posibles:
        - valor_a
        - valor_b
        - valor_c
```

### 5.2. La Instancia Regional selecciona posibilidades ya existentes

En la arquitectura nueva, esas dimensiones, campos y valores existen en el sistema mayor.

La Instancia Regional no los redefine.

Los referencia.

Ejemplo abstracto:

```txt
instancia_regional:
  dimension_1:
    id: sistema_mayor-dimension_1

    campos_habilitados:
      campo_1:
        id: sistema_mayor-dimension_1-campo_1
        valores_posibles:
          - valor_a
            id: sistema_mayor-dimension_1-campo_1-valor_a-valor_a
          - valor_b
            id: sistema_mayor-dimension_1-campo_1-valor_b-valor_b
          - valor_c
            id: sistema_mayor-dimension_1-campo_1-valor_c-valor_c
```

### 5.3. Diferencia resumida

```txt
Modelo Base local:
  define el espacio de configuración dentro de una realización local.

Instancia Regional:
  selecciona y referencia un espacio de configuración ya existente
  dentro de una arquitectura mayor.
```

### 5.4. Consecuencia arquitectónica

Con Modelo Base local, cada realización puede tender a convertirse en una isla.

Con Instancia Regional, cada realización conserva pertenencia a una arquitectura común.

---

## 6. Diferencia entre Instancia Regional e Instancia Contextual

Esta diferencia es fundamental.

### 6.1. La Instancia Regional selecciona regiones

La Instancia Regional responde:

```txt
¿Qué dimensiones, campos y valores posibles quedan habilitados para esta realización?
```

Ejemplo:

```txt
instancia_regional_video_corto:
  habilita:
    dimension_marco_de_materializacion
    dimension_comparecencia_performativa
    dimension_composicion_segmental_de_la_salida
```

### 6.2. La Instancia Contextual selecciona valores concretos

La Instancia Contextual responde:

```txt
Dentro de lo habilitado por la Instancia Regional,
¿qué valores toma este caso concreto?
```

Ejemplo:

```txt
instancia_contextual_caso_x:
  dimension_marco_de_materializacion:
    plataforma: tiktok
    aplicacion_de_plataforma: video_tiktok

  dimension_composicion_segmental_de_la_salida:
    duracion_objetivo: breve
    arquitectura_macro: apertura_contraste_resolucion
```

### 6.3. Diferencia resumida

```txt
Instancia Regional:
  habilita posibilidades.

Instancia Contextual:
  selecciona una configuración concreta dentro de esas posibilidades.
```

O en forma analógica:

```txt
Instancia Contextual : Instancia Regional
::
selección de valores : selección de regiones
```

---

## 7. Diferencia entre Instancia Regional y Adaptador

La Instancia Regional no transforma valores en salida.

El Adaptador sí.

La Instancia Regional dice:

```txt
estos campos y valores pueden ser usados para esta realización
```

El Adaptador dice:

```txt
si una instancia contextual activa este valor,
entonces esta parte de la salida debe construirse de esta manera
```

Por eso:

```txt
Instancia Regional:
  delimita espacio operable.

Adaptador:
  proyecta una configuración hacia una manifestación.
```

El Adaptador no debe consumir directamente el sistema mayor completo.

Tampoco debe recibir una Instancia Regional como si fuera ya un caso.

Debe recibir una Instancia Contextual construida dentro del espacio habilitado por la Instancia Regional.

---

## 8. Diferencia entre Instancia Regional y Codominio

La Instancia Regional pertenece al lado de la entrada.

El Codominio pertenece al lado de la salida.

```txt
lado_de_entrada:
  sistema_mayor_de_regiones
  instancia_regional
  instancia_contextual

lado_de_salida:
  codominio
  manifestacion_codominial
```

La Instancia Regional puede contener restricciones que preparan un codominio específico.

Por ejemplo:

```txt
instancia_regional_video_corto_tiktok:
  clase_de_materializacion: guion_audiovisual_breve
  plataforma: tiktok
  aplicacion_de_plataforma: video_tiktok
```

Pero la Instancia Regional no es el codominio.

El codominio define la forma de salida válida.

La Instancia Regional define qué configuración de entrada puede alimentar esa salida.

---

## 9. Componentes internos de una Instancia Regional

Una Instancia Regional debería contener, como mínimo, los siguientes componentes:

```txt
instancia_regional:
  identificacion
  funcion
  realizacion_habilitada
  sistema_mayor_referenciado
  dimensiones_habilitadas
  campos_habilitados
  valores_posibles_habilitados
  valores_regionalmente_fijados
  restricciones_regionales
  compatibilidad_con_instancias_contextuales
  compatibilidad_con_adaptadores
  trazabilidad
  criterios_de_validacion
```

Cada uno cumple una función distinta.

---

## 10. Identificación

Toda Instancia Regional debe declarar su identidad.

Ejemplo:

```yaml
identificacion:
  id: instancia-regional-video-corto-tiktok
  tipo: instancia_regional
  nombre: Instancia Regional — Video corto TikTok
  estado: provisional | validada | en_revision
```

La identificación permite distinguir esta región de otras regiones posibles.

Por ejemplo:

```txt
instancia-regional-video-corto-tiktok
instancia-regional-carrusel-instagram
instancia-regional-newsletter-analitica
instancia-regional-clase-introductoria
```

---

## 11. Función

La función debe explicar qué habilita la Instancia Regional.

Ejemplo:

```txt
Esta Instancia Regional selecciona, dentro del sistema mayor de regiones,
las dimensiones, campos, valores y restricciones que pueden ser usados para
construir instancias contextuales orientadas a guiones audiovisuales breves
para TikTok.
```

La función debe evitar dos errores:

1. No debe describir un caso concreto.
2. No debe formular una salida final.

La función correcta está en el nivel de habilitación.

---

## 12. Realización habilitada

La Instancia Regional debe indicar qué clase de realización habilita.

Ejemplo:

```yaml
realizacion_habilitada:
  tipo: video_corto
  plataforma: tiktok
  familia_codominial_preparada: guion_audiovisual_breve
```

Esto no significa que la Instancia Regional sea la manifestación.

Significa que toda instancia contextual construida desde ella debe permanecer compatible con esa clase de realización.

---

## 13. Sistema mayor referenciado

La Instancia Regional debe declarar cuál es el sistema mayor desde el que selecciona.

Ejemplo:

```yaml
sistema_mayor_referenciado:
  nombre: grafo_de_regiones
  funcion: contiene dimensiones, campos, valores y restricciones ya materializados
```

El punto esencial es que la Instancia Regional no debe duplicar el sistema mayor.

Debe referenciarlo.

---

## 14. Dimensiones habilitadas

Una dimensión habilitada es una dimensión del sistema mayor que queda disponible para las futuras instancias contextuales de la realización.

Ejemplo:

```md
### `dimension_identidad_operativa_de_la_realizacion`

- id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion`
- estado regional: `habilitada`
- función regional: declarar qué realización se está instanciando y con qué grado de centralidad.
```

Cada dimensión habilitada debe incluir su referencia al nodo original.

No basta con nombrarla.

La referencia permite trazabilidad.

---

## 15. Campos habilitados

Un campo habilitado es un campo de una dimensión que queda disponible para ser llenado por una instancia contextual.

Ejemplo:

```md
- `nivel_de_especificidad`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad`
  - estado regional: `habilitado`
  - cardinalidad heredada: `un valor obligatorio`
```

Cuando un campo tenga subcampos internos, la Instancia Regional debe respetar esa estructura.

Ejemplo:

```md
- `dinamica_procesual`
  - id: `...-dinamica_procesual`
  - tipo regional: `campo compuesto habilitado`

  Campos internos habilitados:
  - `explicitud`
    - id: `...-dinamica_procesual-explicitud`

  - `continuidad`
    - id: `...-dinamica_procesual-continuidad`
```

---

## 16. Valores posibles habilitados

Un valor posible habilitado es un valor que una futura instancia contextual puede seleccionar.

Ejemplo:

```md
- `nivel_de_especificidad`
  - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad`
  - valores posibles habilitados:
    - `general`
      - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-general-general`
    - `intermedia`
      - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-intermedia-intermedia`
    - `especifica`
      - id: `grafo_de_regiones-grafo_dimension_identidad_operativa_de_la_realizacion-nivel_de_especificidad-especifica-especifica`
```

La Instancia Regional puede habilitar todos los valores de un campo o solo algunos.

Si habilita solo algunos, debe declararlo explícitamente.

Ejemplo:

```yaml
valores_habilitados:
  - valor_a
  - valor_b

valores_excluidos_regionalmente:
  - valor_c

criterio_de_exclusion: valor_c no es compatible con esta realización o con el codominio preparado.
```

---

## 17. Valores regionalmente fijados

Algunos valores pueden quedar fijados por la propia Instancia Regional.

Esto ocurre cuando una realización específica exige una determinación estable.

Ejemplo:

```yaml
valores_regionalmente_fijados:
  dimension_marco_de_materializacion:
    clase_de_materializacion:
      valor: guion_audiovisual_breve
      id: grafo_de_regiones-grafo_dimension_marco_de_materializacion-clase_de_materializacion-guion_audiovisual_breve-guion_audiovisual_breve

    plataforma:
      valor: tiktok
      id: grafo_de_regiones-grafo_dimension_marco_de_materializacion-plataforma-tiktok-tiktok

    aplicacion_de_plataforma:
      valor: video_tiktok
      id: grafo_de_regiones-grafo_dimension_marco_de_materializacion-aplicacion_de_plataforma-video_tiktok-video_tiktok
```

Esto no convierte la Instancia Regional en instancia contextual.

La diferencia es la siguiente:

```txt
valor regionalmente fijado:
  queda fijado porque define la clase de realización.

valor contextual:
  queda seleccionado porque describe un caso particular.
```

Por ejemplo, en una Instancia Regional para video corto TikTok, `plataforma = tiktok` puede quedar fijado regionalmente.

Pero `funcion_dominante = enseñar` normalmente pertenece a la instancia contextual del caso concreto.

---

## 18. Restricciones regionales

La Instancia Regional debe declarar restricciones que regulan el uso de los campos habilitados.

Estas restricciones pueden ser de tres tipos.

### 18.1. Restricciones heredadas

Son restricciones que ya existen en el sistema mayor y que la Instancia Regional conserva.

Ejemplo:

```txt
publico_objetivo_inmediato debe ser compatible con adecuacion_lexico_formulativa.
```

### 18.2. Restricciones de selección regional

Son restricciones que aparecen porque la Instancia Regional no habilita todo el sistema, sino solo una parte.

Ejemplo:

```txt
Las instancias contextuales construidas desde esta región no deben usar campos no habilitados por la Instancia Regional, salvo declaración explícita de extensión regional.
```

### 18.3. Restricciones codominiales preparatorias

Son restricciones que aparecen porque la región está orientada a un codominio o familia de salida.

Ejemplo:

```txt
Toda instancia contextual construida desde esta región debe producir una configuración compatible con guion audiovisual breve para TikTok.
```

---

## 19. Relación con las instancias contextuales

La Instancia Regional funciona como contrato de posibilidad para futuras instancias contextuales.

Una instancia contextual válida debe declarar:

```yaml
instancia_regional_usada: instancia-regional-video-corto-tiktok
```

Y debe seleccionar valores únicamente dentro de lo habilitado por esa Instancia Regional.

Ejemplo:

```yaml
instancia_contextual:
  instancia_regional_usada: instancia-regional-video-corto-tiktok

  configuracion:
    dimension_orientacion_funcional_pragmatica:
      funcion_dominante: enseñar
      efecto_buscado:
        dominante: comprension_rapida
        secundarios:
          - curiosidad
      accion_esperada:
        - ver_hasta_el_final
        - guardar
```

La instancia contextual no debe introducir dimensiones nuevas como si fueran parte del espacio habilitado.

Si necesita hacerlo, debe declararse una extensión regional.

---

## 20. Relación con adaptadores y protocolos

El Adaptador o Protocolo no debe recibir directamente el sistema mayor completo.

Debe recibir una instancia contextual ya construida.

Sin embargo, el Adaptador debe saber qué Instancia Regional habilitó esa instancia contextual, porque eso permite validar:

- qué campos eran admisibles;
- qué valores podían aparecer;
- qué restricciones estaban activas;
- qué clase de realización se esperaba;
- qué codominio se estaba preparando.

La cadena correcta es:

```txt
instancia_regional
  → instancia_contextual
    → adaptador / protocolo
      → manifestacion_codominial
```

No debe ser:

```txt
grafo_de_regiones_completo
  → adaptador
```

ni:

```txt
instancia_regional
  → adaptador
```

La Instancia Regional habilita.

La Instancia Contextual configura.

El Adaptador proyecta.

---

## 21. Relación con codominio y manifestación codominial

La Instancia Regional puede estar orientada a una familia codominial.

Ejemplo:

```yaml
familia_codominial_preparada: guion_audiovisual_breve
```

Pero no sustituye la especificación codominial.

La especificación codominial debe seguir existiendo como documento separado cuando sea necesario.

Ejemplo:

```txt
codominios/salida-esperada.md
```

La manifestación codominial sigue siendo una salida concreta.

Ejemplo:

```txt
ejemplos/fouquet/manifestacion-codominial-fouquet-luis-xiv.md
```

La Instancia Regional no produce la manifestación.

Solo determina qué tipo de configuración puede alimentar el proceso que la producirá.

---

## 22. Estructura de carpetas recomendada

La migración recomendada es pasar de esta estructura:

```txt
video-corto/
  modelos-base/
    mb-contenido-digital.md

  protocolos/
    protocolo-videos-cortos.md

  codominios/
    salida-esperada.md

  ejemplos/
    caso_x/
      instancia-contextual.md
      manifestacion-codominial.md
```

A esta estructura:

```txt
video-corto/
  instancias-regionales/
    instancia-regional-video-corto-tiktok.md

  protocolos/
    protocolo-videos-cortos.md

  codominios/
    salida-esperada.md

  ejemplos/
    caso_x/
      instancia-contextual.md
      manifestacion-codominial.md
```

La carpeta eliminada o reemplazada es:

```txt
modelos-base/
```

La carpeta nueva es:

```txt
instancias-regionales/
```

El contenido de `mb-contenido-digital.md` no debe perderse. Debe reinterpretarse como lista de elementos que la Instancia Regional puede seleccionar desde el sistema mayor.

---

## 23. Estructura mínima recomendada de un archivo de Instancia Regional

Un archivo de Instancia Regional debería seguir esta forma mínima:

```md
# Instancia Regional — Nombre de la realización

## 0. Identificación

- id:
- tipo: `instancia_regional`
- realización habilitada:
- sistema mayor referenciado:
- codominio preparado:
- adaptador compatible:
- estado:

## 1. Función

Descripción de qué región habilita y para qué clase de realización.

## 2. Región seleccionada

### 2.1. `dimension_x`

- id: `id_canonico_de_la_dimension`
- estado regional: `habilitada`

Campos habilitados:

- `campo_a`
  - id: `id_canonico_del_campo`
  - valores posibles habilitados:
    - `valor_1`
      - id: `id_canonico_del_valor_1`
    - `valor_2`
      - id: `id_canonico_del_valor_2`

## 3. Valores regionalmente fijados

Valores que quedan determinados por la clase de realización.

## 4. Restricciones regionales

Restricciones heredadas, restricciones de selección y restricciones codominiales preparatorias.

## 5. Relación con instancias contextuales

Cómo deben construirse las instancias contextuales desde esta región.

## 6. Relación con adaptador/protocolo

Qué adaptador puede consumir las instancias contextuales generadas desde esta región.

## 7. Validación

Checklist para declarar válida la Instancia Regional.
```

---

## 24. Ejemplo abstracto de Instancia Regional

```yaml
instancia_regional:
  id: instancia-regional-ejemplo
  tipo: instancia_regional
  realizacion_habilitada: realizacion_x
  sistema_mayor_referenciado: grafo_de_regiones
  codominio_preparado: codominio_x
  adaptador_compatible: adaptador_x

  dimensiones_habilitadas:
    dimension_1:
      id: grafo_de_regiones-grafo_dimension_1
      campos_habilitados:
        campo_1_1:
          id: grafo_de_regiones-grafo_dimension_1-campo_1_1
          valores_posibles:
            valor_a:
              id: grafo_de_regiones-grafo_dimension_1-campo_1_1-valor_a-valor_a
            valor_b:
              id: grafo_de_regiones-grafo_dimension_1-campo_1_1-valor_b-valor_b
            valor_c:
              id: grafo_de_regiones-grafo_dimension_1-campo_1_1-valor_c-valor_c

        campo_1_2:
          id: grafo_de_regiones-grafo_dimension_1-campo_1_2
          valores_posibles:
            valor_d:
              id: grafo_de_regiones-grafo_dimension_1-campo_1_2-valor_d-valor_d
            valor_e:
              id: grafo_de_regiones-grafo_dimension_1-campo_1_2-valor_e-valor_e

    dimension_2:
      id: grafo_de_regiones-grafo_dimension_2
      campos_habilitados:
        campo_2_1:
          id: grafo_de_regiones-grafo_dimension_2-campo_2_1
          valores_posibles:
            valor_f:
              id: grafo_de_regiones-grafo_dimension_2-campo_2_1-valor_f-valor_f
            valor_g:
              id: grafo_de_regiones-grafo_dimension_2-campo_2_1-valor_g-valor_g

  valores_regionalmente_fijados:
    dimension_2:
      campo_2_1:
        valor: valor_f
        id: grafo_de_regiones-grafo_dimension_2-campo_2_1-valor_f-valor_f
        razon: define la clase de realización habilitada

  restricciones_regionales:
    - toda instancia contextual debe seleccionar valores dentro de los campos habilitados
    - los valores regionalmente fijados no deben ser reabiertos por la instancia contextual salvo extensión explícita
    - la configuración resultante debe ser compatible con el adaptador_x
```

---

## 25. Instancia Regional e identidad de nodos

Una Instancia Regional debe conservar trazabilidad hacia el sistema mayor.

Por eso, cuando mencione dimensiones, campos o valores, debe incluir sus `id` canónicos.

La forma general puede ser:

```txt
dimension:
  grafo_de_regiones-grafo_<nombre_dimension>

campo:
  grafo_de_regiones-grafo_<nombre_dimension>-<nombre_campo>

valor:
  grafo_de_regiones-grafo_<nombre_dimension>-<nombre_campo>-<valor>-<valor>
```

Cuando haya campos compuestos o campos internos, el patrón debe respetar la profundidad real del nodo.

Ejemplo abstracto:

```txt
campo_compuesto:
  grafo_de_regiones-grafo_dimension_x-campo_compuesto

campo_interno:
  grafo_de_regiones-grafo_dimension_x-campo_compuesto-campo_interno

valor_del_campo_interno:
  grafo_de_regiones-grafo_dimension_x-campo_compuesto-campo_interno-valor-valor
```

La Instancia Regional no debe inventar estos ids.

Debe tomarlos del sistema mayor ya materializado.

---

## 26. Instancia Regional como estructura de trazabilidad

La Instancia Regional permite rastrear el recorrido completo:

```txt
nodo_del_sistema_mayor
  → habilitación_regional
    → selección_contextual
      → regla_del_adaptador
        → componente_de_manifestación
```

Sin Instancia Regional, la instancia contextual puede parecer una selección suelta de valores.

Con Instancia Regional, cada valor contextual puede justificarse como selección dentro de un espacio regional previamente habilitado.

Esto permite responder:

- ¿de qué nodo proviene este campo?;
- ¿por qué este campo estaba disponible para esta realización?;
- ¿qué valores podía seleccionar la instancia contextual?;
- ¿qué valores estaban regionalmente fijados?;
- ¿qué restricciones limitaban la selección?;
- ¿qué adaptador podía operar sobre esa configuración?;
- ¿qué parte de la manifestación resultó afectada?

---

## 27. Tipos de Instancia Regional

Pueden existir distintos tipos de Instancia Regional.

### 27.1. Instancia Regional completa

Habilita todas las dimensiones, campos y valores necesarios para que las instancias contextuales puedan construirse sin ambigüedad.

```txt
estado: completa
```

### 27.2. Instancia Regional parcial

Habilita solo una parte del espacio necesario y requiere ampliación posterior.

```txt
estado: parcial
```

### 27.3. Instancia Regional provisional

Se propone como hipótesis de trabajo y debe ser validada contra el sistema mayor y contra el adaptador.

```txt
estado: provisional
```

### 27.4. Instancia Regional validada

Fue revisada y puede ser usada como base para construir instancias contextuales.

```txt
estado: validada
```

### 27.5. Instancia Regional especializada

Está orientada a una realización muy específica.

Ejemplo:

```txt
instancia-regional-video-corto-tiktok
```

### 27.6. Instancia Regional portable

Puede servir como base para varias realizaciones cercanas o para una familia de adaptadores.

Ejemplo:

```txt
instancia-regional-video-corto-general
```

---

## 28. Validación de una Instancia Regional

Una Instancia Regional debe validarse antes de ser usada para construir instancias contextuales.

La validación debe revisar al menos:

1. **Existencia de referencias**  
   Cada dimensión, campo y valor referenciado debe existir en el sistema mayor.

2. **No redefinición**  
   La Instancia Regional no debe copiar el sistema mayor como si lo estuviera recreando.

3. **Completitud suficiente**  
   Debe habilitar los campos necesarios para que una instancia contextual pueda ser operable.

4. **Claridad de valores fijados**  
   Los valores fijados regionalmente deben distinguirse de los valores que quedan abiertos a selección contextual.

5. **Compatibilidad codominial**  
   El recorte debe ser compatible con el codominio preparado.

6. **Compatibilidad con adaptador**  
   El adaptador previsto debe poder leer instancias contextuales construidas desde esta región.

7. **Restricciones explícitas**  
   Deben declararse restricciones heredadas, regionales y codominiales preparatorias.

8. **Trazabilidad**  
   Debe ser posible rastrear cada campo hacia su nodo de origen.

9. **No selección contextual anticipada**  
   La Instancia Regional no debe llenar valores de caso salvo que sean valores fijados por la propia clase de realización.

10. **No apertura silenciosa**  
    Si se habilitan valores no presentes en el sistema mayor, debe declararse como extensión y no como referencia existente.

---

## 29. Errores frecuentes

### 29.1. Confundir Instancia Regional con Modelo Base local

La Instancia Regional no redefine el modelo.

Selecciona desde un sistema mayor.

### 29.2. Confundir Instancia Regional con Instancia Contextual

La Instancia Regional no selecciona valores concretos de caso.

Habilita valores posibles.

### 29.3. Confundir valores fijados regionalmente con valores contextuales

Un valor fijado regionalmente pertenece a la clase de realización.

Un valor contextual pertenece al caso particular.

### 29.4. Omitir ids canónicos

Una Instancia Regional sin ids pierde trazabilidad.

Nombrar un campo no basta.

Debe referenciarse el nodo específico.

### 29.5. Usar campos no habilitados

Una instancia contextual no debe usar campos fuera de la Instancia Regional salvo extensión explícita.

### 29.6. Hacer que el adaptador consuma el sistema mayor

El adaptador debe consumir una instancia contextual, no todo el sistema mayor.

### 29.7. Tratar la Instancia Regional como salida

La Instancia Regional no es guion, carrusel, clase, newsletter ni landing.

Es una estructura de habilitación.

### 29.8. Duplicar el sistema mayor dentro de la Instancia Regional

La Instancia Regional debe ser referencial.

Si copia todo el sistema mayor, pierde su función de recorte.

---

## 30. Relación con los documentos existentes de `definiciones/`

Los documentos existentes pueden seguir funcionando con ajustes conceptuales.

### 30.1. Relación con `planteamiento-modelo-base.md`

El documento de Modelo Base sigue siendo útil como definición general de una estructura de inteligibilidad.

Pero en la nueva arquitectura, cuando se trate de una realización específica, no debe asumirse necesariamente que existe un modelo base local.

La función local debe ser asumida por la Instancia Regional.

Cambio recomendado:

```txt
antes:
  modelo_base_local define posibilidades para una realización.

ahora:
  instancia_regional referencia posibilidades ya existentes
  dentro del sistema mayor para una realización.
```

### 30.2. Relación con `planteamiento-instancia-contextual.md`

La definición de Instancia Contextual sigue funcionando, pero debe actualizar su fuente inmediata.

Cambio recomendado:

```txt
antes:
  Instancia Contextual = configuración particular dentro de un Modelo Base.

ahora:
  Instancia Contextual = configuración particular dentro del espacio habilitado por una Instancia Regional.
```

La Instancia Contextual sigue seleccionando valores.

Lo que cambia es que esos valores ya no provienen de un modelo base local, sino de un recorte regional referenciado.

### 30.3. Relación con `planteamiento-adaptador.md`

El Adaptador sigue cumpliendo la misma función: proyectar una instancia contextual hacia una manifestación codominial.

Cambio recomendado:

```txt
antes:
  el adaptador espera una instancia contextual construida sobre un modelo base.

ahora:
  el adaptador espera una instancia contextual construida dentro de una instancia regional.
```

### 30.4. Relación con `planteamiento-general-codominio-manifestacion-codominial.md`

El Codominio y la Manifestación Codominial no cambian en su función principal.

La Instancia Regional solo prepara el lado de entrada para que pueda producirse una configuración compatible con el codominio.

### 30.5. Relación con `documento-unificacion-sistema-transferencia-estructural.md`

El documento de unificación debe ampliarse para reconocer un paso adicional entre el sistema mayor y la instancia contextual.

Cambio recomendado:

```txt
antes:
  estructura interna
    → modelo_base
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial

ahora:
  estructura interna / sistema mayor de regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

O, si se conserva el nivel superior:

```txt
modelo_base_de_regiones
  → grafo_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador / protocolo
          → codominio
            → manifestacion_codominial
```

---

## 31. Patrón de uso general

Una IA que trabaje con este sistema debe seguir este patrón:

### 31.1. Identificar el sistema mayor

Primero debe reconocer dónde están las dimensiones, campos y valores ya definidos.

### 31.2. Identificar la realización

Después debe reconocer qué clase de salida se quiere habilitar.

Ejemplo:

```txt
video corto TikTok
carrusel Instagram
newsletter analítica
clase introductoria
```

### 31.3. Construir o leer la Instancia Regional

Debe revisar qué dimensiones, campos y valores están habilitados para esa realización.

### 31.4. Construir la Instancia Contextual

Debe seleccionar valores concretos solo dentro del espacio habilitado.

### 31.5. Aplicar el Adaptador

Debe usar el protocolo correspondiente para producir una manifestación codominial.

### 31.6. Validar trazabilidad

Debe poder explicar cómo la salida se relaciona con:

```txt
sistema mayor → instancia regional → instancia contextual → adaptador → manifestación
```

---

## 32. Fórmula general

La Instancia Regional puede formularse así:

```txt
instancia_regional = seleccion_regional(
  sistema_mayor_de_regiones,
  realizacion_objetivo,
  codominio_preparado,
  criterios_de_habilitacion
)
```

Su salida es:

```txt
espacio_configurable_de_realizacion
```

Luego:

```txt
instancia_contextual = seleccion_contextual(
  instancia_regional,
  caso,
  contexto,
  criterios_de_seleccion
)
```

Y finalmente:

```txt
adaptador(instancia_contextual) → manifestacion_codominial
```

Cadena completa:

```txt
sistema_mayor_de_regiones
  → instancia_regional
    → instancia_contextual
      → adaptador / protocolo
        → manifestacion_codominial
```

---

## 33. Definición larga consolidada

Una Instancia Regional es una estructura de habilitación que selecciona, por referencia, una región operable dentro de un sistema mayor de dimensiones, campos, valores y restricciones. Su función es delimitar qué partes de ese sistema mayor estarán disponibles para construir instancias contextuales de una realización específica. A diferencia de un Modelo Base local, no redefine el espacio de configuración, sino que lo recorta y lo vuelve trazable mediante referencias a los nodos ya existentes. A diferencia de una Instancia Contextual, no selecciona todavía valores concretos de caso, sino valores posibles y, cuando corresponde, valores regionalmente fijados por la clase de realización. Su posición dentro del sistema es anterior a la Instancia Contextual y posterior al sistema mayor de regiones.

---

## 34. Definición corta consolidada

Una Instancia Regional es un recorte referencial del sistema mayor que habilita las dimensiones, campos, valores y restricciones disponibles para construir instancias contextuales de una realización específica.

---

## 35. Definición operativa propuesta

Operativamente, una Instancia Regional es el documento que declara:

```txt
1. qué realización se habilita;
2. qué sistema mayor se referencia;
3. qué dimensiones quedan activas;
4. qué campos quedan disponibles;
5. qué valores posibles puede seleccionar una instancia contextual;
6. qué valores quedan fijados por la clase de realización;
7. qué restricciones aplican;
8. qué adaptador o protocolo puede consumir las instancias contextuales derivadas;
9. y cómo se conserva trazabilidad hacia los nodos originales.
```

---

## 36. Fórmula sintética

```txt
Modelo Base de Regiones:
  organiza el sistema mayor.

Grafo de Regiones:
  materializa dimensiones, campos, valores y relaciones.

Instancia Regional:
  selecciona una región operable para una realización.

Instancia Contextual:
  selecciona valores concretos dentro de esa región.

Adaptador:
  proyecta la configuración hacia un codominio.

Manifestación Codominial:
  aparece como salida concreta.
```

O de forma todavía más compacta:

```txt
Instancia Regional:
  define el espacio regionalmente habilitado de lo configurable.
```

---

## 37. Cierre

La Instancia Regional permite conservar la potencia de los antiguos modelos base locales sin mantener su principal debilidad: la duplicación.

En lugar de crear un modelo base completo dentro de cada realización, se construye una selección regional que referencia un sistema mayor ya existente.

Esto permite que varias realizaciones:

- compartan una arquitectura común;
- seleccionen ramas distintas;
- mantengan trazabilidad;
- eviten redefinir dimensiones y valores;
- produzcan instancias contextuales compatibles;
- y sigan alimentando adaptadores, codominios y manifestaciones codominiales.

La migración conceptual puede resumirse así:

```txt
antes:
  modelo_base_local
    → instancia_contextual
      → adaptador
        → manifestacion_codominial

ahora:
  sistema_mayor_de_regiones
    → instancia_regional
      → instancia_contextual
        → adaptador
          → manifestacion_codominial
```

La Instancia Regional es, por tanto, la pieza que permite pasar de modelos base locales a una arquitectura común de regiones seleccionables.
