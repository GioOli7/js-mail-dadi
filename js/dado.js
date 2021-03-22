//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

/*var dadoPlayer = Math.floor(Math.random() * 6 ) + 1 ;
console.log('numero random giocatore: ' + dadoPlayer);
var dadoCPU = Math.floor(Math.random() * 6 ) + 1 ;
console.log('numero random CPU: ' + dadoCPU);

if (dadoPlayer > dadoCPU) {
    console.log('Il giocatore ha vinto')
} else if (dadoPlayer < dadoCPU){
    console.log('la CPU ha vinto')
} else {
    console.log('PAREGGIO')
}*/


// SEZIONE EXTRA puramente accademica
// supponiamo che voglia essere sicuro che il mio codice generi solo i numeri desiderati
// e che voglia scoprirlo solamente tramite codice
// cosa posso fare, anzichè refreshare la pagina a mano decine e decine di volte?
// creo un ciclo for di debug con le condizioni indesiderate
// se il ciclo restituisce esito negativo significa che funziona

//condizoni: numeri random da 1 a 6. Numeri fuori da questo range restituiscono messaggio di errore

var test = 1;
var nTentativi = 100;
var errorFound = false;

for (var i = 0; i < nTentativi; i++) {
    test = Math.floor(Math.random() * 7) + 1 ; //volutamente incorretto
    if (test > 6 || test < 1) {
        errorFound = true;
        break;
    }
}

if (errorFound == true) {
    console.log('ATTENZIONE, NUMERI RANDOM FUORI RANGE');
    console.log('numero: ' + test);
    console.log('numero fuori range trovato dopo: ' + (i + 1) + ' tentativi');
} else {
    console.log('Tutto ok, in ' + nTentativi +' tentativi casuali non sono stati riscontrati numeri random fuori dal range');
}