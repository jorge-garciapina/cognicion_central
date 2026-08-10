# Invariantes, variables y especialización

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Invariante vs. variable

Un rasgo es **invariante** si eliminarlo o invertirlo destruye la identidad de la MTC. Un rasgo es **variable** si puede cambiar sin romper la operación nuclear.

## 2. Núcleo candidato

```text
N_MTC = {
  diferencia estado/acción,
  transformación cognitiva,
  cruce cognición→conducta,
  capacidad movilizable,
  contexto de realización,
  manifestación externa
}
```

## 3. Variables de especialización

```text
I.tipo
Q.composición
EC.granularidad
τ.secuencia
A.tipo
V.tipo
K.tipo
M.tipo
G.tipo
F.frecuencia
C.contrato
```

## 4. Especialización por restricciones añadidas

Una especialización se define como:

```text
S_i = MTC + R_i
```

con `R_i` = conjunto de restricciones adicionales.

Ejemplo fraude:

```text
FRAUDE = MTC
       + divergencia deliberada W~ ≠ W*
       + objetivo oculto
       + víctima posee V
       + opacidad suficiente hasta A/M
```

Ejemplo educación:

```text
EDUCACIÓN = MTC
          + objetivo de competencia/aprendizaje
          + contrato epistemológico de veracidad/corrección
          + V puede ser construido o ampliado
```

## 5. Regla de herencia

Una especialización NO PUEDE eliminar invariantes del núcleo. Puede:

- restringir tipos;
- añadir estados;
- añadir contratos;
- hacer obligatorios elementos opcionales;
- definir nuevas métricas.

## 6. Regla de abstracción

Para generalizar desde una instancia concreta:

1. identificar el efecto observable;
2. reconstruir la capacidad que lo produjo;
3. identificar la acción que activó la capacidad;
4. reconstruir el estado cognitivo previo;
5. identificar las intervenciones que modificaron dicho estado;
6. retirar identidades históricas;
7. probar sustituciones en `I, Q, V, K, M`;
8. declarar sólo como invariante lo que sobreviva a los contrastes.

## 7. Prueba de sustitución

Si en una estafa:

```text
M = collar
```

puede sustituirse por:

```text
M = título / permiso / transferencia / contrato
```

sin alterar `estafador → intervención → creencia → acción → V → manifestación`, entonces el objeto concreto pertenece al dominio de variación.
