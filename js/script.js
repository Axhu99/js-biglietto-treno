/* 
    1- chiedere all'utente quanti chilometri dovra percorre
    2- chiedere all'utente quanti anni ha
    3- calcolare in base ai chilometri indicati quanto dovra pagare
    4- se ha diritto a uno sconto 
    4b- se si a quale sconto
    5- avere un risultato in forma umana (due cifre dopo la virgola)
    6(bonus)- stampare il risultato 
*/

// 1- chiedere all'utente quanti chilometri dovra percorre
// 2- chiedere all'utente quanti anni ha
const element = document.getElementById('howmuch');

const priceForKm = 0.21;
let price = 0;

const kmToDo = parseInt(prompt('Quanti CHILOMETRI deve fare?', '100'));
const utenteAge = parseInt(prompt('Quanti ANNI ha (scrivere solo il numero)?', '17'));
console.log("chilometri da fare:", kmToDo, "eta utente", utenteAge);

let errorMessage
let discountMessage = 'Non hai diritto a nessuno sconto'
const arrow = '-->'

if(isNaN(kmToDo) || isNaN(utenteAge) || kmToDo < 0 || utenteAge < 0){
    errorMessage = 'Spiacente hai sbagliato qualcosa'
}

if (errorMessage){
    alert(errorMessage);
} else {

// 3- calcolare in base ai chilometri indicati quanto dovra pagare

let price = kmToDo * priceForKm
console.log(price)

// 4- se ha diritto a uno sconto 
// 4b- se si a quale sconto

if(utenteAge < 18 ){
    price *= 0.8
    discountMessage = 'Hai diritto allo SCONTO del 20%'
    console.log(price)
} else if(utenteAge > 65){
    price *= 0.6
    discountMessage = 'Hai diritto allo SCONTO del 40%'
    console.log(price)
}

// 5- avere un risultato in forma umana (due cifre dopo la virgola)

const realPrice = price.toFixed(2)
console.log(realPrice) 

// 6(bonus)- stampare il risultato
let message = `${discountMessage} ${arrow} Il suo viaggio costa ${realPrice} euro`
element.innerText = message;
}