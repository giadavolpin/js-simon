/* 
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 3 secondi.
Dopo 3 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//aggiungere un tag HTML alla pagina per visualizzare i numeri. 
// creo l'array per accogliere i 5 numeri randomici.


let numeri = [];
let numeroDiNumeri = 5; 
//mi metto 5 dentro una variabile.
while (numeri.length < numeroDiNumeri){
    let numeroGenerato = getRndInteger(1, 50); 
// uso un ciclo while per generare i 5 numeri e popolare l'array.
//numeri.lenght sarà minore di 5.
// genero numero random dentro al while
    if(!numeri.includes(numeroGenerato)){
        numeri.push(numeroGenerato);
    } 
//controllo numeri.includes if not(!) numeri.includes allora push
}
let numeriHTML = document.getElementById('numeri');
let padreHTML = document.getElementById('padre');
//prendo il div dall'HTML con document.getElementById lo assegno ad una variabile.
numeriHTML.innerHTML = numeri;
// ciclo for per metterli nel div (pagina) stampare.
setTimeout(nascondi, 3000)


function nascondi(){
    padreHTML.removeChild(numeriHTML)
}
//setTimeout function di 3 secondi. (3000)
// function nascondere i numeri dallo schermo




// chiedere i numeri all'utente (Input)
let numUtente document.getElementById('numberUtente');
let contenNumUt = []
//creo un array per mettere dentro i numeri dell'utente.
if (!contenNumUt.includes(numUtente)){
    contenNumUt.push(numUtente);
}
// funzione che mi controlla i numeri inseriti dall'utente


//far comparire i numeri giusti dell'utente 
//far comparire il numero di quanti numeri ha azzeccato l'utente


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


