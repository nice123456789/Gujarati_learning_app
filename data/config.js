// ─────────────────────────────────────────────────────────
//  config.js — All content lives here. Edit this file to
//  add/change phrases, alphabets, conversations etc.
// ─────────────────────────────────────────────────────────

const CONFIG = {

  // ── Navigation tabs ──────────────────────────────────────
  tabs: [
    { id: 'vowels',        label: 'Vowels (સ્વર)' },
    { id: 'consonants',    label: 'Consonants (વ્યંજન)' },
    { id: 'matras',        label: 'Vowel Signs (માત્રા)' },
    { id: 'numbers',       label: 'Numbers (અંક)' },
    { id: 'conversations', label: 'Conversations (વાર્તાલાપ)' },
    { id: 'quiz',          label: 'Quiz' },
  ],

  // ── Section meta ─────────────────────────────────────────
  sections: {
    vowels: {
      tag: 'Section 01',
      title: 'Vowels — સ્વર (Svar)',
      desc: 'Gujarati has 13 vowels. They can stand alone or attach to consonants as vowel signs (matras).',
      tip: '<strong>Tip:</strong> Gujarati does not have the horizontal line (शिरोरेखा) that Hindi/Devanagari has. The letters are rounder and slightly simpler. Click any letter to learn more — or press the speaker icon to hear it.',
    },
    consonants: {
      tag: 'Section 02',
      title: 'Consonants — વ્યંજન (Vyanjan)',
      desc: '34 consonants, organised in groups by where in the mouth they are produced — just like Sanskrit.',
      tip: '<strong>Tip:</strong> Consonants are grouped by articulation point — throat (કઠ), palate (તાળવું), teeth (દાંત) etc. Click any letter to hear its pronunciation.',
    },
    matras: {
      tag: 'Section 03',
      title: 'Vowel Signs — માત્રા (Maatra)',
      desc: 'When vowels attach to consonants, they become "matras" — small signs written around the consonant letter.',
      tip: '<strong>Example:</strong> ક (ka) + િ (i matra) = કિ (ki). Click the combined syllable to hear it pronounced.',
    },
    numbers: {
      tag: 'Section 04',
      title: 'Numbers — અંક (Ank)',
      desc: 'Gujarati has its own numeral system. Click any number to hear it spoken aloud.',
    },
    conversations: {
      tag: 'Section 05',
      title: 'Daily Conversations — વાર્તાલાપ (Vaartalaap)',
      desc: 'Real phrases used every day in Gujarat. Click the speaker icon on any phrase or dialogue line to hear the pronunciation.',
    },
    quiz: {
      tag: 'Section 06',
      title: 'Quiz — કસોટી (Kasoti)',
      desc: 'What does this letter sound like? Click the letter to hear it, then choose the correct romanisation.',
      totalQuestions: 15,
    },
  },

  // ── Vowels ───────────────────────────────────────────────
  vowels: [
    { g: 'અ', r: 'a',  name: 'A',         ex: 'as in "sun"',       speak: 'a'  },
    { g: 'આ', r: 'aa', name: 'Aa',        ex: 'as in "father"',    speak: 'aa' },
    { g: 'ઇ', r: 'i',  name: 'I',         ex: 'as in "bit"',       speak: 'i'  },
    { g: 'ઈ', r: 'ii', name: 'Ii (long)', ex: 'as in "feet"',      speak: 'ii' },
    { g: 'ઉ', r: 'u',  name: 'U',         ex: 'as in "put"',       speak: 'u'  },
    { g: 'ઊ', r: 'uu', name: 'Uu (long)', ex: 'as in "pool"',      speak: 'uu' },
    { g: 'એ', r: 'e',  name: 'E',         ex: 'as in "say"',       speak: 'e'  },
    { g: 'ઐ', r: 'ai', name: 'Ai',        ex: 'as in "rain"',      speak: 'ai' },
    { g: 'ઓ', r: 'o',  name: 'O',         ex: 'as in "go"',        speak: 'o'  },
    { g: 'ઔ', r: 'au', name: 'Au',        ex: 'as in "cow"',       speak: 'au' },
    { g: 'અં', r: 'an', name: 'Anusvara', ex: 'nasal "n" sound',   speak: 'an' },
    { g: 'અઃ', r: 'ah', name: 'Visarga',  ex: 'breathy "h" at end',speak: 'ah' },
    { g: 'ઋ',  r: 'ru', name: 'Ru',       ex: 'as in "rung" (rare)',speak: 'ri' },
  ],

  // ── Consonant groups ─────────────────────────────────────
  consonantGroups: [
    {
      name: 'Velar — કકારાદિ (throat / back of mouth)',
      letters: [
        { g: 'ક', r: 'ka',  ex: 'as in "cup"',      speak: 'ka'  },
        { g: 'ખ', r: 'kha', ex: 'aspirated k',       speak: 'kha' },
        { g: 'ગ', r: 'ga',  ex: 'as in "go"',        speak: 'ga'  },
        { g: 'ઘ', r: 'gha', ex: 'aspirated g',       speak: 'gha' },
        { g: 'ઙ', r: 'nga', ex: 'as in "sing"',      speak: 'nga' },
      ],
    },
    {
      name: 'Palatal — ચ-વર્ગ (palate)',
      letters: [
        { g: 'ચ', r: 'cha',  ex: 'as in "chair"',    speak: 'cha'  },
        { g: 'છ', r: 'chha', ex: 'aspirated ch',      speak: 'chha' },
        { g: 'જ', r: 'ja',   ex: 'as in "jar"',       speak: 'ja'   },
        { g: 'ઝ', r: 'jha',  ex: 'as in "pleasure"', speak: 'jha'  },
        { g: 'ઞ', r: 'nya',  ex: 'as in "canyon"',   speak: 'nya'  },
      ],
    },
    {
      name: 'Retroflex — ટ-વર્ગ (tongue curled back)',
      letters: [
        { g: 'ટ', r: 'Ta',  ex: 'retroflex T',       speak: 'Ta'  },
        { g: 'ઠ', r: 'Tha', ex: 'aspirated T',        speak: 'Tha' },
        { g: 'ડ', r: 'Da',  ex: 'retroflex D',        speak: 'Da'  },
        { g: 'ઢ', r: 'Dha', ex: 'aspirated D',        speak: 'Dha' },
        { g: 'ણ', r: 'Na',  ex: 'retroflex N',        speak: 'Na'  },
      ],
    },
    {
      name: 'Dental — ત-વર્ગ (tongue on teeth)',
      letters: [
        { g: 'ત', r: 'ta',  ex: 'soft t (Italian)',  speak: 'ta'  },
        { g: 'થ', r: 'tha', ex: 'aspirated t',        speak: 'tha' },
        { g: 'દ', r: 'da',  ex: 'soft d',             speak: 'da'  },
        { g: 'ધ', r: 'dha', ex: 'aspirated d',        speak: 'dha' },
        { g: 'ન', r: 'na',  ex: 'as in "now"',        speak: 'na'  },
      ],
    },
    {
      name: 'Labial — પ-વર્ગ (lips)',
      letters: [
        { g: 'પ', r: 'pa',  ex: 'as in "spin"',      speak: 'pa'  },
        { g: 'ફ', r: 'pha', ex: 'aspirated p / f',   speak: 'fa'  },
        { g: 'બ', r: 'ba',  ex: 'as in "boy"',       speak: 'ba'  },
        { g: 'ભ', r: 'bha', ex: 'aspirated b',       speak: 'bha' },
        { g: 'મ', r: 'ma',  ex: 'as in "mother"',    speak: 'ma'  },
      ],
    },
    {
      name: 'Semivowels & Sibilants',
      letters: [
        { g: 'ય',  r: 'ya',   ex: 'as in "yes"',       speak: 'ya'   },
        { g: 'ર',  r: 'ra',   ex: 'as in "run"',        speak: 'ra'   },
        { g: 'લ',  r: 'la',   ex: 'as in "love"',       speak: 'la'   },
        { g: 'વ',  r: 'va',   ex: 'as in "van"',        speak: 'va'   },
        { g: 'શ',  r: 'sha',  ex: 'as in "shoe"',       speak: 'sha'  },
        { g: 'ષ',  r: 'Sha',  ex: 'retroflex sh',       speak: 'sha'  },
        { g: 'સ',  r: 'sa',   ex: 'as in "sun"',        speak: 'sa'   },
        { g: 'હ',  r: 'ha',   ex: 'as in "hat"',        speak: 'ha'   },
        { g: 'ળ',  r: 'La',   ex: 'retroflex l (unique)',speak: 'la'  },
        { g: 'ક્ષ',r: 'ksha', ex: 'k+sha combined',     speak: 'ksha' },
        { g: 'જ્ઞ',r: 'gna',  ex: 'j+na combined',      speak: 'gna'  },
      ],
    },
  ],

  // ── Word examples for detail panel ───────────────────────
  wordExamples: {
    'ક':  'કાકો = Kaako (uncle)',
    'ગ':  'ગાય = Gaay (cow)',
    'ઘ':  'ઘર = Ghar (house)',
    'ચ':  'ચાય = Chaay (tea)',
    'જ':  'જળ = Jal (water)',
    'ત':  'તારો = Taaro (star)',
    'દ':  'દૂધ = Duudh (milk)',
    'ન':  'નામ = Naam (name)',
    'પ':  'પાણી = Paani (water)',
    'ભ':  'ભાઈ = Bhaai (brother)',
    'મ':  'મમ્મી = Mummy',
    'ર':  'રોટી = Roti (bread)',
    'સ':  'સારું = Saaru (good)',
    'હ':  'હાથ = Haath (hand)',
    'અ':  'અમદાવાદ = Ahmedabad',
    'આ': 'આકાશ = Aakaash (sky)',
    'ઇ':  'ઇચ્છા = Ichchha (wish)',
    'ઉ':  'ઉઘાડ = Ughaad (open)',
    'એ': 'એક = Ek (one)',
    'ઓ': 'ઓળખ = Olakh (identity)',
    'ય':  'યાદ = Yaad (memory)',
    'ળ':  'ળ = rare, in words like ળ',
    'વ':  'વરસાદ = Varsaad (rain)',
    'લ':  'લગ્ન = Lagna (wedding)',
  },

  // ── Matras ───────────────────────────────────────────────
  matras: [
    { symbol: 'ા',  with: 'કા',  roman: 'kaa', vowel: 'આ', meaning: 'long A sound',    speak: 'kaa'  },
    { symbol: 'િ',  with: 'કિ',  roman: 'ki',  vowel: 'ઇ', meaning: 'short I sound',   speak: 'ki'   },
    { symbol: 'ી',  with: 'કી',  roman: 'kii', vowel: 'ઈ', meaning: 'long II sound',   speak: 'kii'  },
    { symbol: 'ુ',  with: 'કુ',  roman: 'ku',  vowel: 'ઉ', meaning: 'short U sound',   speak: 'ku'   },
    { symbol: 'ૂ',  with: 'કૂ',  roman: 'kuu', vowel: 'ઊ', meaning: 'long UU sound',   speak: 'kuu'  },
    { symbol: 'ે',  with: 'કે',  roman: 'ke',  vowel: 'એ', meaning: 'E sound',          speak: 'ke'   },
    { symbol: 'ૈ',  with: 'કૈ',  roman: 'kai', vowel: 'ઐ', meaning: 'AI sound',         speak: 'kai'  },
    { symbol: 'ો',  with: 'કો',  roman: 'ko',  vowel: 'ઓ', meaning: 'O sound',          speak: 'ko'   },
    { symbol: 'ૌ',  with: 'કૌ',  roman: 'kau', vowel: 'ઔ', meaning: 'AU sound',         speak: 'kau'  },
    { symbol: 'ં',  with: 'કં',  roman: 'kan', vowel: 'અં',meaning: 'nasal sound',      speak: 'kam'  },
    { symbol: 'ઃ',  with: 'કઃ',  roman: 'kah', vowel: 'અઃ',meaning: 'visarga sound',    speak: 'kah'  },
    { symbol: 'ૃ',  with: 'કૃ',  roman: 'kru', vowel: 'ઋ', meaning: 'RU sound',         speak: 'kri'  },
  ],

  // ── Numbers ──────────────────────────────────────────────
  numbers: [
    { g: '૦',   a: '0',   w: 'Shunya', speak: 'zero'       },
    { g: '૧',   a: '1',   w: 'Ek',     speak: 'ek'         },
    { g: '૨',   a: '2',   w: 'Be',     speak: 'be'         },
    { g: '૩',   a: '3',   w: 'Tran',   speak: 'tran'       },
    { g: '૪',   a: '4',   w: 'Char',   speak: 'char'       },
    { g: '૫',   a: '5',   w: 'Panch',  speak: 'paanch'     },
    { g: '૬',   a: '6',   w: 'Chha',   speak: 'chha'       },
    { g: '૭',   a: '7',   w: 'Saat',   speak: 'saat'       },
    { g: '૮',   a: '8',   w: 'Aath',   speak: 'aath'       },
    { g: '૯',   a: '9',   w: 'Nav',    speak: 'nav'        },
    { g: '૧૦',  a: '10',  w: 'Das',    speak: 'das'        },
    { g: '૧૧',  a: '11',  w: 'Agyaar', speak: 'agiyaar'    },
    { g: '૧૨',  a: '12',  w: 'Baaaar', speak: 'baaar'      },
    { g: '૨૦',  a: '20',  w: 'Vis',    speak: 'vis'        },
    { g: '૫૦',  a: '50',  w: 'Pachaas',speak: 'pachaas'    },
    { g: '૧૦૦', a: '100', w: 'So',     speak: 'so'         },
  ],

  // ── Conversations ─────────────────────────────────────────
  conversations: [
    {
      id: 'greetings',
      label: 'Greetings',
      icon: 'નમ',
      desc: 'Essential phrases to say hello, goodbye and ask how someone is.',
      phrases: [
        { g: 'નમસ્તે',           r: 'Namaste',            e: 'Hello / Greetings',              note: 'Used any time of day, with anyone. Safe universal greeting.',                      usage: 'With elders, strangers, shopkeepers' },
        { g: 'કેમ છો?',          r: 'Kem chho?',          e: 'How are you?',                   note: '"Tame" (you) is implied. Use with people you meet regularly.',                    usage: 'Formal / semi-formal'               },
        { g: 'સારું છે, આભાર',   r: 'Saaru chhe, aabhaar',e: "I'm fine, thank you",            note: '"Saaru" = good/fine. "Aabhaar" = thanks.',                                       usage: 'Response to Kem chho'               },
        { g: 'તમે કેમ છો?',      r: 'Tame kem chho?',     e: 'And how are you?',               note: 'Add "tame" to turn the question back to them.',                                  usage: 'After someone asks you'             },
        { g: 'સવારે સારું',      r: 'Savaar saaru',       e: 'Good morning',                   note: 'Literal: "Morning good". Less formal than Namaste.',                             usage: 'Morning greetings'                  },
        { g: 'આવજો',             r: 'Aavjo',              e: 'Goodbye / See you',              note: 'Literal: "Come again". Warmer than just "bye".',                                 usage: 'Parting, leaving a shop'            },
        { g: 'ફરી મળીશું',       r: 'Fari malishun',      e: 'We will meet again',             note: 'A friendly goodbye when you expect to meet again.',                              usage: 'Friends, colleagues'                },
        { g: 'રાત સારી',         r: 'Raat saari',         e: 'Good night',                     note: '"Raat" = night. Said when parting at night.',                                    usage: 'Evening / bedtime'                  },
      ],
      dialogue: {
        title: 'Sample conversation — Meeting someone',
        lines: [
          { sp: 'A', g: 'નમસ્તે! કેમ છો?',              r: 'Namaste! Kem chho?',                  e: 'Hello! How are you?'                  },
          { sp: 'B', g: 'સારું છે, આભાર. તમે?',          r: 'Saaru chhe, aabhaar. Tame?',          e: "Fine, thanks. And you?"               },
          { sp: 'A', g: 'હા, સારું. ઘણા દિવસ પછી મળ્યા!', r: 'Haa, saaru. Ghana divas pachhi malya!', e: 'Yes, fine. We met after many days!'   },
          { sp: 'B', g: 'સાચ્ચ! ફરી મળીશું. આવજો!',     r: 'Saachchu! Fari malishun. Aavjo!',     e: "True! We'll meet again. Bye!"         },
        ],
      },
    },
    {
      id: 'shopping',
      label: 'Shopping',
      icon: 'ખર',
      desc: "Phrases for markets, shops and bargaining — very useful in Vadodara's local bazaars.",
      phrases: [
        { g: 'આ કેટલાનું છે?',       r: 'Aa ketlaanu chhe?',     e: 'How much does this cost?',        note: '"Aa" = this. "Ketlaanu" = how much. Most useful shopping phrase.',  usage: 'Any shop, market'          },
        { g: 'સસ્તું આપો',            r: 'Sastu aapo',            e: 'Give it cheaper / discount',      note: '"Sastu" = cheap. Polite way to ask for a discount.',                usage: 'Bargaining at market'      },
        { g: 'બહુ મોઘું છે',           r: 'Bahu moghhu chhe',      e: "It's too expensive",              note: '"Bahu" = very/too much. "Moghhu" = expensive. Use with a smile!',  usage: 'When price is too high'    },
        { g: 'ઠીક છે, લઉ છું',         r: 'Theek chhe, lau chhun', e: "Okay, I'll take it",              note: '"Lau chhun" = I am buying. Signals you agree.',                     usage: 'After agreeing on price'   },
        { g: 'બીજું કાંઈ છે?',         r: 'Bijhu kaai chhe?',      e: 'Do you have others?',             note: '"Bijhu" = other/another. Useful when looking for variety.',         usage: 'Asking for more options'   },
        { g: 'નહીં જોઈએ, આભાર',        r: 'Nahin joiye, aabhaar',  e: "I don't need it, thanks",         note: 'Polite way to decline a persistent shopkeeper.',                    usage: 'Declining a sale'          },
        { g: 'પૈસા ક્યાં આપવાના?',     r: 'Paisa kyaan aapvana?',  e: 'Where do I pay?',                 note: '"Paisa" = money. "Kyaan" = where.',                                 usage: 'Supermarkets, stores'      },
        { g: 'કૅશ કે કાર્ડ?',          r: 'Cash ke card?',         e: 'Cash or card?',                   note: 'Mix of English + Gujarati — very common in modern shops.',          usage: 'Payment at shops'          },
      ],
      dialogue: {
        title: 'Sample conversation — At a vegetable market',
        lines: [
          { sp: 'A', g: 'ભૈ, ટામેટા કેટલાના?',       r: 'Bhai, taameta ketlaana?',    e: 'Brother, how much are the tomatoes?' },
          { sp: 'B', g: 'ચાળીસ રૂપિયે કિલો',          r: 'Chaaalis rupiye kilo',       e: 'Forty rupees per kilo'               },
          { sp: 'A', g: 'બહુ મોઘું! ત્રીસમાં આપો',    r: 'Bahu moghhu! Triisma aapo', e: 'Too expensive! Give it for thirty'   },
          { sp: 'B', g: 'પાંત્રીસ લઈ લો, ભૈ',          r: 'Paantris lai lo, bhai',     e: 'Take it for thirty-five, brother'    },
          { sp: 'A', g: 'ઠીક છે. એક કિલો આપો',        r: 'Theek chhe. Ek kilo aapo',  e: 'Okay. Give me one kilo'              },
        ],
      },
    },
    {
      id: 'food',
      label: 'Food & Tea',
      icon: 'ચા',
      desc: 'Gujaratis love food and chai — learn how to order, compliment and talk about food.',
      phrases: [
        { g: 'ચા આવશે?',          r: 'Chaa aavse?',          e: 'Will you have tea?',           note: 'Most Gujarati sentence ever. Offering chai is a sign of warmth.',        usage: 'Offering guests tea'        },
        { g: 'ભૂખ લાગી છે',        r: 'Bhukh laagi chhe',     e: 'I am hungry',                  note: '"Bhukh" = hunger. "Laagi" = has struck/felt.',                           usage: "Telling someone you're hungry" },
        { g: 'ખૂબ સ્વાદિષ્ટ છે!',   r: 'Khub svaadisht chhe!', e: "It's very delicious!",         note: '"Khub" = very. "Svaadisht" = tasty/delicious.',                          usage: 'After eating good food'     },
        { g: 'વધુ આપશો?',           r: 'Vadhu aapsho?',        e: 'Will you give more?',          note: '"Vadhu" = more. Polite request for seconds.',                            usage: 'Asking for second serving'  },
        { g: 'પાણી આપશો?',          r: 'Paani aapsho?',        e: 'Will you give water?',         note: '"Paani" = water.',                                                       usage: 'Asking for water at table'  },
        { g: 'ઘી ઘણું નાખ્યું?',    r: 'Ghee ghanu naakhyu?',  e: 'Did you put a lot of ghee?',   note: 'Gujaranis love ghee — this is as much a compliment as a question!',     usage: 'Complimenting food'         },
        { g: 'પેટ ભરાઈ ગયું',       r: 'Pet bharaai gayu',     e: 'My stomach is full',           note: '"Pet" = stomach. "Bharaai gayu" = got filled up.',                      usage: 'After finishing a meal'     },
        { g: 'ખૂબ આભાર, ખૂબ સ્વાદ', r: 'Khub aabhaar, khub svaad', e: 'Many thanks, very tasty', note: 'The ultimate compliment to a Gujarati cook. They will love you.',       usage: 'Thanking the host'          },
      ],
      dialogue: {
        title: "Sample conversation — At someone's home",
        lines: [
          { sp: 'A', g: 'આવો, બેસો. ચા આવશે?',         r: 'Aavo, beso. Chaa aavse?',             e: 'Come, sit. Will you have tea?'    },
          { sp: 'B', g: 'હા, ચોક્કસ! આભાર',             r: 'Haa, chokkas! Aabhaar',              e: 'Yes, definitely! Thanks'          },
          { sp: 'A', g: 'ઢોકળા ખાશો? હમણાં જ બનાવ્યા', r: 'Dhokla khasho? Hamna ja banaavya',   e: 'Will you have dhokla? Just made'  },
          { sp: 'B', g: 'ખૂબ સ્વાદિષ્ટ છે! વધુ આપશો?', r: 'Khub svaadisht chhe! Vadhu aapsho?', e: "It's delicious! Will you give more?" },
          { sp: 'A', g: 'જરૂર! ખૂબ ખાઓ',               r: 'Jaroor! Khub khao',                  e: 'Of course! Eat a lot'             },
        ],
      },
    },
    {
      id: 'directions',
      label: 'Directions',
      icon: 'રસ્',
      desc: 'Getting around Vadodara — ask and give directions confidently.',
      phrases: [
        { g: 'માફ કરજો, રસ્તો બતાવશો?', r: 'Maaf karjo, rasto batavsho?', e: 'Excuse me, will you show the way?', note: '"Maaf karjo" = sorry/excuse me. "Rasto" = road/path.',  usage: 'Asking for directions' },
        { g: 'અહીં ક્યાં છે?',           r: 'Aheen kyaan chhe?',           e: 'Where is this place?',             note: '"Kyaan" = where. Point at address or say place name.', usage: 'Asking for a location' },
        { g: 'સીધા જાઓ',                 r: 'Sidhaa jao',                  e: 'Go straight',                      note: '"Sidhaa" = straight. "Jao" = go.',                     usage: 'Directions'            },
        { g: 'ડાબે વળો',                  r: 'Daabe valo',                  e: 'Turn left',                        note: '"Daabe" = left. "Valo" = turn.',                       usage: 'Navigation'            },
        { g: 'જમણે વળો',                  r: 'Jamane valo',                 e: 'Turn right',                       note: '"Jamane" = right.',                                    usage: 'Navigation'            },
        { g: 'નજીક છે કે દૂર?',           r: 'Najeek chhe ke door?',        e: 'Is it near or far?',               note: '"Najeek" = near. "Door" = far.',                       usage: 'Judging distance'      },
        { g: 'બસ સ્ટેન્ડ ક્યાં છે?',      r: 'Bus stand kyaan chhe?',       e: 'Where is the bus stand?',          note: 'Very practical in Vadodara.',                          usage: 'Finding transport'     },
        { g: 'ઓટો કરશો?',                 r: 'Auto karsho?',                e: 'Will you take auto (rickshaw)?',   note: 'Asking an auto driver or a friend.',                   usage: 'Getting an auto rickshaw' },
      ],
      dialogue: {
        title: 'Sample conversation — Asking for directions',
        lines: [
          { sp: 'A', g: 'ભૈ, માફ કરજો. લક્ષ્મી વિલાસ ક્યાં છે?', r: 'Bhai, maaf karjo. Laxmi Vilas kyaan chhe?', e: 'Brother, where is Laxmi Vilas Palace?' },
          { sp: 'B', g: 'સીધા જાઓ, પછી ડાબે વળો',                 r: 'Sidhaa jao, pachhi daabe valo',            e: 'Go straight, then turn left'           },
          { sp: 'A', g: 'નજીક છે?',                                r: 'Najeek chhe?',                             e: 'Is it nearby?'                         },
          { sp: 'B', g: 'હા, પાંચ મિનિટ ચાલવાનું',                r: 'Haa, paanch minute chaalvaanu',            e: "Yes, five minutes' walk"               },
          { sp: 'A', g: 'ખૂબ આભાર!',                              r: 'Khub aabhaar!',                            e: 'Thank you very much!'                  },
        ],
      },
    },
    {
      id: 'family',
      label: 'Family & People',
      icon: 'ઘર',
      desc: 'Gujarati family terms and how to introduce yourself and talk about people.',
      phrases: [
        { g: 'તમારું નામ શું છે?',           r: 'Tamaaru naam shhu chhe?',      e: 'What is your name?',           note: '"Tamaaru" = your (respectful). Standard introduction.',   usage: 'Meeting someone new'      },
        { g: 'મારું નામ ___ છે',             r: 'Maaru naam ___ chhe',          e: 'My name is ___',               note: '"Maaru" = my. Fill in your name.',                        usage: 'Introducing yourself'     },
        { g: 'તમે ક્યાંના છો?',              r: 'Tame kyaanaa chho?',           e: 'Where are you from?',          note: '"Kyaanaa" = from where. A common icebreaker.',            usage: 'Making conversation'      },
        { g: 'હું વડોદરાનો/ની છું',          r: 'Hu Vadodaraano/ni chhun',      e: 'I am from Vadodara',           note: '"-no" for male, "-ni" for female.',                       usage: 'Telling your city'        },
        { g: 'આ મારા પિતા છે',               r: 'Aa maaraa pitaa chhe',         e: 'This is my father',            note: '"Pitaa" = father (formal). "Baapuji" is more affectionate.', usage: 'Introductions'         },
        { g: 'ભૈ / ભાઈ',                     r: 'Bhai',                         e: 'Brother (any man)',            note: 'Gujaratis call any man "Bhai" — stranger, friend, shopkeeper.', usage: 'Addressing men casually' },
        { g: 'બેન / દીદી',                   r: 'Ben / Didi',                   e: 'Sister (any woman)',           note: '"Ben" is used for any woman respectfully.',               usage: 'Addressing women'         },
        { g: 'કાકા / કાકી',                  r: 'Kaakaa / Kaaki',               e: "Uncle / Aunty (father's side)",note: 'Kaaka = father\'s brother, Kaaki = his wife.',            usage: 'Extended family'          },
      ],
      dialogue: {
        title: 'Sample conversation — Self introduction',
        lines: [
          { sp: 'A', g: 'નમસ્તે! તમારું નામ શું છે?', r: 'Namaste! Tamaaru naam shhu chhe?', e: 'Hello! What is your name?'              },
          { sp: 'B', g: 'મારું નામ અર્જુન છે. તમે?',  r: 'Maaru naam Arjun chhe. Tame?',    e: 'My name is Arjun. And you?'             },
          { sp: 'A', g: 'હું પ્રિયા. ક્યાંના છો?',   r: 'Hu Priya. Kyaanaa chho?',         e: "I'm Priya. Where are you from?"         },
          { sp: 'B', g: 'હું વડોદરાનો છું. તમે?',    r: 'Hu Vadodaraano chhun. Tame?',     e: "I'm from Vadodara. You?"                },
          { sp: 'A', g: 'હું પણ વડોદરાની છું!',      r: 'Hu pan Vadodaraani chhun!',        e: "I'm also from Vadodara!"                },
        ],
      },
    },
    {
      id: 'feelings',
      label: 'Feelings & Responses',
      icon: 'સાર',
      desc: 'Express agreement, surprise, gratitude and emotions in everyday Gujarati.',
      phrases: [
        { g: 'હા / ના',              r: 'Haa / Naa',              e: 'Yes / No',                    note: '"Haa" is softer than English yes. "Naa" with a head shake.',        usage: 'All the time'                  },
        { g: 'ખૂબ સારું!',           r: 'Khub saaru!',            e: 'Very good! / Excellent!',     note: '"Khub" = very. "Saaru" = good. Most common positive response.',     usage: 'Approval, praise'              },
        { g: 'સાચ્ચ?',               r: 'Saachhu?',               e: 'Really? / Is that true?',     note: 'A one-word surprised response. Raise your eyebrows!',               usage: 'Expressing surprise'           },
        { g: 'ઠીક છે',               r: 'Theek chhe',             e: "It's okay / Alright",         note: 'Used for agreeing, accepting, or showing something is acceptable.', usage: 'Agreement, casual responses'   },
        { g: 'ખબર નથી',              r: 'Khabar nathi',           e: "I don't know",                note: '"Khabar" = knowledge. "Nathi" = not.',                              usage: "When you don't know something" },
        { g: 'મને સમજાયું નહીં',      r: 'Mane samjayu nahin',     e: "I didn't understand",         note: '"Mane" = to me. "Samjayu" = understood.',                           usage: 'When you need clarification'   },
        { g: 'ધીમે બોલો',             r: 'Dhime bolo',             e: 'Please speak slowly',         note: '"Dhime" = slowly. "Bolo" = speak. Very helpful while learning!',   usage: 'Learning Gujarati'             },
        { g: 'મને ગુજરાતી શીખવો!',   r: 'Mane Gujarati sheekhvo!',e: 'Teach me Gujarati!',          note: 'Locals will love that you said this in Gujarati!',                  usage: 'With native speakers'          },
      ],
      dialogue: {
        title: 'Sample conversation — Responding naturally',
        lines: [
          { sp: 'A', g: 'આવતીકાલે ફિલ્મ જોવા આવશો?', r: 'Aavaatikale film jova aavsho?', e: 'Will you come to watch a film tomorrow?' },
          { sp: 'B', g: 'ક્યારે? સવારે કે સાંજે?',   r: 'Kyaare? Saavare ke saanje?',   e: 'When? Morning or evening?'               },
          { sp: 'A', g: 'સાંજે સાત વાગ્યે',          r: 'Saanje saat vaagye',            e: "Evening at seven o'clock"                },
          { sp: 'B', g: 'ઠીક છે! ખૂબ સારું',         r: 'Theek chhe! Khub saaru',        e: 'Alright! Very good'                      },
          { sp: 'A', g: 'સાચ્ચ? આવશો ને!',           r: 'Saachche? Aavsho ne!',          e: 'Really? You will come right!'            },
        ],
      },
    },
  ],

};
