// Desafio: Arredonde um número para 2 casas decimais

/* Problemática: Escreva uma função que tenha um número como argumento. 
   Arredonde o número para o segundo dígito após a vírgula e retorne o número arredondado
*/

function myFunction(number){
    return Math.round(number * 100) / 100
}

console.log(myFunction(2.12397))
console.log(myFunction(3.136))
console.log(myFunction(1.12397))
console.log(myFunction(26.1379))




/* Solução: Primeiro criamos uma função, que recebe como parâmetro number.
   Dentro da função temos um return, seguido da função Math.round(number * 100) / 100, onde vai ser 
   retornado o número com apenas duas casas decimais. Entretanto existe uma forma mais fácil de fazer
   usando o toFixed()... 
*/




// Outras formas de fazer:
/* const roundNumber = (number) => {
    
    number = 2.12397

    console.log(number.toFixed(2))
}

roundNumber()

*/


/*function myFunction1 () {
    const num1 = 2.12397
    console.log(num1.toFixed(2))
} 

myFunction1()


function myFunction() {
    const num2 = 26.1379
    console.log(num2.toFixed(2))
    return num2
} 

myFunction() */


/* function myFunction (number) {
    
    number = 2.12397

    console.log(number.toFixed(2))
    
}

myFunction() */