(() => {
  const dict = {
    pt: {
      locale: 'pt-BR',
      nav_features: 'O app',
      nav_experience: 'Simulador',
      nav_shots: 'Telas',
      nav_specs: 'Sobre',
      hero_title: 'Menos ruído na sua tela inicial.',
      hero_subtitle: 'Favoritos em texto, busca de A a Z, notas rápidas e foco. Sem anúncios, sem grades, 100% offline.',
      hero_cta_primary: 'Testar simulador',
      hero_cta_download: 'Baixar APK',
      hero_note: 'Android 7–16 · Backup JSON local',
      features_title: 'O essencial, apenas.',
      f1_title: 'Home e linha “Agora”',
      f1_desc: 'Relógio, Timer, próximo evento ou tarefa clicável, com atalho direto ao deslizar o favorito.',
      f2_title: 'Onda A–Z inteligente',
      f2_desc: 'Todos os apps com um dedo, detecção automática do clipboard, cálculo inline e comando “todo”.',
      f3_title: 'Leitura e notas',
      f3_desc: 'Hacker News ou Google News com Modo Leitor e fila salva, além de widgets translúcidos e checklists “- [ ]”.',
      f4_title: 'Foco e modos',
      f4_desc: 'Temas OLED, Creme e Claro vinculados ao modo ativo, com cotas diárias silenciosas por aplicativo.',
      demo_title: 'Simulador',
      demo_desc: 'Navegue pelas telas, alterne o tema e teste os gestos diretamente no aparelho.',
      tab_home: 'Home',
      tab_wave: 'Onda A–Z',
      tab_news: 'Notícias',
      tab_widgets: 'Widgets',
      mode_oled: 'OLED',
      mode_cream: 'Creme',
      mode_light: 'Claro',
      demo_tip: 'Toque na linha “Agora”, deslize apps na Onda, digite “todo …” na busca ou abra um artigo no Modo Leitor.',
      spec_subtitle: 'Jetpack Compose · Material 3',
      spec_pkg: 'Pacote',
      spec_android: 'Android',
      spec_themes: 'Temas',
      spec_themes_val: 'OLED / Creme / Claro',
      spec_ads: 'Dados',
      spec_none: '100% local · JSON',
      shots_title: 'Telas',
      shot1_title: 'Home OLED e linha “Agora”',
      shot1_desc: 'Relógio, linha Agora clicável e favoritos com atalho por deslize.',
      shot2_title: 'Onda A–Z, clipboard e cotas',
      shot2_desc: 'Acesso com um dedo, cartão de link copiado e indicador diário 3/5.',
      shot3_title: 'Hacker News e Modo Leitor',
      shot3_desc: 'Botão de comentários clicável, fila Ler depois e leitura sem distrações.',
      shot4_title: 'Widgets e checklist interativa',
      shot4_desc: 'Timer de Foco, Bateria e caixas “- [ ]” clicáveis sincronizadas.',
      shot5_title: 'Tema Creme e cota silenciosa',
      shot5_desc: 'Modo Foco em papel Creme exibindo a pausa calma ao atingir o limite.',
      searchPlaceholder: 'Filtrar, calcular (ex: 12*4) ou "todo tarefa"…',
      resetDemo: 'Reset',
      pin: 'Fixar',
      unpin: 'Remover',
      quotaAction: 'Cota',
      uninstall: 'Ocultar',
      openWaveLabel: 'Todos os apps (Onda A–Z)',
      scrollUpExitLabel: 'Deslize ↑ ou toque para voltar à Home',
      focusTitle: 'Timer de Foco',
      startTimer: 'Iniciar',
      pauseTimer: 'Pausar',
      resetTimer: 'Zerar',
      notesTitle: 'Notas Rápidas (Checklist)',
      batteryTitle: 'Bateria',
      nowFocus: (t) => `Agora · Foco ${t}`,
      nowTask: (txt) => `Agora · Tarefa: ${txt}`,
      nowFallback: 'Agora · Tudo em dia — abrir Notas',
      clipboardKicker: 'Área de transferência detectada',
      clipboardOpen: 'Abrir',
      clipboardSave: 'Salvar',
      todoCmdLabel: (txt) => `+ Adicionar tarefa "${txt}" às Notas`,
      calcCmdLabel: (res) => `Resultado: ${res} (toque para copiar)`,
      newsTabFeed: 'Hacker News',
      newsTabSaved: (n) => `Salvos (${n})`,
      commentsBtn: (n) => `${n} comentários`,
      saveBtn: 'Salvar',
      savedBtn: 'Salvo',
      readBtn: 'Ler limpo',
      readerDone: 'Concluir leitura',
      closeBtn: 'Fechar',
      noSavedNews: 'Nenhuma matéria salva ainda.',
      quotaTitle: 'Cota diária atingida',
      quotaBody: (name, used, max) => `${name} já foi aberto ${used} de ${max} vezes hoje. Deseja abrir mesmo assim?`,
      openNow: 'Abrir assim mesmo',
      cancel: 'Cancelar',
      quickActionToast: (name, sc) => `${name} → ${sc}`,
      modeOledBadge: 'OLED',
      modeCreamBadge: 'FOCO · CREME',
      modeLightBadge: 'CLARO',
      defaultNotes: '- [ ] Revisar PR semanal\n- [x] Comprar café\n- [ ] Publicar nova build',
    },
    en: {
      locale: 'en-US',
      nav_features: 'Overview',
      nav_experience: 'Simulator',
      nav_shots: 'Screens',
      nav_specs: 'About',
      hero_title: 'Less noise on your home screen.',
      hero_subtitle: 'Text-first favorites, A–Z search, quick notes, and quiet focus. No ads, no grids, 100% offline.',
      hero_cta_primary: 'Try simulator',
      hero_cta_download: 'Download APK',
      hero_note: 'Android 7–16 · Local JSON backup',
      features_title: 'Just the essentials.',
      f1_title: 'Home & “Now” line',
      f1_desc: 'Clock, Focus Timer, next event, or task in one clickable line, plus quick-swipe shortcuts on favorites.',
      f2_title: 'Smart A–Z Wave',
      f2_desc: 'One-handed app scrubbing with clipboard detection, inline math, and instant “todo” capture.',
      f3_title: 'Reading & checklists',
      f3_desc: 'Hacker News or Google News with Clean Reader and Read Later queue, plus frosted “- [ ]” checklist widgets.',
      f4_title: 'Focus & modes',
      f4_desc: 'OLED, Cream, and Light themes linked to contextual modes, with quiet daily app quotas.',
      demo_title: 'Simulator',
      demo_desc: 'Switch screens, change themes, and try the gestures directly.',
      tab_home: 'Home',
      tab_wave: 'A–Z Wave',
      tab_news: 'News',
      tab_widgets: 'Widgets',
      mode_oled: 'OLED',
      mode_cream: 'Cream',
      mode_light: 'Light',
      demo_tip: 'Tap the Now line, swipe rows in Wave, type “todo …” in search, or open any article in Reader Mode.',
      spec_subtitle: 'Jetpack Compose · Material 3',
      spec_pkg: 'Package',
      spec_android: 'Android',
      spec_themes: 'Themes',
      spec_themes_val: 'OLED / Cream / Light',
      spec_ads: 'Data',
      spec_none: '100% local · JSON',
      shots_title: 'Screens',
      shot1_title: 'OLED Home & “Now” line',
      shot1_desc: 'Clock, clickable Now line, and favorites with quick shortcuts.',
      shot2_title: 'A–Z Wave, clipboard & quotas',
      shot2_desc: 'One-handed index, copied link card, and subtle 3/5 quota badge.',
      shot3_title: 'Hacker News & Reader Mode',
      shot3_desc: 'Clickable comments chip, Read Later queue, and distraction-free reading.',
      shot4_title: 'Widgets & interactive notes',
      shot4_desc: 'Focus Timer, Battery, and tap-to-toggle “- [ ]” checklist.',
      shot5_title: 'Cream theme & quiet quota',
      shot5_desc: 'Paper Cream Focus Mode with calm daily limit confirmation.',
      searchPlaceholder: 'Filter, calc (e.g. 12*4) or "todo task"…',
      resetDemo: 'Reset',
      pin: 'Pin',
      unpin: 'Unpin',
      quotaAction: 'Quota',
      uninstall: 'Hide',
      openWaveLabel: 'All apps (A–Z Wave)',
      scrollUpExitLabel: 'Swipe ↑ or tap to return Home',
      focusTitle: 'Focus Timer',
      startTimer: 'Start',
      pauseTimer: 'Pause',
      resetTimer: 'Reset',
      notesTitle: 'Quick Notes (Checklist)',
      batteryTitle: 'Battery',
      nowFocus: (t) => `Now · Focus ${t}`,
      nowTask: (txt) => `Now · Task: ${txt}`,
      nowFallback: 'Now · All caught up — open Notes',
      clipboardKicker: 'Clipboard detected',
      clipboardOpen: 'Open',
      clipboardSave: 'Save',
      todoCmdLabel: (txt) => `+ Add "${txt}" to Quick Notes`,
      calcCmdLabel: (res) => `Result: ${res} (tap to copy)`,
      newsTabFeed: 'Hacker News',
      newsTabSaved: (n) => `Saved (${n})`,
      commentsBtn: (n) => `${n} comments`,
      saveBtn: 'Save',
      savedBtn: 'Saved',
      readBtn: 'Reader Mode',
      readerDone: 'Done reading',
      closeBtn: 'Close',
      noSavedNews: 'No saved articles yet.',
      quotaTitle: 'Daily quota reached',
      quotaBody: (name, used, max) => `${name} reached ${used} of ${max} opens today. Open anyway?`,
      openNow: 'Open anyway',
      cancel: 'Cancel',
      quickActionToast: (name, sc) => `${name} → ${sc}`,
      modeOledBadge: 'OLED',
      modeCreamBadge: 'FOCUS · CREAM',
      modeLightBadge: 'LIGHT',
      defaultNotes: '- [ ] Review weekly PR\n- [x] Buy coffee beans\n- [ ] Prepare release',
    },
    es: {
      locale: 'es-ES',
      nav_features: 'El app',
      nav_experience: 'Simulador',
      nav_shots: 'Pantallas',
      nav_specs: 'Info',
      hero_title: 'Menos ruido en tu pantalla de inicio.',
      hero_subtitle: 'Favoritos en texto, búsqueda A–Z, notas rápidas y foco. Sin anuncios, sin cuadrículas, 100% offline.',
      hero_cta_primary: 'Probar simulador',
      hero_cta_download: 'Descargar APK',
      hero_note: 'Android 7–16 · Respaldo JSON local',
      features_title: 'Solo lo esencial.',
      f1_title: 'Inicio y línea “Ahora”',
      f1_desc: 'Reloj, temporizador, próximo evento o tarea clicable, con atajo directo al deslizar un favorito.',
      f2_title: 'Onda A–Z inteligente',
      f2_desc: 'Todas las apps con un pulgar, detección del portapapeles, cálculo rápido y comando “todo”.',
      f3_title: 'Lectura y notas',
      f3_desc: 'Hacker News o Google News con Modo Lectura y cola guardada, junto a widgets translúcidos y casillas “- [ ]”.',
      f4_title: 'Foco y modos',
      f4_desc: 'Temas OLED, Crema y Claro vinculados al modo activo, con cuotas diarias silenciosas por app.',
      demo_title: 'Simulador',
      demo_desc: 'Cambia de pantalla, prueba los temas y desliza directamente.',
      tab_home: 'Inicio',
      tab_wave: 'Onda A–Z',
      tab_news: 'Noticias',
      tab_widgets: 'Widgets',
      mode_oled: 'OLED',
      mode_cream: 'Crema',
      mode_light: 'Claro',
      demo_tip: 'Toca la línea “Ahora”, desliza filas en la Onda, escribe “todo …” o abre cualquier artículo en Modo Lectura.',
      spec_subtitle: 'Jetpack Compose · Material 3',
      spec_pkg: 'Paquete',
      spec_android: 'Android',
      spec_themes: 'Temas',
      spec_themes_val: 'OLED / Crema / Claro',
      spec_ads: 'Datos',
      spec_none: '100% local · JSON',
      shots_title: 'Pantallas',
      shot1_title: 'Inicio OLED y línea “Ahora”',
      shot1_desc: 'Reloj, línea Ahora clicable y favoritos con atajo rápido.',
      shot2_title: 'Onda A–Z, portapapeles y cuotas',
      shot2_desc: 'Índice lateral, enlace copiado e indicador diario 3/5.',
      shot3_title: 'Hacker News y Modo Lectura',
      shot3_desc: 'Botón de comentarios visible, cola Leer luego y lectura limpia.',
      shot4_title: 'Widgets y checklist interactiva',
      shot4_desc: 'Temporizador, Batería y casillas “- [ ]” sincronizadas.',
      shot5_title: 'Tema Crema y cuota silenciosa',
      shot5_desc: 'Modo Enfoque en papel Crema con confirmación serena.',
      searchPlaceholder: 'Filtrar, calcular (12*4) o "todo tarea"…',
      resetDemo: 'Restablecer',
      pin: 'Fijar',
      unpin: 'Quitar',
      quotaAction: 'Cuota',
      uninstall: 'Ocultar',
      openWaveLabel: 'Todas las apps (Onda A–Z)',
      scrollUpExitLabel: 'Desliza ↑ o toca para volver',
      focusTitle: 'Temporizador',
      startTimer: 'Iniciar',
      pauseTimer: 'Pausar',
      resetTimer: 'Reiniciar',
      notesTitle: 'Notas Rápidas (Checklist)',
      batteryTitle: 'Batería',
      nowFocus: (t) => `Ahora · Enfoque ${t}`,
      nowTask: (txt) => `Ahora · Tarea: ${txt}`,
      nowFallback: 'Ahora · Todo al día — abrir Notas',
      clipboardKicker: 'Portapapeles detectado',
      clipboardOpen: 'Abrir',
      clipboardSave: 'Guardar',
      todoCmdLabel: (txt) => `+ Añadir "${txt}" a Notas Rápidas`,
      calcCmdLabel: (res) => `Resultado: ${res} (toca para copiar)`,
      newsTabFeed: 'Hacker News',
      newsTabSaved: (n) => `Guardados (${n})`,
      commentsBtn: (n) => `${n} comentarios`,
      saveBtn: 'Guardar',
      savedBtn: 'Guardado',
      readBtn: 'Modo Lectura',
      readerDone: 'Terminar lectura',
      closeBtn: 'Cerrar',
      noSavedNews: 'Sin artículos guardados todavía.',
      quotaTitle: 'Cuota diaria alcanzada',
      quotaBody: (name, used, max) => `${name} alcanzó ${used} de ${max} aperturas hoy. ¿Abrir igualmente?`,
      openNow: 'Abrir ahora',
      cancel: 'Cancelar',
      quickActionToast: (name, sc) => `${name} → ${sc}`,
      modeOledBadge: 'OLED',
      modeCreamBadge: 'ENFOQUE · CREMA',
      modeLightBadge: 'CLARO',
      defaultNotes: '- [ ] Revisar PR semanal\n- [x] Comprar café\n- [ ] Preparar versión',
    },
  };

  function detectLang() {
    const raw = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
    if (raw.startsWith('pt')) return 'pt';
    if (raw.startsWith('es')) return 'es';
    return 'en';
  }

  let currentLang = detectLang();
  let currentTab = 'home';
  let currentSimTheme = 'night';
  let activeLetter = 'C';
  let swipedAppId = null;
  let searchQuery = '';

  let timerSeconds = 25 * 60;
  let timerRunning = false;
  let timerInterval = null;
  let notesText = dict[currentLang].defaultNotes;
  let clipboardDismissed = false;
  let clipboardLink = { url: 'https://github.com/issoeocio/notlauncher', host: 'github.com/issoeocio/notlauncher', name: 'GitHub Repo' };
  let newsSubTab = 'feed';
  let readerModalArticle = null;
  let quotaModalApp = null;
  let toastMessage = '';
  let toastTimer = null;

  const initialApps = [
    { id: 'calendar', name: 'Calendar', letter: 'C', pinned: true, shortcut: 'New event', quota: 0, usedToday: 0 },
    { id: 'camera', name: 'Camera', letter: 'C', pinned: false, shortcut: 'Selfie', quota: 0, usedToday: 0 },
    { id: 'github', name: 'GitHub', letter: 'G', pinned: false, shortcut: 'Notifications', quota: 0, usedToday: 0 },
    { id: 'gmail', name: 'Gmail', letter: 'G', pinned: true, shortcut: 'Compose email', quota: 0, usedToday: 0 },
    { id: 'instagram', name: 'Instagram', letter: 'I', pinned: true, shortcut: 'Direct', quota: 3, usedToday: 2 },
    { id: 'maps', name: 'Maps', letter: 'M', pinned: true, shortcut: 'Home route', quota: 0, usedToday: 0 },
    { id: 'notes', name: 'Quick Notes', letter: 'Q', pinned: true, shortcut: 'Checklist', quota: 0, usedToday: 0 },
    { id: 'settings', name: 'Settings', letter: 'S', pinned: false, shortcut: 'Display', quota: 0, usedToday: 0 },
    { id: 'spotify', name: 'Spotify', letter: 'S', pinned: true, shortcut: 'Search music', quota: 0, usedToday: 0 },
    { id: 'youtube', name: 'YouTube', letter: 'Y', pinned: false, shortcut: 'Subscriptions', quota: 5, usedToday: 3 },
  ];
  let apps = initialApps.map((a) => ({ ...a }));

  const initialNews = [
    {
      id: 'hn1',
      title: 'Why Minimalist Launchers Reduce Context Switching on Android',
      source: 'news.ycombinator.com · 184 pts',
      comments: 84,
      saved: true,
      summary: [
        'Dense grids of colorful notification badges exploit peripheral attention before you even remember why you unlocked your phone.',
        'Replacing grid memory with plain typography and intentional friction—such as quiet daily quotas and a single contextual Now line—restores deliberate phone usage without locking the device.',
        'Local storage and clean reader stripping let users consume long-form essays without ads, sticky toolbars, or algorithmic feeds.',
      ],
    },
    {
      id: 'hn2',
      title: 'Designing One-Handed Alphabet Scrubbers in Jetpack Compose',
      source: 'android.dev · 142 pts',
      comments: 47,
      saved: false,
      summary: [
        'Modern 6.7-inch screens push top search bars out of natural thumb reach. Moving the Wave rail and bottom search bar inside the lower arc keeps every app reachable one-handed.',
        'Stable item keys and zero-allocation scrolling keep frame times steady even across hundreds of installed packages.',
      ],
    },
    {
      id: 'hn3',
      title: 'Offline-First Plaintext Checklists Beat Bloated Task Suites',
      source: 'localfirst.fm · 96 pts',
      comments: 31,
      saved: true,
      summary: [
        'Simple "- [ ]" lines inside quick notes double as both raw markdown and interactive widgets—portable across JSON backups with zero vendor lock-in.',
      ],
    },
  ];
  let newsArticles = initialNews.map((n) => ({ ...n }));

  const letters = ['C', 'G', 'I', 'M', 'Q', 'S', 'Y'];

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatTimer(sec) {
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  }

  function parseTasks(notes) {
    const out = [];
    notes.split('\n').forEach((line, idx) => {
      const mChecked = line.match(/^\s*-\s*\[[xX]\]\s*(.+)$/);
      if (mChecked) {
        out.push({ idx, text: mChecked[1].trim(), done: true });
        return;
      }
      const mOpen = line.match(/^\s*-\s*\[\s*\]\s*(.+)$/);
      if (mOpen) {
        out.push({ idx, text: mOpen[1].trim(), done: false });
      }
    });
    return out;
  }

  function toggleTaskLine(notes, idx) {
    const lines = notes.split('\n');
    const line = lines[idx];
    if (!line) return notes;
    if (/^\s*-\s*\[[xX]\]/.test(line)) {
      lines[idx] = line.replace(/\[[xX]\]/, '[ ]');
    } else if (/^\s*-\s*\[\s*\]/.test(line)) {
      lines[idx] = line.replace(/\[\s*\]/, '[x]');
    }
    return lines.join('\n');
  }

  function appendTodo(notes, taskText) {
    const clean = taskText.trim();
    if (!clean) return notes;
    const line = `- [ ] ${clean}`;
    return notes.trim() ? `${notes.trimEnd()}\n${line}` : line;
  }

  function evalSimpleMath(raw) {
    const clean = raw.trim().replace(/,/g, '.');
    if (!clean || !/[+\-*/%]/.test(clean) || !/^[0-9+\-*/%().\s]+$/.test(clean)) return null;
    try {
      const val = Function(`"use strict"; return (${clean});`)();
      if (typeof val === 'number' && Number.isFinite(val)) {
        return String(Math.round(val * 1e6) / 1e6);
      }
    } catch (_) {
      return null;
    }
    return null;
  }

  function detectTodoCmd(raw) {
    const trimmed = raw.trim();
    const lowered = trimmed.toLowerCase();
    for (const p of ['todo ', 'tarefa ', 'task ']) {
      if (lowered.startsWith(p)) {
        const rest = trimmed.slice(p.length).trim();
        if (rest) return rest;
      }
    }
    return null;
  }

  function showToast(msg) {
    toastMessage = msg;
    if (toastTimer) clearTimeout(toastTimer);
    renderPhoneScreen();
    toastTimer = setTimeout(() => {
      toastMessage = '';
      toastTimer = null;
      renderPhoneScreen();
    }, 1800);
  }

  function setTab(nextTab) {
    if (!nextTab) return;
    currentTab = nextTab;
    swipedAppId = null;
    readerModalArticle = null;
    quotaModalApp = null;
    document.querySelectorAll('.seg-tab').forEach((t) => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });
    renderPhoneScreen();
  }

  function setSimMode(mode) {
    currentSimTheme = mode;
    const frame = document.getElementById('phoneFrame');
    const badge = document.getElementById('simModeBadge');
    const copy = dict[currentLang];
    if (frame) {
      if (mode === 'focus') frame.setAttribute('data-sim-theme', 'cream');
      else if (mode === 'light') frame.setAttribute('data-sim-theme', 'light');
      else frame.removeAttribute('data-sim-theme');
    }
    if (badge) {
      badge.textContent = mode === 'focus' ? copy.modeCreamBadge : mode === 'light' ? copy.modeLightBadge : copy.modeOledBadge;
    }
    document.querySelectorAll('.mode-tab').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-mode') === mode);
    });
  }

  function updateClock() {
    const el = document.getElementById('simClock');
    if (!el) return;
    const d = new Date();
    el.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  function applyTranslations() {
    const copy = dict[currentLang];
    document.documentElement.lang = copy.locale;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (key && typeof copy[key] === 'string') {
        node.textContent = copy[key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
    setSimMode(currentSimTheme);
    renderPhoneScreen();
  }

  function attemptLaunchApp(app, isQuickShortcut) {
    const copy = dict[currentLang];
    if (app.quota > 0 && app.usedToday >= app.quota) {
      quotaModalApp = { app, isQuickShortcut };
      renderPhoneScreen();
      return;
    }
    app.usedToday += 1;
    if (isQuickShortcut) {
      showToast(copy.quickActionToast(app.name, app.shortcut));
    } else if (app.id === 'notes') {
      setTab('widgets');
    } else {
      showToast(`${app.name}...`);
    }
  }

  function getVisibleSlice() {
    const q = searchQuery.trim().toLowerCase();
    const sorted = [...apps]
      .filter((item) => !q || item.name.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name, 'en'));
    if (sorted.length === 0) return { rows: [], focusedId: null };
    let focusIndex = sorted.findIndex((item) => item.letter === activeLetter);
    if (focusIndex === -1) focusIndex = Math.min(2, sorted.length - 1);
    const start = Math.max(0, Math.min(focusIndex - 3, Math.max(0, sorted.length - 7)));
    return { rows: sorted.slice(start, start + 7), focusedId: sorted[focusIndex].id };
  }

  function renderModalsHtml() {
    const copy = dict[currentLang];
    if (quotaModalApp) {
      const { app } = quotaModalApp;
      return `
        <div class="sim-modal-overlay" id="simQuotaOverlay">
          <div class="sim-modal-card" role="alertdialog" aria-modal="true">
            <h4>${escapeHtml(copy.quotaTitle)} · ${escapeHtml(app.name)}</h4>
            <p>${escapeHtml(copy.quotaBody(app.name, app.usedToday, app.quota))}</p>
            <div class="sim-modal-btns">
              <button type="button" class="widget-btn" id="simQuotaCancel">${escapeHtml(copy.cancel)}</button>
              <button type="button" class="widget-btn primary" id="simQuotaConfirm">${escapeHtml(copy.openNow)}</button>
            </div>
          </div>
        </div>
      `;
    }
    if (readerModalArticle) {
      return `
        <div class="sim-modal-overlay" id="simReaderOverlay">
          <div class="sim-modal-card" role="dialog" aria-modal="true">
            <div style="font-size:0.68rem; color:var(--sim-muted); margin-bottom:4px;">${escapeHtml(readerModalArticle.source)}</div>
            <h4>${escapeHtml(readerModalArticle.title)}</h4>
            ${readerModalArticle.summary.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            <div class="sim-modal-btns">
              ${
                newsSubTab === 'saved'
                  ? `<button type="button" class="widget-btn primary" id="simReaderDone">${escapeHtml(copy.readerDone)}</button>`
                  : `<button type="button" class="widget-btn primary" id="simReaderClose">${escapeHtml(copy.closeBtn)}</button>`
              }
            </div>
          </div>
        </div>
      `;
    }
    return '';
  }

  function renderToastHtml() {
    return toastMessage ? `<div class="phone-toast" role="status">${escapeHtml(toastMessage)}</div>` : '';
  }

  function wireModals(screen) {
    const quotaCancel = screen.querySelector('#simQuotaCancel');
    const quotaConfirm = screen.querySelector('#simQuotaConfirm');
    if (quotaCancel) {
      quotaCancel.addEventListener('click', () => {
        quotaModalApp = null;
        renderPhoneScreen();
      });
    }
    if (quotaConfirm && quotaModalApp) {
      quotaConfirm.addEventListener('click', () => {
        const { app, isQuickShortcut } = quotaModalApp;
        app.usedToday += 1;
        quotaModalApp = null;
        showToast(isQuickShortcut ? dict[currentLang].quickActionToast(app.name, app.shortcut) : `${app.name}...`);
      });
    }

    const readerClose = screen.querySelector('#simReaderClose');
    const readerDone = screen.querySelector('#simReaderDone');
    if (readerClose) {
      readerClose.addEventListener('click', () => {
        readerModalArticle = null;
        renderPhoneScreen();
      });
    }
    if (readerDone && readerModalArticle) {
      readerDone.addEventListener('click', () => {
        readerModalArticle.saved = false;
        readerModalArticle = null;
        renderPhoneScreen();
      });
    }
  }

  function renderPhoneScreen() {
    const screen = document.getElementById('phoneScreen');
    if (!screen) return;
    const copy = dict[currentLang];

    if (currentTab === 'home') {
      const pinned = apps.filter((a) => a.pinned);
      const now = new Date();
      const dateStr = now.toLocaleDateString(copy.locale, { weekday: 'short', day: 'numeric', month: 'short' });
      const tasks = parseTasks(notesText);
      const nextOpenTask = tasks.find((t) => !t.done);
      const nowText = timerRunning
        ? copy.nowFocus(formatTimer(timerSeconds))
        : nextOpenTask
          ? copy.nowTask(nextOpenTask.text)
          : copy.nowFallback;

      screen.innerHTML = `
        <div class="phone-home-clock mono">${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}</div>
        <div class="phone-home-date">${escapeHtml(dateStr)} · 22°C</div>
        <button type="button" class="phone-now-line" id="simNowLineBtn">
          <span aria-hidden="true">${timerRunning ? '⏱' : '☑'}</span>
          <span>${escapeHtml(nowText)}</span>
        </button>

        <div class="phone-fav-list">
          ${pinned
            .map((item) => {
              const quotaReached = item.quota > 0 && item.usedToday >= item.quota;
              return `
                <div class="phone-fav-row ${quotaReached ? 'dimmed' : ''}">
                  <button type="button" class="phone-fav-item" data-launch-id="${item.id}">
                    <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(item.name)}</span>
                    ${
                      item.quota > 0
                        ? `<span class="phone-quota-badge mono">${item.usedToday}/${item.quota}</span>`
                        : ''
                    }
                  </button>
                  <button type="button" class="phone-fav-quick-btn" data-quick-id="${item.id}" title="${escapeHtml(item.shortcut)}" aria-label="${escapeHtml(item.shortcut)}">→</button>
                </div>
              `;
            })
            .join('')}
          <button type="button" class="phone-home-drawer-trigger" id="simOpenWaveBtn">
            <span>${escapeHtml(copy.openWaveLabel)}</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
        ${renderModalsHtml()}
        ${renderToastHtml()}
      `;

      const nowBtn = screen.querySelector('#simNowLineBtn');
      if (nowBtn) {
        nowBtn.addEventListener('click', () => setTab('widgets'));
      }
      screen.querySelectorAll('[data-launch-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const item = apps.find((a) => a.id === btn.getAttribute('data-launch-id'));
          if (item) attemptLaunchApp(item, false);
        });
      });
      screen.querySelectorAll('[data-quick-id]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const item = apps.find((a) => a.id === btn.getAttribute('data-quick-id'));
          if (item) attemptLaunchApp(item, true);
        });
      });
      const openWaveBtn = screen.querySelector('#simOpenWaveBtn');
      if (openWaveBtn) {
        openWaveBtn.addEventListener('click', () => setTab('wave'));
      }
      wireModals(screen);
      return;
    }

    if (currentTab === 'news') {
      const savedList = newsArticles.filter((a) => a.saved);
      const listToShow = newsSubTab === 'saved' ? savedList : newsArticles;
      screen.innerHTML = `
        <div class="sim-news-wrap">
          <div class="sim-news-tabs" role="tablist">
            <button type="button" class="sim-news-tab ${newsSubTab === 'feed' ? 'active' : ''}" data-news-sub="feed">${escapeHtml(copy.newsTabFeed)}</button>
            <button type="button" class="sim-news-tab ${newsSubTab === 'saved' ? 'active' : ''}" data-news-sub="saved">${escapeHtml(copy.newsTabSaved(savedList.length))}</button>
          </div>
          <div class="sim-news-list">
            ${
              listToShow.length === 0
                ? `<p style="text-align:center;color:var(--sim-muted);font-size:0.8rem;padding:24px 8px;">${escapeHtml(copy.noSavedNews)}</p>`
                : listToShow
                    .map(
                      (art) => `
                  <div class="sim-news-card">
                    <div class="sim-news-meta mono">${escapeHtml(art.source)}</div>
                    <div class="sim-news-title">${escapeHtml(art.title)}</div>
                    <div class="sim-news-actions">
                      <button type="button" class="sim-mini-btn" data-comments-id="${art.id}">${escapeHtml(copy.commentsBtn(art.comments))}</button>
                      <div style="display:flex;gap:4px;">
                        <button type="button" class="sim-mini-btn ${art.saved ? 'primary' : ''}" data-save-art="${art.id}">${escapeHtml(art.saved ? copy.savedBtn : copy.saveBtn)}</button>
                        <button type="button" class="sim-mini-btn primary" data-read-art="${art.id}">${escapeHtml(copy.readBtn)}</button>
                      </div>
                    </div>
                  </div>
                `,
                    )
                    .join('')
            }
          </div>
        </div>
        ${renderModalsHtml()}
        ${renderToastHtml()}
      `;

      screen.querySelectorAll('[data-news-sub]').forEach((btn) => {
        btn.addEventListener('click', () => {
          newsSubTab = btn.getAttribute('data-news-sub') || 'feed';
          renderPhoneScreen();
        });
      });
      screen.querySelectorAll('[data-save-art]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const art = newsArticles.find((a) => a.id === btn.getAttribute('data-save-art'));
          if (art) {
            art.saved = !art.saved;
            renderPhoneScreen();
          }
        });
      });
      screen.querySelectorAll('[data-read-art]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const art = newsArticles.find((a) => a.id === btn.getAttribute('data-read-art'));
          if (art) {
            readerModalArticle = art;
            renderPhoneScreen();
          }
        });
      });
      screen.querySelectorAll('[data-comments-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const art = newsArticles.find((a) => a.id === btn.getAttribute('data-comments-id'));
          if (art) showToast(`HN Thread (${art.comments} comments)`);
        });
      });
      wireModals(screen);
      return;
    }

    if (currentTab === 'widgets') {
      const tasks = parseTasks(notesText);
      screen.innerHTML = `
        <div class="phone-widgets-clean">
          <div class="widget-clean-card">
            <div class="widget-clean-title">${escapeHtml(copy.focusTitle)}</div>
            <div class="widget-timer-row">
              <div class="widget-clean-value mono" id="simTimerValue">${formatTimer(timerSeconds)}</div>
              <div class="widget-timer-controls">
                <button type="button" class="widget-btn primary" id="simTimerToggle">${escapeHtml(timerRunning ? copy.pauseTimer : copy.startTimer)}</button>
                <button type="button" class="widget-btn" id="simTimerReset">${escapeHtml(copy.resetTimer)}</button>
              </div>
            </div>
          </div>
          <div class="widget-clean-card">
            <div class="widget-clean-title">${escapeHtml(copy.notesTitle)}</div>
            <div class="sim-checklist">
              ${tasks
                .map(
                  (tk) => `
                  <button type="button" class="sim-check-item ${tk.done ? 'done' : ''}" data-task-idx="${tk.idx}">
                    <span class="sim-check-box">${tk.done ? '✓' : ''}</span>
                    <span class="txt">${escapeHtml(tk.text)}</span>
                  </button>
                `,
                )
                .join('')}
            </div>
          </div>
          <div class="widget-clean-card" style="display:flex; justify-content:space-between; align-items:center;">
            <span class="widget-clean-title">${escapeHtml(copy.batteryTitle)}</span>
            <span class="mono" style="font-size: 1.05rem; color: var(--sim-text)">92%</span>
          </div>
        </div>
        ${renderModalsHtml()}
        ${renderToastHtml()}
      `;

      screen.querySelectorAll('[data-task-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-task-idx'));
          notesText = toggleTaskLine(notesText, idx);
          renderPhoneScreen();
        });
      });

      const timerToggle = screen.querySelector('#simTimerToggle');
      const timerReset = screen.querySelector('#simTimerReset');
      if (timerToggle) {
        timerToggle.addEventListener('click', () => {
          timerRunning = !timerRunning;
          if (timerRunning) {
            if (timerSeconds <= 0) timerSeconds = 25 * 60;
            if (!timerInterval) {
              timerInterval = setInterval(() => {
                if (timerSeconds > 0) {
                  timerSeconds -= 1;
                  const valEl = document.getElementById('simTimerValue');
                  if (valEl) valEl.textContent = formatTimer(timerSeconds);
                } else {
                  timerRunning = false;
                  clearInterval(timerInterval);
                  timerInterval = null;
                  showToast('Focus complete');
                }
              }, 1000);
            }
          } else if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
          }
          renderPhoneScreen();
        });
      }
      if (timerReset) {
        timerReset.addEventListener('click', () => {
          timerRunning = false;
          if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
          }
          timerSeconds = 25 * 60;
          renderPhoneScreen();
        });
      }
      wireModals(screen);
      return;
    }

    const { rows, focusedId } = getVisibleSlice();
    const showReset = apps.length < initialApps.length || searchQuery.length > 0 || clipboardDismissed;
    const todoTask = detectTodoCmd(searchQuery);
    const mathRes = evalSimpleMath(searchQuery);

    screen.innerHTML = `
      <div class="phone-wave-toolbar">
        <input
          type="text"
          id="simWaveSearch"
          class="phone-wave-search"
          value="${escapeHtml(searchQuery)}"
          placeholder="${escapeHtml(copy.searchPlaceholder)}"
          aria-label="${escapeHtml(copy.searchPlaceholder)}"
        />
        ${showReset ? `<button type="button" id="simResetDemo" class="phone-reset-btn">${escapeHtml(copy.resetDemo)}</button>` : ''}
      </div>
      ${
        !searchQuery && !clipboardDismissed
          ? `
        <div class="sim-clipboard-banner">
          <div class="sim-clipboard-info">
            <div class="sim-clipboard-kicker">${escapeHtml(copy.clipboardKicker)}</div>
            <div class="sim-clipboard-value mono">${escapeHtml(clipboardLink.host)}</div>
          </div>
          <div class="sim-clipboard-actions">
            <button type="button" class="sim-mini-btn primary" id="simClipOpen">${escapeHtml(copy.clipboardOpen)}</button>
            <button type="button" class="sim-mini-btn" id="simClipSave">${escapeHtml(copy.clipboardSave)}</button>
            <button type="button" class="sim-mini-btn" id="simClipClose" aria-label="${escapeHtml(copy.closeBtn)}">✕</button>
          </div>
        </div>`
          : ''
      }
      ${
        todoTask
          ? `<button type="button" class="sim-inline-action" id="simAddTodoBtn"><span>${escapeHtml(copy.todoCmdLabel(todoTask))}</span><span>↵</span></button>`
          : mathRes
            ? `<button type="button" class="sim-inline-action" id="simCopyCalcBtn"><span>${escapeHtml(copy.calcCmdLabel(mathRes))}</span><span class="mono">=</span></button>`
            : ''
      }
      <div class="phone-wave-stage" id="simWaveStage">
        <div class="phone-wave-list">
          ${rows
            .map((item) => {
              const isFocused = item.id === focusedId && swipedAppId !== item.id;
              const isSwiped = swipedAppId === item.id;
              const quotaReached = item.quota > 0 && item.usedToday >= item.quota;
              return `
              <div class="wave-app-row ${isFocused ? 'focused' : ''} ${isSwiped ? 'swiped' : ''} ${quotaReached ? 'dimmed' : ''}" data-app-id="${item.id}">
                <div class="wave-app-actions">
                  <button type="button" class="wave-action-btn wave-action-pin" data-action="pin" data-app-id="${item.id}">
                    ${escapeHtml(item.pinned ? copy.unpin : copy.pin)}
                  </button>
                  <button type="button" class="wave-action-btn wave-action-pin" data-action="quota" data-app-id="${item.id}">
                    ${escapeHtml(item.quota > 0 ? `${item.quota}/d` : copy.quotaAction)}
                  </button>
                  <button type="button" class="wave-action-btn wave-action-del" data-action="del" data-app-id="${item.id}">
                    ${escapeHtml(copy.uninstall)}
                  </button>
                </div>
                <div class="wave-app-front" data-toggle-swipe="${item.id}">
                  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(item.name)}</span>
                  <span class="mono" style="font-size: 0.68rem; color: var(--sim-muted)">${item.quota > 0 ? `${item.usedToday}/${item.quota}` : item.pinned ? '★' : ''}</span>
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
        <div class="wave-rail" id="waveRail" role="slider" aria-label="Alphabet Wave" aria-valuetext="${activeLetter}" tabindex="0">
          ${letters.map((l) => `<button type="button" class="wave-letter-btn ${activeLetter === l ? 'active' : ''}" data-letter="${l}">${l}</button>`).join('')}
        </div>
      </div>
      <div class="phone-wave-dock" id="simWaveDock" role="button" tabindex="0" aria-label="${escapeHtml(copy.scrollUpExitLabel)}">
        <span class="phone-wave-dock-bar"></span>
        <span>↑ ${escapeHtml(copy.scrollUpExitLabel)}</span>
      </div>
      ${renderModalsHtml()}
      ${renderToastHtml()}
    `;

    const searchInput = screen.querySelector('#simWaveSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const pos = e.target.selectionStart || 0;
        searchQuery = e.target.value;
        swipedAppId = null;
        renderPhoneScreen();
        const freshInput = document.getElementById('simWaveSearch');
        if (freshInput) {
          freshInput.focus();
          freshInput.setSelectionRange(pos, pos);
        }
      });
    }

    const clipOpen = screen.querySelector('#simClipOpen');
    const clipSave = screen.querySelector('#simClipSave');
    const clipClose = screen.querySelector('#simClipClose');
    if (clipOpen) clipOpen.addEventListener('click', () => showToast(`Opening ${clipboardLink.host}...`));
    if (clipSave) {
      clipSave.addEventListener('click', () => {
        if (!apps.some((a) => a.id === 'custom-repo')) {
          apps.push({ id: 'custom-repo', name: clipboardLink.name, letter: 'G', pinned: true, shortcut: 'Open link', quota: 0, usedToday: 0 });
        }
        clipboardDismissed = true;
        showToast(`${clipboardLink.name} ✓`);
      });
    }
    if (clipClose) {
      clipClose.addEventListener('click', () => {
        clipboardDismissed = true;
        renderPhoneScreen();
      });
    }

    const addTodoBtn = screen.querySelector('#simAddTodoBtn');
    if (addTodoBtn && todoTask) {
      addTodoBtn.addEventListener('click', () => {
        notesText = appendTodo(notesText, todoTask);
        searchQuery = '';
        showToast(`- [ ] ${todoTask}`);
      });
    }

    const copyCalcBtn = screen.querySelector('#simCopyCalcBtn');
    if (copyCalcBtn && mathRes) {
      copyCalcBtn.addEventListener('click', () => {
        navigator.clipboard?.writeText(mathRes).catch(() => undefined);
        showToast(`${mathRes} ✓`);
      });
    }

    const resetBtn = screen.querySelector('#simResetDemo');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        apps = initialApps.map((a) => ({ ...a }));
        searchQuery = '';
        swipedAppId = null;
        clipboardDismissed = false;
        activeLetter = 'C';
        renderPhoneScreen();
      });
    }

    const rail = screen.querySelector('#waveRail');
    if (rail) {
      const selectLetterAtY = (clientY) => {
        const rect = rail.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(0.999, (clientY - rect.top) / rect.height));
        const nextLetter = letters[Math.floor(ratio * letters.length)];
        if (nextLetter && nextLetter !== activeLetter) {
          activeLetter = nextLetter;
          swipedAppId = null;
          renderPhoneScreen();
        }
      };
      rail.addEventListener('pointerdown', (e) => {
        try { rail.setPointerCapture(e.pointerId); } catch (_) {}
        selectLetterAtY(e.clientY);
      });
      rail.addEventListener('pointermove', (e) => {
        if (e.buttons !== 1 && e.pointerType === 'mouse') return;
        selectLetterAtY(e.clientY);
      });
    }

    screen.querySelectorAll('[data-letter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeLetter = btn.getAttribute('data-letter') || 'C';
        swipedAppId = null;
        renderPhoneScreen();
      });
    });

    screen.querySelectorAll('[data-toggle-swipe]').forEach((row) => {
      let startX = null;
      let startY = null;
      let didDrag = false;
      row.addEventListener('pointerdown', (e) => {
        startX = e.clientX;
        startY = e.clientY;
        didDrag = false;
      });
      row.addEventListener('pointermove', (e) => {
        if (startX === null || startY === null) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) > 18) {
          didDrag = true;
          const id = row.getAttribute('data-toggle-swipe');
          if (dx < -24 && swipedAppId !== id) {
            swipedAppId = id;
            startX = null;
            renderPhoneScreen();
          } else if (dx > 24 && swipedAppId === id) {
            swipedAppId = null;
            startX = null;
            renderPhoneScreen();
          }
        }
      });
      row.addEventListener('pointerup', () => { startX = null; startY = null; });
      row.addEventListener('click', () => {
        if (didDrag) { didDrag = false; return; }
        const id = row.getAttribute('data-toggle-swipe');
        swipedAppId = swipedAppId === id ? null : id;
        renderPhoneScreen();
      });
    });

    screen.querySelectorAll('[data-action]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-app-id');
        const action = btn.getAttribute('data-action');
        const idx = apps.findIndex((a) => a.id === id);
        if (idx === -1) return;
        if (action === 'pin') {
          apps[idx].pinned = !apps[idx].pinned;
          showToast(apps[idx].pinned ? `${apps[idx].name} ★` : apps[idx].name);
        } else if (action === 'quota') {
          apps[idx].quota = apps[idx].quota > 0 ? 0 : 3;
          apps[idx].usedToday = apps[idx].quota > 0 ? 3 : 0;
          showToast(apps[idx].quota > 0 ? `${apps[idx].name} · 3/d` : `${apps[idx].name} · Off`);
        } else if (action === 'del' && apps.length > 3) {
          const removed = apps.splice(idx, 1)[0];
          showToast(`${removed.name} ×`);
        }
        swipedAppId = null;
        renderPhoneScreen();
      });
    });

    const dock = screen.querySelector('#simWaveDock');
    if (dock) {
      dock.addEventListener('click', () => setTab('home'));
    }
    wireModals(screen);
  }

  document.querySelectorAll('.seg-tab').forEach((tab) => {
    tab.addEventListener('click', () => setTab(tab.getAttribute('data-tab')));
  });

  document.querySelectorAll('.mode-tab').forEach((btn) => {
    btn.addEventListener('click', () => setSimMode(btn.getAttribute('data-mode')));
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-lang');
      if (next && dict[next]) {
        const prevDefault = dict[currentLang].defaultNotes;
        currentLang = next;
        if (notesText === prevDefault) notesText = dict[next].defaultNotes;
        applyTranslations();
      }
    });
  });

  const shotCards = Array.from(document.querySelectorAll('[data-shot-src]'));
  let activeShotIndex = -1;
  const lightbox = document.getElementById('shotLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    activeShotIndex = -1;
  }

  function showLightboxAt(index) {
    if (!lightbox || !lightboxImg || !lightboxTitle || !lightboxDesc || shotCards.length === 0) return;
    const normalized = (index + shotCards.length) % shotCards.length;
    activeShotIndex = normalized;
    const card = shotCards[normalized];
    const copy = dict[currentLang];
    const src = card.getAttribute('data-shot-src') || '';
    const titleKey = card.getAttribute('data-shot-title') || '';
    const descKey = card.getAttribute('data-shot-desc') || '';
    lightboxImg.src = src;
    lightboxImg.alt = copy[titleKey] || '';
    lightboxTitle.textContent = copy[titleKey] || '';
    lightboxDesc.textContent = copy[descKey] || '';
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
  }

  shotCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      showLightboxAt(idx);
      if (lightboxClose) lightboxClose.focus();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showLightboxAt(idx);
        if (lightboxClose) lightboxClose.focus();
      }
    });
  });

  if (lightboxPrev) lightboxPrev.addEventListener('click', () => { if (activeShotIndex !== -1) showLightboxAt(activeShotIndex - 1); });
  if (lightboxNext) lightboxNext.addEventListener('click', () => { if (activeShotIndex !== -1) showLightboxAt(activeShotIndex + 1); });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') { e.preventDefault(); showLightboxAt(activeShotIndex - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); showLightboxAt(activeShotIndex + 1); }
  });

  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  updateClock();
  setInterval(updateClock, 15000);
  applyTranslations();
})();
