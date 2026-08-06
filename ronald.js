/* ══════════════════════════════════════════════════════════════
   RONALD 24/7 — la ficha y el chat

   Qué es esto y por qué está armado así:

   El curso enseña EL método. Ronald sabe TU realidad — que tu horno
   es de gas sin números, que vives en Bogotá, que consigues harina
   todo uso. Eso es lo que se paga: no más contenido, sino que el
   contenido se ajuste a lo que la persona tiene en su casa.

   Por eso la ficha va PRIMERO y no es opcional. Sin ficha, Ronald
   contesta como un manual y no vale $17. Con ficha, la primera
   respuesta ya es un plan personal — y esa primera respuesta se
   dispara sola, sin que la persona tenga que saber qué preguntar.
   Ese es el momento en que entiende qué compró.

   Siete preguntas, casi todas de tocar un botón. Se guardan en el
   teléfono (localStorage), no en un servidor: no hay cuentas ni
   claves ni nada que se pueda perder del otro lado.

   Servidor: worker de Cloudflare. Solo responde si el pedido viene
   del dominio de la app, así que la clave de Gemini nunca baja al
   teléfono de nadie.
   ══════════════════════════════════════════════════════════════ */

window.RONALD = (function(){

const API = 'https://ronald-24-7.vareladigital-group.workers.dev';

const K_FICHA = 'pangocho.ficha';
const K_CHAT  = 'pangocho.chat';
const K_COD   = 'pangocho.codigo.o2';
const MAX_HIST = 20;          // lo que se guarda; al servidor van las últimas 8

/* ══ El candado de verdad ══
   El código NO está en este archivo ni en el index.html. Antes sí, y
   cualquiera que abriera "ver código fuente" entraba gratis y gastaba
   los créditos de Gemini. Ahora el código vive como secreto del worker:
   la app se lo manda para que él diga si sirve, y lo guarda para
   acompañar cada pregunta. Sin código, el worker no responde nada. */
const codigoGuardado = () => { try{ return localStorage.getItem(K_COD)||'' }catch(e){ return '' } };

async function verificar(codigo){
  const c = String(codigo||'').trim().toUpperCase();
  if(!c) return false;
  try{
    const rs = await fetch(API, { method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ accion:'verificar', codigo:c }) });
    if(!rs.ok) return false;
    localStorage.setItem(K_COD, c);
    return true;
  }catch(e){ return 'sin-red'; }   // no es "código malo": es que no hay internet
}

/* ══ Las siete preguntas ══════════════════════════════════════
   El orden no es casual: arranca por el horno porque es lo que más
   cambia la respuesta y es lo que la gente sabe contestar sin
   pensar. Las de negocio van al final, cuando ya agarró ritmo. */
const PREGUNTAS = [
  { k:'horno', t:'¿En qué horneas?',
    s:'Es lo primero que necesito saber. Cambia todo lo demás.',
    op:[
      ['gas',        'Cocina de gas con horno',   'El de toda la vida, abajo de las hornillas'],
      ['electrico',  'Horno eléctrico',           'De mesa o empotrado, con resistencias'],
      ['lena',       'Horno de leña o de barro',  'Se calienta con fuego adentro'],
      ['freidora',   'Freidora de aire',          'Air fryer'],
      ['industrial', 'Horno de panadería',        'Industrial, de piso o rotativo']
    ]},

  { k:'termometro', t:'¿Tu horno marca la temperatura?',
    s:'Si no marca, no te voy a mandar a poner 180 °C. Te enseño a medirlo con lo que tienes.',
    op:[
      ['numeros', 'Sí, tiene números',        'Puedo poner 180, 200, lo que sea'],
      ['perilla', 'Solo bajo, medio y alto',  'La perilla no tiene grados'],
      ['nada',    'No marca nada',            'Prendo y ya, no sé a cuánto está'],
      ['aparte',  'Tengo termómetro aparte',  'De horno o de pincho']
    ]},

  { k:'donde', t:'¿Dónde vives?',
    s:'La harina, el clima y la altura cambian de país a país. Y también cambia a cuánto puedes vender.',
    libre:'Ej: Bogotá, Colombia' },

  { k:'harina', t:'¿Qué harina consigues?',
    s:'Si no sabes cuál es, dímelo así. Te enseño a reconocerla por el paquete.',
    op:[
      ['panadera', 'Harina panadera o de fuerza', 'Dice "panadera", "fuerte" o "para pan"'],
      ['todouso',  'Harina todo uso',             'La normal de repostería'],
      ['ambas',    'Consigo las dos',             ''],
      ['nose',     'La que haya, no sé cuál es',  'Compro la que encuentro']
    ]},

  { k:'nivel', t:'¿Cuánto has horneado?',
    s:'Sin pena. Es para saber desde dónde te explico.',
    op:[
      ['cero',     'Nunca en mi vida',            'Empiezo de cero'],
      ['poco',     'Lo he intentado pocas veces', 'Me sale a medias'],
      ['seguido',  'Horneo seguido en mi casa',   'Ya me defiendo'],
      ['vendo',    'Ya vendo pan',                'Esto es mi trabajo']
    ]},

  { k:'meta', t:'¿Para qué quieres el pan?',
    s:'Al que hornea para su casa no le hablo de márgenes. Al que va a vender, sí.',
    op:[
      ['casa',     'Para mi casa y mi familia',        ''],
      ['empezar',  'Quiero empezar a vender',          'Todavía no vendo nada'],
      ['mejorar',  'Ya vendo y quiero mejorar',        'Subir calidad o ganancia'],
      ['negocio',  'Quiero montar la panadería',       'Ir en serio']
    ]},

  { k:'traba', multi:true, t:'¿Qué es lo que más se te traba?',
    s:'Toca todas las que te pasen. Puedes tocar varias.',
    op:[
      ['nosube',   'No me sube la masa',                    ''],
      ['quemado',  'Se quema por fuera y queda crudo',      ''],
      ['duro',     'Al día siguiente queda como piedra',    ''],
      ['talvina',  'La talvina no me sale',                 ''],
      ['forma',    'No me quedan bonitos, se me deforman',  ''],
      ['precio',   'No sé cuánto cobrar',                   ''],
      ['nada',     'Todavía nada, voy empezando',           '']
    ],
    extra:'¿Algo más que deba saber de ti? (opcional)' }
];

/* ══ De la ficha guardada al texto que lee Ronald ══
   Se manda en español corrido y no en JSON: el modelo lo entiende
   mejor y ocupa menos. */
const DICHO = {
  horno:{ gas:'cocina de gas con horno abajo', electrico:'horno eléctrico',
          lena:'horno de leña o de barro', freidora:'freidora de aire (air fryer)',
          industrial:'horno de panadería industrial' },
  termometro:{ numeros:'el horno marca grados con números',
               perilla:'el horno NO marca grados, solo bajo/medio/alto',
               nada:'el horno NO marca nada de temperatura',
               aparte:'tiene un termómetro de horno aparte' },
  harina:{ panadera:'consigue harina panadera o de fuerza',
           todouso:'solo consigue harina todo uso',
           ambas:'consigue harina panadera y todo uso',
           nose:'no sabe qué tipo de harina compra' },
  nivel:{ cero:'nunca ha horneado en su vida', poco:'ha horneado pocas veces y le sale a medias',
          seguido:'hornea seguido en su casa', vendo:'ya vende pan' },
  meta:{ casa:'hornea para su casa y su familia', empezar:'quiere empezar a vender',
         mejorar:'ya vende y quiere mejorar', negocio:'quiere montar una panadería' },
  traba:{ nosube:'no le sube la masa', quemado:'se le quema por fuera y queda crudo por dentro',
          duro:'el pan le queda duro al día siguiente', talvina:'no le sale la talvina',
          forma:'no le quedan bien formados', precio:'no sabe cuánto cobrar',
          nada:'todavía no tiene un problema puntual, va empezando' }
};

function aTexto(f){
  if(!f) return '';
  const l = [];
  if(f.horno)      l.push('Hornea en: ' + (DICHO.horno[f.horno]||f.horno) + '.');
  if(f.termometro) l.push('Temperatura: ' + (DICHO.termometro[f.termometro]||f.termometro) + '.');
  if(f.donde)      l.push('Vive en: ' + f.donde + '.');
  if(f.harina)     l.push('Harina: ' + (DICHO.harina[f.harina]||f.harina) + '.');
  if(f.nivel)      l.push('Experiencia: ' + (DICHO.nivel[f.nivel]||f.nivel) + '.');
  if(f.meta)       l.push('Lo que busca: ' + (DICHO.meta[f.meta]||f.meta) + '.');
  const tr = (f.traba||[]).map(x=>DICHO.traba[x]||x).filter(Boolean);
  if(tr.length)    l.push('Se le traba: ' + tr.join('; ') + '.');
  if(f.extra)      l.push('Cuenta además: "' + f.extra + '".');
  return l.join('\n');
}

/* ══ Guardado ══ */
const leerFicha = () => { try{ return JSON.parse(localStorage.getItem(K_FICHA)) }catch(e){ return null } };
const guardarFicha = f => localStorage.setItem(K_FICHA, JSON.stringify(f));
const leerChat = () => { try{ return JSON.parse(localStorage.getItem(K_CHAT))||[] }catch(e){ return [] } };
const guardarChat = c => localStorage.setItem(K_CHAT, JSON.stringify(c.slice(-MAX_HIST)));

/* ══ Texto seguro ══
   La respuesta del modelo se escapa SIEMPRE antes de tocar el DOM.
   Después se le devuelven a mano solo las negritas y las listas: es
   todo el formato que el prompt le permite usar. */
const esc = s => String(s??'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function pintarTexto(t){
  const bloques = esc(t).split(/\n{2,}/);
  return bloques.map(b=>{
    const lineas = b.split('\n').map(x=>x.trim()).filter(Boolean);
    const lista = lineas.length && lineas.every(x=>/^[-•*]\s+/.test(x));
    const num   = lineas.length && lineas.every(x=>/^\d+[.)]\s+/.test(x));
    const neg = s => s.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
    if(lista) return '<ul>'+lineas.map(x=>'<li>'+neg(x.replace(/^[-•*]\s+/,''))+'</li>').join('')+'</ul>';
    if(num)   return '<ol>'+lineas.map(x=>'<li>'+neg(x.replace(/^\d+[.)]\s+/,''))+'</li>').join('')+'</ol>';
    /* Un párrafo por línea. El modelo a veces separa con un solo salto
       y con <br> los párrafos quedan pegados y no se pueden leer en un
       teléfono. Aquí siempre respiran igual. */
    return lineas.map(x=>'<p>'+neg(x)+'</p>').join('');
  }).join('');
}

/* ══ Las preguntas sugeridas ══
   Nacen de la ficha, no son una lista fija. Al que no tiene
   termómetro le ofrece medirlo; al que quiere vender, el precio.
   Es la diferencia entre un chat vacío y uno que ya te conoce. */
function sugeridas(f){
  const s = [];
  if(f.termometro==='perilla' || f.termometro==='nada')
    s.push('¿Cómo mido la temperatura de mi horno si no marca grados?');
  if(f.horno==='lena')      s.push('¿Cómo sé cuándo mi horno de leña está listo?');
  if(f.horno==='freidora')  s.push('¿Qué panes me salen bien en freidora de aire?');
  if(f.nivel==='cero' || f.nivel==='poco') s.push('¿Con qué pan empiezo?');
  if(f.traba&&f.traba.includes('nosube'))  s.push('No me subió la masa, ¿qué hice mal?');
  if(f.traba&&f.traba.includes('quemado')) s.push('Se me quema por fuera y queda crudo, ¿qué hago?');
  if(f.traba&&f.traba.includes('talvina')) s.push('Mi talvina no flota, ¿la boto o la salvo?');
  if(f.meta!=='casa')       s.push('¿A cuánto vendo el pan donde vivo?');
  if(f.meta==='empezar'||f.meta==='negocio') s.push('¿Cuánto necesito para arrancar a vender?');
  s.push('Armame un plan para hornear este fin de semana');
  return s.slice(0,5);
}

/* ══════════════ EL CUESTIONARIO ══════════════ */
function pintarFicha(host, alTerminar){
  let paso = 0;
  const r = {};

  function dibujar(){
    const p = PREGUNTAS[paso];
    const sel = r[p.k];
    const marcada = v => p.multi ? (sel||[]).includes(v) : sel===v;

    host.innerHTML = `
      <div class="ro-wrap">
        <div class="ro-prog"><div class="ro-prog-b" style="width:${(paso)/PREGUNTAS.length*100}%"></div></div>
        <div class="ro-paso">Pregunta ${paso+1} de ${PREGUNTAS.length}</div>
        <h2 class="ro-q">${esc(p.t)}</h2>
        <p class="ro-qs">${esc(p.s||'')}</p>

        ${p.libre ? `
          <input class="ro-libre" id="roLibre" type="text" autocomplete="off"
                 placeholder="${esc(p.libre)}" value="${esc(sel||'')}">
        ` : `
          <div class="ro-ops">${p.op.map(([v,t,s])=>`
            <button class="ro-op${marcada(v)?' on':''}" data-v="${v}">
              <span class="ro-op-t">${esc(t)}</span>
              ${s?`<span class="ro-op-s">${esc(s)}</span>`:''}
              <span class="ro-tick"></span>
            </button>`).join('')}</div>
        `}

        ${p.extra ? `<input class="ro-libre ro-extra" id="roExtra" type="text"
              autocomplete="off" placeholder="${esc(p.extra)}" value="${esc(r.extra||'')}">` : ''}

        <div class="ro-nav">
          ${paso>0?`<button class="ro-atras" id="roAtras">Atrás</button>`:''}
          <button class="ro-sig" id="roSig">${paso===PREGUNTAS.length-1?'Listo, conóceme':'Siguiente'}</button>
        </div>
      </div>`;

    const sig = host.querySelector('#roSig');
    const libre = host.querySelector('#roLibre');

    /* El botón vive apagado hasta que hay respuesta: es más honesto
       que dejarlo prendido y contestar con un error. */
    const listo = () => p.libre ? !!(libre&&libre.value.trim())
                                : (p.multi ? (r[p.k]||[]).length>0 : !!r[p.k]);
    const refrescar = () => sig.disabled = !listo();
    refrescar();

    if(libre){
      libre.oninput = refrescar;
      libre.onkeydown = e => { if(e.key==='Enter' && listo()) sig.click(); };
      setTimeout(()=>libre.focus(),80);
    }

    host.querySelectorAll('.ro-op').forEach(b=>{
      b.onclick = ()=>{
        const v = b.dataset.v;
        if(p.multi){
          const a = r[p.k] = r[p.k]||[];
          /* "Todavía nada" no convive con un problema concreto. */
          if(v==='nada'){ r[p.k] = a.includes('nada') ? [] : ['nada']; }
          else {
            const i = a.indexOf(v);
            i<0 ? a.push(v) : a.splice(i,1);
            r[p.k] = a.filter(x=>x!=='nada');
          }
          dibujar();
        } else {
          r[p.k] = v;
          /* Una sola respuesta: avanza sola. Siete preguntas se
             sienten largas solo si hay que tocar dos veces cada una. */
          host.querySelectorAll('.ro-op').forEach(x=>x.classList.remove('on'));
          b.classList.add('on');
          refrescar();
          setTimeout(()=>{ if(paso<PREGUNTAS.length-1){ paso++; dibujar(); } }, 190);
        }
      };
    });

    if(host.querySelector('#roAtras'))
      host.querySelector('#roAtras').onclick = ()=>{ paso--; dibujar(); };

    sig.onclick = ()=>{
      if(!listo()) return;
      if(libre) r[p.k] = libre.value.trim();
      const ex = host.querySelector('#roExtra');
      if(ex) r.extra = ex.value.trim();
      if(paso < PREGUNTAS.length-1){ paso++; dibujar(); }
      else { guardarFicha(r); localStorage.removeItem(K_CHAT); alTerminar(r); }
    };
  }
  dibujar();
}

/* ══════════════ EL CHAT ══════════════ */
function pintarChat(host, ficha, arranque){
  let chat = leerChat();
  let ocupado = false;

  host.innerHTML = `
    <div class="ro-chat">
      <div class="ro-cab">
        <div class="ro-av"><img src="img/ronald.jpg" alt=""
             onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'ro-av-l',textContent:'R'}))"></div>
        <div class="ro-cab-t">
          <div class="t">Ronald</div>
          <div class="s" id="roEstado">Sabe todo lo que hay en tu curso</div>
        </div>
        <button class="ro-editar" id="roEditar" title="Cambiar mi ficha">Mi ficha</button>
      </div>
      <div class="ro-hilo" id="roHilo"></div>
      <div class="ro-sug" id="roSug"></div>
      <form class="ro-barra" id="roForm" autocomplete="off">
        <input id="roIn" type="text" placeholder="Escribe lo que te está pasando" maxlength="600">
        <button type="submit" id="roEnviar" aria-label="Enviar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </form>
    </div>`;

  const hilo = host.querySelector('#roHilo');
  const sug  = host.querySelector('#roSug');
  const inp  = host.querySelector('#roIn');
  const est  = host.querySelector('#roEstado');

  /* Al abrir se salta al fondo de golpe: ver cómo se desliza sola una
     conversación vieja marea. Los mensajes nuevos sí se deslizan. */
  let primera = true;
  const alFinal = () => {
    hilo.scrollTo({ top: hilo.scrollHeight, behavior: primera ? 'instant' : 'smooth' });
    primera = false;
  };

  function burbuja(m){
    if(m.rol==='el')
      return `<div class="ro-b el"><p>${esc(m.texto)}</p></div>`;
    return `<div class="ro-b ro">${pintarTexto(m.texto)}
      ${m.fuentes&&m.fuentes.length?`<div class="ro-f">De tu curso: ${m.fuentes.map(esc).join(' · ')}</div>`:''}</div>`;
  }

  function repintar(){
    hilo.innerHTML = chat.map(burbuja).join('') +
      (ocupado?`<div class="ro-b ro pensando"><span></span><span></span><span></span></div>`:'');
    alFinal();
  }

  function pintarSug(){
    sug.innerHTML = (ocupado||chat.length>6) ? '' :
      sugeridas(ficha).map(s=>`<button data-q="${esc(s)}">${esc(s)}</button>`).join('');
    sug.querySelectorAll('button').forEach(b=> b.onclick=()=>mandar(b.dataset.q));
  }

  async function mandar(q, oculta){
    q = String(q||'').trim();
    if(!q || ocupado) return;
    ocupado = true;
    /* La pregunta de arranque no se muestra: la persona no la
       escribió, y verla escrita en su nombre confunde. */
    if(!oculta) chat.push({rol:'el', texto:q});
    inp.value = '';
    est.textContent = 'Pensando…';
    repintar(); pintarSug();

    try{
      const rs = await fetch(API, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          pregunta: q,
          codigo: codigoGuardado(),
          perfil: aTexto(ficha),
          historial: chat.slice(-8).map(m=>({rol:m.rol, texto:m.texto}))
        })
      });
      const d = await rs.json().catch(()=>({}));
      /* Solo dos errores del servidor están escritos para que los lea
         una persona: el freno por preguntar muy seguido y el "no pude
         responder". Los demás ("origen no permitido", "solo POST") son
         conversación entre máquinas y no se le muestran a nadie. */
      if(!rs.ok || !d.respuesta)
        throw new Error(rs.status===401
          ? 'Se me perdió tu código. Vuelve a la pantalla anterior y escríbelo otra vez.'
          : [429,502].includes(rs.status) && d.error ? d.error
          : 'No pude responder ahorita. Prueba de nuevo en un minuto.');
      chat.push({rol:'ronald', texto:d.respuesta, fuentes:d.fuentes||[]});
    }catch(e){
      chat.push({rol:'ronald', texto:
        String(e.message||e).includes('Failed to fetch')
          ? 'Se me cayó la conexión. Revisa el internet y vuelve a preguntar — no perdiste nada de lo escrito.'
          : String(e.message||e)});
    }finally{
      ocupado = false;
      est.textContent = 'Sabe todo lo que hay en tu curso';
      guardarChat(chat); repintar(); pintarSug();
    }
  }

  host.querySelector('#roForm').onsubmit = e => { e.preventDefault(); mandar(inp.value); };
  host.querySelector('#roEditar').onclick = ()=>{
    pintarFicha(host, f=>{ ficha=f; pintarChat(host, f, true); });
  };

  repintar(); pintarSug();

  /* El golazo: apenas termina la ficha, Ronald habla PRIMERO y ya
     sabe con qué está lidiando. Nadie tiene que adivinar qué
     preguntarle para entender qué compró. */
  if(arranque && !chat.length)
    mandar('Acabo de llenar mi ficha. Salúdame por mi nombre de panadero, dime en dos líneas qué SÍ puedo lograr con el horno y la harina que tengo, qué NO debo intentar todavía, y con cuál pan del curso me conviene empezar. Termina preguntándome una sola cosa.', true);
}

/* ══ Entrada única ══ */
function pintar(hostId){
  const host = document.getElementById(hostId);
  if(!host) return;
  const f = leerFicha();
  if(f) pintarChat(host, f, false);
  else  pintarFicha(host, nueva => pintarChat(host, nueva, true));
}

return { pintar, verificar, hayFicha: ()=>!!leerFicha() };
})();
