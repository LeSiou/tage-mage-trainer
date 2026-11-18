/**
 * TAGE MAGE - Module Compréhension de textes (CT) et Raisonnement & Argumentation (R&A)
 * Fiches de méthode, flashcards de pièges, exercices CT, exercices R&A, proverbes.
 * Source : méthode de l’entonnoir du Grand Manuel du TAGE MAGE + analyse des tests blancs.
 */

export const TM_CT_FICHES = [
  {
    id: "ct_methode",
    title: "Méthode CT : tester chaque option contre le texte",
    desc: "Lire la structure, puis juger chaque option seule, ligne à l’appui, au lieu de comparer les options entre elles.",
    subtitle: "Compréhension de textes — méthode de l’entonnoir appliquée option par option",
    html: `
  <div style="display:flex; flex-direction:column; gap:16px;">
    <div class="math-card-visual">
      <div class="math-card-title">1. Lire : repérer la structure avant les questions</div>
      <div class="math-desc-list">
        <p>• <strong>Thèse :</strong> l’idée que l’auteur défend. Elle suit souvent un « mais », « pourtant », « en définitive », « donc ».</p>
        <p>• <strong>Concession :</strong> après « certes », « il est vrai que », « même si », l’idée est reconnue, pas défendue.</p>
        <p>• <strong>Exemples :</strong> après « par exemple », « notamment », « ainsi », on lit un détail, pas l’idée générale.</p>
        <p>• <strong>Au crayon :</strong> 2 à 3 mots par paragraphe + un trait sous les chiffres, listes et connecteurs. Ce plan de lecture sert à toutes les questions.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">2. Juger : une option, un test, une preuve</div>
      <div class="math-desc-list">
        <p>• <strong>Puis-je pointer la ligne qui la justifie ?</strong> Si non, c’est une information hors texte ou une sur-interprétation.</p>
        <p>• <strong>Pourrait-elle être le titre d’un autre texte sur le même thème ?</strong> Si oui, elle est <em>trop vague</em>.</p>
        <p>• <strong>Ne couvre-t-elle qu’un paragraphe, un exemple, un chiffre ?</strong> Si oui, elle est <em>partielle / trop précise</em>.</p>
        <p>• <strong>Va-t-elle plus loin que le texte ?</strong> Cause, conséquence, intention ou jugement non écrits : <em>sur-interprétation</em>. Mot absolu (« toujours », « jamais », « seul », « tous », « uniquement ») : <em>extrême</em>.</p>
        <p>• <strong>Mélange-t-elle vrai et faux ?</strong> Une seule partie fausse suffit à éliminer toute l’option.</p>
        <p>• <strong>Dit-elle le contraire ?</strong> Même vocabulaire mais relation inversée : <em>contresens</em>.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">3. L’erreur à éviter : « la moins vague des cinq »</div>
      <div class="math-desc-list">
        <p>• <strong>Chaque distracteur est faux pour SA raison</strong>, pas parce qu’un autre est encore pire. Dire « la D est encore plus vague » revient à classer les options entre elles : c’est subjectif, donc instable.</p>
        <p>• <strong>Chaque option se juge seule</strong>, contre le texte uniquement. Si la B passe tous les tests, on la coche, même si la D « pourrait aussi passer ». Si la D paraît passer, c’est qu’un test n’a pas été fait jusqu’au bout : on revient à la ligne.</p>
        <p>• <strong>Le texte est l’arbitre unique.</strong> Ce que vous pensez du sujet, ce que vous avez entendu à la radio, ce qui « semble logique » ne comptent pas.</p>
        <p>• <strong>Après l’élimination (filtre fond), il reste 2 ou 3 options :</strong> on départage alors par la forme (vocabulaire, jargon, ton, structure du texte), comme dans la méthode de l’entonnoir.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">4. Verrouiller avant de cocher</div>
      <div class="math-desc-list">
        <p>• <strong>Relire la dernière ligne de la question.</strong> Soutient ou s’oppose ? Vraie ou fausse ? « Sauf » ? Titre, résumé ou idée principale ? Une consigne mal lue coûte une question « facile ».</p>
        <p>• <strong>Retourner à la ligne</strong> pour tout détail (nom, date, chiffre, ville dans une liste). La mémoire reconstruit, elle ne cite pas.</p>
        <p>• <strong>Règle :</strong> ne changer une réponse que si l’on peut souligner la ligne qui prouve que la première est fausse. Un doute sans preuve ne justifie aucun changement.</p>
        <p>• <strong>Piège classique :</strong> les corrigés semblent « subjectifs » quand on n’a pas appliqué les tests. En les appliquant, chaque mauvaise réponse a une étiquette (trop vague, partielle, extrême, hors texte, contresens).</p>
      </div>
    </div>
  </div>
`
  },
  {
    id: "ct_types",
    title: "Les types de questions CT et leur réflexe",
    desc: "Idée principale, titre, résumé, intention, « lesquelles sont vraies », vocabulaire, inférence, structure : un réflexe par question.",
    subtitle: "Compréhension de textes — typologie et pièges associés",
    html: `
  <div style="display:flex; flex-direction:column; gap:16px;">
    <div class="math-card-visual">
      <div class="math-card-title">1. Idée principale, titre, résumé : ne pas les confondre</div>
      <div class="math-desc-list">
        <p>• <strong>Idée principale :</strong> la thèse qui englobe tout le texte. Réflexe : la phrase après le « mais » ou le « donc » final. Pièges : idée secondaire (trop précise), banalité (trop vague).</p>
        <p>• <strong>Titre :</strong> spécifique ET couvrant. Il nomme le sujet <em>et</em> la thèse. Pièges : titre qui ne couvre qu’une partie, titre passe-partout, titre-conclusion trop vague.</p>
        <p>• <strong>Résumé :</strong> toutes les étapes, dans l’ordre du texte (constat, limite, remède). Pièges : résumé partiel, conclusion seule, idée ajoutée.</p>
        <p>• <strong>Conclusion :</strong> la dernière étape de l’argument, pas un résumé. Un titre n’est pas une conclusion, une conclusion n’est pas un résumé : relire la consigne.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">2. Intention de l’auteur et position</div>
      <div class="math-desc-list">
        <p>• <strong>Intention :</strong> verbe d’action (dénoncer, informer, nuancer, alerter, justifier, ironiser). Se déduit du ton et des connecteurs.</p>
        <p>• <strong>Ironie :</strong> si une phrase semble flatteuse mais absurde, l’auteur critique. Ne jamais prendre une ironie au premier degré.</p>
        <p>• <strong>Pièges :</strong> verbe trop fort (« prouver », « démontrer », « accuser ») pour un auteur qui insinue ; but trop général (« dénoncer le surmenage ») pour un texte sur une cible précise.</p>
        <p>• <strong>Pourquoi l’auteur cite-t-il X ?</strong> Regarder ce qu’il fait de X juste après : l’illustre-t-il, le critique-t-il, le limite-t-il ?</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">3. « Lesquelles sont vraies ? » (choix multiple)</div>
      <div class="math-desc-list">
        <p>• <strong>Méthode :</strong> tester chaque affirmation seule, avec la ligne du texte. Noter V ou F, puis choisir la combinaison. Ne jamais partir des combinaisons.</p>
        <p>• <strong>Pièges :</strong> « n’a pas baissé » ≠ « a augmenté » ; « plusieurs » ≠ « toutes » ; une info <em>mentionnée</em> n’est pas une <em>raison</em> ; un chiffre appliqué à la mauvaise catégorie.</p>
        <p>• <strong>Astuce :</strong> si deux affirmations sont certaines (V) et une est certaine (F), cela élimine déjà plusieurs combinaisons. Utiliser l’élimination.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">4. Vocabulaire en contexte, inférence, structure et registre</div>
      <div class="math-desc-list">
        <p>• <strong>Vocabulaire :</strong> lire la phrase avant et après, remplacer le mot par chaque option. Se méfier du sens courant d’un mot polysémique et des paronymes.</p>
        <p>• <strong>Inférence :</strong> ce qui découle logiquement du texte, sans rien ajouter. Pas de recommandation, pas de cause inventée, pas de chiffre nouveau.</p>
        <p>• <strong>Structure :</strong> concession, objection, conclusion ; thèse, antithèse, synthèse ; constat, causes, remèdes. Les mots-signaux la révèlent.</p>
        <p>• <strong>Registre :</strong> mesuré, polémique, ironique, didactique, alarmiste. Le registre de la bonne réponse doit correspondre à celui du texte.</p>
        <p>• <strong>« Selon l’auteur » :</strong> répondre d’après le texte, pas d’après ses opinions ou l’actualité, même si l’on n’est pas d’accord.</p>
      </div>
    </div>
  </div>
`
  },
  {
    id: "ra_methode",
    title: "R&A : soutient, affaiblit, conclusion, présupposé",
    desc: "Réflexes et pièges de chaque type de question de Raisonnement & Argumentation, avec paradoxes, analogies et proverbes.",
    subtitle: "Raisonnement & Argumentation — types de questions et pièges classiques",
    html: `
  <div style="display:flex; flex-direction:column; gap:16px;">
    <div class="math-card-visual">
      <div class="math-card-title">1. Soutient / soutient le plus</div>
      <div class="math-desc-list">
        <p>• <strong>Soutient :</strong> va dans le sens de l’auteur. Plusieurs options peuvent le faire.</p>
        <p>• <strong>Soutient le plus :</strong> étape 1, isoler les options qui vont dans le sens du texte ; étape 2, prendre la plus directe et la plus explicite, celle qui reformule l’idée sans rien ajouter.</p>
        <p>• <strong>Pièges :</strong> option trop radicale (« jamais », « toujours », « seul »), hors sujet, détail érigé en règle, contresens qui reprend le vocabulaire.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">2. Affaiblit / contredit</div>
      <div class="math-desc-list">
        <p>• <strong>Affaiblit :</strong> atténue la force du raisonnement sans forcément dire le contraire. Cherche une autre cause, une cause inversée, une variable cachée, un cas qui limite la portée, une faille dans l’analogie.</p>
        <p>• <strong>Contredit / s’oppose :</strong> incompatible avec l’énoncé : les deux ne peuvent pas être vrais ensemble. Test : peuvent-ils coexister ? Si oui, ce n’est pas une contradiction.</p>
        <p>• <strong>Pièges :</strong> « affaiblit » ≠ « contredit » ; une option qui soutient ; un fait hors sujet (coût, popularité) qui n’attaque pas le lien entre prémisse et conclusion ; un cas individuel contre une statistique.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">3. Conclusion / résumé</div>
      <div class="math-desc-list">
        <p>• <strong>Conclusion :</strong> ce qui découle des prémisses, rien de plus. Formuler sa propre conclusion avant de lire les options.</p>
        <p>• <strong>Pièges :</strong> conclusion trop forte (« aucun effet », « toujours »), réciproque abusive (« tous les A sont B » devient « tous les B sont A »), prescription non appuyée.</p>
        <p>• <strong>Résumé :</strong> toutes les étapes de l’argument ; ne pas le confondre avec la conclusion seule.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">4. Présupposé / hypothèse sous-jacente</div>
      <div class="math-desc-list">
        <p>• <strong>Définition :</strong> ce qui est supposé vrai pour que le raisonnement tienne, sans être écrit.</p>
        <p>• <strong>Test de négation :</strong> si la proposition était fausse, l’argument s’effondrerait-il ? Si oui, c’est un présupposé.</p>
        <p>• <strong>Pièges :</strong> une conséquence possible, un fait vrai mais non nécessaire, une généralisation extrême, un fait qui répète l’énoncé.</p>
      </div>
    </div>

    <div class="math-card-visual">
      <div class="math-card-title">5. Paradoxe, analogie, proverbes</div>
      <div class="math-desc-list">
        <p>• <strong>Paradoxe :</strong> deux faits qui semblent incompatibles. La bonne réponse en ajoute un troisième qui les réconcilie (volume, mesure, délai). Elle ne conteste pas un des deux faits.</p>
        <p>• <strong>Analogie (A est à B ce que C est à ?) :</strong> nommer le lien du premier couple (lieu, produit, agent, mesure, partie de) puis tester chaque option avec ce lien précis. Même univers ne veut pas dire même lien.</p>
        <p>• <strong>Proverbes :</strong> traduire d’abord en idée générale (« l’apparence trompe »), puis chercher le sens, pas les mots. Écarter le sens littéral, les options extrêmes et l’inversion équivalent / contraire selon la consigne.</p>
        <p>• <strong>Pièges communs à tous :</strong> « le plus » (la plus directe l’emporte), consigne mal lue, comparaison des options entre elles, changement de réponse sans preuve.</p>
      </div>
    </div>
  </div>
`
  }
];

export const TM_CT_FLASHCARDS = [
  {
    "id": 1,
    "category": "Type de piège",
    "front": "Une réponse qui pourrait servir de titre à n’importe quel texte sur le même thème…",
    "backName": "Trop vague / trop général",
    "backDef": "Elle reste vraie, mais ne dit rien de précis sur CE texte (« Le monde du travail évolue »). Test : pourrait-elle être la réponse d’un autre texte du même sujet ? Si oui, elle est éliminée.",
    "backTrap": "Ne pas la rejeter en la comparant aux autres (« la D est encore plus vague ») : chaque option se juge seule contre le texte. Une réponse précise et fausse reste fausse."
  },
  {
    "id": 2,
    "category": "Type de piège",
    "front": "Une réponse exacte mais qui ne reprend qu’un paragraphe, un exemple ou un chiffre du texte…",
    "backName": "Trop précise / partielle",
    "backDef": "Elle est vraie pour une partie seulement. Il manque une idée ou un acteur important : elle ne couvre pas l’ensemble. Test : « Ne couvre-t-elle qu’un paragraphe ? »",
    "backTrap": "Une réponse vraie n’est pas forcément la bonne. Pour un titre, une idée principale ou un résumé, il faut couvrir tout le texte."
  },
  {
    "id": 3,
    "category": "Type de piège",
    "front": "Une réponse qui contient « toujours », « jamais », « seul », « tous » alors que le texte nuance…",
    "backName": "Réponse extrême / radicale",
    "backDef": "Elle durcit le texte au-delà de ce qu’il dit. L’auteur écrit « souvent », « rarement », « surtout » : la réponse écrit « toujours », « jamais », « uniquement ». Ces textes sont presque toujours nuancés.",
    "backTrap": "Un seul mot absolu suffit à rendre une option fausse. Mais attention : s’il est explicitement écrit dans le texte, elle peut être correcte."
  },
  {
    "id": 4,
    "category": "Type de piège",
    "front": "Une réponse plausible, intelligente, qui va plus loin que ce qui est écrit…",
    "backName": "Sur-interprétation",
    "backDef": "Elle ajoute une cause, une conséquence, une intention ou un jugement que le texte ne donne pas. Test : « Puis-je pointer la ligne qui la justifie ? » Si je dois deviner, c’est non.",
    "backTrap": "Se méfier de ses connaissances personnelles : on répond d’après le texte, pas d’après ce que l’on sait du sujet ou de l’actualité."
  },
  {
    "id": 5,
    "category": "Type de piège",
    "front": "Une réponse qui dit exactement le contraire du texte, avec les mêmes mots-clés…",
    "backName": "Contresens / inversion",
    "backDef": "Elle reprend le vocabulaire du texte mais inverse la relation (cause et effet, plus et moins, pour et contre). Elle attire car elle « sonne juste ».",
    "backTrap": "Relire la phrase du texte et comparer sens par sens, pas mot par mot. Surveiller les négations et les « plutôt que »."
  },
  {
    "id": 6,
    "category": "Type de piège",
    "front": "Une réponse tout à fait crédible sur le sujet, mais dont aucune phrase du texte ne parle…",
    "backName": "Hors texte",
    "backDef": "Elle est possible dans la réalité mais n’est ni écrite ni déductible. Au TAGE MAGE, une information non présente dans le texte est fausse.",
    "backTrap": "Si on ne peut pas souligner l’appui dans le texte, on élimine, même si l’on est d’accord avec l’idée."
  },
  {
    "id": 7,
    "category": "Type de piège",
    "front": "Une réponse dont la première moitié est juste et la fin déformée…",
    "backName": "Mélange vrai / faux",
    "backDef": "Une partie de la réponse est fausse : toute la réponse est fausse. Elle commence bien, puis glisse sur un chiffre, un acteur, une cause ou une portée.",
    "backTrap": "Lire l’option jusqu’au dernier mot. Vérifier chaque élément, pas seulement le début."
  },
  {
    "id": 8,
    "category": "Type de piège",
    "front": "Une réponse tirée du texte et exacte, mais qui répond à une autre question que celle posée…",
    "backName": "Vraie mais hors question",
    "backDef": "Exemple : on demande un résumé, la réponse est la conclusion ; on demande une raison, la réponse est une simple mention. Une info mentionnée n’est pas forcément une raison.",
    "backTrap": "Relire la dernière ligne de la question avant de cocher : titre, résumé, idée principale, conclusion ne sont pas interchangeables."
  },
  {
    "id": 9,
    "category": "Type de piège",
    "front": "Une réponse qui contient un jugement de valeur ou un ton absent du texte…",
    "backName": "Réponse connotée",
    "backDef": "Elle ajoute « scandaleux », « dangereux », « excellent » alors que le texte reste neutre. Aucun jugement personnel ne doit être ajouté.",
    "backTrap": "Le niveau de langue et le ton de la bonne réponse doivent correspondre à ceux du texte."
  },
  {
    "id": 10,
    "category": "Type de piège",
    "front": "Je juge une option « trop vague » en me disant que la suivante l’est encore plus…",
    "backName": "Comparer les options entre elles",
    "backDef": "C’est le réflexe qui transforme un exercice objectif en jugement subjectif. Les options ne se classent pas entre elles : chacune est testée seule contre le texte.",
    "backTrap": "Méthode : une option = un test = une preuve. La bonne réponse n’est pas « la moins vague des cinq » : chaque distracteur est faux pour SA raison."
  },
  {
    "id": 11,
    "category": "Type de piège",
    "front": "Je change ma réponse au dernier moment sans avoir trouvé de nouvel élément dans le texte…",
    "backName": "Changement sans preuve",
    "backDef": "Le doute n’est pas une information. La première intuition n’est ni meilleure ni pire : seule une preuve dans le texte le justifie.",
    "backTrap": "Règle : ne changer de réponse que si je peux souligner la ligne qui prouve que la première est fausse."
  },
  {
    "id": 12,
    "category": "Type de piège",
    "front": "Je réponds à « laquelle s’oppose ? » en choisissant celle qui soutient le texte…",
    "backName": "Consigne mal lue",
    "backDef": "Soutient, s’oppose, affaiblit, contredit, « sauf » : un mot de la consigne inverse la réponse. Ce sont des erreurs d’inattention coûteuses, pas des erreurs de compréhension.",
    "backTrap": "Avant de cocher, relire la dernière ligne de la question et se demander : « Que me demande-t-on exactement ? »"
  },
  {
    "id": 13,
    "category": "Type de piège",
    "front": "Je réponds de mémoire à une question de détail sans revenir au texte…",
    "backName": "Détail mal relu",
    "backDef": "Une date, un nom, un chiffre ou une ville oubliée dans une liste : l’option fausse reprend une information voisine. La mémoire reconstruit, elle ne cite pas.",
    "backTrap": "Pour toute question de détail, revenir à la ligne concernée et la relire, même si l’on est sûr de soi."
  },
  {
    "id": 14,
    "category": "Type de question",
    "front": "Quelle est l’idée principale du texte ?",
    "backName": "Idée principale",
    "backDef": "La thèse défendue, qui englobe l’ensemble du raisonnement. Elle se trouve souvent après un connecteur d’opposition ou de conclusion (« mais », « donc », « en définitive »).",
    "backTrap": "Pièges : une idée secondaire (trop précise), une généralité (trop vague), un excès (« toujours »)."
  },
  {
    "id": 15,
    "category": "Type de question",
    "front": "Quel titre convient le mieux à ce texte ?",
    "backName": "Titre",
    "backDef": "Un titre couvre tout le texte, de façon spécifique. Il doit refléter le thème ET la thèse (par exemple « X : un gain individuel, une perte collective »).",
    "backTrap": "Pièges : un titre trop vague (« Le monde du travail »), un titre qui ne reprend qu’une partie, ou la conclusion seule."
  },
  {
    "id": 16,
    "category": "Type de question",
    "front": "Quel est le meilleur résumé du texte ?",
    "backName": "Résumé",
    "backDef": "Il reprend toutes les étapes du texte, dans l’ordre de l’argumentation (constat, limite, remède…). On repère la structure en lisant (2 à 3 mots par paragraphe).",
    "backTrap": "Pièges : un résumé partiel (une seule étape), la conclusion seule, ou un résumé qui ajoute une idée."
  },
  {
    "id": 17,
    "category": "Type de question",
    "front": "Quelle est l’intention de l’auteur ?",
    "backName": "Intention de l’auteur",
    "backDef": "Ce que l’auteur cherche à faire (dénoncer, informer, nuancer, ironiser, justifier, alerter). Se repère au ton, aux connecteurs et au registre.",
    "backTrap": "Piège : prendre une ironie au premier degré, ou prêter à l’auteur un but plus fort que celui qui est écrit (prouver, démontrer, accuser)."
  },
  {
    "id": 18,
    "category": "Type de question",
    "front": "Parmi les affirmations suivantes (1, 2, 3, 4), lesquelles sont vraies ?",
    "backName": "Lesquelles sont vraies",
    "backDef": "Vérifier chaque affirmation seule, une par une, avec la ligne du texte. Noter V ou F, puis chercher la combinaison correspondante.",
    "backTrap": "Pièges : une info mentionnée n’est pas une raison ; « n’a pas baissé » n’est pas « a augmenté » ; une seule affirmation fausse élimine la combinaison."
  },
  {
    "id": 19,
    "category": "Type de question",
    "front": "Dans le texte, le mot « X » signifie…",
    "backName": "Vocabulaire en contexte",
    "backDef": "Le contexte donne le sens : phrase avant et après, connecteurs, exemples. On remplace le mot par chaque option et on vérifie que la phrase garde son sens.",
    "backTrap": "Pièges : le sens courant d’un mot qui en a plusieurs, les paronymes (« ténu » / « tendu »), la définition de dictionnaire hors contexte."
  },
  {
    "id": 20,
    "category": "Type de question",
    "front": "Que peut-on déduire du texte ?",
    "backName": "Inférence",
    "backDef": "Une conséquence logique directe des informations. Elle n’ajoute rien : elle découle de ce qui est écrit, chiffres comparés, deux phrases combinées.",
    "backTrap": "Piège : une déduction possible mais pas obligatoire (sur-interprétation), ou une recommandation que rien n’autorise."
  },
  {
    "id": 21,
    "category": "Type de question",
    "front": "Comment le texte est-il construit ? Quel est son ton ?",
    "backName": "Structure / registre",
    "backDef": "La structure : concession, objection, conclusion ; thèse, antithèse, synthèse. Le registre : mesuré, ironique, polémique, didactique. Les mots-signaux guident : « certes », « néanmoins », « il serait hâtif ».",
    "backTrap": "Piège : un registre plus fort que le texte (« virulent », « alarmiste ») alors que le ton est nuancé."
  },
  {
    "id": 22,
    "category": "Type de question",
    "front": "Selon l’auteur… (laquelle des propositions correspond à ce que dit le texte ?)",
    "backName": "Selon l’auteur",
    "backDef": "Réponse strictement sourcée : on ne répond pas ce que l’on pense, mais ce que l’auteur écrit, même si l’on est en désaccord.",
    "backTrap": "Piège : répondre avec ses connaissances, l’actualité ou ses opinions."
  },
  {
    "id": 23,
    "category": "Mot-signal",
    "front": "« Toujours », « jamais », « seul », « uniquement », « forcément », « tous », « aucun »…",
    "backName": "Mots absolus (alerte extrême)",
    "backDef": "Ils indiquent souvent une réponse extrême. Les textes TAGE MAGE nuancent : « souvent », « en partie », « plutôt », « certains ».",
    "backTrap": "Ne pas les éliminer mécaniquement : si le texte les écrit lui-même (« aucun » dans une règle), la réponse peut être correcte. Vérifier dans le texte."
  },
  {
    "id": 24,
    "category": "Mot-signal",
    "front": "« Souvent », « parfois », « certains », « en partie », « plutôt », « peut »…",
    "backName": "Mots nuancés (réponses probables)",
    "backDef": "Ils reflètent la prudence d’un texte argumentatif. Une bonne réponse reprend souvent ce degré de certitude.",
    "backTrap": "Piège inverse : une réponse qui nuance alors que le texte est ferme (« il est établi que… »). Le degré doit correspondre."
  },
  {
    "id": 25,
    "category": "Connecteur",
    "front": "« Mais », « cependant », « pourtant », « néanmoins », « en revanche »…",
    "backName": "Connecteurs d’opposition",
    "backDef": "Ils annoncent souvent l’idée que l’auteur défend, après un constat ou une objection. Souligner ce qui suit : c’est fréquemment la thèse.",
    "backTrap": "Piège : retenir l’idée de départ (concédée) au lieu de celle d’après le « mais »."
  },
  {
    "id": 26,
    "category": "Connecteur",
    "front": "« Donc », « ainsi », « par conséquent », « il en résulte », « en définitive »…",
    "backName": "Connecteurs de conclusion",
    "backDef": "Ils introduisent la conséquence ou la conclusion de l’auteur. Une bonne réponse « conclusion » ou « idée principale » s’y appuie.",
    "backTrap": "Piège : confondre conclusion et résumé : la conclusion est la dernière étape, le résumé couvre tout."
  },
  {
    "id": 27,
    "category": "Connecteur",
    "front": "« Certes », « bien sûr », « il est vrai que », « même si »…",
    "backName": "Concession",
    "backDef": "L’auteur reconnaît un point pour mieux le dépasser (« certes… mais »). L’idée concédée n’est pas la thèse.",
    "backTrap": "Piège : la prendre pour la position de l’auteur."
  },
  {
    "id": 28,
    "category": "Connecteur",
    "front": "« Par exemple », « ainsi », « notamment », « comme »…",
    "backName": "Illustration (détail précis)",
    "backDef": "Ils introduisent un exemple, pas une idée générale. Les options qui reprennent un exemple sont presque toujours « trop précises ».",
    "backTrap": "À repérer en lisant : ne pas confondre un cas cité et la règle qu’il illustre."
  },
  {
    "id": 29,
    "category": "R&A",
    "front": "Quelle proposition renforce, va dans le sens de l’argument, sans être sa simple reprise ?",
    "backName": "Soutient",
    "backDef": "Elle va dans le même sens que l’auteur, mais sans nécessairement tout couvrir. Plusieurs options peuvent soutenir : il faut parfois choisir la plus forte.",
    "backTrap": "Piège : une réponse qui soutient un peu mais ajoute un élément absent ou extrême."
  },
  {
    "id": 30,
    "category": "R&A",
    "front": "Parmi plusieurs propositions qui vont dans le sens de l’auteur, laquelle est la plus directe ?",
    "backName": "Soutient le plus",
    "backDef": "Étape 1 : isoler les réponses qui vont dans le sens du texte. Étape 2 : choisir la plus franche, la plus explicite, celle qui reprend l’idée sans rien ajouter.",
    "backTrap": "Piège : « soutient » ≠ « soutient le plus ». La plus directe l’emporte sur la plus large ou la plus spectaculaire."
  },
  {
    "id": 31,
    "category": "R&A",
    "front": "Quelle proposition atténue la force de l’argument sans forcément dire le contraire ?",
    "backName": "Affaiblit",
    "backDef": "Elle introduit une autre cause, un cas qui limite la portée, une faille dans le lien entre prémisse et conclusion. Elle peut laisser les faits vrais.",
    "backTrap": "Piège : « affaiblit » ≠ « contredit ». On éliminera les options qui soutiennent, les hors-sujet, et celles qui ne touchent pas le lien causal."
  },
  {
    "id": 32,
    "category": "R&A",
    "front": "Quelle proposition est incompatible avec ce qui est affirmé ?",
    "backName": "Contredit / s’oppose",
    "backDef": "Elle ne peut pas être vraie en même temps que l’énoncé : « tous » contre « un qui ne », « majorité » contre « minorité ». Test : peuvent-elles être vraies ensemble ?",
    "backTrap": "Piège : une option simplement compatible ou hors sujet. Si les deux peuvent coexister, ce n’est pas une contradiction."
  },
  {
    "id": 33,
    "category": "R&A",
    "front": "Quelle phrase s’inscrit dans la suite logique du texte (« il en résulte que… ») ?",
    "backName": "Conclusion",
    "backDef": "Elle découle des prémisses sans rien ajouter. On formule sa propre conclusion avant de lire les options.",
    "backTrap": "Pièges : conclusion trop forte (« jamais », « seul »), réciproque abusive, ou idée qui n’est pas dans les prémisses."
  },
  {
    "id": 34,
    "category": "R&A",
    "front": "Qu’est-ce qui doit être vrai, sans être écrit, pour que le raisonnement tienne ?",
    "backName": "Présupposé / hypothèse sous-jacente",
    "backDef": "Le point de départ implicite de l’auteur. Test de négation : si la proposition était fausse, le raisonnement s’effondrerait-il ? Si oui, c’est un présupposé.",
    "backTrap": "Pièges : une conséquence possible, un fait vrai mais non nécessaire, une généralisation (« tous », « toujours »)."
  },
  {
    "id": 35,
    "category": "R&A",
    "front": "Deux faits qui semblent incompatibles : comment peuvent-ils être vrais ensemble ?",
    "backName": "Paradoxe",
    "backDef": "La bonne réponse ajoute un fait qui réconcilie les deux (volume qui compense un prix, meilleur recensement…). Elle explique, elle ne conteste pas.",
    "backTrap": "Piège : contester l’un des faits (« le chiffre est mal mesuré ») : ce n’est pas résoudre le paradoxe."
  },
  {
    "id": 36,
    "category": "R&A",
    "front": "« A est à B ce que C est à… » : quel terme garde le même lien ?",
    "backName": "Analogie",
    "backDef": "Formuler d’abord le lien avec les mots du premier couple (« X conserve Y », « X est le produit de Y »), puis tester chaque option avec ce lien précis.",
    "backTrap": "Piège : un terme lié au thème mais par un autre lien (lieu, partie, matière) : même univers ne veut pas dire même relation."
  },
  {
    "id": 37,
    "category": "R&A",
    "front": "Quel proverbe a le même sens, ou le sens contraire, de celui de l’énoncé ?",
    "backName": "Proverbes",
    "backDef": "Traduire d’abord le proverbe en idée générale (« l’apparence trompe »), puis chercher l’option qui exprime cette idée, pas le même vocabulaire.",
    "backTrap": "Pièges : le sens littéral, les options extrêmes (« toujours », « jamais »), et l’inversion équivalent / contraire selon la consigne."
  },
  {
    "id": 38,
    "category": "R&A",
    "front": "La question contient « le plus » ou « le plus directement »…",
    "backName": "« Le plus » : degré maximum",
    "backDef": "Plusieurs options peuvent aller dans le sens demandé ; il faut choisir la plus forte. Pour « affaiblit le plus » ou « soutient le plus », chercher la plus directe sur le lien en jeu.",
    "backTrap": "Piège : se contenter de la première option qui convient. Tester toutes les options pour trouver celle qui l’emporte réellement."
  }
];

export const TM_CT_QCM = [
  {
    "prompt": "<em>Depuis 2020, le télétravail s’est installé dans les habitudes de nombreuses entreprises, au point que certains dirigeants y voient un acquis définitif. Pourtant, plusieurs études menées auprès de cadres montrent que la productivité individuelle y progresse, tandis que les échanges informels, ceux qui se nouent à la machine à café, se raréfient. Or ces échanges nourrissent la circulation de l’information et l’intégration des nouveaux arrivants. Les entreprises qui ont cherché à compenser cette perte par des visioconférences constatent que ces dernières, trop cadrées, ne remplacent pas la spontanéité du présentiel. Le télétravail gagne donc en efficacité individuelle ce qu’il perd en cohésion collective.</em><br><br>Quel titre résume le mieux ce texte ?",
    "options": [
      "Télétravail : une efficacité individuelle acquise au prix de la cohésion collective",
      "Le monde du travail se transforme",
      "Le télétravail fait progresser la productivité des cadres",
      "Les visioconférences sont inutiles en entreprise",
      "Le télétravail doit disparaître pour sauver la cohésion"
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> reprend les deux volets du texte (gain individuel, perte collective), ce qui correspond à la dernière phrase. · <strong>B</strong> trop vague : il pourrait titrer n’importe quel texte sur l’emploi. · <strong>C</strong> partielle : ne couvre que la première moitié du raisonnement. · <strong>D</strong> extrême : le texte dit qu’elles « ne remplacent pas » la spontanéité, pas qu’elles sont inutiles. · <strong>E</strong> sur-interprétation : le texte constate un coût, il ne réclame pas la fin du télétravail."
  },
  {
    "prompt": "<em>Plusieurs centaines de communes ont lancé leur monnaie locale, utilisable uniquement chez les commerçants adhérents. Leurs promoteurs n’en attendent pas une révolution financière : les volumes échangés restent dérisoires face à l’euro. L’enjeu est ailleurs. Parce qu’elle ne peut être dépensée qu’à proximité, cette monnaie oblige l’argent à circuler dans le tissu économique du territoire au lieu de s’évaporer vers de grandes enseignes nationales. Elle crée aussi du lien : on connaît le boulanger qui l’accepte, on découvre les producteurs voisins. Les économistes restent partagés sur son impact réel, faute de données solides, mais s’accordent à lui reconnaître un intérêt symbolique.</em><br><br>Quelle est l’idée principale du texte ?",
    "options": [
      "Les monnaies locales vont remplacer l’euro à terme.",
      "Les économistes jugent les monnaies locales inefficaces.",
      "Plusieurs centaines de communes ont lancé leur monnaie locale.",
      "L’argent circule différemment selon les territoires.",
      "Les monnaies locales valent moins par leur poids financier que par leur effet de maintien de l’argent et du lien social dans un territoire."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> correspond au pivot du texte (« L’enjeu est ailleurs ») et à ses deux arguments : circulation locale et lien. · <strong>A</strong> extrême et contresens : le texte parle de volumes « dérisoires ». · <strong>B</strong> contresens : ils sont « partagés » et reconnaissent un intérêt symbolique. · <strong>C</strong> trop précis : détail d’ouverture, pas l’idée du texte. · <strong>D</strong> trop vague : vrai de presque n’importe quel texte sur l’économie locale."
  },
  {
    "prompt": "<em>Le dernier smartphone d’une grande marque se vend 1 200 euros. Sa batterie, collée à la coque, ne peut être remplacée qu’en atelier agréé, pour un tarif qui avoisine le tiers du prix de l’appareil. Notons que le fabricant parle de « design épuré » : on admirera la formule, qui transforme une contrainte de réparation en argument esthétique. Quant à la garantie de deux ans, elle expire précisément au moment où les batteries commencent à faiblir, par un hasard sans doute purement statistique.</em><br><br>Quelle est l’intention de l’auteur ?",
    "options": [
      "Informer le lecteur des caractéristiques techniques du smartphone.",
      "Dénoncer, par l’ironie, une politique du fabricant qui décourage la réparation.",
      "Féliciter le fabricant pour la qualité de son design.",
      "Comparer les tarifs de réparation de plusieurs marques.",
      "Démontrer, preuves à l’appui, que le fabricant sabote volontairement ses batteries."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : l’ironie (« on admirera la formule », « hasard sans doute purement statistique ») vise la difficulté de réparer. · <strong>A</strong> hors intention : les détails techniques servent la critique, ils ne sont pas le but. · <strong>C</strong> contresens : ironie prise au premier degré. · <strong>D</strong> hors texte : aucune autre marque n’est citée. · <strong>E</strong> sur-interprétation : l’auteur insinue, il ne prouve rien (aucune preuve fournie)."
  },
  {
    "prompt": "<em>Le musée, qui accueille environ 600 000 visiteurs par an, a expérimenté en janvier la gratuité le premier dimanche du mois. À la suite de cette mesure, la fréquentation du musée a augmenté de 40 % ces jours-là. Mais une enquête révèle que 70 % des visiteurs gratuits habitent à moins de 20 kilomètres, et que les trois quarts d’entre eux étaient déjà venus au moins une fois dans l’année. Les visiteurs étrangers, eux, sont restés stables.</em><br><br>Que peut-on déduire de ce texte ?",
    "options": [
      "La gratuité a permis d’attirer massivement des personnes qui n’étaient jamais venues.",
      "La gratuité devrait être étendue à tous les jours de la semaine.",
      "Les visiteurs étrangers désapprouvent la gratuité.",
      "La gratuité a surtout attiré un public déjà proche du musée et déjà familier de celui-ci.",
      "La fréquentation du musée a augmenté de 40 % sur l’ensemble de l’année."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : 70 % de proximité et 75 % de déjà-venus l’établissent. · <strong>A</strong> contresens : c’est l’inverse de ce que montre l’enquête. · <strong>B</strong> hors texte : une recommandation que rien n’autorise. · <strong>C</strong> hors texte : « restés stables » ne dit rien de leur avis. · <strong>E</strong> mélange vrai/faux : les 40 % valent pour « ces jours-là », pas pour l’année."
  },
  {
    "prompt": "<em>En dix ans, le marché français de la seconde main est passé de 7 à 12 milliards d’euros. Ce sont d’abord les vêtements, puis les appareils électroniques, qui ont tiré la croissance. Les plateformes en ligne captent aujourd’hui la majorité des transactions, mais les vide-greniers, malgré leur image traditionnelle, représentent encore une part non négligeable des ventes. Les acheteurs invoquent le prix en premier, avant la préoccupation écologique, citée par un sur trois.</em><br><br>Laquelle de ces affirmations est vraie d’après le texte ?",
    "options": [
      "Les vide-greniers ont disparu au profit des plateformes.",
      "L’écologie est le premier motif d’achat de seconde main.",
      "Les acheteurs citent plus souvent le prix que l’écologie parmi leurs motivations.",
      "Les appareils électroniques ont été le premier moteur de la croissance.",
      "Le marché de la seconde main a plus que doublé en dix ans."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : « le prix en premier, avant la préoccupation écologique ». · <strong>A</strong> extrême : ils « représentent encore une part non négligeable ». · <strong>B</strong> contresens : l’écologie vient après le prix. · <strong>D</strong> inversion : « d’abord les vêtements, puis » l’électronique. · <strong>E</strong> faux : de 7 à 12 milliards, c’est environ x1,7, pas plus du double."
  },
  {
    "prompt": "<em>La réorganisation des services, annoncée en septembre, doit regrouper trois directions en une seule. Les salariés s’interrogent sur le sort des postes d’encadrement, et la presse spécialisée y voit un test pour tout le secteur. Interrogée sur la nouvelle organisation, la direction a répondu avec <strong>circonspection</strong> : elle assure vouloir « examiner les effets avant de généraliser ». Les syndicats, eux, voient dans cette attitude une manière de gagner du temps, et regrettent que le calendrier reste flou.</em><br><br>Dans ce texte, le mot « circonspection » signifie :",
    "options": [
      "un enthousiasme mesuré",
      "une prudence réfléchie",
      "une indifférence polie",
      "une précipitation maladroite",
      "une hostilité déclarée"
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : le contexte donne la définition (« examiner les effets avant de généraliser »). · <strong>A</strong> la direction n’exprime aucun enthousiasme. · <strong>C</strong> elle s’intéresse au sujet, elle prend des précautions. · <strong>D</strong> contraire de l’attitude décrite (attendre, vérifier). · <strong>E</strong> rien n’indique une hostilité ; les syndicats lui reprochent de la lenteur, pas de l’opposition."
  },
  {
    "prompt": "<em>On répète que les jeunes ne lisent plus. Les chiffres disent autre chose : ils lisent beaucoup, mais autrement. Messages, forums, sous-titres, fils d’actualité : leur temps de lecture quotidien dépasse celui de leurs aînés au même âge. Ce qui change, c’est le support et la forme. Les textes sont courts, fragmentés, souvent lus en diagonale sur un écran. Le livre, lui, n’a pas disparu, mais il est devenu un objet de choix plutôt que d’habitude. Reste à savoir si cette lecture morcelée permet de développer l’attention soutenue qu’exige un roman.</em><br><br>Quel titre convient le mieux à ce texte ?",
    "options": [
      "La fin du livre à l’ère numérique",
      "La lecture sur écran : messages, forums et sous-titres",
      "Les jeunes lisent encore, mais autrement",
      "Les jeunes et la culture",
      "Faut-il interdire les écrans aux adolescents ?"
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : reprend la thèse (démentir « ils ne lisent plus », nuancer par « autrement »). · <strong>A</strong> contresens : le texte dit que le livre « n’a pas disparu ». · <strong>B</strong> trop précis : n’énumère que des exemples de support. · <strong>D</strong> trop vague : conviendrait à cent textes différents. · <strong>E</strong> hors texte : le texte n’évoque aucune interdiction."
  },
  {
    "prompt": "<em>À l’adolescence, l’horloge biologique se décale : les jeunes s’endorment plus tard et peinent à se réveiller tôt, indépendamment de leur volonté ou de leurs écrans. Pourtant, la plupart des lycées commencent leurs cours avant 8 heures. Plusieurs établissements étrangers qui ont retardé la rentrée d’une heure rapportent moins de retards, moins d’absences et des élèves plus attentifs en début de matinée. Les résultats d’ensemble restent toutefois modestes, et certains parents s’inquiètent de journées qui finissent plus tard. Il n’en demeure pas moins que l’organisation actuelle ignore une réalité physiologique bien établie.</em><br><br>Quelle est l’idée principale de ce texte ?",
    "options": [
      "Les horaires scolaires actuels sont mal adaptés au rythme biologique des adolescents.",
      "Les écrans sont la principale cause du manque de sommeil des adolescents.",
      "Retarder la rentrée a fait nettement progresser les résultats scolaires.",
      "Certains parents s’inquiètent de journées qui finissent plus tard.",
      "Les adolescents ont besoin de dormir."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : c’est la conclusion du texte (« l’organisation actuelle ignore une réalité physiologique »). · <strong>B</strong> contresens : le décalage est « indépendant de leurs écrans ». · <strong>C</strong> sur-interprétation : les résultats d’ensemble restent « modestes ». · <strong>D</strong> trop précis : une objection secondaire. · <strong>E</strong> trop vague : vrai pour tout être humain, ne dit rien du texte."
  },
  {
    "prompt": "<em>Lors de sa dernière levée de fonds, la jeune entreprise a convaincu les investisseurs grâce à une croissance de 150 % de son chiffre d’affaires. Elle n’a pourtant jamais dégagé de bénéfice, et ses dirigeants assument de reporter la rentabilité à plus tard, le temps de conquérir des parts de marché. Un associé résume : « Ici, on ne se demande pas combien l’on gagne, mais combien l’on grossit. »</em><br><br>Que peut-on déduire de la stratégie de cette entreprise ?",
    "options": [
      "Elle est au bord de la faillite.",
      "Ses investisseurs exigent des bénéfices rapides.",
      "Elle a levé plus de fonds que ses concurrents.",
      "Elle privilégie sa croissance à sa rentabilité immédiate.",
      "Elle ne réalisera jamais de bénéfices."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : « reporter la rentabilité » et la citation de l’associé le disent. · <strong>A</strong> sur-interprétation : l’absence de bénéfice n’est pas une faillite. · <strong>B</strong> contresens : ils ont été convaincus par la croissance. · <strong>C</strong> hors texte : aucune comparaison avec des concurrents. · <strong>E</strong> extrême : « reporter » n’est pas « ne jamais » (mot-signal)."
  },
  {
    "prompt": "<em>Imaginez un drap tendu sur lequel on pose une boule de pétanque : le tissu se creuse. Roulez-y une bille, elle ne file plus droit, elle s’enroule autour du creux. C’est, très schématiquement, ce que la gravité fait à la lumière près d’un astre massif. L’image a ses limites — l’espace n’est pas un drap, et la boule ne tombe pas « vers le bas » — mais elle permet d’éprouver intuitivement ce que les équations décrivent.</em><br><br>Pourquoi l’auteur recourt-il à l’image du drap tendu ?",
    "options": [
      "Démontrer rigoureusement la théorie de la gravité.",
      "Montrer que l’espace est réellement un drap déformable.",
      "Critiquer la complexité des équations des physiciens.",
      "Expliquer les règles d’un jeu de pétanque.",
      "Rendre intuitif un phénomène abstrait, tout en en précisant les limites."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : « éprouver intuitivement ce que les équations décrivent » + « l’image a ses limites ». · <strong>A</strong> contresens : une image n’est pas une démonstration, l’auteur le dit lui-même. · <strong>B</strong> contresens : « l’espace n’est pas un drap ». · <strong>C</strong> hors texte : aucune critique des équations. · <strong>D</strong> hors texte : la pétanque ne sert que d’exemple."
  },
  {
    "prompt": "<em>Dans les villes qui ont aménagé des pistes cyclables continues, la part des déplacements à vélo est passée en moyenne de 3 % à 9 % en cinq ans. Les commerçants, souvent hostiles au départ, constatent pour la plupart que leur chiffre d’affaires n’a pas baissé. Seule la suppression de places de stationnement reste un sujet de crispation durable. Les accidents restent en revanche nombreux aux intersections, faute d’aménagements adaptés.</em><br><br>Laquelle de ces affirmations est vraie d’après le texte ?",
    "options": [
      "Tous les commerçants ont vu leur chiffre d’affaires augmenter.",
      "Les commerçants sont restés hostiles dans leur ensemble.",
      "La suppression de places de stationnement a été unanimement acceptée.",
      "La part du vélo a triplé dans les villes concernées.",
      "Les pistes cyclables ont supprimé les accidents aux intersections."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : de 3 % à 9 %, c’est bien un triplement. · <strong>A</strong> extrême et faux : « n’a pas baissé » n’est pas « a augmenté », et « tous » n’est pas écrit. · <strong>B</strong> contresens : « pour la plupart », ils constatent l’absence de baisse. · <strong>C</strong> contresens : c’est un « sujet de crispation durable ». · <strong>E</strong> contresens : les accidents « restent nombreux »."
  },
  {
    "prompt": "<em>Le gouvernement, qui s’attribue volontiers l’amélioration de l’emploi, a présenté hier un bilan chiffré de ses mesures. Or, sur la même période, la quasi-totalité des pays voisins ont connu une baisse comparable du chômage, sans avoir adopté de réforme semblable. Le lien entre la baisse du chômage et la politique du gouvernement est <strong>ténu</strong> : si l’indicateur s’est amélioré, la conjoncture mondiale suffit largement à l’expliquer. Aussi les économistes se gardent-ils d’y voir une preuve de l’efficacité des réformes.</em><br><br>Dans ce texte, le mot « ténu » signifie :",
    "options": [
      "tendu, conflictuel",
      "étroit, très fort",
      "fragile, peu établi",
      "volontairement caché",
      "durable"
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : le contexte donne la clé (« la conjoncture suffit à l’expliquer », « pas une preuve »). · <strong>A</strong> piège de ressemblance sonore avec « tendu ». · <strong>B</strong> contresens : un lien « étroit » serait au contraire une preuve. · <strong>D</strong> hors texte : rien n’est dissimulé. · <strong>E</strong> hors texte : la durée n’est pas en jeu."
  },
  {
    "prompt": "<em>La crise des approvisionnements a rappelé aux industriels la fragilité des chaînes de production étirées sur plusieurs continents. Plusieurs ont annoncé le rapatriement de certaines usines. Mais ces annonces concernent surtout des produits stratégiques (masques, semi-conducteurs, médicaments) et restent marginales au regard de l’ensemble des échanges. Relocaliser coûte cher, exige une main-d’œuvre qualifiée devenue rare, et les consommateurs, qui réclament des produits locaux, hésitent à en payer le prix. Le mouvement est réel, mais il a davantage valeur d’alerte que de bouleversement.</em><br><br>Quel titre convient le mieux à ce texte ?",
    "options": [
      "La fin de la mondialisation",
      "Le rapatriement des usines de masques et de médicaments",
      "Les industriels face aux défis économiques",
      "Pourquoi les consommateurs refusent de payer plus cher",
      "Relocalisations : un mouvement réel mais limité aux produits stratégiques"
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : combine l’existence du mouvement et sa limite, comme la dernière phrase. · <strong>A</strong> extrême : le texte parle de mouvement « marginal ». · <strong>B</strong> trop précis : ne reprend que les exemples. · <strong>C</strong> trop vague : vrai de tout texte d’économie industrielle. · <strong>D</strong> partielle : un seul argument, et « refusent » est plus radical que « hésitent »."
  },
  {
    "prompt": "<em>On croit souvent qu’il faut vivre à l’étranger pour parler une langue. Les enseignants constatent pourtant que ce qui compte avant tout est la fréquence de l’exposition et de la pratique orale, bien plus que le lieu. Un élève qui écoute et parle vingt minutes chaque jour progresse plus vite qu’un étudiant installé à l’étranger mais entouré de compatriotes. Le séjour linguistique reste utile, car il multiplie les occasions de parler ; mais il n’est ni nécessaire, ni suffisant.</em><br><br>Quelle est l’idée principale de ce texte ?",
    "options": [
      "Le séjour à l’étranger est inutile pour apprendre une langue.",
      "La régularité de la pratique orale compte plus que le lieu d’apprentissage.",
      "Il faut absolument pratiquer vingt minutes par jour.",
      "Apprendre une langue demande du travail.",
      "Les étudiants à l’étranger fréquentent surtout leurs compatriotes."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : c’est la thèse (« la fréquence … bien plus que le lieu »). · <strong>A</strong> extrême : le séjour « reste utile ». · <strong>C</strong> trop précis et extrême : vingt minutes est un exemple, « absolument » n’est pas écrit. · <strong>D</strong> trop vague : n’importe quel texte sur l’apprentissage pourrait l’affirmer. · <strong>E</strong> trop précis : un exemple, pas l’idée."
  },
  {
    "prompt": "<em>Le prix du panier de courses a augmenté de 12 % en un an, alors que les salaires n’ont progressé que de 4 %. Les ménages modestes, qui consacrent une plus grande part de leur budget à l’alimentation, ont donc été plus touchés que les ménages aisés. Les associations de consommateurs notent un report des achats vers les marques distributeur, jusque-là délaissées.</em><br><br>Que peut-on déduire de ce texte ?",
    "options": [
      "Le pouvoir d’achat alimentaire des ménages modestes s’est dégradé.",
      "Les marques distributeur ont augmenté plus vite que les autres.",
      "Les ménages aisés n’ont subi aucune hausse.",
      "Les salaires devraient augmenter de 8 %.",
      "Les ménages ont divisé par deux leur consommation alimentaire."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : prix +12 % contre salaires +4 %, avec une part alimentaire plus forte chez les modestes. · <strong>B</strong> hors texte : rien sur l’évolution de leurs prix. · <strong>C</strong> extrême : « moins touchés » n’est pas « aucune hausse ». · <strong>D</strong> hors texte : une prescription chiffrée inventée. · <strong>E</strong> hors texte et extrême : aucune baisse de consommation chiffrée."
  },
  {
    "prompt": "<em>Notre entreprise a mis en place la « réunion de synchronisation » hebdomadaire. Elle dure deux heures, réunit quinze personnes et permet à chacun de présenter, pour la troisième fois, ce que tout le monde a lu dans le compte rendu de la veille. On en sort épuisé mais rassuré : le travail a bien été annoncé. Pour l’exécuter, il faudra bien sûr prévoir une nouvelle réunion.</em><br><br>Quelle est l’intention de l’auteur ?",
    "options": [
      "Expliquer comment organiser une réunion efficace.",
      "Féliciter l’entreprise pour son organisation.",
      "Dénoncer le surmenage général des salariés.",
      "Proposer de supprimer toutes les réunions.",
      "Se moquer de l’inefficacité de certaines réunions d’entreprise."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : ironie sur la répétition et le temps perdu. · <strong>A</strong> contresens : le texte décrit un contre-exemple, il ne donne aucun conseil. · <strong>B</strong> contresens : ironie prise au premier degré. · <strong>C</strong> trop général : l’objet est la réunion inutile, pas le surmenage. · <strong>D</strong> extrême : « toutes » n’est jamais dit."
  },
  {
    "prompt": "<em>Les ventes de voitures électriques ont doublé en deux ans, soutenues par des aides à l’achat. Leur prix reste cependant supérieur de près d’un tiers à celui d’un modèle thermique équivalent. Les bornes de recharge se multiplient en ville, mais les zones rurales sont encore mal desservies. Enfin, une voiture électrique émet moins de CO2 sur l’ensemble de sa vie, même si sa fabrication, notamment celle de la batterie, est plus polluante.</em><br><br>Parmi les affirmations suivantes, lesquelles sont vraies d’après le texte ?<br>1. Les aides à l’achat ont contribué à la hausse des ventes.<br>2. Une voiture électrique coûte moins cher qu’un modèle thermique équivalent.<br>3. Les zones rurales sont aussi bien équipées en bornes que les villes.<br>4. La fabrication d’une voiture électrique est plus polluante que celle d’un modèle thermique.",
    "options": [
      "1 et 2",
      "1 et 4",
      "2 et 3",
      "2 et 4",
      "3 et 4"
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : 1 est vraie (« soutenues par des aides ») et 4 est vraie (fabrication « plus polluante »). · 2 fausse : le prix est « supérieur d’un tiers ». · 3 fausse : les zones rurales sont « mal desservies ». Donc <strong>A</strong> (2 fausse), <strong>C</strong> (2 et 3 fausses), <strong>D</strong> (2 fausse), <strong>E</strong> (3 fausse) sont éliminées."
  },
  {
    "prompt": "<em>La publication d’un rapport critique sur la rénovation des écoles a relancé la polémique. Devant les députés, le ministre a <strong>argué</strong> de la complexité du dossier, qui implique l’État, les régions et les communes, pour justifier le retard accumulé depuis deux ans, sans fournir de calendrier précis. L’opposition, elle, estime que cette explication ne suffit pas et réclame des engagements datés.</em><br><br>Dans cette phrase, « a argué de » signifie :",
    "options": [
      "a nié l’existence du retard",
      "a invoqué comme justification",
      "a reproché aux critiques leur ignorance",
      "a promis de réduire le retard",
      "a reconnu sa pleine responsabilité"
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : « pour justifier le retard » donne le sens (arguer de = invoquer comme argument). · <strong>A</strong> contresens : il justifie le retard, il ne le nie pas. · <strong>C</strong> hors texte : aucun reproche aux critiques. · <strong>D</strong> hors texte : aucun calendrier n’est fourni. · <strong>E</strong> contresens : invoquer la complexité, c’est plutôt s’en excuser."
  },
  {
    "prompt": "<em>Certes, les réseaux sociaux facilitent le contact avec des proches éloignés, et nul ne songe à nier cet avantage. Néanmoins, la multiplication de ces échanges brefs s’accompagne d’un appauvrissement de la conversation : on se « like » plus qu’on ne se parle. C’est pourquoi il convient de réserver les réseaux au maintien du lien, et non d’y chercher une relation véritable.</em><br><br>Comment ce texte est-il construit ?",
    "options": [
      "Une démonstration par un exemple chiffré.",
      "Une succession de définitions.",
      "Un récit chronologique.",
      "Une concession, une objection, puis une recommandation.",
      "Un dialogue entre deux opposants."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : « Certes » = concession, « Néanmoins » = objection, « C’est pourquoi il convient » = recommandation. · <strong>A</strong> hors texte : aucun chiffre. · <strong>B</strong> hors texte : aucun terme n’est défini. · <strong>C</strong> hors texte : aucune chronologie. · <strong>E</strong> hors texte : une seule voix s’exprime."
  },
  {
    "prompt": "<em>Deux ans après l’entrée en vigueur de la réforme de l’assurance chômage, les premiers bilans commencent à circuler. Les chiffres publiés ce mois-ci restent partiels et divergent selon les régions. Il serait hâtif de conclure que la réforme a échoué : deux ans de recul sont insuffisants pour en mesurer les effets sur l’emploi. On relève néanmoins des signes encourageants dans certains secteurs, et d’autres plus décevants ailleurs. Sans doute faudra-t-il attendre pour trancher.</em><br><br>Quel est le ton de ce texte ?",
    "options": [
      "Polémique et virulent.",
      "Enthousiaste et promotionnel.",
      "Mesuré et nuancé.",
      "Ironique et moqueur.",
      "Alarmiste et catastrophiste."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : « hâtif », « néanmoins », « sans doute », « certains secteurs » marquent la prudence. · <strong>A</strong> aucune attaque, aucun adversaire visé. · <strong>B</strong> le texte n’affirme pas le succès. · <strong>D</strong> aucune ironie, aucun second degré. · <strong>E</strong> aucune alerte, au contraire, il appelle à attendre."
  },
  {
    "prompt": "<em>Les applications gratuites ne le sont qu’en apparence. Une étude menée sur dix des applications les plus téléchargées l’illustre. Faute de facturer l’usager, elles monétisent son attention et ses données : chaque clic affine un profil revendu aux annonceurs. L’utilisateur, lui, ne perçoit aucun coût immédiat, ce qui explique sa faible vigilance. Les régulateurs tentent d’imposer plus de transparence, mais les conditions d’utilisation, trop longues, restent largement ignorées.</em><br><br>Quel titre résume le mieux ce texte ?",
    "options": [
      "Le règlement européen sur les données personnelles",
      "Les conditions d’utilisation que personne ne lit",
      "Les applications mobiles, un marché en pleine croissance",
      "Tout ce qui est gratuit cache une arnaque",
      "Applications gratuites : l’utilisateur paie avec ses données"
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : reprend l’idée centrale (gratuité apparente, paiement par les données). · <strong>A</strong> hors texte : aucune loi n’est nommée. · <strong>B</strong> trop précis : un détail de la dernière phrase. · <strong>C</strong> hors texte : aucune donnée de marché. · <strong>D</strong> extrême : généralisation (« tout ») à partir du seul cas des applications."
  },
  {
    "prompt": "<em>Des expériences montrent que les étudiants qui prennent des notes à la main retiennent mieux le contenu d’un cours que ceux qui tapent au clavier. L’explication avancée : écrire à la main, plus lent, oblige à reformuler et donc à comprendre, alors que la saisie permet de retranscrire mot à mot sans réfléchir. Cela ne signifie pas que l’ordinateur soit à bannir : pour archiver, rechercher ou partager des notes, il garde un net avantage.</em><br><br>Quelle est l’idée principale de ce texte ?",
    "options": [
      "Il faut interdire les ordinateurs en cours.",
      "La prise de notes à la main favorise la compréhension et la mémorisation, sans que le clavier soit dénué d’intérêt.",
      "Taper au clavier est plus rapide qu’écrire à la main.",
      "Les étudiants retiennent mal leurs cours.",
      "Les notes sur ordinateur sont plus faciles à partager."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : résume la thèse et sa nuance finale. · <strong>A</strong> extrême : le texte écrit « pas à bannir ». · <strong>C</strong> trop précis : détail qui sert l’explication, pas l’idée centrale. · <strong>D</strong> trop vague et hors texte : le texte compare deux méthodes, il ne juge pas les étudiants. · <strong>E</strong> partielle : un seul avantage du clavier, sans la thèse."
  },
  {
    "prompt": "<em>Située à 1 800 mètres d’altitude, la station, qui vit essentiellement du tourisme, est le premier employeur de la vallée. En 2023, elle a accueilli 20 % de visiteurs de moins qu’en 2013, malgré l’ouverture de deux nouvelles remontées. Les gestionnaires attribuent ce recul à l’enneigement irrégulier, plutôt qu’à la hausse des tarifs, dont ils minimisent l’effet. En parallèle, la fréquentation estivale (randonnée, VTT) a progressé de 35 %, sans compenser, en recettes, la baisse hivernale.</em><br><br>Laquelle de ces affirmations est vraie d’après le texte ?",
    "options": [
      "Pour les gestionnaires, l’enneigement explique mieux le recul que les tarifs.",
      "La baisse hivernale a été compensée par la hausse estivale.",
      "Les nouvelles remontées ont fait progresser la fréquentation.",
      "Les tarifs n’ont eu aucun effet sur la fréquentation.",
      "La fréquentation estivale a reculé."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : « attribuent ce recul à l’enneigement, plutôt qu’à la hausse des tarifs ». · <strong>B</strong> contresens : « sans compenser ». · <strong>C</strong> faux : le recul est survenu « malgré » ces remontées. · <strong>D</strong> extrême : ils « minimisent » l’effet, ils ne le nient pas. · <strong>E</strong> contresens : elle a progressé de 35 %."
  },
  {
    "prompt": "<em>J’ai longtemps cru que l’économie était une affaire de spécialistes, et que le citoyen n’avait qu’à s’en remettre à eux. Quinze ans de journalisme m’ont convaincu du contraire : les décisions qui pèsent sur nos vies se prennent à coups de mots techniques dont l’opacité arrange beaucoup de monde. Ce livre n’a d’autre ambition que de rendre ces mots à ceux qui les subissent.</em><br><br>Quelle est l’intention de l’auteur dans cet extrait ?",
    "options": [
      "Faire l’éloge des économistes.",
      "Démontrer que l’économie n’est pas une science.",
      "Raconter sa carrière de journaliste.",
      "Annoncer son projet : rendre le vocabulaire économique accessible aux citoyens.",
      "Prouver que les économistes mentent volontairement aux citoyens."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : la dernière phrase donne l’objectif (« rendre ces mots à ceux qui les subissent »). · <strong>A</strong> contresens : il remet en cause la confiance en eux. · <strong>B</strong> hors texte : la scientificité n’est pas discutée. · <strong>C</strong> trop précis : les « quinze ans » ne sont qu’un moyen d’introduire le propos. · <strong>E</strong> sur-interprétation : l’opacité « arrange », ce qui n’est pas prouver un mensonge volontaire."
  },
  {
    "prompt": "<em>Menée auprès de 2 000 salariés de dix entreprises de services, l’enquête annuelle sur le climat social a été publiée en mars. Le rapport indique que 80 % des salariés interrogés sont satisfaits de leur entreprise, mais que seuls 35 % se disent prêts à y rester cinq ans. L’écart tient, selon les auteurs, au manque de perspectives d’évolution plutôt qu’aux conditions de travail.</em><br><br>Que suggère ce rapport ?",
    "options": [
      "Les conditions de travail sont mauvaises.",
      "Les salariés satisfaits ne veulent pas évoluer.",
      "La satisfaction actuelle ne garantit pas la fidélité à long terme des salariés.",
      "65 % des salariés sont insatisfaits.",
      "Les entreprises ne peuvent rien faire pour retenir leurs salariés."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : l’écart 80 % / 35 % le montre. · <strong>A</strong> contresens : le texte écarte les conditions de travail comme cause. · <strong>B</strong> contresens : c’est le manque d’évolution qui pose problème. · <strong>D</strong> faux : 65 % ne sont pas prêts à rester, ce qui n’est pas être insatisfait. · <strong>E</strong> extrême : les auteurs pointent justement un levier (les perspectives d’évolution)."
  },
  {
    "prompt": "<em>L’écrivain n’a jamais cherché à plaire. Dans ses chroniques hebdomadaires, publiées pendant vingt ans, il manie une ironie <strong>caustique</strong> : chaque phrase est une pointe qui laisse son destinataire un peu meurtri, mais le lecteur, lui, sourit. Politiques, éditeurs, confrères : tous y sont passés, et nul ne semblait à l’abri. Ses détracteurs lui reprochaient parfois sa dureté ; ses admirateurs y voyaient une forme de lucidité joyeuse.</em><br><br>Dans ce texte, « caustique » signifie :",
    "options": [
      "douce et affectueuse",
      "ennuyeuse et lente",
      "pédagogique et claire",
      "élogieuse et flatteuse",
      "mordante, acerbe"
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : « pointe qui laisse son destinataire meurtri » donne le sens. · <strong>A</strong> contresens : on n’est pas « meurtri » par la douceur. · <strong>B</strong> hors texte : le lecteur sourit. · <strong>C</strong> hors texte : aucune idée d’enseignement. · <strong>D</strong> contresens : une ironie qui blesse n’est pas une flatterie."
  },
  {
    "prompt": "<em>De plus en plus d’observations scientifiques sont réalisées par des amateurs : comptage d’oiseaux, relevé de papillons, signalement d’espèces invasives via une application. Les chercheurs reçoivent ainsi en quelques mois des données qu’ils mettraient des années à collecter. La qualité de ces données fait débat, mais des protocoles de validation les rendent exploitables. Pour les participants, c’est aussi une manière de se réapproprier la démarche scientifique.</em><br><br>Quel titre convient le mieux à ce texte ?",
    "options": [
      "Sciences participatives : quand les amateurs alimentent la recherche",
      "Le comptage des oiseaux par les amateurs",
      "La science à l’ère numérique",
      "Les amateurs remplacent les chercheurs",
      "Des données d’amateurs peu fiables"
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : couvre le fait (amateurs), l’apport (données pour la recherche) et la nuance. · <strong>B</strong> trop précis : un exemple parmi d’autres. · <strong>C</strong> trop vague : conviendrait à mille textes. · <strong>D</strong> extrême : les amateurs fournissent des données, ils ne remplacent personne. · <strong>E</strong> contresens : la fiabilité « fait débat » mais devient « exploitable »."
  },
  {
    "prompt": "<em>Le championnat s’est professionnalisé à partir des années 1990, et la structure des recettes des clubs s’en est trouvée bouleversée. Les clubs de football professionnels tirent désormais l’essentiel de leurs revenus des droits de retransmission télévisée, devant la billetterie et les produits dérivés. Cette dépendance les expose : lorsqu’un diffuseur se retire, c’est tout l’équilibre budgétaire qui vacille. Certains clubs tentent de diversifier leurs recettes, notamment en développant des parcours de visite de leur stade, mais ces initiatives restent modestes.</em><br><br>Parmi les affirmations suivantes, lesquelles sont vraies d’après le texte ?<br>1. Les droits télévisés constituent la première source de revenus des clubs.<br>2. La billetterie rapporte plus que les droits télévisés.<br>3. Le retrait d’un diffuseur peut fragiliser le budget d’un club.<br>4. Les initiatives de diversification ont déjà compensé la dépendance aux droits télévisés.",
    "options": [
      "1 et 2",
      "1 et 3",
      "2 et 3",
      "2 et 4",
      "3 et 4"
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : 1 vraie (« l’essentiel … devant la billetterie »), 3 vraie (« l’équilibre budgétaire vacille »). · 2 fausse : c’est l’inverse. · 4 fausse : ces initiatives « restent modestes ». Donc <strong>A</strong> (2 fausse), <strong>C</strong> (2 fausse), <strong>D</strong> (2 et 4 fausses), <strong>E</strong> (4 fausse) sont éliminées."
  },
  {
    "prompt": "<em>Une équipe de chercheurs a analysé les commerces et les relations de voisinage dans une quarantaine de quartiers de villes moyennes. Le sociologue qui a dirigé l’étude note que les habitants des quartiers où les commerces de proximité ont fermé déclarent moins fréquemment connaître leurs voisins. Il se garde cependant de conclure à un lien de cause à effet : les deux phénomènes pourraient résulter d’un départ des familles.</em><br><br>Que peut-on déduire de la prudence du sociologue ?",
    "options": [
      "La fermeture des commerces n’a aucun effet sur le lien social.",
      "Les habitants de ces quartiers ne connaissent pas leurs voisins.",
      "Les familles quittent les quartiers à cause de la fermeture des commerces.",
      "Une corrélation observée ne prouve pas à elle seule que l’un des phénomènes cause l’autre.",
      "Le sociologue doute de l’utilité des enquêtes de terrain."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : c’est précisément le raisonnement (« se garde de conclure à un lien de cause à effet »). · <strong>A</strong> extrême : il ne nie pas l’effet, il refuse de l’affirmer. · <strong>B</strong> extrême : ils le déclarent « moins fréquemment », pas « jamais ». · <strong>C</strong> hors texte : le départ des familles n’est qu’une hypothèse d’explication commune. · <strong>E</strong> hors texte : aucun jugement sur les enquêtes."
  },
  {
    "prompt": "<em>Les partisans de la semaine de quatre jours citent volontiers l’exemple d’une expérience menée dans plusieurs entreprises britanniques, où la productivité n’a pas baissé. Mais ces entreprises, volontaires, étaient surtout des sociétés de services, peu soumises aux contraintes d’horaires fixes d’une chaîne de production ou d’un hôpital. Généraliser leurs résultats à toute l’économie reviendrait à conclure d’un cas favorable à la règle.</em><br><br>Pourquoi l’auteur évoque-t-il cette expérience ?",
    "options": [
      "Pour prouver que la semaine de quatre jours augmente la productivité.",
      "Pour décrire le fonctionnement d’une chaîne de production.",
      "Pour en montrer la portée limitée avant toute généralisation.",
      "Pour critiquer la gestion des entreprises britanniques.",
      "Pour réclamer l’interdiction de la semaine de quatre jours."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : « conclure d’un cas favorable à la règle » est la critique du texte. · <strong>A</strong> contresens : l’auteur invite à la prudence. · <strong>B</strong> hors texte : la chaîne de production n’est qu’un contre-exemple. · <strong>D</strong> hors texte : aucune critique de gestion. · <strong>E</strong> extrême : il met en garde, il n’interdit rien."
  },
  {
    "prompt": "<em>Les îlots de chaleur urbains font grimper la température des centres-villes de plusieurs degrés par rapport aux campagnes environnantes, notamment la nuit. Le bitume et le béton absorbent la chaleur du jour et la restituent lentement ; le manque d’arbres limite l’ombre et l’évaporation. Végétaliser les cours d’école, ouvrir les sols et remplacer les revêtements sombres permettent de réduire sensiblement l’écart. Le coût de ces aménagements demeure inférieur à celui d’une climatisation généralisée.</em><br><br>Quelle est l’idée principale de ce texte ?",
    "options": [
      "Le béton et le bitume sont les seuls responsables de la chaleur urbaine.",
      "La climatisation généralisée est la meilleure solution.",
      "Les cours d’école doivent être végétalisées.",
      "Les villes se réchauffent davantage que les campagnes, mais des aménagements peu coûteux peuvent atténuer le phénomène.",
      "Le climat se réchauffe."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : le phénomène + la solution + son coût modéré. · <strong>A</strong> extrême : « seuls » n’est pas écrit (le manque d’arbres joue aussi). · <strong>B</strong> contresens : elle coûte plus cher que les aménagements. · <strong>C</strong> trop précis : un exemple d’aménagement. · <strong>E</strong> trop vague : n’importe quel texte climatique pourrait l’affirmer."
  },
  {
    "prompt": "<em>Apparus il y a une dizaine d’années, les services de livraison de repas à domicile se sont développés très rapidement dans les grandes villes. Les livreurs à vélo sont, pour la plupart, des travailleurs indépendants. À ce titre, ils ne bénéficient ni de congés payés ni d’assurance chômage, mais choisissent librement leurs horaires. Plusieurs juridictions ont néanmoins requalifié leur situation en salariat, estimant que les plateformes exerçaient un véritable pouvoir de direction par le biais de leur algorithme. Les plateformes contestent ces décisions.</em><br><br>Laquelle de ces affirmations est vraie d’après le texte ?",
    "options": [
      "Les livreurs bénéficient de congés payés.",
      "Les plateformes ont accepté la requalification.",
      "Certaines juridictions ont estimé que les livreurs étaient en réalité des salariés.",
      "Les livreurs ne peuvent pas choisir leurs horaires.",
      "Toutes les juridictions ont requalifié leur situation en salariat."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : « plusieurs juridictions ont requalifié ». · <strong>A</strong> faux : « ni de congés payés ». · <strong>B</strong> contresens : elles « contestent ». · <strong>D</strong> faux : ils « choisissent librement leurs horaires ». · <strong>E</strong> extrême : « plusieurs » n’est pas « toutes »."
  },
  {
    "prompt": "<em>Lors du dernier conseil municipal, le bilan annuel de la sécurité a donné lieu à un débat animé. Tandis que la maire se félicitait de la baisse de 15 % des cambriolages, l’opposition faisait remarquer que, sur la même période, le nombre de plaintes enregistrées avait diminué de 20 %, les habitants n’ayant plus confiance dans l’efficacité des dépôts de plainte.</em><br><br>Que laisse entendre l’opposition ?",
    "options": [
      "La baisse des cambriolages enregistrés pourrait venir d’un moindre recours aux plaintes plutôt que d’un recul réel de la délinquance.",
      "Le nombre de cambriolages a augmenté de 5 %.",
      "La maire a falsifié les statistiques.",
      "Plus aucun cambriolage n’a lieu dans la ville.",
      "La baisse est entièrement due à l’action de la maire."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : si les plaintes baissent plus que les cambriolages recensés, le chiffre peut refléter un renoncement à porter plainte. · <strong>B</strong> hors texte : chiffre inventé. · <strong>C</strong> sur-interprétation : l’opposition met en doute une interprétation, elle n’accuse pas de fraude. · <strong>D</strong> extrême et contresens : une baisse n’est pas une disparition. · <strong>E</strong> contresens : c’est la lecture de la maire, que l’opposition conteste."
  },
  {
    "prompt": "<em>Trois années consécutives de sécheresse auraient dû provoquer un effondrement des récoltes. Il n’en a rien été : la <strong>résilience</strong> du secteur agricole, qui a absorbé ces chocs sans chute de la production, tient surtout aux aides publiques et à l’adaptation des cultures, déplacées vers des variétés moins gourmandes en eau. Les exploitants interrogés citent aussi la solidarité entre voisins pour mutualiser le matériel.</em><br><br>Dans ce texte, le mot « résilience » désigne :",
    "options": [
      "la capacité à croître très rapidement",
      "le refus de tout changement",
      "la fragilité face aux chocs",
      "la dépendance exclusive aux aides publiques",
      "la capacité à encaisser un choc et à se maintenir"
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : « a absorbé trois années de sécheresse sans effondrement ». · <strong>A</strong> hors texte : la production se maintient, elle ne croît pas. · <strong>B</strong> contresens : le texte cite « l’adaptation des cultures ». · <strong>C</strong> contresens : exactement le contraire. · <strong>D</strong> extrême : « surtout aux aides » n’est pas « exclusivement »."
  },
  {
    "prompt": "<em>De nombreux cadres, y compris très performants, doutent de leur légitimité et attribuent leurs réussites à la chance plutôt qu’à leurs compétences. Ce phénomène, appelé syndrome de l’imposteur, touche davantage les personnes issues de milieux peu représentés dans leur profession. Loin d’être un simple défaut de confiance en soi, il traduit souvent le décalage entre un individu et les codes implicites d’un milieu. Les entreprises peuvent l’atténuer par des pratiques de mentorat.</em><br><br>Quel titre résume le mieux ce texte ?",
    "options": [
      "La confiance en soi au travail",
      "Le syndrome de l’imposteur : un doute lié au milieu autant qu’à la personne",
      "Le mentorat, remède de toutes les difficultés professionnelles",
      "Réussir sa carrière grâce à la chance",
      "Les cadres performants manquent de compétences"
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : l’idée centrale (« loin d’être un simple défaut de confiance en soi »). · <strong>A</strong> trop vague : ne dit rien du phénomène précis. · <strong>C</strong> extrême et partielle : le mentorat n’est qu’une solution évoquée en fin de texte, et « toutes » est exagéré. · <strong>D</strong> contresens : c’est ce que croient les personnes concernées, non la thèse du texte. · <strong>E</strong> contresens : ils sont « très performants », ils doutent seulement d’eux."
  },
  {
    "prompt": "<em>On entend dire que le français serait « en danger » à cause des anglicismes. L’histoire de la langue invite à relativiser : le français a absorbé, au fil des siècles, des mots italiens, arabes, allemands ou espagnols, et n’en est pas mort. Une langue vit précisément de ces emprunts, qu’elle adapte à sa phonétique et à sa grammaire. Cela n’interdit pas de veiller à ce que l’anglais ne se substitue pas, dans certains domaines comme la recherche, à des mots français existants.</em><br><br>Quelle est la position de l’auteur sur les anglicismes ?",
    "options": [
      "Il réclame l’interdiction des mots étrangers.",
      "Il estime que les emprunts font mourir une langue.",
      "Il affirme que le français n’a rien à craindre en aucun cas.",
      "Il compare l’apport des mots italiens et arabes au français.",
      "Il relativise la menace, tout en restant vigilant dans certains domaines."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : « invite à relativiser » + « n’interdit pas de veiller ». · <strong>A</strong> contresens : il défend les emprunts. · <strong>B</strong> contresens : « n’en est pas mort ». · <strong>C</strong> extrême : la dernière phrase prévoit une vigilance. · <strong>D</strong> trop précis : un exemple historique, pas sa position."
  },
  {
    "prompt": "<em>Entre 2015 et 2023, le nombre de librairies indépendantes est resté stable autour de 3 000, tandis que les ventes de livres en ligne ont presque doublé. Le chiffre d’affaires des librairies, lui, a progressé de 10 %, porté par les rayons de bandes dessinées et de livres pour la jeunesse. Les grandes surfaces, en revanche, ont vu leur part de marché reculer.</em><br><br>Parmi les affirmations suivantes, lesquelles sont vraies d’après le texte ?<br>1. Le nombre de librairies indépendantes a fortement augmenté.<br>2. Les ventes de livres en ligne ont presque doublé.<br>3. Les rayons de bandes dessinées et de livres pour la jeunesse ont contribué à la hausse du chiffre d’affaires des librairies.<br>4. Les grandes surfaces ont vu leur part de marché progresser.",
    "options": [
      "1 et 2",
      "1 et 4",
      "2 et 3",
      "2 et 4",
      "3 et 4"
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : 2 vraie (« presque doublé »), 3 vraie (« porté par les rayons… »). · 1 fausse : le nombre est « resté stable ». · 4 fausse : la part de marché « a reculé ». Donc <strong>A</strong> (1 fausse), <strong>B</strong> (1 et 4 fausses), <strong>D</strong> (4 fausse), <strong>E</strong> (4 fausse) sont éliminées."
  },
  {
    "prompt": "<em>Les commémorations publiques se multiplient : on célèbre aujourd’hui des événements que l’on ignorait il y a trente ans. Pour les historiens, cette inflation traduit moins un regain d’intérêt pour le passé qu’un besoin de reconnaissance de groupes qui s’estimaient oubliés. Mais à force de commémorer, on risque de réduire l’histoire à une série de dates émouvantes, au détriment de l’analyse. La commémoration n’est pas l’histoire : elle choisit ce qu’elle souhaite honorer, quand l’historien examine ce qui s’est passé.</em><br><br>Quelle est l’idée principale de ce texte ?",
    "options": [
      "Les historiens s’opposent à toute commémoration.",
      "Les commémorations, qui se multiplient, répondent à un besoin de reconnaissance mais ne remplacent pas l’analyse historique.",
      "Les Français s’intéressent de plus en plus à leur passé.",
      "L’histoire se résume à une série de dates émouvantes.",
      "Des événements ignorés il y a trente ans sont célébrés aujourd’hui."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : cause de la multiplication + distinction commémoration / histoire. · <strong>A</strong> extrême : « toute » n’est jamais dit. · <strong>C</strong> contresens : « moins un regain d’intérêt » qu’un besoin de reconnaissance. · <strong>D</strong> contresens : le texte met en garde contre ce risque. · <strong>E</strong> trop précis : le constat de départ, pas l’idée."
  },
  {
    "prompt": "<em>Entre 1990 et 2020, l’espérance de vie à la naissance en Europe a gagné près de huit ans, mais les inégalités entre catégories sociales se sont creusées : un cadre vit en moyenne six ans de plus qu’un ouvrier, contre quatre ans trente ans plus tôt. Les progrès médicaux ont profité à tous, mais inégalement : les ouvriers fument davantage et consultent plus tard.</em><br><br>Laquelle de ces affirmations est vraie d’après le texte ?",
    "options": [
      "L’écart d’espérance de vie entre cadres et ouvriers s’est accru.",
      "L’espérance de vie des ouvriers a reculé.",
      "Les progrès médicaux n’ont profité qu’aux cadres.",
      "Les ouvriers consultent plus tôt que les cadres.",
      "Les cadres ont gagné exactement huit ans d’espérance de vie."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : de quatre à six ans d’écart. · <strong>B</strong> contresens : les progrès ont « profité à tous ». · <strong>C</strong> extrême : « n’ont profité qu’aux cadres » contredit « à tous ». · <strong>D</strong> inversion : ils consultent « plus tard ». · <strong>E</strong> hors texte : les huit ans valent pour l’Europe en moyenne, rien n’est dit des cadres seuls."
  },
  {
    "prompt": "<em>En France, un salarié sur deux n’est plus en emploi lorsqu’il prend sa retraite : chômage, invalidité ou inactivité l’ont précédée. Les entreprises hésitent à embaucher des candidats de plus de 55 ans, qu’elles jugent trop coûteux ou peu adaptables, alors que les études ne confirment pas ces préjugés. En reculant l’âge de la retraite sans agir sur l’embauche des seniors, on risque donc de prolonger la période où ils sont sans emploi plutôt que celle où ils travaillent.</em><br><br>Quelle est l’idée principale de ce texte ?",
    "options": [
      "Les seniors sont moins adaptables que les jeunes.",
      "Il ne faut jamais repousser l’âge de la retraite.",
      "Un salarié sur deux n’est plus en emploi à la retraite.",
      "Reculer l’âge de la retraite sans faciliter l’embauche des seniors risque de les exposer plus longtemps au chômage.",
      "Les entreprises discriminent les seniors à l’embauche."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : c’est la conclusion du texte, qui relie les deux constats. · <strong>A</strong> contresens : les études « ne confirment pas ces préjugés ». · <strong>B</strong> extrême : le texte met une condition, pas une interdiction. · <strong>C</strong> trop précis : le constat de départ. · <strong>E</strong> partielle : vrai en partie, mais sans le lien avec le recul de l’âge de la retraite qui fait la thèse."
  }
];

export const TM_RA_QCM = [
  {
    "prompt": "<em>On ne consomme pas un livre comme on consomme un yaourt : on y revient, on le prête, on le garde, et il finit par dire quelque chose de celui qui le possède.</em><br><br>Laquelle de ces propositions soutient le plus les propos du texte ?",
    "options": [
      "Les livres sont plus chers que les produits alimentaires.",
      "Un livre ne se jette jamais.",
      "Les yaourts sont de mauvaise qualité.",
      "Un livre entretient avec son lecteur une relation plus durable et plus personnelle qu’un produit de consommation courante.",
      "Il est préférable de prêter ses livres."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : reprend exactement l’idée (durable, personnelle, différente d’un produit courant). · <strong>A</strong> hors sujet : le prix n’est pas évoqué. · <strong>B</strong> extrême (« jamais »). · <strong>C</strong> hors sujet : le yaourt n’est qu’un terme de comparaison. · <strong>E</strong> trop précise : un seul détail (« on le prête ») érigé en conseil."
  },
  {
    "prompt": "<em>Les villes qui ont instauré une taxe sur les sacs plastique ont vu leur usage reculer de 80 %. La taxe est donc un moyen efficace de réduire les déchets plastiques.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "Certains commerçants soutiennent la taxe.",
      "Les sacs plastique sont très répandus dans le monde.",
      "Sur la même période, la consommation de sacs plastique plus épais, non soumis à la taxe, a fortement augmenté, pour un volume total de plastique quasi inchangé.",
      "La taxe rapporte de l’argent à la ville.",
      "Les consommateurs approuvent la baisse de l’usage des sacs plastique."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : attaque directement la conclusion (déchets réduits) en montrant un report vers un autre plastique. · <strong>A</strong> hors sujet : l’opinion des commerçants n’atteint pas l’efficacité. · <strong>B</strong> hors sujet : n’affecte pas le lien taxe / déchets. · <strong>D</strong> hors sujet : une recette n’affaiblit pas l’efficacité écologique. · <strong>E</strong> soutient plutôt le raisonnement."
  },
  {
    "prompt": "<em>Les marchés financiers réagissent aux annonces des banques centrales avant même que celles-ci aient le moindre effet sur l’économie réelle. Or les décisions de ces banques portent sur des taux dont les effets mettent souvent plus d’un an à se faire sentir. Il en résulte que…</em><br><br>Quelle est la meilleure façon de compléter ce raisonnement ?",
    "options": [
      "les banques centrales n’ont aucun pouvoir sur l’économie.",
      "les marchés financiers anticipent des effets qui ne sont pas encore visibles dans l’économie réelle.",
      "les marchés financiers se trompent toujours.",
      "les taux d’intérêt devraient être fixés par les marchés.",
      "les annonces des banques centrales sont sans intérêt."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : découle directement des deux prémisses (réaction immédiate, effets différés). · <strong>A</strong> extrême : le texte dit que les effets arrivent, avec retard. · <strong>C</strong> extrême (« toujours »). · <strong>D</strong> hors sujet : le texte n’évoque pas qui fixe les taux. · <strong>E</strong> extrême et contresens : les marchés réagissent, donc elles ont un intérêt."
  },
  {
    "prompt": "<em>Cette entreprise a décidé de remplacer sa cantine par des tickets restaurant, afin de laisser plus de liberté à ses salariés.</em><br><br>Quel est le présupposé de cette décision ?",
    "options": [
      "Avoir le choix de son lieu de repas est un avantage pour les salariés.",
      "Les salariés détestent la cantine.",
      "Toutes les entreprises devraient supprimer leur cantine.",
      "Les salariés mangent mal à la cantine.",
      "Les tickets restaurant sont gratuits pour l’entreprise."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : le « afin de laisser plus de liberté » ne tient que si cette liberté est jugée précieuse. · <strong>B</strong> extrême : rien ne dit qu’ils la détestent. · <strong>C</strong> extrême (généralisation à « toutes »). · <strong>D</strong> hors texte : la qualité des repas n’est pas en jeu. · <strong>E</strong> hors texte et non nécessaire au raisonnement."
  },
  {
    "prompt": "<em>Le conseil municipal a indiqué que toutes les écoles de la commune seront dotées d’un restaurant scolaire d’ici la rentrée.</em><br><br>Laquelle de ces propositions contredit cette annonce ?",
    "options": [
      "Certaines écoles de la commune disposent déjà d’un restaurant scolaire.",
      "Le conseil municipal a voté un budget supplémentaire.",
      "Les élèves préfèrent déjeuner chez eux.",
      "Les restaurants scolaires accueilleront les enfants de moins de six ans.",
      "À la rentrée, l’école des Tilleuls, située dans la commune, n’aura pas de restaurant scolaire."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : une école sans restaurant à la rentrée contredit « toutes ». · <strong>A</strong> compatible : certaines en ont déjà, cela n’empêche pas les autres d’en recevoir. · <strong>B</strong> hors sujet. · <strong>C</strong> hors sujet : une préférence n’est pas un fait contradictoire. · <strong>D</strong> hors sujet : une précision sur le public, pas sur la présence."
  },
  {
    "prompt": "<em>Dormir moins de six heures par nuit pendant plusieurs semaines altère la mémoire et l’attention, au point de produire des effets comparables à ceux d’une nuit blanche.</em><br><br>Laquelle de ces propositions soutient le plus ce propos ?",
    "options": [
      "Un manque de sommeil durable dégrade les capacités cognitives.",
      "Les nuits blanches sont nécessaires pour étudier.",
      "La mémoire ne se détériore qu’à cause du manque de sommeil.",
      "Dormir plus de huit heures améliore le quotient intellectuel.",
      "Les étudiants dorment en général moins de six heures."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : reprend l’idée (sommeil insuffisant, mémoire et attention touchées). · <strong>B</strong> contresens : la nuit blanche est présentée comme néfaste. · <strong>C</strong> extrême (« ne… qu’à cause »). · <strong>D</strong> hors texte : on ne parle pas de dormir davantage. · <strong>E</strong> hors texte : aucun renseignement sur les étudiants."
  },
  {
    "prompt": "<em>Les entreprises qui offrent des salaires élevés attirent de meilleurs candidats. Augmenter les salaires est donc la meilleure manière d’améliorer la qualité du recrutement.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "Les salaires élevés représentent un coût important pour l’entreprise.",
      "Les candidats comparent plusieurs offres avant de choisir.",
      "Les entreprises qui paient bien sont plus connues.",
      "Les candidats les plus qualifiés citent d’abord les perspectives d’évolution et l’ambiance de travail, avant le salaire, pour choisir un employeur.",
      "Les salaires ont augmenté en moyenne ces dernières années."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : montre que le levier jugé « meilleur » n’est pas ce qui attire les meilleurs candidats. · <strong>A</strong> hors sujet : le coût n’affecte pas la qualité du recrutement. · <strong>B</strong> neutre : n’attaque pas le lien salaire / qualité. · <strong>C</strong> neutre : la notoriété n’est pas une alternative démontrée. · <strong>E</strong> hors sujet : une évolution générale n’affaiblit rien."
  },
  {
    "prompt": "<em>Quand le prix d’un bien augmente et que la demande ne baisse pas, c’est que les consommateurs le jugent indispensable. Or la demande de sel de table est restée stable malgré une hausse de 30 % de son prix. Il en résulte que…</em><br><br>Quelle est la meilleure façon de compléter ce raisonnement ?",
    "options": [
      "les consommateurs achètent du sel uniquement par habitude.",
      "le sel de table est trop cher.",
      "la demande de tous les biens est insensible aux prix.",
      "les producteurs de sel ne gagnent plus d’argent.",
      "les consommateurs jugent le sel de table indispensable."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : application directe de la règle posée dans la première phrase. · <strong>A</strong> extrême (« uniquement ») et hors texte. · <strong>B</strong> hors sujet : un jugement de prix que rien n’appuie. · <strong>C</strong> extrême : généralisation abusive à partir d’un seul bien. · <strong>D</strong> hors texte : on ne parle pas de leurs profits."
  },
  {
    "prompt": "<em>Puisque tous nos concurrents ont lancé une application mobile, nous devons en lancer une à notre tour.</em><br><br>Quel est le présupposé de ce raisonnement ?",
    "options": [
      "Nos concurrents ont plus de clients que nous.",
      "Le fait que les concurrents aient une application indique qu’elle est utile pour réussir dans ce secteur.",
      "Une application mobile est facile à développer.",
      "Aucune entreprise ne peut réussir sans application.",
      "Nos clients réclament une application depuis longtemps."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : c’est le pont logique entre « ils l’ont fait » et « nous devons le faire ». · <strong>A</strong> hors texte : la comparaison de clientèle n’est pas nécessaire. · <strong>C</strong> hors texte : la facilité n’intervient pas. · <strong>D</strong> extrême : le raisonnement n’exige pas une loi universelle. · <strong>E</strong> hors texte : une autre raison d’agir, absente de l’argument."
  },
  {
    "prompt": "<em>Selon une étude, les entreprises qui pratiquent le télétravail au moins deux jours par semaine voient leur taux de démission diminuer.</em><br><br>Laquelle de ces propositions contredit le plus directement cette étude ?",
    "options": [
      "Le télétravail n’a pas d’effet sur la productivité.",
      "Le taux de démission baisse aussi dans les entreprises sans télétravail.",
      "Dans les entreprises qui pratiquent le télétravail deux jours par semaine, le taux de démission a augmenté.",
      "Le télétravail est apprécié de nombreux salariés.",
      "Le taux de démission a diminué de 10 % dans certaines entreprises sans télétravail."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : affirme l’inverse du résultat, pour les mêmes entreprises. · <strong>A</strong> hors sujet : la productivité n’est pas concernée. · <strong>B</strong> compatible : peut affaiblir un lien causal mais ne contredit pas le constat. · <strong>D</strong> soutient plutôt l’étude. · <strong>E</strong> compatible : concerne d’autres entreprises."
  },
  {
    "prompt": "<em>Un manager qui contrôle tout étouffe l’initiative de ses équipes. Celui qui fait confiance obtient souvent davantage que ce qu’il aurait demandé.</em><br><br>Laquelle de ces propositions soutient le plus ce raisonnement ?",
    "options": [
      "La confiance accordée à une équipe stimule son initiative.",
      "Les managers ne doivent jamais contrôler leurs équipes.",
      "Les équipes très contrôlées sont les plus productives.",
      "Un bon manager demande toujours plus à ses équipes.",
      "Les managers qui font confiance sont mieux payés."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : reformule le lien entre confiance et initiative. · <strong>B</strong> extrême (« jamais ») : le texte critique un contrôle « total », pas tout contrôle. · <strong>C</strong> contresens : le contrôle étouffe l’initiative. · <strong>D</strong> extrême (« toujours ») et hors sujet. · <strong>E</strong> hors texte : les rémunérations ne sont pas évoquées."
  },
  {
    "prompt": "<em>Les élèves qui apprennent à jouer d’un instrument obtiennent de meilleurs résultats en mathématiques. La musique développe donc l’intelligence logique.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "Certains musiciens sont mauvais en mathématiques.",
      "La musique est enseignée dans la plupart des écoles.",
      "Les cours de musique développent la sensibilité artistique.",
      "Les mathématiques exigent une grande rigueur.",
      "Les familles qui paient des cours de musique offrent aussi plus souvent à leurs enfants un soutien scolaire privé."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : propose une autre cause (le soutien scolaire) à la corrélation. · <strong>A</strong> faible : un constat statistique n’est pas contredit par des cas individuels. · <strong>B</strong> hors sujet. · <strong>C</strong> compatible, sans lien avec les mathématiques. · <strong>D</strong> hors sujet : une généralité."
  },
  {
    "prompt": "<em>Toutes les roses de ce jardin sont rouges. Aucune fleur rouge n’a été cueillie ce matin. Il en résulte que…</em><br><br>Quelle est la meilleure façon de compléter ce raisonnement ?",
    "options": [
      "les roses sont les seules fleurs rouges du jardin.",
      "aucune fleur du jardin n’a été cueillie ce matin.",
      "toutes les fleurs rouges sont des roses.",
      "aucune rose de ce jardin n’a été cueillie ce matin.",
      "les roses rouges sont plus belles que les autres."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : toute rose du jardin est rouge, et aucune fleur rouge n’a été cueillie. · <strong>A</strong> réciproque abusive : d’autres fleurs rouges peuvent exister. · <strong>B</strong> extrême : seules les fleurs rouges sont concernées. · <strong>C</strong> réciproque abusive, même erreur que <strong>A</strong>. · <strong>E</strong> hors sujet : un jugement de valeur."
  },
  {
    "prompt": "<em>Les prix de l’immobilier baisseront forcément si l’on construit davantage de logements.</em><br><br>Quel est le présupposé de cette affirmation ?",
    "options": [
      "Les promoteurs sont prêts à réduire leurs marges.",
      "Les prix dépendent, au moins en partie, du rapport entre l’offre et la demande de logements.",
      "Les habitants refusent de vivre loin des centres-villes.",
      "Les taux d’intérêt resteront bas.",
      "Tous les logements construits seront vendus à des particuliers."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : sans cette idée, construire plus ne pourrait pas faire baisser les prix. · <strong>A</strong> hors texte : la marge n’est pas le mécanisme invoqué. · <strong>C</strong> hors sujet. · <strong>D</strong> hors sujet : les taux ne sont pas évoqués. · <strong>E</strong> extrême (« tous ») et inutile au raisonnement."
  },
  {
    "prompt": "<em>Le prix Nobel est souvent attribué à des chercheurs dont les travaux, jugés d’abord marginaux, ont mis des décennies à être reconnus.</em><br><br>Laquelle de ces propositions soutient le plus ce propos ?",
    "options": [
      "Les travaux jugés marginaux sont toujours reconnus un jour.",
      "Seuls les chercheurs âgés reçoivent le prix Nobel.",
      "La reconnaissance d’une découverte scientifique peut intervenir très longtemps après sa réalisation.",
      "Un prix Nobel garantit la qualité de la recherche.",
      "Les chercheurs marginaux sont les meilleurs."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : reformule le constat (reconnaissance tardive). · <strong>A</strong> extrême (« toujours »). · <strong>B</strong> extrême (« seuls ») : le texte ne parle pas d’âge. · <strong>D</strong> hors texte et extrême. · <strong>E</strong> extrême et hors texte."
  },
  {
    "prompt": "<em>Aucun des administrateurs présents à la réunion n’a voté contre la fusion.</em><br><br>Laquelle de ces propositions contredit cette affirmation ?",
    "options": [
      "Un administrateur présent à la réunion a voté contre la fusion.",
      "Des administrateurs absents ont voté contre la fusion.",
      "Aucun administrateur présent n’a voté pour la fusion.",
      "Certains administrateurs présents se sont abstenus.",
      "Tous les administrateurs sont venus à la réunion."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : contradiction frontale (« aucun » contre « un »). · <strong>B</strong> compatible : les absents ne sont pas concernés. · <strong>C</strong> compatible : ils ont pu tous s’abstenir. · <strong>D</strong> compatible : s’abstenir n’est pas voter contre. · <strong>E</strong> compatible : ne dit rien du sens des votes."
  },
  {
    "prompt": "<em>Les pays qui consacrent une part plus élevée de leur PIB à l’éducation ont une croissance plus forte. Pour accélérer sa croissance, la France devrait donc dépenser davantage pour l’éducation.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "L’éducation est un enjeu majeur pour la France.",
      "Les enseignants français réclament une revalorisation de leurs salaires.",
      "Les dépenses d’éducation sont financées par l’impôt.",
      "Certains pays très pauvres consacrent peu au budget éducatif.",
      "Ce sont les pays déjà riches et en croissance qui ont les moyens de dépenser davantage pour l’éducation."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : inverse le sens de la causalité (la croissance finance l’éducation). · <strong>A</strong> hors sujet : un constat général qui ne touche pas le lien causal. · <strong>B</strong> hors sujet. · <strong>C</strong> hors sujet : le mode de financement est sans effet sur l’argument. · <strong>D</strong> soutient plutôt : peu de dépense chez les pays pauvres va dans le sens de la corrélation."
  },
  {
    "prompt": "<em>Les enfants exposés à la publicité pour les céréales sucrées en réclament davantage à leurs parents. Plusieurs pays ont interdit la publicité pendant les programmes jeunesse. Cette mesure vise donc à…</em><br><br>Quelle est la meilleure façon de compléter ce raisonnement ?",
    "options": [
      "supprimer toute consommation de sucre.",
      "faire disparaître les céréales du marché.",
      "augmenter les recettes des chaînes de télévision.",
      "limiter la demande d’aliments sucrés exprimée par les enfants.",
      "punir les parents qui achètent des céréales sucrées."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : prolonge la première phrase (publicité, donc demande). · <strong>A</strong> extrême (« toute »). · <strong>B</strong> extrême : on interdit la publicité, pas le produit. · <strong>C</strong> contresens : interdire la publicité réduit plutôt leurs recettes. · <strong>E</strong> hors texte."
  },
  {
    "prompt": "<em>Si l’on veut réduire le chômage, il suffit de réduire les cotisations patronales.</em><br><br>Quel est le présupposé de cette affirmation ?",
    "options": [
      "Les salariés refusent de travailler davantage.",
      "Le coût du travail est un frein important à l’embauche.",
      "Le chômage est un problème uniquement français.",
      "Les cotisations patronales sont déjà supprimées.",
      "Les syndicats sont favorables à une baisse des cotisations."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : sans cela, baisser les cotisations n’aurait aucune raison d’aider l’emploi. · <strong>A</strong> hors sujet. · <strong>C</strong> extrême (« uniquement ») et hors sujet. · <strong>D</strong> contresens : on propose de les réduire, donc elles existent. · <strong>E</strong> hors sujet : une opinion syndicale n’est pas une condition logique."
  },
  {
    "prompt": "<em>L’inflation frappe plus durement les ménages modestes, car ils consacrent une plus grande part de leur revenu à des dépenses contraintes comme l’alimentation et l’énergie.</em><br><br>Laquelle de ces propositions soutient le plus ce propos ?",
    "options": [
      "Les ménages aisés ne sont jamais touchés par l’inflation.",
      "L’inflation ne concerne que les prix alimentaires.",
      "Plus une dépense est contrainte, moins un ménage peut s’y soustraire face à une hausse des prix.",
      "Les ménages modestes ne savent pas épargner.",
      "Les prix de l’énergie ont triplé."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : explique pourquoi une part contrainte élevée rend plus vulnérable. · <strong>A</strong> extrême (« jamais ») : « plus durement » n’exclut pas les autres. · <strong>B</strong> extrême (« ne… que »). · <strong>D</strong> hors texte : un jugement sur les personnes. · <strong>E</strong> hors texte : chiffre inventé."
  },
  {
    "prompt": "<em>Un règlement interdit de fumer dans les gares depuis cinq ans. Le nombre de fumeurs a baissé de 10 % depuis. Cette interdiction a donc réduit le tabagisme.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "Les gares accueillent chaque jour des millions de voyageurs.",
      "Le tabagisme est un problème de santé publique.",
      "Le règlement est bien respecté dans les gares.",
      "Les fumeurs continuent de fumer à l’extérieur des gares.",
      "Sur la même période, le prix du paquet de cigarettes a fortement augmenté et de grandes campagnes de prévention ont été menées."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : offre d’autres causes possibles de la baisse. · <strong>A</strong> hors sujet : la fréquentation ne dit rien de la cause de la baisse. · <strong>B</strong> hors sujet : une généralité. · <strong>C</strong> soutient plutôt l’efficacité du règlement. · <strong>D</strong> compatible : ne dit rien sur le nombre total de fumeurs."
  },
  {
    "prompt": "<em>Les adeptes du travail à distance vantent un gain de temps de transport et une meilleure concentration. Mais leurs managers observent un affaiblissement du collectif, plus difficile à entretenir devant un écran. Les entreprises qui s’en sortent le mieux sont celles qui organisent des journées de présence communes.</em><br><br>Quel est le meilleur résumé de ce texte ?",
    "options": [
      "Le travail à distance offre des avantages individuels mais fragilise le collectif, ce qu’atténuent des jours de présence communs.",
      "Les managers s’opposent au travail à distance.",
      "Il faut supprimer le travail à distance.",
      "Le travail à distance fait gagner du temps de transport.",
      "Les entreprises organisent des journées de présence communes."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : couvre les trois étapes (avantage, limite, remède). · <strong>B</strong> extrême : ils observent un problème, ils ne s’opposent pas. · <strong>C</strong> extrême : le texte propose un aménagement. · <strong>D</strong> partielle : un seul avantage. · <strong>E</strong> partielle : seulement la fin du texte."
  },
  {
    "prompt": "<em>Dans cette entreprise, seuls les salariés ayant plus de cinq ans d’ancienneté peuvent bénéficier d’un congé sabbatique.</em><br><br>Laquelle de ces propositions contredit cette règle ?",
    "options": [
      "Un salarié ayant dix ans d’ancienneté n’a pas pris de congé sabbatique.",
      "Un salarié ayant six ans d’ancienneté a bénéficié d’un congé sabbatique.",
      "Un salarié ayant trois ans d’ancienneté a bénéficié d’un congé sabbatique.",
      "Aucun salarié n’a bénéficié d’un congé sabbatique cette année.",
      "Les congés sabbatiques sont rares."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : trois ans est inférieur au seuil, donc contradiction. · <strong>A</strong> compatible : la règle autorise, elle n’oblige pas. · <strong>B</strong> compatible : six ans dépasse cinq. · <strong>D</strong> compatible : personne n’en a bénéficié, donc pas de violation. · <strong>E</strong> hors sujet : une fréquence."
  },
  {
    "prompt": "<em>Pour éviter que les jeunes ne quittent les campagnes, il suffit d’y installer la fibre optique.</em><br><br>Quel est le présupposé de cette affirmation ?",
    "options": [
      "Les jeunes n’aiment pas la vie à la campagne.",
      "La fibre optique coûte moins cher en ville.",
      "Toutes les campagnes ont déjà la fibre.",
      "L’absence de connexion rapide est une cause importante du départ des jeunes.",
      "Les jeunes passent l’essentiel de leur temps sur Internet."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : sinon installer la fibre n’aurait aucun effet sur les départs. · <strong>A</strong> extrême : on n’en déduit pas un rejet global. · <strong>B</strong> hors sujet. · <strong>C</strong> contresens : on propose de l’installer. · <strong>E</strong> extrême et hors sujet."
  },
  {
    "prompt": "<em>L’innovation naît rarement dans l’isolement : les grandes avancées techniques ont presque toujours résulté de la rencontre entre des disciplines ou des personnes que rien ne destinait à travailler ensemble.</em><br><br>Laquelle de ces propositions soutient le plus ce propos ?",
    "options": [
      "L’innovation n’est jamais le fait d’un individu seul.",
      "Les échanges entre des domaines différents favorisent l’innovation.",
      "Les chercheurs isolés sont moins intelligents.",
      "Les grandes entreprises innovent plus que les petites.",
      "Les disciplines scientifiques doivent être fusionnées."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : reprend le cœur du propos. · <strong>A</strong> extrême : « rarement » devient « jamais ». · <strong>C</strong> hors texte : un jugement sur les personnes. · <strong>D</strong> hors texte : la taille n’est pas évoquée. · <strong>E</strong> extrême et hors texte : une prescription."
  },
  {
    "prompt": "<em>Les applications de méditation sont de plus en plus téléchargées. Les Français sont donc de plus en plus soucieux de leur bien-être psychologique.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "Les applications de méditation sont souvent gratuites.",
      "Le stress est un problème fréquent.",
      "Dans la plupart des cas, l’application est supprimée après quelques jours d’usage.",
      "Les Français utilisent aussi des applications de sport.",
      "Le marché des applications de bien-être est dominé par des entreprises étrangères."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : montre que le téléchargement ne prouve pas un souci durable. · <strong>A</strong> hors sujet, et pourrait plutôt expliquer le nombre de téléchargements. · <strong>B</strong> soutient plutôt le raisonnement. · <strong>D</strong> hors sujet. · <strong>E</strong> hors sujet : l’origine des entreprises ne change rien à l’inférence."
  },
  {
    "prompt": "<em>L’eau du robinet est soumise à plus de soixante contrôles sanitaires, alors que l’eau minérale en bouteille n’en subit qu’une poignée. Pourtant, les consommateurs sont plus nombreux à faire confiance à l’eau en bouteille. Il en résulte que…</em><br><br>Quelle est la meilleure façon de compléter ce raisonnement ?",
    "options": [
      "l’eau du robinet est forcément plus saine que l’eau minérale.",
      "l’eau minérale est dangereuse.",
      "les consommateurs ignorent tout des contrôles sanitaires.",
      "la confiance des consommateurs ne s’appuie pas sur le nombre de contrôles.",
      "il faut interdire l’eau en bouteille."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : déduction minimale à partir du « pourtant ». · <strong>A</strong> extrême (« forcément ») : plus de contrôles n’établit pas plus de salubrité. · <strong>B</strong> extrême : rien n’indique un danger. · <strong>C</strong> extrême (« tout ») : ils peuvent ignorer certains aspects sans tout ignorer. · <strong>E</strong> extrême et hors texte."
  },
  {
    "prompt": "<em>L’entreprise a décidé de limiter l’envoi de mails après 19 heures afin de protéger la santé de ses salariés.</em><br><br>Quel est le présupposé de cette décision ?",
    "options": [
      "Les mails sont moins utiles que les appels téléphoniques.",
      "Recevoir des mails en soirée peut nuire à la santé des salariés.",
      "Tous les salariés travaillent après 19 heures.",
      "L’entreprise a perdu des salariés à cause du stress.",
      "Les salariés lisent les mails le matin."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : la mesure n’a de sens que si ce risque existe. · <strong>A</strong> hors sujet : la comparaison avec le téléphone n’est pas en jeu. · <strong>C</strong> extrême (« tous »). · <strong>D</strong> hors texte : un fait passé non mentionné. · <strong>E</strong> hors sujet."
  },
  {
    "prompt": "<em>Selon le laboratoire, son médicament n’a provoqué aucun effet secondaire grave chez les patients testés.</em><br><br>Laquelle de ces propositions contredit cette affirmation ?",
    "options": [
      "Des effets secondaires légers ont été observés chez certains patients.",
      "Le médicament n’a pas été testé sur des enfants.",
      "Le laboratoire ne communique pas sur les effets secondaires.",
      "Le médicament est efficace contre la maladie visée.",
      "Parmi les patients testés, certains ont présenté un effet secondaire grave."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : contradiction directe de « aucun effet grave ». · <strong>A</strong> compatible : léger ≠ grave. · <strong>B</strong> hors sujet : ne concerne pas les patients testés. · <strong>C</strong> hors sujet : une attitude, pas un fait sur les patients. · <strong>D</strong> hors sujet : l’efficacité n’est pas la sécurité."
  },
  {
    "prompt": "<em>Le candidat a dirigé trois entreprises avec succès. Cela prouve qu’il est capable de diriger l’État.</em><br><br>Laquelle de ces propositions affaiblit le plus ce raisonnement ?",
    "options": [
      "Diriger un État implique des contraintes (élections, contre-pouvoirs, service public) sans équivalent dans une entreprise.",
      "Le candidat a quitté deux de ces entreprises sans conflit.",
      "Le candidat est apprécié de ses anciens salariés.",
      "Les trois entreprises étaient de tailles différentes.",
      "Les États dépensent plus que les entreprises."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : attaque l’analogie entreprise / État. · <strong>B</strong> hors sujet. · <strong>C</strong> soutient plutôt. · <strong>D</strong> hors sujet : la taille ne change pas la nature du problème. · <strong>E</strong> hors sujet : une comparaison de montants n’attaque pas l’analogie."
  },
  {
    "prompt": "<em>« Livre » est à « bibliothèque » ce que « tableau » est à…</em><br><br>Quel est le terme qui respecte le même lien ?",
    "options": [
      "peintre",
      "toile",
      "musée",
      "cadre",
      "couleur"
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : un livre est conservé et exposé dans une bibliothèque, comme un tableau dans un musée (œuvre / lieu qui la rassemble). · <strong>A</strong> lien différent : celui qui crée, pas le lieu. · <strong>B</strong> lien différent : le support, pas le lieu. · <strong>D</strong> lien différent : un élément qui entoure l’œuvre. · <strong>E</strong> lien différent : un composant de l’œuvre."
  },
  {
    "prompt": "<em>« Pilote » est à « avion » ce que « capitaine » est à…</em><br><br>Quel est le terme qui respecte le même lien ?",
    "options": [
      "port",
      "équipage",
      "mer",
      "navire",
      "ancre"
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : celui qui commande et conduit l’engin (pilote / avion, capitaine / navire). · <strong>A</strong> lien différent : un lieu où le navire s’arrête. · <strong>B</strong> lien différent : le pilote est lié à l’engin qu’il conduit, pas à un groupe de personnes. · <strong>C</strong> lien différent : un milieu, comme le ciel pour l’avion. · <strong>E</strong> lien différent : un équipement du navire."
  },
  {
    "prompt": "<em>« Graine » est à « arbre » ce que « œuf » est à…</em><br><br>Quel est le terme qui respecte le même lien ?",
    "options": [
      "nid",
      "plume",
      "ciel",
      "ferme",
      "oiseau"
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : la graine devient l’arbre, l’œuf devient l’oiseau (origine / être adulte). · <strong>A</strong> lien différent : un lieu où l’on trouve des œufs. · <strong>B</strong> lien différent : une partie de l’oiseau. · <strong>C</strong> lien différent : un milieu. · <strong>D</strong> lien différent : un lieu d’élevage."
  },
  {
    "prompt": "<em>« Thermomètre » est à « température » ce que « balance » est à…</em><br><br>Quel est le terme qui respecte le même lien ?",
    "options": [
      "cuisine",
      "poids",
      "pesée",
      "magasin",
      "kilogramme"
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : un instrument qui mesure une grandeur (thermomètre / température, balance / poids). · <strong>A</strong> lien différent : un lieu où l’on trouve une balance. · <strong>C</strong> lien différent : l’action de mesurer, non la grandeur mesurée. · <strong>D</strong> lien différent : un lieu. · <strong>E</strong> lien différent : l’unité de mesure, pas la grandeur mesurée."
  },
  {
    "prompt": "<em>Le prix des billets d’avion a baissé de 20 % en dix ans. Pourtant, le chiffre d’affaires des compagnies aériennes a augmenté sur la même période.</em><br><br>Laquelle de ces propositions permet le mieux de résoudre ce paradoxe ?",
    "options": [
      "Le nombre de passagers a augmenté bien plus vite que les prix n’ont baissé.",
      "Les billets d’avion restent plus chers que les billets de train.",
      "Les compagnies ont réduit leur personnel.",
      "Le chiffre d’affaires a été mal mesuré.",
      "Les prix de l’essence ont baissé."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : prix plus bas mais volumes beaucoup plus élevés, donc recettes en hausse. · <strong>B</strong> hors sujet : une comparaison avec le train n’explique pas le chiffre d’affaires. · <strong>C</strong> hors sujet : le personnel agit sur les coûts, pas sur le chiffre d’affaires. · <strong>D</strong> évasion du paradoxe : on ne résout pas en contestant le chiffre. · <strong>E</strong> hors sujet : le carburant influe sur les coûts, pas sur le chiffre d’affaires."
  },
  {
    "prompt": "<em>Dans une ville, le nombre de policiers a doublé. Pourtant, le nombre de délits enregistrés a augmenté.</em><br><br>Laquelle de ces propositions permet le mieux de résoudre ce paradoxe ?",
    "options": [
      "Les policiers sont recrutés sur concours.",
      "Davantage de policiers permet de constater et d’enregistrer des délits qui seraient passés inaperçus.",
      "Le budget de la ville a doublé également.",
      "Le nombre d’agents de la police municipale n’a pas changé.",
      "Les délits sont toujours plus nombreux en été."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : explique que la hausse puisse venir du recensement et non de la délinquance. · <strong>A</strong> hors sujet. · <strong>C</strong> hors sujet : un budget n’explique pas la hausse des délits. · <strong>D</strong> hors sujet : on parle des policiers, pas de la police municipale. · <strong>E</strong> extrême (« toujours ») et hors sujet."
  },
  {
    "prompt": "<em>Certains pays obtiennent de bons résultats scolaires avec des classes nombreuses, tandis que d’autres y parviennent avec de petites classes. Il en résulte que…</em><br><br>Quelle est la meilleure façon de compléter ce raisonnement ?",
    "options": [
      "la taille des classes n’est pas, à elle seule, le facteur déterminant des résultats scolaires.",
      "la taille des classes n’a aucune influence.",
      "il faut augmenter la taille des classes.",
      "les petits pays réussissent mieux.",
      "les enseignants sont le seul facteur de réussite."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : conclusion prudente qui découle des deux cas observés. · <strong>B</strong> extrême (« aucune ») : on ne peut conclure à l’absence d’effet. · <strong>C</strong> hors sujet : une prescription que rien n’appuie. · <strong>D</strong> hors texte : on parle de la taille des classes, pas des pays. · <strong>E</strong> extrême (« seul »)."
  },
  {
    "prompt": "<em>Seule une minorité des étudiants de cette université vit dans la ville.</em><br><br>Laquelle de ces propositions contredit cette affirmation ?",
    "options": [
      "Certains étudiants vivent dans la ville.",
      "Les étudiants préfèrent les logements du centre-ville.",
      "La plupart des étudiants de cette université habitent dans la ville.",
      "Moins de la moitié des étudiants vit dans la ville.",
      "La ville compte plus d’habitants que d’étudiants."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : majorité contre minorité, contradiction directe. · <strong>A</strong> compatible : « certains » est vrai si c’est une minorité. · <strong>B</strong> hors sujet : un goût. · <strong>D</strong> équivalent à l’affirmation (« minorité »), donc soutient. · <strong>E</strong> hors sujet : une comparaison sans lien."
  },
  {
    "prompt": "<em>Le gouvernement souhaite instaurer une taxe sur les boissons sucrées pour lutter contre l’obésité.</em><br><br>Quel est le présupposé de cette mesure ?",
    "options": [
      "L’obésité n’a pas d’autre cause que les boissons sucrées.",
      "Les fabricants vont réduire le sucre dans leurs boissons.",
      "Les boissons sucrées sont déjà interdites dans les écoles.",
      "Une hausse de prix peut réduire la consommation de ces boissons.",
      "Les consommateurs ignorent tout des risques de l’obésité."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : sans cet effet du prix sur la demande, la taxe ne servirait à rien. · <strong>A</strong> extrême (« pas d’autre cause »). · <strong>B</strong> hors texte : une conséquence possible, pas une condition. · <strong>C</strong> hors texte. · <strong>E</strong> extrême (« tout ») et hors texte."
  },
  {
    "prompt": "<em>Un bon professeur ne se contente pas de transmettre un savoir : il donne envie d’apprendre, ce qu’aucun manuel ne peut faire à sa place.</em><br><br>Laquelle de ces propositions soutient le plus ce propos ?",
    "options": [
      "Les manuels scolaires sont inutiles.",
      "Un professeur ne doit jamais transmettre de connaissances.",
      "Les élèves motivés n’ont pas besoin de professeur.",
      "Tous les professeurs savent donner envie d’apprendre.",
      "Susciter la motivation des élèves fait partie du rôle d’un enseignant."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : reprend l’idée (au-delà du savoir, donner envie). · <strong>A</strong> extrême : le texte ne les juge pas inutiles, il dit qu’ils ne suffisent pas. · <strong>B</strong> extrême et contresens : le texte dit « ne se contente pas ». · <strong>C</strong> hors texte et extrême. · <strong>D</strong> extrême (« tous ») : le texte décrit « un bon » professeur."
  }
];

export const TM_PROVERBES_QCM = [
  {
    "prompt": "Que signifie le proverbe <em>« Qui sème le vent récolte la tempête »</em> ?",
    "options": [
      "Il faut semer au bon moment pour avoir une bonne récolte.",
      "Un acte imprudent ou violent entraîne des conséquences bien plus graves encore.",
      "Le vent est favorable à celui qui est courageux.",
      "Toute action est vouée à l’échec.",
      "Les tempêtes sont inévitables."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : sens figuré (cause modeste, effet démesuré). · <strong>A</strong> sens littéral agricole, pas le sens figuré. · <strong>C</strong> contresens : le vent est ici un danger. · <strong>D</strong> extrême (« toute »). · <strong>E</strong> hors sujet : il s’agit de conséquences d’un acte, pas d’un phénomène inévitable."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Petit à petit, l’oiseau fait son nid »</em> ?",
    "options": [
      "Avec patience et persévérance, on finit par atteindre son but.",
      "Les oiseaux construisent leur nid très lentement.",
      "Il faut toujours agir rapidement.",
      "Seuls les débutants avancent petit à petit.",
      "Les petites tâches ne servent à rien."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : sens figuré (patience, progrès régulier). · <strong>B</strong> sens littéral, sans portée générale. · <strong>C</strong> contresens : le proverbe valorise la lenteur. · <strong>D</strong> extrême (« seuls ») et hors sujet. · <strong>E</strong> contresens : les petites tâches comptent."
  },
  {
    "prompt": "Que signifie le proverbe <em>« L’habit ne fait pas le moine »</em> ?",
    "options": [
      "Les vêtements sont sans importance dans la vie sociale.",
      "Les moines sont mal habillés.",
      "Il est préférable de choisir ses vêtements avec soin.",
      "La religion est une affaire privée.",
      "Les apparences sont trompeuses."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : l’apparence ne dit pas la nature réelle. · <strong>A</strong> extrême : le proverbe parle de ce qu’on déduit de l’habit, pas de l’importance des vêtements. · <strong>B</strong> sens littéral détourné. · <strong>C</strong> contresens : l’idée n’est pas de soigner son apparence. · <strong>D</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Chat échaudé craint l’eau froide »</em> ?",
    "options": [
      "Les chats détestent l’eau.",
      "Il faut toujours se méfier de l’eau chaude.",
      "L’expérience rend courageux.",
      "Une mauvaise expérience rend méfiant, même devant ce qui n’est pas dangereux.",
      "Seuls les animaux apprennent de leurs erreurs."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : généralisation craintive après un incident. · <strong>A</strong> sens littéral, sans portée générale. · <strong>B</strong> extrême (« toujours ») et sens littéral. · <strong>C</strong> contresens : ici l’expérience rend peureux. · <strong>E</strong> extrême (« seuls ») et hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Qui va à la chasse perd sa place »</em> ?",
    "options": [
      "Les chasseurs sont toujours perdants.",
      "Il faut rester chez soi.",
      "En quittant sa place, on risque de la voir prise par un autre.",
      "La chasse est un loisir dangereux.",
      "Les places sont attribuées au hasard."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : la place libérée est occupée. · <strong>A</strong> extrême (« toujours ») et sens littéral. · <strong>B</strong> extrême : le proverbe ne condamne pas toute sortie. · <strong>D</strong> sens littéral, hors sujet. · <strong>E</strong> hors sujet : le hasard n’intervient pas."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Il ne faut pas vendre la peau de l’ours avant de l’avoir tué »</em> ?",
    "options": [
      "Il ne faut jamais chasser les ours.",
      "Les ours sont dangereux.",
      "Il faut vendre vite pour gagner de l’argent.",
      "Le commerce de fourrures est interdit.",
      "Il ne faut pas disposer d’un bénéfice qui n’est pas encore acquis."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : ne pas compter sur un gain incertain. · <strong>A</strong> extrême (« jamais ») et sens littéral. · <strong>B</strong> sens littéral. · <strong>C</strong> contresens : le proverbe invite à attendre. · <strong>D</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Les petits ruisseaux font les grandes rivières »</em> ?",
    "options": [
      "Les rivières sont plus utiles que les ruisseaux.",
      "Il ne faut jamais sous-estimer la taille d’une rivière.",
      "Les ruisseaux sont des rivières.",
      "De petites contributions accumulées finissent par produire un grand résultat.",
      "Seuls les grands projets comptent."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : l’accumulation de petites choses. · <strong>A</strong> comparaison littérale, sans portée générale. · <strong>B</strong> extrême (« jamais ») et sens littéral. · <strong>C</strong> contresens : le proverbe décrit un processus d’accumulation. · <strong>E</strong> contresens : le proverbe valorise les petites contributions."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Rien ne sert de courir, il faut partir à point »</em> ?",
    "options": [
      "Une bonne préparation et le bon moment comptent plus que la précipitation.",
      "Il ne faut jamais courir.",
      "Les retardataires gagnent toujours.",
      "Courir est inutile à la santé.",
      "Il faut partir très tôt dans tous les cas."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : mieux vaut anticiper que se précipiter. · <strong>B</strong> extrême et sens littéral. · <strong>C</strong> extrême (« toujours ») : ce n’est pas l’éloge du retard. · <strong>D</strong> hors sujet. · <strong>E</strong> extrême : « à point » signifie au bon moment, pas le plus tôt possible."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Qui ne dit mot consent »</em> ?",
    "options": [
      "Le silence est toujours une preuve de sagesse.",
      "Il vaut mieux se taire en toute circonstance.",
      "Le silence peut être interprété comme un accord.",
      "Les silencieux n’ont pas d’opinion.",
      "Le silence exprime un désaccord."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : celui qui ne s’oppose pas est réputé d’accord. · <strong>A</strong> extrême (« toujours ») et hors sujet. · <strong>B</strong> extrême (« toute circonstance »). · <strong>D</strong> hors sujet : le proverbe parle d’accord, pas d’absence d’opinion. · <strong>E</strong> contresens."
  },
  {
    "prompt": "Que signifie le proverbe <em>« L’argent ne fait pas le bonheur »</em> ?",
    "options": [
      "L’argent empêche d’être heureux.",
      "La richesse ne suffit pas à rendre heureux.",
      "Seuls les pauvres sont heureux.",
      "Le bonheur est gratuit pour tous.",
      "L’argent n’a aucune importance."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : l’argent n’est pas une condition suffisante. · <strong>A</strong> extrême : « ne fait pas » ne veut pas dire « empêche ». · <strong>C</strong> extrême (« seuls »). · <strong>D</strong> extrême : on ne dit rien du coût du bonheur. · <strong>E</strong> extrême (« aucune »)."
  },
  {
    "prompt": "Que signifie le proverbe <em>« C’est en forgeant qu’on devient forgeron »</em> ?",
    "options": [
      "Le métier de forgeron est ancien.",
      "On naît forgeron.",
      "Le talent suffit pour réussir.",
      "Il faut changer de métier pour progresser.",
      "C’est par la pratique que l’on devient compétent."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : l’expérience forge la compétence. · <strong>A</strong> hors sujet : une information historique. · <strong>B</strong> contresens : l’inné n’est pas évoqué. · <strong>C</strong> contresens : le travail prime. · <strong>D</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Un tiens vaut mieux que deux tu l’auras »</em> ?",
    "options": [
      "Il faut toujours préférer le plus grand gain.",
      "Les promesses sont toujours tenues.",
      "Mieux vaut un avantage certain qu’une promesse plus grande mais incertaine.",
      "Les promesses valent mieux que les actes.",
      "Les voleurs préfèrent les petits larcins."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : la certitude prime sur l’espoir. · <strong>A</strong> contresens et extrême (« toujours »). · <strong>B</strong> extrême (« toujours ») : le proverbe suppose au contraire qu’une promesse peut ne pas être tenue. · <strong>D</strong> contresens : c’est la chose acquise qui prime sur la promesse. · <strong>E</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Après la pluie, le beau temps »</em> ?",
    "options": [
      "Il pleut toujours avant qu’il fasse beau.",
      "Les difficultés sont généralement suivies de périodes meilleures.",
      "Il faut sortir à l’abri de la pluie.",
      "Les périodes heureuses ne durent pas.",
      "La météo est imprévisible."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : sens figuré (la peine est suivie du mieux). · <strong>A</strong> extrême (« toujours ») et sens littéral. · <strong>C</strong> sens littéral. · <strong>D</strong> contresens. · <strong>E</strong> sens littéral, hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« L’occasion fait le larron »</em> ?",
    "options": [
      "Les circonstances favorables poussent à mal agir.",
      "Les voleurs préparent minutieusement leurs actes.",
      "Il faut saisir toutes les occasions.",
      "Les larrons sont des gens honnêtes.",
      "L’occasion est un hasard."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : la tentation naît de l’opportunité. · <strong>B</strong> contresens : le proverbe suppose une action non préméditée. · <strong>C</strong> contresens : il s’agit d’une mise en garde. · <strong>D</strong> contresens. · <strong>E</strong> hors sujet : la question n’est pas la chance."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Mieux vaut tard que jamais »</em> ?",
    "options": [
      "Il faut toujours arriver en retard.",
      "Le retard est préférable à la ponctualité.",
      "Rien ne vaut jamais la peine d’être fait.",
      "Il vaut mieux faire une chose en retard que ne pas la faire.",
      "Les choses faites trop tard sont inutiles."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : le retard vaut mieux que l’absence d’action. · <strong>A</strong> extrême (« toujours »). · <strong>B</strong> extrême : le proverbe n’oppose pas retard et ponctualité. · <strong>C</strong> extrême (« jamais ») et hors sujet. · <strong>E</strong> contresens."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Les chiens aboient, la caravane passe »</em> ?",
    "options": [
      "Il ne faut pas se laisser arrêter par les critiques.",
      "Les chiens sont dangereux pour les voyageurs.",
      "Il faut répondre à toutes les critiques.",
      "Les caravanes sont toujours sûres.",
      "Le bruit est une forme de communication."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : l’action se poursuit malgré le bruit des critiques. · <strong>B</strong> sens littéral. · <strong>C</strong> extrême et contresens. · <strong>D</strong> extrême (« toujours ») et hors sujet. · <strong>E</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Qui trop embrasse mal étreint »</em> ?",
    "options": [
      "Il faut toujours serrer fort ce que l’on tient.",
      "Les embrassades sont rarement sincères.",
      "Entreprendre trop de choses à la fois conduit à l’échec.",
      "Seul celui qui embrasse peu est aimé.",
      "Il faut éviter tout contact physique."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : trop d’ambitions nuisent à la réussite de chacune. · <strong>A</strong> extrême et sens littéral. · <strong>B</strong> hors sujet. · <strong>D</strong> extrême (« seul ») et hors sujet. · <strong>E</strong> extrême (« tout »)."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Aide-toi, le ciel t’aidera »</em> ?",
    "options": [
      "Il ne faut jamais demander d’aide.",
      "Le ciel aide ceux qui ne font rien.",
      "Chacun doit prier pour réussir.",
      "Seule la chance permet de réussir.",
      "Il faut d’abord agir par soi-même pour pouvoir espérer de l’aide."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : l’effort personnel précède l’aide. · <strong>A</strong> extrême : on ne parle pas de refuser toute aide. · <strong>B</strong> contresens. · <strong>C</strong> hors texte : le ciel est une image, pas une injonction religieuse. · <strong>D</strong> contresens et extrême."
  },
  {
    "prompt": "Que signifie le proverbe <em>« On ne fait pas d’omelette sans casser des œufs »</em> ?",
    "options": [
      "Il ne faut jamais manger d’œufs.",
      "Un résultat important exige des sacrifices ou des inconvénients.",
      "Les omelettes sont difficiles à réussir.",
      "Il faut éviter de gaspiller les ressources.",
      "Casser des œufs est un jeu."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : tout résultat a un prix. · <strong>A</strong> extrême et sens littéral. · <strong>C</strong> sens littéral. · <strong>D</strong> contresens : le proverbe accepte la perte. · <strong>E</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« La nuit porte conseil »</em> ?",
    "options": [
      "Il faut décider sans réfléchir.",
      "Il vaut mieux travailler la nuit.",
      "Les conseillers sont plus utiles la nuit.",
      "Il est sage de prendre du recul avant de prendre une décision importante.",
      "Le sommeil est inutile."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : laisser passer du temps éclaire la décision. · <strong>A</strong> contresens. · <strong>B</strong> sens littéral détourné. · <strong>C</strong> sens littéral. · <strong>E</strong> contresens."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Pas de nouvelles, bonnes nouvelles »</em> ?",
    "options": [
      "Les bonnes nouvelles ne voyagent jamais.",
      "Il ne faut jamais donner de nouvelles.",
      "Les mauvaises nouvelles sont toujours démenties.",
      "Le silence prouve que tout va mal.",
      "L’absence d’information laisse penser que rien de grave n’est arrivé."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : on déduit du silence que tout va bien. · <strong>A</strong> extrême (« jamais ») et hors sujet. · <strong>B</strong> extrême. · <strong>C</strong> extrême (« toujours ») et hors sujet. · <strong>D</strong> contresens."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Rira bien qui rira le dernier »</em> ?",
    "options": [
      "Il faut toujours rire en dernier.",
      "Les rieurs sont de mauvaise humeur.",
      "Il ne faut pas triompher trop tôt : l’issue décide du vainqueur.",
      "Il vaut mieux ne jamais rire.",
      "Seul le premier à rire gagne."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : seul le dénouement compte. · <strong>A</strong> extrême (« toujours ») et sens littéral. · <strong>B</strong> hors sujet. · <strong>D</strong> extrême (« jamais »). · <strong>E</strong> contresens et extrême."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Chacun voit midi à sa porte »</em> ?",
    "options": [
      "Il faut toujours ouvrir sa porte à midi.",
      "Chacun juge les choses selon son point de vue ou son intérêt.",
      "Les horloges ne sont pas fiables.",
      "Midi est l’heure du déjeuner pour tous.",
      "Chacun finit par avoir raison."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : sens figuré (point de vue propre à chacun). · <strong>A</strong> extrême et sens littéral. · <strong>C</strong> sens littéral détourné. · <strong>D</strong> sens littéral. · <strong>E</strong> extrême et contresens : chacun voit à sa façon, pas forcément avec raison."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Qui se ressemble s’assemble »</em> ?",
    "options": [
      "Les personnes qui ont des goûts ou des caractères proches se rapprochent.",
      "Les jumeaux ne se quittent jamais.",
      "Il faut se méfier des gens qui nous ressemblent.",
      "Les contraires s’attirent.",
      "Seuls les groupes homogènes durent."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : affinités entre semblables. · <strong>B</strong> extrême (« jamais ») et sens littéral. · <strong>C</strong> contresens. · <strong>D</strong> contresens : c’est un autre adage. · <strong>E</strong> extrême (« seuls ») et hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Un homme averti en vaut deux »</em> ?",
    "options": [
      "Il faut toujours être deux pour agir.",
      "Les hommes avertis sont plus nombreux que les autres.",
      "Il suffit d’être prévenu pour ne jamais se tromper.",
      "Être prévenu d’un danger permet de mieux s’en protéger.",
      "Une personne en vaut deux quand elle est âgée."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : la prévention équivaut à une force supplémentaire. · <strong>A</strong> extrême et sens littéral. · <strong>B</strong> hors sujet. · <strong>C</strong> extrême (« jamais »). · <strong>E</strong> hors sujet."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Quand le chat n’est pas là, les souris dansent »</em> ?",
    "options": [
      "Les chats détestent les souris.",
      "Les souris aiment la musique.",
      "Il faut toujours surveiller ses souris.",
      "L’absence du chat est un danger pour les souris.",
      "Sans surveillance, on se relâche et on profite de la situation."
    ],
    "answerIndex": 4,
    "explanation": "<strong>E</strong> : sans autorité, les subordonnés se laissent aller. · <strong>A</strong> sens littéral. · <strong>B</strong> sens littéral. · <strong>C</strong> extrême (« toujours ») et sens littéral. · <strong>D</strong> contresens : ici l’absence est un avantage pour les souris."
  },
  {
    "prompt": "Que signifie le proverbe <em>« Il ne faut pas mettre tous ses œufs dans le même panier »</em> ?",
    "options": [
      "Il faut éviter d’utiliser des paniers.",
      "Il faut répartir les risques plutôt que de tout miser sur une seule chose.",
      "Les œufs sont fragiles.",
      "Il faut toujours faire plusieurs choses à la fois.",
      "Les paniers pleins sont difficiles à porter."
    ],
    "answerIndex": 1,
    "explanation": "<strong>B</strong> : diversifier pour limiter les pertes. · <strong>A</strong> sens littéral. · <strong>C</strong> sens littéral. · <strong>D</strong> extrême (« toujours ») et trop large : le proverbe parle de risque, pas d’activité simultanée. · <strong>E</strong> sens littéral."
  },
  {
    "prompt": "Lequel de ces proverbes se rapproche le plus du sens de <em>« L’habit ne fait pas le moine »</em> ?",
    "options": [
      "Tout ce qui brille n’est pas or.",
      "Petit à petit, l’oiseau fait son nid.",
      "Qui se ressemble s’assemble.",
      "L’occasion fait le larron.",
      "Pierre qui roule n’amasse pas mousse."
    ],
    "answerIndex": 0,
    "explanation": "<strong>A</strong> : les deux disent que l’apparence ne reflète pas la réalité. · <strong>B</strong> idée de patience. · <strong>C</strong> idée d’affinités. · <strong>D</strong> idée d’opportunité et de tentation. · <strong>E</strong> idée d’instabilité."
  },
  {
    "prompt": "Lequel de ces proverbes exprime une idée contraire à <em>« L’union fait la force »</em> ?",
    "options": [
      "Un pour tous, tous pour un.",
      "Les petits ruisseaux font les grandes rivières.",
      "Plus on est de fous, plus on rit.",
      "Chacun pour soi et Dieu pour tous.",
      "Qui se ressemble s’assemble."
    ],
    "answerIndex": 3,
    "explanation": "<strong>D</strong> : renvoie à l’individualisme, opposé à la solidarité. · <strong>A</strong> même sens que l’union, donc soutient. · <strong>B</strong> idée d’accumulation, sans lien d’opposition. · <strong>C</strong> idée de convivialité, donc plutôt proche. · <strong>E</strong> idée d’affinités, sans lien d’opposition."
  },
  {
    "prompt": "Lequel de ces proverbes exprime une idée contraire à <em>« Après la pluie, le beau temps »</em> ?",
    "options": [
      "Tout vient à point à qui sait attendre.",
      "Il n’est point de nuit sans aurore.",
      "Un malheur n’arrive jamais seul.",
      "Après la tempête vient le calme.",
      "Qui ne risque rien n’a rien."
    ],
    "answerIndex": 2,
    "explanation": "<strong>C</strong> : les malheurs s’enchaînent, c’est l’inverse d’un mieux qui succède à la peine. · <strong>A</strong> idée de patience récompensée, donc plutôt proche. · <strong>B</strong> même sens que « Après la pluie, le beau temps ». · <strong>D</strong> même sens. · <strong>E</strong> idée de risque, sans lien."
  }
];
