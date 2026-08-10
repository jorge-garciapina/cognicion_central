# Especialización fraudulenta — caso del collar de diamantes

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Propósito

Formalizar la estafa estudiada como una especialización de MTC, no como definición de toda MTC.

## 2. Núcleo aceptado del caso

```text
JEANNE
[ESTAFADORA]
    │ identifica
    ▼
ROHAN
[VÍCTIMA]
    │
    ├───────────────┐
    ▼               ▼
DESEA X           POSEE V
favor reina       PRESTIGIO
    ▲               │
    │               │
JEANNE promete      │
acceso a X          │
    │               │
    ▼               │
REALIDAD W~         │
cartas / falsa reina / intermediación
    │               │
    ▼               │
ROHAN CREE          │
    │               │
    ▼               │
ROHAN ACTÚA ◄───────┘
    │ moviliza prestigio
    ▼
JOYEROS
    │ reconocen autoridad/credibilidad
    ▼
ENTREGAN COLLAR
    │
    ▼
M = COLLAR DISPONIBLE PARA JEANNE
    │
    ▼
JEANNE
```

## 3. Mapeo MTC

```yaml
O: Jeanne
R: Rohan
Q:
  desired_state_X: recuperar_favor_de_Maria_Antonieta
I:
  subtype: fabricated_operational_reality
  label: W_tilde
  channels:
    - intermediacion
    - correspondencia_falsa
    - suplantacion_perceptiva
EC0:
  - Rohan_desea_X
  - acceso_a_X_incierto
EC_star:
  - Jeanne_es_canal_creible
  - reina_parece_favorecer_reconciliacion
  - ayudar_es_coherente_con_X
A: negociar_e_intermediar
V:
  type: social_capability
  value: prestigio_credibilidad_posicion
K:
  - corte
  - normas_de_autoridad
  - mercado_joyero
  - reconocimiento_social_de_Rohan
M: control_del_collar_transferible_al_circuito_de_Jeanne
G: beneficio_material_de_Jeanne
```

## 4. Restricciones de especialización FRAUD

```text
F-INV-01  W~ diverge deliberadamente de W* en relaciones relevantes.
F-INV-02  R desconoce la divergencia en el momento crítico.
F-INV-03  O posee un objetivo real no plenamente revelado.
F-INV-04  R posee V; O intenta orientar la activación de V.
F-INV-05  A es ejecutada por R creyendo que contribuye a X.
F-INV-06  M beneficia a O o a su circuito de captura.
F-INV-07  la verificación independiente amenaza la máquina.
```

## 5. Transformaciones `τ`

```text
τ1: Jeanne conocida → Jeanne potencialmente conectada
τ2: conexión plausible → acceso real creído
τ3: acceso creído → reconciliación creída
τ4: reconciliación creída → solicitud de ayuda plausible
τ5: solicitud plausible → disposición a actuar
```

## 6. Transducciones `θ`

```text
θ_IC:
señales fraudulentas → cambios en EC de Rohan

θ_CA:
"debo ayudar" → negociación/intermediación

θ_AM:
acción + prestigio + contexto social → entrega del collar
```

## 7. Valor y manifestación

Corrección central:

```text
V ≠ collar
V = prestigio de Rohan
M = disponibilidad/transferencia del collar
```

El collar ya existía. La máquina produce un **nuevo estado del mundo**: el collar entra en un circuito controlable por Jeanne.

## 8. Prueba del título nobiliario

Sustituir:

```text
M = collar disponible
```

por:

```text
M = título/privilegio concedido
```

Si `V = prestigio/influencia` y `K` contiene una autoridad capaz de concederlo, la arquitectura profunda puede conservarse.

Esto demuestra que el collar pertenece al dominio de variación de la especialización, no al núcleo.

## 9. Joyeros

Los joyeros son actores de realización/contexto. Su función estructural es reconocer `V` y ejecutar la acción que produce `M`.

No son el lugar donde reside el valor nuclear de la víctima.

## 10. María Antonieta

En el juego central funciona principalmente dentro de `X/Q` como referente del estado deseado por Rohan. Después del fraude adquiere otro papel como víctima reputacional indirecta, pero ese segundo juego no es necesario para el núcleo de conversión fraudulenta.

## 11. Condición de opacidad

```text
éxito provisional si:
  transducción hasta M ocurre antes de verificación suficiente de W~
```

La opacidad no es un invariante de MTC general; sí es central en esta especialización.
