# Especialización persuasiva/publicitaria

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Mapeo

```yaml
O: anunciante
R: consumidor/audiencia
I: anuncio_o_pieza_contextualizada
Q:
  - necesidades
  - preferencias
  - identidad
  - costos
  - riesgo
EC0: indiferencia_o_baja_relevancia
transformations:
  - atencion
  - interes
  - valor_percibido
  - confianza
  - intencion
A: comprar_o_solicitar_informacion
V: capacidad_de_compra_y_decision
K: mercado_sistema_de_pagos_disponibilidad
M: transaccion_o_lead
G: ingreso_o_objetivo_comercial
F: metricas_y_respuesta
```

## 2. Relación con AIDA

AIDA puede verse como macrotrayectoria:

```text
EC0 indiferencia
→ EC1 atención
→ EC2 interés
→ EC3 deseo/preferencia
→ EC4 ready-to-act
→ A compra/clic/registro
```

La acción observable sigue separada del estado.

## 3. Transformación

```text
atención → relevancia → preferencia → intención
```

son transformaciones intra-cognitivas.

## 4. Transducción

```text
mensaje → estado cognitivo
estado → acción
acción + capacidad económica + mercado → transacción
```

## 5. Contrato epistemológico

Publicidad legítima NO requiere `W~ ≠ W*`. Puede utilizar persuasión sin engaño. Si la pieza depende de afirmaciones falsas u ocultamiento material, puede cruzar hacia una especialización fraudulenta.

## 6. Atención

La atención puede modelarse como:

- componente de `EC`;
- capacidad limitada del receptor;
- recurso comercial en ciertas aplicaciones.

No debe imponerse una única lectura a toda MTC.

## 7. Feedback

```text
impresión → clic → conversión → métricas → ajuste de I
```

La versión adaptativa es un ejemplo claro de MTC cerrada.
