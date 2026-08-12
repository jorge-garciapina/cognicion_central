# Fronteras y no equivalencias

## 1. Sucesión no equivale a integración

```txt
u_1 → u_2 → u_3
```

sólo muestra orden. PIEA exige estados intermedios:

```txt
S_0 --integra u_0--> S_1 --integra u_1--> S_2
```

## 2. Almacenamiento no equivale a organización

Conservar aportes en una lista puede ser memoria, pero no demuestra que los elementos alteren las relaciones o capacidades del estado.

## 3. Agregación no equivale a acumulación estructural

Una suma puede ser una instancia de PIEA si el total modifica estados futuros y la suma es el mecanismo relevante. Sin embargo, el patrón no se define por sumar: se define por integrar desde un estado previo y conservar efectos de trayectoria.

## 4. Estado no equivale a manifestación

El estado interno puede ser descrito o materializado mediante una salida, pero la salida no debe identificarse automáticamente con el estado completo. La formalización de una manifestación codominial pertenece a ACCD y se cita en `[ACCD-EQ]`; PIEA no introduce un segundo operador de proyección.

## 5. Contexto PIEA no equivale a instancia contextual ACCD

```txt
κ_t
  condiciona una transición interna de estado

φ_n
  configura una realización codominial en ACCD
```

## 6. Acumulación PIEA no equivale a corrección acumulativa FAC

```txt
PIEA
  el estado de una instancia conserva efectos de transiciones anteriores

FAC-Correccion-Acumulativa
  la fábrica incorpora evidencia de realizaciones previas para refinar
  heurísticas, restricciones o transformaciones futuras
```

Un sistema PIEA puede operar sin que FAC aprenda entre casos. FAC puede corregir sus adaptaciones usando evidencia sin convertir cada fenómeno adaptado en una instancia PIEA.

## 7. Explicación descriptiva no equivale a mecanismo causal

La ecuación nuclear es un modelo estructural. En cada dominio debe declararse si `𝓘` es:

- un mecanismo causal conocido;
- una regla computacional;
- una reconstrucción funcional;
- una hipótesis pendiente de prueba;
- una metáfora controlada.

No se atribuirá causalidad sólo porque la ecuación pueda dibujarse.

## 8. PIEA no equivale a MTC

MTC formaliza transformación y transducción cognitivas con contratos propios. PIEA sólo fija una dinámica de actualización acumulativa. Una MTC puede implementar una instancia PIEA, pero las propiedades de MTC no se heredan automáticamente.

