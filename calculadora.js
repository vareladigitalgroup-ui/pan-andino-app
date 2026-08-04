/* ══════════════════════════════════════════════════════════════
   CALCULADORA DE COSTO POR PAN

   No es un formulario de adorno: usa los gramos reales de las recetas
   del libro y devuelve el costo por unidad, el precio sugerido y la
   ganancia de la tanda.

   La lógica:
     costo del ingrediente por gramo = precio del paquete / gramos del paquete
     costo de la masa               = suma de (gramos de receta × costo por gramo)
     costo indirecto por tanda      = gas + luz + bolsas
     costo por unidad               = (masa + indirecto) / unidades
     precio sugerido                = costo por unidad × multiplicador

   DOS COSAS QUE ANTES ESTABAN MAL Y AQUÍ SE ARREGLAN:

   1. Solo traía los 6 panes salados. Faltaba el catálogo tachirense
      entero — el camaleón, la acema, el pan de queso, el criollito.
      Ahora están los 20.

   2. Arrancaba con precios inventados y el resultado parecía una
      respuesta cuando era una suposición. Ahora los precios nacen
      MARCADOS COMO SIN REVISAR y el resultado se muestra advertido
      hasta que la persona ponga los suyos.
   ══════════════════════════════════════════════════════════════ */

window.CALC = (function(){

  /* La despensa. 'paq' son los gramos que trae el paquete y 'precio'
     es solo un punto de partida: lo que manda es lo que pague cada
     quien en su ciudad. */
  const DESPENSA = [
    {id:'harina',    n:'Harina panadera',        paq:1000, precio:1.20, u:'1 kg'},
    {id:'talvina',   n:'Talvina activa',         paq:1000, precio:0.70, u:'1 kg · la haces tú'},
    {id:'levadura',  n:'Levadura instantánea',   paq:500,  precio:4.50, u:'500 g'},
    {id:'sal',       n:'Sal',                    paq:1000, precio:0.80, u:'1 kg'},
    {id:'azucar',    n:'Azúcar',                 paq:1000, precio:1.10, u:'1 kg'},
    {id:'papelon',   n:'Papelón',                paq:500,  precio:2.00, u:'500 g'},
    {id:'grasa',     n:'Mantequilla o manteca',  paq:500,  precio:3.80, u:'500 g'},
    {id:'huevo',     n:'Huevos',                 paq:600,  precio:2.40, u:'docena · 600 g'},
    {id:'leche',     n:'Leche líquida',          paq:1000, precio:1.50, u:'1 litro'},
    {id:'lecheP',    n:'Leche en polvo',         paq:400,  precio:5.20, u:'400 g'},
    {id:'condensada',n:'Leche condensada',       paq:395,  precio:2.30, u:'1 lata · 395 g'},
    {id:'quesoB',    n:'Queso blanco',           paq:1000, precio:5.00, u:'1 kg'},
    {id:'quesoA',    n:'Queso amarillo',         paq:1000, precio:7.00, u:'1 kg'},
    {id:'bocadillo', n:'Bocadillo de guayaba',   paq:500,  precio:2.20, u:'500 g'},
    {id:'jamon',     n:'Jamón',                  paq:1000, precio:6.50, u:'1 kg'},
    {id:'coco',      n:'Coco rallado seco',      paq:250,  precio:2.00, u:'250 g'},
    {id:'especias',  n:'Canela, anís, guayabita',paq:100,  precio:3.00, u:'100 g'},
    {id:'ajonjoli',  n:'Ajonjolí',               paq:250,  precio:2.50, u:'250 g'}
  ];

  /* Las recetas. Los gramos salen del libro. Las del Táchira parten
     todas de la misma masa base, que es lo que dice el Módulo 4:
     cambian las proporciones, el formado y lo que se les suma. */
  const BASE = {harina:1000, talvina:300, azucar:200, grasa:150,
                leche:150, huevo:150, agua:100, sal:10};
  const con = (extra, cambios) => Object.assign({}, BASE, cambios||{}, extra||{});

  const RECETAS = [
    /* ── Los del Táchira ── */
    {g:'Panes tachirenses', id:'camaleon', n:'Pan camaleón', rinde:10,
     ing:{harina:1000, talvina:300, azucar:220, grasa:160, leche:160, huevo:150, agua:80, sal:10}},
    {g:'Panes tachirenses', id:'azucarado', n:'Pan azucarado', rinde:10,
     ing:{harina:1000, talvina:300, azucar:300, grasa:160, leche:160, huevo:150, agua:80, sal:10}},
    {g:'Panes tachirenses', id:'trenzado', n:'Pan trenzado', rinde:8,
     ing:{harina:1000, talvina:300, azucar:220, grasa:160, leche:160, huevo:150, agua:80, sal:10}},
    {g:'Panes tachirenses', id:'acema', n:'Acema tachirense', rinde:12,
     ing:con({especias:13})},
    {g:'Panes tachirenses', id:'acemaBQ', n:'Acema de bocadillo y queso', rinde:12,
     ing:con({especias:13, bocadillo:200, quesoB:150})},
    {g:'Panes tachirenses', id:'panQueso', n:'Pan de queso andino', rinde:14,
     ing:con({quesoB:200, quesoA:100})},
    {g:'Panes tachirenses', id:'panLeche', n:'Pan de leche', rinde:20,
     ing:con({lecheP:30}, {leche:200, agua:0})},
    {g:'Panes tachirenses', id:'panDios', n:'Pan de Dios', rinde:16,
     ing:con({condensada:120, coco:80})},
    {g:'Panes tachirenses', id:'pinita', n:'Piñita tachirense', rinde:12,
     ing:con()},
    {g:'Panes tachirenses', id:'caracol', n:'Bocadillo enrollado', rinde:14,
     ing:con({bocadillo:250})},
    {g:'Panes tachirenses', id:'criollito', n:'Criollito · hojaldre', rinde:24,
     ing:con({grasa:250})},
    {g:'Panes tachirenses', id:'milhojas', n:'Mil hojas andino', rinde:12,
     ing:con({grasa:300})},

    /* ── Los salados ── */
    {g:'Panes salados', id:'canilla', n:'Pan canilla', rinde:4,
     ing:{harina:600, agua:330, levadura:6, sal:12, azucar:30, grasa:30}},
    {g:'Panes salados', id:'frances', n:'Pan francés', rinde:6,
     ing:{harina:405, agua:203, levadura:4, sal:8, azucar:20, grasa:20}},
    {g:'Panes salados', id:'campesino', n:'Pan campesino', rinde:1,
     ing:{harina:282, agua:155, levadura:3, sal:6, azucar:14, grasa:14}},
    {g:'Panes salados', id:'sandwich', n:'Pan de sándwich', rinde:1,
     ing:{harina:549, agua:137, levadura:6, sal:11, azucar:38, grasa:49, huevo:110}},
    {g:'Panes salados', id:'hamburg', n:'Pan de hamburguesa', rinde:8,
     ing:{harina:462, agua:139, levadura:5, sal:9, azucar:23, grasa:46, huevo:93, lecheP:23, ajonjoli:10}},
    {g:'Panes salados', id:'perro', n:'Pan de perro caliente', rinde:8,
     ing:{harina:462, agua:139, levadura:5, sal:9, azucar:23, grasa:46, huevo:93, lecheP:23}},

    /* ── Los pasapalos ── */
    {g:'Pasapalos', id:'tequenos', n:'Tequeños', rinde:40,
     ing:{harina:500, grasa:125, agua:200, huevo:50, azucar:10, sal:8, quesoB:600}},
    {g:'Pasapalos', id:'cachitos', n:'Cachitos de jamón', rinde:6,
     ing:{harina:345, agua:86, leche:69, grasa:35, azucar:35, huevo:17, sal:7, levadura:3, jamon:124}}
  ];

  const KEY = 'pangocho.despensa';
  const guardado = () => { try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}} };
  const guardar  = d => localStorage.setItem(KEY, JSON.stringify(d));

  /* El agua no se cobra: es la única que no entra al costo. */
  function costoMasa(receta, precios){
    let total = 0; const detalle = [];
    for(const [ing, gramos] of Object.entries(receta.ing)){
      if(ing === 'agua' || !gramos) continue;
      const d = DESPENSA.find(x=>x.id===ing);
      if(!d) continue;
      const p = precios[ing] || {paq:d.paq, precio:d.precio};
      const c = gramos * (p.precio / p.paq);
      total += c;
      detalle.push({n:d.n, gramos, costo:c});
    }
    detalle.sort((a,b)=>b.costo-a.costo);
    return {total, detalle};
  }

  function calcular(recetaId, precios, indirecto, multiplicador){
    const r = RECETAS.find(x=>x.id===recetaId) || RECETAS[0];
    const masa = costoMasa(r, precios);
    const costoTanda = masa.total + indirecto;
    const costoUnidad = costoTanda / r.rinde;
    const precioVenta = costoUnidad * multiplicador;
    return { receta:r, detalle:masa.detalle, costoIngredientes:masa.total, indirecto,
             costoTanda, costoUnidad, precioVenta,
             gananciaUnidad: precioVenta - costoUnidad,
             gananciaTanda: (precioVenta - costoUnidad) * r.rinde,
             margen: ((precioVenta - costoUnidad) / precioVenta) * 100 };
  }

  const money  = n => '$' + n.toFixed(2);
  const money3 = n => '$' + n.toFixed(3);

  /* Qué ingredientes hacen falta para la receta elegida. Mostrar los
     18 siempre es ruido: si vas a hacer canilla no te importa el coco. */
  const usados = r => DESPENSA.filter(d => r.ing[d.id]);

  function pintar(destino){
    const el = document.getElementById(destino);
    const st = guardado();

    const grupos = [...new Set(RECETAS.map(r=>r.g))];

    el.innerHTML = `
      <div class="calc">
        ${st._revisado ? '' : `<div class="calc-aviso" id="cAviso">
          <b>Ojo con esto antes de creerle al resultado.</b>
          Los precios de abajo son de ejemplo, no son los tuyos. Cámbialos por lo
          que pagaste tú en tu ciudad — si no, el número que te dé no sirve para
          decidir nada. Se guardan solos y esto lo haces una sola vez.
        </div>`}

        <div class="calc-bloque">
          <div class="calc-h">1 · Qué vas a hornear</div>
          <select id="cSelReceta" class="calc-sel">
            ${grupos.map(g=>`<optgroup label="${g}">${
              RECETAS.filter(r=>r.g===g).map(r=>
                `<option value="${r.id}"${r.id===st._receta?' selected':''}>${r.n} — rinde ${r.rinde}</option>`
              ).join('')}</optgroup>`).join('')}
          </select>
        </div>

        <div class="calc-bloque">
          <div class="calc-h">2 · Lo que pagaste por cada cosa</div>
          <p class="calc-nota">Solo te pido lo que lleva este pan. El precio del paquete
            y cuántos gramos trae.</p>
          <div class="calc-lista" id="cLista"></div>
        </div>

        <div class="calc-bloque">
          <div class="calc-h">3 · Lo que gastas aunque no sea ingrediente</div>
          <p class="calc-nota">Gas o luz del horno, bolsas, etiquetas. Por tanda.</p>
          <label class="calc-in ancho"><i>$</i><input type="number" step="0.01" min="0"
            id="cIndirecto" value="${st._indirecto ?? 0.80}"></label>
        </div>

        <div class="calc-bloque">
          <div class="calc-h">4 · Cuánto le quieres ganar</div>
          <p class="calc-nota">La regla vieja de las panaderías es ×3. Menos de ×2,5 y no
            te alcanza para el trabajo.</p>
          <div class="calc-mult" id="cMult">
            ${[2,2.5,3,3.5,4,4.5,5].map(m=>
              `<button data-m="${m}" class="${m===(st._mult??3)?'on':''}">×${m}</button>`).join('')}
          </div>
        </div>

        <div class="calc-out" id="cOut"></div>
      </div>`;

    const recetaActual = () => RECETAS.find(x=>x.id===el.querySelector('#cSelReceta').value) || RECETAS[0];

    /* La lista de ingredientes se rearma con cada pan elegido */
    function pintarLista(){
      const p = guardado();
      el.querySelector('#cLista').innerHTML = usados(recetaActual()).map(d=>{
        const g = p[d.id];
        const v = g || {paq:d.paq, precio:d.precio};
        const sinTocar = !g;
        return `<div class="calc-fila${sinTocar?' sin-tocar':''}" data-ing="${d.id}">
          <div class="calc-nm">${d.n}<span>${d.u}</span></div>
          <label class="calc-in"><i>$</i><input type="number" step="0.01" min="0"
            class="cPrecio" value="${v.precio}"></label>
          <label class="calc-in"><i>g</i><input type="number" step="1" min="1"
            class="cPaq" value="${v.paq}"></label>
        </div>`;
      }).join('');
    }

    /* Solo se guarda lo que la persona tocó. Lo que nunca tocó sigue
       contando como "de ejemplo" y por eso el aviso no desaparece. */
    function leer(){
      const o = guardado();
      el.querySelectorAll('.calc-fila').forEach(f=>{
        if(f.classList.contains('sin-tocar')) return;
        o[f.dataset.ing] = {
          precio: parseFloat(f.querySelector('.cPrecio').value) || 0,
          paq:    parseFloat(f.querySelector('.cPaq').value)    || 1
        };
      });
      o._indirecto = parseFloat(el.querySelector('#cIndirecto').value) || 0;
      o._mult      = parseFloat(el.querySelector('#cMult .on')?.dataset.m) || 3;
      o._receta    = el.querySelector('#cSelReceta').value;
      return o;
    }

    /* Para el cálculo sí se usan todos, tocados o no. Lo que cambia es
       que el resultado se muestra advertido. */
    function preciosVigentes(){
      const o = {};
      el.querySelectorAll('.calc-fila').forEach(f=>{
        o[f.dataset.ing] = {
          precio: parseFloat(f.querySelector('.cPrecio').value) || 0,
          paq:    parseFloat(f.querySelector('.cPaq').value)    || 1
        };
      });
      return o;
    }

    function refrescar(){
      const st = leer();
      const sinRevisar = el.querySelectorAll('.calc-fila.sin-tocar').length;
      st._revisado = sinRevisar === 0;
      guardar(st);

      const r = calcular(el.querySelector('#cSelReceta').value,
                         preciosVigentes(), st._indirecto, st._mult);

      el.querySelector('#cOut').innerHTML = `
        <div class="calc-res${sinRevisar?' provisional':''}">
          <div class="calc-res-h">${r.receta.n} · rinde ${r.receta.rinde}</div>
          ${sinRevisar ? `<div class="calc-prov">Provisional · te faltan
            <b>${sinRevisar}</b> ${sinRevisar===1?'precio':'precios'} por poner</div>` : ''}

          <div class="calc-grande">
            <div class="calc-gran">
              <span class="lb">Te cuesta cada uno</span>
              <span class="vl">${money(r.costoUnidad)}</span>
            </div>
            <div class="calc-gran destaca">
              <span class="lb">Véndelo a</span>
              <span class="vl">${money(r.precioVenta)}</span>
            </div>
          </div>

          <div class="calc-linea"><span>Ingredientes de la tanda</span><b>${money(r.costoIngredientes)}</b></div>
          <div class="calc-linea"><span>Gas, luz y bolsas</span><b>${money(r.indirecto)}</b></div>
          <div class="calc-linea total"><span>Costo de la tanda</span><b>${money(r.costoTanda)}</b></div>

          <div class="calc-gan">
            <div><span class="lb">Ganas por pan</span><span class="vl">${money(r.gananciaUnidad)}</span></div>
            <div><span class="lb">Ganas por tanda</span><span class="vl">${money(r.gananciaTanda)}</span></div>
            <div><span class="lb">Margen</span><span class="vl">${r.margen.toFixed(0)}%</span></div>
          </div>

          <details class="calc-det">
            <summary>Ver de dónde sale el costo</summary>
            <table class="calc-tabla">
              <tr><th>Ingrediente</th><th>Lleva</th><th>Cuesta</th></tr>
              ${r.detalle.map(d=>`<tr><td>${d.n}</td><td class="n">${d.gramos} g</td>
                <td class="n">${money3(d.costo)}</td></tr>`).join('')}
            </table>
            <p class="calc-nota">Ordenado de lo que más cuesta a lo que menos.
              El de arriba es donde conviene negociar con el proveedor.</p>
          </details>
        </div>`;

      const av = el.querySelector('#cAviso');
      if(av && !sinRevisar) av.remove();
    }

    /* Tocar un precio lo marca como propio y le quita el aviso */
    el.addEventListener('input', e=>{
      if(e.target.matches('.cPrecio,.cPaq'))
        e.target.closest('.calc-fila')?.classList.remove('sin-tocar');
      if(e.target.matches('input')) refrescar();
    });
    el.querySelector('#cSelReceta').addEventListener('change', ()=>{ pintarLista(); refrescar(); });
    el.querySelector('#cMult').addEventListener('click', e=>{
      const b = e.target.closest('button'); if(!b) return;
      el.querySelectorAll('#cMult button').forEach(x=>x.classList.remove('on'));
      b.classList.add('on'); refrescar();
    });

    pintarLista();
    refrescar();
  }

  return { pintar, RECETAS, DESPENSA, calcular };
})();
