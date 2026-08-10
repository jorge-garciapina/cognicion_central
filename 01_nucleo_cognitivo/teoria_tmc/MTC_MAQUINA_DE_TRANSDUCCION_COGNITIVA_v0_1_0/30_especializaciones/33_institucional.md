# Especialización institucional y de autoridad

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Caso mínimo

```text
"Evacuen el edificio"
→ interpretación de orden
→ decisión de obedecer
→ movimiento de personas
→ edificio evacuado
```

## 2. Mapeo

```yaml
O: autoridad_o_sistema_normativo
R: funcionario_ciudadano_equipo
I: orden_norma_procedimiento
Q:
  - deber
  - rol
  - sancion
  - responsabilidad
EC_star:
  - norma_aplicable
  - autoridad_reconocida
  - accion_requerida
A: obedecer_autorizar_ejecutar
V: autoridad_trabajo_acceso_competencia
K: institucion_procedimiento_recursos
M: permiso_movimiento_obra_decision
G: cumplimiento_objetivo_institucional
F: auditoria_resultado_incidente
```

## 3. Ley como estructura simbólica

```text
texto normativo
→ interpretación
→ permisos/obligaciones
→ decisiones
→ acciones
→ estados materiales/sociales
```

La ley no produce hormigón directamente; coordina máquinas sociocognitivas que pueden terminar produciendo infraestructura.

## 4. Máquina anidada

```text
norma
→ funcionario
→ autorización
→ empresa
→ ejecución
→ obra
```

La manifestación de una MTC puede convertirse en intervención para la siguiente.

## 5. Contrato

Esta especialización requiere modelar:

- legitimidad/autoridad;
- competencia jurídica u organizacional;
- procedimientos;
- límites de facultades;
- responsabilidad;
- canales de revisión.
