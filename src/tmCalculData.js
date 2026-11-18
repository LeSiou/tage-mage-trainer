// Contenu de révision TAGE MAGE : Calcul (surtout géométrie) + Conditions Minimales.
// Fichier généré puis vérifié (chaque réponse numérique recalculée ; chaque item CM testé par énumération).

export const TM_CALC_FICHES = [
  {
    id: "calc_geo_plane",
    title: "Géométrie plane : triangles, angles, quadrilatères, cercle",
    desc: "Triangles remarquables, Pythagore et triplets, angles, Thalès, quadrilatères, cercle, arcs et secteurs.",
    subtitle: "Toutes les formules de géométrie plane du Calcul, avec un mini-exemple chiffré par bloc",
    html: `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <div class="math-card-visual">
        <div class="math-card-title">1. Triangles : formules de base</div>
        <div class="math-desc-list">
          <p>• <strong>Aire d’un triangle quelconque :</strong> base × hauteur / 2 (la hauteur est <em>perpendiculaire</em> à la base).</p>
          <p>• <strong>Triangle rectangle :</strong> aire = (cathète 1 × cathète 2) / 2. La hauteur issue de l’angle droit vaut <strong>(cathète 1 × cathète 2) / hypoténuse</strong>.</p>
          <p>• <strong>Triangle isocèle :</strong> la hauteur issue du sommet coupe la base en deux. On obtient <strong>2 triangles rectangles identiques</strong> : h = √(côté² − (base/2)²).</p>
          <p>• <strong>Triangle équilatéral</strong> de côté a : hauteur h = a√3 / 2 ; aire = (√3 / 4) × a² ; périmètre 3a ; angles 60°.</p>
        </div>
        <div style="text-align:center;"><svg viewBox="0 0 130 110" width="100%" style="max-width:200px;" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Triangle équilatéral et sa hauteur"><polygon points="10,100 120,100 65,5"/><line x1="65" y1="5" x2="65" y2="100" stroke-dasharray="4 3"/><text x="70" y="58" font-size="12" fill="currentColor" stroke="none">h</text><text x="60" y="108" font-size="12" fill="currentColor" stroke="none">a</text></svg></div>
        <div class="math-formula-box-visual">A = (√3 / 4) × a²</div>
        <div class="math-desc-list">
          <p>• <strong>Mini-exemple :</strong> côté 6 ⇒ h = 3√3 ≈ 5,2 et A = 36√3 / 4 = <strong>9√3</strong> ≈ 15,6.</p>
          <p>• <strong>Isocèle 13-13-10 :</strong> base/2 = 5, h = √(169 − 25) = 12, aire = 10 × 12 / 2 = <strong>60</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">2. Les deux triangles rectangles « magiques »</div>
        <div class="math-desc-list">
          <p>• <strong>45-45-90 (demi-carré) :</strong> côtés a, a, a√2. L’hypoténuse vaut le côté × √2, donc le côté vaut l’hypoténuse / √2.</p>
          <p>• <strong>30-60-90 (demi-équilatéral) :</strong> côtés a, a√3, 2a. Le côté en face de 30° est la <strong>moitié de l’hypoténuse</strong>.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center;">
          <div style="flex:1; min-width:140px; text-align:center;"><svg viewBox="0 0 120 100" width="100%" style="max-width:180px;" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Triangle 45-45-90"><polygon points="10,90 100,90 10,0"/><text x="2" y="48" font-size="12" fill="currentColor" stroke="none">a</text><text x="52" y="88" font-size="12" fill="currentColor" stroke="none" dy="-4">a</text><text x="62" y="38" font-size="12" fill="currentColor" stroke="none">a√2</text></svg></div>
          <div style="flex:1; min-width:140px; text-align:center;"><svg viewBox="0 0 150 90" width="100%" style="max-width:220px;" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Triangle 30-60-90"><polygon points="10,80 140,80 10,5"/><text x="14" y="50" font-size="12" fill="currentColor" stroke="none">a√3</text><text x="55" y="76" font-size="12" fill="currentColor" stroke="none">a</text><text x="78" y="36" font-size="12" fill="currentColor" stroke="none">2a</text><text x="105" y="76" font-size="11" fill="currentColor" stroke="none">30°</text><text x="14" y="22" font-size="11" fill="currentColor" stroke="none">60°</text></svg></div>
        </div>
        <div class="math-desc-list">
          <p>• <strong>Mini-exemple 45-45-90 :</strong> hypoténuse 10 ⇒ côté = 10/√2 = 5√2 et aire = 5√2 × 5√2 / 2 = <strong>25</strong>.</p>
          <p>• <strong>Mini-exemple 30-60-90 :</strong> hypoténuse 12 ⇒ côtés 6 et 6√3, aire = 6 × 6√3 / 2 = <strong>18√3</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">3. Pythagore et triplets à reconnaître</div>
        <div class="math-desc-list">
          <p>• <strong>Pythagore :</strong> dans un triangle rectangle, <strong>hypoténuse² = cathète² + cathète²</strong>.</p>
          <p>• <strong>Réciproque :</strong> si le plus grand côté c vérifie c² = a² + b², le triangle est rectangle (et c’est l’hypoténuse).</p>
          <p>• <strong>Diagonale d’un rectangle a × b :</strong> √(a² + b²). <strong>Diagonale d’un carré :</strong> a√2.</p>
        </div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
          <div class="math-table-cell">3 - 4 - 5 <span>(9+16=25)</span></div>
          <div class="math-table-cell">5 - 12 - 13 <span>(25+144=169)</span></div>
          <div class="math-table-cell">8 - 15 - 17 <span>(64+225=289)</span></div>
          <div class="math-table-cell">7 - 24 - 25 <span>(49+576=625)</span></div>
          <div class="math-table-cell">20 - 21 - 29 <span>(400+441=841)</span></div>
          <div class="math-table-cell">9 - 40 - 41 <span>(81+1600=1681)</span></div>
          <div class="math-table-cell">6 - 8 - 10 <span>(×2 de 3-4-5)</span></div>
          <div class="math-table-cell">9 - 12 - 15 <span>(×3)</span></div>
          <div class="math-table-cell">12 - 16 - 20 <span>(×4)</span></div>
          <div class="math-table-cell">15 - 20 - 25 <span>(×5)</span></div>
          <div class="math-table-cell">10 - 24 - 26 <span>(×2 de 5-12-13)</span></div>
          <div class="math-table-cell">16 - 30 - 34 <span>(×2 de 8-15-17)</span></div>
        </div>
        <div class="math-desc-list">
          <p style="margin-top:10px;">• <strong>Mini-exemple :</strong> échelle de 13 m, pied à 5 m du mur ⇒ hauteur atteinte = √(169 − 25) = <strong>12 m</strong> (triplet 5-12-13).</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">4. Angles et polygones</div>
        <div class="math-desc-list">
          <p>• <strong>Triangle :</strong> 180°. <strong>Quadrilatère :</strong> 360°. <strong>Polygone convexe à n côtés :</strong> (n − 2) × 180°.</p>
          <p>• <strong>Polygone régulier :</strong> angle intérieur = (n − 2) × 180° / n, angle extérieur = 360° / n.</p>
          <p>• <strong>Diagonales d’un polygone à n côtés :</strong> n(n − 3) / 2.</p>
          <p>• <strong>Angle extérieur d’un triangle</strong> = somme des deux angles intérieurs non adjacents.</p>
          <p>• <strong>Triangle isocèle :</strong> les deux angles à la base sont égaux. <strong>Droites parallèles :</strong> angles alternes-internes et correspondants égaux.</p>
          <p>• <strong>Cercle :</strong> angle <em>au centre</em> = 2 × angle <em>inscrit</em> qui intercepte le même arc. Un angle inscrit qui intercepte un diamètre vaut <strong>90°</strong>.</p>
        </div>
        <div style="text-align:center;"><svg viewBox="0 0 140 120" width="100%" style="max-width:200px;" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Angle inscrit et angle au centre"><circle cx="70" cy="60" r="50"/><line x1="70" y1="60" x2="30" y2="30"/><line x1="70" y1="60" x2="110" y2="30"/><line x1="70" y1="110" x2="30" y2="30"/><line x1="70" y1="110" x2="110" y2="30"/><text x="62" y="52" font-size="12" fill="currentColor" stroke="none">2α</text><text x="64" y="102" font-size="12" fill="currentColor" stroke="none">α</text></svg></div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
          <div class="math-table-cell">Pentagone <span><strong>540°</strong> / 108°</span></div>
          <div class="math-table-cell">Hexagone <span><strong>720°</strong> / 120°</span></div>
          <div class="math-table-cell">Octogone <span><strong>1080°</strong> / 135°</span></div>
          <div class="math-table-cell">Décagone <span><strong>1440°</strong> / 144°</span></div>
          <div class="math-table-cell">Dodécagone <span><strong>1800°</strong> / 150°</span></div>
        </div>
        <div class="math-desc-list">
          <p style="margin-top:10px;">• <strong>Mini-exemple :</strong> un angle au centre de 80° correspond à un angle inscrit de <strong>40°</strong>. Un polygone régulier d’angle intérieur 150° a 360 / (180 − 150) = <strong>12 côtés</strong>.</p>
          <p>• <strong>Horloge :</strong> l’aiguille des minutes fait 6° par minute, celle des heures 30° par heure (soit 0,5° par minute). À 3 h 30, l’aiguille des heures est à 105° et celle des minutes à 180° : écart <strong>75°</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">5. Thalès et triangles semblables</div>
        <div style="text-align:center;"><svg viewBox="0 0 140 110" width="100%" style="max-width:200px;" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Configuration de Thalès"><polygon points="70,8 10,100 130,100"/><line x1="40" y1="54" x2="100" y2="54"/><text x="62" y="18" font-size="12" fill="currentColor" stroke="none">A</text><text x="22" y="52" font-size="12" fill="currentColor" stroke="none">M</text><text x="104" y="52" font-size="12" fill="currentColor" stroke="none">N</text><text x="2" y="108" font-size="12" fill="currentColor" stroke="none">B</text><text x="126" y="108" font-size="12" fill="currentColor" stroke="none">C</text></svg></div>
        <div class="math-desc-list">
          <p>• <strong>Thalès :</strong> si (MN) // (BC), alors <strong>AM / AB = AN / AC = MN / BC</strong> (toujours « petit sur grand »).</p>
          <p>• <strong>Rapport k :</strong> les longueurs sont multipliées par k, les <strong>aires par k²</strong>.</p>
          <p>• <strong>Milieux :</strong> le segment qui joint les milieux de deux côtés est parallèle au troisième et vaut sa moitié ; le petit triangle a une aire égale à <strong>1/4</strong> de l’aire du grand.</p>
          <p>• <strong>Ombres :</strong> même heure ⇒ hauteur / ombre identique pour tous les objets verticaux.</p>
          <p>• <strong>Mini-exemple :</strong> AM = 4, AB = 10, BC = 15 ⇒ k = 4/10 donc MN = 15 × 0,4 = <strong>6</strong>. Si l’aire de ABC vaut 100, celle de AMN vaut 100 × 0,16 = <strong>16</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">6. Quadrilatères et polygones réguliers</div>
        <div class="math-desc-list">
          <p>• <strong>Rectangle :</strong> L × l ; diagonale √(L² + l²). <strong>Carré :</strong> a² = d² / 2 (d = diagonale = a√2).</p>
          <p>• <strong>Parallélogramme :</strong> base × hauteur (ou a × b × sin de l’angle). <strong>Losange :</strong> D × d / 2 ; diagonales perpendiculaires, côté = √((D/2)² + (d/2)²).</p>
          <p>• <strong>Trapèze :</strong> (grande base + petite base) / 2 × hauteur.</p>
          <p>• <strong>Hexagone régulier de côté a :</strong> 6 triangles équilatéraux ⇒ aire = (3√3 / 2) × a² ; le rayon du cercle circonscrit est égal au côté ; la grande diagonale vaut 2a.</p>
          <p>• <strong>Carré inscrit dans un cercle de rayon R :</strong> diagonale = 2R, côté R√2, aire <strong>2R²</strong>. <strong>Cercle inscrit dans un carré de côté a :</strong> rayon a/2. <strong>Carré obtenu en joignant les milieux d’un carré :</strong> aire = <strong>moitié</strong>.</p>
          <p>• <strong>Mini-exemple :</strong> losange de côté 10 et de diagonale 12 ⇒ demi-diagonales 6 et 8 (triplet 6-8-10) ⇒ autre diagonale 16 ⇒ aire = 12 × 16 / 2 = <strong>96</strong>. Hexagone de côté 4 ⇒ 3√3/2 × 16 = <strong>24√3</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">7. Cercle, disque, arcs et secteurs</div>
        <div class="math-desc-list">
          <p>• <strong>Circonférence :</strong> C = 2πr = πd. <strong>Aire du disque :</strong> A = πr².</p>
          <p>• <strong>Arc d’angle θ :</strong> θ / 360 × 2πr. <strong>Secteur d’angle θ :</strong> θ / 360 × πr². Périmètre d’un secteur = arc + <strong>2 rayons</strong>.</p>
          <p>• <strong>Couronne :</strong> π(R² − r²). <strong>Rayon × k :</strong> circonférence × k, aire × k².</p>
          <p>• <strong>Roue :</strong> nombre de tours = distance / (2πr).</p>
          <p>• <strong>Mini-exemple :</strong> secteur de 60° dans un cercle de rayon 6 ⇒ aire = 1/6 × 36π = <strong>6π</strong>. Rayon +50 % ⇒ aire × 2,25 (<strong>+125 %</strong>).</p>
        </div>
        <div class="math-formula-box-visual">A = πr² · C = 2πr</div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">8. Pièges</div>
        <div class="math-desc-list">
          <p>• <strong>Rayon ou diamètre ?</strong> Relire l’énoncé : « diamètre 10 » ⇒ r = 5, aire = 25π (pas 100π).</p>
          <p>• Oublier le <strong>/ 4</strong> dans l’aire du triangle équilatéral, ou le <strong>√3</strong> dans sa hauteur.</p>
          <p>• Dans un isocèle, oublier de <strong>couper la base en deux</strong> avant d’appliquer Pythagore.</p>
          <p>• Appliquer Pythagore sans vérifier quel côté est l’<strong>hypoténuse</strong> (le plus grand).</p>
          <p>• Thalès : AM / <strong>AB</strong> (partie sur tout), pas AM / MB.</p>
          <p>• Rapport k sur les longueurs ⇒ <strong>k² sur les aires</strong> (pizza, cercles, cartes).</p>
          <p>• Secteur : ne pas oublier les 2 rayons dans le <strong>périmètre</strong>.</p>
          <p>• Un triangle « isocèle » sans précision du sommet peut avoir <strong>3 configurations</strong> (important en Conditions Minimales).</p>
        </div>
      </div>

    </div>
  `
  },
  {
    id: "calc_geo_space",
    title: "Géométrie dans l’espace : cube, pavé, cylindre, cône, sphère",
    desc: "Volumes et aires des solides, diagonale du cube a√3, facteurs d’échelle k, k² et k³, cubes peints, conversions.",
    subtitle: "Volumes, aires, diagonales et facteurs d’échelle, avec les cubes peints puis découpés",
    html: `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <div class="math-card-visual">
        <div class="math-card-title">1. Cube et pavé droit</div>
        <div style="text-align:center;"><svg viewBox="0 0 150 120" width="100%" style="max-width:200px;" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Cube avec diagonale"><rect x="10" y="40" width="70" height="70"/><polyline points="10,40 40,10 110,10 110,80 80,110"/><line x1="80" y1="40" x2="110" y2="10"/><line x1="10" y1="110" x2="110" y2="10" stroke-dasharray="4 3"/><text x="40" y="82" font-size="12" fill="currentColor" stroke="none">a</text><text x="90" y="62" font-size="11" fill="currentColor" stroke="none">d = a√3</text></svg></div>
        <div class="math-desc-list">
          <p>• <strong>Cube d’arête a :</strong> volume a³ ; aire totale 6a² ; diagonale d’une face a√2 ; <strong>diagonale du cube a√3</strong> ; 6 faces, 12 arêtes, 8 sommets.</p>
          <p>• <strong>Pavé a × b × c :</strong> volume abc ; aire totale 2(ab + bc + ca) ; <strong>diagonale = √(a² + b² + c²)</strong>.</p>
          <p>• <strong>Prisme / cylindre :</strong> volume = aire de la base × hauteur.</p>
        </div>
        <div class="math-formula-box-visual">V = a³ · d = a√3</div>
        <div class="math-desc-list">
          <p>• <strong>Mini-exemple :</strong> cube d’arête 4 ⇒ V = 64 ; aire totale 6 × 16 = 96 ; diagonale 4√3 ≈ 6,9. Pavé 3 × 4 × 12 ⇒ diagonale √(9 + 16 + 144) = <strong>13</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">2. Cylindre, cône, sphère, pyramide</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
          <div class="math-table-cell">Cylindre <span>V = <strong>πr²h</strong></span></div>
          <div class="math-table-cell">Cylindre, surface latérale <span><strong>2πrh</strong></span></div>
          <div class="math-table-cell">Cylindre, aire totale <span><strong>2πr(r + h)</strong></span></div>
          <div class="math-table-cell">Cône <span>V = <strong>πr²h / 3</strong></span></div>
          <div class="math-table-cell">Cône, génératrice <span>g = <strong>√(r² + h²)</strong></span></div>
          <div class="math-table-cell">Cône, surface latérale <span><strong>πrg</strong></span></div>
          <div class="math-table-cell">Sphère, volume <span><strong>4πr³ / 3</strong></span></div>
          <div class="math-table-cell">Sphère, aire <span><strong>4πr²</strong></span></div>
          <div class="math-table-cell">Pyramide <span>V = <strong>B × h / 3</strong></span></div>
        </div>
        <div class="math-desc-list">
          <p style="margin-top:10px;">• <strong>Cône = 1/3 du cylindre</strong> de même base et même hauteur ; <strong>sphère = 2/3 du cylindre circonscrit</strong> (rayon r, hauteur 2r).</p>
          <p>• <strong>Mini-exemple :</strong> cylindre r = 3, h = 5 ⇒ V = 45π. Cône r = 3, h = 4 ⇒ g = 5 et V = 12π. Sphère r = 3 ⇒ V = 36π. Pyramide à base carrée de côté 6 et de hauteur 5 ⇒ V = 36 × 5 / 3 = <strong>60</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">3. Facteurs d’échelle : k, k², k³</div>
        <div class="math-desc-list">
          <p>• Toutes les <strong>longueurs</strong> multipliées par k ⇒ <strong>aires × k²</strong> ⇒ <strong>volumes × k³</strong>.</p>
          <p>• Réciproque : si le volume est multiplié par 8, les longueurs sont multipliées par ∛8 = 2 ; si l’aire est multipliée par 9, les longueurs par 3.</p>
          <p>• Maquette à l’échelle 1/50 : longueurs / 50, aires / 2 500, volumes / 125 000.</p>
          <p>• <strong>Mini-exemple :</strong> on triple toutes les arêtes d’un pavé ⇒ V × 27 et aire × 9. On double seulement le rayon d’un cylindre ⇒ V × 4 (et non × 8, la hauteur n’a pas changé).</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">4. Cube n × n × n peint puis découpé</div>
        <div class="math-desc-list">
          <p>On découpe un grand cube de côté n en n³ petits cubes unitaires, après l’avoir peint sur toutes ses faces extérieures :</p>
          <p>• <strong>3 faces peintes</strong> (sommets) : 8 &nbsp;|&nbsp; <strong>2 faces</strong> (arêtes) : 12 × (n − 2) &nbsp;|&nbsp; <strong>1 face</strong> : 6 × (n − 2)² &nbsp;|&nbsp; <strong>0 face</strong> (intérieur) : (n − 2)³.</p>
          <p>• <strong>Mini-exemple n = 5 :</strong> 8 + 36 + 54 + 27 = 125 ✓. Exactement 1 face : <strong>54</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">5. Conversions et patrons</div>
        <div class="math-desc-list">
          <p>• <strong>1 L = 1 dm³ = 1 000 cm³</strong> ; 1 m³ = 1 000 L ; 1 m² = 10 000 cm² ; 1 m³ = 1 000 000 cm³.</p>
          <p>• <strong>Mini-exemple :</strong> piscine 10 m × 5 m × 2 m remplie aux 3/4 ⇒ 10 × 5 × 1,5 = 75 m³ = <strong>75 000 L</strong>.</p>
          <p>• <strong>Patron du cube :</strong> 6 carrés. Dans une bande de 4 carrés alignés, le 1er et le 3e sont opposés, le 2e et le 4e aussi. Deux faces voisines dans le patron peuvent être voisines ou non dans le cube : testez par pliage mental.</p>
          <p>• <strong>Niveau d’eau :</strong> volume constant ⇒ nouvelle hauteur = volume / aire de la base du nouveau récipient.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">6. Pièges</div>
        <div class="math-desc-list">
          <p>• <strong>Oublier le tiers</strong> dans cône et pyramide ; confondre hauteur et génératrice (ou apothème).</p>
          <p>• Confondre <strong>a√2</strong> (diagonale de face) et <strong>a√3</strong> (diagonale du cube).</p>
          <p>• Passer de l’échelle des longueurs à celle des volumes sans élever au <strong>cube</strong> (et des aires sans le carré).</p>
          <p>• Rayon / diamètre, et <strong>unités</strong> (cm² → m² : on divise par 10 000, pas par 100).</p>
          <p>• Cubes peints : les <strong>arêtes</strong> ont (n − 2) cubes chacune (on retire les 2 coins), pas n.</p>
        </div>
      </div>

    </div>
  `
  },
  {
    id: "calc_vitesses_travail",
    title: "Vitesses, débits et travail partagé",
    desc: "v = d/t, aller-retour (moyenne harmonique), croisement et rattrapage, trains, courant, travail à plusieurs.",
    subtitle: "Les trois formules à ne jamais confondre : vitesse moyenne, croisement/rattrapage, travail partagé",
    html: `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <div class="math-card-visual">
        <div class="math-card-title">1. Distance, vitesse, temps</div>
        <div class="math-formula-box-visual">d = v × t</div>
        <div class="math-desc-list">
          <p>• <strong>Conversions de temps :</strong> 15 min = 0,25 h ; 20 min = 1/3 h ; 40 min = 2/3 h ; 1 h 20 = 4/3 h ≈ 1,33 h (<strong>pas</strong> 1,20 h).</p>
          <p>• <strong>km/h → m/s :</strong> on divise par 3,6 (72 km/h = 20 m/s). <strong>m/s → km/h :</strong> on multiplie par 3,6.</p>
          <p>• <strong>« x fois plus vite » :</strong> vitesse × x, temps ÷ x (1,5 fois plus vite ⇒ temps × 2/3).</p>
          <p>• <strong>Mini-exemple :</strong> 150 km à 90 km/h ⇒ 150/90 = 5/3 h = <strong>1 h 40</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">2. Vitesse moyenne</div>
        <div class="math-desc-list">
          <p>• <strong>Toujours :</strong> vitesse moyenne = distance totale / temps total.</p>
          <p>• <strong>Aller-retour (même distance) à v₁ puis v₂ :</strong> moyenne <strong>harmonique</strong> = 2 v₁ v₂ / (v₁ + v₂).</p>
          <p>• La moyenne arithmétique (v₁ + v₂) / 2 n’est correcte que si les <strong>durées</strong> sont égales (pas les distances).</p>
        </div>
        <div class="math-formula-box-visual">v<sub>moy</sub> = 2·v₁·v₂ / (v₁ + v₂)</div>
        <div class="math-desc-list">
          <p>• <strong>Mini-exemple :</strong> aller à 60 km/h, retour à 40 km/h ⇒ 2 × 60 × 40 / 100 = <strong>48 km/h</strong> (et non 50).</p>
          <p>• <strong>Deux tronçons de 100 km à 50 puis 100 km/h :</strong> temps 2 h + 1 h = 3 h pour 200 km ⇒ <strong>66,7 km/h</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">3. Croisement, rattrapage, éloignement</div>
        <div class="math-desc-list">
          <p>• <strong>Sens opposés (croisement ou éloignement) :</strong> les vitesses <strong>s’additionnent</strong>. Temps de rencontre = distance / (v₁ + v₂).</p>
          <p>• <strong>Même sens (rattrapage) :</strong> les vitesses <strong>se soustraient</strong>. Temps = écart / (v₂ − v₁), où l’écart est l’avance prise au départ.</p>
          <p>• <strong>Départ décalé :</strong> avance = vitesse du premier × décalage horaire. L’heure de départ du second n’entre ensuite plus en jeu.</p>
          <p>• <strong>Directions perpendiculaires :</strong> distance entre les deux = Pythagore sur les distances parcourues.</p>
          <p>• <strong>Mini-exemple :</strong> A part à 9 h à 60 km/h, B part à 10 h à 90 km/h sur la même route. Avance de A à 10 h : 60 km ; écart de vitesse 30 km/h ⇒ 2 h ⇒ B rattrape A à <strong>12 h</strong>.</p>
          <p>• <strong>Mini-exemple 2 :</strong> deux marcheurs partent du même point, l’un vers l’est à 6 km/h, l’autre vers le nord à 8 km/h : après 3 h, distances 18 et 24 ⇒ √(18² + 24²) = <strong>30 km</strong> (triplet 3-4-5).</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">4. Trains, courant, montres</div>
        <div class="math-desc-list">
          <p>• <strong>Train qui traverse un tunnel / un pont :</strong> distance = longueur du train + longueur du tunnel. Devant un poteau : longueur du train seulement. Deux trains qui se croisent : somme des longueurs, vitesses additionnées.</p>
          <p>• <strong>Bateau et courant :</strong> à la descente v + c, à la remontée v − c ; le trajet aller-retour n’est pas « annulé » par le courant.</p>
          <p>• <strong>Montre qui avance de m minutes par heure :</strong> elle compte (60 + m) minutes quand il s’en écoule 60 ; on convertit le temps réel écoulé puis on ajoute l’avance cumulée.</p>
          <p>• <strong>Mini-exemple :</strong> train de 200 m dans un tunnel de 400 m à 20 m/s ⇒ 600 / 20 = <strong>30 s</strong>. Bateau 12 km/h, courant 3 km/h, 45 km aller-retour ⇒ 45/15 + 45/9 = 3 + 5 = <strong>8 h</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">5. Travail partagé et débits</div>
        <div class="math-formula-box-visual">1/T = 1/T₁ + 1/T₂</div>
        <div class="math-desc-list">
          <p>• Chaque personne fournit « 1/T du travail par heure » : les <strong>rendements s’additionnent</strong>.</p>
          <p>• <strong>Robinet qui remplit en T₁ et fuite qui vide en T₂ :</strong> 1/T = 1/T₁ − 1/T₂.</p>
          <p>• <strong>Proportionnalité :</strong> personnes × temps = constante (même travail). 5 ouvriers en 12 jours = 60 jours-ouvriers ⇒ 3 ouvriers en 20 jours.</p>
          <p>• <strong>Plusieurs murs :</strong> compter en « homme-heures par mur », puis multiplier.</p>
          <p>• <strong>Mini-exemple :</strong> A seul en 6 h, B seul en 3 h ⇒ 1/6 + 1/3 = 1/2 ⇒ ensemble <strong>2 h</strong>. Robinet 4 h, fuite 12 h ⇒ 1/4 − 1/12 = 1/6 ⇒ <strong>6 h</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">6. Pièges</div>
        <div class="math-desc-list">
          <p>• Faire la moyenne des vitesses sur un aller-retour : c’est <strong>toujours plus faible</strong> que la moyenne arithmétique.</p>
          <p>• Rattrapage : utiliser l’<strong>heure de départ</strong> au lieu de l’avance en kilomètres.</p>
          <p>• « 1,5 fois plus vite » = « 50 % plus vite » = vitesse × 1,5 ; le temps est alors ÷ 1,5 (× 2/3), pas « − 50 % ».</p>
          <p>• Travail partagé : <strong>additionner les temps</strong> ou prendre leur moyenne. Il faut additionner les inverses.</p>
          <p>• Heures décimales : 0,5 h = 30 min, mais 1,2 h = 1 h 12.</p>
          <p>• Lire <strong>ce qu’on demande</strong> (temps de B ? heure d’arrivée ? distance parcourue par A ?).</p>
        </div>
      </div>

    </div>
  `
  },
  {
    id: "calc_pourcentages",
    title: "Pourcentages, évolutions, tableaux croisés et mélanges",
    desc: "Coefficients multiplicateurs, évolutions successives, réciproques, base 100, ensembles, moyennes pondérées et barycentre.",
    subtitle: "Tout passe par le coefficient multiplicateur et la base 100",
    html: `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <div class="math-card-visual">
        <div class="math-card-title">1. Coefficient multiplicateur</div>
        <div class="math-desc-list">
          <p>• <strong>Hausse de t %</strong> ⇒ × (1 + t/100). <strong>Baisse de t %</strong> ⇒ × (1 − t/100). +20 % = × 1,2 ; −30 % = × 0,7.</p>
          <p>• <strong>Évolutions successives :</strong> on <strong>multiplie</strong> les coefficients (jamais on n’additionne les taux).</p>
          <p>• <strong>Retrouver la valeur initiale :</strong> on <strong>divise</strong> par le coefficient.</p>
          <p>• <strong>Pourcentage d’un pourcentage :</strong> on multiplie (40 % de 25 % de 800 = 0,4 × 0,25 × 800 = 80).</p>
        </div>
        <div class="math-formula-box-visual">valeur finale = initiale × coefficient</div>
        <div class="math-desc-list">
          <p>• <strong>Mini-exemples :</strong> +20 % puis −20 % ⇒ 1,2 × 0,8 = 0,96 = <strong>−4 %</strong>. +10 % puis +20 % ⇒ 1,32 = <strong>+32 %</strong>. Un prix de 60 € après −25 % ⇒ initial = 60 / 0,75 = <strong>80 €</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">2. Réciproques et points de pourcentage</div>
        <div class="math-desc-list">
          <p>• Après +t %, il faut baisser de <strong>t / (100 + t)</strong> pour revenir au départ.</p>
        </div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));">
          <div class="math-table-cell">+10 % <span>⇄ −9,1 %</span></div>
          <div class="math-table-cell">+20 % <span>⇄ −16,7 %</span></div>
          <div class="math-table-cell">+25 % <span>⇄ <strong>−20 %</strong></span></div>
          <div class="math-table-cell">+50 % <span>⇄ −33,3 %</span></div>
          <div class="math-table-cell">+100 % <span>⇄ <strong>−50 %</strong></span></div>
          <div class="math-table-cell">+300 % <span>⇄ −75 %</span></div>
        </div>
        <div class="math-desc-list">
          <p style="margin-top:10px;">• <strong>Points ≠ pourcentage :</strong> un taux qui passe de 8 % à 10 % augmente de <strong>2 points</strong>, soit de 2/8 = <strong>25 %</strong> en relatif.</p>
          <p>• <strong>TVA :</strong> TTC = HT × 1,2 (20 %) ; HT = TTC / 1,2.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">3. Tableaux croisés et ensembles</div>
        <div class="math-desc-list">
          <p>• <strong>Base 100 :</strong> pour un tableau à double entrée, choisir un total de 100 (ou 1 000) et remplir les cases par multiplication des proportions.</p>
          <p>• <strong>Deux ensembles :</strong> |A ∪ B| = |A| + |B| − |A ∩ B|. Si tout le monde est dans au moins un ensemble, |A ∩ B| = |A| + |B| − total.</p>
          <p>• <strong>Bornes d’une intersection :</strong> minimum = |A| + |B| − total (si positif) ; maximum = le plus petit des deux ensembles.</p>
          <p>• <strong>Probabilité conditionnelle :</strong> « parmi les porteurs de lunettes, quelle part de filles ? » = (filles à lunettes) / (tous à lunettes).</p>
          <p>• <strong>Mini-exemple :</strong> classe à 60 % de filles ; lunettes : 50 % des filles et 20 % des garçons. Global : 0,6 × 0,5 + 0,4 × 0,2 = 0,30 + 0,08 = <strong>38 %</strong>. Parmi les lunettes, part de filles : 30 / 38 ≈ <strong>79 %</strong>.</p>
          <p>• <strong>Mini-exemple 2 :</strong> 70 % font du foot, 50 % du tennis, 20 % rien ⇒ 80 % font au moins un sport ⇒ intersection = 70 + 50 − 80 = <strong>40 %</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">4. Moyennes pondérées, mélanges, barycentre</div>
        <div class="math-formula-box-visual">M = (n₁·m₁ + n₂·m₂) / (n₁ + n₂)</div>
        <div class="math-desc-list">
          <p>• <strong>Barycentre :</strong> la moyenne générale M est « entre » m₁ et m₂. Part du groupe 1 = (m₂ − M) / (m₂ − m₁) ; part du groupe 2 = (M − m₁) / (m₂ − m₁).</p>
          <p>• <strong>Mélange de concentrations :</strong> additionner les <strong>quantités pures</strong>, diviser par le volume total.</p>
          <p>• <strong>Ajouter une valeur à une moyenne :</strong> nouvelle somme − ancienne somme = valeur ajoutée.</p>
          <p>• <strong>Mini-exemple :</strong> classe A (20 élèves, moyenne 12) et classe B (30 élèves, moyenne 14) ⇒ (240 + 420) / 50 = <strong>13,2</strong>. Moyenne du groupe = 14, hommes 12, femmes 18 ⇒ part de femmes = (14 − 12) / (18 − 12) = <strong>1/3</strong>.</p>
          <p>• <strong>Mélange :</strong> 3 L à 10 % + 2 L à 20 % ⇒ (0,3 + 0,4) / 5 = <strong>14 %</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">5. Intérêts</div>
        <div class="math-desc-list">
          <p>• <strong>Intérêts simples :</strong> I = C × t × n (le capital reste constant). <strong>Composés :</strong> C × (1 + t)ⁿ.</p>
          <p>• <strong>Mini-exemple :</strong> 1 000 € à 10 % sur 2 ans composés ⇒ 1 000 × 1,1² = <strong>1 210 €</strong>. 2 000 € à 4 % simples sur 3 ans ⇒ 2 000 × 0,04 × 3 = <strong>240 €</strong> d’intérêts.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">6. Pièges</div>
        <div class="math-desc-list">
          <p>• Additionner les taux : +20 % puis −20 % ne revient <strong>pas</strong> à 0.</p>
          <p>• Appliquer la baisse de 20 % <strong>au prix final</strong> au lieu du prix initial, ou retirer 20 % au lieu de diviser par 1,25.</p>
          <p>• Confondre <strong>« % de A »</strong> et <strong>« A % de »</strong> (le dénominateur change avec la question).</p>
          <p>• Moyenne de moyennes : <strong>pondérer par les effectifs</strong> (jamais (m₁ + m₂) / 2 si les groupes diffèrent).</p>
          <p>• Moyenne d’un groupe dont l’effectif est inconnu : <strong>pas de réponse</strong> sans ce renseignement (utile en Conditions Minimales).</p>
        </div>
      </div>

    </div>
  `
  },
  {
    id: "calc_denombrement_probas",
    title: "Dénombrement et probabilités",
    desc: "Principe multiplicatif, arrangements, combinaisons, anagrammes, tirages avec/sans remise, « au moins un » et « sachant que ».",
    subtitle: "Choisir entre ordre / pas d’ordre, répétition / pas de répétition, puis calculer",
    html: `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <div class="math-card-visual">
        <div class="math-card-title">1. Compter : la bonne formule</div>
        <div class="math-desc-list">
          <p>• <strong>Principe multiplicatif :</strong> étapes successives indépendantes ⇒ on multiplie les nombres de choix. Alternatives exclusives ⇒ on additionne.</p>
          <p>• <strong>Permutations :</strong> n! ordres possibles pour n objets distincts (5! = 120).</p>
          <p>• <strong>Arrangements</strong> (l’ordre compte) : A(n, k) = n × (n − 1) × … (k facteurs). Ex. : podium parmi 10 = 10 × 9 × 8 = <strong>720</strong>.</p>
          <p>• <strong>Combinaisons</strong> (l’ordre ne compte pas) : C(n, k) = A(n, k) / k!. Ex. : comité de 3 parmi 8 = 8 × 7 × 6 / 6 = <strong>56</strong>. Symétrie : C(n, k) = C(n, n − k).</p>
          <p>• <strong>Anagrammes avec répétitions :</strong> n! / (a! × b! …). MAMAN : 5! / (2! × 2!) = <strong>30</strong>.</p>
          <p>• <strong>Table ronde :</strong> (n − 1)! (on fixe une personne). 5 personnes ⇒ 24.</p>
        </div>
        <div class="math-formula-box-visual">C(n, k) = n! / (k! (n − k)!)</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));">
          <div class="math-table-cell">C(n, 2) <span>n(n−1)/2</span></div>
          <div class="math-table-cell">C(5, 2) <span><strong>10</strong></span></div>
          <div class="math-table-cell">C(6, 3) <span><strong>20</strong></span></div>
          <div class="math-table-cell">C(10, 3) <span><strong>120</strong></span></div>
          <div class="math-table-cell">C(10, 2) <span><strong>45</strong></span></div>
          <div class="math-table-cell">C(8, 4) <span><strong>70</strong></span></div>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">2. Cas classiques</div>
        <div class="math-desc-list">
          <p>• <strong>Poignées de mains / matchs simples :</strong> C(n, 2) = n(n − 1)/2. 12 personnes ⇒ <strong>66</strong>. <strong>Championnat aller-retour :</strong> n(n − 1).</p>
          <p>• <strong>Élimination directe :</strong> n − 1 matchs pour n équipes (16 équipes ⇒ 15).</p>
          <p>• <strong>Codes à 3 chiffres distincts :</strong> 10 × 9 × 8 = 720 (zéro autorisé) ; nombres à 3 chiffres (100 à 999) à chiffres distincts : 9 × 9 × 8 = <strong>648</strong>.</p>
          <p>• <strong>Nombre de diviseurs :</strong> si N = p^a × q^b, alors (a + 1)(b + 1) diviseurs. 72 = 2³ × 3² ⇒ 4 × 3 = <strong>12</strong>.</p>
          <p>• <strong>Diagonales d’un polygone :</strong> n(n − 3)/2. <strong>Triangles formés par n points non alignés :</strong> C(n, 3).</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">3. Probabilités</div>
        <div class="math-desc-list">
          <p>• <strong>Cas équiprobables :</strong> P = nombre de cas favorables / nombre de cas possibles.</p>
          <p>• <strong>Indépendance :</strong> P(A et B) = P(A) × P(B). <strong>Sans remise :</strong> on multiplie les fractions successives (le dénominateur diminue).</p>
          <p>• <strong>« Au moins un » :</strong> P = 1 − P(aucun). 3 pièces, au moins une face : 1 − 1/8 = <strong>7/8</strong>.</p>
          <p>• <strong>« Sachant que » :</strong> on <strong>réduit l’univers</strong> aux cas où la condition est vraie, puis on compte. P(A | B) = P(A et B) / P(B).</p>
          <p>• <strong>Deux dés :</strong> 36 issues ; somme 7 ⇒ 6/36 = 1/6 (c’est la somme la plus probable) ; somme ≥ 10 ⇒ 6 issues.</p>
          <p>• <strong>Urne 4 rouges + 6 noires, 2 rouges de suite :</strong> sans remise 4/10 × 3/9 = <strong>2/15</strong> ; avec remise 4/10 × 4/10 = <strong>4/25</strong>.</p>
          <p>• <strong>Exemple « sachant que » :</strong> deux dés, somme ≥ 10 (6 issues : 46, 55, 64, 56, 65, 66). Proba d’un double = 2/6 = <strong>1/3</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">4. Pièges</div>
        <div class="math-desc-list">
          <p>• Utiliser une <strong>combinaison</strong> quand l’ordre compte (postes différents) ou l’inverse (comité).</p>
          <p>• Oublier la <strong>division par les répétitions</strong> dans les anagrammes.</p>
          <p>• Confondre <strong>avec / sans remise</strong> : le dénominateur ne change pas dans le premier cas.</p>
          <p>• « Au moins un » calculé en additionnant plusieurs cas, au lieu de 1 − aucun.</p>
          <p>• Famille à 2 enfants, « sachant qu’il y a au moins un garçon » : P(2 garçons) = <strong>1/3</strong> (cas GG, GF, FG), pas 1/2.</p>
          <p>• Lister soigneusement quand c’est petit : plus sûr qu’une formule mal choisie.</p>
        </div>
      </div>

    </div>
  `
  },
  {
    id: "calc_arithmetique",
    title: "Arithmétique : divisibilité, premiers, PGCD/PPCM, parité, calendrier",
    desc: "Critères de divisibilité, facteurs premiers, PGCD et PPCM, parité, chiffres des unités, identités remarquables, suites et calendrier.",
    subtitle: "Les réflexes de nombres pour les Calculs et surtout pour les Conditions Minimales",
    html: `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <div class="math-card-visual">
        <div class="math-card-title">1. Divisibilité</div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
          <div class="math-table-cell">2 <span>dernier chiffre pair</span></div>
          <div class="math-table-cell">3 <span>somme des chiffres ÷ 3</span></div>
          <div class="math-table-cell">4 <span>2 derniers chiffres ÷ 4</span></div>
          <div class="math-table-cell">5 <span>finit par 0 ou 5</span></div>
          <div class="math-table-cell">6 <span>pair <strong>et</strong> ÷ 3</span></div>
          <div class="math-table-cell">8 <span>3 derniers chiffres ÷ 8</span></div>
          <div class="math-table-cell">9 <span>somme des chiffres ÷ 9</span></div>
          <div class="math-table-cell">10 <span>finit par 0</span></div>
          <div class="math-table-cell">11 <span>somme alternée ÷ 11</span></div>
        </div>
        <div class="math-desc-list">
          <p style="margin-top:10px;">• <strong>Divisible par a et par b, avec a et b premiers entre eux ⇒ divisible par a × b</strong> (3 et 4 ⇒ 12). Plus généralement, divisible par 14 ⇒ divisible par 2 et par 7 ; divisible par 14 et par 3 ⇒ divisible par 42, donc par 21.</p>
          <p>• Divisible par 9 ⇒ divisible par 3 (la réciproque est fausse). Divisible par 4 ⇒ pair.</p>
          <p>• <strong>Faux premiers :</strong> 51 = 3×17, 57 = 3×19, 87 = 3×29, 91 = 7×13, 111 = 3×37, 119 = 7×17, 133 = 7×19.</p>
          <p>• <strong>Consécutifs :</strong> parmi 2 entiers consécutifs il y a un pair ; parmi 3, un multiple de 3 ; le produit de k entiers consécutifs est divisible par k!.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">2. Nombres premiers, PGCD, PPCM</div>
        <div class="math-desc-list">
          <p>• <strong>25 premiers inférieurs à 100 :</strong> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97. <strong>1 n’est pas premier ; 2 est le seul premier pair.</strong></p>
          <p>• <strong>Décomposition unique</strong> en facteurs premiers : 2431 = 11 × 13 × 17. Nombre de diviseurs de p^a × q^b : (a + 1)(b + 1).</p>
          <p>• <strong>PGCD :</strong> facteurs communs avec le plus petit exposant ; sert aux découpages, partages, carreaux « les plus grands possibles ». <strong>PPCM :</strong> tous les facteurs avec le plus grand exposant ; sert aux événements qui se retrouvent ensemble.</p>
          <p>• <strong>PGCD × PPCM = a × b</strong> pour deux nombres a et b.</p>
          <p>• <strong>Mini-exemples :</strong> PPCM(12, 18) = 36 (bus de 12 et 18 min ensemble à 8 h ⇒ 8 h 36). PGCD(360, 240) = 120 (carreaux carrés les plus grands pour une salle 360 × 240 cm).</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">3. Parité et carrés parfaits</div>
        <div class="math-desc-list">
          <p>• <strong>Somme :</strong> P + P = P ; I + I = P ; P + I = I. <strong>Produit :</strong> P × n’importe quoi = P ; I × I = I.</p>
          <p>• <strong>Puissance :</strong> la parité de nᵏ est celle de n. <strong>Différence :</strong> mêmes règles que la somme.</p>
          <p>• <strong>Carré parfait :</strong> finit par 0, 1, 4, 5, 6 ou 9 (jamais 2, 3, 7, 8). Son reste dans la division par 4 est 0 ou 1. Les exposants de sa décomposition sont tous pairs ; il a un nombre <strong>impair</strong> de diviseurs.</p>
          <p>• <strong>Carrés à connaître :</strong> 11² = 121 ; 12² = 144 ; 13² = 169 ; 14² = 196 ; 15² = 225 ; 16² = 256 ; 17² = 289 ; 18² = 324 ; 19² = 361 ; 25² = 625. <strong>Cubes :</strong> 2³ = 8 ; 3³ = 27 ; 4³ = 64 ; 5³ = 125 ; 6³ = 216 ; 7³ = 343 ; 8³ = 512 ; 9³ = 729.</p>
          <p>• <strong>Mini-exemple :</strong> x + y impair ⇒ l’un est pair ⇒ x × y est pair, <strong>à coup sûr</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">4. Chiffre des unités d’une puissance</div>
        <div class="math-desc-list">
          <p>On regarde le reste de l’exposant dans la division par 4 (reste 0 ⇒ on prend la 4e valeur du cycle).</p>
        </div>
        <div class="math-table-grid" style="grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));">
          <div class="math-table-cell">…2 <span>2 - 4 - 8 - 6</span></div>
          <div class="math-table-cell">…3 <span>3 - 9 - 7 - 1</span></div>
          <div class="math-table-cell">…7 <span>7 - 9 - 3 - 1</span></div>
          <div class="math-table-cell">…8 <span>8 - 4 - 2 - 6</span></div>
          <div class="math-table-cell">…4 <span>4 - 6 (période 2)</span></div>
          <div class="math-table-cell">…9 <span>9 - 1 (période 2)</span></div>
          <div class="math-table-cell">…0, 1, 5, 6 <span>constant</span></div>
        </div>
        <div class="math-desc-list">
          <p style="margin-top:10px;">• <strong>Mini-exemple :</strong> 7²⁰²⁶ : 2026 = 4 × 506 + 2 ⇒ 2e valeur du cycle (7, 9, 3, 1) ⇒ chiffre des unités <strong>9</strong>.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">5. Identités remarquables, équations, suites</div>
        <div class="math-formula-box-visual">(a ± b)² = a² ± 2ab + b² · a² − b² = (a − b)(a + b)</div>
        <div class="math-desc-list">
          <p>• <strong>Entiers :</strong> si x² − y² = 17 (premier) ⇒ (x − y)(x + y) = 17 ⇒ x − y = 1 et x + y = 17 ⇒ x = 9, y = 8.</p>
          <p>• <strong>Somme 1 + 2 + … + n</strong> = n(n + 1)/2 (1 à 30 ⇒ 465). <strong>Suite arithmétique :</strong> uₖ = u₁ + (k − 1) r. <strong>Suite géométrique :</strong> somme de n termes = u₁ (qⁿ − 1)/(q − 1) (3, 6, 12… six termes ⇒ 189).</p>
          <p>• <strong>Mise en équation :</strong> écrire la phrase « ce qu’on demande = inconnue » avant de poser. Ex. : père 3 fois plus âgé que son fils, dans 12 ans 2 fois plus âgé ⇒ 3x + 12 = 2(x + 12) ⇒ fils = 12 ans.</p>
          <p>• <strong>Sommes/différences :</strong> somme 50 et différence 10 ⇒ (50 + 10)/2 = 30 et 20.</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">6. Calendrier</div>
        <div class="math-desc-list">
          <p>• <strong>Mois de 31 jours :</strong> janvier, mars, mai, juillet, août, octobre, décembre. <strong>Mois de 30 jours :</strong> avril, juin, septembre, novembre. Février : 28 ou 29 jours.</p>
          <p>• <strong>Année bissextile :</strong> divisible par 4, sauf les siècles non divisibles par 400 (1900 non, 2000 oui, 2100 non). 365 ou 366 jours ; <strong>4 ans = 1 461 jours</strong>.</p>
          <p>• <strong>Jour de la semaine :</strong> on calcule le <strong>reste modulo 7</strong>. Un mois de 31 jours décale de 3 jours, de 30 jours de 2 jours, de 28 de 0. Une année décale de 1 jour (2 si bissextile).</p>
          <p>• <strong>Mini-exemples :</strong> 3 mars (mardi) ⇒ 3 avril = + 31 jours = + 3 ⇒ <strong>vendredi</strong>. Du 15 avril au 15 juin : 30 + 31 = <strong>61 jours</strong>. 1er janvier 2019 (mardi) ⇒ 1er janvier 2021 = + 365 + 366 = + 3 (mod 7) ⇒ <strong>vendredi</strong>.</p>
          <p>• Bornes : du 3 au 17 il y a <strong>14 jours</strong> d’écart (15 si l’on compte les deux extrémités).</p>
        </div>
      </div>

      <div class="math-card-visual">
        <div class="math-card-title">7. Pièges</div>
        <div class="math-desc-list">
          <p>• <strong>Citer un « faux premier »</strong> (51, 57, 87, 91) comme premier.</p>
          <p>• Conclure qu’un nombre divisible par 3 l’est par 9 (ou 2 et 4 ⇒ 8) : il faut <strong>les facteurs premiers</strong>.</p>
          <p>• Oublier que <strong>2</strong> est premier et pair, que <strong>0</strong> est pair, que 1 n’est pas premier.</p>
          <p>• Oublier une <strong>année bissextile</strong> ou compter un mois à 31 jours au lieu de 30 (avril, juin, septembre, novembre).</p>
          <p>• Parité : un produit pair n’implique rien sur chaque facteur ; une somme paire ne dit pas que chaque terme est pair.</p>
        </div>
      </div>

    </div>
  `
  }
];

export const TM_CALC_FLASHCARDS = [
  { id: 1, category: "Géométrie", front: "Aire d’un triangle équilatéral de côté a ?", backName: "A = (√3 / 4) × a²", backDef: "La hauteur vaut h = a√3 / 2, donc A = a × h / 2.", backTrap: "Ne pas oublier le /4 : côté 6 ⇒ A = 9√3 (et pas 36√3)." },
  { id: 2, category: "Géométrie", front: "Hauteur d’un triangle équilatéral de côté a ?", backName: "h = a√3 / 2", backDef: "La hauteur coupe le triangle en deux triangles 30-60-90 de côtés a/2, h, a.", backTrap: "Côté 10 ⇒ h = 5√3 ≈ 8,66 (et pas 10 ni 5)." },
  { id: 3, category: "Géométrie", front: "Aire d’un triangle quelconque ?", backName: "A = base × hauteur / 2", backDef: "La hauteur est perpendiculaire à la base (ou à son prolongement).", backTrap: "Ne pas prendre le côté oblique comme hauteur." },
  { id: 4, category: "Géométrie", front: "Comment calculer la hauteur et l’aire d’un triangle isocèle ?", backName: "h = √(côté² − (base / 2)²)", backDef: "La hauteur issue du sommet coupe la base en deux et forme 2 triangles rectangles identiques.", backTrap: "Isocèle 13-13-10 : h = √(169 − 25) = 12 (pas √(169 − 100)), aire 60." },
  { id: 5, category: "Géométrie", front: "Hauteur issue de l’angle droit d’un triangle rectangle ?", backName: "h = (cathète 1 × cathète 2) / hypoténuse", backDef: "On écrit l’aire de deux façons : ab/2 = c × h/2.", backTrap: "3-4-5 : h = 12/5 = 2,4 (et pas 3 ni 4)." },
  { id: 6, category: "Géométrie", front: "Triangle rectangle isocèle (45-45-90) : côtés ?", backName: "a, a, a√2", backDef: "L’hypoténuse vaut côté × √2, donc côté = hypoténuse / √2.", backTrap: "Hypoténuse 10 ⇒ côté 5√2 ≈ 7,07 (et pas 5) ; aire = 25." },
  { id: 7, category: "Géométrie", front: "Triangle 30-60-90 : côtés ?", backName: "a, a√3, 2a", backDef: "Le côté en face de 30° est la moitié de l’hypoténuse ; le côté en face de 60° vaut a√3.", backTrap: "Ne pas inverser a√3 et 2a : l’hypoténuse est le plus grand côté, 2a." },
  { id: 8, category: "Géométrie", front: "Énoncé du théorème de Pythagore ?", backName: "hypoténuse² = cathète² + cathète²", backDef: "Valable seulement dans un triangle rectangle ; l’hypoténuse est le côté opposé à l’angle droit.", backTrap: "Ne pas additionner les côtés : 3 et 4 donnent 5, pas 7." },
  { id: 9, category: "Géométrie", front: "Quels triplets de Pythagore faut-il connaître ?", backName: "3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29", backDef: "Leurs multiples comptent aussi : 6-8-10, 9-12-15, 10-24-26, 15-20-25…", backTrap: "Vérifier que le plus grand nombre est bien l’hypoténuse." },
  { id: 10, category: "Géométrie", front: "Comment prouver qu’un triangle est rectangle ?", backName: "Réciproque : c² = a² + b²", backDef: "On teste avec le plus grand côté en c : 7-24-25 ⇒ 49 + 576 = 625 ✓.", backTrap: "Tester avec un côté qui n’est pas le plus grand donne toujours faux." },
  { id: 11, category: "Géométrie", front: "Diagonale d’un carré de côté a ?", backName: "d = a√2", backDef: "C’est l’hypoténuse d’un triangle 45-45-90.", backTrap: "Ne pas confondre avec la diagonale du cube : a√3." },
  { id: 12, category: "Géométrie", front: "Aire d’un carré en fonction de sa diagonale d ?", backName: "A = d² / 2", backDef: "Côté = d/√2, donc A = d²/2.", backTrap: "Diagonale 6 ⇒ aire 18 (et pas 36)." },
  { id: 13, category: "Géométrie", front: "Diagonale d’un rectangle L × l ?", backName: "d = √(L² + l²)", backDef: "Pythagore appliqué au rectangle.", backTrap: "Pas L + l : 6 × 8 ⇒ 10 (et pas 14)." },
  { id: 14, category: "Géométrie", front: "Somme des angles d’un triangle ? d’un quadrilatère ?", backName: "180° et 360°", backDef: "Un polygone convexe à n côtés vaut (n − 2) × 180°.", backTrap: "Un triangle ne peut pas avoir deux angles obtus (ni deux droits)." },
  { id: 15, category: "Géométrie", front: "Somme des angles d’un polygone à n côtés ?", backName: "(n − 2) × 180°", backDef: "Pentagone 540°, hexagone 720°, octogone 1 080°.", backTrap: "Hexagone : 720° (4 × 180), pas 540° (c’est le pentagone)." },
  { id: 16, category: "Géométrie", front: "Angle intérieur d’un polygone régulier à n côtés ?", backName: "180° − 360° / n", backDef: "Hexagone 120°, octogone 135°, décagone 144°, dodécagone 150°.", backTrap: "L’angle extérieur vaut 360°/n : ne pas les confondre." },
  { id: 17, category: "Géométrie", front: "Nombre de diagonales d’un polygone à n côtés ?", backName: "n(n − 3) / 2", backDef: "Chaque sommet se relie à n − 3 autres (pas lui, pas ses 2 voisins), puis on divise par 2.", backTrap: "Hexagone : 6 × 3 / 2 = 9 ; décagone : 35." },
  { id: 18, category: "Géométrie", front: "Angle au centre et angle inscrit sur le même arc ?", backName: "Angle au centre = 2 × angle inscrit", backDef: "Un angle inscrit qui intercepte un diamètre vaut 90°.", backTrap: "Les deux angles doivent intercepter le même arc." },
  { id: 19, category: "Géométrie", front: "Triangle inscrit dans un cercle dont un côté est un diamètre ?", backName: "Triangle rectangle (angle droit en face du diamètre)", backDef: "Le diamètre est l’hypoténuse ; le rayon du cercle circonscrit vaut la moitié de l’hypoténuse.", backTrap: "Ex. : 6-8-10 inscrit ⇒ R = 5." },
  { id: 20, category: "Géométrie", front: "Angle extérieur d’un triangle ?", backName: "Somme des deux angles intérieurs non adjacents", backDef: "Il vaut aussi 180° moins l’angle intérieur adjacent.", backTrap: "Angles 40° et 65° ⇒ angle extérieur au troisième sommet = 105°." },
  { id: 21, category: "Géométrie", front: "Théorème de Thalès (MN) // (BC) dans le triangle ABC ?", backName: "AM / AB = AN / AC = MN / BC", backDef: "Toujours une partie sur le tout, ou petit triangle sur grand triangle.", backTrap: "AM / AB, pas AM / MB. Si AM = 3 et MB = 2, alors AM / AB = 3/5." },
  { id: 22, category: "Géométrie", front: "Triangles semblables de rapport k : longueurs, aires ?", backName: "Longueurs × k, aires × k²", backDef: "Le rapport des aires est le carré du rapport des longueurs.", backTrap: "k = 2 ⇒ aire × 4, pas × 2." },
  { id: 23, category: "Géométrie", front: "Segment joignant les milieux de deux côtés d’un triangle ?", backName: "Parallèle au 3e côté, de longueur moitié", backDef: "Le petit triangle formé a une aire égale à 1/4 de l’aire du grand.", backTrap: "MN = BC / 2 (et non BC)." },
  { id: 24, category: "Géométrie", front: "Aire d’un parallélogramme ?", backName: "A = base × hauteur", backDef: "Avec deux côtés a et b et un angle θ : A = a × b × sin θ.", backTrap: "Ne pas multiplier les deux côtés voisins (sauf angle droit)." },
  { id: 25, category: "Géométrie", front: "Aire d’un losange ?", backName: "A = D × d / 2", backDef: "Les diagonales sont perpendiculaires et se coupent en leur milieu : côté = √((D/2)² + (d/2)²).", backTrap: "Diagonales 10 et 24 ⇒ côté 13, aire 120." },
  { id: 26, category: "Géométrie", front: "Aire d’un trapèze ?", backName: "A = (B + b) / 2 × h", backDef: "La hauteur est perpendiculaire aux bases.", backTrap: "Ne pas utiliser le côté oblique comme hauteur." },
  { id: 27, category: "Géométrie", front: "Aire d’un hexagone régulier de côté a ?", backName: "A = (3√3 / 2) × a²", backDef: "Il se compose de 6 triangles équilatéraux de côté a ; le rayon du cercle circonscrit vaut a.", backTrap: "Côté 4 ⇒ 24√3 ; la grande diagonale vaut 2a." },
  { id: 28, category: "Géométrie", front: "Carré inscrit dans un cercle de rayon R : côté et aire ?", backName: "Côté R√2, aire 2R²", backDef: "La diagonale du carré est un diamètre : 2R = côté × √2.", backTrap: "Rayon 5 ⇒ aire 50 (et pas 25)." },
  { id: 29, category: "Géométrie", front: "Cercle inscrit dans un carré de côté a ?", backName: "Rayon a / 2, aire πa² / 4", backDef: "Le cercle occupe π/4 ≈ 78,5 % du carré.", backTrap: "Rayon ≠ a ; carré de côté 12 ⇒ cercle de rayon 6, aire 36π." },
  { id: 30, category: "Géométrie", front: "Carré obtenu en joignant les milieux des côtés d’un carré ?", backName: "Aire = moitié de l’aire du grand carré", backDef: "Son côté vaut a√2 / 2.", backTrap: "Carré de 48 ⇒ carré intérieur de 24 (et pas 12)." },
  { id: 31, category: "Géométrie", front: "Circonférence d’un cercle ?", backName: "C = 2πr = πd", backDef: "Longueur d’un tour complet.", backTrap: "Ne pas la confondre avec l’aire πr²." },
  { id: 32, category: "Géométrie", front: "Aire d’un disque ?", backName: "A = πr²", backDef: "Toujours calculer le rayon d’abord.", backTrap: "Diamètre 10 ⇒ r = 5 ⇒ A = 25π (et non 100π)." },
  { id: 33, category: "Géométrie", front: "Longueur d’un arc d’angle θ ?", backName: "L = θ / 360 × 2πr", backDef: "Un arc de 90° est 1/4 du cercle.", backTrap: "Le périmètre d’un secteur = arc + 2 rayons." },
  { id: 34, category: "Géométrie", front: "Aire d’un secteur d’angle θ ?", backName: "A = θ / 360 × πr²", backDef: "60° ⇒ 1/6 du disque ; 120° ⇒ 1/3.", backTrap: "Ne pas utiliser 2πr (c’est la longueur)." },
  { id: 35, category: "Géométrie", front: "Aire d’une couronne de rayons R et r ?", backName: "A = π(R² − r²)", backDef: "Disque extérieur moins disque intérieur.", backTrap: "Pas π(R − r)² : rayons 10 et 6 ⇒ 64π (et non 16π)." },
  { id: 36, category: "Géométrie", front: "Si le rayon est multiplié par k, que deviennent circonférence et aire ?", backName: "Circonférence × k, aire × k²", backDef: "Rayon + 50 % ⇒ aire × 2,25, soit + 125 %.", backTrap: "Pizza de diamètre 30 cm = 2,25 pizzas de diamètre 20 cm." },
  { id: 37, category: "Géométrie", front: "Combien de tours de roue pour parcourir une distance D ?", backName: "D / (2πr)", backDef: "Même unité pour D et r.", backTrap: "Ne pas utiliser le diamètre à la place du rayon sans corriger." },
  { id: 38, category: "Géométrie", front: "Périmètre d’un quart de disque de rayon r ?", backName: "2r + πr / 2", backDef: "Deux rayons rectilignes plus un quart de circonférence.", backTrap: "Oublier les deux rayons : r = 4 ⇒ 8 + 2π." },
  { id: 39, category: "Géométrie", front: "Angle entre les aiguilles d’une horloge ?", backName: "Minutes : 6° / min ; heures : 30° / h (0,5° / min)", backDef: "À 3 h 30 : heures à 105°, minutes à 180° ⇒ 75°.", backTrap: "L’aiguille des heures avance aussi entre deux heures pleines." },
  { id: 40, category: "Espace", front: "Volume et aire totale d’un cube d’arête a ?", backName: "V = a³ et A = 6a²", backDef: "6 faces carrées, 12 arêtes, 8 sommets.", backTrap: "Aire totale = 6 faces (pas 4)." },
  { id: 41, category: "Espace", front: "Diagonale d’un cube d’arête a ?", backName: "d = a√3", backDef: "Diagonale de face a√2, puis Pythagore avec l’arête : √(2a² + a²).", backTrap: "a√2 est la diagonale d’une face, pas du cube." },
  { id: 42, category: "Espace", front: "Pavé a × b × c : volume, aire, diagonale ?", backName: "V = abc ; A = 2(ab + bc + ca) ; d = √(a² + b² + c²)", backDef: "La diagonale utilise trois dimensions.", backTrap: "Pavé 3 × 4 × 12 ⇒ diagonale 13 ; aire 2(12 + 48 + 36) = 192." },
  { id: 43, category: "Espace", front: "Cylindre de rayon r et de hauteur h : volume et surfaces ?", backName: "V = πr²h ; latérale 2πrh ; totale 2πr(r + h)", backDef: "Base × hauteur ; la surface latérale est un rectangle déroulé.", backTrap: "Rayon / diamètre : lire l’énoncé." },
  { id: 44, category: "Espace", front: "Volume d’un cône ?", backName: "V = (1/3) πr²h", backDef: "Génératrice g = √(r² + h²), surface latérale πrg.", backTrap: "Oublier le 1/3 ; h est la hauteur, pas la génératrice." },
  { id: 45, category: "Espace", front: "Volume et aire d’une sphère de rayon r ?", backName: "V = (4/3) πr³ ; A = 4πr²", backDef: "Rayon 3 ⇒ V = 36π, A = 36π.", backTrap: "Rayon × 2 ⇒ volume × 8 et aire × 4." },
  { id: 46, category: "Espace", front: "Volume d’une pyramide (ou d’un cône) ?", backName: "V = aire de la base × hauteur / 3", backDef: "Un tiers du prisme de même base et même hauteur.", backTrap: "La hauteur est verticale, pas l’apothème." },
  { id: 47, category: "Espace", front: "Facteur d’échelle k : longueurs, aires, volumes ?", backName: "Longueurs × k, aires × k², volumes × k³", backDef: "Arêtes × 3 ⇒ aire × 9 et volume × 27.", backTrap: "Un volume × 8 ⇒ longueurs × 2 (racine cubique)." },
  { id: 48, category: "Espace", front: "Comparer cône, cylindre et sphère ?", backName: "Cône = 1/3 du cylindre ; sphère = 2/3 du cylindre circonscrit", backDef: "Cylindre circonscrit à la sphère : rayon r, hauteur 2r.", backTrap: "Cône et cylindre doivent avoir même base et même hauteur." },
  { id: 49, category: "Espace", front: "Cube n × n × n peint puis découpé : combien de petits cubes avec 3, 2, 1, 0 faces peintes ?", backName: "8 ; 12(n − 2) ; 6(n − 2)² ; (n − 2)³", backDef: "Sommets, arêtes, faces, intérieur.", backTrap: "n = 5 : 8 + 36 + 54 + 27 = 125 ; pour n = 4 : 8 + 24 + 24 + 8." },
  { id: 50, category: "Espace", front: "Conversions de volumes et de surfaces ?", backName: "1 L = 1 dm³ ; 1 m³ = 1 000 L ; 1 m² = 10 000 cm²", backDef: "1 dm³ = 1 000 cm³ ; 1 m³ = 1 000 000 cm³.", backTrap: "cm² → m² : on divise par 10 000, pas par 100." },
  { id: 51, category: "Espace", front: "Patron du cube : comment repérer les faces opposées ?", backName: "Dans une bande de 4 carrés, 1re et 3e (2e et 4e) sont opposées", backDef: "Deux faces séparées par une seule face dans une bande sont opposées.", backTrap: "Deux faces adjacentes dans le patron ne sont pas toujours adjacentes sur le cube." },
  { id: 52, category: "Espace", front: "Combien d’arêtes, de sommets et de faces pour un cube ?", backName: "12 arêtes, 8 sommets, 6 faces", backDef: "Relation d’Euler : sommets − arêtes + faces = 2.", backTrap: "Pyramide à base carrée : 5 sommets, 8 arêtes, 5 faces." },
  { id: 53, category: "Vitesses & travail", front: "Formule fondamentale distance / vitesse / temps ?", backName: "d = v × t", backDef: "Convertir le temps : 20 min = 1/3 h ; 1 h 20 = 4/3 h.", backTrap: "1 h 20 ≠ 1,20 h (1,20 h = 1 h 12)." },
  { id: 54, category: "Vitesses & travail", front: "Convertir des km/h en m/s ?", backName: "Diviser par 3,6", backDef: "72 km/h = 20 m/s ; l’inverse : multiplier par 3,6.", backTrap: "Ne pas diviser par 6 ni par 3." },
  { id: 55, category: "Vitesses & travail", front: "Vitesse moyenne sur un aller-retour (même distance) à v₁ puis v₂ ?", backName: "2 v₁ v₂ / (v₁ + v₂) (moyenne harmonique)", backDef: "Distance totale / temps total : 60 km/h puis 40 km/h ⇒ 48 km/h.", backTrap: "La moyenne arithmétique (50) est fausse : on passe plus de temps à la vitesse lente." },
  { id: 56, category: "Vitesses & travail", front: "Vitesse moyenne en général ?", backName: "Distance totale / temps total", backDef: "La moyenne arithmétique des vitesses ne vaut que si les durées sont égales.", backTrap: "100 km à 50 puis 100 km à 100 km/h ⇒ 66,7 km/h (pas 75)." },
  { id: 57, category: "Vitesses & travail", front: "Temps de croisement de deux mobiles qui vont l’un vers l’autre ?", backName: "D / (v₁ + v₂)", backDef: "Les vitesses s’additionnent en sens opposés.", backTrap: "Même sens : on soustrait, ce n’est plus un croisement." },
  { id: 58, category: "Vitesses & travail", front: "Temps pour qu’un mobile rapide rattrape un mobile lent ?", backName: "Avance (en km) / (v₂ − v₁)", backDef: "Avance = vitesse du premier × décalage de départ.", backTrap: "Ne pas utiliser l’heure de départ du second : seule l’avance en km compte." },
  { id: 59, category: "Vitesses & travail", front: "Deux mobiles partent d’un même point à angle droit : distance entre eux ?", backName: "Pythagore sur les distances parcourues", backDef: "À 6 et 8 km/h après 3 h : √(18² + 24²) = 30 km.", backTrap: "Ne pas additionner les distances." },
  { id: 60, category: "Vitesses & travail", front: "Temps pour qu’un train de longueur L traverse un tunnel de longueur T ?", backName: "(L + T) / vitesse", backDef: "Il faut que toute la longueur du train sorte.", backTrap: "Devant un poteau : L seulement. Convertir km/h en m/s." },
  { id: 61, category: "Vitesses & travail", front: "Vitesse d’un bateau avec un courant c ?", backName: "Descente : v + c ; remontée : v − c", backDef: "Pour un aller-retour, sommer les deux temps.", backTrap: "Le courant ne s’annule pas sur l’aller-retour." },
  { id: 62, category: "Vitesses & travail", front: "« Va 1,5 fois plus vite » signifie ?", backName: "Vitesse × 1,5, temps ÷ 1,5", backDef: "Un train qui met 3 h est battu par un autre qui met 2 h.", backTrap: "Le temps est × 2/3, pas − 50 %." },
  { id: 63, category: "Vitesses & travail", front: "Travail partagé : deux ouvriers mettant T₁ et T₂ ?", backName: "1/T = 1/T₁ + 1/T₂", backDef: "Les rendements (travail par heure) s’additionnent : 6 h et 3 h ⇒ 2 h.", backTrap: "Ni la moyenne des temps (4,5 h) ni la somme." },
  { id: 64, category: "Vitesses & travail", front: "Robinet de remplissage T₁ et fuite T₂ ?", backName: "1/T = 1/T₁ − 1/T₂", backDef: "On soustrait la fuite : 4 h et 12 h ⇒ 6 h.", backTrap: "Si T₂ < T₁, le bassin ne se remplit jamais." },
  { id: 65, category: "Vitesses & travail", front: "Proportionnalité inverse des ouvriers et du temps ?", backName: "Ouvriers × jours = constante", backDef: "5 ouvriers en 12 jours = 60 ; 3 ouvriers ⇒ 20 jours.", backTrap: "Pour plusieurs tâches, passer par « travail unitaire »." },
  { id: 66, category: "Vitesses & travail", front: "Une montre avance de m min par heure : comment la corriger ?", backName: "Elle compte (60 + m) min quand il s’en écoule 60", backDef: "Avance m min/h ⇒ après t h elle a pris m × t minutes d’avance.", backTrap: "Ne pas confondre l’heure indiquée et le temps réel écoulé." },
  { id: 67, category: "Pourcentages", front: "Hausse de t %, baisse de t % : quel coefficient ?", backName: "× (1 + t/100) et × (1 − t/100)", backDef: "+ 20 % = × 1,2 ; − 30 % = × 0,7.", backTrap: "Ne pas ajouter 0,20 : le coefficient inclut le 1." },
  { id: 68, category: "Pourcentages", front: "Évolutions successives : comment les combiner ?", backName: "Multiplier les coefficients", backDef: "+ 20 % puis − 20 % = 1,2 × 0,8 = 0,96 = − 4 %.", backTrap: "Jamais « + 20 − 20 = 0 »." },
  { id: 69, category: "Pourcentages", front: "Après une baisse de 25 %, il reste 60 € : prix initial ?", backName: "Diviser par le coefficient : 60 / 0,75 = 80 €", backDef: "Retrouver une valeur initiale = diviser par le coefficient.", backTrap: "Ne pas faire 60 × 1,25 = 75." },
  { id: 70, category: "Pourcentages", front: "Réciproque d’une hausse de t % ?", backName: "Baisse de t / (100 + t)", backDef: "+ 25 % ⇄ − 20 % ; + 50 % ⇄ − 33,3 % ; + 100 % ⇄ − 50 %.", backTrap: "Une baisse de 25 % ne compense pas une hausse de 25 %." },
  { id: 71, category: "Pourcentages", front: "Pourcentage d’un pourcentage ?", backName: "Multiplier", backDef: "40 % de 25 % de 800 = 0,4 × 0,25 × 800 = 80.", backTrap: "Ne pas additionner les pourcentages." },
  { id: 72, category: "Pourcentages", front: "Points de pourcentage ou pourcentage relatif ?", backName: "Relatif = écart / valeur de départ", backDef: "8 % → 10 % : + 2 points, soit + 25 %.", backTrap: "Bien distinguer « points de pourcentage » et « pour cent » dans l’énoncé." },
  { id: 73, category: "Pourcentages", front: "Tableau croisé de pourcentages : méthode ?", backName: "Prendre un total de 100 (ou 1 000) et remplir les cases", backDef: "Chaque case = proportion de ligne × proportion de colonne.", backTrap: "Parmi les lunettes, la part de filles se calcule sur le total des lunettes." },
  { id: 74, category: "Pourcentages", front: "Deux ensembles A et B : union et intersection ?", backName: "|A ∪ B| = |A| + |B| − |A ∩ B|", backDef: "Si personne n’est dans aucun ensemble : |A ∩ B| = |A| + |B| − total.", backTrap: "70 % + 50 % − 80 % = 40 % pour les deux." },
  { id: 75, category: "Pourcentages", front: "Moyenne pondérée de deux groupes ?", backName: "M = (n₁m₁ + n₂m₂) / (n₁ + n₂)", backDef: "20 élèves à 12 et 30 élèves à 14 ⇒ 13,2.", backTrap: "La moyenne de 12 et 14 (13) est fausse si les effectifs diffèrent." },
  { id: 76, category: "Pourcentages", front: "Barycentre : part du groupe 1 si M est la moyenne générale ?", backName: "(m₂ − M) / (m₂ − m₁)", backDef: "M = 14 entre 12 et 18 ⇒ part du groupe à 18 = 2/6 = 1/3.", backTrap: "Ne pas inverser les écarts : le groupe proche de M est le plus nombreux." },
  { id: 77, category: "Pourcentages", front: "Mélange de solutions de concentrations différentes ?", backName: "Concentration = quantité pure totale / volume total", backDef: "3 L à 10 % + 2 L à 20 % ⇒ 0,7 / 5 = 14 %.", backTrap: "Moyenne simple (15 %) fausse si volumes différents." },
  { id: 78, category: "Pourcentages", front: "Intérêts simples et composés ?", backName: "Simples : C × t × n ; composés : C × (1 + t)ⁿ", backDef: "1 000 € à 10 % sur 2 ans composés = 1 210 €.", backTrap: "Composés sur 2 ans ≠ 2 × t." },
  { id: 79, category: "Pourcentages", front: "Ajouter une note pour passer la moyenne de m à m′ avec n notes ?", backName: "Nouvelle note = (n + 1) m′ − n m", backDef: "4 notes à 12 ⇒ pour 13 de moyenne, la 5e vaut 65 − 48 = 17.", backTrap: "Ne pas prendre simplement 13." },
  { id: 80, category: "Dénombrement & probas", front: "Principe multiplicatif ?", backName: "On multiplie les choix des étapes successives", backDef: "3 entrées × 4 plats × 2 desserts = 24 menus.", backTrap: "Alternatives exclusives (« ou ») : on additionne." },
  { id: 81, category: "Dénombrement & probas", front: "Nombre d’ordres possibles de n objets distincts ?", backName: "n!", backDef: "5! = 120 ; 6! = 720.", backTrap: "Table ronde : (n − 1)!." },
  { id: 82, category: "Dénombrement & probas", front: "Arrangement A(n, k) ?", backName: "n × (n − 1) × … sur k facteurs", backDef: "L’ordre compte (podium, postes) : A(10, 3) = 720.", backTrap: "Ne pas diviser par k! : c’est la combinaison." },
  { id: 83, category: "Dénombrement & probas", front: "Combinaison C(n, k) ?", backName: "n! / (k! (n − k)!)", backDef: "L’ordre ne compte pas (comité) : C(8, 3) = 56 ; C(n, k) = C(n, n − k).", backTrap: "Utiliser A(n, k) pour un comité surestime ×k!." },
  { id: 84, category: "Dénombrement & probas", front: "Anagrammes d’un mot avec des lettres répétées ?", backName: "n! / (a! b! …)", backDef: "MAMAN : 5! / (2! 2!) = 30.", backTrap: "Oublier de diviser par les répétitions." },
  { id: 85, category: "Dénombrement & probas", front: "Poignées de mains entre n personnes ?", backName: "C(n, 2) = n(n − 1) / 2", backDef: "12 personnes ⇒ 66. Championnat aller-retour : n(n − 1).", backTrap: "Ne pas compter chaque poignée deux fois." },
  { id: 86, category: "Dénombrement & probas", front: "Probabilité d’un événement équiprobable ?", backName: "Cas favorables / cas possibles", backDef: "Deux dés : 36 issues, somme 7 ⇒ 6/36 = 1/6.", backTrap: "Les issues doivent être équiprobables (compter 36 et non 11 sommes)." },
  { id: 87, category: "Dénombrement & probas", front: "Tirages sans remise ou avec remise ?", backName: "Sans : fractions qui diminuent ; avec : même dénominateur", backDef: "Urne 4 R + 6 N, 2 rouges : sans 4/10 × 3/9 = 2/15 ; avec 4/25.", backTrap: "Ne pas garder 10 au dénominateur sans remise." },
  { id: 88, category: "Dénombrement & probas", front: "Probabilité d’avoir « au moins un » ?", backName: "1 − P(aucun)", backDef: "3 pièces, au moins une face : 1 − 1/8 = 7/8.", backTrap: "Éviter d’additionner les cas « un », « deux », « trois »." },
  { id: 89, category: "Dénombrement & probas", front: "Probabilité « sachant que » ?", backName: "On réduit l’univers à la condition", backDef: "Deux dés, somme ≥ 10 (6 issues) : 2 doubles ⇒ 2/6 = 1/3.", backTrap: "2 enfants dont au moins un garçon ⇒ P(2 garçons) = 1/3, pas 1/2." },
  { id: 90, category: "Dénombrement & probas", front: "Nombre de diviseurs d’un entier N = p^a × q^b ?", backName: "(a + 1)(b + 1)", backDef: "72 = 2³ × 3² ⇒ 4 × 3 = 12 diviseurs.", backTrap: "Ne pas oublier 1 et N : ce sont aussi des diviseurs." },
  { id: 91, category: "Dénombrement & probas", front: "Nombre de matchs dans un tournoi à élimination directe ?", backName: "n − 1", backDef: "16 équipes ⇒ 15 matchs (chaque match élimine 1 équipe).", backTrap: "Inutile d’additionner n/2 + n/4 + … : on retrouve n − 1." },
  { id: 92, category: "Arithmétique", front: "Critères de divisibilité par 2, 3, 4, 5, 9, 10 ?", backName: "2 : pair ; 3 : somme ; 4 : 2 derniers ; 5 : 0/5 ; 9 : somme ; 10 : 0", backDef: "Par 6 : pair et divisible par 3. Par 8 : 3 derniers chiffres. Par 11 : somme alternée.", backTrap: "Divisible par 9 ⇒ par 3, mais pas l’inverse." },
  { id: 93, category: "Arithmétique", front: "Divisible par a et par b : par quoi d’autre ?", backName: "Par a × b si a et b sont premiers entre eux", backDef: "3 et 4 ⇒ 12 ; 14 et 3 ⇒ 42 donc 21.", backTrap: "4 et 6 ⇒ 12 (PPCM), pas 24." },
  { id: 94, category: "Arithmétique", front: "Que savoir sur les nombres premiers ?", backName: "1 n’est pas premier ; 2 est le seul premier pair", backDef: "Premiers < 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.", backTrap: "Faux premiers : 51 = 3×17, 57 = 3×19, 87 = 3×29, 91 = 7×13." },
  { id: 95, category: "Arithmétique", front: "PGCD et PPCM : à quoi servent-ils ?", backName: "PGCD : partages, carreaux ; PPCM : rencontres", backDef: "PGCD × PPCM = a × b. PGCD(360, 240) = 120 ; PPCM(12, 18) = 36.", backTrap: "Bien lire si c’est « le plus grand » ou « le plus petit »." },
  { id: 96, category: "Arithmétique", front: "Règles de parité ?", backName: "P + P = P ; I + I = P ; P + I = I ; I × I = I ; P × tout = P", backDef: "La parité de nᵏ est celle de n.", backTrap: "Somme paire ⇒ les deux termes ont la même parité (pas forcément pairs)." },
  { id: 97, category: "Arithmétique", front: "Un carré parfait : quels critères ?", backName: "Finit par 0, 1, 4, 5, 6 ou 9 ; exposants tous pairs", backDef: "Il a un nombre impair de diviseurs et son reste mod 4 est 0 ou 1.", backTrap: "Un nombre finissant par 2, 3, 7 ou 8 n’est jamais un carré." },
  { id: 98, category: "Arithmétique", front: "Chiffre des unités de aⁿ ?", backName: "Cycle selon le reste de n mod 4", backDef: "7 : 7, 9, 3, 1 ; 2 : 2, 4, 8, 6 ; 7²⁰²⁶ finit par 9.", backTrap: "Reste 0 ⇒ 4e valeur du cycle, pas la 1re." },
  { id: 99, category: "Arithmétique", front: "Identités remarquables ?", backName: "(a ± b)² = a² ± 2ab + b² ; a² − b² = (a − b)(a + b)", backDef: "Si x² − y² = 17 (premier) : x − y = 1 et x + y = 17 ⇒ x = 9, y = 8.", backTrap: "Oublier le double produit 2ab." },
  { id: 100, category: "Arithmétique", front: "Produit de k entiers consécutifs ?", backName: "Divisible par k!", backDef: "2 consécutifs : un pair ; 3 consécutifs : un multiple de 3 (et de 2).", backTrap: "n² − 1 = (n − 1)(n + 1) : produit de deux nombres séparés par 2." },
  { id: 101, category: "Arithmétique", front: "Une année est bissextile quand ?", backName: "Divisible par 4, sauf siècles non divisibles par 400", backDef: "2000 oui, 1900 non, 2024 oui ; 4 ans = 1 461 jours.", backTrap: "Pas seulement « divisible par 4 »." },
  { id: 102, category: "Arithmétique", front: "Quels mois ont 30 jours ?", backName: "Avril, juin, septembre, novembre", backDef: "Février : 28 ou 29. Les 7 autres ont 31 jours.", backTrap: "Avril = 30 jours (et pas 31)." },
  { id: 103, category: "Arithmétique", front: "Trouver un jour de la semaine dans le futur ?", backName: "Calculer le reste modulo 7", backDef: "31 jours décalent de 3 jours, 30 de 2, 28 de 0 ; une année de 1 (2 si bissextile).", backTrap: "Compter les extrémités ou non : du 3 au 17, il y a 14 jours." },
  { id: 104, category: "Arithmétique", front: "Somme 1 + 2 + … + n ?", backName: "n(n + 1) / 2", backDef: "1 à 30 ⇒ 465. Suite arithmétique : u_k = u₁ + (k − 1) r.", backTrap: "Pour 20 termes, il y a 19 pas, pas 20." },
  { id: 105, category: "Arithmétique", front: "Somme de n termes d’une suite géométrique de raison q ?", backName: "u₁ (qⁿ − 1) / (q − 1)", backDef: "3, 6, 12… six termes ⇒ 3 × 63 = 189.", backTrap: "q = 2 : ne pas oublier le « − 1 »." },
  { id: 106, category: "Arithmétique", front: "Somme et différence de deux nombres connues : comment les retrouver ?", backName: "Grand = (S + D) / 2 ; petit = (S − D) / 2", backDef: "S = 50, D = 10 ⇒ 30 et 20.", backTrap: "Lire quel nombre on demande (le grand ou le petit)." },
  { id: 107, category: "Arithmétique", front: "Mise en équation d’un énoncé écrit : méthode ?", backName: "Nommer l’inconnue demandée, traduire phrase par phrase", backDef: "Père 3 × fils ; dans 12 ans 2 × ⇒ 3x + 12 = 2(x + 12) ⇒ x = 12.", backTrap: "Répondre à ce qu’on demande (le fils ou le père ?)." }
];

export const TM_CALC_GEO_QCM = [
  { prompt: "Quelle est l’aire d’un triangle équilatéral de côté 6 ?",
    options: ["9", "18√3", "9√3", "6√3", "36√3"],
    answerIndex: 2,
    explanation: "A = (√3 / 4) × a² = 36√3 / 4 = 9√3. Piège : oublier le /4 donne 36√3 ; utiliser /2 donne 18√3." },
  { prompt: "Quelle est la hauteur d’un triangle équilatéral de côté 8 ?",
    options: ["4√3", "4", "2√3", "4√2", "8√3"],
    answerIndex: 0,
    explanation: "h = a√3 / 2 = 8√3 / 2 = 4√3 (≈ 6,9). Piège : la hauteur n’est pas égale à la moitié du côté (4), et le facteur est √3, pas √2." },
  { prompt: "La hauteur d’un triangle équilatéral vaut 6√3. Quel est son périmètre ?",
    options: ["18", "36", "72", "12", "24"],
    answerIndex: 1,
    explanation: "h = a√3 / 2 = 6√3 ⇒ a = 12 ⇒ périmètre 3 × 12 = 36. Piège : s’arrêter au côté (12) alors que la question porte sur le périmètre." },
  { prompt: "Un triangle isocèle a deux côtés de 13 cm et une base de 10 cm. Quelle est son aire (en cm²) ?",
    options: ["78", "65", "30", "60", "120"],
    answerIndex: 3,
    explanation: "La hauteur coupe la base en deux : h = √(13² − 5²) = √144 = 12 (triplet 5-12-13). Aire = 10 × 12 / 2 = 60. Piège : oublier la division par 2 de la base ou de l’aire." },
  { prompt: "Un triangle isocèle a une base de 16 cm et une hauteur de 6 cm. Quel est son périmètre (en cm) ?",
    options: ["32", "42", "50", "36", "28"],
    answerIndex: 3,
    explanation: "Demi-base 8, hauteur 6 : côté égal = √(64 + 36) = 10 (triplet 6-8-10). Périmètre = 16 + 10 + 10 = 36. Piège : prendre la hauteur comme côté (28) ou oublier de diviser la base par 2." },
  { prompt: "Un triangle est rectangle avec des cathètes de 9 et 12. Quelle est la hauteur issue de l’angle droit ?",
    options: ["7,5", "7,2", "6", "9", "10,8"],
    answerIndex: 1,
    explanation: "Hypoténuse = 15 (triplet 3-4-5 × 3). Aire = 9 × 12 / 2 = 54 = 15 × h / 2 ⇒ h = 108 / 15 = 7,2. Piège : 7,5 est la médiane (moitié de l’hypoténuse), pas la hauteur." },
  { prompt: "Un triangle rectangle a une hypoténuse de 26 et un côté de 10. Quelle est son aire ?",
    options: ["65", "60", "240", "130", "120"],
    answerIndex: 4,
    explanation: "Autre cathète = √(676 − 100) = 24 (triplet 5-12-13 × 2). Aire = 10 × 24 / 2 = 120. Piège : oublier le /2 (240)." },
  { prompt: "Un triangle rectangle isocèle a une hypoténuse de 10. Quelle est son aire ?",
    options: ["25", "100", "10√2", "50", "25√2"],
    answerIndex: 0,
    explanation: "Côté = 10 / √2 = 5√2, aire = (5√2)² / 2 = 50 / 2 = 25. Raccourci : aire = hypoténuse² / 4. Piège : prendre 5 comme côté (aire 12,5) ou oublier le /2 (50)." },
  { prompt: "Un triangle rectangle a des angles de 30°, 60° et 90°, et une hypoténuse de 12. Quelle est son aire ?",
    options: ["18", "36", "18√3", "36√3", "12√3"],
    answerIndex: 2,
    explanation: "Côté court = 12 / 2 = 6 ; côté moyen = 6√3. Aire = 6 × 6√3 / 2 = 18√3. Piège : multiplier directement 6 × 6√3 sans diviser par 2." },
  { prompt: "Un triangle 30-60-90 a un côté court (en face du 30°) de 5. Quel est son périmètre ?",
    options: ["15 + 10√3", "15 + 5√3", "10 + 5√3", "15√3", "20"],
    answerIndex: 1,
    explanation: "Côtés : 5, 5√3 et 10. Périmètre = 15 + 5√3 ≈ 23,7. Piège : l’hypoténuse vaut 2 × le côté court (pas √3 fois)." },
  { prompt: "Une échelle de 13 m est appuyée contre un mur, son pied est à 5 m du mur. À quelle hauteur touche-t-elle le mur (en m) ?",
    options: ["18", "8", "10", "12", "13"],
    answerIndex: 3,
    explanation: "Triplet 5-12-13 : h = √(169 − 25) = 12. Piège : additionner 13 + 5 ou soustraire 13 − 5 (= 8)." },
  { prompt: "Quelle est la diagonale d’un rectangle de 20 × 15 ?",
    options: ["25", "35", "17,5", "30", "20"],
    answerIndex: 0,
    explanation: "Triplet 3-4-5 × 5 : √(400 + 225) = √625 = 25. Piège : additionner ou faire la moyenne des côtés." },
  { prompt: "La diagonale d’un rectangle mesure 17 et l’un de ses côtés 8. Quel est son périmètre ?",
    options: ["34", "40", "46", "50", "23"],
    answerIndex: 2,
    explanation: "Autre côté = √(289 − 64) = 15 (triplet 8-15-17). Périmètre = 2 × (8 + 15) = 46. Piège : 23 est le demi-périmètre." },
  { prompt: "Un carré a une diagonale de 12. Quelle est son aire ?",
    options: ["48", "144", "36", "72√2", "72"],
    answerIndex: 4,
    explanation: "Aire d’un carré = d² / 2 = 144 / 2 = 72. Piège : 144 (diagonale au carré, sans /2) ou 36 (confondre diagonale et côté)." },
  { prompt: "Un carré a une aire de 50. Quel est son périmètre ?",
    options: ["25√2", "10√2", "20√2", "40", "20"],
    answerIndex: 2,
    explanation: "Côté = √50 = 5√2. Périmètre = 4 × 5√2 = 20√2 ≈ 28,3. Piège : prendre 5 comme côté (20) au lieu de 5√2." },
  { prompt: "Un triangle a pour côtés 7, 24 et 25. Quelle est son aire ?",
    options: ["84", "87,5", "168", "175", "42"],
    answerIndex: 0,
    explanation: "7² + 24² = 625 = 25² : le triangle est rectangle et les cathètes sont 7 et 24. Aire = 7 × 24 / 2 = 84. Piège : multiplier deux autres côtés ou oublier le /2." },
  { prompt: "Un losange a des diagonales de 10 et 24. Quel est son périmètre ?",
    options: ["48", "60", "34", "52", "120"],
    answerIndex: 3,
    explanation: "Les demi-diagonales 5 et 12 forment un triangle rectangle de côté 13 (triplet 5-12-13). Côté du losange = 13 ⇒ périmètre 4 × 13 = 52. Piège : oublier de prendre les demi-diagonales." },
  { prompt: "Un losange a un côté de 10 et une diagonale de 12. Quelle est son aire ?",
    options: ["192", "96", "48", "60", "120"],
    answerIndex: 1,
    explanation: "Demi-diagonale 6, côté 10 ⇒ autre demi-diagonale 8 (triplet 6-8-10) ⇒ autre diagonale 16. Aire = 12 × 16 / 2 = 96. Piège : 192 (oubli du /2)." },
  { prompt: "Quelle est la somme des angles intérieurs d’un hexagone convexe (en degrés) ?",
    options: ["1 080", "360", "720", "900", "540"],
    answerIndex: 2,
    explanation: "(n − 2) × 180 = 4 × 180 = 720. Piège : 540 est la valeur du pentagone." },
  { prompt: "Quel est l’angle intérieur d’un octogone régulier (en degrés) ?",
    options: ["135", "140", "144", "150", "120"],
    answerIndex: 0,
    explanation: "(8 − 2) × 180 / 8 = 1 080 / 8 = 135. Ou 180 − 360/8 = 135. Piège : 144 est l’angle du décagone." },
  { prompt: "L’angle intérieur d’un polygone régulier vaut 150°. Combien a-t-il de côtés ?",
    options: ["10", "8", "15", "18", "12"],
    answerIndex: 4,
    explanation: "Angle extérieur = 180 − 150 = 30° et 360 / 30 = 12 côtés. Piège : l’équation 150 n = (n − 2) × 180 marche aussi mais est plus longue." },
  { prompt: "Dans le triangle ABC isocèle en A, l’angle en A vaut 50°. Combien vaut l’angle en B (en degrés) ?",
    options: ["130", "65", "50", "60", "80"],
    answerIndex: 1,
    explanation: "B = C = (180 − 50) / 2 = 65. Piège : ne pas oublier de partager entre B et C (130)." },
  { prompt: "Un angle au centre mesure 80°. Que vaut l’angle inscrit qui intercepte le même arc (en degrés) ?",
    options: ["160", "20", "80", "40", "60"],
    answerIndex: 3,
    explanation: "L’angle au centre est le double de l’angle inscrit : 80 / 2 = 40. Piège : 160 (doubler au lieu de diviser)." },
  { prompt: "Le triangle ABC est inscrit dans un cercle de diamètre [BC]. L’angle en B vaut 35°. Quel est l’angle en C (en degrés) ?",
    options: ["45", "65", "90", "55", "35"],
    answerIndex: 3,
    explanation: "Un triangle inscrit sur un diamètre est rectangle en A (90°). C = 180 − 90 − 35 = 55. Piège : 90 est l’angle en A, pas en C." },
  { prompt: "Dans un triangle, deux angles mesurent 40° et 65°. Quel est l’angle extérieur au troisième sommet (en degrés) ?",
    options: ["115", "105", "75", "140", "180"],
    answerIndex: 1,
    explanation: "L’angle extérieur est la somme des deux autres angles : 40 + 65 = 105 (ou 180 − 75). Piège : 75 est l’angle intérieur du troisième sommet." },
  { prompt: "Combien de diagonales possède un décagone convexe ?",
    options: ["70", "20", "30", "45", "35"],
    answerIndex: 4,
    explanation: "n(n − 3) / 2 = 10 × 7 / 2 = 35. Piège : 70 (oubli du /2) ou 45 (C(10, 2), qui compte aussi les côtés)." },
  { prompt: "Quel est le plus petit angle entre les aiguilles d’une horloge à 3 h 30 (en degrés) ?",
    options: ["75", "150", "60", "105", "90"],
    answerIndex: 0,
    explanation: "À 3 h 30, la minute est à 180° et l’heure à 3,5 × 30 = 105°. Écart : 75°. Piège : placer l’aiguille des heures sur le 3 (90°) alors qu’elle a avancé." },
  { prompt: "Deux droites parallèles sont coupées par une sécante. Un angle aigu formé mesure 65°. Combien mesure un angle obtus formé (en degrés) ?",
    options: ["105", "125", "115", "155", "25"],
    answerIndex: 2,
    explanation: "Les angles aigus sont égaux (65°) et chaque angle obtus est son supplément : 180 − 65 = 115. Piège : 25 est le complément (90 − 65)." },
  { prompt: "Dans le triangle ABC, M est sur [AB] et N sur [AC], avec (MN) // (BC). On donne AM = 4, AB = 10 et BC = 15. Quelle est la longueur MN ?",
    options: ["7,5", "6", "4", "9", "10"],
    answerIndex: 1,
    explanation: "Thalès : MN / BC = AM / AB = 4/10 ⇒ MN = 15 × 0,4 = 6. Piège : utiliser AM / MB (4/6) donne 10 ; MB / AB donne 9." },
  { prompt: "Dans le triangle ABC, (MN) // (BC) avec M sur [AB], N sur [AC]. On donne AM = 3, MB = 2 et AC = 20. Quelle est la longueur AN ?",
    options: ["15", "30", "8", "12", "18"],
    answerIndex: 3,
    explanation: "AB = AM + MB = 5, donc AN / AC = AM / AB = 3/5 ⇒ AN = 12. Piège : AM / MB = 3/2 donne 30 ; MB / AB donne 8." },
  { prompt: "Dans un triangle ABC d’aire 100, une parallèle à (BC) coupe [AB] et [AC] en M et N avec AM / AB = 2/5. Quelle est l’aire du triangle AMN ?",
    options: ["16", "36", "4", "40", "20"],
    answerIndex: 0,
    explanation: "Le rapport des aires est le carré du rapport des longueurs : (2/5)² = 4/25. Aire = 100 × 4/25 = 16. Piège : 40 (rapport non élevé au carré)." },
  { prompt: "À la même heure, un arbre projette une ombre de 12 m et un bâton vertical de 2 m projette une ombre de 3 m. Quelle est la hauteur de l’arbre (en m) ?",
    options: ["9", "24", "8", "18", "6"],
    answerIndex: 2,
    explanation: "Les triangles sont semblables : hauteur / ombre = 2/3 ⇒ hauteur = 12 × 2/3 = 8. Piège : multiplier 12 × 3 / 2 = 18 (rapport inversé)." },
  { prompt: "Un trapèze a pour bases 10 et 14 et pour hauteur 5. Quelle est son aire ?",
    options: ["50", "70", "35", "120", "60"],
    answerIndex: 4,
    explanation: "A = (B + b) / 2 × h = 12 × 5 = 60. Piège : oublier le /2 (120)." },
  { prompt: "Un parallélogramme a deux côtés de 8 et 5 formant un angle de 30°. Quelle est son aire ?",
    options: ["40√3", "10", "20√3", "40", "20"],
    answerIndex: 4,
    explanation: "La hauteur sur le côté 8 vaut 5 × sin 30° = 2,5 (demi-équilatéral). Aire = 8 × 2,5 = 20. Piège : 40 (produit des côtés, valable seulement à 90°)." },
  { prompt: "Un rectangle a un périmètre de 36 et une longueur double de sa largeur. Quelle est son aire ?",
    options: ["108", "36", "72", "81", "54"],
    answerIndex: 2,
    explanation: "2(L + l) = 36 avec L = 2l ⇒ 6l = 36 ⇒ l = 6, L = 12. Aire = 72. Piège : 81 est l’aire d’un carré de périmètre 36." },
  { prompt: "Un carré est inscrit dans un cercle de rayon 5. Quelle est son aire ?",
    options: ["50", "25π", "100", "50π", "25"],
    answerIndex: 0,
    explanation: "Sa diagonale est un diamètre : d = 10 ⇒ aire = d² / 2 = 50 (ou 2R²). Piège : 100 (diagonale au carré sans /2)." },
  { prompt: "Un cercle est inscrit dans un carré de côté 12. Quelle est l’aire du cercle ?",
    options: ["24π", "72π", "12π", "36π", "144π"],
    answerIndex: 3,
    explanation: "Le diamètre du cercle est égal au côté : r = 6 ⇒ A = π × 36 = 36π. Piège : 144π (prendre r = 12)." },
  { prompt: "Un cercle est circonscrit à un carré de côté 6. Quel est le rayon du cercle ?",
    options: ["6", "3√2", "9", "3", "6√2"],
    answerIndex: 1,
    explanation: "Diagonale du carré = 6√2 = diamètre ⇒ rayon = 3√2 ≈ 4,24. Piège : 6√2 est le diamètre, pas le rayon." },
  { prompt: "Quelle est l’aire d’un hexagone régulier de côté 4 ?",
    options: ["48√3", "12√3", "24√3", "96", "16√3"],
    answerIndex: 2,
    explanation: "Il se compose de 6 triangles équilatéraux de côté 4 : 6 × (√3 / 4) × 16 = 24√3. Piège : 16√3 est l’aire de 4 triangles seulement." },
  { prompt: "Un hexagone régulier est inscrit dans un cercle de rayon 6. Quel est son périmètre ?",
    options: ["36", "30", "72", "36√3", "24"],
    answerIndex: 0,
    explanation: "Le côté de l’hexagone régulier est égal au rayon : 6. Périmètre = 6 × 6 = 36. Piège : 36√3 (confondre avec le triangle équilatéral inscrit)." },
  { prompt: "On joint les milieux des côtés d’un carré d’aire 48 pour former un nouveau carré. Quelle est l’aire de ce nouveau carré ?",
    options: ["32", "12", "24√2", "36", "24"],
    answerIndex: 4,
    explanation: "Le carré intérieur a pour côté a√2 / 2, donc une aire a² / 2 : la moitié de l’aire du carré de départ, 24. Piège : 12 (prendre le quart)." },
  { prompt: "Un cercle a une circonférence de 10π. Quelle est son aire ?",
    options: ["50π", "5π", "100π", "25π", "10π"],
    answerIndex: 3,
    explanation: "2πr = 10π ⇒ r = 5 ⇒ A = π × 25 = 25π. Piège : confondre circonférence et aire (10π)." },
  { prompt: "Un disque a un diamètre de 14. Quelle est son aire ?",
    options: ["98π", "196π", "28π", "49π", "14π"],
    answerIndex: 3,
    explanation: "r = 7 ⇒ A = π × 49 = 49π. Piège : 196π (utiliser le diamètre à la place du rayon)." },
  { prompt: "Le rayon d’un cercle augmente de 50 %. De combien augmente son aire (en pourcentage) ?",
    options: ["150 %", "125 %", "50 %", "100 %", "225 %"],
    answerIndex: 1,
    explanation: "Rayon × 1,5 ⇒ aire × 1,5² = 2,25 ⇒ hausse de 125 %. Piège : 225 % est le nouveau pourcentage, pas la hausse." },
  { prompt: "Quelle est la longueur d’un arc de 90° d’un cercle de rayon 8 ?",
    options: ["8π", "2π", "32π", "16π", "4π"],
    answerIndex: 4,
    explanation: "Un quart de la circonférence 2π × 8 = 16π, soit 4π. Piège : 16π est la circonférence entière." },
  { prompt: "Quelle est l’aire d’un secteur de 60° dans un cercle de rayon 6 ?",
    options: ["6π", "12π", "2π", "36π", "3π"],
    answerIndex: 0,
    explanation: "60° = 1/6 du disque : 36π / 6 = 6π. Piège : 36π est le disque entier." },
  { prompt: "Une roue a un diamètre de 2 m. Combien de tours fait-elle pour parcourir 628 m ? (on prendra π = 3,14)",
    options: ["314", "100", "50", "200", "628"],
    answerIndex: 1,
    explanation: "Circonférence = 3,14 × 2 = 6,28 m. Tours = 628 / 6,28 = 100. Piège : 200 (diviser par le rayon au lieu du diamètre pour la circonférence)." },
  { prompt: "Deux cercles concentriques ont pour rayons 10 et 6. Quelle est l’aire de la couronne comprise entre eux ?",
    options: ["32π", "136π", "16π", "64π", "100π"],
    answerIndex: 3,
    explanation: "π(10² − 6²) = π × 64. Piège : π(10 − 6)² = 16π est faux, on soustrait les aires, pas les rayons." },
  { prompt: "Quel est le périmètre d’un quart de disque de rayon 4 ?",
    options: ["8 + 2π", "2π", "4 + 2π", "16 + 2π", "8 + 4π"],
    answerIndex: 0,
    explanation: "Quart de circonférence = 2π × 4 / 4 = 2π, plus les deux rayons rectilignes : 8 + 2π. Piège : oublier les 2 rayons (2π)." },
  { prompt: "On retire d’un carré de côté 10 quatre quarts de disque de rayon 5 centrés sur les quatre sommets. Quelle est l’aire restante ?",
    options: ["100 − 5π", "100 − 25π / 4", "100 − 25π", "25π", "100 − 10π"],
    answerIndex: 2,
    explanation: "Quatre quarts de disque = un disque entier de rayon 5, d’aire 25π. Reste 100 − 25π ≈ 21,5. Piège : retirer un seul quart (25π / 4)." },
  { prompt: "Un rectangle de diagonale 10 est inscrit dans un cercle. Quelle est l’aire du disque ?",
    options: ["50π", "5π", "10π", "100π", "25π"],
    answerIndex: 4,
    explanation: "La diagonale d’un rectangle inscrit est un diamètre : r = 5 ⇒ A = 25π, quelles que soient les dimensions du rectangle. Piège : 100π (prendre 10 comme rayon)." },
  { prompt: "Un cercle est inscrit dans un carré de côté 4. Quelle est l’aire de la partie du carré située à l’extérieur du cercle ?",
    options: ["16π − 16", "16 − π", "16 − 2π", "4π", "16 − 4π"],
    answerIndex: 4,
    explanation: "Carré 16, disque de rayon 2 : 4π. Reste 16 − 4π ≈ 3,4. Piège : 16 − π (rayon 1)." },
  { prompt: "Quelle est la longueur de la diagonale d’un cube d’arête 4 ?",
    options: ["12", "4√2", "4√3", "16√3", "8"],
    answerIndex: 2,
    explanation: "Diagonale du cube = a√3 = 4√3 ≈ 6,9. Piège : 4√2 est la diagonale d’une face." },
  { prompt: "Un cube a un volume de 64. Quelle est son aire totale ?",
    options: ["96", "64", "128", "384", "24"],
    answerIndex: 0,
    explanation: "Arête = ∛64 = 4 ; aire totale = 6 × 4² = 96. Piège : 384 = 6 × 64 (volume à la place de l’arête au carré)." },
  { prompt: "Un pavé droit mesure 3 × 4 × 12. Quelle est la longueur de sa diagonale ?",
    options: ["17", "12", "15", "13", "19"],
    answerIndex: 3,
    explanation: "√(9 + 16 + 144) = √169 = 13. Piège : additionner 3 + 4 + 12 = 19." },
  { prompt: "Quel est le volume d’un cylindre de rayon 3 et de hauteur 5 ?",
    options: ["135π", "90π", "45π", "15π", "30π"],
    answerIndex: 2,
    explanation: "V = π r² h = π × 9 × 5 = 45π. Piège : 30π est l’aire latérale 2πrh." },
  { prompt: "Quel est le volume d’un cône de rayon 3 et de hauteur 4 ?",
    options: ["12π", "15π", "36π", "48π", "4π"],
    answerIndex: 0,
    explanation: "V = (1/3) π r² h = π × 9 × 4 / 3 = 12π. Piège : 36π (oubli du tiers) ; 15π est la surface latérale (π × 3 × 5)." },
  { prompt: "Quel est le volume d’une sphère de rayon 3 ?",
    options: ["108π", "12π", "27π", "324π", "36π"],
    answerIndex: 4,
    explanation: "V = (4/3) π r³ = (4/3) × 27 × π = 36π. Piège : 108π (oubli du /3) ; 12π (r² au lieu de r³)." },
  { prompt: "On triple toutes les arêtes d’un pavé droit. Par combien son volume est-il multiplié ?",
    options: ["9", "27", "3", "81", "12"],
    answerIndex: 1,
    explanation: "Longueurs × 3 ⇒ aires × 9 ⇒ volumes × 3³ = 27. Piège : 9 (le facteur des aires)." },
  { prompt: "Un cube de 5 cm d’arête est peint, puis découpé en 125 petits cubes de 1 cm. Combien ont exactement une face peinte ?",
    options: ["60", "27", "98", "54", "36"],
    answerIndex: 3,
    explanation: "Sur chaque face : (5 − 2)² = 9 cubes, donc 6 × 9 = 54. Piège : 36 est le nombre de cubes à 2 faces (12 × 3) ; 27 est l’intérieur." },
  { prompt: "Une piscine de 10 m × 5 m × 2 m est remplie aux 3/4. Combien de litres d’eau contient-elle ?",
    options: ["37 500 L", "100 000 L", "750 000 L", "75 000 L", "7 500 L"],
    answerIndex: 3,
    explanation: "Hauteur d’eau 1,5 m ⇒ 10 × 5 × 1,5 = 75 m³ = 75 000 L (1 m³ = 1 000 L). Piège : se tromper de zéros dans la conversion." },
  { prompt: "Un cylindre voit sa hauteur doublée et son rayon divisé par 2. Que devient son volume ?",
    options: ["× 2", "× 1/2", "× 1/4", "× 1", "× 4"],
    answerIndex: 1,
    explanation: "V = π r² h : (1/2)² × 2 = 1/2. Piège : oublier que le rayon est au carré (× 1)." },
  { prompt: "Une pyramide a une base carrée de côté 6 et une hauteur de 5. Quel est son volume ?",
    options: ["90", "180", "30", "100", "60"],
    answerIndex: 4,
    explanation: "V = B × h / 3 = 36 × 5 / 3 = 60. Piège : 180 (oubli du tiers)." },
  { prompt: "La diagonale d’une face d’un cube mesure 6√2. Quel est le volume du cube ?",
    options: ["216", "1 296", "36", "432", "72"],
    answerIndex: 0,
    explanation: "Diagonale de face = a√2 = 6√2 ⇒ a = 6 ⇒ V = 6³ = 216. Piège : 36 est l’aire d’une face." },
  { prompt: "Un réservoir de 5 000 L est reproduit en maquette à l’échelle 1/10. Quelle est la contenance de la maquette ?",
    options: ["500 L", "5 L", "0,5 L", "50 L", "1 000 L"],
    answerIndex: 1,
    explanation: "Longueurs / 10 ⇒ volumes / 10³ = / 1 000 : 5 000 / 1 000 = 5 L. Piège : diviser seulement par 10 (500 L) ou par 100 (50 L)." }
];

export const TM_CALC_PROBLEMES_QCM = [
  { prompt: "Un automobiliste fait l’aller à 60 km/h et le retour à 40 km/h sur le même trajet. Quelle est sa vitesse moyenne sur l’aller-retour (en km/h) ?",
    options: ["55", "45", "50", "48", "52"],
    answerIndex: 3,
    explanation: "Moyenne harmonique : 2 × 60 × 40 / (60 + 40) = 4 800 / 100 = 48. Piège : la moyenne arithmétique (50) est fausse car il passe plus de temps à la vitesse lente." },
  { prompt: "Deux trains partent à la même heure de deux villes distantes de 300 km et roulent l’un vers l’autre, à 70 km/h et 80 km/h. Au bout de combien de temps se croisent-ils ?",
    options: ["2 h", "4 h", "3 h", "1 h 30", "2 h 30"],
    answerIndex: 0,
    explanation: "Vitesses additionnées : 150 km/h. Temps = 300 / 150 = 2 h. Piège : utiliser une seule vitesse (4 h ou 3 h 34)." },
  { prompt: "A part à 9 h à 60 km/h. B part de la même ville à 10 h, sur la même route, à 90 km/h. À quelle heure B rattrape-t-il A ?",
    options: ["11 h 30", "13 h", "12 h", "12 h 30", "11 h"],
    answerIndex: 2,
    explanation: "À 10 h, A a 60 km d’avance. B gagne 30 km par heure ⇒ 60 / 30 = 2 h après 10 h, soit 12 h. Piège : compter 2 h à partir de 9 h." },
  { prompt: "Un train de 200 m traverse un tunnel de 400 m à la vitesse constante de 20 m/s. Combien de temps dure la traversée complète ?",
    options: ["20 s", "40 s", "10 s", "60 s", "30 s"],
    answerIndex: 4,
    explanation: "Distance = 200 + 400 = 600 m ⇒ 600 / 20 = 30 s. Piège : oublier la longueur du train (20 s)." },
  { prompt: "Convertir 72 km/h en m/s.",
    options: ["72 m/s", "12 m/s", "15 m/s", "25 m/s", "20 m/s"],
    answerIndex: 4,
    explanation: "On divise par 3,6 : 72 / 3,6 = 20. Piège : multiplier par 3,6 (259) ou diviser par 6 (12)." },
  { prompt: "Un bateau navigue à 12 km/h en eau calme et le courant est de 3 km/h. Il parcourt 45 km en descendant le courant, puis revient en remontant les mêmes 45 km. Quelle est la durée totale du trajet ?",
    options: ["9 h", "7 h 30", "8 h", "6 h", "7 h"],
    answerIndex: 2,
    explanation: "Descente : 45 / 15 = 3 h. Remontée : 45 / 9 = 5 h. Total 8 h. Piège : à 12 km/h sans courant on trouverait 7 h 30 : le courant ne se compense pas." },
  { prompt: "Un TGV roule 1,5 fois plus vite qu’un train régional. Le train régional met 3 h pour un trajet. Combien de temps met le TGV ?",
    options: ["2 h", "1 h 30", "4 h 30", "2 h 15", "1 h"],
    answerIndex: 0,
    explanation: "Vitesse × 1,5 ⇒ temps ÷ 1,5 : 3 / 1,5 = 2 h. Piège : 4 h 30 (multiplier au lieu de diviser)." },
  { prompt: "Une voiture roule à 90 km/h. Combien de temps lui faut-il pour parcourir 150 km ?",
    options: ["1 h 30", "1 h 45", "1 h 24", "1 h 40", "1 h 50"],
    answerIndex: 3,
    explanation: "150 / 90 = 5/3 h = 1 h 40. Piège : écrire 1,66 h et lire « 1 h 66 »." },
  { prompt: "Un automobiliste parcourt 100 km à 50 km/h puis 100 km à 100 km/h. Quelle est sa vitesse moyenne sur les 200 km (en km/h) ?",
    options: ["80", "66,7", "60", "70", "75"],
    answerIndex: 1,
    explanation: "Temps : 2 h + 1 h = 3 h pour 200 km ⇒ 200 / 3 ≈ 66,7. Piège : la moyenne arithmétique (75) n’est valable que pour des durées égales." },
  { prompt: "Deux marcheurs partent du même point en même temps, l’un vers l’est à 6 km/h, l’autre vers le nord à 8 km/h. À quelle distance sont-ils l’un de l’autre après 3 h (en km) ?",
    options: ["48", "42", "30", "14", "24"],
    answerIndex: 2,
    explanation: "Distances 18 km et 24 km perpendiculaires ⇒ √(18² + 24²) = 30 (triplet 3-4-5 × 6). Piège : additionner (42)." },
  { prompt: "Une montre avance de 2 minutes par heure. Elle est réglée à l’heure exacte à 8 h. Quelle heure indique-t-elle quand il est réellement 18 h ?",
    options: ["18 h 20", "18 h 12", "18 h 30", "18 h 10", "18 h 02"],
    answerIndex: 0,
    explanation: "10 h écoulées × 2 min = 20 min d’avance, donc elle indique 18 h 20. Piège : confondre l’heure lue et le temps réel (on ne divise pas ici)." },
  { prompt: "A fait un travail seul en 6 h, B seul en 3 h. En combien de temps le font-ils ensemble ?",
    options: ["3 h", "4 h 30", "1 h 30", "9 h", "2 h"],
    answerIndex: 4,
    explanation: "1/6 + 1/3 = 1/2 du travail par heure ⇒ 2 h. Piège : moyenne des temps (4 h 30) ou somme (9 h)." },
  { prompt: "Un robinet remplit un bassin en 4 h. Une fuite le vide en 12 h. Combien de temps faut-il pour remplir le bassin avec la fuite ?",
    options: ["5 h", "6 h", "3 h", "16 h", "8 h"],
    answerIndex: 1,
    explanation: "1/4 − 1/12 = 2/12 = 1/6 par heure ⇒ 6 h. Piège : soustraire les temps (8 h) ou les additionner (16 h)." },
  { prompt: "5 ouvriers construisent un mur en 12 jours. Combien de jours faut-il à 3 ouvriers au même rythme ?",
    options: ["36 jours", "25 jours", "7,2 jours", "20 jours", "15 jours"],
    answerIndex: 3,
    explanation: "5 × 12 = 60 jours-ouvriers ⇒ 60 / 3 = 20 jours. Piège : proportionnalité directe (7,2 j) alors que moins d’ouvriers = plus de temps." },
  { prompt: "Deux imprimantes impriment 30 et 20 pages par minute. Combien de minutes faut-il pour imprimer 600 pages avec les deux ?",
    options: ["15 min", "25 min", "20 min", "12 min", "10 min"],
    answerIndex: 3,
    explanation: "Débit cumulé 50 pages/min ⇒ 600 / 50 = 12 min. Piège : prendre la moyenne des débits (25 → 24 min) ou un seul débit." },
  { prompt: "A et B font ensemble un travail en 2 h. A seul le ferait en 6 h. Combien de temps faudrait-il à B seul ?",
    options: ["4 h 30", "3 h", "2 h", "4 h", "12 h"],
    answerIndex: 1,
    explanation: "1/B = 1/2 − 1/6 = 1/3 ⇒ B seul : 3 h. Piège : soustraire les temps (4 h) ou lire « B est plus lent » à tort." },
  { prompt: "Pour peindre 3 murs identiques, 4 peintres mettent 6 h. Combien de temps faut-il à 10 peintres pour peindre 5 de ces murs ?",
    options: ["3 h", "2 h", "6 h", "5 h", "4 h"],
    answerIndex: 4,
    explanation: "Un mur = 24 / 3 = 8 heures-peintre ; 5 murs = 40 heures-peintre ; 40 / 10 = 4 h. Piège : changer un seul des deux facteurs (murs ou peintres)." },
  { prompt: "Un prix augmente de 20 % puis diminue de 20 %. Quelle est l’évolution globale ?",
    options: ["−4 %", "+4 %", "−5 %", "0 %", "−2 %"],
    answerIndex: 0,
    explanation: "1,2 × 0,8 = 0,96 ⇒ − 4 %. Piège : additionner les taux (0 %)." },
  { prompt: "Un prix augmente de 10 % puis de 20 %. Quelle est la hausse totale ?",
    options: ["+31 %", "+35 %", "+32 %", "+33 %", "+30 %"],
    answerIndex: 2,
    explanation: "1,1 × 1,2 = 1,32 ⇒ + 32 %. Piège : 30 % (somme des taux)." },
  { prompt: "Après une baisse de 25 %, un article coûte 60 €. Quel était son prix initial ?",
    options: ["85 €", "80 €", "72 €", "75 €", "90 €"],
    answerIndex: 1,
    explanation: "0,75 × P = 60 ⇒ P = 80. Piège : ajouter 25 % à 60 (75)." },
  { prompt: "Après une hausse de 25 %, de quel pourcentage faut-il baisser le nouveau prix pour revenir au prix initial ?",
    options: ["25 %", "15 %", "33 %", "20 %", "30 %"],
    answerIndex: 3,
    explanation: "Le coefficient 1,25 se compense par 1 / 1,25 = 0,8 ⇒ baisse de 20 %. Piège : 25 % (réciproque naïve)." },
  { prompt: "Un prix passe de 80 € à 92 €. Quelle est la hausse en pourcentage ?",
    options: ["15 %", "20 %", "18 %", "10 %", "12 %"],
    answerIndex: 0,
    explanation: "12 / 80 = 0,15 ⇒ 15 %. Piège : diviser par la nouvelle valeur (13 %)." },
  { prompt: "Quel est le résultat de : 40 % de 25 % de 800 ?",
    options: ["40", "200", "80", "120", "8"],
    answerIndex: 2,
    explanation: "0,4 × 0,25 × 800 = 0,1 × 800 = 80. Piège : additionner les pourcentages (65 %) ou s’arrêter à 25 % de 800 (200)." },
  { prompt: "Dans une classe, 60 % des élèves sont des filles. 50 % des filles et 20 % des garçons portent des lunettes. Quel pourcentage des élèves porte des lunettes ?",
    options: ["36 %", "40 %", "35 %", "70 %", "38 %"],
    answerIndex: 4,
    explanation: "Base 100 : 60 filles dont 30 à lunettes, 40 garçons dont 8 à lunettes ⇒ 38 %. Piège : moyenne simple de 50 % et 20 % (35 %)." },
  { prompt: "Dans la même classe (60 % de filles ; 50 % des filles et 20 % des garçons portent des lunettes), quelle part des élèves à lunettes sont des filles ?",
    options: ["70 %", "60 %", "83 %", "75 %", "79 %"],
    answerIndex: 4,
    explanation: "Base 100 : 30 filles à lunettes sur 38 élèves à lunettes ⇒ 30 / 38 ≈ 79 %. Piège : répondre 60 % (part des filles dans la classe) ou 30 %." },
  { prompt: "70 % des membres d’un club pratiquent le football, 50 % le tennis et 20 % aucun des deux. Quel pourcentage pratique les deux sports ?",
    options: ["60 %", "50 %", "40 %", "20 %", "30 %"],
    answerIndex: 2,
    explanation: "80 % pratiquent au moins un sport ⇒ intersection = 70 + 50 − 80 = 40 %. Piège : 20 % (confondre avec « aucun »)." },
  { prompt: "On place 1 000 € à 10 % par an à intérêts composés. Quel est le capital au bout de 2 ans ?",
    options: ["1 210 €", "1 220 €", "1 331 €", "1 200 €", "1 100 €"],
    answerIndex: 0,
    explanation: "1 000 × 1,1² = 1 210. Piège : 1 200 (intérêts simples) ; 1 331 correspond à 3 ans." },
  { prompt: "On place 2 000 € à 4 % par an à intérêts simples pendant 3 ans. Quel est le montant des intérêts ?",
    options: ["249,73 €", "260 €", "80 €", "240 €", "720 €"],
    answerIndex: 3,
    explanation: "Intérêts simples : 2 000 × 0,04 × 3 = 240 €. Piège : 249,73 € serait le résultat avec intérêts composés." },
  { prompt: "On mélange 3 L d’une solution à 10 % et 2 L d’une solution à 20 %. Quelle est la concentration du mélange ?",
    options: ["15 %", "14 %", "12 %", "30 %", "16 %"],
    answerIndex: 1,
    explanation: "Quantité pure : 0,3 + 0,4 = 0,7 L pour 5 L ⇒ 14 %. Piège : moyenne simple (15 %) sans tenir compte des volumes." },
  { prompt: "Une classe A de 20 élèves a une moyenne de 12 et une classe B de 30 élèves une moyenne de 14. Quelle est la moyenne des deux classes réunies ?",
    options: ["13,5", "14", "13,2", "12,8", "13"],
    answerIndex: 2,
    explanation: "(20 × 12 + 30 × 14) / 50 = 660 / 50 = 13,2. Piège : (12 + 14) / 2 = 13 sans pondérer." },
  { prompt: "Dans un groupe, la moyenne générale est 14 ; les hommes ont 12 de moyenne et les femmes 18. Quelle est la proportion de femmes dans le groupe ?",
    options: ["1/3", "2/3", "3/4", "1/2", "1/4"],
    answerIndex: 0,
    explanation: "Barycentre : part des femmes = (14 − 12) / (18 − 12) = 2/6 = 1/3. Piège : inverser les écarts (2/3)." },
  { prompt: "La moyenne de 4 notes est 12. Quelle note supplémentaire faut-il obtenir pour que la moyenne des 5 notes soit 13 ?",
    options: ["16", "13", "15", "18", "17"],
    answerIndex: 4,
    explanation: "Somme nécessaire 5 × 13 = 65 ; somme actuelle 4 × 12 = 48 ⇒ 65 − 48 = 17. Piège : répondre 13." },
  { prompt: "On dispose de 6 L d’une solution à 30 %. Combien de litres d’eau faut-il ajouter pour obtenir une solution à 20 % ?",
    options: ["2 L", "3 L", "1,5 L", "5 L", "4 L"],
    answerIndex: 1,
    explanation: "Quantité pure 1,8 L ⇒ volume final 1,8 / 0,2 = 9 L ⇒ on ajoute 9 − 6 = 3 L. Piège : répondre 9 L (volume final)." },
  { prompt: "Le taux de chômage passe de 8 % à 10 %. De quel pourcentage a-t-il augmenté (en relatif) ?",
    options: ["125 %", "80 %", "2 %", "25 %", "20 %"],
    answerIndex: 3,
    explanation: "Hausse de 2 points ; relatif : 2 / 8 = 25 %. Piège : 2 % (points) ou 20 % (diviser par la nouvelle valeur)." },
  { prompt: "Un nombre augmenté de 20 % de lui-même donne 54. Quel est ce nombre ?",
    options: ["43,2", "50", "48", "45", "40"],
    answerIndex: 3,
    explanation: "1,2 × N = 54 ⇒ N = 45. Piège : retirer 20 % de 54 (43,2)." },
  { prompt: "Un article soldé à − 30 % coûte 49 €. Quel était son prix avant soldes ?",
    options: ["75 €", "70 €", "63,7 €", "79 €", "84 €"],
    answerIndex: 1,
    explanation: "0,7 × P = 49 ⇒ P = 70. Piège : ajouter 30 % à 49 (63,7 €)." },
  { prompt: "Combien d’anagrammes distincts peut-on former avec les lettres du mot MAMAN ?",
    options: ["24", "15", "120", "60", "30"],
    answerIndex: 4,
    explanation: "5! / (2! × 2!) = 120 / 4 = 30 (deux M, deux A). Piège : 120 (oublier les lettres répétées)." },
  { prompt: "Un comité de 3 personnes doit être choisi parmi 8 candidats (sans rôles distincts). Combien de comités sont possibles ?",
    options: ["56", "336", "112", "24", "28"],
    answerIndex: 0,
    explanation: "C(8, 3) = 8 × 7 × 6 / 6 = 56. Piège : 336 (arrangements, ordre pris en compte)." },
  { prompt: "On lance deux dés équilibrés à six faces. Quelle est la probabilité que la somme soit égale à 7 ?",
    options: ["1/9", "7/36", "1/6", "1/3", "1/12"],
    answerIndex: 2,
    explanation: "6 couples sur 36 donnent 7 : 6/36 = 1/6. Piège : compter 11 sommes équiprobables (1/11)." },
  { prompt: "On lance trois pièces équilibrées. Quelle est la probabilité d’obtenir au moins une fois « face » ?",
    options: ["3/8", "7/8", "1/2", "1/8", "3/4"],
    answerIndex: 1,
    explanation: "1 − P(aucune face) = 1 − (1/2)³ = 7/8. Piège : 3/8 (cas « exactement une face »)." },
  { prompt: "Une urne contient 4 boules rouges et 6 noires. On tire 2 boules successivement, sans remise. Quelle est la probabilité que les deux soient rouges ?",
    options: ["2/5", "4/25", "1/5", "2/15", "4/15"],
    answerIndex: 3,
    explanation: "4/10 × 3/9 = 12/90 = 2/15. Piège : garder 10 au dénominateur (4/25)." },
  { prompt: "Une urne contient 4 boules rouges et 6 noires. On tire 2 boules successivement, avec remise. Quelle est la probabilité que les deux soient rouges ?",
    options: ["4/25", "16/25", "2/15", "2/5", "1/5"],
    answerIndex: 0,
    explanation: "Tirages indépendants : 4/10 × 4/10 = 16/100 = 4/25. Piège : 2/15 correspond au tirage sans remise." },
  { prompt: "Douze personnes se serrent toutes la main une fois chacune. Combien y a-t-il de poignées de main ?",
    options: ["78", "132", "66", "144", "24"],
    answerIndex: 2,
    explanation: "C(12, 2) = 12 × 11 / 2 = 66. Piège : 132 (compter chaque poignée deux fois)." },
  { prompt: "Combien de matchs sont joués dans un tournoi à élimination directe de 16 équipes ?",
    options: ["16", "8", "30", "31", "15"],
    answerIndex: 4,
    explanation: "Chaque match élimine une équipe et il faut en éliminer 15 : 15 matchs. Piège : 8 est le nombre de matchs du seul premier tour." },
  { prompt: "Combien d’entiers entre 100 et 999 ont trois chiffres tous différents ?",
    options: ["720", "810", "504", "729", "648"],
    answerIndex: 4,
    explanation: "9 choix pour les centaines (1-9), 9 pour les dizaines (0-9 sauf une), 8 pour les unités : 648. Piège : 720 (autoriser le 0 en tête)." },
  { prompt: "De combien de façons 5 personnes peuvent-elles s’asseoir autour d’une table ronde (seules les positions relatives comptent) ?",
    options: ["120", "5", "24", "60", "12"],
    answerIndex: 2,
    explanation: "(5 − 1)! = 24 : on fixe une personne. Piège : 120 (disposition en ligne)." },
  { prompt: "On lance deux dés. Sachant que la somme est supérieure ou égale à 10, quelle est la probabilité d’avoir obtenu un double ?",
    options: ["1/3", "1/4", "1/2", "2/3", "1/6"],
    answerIndex: 0,
    explanation: "Univers réduit : (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) = 6 issues, dont 2 doubles : 2/6 = 1/3. Piège : 1/6 (probabilité de base d’un double)." },
  { prompt: "Une famille a deux enfants dont au moins un garçon. Quelle est la probabilité que les deux soient des garçons ?",
    options: ["1/2", "1/4", "2/3", "1/3", "3/4"],
    answerIndex: 3,
    explanation: "Cas possibles : GG, GF, FG (FF exclu) ; un seul est favorable : 1/3. Piège : 1/2 (oublier que l’ordre FG / GF fait deux cas)." },
  { prompt: "Combien le nombre 72 a-t-il de diviseurs positifs ?",
    options: ["24", "12", "6", "8", "9"],
    answerIndex: 1,
    explanation: "72 = 2³ × 3² ⇒ (3 + 1)(2 + 1) = 12. Piège : 6 (additionner les exposants) ou oublier 1 et 72." },
  { prompt: "Un père a 3 fois l’âge de son fils. Dans 12 ans, il aura 2 fois son âge. Quel est l’âge actuel du fils (en années) ?",
    options: ["24", "6", "12", "15", "10"],
    answerIndex: 2,
    explanation: "3x + 12 = 2(x + 12) ⇒ x = 12. Piège : répondre 36 (l’âge du père) alors que la question porte sur le fils." },
  { prompt: "Hector a trois fois l’âge de Fanny. À eux deux, ils ont 48 ans. Quel est l’âge de Fanny (en années) ?",
    options: ["12", "24", "36", "16", "9"],
    answerIndex: 0,
    explanation: "4 × Fanny = 48 ⇒ Fanny a 12 ans (Hector 36). Piège : donner l’âge d’Hector (36) : relire la question avant de répondre." },
  { prompt: "Nous sommes un mardi 3 mars. Quel jour de la semaine sera le 3 avril de la même année ?",
    options: ["samedi", "jeudi", "dimanche", "mardi", "vendredi"],
    answerIndex: 4,
    explanation: "Mars compte 31 jours : 31 = 4 × 7 + 3 ⇒ on avance de 3 jours : mardi + 3 = vendredi. Piège : prendre 30 jours (jeudi)." },
  { prompt: "Combien de jours s’écoulent entre le 15 avril et le 15 juin de la même année ?",
    options: ["65 jours", "61 jours", "59 jours", "60 jours", "62 jours"],
    answerIndex: 1,
    explanation: "Avril (30 jours) puis mai (31 jours) : 30 + 31 = 61. Piège : compter 31 jours pour avril." },
  { prompt: "Le 1er janvier 2019 était un mardi. Quel jour sera le 1er janvier 2021 ? (2020 est bissextile)",
    options: ["dimanche", "samedi", "mercredi", "vendredi", "jeudi"],
    answerIndex: 3,
    explanation: "2019 compte 365 j (+ 1) et 2020 compte 366 j (+ 2) : décalage de 3 jours, mardi + 3 = vendredi. Piège : oublier le 29 février 2020 (décalage de 2 jours au lieu de 3)." },
  { prompt: "Quelle est la somme des entiers de 1 à 30 ?",
    options: ["900", "930", "495", "465", "435"],
    answerIndex: 3,
    explanation: "n(n + 1) / 2 = 30 × 31 / 2 = 465. Piège : 930 (oubli du /2)." },
  { prompt: "Dans une suite arithmétique de premier terme 5 et de raison 3, quelle est la valeur du 20e terme ?",
    options: ["60", "62", "57", "63", "65"],
    answerIndex: 1,
    explanation: "u₂₀ = 5 + 19 × 3 = 62 : il y a 19 pas entre le 1er et le 20e terme. Piège : 65 (20 pas)." },
  { prompt: "Quelle est la somme des six premiers termes de la suite géométrique 3, 6, 12, … ?",
    options: ["96", "378", "93", "192", "189"],
    answerIndex: 4,
    explanation: "u₁ (qⁿ − 1) / (q − 1) = 3 × (64 − 1) / 1 = 189. Piège : 192 est le 7e terme (il faut retirer u₁ = 3) ; 378 est le double de la bonne somme." },
  { prompt: "Deux bus passent à un arrêt toutes les 12 min et toutes les 18 min. Ils passent ensemble à 8 h. À quelle heure passeront-ils de nouveau ensemble ?",
    options: ["8 h 36", "9 h", "8 h 24", "8 h 42", "8 h 30"],
    answerIndex: 0,
    explanation: "PPCM(12, 18) = 36 ⇒ 8 h 36. Piège : PGCD (6 min) ou produit 12 × 18 = 216." },
  { prompt: "On veut carreler une salle de 360 cm × 240 cm avec des carreaux carrés identiques, sans découpe, les plus grands possible. Quel est le côté d’un carreau ?",
    options: ["100 cm", "240 cm", "120 cm", "80 cm", "60 cm"],
    answerIndex: 2,
    explanation: "PGCD(360, 240) = 120. Piège : 60 est un diviseur commun mais pas le plus grand." },
  { prompt: "Quel est le chiffre des unités de 7 puissance 2026 ?",
    options: ["3", "9", "1", "7", "8"],
    answerIndex: 1,
    explanation: "Les unités de 7ⁿ cyclent : 7, 9, 3, 1. 2026 = 4 × 506 + 2 ⇒ 2e valeur du cycle : 9. Piège : un reste de 0 correspondrait à la 4e valeur du cycle ; ici le reste vaut 2." }
];

export const TM_CM_QCM = [
  { prompt: "Une pomme et une poire ont chacune un prix fixe (en centimes d’euro). Quel est le prix d’une pomme ?<br><br>(1) 3 pommes et 2 poires coûtent 5 €.<br><br>(2) 6 pommes et 4 poires coûtent 10 €.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "La seconde équation est le double de la première : elles sont proportionnelles et donnent la même information. Il reste deux inconnues pour une seule relation (ex. pomme 1 € / poire 1 € ou pomme 0,50 € / poire 1,75 €). Piège : compter 2 équations pour 2 inconnues sans vérifier qu’elles ne sont pas proportionnelles." },
  { prompt: "Paul dépense exactement toute sa somme pour acheter des livres tous au même prix. Combien de livres achète-t-il ?<br><br>(1) Avec 40 € de plus, il aurait pu acheter exactement 4 livres de plus en dépensant tout.<br><br>(2) Avec le double de sa somme, il aurait pu acheter exactement 6 livres de plus en dépensant tout.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "(1) donne 4 p = 40, donc le prix p = 10 € mais pas le nombre n de livres. (2) : doubler la somme revient à acheter n livres de plus, donc n = 6, suffisant. Piège : « argent × k ⇒ + n articles » donne directement le nombre initial (k − 1) × N = n, sans connaître le prix." },
  { prompt: "Dans un groupe, les hommes ont en moyenne 40 ans et les femmes 30 ans. Quel est l’âge moyen de l’ensemble du groupe ?<br><br>(1) Il y a trois fois plus d’hommes que de femmes.<br><br>(2) Le groupe compte 20 personnes.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "(1) fixe la proportion 3/4 d’hommes, donc la moyenne pondérée vaut (3 × 40 + 30) / 4 = 37,5 : suffisant. (2) ne donne que l’effectif total, pas la répartition (10 H + 10 F ou 15 H + 5 F donnent des moyennes différentes). Piège : croire que l’effectif total suffit à pondérer." },
  { prompt: "Dans une classe, la moyenne générale à un contrôle est de 12. Quelle est la moyenne des filles ?<br><br>(1) La moyenne des garçons est de 10.<br><br>(2) Il y a 12 garçons dans la classe.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "Avec (1) et (2) ensemble, la moyenne des filles vaut 12 + 24 / f : elle dépend du nombre de filles, qu’on ne connaît pas. Chaque condition seule laisse aussi f inconnu. Piège : moyenne avec un groupe d’effectif inconnu, impossible de pondérer." },
  { prompt: "N est un nombre entier à trois chiffres. Quelle est la valeur de N ?<br><br>(1) La somme de ses chiffres est 21.<br><br>(2) N est divisible par 25.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) : plusieurs nombres (489, 579, 966…). (2) : de nombreux multiples de 25. Ensemble : N finit par 00, 25, 50 ou 75 ; seule la fin 75 donne une somme de chiffres possible (a + 7 + 5 = 21 ⇒ a = 9), soit N = 975. Piège : ne pas explorer les 4 terminaisons de (2)." },
  { prompt: "x et y sont deux entiers. Le produit xy est-il pair ?<br><br>(1) x est impair.<br><br>(2) x + y est impair.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "Si x + y est impair, l’un des deux est pair, donc le produit xy est pair : la réponse est un « oui » certain, suffisant. Si x est impair seulement, y peut être pair (produit pair) ou impair (produit impair). Piège : « x impair » ne dit rien sur y." },
  { prompt: "n est un entier strictement positif. n est-il divisible par 21 ?<br><br>(1) n est divisible par 3.<br><br>(2) n est divisible par 14.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) seul : n = 3 n’est pas divisible par 21. (2) seul : n = 14 non plus. Ensemble : n est divisible par 2, 7 et 3, donc par 42 et par 21. Piège : multiplier 3 × 14 = 42 sans voir que 42 est déjà multiple de 21." },
  { prompt: "n est un entier strictement positif. n est-il divisible par 3 ?<br><br>(1) n est divisible par 9.<br><br>(2) n est pair.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "Un multiple de 9 est un multiple de 3 : (1) suffit. (2) ne donne que la parité (4 est pair mais pas multiple de 3 ; 6 l’est). Piège : chercher une information de plus alors que 9 = 3 × 3 suffit déjà." },
  { prompt: "p est un nombre premier. Quelle est la valeur de p ?<br><br>(1) p est inférieur à 100.<br><br>(2) p + 1 est aussi un nombre premier.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "Deux entiers consécutifs ne peuvent être premiers que s’ils valent 2 et 3, car l’un des deux est pair et le seul premier pair est 2 : p = 2. (1) laisse 25 candidats (2, 3, 5, 7…, 97). Piège : oublier que 2 est premier et que la parité force le cas." },
  { prompt: "x et y sont deux entiers strictement supérieurs à 1. Quelle est la valeur de x + y ?<br><br>(1) xy = 35.<br><br>(2) x < y.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "(1) : 35 = 5 × 7 avec des facteurs > 1 ; que (x, y) soit (5, 7) ou (7, 5), la somme vaut 12 : suffisant. (2) seul n’apporte rien. Piège : croire qu’il faut savoir lequel est le plus grand alors que la somme est symétrique." },
  { prompt: "x et y sont deux entiers strictement positifs. Quelle est la valeur de x ?<br><br>(1) x − y = 1.<br><br>(2) x² − y² = 17.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "(x − y)(x + y) = 17 avec 17 premier et x + y > x − y ≥ 1 : x − y = 1 et x + y = 17, donc x = 9 (et y = 8). (x − y = 1) seul laisse x libre (2, 3, 4…). Piège : ne pas reconnaître l’identité remarquable et la factorisation d’un nombre premier." },
  { prompt: "x et y sont deux nombres entiers relatifs. A-t-on x < y ?<br><br>(1) x² < y².<br><br>(2) x > 0.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "x² < y² signifie |x| < |y|, sans donner le signe. Avec x > 0 : y peut valoir 5 (x < y vrai pour x = 2) ou −5 (x < y faux). Piège : lever le carré en conservant le sens de l’inégalité, ce qui n’est valable que pour des nombres positifs." },
  { prompt: "Léa a le double de l’âge de Tom. Quel est l’âge de Tom ?<br><br>(1) Dans 10 ans, Léa aura 1,5 fois l’âge de Tom.<br><br>(2) La somme de leurs âges est 30 ans.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 3,
    fixedOrder: true,
    explanation: "L’énoncé donne L = 2T. (1) : 2T + 10 = 1,5 (T + 10) ⇒ T = 10. (2) : T + 2T = 30 ⇒ T = 10. Chaque condition donne une seconde équation indépendante de la première. Piège : oublier l’information implicite de l’énoncé (L = 2T) qui fournit déjà une équation." },
  { prompt: "Un groupe de 30 personnes est composé d’hommes et de femmes. Combien y a-t-il de femmes ?<br><br>(1) Il y a 4 hommes de plus que de femmes.<br><br>(2) Le nombre de femmes est impair.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "L’énoncé donne h + f = 30. (1) ajoute h = f + 4 ⇒ 2f + 4 = 30 ⇒ f = 13 : suffisant. (2) laisse f ∈ {1, 3, 5, …, 29}. Piège : ne pas utiliser le total donné dans l’énoncé comme première équation." },
  { prompt: "N est un nombre entier à deux chiffres. Quelle est la valeur de N ?<br><br>(1) La somme de ses chiffres est 9.<br><br>(2) N est divisible par 9.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "Un nombre est divisible par 9 si la somme de ses chiffres l’est : (2) est donc déjà contenue dans (1). Les deux donnent les mêmes candidats (18, 27, 36, 45, 54, 63, 72, 81, 90). Piège : croire qu’une deuxième condition « différente en apparence » apporte une information nouvelle." },
  { prompt: "Un cycliste effectue un aller-retour sur le même trajet, chaque sens à vitesse constante. Quelle est sa vitesse moyenne sur l’ensemble du parcours ?<br><br>(1) À l’aller, il roule à 60 km/h.<br><br>(2) Au retour, il roule à 40 km/h.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "Il faut les deux vitesses : 2 × 60 × 40 / (60 + 40) = 48 km/h. La distance n’est pas nécessaire, elle s’élimine. Piège : calculer (60 + 40) / 2 = 50 (moyenne arithmétique) ou penser que la distance manque." },
  { prompt: "Anna et Bruno travaillent ensemble sur une tâche. Combien de temps faudrait-il à Anna pour la faire seule ?<br><br>(1) Ensemble, ils la font en 4 heures.<br><br>(2) Bruno seul la ferait en 12 heures.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) seul : 1/A + 1/B = 1/4 a plusieurs solutions (A = 6, B = 12 ou A = 8, B = 8…). (2) seul : rien sur Anna. Ensemble : 1/A = 1/4 − 1/12 = 1/6 ⇒ A = 6 h. Piège : soustraire les temps (4 − 12) au lieu des rendements." },
  { prompt: "x, y et z sont trois entiers. La somme x + y + z est-elle paire ?<br><br>(1) Le produit xyz est impair.<br><br>(2) x + y est pair.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "(1) : un produit impair impose que x, y et z soient tous impairs, donc leur somme est impaire : la réponse est « non » à coup sûr, ce qui est suffisant. (2) : la parité de z reste libre. Piège : croire qu’on ne peut conclure que si la réponse est « oui » ; un « non » certain est une réponse." },
  { prompt: "Marc est-il plus âgé que Paul ?<br><br>(1) Marc est l’oncle de Paul.<br><br>(2) Marc est le frère de la mère de Paul.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "Être l’oncle (même maternel) de quelqu’un ne dit rien sur l’âge : un oncle peut être plus jeune que son neveu (grande fratrie, grand écart d’âge). (2) précise seulement le côté maternel, donc ajoute la même absence d’information. Piège : supposer qu’un oncle est plus âgé, hypothèse non donnée dans l’énoncé." },
  { prompt: "Un club de 90 membres propose football et tennis ; chaque membre pratique au moins l’un des deux sports. Combien de membres pratiquent les deux ?<br><br>(1) 60 membres jouent au football.<br><br>(2) 50 membres jouent au tennis.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "L’énoncé donne : tout le monde pratique au moins un sport, donc |F ∪ T| = 90. Il faut les deux effectifs : |F ∩ T| = 60 + 50 − 90 = 20. Chaque condition seule laisse l’intersection libre. Piège : oublier la donnée implicite « au moins un sport »." },
  { prompt: "Le triangle ABC est rectangle en A. Quelle est son aire ?<br><br>(1) BC = 10.<br><br>(2) AB = 6.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) : BC = 10 est l’hypoténuse, mais les cathètes peuvent être (6, 8) ou (5√2, 5√2) : aires différentes. (2) : AC reste libre. Ensemble : AC = √(100 − 36) = 8 et l’aire vaut 6 × 8 / 2 = 24. Piège : croire que l’hypoténuse seule détermine un triangle rectangle." },
  { prompt: "Dans le triangle ABC isocèle en A, BC = 10. Quel est le périmètre du triangle ?<br><br>(1) La hauteur issue de A mesure 12.<br><br>(2) L’aire du triangle est 60.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 3,
    fixedOrder: true,
    explanation: "(1) : AB = √(5² + 12²) = 13 ⇒ périmètre 36. (2) : aire = 10 × h / 2 = 60 ⇒ h = 12, retour au cas précédent. Chaque condition fixe la hauteur, donc le triangle. Piège : ne pas voir que l’aire donne la hauteur lorsque la base est connue." },
  { prompt: "Un carré est inscrit dans un cercle. Quel est le rayon du cercle ?<br><br>(1) L’aire du carré est 50.<br><br>(2) Le côté du carré mesure 5√2.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 3,
    fixedOrder: true,
    explanation: "(1) : côté = √50 = 5√2. (2) donne directement le même côté 5√2. Dans les deux cas, la diagonale du carré = 10 est le diamètre, donc R = 5. Piège : ne pas voir que les deux conditions sont équivalentes et suffisantes chacune." },
  { prompt: "Quelle est l’aire du rectangle ABCD ?<br><br>(1) Son périmètre est 28.<br><br>(2) Sa diagonale mesure 10.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) donne a + b = 14 ; (2) donne a² + b² = 100. Ensemble : 2ab = 14² − 100 = 96, donc ab = 48 (soit 6 × 8), sans même résoudre. Chaque condition seule laisse l’aire varier. Piège : essayer de résoudre au lieu d’utiliser (a + b)² = a² + b² + 2ab." },
  { prompt: "ABCD est un carré. Quelle est son aire ?<br><br>(1) Sa diagonale mesure 6√2.<br><br>(2) Son périmètre est 24.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 3,
    fixedOrder: true,
    explanation: "(1) : diagonale = côté × √2 ⇒ côté 6 ⇒ aire 36. (2) : 4 × côté = 24 ⇒ côté 6 ⇒ aire 36. Piège : ne pas penser à utiliser la formule diagonale = a√2." },
  { prompt: "Le triangle ABC est-il équilatéral ?<br><br>(1) ABC est isocèle.<br><br>(2) L’un des angles de ABC mesure 60°.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) seul : un isocèle quelconque n’est pas équilatéral. (2) seul : un angle de 60° se retrouve dans de nombreux triangles (60-80-40…). Ensemble : si le 60° est au sommet, les angles de base valent 60° ; s’il est à la base, l’autre angle de base vaut 60° et le sommet 60° aussi : équilatéral. Piège : ne tester qu’une position du 60°." },
  { prompt: "A et B sont deux points d’un cercle de centre O. Quelle est l’aire du disque ?<br><br>(1) L’angle AOB mesure 90°.<br><br>(2) AB = 6√2.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) donne la forme du triangle OAB (rectangle isocèle) mais pas sa taille. (2) donne la corde, mais l’angle au centre reste libre. Ensemble : AB = r√2 = 6√2 ⇒ r = 6 et l’aire vaut 36π. Piège : croire qu’une corde suffit à déterminer le rayon." },
  { prompt: "M et N sont les milieux respectifs de [AB] et [AC] dans le triangle ABC. Quelle est la longueur BC ?<br><br>(1) MN = 7.<br><br>(2) AB = 10.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "Théorème des milieux : MN = BC / 2, donc (1) donne BC = 14 : suffisant. (2) ne donne qu’un autre côté et laisse BC libre. Piège : ne pas penser au théorème des milieux et chercher une deuxième donnée." },
  { prompt: "ABC est un triangle tel que AB = 6 et AC = 8. Quelle est la longueur BC ?<br><br>(1) ABC est rectangle.<br><br>(2) BC > 6.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) : le triangle peut être rectangle en A (BC = 10) ou en B (hypoténuse AC = 8, BC = √28 ≈ 5,3) ; en C c’est impossible (AB = 6 < AC = 8). (2) seul : BC peut prendre de nombreuses valeurs. Ensemble : √28 ≈ 5,3 < 6 est éliminé ⇒ BC = 10. Piège : oublier la position de l’angle droit." },
  { prompt: "ABC est un triangle. Quelle est la mesure de l’angle A ?<br><br>(1) ABC est isocèle.<br><br>(2) L’angle B mesure 50°.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "Si ABC est simplement « isocèle », le sommet n’est pas précisé : isocèle en A ⇒ A = 80° ; en B ⇒ A = C = 65° ; en C ⇒ A = B = 50°. Trois valeurs sont possibles. Piège : supposer que le sommet principal est A." },
  { prompt: "Deux cubes ont pour arêtes a et b. Quel est le rapport du volume du premier cube au volume du second ?<br><br>(1) Le premier cube a une arête de 6.<br><br>(2) Le rapport de leurs aires totales est 4.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "Rapport des aires = (a/b)² = 4 ⇒ a/b = 2 ⇒ rapport des volumes (a/b)³ = 8 : suffisant. Connaître seulement a = 6 ne donne pas b. Piège : connaître les longueurs absolues alors que seul le rapport k compte (aires × k², volumes × k³)." },
  { prompt: "P est un polygone régulier à n côtés. Quelle est la valeur de n ?<br><br>(1) Son angle intérieur est supérieur à 120°.<br><br>(2) Il possède exactement 20 diagonales.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "(1) : 180 − 360 / n > 120 ⇒ n > 6, donc une infinité de valeurs. (2) : n(n − 3) / 2 = 20 ⇒ n² − 3n − 40 = 0 ⇒ n = 8 (l’autre racine est négative). Piège : une inégalité large ne détermine jamais une valeur unique." },
  { prompt: "Le triangle ABC est inscrit dans un cercle. L’angle ABC est-il droit ?<br><br>(1) [AC] est un diamètre du cercle.<br><br>(2) AB = BC.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 0,
    fixedOrder: true,
    explanation: "(1) : un angle inscrit qui intercepte un diamètre est droit : suffisant. (2) : un triangle isocèle en B peut être inscrit sans que [AC] soit un diamètre, l’angle B n’est alors pas droit. Piège : confondre « isocèle » et « rectangle isocèle »." },
  { prompt: "a et b sont deux entiers strictement positifs. Quelle est la valeur de a ?<br><br>(1) a + b = 10.<br><br>(2) ab = 9 et a > b.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "(1) laisse 9 possibilités (1 + 9, 2 + 8…). (2) : ab = 9 avec des entiers positifs donne (1, 9), (3, 3) ou (9, 1) ; la contrainte a > b ne retient que (9, 1), donc a = 9. Piège : s’arrêter à ab = 9 sans lister les couples et appliquer l’inégalité." },
  { prompt: "a et b sont deux nombres entiers relatifs. Le produit ab est-il strictement positif ?<br><br>(1) a + b > 0.<br><br>(2) a − b > 0.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "Ensemble : a > |b|, donc a > 0, mais b peut être positif (a = 3, b = 1 : ab > 0), négatif (a = 3, b = −1 : ab < 0) ou nul (ab = 0, non strictement positif). Piège : conclure que les deux inégalités fixent le signe de b." },
  { prompt: "x est un nombre entier. Quelle est la valeur de x ?<br><br>(1) x² = 16.<br><br>(2) x³ = 64.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 1,
    fixedOrder: true,
    explanation: "(1) : x = 4 ou x = −4. (2) : un cube garde le signe, donc seule la valeur 4 convient. Piège : oublier la racine négative d’un carré." },
  { prompt: "Léa a entre 30 et 60 billes (bornes comprises). Combien en a-t-elle ?<br><br>(1) Si elle les range par 4, il en reste 2.<br><br>(2) Si elle les range par 5, il en reste 3.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 4,
    fixedOrder: true,
    explanation: "(1) : 30, 34, 38, 42, 46, 50, 54, 58. (2) : 33, 38, 43, 48, 53, 58. Ensemble : les solutions communes vérifient n ≡ 18 (mod 20), soit 38 et 58 : deux valeurs. Piège : s’arrêter à la première solution commune sans lister tous les cas jusqu’à la borne." },
  { prompt: "a et b sont deux entiers strictement positifs. Quelle est la valeur de a + b ?<br><br>(1) a² − b² = 21.<br><br>(2) a > 5.",
    options: ["A : (1) seule suffit, mais (2) seule ne suffit pas", "B : (2) seule suffit, mais (1) seule ne suffit pas", "C : (1) et (2) ensemble suffisent, mais aucune seule ne suffit", "D : chaque condition seule suffit", "E : (1) et (2) ensemble ne suffisent pas"],
    answerIndex: 2,
    fixedOrder: true,
    explanation: "(1) : (a − b)(a + b) = 21 = 1 × 21 ou 3 × 7 ⇒ (a, b) = (11, 10) ou (5, 2) ⇒ a + b = 21 ou 7. (2) seul : aucune information sur b. Ensemble : a > 5 élimine (5, 2) ⇒ a + b = 21. Piège : ne retenir que la factorisation 1 × 21." }
];
