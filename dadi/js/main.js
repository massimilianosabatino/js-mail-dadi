'use strict';

/* Version 1 */
//Genera numero da 1 a 6 per utente e computer
/*
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
*/
/* /Version 1 */

/* Version 2 */
//Variabili elementi pagina html
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

//Variabili calcolo punteggio
let userCount = 0;
let computerCount = 0;

playButton.addEventListener('click',
    function () {
        //Generazione numeri casuali per dadi utente e computer
        const userDice = Math.floor(Math.random() * (7 - 1) + 1);
        const computerDice = Math.floor(Math.random() * (7 - 1) + 1);

        console.log(`Dado utente: ${userDice} - Dado computer: ${computerDice}`);

        if (userDice > computerDice) {
            console.log('Vince utente. Complimenti!');
            userCount += 1;
        } else if (computerDice > userDice) {
            console.log('Vince computer. Mi dispiace hai perso!');
            computerCount += 1;
        } else {
            console.log('Questo è un pareggio. L\'importante è partecipare, ma puoi sempre riprovare!');
        }

        console.log('Punteggio utente: ' + userCount);
        console.log('Punteggio computer: ' + computerCount);
    } 
)

stopButton.addEventListener('click',
    function() {
        if (userCount > computerCount) {
            console.log('Complimenti hai vinto! Adesso nessuno potra più fermarti!');
        } else if (computerCount > userCount) {
            console.log('Questa è una caporetto! Mi dispiace hai perso.')
        } else {
            console.log('Un pareggio perfetto! Sicuro di non voler riprendere?')
        }
    }
)
