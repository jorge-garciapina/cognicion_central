# MÉTODOS DE COMANDOS CENTRALES

Procedimientos transversales que convierten el modelo abstracto de Comando Central en una operación gobernada.

## Documentos

- `NORMALIZACION_DE_COMANDOS_v0_1_0.md`
- `CICLO_DE_VIDA_DEL_COMANDO_v0_1_0.md`
- `PLANIFICACION_Y_ENRUTAMIENTO_v0_1_0.md`
- `AUTORIZACION_RIESGO_Y_PERSISTENCIA_v0_1_0.md`
- `TRAZABILIDAD_Y_EVENTOS_DE_COMANDO_v0_1_0.md`

## Papel dentro del artefacto integral

- **Función:** especificar cómo interpretar, normalizar, validar, planificar, enrutar, observar y cerrar comandos.
- **Entradas:** `CommandEnvelope`, canon, permisos, registros, capacidades y contexto.
- **Salidas:** comando validado, plan, rutas de ejecución, trace, gates y evidencia operacional.
- **Consumidores:** Command Center, orquestador, aplicaciones y mantenimiento del sistema.
- **Límite:** los métodos no definen objetivos humanos ni se conceden autoridad para persistir.
