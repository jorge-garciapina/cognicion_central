COMANDO: ME GUSTA LA FORMA EN QUE ESTÁS PLANTEANDO EL DISEÑO: La implementación debe comenzar por la primera dirección. El analizador permitirá aprender de textos ya construidos antes de fijar prematuramente las reglas del generador. LA ESTRUCTURA COGNITIVA QUE TENGO QUIZÁS NO ES NECESARIAMENTE IGUAL A LO QUE SUGIERES CON EL DISEÑO, PERO ES DE UTILIDAD. ESTE [NUEVO PAQUETE] PODRÍA SER MÁS BIEN ALGO "DINÁMICO", EXPLICO ESTO:

HASTA ESTE MOMENTO, LOS PAQUETES COGNITIVOS QUE HE CREADO SE BASAN EN REGLAS ESTABLECIDAS, ANALIZAN UNA ENTRADA SIGUIENDO REGLAS Y CONSTRUYEN UNA SALIDA QUE ES CONSECUENCIA DE APLICAR LAS REGLAS, ES DECIR, APLICAN UN PROCESO DE TRANSFORMACIÓN. ESA ES LA IDEA DETRÁS DE CASI TODOS LOS PAQUETES COGNITIVOS QUE ESTÁN EN EL ACERVO Y EN GENERAL, EN LA MEMORIA DE ESTE PROYECTO (ART_cognicion_central(i).txt), A ESTO LO LLAMO "ESTÁTICO". EN EL [NUEVO PAQUETE] PODRÍA PASAR ALGO DISTINTO: EN VEZ DE CREAR UN SISTEMA DE REGLAS PARA CREAR UNA SALIDA ÚNICA, SE PODRÍA CREAR UN SISTEMA QUE ANALICE UNA ENTRADA, POR EJEMPLO UN GUIÓN DE UN VIDEO (ver ejemplos en 03_aplicaciones\campos_atencionales\videos_youtube\hydilae\assets\analisis_ejemplos_de_guion_de_youtube), UNA NOTA PERIODÍSTICA (COMO LAS QUE ESTÁN EN EL ACERVO DE ESTA DISCUSIÓN O EN GENERAL, CUALQUIER NOTA PERIODÍSTICA), LAS PÁGINAS DE UN LIBRO (COMO LOS QUE ESTÁN EN 04_conocimiento_y_contexto\memoria_conceptual\construccion_conceptual) O EN GENERAL CUALQUIER TEXTO Y ESTE [NUEVO PAQUETE] SE ENCARGARÍA DE ENCONTRAR LA ESTRUCTURA DETRÁS, ES DECIR, PODRÍA CONSTRUIR UNA "ESTRUCTURA" A PARTIR DE ESTA MANIFESTACIÓN LINGÜÍSTICA (ES DECIR, LO QUE YA SUGIERE EL DISEÑO ACTUAL), UNA VEZ QUE SE TENGA DICHA ESTRUCTURA ENTONCES SE TENDRÍA EL "ESQUELETO" DE DICHA MANIFESTACIÓN PARTICULAR, Y AHÍ INICIARÍA LA SEGUNDA PARTE.

LA SEGUNDA PARTE SE TRATA DE "LLENAR" LAS PARTES VACÍAS DE LA ESTRUCTURA (EL "ESQUELETO") CON PARTES NUEVAS PROVENIENTES DE DISTINTAS FUENTES, EL [NUEVO_PAQUETE] SE ENCARGARÁ DE ANALIZAR LAS FUENTES Y PROPONER EQUIVALENCIAS ESTRUCTURALES QUE SE ADAPTEN A LA ESTRUCTURA DISPONIBLE. POR EJEMPLO:

EN LOS CASOS QUE YA ESTUDIAMOS SOBRE LA ELECCIÓN DE MANDOS (03_aplicaciones\creacion_de_contenido\referencias_de_estilo\interpretacion_de_eventos\ejemplos_de_noticias\noticia-cambios_en_mandos_militares\unidad_de_analisis_1\noticiero-reuters-v1.md Y 03_aplicaciones\creacion_de_contenido\referencias_de_estilo\interpretacion_de_eventos\ejemplos_de_noticias\noticia-cambios_en_mandos_militares\unidad_de_analisis_1\noticiero-reuters-v2.md) SE PODRÍA USAR LA MISMA ESTRUCTURA "ESQUELETO" DE CUALQUIERA DE ÉSTOS PARA PRESENTAR UNA NOTICIA SOBRE ELECCIÓN. EJEMPLO:

SI SE USARA noticiero-reuters-v2 PARA HABLAR SOBRE LA ELECCIÓN DEL NUEVO PRESIDENTE DE COLOMBIA:
"
1 Colombia ha elegido un nuevo presidente
2 eligiendo al exabogado penalista que no había ocupado ningún cargo público previo a su toma de posesión Abelardo de la Espriella,
3 quien estará encargado de garantizar los derechos de los ciudadanos y la unidad nacional según el Artículo 188 de la Constitución Política.
4 Espriella tiene una agenda más liberal que su predecesor Gustavo Petro.
5 Espriella asumió el cargo después de ganar por un estrecho margen sobre el candidato Iván Cepeda"

LA ESTRUCTURA DEL TEXTO EN TÉRMINOS GENERALES ES:

- FUNCIÓN: INFORMAR SOBRE EL CAMBIO EN UNA POSICIÓN GUBERNAMENTAL.
- PERSONAJES:
  - PERSONA ELEGIDA
  - PERSONA REEMPLAZADA
  - PERSONA SECUNDARIA COMPLEMENTARIA
- IDENTIDAD DE PERSONA ELEGIDA:
  - NEUTRA
- IDENTIDAD DE PERSONA REEMPLAZADA:
  - NEUTRA
- COMPARACIÓN ENTRE AMBOS:
  - CARACTERÍSTICA_DE_PERSONA_ELEGIDA "MÁS QUE" CARACTERÍSTICA_DE_PERSONA_REEMPLAZADA

ORIGINAL:
1 Iran has changed its secretary of the Supreme National Security Council,
2 appointing former Revolutionary Guards commander Mohsen Rezaei as second-in-command
3 on the body that coordinates the ​country's security and foreign policy.
4 Rezaei is more of an outspoken public figure ‌than his predecessor, Mohammad Baqer Zolqadr.
5 The appointment was announced late on Sunday by President Masoud Pezeshkian's deputy director of communications.

SI SE USARA noticiero-reuters-v1:
"1 Colombia ha elegido un nuevo presidente,
2 el candidato ultraderechista aliado cercano de Donald Trump,
3 en un contexto latinoamericano en el que han sido elegidos candidatos más cercanos a Washintong.
4 Espriella reemplazará a Gustavo Petro en la presidencia.
5 Petro se retirará de la política."

LA ESTRUCTURA DEL TEXTO EN TÉRMINOS GENERALES ES:

- FUNCIÓN: INFORMAR SOBRE EL CAMBIO EN UNA POSICIÓN GUBERNAMENTAL.
- PERSONAJES:
  - PERSONA ELEGIDA
  - PERSONA REEMPLAZADA
  - PERSONA VINCULADA A PERSONA_ELEGIDA
- IDENTIDAD DE PERSONA ELEGIDA:
  - ultraderechista
- IDENTIDAD DE PERSONA REEMPLAZADA:
  - NEUTRA
- COMPARACIÓN ENTRE AMBOS:
  - NO HAY

ORIGINAL:
1 Iran has appointed Mohsen Rezaei as secretary of its Supreme National Security Council,
2 promoting a prominent hardliner and close ally of Supreme Leader Ayatollah Mojtaba Khamenei
3 to the role more than five months into the conflict with the United States.
4 Rezaei replaces Mohammad Baqer Zolqadr ​as second-in-command of the body that coordinates Iran's security and foreign policy and is chaired by President Masoud Pezeshkian. ‌
5 Zolqadr was appointed as political adviser to Khamenei.
