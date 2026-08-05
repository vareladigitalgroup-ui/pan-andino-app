/* REGALO 5 · Postres Venezolanos
   Reescrito al formato largo, con dibujos.
   No había nada en los PDFs. Escrito desde cero con recetas
   verificadas contra fuentes venezolanas. */

window.REGALO_5 = {
  id: 'g5',
  tapa: 'regalo-5-postres',
  kicker: 'Regalo 5',
  nombre: 'Postres Venezolanos',
  sub: 'Quesillo, marquesa, tres leches y lo que cierra el domingo',
  promesa: 'Tres postres que no necesitan horno de panadería.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', hero:'intro-postres', titulo:'Por qué estos tres',
    lede:'Porque los tres se hacen con lo que ya tienes y se venden enteros, no por porción.',
    bloques:[
      { t:'p', c:'El quesillo, la marquesa y el tres leches son los tres postres que aparecen en toda mesa venezolana. Y tienen una cosa en común que al que vende le sirve muchísimo: <b>se piden completos, para una reunión</b>. Un quesillo es un pedido, no una unidad.' },
      { t:'p', c:'Dos de los tres <b>ni siquiera necesitan horno</b>. La marquesa se cuaja en la nevera y el tres leches solo necesita el bizcocho. Eso significa que los puedes hacer aunque el horno esté ocupado con el pan — y ahí está el negocio.' },
      { t:'tip', tt:'El combo que se vende solo', c:'Pan dulce para el desayuno y un postre para el almuerzo. Al cliente que te pide pan para el domingo, ofrécele el quesillo. <b>Es la misma llamada, el doble de ticket.</b>' },

      { t:'ilustra', items:[['leche','Leche condensada'],['huevo','Huevos'],['papelon','Caramelo'],['reloj','Nevera']] },

      { t:'h', c:'Los tres, de un vistazo' },
      { t:'seq', titulo:"Los tres postres", items:[["postre-quesillo","<b>Quesillo.</b> El más pedido y el más barato de producir."],["postre-marquesa","<b>Marquesa.</b> Sin horno, y aguanta el traslado."],["postre-tres-leches","<b>Tres leches.</b> El de mayor precio por porción."]] },
      { t:'tabla', cols:['Postre','¿Horno?','Rinde','Cuánto antes se hace'], filas:[
        ['Quesillo','Sí, baño de María','10 a 12 porciones','El día antes'],
        ['Marquesa','No','12 porciones','El día antes, mínimo 2 h'],
        ['Tres leches','Sí, el bizcocho','12 a 15 porciones','El día antes, mínimo 4 h']
      ]},
      { t:'nota', tt:'Los tres se hacen la víspera', c:'Ninguno de los tres se sirve el mismo día que se hace: los tres necesitan nevera para tomar cuerpo. <b>Eso es una ventaja, no una molestia:</b> significa que el domingo en la mañana ya los tienes listos y el horno libre para el pan.' }
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', hero:'postre-quesillo', titulo:'Quesillo',
    lede:'El flan venezolano. El que tiene los huequitos, y esos huequitos son a propósito.',
    bloques:[
      { t:'seq', titulo:"El quesillo, paso a paso", items:[["post-caramelo","<b>1 · El caramelo</b> cubriendo el fondo del molde, todavía líquido y brillante."],["post-quesillo-desmolde","<b>2 · Desmoldado.</b> El caramelo escurre y aparecen los agujeritos."]] },
      { t:'ing', titulo:'Para un molde de 22 cm', items:[
        ['400 g','leche condensada (1 lata)',''],
        ['400 ml','leche entera',''],
        ['4 uds','huevos',''],
        ['1 cdta','vainilla',''],
        ['1 chorro','ron, opcional','']
      ]},
      { t:'pasos', items:[
        '<b>El caramelo:</b> 1 taza de azúcar con 4 cucharadas de agua en una olla, al fuego. <b>Deja que se derrita sin revolver</b> hasta un ámbar intenso.',
        'Viértelo en el molde y espárcelo por toda la superficie girando el molde. Trabaja rápido: se endurece.',
        '<b>El quesillo:</b> todo a la licuadora, un par de minutos, hasta integrar.',
        'Vierte sobre el caramelo ya frío.',
        'Al horno a <b>180 °C en baño de María</b>, una hora y media.',
        'Listo cuando metes un palillo y sale limpio.',
        '<b>Nevera mínimo 2 horas</b> antes de desmoldar. Frío se despega solo.'
      ]},
      { t:'nota', tt:'Los huequitos son la firma', c:'El quesillo venezolano tiene la miga agujereada, y eso lo distingue del flan español, que es liso. Los huecos salen porque <b>se licua</b> y entra aire. Si lo bates a mano suave, te queda liso — y ahí ya no es un quesillo.' },
      { t:'tip', tt:'El caramelo no se revuelve', c:'Ni una vez. Si lo revuelves, el azúcar cristaliza y te queda arenoso en vez de vidrioso. <b>Se deja quieto y se mira.</b> Cuando toma color ámbar, fuera del fuego de inmediato: el calor de la olla lo sigue oscureciendo.' },

      { t:'ilustra', items:[['papelon','Caramelo sin revolver'],['huevo','Todo a la licuadora'],['termometro','180 °C, baño de María']] }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', hero:'postre-marquesa', titulo:'Marquesa de chocolate',
    lede:'Sin horno. Se cuaja sola en la nevera y es el postre de cumpleaños de toda Venezuela.',
    bloques:[
      { t:'seq', titulo:"La marquesa, por capas", items:[["post-marquesa-capas","<b>Galleta, crema, galleta.</b> Se arma en capas parejas, sin apurar."]] },
      { t:'ing', titulo:'Para un molde rectangular', items:[
        ['900 ml','leche',''],
        ['4 uds','yemas de huevo',''],
        ['400 g','galletas María (2 paquetes)',''],
        ['—','azúcar y vainilla',''],
        ['—','chocolate o cacao en polvo','']
      ]},
      { t:'pasos', items:[
        'Prepara la crema: leche, yemas, azúcar y vainilla al fuego, moviendo sin parar hasta que espese. Agrega el chocolate y disuelve.',
        'Deja entibiar. La crema tiene que estar <b>tibia, no caliente</b>, o ablanda las galletas de más.',
        'Moja las galletas en leche <b>un segundo, no más</b>, y arma la primera capa en el molde.',
        'Capa de crema encima. Después galletas. Después crema. <b>Alterna hasta llenar</b>, terminando siempre con crema.',
        '<b>Nevera mínimo 2 horas.</b> Ideal de un día para otro.'
      ]},
      { t:'nota', tt:'El error de mojar de más', c:'La galleta se moja <b>un segundo</b>. Si la dejas más, absorbe demasiado y la marquesa se te desarma al cortarla. Tiene que quedar firme por fuera y ablandarse sola en la nevera.' },
      { t:'tip', tt:'Por qué se vende tan bien', c:'No lleva horno, se hace de un día para otro, se transporta en su propio molde y rinde 12 porciones. <b>Es el postre con mejor margen y menos trabajo</b> de los tres, y el que conviene ofrecer primero.' },

      { t:'ilustra', items:[['leche','Crema tibia'],['gota','Un segundo de remojo'],['reloj','Y a la nevera']] }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'postre-tres-leches', titulo:'Torta tres leches',
    lede:'Un bizcocho que se bebe las tres leches. El truco está en el pinchado.',
    bloques:[
      { t:'seq', titulo:"El empapado", items:[["post-tresleches","<b>Se pincha y se moja despacio.</b> De a poco, para que absorba parejo."]] },
      { t:'ing', titulo:'El bizcocho y las tres leches', items:[
        ['5 uds','huevos, separados',''],
        ['200 g','azúcar',''],
        ['200 g','harina todo uso',''],
        ['1 cdta','polvo de hornear',''],
        ['400 g','leche condensada','1ª leche'],
        ['400 ml','leche evaporada','2ª leche'],
        ['200 ml','crema de leche','3ª leche']
      ]},
      { t:'pasos', items:[
        'Bate las claras a punto de nieve. Agrega el azúcar de a poco y después las yemas, una por una.',
        'Incorpora la harina con el polvo de hornear <b>en movimientos envolventes</b>, sin batir, para no bajar el aire.',
        'Horno a <b>180 °C, 30 minutos</b>. Sale cuando el palillo sale limpio.',
        '<b>Deja enfriar completamente.</b> Este paso no se salta.',
        '<b>Pincha todo el bizcocho con un tenedor</b>, hasta el fondo, por todas partes.',
        'Mezcla las tres leches y viértelas despacio sobre el bizcocho frío, en varias veces, dejando que absorba entre una y otra.',
        '<b>Nevera mínimo 4 horas.</b> De un día para otro queda mejor.',
        'Se sirve con merengue o crema batida encima, y canela.'
      ]},
      { t:'nota', tt:'Frío y pinchado, o no absorbe', c:'Si le echas las leches al bizcocho <b>caliente</b>, se desarma. Si no lo pinchas, las leches se quedan arriba y el centro sale seco. <b>Los dos pasos son obligatorios</b> y son justamente los dos que más se saltan.' },

      { t:'ilustra', items:[['leche','Tres leches'],['harina','Envolvente, no batido'],['termometro','Bizcocho frío'],['reloj','4 horas']] }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', titulo:'A cuánto se venden',
    lede:'Los postres tienen otra lógica de precio que el pan.',
    bloques:[
      { t:'seq', titulo:"En porción individual", items:[["post-porciones","<b>La porción individual es el negocio.</b> Se vende más y se transporta mejor."]] },
      { t:'tabla', cols:['Postre','Rinde','Cómo se vende'], filas:[
        ['Quesillo','10 a 12 porciones','Entero, en su molde'],
        ['Marquesa','12 porciones','Entera, en molde desechable'],
        ['Tres leches','12 a 15 porciones','Entera, o por porción en cafetería']
      ]},
      { t:'lista', items:[
        ['El molde va incluido','El cliente no te devuelve el molde. <b>Cárgalo en el precio desde el principio</b>, con molde desechable de aluminio, y te ahorras la conversación incómoda.'],
        ['Se piden con anticipación','A diferencia del pan, el postre se encarga. Eso te deja producir contra pedido y no tener nada parado.'],
        ['El de mejor margen es la marquesa','No lleva horno, no lleva gas, y los ingredientes son los más baratos de los tres.'],
        ['El de mayor ticket es el tres leches','Es el que la gente pide para cumpleaños, y en cumpleaños nadie regatea.']
      ]},
      { t:'nota', tt:'La venta cruzada que casi nadie hace', c:'Al que te pide pan para el domingo, ofrécele el postre <b>en el mismo mensaje</b>. Es la misma conversación de WhatsApp y el doble de ticket. Si tienes 30 clientes de pan, ahí tienes 30 clientes de postre que todavía no te compraron.' },
      { t:'tip', tt:'Cómo se cotiza un postre', c:'La misma regla del pan: <b>tres veces el costo de los ingredientes</b>, como piso. Pero como el postre se vende entero, súmale el molde y el transporte antes de multiplicar. Y usa la calculadora de Herramientas con tus precios, no con precios de tabla.' },

      { t:'sello', img:'leche', pie:'La misma llamada, el doble de ticket' }
    ]
  }

  ]
};
