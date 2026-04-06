(function () {
  'use strict';

  const STORAGE_KEY = 'sitioIdioma';
  var refreshGaleriaLightboxIfOpen = function () {};

  const I18N = {
    es: {
      title: 'El Taller del Pétalo — Inicio',
      brandSub: 'Floristería B2B',
      navToggle: 'Abrir menú',
      nav: {
        acerca: 'Acerca de nosotros',
        productos: 'Productos',
        servicios: 'Servicios',
        visita: 'Visita comercial',
        proyectos: 'Proyectos',
        opiniones: 'Opiniones',
      },
      acerca: {
        h1: 'Acerca de nosotros',
        lead: 'En El Taller del Pétalo creemos que los espacios profesionales también pueden tener alma. Nos apasiona acompañar a las empresas para que, a través de la artesanía floral, logren transmitir su verdadera esencia.',
        p: 'No solo entregamos flores; cuidamos detalles. Seleccionamos cada tallo a mano y diseñamos con mimo cada composición, uniendo la calidez del trabajo artesanal con la puntualidad y el rigor que tu negocio necesita. Queremos ser tu aliado de confianza para que cada rincón de tu empresa cuente una historia de frescura y distinción. Hacemos que tu marca florezca.',
        imgAlt: 'Equipo y taller',
      },
      productos: {
        h2: 'Nuestros productos',
        items: [
          { name: 'Planta mini de escritorio', price: '8,18€ + IVA', summary: 'Planta pequeña de interior en maceta. Ideal para escritorio u oficina con luz indirecta; riego moderado y fácil cuidado.', imgAlt: 'Planta mini de escritorio' },
          { name: 'Planta grande recepción', price: '41,32€ + IVA', summary: 'Planta de gran formato para hall o recepción. Especies resistentes y bien presentadas para dar imagen profesional al espacio.', imgAlt: 'Planta grande de recepción' },
          { name: 'Rosa eterna', price: '45,45€ + IVA', summary: 'Rosa natural estabilizada: conserva su aspecto sin agua ni mantenimiento diario. Presentación en caja o soporte, detalle elegante y duradero.', imgAlt: 'Rosa eterna' },
          { name: 'Centro de mesa', price: '37,19€ + IVA', summary: 'Composición floral para mesa de comedor o reunión. Flores y tonos de temporada, lista para sorprender en cualquier ocasión.', imgAlt: 'Centro de mesa' },
          { name: 'Ramo de flores de temporada', price: '49,59€ + IVA', summary: 'Ramo elaborado con flores del momento y follaje seleccionado. Perfecto como regalo o para alegrar el hogar con color fresco.', imgAlt: 'Ramo de flores de temporada' },
          { name: 'Suscripción "Fresh Monday"', price: '165,29€ + IVA', summary: 'Flores frescas cada lunes en tu empresa u oficina: ramo o composición de temporada con entrega puntual y presentación cuidada.', imgAlt: 'Suscripción Fresh Monday' },
          { name: 'Arreglo para eventos', price: 'a consultar', summary: 'Decoración floral a medida: centros, arcos o ambientación para bodas y eventos corporativos. Presupuesto según fecha, espacio y estilo.', imgAlt: 'Arreglo floral para eventos' },
        ],
      },
      servicios: {
        h2: 'Nuestros servicios',
        items: [
          { name: 'Transporte especializado', price: 'desde 5 €', summary: 'Reparto de plantas y composiciones con franja horaria concertada. Embalaje reforzado para que lleguen en perfecto estado.', imgAlt: 'Transporte de plantas' },
          { name: 'Servicio de suscripción', price: '25 €/mes', summary: 'Ramo o composición cada mes con flores de temporada. Pausas y cambios de dirección sin complicaciones.', imgAlt: 'Suscripción floral' },
          { name: 'Pack regalo', price: '3,50 €', summary: 'Mini ramo o detalle floral listo para entregar. Tarjeta opcional. Pensado para celebraciones íntimas.', imgAlt: 'Pack regalo' },
          { name: 'Asesoramiento personalizado', price: 'a consultar', summary: 'Visita o videollamada para elegir plantas y estilos según tu espacio. Presupuesto claro sin compromiso.', imgAlt: 'Asesoramiento floral' },
        ],
      },
      visita: {
        h2: 'Visita comercial',
        lead: 'Te abrimos las puertas del taller con cita previa',
        p: 'Reserva un hueco de martes a sábado y conoce procesos, acabados y catálogo en persona. Ideal para proyectos de hostelería, regalos corporativos o encargos especiales. Respondemos en menos de 48 h laborables y confirmamos disponibilidad por email.',
        imgAlt: 'Espacio comercial y taller',
      },
      proyectos: {
        h2: 'Nuestros proyectos e inspiración',
        alts: ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6', 'Proyecto 7', 'Proyecto 8', 'Proyecto 9', 'Proyecto 10', 'Proyecto 11', 'Proyecto 12', 'Proyecto 13', 'Proyecto 14', 'Proyecto 15', 'Proyecto 16'],
      },
      opiniones: {
        h2: 'Opiniones',
        cards: [
          { text: '«Encargamos lámparas para la cafetería y quedaron espectaculares. Puntuales y muy profesionales.»', author: '— Laura M., Barcelona' },
          { text: '«El taller en grupo fue divertido y claro. Salí con mi propia pieza y ganas de repetir.»', author: '— Diego R., Valencia' },
          { text: '«Asesoría muy útil para nuestra reforma; ahorramos tiempo y acertamos con materiales.»', author: '— Ana y Pedro, Madrid' },
        ],
      },
      footer: {
        h2: 'Contacto',
        email: 'Email',
        phone: 'Teléfono',
        address: 'Dirección',
        hours: 'Horario de atención',
        copy: 'Contenido de demostración.',
      },
      langLabel: 'Idioma',
      carousel: { prev: 'Anterior', next: 'Siguiente' },
      lightbox: { titulo: 'Imagen ampliada', cerrar: 'Cerrar' },
    },
    ca: {
      title: 'El Taller del Pètal — Inici',
      brandSub: 'Floristeria B2B',
      navToggle: 'Obrir menú',
      nav: {
        acerca: 'Sobre nosaltres',
        productos: 'Productes',
        servicios: 'Serveis',
        visita: 'Visita comercial',
        proyectos: 'Projectes',
        opiniones: 'Opinions',
      },
      acerca: {
        h1: 'Sobre nosaltres',
        lead: 'A El Taller del Pétalo creiem que els espais professionals també poden tenir ànima. Ens apassiona acompanyar les empreses perquè, a través de l\'artesania floral, aconsegueixin transmetre la seva vertadera essència.',
        p: 'No només lliurem flors; cuidem els detalls. Seleccionem cada tija a mà i dissenyem amb mim cada composició, unint la calidesa del treball artesanal amb la puntualitat i el rigor que el teu negoci necessita. Volem ser el teu aliat de confiança perquè cada racó de la teva empresa expliqui una història de frescor i distinció. Fem que la teva marca floreixi.',
        imgAlt: 'Equip i taller',
      },
      productos: {
        h2: 'Els nostres productes',
        items: [
          { name: 'Planta mini d\'escriptori', price: '8,18€ + IVA', summary: 'Planta petita d’interior amb test. Ideal per a escriptori o oficina amb llum indirecta; reg moderat i cura senzilla.', imgAlt: 'Planta mini d\'escriptori' },
          { name: 'Planta gran de recepció', price: '41,32€ + IVA', summary: 'Planta de gran format per a hall o recepció. Espècies resistents i ben presentades per donar imatge professional a l’espai.', imgAlt: 'Planta gran de recepció' },
          { name: 'Rosa eterna', price: '45,45€ + IVA', summary: 'Rosa natural estabilitzada: conserva l’aspecte sense aigua ni manteniment diari. Presentació en caixa o suport, detall elegant i durable.', imgAlt: 'Rosa eterna' },
          { name: 'Centre de taula', price: '37,19€ + IVA', summary: 'Composició floral per a taula de menjador o reunió. Flors i tons de temporada, llesta per sorprendre en qualsevol ocasió.', imgAlt: 'Centre de taula' },
          { name: 'Ram de flors de temporada', price: '49,59€ + IVA', summary: 'Ram elaborat amb flors del moment i fullatge seleccionat. Perfecte com a regal o per alegrar la llar amb color fresc.', imgAlt: 'Ram de flors de temporada' },
          { name: 'Subscripció «Fresh Monday»', price: '165,29€ + IVA', summary: 'Flors fresques cada dilluns a la teva empresa o oficina: ram o composició de temporada amb lliurament puntual i presentació curada.', imgAlt: 'Subscripció Fresh Monday' },
          { name: 'Arranjament per a esdeveniments', price: 'a consultar', summary: 'Decoració floral a mida: centres, arcs o ambientació per a casaments i esdeveniments corporatius. Pressupost segons data, espai i estil.', imgAlt: 'Arranjament floral per a esdeveniments' },
        ],
      },
      servicios: {
        h2: 'Els nostres serveis',
        items: [
          { name: 'Transport especialitzat', price: 'des de 5 €', summary: 'Repartiment de plantes i composicions amb franja horària concertada. Embalatge reforçat perquè arribin en perfecte estat.', imgAlt: 'Transport de plantes' },
          { name: 'Servei de subscripció', price: '25 €/mes', summary: 'Ram o composició cada mes amb flors de temporada. Pauses i canvis d’adreça sense complicacions.', imgAlt: 'Subscripció floral' },
          { name: 'Pack regal', price: '3,50 €', summary: 'Mini ram o detall floral llest per lliurar. Targeta opcional. Pensat per a celebracions íntimes.', imgAlt: 'Pack aniversari' },
          { name: 'Assessorament personalitzat', price: 'a consultar', summary: 'Visita o videotrucada per triar plantes i estil segons el teu espai. Pressupost clar sense compromís.', imgAlt: 'Assessorament floral' },
        ],
      },
      visita: {
        h2: 'Visita comercial',
        lead: 'T’obrim les portes del taller amb cita prèvia',
        p: 'Reserva un forat de dimarts a dissabte i coneix processos, acabats i catàleg en persona. Ideal per a projectes d’hostaleria, regals corporatius o encàrrecs especials. Responguem en menys de 48 h laborables i confirmem disponibilitat per correu.',
        imgAlt: 'Espai comercial i taller',
      },
      proyectos: {
        h2: 'Els nostres projectes i inspiració',
        alts: ['Projecte 1', 'Projecte 2', 'Projecte 3', 'Projecte 4', 'Projecte 5', 'Projecte 6', 'Projecte 7', 'Projecte 8', 'Projecte 9', 'Projecte 10', 'Projecte 11', 'Projecte 12', 'Projecte 13', 'Projecte 14', 'Projecte 15', 'Projecte 16'],
      },
      opiniones: {
        h2: 'Opinions',
        cards: [
          { text: '«Vam encarregar llums per a la cafeteria i van quedar espectaculars. Puntuals i molt professionals.»', author: '— Laura M., Barcelona' },
          { text: '«El taller en grup va ser divertit i clar. Vaig sortir amb la meva pròpia peça i ganes de repetir.»', author: '— Diego R., València' },
          { text: '«Assessoria molt útil per a la nostra reforma; vam estalviar temps i encertar materials.»', author: '— Ana i Pedro, Madrid' },
        ],
      },
      footer: {
        h2: 'Contacte',
        email: 'Correu',
        phone: 'Telèfon',
        address: 'Adreça',
        hours: 'Horari d’atenció',
        copy: 'Contingut de demostració.',
      },
      langLabel: 'Llengua',
      carousel: { prev: 'Anterior', next: 'Següent' },
      lightbox: { titulo: 'Imatge ampliada', cerrar: 'Tancar' },
    },
    en: {
      title: 'El Taller del Pétalo — Home',
      brandSub: 'B2B Florist',
      navToggle: 'Open menu',
      nav: {
        acerca: 'About us',
        productos: 'Products',
        servicios: 'Services',
        visita: 'Commercial visit',
        proyectos: 'Projects',
        opiniones: 'Reviews',
      },
      acerca: {
        h1: 'About us',
        lead: 'At El Taller del Pétalo, we believe that professional spaces should also have a soul. We are passionate about partnering with businesses to help them express their true essence through the art of floral craftsmanship.',
        p: 'We don’t just deliver flowers; we care for every detail. Every stem is hand-selected and every arrangement is thoughtfully designed, blending the warmth of artisanal work with the reliability and precision your business deserves. We want to be your trusted partner, ensuring every corner of your brand tells a story of freshness and distinction. Helping your brand bloom.',
        imgAlt: 'Team and workshop',
      },
      productos: {
        h2: 'Our products',
        items: [
          { name: 'Mini desk plant', price: '€8.18 + VAT', summary: 'Small potted indoor plant for desks and offices; indirect light and moderate watering, easy day-to-day care.', imgAlt: 'Mini desk plant' },
          { name: 'Large reception plant', price: '€41.32 + VAT', summary: 'Large-format plant for lobbies and reception areas — hardy, well-presented varieties for a professional welcome.', imgAlt: 'Large reception plant' },
          { name: 'Eternal rose', price: '€45.45 + VAT', summary: 'Stabilised natural rose that keeps its look without daily water or care. Presented in a box or holder — elegant and long-lasting.', imgAlt: 'Eternal rose' },
          { name: 'Table centrepiece', price: '€37.19 + VAT', summary: 'Floral arrangement for dining or meeting tables using seasonal blooms and colours, ready for any special moment.', imgAlt: 'Table centrepiece' },
          { name: 'Seasonal flower bouquet', price: '€49.59 + VAT', summary: 'Hand-crafted bouquet with flowers of the moment and selected foliage — ideal as a gift or a fresh home accent.', imgAlt: 'Seasonal flower bouquet' },
          { name: '“Fresh Monday” subscription', price: '€165.29 + VAT', summary: 'Fresh flowers every Monday at your workplace: bouquet or seasonal arrangement with reliable delivery and neat presentation.', imgAlt: 'Fresh Monday subscription' },
          { name: 'Event arrangement', price: 'on request', summary: 'Bespoke floral décor — centrepieces, arches or full styling for weddings and corporate events. Quote by date, venue and style.', imgAlt: 'Floral event arrangement' },
        ],
      },
      servicios: {
        h2: 'Our services',
        items: [
          { name: 'Specialist delivery', price: 'from €5', summary: 'Delivery of plants and arrangements in an agreed time window. Reinforced packaging so they arrive in perfect condition.', imgAlt: 'Plant delivery' },
          { name: 'Subscription service', price: '€25/month', summary: 'Bouquet or arrangement every month with seasonal flowers. Easy pauses and address changes.', imgAlt: 'Flower subscription' },
          { name: 'Gift pack', price: '€3.50', summary: 'Mini bouquet or floral detail ready to hand over. Optional card. Suited to small celebrations.', imgAlt: 'Birthday pack' },
          { name: 'Personalised advice', price: 'on request', summary: 'Visit or video call to choose plants and style for your space. Clear quote, no obligation.', imgAlt: 'Floral advice' },
        ],
      },
      visita: {
        h2: 'Commercial visit',
        lead: 'We open the workshop doors by appointment',
        p: 'Book a slot Tuesday to Saturday and see processes, finishes and catalogue in person. Ideal for hospitality projects, corporate gifts or special orders. We reply within 48 business hours and confirm availability by email.',
        imgAlt: 'Commercial space and workshop',
      },
      proyectos: {
        h2: 'Our projects and inspiration',
        alts: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8', 'Project 9', 'Project 10', 'Project 11', 'Project 12', 'Project 13', 'Project 14', 'Project 15', 'Project 16'],
      },
      opiniones: {
        h2: 'Reviews',
        cards: [
          { text: '«We ordered lamps for the café and they looked spectacular. Punctual and very professional.»', author: '— Laura M., Barcelona' },
          { text: '«The group workshop was fun and clear. I left with my own piece and want to go back.»', author: '— Diego R., Valencia' },
          { text: '«Very helpful consulting for our renovation; we saved time and chose the right materials.»', author: '— Ana & Pedro, Madrid' },
        ],
      },
      footer: {
        h2: 'Contact',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Opening hours',
        copy: 'Demo content.',
      },
      langLabel: 'Language',
      carousel: { prev: 'Previous', next: 'Next' },
      lightbox: { titulo: 'Enlarged image', cerrar: 'Close' },
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && I18N[stored]) return stored;
    const doc = document.documentElement.lang;
    if (doc && I18N[doc]) return doc;
    return 'es';
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyI18n(lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function applyI18n(lang) {
    const d = I18N[lang];
    document.title = d.title;
    document.querySelectorAll('[data-i18n-brand-sub]').forEach(function (el) {
      el.textContent = d.brandSub;
    });
    document.querySelectorAll('[data-i18n-nav]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-nav');
      if (d.nav[key]) el.textContent = d.nav[key];
    });
    var toggler = document.querySelector('.navbar-toggler');
    if (toggler) toggler.setAttribute('aria-label', d.navToggle);

    document.querySelectorAll('[data-i18n="acerca.h1"]').forEach(function (el) { el.textContent = d.acerca.h1; });
    document.querySelectorAll('[data-i18n="acerca.lead"]').forEach(function (el) { el.textContent = d.acerca.lead; });
    document.querySelectorAll('[data-i18n="acerca.p"]').forEach(function (el) { el.textContent = d.acerca.p; });
    document.querySelectorAll('[data-i18n-alt="acerca.img"]').forEach(function (el) { el.alt = d.acerca.imgAlt; });

    document.querySelectorAll('[data-i18n="productos.h2"]').forEach(function (el) { el.textContent = d.productos.h2; });

    document.querySelectorAll('[data-product-index]').forEach(function (card) {
      var i = parseInt(card.getAttribute('data-product-index'), 10);
      var item = d.productos.items[i];
      if (!item) return;
      var nameEl = card.querySelector('[data-field="name"]');
      var priceEl = card.querySelector('[data-field="price"]');
      var summaryEl = card.querySelector('[data-field="summary"]');
      var img = card.querySelector('[data-field="img"]');
      var thumb = card.querySelector('[data-field="thumb"]');
      if (nameEl) nameEl.textContent = item.name;
      if (priceEl) priceEl.textContent = item.price;
      if (summaryEl) summaryEl.textContent = item.summary;
      if (img) img.alt = item.imgAlt;
      if (thumb) thumb.alt = '';
    });

    document.querySelectorAll('[data-i18n="servicios.h2"]').forEach(function (el) { el.textContent = d.servicios.h2; });

    document.querySelectorAll('[data-service-index]').forEach(function (card) {
      var i = parseInt(card.getAttribute('data-service-index'), 10);
      var item = d.servicios.items[i];
      if (!item) return;
      var nameEl = card.querySelector('[data-field="name"]');
      var priceEl = card.querySelector('[data-field="price"]');
      var summaryEl = card.querySelector('[data-field="summary"]');
      var img = card.querySelector('[data-field="img"]');
      var thumb = card.querySelector('[data-field="thumb"]');
      if (nameEl) nameEl.textContent = item.name;
      if (priceEl) priceEl.textContent = item.price;
      if (summaryEl) summaryEl.textContent = item.summary;
      if (img) img.alt = item.imgAlt;
      if (thumb) thumb.alt = '';
    });

    document.querySelectorAll('[data-i18n="visita.h2"]').forEach(function (el) { el.textContent = d.visita.h2; });
    document.querySelectorAll('[data-i18n="visita.lead"]').forEach(function (el) { el.textContent = d.visita.lead; });
    document.querySelectorAll('[data-i18n="visita.p"]').forEach(function (el) { el.textContent = d.visita.p; });
    document.querySelectorAll('[data-i18n-alt="visita.img"]').forEach(function (el) { el.alt = d.visita.imgAlt; });

    document.querySelectorAll('[data-i18n="proyectos.h2"]').forEach(function (el) { el.textContent = d.proyectos.h2; });
    document.querySelectorAll('[data-proyecto-index]').forEach(function (img) {
      var i = parseInt(img.getAttribute('data-proyecto-index'), 10);
      if (d.proyectos.alts[i] !== undefined) img.alt = d.proyectos.alts[i];
    });

    document.querySelectorAll('[data-i18n="opiniones.h2"]').forEach(function (el) { el.textContent = d.opiniones.h2; });
    document.querySelectorAll('[data-opinion-index]').forEach(function (block) {
      var i = parseInt(block.getAttribute('data-opinion-index'), 10);
      var c = d.opiniones.cards[i];
      if (!c) return;
      var t = block.querySelector('[data-field="text"]');
      var a = block.querySelector('[data-field="author"]');
      if (t) t.textContent = c.text;
      if (a) a.textContent = c.author;
    });

    document.querySelectorAll('[data-i18n="footer.h2"]').forEach(function (el) { el.textContent = d.footer.h2; });
    document.querySelectorAll('[data-i18n="footer.email"]').forEach(function (el) { el.textContent = d.footer.email; });
    document.querySelectorAll('[data-i18n="footer.phone"]').forEach(function (el) { el.textContent = d.footer.phone; });
    document.querySelectorAll('[data-i18n="footer.address"]').forEach(function (el) { el.textContent = d.footer.address; });
    document.querySelectorAll('[data-i18n="footer.hours"]').forEach(function (el) { el.textContent = d.footer.hours; });
    document.querySelectorAll('[data-i18n="footer.copy"]').forEach(function (el) { el.textContent = d.footer.copy; });

    if (d.carousel) {
      document.querySelectorAll('[data-i18n-carousel="prev"]').forEach(function (el) { el.setAttribute('aria-label', d.carousel.prev); });
      document.querySelectorAll('[data-i18n-carousel="next"]').forEach(function (el) { el.setAttribute('aria-label', d.carousel.next); });
      document.querySelectorAll('[data-i18n-lightbox="prev"]').forEach(function (el) { el.setAttribute('aria-label', d.carousel.prev); });
      document.querySelectorAll('[data-i18n-lightbox="next"]').forEach(function (el) { el.setAttribute('aria-label', d.carousel.next); });
    }
    if (d.lightbox) {
      var modalGal = document.getElementById('modalGaleriaProyectos');
      if (modalGal) modalGal.setAttribute('aria-label', d.lightbox.titulo);
      document.querySelectorAll('[data-i18n-lightbox-close]').forEach(function (el) { el.setAttribute('aria-label', d.lightbox.cerrar); });
    }

    refreshGaleriaLightboxIfOpen();

    var langEl = document.getElementById('langLabel');
    if (langEl && d.langLabel) langEl.textContent = d.langLabel;
  }

  function initNavActive() {
    var links = document.querySelectorAll('.nav-link-scroll');
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    if (!sections.length) return;

    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute('href');
      if (id && id.charAt(0) === '#') map[id.slice(1)] = a;
    });

    function updateActive() {
      var nav = document.querySelector('.navbar');
      var offset = nav ? nav.getBoundingClientRect().bottom + 4 : 88;
      var current = null;
      for (var i = sections.length - 1; i >= 0; i--) {
        var sec = sections[i];
        var top = sec.getBoundingClientRect().top;
        if (top <= offset) {
          current = sec.id;
          break;
        }
      }
      if (!current && sections[0]) current = sections[0].id;
      links.forEach(function (l) { l.classList.remove('nav-active'); });
      if (current && map[current]) map[current].classList.add('nav-active');
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    updateActive();
  }

  function initGaleriaLightbox() {
    var carousel = document.getElementById('carouselProyectos');
    var modalEl = document.getElementById('modalGaleriaProyectos');
    var imgEl = document.getElementById('galeriaLightboxImg');
    var prevBtn = document.getElementById('galeriaLightboxPrev');
    var nextBtn = document.getElementById('galeriaLightboxNext');
    if (!carousel || !modalEl || !imgEl || !prevBtn || !nextBtn || typeof bootstrap === 'undefined') return;

    var thumbs = carousel.querySelectorAll('img[data-proyecto-index]');
    var TOTAL = thumbs.length;
    if (!TOTAL) return;

    var modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    var lightboxIndex = 0;

    function largeUrl(i) {
      return 'https://picsum.photos/seed/g' + (i + 1) + '/1400/900';
    }

    function syncLightbox() {
      imgEl.src = largeUrl(lightboxIndex);
      imgEl.alt = '';
    }

    function openAt(index) {
      var n = parseInt(index, 10);
      if (isNaN(n)) return;
      lightboxIndex = ((n % TOTAL) + TOTAL) % TOTAL;
      syncLightbox();
      modal.show();
    }

    function step(delta) {
      lightboxIndex = (lightboxIndex + delta + TOTAL) % TOTAL;
      syncLightbox();
    }

    carousel.querySelectorAll('img[data-proyecto-index]').forEach(function (el) {
      el.classList.add('galeria-img-cursor');
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openAt(el.getAttribute('data-proyecto-index'));
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openAt(el.getAttribute('data-proyecto-index'));
        }
      });
    });

    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      step(-1);
    });
    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      step(1);
    });

    function onDocKey(e) {
      if (!modalEl.classList.contains('show')) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        step(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        step(1);
      }
    }

    modalEl.addEventListener('shown.bs.modal', function () {
      document.addEventListener('keydown', onDocKey);
    });
    modalEl.addEventListener('hidden.bs.modal', function () {
      document.removeEventListener('keydown', onDocKey);
      imgEl.removeAttribute('src');
      imgEl.alt = '';
    });

    refreshGaleriaLightboxIfOpen = function () {
      if (modalEl.classList.contains('show')) syncLightbox();
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    initGaleriaLightbox();
    setLang(getLang());
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
    initNavActive();
    var y = document.getElementById('anio');
    if (y) y.textContent = new Date().getFullYear();

    var menuCollapse = document.getElementById('menuPrincipal');
    if (menuCollapse && typeof bootstrap !== 'undefined') {
      document.querySelectorAll('.nav-link-scroll').forEach(function (a) {
        a.addEventListener('click', function () {
          if (window.innerWidth < 992 && menuCollapse.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(menuCollapse).hide();
          }
        });
      });
    }
  });
})();
