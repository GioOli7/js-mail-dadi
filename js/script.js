//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.


// 1 - prepara un array con le email all'interno [X]
// 2 - chiedi email all utente
// 3 - controlla se l'email inserita si trova nell array
// 4 - se SI, messaggio positivo, altimenti messaggio negativo

// 1 - prepara un array con le email all'interno
var mailList = ['giovanni1@gmail.com', 'paolo99@gmail.com', 'fabioff@hotmail.it', 'pietrott@libero.it', 'alex88@gmail.com'];

// 2 - chiedi email all utente
var user = prompt('Inserisci la tua email per accedere');
document.getElementById('username').innerHTML = 'Indirizzo email inserito: ' + user;
// console.log('user inserito: ' + user);


// 3 - controlla se l'email inserita si trova nell array
userFounded = false;

for (var i = 0; i < mailList.length; i++) {
    // console.log(mailList[i])
    if (mailList[i] == user) {
        userFounded = true;
        break;
    }
}

var okMessage = "Ben fatto, la tua email è presente nella lista";
var noMessage = "Errore, la tua email non è presente nella lista"

// 4 - se SI, messaggio positivo, altimenti messaggio negativo
if (userFounded == true) {
    alert(okMessage)
    document.getElementById('result').innerHTML = okMessage;
} else {
    alert(noMessage);
    document.getElementById('result').innerHTML = noMessage;
}