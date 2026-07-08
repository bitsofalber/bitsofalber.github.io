/* shared: reveal-on-scroll, mobile nav, ES/EN i18n */
(function () {
  // reveal
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // mobile nav
  var nav = document.getElementById('nav');
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () { if (nav) nav.classList.remove('open'); });
  });

  // i18n — elements carry Spanish in their content and English in data-en
  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (el.getAttribute('data-es') === null) el.setAttribute('data-es', el.innerHTML);
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  var saved = 'es';
  try { saved = localStorage.getItem('lang') || 'es'; } catch (e) {}
  document.querySelectorAll('.lang-btn button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });
  applyLang(saved);
})();
