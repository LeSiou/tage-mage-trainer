/**
 * TAGE MAGE & SCORE IAE MESSAGE Trainer
 * Fiches Mémo Visuelles & Quizz
 */

import {
  getMassiveCultureGDeck,
  renderMemoIAECourse,
  IAE_FRENCH_QUIZ_DATA,
  IAE_LOGICAL_QUIZ_DATA,
  IAE_ENGLISH_QUIZ_DATA,
  generateOfficialIAEMockExamDeck
} from './iaeData.js';

import {
  TM_COMPREHENSION_QUESTIONS,
  TM_CALCUL_QUESTIONS,
  TM_RAISONNEMENT_QUESTIONS,
  TM_CONDITIONS_MINIMALES_QUESTIONS,
  TM_EXPRESSION_QUESTIONS,
  TM_LOGIQUE_QUESTIONS,
  renderMemoTageMageCourse,
  generateOfficialTageMageMockExamDeck
} from './tageMageData.js';



function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PRIME_NUMBERS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 
  73, 79, 83, 89, 97, 101
];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Helper: True Mathematical Stacked Fraction Layout (No raw slashes!)
function f(num, den) {
  return `<span class="math-frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}

// Helper: True Mathematical Stacked Sub-Superscript Layout (A_n^k / C_n^k)
function subsup(mainChar, subText, supText) {
  return `<span class="math-subsup"><span class="main">${mainChar}</span><span class="scripts"><span class="sup">${supText}</span><span class="sub">${subText}</span></span></span>`;
}

// ---------------------------------------------------------
// DATASETS & QUIZ DATA
// ---------------------------------------------------------

const DECOMPOSITION_QUIZ_DATA = [
  { prompt: 'Quelle est la décomposition de 51 ?', options: ['17 × 3', '13 × 4', '19 × 3', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 57 ?', options: ['19 × 3', '17 × 4', '13 × 5', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 65 ?', options: ['13 × 5', '17 × 4', '19 × 3', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 85 ?', options: ['17 × 5', '19 × 4', '13 × 7', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 91 ?', options: ['13 × 7', '17 × 5', '19 × 4', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 119 ?', options: ['17 × 7', '19 × 6', '13 × 9', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 133 ?', options: ['19 × 7', '17 × 8', '23 × 5', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 143 ?', options: ['11 × 13', '17 × 9', '19 × 7', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 187 ?', options: ['17 × 11', '19 × 9', '23 × 7', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 209 ?', options: ['11 × 19', '17 × 13', '23 × 9', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 221 ?', options: ['13 × 17', '19 × 11', '23 × 9', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 247 ?', options: ['13 × 19', '17 × 14', '23 × 11', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 323 ?', options: ['19 × 17', '23 × 13', '29 × 11', 'Premier'], answerIndex: 0 },
  { prompt: 'Quelle est la décomposition de 437 ?', options: ['19 × 23', '17 × 25', '29 × 15', 'Premier'], answerIndex: 0 }
];

const FRENCH_SYNTAX_QUIZ_DATA = [
  { prompt: 'Quelle est la formulation correcte ?', options: ['Bien qu’il pleuve, il est sorti.', 'Malgré qu’il pleuve, il est sorti.', 'Malgré il pleut, il est sorti.', 'Moyennant qu’il pleuve, il est sorti.'], answerIndex: 0 },
  { prompt: 'Quelle est la formulation correcte ?', options: ['Je me rappelle cette histoire.', 'Je me rappelle de cette histoire.', 'Je me rappelle à cette histoire.', 'Je me rappelle sur cette histoire.'], answerIndex: 0 },
  { prompt: 'Trouvez le pléonasme dans cette liste :', options: ['Monter en haut', 'Monter les marches', 'S’élever dans les airs', 'Grimper sur le toit'], answerIndex: 0 },
  { prompt: 'Quelle est la bonne tournure ?', options: ['Il a pallié le problème.', 'Il a pallié au problème.', 'Il a pallié avec le problème.', 'Il a pallié sur le problème.'], answerIndex: 0 },
  { prompt: 'Quelle est la bonne orthographe / syntaxe ?', options: ['En conclusion, nous avons réussi.', 'Au final, nous avons réussi.', 'Finalement au final, nous avons réussi.', 'À la finale, nous avons réussi.'], answerIndex: 0 },
  { prompt: 'Quelle est la nuance entre démythifier et démystifier ?', options: ['Démythifier = détruire un mythe | Démystifier = détruire une supercherie', 'Démythifier = tromper quelqu’un | Démystifier = raconter un mythe', 'Elles sont strictement synonymes', 'Démystifier = élever au rang de mythe'], answerIndex: 0 },
  { prompt: 'Quelle est la bonne tournure avec « voire » ?', options: ['Il est très intelligent, voire brillant.', 'Il est très intelligent, voire même brillant.', 'Il est très intelligent, voire et même brillant.', 'Il est très intelligent, voire aussi brillant.'], answerIndex: 0 },
  { prompt: 'Choisissez la bonne phrase :', options: ['Ces décisions se sont succédé.', 'Ces décisions se sont succédées.', 'Ces décisions se sont succéders.', 'Ces décisions s’ont succédé.'], answerIndex: 0 }
];

const FRENCH_GENDER_QUIZ_DATA = [
  { prompt: 'Quel est le genre du mot :', subPrompt: '« APHTE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« AGRUME »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« AMALGAME »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« APOGÉE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ENTRACTE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« HÉMISPHÈRE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« OBÉLISQUE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« HALTÈRE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ÉLOGE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« PÉTALE »', expectedAnswer: 'MASCULIN' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ACNÉ »', expectedAnswer: 'FÉMININ' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ANAGRAMME »', expectedAnswer: 'FÉMININ' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ÉPITAPHE »', expectedAnswer: 'FÉMININ' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ÉCHAPPATOIRE »', expectedAnswer: 'FÉMININ' },
  { prompt: 'Quel est le genre du mot :', subPrompt: '« ORBITE »', expectedAnswer: 'FÉMININ' }
];

const FRENCH_PROVERBES_QUIZ_DATA = [
  { prompt: 'Que signifie la locution « In fine » ?', options: ['À la fin', 'Au tout premier abord', 'Sans date fixée', 'Par la force armée'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « Ipso facto » ?', options: ['Par le fait même', 'En vertu d’une loi ancienne', 'Pour le bien public', 'En citant mot pour mot'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « De facto » ?', options: ['Dans la réalité', 'Selon le texte de loi', 'À la suite d’un jugement', 'En dehors de la ville'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « Modus operandi » ?', options: ['Mode opératoire', 'Ordre du jour d’une séance', 'Période de transition', 'Modération des propos'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « Ad hoc » ?', options: ['Conçu pour un usage précis', 'Pris au hasard sans réflexion', 'Transmis de génération en génération', 'Valable pour une durée illimitée'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « Sine die » ?', options: ['Sans fixer de date ultérieure', 'En présence de témoins officiels', 'Sans aucune autorisation', 'Après mûre réflexion'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « Manu militari » ?', options: ['Par la force armée', 'Selon les règles administratives', 'De façon pacifiste', 'Avec l’accord du pouvoir civil'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « A priori » ?', options: ['Au premier abord', 'Une fois la démonstration faite', 'En connaissance de cause', 'Avec l’accord général'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « In situ » ?', options: ['Dans son milieu naturel', 'Dans un laboratoire isolé', 'Dans les archives officielles', 'De manière théorique'], answerIndex: 0 },
  { prompt: 'Que signifie la locution « Pro bono » ?', options: ['Pour l’intérêt général et gratuit', 'Dans le seul but d’enrichissement', 'Pour une durée limitée dans le temps', 'Avec la caution d’un tiers'], answerIndex: 0 },
  { prompt: 'Que signifie l’expression « Au doigt mouillé » ?', options: ['De façon très approximative', 'Avec une précision scientifique', 'Sans aucune hésitation', 'En suivant scrupuleusement les règles'], answerIndex: 0 },
  { prompt: 'Que signifie l’expression « Avoir du plomb dans l’aile » ?', options: ['Être très gravement menacé d’échec', 'Faire preuve d’une grande fermeté', 'Posséder d’importantes richesses', 'Faire un voyage très rapide'], answerIndex: 0 },
  { prompt: 'Que signifie « Aller sur la haquenée des cordeliers » ?', options: ['Se déplacer à pied avec un bâton', 'Voyager dans une voiture de luxe', 'Prendre la fuite précipitamment', 'Mener une vie d’austérité'], answerIndex: 0 },
  { prompt: 'Que signifie l’expression « Passer le Rubicon » ?', options: ['Prendre une décision irréversible', 'Régler un conflit pacifiquement', 'Échouer à un examen important', 'Parcourir une très longue distance'], answerIndex: 0 },
  { prompt: 'Complétez le proverbe : « Chat échaudé... »', options: ['craint l’eau froide.', 'ne rattrape jamais la souris.', 'revient toujours au galop.', 'ne craint pas la tempête.'], answerIndex: 0 },
  { prompt: 'Complétez le proverbe : « Qui veut tuer son chien... »', options: ['l’accuse de la rage.', 'lui refuse sa nourriture.', 'l’emmène très loin.', 'ne lui trouve aucun défaut.'], answerIndex: 0 },
  { prompt: 'Complétez le proverbe : « La plume est plus forte... »', options: ['que l’épée.', 'que le bouclier.', 'que la parole.', 'que le temps.'], answerIndex: 0 },
  { prompt: 'Complétez le proverbe : « Chacun voit midi... »', options: ['à sa porte.', 'à sa fenêtre.', 'dans son jardin.', 'sur son horloge.'], answerIndex: 0 },
  { prompt: 'Complétez le proverbe : « Qui veut voyager loin... »', options: ['ménage sa monture.', 'part de très bonne heure.', 'prend beaucoup de bagages.', 'évite les grands chemins.'], answerIndex: 0 },
  { prompt: 'Complétez le proverbe : « Charité bien ordonnée... »', options: ['commence par soi-même.', 'bénéficie à tout le monde.', 'ne coûte jamais rien.', 'est toujours récompensée.'], answerIndex: 0 }
];

// ---------------------------------------------------------
// CATEGORIES & OPTIONS
const MEMO_FICHES_LIST = [
  { id: 0, tabLabel: 'F1 : Nombres Pièges', title: 'Fiche 1 : Nombres Pièges & Divisibilité', render: () => renderMemoFiche1() },
  { id: 1, tabLabel: 'F2 : Fractions & %', title: 'Fiche 2 : Fractions, % & Variations', render: () => renderMemoFiche2() },
  { id: 2, tabLabel: 'F3 : Vitesses', title: 'Fiche 3 : Vitesses, Rattrapages & Débits', render: () => renderMemoFiche3() },
  { id: 3, tabLabel: 'F4 : Barycentre', title: 'Fiche 4 : Barycentre & Moyennes', render: () => renderMemoFiche4() },
  { id: 4, tabLabel: 'F5 : Géométrie', title: 'Fiche 5 : Géométrie & Triples Pythagoriciens', render: () => renderMemoFiche5() },
  { id: 5, tabLabel: 'F6 : Dénombrement', title: 'Fiche 6 : Dénombrement, Combinaisons & Triangles', render: () => renderMemoFiche6() },
  { id: 6, tabLabel: 'F7 : Astuces & Cubes', title: 'Fiche 7 : Astuces & Identités Remarquables', render: () => renderMemoFiche7() },
  { id: 7, tabLabel: 'F8 : Intérêts & Capitaux', title: 'Fiche 8 : Intérêts Simples & Composés (Capital K)', render: () => renderMemoFiche8() },
  { id: 8, tabLabel: 'F9 : Rattrapages & Trains', title: 'Fiche 9 : Rattrapages, Croisements & Trains', render: () => renderMemoFiche9() }
];

const CATEGORIES = {
  automatismes: {
    title: 'Automatismes & Calcul Mental (Direct)',
    options: [
      {
        id: 'memo_automatismes_all',
        title: 'Fiche : Carrés (1-25), Cubes (1-20), Puissances de 2 & Premiers (2-101)',
        desc: "Consultation complète : Carrés parfaits, cubes, puissances de 2 et 25 nombres premiers",
        type: 'memo_direct',
        renderMemo: () => renderMemoFicheAutomatismes()
      },
      {
        id: 'alphabet_ranks',
        title: 'Rang des lettres (A-Z)',
        desc: "Entraînement sur la position des 26 lettres (A=1 ... Z=26)",
        type: 'quiz',
        generateDeck: () => {
          const items = [];
          for (let i = 0; i < 26; i++) {
            items.push({ prompt: String.fromCharCode(65 + i), expectedAnswer: i + 1 });
          }
          return shuffleArray(items);
        }
      },
      {
        id: 'squares_all',
        title: 'Carrés (1 à 25)',
        desc: "Entraînement complet sur les carrés de 1² à 25²",
        type: 'quiz',
        generateDeck: () => {
          const items = [];
          for (let i = 1; i <= 25; i++) items.push({ prompt: `${i}²`, expectedAnswer: i * i });
          return shuffleArray(items);
        }
      },
      {
        id: 'cubes_all',
        title: 'Cubes (1 à 20)',
        desc: "Entraînement sur les cubes de 1³ à 20³",
        type: 'quiz',
        generateDeck: () => {
          const items = [];
          for (let i = 1; i <= 20; i++) items.push({ prompt: `${i}³`, expectedAnswer: i * i * i });
          return shuffleArray(items);
        }
      },
      {
        id: 'mult_all',
        title: 'Multiplications (1 à 20)',
        desc: "Entraînement complet sur les tables de 1 à 20",
        type: 'quiz',
        generateDeck: () => {
          const items = [];
          for (let i = 1; i <= 20; i++) {
            for (let j = 1; j <= 20; j++) items.push({ prompt: `${i} × ${j}`, expectedAnswer: i * j });
          }
          return shuffleArray(items);
        }
      },
      {
        id: 'primes_quiz',
        title: 'Nombres Premiers (2 à 101)',
        desc: "Quiz Oui / Non sur les 25 nombres premiers",
        type: 'quiz_yesno',
        generateDeck: () => {
          const items = [];
          for (let i = 2; i <= 101; i++) {
            items.push({ prompt: `${i}`, subPrompt: 'est-il premier ?', expectedAnswer: isPrime(i) ? 'OUI' : 'NON' });
          }
          return shuffleArray(items);
        }
      },
      {
        id: 'quiz_decomposition',
        title: 'Quiz Nombres à Décomposer (Faux Premiers)',
        desc: "Entraînement sur les faux premiers (51, 91, 119, 143, 221, 323, 437...)",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(DECOMPOSITION_QUIZ_DATA).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return {
              prompt: item.prompt,
              options: shuffledOpts,
              answerIndex: shuffledOpts.indexOf(correctText)
            };
          });
        }
      }
    ]
  },
  tm_comprehension: {
    title: '1. Compréhension de Texte TAGE MAGE',
    options: [
      { id: 'memo_tm_comp_0', title: 'Fiche 1 : Lecture Rapide & Mots-Clés', desc: "Techniques de lecture active et pivots argumentatifs", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_comprehension', 0) },
      { id: 'memo_tm_comp_1', title: 'Fiche 2 : Idée Principale vs Détail', desc: "Distinguer la thèse centrale des simples exemples", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_comprehension', 1) },
      { id: 'memo_tm_comp_2', title: 'Fiche 3 : Ton de l’Auteur & Inférences', desc: "Neutre, polemique, ironique et conclusions logiques", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_comprehension', 2) },
      { id: 'memo_tm_comp_3', title: 'Fiche 4 : Pièges de Reformulation', desc: "Détection des adverbes absolus à bannir (toujours, jamais)", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_comprehension', 3) },
      {
        id: 'quiz_tm_comprehension',
        title: 'Quiz QCM : Compréhension de Texte (Grand Manuel)',
        desc: "100+ Extraits de textes et questions d’analyse/inférence TAGE MAGE",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(TM_COMPREHENSION_QUESTIONS).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  tm_calcul: {
    title: '2. Calcul & Mathématiques TAGE MAGE',
    options: [
      { id: 'memo_tm_calc_0', title: 'Fiche 1 : Fractions & Pourcentages Composés', desc: "Tableau des 12 fractions usuelles et hausses/baisses", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_calcul', 0) },
      { id: 'memo_tm_calc_1', title: 'Fiche 2 : Vitesses V=D/T, Rattrapages & Robinets', desc: "Conversions m/s, vitesses relatives et débits cumulés", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_calcul', 1) },
      { id: 'memo_tm_calc_2', title: 'Fiche 3 : Barycentre & Mélanges de Solutions', desc: "Formule des concentrations et moyennes pondérées", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_calcul', 2) },
      { id: 'memo_tm_calc_3', title: 'Fiche 4 : Géométrie, Aires & Triples Pythagoriciens', desc: "Triples 3-4-5, 5-12-13, 8-15-17, cercles & diagonales", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_calcul', 3) },
      {
        id: 'quiz_tm_calcul',
        title: 'Quiz QCM : Calcul & Équations (Grand Manuel)',
        desc: "100+ Problèmes de calcul, pourcentages, vitesses, géométrie & probabilités",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(TM_CALCUL_QUESTIONS).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  tm_raisonnement: {
    title: '3. Raisonnement & Logique TAGE MAGE',
    options: [
      { id: 'memo_tm_rais_0', title: 'Fiche 1 : Logigrammes & Grilles de Déduction', desc: "Tableaux croisés 2D/3D et règle d exclusion", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_raisonnement', 0) },
      { id: 'memo_tm_rais_1', title: 'Fiche 2 : Diagrammes d’Ensembles & Venn', desc: "Inclusion, intersection et formule de l union N(A∪B)", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_raisonnement', 1) },
      { id: 'memo_tm_rais_2', title: 'Fiche 3 : Syllogismes & Contraposée Absolue', desc: "Règles de déduction et équivalences logiques", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_raisonnement', 2) },
      { id: 'memo_tm_rais_3', title: 'Fiche 4 : Épreuves de Vérité & Mensonge', desc: "Résolution par méthode des hypothèses disjonctives", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_raisonnement', 3) },
      {
        id: 'quiz_tm_raisonnement',
        title: 'Quiz QCM : Raisonnement & Logigrammes (Grand Manuel)',
        desc: "100+ Exercices de déduction, ordonnancement & vérité/mensonge",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(TM_RAISONNEMENT_QUESTIONS).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  tm_conditions_minimales: {
    title: '4. Conditions Minimales TAGE MAGE',
    options: [
      { id: 'memo_tm_cm_0', title: 'Fiche 1 : Les 5 Réponses A, B, C, D, E', desc: "Signification exacte et méthode en 3 étapes", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_conditions_minimales', 0) },
      { id: 'memo_tm_cm_1', title: 'Fiche 2 : Équations & Systèmes à n Inconnues', desc: "Vérification de l indépendance des équations", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_conditions_minimales', 1) },
      { id: 'memo_tm_cm_2', title: 'Fiche 3 : Géométrie & Figures Spatiales', desc: "Aire, périmètre et inconnues manquantes", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_conditions_minimales', 2) },
      { id: 'memo_tm_cm_3', title: 'Fiche 4 : Pièges Récurrents (x² = K & Signes)', desc: "Solutions multiples et fausses évidences", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_conditions_minimales', 3) },
      {
        id: 'quiz_tm_cm',
        title: 'Quiz QCM : Conditions Minimales (Grand Manuel)',
        desc: "100+ Questions officielles (1) & (2) - Réponses A, B, C, D, E",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(TM_CONDITIONS_MINIMALES_QUESTIONS).map(item => {
            const idx = item.answerIndex !== undefined ? item.answerIndex : 0;
            return { prompt: item.prompt, options: item.options, answerIndex: idx };
          });
        }
      }
    ]
  },
  tm_expression: {
    title: '5. Expression & Français TAGE MAGE',
    options: [
      { id: 'memo_tm_exp_0', title: 'Fiche 1 : Accords Complexes & Participe Passé', desc: "Tout, Même, Demi, Leur et verbes pronominaux", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_expression', 0) },
      { id: 'memo_tm_exp_1', title: 'Fiche 2 : Syntaxe & Tournures Fautives', desc: "Ne dites pas / dites, Pallier, Se rappeler, Après que", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_expression', 1) },
      { id: 'memo_tm_exp_2', title: 'Fiche 3 : Orthographe & Genre des Noms Pièges', desc: "Aphte, Agrume, Acné & consonnes doubles (Dilemme)", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_expression', 2) },
      { id: 'memo_tm_exp_3', title: 'Fiche 4 : Paronymes & Locutions Latines', desc: "In fine, Ipso facto, Ad hoc & distinctions fines", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_expression', 3) },
      {
        id: 'quiz_tm_expression',
        title: 'Quiz QCM : Expression & Pièges du Français (Grand Manuel)',
        desc: "100+ Questions de correction grammaticale, orthographe & syntaxe",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(TM_EXPRESSION_QUESTIONS).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  tm_logique: {
    title: '6. Logique Numérique & Alphabétique TAGE MAGE',
    options: [
      { id: 'memo_tm_log_0', title: 'Fiche 1 : Rang des Lettres A-Z & Méthode EJOTY', desc: "Position des 26 lettres et séries alphabétiques", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_logique', 0) },
      { id: 'memo_tm_log_1', title: 'Fiche 2 : Séries Numériques, Carrés & Cubes', desc: "Carrés parfaits (1-25), cubes (1-20) et Fibonacci", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_logique', 1) },
      { id: 'memo_tm_log_2', title: 'Fiche 3 : Astuce de la Mise à la Verticale', desc: "La méthode absolue pour résoudre les matrices 3x3", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_logique', 2) },
      { id: 'memo_tm_log_3', title: 'Fiche 4 : Détection des Leurres & Séries Doubles', desc: "Éliminer les pièges volontaires et involontaires", type: 'memo_direct', renderMemo: () => renderMemoTageMageCourse('tm_logique', 3) },
      {
        id: 'quiz_tm_logique',
        title: 'Quiz QCM : Logique Chiffres & Lettres (Grand Manuel)',
        desc: "100+ Séries numériques, alphabétiques & matrices 3x3 TAGE MAGE",
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(TM_LOGIQUE_QUESTIONS).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  tm_mock_exam: {
    title: '7. Test Blanc Officiel TAGE MAGE 90 Questions',
    options: [
      {
        id: 'quiz_tm_mock_exam_90',
        title: 'Test Blanc Complexe 90 Questions (Conditions Réelles)',
        desc: "15 Q Compréhension, 15 Calcul, 15 Raisonnement, 15 Conditions Min, 15 Expression & 15 Logique",
        type: 'quiz_qcm',
        generateDeck: () => generateOfficialTageMageMockExamDeck()
      }
    ]
  },
    fiches_memo: {
    title: 'Fiches Mémo de Révision (Complet)',
    options: [
      {
        id: 'memo_1_automatismes',
        title: 'Fiche 1 : Nombres Pièges & Divisibilité',
        desc: 'Alphabet, divisibilité et décompositions des faux premiers (51, 91, 119...)',
        type: 'memo',
        ficheIdx: 0,
        renderMemo: () => renderMemoFiche1()
      },
      {
        id: 'memo_2_fractions',
        title: 'Fiche 2 : Fractions, % & Variations',
        desc: 'Tableau des fractions usuelles (1/2 à 1/20), %, inversion X% de Y et variations inverses',
        type: 'memo',
        ficheIdx: 1,
        renderMemo: () => renderMemoFiche2()
      },
      {
        id: 'memo_3_vitesses',
        title: 'Fiche 3 : Vitesses, Rattrapages & Débits',
        desc: 'Formules V=D/T, conversions m/s, vitesse moyenne, rattrapage, croisement et travail partagé',
        type: 'memo',
        ficheIdx: 2,
        renderMemo: () => renderMemoFiche3()
      },
      {
        id: 'memo_4_barycentre',
        title: 'Fiche 4 : Barycentre & Moyennes',
        desc: 'Technique ultra-rapide du barycentre (mélanges) et moyennes pondérées',
        type: 'memo',
        ficheIdx: 3,
        renderMemo: () => renderMemoFiche4()
      },
      {
        id: 'memo_5_geometrie',
        title: 'Fiche 5 : Géométrie & Triples Pythagoriciens',
        desc: 'Triples 3-4-5, 5-12-13, 8-15-17, triangles particuliers, aires, volumes et polygone',
        type: 'memo',
        ficheIdx: 4,
        renderMemo: () => renderMemoFiche5()
      },
      {
        id: 'memo_6_denombrement',
        title: 'Fiche 6 : Dénombrement, Combinaisons & Triangles',
        desc: 'Permutations, arrangements A(n,k), combinaisons C(n,k), nombre de triangles & grilles',
        type: 'memo',
        ficheIdx: 5,
        renderMemo: () => renderMemoFiche6()
      },
      {
        id: 'memo_7_astuces',
        title: 'Fiche 7 : Astuces & Identités Remarquables',
        desc: 'Astuce de l\'écart, carrés en 5, mult par 11 & identités au carré/cube',
        type: 'memo',
        ficheIdx: 6,
        renderMemo: () => renderMemoFiche7()
      },
      {
        id: 'memo_8_interets',
        title: 'Fiche 8 : Intérêts Simples & Composés',
        desc: 'Capitalisation, placement, intérêts simples, composés (Capital K) & règle de 72',
        type: 'memo',
        ficheIdx: 7,
        renderMemo: () => renderMemoFiche8()
      },
      {
        id: 'memo_9_rattrapages',
        title: 'Fiche 9 : Rattrapages, Croisements & Trains',
        desc: 'Vitesses relatives, poursuite, croisement, trains, tunnels & rivières',
        type: 'memo',
        ficheIdx: 8,
        renderMemo: () => renderMemoFiche9()
      }
    ]
  },
  francais: {
    title: 'Français & Expression (Sous-tests 3 & 5)',
    options: [
      {
        id: 'memo_fr_grammaire',
        title: 'Fiche 1 : Grammaire, Accords & Participe Passé',
        desc: 'Accords sensibles (Tout, Même, Demi, Leur), Participe Passé & Subjonctif',
        type: 'memo_direct',
        renderMemo: () => renderMemoFicheGrammaire()
      },
      {
        id: 'memo_fr_syntaxe',
        title: 'Fiche 2 : Syntaxe, Pléonasmes & Paronymes',
        desc: 'Fautes de syntaxe, pléonasmes à bannir et paronymes pièges TAGE MAGE',
        type: 'memo_direct',
        renderMemo: () => renderMemoFicheSyntaxe()
      },
      {
        id: 'memo_fr_orthographe',
        title: 'Fiche 3 : Mots Difficiles & Genre des Noms',
        desc: 'Masculin / Féminin pièges (Aphte, Agrume, Acné...), consonnes doubles & orthographe',
        type: 'memo_direct',
        renderMemo: () => renderMemoFicheOrthographe()
      },
      {
        id: 'memo_fr_proverbes',
        title: 'Fiche 4 : Proverbes, Expressions & Locutions Latines',
        desc: 'Signification des proverbes classiques, expressions imagées & locutions latines',
        type: 'memo_direct',
        renderMemo: () => renderMemoFicheProverbes()
      },
      {
        id: 'quiz_fr_syntaxe',
        title: 'Quiz QCM : Ne Dites Pas / Syntaxe & Pléonasmes',
        desc: 'Entraînement sur les pièges de formulation et de syntaxe',
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(FRENCH_SYNTAX_QUIZ_DATA).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return {
              prompt: item.prompt,
              options: shuffledOpts,
              answerIndex: shuffledOpts.indexOf(correctText)
            };
          });
        }
      },
      {
        id: 'quiz_fr_gender',
        title: 'Quiz Genre : Masculin ou Féminin ?',
        desc: 'Boutons Masculin / Féminin pour s’entraîner sur les mots au genre piège',
        type: 'quiz_gender',
        generateDeck: () => {
          return shuffleArray(FRENCH_GENDER_QUIZ_DATA);
        }
      },
      {
        id: 'quiz_fr_proverbes',
        title: 'Quiz QCM : Proverbes, Expressions & Locutions Latines',
        desc: 'Quiz de vocabulaire, proverbes et locutions latines du GM',
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(FRENCH_PROVERBES_QUIZ_DATA).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return {
              prompt: item.prompt,
              options: shuffledOpts,
              answerIndex: shuffledOpts.indexOf(correctText)
            };
          });
        }
      }
    ]
  },
  iae_culture_g: {
    title: '1. Culture Générale, Éco & Management',
    options: [
      {
        id: 'memo_iae_cg_1',
        title: 'Fiche 1 : Économie, Finance & Institutions Internationales',
        desc: 'Grands auteurs (Smith, Keynes, Schumpeter), BCE, FMI, PIB & agrégats',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('culture_g', 0)
      },
      {
        id: 'memo_iae_cg_2',
        title: 'Fiche 2 : Management, Stratégie & Entreprises',
        desc: 'Taylor, Fayol, Mayo, Weber, 5 forces de Porter, matrices BCG & PESTEL',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('culture_g', 1)
      },
      {
        id: 'memo_iae_cg_3',
        title: 'Fiche 3 : Actualités Récentes (2023-2026) & IA',
        desc: 'Révolution de l\'IA (ChatGPT, Gemini, Mistral AI), JO Paris 2024 & BRICS',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('culture_g', 2)
      },
      {
        id: 'memo_iae_cg_4',
        title: 'Fiche 4 : Histoire, Droit, Arts & Géographie',
        desc: 'Institutions Vème République, capitales pièges & Prix Nobel récents',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('culture_g', 3)
      },
      {
        id: 'quiz_iae_culture_g_massive',
        title: 'Quiz QCM Géant : 1000+ Questions Culture G & Management',
        desc: 'Tirage aléatoire haute fréquence parmi la banque complète de questions SIM',
        type: 'quiz_qcm',
        generateDeck: () => getMassiveCultureGDeck(30)
      }
    ]
  },
  iae_francais: {
    title: '2. Compréhension & Expression en Français',
    options: [
      {
        id: 'memo_iae_fr_1',
        title: 'Fiche 1 : Grammaire & Accords Complexes',
        desc: 'Participe passé, Tout, Même, Demi, Leur, Ci-joint',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('francais', 0)
      },
      {
        id: 'memo_iae_fr_2',
        title: 'Fiche 2 : Syntaxe, Subjonctif & Tournures Fautives',
        desc: 'Ne dites pas / dites, concordance des temps et subjonctif',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('francais', 1)
      },
      {
        id: 'memo_iae_fr_3',
        title: 'Fiche 3 : Orthographe & Homonymes Pièges',
        desc: 'Consonnes doubles (dilemme), mots pièges & homonymes du SIM',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('francais', 2)
      },
      {
        id: 'memo_iae_fr_4',
        title: 'Fiche 4 : Vocabulaire Soutenu, Paronymes & Pléonasmes',
        desc: 'Démystifier/Démythifier, proscrire/prescrire & pléonasmes à bannir',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('francais', 3)
      },
      {
        id: 'quiz_iae_francais',
        title: 'Quiz QCM : Expression & Pièges de Français SIM',
        desc: 'Entraînement intensif sur les fautes de syntaxe, grammaire et vocabulaire',
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(IAE_FRENCH_QUIZ_DATA).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  iae_raisonnement: {
    title: '3. Raisonnement Logique & Numérique',
    options: [
      {
        id: 'memo_iae_log_1',
        title: 'Fiche 1 : Réflexes & Suites Numériques SIM',
        desc: 'Suites arithmétiques, géométriques, alternées, Fibonacci & carrés/cubes',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('raisonnement', 0)
      },
      {
        id: 'memo_iae_log_2',
        title: 'Fiche 2 : Calcul Mental Rapide & Pourcentages',
        desc: 'Variations successives (+20% puis -20%), coefficients multiplicateurs',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('raisonnement', 1)
      },
      {
        id: 'memo_iae_log_3',
        title: 'Fiche 3 : Vitesses, Croisements & Travail Partagé',
        desc: 'V=D/T, vitesses relatives, temps de rencontre & débits de robinets',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('raisonnement', 2)
      },
      {
        id: 'memo_iae_log_4',
        title: 'Fiche 4 : Syllogismes & Logique Déductive',
        desc: 'Contraposée, déductions d\'ensembles & pièges d\'inversion',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('raisonnement', 3)
      },
      {
        id: 'quiz_iae_raisonnement',
        title: 'Quiz QCM : Raisonnement Logique & Numérique',
        desc: 'Exercices chrono de suites numériques et problèmes de calcul',
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(IAE_LOGICAL_QUIZ_DATA).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  iae_anglais: {
    title: '4. Compréhension & Expression en Anglais',
    options: [
      {
        id: 'memo_iae_ang_1',
        title: 'Fiche 1 : Grammar & Verb Tenses SIM',
        desc: 'Present Perfect, Since vs For, Conditionals & Subjunctive',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('anglais', 0)
      },
      {
        id: 'memo_iae_ang_2',
        title: 'Fiche 2 : Essential Business Vocabulary',
        desc: 'Turnover, Shareholder/Stakeholder, Lay off, Merge, CEO/CFO',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('anglais', 1)
      },
      {
        id: 'memo_iae_ang_3',
        title: 'Fiche 3 : Top False Friends (Faux-Amis du SIM)',
        desc: 'Actually, Currently, Eventually, Notice, Comprehensive, Sympathetic',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('anglais', 2)
      },
      {
        id: 'memo_iae_ang_4',
        title: 'Fiche 4 : Phrasal Verbs & Corporate Expressions',
        desc: 'Put off, Call off, Carry out, Run out of, Cut down on',
        type: 'memo_direct',
        renderMemo: () => renderMemoIAECourse('anglais', 3)
      },
      {
        id: 'quiz_iae_anglais',
        title: 'Quiz QCM : English Grammar & Business Vocabulary',
        desc: 'Grammaire, vocabulaire des affaires et faux-amis type SIM',
        type: 'quiz_qcm',
        generateDeck: () => {
          return shuffleArray(IAE_ENGLISH_QUIZ_DATA).map(item => {
            const correctText = item.options[item.answerIndex];
            const shuffledOpts = shuffleArray(item.options);
            return { prompt: item.prompt, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
          });
        }
      }
    ]
  },
  iae_mock_exam: {
    title: '5. Épreuve Blanche Officielle 100 Questions',
    options: [
      {
        id: 'quiz_iae_mock_exam_100',
        title: 'Épreuve Blanche 100 Questions (Conditions Concours)',
        desc: '25 questions de Culture G, 25 de Français, 25 de Logique & 25 d\'Anglais',
        type: 'quiz_qcm',
        generateDeck: () => generateOfficialIAEMockExamDeck()
      }
    ]
  }
};



// ---------------------------------------------------------
// FRENCH VISUAL MEMO SHEET RENDERERS (GM EXCLUSIVE)
// ---------------------------------------------------------

function renderMemoFicheGrammaire() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Accords délicats -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Accords Délicats du TAGE MAGE</div>
        <div class="math-desc-list">
          <p>• <strong>TOUT :</strong></p>
          <p>&nbsp;&nbsp; - Adjectif ➔ S'accorde : <em>Tout homme, tous les jours, toutes les femmes.</em></p>
          <p>&nbsp;&nbsp; - Adverbe (signifie « tout à fait ») ➔ Invariable, <strong>sauf</strong> devant un adjectif féminin commençant par une consonne ou h aspiré (ex: <em>Elle est tout étonnée / Elle est toute contente</em>).</p>

          <p style="margin-top:8px;">• <strong>MÊME :</strong></p>
          <p>&nbsp;&nbsp; - Adjectif (après l'article ou le nom avec trait d'union) ➔ S'accorde (ex: <em>Eux-mêmes, les mêmes causes</em>).</p>
          <p>&nbsp;&nbsp; - Adverbe (signifie « aussi » / « y compris ») ➔ Invariable (ex: <em>Même les enfants le savent</em>).</p>

          <p style="margin-top:8px;">• <strong>DEMI / NUE :</strong></p>
          <p>&nbsp;&nbsp; - Devant le nom avec trait d'union ➔ Invariable (ex: <em>Une demi-heure, nu-tête</em>).</p>
          <p>&nbsp;&nbsp; - Après le nom ➔ S'accorde en genre uniquement pour demi (ex: <em>Deux heures et demie, la tête nue</em>).</p>

          <p style="margin-top:8px;">• <strong>LEUR :</strong></p>
          <p>&nbsp;&nbsp; - Pronom personnel (devant un verbe) ➔ Invariable (ex: <em>Je leur ai parlé</em>).</p>
          <p>&nbsp;&nbsp; - Adjectif possessif (devant un nom) ➔ Prend un « s » au pluriel (ex: <em>Leurs idées</em>).</p>

          <p style="margin-top:8px;">• <strong>CI-JOINT / CI-INCLUS :</strong></p>
          <p>&nbsp;&nbsp; - En début de phrase ou devant un nom sans article ➔ Invariable (ex: <em>Ci-joint les pièces</em>).</p>
          <p>&nbsp;&nbsp; - Placé après le nom ➔ S'accorde (ex: <em>Les pièces ci-jointes</em>).</p>
        </div>
      </div>

      <!-- Card 2: Accord du Participe Passé -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Accord du Participe Passé</div>
        <div class="math-desc-list">
          <p>• <strong>Avec l'auxiliaire ÊTRE :</strong> S'accorde avec le sujet en genre et en nombre (ex: <em>Elles sont arrivées</em>).</p>
          <p>• <strong>Avec l'auxiliaire AVOIR :</strong> S'accorde avec le COD <strong>uniquement si le COD est placé avant le verbe</strong> (ex: <em>La lettre qu'il a écrite / Il a écrit une lettre</em>).</p>
          <p>• <strong>Verbes Pronominaux (se succéder, se plaire...) :</strong> Pas d'accord si le pronom « se » est COI (ex: <em>Ils se sont parlé, elles se sont succédé</em> ➔ pas de e/s !).</p>
          <p>• <strong>Suivi d'un Infinitif :</strong> S'accorde si le sujet fait l'action de l'infinitif (ex: <em>La chanteuse que j'ai entendue chanter</em> / <em>La chanson que j'ai entendu chanter</em>).</p>
        </div>
      </div>

      <!-- Card 3: Concordance des temps & Subjonctif -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Subjonctif vs Indicatif & Concordance</div>
        <div class="math-desc-list">
          <p>• <strong>BIEN QUE + Subjonctif :</strong> <em>Bien qu'il pleuve...</em> (JAMAIS « malgré que » !)</p>
          <p>• <strong>APRÈS QUE + Indicatif :</strong> <em>Après qu'il est venu...</em> (et non « soit venu » !)</p>
          <p>• <strong>AVANT QUE + Subjonctif (+ ne explétif) :</strong> <em>Avant qu'il ne soit trop tard.</em></p>
          <p>• <strong>Règle du SI :</strong> Si + Imparfait ➔ Conditionnel Présent (ex: <em>Si j'avais su, je serais venu</em> / JAMAIS de « si + raï » !).</p>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 1 (Français) : Grammaire & Accords', subtitle: 'Accords sensibles, participe passé et subjonctif', html };
}

function renderMemoFicheSyntaxe() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Ne Dites Pas... Mais Dites... -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Ne Dites Pas... Mais Dites... (Formulations GM)</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Malgré qu'il soit parti</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Bien qu'il soit parti</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Au jour d'aujourd'hui</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Aujourd'hui</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Pallié au problème</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Pallié le problème</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Se rappeler de quelque chose</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Se rappeler quelque chose</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Voire même</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Voire (ou même)</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Au final</span>
            <span style="color:#2E7D32; font-weight:800;">✓ En conclusion / Enfin</span>
          </div>
        </div>
      </div>

      <!-- Card 2: Pléonasmes Fréquents -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Pléonasmes Fréquents à Bannir au TAGE MAGE</div>
        <div class="math-desc-list">
          <p>• <strong>Monter en haut / Descendre en bas :</strong> Monter ou descendre suffit.</p>
          <p>• <strong>Panacée universelle :</strong> La panacée est déjà un remède universel.</p>
          <p>• <strong>Résumer brièvement :</strong> Un résumé est par définition bref.</p>
          <p>• <strong>Collaborer ensemble :</strong> Collaborer signifie déjà travailler ensemble.</p>
          <p>• <strong>S'avérer vrai :</strong> S'avérer vient du latin <em>verus</em> (vrai).</p>
          <p>• <strong>Prévoir d'avance :</strong> Prévoir signifie déjà voir en avance.</p>
          <p>• <strong>Unanimité totale :</strong> L'unanimité implique déjà 100% des avis.</p>
        </div>
      </div>

      <!-- Card 3: Paronymes Pièges -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Paronymes Pièges du TAGE MAGE</div>
        <div class="math-desc-list">
          <p>• <strong>Cérébral / Cervical :</strong> Cérébral (cerveau) vs Cervical (nuque).</p>
          <p>• <strong>Démystifier / Démythifier :</strong> Démystifier (détruire une supercherie) vs Démythifier (enlever le caractère mythique).</p>
          <p>• <strong>Desceller / Déceler :</strong> Desceller (ouvrir le scellé) vs Déceler (découvrir/repérer).</p>
          <p>• <strong>Dénuer / Dénuder :</strong> Dénuer (dépourvoir) vs Dénuder (déshabiller/mettre à nu).</p>
          <p>• <strong>Collision / Collusion :</strong> Collision (choc brutal) vs Collusion (entente secrète).</p>
          <p>• <strong>Cinéphile / Cynophile :</strong> Cinéphile (cinéma) vs Cynophile (chiens).</p>
          <p>• <strong>Crédule / Crédible :</strong> Crédule (naïf qui croit tout) vs Crédible (que l'on peut croire).</p>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 2 (Français) : Syntaxe, Pléonasmes & Paronymes', subtitle: 'Fautes de syntaxe, pléonasmes et nuances de paronymes', html };
}

function renderMemoFicheOrthographe() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Mots Masculins Pièges -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Mots MASCULINS Pièges au TAGE MAGE</div>
        <p class="math-desc-list" style="margin-bottom:8px;">Ces mots sont <strong>masculins</strong> (dites : UN agrume, UN aphte...) :</p>
        <div class="gender-grid">
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>agrume</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>aphte</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>augure</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>entracte</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>hémisphère</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>obélisque</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>amalgame</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>apogée</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>cerne</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>épilogue</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>intervalle</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>opuscule</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>amiante</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>appendice</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>effluve</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>équinoxe</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>ivoire</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>pétale</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>antidote</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>armistice</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>éloge</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>haltère</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>méandre</strong></div>
          <div class="gender-pill masculin"><span class="article">UN</span> <strong>tentacule</strong></div>
        </div>
      </div>

      <!-- Card 2: Mots Féminins Pièges -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Mots FÉMININS Pièges</div>
        <p class="math-desc-list" style="margin-bottom:8px;">Ces mots sont <strong>féminins</strong> (dites : UNE acné, UNE anagramme...) :</p>
        <div class="gender-grid">
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>acné</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>anagramme</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>atmosphère</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>écritoire</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>épitaphe</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>échappatoire</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>nacre</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>orbite</strong></div>
          <div class="gender-pill feminin"><span class="article">UNE</span> <strong>octave</strong></div>
        </div>
      </div>

      <!-- Card 3: Mots Difficiles à Orthographier -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Mots Difficiles & Consonnes Doubles</div>
        <div class="math-desc-list">
          <p>• <strong>Occurrence :</strong> 2 c et 2 r (et non pas *occurence*).</p>
          <p>• <strong>Dilemme :</strong> avec un m et un m (pas de *dilemne*).</p>
          <p>• <strong>Cauchemar :</strong> sans « t » à la fin.</p>
          <p>• <strong>Larynx / Pharynx / Laryngite :</strong> y et x.</p>
          <p>• <strong>Magasin vs Magazine :</strong> Magasin (commerce) vs Magazine (revue).</p>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 3 (Français) : Mots Difficiles & Genre des Noms', subtitle: 'Mots masculins/féminins pièges et orthographe courante', html };
}

function renderMemoFicheProverbes() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Proverbes Clés du GM -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Proverbes Indispensables du TAGE MAGE</div>
        <div class="math-desc-list">
          <p>• <strong>Chacun voit midi à sa porte :</strong> Chacun analyse les faits selon sa propre situation.</p>
          <p>• <strong>Charité bien ordonnée commence par soi-même :</strong> Il faut d'abord penser à soi avant d'aider autrui.</p>
          <p>• <strong>Chassez le naturel, il revient au galop :</strong> Nul ne peut masquer sa vraie nature.</p>
          <p>• <strong>Chat échaudé craint l'eau froide :</strong> Une mauvaise expérience rend méfiant.</p>
          <p>• <strong>La plume est plus forte que l'épée :</strong> Les mots sont plus puissants que les armes.</p>
          <p>• <strong>Qui veut tuer son chien l'accuse de la rage :</strong> On trouve toujours un prétexte pour nuire.</p>
          <p>• <strong>Qui veut voyager loin ménage sa monture :</strong> Pour réussir un projet long, il faut savoir mesurer ses efforts.</p>
        </div>
      </div>

      <!-- Card 2: Expressions Françaises -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Expressions Françaises & Sens Caché</div>
        <div class="math-desc-list">
          <p>• <strong>Au doigt mouillé :</strong> De façon très approximative.</p>
          <p>• <strong>Autant que faire se peut :</strong> Dans la mesure du possible.</p>
          <p>• <strong>Avoir du plomb dans l'aile :</strong> Être gravement menacé d'échec.</p>
          <p>• <strong>Aller sur la haquenée des cordeliers :</strong> Se déplacer à pied avec un bâton.</p>
          <p>• <strong>Passer le Rubicon :</strong> Prendre une décision irréversible.</p>
          <p>• <strong>S'entendre comme larrons en foire :</strong> Être en parfaite complicité.</p>
        </div>
      </div>

      <!-- Card 3: Locutions Latines Fréquentes au GM -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Locutions Latines Fréquentes au TAGE MAGE</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
          <div class="math-table-cell"><strong>In fine</strong> <span>À la fin</span></div>
          <div class="math-table-cell"><strong>De facto</strong> <span>Dans la réalité</span></div>
          <div class="math-table-cell"><strong>A priori</strong> <span>Au premier abord</span></div>
          <div class="math-table-cell"><strong>Ipso facto</strong> <span>Par le fait même</span></div>
          <div class="math-table-cell"><strong>In situ</strong> <span>Dans son milieu naturel</span></div>
          <div class="math-table-cell"><strong>Alma mater</strong> <span>Université de formation</span></div>
          <div class="math-table-cell"><strong>Sine die</strong> <span>Sans date ultérieure</span></div>
          <div class="math-table-cell"><strong>Ad hoc</strong> <span>Conçu pour un usage précis</span></div>
          <div class="math-table-cell"><strong>Manu militari</strong> <span>Par la force armée</span></div>
          <div class="math-table-cell"><strong>Modus operandi</strong> <span>Mode opératoire</span></div>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 4 (Français) : Proverbes, Expressions & Locutions Latines', subtitle: 'Proverbes, expressions imagées et locutions latines du GM', html };
}

// ---------------------------------------------------------
// SCORE IAE MESSAGE MEMO SHEET RENDERERS
// ---------------------------------------------------------

function renderMemoIAE1() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="math-card-visual">
        <div class="math-card-title">1. Grands Auteurs & Théories du Management</div>
        <div class="math-desc-list">
          <p>• <strong>Frederick Taylor :</strong> OST (Organisation Scientifique du Travail), division verticale/horizontale, salaire au rendement.</p>
          <p>• <strong>Henri Fayol :</strong> Fonction administrative & 5 principes POCCC (Prévoir, Organiser, Commander, Coordonner, Contrôler).</p>
          <p>• <strong>Elton Mayo :</strong> École des Relations Humaines (Expérience de Hawthorne) ➔ importance du climat social et de la reconnaissance.</p>
          <p>• <strong>Max Weber :</strong> Modèle de l'organisation bureaucratique rationnelle-légale (règles écrites, neutralité, hiérarchie).</p>
          <p>• <strong>Henry Mintzberg :</strong> 10 rôles du manager (Interpersonnels, Informationnels, Décisionnels) et structures organisationnelles.</p>
          <p>• <strong>Peter Drucker :</strong> DPO (Direction Par Objectifs) et concept d’entreprise moderne axée sur l’innovation.</p>
        </div>
      </div>
      <div class="math-card-visual">
        <div class="math-card-title">2. Repères Économiques & Institutions</div>
        <div class="math-desc-list">
          <p>• <strong>BCE (Banque Centrale Européenne) :</strong> Siège à Francfort. Objectif principal : stabilité des prix (inflation ≤ 2%).</p>
          <p>• <strong>FMI (Fonds Monétaire International) :</strong> Siège à Washington. Stabilité financière et prêts aux pays en crise.</p>
          <p>• <strong>OMC (Organisation Mondiale du Commerce) :</strong> Siège à Genève. Régule les échanges commerciaux internationaux.</p>
          <p>• <strong>PIB & Inflation :</strong> PIB = somme des valeurs ajoutées sur le territoire. Inflation = hausse générale et durable des prix.</p>
        </div>
      </div>
    </div>
  `;
  return { title: 'Fiche IAE 1 : Culture G, Économie & Management', subtitle: 'Auteurs fondateurs, institutions mondiales & repères éco', html };
}

function renderMemoIAE2() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="math-card-visual">
        <div class="math-card-title">1. Fautes de Syntaxe & Tournures à Bannir</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Pallier au problème</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Pallier le problème</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Après qu'il soit venu</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Après qu'il est venu</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Malgré que + verbe</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Bien que + subjonctif</span>
          </div>
          <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
            <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Au jour d'aujourd'hui</span>
            <span style="color:#2E7D32; font-weight:800;">✓ Aujourd'hui / À ce jour</span>
          </div>
        </div>
      </div>
      <div class="math-card-visual">
        <div class="math-card-title">2. Accords & Orthographe Pièges</div>
        <div class="math-desc-list">
          <p>• <strong>Participe passé des verbes pronominaux :</strong> <em>Ils se sont parlé, elles se sont succédé</em> (JAMAIS d'accord car le pronom est COI !).</p>
          <p>• <strong>Adjectifs de couleur composés / noms :</strong> <em>Des chaussures marron, des vestes bleu marine</em> (Invariables !).</p>
          <p>• <strong>Mots pièges :</strong> <em>Un dilemme</em> (2 'm'), <em>Un acompte</em> (1 'c'), <em>Exhaustif</em> (qui épuise un sujet), <em>Pécuniaire</em> (relatif à l'argent).</p>
        </div>
      </div>
    </div>
  `;
  return { title: 'Fiche IAE 2 : Français & Expression', subtitle: 'Règles d\'accord, barbarismes et vocabulaire du SIM', html };
}

function renderMemoIAE3() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="math-card-visual">
        <div class="math-card-title">1. Réflexes pour les Suites Numériques SIM</div>
        <div class="math-desc-list">
          <p>• <strong>Suite arithmétique :</strong> Écart constant (+k ou -k). Ex: 3, 7, 11, 15 (+4).</p>
          <p>• <strong>Suite géométrique :</strong> Raison multiplicative (×k ou ÷k). Ex: 2, 6, 18, 54 (×3).</p>
          <p>• <strong>Raison variable (Premier / Deuxième niveau) :</strong> Écarts qui augmentent (+1, +2, +3, +4...).</p>
          <p>• <strong>Suite de Fibonacci :</strong> U<sub>n</sub> = U<sub>n-1</sub> + U<sub>n-2</sub>. Ex: 1, 1, 2, 3, 5, 8, 13, 21...</p>
          <p>• <strong>Suites croisées / alternées :</strong> Un terme sur deux suit sa propre logique.</p>
        </div>
      </div>
      <div class="math-card-visual">
        <div class="math-card-title">2. Calcul Rapide & Variations Pourcentages</div>
        <div class="math-desc-list">
          <p>• <strong>Variation successive +x% puis -y% :</strong> Multiplier par (1 + x/100) × (1 - y/100). Ex: +20% puis -20% ➔ 1.2 × 0.8 = 0.96 (soit -4%).</p>
          <p>• <strong>Vitesse moyenne V = D / T :</strong> Si les distances sont égales, V<sub>moy</sub> est la moyenne harmonique des vitesses.</p>
        </div>
      </div>
    </div>
  `;
  return { title: 'Fiche IAE 3 : Raisonnement Logique & Numérique', subtitle: 'Suites numériques, logique déductive & calculs rapides', html };
}

function renderMemoIAE4() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="math-card-visual">
        <div class="math-card-title">1. Essential Business English Vocabulary</div>
        <div class="math-desc-list">
          <p>• <strong>Turnover :</strong> Chiffre d'affaires (ou rotation du personnel selon contexte).</p>
          <p>• <strong>Shareholder / Stakeholder :</strong> Actionnaire / Partie prenante (salariés, clients, état).</p>
          <p>• <strong>Lay off / Merge :</strong> Licencier pour raisons économiques / Fusionner (sociétés).</p>
          <p>• <strong>Core business / Benchmark :</strong> Cœur de métier / Analyse comparative des meilleures pratiques.</p>
        </div>
      </div>
      <div class="math-card-visual">
        <div class="math-card-title">2. Top False Friends (Faux-Amis du SIM)</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
          <div class="math-table-cell"><strong>Actually</strong> <span>En fait / En réalité</span></div>
          <div class="math-table-cell"><strong>Currently</strong> <span>Actuellement / À ce jour</span></div>
          <div class="math-table-cell"><strong>Eventually</strong> <span>Finalement / À terme</span></div>
          <div class="math-table-cell"><strong>Notice</strong> <span>Avis / Préavis / Remarquer</span></div>
          <div class="math-table-cell"><strong>Opportunity</strong> <span>Occasion / Opportunité</span></div>
          <div class="math-table-cell"><strong>Comprehensive</strong> <span>Exhaustif / Complet</span></div>
        </div>
      </div>
    </div>
  `;
  return { title: 'Fiche IAE 4 : Business English & Grammar', subtitle: 'Vocabulaire des affaires, faux-amis et grammaire SIM', html };
}

// ---------------------------------------------------------
// VISUAL MEMO SHEET RENDERERS (COMPREHENSIVE & SOBRE)
// ---------------------------------------------------------

function renderMemoFicheAutomatismes() {
  const primesList = PRIME_NUMBERS.map(n => `<div class="math-table-cell" style="justify-content:center; font-weight:800; color:#0051A8;">${n}</div>`).join('');
  let squaresHtml = '';
  for (let i = 1; i <= 25; i++) {
    squaresHtml += `<div class="math-table-cell">${i}² <strong>${i*i}</strong></div>`;
  }
  let cubesHtml = '';
  for (let i = 1; i <= 20; i++) {
    cubesHtml += `<div class="math-table-cell">${i}³ <strong>${i*i*i}</strong></div>`;
  }
  const powersTwoArr = ['2¹', '2²', '2³', '2⁴', '2⁵', '2⁶', '2⁷', '2⁸', '2⁹', '2¹⁰'];
  let powersTwoHtml = '';
  for (let i = 1; i <= 10; i++) {
    powersTwoHtml += `<div class="math-table-cell">${powersTwoArr[i-1]} <strong>${Math.pow(2, i)}</strong></div>`;
  }

  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Carrés de 1 à 25 -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Carrés Parfaits (1² à 25²)</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));">
          ${squaresHtml}
        </div>
      </div>

      <!-- Card 2: Cubes de 1 à 20 -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Cubes Parfaits (1³ à 20³)</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));">
          ${cubesHtml}
        </div>
      </div>

      <!-- Card 3: Puissances de 2 (2¹ à 2¹⁰) -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Puissances de 2 (2¹ à 2¹⁰)</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));">
          ${powersTwoHtml}
        </div>
      </div>

      <!-- Card 4: Nombres Premiers de 2 à 101 -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Nombres Premiers (2 à 101 - 25 Nombres)</div>
        <p class="math-desc-list" style="margin-bottom:8px;">Les 25 nombres premiers inférieurs à 100 à connaître par cœur :</p>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));">
          ${primesList}
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche : Automatismes (Carrés, Cubes, Puissances de 2 & Premiers)', subtitle: 'Carrés (1-25), Cubes (1-20), 2ⁿ (2¹-2¹⁰) & Nombres Premiers (2-101)', html };
}

function renderMemoFiche1() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Critères de Divisibilité -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Critères de Divisibilité Rapides</div>
        <div class="math-desc-list">
          <p>• <strong>Par 2 :</strong> Le nombre se termine par un chiffre pair (0, 2, 4, 6, 8).</p>
          <p>• <strong>Par 3 :</strong> La somme des chiffres est un multiple de 3.</p>
          <p>• <strong>Par 4 :</strong> Le nombre formé par les 2 derniers chiffres est divisible par 4.</p>
          <p>• <strong>Par 5 :</strong> Le nombre se termine par 0 ou 5.</p>
          <p>• <strong>Par 9 :</strong> La somme des chiffres est un multiple de 9.</p>
          <p>• <strong>Par 11 :</strong> La différence entre la somme des chiffres de rang pair et de rang impair est 0 ou un multiple de 11.</p>
        </div>
      </div>

      <!-- Card 2: Faux Premiers -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Nombres Pièges à Décomposer (Faux Premiers)</div>
        <p class="math-desc-list" style="margin-bottom:10px;">Ces nombres semblent premiers mais se décomposent fréquemment au TAGE MAGE :</p>
        <div class="math-table-grid">
          <div class="math-table-cell">51 <span>= <strong>17 × 3</strong></span></div>
          <div class="math-table-cell">57 <span>= <strong>19 × 3</strong></span></div>
          <div class="math-table-cell">65 <span>= <strong>13 × 5</strong></span></div>
          <div class="math-table-cell">85 <span>= <strong>17 × 5</strong></span></div>
          <div class="math-table-cell">91 <span>= <strong>13 × 7</strong></span></div>
          <div class="math-table-cell">119 <span>= <strong>17 × 7</strong></span></div>
          <div class="math-table-cell">133 <span>= <strong>19 × 7</strong></span></div>
          <div class="math-table-cell">143 <span>= <strong>11 × 13</strong></span></div>
          <div class="math-table-cell">187 <span>= <strong>17 × 11</strong></span></div>
          <div class="math-table-cell">209 <span>= <strong>11 × 19</strong></span></div>
          <div class="math-table-cell">221 <span>= <strong>13 × 17</strong></span></div>
          <div class="math-table-cell">247 <span>= <strong>13 × 19</strong></span></div>
          <div class="math-table-cell">253 <span>= <strong>23 × 11</strong></span></div>
          <div class="math-table-cell">289 <span>= <strong>17²</strong></span></div>
          <div class="math-table-cell">299 <span>= <strong>23 × 13</strong></span></div>
          <div class="math-table-cell">323 <span>= <strong>19 × 17</strong></span></div>
          <div class="math-table-cell">361 <span>= <strong>19²</strong></span></div>
          <div class="math-table-cell">391 <span>= <strong>23 × 17</strong></span></div>
          <div class="math-table-cell">437 <span>= <strong>19 × 23</strong></span></div>
          <div class="math-table-cell">529 <span>= <strong>23²</strong></span></div>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 1 : Nombres Pièges & Divisibilité', subtitle: 'Critères de divisibilité et décompositions des faux premiers', html };
}

function renderMemoFiche2() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Tableau des Fractions Usuelles -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Fractions Usuelles, Décimaux & Pourcentages</div>
        <p class="math-desc-list" style="margin-bottom:8px;">Convertissez instantanément les fractions en décimaux et pourcentages :</p>
        
        <div class="frac-grid">
          <div class="frac-cell"><span class="frac-eq">${f(1, 2)}</span> <span class="frac-val">0,5 = 50%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 3)}</span> <span class="frac-val">0,333 = 33,3%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(2, 3)}</span> <span class="frac-val">0,666 = 66,6%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 4)}</span> <span class="frac-val">0,25 = 25%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(3, 4)}</span> <span class="frac-val">0,75 = 75%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 5)}</span> <span class="frac-val">0,20 = 20%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(2, 5)}</span> <span class="frac-val">0,40 = 40%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(3, 5)}</span> <span class="frac-val">0,60 = 60%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(4, 5)}</span> <span class="frac-val">0,80 = 80%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 6)}</span> <span class="frac-val">0,167 = 16,7%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(5, 6)}</span> <span class="frac-val">0,833 = 83,3%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 7)}</span> <span class="frac-val">≈ 0,143 = 14,3%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(2, 7)}</span> <span class="frac-val">≈ 0,286 = 28,6%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(3, 7)}</span> <span class="frac-val">≈ 0,429 = 42,9%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(4, 7)}</span> <span class="frac-val">≈ 0,571 = 57,1%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(5, 7)}</span> <span class="frac-val">≈ 0,714 = 71,4%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(6, 7)}</span> <span class="frac-val">≈ 0,857 = 85,7%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 8)}</span> <span class="frac-val">0,125 = 12,5%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(3, 8)}</span> <span class="frac-val">0,375 = 37,5%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(5, 8)}</span> <span class="frac-val">0,625 = 62,5%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(7, 8)}</span> <span class="frac-val">0,875 = 87,5%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 9)}</span> <span class="frac-val">0,111 = 11,1%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 10)}</span> <span class="frac-val">0,100 = 10,0%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 11)}</span> <span class="frac-val">0,0909 = 9,09%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 12)}</span> <span class="frac-val">0,0833 = 8,33%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 16)}</span> <span class="frac-val">0,0625 = 6,25%</span></div>
          <div class="frac-cell"><span class="frac-eq">${f(1, 20)}</span> <span class="frac-val">0,050 = 5,0%</span></div>
        </div>
      </div>

      <!-- Card 2: Règles sur les Fractions -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Opérations sur les Fractions</div>
        <div class="math-desc-list">
          <p>• <strong>Addition / Soustraction :</strong> Réduire au même dénominateur</p>
          <div class="math-formula-box-visual">
            ${f('a', 'b')} + ${f('c', 'd')} = ${f('a · d + c · b', 'b · d')}
          </div>

          <p>• <strong>Multiplication :</strong> Multiplier les numérateurs et dénominateurs</p>
          <div class="math-formula-box-visual">
            ${f('a', 'b')} × ${f('c', 'd')} = ${f('a · c', 'b · d')}
          </div>

          <p>• <strong>Division :</strong> Multiplier par la fraction inverse</p>
          <div class="math-formula-box-visual">
            ${f(f('a','b'), f('c','d'))} = ${f('a', 'b')} × ${f('d', 'c')} = ${f('a · d', 'b · c')}
          </div>
        </div>
      </div>

      <!-- Card 3: Astuces Pourcentages -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Inversion de Pourcentages & CM</div>
        <div class="math-desc-list">
          <p>• <strong>Astuce d'inversion :</strong> X% de Y = Y% de X</p>
          <div class="math-formula-box-visual" style="font-size:15px; color:#1D1D1F;">
            Exemple : 16% de 25 = 25% de 16 = ${f(1, 4)} × 16 = <strong>4</strong>
          </div>

          <p style="margin-top:10px;">• <strong>Coefficients Multiplicateurs (CM) :</strong></p>
          <p>&nbsp;&nbsp; - Hausse de x% ⟹ CM = 1 + ${f('x', 100)} &nbsp;(ex: +20% ⟹ × 1,20)</p>
          <p>&nbsp;&nbsp; - Baisse de x% ⟹ CM = 1 - ${f('x', 100)} &nbsp;(ex: -15% ⟹ × 0,85)</p>
          <p>&nbsp;&nbsp; - Variations successives ⟹ CM<sub>total</sub> = CM₁ × CM₂ × CM₃</p>
        </div>
      </div>

      <!-- Card 4: Variations Inverses -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Variations Inverses (Principe du retour au départ)</div>
        <p class="math-desc-list" style="margin-bottom:12px;">Pour annuler une hausse ou une baisse et revenir au prix initial :</p>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="background:#F9F9FB; padding:12px 14px; border-radius:12px; font-size:14px; font-weight:700; border:1px solid rgba(0,0,0,0.04);">
            Si Hausse de + ${f(1, 'n')} &nbsp;⟹&nbsp; Baisse nécessaire de - ${f(1, 'n + 1')}
          </div>
          <div class="math-desc-list" style="padding-left:8px;">
            <p>• +100% (+${f(1,1)}) ⟹ Baisse de -50% (-${f(1,2)})</p>
            <p>• +50% (+${f(1,2)}) ⟹ Baisse de -33,3% (-${f(1,3)})</p>
            <p>• +33,3% (+${f(1,3)}) ⟹ Baisse de -25% (-${f(1,4)})</p>
            <p>• +25% (+${f(1,4)}) ⟹ Baisse de -20% (-${f(1,5)})</p>
            <p>• +20% (+${f(1,5)}) ⟹ Baisse de -16,7% (-${f(1,6)})</p>
          </div>

          <div style="background:#F9F9FB; padding:12px 14px; border-radius:12px; font-size:14px; font-weight:700; border:1px solid rgba(0,0,0,0.04); margin-top:6px;">
            Si Baisse de - ${f(1, 'n')} &nbsp;⟹&nbsp; Hausse nécessaire de + ${f(1, 'n - 1')}
          </div>
          <div class="math-desc-list" style="padding-left:8px;">
            <p>• -50% (-${f(1,2)}) ⟹ Hausse de +100% (+${f(1,1)})</p>
            <p>• -33,3% (-${f(1,3)}) ⟹ Hausse de +50% (+${f(1,2)})</p>
            <p>• -25% (-${f(1,4)}) ⟹ Hausse de +33,3% (+${f(1,3)})</p>
            <p>• -20% (-${f(1,5)}) ⟹ Hausse de +25% (+${f(1,4)})</p>
          </div>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 2 : Fractions, % & Variations', subtitle: 'Tableau des fractions, %, inversion & variations inverses', html };
}

function renderMemoFiche3() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Vitesse, Distance, Temps -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Vitesse, Distance & Temps (Formules de Base)</div>
        
        <div class="math-formula-box-visual">
          V = ${f('D', 'T')} &nbsp;&nbsp;|&nbsp;&nbsp; T = ${f('D', 'V')} &nbsp;&nbsp;|&nbsp;&nbsp; D = V × T
        </div>

        <div class="math-desc-list" style="margin-top:12px;">
          <p>• <strong>Conversion km/h ↔ m/s :</strong></p>
          <div style="background:#F9F9FB; padding:10px 14px; border-radius:10px; text-align:center; font-weight:700; margin:6px 0;">
            1 m/s = 3,6 km/h &nbsp;&nbsp;(Pour km/h ➔ m/s : ÷ 3,6 &nbsp;|&nbsp; Pour m/s ➔ km/h : × 3,6)
          </div>
        </div>
      </div>

      <!-- Card 2: Vitesse Moyenne -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Vitesse Moyenne Aller-Retour (Distances Égales)</div>
        <p class="math-desc-list">Si les distances parcourues à la vitesse V₁ et V₂ sont égales :</p>
        
        <div class="math-formula-box-visual" style="font-size:18px;">
          V<sub>moyenne</sub> = ${f('2 × V₁ × V₂', 'V₁ + V₂')}
        </div>
        
        <p class="math-desc-list" style="font-size:12px; color:#86868B;">
          Attention : La vitesse moyenne n'est jamais la moyenne arithmétique (V₁+V₂)/2 !
        </p>
      </div>

      <!-- Card 3: Rattrapage & Croisement -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Rattrapage & Croisement</div>
        
        <div style="margin-bottom:12px;">
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">1. Temps de Rattrapage (Même sens) :</div>
          <div class="math-formula-box-visual" style="font-size:16px;">
            T<sub>rattrapage</sub> = ${f('Distance d\'avance', 'V<sub>poursuivant</sub> - V<sub>poursuivi</sub>')}
          </div>
        </div>

        <div>
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">2. Temps de Croisement (Sens opposés) :</div>
          <div class="math-formula-box-visual" style="font-size:16px;">
            T<sub>croisement</sub> = ${f('Distance initiale d\'écart', 'V₁ + V₂')}
          </div>
        </div>
      </div>

      <!-- Card 4: Travail en commun & Débits -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Travail Partagé & Débits (Robinets / Peintres)</div>
        <p class="math-desc-list">Si plusieurs entités travaillent simultanément pour réaliser une tâche :</p>

        <div class="math-formula-box-visual">
          ${f(1, 'T<sub>total</sub>')} = ${f(1, 'T₁')} + ${f(1, 'T₂')} + ... + ${f(1, 'T<sub>n</sub>')}
        </div>

        <div style="background:#F9F9FB; padding:12px 14px; border-radius:12px; font-size:13.5px; border:1px solid rgba(0,0,0,0.04);">
          <strong style="color:#0051A8;">Formule directe pour 2 personnes / robinets :</strong>
          <div class="math-formula-box-visual" style="margin:8px 0; font-size:16px;">
            T<sub>total</sub> = ${f('T₁ × T₂', 'T₁ + T₂')}
          </div>
          <p style="margin:0; font-weight:600;">Exemple : Si Paul met 3h et Samuel met 6h seul pour peindre une pièce :<br>
          T = ${f('3 × 6', '3 + 6')} = ${f(18, 9)} = <strong>2h ensemble</strong>.</p>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 3 : Vitesses, Rattrapages & Débits', subtitle: 'Vitesses, croisement, rattrapage et travail partagé', html };
}

function renderMemoFiche4() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Moyenne Pondérée -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Moyenne Pondérée</div>
        <p class="math-desc-list">Chaque valeur X<sub>i</sub> est associée à un coefficient/poids P<sub>i</sub> :</p>
        
        <div class="math-formula-box-visual">
          M<sub>pondérée</sub> = ${f('X₁·P₁ + X₂·P₂ + ... + X<sub>n</sub>·P<sub>n</sub>', 'P₁ + P₂ + ... + P<sub>n</sub>')}
        </div>
      </div>

      <!-- Card 2: Méthode du Barycentre -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Méthode du Barycentre (Écart à la moyenne / Mélanges)</div>
        <p class="math-desc-list" style="margin-bottom:10px;">
          Permet de trouver l'effectif ou la proportion relative de 2 groupes A et B mélangés sans poser un système d'équations.
        </p>

        <div style="background:#F9F9FB; padding:12px 14px; border-radius:12px; border:1px solid rgba(0,0,0,0.04); margin-bottom:12px;">
          <div style="font-weight:800; font-size:14px; color:#1D1D1F; margin-bottom:4px;">Principe de la Balance :</div>
          <p class="math-desc-list">Effectif<sub>A</sub> × (M<sub>A</sub> - M<sub>générale</sub>) = Effectif<sub>B</sub> × (M<sub>générale</sub> - M<sub>B</sub>)</p>
        </div>

        <div style="font-weight:700; font-size:14px; margin-bottom:4px;">Proportion du Groupe A dans la Population Totale :</div>
        <div class="math-formula-box-visual" style="font-size:17px;">
          Proportion A = ${f('|M<sub>générale</sub> - M<sub>B</sub>|', '|M<sub>A</sub> - M<sub>B</sub>|')}
        </div>

        <div class="math-desc-list" style="background:#F0F4F8; padding:12px 14px; border-radius:12px; margin-top:10px;">
          <strong style="color:#0051A8;">Exemple TAGE MAGE :</strong><br>
          Un groupe avec Moyenne Hommes = 12, Moyenne Femmes = 18. Moyenne globale du groupe = 14.<br>
          Proportion d'Hommes = ${f('|14 - 18|', '|12 - 18|')} = ${f(4, 6)} = ${f(2, 3)} = <strong>66.6% d'hommes</strong>.
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 4 : Barycentre & Moyennes', subtitle: 'Astuce du barycentre pour les mélanges et moyennes pondérées', html };
}

function renderMemoFiche5() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Triples Pythagoriciens -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Triples Pythagoriciens (À connaître par cœur)</div>
        <p class="math-desc-list" style="margin-bottom:8px;">Dans tout triangle rectangle, si 2 côtés sont connus, le 3ème est immédiat :</p>
        
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
          <div class="math-table-cell">3 - 4 - 5 <span>(3²+4²=5²)</span></div>
          <div class="math-table-cell">5 - 12 - 13 <span>(5²+12²=13²)</span></div>
          <div class="math-table-cell">8 - 15 - 17 <span>(8²+15²=17²)</span></div>
          <div class="math-table-cell">7 - 24 - 25 <span>(7²+24²=25²)</span></div>
          <div class="math-table-cell">20 - 21 - 29 <span>(20²+21²=29²)</span></div>
        </div>

        <p class="math-desc-list" style="margin-top:10px; font-size:12.5px; color:#86868B;">
          Remarque : Tout multiple d'un triple est aussi pythagoricien (ex: 6-8-10, 9-12-15, 10-24-26).
        </p>
      </div>

      <!-- Card 2: Triangles Particuliers -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Triangles Particuliers</div>
        
        <div class="math-desc-list">
          <p>• <strong>Triangle Isocèle Rectangle (45° - 45° - 90°) :</strong></p>
          <p>&nbsp;&nbsp; Côtés de l'angle droit : a et a &nbsp;⟹&nbsp; <strong>Hypoténuse = a√2</strong></p>

          <p style="margin-top:8px;">• <strong>Demi-Triangle Équilatéral (30° - 60° - 90°) :</strong></p>
          <p>&nbsp;&nbsp; - Côté opposé à 30° = <strong>a</strong></p>
          <p>&nbsp;&nbsp; - Côté opposé à 60° = <strong>a√3</strong></p>
          <p>&nbsp;&nbsp; - Hypoténuse (opposé à 90°) = <strong>2a</strong></p>
        </div>
      </div>

      <!-- Card 3: Aires, Périmètres & Volumes -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Aires, Périmètres & Volumes</div>
        
        <div class="math-desc-list">
          <p>• <strong>Triangle :</strong> Aire = ${f('Base × Hauteur', 2)}</p>
          <p>• <strong>Cercle / Disque :</strong> Périmètre = 2πR &nbsp;|&nbsp; Aire = πR²</p>
          <p>• <strong>Trapèze :</strong> Aire = ${f('(B + b) × h', 2)}</p>
          <p>• <strong>Sphère :</strong> Volume = ${f(4, 3)} π R³ &nbsp;|&nbsp; Surface = 4π R²</p>
          <p>• <strong>Cylindre :</strong> Volume = π R² h</p>
          <p>• <strong>Cône :</strong> Volume = ${f(1, 3)} π R² h</p>
        </div>
      </div>

      <!-- Card 4: Polygone N Côtés -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Angles d'un Polygone à N Côtés</div>
        <div class="math-formula-box-visual">
          Somme des angles intérieurs = (N - 2) × 180°
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 5 : Géométrie & Triples Pythagoriciens', subtitle: 'Triples 3-4-5, triangles 30-60-90, aires, volumes & polygone', html };
}

function renderMemoFiche6() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Combinatoire : Permutations, Arrangements & Combinaisons -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Combinatoire (Ordre & Répétition)</div>
        
        <div class="math-desc-list">
          <p>• <strong>Permutations (Ordonner N éléments) :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16px;">
            P<sub>N</sub> = N! = N × (N - 1) × ... × 1
          </div>

          <p style="margin-top:10px;">• <strong>Arrangements ${subsup('A', 'n', 'k')} (Avec ordre, sans répétition) :</strong></p>
          <div class="math-formula-box-visual" style="font-size:17px;">
            ${subsup('A', 'n', 'k')} = ${f('n!', '(n - k)!')} = n × (n - 1) × ... × (n - k + 1)
          </div>
          <p class="math-desc-list" style="font-size:12.5px; color:#86868B;">Exemple : Choisir 3 postes (Président, VP, Trésorier) parmi 10 personnes ➔ ${subsup('A', '10', '3')} = 10 × 9 × 8 = <strong>720</strong></p>

          <p style="margin-top:10px;">• <strong>Combinaisons ${subsup('C', 'n', 'k')} (Sans ordre, sans répétition) :</strong></p>
          <div class="math-formula-box-visual" style="font-size:17px;">
            ${subsup('C', 'n', 'k')} = ${f('n!', 'k!(n - k)!')}
          </div>
          <p class="math-desc-list" style="font-size:12.5px; color:#86868B;">Exemple : Former un groupe de 3 personnes parmi 10 ➔ ${subsup('C', '10', '3')} = ${f('10 × 9 × 8', '3 × 2 × 1')} = <strong>120</strong></p>
        </div>
      </div>

      <!-- Card 2: Poignées de Mains & Tournois -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Poignées de Mains & Compétitions</div>
        
        <div class="math-desc-list">
          <p>• <strong>Poignées de Mains / Matchs simples (Sans ordre) :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16.5px;">
            Nb = ${subsup('C', 'N', '2')} = ${f('N × (N - 1)', 2)}
          </div>

          <p style="margin-top:8px;">• <strong>Tournoi Élimination Directe :</strong> Nb de matchs = <strong>N - 1</strong> (pour 1 vainqueur)</p>
          <p>• <strong>Championnat Aller-Retour :</strong> Nb de matchs = <strong>N × (N - 1)</strong></p>
          <p>• <strong>Diagonales d'un Polygone à N côtés :</strong> Nb = ${f('N × (N - 3)', 2)}</p>
        </div>
      </div>

      <!-- Card 3: Compter le Nombre de Triangles dans une Figure -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Compter les Triangles dans une Figure</div>
        
        <div class="math-desc-list">
          <p>• <strong>Figure avec un sommet commun et n divisions de base sur h niveaux :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16.5px;">
            Nb de triangles = ${f('n × (n + 1)', 2)} × h
          </div>
          <p class="math-desc-list" style="font-size:12.5px; color:#86868B;">(Où n est le nombre de divisions sur la base et h le nombre de niveaux horizontaux).</p>

          <p style="margin-top:10px;">• <strong>Triangles formés par N points (aucun aligné) :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16.5px;">
            Nb = ${subsup('C', 'N', '3')} = ${f('N × (N - 1) × (N - 2)', 6)}
          </div>

          <p style="margin-top:8px;">• <strong>Si K points sont alignés sur une même droite :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16px;">
            Nb réel = ${subsup('C', 'N', '3')} - ${subsup('C', 'K', '3')}
          </div>
        </div>
      </div>

      <!-- Card 4: Formes Imbriquées dans une Grille -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Formes Imbriquées dans une Grille</div>
        
        <div class="math-desc-list">
          <p>• <strong>Nombre de Carrés dans une Grille N × N :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16px;">
            Nb = 1² + 2² + ... + N² = ${f('N(N + 1)(2N + 1)', 6)}
          </div>

          <p style="margin-top:10px;">• <strong>Nombre de Rectangles dans une Grille L × C :</strong></p>
          <div class="math-formula-box-visual" style="font-size:16px;">
            Nb = ${f('L(L + 1)', 2)} × ${f('C(C + 1)', 2)}
          </div>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 6 : Dénombrement, Combinaisons & Triangles', subtitle: 'Arrangements, combinaisons C(n,k), poignées de main, nombre de triangles & grilles', html };
}

function renderMemoFiche7() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Astuce de l'écart -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Produit Équidistant (Astuce de l'Écart)</div>
        <div class="math-formula-box-visual">
          (a - x)(a + x) = a² - x²
        </div>
        <div class="math-desc-list">
          <p>• <strong>14 × 16</strong> = (15 - 1)(15 + 1) = 15² - 1² = 225 - 1 = <strong>224</strong></p>
          <p>• <strong>18 × 22</strong> = (20 - 2)(20 + 2) = 20² - 2² = 400 - 4 = <strong>396</strong></p>
          <p>• <strong>27 × 33</strong> = (30 - 3)(30 + 3) = 30² - 3² = 900 - 9 = <strong>891</strong></p>
        </div>
      </div>

      <!-- Card 2: Carrés se terminant par 5 -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Carré d'un Nombre Terminant par 5</div>
        <div class="math-formula-box-visual">
          (10x + 5)² = [x × (x + 1)] &nbsp;|&nbsp; 25
        </div>
        <div class="math-desc-list">
          <p>• <strong>15²</strong> = (1 × 2) | 25 = <strong>225</strong></p>
          <p>• <strong>25²</strong> = (2 × 3) | 25 = <strong>625</strong></p>
          <p>• <strong>35²</strong> = (3 × 4) | 25 = <strong>1 225</strong></p>
          <p>• <strong>75²</strong> = (7 × 8) | 25 = <strong>5 625</strong></p>
          <p>• <strong>85²</strong> = (8 × 9) | 25 = <strong>7 225</strong></p>
          <p>• <strong>105²</strong> = (10 × 11) | 25 = <strong>11 025</strong></p>
        </div>
      </div>

      <!-- Card 3: Multiplication par 11 -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Multiplication par 11</div>
        <p class="math-desc-list" style="margin-bottom:8px;">Écartez les 2 chiffres et insérez leur somme au milieu :</p>
        <div class="math-desc-list">
          <p>• <strong>34 × 11 :</strong> 3 _ 4 ➔ 3 + 4 = 7 ➔ <strong>374</strong></p>
          <p>• <strong>52 × 11 :</strong> 5 _ 2 ➔ 5 + 2 = 7 ➔ <strong>572</strong></p>
          <p>• <strong>68 × 11 :</strong> 6 _ 8 ➔ 6 + 8 = 14 ➔ (6+1) 4 8 = <strong>748</strong> *(avec retenue)*</p>
        </div>
      </div>

      <!-- Card 4: Identités Remarquables (Carrés & Cubes) -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Identités Remarquables (Carrés & Cubes)</div>
        
        <div style="margin-bottom:12px;">
          <div style="font-weight:800; font-size:13.5px; color:#1D1D1F; margin-bottom:6px;">• Identités au Carré (2nd Degré) :</div>
          <div class="math-formula-box-visual" style="font-size:15px; flex-direction:column; gap:6px; align-items:flex-start; padding:12px 16px;">
            <div>(a + b)² = a² + 2ab + b²</div>
            <div>(a - b)² = a² - 2ab + b²</div>
            <div>a² - b² = (a - b)(a + b)</div>
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-weight:800; font-size:13.5px; color:#1D1D1F; margin-bottom:6px;">• Identités au Cube (3ème Degré - Développements) :</div>
          <div class="math-formula-box-visual" style="font-size:15px; flex-direction:column; gap:6px; align-items:flex-start; padding:12px 16px;">
            <div>(a + b)³ = a³ + 3a²b + 3ab² + b³</div>
            <div>(a - b)³ = a³ - 3a²b + 3ab² - b³</div>
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-weight:800; font-size:13.5px; color:#1D1D1F; margin-bottom:6px;">• Factorisations de Cubes :</div>
          <div class="math-formula-box-visual" style="font-size:15px; flex-direction:column; gap:6px; align-items:flex-start; padding:12px 16px;">
            <div>a³ + b³ = (a + b)(a² - ab + b²)</div>
            <div>a³ - b³ = (a - b)(a² + ab + b²)</div>
          </div>
        </div>

        <div>
          <div style="font-weight:800; font-size:13.5px; color:#1D1D1F; margin-bottom:6px;">• Trinôme au Carré :</div>
          <div class="math-formula-box-visual" style="font-size:14.5px; padding:12px 16px;">
            (a + b + c)² = a² + b² + c² + 2(ab + bc + ca)
          </div>
        </div>

      </div>

    </div>
  `;
  return { title: 'Fiche 7 : Astuces & Identités Remarquables', subtitle: 'Produits équidistants, carrés en 5, identités au carré & au cube', html };
}

function renderMemoFiche8() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Notations & Capital Initial K -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Notations de Base (Capital K)</div>
        <div class="math-desc-list">
          <p>• <strong>K :</strong> Capital Initial placé au départ</p>
          <p>• <strong>i :</strong> Taux d'intérêt par période (ex: 5% ➔ 0,05)</p>
          <p>• <strong>n :</strong> Nombre de périodes de placement</p>
          <p>• <strong>K<sub>n</sub> :</strong> Capital au bout de n périodes (Valeur acquise)</p>
        </div>
      </div>

      <!-- Card 2: Intérêts Simples -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Intérêts Simples (Capital K Constant)</div>
        <p class="math-desc-list">Les intérêts sont calculés uniquement sur le capital initial K (capital constant) :</p>
        
        <div class="math-formula-box-visual">
          Intérêt généré : I = K × i × n
        </div>

        <div class="math-formula-box-visual" style="font-size:17px;">
          Capital au bout de n périodes : K<sub>n</sub> = K × (1 + i × n)
        </div>

        <div class="math-desc-list" style="margin-top:8px;">
          <p>• <strong>Règle de la base 360 jours (Intérêts bancaires) :</strong></p>
          <div style="background:#F9F9FB; padding:10px 14px; border-radius:10px; text-align:center; font-weight:700; margin-top:4px;">
            I = K × i × ${f('j', 360)}
          </div>
        </div>
      </div>

      <!-- Card 3: Intérêts Composés -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Intérêts Composés (Capitalisation)</div>
        <p class="math-desc-list">Les intérêts s'ajoutent au capital à chaque période pour produire à leur tour des intérêts :</p>

        <div class="math-formula-box-visual" style="font-size:18px;">
          Capital au bout de n périodes : K<sub>n</sub> = K × (1 + i)<sup>n</sup>
        </div>

        <div class="math-desc-list">
          <p>• <strong>Intérêt généré total :</strong> I = K<sub>n</sub> - K = K × [(1 + i)<sup>n</sup> - 1]</p>
          
          <p style="margin-top:10px;">• <strong>Développements au bout de 2 et 3 périodes :</strong></p>
          <div style="background:#F9F9FB; padding:10px 14px; border-radius:10px; margin-top:4px;">
            <p style="margin-bottom:4px;">• <strong>Au bout de 2 périodes :</strong> K₂ = K × (1 + 2i + i²)</p>
            <p style="margin:0;">• <strong>Au bout de 3 périodes :</strong> K₃ = K × (1 + 3i + 3i² + i³)</p>
          </div>
        </div>
      </div>

      <!-- Card 4: Règle de 72 & Taux -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Règle de 72 (Doubler le Capital K)</div>
        <p class="math-desc-list">Temps n nécessaire pour doubler le capital K à un taux t% en intérêts composés :</p>

        <div class="math-formula-box-visual">
          n<sub>doublement</sub> ≈ ${f(72, 't%')}
        </div>

        <div class="math-desc-list" style="background:#F0F4F8; padding:12px 14px; border-radius:12px; margin-top:8px;">
          <strong style="color:#0051A8;">Exemple TAGE MAGE :</strong><br>
          Pour doubler un capital K à un taux de 6% par an :<br>
          n ≈ ${f(72, 6)} = <strong>12 ans</strong>.
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 8 : Intérêts Simples & Composés (Capital K)', subtitle: 'Capital initial K, capital au bout de n périodes Kn & règle de 72', html };
}

function renderMemoFiche9() {
  const html = `
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Card 1: Rattrapage -->
      <div class="math-card-visual">
        <div class="math-card-title">1. Rattrapage (Temps pour rattraper)</div>
        <p class="math-desc-list">Le mobile 1 (vitesse V₁) poursuit le mobile 2 (vitesse V₂ avec V₁ > V₂) ayant une distance d'avance D<sub>avance</sub> :</p>
        
        <div class="math-formula-box-visual" style="font-size:17px;">
          Temps pour rattraper : T<sub>rattrapage</sub> = ${f('D<sub>avance</sub>', 'V₁ - V₂')}
        </div>

        <div class="math-desc-list" style="margin-top:8px;">
          <p>• <strong>Si l'avance est donnée en temps Δt :</strong> D<sub>avance</sub> = V₂ × Δt</p>
          <p>• <strong>Distance parcourue par le poursuivant :</strong> D<sub>parcourue</sub> = V₁ × T<sub>rattrapage</sub></p>
        </div>
      </div>

      <!-- Card 2: Croisement - Départ Simultané -->
      <div class="math-card-visual">
        <div class="math-card-title">2. Croisement & Dépassement (Départ Simultané)</div>
        <p class="math-desc-list">Deux mobiles A et B séparés d'une distance totale D se déplacent l'un vers l'autre aux vitesses V₁ et V₂ :</p>

        <div style="margin-bottom:12px;">
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">1. Durée du trajet avant croisement (Temps de rencontre) :</div>
          <div class="math-formula-box-visual" style="font-size:16px;">
            T<sub>rencontre</sub> = ${f('Distance Totale D', 'V₁ + V₂')}
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">2. Distances parcourues par chaque mobile au moment du croisement :</div>
          <div class="math-formula-box-visual" style="font-size:15px; flex-direction:column; gap:8px; align-items:center;">
            <div>Distance 1 (Mobile 1) : D₁ = ${f('V₁', 'V₁ + V₂')} × D<sub>Totale</sub></div>
            <div>Distance 2 (Mobile 2) : D₂ = ${f('V₂', 'V₁ + V₂')} × D<sub>Totale</sub></div>
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">3. Durée du croisement de 2 éléments (ex: 2 trains de longueurs L₁ et L₂) :</div>
          <div class="math-formula-box-visual" style="font-size:16px;">
            T<sub>croisement</sub> = ${f('L₁ + L₂', 'V₁ + V₂')}
          </div>
        </div>

        <div>
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">4. Durée du dépassement de 2 éléments (même sens) :</div>
          <div class="math-formula-box-visual" style="font-size:16px;">
            T<sub>dépassement</sub> = ${f('L₁ + L₂', 'V₁ - V₂')}
          </div>
        </div>
      </div>

      <!-- Card 3: Croisement - Départ Différé -->
      <div class="math-card-visual">
        <div class="math-card-title">3. Croisement avec Départ Différé (En 2 temps)</div>
        <p class="math-desc-list">Si le mobile 1 part en premier avec une avance de temps Δt avant que le mobile 2 ne s'élance :</p>

        <div style="background:#F9F9FB; padding:12px 14px; border-radius:12px; margin:8px 0; border:1px solid rgba(0,0,0,0.04);">
          <p style="margin-bottom:6px;"><strong>Étape 1 :</strong> Distance parcourue par le mobile 1 pendant l'avance ➔ D<sub>avance</sub> = V₁ × Δt</p>
          <p style="margin:0;"><strong>Étape 2 :</strong> On enlève cette distance à la distance totale ➔ D<sub>restante</sub> = D<sub>Totale</sub> - (V₁ × Δt)</p>
        </div>

        <div style="font-weight:700; font-size:14px; margin-top:10px; margin-bottom:4px;">Durée du trajet avant croisement (à partir du départ du 2ème) :</div>
        <div class="math-formula-box-visual" style="font-size:16.5px;">
          T<sub>croisement</sub> = ${f('D<sub>Totale</sub> - (V₁ × Δt)', 'V₁ + V₂')}
        </div>
      </div>

      <!-- Card 4: Tunnels & Rivières -->
      <div class="math-card-visual">
        <div class="math-card-title">4. Tunnels & Courants d'Eau (Astuces)</div>
        <div class="math-desc-list">
          <p>• <strong>Train de longueur L traversant un tunnel de longueur P :</strong> T = ${f('L + P', 'V')}</p>
          <p>• <strong>Sens du courant (Descendre) :</strong> V<sub>réelle</sub> = V<sub>propre</sub> + V<sub>courant</sub></p>
          <p>• <strong>Contre le courant (Remonter) :</strong> V<sub>réelle</sub> = V<sub>propre</sub> - V<sub>courant</sub></p>
        </div>
      </div>

    </div>
  `;
  return { title: 'Fiche 9 : Rattrapages, Croisements & Trains', subtitle: 'Rattrapage, départ simultané, départ différé & dépassements', html };
}



// ---------------------------------------------------------
// UI ENGINE & NAVIGATION
// ---------------------------------------------------------

let currentCategory = null;
let currentOption = null;
let currentDeck = [];
let deckIndex = 0;
let currentQuestion = null;
let userAnswer = '';
let totalCorrect = 0;
let isProcessingFeedback = false;
let activeFicheIndex = 0;
let currentExam = 'tage';
let selectedQuestionCount = 20;
let activeStatsSubKey = 'all';
let activeStatsExamFilter = 'tage';

const views = {
  portal: document.getElementById('portal-view'),
  menu: document.getElementById('menu-view'),
  iaeMenu: document.getElementById('iae-menu-view'),
  subcategory: document.getElementById('subcategory-view'),
  memo: document.getElementById('memo-view'),
  start: document.getElementById('start-view'),
  practice: document.getElementById('practice-view'),
  stats: document.getElementById('stats-view'),
  resultsModal: document.getElementById('results-modal')
};

const elSubcategoryTitle = document.getElementById('subcategory-title');
const elSubcategoryOptionsList = document.getElementById('subcategory-options-list');

const elMemoTabsContainer = document.getElementById('memo-tabs');
const elMemoTitle = document.getElementById('memo-title');
const elMemoCardTitle = document.getElementById('memo-card-title');
const elMemoCardSubtitle = document.getElementById('memo-card-subtitle');
const elMemoTableContainer = document.getElementById('memo-table-container');

const elStartModeTitle = document.getElementById('start-mode-title');
const elStartHeadline = document.getElementById('start-headline');
const elStartDescription = document.getElementById('start-description');

const elPracticeModeTitle = document.getElementById('practice-mode-title');
const elQuestionCard = document.getElementById('question-card');
const elQuestionDisplay = document.getElementById('question-display');
const elAnswerBoxContainer = document.getElementById('answer-box-container');
const elUserAnswerDisplay = document.getElementById('user-answer-display');
const elKeypadGrid = document.getElementById('keypad-grid');
const elKeyboardHintText = document.getElementById('keyboard-hint-text');

const elResultsModeName = document.getElementById('results-mode-name');
const elStatTotalCount = document.getElementById('stat-total-count');

function showView(viewName) {
  Object.keys(views).forEach(key => {
    if (key === 'resultsModal') {
      views.resultsModal.classList.remove('active');
    } else {
      views[key].classList.toggle('active', key === viewName);
    }
  });
}

function openCategory(catKey) {
  currentCategory = catKey;
  const category = CATEGORIES[catKey];
  elSubcategoryTitle.textContent = category.title;

  let html = '';
  category.options.forEach((opt, idx) => {
    html += `
      <button class="category-card" data-opt-idx="${idx}">
        <div class="category-info">
          <h2>${opt.title}</h2>
          <p>${opt.desc}</p>
        </div>
        <span class="chevron">›</span>
      </button>`;
  });
  elSubcategoryOptionsList.innerHTML = html;

  elSubcategoryOptionsList.querySelectorAll('.category-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
      selectOption(category.options[idx]);
    });
  });

  showView('subcategory');
}

function selectOption(option) {
  currentOption = option;

  if (option.type === 'memo') {
    openMemoFiche(option.ficheIdx !== undefined ? option.ficheIdx : 0);
  } else if (option.type === 'memo_direct') {
    openDirectMemo(option.renderMemo());
  } else {
    elStartModeTitle.textContent = option.title;
    elStartHeadline.textContent = option.title;
    elStartDescription.textContent = option.desc;
    showView('start');
  }
}

function openDirectMemo(data) {
  elMemoTabsContainer.innerHTML = '';
  elMemoTitle.textContent = 'Fiche d\'Automatismes';
  elMemoCardTitle.textContent = data.title;
  elMemoCardSubtitle.textContent = data.subtitle;
  elMemoTableContainer.innerHTML = data.html;
  showView('memo');
}

function openMemoFiche(index) {
  activeFicheIndex = index;
  renderMemoTabs();

  const fiche = MEMO_FICHES_LIST[activeFicheIndex];
  const data = fiche.render();

  elMemoTitle.textContent = 'Fiches Mémo de Révision';
  elMemoCardTitle.textContent = data.title;
  elMemoCardSubtitle.textContent = data.subtitle;
  elMemoTableContainer.innerHTML = data.html;

  showView('memo');
}

function renderMemoTabs() {
  let html = '';
  MEMO_FICHES_LIST.forEach((fiche, idx) => {
    const isActive = idx === activeFicheIndex ? 'active' : '';
    html += `<button class="memo-tab-item ${isActive}" data-tab-idx="${idx}">${fiche.tabLabel}</button>`;
  });
  elMemoTabsContainer.innerHTML = html;

  elMemoTabsContainer.querySelectorAll('.memo-tab-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-tab-idx'), 10);
      openMemoFiche(idx);
    });
  });

  const activeBtn = elMemoTabsContainer.querySelector('.memo-tab-item.active');
  if (activeBtn) {
    const containerWidth = elMemoTabsContainer.clientWidth;
    const btnOffset = activeBtn.offsetLeft;
    const btnWidth = activeBtn.clientWidth;
    elMemoTabsContainer.scrollTo({
      left: btnOffset - containerWidth / 2 + btnWidth / 2,
      behavior: 'smooth'
    });
  }
}

// Extract clean question body for strict deduplication, removing HTML and prefix headers (e.g. "Question n°12 :", "[Français SIM n°3]")
function getCleanPromptText(rawPrompt) {
  if (!rawPrompt) return '';
  let clean = rawPrompt.replace(/<[^>]*>/g, ' ');
  clean = clean.replace(/^(Question|Problème|Série|Matrice|Disposition|Conditions Minimales|Ordre|Énigme|Article|Texte|\[.*?\])\s*([a-zà-ÿ\s]*?n°\d+|:\s*|\d+)?/gi, '');
  clean = clean.replace(/n°\d+/gi, '');
  return clean.replace(/\s+/g, ' ').trim().toLowerCase();
}

// Deduplicate a deck by normalized prompt body to ensure zero duplicate questions in a single quiz session
function deduplicateDeck(deck) {
  if (!Array.isArray(deck)) return [];
  const seenPrompts = new Set();
  const uniqueDeck = [];
  for (const item of deck) {
    if (!item || !item.prompt) continue;
    const norm = getCleanPromptText(item.prompt);
    if (norm && !seenPrompts.has(norm)) {
      seenPrompts.add(norm);
      uniqueDeck.push(item);
    }
  }
  return uniqueDeck;
}

// Track recently seen question prompts in localStorage to prevent repeat questions across quiz sessions
function getNonRepeatingDeck(optionId, rawDeck, count) {
  const cleanRaw = deduplicateDeck(rawDeck);
  if (cleanRaw.length <= count) return cleanRaw;

  const storageKey = `seen_q_prompts_${optionId}`;
  let seenPrompts = [];
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) seenPrompts = JSON.parse(stored);
  } catch (e) {
    seenPrompts = [];
  }

  const seenSet = new Set(seenPrompts);
  
  // Filter items whose normalized prompt body hasn't been seen recently
  const unseenItems = cleanRaw.filter(item => {
    const norm = getCleanPromptText(item.prompt);
    return !seenSet.has(norm);
  });

  let selectedItems = [];

  if (unseenItems.length >= count) {
    // We have enough unseen items! Take the requested count from unseen items.
    selectedItems = unseenItems.slice(0, count);
  } else {
    // We don't have enough unseen items to fill the deck (or bank exhausted).
    // Take all remaining unseen items first, then reset seen history and take the rest.
    selectedItems = [...unseenItems];
    seenPrompts = []; // Reset history
    const remainingNeeded = count - selectedItems.length;
    
    const unseenNorms = new Set(selectedItems.map(item => getCleanPromptText(item.prompt)));
    const recycledPool = cleanRaw.filter(item => {
      const norm = getCleanPromptText(item.prompt);
      return !unseenNorms.has(norm);
    });

    const reshuffledRecycled = shuffleArray(recycledPool);
    selectedItems.push(...reshuffledRecycled.slice(0, remainingNeeded));
  }

  // Save the newly selected prompt bodies to history
  const newlySelectedNorms = selectedItems.map(item => getCleanPromptText(item.prompt));
  const updatedSeen = [...seenPrompts, ...newlySelectedNorms];
  try {
    localStorage.setItem(storageKey, JSON.stringify(updatedSeen.slice(-400))); // Keep last 400
  } catch (e) {}

  return selectedItems;
}

function startPractice() {
  const rawDeck = currentOption.generateDeck();
  currentDeck = getNonRepeatingDeck(currentOption.id, rawDeck, selectedQuestionCount);
  deckIndex = 0;
  totalCorrect = 0;
  userAnswer = '';
  isProcessingFeedback = false;

  elPracticeModeTitle.textContent = `${currentOption.title} (${currentDeck.length} Q)`;
  renderKeypadUI();
  showView('practice');
  nextQuestion();
}

function renderKeypadUI() {
  if (currentOption.type === 'quiz_yesno') {
    elAnswerBoxContainer.style.display = 'inline-flex';
    elKeypadGrid.className = 'yesno-grid-apple';
    elKeypadGrid.innerHTML = `
      <button class="btn-yesno btn-yes" data-key="OUI">OUI</button>
      <button class="btn-yesno btn-no" data-key="NON">NON</button>
    `;
    elKeyboardHintText.textContent = 'Raccourcis : Touches O (Oui) / N (Non)';
  } else if (currentOption.type === 'quiz_gender') {
    elAnswerBoxContainer.style.display = 'inline-flex';
    elKeypadGrid.className = 'yesno-grid-apple';
    elKeypadGrid.innerHTML = `
      <button class="btn-yesno" data-key="MASCULIN" style="background:#1565C0; color:#FFFFFF;">MASCULIN</button>
      <button class="btn-yesno" data-key="FÉMININ" style="background:#C2185B; color:#FFFFFF;">FÉMININ</button>
    `;
    elKeyboardHintText.textContent = 'Raccourcis : Touches M (Masculin) / F (Féminin)';
  } else if (currentOption.type === 'quiz_qcm') {
    elAnswerBoxContainer.style.display = 'none';
    elKeypadGrid.className = 'qcm-grid-apple';
    elKeyboardHintText.textContent = 'Raccourcis : Touches A, B, C, D ou 1, 2, 3, 4';
  } else {
    elAnswerBoxContainer.style.display = 'inline-flex';
    elKeypadGrid.className = 'keypad-grid-apple';
    elKeypadGrid.innerHTML = `
      <button class="key-btn" data-key="7">7</button>
      <button class="key-btn" data-key="8">8</button>
      <button class="key-btn" data-key="9">9</button>

      <button class="key-btn" data-key="4">4</button>
      <button class="key-btn" data-key="5">5</button>
      <button class="key-btn" data-key="6">6</button>

      <button class="key-btn" data-key="1">1</button>
      <button class="key-btn" data-key="2">2</button>
      <button class="key-btn" data-key="3">3</button>

      <button class="key-btn action-key" data-key="backspace">⌫</button>
      <button class="key-btn" data-key="0">0</button>
      <button class="key-btn submit-key" id="btn-enter" data-key="enter">ENTRÉE ↵</button>
    `;
    elKeyboardHintText.textContent = 'Clavier physique activé (chiffres + Touche Entrée).';
  }

  attachKeypadListeners();
}

function attachKeypadListeners() {
  elKeypadGrid.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-key');
      handleKeyPress(key);

      btn.classList.add('btn-active');
      setTimeout(() => btn.classList.remove('btn-active'), 100);
    });
  });
}

function nextQuestion() {
  if (deckIndex >= currentDeck.length) {
    stopPractice();
    return;
  }

  currentQuestion = currentDeck[deckIndex];
  
  if (currentOption.type === 'quiz_qcm') {
    elQuestionDisplay.innerHTML = currentQuestion.prompt;

    const letters = ['A', 'B', 'C', 'D', 'E'];
    let html = '';
    currentQuestion.options.forEach((optText, i) => {
      const letter = letters[i] || String.fromCharCode(65 + i);
      html += `
        <button class="btn-qcm" data-key="${i}">
          <span class="qcm-letter">${letter}</span>
          <span class="qcm-text">${optText}</span>
        </button>`;
    });
    elKeypadGrid.innerHTML = html;
    attachKeypadListeners();
  } else {
    if (currentQuestion.subPrompt) {
      elQuestionDisplay.innerHTML = `<span class="math-op">${currentQuestion.prompt}</span><br><span style="font-size: 22px; font-weight: 800; color: var(--text-apple-main);">${currentQuestion.subPrompt}</span>`;
    } else {
      elQuestionDisplay.innerHTML = `<span class="math-op">${currentQuestion.prompt}</span>`;
    }
  }

  userAnswer = '';
  updateAnswerDisplay();

  const practiceArea = document.querySelector('.practice-area');
  if (practiceArea) practiceArea.scrollTop = 0;
  const practiceView = document.getElementById('practice-view');
  if (practiceView) practiceView.scrollTop = 0;
}

function updateAnswerDisplay() {
  elUserAnswerDisplay.textContent = userAnswer;
}

function handleKeyPress(key) {
  if (isProcessingFeedback) return;

  if (currentOption.type === 'quiz_yesno') {
    if (key === 'OUI' || key === 'NON') {
      userAnswer = key;
      updateAnswerDisplay();
      submitAnswer();
    }
  } else if (currentOption.type === 'quiz_gender') {
    if (key === 'MASCULIN' || key === 'FÉMININ') {
      userAnswer = key;
      updateAnswerDisplay();
      submitAnswer();
    }
  } else if (currentOption.type === 'quiz_qcm') {
    let selectedIdx = -1;
    const k = String(key).trim().toUpperCase();
    if (k === '0' || k === 'A') selectedIdx = 0;
    else if (k === '1' || k === 'B') selectedIdx = 1;
    else if (k === '2' || k === 'C') selectedIdx = 2;
    else if (k === '3' || k === 'D') selectedIdx = 3;
    else if (k === '4' || k === 'E') selectedIdx = 4;

    if (selectedIdx >= 0 && selectedIdx < currentQuestion.options.length) {
      userAnswer = selectedIdx;
      submitAnswer();
    }
  } else {
    if (key >= '0' && key <= '9') {
      if (userAnswer.length < 5) {
        userAnswer += key;
        updateAnswerDisplay();
      }
    } else if (key === 'backspace') {
      if (userAnswer.length > 0) {
        userAnswer = userAnswer.slice(0, -1);
        updateAnswerDisplay();
      }
    } else if (key === 'enter') {
      submitAnswer();
    }
  }
}

function submitAnswer() {
  if (isProcessingFeedback) return;

  isProcessingFeedback = true;
  let isCorrect = false;

  if (currentOption.type === 'quiz_yesno' || currentOption.type === 'quiz_gender') {
    isCorrect = (userAnswer === currentQuestion.expectedAnswer);
  } else if (currentOption.type === 'quiz_qcm') {
    isCorrect = (userAnswer === currentQuestion.answerIndex);
  } else {
    isCorrect = (parseInt(userAnswer, 10) === currentQuestion.expectedAnswer);
  }

  if (isCorrect) {
    totalCorrect++;
    elQuestionCard.classList.add('flash-correct');
  } else {
    elQuestionCard.classList.add('flash-wrong');
  }

  setTimeout(() => {
    elQuestionCard.classList.remove('flash-correct');
    elQuestionCard.classList.remove('flash-wrong');
    deckIndex++;
    userAnswer = '';
    updateAnswerDisplay();
    isProcessingFeedback = false;
    nextQuestion();
  }, 220);
}

function getResultsHistory() {
  try {
    const raw = localStorage.getItem('tage_iae_results_history');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function getNormalizedSubKey(item) {
  if (!item) return '';
  const key = (item.subKey || '').toLowerCase();
  const title = (item.subTitle || '').toLowerCase();

  if (key === 'tm_calcul' || key.includes('calcul') || title.includes('calcul')) return 'tm_calcul';
  if (key === 'tm_conditions' || key.includes('condition') || title.includes('condition')) return 'tm_conditions';
  if (key === 'tm_logique' || (key.includes('logique') && !key.includes('iae')) || title.includes('chiffres & lettres')) return 'tm_logique';
  if (key === 'tm_comprehension' || key.includes('comprehension') || title.includes('compréhension de texte')) return 'tm_comprehension';
  if (key === 'tm_raisonnement' || (key.includes('raisonnement') && !key.includes('iae')) || title.includes('argumentation')) return 'tm_raisonnement';
  if (key === 'tm_expression' || key.includes('expression') || title.includes('expression')) return 'tm_expression';
  if (key === 'tm_mock_exam' || key.includes('tm_mock') || title.includes('test blanc')) return 'tm_mock_exam';

  if (key === 'iae_culture_g' || key.includes('culture_g') || title.includes('culture générale') || title.includes('management')) return 'iae_culture_g';
  if (key === 'iae_francais' || (key.includes('francais') && key.includes('iae')) || title.includes('français')) return 'iae_francais';
  if (key === 'iae_raisonnement' || (key.includes('raisonnement') && key.includes('iae')) || (title.includes('raisonnement') && title.includes('numérique'))) return 'iae_raisonnement';
  if (key === 'iae_anglais' || key.includes('anglais') || title.includes('anglais')) return 'iae_anglais';
  if (key === 'iae_mock_exam' || key.includes('iae_mock') || title.includes('épreuve blanche')) return 'iae_mock_exam';

  return item.subKey || '';
}

function saveQuizResult(score, total) {
  if (!total || total <= 0) return;
  const history = getResultsHistory();
  const rawSubKey = currentCategory || (currentOption ? currentOption.id : 'quizz');
  const entry = {
    id: Date.now().toString(),
    exam: currentExam || 'tage',
    subKey: rawSubKey,
    subTitle: currentOption ? currentOption.title : 'Quizz',
    score: score,
    total: total,
    percentage: Math.round((score / total) * 100),
    date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now()
  };
  entry.normalizedSubKey = getNormalizedSubKey(entry);
  history.push(entry);
  try {
    localStorage.setItem('tage_iae_results_history', JSON.stringify(history));
  } catch (e) {
    console.error("Storage error", e);
  }
}

function clearResultsHistory() {
  localStorage.removeItem('tage_iae_results_history');
}

function stopPractice() {
  const totalQuestions = deckIndex > 0 ? deckIndex : (currentDeck ? currentDeck.length : 1);
  saveQuizResult(totalCorrect, totalQuestions);
  elResultsModeName.textContent = currentOption ? currentOption.title : 'Quizz Terminé';
  elStatTotalCount.textContent = `${totalCorrect} / ${totalQuestions}`;
  views.resultsModal.classList.add('active');
}

const EXAM_SUBTESTS = {
  tage: [
    { key: 'tm_calcul', title: '1. Calcul & Problèmes' },
    { key: 'tm_raisonnement', title: '2. Raisonnement & Argumentation' },
    { key: 'tm_comprehension', title: '3. Compréhension de Texte' },
    { key: 'tm_conditions', title: '4. Conditions Minimales' },
    { key: 'tm_expression', title: '5. Expression & Français' },
    { key: 'tm_logique', title: '6. Logique Chiffres & Lettres' },
    { key: 'tm_mock_exam', title: '7. Test Blanc Officiel (90 Q)' }
  ],
  iae: [
    { key: 'iae_culture_g', title: '1. Culture Générale, Éco & Mgmt' },
    { key: 'iae_francais', title: '2. Compréhension & Expression en Français' },
    { key: 'iae_raisonnement', title: '3. Raisonnement Logique & Numérique' },
    { key: 'iae_anglais', title: '4. Compréhension & Expression en Anglais' },
    { key: 'iae_mock_exam', title: '5. Épreuve Blanche Officielle (100 Q)' }
  ]
};

function openStatsDashboard(exam) {
  if (exam === 'tage' || exam === 'iae') {
    activeStatsExamFilter = exam;
  } else {
    activeStatsExamFilter = currentExam || 'tage';
  }
  activeStatsSubKey = 'all';
  renderStatsDashboard();
  showView('stats');
}

function renderStatsDashboard() {
  const history = getResultsHistory();
  
  if (!activeStatsExamFilter || activeStatsExamFilter === 'all') {
    activeStatsExamFilter = currentExam || 'tage';
  }

  // 1. Update Exam Selector Active Buttons
  const btnTage = document.getElementById('btn-stats-exam-tage');
  const btnIae = document.getElementById('btn-stats-exam-iae');

  if (btnTage) btnTage.classList.toggle('active', activeStatsExamFilter === 'tage');
  if (btnIae) btnIae.classList.toggle('active', activeStatsExamFilter === 'iae');

  // 2. Filter History Strictly by Active Exam Mode ('tage' or 'iae')
  const examFilteredHistory = history.filter(item => item.exam === activeStatsExamFilter);

  // 3. Render Sub-Test Filter Pills ONLY for the Active Exam
  const elSubSelector = document.getElementById('dash-sub-selector');
  if (elSubSelector) {
    const examSubs = EXAM_SUBTESTS[activeStatsExamFilter] || EXAM_SUBTESTS.tage;
    
    // Count history entries per normalized subKey for active exam
    const subCounts = new Map();
    examFilteredHistory.forEach(item => {
      const normKey = getNormalizedSubKey(item);
      subCounts.set(normKey, (subCounts.get(normKey) || 0) + 1);
    });

    let pillsHtml = '';
    const examLabel = activeStatsExamFilter === 'tage' ? 'TAGE MAGE' : 'Score IAE Message';
    const totalCount = examFilteredHistory.length;
    const isAllActive = activeStatsSubKey === 'all' ? 'active' : '';

    // First pill: "Tous les sous-tests [Exam]"
    pillsHtml += `<button class="sub-pill-btn ${isAllActive}" data-subkey="all">🌐 Tous les sous-tests ${examLabel} (${totalCount})</button>`;

    // Sub-test pills belonging strictly to the active exam
    examSubs.forEach(sub => {
      const count = subCounts.get(sub.key) || 0;
      const isActive = sub.key === activeStatsSubKey ? 'active' : '';
      
      let cleanLabel = sub.title;
      if (cleanLabel.length > 28) {
        cleanLabel = cleanLabel.substring(0, 26) + '...';
      }
      pillsHtml += `<button class="sub-pill-btn ${isActive}" data-subkey="${sub.key}">${cleanLabel} (${count})</button>`;
    });

    elSubSelector.innerHTML = pillsHtml;

    elSubSelector.querySelectorAll('.sub-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeStatsSubKey = btn.getAttribute('data-subkey');
        renderStatsDashboard();
      });
    });
  }

  // 4. Filter History by Normalized Sub-Test Key
  const filteredHistory = activeStatsSubKey === 'all' 
    ? examFilteredHistory 
    : examFilteredHistory.filter(item => getNormalizedSubKey(item) === activeStatsSubKey);

  // 5. Update Metrics Cards
  const elAvgScore = document.getElementById('dash-avg-score');
  const elTotalQuizzes = document.getElementById('dash-total-quizzes');
  const elBestScore = document.getElementById('dash-best-score');

  if (filteredHistory.length === 0) {
    if (elAvgScore) elAvgScore.textContent = '0%';
    if (elTotalQuizzes) elTotalQuizzes.textContent = '0';
    if (elBestScore) elBestScore.textContent = '0%';
  } else {
    const sumPct = filteredHistory.reduce((acc, curr) => acc + curr.percentage, 0);
    const avgPct = Math.round(sumPct / filteredHistory.length);
    const maxPct = Math.max(...filteredHistory.map(item => item.percentage));

    if (elAvgScore) elAvgScore.textContent = `${avgPct}%`;
    if (elTotalQuizzes) elTotalQuizzes.textContent = filteredHistory.length;
    if (elBestScore) elBestScore.textContent = `${maxPct}%`;
  }

  // 6. Render SVG Progress Chart
  renderSVGProgressChart(filteredHistory);

  // 7. Render Recent Sessions List
  const elHistoryList = document.getElementById('dash-history-list');
  if (elHistoryList) {
    if (filteredHistory.length === 0) {
      const examName = activeStatsExamFilter === 'tage' ? 'TAGE MAGE' : 'Score IAE Message';
      elHistoryList.innerHTML = `<p style="color:var(--text-apple-sub); font-size:13px; text-align:center; padding:20px 0;">Aucun historique enregistré pour ${examName}. Réalisez un quizz pour suivre vos scores !</p>`;
    } else {
      const reversed = [...filteredHistory].reverse().slice(0, 15);
      let listHtml = '';
      reversed.forEach(item => {
        const passClass = item.percentage >= 60 ? 'pass' : 'fail';
        listHtml += `
          <div class="history-item-row">
            <div class="history-item-left">
              <span class="history-item-title">${item.subTitle}</span>
              <span class="history-item-date">${item.date}</span>
            </div>
            <span class="history-badge ${passClass}">${item.score}/${item.total} (${item.percentage}%)</span>
          </div>`;
      });
      elHistoryList.innerHTML = listHtml;
    }
  }
}

function renderSVGProgressChart(historyData) {
  const wrapper = document.getElementById('dash-chart-wrapper');
  if (!wrapper) return;

  const chartSubTitle = document.getElementById('chart-sub-title');
  const isGlobalView = activeStatsSubKey === 'all';

  if (!historyData || historyData.length === 0) {
    if (chartSubTitle) chartSubTitle.textContent = "Évolution des Scores";
    wrapper.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:180px; color:#86868B; text-align:center; padding:20px;">
        <span style="font-size:36px; margin-bottom:8px;">📊</span>
        <span style="font-size:15px; font-weight:700; color:#1D1D1F;">Aucun historique pour ce sous-test</span>
        <span style="font-size:12px; margin-top:4px; opacity:0.8;">Réalisez un quizz pour enregistrer vos premiers résultats !</span>
      </div>`;
    return;
  }

  // Active Selected Index (default to last point)
  let activeIndex = historyData.length - 1;

  // Update Dynamic Chart Title
  if (chartSubTitle) {
    if (isGlobalView) {
      chartSubTitle.innerHTML = `📈 Évolution Chronologique Globale <span style="font-size:12px; font-weight:600; color:#86868B; margin-left:4px;">(${historyData.length} session${historyData.length > 1 ? 's' : ''})</span>`;
    } else {
      const currentSubTitle = historyData[0]?.subTitle || activeStatsSubKey;
      chartSubTitle.innerHTML = `📈 Courbe de Progression : <span style="color:#0071E3;">${currentSubTitle}</span> <span style="font-size:12px; font-weight:600; color:#86868B; margin-left:4px;">(${historyData.length} session${historyData.length > 1 ? 's' : ''})</span>`;
    }
  }

  // Compute SVG dimensions with guaranteed spacing
  const minSpacing = 65;
  const paddingLeft = 55;
  const paddingRight = 45;
  const paddingTop = 40;
  const paddingBottom = 45;

  const calculatedWidth = (historyData.length - 1) * minSpacing + paddingLeft + paddingRight;
  const svgWidth = Math.max(580, calculatedWidth);
  const svgHeight = 220;

  const width = svgWidth - paddingLeft - paddingRight;
  const height = svgHeight - paddingTop - paddingBottom;

  const points = historyData.map((item, idx) => {
    const x = historyData.length === 1 
      ? paddingLeft + width / 2 
      : paddingLeft + (idx / (historyData.length - 1)) * width;
    const y = paddingTop + height - (item.percentage / 100) * height;
    const shortDate = item.date ? item.date.split(' ')[0] : `S${idx + 1}`;
    
    let shortTag = item.subTitle || '';
    if (shortTag.includes('Calcul')) shortTag = 'Calcul';
    else if (shortTag.includes('Logique')) shortTag = 'Logique';
    else if (shortTag.includes('Conditions')) shortTag = 'Cond.Min';
    else if (shortTag.includes('Français') || shortTag.includes('Expression') || shortTag.includes('Syntaxe') || shortTag.includes('Grammaire')) shortTag = 'Français';
    else if (shortTag.includes('Culture')) shortTag = 'Culture G';
    else if (shortTag.includes('Anglais')) shortTag = 'Anglais';
    else if (shortTag.includes('Raisonnement')) shortTag = 'Raison.';
    else if (shortTag.includes('Blanc') || shortTag.includes('Mock')) shortTag = 'Test Blanc';
    else shortTag = shortTag.substring(0, 8);

    return {
      x,
      y,
      percentage: item.percentage,
      title: item.subTitle,
      shortTag,
      scoreText: `${item.score}/${item.total}`,
      score: item.score,
      total: item.total,
      dateText: item.date || shortDate,
      shortDate,
      exam: item.exam,
      idx: idx + 1
    };
  });

  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');

  const firstX = points[0].x;
  const lastX = points[points.length - 1].x;
  const baselineY = paddingTop + height;
  const areaPathD = `M ${firstX} ${baselineY} L ${points.map(p => `${p.x} ${p.y}`).join(' L ')} L ${lastX} ${baselineY} Z`;

  const y100 = paddingTop;
  const y75 = paddingTop + 0.25 * height;
  const y50 = paddingTop + 0.5 * height;
  const y25 = paddingTop + 0.75 * height;
  const y0 = paddingTop + height;

  const renderChartBody = (selectedIdx) => {
    let elementsHtml = points.map((p, idx) => {
      const isSelected = idx === selectedIdx;
      
      const r = isSelected ? 7 : 5;
      const strokeW = isSelected ? 3 : 2;
      const glowRing = isSelected ? `<circle cx="${p.x}" cy="${p.y}" r="14" fill="#0071E3" opacity="0.18" />` : '';

      return `
        <!-- Vertical guide line -->
        <line x1="${p.x}" y1="${p.y}" x2="${p.x}" y2="${baselineY}" stroke="${isSelected ? 'rgba(0,113,227,0.3)' : 'rgba(0,0,0,0.06)'}" stroke-dasharray="3,3" stroke-width="${isSelected ? '1.5' : '1'}" />

        ${glowRing}

        <!-- Clean Circle Dot -->
        <circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${isSelected ? '#0071E3' : '#FFFFFF'}" stroke="#0071E3" stroke-width="${strokeW}" class="chart-point-dot" data-point-idx="${idx}" style="cursor:pointer; transition:all 0.15s ease;">
          <title>#${p.idx} ${p.title}: ${p.scoreText} (${p.percentage}%) - ${p.dateText}</title>
        </circle>

        <!-- Bottom X Axis Label (Session number) -->
        <text x="${p.x}" y="${baselineY + 18}" fill="${isSelected ? '#0071E3' : '#86868B'}" font-size="${isSelected ? '11' : '10'}" font-weight="${isSelected ? '800' : '600'}" text-anchor="middle" class="chart-point-dot" data-point-idx="${idx}" style="cursor:pointer;">#${p.idx}</text>
      `;
    }).join('');

    // Floating Tooltip Callout ONLY for the active point
    const activeP = points[selectedIdx];

    const activeCallout = `
      <g transform="translate(${activeP.x}, ${activeP.y - 14})" style="transition: transform 0.2s ease;">
        <rect x="-24" y="-12" width="48" height="18" rx="6" fill="#0071E3" />
        <text x="0" y="1" fill="#FFFFFF" font-size="10.5" font-weight="800" text-anchor="middle" dominant-baseline="middle">${activeP.percentage}%</text>
      </g>
    `;

    return `
      <!-- Tip Guidance Box -->
      <div style="background:rgba(0,113,227,0.06); border:1px solid rgba(0,113,227,0.15); padding:8px 12px; border-radius:10px; font-size:12px; color:#0071E3; font-weight:600; display:flex; align-items:center; gap:8px; margin-bottom:8px;">
        <span style="font-size:15px;">💡</span>
        <span>Cliquez sur n'importe quel point (#1, #2...) pour voir la fiche détaillée de la session.</span>
      </div>

      <!-- Scrollable Chart Wrapper -->
      <div style="width:100%; overflow-x:auto; -webkit-overflow-scrolling:touch; padding-bottom:6px;">
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="chart-svg" style="min-width:100%; width:${svgWidth}px; height:${svgHeight}px; overflow:visible;">
          <defs>
            <linearGradient id="score-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0071E3" stop-opacity="0.18" />
              <stop offset="100%" stop-color="#0071E3" stop-opacity="0.0" />
            </linearGradient>
          </defs>

          <!-- Grid Lines & Y Axis Percentage Labels -->
          <line x1="${paddingLeft}" y1="${y100}" x2="${svgWidth - paddingRight}" y2="${y100}" stroke="rgba(0,0,0,0.06)" stroke-dasharray="3,3" />
          <text x="${paddingLeft - 10}" y="${y100 + 4}" fill="#86868B" font-size="10" font-weight="700" text-anchor="end">100%</text>

          <line x1="${paddingLeft}" y1="${y75}" x2="${svgWidth - paddingRight}" y2="${y75}" stroke="rgba(0,0,0,0.04)" stroke-dasharray="3,3" />
          <text x="${paddingLeft - 10}" y="${y75 + 4}" fill="#86868B" font-size="10" font-weight="700" text-anchor="end">75%</text>

          <line x1="${paddingLeft}" y1="${y50}" x2="${svgWidth - paddingRight}" y2="${y50}" stroke="rgba(0,0,0,0.06)" stroke-dasharray="3,3" />
          <text x="${paddingLeft - 10}" y="${y50 + 4}" fill="#86868B" font-size="10" font-weight="700" text-anchor="end">50%</text>

          <line x1="${paddingLeft}" y1="${y25}" x2="${svgWidth - paddingRight}" y2="${y25}" stroke="rgba(0,0,0,0.04)" stroke-dasharray="3,3" />
          <text x="${paddingLeft - 10}" y="${y25 + 4}" fill="#86868B" font-size="10" font-weight="700" text-anchor="end">25%</text>

          <line x1="${paddingLeft}" y1="${y0}" x2="${svgWidth - paddingRight}" y2="${y0}" stroke="rgba(0,0,0,0.15)" stroke-width="1" />
          <text x="${paddingLeft - 10}" y="${y0 + 4}" fill="#86868B" font-size="10" font-weight="700" text-anchor="end">0%</text>

          <!-- Area fill under line -->
          ${points.length > 1 ? `<path d="${areaPathD}" fill="url(#score-gradient)" />` : ''}

          <!-- Connecting Line -->
          ${points.length > 1 ? `<polyline fill="none" stroke="#0071E3" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="${polylinePoints}" />` : ''}

          <!-- Data Points -->
          ${elementsHtml}

          <!-- Active Single Callout -->
          ${activeCallout}
        </svg>
      </div>

      <!-- Active Session Detail Card -->
      <div id="chart-active-card" style="background:#FFFFFF; border:1px solid rgba(0,0,0,0.08); border-radius:14px; padding:14px; box-shadow:0 4px 14px rgba(0,0,0,0.04); margin-top:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-size:11px; font-weight:800; color:#0071E3; background:rgba(0,113,227,0.1); padding:3px 10px; border-radius:6px; text-transform:uppercase;">
            SESSION #${activeP.idx} SUR ${points.length}
          </span>
          <span style="font-size:12px; color:#86868B; font-weight:600;">📅 ${activeP.dateText}</span>
        </div>

        <h4 style="font-size:15px; font-weight:800; color:#1D1D1F; margin:4px 0 10px 0;">${activeP.title}</h4>

        <div style="display:flex; align-items:center; justify-content:space-between; background:#F5F5F7; padding:10px 12px; border-radius:10px;">
          <div>
            <div style="font-size:11px; color:#86868B; font-weight:700; text-transform:uppercase;">Score Obtenu</div>
            <div style="font-size:20px; font-weight:800; color:#1D1D1F;">${activeP.scoreText} <span style="font-size:16px; color:#0071E3;">(${activeP.percentage}%)</span></div>
          </div>
          <span style="background:rgba(0,113,227,0.1); color:#0071E3; padding:6px 12px; border-radius:8px; font-size:12px; font-weight:800;">
            Score : ${activeP.percentage}%
          </span>
        </div>

        <!-- Navigation Buttons for Sessions -->
        <div style="display:flex; gap:8px; margin-top:12px;">
          <button id="btn-chart-prev" class="sub-pill-btn" ${selectedIdx === 0 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} style="flex:1;">‹ Précédent</button>
          <button id="btn-chart-next" class="sub-pill-btn" ${selectedIdx === points.length - 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} style="flex:1;">Suivant ›</button>
        </div>
      </div>
    `;
  };

  const updateChartDisplay = (idx) => {
    activeIndex = Math.max(0, Math.min(points.length - 1, idx));
    wrapper.innerHTML = renderChartBody(activeIndex);

    // Attach Event Listeners
    wrapper.querySelectorAll('.chart-point-dot').forEach(el => {
      el.addEventListener('click', () => {
        const pointIdx = parseInt(el.getAttribute('data-point-idx'), 10);
        updateChartDisplay(pointIdx);
      });
    });

    const btnPrev = document.getElementById('btn-chart-prev');
    if (btnPrev && activeIndex > 0) {
      btnPrev.addEventListener('click', () => updateChartDisplay(activeIndex - 1));
    }

    const btnNext = document.getElementById('btn-chart-next');
    if (btnNext && activeIndex < points.length - 1) {
      btnNext.addEventListener('click', () => updateChartDisplay(activeIndex + 1));
    }
  };

  updateChartDisplay(activeIndex);
}

function init() {
  document.querySelectorAll('.category-card[data-category]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const catKey = card.getAttribute('data-category');
      if (catKey && CATEGORIES[catKey]) {
        openCategory(catKey);
      }
    });
  });

  const btnSelectTage = document.getElementById('btn-select-tage');
  if (btnSelectTage) {
    btnSelectTage.addEventListener('click', () => {
      currentExam = 'tage';
      showView('menu');
    });
  }

  const btnSelectIae = document.getElementById('btn-select-iae');
  if (btnSelectIae) {
    btnSelectIae.addEventListener('click', () => {
      currentExam = 'iae';
      showView('iaeMenu');
    });
  }

  const btnBackPortalTage = document.getElementById('btn-back-portal-tage');
  if (btnBackPortalTage) {
    btnBackPortalTage.addEventListener('click', () => showView('portal'));
  }

  const btnBackPortalIae = document.getElementById('btn-back-portal-iae');
  if (btnBackPortalIae) {
    btnBackPortalIae.addEventListener('click', () => showView('portal'));
  }

  document.getElementById('btn-back-categories').addEventListener('click', () => {
    showView(currentExam === 'iae' ? 'iaeMenu' : 'menu');
  });
  document.getElementById('btn-back-subcat').addEventListener('click', () => showView('subcategory'));
  document.getElementById('btn-back-start').addEventListener('click', () => showView('subcategory'));

  const btnOpenStatsPortal = document.getElementById('btn-open-stats-portal');
  if (btnOpenStatsPortal) btnOpenStatsPortal.addEventListener('click', () => openStatsDashboard(currentExam || 'tage'));
  const btnOpenStatsMenu = document.getElementById('btn-open-stats-menu');
  if (btnOpenStatsMenu) btnOpenStatsMenu.addEventListener('click', () => openStatsDashboard('tage'));
  const btnOpenStatsIae = document.getElementById('btn-open-stats-iae');
  if (btnOpenStatsIae) btnOpenStatsIae.addEventListener('click', () => openStatsDashboard('iae'));

  const btnStatsExamTage = document.getElementById('btn-stats-exam-tage');
  if (btnStatsExamTage) btnStatsExamTage.addEventListener('click', () => {
    activeStatsExamFilter = 'tage';
    activeStatsSubKey = 'all';
    renderStatsDashboard();
  });

  const btnStatsExamIae = document.getElementById('btn-stats-exam-iae');
  if (btnStatsExamIae) btnStatsExamIae.addEventListener('click', () => {
    activeStatsExamFilter = 'iae';
    activeStatsSubKey = 'all';
    renderStatsDashboard();
  });

  const btnBackStats = document.getElementById('btn-back-stats');
  if (btnBackStats) btnBackStats.addEventListener('click', () => showView(currentExam === 'iae' ? 'iaeMenu' : (currentExam === 'tage' ? 'menu' : 'portal')));

  const btnResetStats = document.getElementById('btn-reset-stats');
  if (btnResetStats) {
    btnResetStats.addEventListener('click', () => {
      if (confirm("Voulez-vous vraiment réinitialiser tout votre historique de scores ?")) {
        clearResultsHistory();
        renderStatsDashboard();
      }
    });
  }

  document.querySelectorAll('.pill-count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedQuestionCount = parseInt(btn.getAttribute('data-count'), 10) || 20;
    });
  });

  document.getElementById('btn-commencer').addEventListener('click', startPractice);
  document.getElementById('btn-stop').addEventListener('click', stopPractice);

  document.getElementById('btn-restart').addEventListener('click', () => {
    views.resultsModal.classList.remove('active');
    startPractice();
  });
  
  document.getElementById('btn-modal-menu').addEventListener('click', () => {
    views.resultsModal.classList.remove('active');
    showView('subcategory');
  });

  document.addEventListener('keydown', (e) => {
    if (!views.practice.classList.contains('active')) return;

    if (currentOption.type === 'quiz_yesno') {
      if (e.key === 'o' || e.key === 'O' || e.key === 'y' || e.key === 'Y' || e.key === '1') {
        handleKeyPress('OUI');
      } else if (e.key === 'n' || e.key === 'N' || e.key === '0') {
        handleKeyPress('NON');
      } else if (e.key === 'Escape') {
        stopPractice();
      }
    } else if (currentOption.type === 'quiz_gender') {
      if (e.key === 'm' || e.key === 'M' || e.key === '1') {
        handleKeyPress('MASCULIN');
      } else if (e.key === 'f' || e.key === 'F' || e.key === '2') {
        handleKeyPress('FÉMININ');
      } else if (e.key === 'Escape') {
        stopPractice();
      }
    } else if (currentOption.type === 'quiz_qcm') {
      const keyLower = e.key.toLowerCase();
      if (keyLower === 'a' || e.key === '1') handleKeyPress('0');
      else if (keyLower === 'b' || e.key === '2') handleKeyPress('1');
      else if (keyLower === 'c' || e.key === '3') handleKeyPress('2');
      else if (keyLower === 'd' || e.key === '4') handleKeyPress('3');
      else if (keyLower === 'e' || e.key === '5') handleKeyPress('4');
      else if (e.key === 'Escape') stopPractice();
    } else {
      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleKeyPress('backspace');
      } else if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        e.preventDefault();
        handleKeyPress('enter');
      } else if (e.key === 'Escape') {
        stopPractice();
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
