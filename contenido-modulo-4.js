/* MÓDULO 4 · Panadería Artesanal — las 12 recetas
   UNA SECCIÓN POR PAN. Antes estaban agrupadas de a tres en cinco
   "familias" y el azucarado quedaba pegado al camaleón; Jonathan pidió
   que cada pan tuviera su propia pantalla. La idea de familia sigue
   viva como guía de aprendizaje, en la sección 0.
   Fuente: MÓDULO-6 del curso, cruzado con el 4 (fermentación),
   el 5 (horneado) y el 1 (conservación).
   ⚠ CORREGIDO: el PDF describía el criollito como bollito redondo
   boleado de 50–60 g. Es FALSO. La foto real de la panadería muestra
   HOJALDRE CORTADO EN CUADROS, con las capas a la vista. Confirmado
   por Jonathan. */

window.MODULO_4 = {
  id: "m4",
  tapa: "4-PANADERIA-ARTESANAL",
  kicker: "Módulo 4",
  nombre: "Panadería Artesanal",
  sub: "El repertorio completo del Táchira, pan por pan",
  promesa: "Dieciséis recetas. Con estas montas una panadería entera.",

  secciones: [

  /* ════════ 0 · Cómo leer estas recetas ════════ */
  { tipo:"largo", titulo:"Cómo leer estas recetas",
    lede:"Las dieciséis están escritas igual, y todas por kilo de harina para que escales multiplicando.",
    bloques:[
      {"t":"p","c":"Estas no son recetas sacadas de internet. Son las que se aprenden trabajando dentro de las panaderías de La Concordia, y la diferencia con una receta de blog es la profundidad: no solo <b>el qué</b>, también <b>el porqué</b> de cada ingrediente y cada número."},
      {"t":"lista","items":[["Todas parten de la misma masa base","La del Módulo 1. Lo que cambia son las proporciones, el formado y el acabado. Por eso conviene dominar esa antes que ninguna."],["Todo por kilo de harina","Multiplica directo para producción mayor. No hay que recalcular nada ni hacer regla de tres."],["Anota cada práctica","Temperatura del ambiente, tiempo de fermentación, temperatura del horno y resultado visual. En tres prácticas ya sabes cómo se comporta tu cocina."]]},
      {"t":"h","c":"Cada pan tiene su propia receta, completa y aparte"},
      {"t":"p","c":"Ninguna receta te manda a otra a buscar un dato. Cada pan trae <b>lo suyo entero</b>: los gramos, cuánto tarda, el proceso movimiento por movimiento, cómo saber que ya está y cuánto dura. Abrís la del pan que vas a hacer y no necesitás nada más."},
      {"t":"h","c":"Aun así, hay familias — y conviene saberlas"},
      {"t":"p","c":"Los panes que comparten masa y técnica van juntos, porque cuando dominas uno de la familia los otros salen casi solos. Así están repartidas las doce tachirenses del curso. Las otras cuatro — golfeado, quesadilla andina, pan de banquete y pan español — son <b>investigadas aparte</b>, porque el curso no las trae:"},
      {"t":"tabla","cols":["La familia","Qué trae","Qué se aprende"],"filas":[["La del camaleón","Camaleón, azucarado, trenzado","El formado alargado y los cortes"],["Las acemas","Acema tachirense, acema de bocadillo y queso","Las especias y el relleno enrollado"],["Queso y leche","Pan de queso, pan de leche","El bolleo y las masas enriquecidas"],["Los de vitrina","Pan de Dios, piñita, bocadillo enrollado","Las coberturas y los acabados que venden"],["Los hojaldrados","Criollito, mil hojas","El laminado. Van al final"]]},
      {"t":"ilustra","items":[["bascula","Por kilo de harina"],["pan","Dieciséis recetas aparte"],["reloj","De simple a complejo"]]},
      {"t":"h","c":"Cuál conviene aprender primero"},
      { t:'seq', titulo:"De lo simple a lo complejo", items:[["tec-bolleo-3","<b>Empezás acá:</b> una bola lisa y tensa. El bolleo es la base de todo."],["form-camaleon-4","<b>Después el formado alargado</b>, que es donde nace la tensión."],["tec-lamin-4","<b>Y al final el laminado</b>, que es el techo de la técnica."]] },
      {"t":"p","c":"El orden no es capricho: va construyendo habilidad. Cada pan te deja una técnica que el siguiente necesita."},
      {"t":"pasos","items":["<b>Pan de leche</b> — para dominar el bolleo, que es la base de todo formado.","<b>Camaleón</b> — el formado alargado y los cortes en diagonal.","<b>Pan de queso</b> — cómo se maneja una masa muy enriquecida sin que se ponga pesada.","<b>Azucarado</b> — la costra y el momento exacto de las coberturas.","<b>Acema</b> — las especias, y cómo cambian la fermentación además del sabor.","<b>Trenzado</b> — la técnica que impresiona al cliente.","<b>Mil hojas</b> y después el <b>criollito</b> — los dos laminados, al final. No son para principiantes y no tiene sentido apurarlos."]},
      {"t":"h","c":"Los tres rankings que importan para el negocio"},
      {"t":"tabla","cols":["Por rentabilidad","Por velocidad","Por popularidad"],"filas":[["Mil hojas · 70%","Pan de leche · 3 h","Camaleón"],["Trenzado · 67%","Camaleón · 3 h","Pan azucarado"],["Piñita · 66%","Azucarado · 3 h","Acema de bocadillo"],["Camaleón · 65%","Pan de leche · 3 h","Pan de queso"],["Azucarado · 63%","Camaleón · 3 h","Criollito"]]},
      {"t":"nota","tt":"Cómo se lee ese cuadro","c":"El más rentable no es el que más se vende, y el que más se vende no es el más rápido. <b>Un catálogo sano mezcla las tres columnas:</b> el criollito te da rotación diaria, el camaleón te da clientela, y el mil hojas te da margen. Vivir solo de uno es frágil."}
    ]
  },

  /* ════════ 1 · Pan camaleón ════════ */
  /* El proceso está escrito para alguien que nunca amasó: cada paso
     dice el movimiento exacto de las manos, no solo el nombre de la
     etapa. El desgasificado y el preformado estaban FALTANDO en la
     versión anterior — la fuente (Módulo 4) los llama "el paso que
     más omiten los principiantes". */
  { tipo:"largo", titulo:"Pan camaleón",
    lede:"El rey del Táchira. El formado alargado y los cortes que abren como escamas.",
    bloques:[

      { t:'rec', n:'Receta 1', c:'Pan camaleón', lede:'El más famoso del Táchira. El primero que piden los que llegan y el que más extrañan los que se van.' },
      { t:'foto', img:'pan-camaleon', pie:'La forma alargada y los cortes diagonales que abren como escamas. Esa es la firma.' },

      { t:'ficha', items:[
        ['Rinde','13 piezas de 150 g'],
        ['Trabajo activo','45 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h a 3 h 38'],
        ['Horno','175 °C · 20-23 min'],
        ['Dificultad','Media']
      ]},

      { t:'p', c:'El nombre viene de su capacidad de adaptarse: puede ser más dulce, más azucarado, con ajonjolí, pero siempre se reconoce por la forma alargada y los <b>cortes diagonales</b> que abren en el horno como escamas.' },
      { t:'p', c:'Nació en las panaderías de La Concordia y se volvió el referente del pan tachirense. Todo venezolano lo reconoce, y por eso es el pan con el que se abre una clientela. Su margen supera el <b>65%</b>: bajo costo de insumos, alto volumen y reconocimiento inmediato del cliente.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.080 g de masa · 13 piezas de 150 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g']
        ]},
      { t:'nota', tt:'Por qué todo va por kilo de harina', c:'Porque escalar es multiplicar y nada más. Los <b>2.080 g de masa</b> que salen de un kilo de harina se reparten como quieras: <b>26 piezas de 80 g</b> (el pequeño), <b>13 de 150 g</b> (el mediano, el que más se vende) o <b>9 de 220 g</b> (el grande). Los 150 g de huevo son <b>3 huevos enteros</b> por tanda, y conviene pesarlo: los huevos no vienen todos del mismo tamaño.' },
      { t:'tip', tt:'Por qué el agua va fría', c:'No es un capricho de la receta. <b>Amasar genera calor por fricción</b>, y el agua fría es lo que mantiene la masa en su rango bueno de 24 a 26 °C. Si la masa se calienta de más, fermenta antes de tiempo y el pan sale con la miga apretada.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'De ese total, solo <b>45 minutos</b> son de trabajo tuyo. Las 2 h 30 restantes son la masa trabajando sola: podés hacer otra cosa.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten. La masa debe terminar entre <b>24 y 26 °C</b>.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta <b>doblar el volumen</b>. Manda la masa, no el reloj.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Sacar el gas parejo y pesar las piezas de 150 g.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Las bolas descansan cubiertas para que el gluten se relaje. <b>Sin este reposo la masa se resiste al formado</b> y se encoge sola.' },
        { n:'Formar', min:10, max:10, d:'Aplanar, estirar, doblar, enrollar y sellar. Piezas de 22 a 25 cm.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separadas <b>4 cm como mínimo</b>, cubiertas con paño húmedo que no toque la masa.' },
        { n:'Pintar y cortar', min:5, max:5, d:'Huevo con leche, y los 4 o 5 cortes diagonales.' },
        { n:'Hornear', min:20, max:23, d:'A <b>175 °C</b> la pieza de 150 g. Precalentá el horno 30 min antes: ese tiempo no suma porque corre en paralelo al segundo reposo.' }
      ]},

      { t:'seq', titulo:'El camaleón de un vistazo', items:[
        ['paso-camaleon-1','<b>Amasar, 20 min.</b> Listo cuando estirás un trozo y se hace una lámina traslúcida sin romperse.'],
        ['paso-camaleon-2','<b>Primera fermentación, 60 a 90 min.</b> Tapada, hasta doblar el volumen.'],
        ['paso-camaleon-3','<b>Formar piezas de 22 a 25 cm</b>, de grosor parejo y con la costura hacia abajo.'],
        ['paso-camaleon-4','<b>Segunda fermentación, 45 min.</b> Separadas 4 cm. Crecen hasta el 60–80% de su tamaño final.'],
        ['paso-camaleon-5','<b>Pintar con huevo y cortar:</b> 4 o 5 diagonales a 45°, de 1 cm de profundidad.'],
        ['paso-camaleon-6','<b>Horno a 175 °C, 20 a 23 min.</b> Los cortes se abren solos como escamas.']
      ]},

      { t:'h', c:'El proceso, movimiento por movimiento' },
      { t:'p', c:'Lo de arriba es el mapa. Esto es el detalle: <b>si nunca amasaste, seguí esto al pie de la letra</b> y te va a salir. Cada paso dice qué hacen las manos, cuánto dura y en qué se nota que ya está.' },

      ...PROCESOS.armar({
        pieza: '150 g',
        formado: {
          titulo: 'Formar el camaleón — 10 minutos',
          p: 'Acá nace la forma. El objetivo de todo este movimiento es uno solo: <b>crear tensión en la superficie</b>. Esa tensión es la que hace que el pan crezca hacia arriba en el horno en vez de desparramarse.',
          pasos: [
            '<b>Aplaná</b> la bola con la palma hasta hacer un disco parejo. No presiones los bordes.',
            '<b>Estirá con los dedos</b> hasta formar un rectángulo de grosor uniforme. <b>Sin rodillo</b>: el rodillo aplasta el gas que querés conservar.',
            '<b>Doblá los bordes largos hacia el centro</b>, como si cerraras un tríptico. Eso arma la estructura de adentro.',
            '<b>Enrollá</b> de un extremo al otro, con presión suave pero continua. Acá es donde se genera la tensión.',
            '<b>Sellá la costura</b> pellizcando firme a lo largo, y dejá la costura <b>hacia abajo</b> en la bandeja.',
            'Largo final: <b>22 a 25 cm</b>, con el <b>grosor igual de punta a punta</b>. Si un extremo es más fino, ese extremo se quema mientras el centro todavía está crudo.'
          ],
          seqTitulo: 'El formado del camaleón, movimiento por movimiento',
          seq: [
            ['form-camaleon-1','<b>1 · Aplanar.</b> Con la palma, hasta un disco parejo. Sin tocar los bordes.'],
            ['form-camaleon-2','<b>2 · Estirar.</b> Con los dedos, hasta un rectángulo parejo. Sin rodillo.'],
            ['form-camaleon-3','<b>3 · Doblar.</b> Los bordes largos al centro, como un tríptico.'],
            ['form-camaleon-4','<b>4 · Enrollar.</b> De punta a punta, presión suave y continua. Acá nace la tensión.'],
            ['form-camaleon-5','<b>5 · Sellar.</b> Pellizcá la costura a lo largo, y va hacia abajo en la bandeja.']
          ]
        },
        acabado: {
          titulo: 'Pintar y cortar — 5 minutos',
          pasos: [
            'Batí <b>un huevo con una cucharada de leche</b>.',
            'Pintá con <b>brocha suave</b>, cubriendo toda la superficie. Ese pintado es el que da el brillo dorado.',
            'Hacé <b>4 o 5 cortes diagonales</b> a <b>45°</b>, de <b>1 cm exacto</b> de profundidad. Cuchilla o cuchillo bien filoso, de un movimiento decidido.'
          ],
          seqTitulo: 'Los cortes',
          seq: [
            ['acab-camaleon-1','<b>El ángulo.</b> La cuchilla entra inclinada a 45°, no derecha hacia abajo.'],
            ['acab-camaleon-2','<b>Así quedan.</b> Cuatro cortes paralelos, al mismo ángulo y a la misma distancia.']
          ],
          nota: ['El ángulo de los cortes es crítico','A 45° abren como escamas. <b>Demasiado recto no abre. Demasiado inclinado desgarra la masa.</b> Es el detalle que distingue un camaleón de panadería de uno de casa, y es gratis.']
        },
        horno: { temp:175, min:20, max:23 }
      }),

      { t:'ilustra', items:[['tijeras','Cortes a 45°'],['huevo','Pintado antes'],['horno','175 °C'],['bascula','150 g la pieza']] }
    ]
  },
  /* ════════ 2 · Pan azucarado ════════ */
  { tipo:"largo", titulo:"Pan azucarado",
    lede:"La misma masa del camaleón, con la costra de azúcar que lo vende por la vista.",
    bloques:[

      { t:'rec', n:'Receta 2', c:'Pan azucarado', lede:'Se vende por la vista antes que por el sabor. Es el camaleón en su versión más festiva.' },
      { t:'foto', img:'pan-pan-azucarado', pie:'La costra de azúcar cristalizado. El contraste con la miga blanda es todo el producto.' },

      { t:'ficha', items:[
        ['Rinde','13 piezas de 150 g'],
        ['Trabajo activo','45 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h a 3 h 38'],
        ['Horno','175 °C · 20-23 min'],
        ['Dificultad','Media']
      ]},

      { t:'p', c:'Esa costra brillante de azúcar caramelizado detiene a cualquiera frente al mostrador. El resultado correcto es el contraste: <b>corteza crocante de azúcar por fuera, miga suave y húmeda por dentro.</b>' },
      { t:'nota', tt:'Es el camaleón, con un solo cambio', c:'<b>La masa es idéntica</b> y el formado también. Lo único que cambia es el acabado: azúcar gruesa encima, en el momento exacto. Si ya hiciste el camaleón, este te sale hoy mismo. Margen: <b>63%</b>.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.080 g de masa · 13 piezas de 150 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Azúcar GRUESA, para la costra',120,'g']
        ]},
      { t:'nota', tt:'Cuál azúcar sirve y cuál no', c:'<b>Azúcar blanca gruesa o cristalizada.</b> Nunca azúcar glass ni morena para la costra principal: el tamaño del cristal es lo que da el crujido. <b>La fina se quema antes de que el pan esté listo.</b>' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'De ese total, solo <b>45 minutos</b> son de trabajo tuyo.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten, entre <b>24 y 26 °C</b>.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta <b>doblar el volumen</b>.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 150 g, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Las bolas descansan cubiertas.' },
        { n:'Formar', min:10, max:10, d:'Igual que el camaleón: 22 a 25 cm.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separadas 4 cm, cubiertas.' },
        { n:'Pintar y azucarar', min:5, max:5, d:'Huevo primero, <b>azúcar después</b>. En ese orden.' },
        { n:'Hornear', min:20, max:23, d:'A <b>175 °C</b> la pieza de 150 g.' }
      ]},

      ...PROCESOS.armar({
        pieza: '150 g',
        formado: {
          titulo: 'Formar — 10 minutos',
          p: 'Exactamente el mismo formado del camaleón. El objetivo es <b>crear tensión en la superficie</b>: eso hace que crezca hacia arriba en vez de desparramarse.',
          pasos: [
            '<b>Aplaná</b> la bola con la palma hasta hacer un disco parejo.',
            '<b>Estirá con los dedos</b> hasta un rectángulo de grosor uniforme. Sin rodillo.',
            '<b>Doblá los bordes largos hacia el centro</b>, como un tríptico.',
            '<b>Enrollá</b> de punta a punta con presión suave y continua.',
            '<b>Sellá la costura</b> y dejala hacia abajo. Largo final de <b>22 a 25 cm</b>, parejo.'
          ],
          seqTitulo: 'El formado, movimiento por movimiento',
          seq: [
            ['form-camaleon-1','<b>1 · Aplanar.</b> Con la palma, hasta un disco parejo.'],
            ['form-camaleon-2','<b>2 · Estirar.</b> Con los dedos, rectángulo parejo. Sin rodillo.'],
            ['form-camaleon-3','<b>3 · Doblar.</b> Los bordes largos al centro.'],
            ['form-camaleon-4','<b>4 · Enrollar.</b> De punta a punta. Acá nace la tensión.'],
            ['form-camaleon-5','<b>5 · Sellar.</b> Costura pellizcada y hacia abajo.']
          ]
        },
        acabado: {
          titulo: 'Pintar y azucarar — 5 minutos',
          p: 'Todo el pan está en este paso, y todo depende del <b>orden y del momento</b>.',
          pasos: [
            'Batí un huevo con una cucharada de leche y <b>pintá toda la superficie</b> con brocha suave.',
            '<b>El azúcar va DESPUÉS del pintado, justo antes de entrar al horno.</b> Nunca antes del segundo reposo.',
            'Espolvoreá generoso. El huevo es el pegamento: si pintaste poco, el azúcar se cae.',
            'Al horno de inmediato.'
          ],
          seqTitulo: 'La costra',
          seq: [
            ['acab-azucarado-1','<b>El azúcar, encima del huevo fresco.</b> Gruesa, generosa, justo antes del horno.'],
            ['acab-azucarado-2','<b>Así sale.</b> Caramelizada y crocante, con la miga blanda debajo.']
          ],
          nota: ['Los tres errores, y su causa exacta','<b>El azúcar se cae:</b> pintaste poco huevo, o lo aplicaste tarde. <b>Costra quemada:</b> temperatura muy alta, o usaste azúcar fina. <b>No carameliza:</b> lo pusiste sobre masa seca. Si lo echás antes del segundo reposo, el azúcar chupa humedad, se disuelve y desaparece.']
        },
        horno: { temp:175, min:20, max:23 }
      }),

      { t:'tip', tt:'Variaciones que funcionan', c:'Con canela en la masa. Con azúcar morena, para un caramelizado más oscuro y rústico. Con azúcar y anís estrellado molido, que es la versión de fiesta.' }
    ]
  },

  /* ════════ 3 · Pan trenzado andino ════════ */
  { tipo:"largo", titulo:"Pan trenzado andino",
    lede:"El paso que más miedo da, y el segundo pan más rentable del catálogo.",
    bloques:[

      { t:'rec', n:'Receta 3', c:'Pan trenzado andino', lede:'El paso que más miedo da a los nuevos. Y es mucho más simple de lo que parece.' },
      { t:'foto', img:'pan-trenza-azucarada', pie:'Tres hebras iguales, tejidas desde el centro hacia afuera.' },

      { t:'ficha', items:[
        ['Rinde','10 trenzas de 200 g'],
        ['Trabajo activo','50 min'],
        ['Espera','1 h 40 a 2 h 15'],
        ['De principio a fin','2 h 52 a 3 h 31'],
        ['Horno','175 °C · 22-26 min'],
        ['Dificultad','Media alta']
      ]},

      { t:'p', c:'Una vez que dominás la trenza no parás de hacerla, porque el efecto en el cliente es inmediato: <i>«¿cómo hiciste eso?»</i>. Es el <b>segundo pan más rentable del catálogo</b>, con 67% de margen, y lo único que cambia respecto del camaleón es el formado.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.080 g de masa · 10 trenzas de 200 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g']
        ]},
      { t:'nota', tt:'Cómo se reparte cada trenza', c:'Cada trenza pesa <b>200 g</b> y se arma con <b>3 tiras de unos 67 g</b>. Las tres tiras tienen que pesar lo mismo: <b>la diferencia de gramos se nota a un metro de distancia</b> y arruina la pieza aunque la técnica haya sido buena.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'El segundo reposo es de <b>30 minutos y no de 45</b>: la pieza es más grande y con más reposo se derrumba.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten, entre <b>24 y 26 °C</b>.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta <b>doblar el volumen</b>.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'En tiras de 67 g, con báscula. Tres por trenza.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Sin este reposo las tiras se encogen al estirarlas.' },
        { n:'Trenzar', min:15, max:15, d:'Estirar las tiras y tejer desde el centro.' },
        { n:'Segunda fermentación', min:30, max:30, d:'Cubierta. <b>30 minutos, no 45.</b>' },
        { n:'Pintar', min:5, max:5, d:'Llegando a todos los surcos.' },
        { n:'Hornear', min:22, max:26, d:'A <b>175 °C</b>, más lento que el camaleón por el volumen.' }
      ]},

      ...PROCESOS.armar({
        pieza: '67 g (tres por trenza)',
        reposo2: 30,
        formado: {
          titulo: 'Trenzar — 15 minutos',
          p: 'Acá está todo el pan. Y el secreto es uno solo, y es contraintuitivo: <b>se empieza por el centro</b>, no por una punta.',
          pasos: [
            'Estirá cada tira <b>rodando con las palmas</b> sobre la mesa, hasta <b>35 a 40 cm</b> de largo. Con las palmas abiertas, no con los dedos.',
            'Poné las tres tiras paralelas y juntalas por el medio.',
            '<b>Empezá a trenzar desde el CENTRO hacia un extremo.</b> Si empezás por una punta, un lado te queda más apretado que el otro y se nota.',
            'Cuando llegues a la punta, <b>dá vuelta la pieza</b> y trenzá la otra mitad desde el centro hacia el otro extremo.',
            '<b>Tensión media:</b> ni floja (se aplasta) ni excesiva (rompe el gluten).',
            '<b>Sellá los dos extremos:</b> pellizcá firme y doblá hacia abajo. Presionalos contra la bandeja para que el peso los mantenga cerrados. <b>Un extremo mal sellado se abre en el horno</b> y perdés la trenza.'
          ],
          seqTitulo: 'La trenza, movimiento por movimiento',
          seq: [
            ['form-trenza-1','<b>1 · Tres tiras iguales.</b> Pesadas, de 35 a 40 cm, rodadas con las palmas.'],
            ['form-trenza-2','<b>2 · Desde el centro.</b> Nunca desde una punta: así la tensión se reparte pareja.'],
            ['form-trenza-3','<b>3 · La trenza terminada.</b> Pareja de punta a punta.'],
            ['form-trenza-4','<b>4 · Sellar los extremos.</b> Pellizcar y doblar hacia abajo.']
          ],
          nota: ['Por qué desde el centro','Porque si arrancás de una punta, la tensión se te va acumulando hacia el otro lado: terminás con una mitad apretada y otra floja. <b>Desde el centro, las dos mitades salen iguales.</b>']
        },
        acabado: {
          titulo: 'Pintar — 5 minutos',
          pasos: [
            'Huevo batido con una cucharada de leche.',
            '<b>La brocha tiene que entrar en todos los surcos</b> entre hebra y hebra. Los surcos que no pinten quedan como rayas pálidas y se ven.',
            'No cargues tanto la brocha que se acumule huevo en el fondo de los surcos: ahí se quema.'
          ],
          seqTitulo: 'El pintado',
          seq: [
            ['acab-trenza-1','<b>Hasta el fondo de los surcos.</b> Lo que no pintás, sale pálido.']
          ]
        },
        horno: { temp:175, min:22, max:26 }
      }),

      { t:'nota', tt:'Por qué 175 y no 180', c:'Menos temperatura que el camaleón porque la pieza tiene más volumen y necesita cocción más lenta para que el calor llegue al centro sin quemar la superficie.' },
      { t:'tip', tt:'Cuando ya te sale', c:'Trenza simple de 3 hebras para el día a día. <b>Trenza doble de 6 hebras</b> para las fechas especiales: es la que de verdad impresiona, y justifica cobrar el doble. También se rellena de bocadillo o queso.' },
      { t:'ilustra', items:[['bascula','3 hebras iguales'],['pan','Del centro hacia afuera'],['huevo','Pintar los surcos'],['horno','175 °C']] }
    ]
  },

  /* ════════ 4 · Acema tachirense ════════ */
  { tipo:"largo", titulo:"Acema tachirense",
    lede:"El pan de las fiestas. Las especias lo cambian todo, hasta la fermentación.",
    bloques:[

      { t:'rec', n:'Receta 4', c:'Acema tachirense', lede:'El pan de las fiestas. Su perfume llena el local desde que entra al horno.' },
      { t:'foto', img:'form-acema-1', pie:'La forma oval, más corta y más alta que el camaleón. Esa es la diferencia a simple vista.' },

      { t:'ficha', items:[
        ['Rinde','13 piezas de 150 g'],
        ['Trabajo activo','45 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h 04 a 3 h 42'],
        ['Horno','175 °C · 22-25 min'],
        ['Dificultad','Media']
      ]},

      { t:'p', c:'Parte de una masa muy parecida al camaleón, pero <b>las especias lo transforman</b>. Y no solo el sabor: las especias también modifican la fermentación, <b>acelerándola un poco</b>. Si hacés acema con los tiempos exactos del camaleón, se te pasa.' },
      { t:'p', c:'Los clientes que piden acema son otros — son de fiestas, fechas especiales y regalos. Por eso <b>justifica un precio 15 a 20% superior al camaleón</b> sin que nadie discuta.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.093 g de masa · 13 piezas de 150 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Canela en polvo',8,'g'],
          ['Anís estrellado molido',3,'g'],
          ['Pimienta guayabita molida',2,'g']
        ]},

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'Ojo con la primera fermentación: <b>las especias la aceleran</b>. Mirá la masa a los 50 minutos, no a los 60.', items:[
        { n:'Mezclar las especias', min:2, max:2, d:'En la harina, <b>antes</b> de amasar.' },
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten, entre <b>24 y 26 °C</b>.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar. <b>Empezá a mirarla a los 50.</b>' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 150 g, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Las bolas descansan cubiertas.' },
        { n:'Formar el óvalo', min:10, max:10, d:'De 15 a 18 cm, con altura generosa.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separadas 4 cm, cubiertas.' },
        { n:'Pintar y cortar', min:5, max:5, d:'2 o 3 cortes longitudinales.' },
        { n:'Hornear', min:22, max:25, d:'A <b>175 °C</b> la pieza de 150 g.' }
      ]},

      ...PROCESOS.armar({
        pieza: '150 g',
        antesAmasado: [
          { t:'h', c:'Antes de amasar · Las especias van en la harina' },
          { t:'p', c:'Este paso va <b>antes que todo</b>, y no se puede recuperar después.' },
          { t:'pasos', items:[
            'Pesá las tres especias: <b>8 g de canela, 3 g de anís estrellado molido y 2 g de pimienta guayabita molida</b> por kilo de harina.',
            '<b>Mezclalas con la harina seca</b>, revolviendo bien antes de agregar cualquier líquido.',
            '<b>Nunca las eches sobre la masa ya formada.</b> Si lo hacés, quedan en vetas oscuras y se ven en la miga cortada.'
          ]},
          { t:'seq', titulo:'Las tres especias', items:[
            ['trasamasado-especias','<b>Canela, anís estrellado y guayabita.</b> Pesadas y en la harina seca, antes de amasar.']
          ]}
        ],
        trasFermentar1: [
          { t:'nota', tt:'Las especias aceleran la fermentación', c:'No es un detalle de sabor: la acema <b>fermenta más rápido que el camaleón</b>. Empezá a mirarla a los 50 minutos. Si le das los 90 de costumbre, se te pasa y colapsa en el horno.' }
        ],
        formado: {
          titulo: 'Formar el óvalo — 10 minutos',
          p: 'La acema no es alargada como el camaleón: es <b>oval, más corta y más alta</b>. Esa forma es la que la hace reconocible en el mostrador.',
          pasos: [
            '<b>Aplaná</b> la bola con la palma en un disco parejo.',
            '<b>Enrollá desde un borde</b>, pero cerrando hacia adentro para que quede corta y rechoncha, no larga.',
            'Sellá la costura y <b>rodá poco</b>: el largo final es de <b>15 a 18 cm</b> nada más.',
            '<b>Buscá altura, no largo.</b> Si te queda del largo de un camaleón, la aplastaste de más.'
          ],
          seqTitulo: 'La forma oval',
          seq: [
            ['form-acema-1','<b>Corta y alta.</b> De 15 a 18 cm, con altura generosa. Comparala con el camaleón: es otra cosa.']
          ]
        },
        acabado: {
          titulo: 'Pintar y cortar — 5 minutos',
          pasos: [
            'Pintá con huevo batido y una cucharada de leche.',
            'Hacé <b>2 o 3 cortes paralelos a lo LARGO</b> de la pieza — no en diagonal como el camaleón.',
            '<b>Más profundos que en el camaleón</b>, porque la pieza es más alta y necesita por dónde abrir.'
          ],
          seqTitulo: 'Los cortes de la acema',
          seq: [
            ['acab-acema-1','<b>A lo largo y profundos.</b> Dos o tres, paralelos. Nada de diagonales.']
          ]
        },
        horno: { temp:175, min:22, max:25 }
      }),

      { t:'tip', tt:'El truco de venta que no cuesta nada', c:'Si horneás acema y dejás la ventana abierta, los vecinos vienen solos a preguntar qué es. <b>Ese olor es publicidad gratis</b>, y es el único producto del catálogo que se vende antes de existir.' },
      { t:'ilustra', items:[['canela','Canela'],['anis','Anís estrellado'],['granos','Guayabita']] }
    ]
  },

  /* ════════ 5 · Acema de bocadillo y queso ════════ */
  { tipo:"largo", titulo:"Acema de bocadillo y queso",
    lede:"La joya: dulce del bocadillo, sal del queso y la masa especiada abajo.",
    bloques:[

      { t:'rec', n:'Receta 5', c:'Acema de bocadillo y queso', lede:'La joya. Dulce del bocadillo, sal del queso, y la masa especiada abajo.' },
      { t:'foto', img:'pan-acema-bocadillo-queso', pie:'Tres elementos que solos son buenos y juntos son otra cosa.' },

      { t:'ficha', items:[
        ['Rinde','16 piezas de 150 g'],
        ['Trabajo activo','55 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h 12 a 3 h 50'],
        ['Horno','170 °C · 20-23 min'],
        ['Dificultad','Media alta']
      ]},

      { t:'p', c:'Son tres cosas que por separado están bien y juntas son perfectas. Es identidad culinaria venezolana pura, y es <b>el pan que más se regala</b> — y el que más se viraliza, porque el corte que revela el relleno derretido es irresistible.' },
      { t:'p', c:'Lleva <b>la misma masa especiada de la acema</b>: canela, anís estrellado y guayabita. Si no hiciste la acema todavía, esa receta es el paso anterior a esta.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.443 g con relleno · 16 piezas de 150 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Canela en polvo',8,'g'],
          ['Anís estrellado molido',3,'g'],
          ['Pimienta guayabita molida',2,'g'],
          ['Bocadillo de guayaba',200,'g'],
          ['Queso blanco semiduro',150,'g']
        ]},
      { t:'nota', tt:'La proporción que no se enseña', c:'<b>60% bocadillo, 40% queso</b> — o sea 200 g y 150 g por kilo de harina. Más bocadillo aplasta el sabor del queso. Más queso satura de sal y endurece el relleno. El <b>bocadillo va a temperatura ambiente</b> para que sea flexible y se corte en láminas de <b>3 mm</b>; el queso <b>no puede ser muy húmedo</b> o suelta agua adentro de la pieza.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'El relleno agrega 10 minutos de trabajo, no de espera.', items:[
        { n:'Mezclar las especias', min:2, max:2, d:'En la harina, antes de amasar.' },
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar. Miralá a los 50: las especias la aceleran.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 150 g de masa, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Cubiertas.' },
        { n:'Estirar, rellenar y enrollar', min:20, max:20, d:'El paso que decide la pieza.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Costura hacia abajo, separadas 4 cm.' },
        { n:'Pintar', min:5, max:5, d:'Huevo con leche.' },
        { n:'Hornear', min:20, max:23, d:'A <b>170 °C</b>, más bajo por el relleno.' }
      ]},

      ...PROCESOS.armar({
        pieza: '150 g',
        antesAmasado: [
          { t:'h', c:'Antes de amasar · Las especias van en la harina' },
          { t:'pasos', items:[
            'Pesá <b>8 g de canela, 3 g de anís estrellado molido y 2 g de pimienta guayabita</b> por kilo de harina.',
            '<b>Mezclalas con la harina seca</b> antes de agregar cualquier líquido. Sobre la masa ya hecha quedan en vetas.'
          ]},
          { t:'seq', titulo:'Las tres especias', items:[
            ['trasamasado-especias','<b>Canela, anís estrellado y guayabita.</b> En la harina seca, antes de amasar.']
          ]}
        ],
        formado: {
          titulo: 'Estirar, rellenar y enrollar — 20 minutos',
          p: 'Todo el pan se decide acá, y sobre todo en el último movimiento: <b>el sellado de la costura</b>. Si se abre en el horno, perdés la pieza entera.',
          pasos: [
            'Estirá la masa en un <b>rectángulo de 20 × 15 cm</b>.',
            'Poné las láminas de bocadillo de <b>3 mm</b> encima, <b>dejando 2 cm de borde libre</b> en todo el contorno. Ese borde es lo que después sella.',
            'Repartí el queso <b>sobre el bocadillo</b>, no al lado.',
            '<b>Enrollá apretado desde el borde largo.</b> Apretado de verdad: los huecos de aire adentro se convierten en agujeros en la miga.',
            '<b>Pellizcá la costura con fuerza</b>, a lo largo de toda la pieza.',
            'A la bandeja <b>con la costura hacia abajo</b>. El peso de la pieza la mantiene cerrada.'
          ],
          seqTitulo: 'El relleno enrollado, paso a paso',
          seq: [
            ['tec-relleno-1','<b>1 · El rectángulo.</b> 20 × 15 cm, de grosor parejo.'],
            ['tec-relleno-2','<b>2 · El bocadillo.</b> Láminas de 3 mm, con 2 cm de borde libre.'],
            ['tec-relleno-3','<b>3 · El queso.</b> Encima del bocadillo, repartido.'],
            ['tec-relleno-4','<b>4 · Enrollar.</b> Apretado, desde el borde largo.'],
            ['tec-relleno-5','<b>5 · Sellar.</b> Pellizcá fuerte. Acá se gana o se pierde la pieza.']
          ],
          nota: ['Si el relleno se escapa, no fue el horno','<b>Fue la costura.</b> Es el único motivo. Volvé a pellizcar más firme y asegurate de haber dejado los 2 cm de borde libre: sin borde limpio no hay nada que sellar.']
        },
        acabado: {
          titulo: 'Pintar — 5 minutos',
          pasos: [
            'Huevo batido con una cucharada de leche, con brocha suave.',
            '<b>No cortés esta pieza.</b> A diferencia de la acema simple, acá los cortes abrirían el relleno.'
          ]
        },
        horno: { temp:170, min:20, max:23 }
      }),

      { t:'tip', tt:'Por qué 170 °C y no más', c:'Baja, para que el interior llegue a temperatura sin quemar la costra. El relleno tarda más en calentarse que la masa, y a 180 la costra estaría lista antes que el centro.' },
      { t:'nota', tt:'La versión grande', c:'La <b>acema rellena entera</b>, de 400 g, va a <b>165 °C durante 30 a 35 minutos</b>. Es la pieza de mesa para fechas especiales.' },
      { t:'tip', tt:'Las variaciones que ya están probadas', c:'<b>Solo bocadillo:</b> más dulce, para niños. <b>Solo queso:</b> versión salada, mercado adulto. <b>Bocadillo con arequipe:</b> ultra dulce. <b>Bocadillo con chocolate rallado:</b> la versión premium, y la que más se cobra.' }
    ]
  },
  /* ════════ 6 · Pan de queso andino ════════ */
  { tipo:"largo", titulo:"Pan de queso andino",
    lede:"El del desayuno, y el que las cafeterías compran todas las semanas.",
    bloques:[

      { t:'rec', n:'Receta 6', c:'Pan de queso andino', lede:'El del desayuno. Y el que más piden las cafeterías para revender.' },
      { t:'foto', img:'pan-pan-de-queso', pie:'Queso adentro de la masa y queso gratinado encima. Son dos quesos distintos y cumplen funciones distintas.' },

      { t:'ficha', items:[
        ['Rinde','19 piezas de 120 g'],
        ['Trabajo activo','47 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','2 h 55 a 3 h 34'],
        ['Horno','180 °C · 18-22 min'],
        ['Dificultad','Media']
      ]},

      { t:'p', c:'La versión andina tiene identidad propia: masa más dulce que en otras regiones, <b>queso integrado en la masa y queso gratinado encima</b>. Ese contraste de dulce y salado es lo que lo separa del pan de queso de cualquier otra parte del país.' },
      { t:'p', c:'Un cliente de cafetería te puede comprar <b>50 panes por semana</b>, todas las semanas. Ese, y no la venta suelta, es el negocio de este pan.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.280 g de masa · 19 piezas de 120 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Queso blanco rallado grueso, para la masa',200,'g'],
          ['Queso amarillo tipo Gouda, para gratinar',150,'g']
        ]},
      { t:'nota', tt:'Son dos quesos distintos y no son intercambiables', c:'El <b>queso blanco va adentro</b> y aporta sabor y humedad. El <b>amarillo va encima</b> y aporta el dorado y la costra gratinada. Si usás uno solo para las dos cosas, perdés una de las dos.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'El gratinado no suma tiempo: ocurre dentro de los últimos 5 minutos del horneado.', items:[
        { n:'Amasar', min:20, max:20, d:'Con el queso blanco <b>en el último minuto</b>.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 120 g, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Cubiertas.' },
        { n:'Bolear', min:10, max:10, d:'Bolas parejas, superficie lisa y tensa.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separadas 4 cm, cubiertas.' },
        { n:'Rallar el queso de encima', min:2, max:2, d:'Listo y a mano antes de que empiece el horneado.' },
        { n:'Hornear', min:18, max:22, d:'A <b>180 °C</b>, subiendo a 200 °C los últimos 5 minutos.' }
      ]},

      ...PROCESOS.armar({
        pieza: '120 g',
        trasAmasado: [
          { t:'h', c:'Al terminar de amasar · El queso va adentro' },
          { t:'p', c:'El momento importa tanto como la cantidad. <b>Va en el último minuto del amasado</b>, no antes.' },
          { t:'pasos', items:[
            'Agregá los <b>200 g de queso blanco rallado grueso</b> cuando ya tengas la ventana de gluten.',
            '<b>Integrá con movimientos envolventes</b>, no amasando fuerte. Si seguís amasando, el queso corta las hebras de gluten que te costaron 20 minutos.',
            '<b>El queso no puede estar frío.</b> A temperatura ambiente: el queso de nevera enfría la masa y te frena la fermentación.'
          ]},
          { t:'seq', titulo:'El queso de adentro', items:[
            ['trasamasado-queso','<b>Envolviendo, no amasando.</b> En el último minuto, con el queso a temperatura ambiente.']
          ]}
        ],
        formado: {
          titulo: 'Bolear — 10 minutos',
          p: 'Este pan es redondo, y el bolleo es todo el formado. El objetivo es una <b>bola de superficie lisa y tensa</b> pero relajada por dentro.',
          pasos: [
            'Poné la porción en la mesa y <b>ahuecá la mano encima</b>, como una cúpula.',
            'Hacé <b>movimientos circulares</b> con presión hacia abajo. La masa gira debajo de tu palma y se va tensando sola.',
            'Parás cuando la superficie está <b>lisa y tensa</b>, sin arrugas ni pliegues.',
            '<b>Ni mucha ni poca tensión:</b> demasiada tensión te da un pan duro; poca tensión te da un pan aplastado.'
          ],
          seqTitulo: 'El bolleo, movimiento por movimiento',
          seq: [
            ['tec-bolleo-1','<b>1 · La cúpula.</b> La mano ahuecada encima de la masa.'],
            ['tec-bolleo-2','<b>2 · El círculo.</b> Movimiento circular con presión hacia abajo. La masa se tensa sola.'],
            ['tec-bolleo-3','<b>3 · La bola.</b> Lisa y tensa, sin arrugas.']
          ]
        },
        acabado: {
          titulo: 'Preparar el gratinado — 2 minutos',
          p: 'El queso de encima <b>no se pone ahora</b>: se ralla ahora y se pone dentro del horno, a falta de 5 minutos.',
          pasos: [
            'Rallá los <b>150 g de queso amarillo</b> y dejalo a mano, al lado del horno.',
            '<b>A falta de 5 minutos</b> para terminar el horneado, abrí, repartilo encima y subí a <b>200 °C</b>.',
            'Antes de esos 5 minutos se quema. Después, no alcanza a gratinar.'
          ],
          seqTitulo: 'El gratinado',
          seq: [
            ['acab-panqueso-1','<b>A falta de 5 minutos.</b> Con el pan ya casi hecho, no antes.'],
            ['acab-panqueso-2','<b>Así queda.</b> Dorado y burbujeante, sin pasarse.']
          ],
          nota: ['Nunca pases de 210 °C','El queso pasa de gratinado a quemado en cuestión de minutos, y no hay marcha atrás. <b>Ese es el único punto donde este pan se arruina</b>, y siempre es por descuido, no por técnica.']
        },
        horno: { temp:180, min:18, max:22, extra:[
          '<b>A falta de 5 minutos:</b> abrí, repartí el queso amarillo y subí a <b>200 °C</b> para el gratinado.'
        ]}
      }),

      { t:'nota', tt:'Este va aparte en el horno', c:'Necesita bastante más temperatura que los panes dulces. <b>Mezclarlo en la misma tanda con pan de leche o camaleón compromete a uno de los dos</b>, sin excepción. Horneá una sola clase de pan por tanda hasta que tengas experiencia.' },
      { t:'tip', tt:'Variaciones que venden', c:'Queso más jamón en cuadritos. Queso más pimentón asado. Queso más ajo asado. Las tres funcionan y las tres se cobran más caro que el simple.' }
    ]
  },

  /* ════════ 7 · Pan de leche tachirense ════════ */
  { tipo:"largo", titulo:"Pan de leche tachirense",
    lede:"La miga más tierna del catálogo. El mejor para arrancar: enseña el bolleo.",
    bloques:[

      { t:'rec', n:'Receta 7', c:'Pan de leche tachirense', lede:'La miga más suave del catálogo. El que hace que pregunten «¿qué le pusiste?».' },
      { t:'foto', img:'pan-bolitas-de-leche', pie:'Bolas de 70 a 80 g, perfectamente redondas y lisas.' },

      { t:'ficha', items:[
        ['Rinde','25 piezas de 80 g'],
        ['Trabajo activo','43 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','2 h 54 a 3 h 31'],
        ['Horno','170 °C · 15-17 min'],
        ['Dificultad','Baja']
      ]},

      { t:'p', c:'Su mercado es específico y muy fiel: familias con niños chiquitos, adultos mayores con dificultad para masticar, y el mercado de regalos. <b>El pan de leche en una caja bonita es el detalle perfecto para llevar de visita.</b>' },
      { t:'nota', tt:'Empezá por este', c:'Es el pan que enseña <b>el bolleo</b>, que es la base de todo formado del catálogo. Si dominás esta bola, el pan de queso te sale solo y el resto de los formados se vuelven fáciles. Por eso va primero en el orden de aprendizaje.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.070 g de masa · 25 piezas de 80 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche entera tibia',200,'ml'],
          ['Leche en polvo entera',30,'g'],
          ['Huevo entero',150,'g'],
          ['Sal',10,'g']
        ]},
      { t:'nota', tt:'Los dos secretos, y por qué funcionan', c:'<b>Nada de agua:</b> los 200 ml son todos de leche. La grasa y la proteína de la leche ablandan el gluten y crean una miga mucho más tierna. <b>Y 30 g de leche en polvo a los secos:</b> la proteína extra actúa como suavizante natural — el mismo efecto de un mejorante comercial, pero sin comprar nada.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'Es el más rápido del catálogo, y el más fácil.', items:[
        { n:'Mezclar la leche en polvo', min:1, max:1, d:'En la harina seca, con el resto de los secos.' },
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 80 g, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Cubiertas.' },
        { n:'Bolear', min:10, max:10, d:'Bolas perfectamente redondas.' },
        { n:'Segunda fermentación', min:45, max:45, d:'<b>Casi tocándose</b>, a 1 cm. Este pan es la excepción.' },
        { n:'Pintar', min:3, max:3, d:'Huevo con leche, suave.' },
        { n:'Hornear', min:15, max:17, d:'A <b>170 °C</b>, la temperatura más baja del catálogo.' }
      ]},

      ...PROCESOS.armar({
        pieza: '80 g',
        juntos: true,
        antesAmasado: [
          { t:'h', c:'Antes de amasar · La leche en polvo va a los secos' },
          { t:'pasos', items:[
            'Mezclá los <b>30 g de leche en polvo</b> con la harina seca, antes de agregar líquidos.',
            'Acordate: <b>los 200 ml de líquido son TODOS de leche</b>. En este pan no entra agua.'
          ]},
          { t:'seq', titulo:'Los secos', items:[
            ['trasamasado-lechepolvo','<b>Leche en polvo con la harina.</b> Es el suavizante natural de la miga.']
          ]}
        ],
        formado: {
          titulo: 'Bolear — 10 minutos',
          p: 'Todo el pan es esta bola. Y tiene un punto exacto de tensión: <b>tenso, pero sin exceso</b>.',
          pasos: [
            'Poné la porción en la mesa y <b>ahuecá la mano encima</b>, como una cúpula.',
            'Hacé <b>movimientos circulares</b> con presión hacia abajo. La masa gira sola bajo la palma y se tensa.',
            'Parás cuando la bola está <b>perfectamente redonda, lisa y tensa</b>.',
            '<b>Sin pasarte de tensión:</b> demasiada tensión endurece la miga, y la miga tierna es todo el producto acá.'
          ],
          seqTitulo: 'El bolleo, movimiento por movimiento',
          seq: [
            ['tec-bolleo-1','<b>1 · La cúpula.</b> La mano ahuecada encima de la masa.'],
            ['tec-bolleo-2','<b>2 · El círculo.</b> Presión hacia abajo mientras gira.'],
            ['tec-bolleo-3','<b>3 · La bola.</b> Redonda, lisa y tensa. Sin apretar de más.']
          ]
        },
        acabado: {
          titulo: 'Pintar — 3 minutos',
          pasos: [
            'Huevo batido con una cucharada de leche, con brocha suave.',
            '<b>Sin cortes.</b> Este pan va liso: la gracia es la superficie entera y brillante.'
          ]
        },
        horno: { temp:170, min:15, max:17 }
      }),

      { t:'nota', tt:'Acá los panes SÍ se tocan', c:'A diferencia de todo el resto del catálogo, en el pan de leche <b>los costados blancos se buscan a propósito</b>: se hornean juntos para que queden tiernos por los lados. En los demás panes eso sería un defecto; en este es la seña de identidad.' }
    ]
  },

  /* ════════ 8 · Pan de Dios ════════ */
  { tipo:"largo", titulo:"Pan de Dios",
    lede:"Leche condensada y coco tostado. El que mejor funciona en redes.",
    bloques:[

      { t:'rec', n:'Receta 8', c:'Pan de Dios', lede:'Leche condensada y coco tostado. El que más llama la atención en fotos.' },
      { t:'foto', img:'pan-pan-de-dios', pie:'El coco tostado en grumos. No rallado fino: en terrones, como una costra.' },

      { t:'ficha', items:[
        ['Rinde','29 piezas de 70 g'],
        ['Trabajo activo','49 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h 02 a 3 h 39'],
        ['Horno','175 °C · 18-20 min'],
        ['Dificultad','Baja']
      ]},

      { t:'p', c:'El coco tostado dorado sobre la superficie hace que la gente pare el scroll. Es <b>el pan más fotogénico del catálogo</b> y el que mejor funciona en redes sin necesidad de producción: la foto se vende sola.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.080 g de masa · 29 piezas de 70 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Coco rallado SECO, para tostar',200,'g'],
          ['Leche condensada, para pintar',250,'g']
        ]},

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'Tostá el coco al principio: tiene que estar frío cuando lo uses.', items:[
        { n:'Tostar el coco', min:4, max:4, d:'Sartén seca, moviendo constante. Y dejarlo enfriar.' },
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 70 g, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Cubiertas.' },
        { n:'Bolear', min:10, max:10, d:'Bolas parejas y lisas.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separadas 4 cm, cubiertas.' },
        { n:'Pintar y cubrir de coco', min:5, max:5, d:'Leche condensada primero, coco encima, y presionar.' },
        { n:'Hornear', min:18, max:20, d:'A <b>175 °C</b>, más bajo para que el coco no se queme.' }
      ]},

      ...PROCESOS.armar({
        pieza: '70 g',
        antesAmasado: [
          { t:'h', c:'Antes de empezar · Tostá el coco' },
          { t:'p', c:'El coco se tuesta <b>antes</b>, no en el horno con el pan. Y tiene que estar frío cuando lo uses.' },
          { t:'pasos', items:[
            '<b>Coco rallado SECO, nunca fresco.</b> El seco tiene menos humedad y tuesta parejo; el fresco se quema en los bordes antes de dorarse en el centro.',
            'Sartén <b>seca</b>, sin nada de grasa, a fuego medio.',
            '<b>Moviendo constantemente, 3 a 4 minutos</b>, hasta que esté dorado parejo.',
            '<b>Sacalo del calor de inmediato</b> y pasalo a un plato frío: en la sartén caliente sigue tostándose y se te pasa en segundos.'
          ]},
          { t:'seq', titulo:'El tostado', items:[
            ['acab-pandedios-2','<b>Sartén seca, fuego medio, moviendo.</b> 3 a 4 minutos y afuera.']
          ]},
          { t:'nota', tt:'Por qué coco seco y no fresco', c:'El seco tiene menos humedad y tuesta parejo. <b>El fresco se quema en los bordes antes de dorarse en el centro</b>, y te queda una cobertura moteada de negro.' }
        ],
        formado: {
          titulo: 'Bolear — 10 minutos',
          p: 'Bolas chicas y parejas. El mismo bolleo del pan de leche.',
          pasos: [
            '<b>Ahuecá la mano</b> sobre la porción, como una cúpula.',
            '<b>Movimientos circulares</b> con presión hacia abajo, hasta que la superficie quede lisa y tensa.',
            'Piezas de <b>70 g</b>, todas iguales: son chicas y la diferencia de tamaño se nota mucho más que en un pan grande.'
          ],
          seqTitulo: 'El bolleo',
          seq: [
            ['tec-bolleo-1','<b>1 · La cúpula.</b> La mano ahuecada encima.'],
            ['tec-bolleo-2','<b>2 · El círculo.</b> Gira y se tensa sola.'],
            ['tec-bolleo-3','<b>3 · La bola.</b> Lisa y pareja.']
          ]
        },
        acabado: {
          titulo: 'Leche condensada y coco — 5 minutos',
          p: 'El orden y la velocidad lo son todo: <b>el coco va mientras la leche condensada sigue pegajosa</b>.',
          pasos: [
            'Pintá con <b>leche condensada a temperatura ambiente</b>, con brocha suave. Capa generosa, pero que no chorree.',
            '<b>Aplicá el coco tostado inmediatamente</b>, mientras la leche condensada está pegajosa. Si esperás, no agarra.',
            '<b>Presioná suavemente con la mano</b> para que se adhiera.',
            'Al horno.'
          ],
          seqTitulo: 'La cobertura, paso a paso',
          seq: [
            ['acab-pandedios-1','<b>1 · Leche condensada.</b> Generosa pero sin chorrear. Es el pegamento.'],
            ['acab-pandedios-3','<b>2 · El coco, enseguida.</b> Y presionar suave para que agarre.']
          ],
          nota: ['Por qué leche condensada y no huevo','Crea una capa pegajosa que <b>retiene el coco muchísimo mejor que el huevo</b>. Y la temperatura baja de 175 °C existe por una sola razón: que el coco no se queme antes de que el pan esté listo.']
        },
        horno: { temp:175, min:18, max:20 }
      })
    ]
  },

  /* ════════ 9 · Piñita tachirense ════════ */
  { tipo:"largo", titulo:"Piñita tachirense",
    lede:"El patrón que se abre solo en el horno. No se come: se regala y se fotografía.",
    bloques:[

      { t:'rec', n:'Receta 9', c:'Piñita tachirense', lede:'No se come sola: se regala, se fotografía y se lleva de recuerdo.' },
      { t:'foto', img:'pan-pinita', pie:'El patrón sale solo en el horno, si los cortes estuvieron bien hechos.' },

      { t:'ficha', items:[
        ['Rinde','16 piezas de 130 g'],
        ['Trabajo activo','50 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h 05 a 3 h 42'],
        ['Horno','180 °C · 18-20 min'],
        ['Dificultad','Media alta']
      ]},

      { t:'p', c:'Su patrón se hace <b>con tijeras</b>, y es el producto con más potencial para el turismo gastronómico tachirense. También es el <b>tercero más rentable, con 66% de margen</b>, porque el valor está en la forma y no en el ingrediente.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.080 g de masa · 16 piezas de 130 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Azúcar para el almíbar',100,'g'],
          ['Agua para el almíbar',100,'ml']
        ]},
      { t:'nota', tt:'El almíbar es 1:1', c:'Partes iguales de azúcar y agua, disueltas al fuego. Se pinta <b>después del horneado</b>, con el pan todavía tibio, y es lo que da el brillo característico.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'Los cortes con tijera son lo que más se tarda al principio. Con práctica bajan a 5 minutos.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'Desgasificar y dividir', min:10, max:10, d:'Piezas de 130 g, con báscula.' },
        { n:'Reposo de preformado', min:10, max:15, d:'Cubiertas.' },
        { n:'Formar el óvalo', min:10, max:10, d:'Más alto que ancho, antes de cualquier corte.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separadas 4 cm, cubiertas.' },
        { n:'Los cortes con tijera', min:10, max:10, d:'El patrón en filas alternadas.' },
        { n:'Hornear', min:18, max:20, d:'A <b>180 °C</b>. Los cortes se abren solos.' },
        { n:'Pintar con almíbar', min:2, max:2, d:'Con el pan ya horneado y tibio.' }
      ]},

      ...PROCESOS.armar({
        pieza: '130 g',
        formado: {
          titulo: 'Formar el óvalo — 10 minutos',
          p: 'Antes de cortar nada, la forma tiene que estar perfecta: <b>un óvalo más alto que ancho</b>. Si la pieza queda chata, los cortes no tienen dónde abrirse.',
          pasos: [
            'Aplaná la bola y <b>enrollá cerrando hacia adentro</b>, buscando altura.',
            'Sellá la costura y dejala <b>hacia abajo</b>.',
            'El resultado tiene que ser un <b>óvalo perfecto, más alto que ancho</b>, con la superficie tensa y sin arrugas.',
            'Una superficie arrugada arruina el patrón: los cortes se ven torcidos.'
          ],
          seqTitulo: 'El óvalo',
          seq: [
            ['form-pinita-1','<b>Más alto que ancho.</b> Superficie tensa y lisa, antes de cualquier corte.']
          ]
        },
        acabado: {
          titulo: 'Los cortes con tijera — 10 minutos',
          p: 'Acá está todo el pan. Y son <b>tres cosas</b>: el ángulo, el patrón y la profundidad. Si las tres están bien, el dibujo aparece solo en el horno.',
          pasos: [
            '<b>Tijeras bien afiladas, a 45° respecto a la superficie.</b> Nunca perpendicular: el corte vertical aplasta sin abrir.',
            '<b>El patrón va en filas alternadas:</b> primera fila 3 cortes · segunda fila 2 cortes desplazados · tercera fila 3 cortes. Alternando, para que se arme el efecto de escamas de piña.',
            '<b>Cada corte penetra 1,5 cm.</b> Menos no abre; más atraviesa la pieza y la colapsa.',
            'Levantá un poco cada escama con la punta de la tijera al cortar, para que quede despegada.'
          ],
          seqTitulo: 'El corte, paso a paso',
          seq: [
            ['form-pinita-2','<b>1 · A 45°, nunca derecho.</b> La tijera entra inclinada y levanta la escama.'],
            ['form-pinita-3','<b>2 · El patrón terminado.</b> Filas alternadas de 3 y 2, a 1,5 cm de profundidad.']
          ],
          nota: ['Se abre sola','Durante el horneado <b>los cortes se abren solos</b> y revelan el patrón de piña. El efecto es completamente automático si la técnica de corte fue correcta. No hay nada que hacer después, y no hay forma de arreglarlo si el corte estuvo mal.']
        },
        horno: { temp:180, min:18, max:20 },
        trasHornear: [
          { t:'h', c:'Al salir del horno · El almíbar' },
          { t:'p', c:'Este es el único pan del catálogo que se pinta <b>después</b> de hornear.' },
          { t:'pasos', items:[
            'Disolvé al fuego <b>azúcar y agua en partes iguales</b> (1:1) hasta que quede transparente.',
            'Con el pan <b>todavía tibio</b>, pintá con brocha por encima, entrando entre las escamas.',
            'Ese brillo es la firma de la piñita, y es lo que la hace fotografiable.'
          ]},
          { t:'seq', titulo:'El almíbar', items:[
            ['acab-pinita-1','<b>Con el pan tibio, recién salido.</b> El brillo es la mitad del producto.']
          ]}
        ]
      })
    ]
  },

  /* ════════ 10 · Pan de bocadillo enrollado ════════ */
  { tipo:"largo", titulo:"Pan de bocadillo enrollado",
    lede:"El caracol. El corte que revela la espiral es el producto entero.",
    bloques:[

      { t:'rec', n:'Receta 10', c:'Pan de bocadillo enrollado', lede:'El caracol tachirense. El que más se viraliza.' },
      { t:'foto', img:'pan-bolitas-queso-bocadillo', pie:'La espiral cortada. Ese corte es el producto entero.' },

      { t:'ficha', items:[
        ['Rinde','23 caracoles de 100 g'],
        ['Trabajo activo','55 min'],
        ['Espera','1 h 55 a 2 h 30'],
        ['De principio a fin','3 h 10 a 3 h 48'],
        ['Horno','170 °C · 20-23 min'],
        ['Dificultad','Media alta']
      ]},

      { t:'p', c:'El corte que revela la espiral de bocadillo caramelizado genera miles de vistas. Detrás de esa espiral perfecta hay una técnica precisa y <b>seis medidas que no se pueden improvisar</b>.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.330 g con relleno · 23 caracoles de 100 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Bocadillo de guayaba',250,'g']
        ]},
      { t:'nota', tt:'Las seis medidas que no se improvisan', c:'Rectángulo de <b>40 × 25 cm</b> · grosor de masa <b>5 mm</b> · <b>250 g</b> de bocadillo por kilo de harina · capa de bocadillo de <b>3 mm</b> · cada caracol de <b>3 a 4 cm</b> de grosor · horno a <b>170 °C</b>. Cambiá una y cambia el resultado.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'El rollo se hace entero y después se corta: es una sola operación para 23 piezas.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'Desgasificar', min:10, max:10, d:'Acá no se divide todavía: el rollo se hace entero.' },
        { n:'Reposo', min:10, max:15, d:'Cubierta, para que se deje estirar.' },
        { n:'Estirar, rellenar, enrollar y cortar', min:20, max:20, d:'El rectángulo de 40 × 25 cm y los caracoles de 3 a 4 cm.' },
        { n:'Segunda fermentación', min:45, max:45, d:'Separados 4 cm, cubiertos.' },
        { n:'Pintar', min:5, max:5, d:'Huevo con leche, suave.' },
        { n:'Hornear', min:20, max:23, d:'A <b>170 °C</b>, para que el bocadillo caramelice sin quemarse.' }
      ]},

      ...PROCESOS.armar({
        pieza: '100 g por caracol',
        formado: {
          titulo: 'Estirar, rellenar, enrollar y cortar — 20 minutos',
          p: 'Todo el producto es la espiral, y la espiral depende de <b>la tensión del enrollado</b>. Ni floja ni apretada de más.',
          pasos: [
            'Estirá en un <b>rectángulo de 40 × 25 cm</b>, con <b>grosor parejo de 5 mm</b>. Más delgado y el relleno atraviesa la masa; más grueso y el caracol queda macizo sin que se aprecie la espiral.',
            'Bocadillo <b>a temperatura ambiente</b>, blando pero firme, en <b>capa pareja de 3 mm</b>, dejando <b>2 cm libres</b> en el borde de arriba.',
            '<b>Enrollá desde el borde inferior con tensión constante.</b> Poca tensión y el caracol se abre al cortar; demasiada y la masa se desgarra.',
            '<b>Sellá la costura</b> pellizcando a lo largo.',
            '<b>Cortá con hilo de cocina, no con cuchillo.</b> Pasás el hilo por debajo del rollo, lo cruzás por arriba y tirás: el hilo corta sin aplastar y la espiral queda perfecta. El cuchillo la chafa.',
            'Cada caracol de <b>3 a 4 cm de grosor</b>. Acostados en la bandeja, con la espiral hacia arriba.'
          ],
          seqTitulo: 'El caracol, paso a paso',
          seq: [
            ['tec-relleno-1','<b>1 · El rectángulo.</b> 40 × 25 cm, 5 mm de grosor parejo.'],
            ['tec-relleno-2','<b>2 · El bocadillo.</b> Capa de 3 mm, con 2 cm libres arriba.'],
            ['tec-relleno-4','<b>3 · Enrollar.</b> Tensión constante, desde el borde de abajo.'],
            ['tec-relleno-5','<b>4 · Sellar.</b> La costura pellizcada a lo largo.'],
            ['acab-bocadillo-1','<b>5 · Cortar con hilo.</b> Por debajo, cruzar arriba y tirar. El cuchillo aplasta la espiral.']
          ],
          nota: ['Por qué hilo y no cuchillo','Porque el cuchillo <b>empuja hacia abajo</b> y aplasta el rollo: la espiral sale ovalada y las capas se pegan entre sí. El hilo corta por estrangulamiento, sin presión vertical, y deja el círculo perfecto. Es la diferencia entre una foto que funciona y una que no.']
        },
        acabado: {
          titulo: 'Pintar — 5 minutos',
          pasos: [
            'Huevo batido con una cucharada de leche, con brocha suave.',
            '<b>Solo la superficie de arriba.</b> Pintar los costados pega los caracoles entre sí.'
          ]
        },
        horno: { temp:170, min:20, max:23 }
      }),

      { t:'nota', tt:'El caramelizado es el espectáculo', c:'A <b>170 °C</b> el bocadillo carameliza desde adentro del caracol hacia afuera. Los bordes exteriores de la espiral quedan con un caramelizado intenso, casi transparente. <b>Es el efecto visual más potente de todo el catálogo</b>, y a temperatura más alta no ocurre: el bocadillo se quema antes de caramelizar.' }
    ]
  },
  /* ════════ 11 · Criollito tachirense ════════ */
  /* Los dos laminados NO usan PROCESOS.armar(): no se bolean ni se
     preforman, y descansan en nevera entre vuelta y vuelta. Usan las
     piezas sueltas del motor (amasar, fermentar y hornear son iguales)
     y traen su laminado propio en los procesos 3, 4, 5 y 7. */
  { tipo:"largo", titulo:"Criollito tachirense",
    lede:"El más vendido de La Concordia. Hojaldre en cuadros, no bollito redondo.",
    bloques:[

      { t:'rec', n:'Receta 11', c:'Criollito tachirense', lede:'El de mayor volumen de ventas de La Concordia. El que compra 1 camaleón compra 6 criollitos.' },
      { t:'foto', img:'pan-criollito', pie:'Cuadros, no bolitas. Las capas se tienen que ver por el costado — si no se ven, el laminado falló.' },

      { t:'ficha', items:[
        ['Rinde','39 cuadros de 55 g'],
        ['Trabajo activo','55 min'],
        ['Espera','2 h 55 a 3 h 25'],
        ['De principio a fin','3 h 50 a 4 h 23'],
        ['Horno','180 °C · 15-18 min'],
        ['Dificultad','Alta']
      ]},

      { t:'p', c:'Este pan y el mil hojas <b>no se bolean ni se enrollan: se laminan</b>. Se mete mantequilla fría entre capas de masa, se dobla, se estira y se vuelve a doblar. En el horno, el agua de esa mantequilla se convierte en vapor y separa las capas. Ese vapor es todo el secreto.' },
      { t:'p', c:'Es un <b>hojaldre cortado en cuadros, no un bollito redondo</b>. Se reconoce por el costado: las capas se ven apiladas una sobre otra, y al partirlo suelta hojuelas. Por arriba va dorado del huevo; por los lados queda pálido, porque ahí no se pinta.' },
      { t:'p', c:'Es el producto para construir clientela fija y garantizar rotación diaria. <b>La gente no compra uno: compra seis.</b>' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.180 g de masa · 39 cuadros de 55 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal, en la masa',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Mantequilla fría, para laminar',100,'g']
        ]},
      { t:'nota', tt:'Son dos mantequillas y hacen cosas distintas', c:'Los <b>160 g van dentro de la masa</b> y la enriquecen. Los <b>100 g de mantequilla FRÍA se laminan</b>: son los que crean las capas. Si mezclás la de laminar dentro de la masa, no hay hojaldre — hay un pan enriquecido y nada más.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'De las casi 4 horas, <b>solo 55 minutos son de trabajo</b>. Lo demás es la masa fermentando y la mantequilla enfriándose, que es igual de importante.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'A la nevera', min:30, max:30, d:'La masa base se enfría. <b>Fría pero manejable</b>, no congelada.' },
        { n:'Primera vuelta', min:10, max:10, d:'Estirar, untar mantequilla fría, doblar en tres.' },
        { n:'Nevera', min:20, max:20, d:'Sin este frío la mantequilla se derrite dentro de la masa.' },
        { n:'Segunda vuelta', min:10, max:10, d:'Lo mismo otra vez. Con dos alcanza para el criollito.' },
        { n:'Nevera', min:20, max:20, d:'La última antes de cortar.' },
        { n:'Estirar y cortar', min:10, max:10, d:'A 1 cm de grosor, en cuadros de 6 × 6 cm.' },
        { n:'Segunda fermentación', min:30, max:30, d:'Cubiertos, separados.' },
        { n:'Pintar', min:5, max:5, d:'<b>Solo arriba.</b> Los lados, nunca.' },
        { n:'Hornear', min:15, max:18, d:'A <b>180 °C</b>.' }
      ]},

      ...PROCESOS.amasar(),
      ...PROCESOS.fermentar1(),

      { t:'h', c:'Proceso 3 · A la nevera — 30 minutos' },
      { t:'p', c:'El frío no es un descanso: es <b>parte de la técnica</b>. La mantequilla tiene que estar firme para que se lamine en láminas en vez de mezclarse con la masa.' },
      { t:'pasos', items:[
        'Aplastá la masa fermentada en un rectángulo grueso y envolvela.',
        '<b>30 minutos de nevera.</b> Tiene que quedar fría pero manejable, no congelada.',
        'Sacá también la mantequilla de laminar, para que llegue a <b>13-15 °C</b>: ni blanda ni dura como piedra.'
      ]},
      { t:'nota', tt:'Los 13-15 °C de la mantequilla', c:'Es el punto exacto: <b>ni muy blanda</b> (se absorbe en la masa y no crea capas) <b>ni muy dura</b> (rompe el gluten al laminar). A esa temperatura se dobla sin romperse ni chorrear. Sacala de la nevera unos 15 minutos antes.' },

      { t:'h', c:'Proceso 4 · Las dos vueltas — 60 minutos' },
      { t:'p', c:'Una "vuelta" es <b>estirar, poner mantequilla, doblar en tres y enfriar</b>. El criollito lleva dos; el mil hojas, tres. Cada vuelta multiplica las capas.' },
      { t:'pasos', items:[
        '<b>Estirá</b> la masa fría en un rectángulo, con el palo de amasar, de grosor parejo.',
        '<b>Poné la mantequilla fría en láminas</b> sobre dos tercios del rectángulo, dejando un tercio libre.',
        '<b>Doblá en tres, como una carta:</b> el tercio libre encima del centro, y el otro tercio encima de ese. Ahora la mantequilla quedó encerrada entre capas de masa.',
        '<b>A la nevera, 20 minutos.</b> Este paso no se salta: si laminás con la mantequilla blanda, se mezcla con la masa y no hay capas.',
        '<b>Repetí una vez más.</b> Con dos vueltas alcanza para el criollito.'
      ]},
      { t:'seq', titulo:'Una vuelta, movimiento por movimiento', items:[
        ['tec-lamin-1','<b>1 · La mantequilla fría</b>, en láminas sobre la masa estirada.'],
        ['tec-lamin-2','<b>2 · Doblar en tres</b>, como una carta. La mantequilla queda encerrada.'],
        ['tec-lamin-3','<b>3 · Estirar de nuevo</b>, ya frío, para la vuelta siguiente.'],
        ['tec-lamin-4','<b>4 · Las capas.</b> Miralas por el canto: eso es lo que estás construyendo.']
      ]},

      { t:'h', c:'Proceso 5 · Estirar y cortar — 10 minutos' },
      { t:'pasos', items:[
        '<b>Estirá la última vez a 1 cm de grosor</b>, parejo. Más fino y no se ven las capas; más grueso y el centro queda crudo.',
        '<b>Cortá en cuadros de 6 × 6 cm</b> con un cuchillo muy afilado.',
        '<b>De un solo golpe seco hacia abajo.</b> Si arrastrás el cuchillo, sellás los costados y el hojaldre no abre: te quedan cuadros macizos.',
        'Acomodalos en la bandeja separados.'
      ]},
      { t:'seq', titulo:'El corte', items:[
        ['form-criollito-1','<b>Un golpe seco hacia abajo.</b> Arrastrar el cuchillo sella los costados y mata el hojaldre.'],
        ['form-criollito-2','<b>Cuadros de 6 × 6.</b> Con las capas visibles por el costado.']
      ]},
      { t:'nota', tt:'Los dos errores que matan las capas', c:'<b>Arrastrar el cuchillo</b> sella los costados y el hojaldre no abre. Y <b>pintar los lados con huevo</b> hace exactamente lo mismo: los pega. El huevo va solo arriba, y los costados quedan pálidos a propósito.' },

      ...PROCESOS.fermentar2(30),

      { t:'h', c:'Proceso 7 · Pintar — 5 minutos' },
      { t:'pasos', items:[
        'Huevo batido con una cucharada de leche.',
        '<b>SOLO la cara de arriba.</b> Ni un toque en los costados.',
        'Si el huevo chorrea por los lados, pasá el dedo y limpialo: donde toca, sella.'
      ]},

      ...PROCESOS.hornear({ temp:180, min:15, max:18, pieza:'55 g' }),
      ...PROCESOS.conservar(),

      { t:'tip', tt:'Cómo sabés que te salió', c:'Miralo <b>de costado</b> antes de comerlo. Tienen que verse las capas apiladas, y al levantarlo deben caer hojuelas sueltas en la bandeja. <b>Si el costado se ve liso y compacto, el laminado falló</b> — casi siempre por mantequilla demasiado blanda o por haberse saltado un paso por la nevera.' },
      { t:'nota', tt:'Volumen sobre margen', c:'Tiene el margen individual más bajo del catálogo pero <b>el volumen más alto</b>. La estrategia es producir en cantidad, no subir el precio unitario. Es el pan con el que se escala un negocio.' },
      { t:'tip', tt:'Por qué conviene aprenderlo después del mil hojas', c:'Es la misma técnica con menos vueltas. Si primero peleás con el mil hojas, <b>el criollito te va a salir fácil</b> — y no al revés. El criollito parece simple pero no es un pan de principiante.' },
      { t:'ilustra', items:[['mantequilla','Mantequilla fría'],['tijeras','Corte de un golpe'],['huevo','Huevo solo arriba'],['horno','180 °C']] }
    ]
  },

  /* ════════ 12 · Mil hojas andino ════════ */
  { tipo:"largo", titulo:"Mil hojas andino",
    lede:"La técnica más avanzada y el 70% de margen. Va al final por algo.",
    bloques:[

      { t:'rec', n:'Receta 12', c:'Mil hojas andino', lede:'La técnica más avanzada. No es para principiantes, y es el que justifica el precio más alto.' },
      { t:'foto', img:'pan-mil-hojas', pie:'Las capas separadas por vapor. Cada una es una vuelta de laminado.' },

      { t:'ficha', items:[
        ['Rinde','22 piezas de 100 g'],
        ['Trabajo activo','60 min'],
        ['Espera','3 h 23 a 3 h 57'],
        ['De principio a fin','4 h 23 a 4 h 57'],
        ['Horno','200-210 °C · 18-22 min'],
        ['Dificultad','Muy alta']
      ]},

      { t:'p', c:'Cuando lo dominás, es el producto que <b>ninguna panadería de tu ciudad puede igualar</b>. Es tu diferenciador máximo y el que convierte una panadería en destino: la gente maneja para venir a buscarlo.' },
      { t:'p', c:'Es también <b>el más rentable del catálogo, con 70% de margen</b>, y la razón es simple: el valor está en la técnica, no en el ingrediente. Harina, mantequilla y tiempo.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 2.230 g de masa · 22 piezas de 100 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal, en la masa',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Mantequilla fría, para laminar',150,'g']
        ]},
      { t:'nota', tt:'Tres vueltas, 50 g de mantequilla en cada una', c:'Los <b>150 g de mantequilla de laminar se reparten en tres vueltas, 50 g por vuelta</b>. No se ponen todos juntos: cada vuelta necesita su propia capa de grasa para separar las masas.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'Casi 5 horas, de las cuales <b>solo 1 hora es trabajo tuyo</b>. Es el pan que hay que planificar, no improvisar.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'A la nevera', min:30, max:30, d:'La masa base, fría pero manejable.' },
        { n:'Primera vuelta', min:10, max:10, d:'50 g de mantequilla, doblar en tres.' },
        { n:'Nevera', min:20, max:20, d:'20 minutos. Sin excepción.' },
        { n:'Segunda vuelta', min:10, max:10, d:'Otros 50 g, doblar en tres.' },
        { n:'Nevera', min:20, max:20, d:'20 minutos.' },
        { n:'Tercera vuelta', min:10, max:10, d:'Los últimos 50 g. Tres vueltas es el número.' },
        { n:'Nevera', min:20, max:20, d:'La última.' },
        { n:'Estirar y cortar', min:10, max:10, d:'Fino, con cortes limpios y sin arrastrar.' },
        { n:'Segunda fermentación', min:30, max:30, d:'Cubierto.' },
        { n:'Pintar', min:5, max:5, d:'Solo arriba.' },
        { n:'Hornear', min:18, max:22, d:'A <b>200-210 °C</b>, la más alta del catálogo. Y hay una razón.' }
      ]},

      ...PROCESOS.amasar(),
      ...PROCESOS.fermentar1(),

      { t:'h', c:'Proceso 3 · A la nevera — 30 minutos' },
      { t:'pasos', items:[
        'Aplastá la masa fermentada en un rectángulo y envolvela.',
        '<b>30 minutos de nevera.</b> Fría pero manejable, <b>no congelada</b>.',
        'Sacá la mantequilla de laminar para que llegue a <b>13-15 °C</b>.'
      ]},
      { t:'nota', tt:'La mantequilla a 13-15 °C', c:'Es el punto exacto: <b>ni muy blanda</b> (se absorbe en la masa y no crea capas) <b>ni muy dura</b> (rompe el gluten al laminar). A esa temperatura se dobla sin romperse ni chorrear. Sacala de la nevera unos 15 minutos antes de usarla.' },

      { t:'h', c:'Proceso 4 · Las tres vueltas — 90 minutos' },
      { t:'p', c:'Acá está el pan entero. <b>Tres vueltas</b>, cada una con 50 g de mantequilla y cada una seguida de 20 minutos de nevera. El frío entre vueltas no es opcional.' },
      { t:'pasos', items:[
        '<b>Primera vuelta:</b> estirá en rectángulo, untá <b>50 g de mantequilla fría</b> en láminas, doblá en tres como una carta. <b>A la nevera, 20 minutos.</b>',
        '<b>Segunda vuelta:</b> estirá otra vez, otros <b>50 g</b>, doblá en tres. <b>Nevera, 20 minutos.</b>',
        '<b>Tercera vuelta:</b> los últimos <b>50 g</b>, doblá en tres. <b>Nevera, 20 minutos.</b>',
        'Con tres vueltas ya tenés capas suficientes. Más vueltas no mejoran: <b>las capas se vuelven tan finas que se rompen</b> y el hojaldre se pierde.'
      ]},
      { t:'seq', titulo:'Una vuelta, movimiento por movimiento', items:[
        ['tec-lamin-1','<b>1 · La mantequilla fría</b>, en láminas sobre la masa estirada.'],
        ['tec-lamin-2','<b>2 · Doblar en tres</b>, como una carta.'],
        ['tec-lamin-3','<b>3 · Estirar de nuevo</b>, ya frío, para la vuelta siguiente.'],
        ['tec-lamin-4','<b>4 · Las capas.</b> Por el canto se ve todo lo que llevás construido.']
      ]},

      { t:'h', c:'Proceso 5 · Estirar y cortar — 10 minutos' },
      { t:'pasos', items:[
        '<b>Estirá fino</b> — bastante más fino que el criollito. Acá se buscan muchas capas delgadas, no un bloque grueso.',
        '<b>Cuchillo muy afilado, cortes limpios, sin arrastrar.</b> Arrastrar sella las capas y elimina el hojaldrado. Es el error número uno.',
        'Acomodá las piezas en la bandeja separadas.'
      ]},
      { t:'seq', titulo:'El estirado final y el resultado', items:[
        ['form-milhojas-1','<b>Fino y parejo.</b> Mucho más fino que el criollito.'],
        ['form-milhojas-2','<b>Así se ve por dentro cuando salió bien.</b> Decenas de capas separadas por el vapor.']
      ]},

      ...PROCESOS.fermentar2(30),

      { t:'h', c:'Proceso 7 · Pintar — 5 minutos' },
      { t:'pasos', items:[
        'Huevo batido con una cucharada de leche.',
        '<b>Solo la cara de arriba.</b> El huevo en los costados pega las capas y no abren.'
      ]},

      ...PROCESOS.hornear({ temp:'200-210', min:18, max:22, pieza:'100 g' }),
      ...PROCESOS.conservar(),

      { t:'tip', tt:'Por qué la temperatura más alta del catálogo', c:'El calor intenso <b>convierte el agua de la mantequilla en vapor instantáneo</b>, y ese vapor es lo que separa las capas. A temperatura baja las capas se funden entre sí en vez de separarse, y en lugar de hojaldre te queda un pan denso. Es el único pan del catálogo donde subir la temperatura es la técnica, no un riesgo.' },
      { t:'p', c:'<b>No necesitás más recetas. Necesitás dominar estas.</b> Cubren todo el espectro del mercado: las que dan rotación diaria (criollito, camaleón), las que dan margen (mil hojas, trenzado) y las que abren clientela (acema, pan de queso).' },
      { t:'nota', tt:'Antes de agregar un pan nuevo', c:'Preguntate cuál de estos doce todavía no vendés bien. <b>Casi siempre el crecimiento está en producir mejor lo que ya tenés</b>, no en sumar un producto más que nadie te pidió.' },
      { t:'sello', img:'pan', pie:'Doce recetas. Un negocio completo' }
    ]
  },

  /* ════════ 13 · Golfeado ════════
     INVESTIGADA: no estaba en el curso. Fuente principal Mapué
     Panadería Artesanal Venezolana (panaderiamapue.com), cruzada con
     Laylita y Comedera. La masa base es la del curso; el relleno, el
     melado y el horneado salen de la investigación. */
  { tipo:"largo", titulo:"Golfeado",
    lede:"Papelón y queso. El único pan donde el papelón se usa a la vista.",
    bloques:[

      { t:'rec', n:'Receta 13', c:'Golfeado', lede:'El rollo dulce venezolano, con papelón derretido y queso blanco rallado por encima.' },
      { t:'foto', img:'pan-golfeado', pie:'El papelón a la vista y el queso encima. Se sirve tibio, con el melado todavía líquido.' },

      { t:'ficha', items:[
        ['Rinde','23 golfeados de 90 g'],
        ['Trabajo activo','50 min'],
        ['Espera','2 h 40 a 3 h 15'],
        ['De principio a fin','3 h 55 a 4 h 35'],
        ['Horno','190 °C · 25-30 min'],
        ['Dificultad','Media']
      ]},

      { t:'nota', tt:'De dónde sale esta receta', c:'El golfeado <b>no viene en el curso</b>. La masa base es la del Módulo 1; el relleno, el melado de papelón y el horneado están tomados de <b>Mapué Panadería Artesanal Venezolana</b>, cruzados con Laylita y Comedera. Los números son de ellos, no inventados.' },

      { t:'p', c:'Es de los pocos panes donde <b>el papelón se usa a la vista</b> y no escondido en la masa. La combinación de dulce del papelón con la sal del queso blanco es la misma lógica del bocadillo con queso, y es lo que lo vuelve venezolano y no un simple rollo de canela.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 23 golfeados de 90 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina 000',1000,'g'],
          ['Talvina activa',300,'g'],
          ['Azúcar',220,'g'],
          ['Mantequilla sin sal',160,'g'],
          ['Leche tibia',160,'ml'],
          ['Huevo entero',150,'g'],
          ['Agua fría',80,'ml'],
          ['Sal',10,'g'],
          ['Papelón rallado, para el relleno',250,'g'],
          ['Queso blanco rallado, para el relleno',200,'g'],
          ['Anís en semilla',10,'g'],
          ['Canela en polvo',8,'g'],
          ['Papelón, para el melado',300,'g'],
          ['Agua, para el melado',135,'ml']
        ]},

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'<b>El melado se hace la noche anterior</b> y no cuenta en este reloj: tiene que estar frío cuando lo uses.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Primera fermentación', min:60, max:90, d:'Tapada, hasta doblar el volumen.' },
        { n:'Desgasificar', min:10, max:10, d:'Sin dividir: el rollo se hace entero.' },
        { n:'Reposo', min:10, max:15, d:'Cubierta, para que se deje estirar.' },
        { n:'Estirar, rellenar, enrollar y cortar', min:20, max:20, d:'Rectángulo de 35-40 × 25-30 cm, rodajas de 5 cm.' },
        { n:'Segunda fermentación', min:90, max:90, d:'<b>Hora y media</b>, bastante más que los otros panes.' },
        { n:'Hornear', min:25, max:30, d:'A <b>190 °C</b>, los primeros 10 minutos tapado.' }
      ]},

      ...PROCESOS.armar({
        pieza: '90 g por golfeado',
        antesAmasado: [
          { t:'h', c:'La noche anterior · El melado de papelón' },
          { t:'p', c:'Esto no se improvisa el mismo día: <b>el melado se prepara la noche anterior</b> para que esté frío y espeso cuando lo uses.' },
          { t:'pasos', items:[
            'Rallá <b>300 g de papelón</b> y ponelo en una olla con <b>135 ml de agua</b>.',
            'Agregá <b>una rama de canela</b> y una cucharada de <b>anís en semilla</b>.',
            'Fuego bajo, revolviendo, hasta que el papelón se disuelva del todo y el líquido espese.',
            'Colalo y dejalo <b>reposar toda la noche</b>. Al día siguiente estará espeso y listo para pintar.'
          ]},
          { t:'seq', titulo:'El melado', items:[
            ['tec-melado','<b>Papelón, agua, canela en rama y anís.</b> Fuego bajo hasta que espese, y a reposar toda la noche.']
          ]}
        ],
        formado: {
          titulo: 'Estirar, rellenar, enrollar y cortar — 20 minutos',
          p: 'El golfeado es un caracol como el de bocadillo, pero el relleno va <b>seco</b>: papelón rallado y queso, no una pasta.',
          pasos: [
            'Estirá la masa en un rectángulo de <b>35 a 40 cm de largo por 25 a 30 cm de ancho</b>.',
            'Repartí el <b>papelón rallado</b>, el <b>queso blanco rallado</b>, el <b>anís</b> y la <b>canela en polvo</b> sobre la masa.',
            'Dejá libres <b>dos o tres dedos</b> en el borde de arriba: ahí es donde después sella.',
            '<b>Enrollá apretado</b> desde el borde largo, con tensión pareja.',
            'Sellá la costura y <b>cortá rodajas de 5 cm de ancho</b>.',
            'Acomodalas acostadas en la bandeja, con la espiral hacia arriba.'
          ],
          seqTitulo: 'El golfeado, paso a paso',
          seq: [
            ['paso-golfeados-1','<b>1 · La masa estirada</b>, en rectángulo parejo.'],
            ['paso-golfeados-2','<b>2 · El relleno.</b> Papelón rallado, queso, anís y canela.'],
            ['paso-golfeados-3','<b>3 · Enrollar</b> apretado desde el borde largo.'],
            ['paso-golfeados-4','<b>4 · Cortar</b> rodajas de 5 cm.'],
            ['paso-golfeados-5','<b>5 · A la bandeja</b>, con la espiral hacia arriba.'],
            ['paso-golfeados-6','<b>6 · Horneados</b> y pintados con melado.']
          ]
        },
        reposo2: 90,
        acabado: {
          titulo: 'Tener el melado listo — 2 minutos',
          p: 'Acá no se pinta con huevo. <b>Se pinta con melado, y durante el horneado</b>, no antes.',
          pasos: [
            'Sacá el melado de la noche anterior y tenelo al lado del horno, con una brocha.',
            'Los golfeados entran al horno <b>sin pintar</b>.'
          ]
        },
        horno: { temp:190, min:25, max:30, extra:[
          '<b>Los primeros 10 minutos, tapá la bandeja</b> con papel aluminio: así el golfeado sube antes de que el papelón empiece a quemarse.',
          '<b>Destapá y pintá con melado cada 5 minutos</b> hasta el final. Cada capa que agregás es una capa más de brillo.'
        ]},
        trasHornear: [
          { t:'nota', tt:'Se come tibio', c:'El golfeado <b>se sirve tibio, con el papelón todavía líquido</b>. Frío pierde la mitad de la gracia — y eso también manda sobre cómo lo vendés: horneá tandas chicas y seguidas, no una sola tanda grande a primera hora.' }
        ]
      })
    ]
  },

  /* ════════ 14 · Quesadilla andina ════════
     INVESTIGADA: no estaba en el curso. Fuente: Mapa de Panes
     Venezolanos (panesvenezolanos.com), receta de La Grita. Los
     gramos originales son para 10 piezas (760 g de masa); acá están
     escalados a kilo de harina para que cuadren con el resto. */
  { tipo:"largo", titulo:"Quesadilla andina",
    lede:"El disco con baranda y cinco pellizcos. De La Grita, en los Andes.",
    bloques:[

      { t:'rec', n:'Receta 14', c:'Quesadilla andina', lede:'Un pan abierto con el borde levantado y la crema de queso a la vista en el centro.' },
      { t:'foto', img:'pan-quesadilla-andina', pie:'El disco con su baranda y los cinco pellizcos. El queso sube y se dora arriba.' },

      { t:'ficha', items:[
        ['Rinde','24 piezas de 76 g'],
        ['Trabajo activo','50 min'],
        ['Espera','2 h 10'],
        ['De principio a fin','3 h'],
        ['Horno','180 °C · 20 min'],
        ['Dificultad','Media']
      ]},

      { t:'nota', tt:'De dónde sale esta receta', c:'La quesadilla <b>no viene en el curso</b>. Está tomada del <b>Mapa de Panes Venezolanos</b>, que documenta la receta de <b>La Grita</b> — el pueblo tachirense de donde es originaria. Ahí dice textual: <i>«En La Grita se hace el disco y se pellizca cinco (5) veces»</i>. Los gramos originales son para 10 piezas; acá están escalados a kilo de harina.' },

      { t:'p', c:'Es de las piezas más representativas de la repostería criolla andina: masa tierna apenas perfumada, y en el centro una <b>crema de queso blanco con huevo y azúcar</b> que sube y se dora en el horno.' },
      { t:'nota', tt:'Esta lleva levadura, no talvina', c:'A diferencia de los doce panes tachirenses del catálogo, <b>la quesadilla se hace con levadura</b>. Es otra familia: no es un pan de talvina, es repostería. Si querés hacerla con talvina, reemplazá los 10 g de levadura por 300 g de talvina activa y contá con que la fermentación se va a ir bastante más larga.' },

      { t:'escala', titulo:'La masa, para la tanda que vayas a hacer',
        base:'1 kg de harina · 1.840 g de masa · 24 piezas de 76 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina panadera',1000,'g'],
          ['Agua',350,'ml'],
          ['Azúcar',150,'g'],
          ['Huevo entero',100,'g'],
          ['Mantequilla sin sal',100,'g'],
          ['Leche en polvo',50,'g'],
          ['Leche condensada',50,'g'],
          ['Levadura instantánea',10,'g'],
          ['Sal',10,'g'],
          ['Miel',10,'g'],
          ['Vainilla',10,'g']
        ]},
      { t:'escala', titulo:'El relleno de queso, para la misma tanda',
        base:'1.335 g de crema · 55 g por pieza',
        tandas:[1,2,5,10,20],
        items:[
          ['Queso blanco rallado',940,'g'],
          ['Azúcar',140,'g'],
          ['Leche en polvo',95,'g'],
          ['Huevo entero',95,'g'],
          ['Miel',45,'g'],
          ['Vainilla',20,'g']
        ]},
      { t:'nota', tt:'La proporción por pieza', c:'<b>76 g de masa y 55 g de crema de queso</b> en cada quesadilla. El relleno pesa casi tanto como la masa, y por eso el disco tiene que quedar bien fino: si la masa es gruesa, la pieza queda pesada y el queso deja de ser el protagonista.' },

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'La fermentación final es larga — <b>90 minutos</b> — y con la pieza ya rellena.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Reposo', min:10, max:10, d:'Tapada, para que el gluten se relaje.' },
        { n:'Sobar y reposar', min:5, max:5, d:'Estirar y plegar sobre sí misma.' },
        { n:'Dividir', min:10, max:10, d:'Piezas de 76 g, con báscula.' },
        { n:'Preformado', min:10, max:10, d:'Bolitas cubiertas, hasta que se relajen.' },
        { n:'Formar y rellenar', min:15, max:15, d:'El disco, la baranda, la crema y los cinco pellizcos.' },
        { n:'Fermentación final', min:90, max:90, d:'Ya rellenas, a <b>22-26 °C</b> de ambiente.' },
        { n:'Hornear', min:20, max:20, d:'A <b>180 °C</b>.' }
      ]},

      { t:'h', c:'Proceso 1 · Preparar la crema de queso' },
      { t:'pasos', items:[
        'Rallá el queso blanco fino.',
        'Mezclalo con el <b>azúcar, la leche en polvo, el huevo, la miel y la vainilla</b> hasta formar una crema pareja.',
        'Tiene que quedar <b>cremosa pero no líquida</b>: si escurre, se sale del disco en el horno.'
      ]},

      ...PROCESOS.amasar(),
      ...PROCESOS.fermentar1(true),

      { t:'h', c:'Proceso 3 · Dividir y preformar — 20 minutos' },
      { t:'pasos', items:[
        'Dividí en piezas de <b>76 g</b>, con báscula.',
        'Boleá cada una <b>sin apretar</b>, con la mano ahuecada.',
        'Cubrilas y dejalas <b>10 minutos</b>, hasta que estén relajadas y no se encojan al estirarlas.'
      ]},
      { t:'seq', titulo:'El preformado', items:[
        ['tec-bolleo-1','<b>La cúpula.</b> La mano ahuecada encima.'],
        ['tec-preformadas','<b>Cubiertas y a descansar</b>, 10 minutos.']
      ]},

      { t:'h', c:'Proceso 4 · El disco, la baranda y los cinco pellizcos — 15 minutos' },
      { t:'p', c:'Acá está toda la identidad de la pieza. Y el número no es decorativo: <b>en La Grita son cinco pellizcos</b>, ni cuatro ni seis.' },
      { t:'pasos', items:[
        '<b>Estirá cada bolita con rodillo</b> hasta dejarla como un disco fino, de menos de 1 cm.',
        'Pasala a la bandeja.',
        '<b>Presioná el centro con los dedos</b>, dejando un borde levantado alrededor: eso es la <b>baranda</b>, y es lo que después contiene el queso.',
        'Poné <b>55 g de la crema de queso</b> en el hueco del centro.',
        '<b>Hacé cinco pellizcos</b> en el borde, repartidos alrededor. Al hornearse abren y arman la forma de estrella.',
        'Opcional: una franja de <b>bocadillo o jalea de guayaba</b> al lado del queso.'
      ]},
      { t:'seq', titulo:'La quesadilla, movimiento por movimiento', items:[
        ['form-quesadilla-1','<b>1 · El disco.</b> Estirado con rodillo, fino y parejo.'],
        ['form-quesadilla-2','<b>2 · La baranda.</b> Presionás el centro y dejás el borde levantado.'],
        ['form-quesadilla-3','<b>3 · La crema.</b> 55 g en el hueco del centro.'],
        ['form-quesadilla-4','<b>4 · Los cinco pellizcos.</b> Repartidos en el borde. Cinco, no cuatro.']
      ]},

      { t:'h', c:'Proceso 5 · Fermentación final — 90 minutos' },
      { t:'pasos', items:[
        'Cubrí las bandejas sin que el paño toque la crema.',
        '<b>90 minutos</b>, con el ambiente entre <b>22 y 26 °C</b>.',
        'Precalentá el horno en la última media hora.'
      ]},

      ...PROCESOS.hornear({ temp:180, min:20, max:20, pieza:'76 g' }),
      ...PROCESOS.conservar(),

      { t:'nota', tt:'El queso es el protagonista visual', c:'Es <b>la única pieza del catálogo donde el relleno se ve desde arriba</b> y se dora a la vista. Por eso la baranda tiene que quedar bien marcada: si se aplasta, el queso se desparrama y la pieza pierde la forma de estrella.' }
    ]
  },

  /* ════════ 15 · Pan de banquete ════════
     INVESTIGADA: no estaba en el curso. Fuente: Mapa de Panes
     Venezolanos (panesvenezolanos.com). Gramos originales para 16
     panes de 31 g; escalados acá a kilo de harina. */
  { tipo:"largo", titulo:"Pan de banquete",
    lede:"Los panecitos de la mesa. Forma de aceituna y se hornean pegados.",
    bloques:[

      { t:'rec', n:'Receta 15', c:'Pan de banquete', lede:'Panecitos chicos y alargados, gordos en el centro, que van a la mesa en canasta.' },
      { t:'foto', img:'pan-pan-de-banquete', pie:'Gordos en el centro y afinados en las puntas. No son redondos.' },

      { t:'ficha', items:[
        ['Rinde','54 panes de 31 g'],
        ['Trabajo activo','55 min'],
        ['Espera','1 h 30'],
        ['De principio a fin','2 h 40 a 2 h 45'],
        ['Horno','180 °C · 15-20 min'],
        ['Dificultad','Baja']
      ]},

      { t:'nota', tt:'De dónde sale esta receta', c:'El pan de banquete <b>no viene en el curso</b>. Está tomado del <b>Mapa de Panes Venezolanos</b>, que lo documenta con gramos exactos para 16 panes de 31 g; acá están escalados a kilo de harina. La fuente aclara algo que se malinterpreta seguido: <i>«Los panes son gordos en el centro y alargados. No son redondos.»</i>' },

      { t:'p', c:'Es el pan de acompañar: va a la mesa en canasta, para la sopa o para el plato fuerte. <b>Se vende por bolsa, nunca por unidad</b>, y su mercado son los eventos, los restaurantes y las casas que reciben visita.' },
      { t:'nota', tt:'Este también lleva levadura', c:'Como el resto de los salados, el banquete <b>se hace con levadura</b> y no con talvina. Es una masa magra y sencilla: casi no tiene azúcar ni grasa comparada con los panes dulces del Táchira.' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 1.690 g de masa · 54 panes de 31 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina panadera',1000,'g'],
          ['Agua',500,'ml'],
          ['Azúcar',50,'g'],
          ['Grasa (mantequilla o manteca)',50,'g'],
          ['Huevo batido',50,'g'],
          ['Sal',20,'g'],
          ['Levadura instantánea',10,'g'],
          ['Leche en polvo',10,'g']
        ]},

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'Es el más rápido de todo el catálogo, y el más fácil de producir en cantidad.', items:[
        { n:'Amasar', min:20, max:20, d:'Hasta la ventana de gluten.' },
        { n:'Reposo', min:10, max:10, d:'Tapada.' },
        { n:'Sobar y reposar', min:20, max:20, d:'Dos ciclos de estirado y plegado, con 10 min entre uno y otro.' },
        { n:'Dividir', min:10, max:10, d:'Piezas de 31 g, con báscula.' },
        { n:'Preformado', min:10, max:10, d:'Bolitas cubiertas, 10 minutos.' },
        { n:'Formar', min:15, max:15, d:'El doblado "como cuaderno".' },
        { n:'Fermentación final', min:60, max:60, d:'Una hora, con el ambiente entre <b>24 y 27 °C</b>.' },
        { n:'Hornear', min:15, max:20, d:'A <b>180 °C</b>. Sin dorarlos de más.' }
      ]},

      ...PROCESOS.amasar(),
      ...PROCESOS.fermentar1(true),

      { t:'h', c:'Proceso 3 · Dividir y preformar — 20 minutos' },
      { t:'pasos', items:[
        'Dividí en piezas de <b>31 g</b>, con báscula. Son chicas: a ojo salen dispares y se nota mucho.',
        'Boleá cada una sin apretar.',
        'Cubrilas <b>10 minutos</b> hasta que se relajen.'
      ]},

      { t:'h', c:'Proceso 4 · El formado "como cuaderno" — 15 minutos' },
      { t:'p', c:'La forma es de <b>aceituna</b>: gorda en el centro y afinada en las puntas. Se consigue con un doblado en dos tiempos, no boleando.',
      },
      { t:'pasos', items:[
        'Aplaná cada bolita en un <b>círculo de unos 10 cm</b>.',
        '<b>Doblá la parte de arriba hacia el centro</b> y cerrá el borde con los dedos, presionando.',
        '<b>Doblá la parte de abajo hacia el centro</b> y cerrá otra vez.',
        '<b>Uní los dos lados</b> y sellá a lo largo.',
        'Rodá apenas con las palmas para afinar las puntas. El centro queda más gordo: esa es la forma de aceituna.'
      ]},
      { t:'seq', titulo:'El doblado, paso a paso', items:[
        ['form-banquete-1','<b>1 · El círculo.</b> Aplanado, de unos 10 cm.'],
        ['form-banquete-2','<b>2 · Doblar y cerrar.</b> Arriba al centro, después abajo al centro.'],
        ['form-banquete-3','<b>3 · La forma de aceituna.</b> Gordos en el centro, afinados en las puntas.']
      ]},

      ...PROCESOS.fermentar2(60),

      { t:'h', c:'Proceso 7 · Pintar — 3 minutos' },
      { t:'pasos', items:[
        'Huevo batido, con brocha suave.',
        '<b>Sin cortes.</b> Este pan va liso.'
      ]},

      ...PROCESOS.hornear({ temp:180, min:15, max:20, pieza:'31 g' }),
      ...PROCESOS.conservar(),

      { t:'nota', tt:'No los dores de más', c:'Es el error más común con este pan: <b>si se doran demasiado quedan secos</b>. Son piezas chicas y se pasan rápido. Sacalos apenas tomen color, y dejalos enfriar <b>al menos 20 minutos</b> antes de embolsar.' },
      { t:'tip', tt:'Las zonas blancas no son un defecto', c:'Los costados pálidos son donde se despegaron unos de otros al salir del horno. <b>Eso es la señal de que se hornearon juntos</b>, que es como corresponde en este pan.' }
    ]
  },

  /* ════════ 16 · Pan español ════════
     INVESTIGADA: no estaba en el curso. Es el PAN CAMPESINO, de
     origen español. Fuente: Mapa de Panes Venezolanos
     (panesvenezolanos.com) y la fórmula de Sabores Venezolanos.
     Gramos originales sobre 565 g de harina; escalados a kilo. */
  { tipo:"largo", titulo:"Pan español",
    lede:"El campesino de costra dura. Otra familia: magro, con vapor y sin talvina.",
    bloques:[

      { t:'rec', n:'Receta 16', c:'Pan español', lede:'De costra dura y miga blanca. El pan salado que también se hace en el Táchira.' },
      { t:'foto', img:'pan-pan-espanol', pie:'Corteza fina y seca, con la hendidura que lo abre en dos lomos.' },

      { t:'ficha', items:[
        ['Rinde','3 panes de 474 g'],
        ['Trabajo activo','60 min'],
        ['Espera','2 h 30 a 3 h'],
        ['De principio a fin','4 h 10 a 4 h 45'],
        ['Horno','220 °C con vapor, luego 180 °C'],
        ['Dificultad','Media alta. El vapor es la técnica']
      ]},

      { t:'nota', tt:'De dónde sale esta receta', c:'El pan español <b>no viene en el curso</b>. Investigándolo se confirma que es el <b>pan campesino</b>, de origen español: la fuente tachirense lo dice — <i>«en el Táchira también se prepara pan salado, español, campesino o francés, aunque la especialidad es el pan dulce»</i>. La fórmula está tomada del <b>Mapa de Panes Venezolanos</b> y de Sabores Venezolanos, escalada a kilo de harina.' },

      { t:'p', c:'Es el formato pequeño de la familia de costra dura. <b>Se come el mismo día:</b> al segundo día ya perdió el crujido, que es todo su encanto. La miga blanca que se ve en la hendidura es la señal de que está bien fermentado.' },
      { t:'nota', tt:'Este es otro pan, y conviene saberlo', c:'No es un pan tachirense dulce. Es una <b>masa magra</b>, con levadura, poca azúcar y poca grasa, hidratada entre el <b>55 y el 65%</b>. Todo lo que aprendiste con el camaleón sirve para amasar, pero <b>el horneado es otro mundo: acá manda el vapor.</b>' },

      { t:'escala', titulo:'Los gramos, para la tanda que vayas a hacer',
        base:'1 kg de harina · 1.675 g de masa · 3 panes de 474 g',
        tandas:[1,2,5,10,20],
        items:[
          ['Harina panadera',1000,'g'],
          ['Agua',550,'ml'],
          ['Grasa',50,'g'],
          ['Azúcar',48,'g'],
          ['Sal',19,'g'],
          ['Levadura instantánea',9,'g']
        ]},

      { t:'h', c:'Cuánto tarda y cuánto de eso es esperar' },
      { t:'linea', nota:'La maduración es larguísima comparada con los dulces: <b>dos horas y media a tres</b>, hasta que dupliquen.', items:[
        { n:'Amasar y sobar', min:20, max:20, d:'Hasta la ventana de gluten, con reposos de 10 min.' },
        { n:'Reposos del sobado', min:20, max:20, d:'Dos ciclos de estirado y plegado.' },
        { n:'Dividir', min:10, max:10, d:'Piezas de 474 g, con báscula.' },
        { n:'Preformado', min:10, max:10, d:'Boleado suave, cubierto.' },
        { n:'Formar', min:10, max:10, d:'Hogaza o barra, con tensión en la superficie.' },
        { n:'Maduración', min:150, max:180, d:'<b>Hasta que dupliquen.</b> El tiempo depende del día.' },
        { n:'Hornear', min:30, max:35, d:'<b>220 °C con vapor 10 min</b>, después 180 °C.' }
      ]},

      ...PROCESOS.amasar(),
      ...PROCESOS.fermentar1(true),

      { t:'h', c:'Proceso 3 · Dividir y preformar — 20 minutos' },
      { t:'pasos', items:[
        'Dividí en piezas de <b>474 g</b>, con báscula.',
        'Preformá en bola suave, sin tensión.',
        'Cubrí y dejá <b>10 minutos</b> hasta que se relajen.'
      ]},

      { t:'h', c:'Proceso 4 · Formar — 10 minutos' },
      { t:'p', c:'Este pan no lleva molde ni relleno: <b>toda su forma la sostiene la tensión de la superficie</b>. Si la tensión es floja, se desparrama en la bandeja.' },
      { t:'pasos', items:[
        '<b>Para hogaza:</b> boleá generando tensión, girando la masa contra la mesa hasta que la superficie quede tirante.',
        '<b>Para barra:</b> estirá en rectángulo con el rodillo y enrollá apretado, sellando la costura.',
        'Poné en bandeja y cubrí.'
      ]},
      { t:'seq', titulo:'El formado', items:[
        ['form-espanol-1','<b>Tensión en la superficie.</b> Es lo único que sostiene la forma.']
      ]},

      { t:'h', c:'Proceso 5 · Maduración — 2 h 30 a 3 h' },
      { t:'pasos', items:[
        'Dejá los panes cubiertos <b>hasta que dupliquen</b> — dos horas y media a tres, según la temperatura del día.',
        '<b>Precalentá el horno a 240 °C</b> con una bandeja metálica vacía en el piso del horno. Va a servir para el vapor.'
      ]},

      { t:'h', c:'Proceso 6 · Rociar y cortar — 5 minutos' },
      { t:'pasos', items:[
        '<b>Rociá agua</b> sobre cada pan con un pulverizador.',
        'Hacé <b>tres cortes en la dirección del pan</b>, y que cada corte <b>se solape un tercio con el anterior</b>.',
        '<b>Nunca cortes transversales</b> que atraviesen el pan de lado a lado: ahí se abre mal y pierde la forma.'
      ]},
      { t:'seq', titulo:'Los cortes solapados', items:[
        ['form-espanol-2','<b>Solapando un tercio.</b> En la dirección del pan, nunca cruzados.']
      ]},

      { t:'h', c:'Proceso 7 · El vapor — los primeros 10 minutos' },
      { t:'p', c:'Acá está la diferencia entre este pan y todos los demás del catálogo. <b>Sin vapor no hay costra.</b>' },
      { t:'pasos', items:[
        '<b>Bajá el horno a 220 °C</b> y meté la bandeja de panes.',
        '<b>Tirá tres hielos en la bandeja del piso</b> y cerrá la puerta rápido.',
        'Dejá el vapor adentro <b>10 minutos</b>. El vapor mantiene la superficie húmeda para que el pan siga creciendo antes de que se forme la costra.',
        '<b>Abrí con cuidado y dejá escapar el vapor.</b> Bajá a <b>180 °C</b>.'
      ]},
      { t:'seq', titulo:'El vapor', items:[
        ['form-espanol-3','<b>Agua en la bandeja del piso.</b> Diez minutos de vapor, y después se libera.']
      ]},

      ...PROCESOS.hornear({ temp:180, min:20, max:25, pieza:'474 g', interna:'93 °C', extra:[
        'Estos 20 a 25 minutos van <b>después</b> de los 10 minutos de vapor a 220 °C.'
      ]}),

      { t:'nota', tt:'Este va a 93 °C por dentro, no a 88', c:'Los panes dulces del catálogo están listos entre 88 y 92 °C. <b>El campesino necesita llegar a 93 °C</b> porque es una masa magra y más hidratada: con menos temperatura, la miga queda gomosa aunque la corteza esté perfecta.' },

      ...PROCESOS.conservar(),

      { t:'nota', tt:'Dejalo enfriar una hora entera', c:'Con este pan el enfriado <b>es parte de la cocción</b>: la miga termina de asentarse fuera del horno. Si lo cortás caliente, se apelmaza. Una hora en rejilla, mínimo.' }
    ]
  }


  ]
};
