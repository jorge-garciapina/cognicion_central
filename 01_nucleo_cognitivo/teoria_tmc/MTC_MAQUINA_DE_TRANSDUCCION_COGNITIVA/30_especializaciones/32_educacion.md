# Especialización educativa

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Objetivo

Modelar aprendizaje cuando una intervención modifica estructuras cognitivas y la nueva configuración se manifiesta en competencia demostrable.

## 2. Mapeo

```yaml
O: docente_sistema_educativo
R: alumno
I: explicacion_ejemplo_ejercicio_feedback
Q:
  - curiosidad
  - meta_academica
  - obligación
  - identidad_de_aprendiz
EC0: modelo_incompleto_o_incorrecto
τ:
  - diferenciacion
  - integracion
  - analogia
  - correccion
  - transferencia
EC_star: modelo_operable
A: resolver_explicar_transferir
V:
  V0: capacidades_cognitivas_previas
  V_plus: competencia_construida_o_ampliada
K: tarea_entorno_de_evaluacion
M: desempeño_que_demuestra_competencia
G: aprendizaje_transferible
F: error_respuesta_prueba
```

## 3. Particularidad importante

En fraude, `V` es principalmente preexistente. En educación, la propia trayectoria puede **construir o ampliar V**.

```text
V₀ --aprendizaje→ V+
```

Esto obliga a la MTC general a permitir capacidades dinámicas.

## 4. No confundir conducta con aprendizaje

```text
repetir una respuesta
≠ necesariamente
poseer una estructura transferible
```

La especialización educativa debería validar `M` mediante transferencia a situaciones nuevas.

## 5. Contrato

Requiere:

- veracidad/corrección proporcional al dominio;
- posibilidad de corrección;
- distinción entre explicación y evidencia;
- evaluación de comprensión, no sólo cumplimiento.
