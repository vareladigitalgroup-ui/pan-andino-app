/* REGALO 1 · Panes Salados de Venezuela
   Reescrito al formato largo: de 15 botones sueltos a 5 secciones
   agrupadas por masa, que es como se trabaja en una panadería real.
   Recetas con porcentaje de panadero verificado contra
   panesvenezolanos.com e historia contrastada.
   Español del comprador venezolano: se tutea. */

window.REGALO_1 = {
  id: 'g1',
  tapa: 'regalo-1-panes-salados',
  kicker: 'Regalo 1',
  nombre: 'Panes Salados de Venezuela',
  sub: 'Canilla · Francés · Campesino · Sándwich · Hamburguesa · Perro caliente',
  promesa: 'No son seis panes. Son dos masas.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', hero:'intro-dos-masas', titulo:'No son seis panes. Son dos masas.',
    lede:'Y esa diferencia es la que separa a alguien que sigue recetas de alguien que tiene una panadería.',
    bloques:[
      { t:'p', c:'En cualquier panadería de Venezuela, el que amasa no se levanta pensando en seis recetas distintas. <b>Prepara dos masas.</b> De la primera salen la canilla, el francés y el campesino. De la segunda salen el pan de sándwich, el de hamburguesa y el de perro caliente.' },
      { t:'p', c:'Es el mismo principio con el que trabajas el pan gocho: una masa bien entendida rinde más que diez recetas copiadas. Cambias el peso de la porción y la forma, y ya tienes otro producto en la vitrina, con otro precio.' },
      { t:'tip', tt:'Por qué esto te importa', c:'Si vas a vender, no puedes preparar seis masas distintas un domingo en la mañana. <b>Con dos amasadas cubres el mostrador completo:</b> el pan de la sopa, el del desayuno, el del sándwich y el de las hamburguesas de la tarde.' },

      { t:'h', c:'La panadería venezolana la hicieron los que llegaron' },
      { t:'p', c:'Entre los años cuarenta y sesenta llegaron a Venezuela miles de inmigrantes europeos. Muchos venían de la isla de Madeira, en Portugal, y traían un oficio en las manos. No inventaron un pan venezolano de la nada: agarraron recetas de toda Europa y <b>las tropicalizaron</b>.' },
      { t:'p', c:'De ahí sale casi todo lo que hoy damos por nuestro. El cachito, el pan de jamón, el sobado, el campesino y la canilla son hijos de esa mezcla. La mayoría de las panaderías de Venezuela fueron fundadas por portugueses y heredadas a sus hijos.' },
      { t:'p', c:'La canilla en particular viene de los panaderos franceses que se establecieron en Caracas. Es descendiente directa de la baguette, pero adaptada al gusto de acá: corteza menos dura, miga más suave, y un poco de azúcar y grasa que la baguette francesa no lleva. Se estandarizó en los ochenta como pan de horneado rápido, y por eso su proceso completo son dos o tres horas y no una jornada entera.' },
      { t:'nota', tt:'La vuelta que da la historia', c:'La panadería venezolana la levantaron migrantes que llegaron con un oficio y montaron negocio en un país ajeno. <b>Hoy el venezolano es el que se fue.</b> Y el oficio sigue sirviendo para lo mismo: llegar a un país donde no conoces a nadie y tener algo que la gente quiera comprar.' },

      { t:'h', c:'Tu harina no es la misma' },
      { t:'p', c:'Si te fuiste de Venezuela, esta es la parte que explica por qué la receta de tu mamá no te sale igual. La harina no se llama igual en todas partes, y lo peor: <b>la que se llama igual no siempre es igual</b>. El trigo americano y canadiense tiene más proteína que el europeo.' },
      { t:'p', c:'La proteína es la que forma el gluten, y el gluten es lo que aguanta el gas. Más proteína, más agua admite y más sube. Por eso la misma receta con la misma cantidad de agua te queda perfecta en Caracas y dura en Madrid.' },
      { t:'tabla', cols:['Dónde estás','Cómo pedirla','Proteína'], filas:[
        ['Venezuela','Harina panadera','10–11 g'],
        ['Estados Unidos','Bread flour','12,7 g'],
        ['Estados Unidos','All-purpose flour','11,7 g'],
        ['España','Harina panificable o panadera','10–11 g'],
        ['España','Harina de media fuerza','10,5–13 g'],
        ['España','Harina de fuerza','13–15 g']
      ]},
      { t:'nota', tt:'La regla que resuelve todo', c:'Mira la <b>tabla nutricional de la bolsa</b>: busca los gramos de proteína por cada 100 g. Ese número manda sobre el nombre que le hayan puesto. Entre 10 y 11 es panadera. De 12,5 para arriba es de fuerza.' },
      { t:'tip', tt:'Cuánta agua según lo que conseguiste', c:'Todas las recetas de aquí llevan el agua entre 50 y 60%. El rango no es capricho: es para que ajustes. <b>Todo uso:</b> 50 a 53%. <b>Panadera:</b> 54 a 57%. <b>De fuerza:</b> 58 a 60%.' },

      { t:'ilustra', items:[['harina','Mira la proteína'],['gota','Ajusta el agua'],['sal','Sal al borde'],['mantequilla','Grasa que ablanda']] },

      { t:'h', c:'Qué hace cada ingrediente' },
      { t:'p', c:'Cuando sabes para qué está cada cosa, dejas de seguir recetas y empiezas a corregirlas.' },
      { t:'lista', items:[
        ['Harina','Es el cuerpo. Su proteína forma el gluten: la red que atrapa el gas. Sin esa red el pan no sube, se desparrama.'],
        ['Agua','Despierta la levadura y forma el gluten. Más agua da miga abierta y corteza crujiente, pero masa difícil de manejar. Menos agua da miga cerrada y pareja, que es lo que quieres en el pan de sándwich.'],
        ['Levadura','Come azúcar y suelta gas. Es el único ingrediente que se ajusta al clima: trabaja más rápido con calor, así que en verano se pone menos.'],
        ['Sal','Da sabor, pero sobre todo frena a la levadura y aprieta el gluten. Sin sal el pan fermenta descontrolado y sale flojo. <b>Nunca la eches sobre la levadura: la mata al contacto.</b>'],
        ['Azúcar','Alimento rápido para la levadura y, sobre todo, color. Ese dorado venezolano viene del 5% de azúcar que la baguette francesa no lleva.'],
        ['Grasa','Ablanda la miga y hace que el pan dure más. En panadería se usa manteca vegetal; la mantequilla da mejor sabor.']
      ]}
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', titulo:'La masa magra: canilla, francés y campesino',
    lede:'Una sola tabla. De aquí salen los tres panes de corteza.',
    bloques:[
      { t:'ing', titulo:'La masa magra · por kilo de harina', items:[
        ['1.000 g','harina panadera','100%'],
        ['550 g','agua','55%'],
        ['10 g','levadura instantánea','1%'],
        ['20 g','sal','2%'],
        ['50 g','azúcar','5%'],
        ['50 g','manteca o mantequilla','5%'],
        ['1.680 g','de masa','168%']
      ]},
      { t:'pasos', items:[
        'Mezcla la harina con la levadura en seco. Aparte, disuelve el azúcar y la sal en el agua.',
        'Haz un volcán. Echa el agua en el centro y la grasa en pedacitos encima.',
        'Integra hasta formar una masa fea y despareja. <b>Así tiene que verse.</b> Amasa dos minutos y tapa diez.',
        'Haz de cuatro a siete plegados: estiras y doblas sobre sí misma. Descansa diez. Repite la tanda.',
        'Con una o dos tandas ya está. Llegó cuando estiras un pedacito y se hace película sin romperse.'
      ]},
      { t:'nota', tt:'La levadura se ajusta al clima', c:'Menos de 22 °C: 1%. De 22 a 28 °C: 0,66%. Más de 28 °C: 0,33%. <b>En Miami en agosto usas un tercio de la levadura que usarías en Madrid en enero.</b>' },
      { t:'tip', tt:'El paso que casi nadie da', c:'Cuando la masa esté lista, tápala y métela a la nevera de <b>6 a 18 horas</b> antes de formar. No cambia el procedimiento y cambia todo el sabor. Es la diferencia entre pan de casa y pan de panadería.' },

      { t:'rec', n:'Pan 1', c:'Pan canilla', lede:'No hay panadería en Venezuela que no lo venda. Es el pan de la sopa, del queso guayanés y del jamón.' },
      { t:'foto', img:'pan-pan-canilla', pie:'De 45 a 50 cm. Los cortes montados como tejas, nunca atravesados.' },
      { t:'p', c:'Se llama así por las canillas: las piernas largas y flacas. Es descendiente directa de la baguette francesa, pero no es una baguette. <b>Lleva azúcar y grasa</b>, y por eso tiene la corteza más suave y la miga más blanda.' },
      { t:'p', c:'Al venezolano que se fue le pasa lo mismo con la baguette del supermercado: se parece, pero no sabe igual. La diferencia son esos dos ingredientes que en Francia serían una herejía y aquí son la norma.' },
      { t:'ing', titulo:'Para 4 canillas', items:[
        ['600 g','harina panadera','100%'],
        ['330 g','agua','55%'],
        ['6 g','levadura instantánea','1%'],
        ['12 g','sal','2%'],
        ['30 g','azúcar','5%'],
        ['30 g','manteca','5%'],
        ['4 × 250 g','de pan','']
      ]},
      { t:'pasos', items:[
        'Divide en 4 de 250 g. Bolea flojo y deja reposar 10 minutos tapado.',
        'Aplasta con el rodillo hasta un rectángulo y enrolla apretado. Queda de 45 a 50 cm.',
        'Acomoda con el cierre hacia abajo en bandeja engrasada. Tapa y deja 60 a 90 minutos, hasta que doble.',
        'Precalienta a <b>220 °C</b>. Rocía agua con atomizador y haz los cortes.',
        'Mete a <b>200 °C</b> con 3 hielos en una bandeja abajo. Cinco minutos con vapor.',
        'Abre para soltar el vapor, baja a <b>180 °C</b> y termina. Veinte minutos en total.',
        'Lista a <b>93 °C</b> por dentro. Enfría una hora en rejilla antes de cortar.'
      ]},
      { t:'nota', tt:'Los cortes', c:'Van a lo largo y montados uno sobre otro un tercio, como tejas. <b>Nunca atravesados.</b> Un corte transversal abre el pan al horno y queda deforme.' },
      { t:'tip', tt:'Para que suene al partirla', c:'A mitad del horneado vuelve a rociar agua sobre los panes. Es lo que hace la corteza que cruje.' },

      { t:'rec', n:'Pan 2', c:'Pan francés', lede:'De francés no tiene nada. Es la misma masa de la canilla, pero chiquito.' },
      { t:'foto', img:'02-pan-frances', pie:'Quince centímetros, con las puntas afinadas y un corte al medio.' },
      { t:'p', c:'Se le dice también <b>pan de a locha</b>, y ahí está el origen del nombre: la locha era la moneda de 12,5 céntimos con la que se compraba. Un pan, una locha. El nombre se quedó mucho después de que la moneda desapareciera.' },
      { t:'p', c:'Es un formato que existe en toda Latinoamérica con otro nombre — el bolillo mexicano es el mismo pan. En Venezuela es el del desayuno con mantequilla y el de la merienda con queso.' },
      { t:'ing', titulo:'Para 6 panes', items:[
        ['405 g','harina todo uso','100%'],
        ['203 g','agua','50%'],
        ['4 g','levadura instantánea','1%'],
        ['8 g','sal','2%'],
        ['20 g','azúcar','5%'],
        ['20 g','manteca','5%'],
        ['6 × 110 g','de pan','']
      ]},
      { t:'pasos', items:[
        'Divide en 6. Bolea, tapa y deja 10 minutos.',
        'Estira y enrolla apretado hasta unos <b>15 cm</b>, con las puntas afinadas.',
        'Deja levar cerca de una hora, hasta que doble.',
        'Un solo corte a lo largo, en el centro.',
        'Horno a <b>200 °C</b> con vapor, 5 minutos.',
        'Baja a <b>180 °C</b> y hornea 20 minutos más.',
        'Listo entre <b>92 y 95 °C</b>, con la corteza dorada.'
      ]},
      { t:'nota', tt:'El piquito', c:'Si en vez del corte al medio lo pellizcas a lo largo antes de hornear, sale el <b>pan de piquito</b>. Mismo pan, otro nombre y otra cara en la vitrina.' },
      { t:'tip', tt:'Por qué te conviene tenerlo', c:'Es el mismo trabajo que la canilla y se vende por unidad. De la misma amasada sacas canillas grandes para las casas y franceses chiquitos para el que compra de a uno. <b>Dos precios, una masa.</b>' },

      { t:'rec', n:'Pan 3', c:'Pan campesino', lede:'La hogaza. Dura varios días, y es la que te compran para la casa y no para el momento.' },
      { t:'foto', img:'07-campesino-espiga', pie:'Corteza gruesa y dorada. No confundirlo con el sobado.' },
      { t:'p', c:'Es la versión venezolana del pan rústico europeo: mismo formato de barra grande o bola, pero con la corteza más fina y blanda, y una miga apenas dulce. Muchas panaderías lo hacen con la misma masa de la canilla, nada más que en formato grande.' },
      { t:'p', c:'Se come con embutidos, con quesos y con sopa. Y tiene un uso que los otros no tienen: <b>se le saca la miga y se usa de recipiente</b> para servir crema o fondue. Ese detalle lo convierte en producto de mesa, no solo de desayuno.' },
      { t:'ing', titulo:'Una hogaza', items:[
        ['282 g','harina panadera','100%'],
        ['155 g','agua','55%'],
        ['3 g','levadura instantánea','1%'],
        ['6 g','sal','2%'],
        ['14 g','azúcar','5%'],
        ['14 g','mantequilla','5%'],
        ['474 g','de masa','168%']
      ]},
      { t:'pasos', items:[
        'Bolea con tensión: que la superficie quede tirante. Tapa y deja de 2 a 3 horas hasta que doble.',
        'Precalienta a <b>240 °C</b> con una bandeja de agua abajo.',
        'Tres cortes paralelos, cada uno montado un tercio sobre el anterior.',
        'Entra a <b>220 °C</b> con 3 hielos. Diez minutos con vapor.',
        'Abre, suelta el vapor, baja a <b>180 °C</b> y hornea 20 a 25 minutos más.',
        'Listo entre <b>93 y 95 °C</b>. Enfría una hora completa en rejilla.'
      ]},
      { t:'nota', tt:'No lo confundas con el sobado', c:'Se parecen y no son lo mismo. El sobado lleva mucha más grasa y tiene corteza lisa y blandita. El campesino tiene corteza gruesa y dorada. <b>Son dos panes distintos, dos procesos y dos precios.</b>' },
      { t:'tip', tt:'Cámbiale el carácter', c:'Sustituye la mitad del agua por cerveza. Es el mismo pan con otro sabor y no cuesta un centavo más.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', titulo:'La masa sobada: sándwich, hamburguesa y perro',
    lede:'Menos agua, más huevo y más grasa. Se llama sobada porque se pasa por el rodillo diez veces o más.',
    bloques:[
      { t:'ing', titulo:'La masa sobada · por kilo de harina', items:[
        ['1.000 g','harina panadera','100%'],
        ['300 g','agua tibia','30%'],
        ['200 g','huevo batido','20%'],
        ['100 g','mantequilla o aceite','10%'],
        ['50 g','azúcar','5%'],
        ['50 g','leche en polvo','5%'],
        ['20 g','sal','2%'],
        ['10 g','levadura instantánea','1%'],
        ['1.730 g','de masa','173%']
      ]},
      { t:'pasos', items:[
        'Mezcla en seco la harina, la levadura y la leche en polvo.',
        'Aparte junta agua tibia, huevo y azúcar. La sal va al borde del volcán, <b>nunca sobre la levadura</b>.',
        'Integra y agrega la grasa de a poco. Amasa 8 a 10 minutos. Tapa 10 minutos.',
        'El sobado: estiras con el rodillo, doblas los bordes al centro, vuelves a estirar. <b>Diez veces mínimo.</b>',
        'Si la masa se pone tensa y se resiste, para. Diez minutos de descanso y sigues. Forzarla la rompe.',
        'Está lista cuando la superficie queda lisa como seda.'
      ]},
      { t:'nota', tt:'Aquí no se apura la fermentación', c:'Al revés que en la masa magra: en esta conviene <b>retrasarla</b> lo más posible. Si fermenta rápido salen burbujas en la superficie y el pan queda con la cara picada.' },

      { t:'seq', titulo:'El sobado, paso a paso', items:[
        ['paso-pan-sobado-1','Los secos y los líquidos, antes de integrar'],
        ['paso-pan-sobado-2','La masa recién juntada, todavía despareja'],
        ['paso-pan-sobado-3','Estirada con el rodillo, primera pasada'],
        ['paso-pan-sobado-4','Doblada sobre sí misma para volver a estirar'],
        ['paso-pan-sobado-5','Después de diez pasadas: la superficie lisa como seda'],
        ['paso-pan-sobado-6','Porcionada y lista para formar']
      ]},

      { t:'ilustra', items:[['huevo','20% de huevo'],['leche','Leche en polvo'],['mantequilla','10% de grasa'],['reloj','Fermentación lenta']] },

      { t:'rec', n:'Pan 4', c:'Pan de sándwich', lede:'El de molde. Se vende rebanado y en bolsa; es el que más se repite en la semana.' },
      { t:'foto', img:'01-sobado-rebanado', pie:'Miga cerrada y elástica: la que aguanta el relleno sin romperse.' },
      { t:'p', c:'Solo lleva 25% de agua: la humedad la aportan el huevo y la grasa. Por eso la miga sale cerrada y elástica, la que aguanta el relleno sin romperse.' },
      { t:'ing', titulo:'Un molde de 900 g', items:[
        ['549 g','harina panadera','100%'],
        ['137 g','agua','25%'],
        ['110 g','huevo batido','20%'],
        ['49 g','aceite de maíz','9%'],
        ['38 g','azúcar','7%'],
        ['11 g','sal','2%'],
        ['6 g','levadura instantánea','1%']
      ]},
      { t:'pasos', items:[
        'Arma un rectángulo del ancho del molde y unos 25 cm de largo.',
        'Enrolla apretado y sella bien las dos puntas.',
        'Cierre hacia abajo, en el molde engrasado. <b>Llénalo hasta dos tercios, nunca más.</b>',
        'Deja levar <b>2 horas entre 24 y 27 °C</b>.',
        'Horno a <b>180 °C</b>, 30 minutos.',
        'Enfría <b>30 minutos mínimo</b> antes de rebanar. Caliente se apelmaza.'
      ]},
      { t:'nota', tt:'Miga cerrada o aireada', c:'Como está, la miga sale cerrada. Si la quieres tipo brioche, sube la levadura a 2% y agrega 2% de leche en polvo.' },
      { t:'tip', tt:'El molde', c:'Tipo pullman, de 21,6 cm de largo por 12 de ancho y 11 de alto. Si el tuyo es más chico, ajusta la masa: <b>llénalo hasta dos tercios, nunca más</b>.' },

      { t:'rec', n:'Pan 5', c:'Pan de hamburguesa', lede:'El que más margen deja de todo el recetario. Te cuesta centavos y se vende por unidad.' },
      { t:'foto', img:'05-sobado-dos-piezas', pie:'Dos boleados: es lo que da la cara redonda y pareja.' },
      { t:'p', c:'Y tiene una ventaja que los demás no tienen: <b>se vende por docena a otros negocios.</b> El que monta un carrito de hamburguesas necesita pan todas las semanas, y prefiere comprárselo a alguien que se lo hornee fresco.' },
      { t:'ing', titulo:'Para 8 de 100 g', items:[
        ['462 g','harina panadera','100%'],
        ['139 g','agua','30%'],
        ['93 g','huevo batido','20%'],
        ['46 g','mantequilla','10%'],
        ['23 g','azúcar','5%'],
        ['23 g','leche en polvo','5%'],
        ['9 g','sal','2%'],
        ['5 g','levadura instantánea','1%']
      ]},
      { t:'pasos', items:[
        'Porciones de 100 g. Bolea, deja 10 minutos y <b>bolea otra vez</b>. Dos boleados dan la cara redonda y pareja.',
        'Aceita la superficie y acomódalos separados <b>5 cm</b>.',
        'Levar 2 a 3 horas entre 22 y 27 °C, tapados.',
        'Barniza con huevo batido con pizca de sal y azúcar, <b>pasado por colador</b>. Sin colar quedan grumos que se queman.',
        'Ajonjolí encima, si quieres.',
        'Horno a <b>180 °C</b>, unos 25 minutos.'
      ]},
      { t:'tip', tt:'El detalle que te hace repetir cliente', c:'Dile al que te lo compra que <b>tueste la cara interna antes de armar</b>. Sella el pan y no se empapa con el jugo de la carne. Ese consejo vale más que un descuento.' },

      { t:'rec', n:'Pan 6', c:'Pan de perro caliente', lede:'La misma masa del de hamburguesa. Solo cambia la forma, y con eso ya tienes otro producto.' },
      { t:'foto', img:'06-pan-azucarado-alargado', pie:'De 14 a 15 cm, parejo de punta a punta.' },
      { t:'p', c:'Usa la fórmula del pan de hamburguesa sin cambiarle nada. Lo único distinto es el formado y que se hornea unos minutos menos, porque es más fino.' },
      { t:'pasos', items:[
        'Porciones de 100 g. Bolea y deja reposar 10 minutos.',
        'Aplasta, enrolla apretado y estira hasta <b>14 o 15 cm</b>, parejo de punta a punta.',
        'Separados 4 cm si los quieres con corteza por todos lados. Pegados si los quieres blanditos por los costados.',
        'Levar 2 a 3 horas hasta que dupliquen.',
        'Barniza con el huevo colado, igual que el de hamburguesa.',
        'Horno a <b>180 °C</b>, de 18 a 22 minutos.'
      ]},
      { t:'nota', tt:'Que no se abran al hornear', c:'El cierre va bien pellizcado y siempre hacia abajo. Un cierre flojo se abre con el calor y el pan queda torcido.' },
      { t:'tip', tt:'Dos productos, una amasada', c:'De una sola tanda saca la mitad redondos y la mitad alargados. Es el mismo trabajo, el mismo horno y la misma masa, y <b>son dos precios distintos en el mostrador</b>.' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', titulo:'Tu horno, y qué salió mal',
    lede:'Las recetas están en centígrados. Si tu horno está en Fahrenheit o solo tiene perilla, es aquí.',
    bloques:[
      { t:'tabla', cols:['Centígrados','Fahrenheit','Perilla','Para qué'], filas:[
        ['180 °C','355 °F','4','Sobados, molde, hamburguesa'],
        ['200 °C','390 °F','6','Francés, arranque de canilla'],
        ['220 °C','430 °F','7','Canilla, campesino con vapor'],
        ['240 °C','465 °F','9','Precalentado del campesino']
      ]},
      { t:'lista', items:[
        ['Cómo saber que ya está, sin termómetro','Golpea la base del pan con el nudillo. <b>Si suena hueco, está.</b> Si suena macizo, le faltan cinco minutos. Es el método de toda la vida y no falla.'],
        ['El vapor, en horno de casa','No tienes inyector de vapor y no lo necesitas. Pon una bandeja de metal en el piso del horno mientras precalienta. Cuando metas el pan, tírale <b>tres hielos</b> adentro y cierra rápido.']
      ]},
      { t:'nota', tt:'La trampa del horno de casa', c:'Casi todos calientan de menos: la perilla dice 200 y adentro hay 175. Un termómetro de horno cuesta poco y es la diferencia entre un pan pálido y uno dorado. <b>Mídelo una vez y ya sabes cuánto miente el tuyo para siempre.</b>' },

      { t:'ilustra', items:[['termometro','Mídelo una vez'],['gota','Tres hielos'],['pan','Que suene hueco']] },

      { t:'h', c:'Las ocho fallas y su causa real' },
      { t:'tabla', cols:['Lo que pasó','Por qué','Qué hacer'], filas:[
        ['No subió','Levadura muerta o sal encima de ella','Sal al borde, nunca al centro'],
        ['Sabe a levadura','Demasiada, o fermentó muy rápido','Bájala según el calor'],
        ['Miga apretada','Poco amasado o poca agua','Prueba de la película'],
        ['Corteza blanda','Sin vapor, u horno frío','Tres hielos al entrar'],
        ['Pálido','El horno miente','Termómetro de horno'],
        ['Se abrió torcido','Cortes atravesados o cierre flojo','Cortes a lo largo, cierre abajo'],
        ['Cara picada','Fermentó muy rápido (sobados)','Menos levadura, más frío'],
        ['Se apelmazó','Lo cortaste caliente','Enfría una hora en rejilla']
      ]},
      { t:'tip', tt:'La prueba de la película', c:'Agarra un pedacito de masa y estíralo despacio entre los dedos. Si se hace una película fina que deja pasar la luz sin romperse, el gluten está listo. Si se rompe antes, le falta amasado. <b>Es la única prueba que necesitas y no cuesta nada.</b>' }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', hero:'pan-pan-espanol', titulo:'A cuánto lo vendes',
    lede:'Los seis panes no valen lo mismo ni cuestan lo mismo.',
    bloques:[
      { t:'p', c:'La regla de las panaderías es vieja y sigue sirviendo: el precio de venta es <b>tres veces el costo de los ingredientes</b>. Ese múltiplo no es avaricia — cubre la luz del horno, el gas, las bolsas, tu tiempo y lo que se pierde.' },
      { t:'p', c:'La masa magra es la más barata: harina, agua, sal y poco más. La sobada cuesta casi el doble por el huevo y la leche en polvo. <b>Pero la sobada se vende por unidad y la magra por pieza grande</b>, y eso cambia la cuenta.' },
      { t:'tabla', cols:['Pan','Costo','Cómo se vende'], filas:[
        ['Canilla','bajo','Por unidad grande'],
        ['Francés','bajo','Por unidad, de a varios'],
        ['Campesino','bajo','Pieza grande, precio alto'],
        ['Sándwich','medio','Molde entero o rebanado'],
        ['Hamburguesa','medio','Por docena, a negocios'],
        ['Perro caliente','medio','Por docena, a negocios']
      ]},
      { t:'nota', tt:'Dónde está el negocio de verdad', c:'No está en venderle un pan a un vecino: está en venderle <b>doce todas las semanas</b> a alguien que tiene un carrito o un puesto. Un cliente de esos vale veinte compradores sueltos, y solo hay que conseguirlo una vez.' },
      { t:'tip', tt:'Usa la calculadora', c:'En Herramientas está la calculadora de costo por pan. Le pones lo que pagaste por cada paquete <b>en tu ciudad y en tu moneda</b>, y te dice cuánto te sale cada unidad y a cuánto venderla. Los precios de una tabla genérica no sirven donde tú vives.' },

      { t:'sello', img:'pan', pie:'Dos masas, seis panes, un mostrador completo' }
    ]
  }

  ]
};
