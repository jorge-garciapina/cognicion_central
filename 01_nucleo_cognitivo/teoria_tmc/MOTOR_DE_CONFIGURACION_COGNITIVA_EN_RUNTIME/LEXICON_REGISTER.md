# Registro léxico y de notación MCCR

## Política

Los términos heredados conservan el sentido de su fuente. Los términos locales se marcan `MCCR_LOCAL`; no se presentan como vocabulario canónico. La notación aparece después del concepto y de un ejemplo.

| Término | Definición operativa | Procedencia/estado |
|---|---|---|
| COGNICION_CENTRAL | Arquitectura gobernada por el humano para registrar, seleccionar, combinar, ejecutar, validar y actualizar estructuras, herramientas y aplicaciones mediante comandos trazables. | `[FUENTE_CC]` canon |
| MCCR | Motor de Configuración Cognitiva en Runtime; servicio que transforma una necesidad situada y capacidades efectivas en un plan prevalidado. | `[DECISION_HUMANA]`, `MCCR_LOCAL` |
| configuración operacional | Asignación situada de estructuras, capacidades, orden, bindings, validadores y gates que puede ejecutarse bajo restricciones. | `[INFERENCIA]`, `MCCR_LOCAL` |
| solicitud estructurada | Representación generada por AC-HIA/backend desde el comando humano; contiene objetivo, alcance, restricciones, autoridad, resultado y persistencia. | AC-HIA + extensión local |
| EXECUTION_PLAN | Contrato prevalidado que declara qué componentes actuarán, en qué orden, con qué bindings, permisos, validadores, handoffs y condiciones de parada. No es el resultado ni la ejecución. | AC-HIA nombra el objeto; MCCR detalla el contrato |
| NO_FEASIBLE_PLAN | Salida explicativa cuando ningún candidato satisface todas las restricciones duras. | `MCCR_LOCAL` |
| estructura cognitiva | Organización reconstruible con identidad, rol operativo, invariantes y proyección portable. | Registro/Búsqueda Cognitiva |
| capacidad | Función realmente expuesta por un componente o por el host bajo permisos y límites actuales. | AC-HIA |
| binding | Acoplamiento explícito entre un rol lógico del plan y una capacidad concreta disponible. | AC-HIA/MCCR |
| grafo posible | Estructuras y combinaciones conocidas que podrían participar antes de considerar el contexto actual. | `MCCR_LOCAL` |
| grafo disponible | Parte del grafo posible que está localizada, accesible, compatible y permitida ahora. | `MCCR_LOCAL` |
| subgrafo activo | Corte mínimo del grafo disponible elegido para cumplir la solicitud. | MTC-WORK + `MCCR_LOCAL` |
| cadena | Secuencia parcial ordenada de transformaciones con puertos compatibles. | MTC/cApp + `MCCR_LOCAL` |
| candidato de plan | Ensamblaje todavía no seleccionado que satisface, o se está comprobando si satisface, contratos. | `MCCR_LOCAL` |
| hard constraint | Regla no negociable derivada de autoridad, seguridad, permisos, identidad, contrato o exigencia humana explícita. | Canon/AC-HIA + `MCCR_LOCAL` |
| soft objective | Preferencia evaluable sólo después de comprobar validez: calidad, costo, latencia, estabilidad u otra prioridad. | `MCCR_LOCAL` |
| gate | Punto que impide avanzar hasta obtener un veredicto, capacidad o decisión requerida. | AC-HIA/MCCR |
| runtime | Capacidades efectivas expuestas por el sistema anfitrión; no mecanismos privados presumidos. | Prompt Central/AC-HIA |
| evento | Cambio observado que puede afectar ejecución, estado o validez del plan. | Canon/MTC/AC-HIA |
| replanificación | Reconfiguración posterior a un evento que conserva objetivo, autoridad e invariantes y minimiza cambio innecesario. | MTC/AC-HIA + `MCCR_LOCAL` |
| fixture | Caso reproducible con entrada, estado, transformación, salida esperada, validaciones y razón de prueba. | `[DECISION_HUMANA]`, `MCCR_LOCAL` |

## Notación local, introducida desde un ejemplo

Concepto: para producir un video ACCD, el repositorio contiene muchas estructuras posibles; sólo algunas están accesibles; el plan activa la región de video, una instancia contextual, su adaptador y validadores.

Relación con CC: el Registro y Búsqueda Cognitiva localizan; AC-HIA aporta comando/capacidades; MCCR selecciona; el runtime ejecuta.

Ejemplo concreto: la capacidad de generar imágenes puede existir en el diseño, pero si el host no la expone no pertenece a la configuración disponible. Un plan de guion textual puede seguir siendo válido si el resultado solicitado lo permite.

Notación:


```text
G_possible → G_available(t) → G_active(Q_t) → Π_t
```

- `G_possible`: grafo de posibilidades conocidas.
- `G_available(t)`: corte utilizable en el tiempo/contexto t.
- `Q_t`: solicitud estructurada situada; nombre local, no objeto que deba escribir el humano.
- `G_active(Q_t)`: subgrafo mínimo seleccionado para esa solicitud.
- `Π_t`: instancia de `EXECUTION_PLAN`; se lee “plan de ejecución situado”.

La notación no afirma cálculo numérico ni optimización matemática. Es una ayuda de dirección y trazabilidad.

## Términos que no deben colapsarse


```text
prompt ≠ comando normalizado
estructura ≠ portador ≠ manifestación
registro ≠ selector ≠ planificador
plan ≠ ejecución ≠ resultado
capacidad posible ≠ capacidad disponible
válido ≠ óptimo
feedback ≠ verdad
instancia regional ≠ instancia contextual
codominio ≠ manifestación
MCCR ≠ Orquestador ≠ AC-HIA backend ≠ runtime
```
