// ─────────────────────────────────────────────────────────
//  speak.js — Pronunciation engine using Web Speech API
//  Falls back gracefully if not supported.
// ─────────────────────────────────────────────────────────

const Speak = (() => {
  const synth   = window.speechSynthesis;
  const toast   = document.getElementById('speak-toast');
  let toastTimer = null;
  let voices     = [];

  // Load voices (async in some browsers)
  function loadVoices() {
    voices = synth.getVoices();
    if (!voices.length) {
      synth.addEventListener('voiceschanged', () => {
        voices = synth.getVoices();
      });
    }
  }
  if (synth) loadVoices();

  // Pick best available voice for Gujarati
  // Falls back to Hindi, then any Indian English, then default
  function pickVoice() {
    const prefs = [
      v => /gu[-_]IN/i.test(v.lang),        // Gujarati India
      v => /gu/i.test(v.lang),               // any Gujarati
      v => /hi[-_]IN/i.test(v.lang),         // Hindi India (similar phonology)
      v => /hi/i.test(v.lang),               // any Hindi
      v => /en[-_]IN/i.test(v.lang),         // Indian English
    ];
    for (const test of prefs) {
      const match = voices.find(test);
      if (match) return match;
    }
    return null; // browser default
  }

  // Show the animated toast
  function showToast(gujaratiText, romanText) {
    toast.innerHTML = `
      <span class="speak-toast-guj">${gujaratiText}</span>
      <span style="color:rgba(255,255,255,0.4);font-size:11px;">${romanText}</span>
      <span class="speak-toast-waves">
        <span></span><span></span><span></span><span></span><span></span>
      </span>`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
  }

  function hideToast() {
    toast.classList.remove('show');
  }

  // Core speak function
  // gujaratiText : the Gujarati script (shown in toast)
  // speakText    : romanised text to pass to TTS
  // optional btn : button element to animate
  function say(gujaratiText, speakText, btn = null) {
    if (!synth) {
      alert('Text-to-speech is not supported in this browser. Try Chrome or Edge.');
      return;
    }

    // Cancel any ongoing speech
    synth.cancel();

    // Remove speaking class from all buttons
    document.querySelectorAll('.speaking').forEach(el => el.classList.remove('speaking'));

    const utterance = new SpeechSynthesisUtterance(speakText);
    const voice = pickVoice();
    if (voice) utterance.voice = voice;

    // Tune for Gujarati phonology
    utterance.lang  = voice ? voice.lang : 'hi-IN';
    utterance.rate  = 0.75;  // slow for learning
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      showToast(gujaratiText, speakText);
      if (btn) btn.classList.add('speaking');
    };

    utterance.onend = () => {
      hideToast();
      if (btn) btn.classList.remove('speaking');
    };

    utterance.onerror = () => {
      hideToast();
      if (btn) btn.classList.remove('speaking');
    };

    synth.speak(utterance);
  }

  // SVG speaker icon (reusable)
  function speakerIcon(color = 'currentColor') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>`;
  }

  // Build a speak button element
  function makeBtn(classList, gujaratiText, speakText) {
    const btn = document.createElement('button');
    btn.className = classList;
    btn.innerHTML = speakerIcon();
    btn.title = `Hear pronunciation of "${gujaratiText}"`;
    btn.onclick = (e) => {
      e.stopPropagation();
      say(gujaratiText, speakText, btn);
    };
    return btn;
  }

  return { say, makeBtn, speakerIcon };
})();
