# Prompts para artefactos

Prompts operativos que coordinan la producción, comprensión o materialización de fotografías cognitivas.

`prompt-artifact_compilador-cognitivo.txt` define un ciclo de desarrollo guiado por snapshots y patches JSONL. Contiene, como slots internos, copias exactas de la definición `artefacto-v3.txt`, de `make-project-dump.cjs`, de `refine-from-jsonl.cjs` y de un materializador que también aparece serializado en `ART_incubacion-conceptual.txt`.

Las copias internas sirven como contrato autocontenido, pero no sustituyen las fuentes vigentes ni deben contabilizarse como evidencia independiente. Ingresan aquí nuevos prompts relacionados con artefactos; los scripts ejecutables permanecen en la carpeta superior.

## Papel dentro del artefacto integral

- **Función:** orquestar mediante instrucciones autocontenidas la captura, comprensión, refinamiento o materialización de artefactos.
- **Entradas:** definiciones vigentes del formato, scripts de referencia, objetivo humano y snapshot del proyecto.
- **Salidas:** secuencias de trabajo, contratos de respuesta y patches o instrucciones de reconstrucción.
- **Consumidores:** agentes humanos o de IA que ejecutan el ciclo de artefactos.
- **Límite:** una copia incluida para portabilidad no toma precedencia sobre la fuente vigente ni demuestra que el código fue ejecutado.
