# Casos negativos

Esta suite cubre tests 01–46 de los cuatro catálogos y los no-colapsos del kernel. `no_colapsos.yaml` contiene los fallos mínimos; cada ejecución debe demostrar detección y recuperación, no sólo rechazo nominal.

Ejecuta [MRRE-NEGATIVE-CASES](no_colapsos.yaml) contra [MRRE-NON-COLLAPSE](../../01_kernel_estable/05_reglas_de_no_colapso.md) y registra recuperación según [MRRE-FAILURES](../../04_runtime/04_manejo_de_fallas_y_recuperacion.md).
