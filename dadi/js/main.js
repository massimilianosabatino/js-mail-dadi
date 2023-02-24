'use strict';

//Genera numero da 1 a 6 per utente e computer
const userDice = Math.floor(Math.random() * (7 - 1) + 1);
const computerDice = Math.floor(Math.random() * (7 - 1) + 1);
console.log(userDice, computerDice);

if (userDice > computerDice) {
    console.log('Vince utente. Complimenti!');
} else if (computerDice > userDice) {
    console.log('Vince computer. Mi dispiace hai perso!');
} else {
    console.log('Questo è un pareggio. L\'importante è partecipare, ma puoi sempre riprovare');
}
