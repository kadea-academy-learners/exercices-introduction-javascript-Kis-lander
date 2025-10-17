// 1. Salaire mensuel
let salaireMensuel = 500;

// 2. Calcul des dépenses fixes
let loyer = salaireMensuel * 0.3;        // 30%
let nourriture = salaireMensuel * 0.2;   // 20%
let transport = salaireMensuel * 0.1;    // 10%

// 5. Autres dépenses
let autresDepenses = 50;
autresDepenses += 25; // Ajouter 25

// 6. Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 7. Reste après dépenses
let reste = salaireMensuel - totalDepenses;

// 8. Vérification du budget
if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}

// 9. Ajout de la catégorie loisirs
let loisirs = salaireMensuel * 0.15; // 15%
totalDepenses += loisirs;
reste = salaireMensuel - totalDepenses;

console.log("\n--- Après ajout de loisirs ---");
console.log("Total des dépenses:", totalDepenses);
console.log("Reste:", reste);

// 10. Pourcentage du salaire utilisé pour chaque catégorie
console.log("\n--- Pourcentages des dépenses ---");
console.log("Loyer:", ((loyer / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Nourriture:", ((nourriture / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Transport:", ((transport / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Autres Dépenses:", ((autresDepenses / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Loisirs:", ((loisirs / salaireMensuel) * 100).toFixed(2) + "%");

// 11. Simulation d'une augmentation de 10% du salaire
salaireMensuel *= 1.1; // +10%
loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
autresDepenses = 50 + 25;
loisirs = salaireMensuel * 0.15;

totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

console.log("\n--- Après augmentation de 10% ---");
console.log("Salaire:", salaireMensuel.toFixed(2));
console.log("Total des dépenses:", totalDepenses.toFixed(2));
console.log("Reste:", reste.toFixed(2));

// Pourcentages recalculés
console.log("\n--- Pourcentages après augmentation ---");
console.log("Loyer:", ((loyer / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Nourriture:", ((nourriture / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Transport:", ((transport / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Autres Dépenses:", ((autresDepenses / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Loisirs:", ((loisirs / salaireMensuel) * 100).toFixed(2) + "%");

// 12. Vérification si les dépenses dépassent 90% du salaire
if (totalDepenses > salaireMensuel * 0.9) {
    console.log("Dépenses trop élevées, réduisez vos charges");
} else {
    console.log("Dépenses sous contrôle");
}
