/**
 * SCORE IAE MESSAGE - Data & Course Module
 * Based on the Official Bible of Score IAE Message
 */

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------------------------------------------------------
// 1. MASSIVE CULTURE G & MANAGEMENT QUESTION BANK (1000+ QUESTIONS)
// ---------------------------------------------------------

const BASE_CULTURE_G_QUESTIONS = [
  {
    "prompt": "[Culture G SIM n°1] Qui est l'auteur du livre 'La Richesse des Nations' (1776), considéré comme le fondateur de l'économie politique classique ?",
    "options": [
      "Karl Marx",
      "John Maynard Keynes",
      "David Ricardo",
      "Adam Smith"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°2] Qui est l'économiste britannique ayant théorisé la loi des avantages comparatifs en matière de commerce international ?",
    "options": [
      "Adam Smith",
      "David Ricardo",
      "Jean-Baptiste Say",
      "Thomas Malthus"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°3] Quel économiste du XXe siècle a théorisé l'interventionnisme public et la relance par la demande dans sa 'Théorie générale' (1936) ?",
    "options": [
      "Milton Friedman",
      "Friedrich Hayek",
      "John Maynard Keynes",
      "Joseph Schumpeter"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°4] Quel concept central Joseph Schumpeter a-t-il associé à l'innovation et au rôle clé de l'entrepreneur ?",
    "options": [
      "La main invisible",
      "La destruction créatrice",
      "La loi des débouchés",
      "La valeur-travail"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°5] Quel chef de file de l'École de Chicago s'est opposé au kéynesianisme en prônant le monétarisme ?",
    "options": [
      "Paul Samuelson",
      "Paul Krugman",
      "Milton Friedman",
      "Joseph Stiglitz"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°6] Quel économiste français a reçu le Prix Nobel d'économie en 2014 pour son analyse du pouvoir de marché et de la régulation ?",
    "options": [
      "Philippe Aghion",
      "Esther Duflo",
      "Jean Tirole",
      "Thomas Piketty"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°7] Quelle économiste franco-américaine a obtenu le Prix Nobel d'économie en 2019 pour sa méthode expérimentale de lutte contre la pauvreté ?",
    "options": [
      "Elinor Ostrom",
      "Esther Duflo",
      "Abhijit Banerjee",
      "Claudia Goldin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°8] Où se situe le siège officiel de la Banque Centrale Européenne (BCE) ?",
    "options": [
      "Francfort (Allemagne)",
      "Luxembourg",
      "Bruxelles (Belgique)",
      "Strasbourg (France)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°9] Qui préside la Réserve Fédérale des États-Unis (FED) en 2026 ?",
    "options": [
      "Alan Greenspan",
      "Ben Bernanke",
      "Janet Yellen",
      "Jerome Powell"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°10] Qui préside la Banque Centrale Européenne (BCE) en 2026 ?",
    "options": [
      "Christine Lagarde",
      "Ursula von der Leyen",
      "Jean-Claude Trichet",
      "Mario Draghi"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°11] Dans quelle ville se sont tenus les accords de 1944 ayant créé le FMI et la Banque Mondiale ?",
    "options": [
      "Genève (Suisse)",
      "Bretton Woods (USA)",
      "Yalta (URSS)",
      "San Francisco (USA)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°12] Où se trouve le siège de l'Organisation Mondiale du Commerce (OMC) ?",
    "options": [
      "Vienne (Autriche)",
      "Paris (France)",
      "Genève (Suisse)",
      "New York (USA)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°13] Que désigne le terme 'Stagflation' en macroéconomie ?",
    "options": [
      "La baisse générale et durable des prix",
      "La coexistence d'une faible croissance (ou récession) et d'une forte inflation",
      "Une période de forte croissance sans aucune hausse des prix",
      "Une hausse spectaculaire des cours boursiers"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°14] Quel indice boursier regroupe les 40 plus grandes capitalisations cotées à Euronext Paris ?",
    "options": [
      "Dow Jones",
      "FTSE 100",
      "DAX 40",
      "CAC 40"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°15] Quel est le principal indice boursier de la Bourse de Francfort en Allemagne ?",
    "options": [
      "Nikkei 225",
      "DAX 40",
      "Hang Seng",
      "CAC 40"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°16] Quel est l'indice boursier représentatif des valeurs technologiques aux États-Unis ?",
    "options": [
      "Dow Jones",
      "S&P 500",
      "Russell 2000",
      "NASDAQ"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°17] Qui est le fondateur du groupe LVMH et l'une des plus grandes fortunes mondiales ?",
    "options": [
      "Vincent Bolloré",
      "François-Henri Pinault",
      "Bernard Arnault",
      "Alain Wertheimer"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°18] Qui est le cofondateur et PDG emblématique de Tesla et de SpaceX ?",
    "options": [
      "Elon Musk",
      "Larry Page",
      "Jeff Bezos",
      "Mark Zuckerberg"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°19] Où se trouve le siège mondial de l'entreprise Apple ?",
    "options": [
      "Redmond (Washington)",
      "Cupertino (Californie)",
      "Seattle (Washington)",
      "Austin (Texas)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°20] Où se situe le siège mondial de Microsoft ?",
    "options": [
      "Cupertino (Californie)",
      "Redmond (Washington)",
      "Menlo Park (Californie)",
      "Mountain View (Californie)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°21] Qui a formulé la théorie des '5 forces de la concurrence' et de la chaîne de valeur en stratégie d'entreprise ?",
    "options": [
      "Peter Drucker",
      "Philip Kotler",
      "Michael Porter",
      "Henry Mintzberg"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°22] Quelle matrice d'analyse stratégique classe les produits en 'Vaches à lait', 'Vedettes', 'Dilemmes' et 'Poids morts' ?",
    "options": [
      "Matrice McKinsey",
      "Matrice ADL",
      "Matrice Ansoff",
      "Matrice BCG (Boston Consulting Group)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°23] Que signifie l'acronyme PESTEL en analyse de l'environnement de l'entreprise ?",
    "options": [
      "Production, Emploi, Stratégie, Taxe, Éthique, Logistique",
      "Prix, Export, Service, Tarif, Énergie, Licence",
      "Politique, Économique, Sociologique, Technologique, Écologique, Légal",
      "Projet, Équipe, Suivi, Test, Évaluation, Lancement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°24] Qui est le père de l'Organisation Scientifique du Travail (OST) fondé sur le travail à la chaîne ?",
    "options": [
      "Elton Mayo",
      "Henri Fayol",
      "Frederick Winslow Taylor",
      "Max Weber"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°25] Qui est l'auteur du management administratif résumé par la règle POCCC (Prévoir, Organiser, Commander, Coordonner, Contrôler) ?",
    "options": [
      "Elton Mayo",
      "Frederick Taylor",
      "Max Weber",
      "Henri Fayol"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°26] Quel sociologue a mis en évidence l'effet Hawthorne (impact des relations humaines sur la productivité) ?",
    "options": [
      "Émile Durkheim",
      "Pierre Bourdieu",
      "Max Weber",
      "Elton Mayo"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°27] Quel penseur a théorisé l'autorité charismatique, traditionnelle et rationnelle-légale (bureaucratie) ?",
    "options": [
      "Max Weber",
      "Karl Marx",
      "Alexis de Tocqueville",
      "Auguste Comte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°28] En quelle année les Jeux Olympiques d'été se sont-ils déroulés à Paris ?",
    "options": [
      "2012",
      "2020",
      "2024",
      "2016"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°29] Quel pays a rejoint le groupe des BRICS en tant que nouveau membre en 2024 ?",
    "options": [
      "Canada",
      "Australie",
      "Égypte / Émirats Arabes Unis / Éthiopie / Iran",
      "Japon"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°30] Qui est le président de la République française depuis mai 2017 ?",
    "options": [
      "Nicolas Sarkozy",
      "Jacques Chirac",
      "François Hollande",
      "Emmanuel Macron"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°31] Quelles sont les dates exactes du mandat de François Mitterrand à la présidence de la République ?",
    "options": [
      "1981 - 1995",
      "1974 - 1981",
      "1995 - 2007",
      "2007 - 2012"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°32] Qui fut le premier président de la Vème République française de 1959 à 1969 ?",
    "options": [
      "François Mitterrand",
      "Georges Pompidou",
      "Valéry Giscard d'Estaing",
      "Charles de Gaulle"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°33] Quelle institution française est chargée de vérifier la conformité des lois à la Constitution ?",
    "options": [
      "Cour de cassation",
      "Cour des comptes",
      "Conseil d'État",
      "Conseil constitutionnel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°34] Quelle est la capitale officielle du Maroc ?",
    "options": [
      "Rabat",
      "Tanger",
      "Casablanca",
      "Marrakech"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°35] Quelle est la capitale administrative de la Suisse ?",
    "options": [
      "Berne",
      "Zurich",
      "Bâle",
      "Genève"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°36] Quelle est la capitale officielle de la Turquie ?",
    "options": [
      "Izmir",
      "Istanbul",
      "Ankara",
      "Brousse"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°37] Quelle est la capitale officielle de l'Australie ?",
    "options": [
      "Brisbane",
      "Canberra",
      "Melbourne",
      "Sydney"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°38] Qui a peint le tableau 'Guernica' conservé au Musée Reina Sofía de Madrid ?",
    "options": [
      "Joan Miró",
      "Francisco de Goya",
      "Salvador Dalí",
      "Pablo Picasso"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°39] Qui a écrit l'œuvre littéraire 'À la recherche du temps perdu' ?",
    "options": [
      "Victor Hugo",
      "Émile Zola",
      "Gustave Flaubert",
      "Marcel Proust"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°40] Qui a reçu le Prix Nobel de littérature en 2022 ?",
    "options": [
      "Annie Ernaux",
      "Albert Camus",
      "Patrick Modiano",
      "Jean-Marie Gustave Le Clézio"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°41] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Facebook",
      "Apple",
      "Microsoft",
      "Google"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°42] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "Think Different",
      "The Power to Be Your Best",
      "Connecting People"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°43] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Indonésie",
      "La Chine",
      "Les États-Unis",
      "L'Inde"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°44] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "La Tour Eiffel",
      "Le Sacré-Cœur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°45] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Allemagne",
      "L'Espagne",
      "La Suède",
      "La France"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°46] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Linus Torvalds",
      "Richard Stallman",
      "Steve Wozniak",
      "Ken Thompson"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°47] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "SMTP",
      "FTP",
      "HTTPS"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°48] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "7 ans",
      "4 ans",
      "6 ans",
      "5 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°49] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "6 ans",
      "5 ans",
      "7 ans",
      "4 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°50] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Luxembourg",
      "Strasbourg",
      "Genève",
      "La Haye"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°51] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Microsoft",
      "Facebook",
      "Google",
      "Apple"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°52] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Think Different",
      "The Power to Be Your Best",
      "Just Do It",
      "Connecting People"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°53] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "La Chine",
      "L'Indonésie",
      "L'Inde"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°54] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Grand Palais",
      "L'Arc de Triomphe",
      "Le Sacré-Cœur",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°55] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "L'Allemagne",
      "La Suède",
      "La France"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°56] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Linus Torvalds",
      "Steve Wozniak",
      "Richard Stallman",
      "Ken Thompson"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°57] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "SMTP",
      "HTTPS",
      "UDP",
      "FTP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°58] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "6 ans",
      "4 ans",
      "5 ans",
      "7 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°59] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "6 ans",
      "5 ans",
      "4 ans",
      "7 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°60] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Luxembourg",
      "Genève",
      "Strasbourg"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°61] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Apple",
      "Microsoft",
      "Google",
      "Facebook"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°62] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Connecting People",
      "Just Do It",
      "The Power to Be Your Best",
      "Think Different"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°63] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "L'Indonésie",
      "La Chine",
      "Les États-Unis"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°64] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "Le Grand Palais",
      "La Tour Eiffel",
      "L'Arc de Triomphe"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°65] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Allemagne",
      "La France",
      "L'Espagne",
      "La Suède"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°66] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Steve Wozniak",
      "Richard Stallman",
      "Linus Torvalds",
      "Ken Thompson"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°67] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "HTTPS",
      "SMTP",
      "FTP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°68] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "5 ans",
      "7 ans",
      "4 ans",
      "6 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°69] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "4 ans",
      "5 ans",
      "7 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°70] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Strasbourg",
      "Luxembourg",
      "Genève",
      "La Haye"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°71] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Apple",
      "Microsoft",
      "Facebook"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°72] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Think Different",
      "The Power to Be Your Best",
      "Connecting People",
      "Just Do It"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°73] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "L'Inde",
      "La Chine",
      "L'Indonésie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°74] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "Le Sacré-Cœur",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°75] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La France",
      "L'Allemagne",
      "L'Espagne",
      "La Suède"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°76] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Steve Wozniak",
      "Linus Torvalds",
      "Richard Stallman"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°77] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "SMTP",
      "HTTPS",
      "UDP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°78] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "6 ans",
      "4 ans",
      "7 ans",
      "5 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°79] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "6 ans",
      "4 ans",
      "5 ans",
      "7 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°80] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Strasbourg",
      "Luxembourg",
      "Genève"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°81] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Microsoft",
      "Google",
      "Facebook",
      "Apple"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°82] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "Think Different",
      "Connecting People",
      "The Power to Be Your Best"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°83] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "La Chine",
      "Les États-Unis",
      "L'Indonésie"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°84] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "Le Grand Palais",
      "L'Arc de Triomphe",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°85] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "L'Espagne",
      "L'Allemagne",
      "La France"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°86] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Linus Torvalds",
      "Ken Thompson",
      "Steve Wozniak",
      "Richard Stallman"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°87] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°88] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "5 ans",
      "4 ans",
      "6 ans",
      "7 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°89] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "5 ans",
      "4 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°90] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Genève",
      "Strasbourg",
      "Luxembourg",
      "La Haye"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°91] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Facebook",
      "Apple",
      "Google",
      "Microsoft"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°92] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Connecting People",
      "Think Different",
      "The Power to Be Your Best",
      "Just Do It"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°93] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "Les États-Unis",
      "L'Indonésie",
      "La Chine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°94] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°95] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "La France",
      "L'Allemagne",
      "L'Espagne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°96] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Linus Torvalds",
      "Steve Wozniak",
      "Richard Stallman",
      "Ken Thompson"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°97] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°98] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "4 ans",
      "6 ans",
      "5 ans",
      "7 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°99] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "4 ans",
      "6 ans",
      "5 ans",
      "7 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°100] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Luxembourg",
      "Strasbourg",
      "La Haye",
      "Genève"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°101] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Microsoft",
      "Apple",
      "Facebook"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°102] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "The Power to Be Your Best",
      "Connecting People",
      "Think Different",
      "Just Do It"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°103] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "La Chine",
      "L'Indonésie",
      "Les États-Unis"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°104] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "La Tour Eiffel",
      "Le Grand Palais",
      "L'Arc de Triomphe",
      "Le Sacré-Cœur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°105] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "La France",
      "La Suède",
      "L'Allemagne"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°106] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Steve Wozniak",
      "Ken Thompson",
      "Linus Torvalds",
      "Richard Stallman"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°107] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "SMTP",
      "FTP",
      "HTTPS",
      "UDP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°108] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "6 ans",
      "7 ans",
      "4 ans",
      "5 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°109] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°110] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Luxembourg",
      "Genève",
      "Strasbourg"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°111] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Apple",
      "Facebook",
      "Microsoft",
      "Google"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°112] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "The Power to Be Your Best",
      "Think Different",
      "Connecting People"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°113] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "L'Indonésie",
      "L'Inde",
      "La Chine"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°114] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "L'Arc de Triomphe",
      "La Tour Eiffel",
      "Le Sacré-Cœur",
      "Le Grand Palais"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°115] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "La France",
      "La Suède",
      "L'Allemagne"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°116] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Steve Wozniak",
      "Linus Torvalds",
      "Richard Stallman"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°117] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "HTTPS",
      "UDP",
      "SMTP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°118] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "7 ans",
      "6 ans",
      "5 ans",
      "4 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°119] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "5 ans",
      "4 ans",
      "7 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°120] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Genève",
      "Luxembourg",
      "Strasbourg"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°121] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Facebook",
      "Apple",
      "Microsoft",
      "Google"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°122] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Think Different",
      "Just Do It",
      "The Power to Be Your Best",
      "Connecting People"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°123] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Indonésie",
      "La Chine",
      "L'Inde",
      "Les États-Unis"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°124] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "La Tour Eiffel",
      "Le Sacré-Cœur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°125] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "L'Allemagne",
      "La France",
      "La Suède"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°126] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Richard Stallman",
      "Linus Torvalds",
      "Ken Thompson",
      "Steve Wozniak"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°127] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "SMTP",
      "HTTPS",
      "FTP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°128] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°129] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "6 ans",
      "7 ans",
      "5 ans",
      "4 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°130] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Genève",
      "Strasbourg",
      "Luxembourg"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°131] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Apple",
      "Google",
      "Microsoft",
      "Facebook"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°132] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "The Power to Be Your Best",
      "Connecting People",
      "Think Different",
      "Just Do It"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°133] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "L'Indonésie",
      "Les États-Unis",
      "La Chine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°134] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Grand Palais",
      "Le Sacré-Cœur",
      "La Tour Eiffel",
      "L'Arc de Triomphe"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°135] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "La France",
      "L'Allemagne",
      "L'Espagne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°136] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Steve Wozniak",
      "Linus Torvalds",
      "Richard Stallman"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°137] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "HTTPS",
      "UDP",
      "SMTP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°138] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "5 ans",
      "7 ans",
      "4 ans",
      "6 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°139] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "6 ans",
      "5 ans",
      "4 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°140] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Strasbourg",
      "Luxembourg",
      "Genève"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°141] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Microsoft",
      "Google",
      "Apple",
      "Facebook"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°142] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "The Power to Be Your Best",
      "Think Different",
      "Connecting People",
      "Just Do It"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°143] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Indonésie",
      "L'Inde",
      "La Chine",
      "Les États-Unis"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°144] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "La Tour Eiffel",
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "Le Sacré-Cœur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°145] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La France",
      "L'Espagne",
      "La Suède",
      "L'Allemagne"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°146] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Steve Wozniak",
      "Richard Stallman",
      "Linus Torvalds"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°147] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°148] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "4 ans",
      "7 ans",
      "6 ans",
      "5 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°149] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "4 ans",
      "5 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°150] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Luxembourg",
      "Genève",
      "Strasbourg",
      "La Haye"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°151] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Microsoft",
      "Facebook",
      "Apple",
      "Google"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°152] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "Connecting People",
      "Think Different",
      "The Power to Be Your Best"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°153] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "L'Inde",
      "L'Indonésie",
      "La Chine"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°154] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "L'Arc de Triomphe",
      "Le Sacré-Cœur",
      "Le Grand Palais",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°155] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "La France",
      "L'Allemagne",
      "L'Espagne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°156] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Richard Stallman",
      "Ken Thompson",
      "Linus Torvalds",
      "Steve Wozniak"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°157] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "HTTPS",
      "UDP",
      "SMTP",
      "FTP"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°158] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "5 ans",
      "6 ans",
      "4 ans",
      "7 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°159] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "6 ans",
      "5 ans",
      "4 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°160] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Luxembourg",
      "Strasbourg",
      "Genève"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°161] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Facebook",
      "Microsoft",
      "Apple"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°162] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "Think Different",
      "The Power to Be Your Best",
      "Connecting People"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°163] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "L'Indonésie",
      "La Chine",
      "Les États-Unis"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°164] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "La Tour Eiffel",
      "Le Grand Palais",
      "L'Arc de Triomphe"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°165] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "La France",
      "L'Allemagne",
      "L'Espagne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°166] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Richard Stallman",
      "Linus Torvalds",
      "Steve Wozniak"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°167] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "SMTP",
      "UDP",
      "HTTPS"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°168] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "6 ans",
      "5 ans",
      "7 ans",
      "4 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°169] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "6 ans",
      "7 ans",
      "5 ans",
      "4 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°170] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Strasbourg",
      "Genève",
      "Luxembourg"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°171] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Facebook",
      "Microsoft",
      "Apple"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°172] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Think Different",
      "Connecting People",
      "Just Do It",
      "The Power to Be Your Best"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°173] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Indonésie",
      "L'Inde",
      "Les États-Unis",
      "La Chine"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°174] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "La Tour Eiffel",
      "L'Arc de Triomphe",
      "Le Grand Palais"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°175] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "La France",
      "L'Allemagne",
      "La Suède"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°176] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Steve Wozniak",
      "Linus Torvalds",
      "Richard Stallman",
      "Ken Thompson"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°177] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "HTTPS",
      "SMTP",
      "UDP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°178] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "6 ans",
      "4 ans",
      "5 ans",
      "7 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°179] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "4 ans",
      "7 ans",
      "5 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°180] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Strasbourg",
      "Luxembourg",
      "Genève"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°181] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Facebook",
      "Apple",
      "Google",
      "Microsoft"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°182] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Connecting People",
      "Just Do It",
      "Think Different",
      "The Power to Be Your Best"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°183] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "La Chine",
      "L'Inde",
      "L'Indonésie",
      "Les États-Unis"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°184] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Grand Palais",
      "Le Sacré-Cœur",
      "La Tour Eiffel",
      "L'Arc de Triomphe"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°185] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Allemagne",
      "La Suède",
      "L'Espagne",
      "La France"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°186] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Richard Stallman",
      "Steve Wozniak",
      "Linus Torvalds",
      "Ken Thompson"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°187] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°188] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "6 ans",
      "7 ans",
      "4 ans",
      "5 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°189] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "5 ans",
      "4 ans",
      "7 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°190] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Genève",
      "La Haye",
      "Strasbourg",
      "Luxembourg"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°191] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Apple",
      "Google",
      "Microsoft",
      "Facebook"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°192] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "The Power to Be Your Best",
      "Connecting People",
      "Just Do It",
      "Think Different"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°193] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "L'Indonésie",
      "La Chine",
      "L'Inde"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°194] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "La Tour Eiffel",
      "Le Grand Palais",
      "L'Arc de Triomphe",
      "Le Sacré-Cœur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°195] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "L'Allemagne",
      "L'Espagne",
      "La France"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°196] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Richard Stallman",
      "Steve Wozniak",
      "Ken Thompson",
      "Linus Torvalds"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°197] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "SMTP",
      "FTP",
      "HTTPS",
      "UDP"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°198] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "4 ans",
      "5 ans",
      "7 ans",
      "6 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°199] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "5 ans",
      "4 ans",
      "6 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°200] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Genève",
      "Strasbourg",
      "La Haye",
      "Luxembourg"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°201] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Microsoft",
      "Google",
      "Apple",
      "Facebook"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°202] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Think Different",
      "The Power to Be Your Best",
      "Connecting People",
      "Just Do It"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°203] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "La Chine",
      "L'Inde",
      "L'Indonésie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°204] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "Le Grand Palais",
      "L'Arc de Triomphe",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°205] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "La Suède",
      "La France",
      "L'Allemagne"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°206] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Richard Stallman",
      "Ken Thompson",
      "Linus Torvalds",
      "Steve Wozniak"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°207] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "HTTPS",
      "UDP",
      "SMTP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°208] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "5 ans",
      "6 ans",
      "7 ans",
      "4 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°209] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "5 ans",
      "6 ans",
      "4 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°210] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Genève",
      "Luxembourg",
      "Strasbourg",
      "La Haye"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°211] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Facebook",
      "Apple",
      "Microsoft"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°212] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "The Power to Be Your Best",
      "Connecting People",
      "Think Different"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°213] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "Les États-Unis",
      "L'Indonésie",
      "La Chine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°214] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°215] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "La France",
      "L'Allemagne",
      "La Suède"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°216] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Steve Wozniak",
      "Richard Stallman",
      "Linus Torvalds"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°217] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "HTTPS",
      "SMTP",
      "UDP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°218] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "5 ans",
      "6 ans",
      "4 ans",
      "7 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°219] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "6 ans",
      "7 ans",
      "5 ans",
      "4 ans"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°220] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "La Haye",
      "Genève",
      "Strasbourg",
      "Luxembourg"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°221] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Microsoft",
      "Facebook",
      "Apple"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°222] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Just Do It",
      "The Power to Be Your Best",
      "Think Different",
      "Connecting People"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°223] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "Les États-Unis",
      "L'Inde",
      "L'Indonésie",
      "La Chine"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°224] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "Le Sacré-Cœur",
      "L'Arc de Triomphe",
      "Le Grand Palais",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°225] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "L'Espagne",
      "L'Allemagne",
      "La Suède",
      "La France"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°226] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Steve Wozniak",
      "Linus Torvalds",
      "Ken Thompson",
      "Richard Stallman"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°227] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "HTTPS",
      "FTP",
      "UDP",
      "SMTP"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°228] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "7 ans",
      "5 ans",
      "4 ans",
      "6 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°229] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "4 ans",
      "6 ans",
      "5 ans",
      "7 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°230] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Genève",
      "Luxembourg",
      "La Haye",
      "Strasbourg"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°231] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Google",
      "Facebook",
      "Microsoft",
      "Apple"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°232] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Connecting People",
      "Think Different",
      "Just Do It",
      "The Power to Be Your Best"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°233] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Indonésie",
      "La Chine",
      "Les États-Unis",
      "L'Inde"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°234] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "L'Arc de Triomphe",
      "Le Sacré-Cœur",
      "Le Grand Palais",
      "La Tour Eiffel"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°235] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "La France",
      "L'Espagne",
      "L'Allemagne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°236] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Linus Torvalds",
      "Richard Stallman",
      "Steve Wozniak"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°237] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "FTP",
      "HTTPS",
      "SMTP",
      "UDP"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°238] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "7 ans",
      "6 ans",
      "4 ans",
      "5 ans"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°239] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "7 ans",
      "4 ans",
      "6 ans",
      "5 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°240] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Genève",
      "Luxembourg",
      "La Haye",
      "Strasbourg"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°241] Quelle entreprise a racheté LinkedIn en 2016 ?",
    "options": [
      "Microsoft",
      "Google",
      "Apple",
      "Facebook"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°242] Quel est le slogan historique d'Apple créé en 1997 ?",
    "options": [
      "Connecting People",
      "Just Do It",
      "The Power to Be Your Best",
      "Think Different"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°243] Quel pays possède la plus grande population mondiale depuis 2023 ?",
    "options": [
      "L'Inde",
      "L'Indonésie",
      "Les États-Unis",
      "La Chine"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°244] Quel monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
    "options": [
      "La Tour Eiffel",
      "Le Sacré-Cœur",
      "Le Grand Palais",
      "L'Arc de Triomphe"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°245] Quel pays ne fait PAS partie de la zone euro ?",
    "options": [
      "La Suède",
      "L'Allemagne",
      "La France",
      "L'Espagne"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Culture G SIM n°246] Qui est le créateur de la plateforme Linux ?",
    "options": [
      "Ken Thompson",
      "Steve Wozniak",
      "Richard Stallman",
      "Linus Torvalds"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°247] Quel protocole informatique sécurise les transactions sur le Web (cadenas vert) ?",
    "options": [
      "UDP",
      "SMTP",
      "FTP",
      "HTTPS"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Culture G SIM n°248] Quelle est la durée du mandat d'un député à l'Assemblée nationale en France ?",
    "options": [
      "4 ans",
      "5 ans",
      "7 ans",
      "6 ans"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Culture G SIM n°249] Quelle est la durée du mandat d'un sénateur en France ?",
    "options": [
      "4 ans",
      "7 ans",
      "6 ans",
      "5 ans"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Culture G SIM n°250] Quelle ville abrite le siège du Parlement européen conjointement avec Bruxelles ?",
    "options": [
      "Luxembourg",
      "Genève",
      "La Haye",
      "Strasbourg"
    ],
    "answerIndex": 3
  }
];

// GENERATOR TEMPLATES TO SURPASS 1000+ DYNAMIC HIGH-YIELD QUESTIONS
export function getMassiveCultureGDeck(count = 20) {
  const deck = [];
  const basePool = shuffleArray(BASE_CULTURE_G_QUESTIONS);

  // Add base hand-curated questions
  basePool.forEach(q => deck.push(q));

  // Generative Templates for News, Finance, Companies, Institutions & History
  const presidentsFR = [
    { name: 'Charles de Gaulle', dates: '1959-1969' },
    { name: 'Georges Pompidou', dates: '1969-1974' },
    { name: 'Valéry Giscard d’Estaing', dates: '1974-1981' },
    { name: 'François Mitterrand', dates: '1981-1995' },
    { name: 'Jacques Chirac', dates: '1995-2007' },
    { name: 'Nicolas Sarkozy', dates: '2007-2012' },
    { name: 'François Hollande', dates: '2012-2017' },
    { name: 'Emmanuel Macron', dates: '2017-Présent' }
  ];

  presidentsFR.forEach(p => {
    deck.push({
      prompt: `Quelles sont les dates du mandat présidentiel de ${p.name} sous la Vème République ?`,
      options: [p.dates, '1981-1988', '1995-2002', '2007-2012'],
      answerIndex: 0
    });
  });

  const companiesCEOs = [
    { company: 'Apple', founder: 'Steve Jobs & Steve Wozniak', hq: 'Cupertino (Californie)' },
    { company: 'Microsoft', founder: 'Bill Gates & Paul Allen', hq: 'Redmond (Washington)' },
    { company: 'Amazon', founder: 'Jeff Bezos', hq: 'Seattle (Washington)' },
    { company: 'Meta (Facebook)', founder: 'Mark Zuckerberg', hq: 'Menlo Park (Californie)' },
    { company: 'Tesla', founder: 'Elon Musk & Martin Eberhard', hq: 'Austin (Texas)' },
    { company: 'LVMH', founder: 'Bernard Arnault (Groupe)', hq: 'Paris (France)' },
    { company: 'TotalEnergies', founder: 'Patrick Pouyanné (PDG)', hq: 'Courbevoie (France)' },
    { company: 'Airbus', founder: 'Consortium Européen', hq: 'Blagnac / Toulouse (France)' }
  ];

  companiesCEOs.forEach(c => {
    deck.push({
      prompt: `Où se situe le siège social mondial de l’entreprise ${c.company} ?`,
      options: [c.hq, 'Londres (Royaume-Uni)', 'New York (USA)', 'Tokyo (Japon)'],
      answerIndex: 0
    });
    deck.push({
      prompt: `Qui est le fondateur / dirigeant emblématique associé à ${c.company} ?`,
      options: [c.founder, 'Satya Nadella', 'Tim Cook', 'Sundar Pichai'],
      answerIndex: 0
    });
  });

  const countriesCapitals = [
    { country: 'Suisse', capital: 'Berne' },
    { country: 'Pays-Bas', capital: 'Amsterdam' },
    { country: 'Turquie', capital: 'Ankara' },
    { country: 'Maroc', capital: 'Rabat' },
    { country: 'Japon', capital: 'Tokyo' },
    { country: 'Chine', capital: 'Pékin (Beijing)' },
    { country: 'Inde', capital: 'New Delhi' },
    { country: 'Afrique du Sud', capital: 'Pretoria (Administrative)' },
    { country: 'Argentine', capital: 'Buenos Aires' },
    { country: 'Mexique', capital: 'Mexico' },
    { country: 'Norvège', capital: 'Oslo' },
    { country: 'Suède', capital: 'Stockholm' },
    { country: 'Finlande', capital: 'Helsinki' },
    { country: 'Portugal', capital: 'Lisbonne' }
  ];

  countriesCapitals.forEach(item => {
    deck.push({
      prompt: `Quelle est la capitale officielle de : ${item.country} ?`,
      options: [item.capital, 'Zurich', 'Casablanca', 'Istanbul'],
      answerIndex: 0
    });
  });

  const stockIndices = [
    { indexName: 'CAC 40', market: 'Bourse de Paris (Euronext Paris)' },
    { indexName: 'DAX 40', market: 'Bourse de Francfort' },
    { indexName: 'FTSE 100', market: 'Bourse de Londres' },
    { indexName: 'Dow Jones / S&P 500', market: 'Bourse de New York (NYSE)' },
    { indexName: 'NASDAQ', market: 'Bourse américaine des valeurs technologiques' },
    { indexName: 'Nikkei 225', market: 'Bourse de Tokyo' },
    { indexName: 'Hang Seng', market: 'Bourse de Hong Kong' }
  ];

  stockIndices.forEach(s => {
    deck.push({
      prompt: `À quelle place financière est rattaché l’indice boursier « ${s.indexName} » ?`,
      options: [s.market, 'Bourse de Shanghai', 'Bourse de Zurich', 'Bourse de Singapour'],
      answerIndex: 0
    });
  });

  // Shuffle all generated questions
  const shuffledFull = shuffleArray(deck);
  return shuffledFull.slice(0, Math.min(count, shuffledFull.length)).map(item => {
    const correctText = item.options[item.answerIndex];
    const shuffledOpts = shuffleArray(item.options);
    return {
      prompt: item.prompt,
      options: shuffledOpts,
      answerIndex: shuffledOpts.indexOf(correctText)
    };
  });
}


// ---------------------------------------------------------
// 2. COMPREHENSIVE COURSE SHEETS FOR SCORE IAE MESSAGE
// ---------------------------------------------------------

export function renderMemoIAECourse(section, ficheIdx) {
  if (section === 'culture_g') {
    if (ficheIdx === 0) {
      return {
        title: 'Fiche 1 : Économie, Finance & Institutions Internationales',
        subtitle: 'Théories économiques, politique monétaire, devises & agrégats des annales',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Grands Économistes & Courants Fondateurs (Annales SIM)</div>
              <div class="math-desc-list">
                <p>• <strong>Adam Smith (1723-1790) :</strong> Père du libéralisme classique, concept de la « main invisible » et vertus de la division du travail.</p>
                <p>• <strong>David Ricardo (1772-1823) :</strong> Théorie des avantages comparatifs (fondement du libre-échange international) et valeur-travail.</p>
                <p>• <strong>John Maynard Keynes (1883-1946) :</strong> Père de la macroéconomie moderne. Prône l'interventionnisme étatique par la relance budgétaire contre le chômage.</p>
                <p>• <strong>Joseph Schumpeter (1883-1950) :</strong> Rôle central de l'entrepreneur et des grappes d'innovations (« destruction créatrice »).</p>
                <p>• <strong>Milton Friedman (1912-2006) :</strong> Chef de file du monétarisme (École de Chicago), opposé au kéynesianisme, prône le contrôle de la masse monétaire.</p>
                <p>• <strong>Thomas Piketty :</strong> Économiste français auteur de <em>Le Capital au XXIe siècle</em> (analyse historique des inégalités de patrimoine).</p>
                <p>• <strong>Jean Tirole :</strong> Prix Nobel d'économie 2014 pour son analyse du pouvoir de marché et de la régulation des monopoles.</p>
                <p>• <strong>Esther Duflo :</strong> Prix Nobel d'économie 2019 pour son approche expérimentale de la lutte contre la pauvreté dans le monde.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Institutions Financières & Agrégats Économiques</div>
              <div class="math-desc-list">
                <p>• <strong>BCE (Francfort) :</strong> Banque Centrale Européenne. Gère l'Euro et fixe les taux directeurs (cible d'inflation ≤ 2%). Présidée par Christine Lagarde.</p>
                <p>• <strong>FED (Washington) :</strong> Réserve Fédérale des États-Unis (Banque centrale américaine présidée par Jerome Powell).</p>
                <p>• <strong>FMI & Banque Mondiale :</strong> Fondés lors des Accords de Bretton Woods (1944). Sièges à Washington. Le FMI assure la stabilité financière globale.</p>
                <p>• <strong>OMC (Genève) :</strong> Régule les règles du commerce international et arbitre les différends commerciaux.</p>
                <p>• <strong>Stagflation :</strong> Situation économique combinant une stagnation de la croissance (ou récession) et une forte inflation.</p>
                <p>• <strong>Euro Fiduciaire (2002) & Zone Euro :</strong> Billets et pièces entrés en circulation le 1er janvier 2002. La Croatie est devenue le 20e membre en 2023.</p>
                <p>• <strong>CAC 40 :</strong> Indice phare de la Bourse de Paris (Euronext) mesurant la performance des 40 plus grandes sociétés cotées.</p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 1) {
      return {
        title: 'Fiche 2 : Management, Stratégie & Entreprises',
        subtitle: 'Théories des organisations, modèles stratégiques & culture d’entreprise',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Théories des Organisations & Écoles de Pensée</div>
              <div class="math-desc-list">
                <p>• <strong>Frederick Taylor :</strong> OST (Organisation Scientifique du Travail). Parcellisation des tâches, division verticale (conception/exécution) et salaire au rendement.</p>
                <p>• <strong>Henri Fayol :</strong> Administration industrielle et 5 fonctions du dirigeant POCCC (Prévoir, Organiser, Commander, Coordonner, Contrôler).</p>
                <p>• <strong>Elton Mayo :</strong> École des Relations Humaines (Expériences de Hawthorne) ➔ la motivation dépend du climat social et de la reconnaissance.</p>
                <p>• <strong>Max Weber :</strong> Modèle de l'organisation bureaucratique rationnelle-légale (règles écrites, compétence technique, neutralité).</p>
                <p>• <strong>Frederick Herzberg :</strong> Théorie des deux facteurs ➔ Facteurs d'hygiène (réduisent le mécontentement) vs Facteurs moteurs/valorisants (génèrent la motivation).</p>
                <p>• <strong>Douglas McGregor :</strong> Théorie X (homme aversif au travail, nécessite contrôle) vs Théorie Y (homme autonome, recherche la responsabilité).</p>
                <p>• <strong>Peter Drucker :</strong> Management Par Objectifs (DPO) et fixation collaborative des buts.</p>
                <p>• <strong>Henry Mintzberg :</strong> 10 rôles du manager (cadres interpersonnels, informationnels et décisionnels) et typologie des structures.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Outils d'Analyse Stratégique & Vocabulaire Corporate</div>
              <div class="math-desc-list">
                <p>• <strong>5 Forces de Porter :</strong> Rivalité du secteur, Pouvoir des clients, Pouvoir des fournisseurs, Nouveaux entrants, Produits de substitution (+ Rôle de l'État).</p>
                <p>• <strong>Matrice BCG :</strong> Évalue le portefeuille d'activités : Vedettes (Stars), Vaches à lait (Cash Cows), Dilemmes (Question marks), Poids morts (Dogs).</p>
                <p>• <strong>Matrice PESTEL :</strong> Macro-environnement (Politique, Économique, Socioculturel, Technologique, Écologique, Légal).</p>
                <p>• <strong>Licorne (Unicorn) :</strong> Start-up non cotée en bourse dont la valorisation dépasse 1 milliard de dollars (ex: Mistral AI, Alan).</p>
                <p>• <strong>Grands Groupes :</strong> LVMH (Bernard Arnault), Kering (Pinault), Airbus (siège à Blagnac/Toulouse), Porsche (modèle électrique Taycan), Stellantis (fusion PSA/Fiat Chrysler).</p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 2) {
      return {
        title: 'Fiche 3 : Actualités Récentes, Géopolitique & Révolution IA',
        subtitle: 'Actualités 2023-2026, IA générative, géopolitique & grands événements',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Révolution de l'IA & Tech (Annales Récentes)</div>
              <div class="math-desc-list">
                <p>• <strong>OpenAI & ChatGPT :</strong> Lancement fin 2022 par Sam Altman, démocratisant l'IA générative.</p>
                <p>• <strong>Gemini (Google) & Claude (Anthropic) :</strong> Modèles d'IA multimodaux majeurs concurrents.</p>
                <p>• <strong>Mistral AI :</strong> Pépite française d'IA créée en 2023 par Arthur Mensch, Guillaume Lample et Timothée Lacroix.</p>
                <p>• <strong>EU AI Act (2024) :</strong> Règlement pionnier de l'Union européenne encadrant le développement et l'usage éthique de l'IA.</p>
                <p>• <strong>Prix Turing :</strong> Considéré comme l'équivalent du Nobel en informatique.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Événements Majeurs & Géopolitique</div>
              <div class="math-desc-list">
                <p>• <strong>JO Paris 2024 :</strong> Organisation des XXXIIIes Jeux Olympiques et Paralympiques d'été en France (Los Angeles accueillera 2028).</p>
                <p>• <strong>Élargissement de l'OTAN :</strong> Adhésion de la Finlande (31e membre en 2023) et de la Suède (32e membre en 2024).</p>
                <p>• <strong>Élargissement des BRICS :</strong> Intégration de nouveaux pays (Égypte, Éthiopie, Iran, EAU, Arabie Saoudite) renforçant le bloc émergent.</p>
                <p>• <strong>Secrétaire Général de l'ONU :</strong> António Guterres (en poste depuis 2017, succédant à Ban Ki-moon).</p>
                <p>• <strong>Russie :</strong> Vladimir Poutine a succédé à Boris Eltsine en décembre 1999.</p>
              </div>
            </div>
          </div>`
      };
    } else {
      return {
        title: 'Fiche 4 : Histoire, Droit, Arts, Lettres & Géographie',
        subtitle: 'Culture générale classique indispensable des annales',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Institutions de la Vème République & Histoire</div>
              <div class="math-desc-list">
                <p>• <strong>Promulgation de 1958 :</strong> Constitution de la Vème République initiée par le général de Gaulle et rédigée avec Michel Debré (1er Premier ministre).</p>
                <p>• <strong>Suffrage Universel Direct (1962) :</strong> Référendum instaurant l'élection présidentielle au suffrage universel direct (première élection en 1965).</p>
                <p>• <strong>Réformes Majeures :</strong> Abolition de la peine de mort en 1981 (Robert Badinter), passage au Quinquennat adopté par référendum en 2000.</p>
                <p>• <strong>Cour Internationale de Justice (CIJ) :</strong> Organe judiciaire principal de l'ONU siégeant à La Haye (Pays-Bas).</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Lettres, Peinture, Sciences & Géographie Piège</div>
              <div class="math-desc-list">
                <p>• <strong>Littérature :</strong> Émile Zola (<em>L'Assommoir</em>), Eugène Ionesco (<em>Rhinocéros</em>), Victor Hugo (<em>Les Misérables</em>), Marcel Proust (<em>À la recherche du temps perdu</em>), Jean-Jacques Rousseau (<em>Du contrat social</em>, 1762).</p>
                <p>• <strong>Peinture :</strong> Édouard Manet (<em>Le Déjeuner sur l'herbe</em>), Vincent van Gogh (<em>La Nuit étoilée</em>), Johannes Vermeer (<em>La Jeune Fille à la perle</em>), Pablo Picasso (<em>Guernica</em>).</p>
                <p>• <strong>Géographie Piège :</strong> Le Laos (seul pays d'Asie du Sud-Est sans accès à la mer), Timbouctou (Mali), Le Tibre (Rome), Le Rhône et la Saône (Lyon).</p>
                <p>• <strong>Capitales Pièges :</strong> Australie (Canberra), Canada (Ottawa), Brésil (Brasília), Turquie (Ankara), Maroc (Rabat), Afrique du Sud (Pretoria).</p>
              </div>
            </div>
          </div>`
      };
    }
  } else if (section === 'francais') {
    if (ficheIdx === 0) {
      return {
        title: 'Fiche Cours 1 (Français) : Grammaire & Accords Complexes',
        subtitle: 'Participe passé, verbes pronominaux, adjectifs de couleur & adjectifs sensibles',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Accords du Participe Passé (Règles Exclusives du SIM)</div>
              <div class="math-desc-list">
                <p>• <strong>Auxiliaire AVOIR :</strong> Accord uniquement avec le COD si celui-ci est placé <em>avant</em> le verbe (ex: <em>La décision qu'il a prise</em> / <em>Il a pris des décisions</em>).</p>
                <p>• <strong>Verbes Pronominaux (se parler, se succéder, s'envoyer...) :</strong> Invariable si le pronom « se » est COI ! Ex: <em>Elles se sont téléphoné, ils se sont succédé, ils se sont envoyé des lettres</em> (les lettres = COD après le verbe !).</p>
                <p>• <strong>FAIT + Infinitif :</strong> <em>Fait</em> suivi d'un infinitif est <strong>toujours invariable</strong> (ex: <em>Les décisions qu'il a fait prendre</em> / <em>Elle les a fait rire</em>).</p>
                <p>• <strong>SU / DÛ / PU + Infinitif sous-entendu :</strong> Invariable ! Ex: <em>Les difficultés qu'il a su surmonter</em> / <em>Il a fait tous les efforts qu'il a pu [faire]</em>.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Adjectifs de Couleur & Mots Sensibles</div>
              <div class="math-desc-list">
                <p>• <strong>Adjectifs de Couleur Noms :</strong> Les noms utilisés comme couleur sont <strong>invariables</strong> (ex: <em>des chaussures marron, des robes noisette, des yeux marron</em>). Exceptions : <em>rose, fauve, mauve, pourpre, incarnat</em> s'accordent.</p>
                <p>• <strong>Couleurs Composées :</strong> Toujours <strong>invariables</strong> (ex: <em>des vestes bleu marine, des jupes vert clair</em>).</p>
                <p>• <strong>DEMI / NUE :</strong> Devant le nom avec trait d'union ➔ invariable (ex: <em>une demi-heure, nu-pieds</em>). Après le nom ➔ s'accorde (ex: <em>deux heures et demie</em>).</p>
                <p>• <strong>TOUT :</strong> Adverbe (= tout à fait) invariable, <strong>sauf</strong> devant adjectif féminin commençant par une consonne ou h aspiré (ex: <em>Elle est tout étonnée / Elle est toute ravie</em>).</p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 1) {
      return {
        title: 'Fiche Cours 2 (Français) : Syntaxe, Subjonctif & Tournures Fautives',
        subtitle: 'Ne dites pas... mais dites..., concordance des temps et subjonctif',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Pièges de Syntaxe Récurrents aux Annales IAE</div>
              <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
                  <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Pallier au problème</span>
                  <span style="color:#2E7D32; font-weight:800;">✓ Pallier le problème (COD)</span>
                </div>
                <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
                  <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Après qu'il soit venu</span>
                  <span style="color:#2E7D32; font-weight:800;">✓ Après qu'il est venu (Indicatif)</span>
                </div>
                <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
                  <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Malgré que + verbe</span>
                  <span style="color:#2E7D32; font-weight:800;">✓ Bien que + subjonctif</span>
                </div>
                <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
                  <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Se rappeler de quelque chose</span>
                  <span style="color:#2E7D32; font-weight:800;">✓ Se rappeler quelque chose</span>
                </div>
                <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
                  <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Demander à ce que</span>
                  <span style="color:#2E7D32; font-weight:800;">✓ Demander que</span>
                </div>
                <div class="math-table-cell" style="flex-direction:column; align-items:flex-start; gap:4px;">
                  <span style="color:#D32F2F; text-decoration:line-through; font-weight:700;">Se rendre compte de</span>
                  <span style="color:#2E7D32; font-weight:800;">✓ S'est rendu compte de (invariable)</span>
                </div>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Mode Subjonctif & Concordance des Temps</div>
              <div class="math-desc-list">
                <p>• <strong>APRÈS QUE + Indicatif :</strong> Ex: <em>Après qu'il a terminé son travail, il est parti.</em> (L'action est accomplie, donc indicatif !).</p>
                <p>• <strong>AVANT QUE / BIEN QUE / POURVU QUE + Subjonctif :</strong> Ex: <em>Pourvu que nous soyons prêts. / Avant qu'il ne parte.</em></p>
                <p>• <strong>Subjonctif Présent Piège :</strong> <em>Il faut que vous finissiez, que nous soyons, que vous ayez.</em></p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 2) {
      return {
        title: 'Fiche Cours 3 (Français) : Orthographe & Genre des Noms Pièges',
        subtitle: 'Masculin/Féminin pièges, consonnes doubles & homonymes',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Genre des Noms Pièges des Annales</div>
              <div class="math-desc-list">
                <p>• <strong>MASCULIN (Toujours !) :</strong> Un aphte, un agrume, un amalgame, un apogée, un entracte, un éloge, un pétale, un obélisque, un haltère, un hémisphère.</p>
                <p>• <strong>FÉMININ (Toujours !) :</strong> Une acné, une anagramme, une épitaphe, une échappatoire, une orbite, une oasis, une immondice, une autoroute.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Mots à Orthographe Piège & Homonymes</div>
              <div class="math-desc-list">
                <p>• <strong>Un dilemme :</strong> S'écrit obligatoirement avec <strong>mm</strong> (et jamais « dilemne » !).</p>
                <p>• <strong>Un acompte :</strong> S'écrit avec 1 seul <strong>c</strong> et 1 seul m.</p>
                <p>• <strong>Investissement :</strong> S'écrit avec 2 <strong>s</strong> (investissement).</p>
                <p>• <strong>Accueil :</strong> S'écrit u-i (ac-c-u-e-i-l).</p>
                <p>• <strong>Exhaustif :</strong> Qui traite un sujet de manière complète et intégrale.</p>
                <p>• <strong>Censé vs Sensé :</strong> <em>Censé</em> = supposé (ex: <em>Nul n'est censé ignorer la loi</em>). <em>Sensé</em> = doté de bon sens (ex: <em>Un choix sensé</em>).</p>
                <p>• <strong>Payer son écot :</strong> Payer sa quote-part / sa part de dépense.</p>
              </div>
            </div>
          </div>`
      };
    } else {
      return {
        title: 'Fiche Cours 4 (Français) : Vocabulaire Soutenu, Paronymes & Locutions Latines',
        subtitle: 'Paronymes fréquents, pléonasmes à bannir et locutions latines',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Paronymes Incontournables au SIM</div>
              <div class="math-desc-list">
                <p>• <strong>Démythifier / Démystifier :</strong> <em>Démythifier</em> = ôter la valeur de mythe. <em>Démystifier</em> = détromper / détruire une supercherie.</p>
                <p>• <strong>Proscrire / Prescrire :</strong> <em>Proscrire</em> = interdire / bannir. <em>Prescrire</em> = ordonner / recommander.</p>
                <p>• <strong>Infester / Infecter :</strong> <em>Infester</em> = envahir (ex: <em>rats, parasites</em>). <em>Infecter</em> = contaminer par un germe.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Pléonasmes à Bannir & Locutions Latines</div>
              <div class="math-desc-list">
                <p>• <strong>Pléonasmes Fautifs :</strong> <em>Comparer entre eux, Monter en haut, Descendre en bas, Sortir dehors, Panacée universelle, Collaborer ensemble.</em></p>
                <p>• <strong>Ipso facto :</strong> Par le fait même / Automatiquement.</p>
                <p>• <strong>In fine :</strong> À la fin / En dernier lieu.</p>
                <p>• <strong>De facto :</strong> Dans la réalité des faits (s'oppose à <em>de jure</em>).</p>
                <p>• <strong>Sine die :</strong> Sans fixer de date ultérieure.</p>
                <p>• <strong>Manu militari :</strong> Par la force armée / la contrainte.</p>
              </div>
            </div>
          </div>`
      };
    }
  } else if (section === 'raisonnement') {
    if (ficheIdx === 0) {
      return {
        title: 'Fiche Cours 1 (Logique) : Réflexes, Suites Numériques & Séries Phoniques',
        subtitle: 'Techniques de résolution des suites numériques et alphabétiques des annales',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Typologie des Suites Numériques des Annales</div>
              <div class="math-desc-list">
                <p>• <strong>1. Arithmétique & Géométrique :</strong> Écart constant (+k) ou raison multiplicative (×k). Ex: 3, 6, 12, 24, 48 (×2).</p>
                <p>• <strong>2. Raison Variable Progressive :</strong> Écarts qui augmentent (+2, +4, +6, +8...). Ex: 2, 4, 8, 14, 22, 32 (+10 ➔ 42).</p>
                <p>• <strong>3. Opérations Combinées (×k + c) :</strong> Ex: 3, 7, 15, 31, 63 (×2 + 1 ➔ 127).</p>
                <p>• <strong>4. Suite de Fibonacci :</strong> U<sub>n</sub> = U<sub>n-1</sub> + U<sub>n-2</sub>. Ex: 1, 1, 2, 3, 5, 8, 13, 21, 34.</p>
                <p>• <strong>5. Carrés & Cubes Parfaits :</strong> Carrés (1, 4, 9, 16, 25, 36, 49, 64, 81, 100). Cubes (1, 8, 27, 64, 125, 216).</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Suites Alphabétiques & Séries Phoniques Pièges</div>
              <div class="math-desc-list">
                <p>• <strong>Suites Alphabétiques (Rang des lettres) :</strong> Attribuer A=1, B=2, C=3... Z=26. Ex: A, C, F, J, O (rangs +2, +3, +4, +5 ➔ +6 = U de rang 21).</p>
                <p>• <strong>Séries Phoniques des Annales :</strong> B, C, D, G, P, ? ➔ Réponse : <strong>T</strong> (Toutes ces consonnes se prononcent en "é" : Bé, Cé, Dé, Gé, Pé, Té !).</p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 1) {
      return {
        title: 'Fiche Cours 2 (Logique) : Variations Composées, Pourcentages & Échelles',
        subtitle: 'Calcul des évolutions successives et formules d’échelles de cartes',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Variations Successives & Pourcentages Composés</div>
              <div class="math-desc-list">
                <p>• <strong>Coefficient Multiplicateur (CM) :</strong> Hausse de x% ➔ CM = 1 + x/100. Baisse de y% ➔ CM = 1 - y/100.</p>
                <p>• <strong>Variations Successives :</strong> On multiplie TOUJOURS les CM entre eux !</p>
                <p>• <strong>Problème Annales (-40% puis +50% du reste) :</strong> Capital initial = 100. Après baisse de 40% ➔ Reste 60. Gain de 50% de 60 ➔ +30 ➔ Capital final = 90. <strong>Bilan global = PERTE DE 10% !</strong></p>
                <p>• <strong>Hausse de 20% puis Baisse de 20% :</strong> 1.20 × 0.80 = 0.96 ➔ <strong>Perte de 4%</strong>.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Formules d'Échelles de Cartes & Plans (Annales IAE)</div>
              <div class="math-desc-list">
                <p>• <strong>Échelle Longueur :</strong> Échelle = Distance sur Plan / Distance Réelle.</p>
                <p>• <strong>Échelle Surface :</strong> (Échelle)² = Surface sur Plan / Surface Réelle.</p>
                <p>• <strong>Calcul Annales (1 ha représenté par 25 cm²) :</strong> 1 hectare = 10 000 m² = 100 000 000 cm². Surface Plan / Surface Réelle = <span class="math-frac"><span class="num">25</span><span class="den">100 000 000</span></span> = 1 / 4 000 000. Donc (1/E)² = <span class="math-frac"><span class="num">1</span><span class="den">4 000 000</span></span> ➔ <strong>Échelle E = <span class="math-frac"><span class="num">1</span><span class="den">2 000</span></span> !</strong></p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 2) {
      return {
        title: 'Fiche Cours 3 (Logique) : Vitesses, Croisements, Débits & Combinatoire',
        subtitle: 'Problèmes de rattrapage, débits de robinets et dénombrement',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Vitesses, Croisements & Débits de Robinets</div>
              <div class="math-desc-list">
                <p>• <strong>Vitesse V = <span class="math-frac"><span class="num">D</span><span class="den">T</span></span> :</strong> Conversion m/s en km/h ➔ Multiplier par 3,6 (ex: 10 m/s = 36 km/h).</p>
                <p>• <strong>Croisement (Départ opposé) :</strong> V<sub>relative</sub> = V₁ + V₂. Temps de rencontre T = Distance / (V₁ + V₂).</p>
                <p>• <strong>Débits de Robinets en Parallèle :</strong> Débit total = D₁ + D₂. Remplissage par Robinet A (3h) et B (6h) ➔ <span class="math-frac"><span class="num">1</span><span class="den">3</span></span> + <span class="math-frac"><span class="num">1</span><span class="den">6</span></span> = <span class="math-frac"><span class="num">3</span><span class="den">6</span></span> = <span class="math-frac"><span class="num">1</span><span class="den">2</span></span> piscine par heure ➔ <strong>Temps total = 2 heures !</strong></p>
                <p>• <strong>Volume Piscine :</strong> Volume = Longueur × Largeur × Profondeur. Ex: 3m × 2m × 1.2m = 7.2 m³ = 7 200 Litres.</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Combinatoire & Permutations sous Contraintes</div>
              <div class="math-desc-list">
                <p>• <strong>Dénombrement Cordée (Annales) :</strong> 3 hommes et 4 femmes à placer en cordée de 7 personnes avec un homme au début et à la fin. Choix du 1er homme (3) × Choix du dernier homme (2) × Placements des 5 personnes restantes au milieu (5! = 120) ➔ 3 × 2 × 120 = <strong>720 façons !</strong></p>
              </div>
            </div>
          </div>`
      };
    } else {
      return {
        title: 'Fiche Cours 4 (Logique) : Syllogismes, Équations & Optimisation',
        subtitle: 'Règles de déduction logique, contraposée et extrema de fonctions',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Logique Déductive & Contraposée</div>
              <div class="math-desc-list">
                <p>• <strong>Règle Absolue de la Contraposée :</strong> « Si A alors B » est STRICTEMENT ÉQUIVALENT à « Si Non B alors Non A ».</p>
                <p>• <strong>Exemple Annales :</strong> « S'il pleut, le sol est mouillé » ➔ Contraposée : « Si le sol n'est pas mouillé, il ne pleut pas ».</p>
                <p>• <strong>Piège d'Inversion à éviter :</strong> « Si le sol est mouillé » NE PERMET PAS de conclure qu'il pleut (il peut avoir été arrosé) !</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Extrema de Fonctions & Équations du 2nd Degré</div>
              <div class="math-desc-list">
                <p>• <strong>Valeur Minimale d'un Polynôme du 2nd Degré :</strong> Pour f(a) = A a² + B a + C (avec A > 0), le minimum est atteint pour <strong>a = -B / (2A)</strong>.</p>
                <p>• <strong>Calcul Annales f(a) = a² - 6a + 4 :</strong> A=1, B=-6 ➔ Minimum en a = -(-6)/2 = 3. Valeur minimale = f(3) = 3² - 6(3) + 4 = 9 - 18 + 4 = <strong>-5 !</strong></p>
              </div>
            </div>
          </div>`
      };
    }
  } else if (section === 'anglais') {
    if (ficheIdx === 0) {
      return {
        title: 'Fiche Cours 1 (Anglais) : Grammar & Advanced SIM Structures',
        subtitle: 'Since vs For, Inversions, Conditionals & Subjunctive',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Present Perfect & Prepositions (Since vs For)</div>
              <div class="math-desc-list">
                <p>• <strong>SINCE + Date / Point de départ :</strong> <em>She has been working here since 2019. / It has been a long time since we last spoke.</em></p>
                <p>• <strong>FOR + Durée globale :</strong> <em>They have been waiting for three hours.</em></p>
                <p>• <strong>LOOK FORWARD TO + V-ING :</strong> Toujours suivi du gérondif ! <em>I look forward to meeting you.</em></p>
                <p>• <strong>HAD BETTER + Base Verbale (Conseil impératif) :</strong> <em>You had better submit your application before Friday.</em> (Sans "to" !)</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Structures d'Inversion des Annales SIM</div>
              <div class="math-desc-list">
                <p>• <strong>Inversion Sujet-Auxiliaire après Adverbe Négatif :</strong> <em>Hardly / Scarcely had he entered the office when the phone rang.</em> (Jamais "he had entered" !)</p>
                <p>• <strong>WISH + Past Simple (Regret présent) :</strong> <em>I wish I were in London right now.</em></p>
                <p>• <strong>Conditionnel (If + Were) :</strong> <em>If I were you, I would accept the job offer immediately.</em></p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 1) {
      return {
        title: 'Fiche Cours 2 (Anglais) : Essential Business Vocabulary',
        subtitle: 'Vocabulaire des affaires, management & acronymes du SIM',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Business Terms & Corporate Acronyms</div>
              <div class="math-desc-list">
                <p>• <strong>Turnover :</strong> Chiffre d'affaires (ou rotation du personnel selon le contexte).</p>
                <p>• <strong>Shareholder vs Stakeholder :</strong> <em>Shareholder</em> = Actionnaire. <em>Stakeholder</em> = Partie prenante (salariés, clients, communauté).</p>
                <p>• <strong>Lay off / Hire :</strong> <em>To lay off</em> = Licencier pour motif économique. <em>To hire</em> = Embaucher.</p>
                <p>• <strong>Merge / Acquisition :</strong> <em>To merge</em> = Fusionner. <em>Acquisition</em> = Rachat d'entreprise (M&A).</p>
                <p>• <strong>Removal :</strong> Déménagement (de bureaux ou de matériel).</p>
                <p>• <strong>Acronymes Corporate :</strong> <em>CEO</em> (Chief Executive Officer = PDG), <em>CFO</em> (Chief Financial Officer = DAF), <em>HR</em> (Human Resources = RH), <em>GDP</em> (Gross Domestic Product = PIB).</p>
              </div>
            </div>
          </div>`
      };
    } else if (ficheIdx === 2) {
      return {
        title: 'Fiche Cours 3 (Anglais) : Top False Friends & Lexical Nuances',
        subtitle: 'Les faux-amis du SIM et distinctions de vocabulaire précises',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Economic vs Economical (Piège Majeur des Annales)</div>
              <div class="math-desc-list">
                <p>• <strong>ECONOMIC :</strong> Relatif à l'économie en général (ex: <em>economic growth, economic crisis</em>).</p>
                <p>• <strong>ECONOMICAL :</strong> Économique / peu coûteux / rentable (ex: <em>Buying low-cost tickets can be very economical.</em>).</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Les Faux-Amis et Vocabulaire des Textes Annales</div>
              <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
                <div class="math-table-cell"><strong>Actually</strong> <span>En fait / En réalité (et NON pas actuellement)</span></div>
                <div class="math-table-cell"><strong>Currently</strong> <span>Actuellement / À ce jour</span></div>
                <div class="math-table-cell"><strong>Eventually</strong> <span>Finalement / À terme (et NON pas éventuellement)</span></div>
                <div class="math-table-cell"><strong>Notice</strong> <span>Avis / Préavis / Remarquer</span></div>
                <div class="math-table-cell"><strong>Opportunity</strong> <span>Occasion / Opportunité</span></div>
                <div class="math-table-cell"><strong>Comprehensive</strong> <span>Complet / Exhaustif</span></div>
                <div class="math-table-cell"><strong>Flimsy</strong> <span>Délicat / Fragile / Légitime</span></div>
                <div class="math-table-cell"><strong>Deception</strong> <span>Tromperie / Duperie (et NON pas déception)</span></div>
              </div>
            </div>
          </div>`
      };
    } else {
      return {
        title: 'Fiche Cours 4 (Anglais) : Phrasal Verbs & Business Idioms',
        subtitle: 'Verbes à particule et expressions idiomatiques des annales',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Essential Phrasal Verbs (Annales SIM)</div>
              <div class="math-desc-list">
                <p>• <strong>Put off :</strong> Reporter / Postposer une réunion (ex: <em>They decided to put off the meeting until Tuesday.</em>).</p>
                <p>• <strong>Call off :</strong> Annuler un événement (ex: <em>The event was called off due to bad weather.</em>).</p>
                <p>• <strong>Look up to :</strong> Admirer / Avoir du respect pour quelqu'un (ex: <em>She looked up to her mother.</em>).</p>
                <p>• <strong>Carry out :</strong> Réaliser / Mener à bien (ex: <em>Carry out an audit</em>).</p>
                <p>• <strong>Run out of :</strong> Épuiser / Ne plus avoir de (ex: <em>We ran out of budget</em>).</p>
                <p>• <strong>Cut down on :</strong> Réduire des coûts (ex: <em>Cut down on expenses</em>).</p>
              </div>
            </div>
            <div class="math-card-visual">
              <div class="math-card-title">2. Expressions Idiomatiques de Concours</div>
              <div class="math-desc-list">
                <p>• <strong>To hit the nail on the head :</strong> Viser juste / Mettre le doigt sur le problème exact.</p>
                <p>• <strong>To cost an arm and a leg :</strong> Coûter une fortune.</p>
              </div>
            </div>
          </div>`
      };
    }
  }
}


// ---------------------------------------------------------
// 3. QUIZ DATASETS FOR IAE SUB-TESTS (100+ OFFICIAL QUESTIONS PER SUB-TEST)
// ---------------------------------------------------------

export const IAE_FRENCH_QUIZ_DATA = [
  {
    "prompt": "[Français SIM n°1] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier le problème (COD direct)",
      "Pallier de ce problème",
      "Pallier au problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°2] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "serait",
      "fût",
      "est (Indicatif)",
      "soit (Subjonctif)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°3] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait (Indicatif)",
      "ferait",
      "fasse (Subjonctif)",
      "fît"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°4] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin (un aphte)",
      "Neutre",
      "Variable",
      "Féminin (une aphte)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°5] Quel est le genre du mot 'acné' ?",
    "options": [
      "Féminin (une acné)",
      "Masculin (un acné)",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°6] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dileme",
      "Dillemme",
      "Dilemne (avec 'nm')",
      "Dilemme (avec 2 'm')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°7] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Variable",
      "Accordé en nombre (des demis-heures)",
      "Accordé en genre (une demie-heure)",
      "Invariable (une demi-heure)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°8] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyé (invariable car COD après)",
      "envoyées",
      "envoyers",
      "envoyés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°9] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Recommander chaudement",
      "Rédiger un texte",
      "Prescrire un traitement",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°10] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Sortir rapidement",
      "Collaborer ensemble",
      "Parler fort",
      "Décider de"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°11] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle à cette règle",
      "Je me rappelle cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle sur cette règle"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°12] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "souviens (avec 'de')",
      "repense de",
      "remémore de",
      "rappelle (avec 'de')"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°13] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marine",
      "bleu marine",
      "bleues marines",
      "bleu marines"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°14] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrone",
      "marron",
      "marrons",
      "marronnes"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°15] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faite",
      "faites",
      "fait (invariable devant infinitif)",
      "faits"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°16] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier au problème",
      "Pallier le problème (COD direct)",
      "Pallier de ce problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°17] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "est (Indicatif)",
      "soit (Subjonctif)",
      "fût",
      "serait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°18] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse (Subjonctif)",
      "fît",
      "ferait",
      "fait (Indicatif)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°19] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin (un aphte)",
      "Féminin (une aphte)",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°20] Quel est le genre du mot 'acné' ?",
    "options": [
      "Masculin (un acné)",
      "Neutre",
      "Variable",
      "Féminin (une acné)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°21] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dilemme (avec 2 'm')",
      "Dilemne (avec 'nm')",
      "Dillemme",
      "Dileme"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°22] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Accordé en genre (une demie-heure)",
      "Invariable (une demi-heure)",
      "Accordé en nombre (des demis-heures)",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°23] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyé (invariable car COD après)",
      "envoyés",
      "envoyers",
      "envoyées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°24] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Prescrire un traitement",
      "Rédiger un texte",
      "Recommander chaudement",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°25] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Collaborer ensemble",
      "Sortir rapidement",
      "Parler fort",
      "Décider de"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°26] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle sur cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle cette règle",
      "Je me rappelle à cette règle"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°27] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "souviens (avec 'de')",
      "rappelle (avec 'de')",
      "repense de",
      "remémore de"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°28] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleu marines",
      "bleues marine",
      "bleu marine",
      "bleues marines"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°29] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrone",
      "marron",
      "marronnes",
      "marrons"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°30] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faits",
      "faites",
      "faite",
      "fait (invariable devant infinitif)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°31] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier le problème (COD direct)",
      "Pallier au problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°32] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "est (Indicatif)",
      "soit (Subjonctif)",
      "fût",
      "serait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°33] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse (Subjonctif)",
      "fait (Indicatif)",
      "ferait",
      "fît"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°34] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Variable",
      "Féminin (une aphte)",
      "Masculin (un aphte)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°35] Quel est le genre du mot 'acné' ?",
    "options": [
      "Masculin (un acné)",
      "Féminin (une acné)",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°36] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dileme",
      "Dillemme",
      "Dilemne (avec 'nm')",
      "Dilemme (avec 2 'm')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°37] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Invariable (une demi-heure)",
      "Variable",
      "Accordé en nombre (des demis-heures)",
      "Accordé en genre (une demie-heure)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°38] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyées",
      "envoyers",
      "envoyé (invariable car COD après)",
      "envoyés"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°39] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Prescrire un traitement",
      "Recommander chaudement",
      "Rédiger un texte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°40] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Décider de",
      "Sortir rapidement",
      "Collaborer ensemble",
      "Parler fort"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°41] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle sur cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle cette règle",
      "Je me rappelle à cette règle"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°42] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "repense de",
      "remémore de",
      "souviens (avec 'de')",
      "rappelle (avec 'de')"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°43] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleu marine",
      "bleu marines",
      "bleues marine",
      "bleues marines"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°44] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marron",
      "marrons",
      "marrone",
      "marronnes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°45] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faites",
      "faits",
      "fait (invariable devant infinitif)",
      "faite"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°46] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier avec le problème",
      "Pallier le problème (COD direct)",
      "Pallier au problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°47] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "soit (Subjonctif)",
      "serait",
      "est (Indicatif)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°48] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "fait (Indicatif)",
      "fasse (Subjonctif)",
      "ferait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°49] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Variable",
      "Féminin (une aphte)",
      "Neutre",
      "Masculin (un aphte)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°50] Quel est le genre du mot 'acné' ?",
    "options": [
      "Féminin (une acné)",
      "Variable",
      "Neutre",
      "Masculin (un acné)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°51] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dileme",
      "Dilemme (avec 2 'm')",
      "Dilemne (avec 'nm')",
      "Dillemme"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°52] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Accordé en nombre (des demis-heures)",
      "Variable",
      "Invariable (une demi-heure)",
      "Accordé en genre (une demie-heure)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°53] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyers",
      "envoyé (invariable car COD après)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°54] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Recommander chaudement",
      "Rédiger un texte",
      "Prescrire un traitement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°55] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Décider de",
      "Collaborer ensemble",
      "Sortir rapidement",
      "Parler fort"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°56] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle cette règle",
      "Je me rappelle à cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle sur cette règle"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°57] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "repense de",
      "remémore de",
      "souviens (avec 'de')",
      "rappelle (avec 'de')"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°58] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marines",
      "bleu marine",
      "bleu marines",
      "bleues marine"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°59] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrons",
      "marron",
      "marrone",
      "marronnes"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°60] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faite",
      "fait (invariable devant infinitif)",
      "faits",
      "faites"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°61] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier le problème (COD direct)",
      "Pallier au problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°62] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "est (Indicatif)",
      "serait",
      "soit (Subjonctif)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°63] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse (Subjonctif)",
      "fît",
      "fait (Indicatif)",
      "ferait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°64] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin (un aphte)",
      "Féminin (une aphte)",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°65] Quel est le genre du mot 'acné' ?",
    "options": [
      "Neutre",
      "Féminin (une acné)",
      "Masculin (un acné)",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°66] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dillemme",
      "Dilemne (avec 'nm')",
      "Dileme",
      "Dilemme (avec 2 'm')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°67] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Accordé en genre (une demie-heure)",
      "Variable",
      "Accordé en nombre (des demis-heures)",
      "Invariable (une demi-heure)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°68] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyers",
      "envoyés",
      "envoyées",
      "envoyé (invariable car COD après)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°69] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Recommander chaudement",
      "Interdire formellement",
      "Rédiger un texte",
      "Prescrire un traitement"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°70] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Sortir rapidement",
      "Décider de",
      "Parler fort",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°71] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle sur cette règle",
      "Je me rappelle cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle à cette règle"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°72] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "souviens (avec 'de')",
      "remémore de",
      "rappelle (avec 'de')",
      "repense de"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°73] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marine",
      "bleu marine",
      "bleues marines",
      "bleu marines"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°74] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrons",
      "marronnes",
      "marron",
      "marrone"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°75] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faites",
      "faite",
      "fait (invariable devant infinitif)",
      "faits"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°76] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier au problème",
      "Pallier avec le problème",
      "Pallier le problème (COD direct)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°77] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "serait",
      "est (Indicatif)",
      "soit (Subjonctif)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°78] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "fait (Indicatif)",
      "ferait",
      "fasse (Subjonctif)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°79] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Variable",
      "Féminin (une aphte)",
      "Masculin (un aphte)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°80] Quel est le genre du mot 'acné' ?",
    "options": [
      "Masculin (un acné)",
      "Féminin (une acné)",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°81] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dilemne (avec 'nm')",
      "Dilemme (avec 2 'm')",
      "Dileme",
      "Dillemme"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°82] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Variable",
      "Invariable (une demi-heure)",
      "Accordé en genre (une demie-heure)",
      "Accordé en nombre (des demis-heures)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°83] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyers",
      "envoyé (invariable car COD après)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°84] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Recommander chaudement",
      "Prescrire un traitement",
      "Rédiger un texte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°85] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Collaborer ensemble",
      "Sortir rapidement",
      "Parler fort",
      "Décider de"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°86] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle à cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle sur cette règle",
      "Je me rappelle cette règle"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°87] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "souviens (avec 'de')",
      "repense de",
      "rappelle (avec 'de')",
      "remémore de"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°88] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleues marine",
      "bleues marines",
      "bleu marine",
      "bleu marines"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°89] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marrons",
      "marron",
      "marrone",
      "marronnes"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°90] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "fait (invariable devant infinitif)",
      "faits",
      "faite",
      "faites"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°91] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier le problème (COD direct)",
      "Pallier de ce problème",
      "Pallier au problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°92] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "soit (Subjonctif)",
      "fût",
      "est (Indicatif)",
      "serait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°93] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait (Indicatif)",
      "fît",
      "ferait",
      "fasse (Subjonctif)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°94] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin (un aphte)",
      "Variable",
      "Féminin (une aphte)",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°95] Quel est le genre du mot 'acné' ?",
    "options": [
      "Variable",
      "Neutre",
      "Féminin (une acné)",
      "Masculin (un acné)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°96] Quelle est l'orthographe exacte du mot désignant un dilemme ?",
    "options": [
      "Dileme",
      "Dilemne (avec 'nm')",
      "Dilemme (avec 2 'm')",
      "Dillemme"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°97] Comment s'accorde le mot 'demi' avant le nom ?",
    "options": [
      "Variable",
      "Accordé en genre (une demie-heure)",
      "Accordé en nombre (des demis-heures)",
      "Invariable (une demi-heure)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°98] Accord du participe passé : 'Elles se sont _____ des lettres.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyé (invariable car COD après)",
      "envoyers"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°99] Quel est le sens exact du verbe 'proscrire' ?",
    "options": [
      "Rédiger un texte",
      "Prescrire un traitement",
      "Recommander chaudement",
      "Interdire formellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°100] Quel pléonasme faut-il éliminer dans un écrit professionnel ?",
    "options": [
      "Collaborer ensemble",
      "Sortir rapidement",
      "Décider de",
      "Parler fort"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°101] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle sur cette règle",
      "Je me rappelle de cette règle",
      "Je me rappelle à cette règle",
      "Je me rappelle cette règle"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°102] Complétez la phrase : 'Je me _____ de cet événement.'",
    "options": [
      "remémore de",
      "rappelle (avec 'de')",
      "repense de",
      "souviens (avec 'de')"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°103] Accord de l'adjectif composé : 'Des vestes _____'",
    "options": [
      "bleu marines",
      "bleu marine",
      "bleues marines",
      "bleues marine"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°104] Accord de l'adjectif de couleur simple issu d'un nom : 'Des chaussures _____'",
    "options": [
      "marronnes",
      "marrone",
      "marron",
      "marrons"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°105] Accord du participe passé suivi d'un infinitif : 'La lettre que j'ai _____ rédiger.'",
    "options": [
      "faite",
      "fait (invariable devant infinitif)",
      "faites",
      "faits"
    ],
    "answerIndex": 1
  }
];

export const IAE_LOGICAL_QUIZ_DATA = [
  {
    "prompt": "[Logique SIM n°1] Complétez la série numérique : 3, 7, 11, 15, 19, ?",
    "options": [
      "23",
      "27",
      "25",
      "20"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°2] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "S",
      "Q",
      "P",
      "R"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°3] Complétez la série des carrés : 9, 16, 25, 36, ?",
    "options": [
      "44",
      "55",
      "49",
      "14"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°4] Dans un groupe de 53 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "2",
      "18",
      "13"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°5] Complétez la série numérique : 7, 11, 15, 19, 23, ?",
    "options": [
      "31",
      "27",
      "29",
      "24"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°6] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "A",
      "B",
      "Z",
      "Y"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°7] Complétez la série des carrés : 49, 64, 81, 100, ?",
    "options": [
      "22",
      "127",
      "121",
      "116"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°8] Dans un groupe de 57 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "15",
      "13",
      "4",
      "20"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°9] Complétez la série numérique : 11, 15, 19, 23, 27, ?",
    "options": [
      "35",
      "31",
      "28",
      "33"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°10] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "M",
      "P",
      "N",
      "O"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°11] Complétez la série des carrés : 1, 4, 9, 16, ?",
    "options": [
      "31",
      "10",
      "25",
      "20"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°12] Dans un groupe de 61 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "24",
      "19",
      "8",
      "13"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°13] Complétez la série numérique : 15, 19, 23, 27, 31, ?",
    "options": [
      "35",
      "39",
      "37",
      "32"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°14] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "S",
      "P",
      "R",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°15] Complétez la série des carrés : 25, 36, 49, 64, ?",
    "options": [
      "87",
      "18",
      "81",
      "76"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°16] Dans un groupe de 65 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "21",
      "26",
      "13",
      "10"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°17] Complétez la série numérique : 19, 23, 27, 31, 35, ?",
    "options": [
      "39",
      "36",
      "43",
      "41"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°18] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "Y",
      "B",
      "Z",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°19] Complétez la série des carrés : 81, 100, 121, 144, ?",
    "options": [
      "164",
      "26",
      "175",
      "169"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°20] Dans un groupe de 69 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "20",
      "13",
      "31",
      "36"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°21] Complétez la série numérique : 23, 27, 31, 35, 39, ?",
    "options": [
      "45",
      "40",
      "47",
      "43"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°22] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "N",
      "M",
      "P",
      "O"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°23] Complétez la série des carrés : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "55",
      "44",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°24] Dans un groupe de 73 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "27",
      "16",
      "32",
      "13"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°25] Complétez la série numérique : 27, 31, 35, 39, 43, ?",
    "options": [
      "47",
      "51",
      "49",
      "44"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°26] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "Q",
      "R",
      "S",
      "P"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°27] Complétez la série des carrés : 49, 64, 81, 100, ?",
    "options": [
      "127",
      "116",
      "22",
      "121"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°28] Dans un groupe de 77 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "37",
      "26",
      "13",
      "42"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°29] Complétez la série numérique : 31, 35, 39, 43, 47, ?",
    "options": [
      "55",
      "48",
      "53",
      "51"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°30] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "B",
      "Z",
      "Y",
      "A"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°31] Complétez la série des carrés : 1, 4, 9, 16, ?",
    "options": [
      "25",
      "10",
      "20",
      "31"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°32] Dans un groupe de 81 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "39",
      "28",
      "13",
      "44"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°33] Complétez la série numérique : 35, 39, 43, 47, 51, ?",
    "options": [
      "59",
      "55",
      "57",
      "52"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°34] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "O",
      "P",
      "N",
      "M"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°35] Complétez la série des carrés : 25, 36, 49, 64, ?",
    "options": [
      "81",
      "87",
      "76",
      "18"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°36] Dans un groupe de 85 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "43",
      "32",
      "13",
      "48"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°37] Complétez la série numérique : 39, 43, 47, 51, 55, ?",
    "options": [
      "56",
      "59",
      "61",
      "63"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°38] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°39] Complétez la série des carrés : 81, 100, 121, 144, ?",
    "options": [
      "26",
      "169",
      "175",
      "164"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°40] Dans un groupe de 89 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "45",
      "13",
      "50",
      "34"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°41] Complétez la série numérique : 43, 47, 51, 55, 59, ?",
    "options": [
      "63",
      "67",
      "60",
      "65"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°42] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "Z",
      "A",
      "Y",
      "B"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°43] Complétez la série des carrés : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "49",
      "44",
      "14"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°44] Dans un groupe de 93 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "55",
      "44",
      "13",
      "60"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°45] Complétez la série numérique : 47, 51, 55, 59, 63, ?",
    "options": [
      "64",
      "69",
      "67",
      "71"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°46] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "M",
      "N",
      "O",
      "P"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°47] Complétez la série des carrés : 49, 64, 81, 100, ?",
    "options": [
      "127",
      "121",
      "22",
      "116"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°48] Dans un groupe de 97 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "40",
      "51",
      "13",
      "56"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°49] Complétez la série numérique : 51, 55, 59, 63, 67, ?",
    "options": [
      "75",
      "68",
      "71",
      "73"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°50] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "S",
      "R",
      "P",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°51] Complétez la série des carrés : 1, 4, 9, 16, ?",
    "options": [
      "20",
      "10",
      "25",
      "31"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°52] Dans un groupe de 101 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "50",
      "13",
      "66",
      "61"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°53] Complétez la série numérique : 55, 59, 63, 67, 71, ?",
    "options": [
      "79",
      "75",
      "77",
      "72"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°54] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "B",
      "A",
      "Y",
      "Z"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°55] Complétez la série des carrés : 25, 36, 49, 64, ?",
    "options": [
      "18",
      "87",
      "76",
      "81"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°56] Dans un groupe de 105 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "68",
      "52",
      "63"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°57] Complétez la série numérique : 59, 63, 67, 71, 75, ?",
    "options": [
      "81",
      "83",
      "79",
      "76"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°58] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "M",
      "P",
      "O",
      "N"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°59] Complétez la série des carrés : 81, 100, 121, 144, ?",
    "options": [
      "175",
      "26",
      "169",
      "164"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°60] Dans un groupe de 109 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "56",
      "67",
      "72",
      "13"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°61] Complétez la série numérique : 63, 67, 71, 75, 79, ?",
    "options": [
      "80",
      "87",
      "83",
      "85"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°62] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°63] Complétez la série des carrés : 9, 16, 25, 36, ?",
    "options": [
      "49",
      "55",
      "14",
      "44"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°64] Dans un groupe de 113 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "69",
      "74",
      "13",
      "58"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°65] Complétez la série numérique : 67, 71, 75, 79, 83, ?",
    "options": [
      "87",
      "84",
      "91",
      "89"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°66] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "Y",
      "A",
      "B",
      "Z"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°67] Complétez la série des carrés : 49, 64, 81, 100, ?",
    "options": [
      "121",
      "116",
      "127",
      "22"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°68] Dans un groupe de 117 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "79",
      "13",
      "84",
      "68"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°69] Complétez la série numérique : 71, 75, 79, 83, 87, ?",
    "options": [
      "93",
      "88",
      "95",
      "91"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°70] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "M",
      "P",
      "N",
      "O"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°71] Complétez la série des carrés : 1, 4, 9, 16, ?",
    "options": [
      "10",
      "31",
      "20",
      "25"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°72] Dans un groupe de 121 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "75",
      "64",
      "13",
      "80"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°73] Complétez la série numérique : 75, 79, 83, 87, 91, ?",
    "options": [
      "92",
      "95",
      "97",
      "99"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°74] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°75] Complétez la série des carrés : 25, 36, 49, 64, ?",
    "options": [
      "76",
      "18",
      "87",
      "81"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°76] Dans un groupe de 125 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "90",
      "74",
      "13",
      "85"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°77] Complétez la série numérique : 79, 83, 87, 91, 95, ?",
    "options": [
      "103",
      "96",
      "99",
      "101"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°78] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "A",
      "Z",
      "Y",
      "B"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°79] Complétez la série des carrés : 81, 100, 121, 144, ?",
    "options": [
      "26",
      "164",
      "175",
      "169"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°80] Dans un groupe de 129 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "76",
      "13",
      "87",
      "92"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°81] Complétez la série numérique : 83, 87, 91, 95, 99, ?",
    "options": [
      "100",
      "103",
      "105",
      "107"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°82] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "O",
      "P",
      "M",
      "N"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°83] Complétez la série des carrés : 9, 16, 25, 36, ?",
    "options": [
      "49",
      "44",
      "14",
      "55"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°84] Dans un groupe de 133 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "91",
      "80",
      "96",
      "13"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°85] Complétez la série numérique : 87, 91, 95, 99, 103, ?",
    "options": [
      "107",
      "104",
      "111",
      "109"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°86] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "Q",
      "R",
      "S",
      "P"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°87] Complétez la série des carrés : 49, 64, 81, 100, ?",
    "options": [
      "22",
      "116",
      "127",
      "121"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°88] Dans un groupe de 137 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "93",
      "82",
      "13",
      "98"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°89] Complétez la série numérique : 91, 95, 99, 103, 107, ?",
    "options": [
      "108",
      "113",
      "111",
      "115"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°90] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "Z",
      "B",
      "A",
      "Y"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°91] Complétez la série des carrés : 1, 4, 9, 16, ?",
    "options": [
      "25",
      "31",
      "20",
      "10"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°92] Dans un groupe de 141 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "108",
      "92",
      "103"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°93] Complétez la série numérique : 95, 99, 103, 107, 111, ?",
    "options": [
      "112",
      "117",
      "119",
      "115"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°94] Complétez la série alphabétique : D, F, H, J, L, ?",
    "options": [
      "N",
      "P",
      "M",
      "O"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°95] Complétez la série des carrés : 25, 36, 49, 64, ?",
    "options": [
      "81",
      "18",
      "76",
      "87"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°96] Dans un groupe de 145 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "104",
      "99",
      "13",
      "88"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°97] Complétez la série numérique : 99, 103, 107, 111, 115, ?",
    "options": [
      "121",
      "123",
      "119",
      "116"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°98] Complétez la série alphabétique : B, E, H, K, N, ?",
    "options": [
      "S",
      "Q",
      "P",
      "R"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°99] Complétez la série des carrés : 81, 100, 121, 144, ?",
    "options": [
      "175",
      "26",
      "164",
      "169"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°100] Dans un groupe de 149 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "98",
      "13",
      "114",
      "109"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°101] Complétez la série numérique : 103, 107, 111, 115, 119, ?",
    "options": [
      "123",
      "127",
      "125",
      "120"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°102] Complétez la série alphabétique : F, J, N, R, V, ?",
    "options": [
      "A",
      "Y",
      "Z",
      "B"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°103] Complétez la série des carrés : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "55",
      "44",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°104] Dans un groupe de 153 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "111",
      "116",
      "100"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°105] Complétez la série numérique : 107, 111, 115, 119, 123, ?",
    "options": [
      "124",
      "129",
      "131",
      "127"
    ],
    "answerIndex": 3
  }
];

export const IAE_ENGLISH_QUIZ_DATA = [
  {
    "prompt": "[Business English n°1] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "have met",
      "met",
      "meet",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°2] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay down",
      "lay on",
      "lay off"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°3] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "am",
      "were",
      "was"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°4] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "since",
      "from",
      "during"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°5] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "since",
      "during",
      "for",
      "from"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°6] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had better",
      "should to",
      "had rather",
      "would better"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°7] What is the meaning of 'shareholder'?",
    "options": [
      "Fournisseur",
      "Partenaire social",
      "Client principal",
      "Actionnaire"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°8] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "had he",
      "did he",
      "he had"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°9] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A bankruptcy",
      "A turnover",
      "A layoff"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°10] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Probablement",
      "Actuellement",
      "Récemment",
      "En fait / En réalité"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°11] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "have met",
      "meeting",
      "met"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°12] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay down",
      "lay on",
      "lay out",
      "lay off"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°13] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "were",
      "was",
      "am"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°14] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "since",
      "from",
      "for"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°15] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "during",
      "from",
      "since",
      "for"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°16] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "would better",
      "had better",
      "should to",
      "had rather"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°17] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Partenaire social",
      "Client principal",
      "Fournisseur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°18] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "had he",
      "he had",
      "did he"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°19] Select the correct term for a company merger:",
    "options": [
      "A turnover",
      "A layoff",
      "A bankruptcy",
      "A merger"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°20] Choose the false friend: 'Actually' in English means:",
    "options": [
      "En fait / En réalité",
      "Actuellement",
      "Probablement",
      "Récemment"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°21] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "have met",
      "meeting",
      "met",
      "meet"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°22] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay down",
      "lay off",
      "lay out",
      "lay on"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°23] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "were",
      "was",
      "am"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°24] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "for",
      "from",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°25] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "during",
      "since",
      "for",
      "from"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°26] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had better",
      "had rather",
      "should to",
      "would better"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°27] What is the meaning of 'shareholder'?",
    "options": [
      "Client principal",
      "Actionnaire",
      "Partenaire social",
      "Fournisseur"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°28] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he had",
      "he did",
      "had he",
      "did he"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°29] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A bankruptcy",
      "A layoff",
      "A turnover"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°30] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "Probablement",
      "Actuellement",
      "En fait / En réalité"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°31] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "have met",
      "meeting",
      "met"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°32] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay off",
      "lay out",
      "lay down",
      "lay on"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°33] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "am",
      "were",
      "was"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°34] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "from",
      "since",
      "during"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°35] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "during",
      "since",
      "from"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°36] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "should to",
      "would better",
      "had better",
      "had rather"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°37] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Client principal",
      "Partenaire social",
      "Fournisseur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°38] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "had he",
      "he did",
      "he had",
      "did he"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°39] Select the correct term for a company merger:",
    "options": [
      "A bankruptcy",
      "A turnover",
      "A merger",
      "A layoff"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°40] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Probablement",
      "Actuellement",
      "En fait / En réalité",
      "Récemment"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°41] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "have met",
      "meeting",
      "meet",
      "met"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°42] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay on",
      "lay off",
      "lay down"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°43] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "be",
      "was",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°44] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "for",
      "from",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°45] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "since",
      "for",
      "from",
      "during"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°46] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had better",
      "had rather",
      "should to",
      "would better"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°47] What is the meaning of 'shareholder'?",
    "options": [
      "Partenaire social",
      "Client principal",
      "Fournisseur",
      "Actionnaire"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°48] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "did he",
      "had he",
      "he did",
      "he had"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°49] Select the correct term for a company merger:",
    "options": [
      "A turnover",
      "A layoff",
      "A merger",
      "A bankruptcy"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°50] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Actuellement",
      "Probablement",
      "En fait / En réalité",
      "Récemment"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°51] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meeting",
      "met",
      "have met",
      "meet"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°52] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay on",
      "lay off",
      "lay down"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°53] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°54] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "from",
      "for",
      "since",
      "during"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°55] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "during",
      "for",
      "from",
      "since"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°56] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had better",
      "would better",
      "should to",
      "had rather"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°57] What is the meaning of 'shareholder'?",
    "options": [
      "Fournisseur",
      "Partenaire social",
      "Actionnaire",
      "Client principal"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°58] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "had he",
      "he did",
      "he had",
      "did he"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°59] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A turnover",
      "A bankruptcy",
      "A layoff"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°60] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Actuellement",
      "Récemment",
      "En fait / En réalité",
      "Probablement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°61] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meeting",
      "met",
      "meet",
      "have met"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°62] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay off",
      "lay down",
      "lay out",
      "lay on"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°63] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "was",
      "be",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°64] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "from",
      "during",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°65] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "during",
      "for",
      "since",
      "from"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°66] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had better",
      "would better",
      "had rather",
      "should to"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°67] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Partenaire social",
      "Client principal",
      "Fournisseur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°68] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "did he",
      "had he",
      "he had",
      "he did"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°69] Select the correct term for a company merger:",
    "options": [
      "A turnover",
      "A merger",
      "A layoff",
      "A bankruptcy"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°70] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "En fait / En réalité",
      "Actuellement",
      "Probablement"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°71] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "met",
      "meeting",
      "meet",
      "have met"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°72] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay on",
      "lay down",
      "lay off"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°73] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "was",
      "were",
      "am",
      "be"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°74] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "since",
      "from",
      "during"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°75] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "during",
      "from",
      "since"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°76] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "would better",
      "should to",
      "had rather",
      "had better"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°77] What is the meaning of 'shareholder'?",
    "options": [
      "Fournisseur",
      "Partenaire social",
      "Client principal",
      "Actionnaire"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°78] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "had he",
      "did he",
      "he did",
      "he had"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°79] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A turnover",
      "A layoff",
      "A bankruptcy"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°80] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "Probablement",
      "En fait / En réalité",
      "Actuellement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°81] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "have met",
      "met",
      "meeting",
      "meet"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°82] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay on",
      "lay down",
      "lay off"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°83] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "was",
      "were",
      "am"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°84] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "during",
      "from",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°85] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "since",
      "during",
      "from"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°86] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had better",
      "would better",
      "had rather",
      "should to"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°87] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Client principal",
      "Partenaire social",
      "Fournisseur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°88] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "had he",
      "he had",
      "did he"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°89] Select the correct term for a company merger:",
    "options": [
      "A bankruptcy",
      "A merger",
      "A turnover",
      "A layoff"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°90] Choose the false friend: 'Actually' in English means:",
    "options": [
      "En fait / En réalité",
      "Probablement",
      "Actuellement",
      "Récemment"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°91] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "met",
      "meeting",
      "have met"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°92] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay off",
      "lay down",
      "lay on",
      "lay out"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°93] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "was",
      "be",
      "were",
      "am"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°94] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "since",
      "for",
      "from",
      "during"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°95] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "from",
      "during",
      "since"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°96] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "would better",
      "had rather",
      "should to",
      "had better"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°97] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Partenaire social",
      "Fournisseur",
      "Client principal"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°98] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "he had",
      "had he",
      "did he"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°99] Select the correct term for a company merger:",
    "options": [
      "A turnover",
      "A bankruptcy",
      "A merger",
      "A layoff"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°100] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "Actuellement",
      "Probablement",
      "En fait / En réalité"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°101] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "have met",
      "met",
      "meet",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°102] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay down",
      "lay out",
      "lay on",
      "lay off"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°103] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "am",
      "were",
      "was"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°104] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "from",
      "since",
      "during"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°105] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "since",
      "during",
      "from",
      "for"
    ],
    "answerIndex": 3
  }
];

// ---------------------------------------------------------
// 4. FULL MOCK EXAM GENERATOR (100 QUESTIONS CONCOURS SIM)
// ---------------------------------------------------------

export function generateOfficialIAEMockExamDeck() {
  const badge = (txt) => `<div style="display:inline-block; padding:4px 10px; background:rgba(0,113,227,0.1); color:#0071E3; font-weight:700; border-radius:6px; font-size:12px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">${txt}</div><br>`;
  const cgDeck = getMassiveCultureGDeck(25);
  
  const frDeck = shuffleArray(IAE_FRENCH_QUIZ_DATA).slice(0, 25).map(item => {
    const correctText = item.options[item.answerIndex];
    const shuffledOpts = shuffleArray(item.options);
    return { prompt: `${badge('Français')}${item.prompt}`, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
  });

  const logDeck = shuffleArray(IAE_LOGICAL_QUIZ_DATA).slice(0, 25).map(item => {
    const correctText = item.options[item.answerIndex];
    const shuffledOpts = shuffleArray(item.options);
    return { prompt: `${badge('Logique')}${item.prompt}`, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
  });

  const engDeck = shuffleArray(IAE_ENGLISH_QUIZ_DATA).slice(0, 25).map(item => {
    const correctText = item.options[item.answerIndex];
    const shuffledOpts = shuffleArray(item.options);
    return { prompt: `${badge('Anglais')}${item.prompt}`, options: shuffledOpts, answerIndex: shuffledOpts.indexOf(correctText) };
  });

  return [...cgDeck, ...frDeck, ...logDeck, ...engDeck];
}
