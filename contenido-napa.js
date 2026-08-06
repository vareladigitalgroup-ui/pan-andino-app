/* LA ÑAPA — el regalo secreto del OTO1
   Reescrito al formato largo, con dibujos.
   Elegido por ser el que más le sirve a la gente: sin la harina
   correcta no le sale nada, y es lo primero con lo que se choca el
   que está afuera. Datos verificados contra fuentes de cada país.
   ⚠ La versión anterior estaba en VOSEO ARGENTINO ("llamas", "Anda",
   "tienes", "no cambiaste vos"). Reescrita completa en tuteo. */

window.NAPA = {
  id: 'napa',
  tapa: 'mockup-oto1',
  kicker: 'La ñapa',
  nombre: 'Dónde conseguir la harina',
  sub: 'Estados Unidos y España, marca por marca',
  promesa: 'Lo que nadie te dice cuando te vas: la harina no es la misma.',

  secciones: [

  /* ════════ 0 ════════ */
  { tipo:'largo', hero:'intro-harina', titulo:'Por qué esto es lo primero',
    lede:'Antes de la receta, antes del horno, antes de todo.',
    bloques:[
      { t:'p', c:'El que se va de Venezuela y trata de hacer el pan de su casa se choca siempre con lo mismo: <b>hace todo igual y no le sale igual</b>. Y casi nunca es culpa suya. Es la harina.' },
      { t:'p', c:'El trigo americano y canadiense tiene <b>más proteína</b> que el europeo, y el europeo más que el venezolano. La proteína es la que forma el gluten, y el gluten es lo que aguanta el gas. Más proteína, más agua admite y más sube.' },
      { t:'p', c:'Por eso la misma receta con la misma agua te queda perfecta en Caracas y dura en Madrid. <b>No cambiaste tú: cambió la harina.</b>' },
      { t:'nota', tt:'La regla que resuelve todo', c:'Mira la <b>tabla nutricional de la bolsa</b> y busca los gramos de proteína por cada 100 g. <b>Ese número manda sobre el nombre.</b> Entre 10 y 11 es panadera. De 12,5 para arriba es de fuerza. No importa cómo la llamen ni en qué idioma.' },

      { t:'ilustra', items:[['harina','Mira la proteína'],['gota','Ajusta el agua'],['bascula','Y anota lo que funcionó']] },

      { t:'h', c:'Cuánta agua según lo que conseguiste' },
      { t:'seq', titulo:"Cómo distinguirlas", items:[["napa-comparar","<b>Más fina y blanca, o más gruesa y cremosa.</b> Se nota entre los dedos."]] },
      { t:'p', c:'Todas las recetas llevan el agua en un rango, no en un número fijo. Ese rango existe justamente para esto: <b>ajustas según la harina que tengas en la mano</b>.' },
      { t:'tabla', cols:['Si conseguiste','Ponle de agua','Ejemplo por kilo'], filas:[
        ['All-purpose / panificable','50 a 53%','500 a 530 ml'],
        ['Panadera venezolana','54 a 57%','540 a 570 ml'],
        ['Bread flour / de fuerza','58 a 60%','580 a 600 ml']
      ]},
      { t:'nota', tt:'La señal de que le falta agua', c:'La masa te queda dura, cuesta amasarla y se rompe al estirarla. <b>No es que amasaste mal: es que la harina pide más agua.</b> Sube de a 20 ml y vuelve a probar.' },
      { t:'tip', tt:'Y la señal de que le sobra', c:'Se pega en las manos y no toma forma. Ahí <b>no le agregues harina</b> — eso desbalancea toda la receta. Usa el amasado francés (claquage) del Módulo 1: golpear y doblar desarrolla el gluten sin sumar un gramo de harina.' }
    ]
  },

  /* ════════ 1 ════════ */
  { tipo:'largo', titulo:'Estados Unidos',
    lede:'La buena noticia: aquí la harina es fácil de conseguir y es buena.',
    bloques:[
      { t:'seq', titulo:"Qué vas a encontrar", items:[["napa-paquetes","<b>Mira los gramos de proteína</b>, no el nombre del paquete."]] },
      { t:'p', c:'Lo que en Venezuela llamas <b>harina panadera</b> es, en fuerza, la <i>all-purpose flour</i> de aquí. Y lo que aquí venden como <i>bread flour</i> es más fuerte que la venezolana: con esa vas a tener que <b>subir el agua</b>.' },
      { t:'tabla', cols:['Marca','Qué pedir','Proteína'], filas:[
        ['King Arthur','Unbleached Bread Flour','12,7 g'],
        ['King Arthur','All-Purpose Flour','11,7 g'],
        ["Bob's Red Mill",'Artisan Bread Flour','12,5 – 13 g'],
        ['Gold Medal','Better for Bread','12 g'],
        ['Gold Medal','All-Purpose','10,5 g']
      ]},
      { t:'lista', items:[
        ['Para los panes dulces andinos','Ve con <b>all-purpose</b>. King Arthur o Gold Medal, las dos sirven. Es la que más se parece a la harina de tu panadería.'],
        ['Para la canilla, el español y los de costra dura','Ahí sí <b>bread flour</b>. Necesitas la fuerza extra para el gluten que aguanta la corteza.'],
        ['Dónde se compra','Cualquier supermercado grande la tiene: Walmart, Target, Kroger, Publix. King Arthur y Gold Medal están en todos.'],
        ['Si quieres ahorrar','La marca del supermercado (<i>store brand</i>) sirve perfecto. <b>Mira la proteína en la bolsa y listo</b> — el nombre no importa.']
      ]},
      { t:'tip', tt:'El papelón, que es el otro problema', c:'Búscalo como <b>piloncillo</b> en la sección mexicana, o <b>panela</b> en la latina. Es el mismo producto. Lo tienen casi todos los supermercados con sección hispana, y las tiendas mexicanas siempre.' },

      { t:'ilustra', items:[['harina','All-purpose'],['papelon','Piloncillo'],['granos','Allspice']] }
    ]
  },

  /* ════════ 2 ════════ */
  { tipo:'largo', titulo:'España',
    lede:'Aquí el nombre te confunde más, porque la clasificación es distinta.',
    bloques:[
      { t:'seq', titulo:"Qué buscar en la góndola", items:[["g1-harinas","<b>Compara el grano y el color.</b> El nombre del paquete cambia según el país; la proteína no."]] },
      { t:'p', c:'En España la harina se clasifica por <b>fuerza (W)</b> además de por proteína, y los nombres no coinciden con los de Venezuela. Lo más importante: <b>la «harina de fuerza» española es más fuerte que la panadera venezolana</b>, no equivalente.' },
      { t:'tabla', cols:['Cómo se llama','Proteína','Para qué sirve'], filas:[
        ['Harina floja o de repostería','9 – 10 g','No sirve para pan'],
        ['Harina panificable o panadera','10 – 11 g','La equivalente a la venezolana'],
        ['Harina de media fuerza','10,5 – 13 g','Para los panes dulces enriquecidos'],
        ['Harina de fuerza','13 – 15 g','Para la canilla y los de costra dura']
      ]},
      { t:'lista', items:[
        ['Lo que tienes que pedir','<b>Harina panificable</b> para los panes dulces andinos. <b>De fuerza</b> para los salados de corteza.'],
        ['La tienda de referencia','<b>El Amasadero</b> (elamasadero.com) es la tienda especializada de panadería en España. Vende online a toda la península y tiene puntos físicos en Barcelona, A Coruña, Cádiz, Dos Hermanas y varias más.'],
        ['En el supermercado','Mercadona, Carrefour y Lidl tienen harina de fuerza. Mira la etiqueta: <b>si dice W 250 o más, es de fuerza</b>.'],
        ['Ojo con la «harina de trigo» a secas','Esa suele ser floja, de repostería. Con esa el pan no sube. Tiene que decir <b>panificable</b> o <b>de fuerza</b>.']
      ]},
      { t:'tip', tt:'El papelón en España', c:'Se consigue como <b>panela</b> en tiendas latinas, o como <b>rapadura</b>. También en herbolarios y tiendas ecológicas, donde la venden como azúcar integral de caña. Si no la consigues, azúcar moreno de caña sin refinar es lo más cercano — pero no es igual y se nota.' }
    ]
  },

  /* ════════ 3 ════════ */
  { tipo:'largo', titulo:'La lista para el mercado',
    lede:'Lo que hay que comprar la primera vez, y cómo se llama cada cosa allá.',
    bloques:[
      { t:'seq', titulo:"Lo que traes del mercado", items:[["napa-mercado","<b>Harina, papelón, queso, huevos y especias.</b> Con eso arrancas."]] },
      { t:'tabla', cols:['Qué','En EE.UU.','En España'], filas:[
        ['Harina','All-purpose o bread flour','Panificable o de fuerza'],
        ['Papelón','Piloncillo (sección mexicana)','Panela (tienda latina)'],
        ['Levadura','Instant yeast','Levadura seca de panadería'],
        ['Queso blanco','Queso fresco (tienda latina)','Queso fresco o de Burgos'],
        ['Bocadillo','Guava paste','Pasta de guayaba, o membrillo'],
        ['Leche en polvo','Powdered milk','Leche en polvo entera'],
        ['Anís estrellado','Star anise','Anís estrellado'],
        ['Pimienta guayabita','Allspice','Pimienta de Jamaica'],
        ['Arequipe','Dulce de leche','Dulce de leche'],
        ['Manteca vegetal','Vegetable shortening','Manteca vegetal']
      ]},
      { t:'nota', tt:'Dos que confunden siempre', c:'La <b>pimienta guayabita</b> se llama <i>allspice</i> en inglés y <b>pimienta de Jamaica</b> en España. Y el <b>bocadillo</b> es <i>guava paste</i>; el dulce de membrillo español no es lo mismo, pero es lo más cercano si no consigues el de guayaba.' },

      { t:'ilustra', items:[['harina','Harina'],['papelon','Papelón'],['leche','Queso fresco'],['granos','Especias']] },

      { t:'h', c:'Por qué te regalo justo esto' },
      { t:'p', c:'Podía darte una receta más. Pero <b>una receta más no te resuelve nada si la harina no es la que la receta espera</b>.' },
      { t:'p', c:'Esto es lo que a mí me habría ahorrado meses. Y es lo único de todo el curso que <b>no puedes averiguar horneando</b>: por más veces que lo intentes, si la harina no da, no da. Hay que saberlo antes.' },
      { t:'nota', tt:'Una cosa más', c:'Anota en el margen la marca que te funcionó y los mililitros de agua que le pusiste. La segunda vez ya no tienes que pensarlo, y la tercera <b>ya eres tú el que sabe</b>.' },

      { t:'sello', img:'harina', pie:'Empieza por la bolsa correcta' }
    ]
  }

  ]
};
