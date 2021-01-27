// Desafio: Operadores de comparação, igualdade estrita

/* Problemática: Escreva uma função que tenha dois valores, digamos a e b, 
   como argumentos e retorne verdadeiro se os dois valores forem iguais e do mesmo tipo 
*/

function myFunction(a, b) {
    return a === b
}

console.log(myFunction(2, 3))
console.log(myFunction(3, 3))
console.log(myFunction(1, '1'))
console.log(myFunction('10', '10'))


/* Solução: Primeiramente foi criado uma função chamada myFuntion, que recebe como parâmetro a e b.
   Dentro da função temos um return que vai retorna true se a for estritamente igual a b, se não retorna false.
*/

// Outra forma de fazer: 
/* function myFunction(a, b) {
    if(a === b) {
        return true
    }else{
        return false
    }
}

console.log(myFunction(2, 3))
console.log(myFunction(3, 3))
console.log(myFunction(1, '1'))
console.log(myFunction('10', '10'))

*/