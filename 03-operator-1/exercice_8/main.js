// Exercice 8
// Écrivez votre code ici

let salaireMensuel = 500;
      salaireMensuel += 500 * 0,1;
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;
let autresDepenses = 50;
    autresDepenses += 25;
let totalDepenses = (loyer + nourriture + transport + autresDepenses);
let reste = salaireMensuel - totalDepenses;

function verifierReste(reste){
    if(reste>=100){
        console.log('budjet bien gerer');    
    }else{
        console.log('attention serrer');   
    }
}

//verifierReste(50);

function calcultotalDepenses(salaire, depenses){
    let reste = salaire - depenses;
    for (let i=1; i <= 3; i++){
        console.log("Votre reste est : " + reste);
    }
}
calcultotalDepenses(800, 500);

const loisirs = salaireMensuel * 0.15;
    totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
    reste = salaireMensuel - totalDepenses;

let pourcentageLoyer = (loyer * 100) / salaireMensuel;
let pourcentageNourriture = (nourriture * 100) / salaireMensuel;
let pourcentageTransport = (transport * 100) / salaireMensuel;
let pourcentageAutresDepenses = (autresDepenses * 100) / salaireMensuel;
let pourcentageLoisirs = (loisirs * 100) / salaireMensuel;
console.log(pourcentageLoyer);
console.log(pourcentageNourriture);
console.log(pourcentageTransport);
console.log(pourcentageAutresDepenses);
console.log(pourcentageLoisirs);


