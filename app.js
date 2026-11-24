(() => {
  const strings = {
    pt: {
      locale: 'pt-BR',
      download: 'Baixar APK',
      screen_home: 'Inicial',
      screen_hn: 'Hacker News',
      screen_tools: 'Tools',
    },
    en: {
      locale: 'en-US',
      download: 'Download APK',
      screen_home: 'Home',
      screen_hn: 'Hacker News',
      screen_tools: 'Tools',
    },
    es: {
      locale: 'es-ES',
      download: 'Descargar APK',
      screen_home: 'Inicio',
      screen_hn: 'Hacker News',
      screen_tools: 'Tools',
    },
  };

  const rawLang = ((navigator.languages && navigator.languages[0]) || navigator.language || 'pt').toLowerCase();
  const lang = rawLang.startsWith('pt') ? 'pt' : rawLang.startsWith('es') ? 'es' : 'en';
  const copy = strings[lang];

  document.documentElement.lang = copy.locale;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && copy[key]) el.textContent = copy[key];
  });

  const cards = Array.from(document.querySelectorAll('[data-shot-src]'));
  const lightbox = document.getElementById('shotLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const closeBtn = document.getElementById('lightboxClose');
  let activeIndex = -1;

  function showAt(index) {
    if (!lightbox || !lightboxImg || !lightboxTitle || cards.length === 0) return;
    activeIndex = (index + cards.length) % cards.length;
    const card = cards[activeIndex];
    const src = card.getAttribute('data-shot-src') || '';
    const key = card.getAttribute('data-shot-label') || '';
    const label = copy[key] || '';
    lightboxImg.src = src;
    lightboxImg.alt = `NotLauncher — ${label}`;
    lightboxTitle.textContent = label;
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!lightbox || !lightboxImg) return;
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
    activeIndex = -1;
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => showAt(index));
  });

  if (prevBtn) prevBtn.addEventListener('click', () => showAt(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showAt(activeIndex + 1));
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') showAt(activeIndex - 1);
    else if (e.key === 'ArrowRight') showAt(activeIndex + 1);
  });
})();
