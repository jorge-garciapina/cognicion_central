QUIERO ESTUDIAR LAS SECCIONES.
ME BASARÉ EN:
INTUICIÓN 1: EL NÚCLEO QUE TIENEN LAS SECCIONES ES EL MISMO SIN IMPORTAR EN QUÉ CONTEXTO SE ESTÉ MATERIALIZANDO (TELEVISIÓN, RADIO, REVISTA, ETCÉTERA)
CONCLUSIÓN 1: LOS CAMPOS ATENCIONALES TENDRÁN SECCIONES, PERO UNA SECCIÓN PODRÍA SER TRANSVERSAL A DISTINTAS REALIZACIONES.
EJEMPLOS:

- SI LA SECCIÓN ES "HISTORIA DE LA PUBLICIDAD", ESTA MISMA SECCIÓN SE PODRÁ MATERIALIZAR EN CAROUSEL, VIDEO CORTO O VIDEO LARGO. LO MISMO PARA CUALQUIER OTRA SECCIÓN.
  CONCLUSIÓN 2: ESO QUIERE DECIR QUE LA SECCIÓN NO ES LO MISMO QUE LA REALIZACIÓN

AQUÍ HAY UN GRAFO:

```txt
[GRAFOS — PÁGINA 1]
GRAFOS = [
  {
    nombre: "campo_atencional_publicidad",
    nodos: [
      {tema_central-publicidad}
      { seccion_1},
      { seccion_2},
      { seccion_3},
      { carousel-1_seccion_1},
      { carousel-2_seccion_1},
      { carousel-3_seccion_1},
      { video-corto-1_seccion_1},
      { video-corto-2_seccion_1},
      { carousel-1_seccion_1},
      { carousel-2_seccion_1},
      { video-corto-1_seccion_2},
      { video-corto-2_seccion_2},
      { video-corto-3_seccion_2},
      { video-largo-1_seccion_3}
      { video-largo-2_seccion_3}

    ],
    aristas: [
      { origen: tema_central-publicidad, destino: seccion_1 },
      { origen: tema_central-publicidad, destino: seccion_2 },
      { origen: tema_central-publicidad, destino: seccion_3 },

      { origen: seccion_1, destino: carousel-1_seccion_1 },
      { origen: seccion_1, destino: carousel-2_seccion_1 },
      { origen: seccion_1, destino: carousel-3_seccion_1 },
      { origen: seccion_1, destino: video-corto-1_seccion_1 },
      { origen: seccion_1, destino: video-corto-2_seccion_1 },
      { origen: seccion_1, destino: carousel-1_seccion_1 },
      { origen: seccion_1, destino: carousel-2_seccion_1 },

      { origen: seccion_2, destino: video-corto-1_seccion_2 },
      { origen: seccion_2, destino: video-corto-2_seccion_2 },
      { origen: seccion_2, destino: video-corto-3_seccion_2 },

      { origen: seccion_3, destino: video-largo-1_seccion_3 },
      { origen: seccion_3, destino: video-largo-2_seccion_3 },
    ]
  },
]

```

EL CASO DE LA TELEVISIÓN ABIERTA PROPORCIONA UN MAPA MENTAL:

1. OCURRE SEGMENTACIÓN POR HORARIOS
2. UN PROGRAMA DENTRO DE UN HORARIO PUEDE TENER SECCIONES (POR EJEMPLO, EN TELEVISIÓN ABIERTA, EL SÁBADO TRANSMITÍAN "DISNEY CLUB". DICHO PROGRAMA CONTENÍA SECCIONES COMO D-AVENTURA, MANUALIDADES, E INCLUSO EPISODIOS DE PROGRAMAS COMO "EL RECREO").

A PARTIR DE LO ANTERIOR TENGO UNA INFERENCIA:
"UN CAMPO ATENCIONAL SEGMENTA, UNA SECCIÓN OFRECE UNA FORMA PARTICULAR DE VALOR DENTRO DE ESA SEGMENTACIÓN"
