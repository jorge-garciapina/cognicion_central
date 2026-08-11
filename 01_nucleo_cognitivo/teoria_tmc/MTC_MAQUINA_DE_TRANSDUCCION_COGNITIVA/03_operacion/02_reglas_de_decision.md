# Reglas de decisión

## 1. Selección de ideas

Crear una idea activa cuando al menos una condición sea verdadera:

```text
S1  su omisión rompe la explicación del mecanismo;
S2  preserva un invariante o un no-colapso relevante;
S3  conecta dos zonas sin las cuales la cadena parece mágica;
S4  explica una condición de realizabilidad;
S5  formula una consecuencia necesaria para comprender el resultado;
S6  resuelve una distinción central del objetivo humano;
S7  aporta soporte necesario para una tesis nuclear.
```

No crear idea cuando sólo:

```text
D1  repite otra formulación sin función nueva;
D2  nombra un componente MTC sin afirmar nada sobre él;
D3  añade color histórico periférico;
D4  reformula una tautología;
D5  depende de inferencia no soportada;
D6  anticipa una decisión de realización;
D7  pertenece al dominio de variación y no afecta el caso actual.
```

## 2. Formulación

| Valor ACCD | Usarlo cuando la idea… |
|---|---|
| `proposicion_definicional` | delimita qué es una entidad, estado o distinción |
| `proposicion_relacional` | explica una relación, dependencia, mediación o cadena |
| `proposicion_operativa` | formula una operación o modo de funcionamiento |
| `proposicion_argumentativa` | sostiene una tesis o justificación |
| `formulacion_abierta_controlada` | no cabe sin distorsión en las cuatro anteriores |

Una idea contrastiva no requiere un tipo de formulación llamado “contrastiva”; debe usar la forma proposicional que corresponda y expresar el contraste en su texto y relaciones.

## 3. Rol conceptual

```text
nuclear
  la omisión destruye la explicación central o un mecanismo seleccionado.

puente
  conecta zonas funcionales que quedarían separadas; suele hacer visible una mediación.

contrastiva
  preserva una diferencia, oposición, límite o no-equivalencia indispensable.

complementaria
  matiza, explica condiciones o sostiene una idea principal sin ser ella el núcleo.

derivada
  aparece como consecuencia o ampliación de ideas anteriores.
```

Desempate:

```text
si preserva no-colapso                  → contrastiva
si conecta dos mecanismos/subgrafos     → puente
si la omisión rompe el núcleo           → nuclear
si depende de otras como consecuencia   → derivada
en otro caso con función de soporte      → complementaria
```

## 4. Peso relativo

El peso mide importancia estructural, no probabilidad de verdad.

```text
W = 0.35 N + 0.30 L + 0.20 C + 0.15 P
```

Donde:

- `N`: necesidad para el núcleo;
- `L`: pérdida reconstructiva al omitirla;
- `C`: centralidad funcional en el grafo de ideas;
- `P`: carga de preservación de invariantes o interfaces.

Cada componente se puntúa entre `0` y `1`. El resultado se redondea a dos decimales y se calibra comparativamente dentro de la colección. No se obliga a que la suma de pesos sea `1`.

Guía:

```text
0.90–1.00  indispensable
0.75–0.89  muy importante
0.55–0.74  relevante
0.30–0.54  secundaria conservada
0.00–0.29  revisar si debe eliminarse
```

## 5. Modo de presencia

| Valor | Criterio conceptual |
|---|---|
| `explicita` | debe aparecer de forma clara al menos una vez |
| `explicita_reiterada` | debe reaparecer porque organiza varias zonas y su pérdida entre ellas rompería comprensión |
| `implicita_estructurante` | organiza el conjunto sin requerir enunciación constante; sólo si no oculta incertidumbre o distinción crítica |
| `localizada` | corresponde a un tramo conceptual específico |
| `transversal` | atraviesa varias partes o mecanismos, aunque no tenga que repetirse literalmente |

`explicita_reiterada` expresa necesidad de recurrencia conceptual. `transversal` expresa alcance. Si ambas aplican, elegir `explicita_reiterada` cuando la explicitación repetida sea necesaria; en otro caso elegir `transversal`.

## 6. Relaciones entre ideas

| Relación ACCD | Derivación permitida |
|---|---|
| `condicion` | una idea establece precondición de otra |
| `consecuencia` | una idea resulta funcional o causalmente de otra |
| `contraste` | preserva diferencia, oposición o no-equivalencia |
| `equivalencia_parcial` | comparte función o contenido sin identidad total |
| `expansion` | despliega aspectos contenidos en otra |
| `soporte` | aporta razón, evidencia o mecanismo que refuerza otra |
| `subordinacion` | depende estructuralmente de otra y no es autónoma en el conjunto |
| `articulacion_libre_controlada` | conexión justificada no reducible a las anteriores |

No trasladar directamente una arista `MOBILIZES`, `OPERATES_IN` o `REALIZES`. Primero formular las proposiciones y luego preguntar qué relación conceptual mantienen.

## 7. Compresión

Una unidad MTC puede descartarse si cumple todas:

```text
1. no pertenece al núcleo seleccionado;
2. no preserva una distinción;
3. no completa una interfaz causal;
4. no modifica el estatus epistemológico de otra idea;
5. no es requerida para la reconstrucción;
6. su función ya está cubierta por una idea trazada.
```

Toda eliminación se registra en el sidecar.

## 8. Epistemología

Ejemplos de modalidad:

```text
SOURCE_DIRECT:
  “Rohan dispone de prestigio social reconocido.”

MODEL_DERIVED:
  “En la reconstrucción MTC, ese prestigio funciona como la capacidad movilizada.”

INFERENCE:
  “Esto sugiere que la confianza de los joyeros dependió parcialmente del prestigio de Rohan.”

HYPOTHESIS:
  “Una hipótesis del modelo es que, sin ese reconocimiento social, la entrega no habría ocurrido del mismo modo.”
```

## 9. Múltiples MTC

Si MTC detecta cascada o anidamiento:

1. formular una idea nuclear por máquina sólo si cada máquina aporta un mecanismo necesario;
2. formular ideas de interfaz para las salidas que alimentan otras máquinas;
3. usar rol `puente` para interfaces conceptuales;
4. no fusionar receptores, capacidades o manifestaciones de máquinas distintas;
5. validar reconstrucción local y global.

