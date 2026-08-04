/* ══════════════════════════════════════════════════════════════
   LAS 10 FICHAS DE COCINA
   Ya estaban producidas y no estaban en ningún lado. Son para
   imprimir y pegar en la pared: se leen de un vistazo con las
   manos llenas de harina.
   ══════════════════════════════════════════════════════════════ */

window.FICHAS = [
  { n:1,  t:'Los gramos de cada pan',      d:'Las cantidades de los 12 panes en una sola hoja, por kilo de harina.' },
  { n:2,  t:'Tu horno miente',             d:'Cómo medir cuánto miente el tuyo y los grados por pieza.' },
  { n:3,  t:'Los tiempos de reposo',       d:'Primer reposo, segundo reposo y fermentación en frío, por pan.' },
  { n:4,  t:'Tu primera compra',           d:'La lista mínima para arrancar sin gastar de más.' },
  { n:5,  t:'Cómo saber que ya está',      d:'Las cuatro pruebas: visual, golpe, termómetro y base.' },
  { n:6,  t:'El punto de la talvina',      d:'Las señales de que está activa, y el test de flotación.' },
  { n:7,  t:'Si algo salió mal',           d:'El diagnóstico rápido, causa por causa.' },
  { n:8,  t:'Qué comprar en tu país',      d:'Las equivalencias de cada ingrediente afuera de Venezuela.' },
  { n:9,  t:'Tu domingo paso a paso',      d:'El cronograma de una jornada completa de horneado.' },
  { n:10, t:'Cómo guardar y recalentar',   d:'Para que el pan del domingo aguante hasta el miércoles.' }
];

window.FICHAS_UI = (function(){
  function pintar(destino){
    document.getElementById(destino).innerHTML = `
      <p class="f-intro">Diez hojas para imprimir y pegar en la pared de la cocina.
      Están hechas para leerse de un vistazo, con las manos llenas de harina.</p>
      <div class="fichas-g">
        ${FICHAS.map(f=>`
          <button class="fi" data-ficha="${f.n}" style="animation-delay:${f.n*30}ms">
            <div class="fi-img"><img src="img/ficha-${f.n}.jpg" alt="${f.t}" loading="lazy"></div>
            <div class="fi-tx">
              <span class="fi-n">Ficha ${String(f.n).padStart(2,'0')}</span>
              <span class="fi-t">${f.t}</span>
              <span class="fi-d">${f.d}</span>
            </div>
          </button>`).join('')}
      </div>`;
  }
  function pintarUna(destino, n){
    const f = FICHAS.find(x=>x.n===n);
    document.getElementById(destino).innerHTML = `
      <img class="fi-grande" src="img/ficha-${n}.jpg" alt="${f.t}">
      <div class="tip"><div class="t">Para qué sirve</div><p>${f.d}</p></div>`;
    return f;
  }
  return { pintar, pintarUna };
})();
