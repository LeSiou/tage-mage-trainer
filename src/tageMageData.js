/**
 * TAGE MAGE - Data & Course Module
 */

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const TM_COMPREHENSION_QUESTIONS = [
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le dilemme central de l'autorité de régulation européenne présenté dans le texte ?</div>",
    "options": [
      "Concilier la modernisation des outils juridiques anti-cartels avec la préservation de la compétitivité et de l'innovation",
      "Remplacer l'ensemble des réglementations industrielles par des normes environnementales plus strictes",
      "Autoriser les ententes tarifaires entre géants du numérique pour favoriser leur expansion internationale",
      "Sanctionner systématiquement les services gratuits en raison de leur impact négatif sur les recettes fiscales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, pour quelle raison les modèles du numérique échappent-ils en partie au droit classique de la concurrence ?</div>",
    "options": [
      "Parce qu'ils ne reposent pas sur des ententes tarifaires classiques mais sur la gratuité d'usage et la collecte de données",
      "Parce qu'ils sont exemptés de toute obligation légale en vertu des traités commerciaux transatlantiques",
      "Parce qu'ils refusent de commercialiser leurs produits au sein des pays membres de l'Union européenne",
      "Parce qu'ils investissent l'intégralité de leurs bénéfices dans des projets de recherche d'intérêt général"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence des cartels transfrontaliers est explicitement dénoncée par la Commission européenne ?</div>",
    "options": [
      "L'altération directe du pouvoir d'achat des consommateurs et la dégradation de la compétitivité du marché unique",
      "La baisse spectaculaire des investissements publics dans le secteur des transports ferroviaires",
      "L'obligation pour les petites entreprises de délocaliser leurs centres de recherche hors d'Europe",
      "La hausse artificielle des taux d'intérêt accordés aux prêts bancaires d'équipement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel qualificatif résume le mieux la position des économistes cités dans le texte ?</div>",
    "options": [
      "Réservée quant à l'adéquation de la réglementation actuelle face aux nouvelles réalités numériques",
      "Pleinement enthousiaste devant la sévérité accrue des amendes prononcées contre les cartels",
      "Hostile à toute forme d'interventionnisme étatique dans la sphère commerciale",
      "Indifférente aux mutations technologiques apportées par la collecte de données"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'idée générale qui se dégage de cet extrait ?</div>",
    "options": [
      "Le droit de la concurrence doit évoluer pour traiter efficacement les défis posés par les acteurs de la nouvelle économie",
      "La répression des ententes industrielles a perdu toute utilité dans le contexte de la mondialisation",
      "Les entreprises européennes doivent fusionner sans restriction pour résister à la concurrence asiatique",
      "La gratuité des services en ligne constitue le principal risque d'inflation pour l'économie européenne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, quelle contrainte légale étrangère suscite la vive inquiétude des acteurs européens ?</div>",
    "options": [
      "La portée extraterritoriale de lois permettant l'accès et la saisie de données par des autorités étrangères",
      "L'interdiction stricte d'exporter des processeurs à haute performance vers les pays d'Europe continentale",
      "L'imposition de taxes exorbitantes sur les transactions bancaires effectuées via des plateformes mobiles",
      "L'obligation de traduire l'ensemble des codes sources des logiciels en langue anglaise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel obstacle majeur entrave la conquête rapide d'une véritable autonomie numérique européenne ?</div>",
    "options": [
      "Le retard cumulé dans les infrastructures matérielles et le manque d'opérateurs souverains de taille critique",
      "Le désintérêt total des entreprises privées pour la confidentialité de leurs informations stratégiques",
      "L'interdiction promulguée par l'Union européenne de construire de nouveaux data centers écologiques",
      "La supériorité incontestée des normes européennes de protection des données sur l'ensemble de la planète"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment est qualifié l'arbitrage auquel font face les entreprises européennes ?</div>",
    "options": [
      "Une tension permanente entre l'efficience d'usage des offres dominantes et l'exigence de sécurité souveraine",
      "Un conflit irréconciliable entre la rémunération de leurs salariés et le paiement des abonnements logiciels",
      "Une obligation d'abandonner l'usage de l'informatique pour revenir à des processus purement manuels",
      "Un choix imposé par la législation d'utiliser exclusivement des infrastructures développées en interne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'intention principale de l'auteur à travers cet extrait ?</div>",
    "options": [
      "Analyser la complexité stratégique et les limites d'une quête de souveraineté numérique en Europe",
      "Faire l'éloge inconditionnel des monopoles informatiques asiatiques et américains",
      "Démontrer que la protection des données personnelles est un sujet secondaire pour la compétitivité",
      "Proposer le démantèlement immédiat de tous les réseaux de télécommunication intercontinentaux"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que garantissent idéalement les initiatives de « cloud de confiance » évoquées dans le texte ?</div>",
    "options": [
      "L'immunité contre les lois d'injonction extraterritoriales et le contrôle technologique des infrastructures",
      "Le remboursement intégral de l'ensemble des dépenses informatiques en cas de panne de réseau",
      "La baisse automatique de moitié de la consommation d'électricité des serveurs hébergés",
      "L'accès gratuit et universel à toutes les bases de données d'études de marché mondiales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : D'après l'auteur, quelle réorientation majeure caractérise les nouvelles stratégies logistiques ?</div>",
    "options": [
      "Le passage de la recherche prioritaire du coût minimal à la recherche de la résilience globale",
      "Le retour définitif à des économies agricoles strictement locales sans échanges régionaux",
      "L'abandon du transport maritime au profit exclusif du fret aérien longue distance",
      "La fermeture totale des frontières commerciales avec l'ensemble des nations émergentes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle distinction le texte établit-il entre le repli autarcique et le « nearshoring » ?</div>",
    "options": [
      "Le nearshoring est une réorganisation géographique pragmatique axée sur la résilience et non un rejet des échanges",
      "Le nearshoring interdit tout échange de produits finis entre pays membres d'un même continent",
      "L'autarcie cherche à exporter massivement alors que le nearshoring se concentre sur les importations",
      "Il n'existe aucune différence fondamentale entre ces deux concepts selon les économistes cités"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quels obstacles concrétisent la difficulté de relocaliser rapidement la production ?</div>",
    "options": [
      "L'ampleur des capitaux à investir et le déficit local de compétences techniques spécialisées",
      "L'opposition farouche des consommateurs à acheter des produits fabriqués à proximité",
      "L'absence totale de technologies automatisées dans les usines européennes actuelles",
      "La surabondance de matières premières qui déprécie la valeur des biens manufacturés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que désigne précisément le terme « friendshoring » dans le contexte du texte ?</div>",
    "options": [
      "Le transfert prioritaire d'activités industrielles vers des nations partenaires stratégiques et politiques",
      "L'obligation de créer des joint-ventures avec des associations à but non lucratif",
      "La baisse des tarifs de douane uniquement pour les produits de grande consommation biologique",
      "Le recrutement exclusif de managers diplômés d'écoles partenaires de l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel était le principe directeur dominant des chaînes d'approvisionnement au cours des trente dernières années ?</div>",
    "options": [
      "La maximisation des gains de coût de production via la fragmentation et la délocalisation",
      "La recherche systématique de l'impact environnemental le plus neutre possible",
      "La constitution de stocks stratégiques massifs au sein de chaque pays consommateur",
      "L'égalisation stricte des rémunérations entre ouvriers des différents continents"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle mutation des aspirations des hauts potentiels est mise en évidence dans cet extrait ?</div>",
    "options": [
      "Le rejet d'un plan de carrière imposé au détriment de l'équilibre de vie et de la santé personnelle",
      "Le souhait d'effectuer l'intégralité de leur temps de travail sans aucun outil informatique",
      "La demande d'une baisse générale de leurs responsabilités opérationnelles et salariales",
      "Le refus d'accéder aux postes de direction générale dans les entreprises cotées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment évoluent les critères de sélection des talents au sein des DRH selon l'auteur ?</div>",
    "options": [
      "L'expérience concrète du terrain et la résilience l'emportent sur le charisme statutaire classique",
      "La priorité absolue est donnée au nombre d'heures de présence physique au bureau",
      "La sélection s'effectue désormais exclusivement sur des critères d'ancienneté dans l'organisation",
      "Les compétences managériales sont totalement abandonnées au profit de tests de mémoire"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel reproche est adressé aux systèmes traditionnels de gestion des hauts potentiels ?</div>",
    "options": [
      "Leur opacité organisationnelle et leur rigidité face aux évolutions des modes de vie",
      "Leur coût de fonctionnement nul qui dévalorise le travail des consultants externes",
      "L'obligation légale d'embaucher uniquement des profils issus du secteur public",
      "Leur incapacité à proposer des augmentations de salaire aux dirigeants chevronnés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel risque pose le maintien de statuts managériaux hermétiques selon le texte ?</div>",
    "options": [
      "Susciter de vives frustrations parmi les collaborateurs et nuire à la cohésion d'équipe",
      "Provoquer une baisse immédiate du chiffre d'affaires sur le marché boursier",
      "Entraîner la fermeture automatique des filiales situées à l'étranger",
      "Empêcher les entreprises de souscrire des assurances responsabilité civile"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel titre résume le mieux l'orientation principale du texte ?</div>",
    "options": [
      "Gestion des talents : vers la fin du modèle classique et l'émergence de nouveaux critères",
      "Pourquoi les entreprises doivent supprimer l'ensemble de leurs services Ressources Humaines",
      "La hausse ininterrompue de la mobilité internationale chez les jeunes diplômés",
      "L'impact positif des carrières rigides sur la motivation des salariés du secteur privé"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le problème fondamental posé par l'intégration massive du solaire et de l'éolien ?</div>",
    "options": [
      "Leur nature intermittente qui s'oppose à la logique de régulation centralisée des réseaux historiques",
      "Leur coût de fabrication qui demeure plus élevé que celui des centrales thermiques à charbon",
      "L'interdiction légale de raccorder ces installations aux lignes à haute tension européennes",
      "L'impossibilité physique de mesurer l'électricité produite par des méthodes électroniques"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Où se situe désormais le goulot d'étranglement majeur de la transition énergétique selon l'auteur ?</div>",
    "options": [
      "Dans la capacité industrielle à déployer des technologies de stockage et de flexibilité du réseau",
      "Dans le refus des consommateurs d'utiliser de l'électricité issue de ressources renouvelables",
      "Dans la hausse du prix des composants mécaniques d'assemblage des éoliennes terrestres",
      "Dans l'absence totale de politiques publiques de soutien à la décarbonation dans le monde"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence paradoxale est associée aux pics d'injection de production renouvelable ?</div>",
    "options": [
      "L'émergence de cours monétaires ou prix négatifs sur les marchés de gros de l'électricité",
      "La destruction physique immédiate des transformateurs de quartier",
      "L'augmentation des émissions de dioxyde de carbone de l'industrie lourde",
      "La baisse automatique de la température moyenne des villes côtières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelles technologies sont citées pour résoudre le défi de l'intermittence ?</div>",
    "options": [
      "Les batteries stationnaires, les stations de pompage-turbinage et l'hydrogène décarboné",
      "Le renforcement exclusif du parc de centrales thermiques alimentées au fioul lourd",
      "Le remplacement des lignes électriques par des conduites souterraines de gaz naturel",
      "L'arrêt des centrales hydrauliques pendant les périodes de forte insolation"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est la conclusion essentielle défendue dans cet extrait ?</div>",
    "options": [
      "La transition écologique nécessite une transformation globale de l'architecture et du stockage électrique",
      "Les énergies renouvelables doivent être abandonnées au profit des énergies fossiles classiques",
      "Le stockage de l'énergie est un problème résolu qui ne nécessite plus d'investissements publics",
      "La consommation d'électricité doit être réduite de 90 % pour maintenir l'équilibre du réseau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le dilemme central de l'autorité de régulation européenne présenté dans le texte ?</div>",
    "options": [
      "Concilier la modernisation des outils juridiques anti-cartels avec la préservation de la compétitivité et de l'innovation",
      "Remplacer l'ensemble des réglementations industrielles par des normes environnementales plus strictes",
      "Autoriser les ententes tarifaires entre géants du numérique pour favoriser leur expansion internationale",
      "Sanctionner systématiquement les services gratuits en raison de leur impact négatif sur les recettes fiscales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, pour quelle raison les modèles du numérique échappent-ils en partie au droit classique de la concurrence ?</div>",
    "options": [
      "Parce qu'ils ne reposent pas sur des ententes tarifaires classiques mais sur la gratuité d'usage et la collecte de données",
      "Parce qu'ils sont exemptés de toute obligation légale en vertu des traités commerciaux transatlantiques",
      "Parce qu'ils refusent de commercialiser leurs produits au sein des pays membres de l'Union européenne",
      "Parce qu'ils investissent l'intégralité de leurs bénéfices dans des projets de recherche d'intérêt général"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence des cartels transfrontaliers est explicitement dénoncée par la Commission européenne ?</div>",
    "options": [
      "L'altération directe du pouvoir d'achat des consommateurs et la dégradation de la compétitivité du marché unique",
      "La baisse spectaculaire des investissements publics dans le secteur des transports ferroviaires",
      "L'obligation pour les petites entreprises de délocaliser leurs centres de recherche hors d'Europe",
      "La hausse artificielle des taux d'intérêt accordés aux prêts bancaires d'équipement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel qualificatif résume le mieux la position des économistes cités dans le texte ?</div>",
    "options": [
      "Réservée quant à l'adéquation de la réglementation actuelle face aux nouvelles réalités numériques",
      "Pleinement enthousiaste devant la sévérité accrue des amendes prononcées contre les cartels",
      "Hostile à toute forme d'interventionnisme étatique dans la sphère commerciale",
      "Indifférente aux mutations technologiques apportées par la collecte de données"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'idée générale qui se dégage de cet extrait ?</div>",
    "options": [
      "Le droit de la concurrence doit évoluer pour traiter efficacement les défis posés par les acteurs de la nouvelle économie",
      "La répression des ententes industrielles a perdu toute utilité dans le contexte de la mondialisation",
      "Les entreprises européennes doivent fusionner sans restriction pour résister à la concurrence asiatique",
      "La gratuité des services en ligne constitue le principal risque d'inflation pour l'économie européenne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, quelle contrainte légale étrangère suscite la vive inquiétude des acteurs européens ?</div>",
    "options": [
      "La portée extraterritoriale de lois permettant l'accès et la saisie de données par des autorités étrangères",
      "L'interdiction stricte d'exporter des processeurs à haute performance vers les pays d'Europe continentale",
      "L'imposition de taxes exorbitantes sur les transactions bancaires effectuées via des plateformes mobiles",
      "L'obligation de traduire l'ensemble des codes sources des logiciels en langue anglaise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel obstacle majeur entrave la conquête rapide d'une véritable autonomie numérique européenne ?</div>",
    "options": [
      "Le retard cumulé dans les infrastructures matérielles et le manque d'opérateurs souverains de taille critique",
      "Le désintérêt total des entreprises privées pour la confidentialité de leurs informations stratégiques",
      "L'interdiction promulguée par l'Union européenne de construire de nouveaux data centers écologiques",
      "La supériorité incontestée des normes européennes de protection des données sur l'ensemble de la planète"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment est qualifié l'arbitrage auquel font face les entreprises européennes ?</div>",
    "options": [
      "Une tension permanente entre l'efficience d'usage des offres dominantes et l'exigence de sécurité souveraine",
      "Un conflit irréconciliable entre la rémunération de leurs salariés et le paiement des abonnements logiciels",
      "Une obligation d'abandonner l'usage de l'informatique pour revenir à des processus purement manuels",
      "Un choix imposé par la législation d'utiliser exclusivement des infrastructures développées en interne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'intention principale de l'auteur à travers cet extrait ?</div>",
    "options": [
      "Analyser la complexité stratégique et les limites d'une quête de souveraineté numérique en Europe",
      "Faire l'éloge inconditionnel des monopoles informatiques asiatiques et américains",
      "Démontrer que la protection des données personnelles est un sujet secondaire pour la compétitivité",
      "Proposer le démantèlement immédiat de tous les réseaux de télécommunication intercontinentaux"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que garantissent idéalement les initiatives de « cloud de confiance » évoquées dans le texte ?</div>",
    "options": [
      "L'immunité contre les lois d'injonction extraterritoriales et le contrôle technologique des infrastructures",
      "Le remboursement intégral de l'ensemble des dépenses informatiques en cas de panne de réseau",
      "La baisse automatique de moitié de la consommation d'électricité des serveurs hébergés",
      "L'accès gratuit et universel à toutes les bases de données d'études de marché mondiales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : D'après l'auteur, quelle réorientation majeure caractérise les nouvelles stratégies logistiques ?</div>",
    "options": [
      "Le passage de la recherche prioritaire du coût minimal à la recherche de la résilience globale",
      "Le retour définitif à des économies agricoles strictement locales sans échanges régionaux",
      "L'abandon du transport maritime au profit exclusif du fret aérien longue distance",
      "La fermeture totale des frontières commerciales avec l'ensemble des nations émergentes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle distinction le texte établit-il entre le repli autarcique et le « nearshoring » ?</div>",
    "options": [
      "Le nearshoring est une réorganisation géographique pragmatique axée sur la résilience et non un rejet des échanges",
      "Le nearshoring interdit tout échange de produits finis entre pays membres d'un même continent",
      "L'autarcie cherche à exporter massivement alors que le nearshoring se concentre sur les importations",
      "Il n'existe aucune différence fondamentale entre ces deux concepts selon les économistes cités"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quels obstacles concrétisent la difficulté de relocaliser rapidement la production ?</div>",
    "options": [
      "L'ampleur des capitaux à investir et le déficit local de compétences techniques spécialisées",
      "L'opposition farouche des consommateurs à acheter des produits fabriqués à proximité",
      "L'absence totale de technologies automatisées dans les usines européennes actuelles",
      "La surabondance de matières premières qui déprécie la valeur des biens manufacturés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que désigne précisément le terme « friendshoring » dans le contexte du texte ?</div>",
    "options": [
      "Le transfert prioritaire d'activités industrielles vers des nations partenaires stratégiques et politiques",
      "L'obligation de créer des joint-ventures avec des associations à but non lucratif",
      "La baisse des tarifs de douane uniquement pour les produits de grande consommation biologique",
      "Le recrutement exclusif de managers diplômés d'écoles partenaires de l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel était le principe directeur dominant des chaînes d'approvisionnement au cours des trente dernières années ?</div>",
    "options": [
      "La maximisation des gains de coût de production via la fragmentation et la délocalisation",
      "La recherche systématique de l'impact environnemental le plus neutre possible",
      "La constitution de stocks stratégiques massifs au sein de chaque pays consommateur",
      "L'égalisation stricte des rémunérations entre ouvriers des différents continents"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle mutation des aspirations des hauts potentiels est mise en évidence dans cet extrait ?</div>",
    "options": [
      "Le rejet d'un plan de carrière imposé au détriment de l'équilibre de vie et de la santé personnelle",
      "Le souhait d'effectuer l'intégralité de leur temps de travail sans aucun outil informatique",
      "La demande d'une baisse générale de leurs responsabilités opérationnelles et salariales",
      "Le refus d'accéder aux postes de direction générale dans les entreprises cotées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment évoluent les critères de sélection des talents au sein des DRH selon l'auteur ?</div>",
    "options": [
      "L'expérience concrète du terrain et la résilience l'emportent sur le charisme statutaire classique",
      "La priorité absolue est donnée au nombre d'heures de présence physique au bureau",
      "La sélection s'effectue désormais exclusivement sur des critères d'ancienneté dans l'organisation",
      "Les compétences managériales sont totalement abandonnées au profit de tests de mémoire"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel reproche est adressé aux systèmes traditionnels de gestion des hauts potentiels ?</div>",
    "options": [
      "Leur opacité organisationnelle et leur rigidité face aux évolutions des modes de vie",
      "Leur coût de fonctionnement nul qui dévalorise le travail des consultants externes",
      "L'obligation légale d'embaucher uniquement des profils issus du secteur public",
      "Leur incapacité à proposer des augmentations de salaire aux dirigeants chevronnés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel risque pose le maintien de statuts managériaux hermétiques selon le texte ?</div>",
    "options": [
      "Susciter de vives frustrations parmi les collaborateurs et nuire à la cohésion d'équipe",
      "Provoquer une baisse immédiate du chiffre d'affaires sur le marché boursier",
      "Entraîner la fermeture automatique des filiales situées à l'étranger",
      "Empêcher les entreprises de souscrire des assurances responsabilité civile"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel titre résume le mieux l'orientation principale du texte ?</div>",
    "options": [
      "Gestion des talents : vers la fin du modèle classique et l'émergence de nouveaux critères",
      "Pourquoi les entreprises doivent supprimer l'ensemble de leurs services Ressources Humaines",
      "La hausse ininterrompue de la mobilité internationale chez les jeunes diplômés",
      "L'impact positif des carrières rigides sur la motivation des salariés du secteur privé"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le problème fondamental posé par l'intégration massive du solaire et de l'éolien ?</div>",
    "options": [
      "Leur nature intermittente qui s'oppose à la logique de régulation centralisée des réseaux historiques",
      "Leur coût de fabrication qui demeure plus élevé que celui des centrales thermiques à charbon",
      "L'interdiction légale de raccorder ces installations aux lignes à haute tension européennes",
      "L'impossibilité physique de mesurer l'électricité produite par des méthodes électroniques"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Où se situe désormais le goulot d'étranglement majeur de la transition énergétique selon l'auteur ?</div>",
    "options": [
      "Dans la capacité industrielle à déployer des technologies de stockage et de flexibilité du réseau",
      "Dans le refus des consommateurs d'utiliser de l'électricité issue de ressources renouvelables",
      "Dans la hausse du prix des composants mécaniques d'assemblage des éoliennes terrestres",
      "Dans l'absence totale de politiques publiques de soutien à la décarbonation dans le monde"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence paradoxale est associée aux pics d'injection de production renouvelable ?</div>",
    "options": [
      "L'émergence de cours monétaires ou prix négatifs sur les marchés de gros de l'électricité",
      "La destruction physique immédiate des transformateurs de quartier",
      "L'augmentation des émissions de dioxyde de carbone de l'industrie lourde",
      "La baisse automatique de la température moyenne des villes côtières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelles technologies sont citées pour résoudre le défi de l'intermittence ?</div>",
    "options": [
      "Les batteries stationnaires, les stations de pompage-turbinage et l'hydrogène décarboné",
      "Le renforcement exclusif du parc de centrales thermiques alimentées au fioul lourd",
      "Le remplacement des lignes électriques par des conduites souterraines de gaz naturel",
      "L'arrêt des centrales hydrauliques pendant les périodes de forte insolation"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est la conclusion essentielle défendue dans cet extrait ?</div>",
    "options": [
      "La transition écologique nécessite une transformation globale de l'architecture et du stockage électrique",
      "Les énergies renouvelables doivent être abandonnées au profit des énergies fossiles classiques",
      "Le stockage de l'énergie est un problème résolu qui ne nécessite plus d'investissements publics",
      "La consommation d'électricité doit être réduite de 90 % pour maintenir l'équilibre du réseau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le dilemme central de l'autorité de régulation européenne présenté dans le texte ?</div>",
    "options": [
      "Concilier la modernisation des outils juridiques anti-cartels avec la préservation de la compétitivité et de l'innovation",
      "Remplacer l'ensemble des réglementations industrielles par des normes environnementales plus strictes",
      "Autoriser les ententes tarifaires entre géants du numérique pour favoriser leur expansion internationale",
      "Sanctionner systématiquement les services gratuits en raison de leur impact négatif sur les recettes fiscales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, pour quelle raison les modèles du numérique échappent-ils en partie au droit classique de la concurrence ?</div>",
    "options": [
      "Parce qu'ils ne reposent pas sur des ententes tarifaires classiques mais sur la gratuité d'usage et la collecte de données",
      "Parce qu'ils sont exemptés de toute obligation légale en vertu des traités commerciaux transatlantiques",
      "Parce qu'ils refusent de commercialiser leurs produits au sein des pays membres de l'Union européenne",
      "Parce qu'ils investissent l'intégralité de leurs bénéfices dans des projets de recherche d'intérêt général"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence des cartels transfrontaliers est explicitement dénoncée par la Commission européenne ?</div>",
    "options": [
      "L'altération directe du pouvoir d'achat des consommateurs et la dégradation de la compétitivité du marché unique",
      "La baisse spectaculaire des investissements publics dans le secteur des transports ferroviaires",
      "L'obligation pour les petites entreprises de délocaliser leurs centres de recherche hors d'Europe",
      "La hausse artificielle des taux d'intérêt accordés aux prêts bancaires d'équipement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel qualificatif résume le mieux la position des économistes cités dans le texte ?</div>",
    "options": [
      "Réservée quant à l'adéquation de la réglementation actuelle face aux nouvelles réalités numériques",
      "Pleinement enthousiaste devant la sévérité accrue des amendes prononcées contre les cartels",
      "Hostile à toute forme d'interventionnisme étatique dans la sphère commerciale",
      "Indifférente aux mutations technologiques apportées par la collecte de données"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'idée générale qui se dégage de cet extrait ?</div>",
    "options": [
      "Le droit de la concurrence doit évoluer pour traiter efficacement les défis posés par les acteurs de la nouvelle économie",
      "La répression des ententes industrielles a perdu toute utilité dans le contexte de la mondialisation",
      "Les entreprises européennes doivent fusionner sans restriction pour résister à la concurrence asiatique",
      "La gratuité des services en ligne constitue le principal risque d'inflation pour l'économie européenne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, quelle contrainte légale étrangère suscite la vive inquiétude des acteurs européens ?</div>",
    "options": [
      "La portée extraterritoriale de lois permettant l'accès et la saisie de données par des autorités étrangères",
      "L'interdiction stricte d'exporter des processeurs à haute performance vers les pays d'Europe continentale",
      "L'imposition de taxes exorbitantes sur les transactions bancaires effectuées via des plateformes mobiles",
      "L'obligation de traduire l'ensemble des codes sources des logiciels en langue anglaise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel obstacle majeur entrave la conquête rapide d'une véritable autonomie numérique européenne ?</div>",
    "options": [
      "Le retard cumulé dans les infrastructures matérielles et le manque d'opérateurs souverains de taille critique",
      "Le désintérêt total des entreprises privées pour la confidentialité de leurs informations stratégiques",
      "L'interdiction promulguée par l'Union européenne de construire de nouveaux data centers écologiques",
      "La supériorité incontestée des normes européennes de protection des données sur l'ensemble de la planète"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment est qualifié l'arbitrage auquel font face les entreprises européennes ?</div>",
    "options": [
      "Une tension permanente entre l'efficience d'usage des offres dominantes et l'exigence de sécurité souveraine",
      "Un conflit irréconciliable entre la rémunération de leurs salariés et le paiement des abonnements logiciels",
      "Une obligation d'abandonner l'usage de l'informatique pour revenir à des processus purement manuels",
      "Un choix imposé par la législation d'utiliser exclusivement des infrastructures développées en interne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'intention principale de l'auteur à travers cet extrait ?</div>",
    "options": [
      "Analyser la complexité stratégique et les limites d'une quête de souveraineté numérique en Europe",
      "Faire l'éloge inconditionnel des monopoles informatiques asiatiques et américains",
      "Démontrer que la protection des données personnelles est un sujet secondaire pour la compétitivité",
      "Proposer le démantèlement immédiat de tous les réseaux de télécommunication intercontinentaux"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que garantissent idéalement les initiatives de « cloud de confiance » évoquées dans le texte ?</div>",
    "options": [
      "L'immunité contre les lois d'injonction extraterritoriales et le contrôle technologique des infrastructures",
      "Le remboursement intégral de l'ensemble des dépenses informatiques en cas de panne de réseau",
      "La baisse automatique de moitié de la consommation d'électricité des serveurs hébergés",
      "L'accès gratuit et universel à toutes les bases de données d'études de marché mondiales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : D'après l'auteur, quelle réorientation majeure caractérise les nouvelles stratégies logistiques ?</div>",
    "options": [
      "Le passage de la recherche prioritaire du coût minimal à la recherche de la résilience globale",
      "Le retour définitif à des économies agricoles strictement locales sans échanges régionaux",
      "L'abandon du transport maritime au profit exclusif du fret aérien longue distance",
      "La fermeture totale des frontières commerciales avec l'ensemble des nations émergentes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle distinction le texte établit-il entre le repli autarcique et le « nearshoring » ?</div>",
    "options": [
      "Le nearshoring est une réorganisation géographique pragmatique axée sur la résilience et non un rejet des échanges",
      "Le nearshoring interdit tout échange de produits finis entre pays membres d'un même continent",
      "L'autarcie cherche à exporter massivement alors que le nearshoring se concentre sur les importations",
      "Il n'existe aucune différence fondamentale entre ces deux concepts selon les économistes cités"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quels obstacles concrétisent la difficulté de relocaliser rapidement la production ?</div>",
    "options": [
      "L'ampleur des capitaux à investir et le déficit local de compétences techniques spécialisées",
      "L'opposition farouche des consommateurs à acheter des produits fabriqués à proximité",
      "L'absence totale de technologies automatisées dans les usines européennes actuelles",
      "La surabondance de matières premières qui déprécie la valeur des biens manufacturés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que désigne précisément le terme « friendshoring » dans le contexte du texte ?</div>",
    "options": [
      "Le transfert prioritaire d'activités industrielles vers des nations partenaires stratégiques et politiques",
      "L'obligation de créer des joint-ventures avec des associations à but non lucratif",
      "La baisse des tarifs de douane uniquement pour les produits de grande consommation biologique",
      "Le recrutement exclusif de managers diplômés d'écoles partenaires de l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel était le principe directeur dominant des chaînes d'approvisionnement au cours des trente dernières années ?</div>",
    "options": [
      "La maximisation des gains de coût de production via la fragmentation et la délocalisation",
      "La recherche systématique de l'impact environnemental le plus neutre possible",
      "La constitution de stocks stratégiques massifs au sein de chaque pays consommateur",
      "L'égalisation stricte des rémunérations entre ouvriers des différents continents"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle mutation des aspirations des hauts potentiels est mise en évidence dans cet extrait ?</div>",
    "options": [
      "Le rejet d'un plan de carrière imposé au détriment de l'équilibre de vie et de la santé personnelle",
      "Le souhait d'effectuer l'intégralité de leur temps de travail sans aucun outil informatique",
      "La demande d'une baisse générale de leurs responsabilités opérationnelles et salariales",
      "Le refus d'accéder aux postes de direction générale dans les entreprises cotées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment évoluent les critères de sélection des talents au sein des DRH selon l'auteur ?</div>",
    "options": [
      "L'expérience concrète du terrain et la résilience l'emportent sur le charisme statutaire classique",
      "La priorité absolue est donnée au nombre d'heures de présence physique au bureau",
      "La sélection s'effectue désormais exclusivement sur des critères d'ancienneté dans l'organisation",
      "Les compétences managériales sont totalement abandonnées au profit de tests de mémoire"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel reproche est adressé aux systèmes traditionnels de gestion des hauts potentiels ?</div>",
    "options": [
      "Leur opacité organisationnelle et leur rigidité face aux évolutions des modes de vie",
      "Leur coût de fonctionnement nul qui dévalorise le travail des consultants externes",
      "L'obligation légale d'embaucher uniquement des profils issus du secteur public",
      "Leur incapacité à proposer des augmentations de salaire aux dirigeants chevronnés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel risque pose le maintien de statuts managériaux hermétiques selon le texte ?</div>",
    "options": [
      "Susciter de vives frustrations parmi les collaborateurs et nuire à la cohésion d'équipe",
      "Provoquer une baisse immédiate du chiffre d'affaires sur le marché boursier",
      "Entraîner la fermeture automatique des filiales situées à l'étranger",
      "Empêcher les entreprises de souscrire des assurances responsabilité civile"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel titre résume le mieux l'orientation principale du texte ?</div>",
    "options": [
      "Gestion des talents : vers la fin du modèle classique et l'émergence de nouveaux critères",
      "Pourquoi les entreprises doivent supprimer l'ensemble de leurs services Ressources Humaines",
      "La hausse ininterrompue de la mobilité internationale chez les jeunes diplômés",
      "L'impact positif des carrières rigides sur la motivation des salariés du secteur privé"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le problème fondamental posé par l'intégration massive du solaire et de l'éolien ?</div>",
    "options": [
      "Leur nature intermittente qui s'oppose à la logique de régulation centralisée des réseaux historiques",
      "Leur coût de fabrication qui demeure plus élevé que celui des centrales thermiques à charbon",
      "L'interdiction légale de raccorder ces installations aux lignes à haute tension européennes",
      "L'impossibilité physique de mesurer l'électricité produite par des méthodes électroniques"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Où se situe désormais le goulot d'étranglement majeur de la transition énergétique selon l'auteur ?</div>",
    "options": [
      "Dans la capacité industrielle à déployer des technologies de stockage et de flexibilité du réseau",
      "Dans le refus des consommateurs d'utiliser de l'électricité issue de ressources renouvelables",
      "Dans la hausse du prix des composants mécaniques d'assemblage des éoliennes terrestres",
      "Dans l'absence totale de politiques publiques de soutien à la décarbonation dans le monde"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence paradoxale est associée aux pics d'injection de production renouvelable ?</div>",
    "options": [
      "L'émergence de cours monétaires ou prix négatifs sur les marchés de gros de l'électricité",
      "La destruction physique immédiate des transformateurs de quartier",
      "L'augmentation des émissions de dioxyde de carbone de l'industrie lourde",
      "La baisse automatique de la température moyenne des villes côtières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelles technologies sont citées pour résoudre le défi de l'intermittence ?</div>",
    "options": [
      "Les batteries stationnaires, les stations de pompage-turbinage et l'hydrogène décarboné",
      "Le renforcement exclusif du parc de centrales thermiques alimentées au fioul lourd",
      "Le remplacement des lignes électriques par des conduites souterraines de gaz naturel",
      "L'arrêt des centrales hydrauliques pendant les périodes de forte insolation"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est la conclusion essentielle défendue dans cet extrait ?</div>",
    "options": [
      "La transition écologique nécessite une transformation globale de l'architecture et du stockage électrique",
      "Les énergies renouvelables doivent être abandonnées au profit des énergies fossiles classiques",
      "Le stockage de l'énergie est un problème résolu qui ne nécessite plus d'investissements publics",
      "La consommation d'électricité doit être réduite de 90 % pour maintenir l'équilibre du réseau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le dilemme central de l'autorité de régulation européenne présenté dans le texte ?</div>",
    "options": [
      "Concilier la modernisation des outils juridiques anti-cartels avec la préservation de la compétitivité et de l'innovation",
      "Remplacer l'ensemble des réglementations industrielles par des normes environnementales plus strictes",
      "Autoriser les ententes tarifaires entre géants du numérique pour favoriser leur expansion internationale",
      "Sanctionner systématiquement les services gratuits en raison de leur impact négatif sur les recettes fiscales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, pour quelle raison les modèles du numérique échappent-ils en partie au droit classique de la concurrence ?</div>",
    "options": [
      "Parce qu'ils ne reposent pas sur des ententes tarifaires classiques mais sur la gratuité d'usage et la collecte de données",
      "Parce qu'ils sont exemptés de toute obligation légale en vertu des traités commerciaux transatlantiques",
      "Parce qu'ils refusent de commercialiser leurs produits au sein des pays membres de l'Union européenne",
      "Parce qu'ils investissent l'intégralité de leurs bénéfices dans des projets de recherche d'intérêt général"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence des cartels transfrontaliers est explicitement dénoncée par la Commission européenne ?</div>",
    "options": [
      "L'altération directe du pouvoir d'achat des consommateurs et la dégradation de la compétitivité du marché unique",
      "La baisse spectaculaire des investissements publics dans le secteur des transports ferroviaires",
      "L'obligation pour les petites entreprises de délocaliser leurs centres de recherche hors d'Europe",
      "La hausse artificielle des taux d'intérêt accordés aux prêts bancaires d'équipement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel qualificatif résume le mieux la position des économistes cités dans le texte ?</div>",
    "options": [
      "Réservée quant à l'adéquation de la réglementation actuelle face aux nouvelles réalités numériques",
      "Pleinement enthousiaste devant la sévérité accrue des amendes prononcées contre les cartels",
      "Hostile à toute forme d'interventionnisme étatique dans la sphère commerciale",
      "Indifférente aux mutations technologiques apportées par la collecte de données"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 1 : Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'idée générale qui se dégage de cet extrait ?</div>",
    "options": [
      "Le droit de la concurrence doit évoluer pour traiter efficacement les défis posés par les acteurs de la nouvelle économie",
      "La répression des ententes industrielles a perdu toute utilité dans le contexte de la mondialisation",
      "Les entreprises européennes doivent fusionner sans restriction pour résister à la concurrence asiatique",
      "La gratuité des services en ligne constitue le principal risque d'inflation pour l'économie européenne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Selon le texte, quelle contrainte légale étrangère suscite la vive inquiétude des acteurs européens ?</div>",
    "options": [
      "La portée extraterritoriale de lois permettant l'accès et la saisie de données par des autorités étrangères",
      "L'interdiction stricte d'exporter des processeurs à haute performance vers les pays d'Europe continentale",
      "L'imposition de taxes exorbitantes sur les transactions bancaires effectuées via des plateformes mobiles",
      "L'obligation de traduire l'ensemble des codes sources des logiciels en langue anglaise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel obstacle majeur entrave la conquête rapide d'une véritable autonomie numérique européenne ?</div>",
    "options": [
      "Le retard cumulé dans les infrastructures matérielles et le manque d'opérateurs souverains de taille critique",
      "Le désintérêt total des entreprises privées pour la confidentialité de leurs informations stratégiques",
      "L'interdiction promulguée par l'Union européenne de construire de nouveaux data centers écologiques",
      "La supériorité incontestée des normes européennes de protection des données sur l'ensemble de la planète"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment est qualifié l'arbitrage auquel font face les entreprises européennes ?</div>",
    "options": [
      "Une tension permanente entre l'efficience d'usage des offres dominantes et l'exigence de sécurité souveraine",
      "Un conflit irréconciliable entre la rémunération de leurs salariés et le paiement des abonnements logiciels",
      "Une obligation d'abandonner l'usage de l'informatique pour revenir à des processus purement manuels",
      "Un choix imposé par la législation d'utiliser exclusivement des infrastructures développées en interne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est l'intention principale de l'auteur à travers cet extrait ?</div>",
    "options": [
      "Analyser la complexité stratégique et les limites d'une quête de souveraineté numérique en Europe",
      "Faire l'éloge inconditionnel des monopoles informatiques asiatiques et américains",
      "Démontrer que la protection des données personnelles est un sujet secondaire pour la compétitivité",
      "Proposer le démantèlement immédiat de tous les réseaux de télécommunication intercontinentaux"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 2 : La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (les Cloud Service Providers américains et chinois), les organisations publiques et privées s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives nationales et communautaires tentent d'émerger pour promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) et d'éco-systèmes d'opérateurs souverains rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que garantissent idéalement les initiatives de « cloud de confiance » évoquées dans le texte ?</div>",
    "options": [
      "L'immunité contre les lois d'injonction extraterritoriales et le contrôle technologique des infrastructures",
      "Le remboursement intégral de l'ensemble des dépenses informatiques en cas de panne de réseau",
      "La baisse automatique de moitié de la consommation d'électricité des serveurs hébergés",
      "L'accès gratuit et universel à toutes les bases de données d'études de marché mondiales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : D'après l'auteur, quelle réorientation majeure caractérise les nouvelles stratégies logistiques ?</div>",
    "options": [
      "Le passage de la recherche prioritaire du coût minimal à la recherche de la résilience globale",
      "Le retour définitif à des économies agricoles strictement locales sans échanges régionaux",
      "L'abandon du transport maritime au profit exclusif du fret aérien longue distance",
      "La fermeture totale des frontières commerciales avec l'ensemble des nations émergentes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle distinction le texte établit-il entre le repli autarcique et le « nearshoring » ?</div>",
    "options": [
      "Le nearshoring est une réorganisation géographique pragmatique axée sur la résilience et non un rejet des échanges",
      "Le nearshoring interdit tout échange de produits finis entre pays membres d'un même continent",
      "L'autarcie cherche à exporter massivement alors que le nearshoring se concentre sur les importations",
      "Il n'existe aucune différence fondamentale entre ces deux concepts selon les économistes cités"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quels obstacles concrétisent la difficulté de relocaliser rapidement la production ?</div>",
    "options": [
      "L'ampleur des capitaux à investir et le déficit local de compétences techniques spécialisées",
      "L'opposition farouche des consommateurs à acheter des produits fabriqués à proximité",
      "L'absence totale de technologies automatisées dans les usines européennes actuelles",
      "La surabondance de matières premières qui déprécie la valeur des biens manufacturés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Que désigne précisément le terme « friendshoring » dans le contexte du texte ?</div>",
    "options": [
      "Le transfert prioritaire d'activités industrielles vers des nations partenaires stratégiques et politiques",
      "L'obligation de créer des joint-ventures avec des associations à but non lucratif",
      "La baisse des tarifs de douane uniquement pour les produits de grande consommation biologique",
      "Le recrutement exclusif de managers diplômés d'écoles partenaires de l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 3 : La Réorganisation des Chaînes de Valeur et le Nearshoring</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et la crise sanitaire ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs manufacturiers éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement ne signifie pas pour autant un repli autarcique ou un abandon de la mondialisation : il reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre de ces politiques heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel était le principe directeur dominant des chaînes d'approvisionnement au cours des trente dernières années ?</div>",
    "options": [
      "La maximisation des gains de coût de production via la fragmentation et la délocalisation",
      "La recherche systématique de l'impact environnemental le plus neutre possible",
      "La constitution de stocks stratégiques massifs au sein de chaque pays consommateur",
      "L'égalisation stricte des rémunérations entre ouvriers des différents continents"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle mutation des aspirations des hauts potentiels est mise en évidence dans cet extrait ?</div>",
    "options": [
      "Le rejet d'un plan de carrière imposé au détriment de l'équilibre de vie et de la santé personnelle",
      "Le souhait d'effectuer l'intégralité de leur temps de travail sans aucun outil informatique",
      "La demande d'une baisse générale de leurs responsabilités opérationnelles et salariales",
      "Le refus d'accéder aux postes de direction générale dans les entreprises cotées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Comment évoluent les critères de sélection des talents au sein des DRH selon l'auteur ?</div>",
    "options": [
      "L'expérience concrète du terrain et la résilience l'emportent sur le charisme statutaire classique",
      "La priorité absolue est donnée au nombre d'heures de présence physique au bureau",
      "La sélection s'effectue désormais exclusivement sur des critères d'ancienneté dans l'organisation",
      "Les compétences managériales sont totalement abandonnées au profit de tests de mémoire"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel reproche est adressé aux systèmes traditionnels de gestion des hauts potentiels ?</div>",
    "options": [
      "Leur opacité organisationnelle et leur rigidité face aux évolutions des modes de vie",
      "Leur coût de fonctionnement nul qui dévalorise le travail des consultants externes",
      "L'obligation légale d'embaucher uniquement des profils issus du secteur public",
      "Leur incapacité à proposer des augmentations de salaire aux dirigeants chevronnés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel risque pose le maintien de statuts managériaux hermétiques selon le texte ?</div>",
    "options": [
      "Susciter de vives frustrations parmi les collaborateurs et nuire à la cohésion d'équipe",
      "Provoquer une baisse immédiate du chiffre d'affaires sur le marché boursier",
      "Entraîner la fermeture automatique des filiales situées à l'étranger",
      "Empêcher les entreprises de souscrire des assurances responsabilité civile"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 4 : La Gestion des Talent et les Nouvelles Attentes du Travail</strong><br>Les dispositifs d'identification et de rétention des « hauts potentiels » en entreprise traversent une crise de légitimité. Historiquement conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité fonctionnelle intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres à fort potentiel expriment aujourd'hui un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de la représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses directions des ressources humaines reconfigurent donc leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante progressivement l'attrait pour le charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires potentiellement génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel titre résume le mieux l'orientation principale du texte ?</div>",
    "options": [
      "Gestion des talents : vers la fin du modèle classique et l'émergence de nouveaux critères",
      "Pourquoi les entreprises doivent supprimer l'ensemble de leurs services Ressources Humaines",
      "La hausse ininterrompue de la mobilité internationale chez les jeunes diplômés",
      "L'impact positif des carrières rigides sur la motivation des salariés du secteur privé"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quel est le problème fondamental posé par l'intégration massive du solaire et de l'éolien ?</div>",
    "options": [
      "Leur nature intermittente qui s'oppose à la logique de régulation centralisée des réseaux historiques",
      "Leur coût de fabrication qui demeure plus élevé que celui des centrales thermiques à charbon",
      "L'interdiction légale de raccorder ces installations aux lignes à haute tension européennes",
      "L'impossibilité physique de mesurer l'électricité produite par des méthodes électroniques"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Où se situe désormais le goulot d'étranglement majeur de la transition énergétique selon l'auteur ?</div>",
    "options": [
      "Dans la capacité industrielle à déployer des technologies de stockage et de flexibilité du réseau",
      "Dans le refus des consommateurs d'utiliser de l'électricité issue de ressources renouvelables",
      "Dans la hausse du prix des composants mécaniques d'assemblage des éoliennes terrestres",
      "Dans l'absence totale de politiques publiques de soutien à la décarbonation dans le monde"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle conséquence paradoxale est associée aux pics d'injection de production renouvelable ?</div>",
    "options": [
      "L'émergence de cours monétaires ou prix négatifs sur les marchés de gros de l'électricité",
      "La destruction physique immédiate des transformateurs de quartier",
      "L'augmentation des émissions de dioxyde de carbone de l'industrie lourde",
      "La baisse automatique de la température moyenne des villes côtières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelles technologies sont citées pour résoudre le défi de l'intermittence ?</div>",
    "options": [
      "Les batteries stationnaires, les stations de pompage-turbinage et l'hydrogène décarboné",
      "Le renforcement exclusif du parc de centrales thermiques alimentées au fioul lourd",
      "Le remplacement des lignes électriques par des conduites souterraines de gaz naturel",
      "L'arrêt des centrales hydrauliques pendant les périodes de forte insolation"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 5 : La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème critique d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation et de restitution à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition écologique ne réside donc plus uniquement dans la baisse du coût des capteurs ou des turbines, mais dans le développement industriel de solutions d'amont et d'aval : batteries stationnaires à haute densité, stations de transfert d'énergie par pompage, et filière d'hydrogène décarboné. La neutralité carbone exige une mutation systémique de l'ensemble de l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question : Quelle est la conclusion essentielle défendue dans cet extrait ?</div>",
    "options": [
      "La transition écologique nécessite une transformation globale de l'architecture et du stockage électrique",
      "Les énergies renouvelables doivent être abandonnées au profit des énergies fossiles classiques",
      "Le stockage de l'énergie est un problème résolu qui ne nécessite plus d'investissements publics",
      "La consommation d'électricité doit être réduite de 90 % pour maintenir l'équilibre du réseau"
    ],
    "answerIndex": 0
  }
];

export const TM_CALCUL_QUESTIONS = [
  {
    "prompt": "Un sac coûte initialement 100 €. Son prix subit une hausse de 10 %, puis une remise de 10 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "100 €",
      "99 €",
      "100 €",
      "80 €"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 115 km. La première roule à 50 km/h et la seconde à 60 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "2.3 h",
      "0.88 h",
      "1.92 h",
      "1.05 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une cuve de 480 L est alimentée par deux robinets. Le premier la remplit en 20 min, le second en 25 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "22.5 min",
      "45 min",
      "5 min",
      "11.1 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 8 côtés ?",
    "options": [
      "28",
      "16",
      "20",
      "56"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Une urne contient 3 boules rouges et 8 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">8</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -14x + 15 pour x réel ?",
    "options": [
      "-34",
      "7",
      "-28",
      "15"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Un appareil photo coûte initialement 170 €. Son prix subit une hausse de 40 %, puis une remise de 15 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "202.3 €",
      "76.5 €",
      "212.5 €",
      "195 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 220 km. La première roule à 70 km/h et la seconde à 50 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "3.14 h",
      "1.83 h",
      "4.4 h",
      "1.57 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 760 L est alimentée par deux robinets. Le premier la remplit en 30 min, le second en 20 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "50 min",
      "10 min",
      "12 min",
      "25 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 15 côtés ?",
    "options": [
      "30",
      "210",
      "90",
      "105"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Une urne contient 6 boules rouges et 5 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">11</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -4x + 29 pour x réel ?",
    "options": [
      "2",
      "29",
      "25",
      "31"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Un costume coûte initialement 240 €. Son prix subit une hausse de 30 %, puis une remise de 20 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "120 €",
      "250 €",
      "249.6 €",
      "264 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 325 km. La première roule à 40 km/h et la seconde à 80 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "2.32 h",
      "2.71 h",
      "8.12 h",
      "4.06 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 1040 L est alimentée par deux robinets. Le premier la remplit en 15 min, le second en 15 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "0 min",
      "7.5 min",
      "30 min",
      "15 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 10 côtés ?",
    "options": [
      "45",
      "20",
      "35",
      "90"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Une urne contient 5 boules rouges et 7 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -6x + 43 pour x réel ?",
    "options": [
      "3",
      "43",
      "40",
      "34"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">19</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">20</span><span class=\"den\">20</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Un vélo coûte initialement 310 €. Son prix subit une hausse de 20 %, puis une remise de 10 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "334.8 €",
      "217 €",
      "341 €",
      "320 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 430 km. La première roule à 60 km/h et la seconde à 70 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "2.87 h",
      "3.31 h",
      "6.14 h",
      "7.17 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 1320 L est alimentée par deux robinets. Le premier la remplit en 25 min, le second en 30 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "55 min",
      "13.6 min",
      "5 min",
      "27.5 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 5 côtés ?",
    "options": [
      "10",
      "5",
      "10",
      "20"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une urne contient 4 boules rouges et 4 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -8x + 57 pour x réel ?",
    "options": [
      "41",
      "57",
      "47",
      "4"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Un tablette coûte initialement 380 €. Son prix subit une hausse de 10 %, puis une remise de 15 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "361 €",
      "285 €",
      "375 €",
      "355.3 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 535 km. La première roule à 80 km/h et la seconde à 60 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "6.69 h",
      "8.92 h",
      "3.34 h",
      "3.82 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une cuve de 1600 L est alimentée par deux robinets. Le premier la remplit en 10 min, le second en 25 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "17.5 min",
      "15 min",
      "35 min",
      "7.1 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 12 côtés ?",
    "options": [
      "132",
      "24",
      "66",
      "54"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une urne contient 3 boules rouges et 6 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">9</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -10x + 71 pour x réel ?",
    "options": [
      "71",
      "5",
      "52",
      "46"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">12</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">11</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">12</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Un ordinateur coûte initialement 450 €. Son prix subit une hausse de 40 %, puis une remise de 20 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "470 €",
      "540 €",
      "180 €",
      "504 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 640 km. La première roule à 50 km/h et la seconde à 50 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "12.8 h",
      "6.4 h",
      "5.33 h",
      "12.8 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 1880 L est alimentée par deux robinets. Le premier la remplit en 20 min, le second en 20 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "40 min",
      "0 min",
      "20 min",
      "10 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 7 côtés ?",
    "options": [
      "14",
      "42",
      "14",
      "21"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une urne contient 6 boules rouges et 8 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">14</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">14</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -12x + 85 pour x réel ?",
    "options": [
      "55",
      "6",
      "85",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">23</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">24</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">20</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Un montre coûte initialement 520 €. Son prix subit une hausse de 30 %, puis une remise de 10 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "624 €",
      "608.4 €",
      "540 €",
      "312 €"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 745 km. La première roule à 70 km/h et la seconde à 80 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "10.64 h",
      "9.31 h",
      "4.38 h",
      "4.97 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une cuve de 2160 L est alimentée par deux robinets. Le premier la remplit en 30 min, le second en 15 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "15 min",
      "10 min",
      "22.5 min",
      "45 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 14 côtés ?",
    "options": [
      "28",
      "77",
      "91",
      "182"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une urne contient 5 boules rouges et 5 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">10</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -14x + 99 pour x réel ?",
    "options": [
      "99",
      "50",
      "56",
      "7"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Un télévision coûte initialement 590 €. Son prix subit une hausse de 20 %, puis une remise de 15 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "601.8 €",
      "595 €",
      "619.5 €",
      "383.5 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 850 km. La première roule à 40 km/h et la seconde à 70 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "12.14 h",
      "7.73 h",
      "6.54 h",
      "21.25 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 2440 L est alimentée par deux robinets. Le premier la remplit en 15 min, le second en 30 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "22.5 min",
      "45 min",
      "15 min",
      "10 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 9 côtés ?",
    "options": [
      "27",
      "18",
      "36",
      "72"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une urne contient 4 boules rouges et 7 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -4x + 113 pour x réel ?",
    "options": [
      "115",
      "113",
      "2",
      "109"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Un casque coûte initialement 660 €. Son prix subit une hausse de 10 %, puis une remise de 20 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "462 €",
      "580.8 €",
      "650 €",
      "594 €"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 955 km. La première roule à 60 km/h et la seconde à 60 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "15.92 h",
      "15.92 h",
      "6.82 h",
      "7.96 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une cuve de 2720 L est alimentée par deux robinets. Le premier la remplit en 25 min, le second en 25 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "25 min",
      "0 min",
      "12.5 min",
      "50 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 16 côtés ?",
    "options": [
      "104",
      "32",
      "120",
      "240"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une urne contient 3 boules rouges et 4 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -6x + 127 pour x réel ?",
    "options": [
      "118",
      "3",
      "127",
      "124"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">20</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">19</span><span class=\"den\">20</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Un téléphone coûte initialement 730 €. Son prix subit une hausse de 40 %, puis une remise de 10 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "760 €",
      "365 €",
      "919.8 €",
      "949 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 1060 km. La première roule à 80 km/h et la seconde à 50 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "7.07 h",
      "8.15 h",
      "13.25 h",
      "21.2 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 3000 L est alimentée par deux robinets. Le premier la remplit en 10 min, le second en 20 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "6.7 min",
      "30 min",
      "10 min",
      "15 min"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 11 côtés ?",
    "options": [
      "110",
      "55",
      "22",
      "44"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une urne contient 6 boules rouges et 6 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -8x + 141 pour x réel ?",
    "options": [
      "4",
      "125",
      "131",
      "141"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Un sac coûte initialement 800 €. Son prix subit une hausse de 30 %, puis une remise de 15 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "920 €",
      "440 €",
      "884 €",
      "815 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 1165 km. La première roule à 50 km/h et la seconde à 80 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "23.3 h",
      "7.77 h",
      "8.96 h",
      "14.56 h"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Une cuve de 3280 L est alimentée par deux robinets. Le premier la remplit en 20 min, le second en 15 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "5 min",
      "17.5 min",
      "8.6 min",
      "35 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 6 côtés ?",
    "options": [
      "9",
      "15",
      "30",
      "12"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une urne contient 5 boules rouges et 8 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">13</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">13</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -10x + 155 pour x réel ?",
    "options": [
      "130",
      "136",
      "155",
      "5"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">11</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">12</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">7</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Un appareil photo coûte initialement 870 €. Son prix subit une hausse de 20 %, puis une remise de 20 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "522 €",
      "835.2 €",
      "870 €",
      "870 €"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 1270 km. La première roule à 70 km/h et la seconde à 70 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "9.07 h",
      "18.14 h",
      "18.14 h",
      "7.94 h"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une cuve de 3560 L est alimentée par deux robinets. Le premier la remplit en 30 min, le second en 30 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "60 min",
      "30 min",
      "0 min",
      "15 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 13 côtés ?",
    "options": [
      "65",
      "78",
      "26",
      "156"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une urne contient 4 boules rouges et 5 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -12x + 169 pour x réel ?",
    "options": [
      "169",
      "6",
      "133",
      "139"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">24</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">23</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">20</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Un costume coûte initialement 940 €. Son prix subit une hausse de 10 %, puis une remise de 10 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "930.6 €",
      "940 €",
      "940 €",
      "752 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 1375 km. La première roule à 40 km/h et la seconde à 60 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "22.92 h",
      "13.75 h",
      "11.46 h",
      "34.38 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Une cuve de 3840 L est alimentée par deux robinets. Le premier la remplit en 15 min, le second en 25 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "10 min",
      "40 min",
      "9.4 min",
      "20 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 8 côtés ?",
    "options": [
      "56",
      "16",
      "28",
      "20"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une urne contient 3 boules rouges et 7 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">10</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -14x + 183 pour x réel ?",
    "options": [
      "183",
      "134",
      "7",
      "140"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Un vélo coûte initialement 1010 €. Son prix subit une hausse de 40 %, puis une remise de 15 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "454.5 €",
      "1035 €",
      "1262.5 €",
      "1201.9 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 1480 km. La première roule à 60 km/h et la seconde à 50 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "11.38 h",
      "24.67 h",
      "13.45 h",
      "29.6 h"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Une cuve de 4120 L est alimentée par deux robinets. Le premier la remplit en 25 min, le second en 20 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "5 min",
      "45 min",
      "11.1 min",
      "22.5 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 15 côtés ?",
    "options": [
      "90",
      "210",
      "105",
      "30"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Une urne contient 6 boules rouges et 4 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">10</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -4x + 197 pour x réel ?",
    "options": [
      "199",
      "2",
      "193",
      "197"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">12</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Un tablette coûte initialement 1080 €. Son prix subit une hausse de 30 %, puis une remise de 20 % sur le prix augmenté. Quel est son prix final ?",
    "options": [
      "1188 €",
      "1123.2 €",
      "1090 €",
      "540 €"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Deux voitures partent au même instant l'une vers l'autre de deux villes distantes de 1585 km. La première roule à 80 km/h et la seconde à 80 km/h. Au bout de combien d'heures se croisent-elles ?",
    "options": [
      "19.81 h",
      "8.81 h",
      "9.91 h",
      "19.81 h"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Une cuve de 4400 L est alimentée par deux robinets. Le premier la remplit en 10 min, le second en 15 min. Combien de minutes faut-il avec les deux robinets ouverts ?",
    "options": [
      "12.5 min",
      "6 min",
      "5 min",
      "25 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Combien de diagonales possède un polygon régulier fermé à 10 côtés ?",
    "options": [
      "90",
      "45",
      "20",
      "35"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Une urne contient 5 boules rouges et 6 boules bleues. Quelle est la probabilité de tirer une boule rouge au hasard ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Quelle est la valeur minimale atteinte par la fonction f(x) = x² -6x + 211 pour x réel ?",
    "options": [
      "3",
      "211",
      "202",
      "208"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Calculer la valeur exacte de l'addition fractionnaire : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">20</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">19</span><span class=\"den\">20</span></span>"
    ],
    "answerIndex": 3
  }
];

export const TM_RAISONNEMENT_QUESTIONS = [
  {
    "prompt": "Dans un groupe de 50 personnes, 20 jouent au tennis, 18 jouent au football et 6 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "7",
      "18",
      "12",
      "22"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Michel",
      "Pierre",
      "Jacques",
      "Henri"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Dimanche",
      "Lundi",
      "Mardi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 55 personnes, 25 jouent au tennis, 23 jouent au football et 7 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "18",
      "7",
      "8",
      "14"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Pierre",
      "Jacques",
      "Henri",
      "Michel"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Dimanche",
      "Lundi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "C",
      "B",
      "D",
      "A"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Dans un groupe de 60 personnes, 20 jouent au tennis, 20 jouent au football et 8 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "32",
      "9",
      "28",
      "20"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Pierre",
      "Michel",
      "Jacques",
      "Henri"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Dimanche",
      "Lundi",
      "Mercredi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "A",
      "B",
      "D",
      "C"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Dans un groupe de 65 personnes, 25 jouent au tennis, 25 jouent au football et 9 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "28",
      "15",
      "24",
      "10"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Pierre",
      "Jacques",
      "Henri",
      "Michel"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Dimanche",
      "Lundi",
      "Mercredi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "C",
      "A",
      "D"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Dans un groupe de 70 personnes, 20 jouent au tennis, 22 jouent au football et 6 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "38",
      "34",
      "28",
      "7"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Henri",
      "Pierre",
      "Michel",
      "Jacques"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Tous les diplômés de l'entreprise sont comptables",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Lundi",
      "Mardi",
      "Dimanche",
      "Mercredi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "C",
      "D",
      "B",
      "A"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Dans un groupe de 75 personnes, 25 jouent au tennis, 19 jouent au football et 7 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "38",
      "31",
      "8",
      "42"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Jacques",
      "Pierre",
      "Michel",
      "Henri"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Tous les diplômés de l'entreprise sont comptables",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Dimanche",
      "Mardi",
      "Mercredi",
      "Lundi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "D",
      "A",
      "C"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Dans un groupe de 80 personnes, 20 jouent au tennis, 24 jouent au football et 8 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "9",
      "36",
      "48",
      "44"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Jacques",
      "Michel",
      "Pierre",
      "Henri"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Lundi",
      "Dimanche",
      "Mercredi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 85 personnes, 25 jouent au tennis, 21 jouent au football et 9 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "10",
      "39",
      "48",
      "52"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Michel",
      "Pierre",
      "Henri",
      "Jacques"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Tous les diplômés de l'entreprise sont comptables"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Lundi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "D",
      "A",
      "C",
      "B"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 90 personnes, 20 jouent au tennis, 18 jouent au football et 6 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "7",
      "62",
      "58",
      "52"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Michel",
      "Henri",
      "Pierre",
      "Jacques"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Dimanche",
      "Lundi",
      "Mercredi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "C",
      "D",
      "A"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Dans un groupe de 95 personnes, 25 jouent au tennis, 23 jouent au football et 7 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "54",
      "47",
      "58",
      "8"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Jacques",
      "Michel",
      "Henri",
      "Pierre"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Tous les diplômés de l'entreprise sont comptables"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Dimanche",
      "Mercredi",
      "Lundi",
      "Mardi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "D",
      "B",
      "C",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 100 personnes, 20 jouent au tennis, 20 jouent au football et 8 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "9",
      "68",
      "60",
      "72"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Henri",
      "Pierre",
      "Jacques",
      "Michel"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Lundi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "D",
      "C",
      "A",
      "B"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Dans un groupe de 105 personnes, 25 jouent au tennis, 25 jouent au football et 9 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "68",
      "55",
      "10",
      "64"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Michel",
      "Henri",
      "Pierre",
      "Jacques"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Dimanche",
      "Lundi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "A",
      "C",
      "D"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 110 personnes, 20 jouent au tennis, 22 jouent au football et 6 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "7",
      "68",
      "74",
      "78"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Henri",
      "Pierre",
      "Jacques",
      "Michel"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Lundi",
      "Mercredi",
      "Mardi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "D",
      "B",
      "C",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 115 personnes, 25 jouent au tennis, 19 jouent au football et 7 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "78",
      "8",
      "82",
      "71"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Jacques",
      "Pierre",
      "Michel",
      "Henri"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Tous les diplômés de l'entreprise sont comptables",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Dimanche",
      "Mercredi",
      "Lundi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "A",
      "C",
      "D"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 120 personnes, 20 jouent au tennis, 24 jouent au football et 8 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "84",
      "88",
      "76",
      "9"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Jacques",
      "Pierre",
      "Henri",
      "Michel"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Tous les diplômés de l'entreprise sont comptables",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "D",
      "C",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 125 personnes, 25 jouent au tennis, 21 jouent au football et 9 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "79",
      "88",
      "10",
      "92"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Pierre",
      "Jacques",
      "Michel",
      "Henri"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Lundi",
      "Dimanche",
      "Mercredi",
      "Mardi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "B",
      "A",
      "D",
      "C"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Dans un groupe de 130 personnes, 20 jouent au tennis, 18 jouent au football et 6 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "92",
      "102",
      "98",
      "7"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Jacques",
      "Michel",
      "Pierre",
      "Henri"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Mercredi",
      "Dimanche",
      "Lundi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "D",
      "B",
      "C",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 135 personnes, 25 jouent au tennis, 23 jouent au football et 7 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "94",
      "87",
      "98",
      "8"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Henri",
      "Michel",
      "Jacques",
      "Pierre"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Tous les diplômés de l'entreprise sont comptables"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Dimanche",
      "Mardi",
      "Lundi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "A",
      "C",
      "D",
      "B"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Dans un groupe de 140 personnes, 20 jouent au tennis, 20 jouent au football et 8 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "112",
      "9",
      "108",
      "100"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Henri",
      "Michel",
      "Jacques",
      "Pierre"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable",
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mercredi",
      "Lundi",
      "Mardi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Dans un groupe de 145 personnes, 25 jouent au tennis, 25 jouent au football et 9 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "108",
      "104",
      "10",
      "95"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Michel",
      "Jacques",
      "Henri",
      "Pierre"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Dimanche",
      "Lundi",
      "Mercredi",
      "Mardi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "C",
      "B",
      "D",
      "A"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Dans un groupe de 150 personnes, 20 jouent au tennis, 22 jouent au football et 6 pratiquent les deux sports. Combien de personnes ne pratiquent aucun de ces deux sports ?",
    "options": [
      "7",
      "114",
      "108",
      "118"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Cinq personnes (Pierre, Paul, Jacques, Michel, Henri) sont assises en ligne. Pierre est à côté de Paul. Jacques est à droite de Michel. Henri est à l'extrême gauche. Si Paul est au milieu, qui est en 2e position depuis la gauche ?",
    "options": [
      "Michel",
      "Jacques",
      "Pierre",
      "Henri"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Si l'affirmation 'Tous les comptables de l'entreprise sont diplômés d'un Master' est VRAIE, quelle proposition est rigoureusement exacte ?",
    "options": [
      "Aucun diplômé de Master ne travaille dans l'entreprise",
      "Tous les diplômés de l'entreprise sont comptables",
      "Si un employé n'est pas diplômé d'un Master, alors il n'est pas comptable",
      "Si un employé est diplômé d'un Master, il est obligatoirement comptable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Alain déclare : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment exclusivement soit le lundi, soit le mardi, quel jour sommes-nous ?",
    "options": [
      "Mardi",
      "Lundi",
      "Dimanche",
      "Mercredi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Lors d'une course automobile, le bolide A dépasse B mais reste derrière C. Le bolide D termine juste derrière B. Quel véhicule a remporté la 1re place parmi ces quatre ?",
    "options": [
      "D",
      "C",
      "A",
      "B"
    ],
    "answerIndex": 1
  }
];

export const TM_CONDITIONS_MINIMALES_QUESTIONS = [
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 30 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 60 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 25 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 25<br>Information (2) : n³ = 125",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 15 m.<br>Information (2) : La largeur l est de 9 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 29",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 40 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 80 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 30 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 100<br>Information (2) : n³ = 1000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 20 m.<br>Information (2) : La largeur l est de 6 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 34",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 50 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 100 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 35 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 225<br>Information (2) : n³ = 3375",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 25 m.<br>Information (2) : La largeur l est de 7 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 39",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 60 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 120 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 40 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 400<br>Information (2) : n³ = 8000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 30 m.<br>Information (2) : La largeur l est de 8 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 44",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 70 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 140 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 45 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 625<br>Information (2) : n³ = 15625",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 35 m.<br>Information (2) : La largeur l est de 9 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 49",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 80 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 160 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 50 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 900<br>Information (2) : n³ = 27000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 40 m.<br>Information (2) : La largeur l est de 6 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 54",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 90 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 180 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 55 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 1225<br>Information (2) : n³ = 42875",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 45 m.<br>Information (2) : La largeur l est de 7 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 59",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 100 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 200 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 60 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 1600<br>Information (2) : n³ = 64000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 50 m.<br>Information (2) : La largeur l est de 8 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 64",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 110 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 220 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 65 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 2025<br>Information (2) : n³ = 91125",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 55 m.<br>Information (2) : La largeur l est de 9 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 69",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 120 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 240 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 70 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 2500<br>Information (2) : n³ = 125000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 60 m.<br>Information (2) : La largeur l est de 6 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 74",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 130 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 260 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 75 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 3025<br>Information (2) : n³ = 166375",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 65 m.<br>Information (2) : La largeur l est de 7 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 79",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 140 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 280 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 80 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 3600<br>Information (2) : n³ = 216000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 70 m.<br>Information (2) : La largeur l est de 8 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 84",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 150 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 300 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 85 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 4225<br>Information (2) : n³ = 274625",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 75 m.<br>Information (2) : La largeur l est de 9 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 89",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 160 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 320 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 90 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 4900<br>Information (2) : n³ = 343000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 80 m.<br>Information (2) : La largeur l est de 6 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 94",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 170 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 340 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 95 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 5625<br>Information (2) : n³ = 421875",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 85 m.<br>Information (2) : La largeur l est de 7 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 99",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 180 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 360 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 100 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 6400<br>Information (2) : n³ = 512000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 90 m.<br>Information (2) : La largeur l est de 8 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 104",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 190 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 380 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 105 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 7225<br>Information (2) : n³ = 614125",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 95 m.<br>Information (2) : La largeur l est de 9 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 109",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 200 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 400 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 110 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 8100<br>Information (2) : n³ = 729000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 100 m.<br>Information (2) : La largeur l est de 6 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 114",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 210 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 420 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 115 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 9025<br>Information (2) : n³ = 857375",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 105 m.<br>Information (2) : La largeur l est de 7 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 119",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 220 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 440 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 120 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 10000<br>Information (2) : n³ = 1000000",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 110 m.<br>Information (2) : La largeur l est de 8 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 124",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  },
  {
    "prompt": "On souhaite déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 230 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 460 €.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 4
  },
  {
    "prompt": "Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 125 ans de plus que son fils F.<br>Information (2) : Dans 4 ans, le père aura le triple de l'âge de son fils.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 11025<br>Information (2) : n³ = 1157625",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur L est de 115 m.<br>Information (2) : La largeur l est de 9 m.",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 129",
    "options": [
      "(A) L'information (1) seule est suffisante, mais l'information (2) seule ne l'est pas.",
      "(B) L'information (2) seule est suffisante, mais l'information (1) seule ne l'est pas.",
      "(C) Les deux informations (1) et (2) ensemble sont suffisantes, mais aucune des deux seule ne l'est.",
      "(D) Chaque information seule est suffisante.",
      "(E) Les deux informations (1) et (2) ensemble ne sont pas suffisantes."
    ],
    "answerIndex": 0
  }
];

export const TM_EXPRESSION_QUESTIONS = [
  {
    "prompt": "[Question d'Expression n°1] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier le problème",
      "Pallier au problème",
      "Pallier de ce problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°2] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "fût",
      "soit",
      "est",
      "serait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°3] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait",
      "fît",
      "fasse",
      "ferait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°4] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Variable",
      "Neutre",
      "Masculin",
      "Féminin"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°5] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Neutre",
      "Variable",
      "Masculin",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°6] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dilemne",
      "Dileme",
      "Dillemme",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°7] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Invariable",
      "Accordé en genre",
      "Variable",
      "Accordé en nombre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°8] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyers",
      "envoyé",
      "envoyés",
      "envoyées"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°9] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Prescrire un traitement",
      "Recommander chaudement",
      "Rédiger une ordonnance"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°10] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "De collaborer",
      "Collaborer ensemble",
      "Décidé de",
      "Ils ont décidé"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°11] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier le problème",
      "Pallier avec le problème",
      "Pallier au problème",
      "Pallier de ce problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°12] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "est",
      "soit",
      "fût",
      "serait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°13] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "ferait",
      "fait",
      "fît"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°14] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Variable",
      "Féminin",
      "Neutre",
      "Masculin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°15] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Variable",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°16] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dilemme",
      "Dilemne",
      "Dillemme",
      "Dileme"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°17] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Accordé en genre",
      "Invariable",
      "Accordé en nombre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°18] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyers",
      "envoyées",
      "envoyés",
      "envoyé"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°19] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Rédiger une ordonnance",
      "Recommander chaudement",
      "Prescrire un traitement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°20] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "De collaborer",
      "Ils ont décidé",
      "Décidé de",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°21] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier avec le problème",
      "Pallier le problème",
      "Pallier au problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°22] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "soit",
      "fût",
      "serait",
      "est"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°23] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait",
      "ferait",
      "fasse",
      "fît"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°24] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°25] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°26] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dillemme",
      "Dilemne",
      "Dileme",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°27] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Accordé en genre",
      "Invariable",
      "Accordé en nombre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°28] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyés",
      "envoyé",
      "envoyées",
      "envoyers"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°29] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Recommander chaudement",
      "Prescrire un traitement",
      "Interdire formellement",
      "Rédiger une ordonnance"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°30] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "Décidé de",
      "Collaborer ensemble",
      "Ils ont décidé",
      "De collaborer"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°31] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier au problème",
      "Pallier le problème",
      "Pallier avec le problème",
      "Pallier de ce problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°32] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "fût",
      "serait",
      "soit",
      "est"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°33] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait",
      "fît",
      "fasse",
      "ferait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°34] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Variable",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°35] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Variable",
      "Masculin",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°36] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dileme",
      "Dilemne",
      "Dilemme",
      "Dillemme"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°37] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Variable",
      "Invariable",
      "Accordé en genre",
      "Accordé en nombre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°38] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyés",
      "envoyées",
      "envoyers"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°39] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Recommander chaudement",
      "Prescrire un traitement",
      "Rédiger une ordonnance",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°40] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "Décidé de",
      "De collaborer",
      "Ils ont décidé",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°41] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier au problème",
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier le problème"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°42] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "soit",
      "fût",
      "est",
      "serait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°43] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait",
      "fasse",
      "fît",
      "ferait"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°44] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Féminin",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°45] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Variable",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°46] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dileme",
      "Dillemme",
      "Dilemne",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°47] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Accordé en genre",
      "Invariable",
      "Variable",
      "Accordé en nombre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°48] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyers",
      "envoyés",
      "envoyées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°49] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Rédiger une ordonnance",
      "Prescrire un traitement",
      "Recommander chaudement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°50] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "Décidé de",
      "Ils ont décidé",
      "Collaborer ensemble",
      "De collaborer"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°51] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier le problème",
      "Pallier de ce problème",
      "Pallier avec le problème",
      "Pallier au problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°52] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "soit",
      "serait",
      "fût",
      "est"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°53] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "ferait",
      "fasse",
      "fait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°54] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°55] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Variable",
      "Masculin",
      "Féminin",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°56] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dilemne",
      "Dilemme",
      "Dileme",
      "Dillemme"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°57] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Variable",
      "Accordé en genre",
      "Accordé en nombre",
      "Invariable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°58] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyés",
      "envoyées",
      "envoyers"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°59] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Rédiger une ordonnance",
      "Recommander chaudement",
      "Prescrire un traitement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°60] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "Décidé de",
      "Collaborer ensemble",
      "De collaborer",
      "Ils ont décidé"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°61] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier au problème",
      "Pallier le problème"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°62] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "soit",
      "est",
      "fût",
      "serait"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°63] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "ferait",
      "fait",
      "fît"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°64] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Masculin",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°65] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Neutre",
      "Féminin",
      "Masculin",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°66] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dileme",
      "Dillemme",
      "Dilemme",
      "Dilemne"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°67] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Variable",
      "Accordé en genre",
      "Accordé en nombre",
      "Invariable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°68] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyers",
      "envoyé"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°69] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Prescrire un traitement",
      "Interdire formellement",
      "Rédiger une ordonnance",
      "Recommander chaudement"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°70] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "De collaborer",
      "Ils ont décidé",
      "Décidé de",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°71] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier le problème",
      "Pallier de ce problème",
      "Pallier au problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°72] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "fût",
      "est",
      "soit",
      "serait"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°73] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "ferait",
      "fait",
      "fasse"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°74] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Féminin",
      "Neutre",
      "Variable",
      "Masculin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°75] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Féminin",
      "Variable",
      "Neutre",
      "Masculin"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°76] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dileme",
      "Dilemme",
      "Dillemme",
      "Dilemne"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°77] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Invariable",
      "Accordé en nombre",
      "Variable",
      "Accordé en genre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°78] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyées",
      "envoyers",
      "envoyé",
      "envoyés"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°79] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Prescrire un traitement",
      "Recommander chaudement",
      "Interdire formellement",
      "Rédiger une ordonnance"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°80] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "Ils ont décidé",
      "Collaborer ensemble",
      "De collaborer",
      "Décidé de"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°81] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier au problème",
      "Pallier le problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°82] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "est",
      "serait",
      "fût",
      "soit"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°83] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "fasse",
      "ferait",
      "fait"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°84] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Féminin",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°85] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Féminin",
      "Neutre",
      "Masculin",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°86] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dillemme",
      "Dileme",
      "Dilemme",
      "Dilemne"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°87] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Accordé en genre",
      "Invariable",
      "Accordé en nombre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°88] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyés",
      "envoyé",
      "envoyées",
      "envoyers"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°89] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Rédiger une ordonnance",
      "Prescrire un traitement",
      "Recommander chaudement",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°90] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "De collaborer",
      "Décidé de",
      "Collaborer ensemble",
      "Ils ont décidé"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°91] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier au problème",
      "Pallier de ce problème",
      "Pallier le problème"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°92] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "fût",
      "serait",
      "est",
      "soit"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°93] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait",
      "ferait",
      "fasse",
      "fît"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°94] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Féminin",
      "Masculin",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°95] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Féminin",
      "Masculin",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°96] Quelle est l'orthographe exacte du mot désignant un choix difficile ?",
    "options": [
      "Dillemme",
      "Dilemne",
      "Dileme",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°97] Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Variable",
      "Accordé en genre",
      "Invariable",
      "Accordé en nombre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°98] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyers",
      "envoyés",
      "envoyé",
      "envoyées"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°99] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Recommander chaudement",
      "Rédiger une ordonnance",
      "Prescrire un traitement",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°100] Identifiez le pléonasme dans cette phrase : 'Ils ont décidé de collaborer ensemble.'",
    "options": [
      "De collaborer",
      "Collaborer ensemble",
      "Ils ont décidé",
      "Décidé de"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°101] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier au problème",
      "Pallier avec le problème",
      "Pallier le problème"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Question d'Expression n°102] Complétez la phrase : 'Après qu'il _____ arrivé, la réunion a commencé.'",
    "options": [
      "est",
      "serait",
      "soit",
      "fût"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Question d'Expression n°103] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "ferait",
      "fasse",
      "fait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Question d'Expression n°104] Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Variable",
      "Masculin",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Question d'Expression n°105] Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 2
  }
];

export const TM_LOGIQUE_QUESTIONS = [
  {
    "prompt": "Complétez la série : 2, 5, 8, 11, 14, ?",
    "options": [
      "14",
      "20",
      "17",
      "19"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : D, G, J, M, P, ?",
    "options": [
      "S",
      "T",
      "R",
      "U"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "54",
      "49",
      "45",
      "14"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>5 &nbsp;&nbsp; 10 &nbsp;&nbsp; 20<br>6 &nbsp;&nbsp; 12 &nbsp;&nbsp; 24<br>7 &nbsp;&nbsp; 14 &nbsp;&nbsp; ?",
    "options": [
      "21",
      "30",
      "18",
      "28"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "K",
      "Z"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 7, 11, 15, 19, 23, ?",
    "options": [
      "29",
      "24",
      "31",
      "27"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : S, U, W, Y, A, ?",
    "options": [
      "E",
      "C",
      "B",
      "D"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "140",
      "24",
      "144",
      "149"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>10 &nbsp;&nbsp; 20 &nbsp;&nbsp; 40<br>11 &nbsp;&nbsp; 22 &nbsp;&nbsp; 44<br>12 &nbsp;&nbsp; 24 &nbsp;&nbsp; ?",
    "options": [
      "50",
      "36",
      "28",
      "48"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "Z",
      "K",
      "T",
      "V"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 12, 17, 22, 27, 32, ?",
    "options": [
      "39",
      "34",
      "42",
      "37"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : H, L, P, T, X, ?",
    "options": [
      "D",
      "C",
      "B",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "49",
      "54",
      "45",
      "14"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>15 &nbsp;&nbsp; 30 &nbsp;&nbsp; 60<br>16 &nbsp;&nbsp; 32 &nbsp;&nbsp; 64<br>17 &nbsp;&nbsp; 34 &nbsp;&nbsp; ?",
    "options": [
      "51",
      "70",
      "38",
      "68"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "T",
      "Z",
      "K",
      "V"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 17, 23, 29, 35, 41, ?",
    "options": [
      "49",
      "44",
      "47",
      "53"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : W, Z, C, F, I, ?",
    "options": [
      "L",
      "N",
      "M",
      "K"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "140",
      "24",
      "149",
      "144"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>20 &nbsp;&nbsp; 40 &nbsp;&nbsp; 80<br>21 &nbsp;&nbsp; 42 &nbsp;&nbsp; 84<br>22 &nbsp;&nbsp; 44 &nbsp;&nbsp; ?",
    "options": [
      "48",
      "90",
      "66",
      "88"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "Z",
      "T",
      "K",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 22, 25, 28, 31, 34, ?",
    "options": [
      "40",
      "37",
      "34",
      "39"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : L, N, P, R, T, ?",
    "options": [
      "W",
      "X",
      "V",
      "U"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "49",
      "45",
      "54",
      "14"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>25 &nbsp;&nbsp; 50 &nbsp;&nbsp; 100<br>26 &nbsp;&nbsp; 52 &nbsp;&nbsp; 104<br>27 &nbsp;&nbsp; 54 &nbsp;&nbsp; ?",
    "options": [
      "58",
      "108",
      "110",
      "81"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "Z",
      "T",
      "K",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 27, 31, 35, 39, 43, ?",
    "options": [
      "47",
      "49",
      "51",
      "44"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : A, E, I, M, Q, ?",
    "options": [
      "W",
      "T",
      "U",
      "V"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "149",
      "144",
      "24",
      "140"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>30 &nbsp;&nbsp; 60 &nbsp;&nbsp; 120<br>31 &nbsp;&nbsp; 62 &nbsp;&nbsp; 124<br>32 &nbsp;&nbsp; 64 &nbsp;&nbsp; ?",
    "options": [
      "128",
      "96",
      "130",
      "68"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "T",
      "K",
      "V",
      "Z"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 32, 37, 42, 47, 52, ?",
    "options": [
      "59",
      "62",
      "57",
      "54"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : P, S, V, Y, B, ?",
    "options": [
      "D",
      "F",
      "G",
      "E"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "49",
      "54",
      "45"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>35 &nbsp;&nbsp; 70 &nbsp;&nbsp; 140<br>36 &nbsp;&nbsp; 72 &nbsp;&nbsp; 144<br>37 &nbsp;&nbsp; 74 &nbsp;&nbsp; ?",
    "options": [
      "111",
      "78",
      "150",
      "148"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "K",
      "Z",
      "V",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 37, 43, 49, 55, 61, ?",
    "options": [
      "69",
      "67",
      "64",
      "73"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : E, G, I, K, M, ?",
    "options": [
      "N",
      "P",
      "O",
      "Q"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "24",
      "149",
      "144",
      "140"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>40 &nbsp;&nbsp; 80 &nbsp;&nbsp; 160<br>41 &nbsp;&nbsp; 82 &nbsp;&nbsp; 164<br>42 &nbsp;&nbsp; 84 &nbsp;&nbsp; ?",
    "options": [
      "170",
      "88",
      "126",
      "168"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "V",
      "T",
      "Z",
      "K"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 42, 45, 48, 51, 54, ?",
    "options": [
      "57",
      "60",
      "59",
      "54"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : T, X, B, F, J, ?",
    "options": [
      "M",
      "N",
      "P",
      "O"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "49",
      "14",
      "45",
      "54"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>45 &nbsp;&nbsp; 90 &nbsp;&nbsp; 180<br>46 &nbsp;&nbsp; 92 &nbsp;&nbsp; 184<br>47 &nbsp;&nbsp; 94 &nbsp;&nbsp; ?",
    "options": [
      "188",
      "190",
      "98",
      "141"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "V",
      "Z",
      "K",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 47, 51, 55, 59, 63, ?",
    "options": [
      "64",
      "69",
      "71",
      "67"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : I, L, O, R, U, ?",
    "options": [
      "Z",
      "Y",
      "W",
      "X"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "24",
      "140",
      "144",
      "149"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>50 &nbsp;&nbsp; 100 &nbsp;&nbsp; 200<br>51 &nbsp;&nbsp; 102 &nbsp;&nbsp; 204<br>52 &nbsp;&nbsp; 104 &nbsp;&nbsp; ?",
    "options": [
      "210",
      "208",
      "156",
      "108"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "K",
      "T",
      "V",
      "Z"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 52, 57, 62, 67, 72, ?",
    "options": [
      "74",
      "79",
      "82",
      "77"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : X, Z, B, D, F, ?",
    "options": [
      "I",
      "J",
      "H",
      "G"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "54",
      "49",
      "14",
      "45"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>55 &nbsp;&nbsp; 110 &nbsp;&nbsp; 220<br>56 &nbsp;&nbsp; 112 &nbsp;&nbsp; 224<br>57 &nbsp;&nbsp; 114 &nbsp;&nbsp; ?",
    "options": [
      "230",
      "171",
      "118",
      "228"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "Z",
      "V",
      "T",
      "K"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 57, 63, 69, 75, 81, ?",
    "options": [
      "93",
      "89",
      "84",
      "87"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : M, Q, U, Y, C, ?",
    "options": [
      "F",
      "H",
      "I",
      "G"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "24",
      "144",
      "140",
      "149"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>60 &nbsp;&nbsp; 120 &nbsp;&nbsp; 240<br>61 &nbsp;&nbsp; 122 &nbsp;&nbsp; 244<br>62 &nbsp;&nbsp; 124 &nbsp;&nbsp; ?",
    "options": [
      "248",
      "128",
      "250",
      "186"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "Z",
      "K"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 62, 65, 68, 71, 74, ?",
    "options": [
      "74",
      "77",
      "80",
      "79"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : B, E, H, K, N, ?",
    "options": [
      "S",
      "Q",
      "R",
      "P"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "45",
      "49",
      "54",
      "14"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>65 &nbsp;&nbsp; 130 &nbsp;&nbsp; 260<br>66 &nbsp;&nbsp; 132 &nbsp;&nbsp; 264<br>67 &nbsp;&nbsp; 134 &nbsp;&nbsp; ?",
    "options": [
      "270",
      "138",
      "201",
      "268"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "Z",
      "K",
      "V",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 67, 71, 75, 79, 83, ?",
    "options": [
      "89",
      "87",
      "84",
      "91"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : Q, S, U, W, Y, ?",
    "options": [
      "B",
      "A",
      "C",
      "Z"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "24",
      "149",
      "144",
      "140"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>70 &nbsp;&nbsp; 140 &nbsp;&nbsp; 280<br>71 &nbsp;&nbsp; 142 &nbsp;&nbsp; 284<br>72 &nbsp;&nbsp; 144 &nbsp;&nbsp; ?",
    "options": [
      "148",
      "288",
      "216",
      "290"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "K",
      "T",
      "V",
      "Z"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 72, 77, 82, 87, 92, ?",
    "options": [
      "94",
      "97",
      "99",
      "102"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : F, J, N, R, V, ?",
    "options": [
      "A",
      "B",
      "Y",
      "Z"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "54",
      "45",
      "14",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>75 &nbsp;&nbsp; 150 &nbsp;&nbsp; 300<br>76 &nbsp;&nbsp; 152 &nbsp;&nbsp; 304<br>77 &nbsp;&nbsp; 154 &nbsp;&nbsp; ?",
    "options": [
      "308",
      "310",
      "158",
      "231"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "V",
      "Z",
      "K",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 77, 83, 89, 95, 101, ?",
    "options": [
      "104",
      "113",
      "109",
      "107"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : U, X, A, D, G, ?",
    "options": [
      "I",
      "K",
      "L",
      "J"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "149",
      "24",
      "144",
      "140"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>80 &nbsp;&nbsp; 160 &nbsp;&nbsp; 320<br>81 &nbsp;&nbsp; 162 &nbsp;&nbsp; 324<br>82 &nbsp;&nbsp; 164 &nbsp;&nbsp; ?",
    "options": [
      "168",
      "246",
      "330",
      "328"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "V",
      "K",
      "T",
      "Z"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 82, 85, 88, 91, 94, ?",
    "options": [
      "97",
      "100",
      "94",
      "99"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : J, L, N, P, R, ?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "45",
      "49",
      "14",
      "54"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>85 &nbsp;&nbsp; 170 &nbsp;&nbsp; 340<br>86 &nbsp;&nbsp; 172 &nbsp;&nbsp; 344<br>87 &nbsp;&nbsp; 174 &nbsp;&nbsp; ?",
    "options": [
      "178",
      "261",
      "348",
      "350"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "V",
      "T",
      "Z",
      "K"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 87, 91, 95, 99, 103, ?",
    "options": [
      "109",
      "107",
      "111",
      "104"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : Y, C, G, K, O, ?",
    "options": [
      "S",
      "R",
      "U",
      "T"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "144",
      "149",
      "24",
      "140"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>90 &nbsp;&nbsp; 180 &nbsp;&nbsp; 360<br>91 &nbsp;&nbsp; 182 &nbsp;&nbsp; 364<br>92 &nbsp;&nbsp; 184 &nbsp;&nbsp; ?",
    "options": [
      "370",
      "276",
      "188",
      "368"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "K",
      "Z",
      "T",
      "V"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : 92, 97, 102, 107, 112, ?",
    "options": [
      "114",
      "122",
      "119",
      "117"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : N, Q, T, W, Z, ?",
    "options": [
      "C",
      "B",
      "E",
      "D"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "54",
      "49",
      "14",
      "45"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>95 &nbsp;&nbsp; 190 &nbsp;&nbsp; 380<br>96 &nbsp;&nbsp; 192 &nbsp;&nbsp; 384<br>97 &nbsp;&nbsp; 194 &nbsp;&nbsp; ?",
    "options": [
      "291",
      "390",
      "388",
      "198"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "Z",
      "T",
      "K",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Complétez la série : 97, 103, 109, 115, 121, ?",
    "options": [
      "124",
      "133",
      "127",
      "129"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Complétez la série : C, E, G, I, K, ?",
    "options": [
      "M",
      "N",
      "O",
      "L"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : 64, 81, 100, 121, ?",
    "options": [
      "149",
      "140",
      "144",
      "24"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>100 &nbsp;&nbsp; 200 &nbsp;&nbsp; 400<br>101 &nbsp;&nbsp; 202 &nbsp;&nbsp; 404<br>102 &nbsp;&nbsp; 204 &nbsp;&nbsp; ?",
    "options": [
      "306",
      "410",
      "208",
      "408"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "K",
      "Z",
      "V",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 102, 105, 108, 111, 114, ?",
    "options": [
      "119",
      "114",
      "120",
      "117"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : R, V, Z, D, H, ?",
    "options": [
      "K",
      "N",
      "M",
      "L"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "54",
      "14",
      "49",
      "45"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Trouvez le nombre manquant dans la matrice :<br>105 &nbsp;&nbsp; 210 &nbsp;&nbsp; 420<br>106 &nbsp;&nbsp; 212 &nbsp;&nbsp; 424<br>107 &nbsp;&nbsp; 214 &nbsp;&nbsp; ?",
    "options": [
      "428",
      "321",
      "430",
      "218"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Complétez la série : B, C, D, G, P, ?",
    "options": [
      "T",
      "Z",
      "V",
      "K"
    ],
    "answerIndex": 0
  }
];

export function generateOfficialTageMageMockExamDeck() {
  const mapDeck = (list, prefix) => shuffleArray(list).slice(0, 15).map(item => {
    const correctText = item.options[item.answerIndex];
    const shuffledOpts = shuffleArray(item.options);
    return {
      prompt: `<div style="display:inline-block; padding:4px 10px; background:rgba(0,113,227,0.1); color:#0071E3; font-weight:700; border-radius:6px; font-size:12px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">${prefix}</div><br>${item.prompt}`,
      options: shuffledOpts,
      answerIndex: shuffledOpts.indexOf(correctText)
    };
  });

  const compDeck = mapDeck(TM_COMPREHENSION_QUESTIONS, 'Compréhension');
  const calcDeck = mapDeck(TM_CALCUL_QUESTIONS, 'Calcul');
  const raisDeck = mapDeck(TM_RAISONNEMENT_QUESTIONS, 'Raisonnement');
  const cmDeck = mapDeck(TM_CONDITIONS_MINIMALES_QUESTIONS, 'Conditions Minimales');
  const expDeck = mapDeck(TM_EXPRESSION_QUESTIONS, 'Expression');
  const logDeck = mapDeck(TM_LOGIQUE_QUESTIONS, 'Logique');

  return [...compDeck, ...calcDeck, ...raisDeck, ...cmDeck, ...expDeck, ...logDeck];
}

export function renderMemoTageMageCourse(subtestKey, ficheIdx) {
  const fichesMap = {
  "tm_comprehension": [
    {
      "title": "Fiche 1 : Lecture Rapide & Mots-Clés",
      "subtitle": "Techniques de lecture active, structures de paragraphes et pivots argumentatifs",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Méthode Réflexe de la Lecture Active</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Lecture de la question avant le texte :</strong> Repérer immédiatement s'il s'agit d'une question d'idée générale, d'un détail précis ou d'une inférence.</p>\n                  <p>• <strong>Repérage des Mots-Clés :</strong> Surligner visuellement les noms propres, dates, chiffrages, concepts entre guillemets et néologismes.</p>\n                  <p>• <strong>Découpage par Paragraphes :</strong> Chaque paragraphe contient UNE seule idée principale (souvent exprimée dans la première ou dernière phrase).</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Les Connecteurs Logiques & Pivots Argumentatifs</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Opposition / Nuance (Pivots critiques) :</strong> <em>Cependant, néanmoins, toutefois, or, en revanche, pourtant</em>. L'idée véritable de l'auteur se trouve TOUJOURS après le pivot !</p>\n                  <p>• <strong>Causalité / Illustration :</strong> <em>En effet, car, parce que, notamment, ainsi</em> (introduisent des exemples secondaires).</p>\n                  <p>• <strong>Conclusion / Thèse :</strong> <em>Par conséquent, dès lors, en somme, ainsi, il s'ensuit que</em> (annoncent le bilan de l'auteur).</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 2 : Idée Principale vs Détails Secondaires",
      "subtitle": "Distinguer la thèse centrale de l'auteur des simples illustrations et pièges",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Identifier la Thèse Centrale de l'Auteur</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Thèse Centrale vs Exemple :</strong> La réponse exacte à la question 'Quelle est l'idée principale ?' englobe TOUT le texte et ne se cantonne pas à un exemple particulier.</p>\n                  <p>• <strong>Le Piège du Vrai-Faux du Texte :</strong> Une proposition peut être 100 % vraie selon le texte mais être un DÉTAIL secondaire, donc FAUSSE si la question demande l'idée principale.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Grille de Sélection des Réponses aux QCM</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Élimination des Hors-Sujets :</strong> Éliminer les options qui ajoutent des éléments extérieurs non mentionnés dans le texte.</p>\n                  <p>• <strong>Élimination des Contres-Sens :</strong> Vérifier attentivement les négations et les inversions de sujets/verbes.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 3 : Ton de l'Auteur & Inférences Logiques",
      "subtitle": "Nuances de ton (ironique, polemique, neutre) et conclusions implicites",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Nuances de Ton & Posture de l'Auteur</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Didactique / Informatif :</strong> Ton neutre, objectif, présentant des faits, des statistiques sans prise de parti affective.</p>\n                  <p>• <strong>Polémique / Critique :</strong> Utilisation d'un vocabulaire péjoratif, de figures d'opposition, remettant en cause une idée reçue.</p>\n                  <p>• <strong>Ironique / Satirique :</strong> Décalage entre ce qui est écrit et ce qui est pensé (antiphrase, exagération volontaire).</p>\n                  <p>• <strong>Alarmiste / Engagé :</strong> Accent mis sur les dangers, les urgences (vocabulaire du risque, de la crise).</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Inférences & Déductions Implicites</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Définition d'une Inférence :</strong> Une conclusion qui n'est pas écrite mot pour mot mais qui découle INÉVITABLEMENT des prémisses du texte.</p>\n                  <p>• <strong>Règle de Prudence :</strong> L'inférence correcte ne doit jamais spéculer au-delà de ce que les faits du texte garantissent.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 4 : Pièges de Reformulation & Adverbes Absolus",
      "subtitle": "Détection des mots pièges éliminatoires (toujours, jamais, aucun, tous)",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Les Adverbes et Quantificateurs Pièges</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Adverbes Absolus (Éliminatoires à 95 %) :</strong> <em>Toujours, jamais, aucun, tous, exclusivement, obligatoirement, totalement</em>. Si le texte dit 'souvent', l'option qui écrit 'toujours' est FAUSSE.</p>\n                  <p>• <strong>Modalisateurs de Nuance (À privilégier) :</strong> <em>Parfois, certains, généralement, susceptible de, peut contribuer à</em>.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Pièges de Chiffres & de Chronologie</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Confusion Cause / Conséquence :</strong> Inverser l'ordre des événements décrits dans le texte.</p>\n                  <p>• <strong>Confusion Pourcentage / Valeur Absolue :</strong> Une hausse de 50 % sur une faible quantité peut représenter moins qu'une hausse de 5 % sur une grande quantité.</p>\n                </div>\n              </div>\n            </div>"
    }
  ],
  "tm_calcul": [
    {
      "title": "Fiche 1 : Fractions & Pourcentages Composés",
      "subtitle": "Tableau des 12 fractions usuelles, coefficients multiplicateurs & variations",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Les 12 Fractions Usuelles des Annales (À connaître par cœur)</div>\n                <div class=\"math-table-grid\" style=\"grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\">\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> = <strong>50 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> ≈ <strong>33,3 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> ≈ <strong>66,7 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = <strong>25 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> = <strong>75 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> = <strong>20 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span> ≈ <strong>16,7 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span> = <strong>12,5 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">8</span></span> = <strong>37,5 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">8</span></span> = <strong>62,5 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">8</span></span> = <strong>87,5 %</strong></div>\n                  <div class=\"math-table-cell\"><span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">9</span></span> ≈ <strong>11,1 %</strong></div>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Coefficient Multiplicateur (CM) & Variations Successives</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Hausse de x % :</strong> <span class=\"math-op\">CM = 1 + <span class=\"math-frac\"><span class=\"num\">x</span><span class=\"den\">100</span></span></span> (ex: Hausse de +20 % ➔ CM = 1,20).</p>\n                  <p>• <strong>Baisse de y % :</strong> <span class=\"math-op\">CM = 1 - <span class=\"math-frac\"><span class=\"num\">y</span><span class=\"den\">100</span></span></span> (ex: Baisse de -30 % ➔ CM = 0,70).</p>\n                  <p>• <strong>Variations Successives :</strong> <span class=\"math-op\">CM<sub>global</sub> = CM₁ × CM₂</span>.</p>\n                  <p>• <strong>Piège Récurrent des Annales :</strong> +20 % puis -20 % ne s'annulent pas ! <span class=\"math-op\">1,20 × 0,80 = 0,96</span> ➔ <strong>Perte globale de 4 %</strong>.</p>\n                  <p>• <strong>Évolution Réciproque (Revenir au prix initial) :</strong> <span class=\"math-op\">CM<sub>réciproque</sub> = <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">CM</span></span></span>. (ex: +25 % ➔ CM = <span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">4</span></span> ➔ CM<sub>réciproque</sub> = <span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">5</span></span> = 0,80 ➔ <strong>Baisse de 20 % nécessaire</strong>).</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 2 : Vitesses V=D/T, Rattrapages & Robinets",
      "subtitle": "Conversions m/s, vitesse moyenne, vitesses relatives & travail partagé",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Formules de Vitesse & Conversion Réflexe</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Formules Fondamentales :</strong> <span class=\"math-op\">V = <span class=\"math-frac\"><span class=\"num\">D</span><span class=\"den\">T</span></span></span> &nbsp;|&nbsp; <span class=\"math-op\">D = V × T</span> &nbsp;|&nbsp; <span class=\"math-op\">T = <span class=\"math-frac\"><span class=\"num\">D</span><span class=\"den\">V</span></span></span>.</p>\n                  <p>• <strong>Conversion Réflexe m/s ➔ km/h :</strong> <span class=\"math-op\">1 m/s = 3,6 km/h</span> (ex: 20 m/s × 3,6 = 72 km/h).</p>\n                  <p>• <strong>Vitesse Moyenne sur Aller-Retour (Piège Annales !) :</strong> <span class=\"math-op\">V<sub>moy</sub> = <span class=\"math-frac\"><span class=\"num\">2 × V₁ × V₂</span><span class=\"den\">V₁ + V₂</span></span></span> (Moyenne harmonique, JAMAIS la moyenne arithmétique !).</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Vitesses Relatives & Débits de Robinets</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Mobiles en sens opposés (Croisement) :</strong> <span class=\"math-op\">V<sub>rel</sub> = V₁ + V₂</span> ➔ <span class=\"math-op\">T<sub>rencontre</sub> = <span class=\"math-frac\"><span class=\"num\">D</span><span class=\"den\">V₁ + V₂</span></span></span>.</p>\n                  <p>• <strong>Mobiles dans le même sens (Rattrapage) :</strong> <span class=\"math-op\">V<sub>rel</sub> = V₁ - V₂</span> ➔ <span class=\"math-op\">T<sub>rattrapage</sub> = <span class=\"math-frac\"><span class=\"num\">Retard</span><span class=\"den\">V₁ - V₂</span></span></span>.</p>\n                  <p>• <strong>Robinets / Travail Partagé :</strong> Débit total <span class=\"math-op\">D<sub>tot</sub> = D₁ + D₂</span> ➔ <span class=\"math-op\">T<sub>tot</sub> = <span class=\"math-frac\"><span class=\"num\">T₁ × T₂</span><span class=\"den\">T₁ + T₂</span></span></span>.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 3 : Barycentre, Concentrations & Mélanges de Solutions",
      "subtitle": "Moyennes pondérées, règle de la balance & dilutions d'acide",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Formule du Barycentre & Moyenne Pondérée</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Moyenne Pondérée :</strong> <span class=\"math-op\">Mbar = <span class=\"math-frac\"><span class=\"num\">p₁ × x₁ + p₂ × x₂</span><span class=\"den\">p₁ + p₂</span></span></span>.</p>\n                  <p>• <strong>Règle de l'Écart (Balance du Barycentre) :</strong> L'écart à la moyenne est inversement proportionnel aux poids : <span class=\"math-op\">p₁ × (x₁ - M) = p₂ × (M - x₂)</span>.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Mélanges & Concentrations</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Concentration Finale :</strong> <span class=\"math-op\">C<sub>finale</sub> = <span class=\"math-frac\"><span class=\"num\">V₁ × C₁ + V₂ × C₂</span><span class=\"den\">V₁ + V₂</span></span></span>.</p>\n                  <p>• <strong>Dilution avec de l'eau pure (C₂ = 0 %) :</strong> <span class=\"math-op\">C<sub>finale</sub> = <span class=\"math-frac\"><span class=\"num\">V₁ × C₁</span><span class=\"den\">V₁ + V<sub>eau</sub></span></span></span>.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 4 : Géométrie, Aires, Volumes & Triples Pythagoriciens",
      "subtitle": "Triples 3-4-5, 5-12-13, 8-15-17, cercles, diagonales & polygones",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Triples Pythagoriciens Sacrés du TAGE MAGE</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Triple 3 - 4 - 5 :</strong> Multiples récurrents : 6 - 8 - 10 | 9 - 12 - 15 | 12 - 16 - 20.</p>\n                  <p>• <strong>Triple 5 - 12 - 13 :</strong> Multiples récurrents : 10 - 24 - 26.</p>\n                  <p>• <strong>Triple 8 - 15 - 17 :</strong> hypoténuse = 17 cm.</p>\n                  <p>• <strong>Triple 7 - 24 - 25 :</strong> hypoténuse = 25 cm.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Formules Géométriques Réflexes</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Triangle Équilatéral de côté a :</strong> <span class=\"math-op\">Hauteur = <span class=\"math-frac\"><span class=\"num\">a √3</span><span class=\"den\">2</span></span></span> &nbsp;|&nbsp; <span class=\"math-op\">Aire = <span class=\"math-frac\"><span class=\"num\">a² √3</span><span class=\"den\">4</span></span></span>.</p>\n                  <p>• <strong>Carré de côté a :</strong> Diagonale = <span class=\"math-op\">a √2</span>.</p>\n                  <p>• <strong>Cube de côté a :</strong> Diagonale principale = <span class=\"math-op\">a √3</span>.</p>\n                  <p>• <strong>Diagonales d'un polygone à n côtés :</strong> <span class=\"math-op\">N = <span class=\"math-frac\"><span class=\"num\">n(n - 3)</span><span class=\"den\">2</span></span></span> (ex: Octogone 8 côtés ➔ 8×5/2 = 20 diagonales).</p>\n                </div>\n              </div>\n            </div>"
    }
  ],
  "tm_raisonnement": [
    {
      "title": "Fiche 1 : Logigrammes & Grilles de Déduction",
      "subtitle": "Tableaux croisés 2D/3D et règle d'exclusion binaire",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. La Méthode de la Grille Croisée (Logigramme)</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Règle d'Exclusion Binaire :</strong> Dès qu'une case contient une coche affirmative (✓), cochez négativement (×) tout le reste de la ligne et de la colonne.</p>\n                  <p>• <strong>Déduction Directe :</strong> Si une ligne comporte N-1 cases négatives (×), la case restante est OBLIGATOIREMENT affirmative (✓).</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Ordonnancement & Positions</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Repérage des Ancrages Absolus :</strong> Placer d'abord les éléments fixés à un endroit précis (ex: 'A est à l'extrême gauche').</p>\n                  <p>• <strong>Blocs Inséparables :</strong> Si 'A est immédiatement avant B', traiter le couple (A, B) comme un bloc unique d'une seule pièce.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 2 : Diagrammes d'Ensembles & Formule de Venn",
      "subtitle": "Inclusion, intersection et formule d'union N(A ∪ B)",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Formule Fondamentale des Ensembles (Venn)</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Union de 2 Ensembles :</strong> <span class=\"math-op\">N(A ∪ B) = N(A) + N(B) - N(A ∩ B)</span>.</p>\n                  <p>• <strong>Ni A ni B :</strong> <span class=\"math-op\">N(Ni A ni B) = N(Total) - N(A ∪ B)</span>.</p>\n                  <p>• <strong>Seulement A (Exclusif) :</strong> <span class=\"math-op\">N(Seulement A) = N(A) - N(A ∩ B)</span>.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Union de 3 Ensembles</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Formule à 3 Groupes :</strong> <span class=\"math-op\">N(A∪B∪C) = N(A)+N(B)+N(C) - N(A∩B)-N(B∩C)-N(A∩C) + N(A∩B∩C)</span>.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 3 : Syllogismes & Contraposée Absolue",
      "subtitle": "Règles de déduction rigoureuses et équivalences logiques",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. La Règle Absolue de la Contraposée</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Équivalence Royale :</strong> <span class=\"math-op\">Si A alors B &nbsp;≡&nbsp; Si Non B alors Non A</span>.</p>\n                  <p>• <strong>Exemple Annales :</strong> 'S'il pleut, le sol est mouillé' ➔ Contraposée exacte : 'Si le sol n'est pas mouillé, c'est qu'il ne pleut pas'.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Les Deux Faux Raisonnements à Bannir (Pièges)</div>\n                <div class=\"math-desc-list\">\n                  <p>• [INCORRECT] <strong>Inversion Fausse :</strong> 'Si B alors A' est FAUX ! (Le sol peut être mouillé car on a lavé la voiture, pas forcément parce qu'il a plu).</p>\n                  <p>• [INCORRECT] <strong>Négation Fausse :</strong> 'Si Non A alors Non B' est FAUX !</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 4 : Épreuves de Vérité & Mensonge",
      "subtitle": "Méthode des hypothèses disjonctives et détection d'incohérences",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Méthode par Élimination de Contradictions</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Étape 1 :</strong> Fixer une hypothèse de départ : 'Supposons que le Témoin A dise la vérité'.</p>\n                  <p>• <strong>Étape 2 :</strong> Dérouler les conséquences logiques de cette déclaration sur les propos des autres personnes.</p>\n                  <p>• <strong>Étape 3 :</strong> Si vous obtenez une contradiction (ex: B est à la fois menteur et véridique), l'hypothèse de départ est FAUSSE.</p>\n                </div>\n              </div>\n            </div>"
    }
  ],
  "tm_conditions_minimales": [
    {
      "title": "Fiche 1 : Guide Définitif des 5 Réponses A, B, C, D, E",
      "subtitle": "Explication rigoureuse de chaque option et méthode en 3 étapes",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Signification Exacte des 5 Choix Officiels</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Réponse (A) :</strong> L'information (1) seule est SUFFISANTE, mais l'information (2) seule ne l'est PAS.</p>\n                  <p>• <strong>Réponse (B) :</strong> L'information (2) seule est SUFFISANTE, mais l'information (1) seule ne l'est PAS.</p>\n                  <p>• <strong>Réponse (C) :</strong> Les informations (1) et (2) sont insuffisantes séparément, mais SUFFISENT ENSEMBLE.</p>\n                  <p>• <strong>Réponse (D) :</strong> L'information (1) seule suffit ET l'information (2) seule suffit séparément.</p>\n                  <p>• <strong>Réponse (E) :</strong> Même combinées ensemble, les informations (1) et (2) NE SUFFISENT PAS.</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. La Méthode Systématique en 3 Étapes</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Étape 1 :</strong> Masquer (2). Tester l'information (1) SEULE. Est-elle suffisante ?</p>\n                  <p>• <strong>Étape 2 :</strong> Masquer (1). Tester l'information (2) SEULE. Est-elle suffisante ?</p>\n                  <p>• <strong>Étape 3 :</strong> Si ni (1) ni (2) ne suffisent seules, combiner (1) + (2). Est-ce suffisant ? (Verdict C ou E).</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 2 : Équations & Systèmes à n Inconnues",
      "subtitle": "Vérification de l'indépendance des équations",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Règle du Nombre d'Équations Indépendantes</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Principe Général :</strong> Pour déterminer n inconnues distinctes, il faut au minimum n équations indépendantes.</p>\n                  <p>• <strong>Piège des Équations Redondantes (Multiples) :</strong> Si Info (1) donne <span class=\"math-op\">2x + 3y = 10</span> et Info (2) donne <span class=\"math-op\">4x + 6y = 20</span>, l'info (2) est juste 2×Info (1). Elles ne forment qu'une seule équation ➔ <strong>Réponse (E) !</strong></p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 3 : Géométrie & Figures Spatiales",
      "subtitle": "Données suffisantes vs données insuffisantes pour surfaces et volumes",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Déterminer la Surface ou le Rayon</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Cercle :</strong> Connaître le rayon R, le diamètre D ou le périmètre P suffit seul à déterminer l'Aire (Réponse D si présent séparément).</p>\n                  <p>• <strong>Rectangle :</strong> Connaître le périmètre seul NE SUFFIT PAS à connaître l'aire. Il faut la Longueur ET la Largeur (Réponse C).</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 4 : Pièges Récurrents (x² = K, Signes & Entiers)",
      "subtitle": "Solutions multiples, fausses évidences et cas particuliers",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Le Piège du Carré (x² = K)</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>L'équation x² = 49 :</strong> Donne 2 solutions réelles (<span class=\"math-op\">x = 7</span> ou <span class=\"math-op\">x = -7</span>). Si la question demande la valeur exacte de x sans préciser son signe, l'information est INSUFFISANTE !</p>\n                  <p>• <strong>L'équation x³ = 343 :</strong> Donne 1 seule solution réelle (<span class=\"math-op\">x = 7</span>). Cette information est SUFFISANTE !</p>\n                </div>\n              </div>\n            </div>"
    }
  ],
  "tm_expression": [
    {
      "title": "Fiche 1 : Accords Complexes & Participe Passé",
      "subtitle": "Règles sur Tout, Même, Demi, Leur et verbes pronominaux",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Règles d'Accord de TOUT, MÊME, DEMI, LEUR</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>TOUT :</strong> Adjectif ➔ S'accorde (<em>tous les jours, toutes les femmes</em>). Adverbe (= tout à fait) ➔ Invariable sauf devant un adjectif féminin commençant par une consonne (<em>toute contente, toutes honteuses</em>).</p>\n                  <p>• <strong>DEMI :</strong> Placé avant le nom avec trait d'union ➔ INVARIABLE (<em>une demi-heure</em>). Placé après le nom ➔ S'accorde uniquement en genre (<em>deux heures et demie</em>).</p>\n                  <p>• <strong>LEUR :</strong> Pronom (devant un verbe) ➔ Toujours INVARIABLE (<em>je leur ai parlé</em>). Adjectif possessif (devant un nom) ➔ S'accorde (<em>leurs idées</em>).</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Participe Passé des Verbes Pronominaux (Les Invariables à Bannir)</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Pas d'accord si le pronom réfléchi est COI :</strong> <em>Ils se sont parlé, elles se sont succédé, ils se sont téléphoné, elles se sont plu, ils se sont réjouis, elles se sont envoyé des lettres</em>.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 2 : Syntaxe & Tournures Fautives",
      "subtitle": "Ne dites pas / dites du TAGE MAGE et concordance des temps",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Tournures Fautives Éliminatoires</div>\n                <div class=\"math-desc-list\">\n                  <p>• [INCORRECT] <em>Pallier à un problème</em> ➔ ✓ <strong>Pallier un problème</strong> (COD direct).</p>\n                  <p>• [INCORRECT] <em>Se rappeler de quelque chose</em> ➔ ✓ <strong>Se rappeler quelque chose</strong> (COD direct).</p>\n                  <p>• [INCORRECT] <em>Après qu'il soit parti</em> ➔ ✓ <strong>Après qu'il est parti</strong> (Indicatif obligatoire !).</p>\n                  <p>• [INCORRECT] <em>Au jour d'aujourd'hui</em> ➔ ✓ <strong>Aujourd'hui / À ce jour</strong> (Pléonasme).</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 3 : Orthographe & Genre des Noms Pièges",
      "subtitle": "Masculin/Féminin et consonnes doubles",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Genre des Noms Pièges</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>MASCULIN :</strong> Un aphte, un agrume, un amalgame, un apogée, un entracte, un éloge, un pétale, un astérisque, un haltère, un obélisque.</p>\n                  <p>• <strong>FÉMININ :</strong> Une acné, une anagramme, une épitaphe, une échappatoire, une orbite, une immondice, une alvéole.</p>\n                  <p>• <strong>Dilemme :</strong> S'écrit avec <strong>mm</strong> (et jamais [INCORRECT] <em>dilemne</em> !).</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 4 : Paronymes & Locutions Latines",
      "subtitle": "Distinctions fines et vocabulaire officiel du Grand Manuel",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Distinctions de Paronymes Récurrentes</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Démythifier :</strong> Ôter sa valeur de mythe <em>vs</em> <strong>Démystifier :</strong> Détromper les gens d'une supercherie.</p>\n                  <p>• <strong>Proscrire :</strong> Interdire formellement <em>vs</em> <strong>Prescrire :</strong> Ordonner / recommander.</p>\n                  <p>• <strong>Inculquer :</strong> Faire entrer dans l'esprit de façon durable (une valeur, une idée).</p>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Locutions Latines Incontournables</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>In fine :</strong> En fin de compte / À la fin.</p>\n                  <p>• <strong>Ipso facto :</strong> Par le fait même / Automatiquement.</p>\n                  <p>• <strong>De facto :</strong> De fait / Dans la pratique (opposé à <em>de jure</em>).</p>\n                  <p>• <strong>Manu militari :</strong> Par la force armée / Avec rigueur.</p>\n                </div>\n              </div>\n            </div>"
    }
  ],
  "tm_logique": [
    {
      "title": "Fiche 1 : Rang des Lettres A-Z & Méthode EJOTY",
      "subtitle": "Position des 26 lettres et séries alphabétiques",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Table Complète des 26 Rangs Alphabétiques</div>\n                <div class=\"math-table-grid\" style=\"grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));\">\n                  <div class=\"math-table-cell\">A=1</div><div class=\"math-table-cell\">B=2</div><div class=\"math-table-cell\">C=3</div><div class=\"math-table-cell\">D=4</div><div class=\"math-table-cell\">E=5</div><div class=\"math-table-cell\">F=6</div><div class=\"math-table-cell\">G=7</div><div class=\"math-table-cell\">H=8</div><div class=\"math-table-cell\">I=9</div><div class=\"math-table-cell\">J=10</div><div class=\"math-table-cell\">K=11</div><div class=\"math-table-cell\">L=12</div><div class=\"math-table-cell\">M=13</div><div class=\"math-table-cell\">N=14</div><div class=\"math-table-cell\">O=15</div><div class=\"math-table-cell\">P=16</div><div class=\"math-table-cell\">Q=17</div><div class=\"math-table-cell\">R=18</div><div class=\"math-table-cell\">S=19</div><div class=\"math-table-cell\">T=20</div><div class=\"math-table-cell\">U=21</div><div class=\"math-table-cell\">V=22</div><div class=\"math-table-cell\">W=23</div><div class=\"math-table-cell\">X=24</div><div class=\"math-table-cell\">Y=25</div><div class=\"math-table-cell\">Z=26</div>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Méthodes Réflexes de Comptage</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Mnémonique E-J-O-T-Y :</strong> <span class=\"math-op\">E=5 &nbsp;|&nbsp; J=10 &nbsp;|&nbsp; O=15 &nbsp;|&nbsp; T=20 &nbsp;|&nbsp; Y=25</span>.</p>\n                  <p>• <strong>Rang Inverse (Z=1, A=26) :</strong> <span class=\"math-op\">Rang Inverse = 27 - Rang Direct</span>.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 2 : Séries Numériques, Carrés & Cubes",
      "subtitle": "Carrés parfaits (1-25), cubes (1-20) et Fibonacci",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Table des Carrés Parfaits (1² à 25²)</div>\n                <div class=\"math-table-grid\" style=\"grid-template-columns: repeat(auto-fill, minmax(85px, 1fr)); font-size: 13px;\">\n                  <div class=\"math-table-cell\">1²=1</div><div class=\"math-table-cell\">2²=4</div><div class=\"math-table-cell\">3²=9</div><div class=\"math-table-cell\">4²=16</div><div class=\"math-table-cell\">5²=25</div><div class=\"math-table-cell\">6²=36</div><div class=\"math-table-cell\">7²=49</div><div class=\"math-table-cell\">8²=64</div><div class=\"math-table-cell\">9²=81</div><div class=\"math-table-cell\">10²=100</div><div class=\"math-table-cell\">11²=121</div><div class=\"math-table-cell\">12²=144</div><div class=\"math-table-cell\">13²=169</div><div class=\"math-table-cell\">14²=196</div><div class=\"math-table-cell\">15²=225</div><div class=\"math-table-cell\">16²=256</div><div class=\"math-table-cell\">17²=289</div><div class=\"math-table-cell\">18²=324</div><div class=\"math-table-cell\">19²=361</div><div class=\"math-table-cell\">20²=400</div><div class=\"math-table-cell\">21²=441</div><div class=\"math-table-cell\">22²=484</div><div class=\"math-table-cell\">23²=529</div><div class=\"math-table-cell\">24²=576</div><div class=\"math-table-cell\">25²=625</div>\n                </div>\n              </div>\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">2. Table des Cubes Parfaits (1³ à 20³)</div>\n                <div class=\"math-table-grid\" style=\"grid-template-columns: repeat(auto-fill, minmax(95px, 1fr)); font-size: 12.5px;\">\n                  <div class=\"math-table-cell\">1³=1</div><div class=\"math-table-cell\">2³=8</div><div class=\"math-table-cell\">3³=27</div><div class=\"math-table-cell\">4³=64</div><div class=\"math-table-cell\">5³=125</div><div class=\"math-table-cell\">6³=216</div><div class=\"math-table-cell\">7³=343</div><div class=\"math-table-cell\">8³=512</div><div class=\"math-table-cell\">9³=729</div><div class=\"math-table-cell\">10³=1000</div><div class=\"math-table-cell\">11³=1331</div><div class=\"math-table-cell\">12³=1728</div><div class=\"math-table-cell\">13³=2197</div><div class=\"math-table-cell\">14³=2744</div><div class=\"math-table-cell\">15³=3375</div><div class=\"math-table-cell\">16³=4096</div><div class=\"math-table-cell\">17³=4913</div><div class=\"math-table-cell\">18³=5832</div><div class=\"math-table-cell\">19³=6859</div><div class=\"math-table-cell\">20³=8000</div>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 3 : Astuce de la Mise à la Verticale",
      "subtitle": "La méthode absolue pour résoudre les matrices 3x3",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Méthode Réflexe de Résolution des Matrices 3x3</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Étape 1 (Lecture Horizontale) :</strong> Chercher une relation entre Ligne 1, Ligne 2 et Ligne 3.</p>\n                  <p>• <strong>Étape 2 (Lecture Verticale) :</strong> Si pas de règle évidente en ligne, poser la matrice en colonnes C1, C2, C3.</p>\n                  <p>• <strong>Opérations Fréquentes :</strong> Somme constante des lignes, produit des termes, somme des chiffres des nombres.</p>\n                </div>\n              </div>\n            </div>"
    },
    {
      "title": "Fiche 4 : Détection des Leurres & Séries Doubles",
      "subtitle": "Éliminer les pièges volontaires et séries croisées",
      "html": "\n            <div style=\"display:flex; flex-direction:column; gap:16px;\">\n              <div class=\"math-card-visual\">\n                <div class=\"math-card-title\">1. Séries Croisées / Alternées</div>\n                <div class=\"math-desc-list\">\n                  <p>• <strong>Détection :</strong> Si la suite monte puis descend alternativement, isoler les termes de rang impair (1er, 3e, 5e) et les termes de rang pair (2e, 4e, 6e).</p>\n                  <p>• <strong>Séries Phoniques Pièges des Annales :</strong> B, C, D, G, P, ? ➔ Réponse : <strong>T</strong> (Lettres dont la prononciation se termine par le son 'é').</p>\n                </div>\n              </div>\n            </div>"
    }
  ]
};
  const list = fichesMap[subtestKey] || [];
  if (list[ficheIdx]) {
    return list[ficheIdx];
  }
  return {
    title: `Fiche ${ficheIdx + 1}`,
    subtitle: "Synthèse de cours du Grand Manuel TAGE MAGE",
    html: `<div class="math-card-visual"><div class="math-card-title">Notions de Révision</div><p>• Réviser les automatismes du Grand Manuel.</p></div>`
  };
}
