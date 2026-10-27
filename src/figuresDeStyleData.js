/**
 * TAGE MAGE & SCORE IAE MESSAGE - Figures de Style Module
 * Source : Le Grand Manuel du Tage Mage (Joachim Pinto & Arnaud Sévigné) - Fiches 146 à 148
 */

// -------------------------------------------------------------
// 1. FICHE DE COURS OFFICIELLE : LES FIGURES DE STYLE
// -------------------------------------------------------------

export function renderMemoFiguresDeStyleCourse() {
  return {
    title: 'Fiche de Cours : Les Figures de Style',
    subtitle: 'Grand Manuel du TAGE MAGE® — Les 5 Familles & Pièges FNEGE',
    html: `
      <div style="display:flex; flex-direction:column; gap:16px;">
        
        <!-- Famille 1 : Répétition & Insistance -->
        <div class="math-card-visual">
          <div class="math-card-title">1. Figures de Répétition & Insistance</div>
          <div class="math-desc-list">
            <p>• <strong>Anaphore :</strong> Répétition d’un mot ou groupe de mots en <em>début</em> de phrase ou de vers. Ex : <em>« <strong>Paris</strong> outragé, <strong>Paris</strong> brisé, <strong>Paris</strong> martyrisé mais <strong>Paris</strong> libéré ! »</em> (De Gaulle).</p>
            <p>• <strong>Épiphore :</strong> Répétition d’un mot ou groupe de mots en <em>fin</em> de phrase ou de vers. Ex : <em>« Il riait <strong>tout le temps</strong>, chantait <strong>tout le temps</strong> et dansait <strong>tout le temps</strong> ! »</em></p>
            <p>• <strong>Chiasme (A-B / B-A) :</strong> Croisement en miroir d’éléments syntaxiques ou sémantiques. Ex : <em>« La neige fait au <strong>Nord</strong> [A] ce qu'au <strong>Sud</strong> [B] fait le <strong>sable</strong> [B] »</em> (V. Hugo) ; <em>« Il faut <strong>manger</strong> pour <strong>vivre</strong> [A-B], et non pas <strong>vivre</strong> pour <strong>manger</strong> [B-A] »</em> (Molière).</p>
            <p>• <strong>Parallélisme (A-B / A-B) :</strong> Symétrie linéaire sans inversion. Ex : <em>« Et jamais je ne pleure [A-B], et jamais je ne ris [A-B] »</em> (Baudelaire).</p>
            <p>• <strong>Gradation :</strong> Énumération ordonnée selon une intensité croissante ou décroissante. Ex : <em>« Va, cours, vole, et nous venge ! »</em> (Corneille).</p>
            <p>• <strong>Pléonasme :</strong> Répétition de termes ayant exactement le même sens. Ex : <em>« Allumer la lumière »</em>, <em>« Monter en haut »</em>, <em>« Prévoir à l'avance »</em>.</p>
          </div>
        </div>

        <!-- Famille 2 : Opposition & Rupture -->
        <div class="math-card-visual">
          <div class="math-card-title">2. Figures d'Opposition & Rupture</div>
          <div class="math-desc-list">
            <p>• <strong>Antithèse :</strong> Deux mots ou idées contraires situés à des endroits <em>séparés</em> de la phrase. Ex : <em>« Certains l’aiment <strong>chaud</strong>, d’autres l’aiment <strong>froid</strong>. »</em></p>
            <p>• <strong>Oxymore :</strong> Deux mots contradictoires réunis dans le <em>même groupe syntaxique immédiat</em>. Ex : <em>« Un <strong>soleil froid</strong> »</em>, <em>« Cette <strong>obscure clarté</strong> »</em> (Corneille), <em>« La <strong>légèreté pesante</strong> »</em>.</p>
            <p>• <strong>Antiphrase :</strong> Phrase exprimant le contraire de ce que l'on pense par pure ironie. Ex : <em>« Bravo, c'est du joli ! »</em> (devant une catastrophe).</p>
            <p>• <strong>Aposiopèse :</strong> Interruption brusque d'une phrase avec points de suspension, sous le coup de l'émotion ou de la menace. Ex : <em>« Osez-vous... J’ai envie de vous (...) ! »</em> (Virgile).</p>
            <p>• <strong>Zeugme / Zeugma :</strong> Un même verbe reliant deux compléments de registres hétérogènes (l'un concret, l'autre abstrait). Ex : <em>« Il a pris du <strong>ventre</strong> et de l'<strong>assurance</strong>. »</em></p>
          </div>
        </div>

        <!-- Famille 3 : Analogie & Substitution -->
        <div class="math-card-visual">
          <div class="math-card-title">3. Figures d'Analogie & Substitution</div>
          <div class="math-desc-list">
            <p>• <strong>Comparaison :</strong> Parallèle explicite avec <strong>outil de comparaison obligatoire</strong> (<em>comme, tel que, pareil à, ainsi que</em>). Ex : <em>« Elle est <strong>comme</strong> mon soleil. »</em>, <em>« Tu es belle <strong>comme</strong> le jour. »</em></p>
            <p>• <strong>Métaphore :</strong> Parallèle implicite <strong>SANS mot-outil</strong>. Ex : <em>« Elle <strong>est</strong> mon soleil. »</em>, <em>« Paris est un véritable océan. »</em>, <em>« Un serpent de fumée noire. »</em></p>
            <p>• <strong>Personnification :</strong> Traits humains prêtés à un élément inanimé, concret ou végétal. Ex : <em>« Cette rose aimable comme toi. »</em>, <em>« La forêt gémissait sous le vent. »</em></p>
            <p>• <strong>Allégorie :</strong> Personnification vivante d'une <em>notion abstraite universelle</em>. Ex : <em>« Ô Mort, vieux capitaine, il est temps ! »</em> (Baudelaire) ; la balance et le bandeau pour la Justice.</p>
            <p>• <strong>Métonymie :</strong> Remplacement d'un mot par un autre lié par une <em>contiguïté logique</em> (contenant pour contenu, lieu pour institution). Ex : <em>« Boire un <strong>verre</strong> »</em>, <em>« Faire de la <strong>voile</strong> »</em>, <em>« <strong>Bercy</strong> a tranché »</em>.</p>
            <p>• <strong>Synecdoque :</strong> Cas particulier de métonymie fondé sur une <em>relation d'inclusion matérielle</em> (la partie pour le tout). Ex : <em>« Tous les <strong>chapeaux</strong> se lèvent »</em> (= les hommes), <em>« Trouver un <strong>toit</strong> »</em> (= une maison).</p>
            <p>• <strong>Périphrase :</strong> Remplacement d'un mot simple par une locution descriptive imagée. Ex : <em>« La capitale de la France »</em> (= Paris), <em>« La langue de Shakespeare »</em> (= l'anglais).</p>
            <p>• <strong>Antonomase :</strong> Emploi d’un nom propre comme nom commun (ou l’inverse). Ex : <em>« Un Don Juan »</em>, <em>« Un Tartuffe »</em>, <em>« Une poubelle »</em>, <em>« La Dame de fer »</em>.</p>
          </div>
        </div>

        <!-- Famille 4 : Atténuation & Amplification -->
        <div class="math-card-visual">
          <div class="math-card-title">4. Figures d'Atténuation & Amplification</div>
          <div class="math-desc-list">
            <p>• <strong>Litote :</strong> En dire moins pour suggérer plus (utilise la double négation pour <strong>amplifier</strong> l'éloge). Ex : <em>« Ce garçon n'est <strong>pas sot</strong> »</em> (Marivaux) = il est très brillant ! <em>« Ce n'est <strong>pas mauvais</strong> »</em> = c'est excellent ! <em>« Va, je ne te <strong>hais point</strong> »</em> (Corneille) = je t'aime.</p>
            <p>• <strong>Euphémisme :</strong> Atténuer une réalité douloureuse, violente ou taboue pour ne pas blesser. Ex : <em>« Il nous a quittés »</em> = il est mort ; <em>« Les non-voyants »</em> = les aveugles.</p>
            <p>• <strong>Hyperbole :</strong> Exagération démesurée pour frapper les esprits ou caricaturer. Ex : <em>« Je suis <strong>mort de rire</strong> ! »</em>, <em>« Je <strong>meurs de soif</strong> ! »</em>, <em>« Je ne le vendrais pas pour 10 milliards ! »</em></p>
          </div>
        </div>

        <!-- Famille 5 : Sonorité -->
        <div class="math-card-visual">
          <div class="math-card-title">5. Figures de Sonorité</div>
          <div class="math-desc-list">
            <p>• <strong>Allitération :</strong> Répétition insistante de sons <strong>consonnes</strong>. Ex : <em>« Pour qui <strong>s</strong>ont ce<strong>s</strong> <strong>s</strong>erpents qui <strong>s</strong>ifflent <strong>s</strong>ur vos têtes ? »</em> (Racine) ; <em>« <strong>C</strong>a<strong>ss</strong>andre <strong>s</strong>ous <strong>s</strong>on <strong>c</strong>apuce. »</em></p>
            <p>• <strong>Assonance :</strong> Répétition insistante de sons <strong>voyelles</strong>. Ex : <em>« C<strong>e</strong> r<strong>ê</strong>ve <strong>é</strong>trange <strong>e</strong>t p**é**n**é**trant. »</em> (Verlaine).</p>
          </div>
        </div>

        <!-- Focus Méthode : Les 4 Duos Pièges -->
        <div class="math-card-visual" style="border-left: 4px solid #FF9500;">
          <div class="math-card-title" style="color:#D97706;">⚠️ Les 4 Duos Pièges Incontournables FNEGE</div>
          <div class="math-desc-list">
            <p>1. <strong>Litote vs Euphémisme :</strong> La litote amplifie l'affirmation par modestie (<em>« Pas bête »</em> = génial) ; l'euphémisme adoucit un drame pour protéger (<em>« Disparu »</em> = mort).</p>
            <p>2. <strong>Métaphore vs Comparaison :</strong> Présence obligatoire de l'outil (<em>comme, tel que</em>) pour la comparaison. Absent ➔ métaphore.</p>
            <p>3. <strong>Chiasme vs Parallélisme :</strong> Croisement en miroir A-B / B-A pour le chiasme ; parallélisme strict A-B / A-B.</p>
            <p>4. <strong>Métonymie vs Synecdoque :</strong> Lien logique externe pour la métonymie (<em>le contenant pour le contenu</em>) ; inclusion matérielle interne pour la synecdoque (<em>la partie pour le tout</em>).</p>
          </div>
        </div>

      </div>`
  };
}


// -------------------------------------------------------------
// 2. DECK FLASHCARDS INTERACTIF (25 CARTES CLÉS)
// -------------------------------------------------------------

export const FIGURES_DE_STYLE_FLASHCARDS = [
  {
    id: 1,
    category: "Répétition",
    front: "« Paris outragé, Paris brisé, Paris martyrisé mais Paris libéré ! » (Charles de Gaulle)\n\nQuelle figure de style est employée ici ?",
    backName: "L'Anaphore",
    backDef: "Répétition d’un mot ou groupe de mots en tête de plusieurs membres de phrases, propositions ou vers.",
    backTrap: "Piège : Ne pas confondre avec l'épiphore, qui place la répétition en fin de proposition !"
  },
  {
    id: 2,
    category: "Répétition",
    front: "« Cet enfant était joyeux : il riait tout le temps, chantait tout le temps et dansait tout le temps ! »\n\nQuelle figure de style est employée en fin de chaque proposition ?",
    backName: "L'Épiphore",
    backDef: "Répétition d’un mot ou d'une expression en fin de phrase, de vers ou de proposition.",
    backTrap: "Piège : C'est l'inverse strict de l'anaphore. Très valorisé dans les QCM FNEGE."
  },
  {
    id: 3,
    category: "Répétition",
    front: "« La neige fait au Nord ce qu’au Sud fait le sable. » (Victor Hugo)\n\nQuelle figure de style croise ainsi les éléments ?",
    backName: "Le Chiasme",
    backDef: "Disposition croisée de termes ou de structures syntaxiques selon le schéma en miroir A-B / B-A.",
    backTrap: "Formule : Nord (A) - Sud (B) // fait (B) - sable (A). Ne pas confondre avec le parallélisme !"
  },
  {
    id: 4,
    category: "Répétition",
    front: "« Il faut manger pour vivre, et non pas vivre pour manger. » (Molière)\n\nQuel est le nom de cette figure de construction croisée ?",
    backName: "Le Chiasme",
    backDef: "Inversion symétrique des termes : manger [A] / vivre [B] puis vivre [B] / manger [A].",
    backTrap: "Réflexe Tage Mage : Dès que les termes se croisent en X, c'est un chiasme !"
  },
  {
    id: 5,
    category: "Répétition",
    front: "« Et jamais je ne pleure, et jamais je ne ris. » (Charles Baudelaire)\n\nQuelle figure de style conserve rigoureusement la même structure syntaxique sans croisement ?",
    backName: "Le Parallélisme",
    backDef: "Répétition d'une même structure grammaticale dans deux membres de phrase selon le modèle A-B / A-B.",
    backTrap: "Piège : L'ordre ne s'inverse pas. Contrairement au chiasme, les lignes restent parallèles."
  },
  {
    id: 6,
    category: "Répétition",
    front: "« Allumer la lumière », « Monter en haut », « Prévoir à l'avance ».\n\nQuelle faute / figure de style trouve-t-on dans ces expressions ?",
    backName: "Le Pléonasme",
    backDef: "Répétition de mots ou de termes superflus qui ont exactement la même signification.",
    backTrap: "Question typique au Tage Mage : trouver l'intrus ou identifier le pléonasme à bannir."
  },
  {
    id: 7,
    category: "Opposition",
    front: "« Certains l’aiment chaud, d’autres l’aiment froid. »\n\nQuelle figure rapproche deux idées contraires dans une même phrase ?",
    backName: "L'Antithèse",
    backDef: "Opposition entre deux mots ou expressions séparés dans la phrase pour souligner un contraste.",
    backTrap: "Piège : Les deux mots sont distants dans la phrase, contrairement à l'oxymore où ils sont accolés !"
  },
  {
    id: 8,
    category: "Opposition",
    front: "« Cette obscure clarté qui tombe des étoiles. » (Corneille)\n« Un silence assourdissant », « La légèreté pesante ».\n\nQuelle est cette figure réunissant deux mots contraires dans le même groupe ?",
    backName: "L'Oxymore",
    backDef: "Rapprochement étroit de deux termes contradictoires au sein du même groupe syntaxique (nom + adjectif).",
    backTrap: "Réflexe : Mots collés et incompatibles = Oxymore. Mots opposés séparés = Antithèse."
  },
  {
    id: 9,
    category: "Opposition",
    front: "Devant une énorme gaffe d'un ami, vous lui dites : « Bravo, c'est du joli ! »\n\nQuelle figure de style ironique exprime le contraire de votre pensée ?",
    backName: "L'Antiphrase",
    backDef: "Figure consistant à employer une phrase dans un sens diamétralement opposé à ce que l'on veut dire.",
    backTrap: "C'est l'arme rhétorique absolue de l'ironie au concours."
  },
  {
    id: 10,
    category: "Opposition",
    front: "« Osez-vous bouleverser le ciel et la terre... J'ai envie de vous (...) ! » (Virgile)\n\nQuelle figure de style interrompt brusquement la phrase par des points de suspension ?",
    backName: "L'Aposiopèse",
    backDef: "Interruption soudaine du discours laissant au lecteur le soin de compléter la phrase par sous-entendu.",
    backTrap: "Apparaît dans le Test Blanc n°8 du Grand Manuel (Fiche 159). Marque la colère ou la menace contenue."
  },
  {
    id: 11,
    category: "Opposition",
    front: "« Il a pris du ventre et de l'assurance. »\n« Vêtu de probité candide et de lin blanc » (Victor Hugo)\n\nQuelle figure attelle sous un verbe unique un élément concret et un élément abstrait ?",
    backName: "Le Zeugme (ou Zeugma)",
    backDef: "Coordination sous une même syntaxe de deux compléments de registres différents (souvent concret + abstrait).",
    backTrap: "Figure d'attelage stylistique très classique aux concours de management (SIM / Tage Mage)."
  },
  {
    id: 12,
    category: "Analogie",
    front: "« Tu es belle comme le jour. »\n« Ses yeux brillaient tel un phare dans la nuit. »\n\nPourquoi s'agit-il d'une comparaison et non d'une métaphore ?",
    backName: "La Comparaison",
    backDef: "Parallèle explicite entre un comparé et un comparant grâce à un outil de comparaison (comme, tel que, pareil à).",
    backTrap: "Condition obligatoire : la présence du mot-outil. Sans outil de liaison, elle devient métaphore."
  },
  {
    id: 13,
    category: "Analogie",
    front: "« Paris est un véritable océan. »\n« Un gros serpent de fumée noire s'échappait du toit. »\n\nQuelle figure rapproche deux réalités sans aucun outil de comparaison ?",
    backName: "La Métaphore",
    backDef: "Assimilation directe d'un comparé à un comparant sans mot de comparaison (comme, tel que...).",
    backTrap: "Piège : Dès qu'on retire « comme », la comparaison se transforme en métaphore !"
  },
  {
    id: 14,
    category: "Analogie",
    front: "« La forêt gémissait sous les assauts répétés du vent d'hiver. »\n\nQuelle figure de style prête des actions humaines à un élément naturel ?",
    backName: "La Personnification",
    backDef: "Attribution de traits, de comportements ou d'émotions humaines à un objet, une plante ou un animal.",
    backTrap: "Différence : La personnification cible une entité concrète. L'allégorie cible une notion abstraite."
  },
  {
    id: 15,
    category: "Analogie",
    front: "« Ô Mort, vieux capitaine, il est temps, levons l'ancre ! » (Charles Baudelaire)\n\nPourquoi cette figure est-elle une Allégorie et non une simple personnification ?",
    backName: "L'Allégorie",
    backDef: "Représentation concrète et animée d'une idée abstraite universelle (la Mort, le Temps, la Justice, l'Amour).",
    backTrap: "Critère infaillible : L'entité personnifiée est un concept abstrait, souvent doté d'une majuscule."
  },
  {
    id: 16,
    category: "Substitution",
    front: "« Boire un verre », « Faire de la voile », « L'Élysée a publié un communiqué ».\n\nQuelle figure remplace un mot par un autre lié par une contiguïté logique ?",
    backName: "La Métonymie",
    backDef: "Désignation d'un objet/concept par un autre avec lequel il entretient un lien logique (contenant/contenu, lieu/pouvoir).",
    backTrap: "Le lien est fonctionnel ou logique, mais pas une relation physique de décomposition (partie pour le tout)."
  },
  {
    id: 17,
    category: "Substitution",
    front: "« Tous les chapeaux se lèvent à son entrée. » (pour désigner les hommes)\n« Trouver un toit » (pour désigner une maison).\n\nQuelle figure utilise la partie pour désigner le tout ?",
    backName: "La Synecdoque",
    backDef: "Variante de métonymie fondée sur un rapport d'inclusion matérielle : la partie pour le tout, ou la matière pour l'objet.",
    backTrap: "Test Blanc n°4 du Grand Manuel : « Tous les chapeaux se lèvent » = Synecdoque !"
  },
  {
    id: 18,
    category: "Substitution",
    front: "« La capitale de la France » pour Paris.\n« La langue de Shakespeare » pour l'anglais.\n« L'or noir » pour le pétrole.\n\nQuelle figure remplace un mot par une locution descriptive ?",
    backName: "La Périphrase",
    backDef: "Remplacement d’un mot unique par une expression plus longue et descriptive qui en évoque les propriétés.",
    backTrap: "Très fréquente en compréhension de texte et en argumentation pour éviter les répétitions."
  },
  {
    id: 19,
    category: "Substitution",
    front: "« C'est un vrai Don Juan ! »\n« Il a jeté les papiers dans la poubelle. »\n« La Dame de fer a réformé le pays. »\n\nQuelle figure transforme un nom propre en nom commun ou l'inverse ?",
    backName: "L'Antonomase",
    backDef: "Utilisation d'un nom propre comme nom commun (Tartuffe, Poubelle, Mécène) ou d'un nom commun pour un nom propre.",
    backTrap: "Apparaît dans le Test Blanc n°8 du Grand Manuel (Fiche 159). À connaître impérativement."
  },
  {
    id: 20,
    category: "Atténuation",
    front: "« Ce garçon-ci n’est pas sot, et je ne plains pas la soubrette qui l’aura. » (Marivaux)\n\nQuelle figure de style dit le moins pour faire entendre avec force le plus ?",
    backName: "La Litote",
    backDef: "Atténuation de l'expression (très souvent par double négation) dans le but d'amplifier le sens réel.",
    backTrap: "« N'est pas sot » = « Il est très intelligent » ! La litote renforce l'affirmation, l'euphémisme l'adoucit."
  },
  {
    id: 21,
    category: "Atténuation",
    front: "« Va, je ne te hais point. » (Chimène à Rodrigue dans Le Cid de Corneille)\n\nQuelle figure de style exprime un amour immense à travers une négation feinte ?",
    backName: "La Litote",
    backDef: "Dire « je ne te hais point » pour signifier « je t'aime éperdument ».",
    backTrap: "C'est l'exemple historique absolu de la litote dans toute la littérature française."
  },
  {
    id: 22,
    category: "Atténuation",
    front: "« Il nous a quittés paisiblement ce matin. » (= il est mort)\n« Les personnes défavorisées » (= les pauvres)\n\nQuelle figure adoucit une réalité brutale ou douloureuse ?",
    backName: "L'Euphémisme",
    backDef: "Atténuation délibérée d'une vérité blessante, tragique ou vulgaire pour ne pas choquer l'interlocuteur.",
    backTrap: "Duo piège : Litote amplifie par modestie ; Euphémisme protège la sensibilité en masquant un drame."
  },
  {
    id: 23,
    category: "Amplification",
    front: "« Je meurs de faim ! »\n« Je ne m'en séparerais pas pour dix milliards d'euros ! »\n\nQuelle figure de style utilise une exagération démesurée ?",
    backName: "L'Hyperbole",
    backDef: "Exagération manifeste des termes dans un but d'emphase, d'intensité dramatique ou d'humour.",
    backTrap: "Piège du Test Blanc n°13 : distinguer une hyperbole d'une phrase énonçant un fait scientifique exact mesurable !"
  },
  {
    id: 24,
    category: "Sonorité",
    front: "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine, Andromaque)\n\nQuelle figure de style répète ici la consonne [s] ?",
    backName: "L'Allitération",
    backDef: "Répétition expressive et insistante d’une même consonne ou son consonantique dans une phrase.",
    backTrap: "C'est la première question d'application de la fiche 146 du Grand Manuel (Réponse A)."
  },
  {
    id: 25,
    category: "Sonorité",
    front: "« Ce rêve étrange et pénétrant... » (Paul Verlaine)\n« Tout m'étouffe et m'empourpre... »\n\nQuelle figure répète une même sonorité de voyelle ?",
    backName: "L'Assonance",
    backDef: "Répétition expressive d’un même son vocalique (voyelle) dans une suite de mots rapprochés.",
    backTrap: "Allitération = Consonnes. Assonance = Voyelles."
  }
];


// -------------------------------------------------------------
// 3. QUIZ QCM OFFICIEL : FIGURES DE STYLE (20 QUESTIONS TYPES)
// -------------------------------------------------------------

export const FIGURES_DE_STYLE_QUIZ_DATA = [
  {
    prompt: "Quelle figure de style correspond le plus à la citation suivante : « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine, Andromaque)",
    options: ["Une allitération", "Un oxymore", "Une métaphore", "Une antiphrase"],
    answerIndex: 0
  },
  {
    prompt: "Parmi les expressions suivantes, laquelle n’utilise PAS la figure de style de la métaphore ?",
    options: ["Tu es lent, une vraie tortue !", "Paris est un véritable océan : profond et mystérieux.", "Tu es belle comme le jour.", "Un gros serpent de fumée noire s'échappait."],
    answerIndex: 2
  },
  {
    prompt: "Quelle figure de style est employée dans la phrase : « La neige fait au Nord ce qu’au Sud fait le sable » (Victor Hugo) ?",
    options: ["Un chiasme", "Un parallélisme", "Une litote", "Une antiphrase"],
    answerIndex: 0
  },
  {
    prompt: "Quelle figure de style est utilisée à travers l’expression « Tous les chapeaux se lèvent à son entrée » ?",
    options: ["La synecdoque", "La métaphore", "L'oxymore", "L'hyperbole"],
    answerIndex: 0
  },
  {
    prompt: "« Ce garçon-ci n’est pas sot, et je ne plains pas la soubrette qui l’aura. » (Marivaux). Quelle figure est au cœur de cette réplique ?",
    options: ["Une litote", "Un euphémisme", "Un pléonasme", "Une métonymie"],
    answerIndex: 0
  },
  {
    prompt: "Quelle figure de style trouve-t-on dans l’expression « Allumer la lumière » ou « Monter en haut » ?",
    options: ["Un pléonasme", "Une personnification", "Un euphémisme", "Une métonymie"],
    answerIndex: 0
  },
  {
    prompt: "« Cet enfant était joyeux : il riait tout le temps, chantait tout le temps et dansait tout le temps ! » Quelle est la figure employée en fin de membres ?",
    options: ["Une épiphore", "Une anaphore", "Un chiasme", "Une périphrase"],
    answerIndex: 0
  },
  {
    prompt: "Parmi les expressions suivantes, laquelle n’utilise PAS la figure de style de l’hyperbole ?",
    options: ["J’ai mangé pour dix au dîner hier soir.", "Je meurs de faim.", "Le soleil est situé à plus d’une centaine de millions de kilomètres de la Terre.", "Je ne m'en séparerais pas pour dix milliards !"],
    answerIndex: 2
  },
  {
    prompt: "Quelle figure de style trouve-t-on dans l’expression : « La légèreté pesante de ses idées » ou « Cette obscure clarté » ?",
    options: ["Un oxymore", "Une hyperbole", "Une personnification", "Une litote"],
    answerIndex: 0
  },
  {
    prompt: "« Osez-vous bouleverser le ciel et la terre... J'ai envie de vous (...) ! » (Virgile). Quelle figure interrompt la phrase sous l'effet de la colère ?",
    options: ["Une aposiopèse", "Une antonomase", "Une antiphrase", "Une gradation"],
    answerIndex: 0
  },
  {
    prompt: "Quelle figure remplace le mot Paris par « La capitale de la France » ou l'anglais par « La langue de Shakespeare » ?",
    options: ["Une périphrase", "Une métonymie", "Une allégorie", "Un euphémisme"],
    answerIndex: 0
  },
  {
    prompt: "« C'est un vrai Don Juan » ou « Il a jeté la lettre dans la poubelle ». Quelle figure utilise un nom propre pour un nom commun ?",
    options: ["L'antonomase", "L'allégorie", "L'antithèse", "L'anacoluthe"],
    answerIndex: 0
  },
  {
    prompt: "« Il a pris du ventre et de l'assurance. » Quelle figure attelle ici un complément concret et un abstrait sous un même verbe ?",
    options: ["Un zeugme (zeugma)", "Un oxymore", "Une antiphrase", "Un chiasme"],
    answerIndex: 0
  },
  {
    prompt: "« Il nous a quittés paisiblement dans son sommeil. » Quelle figure adoucit l'annonce d'un décès ?",
    options: ["Un euphémisme", "Une litote", "Une hyperbole", "Une périphrase"],
    answerIndex: 0
  },
  {
    prompt: "« Va, cours, vole, et nous venge ! » (Corneille). Quelle figure ordonne une succession de termes d'intensité croissante ?",
    options: ["Une gradation", "Une allitération", "Une anaphore", "Un pléonasme"],
    answerIndex: 0
  },
  {
    prompt: "« Certains l’aiment chaud, d’autres l’aiment froid. » Quelle figure oppose deux idées éloignées dans la même phrase ?",
    options: ["Une antithèse", "Un oxymore", "Un chiasme", "Une antiphrase"],
    answerIndex: 0
  },
  {
    prompt: "« La forêt gémissait sous le vent d'automne. » Quelle figure attribue une réaction humaine à un élément végétal ?",
    options: ["Une personnification", "Une allégorie", "Une métonymie", "Une litote"],
    answerIndex: 0
  },
  {
    prompt: "« Ô Mort, vieux capitaine, il est temps, levons l'ancre ! » Pourquoi cette figure est-elle une allégorie ?",
    options: ["Parce qu'elle personnifie une notion abstraite universelle (la Mort)", "Parce qu'elle utilise un mot-outil de comparaison", "Parce qu'elle contient une inversion en miroir", "Parce qu'elle atténue une réalité douloureuse"],
    answerIndex: 0
  },
  {
    prompt: "« Hier, pour se changer les idées, Jonas et Camille sont allés boire un verre en ville. » Quelle figure désigne le liquide par son récipient ?",
    options: ["Une métonymie", "Une synecdoque", "Une périphrase", "Une antiphrase"],
    answerIndex: 0
  },
  {
    prompt: "« Ce rêve étrange et pénétrant... » (Verlaine). Quelle figure de style fait entendre une répétition insistante de voyelles ?",
    options: ["Une assonance", "Une allitération", "Une anaphore", "Un zeugme"],
    answerIndex: 0
  }
];
