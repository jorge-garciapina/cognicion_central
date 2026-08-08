# COMANDOS_CENTRALES

Primitivas cognitivas reutilizables para representar intenciones humanas como objetos operativos de COGNICION_CENTRAL.

## Documentos

- `MODELO_DE_COMANDO_CENTRAL_v0_1_0.md`: contrato semántico del `CommandEnvelope`.
- `GRAMATICA_DE_COMANDOS_CENTRALES_v0_1_0.md`: gramática normalizada.
- `ONTOLOGIA_DE_VERBOS_Y_TARGETS_v0_1_0.md`: verbos, targets y reglas de resolución.

## Papel dentro del artefacto integral

- **Función:** definir la identidad reusable del objeto Comando Central y sus relaciones fundamentales.
- **Entradas:** intención humana ya interpretada y reglas vigentes de gobierno.
- **Salidas:** contrato semántico, campos, tipos y vocabulario normalizado consumible por métodos y aplicaciones.
- **Consumidores:** Command Center, orquestador, trazabilidad, aplicaciones y futuros runtimes.
- **Límite:** el núcleo define qué es un comando; no decide por sí solo cuándo ejecutarlo, con qué herramienta ni si puede persistirse.
