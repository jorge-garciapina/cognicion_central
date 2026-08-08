# EC-FREQ-005 — Composición modular de capacidades

**Estado:** `A3 / PROVISIONAL / NÚCLEO ACTIVO`  
**Rango:** `5 de 10`  
**Frecuencia:** `126 / 760 unidades únicas (16.6%)`  
**Dispersión:** `7 áreas`  
**Rol dominante:** construir capacidades mayores mediante unidades con contratos y bordes explícitos  
**Familias candidatas:** `Diseño + Método`  

## Definición

La composición modular de capacidades organiza componentes relativamente autónomos para que, mediante contratos, dependencias y validación, produzcan una operación mayor que ninguno realiza por separado.

Un módulo no es cualquier fragmento. Debe tener identidad, rol, entrada, salida, borde, dependencias y criterio de validez suficientes para ser seleccionado, sustituido o reutilizado.

## Firma estructural

```text
MÓDULO A ─contrato─┐
MÓDULO B ─contrato─┼→ ENSAMBLAJE → CAPACIDAD COMPUESTA
MÓDULO C ─contrato─┘

cada módulo: identidad + rol + I/O + borde + validación
ensamblaje: compatibilidad + orden + coordinación
```

## Funcionamiento

1. Descompone una intención en responsabilidades operativas.
2. Busca o diseña módulos capaces de cumplirlas.
3. Verifica identidad, contrato y compatibilidad.
4. Asigna orden, dependencias y flujos.
5. Ensambla sin borrar la trazabilidad de cada parte.
6. Valida localmente los módulos y globalmente la composición.
7. Persiste la configuración para repetición, sustitución o versionado.

## Invariantes

- Existen al menos dos unidades componibles o una unidad con submódulos explícitos.
- Cada módulo tiene responsabilidad diferenciada.
- Las interfaces y dependencias son declarables.
- La composición produce una función global coherente.
- Un módulo puede examinarse o versionarse sin confundirlo con todo el sistema.

## Dominio de variación

Pueden variar número de módulos, granularidad, acoplamiento, secuencia, paralelismo, sustitución, catálogo y dominio. Se pierde la identidad si las partes son sólo secciones nominales o si la composición depende de contexto oculto.

## Ejemplos localizados

### 1. mNodes como piezas operacionales

[`maquinas-cognitivas.txt`](../../teoria_tmc/maquinas-cognitivas.txt) compara las estructuras cognitivas con piezas LEGO y exige tipado/validación para que el ensamblaje no produzca caos.

### 2. cApps

Los registros `cApps/capp-como-objeto-independiente.txt` y `cApps/capp-como-pieza-de-la-teoria.txt` de `ART_incubacion-conceptual.txt` describen cApps como unidades invocables y como composiciones de estructuras orientadas a un fin.

### 3. Ingeniería de Estructuras Cognitivas

[`ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt`](../../../02_metodos_y_herramientas/ingenieria_de_estructuras_cognitivas/ingenieria-estructuras-cognitivas-metodo-COMMENTS.txt) usa catálogo, selección y ensamblaje de subgrafos. Una pieza puede ser, a su vez, un sistema compuesto.

### 4. Arquitecturas cognitivas reutilizables

[`Arquitecturas_Cognitivas_Reutilizables_COGNICION_CENTRAL.pdf`, p. 19](../../arquitecturas/Arquitecturas_Cognitivas_Reutilizables_COGNICION_CENTRAL.pdf) separa funciones, cApps, diseños, esquemas, instancias, builds y evidencia para que cada objeto pueda versionarse y reutilizarse de manera independiente.

### 5. Biblioteca Escénica Composable

[`canales_como_infraestructura.md`](../../../03_aplicaciones/creacion_de_contenido/modelos_expresivos/canales_como_infraestructura.md) propone escenas, gestos y composiciones reutilizables que otros agentes combinan para producir obras nuevas.

## Relaciones con otras estructuras frecuentes

- La jerarquía anida módulos por escala.
- El grafo representa dependencias y puertos.
- La mediación conecta contratos heterogéneos.
- El pipeline ordena módulos transformadores.
- La trazabilidad conserva qué módulo produjo cada resultado.

## Validación

La composición pasa si cada parte tiene rol verificable, las interfaces son compatibles y el resultado global satisface un objetivo que puede rastrearse a la interacción. Falla cuando todo depende de un módulo monolítico, cuando las piezas no pueden sustituirse o cuando la suma no produce integración.

## Antipatrones

- Fragmentación sin autonomía.
- Reutilización afirmada pero no probada.
- Interfaces implícitas.
- Dependencias circulares ocultas.
- Módulo que redefine el contrato global.

## Lectura de frecuencia

La firma apareció en 126 unidades y en las siete áreas. La confianza es alta para la estructura; el conteo es conservador porque muchos documentos usan composición sin los términos módulo, componente, pieza, biblioteca o catálogo en proximidad.

## Proyección portable

```yaml
modular_composition:
  objective:
  modules:
    - id:
      role:
      input:
      output:
      dependencies: []
      invariants: []
  assembly_relations: []
  global_validation:
```
