(function () {
  // Language toggle -------------------------------------------------------
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-set-lang]');
  function setLang(l) {
    root.setAttribute('lang', l);
    try { localStorage.setItem('lang', l); } catch (e) {}
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === l));
    });
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });
  setLang(root.getAttribute('lang') === 'en' ? 'en' : 'ja');

  // Mobile nav ------------------------------------------------------------
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
})();
