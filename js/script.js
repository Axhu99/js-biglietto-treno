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

const kmToDo = prompt('Quanti CHILOMETRI deve fare?', '100');
console.log(kmToDo);

// 2- chiedere all'utente quanti anni ha

const utenteAge = prompt('Quanti ANNI ha?', '17');
console.log(utenteAge);

// 3- calcolare in base ai chilometri indicati quanto dovra pagare

let price = kmToDo * 0.21
console.log(price)

// 4- se ha diritto a uno sconto 
// 4b- se si a quale sconto

if(utenteAge < 18 ){
    price *= 0.8
    console.log(price)
} else if(utenteAge > 65){
    price *= 0.6
    console.log(price)
}

// 5- avere un risultato in forma umana (due cifre dopo la virgola)

const realPrice = price.toFixed(2)
console.log(realPrice) 

// 6(bonus)- stampare il risultato

const element = document.getElementById('howmuch');
const message = `Il suo viaggio costa ${realPrice} euro`
element.innerText = message;