# Validadores

## Cadena mínima

```yaml
validation_chain:
  V0_COMMAND:
    question: Is the command interpretable?
  V1_AUTHORITY:
    question: Is the operation authorized?
  V2_SCOPE:
    question: Are targets and exclusions resolved?
  V3_COMPONENTS:
    question: Are required components available and compatible?
  V4_RUNTIME:
    question: Does the host expose the required capability and permissions?
  V5_STRUCTURE:
    question: Are invariants preserved?
  V6_EPISTEMIC:
    question: Are source, inference, hypothesis and decision distinguished?
  V7_PROJECTION:
    question: Does the manifestation represent the requested state and scope?
  V8_HUMAN:
    question: Is human approval required before integration or persistence?
```

## V0 — Comando

Pasa cuando:

- se conserva el prompt original;
- se identifica al menos una operación;
- los objetivos son resolubles;
- las restricciones explícitas se conservan;
- la ambigüedad material se señala.

## V1 — Autoridad

Pasa cuando:

- el actor tiene autoridad para solicitar la operación;
- no viola restricciones superiores;
- una herramienta o modelo no suplanta una decisión humana;
- la persistencia tiene autorización suficiente.

## V2 — Alcance

Pasa cuando:

- se distingue operación de alcance;
- se identifican objetivos y exclusiones;
- el efecto no se extiende más allá de lo indicado;
- las directivas globales se aplican sólo dentro de su dominio declarado.

## V3 — Componentes

Pasa cuando:

- el backend identifica los componentes necesarios;
- las dependencias directas están resueltas;
- los contratos son compatibles;
- las versiones son conocidas o la incertidumbre está declarada;
- los componentes ausentes se reportan.

## V4 — Runtime

Pasa cuando:

- la capacidad existe;
- los permisos son suficientes;
- el formato es admitido;
- las restricciones del entorno están incorporadas al plan;
- no se afirma acceso a mecanismos internos no expuestos.

## V5 — Estructura

Pasa cuando:

- se preservan las distinciones nucleares;
- el resultado responde al comando;
- las relaciones relevantes se conservan;
- no se confunden snapshot y estado;
- no se reduce integración a concatenación.

## V6 — Estado epistemológico

Pasa cuando:

- las fuentes tienen procedencia;
- las inferencias se marcan como tales;
- las hipótesis no se presentan como hechos;
- las decisiones humanas permanecen identificadas;
- los errores no se integran como conocimiento.

## V7 — Proyección

Pasa cuando:

- la forma elegida sirve al propósito;
- se representa el alcance solicitado;
- se muestra lo necesario para inspeccionar y continuar;
- las omisiones relevantes son declarables;
- la manifestación no pretende ser el estado completo.

## V8 — Humano

Se activa obligatoriamente cuando:

- se modifica canon;
- se persiste en un destino no autorizado previamente;
- se ejecuta una operación destructiva;
- se resuelve una ambigüedad con consecuencias materiales;
- se transforma una propuesta en decisión;
- una regla del proyecto reserva la decisión al humano.

## Resultado

```yaml
validation_report:
  command_id:
  status: PASS | CONDITIONAL_PASS | FAIL | WAITING_HUMAN
  validators:
    - id:
      status:
      evidence: []
      failures: []
  permitted_effects: []
  blocked_effects: []
  human_decision_required:
```

