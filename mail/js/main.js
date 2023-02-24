'use strict';

//Elenco mail
const mailList = [
    'mario.rossi@yahoo.it',
    'pinolavatrice@hotmail.com',
    'salvoimprevisti@icq.net',
    'imperviasalita@aol.com',
    'liamg@gmail.com',
    'imbludabudidabida@tunz.tunz'
];

//Richiesta inserimento mail
const userMail = prompt('Inserisci la mail per effettuare l\'accesso.');

//Variabile di controllo
let checkResult = false;

for (let i = 0; i < mailList.length; i++ ) {
    //Associa valore del indice ad ogni ciclo
    const mailCheck = mailList[i];
    if (userMail === mailCheck) {
        checkResult = true;
    }
}

//Stampa solo se il check è vero
if (checkResult) {
    alert('Utente autorizzato');
} else {
    alert('Utente non autorizzato');
}