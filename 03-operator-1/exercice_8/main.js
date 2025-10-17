// Exercice 8
// Écrivez votre code ici

const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;
let autresDepenses = 50;
    autresDepenses += 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
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