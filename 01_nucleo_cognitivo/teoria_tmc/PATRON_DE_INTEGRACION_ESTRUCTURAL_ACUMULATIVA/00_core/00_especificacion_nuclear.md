# Especificación nuclear

## 1. Fenómeno delimitado

PIEA delimita sistemas en los que:

1. existe un estado organizado antes de una integración;
2. llega o se activa un aporte parcial;
3. el aporte es tratado desde el estado existente y bajo condiciones operativas situadas;
4. la integración produce un estado posterior;
5. el estado posterior conserva de manera selectiva efectos estructurales de su trayectoria;
6. esos efectos pueden modificar cómo serán tratados aportes posteriores.

## 2. Definición nuclear

> El Patrón de Integración Estructural Acumulativa es una organización dinámica de transiciones en la que un sistema delimitado incorpora aportes parciales mediante una operación contextual de integración, produciendo estados sucesivos cuyo comportamiento posterior depende de la estructura ya alcanzada y no sólo del aporte presente considerado de forma aislada.

## 3. Ecuación nuclear

```math
\boxed{S_{t+1}=\mathcal{I}_{\kappa_t}(S_t,u_t)}
```

Donde:

- `S_t` es el estado relevante del sistema antes de la transición;
- `u_t` es el aporte parcial disponible en esa transición;
- `\kappa_t` es el contexto operativo que condiciona la integración;
- `\mathcal I_{\kappa_t}` es la operación de integración bajo dicho contexto;
- `S_{t+1}` es el estado relevante después de integrar el aporte.

## 4. Interpretación exacta de «acumulativa»

Acumulación no significa adición aritmética ni conservación íntegra de todo lo ocurrido. Significa que el estado desde el cual se integra un nuevo aporte ya contiene efectos relevantes de transiciones anteriores.

Por ello, PIEA admite:

- retención;
- refuerzo o debilitamiento;
- reponderación;
- reorganización relacional;
- inhibición;
- sustitución parcial;
- compresión;
- olvido selectivo;
- activación diferida;
- reinterpretación local de componentes previos.

Todas estas operaciones son compatibles con el patrón si el estado posterior sigue siendo resultado de una integración dependiente del estado previo y si conserva continuidad suficiente para que la trayectoria tenga consecuencias.

## 5. Propiedad discriminante

La misma contribución puede producir resultados diferentes cuando se integra en estados diferentes:

```math
S_a\neq S_b
\quad\Longrightarrow\quad
\mathcal I_{\kappa}(S_a,u)\;\text{puede diferir de}\;\mathcal I_{\kappa}(S_b,u)
```

La expresión no afirma que toda diferencia de estado produzca necesariamente una diferencia observable. Afirma que el estado previo participa causal u operacionalmente en la integración y, por tanto, puede cambiar el resultado.

## 6. Condición de irreductibilidad

El estado posterior no debe confundirse con una bolsa de aportes:

```txt
S_n ≠ lista indiferenciada de u_1, u_2, …, u_n
```

Para pertenecer al patrón debe existir al menos una propiedad relevante que dependa de la organización producida por las integraciones: relaciones, pesos, accesibilidad, compatibilidad, inhibición, secuencia, función o capacidad posterior.

## 7. Suficiencia del estado

La historia no aparece como argumento independiente en la ecuación nuclear. `S_t` debe contener —directamente o mediante acceso a memoria externa declarada como parte del estado funcional— toda la información histórica relevante para determinar la transición en el nivel de análisis elegido.

Si dos trayectorias producen estados que parecen iguales pero reaccionan de manera distinta al mismo aporte bajo el mismo contexto, la descripción de `S_t` es insuficiente y debe ampliarse. No se añade automáticamente un símbolo histórico paralelo; se corrige la definición del estado.

## 8. Firma mínima

```txt
SYSTEM X
  HAS_STATE S_t
  RECEIVES_OR_ACTIVATES u_t
  OPERATES_UNDER κ_t
  INTEGRATES_WITH 𝓘
  BECOMES S_{t+1}
  PRESERVES_RELEVANT_PATH_EFFECTS
```

## 9. Criterio mínimo de pertenencia

Una realización pertenece a PIEA cuando puede demostrarse, con el nivel de precisión disponible, que:

```txt
estado previo
+ aporte parcial
+ contexto operativo
+ integración
→ estado posterior
→ diferencia relevante para integraciones o comportamientos futuros
```

La mera sucesión temporal no basta.

