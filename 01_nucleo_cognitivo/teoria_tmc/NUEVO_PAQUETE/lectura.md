El fragmento "El rápido desarrollo de tecnologías como la informatización, los sistemas no tripulados y la inteligencia está impulsando cambios en las formas de combate. En los futuros campos de batalla, las operaciones conjuntas en todos los dominios tenderán a convertirse en una forma operativa principal. En ese contexto, las fuerzas se encuentran dispersas, los efectos se concentran, el ritmo es rápido y los objetivos son múltiples. Al mismo tiempo, existen numerosas tareas operativas, un elevado grado de acoplamiento entre ellas y relaciones de cooperación complejas entre nodos. Cuando las comunicaciones se degradan y falta un mando unificado, los conflictos de decisión aumentan con rapidez; por ello, las cadenas de ataque tradicionales basadas en reglas ya no se adaptan bien al cierre rápido del ciclo observar-orientar-decidir-actuar" de la Universidad Nacional de Tecnología de Defensa de China (NUDT) sintetiza uno de los debates doctrinales más críticos del Ejército Popular de Liberación (EPL): la obsolescencia de las "cadenas de ataque tradicionales basadas en reglas" frente a la velocidad de la guerra moderna. [1, 2]
Para entender a qué se refieren los autores, es necesario desglosar este concepto bajo la óptica de la ingeniería de sistemas militares de vanguardia.

---

## 1. ¿Qué es una "cadena de ataque basada en reglas"?

En el diseño militar clásico e informatizado, una cadena de ataque (Kill Chain) es una secuencia lineal de pasos: Detectar $\rightarrow$ Fijar $\rightarrow$ Rastrear $\rightarrow$ Asignar blanco $\rightarrow$ Atacar $\rightarrow$ Evaluar.
Que esté "basada en reglas" significa que su funcionamiento interno está preprogramado mediante algoritmos rígidos de tipo inductivo o condicional (estructuras lógicas fijas como Si pasa X, entonces haz Y). Por ejemplo:

-
- Regla 1: SI un radar de tipo A detecta un caza enemigo, ENTONCES envía la señal al Centro de Comando Regional X.
- Regla 2: SI el Centro X recibe la señal, ENTONCES asigna la intercepción al Escuadrón de Cazas Y.
- Regla 3: SI el Escuadrón Y despega, ENTONCES el radar A debe iluminar el blanco continuamente.
-

## Este modelo asume un entorno ideal: comunicaciones perfectas, roles fijos para cada avión o radar, y una estructura piramidal donde un comandante centralizado aprueba cada paso de la regla.

## 2. ¿Por qué este modelo tradicional ya no funciona? (El diagnóstico del artículo)

Los investigadores de la NUDT explican que en los conflictos de alta intensidad contemporáneos, este enfoque lineal colapsa por tres factores disruptivos: [1]

-
- Saturación y Multiplicidad de Objetivos: Cuando hay cientos de drones, misiles y señuelos operando simultáneamente, el número de combinaciones posibles desborda las "reglas" preprogramadas. El sistema se vuelve incapaz de decidir qué regla aplicar primero. [3]
- Comunicaciones Degradadas (Guerra Electrónica Severa): Las cadenas basadas en reglas son frágiles porque son secuenciales. Si el enemigo interfiere el canal de comunicación entre el paso 2 y el paso 3 (por ejemplo, cortando el enlace de datos entre el radar y el centro de mando), toda la cadena se rompe por completo y el misil nunca se dispara.
- Ruptura del Ciclo OODA (Observar-Orientar-Decidir-Actuar): Al carecer de un mando unificado debido a la interferencia y la dispersión geográfica de las fuerzas, las unidades en el frente empiezan a emitir "decisiones conflictivas". Las reglas rígidas no saben cómo resolver contradicciones de prioridad en milisegundos, ralentizando el ciclo de respuesta frente a un enemigo que se mueve a "velocidad de máquina". [2]
- ***

## 3. La alternativa china: De la "Cadena" Rígida a la "Red de Destrucción" (Kill Web)

El núcleo del artículo científico es precisamente plantear una solución matemática y de modelado (el marco de relaciones multidimensionales "Función-Información-Cooperación") para transicionar hacia las Kill Webs (Redes de Destrucción) Inteligencializadas. [4, 5]
A diferencia de la cadena basada en reglas, la Kill Web impulsada por Inteligencia Artificial opera bajo los siguientes principios explicados en las publicaciones académicas de defensa chinas:

| Métrica / Concepto    | Cadena de Ataque Basada en Reglas (Tradicional)                                        | Red de Destrucción Inteligencializada (Moderna)                                                                              |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Topología Estructural | Lineal y rígida. Si un eslabón falla, el proceso muere.                                | Malla/Red distribuida. Si un nodo cae, la información busca otro camino de forma automática.                                 |
| Toma de Decisiones    | Centralizada. Depende de un cuartel general que aplique los manuales de procedimiento. | Descentralizada (Algorítmica). Los nodos cooperan de forma autónoma usando IA local (edge computing).                        |
| Adaptabilidad         | Baja. Requiere que ingenieros modifiquen las reglas del sistema ante nuevas amenazas.  | Alta (Auto-reconfigurable). La IA reasigna los recursos y las armas sobre la marcha según la geometría del campo de batalla. |

## En resumen, cuando el artículo dice que las cadenas tradicionales basadas en reglas no se adaptan, advierte que la rigidez de los sistemas de software militares del pasado es el camino más rápido hacia la derrota en una guerra electrónica moderna. La propuesta de la NUDT busca dotar al software militar de la flexibilidad matemática necesaria para que los sistemas de armas se auto-organicen y sigan atacando de forma efectiva, incluso si están completamente aislados de sus generales de alto mando. [1]

[1] [https://jc2.org.cn](https://jc2.org.cn/article/doi/10.20278/j.jc2.2096-0204.2025.0142)
[2] [https://paper.people.com.cn](https://paper.people.com.cn/rmlt/pc/content/202502/05/content_30059349.html)
[3] [https://www.163.com](https://www.163.com/dy/article/L3NTMDT10556C4JU.html)
[4] [https://jc2.org.cn](https://jc2.org.cn/article/doi/10.20278/j.jc2.2096-0204.2025.0142)
[5] [https://www.gm7.org](https://www.gm7.org/archives/136211)
[6] [https://www.spacejournal.cn](https://www.spacejournal.cn/ktfy/cn/article/id/37aec387-62f0-47fa-9f4b-f962628c8b51)
[7] [https://www.ship-research.com](https://www.ship-research.com/cn/article/id/fb9bc140-1839-470a-9e57-4ccd52229fd6)
