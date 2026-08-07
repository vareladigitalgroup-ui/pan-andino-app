/* ══════════════════════════════════════════════════════════════
   LA DULCERÍA CRIOLLA — el tercer upsell

   Misma arquitectura que El Pan de tu Ciudad: no es una lista de
   recetas, son SEIS BASES de las que sale todo lo demás.

   Nada de lo que hay aquí se repite con lo que el comprador ya
   tiene. Se cruzó contra los 6 módulos, los 5 regalos, el catálogo
   de 17 panes y el OTO1 antes de escribir una línea. Quedaron
   afuera por repetidos: quesillo, marquesa, tres leches, golfeado,
   mil hojas, piñita, trenza azucarada.

   Técnica verificada:
     - puntos del almíbar con temperaturas (105 hilo · 120 bola
       blanda · 130 bola dura · 140 quebrado · 160-175 caramelo)
     - el bicarbonato en la lechosa verde actúa sobre la pectina de
       la pared celular: por eso queda cristalina y no se deshace
     - el bicarbonato en el arequipe sostiene el pH para que la
       reacción de Maillard siga corriendo
   ══════════════════════════════════════════════════════════════ */

window.DULCERIA = {
  id: 'dulceria',
  tapa: 'mockup-dulceria',
  kicker: 'Curso aparte',
  nombre: 'La Dulcería Criolla',
  sub: 'Seis bases, más de veinte dulces',
  promesa: 'El pan te cubre los costos. La vitrina dulce te paga a ti.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', titulo:'No son cuarenta recetas. Son seis bases.',
    lede:'Lo mismo que pasó con el pan, pasa con el dulce.',
    bloques:[
      { t:'foto', img:'dul-hero', pie:'Dulce de lechosa, torta negra y cocadas. Tres bases distintas en una sola mesa.' },
      { t:'p', c:'Cuando te enseñé el pan te dije que en una panadería no hay cincuenta recetas, hay cuatro masas. <b>Con la dulcería pasa igual, y casi nadie lo cuenta así.</b> Los recetarios publican los dulces sueltos, uno por uno, como si cada uno fuera un mundo aparte. No lo son.' },
      { t:'p', c:'Toda la dulcería criolla sale de <b>seis bases</b>. Si dominas las seis, no aprendiste veinte recetas: aprendiste a construir las que quieras, incluidas las que tu abuela hacía y nadie escribió.' },

      { t:'h', c:'Las seis y qué sale de cada una' },
      { t:'tabla', cols:['La base','Qué es','Qué sale de ella'], filas:[
        ['<b>El melado</b>','Papelón o azúcar cocidos con agua hasta un punto','Dulce de lechosa, conservas, naiboa, jalea de mango, melcocha, higos, buñuelos'],
        ['<b>La leche cocida</b>','Leche y azúcar reducidas hasta que doran','Arequipe, panelitas, higos rellenos, dulce de leche cortada, aliados'],
        ['<b>El coco</b>','Coco rallado o su leche, con azúcar','Cocadas, besitos, turrón, majarete, bienmesabe'],
        ['<b>La masa quebrada</b>','Harina con grasa, sin desarrollar gluten','Polvorosas, quesadilla criolla'],
        ['<b>El batido</b>','Grasa, azúcar, huevo y harina','Torta negra, de auyama, de jojoto, selva negra'],
        ['<b>El merengue</b>','Clara y azúcar, batidos','Suspiros, coberturas, el remate de todo lo anterior']
      ]},

      { t:'nota', tt:'Por qué esto es lo que más plata te deja', c:'Un pan de queso se vende en dos dólares y te deja centavos. Una torta negra se vende entera, por encargo, y te deja más que un día completo de mostrador. <b>El pan te cubre los costos fijos. El dulce es la ganancia.</b> Toda panadería que sobrevive lo sabe: la vitrina dulce es la que paga.' },

      { t:'h', c:'Lo único que tienes que comprar antes de empezar' },
      { t:'lista', items:[
        ['Un termómetro de cocina','El de sonda, el más barato sirve. Es lo que separa el dulce que sale igual todas las veces del que sale distinto cada vez. Cuesta menos que dos tandas perdidas.'],
        ['Una olla de fondo grueso','El melado y el arequipe se queman por el fondo. Una olla fina te arruina la tanda en el último minuto, que es cuando más azúcar hay y menos agua queda.'],
        ['Una paleta de madera larga','Vas a revolver treinta o cuarenta minutos seguidos. Con una cuchara corta te quemas la mano con el vapor.']
      ]},

      { t:'tip', tt:'Si no tienes termómetro todavía', c:'Cada punto de esta guía trae <b>su prueba de agua fría</b>, que es como se hizo siempre: dejas caer una gota del almíbar en un vaso de agua fría y miras qué hace. No es folclore, funciona. Pero el termómetro te lo hace en dos segundos y sin dudar.' }
    ]},

  /* ════════ 1 · EL MELADO ════════ */
  { tipo:'largo', titulo:'Base 1 · El melado y sus puntos',
    lede:'Azúcar y agua. Todo depende de cuándo lo sacas del fuego.',
    bloques:[
      { t:'foto', img:'dul-melado', pie:'El melado cayendo de la paleta. Ese hilo es el que te dice el punto.' },
      { t:'p', c:'Esta es la base madre de la dulcería criolla, y también la más malentendida. El melado no es una receta: es <b>azúcar y agua a distintas temperaturas</b>. La misma olla, el mismo contenido, sacada un minuto antes o un minuto después, te da dos dulces completamente distintos.' },
      { t:'p', c:'Por eso a tanta gente le sale el dulce aguado una vez y acaramelado la siguiente, con la misma receta. No es la receta. <b>Es que nadie le puso número al punto.</b>' },

      { t:'h', c:'La tabla que resuelve todo' },
      { t:'tabla', cols:['Punto','Temperatura','La prueba del agua fría','Para qué sirve'], filas:[
        ['<b>Hilo flojo</b>','103–105 °C','Entre dos dedos mojados se forma un hilito que se corta enseguida','Almíbar de conservas, calar bizcochos, jalea de mango'],
        ['<b>Hilo fuerte</b>','106–110 °C','El hilo aguanta sin cortarse','Dulce de lechosa, higos, dulces en almíbar'],
        ['<b>Bola blanda</b>','118–121 °C','La gota forma una bolita que se aplasta con el dedo','Merengue italiano, arequipe blando, melcocha'],
        ['<b>Bola dura</b>','127–132 °C','La bolita queda firme, no se aplasta','Turrón, panelitas de leche, dulces que se cortan'],
        ['<b>Quebrado</b>','138–143 °C','Se endurece de golpe y se pega a los dientes','Melcocha estirada, caramelos duros'],
        ['<b>Caramelo claro</b>','160–165 °C','Ya no hay agua: el azúcar se dora','Baño de quesillo, alfeñiques'],
        ['<b>Caramelo oscuro</b>','170–175 °C','Color caoba, huele a tostado','Color y amargor para salsas. Un grado más y es amargo de verdad']
      ]},

      { t:'nota', tt:'La regla de oro del melado', c:'Entre 118 °C y 175 °C hay <b>menos de un minuto de diferencia real</b> en una olla chica. Después de los 115 °C no te separes de la olla ni para atender el teléfono. El azúcar no avisa: pasa de perfecto a quemado sin etapa intermedia.' },

      { t:'h', c:'Papelón o azúcar: no es lo mismo' },
      { t:'p', c:'El papelón <b>no es azúcar morena</b>. Es jugo de caña evaporado entero, con sus melazas, sus minerales y su acidez. Aporta color, un dejo mineral y un aroma que el azúcar blanca no tiene ni imitándola.' },
      { t:'p', c:'Lo que tienes que saber para usarlo: el papelón <b>trae agua y trae impurezas</b>. Siempre se disuelve primero en agua caliente, se cuela con un paño o un colador fino, y recién ahí empieza a contar la temperatura. Si no lo cuelas, la basurita de la panela te queda en el dulce y la gente la ve.' },
      { t:'tip', tt:'La proporción de arranque', c:'Para melado de papelón: <b>1 parte de papelón por 1 de agua</b> en peso. De ahí evapora hasta el punto que necesites. Para almíbar de azúcar: <b>2 partes de azúcar por 1 de agua</b> si quieres llegar rápido a bola, o 1 a 1 si vas a punto de hilo.' },

      { t:'h', c:'Los tres enemigos del melado' },
      { t:'lista', items:[
        ['La cristalización','Un solo cristal de azúcar en la pared de la olla siembra toda la tanda y te queda arenosa. Se evita con <b>una cucharadita de jugo de limón o de glucosa</b> al empezar, y limpiando las paredes con un pincel mojado. Y no revuelvas una vez que hierve.'],
        ['El fondo quemado','Pasa siempre al final, cuando queda poca agua. Fondo grueso, fuego medio, y en los últimos minutos revolver en ocho tocando el fondo, no en círculos.'],
        ['El punto pasado','No tiene arreglo hacia atrás. Si te pasaste de bola dura y querías bola blanda, agrega dos cucharadas de agua caliente y vuelve a subir — sí funciona, pero pierdes color.']
      ]},

      { t:'h', c:'Los dulces que salen de esta base' },
      { t:'tabla', cols:['El dulce','El punto','Lo que lo hace distinto'], filas:[
        ['Dulce de lechosa','Hilo fuerte','La lechosa va verde y pasa por bicarbonato'],
        ['Conservas de frutas','Hilo fuerte','La fruta se confita por días, no por horas'],
        ['Jalea de mango verde','Hilo flojo, luego reduce','El mango verde trae su propia pectina'],
        ['Naiboa','Melado espeso','Se unta entre dos casabes'],
        ['Melcocha','Quebrado, luego se estira','El estirado mete aire: por eso pasa de marrón a rubio'],
        ['Higos en almíbar','Hilo fuerte','El higo se pincha para que el almíbar entre'],
        ['Buñuelos de yuca','Melado aparte','Se fríen y se bañan, nunca se cocinan dentro']
      ]}
    ]},

  /* ════════ 2 · DULCE DE LECHOSA ════════ */
  { tipo:'largo', titulo:'El dulce de lechosa, paso por paso',
    lede:'El de Navidad. Y el que más gente arruina.',
    bloques:[
      { t:'foto', img:'dul-lechosa', pie:'Así se ve cuando está bien: translúcida y firme, no opaca ni deshecha.' },
      { t:'p', c:'Va aparte porque es el dulce criollo más vendido de diciembre, el que más caro se cobra por frasco, y el que <b>más se echa a perder por dos errores que nadie explica</b>.' },

      { t:'h', c:'Error 1 · La lechosa tiene que ir VERDE' },
      { t:'p', c:'Verde de verdad, no "un poco verde". Cuando le hagas un corte en la piel <b>tiene que salir un líquido blanco, como leche</b>. Ese látex es la señal. Si no sale, la lechosa ya empezó a madurar y por más que hagas todo bien, el dulce te va a quedar hecho puré.' },
      { t:'p', c:'La lechosa madura tiene la pared celular blanda y las enzimas trabajando. En el almíbar caliente se deshace. La verde tiene la pectina firme y aguanta dos horas de cocción sin perder la forma.' },

      { t:'h', c:'Error 2 · El bicarbonato no es opcional' },
      { t:'p', c:'Este es el paso que casi todas las recetas de internet mencionan al pasar, y es <b>el que hace que quede cristalina</b>. El bicarbonato es alcalino y reacciona con la pectina de la pared celular de la fruta. Esa reacción endurece la parte de afuera de cada tajada.' },
      { t:'p', c:'El resultado es lo que uno reconoce del dulce de lechosa bueno: <b>firme y brillante por fuera, tierno por dentro, translúcido.</b> Sin bicarbonato queda opaco y blando, que es el dulce de lechosa que nadie repite.' },
      { t:'tabla', cols:['Método','Cómo','Cuánto tarda'], filas:[
        ['<b>Rápido</b>','Hervir las tajadas 5 minutos en agua con bicarbonato, escurrir y lavar bien con agua fría','5 minutos'],
        ['<b>De reposo</b>','Extender las tajadas en una bandeja, espolvorear bicarbonato y dejar hasta el día siguiente','Una noche'],
        ['<b>Al sol</b>','Las tajadas al sol un día entero, para que se sequen y queden firmes','Un día']
      ]},
      { t:'tip', tt:'El lavado es obligatorio', c:'Después del bicarbonato hay que <b>lavar muy bien con agua fría</b>, dos o tres aguas. Si queda bicarbonato, el dulce sabe a jabón y no hay forma de arreglarlo después.' },

      { t:'h', c:'La cocción' },
      { t:'pasos', items:[
        'Pela la lechosa verde, sácale las semillas y córtala en tiras largas y parejas. El grosor manda el tiempo: si unas son gordas y otras finas, unas se deshacen mientras las otras siguen crudas.',
        'Pásala por bicarbonato con cualquiera de los tres métodos. Lava bien.',
        'En la olla: la lechosa, el papelón o azúcar, poca agua, y los clavos de olor. Sin apuro y a fuego medio bajo.',
        'Deja que suelte su propia agua y que el almíbar se vaya armando solo. Esto toma entre hora y media y dos horas.',
        'Está lista cuando el almíbar llega a <b>hilo fuerte</b> (106–110 °C) y las tiras se ven translúcidas y brillantes, no opacas.',
        'Deja enfriar EN el almíbar, dentro de la olla. Se termina de cristalizar mientras se enfría.'
      ]},
      { t:'ing', titulo:'Dulce de lechosa — una tanda de 6 frascos', items:[
        ['Lechosa verde, ya pelada','2 kg','el peso limpio, sin cáscara ni semillas'],
        ['Papelón rallado','1 kg','o azúcar, si la quieres más clara'],
        ['Agua','500 ml','solo para arrancar; después suelta la suya'],
        ['Bicarbonato de sodio','1 cda','para el remojo, se lava después'],
        ['Clavos de olor','8 a 10','enteros, se sacan al final'],
        ['Hojas de higo o limón','2','opcional, aroma tachirense']
      ]},
      { t:'nota', tt:'Por qué es el dulce que más se cobra', c:'Aguanta meses en frasco, se regala, y en diciembre <b>todo venezolano fuera de Venezuela lo busca y casi nadie lo hace</b>. Es de los pocos productos donde no compites por precio: compites por ser el único que lo tiene.' }
    ]},

  /* ════════ 3 · LA LECHE COCIDA ════════ */
  { tipo:'largo', titulo:'Base 2 · La leche cocida',
    lede:'Arequipe, panelitas, aliados y todo lo que viene de ahí.',
    bloques:[
      { t:'foto', img:'dul-arequipe', pie:'Punto repostero: cae en cinta y el surco tarda en cerrarse.' },
      { t:'p', c:'Leche y azúcar al fuego. Suena simple y es la base más técnica de las seis, porque lo que está pasando adentro de la olla <b>no es que se evapore el agua</b>: es una reacción química que se puede acelerar, frenar o arruinar.' },

      { t:'h', c:'Lo que realmente pasa en la olla' },
      { t:'p', c:'El color y el sabor del arequipe no vienen del azúcar quemada. Vienen de la <b>reacción de Maillard</b>: los azúcares de la leche reaccionando con sus proteínas. Esa reacción necesita calor y necesita que el medio no se ponga ácido.' },
      { t:'p', c:'Y ahí está el problema: <b>a medida que la leche se cocina se va acidificando</b>, y cuanto más ácida, más lento dora. Por eso una tanda puede estar dos horas al fuego y seguir pálida.' },
      { t:'tip', tt:'La media cucharadita que cambia todo', c:'Media cucharadita de <b>bicarbonato por litro de leche</b>, al principio. Sostiene el pH arriba, la reacción sigue corriendo y el arequipe toma color en la mitad del tiempo. Además evita que la leche se corte. Más de esa cantidad y sabe a jabón.' },

      { t:'h', c:'Los tres puntos del arequipe' },
      { t:'tabla', cols:['Punto','Temperatura','Textura','Para qué'], filas:[
        ['<b>Untable</b>','104–106 °C','Cae de la cuchara en cinta','Rellenar, untar, decorar'],
        ['<b>Repostero</b>','108–110 °C','Se sostiene, no corre','Relleno de tortas y de higos'],
        ['<b>De corte</b>','112–115 °C','Se enfría duro, se corta con cuchillo','Panelitas, dulces de cortar']
      ]},
      { t:'nota', tt:'La señal sin termómetro', c:'Pasa la paleta por el fondo de la olla. Cuando <b>el surco tarda en cerrarse</b> y se ve el fondo por un segundo, estás en punto repostero. Si el surco no se cierra, ya es de corte.' },

      { t:'h', c:'Los aliados: el malvavisco criollo' },
      { t:'foto', img:'dul-aliados', pie:'Partido se ve la capa de papelón adentro. Por fuera, espolvoreado.' },
      { t:'p', c:'También les dicen <b>templones</b>. Son el malvavisco venezolano, pero de papelón: por fuera blancos y espolvoreados, y al partirlos se ve adentro la capa de papelón, de color caramelo. Blandos, chiclosos, y se comen con café.' },
      { t:'p', c:'Se hacen <b>a mano, en los pueblos del Táchira</b>, y no están en ningún recetario grande. Llevan panela, agua, gelatina sin sabor para el punto, leche evaporada, vainilla y una pizca de sal.' },
      { t:'nota', tt:'Por qué el aliado vale la pena tenerlo', c:'Es un dulce que <b>solo saben hacer las familias que lo heredaron</b>. No se consigue hecho fuera de Venezuela y casi nadie sabe siquiera cómo se llama. El que lo ponga en su vitrina no compite con nadie: es el único.' },

      { t:'ing', titulo:'Arequipe — base para todo lo de esta sección', items:[
        ['Leche entera','2 L','entera de verdad; la descremada no dora igual'],
        ['Azúcar','500 g','25 % del peso de la leche'],
        ['Bicarbonato de sodio','1 cdta','media por litro, ni una pizca más'],
        ['Vainilla','10 ml','al final, fuera del fuego'],
        ['Sal','2 g','no se siente, pero se nota si falta']
      ]},
      { t:'ing', titulo:'Aliados tachirenses — una tanda', items:[
        ['Panela (papelón)','500 g','rallada y colada'],
        ['Agua','250 ml',''],
        ['Leche evaporada','400 ml','una lata'],
        ['Gelatina sin sabor','14 g','dos sobres, hidratada aparte'],
        ['Vainilla','10 ml',''],
        ['Sal','1 g','']
      ]},

      { t:'h', c:'Los dulces de esta base' },
      { t:'lista', items:[
        ['Panelitas de leche','Arequipe llevado a punto de corte, moldeado en cucharadas y coloreado. Son las bolitas de colores con el clavito de olor encima, las de las bandejas de cumpleaños.'],
        ['Higos con arequipe','Higos verdes en almíbar, abiertos y rellenos. Junta dos bases: melado para el higo, leche cocida para el relleno.'],
        ['Dulce de leche cortada','Se corta la leche a propósito con limón y se cocina el cuajo con papelón. Queda granuloso, y eso es lo que se busca.'],
        ['Aliados','El tachirense. Panela, leche y el punto justo para que quede chicloso y no duro.']
      ]}
    ]},

  /* ════════ 4 · EL COCO ════════ */
  { tipo:'largo', titulo:'Base 3 · El coco',
    lede:'Cinco dulces distintos de un mismo ingrediente.',
    bloques:[
      { t:'foto', img:'dul-coco', pie:'Besitos horneados y cocadas cocinadas. La diferencia está en el método.' },
      { t:'p', c:'El coco es la base más rentable de las seis: <b>rinde mucho, cuesta poco y se conserva bien</b>. Y es la que más confusión genera, porque no es lo mismo el coco rallado que la leche de coco, y muchas recetas los usan como si fueran intercambiables.' },
      { t:'tabla', cols:['Forma','Qué aporta','Dónde va'], filas:[
        ['<b>Rallado seco</b>','Textura y masticado','Cocadas, besitos, turrón'],
        ['<b>Rallado fresco</b>','Grasa, aroma y jugo','Todo lo anterior, mejor'],
        ['<b>Leche de coco</b>','Cremosidad, sin textura','Majarete, bienmesabe'],
        ['<b>Agua de coco</b>','Solo sabor','Para aflojar melados']
      ]},

      { t:'h', c:'Los cinco y en qué se diferencian' },
      { t:'lista', items:[
        ['Besitos de coco','Coco rallado, azúcar y huevo, en montoncitos al horno. Doran por fuera y quedan húmedos por dentro. Los más fáciles de los cinco y los que más rápido se venden.'],
        ['Cocadas','Coco con melado, cocinado en la olla hasta que agarra cuerpo. No van al horno. La diferencia con el besito es esa: uno se hornea, el otro se cocina.'],
        ['Turrón de coco','Coco con almíbar a punto de bola dura, extendido y cortado en barras. El punto es lo único que decide si queda mordible o si rompe un diente.'],
        ['Majarete','Es un flan de maíz y coco, no un dulce seco. Leche de coco, harina de maíz, papelón y canela. Se cuaja y se sirve frío con canela por encima.'],
        ['Bienmesabe','Bizcocho calado en crema de coco, de origen afrovenezolano. Es de los pocos dulces criollos que combina panadería y dulcería, y por eso te sirve el pan que ya sabes hacer.']
      ]},
      { t:'tip', tt:'El truco del coco seco de bolsa', c:'Si solo consigues coco rallado deshidratado, <b>hidrátalo antes</b>: media taza de leche caliente por cada taza de coco, veinte minutos. Sin ese paso te chupa la humedad del dulce y todo queda seco y arenoso.' }
    ]},

  /* ════════ 5 · MASA QUEBRADA ════════ */
  { tipo:'largo', titulo:'Base 4 · La masa quebrada',
    lede:'La única masa que NO se amasa.',
    bloques:[
      { t:'foto', img:'dul-polvorosas', pie:'La grieta de la superficie es la señal de que no se desarrolló gluten.' },
      { t:'p', c:'Todo lo que te enseñé del pan hay que darlo vuelta acá. En el pan buscas gluten: amasas, pliegas, desarrollas. <b>En la masa quebrada el gluten es el enemigo.</b> Si la trabajas de más, la polvorosa deja de deshacerse en la boca y queda como una galleta dura.' },
      { t:'p', c:'La grasa cubre la harina y le impide hidratarse. Por eso se llama quebrada: <b>se quiebra, no se estira.</b> Se mezcla lo mínimo, hasta que apenas se junta, y se para.' },
      { t:'h', c:'La proporción que no falla' },
      { t:'escala', titulo:'Polvorosas — por tanda', base:'unas 24 galletas', items:[
        ['Harina de trigo', 500, 'g'],
        ['Manteca vegetal', 250, 'g'],
        ['Azúcar', 200, 'g'],
        ['Canela molida', 5, 'g'],
        ['Sal', 3, 'g']
      ]},
      { t:'p', c:'La regla es <b>grasa a la mitad del peso de la harina</b>. Con menos no se deshace; con más no se sostiene y se desarma antes de llegar a la boca. La manteca vegetal da la textura clásica; con mantequilla queda más sabrosa pero menos arenosa.' },
      { t:'nota', tt:'Las dos señales de que te pasaste', c:'La masa se ve <b>lisa y elástica</b> (tiene que verse arenosa y desmoronada), o al hornear las galletas <b>se inflan y se doran parejo</b> en vez de quedar pálidas y agrietadas. Las dos dicen lo mismo: se desarrolló gluten.' },
      { t:'p', c:'De esta base también sale la <b>quesadilla criolla</b>: la misma lógica de poca manipulación, pero con queso blanco adentro y un toque de anís y nuez moscada. Ojo, no es la quesadilla andina que ya tienes en el catálogo: esa es de masa de pan.' }
    ]},

  /* ════════ 6 · EL BATIDO ════════ */
  { tipo:'largo', titulo:'Base 5 · El batido de torta',
    lede:'Cuatro tortas que se venden enteras y por encargo.',
    bloques:[
      { t:'foto', img:'dul-torta-negra', pie:'Torta negra: la miga oscura llena de fruta macerada en ron.' },
      { t:'p', c:'Acá está el ticket más alto de toda la dulcería. Una torta no se vende por unidad de dos dólares: <b>se vende entera, por encargo, y se cobra antes de hacerla</b>. Es el producto que mejor encaja con lo que ya sabes de vender por encargo en vez de por mostrador.' },

      { t:'h', c:'El método que sirve para las cuatro' },
      { t:'pasos', items:[
        'Cremar la grasa con el azúcar hasta que blanquee. Esto no es mezclar: es meter aire. Cinco minutos de batidora, y la mezcla tiene que cambiar de color.',
        'Los huevos de a uno, esperando que cada uno se integre antes del siguiente. Si los echas todos juntos la mezcla se corta.',
        'Los secos tamizados, alternando con el líquido, en tres tandas. Empezar y terminar con los secos.',
        'Mezclar lo mínimo desde que entra la harina. Otra vez: gluten no.',
        'Al horno a 175 °C. Está lista cuando el palillo sale con migas húmedas, NO limpio del todo — si sale seco, ya se pasó.'
      ]},

      { t:'h', c:'Las cuatro' },
      { t:'tabla', cols:['La torta','Qué la define','Cuándo se vende'], filas:[
        ['<b>Torta negra</b>','Frutas confitadas maceradas en ron, meses antes','Diciembre. Es LA torta de Navidad'],
        ['<b>De auyama</b>','Auyama cocida y hecha puré en la mezcla','Todo el año. Húmeda, aguanta días'],
        ['<b>De jojoto</b>','Maíz tierno licuado, no harina de maíz','Todo el año. Textura de flan y torta a la vez'],
        ['<b>Selva Negra</b>','Bizcocho de cacao, cerezas y crema','Cumpleaños. Es la torta de encargo por excelencia']
      ]},

      { t:'ing', titulo:'Torta negra — molde de 24 cm', items:[
        ['Frutas confitadas y pasas','500 g','maceradas en ron 2 a 6 meses'],
        ['Ron oscuro','250 ml','para la maceración, más un chorro al final'],
        ['Mantequilla','250 g','a temperatura ambiente, no derretida'],
        ['Papelón o azúcar morena','250 g',''],
        ['Huevos','5','de a uno, esperando cada uno'],
        ['Harina de trigo','300 g','tamizada'],
        ['Melado de papelón','100 ml','el que da el color oscuro'],
        ['Especias (canela, clavo, nuez moscada)','8 g','molidas juntas'],
        ['Polvo de hornear','8 g','']
      ]},
      { t:'nota', tt:'La torta negra se empieza en agosto', c:'No es exageración: las frutas se maceran en ron <b>de dos a seis meses</b>. La que se hace en diciembre para diciembre no sabe igual, y el que la come de verdad lo nota. Si vas a vender torta negra esta Navidad, el frasco de frutas se pone ahora.' },
      { t:'tip', tt:'Por qué la Selva Negra sí va en un curso criollo', c:'Porque es la torta que la gente pide para cumpleaños en toda Venezuela desde hace cincuenta años. Nació en Alemania, sí, pero <b>la torta de cumpleaños venezolana es esa</b>. Si vas a vender por encargo, es la que más te van a pedir.' }
    ]},

  /* ════════ 7 · EL MERENGUE ════════ */
  { tipo:'largo', titulo:'Base 6 · El merengue',
    lede:'Clara y azúcar. Tres formas distintas y no sirven para lo mismo.',
    bloques:[
      { t:'foto', img:'dul-suspiros', pie:'Suspiros secados a horno bajo: crocantes por fuera, huecos por dentro.' },
      { t:'p', c:'El merengue es la base que remata a todas las demás: cubre las tortas, rellena, y solo, secado al horno, es el <b>suspiro</b>.' },
      { t:'p', c:'El suspiro es exactamente eso: clara de huevo batida con azúcar y metida al horno a temperatura baja hasta que seca. No se hornea, <b>se deshidrata</b>. Por eso queda crocante por fuera y hueco por dentro, y por eso un horno muy caliente lo arruina: lo dora antes de secarlo.' },

      { t:'h', c:'Los tres merengues' },
      { t:'tabla', cols:['Cuál','Cómo se hace','Para qué sirve','Aguanta'], filas:[
        ['<b>Francés</b>','Clara batida y azúcar en lluvia, en frío','Suspiros, secados al horno','Poco: se llora si hay humedad'],
        ['<b>Italiano</b>','Almíbar a 118–121 °C hilado sobre la clara batiendo','Cubrir tortas, rellenos','Mucho: la clara queda cocida'],
        ['<b>Suizo</b>','Clara y azúcar calentadas a 60 °C y luego batidas','Cubiertas firmes, decoración','Bastante']
      ]},
      { t:'escala', titulo:'Suspiros — la proporción base', base:'unos 30 suspiros', items:[
        ['Claras de huevo', 4, 'u'],
        ['Azúcar', 200, 'g'],
        ['Vainilla', 5, 'ml'],
        ['Sal', 1, 'g']
      ]},
      { t:'p', c:'La regla del merengue francés es <b>50 gramos de azúcar por cada clara</b>. Menos y no sostiene; más y queda pesado y se agrieta.' },
      { t:'nota', tt:'Los tres asesinos del merengue', c:'<b>Una gota de yema</b> (la grasa impide que monte), <b>un bol con grasa</b> (lávalo con limón antes) y <b>la humedad del ambiente</b>. En un día lluvioso el suspiro no seca bien y queda chicloso: es el único dulce de esta guía que depende del clima.' },
      { t:'tip', tt:'La temperatura del suspiro', c:'<b>90 a 100 °C durante hora y media a dos horas</b>, y después se apaga el horno y se dejan adentro hasta que se enfríe. Si tu horno no baja de 150, déjalo entreabierto con una cuchara de madera en la puerta.' }
    ]},

  /* ════════ 8 · NAVIDAD ════════ */
  { tipo:'largo', titulo:'El bloque de diciembre',
    lede:'Cuatro productos que se venden solos y se cobran por adelantado.',
    bloques:[
      { t:'foto', img:'dul-navidad', pie:'La mesa de diciembre completa. Un solo cliente de estos vale por diez de marzo.' },
      { t:'p', c:'Todo lo anterior se vende el año entero. Esto se vende <b>seis semanas al año y deja más que los otros diez meses juntos</b>, si lo preparas a tiempo.' },
      { t:'p', c:'La razón es simple: para un venezolano fuera de Venezuela, la Navidad <b>es</b> esta mesa. No es un antojo, es identidad. Y el que la resuelve no compite por precio.' },

      { t:'h', c:'Los cuatro, con su calendario real' },
      { t:'tabla', cols:['Producto','Cuándo se prepara','Cuándo se cobra','Por qué se paga caro'], filas:[
        ['<b>Torta negra</b>','Frutas en ron desde agosto','Encargos en noviembre','Nadie tiene el ron macerado seis meses'],
        ['<b>Dulce de lechosa</b>','Desde noviembre','Noviembre y diciembre','Nadie consigue lechosa verde ni sabe el paso del bicarbonato'],
        ['<b>Conservas</b>','Desde noviembre','Diciembre','Van con el pan de jamón, se venden en par'],
        ['<b>Pan de jamón</b>','Diciembre, fresco','Encargos desde noviembre','Es el producto más caro por unidad de toda la panadería criolla']
      ]},

      { t:'nota', tt:'La jugada completa', c:'El pan de jamón y las conservas <b>se venden juntos</b>: quien compra uno quiere el otro. Y quien encarga torta negra encarga las cuatro cosas. Un solo cliente de diciembre vale lo que diez de marzo — por eso los encargos se abren en noviembre y se cobran adelantados.' },
      { t:'tip', tt:'Lo que se cobra por adelantado no se pierde', c:'En diciembre se hornea contra encargos pagados, nunca contra lo que uno cree que va a vender. Es la misma regla que ya te di con el pan, pero en diciembre es la diferencia entre ganar el mes o comerte veinte panes de jamón en enero.' }
    ]},

  /* ════════ 9 · LA VITRINA ════════ */
  { tipo:'largo', titulo:'Cuáles dejan más y cómo armar la vitrina',
    lede:'Dónde está la ganancia de verdad.',
    bloques:[
      { t:'foto', img:'dul-vitrina', pie:'Lo que dura al frente, lo caro a la altura de los ojos.' },
      { t:'p', c:'No todos los dulces dejan lo mismo, y la diferencia es enorme. Esto es lo que ordena qué haces primero.' },

      { t:'h', c:'De mayor a menor margen' },
      { t:'tabla', cols:['Producto','Por qué deja','Cómo se vende'], filas:[
        ['<b>Torta entera por encargo</b>','Ticket alto, cobrada por adelantado, cero desperdicio','Encargo, nunca mostrador'],
        ['<b>Dulce de lechosa en frasco</b>','Insumo barato, dura meses, no hay competencia','Frasco, y en diciembre por docena'],
        ['<b>Turrón y panelitas</b>','Se cortan en muchas unidades de una tanda','Bandeja o por peso'],
        ['<b>Cocadas y besitos</b>','Rinden muchísimo, el coco es barato','Unidad, para llevar con el café'],
        ['<b>Polvorosas</b>','Insumo baratísimo, larga duración','Bolsa de 6 o 12'],
        ['<b>Majarete y bienmesabe</b>','Buen margen pero duran poco','Porción, para el día']
      ]},

      { t:'h', c:'Las tres reglas de la vitrina' },
      { t:'lista', items:[
        ['Lo que dura, al frente','Polvorosas, turrón y panelitas aguantan días. Son las que sostienen la vitrina los días flojos sin que pierdas nada.'],
        ['Lo que no dura, por encargo','Majarete, bienmesabe y las tortas de crema se hacen contra pedido. Si los pones en mostrador, un día lento te los comes.'],
        ['Lo caro, a la altura de los ojos','La torta entera y los frascos de dulce de lechosa son lo que sube el ticket. Si están abajo o al fondo, no existen.']
      ]},

      { t:'nota', tt:'El cálculo que casi nadie hace', c:'Una tanda de polvorosas usa medio kilo de harina y 250 gramos de manteca, y salen 24 galletas. Ponle el precio que pagas <b>tú</b> por esos insumos donde vives, divídelo entre 24, y compáralo con lo que cobra la panadería de tu barrio por una galleta. Ahí vas a ver por qué la vitrina dulce es la que paga.' },
      { t:'p', c:'La calculadora de costos que ya tienes en Herramientas te sirve igual para esto: cambia la harina por el coco o el papelón y el número sale solo.' }
    ]}

  ]
};
