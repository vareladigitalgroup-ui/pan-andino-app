/* ══════════════════════════════════════════════════════════════
   EL CATÁLOGO DE PANES
   Cada uno con su descripción real y el enlace a dónde está
   su receta. Los datos salen del Módulo 6 del curso.
   ══════════════════════════════════════════════════════════════ */

window.PANES = [
  { img:'pan-camaleon', n:'Camaleón', k:'El rey del Táchira',
    d:'El más famoso de todos. El primero que piden los que llegan y el que más extrañan los que se van.',
    t:'Su nombre viene de que se adapta: puede ser más dulce, más azucarado, con ajonjolí, pero siempre se reconoce por la forma alargada y los cortes diagonales que abren en el horno como escamas. Nació en las panaderías de La Concordia.',
    dato:'Cortes a 45°, de 1 cm exacto. Demasiado recto no abre; demasiado inclinado desgarra.',
    ir:'m4', sec:1 },

  { img:'pan-pan-azucarado', n:'Pan azucarado', k:'La costra que enamora',
    d:'Se vende por la vista antes que por el sabor. Es el camaleón en su versión más festiva.',
    t:'La costra brillante de azúcar caramelizado detiene a cualquiera frente al mostrador. El resultado correcto es el contraste: corteza crocante por fuera, miga suave y húmeda por dentro.',
    dato:'El azúcar va DESPUÉS del pintado con huevo y justo antes del horno. Antes del reposo, absorbe humedad y no carameliza.',
    ir:'m4', sec:2 },

  { img:'pan-acema-bocadillo-queso', n:'Acema de bocadillo y queso', k:'La joya',
    d:'Dulce del bocadillo, sal del queso, y la masa especiada abajo. Tres cosas que juntas son perfectas.',
    t:'La acema sola es el pan de las fiestas: canela, anís estrellado y pimienta guayabita. Con bocadillo y queso se vuelve identidad culinaria venezolana pura.',
    dato:'La proporción que no se enseña: 60% bocadillo, 40% queso. Más bocadillo aplasta el queso; más queso satura de sal.',
    ir:'m4', sec:5 },

  { img:'pan-pan-de-queso', n:'Pan de queso', k:'El del desayuno',
    d:'En Venezuela el desayuno sin pan de queso está incompleto. Y es el que más piden las cafeterías para revender.',
    t:'La versión andina tiene identidad propia: masa más dulce que en otras regiones, queso integrado adentro y queso gratinado encima que crea una capa dorada impresionante.',
    dato:'Un cliente de cafetería te compra 50 panes por semana. Ese es el negocio de este pan.',
    ir:'m4', sec:6 },

  { img:'pan-bolitas-de-leche', n:'Bolitas de leche', k:'La miga más suave',
    d:'La miga más tierna y más blanca del catálogo. El que hace que pregunten "¿qué le pusiste?".',
    t:'Su mercado es específico y fiel: familias con niños chiquitos, adultos mayores, y el mercado de regalos. En una caja bonita es el detalle perfecto para llevar de visita.',
    dato:'No lleva nada de agua: los 200 ml son todos de leche. Más 30 g de leche en polvo, que actúa de suavizante natural.',
    ir:'m4', sec:7 },

  { img:'pan-pan-de-dios', n:'Pan de dios', k:'El más fotogénico',
    d:'Leche condensada y coco tostado. El que más llama la atención en fotos.',
    t:'El coco tostado dorado sobre la superficie hace que la gente pare el scroll en Instagram. Es el pan que mejor funciona en redes de todo el catálogo.',
    dato:'Coco SECO, nunca fresco. El fresco se quema en los bordes antes de dorarse en el centro.',
    ir:'m4', sec:8 },

  { img:'pan-pinita', n:'Piñita', k:'La forma que detiene miradas',
    d:'No se come sola: se regala, se fotografía y se lleva de recuerdo.',
    t:'Su patrón se hace con tijeras, y es el producto con más potencial para el turismo gastronómico tachirense. Durante el horneado los cortes se abren solos y revelan el dibujo de piña.',
    dato:'El patrón va en filas: 3 cortes, 2 desplazados, 3 cortes. Cada uno penetra 1,5 cm. Menos no abre; más colapsa la pieza.',
    ir:'m4', sec:9 },

  { img:'pan-trenza-azucarada', n:'Trenza azucarada', k:'La técnica que impresiona',
    d:'El paso que más miedo da a los panaderos nuevos. Y es mucho más simple de lo que parece.',
    t:'Una vez que dominas la trenza no paras de hacerla, porque el efecto en el cliente es inmediato: "¿cómo hiciste eso?". Es el segundo pan más rentable del catálogo, con 67%.',
    dato:'Siempre se empieza desde el centro hacia los extremos, no desde una punta. Así la tensión se reparte pareja.',
    ir:'m4', sec:3 },

  { img:'pan-criollito', n:'Criollito', k:'El más vendido',
    d:'El de mayor volumen de ventas de La Concordia. El que compra 1 camaleón compra 6 criollitos.',
    t:'No es un bollito redondo: es un hojaldre cortado en cuadros. Se reconoce por el costado, donde se ven las capas apiladas, y porque al partirlo suelta hojuelas. Por arriba va dorado del huevo; por los lados queda pálido, porque ahí no se pinta.',
    dato:'El corte va de un solo golpe seco hacia abajo. Si arrastras el cuchillo sellas los costados y el hojaldre no abre.',
    ir:'m4', sec:11 },

  { img:'pan-bolitas-queso-bocadillo', n:'Bolitas de queso y bocadillo', k:'El caracol',
    d:'El pan que más se viraliza en TikTok. El corte que revela la espiral de bocadillo genera miles de vistas.',
    t:'A 170 °C el bocadillo carameliza desde adentro del caracol hacia afuera. Los bordes exteriores de la espiral quedan casi transparentes. Es el efecto visual más potente de todo el catálogo.',
    dato:'Se corta con hilo de cocina, no con cuchillo: el hilo no aplasta el rollo y la espiral queda perfecta.',
    ir:'m4', sec:10 },

  { img:'pan-mil-hojas', n:'Mil hojas andino', k:'El más rentable',
    d:'La técnica más avanzada. No es para principiantes, y es el que justifica el precio más alto.',
    t:'Cuando lo dominas, es el producto que ninguna panadería de tu ciudad puede igualar. Es el diferenciador máximo y el que convierte una panadería en destino. 70% de margen.',
    dato:'Se hornea a 200–210 °C, más alto que todo el resto. El calor convierte el agua de la mantequilla en vapor instantáneo, y ese vapor es lo que separa las capas.',
    ir:'m4', sec:12 },

  { img:'pan-golfeado', n:'Golfeado', k:'Papelón y queso',
    d:'El rollo dulce venezolano, con papelón derretido y queso blanco rallado por encima.',
    t:'Es de los pocos panes donde el papelón se usa a la vista y no escondido en la masa. La combinación de dulce del papelón con la sal del queso blanco es la misma lógica del bocadillo con queso.',
    dato:'Se sirve tibio, con el papelón todavía líquido. Frío pierde la mitad de la gracia.',
    ir:'m4', sec:13 },

  { img:'pan-quesadilla-andina', n:'Quesadilla andina', k:'Cinco puntas',
    d:'Un pan abierto con cinco puntas de masa alrededor y el queso cremoso a la vista en el centro.',
    t:'La masa se pliega en puntas gruesas hacia el centro dejando un cuenco que se rellena de queso, y al lado una franja de bocadillo. Barnizada con huevo, queda brillante y dorada.',
    dato:'El queso sube al hornear y se dora arriba. Es la única pieza del catálogo donde el relleno es el protagonista visual.',
    ir:'m4', sec:14 },

  { img:'pan-pan-canilla', n:'Pan canilla', k:'El de la sopa',
    d:'No hay panadería en Venezuela que no lo venda. Es el pan del queso, del jamón y de la sopa.',
    t:'Se llama así por las canillas: las piernas largas y flacas. Mide entre 45 y 50 cm y desciende de la baguette francesa, pero no es una baguette: lleva azúcar y grasa, y por eso la corteza es más suave.',
    dato:'Es de costra dura y enharinado. Los cortes van montados uno sobre otro como tejas, nunca atravesados.',
    ir:'g1', sec:1 },

  { img:'pan-pan-espanol', n:'Pan español', k:'De costra dura',
    d:'Panecitos ovalados de corteza fina y seca, con la hendidura a lo largo que los abre en dos lomos.',
    t:'Es el formato pequeño de la familia de costra dura. Se come el mismo día: al segundo día ya perdió el crujido, que es todo su encanto.',
    dato:'La miga blanca que se ve en la hendidura es la señal de que está bien fermentado.',
    ir:'m4', sec:16 },

  { img:'pan-pan-de-banquete', n:'Pan de banquete', k:'Para la mesa',
    d:'Panecitos chicos y ovalados, lisos y pálidos, que se hornean pegados unos con otros.',
    t:'Es el pan de acompañar: va a la mesa en canasta, para la sopa o para el plato fuerte. Se vende por bolsa, nunca por unidad.',
    dato:'Las zonas blancas de los costados son donde se despegaron unos de otros al salir del horno. Eso no es un defecto: es la señal de que se hornearon juntos.',
    ir:'m4', sec:15 },

  /* "Pan andino" y "camaleón" son EL MISMO PAN, con dos nombres.
     Lo confirman panesvenezolanos.com ("Esta es la receta original de
     los Panes Andinos, ahora Pan Tachirense", en la ficha del pan
     camaleón) y enharinado.com, que lo titula "Pan andino o camaleón".
     Por eso este apunta a la receta 1 y no tiene una propia. */
  { img:'pan-pan-andino-tradicional', n:'Pan andino tradicional', k:'El de siempre',
    d:'La pieza grande y sencilla de la panadería andina, con su corte al medio a lo largo.',
    t:'Es el pan de todos los días de la región, sin adornos ni relleno. El que se compra sin pensarlo y el que mide de verdad si una panadería sabe lo que hace. <b>Ojo: «pan andino» y «camaleón» son el mismo pan, con dos nombres</b> — por eso este botón te lleva a la receta del camaleón.',
    dato:'Sin relleno ni cobertura, no hay dónde esconderse: la calidad de la masa queda a la vista.',
    ir:'m4', sec:1 }
];
