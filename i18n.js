// Idioma da landing: o português está no próprio HTML; inglês e espanhol
// vêm daqui. Escolha: ?lang= na URL, depois a última escolha, depois o
// idioma do navegador (pt e es; o resto vê inglês).
(function () {
  var T = {
    en: {
      "nav.who": "Who it's for", "nav.features": "Features", "nav.pro": "Pro", "nav.support": "Support",
      "store.soon": "Coming soon to the",
      "hero.eyebrow": "For iPhone",
      "hero.title": "The sun of your project, from the map to the facade.",
      "hero.lead": "Sun path, shadows, solar energy estimates and facade sun studies on your iPhone, with data from NOAA, NASA and Apple Weather.",
      "hero.more": "See features →",
      "chip.compass": "Sun Compass", "chip.shadow": "Shadows", "chip.panel": "Panel 3D", "chip.comfort": "Comfort & Facades",
      "alt.compass": "SunArch Sun Compass: the sun's path over the satellite map",
      "alt.facade": "SunArch Facade AR measuring the overhang shadow on a window",
      "alt.solar": "SunArch Panel 3D with the estimated power and the roof tilt",
      "who.title": "Made for people who work with the sun",
      "who.sub": "From the first project sketch to the late-afternoon photo: the same sun, calculated for the place and date you choose.",
      "who.arch.t": "Architecture & comfort", "who.arch.d": "Facade sun exposure, overhangs and room orientation, with a bioclimatic PDF study for your client.",
      "who.solar.t": "Solar energy", "who.solar.d": "Ideal panel tilt and orientation, estimated generation and sizing from your electricity bill.",
      "who.home.t": "Homes & land", "who.home.d": "See where the sun hits at every hour and season before you buy, build or sell.",
      "who.photo.t": "Photography & sky", "who.photo.d": "Golden hour, blue hour, the sun and the moon on the camera, Kp index and aurora chances.",
      "feat.title": "Everything the sun does, in one app",
      "feat.sub": "Calculated on your iPhone with NOAA's solar equations.",
      "f1.t": "The sun's path on the map",
      "f1.d": "Pick any place and any date: the sun's path appears on the satellite map, in 2D or 3D, with sunrise, sunset, solar noon and the solstices, in the local time zone.",
      "f2.t": "The sun on the window, measured with the camera",
      "f2.d": "Point your iPhone at the facade: the app measures its orientation and shows how much of the window is shaded by the overhang in summer and winter. Room ratings on the map and a bioclimatic PDF report.",
      "f3.t": "The solar panel facing the real sun",
      "f3.d": "See the power right now, with clear sky and with Apple Weather clouds, today's energy and the ideal tilt. Every estimated number is labeled as an estimate, with its source.",
      "tools.title": "And more precision tools",
      "tools.sub": "Sun Timer, Kp Index and Solar Flux are free for everyone.",
      "t.ar": "The sun's path, the solstices and the moon drawn over the camera image.",
      "t.shadow.t": "Shadow Tracker", "t.shadow": "Shadows of walls, houses and trees to scale on the map, hour by hour, with a PDF sheet.",
      "t.angles.t": "Panel Angles", "t.angles": "Measure your roof's tilt with the iPhone and compare it with the ideal angle for the day and the year.",
      "t.timer.t": "Sun Timer", "t.timer": "Sunrise, sunset, golden hour and blue hour for the chosen place, with a 3D sky dome.",
      "t.flux.t": "Solar Flux", "t.flux": "Live X-rays from the GOES satellites, solar flares and the F10.7 radio flux, from NOAA.",
      "t.kp.t": "Kp Index", "t.kp": "Observed and forecast geomagnetic activity, and how far the aurora may reach.",
      "src.title": "Numbers with a source",
      "src.sub": "Nothing made up: when a value is an estimate, the app says so and where it comes from.",
      "src.noaa": "Sun position from NOAA's solar equations and space weather from the SWPC.",
      "src.nasa": "25-year climatology (2001–2025): irradiation, temperature, humidity and wind.",
      "src.apple": "Hourly weather and cloud cover.",
      "src.pv": "Clear-sky model for the estimated panel generation.",
      "pro.title": "Free to start. Pro to design.",
      "pro.sub": "Use the essentials for free. Subscribe to SunArch Pro when you need any date, any place and the reports.",
      "pro.free": "Free",
      "pro.free.1": "Sun Timer, Kp Index and Solar Flux without limits",
      "pro.free.2": "Sun Compass with dates up to 15 days from today",
      "pro.free.3": "Places up to 500 m from where you are",
      "pro.free.4": "Sun AR with the 1× lens, for today",
      "pro.free.5": "One solar site and the live Panel 3D",
      "pro.p.1": "Any date and any place in the world",
      "pro.p.2": "Full Comfort & Facades",
      "pro.p.3": "Professional PDF reports",
      "pro.p.4": "Panel Angles and multiple solar sites on iCloud",
      "pro.p.5": "Sun AR with the 0.5× lens, solstices, other dates and technical photos",
      "pro.note": "Weekly or monthly subscription, with a 3-day free trial for new subscribers. Cancel anytime in your Apple Account settings.",
      "priv.title": "No account, no ads, no tracking",
      "priv.text": "Calculations happen on your iPhone and your solar sites stay in your private iCloud. We never receive your location.",
      "priv.link": "Read the privacy policy →",
      "final.title": "The sun of any place, in the palm of your hand.",
      "final.sub": "SunArch for iPhone.",
      "foot.privacy": "Privacy", "foot.terms": "Terms of use"
    },
    es: {
      "nav.who": "Para quién", "nav.features": "Funciones", "nav.pro": "Pro", "nav.support": "Soporte",
      "store.soon": "Próximamente en la",
      "hero.eyebrow": "Para iPhone",
      "hero.title": "El sol de tu proyecto, del mapa a la fachada.",
      "hero.lead": "Trayectoria del sol, sombras, estimación de energía solar y estudio solar de fachadas en tu iPhone, con datos de la NOAA, la NASA y Apple Weather.",
      "hero.more": "Ver funciones →",
      "chip.compass": "Brújula Solar", "chip.shadow": "Sombras", "chip.panel": "Panel 3D", "chip.comfort": "Confort y Fachadas",
      "alt.compass": "Brújula Solar de SunArch: la trayectoria del sol sobre el mapa satelital",
      "alt.facade": "Facade AR de SunArch midiendo la sombra del alero sobre una ventana",
      "alt.solar": "Panel 3D de SunArch con la potencia estimada y la inclinación del techo",
      "who.title": "Hecho para quien trabaja con el sol",
      "who.sub": "Del primer boceto del proyecto a la foto del atardecer: el mismo sol, calculado para el lugar y la fecha que elijas.",
      "who.arch.t": "Arquitectura y confort", "who.arch.d": "Asoleamiento de fachadas, aleros y orientación de las habitaciones, con estudio bioclimático en PDF para tu cliente.",
      "who.solar.t": "Energía solar", "who.solar.d": "Inclinación y orientación ideales de los paneles, generación estimada y dimensionamiento por la factura de luz.",
      "who.home.t": "Inmuebles y terrenos", "who.home.d": "Mira dónde da el sol a cada hora y en cada estación antes de comprar, construir o vender.",
      "who.photo.t": "Fotografía y cielo", "who.photo.d": "Hora dorada, hora azul, el sol y la luna en la cámara, índice Kp y probabilidad de auroras.",
      "feat.title": "Todo lo que hace el sol, en una sola app",
      "feat.sub": "Cálculos hechos en tu iPhone con las ecuaciones solares de la NOAA.",
      "f1.t": "La trayectoria del sol sobre el mapa",
      "f1.d": "Elige cualquier punto y cualquier fecha: el camino del sol aparece en el mapa satelital, en 2D o 3D, con amanecer, atardecer, mediodía solar y los solsticios, en la zona horaria del lugar.",
      "f2.t": "El sol en la ventana, medido con la cámara",
      "f2.d": "Apunta el iPhone a la fachada: la app mide su orientación y muestra cuánto de la ventana queda a la sombra del alero en verano e invierno. Notas por habitación en el mapa e informe bioclimático en PDF.",
      "f3.t": "El panel solar frente al sol real",
      "f3.d": "Mira la potencia ahora, con cielo despejado y con las nubes de Apple Weather, la energía del día y la inclinación ideal. Cada número estimado aparece como estimación, con su fuente.",
      "tools.title": "Y más herramientas de precisión",
      "tools.sub": "Temporizador Solar, Índice Kp y Flujo Solar son gratis para todos.",
      "t.ar": "El camino del sol, los solsticios y la luna dibujados sobre la imagen de la cámara.",
      "t.shadow.t": "Rastreador de Sombras", "t.shadow": "La sombra de muros, casas y árboles a escala en el mapa, hora a hora, con ficha en PDF.",
      "t.angles.t": "Ángulos del Panel", "t.angles": "Mide la inclinación del techo con el iPhone y compárala con el ángulo ideal del día y del año.",
      "t.timer.t": "Temporizador Solar", "t.timer": "Amanecer, atardecer, hora dorada y hora azul del lugar elegido, con la cúpula 3D del cielo.",
      "t.flux.t": "Flujo Solar", "t.flux": "Rayos X en vivo de los satélites GOES, fulguraciones solares y el flujo de radio F10.7, de la NOAA.",
      "t.kp.t": "Índice Kp", "t.kp": "Actividad geomagnética observada y prevista, y hasta dónde puede verse la aurora.",
      "src.title": "Números con fuente",
      "src.sub": "Nada inventado: cuando un valor es una estimación, la app lo indica y dice de dónde viene.",
      "src.noaa": "Posición del sol con las ecuaciones solares de la NOAA y clima espacial del SWPC.",
      "src.nasa": "Climatología de 25 años (2001–2025): irradiación, temperatura, humedad y viento.",
      "src.apple": "Clima y nubosidad hora a hora.",
      "src.pv": "Modelo de cielo despejado para la generación estimada de los paneles.",
      "pro.title": "Gratis para empezar. Pro para proyectar.",
      "pro.sub": "Usa lo esencial sin pagar. Suscríbete a SunArch Pro cuando necesites cualquier fecha, cualquier lugar y los informes.",
      "pro.free": "Gratis",
      "pro.free.1": "Temporizador Solar, Índice Kp y Flujo Solar sin límites",
      "pro.free.2": "Brújula Solar con fechas hasta 15 días de hoy",
      "pro.free.3": "Lugares hasta 500 m de tu posición",
      "pro.free.4": "Sun AR con la lente 1×, el día de hoy",
      "pro.free.5": "Un sitio solar y el Panel 3D en vivo",
      "pro.p.1": "Cualquier fecha y cualquier lugar del mundo",
      "pro.p.2": "Confort y Fachadas completo",
      "pro.p.3": "Informes profesionales en PDF",
      "pro.p.4": "Ángulos del Panel y varios sitios solares en iCloud",
      "pro.p.5": "Sun AR con lente 0,5×, solsticios, otras fechas y fotos técnicas",
      "pro.note": "Suscripción semanal o mensual, con prueba gratis de 3 días para nuevos suscriptores. Cancela cuando quieras en los ajustes de tu cuenta de Apple.",
      "priv.title": "Sin cuenta, sin anuncios, sin rastreo",
      "priv.text": "Los cálculos se hacen en tu iPhone y tus sitios solares quedan en tu iCloud privado. Nunca recibimos tu ubicación.",
      "priv.link": "Leer la política de privacidad →",
      "final.title": "El sol de cualquier lugar, en la palma de tu mano.",
      "final.sub": "SunArch para iPhone.",
      "foot.privacy": "Privacidad", "foot.terms": "Términos de uso"
    }
  };

  var LANGS = { pt: "pt-BR", en: "en", es: "es" };
  var nodes = document.querySelectorAll("[data-i]");
  var alts = document.querySelectorAll("[data-i-alt]");
  // O texto original (português) de cada elemento, para voltar a ele.
  var pt = [], ptAlt = [];
  nodes.forEach(function (n, i) { pt[i] = n.textContent; });
  alts.forEach(function (n, i) { ptAlt[i] = n.getAttribute("alt"); });

  function apply(lang) {
    var t = T[lang];
    nodes.forEach(function (n, i) { n.textContent = t && t[n.dataset.i] || pt[i]; });
    alts.forEach(function (n, i) { n.setAttribute("alt", t && t[n.dataset.iAlt] || ptAlt[i]); });
    document.documentElement.lang = LANGS[lang];
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initial() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS[q]) return q;
    try { var s = localStorage.getItem("lang"); if (s && LANGS[s]) return s; } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    nav = nav.toLowerCase();
    if (nav.indexOf("pt") === 0) return "pt";
    if (nav.indexOf("es") === 0) return "es";
    return "en";
  }

  document.querySelectorAll(".langs button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.dataset.lang); });
  });
  apply(initial());
})();
