# Composición, anidamiento y escalas

> **Proyecto:** COGNICIÓN_CENTRAL  
> **Entidad:** `MÁQUINA_DE_TRANSDUCCIÓN_COGNITIVA` (`MTC`)  
> **Versión de formalización:** `0.1.0`  
> **Fecha:** `2026-08-10`  
> **Estado:** `FORMALIZACIÓN PROPUESTA / NO CANÓNICA`  
> **Autoridad:** la incorporación al canon requiere decisión humana explícita.

## 1. Tesis

Una MTC puede contener otras MTC o conectarse con ellas.

## 2. Escala micro

```text
señal
→ cognición de un agente
→ acción
```

## 3. Escala meso

```text
A interviene sobre B
B actúa sobre C
C produce manifestación
```

Cada agente puede tener su propio `EC`.

## 4. Escala macro

```text
normas
→ roles
→ múltiples agentes
→ coordinación
→ manifestación colectiva
```

## 5. Ejemplo del collar

```text
MICRO:
Jeanne → Rohan

MESO:
Jeanne → Rohan → joyeros

MACRO:
corte + mercado + jerarquías + reputación
```

## 6. Contrato de composición

Dos máquinas `MTC_A` y `MTC_B` pueden componerse si:

```text
salida/intervención de A es tipo-compatible con entrada de B
invariantes no se contradicen
contextos pueden alinearse
procedencia se conserva
las funciones no se colapsan semánticamente
```

## 7. Patrón de cascada

```text
MTC_A.M
→ se convierte en I_B
→ MTC_B
→ M_B
```

Ejemplo institucional:

```text
ley promulgada
→ intervención para funcionario
→ autorización
→ intervención para empresa
→ construcción
```

## 8. Patrón de red

No todas las máquinas son lineales:

```text
        R1
       /  \
I → R2    R3 → agregación → M
       \  /
        R4
```

## 9. Riesgo de falsa unidad

Una red social grande no debe llamarse MTC sólo porque contiene personas. Debe existir una cadena identificable de intervención, transformación, acción, capacidad y manifestación.
