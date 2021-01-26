// Desafio: Operadores de multiplicação, divisão e comparação.

/* Problemática: Escreva uma função que recebe dois números, digamos a e b, como argumentos, se a for 
   menor que b, divida a por b, caso contrário, multiplique os dois números e retorne o valor resultante 
*/

function myFunction(a, b) {
    if (a < b) {
        return a / b 
    } else {
        return a * b
    } 
}

console.log(myFunction(10, 100))
console.log(myFunction(90, 45))
console.log(myFunction(8, 20))
console.log(myFunction(2, 0.5))


/* Solução: Para começar criamos uma função chamada myFunction. Em seguida passamos dois parâmetros, sendo a e b.
   Dentro da função como valor colocamos uma condição: se a for menor que b, retone a divisão a e b, se não
   retorne a multiplicação de a e b.
*/


// Outra forma de fazer: 

/* function myFunction(a, b) {
    if (a < b) {
        console.log(a / b)
    } else {
        console.log(a * b)
    }
}

myFunction(10, 100) 
myFunction(90, 45)
myFunction(8, 20) 
myFunction(2, 0.5) 

*/




