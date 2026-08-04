/* ══════════════════════════════════════════════════════════════
   AYUDA — el chat que contesta con el curso

   La app es un sitio estático: no hay servidor. Así que esto NO
   inventa respuestas. Busca dentro de los 209 KB que ya escribimos
   y devuelve el pedazo exacto del módulo que responde, con el enlace
   para ir a leerlo completo.

   Tres capas:
     1. Encuentra la respuesta en el curso           → gratis, al instante, sin conexión
     2. Si no la encuentra, lo dice y sugiere        → nunca inventa una respuesta
        cómo preguntarlo de otra forma
     3. Ahí ofrece a Ronald 24/7                     → la venta cae en el momento
                                                       exacto en que hace falta

   Para conectar la IA de verdad (Ronald 24/7) hace falta un proxy,
   porque la clave de API no puede vivir en una página pública.
   Ver AYUDA_IA abajo.
   ══════════════════════════════════════════════════════════════ */

window.AYUDA = (function(){

  /* ── Configuración ─────────────────────────────────────────── */
  const RONALD_URL = '';        // ← la página de venta de Ronald 24/7
  const AYUDA_IA = '';          // ← la URL del proxy (Cloudflare Worker) cuando exista

  /* ── Normalizar: sin acentos, sin mayúsculas ───────────────── */
  const norm = s => String(s||'')
    .replace(/<[^>]+>/g,' ')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9 ]/g,' ')
    .replace(/\s+/g,' ').trim();

  /* Cómo habla la gente contra cómo está escrito el curso.
     Sin esto, "no me sube" no encuentra "no dobla el volumen". */
  const SINONIMOS = {
    'sube':'subir crecer levantar doblar volumen fermentar',
    'subio':'subir crecer levantar doblar volumen fermentar',
    'crece':'crecer subir doblar volumen',
    'aplastado':'chato desinflo hundido colapso sobrefermento',
    'chato':'aplastado desinflo hundido no subio',
    'duro':'duro seco apretada cerrada endurece',
    'seco':'seco duro resecamiento conservar',
    'pegajosa':'pegajosa pegajoso pegar amasado hidratacion claquage',
    'pega':'pegajosa pegajoso amasado hidratacion',
    'quemado':'quemo oscuro temperatura alta falso dorado aluminio',
    'quema':'quemo oscuro temperatura alta falso dorado',
    'palido':'palido claro sin color dorado horno miente termometro',
    'crudo':'crudo gomoso interior falso dorado termometro 88',
    'gomosa':'gomosa apelmazada cortar caliente enfriado rejilla',
    'agrio':'acido vinagre sobrefermento refrescar talvina',
    'acido':'acido vinagre sobrefermento refrescar talvina',
    'moho':'moho contaminacion botar colores rosa negro',
    'flota':'flotacion flotar prueba talvina activa lista',
    'levadura':'levadura talvina fermento',
    'masa madre':'talvina fermento masa madre',
    'guarapo':'talvina guarapo pipa fermento',
    'harina':'harina proteina fuerza panadera todo uso bread flour',
    'papelon':'papelon panela piloncillo rapadura chancaca',
    'precio':'precio cobrar costo margen multiplicar vender cuanto',
    'cobrar':'cobrar precio pago adelantado zelle pago movil',
    'vender':'vender clientes precio negocio cafeteria',
    'clientes':'clientes vender primeros veinte cafeteria muestras',
    'horno':'horno temperatura termometro precalentar miente grados',
    'grados':'temperatura grados centigrados fahrenheit horno',
    'vapor':'vapor hielos atomizador bandeja agua corteza',
    'cortes':'cortes lame cuchilla 45 grados profundidad abrir',
    'brillo':'brillo almibar pintado huevo miel glaseado',
    'guardar':'guardar conservar duracion vida util empaque',
    'congelar':'congelar crudo nevera tequenos cachitos',
    'nevera':'nevera refrigerar frio fermentacion en frio guardar',
    'queso':'queso blanco fresco derretir gratinar',
    'imprimir':'imprimir pdf guardar descargar',
    'cobro':'cobrar pago adelantado zelle pago movil efectivo precio',
    'pago':'pago adelantado cobrar zelle binance efectivo',
    'brille':'brillo almibar pintado glaseado vitrina',
    'brillar':'brillo almibar pintado glaseado vitrina',
    'brilla':'brillo almibar pintado glaseado vitrina',
    'dia siguiente':'conservar duracion vida util endurece guardar empaque',
    'siguiente':'conservar duracion vida util guardar',
    'dura':'conservar duracion vida util guardar empaque',
    'apretada':'miga cerrada apretada amasado ventana gluten agua',
    'miga':'miga alveolos abierta cerrada apretada gomosa',
    'agua':'agua hidratacion porcentaje harina proteina ajustar',
    'reposar':'reposo fermentacion primer segundo dedo doblar levar',
    'reposo':'reposo fermentacion primer segundo dedo doblar levar',
    'amasar':'amasado ventana gluten claquage pliegues palma',
    'empaque':'empaque bolsa kraft caja etiqueta presentacion',
    'foto':'foto fotografia luz natural celular angulo props',
    'instagram':'redes instagram tiktok contenido whatsapp video',
    'whatsapp':'whatsapp business catalogo mensaje pedidos',
    'vendo':'vender precio cobrar cuanto margen multiplicar',
    'venden':'vender precio cobrar margen',
    'congelo':'congelar crudo nevera bolsa bandeja',
    'temperatura':'temperatura grados horno tabla maestra tiempo',
    'sale':'escapa desborda sellado costura borde',
    'cae':'cae pega adherir humedecer pintado antes'
  };

  /* Palabras que están en TODOS los pasajes y por lo tanto no
     distinguen nada. Sin esta lista, "como cobro" puntúa alto en
     cualquier sección solo por el "como". */
  const VACIAS = new Set(('como que para por con los las una uno del ese esa esto esta '+
    'estoy tengo tiene hacer hago haces puedo puede muy mas pero cuando donde cual '+
    'porque quien todo toda algo nada sobre desde hasta entre cada tambien solo '+
    'mucho mucha poco poca bien siempre ahora despues antes '+
    'cuanto cuanta cuantos cuantas cosa cosas vez veces asi aqui ahi').split(' '));

  const expandir = q => {
    const t = norm(q).split(' ').filter(w => w.length>2 && !VACIAS.has(w));
    const bruto = norm(q).split(' ');
    const extra = [];
    bruto.forEach(w => { if (SINONIMOS[w]) extra.push(...SINONIMOS[w].split(' ')); });
    for (let i=0;i<bruto.length-1;i++){
      const par = bruto[i]+' '+bruto[i+1];
      if (SINONIMOS[par]) extra.push(...SINONIMOS[par].split(' '));
    }
    return [...new Set([...t, ...extra])].filter(w => w.length>2 && !VACIAS.has(w));
  };

  /* ── Índice: un pasaje por bloque de contenido ──────────────── */
  let INDICE = null;

  function texto(b){
    switch(b.t){
      case 'p':      return b.c;
      case 'h':      return b.c;
      case 'nota':
      case 'tip':    return b.tt + '. ' + b.c;
      case 'rec':    return b.c + '. ' + (b.lede||'');
      case 'pasos':  return (b.items||[]).join(' ');
      case 'lista':  return (b.items||[]).map(x=>x[0]+': '+x[1]).join(' ');
      case 'tabla':  return (b.cols||[]).join(' ') + ' ' +
                            (b.filas||[]).map(f=>f.join(' ')).join(' ');
      case 'ing':    return (b.titulo||'') + ' ' +
                            (b.items||[]).map(x=>x.join(' ')).join(' ');
      case 'ilustra':return (b.items||[]).map(x=>x[1]).join(' ');
      default:       return '';
    }
  }

  /* Lo que se le muestra a la persona: preferimos notas y tips,
     que son las que están escritas como respuesta directa. */
  function fragmento(b){
    if (b.t==='nota' || b.t==='tip') return {titulo:b.tt, cuerpo:b.c};
    if (b.t==='p')    return {titulo:'', cuerpo:b.c};
    if (b.t==='lista')return {titulo:'', cuerpo:(b.items||[]).slice(0,3)
                              .map(x=>'<b>'+x[0]+'</b> — '+x[1]).join('<br>')};
    if (b.t==='pasos')return {titulo:'', cuerpo:(b.items||[]).slice(0,4)
                              .map((x,i)=>(i+1)+'. '+x).join('<br>')};
    if (b.t==='tabla'){
      const f=(b.filas||[]).slice(0,4).map(r=>'<b>'+r[0]+'</b> — '+r.slice(1).join(' · '));
      return {titulo:'', cuerpo:f.join('<br>')};
    }
    return null;
  }

  function construir(){
    if (INDICE) return INDICE;
    INDICE = [];
    (typeof TODOS === 'function' ? TODOS() : []).forEach(o => {
      if (!o.datos) return;
      o.datos.secciones.forEach((s,i) => {
        const ctx = norm(o.datos.nombre + ' ' + s.titulo + ' ' + (s.lede||''));
        (s.bloques||[]).forEach(b => {
          const frag = fragmento(b);
          if (!frag) return;
          const cuerpo = texto(b);
          if (!cuerpo || cuerpo.length < 40) return;
          INDICE.push({
            libro: o.datos.nombre, libroId: o.id, sec: i, secTitulo: s.titulo,
            peso: (b.t==='nota'||b.t==='tip') ? 1.6 : 1,
            buscable: ctx + ' ' + norm(s.titulo) + ' ' + norm(cuerpo),
            frag
          });
        });
      });
    });
    return INDICE;
  }

  /* Raíz corta: "dobla", "doblar" y "doblando" tienen que ser lo
     mismo. Sin esto "no subió" no encuentra "no dobla el volumen". */
  const raiz = w => w.length >= 6 ? w.slice(0,5) : w;

  /* Señales de que la persona está reportando un problema, no
     preguntando algo neutro. Empujan hacia las tablas de "qué salió mal". */
  const ES_PROBLEMA = /\b(no|mal|malo|mala|nunca|se me|quedo|quede|salio|arruin|problema|falla|por que|ayuda)\b/;

  /* ── Buscar ────────────────────────────────────────────────── */
  function buscar(q, n){
    const propias = norm(q).split(' ')
      .filter(w => w.length>2 && !VACIAS.has(w)).map(raiz);
    if (!propias.length) return [];
    const todas = expandir(q).map(raiz);
    const secundarias = todas.filter(w => !propias.includes(w));
    const problema = ES_PROBLEMA.test(norm(q));

    return construir().map(p => {
      let s = 0, distintas = 0;
      /* Las palabras que la persona escribió pesan mucho más que las
         que le agregamos nosotros por sinónimo. */
      propias.forEach(w => {
        if (p.buscable.includes(w)) { s += 4; distintas++; }
        if (norm(p.secTitulo).includes(w)) s += 5;
      });
      secundarias.forEach(w => { if (p.buscable.includes(w)) s += 1; });

      /* Si reporta un problema, las tablas de diagnóstico y las notas
         de "qué salió mal" son casi siempre la respuesta correcta. */
      if (problema && /salio mal|que salio|problema|alerta|error/.test(norm(p.secTitulo))) s += 8;

      s *= p.peso;
      /* Con una sola palabra en común casi siempre es casualidad. */
      if (distintas < 2 && propias.length > 1) s *= 0.35;
      return {...p, score: s};
    })
    .filter(p => p.score >= (propias.length === 1 ? 5 : 6))
    .sort((a,b) => b.score - a.score)
    .slice(0, n || 3);
  }

  return { buscar, construir, config: {RONALD_URL, AYUDA_IA} };
})();
