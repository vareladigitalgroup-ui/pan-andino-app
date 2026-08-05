/* MÓDULO 1 · Masas y Fermentación
   Estructura: pocas secciones, largas. Cada una se lee de corrido.
   Funde el Módulo 4 (masas), el Módulo 1 (fundamentos), el Módulo 3
   (ingredientes) y el Bono 6, que se repetían entre sí. */

window.MODULO_1 = {
  id: 'm1',
  tapa: '1-MASAS-Y-FERMENTACION',
  kicker: 'Módulo 1',
  nombre: 'Masas y Fermentación',
  sub: 'Amasa con los gramos exactos y reconoce el punto sin adivinar',
  promesa: 'Una masa madre de la que salen todos los panes dulces.',

  secciones: [

  /* ════════ 1 ════════ */
  { tipo:'largo', hero:'intro-fermentacion', titulo:'Qué está pasando adentro de la masa',
    lede:'Antes de las recetas, esto. Porque el que entiende corrige, y el que no entiende repite a ciegas.',
    bloques:[
      { t:'p', c:'El pan no es magia, ni suerte, ni el agua del Táchira. Es el resultado de tres procesos que ocurren en orden, y si sabes cuál es cuál, sabes dónde se te rompió.' },
      { t:'lista', items:[
        ['La reacción biológica','La talvina produce CO₂ que hace subir la masa <b>desde adentro</b>.'],
        ['El desarrollo del gluten','El amasado crea la red de proteínas que atrapa ese gas y da estructura.'],
        ['La reacción química','El calor del horno transforma la estructura para siempre. Ahí ya no hay vuelta atrás.']
      ]},

      { t:'h', c:'El gluten, la red que hace todo posible' },
      { t:'p', c:'El gluten <b>no existe en la harina seca</b>. Se crea cuando la harina de trigo entra en contacto con el agua y se trabaja mecánicamente. Esa red tiene dos propiedades, y hacen falta las dos.' },
      { t:'lista', items:[
        ['Elasticidad','La masa se estira sin romperse, y eso permite que el gas quede atrapado adentro.'],
        ['Extensibilidad','La masa vuelve a su forma después de estirarse, y eso mantiene la estructura del pan.']
      ]},
      { t:'nota', tt:'Por eso amasar no es mezclar', c:'Sin una red de gluten bien desarrollada, <b>el gas que produce la talvina simplemente se escapa y el pan no sube</b>. Amasar no es juntar ingredientes: es construir la red que va a atrapar el gas.' },
      { t:'foto', img:'tec-ventana', pie:'La prueba de la ventana: si la masa se estira en una película que deja pasar la luz sin romperse, el gluten está listo.' },

      { t:'h', c:'No todo el gluten es igual' },
      { t:'p', c:'La proteína de la harina decide la fuerza del gluten, y con eso decide qué pan puedes hacer.' },
      { t:'tabla', cols:['Fuerza','Harina','Proteína','Resultado','Mejor para'], filas:[
        ['Débil','Harina floja','8–10%','Miga muy suave, se desgasifica rápido','Galletas, bizcochos'],
        ['Medio','Todo uso','10–12%','Equilibrio suavidad y estructura','Pan gocho tachirense'],
        ['Fuerte','De fuerza','12–14%','Muy resistente, miga más cerrada','Panes densos y rústicos']
      ]},
      { t:'nota', tt:'El punto dulce', c:'Para el pan gocho va siempre <b>harina todo uso 000 sin leudante</b>. Con harina de fuerza el pan andino te queda denso y con la miga cerrada, que es justo lo que no quieres.' },

      { t:'ilustra', items:[['harina','Harina 000'],['gota','Agua'],['talvina','Talvina'],['sal','Sal']] },

      { t:'h', c:'Los dos tipos de fermentación' },
      { t:'p', c:'En la fermentación, los microorganismos de la talvina consumen los azúcares de la harina y producen dos cosas: <b>dióxido de carbono</b>, que hace subir la masa, y <b>alcohol etílico</b>, que da el sabor del pan fermentado. Según la temperatura, domina uno u otro.' },
      { t:'tabla', cols:['Tipo','Temperatura','Qué produce','Sabor'], filas:[
        ['Alcohólica','25–30 °C','Más alcohol y CO₂','Más suave y dulce, sube rápido'],
        ['Acética / láctica','12–22 °C','Más ácidos orgánicos','Más complejo y profundo, sube lento']
      ]},
      { t:'tip', tt:'Lo que esto significa en la práctica', c:'Si quieres un pan más dulce y rápido, fermenta cálido. Si quieres <b>carácter</b>, fermenta frío y largo. La fermentación en frío no es un atajo de organización: es una decisión de sabor.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', titulo:'Los ingredientes, uno por uno',
    lede:'Los que fracasan en los primeros intentos casi siempre tienen el mismo problema: cambiaron un ingrediente sin entender su función.',
    bloques:[
      { t:'p', c:'Cada ingrediente cumple una función química y física específica. Un sustituto incorrecto <b>no cambia solo el sabor</b>: altera la fermentación, la textura del gluten, el dorado y el comportamiento de la masa desde el primer minuto.' },
      { t:'foto', img:'tec-ingredientes', pie:'Todo pesado y a temperatura ambiente antes de tocar nada. Eso es el mise en place, y es lo que separa al organizado del que improvisa.' },

      { t:'h', c:'La harina' },
      { t:'p', c:'La <b>harina todo uso 000 sin leudante</b> es tu primera opción siempre. Lo de "sin leudante" no es un detalle: la que lo trae ya lleva polvo de hornear y arruina la fermentación con talvina.' },
      { t:'tabla', cols:['Marca en Venezuela','Por qué','Cuándo'], filas:[
        ['Delizia','Harina 000 sin leudante, excelente proteína','Primera opción para pan gocho'],
        ['Polar','Disponible en todo el país','Cuando no consigues Delizia'],
        ['Selecta','Confiable donde escasean las otras','Producciones chicas y de prueba']
      ]},
      { t:'lista', items:[
        ['Señales de que está mala','Olor rancio o a humedad al abrir. Color amarillento o grisáceo en vez de blanco marfil. Grumos que no se deshacen al presionar. Insectos o telarañas. Sabor amargo al probar una pizca.'],
        ['Cómo se guarda','Recipiente hermético de plástico o vidrio, en lugar fresco, seco y sin luz directa. <b>Consumir antes de 3 meses</b> desde que se abre. Y nunca cerca de productos aromáticos: la harina absorbe olores.']
      ]},
      { t:'nota', tt:'Si estás afuera', c:'Mira los <b>gramos de proteína por 100 g</b> en la bolsa. Ese número manda sobre el nombre que le hayan puesto. La equivalencia completa por país está en la ñapa del OTO1.' },

      { t:'h', c:'Las grasas' },
      { t:'p', c:'La elección de la grasa no es arbitraria: define sabor, suavidad, color y costo.' },
      { t:'tabla', cols:['Grasa','Sabor','Suavidad','Color','Mejor para'], filas:[
        ['Mantequilla sin sal','Excelente','Alta','Dorado intenso','Panes premium, cachitos'],
        ['Margarina','Bueno','Media-alta','Dorado medio','Panes suaves económicos'],
        ['Manteca vegetal','Neutro','Muy alta','Pálido','Producción masiva'],
        ['Aceite vegetal','Neutro','Media','Muy pálido','Focaccias, panes rústicos']
      ]},
      { t:'tip', tt:'La mezcla que salva', c:'Cuando no hay mantequilla: <b>70% margarina + 30% manteca vegetal</b> da un resultado muy cercano al original en los panes suaves andinos. Es el truco de las panaderías.' },

      { t:'h', c:'La sal, el ingrediente que más se malusa' },
      { t:'p', c:'No solo da sabor: <b>controla la fermentación, fortalece el gluten, alarga la vida del pan e impacta el color de la corteza</b>. Es un ingrediente técnico, no un condimento.' },
      { t:'lista', items:[
        ['Tipo','Sal fina <b>sin yodo</b>. El yodo es antibacteriano y afecta a la levadura natural.'],
        ['Proporción','<b>10 g por kilo de harina.</b> Exactos.'],
        ['Si solo tienes gruesa','Tritúrala a polvo fino y <b>aumenta un 15%</b>: ocupa más volumen con menos peso efectivo.'],
        ['Poca sal','Masa blanda, sin estructura, sabor plano.'],
        ['Demasiada','Fermentación lenta, miga apretada, sabor salado.']
      ]},
      { t:'nota', tt:'La regla de oro, sin excepción', c:'<b>Nunca pongas la sal en contacto directo con la talvina.</b> La mata o la inhibe severamente. Va siempre sobre la harina antes de mezclar, o al final del amasado cuando la talvina ya está incorporada y activa.' },

      { t:'h', c:'El azúcar y el papelón' },
      { t:'p', c:'El azúcar hace mucho más que endulzar: <b>alimenta la fermentación</b>, aporta color por caramelización y retiene humedad en la miga.' },
      { t:'p', c:'El papelón venezolano contiene <b>melaza y minerales</b> que el azúcar refinada perdió. Eso es lo que le da carácter a la talvina, y por eso el azúcar morena del supermercado no lo reemplaza: esa es azúcar blanca teñida con melaza.' },
      { t:'lista', items:[
        ['Papelón duro en bloque','El más concentrado. Se ralla con el <b>lado fino</b>, sobre papel para no perder nada.'],
        ['Papelón granulado','Más fácil de usar, se disuelve bien en líquido tibio.'],
        ['Papelón líquido (melao)','Menos común. Si lo usas, ajusta la hidratación de la receta.']
      ]},
      { t:'nota', tt:'La proporción tachirense', c:'<b>30 a 50 g de papelón por litro de talvina.</b> El exceso, en recipiente hermético y lejos de la humedad, o se apelmaza.' },

      { t:'h', c:'Los huevos' },
      { t:'p', c:'Hacen cinco cosas a la vez: <b>estructura</b> (proteínas que coagulan al hornear), <b>color</b> (los carotenoides de la yema), <b>sabor</b>, <b>humedad</b> y <b>emulsión</b> (la lecitina une la grasa con el agua).' },
      { t:'lista', items:[
        ['La prueba de frescura, gratis','En un vaso con agua fría: <b>se hunde y queda horizontal</b>, muy fresco. <b>Se inclina</b>, consúmelo pronto. <b>Flota</b>, descártalo.'],
        ['Temperatura','Siempre a temperatura ambiente. Los fríos endurecen la grasa de la masa y retrasan la fermentación. Sácalos 30 a 40 minutos antes.'],
        ['Yema o huevo completo','<b>Yema sola:</b> más color, más sabor, miga más tierna. <b>Completo:</b> más estructura. Para el pan gocho va completo; para pintar, yema sola con poca leche.'],
        ['Proporción','1 o 2 por kilo de harina para pan suave. 3 o 4 para los muy enriquecidos.']
      ]},
      { t:'tip', tt:'Si no consigues huevos', c:'Por kilo de harina: <b>2 cucharadas de aceite</b>, o <b>2 de yogur natural</b>, o <b>3 de leche condensada</b> (solo dulces, ajustando el azúcar), o <b>1 de vinagre más 1 de aceite</b>. Ninguno es perfecto, pero sacan la tanda adelante.' },

      { t:'ilustra', items:[['mantequilla','Grasa'],['papelon','Papelón'],['huevo','Huevos'],['leche','Leche']] },

      { t:'h', c:'La leche y las especias' },
      { t:'p', c:'La leche aporta hidratación, sabor lácteo, <b>lactosa que favorece el dorado</b>, proteínas que fortalecen la miga y grasa que suaviza. Fresca a temperatura ambiente o tibia, <b>nunca por encima de 37 °C</b>. En polvo: 30 g por cada 200 ml de agua tibia, y el resultado horneado es casi el mismo.' },
      { t:'lista', items:[
        ['Canela','<b>Siempre en rama, nunca en polvo.</b> La de polvo amarga la talvina y le pone el pan gris. En rama da aroma suave y progresivo. 1 o 2 ramas por litro.'],
        ['Clavos de olor','Aromáticos y <b>antimicrobianos</b>: protegen la talvina de fermentaciones que no quieres. Con moderación.'],
        ['Anís estrellado','Para la acema, molido, integrado en la harina antes de amasar.'],
        ['Pimienta guayabita','La que redondea la acema. Afuera se llama <i>allspice</i> o pimienta de Jamaica.']
      ]},
      { t:'ilustra', items:[['canela','Canela en rama'],['anis','Anís estrellado'],['granos','Guayabita']] },

      { t:'nota', tt:'El error de la canela en polvo', c:'Es el más común y el más caro: te arruina el color y el sabor de una talvina que tardaste ocho días en hacer. <b>En rama. Siempre.</b>' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'pan-camaleon', titulo:'La receta base y cómo escalarla',
    lede:'Esta es la masa madre de la que derivan todos los panes dulces. Domínala antes de tocar cualquier variación.',
    bloques:[
      { t:'ing', titulo:'Para 8 a 10 panes', items:[
        ['1.000 g','harina de trigo todo uso','100%'],
        ['300 g','talvina activa, en su punto','30%'],
        ['200 g','azúcar blanca','20%'],
        ['150 g','mantequilla sin sal','15%'],
        ['150 g','huevo (3 medianos)','15%'],
        ['150 ml','leche entera tibia','15%'],
        ['100 ml','agua fría de nevera','10%'],
        ['10 g','sal fina sin yodo','1%']
      ]},
      { t:'nota', tt:'Por qué el agua va fría', c:'Los 100 ml entran <b>de la nevera</b>, no del grifo. Amasar calienta la masa por fricción, y si arrancas tibio terminas con una masa demasiado caliente que fermenta antes de tiempo. El agua fría compensa eso.' },

      { t:'ilustra', items:[['bascula','Pesar todo'],['termometro','35–38 °C'],['talvina','Que flote'],['reloj','Y esperar']] },

      { t:'h', c:'El mise en place' },
      { t:'seq', titulo:"Todo pesado antes de empezar", items:[["tec-ingredientes","<b>Cada cosa en su cuenco, pesada.</b> Eso es el mise en place, y es lo que separa al ordenado del que improvisa."],["tec-pesar","<b>La báscula manda.</b> En panadería no hay tazas: hay gramos."]] },
      { t:'pasos', items:[
        '<b>60 minutos antes:</b> saca la mantequilla y los huevos de la nevera. A temperatura ambiente o no se integran.',
        'Tibia la leche a <b>35–38 °C</b>. Más caliente activa el gluten disparejo; más fría no integra.',
        '<b>Prueba la talvina:</b> tiene que flotar en agua tibia. Si se hunde, no está activa y el pan no va a fermentar.',
        'Pesa <b>absolutamente todo</b> antes de tocar nada.',
        'Superficie limpia y apenas enharinada. Bowl grande, limpio y completamente seco.',
        'Mira la temperatura del ambiente: es la que decide cuánto tarda la fermentación.'
      ]},

      { t:'h', c:'Cómo escalar sin equivocarte' },
      { t:'p', c:'La harina siempre es 100% y todo lo demás se calcula contra ella. Si duplicas la harina, duplicas todo. No hay regla de tres.' },
      { t:'tabla', cols:['Ingrediente','2 kg','3 kg','5 kg'], filas:[
        ['Azúcar','400 g','600 g','1.000 g'],
        ['Mantequilla','300 g','450 g','750 g'],
        ['Huevos','6 uds','9 uds','15 uds'],
        ['Leche tibia','300 ml','450 ml','750 ml'],
        ['Talvina activa','600 g','900 g','1.500 g'],
        ['Agua fría','200 ml','300 ml','500 ml'],
        ['Sal','20 g','30 g','50 g']
      ]},
      { t:'tip', tt:'Lo que no escala lineal', c:'La talvina. En tandas grandes la masa retiene más calor y fermenta más rápido. Si saltas de 1 a 5 kilos, arranca con un poco menos y vigila el primer reposo.' },
      { t:'tip', tt:'Para más o menos dulce', c:'Más dulce: azúcar a 25% y baja un poco la leche. Menos dulce: azúcar a 15%, que queda ideal para panes semidulces o de mesa.' }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', titulo:'El amasado',
    lede:'No hay una técnica mejor. Hay una correcta para cada masa.',
    bloques:[
      { t:'foto', img:'tec-amasado', pie:'La base de la palma, no los dedos. Empujar con el peso del cuerpo, doblar, girar 90 grados y repetir.' },

      { t:'h', c:'1 · El amasado básico tachirense' },
      { t:'seq', titulo:"El movimiento, de cerca", items:[["tec-amasar-empujar","<b>Empujar.</b> Con el talón de la palma, no con los dedos."],["tec-amasar-doblar","<b>Doblar.</b> La punta de vuelta sobre sí misma."],["tec-amasar-girar","<b>Girar.</b> Un cuarto de vuelta, y otra vez."]] },
      { t:'p', c:'La técnica base y la que da los resultados más parejos para el pan gocho. Usas <b>la base de la palma, no los dedos</b>: empujas la masa hacia adelante con el peso del cuerpo, la doblas sobre sí misma, giras 90 grados y repites. Movimiento continuo, rítmico y firme, nunca agresivo. La presión tiene que trabajar la masa sin destrozar la red de gluten que se está formando.' },

      { t:'h', c:'2 · El amasado francés, o claquage' },
      { t:'p', c:'También le dicen <i>slap and fold</i>. Es para masas muy pegajosas o de alta hidratación. Agarras la masa con las dos manos por los extremos, la golpeas con firmeza contra la mesa, la doblas sobre sí misma hacia adelante, giras 90° y repites <b>de 10 a 15 minutos</b>.' },
      { t:'nota', tt:'Por qué esta técnica salva masas', c:'Desarrolla el gluten <b>sin agregar harina extra</b>. Agregar harina a una masa pegajosa es el error que la arruina: te desbalancea toda la receta. El claquage resuelve la pegajosidad sin tocar las proporciones.' },

      { t:'ilustra', items:[['pan','Palma, no dedos'],['reloj','10 min y descanso'],['gota','Sin harina extra']] },

      { t:'h', c:'3 · Los pliegues' },
      { t:'seq', titulo:"Cómo se ve la masa según los minutos", items:[["tec-masa-min5","<b>Minuto 5.</b> Rugosa y pegajosa. Es normal, no le eches harina."],["tec-masa-min10","<b>Minuto 10.</b> Entera, ya se despega sola."],["tec-masa-min20","<b>Minuto 20.</b> Lisa y con brillo. Ahí parás."]] },
      { t:'p', c:'No es amasado continuo: estiras y doblas la masa sobre sí misma, la dejas descansar diez minutos, y repites. <b>El gluten se desarrolla solo durante el descanso.</b> Es la técnica de menos esfuerzo y la mejor cuando la masa lleva mucha grasa.' },

      { t:'h', c:'4 · La amasadora' },
      { t:'p', c:'Velocidad baja para integrar, media para desarrollar. El riesgo es pasarse: una masa sobreamasada se pone pegajosa, brillante y no vuelve a agarrar forma. <b>Con máquina hay que mirar más, no menos.</b>' },

      { t:'nota', tt:'Los descansos no son perder tiempo', c:'De 1 a 2 minutos cada 10 de amasado. La masa descansa, el gluten se relaja, y el trabajo siguiente cuesta la mitad. El que amasa 20 minutos seguidos trabaja más y consigue menos.' },
      { t:'tip', tt:'La prueba de la ventana', c:'Estira un pedacito de masa despacio entre los dedos. Si se hace una película fina que deja pasar la luz sin romperse, el gluten está listo. Si se rompe antes, le falta. Es la única prueba que necesitas y no cuesta nada.' }
    ]
  },

  /* ════════ 5 ════════ */
  { tipo:'largo', titulo:'Los tres reposos',
    lede:'El primero le da carácter. El segundo decide el volumen. El tercero, el de la nevera, te cambia el negocio.',
    bloques:[
      { t:'h', c:'El primer reposo' },
      { t:'seq', titulo:"Qué es \"doblar el volumen\"", items:[["tec-ferm-antes","<b>Al empezar.</b> La masa llega a la mitad del bol."],["tec-ferm-doble","<b>Lista.</b> Llegó al doble y asoma por el borde."]] },
      { t:'p', c:'No es tiempo perdido: es donde el pan agarra su carácter. La talvina produce el <b>gas carbónico</b> que infla la masa, genera los <b>ácidos orgánicos</b> que dan el sabor del pan gocho, y <b>fortalece la red de gluten</b> que construiste amasando.' },
      { t:'ing', titulo:'Condiciones', items:[
        ['25–28 °C','temperatura del ambiente',''],
        ['1,5 – 2 h','duración estándar',''],
        ['×2','tiene que doblar el volumen',''],
        ['—','bowl limpio, seco y apenas aceitado',''],
        ['—','paño húmedo o film, sin tocar la masa','']
      ]},
      { t:'foto', img:'tec-reposo', pie:'El método de la marca: una cinta en el bowl al nivel inicial. Así mides el crecimiento de forma objetiva y no a ojo.' },
      { t:'tip', tt:'Si tu cocina está fría', c:'Enciende el horno un minuto, apágalo, y mete el bowl adentro con la puerta cerrada. Queda un ambiente tibio y sin corriente.' },

      { t:'h', c:'El segundo reposo' },
      { t:'p', c:'Es el último momento de control. Si acá está bien, el horno es predecible. Si está mal, <b>ya no hay corrección posible</b>.' },
      { t:'ing', titulo:'Condiciones', items:[
        ['45–60 min','a temperatura ambiente',''],
        ['4 cm','de separación mínima entre panes',''],
        ['—','paño húmedo que no toque la masa','']
      ]},
      { t:'h', c:'La prueba del dedo' },
      { t:'seq', titulo:"La prueba, de cerca", items:[["tec-dedo","<b>La marca tiene que volver despacio.</b> Rápido = le falta. No vuelve = se pasó."],["tec-separacion","<b>4 cm entre pieza y pieza</b>, para que crezcan sin tocarse."]] },
      { t:'pasos', items:[
        'Presiona suavemente la masa con un dedo y mira qué hace la marca.',
        '<b>Vuelve despacio</b> → lista para el horno. Ese es el punto.',
        '<b>Vuelve rápido</b> → le falta. Dale quince minutos más.',
        '<b>No vuelve</b> → se sobrefermentó. Al horno ya mismo: se puede salvar, pero no si sigues esperando.'
      ]},
      { t:'nota', tt:'Los 4 cm no son capricho', c:'Si los panes se tocan al crecer, se pegan y quedan con los costados blancos. En el pan de leche y las bolitas eso se busca a propósito; en los demás es un defecto.' },

      { t:'sello', img:'reloj', pie:'Y ahora, la que cambia el negocio' },

      { t:'h', c:'La fermentación en frío' },
      { t:'p', c:'Los panaderos que la dominan tienen ventaja de negocio: <b>preparan de noche y hornean de mañana</b>. El pan sale fresco a la hora que abre el mostrador y tú dormiste.' },
      { t:'p', c:'Y además cambia el producto: el <b>sabor se vuelve más complejo</b> porque la fermentación lenta genera más ácidos, y la <b>corteza sale más crujiente</b>.' },
      { t:'tabla', cols:['Paso','Qué haces','Cuánto'], filas:[
        ['1 · Formar','Das forma a los panes','—'],
        ['2 · Refrigerar','Tapados, a la nevera','8 a 16 h a 4–6 °C'],
        ['3 · Reposar','Los sacas y esperas','30 a 45 min'],
        ['4 · Hornear','Como siempre','—']
      ]},
      { t:'nota', tt:'Verifica tu nevera', c:'Tiene que estar entre <b>4 y 6 °C</b>, medido con termómetro, no con la perilla. Más frío detiene la fermentación del todo; más caliente se te pasa de noche y amaneces con los panes desbordados.' }
    ]
  },

  /* ════════ 6 ════════ */
  { tipo:'largo', hero:'paso-pan-sobado-3', titulo:'Qué salió mal',
    lede:'El pan no falla por la receta. Falla por el punto.',
    bloques:[
      { t:'tabla', cols:['Lo que ves','Por qué','Qué hacer'], filas:[
        ['No dobla en el primer reposo','Talvina que no flotaba','Prueba de flotación antes de amasar'],
        ['Muy pegajosa, no toma forma','Le falta amasado','Claquage 10 minutos'],
        ['Pegajosa y brillante','Se pasó de amasado','Ya no vuelve: hornéala igual'],
        ['Se desparrama al formar','Poco gluten o mucha agua','Prueba de la ventana'],
        ['Sabe plana, sin carácter','Fermentó muy rápido','Menos talvina o sitio más fresco'],
        ['Costados blancos','Los panes se tocaron','4 cm de separación'],
        ['Se desinfló en el horno','Sobrefermentó','Prueba del dedo antes de hornear'],
        ['Miga apretada','Poco amasado o poca agua','Prueba de la ventana'],
        ['Sabor a levadura','Demasiada, o fermentó rápido','Bájala según el calor del día']
      ]},
      { t:'ilustra', items:[['talvina','1 · Que flote'],['gota','2 · La ventana'],['pan','3 · El dedo']] },

      { t:'nota', tt:'Las tres pruebas que resuelven casi todo', c:'La <b>flotación de la talvina</b> antes de amasar. La <b>ventana del gluten</b> antes de formar. El <b>dedo</b> antes de hornear. Si haces esas tres, casi no hay forma de equivocarse — y ninguna cuesta un centavo.' }
    ]
  }

  ]
};
