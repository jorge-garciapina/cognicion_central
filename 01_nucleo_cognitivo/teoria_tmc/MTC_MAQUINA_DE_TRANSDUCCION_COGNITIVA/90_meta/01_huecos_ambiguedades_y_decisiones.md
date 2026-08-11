# Huecos, ambigüedades y decisiones

## 1. `formulacion_textual_de_la_idea` no está formalizada en el grafo

**Fuente formal:** `idea_activa` exige cinco componentes, pero no declara un campo para el texto concreto.  
**Uso operativo:** los ejemplos de video incluyen `formulacion_textual_de_la_idea`.  
**Problema:** sin texto, `formulacion_de_la_idea` sólo clasifica la forma y no porta la proposición.  
**Decisión local:** incluir `formulacion_textual_de_la_idea` en el perfil de interoperabilidad, sin presentarlo como campo canónico ya materializado.  
**Acción pendiente:** añadir formalmente el nodo/campo y sus aristas en el Grafo de Regiones o declarar otro mecanismo canónico para portar el texto.

## 2. `idea_id` aparece en protocolos, no en los componentes mínimos

**Problema:** `idea_relacionada` necesita una referencia estable.  
**Decisión local:** exigir `idea_id` como identificador técnico de serialización.  
**Acción pendiente:** formalizarlo como identidad de ítem o metacampo, sin confundirlo con contenido conceptual.

## 3. Ejemplos contienen valores fuera de enumeración

Se localizaron, entre otros:

```text
proposicion_contrastiva
proposicion_consecuencial_abierta
localizada_con_recapitulacion
oposicion
derivacion
recapitulacion
```

Estos valores no están declarados en las enumeraciones formales recuperadas. El adaptador no los usa. Reexpresa esos casos con valores vigentes:

```text
idea contrastiva
  → rol_conceptual: contrastiva
  → formulación relacional, argumentativa o abierta controlada

consecuencia
  → tipo_de_relacion: consecuencia

oposición
  → tipo_de_relacion: contraste

derivación
  → tipo_de_relacion: consecuencia o expansion, según semántica

recapitulación
  → no es relación vigente; debe expresarse como soporte, expansion o
    articulacion_libre_controlada si corresponde.
```

## 4. El protocolo de video omite texto concreto en una vista de su modelo

El protocolo lista `idea_id`, `formulacion_de_la_idea`, rol, peso, presencia y relaciones, pero los ejemplos necesitan texto proposicional. La especificación debe unificarse.

## 5. MTC no ofrece un único output empaquetado para este consumidor

`mtc_instance`, `trace_record`, resultados de operadores y etiquetas epistemológicas existen, pero están distribuidos.  
**Decisión local:** definir `MTC_OUTPUT_PARA_ADAPTADOR` como vista de interfaz que reúne outputs existentes.  
**Límite:** no es un nuevo esquema canónico de MTC ni duplica sus operadores.

## 6. ACCD no tiene campo epistemológico en `idea_activa`

**Riesgo:** perder `MODEL_DERIVED`, `INFERENCE` o `HYPOTHESIS`.  
**Decisión local:** conservar modalidad lingüística en la formulación y emitir sidecar externo.  
**Acción pendiente:** decidir si ACCD debe permanecer deliberadamente agnóstica a epistemología o si necesita un metacontrato fuera de `idea_activa`.

## 7. Semántica de dirección de relaciones

Las definiciones indican el tipo, pero no formalizan siempre si cada arista debe duplicarse en sentido inverso.  
**Decisión local:** las relaciones son dirigidas desde la idea contenedora hacia `idea_relacionada`; no se exige duplicación.  
**Validación:** la descripción debe eliminar ambigüedad.

## 8. Peso relativo

El rango `0..1` está formalizado, pero no la fórmula ni la obligación de suma.  
**Decisión local:** score estructural independiente por idea; la suma no se normaliza a `1`.  
**Acción pendiente:** validar empíricamente si ACCD interpreta los pesos como prioridad absoluta, ranking relativo o distribución.

## 9. Modo de presencia y decisiones de realización

Los nombres pueden sugerir distribución material.  
**Decisión local:** el adaptador asigna presencia conceptual; ACCD decide posteriormente en qué bloques, escenas o láminas se realiza.

## 10. Estado canónico

MTC v0.1.0 y este adaptador se declaran propuestas no canónicas. El paquete puede usarse experimentalmente, pero su incorporación a `CC://` requiere decisión humana explícita, registro y versionado.

