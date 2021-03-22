//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

var dadoPlayer = Math.floor(Math.random() * 6 ) + 1 ;
console.log('numero random giocatore: ' + dadoPlayer);
var dadoCPU = Math.floor(Math.random() * 6 ) + 1 ;
console.log('numero random CPU: ' + dadoCPU);

if (dadoPlayer > dadoCPU) {
    console.log('Il giocatore ha vinto')
} else if (dadoPlayer < dadoCPU){
    console.log('la CPU ha vinto')
} else {
    console.log('PAREGGIO')
}