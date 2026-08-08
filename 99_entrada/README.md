# 99_entrada

Única puerta de ingreso para archivos nuevos o todavía no clasificados.

## Procedimiento

1. Depositar aquí el archivo sin alterar su nombre.
2. Comprobar legibilidad, hash, duplicados y versión.
3. Clasificarlo con `00_gobierno/registros/POLITICA_DE_ORGANIZACION.md`.
4. Identificar autoridad, ciclo de vida, representación y dependencias.
5. Moverlo a una ubicación definitiva.
6. Actualizar registro, README de destino y bitácora.

Un archivo no debe permanecer aquí indefinidamente. Si no puede clasificarse, debe registrarse el motivo y la decisión pendiente.

## Papel dentro del artefacto integral

- **Función:** actuar como frontera controlada entre material externo no clasificado y el repositorio gobernado.
- **Entradas:** archivos explícitamente presentados para incorporación, con su nombre y contenido originales.
- **Salidas:** hashes, diagnóstico de duplicados, propuesta de clase, autoridad, estado, dependencias y ubicación definitiva.
- **Consumidores:** gobierno, registro de archivos y README del destino aprobado.
- **Límite:** permanecer en entrada no vuelve activo un archivo; ningún contenido debe incorporarse, descartarse o promoverse silenciosamente.
