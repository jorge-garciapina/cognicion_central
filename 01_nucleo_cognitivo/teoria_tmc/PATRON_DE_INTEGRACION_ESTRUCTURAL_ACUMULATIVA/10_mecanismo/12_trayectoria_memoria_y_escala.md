# Trayectoria, memoria y escala

## 1. Trayectoria

Una trayectoria es la secuencia efectiva de estados y transiciones:

```txt
S_0 → S_1 → S_2 → … → S_n
```

La trayectoria completa es un recurso analítico. No forma parte obligatoria de la entrada de cada transición porque la información relevante debe estar contenida en el estado funcional.

## 2. Memoria interna y externa

### Memoria interna

La información relevante está representada dentro de `S_t`.

### Memoria externa acoplada

El sistema consulta un registro externo para integrar el aporte. En ese caso, el estado funcional debe declarar el acoplamiento y las partes del registro accesibles. La memoria no se añade como argumento genérico `H_t`; se incorpora a la delimitación operacional de `S_t`.

## 3. Memoria no equivale a archivo

Un archivo histórico puede existir sin afectar ninguna transición. Sólo cuenta como parte del estado PIEA cuando su contenido o disponibilidad modifica la integración.

## 4. Escalas

PIEA puede analizarse en varias escalas:

```txt
micro:      componentes locales y cambios inmediatos
meso:       episodios o subsistemas
macro:      trayectoria global del sistema
```

Cada escala debe declarar:

- qué cuenta como estado;
- qué cuenta como aporte;
- cuál es la unidad de transición;
- qué información se pierde al resumir niveles inferiores;
- cómo se relaciona con niveles superiores.

## 5. Anidamiento

Un aporte en una escala puede ser el estado o resultado de un subsistema en otra. No deben reutilizarse los mismos símbolos sin índices o nombres de escala.

Ejemplo abstracto:

```txt
subsistema A produce su estado A_{j+1}
el sistema B trata esa configuración como aporte u_t^B
```

La relación debe justificarse mediante una interfaz, no por semejanza nominal.

## 6. Tiempo

`t` ordena transiciones. Puede representar segundos, turnos conversacionales, comidas, sesiones, revisiones o episodios. No presupone intervalos uniformes ni continuidad física.

