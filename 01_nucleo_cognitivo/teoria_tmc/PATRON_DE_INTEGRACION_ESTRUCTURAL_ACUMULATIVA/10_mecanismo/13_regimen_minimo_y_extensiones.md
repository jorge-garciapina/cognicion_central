# Régimen mínimo y extensiones

## 1. Régimen mínimo

El régimen mínimo contiene sólo:

```txt
estado
aporte
contexto operativo
integración
estado posterior
persistencia relevante
```

Es suficiente para identificar PIEA.

## 2. Extensión de observación

Un sistema puede permitir mediciones, descripciones o manifestaciones de su estado. PIEA no fija una ecuación propia de proyección porque ese problema pertenece a otra capa arquitectónica. Cuando la salida sea una manifestación codominial, debe usarse la teoría ACCD `[ACCD-EQ]`.

## 3. Extensión de retroalimentación

Una salida o efecto puede volver como un aporte posterior:

```txt
transición PIEA
→ efecto observable
→ selección de retorno relevante
→ nuevo u_t
→ nueva transición PIEA
```

El lazo no es invariante de PIEA. Sólo existe cuando el retorno se acopla efectivamente como aporte y modifica el estado.

## 4. Extensión de control

Puede existir un mecanismo que compare estados deseados y observados y ajuste `κ_t`, seleccione `u_t` o modifique la implementación de `𝓘`. Ese controlador es una estructura adicional y debe modelarse separadamente.

## 5. Extensión FAC

FAC puede usar evidencia de intervenciones para corregir futuras adaptaciones. Su `FAC-Correccion-Acumulativa` no debe introducirse como parte automática del mecanismo PIEA. Véase `[FAC]`.

## 6. Regla de parsimonia

No se añadirán variables, operadores o espacios matemáticos si no resuelven una ambigüedad observada en una instancia. La ecuación nuclear mantiene precedencia explicativa.

