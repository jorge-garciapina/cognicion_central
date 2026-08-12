# Integración acumulativa

## 1. Integrar

Integrar significa modificar la organización relevante del sistema respecto de un aporte. La modificación puede afectar componentes o relaciones:

```txt
componentes
relaciones
pesos
restricciones
accesibilidad
secuencia disponible
capacidad de respuesta
criterios de admisión futuros
```

## 2. Acumular

Acumular significa que una transición posterior comienza desde un estado ya afectado por transiciones anteriores. El sistema no tiene que conservar cada aporte como objeto separado.

```txt
u_0 se integra en S_0 → S_1
u_1 se integra en S_1 → S_2

por tanto, u_1 no llega a S_0: llega a S_1
```

## 3. Formas de persistencia

| Forma | Qué persiste |
|---|---|
| Material | Componentes o recursos incorporados |
| Relacional | Vínculos, posiciones o compatibilidades |
| Ponderal | Pesos, prioridades o intensidades |
| Procedimental | Reglas o capacidades de tratamiento |
| Selectiva | Umbrales de admisión, inhibición o acceso |
| Comprimida | Resumen operativo de una trayectoria |
| Potencial | Capacidad latente activable en condiciones futuras |

## 4. Olvido compatible

El olvido es compatible cuando:

- elimina detalle irrelevante;
- comprime información sin anular su efecto funcional;
- reemplaza una representación por otra que conserva capacidad explicativa;
- borra algunos efectos pero deja otros que condicionan el futuro.

No es compatible cuando cada transición elimina toda consecuencia previa y el sistema vuelve funcionalmente al mismo estado inicial.

## 5. Emergencia limitada

PIEA no exige afirmar propiedades emergentes fuertes. Basta demostrar una propiedad organizativa del estado que no pueda atribuirse al último aporte aislado. Si se usa el término «emergente», debe declararse el nivel y la evidencia.

## 6. Sensibilidad a la trayectoria

Una prueba fuerte compara dos trayectorias:

```txt
trayectoria A → S_a
trayectoria B → S_b
mismo aporte u bajo mismo κ
resultados posteriores diferentes
```

La diferencia apoya dependencia de trayectoria sólo si no se explica mejor por variables contextuales omitidas.

## 7. Orden

PIEA no exige no conmutatividad universal. Puede haber aportes cuyo orden no importe en cierto subdominio. Lo necesario es que exista dependencia del estado, no que toda permutación produzca resultados diferentes.

