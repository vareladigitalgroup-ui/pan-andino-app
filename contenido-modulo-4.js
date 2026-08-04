/* MÓDULO 4 · Panadería Artesanal — las 12 recetas
   Reescrito al formato largo: las 12 recetas agrupadas en 5 familias
   + la guía de lectura. Antes eran 13 botones sueltos.
   Fuente: MÓDULO-6 del curso.
   ⚠ CORREGIDO: el PDF describía el criollito como bollito redondo
   boleado de 50–60 g. Es FALSO. La foto real de la panadería muestra
   HOJALDRE CORTADO EN CUADROS, con las capas a la vista. Confirmado
   por Jonathan. Reescrito y movido a la familia de los laminados. */

window.MODULO_4 = {
  id: 'm4',
  tapa: '4-PANADERIA-ARTESANAL',
  kicker: 'Módulo 4',
  nombre: 'Panadería Artesanal',
  sub: 'El repertorio completo del Táchira, pan por pan',
  promesa: 'Doce recetas. Con estas montas una panadería entera.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', titulo:'Cómo leer estas recetas',
    lede:'Las doce están escritas igual, y todas por kilo de harina para que escales multiplicando.',
    bloques:[
      { t:'p', c:'Estas no son recetas sacadas de internet. Son las que se aprenden trabajando dentro de las panaderías de La Concordia, y la diferencia con una receta de blog es la profundidad: no solo <b>el qué</b>, también <b>el porqué</b> de cada ingrediente y cada número.' },
      { t:'lista', items:[
        ['Todas parten de la misma masa base','La del Módulo 1. Lo que cambia son las proporciones, el formado y el acabado. Por eso conviene dominar esa antes que ninguna.'],
        ['Todo por kilo de harina','Multiplica directo para producción mayor. No hay que recalcular nada ni hacer regla de tres.'],
        ['Anota cada práctica','Temperatura del ambiente, tiempo de fermentación, temperatura del horno y resultado visual. En tres prácticas ya sabes cómo se comporta tu cocina.']
      ]},

      { t:'h', c:'Están agrupadas por familia, no por orden alfabético' },
      { t:'p', c:'Los panes que comparten masa y técnica van juntos, porque cuando dominas uno de la familia los otros salen casi solos. Así están repartidas las doce:' },
      { t:'tabla', cols:['La familia','Qué trae','Qué se aprende'], filas:[
        ['La del camaleón','Camaleón, azucarado, trenzado','El formado alargado y los cortes'],
        ['Las acemas','Acema tachirense, acema de bocadillo y queso','Las especias y el relleno enrollado'],
        ['Queso y leche','Pan de queso, pan de leche','El bolleo y las masas enriquecidas'],
        ['Los de vitrina','Pan de Dios, piñita, bocadillo enrollado','Las coberturas y los acabados que venden'],
        ['Los hojaldrados','Criollito, mil hojas','El laminado. Van al final']
      ]},

      { t:'ilustra', items:[['bascula','Por kilo de harina'],['pan','Cinco familias'],['reloj','De simple a complejo']] },

      { t:'h', c:'Cuál conviene aprender primero' },
      { t:'p', c:'El orden no es capricho: va construyendo habilidad. Cada pan te deja una técnica que el siguiente necesita.' },
      { t:'pasos', items:[
        '<b>Pan de leche</b> — para dominar el bolleo, que es la base de todo formado.',
        '<b>Camaleón</b> — el formado alargado y los cortes en diagonal.',
        '<b>Pan de queso</b> — cómo se maneja una masa muy enriquecida sin que se ponga pesada.',
        '<b>Azucarado</b> — la costra y el momento exacto de las coberturas.',
        '<b>Acema</b> — las especias, y cómo cambian la fermentación además del sabor.',
        '<b>Trenzado</b> — la técnica que impresiona al cliente.',
        '<b>Mil hojas</b> y después el <b>criollito</b> — los dos laminados, al final. No son para principiantes y no tiene sentido apurarlos.'
      ]},

      { t:'h', c:'Los tres rankings que importan para el negocio' },
      { t:'tabla', cols:['Por rentabilidad','Por velocidad','Por popularidad'], filas:[
        ['Mil hojas · 70%','Pan de leche · 3 h','Camaleón'],
        ['Trenzado · 67%','Camaleón · 3 h','Pan azucarado'],
        ['Piñita · 66%','Azucarado · 3 h','Acema de bocadillo'],
        ['Camaleón · 65%','Pan de leche · 3 h','Pan de queso'],
        ['Azucarado · 63%','Camaleón · 3 h','Criollito']
      ]},
      { t:'nota', tt:'Cómo se lee ese cuadro', c:'El más rentable no es el que más se vende, y el que más se vende no es el más rápido. <b>Un catálogo sano mezcla las tres columnas:</b> el criollito te da rotación diaria, el camaleón te da clientela, y el mil hojas te da margen. Vivir solo de uno es frágil.' }
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', titulo:'La familia del camaleón',
    lede:'Tres panes, una sola masa. Cuando dominas el camaleón, los otros dos son variaciones de acabado.',
    bloques:[

      { t:'rec', n:'Receta 1', c:'Pan camaleón', lede:'El más famoso del Táchira. El primero que piden los que llegan y el que más extrañan los que se van.' },
      { t:'foto', img:'pan-camaleon', pie:'La forma alargada y los cortes diagonales que abren como escamas. Esa es la firma.' },
      { t:'p', c:'El nombre viene de su capacidad de adaptarse: puede ser más dulce, más azucarado, con ajonjolí, pero siempre se reconoce por la forma alargada y los <b>cortes diagonales</b> que abren en el horno como escamas.' },
      { t:'p', c:'Nació en las panaderías de La Concordia y se volvió el referente del pan tachirense. Todo venezolano lo reconoce, y por eso es el pan con el que se abre una clientela.' },
      { t:'ing', titulo:'Por kilo de harina', items:[
        ['1.000 g','harina 000','100%'],
        ['300 g','talvina activa','30%'],
        ['220 g','azúcar','22%'],
        ['160 g','mantequilla sin sal','16%'],
        ['160 ml','leche tibia','16%'],
        ['150 g','huevo (3 enteros)','15%'],
        ['80 ml','agua fría','8%'],
        ['10 g','sal','1%']
      ]},
      { t:'pasos', items:[
        'Amasado: <b>20 minutos</b>, hasta ventana de gluten completa.',
        'Primera fermentación: 60 a 90 min, hasta doblar.',
        'Formado: <b>22 a 25 cm</b>, grosor parejo de punta a punta, costura hacia abajo. La uniformidad del grosor es lo que da cocción pareja.',
        'Segunda fermentación: 45 min, casi doble.',
        'Pintado: huevo batido con una cucharada de leche, con brocha suave.',
        '<b>Los cortes:</b> 4 o 5 diagonales a <b>45°</b>, de <b>1 cm exacto</b> de profundidad.',
        'Horno a <b>175 °C</b>: 15–18 min el pequeño de 80 g, 20–23 min el mediano de 150 g, 25–28 min a 170 °C el grande de 220 g.'
      ]},
      { t:'nota', tt:'El ángulo de los cortes es crítico', c:'A 45° abren como escamas. <b>Demasiado recto no abre. Demasiado inclinado desgarra la masa.</b> Es el detalle que distingue un camaleón de panadería de uno de casa, y es gratis.' },

      { t:'rec', n:'Receta 2', c:'Pan azucarado', lede:'Se vende por la vista antes que por el sabor. Es el camaleón en su versión más festiva.' },
      { t:'foto', img:'pan-pan-azucarado', pie:'La costra de azúcar cristalizado. El contraste con la miga blanda es todo el producto.' },
      { t:'p', c:'Esa costra brillante de azúcar caramelizado detiene a cualquiera frente al mostrador. El resultado correcto es el contraste: <b>corteza crocante de azúcar por fuera, miga suave y húmeda por dentro.</b>' },
      { t:'ing', titulo:'Lo único que cambia', items:[
        ['—','la masa del camaleón, idéntica',''],
        ['—','azúcar blanca GRUESA o cristalizada',''],
        ['—','nunca azúcar glass ni azúcar morena','']
      ]},
      { t:'pasos', items:[
        'Se hace todo igual que el camaleón hasta el pintado.',
        '<b>El azúcar va DESPUÉS del pintado con huevo, justo antes de entrar al horno.</b>',
        'Si lo pones antes del segundo reposo, el azúcar absorbe humedad y no carameliza: se disuelve y desaparece.',
        'El tamaño del cristal decide la textura: <b>la fina se quema antes de que el pan esté listo</b>.'
      ]},
      { t:'nota', tt:'Los tres errores, y su causa exacta', c:'<b>El azúcar se cae:</b> pintado de huevo insuficiente, o lo aplicaste tarde. <b>Costra quemada:</b> temperatura muy alta, o usaste azúcar fina. <b>No carameliza:</b> lo pusiste sobre masa seca.' },
      { t:'tip', tt:'Variaciones que funcionan', c:'Con canela en la masa. Con azúcar morena, para un caramelizado más oscuro y rústico. Con azúcar y anís estrellado molido, que es la versión de fiesta.' },

      { t:'rec', n:'Receta 3', c:'Pan trenzado andino', lede:'El paso que más miedo da a los nuevos. Y es mucho más simple de lo que parece.' },
      { t:'foto', img:'pan-trenza-azucarada', pie:'Tres hebras iguales, tejidas desde el centro hacia afuera.' },
      { t:'p', c:'Una vez que dominas la trenza no paras de hacerla, porque el efecto en el cliente es inmediato: <i>«¿cómo hiciste eso?»</i>. Es el <b>segundo pan más rentable del catálogo</b>, con 67% de margen, y lo único que cambia respecto del camaleón es el formado.' },
      { t:'ing', titulo:'Los números de la trenza', items:[
        ['3','piezas exactamente iguales, pesadas',''],
        ['35–40 cm','de largo cada tira',''],
        ['30 min','de reposo cubierto antes de hornear',''],
        ['175 °C','22 a 26 min','']
      ]},
      { t:'pasos', items:[
        'Divide en 3 piezas iguales <b>usando báscula</b>. La diferencia de gramos entre piezas arruina la uniformidad visual, y se nota a un metro.',
        'Estira cada una rodando con las palmas sobre la mesa, hasta 35–40 cm.',
        '<b>Siempre se empieza desde el centro hacia los extremos</b>, no desde una punta. Así la tensión se reparte pareja.',
        'Tensión media: ni floja (colapsa) ni excesiva (rompe el gluten).',
        '<b>Sella los extremos:</b> pellizca firme y dobla hacia abajo. Presiona contra la bandeja para que el peso lo mantenga cerrado.',
        'Reposo cubierto de 30 min. Pintado llegando <b>a todos los surcos</b> de la trenza, o quedan rayas pálidas.'
      ]},
      { t:'nota', tt:'Por qué 175 y no 180', c:'Menos temperatura que el camaleón porque la pieza tiene más volumen y necesita cocción más lenta para que el calor llegue al centro sin quemar la superficie.' },
      { t:'tip', tt:'Cuando ya te sale', c:'Trenza simple de 3 hebras para el día a día. <b>Trenza doble de 6 hebras</b> para las fechas especiales: es la que de verdad impresiona, y justifica cobrar el doble.' },

      { t:'ilustra', items:[['tijeras','Cortes a 45°'],['huevo','Pintado antes'],['papelon','Azúcar después'],['horno','175 °C']] }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', titulo:'Las acemas',
    lede:'La misma masa del camaleón, pero las especias la transforman. Y con relleno se vuelve el pan de las fiestas.',
    bloques:[

      { t:'rec', n:'Receta 4', c:'Acema tachirense', lede:'El pan de las fiestas. Su perfume llena el local desde que entra al horno.' },
      { t:'p', c:'Parte de una masa muy parecida al camaleón, pero <b>las especias lo transforman</b>. Y no solo el sabor: las especias también modifican la fermentación, acelerándola un poco. Si haces acema con los tiempos exactos del camaleón, se te pasa.' },
      { t:'p', c:'Los clientes que piden acema son otros — son de fiestas, fechas especiales y regalos. Por eso <b>justifica un precio 15 a 20% superior al camaleón</b> sin que nadie discuta.' },
      { t:'ing', titulo:'Especias por kilo de harina', items:[
        ['8 g','canela en polvo',''],
        ['3 g','anís estrellado molido',''],
        ['2 g','pimienta guayabita molida','']
      ]},
      { t:'pasos', items:[
        '<b>Las especias van integradas en la harina ANTES de amasar</b>, nunca después. Si las echas sobre la masa formada quedan en vetas y se ven.',
        'Forma oval, más redonda que el camaleón. De <b>15 a 18 cm</b> de largo, con altura generosa.',
        'Los cortes son <b>2 o 3 paralelos longitudinales</b>, más profundos que en el camaleón.',
        'Horno a <b>175 °C</b>, de 22 a 25 minutos para la pieza de 150 g.'
      ]},
      { t:'tip', tt:'El truco de venta que no cuesta nada', c:'Si horneas acema y dejas la ventana abierta, los vecinos vienen solos a preguntar qué es. <b>Ese olor es publicidad gratis</b>, y es el único producto del catálogo que se vende antes de existir.' },

      { t:'ilustra', items:[['canela','Canela'],['anis','Anís estrellado'],['granos','Guayabita']] },

      { t:'rec', n:'Receta 5', c:'Acema de bocadillo y queso', lede:'La joya. Dulce del bocadillo, sal del queso, y la masa especiada abajo.' },
      { t:'foto', img:'pan-acema-bocadillo-queso', pie:'Tres elementos que solos son buenos y juntos son otra cosa.' },
      { t:'p', c:'Son tres cosas que por separado están bien y juntas son perfectas. Es identidad culinaria venezolana pura, y es el pan que más se regala.' },
      { t:'ing', titulo:'El relleno, por kilo de harina', items:[
        ['200 g','bocadillo de guayaba','60%'],
        ['150 g','queso blanco semiduro','40%'],
        ['3 mm','de grosor las láminas de bocadillo','']
      ]},
      { t:'pasos', items:[
        'Extiende la masa en rectángulo de <b>20×15 cm</b>.',
        'Coloca el bocadillo dejando <b>2 cm de borde libre</b>.',
        'Distribuye el queso sobre el bocadillo.',
        'Enrolla apretado desde el borde largo.',
        '<b>Pellizca la costura con fuerza.</b> Si se abre en el horno, pierdes la pieza.',
        'Costura hacia abajo en la bandeja. Hornea a <b>170 °C</b>, de 20 a 23 minutos.'
      ]},
      { t:'nota', tt:'La proporción que no se enseña', c:'<b>60% bocadillo, 40% queso.</b> Más bocadillo aplasta el sabor del queso. Más queso satura de sal y endurece el relleno. Y el bocadillo va a temperatura ambiente para que sea flexible; el queso no puede ser muy húmedo o suelta agua adentro.' },
      { t:'tip', tt:'Por qué 170 °C y no más', c:'Baja, para que el interior llegue a temperatura sin quemar la costra. Y si el relleno se te escapa por un costado, el problema no fue el horno: <b>fue la costura</b>.' },
      { t:'seq', titulo:'El relleno enrollado, paso a paso', items:[
        ['paso-pan-de-jamon-1','La masa estirada en rectángulo'],
        ['paso-pan-de-jamon-2','El relleno repartido, con 2 cm de borde libre'],
        ['paso-pan-de-jamon-3','Enrollado apretado desde el borde largo'],
        ['paso-pan-de-jamon-4','La costura pellizcada y sellada'],
        ['paso-pan-de-jamon-5','En la bandeja, costura hacia abajo'],
        ['paso-pan-de-jamon-6','Horneado, con el corte que muestra la espiral']
      ]},

      { t:'nota', tt:'La versión grande', c:'La <b>acema rellena entera</b>, de 400 g, va a <b>165 °C durante 30 a 35 minutos</b>. Es la pieza de mesa para fechas especiales y el método de dos temperaturas del Módulo 3 le sienta particularmente bien.' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', titulo:'Queso y leche',
    lede:'Los dos panes de todos los días, y los dos que se venden por canal fijo.',
    bloques:[

      { t:'rec', n:'Receta 6', c:'Pan de queso andino', lede:'El del desayuno. Y el que más piden las cafeterías para revender.' },
      { t:'foto', img:'pan-pan-de-queso', pie:'Queso adentro de la masa y queso gratinado encima. Son dos quesos distintos y cumplen funciones distintas.' },
      { t:'p', c:'La versión andina tiene identidad propia: masa más dulce que en otras regiones, <b>queso integrado en la masa y queso gratinado encima</b>. Ese contraste de dulce y salado es lo que lo separa del pan de queso de cualquier otra parte del país.' },
      { t:'p', c:'Un cliente de cafetería te puede comprar <b>50 panes por semana</b>, todas las semanas. Ese, y no la venta suelta, es el negocio de este pan.' },
      { t:'ing', titulo:'Los dos quesos', items:[
        ['200 g','queso blanco rallado grueso, para la masa',''],
        ['—','queso amarillo tipo Gouda, para gratinar',''],
        ['180 °C','18 a 22 min, con los últimos 5 a 200 °C','']
      ]},
      { t:'pasos', items:[
        '<b>El queso interior se agrega al final del amasado, en el último minuto</b>, para no destruir las hebras de gluten. Integra con movimientos envolventes.',
        'El queso no puede estar frío: a temperatura ambiente, para no enfriar la masa y frenar la fermentación.',
        '<b>El queso de encima va 5 minutos antes del final del horneado.</b> Antes se quema; más tarde no alcanza a gratinar.',
        'Sube a <b>200 °C</b> esos últimos 5 minutos para el gratinado.'
      ]},
      { t:'nota', tt:'Nunca pases de 210 °C', c:'El queso pasa de gratinado a quemado en cuestión de minutos, y no hay marcha atrás. <b>Ese es el único punto donde este pan se arruina</b>, y siempre es por descuido, no por técnica.' },
      { t:'nota', tt:'Este va aparte en el horno', c:'Necesita 185 °C, bastante más que los panes dulces. Mezclarlo en la misma tanda con pan de leche o camaleón compromete a uno de los dos, sin excepción.' },
      { t:'tip', tt:'Variaciones que venden', c:'Queso más jamón en cuadritos. Queso más pimentón asado. Queso más ajo asado. Las tres funcionan y las tres se cobran más caro que el simple.' },

      { t:'rec', n:'Receta 7', c:'Pan de leche tachirense', lede:'La miga más suave del catálogo. El que hace que pregunten «¿qué le pusiste?».' },
      { t:'foto', img:'pan-bolitas-de-leche', pie:'Bolas de 70 a 80 g, perfectamente redondas y lisas.' },
      { t:'p', c:'Su mercado es específico y muy fiel: familias con niños chiquitos, adultos mayores con dificultad para masticar, y el mercado de regalos. <b>El pan de leche en una caja bonita es el detalle perfecto para llevar de visita</b>, y ahí se cobra el triple.' },
      { t:'ing', titulo:'Los dos secretos', items:[
        ['200 ml','leche entera tibia — SIN NADA DE AGUA',''],
        ['30 g','leche en polvo entera, a los secos',''],
        ['70–80 g','por bola',''],
        ['170 °C','15 a 17 min','']
      ]},
      { t:'pasos', items:[
        '<b>Se elimina el agua por completo:</b> los 200 ml son todos de leche. La grasa y la proteína ablandan el gluten y crean una miga mucho más tierna.',
        'La <b>leche en polvo</b> aporta proteína extra que actúa como suavizante natural — el mismo efecto de un mejorante comercial, pero sin comprar nada.',
        'Se forma en bolas de 70 a 80 g, perfectamente redondas.',
        '<b>El bolleo va tenso pero sin exceso:</b> demasiada tensión endurece la miga. El resultado es un pan chico, alto, casi esférico.'
      ]},
      { t:'nota', tt:'Aquí los panes SÍ se tocan', c:'A diferencia del resto del catálogo, en el pan de leche los costados blancos <b>se buscan a propósito</b>: se hornean juntos para que queden tiernos por los lados. En los demás panes eso es un defecto; en este es la seña.' },

      { t:'ilustra', items:[['leche','Solo leche'],['pan','Bolleo tenso'],['horno','170 °C'],['bascula','70 a 80 g']] }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', titulo:'Los de vitrina',
    lede:'Los tres que entran por los ojos. Son los que se fotografían, los que se regalan y los que se comparten.',
    bloques:[

      { t:'rec', n:'Receta 9', c:'Pan de Dios', lede:'Leche condensada y coco tostado. El que más llama la atención en fotos.' },
      { t:'foto', img:'pan-pan-de-dios', pie:'El coco tostado en grumos. No rallado fino: en terrones, como una costra.' },
      { t:'p', c:'El coco tostado dorado sobre la superficie <b>hace que la gente pare el scroll</b>. Es el pan más fotogénico del catálogo y el que mejor funciona en redes sin necesidad de producción.' },
      { t:'ing', titulo:'La cobertura', items:[
        ['—','coco rallado SECO, nunca fresco',''],
        ['—','leche condensada a temperatura ambiente',''],
        ['175 °C','18 a 20 min','']
      ]},
      { t:'pasos', items:[
        '<b>Tuesta el coco antes:</b> sartén seca a fuego medio, moviendo constante, <b>3 a 4 minutos</b> hasta dorado parejo. Retíralo del calor de inmediato — sigue tostándose con el calor residual de la sartén.',
        'Pinta con leche condensada, con brocha suave. Capa generosa pero que no chorree.',
        'Aplica el coco tostado <b>inmediatamente</b>, mientras la leche condensada sigue pegajosa.',
        'Presiona suavemente con la mano para que agarre.',
        'Hornea a <b>175 °C, de 18 a 20 minutos</b>.'
      ]},
      { t:'nota', tt:'Por qué coco seco y no fresco', c:'El seco tiene menos humedad y tuesta parejo. <b>El fresco se quema en los bordes antes de dorarse en el centro</b>, y te queda una cobertura moteada de negro.' },
      { t:'tip', tt:'Por qué leche condensada y no huevo', c:'Crea una capa pegajosa que retiene el coco muchísimo mejor que el huevo. Y la temperatura relativamente baja de 175 °C existe por una sola razón: <b>que el coco no se queme antes de que el pan esté cocido</b>.' },

      { t:'rec', n:'Receta 10', c:'Piñita tachirense', lede:'No se come sola: se regala, se fotografía y se lleva de recuerdo.' },
      { t:'foto', img:'pan-pinita', pie:'El patrón sale solo en el horno, si los cortes estuvieron bien hechos.' },
      { t:'p', c:'Su patrón se hace con <b>tijeras</b>, y es el producto con más potencial para el turismo gastronómico tachirense. También es el <b>tercero más rentable</b>, con 66% de margen, porque el valor está en la técnica y no en el ingrediente.' },
      { t:'ing', titulo:'La pieza', items:[
        ['120–140 g','de masa por pieza',''],
        ['1,5 cm','de profundidad cada corte',''],
        ['45°','el ángulo de las tijeras',''],
        ['180 °C','18 a 20 min','']
      ]},
      { t:'pasos', items:[
        'Forma un óvalo perfecto, <b>más alto que ancho</b>, antes de cualquier corte.',
        'Tijeras <b>bien afiladas, a 45°</b> respecto a la superficie. Nunca perpendicular: el corte vertical aplasta sin abrir.',
        '<b>El patrón en filas:</b> primera fila 3 cortes, segunda fila 2 cortes desplazados, tercera fila 3 cortes. Alternando, para crear el efecto piña.',
        'Cada corte penetra <b>1,5 cm</b>. Menos no abre; más atraviesa y colapsa la pieza.',
        'Almíbar diluido 1:1 con agua, con brocha, <b>después</b> del horneado.'
      ]},
      { t:'nota', tt:'Se abre sola', c:'Durante el horneado los cortes se abren solos y revelan el patrón de piña. El efecto es completamente automático <b>si la técnica de corte fue correcta</b>. No hay nada que hacer después, y no hay forma de corregirlo si salió mal.' },

      { t:'rec', n:'Receta 11', c:'Pan de bocadillo enrollado', lede:'El caracol tachirense. El que más se viraliza.' },
      { t:'foto', img:'pan-bolitas-queso-bocadillo', pie:'La espiral cortada. Ese corte es el producto entero.' },
      { t:'p', c:'El corte que revela la espiral de bocadillo caramelizado genera miles de vistas. Detrás de esa espiral perfecta hay una técnica precisa, y seis medidas que no se pueden improvisar.' },
      { t:'ing', titulo:'Las seis medidas', items:[
        ['40×25 cm','el rectángulo de masa',''],
        ['5 mm','grosor de la masa',''],
        ['250 g','bocadillo por kilo de harina',''],
        ['3 mm','capa de bocadillo',''],
        ['3–4 cm','grosor de cada caracol',''],
        ['170 °C','temperatura','']
      ]},
      { t:'pasos', items:[
        'Extiende en rectángulo de 40×25 cm, grosor <b>parejo de 5 mm</b>. Más delgado y el relleno atraviesa la masa; más grueso y el caracol queda macizo sin que se aprecie la espiral.',
        'Bocadillo a temperatura ambiente, blando pero firme, en capa pareja de 3 mm, dejando <b>2 cm libres arriba</b>.',
        'Enrolla desde el borde inferior con <b>tensión constante</b>. Poca tensión y el caracol se abre al cortar; demasiada y la masa se desgarra.',
        'Corta con <b>hilo de cocina</b> — es superior al cuchillo porque no aplasta el rollo. Piezas de 3 a 4 cm.',
        'Coloca con la espiral hacia arriba, en bandeja engrasada.',
        'Almíbar en caliente al salir del horno.'
      ]},
      { t:'nota', tt:'El caramelizado es el espectáculo', c:'A 170 °C el bocadillo carameliza <b>desde adentro del caracol hacia afuera</b>. Los bordes exteriores de la espiral quedan con un caramelizado intenso, casi transparente. Es el efecto visual más potente de todo el catálogo, y no se puede fingir.' },

      { t:'ilustra', items:[['leche','Leche condensada'],['tijeras','Tijeras a 45°'],['papelon','Bocadillo'],['gota','Almíbar']] }
    ]
  },

  /* ════════ 5 ════════
     Los dos hojaldrados. El criollito vive AQUÍ y no con los boleados:
     la foto real de la panadería lo muestra laminado y cortado en
     cuadros, con las capas a la vista. El material viejo del curso lo
     describía como un bollito redondo y estaba equivocado. */
  { tipo:'largo', titulo:'Los hojaldrados: criollito y mil hojas',
    lede:'Los dos panes de capas. El mismo principio, dos niveles de exigencia.',
    bloques:[
      { t:'p', c:'Estos dos no se bolean ni se enrollan: <b>se laminan</b>. Se mete mantequilla fría entre capas de masa, se dobla, se estira y se vuelve a doblar. En el horno el agua de esa mantequilla se convierte en vapor de golpe y <b>ese vapor separa las capas</b>. Eso es todo el secreto, y es el mismo para los dos.' },
      { t:'p', c:'La diferencia está en cuántas vueltas y en el corte. El criollito lleva menos y va en cuadros; el mil hojas lleva más y es el techo de la técnica.' },

      { t:'rec', n:'Receta 11', c:'Criollito tachirense', lede:'El de mayor volumen de ventas de La Concordia. El que compra 1 camaleón compra 6 criollitos.' },
      { t:'foto', img:'pan-criollito', pie:'Cuadros, no bolitas. Las capas se tienen que ver por el costado — si no se ven, el laminado falló.' },
      { t:'p', c:'Es un <b>hojaldre cortado en cuadros</b>, no un bollito redondo. Se reconoce por el costado: las capas se ven apiladas una sobre otra, y al partirlo suelta hojuelas. Por arriba va dorado y brillante del huevo; por los lados queda más pálido, porque <b>ahí no se pinta</b>.' },
      { t:'p', c:'Es el producto para construir clientela fija y garantizar rotación diaria. La gente no compra uno: compra seis.' },
      { t:'ing', titulo:'El laminado corto', items:[
        ['30 min','de nevera la masa base',''],
        ['2','vueltas, la mitad que el mil hojas',''],
        ['20 min','de nevera entre vuelta y vuelta',''],
        ['1 cm','de grosor al estirar la última vez',''],
        ['6 × 6 cm','el cuadro',''],
        ['180 °C','15 a 18 min','']
      ]},
      { t:'pasos', items:[
        'La masa base reposa <b>30 minutos en nevera</b>. Fría pero manejable.',
        '<b>Dos vueltas:</b> extiendes en rectángulo, untas la mantequilla fría en láminas, doblas en tres como una carta, a la nevera 20 minutos. Y otra vez.',
        'Estira la última vez a <b>1 cm de grosor</b>, parejo. Más fino y no se ven las capas; más grueso y el centro queda crudo.',
        '<b>Corta en cuadros de 6 × 6 cm con un cuchillo muy afilado, en un solo golpe hacia abajo.</b> Sin arrastrar y sin sierra.',
        'Pinta con huevo <b>solo la cara de arriba</b>. Nunca los costados.',
        'Bandeja con separación, y al horno a <b>180 °C de 15 a 18 minutos</b>.'
      ]},
      { t:'nota', tt:'Los dos errores que matan las capas', c:'<b>Arrastrar el cuchillo</b> sella los costados y el hojaldre no abre: quedan cuadros macizos. Y <b>pintar los lados con huevo</b> hace exactamente lo mismo, los pega. El huevo va solo arriba, y el corte va de un golpe seco.' },
      { t:'tip', tt:'Cómo sabes que te salió', c:'Míralo de costado antes de comerlo. <b>Tienen que verse las capas apiladas</b>, y al levantarlo deben caer hojuelas sueltas en la bandeja. Si el costado se ve liso y compacto, el laminado no abrió.' },
      { t:'nota', tt:'Volumen sobre margen', c:'Tiene el <b>margen individual más bajo</b> del catálogo pero el volumen más alto. La estrategia es producir en cantidad, no subir el precio unitario. <b>Es el pan con el que se escala un negocio</b>, no con el que se gana en cada pieza.' },
      { t:'tip', tt:'Por qué conviene aprenderlo después del mil hojas', c:'Es la misma técnica con menos vueltas. Si primero peleas con el mil hojas, el criollito te va a salir fácil — y no al revés. <b>El criollito parece simple pero no es un pan de principiante</b>: es laminado, y el laminado no perdona el apuro.' },

      { t:'ilustra', items:[['mantequilla','Mantequilla fría'],['tijeras','Corte de un golpe'],['huevo','Huevo solo arriba'],['horno','180 °C']] },

      { t:'rec', n:'Receta 12', c:'Mil hojas andino', lede:'La técnica más avanzada. No es para principiantes, y es el que justifica el precio más alto.' },
      { t:'foto', img:'pan-mil-hojas', pie:'Las capas separadas por vapor. Cada una es una vuelta de laminado.' },

      { t:'p', c:'Cuando lo dominas, es el producto que <b>ninguna panadería de tu ciudad puede igualar</b>. Es tu diferenciador máximo y el que convierte una panadería en destino: la gente maneja para comprarlo.' },
      { t:'p', c:'Es también el más rentable del catálogo con <b>70% de margen</b>, y la razón es simple: el valor está en la técnica, no en el ingrediente. Harina, mantequilla y tiempo.' },

      { t:'ing', titulo:'El laminado', items:[
        ['30 min','de nevera la masa base',''],
        ['50 g','mantequilla fría por vuelta',''],
        ['3','vueltas en total',''],
        ['20 min','de nevera entre vuelta y vuelta',''],
        ['13–15 °C','temperatura ideal de la mantequilla',''],
        ['200–210 °C','horno','']
      ]},
      { t:'pasos', items:[
        'La masa base reposa <b>30 min en nevera</b>. Fría pero manejable, no congelada.',
        '<b>Primera vuelta:</b> extiende en rectángulo, unta 50 g de mantequilla fría en láminas, dobla en tres como una carta. A la nevera 20 min.',
        '<b>Segunda y tercera vuelta:</b> lo mismo, dos veces más. Tres vueltas crean suficientes capas.',
        '<b>El corte final:</b> cuchillo muy afilado, cortes limpios, <b>sin arrastrar</b>. Arrastrar sella las capas y elimina el hojaldrado, y ahí perdiste las tres vueltas.',
        'Hornea a <b>200–210 °C</b>, más alto que todo el resto del catálogo.'
      ]},
      { t:'nota', tt:'La mantequilla a 13–15 °C', c:'Es el punto exacto: <b>ni muy blanda</b> (se absorbe en la masa y no crea capas) <b>ni muy dura</b> (rompe el gluten al laminar). A esa temperatura se dobla sin romperse ni chorrear. Sácala de la nevera 15 minutos antes y pruébala con el dedo: tiene que ceder, no hundirse.' },
      { t:'tip', tt:'Por qué la temperatura alta', c:'El calor intenso convierte el agua de la mantequilla en <b>vapor instantáneo</b>, y ese vapor es lo que separa las capas. A temperatura baja las capas se funden en vez de separarse. En los primeros 8 minutos el mil hojas sube visiblemente: si no sube, la temperatura estaba baja.' },

      { t:'ilustra', items:[['mantequilla','13 a 15 °C'],['termometro','Frío entre vueltas'],['horno','200 a 210 °C']] },

      { t:'h', c:'Con estas doce montas una panadería' },
      { t:'p', c:'No necesitas más recetas. Necesitas dominar estas. Cubren todo el espectro del mercado: <b>las que dan rotación diaria</b> (criollito, camaleón), <b>las que dan margen</b> (mil hojas, trenzado, piñita), <b>las que abren canales de reventa</b> (pan de queso), y <b>las que se venden solas por la vista</b> (azucarado, pan de Dios, caracol).' },
      { t:'nota', tt:'Antes de agregar un pan nuevo', c:'Pregúntate cuál de estos doce todavía no vendes bien. Casi siempre el crecimiento está en producir mejor lo que ya tienes, no en sumar un producto más que nadie te pidió.' },

      { t:'sello', img:'pan', pie:'Doce recetas. Un negocio completo' }
    ]
  }

  ]
};
