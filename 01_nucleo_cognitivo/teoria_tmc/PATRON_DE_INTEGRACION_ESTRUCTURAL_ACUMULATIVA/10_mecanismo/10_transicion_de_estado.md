# Transición de estado

## 1. Forma canónica

```math
S_{t+1}=\mathcal I_{\kappa_t}(S_t,u_t)
```

Ésta es la única ecuación fundamental del paquete. Las demás expresiones son pruebas, comparaciones o descripciones derivadas; no constituyen ecuaciones nucleares paralelas.

## 2. Secuencia operacional

```txt
1. Delimitar S_t.
2. Identificar u_t.
3. Declarar κ_t.
4. Establecer cómo 𝓘 admite, rechaza o transforma u_t.
5. Obtener S_{t+1}.
6. Describir Δ_t = diff(S_t, S_{t+1}).
7. Comprobar qué diferencia puede condicionar el futuro.
```

## 3. Casos de integración

### Incorporación

El aporte pasa a formar parte del estado y conserva alguna identidad funcional.

### Transformación

El aporte cambia de forma durante la integración; el estado conserva su efecto, no necesariamente el aporte original.

### Reponderación

El aporte modifica pesos o prioridades entre componentes ya existentes.

### Inhibición

El aporte activa una restricción o reduce la disponibilidad de otra parte del estado.

### Sustitución parcial

El aporte desplaza una organización anterior sin borrar toda continuidad del sistema.

### Rechazo con efecto

El aporte no es incorporado, pero su procesamiento cambia defensas, umbrales, memoria o reglas futuras. Puede existir PIEA si cambia el estado.

### Rechazo sin efecto

Si el aporte no cambia ninguna dimensión relevante, entonces para esa unidad de análisis:

```math
S_{t+1}=S_t
```

Esa transición particular es nula. No demuestra integración, aunque pueda ocurrir dentro de un sistema que sí exhibe PIEA en otras transiciones.

## 4. Contexto constante

En una serie limitada puede mantenerse `κ_t=κ`. Esto simplifica el análisis, pero no elimina el papel conceptual del contexto. La invariancia contextual debe declararse, no confundirse con ausencia de contexto.

## 5. Transiciones probabilísticas

Si el mecanismo no determina un único estado, la ecuación puede leerse como regla generadora de una distribución de estados posteriores. No se introduce una segunda notación canónica: la instancia documentará que `𝓘` es estocástica y especificará, si es posible, sus probabilidades o rangos.

## 6. Actualización por lotes

Un conjunto de aportes puede tratarse como un solo `u_t` compuesto cuando el sistema no los integra separadamente en el nivel elegido. Si existen estados intermedios funcionalmente relevantes, deben modelarse como transiciones distintas.

## 7. Criterio de buena elección del estado

Una representación de `S_t` es adecuada si dos instancias descritas por el mismo estado, expuestas al mismo aporte bajo el mismo contexto y mecanismo, no requieren información histórica adicional para explicar diferencias sistemáticas.

Si la requieren, el estado está subespecificado.

