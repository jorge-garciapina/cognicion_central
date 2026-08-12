# Pruebas de pertenencia y falsación

## P1 — Prueba de estado previo

¿Puede describirse `S_t` sin definirlo sólo como «todo lo ocurrido antes»?

- Sí: continuar.
- No: estado subespecificado.

## P2 — Prueba de aporte

¿Puede distinguirse `u_t` antes de su integración?

- Sí: continuar.
- No: no hay unidad de integración demostrada.

## P3 — Prueba de actualización

¿Existe una diferencia relevante entre `S_t` y `S_{t+1}`?

- Sí: continuar.
- No: transición nula o variable de estado mal elegida.

## P4 — Prueba de dependencia del estado

Comparar conceptualmente:

```math
\mathcal I_{\kappa}(S_a,u)
\quad\text{y}\quad
\mathcal I_{\kappa}(S_b,u)
```

Si cambiar el estado nunca puede alterar la integración, falta el invariante de dependencia de estado.

## P5 — Prueba de contexto

¿Qué variación de `κ_t` cambiaría la integración? Si ninguna condición puede hacerlo, debe justificarse un contexto fijo o reconocerse que el modelo usado es incondicionado.

## P6 — Prueba de organización

¿El aporte cambia relaciones, pesos, acceso, restricciones o capacidad? Si sólo se agrega a una lista, no se ha demostrado integración estructural.

## P7 — Prueba de persistencia

¿Algún efecto de `S_{t+1}` alcanza una transición o comportamiento posterior? Si el sistema se reinicia por completo, no existe acumulación.

## P8 — Prueba contra el último aporte

¿El resultado se explica completamente por `u_t` ignorando `S_t`? Si sí, no se necesita PIEA.

## P9 — Prueba contra contexto omitido

Las diferencias atribuidas a trayectoria deben revisarse contra condiciones `κ` no declaradas. Una variable omitida no es evidencia de acumulación.

## P10 — Prueba de suficiencia del estado

Si dos casos con el mismo `S_t`, `u_t` y `κ_t` producen diferencias sistemáticas, ampliar el estado o revisar el mecanismo. No añadir historia como comodín.

## P11 — Prueba de nivel

¿Estado, aporte y mecanismo pertenecen a la misma escala? Si no, declarar interfaces entre escalas.

## P12 — Prueba de no equivalencia ACCD

¿Se está usando una manifestación `μ^{r_k}` como si fuera automáticamente `S_{t+1}`? Si sí, separar el estado del portador o justificar que la manifestación es literalmente parte del estado del sistema analizado.

## Criterio de falsación local

Una hipótesis PIEA queda falsada para una instancia y nivel dados si evidencia suficiente muestra que:

- el estado previo no influye;
- no existe integración;
- no hay estado posterior relevante;
- no persiste ningún efecto de trayectoria;
- o un modelo más simple explica íntegramente el fenómeno.

