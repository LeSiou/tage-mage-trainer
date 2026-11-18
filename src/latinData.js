/**
 * TAGE MAGE® — Expression : les locutions latines
 * Fiche de cours (par familles), flashcards et quiz générés à partir d'une seule liste.
 * Ligne = [locution, sens, traduction littérale, exemple, piège ou origine (facultatif)]
 */

const LATIN_THEMES = [
  {
    title: 'Raisonner et argumenter',
    intro: 'Les plus fréquentes au concours : elles servent aussi en Raisonnement & Argumentation.',
    rows: [
      ['a priori', 'De prime abord, avant toute vérification', '« à partir de ce qui est avant »', 'A priori, ce projet semble rentable.', 'Contraire : a posteriori. Graphie classique sans accent sur le a.'],
      ['a posteriori', 'Après coup, une fois l’expérience faite', '« à partir de ce qui est après »', 'On a compris a posteriori pourquoi il avait échoué.', 'C’est l’inverse d’a priori.'],
      ['a fortiori', 'À plus forte raison', '« à partir d’un argument plus fort »', 'S’il ne court pas 5 km, a fortiori pas un marathon.', 'Introduit une conclusion encore plus évidente que la première.'],
      ['a contrario', 'Par l’argument inverse, à l’inverse', '« à partir du contraire »', 'Cette loi interdit le travail des mineurs ; a contrario, elle l’autorise aux majeurs.', 'Ne pas confondre avec a fortiori (renforcement) : ici on inverse.'],
      ['ad hominem', 'Qui attaque la personne au lieu de ses idées', '« vers l’homme »', 'Traiter un expert d’incompétent sans discuter ses chiffres : argument ad hominem.', 'Piège classique en R&A : l’attaque personnelle n’affaiblit pas le raisonnement.'],
      ['ipso facto', 'Par le fait même, automatiquement', '« par le fait lui-même »', 'Tout retard de paiement entraîne ipso facto des pénalités.', null],
      ['de facto', 'Dans les faits, en pratique', '« de fait »', 'Il est de facto le chef de l’équipe, sans en avoir le titre.', 'S’oppose à de jure (en droit, officiellement).'],
      ['de jure', 'En droit, officiellement', '« de droit »', 'Le président est de jure le chef des armées.', 'Contraire : de facto.'],
      ['sine qua non', 'Indispensable', '« sans laquelle non »', 'Le diplôme est une condition sine qua non pour postuler.', 'Ne pas confondre avec sine die (sans date fixée).'],
      ['mutatis mutandis', 'En faisant les adaptations nécessaires', '« en changeant ce qui doit être changé »', 'La règle des PME s’applique, mutatis mutandis, aux associations.', null],
      ['ceteris paribus', 'Toutes choses égales par ailleurs', '« les autres choses étant égales »', 'Ceteris paribus, une hausse des prix fait baisser la demande.', 'Très utilisé en économie.'],
      ['post hoc, ergo propter hoc', 'Erreur qui confond succession et cause', '« après cela, donc à cause de cela »', 'Le coq chante, puis le soleil se lève : le coq ne fait pas lever le soleil.', 'Le sophisme roi des questions R&A : corrélation ≠ causalité.'],
      ['stricto sensu', 'Au sens strict', '« au sens resserré »', 'Stricto sensu, une tomate est un fruit.', 'Contraire : lato sensu (au sens large).'],
      ['lato sensu', 'Au sens large', '« au sens large »', 'Lato sensu, la culture inclut aussi les jeux vidéo.', null]
    ]
  },
  {
    title: 'Le temps et le moment',
    intro: 'Quand, combien de temps, jusqu’à quand.',
    rows: [
      ['sine die', 'Sans fixer de date', '« sans jour »', 'La réunion est reportée sine die.', 'Ne veut pas dire « pour toujours » : seulement « sans date fixée ».'],
      ['ad vitam aeternam', 'Pour toujours', '« pour la vie éternelle »', 'Il ne va pas attendre ad vitam aeternam.', 'Ne pas confondre avec sine die.'],
      ['in extremis', 'Au tout dernier moment', '« dans les derniers moments »', 'Le but a été marqué in extremis.', null],
      ['illico', 'Sur-le-champ, immédiatement', '« sur le lieu même »', 'Il est parti illico.', '« Illico presto » mêle latin et italien : familier.'],
      ['hic et nunc', 'Ici et maintenant, sans délai', '« ici et maintenant »', 'Il exige une réponse hic et nunc.', null],
      ['ab initio', 'Depuis le début', '« depuis le commencement »', 'Le contrat est nul ab initio.', null],
      ['in fine', 'À la fin (d’un texte, d’un chapitre)', '« dans la fin »', 'La clause figure in fine, au dernier paragraphe.', 'L’emploi pour « finalement » est courant mais critiqué : préférer « au bout du compte ».'],
      ['ad interim', 'Par intérim, provisoirement', '« dans l’intervalle »', 'Il dirige le service ad interim.', 'On écrit aussi simplement « par intérim ».'],
      ['statu quo', 'L’état actuel des choses', '« dans l’état où »', 'Les négociations ont abouti au statu quo.', 'Invariable : des statu quo. Et non « status quo » en français.'],
      ['post mortem', 'Après la mort', '« après la mort »', 'Une œuvre publiée post mortem.', null],
      ['in medias res', 'Au milieu de l’action', '« au milieu des choses »', 'Le roman commence in medias res, en pleine bataille.', 'Procédé de récit : on entre sans présentation.']
    ]
  },
  {
    title: 'Le lieu et la manière',
    intro: 'Comment, où, de quelle façon.',
    rows: [
      ['in situ', 'Sur place, dans son milieu', '« dans le lieu »', 'Les fresques ont été restaurées in situ.', null],
      ['in vitro', 'En laboratoire, hors de l’organisme', '« dans le verre »', 'Une fécondation in vitro.', 'Contraire : in vivo (dans l’organisme vivant).'],
      ['in vivo', 'Dans l’organisme vivant', '« dans le vivant »', 'Le médicament a été testé in vivo.', null],
      ['intra-muros', 'À l’intérieur de la ville', '« à l’intérieur des murs »', 'Habiter Paris intra-muros.', 'Contraire : extra-muros.'],
      ['de visu', 'En le voyant soi-même', '« d’après ce qu’on a vu »', 'Je l’ai constaté de visu.', 'Pléonasme à éviter : « constater de visu de mes propres yeux ».'],
      ['ex abrupto', 'Brusquement, sans préambule', '« à partir de l’abrupt »', 'Il a lancé sa question ex abrupto.', null],
      ['in extenso', 'Intégralement, en entier', '« dans toute son étendue »', 'Le discours est publié in extenso.', 'Contraire d’un résumé.'],
      ['grosso modo', 'En gros, approximativement', '« de façon grossière »', 'Grosso modo, il faut deux heures.', null],
      ['ex nihilo', 'À partir de rien', '« à partir de rien »', 'Une ville construite ex nihilo.', null],
      ['ex aequo', 'À égalité, au même rang', '« à partir de l’égal »', 'Ils finissent premiers ex aequo.', 'Invariable : deux ex aequo.'],
      ['manu militari', 'Par la force (armée ou policière)', '« par la main militaire »', 'Les manifestants ont été expulsés manu militari.', null],
      ['motu proprio', 'De sa propre initiative', '« de son propre mouvement »', 'Il a démissionné motu proprio.', null],
      ['a minima', 'Au minimum, le moins possible', '« à partir du plus petit »', 'Une réforme appliquée a minima.', 'Jamais « à minima » avec un accent.'],
      ['ad hoc', 'Conçu exprès pour cela', '« pour cela »', 'Une commission ad hoc.', 'Ne veut pas dire « improvisé ».'],
      ['ad libitum', 'À volonté, au choix', '« selon le désir »', 'Café servi ad libitum.', 'Abrégé « ad lib ».'],
      ['vice versa', 'Inversement, réciproquement', '« la place étant tournée »', 'Il l’aide en maths et vice versa.', null],
      ['modus operandi', 'Manière de procéder', '« manière d’opérer »', 'Le cambrioleur a toujours le même modus operandi.', 'Ne pas confondre avec modus vivendi.'],
      ['modus vivendi', 'Accommodement qui permet de cohabiter', '« manière de vivre »', 'Les deux associés ont trouvé un modus vivendi.', 'Un compromis, pas une méthode.'],
      ['sui generis', 'Unique en son genre, particulier', '« de son propre genre »', 'Une odeur sui generis.', null],
      ['ad nauseam', 'Jusqu’à l’écœurement', '« jusqu’à la nausée »', 'Il répète son argument ad nauseam.', null]
    ]
  },
  {
    title: 'Droit, politique et société',
    intro: 'Le vocabulaire des institutions, de la diplomatie et des écrits.',
    rows: [
      ['casus belli', 'Fait qui justifie une guerre', '« cas de guerre »', 'L’invasion de la frontière a été un casus belli.', null],
      ['persona non grata', 'Personne indésirable', '« personne non bienvenue »', 'L’ambassadeur a été déclaré persona non grata.', null],
      ['habeas corpus', 'Garantie contre l’arrestation arbitraire', '« que tu aies le corps »', 'L’habeas corpus anglais date de 1679.', null],
      ['quorum', 'Nombre minimal de présents pour voter', '« desquels »', 'Faute de quorum, l’assemblée ne peut pas délibérer.', null],
      ['primus inter pares', 'Premier parmi ses égaux', '« premier entre égaux »', 'Le doyen n’est qu’un primus inter pares.', null],
      ['pro domo', 'Pour sa propre cause', '« pour sa maison »', 'Un plaidoyer pro domo.', 'Se dit d’une défense intéressée.'],
      ['vox populi', 'L’opinion du plus grand nombre', '« la voix du peuple »', 'Il se fie à la vox populi.', null],
      ['ultima ratio', 'Le dernier recours', '« la raison ultime »', 'La force doit rester l’ultima ratio.', null],
      ['alter ego', 'Personne de confiance, double', '« un autre moi »', 'Son associé est son alter ego.', null],
      ['mea culpa', 'Aveu de sa faute', '« par ma faute »', 'Le ministre a fait son mea culpa.', 'Invariable : des mea culpa.'],
      ['nec plus ultra', 'Ce qu’il y a de mieux', '« rien au-delà »', 'Ce téléphone est le nec plus ultra.', null],
      ['curriculum vitae', 'Parcours d’une personne (CV)', '« déroulement de la vie »', 'Envoyez votre curriculum vitae.', null],
      ['quitus', 'Décharge reconnaissant une gestion correcte', '« quitte, libéré »', 'L’assemblée a donné quitus au trésorier.', 'On « donne quitus ».'],
      ['satisfecit', 'Approbation, témoignage de satisfaction', '« il a satisfait »', 'Il a reçu un satisfecit du jury.', null],
      ['vade-mecum', 'Guide pratique qu’on garde sur soi', '« viens avec moi »', 'Un vade-mecum du jeune salarié.', null],
      ['deus ex machina', 'Dénouement providentiel et inattendu', '« un dieu sorti de la machine »', 'Ce rachat de dernière minute fut un deus ex machina.', 'Au théâtre antique, un dieu descendait grâce à une machine.'],
      ['lapsus', 'Erreur involontaire de mot', '« glissement »', 'Un lapsus révélateur.', 'Lapsus linguae (à l’oral), lapsus calami (à l’écrit).'],
      ['urbi et orbi', 'À tout le monde, partout', '« à la ville et au monde »', 'Il raconte sa victoire urbi et orbi.', null],
      ['ex cathedra', 'Avec autorité, sur un ton doctoral', '« depuis la chaire »', 'Il parle toujours ex cathedra.', null],
      ['terra incognita', 'Domaine inconnu', '« terre inconnue »', 'La finance reste pour lui une terra incognita.', null]
    ]
  },
  {
    title: 'Les écrits et les abréviations',
    intro: 'Ce qu’on croise dans les textes, les notes et les citations.',
    rows: [
      ['sic', 'Cité tel quel, malgré l’erreur', '« ainsi »', 'Il écrit : « Je vous est envoyé (sic) le dossier. »', 'L’erreur vient du texte cité, pas de celui qui cite.'],
      ['verbatim', 'Mot pour mot', '« mot à mot »', 'Le verbatim de l’entretien.', 'L’opposé d’un résumé.'],
      ['et cetera (etc.)', 'Et le reste', '« et les autres choses »', 'Pommes, poires, etc.', 'Jamais « etc… » : etc. n’est jamais suivi de points de suspension.'],
      ['nota bene (N.B.)', 'Remarque importante', '« note bien »', 'N.B. : le dossier doit être signé.', null],
      ['post-scriptum (P.-S.)', 'Ajout après la signature', '« écrit après »', 'P.-S. : n’oublie pas la clé.', null],
      ['id est (i.e.)', 'C’est-à-dire', '« c’est »', 'Les PME, i.e. les petites et moyennes entreprises.', null],
      ['idem', 'Le même, de même', '« le même »', 'Il a eu 15, et son frère idem.', null],
      ['ibidem (ibid.)', 'Au même endroit (même ouvrage cité)', '« ici même »', 'Note 3 : ibid., p. 42.', null],
      ['in memoriam', 'À la mémoire de', '« en mémoire »', 'Un concert in memoriam.', null],
      ['addenda', 'Ajouts à la fin d’un ouvrage', '« choses à ajouter »', 'Les addenda du rapport.', 'Contraire : errata (erreurs à corriger).']
    ]
  },
  {
    title: 'Les citations célèbres',
    intro: 'Les phrases latines qui reviennent en culture générale et dans les textes.',
    rows: [
      ['alea jacta est', 'Le sort en est jeté, plus de retour possible', '« le dé est jeté »', 'Attribuée à César au passage du Rubicon (49 av. J.-C.).', null],
      ['veni, vidi, vici', 'Victoire rapide et facile', '« je suis venu, j’ai vu, j’ai vaincu »', 'César, après la victoire de Zéla (47 av. J.-C.).', null],
      ['carpe diem', 'Profite du jour présent', '« cueille le jour »', 'Horace, Odes.', null],
      ['errare humanum est', 'L’erreur est humaine', '« se tromper est humain »', 'La suite : perseverare diabolicum, persévérer est diabolique.', null],
      ['panem et circenses', 'Distraire le peuple pour le faire taire', '« du pain et des jeux »', 'Juvénal, Satires.', null],
      ['vae victis', 'Malheur aux vaincus', '« malheur aux vaincus »', 'Le chef gaulois Brennus, après la prise de Rome.', null],
      ['cogito, ergo sum', 'Je pense, donc je suis', '« je pense, donc je suis »', 'Descartes, Discours de la méthode (1637).', null],
      ['mens sana in corpore sano', 'Un esprit sain dans un corps sain', '« un esprit sain dans un corps sain »', 'Juvénal.', null],
      ['si vis pacem, para bellum', 'Qui veut la paix prépare la guerre', '« si tu veux la paix, prépare la guerre »', 'Végèce.', null],
      ['dura lex, sed lex', 'La loi est dure, mais c’est la loi', '« loi dure, mais loi »', 'Se dit d’une règle qu’on applique même si elle coûte.', null],
      ['o tempora, o mores', 'Quelle époque ! Quelles mœurs !', '« ô temps, ô mœurs »', 'Cicéron, Catilinaires.', null],
      ['homo homini lupus', 'L’homme est un loup pour l’homme', '« l’homme, un loup pour l’homme »', 'Plaute, repris par Hobbes.', null],
      ['festina lente', 'Hâte-toi lentement', '« hâte-toi lentement »', 'Devise attribuée à l’empereur Auguste.', 'C’est un oxymore.'],
      ['audaces fortuna juvat', 'La chance sourit aux audacieux', '« la fortune aide les audacieux »', 'Proverbe latin, proche d’un vers de Virgile (Énéide).', null],
      ['verba volant, scripta manent', 'Les paroles s’envolent, les écrits restent', '« les paroles volent, les écrits restent »', 'Conseil : faites tout confirmer par écrit.', null],
      ['in vino veritas', 'Dans le vin, la vérité', '« dans le vin, la vérité »', 'L’alcool délie les langues.', null],
      ['fluctuat nec mergitur', 'Il est battu par les flots, mais ne sombre pas', '« il flotte et ne coule pas »', 'Devise de la ville de Paris.', null],
      ['nihil novi sub sole', 'Rien de nouveau sous le soleil', '« rien de nouveau sous le soleil »', 'L’Ecclésiaste.', null],
      ['memento mori', 'Souviens-toi que tu vas mourir', '« souviens-toi de mourir »', 'Thème des vanités en peinture.', null]
    ]
  }
];

const CITATIONS_THEME = 5;
const exLabel = e => (e.theme === CITATIONS_THEME ? 'Source :' : 'Ex :');

const ALL_LATIN = LATIN_THEMES.flatMap((t, ti) => t.rows.map(r => ({
  loc: r[0], sens: r[1], litt: r[2], ex: r[3], piege: r[4], theme: ti
})));

export const LATIN_COUNT = ALL_LATIN.length;

// ---------------------------------------------------------------------------
// Fiche de cours : une partie par famille, chaque locution en « entrée de dictionnaire »
// ---------------------------------------------------------------------------
function entryHtml(e) {
  return `<div class="latin-entry">
    <div class="latin-head"><span class="latin-loc">${e.loc}</span><span class="latin-litt">${e.litt}</span></div>
    <div class="latin-sens">${e.sens}</div>
    <div class="latin-ex">${e.ex}</div>
    ${e.piege ? `<div class="latin-trap">${e.piege}</div>` : ''}
  </div>`;
}

export const LATIN_FICHE = {
  id: 'expr_latin',
  title: 'Les locutions latines',
  desc: `${LATIN_COUNT} locutions classées par famille : sens, traduction, exemple et piège.`,
  subtitle: 'Ce qu’il faut connaître pour les questions de vocabulaire et de sens',
  html: `<div>${LATIN_THEMES.map((t, i) => `
    <div class="math-card-visual">
      <div class="math-card-title">${i + 1}. ${t.title}</div>
      <p class="lesson-intro">${t.intro}</p>
      <div class="latin-list">${ALL_LATIN.filter(e => e.theme === i).map(entryHtml).join('')}</div>
    </div>`).join('')}</div>`
};

// ---------------------------------------------------------------------------
// Flashcards
// ---------------------------------------------------------------------------
export const LATIN_FLASHCARDS = ALL_LATIN.map((e, i) => ({
  id: i + 1,
  category: LATIN_THEMES[e.theme].title,
  front: e.loc,
  backName: e.sens,
  backDef: `Mot à mot : ${e.litt}. ${exLabel(e)} ${e.ex}`,
  backTrap: e.piege || ''
}));

// ---------------------------------------------------------------------------
// Quiz : généré à chaque partie, dans les deux sens (locution → sens, sens → locution)
// Les mauvaises réponses viennent en priorité de la même famille (plus difficile).
// ---------------------------------------------------------------------------
function pickDistractors(e, key, n) {
  const same = ALL_LATIN.filter(x => x !== e && x.theme === e.theme);
  const other = ALL_LATIN.filter(x => x !== e && x.theme !== e.theme);
  const shuffle = arr => arr.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(v => v[1]);
  const pool = [...shuffle(same).slice(0, 3), ...shuffle(other)];
  const seen = new Set([e[key]]);
  const out = [];
  for (const x of pool) {
    if (out.length >= n) break;
    if (!seen.has(x[key])) { seen.add(x[key]); out.push(x[key]); }
  }
  return out;
}

export function generateLatinQuizDeck() {
  return ALL_LATIN.map((e, i) => {
    const reverse = i % 3 === 2; // un tiers des questions dans l'autre sens
    if (reverse) {
      return {
        prompt: `Quelle locution latine signifie : <em>${e.sens.toLowerCase()}</em> ?`,
        options: [e.loc, ...pickDistractors(e, 'loc', 4)],
        answerIndex: 0,
        explanation: `<strong>${e.loc}</strong> (${e.litt}). ${exLabel(e)} ${e.ex}${e.piege ? ' — ' + e.piege : ''}`
      };
    }
    return {
      prompt: `Que signifie <em>${e.loc}</em> ?`,
      options: [e.sens, ...pickDistractors(e, 'sens', 4)],
      answerIndex: 0,
      explanation: `Mot à mot ${e.litt}. ${exLabel(e)} ${e.ex}${e.piege ? ' — ' + e.piege : ''}`
    };
  });
}
