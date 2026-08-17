https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a827cfa-bc88-83e8-9749-cac2fea47e6d

# CATÁLOGO DE PATRONES DE DISEÑO COGNITIVO REUTILIZABLES

**ID:** `INT-CATALOGO-DE-PATRONES-COGNITIVOS-TRANSFERIBLES-001`  
**Versión:** `0.1.0`  
**Estado:** `EXPLORATORY / CROSS_CUTTING / NON_CANONICAL`  
**Tipo:** catálogo de estructuras cognitivas transferibles  
**Propósito:** identificar formas recurrentes que puedan ser reutilizadas por paquetes cognitivos diferentes sin quedar ancladas al dominio donde fueron descubiertas.

---

# 0. PRINCIPIO DE LECTURA

Este catálogo no clasifica estructuras por tema.

Una estructura se reconoce por:

```text
FUNCIÓN
+
NODOS / COMPONENTES
+
RELACIONES
+
FLUJOS
+
INVARIANTES
+
DOMINIO DE VARIACIÓN
+
CONDICIONES DE ACTIVACIÓN
+
EFECTO
```

Por tanto:

```text
MISMA ESTRUCTURA
+
DISTINTO CONTEXTO
=
POSIBLE ADAPTACIÓN CONTEXTUAL
```

y:

```text
MISMO VOCABULARIO
≠
MISMA ESTRUCTURA
```

Las estructuras siguientes se presentan como **patrones de diseño**, no como teorías de un dominio concreto.

---

# 1. VOCABULARIO MÍNIMO

## FUENTE

Entidad o sistema que origina, selecciona o suministra una entrada.

## MATERIAL

Aquello que entra o puede entrar al sistema.

## MEDIACIÓN

Transformación, canal o interfaz mediante la cual el material llega a otra capa.

## SISTEMA RECEPTOR

Sistema que recibe, integra o transforma material.

Puede ser:

- individuo;
- equipo;
- organización;
- módulo;
- IA;
- arquitectura humano–IA;
- sistema compuesto.

## ESTADO

Configuración del sistema en un momento determinado.

## CHAIN

Camino funcional concreto activado dentro de una arquitectura mayor para producir un efecto.

## SUBGRAFO

Región de una arquitectura de red que contiene nodos y relaciones suficientes para realizar una función o participar en ella.

## MANIFESTACIÓN

Salida observable que materializa sólo una parte de una arquitectura o estado subyacente.

## LOCUS DE GOBIERNO

Entidad, conjunto de entidades o capacidad funcional desde la cual se preservan fines, criterios, autorizaciones, prioridades, veto y capacidad de revisión.

---

# FAMILIA A — FUENTES, ENTRADAS Y APROVISIONAMIENTO

---

# PAT-COG-001 — SEPARACIÓN FUENTE / MATERIAL / MEDIACIÓN / RECEPCIÓN

## Intención

Evitar que se confundan el origen de una entrada, la entrada misma, el mecanismo que la transporta o transforma y la representación finalmente integrada.

## Estructura

```text
FUENTE
   ↓
MATERIAL / SEÑAL
   ↓
CANAL / MEDIACIÓN
   ↓
RECEPCIÓN
   ↓
INTEGRACIÓN
   ↓
REPRESENTACIÓN INTERNA
```

## Regla nuclear

```text
FUENTE
≠
MATERIAL
≠
CANAL
≠
MEDIACIÓN
≠
REPRESENTACIÓN INTERNA
```

## Invariantes

- existe un origen;
- existe algo transferido;
- existe una interfaz o medio;
- el receptor no obtiene necesariamente una copia idéntica del material;
- la integración produce una representación interna.

## Utilidad

Útil cuando un paquete debe razonar sobre procedencia, transformación, confianza, percepción, comunicación, sensores o interpretación.

---

# PAT-COG-002 — CONVERGENCIA DE FUENTES HETEROGÉNEAS

## Intención

Construir una representación a partir de entradas parciales provenientes de fuentes diferentes.

## Estructura

```text
FUENTE A ──┐
FUENTE B ──┼────→ INTEGRACIÓN ──→ REPRESENTACIÓN
FUENTE C ──┘
```

## Variante reflexiva

```text
FUENTE A ──┐
FUENTE B ──┼─────────┐
FUENTE C ──┘         │
                     ▼
                 INSPECCIÓN
                     │
              ┌──────┼──────┐
              ▼      ▼      ▼
         evidencia  marco  interés
              │      │      │
              └──────┼──────┘
                     ▼
                  CRITERIO
                   HUMANO
                     │
                     ▼
              INTERPRETACIÓN
                 REVISABLE
                     │
                     ▼
                  OBJETIVO
                     │
                     ▼
                   ACCIÓN
                     │
                     ▼
                   MUNDO
                     │
                     ▼
                 EVIDENCIA
                     │
                     └────────↺
```

## Invariantes

- múltiples entradas;
- integración no trivial;
- evaluación de procedencia;
- posibilidad de contradicción;
- salida revisable.

## Problema que evita

```text
UNA FUENTE
=
LA REALIDAD
```

---

# PAT-COG-003 — MATERIAL DE ORDEN 1 / MATERIAL DE ORDEN 2

## Intención

Separar aquello que describe señales o acontecimientos de aquello que ya incorpora interpretación, valoración o significado.

## Estructura

```text
MATERIAL
   │
   ├── ORDEN 1
   │      ├─ señales
   │      ├─ hechos
   │      ├─ observaciones
   │      ├─ datos
   │      └─ acontecimientos
   │
   └── ORDEN 2
          ├─ interpretación
          ├─ significado
          ├─ marco
          ├─ valor
          ├─ narrativa
          ├─ causalidad propuesta
          ├─ criterio
          └─ objetivo sugerido
```

## Regla

```text
DATO
≠
INTERPRETACIÓN DEL DATO
```

## Nota estructural

Orden 2 no tiene una posición topológica fija. Puede construirse:

```text
POR LA FUENTE
POR LA MEDIACIÓN
POR EL RECEPTOR
```

---

# PAT-COG-004 — FUENTE MIXTA

## Intención

Representar fuentes que no entregan observaciones puras sino observaciones ya procesadas.

## Estructura

```text
FUENTE
   ↓
HECHO / SEÑAL
+
MARCO
+
SIGNIFICADO
+
VALOR
+
RELACIÓN CAUSAL
+
CRITERIO
```

## Utilidad

Permite marcar cuánto procesamiento previo contiene una entrada antes de integrarla.

---

# PAT-COG-005 — DISTANCIA DE OBSERVABILIDAD

## Intención

Medir la diferencia entre lo que ocurre, lo que el sistema sabe y lo que todavía puede hacer a tiempo.

## Estructura

```text
LO QUE ESTÁ OCURRIENDO
          ↓
LO QUE EL SISTEMA SABE
          ↓
LO QUE EL SISTEMA PUEDE HACER A TIEMPO
```

## Riesgo

Cuanto mayor sea la distancia entre estas capas, mayor puede ser la pérdida de capacidad de intervención.

---

# PAT-COG-006 — VALIDACIÓN ANTES DE INTEGRACIÓN

## Intención

Evitar que cualquier entrada se convierta automáticamente en estado interno aceptado.

## Estructura

```text
ENTRADA
   ↓
PROCEDENCIA
   ↓
CONFIANZA
   ↓
CONTRASTE
   ↓
VALIDACIÓN
   ↓
INTEGRACIÓN
```

## Invariantes

- la entrada conserva estado epistemológico;
- la confianza puede variar;
- integrar es una decisión, no una consecuencia automática de recibir.

---

# PAT-COG-007 — DISTRIBUCIÓN SELECTIVA DE INFORMACIÓN

## Intención

Enviar sólo la información pertinente al nodo que puede utilizarla.

## Estructura

```text
INFORMACIÓN CORRECTA
        ↓
NODO CORRECTO
        ↓
MOMENTO CORRECTO
        ↓
RESOLUCIÓN SUFICIENTE
```

## Funciones asociadas

- curaduría;
- priorización;
- compresión;
- filtrado;
- escalamiento;
- routing.

---

# PAT-COG-008 — FUENTES COMPETIDORAS DE INTERPRETACIÓN

## Intención

Representar situaciones donde varias fuentes no sólo informan, sino que compiten por definir significado.

## Estructura

```text
FUENTE A ──→ MODELO A ──┐
FUENTE B ──→ MODELO B ──┼──→ SISTEMA RECEPTOR
FUENTE C ──→ MODELO C ──┘
```

## Extensión

```text
NECESIDAD DE SENTIDO
        ↓
DEMANDA DE EXPLICACIÓN
        ↓
FUENTES COMPITEN
        ↓
OFRECEN MODELOS
        ↓
SUJETO / SISTEMA
ADOPTA / RECHAZA / COMBINA
```

---

# PAT-COG-009 — FUENTE DE REALIDAD

## Intención

Modelar una fuente que adquiere autoridad para suministrar explicaciones sobre cómo es el mundo y qué significa.

## Estructura

```text
FUENTE
   ├─ suministra hechos
   ├─ suministra categorías
   ├─ suministra interpretación
   ├─ suministra significado
   ├─ suministra criterios
   └─ suministra objetivos
```

## Riesgo

Cuando una sola fuente controla simultáneamente:

```text
AFIRMACIÓN
+
EVIDENCIA
+
INTERPRETACIÓN
+
CRITERIO
+
VALIDACIÓN
```

se produce concentración epistemológica.

---

# FAMILIA B — REDES, GRAFOS Y PROPAGACIÓN

---

# PAT-COG-010 — CONVERGENCIA ASOCIATIVA MULTICANAL

## Intención

Modelar cómo estímulos distintos activan regiones diferentes que convergen en una interpretación o decisión común.

## Estructura

```text
MENSAJE A ──→ MEMORIA ─────┐
                           │
MENSAJE B ──→ EMOCIÓN ─────┼──→ INTERPRETACIÓN
                           │
EVENTO C ───→ IDENTIDAD ───┘
                              │
                              ▼
                           DECISIÓN
```

## Invariantes

- entradas diferentes;
- activaciones internas diferentes;
- convergencia;
- efecto emergente en una capa posterior.

## Variaciones

Las ramas pueden ser:

- memoria;
- emoción;
- valor;
- identidad;
- expectativa;
- objetivo;
- hábito;
- modelo causal.

---

# PAT-COG-011 — NODO CENTRAL + SUBGRAFO SATÉLITE

## Intención

Representar una unidad cognitiva cuyo efecto no reside en un nodo aislado, sino en el vecindario que activa o coordina.

## Estructura

```text
            P1
             \
P2 ──────── P0 ─────── P3
             │
         ┌───┴───┐
         P4      P5
                  │
                  ▼
                  P6
```

## Lectura

`P0` puede ser:

- proposición central;
- evento;
- concepto;
- objetivo;
- decisión;
- nodo de alta centralidad.

`P1...P6` no son “decoración”; son nodos funcionales del efecto.

## Principio

```text
EFECTO(P0)
≠
P0 AISLADO
```

Más precisamente:

```text
EFECTO
=
P0
+
VECINDARIO ACTIVADO
+
RELACIONES
+
PESOS
+
CONTEXTO
```

---

# PAT-COG-012 — SUBGRAFO COMO UNIDAD DE EFECTO

## Intención

Tratar una región relacional como unidad mínima funcional cuando un nodo aislado no explica el resultado.

## Estructura

```text
SUBGRAFO
=
NODOS
+
RELACIONES
+
CONDICIONES
+
FUNCIÓN EMERGENTE
```

## Principio

```text
CAPACIDAD
puede residir
EN LA CONFIGURACIÓN
y no
EN UN NODO INDIVIDUAL
```

---

# PAT-COG-013 — CHAIN COMO TRAYECTORIA DERIVADA DE RED

## Intención

Distinguir la arquitectura total del camino concreto activado para producir un efecto.

## Estructura

```text
GRAFO MAYOR
      ↓
SELECCIÓN / CONFIGURACIÓN
      ↓
CHAIN
      ↓
EJECUCIÓN
      ↓
EFECTO
```

## Definición

```text
CHAIN
=
camino funcional concreto
dentro de una arquitectura mayor
```

## Regla

```text
CHAIN
≠
SISTEMA COMPLETO
```

---

# PAT-COG-014 — CAPACIDAD REUTILIZABLE COMO NODO COMPUESTO

## Intención

Representar una estructura reusable que puede participar como una unidad dentro de chains mayores.

## Estructura

```text
CHAIN
=
NODO A
→ CAPACIDAD COMPUESTA B
→ NODO C
→ CAPACIDAD COMPUESTA D
→ EFECTO
```

## Principio

```text
CAPACIDAD REUTILIZABLE
≠
CHAIN
```

La capacidad puede ser invocada por múltiples chains.

---

# PAT-COG-015 — MANIFESTACIÓN COMO CORTE DE UN GRAFO MAYOR

## Intención

Evitar confundir una salida visible con la arquitectura completa que la produjo.

## Estructura

```text
GRAFO MAYOR
      ↓
CORTE / SELECCIÓN
      ↓
PROYECCIÓN
      ↓
MANIFESTACIÓN
```

## Regla nuclear

```text
MANIFESTACIÓN
≠
SISTEMA
```

Una manifestación es una **materialización parcial**.

---

# PAT-COG-016 — TRIPLE RED: PROYECTADA / REALIZADA / ACTIVADA

## Intención

Separar intención estructural, realización concreta y efecto efectivo en el receptor.

## Estructura

```text
RED PROYECTADA
      ↓
REALIZACIÓN
      ↓
RED REALIZADA
      ↓
CONTACTO CON RECEPTOR
      ↓
RED ACTIVADA
      ↓
CAMBIO DE ESTADO
```

## Distinciones

```text
LO QUE SE QUISO PROYECTAR
≠
LO QUE EFECTIVAMENTE SE MATERIALIZÓ
≠
LO QUE EFECTIVAMENTE SE ACTIVÓ
```

---

# PAT-COG-017 — RED DE EFECTOS COGNITIVOS

## Intención

Modelar la propagación desde fuentes hasta cambios de estado y acciones.

## Estructura

```text
FUENTES
│
├─ mensaje
├─ evento
├─ imagen
├─ interacción
└─ experiencia
        │
        ▼
TRANSDUCCIÓN
        │
        ▼
NODOS COGNITIVOS
│
├─ conceptos
├─ memorias
├─ emociones
├─ creencias
├─ valores
├─ identidades
└─ objetivos
        │
        ▼
SUBGRAFOS ACTIVADOS
        │
        ▼
ESTADO
        │
        ▼
UMBRAL
        │
        ▼
DECISIÓN
        │
        ▼
ACCIÓN
```

## Regla

No debe interpretarse como cadena necesariamente lineal.

Puede contener:

- rutas paralelas;
- refuerzos;
- inhibiciones;
- ciclos;
- feedback;
- latencias;
- nodos de resistencia;
- gates.

---

# PAT-COG-018 — RED DE EFECTOS CON GOBIERNO REFLEXIVO

## Intención

Añadir filtrado, resistencia y soberanía a una red de propagación.

## Estructura

```text
FUENTE
↓
MATERIAL COGNITIVO
↓
MARCO / SIGNIFICADO / VALOR
↓
TRANSDUCCIÓN
↓
┌──────────────────────────┐
│ GOBIERNO REFLEXIVO       │
│                          │
│ inspección               │
│ verificación             │
│ comparación              │
│ veto                     │
│ actualización            │
└─────────────┬────────────┘
              ↓
RED COGNITIVA
              ↓
ESTADO
              ↓
DECISIÓN
              ↓
ACCIÓN
              ↓
NUEVO MATERIAL COGNITIVO
              ↓
OTROS SISTEMAS
```

## Principio

La red no sólo propaga.

También puede:

```text
RESISTIR
FILTRAR
VALIDAR
VETAR
REVISAR
```

---

# PAT-COG-019 — RECEPTOR QUE SE CONVIERTE EN FUENTE

## Intención

Modelar propagación social o sistémica donde una salida se convierte en entrada para otro sistema.

## Estructura

```text
FUENTE
  ↓
RECEPTOR A
  ↓
MANIFESTACIÓN A
  ↓
RECEPTOR B
  ↓
MANIFESTACIÓN B
  ↓
RECEPTOR C
```

Forma compacta:

```text
SOURCE_i
   ↓
G_i
   ↓
ΔG_i
   ↓
MANIFESTACIÓN_i
   ↓
SOURCE_j
```

## Consecuencia

La propagación no es broadcast simple; es una red de transformaciones sucesivas.

---

# PAT-COG-020 — RECONFIGURACIÓN DE GRAFO COMO OPERACIÓN

## Intención

Representar una intervención como cambio estructural y no sólo como cambio de contenido.

## Estructura

```text
G0
   ↓ intervención
ΔPESOS
+
ΔRELACIONES
+
ΔNODOS
+
ΔTOPOLOGÍA
   ↓
G1
```

## Tipos de cambio

```text
REPONDERACIÓN
RETÓPOLOGIZACIÓN
RECENTRALIZACIÓN
CREACIÓN DE RUTAS
ELIMINACIÓN DE RUTAS
```

---

# PAT-COG-021 — CAMBIO DE FUENTE DOMINANTE

## Intención

Representar cambios donde una función cognitiva o sistémica pasa a depender de otra fuente.

## Estructura

Antes:

```text
FUENTE_A ──→ IDENTIDAD / INTERPRETACIÓN
```

Después:

```text
FUENTE_A ──x
FUENTE_B ─────→ IDENTIDAD / INTERPRETACIÓN
```

## Lectura

No es sólo cambio de peso.

Puede ser un cambio de topología y centralidad.

---

# PAT-COG-022 — AUTOSIMILITUD ESTRUCTURAL MULTIESCALA

## Intención

Representar la repetición aproximada de una misma forma funcional a distintas escalas.

## Estructura

```text
NIVEL n
FUENTES
→ INTEGRACIÓN
→ ESTADO
→ OBJETIVO
→ CHAIN
→ ACCIÓN
→ FEEDBACK

        ↓ misma forma general

NIVEL n+1
FUENTES
→ INTEGRACIÓN
→ ESTADO
→ OBJETIVO
→ CHAIN
→ ACCIÓN
→ FEEDBACK
```

## Restricción

Preferir:

```text
AUTOSIMILITUD ESTRUCTURAL MULTIESCALA
```

a afirmar fractalidad matemática sin prueba.

---

# PAT-COG-023 — GRAFOS ACOPLADOS POR ESCALA

## Intención

Modelar sistemas donde los estados individuales, grupales e institucionales se afectan mutuamente.

## Estructura

```text
G_INDIVIDUO
     ⇅
G_GRUPO
     ⇅
G_INSTITUCIÓN
     ⇅
G_SOCIEDAD
     ⇅
G_CULTURA
```

## Principio

La causalidad puede ser:

```text
BOTTOM-UP
+
TOP-DOWN
+
LATERAL
```

---

# FAMILIA C — MANIFESTACIÓN, PROYECCIÓN Y RETROCONSTRUCCIÓN

---

# PAT-COG-024 — CAMPO → CORTE → PROYECCIÓN → MANIFESTACIÓN

## Intención

Producir una manifestación a partir de una estructura mayor sin confundir selección con realización.

## Estructura

```text
MATERIALES / SITUACIÓN / DOMINIO
        ↓
CAMPO ESTRUCTURAL
        ↓
CORTE ORIENTADO
        ↓
ORGANIZACIÓN
        ↓
RED PROYECTADA
        ↓
PARTES + REGLAS
        ↓
MANIFESTACIÓN
        ↓
RED REALIZADA
        ↓
RED ACTIVADA
        ↓
EVALUACIÓN / FEEDBACK
```

## Invariantes

- existe un campo mayor;
- existe un criterio de corte;
- existe proyección;
- existe realización;
- existe recepción;
- existe feedback.

---

# PAT-COG-025 — RESULTADO ESPERADO COMO SELECTOR DE SUBGRAFO

## Intención

Usar el efecto buscado para orientar qué región de una estructura mayor debe activarse o proyectarse.

## Estructura

```text
GRAFO / CAMPO
      +
RESULTADO ESPERADO
      ↓
SELECCIÓN
      ↓
SUBGRAFO PERTINENTE
      ↓
REALIZACIÓN
```

## Principio

```text
RESULTADO ESPERADO
no es sólo criterio final;
también puede ser
OPERADOR DE SELECCIÓN
```

---

# PAT-COG-026 — RETROCONSTRUCCIÓN DESDE MANIFESTACIÓN

## Intención

Inferir estructuras subyacentes a partir de una salida observable.

## Estructura

```text
MANIFESTACIÓN
      ↓
DESCOMPOSICIÓN
      ↓
RED REALIZADA
      ↓
HIPÓTESIS DE RED PROYECTADA
      ↓
HIPÓTESIS DE CORTE
      ↓
HIPÓTESIS DE CAMPO
      ↓
HIPÓTESIS DE OBJETIVO / REGLAS
```

## Regla epistemológica

A medida que se retrocede desde lo observable hacia lo generativo:

```text
EVIDENCIA DIRECTA
↓
RECONSTRUCCIÓN
↓
ABDUCCIÓN
```

la incertidumbre suele aumentar.

---

# PAT-COG-027 — ESTRUCTURA SEMÁNTICA ≠ REALIZACIÓN

## Intención

Separar lo que debe preservarse de la forma concreta en que se materializa.

## Estructura

```text
ESTRUCTURA SEMÁNTICA
        ↓
PROYECCIÓN
        ↓
REALIZACIÓN A

ESTRUCTURA SEMÁNTICA
        ↓
PROYECCIÓN
        ↓
REALIZACIÓN B
```

## Principio

```text
MISMO NÚCLEO
+
DISTINTO DISEÑO DE REPRESENTACIÓN
=
DISTINTA REALIZACIÓN
```

---

# PAT-COG-028 — TRAZABILIDAD DE MANIFESTACIÓN

## Intención

Poder reconstruir desde una salida observable la estructura y las fuentes que la soportan.

## Estructura

```text
SOURCE UNIT
   ↓ soporta
CLAIM
   ↓ soporta
NODE / EDGE
   ↓ se usa en
TRAVERSAL / BINDING
   ↓ se expresa en
MANIFESTATION UNIT
   ↓ pertenece a
ARTEFACTO
```

## Utilidad

Permite auditar:

- procedencia;
- inferencia;
- estructura;
- función;
- realización.

---

# PAT-COG-029 — MANIFESTACIÓN COMO INTERFAZ VISIBLE DE SISTEMA

## Intención

Tratar una salida observable como superficie de acceso a un sistema más grande.

## Estructura

```text
SISTEMA MAYOR
├─ memoria
├─ procesos
├─ relaciones
├─ historia
├─ contexto
├─ reglas
└─ capacidades
        ↓
MANIFESTACIÓN VISIBLE
```

## Regla

```text
NO ATAQUES / ANALICES SÓLO LA MANIFESTACIÓN
SI EL PROBLEMA RESIDE EN LA ARQUITECTURA QUE LA GENERA
```

---

# FAMILIA D — GOBIERNO, SOBERANÍA Y CONTROL

---

# PAT-COG-030 — LOCUS DE GOBIERNO

## Intención

Separar el componente que gobierna fines y criterios de los componentes que ejecutan funciones.

## Estructura

```text
LOCUS DE GOBIERNO
│
├─ fines
├─ criterios
├─ prioridades
├─ restricciones
├─ autorización
├─ veto
└─ revisión
        │
        ▼
RED DE COMPONENTES
        │
        ▼
EJECUCIÓN
```

## Principio

```text
GOBIERNO
≠
EJECUCIÓN
```

---

# PAT-COG-031 — RESPONSABILIDAD ≠ EJECUCIÓN

## Intención

Permitir que un nodo sea responsable de una función sin realizar cada microoperación.

## Estructura

```text
GOBERNADOR
   ↓ garantiza
FUNCIÓN F

FUNCIÓN F
   ↓ ejecutada por
NODO A
NODO B
NODO C
```

## Consecuencia

La arquitectura puede escalar sin exigir micromanagement.

---

# PAT-COG-032 — GOBIERNO SIN INTROSPECCIÓN TOTAL

## Intención

Permitir gobierno efectivo aunque los microprocesos internos no sean completamente observables.

## Requisitos

```text
REPRESENTACIÓN SUFICIENTE
+
OBSERVABILIDAD SUFICIENTE
+
CRITERIOS
+
AUTORIDAD
+
CONSULTA
+
VETO
+
FEEDBACK
```

## Regla

```text
GOBIERNO EFECTIVO
≠
TRANSPARENCIA TOTAL
```

---

# PAT-COG-033 — SOBERANÍA ≠ MICROMANAGEMENT

## Intención

Separar control de fines de especificación de cada microacción.

## Estructura

```text
LOCUS SOBERANO
define:
- fin
- límites
- criterios
- permisos
- aceptación

SISTEMA
resuelve:
- combinación concreta
- trayectoria
- microdecisiones
- realización

LOCUS SOBERANO
valida / corrige / veta
```

---

# PAT-COG-034 — AUTORIDAD ≠ CAPACIDAD

## Intención

Evitar que el componente más potente adquiera automáticamente autoridad sobre el sistema.

## Regla

```text
CAPACIDAD COMPUTACIONAL
≠
AUTORIDAD TELEOLÓGICA
```

Un nodo puede:

- calcular;
- generar;
- proponer;
- simular;
- optimizar;

sin poder:

- redefinir fines;
- modificar invariantes;
- autorizar acciones críticas;
- declarar verdad por sí mismo.

---

# PAT-COG-035 — OPACIDAD MICROGENERATIVA ≠ OPACIDAD DE GOBIERNO

## Intención

Permitir generación compleja sin perder trazabilidad de autoridad.

## Estructura

```text
REGLAS
+
ESTRUCTURA
+
CONTEXTO
+
OBJETIVO
      ↓
PROCESAMIENTO INTERNO
NO TOTALMENTE EXPLÍCITO
      ↓
SOLUCIÓN OPERABLE
```

Aceptable si permanece visible:

```text
FIN
CRITERIOS
RESTRICCIONES
PROCEDENCIA
VALIDACIÓN
AUTORIDAD
```

---

# PAT-COG-036 — NODOS DE RESISTENCIA / VETO / VALIDACIÓN

## Intención

Introducir mecanismos que puedan detener o desviar propagación.

## Estructura

```text
FLUJO
  ↓
GATE
  ├─ PASS → continúa
  ├─ HOLD → espera
  ├─ REVIEW → escala
  └─ REJECT → bloquea
```

## Tipos

- filtro;
- revisor;
- validador;
- autoridad;
- gate;
- veto;
- escalamiento.

---

# PAT-COG-037 — PROTECCIÓN TELEOLÓGICA

## Intención

Impedir que los medios redefinan silenciosamente el fin.

## Estructura

```text
FIN
 ↓
CRITERIOS
 ↓
MEDIOS
 ↓
EJECUCIÓN
```

## Fallo

```text
MEDIO OPTIMIZA SU PROPIA MÉTRICA
        ↓
REDEFINE EL OBJETIVO REAL
```

## Regla

```text
MEDIO
≠
FIN
```

---

# PAT-COG-038 — TOPOLOGÍA SOBERANA

## Intención

Distribuir funciones epistemológicas para evitar dependencia estructural de un único nodo.

## Topología frágil

```text
FUENTE X
├─ hecho
├─ sentido
├─ valor
├─ objetivo
└─ validación
     ↓
SISTEMA
```

## Topología con mayor soberanía

```text
FUENTES MÚLTIPLES
      ↓
INSPECCIÓN
      ↓
COMPARACIÓN
      ↓
CRITERIO PROPIO
      ↓
INTERPRETACIÓN REVISABLE
      ↓
OBJETIVO
      ↓
ACCIÓN
      ↓
EVIDENCIA
```

---

# PAT-COG-039 — SOBERANÍA SOBRE EL CIERRE COGNITIVO

## Intención

Evitar adoptar una explicación antes de contar con evidencia o comparación suficientes.

## Estructura

```text
INCERTIDUMBRE
   ↓
HIPÓTESIS A
HIPÓTESIS B
HIPÓTESIS C
   ↓
EVIDENCIA
   ↓
ACTUALIZACIÓN
```

## Contraste

```text
VACÍO
→ EXPLICACIÓN DISPONIBLE
→ ACEPTACIÓN
→ CIERRE
```

## Capacidad buscada

```text
DECIDIR CUÁNDO:
- integrar
- suspender
- buscar
- revisar
- descartar
```

---

# FAMILIA E — APRENDIZAJE, FEEDBACK Y ADAPTACIÓN

---

# PAT-COG-040 — PERMEABILIDAD EPISTÉMICA REGULADA

## Intención

Permitir que la evidencia modifique el sistema sin volverlo inestable.

## Estructura

```text
EVIDENCIA
   ↓
EVALUACIÓN
   ↓
GRADO DE CONFIANZA
   ↓
POLÍTICA DE ACTUALIZACIÓN
   ↓
CAMBIO PROPORCIONAL
```

## Regla

```text
PERMEABILIDAD
≠
INESTABILIDAD
```

---

# PAT-COG-041 — EXPERIENCIA COMO ACTUALIZACIÓN

## Intención

Distinguir evento vivido de aprendizaje efectivo.

## Estructura

```text
ACCIÓN
   ↓
RESULTADO
   ↓
REGISTRO
   ↓
INTERPRETACIÓN
   ↓
COMPARACIÓN
   ↓
ACTUALIZACIÓN
   ↓
CAMBIO FUTURO
```

## Fórmula

```text
EXPERIENCIA OPERATIVA
≈
RESULTADO INTERPRETADO
+
ACTUALIZACIÓN
+
CAMBIO FUTURO
```

## Regla

```text
EVENTO
≠
EXPERIENCIA
```

si no modifica futuras configuraciones.

---

# PAT-COG-042 — FEEDBACK ES EVIDENCIA, NO VERDAD

## Intención

Evitar que cualquier resultado posterior se convierta automáticamente en una conclusión válida.

## Estructura

```text
ACCIÓN
   ↓
RESULTADO
   ↓
FEEDBACK
   ↓
INTERPRETACIÓN
   ↓
ACTUALIZACIÓN
```

## Regla

```text
FEEDBACK
≠
VERDAD
```

---

# PAT-COG-043 — PREMISA REVISABLE VS BUCLE AUTOCERRADO

## Intención

Detectar sistemas donde la evidencia ya no puede modificar las premisas.

## Bucle autocerrado

```text
PREMISA FUNDAMENTAL
        │
        ▼
INTERPRETACIONES
        │
        ▼
PREDICCIONES
        │
        ▼
EVENTOS
        │
        ├─ confirman → PRUEBA
        │
        └─ contradicen
               ↓
        REINTERPRETACIÓN
               ↓
        CONSERVACIÓN DE PREMISA
               ↺
```

## Bucle revisable

```text
EVIDENCIA
   ↓
REVISIÓN DE PREMISA
   ↓
NUEVO MODELO
```

---

# PAT-COG-044 — FÁBRICA DE ADAPTACIONES CONTEXTUALES

## Intención

Reutilizar una misma estructura en contextos diferentes sin perder identidad.

## Estructura

```text
NÚCLEO
+
INVARIANTES
+
DOMINIO DE VARIACIÓN
+
CONTEXTO
      ↓
ADAPTACIÓN CONTEXTUAL
```

## Regla

```text
LO INVARIANTE
se conserva

LO VARIABLE
se adapta
```

## Uso

Permite separar:

```text
IDENTIDAD ESTRUCTURAL
```

de:

```text
REALIZACIÓN CONTEXTUAL
```

---

# PAT-COG-045 — ADAPTACIÓN SIN PÉRDIDA DE IDENTIDAD

## Intención

Combinar aprendizaje con protección de invariantes.

## Estructura

```text
EVIDENCIA
   │
   ├─ cambia parámetro
   ├─ cambia peso
   ├─ cambia relación
   ├─ cambia prioridad
   ├─ cambia chain
   ├─ cambia procedimiento
   └─ cuestiona invariante
```

## Política

```text
CAMBIO DENTRO DEL DOMINIO DE VARIACIÓN
→ adaptación

CAMBIO DE INVARIANTE / FIN / IDENTIDAD
→ escalamiento / revisión explícita
```

---

# PAT-COG-046 — RECOMPOSICIÓN FUNCIONAL

## Intención

Mantener capacidad aunque falle una trayectoria o componente.

## Estructura

```text
OBJETIVO
  ↓
CHAIN A ──x fallo
  ↓
RECONFIGURACIÓN
  ↓
CHAIN B
  ↓
EFECTO
```

## Capacidades asociadas

- redundancia;
- rutas alternativas;
- sustitución funcional;
- nodos de respaldo;
- degradación controlada.

## Principio

```text
CAPACIDAD DEL SISTEMA
>
CAPACIDAD DE UNA CHAIN
```

---

# FAMILIA F — HEURÍSTICA, ACCIÓN Y GENERACIÓN

---

# PAT-COG-047 — HEURÍSTICA GOBERNADA

## Intención

Producir una solución suficientemente buena cuando una solución óptima no es viable por tiempo, costo o complejidad.

## Estructura

```text
ESTADO INCOMPLETO
+
OBJETIVO
+
RESTRICCIONES
+
TIEMPO
+
RIESGO
      ↓
HEURÍSTICA
      ↓
SOLUCIÓN OPERABLE
      ↓
VALIDACIÓN
      ↓
ACCIÓN
      ↓
FEEDBACK
```

## Regla

```text
NO ÓPTIMO
≠
ARBITRARIO
```

---

# PAT-COG-048 — GENERACIÓN ESTRUCTURALMENTE GUIADA

## Intención

Permitir que un generador produzca una salida completa sin especificar cada microdetalle.

## Estructura

```text
GRAFO BASE
+
PROTOCOLO
+
CONTEXTO
+
RESULTADO ESPERADO
+
RESTRICCIONES
      ↓
GENERADOR
      ↓
MANIFESTACIÓN COMPLETA
      ↓
VALIDACIÓN
```

## Principio

```text
GOBIERNO MACRO
+
GENERACIÓN MICRO DELEGADA
```

---

# PAT-COG-049 — ESTADO → CHAIN → ACCIÓN

## Intención

Separar estado del sistema de la trayectoria que finalmente se ejecuta.

## Estructura

```text
ESTADO
  ↓
EVALUACIÓN
  ↓
SELECCIÓN DE CHAIN
  ↓
ACCIÓN
```

## Regla

```text
MISMO ESTADO
puede permitir
MÚLTIPLES CHAINS
```

y:

```text
CHAIN
es una selección
no una propiedad inevitable del estado
```

---

# PAT-COG-050 — TRAYECTORIA DE ESTADOS

## Intención

Modelar procesos donde cada etapa intenta producir un estado que habilita la siguiente.

## Estructura

```text
E0
 ↓ I1
E1
 ↓ I2
E2
 ↓ I3
E3
```

## Principio

```text
I2(E1)
≠
I2(E0)
```

La intervención anterior cambia las condiciones sobre las que operará la siguiente.

## Consecuencia

El contenido concreto de una etapa importa, no sólo el nombre de la etapa.

---

# PAT-COG-051 — INTEGRACIÓN ESTRUCTURAL ACUMULATIVA

## Intención

Representar sistemas donde las entradas llegan secuencialmente, pero el estado resultante es simultáneo y relacional.

## Estructura

```text
APORTE_1
   ↓
ESTADO_1

APORTE_2 + ESTADO_1
   ↓
ESTADO_2

APORTE_3 + ESTADO_2
   ↓
ESTADO_3
```

## Regla

```text
ENTRADA LINEAL
≠
ESTADO LINEAL
```

El estado puede ser:

- multidimensional;
- relacional;
- acumulativo;
- revisable.

---

# FAMILIA G — SENTIDO, REALIDAD OPERATIVA Y APROVISIONAMIENTO COGNITIVO

---

# PAT-COG-052 — HECHO → SIGNIFICADO → REALIDAD OPERATIVA

## Intención

Separar acontecimiento de significado atribuido.

## Estructura

```text
MUNDO / EVENTO
     ↓
HECHO / SEÑAL
     ↓
INTERPRETACIÓN
     ↓
SIGNIFICADO
     ↓
VALOR
     ↓
REALIDAD OPERATIVA
     ↓
DECISIÓN
```

## Principio

```text
LO QUE OCURRE
≠
LO QUE SIGNIFICA
```

---

# PAT-COG-053 — APROVISIONAMIENTO COGNITIVO

## Intención

Modelar cómo un sistema obtiene materiales con los que construirá interpretación, identidad, criterios y acción.

## Estructura

```text
FUENTES
   ↓
GENERACIÓN
   ↓
SELECCIÓN
   ↓
LEGITIMACIÓN
   ↓
ADAPTACIÓN
   ↓
DISTRIBUCIÓN
   ↓
RECEPCIÓN
   ↓
INTEGRACIÓN
   ↓
MANIFESTACIÓN
   ↓
FEEDBACK
```

---

# PAT-COG-054 — APROVISIONAMIENTO CON GOBIERNO REFLEXIVO

## Intención

Añadir soberanía al circuito de aprovisionamiento.

## Estructura

```text
MUNDO
↓
SEÑALES
↓
FUENTES
↓
MATERIAL
   ├─ ORDEN 1
   └─ ORDEN 2
↓
MEDIACIONES
↓
RECEPCIÓN
↓
GOBIERNO REFLEXIVO
↓
INTEGRACIÓN
↓
REALIDAD OPERATIVA
↓
DECISIÓN
↓
ACCIÓN
↓
MUNDO
↓
FEEDBACK
↺
```

---

# PAT-COG-055 — ORQUESTADOR DE MATERIAL COGNITIVO

## Intención

Representar un nodo de alta centralidad que genera, selecciona, legitima y proyecta material para un grupo.

## Estructura

```text
ORQUESTADOR
      │
      ├─ selecciona
      ├─ interpreta
      ├─ legitima
      ├─ simboliza
      ├─ prioriza
      └─ proyecta
             ↓
      MATERIAL COGNITIVO
             ↓
          RECEPTORES
             ↓
      TRANSFORMACIÓN
             ↓
          CONDUCTA
             ↓
          FEEDBACK
```

## Nota

La función puede estar:

- centralizada en una persona;
- distribuida entre instituciones;
- fragmentada entre nodos especializados.

---

# PAT-COG-056 — DESCOMPOSICIÓN FUNCIONAL POR ESCALA

## Intención

Explicar cómo una función realizada por un solo nodo en pequeña escala puede distribuirse entre muchos nodos en gran escala.

## Escala pequeña

```text
NODO A
=
generación
+
interpretación
+
distribución
+
feedback
```

## Escala grande

```text
FUNCIÓN GLOBAL
    │
    ├─ GENERADOR
    ├─ CURADOR
    ├─ LEGITIMADOR
    ├─ DISTRIBUIDOR
    ├─ RECEPTOR
    └─ VALIDADOR
```

## Principio

```text
MISMA FUNCIÓN GLOBAL
+
DISTINTA IMPLEMENTACIÓN
```

---

# PAT-COG-057 — SISTEMA DE EFECTOS MULTICAPA

## Intención

Modelar cómo un efecto puede propagarse entre capas heterogéneas.

## Estructura

```text
FÍSICO
  ↓
INFORMATIVO
  ↓
PERCEPTUAL
  ↓
COGNITIVO
  ↓
AXIOLÓGICO / IDENTITARIO
  ↓
DECISIONAL
  ↓
CONDUCTUAL
  ↓
INSTITUCIONAL
```

## Regla

La propagación puede ocurrir también en sentido inverso o mediante saltos entre capas.

---

# PAT-COG-058 — NECESIDAD DE SENTIDO COMO DEMANDA DEL SISTEMA

## Intención

Representar receptores que no sólo reciben material, sino que activamente demandan explicación.

## Estructura

```text
VACÍO / INCERTIDUMBRE
        ↓
NECESIDAD DE SENTIDO
        ↓
DEMANDA DE EXPLICACIÓN
        ↓
BÚSQUEDA / RECEPCIÓN DE MODELOS
        ↓
ADOPCIÓN / COMBINACIÓN / RECHAZO
        ↓
REALIDAD OPERATIVA
```

## Consecuencia

La influencia no depende únicamente del emisor.

También depende de una **demanda interna del receptor**.

---

# FAMILIA H — PATRONES METAARQUITECTÓNICOS

---

# PAT-COG-059 — INTERVENCIÓN FUNCIONAL-ESTRUCTURAL

## Intención

Actuar sobre relaciones y funciones del sistema, no sólo sobre objetos aislados.

## Estructura

```text
SISTEMA S
=
NODOS
+
RELACIONES
+
FUNCIONES
+
ESTADO

INTERVENCIÓN
   ↓
MODIFICA:
- nodo
- relación
- peso
- función
- ruta
- prioridad
   ↓
NUEVO ESTADO
```

## Principio

```text
OBJETO ATACADO / MODIFICADO
puede ser
UNA RELACIÓN O FUNCIÓN
```

---

# PAT-COG-060 — MISMA LÓGICA / DISTINTO SISTEMA OBJETIVO

## Intención

Transferir una arquitectura de intervención entre dominios.

## Estructura

```text
INTERVENCIÓN_FUNCIONAL_ESTRUCTURAL(S)
```

Variando:

```text
S = sistema cognitivo
S = organización
S = red técnica
S = institución
S = sistema social
```

## Lectura mediante Fábrica

```text
NÚCLEO
+
INVARIANTES
+
DOMINIO DE VARIACIÓN
+
SISTEMA OBJETIVO
→
ESPECIALIZACIÓN
```

---

# PAT-COG-061 — REPRESENTACIÓN OPERABLE COMO CUELLO DE BOTELLA

## Intención

Hacer explícito que un sistema no actúa directamente sobre el mundo, sino sobre una representación suficientemente útil del mundo.

## Estructura

```text
MUNDO
   ↓
PERCEPCIÓN DISTRIBUIDA
   ↓
INTEGRACIÓN
   ↓
REPRESENTACIÓN OPERABLE
   ↓
DECISIÓN
   ↓
ACCIÓN
```

## Regla

```text
MUNDO
≠
REPRESENTACIÓN DEL MUNDO
```

## Consecuencia

La calidad de la acción depende tanto de la representación como de la capacidad ejecutiva.

---

# PAT-COG-062 — GOBIERNO MACRO + EJECUCIÓN DISTRIBUIDA

## Intención

Conservar control de fines sin centralizar cada microoperación.

## Estructura

```text
LOCUS DE GOBIERNO
   ↓
OBJETIVOS / CRITERIOS / RESTRICCIONES
   ↓
RED DISTRIBUIDA
   ├─ nodo A
   ├─ nodo B
   ├─ IA
   ├─ herramienta
   └─ operador
   ↓
EFECTO
   ↓
FEEDBACK
   ↓
LOCUS DE GOBIERNO
```

---

# PAT-COG-063 — CICLO GENERAL DE SISTEMA ORIENTADO A OBJETIVOS

## Intención

Unificar percepción, gobierno, acción y aprendizaje en un ciclo.

## Estructura

```text
ENTORNO
↓
FUENTES DISTRIBUIDAS
↓
SEÑALES / MATERIALES
↓
MEDIACIÓN / TRANSFORMACIÓN
↓
INTEGRACIÓN
↓
REPRESENTACIÓN OPERABLE
↓
LOCUS DE GOBIERNO
↓
OBJETIVOS + CRITERIOS + RESTRICCIONES
↓
CONFIGURACIÓN DE CHAIN / SUBGRAFO
↓
EJECUCIÓN DISTRIBUIDA
↓
ACCIÓN / CAMBIO DE ESTADO
↓
MUNDO
↓
EVIDENCIA
↓
VALIDACIÓN
↓
ACTUALIZACIÓN / APRENDIZAJE
↓
RECONFIGURACIÓN
↺
```

## Función

Este patrón puede actuar como **marco de integración** para patrones más pequeños del catálogo.

---

# 2. RELACIONES IMPORTANTES ENTRE PATRONES

## 2.1 FUENTES + GOBIERNO

```text
PAT-COG-001
+
PAT-COG-002
+
PAT-COG-006
+
PAT-COG-030
+
PAT-COG-038
```

produce una arquitectura de **integración soberana de múltiples fuentes**.

---

## 2.2 MANIFESTACIÓN + RETROCONSTRUCCIÓN

```text
PAT-COG-015
+
PAT-COG-016
+
PAT-COG-026
+
PAT-COG-028
```

produce una arquitectura para:

```text
MANIFESTAR
↔
RETROCONSTRUIR
```

estructuras.

---

## 2.3 RED + CHAIN

```text
PAT-COG-012
+
PAT-COG-013
+
PAT-COG-014
+
PAT-COG-046
```

permite distinguir:

```text
CAPACIDADES DISPONIBLES
→
CAMINOS ACTIVADOS
→
RECOMPOSICIÓN
```

---

## 2.4 SOBERANÍA + IA

```text
PAT-COG-033
+
PAT-COG-034
+
PAT-COG-035
+
PAT-COG-036
+
PAT-COG-037
```

produce una arquitectura de:

```text
DELEGACIÓN OPERATIVA
SIN
TRANSFERENCIA AUTOMÁTICA DE AUTORIDAD
```

---

## 2.5 APRENDIZAJE + IDENTIDAD

```text
PAT-COG-040
+
PAT-COG-041
+
PAT-COG-042
+
PAT-COG-044
+
PAT-COG-045
```

produce:

```text
APRENDIZAJE
+
ADAPTACIÓN
+
PRESERVACIÓN DE IDENTIDAD
```

---

## 2.6 EFECTOS COGNITIVOS + PROPAGACIÓN SOCIAL

```text
PAT-COG-010
+
PAT-COG-017
+
PAT-COG-018
+
PAT-COG-019
+
PAT-COG-023
```

produce una arquitectura de:

```text
ACTIVACIÓN
→
CAMBIO DE ESTADO
→
MANIFESTACIÓN
→
PROPAGACIÓN MULTIESCALA
```

---

# 3. PATRONES DE NO-COLAPSO

Estas distinciones aparecen reiteradamente y conviene preservarlas como reglas de diseño.

```text
FUENTE
≠
MATERIAL
```

```text
MATERIAL
≠
SIGNIFICADO
```

```text
SEÑAL
≠
INTERPRETACIÓN
```

```text
MANIFESTACIÓN
≠
ARQUITECTURA
```

```text
RED
≠
CHAIN
```

```text
NODO
≠
CAPACIDAD EMERGENTE
```

```text
CAPACIDAD
≠
AUTORIDAD
```

```text
GOBIERNO
≠
EJECUCIÓN
```

```text
SOBERANÍA
≠
MICROMANAGEMENT
```

```text
OPACIDAD MICROGENERATIVA
≠
OPACIDAD DE GOBIERNO
```

```text
FEEDBACK
≠
VERDAD
```

```text
EVENTO
≠
EXPERIENCIA
```

```text
ADAPTACIÓN
≠
PÉRDIDA DE IDENTIDAD
```

```text
ESTADO
≠
ACCIÓN
```

```text
GRAFO COMPLETO
≠
SUBGRAFO ACTIVADO
```

```text
RED PROYECTADA
≠
RED REALIZADA
≠
RED ACTIVADA
```

```text
REALIDAD EXTERNA
≠
REPRESENTACIÓN OPERABLE
```

```text
ORDEN 1
≠
ORDEN 2
```

---

# 4. PATRONES QUE PUEDEN FUNCIONAR COMO COMPONENTES DE OTROS PAQUETES

Los siguientes son especialmente transferibles:

```text
PAT-COG-001  separación fuente/material/mediación
PAT-COG-002  convergencia de fuentes
PAT-COG-010  convergencia asociativa
PAT-COG-011  nodo central + satélites
PAT-COG-012  subgrafo como unidad de efecto
PAT-COG-013  chain derivada de red
PAT-COG-015  manifestación como corte
PAT-COG-016  red proyectada/realizada/activada
PAT-COG-017  red de efectos cognitivos
PAT-COG-020  reconfiguración de grafo
PAT-COG-022  autosimilitud multiescala
PAT-COG-024  campo→corte→proyección→manifestación
PAT-COG-025  resultado esperado como selector
PAT-COG-026  retroconstrucción
PAT-COG-030  locus de gobierno
PAT-COG-035  opacidad microgenerativa vs gobierno
PAT-COG-036  gates/veto/validación
PAT-COG-040  permeabilidad epistémica
PAT-COG-041  experiencia como actualización
PAT-COG-044  fábrica de adaptaciones contextuales
PAT-COG-046  recomposición funcional
PAT-COG-047  heurística gobernada
PAT-COG-048  generación estructuralmente guiada
PAT-COG-050  trayectoria de estados
PAT-COG-051  integración estructural acumulativa
PAT-COG-052  hecho→significado→realidad operativa
PAT-COG-054  aprovisionamiento con gobierno reflexivo
PAT-COG-057  efectos multicapa
PAT-COG-059  intervención funcional-estructural
PAT-COG-061  representación operable
PAT-COG-063  ciclo general orientado a objetivos
```

---

# 5. ESQUELETO PARA INSTANCIAR CUALQUIER PATRÓN

Para convertir un patrón del catálogo en una estructura específica:

```yaml
pattern_instance:
  pattern_id:
  objective:

  system:
    type:
    boundary:

  inputs:
    sources: []
    materials: []
    mediations: []

  graph:
    nodes: []
    edges: []
    weights: []
    subgraphs: []

  governance:
    locus:
    criteria: []
    restrictions: []
    veto_rules: []

  operation:
    selected_chain:
    operators: []
    expected_result:

  feedback:
    observables: []
    evidence_rules: []
    update_policy:

  identity:
    invariants: []
    variation_domain: []

  validation:
    success_conditions: []
    failure_conditions: []
```

---

# 6. TESTS TRANSVERSALES

## TEST-01 — ¿SE CONFUNDE LA MANIFESTACIÓN CON EL SISTEMA?

Si sí:

```text
FAIL
```

---

## TEST-02 — ¿SE CONFUNDE FUENTE CON MATERIAL?

Si sí:

```text
FAIL
```

---

## TEST-03 — ¿SE INTEGRA INFORMACIÓN SIN PROCEDENCIA?

Si sí:

```text
EPISTEMIC_RISK
```

---

## TEST-04 — ¿EXISTE LOCUS DE GOBIERNO?

Si no puede identificarse quién preserva fines, criterios y veto:

```text
GOVERNANCE_GAP
```

---

## TEST-05 — ¿EL SISTEMA PUEDE REVISAR SUS PREMISAS?

Si ninguna evidencia puede producir actualización:

```text
SELF_SEALING_LOOP
```

---

## TEST-06 — ¿EL SISTEMA CONFUNDE FEEDBACK CON VERDAD?

Si sí:

```text
UPDATE_RISK
```

---

## TEST-07 — ¿LA CHAIN ACTIVA ES LA ÚNICA POSIBLE?

Si una única ruta fija constituye toda la capacidad:

```text
LOW_RESILIENCE
```

---

## TEST-08 — ¿UNA IA PUEDE REDEFINIR EL FIN?

Si la respuesta es sí sin escalamiento:

```text
SOVEREIGNTY_FAILURE
```

---

## TEST-09 — ¿SE SABE QUÉ CAMBIA Y QUÉ DEBE PERMANECER?

Si no hay invariantes ni dominio de variación:

```text
IDENTITY_AMBIGUITY
```

---

## TEST-10 — ¿EL RESULTADO MODIFICA EL FUTURO?

Si no:

```text
NO_OPERATIONAL_LEARNING
```

---

# 7. SÍNTESIS SUPERIOR

Una gran parte de los patrones puede comprimirse en la siguiente arquitectura:

```text
MUNDO / ENTORNO
        ↓
FUENTES
        ↓
MATERIALES
        ↓
MEDIACIONES
        ↓
INTEGRACIÓN
        ↓
REPRESENTACIÓN OPERABLE
        ↓
LOCUS DE GOBIERNO
        ↓
SELECCIÓN DE SUBGRAFO / CHAIN
        ↓
EJECUCIÓN
        ↓
MANIFESTACIÓN / EFECTO
        ↓
OTROS SISTEMAS / MUNDO
        ↓
EVIDENCIA
        ↓
ACTUALIZACIÓN
        ↓
RECONFIGURACIÓN
        ↺
```

Pero esta representación lineal debe interpretarse como **proyección simplificada de un grafo dinámico**.

La arquitectura real puede contener:

```text
RUTAS PARALELAS
+
CICLOS
+
GATES
+
RETROALIMENTACIONES
+
SUBGRAFOS
+
NODOS COMPUESTOS
+
ESCALAS ANIDADAS
+
DIFERENTES ESTADOS EPISTEMOLÓGICOS
+
DIFERENTES NIVELES DE AUTORIDAD
```

La intuición transversal más importante es:

> **Los sistemas cognitivos y cognitivo-operativos complejos pueden entenderse como arquitecturas de fuentes, mediaciones, estados, subgrafos funcionales, gobierno, manifestaciones y feedback. Las salidas visibles son cortes parciales; las funciones emergen de configuraciones relacionales; las chains son trayectorias seleccionadas; y la capacidad de aprender depende de que la evidencia pueda reconfigurar el sistema sin destruir silenciosamente sus invariantes.**

---

# 8. ESTADO

```yaml
catalog:
  status: EXPLORATORY
  canonical: false
  purpose: CROSS_PACKAGE_REUSE

  units:
    type: DESIGN_PATTERNS

  intended_use:
    - package_design
    - architecture_comparison
    - structural_transfer
    - runtime_design
    - cognitive_analysis
    - graph_modeling
    - manifestation_design
    - governance_design
    - feedback_design

  warning:
    - structural_similarity_is_not_identity
    - manifestation_is_not_system
    - analogy_is_not_evidence
    - context_specific_validation_required
```

**FIN DEL CATÁLOGO**
