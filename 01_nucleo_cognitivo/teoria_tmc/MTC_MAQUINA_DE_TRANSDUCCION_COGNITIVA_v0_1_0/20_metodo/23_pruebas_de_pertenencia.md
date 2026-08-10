# Pruebas de pertenencia, falsación y límites

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Test mínimo

`T-MTC-01` — ¿Existe intervención `I` relevante?

`T-MTC-02` — ¿Puede describirse al menos un cambio `EC₀ → EC*`?

`T-MTC-03` — ¿La acción `A` está separada del estado?

`T-MTC-04` — ¿Existe capacidad `V` que explique el poder operativo de `A`?

`T-MTC-05` — ¿Existe contexto `K` donde `V` puede operar?

`T-MTC-06` — ¿Existe manifestación `M` externa distinguible de `V`?

`T-MTC-07` — ¿Puede trazarse una cadena sin saltos mágicos?

## 2. Test de transformación/transducción

Debe poder marcarse:

```text
τ: EC → EC
θ: Dᵢ → Dⱼ
```

Si todo ocurre dentro de un mismo dominio, quizá sea una estructura de transformación, no una MTC completa.

## 3. Test contrafactual de capacidad

Eliminar `V`:

```text
¿A seguiría produciendo M por el mismo mecanismo?
```

Si sí, `V` fue mal identificado o es irrelevante.

## 4. Test contrafactual de contexto

Cambiar `K`:

```text
¿V conserva capacidad de realización?
```

Si la respuesta nunca cambia, quizá `K` está submodelado.

## 5. Test de especialización

Fraude debe demostrar además:

```text
W~ ≠ W*
objetivo oculto
opacidad/asimetría
```

Educación debe demostrar aprendizaje/competencia, no sólo obediencia.

## 6. Contraejemplos

### No-MTC A: caída de una piedra

```text
empuje → piedra cae
```

No necesita estado cognitivo.

### No-MTC B: compilador puramente digital

```text
código fuente → binario
```

Puede llamarse transducción informacional en otro marco, pero no MTC si no participa cognición como componente funcional.

### Frontera: reflejo automático

Si una señal produce respuesta sin procesamiento cognitivo relevante para el modelo, debe justificarse por qué la arquitectura cognitiva añade poder explicativo.
