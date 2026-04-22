// ─────────────────────────────────────────────────────────
//  conversations.js — Renders the conversations section
//  from CONFIG.conversations data
// ─────────────────────────────────────────────────────────

const Conversations = (() => {

  // ── Build a single phrase card ───────────────────────────

  function buildPhraseCard(phrase, index) {
    const card = document.createElement('div');
    card.className = 'phrase-card';

    // Top row
    const top = document.createElement('div');
    top.className = 'phrase-top';

    const num = document.createElement('div');
    num.className = 'phrase-num';
    num.textContent = String(index + 1).padStart(2, '0');

    const main = document.createElement('div');
    main.className = 'phrase-main';
    main.innerHTML = `
      <div class="phrase-guj">${phrase.g}</div>
      <div class="phrase-roman">${phrase.r}</div>
      <div class="phrase-eng">${phrase.e}</div>`;

    const speakBtn = Speak.makeBtn('phrase-speak', phrase.g, phrase.r);

    top.appendChild(num);
    top.appendChild(main);
    top.appendChild(speakBtn);

    // Detail (shown on expand)
    const detail = document.createElement('div');
    detail.className = 'phrase-detail';
    detail.innerHTML = `
      <div class="phrase-note">${phrase.note}</div>
      <span class="phrase-usage">${phrase.usage}</span>`;

    card.appendChild(top);
    card.appendChild(detail);

    // Toggle expand on click (but not on speak button)
    card.addEventListener('click', (e) => {
      if (e.target.closest('.phrase-speak')) return;
      const isOpen = card.classList.contains('expanded');
      document.querySelectorAll('.phrase-card.expanded').forEach(c => c.classList.remove('expanded'));
      if (!isOpen) card.classList.add('expanded');
    });

    return card;
  }

  // ── Build dialogue box ───────────────────────────────────

  function buildDialogue(dialogue) {
    const box = document.createElement('div');
    box.className = 'dialogue-box';

    const title = document.createElement('div');
    title.className = 'dialogue-title';
    title.textContent = dialogue.title;
    box.appendChild(title);

    dialogue.lines.forEach(line => {
      const row = document.createElement('div');
      row.className = 'dialogue-line';

      const tag = document.createElement('span');
      tag.className = `speaker-tag speaker-${line.sp.toLowerCase()}`;
      tag.textContent = line.sp;

      const content = document.createElement('div');
      content.className = 'dialogue-content';
      content.innerHTML = `
        <div class="dial-guj">${line.g}</div>
        <div class="dial-roman">${line.r}</div>
        <div class="dial-eng">${line.e}</div>`;

      const speakBtn = Speak.makeBtn('dial-speak', line.g, line.r);

      row.appendChild(tag);
      row.appendChild(content);
      row.appendChild(speakBtn);
      box.appendChild(row);
    });

    return box;
  }

  // ── Build a topic block ──────────────────────────────────

  function buildTopicBlock(topic) {
    const block = document.createElement('div');
    block.className = 'conv-block';
    block.id = `conv-${topic.id}`;

    // Intro banner
    const intro = document.createElement('div');
    intro.className = 'conv-intro';
    intro.innerHTML = `
      <div class="conv-intro-icon">${topic.icon}</div>
      <div class="conv-intro-text">
        <div class="conv-intro-title">${topic.label}</div>
        <div class="conv-intro-desc">${topic.desc}</div>
      </div>`;
    block.appendChild(intro);

    // Phrase list
    const list = document.createElement('div');
    list.className = 'phrase-list';
    topic.phrases.forEach((phrase, i) => {
      list.appendChild(buildPhraseCard(phrase, i));
    });
    block.appendChild(list);

    // Dialogue
    block.appendChild(buildDialogue(topic.dialogue));

    return block;
  }

  // ── Init ─────────────────────────────────────────────────

  function init() {
    const wrap    = document.getElementById('sec-conversations');
    const sec     = CONFIG.sections.conversations;

    wrap.innerHTML = `
      <div class="section-heading">${sec.tag}</div>
      <div class="section-title">${sec.title}</div>
      <div class="section-desc">${sec.desc}</div>`;

    // Topic filter buttons
    const topicsRow = document.createElement('div');
    topicsRow.className = 'conv-topics';

    // Content area
    const contentArea = document.createElement('div');
    contentArea.id = 'conv-content';

    CONFIG.conversations.forEach((topic, ti) => {
      // Tab button
      const btn = document.createElement('button');
      btn.className = 'topic-btn' + (ti === 0 ? ' active' : '');
      btn.textContent = topic.label;
      btn.onclick = () => {
        document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.conv-block').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`conv-${topic.id}`).classList.add('active');
      };
      topicsRow.appendChild(btn);

      // Block
      const block = buildTopicBlock(topic);
      if (ti === 0) block.classList.add('active');
      contentArea.appendChild(block);
    });

    wrap.appendChild(topicsRow);
    wrap.appendChild(contentArea);
  }

  return { init };
})();
