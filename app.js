(() => {
  const dict = {
    en: {
      nav_features: 'Features',
      nav_experience: 'Experience',
      nav_shots: 'Screenshots',
      nav_specs: 'Specs',
      meta_free: 'Ad-free',
      hero_title: 'A quiet home screen crafted for one-handed reach.',
      hero_subtitle:
        'NotLauncher replaces cluttered icon grids with a pure OLED black list, centered alphabetical Wave scrubbing, swipe-left app actions, and clean Android widget pages.',
      hero_cta_primary: 'Try Interactive Wave',
      hero_cta_download: 'Download APK',
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
        'Switch between screens, scrub the A–Z rail, swipe left for actions, or scroll/swipe up to exit back to Home.',
      tab_wave: 'A–Z Wave',
      tab_home: 'Home Screen',
      tab_widgets: 'Widgets',
      hint_1_title: 'Drag the A–Z rail or scroll up to exit',
      hint_1_desc:
        'Focused apps center with subtle scale; scroll or swipe up to return Home cleanly.',
      hint_2_title: 'Swipe left or tap any row',
      hint_2_desc: 'Reveal Pin and Uninstall buttons powered by Android’s native removal flow.',
      hint_3_title: 'Interactive clean widgets canvas',
      hint_3_desc: 'Test the live Focus Timer and Quick Notes with zero toolbars or extra chrome.',
      spec_subtitle: 'Built with Jetpack Compose and Material 3.',
      spec_pkg: 'Package identifier',
      spec_min: 'Minimum Android version',
      spec_target: 'Target SDK',
      spec_ads: 'Ads & trackers',
      spec_none: 'None',
      shots_title: 'NotLauncher Screens',
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
      searchPlaceholder: 'Filter apps...',
      resetDemo: 'Reset',
      pin: 'Pin',
      unpin: 'Unpin',
      uninstall: 'Uninstall',
      pinnedTag: 'Pinned',
      openWaveLabel: 'All apps (A–Z Wave)',
      scrollUpExitLabel: 'Scroll or swipe up to exit Wave',
      focusTitle: 'Focus Timer',
      startTimer: 'Start',
      pauseTimer: 'Pause',
      resetTimer: 'Reset',
      notesTitle: 'Quick Notes',
      notesBody: 'Review weekly priorities · stored locally.',
      batteryTitle: 'Battery',
    },
  };

  let currentLang = 'en';
  let currentTab = 'wave';
  let activeLetter = 'C';
  let swipedAppId = null;
  let searchQuery = '';

  let timerSeconds = 25 * 60;
  let timerRunning = false;
  let timerInterval = null;
  let notesText = dict.en.notesBody;
  let toastMessage = '';
  let toastTimer = null;

  const initialApps = [
    { id: 'agenda', name: 'Agenda', letter: 'A', pinned: true },
    { id: 'bank', name: 'Bank', letter: 'B', pinned: false },
    { id: 'camera', name: 'Camera', letter: 'C', pinned: true },
    { id: 'clock', name: 'Clock', letter: 'C', pinned: false },
    { id: 'files', name: 'Files', letter: 'F', pinned: false },
    { id: 'maps', name: 'Maps', letter: 'M', pinned: true },
    { id: 'messages', name: 'Messages', letter: 'M', pinned: true },
    { id: 'music', name: 'Music', letter: 'M', pinned: false },
    { id: 'notes', name: 'Notes', letter: 'N', pinned: true },
    { id: 'photos', name: 'Photos', letter: 'P', pinned: false },
    { id: 'settings', name: 'Settings', letter: 'S', pinned: false },
  ];
  let apps = initialApps.map((a) => ({ ...a }));

  const letters = ['A', 'B', 'C', 'F', 'M', 'N', 'P', 'S'];

  function escapeHtml(str) {
    return str
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

  function showToast(msg) {
    toastMessage = msg;
    if (toastTimer) clearTimeout(toastTimer);
    renderPhoneScreen();
    toastTimer = setTimeout(() => {
      toastMessage = '';
      toastTimer = null;
      renderPhoneScreen();
    }, 1700);
  }

  function setTab(nextTab) {
    if (!nextTab) return;
    currentTab = nextTab;
    swipedAppId = null;
    document.querySelectorAll('.seg-tab').forEach((t) => {
      t.classList.toggle('active', t.getAttribute('data-tab') === currentTab);
    });
    renderPhoneScreen();
  }

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
    document.documentElement.lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (key && copy[key]) {
        node.textContent = copy[key];
      }
    });
    renderPhoneScreen();
  }

  function getVisibleSlice() {
    const q = searchQuery.trim().toLowerCase();
    const sorted = [...apps]
      .filter((item) => !q || item.name.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name, 'en'));
    if (sorted.length === 0) {
      return { rows: [], focusedId: null };
    }
    let focusIndex = sorted.findIndex((item) => item.letter === activeLetter);
    if (focusIndex === -1) focusIndex = Math.min(2, sorted.length - 1);
    const start = Math.max(0, Math.min(focusIndex - 3, Math.max(0, sorted.length - 7)));
    return {
      rows: sorted.slice(start, start + 7),
      focusedId: sorted[focusIndex].id,
    };
  }

  function renderToastHtml() {
    return toastMessage ? `<div class="phone-toast" role="status">${escapeHtml(toastMessage)}</div>` : '';
  }

  function renderPhoneScreen() {
    const screen = document.getElementById('phoneScreen');
    if (!screen) return;
    const copy = dict[currentLang];

    if (currentTab === 'home') {
      const pinned = apps.filter((a) => a.pinned);
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', {
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
            <button type="button" class="phone-fav-item" data-launch-name="${escapeHtml(item.name)}">
              <span>${escapeHtml(item.name)}</span>
              <span style="font-size: 0.72rem; color: var(--text-muted)">${copy.pinnedTag}</span>
            </button>
          `,
            )
            .join('')}
          <button type="button" class="phone-home-drawer-trigger" id="simOpenWaveBtn">
            <span>${copy.openWaveLabel}</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
        ${renderToastHtml()}
      `;

      screen.querySelectorAll('[data-launch-name]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const name = btn.getAttribute('data-launch-name');
          if (name) showToast(`Opening ${name}...`);
        });
      });

      const openWaveBtn = screen.querySelector('#simOpenWaveBtn');
      if (openWaveBtn) {
        openWaveBtn.addEventListener('click', () => setTab('wave'));
      }
      return;
    }

    if (currentTab === 'widgets') {
      screen.innerHTML = `
        <div class="phone-widgets-clean">
          <div class="widget-clean-card">
            <div class="widget-clean-title">${copy.focusTitle}</div>
            <div class="widget-timer-row">
              <div class="widget-clean-value mono" id="simTimerValue">${formatTimer(timerSeconds)}</div>
              <div class="widget-timer-controls">
                <button type="button" class="widget-btn primary" id="simTimerToggle">${timerRunning ? copy.pauseTimer : copy.startTimer}</button>
                <button type="button" class="widget-btn" id="simTimerReset">${copy.resetTimer}</button>
              </div>
            </div>
          </div>
          <div class="widget-clean-card">
            <label for="simNotesInput" class="widget-clean-title" style="display:block">${copy.notesTitle}</label>
            <textarea id="simNotesInput" class="widget-notes-input" aria-label="${copy.notesTitle}">${escapeHtml(notesText)}</textarea>
          </div>
          <div class="widget-clean-card" style="display:flex; justify-content:space-between; align-items:center;">
            <span class="widget-clean-title">${copy.batteryTitle}</span>
            <span class="mono" style="font-size: 1.125rem; color: #ffffff">92%</span>
          </div>
        </div>
        ${renderToastHtml()}
      `;

      const timerToggle = screen.querySelector('#simTimerToggle');
      const timerReset = screen.querySelector('#simTimerReset');
      const notesInput = screen.querySelector('#simNotesInput');

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
                  showToast('Focus session complete');
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

      if (notesInput) {
        notesInput.addEventListener('input', (e) => {
          notesText = e.target.value;
        });
      }
      return;
    }

    const { rows, focusedId } = getVisibleSlice();
    const showReset = apps.length < initialApps.length || searchQuery.length > 0;
    screen.innerHTML = `
      <div class="phone-wave-toolbar">
        <input
          type="text"
          id="simWaveSearch"
          class="phone-wave-search"
          value="${escapeHtml(searchQuery)}"
          placeholder="${copy.searchPlaceholder}"
          aria-label="${copy.searchPlaceholder}"
        />
        ${
          showReset
            ? `<button type="button" id="simResetDemo" class="phone-reset-btn">${copy.resetDemo}</button>`
            : ''
        }
      </div>
      <div class="phone-wave-stage" id="simWaveStage">
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
                  <span>${escapeHtml(item.name)}</span>
                  <span style="font-size: 0.7rem; color: var(--text-muted)">${item.pinned ? '★' : ''}</span>
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
        <div class="wave-rail" id="waveRail" role="slider" aria-label="Alphabet Wave" aria-valuetext="${activeLetter}" tabindex="0">
          ${letters
            .map(
              (l) => `
            <button type="button" class="wave-letter-btn ${activeLetter === l ? 'active' : ''}" data-letter="${l}">${l}</button>
          `,
            )
            .join('')}
        </div>
      </div>
      <div class="phone-wave-dock" id="simWaveDock" role="button" tabindex="0" aria-label="${copy.scrollUpExitLabel}">
        <span class="phone-wave-dock-bar"></span>
        <span>↑ ${copy.scrollUpExitLabel}</span>
      </div>
      ${renderToastHtml()}
    `;

    const searchInput = screen.querySelector('#simWaveSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const target = e.target;
        const pos = target.selectionStart || 0;
        searchQuery = target.value;
        swipedAppId = null;
        renderPhoneScreen();
        const freshInput = document.getElementById('simWaveSearch');
        if (freshInput) {
          freshInput.focus();
          freshInput.setSelectionRange(pos, pos);
        }
      });
    }

    const resetBtn = screen.querySelector('#simResetDemo');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        apps = initialApps.map((a) => ({ ...a }));
        searchQuery = '';
        swipedAppId = null;
        activeLetter = 'C';
        renderPhoneScreen();
      });
    }

    const rail = screen.querySelector('#waveRail');
    if (rail) {
      const selectLetterAtY = (clientY) => {
        const rect = rail.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(0.999, (clientY - rect.top) / rect.height));
        const idx = Math.floor(ratio * letters.length);
        const nextLetter = letters[idx];
        if (nextLetter && nextLetter !== activeLetter) {
          activeLetter = nextLetter;
          swipedAppId = null;
          renderPhoneScreen();
        }
      };

      rail.addEventListener('pointerdown', (e) => {
        try {
          rail.setPointerCapture(e.pointerId);
        } catch (_) {
          // Ignore if synthetic event lacks active pointer
        }
        selectLetterAtY(e.clientY);
      });

      rail.addEventListener('pointermove', (e) => {
        if (e.buttons !== 1 && e.pointerType === 'mouse') return;
        selectLetterAtY(e.clientY);
      });

      rail.addEventListener('keydown', (e) => {
        const curIdx = letters.indexOf(activeLetter);
        if (e.key === 'ArrowDown' && curIdx < letters.length - 1) {
          e.preventDefault();
          activeLetter = letters[curIdx + 1];
          renderPhoneScreen();
        } else if (e.key === 'ArrowUp' && curIdx > 0) {
          e.preventDefault();
          activeLetter = letters[curIdx - 1];
          renderPhoneScreen();
        }
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
        if (Math.abs(dy) > 28 && Math.abs(dy) > Math.abs(dx) * 1.3 && dy < 0) {
          startX = null;
          startY = null;
          didDrag = true;
          setTab('home');
          return;
        }
        if (Math.abs(dx) > 18) {
          didDrag = true;
          const id = row.getAttribute('data-toggle-swipe');
          if (dx < -24 && swipedAppId !== id) {
            swipedAppId = id;
            startX = null;
            startY = null;
            renderPhoneScreen();
          } else if (dx > 24 && swipedAppId === id) {
            swipedAppId = null;
            startX = null;
            startY = null;
            renderPhoneScreen();
          }
        }
      });
      row.addEventListener('pointerup', () => {
        startX = null;
        startY = null;
      });
      row.addEventListener('click', () => {
        if (didDrag) {
          didDrag = false;
          return;
        }
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
          showToast(apps[idx].pinned ? `${apps[idx].name} pinned` : `${apps[idx].name} unpinned`);
        } else if (action === 'del' && apps.length > 3) {
          const removed = apps.splice(idx, 1)[0];
          showToast(`Uninstalled ${removed.name}`);
        }
        swipedAppId = null;
        renderPhoneScreen();
      });
    });

    const dock = screen.querySelector('#simWaveDock');
    if (dock) {
      let dockStartY = null;
      dock.addEventListener('pointerdown', (e) => {
        dockStartY = e.clientY;
      });
      dock.addEventListener('pointermove', (e) => {
        if (dockStartY !== null && e.clientY - dockStartY < -20) {
          dockStartY = null;
          setTab('home');
        }
      });
      dock.addEventListener('click', () => setTab('home'));
      dock.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setTab('home');
        }
      });
    }

    const waveStage = screen.querySelector('#simWaveStage');
    if (waveStage) {
      let wheelAccum = 0;
      let wheelResetTimer = null;
      waveStage.addEventListener(
        'wheel',
        (e) => {
          if (Math.abs(e.deltaY) < 6) return;
          if (e.deltaY > 0) {
            e.preventDefault();
            wheelAccum += e.deltaY;
            if (wheelResetTimer) clearTimeout(wheelResetTimer);
            wheelResetTimer = setTimeout(() => {
              wheelAccum = 0;
            }, 180);
            if (wheelAccum >= 65) {
              wheelAccum = 0;
              setTab('home');
            }
          }
        },
        { passive: false },
      );

      waveStage.addEventListener('click', (e) => {
        if (swipedAppId && !e.target.closest('.wave-app-row')) {
          swipedAppId = null;
          renderPhoneScreen();
        }
      });
    }
  }

  document.querySelectorAll('.seg-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const next = tab.getAttribute('data-tab');
      setTab(next);
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

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      if (activeShotIndex !== -1) showLightboxAt(activeShotIndex - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      if (activeShotIndex !== -1) showLightboxAt(activeShotIndex + 1);
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showLightboxAt(activeShotIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      showLightboxAt(activeShotIndex + 1);
    }
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
