# GRAMÁTICA DE COMANDOS CENTRALES

**ID:** `CC-CMD-GRAMMAR`  
**Versión:** `0.1.0`  
**Estado:** `PROVISIONAL / ESPECIFICACIÓN EJECUTABLE POR INTERPRETACIÓN`

## 1. Forma mínima

Un comando válido requiere como mínimo:

```yaml
verb:
target:
objective:
```

Si `target` es implícito y de riesgo bajo, puede resolverse por contexto. Si existe persistencia o acción externa, debe quedar inequívoco.

## 2. Forma compacta humana

```text
<VERBO> <TARGET>
OBJETIVO: <objetivo>
ALCANCE: <scope opcional>
RESTRICCIONES: <constraints opcional>
SALIDA: <expected output opcional>
PERSISTENCIA: <mode opcional>
```

Ejemplo:

```text
FORMALIZA REGISTRO_DE_ESTRUCTURAS_COGNITIVAS
OBJETIVO: convertirlo en registro operativo
PERSISTENCIA: OUTPUT_PROPOSAL
```

## 3. Forma normalizada

```yaml
command:
  intent:
    verb: FORMALIZE
    target: CC://01_nucleo_cognitivo/registro_estructuras_cognitivas
    objective: convertir el inventario en registro operativo
  persistence:
    mode: OUTPUT_PROPOSAL
```

## 4. Reglas

### G1 — lenguaje natural primero

La gramática no exige que el humano use keywords.

### G2 — un verbo dominante

Un comando puede contener suboperaciones, pero debe declarar un verbo dominante. Si hay dos objetivos independientes, el runtime puede dividirlo en subcomandos.

### G3 — target resoluble

Un target puede ser:

- entidad;
- archivo;
- estructura cognitiva;
- aplicación;
- proyecto;
- corpus;
- artefacto;
- espacio lógico;
- output previo;
- acción externa disponible.

### G4 — objetivo no es target

```text
TARGET = sobre qué se actúa
OBJECTIVE = qué estado o resultado se busca
```

### G5 — restricciones negativas son contratos

Expresiones como "no borres", "no publiques", "no cambies el canon" deben convertirse en constraints explícitas.

### G6 — persistencia por defecto

Si el humano no pide guardar/cambiar, usa `NONE`.

### G7 — verbos de cambio

`UPDATE`, `REGISTER`, `PROMOTE`, `DEPRECATE`, `DELETE`, `MERGE`, `SEPARATE`, `FORMALIZE` no implican automáticamente escritura. Primero se resuelve el modo de persistencia.

### G8 — autorización contextual

"Apruebo" sólo autoriza la propuesta inequívocamente activa. No es una autorización universal.

## 5. Subcomandos

Un comando complejo puede descomponerse:

```yaml
parent_command: CMD-100
subcommands:
  - CMD-100.1 SEARCH
  - CMD-100.2 ANALYZE
  - CMD-100.3 GENERATE
  - CMD-100.4 VALIDATE
```

Los subcomandos heredan constraints, pero no permisos adicionales.
