/* REGALO 4 · Quesos, Salsas y Acompañantes
   Reescrito al formato largo, con dibujos.
   Base: el Bono 5 del curso (El Arte del Relleno), de los pocos bonos
   con contenido propio y no repetido. Más las salsas verificadas.
   ⚠ La guasacaca vive AQUÍ y en ningún otro lado: el Regalo 2 la
   menciona y remite a esta sección, para que no esté duplicada. */

window.REGALO_4 = {
  id: 'g4',
  tapa: 'regalo-4-quesos-salsas',
  kicker: 'Regalo 4',
  nombre: 'Quesos, Salsas y Acompañantes',
  sub: 'Lo que va adentro y lo que va al lado',
  promesa: 'El relleno es lo que te deja subir el precio sin que nadie discuta.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', hero:'intro-relleno', titulo:'El relleno es lo más rentable',
    lede:'Un pan sin relleno compite con cualquier panadería industrial. Uno relleno, no.',
    bloques:[
      { t:'p', c:'En panadería artesanal el relleno <b>no es un complemento: es el mayor diferenciador de precio</b>. Un pan relleno con bocadillo y queso tachirense es un producto con identidad que la industria no replica, y por eso no compite por precio.' },
      { t:'p', c:'Y hay un dato que ordena todo el negocio: <b>el pan relleno se vende antes del primer bocado</b>. Se vende en la pantalla del teléfono, en la foto del corte transversal. Por eso la técnica del relleno y la de la foto valen exactamente lo mismo.' },
      { t:'tip', tt:'La foto que más vende', c:'El corte transversal limpio mostrando el interior. Se hace con el pan <b>tibio, 8 a 10 minutos después</b> de salir del horno —no recién salido— y con cuchillo de sierra bien afilado, sin arrastrar. Un corte arrastrado aplasta las capas y arruina la foto.' },

      { t:'h', c:'El queso, que es la base de todo' },
      { t:'p', c:'El queso blanco venezolano es el estándar, y no por costumbre: por ciencia del sabor. Su <b>punto de fusión medio</b> es lo que lo hace ideal, porque se derrite completo sin volverse líquido aguado. El queso amarillo y el queso crema no replican ni esa textura ni ese equilibrio de sal.' },
      { t:'p', c:'Y su sal natural crea el contraste exacto con la dulzura del bocadillo de guayaba. <b>Ese equilibrio es lo que hace única a la acema andina</b>, y es lo que no se puede copiar con otro queso.' },
      { t:'tabla', cols:['Para qué','Cómo se corta','Cuánto'], filas:[
        ['Acema','Láminas de 3 a 4 mm','150 g por kilo de harina'],
        ['Pan de queso, en la masa','Rallado grueso','200 g por kilo'],
        ['Pan de queso, encima','Amarillo tipo Gouda','A cubrir'],
        ['Tequeños','Bastones de 5 a 7 cm × 1 cm','—']
      ]},
      { t:'nota', tt:'El queso a temperatura ambiente', c:'Si lo metes frío de la nevera <b>no se derrite</b>: sale del horno con el pan hecho y el queso entero adentro. Y si es maduro o bajo en grasa, tampoco. Queso blanco fresco, a temperatura ambiente, sin excepción.' },

      { t:'ilustra', items:[['leche','Queso fresco'],['papelon','Bocadillo'],['termometro','Temperatura ambiente'],['tijeras','Corte limpio']] }
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', hero:'pan-acema-bocadillo-queso', titulo:'Los diez rellenos',
    lede:'Cada uno con su gramaje, su temperatura y su truco.',
    bloques:[
      { t:'lista', items:[
        ['Bocadillo de guayaba','Firme pero no duro, a temperatura ambiente para que sea flexible. Láminas de 3 mm. <b>200 g por kilo de harina.</b> Si está muy seco, humedécelo con unas gotas de agua antes de usarlo.'],
        ['Bocadillo + queso','La combinación de identidad. <b>60% bocadillo, 40% queso.</b> Más bocadillo aplasta el queso; más queso satura de sal.'],
        ['Arequipe','A <b>60 °C</b> antes de usarlo. <b>Máximo 35 g por pan</b> o desborda. Cúbrelo con papel aluminio los primeros 10 minutos de horneado para que no se queme.'],
        ['Bocadillo + arequipe','La combinación premium del catálogo. Bocadillo de base, arequipe encima <b>en hilo fino</b>. Justifica un <b>precio 40% superior</b> al bocadillo con queso estándar.'],
        ['Chocolate','Semidulce al 50% de cacao, en <b>trozos de 1 cm, no rallado</b>, a temperatura ambiente. El calor del horno hace el trabajo.'],
        ['Crema pastelera','Firme, no líquida. Se coloca <b>fría, directo del refrigerador</b>, para que no fluya al enrollar. <b>Máximo 40 g por pieza.</b>'],
        ['Queso + jamón','Jamón de pierna en láminas finas, proporción <b>50-50</b>. El jamón aporta sal, así que usa un queso bajo en sal.'],
        ['Coco + leche condensada','Coco rallado seco mezclado con leche condensada hasta formar pasta. Para panes de temporada.'],
        ['Guayaba + queso crema','La versión premium: pasta de guayaba artesanal con queso crema, que suaviza la intensidad de la guayaba. <b>El precio más alto del catálogo.</b>'],
        ['Mermelada','Solo de <b>alta densidad</b> — fresa o mora. Las líquidas rompen el sello. Fría del refrigerador, <b>máximo 25 g por pan</b>.']
      ]},

      { t:'h', c:'Los siete errores del relleno' },
      { t:'tabla', cols:['El error','Por qué pasa','La solución'], filas:[
        ['El relleno se escapa','Exceso, o sellado incorrecto','2 cm de borde libre y sellar con dedos húmedos 30 segundos'],
        ['El relleno se quema','Horno muy alto','Papel aluminio los primeros 12 min. Nunca más de 180 °C con dulces'],
        ['Masa cruda en el centro','Masa muy gruesa alrededor','No pasar de 10 mm. Verificar 88 °C al centro'],
        ['El pan no sube','El peso del relleno frena la fermentación','Subir la levadura un 10%. Fermentación más larga y cálida'],
        ['El relleno sale seco','Bocadillo seco, o demasiado horno','Humedecer el bocadillo. Controlar el tiempo'],
        ['El queso no se derrite','Queso frío o bajo en grasa','Queso blanco fresco, a temperatura ambiente'],
        ['Distribución irregular','Rellenar a mano sin guía','Espátula plana, en capas parejas']
      ]},
      { t:'nota', tt:'El séptimo es el que nadie ve venir', c:'Un relleno mal repartido produce un pan que <b>sabe distinto en cada mordida</b>. El cliente no sabe explicar qué le pasó, pero no repite. Espátula plana y capas parejas: cuesta cero y cambia el producto.' },

      { t:'ilustra', items:[['papelon','2 cm de borde'],['horno','Máximo 180 °C'],['termometro','88 °C al centro']] }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', hero:'pan-quesadilla-andina', titulo:'La guasacaca y lo que va al lado',
    lede:'La salsa que va con todo. Se parece al guacamole pero es más cítrica y más líquida.',
    bloques:[
      { t:'p', c:'Es la salsa que acompaña todo en Venezuela: tequeños, empanadas, parrilla, carne, arepas y pan salado. <b>No debe quedar espesa</b> — esa es la diferencia principal con el guacamole, y el error más común al hacerla.' },
      { t:'ing', titulo:'Lo que lleva', items:[
        ['1 uds','aguacate grande',''],
        ['1/2 uds','pimentón',''],
        ['2 dientes','ajo, sin el germen',''],
        ['—','cebollín o cebolla',''],
        ['—','cilantro y perejil',''],
        ['3 cdas','aceite de girasol o maíz',''],
        ['—','vinagre, limón, sal y pimienta','']
      ]},
      { t:'pasos', items:[
        'Todo al procesador: el cebollín, el ajo, el pimentón, el cilantro y el aguacate.',
        'Mientras se mezcla, agrega el <b>aceite en hilo</b>, el limón y el vinagre.',
        'Procesa hasta que quede una mezcla lisa y pareja.',
        'El punto correcto: <b>tiene que caer de la cuchara</b>, no quedarse pegada. Si te quedó espesa, más limón y más aceite.'
      ]},
      { t:'nota', tt:'El ajo sin germen', c:'Ese hilito verde del centro del diente es lo que repite y amarga. Se saca con la punta del cuchillo. <b>Cambia la salsa por completo</b> y casi nadie lo hace.' },
      { t:'tip', tt:'Por qué regalarla te conviene', c:'Si vendes pasapalos, <b>la guasacaca va incluida</b>. Te cuesta muy poco y es lo que hace que te vuelvan a pedir a ti y no a otro. El que come tequeños sin salsa siente que le faltó algo, aunque no sepa qué.' },

      { t:'ilustra', items:[['gota','Que caiga sola'],['granos','Ajo sin germen'],['sal','Sal y limón']] },

      { t:'h', c:'Cuánto dura y cómo se entrega' },
      { t:'lista', items:[
        ['En la nevera','De 2 a 3 días en envase hermético. El aguacate oxida: una capa fina de aceite encima le aguanta mejor el color.'],
        ['Para entregar con un pedido','En envase aparte, <b>nunca sobre el pan</b>. La humedad de la salsa ablanda cualquier masa en minutos.'],
        ['La cantidad por pedido','Unos 100 g por cada docena de tequeños. Menos que eso se queda corto y el cliente lo nota.']
      ]}
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'pan-bolitas-queso-bocadillo', titulo:'A cuánto sube el precio cada relleno',
    lede:'El relleno no es un costo: es una palanca de precio.',
    bloques:[
      { t:'tabla', cols:['Relleno','Qué agrega al precio'], filas:[
        ['Solo queso','La base de comparación'],
        ['Bocadillo y queso','El estándar de identidad tachirense'],
        ['Bocadillo y arequipe','+40% sobre el estándar'],
        ['Guayaba y queso crema','El más alto del catálogo'],
        ['Queso y jamón','Mercado de desayuno, alta rotación'],
        ['Crema pastelera','Premium de vitrina, se vende por la vista'],
        ['Chocolate','Público joven y regalos']
      ]},
      { t:'nota', tt:'Por qué se paga', c:'El cliente no está pagando el ingrediente: está pagando <b>que no lo consigue en otro lado</b>. Un pan con bocadillo y arequipe bien hecho no existe en el supermercado. Ahí está el 40%, y ahí está el negocio.' },
      { t:'tip', tt:'La prueba antes de subir el precio', c:'Haz una tanda mitad con el relleno estándar y mitad con el premium, ponlos juntos en la foto, y ofrece los dos. <b>Deja que el cliente elija.</b> Si el premium se agota primero, ya tienes la respuesta y no hace falta discutir el precio con nadie.' },

      { t:'sello', img:'papelon', pie:'El relleno es la palanca' }
    ]
  }

  ]
};
