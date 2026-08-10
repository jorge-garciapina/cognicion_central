# Transformación cognitiva

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Definición

> **Transformación cognitiva** es una operación que modifica la configuración de un estado cognitivo manteniéndose dentro del dominio cognitivo.

Formalmente:

```text
τ : EC → EC
```

Una secuencia produce:

```text
EC₀ --τ₁→ EC₁ --τ₂→ ... --τₙ→ EC*
```

## 2. Qué puede cambiar

Una transformación puede:

- activar/desactivar nodos;
- cambiar pesos de nodos o aristas;
- añadir relaciones;
- eliminar relaciones;
- crear nuevas representaciones;
- cambiar confianza;
- cambiar relevancia;
- resolver o introducir objeciones;
- alterar expectativas;
- cambiar intención;
- reestructurar el marco desde el cual se interpreta una situación.

## 3. Representación mínima

Si:

```text
EC(t) = (N, E, W, Q, H)
```

entonces `τ` puede actuar sobre:

```text
N = nodos activos
E = aristas
W = pesos
Q = estructura motivacional relevante
H = historial/estado acumulado
```

Ejemplo:

```text
τ_confianza:
  aumenta peso de "Jeanne tiene acceso"
  disminuye peso de "esto puede ser un engaño"
```

## 4. Transformación no es persuasión

Persuasión es una especialización. La misma gramática sirve para:

```text
confusión → comprensión
ignorancia → representación
indiferencia → atención
duda → confianza
creencia binaria → modelo diferencial
```

## 5. Macroestado y microestado

### Macroestado
Describe una configuración funcional gruesa:

```text
ATENCIÓN
INTERÉS
PREFERENCIA
INTENCIÓN
```

### Microestado
Explicita la estructura interna:

```yaml
intencion: alta
confianza: suficiente
objeciones: contenidas
friccion: baja
siguiente_paso: claro
```

El macroestado NO reemplaza el grafo; es una vista comprimida.

## 6. Contrato de etapa

Cada transformación debería declarar:

```yaml
transformation:
  id:
  input_state_requirements:
  operation:
  target_delta:
  preserved_invariants:
  produced_state:
  evidence_of_change:
  failure_conditions:
```

## 7. Condición de cierre

Una transformación no se valida porque haya aparecido el mensaje correcto. Se valida por una diferencia justificable entre `EC_pre` y `EC_post`, aunque dicha diferencia sólo pueda estimarse indirectamente.

## 8. Relación con la MTC

La transformación constituye el **motor intra-dominio**. La transducción comienza cuando la máquina cruza desde representación interna a conducta o desde conducta/capacidad a manifestación externa.
