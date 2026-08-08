# Herramientas de artefactos para COMPANY CODE

Documentos reutilizables para serializar proyectos de software como JSONL/NDJSON, analizarlos con evidencia y reconstruir sus archivos de texto.

## Contenido

- `artifact-description.txt`: define el formato y contiene el código de referencia de un generador universal. El código está embebido en documentación; este archivo no se registra como script ejecutable independiente.
- `code-artifact-analysis.txt`: prompt de análisis técnico con inventario, dependencias, interfaces, datos, seguridad, operación y plan priorizado.
- `artifact-writter.txt`: contrato de reconstrucción desde JSONL; conserva la grafía original. Su espacio para el código del writer está vacío y la versión descrita omite binarios.

## Reglas de uso y admisión

- Estos documentos forman un ciclo `proyecto → artefacto → análisis → reconstrucción`, pero no garantizan ejecución ni equivalencia completa cuando existen binarios, truncados o archivos excluidos.
- No sustituyen automáticamente `artefacto-v3.txt`, `make-project-dump.cjs` ni `refine-from-jsonl.cjs`; cualquier unificación requiere comparación y decisión separadas.
- Ingresan aquí contratos, prompts y documentación reutilizables del ciclo COMPANY CODE. Los scripts autónomos y ejecutables deben ubicarse en la carpeta superior.

## Papel dentro del artefacto integral

- **Función:** especializar el método de artefactos para proyectos de software y coordinar descripción, análisis y reconstrucción.
- **Entradas:** repositorios de código, snapshots JSONL/NDJSON y contratos de seguridad o exclusión.
- **Salidas:** especificaciones de captura, informes técnicos verificables y contratos de materialización textual.
- **Consumidores:** la aplicación `03_aplicaciones/company_code` y tareas de auditoría o migración de software.
- **Límite:** la documentación con código embebido o slots vacíos no equivale a una herramienta instalada, probada o completa.
