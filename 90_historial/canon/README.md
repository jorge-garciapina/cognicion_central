# Historial canónico

Fotografías versionadas e inmutables del documento canónico.

Nunca deben sobrescribirse. El estado vigente reside en `00_gobierno/canon`.

## Papel dentro del artefacto integral

- **Función:** mantener fotografías inmutables de estados canónicos anteriores.
- **Entradas:** versiones canónicas cerradas al aprobarse un estado posterior.
- **Salidas:** evidencia exacta para auditoría, comparación, rollback conceptual y reconstrucción de decisiones.
- **Consumidores:** gobierno y revisiones que necesiten distinguir lo vigente de lo aprobado en otra fecha.
- **Límite:** una fotografía histórica nunca debe editarse ni utilizarse como autoridad presente frente al canon vivo.
