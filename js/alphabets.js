// ─────────────────────────────────────────────────────────
//  alphabets.js — Renders vowels, consonants, matras,
//  numbers sections from CONFIG data
// ─────────────────────────────────────────────────────────

const Alphabets = (() => {

  // ── Helpers ─────────────────────────────────────────────

  function sectionHeader(sec) {
    return `
      <div class="section-heading">${sec.tag}</div>
      <div class="section-title">${sec.title}</div>
      <div class="section-desc">${sec.desc}</div>
      ${sec.tip ? `<div class="tip-box">${sec.tip}</div>` : ''}`;
  }

  function wordExample(g) {
    return CONFIG.wordExamples[g] || '—';
  }

  // ── Alpha card ───────────────────────────────────────────

  function makeAlphaCard(item, onClickFn) {
    const card = document.createElement('div');
    card.className = 'alpha-card';

    const speakBtn = Speak.makeBtn('speak-btn', item.g, item.speak || item.r);

    card.innerHTML = `
      <span class="alpha-guj">${item.g}</span>
      <span class="alpha-roman">${item.r}</span>
      <span class="alpha-eng">${item.ex || item.name || ''}</span>`;
    card.appendChild(speakBtn);

    card.addEventListener('click', (e) => {
      if (e.target.closest('.speak-btn')) return;
      onClickFn(card, item);
    });

    return card;
  }

  // ── Detail panel ─────────────────────────────────────────

  function showDetailPanel(panel, item, type) {
    const speakText = item.speak || item.r;
    panel.innerHTML = `
      <div class="detail-big">${item.g}</div>
      <div class="detail-info">
        <div class="detail-type-badge">${type === 'vowel' ? 'VOWEL — સ્વર' : 'CONSONANT — વ્યંજન'}</div>
        <div class="detail-roman">${item.r}</div>
        <div class="detail-name">${item.name || item.r}</div>
        <div class="detail-example">${item.ex}<br><br>Example: ${wordExample(item.g)}</div>
      </div>`;

    // Big speak button inside panel
    const bigBtn = document.createElement('button');
    bigBtn.className = 'detail-speak-btn';
    bigBtn.innerHTML = Speak.speakerIcon('currentColor') + '<span>Hear pronunciation</span>';
    bigBtn.onclick = () => Speak.say(item.g, speakText, bigBtn);
    panel.querySelector('.detail-info').appendChild(bigBtn);

    panel.classList.add('show');
  }

  // ── Vowels ───────────────────────────────────────────────

  function buildVowels() {
    const wrap = document.getElementById('sec-vowels');
    const sec  = CONFIG.sections.vowels;
    wrap.innerHTML = sectionHeader(sec);

    const detailPanel = document.createElement('div');
    detailPanel.className = 'detail-panel';
    detailPanel.id = 'vowel-detail';
    wrap.appendChild(detailPanel);

    const grid = document.createElement('div');
    grid.className = 'alpha-grid';

    let selectedCard = null;

    CONFIG.vowels.forEach(v => {
      const card = makeAlphaCard(v, (el, item) => {
        if (selectedCard) selectedCard.classList.remove('selected');
        selectedCard = el;
        el.classList.add('selected');
        showDetailPanel(detailPanel, item, 'vowel');
      });
      grid.appendChild(card);
    });

    wrap.appendChild(grid);
  }

  // ── Consonants ───────────────────────────────────────────

  function buildConsonants() {
    const wrap = document.getElementById('sec-consonants');
    const sec  = CONFIG.sections.consonants;
    wrap.innerHTML = sectionHeader(sec);

    const detailPanel = document.createElement('div');
    detailPanel.className = 'detail-panel';
    detailPanel.id = 'cons-detail';
    wrap.appendChild(detailPanel);

    let selectedCard = null;

    CONFIG.consonantGroups.forEach(group => {
      const groupLabel = document.createElement('div');
      groupLabel.style.cssText = 'font-family:Space Mono,monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--saffron);margin:1.2rem 0 8px;';
      groupLabel.textContent = group.name;
      wrap.appendChild(groupLabel);

      const grid = document.createElement('div');
      grid.className = 'alpha-grid';

      group.letters.forEach(l => {
        const card = makeAlphaCard(l, (el, item) => {
          if (selectedCard) selectedCard.classList.remove('selected');
          selectedCard = el;
          el.classList.add('selected');
          showDetailPanel(detailPanel, item, 'consonant');
          detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        grid.appendChild(card);
      });

      wrap.appendChild(grid);
    });
  }

  // ── Matras ───────────────────────────────────────────────

  function buildMatras() {
    const wrap = document.getElementById('sec-matras');
    const sec  = CONFIG.sections.matras;
    wrap.innerHTML = sectionHeader(sec);

    const subLabel = document.createElement('div');
    subLabel.style.cssText = 'font-family:Space Mono,monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--saffron);margin-bottom:10px;';
    subLabel.textContent = 'Vowel sign + ક (ka) = combined syllable — click to hear';
    wrap.appendChild(subLabel);

    const row = document.createElement('div');
    row.className = 'matra-row';

    CONFIG.matras.forEach(m => {
      const card = document.createElement('div');
      card.className = 'matra-card';

      const sym = document.createElement('div');
      sym.className = 'matra-symbol';
      sym.textContent = m.with;
      sym.title = `Tap to hear ${m.roman}`;
      sym.onclick = () => Speak.say(m.with, m.speak || m.roman);

      const speakBtn = Speak.makeBtn('speak-btn', m.with, m.speak || m.roman);

      const info = document.createElement('div');
      info.className = 'matra-info';
      info.innerHTML = `<div class="matra-roman">${m.roman} &nbsp;·&nbsp; sign: ${m.symbol} &nbsp;·&nbsp; vowel: ${m.vowel}</div>
                        <div class="matra-example">${m.meaning}</div>`;

      card.appendChild(sym);
      card.appendChild(info);
      card.appendChild(speakBtn);
      row.appendChild(card);
    });

    wrap.appendChild(row);
  }

  // ── Numbers ──────────────────────────────────────────────

  function buildNumbers() {
    const wrap = document.getElementById('sec-numbers');
    const sec  = CONFIG.sections.numbers;
    wrap.innerHTML = sectionHeader(sec);

    const grid = document.createElement('div');
    grid.className = 'num-grid';

    CONFIG.numbers.forEach(n => {
      const card = document.createElement('div');
      card.className = 'num-card';
      card.title = `Tap to hear ${n.w}`;
      card.innerHTML = `
        <span class="num-guj">${n.g}</span>
        <span class="num-arabic">${n.a}</span>
        <span class="num-word">${n.w}</span>`;
      card.onclick = () => Speak.say(n.g, n.speak || n.w);
      grid.appendChild(card);
    });

    wrap.appendChild(grid);
  }

  // ── Init ─────────────────────────────────────────────────

  function init() {
    buildVowels();
    buildConsonants();
    buildMatras();
    buildNumbers();
  }

  return { init };
})();
