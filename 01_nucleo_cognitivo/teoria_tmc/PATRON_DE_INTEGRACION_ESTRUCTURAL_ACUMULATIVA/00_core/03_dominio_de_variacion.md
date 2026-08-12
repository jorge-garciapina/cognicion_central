# Dominio de variación

Este documento aplica el concepto `FAC-Regimen-de-Variacion-Legitima`: una variable puede cambiar sólo mientras se conserven los invariantes que permiten reconocer la misma estructura. No reproduce la teoría FAC; la especializa para PIEA. Véase `[FAC]` (VER DOCUMENTO 01_nucleo_cognitivo\paquetes-conceptuales\fabrica-de-adaptaciones-contextuales.txt), nodo `FAC-Regimen-de-Variacion-Legitima`.

## 1. Dimensiones legítimamente variables

| Dimensión               | Variación admitida                                                                | Condición de legitimidad                                                          |
| ----------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Sistema `X`             | humano, máquina, texto en construcción, organismo, organización, sistema híbrido  | Debe poder delimitarse un portador de estado y sus transiciones.                  |
| Representación de `S_t` | grafo, vector, conjunto, configuración material, memoria, descripción cualitativa | Debe conservar información suficiente para explicar la integración.               |
| Granularidad del estado | micro, meso, macro                                                                | Las variables no pueden mezclar escalas sin declarar el mapeo.                    |
| Aporte `u_t`            | símbolo, acción, alimento, señal, archivo, evento, recurso, conjunto compuesto    | Debe distinguirse del estado antes de integrarse.                                 |
| Procedencia del aporte  | externa, interna, reactivada desde memoria, producida por otro subsistema         | Debe identificarse el punto en que se vuelve entrada de la transición analizada.  |
| Temporalidad            | discreta, episódica, irregular, por lotes, casi continua                          | Debe poder establecerse un antes y un después funcional.                          |
| Contexto `κ_t`          | estable, variable, observable, parcialmente inferido                              | Deben explicitarse las condiciones relevantes y su incertidumbre.                 |
| Mecanismo `𝓘`           | determinista, probabilístico, material, cognitivo, social, híbrido                | Debe actualizar realmente el estado desde `S_t` y `u_t`.                          |
| Intensidad de cambio    | mínima, gradual, umbral, abrupta                                                  | Debe producir una diferencia relevante en el estado elegido.                      |
| Persistencia            | breve, larga, reversible, consolidada                                             | Algún efecto debe alcanzar una transición o comportamiento posterior.             |
| Selectividad            | integración total, parcial, filtrada, inhibida                                    | La selección debe formar parte del mecanismo, no ocultar ausencia de integración. |
| Orden                   | fuertemente sensible, parcialmente sensible, conmutativo en un subdominio         | La pertenencia no exige que todo orden altere el resultado.                       |
| Pérdida                 | nula, compresión, olvido, sustitución parcial                                     | La pérdida no puede borrar toda dependencia de trayectoria en cada transición.    |
| Escala                  | componente, sistema, sistema de sistemas                                          | Deben distinguirse estados y operadores de cada escala.                           |
| Observabilidad          | directa, indirecta, inferida                                                      | La inferencia debe apoyarse en indicadores y límites declarados.                  |

## 2. Variación del contexto

`κ_t` puede cambiar sin que cambie la identidad de PIEA. Puede modificar:

- qué parte de `u_t` es admitida;
- qué relaciones del estado pueden alterarse;
- qué umbrales se activan;
- la velocidad de integración;
- la estabilidad del cambio;
- la prioridad entre aportes incompatibles.

No se debe importar `φ_n` de ACCD para representar estas condiciones. `φ_n` pertenece al nivel de realización codominial y no al mecanismo interno PIEA.

## 3. Variación del mecanismo

Dos dominios pueden materializar `𝓘` de manera causalmente distinta y seguir compartiendo PIEA en un nivel estructural abstracto. La equivalencia se limita a los roles demostrados:

```txt
estado previo
+ aporte
+ condicionamiento contextual
→ integración
→ estado posterior dependiente de trayectoria
```

Compartir esta firma no autoriza a transferir propiedades fisiológicas, semánticas, computacionales o éticas entre dominios.

## 4. Límites de variación

La variación deja de ser legítima cuando ocurre cualquiera de estas rupturas:

- `S_t` deja de participar en la transición;
- `u_t` sólo se almacena o yuxtapone;
- no existe un estado posterior diferenciable;
- el sistema se reinicia antes de cada aporte;
- toda historia queda causalmente anulada;
- el contexto se usa como palabra genérica sin condiciones operativas;
- la supuesta integración sólo existe en la descripción del observador;
- se confunde una manifestación externa con el estado completo;
- la analogía transfiere mecanismos causales no demostrados.

## 5. Clasificación de una variación

| Resultado            | Criterio                                                          |
| -------------------- | ----------------------------------------------------------------- |
| `VARIACIÓN LEGÍTIMA` | Conserva todos los invariantes nucleares.                         |
| `VARIANTE LIMÍTROFE` | La evidencia de estado, integración o persistencia es incompleta. |
| `EXTENSIÓN`          | Añade feedback, control u observación sin redefinir el núcleo.    |
| `DEFORMACIÓN`        | Mantiene vocabulario PIEA, pero pierde una función nuclear.       |
| `SUSTITUCIÓN`        | Modela otro fenómeno y sólo conserva semejanzas temáticas.        |
| `INDETERMINADA`      | Faltan datos para establecer pertenencia.                         |
