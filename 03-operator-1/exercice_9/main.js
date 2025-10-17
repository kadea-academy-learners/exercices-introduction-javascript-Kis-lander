// Exercice 9
// === Données de base ===
const maison = 60000000;
const terrains = 40000000;
const liquidites = 20000000;
const patrimoineTotal = maison + terrains + liquidites;

console.log("=== Patrimoine total de Monsieur Jean MUKUNA ===");
console.log(`Maison : ${maison.toLocaleString()} CDF`);
console.log(`Terrains : ${terrains.toLocaleString()} CDF`);
console.log(`Liquidités : ${liquidites.toLocaleString()} CDF`);
console.log(`>>> Total : ${patrimoineTotal.toLocaleString()} CDF\n`);

// === Répartition entre les catégories ===
const partPremiereCategorie = patrimoineTotal * 0.75; // 75% pour les enfants (et leurs représentants)
const partDeuxiemeCategorie = patrimoineTotal * 0.25; // 25% pour conjoint + frères/sœurs

// === Première catégorie ===
// Paul : 1 part
// Marie : 1 part
// Alain (représenté par Éric et Claire) : 1 part
const nombrePartsPremiereCategorie = 3;
const valeurPartPremiereCategorie = partPremiereCategorie / nombrePartsPremiereCategorie;

// Parts enfants
const partPaul = valeurPartPremiereCategorie;
const partMarie = valeurPartPremiereCategorie;
const partAlain = valeurPartPremiereCategorie;

// Répartition entre Éric et Claire (50/50 de la part d'Alain)
const partEric = partAlain / 2;
const partClaire = partAlain / 2;

// === Deuxième catégorie ===
// Madame MUKUNA, Joseph, Sarah -> 3 parts égales
const nombrePartsDeuxiemeCategorie = 3;
const valeurPartDeuxiemeCategorie = partDeuxiemeCategorie / nombrePartsDeuxiemeCategorie;

const partMadameMukuna = valeurPartDeuxiemeCategorie;
const partJoseph = valeurPartDeuxiemeCategorie;
const partSarah = valeurPartDeuxiemeCategorie;

// === Affichage des résultats ===
console.log("=== Répartition de l'héritage ===");
console.log(`Paul : ${partPaul.toLocaleString()} CDF`);
console.log(`Marie : ${partMarie.toLocaleString()} CDF`);
console.log(`Éric : ${partEric.toLocaleString()} CDF`);
console.log(`Claire : ${partClaire.toLocaleString()} CDF`);
console.log(`Madame MUKUNA : ${partMadameMukuna.toLocaleString()} CDF`);
console.log(`Joseph : ${partJoseph.toLocaleString()} CDF`);
console.log(`Sarah : ${partSarah.toLocaleString()} CDF`);

// === Vérification ===
const totalDistribue =
  partPaul +
  partMarie +
  partEric +
  partClaire +
  partMadameMukuna +
  partJoseph +
  partSarah;

console.log("\n=== Vérification ===");
console.log(`Total distribué : ${totalDistribue.toLocaleString()} CDF`);
console.log(`Écart : ${(patrimoineTotal - totalDistribue).toLocaleString()} CDF`);

