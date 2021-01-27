// Desafio: Verifique se um número é um número inteiro

/* Problemática: Escreva uma função que tenha um número como argumento. Se o número for um número inteiro 
   (sem casa decimal), retorna verdadeiro, se não retorna falso
*/ 

function myFunction(number){
    return Number.isInteger(number)
}

console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))
console.log(myFunction(10.48))

console.log(typeof Number)

/* Solução: Como ponto inicial criamos uma função chamada myFunction, que recebe como parâmetro number.
   Dentro da função temos um return, seguido de um método Number.isInteger(number), que vai verificar
   se o número passado é inteiro ou não, se for vai ser retornador true, se não vai ser retornado false.
*/