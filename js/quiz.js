// ─────────────────────────────────────────────────────────
//  quiz.js — Quiz section with pronunciation support
// ─────────────────────────────────────────────────────────

const Quiz = (() => {

  let allLetters = [];
  let score      = 0;
  let total      = 0;
  let current    = null;
  let answered   = false;
  let initialized = false;

  const MAX_Q = CONFIG.sections.quiz.totalQuestions || 15;

  // ── Build letter pool from config ───────────────────────

  function buildLetterPool() {
    allLetters = [
      ...CONFIG.vowels,
      ...CONFIG.consonantGroups.flatMap(g => g.letters),
    ];
  }

  // ── Render shell ─────────────────────────────────────────

  function renderShell() {
    const wrap = document.getElementById('sec-quiz');
    const sec  = CONFIG.sections.quiz;

    wrap.innerHTML = `
      <div class="section-heading">${sec.tag}</div>
      <div class="section-title">${sec.title}</div>
      <div class="section-desc">${sec.desc}</div>

      <div class="progress-strip" id="quiz-progress"></div>

      <div class="quiz-box">
        <div class="quiz-question" id="q-letter" title="Click to hear pronunciation">ક</div>
        <div class="quiz-speak-hint">↑ click to hear</div>
        <div class="quiz-prompt">What is the pronunciation of this letter?</div>
        <div class="quiz-score" id="q-score">Score: 0 / 0</div>
        <div class="quiz-feedback" id="q-feedback"></div>
        <div class="quiz-options" id="q-options"></div>
        <button class="quiz-next" id="q-next">Next →</button>
      </div>`;

    // Click on the big letter to hear it
    document.getElementById('q-letter').onclick = () => {
      if (current) Speak.say(current.g, current.speak || current.r);
    };

    document.getElementById('q-next').onclick = nextQuestion;
  }

  // ── Progress dots ────────────────────────────────────────

  function buildProgressDots() {
    const strip = document.getElementById('quiz-progress');
    strip.innerHTML = '';
    for (let i = 0; i < MAX_Q; i++) {
      const dot = document.createElement('div');
      dot.className = 'prog-dot';
      dot.id = `dot-${i}`;
      strip.appendChild(dot);
    }
  }

  // ── Next question ─────────────────────────────────────────

  function nextQuestion() {
    if (total >= MAX_Q) {
      showFinalScore();
      return;
    }

    answered = false;

    // Pick random letter
    const idx = Math.floor(Math.random() * allLetters.length);
    current = allLetters[idx];

    document.getElementById('q-letter').textContent = current.g;
    document.getElementById('q-feedback').textContent = '';
    document.getElementById('q-next').classList.remove('show');

    // Build 4 options (1 correct + 3 random wrong)
    const opts = new Set([current.r]);
    let safety = 0;
    while (opts.size < 4 && safety++ < 100) {
      opts.add(allLetters[Math.floor(Math.random() * allLetters.length)].r);
    }

    const shuffled = [...opts].sort(() => Math.random() - 0.5);
    const optWrap  = document.getElementById('q-options');
    optWrap.innerHTML = '';

    shuffled.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(btn, opt);
      optWrap.appendChild(btn);
    });
  }

  // ── Check answer ──────────────────────────────────────────

  function checkAnswer(btn, chosen) {
    if (answered) return;
    answered = true;
    total++;

    const correct = chosen === current.r;
    if (correct) {
      score++;
      btn.classList.add('correct');
      document.getElementById('q-feedback').textContent = 'Correct! સાચું!';
    } else {
      btn.classList.add('wrong');
      document.getElementById('q-feedback').textContent = `Not quite — it was "${current.r}"`;
      // Highlight correct answer
      document.querySelectorAll('.quiz-opt').forEach(b => {
        if (b.textContent === current.r) b.classList.add('correct');
      });
    }

    // Speak the correct answer
    Speak.say(current.g, current.speak || current.r);

    document.getElementById('q-score').textContent = `Score: ${score} / ${total}`;

    const dot = document.getElementById(`dot-${total - 1}`);
    if (dot) dot.classList.add('done');

    document.getElementById('q-next').classList.add('show');
  }

  // ── Final score ───────────────────────────────────────────

  function showFinalScore() {
    const pct = Math.round((score / MAX_Q) * 100);
    let msg = pct >= 80 ? 'Excellent! ઉત્તમ!' : pct >= 50 ? 'Good effort! સારું!' : 'Keep practising! ફરી પ્રયત્ન કરો!';

    document.getElementById('q-letter').textContent = pct >= 80 ? '🎉' : '📚';
    document.getElementById('q-feedback').textContent = `${msg} — ${score} / ${MAX_Q} (${pct}%)`;
    document.getElementById('q-options').innerHTML = `
      <button class="quiz-opt" style="grid-column:1/-1;border-color:var(--saffron);color:var(--saffron-light);" onclick="Quiz.restart()">
        Try again ↺
      </button>`;
    document.getElementById('q-next').classList.remove('show');
  }

  // ── Restart ───────────────────────────────────────────────

  function restart() {
    score    = 0;
    total    = 0;
    current  = null;
    answered = false;
    buildProgressDots();
    nextQuestion();
  }

  // ── Init ─────────────────────────────────────────────────

  function init() {
    if (initialized) return;
    initialized = true;
    buildLetterPool();
    renderShell();
    buildProgressDots();
    nextQuestion();
  }

  return { init, restart };
})();
