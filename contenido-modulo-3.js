/* MÓDULO 3 · El Horneado Perfecto
   Reescrito al formato largo: 6 secciones para leer de corrido.
   Fuente: MÓDULO-5 del curso (31 KB). Se recuperó todo lo que la
   versión corta dejaba fuera: las 5 fórmulas de pintado, los 7 cortes,
   la tabla maestra de los 12 panes, el falso dorado, el método de dos
   temperaturas, el almíbar final y la organización de producción. */

window.MODULO_3 = {
  id: 'm3',
  tapa: '3-EL-HORNEADO-PERFECTO',
  kicker: 'Módulo 3',
  nombre: 'El Horneado Perfecto',
  sub: 'Traduce tu horno a números que sí funcionan donde vives',
  promesa: 'Tu horno miente. Aquí aprendes cuánto.',

  secciones: [

  /* ════════ 1 ════════ */
  { tipo:'largo', hero:'intro-horno', titulo:'Qué pasa adentro del horno',
    lede:'Todo el trabajo previo se puede arruinar aquí. Conviene saber qué está pasando y cuánto miente tu horno.',
    bloques:[
      
      { t:'p', c:'Los primeros minutos son los del <b>salto al horno</b>. La masa sube de golpe: los gases atrapados se expanden, la levadura trabaja frenética sus últimos minutos de vida, y la corteza todavía no se ha fijado. <b>Es la única ventana que tienes para que el pan crezca.</b> Después de eso ya no crece más: lo que sigue es cocción y color.' },
      { t:'tabla', cols:['Minuto','Qué pasa'], filas:[
        ['0 a 10','Expansión máxima. La corteza empieza a formarse'],
        ['10 a 20','La corteza se fija. Arranca la reacción de Maillard: el dorado'],
        ['20 al final','Se cocina el interior. Caramelización final'],
        ['Al salir','El almidón sigue gelatinizando mientras se enfría']
      ]},
      { t:'nota', tt:'Por eso no se abre el horno al principio', c:'Si abres la puerta en los primeros 10 minutos se te va el calor y el vapor justo cuando el pan está creciendo. <b>Ese pan ya no sube más.</b> Los primeros 10 minutos la puerta no se toca.' },

      { t:'h', c:'Tu horno miente, y esto es lo más útil del módulo' },
      { t:'p', c:'Los hornos domésticos tienen una característica universal: <b>mienten en la temperatura</b>. El dial dice 175 °C y adentro puede haber 155 o 195. Esa diferencia arruina hornadas enteras y la persona nunca sabe por qué.' },
      { t:'p', c:'La buena noticia es que la mentira de tu horno es <b>constante</b>. Si le mides una vez cuánto miente, ya lo sabes para siempre.' },
      { t:'lista', items:[
        ['La prueba, una sola vez en la vida','Pon un termómetro de horno en la rejilla del centro. Precalienta a 175 °C según el dial. Espera <b>30 minutos completos</b>. Compara la temperatura real con la del dial. Esa diferencia es tu <b>factor de corrección permanente</b>.'],
        ['Gas contra eléctrico','El de gas genera más calor por abajo y tiene ciclos de encendido y apagado que hacen fluctuar la temperatura. El eléctrico es más estable pero suele tener las esquinas frías. Los dos hay que conocerlos.'],
        ['Tu cuaderno','Dedica una semana a hornear pan de prueba anotando temperatura real, posición, tiempo y resultado. Ese cuaderno se vuelve tu guía de calibración, y no se compra en ningún lado.']
      ]},
      { t:'tip', tt:'Antes de vender, una semana de pruebas', c:'Es la mejor inversión que puedes hacer y no cuesta más que la harina. <b>Vender pan con un horno que no conoces es tirar producto a la basura sin saber por qué.</b>' },

      { t:'ilustra', items:[['termometro','Mide la mentira'],['horno','Conoce las zonas'],['reloj','30 min de precalentado'],['gota','Vapor al entrar']] },

      { t:'h', c:'El mapa de calor: ningún horno calienta parejo' },
      { t:'p', c:'Todo horno doméstico tiene zonas irregulares, y las esquinas pueden diferir <b>hasta 20 °C entre sí</b>. Saber dónde están te deja rotar los panes en el momento justo y sacar todos dorados igual.' },
      { t:'tabla', cols:['Zona','Cómo suele estar'], filas:[
        ['Parte trasera','De 10 a 15 °C más caliente'],
        ['Centro','La zona más pareja en casi todos'],
        ['Esquinas','Más frías o más calientes según el modelo'],
        ['Parte de arriba','Más caliente si hay resistencia arriba']
      ]},
      { t:'nota', tt:'La solución que sirve para todos', c:'Rotar la bandeja <b>180 grados exactamente a la mitad</b> del tiempo de horneado. Con eso compensas cualquier mapa de calor, aunque nunca lo hayas medido.' },

      { t:'h', c:'El precalentamiento, el paso que más se salta' },
      { t:'p', c:'No es opcional ni es una sugerencia. Son <b>25 a 30 minutos, mínimo</b>. No 10, no 15.' },
      { t:'pasos', items:[
        'El dial puede marcar la temperatura correcta en 8 o 10 minutos. Pero <b>el dial mide el aire, no las paredes</b>.',
        'Las paredes, la rejilla y el fondo necesitan de <b>25 a 30 minutos</b> para alcanzar y estabilizar esa temperatura.',
        'Y el pan se hornea tanto por la <b>radiación de las paredes</b> como por el aire caliente. Si las paredes están frías, absorben calor del pan y retrasan la cocción.',
        'Resultado de precalentar poco: el pan no da el salto, la corteza sale pálida y la base queda cruda.'
      ]},
      { t:'tip', tt:'Aprovecha ese tiempo', c:'Los 30 minutos de precalentado coinciden casi exactos con el final del segundo reposo. <b>Enciende el horno cuando pones los panes a levar</b> y llegan juntos.' },
      { t:'tip', tt:'La piedra, si la tienes', c:'Una piedra de pizza o una bandeja de hierro fundido adentro durante el precalentado acumula masa térmica y simula el piso de un horno profesional. La base del pan mejora notablemente y no cuesta casi nada.' },

      { t:'h', c:'El vapor, en horno de casa' },
      { t:'seq', titulo:"El vapor casero", items:[["form-espanol-3","<b>Una bandeja con agua en el piso del horno.</b> Eso es todo el truco."]] },
      { t:'p', c:'No tienes inyector de vapor y no lo necesitas. El vapor hace dos cosas en los primeros minutos: mantiene la superficie húmeda y flexible para que el pan pueda expandirse al máximo antes de que la corteza se fije, y le da el <b>brillo</b>. Sin vapor, la corteza se fija demasiado pronto y el pan queda chato y mate.' },
      { t:'lista', items:[
        ['El recipiente con agua hirviendo','Una bandeja metálica en la rejilla de abajo durante todo el precalentado. Al meter el pan, media taza de agua hirviendo adentro: vapor inmediato. <b>Aléjate al verter.</b> Retira el recipiente a los 10 minutos.'],
        ['Los hielos','La versión rápida del anterior: tres hielos en la bandeja caliente y cierras de golpe. Es el más simple y funciona muy bien.'],
        ['El atomizador','Rocía las paredes laterales del horno (<b>nunca la bombilla ni las resistencias</b>) justo antes de cerrar, y otra vez a los 3 minutos. Rápido, pero el vapor dura menos.'],
        ['La tapa de aluminio','Cubre las piezas con papel de aluminio holgado los primeros 10 minutos: el vapor que suelta la propia masa queda atrapado. Destapas para el dorado. Es el más consistente y el más fácil.']
      ]},
      { t:'nota', tt:'El vapor va solo al principio', c:'De 5 a 10 minutos, según el pan. Después el horno tiene que estar <b>seco</b> para que la corteza se forme y el dorado se desarrolle. Si el vapor se queda todo el horneado, la corteza nunca se seca y el pan sale blando y sin brillo.' },
      { t:'tip', tt:'Vapor y cortes trabajan juntos', c:'El vapor hace que los cortes se abran limpios y parejos. Sin vapor, los cortes tienden a cerrarse en los primeros minutos, antes de que el pan llegue a su expansión máxima. <b>Cortes bien hechos + vapor = el máximo volumen posible.</b>' },
      { t:'nota', tt:'Cuándo NO poner vapor', c:'En el <b>pan de queso</b>, que necesita corteza seca y crujiente desde el arranque. Y en piezas de menos de 60 g, donde el vapor humedece de más una superficie muy chica.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', hero:'pan-pan-azucarado', titulo:'El pintado y los cortes',
    lede:'Lo que separa un pan casero de uno que parece de vitrina. Y no cuesta un centavo más.',
    bloques:[
      { t:'p', c:'El pintado es <b>obligatorio</b> en el pan gocho. No es decoración opcional: es la capa que activa la reacción de Maillard y la caramelización de la superficie, y es lo que produce ese dorado brillante que identifica al pan andino. Se aplica <b>justo antes de entrar al horno</b>, nunca con anticipación.' },

      { t:'h', c:'Las cinco fórmulas de pintado' },
      { t:'tabla', cols:['La fórmula','Qué da','Para qué'], filas:[
        ['1 huevo entero + 2 cdas de leche','Dorado brillante equilibrado','El estándar de las panaderías del Táchira. El pan de todos los días'],
        ['Solo yema + 1 cda de leche','Dorado más intenso y oscuro','Pan premium o piezas de vitrina que necesitan impacto'],
        ['Huevo entero + azúcar disuelta','Súper brillante, algo pegajoso','Panes festivos o decorativos de alto impacto'],
        ['Solo leche','Dorado suave, aspecto rústico','Panes de campo, o cuando buscas verte más natural'],
        ['Almíbar ligero al salir','Brillo cristalizado','Para vender y para fotografiar. Se aplica en caliente']
      ]},
      { t:'nota', tt:'Empieza por la primera', c:'La fórmula 1 es el estándar tachirense. <b>Domínala antes de experimentar con las otras</b>, porque es tu punto de comparación: sin ella no vas a saber si la variación mejoró algo.' },

      { t:'h', c:'Cómo se aplica' },
      { t:'pasos', items:[
        'Movimientos suaves y parejos, <b>siempre en la misma dirección</b>.',
        'Sin presión: la brocha se desliza, no arrastra.',
        '<b>Una sola pasada alcanza</b> en la mayoría de los casos. El exceso escurre y te mancha la bandeja.',
        'El orden es inviolable: <b>pintar → cortar → hornear</b>, todo en menos de dos minutos.'
      ]},
      { t:'tip', tt:'El doble pintado, para las piezas caras', c:'Una primera capa antes de los cortes, y una segunda muy fina después de cortar. Da un dorado más complejo y una corteza con más profundidad de color. Es el truco de las piezas de vitrina y del pan más caro del catálogo.' },

      { t:'ilustra', items:[['huevo','Huevo + leche'],['tijeras','Corte a 45°'],['horno','Directo al horno']] },

      { t:'h', c:'Los cortes son la válvula de presión' },
      { t:'p', c:'Los cortes no son decoración. Durante el salto al horno los gases internos buscan salida. <b>Sin cortes, el pan se abre solo, por el punto más débil de la corteza</b>, y te arruina la forma. Con los cortes correctos decides exactamente por dónde y cómo se expande.' },
      { t:'lista', items:[
        ['Diagonales estándar','De 3 a 5 cortes en diagonal. El sello del pan tachirense. Para camaleón y pan gocho clásico.'],
        ['Corte central único','Uno solo a lo largo, centrado. Para pan de molde y piezas rectangulares.'],
        ['En espiga','Cortes alternos en ángulo que imitan una espiga de trigo. Efecto visual premium.'],
        ['Longitudinal','Uno solo recorriendo toda la pieza. Para las acemas tachirenses.'],
        ['En rejilla','Cuadrícula cruzada. Para pan decorativo y piezas especiales de vitrina.'],
        ['En tijera','Con tijeras de panadería. Para la piñita tachirense y los panes con acabado de puntas.'],
        ['Sin corte','Para el pan de queso y los rellenos. La tensión de la masa alcanza.']
      ]},

      { t:'h', c:'La técnica del corte' },
      { t:'seq', titulo:"Los cortes, de cerca", items:[["acab-camaleon-1","<b>El ángulo.</b> La cuchilla entra inclinada a 45°, no derecha."],["acab-camaleon-2","<b>Diagonales.</b> Mismo ángulo y misma distancia entre uno y otro."],["acab-acema-1","<b>Longitudinales.</b> Para las acemas: a lo largo y más profundos."]] },
      { t:'ing', titulo:'Los cuatro números', items:[
        ['0,5 – 1 cm','de profundidad. Nunca menos, nunca mucho más',''],
        ['45°','de ángulo respecto a la superficie',''],
        ['1 trazo','firme, rápido y continuo',''],
        ['< 2 min','entre pintar, cortar y meter al horno','']
      ]},
      { t:'lista', items:[
        ['Con qué cortar','Lo ideal es una <b>lame</b> de panadero, que es una hoja de afeitar curva. Sirven también un cuchillo de sierra muy afilado, un bisturí o unas tijeras.'],
        ['Cómo NO cortar','Lento, arrastrando, con presión, o haciendo movimiento de sierra. Cualquiera de esas cuatro te deja un corte sucio que no abre bien.'],
        ['Cuándo cortar','Después del pintado y justo antes de meter al horno. Si cortas con anticipación, los bordes se secan y la apertura no es limpia.']
      ]},
      { t:'nota', tt:'Cómo se ve un corte bien hecho', c:'Se abre limpio durante el salto al horno y deja ver la miga interior, de color más claro. <b>Ese contraste es la firma visual del pan artesanal</b> y es lo que la gente fotografía.' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'pan-camaleon', titulo:'La tabla maestra: cada pan con su número',
    lede:'Años de horneados en San Cristóbal, calibrados para horno doméstico. Esta es tu referencia, no una ley.',
    bloques:[
      { t:'tabla', cols:['El pan','Peso','Temperatura','Tiempo'], filas:[
        ['Pan camaleón pequeño','80 g','175 °C','15 a 18 min'],
        ['Pan camaleón mediano','150 g','175 °C','20 a 23 min'],
        ['Pan camaleón grande','220 g','170 °C','25 a 28 min'],
        ['Pan criollito','60 g','170 °C','13 a 16 min'],
        ['Acema tachirense','150 g','175 °C','22 a 25 min'],
        ['Acema de bocadillo','150 g','175 °C','20 a 23 min'],
        ['Pan de queso','120 g','185 °C','18 a 22 min'],
        ['Pan de leche','80 g','170 °C','15 a 17 min'],
        ['Pan de Dios','70 g','170 °C','14 a 16 min'],
        ['Piñita tachirense','100 g','175 °C','18 a 20 min'],
        ['Pan trenzado','200 g','172 °C','22 a 26 min'],
        ['Acema rellena entera','400 g','165 °C','30 a 35 min']
      ]},
      { t:'nota', tt:'Cómo usar esta tabla', c:'Tu horno puede variar <b>hasta 15 o 20 °C</b> respecto a estos números. Las primeras veces, revisa cada 5 minutos hacia el final del tiempo indicado y anota tu ajuste. Después de tres tandas ya tienes tu propia tabla.' },

      { t:'h', c:'Dónde va la bandeja' },
      { t:'seq', titulo:"La bandeja en el horno", items:[["horno-bandeja","<b>Al centro.</b> Es donde el calor es más parejo en un horno de casa."],["horno-dos","<b>Dos bandejas.</b> Hay que rotarlas a mitad de cocción, o una sale distinta de la otra."]] },
      { t:'p', c:'La posición decide el equilibrio entre el calor de arriba y el de abajo. Combinada con el mapa de calor de tu horno, es la diferencia entre una base dorada perfecta y una base quemada o pálida.' },
      { t:'tabla', cols:['Rejilla','Qué hace','Cuándo usarla'], filas:[
        ['Superior','Más calor arriba, dorado intenso en la superficie','Piezas que necesitan más color arriba. Riesgo de quemar si el pintado es oscuro'],
        ['Central','Calor equilibrado. LA POSICIÓN ESTÁNDAR','El 90% del pan gocho va aquí. Cambia solo si tu horno es muy irregular'],
        ['Inferior','Más calor abajo, base crujiente, superficie menos dorada','Hornos con poco calor inferior, o piezas rellenas que necesitan la base bien cocida']
      ]},

      { t:'ilustra', items:[['horno','Rejilla del centro'],['bascula','Agrupa por peso'],['reloj','Rota a la mitad']] },

      { t:'h', c:'Varias bandejas a la vez' },
      { t:'p', c:'No es simplemente duplicar la capacidad: hornear dos bandejas cambia las condiciones adentro y hay que compensar.' },
      { t:'lista', items:[
        ['Sube la temperatura 5 a 10 °C','La masa fría de dos bandejas enfría el horno más que una sola. Compensa al inicio.'],
        ['Suma 5 a 8 minutos','Hay más producto que cocinar. <b>Nunca uses los tiempos de una bandeja para dos.</b>'],
        ['Rota obligatoriamente a la mitad','Intercambia la de arriba con la de abajo y gira las dos 180°. La de abajo siempre se hornea más rápido.'],
        ['No pases del 75% del horno','La circulación de aire entre piezas es lo que da el dorado parejo. Un horno lleno hasta el tope dora mal.'],
        ['Deja 8 a 10 cm entre bandejas','Menos que eso y el aire no circula.']
      ]},
      { t:'nota', tt:'Para negocio', c:'Llega un punto en que <b>un segundo horno rinde más que exprimir el primero</b>. Meter todo a la fuerza en un horno produce piezas desiguales, y las desiguales no se venden al mismo precio.' },

      { t:'h', c:'El método de dos temperaturas' },
      { t:'p', c:'Es la técnica que separa al panadero avanzado del básico, y explota las dos fases del horneado por separado: <b>calor alto al principio</b> para que el salto al horno sea máximo y la corteza tarde más en fijarse, y <b>calor reducido después</b> para que el interior se cocine sin quemar la superficie.' },
      { t:'pasos', items:[
        'Precalienta a <b>200 °C durante 30 minutos</b>.',
        'Mete el pan y agrega el vapor de inmediato.',
        'Hornea a 200 °C los primeros <b>8 minutos</b>.',
        'Baja a <b>170 °C</b> para el resto del tiempo.',
        'Suma 5 minutos al tiempo total de la tabla.',
        'Verifica con termómetro al final.'
      ]},
      { t:'nota', tt:'El riesgo, y cómo evitarlo', c:'Olvidar bajar la temperatura te deja una corteza excesivamente oscura. <b>Pon un timer para los 8 minutos, sin excepción.</b> Es el único error posible de este método y es 100% evitable.' },
      { t:'lista', items:[
        ['Dónde funciona mejor','Camaleón grande (volumen máximo y apertura espectacular), pan trenzado, acema tachirense y acema rellena, donde el relleno necesita cocinarse sin que el exterior se queme.'],
        ['Dónde no usarlo','Piezas de menos de 60 g, porque el tiempo total es muy breve. Y el pan de queso, que necesita temperatura alta constante para su textura.']
      ]}
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', hero:'pan-trenza-azucarada', titulo:'Cómo saber que está listo, y el enfriado',
    lede:'Ninguna tabla sustituye a mirar el pan. Cuatro pruebas y una trampa que hay que conocer.',
    bloques:[
      { t:'lista', items:[
        ['1 · La visual','Color dorado parejo en toda la superficie. Los cortes abiertos y dorados por dentro. Corteza lisa, sin zonas pálidas ni manchas claras. La base se ve firme.'],
        ['2 · El golpe','Golpea la base con los nudillos. <b>Suena hueco = listo. Suena macizo o sordo = le falta.</b> Es la más rápida y la primera que aprende todo panadero.'],
        ['3 · El termómetro','Temperatura interna de <b>88 a 92 °C</b> = perfecto. Menos de 85 °C = crudo por dentro aunque la corteza esté dorada. Es la más precisa de las cuatro.'],
        ['4 · La base','Tiene que estar dorada pareja. Si está pálida, voltea el pan y dale 3 a 5 minutos más. Una base sin dorar significa que al horno le faltó calor por abajo.']
      ]},
      { t:'tip', tt:'Cuál usar', c:'El golpe para el día a día, el termómetro cuando estás aprendiendo un pan nuevo. Con el tiempo el oído te alcanza y el termómetro queda para las dudas.' },

      { t:'h', c:'El falso dorado, el error más peligroso' },
      { t:'seq', titulo:"Las cuatro pruebas, en la mano", items:[["tec-golpe","<b>El golpe.</b> Nudillos en la base. Si suena hueco, está."],["tec-termometro","<b>El termómetro.</b> Al centro del costado. 88 a 92 °C."],["tec-base","<b>La base.</b> Dorada pareja de lado a lado."]] },
      { t:'p', c:'Cuando la temperatura es demasiado alta, la corteza se dora y oscurece muy rápido, <b>antes de que el interior llegue a punto</b>. El resultado es un pan que se ve perfecto por fuera y está crudo o gomoso por dentro. Es el error que más devoluciones genera cuando ya estás vendiendo.' },
      { t:'pasos', items:[
        'Si el color llega mucho antes del tiempo mínimo de la tabla, sospecha.',
        'Verifica <b>siempre con termómetro</b> cuando el color se logra muy rápido.',
        'Si ya está oscuro y le falta cocción: <b>cúbrelo con papel de aluminio y baja 10 °C</b>.',
        'Continúa a temperatura reducida hasta llegar a los 88–92 °C internos.'
      ]},
      { t:'nota', tt:'La regla que lo resume', c:'Un pan bien horneado <b>alcanza el color justo cuando alcanza la temperatura interna correcta</b>. Si el color llega mucho antes, el problema es la temperatura del horno, no el tiempo.' },

      { t:'h', c:'El enfriado, el paso que más se saltea' },
      { t:'p', c:'El enfriado no es esperar: <b>es la última etapa activa de la cocción</b>. Dentro del pan caliente el almidón sigue gelatinizando, la miga se estructura y la humedad se redistribuye. Cortarlo antes de que eso termine es destruir el trabajo del horno.' },
      { t:'p', c:'Va sobre <b>rejilla</b>, nunca sobre una superficie plana ni sobre la bandeja caliente. Si lo dejas apoyado, el vapor que sale por abajo no tiene por dónde escapar, se condensa, y la base se pone blanda y húmeda.' },
      { t:'tabla', cols:['Cuándo','Qué está pasando'], filas:[
        ['Al salir','A la rejilla de inmediato. Nunca sobre la bandeja caliente'],
        ['5 a 10 min','La corteza crepita al enfriarse: es normal y es buena señal. No lo toques'],
        ['20 a 30 min','De 90 °C baja a menos de 50 °C. La miga se estructura y se fija'],
        ['A temperatura ambiente','Recién ahora se empaca. Si la bolsa se empaña, empacaste caliente']
      ]},
      { t:'tabla', cols:['Pan','Cuánto enfriar antes de cortar'], filas:[
        ['Canilla, francés','1 hora'],
        ['Campesino, hogazas','1 hora completa'],
        ['Pan de molde','30 minutos mínimo'],
        ['Panes dulces chicos','20 minutos'],
        ['Hojaldrados','Se comen tibios, no se cortan']
      ]},
      { t:'tip', tt:'Si no tienes rejilla', c:'Una parrilla de cocina, o una bandeja perforada elevada sobre dos vasos. Lo único que importa es que <b>circule aire por debajo del pan</b>.' },

      { t:'ilustra', items:[['termometro','88 a 92 °C'],['pan','Suena hueco'],['reloj','30 min de rejilla'],['gota','Almíbar en caliente']] },

      { t:'h', c:'El almíbar final, el brillo que vende' },
      { t:'p', c:'Es el último paso antes de empacar y uno de los más rentables. Ese brillo cristalizado es lo que convierte un pan artesanal en un pan de vitrina: es lo que aparece en las fotos, lo que atrae la mirada en el mercado, y lo que hace que el cliente diga «quiero ese».' },
      { t:'ing', titulo:'La receta base', items:[
        ['100 g','azúcar blanca',''],
        ['100 ml','agua',''],
        ['3 min','de hervor a fuego medio, exactos',''],
        ['5 min','de enfriado antes de usar','']
      ]},
      { t:'pasos', items:[
        'Hierve el azúcar con el agua tres minutos exactos y retira del fuego.',
        'Deja enfriar 5 minutos: <b>tiene que estar tibio</b>, ni hirviendo ni frío.',
        'Aplica <b>apenas sale el pan del horno</b>, todavía caliente, con brocha suave.',
        'Capa fina y pareja, sin saturar. El calor del pan lo fija mientras enfría.'
      ]},
      { t:'lista', items:[
        ['Almíbar con vainilla','Media cucharadita de extracto al retirar del fuego.'],
        ['Almíbar con anís','Hierve con una cucharadita de anís en grano y cuela.'],
        ['Almíbar ámbar','Caramelizas ligeramente el azúcar antes de agregar el agua. Color más profundo.']
      ]},
      { t:'nota', tt:'Dónde sí y dónde no', c:'Va en camaleón premium, acema, pan trenzado y cualquier pieza de vitrina. <b>No va en pan de queso ni en panes rústicos de corteza crujiente</b>, donde el brillo no es el efecto que buscas.' },
      { t:'tip', tt:'Por qué el almíbar te deja cobrar más', c:'Tres razones concretas: en <b>fotos</b> multiplica la apetencia visual y genera más pedidos; en <b>vitrina</b> mantiene la apariencia fresca mucho más tiempo que el pintado de huevo solo, que se opaca; y en <b>precio</b>, el cliente percibe más elaboración y acepta pagar más sin discutir.' }
    ]
  },

  /* ════════ 5 ════════ */
  { tipo:'largo', hero:'paso-golfeados-6', titulo:'Organizar el horneado para vender',
    lede:'Un panadero organizado duplica la producción sin trabajar más horas.',
    bloques:[
      { t:'p', c:'Cuando vendes, el horneado deja de ser un evento y pasa a ser un <b>flujo</b>. La organización es lo que convierte el talento en rentabilidad, y casi siempre es lo que falta cuando alguien hornea bien pero no gana.' },

      { t:'h', c:'Cuánto tarda de verdad una tanda' },
      { t:'tabla', cols:['Etapa','Cuánto'], filas:[
        ['Talvina lista','16 horas antes'],
        ['Preparación de la masa','45 minutos'],
        ['Amasado','25 minutos'],
        ['Primer reposo','2 horas'],
        ['Formado','30 minutos'],
        ['Segundo reposo','1 hora'],
        ['Horneado por tanda','25 minutos'],
        ['Enfriado y empaque','50 minutos']
      ]},
      { t:'nota', tt:'El punto de quiebre', c:'Cuando ya no puedes hacer más piezas en el tiempo disponible <b>trabajando solo</b>, ese es el momento de incorporar un ayudante de producción. No antes, y tampoco mucho después: pasado ese punto empiezas a rechazar pedidos.' },

      { t:'ilustra', items:[['reloj','El flujo, no el evento'],['bascula','Registra todo'],['pan','Agrupa por peso']] },

      { t:'h', c:'Distintos panes en la misma tanda' },
      { t:'p', c:'Cada pan tiene su temperatura y su tiempo óptimos. Mezclarlos es un problema de gestión, y se resuelve con cuatro trucos.' },
      { t:'lista', items:[
        ['Agrupa por peso','Los panes del mismo peso terminan casi al mismo tiempo. Esta es la base de todo horneado múltiple eficiente.'],
        ['Los pequeños en un extremo','Si mezclas tamaños, ponlos juntos en una punta de la bandeja. Cuando estén listos los sacas con espátula mientras los grandes siguen.'],
        ['El truco del aluminio','Cuando parte de la bandeja ya está dorada y el resto necesita más tiempo, cubre lo que ya está listo con aluminio holgado.'],
        ['El pan de queso, siempre aparte','Necesita 185 °C, bastante más que los dulces. Mezclarlo con pan de leche o camaleón compromete a uno de los dos, sin excepción.']
      ]},
      { t:'tip', tt:'Lo eficiente al principio', c:'Hornea <b>un solo tipo de pan por tanda</b>. Con experiencia vas a poder mezclar; al arrancar, mezclar solo agrega variables cuando todavía no controlas las básicas.' },

      { t:'h', c:'Los registros son el negocio' },
      { t:'seq', titulo:"Llevar el registro", items:[["neg-registros","<b>Anota cada tanda:</b> temperatura, tiempo y cómo salió. En tres semanas conoces tu horno."],["horno-dos","<b>Dos bandejas a la vez.</b> Rotalas a mitad de cocción o una sale distinta de la otra."]] },
      { t:'p', c:'El panadero profesional no improvisa: registra, replica y ajusta con datos. Un proceso estandarizado es un proceso que se puede <b>enseñar, delegar y escalar</b>. Uno que vive en tu cabeza, no.' },
      { t:'lista', items:[
        ['Fecha y tanda','Qué día y cuántas piezas.'],
        ['Temperatura real del horno','Siempre con termómetro, nunca la del dial.'],
        ['Resultado visual y del golpe','Una foto si se puede: el ojo olvida, la foto no.'],
        ['Ajustes que hiciste','Qué cambiaste respecto de la vez anterior, y qué pasó.'],
        ['Ventas del día','Qué se vendió primero y qué sobró. Eso decide qué produces la próxima semana.']
      ]},
      { t:'nota', tt:'Treinta días de cuaderno', c:'Un registro bien llevado durante un mes te dice más de tu negocio que cualquier curso, incluido este. <b>Es el único dato que es tuyo</b>, de tu horno, tu clima y tus clientes.' }
    ]
  },

  /* ════════ 6 ════════ */
  { tipo:'largo', hero:'pan-pan-andino-tradicional', titulo:'Qué salió mal en el horno',
    lede:'Lo que ves, la causa real, y qué hacer la próxima.',
    bloques:[
      { t:'h', c:'Problemas de color y cocción' },
      { t:'seq', titulo:"Las dos fallas de color", items:[["horno-fallas","<b>Izquierda: quemado.</b> Derecha: pálido. Casi siempre es la temperatura, no el tiempo."]] },
      { t:'tabla', cols:['Lo que pasó','Por qué','Qué hacer'], filas:[
        ['Muy oscuro afuera, crudo adentro','Temperatura excesiva','Baja 15 °C y extiende el tiempo. Cubre con aluminio si ya está oscuro'],
        ['Pálido y seco','Temperatura baja o poco tiempo','Sube 10 a 15 °C, o extiende 5 a 8 minutos'],
        ['Pálido aunque el tiempo era correcto','El horno miente','Termómetro de horno, una vez, y anota tu corrección'],
        ['Base quemada, superficie pálida','Exceso de calor inferior','Doble bandeja abajo, o sube a la rejilla superior'],
        ['Color desigual en la misma pieza','Zona caliente del horno','Rota la bandeja 180° exactamente a la mitad'],
        ['Miga pegajosa o gomosa','Subcocido, o lo cortaste caliente','Más horno, y espera siempre el enfriado completo'],
        ['Corteza que se arruga al enfriar','Enfriado tapado o embolsado caliente','Rejilla abierta, y no tapar hasta que esté frío'],
        ['Corteza mate, sin brillo','Faltó vapor','Vapor los primeros 10 minutos']
      ]},

      { t:'h', c:'Problemas de forma y apertura' },
      { t:'tabla', cols:['Lo que pasó','Por qué','Qué hacer'], filas:[
        ['No subió en el horno','Sobrefermentada o subfermentada','Revisa el segundo reposo. Prueba del dedo antes de hornear'],
        ['No dio el salto','Poco precalentado o sin vapor','30 minutos de precalentado y vapor al entrar'],
        ['Se abrió irregular','Sin cortes o cortes muy superficiales','Cortes de 0,5 a 1 cm, a 45°, movimiento firme'],
        ['Superficie agrietada al azar','Sin cortes o vapor insuficiente','Cortar antes de hornear y agregar vapor'],
        ['Los cortes no se abren','Corteza seca, o cortaste con anticipación','Cortar justo antes de meter, y agregar vapor'],
        ['Hundido en el centro','Sobrefermentada o exceso de levadura','Menos tiempo de segundo reposo. Revisa proporciones'],
        ['Forma asimétrica','Formado incorrecto o mala posición','Revisa la técnica de formado y gira el pan a mitad de horneado'],
        ['Base húmeda','Se enfrió sobre superficie plana','Siempre rejilla']
      ]},

      { t:'sello', img:'horno', pie:'Cada horneada es información' },

      { t:'p', c:'Es completamente normal que las primeras tres veces el color salga irregular, que algún corte no abra bien o que el tiempo necesite ajuste. <b>Eso no es fracasar: es calibrar.</b> Anota qué pasó, vuelve a esta tabla, y ajusta una sola variable por vez.' },
      { t:'tip', tt:'El checklist antes de hornear', c:'Horno precalentado 30 minutos · segundo reposo confirmado con la prueba del dedo · pintado batido y listo · brocha limpia · cuchilla afilada · rejilla de enfriado preparada afuera · termómetro a mano · timer configurado · almíbar hecho si el pan es para venta.' }
    ]
  }

  ]
};
