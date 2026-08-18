# Fixtures MRRE

Los fixtures son entradas reproducibles; no respuestas literales únicas. Cada caso conserva portador/ref, contexto, fuentes, alcance, hash si existe, propiedades esperadas, alternativas y restricciones. Los manifests activos están en `fixture_manifest.yaml` y los casos detallados en `../../09_casos_y_ejemplos/`.

Un fixture puede estar `BLOCKED_SOURCE_PATH_PENDING`; eso prueba manejo de ausencia y no autoriza inventar la fuente.

El índice machine-readable es [MRRE-FIXTURE-MANIFEST](fixture_manifest.yaml), y los dossiers operativos están en [MRRE-CASE-INDEX](../../09_casos_y_ejemplos/README.md). La forma de entrada sigue [MRRE-SCHEMA-MANIFESTATION](../../02_contratos_y_schemas/manifestation_input.schema.yaml).
