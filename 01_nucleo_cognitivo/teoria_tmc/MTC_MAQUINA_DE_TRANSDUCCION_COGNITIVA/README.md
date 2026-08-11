https://chatgpt.com/g/g-p-6a777363d7108191b2cafddb3fd424f0-cognicion-central/c/6a7a5ee4-fc58-83e8-9337-80584fa4c8a5

# ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL

**ID:** `ADP-MTC-CC-001`  
**Versión:** `0.1.0`  
**Fecha:** `2026-08-10`  
**Estado:** `MÓDULO COGNITIVO INTEGRADO / PROPUESTA NO CANÓNICA`  
**Autoridad soberana:** `HUMANO`  
**Espacio lógico:** `MTC-ADAPTER://`  
**Registrado por:** `cognicion_central_mtc.md@0.2.0` y `como_leer_el_artefacto_adjunto.md@0.2.0`

## 1. Definición

`ADAPTADOR_MTC_A_CONSTRUCCION_CONCEPTUAL` es la pieza cognitiva mínima que convierte una reconstrucción MTC validada y trazable en la materia conceptual estructurada que ACCD consume como `construccion_conceptual`.

No traduce campos uno a uno. Selecciona qué mecanismos, relaciones, distinciones e invariantes de una realización MTC deben convertirse en ideas activas; formula esas ideas; construye su jerarquía y sus relaciones; valida que el mecanismo relevante siga siendo reconstruible; y serializa el resultado conforme al contrato vigente de ACCD.

```text
REALIZACIÓN
  ↓
MTC + COGNICIÓN_CENTRAL_MTC
  ↓ reconstrucción, pertenencia, epistemología y traza
MTC_OUTPUT_PARA_ADAPTADOR
  ↓
ADAPTADOR
  ├─ selección conceptual
  ├─ descomposición proposicional
  ├─ jerarquización
  ├─ ponderación
  ├─ relaciones
  ├─ preservación
  └─ validación reconstructiva
  ↓
CONSTRUCCION_CONCEPTUAL
  ↓
ACCD + ENSAMBLAJE + PROTOCOLO
  ↓
MANIFESTACIÓN CODOMINIAL
```

## 2. Resultado material

El adaptador entrega dos salidas coordinadas:

1. `construccion_conceptual`: puerto consumible por ACCD, sin campos epistemológicos inventados.
2. `trazabilidad_del_adaptador`: sidecar que conserva procedencia MTC, estatus epistemológico, decisiones de compresión y validación.

Sólo la primera se entrega al puerto temático de ACCD. El sidecar acompaña la auditoría y permite reconstrucción, pero no cambia el esquema formal de `construccion_conceptual`.

## 3. Arquitectura del paquete

```text
00_gobierno/
  manifiesto, fuentes, autoridad y estado

01_arquitectura/
  definición, fronteras, grafo y responsabilidades

02_contratos/
  MTC→adaptador, adaptador→ACCD y sidecar de trazabilidad

03_operacion/
  funciones cognitivas, reglas de decisión, validadores y fallas

04_plantillas/
  solicitud a MTC, salida, validación y prompt de runtime

05_fixture/
  fraude del collar como prueba de arquitectura

90_meta/
  ambigüedades reales, trazabilidad de fuentes y changelog
```

## 4. Orden de lectura

1. `00_gobierno/00_manifiesto.md`
2. `01_arquitectura/01_definicion_y_fronteras.md`
3. `02_contratos/01_contrato_mtc_a_adaptador.md`
4. `02_contratos/02_contrato_adaptador_a_accd.md`
5. `03_operacion/01_funciones_cognitivas.md`
6. `03_operacion/02_reglas_de_decision.md`
7. `03_operacion/03_validadores_y_fallas.md`
8. `04_plantillas/04_prompt_de_ejecucion_runtime.md`

Los archivos de `05_fixture/` no definen el adaptador. Sólo prueban que sus contratos y validadores pueden operar sobre una realización conocida.

## 5. Invariantes

```text
ADP-INV-01  MTC comprende y valida la realización; el adaptador no reconstruye MTC.
ADP-INV-02  ACCD realiza el contenido; el adaptador no genera guion ni manifestación.
ADP-INV-03  resumen ≠ construcción conceptual.
ADP-INV-04  componente MTC ≠ idea activa por correspondencia automática.
ADP-INV-05  V ≠ M y EC ≠ A deben sobrevivir cuando sean relevantes.
ADP-INV-06  toda idea debe tener función conceptual y trazabilidad.
ADP-INV-07  toda relación debe usar una categoría vigente de ACCD.
ADP-INV-08  importancia estructural ≠ certeza epistemológica.
ADP-INV-09  la salida ACCD no recibe campos nuevos de trazabilidad.
ADP-INV-10  ninguna compresión puede volver irrecuperable el mecanismo nuclear.
ADP-INV-11  insuficiencia de entrada se reporta; no se completa silenciosamente.
ADP-INV-12  toda persistencia o promoción canónica requiere decisión humana.
```

## 6. Estado de uso

El paquete es ejecutable como especificación cognitiva en un runtime que haya instalado MTC mediante `cognicion_central_mtc.md`. Forma parte integral del paquete cognitivo MTC: el módulo central registra sus fuentes, nodos, aristas, vecindario, operadores, ruta y pruebas; el bootstrap comprueba su disponibilidad al arrancar. Esta integración no modifica el paquete ACCD ni convierte el adaptador en canon. La promoción a cApp o implementación de software queda pendiente de decisión humana y pruebas adicionales.
