/* ══════════════════════════════════════════════════════════════
   LOS PROCESOS COMUNES A LOS 12 PANES

   Amasar, fermentar, desgasificar, preformar, la segunda
   fermentación y las pruebas del horno son IGUALES en todas las
   recetas. Estaban por copiarse doce veces; escritos así se
   corrigen una vez y cambian en las doce a la vez.

   Lo único propio de cada pan es el FORMADO y el ACABADO, y eso lo
   pasa cada receta al llamar a PROCESOS.armar().

   Las fotos tec-* también son compartidas: se produjeron una sola
   vez y las usan los doce panes.
   Fuente: MÓDULO-4 (amasado y fermentación) y MÓDULO-5 (horneado).
   ══════════════════════════════════════════════════════════════ */

window.PROCESOS = (function(){

  /* ── 1 · Amasar ────────────────────────────────────────────── */
  function amasar(){
    return [
      { t:'h', c:'Proceso 1 · Amasar — 20 minutos' },
      { t:'p', c:'Amasar no es apretar la masa. Es <b>estirarla y doblarla</b> muchas veces para que se forme adentro una red elástica: el gluten. Esa red es la que después atrapa el gas y hace que el pan suba.' },
      { t:'pasos', items:[
        'Poné la masa sobre la mesa. <b>Usá la base de la palma, no los dedos.</b> Los dedos pellizcan; la palma empuja.',
        'Empujá la masa hacia adelante <b>con el peso del cuerpo</b>, no con la fuerza del brazo. Si te cansás en 5 minutos, estás usando el brazo.',
        '<b>Doblala sobre sí misma</b>, trayendo la punta de vuelta hacia vos.',
        '<b>Girá 90 grados</b> — un cuarto de vuelta — y repetí.',
        'Ese es todo el movimiento: <b>empujar, doblar, girar.</b> Continuo, rítmico y firme. Nunca agresivo: no estás peleando con la masa.'
      ]},
      { t:'seq', titulo:'El movimiento, de cerca', items:[
        ['tec-amasar-empujar','<b>Empujar.</b> Con el talón de la palma, hacia adelante. Fijate que no son los dedos.'],
        ['tec-amasar-doblar','<b>Doblar.</b> Traés la punta de vuelta sobre sí misma.'],
        ['tec-amasar-girar','<b>Girar.</b> Un cuarto de vuelta, y volvés a empezar.']
      ]},
      { t:'nota', tt:'El reloj de la masa: en qué se nota que va bien', c:'<b>Minuto 5:</b> rugosa, se pega a las manos y a la mesa. Es normal — <b>no le agregues harina</b>, se arregla sola. <b>Minuto 10:</b> empieza a despegarse y se siente más entera: ahí está apareciendo el gluten. <b>Minuto 20:</b> lisa, elástica y brillante. Ya está.' },
      { t:'seq', titulo:'Cómo se ve la masa en cada momento', items:[
        ['tec-masa-min5','<b>Minuto 5.</b> Rugosa, desgarrada y pegajosa. Así tiene que verse. No le eches harina.'],
        ['tec-masa-min10','<b>Minuto 10.</b> Ya está entera y se despega sola de la mesa.'],
        ['tec-masa-min20','<b>Minuto 20.</b> Lisa, tersa y con brillo. Ahí parás.']
      ]},
      { t:'tip', tt:'Podés descansar, y conviene', c:'Parar <b>1 o 2 minutos cada 10</b> no es hacer trampa: mientras descansás vos, el gluten se relaja y el resto del amasado cuesta menos. Y si la masa se te pega demasiado, no le eches harina — <b>agarrala de los extremos, golpeala contra la mesa, doblala y girá 90°</b> durante 10 o 15 minutos. Eso desarrolla el gluten sin secar la masa.' },
      { t:'nota', tt:'Cómo saber que terminaste: la ventana de gluten', c:'Cortá un trocito y estiralo despacio entre los dedos. <b>Si se hace una lámina tan fina que se ve la luz a través, sin romperse, terminaste.</b> Si se rompe antes, le faltan minutos. Es la única prueba que vale: el reloj es orientativo, la ventana es la verdad.' }
    ];
  }

  /* ── 2 · Primera fermentación ──────────────────────────────── */
  /* Los cuatro panes salados investigados (campesino, banquete,
     quesadilla, canilla) llevan LEVADURA, no talvina. Decir que la
     talvina hace el trabajo seria falso en esas recetas. */
  function fermentar1(conLevadura){
    return [
      { t:'h', c:'Proceso 2 · Primera fermentación — 60 a 90 minutos' },
      { t:'p', c: conLevadura
        ? 'Acá no hacés nada. La masa trabaja sola: la levadura se come los azúcares y suelta el gas que la infla.'
        : 'Acá no hacés nada. La masa trabaja sola: la talvina se come los azúcares y suelta el gas que la infla.' },
      { t:'pasos', items:[
        'Boleá la masa sin apretarla y ponela en un bol.',
        '<b>Tapala</b> con un paño o con film, para que no se le seque la superficie.',
        'Dejala en un lugar sin corriente de aire.',
        '<b>Está lista cuando dobló el volumen</b>, no cuando suena el reloj.'
      ]},
      { t:'seq', titulo:'Qué es "doblar el volumen"', items:[
        ['tec-ferm-antes','<b>Al empezar.</b> La masa llega a la mitad del bol.'],
        ['tec-ferm-doble','<b>Lista.</b> Llegó al doble y asoma por el borde. Esa es la señal, no el reloj.']
      ]},
      { t:'nota', tt:'Por qué 60 en un lado y 90 en otro', c:'Porque manda la temperatura de tu cocina, no el reloj. <b>En cocina caliente puede estar a los 60 minutos; en cocina fría se va a los 90 o más.</b> Miralo a los 60 y decidí con los ojos: si dobló, seguí; si no, esperá y volvé a mirar cada 15 minutos.' }
    ];
  }

  /* ── 3 · Desgasificar y dividir ────────────────────────────── */
  function desgasificar(pieza){
    return [
      { t:'h', c:'Proceso 3 · Desgasificar y dividir — 10 minutos' },
      { t:'p', c:'Este es <b>el paso que más se saltan los principiantes</b>, y el que más se paga. Desgasificar no es destruir lo que la fermentación construyó: es <b>repartir el gas parejo</b> por toda la masa para que la miga salga uniforme.' },
      { t:'pasos', items:[
        'Con <b>la palma abierta</b>, presioná la masa hacia abajo con movimientos suaves y circulares.',
        '<b>Nunca a golpes.</b> Los golpes rompen el gluten de forma despareja y te dejan zonas densas en la miga.',
        '<b>No saques todo el gas.</b> El que queda ayuda en el formado y sigue alimentando la segunda fermentación.',
        'Pesá la masa entera y dividila <b>con báscula</b>, en piezas de <b>' + pieza + '</b>. A ojo no: piezas de distinto peso se hornean distinto y unas salen crudas y otras quemadas.',
        'Cortá con rasqueta o cuchillo, <b>de un corte limpio</b>, sin desgarrar.'
      ]},
      { t:'seq', titulo:'Desgasificar y dividir, paso a paso', items:[
        ['tec-desgas','<b>La palma abierta</b>, presión suave y circular. Nunca el puño, nunca a golpes.'],
        ['tec-dividir','<b>Un corte limpio</b> con la rasqueta. Sin serruchar ni desgarrar.'],
        ['tec-pesar','<b>Cada pieza a la báscula.</b> ' + pieza + '. A ojo no salen iguales, y las que no son iguales no se hornean iguales.']
      ]},
      { t:'nota', tt:'La temperatura al terminar', c:'La masa debe quedar <b>entre 22 y 25 °C</b>. Si está más caliente, se pega y el formado se vuelve una pelea. Si está más fría, se resiste y se encoge.' }
    ];
  }

  /* ── 4 · Preformar ─────────────────────────────────────────── */
  function preformar(pieza){
    return [
      { t:'h', c:'Proceso 4 · Preformar y dejar descansar — 10 a 15 minutos' },
      { t:'p', c:'El preformado <b>no es la forma final</b>. Es una bola suave, sin tensión, que sirve para que el gluten se relaje antes del formado de verdad.' },
      { t:'pasos', items:[
        'Con cada porción de ' + pieza + ' hacé <b>una bola suave, sin apretar</b>.',
        'Ponelas en la mesa separadas y <b>cubrilas</b>.',
        'Dejalas <b>10 a 15 minutos</b>. Sin este descanso la masa se resiste, y cuando la estirás se encoge sola como un elástico.'
      ]},
      { t:'seq', titulo:'El preformado', items:[
        ['tec-preformar','<b>Bola suave, sin apretar.</b> Las manos ahuecadas, la masa rueda sola.'],
        ['tec-preformadas','<b>Separadas y cubiertas</b>, a descansar. Esto no es la forma final.']
      ]}
    ];
  }

  /* ── 6 · Segunda fermentación ──────────────────────────────── */
  /* La trenza reposa 30 min y no 45: la pieza es mas grande y con
     mas reposo se derrumba. Por eso va por parametro. */
  function fermentar2(min, juntos){
    min = min || 45;
    return [
      { t:'h', c:'Proceso 6 · Segunda fermentación — ' + min + ' minutos' },
      { t:'p', c:'La última subida, ya con la forma puesta. Es la que define el volumen final y la textura de la miga. <b>Si esto sale mal, el horneado no lo arregla.</b>' },
      { t:'pasos', items:[
        juntos
          ? 'Acomodá las piezas en la bandeja <b>casi tocándose, a 1 cm</b>. Este es el único pan del catálogo donde se buscan los costados pálidos: al crecer se pegan entre sí y quedan tiernos por los lados.'
          : 'Acomodá las piezas en la bandeja <b>separadas 4 cm como mínimo</b>, para que crezcan sin tocarse.',
        'Cubrilas con un <b>paño húmedo que no toque la masa</b>, o con film dejando espacio.',
        'Esperá <b>' + min + ' minutos</b>. Crecen entre el 60 y el 80% de su tamaño final.',
        '<b>Aprovechá y precalentá el horno ahora</b>, 30 minutos antes de hornear.'
      ]},
      { t:'seq', titulo: juntos ? 'Cómo van en la bandeja y la prueba del dedo' : 'La separación y la prueba del dedo', items:[
        ['tec-separacion', juntos
          ? '<b>Acá van juntas.</b> Al revés que en los demás panes: se tocan a propósito para que los costados queden tiernos.'
          : '<b>4 cm entre pieza y pieza.</b> Si se tocan al crecer, quedan pegadas y con los costados pálidos.'],
        ['tec-dedo','<b>La prueba del dedo.</b> La marca tiene que volver despacio. Si vuelve rápido, le falta.']
      ]},
      { t:'nota', tt:'La prueba del dedo: cuándo va al horno', c:'Presioná suave con un dedo. <b>Si la marca vuelve despacio, está listo.</b> Si vuelve rápido, le falta tiempo. <b>Si no vuelve, se pasó</b> — al horno ya mismo, porque si esperás más se te derrumba adentro.' }
    ];
  }

  /* ── 8 · Hornear y las pruebas ─────────────────────────────── */
  function hornear(h){
    const rango = h.min + ' a ' + h.max + ' minutos';
    const extra = h.extra || [];
    return [
      { t:'h', c:'Proceso 8 · Hornear — ' + rango + ' a ' + h.temp + ' °C' },
      { t:'pasos', items:[
        'Horno <b>ya precalentado</b> a ' + h.temp + ' °C. Meter pan en horno frío arruina la subida.',
        'Bandeja al centro. <b>' + rango + '</b> para la pieza de ' + h.pieza + '.'
      ].concat(extra).concat([
        'A partir del minuto ' + Math.max(1, h.min - 2) + ', mirá cada 2 o 3 minutos.',
        'Sacá cuando pase las pruebas de abajo, no cuando suene el timer.'
      ])},

      { t:'h', c:'Cómo saber que ya está, sin adivinar' },
      { t:'lista', items:[
        ['La prueba del golpe','Golpeá la base con los nudillos. <b>Sonido hueco = listo.</b> Sonido sordo = le falta tiempo. Es la más rápida y la primera que aprende todo panadero.'],
        ['La prueba del termómetro','Temperatura en el centro: <b>' + (h.interna || '88 a 92 °C') + ' es perfecto</b>. Menos de 85 °C está crudo por dentro aunque la corteza se vea dorada. Es la más precisa de las cuatro.'],
        ['La prueba visual','Color dorado parejo en toda la superficie, y los cortes abiertos y dorados por dentro. Sin zonas pálidas.'],
        ['La base','Debe estar dorada pareja. Si está pálida, dalo vuelta y dale 3 a 5 minutos más: al horno le faltó calor por abajo.']
      ]},
      { t:'seq', titulo:'Las pruebas, en la mano', items:[
        ['tec-golpe','<b>El golpe.</b> Nudillos en la base. Si suena hueco, está.'],
        ['tec-termometro','<b>El termómetro.</b> Al centro del costado. ' + (h.interna || '88 a 92 °C') + '.'],
        ['tec-base','<b>La base.</b> Dorada pareja de lado a lado.']
      ]},
      { t:'nota', tt:'El falso dorado, el error más peligroso', c:'Si la corteza se dora muy rápido, el horno está demasiado caliente y el pan queda <b>perfecto por fuera y crudo por dentro</b>. Si el color llega antes del tiempo mínimo: <b>cubrí con papel aluminio y bajá 10 °C</b>. Un pan bien horneado alcanza el color justo cuando alcanza la temperatura interna.' }
    ];
  }

  /* ── Conservación ──────────────────────────────────────────── */
  function conservar(){
    return [
      { t:'h', c:'Cuánto dura y cómo guardarlo' },
      { t:'tabla', cols:['Cómo lo guardás','Cuánto dura'], filas:[
        ['A temperatura ambiente, sin empaque','1 a 2 días'],
        ['En bolsa de papel','2 a 3 días'],
        ['En bolsa plástica sellada','3 a 4 días'],
        ['En nevera','5 a 7 días, pero se seca más rápido'],
        ['Congelado','Hasta 3 meses']
      ]},
      { t:'tip', tt:'Congelar bien, y que vuelva como recién hecho', c:'Esperá a que <b>enfríe del todo</b>, envolvé pieza por pieza en film, y metelas en bolsa hermética sacando todo el aire. Para volver a servirlo: <b>150 °C por 10 minutos</b> directo del congelador, o 2 a 3 horas a temperatura ambiente. Hornear tandas grandes y congelar es lo que te deja vender toda la semana horneando un solo día.' }
    ];
  }

  /* ── El armador ────────────────────────────────────────────────
     Cada receta pasa lo suyo: el peso de la pieza, sus pasos de
     formado (proceso 5), sus pasos de acabado (proceso 7) y los
     datos del horno. Todo lo demás sale de acá. */
  function armar(o){
    const pieza = o.pieza;
    let b = [];
    if (o.antesAmasado) b = b.concat(o.antesAmasado);    // ej: las especias de la acema, que van en la harina
    b = b.concat(amasar());
    if (o.trasAmasado) b = b.concat(o.trasAmasado);      // ej: el queso del pan de queso, al final del amasado
    b = b.concat(fermentar1(o.conLevadura));
    if (o.trasFermentar1) b = b.concat(o.trasFermentar1);
    b = b.concat(desgasificar(pieza));
    b = b.concat(preformar(pieza));

    /* 5 · Formar — propio de cada pan */
    b.push({ t:'h', c:'Proceso 5 · ' + o.formado.titulo });
    if (o.formado.p) b.push({ t:'p', c:o.formado.p });
    b.push({ t:'pasos', items:o.formado.pasos });
    if (o.formado.seq) b.push({ t:'seq', titulo:o.formado.seqTitulo || 'El formado, movimiento por movimiento', items:o.formado.seq });
    if (o.formado.nota) b.push({ t:'nota', tt:o.formado.nota[0], c:o.formado.nota[1] });

    b = b.concat(fermentar2(o.reposo2, o.juntos));

    /* 7 · Acabado — propio de cada pan */
    b.push({ t:'h', c:'Proceso 7 · ' + o.acabado.titulo });
    if (o.acabado.p) b.push({ t:'p', c:o.acabado.p });
    b.push({ t:'pasos', items:o.acabado.pasos });
    if (o.acabado.seq) b.push({ t:'seq', titulo:o.acabado.seqTitulo || 'El acabado', items:o.acabado.seq });
    if (o.acabado.nota) b.push({ t:'nota', tt:o.acabado.nota[0], c:o.acabado.nota[1] });

    b = b.concat(hornear(Object.assign({ pieza:pieza }, o.horno)));
    if (o.trasHornear) b = b.concat(o.trasHornear);      // ej: el almibar de la piñita, que va con el pan ya horneado
    b = b.concat(conservar());
    return b;
  }

  return { armar, amasar, fermentar1, desgasificar, preformar, fermentar2, hornear, conservar };
})();
