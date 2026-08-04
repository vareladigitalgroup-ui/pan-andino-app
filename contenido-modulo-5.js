/* MÓDULO 5 · Acabados y Presentación
   Reescrito al formato largo: 6 secciones para leer de corrido.
   Fuente: MÓDULO-7 del curso (43 KB) fundido con el BONO-4
   (El Secreto del Dorado), que era el mismo contenido repetido.
   Se recuperó lo que la versión corta dejaba fuera por completo:
   los cortes artísticos, el empaque en tres niveles, la identidad
   visual, la fotografía con celular, la exhibición y la conservación. */

window.MODULO_5 = {
  id: 'm5',
  tapa: '5-ACABADOS-Y-PRESENTACION',
  kicker: 'Módulo 5',
  nombre: 'Acabados y Presentación',
  sub: 'El brillo, el empaque y la cara final que se reconoce',
  promesa: 'El ojo compra primero. El paladar confirma después.',

  secciones: [

  /* ════════ 1 ════════ */
  { tipo:'largo', hero:'intro-acabado', titulo:'El brillo: los ocho acabados',
    lede:'No es adorno. Es lo que decide si te compran antes de probar.',
    bloques:[
      
      { t:'p', c:'En Venezuela, la diferencia entre una panadería que vende y una que pelea está casi siempre <b>no en la receta, sino en la presentación</b>. El cliente ve el pan y dice «qué rico debe saber» sin haberlo probado. Eso es psicología aplicada a la venta, y funciona.' },
      { t:'p', c:'No vendes pan: vendes la vista, el olor, la presentación, el empaque, y al final el sabor. <b>El sabor es el último paso de la venta</b>, no el primero.' },
      { t:'lista', items:[
        ['El efecto halo','Un pan brillante y bien acabado hace que el cliente asuma que <b>todos</b> los ingredientes son de primera, aunque no lo haya probado. Un solo detalle bien hecho arrastra la percepción de todo lo demás.'],
        ['El precio ancla','La presentación premium establece una expectativa de precio. El cliente que ve calidad <b>acepta pagar más sin que se lo pidas</b>.'],
        ['La diferenciación visual','En un mercado saturado, el pan que se ve distinto se vende primero. Es tu ventaja competitiva más inmediata: no requiere cambiar la receta ni el precio.']
      ]},

      { t:'h', c:'Los tres almíbares' },
      { t:'ing', titulo:'Almíbar clásico', items:[
        ['100 g','azúcar blanca',''],
        ['100 ml','agua',''],
        ['3 min','de hervor a fuego medio',''],
        ['2 min','de enfriado antes de aplicar','']
      ]},
      { t:'pasos', items:[
        'Lleva a ebullición y hierve <b>exactamente 3 minutos</b> a fuego medio.',
        'Retira del fuego y deja enfriar 2 minutos antes de aplicar.',
        'Brocha de silicona o de repostería suave, capa fina.',
        '<b>Se aplica sobre el pan recién salido del horno, todavía caliente.</b> Ahí es cuando penetra y sella.'
      ]},
      { t:'lista', items:[
        ['Con especias tachirenses','Misma base, pero durante la cocción le agregas <b>1 rama de canela y 3 clavos de olor</b>. Hierves los 3 minutos con las especias adentro y cuelas antes de aplicar.'],
        ['De papelón','Papelón y agua en proporción <b>1 a 1</b>, hervido hasta disolver. Caliente sobre pan caliente.'],
        ['Ámbar','Caramelizas ligeramente el azúcar antes de agregar el agua. Color más profundo, para las piezas de temporada.']
      ]},
      { t:'nota', tt:'El almíbar de papelón es tu diferenciador', c:'Color oscuro dorado y sabor tachirense inconfundible. <b>Ninguna panadería industrial lo replica</b> — no les sale a cuenta. Ese acabado solo lo tiene el que sabe de dónde viene el pan.' },
      { t:'tip', tt:'El aroma vende antes que el sabor', c:'El almíbar con canela y clavo, aplicado sobre el pan caliente, suelta un olor que se siente desde la puerta. Si vendes en casa o en un puesto, <b>ese olor te trae gente</b> sin que digas nada.' },

      { t:'ilustra', items:[['papelon','Almíbar de papelón'],['canela','Con especias'],['mantequilla','Baño de mantequilla'],['huevo','Huevo y miel']] },

      { t:'h', c:'Los otros cinco acabados' },
      { t:'p', c:'Cada pan pide el suyo. La regla de oro: <b>el acabado complementa el pan, no compite con él.</b>' },
      { t:'lista', items:[
        ['Baño de mantequilla','Mantequilla derretida sin sal (o con sal para panes salados), con brocha, generosa, sobre el pan recién salido. Penetra la corteza caliente y la deja tierna. No es el más brillante, pero da un aroma que potencia el apetito. Para los panes de mesa que se sirven calientes.'],
        ['Leche condensada','El de siempre para el <b>pan de Dios</b> y los que llevan coco. Funciona como pegamento natural para las decoraciones. <b>Se aplica ANTES de entrar al horno</b>, en capa fina y pareja: en el calor caramelíza ligeramente.'],
        ['Huevo + miel','El premium y el más fotogénico. <b>1 yema + 1 cucharada de miel líquida + 1 cucharada de leche</b>, batido hasta homogeneizar, con brocha suave, antes de hornear. La yema da color profundo; la miel da un brillo vítreo ámbar que no se consigue con nada más.'],
        ['Azúcar glas tamizada','<b>Solo sobre pan completamente frío.</b> Se tamiza desde altura para un efecto nevado parejo. Para acemas, trenzados dulces y pan de Navidad. Sobre pan caliente se disuelve al instante y no sirve.'],
        ['Barniz de agua y azúcar','El más simple de todos: <b>50 ml de agua tibia + 1 cucharada de azúcar</b>, disueltas sin cocinar. Brillo suave, sin sabor agregado. Para panes donde el protagonista es el relleno. El ideal para arrancar.']
      ]},
      { t:'nota', tt:'Los tres errores del huevo con miel', c:'Usar <b>huevo entero</b> en vez de solo yema — sale mate. Aplicar <b>demasiado grueso</b> — se forman burbujas en la corteza. Y <b>no llegar hasta los bordes</b> — se nota la diferencia de color y arruina la pieza entera.' },

      { t:'h', c:'Cuál va con cuál' },
      { t:'tabla', cols:['Acabado','Cuándo se aplica','Para qué pan'], filas:[
        ['Almíbar clásico','Caliente, al salir','Camaleón, azucarado'],
        ['Almíbar con especias','Caliente, al salir','Acema, trenzados'],
        ['Almíbar de papelón','Caliente, al salir','Los tachirenses de identidad'],
        ['Mantequilla','Caliente, al salir','Salados y de miga blanda'],
        ['Leche condensada','ANTES del horno','Pan de Dios y con coco'],
        ['Huevo + miel','ANTES del horno','El que va a foto o vitrina'],
        ['Azúcar glas','Pan FRÍO','Acemas, trenzados, Navidad'],
        ['Agua y azúcar','Caliente, al salir','Los que llevan relleno']
      ]},
      { t:'nota', tt:'La regla que ordena todo', c:'Hay tres momentos y no se mezclan. <b>Antes del horno:</b> leche condensada, huevo con miel, y todas las decoraciones que se pegan. <b>Al salir, en caliente:</b> los almíbares y la mantequilla. <b>Con el pan frío:</b> solo el azúcar glas.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', hero:'pan-pinita', titulo:'Las decoraciones y los cortes de firma',
    lede:'Lo que hace que digan «ese es el pan de fulano» desde el otro lado del mostrador.',
    bloques:[
      { t:'p', c:'Las decoraciones no son capricho: son inversión. Un pan con almendras justifica un <b>40% más de precio</b>. Y el costo del ingrediente decorativo casi nunca pasa del 3% del precio final.' },
      { t:'lista', items:[
        ['Ajonjolí','Humedece la superficie con agua o con el baño de huevo antes de ponerlo. Distribuye en <b>movimiento circular del centro hacia afuera</b> y presiona apenas con la palma limpia para que agarre. Se tuesta entre 170 y 200 °C y desarrolla aroma a frutos secos. <b>Sube el valor percibido entre 15 y 20%.</b>'],
        ['Azúcar perlada','Va justo antes de hornear, sobre el baño de huevo o la leche condensada. Las perlas <b>no se derriten</b>: aguantan hasta 220 °C y crean un efecto de cristal que es lo más fotogénico que existe.'],
        ['Coco rallado tostado','Tuéstalo en sartén seca a fuego bajo antes de usarlo. Va sobre leche condensada, que hace de pegamento. <b>Máximo 180 °C</b> o se quema. El tostado tiene sabor más profundo y color mucho más atractivo que el crudo.'],
        ['Almendras fileteadas','En abanico o en línea, sobre el baño, antes de hornear. <b>Máximo 175 °C</b>: se tuestan rapidísimo. Si tu horno es fuerte, ponlas <b>a los 10 minutos</b> de horneado, no desde el principio. Las enteras van a mitad del horneado.'],
        ['Pasas','Hidrátalas en agua tibia o en ron <b>20 minutos</b> antes de incorporarlas. Si las pones secas, le roban humedad a la masa y quedan duras como piedras.'],
        ['Ralladura de cítrico','Siempre fresca, nunca la seca de frasco. Naranja o limón sobre panes dulces, agregada al final del amasado para que no pierda los aceites.'],
        ['Sal en escamas','El secreto de los panaderos premium del mundo. Sal gruesa tipo Maldon sobre panes salados. El contraste visual de blanco sobre dorado y el contraste dulce-salado es sofisticado y muy diferenciador.']
      ]},
      { t:'tip', tt:'Elige una y hazla tuya', c:'No hace falta usar las siete. La firma visual funciona por <b>repetición</b>: si todos tus panes llevan el mismo detalle, la gente lo reconoce de lejos. <b>Siete decoraciones distintas no son una firma, son desorden.</b>' },

      { t:'ilustra', items:[['granos','Ajonjolí'],['papelon','Azúcar perlada'],['sal','Sal en escamas'],['tijeras','Cortes de firma']] },

      { t:'h', c:'Los cortes como arte' },
      { t:'p', c:'El corte dejó de ser una función técnica para convertirse en la <b>firma artística del panadero</b>. En todo el mundo, el corte artístico genera millones de visualizaciones en redes: la gente fotografía el pan antes de comerlo. Eso es publicidad que no pagas.' },
      { t:'lista', items:[
        ['Lame de doble filo','El estándar profesional. Permite el ángulo de 30 a 45° que hace que los cortes abran con elegancia.'],
        ['Bisturí de un solo uso','Precisión extrema para patrones detallados. Más control que el lame para diseños complejos.'],
        ['Tijeras de panadero','Para espigas, plumas y patrones tridimensionales, antes del horneado.']
      ]},
      { t:'nota', tt:'El truco que hace la diferencia', c:'<b>Enfría el pan ya formado 30 minutos en nevera antes de cortar.</b> La masa fría mantiene la forma durante el corte y los diseños abren mucho más limpios en el horno. La masa a temperatura ambiente se deforma con la presión de la cuchilla.' },
      { t:'tabla', cols:['Patrón','Cómo se hace','Profundidad'], filas:[
        ['Espiga clásica','Cortes en diagonal alternos, a 30° de la superficie','5 mm'],
        ['Espiga doble','Dos filas paralelas de cortes alternos, con guía central para la simetría','5 mm'],
        ['Patrón de hoja','Vena central primero, después las laterales simétricas','7 mm el centro, 3 mm los lados'],
        ['Geométrico','Cuadrados, rombos o hexágonos, con plantilla trazada antes','5 mm']
      ]},
      { t:'tip', tt:'Practica sin gastar masa', c:'Ensaya los patrones sobre <b>plastilina o masa de papel</b> antes de aplicarlos al pan real. El músculo aprende el movimiento antes de que el pan lo juzgue, y no pierdes ni un gramo de harina.' },

      { t:'seq', titulo:'Un acabado completo, paso a paso', items:[
        ['paso-golfeados-1','Las piezas formadas, antes del levado'],
        ['paso-golfeados-2','Levadas y listas para el pintado'],
        ['paso-golfeados-3','El pintado con brocha, en una sola dirección'],
        ['paso-golfeados-4','Recién salidas del horno'],
        ['paso-golfeados-5','El almíbar aplicado en caliente'],
        ['paso-golfeados-6','El brillo ya fijado, listas para vitrina']
      ]}
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'pan-quesadilla-andina', titulo:'El empaque, tu marca en cada entrega',
    lede:'Antes de olerlo y antes de probarlo, el cliente toca el empaque. Ese momento define todo lo que viene después.',
    bloques:[
      { t:'p', c:'El mismo pan en bolsa plástica genérica, o en caja de kraft con logo y cinta dorada. <b>¿Cuánto más pagarías por el segundo?</b> La respuesta de cualquier consumidor es: bastante más. El empaque comunica antes que tú: dice quién eres, qué valores tienes y cuánto cuidas a tu cliente.' },
      { t:'p', c:'La inversión se recupera en el primer pedido. Un cliente que recibe su pan en una caja bonita con tu logo <b>se siente especial</b>. Y el que se siente especial vuelve, trae amigos y comparte en redes sin que le pagues nada.' },

      { t:'h', c:'Los tres niveles' },
      { t:'tabla', cols:['Nivel','Qué lleva','Para qué'], filas:[
        ['1 · Básico','Bolsa plástica transparente + etiqueta impresa','Venta directa frecuente. Costo mínimo, funcional'],
        ['2 · Intermedio','Bolsa kraft + etiqueta personalizada + cinta','Clientes regulares y ventas de mayor valor. Artesanal y cálido'],
        ['3 · Premium','Caja con logo + papel tissue + cinta + tarjeta','Regalos, eventos y clientes corporativos. El precio se justifica solo']
      ]},

      { t:'h', c:'Qué usar y por qué' },
      { t:'lista', items:[
        ['Bolsa de celofán','Su ventaja es que <b>el cliente ve el pan antes de comprarlo</b>. Ideal para panes con decoración visible o acabado brillante, que son su propio argumento de venta. Se sella con pistola de calor o cinta decorativa. Costo bajísimo.'],
        ['Bolsa de papel kraft','El empaque artesanal por excelencia. <b>El kraft respira</b>, y eso mantiene la corteza crujiente más tiempo que el plástico. Transmite autenticidad de inmediato. Se personaliza con un sello o una etiqueta adhesiva.'],
        ['Caja de cartón individual','Para premium, pedidos especiales y regalos. Se consiguen sin logo en tiendas de repostería, y se personalizan con una etiqueta adhesiva que cubra la tapa.'],
        ['Papel tissue y cinta','Adentro de la caja, añade un nivel de presentación que sorprende. Colores: crema, dorado o marrón oscuro, siempre en línea con tu marca. La cinta con lazo convierte cualquier empaque en regalo.'],
        ['Canasta de regalo','Varios panes del catálogo combinados, con tissue, cinta y tarjeta. Para fechas señaladas y clientes corporativos. <b>El margen de una canasta es muy superior al de la venta individual.</b>'],
        ['Bolsa isotérmica','Para deliveries largos o días de calor. El cliente recibe el pan fresco <b>y se queda con la bolsa con tu logo</b> como recordatorio permanente.']
      ]},

      { t:'ilustra', items:[['pan','Kraft que respira'],['papelon','Caja premium'],['reloj','Empacar en frío']] },

      { t:'h', c:'La presentación cambia según la ocasión' },
      { t:'tabla', cols:['Ocasión','Cómo se presenta'], filas:[
        ['Venta directa','Bolsa kraft o celofán + etiqueta. El estándar que el cliente reconoce como «el tuyo»'],
        ['Regalo casual','Bolsa kraft + cinta de color + etiqueta con el nombre escrito a mano'],
        ['Regalo corporativo','Caja con logo + tissue en color de la empresa + tarjeta con su mensaje'],
        ['Bodas y bautizos','Caja individual + decoración elaborada + lazo + tarjeta personalizada'],
        ['Feria gastronómica','Mantel de lino, cestas de mimbre, precios a mano, un pan partido a la vista'],
        ['Cafetería como proveedor','Caja rígida + tissue entre capas. Tu etiqueta interna garantiza el reconocimiento'],
        ['Delivery','Caja rígida + tissue + nada suelto adentro. Tarjeta de agradecimiento a mano']
      ]},
      { t:'tip', tt:'La feria tiene una regla propia', c:'Lleva siempre <b>más de lo que calculas vender</b>: una mesa llena se ve próspera y el pan que luce bien se vende. Y hornea algo en los últimos 30 minutos antes de abrir — <b>el olor es el mejor vendedor que vas a tener</b>.' },

      { t:'h', c:'Cuánto dura tu pan' },
      { t:'p', c:'Un pan que llega fresco es un cliente que vuelve. Uno que llega seco es un cliente que no regresa <b>y además se lo cuenta a sus amigos</b>.' },
      { t:'tabla', cols:['El pan','Vida útil','Cómo guardarlo'], filas:[
        ['Pan de leche y bollería suave','2 a 3 días','Bolsa cerrada, temperatura ambiente'],
        ['Pan de jamón tachirense','3 a 4 días','Nevera, en bolsa hermética'],
        ['Trenzados con almíbar','2 a 3 días','Temperatura ambiente, lejos de la humedad'],
        ['Pan de Dios con coco','2 días','Temperatura ambiente. Nunca nevera'],
        ['Acemas tachirenses','4 a 5 días','Bolsa kraft cerrada, lugar seco'],
        ['Pan rústico de papelón','4 a 5 días','Envuelto en paño de cocina limpio'],
        ['Pan con relleno de queso','2 días','Nevera obligatoria']
      ]},
      { t:'nota', tt:'El enemigo es la humedad', c:'<b>Nunca empaques pan caliente.</b> El vapor que suelta se condensa dentro de la bolsa, ablanda la corteza y acelera el envejecimiento. Un empaque correcto sobre pan completamente frío estira la vida útil <b>un día entero</b>.' },
      { t:'tip', tt:'La frase que fideliza', c:'Ponla en la etiqueta o en una tarjetita: <i>«Consumir preferiblemente antes del [fecha]. Conservar en lugar fresco y seco. Para recuperar la frescura, 5 minutos en horno a 150 °C.»</i> Ese consejo hace que el cliente disfrute más el pan y te lo agradezca.' }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', hero:'pan-golfeado', titulo:'Tu marca y tu etiqueta',
    lede:'Una marca no es un nombre bonito. Es lo que hace que te reconozcan sin leer.',
    bloques:[
      { t:'p', c:'No necesitas un diseñador para empezar. <b>Necesitas consistencia:</b> siempre los mismos colores, la misma presentación, el mismo estilo. Eso construye reconocimiento, y el reconocimiento es lo que después te deja cobrar más.' },
      { t:'lista', items:[
        ['El nombre','Que evoque origen, tradición o calidez. <b>Lo tachirense es un diferenciador automático</b> en cualquier ciudad: «Panadería Andina», «El Horno de los Andes», «Pan Tachirense» comunican autenticidad antes de que nadie pruebe nada.'],
        ['El logo','Simple, legible y reproducible en cualquier tamaño. Tiene que funcionar igual en una etiqueta de 4 cm y en un letrero de dos metros. Si solo se entiende grande, no sirve.'],
        ['Los colores','<b>Crema, marrón oscuro y dorado</b> son la paleta universal de la panadería artesanal. Transmiten calidez, tradición y calidad. Una vez elegidos, se usan siempre, en todo.']
      ]},

      { t:'h', c:'Las herramientas, todas gratis' },
      { t:'lista', items:[
        ['Canva','La más completa y accesible. Trae plantillas específicas de panadería, paletas y tipografías. Diseñas logo, etiquetas, publicaciones y flyers sin saber diseño. La versión gratuita alcanza y sobra.'],
        ['LogoMakr','Especializado en logos, con biblioteca de íconos de panadería. Descarga en alta resolución para etiquetas y empaques. Resultado presentable en veinte minutos.'],
        ['WhatsApp Business','Tu primer punto de marca digital. La foto de perfil, el nombre, el mensaje de bienvenida y el catálogo son el primer contacto que tiene el cliente contigo. <b>Cuídalos tanto como cuidas el pan.</b>'],
        ['Instagram','La vidriera gratuita más poderosa. La consistencia visual del feed —mismos colores, mismo estilo de foto— construye reconocimiento con cada publicación. Sin costo y sin intermediarios.']
      ]},

      { t:'ilustra', items:[['pan','Nombre con origen'],['papelon','Crema, marrón, dorado'],['granos','Siempre igual']] },

      { t:'h', c:'La etiqueta es tu mejor vendedor' },
      { t:'p', c:'Cada pan que sale de tu cocina lleva tu contacto. Y cuando alguien lo regala, <b>el que lo recibe también sabe dónde comprarlo</b>. Es el único vendedor que trabaja gratis y las 24 horas.' },
      { t:'lista', items:[
        ['Nombre de tu panadería','Grande y visible. Es lo que se recuerda.'],
        ['Nombre del pan','Claro y apetitoso. «Acema de bocadillo y queso», no «Producto 4».'],
        ['Ingredientes principales','Genera confianza, sobre todo con la talvina nombrada.'],
        ['Fecha de elaboración','Transparencia. Y te ahorra discusiones.'],
        ['Tu WhatsApp','La herramienta de reorden más efectiva que existe.'],
        ['Una frase de identidad','Corta. «Hecho con talvina tachirense, fermento natural de 400 años.»'],
        ['Un código QR','Directo a tu WhatsApp, para que el pedido se haga en dos toques.']
      ]},
      { t:'tabla', cols:['Paso','Cómo se hace'], filas:[
        ['1 · Diseña','Plantillas de etiquetas en Canva. 6×4 cm para panes individuales, 8×5 cm para cajas. Descarga en PDF de alta calidad'],
        ['2 · Elige el papel','Adhesivo couché para impresora de inyección. Adhesivo brillante para acabado premium'],
        ['3 · Imprime','En papelería con impresión digital, en tandas de 100 o 200 para bajar el costo unitario. También sale bien en casa'],
        ['4 · Aplica','Siempre en la misma posición, centrada, sin burbujas ni arrugas. La consistencia también es presentación']
      ]},
      { t:'nota', tt:'Lo que la etiqueta hace por el precio', c:'Un pan sin etiqueta es un pan anónimo, y un pan anónimo compite solo por precio. <b>Un pan con nombre, origen y contacto compite por lo que es.</b> Esa es toda la diferencia.' }
    ]
  },

  /* ════════ 5 ════════ */
  { tipo:'largo', hero:'hero-acema', titulo:'La foto que vende y la vitrina que vende',
    lede:'Antes de que el cliente entre a tu cocina, entra a tu foto.',
    bloques:[
      { t:'p', c:'Una imagen bien tomada con un celular básico vende más que una foto mediocre con cámara profesional. <b>La luz y el ángulo lo son todo</b>, y las dos cosas son gratis.' },

      { t:'h', c:'La regla de oro: luz natural, nunca flash' },
      { t:'p', c:'El flash aplana la textura del pan, elimina el brillo del glaseado y hace que la miga parezca artificial. La luz natural revela cada alvéolo, hace brillar el almíbar y da calidez a los colores.' },
      { t:'lista', items:[
        ['Las horas buenas','De 7 a 9 de la mañana y de 3 a 5 de la tarde. La luz es dorada, suave y lateral: exactamente lo que necesita una textura.'],
        ['Tu estación de fotos','Una mesa cerca de la ventana con más entrada de luz. Si la luz pega muy directa, difumínala con una hoja de papel vegetal o una cortina blanca fina.'],
        ['Los fondos que funcionan','Tabla de madera oscura o clara (el clásico). Mármol o cerámica blanca (elegante). Tela de lino crema (artesanal premium). Papel kraft grande (consistente con tu marca).']
      ]},

      { t:'h', c:'Los tres ángulos' },
      { t:'tabla', cols:['Ángulo','Qué muestra','Cuándo usarlo'], filas:[
        ['Cenital, desde arriba','El diseño completo de la parte de arriba','Cortes artísticos, decoraciones elaboradas, formas geométricas'],
        ['45°, el universal','Forma, altura, acabado y entorno a la vez','Prácticamente cualquier pan. Es el que más rinde'],
        ['El corte transversal','La miga, los alvéolos, el relleno','El contenido más efectivo en redes. Ten siempre un pan partido a mano']
      ]},

      { t:'h', c:'Los props' },
      { t:'p', c:'Son los elementos que rodean al pan y crean contexto y deseo. No se trata de decorar por decorar: <b>cada elemento tiene que reforzar el mensaje</b>.' },
      { t:'lista', items:[
        ['Canela en rama','Evoca el sabor andino antes de probarlo.'],
        ['Granos de trigo o espiguillas','Comunica artesanalidad y origen de un golpe.'],
        ['Taza de café o chocolate','Crea la situación completa: no vendes pan, vendes el momento.'],
        ['Mantequilla sobre tabla','Sugiere el instante exacto del consumo.'],
        ['Un paño de lino arrugado','Da textura y hace que la escena se vea vivida, no montada.']
      ]},
      { t:'nota', tt:'Menos es más', c:'<b>Tres props bien elegidos son más poderosos que diez elementos compitiendo entre sí.</b> Si al mirar la foto no sabes dónde poner el ojo, sobra algo.' },

      { t:'ilustra', items:[['canela','Canela de prop'],['leche','La situación'],['pan','El corte a la vista']] },

      { t:'h', c:'Editar con apps gratis' },
      { t:'lista', items:[
        ['Lightroom Mobile','La más potente en versión gratuita. Ajustes que funcionan para pan: <b>temperatura +15</b> (más cálida), <b>textura +20</b> (más detalle en la corteza), <b>intensidad +10</b> (dorados más vivos), <b>sombras +15</b> (revelar el detalle oscuro).'],
        ['Snapseed','Más intuitivo para arrancar. La herramienta «Selectivo» te deja editar solo el pan sin tocar el fondo. El filtro «Glamour Glow» suaviza las luces y agrega un brillo cálido muy favorecedor.'],
        ['VSCO','Para que tu feed se vea coherente. Los filtros A4, C1 y HB1 funcionan muy bien con panes y colores cálidos. <b>El mismo filtro a la misma intensidad en todas las fotos</b> unifica la identidad visual.']
      ]},
      { t:'tip', tt:'El video que más alcance tiene', c:'El pan saliendo del horno con el vapor subiendo. Es el contenido con más alcance orgánico de cualquier panadería, y no requiere edición. <b>Grábalo cada vez que hornees y publícalo siempre.</b>' },

      { t:'h', c:'La vitrina: la mitad de las ventas son impulsivas' },
      { t:'p', c:'El cliente que pasó a ver termina comprando si el display y el olor lo invitan. Dominar la exhibición es <b>duplicar ventas sin bajar precios</b>.' },
      { t:'lista', items:[
        ['La altura correcta','El pan a la altura de los ojos se vende más. Los premium al nivel visual directo, los económicos o de volumen abajo, los especiales arriba como referencia.'],
        ['Agrupado por familia','Dulces juntos, salados juntos, especiales juntos. El que busca algo lo encuentra rápido; el que no sabe qué quiere recorre todo y compra más.'],
        ['El pan de muestra','Siempre uno cortado en exhibición, mostrando la miga, protegido con film. <b>La miga abierta es el argumento de venta más poderoso que existe.</b>'],
        ['Precios visibles','El precio oculto incomoda y reduce ventas. Visible y bien presentado genera confianza. <b>Nunca obligues al cliente a preguntar.</b>']
      ]},
      { t:'nota', tt:'El olor y las muestras', c:'Si puedes hornear cerca del momento de venta, hazlo siempre: el aroma del pan recién horneado es uno de los disparadores de compra más fuertes que existen. Y dar a probar un pan nuevo <b>convierte muchísimo más</b> que solo mostrarlo. La muestra no es un costo: es venta.' }
    ]
  },

  /* ════════ 6 ════════ */
  { tipo:'largo', hero:'pan-bolitas-queso-bocadillo', titulo:'Qué salió mal con el acabado',
    lede:'Los errores que arruinan un pan que ya estaba bien horneado.',
    bloques:[
      { t:'tabla', cols:['Lo que pasó','Por qué','Qué hacer'], filas:[
        ['El azúcar glas desapareció','Lo pusiste sobre pan caliente','Solo sobre pan frío'],
        ['Burbujas en la corteza','Capa de huevo muy gruesa','Capa fina y pareja'],
        ['Salió mate, sin brillo','Usaste huevo entero','Solo la yema'],
        ['Bordes de otro color','No llegaste hasta el borde','Barnizar hasta el filo'],
        ['El coco se quemó','Horno por encima de 180 °C','Bajar, o ponerlo a los 10 min'],
        ['Las almendras negras','Se tuestan muy rápido','Máximo 175 °C, o a mitad de horneado'],
        ['Las pasas duras','Las pusiste secas','20 min en agua tibia o ron'],
        ['El almíbar no pegó','El pan ya estaba frío','Caliente sobre caliente'],
        ['El ajonjolí se cayó','Superficie seca al aplicarlo','Humedecer con agua o baño de huevo primero'],
        ['Los cortes no abrieron','Masa a temperatura ambiente','30 min de nevera antes de cortar'],
        ['La corteza se ablandó en la bolsa','Empacaste caliente','Esperar a que esté completamente frío'],
        ['La etiqueta con burbujas','Aplicada con prisa','Desde el centro hacia afuera, alisando']
      ]},

      { t:'sello', img:'pan', pie:'El ojo compra primero' },

      { t:'p', c:'Casi todos estos errores tienen la misma raíz: <b>el acabado se hizo en el momento equivocado</b>. Si tienes dudas, vuelve a la regla de los tres momentos —antes del horno, en caliente al salir, o con el pan frío— y ubica tu acabado en el que le toca.' },
      { t:'tip', tt:'Lo que se puede hacer hoy mismo, gratis', c:'Elegir una decoración y usarla siempre. Poner los precios visibles. Tener un pan partido en exhibición. Fotografiar junto a la ventana en vez de con flash. <b>Ninguna de las cuatro cuesta un bolívar</b> y las cuatro cambian la venta esta misma semana.' }
    ]
  }

  ]
};
