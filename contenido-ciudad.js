/* ══════════════════════════════════════════════════════════════
   EL PAN DE TU CIUDAD — el OTO1

   Lo que se vendió y no existía. Cuatro compradores pagaron $27
   entre el 4 y el 6 de agosto y recibían "La ñapa" (la guía de la
   harina), que era el REGALO de este curso, no el curso.

   Las cuatro masas, con las cantidades en porcentaje de panadero
   (todo se calcula sobre la harina = 100%) y verificadas contra
   fuentes profesionales:
     - baguette con poolish al 33%, hidratación 66%
     - ciabatta con biga, hidratación 80%
     - focaccia 75% con aceite de oliva
     - hogaza de campo 78% con mezcla de harinas y frío largo
   Fuentes anotadas dentro de cada masa, a la vista del comprador.

   ⚠ SIN FOTOS todavía: se escribió primero el contenido correcto.
   Las secuencias de formado son lo próximo. No se referenció ninguna
   imagen que no exista, para que el verificador siga pasando.
   ══════════════════════════════════════════════════════════════ */

window.CIUDAD = {
  id: 'ciudad',
  tapa: 'mockup-oto1',
  kicker: 'Curso aparte',
  nombre: 'El Pan de tu Ciudad',
  sub: 'Cuatro masas, más de veinte productos',
  promesa: 'Los panes que aprendí afuera para que me dieran trabajo.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', titulo:'No son cincuenta recetas. Son cuatro masas.',
    lede:'Lo que no se ve desde afuera de una panadería.',
    bloques:[
      { t:'p', c:'Cuando llegué no sabía hacer una baguette. Me tocó aprenderla para que me dieran trabajo, y ahí adentro me enseñaron lo que no se ve desde el mostrador: <b>en una panadería no hay cincuenta recetas. Hay cuatro masas.</b> Todo lo demás es formarlas distinto.' },
      { t:'p', c:'El que abre un negocio pensando en recetas se ahoga: cincuenta fichas, cincuenta compras, cincuenta cosas que salen mal. El que piensa en masas hace <b>cuatro amasados</b> y saca veintidós productos del mostrador.' },

      { t:'h', c:'Las cuatro y qué sale de cada una' },
      { t:'tabla', cols:['La masa','Qué la define','Qué sale de ella'], filas:[
        ['<b>Magra</b> (baguette)','Solo harina, agua, sal y levadura. 66% de agua','Baguette, ficelle, bâtard, boule, épi, fougasse, panecitos, crostini'],
        ['<b>Mojada</b> (ciabatta)','80% de agua. No se amasa, se pliega','Ciabatta, ciabattina, panini, pan de hamburguesa, pizza bianca'],
        ['<b>Con aceite</b> (focaccia)','75% de agua más aceite de oliva','Focaccia, focaccia rellena, pizza in teglia, pizza al taglio, sfincione'],
        ['<b>Larga</b> (hogaza de campo)','Mezcla de harinas y una noche de frío','Hogaza, bâtard de campo, pan de molde, pan de tabla']
      ]},

      { t:'nota', tt:'Por qué esto te importa aunque vendas pan venezolano', c:'Los venezolanos de tu ciudad <b>se acaban</b>. Son los que son. El día que quieras vender más allá de los paisanos, vas a necesitar el pan que come el resto del barrio — y ese pan sale de estas cuatro masas.' },

      { t:'h', c:'Cómo leer las cantidades' },
      { t:'p', c:'Todo está en <b>porcentaje de panadero</b>: la harina siempre es 100 y lo demás se calcula sobre ella. Si la receta dice 66% de agua y usas 1 kg de harina, son 660 ml de agua. Si usas 500 g, son 330 ml.' },
      { t:'p', c:'Se hace así porque <b>escala sin cuentas</b>. La proporción no cambia: cambia lo que pesas. Es como se habla en las panaderías de verdad.' },
      { t:'tip', tt:'La sal siempre 2%', c:'En las cuatro masas. Son <b>20 g por kilo de harina</b>. Menos y el pan sabe a nada; más y frena la levadura. Ese número no se toca.' },
      { t:'ilustra', items:[['bascula','Todo se pesa'],['reloj','El tiempo es un ingrediente'],['pan','Cuatro masas, veintidós panes']] }
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', titulo:'Masa 1 · La magra (baguette)',
    lede:'Cuatro ingredientes. La que separa al panadero del que hornea.',
    bloques:[
      { t:'p', c:'Harina, agua, sal y levadura. Nada más. <b>No hay dónde esconderse</b>: si la fermentación está mal, se ve. Por eso es la primera que te piden en cualquier panadería.' },
      { t:'p', c:'El sabor no viene de un ingrediente, viene del <b>poolish</b>: una parte de la harina fermenta aparte toda la noche y llega a la masa con el trabajo hecho.' },

      { t:'h', c:'El poolish (la noche antes)' },
      { t:'ing', items:[
        ['Harina panadera','330 g'],
        ['Agua','330 ml'],
        ['Levadura seca instantánea','0,3 g (una pizca)']
      ]},
      { t:'p', c:'Mezclas hasta que no queden grumos. Queda una papilla espesa. Tapas y dejas <b>12 a 16 horas a temperatura ambiente</b>.' },
      { t:'nota', tt:'Cómo saber que está listo', c:'Está lleno de burbujas, huele a alcohol suave y <b>la superficie empieza a hundirse en el centro</b>. Ese hundimiento es la señal: está en su punto máximo. Si se pasa mucho, huele a acetona y hay que empezar de nuevo.' },

      { t:'h', c:'La masa final' },
      { t:'ing', items:[
        ['Todo el poolish','660 g'],
        ['Harina panadera','670 g'],
        ['Agua','330 ml'],
        ['Sal','20 g'],
        ['Levadura seca instantánea','4 g']
      ]},
      { t:'tabla', cols:['','Cantidad','% de panadero'], filas:[
        ['Harina total','1.000 g','100%'],
        ['Agua total','660 ml','<b>66%</b>'],
        ['Sal','20 g','2%'],
        ['Levadura','4,3 g','0,43%']
      ]},

      { t:'h', c:'El proceso' },
      { t:'pasos', items:[
        '<b>Autólisis.</b> Mezcla harina y agua (sin sal ni levadura) y déjalo 20 a 30 minutos tapado. La harina se hidrata sola y después amasa la mitad de tiempo.',
        '<b>Amasado.</b> Suma poolish, sal y levadura. Amasa hasta la prueba de la película: estiras un pedacito y hace una tela fina que deja pasar la luz sin romperse.',
        '<b>Primera fermentación: 90 minutos.</b> A los 30 y a los 60 le haces un pliegue dentro del bol. Cada pliegue le suma fuerza sin amasar.',
        '<b>División.</b> Piezas de 350 g para baguette. De este kilo salen 4 baguettes y sobra masa para dos panecitos.',
        '<b>Preformado.</b> Cada pieza en un cilindro flojo. Reposo de 20 minutos tapado, para que el gluten se relaje.',
        '<b>Formado.</b> Aplanas, doblas en tres a lo largo, sellas con el canto de la mano y ruedas desde el centro hacia afuera hasta el largo de tu bandeja.',
        '<b>Segunda fermentación: 45 a 60 minutos</b>, sobre tela enharinada con pliegues que sujeten los costados.',
        '<b>Los cortes.</b> Cuchilla muy filosa, casi acostada (unos 30°), cortes largos que se solapan un tercio. No perpendicular: se desgarra.',
        '<b>Horno.</b> 250 °C con vapor los primeros 15 minutos. Después sacas el vapor y bajas a 230 °C otros 10 a 12 minutos.'
      ]},
      { t:'nota', tt:'El vapor sin horno profesional', c:'Una bandeja de metal vacía en el piso del horno mientras precalienta. Cuando metes el pan, le tiras <b>media taza de agua hirviendo</b> y cierras rápido. Eso es lo que hace la corteza fina y brillante. <b>Sin vapor no hay baguette</b>, hay palo de pan.' },
      { t:'tip', tt:'Cuándo está', c:'Corteza dorada oscura, casi al borde de quemarse — ahí está el sabor. Y suena hueca al golpearle la base. Con termómetro: <b>96 a 98 °C adentro</b>.' },

      { t:'h', c:'Los ocho productos de esta masa' },
      { t:'tabla', cols:['Producto','Peso','Qué cambia'], filas:[
        ['Baguette','350 g','El formado base'],
        ['Ficelle','150 g','La mitad de masa, mismo largo. Más corteza por bocado'],
        ['Bâtard','400 g','Más corto y más gordo. Miga más húmeda'],
        ['Boule','400 g','Bola. Se forma cerrando hacia abajo en la mesa'],
        ['Épi (espiga)','350 g','Una baguette formada; con tijera cortas al sesgo casi hasta el fondo y vas volteando cada punta a un lado'],
        ['Fougasse','250 g','Se aplana en óvalo y se le hacen cortes que se abren como hoja'],
        ['Panecitos','60 g','Para sándwich. Mismo formado que la boule, más chico'],
        ['Crostini','—','Baguette del día anterior rebanada fina, con aceite, al horno a 160 °C']
      ]},
      { t:'nota', tt:'De dónde salen estos números', c:'La proporción del poolish (33% de la harina, al 100% de hidratación) y el 66% de agua total son el estándar profesional para baguette; la hidratación de trabajo va de 66% a 68% según la harina que consigas. Verificado en <b>The Fresh Loaf</b> (formulario de poolish para baguette) y en las tablas de porcentaje de panadero de <b>The Dough Formula</b>.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', titulo:'Masa 2 · La mojada (ciabatta)',
    lede:'80% de agua. No se amasa: se pliega.',
    bloques:[
      { t:'p', c:'La ciabatta es la masa más mojada de las cuatro, y ahí está todo. <b>Esos huecos grandes y brillantes de adentro son agua</b> que se convirtió en vapor y empujó.' },
      { t:'p', c:'Al principio da miedo: se pega, no toma forma, parece que te equivocaste. <b>No te equivocaste.</b> Así tiene que estar.' },

      { t:'h', c:'La biga (la noche antes)' },
      { t:'p', c:'Igual que el poolish pero más seca. La biga da fuerza; el poolish da extensibilidad. Por eso la ciabatta lleva biga: necesita aguantar tanta agua.' },
      { t:'ing', items:[
        ['Harina panadera','350 g'],
        ['Agua','260 ml'],
        ['Levadura seca instantánea','1 g']
      ]},
      { t:'p', c:'Mezclas apenas, queda grumosa y dura. Tapas y dejas <b>16 a 18 horas</b> en un lugar fresco.' },

      { t:'h', c:'La masa final' },
      { t:'ing', items:[
        ['Toda la biga','611 g'],
        ['Harina panadera','650 g'],
        ['Agua','540 ml'],
        ['Sal','20 g'],
        ['Levadura seca instantánea','3 g']
      ]},
      { t:'tabla', cols:['','Cantidad','% de panadero'], filas:[
        ['Harina total','1.000 g','100%'],
        ['Agua total','800 ml','<b>80%</b>'],
        ['Sal','20 g','2%'],
        ['Levadura','4 g','0,4%']
      ]},

      { t:'h', c:'El proceso' },
      { t:'pasos', items:[
        '<b>Mezcla.</b> Todo junto menos 100 ml de agua. Revuelve con la mano hasta integrar. Va a ser una pasta pegajosa, no una masa.',
        '<b>El agua de a poco.</b> Los 100 ml que guardaste van entrando de a chorritos mientras trabajas la masa. Así admite el agua sin cortarse.',
        '<b>Pliegues en el bol.</b> Cada 30 minutos, cuatro veces: mano mojada, agarras un borde, estiras hacia arriba y lo doblas al centro. Giras el bol y repites cuatro veces.',
        '<b>Fermentación: 2 a 3 horas</b> desde el primer pliegue. Tiene que crecer visiblemente y llenarse de burbujas grandes bajo la superficie.',
        '<b>Volcado.</b> Mesa MUY enharinada. Volcás el bol y dejas que la masa caiga sola. <b>No la toques más de lo necesario.</b>',
        '<b>Corte, no formado.</b> Enharinas arriba y cortas rectángulos con una espátula. Nada de bolear ni apretar: cada burbuja que revientas es un hueco que pierdes.',
        '<b>Traslado.</b> Levantas cada rectángulo con las dos manos y lo volteas sobre el papel de horno. Queda feo y torcido: así va.',
        '<b>Reposo: 30 a 40 minutos</b> tapado con un paño.',
        '<b>Horno.</b> 240 °C con vapor los primeros 15 minutos, después 10 más sin vapor.'
      ]},
      { t:'nota', tt:'Por qué no se amasa', c:'A esta hidratación el amasado tradicional no funciona: la masa no tiene cuerpo para sostenerse. <b>Los pliegues hacen el mismo trabajo</b> — alinean el gluten sin romper las burbujas que ya se formaron.' },
      { t:'tip', tt:'La marca de la buena', c:'Al cortarla, huecos <b>irregulares</b> de distinto tamaño y las paredes brillantes, casi mojadas. Si los huecos son todos iguales y chiquitos, le faltó agua o la manipulaste de más.' },

      { t:'h', c:'Los cinco productos de esta masa' },
      { t:'tabla', cols:['Producto','Peso','Qué cambia'], filas:[
        ['Ciabatta','250 g','Rectángulo largo, el corte base'],
        ['Ciabattina','100 g','El mismo rectángulo más chico. Para sándwich individual'],
        ['Panini','120 g','Rectángulo más grueso; se abre al medio después de horneado'],
        ['Pan de hamburguesa','90 g','Cuadrado; se aplana un poco antes de hornear'],
        ['Pizza bianca','toda la masa','Se estira en la bandeja, aceite y sal gruesa, sin salsa']
      ]},
      { t:'nota', tt:'De dónde salen estos números', c:'La ciabatta clásica va de <b>75% a 80% de hidratación</b> y se hace con biga; la biga al 75% con un 35% de la harina total es la proporción documentada. Verificado en <b>The Fresh Loaf</b> (comparativa de ciabatta a 66% y 76%) y <b>ChainBaker</b> (ciabatta con biga).' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', titulo:'Masa 3 · La del aceite (focaccia)',
    lede:'La más fácil de las cuatro y la que más margen deja.',
    bloques:[
      { t:'p', c:'La focaccia es la puerta de entrada al negocio: <b>no hay que formar nada</b>. Se estira en la bandeja con los dedos y va al horno. Y es la que mejor se cobra, porque se vende por porción.' },
      { t:'p', c:'El aceite de oliva no es un agregado: es parte de la masa. <b>Ablanda la miga y hace que dure más tierna</b> al día siguiente, que para vender es media batalla.' },

      { t:'h', c:'La masa' },
      { t:'ing', items:[
        ['Harina panadera','1.000 g'],
        ['Agua','750 ml'],
        ['Aceite de oliva','50 ml'],
        ['Sal','20 g'],
        ['Levadura seca instantánea','7 g']
      ]},
      { t:'tabla', cols:['','Cantidad','% de panadero'], filas:[
        ['Harina','1.000 g','100%'],
        ['Agua','750 ml','<b>75%</b>'],
        ['Aceite de oliva','50 ml','5%'],
        ['Sal','20 g','2%'],
        ['Levadura','7 g','0,7%']
      ]},

      { t:'h', c:'El proceso' },
      { t:'pasos', items:[
        '<b>Mezcla.</b> Todo junto menos el aceite. Revuelve hasta que no quede harina seca.',
        '<b>El aceite al final</b>, cuando la masa ya está integrada. Si entra al principio, engrasa la harina y el gluten no se forma.',
        '<b>Pliegues.</b> Cada 30 minutos, tres veces, dentro del bol.',
        '<b>Fermentación: 2 horas</b> desde el primer pliegue.',
        '<b>A la bandeja.</b> Bandeja bien aceitada. Volcás la masa y la estiras con las manos aceitadas hacia las esquinas. Si se resiste, la dejas 15 minutos y sigue sola.',
        '<b>Segundo reposo: 1 hora</b> en la bandeja.',
        '<b>Los hoyos.</b> Dedos aceitados, hundes hasta tocar el fondo de la bandeja, por toda la superficie. Esos hoyos son los que sostienen el aceite y la sal.',
        '<b>La salmuera.</b> Bates 50 ml de agua con 30 ml de aceite y sal gruesa, y la echas por encima. Se mete en los hoyos.',
        '<b>Horno.</b> 230 °C, 20 a 25 minutos, hasta que los bordes estén dorados y crocantes.'
      ]},
      { t:'tip', tt:'El truco de la bandeja', c:'Cuanto más aceite en el fondo, más se fríe la base y más crocante queda. En Génova la bandeja lleva aceite hasta que <b>brilla como un espejo</b>.' },

      { t:'h', c:'Los cinco productos de esta masa' },
      { t:'tabla', cols:['Producto','Qué cambia','Cómo se cobra'], filas:[
        ['Focaccia clásica','Aceite, romero y sal gruesa','Por porción'],
        ['Focaccia rellena','Se hornea, se abre al medio y se rellena','Como sándwich'],
        ['Pizza in teglia','Salsa y queso sobre la misma masa','Por porción'],
        ['Pizza al taglio','En bandeja rectangular, se corta con tijera','<b>Por peso</b>, al corte'],
        ['Sfincione','Más gruesa, con cebolla y pan rallado encima','Por porción']
      ]},
      { t:'nota', tt:'Acá está el margen', c:'La focaccia lleva <b>la harina más barata y la mano de obra más corta</b> de las cuatro masas, y se vende por porción o por peso. La pizza al taglio en Roma se cobra por kilo — el cliente pide "un pedazo así" y se pesa. <b>Misma masa, tres veces el precio del pan.</b>' },
      { t:'nota', tt:'De dónde salen estos números', c:'La focaccia va de <b>70% a 80% de hidratación</b> con aceite de oliva incorporado a la masa; la ciabatta en cambio es magra por definición. Verificado en la comparativa técnica de <b>FocacciaRecipe</b> (focaccia vs ciabatta) y la ficha de <b>pizza al taglio</b> de Wikipedia sobre la venta por peso.' }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', titulo:'Masa 4 · La larga (hogaza de campo)',
    lede:'La que se hace sola mientras duermes.',
    bloques:[
      { t:'p', c:'Esta es la que más impresiona en el mostrador y la que menos trabajo activo lleva. <b>El sabor lo hace el tiempo, no vos.</b> Se arma un día y se hornea al siguiente.' },
      { t:'p', c:'La diferencia con las otras tres son <b>dos cosas</b>: la mezcla de harinas y la noche en la nevera.' },

      { t:'h', c:'La masa' },
      { t:'ing', items:[
        ['Harina panadera','700 g'],
        ['Harina integral de trigo','200 g'],
        ['Harina de centeno','100 g'],
        ['Agua','780 ml'],
        ['Sal','20 g'],
        ['Levadura seca instantánea','4 g']
      ]},
      { t:'tabla', cols:['','Cantidad','% de panadero'], filas:[
        ['Harina total','1.000 g','100%'],
        ['— panadera','700 g','70%'],
        ['— integral','200 g','20%'],
        ['— centeno','100 g','10%'],
        ['Agua','780 ml','<b>78%</b>'],
        ['Sal','20 g','2%']
      ]},
      { t:'nota', tt:'Por qué esa mezcla', c:'La integral y el centeno traen <b>sabor y color</b> pero no aguantan gas. Por eso son solo el 30%: el 70% de panadera es el esqueleto que sostiene. Si le subes el integral, tienes más sabor y menos altura — es un cambio, no una mejora.' },

      { t:'h', c:'El proceso, repartido en dos días' },
      { t:'pasos', items:[
        '<b>Día 1 — Autólisis: 40 minutos.</b> Solo harinas y agua. Las integrales necesitan más tiempo para hidratarse que la blanca.',
        '<b>Amasado corto.</b> Suma sal y levadura y trabaja apenas hasta integrar.',
        '<b>Fermentación: 3 a 4 horas</b>, con un pliegue cada 45 minutos. Cuatro pliegues en total.',
        '<b>Preformado y reposo de 30 minutos.</b>',
        '<b>Formado.</b> Bola cerrada hacia abajo (boule) o cilindro corto (bâtard).',
        '<b>Al canasto</b> bien enharinado, <b>con el cierre hacia arriba</b>.',
        '<b>La noche: 12 a 18 horas en la nevera.</b> Ahí se hace todo el sabor.',
        '<b>Día 2 — Horno.</b> Se hornea <b>fría, directo de la nevera</b>. Olla de hierro tapada, precalentada a 250 °C: 20 minutos tapada.',
        '<b>Destapas</b> y bajas a 230 °C otros 25 minutos, hasta corteza oscura.'
      ]},
      { t:'tip', tt:'Por qué la olla tapada', c:'La masa suelta su propia humedad y queda atrapada: es <b>vapor gratis</b>, sin trucos. Es la forma de conseguir corteza de panadería en un horno de casa.' },
      { t:'nota', tt:'La ventaja para vender', c:'El frío te <b>desacopla el amasado del horneado</b>. Amasas cuando puedes y horneas cuando te conviene, hasta tres días después. Para alguien que trabaja en otra cosa, esto es lo que hace posible el negocio.' },

      { t:'h', c:'Los cuatro productos de esta masa' },
      { t:'tabla', cols:['Producto','Peso','Qué cambia'], filas:[
        ['Hogaza','900 g','Boule grande, la del mostrador'],
        ['Bâtard de campo','450 g','Cilindro corto. Rinde el doble de unidades'],
        ['Pan de molde','800 g','En molde con tapa. Rebanada pareja para tostadas'],
        ['Pan de tabla','450 g','Bâtard rebanado grueso, para picadas y quesos']
      ]},
      { t:'nota', tt:'De dónde salen estos números', c:'La mezcla <b>70% blanca / 20% integral / 10% centeno</b> es la fórmula de referencia de <b>Ken Forkish</b> para pain de campagne, y la hidratación de este pan va de 75% a 82% según la mezcla. El frío de fermentación admite de 4 a 72 horas y se hornea aún fría. Verificado en <b>The Fresh Loaf</b> (pain de campagne de FWSY) y <b>Breadtopia</b>.' }
    ]
  },

  /* ════════ 5 ════════ */
  { tipo:'largo', titulo:'Cuáles se cobran más caro',
    lede:'Ahí está el negocio, y no es donde uno cree.',
    bloques:[
      { t:'p', c:'Todos los panes de arriba salen de la misma bolsa de harina. <b>Lo que cambia el dinero no es el costo: es la forma en que se cobra.</b>' },

      { t:'tabla', cols:['Cómo se cobra','Cuáles','Por qué'], filas:[
        ['<b>Por peso</b>','Pizza al taglio','El cliente pide "así de grande" y se pesa. Nunca discute el precio porque él eligió el tamaño'],
        ['<b>Como sándwich</b>','Panini, focaccia rellena, ciabattina','El relleno cuesta centavos y multiplica el precio del pan por tres'],
        ['<b>Por porción</b>','Focaccia, pizza in teglia, sfincione','Una bandeja se corta en 12. Doce precios de una sola horneada'],
        ['<b>Por unidad</b>','Baguette, hogaza, bâtard','El más honesto y el que menos deja. Es tráfico, no margen']
      ]},

      { t:'nota', tt:'La cuenta que hay que hacer', c:'Una bandeja de focaccia lleva <b>1 kg de harina</b> y sale doce porciones. Un kilo de harina te sale lo que te sale donde vivas — pero <b>doce porciones nunca valen lo mismo que dos hogazas</b>, y son la misma harina y el mismo horno.' },

      { t:'h', c:'Cómo armar la semana con cuatro amasados' },
      { t:'lista', items:[
        '<b>La larga se arma el día anterior</b> y espera en la nevera. Es la que no compite por tu tiempo.',
        '<b>La magra pide vapor</b>: hornéala primero, cuando el horno está más caliente.',
        '<b>La mojada y la del aceite comparten bandeja</b> y temperatura. Van juntas.',
        '<b>La focaccia va última</b>: es la que perdona un horno que ya bajó.'
      ]},
      { t:'tip', tt:'Empieza por una', c:'No arranques con las cuatro. <b>Elige la focaccia</b>: no hay que formar nada, perdona el horno y es la que mejor se cobra. Cuando esa te salga sin pensar, sumas la mojada.' },
      { t:'ilustra', items:[['horno','Una horneada'],['tijeras','Doce cortes'],['pan','Doce precios']] }
    ]
  }

  ]
};
