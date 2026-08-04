/* ══════════════════════════════════════════════════════════════
   DIBUJOS
   Ilustraciones vectoriales hechas a mano, en línea con la paleta
   del libro. No son fotos: son para descansar la vista y marcar
   de qué se está hablando.

   Son SVG: nítidos a cualquier tamaño, pesan nada, se corrigen
   gratis y se pueden animar después para los videos.
   ══════════════════════════════════════════════════════════════ */

window.DIB = (function(){

  const w = (d, extra) => `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor"
    stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${d}${extra||''}</svg>`;

  const D = {

    harina: w(`<path d="M18 24h28l-3 28a4 4 0 01-4 3.6H25a4 4 0 01-4-3.6L18 24z"/>
      <path d="M18 24c0-4 6-6 14-6s14 2 14 6"/>
      <path d="M26 33c2 2 4 2 6 0s4-2 6 0"/>
      <path d="M25 41c2 2 4 2 7 0s5-2 7 0"/>
      <circle cx="26" cy="14" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="34" cy="9" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="41" cy="14" r="1.2" fill="currentColor" stroke="none"/>`),

    canela: w(`<path d="M14 44c0-12 5-24 12-30"/>
      <path d="M20 47c0-12 5-24 12-30"/>
      <path d="M26 50c0-12 5-24 12-30"/>
      <ellipse cx="20" cy="45.5" rx="6.2" ry="2.6" transform="rotate(-20 20 45.5)"/>
      <ellipse cx="32" cy="51.5" rx="6.2" ry="2.6" transform="rotate(-20 32 51.5)"/>
      <path d="M42 20c3-2 6-1 7 2"/>`),

    huevo: w(`<path d="M32 12c8 0 14 12 14 22a14 14 0 01-28 0c0-10 6-22 14-22z"/>
      <path d="M25 34c1.5-3 4-4.5 6-4.5"/>`),

    sal: w(`<path d="M24 26h16l2 26a4 4 0 01-4 4.4H26a4 4 0 01-4-4.4l2-26z"/>
      <path d="M24 26c0-4 3.5-6 8-6s8 2 8 6"/>
      <path d="M28 20V14a4 4 0 018 0v6"/>
      <circle cx="29" cy="9" r="1" fill="currentColor" stroke="none"/>
      <circle cx="35" cy="7" r="1" fill="currentColor" stroke="none"/>
      <circle cx="32" cy="11" r="1" fill="currentColor" stroke="none"/>`),

    mantequilla: w(`<path d="M12 34l10-8h30l-10 8v18H12V34z"/>
      <path d="M12 34h30v18"/>
      <path d="M42 34l10-8"/>
      <path d="M20 41h14"/>`),

    papelon: w(`<path d="M16 26h32v22a3 3 0 01-3 3H19a3 3 0 01-3-3V26z"/>
      <path d="M16 26l6-8h20l6 8"/>
      <path d="M22 18v8M42 18v8"/>
      <path d="M24 36h6M34 36h6M24 43h16"/>`),

    leche: w(`<path d="M26 10h12v6l6 9v27a4 4 0 01-4 4H24a4 4 0 01-4-4V25l6-9v-6z"/>
      <path d="M20 34h24"/>
      <path d="M26 16h12"/>`),

    anis: w(`<g transform="translate(32 32)">
      <path d="M0-20l4.4 8.8 9.6 1.4-7 6.8 1.7 9.6L0 2l-8.7 4.6 1.7-9.6-7-6.8 9.6-1.4z"/>
      <circle cx="0" cy="-6" r="2.4"/></g>`),

    granos: w(`<circle cx="24" cy="28" r="6"/><circle cx="38" cy="24" r="5"/>
      <circle cx="32" cy="39" r="6.5"/><circle cx="43" cy="37" r="4"/>
      <path d="M22 26c1.5-1.5 3-1.5 4 0"/>
      <path d="M30 37c1.6-1.6 3.4-1.6 5 0"/>
      <path d="M16 50h32"/>`),

    talvina: w(`<path d="M20 24h24v26a5 5 0 01-5 5H25a5 5 0 01-5-5V24z"/>
      <path d="M18 24h28"/>
      <path d="M20 36c3-2 5 2 8 0s5 2 8 0 5 2 8 0"/>
      <circle cx="27" cy="45" r="2"/><circle cx="36" cy="43" r="1.4"/><circle cx="33" cy="49" r="1.6"/>
      <path d="M26 18c0-3 2-5 6-5s6 2 6 5"/>`),

    bascula: w(`<rect x="10" y="34" width="44" height="18" rx="3"/>
      <path d="M18 34V26a4 4 0 014-4h20a4 4 0 014 4v8"/>
      <rect x="24" y="39" width="16" height="8" rx="1.5"/>
      <path d="M28 43h8"/>`),

    horno: w(`<rect x="10" y="12" width="44" height="40" rx="4"/>
      <path d="M10 24h44"/>
      <rect x="17" y="30" width="30" height="16" rx="2"/>
      <circle cx="18" cy="18" r="2"/><circle cx="26" cy="18" r="2"/>
      <path d="M17 56v2M47 56v2"/>`),

    termometro: w(`<path d="M28 12a4 4 0 018 0v24a8 8 0 11-8 0V12z"/>
      <circle cx="32" cy="44" r="4" fill="currentColor" stroke="none"/>
      <path d="M32 40V20"/>
      <path d="M40 18h5M40 24h4M40 30h5"/>`),

    reloj: w(`<circle cx="32" cy="34" r="20"/>
      <path d="M32 22v12l8 5"/>
      <path d="M26 10h12"/><path d="M32 10v4"/>`),

    pan: w(`<path d="M12 38c0-9 9-16 20-16s20 7 20 16c0 7-4 10-9 10H21c-5 0-9-3-9-10z"/>
      <path d="M22 32c2-3 4-3 6 0M34 30c2-3 4-3 6 0"/>
      <path d="M14 48h36"/>`),

    tijeras: w(`<circle cx="18" cy="46" r="6"/><circle cx="18" cy="20" r="6"/>
      <path d="M23 43L48 16"/><path d="M23 23l25 27"/>`),

    gota: w(`<path d="M32 12s14 16 14 26a14 14 0 01-28 0c0-10 14-26 14-26z"/>
      <path d="M25 38a7 7 0 007 7"/>`),

    /* ── Íconos de navegación ──
       Van en los encabezados de sección. Mismo trazo que los demás
       para que la app se lea como una sola pieza. */
    regalo: w(`<rect x="10" y="26" width="44" height="28" rx="3"/>
      <path d="M8 26h48v9H8z"/><path d="M32 26v28"/>
      <path d="M32 26c-4-7-9-9-12-7s-1 7 12 7z"/>
      <path d="M32 26c4-7 9-9 12-7s1 7-12 7z"/>`),

    libro: w(`<path d="M12 14h16a6 6 0 016 6v32a5 5 0 00-5-5H12V14z"/>
      <path d="M52 14H36a6 6 0 00-6 6v32a5 5 0 015-5h17V14z"/>
      <path d="M17 24h8M17 32h8M39 24h8M39 32h8"/>`),

    llave: w(`<circle cx="22" cy="24" r="9"/>
      <path d="M28 30l20 20"/><path d="M42 44l6 6"/><path d="M36 38l5 5"/>`),

    catalogo: w(`<rect x="9" y="12" width="20" height="18" rx="2.5"/>
      <rect x="35" y="12" width="20" height="18" rx="2.5"/>
      <rect x="9" y="36" width="20" height="18" rx="2.5"/>
      <rect x="35" y="36" width="20" height="18" rx="2.5"/>`),

    puerta: w(`<path d="M18 12h20a4 4 0 014 4v40H18z"/>
      <circle cx="35" cy="34" r="2" fill="currentColor" stroke="none"/>
      <path d="M46 22l8 12-8 12"/><path d="M54 34H36"/>`)
  };

  /* Una fila de dibujos con su nombre debajo */
  function fila(claves){
    return `<div class="dib-fila">${claves.map(([k,n])=>`
      <div class="dib"><i>${D[k]||''}</i><span>${n}</span></div>`).join('')}</div>`;
  }

  /* Un dibujo suelto, grande, como separador visual */
  function suelto(k, pie){
    return `<div class="dib-solo"><i>${D[k]||''}</i>${pie?`<span>${pie}</span>`:''}</div>`;
  }

  return { D, fila, suelto };
})();
