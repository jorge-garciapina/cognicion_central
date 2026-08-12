# Contrato de adaptación mediante FAC

## 1. Dependencia

Este paquete adopta la arquitectura de `[FAC]` para distinguir un núcleo preservable de sus realizaciones contextuales. No replica las definiciones completas de FAC. Las usa por referencia y declara únicamente su especialización PIEA.

## 2. Núcleo preservable PIEA

Corresponde a:

- la ecuación `S_{t+1}=𝓘_{κ_t}(S_t,u_t)`;
- los roles ontológicos definidos en `00_core/01_ontologia_y_notacion.md`;
- los invariantes de `00_core/02_invariantes.md`;
- las fronteras de `00_core/04_fronteras_y_no_equivalencias.md`.

En términos de `FAC-Nucleo-Preservable`, estas funciones deben seguir reconocibles a través de todas las adaptaciones.

## 3. Régimen de variación legítima

La especialización PIEA está declarada en `00_core/03_dominio_de_variacion.md` y se apoya en `FAC-Regimen-de-Variacion-Legitima`.

## 4. Caso de proyección contextual

Para construir un ejemplo futuro se deberá formar un `FAC-Caso-de-Proyeccion-Contextual` que incluya:

```txt
nucleo_piea
+ composición contextual explícita
+ intención de intervención o de estudio
```

La configuración resultante todavía no equivale a una manifestación ACCD.

## 5. Composición contextual

El caso deberá declarar, cuando sean pertinentes, las cuatro regiones de `FAC-Composicion-Contextual`:

- contexto de sujeto;
- contexto de medio;
- contexto de distribución;
- contexto de ejecución.

Estas regiones no sustituyen `κ_t`. La composición FAC configura el caso de adaptación; `κ_t` pertenece a cada transición interna modelada dentro de ese caso.

## 6. Transformación contextual

`FAC-Transformacion-Contextual` guía la reexpresión del núcleo en el dominio receptor. La adaptación debe mapear roles, no copiar vocabulario:

| Rol PIEA | Pregunta de adaptación |
|---|---|
| `X` | ¿Cuál es el sistema delimitado en este dominio? |
| `S_t` | ¿Qué información constituye su estado relevante? |
| `u_t` | ¿Qué cuenta como aporte parcial? |
| `κ_t` | ¿Qué condiciones modifican esa integración? |
| `𝓘` | ¿Qué mecanismo o regla integra? |
| `S_{t+1}` | ¿Qué cambio de estado se produce? |
| trayectoria | ¿Qué efecto previo condiciona el futuro? |

## 7. Heurísticas y restricciones

Las decisiones locales deben declararse mediante `FAC-Heuristica-de-Transformacion`; los límites mediante `FAC-Restriccion-de-Salida`. Como mínimo:

- no antropomorfizar sistemas no humanos;
- no transferir causalidad entre dominios;
- no sustituir estado por manifestación;
- no usar analogías como evidencia;
- no declarar pertenencia sin estado posterior y persistencia;
- no confundir adaptación FAC con realización ACCD.

## 8. Evidencia y corrección

`FAC-Evidencia-de-Retorno` y `FAC-Correccion-Acumulativa` podrán evaluar y refinar futuras adaptaciones del paquete. Son parte de la fábrica que aprende entre casos; no se incorporan como invariantes PIEA.

