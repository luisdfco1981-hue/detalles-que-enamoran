/* ==========================================================================
   MAIN.JS  ·  Detalles que enamoran
   --------------------------------------------------------------------------
   Este archivo hace que la web funcione (menú, galería, filtros, foto
   ampliada y el formulario que abre WhatsApp).

   NO NECESITAS TOCAR ESTE ARCHIVO para cambiar fotos, textos de las tarjetas,
   el teléfono o el correo. Todo eso se cambia en  js/galeria.js
   ========================================================================== */

(function () {
  'use strict';

  /* Datos que vienen de js/galeria.js (con valores de reserva por si acaso) */
  var CONTACTO   = window.CONTACTO   || {};
  var OCASIONES  = window.OCASIONES  || [];
  var GALERIA    = window.GALERIA    || [];
  var TESTIMONIOS = window.TESTIMONIOS || [];

  var $  = function (sel, raiz) { return (raiz || document).querySelector(sel); };
  var $$ = function (sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); };


  /* ======================================================================
     1 · DATOS DE CONTACTO EN TODA LA WEB
     ====================================================================== */
  function enlaceWhatsApp(mensaje) {
    var numero = (CONTACTO.whatsapp || '').replace(/[^0-9]/g, '');
    return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje || '');
  }

  function aplicarContacto() {
    var tel = $('#enlaceTelefono'), pieTel = $('#pieTelefono');
    var cor = $('#enlaceCorreo'),   pieCor = $('#pieCorreo');

    if (CONTACTO.telefonoVisible && CONTACTO.telefonoEnlace) {
      [tel, pieTel].forEach(function (el) {
        if (!el) return;
        el.textContent = CONTACTO.telefonoVisible;
        el.href = 'tel:' + CONTACTO.telefonoEnlace.replace(/\s/g, '');
      });
    }
    if (CONTACTO.correo) {
      [cor, pieCor].forEach(function (el) {
        if (!el) return;
        el.textContent = CONTACTO.correo;
        el.href = 'mailto:' + CONTACTO.correo;
      });
    }

    /* Todos los enlaces marcados con la clase "js-wa" abren WhatsApp con su
       propio mensaje ya escrito (el que lleven en data-wa-mensaje). */
    $$('.js-wa').forEach(function (el) {
      var mensaje = el.getAttribute('data-wa-mensaje') || 'Hola Claudia, te escribo desde tu página web.';
      el.href = enlaceWhatsApp(mensaje);
      el.target = '_blank';
      el.rel = 'noopener';
    });

    /* Ficha de Google: se rellena con los mismos datos */
    var ficha = $('#fichaGoogle');
    if (ficha) {
      try {
        var datos = JSON.parse(ficha.textContent);
        if (CONTACTO.nombreNegocio) datos.name = CONTACTO.nombreNegocio;
        if (CONTACTO.telefonoEnlace) datos.telephone = CONTACTO.telefonoEnlace.replace(/\s/g, '');
        if (CONTACTO.correo) datos.email = CONTACTO.correo;
        if (CONTACTO.zona) datos.areaServed = CONTACTO.zona;
        ficha.textContent = JSON.stringify(datos, null, 2);
      } catch (e) { /* si algo falla, se queda la ficha tal cual */ }
    }

    var anio = $('#anio');
    if (anio) anio.textContent = new Date().getFullYear();
  }


  /* ======================================================================
     2 · MENÚ
     ====================================================================== */
  function iniciarMenu() {
    var boton = $('#menuBoton');
    var menu  = $('#menuPrincipal');
    var cabecera = $('#cabecera');
    if (!boton || !menu) return;

    function cerrar() {
      menu.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
    }

    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) cerrar();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrar();
    });

    /* Sombra en la cabecera al bajar */
    if (cabecera) {
      var alSubirBajar = function () {
        cabecera.classList.toggle('pegada', window.scrollY > 10);
      };
      alSubirBajar();
      window.addEventListener('scroll', alSubirBajar, { passive: true });
    }
  }


  /* ======================================================================
     3 · APARICIÓN SUAVE AL HACER SCROLL
     ====================================================================== */
  var observador = null;

  function iniciarReveal() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      $$('.reveal').forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    $$('.reveal').forEach(function (el) { observador.observe(el); });
  }

  function observarNuevo(el) {
    if (observador) observador.observe(el);
    else el.classList.add('visible');
  }


  /* ======================================================================
     4 · TARJETAS DE OCASIONES
     ====================================================================== */
  function pintarOcasiones() {
    var lista = $('#listaOcasiones');
    if (!lista || !OCASIONES.length) return;

    OCASIONES.forEach(function (oc) {
      var li = document.createElement('li');
      li.className = 'ocasion reveal';
      li.innerHTML =
        '<img src="' + oc.imagen + '" alt="' + escapar(oc.alt || oc.nombre) + '" loading="lazy" decoding="async">' +
        '<div class="ocasion__capa">' +
          '<h3 class="ocasion__nombre">' +
            '<a class="ocasion__enlace" href="#galeria" data-ocasion="' + oc.id + '">' + escapar(oc.nombre) + '</a>' +
          '</h3>' +
          '<p class="ocasion__frase">' + escapar(oc.frase || '') + '</p>' +
        '</div>';
      lista.appendChild(li);
      observarNuevo(li);
    });

    /* Al tocar una tarjeta, la galería se filtra por esa ocasión */
    lista.addEventListener('click', function (e) {
      var enlace = e.target.closest('.ocasion__enlace');
      if (!enlace) return;
      aplicarFiltro(enlace.getAttribute('data-ocasion'));
    });
  }


  /* ======================================================================
     5 · GALERÍA Y FILTROS
     ====================================================================== */
  var filtroActual = 'todas';
  var visibles = [];   /* piezas que se ven ahora mismo (para pasar de una a otra) */

  function nombreDeOcasion(id) {
    for (var i = 0; i < OCASIONES.length; i++) {
      if (OCASIONES[i].id === id) return OCASIONES[i].nombre;
    }
    return id;
  }

  function pintarFiltros() {
    var caja = $('#filtros');
    if (!caja) return;

    /* Solo se muestran los filtros de ocasiones que tienen alguna foto */
    var conFotos = OCASIONES.filter(function (oc) {
      return GALERIA.some(function (p) { return p.ocasion === oc.id; });
    });

    var botones = [{ id: 'todas', nombre: 'Todas' }].concat(conFotos);
    botones.forEach(function (b) {
      var boton = document.createElement('button');
      boton.type = 'button';
      boton.className = 'filtro';
      boton.textContent = b.nombre;
      boton.setAttribute('data-filtro', b.id);
      boton.setAttribute('aria-pressed', b.id === 'todas' ? 'true' : 'false');
      caja.appendChild(boton);
    });

    caja.addEventListener('click', function (e) {
      var boton = e.target.closest('.filtro');
      if (boton) aplicarFiltro(boton.getAttribute('data-filtro'));
    });
  }

  function pintarGaleria() {
    var mosaico = $('#mosaico');
    if (!mosaico || !GALERIA.length) return;

    GALERIA.forEach(function (pieza, indice) {
      var fig = document.createElement('figure');
      fig.className = 'pieza reveal' + (pieza.alto === 'alta' ? ' pieza--alta' : '');
      fig.setAttribute('data-ocasion', pieza.ocasion || '');
      fig.setAttribute('data-indice', String(indice));

      var medio;
      if (pieza.tipo === 'video') {
        /* Si hay poster se usa y no se descarga nada del vídeo hasta que se pide.
           Si no hay poster, se carga solo la información mínima para que el
           navegador pueda enseñar el primer fotograma. */
        var conPoster = !!pieza.poster;
        medio =
          '<video muted playsinline preload="' + (conPoster ? 'none' : 'metadata') + '"' +
          (conPoster ? ' poster="' + pieza.poster + '"' : '') +
          ' aria-label="' + escapar(pieza.alt || pieza.titulo || 'Vídeo de una decoración') + '">' +
            '<source src="' + pieza.archivo + (conPoster ? '' : '#t=0.5') + '" type="video/mp4">' +
          '</video>' +
          '<span class="pieza__play">' +
            '<svg viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M2 1l9 5-9 5z"/></svg>' +
            'Vídeo' +
          '</span>';
      } else {
        medio = '<img src="' + pieza.archivo + '" alt="' + escapar(pieza.alt || pieza.titulo || '') + '" loading="lazy" decoding="async">';
      }

      fig.innerHTML =
        medio +
        '<figcaption class="pieza__pie">' + escapar(pieza.titulo || nombreDeOcasion(pieza.ocasion)) + '</figcaption>' +
        '<button class="pieza__abrir" type="button">' +
          '<span class="visualmente-oculto">Ver más grande: ' +
            escapar(pieza.titulo || nombreDeOcasion(pieza.ocasion)) +
          '</span>' +
        '</button>';

      mosaico.appendChild(fig);
      observarNuevo(fig);
    });

    mosaico.addEventListener('click', function (e) {
      var boton = e.target.closest('.pieza__abrir');
      if (!boton) return;
      var fig = boton.closest('.pieza');
      abrirLupa(parseInt(fig.getAttribute('data-indice'), 10));
    });

    aplicarFiltro('todas', true);
  }

  function aplicarFiltro(id, silencioso) {
    filtroActual = id || 'todas';

    $$('#filtros .filtro').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-filtro') === filtroActual ? 'true' : 'false');
    });

    visibles = [];
    $$('#mosaico .pieza').forEach(function (fig) {
      var coincide = (filtroActual === 'todas') || (fig.getAttribute('data-ocasion') === filtroActual);
      fig.hidden = !coincide;
      if (coincide) {
        visibles.push(parseInt(fig.getAttribute('data-indice'), 10));
        fig.classList.add('visible');
      }
      /* Si había un vídeo reproduciéndose y se oculta, se para */
      var video = fig.querySelector('video');
      if (video && !coincide && !video.paused) video.pause();
    });

    var vacio = $('#mosaicoVacio');
    if (vacio) vacio.hidden = visibles.length > 0;

    if (!silencioso) {
      var galeria = $('#galeria');
      if (galeria) galeria.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  /* ======================================================================
     6 · FOTO AMPLIADA (lightbox propio, sin librerías)
     ====================================================================== */
  var lupa       = $('#lupa');
  var lupaMedio  = $('#lupaMedio');
  var lupaPie    = $('#lupaPie');
  var indiceLupa = -1;
  var elementoPrevio = null;

  function abrirLupa(indice) {
    if (!lupa || indice < 0) return;
    elementoPrevio = document.activeElement;
    indiceLupa = indice;
    pintarLupa();
    lupa.hidden = false;
    document.body.classList.add('lupa-abierta');
    var cerrar = $('#lupaCerrar');
    if (cerrar) cerrar.focus();
  }

  function cerrarLupa() {
    if (!lupa || lupa.hidden) return;
    lupa.hidden = true;
    lupaMedio.innerHTML = '';
    document.body.classList.remove('lupa-abierta');
    if (elementoPrevio && elementoPrevio.focus) elementoPrevio.focus();
  }

  function pintarLupa() {
    var pieza = GALERIA[indiceLupa];
    if (!pieza) return;

    if (pieza.tipo === 'video') {
      lupaMedio.innerHTML =
        '<video controls autoplay muted playsinline preload="metadata"' +
        (pieza.poster ? ' poster="' + pieza.poster + '"' : '') + '>' +
          '<source src="' + pieza.archivo + '" type="video/mp4">' +
          'Tu navegador no puede reproducir este vídeo.' +
        '</video>';
    } else {
      lupaMedio.innerHTML =
        '<img src="' + pieza.archivo + '" alt="' + escapar(pieza.alt || pieza.titulo || '') + '">';
    }

    lupaPie.textContent = pieza.titulo || '';
    lupa.setAttribute('aria-label', pieza.titulo || 'Decoración ampliada');

    /* Los botones de anterior / siguiente solo aparecen si hay más de una pieza */
    var hayVarias = visibles.length > 1;
    $('#lupaAnterior').hidden = !hayVarias;
    $('#lupaSiguiente').hidden = !hayVarias;
  }

  function moverLupa(paso) {
    if (!visibles.length) return;
    var pos = visibles.indexOf(indiceLupa);
    if (pos === -1) pos = 0;
    pos = (pos + paso + visibles.length) % visibles.length;
    indiceLupa = visibles[pos];
    pintarLupa();
  }

  function iniciarLupa() {
    if (!lupa) return;

    $('#lupaCerrar').addEventListener('click', cerrarLupa);
    $('#lupaAnterior').addEventListener('click', function () { moverLupa(-1); });
    $('#lupaSiguiente').addEventListener('click', function () { moverLupa(1); });
    $$('[data-cerrar-lupa]').forEach(function (el) {
      el.addEventListener('click', cerrarLupa);
    });

    document.addEventListener('keydown', function (e) {
      if (lupa.hidden) return;
      if (e.key === 'Escape')     { cerrarLupa(); }
      if (e.key === 'ArrowLeft')  { moverLupa(-1); }
      if (e.key === 'ArrowRight') { moverLupa(1); }
      if (e.key === 'Tab')        { atraparFoco(e); }
    });
  }

  /* Mantiene el teclado dentro de la ventana ampliada mientras está abierta */
  function atraparFoco(e) {
    var focos = $$('button:not([hidden]), video[controls], a[href]', lupa)
      .filter(function (el) { return el.offsetParent !== null; });
    if (!focos.length) return;
    var primero = focos[0], ultimo = focos[focos.length - 1];
    if (e.shiftKey && document.activeElement === primero) {
      e.preventDefault(); ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault(); primero.focus();
    }
  }


  /* ======================================================================
     7 · TESTIMONIOS
     ====================================================================== */
  function pintarTestimonios() {
    var seccion = $('#testimonios');
    var lista   = $('#listaTestimonios');
    if (!seccion || !lista) return;

    /* Si no hay testimonios, la sección no se muestra */
    if (!TESTIMONIOS.length) { seccion.hidden = true; return; }
    seccion.hidden = false;

    TESTIMONIOS.forEach(function (t) {
      var li = document.createElement('li');
      li.className = 'testimonio reveal';
      li.innerHTML =
        (t.ejemplo ? '<span class="testimonio__aviso">Texto de ejemplo</span>' : '') +
        '<p class="testimonio__texto">' + escapar(t.texto || '') + '</p>' +
        '<p class="testimonio__autora">' + escapar(t.autora || '') + '</p>' +
        '<p class="testimonio__detalle">' + escapar(t.detalle || '') + '</p>';
      lista.appendChild(li);
      observarNuevo(li);
    });
  }


  /* ======================================================================
     8 · FORMULARIO → WHATSAPP
     ====================================================================== */
  function iniciarFormulario() {
    var form = $('#formularioContacto');
    if (!form) return;

    /* Las opciones del desplegable salen de la lista de OCASIONES */
    var select = $('#campoOcasion');
    if (select && OCASIONES.length) {
      var otra = select.querySelector('option[value="Otra ocasión"]');
      OCASIONES.forEach(function (oc) {
        var op = document.createElement('option');
        op.value = oc.nombre;
        op.textContent = oc.nombre;
        select.insertBefore(op, otra);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre  = $('#campoNombre').value.trim();
      var ocasion = $('#campoOcasion').value;
      var fecha   = $('#campoFecha').value;
      var mensaje = $('#campoMensaje').value.trim();

      var valido = true;
      valido = marcarCampo('#campoNombre',  '#errorNombre',  nombre  !== '') && valido;
      valido = marcarCampo('#campoOcasion', '#errorOcasion', ocasion !== '') && valido;
      if (!valido) return;

      /* Se arma el mensaje que verá Claudia en WhatsApp */
      var texto = '¡Hola Claudia! Soy ' + nombre + '.\n';
      texto += 'Quiero decoración para: ' + ocasion + '.\n';
      texto += 'Fecha: ' + (fecha ? formatearFecha(fecha) : 'todavía por confirmar') + '.\n';
      if (mensaje) texto += 'Mi idea: ' + mensaje + '\n';
      texto += '\n(Te escribo desde tu página web)';

      window.open(enlaceWhatsApp(texto), '_blank', 'noopener');
    });
  }

  function marcarCampo(selCampo, selError, ok) {
    var campo = $(selCampo);
    var error = $(selError);
    if (campo) campo.closest('.campo').classList.toggle('campo--error', !ok);
    if (error) error.hidden = ok;
    if (!ok && campo) campo.focus();
    return ok;
  }

  /* Pasa 2026-05-10 a "10 de mayo de 2026" */
  function formatearFecha(iso) {
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var partes = iso.split('-');
    if (partes.length !== 3) return iso;
    var mes = meses[parseInt(partes[1], 10) - 1];
    if (!mes) return iso;
    return parseInt(partes[2], 10) + ' de ' + mes + ' de ' + partes[0];
  }


  /* ======================================================================
     UTILIDAD: evita que un texto rompa el HTML
     ====================================================================== */
  function escapar(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }


  /* ======================================================================
     ARRANQUE
     ====================================================================== */
  function arrancar() {
    aplicarContacto();
    iniciarMenu();
    pintarOcasiones();
    pintarFiltros();
    pintarGaleria();
    pintarTestimonios();
    iniciarLupa();
    iniciarFormulario();
    iniciarReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else {
    arrancar();
  }

})();
