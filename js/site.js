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
          { name: 'Planta Mini de Escritorio', price: '8,18 € + IVA', summary: 'Diseño biofílico a escala personal. Ideal para reducir el estrés visual e integrar la naturaleza en el día a día del empleado.', imgAlt: 'Planta mini de escritorio' },
          { name: 'Planta Grande Recepción', price: '41,32 € + IVA', summary: 'Activo de bienestar de gran formato. Purifica el aire y crea una primera impresión profesional y acogedora en vestíbulos.', imgAlt: 'Planta grande recepción' },
          { name: 'Rosa Eterna', price: '45,45 € + IVA', summary: 'Simbolismo y durabilidad. Rosa natural estabilizada que mantiene su elegancia durante años sin necesidad de mantenimiento.', imgAlt: 'Rosa eterna' },
          { name: 'Centro de Mesa', price: '37,19 € + IVA', summary: 'Composición detallista para mesas de reuniones, diseñada para fomentar un ambiente de trabajo creativo y armónico.', imgAlt: 'Centro de mesa' },
          { name: 'Ramo de Flores de Temporada', price: '49,59 € + IVA', summary: 'Vitalidad y color con el mejor producto del momento. Un toque de frescura natural que humaniza el entorno corporativo.', imgAlt: 'Ramo de flores de temporada' },
          { name: 'Suscripción "Fresh Monday"', price: '165,29 €/mes + IVA', summary: 'La esencia de nuestra marca en formato semanal. Transformamos el inicio de la semana laboral con una composición floral de temporada para su recepción.', imgAlt: 'Suscripción Fresh Monday' },
          { name: 'Decoración de Eventos', price: 'A medida', summary: 'Proyectos personalizados para actos corporativos, aplicando nuestra metodología del "pétalo" a gran escala.', imgAlt: 'Decoración de eventos' },
        ],
      },
      servicios: {
        h2: 'Nuestros servicios',
        items: [
          { name: 'Transporte Especializado y Sostenible', price: 'Incluido · gratis > 40 €', summary: 'Garantizamos la máxima durabilidad del producto mediante nuestra flota de vehículos eléctricos con control de temperatura (12°C-15°C). Este servicio está plenamente integrado en la cuota de suscripción y se ofrece de forma gratuita en pedidos puntuales que superen los 40 € de base imponible.', imgAlt: 'Transporte eléctrico y sostenible' },
          { name: 'Estética Circular y Soporte Premium', price: 'Incluido en Fresh Monday', summary: 'Disfrute de una estética dinámica mediante nuestro modelo de "diseño circular". Seleccionamos semanalmente los soportes y jarrones de alta gama que mejor se adaptan a cada ramo para que su recepción luzca siempre renovada y sorprendente. Este servicio de cesión y mantenimiento está incluido sin coste adicional dentro de su suscripción "Fresh Monday".', imgAlt: 'Estética circular y soportes premium' },
          { name: 'Experiencia Pack Regalo', price: 'servicio adicional', summary: 'Eleve el valor de cualquiera de nuestras referencias con nuestra modalidad de presentación superior. Este servicio adicional incluye un envoltorio premium de textura enriquecida, ornamentación mediante lazos de fibras naturales y una tarjeta de cortesía personalizada. Es la solución ideal para garantizar que su obsequio institucional mantenga los más altos estándares de distinción y elegancia artesanal.', imgAlt: 'Experiencia pack regalo' },
          { name: 'Arreglos para Eventos', price: 'a medida', summary: 'Potencie la imagen de su marca en convenciones e inauguraciones con nuestra asesoría floral personalizada. Analizamos la arquitectura y el propósito de su evento para diseñar atmósferas a medida que refuercen la identidad corporativa y el impacto visual ante sus clientes.', imgAlt: 'Arreglos florales para eventos' },
        ],
      },
      visita: {
        h2: 'Visita comercial',
        lead: 'Diseñamos el bienestar de su oficina',
        p:
          'No creemos en soluciones genéricas. En El Taller del Pétalo, entendemos que cada espacio de trabajo tiene una personalidad y unas necesidades únicas. Por ello, le invitamos a agendar una visita personalizada con nuestro equipo de asesores comerciales.\n\nEn este encuentro, analizaremos la luz, la arquitectura y la cultura de su empresa para proponerle un plan de decoración floral artesana que se ajuste a sus valores. Nuestro objetivo es convertir su oficina en un entorno inspirador donde el talento se sienta como en casa.\n\nSolicite su consultoría personalizada y transformemos juntos su espacio de trabajo.',
        imgAlt: 'Espacio comercial y taller',
      },
      proyectos: {
        h2: 'Nuestros proyectos e inspiración',
        alts: ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6', 'Proyecto 7', 'Proyecto 8', 'Proyecto 9', 'Proyecto 10', 'Proyecto 11', 'Proyecto 12', 'Proyecto 13', 'Proyecto 14', 'Proyecto 15', 'Proyecto 16'],
      },
      opiniones: {
        h2: 'Opiniones',
        cards: [
          { text: '"Desde que contratamos la suscripción \'Fresh Monday\', el ambiente en recepción ha cambiado totalmente. El diseño artesanal de cada ramo refleja el cuidado por el detalle que queremos transmitir."', author: '— Marta Soler, Directora de RRHH' },
          { text: '"Buscábamos un proveedor coherente con nuestros valores de sostenibilidad. El reparto con vehículos eléctricos y su gestión eficiente fueron decisivos."', author: '— Jordi Blanch, Gerente de Logística' },
          { text: '"La delicadeza de los tonos y la transparencia de los pétalos que utilizan en sus diseños aportan una paz que nuestros usuarios agradecen mucho. Se nota el trabajo artesanal detrás de cada composición; no venden simplemente flores, crean entornos saludables y armónicos."', author: '— Elena Rius, Facility Manager en CoworkingBCN' },
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
          { name: 'Planta Mini d\'Escriptori', price: '8,18 € + IVA', summary: 'Disseny biofílic a escala personal (tipus Pilea). Redueix l\'estrès visual i millora la concentració en el lloc de treball.', imgAlt: 'Planta mini d\'escriptori' },
          { name: 'Planta Gran Recepció', price: '41,32 € + IVA', summary: 'Actiu de benestar de gran format (com la Kentia). Purifica l\'aire i crea una primera impressió professional i acollidora.', imgAlt: 'Planta gran recepció' },
          { name: 'Rosa Eterna', price: '45,45 € + IVA', summary: 'Simbolisme i durabilitat. Rosa natural estabilitzada que manté la seva elegància i color durant anys sense necessitat de manteniment.', imgAlt: 'Rosa eterna' },
          { name: 'Centre de Taula', price: '37,19 € + IVA', summary: 'Composició detallista per a taules de reunions. Dissenyada segons l\'ambient i la funció de cada espai per fomentar la creativitat.', imgAlt: 'Centre de taula' },
          { name: 'Ram de Flors de Temporada', price: '49,59 € + IVA', summary: 'Vitalitat i color amb el millor producte del moment. Un toc de frescor natural que humanitza l\'entorn corporatiu.', imgAlt: 'Ram de flors de temporada' },
          { name: 'Subscripció "Fresh Monday"', price: '165,29 €/mes + IVA', summary: 'L’essència de la nostra marca en format setmanal. Transformem l’inici de la setmana laboral amb una composició floral de temporada, dissenyada exclusivament per a la recepció.', imgAlt: 'Subscripció Fresh Monday' },
          { name: 'Decoració d\'Esdeveniments', price: 'A mida', summary: 'Projectes personalitzats per a inauguracions o actes corporatius, aplicant la nostra metodologia del "pètal" a gran escala.', imgAlt: 'Decoració d\'esdeveniments' },
        ],
      },
      servicios: {
        h2: 'Els nostres serveis',
        items: [
          { name: 'Transport Especialitzat i Sostenible', price: 'Inclòs · gratis > 40 €', summary: 'Garantim la màxima durabilitat del producte mitjançant la nostra flota de vehicles elèctrics amb control de temperatura (12ºC-15ºC). Aquest servei està plenament integrat en la quota de subscripció i s\'ofereix de forma gratuïta en comandes puntuals que superin els 40 € de base imposable.', imgAlt: 'Transport elèctric i sostenible' },
          { name: 'Estètica Circular i Suport Premium', price: 'Inclòs a Fresh Monday', summary: 'Gaudiu d’una estètica dinàmica mitjançant el nostre model de \'disseny circular\'. Seleccionem setmanalment els suports i gerros d’alta gamma que millor s’adapten a cada ram perquè la seva recepció llueixi sempre renovada i sorprenent. Aquest servei de cessió i manteniment està inclòs sense cost addicional dins de la seva subscripció \'Fresh Monday\'.', imgAlt: 'Estètica circular i suports premium' },
          { name: 'Experiència Pack Regal', price: 'servei addicional', summary: 'Eleveu el valor de qualsevol de les nostres referències amb la nostra modalitat de presentació superior. Aquest servei addicional inclou un embolcall premium de textura rica, ornamentació mitjançant llaços de fibres naturals i una targeta de cortesia personalitzada. És la solució ideal per garantir que el vostre obsequi institucional mantingui els estàndards més alts de distinció i elegància artesana.', imgAlt: 'Experiència pack regal' },
          { name: 'Arranjaments per a Esdeveniments', price: 'a mida', summary: 'Potencieu la imatge de la vostra marca en convencions i inauguracions amb la nostra assessoria floral personalitzada. Analitzem l\'arquitectura i el propòsit del vostre esdeveniment per dissenyar atmosferes a mida que reforcin la identitat corporativa i l\'impacte visual davant els vostres clients.', imgAlt: 'Arranjaments florals per a esdeveniments' },
        ],
      },
      visita: {
        h2: 'Visita comercial',
        lead: 'Dissenyem el benestar de la vostra oficina',
        p:
          'No creiem en solucions genèriques. A El Taller del Pétalo, entenem que cada espai de treball té una personalitat i unes necessitats úniques. Per això, us convidem a agendar una visita personalitzada amb el nostre equip d\'assessors comercials.\n\nEn aquesta trobada, analitzarem la llum, l\'arquitectura i la cultura de la vostra empresa per proposar-vos un pla de decoració floral artesana que s\'ajusti als vostres valors. El nostre objectiu és convertir la vostra oficina en un entorn inspirador on el talent es senti com a casa.\n\nSol·liciteu la vostra consultoria personalitzada i transformem junts el vostre espai de treball.',
        imgAlt: 'Espai comercial i taller',
      },
      proyectos: {
        h2: 'Els nostres projectes i inspiració',
        alts: ['Projecte 1', 'Projecte 2', 'Projecte 3', 'Projecte 4', 'Projecte 5', 'Projecte 6', 'Projecte 7', 'Projecte 8', 'Projecte 9', 'Projecte 10', 'Projecte 11', 'Projecte 12', 'Projecte 13', 'Projecte 14', 'Projecte 15', 'Projecte 16'],
      },
      opiniones: {
        h2: 'Opinions',
        cards: [
          { text: '"Des que vam contractar la subscripció \'Fresh Monday\', l\'ambient a la recepció ha canviat totalment. El disseny artesanal de cada ram reflecteix la cura pel detall que nosaltres també volem transmetre als nostres clients. Un servei de 10."', author: '— Marta Soler, Directora de RRHH en InnovaTech' },
          { text: '"Buscàvem un proveïdor que fos coherent amb els nostres valors de sostenibilitat. El fet que El Taller del Pétalo faci els repartiments amb vehicles elèctrics i gestioni el producte de forma tan eficient va ser el factor decisiu. Molt recomanables."', author: '— Jordi Blanch, Gerent de Logística a SomTransports' },
          { text: '"La delicadesa dels colors i la transparència dels pètals que fan servir en els seus dissenys aporten una pau que els nostres usuaris agraeixen molt. No venen flors, venen entorns saludables."', author: '— Elena Rius, Facility Manager a CoworkingBCN' },
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
          { name: 'Desktop Mini Plant', price: '€8.18 + VAT', summary: 'Biophilic design on a personal scale. Perfect for reducing visual stress and bringing nature into the employee\'s daily routine.', imgAlt: 'Desktop mini plant' },
          { name: 'Large Reception Plant', price: '€41.32 + VAT', summary: 'A large-scale wellness asset. It purifies the air and creates a professional, welcoming first impression in lobbies.', imgAlt: 'Large reception plant' },
          { name: 'Eternal Rose', price: '€45.45 + VAT', summary: 'Symbolism and durability. A stabilized natural rose that maintains its elegance for years without the need for maintenance.', imgAlt: 'Eternal rose' },
          { name: 'Table Centerpiece', price: '€37.19 + VAT', summary: 'A detailed composition for meeting tables, designed to foster a creative and harmonious working environment.', imgAlt: 'Table centerpiece' },
          { name: 'Seasonal Flower Bouquet', price: '€49.59 + VAT', summary: 'Vitality and color using the best seasonal picks. A touch of natural freshness that humanizes the corporate setting.', imgAlt: 'Seasonal flower bouquet' },
          { name: '"Fresh Monday" Subscription', price: '€165.29/month + VAT', summary: 'Our brand\'s essence in a weekly format. We refresh your work week with a seasonal floral arrangement for your reception.', imgAlt: 'Fresh Monday subscription' },
          { name: 'Event Decoration', price: 'Custom', summary: 'Tailor-made projects for corporate events, applying our "petal" methodology on a grand scale.', imgAlt: 'Event decoration' },
        ],
      },
      servicios: {
        h2: 'Our services',
        items: [
          { name: 'Specialized and Sustainable Transport', price: 'Included / free over €40', summary: 'We guarantee maximum product durability through our fleet of electric vehicles with temperature control (12ºC-15ºC). This service is fully integrated into the subscription fee and is offered free of charge for one-off orders exceeding a tax base of €40.', imgAlt: 'Electric sustainable delivery' },
          { name: 'Circular Aesthetics & Premium Stands', price: 'Included (Fresh Monday)', summary: 'Enjoy a dynamic aesthetic through our \'circular design\' model. We select high-end stands and vases every week that best complement each bouquet, ensuring your reception area always looks fresh and impressive. This leasing and maintenance service is included at no additional cost as part of your \'Fresh Monday\' subscription.', imgAlt: 'Circular aesthetics and premium stands' },
          { name: 'Gift Pack Experience', price: 'add-on service', summary: 'Enhance the value of any of our products with our premium presentation tier. This additional service features high-quality textured wrapping, decorative natural fiber ribbons, and a personalized courtesy card. It is the perfect solution to ensure your corporate gift maintains the highest standards of distinction and artisanal elegance.', imgAlt: 'Gift pack experience' },
          { name: 'Floral Arrangements for Events', price: 'bespoke quote', summary: 'Enhance your brand image at conventions and grand openings with our personalized floral consultancy. We analyze the architecture and purpose of your event to design bespoke atmospheres that reinforce your corporate identity and visual impact for your clients.', imgAlt: 'Floral arrangements for events' },
        ],
      },
      visita: {
        h2: 'Commercial visit',
        lead: 'Designing Wellness for Your Office',
        p:
          'We do not believe in one-size-fits-all solutions. At El Taller del Pétalo, we understand that every workspace has a unique personality and specific needs. Therefore, we invite you to schedule a personalized visit with our team of commercial consultants.\n\nDuring this meeting, we will analyze the lighting, architecture, and corporate culture of your company to propose a handcrafted floral decoration plan that aligns with your values. Our goal is to turn your office into an inspiring environment where talent feels right at home.\n\nRequest your personalized consultation today and let\'s transform your workspace together.',
        imgAlt: 'Commercial space and workshop',
      },
      proyectos: {
        h2: 'Our projects and inspiration',
        alts: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8', 'Project 9', 'Project 10', 'Project 11', 'Project 12', 'Project 13', 'Project 14', 'Project 15', 'Project 16'],
      },
      opiniones: {
        h2: 'Reviews',
        cards: [
          { text: '"Since we started the \'Fresh Monday\' subscription, our reception\'s atmosphere has completely changed. The handcrafted design of each bouquet reflects the attention to detail we want to project."', author: '— Marta Soler, HR Director' },
          { text: '"We were looking for a supplier aligned with our sustainability values. Their electric vehicle delivery and efficient management were the deciding factors."', author: '— Jordi Blanch, Logistics Manager' },
          { text: '"The delicacy of the tones and the transparency of the petals they use in their designs bring a sense of peace that our users truly appreciate. You can really feel the handcrafted work behind every arrangement; they don\'t just sell flowers, they create healthy and harmonious environments."', author: '— Elena Rius, Facility Manager at CoworkingBCN' },
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
      var n = i + 1;
      var suffix = n < 10 ? '0' + n : String(n);
      return './images/proyectos/' + suffix + '.jpg';
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
