# Invariantes

## Invariantes de autoridad

1. El humano conserva la soberanía sobre objetivos, límites y decisiones dentro de las restricciones de plataforma.
2. El backend no inventa directivas humanas.
3. Un resultado del sistema de IA no se convierte automáticamente en decisión.
4. La persistencia requiere autoridad y destino explícitos.

## Invariantes estructurales

1. Frontend, arquitectura local, backend y sistema anfitrión conservan identidades diferentes.
2. La arquitectura local no se reduce a la transcripción.
3. El snapshot no se confunde con el estado completo.
4. El prompt no se confunde con el comando normalizado.
5. Operación y alcance se modelan como dimensiones diferentes.
6. La organización realizada por el backend no elimina la modularidad.

## Invariantes epistemológicos

1. Fuente, inferencia, hipótesis, pregunta y decisión humana deben poder distinguirse.
2. La procedencia de resultados relevantes debe conservarse.
3. Una ausencia no debe rellenarse silenciosamente con invención.
4. La repetición de una afirmación no aumenta por sí sola su autoridad.

## Invariantes de ejecución

1. Toda operación debe ajustarse a capacidades y permisos reales.
2. El backend sólo media con mecanismos expuestos por el sistema receptor.
3. Las incompatibilidades de contrato deben detectarse antes de ejecutar cuando sea posible.
4. Los errores de herramienta deben clasificarse como errores, no como contenido cognitivo válido.
5. La reintegración debe preservar el alcance del comando original.

## Invariantes de interacción

1. Todo prompt humano se interpreta como portador de uno o más comandos.
2. Una pregunta puede funcionar arquitectónicamente como comando aunque no tenga forma imperativa.
3. El humano debe poder inspeccionar la interpretación del sistema.
4. El humano debe poder corregir, rechazar o sustituir elementos.
5. Una proyección debe declarar o permitir inferir su alcance.

## Invariantes de portabilidad

1. La identidad del paquete reside en sus estructuras, contratos e invariantes, no en un proveedor concreto.
2. El adaptador puede cambiar sin redefinir el núcleo.
3. Una instalación contextual no modifica automáticamente el paquete fuente.
4. El runtime no se confunde con la memoria o el artefacto que contiene la lógica.

## Prueba mínima de conservación

Una implementación candidata falla la pertenencia si:

- presenta cada respuesta del modelo como parte automática del estado;
- llama frontend al analizador de fuentes sin distinguir niveles;
- llama backend al renderer final sin distinguir niveles;
- elimina el control humano sobre persistencia;
- no puede distinguir un comando local de una directiva global;
- depende de funciones privadas del proveedor que el runtime no expone;
- no mantiene trazabilidad de las modificaciones estructurales.

