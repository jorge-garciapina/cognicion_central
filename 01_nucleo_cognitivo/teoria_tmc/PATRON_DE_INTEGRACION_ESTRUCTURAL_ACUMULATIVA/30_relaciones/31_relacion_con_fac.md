# Relación con FAC

## 1. Funciones diferentes

```txt
PIEA
  estructura que se desea reconocer y modelar

FAC
  fábrica que permite conservar ese núcleo y adaptarlo a casos distintos
```

FAC no es una transición PIEA y PIEA no reemplaza la fábrica.

## 2. Mapeo de componentes

| FAC | Especialización PIEA |
|---|---|
| `FAC-Nucleo-Preservable` | Ecuación nuclear, ontología, invariantes y fronteras PIEA |
| `FAC-Regimen-de-Variacion-Legitima` | Dominio de variación PIEA |
| `FAC-Composicion-Contextual` | Configuración del caso receptor |
| `FAC-Intencion-de-Intervencion` | Propósito del análisis o uso del caso |
| `FAC-Caso-de-Proyeccion-Contextual` | Núcleo PIEA preparado para un dominio concreto |
| `FAC-Heuristica-de-Transformacion` | Criterios usados para mapear roles PIEA al caso |
| `FAC-Restriccion-de-Salida` | Límites y correspondencias prohibidas |
| `FAC-Transformacion-Contextual` | Reexpresión regulada del núcleo PIEA |
| `FAC-Intervencion-Situada` | Adaptación ya operativa en el caso |
| `FAC-Evidencia-de-Retorno` | Respuestas útiles para evaluar la adaptación |
| `FAC-Correccion-Acumulativa` | Refinamiento histórico de futuras adaptaciones |

## 3. Dos acumulaciones distintas

### Acumulación PIEA

Ocurre dentro de la trayectoria del sistema modelado: el estado posterior conserva efectos relevantes del pasado.

### Corrección acumulativa FAC

Ocurre en la fábrica: evidencia proveniente de intervenciones anteriores modifica heurísticas, restricciones o criterios de adaptaciones posteriores.

Pueden acoplarse, pero deben registrarse como procesos separados.

## 4. Regla de autoridad

Las definiciones de los componentes FAC pertenecen a `[FAC]`. Este documento sólo declara cómo PIEA los consume. Si cambia FAC, deberá auditarse el mapeo antes de actualizar este paquete.

