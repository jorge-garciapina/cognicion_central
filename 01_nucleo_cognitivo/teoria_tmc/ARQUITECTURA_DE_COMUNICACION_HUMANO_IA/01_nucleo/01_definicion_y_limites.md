# Definición y límites

## Definición

La **Arquitectura de comunicación humano–IA** es una estructura de interacción con estado que coordina el intercambio entre un humano, una arquitectura cognitiva local y un sistema de IA anfitrión.

Sus dos superficies son:

```text
FRONTEND_COGNITIVO_DE_INTERACCION
= acoplamiento cognitivo entre humano y arquitectura local.

BACKEND_COGNITIVO_DE_INTERACCION
= acoplamiento operativo entre arquitectura local y sistema de IA.
```

Entre ambas superficies se mantiene la arquitectura cognitiva local específica del chat, proyecto o aplicación.

## Distinciones obligatorias

```text
HUMANO
= autoridad que formula objetivos, comandos y decisiones.

PROMPT
= portador lingüístico habitual de uno o más comandos.

COMANDO
= unidad funcional de intervención humana interpretada por la arquitectura.

OPERACIÓN
= transformación solicitada por un comando.

ALCANCE
= zona del estado sobre la que el comando puede producir efectos.

ESTADO COGNITIVO LOCAL
= organización vigente de objetivos, estructuras, decisiones, versiones,
   fuentes, restricciones, tareas y resultados autorizados.

RESULTADO
= salida producida por un modelo, herramienta o proceso.

MANIFESTACIÓN
= forma perceptible mediante la cual el estado o un resultado se presenta.

SNAPSHOT
= proyección parcial, selectiva e inspeccionable del estado.
```

## Lo que la arquitectura no es

```text
ARQUITECTURA ≠ transcripción completa
ARQUITECTURA ≠ modelo LLM
ARQUITECTURA ≠ proveedor
ARQUITECTURA ≠ memoria de plataforma
ARQUITECTURA ≠ una respuesta aislada
ARQUITECTURA ≠ una interfaz exclusivamente visual
```

## Cambio de modelo explicativo

El modelo superficial de chat puede representarse así:

```text
mensaje → respuesta → mensaje → respuesta
```

El modelo arquitectónico es:

```text
comando humano
→ interpretación
→ integración en el estado
→ ejecución mediada
→ clasificación del resultado
→ reintegración autorizada
→ proyección inspeccionable
→ nuevo comando humano
```

La secuencia visible continúa siendo lineal, pero el contenido organizado por ella forma una estructura acumulativa, relacional y versionada.

## Alcance de la versión

Esta versión define:

- componentes;
- responsabilidades;
- contratos mínimos;
- operaciones básicas;
- validadores;
- ejemplos de comportamiento;
- puntos de extensión.

No define aún:

- un esquema de almacenamiento definitivo;
- una API ejecutable;
- una interfaz gráfica concreta;
- un proveedor obligatorio;
- la instalación automática en chats.

