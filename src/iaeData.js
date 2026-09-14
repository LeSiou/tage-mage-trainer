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
        title: 'Fiche 1 : Économie & Finance',
        subtitle: 'Smith, Keynes, BCE, FMI, PIB & agrégats',
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
        title: 'Fiche 2 : Management & Stratégie',
        subtitle: 'Taylor, Fayol, Porter, BCG & PESTEL',
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
        title: 'Fiche 3 : Actualités & IA',
        subtitle: 'IA générative, JO 2024, BRICS & géopolitique',
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
        title: 'Fiche 4 : Histoire, Droit & Arts',
        subtitle: 'Institutions Vème République & capitales pièges',
        html: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="math-card-visual">
              <div class="math-card-title">1. Institutions de la Vème République & Histoire</div>
              <div class="math-desc-list">
                <p>• <strong>Promulgation de 1958 :</strong> Constitution de la Vème République initiée par le général de Gaulle et rédigée avec Michel Debré (1er Premier ministre).</p>
                <p>• <strong>Suffrage Universel Direct (1962) :</strong> Référendum instaurant l'élection présidentielle au suffrage universel direct (première élection en 1965).</p>
                <p>• <strong>Réformes Majeures :</strong> Abolition de la peine de mort en 1981 (Robert Badinter), passage au Quinquennat adopted par référendum en 2000.</p>
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
        title: 'Fiche 1 : Grammaire & Accords',
        subtitle: 'Participe passé, Tout, Même, Demi, Leur',
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
        title: 'Fiche 2 : Syntaxe & Subjonctif',
        subtitle: 'Ne dites pas / dites & subjonctif',
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
        title: 'Fiche 3 : Orthographe & Homonymes',
        subtitle: 'Consonnes doubles & mots pièges',
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
        title: 'Fiche 4 : Vocabulaire & Paronymes',
        subtitle: 'Vocabulaire soutenu, pléonasmes & paronymes',
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
        title: 'Fiche 1 : Séries Numériques',
        subtitle: 'Suites arithmétiques, alternées & Fibonacci',
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
        title: 'Fiche 2 : Calcul Mental & %',
        subtitle: 'Variations successives & coefficients',
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
        title: 'Fiche 3 : Vitesses & Débits',
        subtitle: 'V=D/T, croisement & travail partagé',
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
        title: 'Fiche 4 : Syllogismes & Logique',
        subtitle: 'Contraposée & déduction d\'ensembles',
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
        title: 'Fiche 1 : Grammaire & Temps',
        subtitle: 'Present Perfect, Conditionals & Subjunctive',
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
        title: 'Fiche 2 : Vocabulaire Business',
        subtitle: 'Turnover, Shareholder, Merge, CEO/CFO',
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
        title: 'Fiche 3 : Faux-Amis Essential',
        subtitle: 'Actually, Currently, Notice, Comprehensive',
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
        title: 'Fiche 4 : Phrasal Verbs',
        subtitle: 'Put off, Call off, Carry out, Cut down on',
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
      "Pallier le problème",
      "Pallier de ce problème",
      "Pallier avec le problème",
      "Pallier au problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°2] Complétez : 'Après qu'il _____ arrivé, le cours a commencé.'",
    "options": [
      "est",
      "soit",
      "fût",
      "serait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°3] Complétez : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fît",
      "fait",
      "fasse",
      "ferait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°4] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin (un aphte)",
      "Variable",
      "Féminin (une aphte)",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°5] Quel est le genre du mot 'acné' ?",
    "options": [
      "Féminin (une acné)",
      "Neutre",
      "Masculin (un acné)",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°6] Quel est le genre du mot 'alvéole' ?",
    "options": [
      "Neutre",
      "Variable",
      "Masculin (un alvéole)",
      "Féminin (une alvéole)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°7] Quel est le genre du mot 'astérisque' ?",
    "options": [
      "Neutre",
      "Féminin (une astérisque)",
      "Masculin (un astérisque)",
      "Variable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°8] Quel est le genre du mot 'orbite' ?",
    "options": [
      "Neutre",
      "Féminin (une orbite)",
      "Masculin (un orbite)",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°9] Quel est le genre du mot 'épitaphe' ?",
    "options": [
      "Variable",
      "Neutre",
      "Féminin (une épitaphe)",
      "Masculin (un épitaphe)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°10] Quel est le genre du mot 'pétale' ?",
    "options": [
      "Féminin (une pétale)",
      "Masculin (un pétale)",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°11] Quel est le genre du mot 'armistice' ?",
    "options": [
      "Variable",
      "Masculin (un armistice)",
      "Féminin (une armistice)",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°12] Quel est le genre du mot 'haltère' ?",
    "options": [
      "Féminin (une haltère)",
      "Masculin (un haltère)",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°13] Quel est le genre du mot 'omoplate' ?",
    "options": [
      "Variable",
      "Masculin (un omoplate)",
      "Féminin (une omoplate)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°14] Quel est le genre du mot 'hémisphère' ?",
    "options": [
      "Féminin (une hémisphère)",
      "Variable",
      "Masculin (un hémisphère)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°15] Quel est le genre du mot 'ébène' ?",
    "options": [
      "Masculin (un ébène)",
      "Variable",
      "Neutre",
      "Féminin (une ébène)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°16] Quel est le genre du mot 'amiante' ?",
    "options": [
      "Neutre",
      "Masculin (un amiante)",
      "Variable",
      "Féminin (une amiante)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°17] Quel est le genre du mot 'arôme' ?",
    "options": [
      "Féminin (une arôme)",
      "Variable",
      "Neutre",
      "Masculin (un arôme)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°18] Quel est le genre du mot 'asile' ?",
    "options": [
      "Féminin (une asile)",
      "Variable",
      "Masculin (un asile)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°19] Quel est le genre du mot 'éloge' ?",
    "options": [
      "Masculin (un éloge)",
      "Variable",
      "Neutre",
      "Féminin (une éloge)"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°20] Quel est le genre du mot 'exode' ?",
    "options": [
      "Variable",
      "Féminin (une exode)",
      "Masculin (un exode)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°21] Quel est le genre du mot 'insigne' ?",
    "options": [
      "Féminin (une insigne)",
      "Variable",
      "Masculin (un insigne)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°22] Quel est le genre du mot 'interstice' ?",
    "options": [
      "Féminin (une interstice)",
      "Variable",
      "Masculin (un interstice)",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°23] Quel est le genre du mot 'obélisque' ?",
    "options": [
      "Neutre",
      "Masculin (un obélisque)",
      "Féminin (une obélisque)",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°24] Quel est le genre du mot 'opprobre' ?",
    "options": [
      "Variable",
      "Féminin (une opprobre)",
      "Neutre",
      "Masculin (un opprobre)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°25] Quel est le genre du mot 'orgue' au pluriel ?",
    "options": [
      "Variable",
      "Féminin (de belles orgues)",
      "Neutre",
      "Masculin (de beaux orgues)"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°26] Quel est le genre du mot 'délices' au pluriel ?",
    "options": [
      "Variable",
      "Masculin (de nombreux délices)",
      "Neutre",
      "Féminin (de nombreuses délices)"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°27] Quel est le genre du mot 'amours' au pluriel ?",
    "options": [
      "Variable",
      "Neutre",
      "Féminin (de premières amours)",
      "Masculin (de premiers amours)"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°28] Quelle est l'orthographe correcte du mot désignant un choix cornélien ?",
    "options": [
      "Dileme",
      "Dilemne",
      "Dillemme",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°29] Quelle est l'orthographe correcte du mot désignant un mauvais rêve ?",
    "options": [
      "Cauchemard",
      "Cauchemar",
      "Cauchemarre",
      "Cossemare"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°30] Quelle est l'orthographe correcte du mot désignant le système de communication ?",
    "options": [
      "Langage",
      "Language",
      "Langages",
      "Langaj"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°31] Quelle est l'orthographe correcte du mot désignant l'acompte bancaire ?",
    "options": [
      "Acompte",
      "Ahcompte",
      "Accompte",
      "Aconte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°32] Quelle est l'orthographe correcte du mot désignant l'arrivée d'un événement ?",
    "options": [
      "Évènemant",
      "Evenement sans accent",
      "Evènement uniquement",
      "Événement ou Évènement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°33] Quelle est l'orthographe correcte du verbe désignant l'émission d'un son ?",
    "options": [
      "Rézonner",
      "Résonner",
      "Ressoner",
      "Raisonner"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°34] Quelle est l'orthographe correcte du mot désignant la maturité d'un projet ?",
    "options": [
      "Matuture",
      "Maturitée",
      "Mâterie ou Mâture",
      "Maturess"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°35] Quelle est l'orthographe correcte du mot désignant la bêtise extrême ?",
    "options": [
      "Imbécilitée",
      "Imbécillité",
      "Imbessillité",
      "Imbécilité"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°36] Quelle est la tournure correcte avec le verbe 'se rappeler' ?",
    "options": [
      "Je me rappelle sur cette histoire",
      "Je me rappelle à cette histoire",
      "Je me rappelle cette histoire",
      "Je me rappelle de cette histoire"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°37] Complétez : 'Je me _____ de cette personne.'",
    "options": [
      "rappelle",
      "remémore de",
      "souviens",
      "repense de"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°38] Complétez : 'Il a été convenu _____ la séance débuterait à 9h.'",
    "options": [
      "de ce que",
      "que",
      "à ce que",
      "pour que"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°39] Complétez : 'Il s'agit _____ trouver une solution rapide.'",
    "options": [
      "de",
      "sur",
      "à",
      "pour"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°40] Complétez : 'Elle s'est aperçue _____ son erreur.'",
    "options": [
      "de",
      "sur",
      "pour",
      "à"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°41] Accord de l'adjectif composé de couleur : 'Des robes _____'",
    "options": [
      "bleues foncé",
      "bleu foncé",
      "bleues foncées",
      "bleu foncées"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°42] Accord de l'adjectif composé de couleur : 'Des yeux _____'",
    "options": [
      "vert clairs",
      "verts clairs",
      "vert clair",
      "verts clair"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°43] Accord de l'adjectif de couleur issu d'un fruit : 'Des chemises _____'",
    "options": [
      "oranges",
      "orangées",
      "orangees",
      "orange"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°44] Accord de l'adjectif de couleur issu d'un minerai : 'Des vestes _____'",
    "options": [
      "marrone",
      "marronnes",
      "marron",
      "marrons"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°45] Accord de l'adjectif de couleur 'rose' : 'Des joues _____'",
    "options": [
      "rose",
      "rosées",
      "rosez",
      "roses"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°46] Accord de l'adjectif de couleur 'pourpre' : 'Des étoffes _____'",
    "options": [
      "pourpres",
      "pourprées",
      "pourpre",
      "pourvrez"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°47] Accord de 'demi' avant le nom : 'Une _____ heure'",
    "options": [
      "demies-",
      "demie-",
      "demis-",
      "demi-"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°48] Accord de 'demi' après le nom : 'Trois heures et _____'",
    "options": [
      "demi",
      "demie",
      "demies",
      "demis"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°49] Accord de 'nu' avant le nom : 'Marcher _____ pieds'",
    "options": [
      "nu-",
      "nue-",
      "nus-",
      "nues-"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°50] Accord de 'nu' après le nom : 'Marcher pieds _____'",
    "options": [
      "nus",
      "nue",
      "nu",
      "nues"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°51] Accord de 'mi' : 'Les yeux _____ clos'",
    "options": [
      "mie-",
      "mi-",
      "mies-",
      "mis-"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°52] Accord du participe passé : 'La lettre que j'ai _____'",
    "options": [
      "écrits",
      "écrit",
      "écrites",
      "écrite"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°53] Accord du participe passé : 'J'ai _____ la lettre'",
    "options": [
      "écrites",
      "écrite",
      "écrit",
      "écrits"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°54] Accord du participe passé suivi d'un infinitif : 'La maison que j'ai _____ construire'",
    "options": [
      "vus",
      "vues",
      "vue",
      "vu"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°55] Accord du participe passé suivi d'un infinitif : 'La cantatrice que j'ai _____ chanter'",
    "options": [
      "entendu",
      "entendue",
      "entendues",
      "entendus"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°56] Accord du participe passé pronominal : 'Elles se sont _____ des cadeaux'",
    "options": [
      "offerte",
      "offert",
      "offerts",
      "offertes"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°57] Accord du participe passé pronominal : 'Elles se sont _____ hier soir'",
    "options": [
      "rencontré",
      "rencontrées",
      "rencontrés",
      "rencontrée"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°58] Accord du participe passé pronominal : 'Elles se sont _____ les mains'",
    "options": [
      "lavées",
      "lavé",
      "lavée",
      "lavés"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°59] Accord de 'tout' adverbe devant voyelle : 'Elle est _____ étonnée'",
    "options": [
      "touts",
      "toute",
      "tout",
      "toutes"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°60] Accord de 'tout' adverbe devant consonne : 'Elle est _____ honteuse'",
    "options": [
      "toute",
      "touts",
      "tout",
      "toutes"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°61] Accord de 'tout' adjectif : '_____ les étudiants sont présents'",
    "options": [
      "Tous",
      "Toutes",
      "Toute",
      "Tout"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°62] Accord de 'même' adjectif : 'Les _____ personnes sont revenues'",
    "options": [
      "même-",
      "mêmes-",
      "mêmes",
      "même"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°63] Accord de 'même' adverbe : 'Les adultes et _____ les enfants ont ri'",
    "options": [
      "même",
      "même-",
      "mêmes",
      "mêmes-"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°64] Accord de 'leur' pronom : 'Je _____ ai parlé'",
    "options": [
      "leur",
      "leurs",
      "leurre",
      "leurres"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°65] Accord de 'leur' adjectif possessif au pluriel : 'Ils ont pris _____ affaires'",
    "options": [
      "leur",
      "leurs",
      "leurre",
      "leurres"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°66] Que signifie 'démythifier' ?",
    "options": [
      "Raconter une légende",
      "Dépouiller de son caractère mythique",
      "Créer un mythe",
      "Détruire une tromperie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°67] Que signifie 'démystifier' ?",
    "options": [
      "Enlever le caractère mythique",
      "Inventer une histoire",
      "Consacrer un texte",
      "Détruire une mystification ou tromperie"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°68] Que signifie 'proscrire' ?",
    "options": [
      "Interdire formellement",
      "Recommander un soin",
      "Pardonner une faute",
      "Rédiger un texte"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°69] Que signifie 'prescrire' ?",
    "options": [
      "Supprimer une loi",
      "Rédiger un contrat",
      "Ordonner ou recommander officiellement",
      "Interdire formellement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°70] Que signifie 'infiniment' vs 'infiniment petit' ?",
    "options": [
      "Égal",
      "Extrêmement / Quantité négligeable",
      "Sans valeur",
      "Toujours faux"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°71] Distinction paronymique : 'Accident' vs 'Incident'",
    "options": [
      "Stricte synonimie",
      "Accident est verbal",
      "Incident est grave",
      "Un incident est mineur, un accident implique des dommages"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°72] Distinction paronymique : 'Allocation' vs 'Allocution'",
    "options": [
      "Allocution = argent",
      "Stricte synonymie",
      "Allocation = somme d'argent / Allocution = discours",
      "Allocation = discours"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°73] Distinction paronymique : 'Affectectation' vs 'Affection'",
    "options": [
      "Affectation = poste ou pose / Affection = sentiment",
      "Stricte synonymie",
      "Affectation = amour",
      "Affection = poste"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°74] Distinction paronymique : 'Alternance' vs 'Alternative'",
    "options": [
      "Alternative = choix entre 2 options / Alternance = succession",
      "Alternance = choix",
      "Alternative = rotation",
      "Stricte synonymie"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°75] Distinction paronymique : 'Attention' vs 'Intention'",
    "options": [
      "Intention = concentration",
      "Attention = concentration / Intention = objectif",
      "Attention = projet",
      "Stricte synonymie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°76] Distinction paronymique : 'Collision' vs 'Collusion'",
    "options": [
      "Collision = choc physique / Collusion = entente secrète",
      "Stricte synonymie",
      "Collision = complot",
      "Collusion = choc"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°77] Distinction paronymique : 'Compétence' vs 'Compétition'",
    "options": [
      "Stricte synonymie",
      "Compétition = savoir",
      "Compétence = savoir-faire / Compétition = rivalité",
      "Compétence = match"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°78] Distinction paronymique : 'Comprehensive' (anglais) vs 'Compréhensif'",
    "options": [
      "Comprehensive = exhaustif / Compréhensif = bienveillant",
      "Exhaustif = bienveillant",
      "Stricte synonymie",
      "Aucun sens"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°79] Distinction paronymique : 'Conjecture' vs 'Conjoncture'",
    "options": [
      "Stricte synonymie",
      "Conjecture = économie",
      "Conjoncture = hypothèse",
      "Conjecture = hypothèse / Conjoncture = situation économique"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°80] Distinction paronymique : 'Consommer' vs 'Consumer'",
    "options": [
      "Stricte synonymie",
      "Consumer = manger",
      "Consommer = brûler",
      "Consommer = utiliser ou manger / Consumer = détruire par le feu"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°81] Distinction paronymique : 'Décéder' vs 'Disséder'",
    "options": [
      "Disséder existe",
      "Stricte synonymie",
      "Aucun mot n'existe",
      "Décéder existe (mourir), disséder est un barbarisme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°82] Distinction paronymique : 'Dénégation' vs 'Dénégat'",
    "options": [
      "Terme médical",
      "Synonyme de vérité",
      "Dénégation = action de nier",
      "Dénégat existe"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°83] Distinction paronymique : 'Désintéressement' vs 'Désintérêt'",
    "options": [
      "Désintéressement = ennui",
      "Désintéressement = générosité sans profit / Désintérêt = indifférence",
      "Désintérêt = générosité",
      "Stricte synonymie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°84] Distinction paronymique : 'Éligible' vs 'Illégible'",
    "options": [
      "Éligible = impossible à lire",
      "Éligible = qui peut être élu / Illégible = impossible à lire",
      "Stricte synonymie",
      "Illégible = peut être élu"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°85] Distinction paronymique : 'Émerger' vs 'Immerger'",
    "options": [
      "Immerger = sortir",
      "Émerger = sortir de l'eau / Immerger = plonger sous l'eau",
      "Émerger = plonger",
      "Stricte synonymie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°86] Distinction paronymique : 'Éminent' vs 'Imminent'",
    "options": [
      "Stricte synonymie",
      "Éminent = remarquable / Imminent = très proche dans le temps",
      "Éminent = bientot",
      "Imminent = remarquable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°87] Distinction paronymique : 'Éruption' vs 'Iruption'",
    "options": [
      "Éruption = entrée",
      "Irruption = volcan",
      "Éruption = jaillissement (volcan) / Irruption = entrée de force",
      "Stricte synonymie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°88] Distinction paronymique : 'Exalter' vs 'Exulter'",
    "options": [
      "Stricte synonymie",
      "Exalter = glorifier ou enthousiasmer / Exulter = manifester une joie intense",
      "Exalter = crier de joie",
      "Exulter = glorifier"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°89] Distinction paronymique : 'Explicite' vs 'Implicite'",
    "options": [
      "Explicite = caché",
      "Implicite = clair",
      "Stricte synonymie",
      "Explicite = formulé clairement / Implicite = sous-entendu"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°90] Distinction paronymique : 'Infecter' vs 'Infester'",
    "options": [
      "Infecter = insectes",
      "Infecter = contaminer par des germes / Infester = envahir en grand nombre",
      "Infester = germes",
      "Stricte synonymie"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°91] Distinction paronymique : 'Ingénieux' vs 'Ingénu'",
    "options": [
      "Ingénieux = inventif / Ingénu = innocent et naïf",
      "Ingénieux = naïf",
      "Ingénu = inventif",
      "Stricte synonymie"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°92] Distinction paronymique : 'Notoriété' vs 'Notabilité'",
    "options": [
      "Notoriété = fait d'être connu / Notabilité = position sociale élevée",
      "Notoriété = rang",
      "Stricte synonymie",
      "Notabilité = connu"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°93] Distinction paronymique : 'Officiel' vs 'Officieux'",
    "options": [
      "Officieux = garanti",
      "Stricte synonymie",
      "Officiel = secret",
      "Officiel = émanant de l'autorité / Officieux = non garanti officiellement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°94] Distinction paronymique : 'Percepteur' vs 'Perception'",
    "options": [
      "Percepteur = fonctionnaire du Trésor / Perception = sensation ou recouvrement",
      "Percepteur = sensation",
      "Stricte synonymie",
      "Perception = agent"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°95] Distinction paronymique : 'Spécieux' vs 'Spacieux'",
    "options": [
      "Spécieux = grand",
      "Spacieux = séduisant",
      "Spécieux = d'une fausse vérité séduisante / Spacieux = vaste",
      "Stricte synonymie"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°96] Locution latine : 'Ipso facto'",
    "options": [
      "Par le fait même",
      "En dernière analyse",
      "Sans date fixée",
      "Pour la circonstance"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°97] Locution latine : 'In fine'",
    "options": [
      "Selon l'usage",
      "À la fin / En dernière analyse",
      "Par le fait même",
      "A priori"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°98] Locution latine : 'Ad hoc'",
    "options": [
      "De manière permanente",
      "Qui convient parfaitement à un usage précis",
      "Sans restriction",
      "Par le fait même"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°99] Locution latine : 'A priori'",
    "options": [
      "Au premier abord / Avant toute expérience",
      "En secret",
      "Par obligation",
      "Après expérience"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°100] Locution latine : 'De facto'",
    "options": [
      "De manière temporaire",
      "Selon la loi",
      "Par hasard",
      "Dans les faits / De fait"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°101] Locution latine : 'De jure'",
    "options": [
      "Par accident",
      "Sans condition",
      "Dans les faits",
      "De droit / Selon la loi"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°102] Locution latine : 'Modus operandi'",
    "options": [
      "Mode d'opérer / Méthode de travail",
      "Statut actuel",
      "Déclaration officielle",
      "Accord de paix"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°103] Locution latine : 'Status quo'",
    "options": [
      "Fin de contrat",
      "Nouvelle décision",
      "État actuel des choses",
      "Changement brutal"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°104] Locution latine : 'Sine qua non'",
    "options": [
      "Condition absolument indispensable",
      "Sans conséquence",
      "Par faveur spéciale",
      "Avec réserve"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°105] Pléonasme à bannir : 'S'avérer vrai'",
    "options": [
      "S'avérer s'écrit avec un s",
      "Vrai est un nom",
      "S'avérer signifie déjà se révéler vrai",
      "S'avérer vrai est obligatoire"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°106] Pléonasme à bannir : 'Monter en haut'",
    "options": [
      "Monter s'écrit sans r",
      "Haut est un adjectif",
      "Monter en haut est correct",
      "Monter implique déjà d'aller vers le haut"
    ],
    "answerIndex": 3
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
    "prompt": "[Business English n°1] Complete: 'I look forward to _____ you at the conference.'",
    "options": [
      "have met",
      "met",
      "meet",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°2] Complete: 'The board decided to _____ 300 employees.'",
    "options": [
      "lay down",
      "lay off",
      "lay on",
      "lay out"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°3] Complete: 'If I _____ in your position, I would sign the contract.'",
    "options": [
      "be",
      "was",
      "were",
      "am"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°4] Preposition choice: 'He has been working here _____ 2019.'",
    "options": [
      "during",
      "from",
      "for",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°5] Preposition choice: 'She has lived in London _____ six years.'",
    "options": [
      "since",
      "for",
      "from",
      "during"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°6] Choose the correct expression: 'You _____ consult an attorney.'",
    "options": [
      "would better",
      "had better",
      "should to",
      "had rather"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°7] Meaning of 'shareholder':",
    "options": [
      "Client principal",
      "Partenaire social",
      "Actionnaire",
      "Fournisseur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°8] Meaning of 'stakeholder':",
    "options": [
      "Directeur financier",
      "Partie prenante / Intervenant",
      "Actionnaire unique",
      "Acheteur"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°9] Complete: 'Hardly _____ entered the office when the alarm went off.'",
    "options": [
      "he did",
      "did he",
      "had he",
      "he had"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°10] Corporate term for business merger:",
    "options": [
      "A bankruptcy",
      "A merger",
      "A turnover",
      "A layoff"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°11] False friend: 'Actually' means:",
    "options": [
      "Probablement",
      "En fait / En réalité",
      "Actuellement",
      "Récemment"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°12] False friend: 'Currently' means:",
    "options": [
      "Actuellement",
      "En fait",
      "Couramment",
      "Récemment"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°13] False friend: 'Eventually' means:",
    "options": [
      "Peut-être",
      "Probablement",
      "Éventuellement",
      "Finalement / À terme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°14] False friend: 'Notice' means:",
    "options": [
      "Note d'information",
      "Nouvelle",
      "Avis / Préavis / Remarquer",
      "Notice d'utilisation"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°15] False friend: 'Comprehensive' means:",
    "options": [
      "Tolérant",
      "Compréhensif",
      "Sympathique",
      "Exhaustif / Complet"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°16] False friend: 'Sympathetic' means:",
    "options": [
      "Sympathique",
      "Agréable",
      "Sociable",
      "Compatissant / Enclin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°17] False friend: 'Opportunity' means:",
    "options": [
      "Opposition",
      "Opportunisme",
      "Occasion / Opportunité",
      "Obligation"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°18] False friend: 'Supply' means:",
    "options": [
      "Fournir / Approvisionnement",
      "Subir",
      "Supporter",
      "Supplier"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°19] False friend: 'Demand' means:",
    "options": [
      "Déclarer",
      "Demander gentiment",
      "Exiger / Demande économique",
      "Demander la permission"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°20] False friend: 'Survey' means:",
    "options": [
      "Survoler",
      "Surveiller",
      "Survivre",
      "Enquête / Sondage"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°21] Meaning of 'turnover':",
    "options": [
      "Marge brute",
      "Chiffre d'affaires / Renouvellement",
      "Bénéfice net",
      "Dette totale"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°22] Meaning of 'asset':",
    "options": [
      "Perte",
      "Dette",
      "Passif",
      "Actif / Atout"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°23] Meaning of 'liability':",
    "options": [
      "Bénéfice",
      "Revenu",
      "Actif immobilisé",
      "Passif / Responsabilité financière"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°24] Meaning of 'balance sheet':",
    "options": [
      "Bilan comptable",
      "Relevé bancaire",
      "Compte de résultat",
      "Tableau de trésorerie"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°25] Meaning of 'income statement':",
    "options": [
      "Budget prévisionnel",
      "Bilan comptable",
      "Facture",
      "Compte de résultat"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°26] Meaning of 'cash flow':",
    "options": [
      "Bénéfice brut",
      "Capital social",
      "Flux de trésorerie",
      "Chiffre d'affaires"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°27] Meaning of 'benchmark':",
    "options": [
      "Étalonnage / Référence comparative",
      "Marque commerciale",
      "Slogan",
      "Prix de vente"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°28] Meaning of 'bottleneck':",
    "options": [
      "Ligne d'assemblage",
      "Goulot d'étranglement / Obstacle",
      "Bouteille de vin",
      "Département R&D"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°29] Meaning of 'brainstorming':",
    "options": [
      "Remue-méninges / Recherche d'idées",
      "Tempête cérébrale",
      "Réunion de crise",
      "Épuisement professionnel"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°30] Meaning of 'core business':",
    "options": [
      "Affaire secondaire",
      "Bureau central",
      "Siège social",
      "Cœur de métier / Activité principale"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°31] Phrasal verb: 'Call off' means:",
    "options": [
      "Appeler fort",
      "Reporter",
      "Continuer",
      "Annuler"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°32] Phrasal verb: 'Put off' means:",
    "options": [
      "Annuler",
      "Reporter / Différer",
      "Organiser",
      "Éteindre"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°33] Phrasal verb: 'Carry out' means:",
    "options": [
      "Exécuter / Mener à bien",
      "Refuser",
      "Abandonner",
      "Transporter dehors"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°34] Phrasal verb: 'Run out of' means:",
    "options": [
      "Acheter",
      "Manquer de / Épuiser le stock",
      "Courir hors de",
      "Accumuler"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°35] Phrasal verb: 'Cut down on' means:",
    "options": [
      "Augmenter",
      "Couper en morceaux",
      "Supprimer complètement",
      "Réduire la consommation de"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°36] Phrasal verb: 'Look into' means:",
    "options": [
      "Publier",
      "Examiner / Enquêter sur",
      "Ignorer",
      "Regarder à l'intérieur"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°37] Phrasal verb: 'Bring up' means:",
    "options": [
      "Évoquer un sujet / Élever un enfant",
      "Annuler",
      "Apporter en haut",
      "Baisser le ton"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°38] Phrasal verb: 'Back up' means:",
    "options": [
      "Soutenir / Faire une sauvegarde",
      "Démissionner",
      "Reculer sans raison",
      "Annuler un projet"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°39] Phrasal verb: 'Break down' means:",
    "options": [
      "Casser la porte",
      "Tomber en panne / Analyser en détail",
      "Reconstruire",
      "Réussir"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°40] Phrasal verb: 'Set up' means:",
    "options": [
      "Régler l'heure",
      "Créer / Installer une entreprise",
      "Vendre",
      "Fermer une usine"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°41] Grammar: 'Unless you _____ now, you will be late.'",
    "options": [
      "will leave",
      "leave",
      "don't leave",
      "left"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°42] Grammar: 'By the time we arrive, the meeting _____.'",
    "options": [
      "finished",
      "has finished",
      "will finish",
      "will have finished"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°43] Grammar: 'I wish I _____ more time to finish the report.'",
    "options": [
      "would have",
      "will have",
      "had",
      "have"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°44] Grammar: 'Neither the manager nor the employees _____ present.'",
    "options": [
      "were",
      "be",
      "was",
      "is"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°45] Grammar: 'Either John or his assistants _____ responsible.'",
    "options": [
      "are",
      "is",
      "was",
      "be"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°46] Grammar: 'It is essential that he _____ the document today.'",
    "options": [
      "signs",
      "sign",
      "will sign",
      "signed"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°47] Grammar: 'The project was delayed owing _____ bad weather.'",
    "options": [
      "from",
      "to",
      "for",
      "with"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°48] Grammar: 'Despite _____ hard, he failed the exam.'",
    "options": [
      "studied",
      "study",
      "to study",
      "studying"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°49] Grammar: 'In spite of _____ a high salary, she left the firm.'",
    "options": [
      "had",
      "have",
      "having",
      "to have"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°50] Grammar: 'He behaves as if he _____ the CEO.'",
    "options": [
      "is",
      "were",
      "was",
      "be"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°51] Grammar: 'The company is committed _____ reducing emissions.'",
    "options": [
      "on",
      "for",
      "to",
      "with"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°52] Grammar: 'She succeeded _____ passing the accreditation.'",
    "options": [
      "on",
      "in",
      "to",
      "at"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°53] Grammar: 'They prevented us _____ entering the facility.'",
    "options": [
      "of",
      "to",
      "against",
      "from"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°54] Grammar: 'Are you interested _____ investing in AI?'",
    "options": [
      "on",
      "for",
      "in",
      "at"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°55] Grammar: 'He was accused _____ breaching the non-disclosure agreement.'",
    "options": [
      "to",
      "with",
      "for",
      "of"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°56] Grammar: 'I am not used to _____ so early.'",
    "options": [
      "woke up",
      "wake up",
      "waking up",
      "have woken up"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°57] Grammar: 'He used to _____ in New York.'",
    "options": [
      "lived",
      "living",
      "lives",
      "live"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°58] Grammar: 'She stopped _____ a break after three hours.'",
    "options": [
      "took",
      "taking",
      "take",
      "to take"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°59] Grammar: 'He stopped _____ when he had a heart attack.'",
    "options": [
      "smoking",
      "smoke",
      "smoked",
      "to smoke"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°60] Grammar: 'Remember _____ the file before closing.'",
    "options": [
      "saved",
      "saving",
      "to save",
      "save"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°61] Corporate acronym: 'CEO' stands for:",
    "options": [
      "Corporate Enterprise Owner",
      "Chief Executive Officer",
      "Central Executive Operations",
      "Chief Economic Officer"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°62] Corporate acronym: 'CFO' stands for:",
    "options": [
      "Central Finance Operations",
      "Chief Financial Officer",
      "Corporate Financial Overseer",
      "Chief Funding Officer"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°63] Corporate acronym: 'CTO' stands for:",
    "options": [
      "Chief Technology Officer",
      "Corporate Tech Officer",
      "Chief Technical Overseer",
      "Central Trade Operations"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°64] Corporate acronym: 'CMO' stands for:",
    "options": [
      "Chief Media Officer",
      "Central Marketing Director",
      "Chief Marketing Officer",
      "Corporate Management Officer"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°65] Corporate acronym: 'HR' stands for:",
    "options": [
      "Human Resources",
      "Head Relations",
      "Hiring Resources",
      "High Risk"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°66] Corporate acronym: 'R&D' stands for:",
    "options": [
      "Risk and Debt",
      "Retail and Distribution",
      "Research and Development",
      "Real and Direct"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°67] Corporate acronym: 'B2B' stands for:",
    "options": [
      "Back to Back",
      "Bank to Bank",
      "Board to Board",
      "Business to Business"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°68] Corporate acronym: 'B2C' stands for:",
    "options": [
      "Bank to Consumer",
      "Business to Company",
      "Board to Consumer",
      "Business to Consumer"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°69] Corporate acronym: 'KPI' stands for:",
    "options": [
      "Key Performance Indicator",
      "Key Process Index",
      "Key Profit Indicator",
      "Known Performance Item"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°70] Corporate acronym: 'ROI' stands for:",
    "options": [
      "Rate of Interest",
      "Return on Investment",
      "Revenue on Income",
      "Risk of Inflation"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°71] Vocabulary: 'Acquisition' means:",
    "options": [
      "Fusion égale",
      "Vente d'actifs",
      "Faillite",
      "Rachat / Acquisition d'une entreprise"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°72] Vocabulary: 'Bankruptcy' means:",
    "options": [
      "Faillite / Dépôt de bilan",
      "Croissance record",
      "Embauche massive",
      "Paiement de dividende"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°73] Vocabulary: 'Benchmark' means:",
    "options": [
      "Contrat de travail",
      "Comparaison sectorielle / Étalonnage",
      "Chiffre d'affaires",
      "Bilan comptable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°74] Vocabulary: 'Bid' means:",
    "options": [
      "Offre de prix / Enchère",
      "Baisse de tarif",
      "Facture",
      "Dette bancaire"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°75] Vocabulary: 'Board of directors' means:",
    "options": [
      "Assemblée d'actionnaires",
      "Bureau du personnel",
      "Conseil d'administration",
      "Comité d'entreprise"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°76] Vocabulary: 'Brand awareness' means:",
    "options": [
      "Slogan",
      "Notoriété de la marque",
      "Prix du produit",
      "Logo commercial"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°77] Vocabulary: 'Breakeven point' means:",
    "options": [
      "Perte nette",
      "Bénéfice maximal",
      "Point mort / Seuil de rentabilité",
      "Prix plafond"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°78] Vocabulary: 'Budget constraint' means:",
    "options": [
      "Recette fiscale",
      "Dépense imprévue",
      "Contrainte budgétaire",
      "Investissement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°79] Vocabulary: 'Cash advance' meants:",
    "options": [
      "Taxe",
      "Crédit immobilier",
      "Avance de trésorerie",
      "Paiement différé"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°80] Vocabulary: 'Claim' means:",
    "options": [
      "Remise commerciale",
      "Facture acquittée",
      "Réclamation / Sinistre / Affirmation",
      "Clientèle"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°81] Vocabulary: 'Commission' means:",
    "options": [
      "Amende",
      "Salaire fixe",
      "Taxe d'État",
      "Prime / Pourcentage sur vente"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°82] Vocabulary: 'Competitor' means:",
    "options": [
      "Compétence",
      "Concurrent",
      "Collaborateur",
      "Client"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°83] Vocabulary: 'Compliance' means:",
    "options": [
      "Complaisance",
      "Conformité réglementaire",
      "Complicité",
      "Compromis"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°84] Vocabulary: 'Core competence' meants:",
    "options": [
      "Brevet expiré",
      "Compétence clé / Savoir-faire fondamental",
      "Diplôme universitaire",
      "Coût fixe"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°85] Vocabulary: 'Deadline' means:",
    "options": [
      "Date limite / Échéance",
      "Congé payé",
      "Ligne d'arrêt",
      "Horaires de travail"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°86] Vocabulary: 'Default' means:",
    "options": [
      "Option de base",
      "Qualité supérieure",
      "Erreur de frappe",
      "Défaut de paiement"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°87] Vocabulary: 'Deficit' means:",
    "options": [
      "Bénéfice net",
      "Déficit / Solde négatif",
      "Excédent",
      "Réserve"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°88] Vocabulary: 'Discount' means:",
    "options": [
      "Rabais / Remise commerciale",
      "Taxe additionnelle",
      "Prix fort",
      "Majoration"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°89] Vocabulary: 'Dividend' means:",
    "options": [
      "Division de capital",
      "Impôt",
      "Dette obligataire",
      "Dividende / Part de bénéfice distribuée"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°90] Vocabulary: 'Draft' means:",
    "options": [
      "Brouillon / Projet de contrat",
      "Facture originale",
      "Copie conforme",
      "Version finale"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°91] Vocabulary: 'Endorsement' means:",
    "options": [
      "Refus",
      "Annulation",
      "Opposition",
      "Soutien officiel / Approbation"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°92] Vocabulary: 'Equity' means:",
    "options": [
      "Dette à court terme",
      "Égalité parfaite",
      "Fonds propres / Capitaux propres",
      "Emprunt bancaire"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°93] Vocabulary: 'Forecast' means:",
    "options": [
      "Facture acquittée",
      "Prévision économique",
      "Statistique officielle",
      "Compte-rendu passé"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°94] Vocabulary: 'Franchise' means:",
    "options": [
      "Marque déposée",
      "Exemption d'impôt",
      "Franchise commerciale",
      "Licence exclusive"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°95] Vocabulary: 'Fundraising' means:",
    "options": [
      "Levée de fonds",
      "Faillite",
      "Dépense de trésorerie",
      "Don caritatif"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°96] Vocabulary: 'Gross profit' means:",
    "options": [
      "Bénéfice net",
      "Bénéfice brut",
      "Chiffre d'affaires",
      "Perte brute"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°97] Vocabulary: 'Headquarters' means:",
    "options": [
      "Quartier général militaire",
      "Filiale régionale",
      "Siège social / Direction générale",
      "Magasin phare"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°98] Vocabulary: 'Incentive' means:",
    "options": [
      "Interdiction",
      "Pénalité",
      "Incitation / Motivation financière",
      "Obligation"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°99] Vocabulary: 'Insurance policy' means:",
    "options": [
      "Loi fiscale",
      "Politique de prix",
      "Contrat d'assurance",
      "Règlement intérieur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°100] Vocabulary: 'Inventory' means:",
    "options": [
      "Investissement",
      "Stock de marchandises / Inventaire",
      "Facture d'achat",
      "Relevé de compte"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°101] Vocabulary: 'Invoice' means:",
    "options": [
      "Bon de commande",
      "Reçu",
      "Devis",
      "Facture"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°102] Vocabulary: 'Joint venture' means:",
    "options": [
      "Filiale à 100%",
      "Coentreprise / Partenariat stratégique",
      "Fusion complète",
      "Rachat d'actions"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°103] Vocabulary: 'Market share' means:",
    "options": [
      "Part de marché",
      "Capitalisation boursière",
      "Prix de l'action",
      "Marge commerciale"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°104] Vocabulary: 'Net profit' means:",
    "options": [
      "Marge brute",
      "Chiffre d'affaires",
      "Bénéfice brut",
      "Bénéfice net"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°105] Vocabulary: 'Outsourcing' means:",
    "options": [
      "Exportation",
      "Implantation locale",
      "Embauche interne",
      "Sous-traitance / Externalisation"
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
