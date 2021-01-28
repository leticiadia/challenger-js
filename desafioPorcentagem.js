// Desafio: Retorne a porcentagem de um número

/* Problemática: Escreva uma função que recebe um objeto com o número e porcentagem 
   das propriedades como argumento e retorne a porcentagem fornecida do número. 
*/

function myFunction({number, percentage}) {
    
    return number * percentage / 100
}

console.log(myFunction({number: 100, percentage: 50}))
console.log(myFunction({number: 777, percentage: 2}))
console.log(myFunction({number: 500, percentage: 99}))

/* Solução: Iniciamos criando uma função chamada myFunction, que recebe como parâmetro um objeto, 
   sendo number e percentage, seus valores. Em seguida, temos dentro da função um return, onde será caculado
   e retornado o valor da porcetagem do número.
*/


