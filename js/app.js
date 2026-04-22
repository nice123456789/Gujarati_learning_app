// ─────────────────────────────────────────────────────────
//  app.js — Entry point. Builds nav and initialises all
//  modules. Everything else lives in config.js.
// ─────────────────────────────────────────────────────────

(function () {

  // ── Build navigation from config ─────────────────────────

  function buildNav() {
    const nav = document.getElementById('main-nav');
    CONFIG.tabs.forEach((tab, i) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn' + (i === 0 ? ' active' : '');
      btn.textContent = tab.label;
      btn.dataset.section = tab.id;
      btn.onclick = () => showSection(tab.id, btn);
      nav.appendChild(btn);
    });
  }

  // ── Show a section ───────────────────────────────────────

  function showSection(id, clickedBtn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const sec = document.getElementById(`sec-${id}`);
    if (sec) sec.classList.add('active');
    if (clickedBtn) clickedBtn.classList.add('active');

    // Lazy-init quiz only when tab is opened
    if (id === 'quiz') Quiz.init();

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Init all modules ─────────────────────────────────────

  function init() {
    buildNav();
    Alphabets.init();
    Conversations.init();
    // Quiz is lazy — initialised on first click
  }

  // ── Kick off after DOM ready ─────────────────────────────

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
