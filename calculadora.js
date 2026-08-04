/* ══════════════════════════════════════════════════════════════
   CALCULADORA DE COSTO POR PAN
   No es un formulario de adorno: usa los gramos reales de las
   recetas del libro y devuelve el costo por unidad, el precio
   sugerido y la ganancia de la tanda.

   La lógica:
     costo del ingrediente por gramo = precio del paquete / gramos del paquete
     costo de la masa               = suma de (gramos de receta × costo por gramo)
     costo indirecto por tanda      = gas + luz + bolsas
     costo por unidad               = (masa + indirecto) / unidades
     precio sugerido                = costo por unidad × multiplicador
   ══════════════════════════════════════════════════════════════ */

window.CALC = (function(){

  /* Los ingredientes que puede tener en la despensa.
     'unidad' es cómo se compra; 'gramos' cuántos gramos trae por defecto. */
  const DESPENSA = [
    {id:'harina',   n:'Harina panadera',    paq:1000, precio:1.20, u:'1 kg'},
    {id:'levadura', n:'Levadura instantánea',paq:500,  precio:4.50, u:'500 g'},
    {id:'sal',      n:'Sal',                paq:1000, precio:0.80, u:'1 kg'},
    {id:'azucar',   n:'Azúcar',             paq:1000, precio:1.10, u:'1 kg'},
    {id:'grasa',    n:'Mantequilla o manteca',paq:500,precio:3.80, u:'500 g'},
    {id:'huevo',    n:'Huevos',             paq:600,  precio:2.40, u:'docena (600 g)'},
    {id:'leche',    n:'Leche en polvo',     paq:400,  precio:5.20, u:'400 g'},
    {id:'papelon',  n:'Papelón',            paq:500,  precio:2.00, u:'500 g'}
  ];

  /* Las recetas, con los gramos que ya están en el libro.
     'rinde' son las unidades que salen de esa tanda. */
  const RECETAS = [
    {id:'canilla',  n:'Pan canilla',        rinde:4, ing:{harina:600,agua:330,levadura:6,sal:12,azucar:30,grasa:30}},
    {id:'frances',  n:'Pan francés',        rinde:6, ing:{harina:405,agua:203,levadura:4,sal:8,azucar:20,grasa:20}},
    {id:'campesino',n:'Pan campesino',      rinde:1, ing:{harina:282,agua:155,levadura:3,sal:6,azucar:14,grasa:14}},
    {id:'sandwich', n:'Pan de sándwich',    rinde:1, ing:{harina:549,agua:137,levadura:6,sal:11,azucar:38,grasa:49,huevo:110}},
    {id:'hamburg',  n:'Pan de hamburguesa', rinde:8, ing:{harina:462,agua:139,levadura:5,sal:9,azucar:23,grasa:46,huevo:93,leche:23}},
    {id:'perro',    n:'Pan de perro caliente',rinde:8,ing:{harina:462,agua:139,levadura:5,sal:9,azucar:23,grasa:46,huevo:93,leche:23}}
  ];

  const KEY = 'pangocho.despensa';
  const guardado = () => { try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}} };
  const guardar  = d => localStorage.setItem(KEY, JSON.stringify(d));

  /* El agua no se cobra: es la única que no entra al costo. */
  function costoMasa(receta, precios){
    let total = 0, detalle = [];
    for(const [ing, gramos] of Object.entries(receta.ing)){
      if(ing === 'agua') continue;
      const d = DESPENSA.find(x=>x.id===ing);
      if(!d) continue;
      const p = precios[ing] ?? {paq:d.paq, precio:d.precio};
      const porGramo = p.precio / p.paq;
      const c = gramos * porGramo;
      total += c;
      detalle.push({n:d.n, gramos, costo:c});
    }
    return {total, detalle};
  }

  function calcular(recetaId, precios, indirecto, multiplicador){
    const r = RECETAS.find(x=>x.id===recetaId);
    const masa = costoMasa(r, precios);
    const costoTanda = masa.total + indirecto;
    const costoUnidad = costoTanda / r.rinde;
    const precioVenta = costoUnidad * multiplicador;
    return {
      receta: r,
      detalle: masa.detalle,
      costoIngredientes: masa.total,
      indirecto,
      costoTanda,
      costoUnidad,
      precioVenta,
      gananciaUnidad: precioVenta - costoUnidad,
      gananciaTanda: (precioVenta - costoUnidad) * r.rinde,
      margen: ((precioVenta - costoUnidad) / precioVenta) * 100
    };
  }

  const money = n => '$' + n.toFixed(2);
  const money3 = n => '$' + n.toFixed(3);

  function pintar(destino){
    const precios = guardado();
    const el = document.getElementById(destino);

    el.innerHTML = `
      <div class="calc">
        <div class="calc-bloque">
          <div class="calc-h">1 · Qué vas a hornear</div>
          <select id="cSelReceta" class="calc-sel">
            ${RECETAS.map(r=>`<option value="${r.id}">${r.n} — rinde ${r.rinde}</option>`).join('')}
          </select>
        </div>

        <div class="calc-bloque">
          <div class="calc-h">2 · Lo que pagaste por cada cosa</div>
          <p class="calc-nota">Pon lo que te costó el paquete y cuántos gramos trae. Se guarda: solo lo haces una vez.</p>
          <div class="calc-lista">
            ${DESPENSA.map(d=>{
              const p = precios[d.id] ?? {paq:d.paq, precio:d.precio};
              return `<div class="calc-fila" data-ing="${d.id}">
                <div class="calc-nm">${d.n}<span>${d.u}</span></div>
                <label class="calc-in"><i>$</i><input type="number" step="0.01" min="0" class="cPrecio" value="${p.precio}"></label>
                <label class="calc-in"><i>g</i><input type="number" step="1" min="1" class="cPaq" value="${p.paq}"></label>
              </div>`;
            }).join('')}
          </div>
        </div>

        <div class="calc-bloque">
          <div class="calc-h">3 · Lo que gastas aunque no sea ingrediente</div>
          <p class="calc-nota">Gas o luz del horno, bolsas, etiquetas. Por tanda.</p>
          <label class="calc-in ancho"><i>$</i><input type="number" step="0.01" min="0" id="cIndirecto" value="${precios._indirecto ?? 0.80}"></label>
        </div>

        <div class="calc-bloque">
          <div class="calc-h">4 · Cuánto le quieres ganar</div>
          <p class="calc-nota">La regla vieja de las panaderías es ×3. Menos de ×2,5 y no te alcanza para el trabajo.</p>
          <div class="calc-mult" id="cMult">
            ${[2,2.5,3,3.5,4].map(m=>`<button data-m="${m}" class="${m===(precios._mult??3)?'on':''}">×${m}</button>`).join('')}
          </div>
        </div>

        <div class="calc-out" id="cOut"></div>
      </div>`;

    const leerPrecios = () => {
      const o = {};
      el.querySelectorAll('.calc-fila').forEach(f=>{
        o[f.dataset.ing] = {
          precio: parseFloat(f.querySelector('.cPrecio').value) || 0,
          paq:    parseFloat(f.querySelector('.cPaq').value)    || 1
        };
      });
      o._indirecto = parseFloat(el.querySelector('#cIndirecto').value) || 0;
      o._mult = parseFloat(el.querySelector('#cMult .on')?.dataset.m) || 3;
      return o;
    };

    const refrescar = () => {
      const p = leerPrecios();
      guardar(p);
      const r = calcular(el.querySelector('#cSelReceta').value, p, p._indirecto, p._mult);

      el.querySelector('#cOut').innerHTML = `
        <div class="calc-res">
          <div class="calc-res-h">${r.receta.n} · rinde ${r.receta.rinde}</div>

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
              ${r.detalle.map(d=>`<tr><td>${d.n}</td><td class="n">${d.gramos} g</td><td class="n">${money3(d.costo)}</td></tr>`).join('')}
            </table>
          </details>
        </div>`;
    };

    el.addEventListener('input', e=>{ if(e.target.matches('input,select')) refrescar(); });
    el.addEventListener('change', e=>{ if(e.target.matches('select')) refrescar(); });
    el.querySelector('#cMult').addEventListener('click', e=>{
      const b = e.target.closest('button'); if(!b) return;
      el.querySelectorAll('#cMult button').forEach(x=>x.classList.remove('on'));
      b.classList.add('on'); refrescar();
    });
    refrescar();
  }

  return { pintar, RECETAS, DESPENSA, calcular };
})();
