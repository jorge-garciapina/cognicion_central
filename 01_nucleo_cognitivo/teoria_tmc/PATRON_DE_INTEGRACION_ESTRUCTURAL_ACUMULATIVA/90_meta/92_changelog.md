# Changelog

## 0.2.0 — 2026-08-11

### Cambiado

- Se estableció `S_{t+1}=𝓘_{κ_t}(S_t,u_t)` como única ecuación nuclear.
- Se preservó la semántica de la relación descubriente `S_{t+1}=T_C(S_t,u_t)` con notación compatible con ACCD.
- Se separaron formalmente transición PIEA y proyección codominial ACCD.
- Se añadió referencia normativa a `[ACCD-EQ]` en su ruta de campos atencionales.
- Se especializaron por referencia los componentes FAC sin reproducir sus definiciones.
- Se reescribieron ontología, invariantes, dominio de variación y pruebas.

### Eliminado

- `H_t` como argumento universal;
- `θ_t` como bloque redundante;
- `Γ_t` como duplicado del estado posterior;
- operador `π` de observación;
- variantes diferenciales y operadores alternativos;
- composición funcional especulativa del mecanismo.

### Conservado

- dependencia del estado previo;
- integración contextual;
- persistencia selectiva;
- reorganización, inhibición, compresión y pérdida compatibles;
- carpeta `ejemplos/` explícitamente vacía;
- estado provisional y autoridad humana.

## 0.1.0 — 2026-08-11

Primera formalización local. Queda como antecedente y no debe mezclarse silenciosamente con `0.2.0`.

