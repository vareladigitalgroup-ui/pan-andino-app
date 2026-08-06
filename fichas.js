/* ══════════════════════════════════════════════════════════════
   LAS HOJAS PARA IMPRIMIR — 30 en total

   Eran 10. El 5-ago se sumaron las 20 del Kit de Cocina, que
   estaban producidas y encerradas detrás de un order bump de $9
   que nadie compraba. Decisión de Jonathan: van gratis adentro
   de la app, y el bump se reemplaza por otra cosa.

   Las 10 primeras y las 20 del kit son hojas DISTINTAS: no se
   repiten, se complementan. Por eso van en dos grupos.

   Cada hoja trae su propio `img` para que la interfaz no tenga
   que adivinar el nombre del archivo.
   ══════════════════════════════════════════════════════════════ */

window.FICHAS = [
  /* ── Las diez de siempre ── */
  { n:1,  g:'base', img:'ficha-1',  t:'Los gramos de cada pan',      d:'Las cantidades de los 12 panes en una sola hoja, por kilo de harina.' },
  { n:2,  g:'base', img:'ficha-2',  t:'Tu horno miente',             d:'Cómo medir cuánto miente el tuyo y los grados por pieza.' },
  { n:3,  g:'base', img:'ficha-3',  t:'Los tiempos de reposo',       d:'Primer reposo, segundo reposo y fermentación en frío, por pan.' },
  { n:4,  g:'base', img:'ficha-4',  t:'Tu primera compra',           d:'La lista mínima para arrancar sin gastar de más.' },
  { n:5,  g:'base', img:'ficha-5',  t:'Cómo saber que ya está',      d:'Las cuatro pruebas: visual, golpe, termómetro y base.' },
  { n:6,  g:'base', img:'ficha-6',  t:'El punto de la talvina',      d:'Las señales de que está activa, y el test de flotación.' },
  { n:7,  g:'base', img:'ficha-7',  t:'Si algo salió mal',           d:'El diagnóstico rápido, causa por causa.' },
  { n:8,  g:'base', img:'ficha-8',  t:'Qué comprar en tu país',      d:'Las equivalencias de cada ingrediente afuera de Venezuela.' },
  { n:9,  g:'base', img:'ficha-9',  t:'Tu domingo paso a paso',      d:'El cronograma de una jornada completa de horneado.' },
  { n:10, g:'base', img:'ficha-10', t:'Cómo guardar y recalentar',   d:'Para que el pan del domingo aguante hasta el miércoles.' },

  /* ── Las veinte del Kit de Cocina ── */
  { n:101, g:'kit', img:'kit-01', t:'Tabla maestra del horno',        d:'Cada pan con su temperatura y su tiempo, en una sola hoja.' },
  { n:102, g:'kit', img:'kit-02', t:'Tazas, gramos y grados',         d:'Las conversiones que hacen falta cuando la receta viene en otra unidad.' },
  { n:103, g:'kit', img:'kit-03', t:'Las cinco fórmulas de pintado',  d:'Qué pintar según el brillo que busques.' },
  { n:104, g:'kit', img:'kit-04', t:'Los cortes de firma',            d:'Los siete cortes del pan gocho, dibujados.' },
  { n:105, g:'kit', img:'kit-05', t:'Qué salió mal · color y cocción',d:'Del quemado al pálido, con la causa de cada uno.' },
  { n:106, g:'kit', img:'kit-06', t:'Qué salió mal · forma y apertura',d:'Por qué no abrió, por qué se desparramó, por qué se rajó.' },
  { n:107, g:'kit', img:'kit-07', t:'Costo, precio y margen',         d:'El catálogo entero con su número, para pegarlo donde lo veas.' },
  { n:108, g:'kit', img:'kit-08', t:'Mi costo real, en blanco',       d:'Para llenar con TUS precios, que no son los de nadie más.' },
  { n:109, g:'kit', img:'kit-09', t:'Los pedidos de la semana',       d:'Quién pidió qué, para cuándo y si ya pagó.' },
  { n:110, g:'kit', img:'kit-10', t:'Etiquetas para las bolsas',      d:'Se recortan y se pegan. Tu marca sin pagar imprenta.' },
  { n:111, g:'kit', img:'kit-11', t:'El mapa de calor de tu horno',   d:'Para marcar dónde calienta más el tuyo. Ningún horno es parejo.' },
  { n:112, g:'kit', img:'kit-12', t:'La talvina paso a paso',         d:'Los días, las cantidades y las señales, en la pared de la cocina.' },
  { n:113, g:'kit', img:'kit-13', t:'Los tiempos y la prueba del dedo',d:'Cuánto esperar en cada reposo y cómo saber que ya.' },
  { n:114, g:'kit', img:'kit-14', t:'Checklist antes de hornear',     d:'Lo que se revisa antes de encender, para no perder una tanda.' },
  { n:115, g:'kit', img:'kit-15', t:'Enfriar y cuánto dura',          d:'El paso que más se saltea, y la tabla de conservación.' },
  { n:116, g:'kit', img:'kit-16', t:'Qué salió mal · la talvina',     d:'Cuando no sube, cuando huele raro, cuando suelta líquido.' },
  { n:117, g:'kit', img:'kit-17', t:'El mapa de las familias',        d:'Los panes agrupados por masa y técnica, de un vistazo.' },
  { n:118, g:'kit', img:'kit-18', t:'La harina según tu país',        d:'Qué buscar en la góndola, estés donde estés.' },
  { n:119, g:'kit', img:'kit-19', t:'Mi menú de la semana',           d:'Qué horneas cada día, para no improvisar el domingo.' },
  { n:120, g:'kit', img:'kit-20', t:'La lista del mercado',           d:'Para llevar al mercado y no volver sin nada.' }
];

window.FICHAS_UI = (function(){

  function tarjetas(lista){
    return `<div class="fichas-g">
      ${lista.map((f,k)=>`
        <button class="fi" data-ficha="${f.n}" style="animation-delay:${k*30}ms">
          <div class="fi-img"><img src="img/${f.img}.jpg" alt="${f.t}" loading="lazy"></div>
          <div class="fi-tx">
            <span class="fi-n">Hoja ${String(k+1).padStart(2,'0')}</span>
            <span class="fi-t">${f.t}</span>
            <span class="fi-d">${f.d}</span>
          </div>
        </button>`).join('')}
    </div>`;
  }

  function pintar(destino){
    const base = FICHAS.filter(f=>f.g==='base');
    const kit  = FICHAS.filter(f=>f.g==='kit');
    document.getElementById(destino).innerHTML = `
      <p class="f-intro">Treinta hojas para imprimir y pegar en la pared de la cocina.
      Están hechas para leerse de un vistazo, con las manos llenas de harina.</p>

      <h3 class="sub">Las diez de la cocina</h3>
      ${tarjetas(base)}

      <h3 class="sub">El kit completo, veinte hojas más</h3>
      <p class="f-intro">Estas veinte son distintas de las diez de arriba: no se repiten,
      se complementan. Las de arriba son para hornear; estas cubren el horno, los costos,
      los pedidos y la talvina.</p>
      ${tarjetas(kit)}`;
  }

  function pintarUna(destino, n){
    const f = FICHAS.find(x=>x.n===n);
    if(!f) return null;
    document.getElementById(destino).innerHTML = `
      <img class="fi-grande" src="img/${f.img}.jpg" alt="${f.t}">
      <div class="tip"><div class="t">Para qué sirve</div><p>${f.d}</p></div>`;
    return f;
  }

  return { pintar, pintarUna };
})();
