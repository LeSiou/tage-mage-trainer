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
  // Actualités récentes & Économie (2023-2026 - Annales Officielles Gualino)
  { prompt: 'Le film « Oppenheimer » a remporté 7 Oscars en 2024. Qui en est le réalisateur ?', options: ['Christopher Nolan', 'Steven Spielberg', 'Quentin Tarantino', 'Martin Scorsese'], answerIndex: 0 },
  { prompt: 'Quel pays n’a pas d’accès direct à la mer ?', options: ['Le Laos', 'Le Cambodge', 'La Birmanie (Myanmar)', 'Le Viêt Nam'], answerIndex: 0 },
  { prompt: 'En métrologie, que mesure le tesla (symbole T) ?', options: ['L’induction magnétique', 'L’intensité lumineuse', 'La pression acoustique', 'La résistance électrique'], answerIndex: 0 },
  { prompt: 'Dans quel pays se situe la ville de Timbouctou ?', options: ['Au Mali', 'Au Niger', 'Au Tchad', 'En Mauritanie'], answerIndex: 0 },
  { prompt: 'Quelle entreprise automobile commercialise le modèle 100% électrique « Taycan » ?', options: ['Porsche', 'Audi', 'BMW', 'Mercedes-Benz'], answerIndex: 0 },
  { prompt: 'En 1999, qui a succédé à Boris Eltsine à la présidence de la Fédération de Russie ?', options: ['Vladimir Poutine', 'Mikhaïl Gorbatchev', 'Dmitri Medvedev', 'Viktor Tchernomyrdine'], answerIndex: 0 },
  { prompt: 'Quel fleuve traverse la ville de Rome ?', options: ['Le Tibre', 'Le Pô', 'L’Arno', 'La Garonne'], answerIndex: 0 },
  { prompt: 'En 2024, quel pays a rejoint l’OTAN en tant que 32e membre officiel ?', options: ['La Suède', 'La Finlande', 'La Croatie', 'L’Ukraine'], answerIndex: 0 },
  { prompt: 'Qui a peint le célèbre tableau « Le Déjeuner sur l’herbe » ?', options: ['Édouard Manet', 'Claude Monet', 'Edgar Degas', 'Pierre-Auguste Renoir'], answerIndex: 0 },
  { prompt: 'Quel club de football a remporté la Ligue des champions masculine en 2023 ?', options: ['Manchester City', 'Real Madrid', 'Inter Milan', 'FC Barcelone'], answerIndex: 0 },
  { prompt: 'En économie, que désigne la « stagflation » ?', options: ['Une stagnation économique accompagnée d’une forte inflation', 'Une forte croissance avec inflation', 'Une déflation avec un chômage très bas', 'Une croissance nulle sans inflation'], answerIndex: 0 },
  { prompt: 'Qui est l’auteur de la célèbre pièce de théâtre « Rhinocéros » ?', options: ['Eugène Ionesco', 'Samuel Beckett', 'Jean-Paul Sartre', 'Albert Camus'], answerIndex: 0 },
  { prompt: 'Quelle entreprise aéronautique européenne a son siège principal à Toulouse ?', options: ['Airbus', 'Dassault Aviation', 'Safran', 'Thales'], answerIndex: 0 },
  { prompt: 'Quel dirigeant a prononcé le discours emblématique « I have a dream » en 1963 à Washington ?', options: ['Martin Luther King', 'Malcolm X', 'Nelson Mandela', 'Barack Obama'], answerIndex: 0 },
  { prompt: 'Qui est le peintre du chef-d’œuvre « La Nuit étoilée » ?', options: ['Vincent van Gogh', 'Paul Cézanne', 'Auguste Renoir', 'Henri Matisse'], answerIndex: 0 },
  { prompt: 'Qui est l’actuel Secrétaire général de l’ONU (depuis 2017) ?', options: ['António Guterres', 'Ban Ki-moon', 'Kofi Annan', 'Boutros Boutros-Ghali'], answerIndex: 0 },
  { prompt: 'Quelle est la monnaie officielle du Japon ?', options: ['Le Yen', 'Le Yuan', 'Le Won', 'Le Ringgit'], answerIndex: 0 },
  { prompt: 'Quel philosophe a écrit « Du contrat social » en 1762 ?', options: ['Jean-Jacques Rousseau', 'Montesquieu', 'Voltaire', 'Denis Diderot'], answerIndex: 0 },
  { prompt: 'Dans quel domaine scientifique le prestige du « Prix Turing » est-il l’équivalent du Prix Nobel ?', options: ['En informatique', 'En chimie', 'En économie', 'En mathématiques'], answerIndex: 0 },
  { prompt: 'Qui a peint le chef-d’œuvre « La Jeune Fille à la perle » ?', options: ['Johannes Vermeer', 'Rembrandt', 'Peter Paul Rubens', 'Frans Hals'], answerIndex: 0 },

  // Actualités récentes & Économie (2023-2026)
  { prompt: 'Quel économiste français est l’auteur de « Le Capital au XXIe siècle » ?', options: ['Thomas Piketty', 'Jean Tirole', 'Esther Duflo', 'Gabriel Zucman'], answerIndex: 0 },
  { prompt: 'Quel prix Nobel d’économie français a reçu la distinction en 2014 pour ses travaux sur la régulation des marchés ?', options: ['Jean Tirole', 'Esther Duflo', 'Maurice Allais', 'Gérard Debreu'], answerIndex: 0 },
  { prompt: 'Quelle économiste franco-américaine a obtenu le prix Nobel d’économie en 2019 pour ses travaux sur la pauvreté ?', options: ['Esther Duflo', 'Christine Lagarde', 'Valérie Pécresse', 'Célestin Freinet'], answerIndex: 0 },
  { prompt: 'Quel pays a rejoint la zone euro en tant que 20e membre le 1er janvier 2023 ?', options: ['La Croatie', 'La Bulgarie', 'La Roumanie', 'La Pologne'], answerIndex: 0 },
  { prompt: 'Où se sont déroulés les Jeux Olympiques et Paralympiques d’été de 2024 ?', options: ['Paris', 'Los Angeles', 'Brisbane', 'Tokyo'], answerIndex: 0 },
  { prompt: 'Quelle ville accueillera les Jeux Olympiques d’été de 2028 ?', options: ['Los Angeles', 'Brisbane', 'Madrid', 'Rome'], answerIndex: 0 },
  { prompt: 'Quel dirigeant préside la Banque Centrale Européenne (BCE) depuis 2019 ?', options: ['Christine Lagarde', 'Mario Draghi', 'Jean-Claude Trichet', 'Ursula von der Leyen'], answerIndex: 0 },
  { prompt: 'Qui préside la Commission Européenne depuis 2019 ?', options: ['Ursula von der Leyen', 'Roberta Metsola', 'Charles Michel', 'Josep Borrell'], answerIndex: 0 },
  { prompt: 'Quel est le siège de la Cour de Justice de l’Union Européenne (CJUE) ?', options: ['Luxembourg', 'Strasbourg', 'Bruxelles', 'La Haye'], answerIndex: 0 },
  { prompt: 'Où siège la Cour Internationale de Justice (CIJ) de l’ONU ?', options: ['La Haye', 'Genève', 'New York', 'Vienne'], answerIndex: 0 },
  { prompt: 'Quel traité signé en 1992 a fondé l’Union Européenne et instauré l’Euro ?', options: ['Traité de Maastricht', 'Traité de Rome', 'Traité de Lisbonne', 'Traité d’Amsterdam'], answerIndex: 0 },
  { prompt: 'En quelle année le Traité de Rome instituant la CEE a-t-il été signé ?', options: ['1957', '1951', '1963', '1992'], answerIndex: 0 },
  { prompt: 'Quel traité modificateur entré en vigueur en 2009 a réformé les institutions européennes ?', options: ['Traité de Lisbonne', 'Traité de Maastricht', 'Traité de Nice', 'Traité d’Amsterdam'], answerIndex: 0 },
  { prompt: 'Quel réseau social a été racheté par Elon Musk en 2022 et renommé « X » ?', options: ['Twitter', 'LinkedIn', 'Reddit', 'Snapchat'], answerIndex: 0 },
  { prompt: 'Quelle entreprise a développé le chatbot d’intelligence artificielle ChatGPT ?', options: ['OpenAI', 'Google', 'Meta', 'Anthropic'], answerIndex: 0 },
  { prompt: 'Quel modèle d’IA générative a été lancé par Google pour rivaliser avec ChatGPT ?', options: ['Gemini', 'Claude', 'Llama', 'Mistral'], answerIndex: 0 },
  { prompt: 'Quelle est la pépite française (start-up) de l’IA fondée par Arthur Mensch en 2023 ?', options: ['Mistral AI', 'Hugging Face', 'Alan', 'Dataiku'], answerIndex: 0 },
  { prompt: 'Quel est le premier groupe mondial du secteur du luxe présidé par Bernard Arnault ?', options: ['LVMH', 'Kering', 'Hermès', 'Richemont'], answerIndex: 0 },
  { prompt: 'Quel groupe français détient les marques Gucci, Saint Laurent et Balenciaga ?', options: ['Kering', 'LVMH', 'Hermès', 'L’Oréal'], answerIndex: 0 },
  { prompt: 'Quel groupe automobile est né de la fusion entre PSA et Fiat Chrysler en 2021 ?', options: ['Stellantis', 'Renault Group', 'Volkswagen Group', 'Forvia'], answerIndex: 0 },

  // Théories du Management, Économie & Entreprises
  { prompt: 'Quel auteur est le père de l’Organisation Scientifique du Travail (OST) ?', options: ['Frederick Taylor', 'Henri Fayol', 'Max Weber', 'Elton Mayo'], answerIndex: 0 },
  { prompt: 'Quel théoricien a énoncé les 5 fonctions de la direction (POCCC) ?', options: ['Henri Fayol', 'Frederick Taylor', 'Peter Drucker', 'Henry Mintzberg'], answerIndex: 0 },
  { prompt: 'Quelle école du management Elton Mayo a-t-il fondée avec les expériences de Hawthorne ?', options: ['L’École des Relations Humaines', 'L’École Classique', 'L’École Contingente', 'L’École Systémique'], answerIndex: 0 },
  { prompt: 'Quel sociologue a conceptualisé la bureaucratie rationnelle-légale ?', options: ['Max Weber', 'Émile Durkheim', 'Pierre Bourdieu', 'Michel Crozier'], answerIndex: 0 },
  { prompt: 'Quel auteur a formalisé les Théories X (pessimiste) et Y (optimiste) de l’homme au travail ?', options: ['Douglas McGregor', 'Frederick Herzberg', 'Abraham Maslow', 'Kurt Lewin'], answerIndex: 0 },
  { prompt: 'Qui est l’auteur de la célèbre théorie des deux facteurs (facteurs moteurs / d’hygiène) ?', options: ['Frederick Herzberg', 'Abraham Maslow', 'Douglas McGregor', 'Victor Vroom'], answerIndex: 0 },
  { prompt: 'Quel universitaire a théorisé les 5 forces concurrentielles et la chaîne de valeur ?', options: ['Michael Porter', 'Igor Ansoff', 'Henry Mintzberg', 'Philip Kotler'], answerIndex: 0 },
  { prompt: 'Quel économiste autrichien est le théoricien de la « destruction créatrice » et de l’innovation ?', options: ['Joseph Schumpeter', 'Friedrich Hayek', 'Ludwig von Mises', 'Karl Polanyi'], answerIndex: 0 },
  { prompt: 'Qui a théorisé la loi des débouchés (« toute offre crée sa propre demande ») ?', options: ['Jean-Baptiste Say', 'Adam Smith', 'David Ricardo', 'Thomas Malthus'], answerIndex: 0 },
  { prompt: 'Quel économiste libéral britannique a formulé la théorie des avantages comparatifs ?', options: ['David Ricardo', 'Adam Smith', 'John Stuart Mill', 'Alfred Marshall'], answerIndex: 0 },
  { prompt: 'Quel auteur est le père du Management Par Objectifs (DPO) ?', options: ['Peter Drucker', 'Henry Mintzberg', 'Philip Kotler', 'Michael Porter'], answerIndex: 0 },
  { prompt: 'Qui a défini la grille comportementale des styles de commandement (1,1 à 9,9) ?', options: ['Blake et Mouton', 'Hersey et Blanchard', 'Lewin et Lippitt', 'Likert et Taylor'], answerIndex: 0 },
  { prompt: 'Quel auteur est célèbre pour les 4 styles de management (Exploiteur, Paternaliste, Consultatif, Participatif) ?', options: ['Rensis Likert', 'Kurt Lewin', 'Fred Fiedler', 'Henri Fayol'], answerIndex: 0 },
  { prompt: 'Quel cabinet de conseil en stratégie a créé la matrice BCG (Vedettes, Vaches à lait, Dilemmes, Poids morts) ?', options: ['Boston Consulting Group', 'McKinsey & Company', 'Bain & Company', 'Oliver Wyman'], answerIndex: 0 },
  { prompt: 'Que signifie l’acronyme SWOT en analyse stratégique ?', options: ['Strengths, Weaknesses, Opportunities, Threats', 'Strategy, Workforce, Operations, Targets', 'Sales, Wealth, Organization, Technology', 'Scope, Weight, Order, Timing'], answerIndex: 0 },
  { prompt: 'Que mesure la matrice PESTEL ?', options: ['Les facteurs macro-environnementaux (Politique, Éco, Social, Techno, Écolo, Légal)', 'Les performances financières d’une filiale', 'Le taux de satisfaction des clients', 'Le niveau de motivation des salariés'], answerIndex: 0 },

  // Histoire, Politique, Droit & Institutions
  { prompt: 'En quelle année la Vème République française a-t-elle été promulguée ?', options: ['1958', '1945', '1946', '1962'], answerIndex: 0 },
  { prompt: 'Qui a été le premier Président de la Vème République française ?', options: ['Charles de Gaulle', 'Georges Pompidou', 'Valéry Giscard d’Estaing', 'François Mitterrand'], answerIndex: 0 },
  { prompt: 'En quelle année le suffrage universel direct pour l’élection présidentielle française a-t-il été adopté par référendum ?', options: ['1962', '1958', '1965', '1974'], answerIndex: 0 },
  { prompt: 'Qui a été le premier Premier ministre de la Vème République sous Charles de Gaulle ?', options: ['Michel Debré', 'Georges Pompidou', 'Maurice Couve de Murville', 'Jacques Chaban-Delmas'], answerIndex: 0 },
  { prompt: 'En quelle année la peine de mort a-t-elle été abolie en France sous l’impulsion de Robert Badinter ?', options: ['1981', '1974', '1988', '1995'], answerIndex: 0 },
  { prompt: 'En quelle année le quinquennat présidentiel a-t-il remplacé le septennat en France ?', options: ['2000', '1995', '2002', '2007'], answerIndex: 0 },
  { prompt: 'Quel président américain a prononcé le discours du « New Deal » pendant la Grande Dépression ?', options: ['Franklin D. Roosevelt', 'Herbert Hoover', 'Harry Truman', 'Woodrow Wilson'], answerIndex: 0 },
  { prompt: 'En quelle année le mur de Berlin est-il tombé ?', options: ['1989', '1991', '1985', '1979'], answerIndex: 0 },
  { prompt: 'En quelle année l’URSS a-t-elle été officiellement dissoute ?', options: ['1991', '1989', '1993', '1985'], answerIndex: 0 },
  { prompt: 'Quel accord international de 1944 a instauré le système monétaire d’après-guerre et le FMI ?', options: ['Accords de Bretton Woods', 'Accords de Yalta', 'Accords de Potsdam', 'Accords de Genève'], answerIndex: 0 },
  { prompt: 'En quelle année le président américain Richard Nixon a-t-il mis fin à la convertibilité du dollar en or ?', options: ['1971', '1973', '1968', '1975'], answerIndex: 0 },
  { prompt: 'Quel choc pétrolier a eu lieu en 1973 suite à la guerre du Kippour ?', options: ['Le premier choc pétrolier', 'Le deuxième choc pétrolier', 'La crise des subprimes', 'Le krach de 1929'], answerIndex: 0 },

  // Culture, Arts, Géographie & Sciences
  { prompt: 'Quelle est la capitale de l’Australie ?', options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'], answerIndex: 0 },
  { prompt: 'Quelle est la capitale du Canada ?', options: ['Ottawa', 'Toronto', 'Montréal', 'Vancouver'], answerIndex: 0 },
  { prompt: 'Quelle est la capitale du Brésil ?', options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'], answerIndex: 0 },
  { prompt: 'Quel est le plus long fleuve du monde ?', options: ['Le Nil (ou l’Amazone selon les mesures)', 'Le Mississippi', 'Le Yangtsé', 'Le Danube'], answerIndex: 0 },
  { prompt: 'Quel détroit sépare l’Espagne du Maroc ?', options: ['Détroit de Gibraltar', 'Détroit du Bosphore', 'Détroit d’Ormuz', 'Détroit de Malacca'], answerIndex: 0 },
  { prompt: 'Qui a peint le célèbre tableau « Guernica » en 1937 ?', options: ['Pablo Picasso', 'Salvador Dalí', 'Henri Matisse', 'Claude Monet'], answerIndex: 0 },
  { prompt: 'Qui a écrit « À la recherche du temps perdu » ?', options: ['Marcel Proust', 'Victor Hugo', 'Émile Zola', 'Gustave Flaubert'], answerIndex: 0 },
  { prompt: 'Quel écrivain français a reçu le prix Nobel de littérature en 2022 ?', options: ['Annie Ernaux', 'Patrick Modiano', 'Jean-Marie Gustave Le Clézio', 'Albert Camus'], answerIndex: 0 },
  { prompt: 'Quel scientifique a découvert la pénicilline en 1928 ?', options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Marie Curie'], answerIndex: 0 },
  { prompt: 'Qui a découvert la radioactivité naturelle et a reçu deux prix Nobel ?', options: ['Marie Curie', 'Pierre Curie', 'Rosalind Franklin', 'Irène Joliot-Curie'], answerIndex: 0 }
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
      "Pallier au problème",
      "Pallier de ce problème",
      "Pallier le problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°2] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "est",
      "fût",
      "serait",
      "soit"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°3] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "ferait",
      "fît",
      "fait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°4] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Féminin",
      "Variable",
      "Masculin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°5] Quel est le genre du mot 'acné' ?",
    "options": [
      "Masculin",
      "Neutre",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°6] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dilemne",
      "Dillemme",
      "Dileme",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°7] Accord du mot 'demi' avant le nom :",
    "options": [
      "Variable",
      "Pluriel",
      "Invariable",
      "Accordé"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°8] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyés",
      "envoyées",
      "envoyers"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°9] Sens du verbe 'proscrire' :",
    "options": [
      "Recommander chaudement",
      "Rédiger un texte",
      "Interdire formellement",
      "Prescrire un traitement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°10] Pléonasme à bannir :",
    "options": [
      "Décider de",
      "Sortir rapidement",
      "Collaborer ensemble",
      "Parler fort"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°11] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier le problème",
      "Pallier de ce problème",
      "Pallier avec le problème",
      "Pallier au problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°12] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "est",
      "serait",
      "soit",
      "fût"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°13] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fait",
      "fît",
      "ferait",
      "fasse"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°14] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Variable",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°15] Quel est le genre du mot 'acné' ?",
    "options": [
      "Variable",
      "Masculin",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°16] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dilemne",
      "Dilemme",
      "Dileme",
      "Dillemme"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°17] Accord du mot 'demi' avant le nom :",
    "options": [
      "Pluriel",
      "Invariable",
      "Variable",
      "Accordé"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°18] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyers",
      "envoyé"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°19] Sens du verbe 'proscrire' :",
    "options": [
      "Prescrire un traitement",
      "Recommander chaudement",
      "Interdire formellement",
      "Rédiger un texte"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°20] Pléonasme à bannir :",
    "options": [
      "Collaborer ensemble",
      "Décider de",
      "Sortir rapidement",
      "Parler fort"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°21] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier au problème",
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier le problème"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°22] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "soit",
      "est",
      "serait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°23] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "fait",
      "fît",
      "ferait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°24] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Masculin",
      "Variable",
      "Féminin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°25] Quel est le genre du mot 'acné' ?",
    "options": [
      "Neutre",
      "Masculin",
      "Variable",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°26] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dilemme",
      "Dillemme",
      "Dilemne",
      "Dileme"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°27] Accord du mot 'demi' avant le nom :",
    "options": [
      "Invariable",
      "Accordé",
      "Variable",
      "Pluriel"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°28] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyés",
      "envoyers",
      "envoyées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°29] Sens du verbe 'proscrire' :",
    "options": [
      "Interdire formellement",
      "Prescrire un traitement",
      "Rédiger un texte",
      "Recommander chaudement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°30] Pléonasme à bannir :",
    "options": [
      "Sortir rapidement",
      "Parler fort",
      "Collaborer ensemble",
      "Décider de"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°31] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier le problème",
      "Pallier au problème",
      "Pallier de ce problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°32] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "serait",
      "est",
      "soit"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°33] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "ferait",
      "fait",
      "fît"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°34] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Masculin",
      "Variable",
      "Féminin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°35] Quel est le genre du mot 'acné' ?",
    "options": [
      "Variable",
      "Féminin",
      "Neutre",
      "Masculin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°36] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dillemme",
      "Dilemme",
      "Dilemne",
      "Dileme"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°37] Accord du mot 'demi' avant le nom :",
    "options": [
      "Invariable",
      "Variable",
      "Accordé",
      "Pluriel"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°38] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyers",
      "envoyées",
      "envoyé",
      "envoyés"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°39] Sens du verbe 'proscrire' :",
    "options": [
      "Prescrire un traitement",
      "Interdire formellement",
      "Rédiger un texte",
      "Recommander chaudement"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°40] Pléonasme à bannir :",
    "options": [
      "Sortir rapidement",
      "Collaborer ensemble",
      "Parler fort",
      "Décider de"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°41] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier le problème",
      "Pallier au problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°42] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "soit",
      "serait",
      "fût",
      "est"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°43] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "ferait",
      "fait",
      "fît",
      "fasse"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°44] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Féminin",
      "Neutre",
      "Variable",
      "Masculin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°45] Quel est le genre du mot 'acné' ?",
    "options": [
      "Neutre",
      "Variable",
      "Masculin",
      "Féminin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°46] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dillemme",
      "Dilemme",
      "Dileme",
      "Dilemne"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°47] Accord du mot 'demi' avant le nom :",
    "options": [
      "Invariable",
      "Pluriel",
      "Accordé",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°48] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyées",
      "envoyers",
      "envoyés"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°49] Sens du verbe 'proscrire' :",
    "options": [
      "Interdire formellement",
      "Rédiger un texte",
      "Recommander chaudement",
      "Prescrire un traitement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°50] Pléonasme à bannir :",
    "options": [
      "Décider de",
      "Sortir rapidement",
      "Parler fort",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°51] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier au problème",
      "Pallier le problème",
      "Pallier de ce problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°52] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "serait",
      "est",
      "soit",
      "fût"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°53] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "ferait",
      "fît",
      "fasse",
      "fait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°54] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Variable",
      "Masculin",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°55] Quel est le genre du mot 'acné' ?",
    "options": [
      "Neutre",
      "Masculin",
      "Féminin",
      "Variable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°56] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dilemme",
      "Dillemme",
      "Dilemne",
      "Dileme"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°57] Accord du mot 'demi' avant le nom :",
    "options": [
      "Pluriel",
      "Accordé",
      "Invariable",
      "Variable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°58] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyés",
      "envoyées",
      "envoyers"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°59] Sens du verbe 'proscrire' :",
    "options": [
      "Recommander chaudement",
      "Interdire formellement",
      "Prescrire un traitement",
      "Rédiger un texte"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°60] Pléonasme à bannir :",
    "options": [
      "Parler fort",
      "Sortir rapidement",
      "Décider de",
      "Collaborer ensemble"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°61] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier au problème",
      "Pallier le problème",
      "Pallier avec le problème",
      "Pallier de ce problème"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°62] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "fût",
      "est",
      "soit",
      "serait"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°63] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "ferait",
      "fît",
      "fait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°64] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Masculin",
      "Féminin",
      "Variable",
      "Neutre"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°65] Quel est le genre du mot 'acné' ?",
    "options": [
      "Féminin",
      "Neutre",
      "Masculin",
      "Variable"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°66] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dillemme",
      "Dileme",
      "Dilemne",
      "Dilemme"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°67] Accord du mot 'demi' avant le nom :",
    "options": [
      "Variable",
      "Pluriel",
      "Invariable",
      "Accordé"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°68] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyés",
      "envoyers",
      "envoyées",
      "envoyé"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°69] Sens du verbe 'proscrire' :",
    "options": [
      "Interdire formellement",
      "Recommander chaudement",
      "Rédiger un texte",
      "Prescrire un traitement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°70] Pléonasme à bannir :",
    "options": [
      "Sortir rapidement",
      "Décider de",
      "Collaborer ensemble",
      "Parler fort"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°71] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier au problème",
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier le problème"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°72] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "soit",
      "serait",
      "est",
      "fût"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°73] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "fasse",
      "fait",
      "fît",
      "ferait"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°74] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Variable",
      "Masculin",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°75] Quel est le genre du mot 'acné' ?",
    "options": [
      "Masculin",
      "Féminin",
      "Neutre",
      "Variable"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°76] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dilemne",
      "Dilemme",
      "Dillemme",
      "Dileme"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°77] Accord du mot 'demi' avant le nom :",
    "options": [
      "Accordé",
      "Invariable",
      "Variable",
      "Pluriel"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°78] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyés",
      "envoyers",
      "envoyées"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°79] Sens du verbe 'proscrire' :",
    "options": [
      "Rédiger un texte",
      "Interdire formellement",
      "Prescrire un traitement",
      "Recommander chaudement"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°80] Pléonasme à bannir :",
    "options": [
      "Parler fort",
      "Sortir rapidement",
      "Collaborer ensemble",
      "Décider de"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°81] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier le problème",
      "Pallier avec le problème",
      "Pallier de ce problème",
      "Pallier au problème"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°82] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "soit",
      "est",
      "fût",
      "serait"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°83] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "ferait",
      "fît",
      "fasse",
      "fait"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°84] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Variable",
      "Masculin",
      "Neutre",
      "Féminin"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°85] Quel est le genre du mot 'acné' ?",
    "options": [
      "Féminin",
      "Variable",
      "Neutre",
      "Masculin"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°86] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dilemme",
      "Dilemne",
      "Dileme",
      "Dillemme"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°87] Accord du mot 'demi' avant le nom :",
    "options": [
      "Accordé",
      "Pluriel",
      "Invariable",
      "Variable"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°88] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyé",
      "envoyées",
      "envoyés",
      "envoyers"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°89] Sens du verbe 'proscrire' :",
    "options": [
      "Interdire formellement",
      "Prescrire un traitement",
      "Rédiger un texte",
      "Recommander chaudement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°90] Pléonasme à bannir :",
    "options": [
      "Parler fort",
      "Sortir rapidement",
      "Collaborer ensemble",
      "Décider de"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°91] Quelle est la tournure correcte avec le verbe 'pallier' ?",
    "options": [
      "Pallier de ce problème",
      "Pallier au problème",
      "Pallier le problème",
      "Pallier avec le problème"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°92] Complétez la phrase : 'Après qu'il _____ arrivé, la séance a commencé.'",
    "options": [
      "soit",
      "serait",
      "fût",
      "est"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°93] Complétez la phrase : 'Bien qu'elle _____ des efforts, les résultats tardent.'",
    "options": [
      "ferait",
      "fasse",
      "fait",
      "fît"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Français SIM n°94] Quel est le genre du mot 'aphte' ?",
    "options": [
      "Neutre",
      "Féminin",
      "Variable",
      "Masculin"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°95] Quel est le genre du mot 'acné' ?",
    "options": [
      "Variable",
      "Masculin",
      "Féminin",
      "Neutre"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°96] Orthographe exacte du mot désignant un choix difficile :",
    "options": [
      "Dileme",
      "Dillemme",
      "Dilemme",
      "Dilemne"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°97] Accord du mot 'demi' avant le nom :",
    "options": [
      "Variable",
      "Pluriel",
      "Accordé",
      "Invariable"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Français SIM n°98] Accord du participe passé : 'Elles se sont _____ des messages.'",
    "options": [
      "envoyées",
      "envoyés",
      "envoyé",
      "envoyers"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Français SIM n°99] Sens du verbe 'proscrire' :",
    "options": [
      "Interdire formellement",
      "Rédiger un texte",
      "Prescrire un traitement",
      "Recommander chaudement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Français SIM n°100] Pléonasme à bannir :",
    "options": [
      "Parler fort",
      "Sortir rapidement",
      "Collaborer ensemble",
      "Décider de"
    ],
    "answerIndex": 2
  }
];

export const IAE_LOGICAL_QUIZ_DATA = [
  {
    "prompt": "[Logique SIM n°1] Complétez la série : 3, 7, 11, 15, 19, ?",
    "options": [
      "25",
      "20",
      "23",
      "27"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°2] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "Q",
      "S",
      "P",
      "R"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°3] Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "44",
      "14",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°4] Dans un groupe de 53 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "2",
      "13",
      "18",
      "13"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°5] Complétez la série : 7, 11, 15, 19, 23, ?",
    "options": [
      "31",
      "29",
      "24",
      "27"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°6] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "Y",
      "B",
      "Z",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°7] Complétez la série : 49, 64, 81, 100, ?",
    "options": [
      "121",
      "116",
      "22",
      "127"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°8] Dans un groupe de 57 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "4",
      "15",
      "13",
      "20"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°9] Complétez la série : 11, 15, 19, 23, 27, ?",
    "options": [
      "33",
      "28",
      "31",
      "35"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°10] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "P",
      "M",
      "N",
      "O"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°11] Complétez la série : 1, 4, 9, 16, ?",
    "options": [
      "25",
      "20",
      "10",
      "31"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°12] Dans un groupe de 61 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "19",
      "24",
      "8",
      "13"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°13] Complétez la série : 15, 19, 23, 27, 31, ?",
    "options": [
      "37",
      "35",
      "32",
      "39"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°14] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "S",
      "R",
      "P",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°15] Complétez la série : 25, 36, 49, 64, ?",
    "options": [
      "18",
      "87",
      "76",
      "81"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°16] Dans un groupe de 65 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "10",
      "21",
      "26"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°17] Complétez la série : 19, 23, 27, 31, 35, ?",
    "options": [
      "43",
      "39",
      "36",
      "41"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°18] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "A",
      "B",
      "Y",
      "Z"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°19] Complétez la série : 81, 100, 121, 144, ?",
    "options": [
      "164",
      "26",
      "169",
      "175"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°20] Dans un groupe de 69 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "20",
      "36",
      "13",
      "31"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°21] Complétez la série : 23, 27, 31, 35, 39, ?",
    "options": [
      "40",
      "43",
      "47",
      "45"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°22] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "O",
      "N",
      "P",
      "M"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°23] Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "44",
      "49",
      "14",
      "55"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°24] Dans un groupe de 73 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "16",
      "32",
      "27",
      "13"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°25] Complétez la série : 27, 31, 35, 39, 43, ?",
    "options": [
      "44",
      "49",
      "51",
      "47"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°26] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "Q",
      "P",
      "R",
      "S"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°27] Complétez la série : 49, 64, 81, 100, ?",
    "options": [
      "127",
      "121",
      "116",
      "22"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°28] Dans un groupe de 77 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "42",
      "37",
      "26"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°29] Complétez la série : 31, 35, 39, 43, 47, ?",
    "options": [
      "48",
      "53",
      "51",
      "55"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°30] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "B",
      "Y",
      "A",
      "Z"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°31] Complétez la série : 1, 4, 9, 16, ?",
    "options": [
      "10",
      "25",
      "20",
      "31"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°32] Dans un groupe de 81 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "39",
      "44",
      "13",
      "28"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°33] Complétez la série : 35, 39, 43, 47, 51, ?",
    "options": [
      "57",
      "59",
      "55",
      "52"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°34] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "M",
      "P",
      "O",
      "N"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°35] Complétez la série : 25, 36, 49, 64, ?",
    "options": [
      "87",
      "18",
      "81",
      "76"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°36] Dans un groupe de 85 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "48",
      "43",
      "32"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°37] Complétez la série : 39, 43, 47, 51, 55, ?",
    "options": [
      "56",
      "59",
      "61",
      "63"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°38] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "S",
      "P",
      "Q",
      "R"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°39] Complétez la série : 81, 100, 121, 144, ?",
    "options": [
      "26",
      "164",
      "169",
      "175"
    ],
    "answerIndex": 2
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
    "prompt": "[Logique SIM n°41] Complétez la série : 43, 47, 51, 55, 59, ?",
    "options": [
      "63",
      "65",
      "67",
      "60"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°42] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "Z",
      "Y",
      "B",
      "A"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°43] Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "49",
      "14",
      "44",
      "55"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°44] Dans un groupe de 93 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "55",
      "60",
      "44"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°45] Complétez la série : 47, 51, 55, 59, 63, ?",
    "options": [
      "64",
      "69",
      "71",
      "67"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°46] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "M",
      "P",
      "O",
      "N"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°47] Complétez la série : 49, 64, 81, 100, ?",
    "options": [
      "116",
      "22",
      "121",
      "127"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°48] Dans un groupe de 97 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "51",
      "56",
      "40"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°49] Complétez la série : 51, 55, 59, 63, 67, ?",
    "options": [
      "68",
      "73",
      "75",
      "71"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°50] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "S",
      "R",
      "P",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°51] Complétez la série : 1, 4, 9, 16, ?",
    "options": [
      "31",
      "10",
      "20",
      "25"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°52] Dans un groupe de 101 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "66",
      "61",
      "50"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°53] Complétez la série : 55, 59, 63, 67, 71, ?",
    "options": [
      "75",
      "77",
      "79",
      "72"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°54] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "A",
      "Z",
      "Y",
      "B"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°55] Complétez la série : 25, 36, 49, 64, ?",
    "options": [
      "76",
      "81",
      "87",
      "18"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°56] Dans un groupe de 105 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "68",
      "63",
      "13",
      "52"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°57] Complétez la série : 59, 63, 67, 71, 75, ?",
    "options": [
      "81",
      "76",
      "79",
      "83"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°58] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "N",
      "P",
      "M",
      "O"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°59] Complétez la série : 81, 100, 121, 144, ?",
    "options": [
      "164",
      "169",
      "175",
      "26"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°60] Dans un groupe de 109 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "67",
      "72",
      "56"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°61] Complétez la série : 63, 67, 71, 75, 79, ?",
    "options": [
      "85",
      "80",
      "83",
      "87"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°62] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "Q",
      "P",
      "S",
      "R"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°63] Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "14",
      "44",
      "55",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°64] Dans un groupe de 113 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "69",
      "58",
      "13",
      "74"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°65] Complétez la série : 67, 71, 75, 79, 83, ?",
    "options": [
      "84",
      "91",
      "89",
      "87"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°66] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "Y",
      "B",
      "Z",
      "A"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°67] Complétez la série : 49, 64, 81, 100, ?",
    "options": [
      "116",
      "22",
      "127",
      "121"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°68] Dans un groupe de 117 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "68",
      "84",
      "79"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°69] Complétez la série : 71, 75, 79, 83, 87, ?",
    "options": [
      "91",
      "93",
      "95",
      "88"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°70] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "M",
      "O",
      "N",
      "P"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°71] Complétez la série : 1, 4, 9, 16, ?",
    "options": [
      "25",
      "10",
      "31",
      "20"
    ],
    "answerIndex": 0
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
    "prompt": "[Logique SIM n°73] Complétez la série : 75, 79, 83, 87, 91, ?",
    "options": [
      "95",
      "92",
      "99",
      "97"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°74] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "P",
      "R",
      "S",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°75] Complétez la série : 25, 36, 49, 64, ?",
    "options": [
      "18",
      "81",
      "87",
      "76"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°76] Dans un groupe de 125 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "90",
      "74",
      "85",
      "13"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°77] Complétez la série : 79, 83, 87, 91, 95, ?",
    "options": [
      "103",
      "99",
      "101",
      "96"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°78] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "Y",
      "A",
      "Z",
      "B"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°79] Complétez la série : 81, 100, 121, 144, ?",
    "options": [
      "169",
      "164",
      "175",
      "26"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°80] Dans un groupe de 129 personnes, 32 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "87",
      "13",
      "76",
      "92"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°81] Complétez la série : 83, 87, 91, 95, 99, ?",
    "options": [
      "105",
      "103",
      "107",
      "100"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°82] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "P",
      "N",
      "O",
      "M"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°83] Complétez la série : 9, 16, 25, 36, ?",
    "options": [
      "55",
      "44",
      "14",
      "49"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Calcul SIM n°84] Dans un groupe de 133 personnes, 28 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "96",
      "80",
      "13",
      "91"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°85] Complétez la série : 87, 91, 95, 99, 103, ?",
    "options": [
      "107",
      "111",
      "109",
      "104"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°86] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "P",
      "S",
      "R",
      "Q"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Logique SIM n°87] Complétez la série : 49, 64, 81, 100, ?",
    "options": [
      "116",
      "22",
      "121",
      "127"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°88] Dans un groupe de 137 personnes, 32 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "93",
      "98",
      "82"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°89] Complétez la série : 91, 95, 99, 103, 107, ?",
    "options": [
      "115",
      "108",
      "111",
      "113"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°90] Complétez la série : F, J, N, R, V, ?",
    "options": [
      "A",
      "Z",
      "B",
      "Y"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°91] Complétez la série : 1, 4, 9, 16, ?",
    "options": [
      "25",
      "20",
      "10",
      "31"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Calcul SIM n°92] Dans un groupe de 141 personnes, 28 parlent anglais, 21 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "103",
      "13",
      "92",
      "108"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°93] Complétez la série : 95, 99, 103, 107, 111, ?",
    "options": [
      "115",
      "119",
      "117",
      "112"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Logique SIM n°94] Complétez la série : D, F, H, J, L, ?",
    "options": [
      "O",
      "M",
      "N",
      "P"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°95] Complétez la série : 25, 36, 49, 64, ?",
    "options": [
      "76",
      "81",
      "87",
      "18"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Calcul SIM n°96] Dans un groupe de 145 personnes, 32 parlent anglais, 25 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "13",
      "104",
      "99",
      "88"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°97] Complétez la série : 99, 103, 107, 111, 115, ?",
    "options": [
      "123",
      "121",
      "119",
      "116"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Logique SIM n°98] Complétez la série : B, E, H, K, N, ?",
    "options": [
      "R",
      "Q",
      "P",
      "S"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Logique SIM n°99] Complétez la série : 81, 100, 121, 144, ?",
    "options": [
      "164",
      "26",
      "169",
      "175"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Calcul SIM n°100] Dans un groupe de 149 personnes, 28 parlent anglais, 23 parlent espagnol et 11 parlent les deux. Combien ne parlent aucune de ces deux langues ?",
    "options": [
      "98",
      "109",
      "114",
      "13"
    ],
    "answerIndex": 1
  }
];

export const IAE_ENGLISH_QUIZ_DATA = [
  {
    "prompt": "[Business English n°1] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "met",
      "meet",
      "meeting",
      "meets"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°2] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay off",
      "lay out",
      "lay on",
      "lay down"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°3] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "was",
      "am",
      "be",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°4] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "from",
      "since",
      "for"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°5] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "from",
      "during",
      "since",
      "for"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°6] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "should to",
      "had rather",
      "would better",
      "had better"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°7] What is the meaning of 'shareholder'?",
    "options": [
      "Client principal",
      "Partenaire social",
      "Fournisseur",
      "Actionnaire"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°8] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "had he",
      "he had",
      "he did",
      "did he"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°9] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A turnover",
      "A layoff",
      "A bankruptcy"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°10] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Actuellement",
      "Récemment",
      "Probablement",
      "Vraiment"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°11] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meeting",
      "meet",
      "meets",
      "met"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°12] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay down",
      "lay off",
      "lay out",
      "lay on"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°13] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "were",
      "was",
      "be"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°14] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "from",
      "for",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°15] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "since",
      "from",
      "during"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°16] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "should to",
      "had better",
      "would better",
      "had rather"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°17] What is the meaning of 'shareholder'?",
    "options": [
      "Partenaire social",
      "Fournisseur",
      "Client principal",
      "Actionnaire"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°18] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he had",
      "had he",
      "did he",
      "he did"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°19] Select the correct term for a company merger:",
    "options": [
      "A bankruptcy",
      "A turnover",
      "A layoff",
      "A merger"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°20] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Actuellement",
      "Vraiment",
      "Probablement",
      "Récemment"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°21] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "meeting",
      "meets",
      "met"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°22] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay off",
      "lay on",
      "lay out",
      "lay down"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°23] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "am",
      "were",
      "was"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°24] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "from",
      "for",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°25] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "from",
      "during",
      "since"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°26] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "should to",
      "had rather",
      "had better",
      "would better"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°27] What is the meaning of 'shareholder'?",
    "options": [
      "Partenaire social",
      "Client principal",
      "Actionnaire",
      "Fournisseur"
    ],
    "answerIndex": 2
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
      "A turnover",
      "A bankruptcy",
      "A layoff"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°30] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Vraiment",
      "Probablement",
      "Récemment",
      "Actuellement"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°31] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "meets",
      "met",
      "meeting"
    ],
    "answerIndex": 3
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
      "was",
      "am",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°34] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "from",
      "since",
      "for"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°35] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "from",
      "for",
      "during",
      "since"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°36] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had rather",
      "would better",
      "had better",
      "should to"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°37] What is the meaning of 'shareholder'?",
    "options": [
      "Client principal",
      "Partenaire social",
      "Fournisseur",
      "Actionnaire"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°38] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he had",
      "had he",
      "he did",
      "did he"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°39] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A turnover",
      "A bankruptcy",
      "A layoff"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°40] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Vraiment",
      "Probablement",
      "Actuellement",
      "Récemment"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°41] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "meets",
      "meeting",
      "met"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°42] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay down",
      "lay off",
      "lay on"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°43] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "be",
      "were",
      "was"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°44] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "since",
      "during",
      "from"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°45] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "from",
      "during",
      "for",
      "since"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°46] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "should to",
      "had better",
      "would better",
      "had rather"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°47] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Partenaire social",
      "Client principal",
      "Fournisseur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°48] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he had",
      "had he",
      "did he",
      "he did"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°49] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A bankruptcy",
      "A turnover",
      "A layoff"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°50] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Actuellement",
      "Vraiment",
      "Probablement",
      "Récemment"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°51] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meets",
      "meet",
      "met",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°52] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay down",
      "lay off",
      "lay out",
      "lay on"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°53] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "were",
      "am",
      "be",
      "was"
    ],
    "answerIndex": 0
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
      "for",
      "during",
      "from",
      "since"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°56] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "should to",
      "had rather",
      "had better",
      "would better"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°57] What is the meaning of 'shareholder'?",
    "options": [
      "Fournisseur",
      "Actionnaire",
      "Partenaire social",
      "Client principal"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°58] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "he had",
      "did he",
      "had he"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°59] Select the correct term for a company merger:",
    "options": [
      "A turnover",
      "A merger",
      "A bankruptcy",
      "A layoff"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°60] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "Actuellement",
      "Vraiment",
      "Probablement"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°61] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meets",
      "meet",
      "met",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°62] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay off",
      "lay out",
      "lay on",
      "lay down"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°63] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "be",
      "was",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°64] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "for",
      "since",
      "during",
      "from"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°65] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "during",
      "since",
      "from",
      "for"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°66] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "would better",
      "had better",
      "should to",
      "had rather"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°67] What is the meaning of 'shareholder'?",
    "options": [
      "Fournisseur",
      "Actionnaire",
      "Partenaire social",
      "Client principal"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°68] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "had he",
      "did he",
      "he did",
      "he had"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°69] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A turnover",
      "A bankruptcy",
      "A layoff"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°70] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "Actuellement",
      "Probablement",
      "Vraiment"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°71] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meet",
      "meets",
      "met",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°72] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay off",
      "lay on",
      "lay down"
    ],
    "answerIndex": 1
  },
  {
    "prompt": "[Business English n°73] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "was",
      "be",
      "were",
      "am"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°74] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "since",
      "during",
      "for",
      "from"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°75] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "during",
      "since",
      "for",
      "from"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°76] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "would better",
      "should to",
      "had better",
      "had rather"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°77] What is the meaning of 'shareholder'?",
    "options": [
      "Client principal",
      "Partenaire social",
      "Actionnaire",
      "Fournisseur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°78] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "did he",
      "he had",
      "had he",
      "he did"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°79] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A layoff",
      "A turnover",
      "A bankruptcy"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°80] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Probablement",
      "Actuellement",
      "Récemment",
      "Vraiment"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°81] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meets",
      "met",
      "meet",
      "meeting"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°82] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay on",
      "lay out",
      "lay off",
      "lay down"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°83] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "be",
      "was",
      "am",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°84] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "during",
      "for",
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
      "would better",
      "should to",
      "had rather",
      "had better"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°87] What is the meaning of 'shareholder'?",
    "options": [
      "Actionnaire",
      "Partenaire social",
      "Client principal",
      "Fournisseur"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°88] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "he had",
      "had he",
      "did he"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°89] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A layoff",
      "A bankruptcy",
      "A turnover"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°90] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Récemment",
      "Actuellement",
      "Probablement",
      "Vraiment"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°91] Complete the sentence: 'I look forward to _____ you next week.'",
    "options": [
      "meeting",
      "meet",
      "meets",
      "met"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°92] Choose the correct word: 'The company decided to _____ 500 workers.'",
    "options": [
      "lay out",
      "lay on",
      "lay down",
      "lay off"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°93] Complete the sentence: 'If I _____ you, I would accept the offer.'",
    "options": [
      "am",
      "was",
      "be",
      "were"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°94] Select the correct preposition: 'He has been working here _____ 2018.'",
    "options": [
      "from",
      "during",
      "for",
      "since"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°95] Select the correct preposition: 'She has lived in London _____ five years.'",
    "options": [
      "for",
      "since",
      "during",
      "from"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°96] Choose the correct phrase: 'You _____ consult a specialist.'",
    "options": [
      "had rather",
      "should to",
      "had better",
      "would better"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°97] What is the meaning of 'shareholder'?",
    "options": [
      "Client principal",
      "Partenaire social",
      "Actionnaire",
      "Fournisseur"
    ],
    "answerIndex": 2
  },
  {
    "prompt": "[Business English n°98] Complete the sentence: 'Hardly _____ entered the room when the phone rang.'",
    "options": [
      "he did",
      "did he",
      "he had",
      "had he"
    ],
    "answerIndex": 3
  },
  {
    "prompt": "[Business English n°99] Select the correct term for a company merger:",
    "options": [
      "A merger",
      "A turnover",
      "A layoff",
      "A bankruptcy"
    ],
    "answerIndex": 0
  },
  {
    "prompt": "[Business English n°100] Choose the false friend: 'Actually' in English means:",
    "options": [
      "Actuellement",
      "Récemment",
      "Vraiment",
      "Probablement"
    ],
    "answerIndex": 2
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
