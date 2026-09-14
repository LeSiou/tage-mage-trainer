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
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°1 : Quel est le dilemme central de l'autorité de régulation européenne ?</div>",
    "options": [
      "Supprimer les amendes fiscales pour les géants du web",
      "Concilier la modernisation des outils anti-cartels avec la préservation de l'innovation",
      "Sanctionner l'ensemble des fusions transfrontalières",
      "Interdire la gratuité des services en ligne"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°2 : Pourquoi les modèles du numérique échappent-ils en partie au droit classique ?</div>",
    "options": [
      "Parce qu'ils reposent sur la gratuité d'usage et la captation de données plutôt que des ententes tarifaires",
      "Parce qu'ils ne réalisent aucun chiffre d'affaires en Europe",
      "Parce qu'ils sont exemptés de toute obligation par les traités internationaux",
      "Parce qu'ils appartiennent tous au secteur public américain"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°3 : Quelle conséquence des cartels est dénoncée par la Commission ?</div>",
    "options": [
      "La hausse automatique des taux d'intérêt des banques centrales",
      "L'atteinte au pouvoir d'achat des consommateurs et à la compétitivité du marché unique",
      "L'interdiction d'exporter des matières premières",
      "La baisse des investissements dans les transports ferroviaires"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°4 : Quelle est l'opinion des économistes cités quant aux réglementations actuelles ?</div>",
    "options": [
      "Ils estiment que les amendes sont trop faibles pour décourager les cartels",
      "Ils préconisent la suppression pure et simple de la Commission européenne",
      "Ils déplorent leur rigidité face à l'émergence des nouveaux modèles du numérique",
      "Ils considèrent que la captation de données est sans impact économique"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Droit de la Concurrence et la Régulation des Ententes</strong><br>L’encadrement européen des règles de concurrence repose sur une dualité fondamentale : réprimer les abus de position dominante tout en autorisant les coopérations industrielles génératrices d'efficience. La Commission européenne a récemment durci ses sanctions contre les cartels transfrontaliers, estimant que la fixation illicite des prix et le partage des marchés portent une atteinte irréparable au pouvoir d'achat des consommateurs et à la compétitivité du marché unique. Toutefois, plusieurs économistes soulignent la rigidité croissante de ces réglementations face à l'émergence des géants du numérique, dont les modèles économiques s'appuient sur la gratuité apparente des services et la captation massive de données plutôt que sur des ententes tarifaires traditionnelles. Dès lors, le défi majeur de l'autorité de régulation consiste à adapter des outils juridiques conçus pour l'économie industrielle du XXe siècle à un écosystème algorithmique complexe, sans entraver l'innovation stratégique des acteurs continentaux.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°5 : Quelle est l'idée générale de cet extrait ?</div>",
    "options": [
      "Les ententes industrielles doivent être légalisées dans le secteur de la tech",
      "Le droit de la concurrence doit évoluer pour s'adapter aux mutations numériques sans étouffer l'innovation",
      "Les entreprises européennes doivent cesser toute coopération commerciale",
      "La gratuité des applications est la principale cause d'inflation en Europe"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (Cloud Service Providers américains et chinois), les organisations s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives communautaires tentent de promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°6 : Quelle menace juridique étrangère suscite l'inquiétude des acteurs européens ?</div>",
    "options": [
      "La taxation à 50% des transactions bancaires transfrontalières",
      "L'interdiction de commercialiser des processeurs en Europe continentale",
      "L'extraterritorialité de lois permettant la saisie de données sensibles par des autorités étrangères",
      "L'obligation légale de traduire les codes sources en chinois"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (Cloud Service Providers américains et chinois), les organisations s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives communautaires tentent de promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°7 : Quel obstacle entrave la conquête d'une véritable autonomie numérique en Europe ?</div>",
    "options": [
      "L'interdiction européenne de construire des centres de données",
      "Le retard cumulé dans les infrastructures matérielles et le manque d'opérateurs de taille critique",
      "La gratuité totale des serveurs hébergés aux États-Unis",
      "Le refus des entreprises privées de protéger leurs secrets industriels"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (Cloud Service Providers américains et chinois), les organisations s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives communautaires tentent de promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°8 : Comment est qualifié l'arbitrage auquel font face les entreprises ?</div>",
    "options": [
      "Une obligation d'héberger leurs données sur des disques durs externes uniquement",
      "Un arbitrage entre l'ergonomie des offres dominantes et l'exigence de sécurité souveraine",
      "Un choix imposé par la loi entre l'abandon de l'informatique et le retour au papier",
      "Un conflit social majeur entre la direction et les salariés du secteur informatique"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (Cloud Service Providers américains et chinois), les organisations s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives communautaires tentent de promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°9 : Quelle est l'intention principale de l'auteur dans cet extrait ?</div>",
    "options": [
      "Démontrer que la confidentialité des données est un sujet secondaire",
      "Recommander l'adoption obligatoire des Cloud Service Providers asiatiques",
      "Analyser la complexité stratégique et les obstacles de la souveraineté numérique européenne",
      "Encourager la fermeture de tous les réseaux de télécommunication intercontinentaux"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Souveraineté Numérique et le Cloud de Confiance</strong><br>La question de la souveraineté numérique est devenue le pivot des stratégies industrielles européennes. Face à l'hégémonie des fournisseurs d'infrastructures informatiques extra-européens (Cloud Service Providers américains et chinois), les organisations s'inquiètent de l'extragouvernance de lois comme le Cloud Act américain, susceptible d'autoriser la saisie de données sensibles stockées sur des serveurs distants. En réponse, plusieurs initiatives communautaires tentent de promouvoir des solutions d'hébergement dites de « confiance », garantissant l'immunité juridique et la maîtrise technologique. Néanmoins, le retard pris en matière d'infrastructures matérielles (data centers, semi-conducteurs) rend la dépendance difficile à résorber à court terme. Pour les entreprises, le choix oscille constamment entre l'ergonomie inégalée des solutions dominantes et l'exigence éthique et sécuritaire du stockage souverain.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°10 : Que garantissent idéalement les initiatives de cloud souverain évoquées ?</div>",
    "options": [
      "L'accès libre et non restreint à tous les brevet industriels américains",
      "Le remboursement automatique des factures informatiques des PME",
      "L'immunité contre les lois d'injonction extraterritoriales et le contrôle des infrastructures",
      "La baisse de moitié de la consommation électrique mondiale des serveurs"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Nearshoring et la Réorganisation des Chaînes de Valeur</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et sanitaires ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°11 : Quelle mutation caractérise les nouvelles stratégies d'approvisionnement ?</div>",
    "options": [
      "Le retour à une économie agricole fermée sans échanges internationaux",
      "L'abandon complet du transport maritime au profit de l'aviation",
      "La substitution du critère du coût le plus bas par celui de la résilience globale",
      "La suppression de l'ensemble des droits de douane industriels"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Nearshoring et la Réorganisation des Chaînes de Valeur</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et sanitaires ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°12 : Que désigne précisément le terme « friendshoring » ?</div>",
    "options": [
      "La relocalisation prioritaire dans des pays partenaires stratégiques et politiques",
      "Le recrutement exclusif de salariés recommandés par les employés actuels",
      "L'obligation de sous-traiter la production à des associations à but non lucratif",
      "La baisse des prix de vente pour les clients fidèles d'une marque"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Nearshoring et la Réorganisation des Chaînes de Valeur</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et sanitaires ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°13 : Quels obstacles freinent la relocalisation rapide de la production ?</div>",
    "options": [
      "L'absence de machines automatisées dans les usines européennes",
      "L'opposition massive des consommateurs aux produits fabriqués localement",
      "L'ampleur des investissements requis et le déficit local de compétences spécialisées",
      "La surabondance de matières premières qui déprécie les produits finis"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Nearshoring et la Réorganisation des Chaînes de Valeur</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et sanitaires ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°14 : Quelle vulnérabilité du modèle historique a été révélée par les crises récentes ?</div>",
    "options": [
      "Le refus des pays émergents de fabriquer des biens de grande consommation",
      "La fragilité de l'organisation en flux tendus dépendante de hubs éloignés",
      "La baisse continue des tarifs de transport maritime transocéanique",
      "L'excès de stocks accumulés dans les entrepôts de proximité"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Le Nearshoring et la Réorganisation des Chaînes de Valeur</strong><br>Pendant trois décennies, la recherche de coûts de main-d'œuvre optimisés a dicté la fragmentation géographique des processus de production. Les récentes secousses géopolitiques et sanitaires ont toutefois mis à nu la fragilité de cette organisation en flux tendus dépendante de hubs éloignés. Face aux ruptures d'approvisionnement critiques, les stratégies de gestion des risques évoluent vers le « nearshoring » — la relocalisation à proximité des marchés de consommation — et le « friendshoring » — le ciblage de pays alliés politiquement. Ce mouvement reflète la substitution du critère unique du coût le plus bas par celui de la résilience globale de la chaîne de valeur. Cependant, la mise en œuvre heurte deux réalités : le coût d'investissement requis pour rebâtir un tissu industriel local et la raréfaction des compétences techniques disponibles.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°15 : Quelle conclusion l'auteur tire-t-il sur la mondialisation actuelle ?</div>",
    "options": [
      "Elle s'accélère sans aucune prise en compte des risques géopolitiques",
      "Elle est définitivement morte et remplacée par le troc local",
      "Elle évolue vers une réorganisation axée sur la sécurité plutôt qu'un simple repli autarcique",
      "Elle impose la fermeture de toutes les filiales industrielles situées à l'étranger"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Crise de Légitimité de la Gestion des Hauts Potentiels</strong><br>Les dispositifs d'identification des « hauts potentiels » en entreprise traversent une crise de légitimité. Conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres expriment un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses DRH reconfigurent leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante la recherche du charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°16 : Quelle transformation des attentes des cadres est soulignée par le texte ?</div>",
    "options": [
      "Le souhait d'effectuer leur travail exclusivement de manière bénévole",
      "Le refus de sacrifier leur équilibre personnel au profit d'une carrière rigide",
      "L'exigence d'une mobilité internationale tous les six mois",
      "La demande d'un retour aux parcours professionnels à ancienneté obligatoire"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Crise de Légitimité de la Gestion des Hauts Potentiels</strong><br>Les dispositifs d'identification des « hauts potentiels » en entreprise traversent une crise de légitimité. Conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres expriment un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses DRH reconfigurent leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante la recherche du charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°17 : Comment évoluent les critères d'évaluation des talents au sein des DRH ?</div>",
    "options": [
      "L'expertise terrain et la résilience l'emportent sur le charisme d'appareil statutaire",
      "Les compétences relationnelles sont totalement exclues des évaluations",
      "La sélection repose désormais uniquement sur la moyenne obtenue au baccalauréat",
      "La priorité absolue est accordée à la maîtrise des langages informatiques anciens"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Crise de Légitimité de la Gestion des Hauts Potentiels</strong><br>Les dispositifs d'identification des « hauts potentiels » en entreprise traversent une crise de légitimité. Conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres expriment un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses DRH reconfigurent leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante la recherche du charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°18 : Quel reproche est adressé aux systèmes traditionnels de hauts potentiels ?</div>",
    "options": [
      "L'obligation d'embaucher uniquement des diplômés de l'enseignement public",
      "Leur refus d'accorder des congés payés aux cadres dirigeants",
      "Leur opacité organisationnelle et la rigidité de leurs parcours accélérés",
      "Leur coût financier nul qui dévalorise le travail des consultants"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Crise de Légitimité de la Gestion des Hauts Potentiels</strong><br>Les dispositifs d'identification des « hauts potentiels » en entreprise traversent une crise de légitimité. Conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres expriment un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses DRH reconfigurent leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante la recherche du charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°19 : Quel risque représente le maintien de statuts étanches et opaques ?</div>",
    "options": [
      "Générer de vives frustrations chez les collaborateurs non sélectionnés",
      "Entraîner la faillite automatique des filiales internationales",
      "Empêcher la signature des contrats commerciaux avec les clients",
      "Provoquer une baisse immédiate du cours de bourse de l'entreprise"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Crise de Légitimité de la Gestion des Hauts Potentiels</strong><br>Les dispositifs d'identification des « hauts potentiels » en entreprise traversent une crise de légitimité. Conçus comme des pépinières destinées à alimenter l'état-major corporate via des parcours accélérés et une mobilité intense, ces programmes se heurtent à la mutation des aspirations individuelles. Les cadres expriment un refus croissant du sacrifice de leur équilibre personnel au profit d'un plan de carrière rigide. Par ailleurs, la crise de représentativité du management intermédiaire et l'exigence de transparence remettent en cause l'opacité des critères de sélection. De nombreuses DRH reconfigurent leurs outils : la valorisation de l'expertise terrain et de la résilience émotionnelle supplante la recherche du charisme d'appareil. L'enjeu est désormais d'offrir une flexibilité d'apprentissage sans enfermer les collaborateurs dans des étiquettes statutaires génératrices de frustrations.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°20 : Quel titre résume l'essentiel du propos de l'auteur ?</div>",
    "options": [
      "La hausse ininterrompue des heures de travail chez les jeunes diplômés",
      "Gestion des talents : vers la rénovation des critères et la fin de l'opacité",
      "Pourquoi les entreprises doivent supprimer l'ensemble de leurs managers",
      "L'efficacité inégalée des promotions à l'ancienneté dans le secteur privé"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition ne réside plus dans le coût des capteurs ou des turbines, mais dans le développement industriel de solutions de flexibilité : batteries stationnaires, pompage-turbinage et hydrogène décarboné. La neutralité carbone exige une mutation systémique de toute l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°21 : Quel est le problème fondamental posé par le solaire et l'éolien ?</div>",
    "options": [
      "L'interdiction de raccorder ces installations aux lignes à haute tension",
      "Leur coût de fabrication qui reste supérieur à celui des centrales thermiques au charbon",
      "L'impossibilité de mesurer précisément la quantité d'électricité produite",
      "Leur nature intermittente qui s'oppose à la régulation centralisée des réseaux historiques"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition ne réside plus dans le coût des capteurs ou des turbines, mais dans le développement industriel de solutions de flexibilité : batteries stationnaires, pompage-turbinage et hydrogène décarboné. La neutralité carbone exige une mutation systémique de toute l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°22 : Où se situe le goulot d'étranglement majeur de la transition écologique ?</div>",
    "options": [
      "Dans le refus des consommateurs d'utiliser de l'électricité d'origine renouvelable",
      "Dans l'absence de politiques publiques de soutien à la décarbonation dans le monde",
      "Dans le développement industriel des capacités de stockage et de flexibilité du réseau",
      "Dans la hausse du prix de l'acier nécessaire à la construction des éoliennes"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition ne réside plus dans le coût des capteurs ou des turbines, mais dans le développement industriel de solutions de flexibilité : batteries stationnaires, pompage-turbinage et hydrogène décarboné. La neutralité carbone exige une mutation systémique de toute l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°23 : Quelle conséquence paradoxale découle des pics de production renouvelable ?</div>",
    "options": [
      "La baisse brutale de la consommation électrique des ménages",
      "La destruction physique systématique des transformateurs électriques",
      "L'augmentation immédiate des émissions de gaz à effet de serre",
      "L'apparition de prix négatifs sur les marchés de gros de l'électricité"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition ne réside plus dans le coût des capteurs ou des turbines, mais dans le développement industriel de solutions de flexibilité : batteries stationnaires, pompage-turbinage et hydrogène décarboné. La neutralité carbone exige une mutation systémique de toute l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°24 : Quelles technologies sont citées pour résoudre le défi de l'intermittence ?</div>",
    "options": [
      "Le remplacement des lignes électriques par des conduites d'essence",
      "L'arrêt complet de la production hydraulique pendant les périodes ensoleillées",
      "Les batteries stationnaires, le pompage-turbinage et l'hydrogène décarboné",
      "Le renforcement exclusif des centrales thermiques au fioul lourd"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>La Transition Énergétique et le Défi du Stockage</strong><br>Le déploiement massif des énergies renouvelables — principalement éoliennes et photovoltaïques — constitue la pierre angulaire des stratégies de décarbonation. Toutefois, la variabilité naturelle de ces sources soulève un problème d'intermittence que les réseaux électriques traditionnels, conçus pour une production pilotable et centralisée, peinent à réguler. Sans capacités d'accumulation à grande échelle, les périodes de faible production menacent la sécurité de l'approvisionnement, tandis que les pics d'injection risquent d'entraîner des prix négatifs sur les marchés de gros. Le véritable goulot d'étranglement de la transition ne réside plus dans le coût des capteurs ou des turbines, mais dans le développement industriel de solutions de flexibilité : batteries stationnaires, pompage-turbinage et hydrogène décarboné. La neutralité carbone exige une mutation systémique de toute l'architecture électrique.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°25 : Quelle conclusion s'impose selon l'auteur pour atteindre la neutralité carbone ?</div>",
    "options": [
      "La gratuité universelle de l'énergie pour l'ensemble de la population",
      "La réduction de 90% de la consommation d'électricité des industries",
      "Une mutation systémique globale de l'architecture et du stockage électrique",
      "L'abandon immédiat des énergies renouvelables au profit du charbon"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 6 : Intelligence Artificielle et Productivité au Travail</strong><br>L'intégration des modèles de langage dans les processus tertiaires redéfinit la productivité administrative. Si les gains d'efficacité sont indéniables pour la rédaction et l'analyse de données, des biais algorithmiques et des risques de confidentialité persistent. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°26 : Quel est le thème principal abordé dans l'analyse de 'Intelligence Artificielle et Productivité au Travail' ?</div>",
    "options": [
      "La suppression des taxes commerciales",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La fermeture immédiate des frontières",
      "L'impact stratégique et les arbitrages économiques liés à intelligence artificielle et productivité au travail"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 6 : Intelligence Artificielle et Productivité au Travail</strong><br>L'intégration des modèles de langage dans les processus tertiaires redéfinit la productivité administrative. Si les gains d'efficacité sont indéniables pour la rédaction et l'analyse de données, des biais algorithmiques et des risques de confidentialité persistent. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°27 : Quelle opportunité majeure est associée à intelligence artificielle et productivité au travail ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "La fin de la concurrence internationale",
      "L'absence totale de besoins en investissements",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 6 : Intelligence Artificielle et Productivité au Travail</strong><br>L'intégration des modèles de langage dans les processus tertiaires redéfinit la productivité administrative. Si les gains d'efficacité sont indéniables pour la rédaction et l'analyse de données, des biais algorithmiques et des risques de confidentialité persistent. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°28 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "L'interdiction par l'Union européenne de toute innovation",
      "Le manque total d'intérêt des acteurs économiques",
      "La baisse brutale du nombre d'habitants en Europe",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 6 : Intelligence Artificielle et Productivité au Travail</strong><br>L'intégration des modèles de langage dans les processus tertiaires redéfinit la productivité administrative. Si les gains d'efficacité sont indéniables pour la rédaction et l'analyse de données, des biais algorithmiques et des risques de confidentialité persistent. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°29 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 6 : Intelligence Artificielle et Productivité au Travail</strong><br>L'intégration des modèles de langage dans les processus tertiaires redéfinit la productivité administrative. Si les gains d'efficacité sont indéniables pour la rédaction et l'analyse de données, des biais algorithmiques et des risques de confidentialité persistent. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°30 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Les consommateurs refusent catégoriquement ces innovations",
      "La gestion de intelligence artificielle et productivité au travail requiert une approche équilibrée et adaptée aux nouveaux enjeux"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 7 : Économie Circulaire et Recyclage des Métaux Critiques</strong><br>La transition écologique intensifie la demande en métaux rares (lithium, cobalt, nickel). L'économie circulaire et le recyclage industriel deviennent des piliers stratégiques pour réduire la dépendance envers les pays extracteurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°31 : Quel est le thème principal abordé dans l'analyse de 'Économie Circulaire et Recyclage des Métaux Critiques' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à économie circulaire et recyclage des métaux critiques",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La fermeture immédiate des frontières",
      "La suppression des taxes commerciales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 7 : Économie Circulaire et Recyclage des Métaux Critiques</strong><br>La transition écologique intensifie la demande en métaux rares (lithium, cobalt, nickel). L'économie circulaire et le recyclage industriel deviennent des piliers stratégiques pour réduire la dépendance envers les pays extracteurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°32 : Quelle opportunité majeure est associée à économie circulaire et recyclage des métaux critiques ?</div>",
    "options": [
      "La fin de la concurrence internationale",
      "L'absence totale de besoins en investissements",
      "La gratuité universelle de l'ensemble des services",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 7 : Économie Circulaire et Recyclage des Métaux Critiques</strong><br>La transition écologique intensifie la demande en métaux rares (lithium, cobalt, nickel). L'économie circulaire et le recyclage industriel deviennent des piliers stratégiques pour réduire la dépendance envers les pays extracteurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°33 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "Le manque total d'intérêt des acteurs économiques",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "L'interdiction par l'Union européenne de toute innovation",
      "La baisse brutale du nombre d'habitants en Europe"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 7 : Économie Circulaire et Recyclage des Métaux Critiques</strong><br>La transition écologique intensifie la demande en métaux rares (lithium, cobalt, nickel). L'économie circulaire et le recyclage industriel deviennent des piliers stratégiques pour réduire la dépendance envers les pays extracteurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°34 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En ignorant les risques pour privilégier le profit immédiat",
      "En interdisant l'usage des nouvelles technologies",
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En déléguant l'intégralité des décisions à des algorithmes"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 7 : Économie Circulaire et Recyclage des Métaux Critiques</strong><br>La transition écologique intensifie la demande en métaux rares (lithium, cobalt, nickel). L'économie circulaire et le recyclage industriel deviennent des piliers stratégiques pour réduire la dépendance envers les pays extracteurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°35 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "La gestion de économie circulaire et recyclage des métaux critiques requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Les consommateurs refusent catégoriquement ces innovations"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 8 : Financement des Startups et Évolution du Venture Capital</strong><br>Après une décennie de taux zéro et d'évaluations record, le capital-risque exige désormais une rentabilité rapide et des modèles économiques éprouvés plutôt qu'une simple croissance du nombre d'utilisateurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°36 : Quel est le thème principal abordé dans l'analyse de 'Financement des Startups et Évolution du Venture Capital' ?</div>",
    "options": [
      "La fermeture immédiate des frontières",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "L'impact stratégique et les arbitrages économiques liés à financement des startups et évolution du venture capital",
      "La suppression des taxes commerciales"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 8 : Financement des Startups et Évolution du Venture Capital</strong><br>Après une décennie de taux zéro et d'évaluations record, le capital-risque exige désormais une rentabilité rapide et des modèles économiques éprouvés plutôt qu'une simple croissance du nombre d'utilisateurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°37 : Quelle opportunité majeure est associée à financement des startups et évolution du venture capital ?</div>",
    "options": [
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La fin de la concurrence internationale",
      "L'absence totale de besoins en investissements",
      "La gratuité universelle de l'ensemble des services"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 8 : Financement des Startups et Évolution du Venture Capital</strong><br>Après une décennie de taux zéro et d'évaluations record, le capital-risque exige désormais une rentabilité rapide et des modèles économiques éprouvés plutôt qu'une simple croissance du nombre d'utilisateurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°38 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "La baisse brutale du nombre d'habitants en Europe",
      "Le manque total d'intérêt des acteurs économiques",
      "L'interdiction par l'Union européenne de toute innovation"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 8 : Financement des Startups et Évolution du Venture Capital</strong><br>Après une décennie de taux zéro et d'évaluations record, le capital-risque exige désormais une rentabilité rapide et des modèles économiques éprouvés plutôt qu'une simple croissance du nombre d'utilisateurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°39 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En interdisant l'usage des nouvelles technologies",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En conciliant efficacité économique, responsabilité et vision de long terme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 8 : Financement des Startups et Évolution du Venture Capital</strong><br>Après une décennie de taux zéro et d'évaluations record, le capital-risque exige désormais une rentabilité rapide et des modèles économiques éprouvés plutôt qu'une simple croissance du nombre d'utilisateurs. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°40 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "La gestion de financement des startups et évolution du venture capital requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Les consommateurs refusent catégoriquement ces innovations"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 9 : Régulation des Plateformes et DSA Européen</strong><br>Le Digital Services Act impose aux très grandes plateformes une transparence accrue sur leurs algorithmes de recommandation et une modération stricte des contenus illicites sous peine de sanctions financières majeures. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°41 : Quel est le thème principal abordé dans l'analyse de 'Régulation des Plateformes et DSA Européen' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à régulation des plateformes et dsa européen",
      "La suppression des taxes commerciales",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La fermeture immédiate des frontières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 9 : Régulation des Plateformes et DSA Européen</strong><br>Le Digital Services Act impose aux très grandes plateformes une transparence accrue sur leurs algorithmes de recommandation et une modération stricte des contenus illicites sous peine de sanctions financières majeures. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°42 : Quelle opportunité majeure est associée à régulation des plateformes et dsa européen ?</div>",
    "options": [
      "La fin de la concurrence internationale",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La gratuité universelle de l'ensemble des services",
      "L'absence totale de besoins en investissements"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 9 : Régulation des Plateformes et DSA Européen</strong><br>Le Digital Services Act impose aux très grandes plateformes une transparence accrue sur leurs algorithmes de recommandation et une modération stricte des contenus illicites sous peine de sanctions financières majeures. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°43 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "La baisse brutale du nombre d'habitants en Europe",
      "L'interdiction par l'Union européenne de toute innovation",
      "Le manque total d'intérêt des acteurs économiques",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 9 : Régulation des Plateformes et DSA Européen</strong><br>Le Digital Services Act impose aux très grandes plateformes une transparence accrue sur leurs algorithmes de recommandation et une modération stricte des contenus illicites sous peine de sanctions financières majeures. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°44 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies",
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En ignorant les risques pour privilégier le profit immédiat"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 9 : Régulation des Plateformes et DSA Européen</strong><br>Le Digital Services Act impose aux très grandes plateformes une transparence accrue sur leurs algorithmes de recommandation et une modération stricte des contenus illicites sous peine de sanctions financières majeures. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°45 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "La gestion de régulation des plateformes et dsa européen requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Les consommateurs refusent catégoriquement ces innovations",
      "Seules les entreprises d'État peuvent réussir dans ce secteur"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 10 : Monnaies Numériques de Banque Centrale (MNBC)</strong><br>Face au déclin de l'argent physique et à la montée des crypto-actifs, les banques centrales développent l'Euro numérique afin de préserver la souveraineté monétaire et l'efficacité des paiements transfrontaliers. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°46 : Quel est le thème principal abordé dans l'analyse de 'Monnaies Numériques de Banque Centrale (MNBC)' ?</div>",
    "options": [
      "La suppression des taxes commerciales",
      "La fermeture immédiate des frontières",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "L'impact stratégique et les arbitrages économiques liés à monnaies numériques de banque centrale (mnbc)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 10 : Monnaies Numériques de Banque Centrale (MNBC)</strong><br>Face au déclin de l'argent physique et à la montée des crypto-actifs, les banques centrales développent l'Euro numérique afin de préserver la souveraineté monétaire et l'efficacité des paiements transfrontaliers. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°47 : Quelle opportunité majeure est associée à monnaies numériques de banque centrale (mnbc) ?</div>",
    "options": [
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La fin de la concurrence internationale",
      "L'absence totale de besoins en investissements",
      "La gratuité universelle de l'ensemble des services"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 10 : Monnaies Numériques de Banque Centrale (MNBC)</strong><br>Face au déclin de l'argent physique et à la montée des crypto-actifs, les banques centrales développent l'Euro numérique afin de préserver la souveraineté monétaire et l'efficacité des paiements transfrontaliers. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°48 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "Le manque total d'intérêt des acteurs économiques",
      "L'interdiction par l'Union européenne de toute innovation",
      "La baisse brutale du nombre d'habitants en Europe",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 10 : Monnaies Numériques de Banque Centrale (MNBC)</strong><br>Face au déclin de l'argent physique et à la montée des crypto-actifs, les banques centrales développent l'Euro numérique afin de préserver la souveraineté monétaire et l'efficacité des paiements transfrontaliers. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°49 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies",
      "En ignorant les risques pour privilégier le profit immédiat"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 10 : Monnaies Numériques de Banque Centrale (MNBC)</strong><br>Face au déclin de l'argent physique et à la montée des crypto-actifs, les banques centrales développent l'Euro numérique afin de préserver la souveraineté monétaire et l'efficacité des paiements transfrontaliers. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°50 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Les consommateurs refusent catégoriquement ces innovations",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "La gestion de monnaies numériques de banque centrale (mnbc) requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Seules les entreprises d'État peuvent réussir dans ce secteur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 11 : Marketing d'Influence et Transparence Commerciale</strong><br>La professionnalisation du marketing d'influence s'accompagne d'un cadre législatif renforcé visant à punir les pratiques commerciales trompeuses et à protéger les consommateurs vulnérables sur les réseaux sociaux. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°51 : Quel est le thème principal abordé dans l'analyse de 'Marketing d'Influence et Transparence Commerciale' ?</div>",
    "options": [
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La fermeture immédiate des frontières",
      "L'impact stratégique et les arbitrages économiques liés à marketing d'influence et transparence commerciale",
      "La suppression des taxes commerciales"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 11 : Marketing d'Influence et Transparence Commerciale</strong><br>La professionnalisation du marketing d'influence s'accompagne d'un cadre législatif renforcé visant à punir les pratiques commerciales trompeuses et à protéger les consommateurs vulnérables sur les réseaux sociaux. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°52 : Quelle opportunité majeure est associée à marketing d'influence et transparence commerciale ?</div>",
    "options": [
      "La fin de la concurrence internationale",
      "La gratuité universelle de l'ensemble des services",
      "L'absence totale de besoins en investissements",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 11 : Marketing d'Influence et Transparence Commerciale</strong><br>La professionnalisation du marketing d'influence s'accompagne d'un cadre législatif renforcé visant à punir les pratiques commerciales trompeuses et à protéger les consommateurs vulnérables sur les réseaux sociaux. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°53 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "Le manque total d'intérêt des acteurs économiques",
      "La baisse brutale du nombre d'habitants en Europe",
      "L'interdiction par l'Union européenne de toute innovation",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 11 : Marketing d'Influence et Transparence Commerciale</strong><br>La professionnalisation du marketing d'influence s'accompagne d'un cadre législatif renforcé visant à punir les pratiques commerciales trompeuses et à protéger les consommateurs vulnérables sur les réseaux sociaux. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°54 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En interdisant l'usage des nouvelles technologies"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 11 : Marketing d'Influence et Transparence Commerciale</strong><br>La professionnalisation du marketing d'influence s'accompagne d'un cadre législatif renforcé visant à punir les pratiques commerciales trompeuses et à protéger les consommateurs vulnérables sur les réseaux sociaux. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°55 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Les consommateurs refusent catégoriquement ces innovations",
      "La gestion de marketing d'influence et transparence commerciale requiert une approche équilibrée et adaptée aux nouveaux enjeux"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 12 : Télé-médecine et Réorganisation des Soins</strong><br>La téléconsultation offre une réponse concrète au problème des déserts médicaux, mais pose la question du maintien du lien humain et de la qualité du diagnostic pour les pathologies complexes. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°56 : Quel est le thème principal abordé dans l'analyse de 'Télé-médecine et Réorganisation des Soins' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à télé-médecine et réorganisation des soins",
      "La suppression des taxes commerciales",
      "La fermeture immédiate des frontières",
      "Le retour aux méthodes industrielles du XIXe siècle"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 12 : Télé-médecine et Réorganisation des Soins</strong><br>La téléconsultation offre une réponse concrète au problème des déserts médicaux, mais pose la question du maintien du lien humain et de la qualité du diagnostic pour les pathologies complexes. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°57 : Quelle opportunité majeure est associée à télé-médecine et réorganisation des soins ?</div>",
    "options": [
      "L'absence totale de besoins en investissements",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La fin de la concurrence internationale",
      "La gratuité universelle de l'ensemble des services"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 12 : Télé-médecine et Réorganisation des Soins</strong><br>La téléconsultation offre une réponse concrète au problème des déserts médicaux, mais pose la question du maintien du lien humain et de la qualité du diagnostic pour les pathologies complexes. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°58 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "Le manque total d'intérêt des acteurs économiques",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "La baisse brutale du nombre d'habitants en Europe",
      "L'interdiction par l'Union européenne de toute innovation"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 12 : Télé-médecine et Réorganisation des Soins</strong><br>La téléconsultation offre une réponse concrète au problème des déserts médicaux, mais pose la question du maintien du lien humain et de la qualité du diagnostic pour les pathologies complexes. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°59 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En ignorant les risques pour privilégier le profit immédiat",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies",
      "En conciliant efficacité économique, responsabilité et vision de long terme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 12 : Télé-médecine et Réorganisation des Soins</strong><br>La téléconsultation offre une réponse concrète au problème des déserts médicaux, mais pose la question du maintien du lien humain et de la qualité du diagnostic pour les pathologies complexes. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°60 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "La gestion de télé-médecine et réorganisation des soins requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Les consommateurs refusent catégoriquement ces innovations",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 13 : Luxe Européen et Marchés Émergents</strong><br>Le secteur du luxe repose sur l'exportation d'un savoir-faire traditionnel vers des clientèles asiatiques et américaines. La volatilité de la demande chinoise contraint les maisons de haute couture à diversifier leurs cibles. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°61 : Quel est le thème principal abordé dans l'analyse de 'Luxe Européen et Marchés Émergents' ?</div>",
    "options": [
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La suppression des taxes commerciales",
      "La fermeture immédiate des frontières",
      "L'impact stratégique et les arbitrages économiques liés à luxe européen et marchés émergents"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 13 : Luxe Européen et Marchés Émergents</strong><br>Le secteur du luxe repose sur l'exportation d'un savoir-faire traditionnel vers des clientèles asiatiques et américaines. La volatilité de la demande chinoise contraint les maisons de haute couture à diversifier leurs cibles. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°62 : Quelle opportunité majeure est associée à luxe européen et marchés émergents ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "L'absence totale de besoins en investissements",
      "La fin de la concurrence internationale"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 13 : Luxe Européen et Marchés Émergents</strong><br>Le secteur du luxe repose sur l'exportation d'un savoir-faire traditionnel vers des clientèles asiatiques et américaines. La volatilité de la demande chinoise contraint les maisons de haute couture à diversifier leurs cibles. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°63 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "La baisse brutale du nombre d'habitants en Europe",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "L'interdiction par l'Union européenne de toute innovation",
      "Le manque total d'intérêt des acteurs économiques"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 13 : Luxe Européen et Marchés Émergents</strong><br>Le secteur du luxe repose sur l'exportation d'un savoir-faire traditionnel vers des clientèles asiatiques et américaines. La volatilité de la demande chinoise contraint les maisons de haute couture à diversifier leurs cibles. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°64 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En interdisant l'usage des nouvelles technologies",
      "En conciliant efficacité économique, responsabilité et vision de long terme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 13 : Luxe Européen et Marchés Émergents</strong><br>Le secteur du luxe repose sur l'exportation d'un savoir-faire traditionnel vers des clientèles asiatiques et américaines. La volatilité de la demande chinoise contraint les maisons de haute couture à diversifier leurs cibles. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°65 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "La gestion de luxe européen et marchés émergents requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Les consommateurs refusent catégoriquement ces innovations",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 14 : Souveraineté Alimentaire et Réforme de la PAC</strong><br>La Politique Agricole Commune doit concilier des exigences environnementales de réduction des pesticides avec l'impératif de maintenir des rendements suffisants pour garantir la souveraineté alimentaire européenne. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°66 : Quel est le thème principal abordé dans l'analyse de 'Souveraineté Alimentaire et Réforme de la PAC' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à souveraineté alimentaire et réforme de la pac",
      "La fermeture immédiate des frontières",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La suppression des taxes commerciales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 14 : Souveraineté Alimentaire et Réforme de la PAC</strong><br>La Politique Agricole Commune doit concilier des exigences environnementales de réduction des pesticides avec l'impératif de maintenir des rendements suffisants pour garantir la souveraineté alimentaire européenne. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°67 : Quelle opportunité majeure est associée à souveraineté alimentaire et réforme de la pac ?</div>",
    "options": [
      "La fin de la concurrence internationale",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "L'absence totale de besoins en investissements",
      "La gratuité universelle de l'ensemble des services"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 14 : Souveraineté Alimentaire et Réforme de la PAC</strong><br>La Politique Agricole Commune doit concilier des exigences environnementales de réduction des pesticides avec l'impératif de maintenir des rendements suffisants pour garantir la souveraineté alimentaire européenne. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°68 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "La baisse brutale du nombre d'habitants en Europe",
      "L'interdiction par l'Union européenne de toute innovation",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "Le manque total d'intérêt des acteurs économiques"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 14 : Souveraineté Alimentaire et Réforme de la PAC</strong><br>La Politique Agricole Commune doit concilier des exigences environnementales de réduction des pesticides avec l'impératif de maintenir des rendements suffisants pour garantir la souveraineté alimentaire européenne. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°69 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En ignorant les risques pour privilégier le profit immédiat",
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En interdisant l'usage des nouvelles technologies",
      "En déléguant l'intégralité des décisions à des algorithmes"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 14 : Souveraineté Alimentaire et Réforme de la PAC</strong><br>La Politique Agricole Commune doit concilier des exigences environnementales de réduction des pesticides avec l'impératif de maintenir des rendements suffisants pour garantir la souveraineté alimentaire européenne. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°70 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Les consommateurs refusent catégoriquement ces innovations",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "La gestion de souveraineté alimentaire et réforme de la pac requiert une approche équilibrée et adaptée aux nouveaux enjeux"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 15 : Travail Hybride et Cohésion d'Équipe</strong><br>Le modèle hybride alternant présentiel et distanciel exige de nouvelles pratiques managériales pour éviter le sentiment d'isolement des salariés et préserver la culture d'entreprise. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°71 : Quel est le thème principal abordé dans l'analyse de 'Travail Hybride et Cohésion d'Équipe' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à travail hybride et cohésion d'équipe",
      "La fermeture immédiate des frontières",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La suppression des taxes commerciales"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 15 : Travail Hybride et Cohésion d'Équipe</strong><br>Le modèle hybride alternant présentiel et distanciel exige de nouvelles pratiques managériales pour éviter le sentiment d'isolement des salariés et préserver la culture d'entreprise. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°72 : Quelle opportunité majeure est associée à travail hybride et cohésion d'équipe ?</div>",
    "options": [
      "L'absence totale de besoins en investissements",
      "La fin de la concurrence internationale",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La gratuité universelle de l'ensemble des services"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 15 : Travail Hybride et Cohésion d'Équipe</strong><br>Le modèle hybride alternant présentiel et distanciel exige de nouvelles pratiques managériales pour éviter le sentiment d'isolement des salariés et préserver la culture d'entreprise. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°73 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "Le manque total d'intérêt des acteurs économiques",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "La baisse brutale du nombre d'habitants en Europe",
      "L'interdiction par l'Union européenne de toute innovation"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 15 : Travail Hybride et Cohésion d'Équipe</strong><br>Le modèle hybride alternant présentiel et distanciel exige de nouvelles pratiques managériales pour éviter le sentiment d'isolement des salariés et préserver la culture d'entreprise. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°74 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En interdisant l'usage des nouvelles technologies",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En déléguant l'intégralité des décisions à des algorithmes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 15 : Travail Hybride et Cohésion d'Équipe</strong><br>Le modèle hybride alternant présentiel et distanciel exige de nouvelles pratiques managériales pour éviter le sentiment d'isolement des salariés et préserver la culture d'entreprise. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°75 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "La gestion de travail hybride et cohésion d'équipe requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Les consommateurs refusent catégoriquement ces innovations"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 16 : Biotechnologies et Médecine Personnalisée</strong><br>Les avancées du séquençage génétique permettent de concevoir des traitements sur mesure contre le cancer. Cependant, le coût exorbitant de ces thérapies soulève d'importants dilemmes de financement public. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°76 : Quel est le thème principal abordé dans l'analyse de 'Biotechnologies et Médecine Personnalisée' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à biotechnologies et médecine personnalisée",
      "La fermeture immédiate des frontières",
      "La suppression des taxes commerciales",
      "Le retour aux méthodes industrielles du XIXe siècle"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 16 : Biotechnologies et Médecine Personnalisée</strong><br>Les avancées du séquençage génétique permettent de concevoir des traitements sur mesure contre le cancer. Cependant, le coût exorbitant de ces thérapies soulève d'importants dilemmes de financement public. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°77 : Quelle opportunité majeure est associée à biotechnologies et médecine personnalisée ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La fin de la concurrence internationale",
      "L'absence totale de besoins en investissements"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 16 : Biotechnologies et Médecine Personnalisée</strong><br>Les avancées du séquençage génétique permettent de concevoir des traitements sur mesure contre le cancer. Cependant, le coût exorbitant de ces thérapies soulève d'importants dilemmes de financement public. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°78 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "L'interdiction par l'Union européenne de toute innovation",
      "La baisse brutale du nombre d'habitants en Europe",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "Le manque total d'intérêt des acteurs économiques"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 16 : Biotechnologies et Médecine Personnalisée</strong><br>Les avancées du séquençage génétique permettent de concevoir des traitements sur mesure contre le cancer. Cependant, le coût exorbitant de ces thérapies soulève d'importants dilemmes de financement public. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°79 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En conciliant efficacité économique, responsabilité et vision de long terme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 16 : Biotechnologies et Médecine Personnalisée</strong><br>Les avancées du séquençage génétique permettent de concevoir des traitements sur mesure contre le cancer. Cependant, le coût exorbitant de ces thérapies soulève d'importants dilemmes de financement public. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°80 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Les consommateurs refusent catégoriquement ces innovations",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "La gestion de biotechnologies et médecine personnalisée requiert une approche équilibrée et adaptée aux nouveaux enjeux"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 17 : Transports Urbains et Mobilité Douce</strong><br>La réduction de la place de l'automobile en centre-ville favorise le vélo et les transports collectifs, mais nécessite des aménagements d'infrastructures coûteux et suscite des tensions avec les résidents périurbains. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°81 : Quel est le thème principal abordé dans l'analyse de 'Transports Urbains et Mobilité Douce' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à transports urbains et mobilité douce",
      "La suppression des taxes commerciales",
      "La fermeture immédiate des frontières",
      "Le retour aux méthodes industrielles du XIXe siècle"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 17 : Transports Urbains et Mobilité Douce</strong><br>La réduction de la place de l'automobile en centre-ville favorise le vélo et les transports collectifs, mais nécessite des aménagements d'infrastructures coûteux et suscite des tensions avec les résidents périurbains. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°82 : Quelle opportunité majeure est associée à transports urbains et mobilité douce ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "L'absence totale de besoins en investissements",
      "La fin de la concurrence internationale"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 17 : Transports Urbains et Mobilité Douce</strong><br>La réduction de la place de l'automobile en centre-ville favorise le vélo et les transports collectifs, mais nécessite des aménagements d'infrastructures coûteux et suscite des tensions avec les résidents périurbains. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°83 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "Le manque total d'intérêt des acteurs économiques",
      "La baisse brutale du nombre d'habitants en Europe",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "L'interdiction par l'Union européenne de toute innovation"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 17 : Transports Urbains et Mobilité Douce</strong><br>La réduction de la place de l'automobile en centre-ville favorise le vélo et les transports collectifs, mais nécessite des aménagements d'infrastructures coûteux et suscite des tensions avec les résidents périurbains. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°84 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 17 : Transports Urbains et Mobilité Douce</strong><br>La réduction de la place de l'automobile en centre-ville favorise le vélo et les transports collectifs, mais nécessite des aménagements d'infrastructures coûteux et suscite des tensions avec les résidents périurbains. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°85 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Les consommateurs refusent catégoriquement ces innovations",
      "La gestion de transports urbains et mobilité douce requiert une approche équilibrée et adaptée aux nouveaux enjeux"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 18 : Industrie Spatiale et Économie du NewSpace</strong><br>L'arrivée d'acteurs privés dans le secteur spatial a réduit drastiquement le coût d'accès à l'orbite basse. Cette démocratisation entraîne toutefois la prolifération de débris spatiaux problématiques. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°86 : Quel est le thème principal abordé dans l'analyse de 'Industrie Spatiale et Économie du NewSpace' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à industrie spatiale et économie du newspace",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La suppression des taxes commerciales",
      "La fermeture immédiate des frontières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 18 : Industrie Spatiale et Économie du NewSpace</strong><br>L'arrivée d'acteurs privés dans le secteur spatial a réduit drastiquement le coût d'accès à l'orbite basse. Cette démocratisation entraîne toutefois la prolifération de débris spatiaux problématiques. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°87 : Quelle opportunité majeure est associée à industrie spatiale et économie du newspace ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "L'absence totale de besoins en investissements",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La fin de la concurrence internationale"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 18 : Industrie Spatiale et Économie du NewSpace</strong><br>L'arrivée d'acteurs privés dans le secteur spatial a réduit drastiquement le coût d'accès à l'orbite basse. Cette démocratisation entraîne toutefois la prolifération de débris spatiaux problématiques. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°88 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "L'interdiction par l'Union européenne de toute innovation",
      "La baisse brutale du nombre d'habitants en Europe",
      "Le manque total d'intérêt des acteurs économiques",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 18 : Industrie Spatiale et Économie du NewSpace</strong><br>L'arrivée d'acteurs privés dans le secteur spatial a réduit drastiquement le coût d'accès à l'orbite basse. Cette démocratisation entraîne toutefois la prolifération de débris spatiaux problématiques. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°89 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En ignorant les risques pour privilégier le profit immédiat",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En interdisant l'usage des nouvelles technologies",
      "En conciliant efficacité économique, responsabilité et vision de long terme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 18 : Industrie Spatiale et Économie du NewSpace</strong><br>L'arrivée d'acteurs privés dans le secteur spatial a réduit drastiquement le coût d'accès à l'orbite basse. Cette démocratisation entraîne toutefois la prolifération de débris spatiaux problématiques. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°90 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "Les consommateurs refusent catégoriquement ces innovations",
      "La gestion de industrie spatiale et économie du newspace requiert une approche équilibrée et adaptée aux nouveaux enjeux"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 19 : Propriété Intellectuelle et Brevets Médicamenteux</strong><br>Le débat sur la suspension temporaire des brevets lors des crises sanitaires oppose la nécessité d'un accès universel aux soins à l'impératif de rémunérer la recherche pharmaceutique. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°91 : Quel est le thème principal abordé dans l'analyse de 'Propriété Intellectuelle et Brevets Médicamenteux' ?</div>",
    "options": [
      "La suppression des taxes commerciales",
      "La fermeture immédiate des frontières",
      "L'impact stratégique et les arbitrages économiques liés à propriété intellectuelle et brevets médicamenteux",
      "Le retour aux méthodes industrielles du XIXe siècle"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 19 : Propriété Intellectuelle et Brevets Médicamenteux</strong><br>Le débat sur la suspension temporaire des brevets lors des crises sanitaires oppose la nécessité d'un accès universel aux soins à l'impératif de rémunérer la recherche pharmaceutique. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°92 : Quelle opportunité majeure est associée à propriété intellectuelle et brevets médicamenteux ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "L'absence totale de besoins en investissements",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "La fin de la concurrence internationale"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 19 : Propriété Intellectuelle et Brevets Médicamenteux</strong><br>Le débat sur la suspension temporaire des brevets lors des crises sanitaires oppose la nécessité d'un accès universel aux soins à l'impératif de rémunérer la recherche pharmaceutique. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°93 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "L'interdiction par l'Union européenne de toute innovation",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "La baisse brutale du nombre d'habitants en Europe",
      "Le manque total d'intérêt des acteurs économiques"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 19 : Propriété Intellectuelle et Brevets Médicamenteux</strong><br>Le débat sur la suspension temporaire des brevets lors des crises sanitaires oppose la nécessité d'un accès universel aux soins à l'impératif de rémunérer la recherche pharmaceutique. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°94 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En ignorant les risques pour privilégier le profit immédiat",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En interdisant l'usage des nouvelles technologies"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 19 : Propriété Intellectuelle et Brevets Médicamenteux</strong><br>Le débat sur la suspension temporaire des brevets lors des crises sanitaires oppose la nécessité d'un accès universel aux soins à l'impératif de rémunérer la recherche pharmaceutique. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°95 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "La gestion de propriété intellectuelle et brevets médicamenteux requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Les consommateurs refusent catégoriquement ces innovations"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 20 : Sobriété Numérique et Empreinte Carbone des Data Centers</strong><br>La consommation énergétique des centres de données augmente fortement avec le boom du stockage cloud et de l'IA. La sobriété numérique devient une composante incontournable de la RSE des entreprises. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°96 : Quel est le thème principal abordé dans l'analyse de 'Sobriété Numérique et Empreinte Carbone des Data Centers' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à sobriété numérique et empreinte carbone des data centers",
      "La suppression des taxes commerciales",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La fermeture immédiate des frontières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 20 : Sobriété Numérique et Empreinte Carbone des Data Centers</strong><br>La consommation énergétique des centres de données augmente fortement avec le boom du stockage cloud et de l'IA. La sobriété numérique devient une composante incontournable de la RSE des entreprises. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°97 : Quelle opportunité majeure est associée à sobriété numérique et empreinte carbone des data centers ?</div>",
    "options": [
      "La gratuité universelle de l'ensemble des services",
      "L'absence totale de besoins en investissements",
      "La fin de la concurrence internationale",
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 20 : Sobriété Numérique et Empreinte Carbone des Data Centers</strong><br>La consommation énergétique des centres de données augmente fortement avec le boom du stockage cloud et de l'IA. La sobriété numérique devient une composante incontournable de la RSE des entreprises. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°98 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "La baisse brutale du nombre d'habitants en Europe",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation",
      "L'interdiction par l'Union européenne de toute innovation",
      "Le manque total d'intérêt des acteurs économiques"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 20 : Sobriété Numérique et Empreinte Carbone des Data Centers</strong><br>La consommation énergétique des centres de données augmente fortement avec le boom du stockage cloud et de l'IA. La sobriété numérique devient une composante incontournable de la RSE des entreprises. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°99 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En déléguant l'intégralité des décisions à des algorithmes",
      "En ignorant les risques pour privilégier le profit immédiat",
      "En interdisant l'usage des nouvelles technologies"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 20 : Sobriété Numérique et Empreinte Carbone des Data Centers</strong><br>La consommation énergétique des centres de données augmente fortement avec le boom du stockage cloud et de l'IA. La sobriété numérique devient une composante incontournable de la RSE des entreprises. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°100 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "Seules les entreprises d'État peuvent réussir dans ce secteur",
      "La gestion de sobriété numérique et empreinte carbone des data centers requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Les consommateurs refusent catégoriquement ces innovations"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 21 : Cybersécurité et Protection des Infrastructures Critiques</strong><br>Les attaques par rançongiciel ciblant les hôpitaux et les collectivités territoriales démontrent que la cybersécurité n'est plus une simple option technique mais un enjeu majeur de sécurité nationale. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°101 : Quel est le thème principal abordé dans l'analyse de 'Cybersécurité et Protection des Infrastructures Critiques' ?</div>",
    "options": [
      "L'impact stratégique et les arbitrages économiques liés à cybersécurité et protection des infrastructures critiques",
      "La suppression des taxes commerciales",
      "Le retour aux méthodes industrielles du XIXe siècle",
      "La fermeture immédiate des frontières"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 21 : Cybersécurité et Protection des Infrastructures Critiques</strong><br>Les attaques par rançongiciel ciblant les hôpitaux et les collectivités territoriales démontrent que la cybersécurité n'est plus une simple option technique mais un enjeu majeur de sécurité nationale. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°102 : Quelle opportunité majeure est associée à cybersécurité et protection des infrastructures critiques ?</div>",
    "options": [
      "L'amélioration de l'efficacité et l'émergence de nouvelles solutions innovantes",
      "L'absence totale de besoins en investissements",
      "La gratuité universelle de l'ensemble des services",
      "La fin de la concurrence internationale"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 21 : Cybersécurité et Protection des Infrastructures Critiques</strong><br>Les attaques par rançongiciel ciblant les hôpitaux et les collectivités territoriales démontrent que la cybersécurité n'est plus une simple option technique mais un enjeu majeur de sécurité nationale. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°103 : Quel défi ou risque est explicitement souligné par le texte ?</div>",
    "options": [
      "L'interdiction par l'Union européenne de toute innovation",
      "La baisse brutale du nombre d'habitants en Europe",
      "Le manque total d'intérêt des acteurs économiques",
      "La présence de contraintes techniques, réglementaires ou éthiques nécessitant une régulation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 21 : Cybersécurité et Protection des Infrastructures Critiques</strong><br>Les attaques par rançongiciel ciblant les hôpitaux et les collectivités territoriales démontrent que la cybersécurité n'est plus une simple option technique mais un enjeu majeur de sécurité nationale. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°104 : Comment la réflexion stratégique doit-elle aborder cette mutation ?</div>",
    "options": [
      "En ignorant les risques pour privilégier le profit immédiat",
      "En interdisant l'usage des nouvelles technologies",
      "En conciliant efficacité économique, responsabilité et vision de long terme",
      "En déléguant l'intégralité des décisions à des algorithmes"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "<div class=\"passage-box\" style=\"background:#F0F4F8; border-left:4px solid #0071E3; padding:12px 14px; font-size:14px; line-height:1.45; margin-bottom:12px; border-radius:8px; text-align:left; color:#1D1D1F; font-weight:500;\"><strong>Texte 21 : Cybersécurité et Protection des Infrastructures Critiques</strong><br>Les attaques par rançongiciel ciblant les hôpitaux et les collectivités territoriales démontrent que la cybersécurité n'est plus une simple option technique mais un enjeu majeur de sécurité nationale. La réflexion stratégique impose une analyse approfondie des arbitrages économiques, environnementaux et sociaux pour construire des modèles pérennes à long terme.</div><div style=\"font-size:16px; font-weight:700; text-align:center;\">Question n°105 : Quelle est la conclusion générale qui ressort de cet extrait ?</div>",
    "options": [
      "Les consommateurs refusent catégoriquement ces innovations",
      "Il convient d'abandonner immédiatement tous les projets dans ce domaine",
      "La gestion de cybersécurité et protection des infrastructures critiques requiert une approche équilibrée et adaptée aux nouveaux enjeux",
      "Seules les entreprises d'État peuvent réussir dans ce secteur"
    ],
    "answerIndex": 2
  }
];

export const TM_CALCUL_QUESTIONS = [
  {
    "prompt": "Problème Calcul n°1 : Un livre coûte initialement 100 €. Son prix subit d'abord une hausse de 10%, puis une baisse de 10% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "80 €",
      "100 €",
      "99 €",
      "100 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°2 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 108 km. Le premier roule à 50 km/h et le second à 60 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "1.8 h",
      "0.98 h",
      "10.8 h",
      "2.16 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°3 : Un bassin de 480 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 18 min, et le tuyau B seul en 20 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "19 min",
      "9.5 min",
      "2 min",
      "38 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Géométrie n°4 : Combien de diagonales possède un polygon convexe fermé à 8 sommets ?",
    "options": [
      "56",
      "20",
      "28",
      "16"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Probabilité n°5 : Un sac contient 6 jetons noirs et 8 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">14</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">14</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Équation n°6 : Quelle est la valeur minimale du polynôme f(x) = x² -14x + 20 ?",
    "options": [
      "20",
      "7",
      "-21",
      "-29"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°7 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">4</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°8 : Un montre coûte initialement 184 €. Son prix subit d'abord une hausse de 40%, puis une baisse de 15% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "218.96 €",
      "209 €",
      "230 €",
      "82.8 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°9 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 164 km. Le premier roule à 60 km/h et le second à 80 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "2.05 h",
      "1.17 h",
      "8.2 h",
      "2.73 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°10 : Un bassin de 760 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 26 min, et le tuyau B seul en 16 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "42 min",
      "10 min",
      "21 min",
      "9.9 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Géométrie n°11 : Combien de diagonales possède un polygon convexe fermé à 15 sommets ?",
    "options": [
      "210",
      "30",
      "90",
      "105"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Probabilité n°12 : Un sac contient 3 jetons noirs et 9 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">9</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">9</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Équation n°13 : Quelle est la valeur minimale du polynôme f(x) = x² -12x + 34 ?",
    "options": [
      "6",
      "34",
      "6",
      "-2"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°14 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°15 : Un costume coûte initialement 268 €. Son prix subit d'abord une hausse de 30%, puis une baisse de 20% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "278 €",
      "294.8 €",
      "278.72 €",
      "134 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°16 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 220 km. Le premier roule à 70 km/h et le second à 50 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "3.14 h",
      "1.83 h",
      "11 h",
      "4.4 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°17 : Un bassin de 1040 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 14 min, et le tuyau B seul en 12 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "6.5 min",
      "26 min",
      "2 min",
      "13 min"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Géométrie n°18 : Combien de diagonales possède un polygon convexe fermé à 10 sommets ?",
    "options": [
      "45",
      "20",
      "90",
      "35"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Probabilité n°19 : Un sac contient 5 jetons noirs et 4 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">4</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Équation n°20 : Quelle est la valeur minimale du polynôme f(x) = x² -10x + 48 ?",
    "options": [
      "48",
      "5",
      "31",
      "23"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°21 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> + <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">18</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">17</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">10</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°22 : Un ordinateur coûte initialement 352 €. Son prix subit d'abord une hausse de 20%, puis une baisse de 10% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "387.2 €",
      "362 €",
      "246.4 €",
      "380.16 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°23 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 276 km. Le premier roule à 80 km/h et le second à 70 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "27.6 h",
      "3.45 h",
      "3.94 h",
      "1.84 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°24 : Un bassin de 1320 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 22 min, et le tuyau B seul en 24 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "2 min",
      "11.5 min",
      "23 min",
      "46 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Géométrie n°25 : Combien de diagonales possède un polygon convexe fermé à 5 sommets ?",
    "options": [
      "10",
      "5",
      "10",
      "20"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Probabilité n°26 : Un sac contient 2 jetons noirs et 5 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Équation n°27 : Quelle est la valeur minimale du polynôme f(x) = x² -8x + 62 ?",
    "options": [
      "54",
      "62",
      "4",
      "46"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°28 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">15</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">23</span><span class=\"den\">15</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">24</span><span class=\"den\">15</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">8</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°29 : Un tablette coûte initialement 436 €. Son prix subit d'abord une hausse de 10%, puis une baisse de 15% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "414.2 €",
      "327 €",
      "431 €",
      "407.66 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°30 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 332 km. Le premier roule à 90 km/h et le second à 90 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "3.69 h",
      "1.84 h",
      "22.13 h",
      "3.69 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°31 : Un bassin de 1600 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 10 min, et le tuyau B seul en 20 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "15 min",
      "6.7 min",
      "10 min",
      "30 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Géométrie n°32 : Combien de diagonales possède un polygon convexe fermé à 12 sommets ?",
    "options": [
      "54",
      "66",
      "24",
      "132"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Probabilité n°33 : Un sac contient 4 jetons noirs et 6 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">10</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Équation n°34 : Quelle est la valeur minimale du polynôme f(x) = x² -6x + 76 ?",
    "options": [
      "75",
      "76",
      "3",
      "67"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°35 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">16</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">4</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°36 : Un appareil photo coûte initialement 520 €. Son prix subit d'abord une hausse de 40%, puis une baisse de 20% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "624 €",
      "208 €",
      "540 €",
      "582.4 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°37 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 388 km. Le premier roule à 40 km/h et le second à 60 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "6.47 h",
      "19.4 h",
      "3.88 h",
      "9.7 h"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°38 : Un bassin de 1880 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 18 min, et le tuyau B seul en 16 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "34 min",
      "17 min",
      "2 min",
      "8.5 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Géométrie n°39 : Combien de diagonales possède un polygon convexe fermé à 7 sommets ?",
    "options": [
      "14",
      "42",
      "14",
      "21"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Probabilité n°40 : Un sac contient 6 jetons noirs et 7 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">13</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">13</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">7</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Équation n°41 : Quelle est la valeur minimale du polynôme f(x) = x² -4x + 90 ?",
    "options": [
      "90",
      "86",
      "94",
      "2"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Fraction n°42 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span> + <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">15</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°43 : Un vélo coûte initialement 604 €. Son prix subit d'abord une hausse de 30%, puis une baisse de 10% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "724.8 €",
      "624 €",
      "362.4 €",
      "706.68 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°44 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 444 km. Le premier roule à 50 km/h et le second à 80 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "14.8 h",
      "8.88 h",
      "3.42 h",
      "5.55 h"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°45 : Un bassin de 2160 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 26 min, et le tuyau B seul en 12 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "14 min",
      "19 min",
      "8.2 min",
      "38 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Géométrie n°46 : Combien de diagonales possède un polygon convexe fermé à 14 sommets ?",
    "options": [
      "28",
      "77",
      "91",
      "182"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Probabilité n°47 : Un sac contient 3 jetons noirs et 8 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">8</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Équation n°48 : Quelle est la valeur minimale du polynôme f(x) = x² -18x + 104 ?",
    "options": [
      "104",
      "9",
      "23",
      "31"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Fraction n°49 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°50 : Un casque audio coûte initialement 688 €. Son prix subit d'abord une hausse de 20%, puis une baisse de 15% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "722.4 €",
      "693 €",
      "701.76 €",
      "447.2 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°51 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 500 km. Le premier roule à 60 km/h et le second à 50 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "10 h",
      "4.55 h",
      "8.33 h",
      "50 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°52 : Un bassin de 2440 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 14 min, et le tuyau B seul en 24 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "38 min",
      "8.8 min",
      "19 min",
      "10 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Géométrie n°53 : Combien de diagonales possède un polygon convexe fermé à 9 sommets ?",
    "options": [
      "18",
      "72",
      "36",
      "27"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Probabilité n°54 : Un sac contient 5 jetons noirs et 9 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">14</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">9</span><span class=\"den\">14</span></span>"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Équation n°55 : Quelle est la valeur minimale du polynôme f(x) = x² -16x + 118 ?",
    "options": [
      "8",
      "54",
      "62",
      "118"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Fraction n°56 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°57 : Un sac à dos coûte initialement 772 €. Son prix subit d'abord une hausse de 10%, puis une baisse de 20% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "694.8 €",
      "540.4 €",
      "679.36 €",
      "762 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°58 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 556 km. Le premier roule à 70 km/h et le second à 70 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "3.97 h",
      "37.07 h",
      "7.94 h",
      "7.94 h"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°59 : Un bassin de 2720 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 22 min, et le tuyau B seul en 20 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "42 min",
      "2 min",
      "10.5 min",
      "21 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Géométrie n°60 : Combien de diagonales possède un polygon convexe fermé à 16 sommets ?",
    "options": [
      "120",
      "240",
      "32",
      "104"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Probabilité n°61 : Un sac contient 2 jetons noirs et 4 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Équation n°62 : Quelle est la valeur minimale du polynôme f(x) = x² -14x + 132 ?",
    "options": [
      "132",
      "91",
      "7",
      "83"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°63 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">5</span></span> + <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">9</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">28</span><span class=\"den\">20</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">27</span><span class=\"den\">20</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°64 : Un téléphone coûte initialement 856 €. Son prix subit d'abord une hausse de 40%, puis une baisse de 10% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "886 €",
      "428 €",
      "1078.56 €",
      "1112.8 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°65 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 612 km. Le premier roule à 80 km/h et le second à 90 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "6.8 h",
      "7.65 h",
      "61.2 h",
      "3.6 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°66 : Un bassin de 3000 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 10 min, et le tuyau B seul en 16 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "6 min",
      "26 min",
      "6.2 min",
      "13 min"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Géométrie n°67 : Combien de diagonales possède un polygon convexe fermé à 11 sommets ?",
    "options": [
      "44",
      "22",
      "55",
      "110"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Probabilité n°68 : Un sac contient 4 jetons noirs et 5 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">9</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Équation n°69 : Quelle est la valeur minimale du polynôme f(x) = x² -12x + 146 ?",
    "options": [
      "6",
      "110",
      "146",
      "118"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Fraction n°70 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">1</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">1</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">9</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°71 : Un livre coûte initialement 940 €. Son prix subit d'abord une hausse de 30%, puis une baisse de 15% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "1081 €",
      "517 €",
      "955 €",
      "1038.7 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°72 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 668 km. Le premier roule à 90 km/h et le second à 60 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "22.27 h",
      "7.42 h",
      "11.13 h",
      "4.45 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°73 : Un bassin de 3280 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 18 min, et le tuyau B seul en 12 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "30 min",
      "7.2 min",
      "6 min",
      "15 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Géométrie n°74 : Combien de diagonales possède un polygon convexe fermé à 6 sommets ?",
    "options": [
      "9",
      "12",
      "30",
      "15"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Probabilité n°75 : Un sac contient 6 jetons noirs et 6 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">12</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Équation n°76 : Quelle est la valeur minimale du polynôme f(x) = x² -10x + 160 ?",
    "options": [
      "143",
      "160",
      "135",
      "5"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Fraction n°77 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">2</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°78 : Un montre coûte initialement 1024 €. Son prix subit d'abord une hausse de 20%, puis une baisse de 20% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "983.04 €",
      "1024 €",
      "1024 €",
      "614.4 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°79 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 724 km. Le premier roule à 40 km/h et le second à 80 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "18.1 h",
      "9.05 h",
      "18.1 h",
      "6.03 h"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°80 : Un bassin de 3560 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 26 min, et le tuyau B seul en 24 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "25 min",
      "12.5 min",
      "50 min",
      "2 min"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Géométrie n°81 : Combien de diagonales possède un polygon convexe fermé à 13 sommets ?",
    "options": [
      "65",
      "156",
      "78",
      "26"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Probabilité n°82 : Un sac contient 3 jetons noirs et 7 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">7</span></span>"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Équation n°83 : Quelle est la valeur minimale du polynôme f(x) = x² -8x + 174 ?",
    "options": [
      "174",
      "166",
      "4",
      "158"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°84 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">5</span></span> + <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">5</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">12</span><span class=\"den\">25</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">5</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°85 : Un costume coûte initialement 1108 €. Son prix subit d'abord une hausse de 10%, puis une baisse de 10% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "1108 €",
      "886.4 €",
      "1096.92 €",
      "1108 €"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Calcul n°86 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 780 km. Le premier roule à 50 km/h et le second à 50 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "52 h",
      "7.8 h",
      "15.6 h",
      "15.6 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°87 : Un bassin de 3840 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 14 min, et le tuyau B seul en 20 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "17 min",
      "6 min",
      "34 min",
      "8.2 min"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Géométrie n°88 : Combien de diagonales possède un polygon convexe fermé à 8 sommets ?",
    "options": [
      "28",
      "16",
      "20",
      "56"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Probabilité n°89 : Un sac contient 5 jetons noirs et 8 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">13</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">13</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Équation n°90 : Quelle est la valeur minimale du polynôme f(x) = x² -6x + 188 ?",
    "options": [
      "188",
      "187",
      "3",
      "179"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Fraction n°91 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">3</span></span> + <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">5</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">6</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">12</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°92 : Un ordinateur coûte initialement 1192 €. Son prix subit d'abord une hausse de 40%, puis une baisse de 15% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "1418.48 €",
      "1217 €",
      "536.4 €",
      "1490 €"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Calcul n°93 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 836 km. Le premier roule à 60 km/h et le second à 70 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "11.94 h",
      "6.43 h",
      "13.93 h",
      "83.6 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°94 : Un bassin de 4120 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 22 min, et le tuyau B seul en 16 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "9.3 min",
      "19 min",
      "38 min",
      "6 min"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Géométrie n°95 : Combien de diagonales possède un polygon convexe fermé à 15 sommets ?",
    "options": [
      "105",
      "210",
      "30",
      "90"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Probabilité n°96 : Un sac contient 2 jetons noirs et 9 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">9</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">9</span><span class=\"den\">11</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">11</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Équation n°97 : Quelle est la valeur minimale du polynôme f(x) = x² -4x + 202 ?",
    "options": [
      "206",
      "202",
      "198",
      "2"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Fraction n°98 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">4</span></span> + <span class=\"math-frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">12</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">8</span><span class=\"den\">6</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">7</span><span class=\"den\">6</span></span>"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°99 : Un tablette coûte initialement 1276 €. Son prix subit d'abord une hausse de 30%, puis une baisse de 20% sur le nouveau prix. Quel est son prix final ?",
    "options": [
      "1403.6 €",
      "1286 €",
      "638 €",
      "1327.04 €"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Calcul n°100 : Deux véhicules partent l'un vers l'autre de deux villes distantes de 892 km. Le premier roule à 70 km/h et le second à 90 km/h. Après combien d'heures se croisent-ils ?",
    "options": [
      "9.91 h",
      "5.58 h",
      "12.74 h",
      "44.6 h"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Calcul n°101 : Un bassin de 4400 L est rempli par 2 tuyaux. Seul, le tuyau A le remplit en 10 min, et le tuyau B seul en 12 min. Combien de temps faut-il pour le remplir avec les deux tuyaux ouverts ?",
    "options": [
      "5.5 min",
      "11 min",
      "22 min",
      "2 min"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Géométrie n°102 : Combien de diagonales possède un polygon convexe fermé à 10 sommets ?",
    "options": [
      "45",
      "35",
      "90",
      "20"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Probabilité n°103 : Un sac contient 4 jetons noirs et 4 jetons blancs. Quelle est la probabilité de tirer un jeton noir ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">8</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">4</span></span>"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Équation n°104 : Quelle est la valeur minimale du polynôme f(x) = x² -18x + 216 ?",
    "options": [
      "143",
      "135",
      "216",
      "9"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Fraction n°105 : Calculez la valeur exacte de l'expression : <span class=\"math-frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> + <span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span> = ?",
    "options": [
      "<span class=\"math-frac\"><span class=\"num\">17</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">18</span><span class=\"den\">10</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">4</span><span class=\"den\">7</span></span>",
      "<span class=\"math-frac\"><span class=\"num\">3</span><span class=\"den\">10</span></span>"
    ],
    "answerIndex": 0
  }
];

export const TM_RAISONNEMENT_QUESTIONS = [
  {
    "prompt": "Problème Logique n°1 : Dans un groupe de 40 personnes, 18 pratiquent le tennis, 15 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "12",
      "8",
      "7",
      "16"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°2 : Cinq personnes (Marc, Pierre, Sophie, Julie, Antoine) sont assises en ligne. Marc est à côté de Pierre. Sophie est immédiatement à droite de Julie. Antoine est à l'extrême gauche. Si Pierre est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Sophie",
      "Julie",
      "Antoine",
      "Marc"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°3 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°4 : Camille affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Lundi",
      "Mercredi",
      "Mardi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°5 : Lors d'une course, Alice termine avant Bob mais après Charlie. David termine juste après Bob. Qui a gagné la course ?",
    "options": [
      "Bob",
      "Charlie",
      "David",
      "Alice"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Logique n°6 : Dans un groupe de 45 personnes, 23 pratiquent le tennis, 20 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "2",
      "11",
      "8",
      "7"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Disposition n°7 : Cinq personnes (Thomas, Émilie, Lucas, Léa, Hugo) sont assises en ligne. Thomas est à côté de Émilie. Lucas est immédiatement à droite de Léa. Hugo est à l'extrême gauche. Si Émilie est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Léa",
      "Thomas",
      "Lucas",
      "Hugo"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°8 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Énigme de Vérité n°9 : Alice affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Dimanche",
      "Lundi",
      "Mercredi",
      "Mardi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Ordre d'arrivée n°10 : Lors d'une course, Marc termine avant Pierre mais après Sophie. Julie termine juste après Pierre. Qui a gagné la course ?",
    "options": [
      "Pierre",
      "Sophie",
      "Marc",
      "Julie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Logique n°11 : Dans un groupe de 50 personnes, 18 pratiquent le tennis, 17 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "15",
      "20",
      "8",
      "24"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°12 : Cinq personnes (Camille, Nicolas, Sarah, Alexandre, Manon) sont assises en ligne. Camille est à côté de Nicolas. Sarah est immédiatement à droite de Alexandre. Manon est à l'extrême gauche. Si Nicolas est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Sarah",
      "Manon",
      "Alexandre",
      "Camille"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°13 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°14 : Marc affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Dimanche",
      "Mercredi",
      "Lundi",
      "Mardi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Ordre d'arrivée n°15 : Lors d'une course, Thomas termine avant Émilie mais après Lucas. Léa termine juste après Émilie. Qui a gagné la course ?",
    "options": [
      "Lucas",
      "Léa",
      "Émilie",
      "Thomas"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°16 : Dans un groupe de 55 personnes, 23 pratiquent le tennis, 22 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "10",
      "8",
      "19",
      "15"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Disposition n°17 : Cinq personnes (Alice, Bob, Charlie, David, Ève) sont assises en ligne. Alice est à côté de Bob. Charlie est immédiatement à droite de David. Ève est à l'extrême gauche. Si Bob est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "David",
      "Ève",
      "Alice",
      "Charlie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°18 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°19 : Thomas affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Dimanche",
      "Mardi",
      "Mercredi",
      "Lundi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Ordre d'arrivée n°20 : Lors d'une course, Camille termine avant Nicolas mais après Sarah. Alexandre termine juste après Nicolas. Qui a gagné la course ?",
    "options": [
      "Camille",
      "Nicolas",
      "Sarah",
      "Alexandre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Logique n°21 : Dans un groupe de 60 personnes, 18 pratiquent le tennis, 19 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "32",
      "28",
      "8",
      "23"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°22 : Cinq personnes (Marc, Pierre, Sophie, Julie, Antoine) sont assises en ligne. Marc est à côté de Pierre. Sophie est immédiatement à droite de Julie. Antoine est à l'extrême gauche. Si Pierre est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Sophie",
      "Antoine",
      "Marc",
      "Julie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°23 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°24 : Camille affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mardi",
      "Dimanche",
      "Mercredi",
      "Lundi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Ordre d'arrivée n°25 : Lors d'une course, Alice termine avant Bob mais après Charlie. David termine juste après Bob. Qui a gagné la course ?",
    "options": [
      "Bob",
      "Alice",
      "Charlie",
      "David"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Logique n°26 : Dans un groupe de 65 personnes, 23 pratiquent le tennis, 16 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "31",
      "8",
      "35",
      "26"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°27 : Cinq personnes (Thomas, Émilie, Lucas, Léa, Hugo) sont assises en ligne. Thomas est à côté de Émilie. Lucas est immédiatement à droite de Léa. Hugo est à l'extrême gauche. Si Émilie est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Léa",
      "Hugo",
      "Thomas",
      "Lucas"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°28 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°29 : Alice affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mardi",
      "Lundi",
      "Mercredi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°30 : Lors d'une course, Marc termine avant Pierre mais après Sophie. Julie termine juste après Pierre. Qui a gagné la course ?",
    "options": [
      "Sophie",
      "Marc",
      "Julie",
      "Pierre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°31 : Dans un groupe de 70 personnes, 18 pratiquent le tennis, 21 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "8",
      "36",
      "31",
      "40"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°32 : Cinq personnes (Camille, Nicolas, Sarah, Alexandre, Manon) sont assises en ligne. Camille est à côté de Nicolas. Sarah est immédiatement à droite de Alexandre. Manon est à l'extrême gauche. Si Nicolas est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Alexandre",
      "Manon",
      "Sarah",
      "Camille"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°33 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°34 : Marc affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Lundi",
      "Dimanche",
      "Mercredi",
      "Mardi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Ordre d'arrivée n°35 : Lors d'une course, Thomas termine avant Émilie mais après Lucas. Léa termine juste après Émilie. Qui a gagné la course ?",
    "options": [
      "Lucas",
      "Émilie",
      "Léa",
      "Thomas"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°36 : Dans un groupe de 75 personnes, 23 pratiquent le tennis, 18 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "34",
      "39",
      "43",
      "8"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°37 : Cinq personnes (Alice, Bob, Charlie, David, Ève) sont assises en ligne. Alice est à côté de Bob. Charlie est immédiatement à droite de David. Ève est à l'extrême gauche. Si Bob est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Charlie",
      "Ève",
      "Alice",
      "David"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°38 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Énigme de Vérité n°39 : Thomas affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Lundi",
      "Mardi",
      "Dimanche",
      "Mercredi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Ordre d'arrivée n°40 : Lors d'une course, Camille termine avant Nicolas mais après Sarah. Alexandre termine juste après Nicolas. Qui a gagné la course ?",
    "options": [
      "Sarah",
      "Camille",
      "Alexandre",
      "Nicolas"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°41 : Dans un groupe de 80 personnes, 18 pratiquent le tennis, 15 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "56",
      "47",
      "8",
      "52"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Disposition n°42 : Cinq personnes (Marc, Pierre, Sophie, Julie, Antoine) sont assises en ligne. Marc est à côté de Pierre. Sophie est immédiatement à droite de Julie. Antoine est à l'extrême gauche. Si Pierre est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Sophie",
      "Antoine",
      "Marc",
      "Julie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°43 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°44 : Camille affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mardi",
      "Mercredi",
      "Dimanche",
      "Lundi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Ordre d'arrivée n°45 : Lors d'une course, Alice termine avant Bob mais après Charlie. David termine juste après Bob. Qui a gagné la course ?",
    "options": [
      "Charlie",
      "Alice",
      "David",
      "Bob"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°46 : Dans un groupe de 85 personnes, 23 pratiquent le tennis, 20 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "8",
      "51",
      "47",
      "42"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Disposition n°47 : Cinq personnes (Thomas, Émilie, Lucas, Léa, Hugo) sont assises en ligne. Thomas est à côté de Émilie. Lucas est immédiatement à droite de Léa. Hugo est à l'extrême gauche. Si Émilie est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Thomas",
      "Léa",
      "Hugo",
      "Lucas"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°48 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Énigme de Vérité n°49 : Alice affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Lundi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°50 : Lors d'une course, Marc termine avant Pierre mais après Sophie. Julie termine juste après Pierre. Qui a gagné la course ?",
    "options": [
      "Sophie",
      "Marc",
      "Julie",
      "Pierre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°51 : Dans un groupe de 90 personnes, 18 pratiquent le tennis, 17 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "8",
      "60",
      "55",
      "64"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°52 : Cinq personnes (Camille, Nicolas, Sarah, Alexandre, Manon) sont assises en ligne. Camille est à côté de Nicolas. Sarah est immédiatement à droite de Alexandre. Manon est à l'extrême gauche. Si Nicolas est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Manon",
      "Camille",
      "Sarah",
      "Alexandre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°53 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°54 : Marc affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Dimanche",
      "Lundi",
      "Mardi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Ordre d'arrivée n°55 : Lors d'une course, Thomas termine avant Émilie mais après Lucas. Léa termine juste après Émilie. Qui a gagné la course ?",
    "options": [
      "Thomas",
      "Léa",
      "Lucas",
      "Émilie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Logique n°56 : Dans un groupe de 95 personnes, 23 pratiquent le tennis, 22 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "50",
      "55",
      "59",
      "8"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°57 : Cinq personnes (Alice, Bob, Charlie, David, Ève) sont assises en ligne. Alice est à côté de Bob. Charlie est immédiatement à droite de David. Ève est à l'extrême gauche. Si Bob est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Ève",
      "Charlie",
      "Alice",
      "David"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°58 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Aucun diplômé ne fait partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Énigme de Vérité n°59 : Thomas affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Lundi",
      "Mercredi",
      "Mardi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°60 : Lors d'une course, Camille termine avant Nicolas mais après Sarah. Alexandre termine juste après Nicolas. Qui a gagné la course ?",
    "options": [
      "Nicolas",
      "Camille",
      "Sarah",
      "Alexandre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Logique n°61 : Dans un groupe de 100 personnes, 18 pratiquent le tennis, 19 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "68",
      "8",
      "63",
      "72"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°62 : Cinq personnes (Marc, Pierre, Sophie, Julie, Antoine) sont assises en ligne. Marc est à côté de Pierre. Sophie est immédiatement à droite de Julie. Antoine est à l'extrême gauche. Si Pierre est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Marc",
      "Julie",
      "Antoine",
      "Sophie"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°63 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Aucun diplômé ne fait partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Énigme de Vérité n°64 : Camille affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Lundi",
      "Mercredi",
      "Dimanche",
      "Mardi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Ordre d'arrivée n°65 : Lors d'une course, Alice termine avant Bob mais après Charlie. David termine juste après Bob. Qui a gagné la course ?",
    "options": [
      "Bob",
      "Charlie",
      "Alice",
      "David"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Logique n°66 : Dans un groupe de 105 personnes, 23 pratiquent le tennis, 16 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "75",
      "8",
      "71",
      "66"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Disposition n°67 : Cinq personnes (Thomas, Émilie, Lucas, Léa, Hugo) sont assises en ligne. Thomas est à côté de Émilie. Lucas est immédiatement à droite de Léa. Hugo est à l'extrême gauche. Si Émilie est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Hugo",
      "Lucas",
      "Thomas",
      "Léa"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°68 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Énigme de Vérité n°69 : Alice affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Dimanche",
      "Mardi",
      "Mercredi",
      "Lundi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Ordre d'arrivée n°70 : Lors d'une course, Marc termine avant Pierre mais après Sophie. Julie termine juste après Pierre. Qui a gagné la course ?",
    "options": [
      "Sophie",
      "Julie",
      "Pierre",
      "Marc"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°71 : Dans un groupe de 110 personnes, 18 pratiquent le tennis, 21 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "80",
      "71",
      "8",
      "76"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Disposition n°72 : Cinq personnes (Camille, Nicolas, Sarah, Alexandre, Manon) sont assises en ligne. Camille est à côté de Nicolas. Sarah est immédiatement à droite de Alexandre. Manon est à l'extrême gauche. Si Nicolas est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Alexandre",
      "Manon",
      "Camille",
      "Sarah"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°73 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Énigme de Vérité n°74 : Marc affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Lundi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°75 : Lors d'une course, Thomas termine avant Émilie mais après Lucas. Léa termine juste après Émilie. Qui a gagné la course ?",
    "options": [
      "Émilie",
      "Thomas",
      "Lucas",
      "Léa"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Problème Logique n°76 : Dans un groupe de 115 personnes, 23 pratiquent le tennis, 18 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "79",
      "8",
      "74",
      "83"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°77 : Cinq personnes (Alice, Bob, Charlie, David, Ève) sont assises en ligne. Alice est à côté de Bob. Charlie est immédiatement à droite de David. Ève est à l'extrême gauche. Si Bob est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Charlie",
      "Alice",
      "David",
      "Ève"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°78 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Énigme de Vérité n°79 : Thomas affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Dimanche",
      "Mardi",
      "Lundi"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Ordre d'arrivée n°80 : Lors d'une course, Camille termine avant Nicolas mais après Sarah. Alexandre termine juste après Nicolas. Qui a gagné la course ?",
    "options": [
      "Sarah",
      "Nicolas",
      "Camille",
      "Alexandre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°81 : Dans un groupe de 120 personnes, 18 pratiquent le tennis, 15 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "92",
      "8",
      "87",
      "96"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°82 : Cinq personnes (Marc, Pierre, Sophie, Julie, Antoine) sont assises en ligne. Marc est à côté de Pierre. Sophie est immédiatement à droite de Julie. Antoine est à l'extrême gauche. Si Pierre est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Julie",
      "Antoine",
      "Sophie",
      "Marc"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°83 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Énigme de Vérité n°84 : Camille affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Mardi",
      "Dimanche",
      "Lundi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Ordre d'arrivée n°85 : Lors d'une course, Alice termine avant Bob mais après Charlie. David termine juste après Bob. Qui a gagné la course ?",
    "options": [
      "Charlie",
      "David",
      "Bob",
      "Alice"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Problème Logique n°86 : Dans un groupe de 125 personnes, 23 pratiquent le tennis, 20 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "87",
      "82",
      "8",
      "91"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°87 : Cinq personnes (Thomas, Émilie, Lucas, Léa, Hugo) sont assises en ligne. Thomas est à côté de Émilie. Lucas est immédiatement à droite de Léa. Hugo est à l'extrême gauche. Si Émilie est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Lucas",
      "Thomas",
      "Hugo",
      "Léa"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°88 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Énigme de Vérité n°89 : Alice affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Lundi",
      "Dimanche",
      "Mardi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Ordre d'arrivée n°90 : Lors d'une course, Marc termine avant Pierre mais après Sophie. Julie termine juste après Pierre. Qui a gagné la course ?",
    "options": [
      "Marc",
      "Sophie",
      "Pierre",
      "Julie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Problème Logique n°91 : Dans un groupe de 130 personnes, 18 pratiquent le tennis, 17 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "95",
      "100",
      "8",
      "104"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°92 : Cinq personnes (Camille, Nicolas, Sarah, Alexandre, Manon) sont assises en ligne. Camille est à côté de Nicolas. Sarah est immédiatement à droite de Alexandre. Manon est à l'extrême gauche. Si Nicolas est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Camille",
      "Manon",
      "Sarah",
      "Alexandre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°93 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Toutes les personnes diplômées sont membres du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°94 : Marc affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mercredi",
      "Lundi",
      "Mardi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°95 : Lors d'une course, Thomas termine avant Émilie mais après Lucas. Léa termine juste après Émilie. Qui a gagné la course ?",
    "options": [
      "Émilie",
      "Thomas",
      "Léa",
      "Lucas"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Logique n°96 : Dans un groupe de 135 personnes, 23 pratiquent le tennis, 22 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "95",
      "8",
      "99",
      "90"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Disposition n°97 : Cinq personnes (Alice, Bob, Charlie, David, Ève) sont assises en ligne. Alice est à côté de Bob. Charlie est immédiatement à droite de David. Ève est à l'extrême gauche. Si Bob est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Charlie",
      "Alice",
      "David",
      "Ève"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°98 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Énigme de Vérité n°99 : Thomas affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Lundi",
      "Mercredi",
      "Dimanche",
      "Mardi"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Ordre d'arrivée n°100 : Lors d'une course, Camille termine avant Nicolas mais après Sarah. Alexandre termine juste après Nicolas. Qui a gagné la course ?",
    "options": [
      "Nicolas",
      "Alexandre",
      "Camille",
      "Sarah"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Problème Logique n°101 : Dans un groupe de 140 personnes, 18 pratiquent le tennis, 19 la natation et 5 pratiquent les deux sports. Combien ne pratiquent aucun de ces deux sports ?",
    "options": [
      "103",
      "108",
      "112",
      "8"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Disposition n°102 : Cinq personnes (Marc, Pierre, Sophie, Julie, Antoine) sont assises en ligne. Marc est à côté de Pierre. Sophie est immédiatement à droite de Julie. Antoine est à l'extrême gauche. Si Pierre est au milieu, qui occupe la deuxième position depuis la gauche ?",
    "options": [
      "Sophie",
      "Marc",
      "Antoine",
      "Julie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Sachant que la proposition 'Proposition n°103 : 'Tous les membres du bureau sont diplômés'.' est rigoureusement VRAIE, quelle affirmation est nécessairement VRAIE ?",
    "options": [
      "Si une personne est diplômée, elle fait obligatoirement partie du bureau",
      "Aucun diplômé ne fait partie du bureau",
      "Si une personne n'est pas diplômée, elle n'est pas membre du bureau (Contraposée)",
      "Toutes les personnes diplômées sont membres du bureau"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Énigme de Vérité n°104 : Camille affirme : 'Je mentirai demain et je dis la vérité aujourd'hui'. Sachant qu'il ment soit le lundi, soit le mardi, quel jour cette affirmation a-t-elle été faite ?",
    "options": [
      "Mardi",
      "Mercredi",
      "Lundi",
      "Dimanche"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Ordre d'arrivée n°105 : Lors d'une course, Alice termine avant Bob mais après Charlie. David termine juste après Bob. Qui a gagné la course ?",
    "options": [
      "Charlie",
      "Bob",
      "David",
      "Alice"
    ],
    "answerIndex": 0
  }
];

export const TM_CONDITIONS_MINIMALES_QUESTIONS = [
  {
    "prompt": "Conditions Minimales n°1 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 20 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 40 €.",
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
    "prompt": "Conditions Minimales n°2 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 21 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°3 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 36<br>Information (2) : n³ = 216",
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
    "prompt": "Conditions Minimales n°4 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 13 m.<br>Information (2) : La largeur du terrain est de 8 m.",
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
    "prompt": "Conditions Minimales n°5 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 20",
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
    "prompt": "Conditions Minimales n°6 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 30 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 60 €.",
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
    "prompt": "Conditions Minimales n°7 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 26 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°8 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 121<br>Information (2) : n³ = 1331",
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
    "prompt": "Conditions Minimales n°9 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 18 m.<br>Information (2) : La largeur du terrain est de 5 m.",
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
    "prompt": "Conditions Minimales n°10 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 25",
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
    "prompt": "Conditions Minimales n°11 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 40 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 80 €.",
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
    "prompt": "Conditions Minimales n°12 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 31 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°13 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 256<br>Information (2) : n³ = 4096",
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
    "prompt": "Conditions Minimales n°14 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 23 m.<br>Information (2) : La largeur du terrain est de 6 m.",
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
    "prompt": "Conditions Minimales n°15 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 30",
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
    "prompt": "Conditions Minimales n°16 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 50 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 100 €.",
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
    "prompt": "Conditions Minimales n°17 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 36 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°18 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 441<br>Information (2) : n³ = 9261",
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
    "prompt": "Conditions Minimales n°19 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 28 m.<br>Information (2) : La largeur du terrain est de 7 m.",
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
    "prompt": "Conditions Minimales n°20 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 35",
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
    "prompt": "Conditions Minimales n°21 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 60 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 120 €.",
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
    "prompt": "Conditions Minimales n°22 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 41 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°23 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 676<br>Information (2) : n³ = 17576",
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
    "prompt": "Conditions Minimales n°24 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 33 m.<br>Information (2) : La largeur du terrain est de 8 m.",
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
    "prompt": "Conditions Minimales n°25 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 40",
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
    "prompt": "Conditions Minimales n°26 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 70 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 140 €.",
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
    "prompt": "Conditions Minimales n°27 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 46 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°28 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 961<br>Information (2) : n³ = 29791",
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
    "prompt": "Conditions Minimales n°29 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 38 m.<br>Information (2) : La largeur du terrain est de 5 m.",
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
    "prompt": "Conditions Minimales n°30 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 45",
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
    "prompt": "Conditions Minimales n°31 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 80 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 160 €.",
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
    "prompt": "Conditions Minimales n°32 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 51 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°33 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 1296<br>Information (2) : n³ = 46656",
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
    "prompt": "Conditions Minimales n°34 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 43 m.<br>Information (2) : La largeur du terrain est de 6 m.",
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
    "prompt": "Conditions Minimales n°35 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 50",
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
    "prompt": "Conditions Minimales n°36 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 90 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 180 €.",
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
    "prompt": "Conditions Minimales n°37 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 56 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°38 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 1681<br>Information (2) : n³ = 68921",
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
    "prompt": "Conditions Minimales n°39 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 48 m.<br>Information (2) : La largeur du terrain est de 7 m.",
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
    "prompt": "Conditions Minimales n°40 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 55",
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
    "prompt": "Conditions Minimales n°41 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 100 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 200 €.",
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
    "prompt": "Conditions Minimales n°42 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 61 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°43 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 2116<br>Information (2) : n³ = 97336",
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
    "prompt": "Conditions Minimales n°44 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 53 m.<br>Information (2) : La largeur du terrain est de 8 m.",
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
    "prompt": "Conditions Minimales n°45 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 60",
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
    "prompt": "Conditions Minimales n°46 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 110 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 220 €.",
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
    "prompt": "Conditions Minimales n°47 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 66 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°48 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 2601<br>Information (2) : n³ = 132651",
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
    "prompt": "Conditions Minimales n°49 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 58 m.<br>Information (2) : La largeur du terrain est de 5 m.",
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
    "prompt": "Conditions Minimales n°50 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 65",
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
    "prompt": "Conditions Minimales n°51 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 120 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 240 €.",
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
    "prompt": "Conditions Minimales n°52 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 71 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°53 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 3136<br>Information (2) : n³ = 175616",
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
    "prompt": "Conditions Minimales n°54 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 63 m.<br>Information (2) : La largeur du terrain est de 6 m.",
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
    "prompt": "Conditions Minimales n°55 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 70",
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
    "prompt": "Conditions Minimales n°56 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 130 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 260 €.",
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
    "prompt": "Conditions Minimales n°57 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 76 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°58 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 3721<br>Information (2) : n³ = 226981",
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
    "prompt": "Conditions Minimales n°59 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 68 m.<br>Information (2) : La largeur du terrain est de 7 m.",
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
    "prompt": "Conditions Minimales n°60 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 75",
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
    "prompt": "Conditions Minimales n°61 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 140 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 280 €.",
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
    "prompt": "Conditions Minimales n°62 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 81 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°63 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 4356<br>Information (2) : n³ = 287496",
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
    "prompt": "Conditions Minimales n°64 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 73 m.<br>Information (2) : La largeur du terrain est de 8 m.",
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
    "prompt": "Conditions Minimales n°65 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 80",
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
    "prompt": "Conditions Minimales n°66 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 150 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 300 €.",
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
    "prompt": "Conditions Minimales n°67 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 86 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°68 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 5041<br>Information (2) : n³ = 357911",
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
    "prompt": "Conditions Minimales n°69 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 78 m.<br>Information (2) : La largeur du terrain est de 5 m.",
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
    "prompt": "Conditions Minimales n°70 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 85",
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
    "prompt": "Conditions Minimales n°71 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 160 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 320 €.",
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
    "prompt": "Conditions Minimales n°72 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 91 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°73 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 5776<br>Information (2) : n³ = 438976",
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
    "prompt": "Conditions Minimales n°74 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 83 m.<br>Information (2) : La largeur du terrain est de 6 m.",
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
    "prompt": "Conditions Minimales n°75 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 90",
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
    "prompt": "Conditions Minimales n°76 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 170 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 340 €.",
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
    "prompt": "Conditions Minimales n°77 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 96 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°78 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 6561<br>Information (2) : n³ = 531441",
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
    "prompt": "Conditions Minimales n°79 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 88 m.<br>Information (2) : La largeur du terrain est de 7 m.",
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
    "prompt": "Conditions Minimales n°80 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 95",
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
    "prompt": "Conditions Minimales n°81 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 180 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 360 €.",
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
    "prompt": "Conditions Minimales n°82 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 101 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°83 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 7396<br>Information (2) : n³ = 636056",
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
    "prompt": "Conditions Minimales n°84 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 93 m.<br>Information (2) : La largeur du terrain est de 8 m.",
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
    "prompt": "Conditions Minimales n°85 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 100",
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
    "prompt": "Conditions Minimales n°86 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 190 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 380 €.",
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
    "prompt": "Conditions Minimales n°87 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 106 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°88 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 8281<br>Information (2) : n³ = 753571",
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
    "prompt": "Conditions Minimales n°89 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 98 m.<br>Information (2) : La largeur du terrain est de 5 m.",
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
    "prompt": "Conditions Minimales n°90 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 105",
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
    "prompt": "Conditions Minimales n°91 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 200 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 400 €.",
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
    "prompt": "Conditions Minimales n°92 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 111 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°93 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 9216<br>Information (2) : n³ = 884736",
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
    "prompt": "Conditions Minimales n°94 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 103 m.<br>Information (2) : La largeur du terrain est de 6 m.",
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
    "prompt": "Conditions Minimales n°95 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 110",
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
    "prompt": "Conditions Minimales n°96 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 210 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 420 €.",
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
    "prompt": "Conditions Minimales n°97 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 116 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°98 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 10201<br>Information (2) : n³ = 1030301",
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
    "prompt": "Conditions Minimales n°99 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 108 m.<br>Information (2) : La largeur du terrain est de 7 m.",
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
    "prompt": "Conditions Minimales n°100 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 115",
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
    "prompt": "Conditions Minimales n°101 : On veut déterminer le prix unitaire d'un livre x.<br>Information (1) : 3 livres et 2 cahiers coûtent 220 €.<br>Information (2) : 6 livres et 4 cahiers coûtent 440 €.",
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
    "prompt": "Conditions Minimales n°102 : Quel est l'âge actuel d'un père P ?<br>Information (1) : Le père a 121 ans de plus que son fils.<br>Information (2) : Dans 5 ans, le père aura le triple de l'âge de son fils.",
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
    "prompt": "Conditions Minimales n°103 : Quelle est la valeur de l'entier positif n ?<br>Information (1) : n² = 11236<br>Information (2) : n³ = 1191016",
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
    "prompt": "Conditions Minimales n°104 : Quelle est la surface d'un terrain rectangulaire T ?<br>Information (1) : La longueur du terrain est de 113 m.<br>Information (2) : La largeur du terrain est de 8 m.",
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
    "prompt": "Conditions Minimales n°105 : Le nombre réel x est-il strictement positif ?<br>Information (1) : x³ > 0<br>Information (2) : x² = 120",
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
    "prompt": "Question Expression n°1 : Quelle est la tournure grammaticalement correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier le problème (COD direct)",
      "Pallier avec le problème",
      "Pallier au problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°2 : Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "serait",
      "est (Indicatif obligatoire)",
      "soit (Subjonctif faux)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°3 : Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait (Indicatif faux)",
      "fît",
      "ferait",
      "fasse (Subjonctif obligatoire)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°4 : Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Variable",
      "Masculin (un aphte)",
      "Féminin (une aphte)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°5 : Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Variable",
      "Féminin (une acné)",
      "Masculin (un acné)",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°6 : Quelle est l'orthographe correcte du mot désignant un choix difficile ?",
    "options": [
      "Dilemme (avec 2 'm')",
      "Dillemme",
      "Dileme",
      "Dilemne (avec 'nm')"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°7 : Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Invariable (une demi-heure)",
      "Accordé en nombre (des demis-heures)",
      "Variable selon le contexte",
      "Accordé en genre (une demie-heure)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°8 : Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyés",
      "envoyers",
      "envoyé (invariable car COD après)",
      "envoyées"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°9 : Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Rédiger un texte",
      "Recommander chaudement",
      "Interdire formellement",
      "Prescrire un médicament"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°10 : Quel est le pléonasme dans la phrase : 'Ils ont décidé de collaborer ensemble.' ?",
    "options": [
      "Décidé de",
      "De collaborer",
      "Ils ont décidé",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°11 : Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle de cette règle",
      "Je me rappelle cette règle",
      "Je me rappelle sur cette règle",
      "Je me rappelle à cette règle"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°12 : Complétez la phrase : 'Je me _____ de cet événement tragique.'",
    "options": [
      "rappelle (avec 'de')",
      "remémore de",
      "repense de",
      "souviens (avec 'de')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°13 : Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleu marine",
      "bleues marines",
      "bleu marines",
      "bleues marine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°14 : Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrons",
      "marron",
      "marrone",
      "marronnes"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°15 : Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faite",
      "fait (invariable devant infinitif)",
      "faites",
      "faits"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°16 : Orthographe correcte du mot désignant l'avance sur paiement :",
    "options": [
      "Acompte (un seul 'c')",
      "Aconte",
      "Ahcompte",
      "Accompte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°17 : Quel est le genre du mot 'épitaphe' ?",
    "options": [
      "Féminin (une épitaphe)",
      "Neutre",
      "Variable",
      "Masculin (un épitaphe)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°18 : Quel est le genre du mot 'pétale' ?",
    "options": [
      "Variable",
      "Neutre",
      "Masculin (un pétale)",
      "Féminin (une pétale)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°19 : Que signifie le paronyme 'démythifier' ?",
    "options": [
      "Accuser à tort",
      "Raconter une légende",
      "Dépouiller un récit de son caractère mythique",
      "Dévoiler une supercherie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°20 : Que signifie le paronyme 'démystifier' ?",
    "options": [
      "Enlever le caractère mythique",
      "Consacrer un texte",
      "Détruire une tromperie ou mystification",
      "Raconter un conte"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°21 : Quel est le genre du mot 'alvéole' ?",
    "options": [
      "Masculin uniquement",
      "Féminin (une alvéole) ou Masculin accepté",
      "Toujours pluriel",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°22 : Quel est le genre du mot 'astérisque' ?",
    "options": [
      "Variable",
      "Masculin (un astérisque)",
      "Neutre",
      "Féminin (une astérisque)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°23 : Quel est le genre du mot 'orbite' ?",
    "options": [
      "Neutre",
      "Variable",
      "Féminin (une orbite)",
      "Masculin (un orbite)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°24 : Quelle est l'orthographe correcte du mot 'cauchemar' ?",
    "options": [
      "Cauchemar (sans 'd' final)",
      "Cossemare",
      "Cauchemard",
      "Cauchemarre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°25 : Quelle est l'orthographe correcte du mot 'langage' ?",
    "options": [
      "Langaj",
      "Language",
      "Langage (sans 'u')",
      "Langages"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°26 : Quelle est la locution latine signifiant 'par le fait même' ?",
    "options": [
      "Ipso facto",
      "In fine",
      "Sine die",
      "De facto"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°27 : Quelle locution latine signifie 'en dernière analyse' ?",
    "options": [
      "In fine",
      "A priori",
      "Ipso facto",
      "Ad hoc"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°28 : Accord de 'tout' adverbe devant consonne : 'Elles sont _____ honteuses.'",
    "options": [
      "toute",
      "tout",
      "touts",
      "toutes (devant consonne ou 'h' aspiré)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°29 : Accord de 'tout' adverbe devant voyelle : 'Elles sont _____ étonnées.'",
    "options": [
      "touts",
      "toutes",
      "toute",
      "tout (invariable devant voyelle)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°30 : Quel est le sens exact de 'prescrire' ?",
    "options": [
      "Ordonner ou recommander officiellement",
      "Annuler un contrat",
      "Rédiger un poème",
      "Interdire formellement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°31 : Quelle est la tournure grammaticalement correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier le problème (COD direct)",
      "Pallier au problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°32 : Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "serait",
      "est (Indicatif obligatoire)",
      "soit (Subjonctif faux)",
      "fût"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°33 : Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "ferait",
      "fasse (Subjonctif obligatoire)",
      "fait (Indicatif faux)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°34 : Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Variable",
      "Masculin (un aphte)",
      "Féminin (une aphte)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°35 : Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Variable",
      "Féminin (une acné)",
      "Masculin (un acné)",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°36 : Quelle est l'orthographe correcte du mot désignant un choix difficile ?",
    "options": [
      "Dilemne (avec 'nm')",
      "Dileme",
      "Dilemme (avec 2 'm')",
      "Dillemme"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°37 : Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Invariable (une demi-heure)",
      "Accordé en genre (une demie-heure)",
      "Variable selon le contexte",
      "Accordé en nombre (des demis-heures)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°38 : Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyé (invariable car COD après)",
      "envoyers"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°39 : Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Rédiger un texte",
      "Recommander chaudement",
      "Interdire formellement",
      "Prescrire un médicament"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°40 : Quel est le pléonasme dans la phrase : 'Ils ont décidé de collaborer ensemble.' ?",
    "options": [
      "Collaborer ensemble",
      "De collaborer",
      "Ils ont décidé",
      "Décidé de"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°41 : Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle de cette règle",
      "Je me rappelle à cette règle",
      "Je me rappelle sur cette règle",
      "Je me rappelle cette règle"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°42 : Complétez la phrase : 'Je me _____ de cet événement tragique.'",
    "options": [
      "rappelle (avec 'de')",
      "remémore de",
      "souviens (avec 'de')",
      "repense de"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°43 : Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marine",
      "bleu marines",
      "bleues marines",
      "bleu marine"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°44 : Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marron",
      "marrons",
      "marrone",
      "marronnes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°45 : Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faite",
      "fait (invariable devant infinitif)",
      "faits",
      "faites"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°46 : Orthographe correcte du mot désignant l'avance sur paiement :",
    "options": [
      "Acompte (un seul 'c')",
      "Aconte",
      "Accompte",
      "Ahcompte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°47 : Quel est le genre du mot 'épitaphe' ?",
    "options": [
      "Variable",
      "Féminin (une épitaphe)",
      "Masculin (un épitaphe)",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°48 : Quel est le genre du mot 'pétale' ?",
    "options": [
      "Féminin (une pétale)",
      "Variable",
      "Neutre",
      "Masculin (un pétale)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°49 : Que signifie le paronyme 'démythifier' ?",
    "options": [
      "Dépouiller un récit de son caractère mythique",
      "Accuser à tort",
      "Raconter une légende",
      "Dévoiler une supercherie"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°50 : Que signifie le paronyme 'démystifier' ?",
    "options": [
      "Enlever le caractère mythique",
      "Raconter un conte",
      "Consacrer un texte",
      "Détruire une tromperie ou mystification"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°51 : Quel est le genre du mot 'alvéole' ?",
    "options": [
      "Féminin (une alvéole) ou Masculin accepté",
      "Masculin uniquement",
      "Toujours pluriel",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°52 : Quel est le genre du mot 'astérisque' ?",
    "options": [
      "Neutre",
      "Variable",
      "Féminin (une astérisque)",
      "Masculin (un astérisque)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°53 : Quel est le genre du mot 'orbite' ?",
    "options": [
      "Féminin (une orbite)",
      "Neutre",
      "Masculin (un orbite)",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°54 : Quelle est l'orthographe correcte du mot 'cauchemar' ?",
    "options": [
      "Cauchemar (sans 'd' final)",
      "Cauchemard",
      "Cossemare",
      "Cauchemarre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°55 : Quelle est l'orthographe correcte du mot 'langage' ?",
    "options": [
      "Language",
      "Langages",
      "Langaj",
      "Langage (sans 'u')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°56 : Quelle est la locution latine signifiant 'par le fait même' ?",
    "options": [
      "De facto",
      "Sine die",
      "Ipso facto",
      "In fine"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°57 : Quelle locution latine signifie 'en dernière analyse' ?",
    "options": [
      "Ipso facto",
      "In fine",
      "A priori",
      "Ad hoc"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°58 : Accord de 'tout' adverbe devant consonne : 'Elles sont _____ honteuses.'",
    "options": [
      "tout",
      "toutes (devant consonne ou 'h' aspiré)",
      "touts",
      "toute"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°59 : Accord de 'tout' adverbe devant voyelle : 'Elles sont _____ étonnées.'",
    "options": [
      "tout (invariable devant voyelle)",
      "toute",
      "toutes",
      "touts"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°60 : Quel est le sens exact de 'prescrire' ?",
    "options": [
      "Annuler un contrat",
      "Ordonner ou recommander officiellement",
      "Interdire formellement",
      "Rédiger un poème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°61 : Quelle est la tournure grammaticalement correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier le problème (COD direct)",
      "Pallier au problème",
      "Pallier avec le problème",
      "Pallier de ce problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°62 : Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "serait",
      "est (Indicatif obligatoire)",
      "soit (Subjonctif faux)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°63 : Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse (Subjonctif obligatoire)",
      "fît",
      "ferait",
      "fait (Indicatif faux)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°64 : Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Féminin (une aphte)",
      "Neutre",
      "Variable",
      "Masculin (un aphte)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°65 : Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Féminin (une acné)",
      "Masculin (un acné)",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°66 : Quelle est l'orthographe correcte du mot désignant un choix difficile ?",
    "options": [
      "Dilemme (avec 2 'm')",
      "Dilemne (avec 'nm')",
      "Dileme",
      "Dillemme"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°67 : Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Accordé en genre (une demie-heure)",
      "Accordé en nombre (des demis-heures)",
      "Invariable (une demi-heure)",
      "Variable selon le contexte"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°68 : Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyés",
      "envoyées",
      "envoyé (invariable car COD après)",
      "envoyers"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°69 : Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Rédiger un texte",
      "Recommander chaudement",
      "Interdire formellement",
      "Prescrire un médicament"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°70 : Quel est le pléonasme dans la phrase : 'Ils ont décidé de collaborer ensemble.' ?",
    "options": [
      "Ils ont décidé",
      "Décidé de",
      "Collaborer ensemble",
      "De collaborer"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°71 : Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle cette règle",
      "Je me rappelle sur cette règle",
      "Je me rappelle à cette règle",
      "Je me rappelle de cette règle"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°72 : Complétez la phrase : 'Je me _____ de cet événement tragique.'",
    "options": [
      "rappelle (avec 'de')",
      "repense de",
      "remémore de",
      "souviens (avec 'de')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°73 : Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marines",
      "bleues marine",
      "bleu marine",
      "bleu marines"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°74 : Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrone",
      "marronnes",
      "marrons",
      "marron"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°75 : Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faites",
      "fait (invariable devant infinitif)",
      "faite",
      "faits"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°76 : Orthographe correcte du mot désignant l'avance sur paiement :",
    "options": [
      "Acompte (un seul 'c')",
      "Aconte",
      "Ahcompte",
      "Accompte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°77 : Quel est le genre du mot 'épitaphe' ?",
    "options": [
      "Féminin (une épitaphe)",
      "Masculin (un épitaphe)",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°78 : Quel est le genre du mot 'pétale' ?",
    "options": [
      "Masculin (un pétale)",
      "Variable",
      "Féminin (une pétale)",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°79 : Que signifie le paronyme 'démythifier' ?",
    "options": [
      "Accuser à tort",
      "Dévoiler une supercherie",
      "Dépouiller un récit de son caractère mythique",
      "Raconter une légende"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°80 : Que signifie le paronyme 'démystifier' ?",
    "options": [
      "Enlever le caractère mythique",
      "Détruire une tromperie ou mystification",
      "Raconter un conte",
      "Consacrer un texte"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°81 : Quel est le genre du mot 'alvéole' ?",
    "options": [
      "Toujours pluriel",
      "Neutre",
      "Masculin uniquement",
      "Féminin (une alvéole) ou Masculin accepté"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°82 : Quel est le genre du mot 'astérisque' ?",
    "options": [
      "Masculin (un astérisque)",
      "Neutre",
      "Variable",
      "Féminin (une astérisque)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°83 : Quel est le genre du mot 'orbite' ?",
    "options": [
      "Féminin (une orbite)",
      "Variable",
      "Neutre",
      "Masculin (un orbite)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°84 : Quelle est l'orthographe correcte du mot 'cauchemar' ?",
    "options": [
      "Cauchemarre",
      "Cossemare",
      "Cauchemar (sans 'd' final)",
      "Cauchemard"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°85 : Quelle est l'orthographe correcte du mot 'langage' ?",
    "options": [
      "Langaj",
      "Langage (sans 'u')",
      "Langages",
      "Language"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°86 : Quelle est la locution latine signifiant 'par le fait même' ?",
    "options": [
      "Ipso facto",
      "In fine",
      "De facto",
      "Sine die"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°87 : Quelle locution latine signifie 'en dernière analyse' ?",
    "options": [
      "In fine",
      "A priori",
      "Ipso facto",
      "Ad hoc"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°88 : Accord de 'tout' adverbe devant consonne : 'Elles sont _____ honteuses.'",
    "options": [
      "touts",
      "toute",
      "toutes (devant consonne ou 'h' aspiré)",
      "tout"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°89 : Accord de 'tout' adverbe devant voyelle : 'Elles sont _____ étonnées.'",
    "options": [
      "toute",
      "touts",
      "tout (invariable devant voyelle)",
      "toutes"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°90 : Quel est le sens exact de 'prescrire' ?",
    "options": [
      "Interdire formellement",
      "Ordonner ou recommander officiellement",
      "Rédiger un poème",
      "Annuler un contrat"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°91 : Quelle est la tournure grammaticalement correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier le problème (COD direct)",
      "Pallier au problème",
      "Pallier de ce problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°92 : Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "soit (Subjonctif faux)",
      "est (Indicatif obligatoire)",
      "serait",
      "fût"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°93 : Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait (Indicatif faux)",
      "fît",
      "fasse (Subjonctif obligatoire)",
      "ferait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°94 : Quel est le genre exact du mot 'aphte' ?",
    "options": [
      "Féminin (une aphte)",
      "Masculin (un aphte)",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°95 : Quel est le genre exact du mot 'acné' ?",
    "options": [
      "Neutre",
      "Variable",
      "Masculin (un acné)",
      "Féminin (une acné)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°96 : Quelle est l'orthographe correcte du mot désignant un choix difficile ?",
    "options": [
      "Dilemne (avec 'nm')",
      "Dileme",
      "Dillemme",
      "Dilemme (avec 2 'm')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°97 : Comment s'accorde l'adjectif 'demi' placé avant le nom ?",
    "options": [
      "Accordé en nombre (des demis-heures)",
      "Accordé en genre (une demie-heure)",
      "Invariable (une demi-heure)",
      "Variable selon le contexte"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Question Expression n°98 : Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyés",
      "envoyé (invariable car COD après)",
      "envoyers",
      "envoyées"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°99 : Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Rédiger un texte",
      "Prescrire un médicament",
      "Recommander chaudement",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°100 : Quel est le pléonasme dans la phrase : 'Ils ont décidé de collaborer ensemble.' ?",
    "options": [
      "De collaborer",
      "Décidé de",
      "Ils ont décidé",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°101 : Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle sur cette règle",
      "Je me rappelle cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle à cette règle"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°102 : Complétez la phrase : 'Je me _____ de cet événement tragique.'",
    "options": [
      "repense de",
      "rappelle (avec 'de')",
      "remémore de",
      "souviens (avec 'de')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Question Expression n°103 : Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marine",
      "bleu marine",
      "bleues marines",
      "bleu marines"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Question Expression n°104 : Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marron",
      "marrone",
      "marronnes",
      "marrons"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Question Expression n°105 : Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faits",
      "faite",
      "fait (invariable devant infinitif)",
      "faites"
    ],
    "answerIndex": 2
  }
];

export const TM_LOGIQUE_QUESTIONS = [
  {
    "prompt": "Série numérique n°1 : Complétez la suite arithmétique : 2, 5, 8, 11, 14, ?",
    "options": [
      "20",
      "14",
      "19",
      "17"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série alphabétique n°2 : Complétez la suite de lettres : B, E, H, K, N, ?",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°3 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "44",
      "49",
      "14"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Matrice 3x3 n°4 : Quelle est la valeur manquante ?<br>4 &nbsp;&nbsp; 8 &nbsp;&nbsp; 16<br>5 &nbsp;&nbsp; 10 &nbsp;&nbsp; 20<br>6 &nbsp;&nbsp; 12 &nbsp;&nbsp; ?",
    "options": [
      "20",
      "24",
      "48",
      "26"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série phonique piège n°5 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "Z",
      "T",
      "K",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série numérique n°6 : Complétez la suite arithmétique : 7, 10, 13, 16, 19, ?",
    "options": [
      "24",
      "22",
      "19",
      "25"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°7 : Complétez la suite de lettres : A, C, E, G, I, ?",
    "options": [
      "K",
      "M",
      "J",
      "L"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°8 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "144",
      "24",
      "150",
      "139"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Matrice 3x3 n°9 : Quelle est la valeur manquante ?<br>9 &nbsp;&nbsp; 18 &nbsp;&nbsp; 36<br>10 &nbsp;&nbsp; 20 &nbsp;&nbsp; 40<br>11 &nbsp;&nbsp; 22 &nbsp;&nbsp; ?",
    "options": [
      "88",
      "46",
      "40",
      "44"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série phonique piège n°10 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "K",
      "Z",
      "V"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°11 : Complétez la suite arithmétique : 12, 15, 18, 21, 24, ?",
    "options": [
      "29",
      "24",
      "27",
      "30"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série alphabétique n°12 : Complétez la suite de lettres : F, J, N, R, V, ?",
    "options": [
      "\\",
      "Z",
      "[",
      "Y"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série des carrés parfaits n°13 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "44",
      "49",
      "55",
      "14"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Matrice 3x3 n°14 : Quelle est la valeur manquante ?<br>14 &nbsp;&nbsp; 28 &nbsp;&nbsp; 56<br>15 &nbsp;&nbsp; 30 &nbsp;&nbsp; 60<br>16 &nbsp;&nbsp; 32 &nbsp;&nbsp; ?",
    "options": [
      "64",
      "66",
      "128",
      "60"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série phonique piège n°15 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "Z",
      "V",
      "K"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°16 : Complétez la suite arithmétique : 17, 20, 23, 26, 29, ?",
    "options": [
      "29",
      "32",
      "34",
      "35"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°17 : Complétez la suite de lettres : E, H, K, N, Q, ?",
    "options": [
      "U",
      "V",
      "T",
      "S"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°18 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "24",
      "139",
      "150",
      "144"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°19 : Quelle est la valeur manquante ?<br>19 &nbsp;&nbsp; 38 &nbsp;&nbsp; 76<br>20 &nbsp;&nbsp; 40 &nbsp;&nbsp; 80<br>21 &nbsp;&nbsp; 42 &nbsp;&nbsp; ?",
    "options": [
      "80",
      "84",
      "86",
      "168"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série phonique piège n°20 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "K",
      "Z"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°21 : Complétez la suite arithmétique : 22, 25, 28, 31, 34, ?",
    "options": [
      "40",
      "34",
      "37",
      "39"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série alphabétique n°22 : Complétez la suite de lettres : D, F, H, J, L, ?",
    "options": [
      "N",
      "M",
      "P",
      "O"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°23 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "44",
      "55",
      "49",
      "14"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Matrice 3x3 n°24 : Quelle est la valeur manquante ?<br>24 &nbsp;&nbsp; 48 &nbsp;&nbsp; 96<br>25 &nbsp;&nbsp; 50 &nbsp;&nbsp; 100<br>26 &nbsp;&nbsp; 52 &nbsp;&nbsp; ?",
    "options": [
      "104",
      "106",
      "208",
      "100"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série phonique piège n°25 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "Z",
      "K",
      "V"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°26 : Complétez la suite arithmétique : 27, 30, 33, 36, 39, ?",
    "options": [
      "45",
      "44",
      "42",
      "39"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série alphabétique n°27 : Complétez la suite de lettres : C, G, K, O, S, ?",
    "options": [
      "W",
      "Y",
      "X",
      "V"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°28 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "150",
      "144",
      "139",
      "24"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Matrice 3x3 n°29 : Quelle est la valeur manquante ?<br>29 &nbsp;&nbsp; 58 &nbsp;&nbsp; 116<br>30 &nbsp;&nbsp; 60 &nbsp;&nbsp; 120<br>31 &nbsp;&nbsp; 62 &nbsp;&nbsp; ?",
    "options": [
      "248",
      "120",
      "126",
      "124"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série phonique piège n°30 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "V",
      "K",
      "Z",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série numérique n°31 : Complétez la suite arithmétique : 32, 35, 38, 41, 44, ?",
    "options": [
      "44",
      "47",
      "50",
      "49"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°32 : Complétez la suite de lettres : B, E, H, K, N, ?",
    "options": [
      "R",
      "P",
      "S",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série des carrés parfaits n°33 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "49",
      "44",
      "14"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Matrice 3x3 n°34 : Quelle est la valeur manquante ?<br>34 &nbsp;&nbsp; 68 &nbsp;&nbsp; 136<br>35 &nbsp;&nbsp; 70 &nbsp;&nbsp; 140<br>36 &nbsp;&nbsp; 72 &nbsp;&nbsp; ?",
    "options": [
      "140",
      "146",
      "144",
      "288"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°35 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "Z",
      "K",
      "V",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série numérique n°36 : Complétez la suite arithmétique : 37, 40, 43, 46, 49, ?",
    "options": [
      "49",
      "52",
      "55",
      "54"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°37 : Complétez la suite de lettres : A, C, E, G, I, ?",
    "options": [
      "L",
      "K",
      "M",
      "J"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série des carrés parfaits n°38 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "139",
      "150",
      "24",
      "144"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°39 : Quelle est la valeur manquante ?<br>39 &nbsp;&nbsp; 78 &nbsp;&nbsp; 156<br>40 &nbsp;&nbsp; 80 &nbsp;&nbsp; 160<br>41 &nbsp;&nbsp; 82 &nbsp;&nbsp; ?",
    "options": [
      "328",
      "164",
      "166",
      "160"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série phonique piège n°40 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "Z",
      "K",
      "T",
      "V"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série numérique n°41 : Complétez la suite arithmétique : 42, 45, 48, 51, 54, ?",
    "options": [
      "60",
      "57",
      "59",
      "54"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°42 : Complétez la suite de lettres : F, J, N, R, V, ?",
    "options": [
      "Z",
      "[",
      "Y",
      "\\"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°43 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "44",
      "14",
      "55",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°44 : Quelle est la valeur manquante ?<br>44 &nbsp;&nbsp; 88 &nbsp;&nbsp; 176<br>45 &nbsp;&nbsp; 90 &nbsp;&nbsp; 180<br>46 &nbsp;&nbsp; 92 &nbsp;&nbsp; ?",
    "options": [
      "180",
      "368",
      "184",
      "186"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°45 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "Z",
      "K"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°46 : Complétez la suite arithmétique : 47, 50, 53, 56, 59, ?",
    "options": [
      "64",
      "65",
      "59",
      "62"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série alphabétique n°47 : Complétez la suite de lettres : E, H, K, N, Q, ?",
    "options": [
      "V",
      "U",
      "T",
      "S"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°48 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "150",
      "24",
      "144",
      "139"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Matrice 3x3 n°49 : Quelle est la valeur manquante ?<br>49 &nbsp;&nbsp; 98 &nbsp;&nbsp; 196<br>50 &nbsp;&nbsp; 100 &nbsp;&nbsp; 200<br>51 &nbsp;&nbsp; 102 &nbsp;&nbsp; ?",
    "options": [
      "204",
      "206",
      "408",
      "200"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série phonique piège n°50 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "K",
      "T",
      "Z",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série numérique n°51 : Complétez la suite arithmétique : 52, 55, 58, 61, 64, ?",
    "options": [
      "64",
      "69",
      "70",
      "67"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série alphabétique n°52 : Complétez la suite de lettres : D, F, H, J, L, ?",
    "options": [
      "P",
      "M",
      "N",
      "O"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°53 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "55",
      "44",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°54 : Quelle est la valeur manquante ?<br>54 &nbsp;&nbsp; 108 &nbsp;&nbsp; 216<br>55 &nbsp;&nbsp; 110 &nbsp;&nbsp; 220<br>56 &nbsp;&nbsp; 112 &nbsp;&nbsp; ?",
    "options": [
      "220",
      "226",
      "448",
      "224"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série phonique piège n°55 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "K",
      "Z"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°56 : Complétez la suite arithmétique : 57, 60, 63, 66, 69, ?",
    "options": [
      "75",
      "72",
      "74",
      "69"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°57 : Complétez la suite de lettres : C, G, K, O, S, ?",
    "options": [
      "X",
      "Y",
      "V",
      "W"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série des carrés parfaits n°58 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "150",
      "139",
      "144",
      "24"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Matrice 3x3 n°59 : Quelle est la valeur manquante ?<br>59 &nbsp;&nbsp; 118 &nbsp;&nbsp; 236<br>60 &nbsp;&nbsp; 120 &nbsp;&nbsp; 240<br>61 &nbsp;&nbsp; 122 &nbsp;&nbsp; ?",
    "options": [
      "488",
      "246",
      "240",
      "244"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série phonique piège n°60 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "Z",
      "K"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°61 : Complétez la suite arithmétique : 62, 65, 68, 71, 74, ?",
    "options": [
      "79",
      "77",
      "80",
      "74"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°62 : Complétez la suite de lettres : B, E, H, K, N, ?",
    "options": [
      "R",
      "P",
      "Q",
      "S"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°63 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "44",
      "14",
      "55",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°64 : Quelle est la valeur manquante ?<br>64 &nbsp;&nbsp; 128 &nbsp;&nbsp; 256<br>65 &nbsp;&nbsp; 130 &nbsp;&nbsp; 260<br>66 &nbsp;&nbsp; 132 &nbsp;&nbsp; ?",
    "options": [
      "264",
      "528",
      "260",
      "266"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série phonique piège n°65 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "K",
      "V",
      "T",
      "Z"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série numérique n°66 : Complétez la suite arithmétique : 67, 70, 73, 76, 79, ?",
    "options": [
      "79",
      "84",
      "82",
      "85"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série alphabétique n°67 : Complétez la suite de lettres : A, C, E, G, I, ?",
    "options": [
      "K",
      "L",
      "J",
      "M"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°68 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "144",
      "24",
      "150",
      "139"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Matrice 3x3 n°69 : Quelle est la valeur manquante ?<br>69 &nbsp;&nbsp; 138 &nbsp;&nbsp; 276<br>70 &nbsp;&nbsp; 140 &nbsp;&nbsp; 280<br>71 &nbsp;&nbsp; 142 &nbsp;&nbsp; ?",
    "options": [
      "284",
      "568",
      "286",
      "280"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série phonique piège n°70 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "K",
      "Z",
      "T",
      "V"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série numérique n°71 : Complétez la suite arithmétique : 72, 75, 78, 81, 84, ?",
    "options": [
      "87",
      "84",
      "89",
      "90"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série alphabétique n°72 : Complétez la suite de lettres : F, J, N, R, V, ?",
    "options": [
      "Z",
      "[",
      "Y",
      "\\"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°73 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "55",
      "44",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°74 : Quelle est la valeur manquante ?<br>74 &nbsp;&nbsp; 148 &nbsp;&nbsp; 296<br>75 &nbsp;&nbsp; 150 &nbsp;&nbsp; 300<br>76 &nbsp;&nbsp; 152 &nbsp;&nbsp; ?",
    "options": [
      "306",
      "300",
      "608",
      "304"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série phonique piège n°75 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "Z",
      "K",
      "V",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série numérique n°76 : Complétez la suite arithmétique : 77, 80, 83, 86, 89, ?",
    "options": [
      "89",
      "92",
      "95",
      "94"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°77 : Complétez la suite de lettres : E, H, K, N, Q, ?",
    "options": [
      "T",
      "S",
      "U",
      "V"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série des carrés parfaits n°78 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "150",
      "139",
      "24",
      "144"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°79 : Quelle est la valeur manquante ?<br>79 &nbsp;&nbsp; 158 &nbsp;&nbsp; 316<br>80 &nbsp;&nbsp; 160 &nbsp;&nbsp; 320<br>81 &nbsp;&nbsp; 162 &nbsp;&nbsp; ?",
    "options": [
      "326",
      "320",
      "324",
      "648"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°80 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "K",
      "T",
      "Z",
      "V"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série numérique n°81 : Complétez la suite arithmétique : 82, 85, 88, 91, 94, ?",
    "options": [
      "94",
      "97",
      "99",
      "100"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°82 : Complétez la suite de lettres : D, F, H, J, L, ?",
    "options": [
      "O",
      "P",
      "N",
      "M"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°83 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "49",
      "55",
      "44"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Matrice 3x3 n°84 : Quelle est la valeur manquante ?<br>84 &nbsp;&nbsp; 168 &nbsp;&nbsp; 336<br>85 &nbsp;&nbsp; 170 &nbsp;&nbsp; 340<br>86 &nbsp;&nbsp; 172 &nbsp;&nbsp; ?",
    "options": [
      "688",
      "340",
      "344",
      "346"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°85 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "Z",
      "V",
      "K",
      "T"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série numérique n°86 : Complétez la suite arithmétique : 87, 90, 93, 96, 99, ?",
    "options": [
      "99",
      "104",
      "102",
      "105"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série alphabétique n°87 : Complétez la suite de lettres : C, G, K, O, S, ?",
    "options": [
      "Y",
      "X",
      "W",
      "V"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°88 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "144",
      "139",
      "150",
      "24"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Matrice 3x3 n°89 : Quelle est la valeur manquante ?<br>89 &nbsp;&nbsp; 178 &nbsp;&nbsp; 356<br>90 &nbsp;&nbsp; 180 &nbsp;&nbsp; 360<br>91 &nbsp;&nbsp; 182 &nbsp;&nbsp; ?",
    "options": [
      "366",
      "360",
      "364",
      "728"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°90 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "K",
      "Z"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°91 : Complétez la suite arithmétique : 92, 95, 98, 101, 104, ?",
    "options": [
      "109",
      "107",
      "104",
      "110"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série alphabétique n°92 : Complétez la suite de lettres : B, E, H, K, N, ?",
    "options": [
      "S",
      "P",
      "Q",
      "R"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série des carrés parfaits n°93 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "49",
      "14",
      "44"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Matrice 3x3 n°94 : Quelle est la valeur manquante ?<br>94 &nbsp;&nbsp; 188 &nbsp;&nbsp; 376<br>95 &nbsp;&nbsp; 190 &nbsp;&nbsp; 380<br>96 &nbsp;&nbsp; 192 &nbsp;&nbsp; ?",
    "options": [
      "380",
      "768",
      "384",
      "386"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°95 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "V",
      "K",
      "Z"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°96 : Complétez la suite arithmétique : 97, 100, 103, 106, 109, ?",
    "options": [
      "115",
      "114",
      "112",
      "109"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série alphabétique n°97 : Complétez la suite de lettres : A, C, E, G, I, ?",
    "options": [
      "M",
      "K",
      "J",
      "L"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "Série des carrés parfaits n°98 : Complétez la suite : 64, 81, 100, 121, ?",
    "options": [
      "144",
      "139",
      "150",
      "24"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Matrice 3x3 n°99 : Quelle est la valeur manquante ?<br>99 &nbsp;&nbsp; 198 &nbsp;&nbsp; 396<br>100 &nbsp;&nbsp; 200 &nbsp;&nbsp; 400<br>101 &nbsp;&nbsp; 202 &nbsp;&nbsp; ?",
    "options": [
      "406",
      "808",
      "400",
      "404"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série phonique piège n°100 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "K",
      "Z",
      "V"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "Série numérique n°101 : Complétez la suite arithmétique : 102, 105, 108, 111, 114, ?",
    "options": [
      "114",
      "120",
      "119",
      "117"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série alphabétique n°102 : Complétez la suite de lettres : F, J, N, R, V, ?",
    "options": [
      "Y",
      "\\",
      "[",
      "Z"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Série des carrés parfaits n°103 : Complétez la suite : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "14",
      "44",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "Matrice 3x3 n°104 : Quelle est la valeur manquante ?<br>104 &nbsp;&nbsp; 208 &nbsp;&nbsp; 416<br>105 &nbsp;&nbsp; 210 &nbsp;&nbsp; 420<br>106 &nbsp;&nbsp; 212 &nbsp;&nbsp; ?",
    "options": [
      "426",
      "420",
      "424",
      "848"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "Série phonique piège n°105 : Complétez la suite de lettres (consonnes se terminant par le son 'é') : B, C, D, G, P, ?",
    "options": [
      "T",
      "K",
      "Z",
      "V"
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
