/* MÓDULO 2 · El Alma: la Talvina
   Reescrito al formato largo: 6 secciones para leer de corrido.
   Fuente: MÓDULO-2 del curso (26 KB), verificado contra
   panesvenezolanos.com y la documentación de la IGP del pan tachirense.
   Español del comprador venezolano: se tutea. */

window.MODULO_2 = {
  id: 'm2',
  tapa: '2-EL-ALMA-LA-TALVINA',
  kicker: 'Módulo 2',
  nombre: 'El Alma: la Talvina',
  sub: 'El fermento de 400 años que hace tachirense al pan',
  promesa: 'Sin talvina no hay pan gocho. Hay pan dulce.',

  secciones: [

  /* ════════ 1 ════════ */
  { tipo:'largo', hero:'intro-talvina', titulo:'Qué es la talvina',
    lede:'No es levadura. No es masa madre común. Es otra cosa, y por eso el pan sabe distinto.',
    bloques:[
      
      { t:'p', c:'La talvina es un fermento natural hecho con harina, agua, azúcar y papelón, que se deja fermentar solo, sin levadura comprada. La fórmula se hereda de generación en generación en las familias panaderas del Táchira desde hace <b>más de cuatro siglos</b>.' },
      { t:'p', c:'También le dicen <b>guarapo</b> o <b>pipa</b>, según el pueblo. En las panaderías viejas se hacía en barriles: agua hasta la mitad del barril, entre 18 y 24 papelones, y tres ollas de harina. Al otro día estaba burbujeando. No había báscula ni termómetro: había ojo y costumbre.' },
      { t:'p', c:'Es lo que le dio al pan tachirense su <b>Indicación Geográfica Protegida</b>. O sea: está reconocido oficialmente que ese pan no se puede hacer igual en ningún otro lado, y la razón es este fermento.' },
      { t:'nota', tt:'La diferencia que nadie te explica', c:'Puedes seguir la receta del pan andino al pie de la letra con levadura de sobre y te va a salir un pan dulce cualquiera. Rico, pero cualquiera. Lo que hace tachirense al pan gocho no es la receta: <b>es la talvina</b>.' },

      { t:'h', c:'Por qué aguanta el azúcar y ninguna otra masa madre lo hace' },
      { t:'p', c:'Toda masa madre normal se muere con el azúcar. El azúcar en concentración alta le chupa el agua a las levaduras y las mata — es el mismo principio por el que la mermelada no se pudre.' },
      { t:'p', c:'La talvina es <b>osmotolerante</b>: aguanta el azúcar. Y no es magia, es selección. Como se fermenta con azúcar y papelón <b>desde el primer día</b>, solo sobreviven las levaduras y las bacterias capaces de vivir ahí. Las demás mueren en el camino. Lo que queda al octavo día es una población entrenada para trabajar en masas dulces.' },
      { t:'p', c:'Por eso la talvina sirve para el pan andino y una masa madre europea no. La europea se hizo para masas con poca azúcar y mucha agua. La talvina se hizo justo al revés: <b>mucha azúcar, poca agua</b>. Y no solo sobrevive al azúcar de tu masa: <b>lo usa de combustible</b>. Más gas, más subida, más sabor.' },
      { t:'tip', tt:'Y por eso trabaja en frío', c:'En los Andes se fermenta entre 12 y 22 °C, mucho más frío de lo que pide cualquier fermento de libro. La talvina aguanta porque esas levaduras se criaron ahí. <b>Si vives en un sitio frío, esto juega a tu favor.</b>' },

      { t:'ilustra', items:[['harina','Harina 000'],['gota','Agua tibia'],['papelon','Papelón'],['granos','Especias']] },

      { t:'h', c:'Talvina contra levadura de sobre' },
      { t:'seq', titulo:"Las dos, lado a lado", items:[["talvina-vs-levadura","<b>Izquierda: talvina viva.</b> Derecha: levadura de sobre. Una se cría, la otra se compra."]] },
      { t:'p', c:'Parecen intercambiables. No lo son, y la diferencia se ve en el pan terminado.' },
      { t:'tabla', cols:['','Talvina tachirense','Levadura comercial'], filas:[
        ['Qué es','Fermento natural de cepas silvestres','Una sola cepa de laboratorio'],
        ['Quién trabaja','Varias levaduras y bacterias a la vez','Solo Saccharomyces cerevisiae'],
        ['Fermentación','16 a 24 horas','1 a 2 horas'],
        ['Sabor','Complejo, dulce con fondo ácido suave','Neutro y plano'],
        ['Miga','Abierta, esponjosa, irregular','Uniforme y cerrada'],
        ['Digestión','Mayor: el fermento predigiere la harina','Menor'],
        ['Duración','Se renueva sola, indefinidamente','Se compra cada vez'],
        ['Frescura','24 a 48 horas más','Se seca antes']
      ]},
      { t:'nota', tt:'Lo que el cliente percibe sin saber nombrarlo', c:'Los ácidos de la fermentación lenta actúan como <b>conservantes naturales</b>: el pan con talvina aguanta uno o dos días más tierno. El comprador no sabe por qué, pero nota que «este pan es diferente» — y vuelve.' },

      { t:'h', c:'Por qué sabe distinto: lo que pasa químicamente' },
      { t:'p', c:'El sabor del pan gocho no es un misterio ni una leyenda. Es la suma de cuatro cosas que solo aparecen cuando la fermentación es lenta.' },
      { t:'lista', items:[
        ['Ácido láctico','Lo producen las bacterias lácticas. Da el fondo suave y cremoso, como un yogur pero mucho más sutil.'],
        ['Ácido acético','En mucha menos cantidad. Es el que da complejidad: ese fondo que hace que el pan <b>tenga algo</b> que no sabes identificar.'],
        ['Ésteres aromáticos','Los producen las levaduras silvestres. Notas frutales y florales que el pan de levadura comercial nunca tiene.'],
        ['Reacción de Maillard','El dorado de la corteza genera cientos de compuestos aromáticos más, y solo aparecen en panes bien fermentados.']
      ]},
      { t:'tip', tt:'Esto es tu argumento de venta', c:'La mayoría de las panaderías usan levadura de sobre. Tú usas un fermento con cuatro siglos de historia. En la etiqueta, en el video, en la conversación de venta: <b>eso no lo puede decir nadie más</b>, y es lo que justifica cobrar más caro.' }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', hero:'talvina-dia-1', titulo:'Cómo hacer la tuya, día por día',
    lede:'La primera talvina tarda ocho días. Una sola vez en la vida. Después se mantiene sola para siempre.',
    bloques:[
      { t:'p', c:'Cada ingrediente tiene una función precisa que los panaderos gochos descubrieron a fuerza de siglos. <b>No cambies las proporciones la primera vez.</b>' },
      { t:'lista', items:[
        ['La harina','Es la comida. Aporta los almidones que alimentan a las levaduras y las proteínas que le dan cuerpo al fermento. Todo uso 000, sin leudante.'],
        ['El agua','Hidrata la harina y despierta las levaduras silvestres. <b>Tibia, nunca por encima de 30 °C</b> — el calor de más las mata y no hay vuelta atrás.'],
        ['El papelón','El combustible principal. Aporta los azúcares complejos y los minerales que el azúcar refinada perdió. Es lo que le da carácter.'],
        ['Las especias','Canela en rama, clavos de olor y pimienta guayabita. Aromatizan, <b>aportan más levaduras silvestres</b> y protegen el fermento de bichos que no quieres. La guayabita es lo que separa a la talvina tachirense de cualquier otra masa madre del mundo.']
      ]},
      { t:'nota', tt:'Si no consigues papelón', c:'Sirve la panela, la rapadura, la chancaca o el piloncillo: es el mismo azúcar de caña sin refinar, cambia el nombre según el país. <b>Lo que NO sirve es el azúcar morena del supermercado</b> — esa es azúcar blanca teñida con melaza y no trae los minerales.' },

      { t:'ing', titulo:'Día cero · lo que mezclas una sola vez', items:[
        ['45 g','harina panadera 000','100%'],
        ['67 g','agua tibia, máximo 30 °C','150%'],
        ['13 g','azúcar','30%'],
        ['13 g','papelón rallado fino','30%'],
        ['1 rama','canela','—'],
        ['3 uds','clavos de olor','—'],
        ['3 uds','pepitas de pimienta guayabita','—'],
        ['138 g','de talvina de arranque','310%']
      ]},
      { t:'nota', tt:'Fíjate en la hidratación', c:'150% de agua es muchísimo, el doble de lo que lleva una masa madre normal. Y no es un error: <b>la talvina es líquida, casi como un guarapo espeso</b>. Si te queda como una masa que se puede amasar, le falta agua.' },

      { t:'pasos', items:[
        'Frasco de vidrio de boca ancha, <b>limpio y completamente seco</b>. Mínimo medio litro.',
        'Pon la harina y haz un volcán. Vierte el agua tibia de a poco mientras revuelves con cuchara de madera, <b>hasta que no quede un solo grumo</b>.',
        'Agrega el azúcar y el papelón rallado, y revuelve hasta que se disuelvan del todo.',
        'Incorpora la canela, los clavos y la guayabita. Van enteros, no molidos.',
        'Tapa con una <b>gasa o un paño</b>, sujetado con una liga. <b>Nunca hermético:</b> tiene que respirar y soltar el gas.',
        '<b>Marca el nivel con un marcador</b> y anota la fecha en el frasco. Es la única forma de medir el crecimiento sin engañarte.',
        'Déjalo a <b>24 a 26 °C</b>, en un rincón tibio y sin corriente de aire.'
      ]},

      { t:'ilustra', items:[['talvina','Frasco de boca ancha'],['bascula','Pesar, no calcular'],['termometro','Máximo 30 °C'],['reloj','Ocho días']] },

      { t:'h', c:'Lo que vas a ver, hora por hora' },
      { t:'seq', titulo:"La talvina, día por día", items:[["talvina-mezcla","<b>Día 1.</b> Harina, agua y papelón recién mezclados. Lisa, sin una burbuja."],["talvina-dia-2","<b>Día 2.</b> Aparecen las primeras burbujas y sube apenas."],["talvina-activa","<b>Ya activa.</b> Subida al doble, abombada y llena de burbujas."]] },
      { t:'p', c:'La activación sigue un orden predecible. Conocerlo te ahorra la angustia de creer que algo salió mal cuando en realidad todo va bien.' },
      { t:'tabla', cols:['Cuándo','Qué ves','Qué significa'], filas:[
        ['Horas 0 a 6','Quieto, no pasa nada','Las levaduras están despertando. Normal. No hagas nada'],
        ['Horas 6 a 12','Primeras burbujas chiquitas','El olor pasa de harina cruda a algo fermentado. Buena señal'],
        ['Horas 12 a 24','Más burbujas, sube un poco','Olor dulce, parecido a un guarapo o una chicha'],
        ['Horas 24 a 48','Burbujeo visible, dobla el volumen','Olor dulce-ácido claro. Si tu casa está a 25–28 °C, va bien'],
        ['Horas 48 a 72','Recién ahora arranca','Normal en climas frescos como San Cristóbal. Ten paciencia']
      ]},

      { t:'h', c:'El calendario de los ocho días' },
      { t:'pasos', items:[
        '<b>Día 0.</b> Mezclas todo y tapas con gasa.',
        '<b>Días 1 al 5.</b> Revuelves una vez al día y vuelves a tapar. Nada más. No le agregues nada. Va a oler raro y después dulce: es normal.',
        '<b>Día 6.</b> <b>Botas la mitad</b> y refrescas con la tabla de abajo. Dejas descansar 12 horas.',
        '<b>Día 7.</b> Botas la mitad y refrescas otra vez.',
        '<b>Día 8.</b> A las <b>4 horas del refresco está activa y lista para usar</b>. De ahí en adelante funciona como cualquier masa madre: refrescas, esperas 4 horas, y la usas.'
      ]},
      { t:'ing', titulo:'El refresco · del día 6 en adelante', items:[
        ['69 g','talvina (la mitad que dejaste)','310%'],
        ['22 g','harina panadera','100%'],
        ['33 g','agua tibia','150%'],
        ['7 g','azúcar','30%'],
        ['7 g','papelón rallado','30%'],
        ['138 g','de talvina refrescada','620%']
      ]},
      { t:'nota', tt:'El orden de la mezcla importa', c:'Primero juntas la talvina con el agua y la deshaces bien. Después el azúcar y el papelón. <b>La harina va de última.</b> Si echas la harina primero se te hacen grumos que no se van más.' },
      { t:'tip', tt:'Llévalo apuntado', c:'La app trae un <b>diario de la talvina</b> con los ocho días marcables y las cantidades ya calculadas según el tamaño que elijas. Anota además la temperatura de tu casa cada día: en dos semanas vas a poder predecir el ritmo de tu talvina en tu clima.' },

      { t:'h', c:'La talvina express, para arrancar hoy' },
      { t:'p', c:'Si quieres practicar sin esperar ocho días, hay una versión de entrenamiento: la misma receta más <b>3 g de levadura fresca</b> (o 1 g de la seca). Está lista en 6 a 8 horas.' },
      { t:'p', c:'No es lo mismo y hay que decirlo: el sabor es menos complejo al principio. Pero sirve para practicar las técnicas mientras desarrollas la tradicional en paralelo. A partir del tercer o cuarto refresco, <b>las levaduras silvestres se imponen</b> y se parece bastante a la de verdad.' },
      { t:'nota', tt:'Úsala como muleta, no como destino', c:'La express es para que hornees esta semana. La tradicional es la que va a estar en tu cocina dentro de diez años. <b>Arranca las dos el mismo día.</b>' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', hero:'talvina-flotacion', titulo:'Cómo saber que está lista',
    lede:'Tres señales, y ninguna necesita aparatos. La tercera no falla nunca.',
    bloques:[
      { t:'lista', items:[
        ['Las burbujas','A las 4 horas del refresco tiene que estar burbujeando en la superficie y haber subido entre 50% y 100%. La superficie queda <b>abultada hacia arriba</b> en el centro. Si a las 4 horas está quieta, le falta.'],
        ['El olor','Tiene que oler a <b>alcohol y a papelón al mismo tiempo</b>. Dulce y punzante, como un guarapo. Si huele a vinagre fuerte, se pasó de ácida.'],
        ['El test de flotación','Una cucharada en un vaso con agua a temperatura ambiente. <b>Si flota, está lista. Si se hunde, no.</b> Es la prueba definitiva, la que usan en el Táchira desde hace generaciones, y no falla.']
      ]},
      { t:'nota', tt:'Si se hunde, no la uses', c:'Dale doce horas más y prueba de nuevo. Una talvina apurada arruina la masa entera y pierdes todos los ingredientes. Es la única parte de este método donde no se puede correr — y es la que más gente se salta.' },

      { t:'ilustra', items:[['talvina','Que burbujee'],['granos','Que huela a guarapo'],['gota','Que flote']] },

      { t:'h', c:'Aprender a leerle el olor' },
      { t:'seq', titulo:"Cómo se ve cuando está lista", items:[["talvina-activa","<b>Activa.</b> Doblada, con burbujas grandes y cúpula abombada."],["talvina-flotacion","<b>La prueba de flotación.</b> Una cucharada en agua: si flota, está."]] },
      { t:'p', c:'El olfato es la herramienta más vieja y más confiable de la panadería. El olor de tu talvina cambia según su estado, y leerlo bien es de las habilidades más valiosas que vas a desarrollar.' },
      { t:'tabla', cols:['Lo que hueles','Qué significa','Qué hacer'], filas:[
        ['Dulce y cálido, tipo guarapo','En su punto ideal','Úsala ya'],
        ['Yogur suave o leche fermentada','Fermentación láctica dominando','Excelente. Úsala'],
        ['Manzana verde o fruta','Levaduras muy activas','Muy buena señal'],
        ['Ácido suave, vinagre muy diluido','Normal en talvinas maduras','Está dentro del rango'],
        ['Vinagre intenso','Sobrefermentó','Refresca urgente, dos veces seguidas'],
        ['Alcohol fuerte','Tiene hambre','Refresca de inmediato'],
        ['Rancio o a queso fuerte','Posible contaminación','Evalúa botarla']
      ]},

      { t:'h', c:'Las señales de alerta' },
      { t:'p', c:'Casi todo tiene arreglo. Conviene saber cuál es cuál antes de asustarse.' },
      { t:'lista', items:[
        ['Líquido oscuro arriba (hooch)','Tiene hambre. No es peligroso. Revuélvelo de vuelta y refresca de inmediato.'],
        ['Costra seca en la superficie','Le pegó el aire. Retira la costra con una cuchara: lo de abajo casi siempre está bien.'],
        ['Una capa blanca lisa','Es levadura de superficie. Es normal. Revuélvela y sigue.'],
        ['Sin actividad a las 72 horas','Levaduras débiles. Muévela a un sitio más cálido, agrégale una cucharadita de papelón y espera 12 horas más.'],
        ['Color rosado, naranja o negro','<b>Contaminación seria. Se bota entera.</b> No hay rescate y no vale la pena intentarlo.']
      ]},
      { t:'nota', tt:'La única que sí se bota', c:'El moho de color. Verde, rosa, naranja o negro: se bota entera y se arranca de nuevo, sin discusión y sin intentar salvar la parte de abajo. <b>Todo lo demás tiene arreglo.</b>' }
    ]
  },

  /* ════════ 4 ════════ */
  { tipo:'largo', hero:'talvina-refresco', titulo:'Cómo mantenerla viva para siempre',
    lede:'Las panaderías de San Cristóbal no tienen una talvina: tienen generaciones de talvinas. Este es el sistema.',
    bloques:[
      { t:'p', c:'Le dicen <b>el guarapo inmortal</b>, y son cinco reglas. Una talvina mantenida así puede vivir literalmente para siempre. Hay panaderías en San Cristóbal que llevan más de cincuenta años con el mismo fermento.' },
      { t:'lista', items:[
        ['1 · Nunca uses más del 70%','Deja siempre por lo menos el 30% como base viva para el próximo refresco. Ese resto es el que carga la historia.'],
        ['2 · Repón lo mismo que usaste','Si sacaste 300 g, agrega 300 g de mezcla fresca. La cantidad se mantiene estable, la fuerza también.'],
        ['3 · Aliméntala aunque no hornees','Cada 2 o 3 días como mínimo a temperatura ambiente. El hambre la debilita mucho más rápido de lo que la gente cree.'],
        ['4 · A la nevera para las pausas largas','Sácala 12 a 24 horas antes de usar y refréscala para reactivarla.'],
        ['5 · Nunca la uses fría','Talvina directa de la nevera a la masa es el error clásico. Siempre a temperatura ambiente primero.']
      ]},

      { t:'ilustra', items:[['talvina','Deja el 30%'],['harina','Repón lo mismo'],['reloj','Cada 2 o 3 días'],['termometro','Nunca fría']] },

      { t:'h', c:'La nevera, entrar y salir' },
      { t:'p', c:'La nevera no la mata: la duerme. Es la herramienta que te deja tener vida además de la panadería.' },
      { t:'tabla', cols:['Para guardarla','Para despertarla'], filas:[
        ['1 · Refréscala con la dosis normal','1 · Saca el frasco de la nevera'],
        ['2 · Espera 1 a 2 horas a que arranque','2 · Deja que agarre temperatura, 30 minutos'],
        ['3 · Métela tapada — aquí sí va tapa','3 · Refréscala con harina y agua tibia'],
        ['4 · Entra en estado latente, no muere','4 · Espera 8 a 12 horas a que esté burbujeante'],
        ['—','5 · Prueba de flotación antes de usarla']
      ]},
      { t:'nota', tt:'Si pasó más de dos semanas dormida', c:'Puede necesitar <b>dos o tres refrescos</b> para recuperar toda su fuerza. No la uses en el primero aunque burbujee: va a levantar la masa a medias.' },
      { t:'tip', tt:'La costumbre que salva', c:'Guarda siempre un frasquito aparte en la nevera, como respaldo. Si la principal se te echa a perder —y alguna vez pasa— tienes de dónde arrancar sin esperar ocho días otra vez.' },

      { t:'h', c:'Secarla, para los viajes largos' },
      { t:'p', c:'La extiendes finita sobre papel encerado, la dejas secar al aire hasta que se hace escamas, y la guardas en un frasco. <b>Vive así meses.</b> Para revivirla, la mezclas con agua tibia y azúcar y arrancas el ciclo de refrescos.' },

      { t:'h', c:'El protocolo de la semana' },
      { t:'seq', titulo:"El refresco", items:[["talvina-alimentar","<b>Alimentarla.</b> Harina y agua en partes iguales sobre lo que quedó."],["talvina-refresco","<b>Después del refresco.</b> Vuelve a arrancar en unas horas."]] },
      { t:'p', c:'Si vendes, esto deja de ser una costumbre y pasa a ser un horario. Los que lo cumplen tienen fermento potente todos los sábados; los que no, tienen sorpresas el día de mayor pedido.' },
      { t:'tabla', cols:['Día','Qué haces'], filas:[
        ['Lunes','Refresco estándar. Botas el 50%, repones harina y agua. Revisas actividad'],
        ['Miércoles','Segundo refresco de la semana. Si apareció hooch, refresca antes de este día'],
        ['Viernes','Refresco generoso, preparándola para la producción del fin de semana'],
        ['Sábado','Día de mayor producción. Úsala en su pico'],
        ['Domingo','Refresco de reposición. Repones todo lo que usaste. A la nevera si vas a pausar']
      ]},
      { t:'nota', tt:'La regla de oro del fin de semana largo', c:'Nunca te vayas sin dejar la talvina en la nevera bien alimentada. Es exactamente igual que dejarle agua y comida a una mascota.' },

      { t:'h', c:'Cuánta talvina mantener según lo que produces' },
      { t:'p', c:'La fórmula es simple: <b>cada kilo de harina de tu receta necesita entre 280 y 300 g de talvina activa</b>. De ahí sale todo lo demás.' },
      { t:'tabla', cols:['Si produces','Mantén activa','Cómo'], filas:[
        ['2 a 4 panes por semana','300 a 400 g','Un frasco de 1 litro. Refresco cada 2 o 3 días'],
        ['10 a 20 panes diarios','1 a 1,5 kg','Dos o tres frascos. Refresco cada 1 o 2 días, más uno de respaldo en nevera'],
        ['Más de 20 diarios','3 a 5 kg','Sistema de rotación entre frascos. Refresco cada 24 horas']
      ]},
      { t:'nota', tt:'El orden correcto', c:'<b>Escala la talvina antes de escalar la producción, nunca al revés.</b> Amanecer con pedidos y sin fermento activo es el peor problema que puede tener un panadero, y no se resuelve en el día.' }
    ]
  },

  /* ════════ 5 ════════ */
  { tipo:'largo', hero:'paso-pan-sobado-1', titulo:'Cómo se usa en la masa',
    lede:'Acá se decide si el pan sale con carácter o sale plano.',
    bloques:[
      { t:'p', c:'La talvina activa entra en la masa <b>en su pico</b>: a las 4 horas del refresco, cuando ha doblado y antes de que empiece a bajar. Ni antes ni mucho después.' },

      { t:'h', c:'Cuánta ponerle' },
      { t:'p', c:'La cantidad decide dos cosas al mismo tiempo, y van en direcciones opuestas: <b>más talvina fermenta más rápido pero da menos sabor; menos talvina tarda más pero sabe más profundo.</b>' },
      { t:'tabla', cols:['Por kilo de harina','Fermenta en','Para qué sirve'], filas:[
        ['20 a 25%','18 a 24 horas','Fermentación de un día para otro en nevera. Sabor muy complejo'],
        ['25 a 30%','4 a 6 horas','El estándar del pan gocho tachirense. El punto dulce'],
        ['30 a 35%','3 a 4 horas','Producción más ágil. Sabor un poco menos complejo'],
        ['35 a 40%','2 a 3 horas','Solo para urgencias. Sacrificas sabor y se nota']
      ]},
      { t:'nota', tt:'Lo que nadie te dice del tiempo', c:'Las 18 a 24 horas no son un capricho de tradición. En ese tiempo las bacterias producen los ácidos y los aromas que hacen que el pan <b>huela a pan gocho</b>. Si le metes levadura para acelerarlo, el pan sube igual — pero no huele igual, y ahí se pierde todo.' },

      { t:'h', c:'El momento de incorporarla' },
      { t:'seq', titulo:"Cómo entra a la masa", items:[["talvina-en-masa","<b>Se vuelca sobre los líquidos</b>, antes que la harina termine de integrarse."]] },
      { t:'p', c:'La talvina es frágil justo en este paso. Agua muy caliente, sal directa o un amasado violento en los primeros minutos la pueden dañar en serio.' },
      { t:'pasos', items:[
        '<b>Confirma que flota.</b> Si no flota, no la uses. No hay excepción a esto.',
        '<b>Mide la masa:</b> tiene que estar entre 22 y 26 °C antes de agregarla. Si está más caliente, espera.',
        '<b>Mezcla primero sin talvina:</b> harina, azúcar, huevos y parte del líquido. Después la agregas.',
        '<b>La sal va al final</b>, solo después de que la talvina esté completamente integrada. La sal en contacto directo la mata.'
      ]},

      { t:'ilustra', items:[['gota','Que flote'],['termometro','22 a 26 °C'],['talvina','Talvina después'],['sal','Sal al final']] },

      { t:'h', c:'Ajusta según el clima donde vives' },
      { t:'p', c:'Venezuela tiene climas muy distintos, y afuera todavía más. Lo que funciona en Caracas hay que ajustarlo en Maracaibo o en Madrid.' },
      { t:'tabla', cols:['Si tu clima es','Como en','Qué ajustas'], filas:[
        ['Muy caliente, +30 °C','Maracaibo, Barcelona, Cumaná','Refresca cada 1 o 2 días. Agua más fría en la masa. Considera fermentar en nevera'],
        ['Cálido, 24 a 28 °C','Caracas, Valencia, Barquisimeto','El clima ideal. Protocolo estándar, sin ajustes'],
        ['Templado, 18 a 22 °C','Mérida, San Cristóbal, media Europa','Fermenta más lento, hasta 6 u 8 horas. El resultado es mejor: más sabor']
      ]},
      { t:'tip', tt:'El frío no es tu enemigo', c:'En San Cristóbal el clima fresco <b>es parte del secreto</b>: la fermentación lenta desarrolla más ácidos y más sabor. Si vives en un sitio caliente, replícalo fermentando de noche en la nevera.' },

      { t:'h', c:'Las cinco talvinas' },
      { t:'p', c:'La clásica es tu base y hay que dominarla antes de tocar nada. Pero cada variación produce un pan con personalidad distinta, y ahí hay negocio.' },
      { t:'lista', items:[
        ['Clásica','La receta que acabas de aprender. Para todos los panes dulces tachirenses. El estándar de referencia.'],
        ['De piña','La base más cáscara de piña natural. Las levaduras silvestres de la piña aceleran la activación y dan un sabor más frutal. Ideal para acemas y panes muy dulces.'],
        ['De naranja','La base más cáscara de naranja. Aroma cítrico suave, muy característico de algunas panaderías de San Cristóbal.'],
        ['Oscura','Papelón muy oscuro o un poco de melaza. Color más profundo y sabor más pronunciado. Para panes especiales de temporada.'],
        ['Suave','Baja el papelón a la mitad y complétalo con azúcar blanca. Fermento más delicado, para pan de leche y panes de miga muy tierna.']
      ]},
      { t:'nota', tt:'Antes de experimentar', c:'Haz <b>mínimo diez tandas</b> con la clásica. Necesitas un punto de comparación fijo, o no vas a saber si la variación mejoró algo o solo cambió otra cosa sin querer.' }
    ]
  },

  /* ════════ 6 ════════ */
  { tipo:'largo', hero:'talvina-problemas', titulo:'Qué salió mal con la talvina',
    lede:'Todo tiene arreglo menos una cosa.',
    bloques:[
      { t:'tabla', cols:['Lo que ves','Qué pasó','Qué hacer'], filas:[
        ['No burbujea a las 48 h','Clima frío, o el agua estaba muy caliente','Muévela a 24–26 °C, agrégale una cucharadita de papelón, espera 24 h'],
        ['Huele a vinagre fuerte','Se pasó de ácida','Bota el 70%, refresca con dosis doble de harina y agua'],
        ['Líquido oscuro arriba','Tiene hambre','Revuélvelo de vuelta y refresca de inmediato'],
        ['No sube después de refrescar','Débil, o hace frío','Horno apagado con la luz prendida, 28–30 °C, seis horas'],
        ['Muy ácida y poco dulce','Demasiado calor, fermentación acética','Refrigérala entre refrescos, usa agua más fría'],
        ['Nunca sube más del 50%','Harina floja o clima muy frío','Cambia a harina más fuerte y busca un sitio más cálido'],
        ['Se separó y huele a alcohol','Hambre severa','Refresca dos veces seguidas con 12 h de diferencia'],
        ['Capa blanca lisa arriba','Es levadura de superficie','Nada. Revuélvela y sigue'],
        ['Moho de color','Contaminación','Se bota entera. Sin excepción']
      ]},
      { t:'nota', tt:'La regla que resume todo', c:'Solo se bota la que tiene <b>colores vivos</b>: rosa, naranja, verde o negro. Todos los demás problemas se resuelven con refrescos y paciencia.' },

      { t:'h', c:'Las preguntas que siempre salen' },
      { t:'seq', titulo:"Cuando se descuidó", items:[["talvina-mala","<b>Líquido oscuro arriba y hundida.</b> No está muerta: tiene hambre. Refrescala dos veces."]] },
      { t:'lista', items:[
        ['¿Cuánto dura una talvina?','Indefinidamente, si la cuidas. Las panaderías del Táchira tienen fermentos con décadas de historia continua.'],
        ['¿Puedo hacer pan si no ha flotado?','Técnicamente sí, pero el resultado es impredecible. No vale la pena arriesgar los ingredientes de una tanda entera.'],
        ['¿La puedo congelar?','En emergencia sí, pero pierde potencia. La nevera es mejor para las pausas largas.'],
        ['¿La puedo compartir?','Sí, y es una tradición bonita. Le das una porción a otro panadero y esa talvina se lleva contigo su historia.'],
        ['¿La de mi ciudad va a ser distinta?','Al principio sí, porque capta las levaduras silvestres de tu casa. Con el tiempo desarrolla su propia personalidad. Eso es fascinante, no un problema.'],
        ['¿Huele bien o huele mal?','Huele a guarapo o a chicha: dulce con nota ácida agradable. Si huele francamente feo, hay un problema y está en la tabla de arriba.']
      ]},

      { t:'sello', img:'talvina', pie:'La talvina que crees esta semana puede ser la base de tu panadería por décadas' },

      { t:'tip', tt:'Empieza esta semana', c:'No esperes el momento perfecto ni el frasco perfecto. Un frasco de compota limpio, harina, agua, papelón y ocho días. Lo único que no se puede recuperar es el tiempo que no arrancaste.' }
    ]
  }

  ]
};
