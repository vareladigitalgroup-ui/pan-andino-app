/* REGALO 2 · Tequeños, Cachitos y Pasapalos
   Reescrito al formato largo, con dibujos.
   El cachito sale del propio curso, con porcentaje de panadero.
   Los tequeños, verificados contra fuentes externas.
   ⚠ La guasacaca NO se repite aquí: vive completa en el Regalo 4
   (Quesos, Salsas y Acompañantes). Aquí solo se remite a ella. */

window.REGALO_2 = {
  id: 'g2',
  tapa: 'regalo-2-pasapalos',
  kicker: 'Regalo 2',
  nombre: 'Tequeños, Cachitos y Pasapalos',
  sub: 'Lo que se vende solo en cualquier reunión',
  promesa: 'Tres cosas que nadie rechaza y que se venden por docena.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', hero:'intro-pasapalos', titulo:'Por qué estos, y por qué cambian el negocio',
    lede:'No son recetas sueltas. Son los productos que te compran en cantidad.',
    bloques:[
      { t:'p', c:'El pan se vende de a uno. Los pasapalos se venden <b>por docena</b>, y eso cambia el negocio entero: una llamada, un pedido, cuarenta unidades.' },
      { t:'p', c:'Y hay algo más: <b>los dos se congelan crudos</b>. Los armas cuando tienes tiempo, los guardas, y los fríes o los horneas el día del pedido. Es lo único de este oficio que te deja producir por adelantado.' },
      { t:'tip', tt:'Dónde está la plata de verdad', c:'El que hace una fiesta pide <b>100 tequeños de una vez</b>. El que abre una cafetería pide <b>50 cachitos por semana</b>. Un solo cliente de esos vale más que treinta compradores sueltos, y lo consigues una vez.' },

      { t:'ilustra', items:[['harina','Una masa'],['reloj','Congelados crudos'],['horno','Fritos al pedido']] },

      { t:'h', c:'Congelar, que es donde está el negocio' },
      { t:'p', c:'Esta es la parte que casi nadie aprovecha, y es la que convierte una cocina en una pequeña fábrica.' },
      { t:'tabla', cols:['Qué','Cómo se congela','Cómo se usa'], filas:[
        ['Tequeños','Armados y crudos, separados en bandeja hasta que endurezcan; después a la bolsa','Se fríen congelados, sin descongelar'],
        ['Cachitos','Formados, antes del levado final','Se sacan, levan 2 a 3 h y se hornean'],
        ['Masa de tequeño','En bloque, envuelta','Se descongela en nevera de un día para otro']
      ]},
      { t:'nota', tt:'El tequeño se fríe congelado', c:'No se descongela nunca. Si lo descongelas, la masa se humedece, se ablanda y <b>se abre en el aceite</b>. Congelado va directo al aceite caliente y sale mejor que el fresco.' },
      { t:'tip', tt:'La cuenta que hay que hacer', c:'Un domingo armas 200 tequeños y los congelas. Durante el mes vas sacando por pedido. <b>Un día de trabajo te cubre cuatro semanas de venta</b>, y el cliente siempre lo recibe recién frito.' }
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', titulo:'Tequeños',
    lede:'El rey de las fiestas venezolanas. Un bastón de queso envuelto en masa y frito.',
    bloques:[
      { t:'ing', titulo:'La masa · para unos 800 g', items:[
        ['500 g','harina de trigo todo uso','100%'],
        ['125 g','mantequilla fría en cubos','25%'],
        ['200 ml','agua tibia','40%'],
        ['1 uds','huevo','—'],
        ['10 g','azúcar','2%'],
        ['8 g','sal','1,6%']
      ]},
      { t:'seq', titulo:'El paso a paso', items:[
        ['paso-tequenos-1','La masa arenada con la mantequilla fría'],
        ['paso-tequenos-2','Amasada y lista para el reposo'],
        ['paso-tequenos-3','Estirada a 2 mm y cortada en tiras'],
        ['paso-tequenos-4','El bastón de queso, envuelto en espiral'],
        ['paso-tequenos-5','Armados, listos para freír o congelar'],
        ['paso-tequenos-6','Dorados y escurridos']
      ]},
      { t:'pasos', items:[
        'Mezcla en seco la harina, la sal y el azúcar.',
        'Agrega la mantequilla fría y trabájala <b>con los dedos</b> hasta que quede una textura arenosa, como migas. Ese arenado es lo que da la masa crocante.',
        'Agrega el huevo y el agua tibia de a poco. Amasa hasta que quede suave y elástica.',
        '<b>Deja reposar 15 minutos</b> tapada. Sin ese reposo no se estira, se encoge.',
        'Corta el queso en <b>bastones de 5 a 7 cm de largo por 1 cm de grosor</b>.',
        'Estira la masa con rodillo a <b>2 mm</b> y córtala en tiras largas de 2 cm de ancho.',
        'Humedece la tira con agua y envuelve el bastón en espiral, <b>montando cada vuelta sobre la anterior</b> para que no queden huecos. Sella bien las puntas.',
        'Fríe en aceite caliente hasta dorado y crocante. Escurre sobre papel absorbente.'
      ]},
      { t:'nota', tt:'El queso manda', c:'Va <b>queso blanco duro y salado</b>, tipo llanero o de mano curado. Si usas uno blando o muy húmedo se derrite y se te sale por las puntas. Y si el queso está frío de la nevera, mejor: aguanta más antes de derretirse.' },
      { t:'tip', tt:'Que no queden huecos', c:'Cada vuelta de masa tiene que montar sobre la anterior. <b>Un hueco es por donde se escapa el queso en el aceite</b> — y ahí perdiste el tequeño y además ensuciaste toda la fritura.' },

      { t:'ilustra', items:[['mantequilla','Mantequilla fría'],['harina','Masa arenada'],['leche','Queso duro'],['gota','Sellar con agua']] },

      { t:'nota', tt:'Y la guasacaca va aparte', c:'Sin guasacaca, los tequeños están a medias. La receta completa —con el truco del ajo sin germen y el punto exacto de la salsa— está en el <b>Regalo 4 · Quesos, Salsas y Acompañantes</b>. Ahí vive entera, para no tenerla repetida en dos lugares.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', titulo:'Cachitos de jamón',
    lede:'El desayuno venezolano. Y el que más piden las panaderías para reventa.',
    bloques:[
      { t:'ing', titulo:'La masa · para 6 de 100 g', items:[
        ['345 g','harina panadera','100%'],
        ['86 ml','agua','25%'],
        ['69 ml','leche entera','20%'],
        ['35 g','mantequilla sin sal','10%'],
        ['35 g','azúcar','10%'],
        ['17 g','huevo batido','5%'],
        ['7 g','sal','2%'],
        ['3 g','levadura instantánea','1%'],
        ['3 g','vainilla','1%']
      ]},
      { t:'seq', titulo:'El paso a paso', items:[
        ['paso-cachitos-1','La masa lista, lisa y elástica'],
        ['paso-cachitos-2','El triángulo estirado con el rodillo'],
        ['paso-cachitos-3','El jamón y la tocineta en el centro'],
        ['paso-cachitos-4','Enrollado desde la base hacia la punta'],
        ['paso-cachitos-5','En la bandeja, antes del levado'],
        ['paso-cachitos-6','Barnizados y horneados']
      ]},
      { t:'pasos', items:[
        '<b>El relleno:</b> 360 g de jamón ahumado y 54 g de tocineta por cada kilo de harina. Todo picado chico.',
        '<b>Primer amasado:</b> reserva la mantequilla y la sal. Mezcla harina con levadura, junta los líquidos aparte, integra hasta masa despareja, amasa 2 min con pliegues, descansa 10.',
        'Agrega la sal, amasa 2 minutos <b>como máximo</b>, descansa 10 tapada.',
        '<b>Segundo amasado:</b> reparte la mantequilla en cubos sobre la masa, envuélvela y amasa hasta que quede lisa. <b>Al principio se separa: es normal.</b> Sigue 5 minutos más y emulsiona.',
        'Divide en 6, bolea, descansa 10 min. Forma un <b>bastón de 22 cm</b> con la cabeza más gruesa.',
        'Con el rodillo, estira la cabeza hacia los lados para hacer un <b>triángulo</b>.',
        'Rellena el centro con el jamón y la tocineta. Dobla los bordes hacia el vértice y enrolla hacia arriba usando la lengua de masa.',
        'Levado final: <b>60 a 90 min entre 24 y 27 °C</b>. Barniza con huevo colado. Horno a <b>180 °C, 20 a 25 min</b>.'
      ]},
      { t:'nota', tt:'La mantequilla va tarde, y por eso', c:'El 10% de mantequilla se incorpora <b>al final</b>, no al principio. Si la metes desde el arranque, la grasa recubre la harina y el gluten no se forma. Por eso existe el segundo amasado, y por eso no se puede saltar.' },
      { t:'tip', tt:'El acabado que lo distingue', c:'Enfría 20 minutos sobre rejilla o tabla de madera, y termina con un pincelado de <b>mantequilla clarificada</b>. Es lo que le da el brillo de panadería, y es la diferencia visible entre el tuyo y el del supermercado.' },

      { t:'ilustra', items:[['mantequilla','Al final'],['huevo','Huevo colado'],['termometro','24 a 27 °C'],['horno','180 °C']] },

      { t:'h', c:'Por qué este es el producto de reventa' },
      { t:'p', c:'El cachito es lo que una cafetería <b>no puede dejar de tener</b> y casi nunca hace ella misma. Es el pedido recurrente más fácil de conseguir de todo el catálogo, porque no le estás proponiendo algo nuevo: le estás resolviendo algo que ya necesita.' },
      { t:'nota', tt:'Cómo se propone', c:'«Te dejo una docena para que los pruebes con tus clientes esta semana. Si se venden, te traigo 50 todos los lunes.» <b>No estás vendiendo cachitos: estás proponiendo un lunes fijo.</b>' }
    ]
  }

  ]
};
