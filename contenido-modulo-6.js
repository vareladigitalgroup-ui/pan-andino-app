/* MÓDULO 6 · Tu Negocio
   Reescrito al formato largo: 6 secciones para leer de corrido.
   Fuente: MÓDULOS 8 y 9 del curso (82 KB entre los dos) fundidos con
   los BONOS 2, 7 y 8, que repetían el mismo contenido.
   ⚠ La versión anterior estaba escrita en VOSEO ARGENTINO ("vos
   decides", "si lo cobras", "tienes"). Reescrita completa en el
   español del comprador venezolano: se tutea. */

window.MODULO_6 = {
  id: 'm6',
  tapa: '6-TU-NEGOCIO',
  kicker: 'Módulo 6',
  nombre: 'Tu Negocio',
  sub: 'Calcula el precio, cobra bien y consigue clientes fijos',
  promesa: 'No es el mejor pan el que más vende. Es el que más gente conoce.',

  secciones: [

  /* ════════ 1 ════════ */
  { tipo:'largo', titulo:'El precio, sin engañarte',
    lede:'El error más caro no es de horno. Es de precio. Y casi nadie lo ve a tiempo.',
    bloques:[
      
      { t:'p', c:'<b>Bajar el precio no atrae mejores clientes.</b> Atrae clientes que no valoran tu trabajo, que negocian cada centavo y que se van con el primero que aparezca más barato. El precio bajo te destruye el margen, la energía y el negocio.' },
      { t:'p', c:'El pensamiento que más sabotea al panadero venezolano es <i>«¿quién va a pagar eso por mi pan?»</i>. Y la respuesta está a la vista: hay panaderos tachirenses en San Cristóbal, Mérida y Caracas cobrando precios premium <b>con lista de espera</b>. No por suerte, sino porque decidieron que su pan valía lo que cuesta hacerlo bien.' },
      { t:'nota', tt:'El cambio de empleado a dueño empieza aquí', c:'Tu pan vale lo que tú decides que vale. <b>Si lo regalas, la gente cree que no vale nada. Si lo cobras bien, la gente cree que es especial.</b> Y tiene razón: es especial.' },

      { t:'h', c:'Los costos que siempre se olvidan' },
      { t:'seq', titulo:"La cuenta, con todo adentro", items:[["neg-costos","<b>Balanza, libreta y calculadora.</b> El precio sale de pesar, no de calcular a ojo."]] },
      { t:'p', c:'La mayoría cobra mal por una razón simple: <b>suma los ingredientes, divide entre los panes que salieron y le pone precio</b>. Pero eso es apenas una parte de lo que cuesta producir cada unidad. Los costos invisibles son los que arruinan el negocio sin que nadie los vea.' },
      { t:'lista', items:[
        ['Los directos, los obvios','Ingredientes de cada pan. Empaque: bolsas, cajas, etiquetas. Gas o electricidad por tanda.'],
        ['Tu tiempo','<b>El costo-hora del panadero nunca puede ser cero.</b> Si una tanda te lleva cuatro horas y no te las pagas, no tienes un negocio.'],
        ['La depreciación','El horno, la batidora, las bandejas, los moldes. Todo se gasta y hay que reponerlo.'],
        ['El desperdicio','Los errores de producción y lo que no se vendió. Existe siempre y hay que contarlo.'],
        ['Conseguir clientes','Las muestras que regalas y lo que gastes en publicidad.'],
        ['El transporte','Lo que te cuesta llevar el pedido hasta el cliente.']
      ]},
      { t:'ing', titulo:'La fórmula completa', items:[
        ['Ingredientes','+ gas','+ empaque'],
        ['+ tiempo','+ depreciación','+ desperdicio'],
        ['=','tu costo real por pan','']
      ]},
      { t:'tabla', cols:['El costo','Cómo se calcula','Ejemplo'], filas:[
        ['El gas por tanda','Costo mensual del gas ÷ tandas del mes','$20 ÷ 80 tandas = $0,25 por tanda'],
        ['Tu tiempo','Tu precio por hora × horas ÷ panes producidos','$5/h × 2 h ÷ 40 panes = $0,25 por pan'],
        ['La depreciación','Precio del equipo ÷ años de vida ÷ tandas','Horno de $400 a 5 años = $6,67 al mes']
      ]},
      { t:'tip', tt:'Usa la calculadora de la app', c:'En Herramientas está la <b>calculadora de costo por pan</b>. Le pones lo que pagaste por cada paquete y te dice cuánto te sale cada unidad, a cuánto venderla y cuánto ganas por tanda. <b>Con tus precios, no con precios inventados.</b>' },

      { t:'ilustra', items:[['bascula','Pesa el costo'],['reloj','Cobra tu tiempo'],['horno','Cuenta el gas'],['papelon','Y el desperdicio']] },

      { t:'h', c:'El multiplicador según el pan' },
      { t:'p', c:'Una vez que conoces tu costo real, el precio es simple: <b>se multiplica</b>. Y el múltiplo cambia según el tipo de pan.' },
      { t:'tabla', cols:['Tipo de pan','Factor','Cuáles'], filas:[
        ['Estándar','×3 mínimo','Criollito, pan de leche básico'],
        ['Premium','×4','Pan de queso, camaleón'],
        ['Con relleno o decoración','×4,5','Acema de bocadillo, piñita'],
        ['Regalo o evento','×5','Trenzados, presentaciones especiales']
      ]},
      { t:'nota', tt:'Por qué ×3 es el piso, no la meta', c:'El desglose del ×3 es: <b>una parte costo directo, una parte gastos fijos e indirectos, y una parte ganancia real</b>. Por debajo de ×3 estás cubriendo costos pero no creciendo, y cualquier imprevisto te pone en rojo.' },
      { t:'tip', tt:'El precio también comunica', c:'$0,80 · $1,00 · $1,50 · $2,00 — cada umbral dice una categoría distinta. Un pan a $1,50 se percibe artesanal y especial; <b>el mismo pan a $0,80 parece industrial</b>. El precio es parte del producto.' },

      { t:'h', c:'La tabla maestra: costo y precio de todo el catálogo' },
      { t:'tabla', cols:['El pan','Ingredientes','Costo total','Precio sugerido','Tu margen'], filas:[
        ['Camaleón mediano','$0,35','$0,55','$1,50 – $2,00','$0,95 – $1,45'],
        ['Pan de queso','$0,45','$0,70','$2,00 – $2,50','$1,30 – $1,80'],
        ['Acema de bocadillo','$0,55','$0,85','$2,50 – $3,00','$1,65 – $2,15'],
        ['Criollito','$0,15','$0,25','$0,50 – $0,75','$0,25 – $0,50'],
        ['Pan de leche','$0,25','$0,40','$1,00 – $1,50','$0,60 – $1,10'],
        ['Pan de Dios','$0,30','$0,50','$1,50 – $2,00','$1,00 – $1,50'],
        ['Piñita','$0,35','$0,55','$2,00 – $2,50','$1,45 – $1,95'],
        ['Pan trenzado','$0,40','$0,65','$2,50 – $3,00','$1,85 – $2,35'],
        ['Mil hojas','$0,60','$0,95','$3,00 – $4,00','$2,05 – $3,05']
      ]},
      { t:'nota', tt:'Cómo se usa esta tabla', c:'No produzcas todo el catálogo todos los días. Arma un <b>menú semanal rotativo</b> con 2 o 3 panes de alto margen y 1 o 2 de alto volumen. Maximiza el ingreso, reduce el desperdicio y mantiene la novedad. Los panes de evento se producen <b>solo bajo pedido confirmado y pagado</b>.' },

      { t:'h', c:'Cómo subir precios sin perder clientes' },
      { t:'pasos', items:[
        '<b>Avisa con una semana de anticipación.</b> Los clientes que valoran tu trabajo lo aceptan; los que no, no eran tu cliente.',
        '<b>No te disculpes.</b> El mensaje es: «Desde el [fecha] ajusto mis precios para mantener la misma calidad que me caracteriza.» Esa es toda la explicación necesaria.',
        '<b>Si el ajuste es grande, hazlo en dos etapas</b> con un mes de diferencia. Un 15 a 20% se acepta sin fricción; un 50% de golpe genera resistencia.'
      ]},
      { t:'nota', tt:'La frase que ordena tu cabeza', c:'<b>El cliente que negocia el precio de tu pan no es tu cliente ideal.</b> Tu cliente ideal pregunta cuándo puede recoger, no cuánto cuesta.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', hero:'pan-pan-de-banquete', titulo:'Los seis modelos y cuánto dan',
    lede:'No hay un solo camino. Hay seis probados, según tu capital y tu tiempo.',
    bloques:[
      { t:'tabla', cols:['Modelo','Qué es','Potencial'], filas:[
        ['1 · Casa con pedidos por WhatsApp','Inversión mínima, sin local','$150 – 300 al mes'],
        ['2 · Proveedor de cafeterías','Venta al mayor, clientes fijos','$400 – 700 con 3 a 5 clientes'],
        ['3 · Pedidos para eventos','Bodas, bautizos, cumpleaños','$200 – 500 por evento'],
        ['4 · Ferias gastronómicas','Visibilidad y efectivo en el día','20 a 30 clientes nuevos'],
        ['5 · Clases de panadería','Enseñas, no produces','$50 – 150 por clase de 4 a 8'],
        ['6 · Combinar dos o tres','Lo que hacen los que viven de esto','—']
      ]},
      { t:'lista', items:[
        ['El 1 es por donde se empieza','WhatsApp Business, catálogo y un sistema de pedidos claro. No hace falta local ni permiso ni inversión.'],
        ['El 2 es el que da estabilidad','Una cafetería te compra <b>30 panes diarios</b>, todos los días. Eso son $45 a $60 diarios garantizados. Consigue tres y tienes la base del negocio.'],
        ['El 3 es el de mayor margen','Precio premium, menos volumen. Pide presentación cuidada y buena comunicación.'],
        ['El 4 es un laboratorio','Las ferias sirven para probar productos y capturar contactos, no solo para vender ese día.'],
        ['El 5 no necesita horno','Enseñas el proceso. Es ingreso sin producir pan, y funciona muy bien en los meses de venta baja.']
      ]},
      { t:'nota', tt:'La combinación que funciona', c:'Los que viven de esto no eligen uno solo: combinan dos o tres. El ejemplo probado es <b>WhatsApp + cafeterías + un evento al mes</b> = negocio sólido desde el tercer mes.' },

      { t:'h', c:'Adónde puede llegar esto' },
      { t:'seq', titulo:"El mismo pan, cuatro negocios", items:[["neg-modelos","<b>Suelto, en bolsa, en caja o por bandeja.</b> Cada presentación es un canal distinto."]] },
      { t:'p', c:'Estos cuatro escenarios salen de panaderos venezolanos que aplicaron el sistema. <b>Son conservadores:</b> muchos superan el tercero antes de lo previsto cuando tienen el producto y la estrategia correctos.' },
      { t:'tabla', cols:['Etapa','Producción','Cómo vendes','Al mes'], filas:[
        ['1 · Inicio','20 panes/día, 5 días','WhatsApp, familia y vecinos','$150 – 200'],
        ['2 · Crecimiento','40 a 50 panes/día','Primeros clientes fijos, primera cafetería','$300 – 450'],
        ['3 · Establecido','80 a 100 panes/día + especiales','Red de clientes consolidada','$600 – 900'],
        ['4 · Consolidado','Varios modelos combinados','Con ayudante o segundo horno','$1.000 – 1.500']
      ]},
      { t:'nota', tt:'Los tres cuellos de botella', c:'<b>El tiempo</b> — tu capacidad personal: se resuelve optimizando el proceso y haciendo tandas más grandes. <b>El equipo</b> — el horno doméstico limita, y el segundo horno es la primera inversión de escalado. <b>Los clientes</b> — sin demanda el volumen no crece, y eso se resuelve con marketing activo, no esperando.' },

      { t:'ilustra', items:[['pan','Seis caminos'],['reloj','Uno a la vez'],['bascula','Con números reales']] },

      { t:'h', c:'La matemática del cliente fijo' },
      { t:'p', c:'Un cliente que compra una vez es una venta. <b>Un cliente que compra cada semana es un activo.</b> Y la diferencia entre una panadería que sobrevive y una que prospera está exactamente en esa proporción.' },
      { t:'ing', titulo:'La cuenta que cambia la cabeza', items:[
        ['$5','de compra semanal promedio',''],
        ['× 52','semanas del año',''],
        ['= $260','al año, de un solo cliente',''],
        ['× 50','clientes fijos',''],
        ['= $13.000','de ingreso garantizado al año','']
      ]},
      { t:'nota', tt:'Dónde está el negocio de verdad', c:'No está en venderle un pan a un vecino: está en venderle <b>doce todas las semanas</b> a alguien que tiene un carrito, una cafetería o un puesto. <b>Un cliente de esos vale veinte compradores sueltos</b>, y solo hay que conseguirlo una vez.' },

      { t:'h', c:'Cómo convertir la primera compra en una relación' },
      { t:'pasos', items:[
        '<b>El seguimiento:</b> 24 a 48 horas después de la primera entrega, «Hola [nombre], espero que hayas disfrutado el pan. ¿Cómo te pareció?» Una pregunta simple que abre la puerta a la segunda compra.',
        '<b>La invitación suave:</b> si la respuesta es buena, «Esta semana tengo [pan nuevo]. ¿Te gustaría probarlo?» No presiones: ofrece.',
        '<b>Fidelización sin app:</b> «El quinto pedido lleva un pan de regalo.» Simple, recordable, crea hábito.',
        '<b>Pide referidos de frente:</b> «Si conoces a alguien que disfrute el pan artesanal, me encantaría que me recomendaras.» Y ofrece un beneficio por cada referido que compre.'
      ]}
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'pan-criollito', titulo:'Cómo cobrar y qué reglas poner',
    lede:'Pago primero, producción después. Sin excepción.',
    bloques:[
      { t:'p', c:'El sistema de pagos venezolano es diverso y cambiante, y el panadero tiene que dominar todas las opciones. Pero hay una regla que no cambia nunca: <b>el pan que haces sin pago confirmado es pan que regalas</b>.' },
      { t:'lista', items:[
        ['Pago móvil','El más usado del país. Pide siempre <b>número de referencia y captura</b>, y confirma en tu app bancaria antes de confirmar el pedido. El error clásico es producir sin verificar.'],
        ['Zelle','Para clientes con cuenta en Estados Unidos. Inmediato y sin comisión. Es el mejor canal para la diáspora.'],
        ['PayPal','Sirve, pero tiene retención inicial. <b>Verifica que el pago sea definitivo antes de producir.</b>'],
        ['Binance P2P','Para los que prefieren cripto. Seguro y con tasa favorable. Requiere cuenta verificada.'],
        ['Efectivo','Solo en entrega presencial. <b>Nunca fíes con promesa de pago posterior.</b> Si el cliente no tiene efectivo en el momento, se reprograma la entrega.']
      ]},

      { t:'h', c:'Por qué el pago adelantado no se negocia' },
      { t:'seq', titulo:"El cobro", items:[["neg-cobrar","<b>Se cobra antes de hornear.</b> Así el que no aparece no te deja el pan encima."]] },
      { t:'p', c:'La panadería artesanal <b>produce a pedido</b>: no hay inventario que recolocar si el cliente no aparece. Un pedido sin pago es una producción que asumes tú.' },
      { t:'tabla', cols:['Quién','Cuánto adelanta'], filas:[
        ['Cliente nuevo','100%, siempre'],
        ['Cliente frecuente de confianza','50%'],
        ['Evento grande','50% al confirmar, 50% al entregar'],
        ['Cafetería o negocio','Máximo 7 días de crédito. Nunca más de 15']
      ]},
      { t:'tip', tt:'Cómo se dice sin incomodar', c:'<i>«Para confirmar tu pedido, realiza el pago por [método] y envíame el comprobante. Una vez confirmado, tu pedido queda en producción.»</i> Corto y sin disculpas. <b>El cliente que se molesta por pagar adelantado es el que no hubiera pagado después.</b>' },

      { t:'ilustra', items:[['bascula','Pago primero'],['reloj','24 a 48 h de aviso'],['granos','Reglas claras']] },

      { t:'h', c:'Las ocho políticas' },
      { t:'p', c:'Un negocio sin políticas claras es un negocio que termina dirigiendo el cliente. No son para incomodar: <b>son para proteger tu trabajo y tu tiempo</b>. Se comunican desde el primer contacto, con amabilidad y con firmeza.' },
      { t:'lista', items:[
        ['1 · Pago adelantado','100% para pedidos nuevos, 50% para frecuentes. Sin pago, sin producción.'],
        ['2 · Tiempo mínimo','24 a 48 horas de anticipación. Los pedidos de último momento llevan un <b>recargo del 20%</b>.'],
        ['3 · Cancelaciones','Con más de 24 h: devolución del 50%. Con menos: sin devolución, porque ya empezó la producción.'],
        ['4 · Cambios','Se aceptan hasta 12 horas antes de la entrega. Después no se garantizan.'],
        ['5 · Entregas','Zonas definidas con costo claro y horarios específicos. <b>El panadero no está disponible todo el día.</b>'],
        ['6 · Quejas','En las primeras 2 horas y con foto. La solución es reposición o crédito, no devolución en efectivo.'],
        ['7 · Pedido mínimo','Un monto que cubra tu tiempo y tu transporte. Por ejemplo $5 para delivery, $3 para retiro.'],
        ['8 · Crédito a negocios','Máximo 7 días. Si acumula más de dos semanas de deuda, se suspenden entregas hasta regularizar.']
      ]},
      { t:'tip', tt:'El mensaje que se envía una sola vez', c:'<i>«Bienvenido. Estas son las condiciones: pedidos con mínimo 24 h de anticipación · pago 100% adelantado para confirmar · entregas en [zonas] los [días] en horario [horas] · cambios hasta 12 h antes · cancelaciones con más de 24 h reciben 50%.»</i> Los clientes serios lo agradecen. <b>Los que no lo aceptan no son tu mercado.</b>' },

      { t:'h', c:'Cuando algo sale mal' },
      { t:'tabla', cols:['La situación','Qué haces'], filas:[
        ['Un pan salió mal','Avisa antes de que lo descubra. Ofrece reposición o crédito. No te excuses: actúa'],
        ['Un pedido no está a tiempo','Avisa ANTES de la hora acordada, nunca después. Nueva hora o compensación'],
        ['Un cliente molesto','Escucha sin interrumpir. Valida: «Entiendo que esto no es lo que esperabas». Propón solución. No discutas'],
        ['Falta un ingrediente','Ten dos proveedores para cada insumo clave. Ofrece menú ajustado antes de cancelar'],
        ['Suben los costos','Ajusta precios y comunícalo sin disculparte ni sobreexplicar'],
        ['Aparece competencia más barata','Ni bajes tu precio ni la ignores. Refuerza tu diferencia: historia, autenticidad, receta tachirense']
      ]},
      { t:'nota', tt:'La frase que hay que tener presente', c:'Los negocios no desaparecen por los problemas. <b>Desaparecen por no saber manejarlos.</b> Y la transparencia genera más confianza que la perfección.' }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', hero:'pan-pan-espanol', titulo:'Tus primeros veinte clientes',
    lede:'El mayor error del panadero nuevo es preparar todo perfecto y después esperar. No llegan solos.',
    bloques:[
      { t:'p', c:'Este es un plan de catorce días que te lleva de cero a los primeros veinte clientes. <b>No requiere inversión</b>, solo salir a buscarlos.' },
      { t:'tabla', cols:['Días','Qué haces','El objetivo'], filas:[
        ['1 a 3','Muestras a familia directa y vecinos cercanos','Todavía no vendes: recoges opiniones y pides que te recomienden'],
        ['4 y 5','Publicas en los grupos de WhatsApp del barrio','Foto de calidad, descripción breve, cómo se pide. Sin desesperación'],
        ['6 y 7','Visitas 3 a 5 cafeterías de tu zona con muestras','Que prueben, no vender ese día'],
        ['8 a 10','Grupos de Facebook locales de compra-venta y gastronomía','Foto buena, precio claro, contacto. Responde los comentarios rápido'],
        ['11 a 14','Negocios cercanos, y seguimiento a los que probaron','Convertir interesados en compradores con una oferta de primera compra']
      ]},
      { t:'nota', tt:'La curva real', c:'<b>Los primeros veinte clientes son los más difíciles.</b> Del cliente veintiuno en adelante el negocio crece solo, si el pan es bueno.' },

      { t:'h', c:'Cómo presentarte sin sonar desesperado' },
      { t:'p', c:'<i>«Hola [nombre], soy [tu nombre]. Hago pan artesanal tachirense: pan de queso, acema de bocadillo, pan de leche, los clásicos gochos hechos a mano con recetas de San Cristóbal. Te traje una muestra para que pruebes. Si te gusta, me cuentas. ¿Puedo dejarte mi WhatsApp?»</i>' },
      { t:'p', c:'Corto. Sin presión. <b>Con muestra física en la mano.</b> Así funciona, y así ha funcionado siempre.' },
      { t:'lista', items:[
        ['A quién darle muestra','Líderes de opinión del barrio, dueños de negocios, gente conectada en grupos de WhatsApp, quien organiza eventos.'],
        ['Cuánto dar','<b>Uno o dos panes por persona. No más.</b> La abundancia no genera valor, lo diluye.'],
        ['El seguimiento','A los dos días: «¿Pudiste probar el pan? ¿Qué te pareció?» Sin agresividad, con interés genuino. <b>El seguimiento es lo que convierte al que probó en cliente.</b>']
      ]},
      { t:'tip', tt:'Por qué regalar al principio no es perder plata', c:'Es comprar tus primeros diez <b>testimonios</b> y tus primeras diez <b>fotos reales</b>. El que probó tu pan gratis y le gustó es el que te recomienda, y en Venezuela esa recomendación vale más que cualquier anuncio pago.' },

      { t:'ilustra', items:[['pan','Muestra en mano'],['reloj','Seguimiento a 2 días'],['leche','Y el segundo pedido']] },

      { t:'h', c:'Cómo entrar a una cafetería' },
      { t:'seq', titulo:"La entrada a la cafetería", items:[["neg-cafeteria","<b>Bandeja completa, sobre el mostrador.</b> Lleva el producto, no un catálogo."]] },
      { t:'p', c:'No vendas «pan»: <b>vende diferenciación</b>. Las cafeterías ofrecen panes industriales genéricos. Tu pan gocho auténtico es una propuesta de menú distinta, con historia y con identidad. Eso tiene valor y se cobra.' },
      { t:'lista', items:[
        ['El mensaje al dueño','«Mi pan es artesanal, con recetas tachirenses. Te da algo distinto para ofrecer, un producto con identidad que tus clientes van a preguntar dónde lo consigues.»'],
        ['Cuándo llegar','En horario de baja actividad: de 10 a 12, o de 3 a 5. <b>Nunca en hora pico.</b>'],
        ['Qué llevar','Muestras de 3 o 4 tipos bien empacadas, una hoja simple con precios y condiciones, y tu WhatsApp Business.'],
        ['Cuánto hablar','Tres minutos. Directo: qué traes, cómo funciona, qué les cuesta probar. <b>Después deja que el pan hable.</b>'],
        ['El precio B2B','Descuento del <b>15 a 20%</b> sobre el precio al público, nunca más. El volumen justifica el descuento, pero tu margen tiene que seguir positivo.'],
        ['La logística','Días fijos de entrega: lunes, miércoles y viernes funciona para la mayoría. Te piden la tarde anterior, produces de noche, entregas de mañana.']
      ]},
      { t:'nota', tt:'La cuenta de una cafetería', c:'Un cliente que te compra <b>30 panes diarios equivale a 30 clientes individuales</b>, pero con un solo pedido, un solo cobro y una sola entrega. Son $45 a $60 diarios. <b>Consigue tres cafeterías y ya tienes la base del negocio.</b>' }
    ]
  },

  /* ════════ 5 ════════ */
  { tipo:'largo', titulo:'Que te conozcan: tu historia y WhatsApp',
    lede:'La diferencia entre el panadero invisible y el conocido no está en el pan.',
    bloques:[
      { t:'lista', items:[
        ['El panadero invisible','Hace el mejor pan de la zona, espera que lleguen solos, nunca habla de su producto, y se pregunta por qué no crece.'],
        ['El panadero conocido','Tiene buen pan, comparte su proceso, cuenta su historia y construye presencia. <b>Sus clientes lo recomiendan sin que él lo pida.</b>']
      ]},
      { t:'p', c:'Creer que la calidad habla por sí sola es el error más caro de este oficio. <b>En un mercado competitivo, esperar es perder.</b>' },
      { t:'nota', tt:'La ventaja que casi nadie usa', c:'El pan tachirense no es un producto más: es una <b>marca cultural con cuatro siglos de historia</b> que muy poca gente fuera del Táchira sabe hacer con autenticidad. Esa herencia es una ventaja enorme, y la mayoría la desaprovecha por completo.' },

      { t:'h', c:'Tu historia es el marketing que no cuesta nada' },
      { t:'p', c:'Cuando un cliente escucha tu historia —quién eres, de dónde vienes, qué aprendiste y por qué lo compartes— deja de verte como un vendedor y empieza a verte como alguien en quien puede confiar. <b>Esa confianza es la base de toda compra repetida.</b>' },
      { t:'pasos', items:[
        '<b>Quién eres.</b> Tu origen, tu contexto y tu conexión con el pan tachirense. Honesto, cercano, humano.',
        '<b>De dónde vienes.</b> El aprendizaje, los maestros, los primeros errores. La trayectoria que te dio credibilidad.',
        '<b>Qué aprendiste.</b> El secreto, la técnica, lo que te tomó años entender.',
        '<b>Por qué lo compartes.</b> La razón que te mueve. Sin esto, lo anterior suena a currículum.'
      ]},
      { t:'tip', tt:'La frase que más rinde', c:'<b>«Cuatro siglos de tradición tachirense»</b> es infinitamente más poderoso que <b>«pan casero»</b>. La historia auténtica genera confianza al instante y justifica precio premium sin que tengas que argumentar nada.' },

      { t:'ilustra', items:[['talvina','Tu historia'],['pan','Tu proceso'],['granos','Tu origen']] },

      { t:'h', c:'WhatsApp, que es donde se cierra' },
      { t:'seq', titulo:"La foto que cierra la venta", items:[["neg-whatsapp","<b>La foto del pan real de hoy.</b> No una de archivo: la de la tanda que acabas de sacar."]] },
      { t:'p', c:'En Venezuela WhatsApp no es una app de mensajes: es <b>la infraestructura comercial</b> de millones de negocios. Y la diferencia entre WhatsApp normal y WhatsApp Business es la diferencia entre un negocio informal y uno que genera confianza solo.' },
      { t:'p', c:'Un WhatsApp Business bien configurado <b>trabaja 24 horas</b>. El mensaje de bienvenida convierte mientras duermes.' },
      { t:'lista', items:[
        ['Perfil profesional','Nombre del negocio, foto de tu mejor pan, zona de entrega y horario.'],
        ['Catálogo','Cada pan con su foto, su nombre y su precio. <b>Que el cliente elija sin tener que preguntarte.</b>'],
        ['Mensaje de bienvenida','El que contesta cuando no estás. Ahí van los horarios, cómo se pide y cuánto tarda.'],
        ['Respuestas rápidas','Las tres preguntas que te hacen siempre, ya escritas y listas.'],
        ['Etiquetas de cliente','Nuevo, frecuente, cafetería, evento. Te deja saber a quién escribirle y cuándo.']
      ]},
      { t:'nota', tt:'El puente que hay que armar', c:'Video en TikTok o Instagram → <b>botón a WhatsApp con mensaje prediseñado</b> → cliente. Cada pieza de contenido tiene que terminar en una llamada a la acción clara hacia WhatsApp. Sin ese puente, las vistas no se convierten en nada.' },
      { t:'tip', tt:'El boca a boca sigue siendo el rey', c:'En Venezuela la recomendación personal tiene un peso cultural especial: la gente confía profundamente en lo que le recomienda alguien de su entorno. <b>Ese canal es oro y es gratis</b>, pero solo se activa si le das a la gente algo que valga la pena contar.' }
    ]
  },

  /* ════════ 6 ════════ */
  { tipo:'largo', hero:'pan-pan-andino-tradicional', titulo:'Administrar y crecer sin que te aplaste',
    lede:'El que no lleva registros no sabe si gana o pierde. Y la mayoría de los que no llevan registros están perdiendo.',
    bloques:[
      { t:'p', c:'No necesitas software ni formación contable. Necesitas un sistema simple, consistente, de <b>cinco minutos al día</b>.' },
      { t:'lista', items:[
        ['Registra los ingresos','Cada venta con fecha, cliente, monto y método de pago.'],
        ['Registra los gastos','Ingredientes, gas, empaque, transporte. Todo lo que sale.'],
        ['Registra la producción','Cuántos panes de cada tipo hiciste, cuántos vendiste y cuántos no.'],
        ['Con qué','Una libreta simple es lo más confiable. Google Sheets en el teléfono es gratis y se sincroniza. Cualquiera de las dos sirve; <b>la que no sirve es ninguna</b>.']
      ]},
      { t:'tip', tt:'El reporte de los lunes, cinco minutos', c:'Ingresos de la semana · gastos de la semana · <b>ganancia neta = ingresos − gastos</b> · cuánto quedó en la cuenta del negocio · qué comprar esta semana y si alcanza el capital. Cinco minutos de claridad que evitan semanas de confusión.' },

      { t:'h', c:'La trampa más común: mezclar el dinero' },
      { t:'lista', items:[
        ['Cuenta separada','Una cuenta o billetera digital exclusiva del negocio. <b>El dinero del negocio no se mezcla con el personal. Nunca.</b> Es el primer paso de la administración profesional.'],
        ['Págate un sueldo','Un monto fijo semanal. No tomes dinero libremente. <b>Tu sueldo es un gasto del negocio</b>; lo que queda después es ganancia.'],
        ['Fondo de emergencia','Reserva el <b>10% de cada venta</b> hasta juntar el equivalente a tres semanas de gastos. Cubre el equipo dañado, la semana floja o el ingrediente que se puso imposible.']
      ]},

      { t:'h', c:'Los números que hay que entender' },
      { t:'seq', titulo:"Los registros", items:[["neg-registros","<b>Anotar cada tanda.</b> Temperatura, tiempo y resultado. En tres semanas sabes todo."]] },
      { t:'tabla', cols:['Concepto','Qué significa'], filas:[
        ['Bruto contra neto','Bruto es todo lo que entra. Neto es lo que queda. El negocio vive del neto'],
        ['Margen de ganancia','Ganancia ÷ precio × 100. Vendes a $2,00 con costo $0,65 → 67,5%. Busca 60% mínimo'],
        ['Punto de equilibrio','Cuánto necesitas vender para cubrir todo sin ganar ni perder'],
        ['Flujo de caja','El dinero disponible ahora. Se puede ser rentable en papel y no tener con qué comprar harina'],
        ['Capital de trabajo','Lo que necesitas siempre disponible para operar antes de que lleguen los ingresos'],
        ['Retorno de inversión','$200 en equipo que genera $60 al mes se recupera en 3,3 meses. Calcúlalo antes de comprar']
      ]},
      { t:'tip', tt:'Cómo se fija una meta de verdad', c:'Trabaja hacia atrás. <b>Quiero $800 netos este mes.</b> Con margen de 65% necesito vender $1.230 brutos. Si el precio promedio es $1,80, son <b>683 panes</b>. Divididos en 30 días: <b>23 panes diarios</b>. Perfectamente alcanzable desde el mes 3. Esa cuenta convierte un deseo vago en un plan.' },
      { t:'nota', tt:'La regla de reinversión', c:'<b>Primeros 3 meses:</b> reinviertes el 70% de la ganancia, tomas el 30%. <b>Meses 4 al 6:</b> mitad y mitad. <b>Del mes 7 en adelante:</b> reinviertes el 30%, tomas el 70%. Construye el negocio con capital propio y evita la trampa de consumirlo todo antes de que esté sólido.' },

      { t:'ilustra', items:[['bascula','Registra todo'],['papelon','Cuenta aparte'],['reloj','5 min al día'],['pan','Crece con lo que ganas']] },

      { t:'h', c:'Cuándo escalar, y en qué orden' },
      { t:'p', c:'Escalar es tentador, pero <b>el escalado prematuro mata más negocios que la falta de clientes</b>. Hay tres señales y no vale adelantarse a ellas.' },
      { t:'lista', items:[
        ['Vendes todo lo que produces','Si en las últimas cuatro semanas no te quedó ni un pan, tu demanda ya supera tu oferta.'],
        ['Tienes lista de espera','Si estás rechazando pedidos por capacidad, estás dejando dinero sobre la mesa.'],
        ['Tu margen lo sostiene','Verifica que lo que ganas hoy puede sostener la reinversión. <b>Crece con lo que ganas, no con deuda que no puedes pagar.</b>']
      ]},
      { t:'tabla', cols:['Orden','La inversión','Cuándo'], filas:[
        ['1','Segundo horno doméstico','Duplica capacidad sin cambiar nada más. Antes: exprime el primero al máximo'],
        ['2','Primer ayudante','Cuando el límite es tu tiempo, no el equipo. Enseña con un manual de producción'],
        ['3','Equipo profesional','Batidora planetaria, horno de convección, amasadora. Solo cuando la demanda lo justifica'],
        ['4','Local propio','El último paso. Trae costos fijos altos y solo se justifica con volumen consolidado']
      ]},

      { t:'h', c:'El calendario venezolano' },
      { t:'tabla', cols:['Temporada','Cuándo','Qué hacer'], filas:[
        ['Alta demanda','Diciembre, mayo y Semana Santa','Compra ingredientes con 3 semanas de anticipación. Cierra pedidos con depósito. Sube producción de a poco'],
        ['Venta baja','Junio a septiembre','Desarrolla recetas nuevas, mejora el empaque, fortalece la base de clientes y llena el fondo de emergencia']
      ]},

      { t:'sello', img:'pan', pie:'El pan ya lo sabes hacer' },

      { t:'tip', tt:'Los primeros treinta días, concretos', c:'<b>Semana 1:</b> conoce tu horno, hornea de prueba y anota. <b>Semana 2:</b> domina dos panes, criollito y camaleón, hasta que salgan iguales tres veces seguidas. <b>Semana 3:</b> arma el WhatsApp Business con catálogo y fotos. <b>Semana 4:</b> regala a diez personas de tu entorno y consigue tus primeros pedidos y tus primeras fotos reales.' }
    ]
  }

  ]
};
