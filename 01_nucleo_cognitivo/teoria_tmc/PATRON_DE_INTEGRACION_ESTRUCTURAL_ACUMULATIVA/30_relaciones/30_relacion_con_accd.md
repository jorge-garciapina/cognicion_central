# Relación con ACCD

## 1. Separación principal

PIEA y ACCD modelan operaciones distintas:

| Arquitectura | Pregunta | Operación |
|---|---|---|
| PIEA | ¿Cómo cambia internamente un sistema al integrar un aporte desde su estado actual? | transición de estado |
| ACCD | ¿Cómo se proyecta una estructura cognitiva bajo una instancia contextual hacia el codominio de una realización? | proyección codominial |

PIEA:

```math
S_{t+1}=\mathcal I_{\kappa_t}(S_t,u_t)
```

ACCD, citada sin redefinición:

```math
P^{r_k}(m^i_j,\varphi_n)=\mu^{r_k}(m^i_j,\varphi_n)
\in\Omega^{r_k}
```

Fuente normativa: `[ACCD-EQ]`, §§1, 5–10 y 17.

## 2. No correspondencias

No deben aplicarse estas equivalencias:

```txt
S_t ≠ m^i_j
u_t ≠ φ_n
𝓘_{κ_t} ≠ P^{r_k}
S_{t+1} ≠ μ^{r_k}
espacio de estados ≠ Ω^{r_k}
```

Pueden coincidir en una instancia particular sólo si se construye y justifica un mapeo adicional. No son equivalentes por definición.

## 3. PIEA como estructura proyectable

El modelo conceptual PIEA completo puede tratarse como una estructura cognitiva `m_PIEA` preparada para ACCD. En ese caso, la ecuación ACCD produce una manifestación del modelo —por ejemplo, un documento, grafo o video—, no un estado interno de la instancia estudiada.

```math
P^{r_k}(m_{PIEA},\varphi_n)
=
\mu^{r_k}(m_{PIEA},\varphi_n)
\in\Omega^{r_k}
```

Esta notación se utiliza únicamente dentro del nivel ACCD y con sus significados originales.

## 4. Forma MAANC no presumida

`[ACCD-EQ]` permite la forma expandida:

```math
P^{r_k}(M^i(t_j),\varphi_n)=\mu^{r_k}(M^i(t_j),\varphi_n)
```

PIEA no usará esa forma si no existe evidencia de que un módulo MAANC `M^i` produjo efectivamente la construcción conceptual. Nombrar el tema y la estructura no basta para atribuir el proceso a MAANC.

## 5. Encadenamiento correcto

```txt
núcleo PIEA
→ adaptación de caso mediante FAC
→ estructura cognitiva contextualizada
→ protocolo de realización ACCD
→ manifestación codominial
```

Dentro del caso adaptado puede operar:

```math
S_{t+1}=\mathcal I_{\kappa_t}(S_t,u_t)
```

La manifestación posterior no reemplaza esa dinámica; la representa, comunica o materializa según el protocolo elegido.

## 6. Reutilización por cita

PIEA no repite las definiciones ACCD de:

- tema;
- módulo MAANC;
- construcción conceptual;
- corriente segmentada;
- instancia contextual;
- realización;
- protocolo;
- codominio;
- manifestación codominial;
- sección, UOA y campo atencional.

Cuando una operación necesite esos conceptos deberá recuperar `[ACCD-EQ]` con su ruta y autoridad vigentes.

