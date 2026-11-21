(() => {
  const dict = {
    pt: {
      nav_features: 'Recursos',
      nav_experience: 'Experiência',
      nav_shots: 'Capturas',
      nav_specs: 'Especificações',
      
      
      meta_free: 'Sem anúncios',
      hero_title: 'Sua tela inicial sem ruído visual, feita para uma mão só.',
      hero_subtitle:
        'NotLauncher substitui grades lotadas de ícones por uma lista limpa em OLED preto puro, onda alfabética centralizada, gestos rápidos e páginas exclusivas para widgets oficiais do Android.',
      hero_cta_download: 'Baixar APK',
      hero_cta_primary: 'Testar Wave Interativa',
      
      hero_note: 'Armazenamento local exclusivo · Nenhum dado enviado a servidores.',
      fact_1: 'Telemetria ou rastreamento',
      fact_2: 'Acesso de A a Z com o polegar',
      fact_3: 'Preto real para menor consumo',
      fact_4: 'Compatível até Android 16 (API 36)',
      features_title: 'Construído ao redor de foco, velocidade e ergonomia',
      features_desc: 'Cada gesto e cada página seguem o padrão nativo do Android sem menus supérfluos.',
      f1_title: '01. Onda alfabética centralizada',
      f1_desc:
        'Deslize o polegar na lateral para percorrer todos os aplicativos instantaneamente. A lista centraliza automaticamente o item focado com escala ampliada em 60 fps e opção de abertura automática ao soltar o dedo.',
      f1_meta: 'Lista virtualizada · Escolha entre barra à direita ou à esquerda',
      f2_title: '02. Ações por deslize',
      f2_desc:
        'Deslize qualquer aplicativo para a esquerda para revelar a caixa Material com os botões Fixar na Home e Desinstalar usando o fluxo oficial do Android.',
      f2_meta: 'Visual limpo · Sem ícones repetidos na lista',
      f3_title: '03. Widgets em tela limpa',
      f3_desc:
        'Deslize para a esquerda a partir da tela inicial para acessar seus widgets oficiais do Android sem barras superiores ou rodapés distraindo o espaço.',
      f3_meta: 'Toque longo em qualquer área · Seletor oficial AppWidgetHost',
      f4_title: '04. Privacidade verificável desde o manifesto',
      f4_desc:
        'Sem anúncios, sem contas obrigatórias e sem coleta de lista de aplicativos para servidores externos. Todas as preferências, notas rápidas e atalhos ficam apenas no seu aparelho.',
      f4_meta: 'Consultas declarativas <queries> · Sem permissão QUERY_ALL_PACKAGES',
      demo_title: 'Experimente os fluxos principais',
      demo_desc:
        'Alterne entre as visualizações ao lado e interaja diretamente com a Wave A–Z ou deslize um aplicativo para revelar os botões de ação.',
      tab_wave: 'Wave A–Z',
      tab_home: 'Tela Inicial',
      tab_widgets: 'Widgets',
      hint_1_title: 'Clique ou arraste na régua A–Z',
      hint_1_desc: 'O app correspondente recebe destaque centralizado imediato.',
      hint_2_title: 'Toque em qualquer linha na Wave',
      hint_2_desc: 'Simule o swipe para a esquerda e teste os botões Fixar e Desinstalar.',
      hint_3_title: 'Visualização de Widgets sem distrações',
      hint_3_desc: 'Apenas os seus widgets na tela, sem barras de título ou textos extras.',
      spec_subtitle: 'Construído com Jetpack Compose e Material 3.',
      spec_pkg: 'Identificador do pacote',
      spec_min: 'Compatibilidade mínima',
      spec_target: 'SDK de destino',
      spec_ads: 'Anúncios e rastreadores',
      spec_none: 'Nenhum',
      
      
      
      shots_title: 'Telas atualizadas do NotLauncher',
      shots_desc:
        'Captura visual dos quatro pilares atuais: tela inicial silenciosa, Wave centralizada, swipe lateral para fixar ou desinstalar e página limpa de widgets.',
      shot1_title: '01. Tela Inicial OLED',
      shot1_desc: 'Apenas relógio e seus favoritos essenciais em alto contraste.',
      shot2_title: '02. Wave Centralizada',
      shot2_desc: 'O item focado permanece no centro da tela com destaque suave ao deslizar.',
      shot3_title: '03. Swipe Left para Ações',
      shot3_desc: 'Deslize para revelar Fixar e Desinstalar no padrão oficial do Android.',
      shot4_title: '04. Widgets em Tela Limpa',
      shot4_desc: 'Zero cabeçalhos ou rodapés; segure em qualquer ponto para gerenciar.',
      pin: 'Fixar',
      unpin: 'Remover',
      uninstall: 'Desinstalar',
      pinnedTag: 'Fixado',
      focusTitle: 'Temporizador de Foco',
      notesTitle: 'Notas Rápidas',
      notesBody: 'Revisar lista da semana · 100% local.',
      batteryTitle: 'Bateria',
    },
    en: {
      nav_features: 'Features',
      nav_experience: 'Experience',
      nav_shots: 'Screenshots',
      nav_specs: 'Specifications',
      
      
      meta_free: 'Ad-free',
      hero_title: 'A quiet home screen crafted for one-handed reach.',
      hero_subtitle:
        'NotLauncher replaces cluttered icon grids with a pure OLED black list, centered alphabetical Wave scrubbing, swipe-left app actions, and clean Android widget pages.',
      hero_cta_download: 'Download APK',
      hero_cta_primary: 'Try Interactive Wave',
      
      hero_note: 'Local-only storage · Zero data sent to external servers.',
      fact_1: 'Telemetry or ad trackers',
      fact_2: 'Thumb access from A to Z',
      fact_3: 'True black OLED surface',
      fact_4: 'Supports Android 7 to API 36',
      features_title: 'Built around focus, speed, and ergonomics',
      features_desc: 'Every gesture and screen follows native Android behavior with zero chrome.',
      f1_title: '01. Centered alphabetical Wave',
      f1_desc:
        'Glide your thumb along the edge to scan every installed app instantly. The list centers the active entry with smooth 60 fps focus scaling and optional launch on release.',
      f1_meta: 'Virtualized list · Right or left edge placement',
      f2_title: '02. Swipe-left app actions',
      f2_desc:
        'Swipe any row left to open a Material action box with Pin to Home and Uninstall powered by the official Android removal flow.',
      f2_meta: 'Clean rows · No inline trash icons cluttering text',
      f3_title: '03. Distraction-free widget pages',
      f3_desc:
        'Swipe left from Home to open your official Android widgets with zero top toolbars or footer hints. Long press anywhere to add or remove widgets.',
      f3_meta: 'Long-press anywhere · Official AppWidgetHost integration',
      f4_title: '04. Privacy enforced by architecture',
      f4_desc:
        'No ads, no sign-in walls, and no server uploads. Preferences, favorites, quick notes, and widget layouts remain strictly on your device.',
      f4_meta: 'Scoped <queries> manifest · No QUERY_ALL_PACKAGES permission',
      demo_title: 'Explore the core interactions',
      demo_desc:
        'Switch between screens and scrub the A–Z rail or tap an app row to preview the swipe-left Pin and Uninstall controls.',
      tab_wave: 'A–Z Wave',
      tab_home: 'Home Screen',
      tab_widgets: 'Widgets',
      hint_1_title: 'Click or drag along the A–Z rail',
      hint_1_desc: 'The matching app immediately centers with subtle focus scale.',
      hint_2_title: 'Tap any row in the Wave view',
      hint_2_desc: 'Preview the swipe-left Material box with Pin and Uninstall buttons.',
      hint_3_title: 'Clean widgets canvas',
      hint_3_desc: 'Only your widgets on screen, without headers or extra chrome.',
      spec_subtitle: 'Built with Jetpack Compose and Material 3.',
      spec_pkg: 'Package identifier',
      spec_min: 'Minimum Android version',
      spec_target: 'Target SDK',
      spec_ads: 'Ads & trackers',
      spec_none: 'None',
      
      
      
      shots_title: 'Updated NotLauncher Screens',
      shots_desc:
        'A visual tour of the current release: quiet OLED Home, centered A–Z Wave, swipe-left Pin & Uninstall tray, and clean widget pages.',
      shot1_title: '01. OLED Home Screen',
      shot1_desc: 'Just your clock and essential pinned apps in pure contrast.',
      shot2_title: '02. Centered A–Z Wave',
      shot2_desc: 'Focused entries stay centered on screen with smooth scale emphasis.',
      shot3_title: '03. Swipe-Left Actions',
      shot3_desc: 'Swipe left to reveal Pin and Android-native Uninstall buttons.',
      shot4_title: '04. Clean Widget Pages',
      shot4_desc: 'Zero headers or footers; long-press anywhere to manage widgets.',
      pin: 'Pin',
      unpin: 'Unpin',
      uninstall: 'Uninstall',
      pinnedTag: 'Pinned',
      focusTitle: 'Focus Timer',
      notesTitle: 'Quick Notes',
      notesBody: 'Review weekly priorities · stored locally.',
      batteryTitle: 'Battery',
    },
  };

  let currentLang = 'pt';
  let currentTab = 'wave';
  let activeLetter = 'C';
  let swipedAppId = null;

  const apps = [
    { id: 'agenda', name: 'Agenda', letter: 'A', pinned: true },
    { id: 'bank', name: 'Banco', letter: 'B', pinned: false },
    { id: 'camera', name: 'Câmera', letter: 'C', pinned: true },
    { id: 'clock', name: 'Relógio', letter: 'R', pinned: false },
    { id: 'files', name: 'Arquivos', letter: 'A', pinned: false },
    { id: 'maps', name: 'Mapas', letter: 'M', pinned: true },
    { id: 'messages', name: 'Mensagens', letter: 'M', pinned: true },
    { id: 'music', name: 'Música', letter: 'M', pinned: false },
    { id: 'notes', name: 'Notas', letter: 'N', pinned: true },
    { id: 'photos', name: 'Fotos', letter: 'F', pinned: false },
    { id: 'settings', name: 'Configurações', letter: 'C', pinned: false },
  ];

  const letters = ['A', 'B', 'C', 'F', 'M', 'N', 'R'];

  function updateClock() {
    const el = document.getElementById('simClock');
    if (!el) return;
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    el.textContent = `${hh}:${mm}`;
  }

  function applyTranslations() {
    const copy = dict[currentLang];
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (key && copy[key]) {
        node.textContent = copy[key];
      }
    });
    renderPhoneScreen();
  }

  function getVisibleSlice() {
    const sorted = [...apps].sort((a, b) => a.name.localeCompare(b.name, 'pt'));
    let focusIndex = sorted.findIndex((item) => item.letter === activeLetter);
    if (focusIndex === -1) focusIndex = 2;
    const start = Math.max(0, Math.min(focusIndex - 3, sorted.length - 7));
    return {
      rows: sorted.slice(start, start + 7),
      focusedId: sorted[focusIndex].id,
    };
  }

  function renderPhoneScreen() {
    const screen = document.getElementById('phoneScreen');
    if (!screen) return;
    const copy = dict[currentLang];

    if (currentTab === 'home') {
      const pinned = apps.filter((a) => a.pinned);
      const now = new Date();
      const dateStr = now.toLocaleDateString(currentLang === 'pt' ? 'pt-BR' : 'en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
      screen.innerHTML = `
        <div class="phone-home-clock mono">${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes(),
      ).padStart(2, '0')}</div>
        <div class="phone-home-date">${dateStr}</div>
        <div class="phone-fav-list">
          ${pinned
            .map(
              (item) => `
            <div class="phone-fav-item">
              <span>${item.name}</span>
              <span style="font-size: 0.72rem; color: var(--text-muted)">${copy.pinnedTag}</span>
            </div>
          `,
            )
            .join('')}
        </div>
      `;
      return;
    }

    if (currentTab === 'widgets') {
      screen.innerHTML = `
        <div class="phone-widgets-clean">
          <div class="widget-clean-card">
            <div class="widget-clean-title">${copy.focusTitle}</div>
            <div class="widget-clean-value mono">25:00</div>
          </div>
          <div class="widget-clean-card">
            <div class="widget-clean-title">${copy.notesTitle}</div>
            <p style="margin: 8px 0 0; font-size: 0.875rem; color: #e4e6ee">${copy.notesBody}</p>
          </div>
          <div class="widget-clean-card" style="display:flex; justify-content:space-between; align-items:center;">
            <span class="widget-clean-title">${copy.batteryTitle}</span>
            <span class="mono" style="font-size: 1.125rem; color: #ffffff">92%</span>
          </div>
        </div>
      `;
      return;
    }

    const { rows, focusedId } = getVisibleSlice();
    screen.innerHTML = `
      <div class="phone-wave-stage">
        <div class="phone-wave-list">
          ${rows
            .map((item) => {
              const isFocused = item.id === focusedId && swipedAppId !== item.id;
              const isSwiped = swipedAppId === item.id;
              return `
              <div class="wave-app-row ${isFocused ? 'focused' : ''} ${isSwiped ? 'swiped' : ''}" data-app-id="${item.id}">
                <div class="wave-app-actions">
                  <button type="button" class="wave-action-btn wave-action-pin" data-action="pin" data-app-id="${item.id}">
                    ${item.pinned ? copy.unpin : copy.pin}
                  </button>
                  <button type="button" class="wave-action-btn wave-action-del" data-action="del" data-app-id="${item.id}">
                    ${copy.uninstall}
                  </button>
                </div>
                <div class="wave-app-front" data-toggle-swipe="${item.id}">
                  <span>${item.name}</span>
                  <span style="font-size: 0.7rem; color: var(--text-muted)">${item.pinned ? '★' : ''}</span>
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
        <div class="wave-rail" id="waveRail">
          ${letters
            .map(
              (l) => `
            <button type="button" class="wave-letter-btn ${activeLetter === l ? 'active' : ''}" data-letter="${l}">${l}</button>
          `,
            )
            .join('')}
        </div>
      </div>
    `;

    screen.querySelectorAll('[data-letter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeLetter = btn.getAttribute('data-letter') || 'C';
        swipedAppId = null;
        renderPhoneScreen();
      });
    });

    const rail = screen.querySelector('#waveRail');
    if (rail) {
      rail.addEventListener('pointermove', (e) => {
        if (e.buttons !== 1 && e.pointerType === 'mouse') return;
        const rect = rail.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(0.999, (e.clientY - rect.top) / rect.height));
        const idx = Math.floor(ratio * letters.length);
        const nextLetter = letters[idx];
        if (nextLetter && nextLetter !== activeLetter) {
          activeLetter = nextLetter;
          swipedAppId = null;
          renderPhoneScreen();
        }
      });
    }

    screen.querySelectorAll('[data-toggle-swipe]').forEach((row) => {
      row.addEventListener('click', () => {
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
        } else if (action === 'del' && apps.length > 5) {
          apps.splice(idx, 1);
        }
        swipedAppId = null;
        renderPhoneScreen();
      });
    });
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (!lang || lang === currentLang) return;
      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
      });
      applyTranslations();
    });
  });

  document.querySelectorAll('.seg-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const next = tab.getAttribute('data-tab');
      if (!next) return;
      currentTab = next;
      swipedAppId = null;
      document.querySelectorAll('.seg-tab').forEach((t) => {
        t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
      });
      renderPhoneScreen();
    });
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
  renderPhoneScreen();
})();
