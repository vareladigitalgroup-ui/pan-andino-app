/* ══════════════════════════════════════════════════════════════
   EL DIARIO DE LA TALVINA
   Pedido de Jonathan: que la persona vaya marcando día por día
   hasta tener la talvina lista, y que pueda elegir tamaño.

   Guarda por persona (localStorage). Calcula las cantidades según
   el tamaño elegido. Sabe en qué día va y qué toca hacer hoy.
   ══════════════════════════════════════════════════════════════ */

window.TALVINA = (function(){

  const KEY = 'pangocho.talvina';

  /* La fórmula base es para 138 g. Los tamaños escalan desde ahí. */
  const BASE = { harina:45, agua:67, azucar:13, papelon:13, total:138 };
  const REFRESCO = { talvina:69, harina:22, agua:33, azucar:7, papelon:7, total:138 };

  const TAMANOS = [
    {id:'chica',  n:'Chica',   x:1, ds:'Para hornear una tanda de vez en cuando'},
    {id:'normal', n:'Normal',  x:2, ds:'Para hornear todas las semanas'},
    {id:'grande', n:'Grande',  x:4, ds:'Para vender: varias tandas por semana'}
  ];

  const DIAS = [
    {d:0, t:'Mezclas todo',        q:'Mezcla en un frasco de vidrio. Queda una papilla líquida, más aguada que una masa. Tapa con GASA o un paño, nunca hermético.', destaca:true},
    {d:1, t:'Revuelves',           q:'Una vuelta con cuchara y vuelves a tapar. Nada más.'},
    {d:2, t:'Revuelves',           q:'Otra vuelta. Puede oler raro: es normal.'},
    {d:3, t:'Revuelves',           q:'Ya debería empezar a burbujear un poco. Si no, mueve el frasco a un sitio más tibio.'},
    {d:4, t:'Revuelves',           q:'El olor empieza a cambiar: de raro a dulce y ácido.'},
    {d:5, t:'Revuelves',           q:'Última vuelta antes del primer refresco.'},
    {d:6, t:'Botas la mitad y refrescas', q:'Botas la mitad y le agregas el refresco. Descansa 12 horas.', destaca:true},
    {d:7, t:'Refrescas otra vez',  q:'Botas la mitad y refrescas. A las 4 HORAS está activa y lista para usar.', destaca:true}
  ];

  const est = () => { try{ return JSON.parse(localStorage.getItem(KEY)) || {tam:'normal', hechos:[]} }
                      catch(e){ return {tam:'normal', hechos:[]} } };
  const grabar = o => localStorage.setItem(KEY, JSON.stringify(o));

  const g = (n, x) => {
    const v = n * x;
    return v >= 1000 ? (v/1000).toFixed(2).replace('.',',') + ' kg' : Math.round(v) + ' g';
  };

  function pintar(destino){
    const s = est();
    const tam = TAMANOS.find(t=>t.id===s.tam) || TAMANOS[1];
    const x = tam.x;
    const hechos = s.hechos || [];
    const listos = hechos.length;
    const lista = listos >= 8;
    // el día que toca es el primero sin marcar
    const hoy = DIAS.find(d => !hechos.includes(d.d));

    document.getElementById(destino).innerHTML = `
      <div class="tv">

        <div class="tv-bloque">
          <div class="tv-h">Qué tamaño vas a hacer</div>
          <div class="tv-tam" id="tvTam">
            ${TAMANOS.map(t=>`<button data-t="${t.id}" class="${t.id===tam.id?'on':''}">
              <b>${t.n}</b><i>${t.ds}</i></button>`).join('')}
          </div>
        </div>

        <div class="tv-bloque">
          <div class="tv-h">Lo que mezclas el día cero</div>
          <div class="tv-ing">
            <div><span class="q">${g(BASE.harina,x)}</span><span class="w">harina panadera</span></div>
            <div><span class="q">${g(BASE.agua,x)}</span><span class="w">agua</span></div>
            <div><span class="q">${g(BASE.azucar,x)}</span><span class="w">azúcar</span></div>
            <div><span class="q">${g(BASE.papelon,x)}</span><span class="w">papelón rallado</span></div>
            <div class="tot"><span class="q">${g(BASE.total,x)}</span><span class="w">de talvina</span></div>
          </div>
        </div>

        <div class="tv-bloque">
          <div class="tv-h">El refresco, del día 6 en adelante</div>
          <div class="tv-ing">
            <div><span class="q">${g(REFRESCO.talvina,x)}</span><span class="w">talvina (la mitad que dejaste)</span></div>
            <div><span class="q">${g(REFRESCO.harina,x)}</span><span class="w">harina panadera</span></div>
            <div><span class="q">${g(REFRESCO.agua,x)}</span><span class="w">agua</span></div>
            <div><span class="q">${g(REFRESCO.azucar,x)}</span><span class="w">azúcar</span></div>
            <div><span class="q">${g(REFRESCO.papelon,x)}</span><span class="w">papelón rallado</span></div>
          </div>
          <p class="tv-nota">Primero juntas la talvina con el agua y la deshaces. Después el azúcar y el papelón. <b>La harina va de última</b>, o se hacen grumos que no se van.</p>
        </div>

        ${ lista ? `
        <div class="tv-lista">
          <div class="tv-lista-t">Tu talvina está lista</div>
          <div class="tv-lista-s">A las 4 horas de cada refresco está activa. Antes de usarla, hazle el test de flotación: una cucharada en un vaso con agua. <b>Si flota, va. Si se hunde, no.</b></div>
          <button class="tv-reset" id="tvReset">Empezar una talvina nueva</button>
        </div>` : `
        <div class="tv-hoy">
          <div class="tv-hoy-k">Hoy te toca</div>
          <div class="tv-hoy-t">Día ${hoy.d} · ${hoy.t}</div>
          <div class="tv-hoy-s">${hoy.q}</div>
        </div>` }

        <div class="tv-bloque">
          <div class="tv-h">Los ocho días <span class="tv-cont">${listos} de 8</span></div>
          <div class="tv-barra"><i style="width:${(listos/8)*100}%"></i></div>
          <ul class="tv-dias" id="tvDias">
            ${DIAS.map(d=>{
              const ok = hechos.includes(d.d);
              const esHoy = !ok && hoy && hoy.d === d.d;
              return `<li class="${ok?'ok':''} ${esHoy?'hoy':''} ${d.destaca?'clave':''}">
                <button data-d="${d.d}" class="tv-check" aria-label="Marcar día ${d.d}">
                  ${ok ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' : ''}
                </button>
                <div class="tv-tx">
                  <div class="tv-t">Día ${d.d} · ${d.t}</div>
                  <div class="tv-s">${d.q}</div>
                </div>
              </li>`;
            }).join('')}
          </ul>
        </div>

        <div class="tv-aviso">
          <div class="t">Si se hunde, no la uses</div>
          <p>Dale doce horas más y prueba otra vez. Una talvina apurada arruina la masa entera. Es la única parte de este método donde no se puede correr.</p>
        </div>
      </div>`;

    const el = document.getElementById(destino);
    el.querySelector('#tvTam').addEventListener('click', e=>{
      const b = e.target.closest('button'); if(!b) return;
      const o = est(); o.tam = b.dataset.t; grabar(o); pintar(destino);
    });
    el.querySelector('#tvDias').addEventListener('click', e=>{
      const b = e.target.closest('.tv-check'); if(!b) return;
      const d = +b.dataset.d, o = est();
      o.hechos = o.hechos || [];
      o.hechos = o.hechos.includes(d) ? o.hechos.filter(x=>x!==d) : [...o.hechos, d];
      grabar(o); pintar(destino);
    });
    const r = el.querySelector('#tvReset');
    if(r) r.addEventListener('click', ()=>{ grabar({tam:s.tam, hechos:[]}); pintar(destino); });
  }

  return { pintar };
})();
