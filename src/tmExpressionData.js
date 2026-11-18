/**
 * TAGE MAGE® — Sous-test Expression : contenu de révision
 * Fiches, vocabulaire (flashcards + QCM), règles, expressions/proverbes/locutions, genres.
 * Fichier de données pur (ES module, aucune dépendance).
 */

// ---------------------------------------------------------------------------
// Utilitaires internes (construction du HTML des fiches, placement des réponses)
// ---------------------------------------------------------------------------

function exprCard(title, lines) {
  var out = '<div class="math-card-visual"><div class="math-card-title">' + title + '</div><div class="math-desc-list">';
  for (var i = 0; i < lines.length; i++) {
    out += '<p>• ' + lines[i] + '</p>';
  }
  return out + '</div></div>';
}

function exprWrap(cards) {
  return '<div style="display:flex; flex-direction:column; gap:16px;">' + cards.join('') + '</div>';
}

// Positions de la bonne réponse (variées) pour les QCM écrits « bonne réponse d’abord ».
var EXPR_POS = [2, 4, 0, 3, 1, 3, 0, 4, 1, 2, 4, 1, 0, 3, 2, 1, 4, 0, 2, 3, 0, 1, 3, 4, 2];

function exprBuildQcm(rows, offset) {
  return rows.map(function (row, i) {
    if (typeof row[1] === 'string') {
      var pos = EXPR_POS[(i + offset) % EXPR_POS.length];
      var options = row[2].slice();
      options.splice(pos, 0, row[1]);
      return { prompt: row[0], options: options, answerIndex: pos, explanation: row[3] };
    }
    // Ligne à options fixes : on garde l’ordre si les options sont des nombres ; sinon on déplace la bonne réponse.
    var fixed = row[1].every(function (o) { return /^[0-9]+$/.test(o); });
    if (fixed) {
      return { prompt: row[0], options: row[1].slice(), answerIndex: row[2], explanation: row[3], fixedOrder: true };
    }
    var target = EXPR_POS[(i + offset) % EXPR_POS.length];
    var opts = row[1].slice();
    var good = opts.splice(row[2], 1)[0];
    opts.splice(target, 0, good);
    return { prompt: row[0], options: opts, answerIndex: target, explanation: row[3] };
  });
}

// ---------------------------------------------------------------------------
// 1. FICHES
// ---------------------------------------------------------------------------

var FICHE_REGLES = exprWrap([
  exprCard('1. Accord du participe passé', [
    '<strong>Sans auxiliaire</strong> : il s’accorde comme un adjectif avec le nom. <em>Ex : les pièces jointes ; ci-joint la lettre (invariable avant le nom).</em>',
    '<strong>Avec être</strong> : il s’accorde avec le sujet. <em>Ex : elles sont parties.</em>',
    '<strong>Avec avoir</strong> : il s’accorde avec le COD <strong>seulement s’il est placé avant le verbe</strong>. <em>Ex : les lettres que j’ai écrites ; j’ai écrit des lettres.</em>',
    '<strong>Pronominaux</strong> : accord avec le COD s’il est placé avant. <em>Ex : elles se sont lavées ; elles se sont lavé les mains (COD après).</em>',
    '<strong>Toujours invariables</strong> (le « se » est un COI) : se succéder, se parler, se plaire, se nuire, se sourire, se rire de, se téléphoner. <em>Ex : elles se sont succédé ; ils se sont parlé ; elles se sont plu.</em>',
    '<strong>Suivi d’un infinitif</strong> : accord seulement si le COD fait l’action de l’infinitif. <em>Ex : les chanteuses que j’ai entendues chanter (elles chantent) ; la chanson que j’ai entendu chanter (la chanson ne chante pas).</em>',
    '<strong>Fait + infinitif</strong> : « fait » est toujours invariable. <em>Ex : elle les a fait venir.</em>'
  ]),
  exprCard('2. Accord du verbe avec le sujet', [
    '<strong>Quantité ou collectif suivi d’un pluriel</strong> : accord au pluriel avec « la plupart, beaucoup de, un grand nombre de, bon nombre de ». <em>Ex : la plupart des candidats ont réussi.</em>',
    '<strong>Plus d’un</strong> : singulier. <em>Ex : plus d’un candidat a échoué.</em> <strong>Moins de deux</strong> : pluriel. <em>Ex : moins de deux jours se sont écoulés.</em>',
    '<strong>Sujets de personnes différentes</strong> : la 1re personne l’emporte sur les autres (nous), la 2e sur la 3e (vous). <em>Ex : toi et moi, nous partons ; ton frère et toi, vous partez.</em>',
    '<strong>Pronom relatif « qui »</strong> : le verbe s’accorde avec l’antécédent. <em>Ex : c’est moi qui ai raison ; c’est toi qui es en retard ; nous sommes ceux qui avons voté.</em>',
    '<strong>Avec, ainsi que, comme, de même que</strong> ne coordonnent pas : le verbe reste au singulier si le sujet l’est. <em>Ex : le directeur, ainsi que ses adjoints, a répondu.</em>',
    '<strong>« Ou » exclusif</strong> : singulier. <em>Ex : Paul ou Marie sera nommé (un seul des deux).</em>'
  ]),
  exprCard('3. Quel que / quelque / quelques / quoique', [
    '<strong>Quel que + verbe être/subjonctif</strong> (deux mots) : « quel » s’accorde avec le sujet. <em>Ex : quel que soit le prix ; quelles que soient les raisons.</em>',
    '<strong>Quelque + nombre</strong> (= environ) : invariable. <em>Ex : quelque deux cents personnes.</em>',
    '<strong>Quelque + adjectif + que</strong> (= si… que) : invariable. <em>Ex : quelque intelligents qu’ils soient.</em>',
    '<strong>Quelque(s) + nom + que</strong> : « quelque » s’accorde. <em>Ex : quelques efforts que vous fassiez.</em>',
    '<strong>Quoique</strong> (= bien que) s’écrit en un mot et appelle le subjonctif ; <strong>quoi que</strong> (= quelle que soit la chose que) s’écrit en deux mots. <em>Ex : quoi que tu fasses ; il est gentil, quoique timide.</em>',
    '<strong>Quand / quant à / qu’en</strong> : « quant à » = en ce qui concerne. <em>Ex : quant à lui, il se tait.</em>'
  ]),
  exprCard('4. Tout, demi, nu, feu, excepté…', [
    '<strong>Tout adverbe</strong> (= tout à fait) : invariable, sauf devant un adjectif féminin commençant par une consonne ou un h aspiré. <em>Ex : elle est tout étonnée ; elle est toute surprise ; elle est toute honteuse.</em>',
    '<strong>Demi</strong> : invariable avant le nom (avec trait d’union), s’accorde en genre seulement après. <em>Ex : une demi-heure ; une heure et demie ; midi et demi.</em>',
    '<strong>Nu, feu</strong> : invariables avant le nom. <em>Ex : nu-pieds ; feu la reine</em> mais <em>pieds nus ; la feue reine</em>.',
    '<strong>Excepté, passé, y compris, ci-joint, étant donné</strong> : invariables avant le nom, accord après. <em>Ex : excepté ma sœur ; ma sœur exceptée.</em>',
    '<strong>Leur</strong> pronom (= à eux) est invariable ; <strong>leur / leurs</strong> déterminant s’accorde avec le nom possédé. <em>Ex : je leur parle ; ils ont perdu leurs clés.</em>'
  ]),
  exprCard('5. Les nombres', [
    '<strong>Vingt et cent</strong> prennent un « s » quand ils sont multipliés <strong>et</strong> qu’aucun autre nombre ne les suit. <em>Ex : quatre-vingts ; deux cents ; mais quatre-vingt-trois ; deux cent trois.</em>',
    '<strong>Mille</strong> est toujours invariable. <em>Ex : quatre-vingt mille ; deux cent mille euros.</em>',
    '<strong>Million, milliard</strong> sont des noms : « vingt » et « cent » s’accordent devant eux. <em>Ex : quatre-vingts millions ; trois cents millions d’euros.</em>',
    '<strong>Phrase type</strong> : <em>neuf cents millions trois cent quatre-vingt mille sept cents euros.</em>',
    '<strong>Numérotation</strong> (ordinal) : invariables. <em>Ex : page quatre-vingt ; l’an deux mille.</em>'
  ]),
  exprCard('6. Les couleurs', [
    '<strong>Adjectif de couleur simple</strong> : s’accorde. <em>Ex : des robes vertes, des yeux bleus, des murs gris.</em>',
    '<strong>Nom employé comme couleur</strong> : invariable. <em>Ex : des chaussettes marron, des rubans orange, des yeux noisette, des cheveux paille, des gants crème, des pulls kaki.</em>',
    '<strong>Exceptions qui s’accordent</strong> (anciens noms devenus adjectifs) : <strong>rose, mauve, pourpre, écarlate, fauve, incarnat, vermeil</strong>. <em>Ex : des joues roses, des rideaux mauves, des lèvres écarlates, des pelages fauves.</em>',
    '<strong>Couleur composée</strong> (deux mots ou adjectif de nuance) : invariable. <em>Ex : des robes bleu clair, des yeux vert foncé, des murs rose pâle, des cheveux brun-roux.</em>'
  ]),
  exprCard('7. Pluriels piège', [
    '<strong>-al → -aux</strong>, sauf <strong>bal, carnaval, chacal, festival, récital, régal, narval, nopal, pal, serval</strong> qui prennent un « s ». <em>Ex : des chevaux, mais des bals, des festivals.</em>',
    '<strong>-ou → -ous</strong>, sauf <strong>bijou, caillou, chou, genou, hibou, joujou, pou</strong> qui prennent un « x ». <em>Ex : des trous, mais des bijoux, des genoux.</em>',
    '<strong>-eau, -au, -eu → -x</strong>, sauf <strong>landau, sarrau, bleu, pneu, émeu</strong> qui prennent un « s ». <em>Ex : des bateaux, mais des pneus.</em>',
    '<strong>-ail → -s</strong> en général, mais <strong>bail, corail, émail, soupirail, travail, vantail, vitrail → -aux</strong>. <em>Ex : des détails, mais des coraux.</em>',
    '<strong>Pluriels irréguliers</strong> : un œil → des yeux ; le ciel → les cieux (au sens religieux ou poétique) ; un aïeul → des aïeuls (grands-parents) ou des aïeux (ancêtres).'
  ]),
  exprCard('8. Participe présent ou adjectif verbal ? Adverbes en -ment', [
    '<strong>Participe présent</strong> : invariable, exprime une action (souvent précédé de « en »). <em>Ex : en fatiguant son cheval ; convainquant ses amis ; en communiquant par mail.</em>',
    '<strong>Adjectif verbal</strong> : s’accorde, exprime une qualité (on peut le mettre au féminin). <em>Ex : une tâche fatigante ; une preuve convaincante ; des vases communicants.</em>',
    '<strong>Orthographe</strong> : participe en <strong>-quant, -guant</strong> ; adjectif en <strong>-cant, -gant</strong>. <em>Ex : provoquant (participe) / provocant ; naviguant (participe) / navigant ; extravaguant / extravagant.</em>',
    '<strong>Adverbes en -ment</strong> : adjectif en -ant → <strong>-amment</strong> ; adjectif en -ent → <strong>-emment</strong>. <em>Ex : constant → constamment ; prudent → prudemment ; évident → évidemment.</em>',
    '<strong>Exceptions</strong> : lentement, présentement, véhémentement (un seul « m » après « en ») ; notamment, sciemment, nuitamment.'
  ]),
  exprCard('9. « Tel que », « tel quel » et autres', [
    '<strong>Tel que</strong> introduit une comparaison ou un exemple : « tel » s’accorde avec le nom auquel il se rapporte. <em>Ex : des fruits tels que la pomme et la poire ; une ville telle que Lyon.</em>',
    '<strong>Tel quel</strong> (= sans modification) : les deux mots s’accordent. <em>Ex : les marchandises sont livrées telles quelles.</em>',
    '<strong>Tel</strong> en tête de phrase : accord avec le sujet. <em>Ex : tels sont ses défauts ; tel père, tel fils.</em>',
    '<strong>Plutôt / plus tôt</strong> : plutôt = de préférence ; plus tôt = avant (contraire de plus tard). <em>Ex : viens plus tôt demain ; plutôt thé que café.</em>'
  ])
]);

var FICHE_ORTHO = exprWrap([
  exprCard('1. Homophones et paronymes à ne pas confondre (1)', [
    '<strong>Différend</strong> (nom : désaccord, litige) / <strong>différent</strong> (adjectif : distinct). <em>Ex : un différend commercial ; deux avis différents.</em> Participe présent : différant.',
    '<strong>Davantage</strong> (= plus) / <strong>d’avantage</strong> (= de profit). <em>Ex : il travaille davantage ; il n’en a tiré aucun d’avantage.</em> Astuce : si on peut remplacer par « plus », c’est « davantage ».',
    '<strong>Censé</strong> (= supposé) / <strong>sensé</strong> (= qui a du bon sens). <em>Ex : tu es censé travailler ; un homme sensé.</em>',
    '<strong>Prolixe</strong> (qui parle ou écrit trop longuement) / <strong>prolifique</strong> (qui produit beaucoup ; fécond). <em>Ex : un orateur prolixe ; un auteur prolifique.</em>',
    '<strong>Conjecture</strong> (supposition, hypothèse) / <strong>conjoncture</strong> (situation économique ou ensemble de circonstances). <em>Ex : se perdre en conjectures ; une conjoncture favorable.</em>',
    '<strong>Tache</strong> (souillure) / <strong>tâche</strong> (travail à accomplir). <em>Ex : une tache d’encre ; une tâche ingrate.</em>',
    '<strong>Près</strong> (proche) / <strong>prêt</strong> (disposé à, préparé). <em>Ex : près de la porte ; prêt à partir.</em>',
    '<strong>Bien-fondé</strong> (nom, avec trait d’union : légitimité) / <strong>bien fondé</strong> (adjectif : une critique bien fondée). <em>Ex : contester le bien-fondé d’une décision.</em>'
  ]),
  exprCard('2. Homophones et paronymes à ne pas confondre (2)', [
    '<strong>Éminent</strong> (remarquable, distingué) / <strong>imminent</strong> (qui va se produire très bientôt) / <strong>immanent</strong> (qui est contenu dans l’être même).',
    '<strong>Effraction</strong> (bris de clôture, de serrure) / <strong>infraction</strong> (violation de la loi).',
    '<strong>Collision</strong> (choc) / <strong>collusion</strong> (entente secrète au détriment d’un tiers).',
    '<strong>Émigrer</strong> (quitter son pays) / <strong>immigrer</strong> (arriver dans un pays pour s’y installer).',
    '<strong>Perpétrer</strong> (commettre un crime) / <strong>perpétuer</strong> (faire durer, rendre durable).',
    '<strong>Percepteur</strong> (collecteur d’impôts) / <strong>précepteur</strong> (éducateur d’un enfant à domicile).',
    '<strong>Allusion</strong> (évocation indirecte) / <strong>illusion</strong> (apparence trompeuse).',
    '<strong>Éruption</strong> (volcan, boutons) / <strong>irruption</strong> (entrée soudaine et violente).',
    '<strong>Exaucer</strong> (satisfaire un vœu) / <strong>exhausser</strong> (rendre plus haut). <em>Ex : exaucer une prière ; exhausser un mur.</em>',
    '<strong>Infecter</strong> (contaminer) / <strong>infester</strong> (envahir en grand nombre, ravager). <em>Ex : une plaie infectée ; un jardin infesté de rats.</em>',
    '<strong>Acception</strong> (sens d’un mot) / <strong>acceptation</strong> (fait d’accepter).',
    '<strong>Repaire</strong> (tanière, refuge) / <strong>repère</strong> (marque pour s’orienter). <em>Ex : un repaire de brigands ; perdre ses repères.</em>',
    '<strong>Cession</strong> (transfert d’un bien) / <strong>session</strong> (période de séances). <em>Ex : la cession d’un droit ; une session d’examens.</em>'
  ]),
  exprCard('3. Mots dont l’orthographe piège', [
    '<strong>Pas de « h » :</strong> exorbitant, exubérant, exaspérer, exiguïté, exaucer, apercevoir. <strong>Avec « h » :</strong> exhaustif, exhiber, exhumer, exhorter, exhaler, exhausser.',
    '<strong>Hypoténuse</strong> (côté opposé à l’angle droit) : sans « h » après le « t » ni circonflexe. <em>Ex : le théorème de Pythagore relie les côtés à l’hypoténuse.</em>',
    '<strong>Lâcher, lâchait, bâtir, mât, pâte, théâtre</strong> : l’accent circonflexe sur le « a » doit être retenu. <strong>Maintien</strong> (nom) s’écrit sans circonflexe ni « t ».',
    '<strong>Doubles consonnes :</strong> apparemment, développer, dilemme, ennemi, essentiellement, aggraver, appartement, apparaître, occasion, accueillir, annuler, commémorer.',
    '<strong>Consonne simple :</strong> apercevoir, chuter, mourir, persévérer, parallèle, ponctuer, prolonger, dévaluer, frivole, sonore.',
    '<strong>Mots à lettres muettes :</strong> rythme, rhume, asthme, nénuphar, rhinocéros, enthousiasme, philosophe, hypothèse, chaos, pharmacie, quincaillerie.',
    '<strong>Trait d’union ou non :</strong> bien-fondé, plain-pied (de plain-pied), peut-être (adverbe) ≠ peut être (verbe), c’est-à-dire, au-delà, par-dessus, vis-à-vis. <strong>Sans trait d’union :</strong> tout à coup, tout à fait, quelque chose.',
    '<strong>Adverbes :</strong> apparemment, évidemment, constamment, couramment, prudemment, savamment, mais lentement, précipitamment, notamment, sciemment.'
  ]),
  exprCard('4. La double consonne : astuces mnémotechniques', [
    '<strong>Apercevoir</strong> : je n’aperçois qu’un « p ». <strong>Chuter</strong> : on ne chute qu’une fois, un seul « t ». <strong>Mourir</strong> : un seul « r » (on ne meurt qu’une fois). <strong>Nourrir</strong> : deux « r » (on se nourrit plusieurs fois par jour).',
    '<strong>Sensé / censé</strong> : si on peut remplacer par « supposé », c’est « censé » (avec un c).',
    '<strong>-quant ou -cant</strong> : si le mot peut se mettre au féminin avec « -cante, -gante », c’est un adjectif ; sinon, c’est le participe présent en « -quant, -guant ».',
    '<strong>Dû, mû, sûr, mûr, crû</strong> : le circonflexe distingue du, mu (rare), sur, mur, cru (« cru » = participe de croire ; « crû » = participe de croître).'
  ]),
  exprCard('5. Méthode pour « compter les fautes »', [
    '<strong>Lire phrase par phrase</strong> en soulignant les mots à vérifier : accord (sujet-verbe, participe passé, adjectif), homophones, doubles consonnes, accents, traits d’union, pléonasmes, mots mal employés.',
    '<strong>Ne pas compter</strong> une même faute deux fois, mais <strong>compter chaque mot fautif</strong> séparément (un mot = une faute).',
    '<strong>Les fautes d’usage comptent</strong> : un mot employé à contresens, une expression déformée, un pléonasme, un anglicisme fautif. <em>Ex : « la langue de Goethe » pour parler espagnol.</em>',
    '<strong>Contrôler le total</strong> avec la correction mentale du texte complet, puis choisir l’option exacte (une faute de plus ou de moins est un piège classique du concours).'
  ])
]);

var FICHE_CONJUG = exprWrap([
  exprCard('1. L’impératif : formes piège', [
    '<strong>Pas de « s » à la 2e personne du singulier</strong> pour les verbes en -er, pour <strong>aller</strong> et pour ouvrir, offrir, cueillir, souffrir, couvrir, découvrir, accueillir. <em>Ex : parle ; va ; ouvre ; offre ; cueille ; accueille.</em>',
    '<strong>Le « s » réapparaît devant « en » et « y »</strong> (liaison) : <em>vas-y ; parles-en ; cueilles-en ; offres-en ; penses-y.</em>',
    '<strong>Avoir, être, savoir, vouloir</strong> prennent les formes du subjonctif : <em>aie, ayons, ayez ; sois, soyons, soyez ; sache, sachons, sachez ; veuillez.</em>',
    '<strong>Pronoms</strong> : trait d’union après le verbe à l’affirmatif, ordre COD puis COI. <em>Ex : donne-le-moi ; lève-toi ; va-t’en ; donne-m’en.</em> À la forme négative : <em>ne me le donne pas.</em>',
    '<strong>Autres formes courantes</strong> : dis, fais, viens, prends, mets, tiens ; vous dites, vous faites.'
  ]),
  exprCard('2. Subjonctif : les déclencheurs', [
    '<strong>Conjonctions + subjonctif</strong> : bien que, quoique, avant que, jusqu’à ce que, en attendant que, pour que, afin que, à moins que, pourvu que, sans que, à condition que, de peur que, de crainte que, non que, soit que.',
    '<strong>Verbes + que + subjonctif</strong> : vouloir, falloir (il faut que), souhaiter, exiger, craindre, regretter, douter, s’étonner, il vaut mieux, il est possible, il se peut, il semble que.',
    '<strong>Quel que / quelque… que / qui que / quoi que + subjonctif.</strong> <em>Ex : quelles que soient les conséquences ; quoi que vous fassiez.</em>',
    '<strong>Négation et doute</strong> : « Je pense qu’il viendra » (indicatif) mais « Je ne pense pas qu’il vienne » (subjonctif). De même, « Il est évident / probable qu’il viendra » mais « Il est peu probable qu’il vienne ».',
    '<strong>Conjugaison</strong> : que nous allions, que nous fuyions, que nous croyions → « que vous croyiez » (le y et le i se suivent à nous/vous), que nous étudiions, que vous riiez.'
  ]),
  exprCard('3. Indicatif : après que et les autres', [
    '<strong>Après que</strong> + <strong>indicatif</strong> (action réelle, déjà accomplie). <em>Ex : après qu’il est parti ; après qu’il fut parti ; après qu’ils eurent mangé.</em> Piège classique : le subjonctif « après qu’il soit parti » est fautif.',
    '<strong>Autres conjonctions + indicatif</strong> : parce que, puisque, comme, tandis que, alors que, pendant que, dès que, aussitôt que, depuis que, tant que, lorsque, quand, si bien que.',
    '<strong>Verbes d’opinion affirmatifs + indicatif</strong> : penser, croire, dire, savoir, espérer, affirmer, trouver. <em>Ex : j’espère qu’il viendra.</em>',
    '<strong>Malgré que</strong> est considéré comme incorrect au concours : on écrit « bien que » ou « quoique » + subjonctif (seule la tournure figée « malgré que j’en aie » est admise).',
    '<strong>De sorte que / de façon que / en sorte que</strong> : indicatif si c’est une conséquence réelle, subjonctif si c’est un but.'
  ]),
  exprCard('4. Passé simple ou imparfait du subjonctif : fit / fît', [
    '<strong>3e personne du singulier du passé simple</strong> : <strong>sans accent</strong>. <em>Ex : il fut, il eut, il fit, il prit, il vint, il tint.</em>',
    '<strong>3e personne du singulier de l’imparfait du subjonctif</strong> : <strong>avec accent circonflexe</strong>. <em>Ex : qu’il fût, qu’il eût, qu’il fît, qu’il prît, qu’il vînt, qu’il tînt.</em>',
    '<strong>Test</strong> : passer à la 3e personne du pluriel. « Ils firent » = passé simple ; « qu’ils fissent » = imparfait du subjonctif. Ou remplacer par un présent du subjonctif (qu’il fasse) : si ça marche, c’est « fît ».',
    '<strong>Concordance stricte (écrit soutenu)</strong> : principal au passé ou au conditionnel → subjonctif imparfait ou plus-que-parfait. <em>Ex : il fallait qu’il vînt ; elle aurait voulu qu’il fût plus prudent.</em>',
    '<strong>Principal au présent ou au futur</strong> → subjonctif présent ou passé. <em>Ex : je veux qu’il vienne ; je doute qu’il ait fini.</em>'
  ]),
  exprCard('5. Concordance des temps à l’indicatif', [
    '<strong>Principale au passé</strong> (passé composé, imparfait, passé simple, plus-que-parfait) : simultané → <strong>imparfait</strong> ; antérieur → <strong>plus-que-parfait</strong> ; postérieur → <strong>conditionnel présent</strong>. <em>Ex : il a dit qu’il viendrait ; il savait qu’elle avait fini.</em>',
    '<strong>Principale au présent ou au futur</strong> : subordonnée au présent, au passé composé ou au futur. <em>Ex : il dit qu’il viendra ; il dit qu’il est venu.</em>',
    '<strong>Après « si » (hypothèse)</strong> : jamais de conditionnel. <em>Ex : si j’avais su, je ne serais pas venu ; si tu viens, je serai là.</em>',
    '<strong>Au cas où, dans l’hypothèse où</strong> : conditionnel. <em>Ex : au cas où il viendrait, préviens-moi.</em>',
    '<strong>Futur ou conditionnel</strong> : « je serai » (futur) ≠ « je serais » (conditionnel) ; « je saurai » ≠ « je saurais ». <em>Ex : quand tu arriveras, je serai déjà parti ; si j’avais le temps, je serais parti.</em>'
  ]),
  exprCard('6. Verbes à piéger', [
    '<strong>Moudre</strong> : il moud, nous moulons, ils moulent. <strong>Coudre</strong> : il coud, nous cousons. <strong>Résoudre</strong> : je résous, il résout, nous résolvons.',
    '<strong>Fuir</strong> : ils fuient, nous fuyons, que je fuie, que nous fuyions. <strong>Haïr</strong> : je hais, il hait, nous haïssons. <strong>Vaincre</strong> : il vainc (sans t), nous vainquons.',
    '<strong>Dire, faire</strong> : vous dites, vous faites ; mais <strong>contredire, médire, prédire, interdire</strong> : vous contredisez, vous médisez, vous prédisez, vous interdisez.',
    '<strong>Futur irrégulier</strong> : courir → je courrai ; mourir → je mourrai ; voir → je verrai ; cueillir → je cueillerai ; acquérir → j’acquerrai ; envoyer → j’enverrai ; pouvoir → je pourrai.',
    '<strong>Verbes en -ger et -cer</strong> : nous mangeons, nous commençons ; mais à l’imparfait : nous mangions, nous commencions.',
    '<strong>Plaire, nuire, déplaire</strong> : participe passé invariable (plu, nui) ; <strong>croire</strong> → cru ; <strong>croître</strong> → crû.'
  ])
]);

var FICHE_STYLE = exprWrap([
  exprCard('1. Texte à trous : méthode', [
    '<strong>Lire tout le texte</strong> avant de regarder les options : repérer le sens général, le ton et le sujet.',
    '<strong>Identifier le rapport logique</strong> attendu : cause (car, puisque), conséquence (donc, ainsi, par conséquent), opposition (mais, cependant, toutefois), concession (bien que, certes… mais), addition (de plus, en outre), illustration (par exemple).',
    '<strong>Tester la grammaire</strong> : accord, mode (subjonctif / indicatif), préposition qui suit le verbe, genre du nom.',
    '<strong>Éliminer les mots trop radicaux</strong> (toujours, jamais, tous, aucun, entièrement) quand le texte est nuancé, et les mots hors registre (familier ou technique).',
    '<strong>Affiner le sens</strong> : le bon mot est le plus précis (« trahir » ≠ « révéler » ≠ « laisser entendre »). Relire la phrase avec la réponse choisie avant de valider.'
  ]),
  exprCard('2. Reformulation : choisir la phrase la plus élégante', [
    '<strong>Éviter l’accumulation de « que / qui / dont »</strong> : remplacer une subordonnée relative par un participe ou un groupe nominal. <em>Lourd : « Le projet que le directeur qui venait d’arriver avait présenté a été rejeté. » Élégant : « Le projet présenté par le nouveau directeur a été rejeté. »</em>',
    '<strong>Éviter les répétitions</strong> (même mot, même construction) en variant par un synonyme, un pronom ou une reprise.',
    '<strong>Préférer le verbe précis</strong> aux verbes ternes (faire, mettre, avoir, être) et aux tournures lourdes (« c’est… qui », « il y a… qui »).',
    '<strong>Une seule idée par proposition</strong> ; vérifier que le pronom renvoie sans ambiguïté à son antécédent.',
    '<strong>Garder l’énoncé si besoin</strong> : la proposition (A) reprend souvent la phrase initiale et peut être la meilleure. Ne pas la rejeter par réflexe : elle est correcte quand toutes les autres sont plus lourdes ou fautives.',
    '<strong>Ordre de vérification</strong> : 1) orthographe et grammaire, 2) syntaxe (construction du verbe), 3) style (lourdeur, répétition), 4) sens conservé.'
  ]),
  exprCard('3. Pléonasmes, anglicismes et fautes d’usage', [
    '<strong>Pléonasmes à connaître</strong> : monter en haut, descendre en bas, sortir dehors, entrer dedans, reculer en arrière, prévoir d’avance, s’entraider mutuellement, collaborer ensemble, au jour d’aujourd’hui, puis ensuite, réitérer à nouveau, un hasard imprévu, une panacée universelle.',
    '<strong>Pléonasme volontaire</strong> (figure de style) : « allumer la lumière », « voir de ses propres yeux » : le concours les range parmi les pléonasmes.',
    '<strong>Constructions fautives ou critiquées</strong> : « pallier à un problème » (pallier est transitif direct : pallier un problème), « se rappeler de quelque chose » (se rappeler quelque chose), « malgré que » (bien que), « suite à » (à la suite de), « par contre » (en revanche, dans un registre soutenu).',
    '<strong>Faux amis anglais</strong> : actuellement ≠ actually (en fait), éventuellement ≠ eventually (finalement), assister à (être présent) ≠ to assist (aider), décevoir ≠ to deceive (tromper), librairie ≠ library (bibliothèque), prétendre ≠ to pretend (faire semblant).',
    '<strong>Périphrases</strong> : « la langue de Molière » = le français ; « la langue de Goethe » = l’allemand ; « la langue de Shakespeare » = l’anglais ; « la langue de Cervantes » = l’espagnol ; « l’Hexagone » = la France. Vérifier la cohérence.',
    '<strong>Registre</strong> : un texte soutenu n’accepte ni argot ni tournure familière (bouquin, boulot, fric, bagnole, se casser). Rester dans le registre du texte.'
  ]),
  exprCard('4. Les connecteurs et leur sens exact', [
    '<strong>Opposition</strong> : mais, cependant, pourtant, toutefois, néanmoins, en revanche, par contre (familier). <strong>Concession</strong> : bien que + subjonctif, quoique + subjonctif, même si + indicatif, certes… mais, malgré / en dépit de + nom.',
    '<strong>Cause</strong> : car, parce que, puisque (cause connue), étant donné que, du fait que, d’autant que. <strong>Conséquence</strong> : donc, ainsi, par conséquent, c’est pourquoi, si bien que, de sorte que, aussi (en début de phrase, avec inversion du sujet).',
    '<strong>But</strong> : pour que, afin que, de peur que, de crainte que (+ subjonctif). <strong>Addition</strong> : de plus, en outre, par ailleurs, de surcroît. <strong>Reformulation</strong> : c’est-à-dire, autrement dit, en d’autres termes.',
    '<strong>Or</strong> : conjonction qui introduit un fait nouveau dans un raisonnement (souvent l’opposé de ce qui précède). <em>Ex : tout le monde le croyait innocent ; or, il était coupable.</em>',
    '<strong>Certes</strong> annonce une concession, qui sera suivie de « mais » ou de « cependant ».'
  ]),
  exprCard('5. Constructions verbales à connaître', [
    '<strong>Transitifs directs</strong> (pas de préposition) : pallier un manque, se rappeler un souvenir, éviter un obstacle, atteindre un but, déplorer une perte, entamer une discussion.',
    '<strong>À</strong> : parvenir à, s’attendre à, nuire à, obéir à, remédier à, participer à, contribuer à, s’habituer à, s’opposer à, aspirer à. <em>Ex : s’attendre à ce que + subjonctif.</em>',
    '<strong>De</strong> : se souvenir de, se méfier de, s’apercevoir de, se plaindre de, profiter de, hériter de, dépendre de, abuser de, user de, médire de.',
    '<strong>Ce dont / ce à quoi / ce que</strong> : « dont » remplace « de + antécédent ». <em>Ex : le livre dont je parle (parler de) ; le film auquel je pense (penser à).</em>',
    '<strong>Verbes impersonnels</strong> : « il s’agit de » (jamais « il s’agit que »), « il faut que ». <em>Ex : il s’agit d’un problème grave.</em>'
  ]),
  exprCard('6. Figures de style : rappels rapides', [
    '<strong>Métonymie</strong> : désigner une chose par un terme voisin (contenant pour contenu, lieu pour institution). <em>Ex : boire un verre ; l’Élysée a annoncé ; lire Molière.</em>',
    '<strong>Synecdoque</strong> : la partie pour le tout (ou l’inverse). <em>Ex : une voile à l’horizon (un bateau) ; les mortels (les hommes) ; un toit pour dormir.</em>',
    '<strong>Litote</strong> : dire moins pour suggérer plus. <em>Ex : « Va, je ne te hais point. »</em> <strong>Hyperbole</strong> : exagération. <em>Ex : je meurs de faim.</em> <strong>Euphémisme</strong> : adoucir une réalité dure. <em>Ex : il nous a quittés (il est mort).</em>',
    '<strong>Antiphrase</strong> : dire le contraire de ce qu’on pense (ironie). <strong>Oxymore</strong> : deux termes contradictoires accolés. <em>Ex : cette obscure clarté.</em> <strong>Aposiopèse</strong> : phrase interrompue (points de suspension).',
    '<strong>Métaphore</strong> : comparaison sans outil. <strong>Comparaison</strong> : avec « comme, tel, pareil à ». <strong>Pléonasme</strong> : redondance de sens. <strong>Zeugme</strong> : un verbe régit deux compléments de nature différente. <em>Ex : il prit son chapeau et congé.</em>'
  ])
]);

export const TM_EXPR_FICHES = [
  {
    id: 'expr_regles',
    title: 'Règles de grammaire et d’accord',
    desc: 'Participe passé, accord du verbe, quel que, nombres, couleurs, pluriels : tout ce qui tombe au concours.',
    subtitle: 'Grand Manuel du TAGE MAGE® — Accords, nombres, couleurs, pluriels',
    html: FICHE_REGLES
  },
  {
    id: 'expr_ortho',
    title: 'Orthographe d’usage, homophones et paronymes',
    desc: 'Différend/différent, davantage/d’avantage, prolixe/prolifique, conjecture/conjoncture, mots piège et méthode pour compter les fautes.',
    subtitle: 'Grand Manuel du TAGE MAGE® — Orthographe, homophones, paronymes',
    html: FICHE_ORTHO
  },
  {
    id: 'expr_conjugaison',
    title: 'Conjugaison piège',
    desc: 'Impératif, subjonctif et indicatif (après que), concordance, fit/fît, verbes irréguliers.',
    subtitle: 'Grand Manuel du TAGE MAGE® — Modes, temps, concordance',
    html: FICHE_CONJUG
  },
  {
    id: 'expr_style',
    title: 'Style et élégance',
    desc: 'Texte à trous, phrase la plus élégante (éviter que/qui), pléonasmes, registre, connecteurs, figures de style.',
    subtitle: 'Grand Manuel du TAGE MAGE® — Cohérence textuelle, reformulation, style',
    html: FICHE_STYLE
  }
];

// ---------------------------------------------------------------------------
// 2. FLASHCARDS DE VOCABULAIRE
// [mot, définition courte, exemple + synonymes, piège (paronyme / nuance)]
// ---------------------------------------------------------------------------

var FLASH_ROWS = [
  ['Prolixe', 'Qui parle ou écrit trop longuement', 'Ex : un discours prolixe. Synonymes : verbeux, bavard, diffus.', 'Ne pas confondre avec prolifique (qui produit beaucoup, fécond).'],
  ['Sinécure', 'Emploi bien rémunéré qui demande peu de travail', 'Ex : sa place au ministère était une sinécure. Synonymes : place de tout repos, planque.', 'Ne se confond pas avec une cure ni avec une synecdoque (figure de style).'],
  ['Différend', 'Désaccord, litige entre deux parties', 'Ex : un différend commercial les oppose. Synonymes : querelle, conflit, contentieux.', 'Différent (avec un « t ») est un adjectif qui signifie distinct, autre.'],
  ['Bien-fondé', 'Caractère légitime, justifié (d’une demande, d’une critique)', 'Ex : contester le bien-fondé d’une accusation. Synonymes : légitimité, justesse.', 'Nom avec trait d’union ; l’adjectif s’écrit sans trait d’union : une critique bien fondée.'],
  ['Lénifiant', 'Qui apaise, adoucit ; par extension, qui endort par sa douceur', 'Ex : un discours lénifiant. Synonymes : apaisant, calmant, adoucissant.', 'Souvent péjoratif : il apaise en masquant la gravité ou en endormant la vigilance.'],
  ['Acerbe', 'Qui est mordant, aigre, critique de manière blessante', 'Ex : une remarque acerbe. Synonymes : caustique, incisif, mordant, âpre.', 'Ne signifie pas « sévère » au sens neutre : il y a une nuance d’aigreur et d’ironie piquante.'],
  ['Sine die', 'Sans fixer de date, pour une durée indéterminée', 'Ex : la réunion est reportée sine die. Locution latine.', 'Ne signifie pas « pour toujours » : seulement « sans date fixée ». Ne pas confondre avec sine qua non.'],
  ['Verbatim', 'Reproduction mot à mot d’un propos', 'Ex : un verbatim de l’entretien. Synonymes : compte rendu intégral, transcription fidèle.', 'Ne signifie pas résumé : c’est exactement l’inverse (rien n’est reformulé).'],
  ['Invective', 'Parole violente et injurieuse', 'Ex : il lança des invectives à la foule. Synonymes : injure, insulte, diatribe.', 'Nom féminin : une invective. Le verbe est invectiver.'],
  ['Septentrional', 'Situé au nord', 'Ex : les régions septentrionales. Synonyme : nordique, du nord.', 'Opposé : méridional (sud). Ne pas confondre avec occidental (ouest) ni oriental (est).'],
  ['Hypoténuse', 'Côté d’un triangle rectangle opposé à l’angle droit', 'Ex : l’hypoténuse est le plus grand côté du triangle rectangle.', 'Orthographe : un seul « h » (hy-), pas de « h » après le « t ».'],
  ['Exorbitant', 'Excessif, qui dépasse les limites raisonnables', 'Ex : un prix exorbitant. Synonymes : démesuré, outrancier, extravagant.', 'Orthographe : pas de « h » (exorbitant, comme exubérant).'],
  ['Concomitant', 'Qui se produit en même temps qu’un autre fait', 'Ex : des phénomènes concomitants. Synonymes : simultané, concordant.', 'Concomitance = simultanéité. Ne pas confondre avec conséquent.'],
  ['Incartade', 'Écart de conduite, folie passagère', 'Ex : il a fait quelques incartades pendant sa jeunesse. Synonymes : écart, extravagance, frasque.', 'Ne signifie pas « attaque » : c’est un écart, une petite folie.'],
  ['Camouflet', 'Affront, humiliation publique', 'Ex : subir un camouflet. Synonymes : affront, vexation, rebuffade.', 'Ne pas confondre avec camouflage ni avec une dissimulation.'],
  ['Iatrogène', 'Provoqué par un traitement médical ou un médecin', 'Ex : une maladie iatrogène (effet secondaire d’un traitement).', 'Ne se rapporte pas à une cause génétique ni infectieuse.'],
  ['Éclectique', 'Qui puise dans des sources variées et ne s’enferme pas dans un système', 'Ex : des goûts éclectiques en musique. Synonymes : varié, diversifié, hétéroclite.', 'Ne signifie pas « ouvert à tous » ni « tolérant » : c’est la diversité des éléments choisis.'],
  ['Aduler', 'Flatter à l’excès, idolâtrer', 'Ex : aduler une star. Synonymes : encenser, idolâtrer, flagorner.', 'Ne pas confondre avec adopter.'],
  ['Obséquieux', 'D’une politesse excessive et servile', 'Ex : un employé obséquieux. Synonymes : servile, rampant, courtisan.', 'Rien à voir avec les obsèques (funérailles).'],
  ['Dithyrambique', 'Extrêmement élogieux, d’un enthousiasme excessif', 'Ex : une critique dithyrambique. Synonymes : élogieux, laudatif, enthousiaste.', 'Positif et excessif ; le contraire serait acerbe ou virulent.'],
  ['Pusillanime', 'Qui manque de courage, craintif', 'Ex : un chef pusillanime. Synonymes : timoré, lâche, peureux.', 'Ne signifie pas « petit » ni « généreux ».'],
  ['Moult', 'Beaucoup (littéraire)', 'Ex : moult détails, moult fois. Synonymes : maints, nombreux, beaucoup de.', 'S’emploie surtout dans un registre littéraire ou plaisant.'],
  ['Péremptoire', 'Qui ne souffre pas la contradiction, décisif', 'Ex : un ton péremptoire. Synonymes : catégorique, tranchant, impératif.', 'Ne pas confondre avec périmé ni avec temporaire.'],
  ['Ubiquité', 'Capacité d’être présent partout à la fois', 'Ex : il semble doué d’ubiquité. Synonyme : omniprésence.', 'Ne se confond pas avec ubuesque (absurde et grotesque).'],
  ['Ostensible', 'Que l’on montre sans se cacher, manifeste', 'Ex : un mépris ostensible. Synonymes : visible, évident, apparent.', 'Ne pas confondre avec ostentatoire (qui est fait pour être vu, qui s’étale par vanité).'],
  ['Ostentatoire', 'Qui est exhibé avec vanité, pour être remarqué', 'Ex : un luxe ostentatoire. Synonymes : tapageur, voyant, affiché.', 'Ostensible = visible ; ostentatoire = affiché par vanité.'],
  ['Sibyllin', 'Obscur, énigmatique', 'Ex : une réponse sibylline. Synonymes : énigmatique, mystérieux, obscur.', 'Ne pas confondre avec prophétique : sibyllin insiste sur l’obscurité.'],
  ['Abscons', 'Difficile à comprendre, obscur', 'Ex : un texte abscons. Synonymes : hermétique, obscur, incompréhensible.', 'Ne pas confondre avec absent ni avec abstrait.'],
  ['Aporie', 'Difficulté logique insurmontable, impasse du raisonnement', 'Ex : le raisonnement aboutit à une aporie. Synonymes : impasse, paradoxe sans issue.', 'Ne pas confondre avec apologie (éloge) ni avec antinomie (contradiction entre deux principes).'],
  ['Antinomie', 'Contradiction entre deux principes ou deux lois', 'Ex : une antinomie entre liberté et sécurité. Synonymes : contradiction, opposition.', 'Ne pas confondre avec antonymie (relation d’opposition entre deux mots).'],
  ['Apologie', 'Discours de défense ou d’éloge', 'Ex : faire l’apologie de la tolérance. Synonymes : éloge, plaidoyer, justification.', 'Ne signifie pas « excuses » (s’excuser, c’est présenter des regrets).'],
  ['Sophisme', 'Raisonnement faux qui a l’apparence de la vérité', 'Ex : démonter un sophisme. Synonymes : faux raisonnement, argument spécieux.', 'Ne pas confondre avec un paradoxe (qui peut être vrai).'],
  ['Truisme', 'Vérité banale, évidente', 'Ex : dire que la vie est courte est un truisme. Synonymes : évidence, banalité.', 'Ne pas confondre avec lapalissade : le truisme est une banalité, la lapalissade une évidence naïve.'],
  ['Lapalissade', 'Évidence naïve ou ridicule', 'Ex : c’est une lapalissade de dire qu’un célibataire n’est pas marié. Synonymes : truisme, évidence.', 'Vient du nom de La Palice ; ne pas écrire « lapallissade ».'],
  ['Dogmatique', 'Qui affirme ses idées comme des vérités incontestables', 'Ex : un esprit dogmatique. Synonymes : doctrinaire, intransigeant, catégorique.', 'Ne pas confondre avec pragmatique (qui tient compte des faits).'],
  ['Exhaustif', 'Qui épuise le sujet, complet', 'Ex : une liste exhaustive. Synonymes : complet, intégral, détaillé.', 'Ne signifie pas « épuisant » : il s’agit d’épuiser un sujet, c’est-à-dire de ne rien omettre.'],
  ['Exacerber', 'Rendre plus vif, plus violent', 'Ex : exacerber les tensions. Synonymes : aviver, attiser, aggraver.', 'Le contraire est apaiser, atténuer.'],
  ['Corroborer', 'Confirmer, appuyer par de nouveaux éléments', 'Ex : des témoignages corroborent sa version. Synonymes : confirmer, renforcer, étayer.', 'Ne pas confondre avec corrompre ni avec collaborer.'],
  ['Infirmer', 'Rendre nul ou démentir une affirmation', 'Ex : une étude qui infirme une hypothèse. Synonymes : démentir, contredire, réfuter.', 'Faux ami : ne se rapporte pas à une infirmité mais à une preuve contraire. Contraire : confirmer.'],
  ['Vilipender', 'Dénigrer avec mépris, critiquer violemment', 'Ex : la presse vilipende le ministre. Synonymes : décrier, dénigrer, honnir.', 'Ne pas confondre avec pendre ni avec suspendre.'],
  ['Fustiger', 'Critiquer avec une extrême sévérité', 'Ex : fustiger l’incompétence. Synonymes : blâmer, flétrir, stigmatiser.', 'Sens figuré : on fustige en paroles ; ne pas le prendre pour « frapper » au sens propre.'],
  ['Stigmatiser', 'Blâmer publiquement, désigner à la réprobation', 'Ex : stigmatiser les exclus. Synonymes : flétrir, dénoncer, montrer du doigt.', 'Ne signifie pas simplement « marquer ». Le sens courant est péjoratif : désigner à la honte.'],
  ['Encenser', 'Louer excessivement, flatter', 'Ex : encenser un artiste. Synonymes : aduler, glorifier, porter aux nues.', 'Ne pas confondre avec censurer (interdire).'],
  ['Louvoyer', 'User de détours, biaiser pour ne pas affronter une difficulté', 'Ex : louvoyer face aux journalistes. Synonymes : tergiverser, biaiser, esquiver.', 'À l’origine, terme de marine : naviguer en zigzag contre le vent.'],
  ['Tergiverser', 'Hésiter, chercher des faux-fuyants', 'Ex : cessez de tergiverser. Synonymes : atermoyer, biaiser, hésiter.', 'Ne pas confondre avec transgresser (violer une règle).'],
  ['Atermoyer', 'Remettre à plus tard par hésitation', 'Ex : atermoyer pour éviter de décider. Synonymes : temporiser, tarder, retarder.', 'Nom : atermoiement(s). Contraire : décider sans délai.'],
  ['Procrastiner', 'Remettre systématiquement au lendemain', 'Ex : il procrastine avant les examens. Synonymes : différer, repousser.', 'Ne signifie pas « se reposer » mais retarder volontairement ce que l’on doit faire.'],
  ['Pallier', 'Atténuer ou combler provisoirement un manque, un inconvénient', 'Ex : pallier une pénurie. Synonymes : atténuer, compenser, remédier à.', 'Transitif direct : pallier un défaut (et non « pallier à un défaut »).'],
  ['Éluder', 'Éviter habilement une difficulté ou une question', 'Ex : éluder une question. Synonymes : esquiver, contourner, escamoter.', 'Ne pas confondre avec élucider (éclaircir, résoudre).'],
  ['Occulter', 'Cacher, dissimuler, rendre invisible', 'Ex : occulter la vérité. Synonymes : masquer, dissimuler, voiler.', 'Ne pas confondre avec oculaire ; occulte = secret, caché.'],
  ['Subodorer', 'Soupçonner, pressentir', 'Ex : il subodorait une manœuvre. Synonymes : pressentir, flairer, deviner.', 'Ne signifie pas « sentir mauvais » ; c’est la prémonition.'],
  ['Subreptice', 'Fait de manière dissimulée, à la dérobée', 'Ex : un geste subreptice. Synonymes : furtif, caché, clandestin.', 'Adverbe : subrepticement. Contraire d’ostensible (qu’on montre).'],
  ['Fallacieux', 'Trompeur, destiné à tromper', 'Ex : un prétexte fallacieux. Synonymes : mensonger, spécieux, captieux.', 'Proche de spécieux, mais fallacieux insiste sur l’intention de tromper.'],
  ['Spécieux', 'Qui n’a que l’apparence de la vérité', 'Ex : un argument spécieux. Synonymes : fallacieux, trompeur, sophistique.', 'Ne pas confondre avec spacieux (vaste).'],
  ['Fortuit', 'Qui arrive par hasard', 'Ex : une rencontre fortuite. Synonymes : accidentel, inattendu, imprévu.', 'Ne pas confondre avec fortuné (riche).'],
  ['Inéluctable', 'Qu’on ne peut éviter', 'Ex : une issue inéluctable. Synonymes : inévitable, fatal, certain.', 'Ne pas confondre avec indélébile ni avec ineffable.'],
  ['Pléthorique', 'En nombre excessif, surabondant', 'Ex : des effectifs pléthoriques. Synonymes : surabondant, excessif.', 'Ne signifie pas simplement « nombreux » : l’excès est sous-entendu.'],
  ['Parcimonieux', 'Qui économise avec excès, très restreint', 'Ex : des dépenses parcimonieuses. Synonymes : mesuré, chiche, regardant.', 'Contraire : prodigue, généreux, abondant.'],
  ['Prodigue', 'Qui dépense sans compter', 'Ex : un héritier prodigue. Synonymes : dépensier, généreux, dispendieux.', 'Contraire : avare, parcimonieux. Ne pas confondre avec prodige (exploit).'],
  ['Frugal', 'Sobre, qui se contente de peu (surtout pour la nourriture)', 'Ex : un repas frugal. Synonymes : simple, modeste, léger.', 'Ne signifie pas « maigre » de façon péjorative : c’est la sobriété.'],
  ['Opulent', 'Très riche, abondant', 'Ex : une société opulente. Synonymes : fortuné, riche, prospère.', 'Contraire : indigent, misérable. Nom : opulence.'],
  ['Indigent', 'Très pauvre, dénué de ressources', 'Ex : des familles indigentes. Synonymes : nécessiteux, misérable, pauvre.', 'Ne pas confondre avec indigène (originaire du pays) ni indigeste.'],
  ['Inique', 'Contraire à l’équité, très injuste', 'Ex : un jugement inique. Synonymes : injuste, partial, scandaleux.', 'Nom : iniquité. Ne pas confondre avec unique.'],
  ['Équanimité', 'Égalité d’humeur, sérénité face aux événements', 'Ex : accepter son sort avec équanimité. Synonymes : sérénité, calme, impassibilité.', 'Ne pas confondre avec équité (justice).'],
  ['Magnanime', 'Généreux et noble, qui pardonne volontiers', 'Ex : un vainqueur magnanime. Synonymes : généreux, clément, noble.', 'Ne signifie pas « grand » physiquement mais grandeur d’âme.'],
  ['Débonnaire', 'D’une bonté un peu faible, doux', 'Ex : un patron débonnaire. Synonymes : bonhomme, bienveillant, conciliant.', 'Peut devenir péjoratif : bonté qui frise la faiblesse.'],
  ['Acariâtre', 'D’humeur aigre, hargneuse', 'Ex : une voisine acariâtre. Synonymes : grincheux, hargneux, revêche.', 'Ne pas confondre avec les acariens ; l’orthographe prend un « â ».'],
  ['Taciturne', 'Qui parle peu, silencieux', 'Ex : un homme taciturne. Synonymes : silencieux, renfermé, réservé.', 'Contraire : loquace, volubile, bavard.'],
  ['Laconique', 'Qui s’exprime en peu de mots', 'Ex : une réponse laconique. Synonymes : concis, bref, succinct.', 'Contraire : prolixe, verbeux.'],
  ['Diaphane', 'Qui laisse passer la lumière sans être transparent', 'Ex : une étoffe diaphane. Synonymes : translucide, vaporeux, pâle.', 'Différent de transparent (qui laisse voir nettement à travers).'],
  ['Évanescent', 'Qui disparaît peu à peu, qui s’efface', 'Ex : un souvenir évanescent. Synonymes : fugace, vaporeux, fugitif.', 'Ne pas confondre avec effervescent (qui bouillonne).'],
  ['Ténu', 'Très mince, très fin ; subtil', 'Ex : un fil ténu ; une distinction ténue. Synonymes : fin, mince, délicat.', 'Ne pas confondre avec tenu (participe de tenir).'],
  ['Fugace', 'Qui ne dure pas, passager', 'Ex : une impression fugace. Synonymes : éphémère, fugitif, passager.', 'Contraire : durable, pérenne.'],
  ['Pérenne', 'Qui dure longtemps, durable', 'Ex : une institution pérenne. Synonymes : durable, permanent, stable.', 'Contraire : éphémère. Ne pas confondre avec périmé.'],
  ['Vétuste', 'Vieux, usé, en mauvais état', 'Ex : un bâtiment vétuste. Synonymes : délabré, vieilli, ancien.', 'Ne s’applique pas à une personne : on parle d’un bâtiment, d’un matériel vétuste.'],
  ['Désuet', 'Qui n’est plus en usage, démodé', 'Ex : un vocabulaire désuet. Synonymes : suranné, démodé, périmé.', 'Ne pas confondre avec désuétude (nom : tomber en désuétude).'],
  ['Obsolète', 'Dépassé, qui n’est plus utilisé', 'Ex : une technologie obsolète. Synonymes : périmé, dépassé, désuet.', 'Ne pas confondre avec ancien : obsolète = dépassé par le progrès.'],
  ['Caduc', 'Qui n’a plus de valeur, périmé ; qui tombe (feuilles)', 'Ex : une loi caduque ; un arbre à feuillage caduc. Synonymes : périmé, nul, obsolète.', 'Féminin : caduque. Ne pas confondre avec cadet.'],
  ['Rédhibitoire', 'Qui constitue un obstacle absolu, qui annule un achat ou un projet', 'Ex : un défaut rédhibitoire. Synonymes : éliminatoire, dirimant.', 'Ne signifie pas « modérément gênant » : l’obstacle est fatal.'],
  ['Ubuesque', 'Absurde et grotesque, digne du Père Ubu', 'Ex : une situation ubuesque. Synonymes : grotesque, absurde, burlesque.', 'À distinguer de kafkaïen (angoissant et absurde).'],
  ['Rocambolesque', 'Plein de péripéties invraisemblables', 'Ex : une évasion rocambolesque. Synonymes : invraisemblable, extravagant, fantastique.', 'Vient de Rocambole (héros de roman-feuilleton).'],
  ['Fastidieux', 'Ennuyeux et pénible par sa longueur ou sa monotonie', 'Ex : un travail fastidieux. Synonymes : rébarbatif, lassant, monotone.', 'Ne pas confondre avec fastueux (somptueux).'],
  ['Rébarbatif', 'Rebutant, d’abord ingrat', 'Ex : un texte rébarbatif. Synonymes : ingrat, rebutant, aride.', 'Pas de rapport avec la barbe.'],
  ['Alambiqué', 'Trop compliqué, subtil à l’excès', 'Ex : un raisonnement alambiqué. Synonymes : compliqué, tarabiscoté, confus.', 'Contraire : simple, limpide.'],
  ['Ineffable', 'Qu’on ne peut exprimer par des mots', 'Ex : une joie ineffable. Synonymes : indicible, inexprimable.', 'Ne pas confondre avec inéluctable ni avec ineffaçable.'],
  ['Insidieux', 'Qui cache un piège, qui agit sournoisement', 'Ex : une maladie insidieuse. Synonymes : sournois, perfide, trompeur.', 'Ne pas confondre avec insipide (sans saveur).'],
  ['Retors', 'Rusé, malin, tortueux', 'Ex : un négociateur retors. Synonymes : rusé, fourbe, madré.', 'Ne signifie pas « têtu » mais « malin dans les détours ».'],
  ['Fourbe', 'Qui trompe avec ruse et dissimulation', 'Ex : un fourbe qui trahit ses amis. Synonymes : perfide, hypocrite, rusé.', 'Ne pas confondre avec fourbi (désordre).'],
  ['Cupide', 'Avide d’argent', 'Ex : un héritier cupide. Synonymes : avide, rapace, intéressé.', 'Ne pas confondre avec stupide ni avec Cupidon (dieu de l’amour).'],
  ['Vindicatif', 'Qui cherche à se venger, rancunier', 'Ex : un ton vindicatif. Synonymes : rancunier, revanchard.', 'Ne pas confondre avec vindicte (poursuite punitive).'],
  ['Téméraire', 'Qui prend des risques sans réfléchir', 'Ex : un alpiniste téméraire. Synonymes : audacieux, imprudent, hardi.', 'Plus péjoratif que courageux : il y a imprudence.'],
  ['Pugnace', 'Combatif, qui aime la lutte', 'Ex : un avocat pugnace. Synonymes : combatif, batailleur, agressif.', 'Ne pas confondre avec vorace.'],
  ['Belliqueux', 'Qui aime la guerre, porté à la querelle', 'Ex : un peuple belliqueux. Synonymes : guerrier, agressif, querelleur.', 'Contraire : pacifique.'],
  ['Irascible', 'Qui se met facilement en colère', 'Ex : un vieillard irascible. Synonymes : colérique, emporté, coléreux.', 'Ne pas confondre avec irrésistible ni avec irritable (sensible à l’irritation).'],
  ['Patibulaire', 'Sinistre, qui inspire la méfiance', 'Ex : une mine patibulaire. Synonymes : sinistre, inquiétant, louche.', 'Vient de « gibet » ; ne signifie pas « fatigué ».'],
  ['Ignominie', 'Grand déshonneur, action honteuse', 'Ex : couvrir quelqu’un d’ignominie. Synonymes : infamie, honte, opprobre.', 'Ne pas confondre avec ignorance.'],
  ['Opprobre', 'Honte publique, déshonneur', 'Ex : jeter l’opprobre sur quelqu’un. Synonymes : honte, déshonneur, ignominie.', 'Nom masculin : un opprobre. Ne pas confondre avec approbation.'],
  ['Probité', 'Honnêteté rigoureuse', 'Ex : un magistrat d’une probité irréprochable. Synonymes : intégrité, droiture.', 'Contraire : malhonnêteté, vénalité.'],
  ['Mansuétude', 'Douceur, indulgence', 'Ex : traiter les coupables avec mansuétude. Synonymes : clémence, indulgence, bienveillance.', 'Ne signifie pas « solitude » ni « calme ».'],
  ['Aménité', 'Charme, douceur dans les rapports avec autrui', 'Ex : il nous reçut avec aménité. Synonymes : affabilité, courtoisie.', 'Souvent employé de façon ironique : « échanger des aménités » = s’insulter.'],
  ['Déférence', 'Respect poli envers quelqu’un', 'Ex : s’adresser à un aîné avec déférence. Synonymes : respect, égards, considération.', 'Ne pas confondre avec différence ni avec déférent = respectueux.'],
  ['Condescendance', 'Attitude de supériorité bienveillante en apparence', 'Ex : il nous répondit avec condescendance. Synonymes : hauteur, suffisance.', 'Ne signifie pas « complaisance » ni « modestie ».'],
  ['Hautain', 'Plein de mépris, altier', 'Ex : un ton hautain. Synonymes : arrogant, dédaigneux, altier.', 'Contraire : humble, modeste.'],
  ['Morgue', 'Attitude orgueilleuse et méprisante', 'Ex : il nous traita avec morgue. Synonymes : arrogance, hauteur.', 'Homonyme : une morgue (lieu où l’on conserve les corps).'],
  ['Forfanterie', 'Vantardise, fanfaronnade', 'Ex : sa forfanterie amusait. Synonymes : fanfaronnade, bravade.', 'Ne pas confondre avec une forfaiture (crime d’un magistrat, abus de pouvoir).'],
  ['Gabegie', 'Désordre et gaspillage dus à une mauvaise gestion', 'Ex : la gabegie administrative. Synonymes : gâchis, désordre.', 'Ne désigne pas un simple désordre : le gaspillage de moyens est essentiel.'],
  ['Imbroglio', 'Situation confuse et embrouillée', 'Ex : un imbroglio juridique. Synonymes : embrouille, confusion.', 'Ne signifie pas simplement « désordre » : la confusion vient d’éléments emmêlés.'],
  ['Quiproquo', 'Malentendu qui fait prendre une personne ou une chose pour une autre', 'Ex : un quiproquo comique. Synonymes : malentendu, méprise, confusion.', 'Ne pas confondre avec quolibet (raillerie).'],
  ['Brouhaha', 'Bruit confus de voix', 'Ex : le brouhaha de la salle. Synonymes : tumulte, vacarme, rumeur.', 'Ne signifie pas « silence tendu ».'],
  ['Foisonner', 'Abonder, se multiplier', 'Ex : les idées foisonnent. Synonymes : pulluler, abonder, proliférer.', 'Ne pas confondre avec fusionner.'],
  ['Dilapider', 'Dépenser follement, gaspiller', 'Ex : dilapider un héritage. Synonymes : gaspiller, dissiper, engloutir.', 'Contraire : épargner, économiser.'],
  ['Thésauriser', 'Amasser de l’argent sans l’employer', 'Ex : thésauriser des pièces d’or. Synonymes : amasser, accumuler, économiser.', 'Contraire : dilapider. Ne pas confondre avec investir (faire fructifier).'],
  ['Entériner', 'Ratifier, rendre définitif en approuvant officiellement', 'Ex : entériner une décision. Synonymes : ratifier, valider, confirmer.', 'Ne pas confondre avec enterrer.'],
  ['Abroger', 'Annuler officiellement une loi ou un règlement', 'Ex : abroger une loi. Synonymes : annuler, supprimer, révoquer.', 'Ne pas confondre avec déroger (s’écarter d’une règle) ni avec arroger.'],
  ['Déroger', 'S’écarter d’une règle, d’un usage', 'Ex : déroger à la règle. Synonymes : contrevenir à, s’écarter de.', 'Se construit avec « à » ; ne pas confondre avec abroger (supprimer).'],
  ['Promulguer', 'Rendre officielle et exécutoire une loi', 'Ex : le président promulgue la loi. Synonymes : publier, décréter.', 'Ne pas confondre avec proclamer (annoncer publiquement).'],
  ['Édicter', 'Établir par décret ou règle', 'Ex : édicter une norme. Synonymes : décréter, prescrire, promulguer.', 'Ne pas confondre avec éditer (publier).'],
  ['Proscrire', 'Interdire, bannir', 'Ex : proscrire l’usage du tabac. Synonymes : interdire, prohiber, bannir.', 'Ne pas confondre avec prescrire (ordonner, recommander).'],
  ['Prescrire', 'Ordonner, recommander', 'Ex : le médecin prescrit un traitement. Synonymes : ordonner, imposer, recommander.', 'Ne pas confondre avec proscrire (interdire).'],
  ['Ressortissant', 'Personne qui relève d’un État (nationalité ou protection)', 'Ex : les ressortissants français à l’étranger. Synonymes : citoyen, national.', 'Ne pas confondre avec résident (qui habite) ; le ressortissant a la nationalité.'],
  ['Sempiternel', 'Qui dure toujours, que l’on subit sans fin (souvent péjoratif)', 'Ex : ses sempiternelles plaintes. Synonymes : éternel, perpétuel, incessant.', 'Ne signifie pas « sans fin » de façon positive : l’ennui y est inclus.'],
  ['Équivoque', 'Qui a plusieurs sens possibles, ambigu', 'Ex : une réponse équivoque. Synonymes : ambigu, douteux, louche.', 'Contraire : univoque (un seul sens).'],
  ['Subsidiaire', 'Qui vient en complément, secondaire', 'Ex : une question subsidiaire. Synonymes : accessoire, secondaire.', 'Ne pas confondre avec subséquent (qui vient ensuite).'],
  ['Antagonisme', 'Opposition, rivalité profonde', 'Ex : l’antagonisme entre deux classes. Synonymes : opposition, hostilité, rivalité.', 'Adjectif : antagoniste (qui s’oppose).'],
  ['Vindicte', 'Poursuite et punition d’un crime (désigner à la vindicte publique)', 'Ex : livrer quelqu’un à la vindicte populaire. Synonymes : vengeance, punition.', 'Expression courante : « la vindicte populaire ».'],
  ['Philippique', 'Discours violent contre quelqu’un', 'Ex : prononcer une philippique contre le gouvernement. Synonymes : diatribe, réquisitoire.', 'Vient de Démosthène contre Philippe de Macédoine ; ne pas confondre avec Philippines.'],
  ['Réquisitoire', 'Accusation vive et argumentée', 'Ex : un réquisitoire contre le pouvoir. Synonymes : accusation, plaidoyer inverse.', 'Opposé : plaidoyer, apologie.'],
  ['Panégyrique', 'Éloge public, discours très élogieux', 'Ex : faire le panégyrique d’un héros. Synonymes : éloge, apologie, dithyrambe.', 'Opposé : diatribe, philippique.'],
  ['Diatribe', 'Critique violente et injurieuse', 'Ex : se lancer dans une diatribe contre quelqu’un. Synonymes : philippique, invective, pamphlet.', 'Ne pas confondre avec dithyrambe (éloge excessif).'],
  ['Pamphlet', 'Court écrit satirique, souvent polémique', 'Ex : le pamphlet contre un ministre. Synonymes : libelle, satire.', 'Ne pas confondre avec brochure ni avec feuillet.'],
  ['Verbiage', 'Abondance de paroles creuses', 'Ex : un verbiage inutile. Synonymes : bavardage, délayage.', 'Rien de commun avec un verbe ni avec le feuillage.'],
  ['Logorrhée', 'Flot de paroles abondant et incontrôlé', 'Ex : une logorrhée sans fin. Synonymes : verbiage, bavardage.', 'Ne désigne pas seulement un bavardage : l’idée de flot incontrôlé domine.'],
  ['Apanage', 'Ce qui est le propre de quelqu’un ou d’un groupe', 'Ex : la liberté n’est pas l’apanage des riches. Synonymes : privilège, monopole, domaine propre.', 'Orthographe : un seul « p » (apanage).'],
  ['Prérogative', 'Privilège attaché à une fonction', 'Ex : les prérogatives du président. Synonymes : privilège, droit, attribution.', 'Ne pas confondre avec une obligation.'],
  ['Gageure', 'Entreprise qui paraît presque irréalisable', 'Ex : c’est une gageure de finir à temps. Synonymes : défi, pari audacieux.', 'Se prononce « gajure » ; ne pas confondre avec gage.'],
  ['Obérer', 'Charger de dettes, compromettre financièrement', 'Ex : une dette qui obère le budget. Synonymes : grever, endetter, hypothéquer.', 'Ne pas confondre avec obéir.'],
  ['Grever', 'Alourdir d’une charge financière ou d’une servitude', 'Ex : une dette grève l’avenir. Synonymes : alourdir, obérer.', 'Souvent employé au participe : grevé de dettes.'],
  ['Édulcorer', 'Adoucir, rendre moins fort ou moins vrai', 'Ex : édulcorer un texte. Synonymes : atténuer, adoucir, affadir.', 'Au sens figuré, c’est souvent affaiblir : ne pas penser seulement au sucre.'],
  ['Escamoter', 'Faire disparaître adroitement, éviter de traiter', 'Ex : escamoter un problème. Synonymes : esquiver, faire disparaître, éluder.', 'Au sens propre : faire disparaître un objet d’un tour de main.'],
  ['Parangon', 'Modèle parfait, exemple', 'Ex : un parangon de vertu. Synonymes : modèle, archétype, exemple.', 'Le mot s’emploie presque toujours avec « de » : un parangon de vertu.'],
  ['Quintessence', 'Ce qu’il y a de plus pur, de plus essentiel', 'Ex : la quintessence de l’art classique. Synonymes : essence, substance, fleuron.', 'Mot issu de « cinquième essence » ; en usage moderne : le meilleur, l’extrait le plus pur.'],
  ['Ambages', 'Détours de langage (dans « sans ambages »)', 'Ex : parler sans ambages. Synonymes : détours, circonlocutions.', 'La locution signifie « directement, sans détour ». Ne pas confondre avec ambiguïté.'],
  ['Nonobstant', 'Malgré, en dépit de (langue juridique)', 'Ex : nonobstant cette clause, le contrat est valide. Synonymes : malgré, en dépit de.', 'Exprime l’opposition (malgré), pas la cause.'],
  ['Prodrome', 'Signe avant-coureur', 'Ex : les prodromes d’une maladie. Synonymes : signe précurseur, symptôme avant-coureur.', 'Ne pas confondre avec syndrome (ensemble de symptômes).'],
  ['Corollaire', 'Conséquence directe, suite nécessaire', 'Ex : la hausse des prix est le corollaire de l’inflation. Synonymes : suite, conséquence.', 'C’est une conséquence (et non l’origine d’un fait).'],
  ['Alacrité', 'Vivacité joyeuse, entrain', 'Ex : il se mit au travail avec alacrité. Synonymes : entrain, enjouement, vivacité.', 'Ne signifie pas « calme » : c’est une vivacité joyeuse (contraire : apathie).'],
  ['Torpeur', 'État d’engourdissement physique ou moral', 'Ex : sortir de sa torpeur. Synonymes : engourdissement, léthargie, apathie.', 'Contraire : énergie, vivacité.'],
  ['Léthargie', 'Sommeil profond ; état d’inertie', 'Ex : l’économie sombre dans la léthargie. Synonymes : engourdissement, apathie, torpeur.', 'L’adjectif est léthargique ; ne pas écrire « létargie ».'],
  ['Marasme', 'Stagnation, état de dépression ou d’inactivité', 'Ex : le marasme économique. Synonymes : stagnation, crise, atonie.', 'Ne pas confondre avec marais.'],
  ['Déliquescence', 'État de décadence et de décomposition', 'Ex : la déliquescence d’un régime. Synonymes : décomposition, décadence, déclin.', 'Ne pas confondre avec effervescence (agitation).'],
  ['Aguerri', 'Habitué aux difficultés, expérimenté', 'Ex : un négociateur aguerri. Synonymes : chevronné, expérimenté, endurci.', 'Contraire : novice, inexpérimenté. Ne pas confondre avec guérir.'],
  ['Chevronné', 'Expérimenté, rompu à un métier', 'Ex : un pilote chevronné. Synonymes : aguerri, expérimenté, confirmé.', 'Contraire : novice, débutant.'],
  ['Hégémonie', 'Suprématie, domination d’un État ou d’un groupe', 'Ex : l’hégémonie culturelle d’un pays. Synonymes : domination, suprématie.', 'L’adjectif est hégémonique. C’est une domination, pas une simple influence.'],
  ['Prépondérant', 'Qui a plus d’importance ou d’influence', 'Ex : jouer un rôle prépondérant. Synonymes : dominant, déterminant, majeur.', 'Ne pas confondre avec préconçu.'],
  ['Atavisme', 'Hérédité de caractères lointains, survivance du passé', 'Ex : un atavisme familial. Synonymes : hérédité, héritage.', 'Ne pas confondre avec instinct : l’atavisme relève de l’hérédité.'],
  ['Pérorer', 'Parler longuement et avec emphase', 'Ex : il pérora pendant une heure. Synonymes : discourir, pontifier, palabrer.', 'Ne pas confondre avec péroraison (conclusion d’un discours) ni avec préparer.'],
  ['Tancer', 'Réprimander vivement', 'Ex : le maître tança l’élève. Synonymes : réprimander, gronder, semoncer.', 'Ne pas confondre avec tenter (essayer).'],
  ['Morigéner', 'Réprimander sévèrement, faire la leçon', 'Ex : morigéner un enfant. Synonymes : sermonner, tancer, admonester.', 'Ne pas confondre avec mortifier (humilier).'],
  ['Admonester', 'Réprimander avec autorité', 'Ex : admonester un élève. Synonymes : tancer, sermonner, gronder.', 'Nom : admonestation ou admonition (réprimande).'],
  ['Litote', 'Figure qui dit moins pour suggérer plus', 'Ex : « Ce n’est pas mauvais » pour dire que c’est bon.', 'À ne pas confondre avec l’hyperbole (qui exagère) ni avec l’euphémisme (qui adoucit).'],
  ['Hyperbole', 'Figure qui exagère pour impressionner', 'Ex : « Je te l’ai dit mille fois. »', 'Contraire de la litote : la litote atténue, l’hyperbole amplifie.'],
  ['Métonymie', 'Figure qui désigne une chose par un terme voisin', 'Ex : « boire un verre », « lire Molière », « l’Élysée a décidé ».', 'À distinguer de la synecdoque (partie pour le tout) et de la métaphore (comparaison sans outil).'],
  ['Synecdoque', 'Figure qui désigne le tout par la partie, ou l’inverse', 'Ex : « une voile à l’horizon » (un bateau), « les mortels » (les hommes).', 'À distinguer de la métonymie : ici, il y a un rapport de partie à tout.'],
  ['Euphémisme', 'Figure qui adoucit une réalité pénible', 'Ex : « il nous a quittés » pour « il est mort ».', 'À distinguer de la litote : l’euphémisme masque l’idée, la litote la suggère par atténuation.'],
  ['Oxymore', 'Alliance de deux termes contradictoires', 'Ex : « cette obscure clarté », « un silence assourdissant ».', 'À distinguer de l’antithèse : les deux termes sont ici accolés dans le même groupe.'],
  ['Antiphrase', 'Expression du contraire de ce qu’on pense (ironie)', 'Ex : « Quel beau temps ! » sous la pluie.', 'À distinguer de l’euphémisme : ici, on dit le contraire.'],
  ['Aposiopèse', 'Interruption brusque d’une phrase (souvent « … »)', 'Ex : « Je pourrais… mais non ! »', 'Ne pas confondre avec l’ellipse (omission de mots sans rupture).']
];

export const TM_EXPR_VOCAB_FLASHCARDS = FLASH_ROWS.map(function (row, i) {
  return { id: i + 1, category: 'Vocabulaire', front: row[0], backName: row[1], backDef: row[2], backTrap: row[3] };
});

// ---------------------------------------------------------------------------
// 3. QCM DE VOCABULAIRE
// Ligne = [énoncé, bonne réponse, [4 mauvaises réponses], explication]
// ---------------------------------------------------------------------------

var VOCAB_ROWS = [
  ['Quel est le sens de l’adjectif <em>prolixe</em> ?', 'Qui s’exprime avec trop de mots', ['Qui produit beaucoup d’œuvres', 'Qui parle très peu', 'Qui est difficile à comprendre', 'Qui est d’une grande générosité'], 'Prolixe = verbeux, qui s’étend trop longuement. Le piège classique est prolifique, qui qualifie celui qui produit beaucoup (un auteur prolifique).'],
  ['Que signifie le nom <em>sinécure</em> ?', 'Un emploi lucratif qui demande peu de travail', ['Un traitement médical de longue durée', 'Un poste exposé à de gros risques', 'Une fonction très mal payée', 'Une mission confidentielle'], 'Une sinécure est un poste bien rémunéré, sans grand effort : une place de tout repos. Elle n’a aucun rapport avec une cure médicale malgré la ressemblance du mot.'],
  ['Complétez : « Les deux voisins ont un ___ au sujet de la clôture. »', 'différend', ['différent', 'différant', 'différence', 'diffèrent'], 'Un différend est un désaccord, un litige. « Différent » est un adjectif (distinct), « différant » un participe présent de différer, « diffèrent » une forme conjuguée.'],
  ['Que signifie « contester le <em>bien-fondé</em> d’une réclamation » ?', 'En contester la légitimité', ['En contester le montant', 'En contester la date', 'En contester l’auteur', 'En contester la forme'], 'Le bien-fondé est le caractère justifié, légitime d’une demande. Le nom prend un trait d’union ; l’adjectif ne le prend pas (une critique bien fondée).'],
  ['Quel est le sens de <em>lénifiant</em> ?', 'Qui apaise, qui adoucit', ['Qui irrite, qui provoque', 'Qui est mensonger', 'Qui est très long', 'Qui est secret'], 'Lénifiant (du latin lenis, doux) signifie apaisant. Au sens figuré, il peut devenir péjoratif : un discours lénifiant rassure en endormant la vigilance.'],
  ['Quel est le synonyme de <em>acerbe</em> ?', 'Incisif', ['Débonnaire', 'Évasif', 'Naïf', 'Mielleux'], 'Acerbe = piquant, aigre, mordant, donc incisif. Débonnaire et mielleux appartiennent au registre opposé (doux, flatteur).'],
  ['Reporter une réunion <em>sine die</em>, c’est la reporter…', 'sans fixer de date', ['à la semaine suivante', 'définitivement', 'à une date très proche', 'de jour en jour'], 'Sine die signifie « sans jour » : on ne fixe pas de nouvelle date. Ce n’est pas « définitivement » : la réunion peut encore avoir lieu un jour.'],
  ['Un <em>verbatim</em> est…', 'la transcription mot à mot d’un propos', ['un résumé fidèle des idées', 'une traduction libre', 'un commentaire critique', 'une citation approximative'], 'Verbatim, mot latin, signifie « mot pour mot » : on reproduit textuellement. C’est l’opposé d’un résumé ou d’une paraphrase.'],
  ['Que signifie le nom <em>invective</em> ?', 'Une parole violente et injurieuse', ['Une découverte inattendue', 'Un éloge excessif', 'Une plaidoirie', 'Un discours officiel'], 'Une invective est une attaque verbale violente (injure, insulte). Le verbe est invectiver quelqu’un.'],
  ['Que signifie l’adjectif <em>septentrional</em> ?', 'Situé au nord', ['Situé à l’ouest', 'Situé au sud', 'Situé à l’est', 'Situé au centre'], 'Septentrional vient de septentrio (le nord). Son contraire est méridional (sud) ; occidental désigne l’ouest et oriental l’est.'],
  ['Quel est l’antonyme de <em>septentrional</em> ?', 'Méridional', ['Boréal', 'Occidental', 'Polaire', 'Oriental'], 'Septentrional (nord) s’oppose à méridional (sud). Boréal et polaire sont des synonymes ou voisins de septentrional, pas des contraires.'],
  ['Quel est le synonyme de <em>exorbitant</em> ?', 'Excessif', ['Modique', 'Honnête', 'Dérisoire', 'Fluctuant'], 'Exorbitant (littéralement : hors de l’orbite) = démesuré, qui dépasse la mesure. Modique et dérisoire sont ses contraires.'],
  ['Que signifie le nom <em>camouflet</em> ?', 'Un affront public', ['Un déguisement', 'Un faux-semblant', 'Une récompense', 'Un pardon'], 'Un camouflet est une humiliation, un affront (essuyer un camouflet). Il ne se confond pas avec le camouflage.'],
  ['Quel est le sens de <em>concomitance</em> ?', 'Simultanéité', ['Conséquence', 'Antériorité', 'Succession', 'Rivalité'], 'La concomitance est la coïncidence de deux faits dans le temps (concomitant = qui se produit en même temps).'],
  ['Qu’est-ce qu’une <em>incartade</em> ?', 'Un écart de conduite', ['Une retraite précipitée', 'Une rentrée d’argent', 'Une marque d’honneur', 'Un discours officiel'], 'Une incartade est une petite folie, un écart (faire des incartades). On ne l’emploie pas pour une retraite ou une rentrée d’argent.'],
  ['Que signifie <em>aduler</em> quelqu’un ?', 'Le flatter à l’excès', ['L’adopter', 'L’apaiser', 'Le critiquer', 'Le négliger'], 'Aduler = flatter, idolâtrer. Ne pas confondre avec adopter ni avec adoucir, qui n’ont aucun rapport.'],
  ['Que signifie l’adjectif <em>obséquieux</em> ?', 'Servile et d’une politesse excessive', ['Funèbre', 'Insolent', 'Taciturne', 'Obstiné'], 'Obséquieux = qui s’empresse de façon servile pour plaire. « Obsèques » (funérailles) n’a pas de lien sémantique avec ce mot.'],
  ['Que signifie <em>dithyrambique</em> ?', 'Très élogieux, d’un enthousiasme excessif', ['Très critique', 'Très ennuyeux', 'Très hésitant', 'Très ancien'], 'Un compte rendu dithyrambique est un éloge sans réserve. Ne pas confondre avec une diatribe (critique violente).'],
  ['Quel est l’antonyme de <em>pusillanime</em> ?', 'Intrépide', ['Craintif', 'Timoré', 'Indécis', 'Réservé'], 'Pusillanime = qui manque de courage. Craintif et timoré en sont des synonymes ; intrépide, qui ne craint pas le danger, en est le contraire.'],
  ['Quel est le synonyme de <em>péremptoire</em> ?', 'Catégorique', ['Temporaire', 'Hésitant', 'Périmé', 'Incertain'], 'Un ton péremptoire ne souffre pas la réplique : catégorique, tranchant. Il ne signifie ni temporaire ni périmé malgré les consonances.'],
  ['Un geste <em>ostentatoire</em> est un geste…', 'fait pour être remarqué', ['fait en cachette', 'fait sans y penser', 'fait par obligation', 'fait par erreur'], 'Ostentatoire = exhibé par vanité. À ne pas confondre avec ostensible (qui se montre sans se cacher, sans nécessairement chercher à briller).'],
  ['Quel est le synonyme de <em>sibyllin</em> ?', 'Énigmatique', ['Explicite', 'Loquace', 'Candide', 'Provocant'], 'Sibyllin = obscur comme un oracle de la Sibylle, donc énigmatique. Une réponse sibylline laisse l’interlocuteur perplexe.'],
  ['Que signifie l’adjectif <em>abscons</em> ?', 'Difficile à comprendre', ['Dépourvu de sens moral', 'Très rapide', 'Très bref', 'Peu coûteux'], 'Un texte abscons est obscur, hermétique. Aucun lien avec « absent » ni avec « abstrait ».'],
  ['Une <em>aporie</em> est…', 'une impasse dans un raisonnement', ['un éloge', 'une conclusion', 'une preuve', 'une méthode'], 'Aporie : difficulté logique qui semble sans issue. Ne pas confondre avec apologie (éloge, plaidoyer).'],
  ['Une <em>lapalissade</em> est…', 'une évidence naïve', ['un mensonge', 'un paradoxe', 'une contradiction', 'une calomnie'], 'Du nom de La Palice, dont l’épitaphe disait qu’un quart d’heure avant sa mort il était encore en vie. Une lapalissade énonce une évidence ridicule.'],
  ['Que signifie <em>corroborer</em> une hypothèse ?', 'La confirmer en l’appuyant par de nouveaux éléments', ['La contredire', 'La corrompre', 'L’ignorer', 'L’atténuer'], 'Corroborer = confirmer, étayer. Le contraire est infirmer.'],
  ['Quel est l’antonyme de <em>infirmer</em> ?', 'Confirmer', ['Contredire', 'Réfuter', 'Démentir', 'Annuler'], 'Infirmer, c’est démentir, annuler, réfuter. Son contraire est confirmer. Le mot n’a pas ici de rapport avec l’infirmité.'],
  ['Que signifie <em>vilipender</em> ?', 'Dénigrer avec mépris', ['Louer', 'Ignorer', 'Soutenir', 'Négliger'], 'Vilipender = traiter de façon méprisante, décrier. Aucun lien avec « pendre » ni avec « suspendre ».'],
  ['Que signifie <em>fustiger</em> ?', 'Critiquer avec une grande sévérité', ['Encourager', 'Excuser', 'Fêter', 'Récompenser'], 'Fustiger = blâmer vivement. À l’origine, frapper avec une verge ; au sens courant, critiquer sévèrement.'],
  ['Que signifie <em>louvoyer</em> au sens figuré ?', 'User de détours, biaiser', ['Foncer droit au but', 'Hurler de colère', 'Flatter', 'Menacer'], 'Louvoyer, c’est, au figuré, éviter d’aller droit au but. Le sens propre vient de la marine : naviguer en zigzag contre le vent.'],
  ['Que signifie <em>tergiverser</em> ?', 'Hésiter en cherchant des faux-fuyants', ['Violer une règle', 'Insulter', 'Renoncer définitivement', 'Se précipiter'], 'Tergiverser = user de détours pour retarder une décision. À ne pas confondre avec transgresser (enfreindre une règle).'],
  ['Quel est le synonyme de <em>atermoyer</em> ?', 'Temporiser', ['Précipiter', 'Décider', 'Conclure', 'Ordonner'], 'Atermoyer = remettre à plus tard, différer ; temporiser est son synonyme. Les autres verbes expriment l’action immédiate.'],
  ['Que signifie <em>pallier</em> un manque ?', 'L’atténuer, le compenser', ['L’aggraver', 'L’ignorer', 'Le constater', 'Le provoquer'], 'Pallier est transitif direct : pallier un manque (et non « pallier à un manque »). Il signifie remédier de façon provisoire ou partielle.'],
  ['<em>Éluder</em> une question, c’est…', 'l’éviter habilement', ['l’éclaircir', 'la poser', 'y répondre longuement', 'la reformuler'], 'Éluder = esquiver. Ne pas confondre avec élucider (éclaircir, résoudre un mystère).'],
  ['Que signifie <em>occulter</em> ?', 'Cacher, rendre invisible', ['Éclairer', 'Révéler', 'Souligner', 'Exagérer'], 'Occulter = dissimuler, masquer. Le contraire est révéler, dévoiler.'],
  ['Que signifie <em>subodorer</em> ?', 'Soupçonner, pressentir', ['Sentir mauvais', 'Respirer profondément', 'Détruire', 'Parfumer'], 'Subodorer = deviner par intuition (comme flairer une piste). Le verbe n’a pas ici de sens olfactif réel.'],
  ['Un argument <em>spécieux</em> est un argument…', 'trompeur sous une apparence de vérité', ['très vaste', 'très précis', 'particulier à une espèce', 'très rare'], 'Spécieux = qui n’a que l’apparence de la justesse. À ne pas confondre avec spacieux (vaste).'],
  ['Quel est l’antonyme de <em>fortuit</em> ?', 'Délibéré', ['Accidentel', 'Imprévu', 'Inopiné', 'Occasionnel'], 'Fortuit = dû au hasard ; ses synonymes sont accidentel, imprévu, inopiné. Son contraire est délibéré, voulu. Ne pas confondre avec fortuné (riche).'],
  ['Que signifie l’adjectif <em>pléthorique</em> ?', 'En quantité excessive', ['Insuffisant', 'Rare', 'Modéré', 'Soudain'], 'Pléthorique = en nombre trop important (des effectifs pléthoriques). L’idée d’excès est contenue dans le mot.'],
  ['Quel est l’antonyme de <em>parcimonieux</em> ?', 'Prodigue', ['Économe', 'Chiche', 'Avare', 'Mesuré'], 'Parcimonieux = qui épargne à l’excès, et ses synonymes sont économe, chiche, avare. Le contraire est prodigue, qui dépense sans compter.'],
  ['Un repas <em>frugal</em> est un repas…', 'simple et sobre', ['gras et copieux', 'raffiné', 'épicé', 'tardif'], 'Frugal = qui se contente de peu, surtout pour la nourriture. Rien à voir avec fruit ou fruité.'],
  ['Que signifie l’adjectif <em>indigent</em> ?', 'Très pauvre', ['Originaire du pays', 'Difficile à digérer', 'Peu intelligent', 'Colérique'], 'Indigent = privé du nécessaire. Ne pas confondre avec indigène (natif) ni indigeste.'],
  ['Que signifie l’adjectif <em>inique</em> ?', 'Profondément injuste', ['Unique', 'Sans pareil', 'Comique', 'Secret'], 'Inique vient du latin iniquus (contraire à l’équité) : un jugement inique est scandaleusement injuste. Aucun lien avec unique.'],
  ['Que signifie <em>magnanime</em> ?', 'Généreux, enclin au pardon', ['Très grand de taille', 'Très riche', 'Rancunier', 'Mesquin'], 'La magnanimité est la grandeur d’âme, la générosité du vainqueur. Son contraire est mesquin.'],
  ['Quel est le synonyme de <em>acariâtre</em> ?', 'Hargneux', ['Charmant', 'Naïf', 'Affable', 'Joyeux'], 'Acariâtre = d’humeur aigre, querelleuse (une voisine acariâtre). Les trois autres adjectifs sont ses contraires ou sans rapport.'],
  ['Quel est l’antonyme de <em>taciturne</em> ?', 'Loquace', ['Silencieux', 'Renfermé', 'Réservé', 'Sombre'], 'Taciturne = qui parle peu ; synonymes : silencieux, renfermé, réservé. Le contraire est loquace, bavard.'],
  ['Que signifie <em>laconique</em> ?', 'Qui s’exprime en peu de mots', ['Qui parle trop', 'Qui est mélancolique', 'Qui est maladroit', 'Qui est impressionnant'], 'Laconique vient de la Laconie (Sparte), dont les habitants étaient réputés concis. Son contraire est prolixe.'],
  ['Que signifie <em>évanescent</em> ?', 'Qui s’efface peu à peu', ['Qui bouillonne', 'Qui s’intensifie', 'Qui ne change jamais', 'Qui est très évident'], 'Évanescent = qui disparaît progressivement (un souvenir évanescent). Ne pas confondre avec effervescent (agité, bouillonnant).'],
  ['Que signifie l’adjectif <em>ténu</em> ?', 'Très fin, très mince', ['Solide', 'Épais', 'Retenu', 'Obstiné'], 'Ténu = très mince, délicat (un fil ténu). Ne pas le confondre avec « tenu », participe passé de tenir.'],
  ['Quel est l’antonyme de <em>fugace</em> ?', 'Durable', ['Éphémère', 'Fugitif', 'Passager', 'Bref'], 'Fugace = qui dure peu ; éphémère, fugitif, passager, bref sont des synonymes. Le contraire est durable.'],
  ['Quel est le synonyme de <em>pérenne</em> ?', 'Durable', ['Passager', 'Éphémère', 'Périmé', 'Fugace'], 'Pérenne = qui dure dans le temps. Les trois autres mots expriment la brièveté ou l’obsolescence.'],
  ['Quel est le synonyme de <em>désuet</em> ?', 'Démodé', ['Innovant', 'Inutile', 'Cher', 'Inconnu'], 'Désuet = qui n’est plus en usage, suranné. Innovant est son contraire. Nom : désuétude.'],
  ['Une loi <em>caduque</em> est une loi…', 'qui n’est plus valable', ['qui est toute nouvelle', 'qui est très sévère', 'qui vient d’être votée', 'qui est ignorée'], 'Caduc = périmé, qui a perdu sa validité (féminin : caduque). Ignorer une loi ne la rend pas caduque.'],
  ['Un défaut <em>rédhibitoire</em> est un défaut…', 'qui constitue un obstacle absolu', ['qui se répète', 'qui est négociable', 'qui est léger', 'qui est caché'], 'Rédhibitoire (terme de droit) : qui justifie l’annulation d’une vente ; au figuré, qui interdit définitivement un choix.'],
  ['Que signifie <em>ubuesque</em> ?', 'Absurde et grotesque', ['Très ennuyeux', 'Tragique', 'Pompeux', 'Mystérieux'], 'Ubuesque renvoie au Père Ubu (Alfred Jarry) : situation absurde, cruelle et ridicule à la fois.'],
  ['Une aventure <em>rocambolesque</em> est une aventure…', 'pleine de péripéties invraisemblables', ['très ordinaire', 'moralisatrice', 'rigoureuse', 'silencieuse'], 'Rocambolesque vient de Rocambole, héros de romans-feuilletons d’aventures invraisemblables.'],
  ['Un texte <em>rébarbatif</em> est un texte…', 'rebutant, d’abord ingrat', ['qui porte la barbe', 'séduisant', 'facile à lire', 'chaleureux'], 'Rébarbatif = qui rebute par son aspect austère. L’étymologie renvoie à « barbare », pas à la barbe.'],
  ['Un raisonnement <em>alambiqué</em> est un raisonnement…', 'compliqué à l’excès', ['limpide', 'concis', 'direct', 'spontané'], 'Alambiqué (comme un alambic) = trop subtil, tarabiscoté. Son contraire est clair, simple.'],
  ['Que signifie <em>ineffable</em> ?', 'Qu’on ne peut exprimer par des mots', ['Qu’on ne peut effacer', 'Qu’on ne peut éviter', 'Qu’on ne peut voir', 'Qu’on ne peut croire'], 'Ineffable = indicible. Ne pas confondre avec ineffaçable (indélébile) ni avec inéluctable (inévitable).'],
  ['Que signifie <em>insidieux</em> ?', 'Qui piège de manière sournoise', ['Très visible', 'Franc', 'Fade', 'Ennuyeux'], 'Insidieux vient d’insidiae (embûches) : une maladie insidieuse progresse sans signe apparent. Contraire : franc, apparent.'],
  ['Quel est le synonyme de <em>retors</em> ?', 'Rusé', ['Têtu', 'Naïf', 'Impulsif', 'Maladroit'], 'Retors = astucieux dans les détours, parfois malhonnête (un négociateur retors). Il ne signifie pas têtu.'],
  ['Que signifie <em>cupide</em> ?', 'Avide d’argent', ['Stupide', 'Amoureux', 'Craintif', 'Désintéressé'], 'Cupide = avide d’argent, de richesses (cupidité). À ne pas confondre avec stupide.'],
  ['Que signifie <em>vindicatif</em> ?', 'Qui cherche à se venger', ['Qui se défend en justice', 'Très vif', 'Victorieux', 'Qui pardonne'], 'Vindicatif = enclin à la vengeance, rancunier (de vindicta). Il ne désigne pas la victoire.'],
  ['Une mine <em>patibulaire</em> est une mine…', 'sinistre, inquiétante', ['fatiguée', 'patiente', 'familière', 'délicate'], 'Patibulaire vient de patibulum (gibet) : qui évoque un criminel. Une mine patibulaire fait peur.'],
  ['Que signifie le nom <em>opprobre</em> ?', 'La honte publique', ['La louange', 'L’approbation', 'La fierté', 'Le silence'], 'L’opprobre est le déshonneur public (jeter l’opprobre sur quelqu’un). Ne pas confondre avec approbation.'],
  ['Quel est le synonyme de <em>probité</em> ?', 'Intégrité', ['Prudence', 'Naïveté', 'Courage', 'Fierté'], 'La probité est l’honnêteté rigoureuse ; son synonyme est l’intégrité. Aucun lien avec la prudence ou la naïveté.'],
  ['Que signifie <em>mansuétude</em> ?', 'Indulgence', ['Colère', 'Solitude', 'Sévérité', 'Rancune'], 'La mansuétude est la douceur indulgente envers autrui. Elle est le contraire de la sévérité.'],
  ['Que signifie <em>morgue</em> dans « il nous traita avec morgue » ?', 'Arrogance', ['Timidité', 'Cruauté', 'Tristesse', 'Pitié'], 'La morgue est un orgueil méprisant. Il existe un autre mot « morgue » (le lieu où l’on dépose des corps) mais ici l’attitude est en cause.'],
  ['Déroger à une règle, c’est…', 's’en écarter', ['l’annuler', 'la voter', 'la publier', 'l’imposer'], 'Déroger à = s’écarter d’une règle, y contrevenir. Abroger, c’est annuler officiellement une loi : les deux verbes se ressemblent mais ne signifient pas la même chose.'],
  ['Abroger une loi, c’est…', 'l’annuler officiellement', ['s’en écarter', 'la voter', 'la rendre exécutoire', 'l’interpréter'], 'Abroger = supprimer officiellement ; déroger = s’écarter ; promulguer = rendre exécutoire. Les trois verbes sont proches par la forme mais distincts par le sens.'],
  ['Que signifie <em>proscrire</em> ?', 'Interdire', ['Ordonner', 'Conseiller', 'Autoriser', 'Rappeler'], 'Proscrire = bannir, interdire. À ne pas confondre avec prescrire (ordonner, recommander) : un seul préfixe change le sens.'],
  ['Que signifie <em>entériner</em> une décision ?', 'La ratifier officiellement', ['L’enterrer', 'La contester', 'La retarder', 'La rejeter'], 'Entériner = valider, rendre définitif. Aucun rapport avec « enterrer », malgré la ressemblance.'],
  ['Quel est le sens de <em>sempiternel</em> ?', 'Qui revient sans cesse, interminable', ['Très ancien', 'Très rare', 'Joyeux', 'Fragile'], 'Sempiternel (du latin semper, toujours) ajoute souvent une nuance de lassitude : ses sempiternelles plaintes.'],
  ['Quel est le sens de l’adjectif <em>équivoque</em> ?', 'Ambigu', ['Clair', 'Précis', 'Honnête', 'Équilibré'], 'Équivoque = qui peut être compris de plusieurs façons, donc ambigu. Son contraire est univoque (un seul sens).'],
  ['Que signifie le nom <em>antagonisme</em> ?', 'Opposition profonde', ['Alliance', 'Complicité', 'Fusion', 'Équilibre'], 'Antagonisme = rivalité, hostilité entre deux forces ou personnes. L’adjectif est antagoniste.'],
  ['Une <em>philippique</em> est…', 'un discours violent contre quelqu’un', ['un éloge funèbre', 'un poème lyrique', 'un compliment', 'un discours d’adieu'], 'Le mot vient des Philippiques de Démosthène contre Philippe de Macédoine. Une philippique est une attaque oratoire.'],
  ['Une <em>diatribe</em> est…', 'une critique violente', ['un éloge excessif', 'une danse', 'un malentendu', 'une rumeur'], 'Diatribe = écrit ou discours très critique. Ne pas confondre avec dithyrambe (éloge enthousiaste).'],
  ['Quel est l’antonyme de <em>panégyrique</em> ?', 'Réquisitoire', ['Éloge', 'Apologie', 'Dithyrambe', 'Louange'], 'Panégyrique = éloge solennel ; éloge, apologie, dithyrambe, louange sont ses synonymes. Le réquisitoire est une accusation, donc son contraire.'],
  ['Le <em>verbiage</em> désigne…', 'des paroles creuses et abondantes', ['le silence', 'un vocabulaire précis', 'un vocabulaire riche', 'un jargon technique'], 'Le verbiage est un flot de mots qui ne dit rien (bavardage, délayage). Ne pas le confondre avec un vocabulaire riche.'],
  ['« Le courage n’est pas l’<em>apanage</em> des héros. » Apanage signifie…', 'Ce qui est propre à quelqu’un, son privilège', ['défaut', 'récompense', 'devoir', 'rareté'], 'L’apanage est ce qui appartient en propre à quelqu’un ou à un groupe. Le mot s’écrit avec un seul « p ».'],
  ['Une <em>gageure</em> est…', 'un défi presque irréalisable', ['une promesse non tenue', 'un gage mis en dépôt', 'un pari gagné', 'une petite fortune'], 'Gageure (prononcé « gajure ») : entreprise qui paraît impossible. C’est une gageure de tout terminer en deux jours.'],
  ['Que signifie <em>obérer</em> ?', 'Charger de dettes', ['Obéir', 'Enrichir', 'Libérer', 'Surveiller'], 'Obérer = grever une situation financière. Ne pas confondre avec obéir.'],
  ['Que signifie <em>édulcorer</em> au sens figuré ?', 'Atténuer, adoucir', ['Aggraver', 'Dissimuler', 'Rendre plus clair', 'Détailler'], 'Édulcorer un texte, c’est le rendre moins fort. Le sens propre (adoucir avec du sucre) se prolonge en « affadir ».'],
  ['Que signifie <em>escamoter</em> ?', 'Faire disparaître adroitement', ['Mettre en évidence', 'Raconter', 'Dépenser', 'Corriger'], 'Escamoter = faire disparaître d’un tour de main, au figuré éviter un problème. Aucun lien avec « expulser ».'],
  ['Que signifie <em>parangon</em> ?', 'Un modèle parfait', ['Un défaut majeur', 'Un rival', 'Un mélange', 'Un objet décoratif'], 'On dit « un parangon de vertu ». Le mot désigne un exemple accompli.'],
  ['Que signifie la locution « parler <em>sans ambages</em> » ?', 'Parler directement, sans détour', ['Parler à voix basse', 'Parler avec prudence', 'Parler longuement', 'Parler avec ironie'], 'Les ambages sont des détours de langage ; sans ambages = franchement, sans circonlocution.'],
  ['Que signifie <em>nonobstant</em> (langue juridique) ?', 'Malgré', ['Grâce à', 'À cause de', 'Sauf', 'Avant'], 'Nonobstant = malgré, en dépit de : nonobstant cette clause, le contrat reste valable.'],
  ['Qu’est-ce qu’un <em>prodrome</em> ?', 'Un signe avant-coureur', ['Une conséquence tardive', 'Un ensemble de symptômes', 'La cause principale', 'Un traitement'], 'Prodrome = signe annonciateur (d’une maladie, d’une crise). Un syndrome est un ensemble de symptômes : ne pas confondre.'],
  ['Un <em>corollaire</em> est…', 'une conséquence naturelle', ['une cause initiale', 'une contradiction', 'une hypothèse', 'une définition'], 'Un corollaire découle d’une proposition déjà établie : la hausse des prix est le corollaire de l’inflation.'],
  ['Que signifie <em>torpeur</em> ?', 'Un engourdissement', ['Une agitation', 'Une panique', 'Un enthousiasme', 'Une colère'], 'Torpeur = état d’engourdissement physique ou moral. Le contraire serait vivacité.'],
  ['Que signifie <em>marasme</em> ?', 'Une stagnation, un état de dépression', ['Une prospérité', 'Une zone humide', 'Une euphorie', 'Une compétition'], 'Marasme = état d’inactivité ou de crise (le marasme économique). Ne pas confondre avec marais.'],
  ['Que signifie <em>déliquescence</em> ?', 'La décadence', ['L’effervescence', 'La croissance', 'La brillance', 'La transparence'], 'Déliquescence = décomposition progressive, déclin (la déliquescence d’un régime).'],
  ['Un négociateur <em>aguerri</em> est un négociateur…', 'rompu aux difficultés', ['guéri', 'débutant', 'fatigué', 'belliqueux'], 'Aguerri = habitué aux épreuves, expérimenté. Son contraire est novice.'],
  ['Que signifie <em>pérorer</em> ?', 'Discourir avec emphase', ['Chanter faux', 'Se taire', 'Prier', 'Perdre son temps'], 'Pérorer = parler longuement et prétentieusement. Ne pas confondre avec la péroraison (conclusion d’un discours).'],
  ['Que signifie <em>tancer</em> ?', 'Réprimander', ['Tenter', 'Encourager', 'Féliciter', 'Lancer'], 'Tancer = gronder vivement. Aucun lien avec tenter.'],
  ['Que signifie <em>hégémonie</em> ?', 'Suprématie', ['Égalité', 'Alliance', 'Défaite', 'Équilibre'], 'L’hégémonie est la domination d’un État, d’un groupe sur les autres.'],
  ['Qu’est-ce qu’une <em>prérogative</em> ?', 'Un privilège attaché à une fonction', ['Une obligation', 'Une sanction', 'Une erreur', 'Une prière'], 'Une prérogative est un droit particulier lié à une charge ou à un rang.'],
  ['Quel est l’antonyme de <em>ostensible</em> ?', 'Dissimulé', ['Visible', 'Apparent', 'Manifeste', 'Affiché'], 'Ostensible = qu’on montre sans se cacher ; visible, apparent, manifeste, affiché sont ses synonymes. Le contraire est dissimulé.'],
  ['Que signifie <em>morigéner</em> ?', 'Réprimander sévèrement', ['Louer', 'Soigner', 'Modérer', 'Rassurer'], 'Morigéner = faire la leçon, sermonner. Ne pas confondre avec modérer.'],
  ['Que signifie <em>forfanterie</em> ?', 'Vantardise', ['Trahison', 'Modestie', 'Fraude', 'Crainte'], 'La forfanterie est la fanfaronnade. Ne pas confondre avec forfaiture (violation d’un devoir de sa charge).'],
  ['Qu’est-ce qu’un <em>imbroglio</em> ?', 'Une situation confuse', ['Un marché italien', 'Un accord', 'Un débat', 'Une bonne humeur'], 'Mot italien : situation embrouillée, intrigue emmêlée.'],
  ['Qu’est-ce qu’un <em>quiproquo</em> ?', 'Un malentendu', ['Une moquerie', 'Un mensonge', 'Une équivalence', 'Une querelle'], 'Quiproquo = erreur qui fait prendre une chose pour une autre. À ne pas confondre avec quolibet (raillerie).'],
  ['Que signifie <em>gabegie</em> ?', 'Un gaspillage dû à une mauvaise gestion', ['Une escroquerie', 'Une bagarre', 'Une rumeur', 'Une plaisanterie'], 'La gabegie est un désordre dans la gestion, avec gaspillage de moyens.'],
  ['Que signifie <em>thésauriser</em> ?', 'Amasser de l’argent', ['Dépenser', 'Lire des traités', 'Prêter', 'Compter'], 'Thésauriser = accumuler des richesses sans les employer (trésor). Son contraire est dilapider.'],
  ['Quel est l’antonyme de <em>dilapider</em> ?', 'Épargner', ['Gaspiller', 'Dissiper', 'Engloutir', 'Prodiguer'], 'Dilapider = dépenser follement ; gaspiller, dissiper, engloutir, prodiguer sont proches. Le contraire est épargner.']
];

export const TM_EXPR_VOCAB_QCM = exprBuildQcm(VOCAB_ROWS, 0);

// ---------------------------------------------------------------------------
// 4. QCM DE RÈGLES (grammaire, orthographe, conjugaison, concordance)
// Ligne auto  = [énoncé, bonne réponse, [4 mauvaises], explication]
// Ligne fixe  = [énoncé, [5 options dans l’ordre], index, explication]
// ---------------------------------------------------------------------------

var REGLES_ROWS = [
  // ---- Accords et grammaire --------------------------------------------
  ['<strong>Quel que.</strong> Laquelle de ces phrases est correcte ?', 'Quels que soient les résultats, nous poursuivrons nos efforts.', ['Quelque soient les résultats, nous poursuivrons nos efforts.', 'Quel que soit les résultats, nous poursuivrons nos efforts.', 'Quelles que soient les résultats, nous poursuivrons nos efforts.', 'Quelques soient les résultats, nous poursuivrons nos efforts.'], 'Quel que s’écrit en deux mots devant être au subjonctif et « quel » s’accorde avec le sujet (résultats, masculin pluriel) : quels que soient. « Quelque » en un mot est un adverbe ou un adjectif indéfini, jamais suivi de « soient ».'],
  ['<strong>Quelque + nombre.</strong> Laquelle de ces phrases est correcte ?', 'Quelque deux cents personnes assistaient à la réunion.', ['Quelques deux cents personnes assistaient à la réunion.', 'Quelque deux cent personnes assistaient à la réunion.', 'Quel que deux cents personnes assistaient à la réunion.', 'Quelques deux cent personnes assistaient à la réunion.'], 'Devant un nombre, « quelque » signifie « environ » : adverbe invariable. Et « deux cents » prend un s, car cent est multiplié et n’est suivi d’aucun autre nombre.'],
  ['<strong>Quelque… que.</strong> Laquelle de ces phrases est correcte ?', 'Quelque intelligents qu’ils soient, ils ont échoué.', ['Quelques intelligents qu’ils soient, ils ont échoué.', 'Quel que intelligents qu’ils soient, ils ont échoué.', 'Quelque intelligent qu’ils soient, ils ont échoué.', 'Quelles que intelligents qu’ils soient, ils ont échoué.'], 'Quelque + adjectif + que (= si… que) : « quelque » est un adverbe invariable, mais l’adjectif s’accorde avec le sujet (ils : intelligents).'],
  ['<strong>Participe passé avec avoir.</strong> Laquelle de ces phrases est correcte ?', 'Les lettres que j’ai écrites hier sont parties.', ['Les lettres que j’ai écrit hier sont parties.', 'Les lettres que j’ai écrits hier sont parties.', 'Les lettres que j’ai écrite hier sont parties.', 'Les lettres que j’ai écrites hier sont parti.'], 'Avec avoir, le participe s’accorde avec le COD placé avant : « que » (= les lettres, féminin pluriel) → écrites. Avec être, « sont parties » s’accorde avec le sujet.'],
  ['Complétez : « Elles se sont ___ à la tête de l’entreprise pendant des années. »', ['succédé', 'succédées', 'succédés', 'succédée', 'succéder'], 0, 'Succéder à quelqu’un : le « se » est un COI, donc le participe reste invariable (comme se parler, se plaire, se nuire, se sourire).'],
  ['Complétez : « Elles se sont ___ les mains avant de passer à table. »', ['lavées', 'lavé', 'lavés', 'lavée', 'lavant'], 1, 'Le COD (les mains) est placé après le verbe : le participe passé reste invariable. Le « se » est alors COI (laver les mains à soi).'],
  ['<strong>Accord du verbe (la plupart).</strong> Laquelle de ces phrases est correcte ?', 'La plupart des candidats ont réussi l’épreuve.', ['La plupart des candidats a réussi l’épreuve.', 'La plupart des candidats ont réussis l’épreuve.', 'La plupart des candidats ont réussie l’épreuve.', 'La plupart des candidats est réussi l’épreuve.'], '« La plupart » suivi d’un nom pluriel entraîne l’accord du verbe au pluriel (ont réussi). Le participe passé avec avoir ne s’accorde pas ici (COD après).'],
  ['<strong>Accord du verbe (plus d’un).</strong> Laquelle de ces phrases est correcte ?', 'Plus d’un candidat a échoué à l’épreuve.', ['Plus d’un candidat ont échoué à l’épreuve.', 'Plus d’un candidats a échoué à l’épreuve.', 'Plus d’un candidats ont échoué à l’épreuve.', 'Plus d’une candidat a échoué à l’épreuve.'], '« Plus d’un » est suivi d’un nom singulier et le verbe est au singulier (contrairement à « moins de deux », qui appelle le pluriel).'],
  ['<strong>C’est moi qui…</strong> Laquelle de ces phrases est correcte ?', 'C’est moi qui ai raison dans cette affaire.', ['C’est moi qui a raison dans cette affaire.', 'C’est moi qui as raison dans cette affaire.', 'C’est moi qui avez raison dans cette affaire.', 'C’est moi qui ont raison dans cette affaire.'], 'Le verbe qui suit le relatif « qui » s’accorde avec son antécédent « moi » : première personne, donc « ai ».'],
  ['<strong>Sujets de personnes différentes.</strong> Laquelle de ces phrases est correcte ?', 'Toi et moi, nous irons voir ce film.', ['Toi et moi, vous irez voir ce film.', 'Toi et moi, ils iront voir ce film.', 'Toi et moi, tu iras voir ce film.', 'Toi et moi, j’irai voir ce film.'], 'Quand les sujets sont de personnes différentes, la première personne l’emporte : toi + moi = nous.'],
  ['<strong>Tout adverbe.</strong> Laquelle de ces phrases est correcte ?', 'Elle est toute honteuse de son retard.', ['Elle est tout honteuse de son retard.', 'Elle est tous honteuse de son retard.', 'Elle est toutes honteuse de son retard.', 'Elle est tout honteuses de son retard.'], 'Devant un adjectif féminin commençant par une consonne ou un h aspiré (honteuse), « tout » s’accorde (toute). Devant une voyelle, il reste invariable : elle est tout étonnée.'],
  ['<strong>Nombres (1).</strong> Quelle est la bonne orthographe ?', 'Trois cents millions deux cent quatre-vingt mille quatre cents euros.', ['Trois cent millions deux cent quatre-vingt mille quatre cents euros.', 'Trois cents millions deux cents quatre-vingts mille quatre cents euros.', 'Trois cents millions deux cent quatre-vingt mille quatre cent euros.', 'Trois cents millions deux cent quatre-vingts mille quatre cents euros.'], 'Cent prend un s s’il est multiplié et non suivi d’un autre nombre : trois cents millions (million est un nom), quatre cents euros. Mais « deux cent quatre-vingt mille » : cent est suivi d’un nombre, et quatre-vingt reste sans s devant mille (invariable).'],
  ['<strong>Nombres (2).</strong> Quelle est la bonne orthographe ?', 'Il a payé quatre-vingts euros pour deux cents mètres de câble.', ['Il a payé quatre-vingt euros pour deux cents mètres de câble.', 'Il a payé quatre-vingts euros pour deux cent mètres de câble.', 'Il a payé quatre vingts euros pour deux cents mètres de câble.', 'Il a payé quatres-vingts euros pour deux cents mètres de câble.'], '« Quatre-vingts » et « deux cents » prennent un s : vingt et cent sont multipliés et ne sont suivis d’aucun nombre (euros, mètres sont des noms). Le trait d’union relie quatre et vingts.'],
  ['<strong>Couleurs (1).</strong> Laquelle de ces phrases est correcte ?', 'Elle a acheté des robes rose pâle et des chaussettes marron.', ['Elle a acheté des robes roses pâles et des chaussettes marron.', 'Elle a acheté des robes rose pâle et des chaussettes marrons.', 'Elle a acheté des robes rose pâles et des chaussettes marron.', 'Elle a acheté des robes roses pâle et des chaussettes marrons.'], '« Rose pâle » est une couleur composée (nuance) : invariable. « Marron » est un nom employé comme adjectif de couleur : invariable. Rose seul s’accorde (des joues roses) ; marron ne s’accorde jamais.'],
  ['<strong>Couleurs (2).</strong> Laquelle de ces phrases est correcte ?', 'Des rideaux mauves, des joues roses et des chaussettes orange.', ['Des rideaux mauve, des joues roses et des chaussettes orange.', 'Des rideaux mauves, des joues rose et des chaussettes orange.', 'Des rideaux mauves, des joues roses et des chaussettes oranges.', 'Des rideaux mauve, des joues rose et des chaussettes oranges.'], 'Mauve et rose s’accordent (exceptions : rose, mauve, pourpre, écarlate, fauve, incarnat, vermeil). Orange est un nom employé comme couleur : invariable.'],
  ['<strong>Couleurs (3).</strong> Laquelle de ces phrases est correcte ?', 'Elle portait des gants crème et des chaussures bleu marine.', ['Elle portait des gants crèmes et des chaussures bleu marine.', 'Elle portait des gants crème et des chaussures bleues marines.', 'Elle portait des gants crème et des chaussures bleu marines.', 'Elle portait des gants crèmes et des chaussures bleues marine.'], '« Crème » est un nom employé comme couleur (invariable), « bleu marine » est une couleur composée (invariable).'],
  ['<strong>Couleurs (4).</strong> Laquelle de ces phrases est correcte ?', 'Les rubans pourpres et les rideaux mauves flottaient dans la salle.', ['Les rubans pourpre et les rideaux mauves flottaient dans la salle.', 'Les rubans pourpres et les rideaux mauve flottaient dans la salle.', 'Les rubans pourpre et les rideaux mauve flottaient dans la salle.', 'Les rubans pourpres et les rideaux mauves flottait dans la salle.'], 'Pourpre et mauve font partie des exceptions qui s’accordent comme de vrais adjectifs. Le verbe « flottaient » s’accorde au pluriel avec le sujet.'],
  ['<strong>Pluriels en -ou.</strong> Laquelle de ces phrases est correcte ?', 'Des bijoux, des cailloux et des genoux.', ['Des bijous, des cailloux et des genoux.', 'Des bijoux, des caillous et des genoux.', 'Des bijoux, des cailloux et des genous.', 'Des bijoux, des cailloux et des verroux.'], 'Sept noms en -ou prennent un x : bijou, caillou, chou, genou, hibou, joujou, pou. Verrou fait verrous, comme la plupart des noms en -ou.'],
  ['<strong>Pluriels en -al.</strong> Laquelle de ces phrases est correcte ?', 'Des festivals, des bals et des chevaux.', ['Des festivaux, des bals et des chevaux.', 'Des festivals, des baux et des chevaux.', 'Des festivals, des bals et des chevals.', 'Des festivaux, des baux et des chevaux.'], 'Les noms en -al font -aux (cheval → chevaux) sauf bal, festival, carnaval, chacal, récital, régal… qui prennent un s. « Baux » est le pluriel de bail.'],
  ['<strong>Participe présent ou adjectif.</strong> Laquelle de ces phrases est correcte ?', 'Convainquant ses collègues, elle a présenté un projet convaincant.', ['Convaincant ses collègues, elle a présenté un projet convainquant.', 'Convaincant ses collègues, elle a présenté un projet convaincant.', 'Convainquant ses collègues, elle a présenté un projet convainquant.', 'Convainquants ses collègues, elle a présenté un projet convaincant.'], 'Le participe présent (action, invariable) s’écrit « convainquant » (-quant). L’adjectif (qualité, accord possible) s’écrit « convaincant » (-cant) : un projet convaincant, des preuves convaincantes.'],
  ['Complétez : « En ___ avec ses clients par courriel, l’entreprise a gagné en réactivité. »', ['communicant', 'communiquant', 'communicante', 'communiquants', 'communiquent'], 1, 'Après « en », on emploie le participe présent, invariable : « communiquant » (-quant). « Communicant » est l’adjectif ou le nom (des vases communicants, un bon communicant).'],
  ['Complétez : « Les vases ___ sont un classique de la physique. »', ['communiquants', 'communicant', 'communicants', 'communiquent', 'communiquantes'], 2, 'Ici, l’adjectif verbal s’accorde avec « vases » et s’écrit en -cant : communicants.'],
  ['<strong>Adverbes en -ment.</strong> Laquelle de ces phrases est correcte ?', 'Il a agi sciemment, mais lentement et prudemment.', ['Il a agi sciament, mais lentement et prudemment.', 'Il a agi sciemment, mais lentemment et prudemment.', 'Il a agi sciemment, mais lentement et prudament.', 'Il a agi sciemment, mais lentement et prudement.'], 'Prudent → prudemment (-ent → -emment). « Sciemment » et « lentement » sont des exceptions à retenir (un seul m après « en »).'],
  ['Complétez : « ___ tu fasses, il ne sera jamais content. »', ['Quoi que', 'Quoique', 'Quel que', 'Quelque', 'Quoi qu’'], 0, 'Quoi que (deux mots) = quelle que soit la chose que (ici COD de fasses). « Quoique » (un mot) = bien que, il n’est pas possible ici.'],
  ['Complétez : « Il est très accueillant, ___ un peu timide. »', ['quoique', 'quoi que', 'quoiqu’', 'quoi qu’', 'quel que'], 2, '« Quoique » = bien que ; devant « un », il s’élide : quoiqu’un peu timide. « Quoi que » en deux mots signifierait « quelle que soit la chose que ».'],
  ['<strong>Quant à.</strong> Laquelle de ces phrases est correcte ?', 'Quant à moi, je préfère rester ici.', ['Quand à moi, je préfère rester ici.', 'Quant a moi, je préfère rester ici.', 'Qu’en à moi, je préfère rester ici.', 'Quand a moi, je préfère rester ici.'], '« Quant à » (= en ce qui concerne) s’écrit avec un t final et un accent sur le à préposition. « Quand » est une conjonction ou un adverbe de temps.'],
  ['<strong>Leur / leurs.</strong> Laquelle de ces phrases est correcte ?', 'Ils ont perdu leurs clés ; je leur ai prêté les miennes.', ['Ils ont perdu leur clés ; je leur ai prêté les miennes.', 'Ils ont perdu leurs clés ; je leurs ai prêté les miennes.', 'Ils ont perdu leur clés ; je leurs ai prêté les miennes.', 'Ils ont perdu leurs clé ; je leur ai prêté les miennes.'], '« Leurs clés » : le déterminant possessif s’accorde avec le nom pluriel. « Je leur ai prêté » : leur est ici un pronom (= à eux), invariable.'],
  ['<strong>Tel que.</strong> Complétez : « Les fruits ___ la pomme et la poire sont riches en vitamines. »', ['tels que', 'tel que', 'telles que', 'tels qu’', 'tel quel'], 0, '« Tel que » introduit des exemples et « tel » s’accorde avec le nom auquel il se rapporte : fruits (masculin pluriel) → tels que.'],
  ['<strong>Demi.</strong> Laquelle de ces phrases est correcte ?', 'Ils sont partis à une heure et demie, après une demi-heure de retard.', ['Ils sont partis à une heure et demi, après une demi-heure de retard.', 'Ils sont partis à une heure et demie, après une demie-heure de retard.', 'Ils sont partis à une heure et demi, après une demie-heure de retard.', 'Ils sont partis à une heure et demis, après une demi heure de retard.'], 'Placé après le nom, « demi » s’accorde en genre (une heure et demie). Placé avant le nom avec trait d’union, il reste invariable : une demi-heure.'],
  ['<strong>Excepté.</strong> Laquelle de ces phrases est correcte ?', 'Tous étaient présents, ma sœur exceptée.', ['Tous étaient présents, ma sœur excepté.', 'Tous étaient présents, exceptée ma sœur.', 'Tous étaient présents, ma sœur exceptés.', 'Tous étaient présents, ma sœur excepter.'], 'Après le nom, « excepté » s’accorde (ma sœur exceptée). Avant le nom, il est invariable (excepté ma sœur) : « exceptée ma sœur » est donc fautif.'],

  // ---- Homophones et paronymes ----------------------------------------
  ['<strong>Près / prêt.</strong> Laquelle de ces phrases est correcte ?', 'Il est prêt à partir : sa valise est près de la porte.', ['Il est près à partir : sa valise est prêt de la porte.', 'Il est près à partir : sa valise est près de la porte.', 'Il est prêt à partir : sa valise est prêt de la porte.', 'Il est prêt à partir : sa valise est prés de la porte.'], '« Prêt à » = disposé à (adjectif, accent circonflexe). « Près de » = à proximité (préposition, accent grave).'],
  ['<strong>Tache / tâche.</strong> Laquelle de ces phrases est correcte ?', 'Cette tâche est ingrate : il faut effacer une tache d’encre.', ['Cette tache est ingrate : il faut effacer une tâche d’encre.', 'Cette tache est ingrate : il faut effacer une tache d’encre.', 'Cette tâche est ingrate : il faut effacer une tâche d’encre.', 'Cette tâche est ingrate : il faut effacer une tace d’encre.'], 'Une tâche (avec accent) est un travail à accomplir. Une tache (sans accent) est une souillure.'],
  ['<strong>Censé / sensé.</strong> Laquelle de ces phrases est correcte ?', 'Un homme sensé n’est pas censé ignorer la loi.', ['Un homme censé n’est pas sensé ignorer la loi.', 'Un homme sensé n’est pas sensé ignorer la loi.', 'Un homme censé n’est pas censé ignorer la loi.', 'Un homme sensé n’est pas sencé ignorer la loi.'], 'Sensé = qui a du bon sens (un homme sensé). Censé = supposé (il est censé connaître la loi). On peut remplacer « censé » par « supposé ».'],
  ['<strong>Davantage.</strong> Complétez : « Ce candidat travaille ___ que son rival. »', ['davantage', 'd’avantage', 'd’avantages', 'de avantage', 'davantages'], 0, '« Davantage » (en un mot) signifie « plus » : il travaille plus que son rival. « D’avantage » (de + avantage) signifie « de profit » et n’est pas possible ici.'],
  ['Complétez : « Ces deux modèles sont ___ l’un de l’autre. »', ['différents', 'différends', 'différant', 'diffèrent', 'différence'], 0, '« Différent » est un adjectif (distinct) et s’accorde ici (modèles → différents). « Différend » est un nom (litige).'],
  ['Complétez : « Cet écrivain, très ___, a publié plus de soixante romans. »', ['prolifique', 'prolixe', 'prolifère', 'prolixité', 'prolifiquent'], 0, 'Prolifique = qui produit beaucoup (un auteur prolifique). Prolixe = qui parle ou écrit trop longuement : le piège de ressemblance du concours.'],
  ['Complétez : « Dans la ___ économique actuelle, les entreprises hésitent à investir. »', ['conjoncture', 'conjecture', 'conjonction', 'conjoncteur', 'conjectures'], 0, 'La conjoncture désigne la situation économique du moment. Une conjecture est une supposition, une hypothèse non vérifiée.'],
  ['Complétez : « Un danger ___ menaçait le village. »', ['imminent', 'éminent', 'immanent', 'imminant', 'éminant'], 0, 'Imminent = qui va se produire très bientôt. Éminent = remarquable (un éminent professeur) ; immanent = inhérent.'],
  ['Complétez : « Le cambrioleur est entré par ___. »', ['effraction', 'infraction', 'infection', 'effusion', 'affraction'], 0, 'L’effraction est le bris d’une clôture, d’une serrure. L’infraction est la violation de la loi : le cambrioleur commet une infraction en entrant par effraction.'],
  ['Complétez : « Une ___ frauduleuse entre les deux entreprises a faussé l’appel d’offres. »', ['collusion', 'collision', 'collation', 'collection', 'colluvion'], 0, 'La collusion est une entente secrète au détriment d’un tiers. La collision est un choc ; la collation un léger repas.'],
  ['Complétez : « Les auteurs de l’attentat ont ___ leur crime de nuit. »', ['perpétré', 'perpétué', 'perpétrer', 'perpétrés', 'perpétrée'], 0, 'Perpétrer = commettre (un crime). Perpétuer = rendre perpétuel. Le COD « leur crime » est placé après : le participe reste invariable.'],
  ['Quitter son pays pour s’installer ailleurs, c’est…', ['émigrer', 'immigrer', 'émerger', 'immerger', 'emmigrer'], 0, 'Émigrer = quitter son pays ; immigrer = arriver dans un pays pour s’y installer. Les deux verbes se distinguent par le préfixe (é- : sortir ; im- : entrer).'],
  ['Complétez : « Les manifestants ont fait ___ dans la salle du conseil. »', ['irruption', 'éruption', 'interruption', 'corruption', 'rupture'], 0, 'Faire irruption = entrer brusquement et avec violence. Une éruption est celle d’un volcan ou des boutons.'],
  ['Complétez : « Le propriétaire a décidé d’___ le mur d’un mètre. »', ['exhausser', 'exaucer', 'exhumer', 'exhaler', 'exhorter'], 0, 'Exhausser = rendre plus haut. Exaucer = satisfaire un vœu (exaucer une prière). Exhumer = déterrer.'],
  ['Complétez : « Le grenier était ___ de rats. »', ['infesté', 'infecté', 'infixé', 'infirmé', 'infusé'], 0, 'Infester = envahir en grand nombre (un grenier infesté de rats). Infecter = contaminer (une plaie infectée).'],

  // ---- Orthographe d’usage --------------------------------------------
  ['<strong>Orthographe (1).</strong> Quelle est la seule orthographe correcte ?', 'apparemment', ['apparement', 'apparamment', 'aparemment', 'apparament'], 'Apparent → apparemment (adjectif en -ent donne -emment ; deux p et deux m).'],
  ['<strong>Orthographe (2).</strong> Quelle est la seule orthographe correcte ?', 'exorbitant', ['exhorbitant', 'exorbittant', 'éxorbitant', 'exorbitent'], 'Exorbitant s’écrit sans h (comme exubérant, exaucer, exaspérer), avec un seul t et la terminaison -ant.'],
  ['<strong>Orthographe (3).</strong> Quelle est la seule orthographe correcte ?', 'hypoténuse', ['hypothénuse', 'hypotenuse', 'hippoténuse', 'hypoténuze'], 'Hypoténuse n’a pas de h après le t et prend un accent aigu sur le é.'],
  ['<strong>Orthographe (4).</strong> Quelle est la seule orthographe correcte ?', 'dilemme', ['dilemne', 'dilème', 'dillemme', 'dilhemme'], 'Dilemme prend un seul l et deux m (comme gemme, flemme).'],
  ['<strong>Orthographe (5).</strong> Quelle est la seule orthographe correcte ?', 'rythme', ['rhythme', 'rytme', 'ritme', 'rythmhe'], 'Rythme : y + th, sans h après le r (la graphie « rhythme » est ancienne).'],
  ['<strong>Orthographe (6).</strong> Quelle est la seule orthographe correcte ?', 'gageure', ['gajure', 'gageur', 'gagure', 'gajeure'], 'Gageure se prononce « gajure » mais s’écrit avec un e après le g (on garde le « g » doux).'],
  ['<strong>Orthographe (7).</strong> Quelle est la seule orthographe correcte ?', 'accueillir', ['acceuillir', 'accuellir', 'acueillir', 'accueilir'], 'Accueillir : deux c (ac-), puis cueillir (c-u-e-i-ll). On retient : on cueille, on accueille.'],
  ['<strong>Accents (1).</strong> Laquelle de ces phrases est correcte ?', 'Il lâchait prise sous la pression.', ['Il lachait prise sous la pression.', 'Il làchait prise sous la pression.', 'Il lâchat prise sous la pression.', 'Il lâchais prise sous la pression.'], 'Lâcher et toute sa famille gardent l’accent circonflexe sur le « a » : lâchait (imparfait, 3e personne du singulier).'],
  ['<strong>Accents (2).</strong> Laquelle de ces phrases est correcte ?', 'Le maintien de l’ordre est assuré.', ['Le maintient de l’ordre est assuré.', 'Le maintiens de l’ordre est assuré.', 'Le mintien de l’ordre est assuré.', 'Le maintien de l’ordre sont assuré.'], '« Le maintien » est un nom (sans t). Le verbe donne « il maintient ». Ici le verbe « est assuré » s’accorde avec le singulier « maintien ».'],
  ['<strong>Trait d’union (1).</strong> Laquelle de ces phrases est correcte ?', 'Il conteste le bien-fondé de cette décision.', ['Il conteste le bien fondé de cette décision.', 'Il conteste le bienfondé de cette décision.', 'Il conteste le bien-fonder de cette décision.', 'Il conteste le bien-fondés de cette décision.'], 'Le nom « bien-fondé » (légitimité) prend un trait d’union. L’adjectif s’écrit sans (une critique bien fondée).'],
  ['<strong>Trait d’union (2).</strong> Laquelle de ces phrases est correcte ?', 'Cette pièce s’ouvre de plain-pied sur le jardin.', ['Cette pièce s’ouvre de plein pied sur le jardin.', 'Cette pièce s’ouvre de plain pied sur le jardin.', 'Cette pièce s’ouvre de plein-pied sur le jardin.', 'Cette pièce s’ouvre de plains-pieds sur le jardin.'], 'On écrit de plain-pied (avec « plain » ancien adjectif pour « plat » et un trait d’union).'],
  ['<strong>Trait d’union (3).</strong> Laquelle de ces phrases est correcte ?', 'Il est végétarien, c’est-à-dire qu’il ne mange pas de viande.', ['Il est végétarien, c’est à dire qu’il ne mange pas de viande.', 'Il est végétarien, cest-à-dire qu’il ne mange pas de viande.', 'Il est végétarien, c’est-à dire qu’il ne mange pas de viande.', 'Il est végétarien, c’est-a-dire qu’il ne mange pas de viande.'], 'La locution « c’est-à-dire » prend deux traits d’union et l’accent grave sur le « à » préposition.'],

  // ---- Compter les fautes ---------------------------------------------
  ['Combien de fautes d’orthographe et de grammaire le texte suivant contient-il ?<br><br><em>« Quoique la direction ait été prévenue, elle n’a prit aucune mesure. Malgré ses promesses, les employés se sont senti trahis, et certain d’entre eux ont démissionner. »</em>', ['2', '3', '4', '5', '6'], 2, 'Quatre fautes : « prit » → pris ; « senti » → sentis (COD « se » placé avant) ; « certain » → certains ; « démissionner » → démissionné.'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Cette entreprise, dont les bénéfices ont triplés, à décidé d’embaucher quelques cadres. Ceux-ci, après qu’ils soient formés, seront affectés à l’étranger. »</em>', ['2', '3', '4', '5', '6'], 1, 'Trois fautes : « triplés » → triplé (COD absent, invariable) ; « à décidé » → a décidé ; « après qu’ils soient formés » → après qu’ils auront été formés (après que + indicatif ; ici futur antérieur).'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Les ouvriers, épuisés par la chaleur, ont continués leur travail. Malgrès le mauvais temps, ils se sont aperçus que le chantier devait être finis avant la nuit, et ils se sont mit à courrir. »</em>', ['2', '3', '4', '5', '6'], 3, 'Cinq fautes : continués → continué (COD après) ; malgrès → malgré ; finis → fini (chantier, masculin singulier) ; mit → mis ; courrir → courir.'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Il y a quelques années, mon grand-père nous à raconté comment il avait faillit se noyer dans la rivière. Il c’est débatu pendant dix minutes avant que des pêcheurs ne le sauve, et il à gardé de cette mésaventure une peur panique de l’eau. »</em>', ['2', '3', '4', '5', '6'], 4, 'Six fautes : « à raconté » → a ; « faillit » → failli ; « c’est » → s’est ; « débatu » → débattu ; « sauve » → sauvent (subjonctif, des pêcheurs) ; « il à gardé » → a.'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Les résultats, que nous espérions meilleur, sont tout de même encourageant : le chiffre d’affaires a progressé de quatre pour cent. »</em>', ['2', '3', '4', '5', '6'], 0, 'Deux fautes : « meilleur » → meilleurs (attribut du COD « que » = résultats) ; « encourageant » → encourageants (attribut du sujet pluriel).'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Les manifestants s’avançaient lentement vers la mairie. Plusieurs d’entre-eux portaient des banderoles rose, et chacun criaient son indignation ; puis ils ont réclamer la démission du maire. »</em>', ['2', '3', '4', '5', '6'], 2, 'Quatre fautes : « entre-eux » → entre eux (pas de trait d’union) ; « rose » → roses (couleur qui s’accorde) ; « criaient » → criait (chacun) ; « réclamer » → réclamé.'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« L’orage qui a éclaté hier soir à causé de nombreux dégâts. Plusieurs arbres se sont abattu sur les voitures, et les pompiers sont intervenu toute la nuit. »</em>', ['2', '3', '4', '5', '6'], 1, 'Trois fautes : « à causé » → a causé ; « abattu » → abattus (le « se » est COD placé avant) ; « intervenu » → intervenus (être → accord avec le sujet).'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Cet auteur, éminement connu pour ses romans, a recut plusieurs prix. Son dernier livre, qu’il à écrit en quelque semaines, traite de la solitude, et les critiques l’ont acceuilli avec enthousiasme. »</em>', ['2', '3', '4', '5', '6'], 3, 'Cinq fautes : éminement → éminemment ; recut → reçu ; à écrit → a écrit ; quelque semaines → quelques semaines ; acceuilli → accueilli.'],
  ['Combien de fautes le texte suivant contient-il ?<br><br><em>« Hier, mes cousines sont venu me voir. Elles m’ont raconté les aventures qu’elles ont vécu pendant leur voyage, et nous avons beaucoup rit. »</em>', ['2', '3', '4', '5', '6'], 1, 'Trois fautes : « venu » → venues (être, sujet féminin pluriel) ; « vécu » → vécues (COD « que » = aventures, placé avant) ; « rit » → ri (participe passé de rire).'],

  // ---- Phrase fautive / phrase correcte (questions types) -------------
  ['Une seule de ces phrases est <strong>fautive</strong>. Laquelle ?', 'Les rideaux de la pièce sont écarlate.', ['Quel que soit le prix, nous achèterons cette toile.', 'Ils se sont téléphoné toute la soirée.', 'Les cerises que j’ai cueillies sont mûres.', 'Après qu’il fut arrivé, la réunion commença.'], 'Écarlate fait partie des couleurs qui s’accordent : « écarlates ». Les autres phrases sont correctes : quel que soit, se téléphoner (COI, invariable), cueillies (COD avant), après que + indicatif (passé simple).'],
  ['Une seule de ces phrases est <strong>fautive</strong> (différend / différent). Laquelle ?', ['Un différend les oppose depuis longtemps.', 'Il est censé arriver à midi.', 'Cet homme sensé a refusé.', 'Ces deux jumeaux ont un caractère différend.', 'Il travaille davantage qu’avant.'], 3, '« Un caractère différent » est correct. « Différend » (avec -d) est un nom (litige) ; il ne peut pas qualifier un caractère.'],
  ['Une seule de ces phrases est <strong>fautive</strong> (tel que, demi). Laquelle ?', ['Quant à lui, il préfère rester.', 'Elle est arrivée à midi et demi.', 'Ils ont remis leur rapport hier.', 'Ce sont des fruits tel que la pomme et la poire.', 'Il pleuvait ; nous sommes néanmoins sortis.'], 3, '« Tel » s’accorde avec le nom qu’il qualifie : des fruits tels que la pomme. Les autres phrases sont correctes (midi est masculin : midi et demi).'],
  ['Une seule de ces phrases est <strong>fautive</strong> (impératif). Laquelle ?', ['Sache que je t’attends.', 'Prends-en une part.', 'Parle-lui franchement.', 'Ouvre la porte, s’il te plaît.', 'Sois patient et aies confiance en toi.'], 4, 'À l’impératif, « avoir » fait aie (et non aies) à la deuxième personne du singulier : aie confiance. Sois, sache, ouvre, parle sont corrects.'],
  ['Laquelle de ces phrases est la <strong>seule correcte</strong> (bien que) ?', 'Bien qu’il soit fatigué, il poursuit son travail.', ['Malgré qu’il soit fatigué, il poursuit son travail.', 'Bien qu’il est fatigué, il poursuit son travail.', 'Quoiqu’il serait fatigué, il poursuit son travail.', 'Bien qu’il sera fatigué, il poursuit son travail.'], '« Bien que » est suivi du subjonctif : qu’il soit. « Malgré que » est considéré comme incorrect au concours (sauf « malgré que j’en aie »).'],
  ['<strong>Pléonasme.</strong> Laquelle de ces phrases contient un pléonasme ?', 'Il a prévu d’avance toutes les difficultés.', ['Elle est descendue au sous-sol.', 'Ils ont gravi la colline.', 'Nous sortirons à l’aube.', 'Il est rentré précipitamment.'], 'Prévoir, c’est déjà voir à l’avance : « prévoir d’avance » est un pléonasme. Les autres phrases n’ont pas de redondance.'],
  ['<strong>Pléonasme (2).</strong> Laquelle de ces phrases ne contient <strong>aucun</strong> pléonasme ?', 'Elle a reculé de trois pas.', ['Il faut s’entraider mutuellement.', 'Ils collaborent ensemble sur ce projet.', 'Au jour d’aujourd’hui, rien n’est réglé.', 'Puis ensuite, ils sont partis.'], '« S’entraider mutuellement », « collaborer ensemble », « au jour d’aujourd’hui » et « puis ensuite » sont redondants. « Reculer de trois pas » n’en contient pas.'],

  // ---- Conjugaison, modes et concordance ------------------------------
  ['<strong>Hypothèse.</strong> Laquelle de ces phrases est correcte ?', 'Si j’avais su, je ne serais pas venu.', ['Si j’aurais su, je ne serais pas venu.', 'Si je saurais, je ne serais pas venu.', 'Si j’avais su, je ne venais pas.', 'Si j’avais su, je ne viendrai pas.'], 'Après « si » (hypothèse), jamais de conditionnel : plus-que-parfait (j’avais su), puis conditionnel passé dans la principale (je ne serais pas venu).'],
  ['<strong>Au cas où.</strong> Laquelle de ces phrases est correcte ?', 'Au cas où il viendrait, préviens-moi.', ['Au cas où il vienne, préviens-moi.', 'Au cas où il viendra, préviens-moi.', 'Au cas où il vient, préviens-moi.', 'Au cas où il vint, préviens-moi.'], '« Au cas où » est suivi du conditionnel (il viendrait). Ni subjonctif, ni futur, ni présent, ni passé simple.'],
  ['<strong>Futur antérieur.</strong> Complétez : « Demain, à cette heure-ci, je ___ déjà arrivé. »', ['serai', 'serais', 'étais', 'fus', 'sois'], 0, 'On exprime un fait futur accompli avant un autre : futur antérieur (je serai arrivé). « Serais » est un conditionnel, il demanderait une condition (si…).'],
  ['<strong>Conditionnel passé.</strong> Complétez : « Si tu m’avais prévenu, je ___ venu. »', ['serai', 'serais', 'fus', 'étais', 'sois'], 1, 'Après « si » au plus-que-parfait, la principale est au conditionnel passé : je serais venu (et non « je serai » qui est un futur).'],
  ['<strong>Fit / fût.</strong> Complétez : « Le maire ___ un discours puis s’en alla. »', ['fit', 'fît', 'fut', 'fût', 'fis'], 0, 'Le récit est au passé simple : il fit (sans accent). « Fît » est l’imparfait du subjonctif (qu’il fît).'],
  ['<strong>Fit / fît (2).</strong> Complétez : « Il fallait qu’il ___ preuve d’une grande prudence. »', ['fit', 'fît', 'faisait', 'fera', 'ferait'], 1, 'Après « il fallait que », on emploie un subjonctif (imparfait en concordance stricte) : qu’il fît. L’accent circonflexe le distingue du passé simple « fit ».'],
  ['<strong>Imparfait du subjonctif.</strong> Complétez : « Nous aurions voulu qu’il ___ plus attentif. »', ['fût', 'fut', 'serait', 'était', 'sera'], 0, 'Après un verbe de volonté (vouloir que) il faut le subjonctif : qu’il fût (imparfait, avec accent circonflexe). « Fut » est le passé simple.'],
  ['<strong>Impératif (1).</strong> Laquelle de ces phrases est correcte ?', 'Vas-y, il t’attend.', ['Va-y, il t’attend.', 'Va y, il t’attend.', 'Vat-y, il t’attend.', 'Vas’y, il t’attend.'], 'À l’impératif, « va » prend un s devant « y » ou « en » (vas-y) pour la liaison, avec un trait d’union.'],
  ['<strong>Impératif (2).</strong> Laquelle de ces phrases est correcte ?', 'Cueille ces fleurs et offres-en à Marie.', ['Cueilles ces fleurs et offres-en à Marie.', 'Cueille ces fleurs et offre-en à Marie.', 'Cueilles ces fleurs et offre-en à Marie.', 'Cueille ces fleurs et offres en à Marie.'], 'Cueillir et offrir se conjuguent comme les verbes en -er à l’impératif : cueille, offre (sans s). Mais le s réapparaît devant « en » : offres-en (avec trait d’union).'],
  ['<strong>Impératif (3).</strong> Laquelle de ces phrases est correcte ?', 'Sois sage et aie confiance en moi.', ['Soit sage et aie confiance en moi.', 'Sois sage et aies confiance en moi.', 'Sois sage et ait confiance en moi.', 'Sois sage et ai confiance en moi.'], 'Être et avoir à l’impératif prennent les formes du subjonctif : sois, aie (jamais « soit », « aies », « ait »).'],
  ['<strong>Impératif (4).</strong> Laquelle de ces phrases est correcte ?', 'Sache que je t’attends depuis une heure.', ['Sais que je t’attends depuis une heure.', 'Saches que je t’attends depuis une heure.', 'Sait que je t’attends depuis une heure.', 'Sachent que je t’attends depuis une heure.'], 'L’impératif de savoir est « sache » (forme du subjonctif, sans s final).'],
  ['<strong>Impératif (5).</strong> Laquelle de ces formules est correcte ?', 'Veuillez agréer, Monsieur, mes salutations distinguées.', ['Veuillez agréez, Monsieur, mes salutations distinguées.', 'Voulez agréer, Monsieur, mes salutations distinguées.', 'Veuilliez agréer, Monsieur, mes salutations distinguées.', 'Veuillez-agréer, Monsieur, mes salutations distinguées.'], 'On écrit « veuillez » (impératif de vouloir), suivi de l’infinitif « agréer » (sans trait d’union).'],
  ['<strong>Avant que.</strong> Complétez : « Avant qu’il ne ___, rappelez-lui ce rendez-vous. »', ['parte', 'part', 'partira', 'est parti', 'partait'], 0, '« Avant que » appelle toujours le subjonctif : avant qu’il (ne) parte. Le « ne » est explétif et facultatif.'],
  ['<strong>À moins que.</strong> Complétez : « À moins que tu ne ___ malade, viens avec nous. »', ['sois', 'es', 'seras', 'serais', 'étais'], 0, '« À moins que » est suivi du subjonctif : à moins que tu ne sois malade.'],
  ['<strong>Subjonctif présent.</strong> Complétez : « Il faut que nous ___ à la banque ce matin. »', ['allions', 'allons', 'irons', 'aillons', 'ailles'], 0, 'Après « il faut que » : subjonctif présent. Aller fait « que nous allions » (et non « allons »).'],
  ['<strong>Subjonctif présent (2).</strong> Complétez : « Il est possible que nous ___ ce danger. »', ['fuyions', 'fuyons', 'fuirons', 'fuions', 'fuyez'], 0, '« Il est possible que » + subjonctif ; fuir fait « que nous fuyions » (le y du radical + terminaison -ions).'],
  ['<strong>Subjonctif présent (3).</strong> Complétez : « Il faut que vous ___ à ce projet. »', ['croyiez', 'croyez', 'croiez', 'croirez', 'croyés'], 0, 'Au subjonctif présent, vous → croyiez (radical croy- + terminaison -iez). La forme « croyez » est celle de l’indicatif.'],
  ['<strong>Je ne pense pas que.</strong> Complétez : « Je ne pense pas qu’il ___ raison. »', ['ait', 'a', 'aura', 'avait', 'avoir'], 0, 'Après un verbe d’opinion à la forme négative (« je ne pense pas que »), on emploie le subjonctif : qu’il ait raison. À la forme affirmative : « je pense qu’il a raison ».'],
  ['<strong>Après que (1).</strong> Complétez : « Après qu’il ___ parti, nous avons dîné. »', ['est', 'soit', 'fût', 'serait', 'sera'], 0, 'Après que (action réelle et accomplie) → indicatif : après qu’il est parti. Le subjonctif « soit » est une faute classique du concours.'],
  ['<strong>Après que (2).</strong> Laquelle de ces phrases est correcte ?', 'Après qu’ils eurent fini leur repas, ils quittèrent la table.', ['Après qu’ils eussent fini leur repas, ils quittèrent la table.', 'Après qu’ils aient fini leur repas, ils quittèrent la table.', 'Après qu’ils finissent leur repas, ils quittèrent la table.', 'Après qu’ils aient eu fini leur repas, ils quittèrent la table.'], 'Après que + indicatif : « eurent fini » est un passé antérieur (indicatif) en concordance avec le passé simple « quittèrent ». « Eussent » (subjonctif) et « aient » sont fautifs.'],
  ['<strong>Moudre.</strong> Laquelle de ces phrases est correcte ?', 'Il moud le café tous les matins.', ['Il moult le café tous les matins.', 'Il moulle le café tous les matins.', 'Il mout le café tous les matins.', 'Il mouds le café tous les matins.'], 'Moudre : je mouds, tu mouds, il moud (sans t). « Moult » est un adverbe signifiant « beaucoup ».'],
  ['<strong>Fuir.</strong> Complétez : « Les cambrioleurs ___ par la fenêtre à l’instant même. »', ['fuient', 'fuyent', 'fuissent', 'fuyes', 'fuye'], 0, 'Fuir fait « ils fuient » à l’indicatif présent (3e personne du pluriel). Le « y » n’apparaît qu’aux formes comme nous fuyons, vous fuyez, ils fuyaient.'],
  ['<strong>Vaincre.</strong> Laquelle de ces phrases est correcte ?', 'Notre équipe vainc ses adversaires avec aisance.', ['Notre équipe vaint ses adversaires avec aisance.', 'Notre équipe vainque ses adversaires avec aisance.', 'Notre équipe vaincs ses adversaires avec aisance.', 'Notre équipe vainquent ses adversaires avec aisance.'], 'Vaincre : il vainc (sans t à la troisième personne du singulier). Les formes en -qu apparaissent devant une voyelle : nous vainquons.'],
  ['<strong>Contredire.</strong> Complétez : « Vous me ___ souvent, mais je ne vous en veux pas. »', ['contredisez', 'contredites', 'contredisiez', 'contredises', 'contredirez'], 0, 'Contredire, médire, prédire, interdire font « vous contredisez » (et non « contredites ») ; seuls dire et redire font « vous dites, vous redites ».'],
  ['<strong>Futur de courir.</strong> Complétez : « Demain, je ___ le marathon. »', ['courrai', 'courirai', 'courerai', 'coure', 'courais'], 0, 'Courir fait « je courrai » au futur (deux r à l’oreille : cou-rrai) et « je courrais » au conditionnel.'],
  ['<strong>Imparfait de manger.</strong> Laquelle de ces phrases est correcte ?', 'Nous mangions souvent ensemble, et nous mangeons encore ensemble.', ['Nous mangeions souvent ensemble, et nous mangeons encore ensemble.', 'Nous mangions souvent ensemble, et nous mangons encore ensemble.', 'Nous mangeions souvent ensemble, et nous mangons encore ensemble.', 'Nous mangions souvent ensemble, et nous mangeont encore ensemble.'], 'Devant « o » (nous mangeons) on garde le « e » après le g ; devant « i » (nous mangions) il est inutile car le « g » reste doux.'],

  // ---- Constructions et vocabulaire en contexte -----------------------
  ['<strong>Pallier.</strong> Laquelle de ces phrases est correcte ?', 'Le gouvernement doit pallier ce manque de moyens.', ['Le gouvernement doit pallier à ce manque de moyens.', 'Le gouvernement doit pallier de ce manque de moyens.', 'Le gouvernement doit pallier sur ce manque de moyens.', 'Le gouvernement doit palier ce manque de moyens.'], 'Pallier est transitif direct (pallier un manque), contrairement à remédier à. « Palier » (un seul l) est un nom (palier d’un escalier).'],
  ['<strong>Dont.</strong> Laquelle de ces phrases est correcte ?', 'Le film dont je t’ai parlé sort demain.', ['Le film que je t’ai parlé sort demain.', 'Le film auquel je t’ai parlé sort demain.', 'Le film dont je t’en ai parlé sort demain.', 'Le film où je t’ai parlé sort demain.'], 'On parle de quelque chose : « dont » remplace « de + film ». Il ne faut pas ajouter le pronom « en » (dont je t’en ai parlé est un pléonasme).'],
  ['<strong>S’attendre à.</strong> Laquelle de ces phrases est correcte ?', 'Je m’attends à ce qu’il vienne demain.', ['Je m’attends qu’il vienne demain.', 'Je m’attends de ce qu’il vienne demain.', 'Je m’attends à ce qu’il viendra demain.', 'Je m’attends de ce qu’il viendra demain.'], 'S’attendre à ce que est suivi du subjonctif (qu’il vienne) ; « de » n’est jamais correct ici.'],
  ['<strong>Plus tôt / plutôt.</strong> Complétez : « Viens ___ demain : je préfère ___ travailler le matin. »', ['plus tôt… plutôt', 'plutôt… plus tôt', 'plus tôt… plus tôt', 'plutôt… plutôt', 'plus-tôt… plutôt'], 0, 'Plus tôt (deux mots) = avant, contraire de plus tard. Plutôt (un mot) = de préférence, assez.'],
  ['<strong>Au cas où (2).</strong> Laquelle de ces phrases est correcte ?', 'Au cas où tu aurais un retard, appelle-moi.', ['Au cas où tu aurais un retard, appelles-moi.', 'Au cas où tu auras un retard, appelle-moi.', 'Au cas où tu aies un retard, appelle-moi.', 'Au cas où tu avais un retard, appelle-moi.'], 'Après « au cas où » : conditionnel. À l’impératif, appeler suit les verbes en -er : « appelle-moi » (sans s, car il est suivi de « moi », pas de « en » ou « y »).']
];

export const TM_EXPR_REGLES_QCM = exprBuildQcm(REGLES_ROWS, 7);

// ---------------------------------------------------------------------------
// 5. QCM D’EXPRESSIONS, PROVERBES ET LOCUTIONS LATINES
// ---------------------------------------------------------------------------

var EXPR_ROWS = [
  // ---- Expressions idiomatiques ----------------------------------------
  ['Que signifie l’expression « travailler pour le roi de Prusse » ?', 'Travailler sans en tirer aucun profit', ['Travailler pour un souverain étranger', 'Travailler dur pour un salaire élevé', 'Travailler en secret', 'Travailler avec méthode'], 'L’expression désigne un travail fait pour rien, sans rémunération ni reconnaissance. Elle date du XVIIIe siècle, à propos de ceux qui servaient Frédéric II sans être payés.'],
  ['Que signifie « voir midi à sa porte » ?', 'Juger les choses selon son seul point de vue ou son intérêt', ['Attendre l’heure du déjeuner', 'Être très ponctuel', 'Habiter près de sa famille', 'Être optimiste'], 'On « voit midi à sa porte » quand on juge les choses selon son propre point de vue ou son intérêt, sans considérer les autres. Le sens n’a rien à voir avec l’heure.'],
  ['Que signifie « mettre la charrue avant les bœufs » ?', 'Faire les choses dans le mauvais ordre', ['Travailler trop vite', 'Compter sur les autres', 'Gaspiller ses ressources', 'Être trop prudent'], 'Normalement, ce sont les bœufs qui tirent la charrue : l’expression désigne un ordre inversé, commencer par ce qui devrait venir ensuite.'],
  ['Que signifie « faire chou blanc » ?', 'Échouer, ne rien obtenir', ['Gagner facilement', 'Faire une bonne récolte', 'Cuisiner à la hâte', 'Se déguiser'], 'Faire chou blanc, c’est échouer, rentrer bredouille (surtout à la chasse ou à la pêche).'],
  ['Que signifie « avoir du pain sur la planche » ?', 'Avoir beaucoup de travail à faire', ['Être très riche', 'Manquer de nourriture', 'Être sans emploi', 'Avoir de bonnes relations'], 'Le pain sur la planche est le travail qui reste à accomplir (celui du boulanger qui prépare ses pâtons).'],
  ['Que signifie « tirer le diable par la queue » ?', 'Avoir du mal à joindre les deux bouts', ['Provoquer un danger', 'Se moquer de quelqu’un', 'Faire un travail dangereux', 'Prendre un risque inutile'], 'L’expression désigne une situation financière difficile : celui qui tire le diable par la queue a peu d’argent pour vivre.'],
  ['Que signifie « poser un lapin » ?', 'Ne pas venir à un rendez-vous', ['Offrir un cadeau', 'Se moquer de quelqu’un', 'Arriver très en retard', 'Faire une farce'], 'Poser un lapin à quelqu’un, c’est lui faire attendre en vain un rendez-vous auquel on ne vient pas.'],
  ['Que signifie « être sur la sellette » ?', 'Être mis en cause, accusé ou interrogé', ['Être très riche', 'Être confortablement installé', 'Être sur le point de partir', 'Être en vacances'], 'La sellette était le petit siège sur lequel on faisait asseoir un accusé devant ses juges. Être sur la sellette, c’est être mis en cause.'],
  ['Que signifie « une victoire à la Pyrrhus » ?', 'Une victoire obtenue au prix de pertes énormes', ['Une victoire facile', 'Une victoire éclatante', 'Une victoire inattendue', 'Une victoire sans témoin'], 'Pyrrhus, roi d’Épire, aurait vaincu les Romains à un prix si élevé que sa victoire équivalait presque à une défaite.'],
  ['Que désigne « le nerf de la guerre » ?', 'L’argent', ['Le courage', 'L’information', 'La discipline', 'La stratégie'], 'Cicéron déjà disait que le nerf de la guerre est l’argent infini. L’expression souligne que les moyens financiers sont essentiels.'],
  ['Que désigne « le talon d’Achille » ?', 'Le point faible', ['Une blessure ancienne', 'Une arme secrète', 'Un acte de bravoure', 'Un ennemi juré'], 'Achille était invulnérable sauf au talon, que sa mère tenait en le plongeant dans le Styx. L’expression désigne l’unique point faible d’une personne ou d’un système.'],
  ['Que désigne « le fil d’Ariane » ?', 'Ce qui permet de se repérer dans une situation complexe', ['Un lien affectif', 'Un travail minutieux', 'Une tromperie', 'Une aide financière'], 'Ariane donne à Thésée un fil pour sortir du labyrinthe. Au figuré, c’est le guide qui permet de se retrouver dans une situation compliquée.'],
  ['Que signifie « franchir le Rubicon » ?', 'Prendre une décision irréversible', ['Gagner une bataille', 'Passer une frontière', 'Faire un voyage dangereux', 'Perdre tout espoir'], 'En franchissant le Rubicon avec ses légions, César a engagé la guerre civile : plus de retour en arrière possible.'],
  ['Que désigne « l’épée de Damoclès » ?', 'Une menace permanente', ['Une récompense inattendue', 'Un pouvoir absolu', 'Une arme redoutable', 'Un secret bien gardé'], 'Damoclès fut invité à un banquet avec une épée suspendue par un crin au-dessus de sa tête : image d’un danger toujours imminent.'],
  ['Que signifie « renvoyer aux calendes grecques » ?', 'Remettre à une date qui n’arrivera jamais', ['Remettre à la semaine suivante', 'Remettre à la fin du mois', 'Fixer une date précise', 'Avancer la date'], 'Les calendes étaient le premier jour du mois romain ; les Grecs n’en avaient pas. Renvoyer aux calendes grecques, c’est remettre à jamais.'],
  ['Que signifie « un coup d’épée dans l’eau » ?', 'Un effort inutile, sans résultat', ['Un geste héroïque', 'Une attaque surprise', 'Une plaisanterie douteuse', 'Un exploit sportif'], 'Frapper l’eau avec une épée ne laisse aucune trace : l’expression désigne une action vaine.'],
  ['Que signifie « prendre la clé des champs » ?', 'S’enfuir, s’évader', ['Se mettre à cultiver', 'Partir en vacances', 'Se retirer à la campagne', 'Prendre sa retraite'], 'Prendre la clé des champs, c’est s’échapper, filer en liberté (comme un prisonnier qui s’évade).'],
  ['Que signifie « ne pas être sorti de l’auberge » ?', 'Ne pas être au bout de ses difficultés', ['Ne pas avoir mangé', 'Ne pas pouvoir partir en voyage', 'Ne pas avoir de logement', 'Ne pas avoir d’argent'], 'L’expression indique qu’on n’est pas encore à l’abri : les ennuis ne sont pas finis.'],
  ['Que signifie « avoir les dents longues » ?', 'Être très ambitieux', ['Avoir faim', 'Être jeune', 'Être méfiant', 'Être bavard'], 'Avoir les dents longues, c’est avoir de grandes ambitions, être prêt à tout pour réussir (dents qui rayent le parquet).'],
  ['Que signifie « chercher midi à quatorze heures » ?', 'Compliquer inutilement les choses', ['Être en retard', 'Perdre du temps à table', 'Se tromper d’heure', 'Manquer de ponctualité'], 'Midi est à midi, pas à quatorze heures : l’expression désigne celui qui cherche des difficultés là où il n’y en a pas.'],
  ['Que signifie « se mettre martel en tête » ?', 'S’inquiéter, se tourmenter', ['Se faire mal', 'Se vanter', 'Se préparer à la lutte', 'S’obstiner à travailler'], 'Se mettre martel en tête, c’est se faire du souci. « Martel » est un ancien mot pour « marteau ».'],
  ['Que signifie « rire sous cape » ?', 'Rire en cachette', ['Rire très fort', 'Rire jaune', 'Rire de bon cœur', 'Rire sans raison'], 'La cape est le manteau derrière lequel on dissimule son rire : on se moque discrètement.'],
  ['Que signifie « faire amende honorable » ?', 'Reconnaître publiquement ses torts', ['Payer une contravention', 'Se moquer d’un adversaire', 'Obtenir une récompense', 'Demander une augmentation'], 'L’amende honorable était une réparation publique ; au figuré, c’est reconnaître ses torts et présenter ses excuses.'],
  ['Que signifie « avoir voix au chapitre » ?', 'Avoir le droit de donner son avis', ['Avoir une belle voix', 'Être lecteur dans une église', 'Parler en public', 'Chanter dans un chœur'], 'Le chapitre est l’assemblée des chanoines ; avoir voix au chapitre, c’est avoir le droit de s’exprimer et de voter.'],
  ['Que signifie « tomber de Charybde en Scylla » ?', 'Échapper à un danger pour tomber dans un autre', ['Chuter de haut', 'Gagner du temps', 'Perdre ses amis', 'Se perdre en mer'], 'Charybde et Scylla sont deux monstres marins de la mythologie, placés de part et d’autre d’un détroit : on évite l’un pour tomber sur l’autre.'],
  ['Que signifie « brûler ses vaisseaux » ?', 'S’interdire tout retour en arrière', ['Détruire un adversaire', 'Gaspiller son argent', 'Partir en voyage', 'Fêter une victoire'], 'Brûler ses vaisseaux, c’est se couper volontairement toute possibilité de retraite et s’obliger à aller de l’avant.'],
  ['Que signifie « casser du sucre sur le dos de quelqu’un » ?', 'En dire du mal en son absence', ['Lui offrir des friandises', 'Lui jouer un mauvais tour', 'Le frapper', 'Se plaindre de son travail'], 'L’expression désigne le fait de dénigrer quelqu’un derrière son dos (casser du sucre = médire).'],
  ['Que signifie « la goutte d’eau qui fait déborder le vase » ?', 'Le détail de trop, qui déclenche l’explosion', ['Un détail sans importance', 'Un acte courageux', 'Une accumulation de richesses', 'Une économie réussie'], 'Quand le vase est déjà plein, une dernière goutte suffit à le faire déborder : un petit fait rend la situation insupportable.'],
  ['Que signifie « un travail de bénédictin » ?', 'Un travail minutieux et patient', ['Un travail religieux', 'Un travail bâclé', 'Un travail rémunéré', 'Un travail d’équipe'], 'Les moines bénédictins recopiaient avec patience et minutie les manuscrits : l’expression désigne un travail de longue haleine et très soigné.'],
  ['Que désigne « un cheval de Troie » ?', 'Un piège dissimulé sous une apparence inoffensive', ['Un cadeau précieux', 'Un allié fidèle', 'Un adversaire redoutable', 'Un exploit militaire'], 'Les Grecs ont fait entrer des soldats dans Troie cachés dans un cheval de bois. L’expression désigne tout piège qui paraît anodin.'],
  ['Que signifie « être aux abois » ?', 'Être dans une situation désespérée', ['Être en retard', 'Être très bavard', 'Être sans ressources mais heureux', 'Être endormi'], 'Le cerf aux abois est cerné par les chiens et n’a plus d’issue : au figuré, on est acculé.'],
  ['Que signifie « revenons à nos moutons » ?', 'Revenons à notre sujet', ['Revenons à la campagne', 'Retournons chez nous', 'Reprenons le travail', 'Rentrons à la maison'], 'L’expression vient de la farce de Maître Pathelin : le juge demande d’en revenir au sujet (les moutons volés) et de cesser les digressions.'],

  // ---- Proverbes à compléter -------------------------------------------
  ['Complétez le proverbe : « Prudence est mère de ___. »', 'sûreté', ['vertu', 'sagesse', 'confiance', 'réussite'], 'Le proverbe complet est « Prudence est mère de sûreté » : être prudent protège des dangers.'],
  ['Complétez le proverbe : « L’occasion fait le ___. »', 'larron', ['héros', 'hasard', 'roi', 'sage'], 'Le larron est le voleur. Le proverbe signifie que la tentation transforme en voleur celui qui en trouve l’occasion.'],
  ['Complétez le proverbe : « Qui veut voyager loin ménage sa ___. »', 'monture', ['fortune', 'santé', 'route', 'patience'], 'Pour aller loin, il faut ne pas épuiser sa monture : il faut économiser ses forces et ses moyens.'],
  ['Complétez le proverbe : « Chassez le naturel, il revient au ___. »', 'galop', ['trot', 'pas', 'moment', 'hasard'], 'Le naturel que l’on cherche à chasser revient « au galop » : on ne change pas sa nature profonde.'],
  ['Complétez le proverbe : « C’est en forgeant qu’on devient ___. »', 'forgeron', ['maître', 'artisan', 'fort', 'riche'], 'Le proverbe signifie que la pratique rend habile : c’est en s’exerçant qu’on acquiert un savoir-faire.'],
  ['Complétez le proverbe : « Pierre qui roule n’amasse pas ___. »', 'mousse', ['poussière', 'richesse', 'gloire', 'fortune'], 'La mousse ne s’accroche pas à une pierre qui bouge : celui qui change souvent de situation ne s’enrichit pas.'],
  ['Complétez le proverbe : « Rira bien qui rira le ___. »', 'dernier', ['premier', 'mieux', 'plus fort', 'moins'], 'Celui qui rit le dernier, c’est celui qui a le dernier mot : il ne faut pas triompher trop tôt.'],
  ['Complétez le proverbe : « Les chiens aboient, la caravane ___. »', 'passe', ['avance', 'recule', 's’arrête', 'attend'], 'Il faut poursuivre son chemin sans se soucier des critiques : la caravane passe malgré les aboiements.'],
  ['Complétez le proverbe : « Il ne faut pas vendre la peau de l’ours avant de l’avoir ___. »', 'tué', ['vu', 'chassé', 'pris', 'trouvé'], 'Il est imprudent de disposer d’un bien avant de le posséder réellement.'],
  ['Complétez le proverbe : « Chat échaudé craint l’eau ___. »', 'froide', ['chaude', 'sale', 'claire', 'profonde'], 'Un chat qui a été ébouillanté se méfie même de l’eau froide : on se méfie de tout ce qui rappelle un danger passé.'],
  ['Complétez le proverbe : « Rien ne sert de courir, il faut partir à ___. »', 'point', ['temps', 'l’heure', 'plein', 'pied'], 'La fable de La Fontaine « Le Lièvre et la Tortue » : mieux vaut partir au bon moment et avancer régulièrement que se précipiter.'],
  ['Complétez le proverbe : « On ne fait pas d’omelette sans casser des ___. »', 'œufs', ['plats', 'poules', 'verres', 'promesses'], 'Pour obtenir un résultat, il faut accepter certains sacrifices, même involontaires.'],

  // ---- Proverbes : sens ---------------------------------------------
  ['Que signifie le proverbe « Qui veut la paix prépare la guerre » ?', 'Pour éviter un conflit, il faut être capable de se défendre', ['Il faut toujours attaquer en premier', 'La guerre est la seule voie vers la paix', 'La paix est impossible', 'Les puissants font toujours la guerre'], 'Le proverbe (si vis pacem, para bellum) signifie qu’une dissuasion crédible évite la guerre. Il ne prône pas l’agression.'],
  ['Que signifie le proverbe « Il n’est pire eau que l’eau qui dort » ?', 'Il faut se méfier des personnes calmes en apparence', ['Il faut éviter les eaux stagnantes', 'Il faut se reposer', 'Le calme est toujours bénéfique', 'Les rêveurs sont des gens dangereux'], 'Une eau calme peut cacher des profondeurs et des remous : une personne silencieuse peut cacher des projets ou des colères.'],
  ['Que signifie « L’habit ne fait pas le moine » ?', 'Il ne faut pas juger sur les apparences', ['Il faut s’habiller correctement', 'Les moines sont rarement élégants', 'La tenue détermine le métier', 'Les moines n’ont pas de vêtements'], 'L’apparence extérieure ne renseigne pas sur la valeur réelle d’une personne.'],
  ['Que signifie le proverbe « C’est en forgeant qu’on devient forgeron » ?', 'C’est en s’exerçant qu’on devient habile', ['Il faut avoir un don pour réussir', 'Les métiers manuels sont difficiles', 'Un forgeron ne peut pas changer de métier', 'Il faut forger du métal à la maison'], 'La pratique répétée est le meilleur moyen de progresser.'],

  // ---- Locutions latines ----------------------------------------------
  ['Que signifie la locution latine <em>ad hoc</em> ?', 'Spécialement conçu pour cet usage', ['À la hâte', 'Sans réfléchir', 'Au hasard', 'À l’avance'], 'Ad hoc signifie littéralement « pour cela » : une commission ad hoc est créée pour une mission précise.'],
  ['Que signifie <em>ad libitum</em> ?', 'À volonté', ['À l’avance', 'À la fin', 'Au hasard', 'Pour toujours'], 'Ad libitum (« selon le désir ») : en musique, on joue ad libitum, au choix de l’exécutant.'],
  ['Que signifie <em>a priori</em> ?', 'De prime abord, avant toute vérification', ['Après vérification', 'Par expérience', 'Pour cause de', 'Sans exception'], 'A priori : avant toute expérience, d’après les seules données de départ. Son contraire est a posteriori (après coup).'],
  ['Que signifie la phrase <em>Alea jacta est</em> ?', 'Les dés sont jetés : la décision est prise', ['Le jeu est terminé', 'La chance sourit aux audacieux', 'Tout est perdu', 'Les dés sont truqués'], 'César aurait prononcé cette phrase en franchissant le Rubicon : le sort en est jeté, il n’y a plus de retour en arrière.'],
  ['Que signifie <em>ex nihilo</em> ?', 'À partir de rien', ['Après la mort', 'Sans exception', 'Par hasard', 'En cachette'], 'Ex nihilo : à partir du néant. Une création ex nihilo n’a pas de matière préexistante.'],
  ['Que signifie <em>grosso modo</em> ?', 'En gros, approximativement', ['Avec lourdeur', 'Avec précision', 'De façon détaillée', 'À grand bruit'], 'Grosso modo (« de façon grosse ») signifie sans entrer dans les détails, en gros.'],
  ['Que signifie <em>ipso facto</em> ?', 'Par le fait même', ['Dès le début', 'Au plus vite', 'Sans doute', 'Sans preuve'], 'Ipso facto : automatiquement, par l’effet du fait lui-même (ex : il est ipso facto exclu).'],
  ['Que signifie <em>in extremis</em> ?', 'Au dernier moment', ['Tout au début', 'Dans la plus grande discrétion', 'Avec excès', 'À l’extérieur'], 'In extremis : à la dernière extrémité ; on sauve quelqu’un in extremis, juste à temps.'],
  ['Que signifie <em>mutatis mutandis</em> ?', 'En changeant ce qui doit être changé', ['En ne changeant rien', 'Avec changement radical', 'En supprimant les détails', 'Au besoin'], 'Mutatis mutandis : en effectuant les adaptations nécessaires, la comparaison restant valable.'],
  ['Que signifie <em>sine qua non</em> dans « une condition sine qua non » ?', 'Indispensable : sans laquelle rien n’est possible', ['Facultative', 'Déjà remplie', 'Préalablement négociée', 'Provisoire'], 'Sine qua non signifie littéralement « sans laquelle non » : une condition sans laquelle l’action ne peut pas se faire.'],
  ['Que signifie <em>statu quo</em> ?', 'L’état actuel des choses', ['Un changement radical', 'Une règle absolue', 'Un compromis', 'Un statut juridique'], 'Statu quo = l’état actuel : maintenir le statu quo, c’est ne rien changer.'],
  ['Que signifie <em>vice versa</em> ?', 'Inversement', ['Par défaut', 'Au contraire de la loi', 'En général', 'À jamais'], 'Vice versa : réciproquement, en sens inverse (A aime B et vice versa).'],
  ['Que signifie <em>persona non grata</em> ?', 'Une personne indésirable', ['Une personne anonyme', 'Une personne sans nom', 'Un diplomate en mission', 'Un invité d’honneur'], 'Un diplomate déclaré persona non grata doit quitter le pays où il est en poste.'],
  ['Que signifie <em>urbi et orbi</em> ?', 'À la ville et au monde, à tous', ['À Rome seulement', 'En secret', 'Sans cérémonie', 'Au nom du peuple'], 'La bénédiction urbi et orbi du pape s’adresse à la ville de Rome (urbs) et au monde entier (orbis).'],
  ['Que signifie <em>a fortiori</em> ?', 'À plus forte raison', ['Par la force', 'Avec courage', 'Par hasard', 'Sans doute'], 'A fortiori introduit une conclusion encore plus évidente : si ce n’est pas permis aux adultes, a fortiori aux enfants.'],
  ['Que signifie <em>casus belli</em> ?', 'Un acte qui justifie une déclaration de guerre', ['Une trêve', 'Une bataille décisive', 'Un traité de paix', 'Une alliance militaire'], 'Casus belli : « cas de guerre », fait invoqué pour justifier une guerre.'],
  ['Que signifie <em>modus operandi</em> ?', 'La manière de procéder', ['Un mode de paiement', 'Une opération chirurgicale', 'Un règlement intérieur', 'Une opération à risque'], 'Modus operandi (« manière d’opérer ») désigne la méthode propre à quelqu’un, par exemple d’un criminel ou d’une équipe.'],
  ['Que signifie <em>ad nauseam</em> ?', 'Jusqu’à la nausée, à satiété', ['Avec nausée', 'Pour apaiser', 'Sans cesse', 'Avec joie'], 'Répéter un argument ad nauseam, c’est le répéter jusqu’à lasser ou écœurer.'],
  ['Que signifie <em>sic</em> entre parenthèses dans une citation ?', 'Ainsi : on cite tel quel, même s’il y a une erreur apparente', ['Voir plus loin', 'Phrase supprimée', 'Erreur du journaliste', 'Fin de citation'], 'Sic (« ainsi ») indique que l’erreur ou la formule étrange appartient au texte cité, pas à celui qui cite.'],
  ['Que signifie <em>in situ</em> ?', 'Sur place', ['Dans l’avenir', 'Sous terre', 'À l’intérieur d’un bâtiment', 'Par hasard'], 'In situ : à l’endroit même (une fouille réalisée in situ, une analyse sur le site).'],
  ['Que signifie <em>deus ex machina</em> ?', 'Un dénouement providentiel et inattendu', ['Une machine à vapeur', 'Une vengeance divine', 'Une pièce de théâtre', 'Une prophétie'], 'Au théâtre antique, un dieu apparaissait grâce à une machine pour dénouer l’intrigue. Au figuré : une solution miraculeuse.'],
  ['Que signifie <em>ad vitam aeternam</em> ?', 'Pour l’éternité', ['À la fin de la vie', 'Pour une durée limitée', 'En cas d’urgence', 'Jusqu’à la mort'], 'Ad vitam aeternam : pour la vie éternelle, donc pour toujours. Ne pas confondre avec sine die (sans date).']
];

export const TM_EXPR_EXPRESSIONS_QCM = exprBuildQcm(EXPR_ROWS, 3);

// ---------------------------------------------------------------------------
// 6. GENRES PIÈGES (réponse attendue : 'MASCULIN' ou 'FÉMININ')
// [mot, explication]
// ---------------------------------------------------------------------------

var GENRES_M = [
  ['Effluve', 'Un effluve : « de subtils effluves ». Ce mot en -e est masculin.'],
  ['Orgue (au singulier)', 'Un orgue : masculin au singulier. Au pluriel, « orgues » devient féminin quand il désigne un seul grand instrument (les grandes orgues de la cathédrale).'],
  ['Délice (au singulier)', 'Un délice : masculin au singulier. Au pluriel, il s’emploie au féminin dans la langue soutenue (de grandes délices).'],
  ['Amour (au singulier)', 'Un amour : masculin au singulier. Au pluriel, il devient féminin dans la langue littéraire (de folles amours, ses premières amours).'],
  ['Apogée', 'Un apogée : « l’apogée de l’empire ». Les noms en -ée sont souvent féminins, mais apogée est masculin.'],
  ['Armistice', 'Un armistice : « un armistice signé en 1918 ».'],
  ['Astérisque', 'Un astérisque : « un astérisque à la fin du mot ».'],
  ['Abysse', 'Un abysse : « les abysses de l’océan ». Nom masculin.'],
  ['Tentacule', 'Un tentacule : masculin, comme un pétale ou un opercule.'],
  ['Équinoxe', 'Un équinoxe : « l’équinoxe de printemps ». Masculin.'],
  ['Esclandre', 'Un esclandre : « faire un esclandre ». Masculin.'],
  ['Hémisphère', 'Un hémisphère : « l’hémisphère nord ». Masculin.'],
  ['Haltère', 'Un haltère : « soulever un haltère ». Masculin.'],
  ['Obélisque', 'Un obélisque : « l’obélisque de la Concorde ». Masculin.'],
  ['Antidote', 'Un antidote : « un antidote au poison ». Masculin.'],
  ['Amalgame', 'Un amalgame : « faire un amalgame ». Masculin.'],
  ['Interstice', 'Un interstice : « un interstice entre deux planches ». Masculin.'],
  ['Épilogue', 'Un épilogue : « l’épilogue du roman ». Masculin.'],
  ['Opprobre', 'Un opprobre : « jeter l’opprobre sur quelqu’un ». Masculin.'],
  ['Ovule', 'Un ovule : masculin, comme un globule ou un tentacule.'],
  ['Pétale', 'Un pétale : « les pétales d’une rose ». Masculin.'],
  ['Stratagème', 'Un stratagème : « un stratagème habile ». Masculin.'],
  ['Tulle', 'Du tulle : « un tulle brodé ». Masculin (à ne pas confondre avec la ville de Tulle).'],
  ['Anathème', 'Un anathème : « jeter l’anathème sur quelqu’un ». Masculin.'],
  ['Aphte', 'Un aphte : « un aphte douloureux dans la bouche ». Masculin.'],
  ['Opercule', 'Un opercule : « l’opercule d’un pot de yaourt ». Masculin.'],
  ['Globule', 'Un globule : « un globule rouge ». Masculin.'],
  ['Antipode', 'Un antipode : « aux antipodes ». Masculin.'],
  ['Météore', 'Un météore : « un météore dans le ciel ». Masculin.'],
  ['Exode', 'Un exode : « l’exode rural ». Masculin.'],
  ['Ulcère', 'Un ulcère : « un ulcère à l’estomac ». Masculin.'],
  ['Vestige', 'Un vestige : « les vestiges d’une civilisation ». Masculin.'],
  ['Diocèse', 'Un diocèse : « le diocèse de Lyon ». Masculin.'],
  ['Intervalle', 'Un intervalle : « un intervalle de trois minutes ». Masculin.'],
  ['Emblème', 'Un emblème : « l’emblème d’une marque ». Masculin.'],
  ['Mémoire (écrit universitaire)', 'Un mémoire : « soutenir son mémoire ». Au sens d’écrit, il est masculin ; au sens de faculté de se souvenir, il est féminin (une bonne mémoire).'],
  ['Manche (d’un outil, d’une guitare)', 'Un manche : « le manche du marteau ». Féminin au sens de partie du vêtement ou de division d’un jeu (une manche).'],
  ['Page (jeune serviteur d’un seigneur)', 'Un page : « un page à la cour ». Féminin au sens de feuille d’un livre (une page).'],
  ['Poste (emploi, fonction)', 'Un poste : « un poste de directeur » ou « un poste de radio ». Féminin au sens de service du courrier (la poste).'],
  ['Voile (que porte la mariée)', 'Un voile : « le voile de la mariée ». Féminin quand il s’agit de la toile d’un bateau (une voile).'],
  ['Moule (pour cuire un gâteau)', 'Un moule : « un moule à gâteau ». Féminin quand il s’agit du coquillage (une moule).']
];

var GENRES_F = [
  ['Aérogare', 'Une aérogare : sur le modèle de gare (une gare). Féminin.'],
  ['Octave', 'Une octave : « une octave plus haut ». Féminin.'],
  ['Acné', 'Une acné : « une acné juvénile ». Féminin.'],
  ['Amnistie', 'Une amnistie : « une amnistie générale ». Féminin.'],
  ['Anagramme', 'Une anagramme : « Marie » est une anagramme d’« aimer ». Féminin.'],
  ['Apostrophe', 'Une apostrophe : « une apostrophe devant un mot ». Féminin.'],
  ['Argile', 'Une argile : « une argile rouge ». Féminin.'],
  ['Atmosphère', 'Une atmosphère : « une atmosphère détendue ». Féminin.'],
  ['Azalée', 'Une azalée : « une azalée en fleur ». Féminin.'],
  ['Épitaphe', 'Une épitaphe : « une épitaphe gravée sur la tombe ». Féminin.'],
  ['Épigramme', 'Une épigramme : « une épigramme mordante ». Féminin.'],
  ['Hypothèse', 'Une hypothèse : « une hypothèse plausible ». Féminin.'],
  ['Idylle', 'Une idylle : « une idylle de vacances ». Féminin.'],
  ['Ecchymose', 'Une ecchymose : « une ecchymose sur le bras ». Féminin.'],
  ['Écritoire', 'Une écritoire : « une écritoire de voyage ». Féminin.'],
  ['Patère', 'Une patère : « accrocher son manteau à la patère ». Féminin.'],
  ['Omoplate', 'Une omoplate : « une omoplate fracturée ». Féminin.'],
  ['Orbite', 'Une orbite : « l’orbite d’un satellite ». Féminin.'],
  ['Oriflamme', 'Une oriflamme : « une oriflamme rouge ». Féminin.'],
  ['Ancre', 'Une ancre : « lever l’ancre ». Féminin (ne pas confondre avec l’encre).'],
  ['Apothéose', 'Une apothéose : « le final fut une apothéose ». Féminin.'],
  ['Équivoque', 'Une équivoque : « lever toute équivoque ». Féminin.'],
  ['Prémisse', 'Une prémisse : « une prémisse du raisonnement ». Féminin.'],
  ['Mandibule', 'Une mandibule : « les mandibules d’un insecte ». Féminin.'],
  ['Chrysalide', 'Une chrysalide : « la chrysalide du papillon ». Féminin.'],
  ['Nacre', 'Une nacre : « de la nacre de perle ». Féminin.'],
  ['Hécatombe', 'Une hécatombe : « une véritable hécatombe ». Féminin.'],
  ['Idole', 'Une idole : « une idole des jeunes ». Féminin, même quand elle désigne un homme.'],
  ['Stalactite', 'Une stalactite : « les stalactites de la grotte ». Féminin.'],
  ['Orée', 'Une orée : « à l’orée du bois ». Féminin.'],
  ['Gageure', 'Une gageure : « c’est une gageure ». Féminin.'],
  ['Amours (au pluriel, langue littéraire)', 'Amour est masculin au singulier, mais « amours » est féminin dans la langue littéraire : de folles amours, ses premières amours, les amours enfantines.'],
  ['Délices (au pluriel)', 'Délice est masculin au singulier, mais « délices » s’emploie au féminin dans la langue soutenue : de grandes délices, les délices de la table.'],
  ['Orgues (un seul grand instrument)', 'Un orgue au singulier, mais « les grandes orgues » (un seul instrument) est féminin au pluriel : les orgues de la cathédrale étaient superbes.'],
  ['Mémoire (faculté de se souvenir)', 'Une mémoire : « avoir une bonne mémoire ». Au sens d’écrit universitaire, mémoire est masculin (un mémoire).'],
  ['Vase (boue au fond de l’eau)', 'La vase : « s’enliser dans la vase ». Au sens de récipient, vase est masculin (un vase).'],
  ['Poste (service du courrier)', 'La poste : « aller à la poste ». Au sens d’emploi, poste est masculin (un poste).'],
  ['Tour (bâtiment élevé)', 'Une tour : « la tour Eiffel ». Masculin au sens d’action de tourner ou d’ordre de passage (un tour).'],
  ['Voile (de bateau)', 'Une voile : « hisser la voile ». Masculin au sens de pièce de tissu qui couvre (un voile).'],
  ['Moule (coquillage)', 'Une moule : « une moule marinière ». Masculin pour l’objet servant à mouler (un moule).']
];

// Mélange déterministe de masculins et de féminins pour un ordre varié.
var GENRES_PATTERN = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0];
export const TM_EXPR_GENRES = (function () {
  var out = [];
  var im = 0;
  var ifem = 0;
  var k = 0;
  while (im < GENRES_M.length || ifem < GENRES_F.length) {
    var wantFem = GENRES_PATTERN[k % GENRES_PATTERN.length] === 1;
    k++;
    if (wantFem && ifem < GENRES_F.length) {
      out.push({ prompt: GENRES_F[ifem][0], expectedAnswer: 'FÉMININ', explanation: GENRES_F[ifem][1] });
      ifem++;
    } else if (!wantFem && im < GENRES_M.length) {
      out.push({ prompt: GENRES_M[im][0], expectedAnswer: 'MASCULIN', explanation: GENRES_M[im][1] });
      im++;
    } else if (ifem < GENRES_F.length) {
      out.push({ prompt: GENRES_F[ifem][0], expectedAnswer: 'FÉMININ', explanation: GENRES_F[ifem][1] });
      ifem++;
    } else {
      out.push({ prompt: GENRES_M[im][0], expectedAnswer: 'MASCULIN', explanation: GENRES_M[im][1] });
      im++;
    }
  }
  return out;
})();
