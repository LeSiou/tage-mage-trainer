/**
 * TAGE MAGE® — Expression : la concordance des temps
 * Fiche de cours complète + quiz corrigé.
 */

function card(title, lines) {
  return '<div class="math-card-visual"><div class="math-card-title">' + title + '</div><div class="math-desc-list">' +
    lines.map(l => '<p>• ' + l + '</p>').join('') + '</div></div>';
}

const FICHE_HTML = '<div>' + [
  card('1. Le principe', [
    '<strong>Une seule question à se poser</strong> : le temps de la subordonnée dépend du temps de la <strong>principale</strong> et du <strong>moment</strong> de l’action par rapport à elle.',
    '<strong>Trois rapports possibles</strong> : l’action de la subordonnée se passe <strong>avant</strong> (antériorité), <strong>en même temps</strong> (simultanéité) ou <strong>après</strong> (postériorité) celle de la principale.',
    '<strong>Mini-exemple :</strong> « Je sais qu’il <strong>est venu</strong> » (avant) ; « Je sais qu’il <strong>est là</strong> » (en même temps) ; « Je sais qu’il <strong>viendra</strong> » (après).',
    '<strong>À retenir :</strong> repère d’abord le temps de la principale (présent/futur ou passé), puis place l’action sur la ligne du temps. Le tableau se déduit tout seul.'
  ]),
  card('2. Principale au présent ou au futur', [
    '<strong>Action antérieure</strong> : passé composé (ou imparfait pour une durée). <em>Ex : Je pense qu’il a menti ; je pense qu’il était fatigué.</em>',
    '<strong>Action simultanée</strong> : présent. <em>Ex : Je pense qu’il ment.</em>',
    '<strong>Action postérieure</strong> : futur. <em>Ex : Je pense qu’il mentira.</em>',
    '<strong>Principale au futur</strong> : même logique. <em>Ex : Il dira qu’il a oublié ; il dira qu’il est malade ; il dira qu’il viendra.</em>',
    '<strong>À retenir :</strong> principale au présent ou au futur = pas de piège, on garde les temps « naturels ».'
  ]),
  card('3. Principale au passé : le cœur du sujet', [
    '<strong>Action antérieure</strong> → <strong>plus-que-parfait</strong>. <em>Ex : Il croyait qu’elle était partie.</em>',
    '<strong>Action simultanée</strong> → <strong>imparfait</strong>. <em>Ex : Il croyait qu’elle dormait.</em>',
    '<strong>Action postérieure</strong> → <strong>conditionnel présent</strong> (le « futur dans le passé »). <em>Ex : Il croyait qu’elle viendrait.</em>',
    '<strong>Postérieure mais accomplie avant un autre moment</strong> → conditionnel passé. <em>Ex : Il pensait qu’à midi elle serait partie.</em>',
    '<strong>Exception : la vérité générale</strong> garde le présent. <em>Ex : Galilée soutenait que la Terre tourne autour du Soleil.</em>',
    '<strong>Mini-exemple :</strong> « Il m’a dit qu’il <strong>viendrait</strong> » et non « qu’il viendra ». Le futur n’est toléré que si l’action est encore à venir au moment où l’on parle ; au concours, choisis le <strong>conditionnel</strong>.'
  ]),
  card('4. Discours direct → discours indirect', [
    '<strong>Présent → imparfait</strong>. <em>Ex : « Je suis prêt » → Il a dit qu’il était prêt.</em>',
    '<strong>Passé composé → plus-que-parfait</strong>. <em>Ex : « J’ai fini » → Il a dit qu’il avait fini.</em>',
    '<strong>Futur → conditionnel présent</strong>. <em>Ex : « Je partirai » → Il a dit qu’il partirait.</em>',
    '<strong>Futur antérieur → conditionnel passé</strong>. <em>Ex : « J’aurai fini » → Il a dit qu’il aurait fini.</em>',
    '<strong>Les repères de temps et de lieu changent aussi</strong> : aujourd’hui → ce jour-là ; hier → la veille ; demain → le lendemain ; ici → là.',
    '<strong>Piège :</strong> « Il a dit qu’il partirait <strong>demain</strong> » mélange deux repères. Dans un récit au passé : « qu’il partirait <strong>le lendemain</strong> ».'
  ]),
  card('5. Avec le subjonctif', [
    '<strong>Principale au présent ou au futur</strong> : subjonctif <strong>présent</strong> (simultané ou postérieur), subjonctif <strong>passé</strong> (antérieur). <em>Ex : Je veux qu’il vienne ; je doute qu’il soit venu.</em>',
    '<strong>Principale au passé, langue courante</strong> : on garde le subjonctif présent ou passé. <em>Ex : Il fallait qu’il vienne ; j’étais content que tu sois venu.</em>',
    '<strong>Principale au passé, langue soutenue</strong> : subjonctif <strong>imparfait</strong> (simultané ou postérieur), subjonctif <strong>plus-que-parfait</strong> (antérieur). <em>Ex : Il fallait qu’il vînt ; bien qu’il eût été prévenu, il commit l’erreur.</em>',
    '<strong>Formes à reconnaître (3e personne)</strong> : qu’il fût, qu’il eût, qu’il vînt, qu’il fît, qu’il allât, qu’il prît ; au pluriel : qu’ils fussent, qu’ils eussent, qu’ils vinssent.',
    '<strong>Piège :</strong> qu’il <strong>fût</strong> (subjonctif imparfait, accent) ≠ il <strong>fut</strong> (passé simple). Test : remplace par « qu’il soit ». Si ça marche, c’est « fût ».',
    '<strong>À retenir :</strong> au TAGE MAGE, les deux registres sont acceptés ; quand on te demande « la langue soutenue » ou « la concordance stricte », c’est l’imparfait du subjonctif.'
  ]),
  card('6. L’hypothèse avec « si »', [
    '<strong>Si + présent → futur</strong> (ou présent, impératif). <em>Ex : Si tu viens, je serai content ; si tu viens, préviens-moi.</em>',
    '<strong>Si + imparfait → conditionnel présent</strong>. <em>Ex : Si j’avais le temps, je t’aiderais.</em>',
    '<strong>Si + plus-que-parfait → conditionnel passé</strong>. <em>Ex : Si j’avais su, je ne serais pas venu.</em>',
    '<strong>Conséquence dans le présent</strong> : si + plus-que-parfait → conditionnel présent. <em>Ex : Si tu m’avais écouté, tu aurais moins de problèmes aujourd’hui.</em>',
    '<strong>Piège :</strong> <strong>jamais de conditionnel juste après « si »</strong> d’hypothèse. « Si j’aurais su » est fautif. Même règle avec « même si ».',
    '<strong>Mais :</strong> le « si » <strong>interrogatif</strong> (= est-ce que) accepte le conditionnel. <em>Ex : Je me demandais s’il viendrait.</em>',
    '<strong>Langue soutenue</strong> : « S’il eût su, il fût venu » (plus-que-parfait du subjonctif dans les deux membres, dit conditionnel passé 2e forme).'
  ]),
  card('7. Quand, dès que, après que, avant que', [
    '<strong>Principale au futur, action d’abord terminée</strong> → futur antérieur. <em>Ex : Quand tu auras fini, tu pourras sortir.</em>',
    '<strong>Principale au passé simple</strong> → passé antérieur. <em>Ex : Dès qu’il eut appris la nouvelle, il partit.</em>',
    '<strong>Principale au passé composé ou à l’imparfait</strong> → plus-que-parfait. <em>Ex : Après qu’il était parti, nous avons dîné.</em>',
    '<strong>Après que + indicatif</strong> (l’action a eu lieu). <em>Ex : après qu’il est parti ; après qu’ils eurent mangé.</em>',
    '<strong>Avant que + subjonctif</strong> (l’action n’a pas encore eu lieu), « ne » explétif facultatif. <em>Ex : Range ta chambre avant qu’il (ne) vienne.</em>',
    '<strong>Piège :</strong> « après qu’il <strong>soit</strong> parti » est la faute la plus testée : après que → indicatif.'
  ]),
  card('8. Les pièges du concours', [
    '<strong>Si j’aurais</strong> → si j’avais.',
    '<strong>Il a dit qu’il viendra</strong> → il a dit qu’il viendrait (récit au passé).',
    '<strong>Après qu’il soit parti</strong> → après qu’il est parti / était parti / fut parti.',
    '<strong>Je serai / je serais</strong> : futur (certain) ou conditionnel (hypothèse, futur dans le passé). Test : passer à « nous » → nous serons / nous serions.',
    '<strong>Quand tu as fini, tu pourras</strong> → quand tu auras fini (futur antérieur).',
    '<strong>Il fallait qu’il fut</strong> → qu’il fût (ou qu’il soit).',
    '<strong>À retenir :</strong> au passé, la postériorité se dit au <strong>conditionnel</strong>, l’antériorité au <strong>plus-que-parfait</strong>, la simultanéité à l’<strong>imparfait</strong>.'
  ])
].join('') + '</div>';

export const CONCORDANCE_FICHE = {
  id: 'expr_concordance',
  title: 'La concordance des temps',
  desc: 'Principale au présent ou au passé, discours indirect, subjonctif, « si », quand/après que, pièges.',
  subtitle: 'Accorder le temps de la subordonnée avec celui de la principale',
  html: FICHE_HTML
};

// [énoncé, bonne réponse, [mauvaises réponses], explication]
const ROWS = [
  ['Complétez : « Il m’a assuré qu’il ___ le lendemain. »', 'viendrait', ['viendra', 'vienne', 'vint', 'viendrais'], 'Principale au passé + action postérieure → conditionnel présent (futur dans le passé), 3e personne : viendrait.'],
  ['Complétez : « Je croyais qu’elle ___ déjà. »', 'était partie', ['est partie', 'soit partie', 'serait partie', 'fut partie'], 'Principale au passé (croyais) + action antérieure → plus-que-parfait : était partie.'],
  ['Complétez : « Si j’___ le temps, je t’aiderais. »', 'avais', ['aurais', 'ai', 'aie', 'eus'], 'Si + imparfait → conditionnel présent. Jamais de conditionnel après le « si » d’hypothèse.'],
  ['Complétez : « Si tu ___ plus tôt, tu n’aurais pas raté le train. »', 'étais parti', ['serais parti', 'es parti', 'partirais', 'sois parti'], 'Si + plus-que-parfait → conditionnel passé (aurais raté).'],
  ['Complétez : « Quand tu ___ tes devoirs, tu pourras sortir. »', 'auras fini', ['as fini', 'aurais fini', 'finisses', 'avais fini'], 'Principale au futur, action terminée avant → futur antérieur : auras fini.'],
  ['Complétez : « Dès qu’il ___ la nouvelle, il partit. »', 'eut appris', ['avait appris', 'ait appris', 'eût appris', 'apprenait'], 'Principale au passé simple (partit), action immédiatement antérieure → passé antérieur : eut appris (sans accent : c’est un indicatif).'],
  ['Complétez : « Je doute qu’il ___ hier. »', 'soit venu', ['est venu', 'vienne', 'viendrait', 'était venu'], 'Douter que → subjonctif. Action antérieure (hier) avec principale au présent → subjonctif passé : soit venu.'],
  ['En concordance stricte (langue soutenue) : « Il fallait qu’il ___ à l’heure. »', 'arrivât', ['arriva', 'arriverait', 'arrivera', 'arrivait'], 'Principale au passé + subjonctif, registre soutenu → imparfait du subjonctif : qu’il arrivât (accent circonflexe). En langue courante : qu’il arrive.'],
  ['Dans « Galilée soutenait que la Terre tourne autour du Soleil », le présent « tourne » est :', 'correct : il exprime une vérité générale', ['fautif : il faut l’imparfait', 'fautif : il faut le conditionnel', 'fautif : il faut le subjonctif', 'correct seulement à l’oral'], 'Une vérité générale, toujours vraie, garde le présent même après une principale au passé.'],
  ['Quelle phrase est correcte ?', 'Si j’avais su, je ne serais pas venu.', ['Si j’aurais su, je ne serais pas venu.', 'Si j’avais su, je ne serai pas venu.', 'Si j’aurais su, je ne viendrais pas.', 'Si j’eus su, je ne serais pas venu.'], 'Si + plus-que-parfait → conditionnel passé. « Si j’aurais » est la faute type ; « serai » est un futur.'],
  ['Complétez : « Je me demandais s’il ___ le lendemain. »', 'viendrait', ['viendra', 'vienne', 'vînt', 'viens'], 'Ici « si » est interrogatif (= est-ce que) : le conditionnel est permis. Principale au passé + postériorité → viendrait.'],
  ['Mettez au discours indirect : Il a dit : « Je partirai demain. »', 'Il a dit qu’il partirait le lendemain.', ['Il a dit qu’il partira demain.', 'Il a dit qu’il partirait demain.', 'Il a dit qu’il parte le lendemain.', 'Il a dit qu’il était parti la veille.'], 'Futur → conditionnel présent, et demain → le lendemain (le repère devient celui du récit).'],
  ['Complétez : « Range ta chambre avant qu’il ne ___. »', 'vienne', ['viendra', 'vient', 'viendrait', 'est venu'], 'Avant que + subjonctif (l’action n’a pas encore eu lieu). Le « ne » est explétif, facultatif.'],
  ['Complétez : « Après qu’il ___, nous avons dîné. »', 'était parti', ['soit parti', 'fût parti', 'serait parti', 'parte'], 'Après que + indicatif. Principale au passé composé, action antérieure → plus-que-parfait : était parti.'],
  ['Complétez : « Si tu m’avais écouté, tu ___ moins de problèmes aujourd’hui. »', 'aurais', ['auras', 'as', 'aies', 'avais'], 'Condition passée (plus-que-parfait) mais conséquence dans le présent (aujourd’hui) → conditionnel présent : aurais.'],
  ['Complétez (langue courante) : « Elle exigeait que nous ___ à l’heure. »', 'soyons', ['sommes', 'serions', 'étions', 'serons'], 'Exiger que → subjonctif. En langue courante, on garde le subjonctif présent après une principale au passé : soyons (soutenu : fussions).'],
  ['Complétez : « Même si tu ___, je ne te croirais pas. »', 'insistais', ['insisterais', 'insistes', 'insistas', 'aies insisté'], '« Même si » suit les règles de « si » : imparfait → conditionnel présent (croirais). Jamais de conditionnel après si.'],
  ['Quelle est la forme de « être » à l’imparfait du subjonctif, 3e personne du singulier ?', 'qu’il fût', ['qu’il fut', 'qu’il fusse', 'qu’il soit', 'qu’il était'], 'Qu’il fût, avec accent circonflexe. « Il fut » est le passé simple ; « que je fusse » est la 1re personne.'],
  ['Complétez : « J’étais content que tu ___ venu. »', 'sois', ['es', 'étais', 'serais', 'seras'], 'Être content que → subjonctif. Action antérieure → subjonctif passé : que tu sois venu (soutenu : que tu fusses venu).'],
  ['Langue soutenue : « Bien qu’il ___ prévenu, il commit l’erreur. »', 'eût été', ['eut été', 'avait été', 'aurait été', 'sera'], 'Bien que → subjonctif. Principale au passé simple + antériorité, registre soutenu → plus-que-parfait du subjonctif : eût été (accent).'],
  ['Complétez : « Il pensait qu’à midi elle ___ déjà ___. »', 'serait… partie', ['sera… partie', 'était… partie', 'soit… partie', 'fût… partie'], 'Principale au passé + action postérieure mais accomplie avant un repère (midi) → conditionnel passé : serait partie.'],
  ['Quelle phrase respecte la concordance des temps ?', 'Il savait que tu réussirais.', ['Il savait que tu réussiras.', 'Il savait que tu réussisses.', 'Il sait que tu réussirais demain.', 'Il savait que tu as réussi demain.'], 'Principale au passé (savait) + postériorité → conditionnel présent : réussirais.']
];

export const CONCORDANCE_QCM = ROWS.map(r => ({
  prompt: r[0],
  options: [r[1], ...r[2]],
  answerIndex: 0,
  explanation: r[3]
}));
