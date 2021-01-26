// Desafio: Verifique se um número é par

/* Problemática: Escreva uma função que tenha um número como argumento, se o número for par, 
   retorna verdadeiro, caso contrário, retorna falso.
*/

function myFunction(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

console.log(myFunction(10))
console.log(myFunction(-4))
console.log(myFunction(5))
console.log(myFunction(-111))


/* Solução: Inicialmente criamos uma função chamada myFunction. Em seguida passamos como parâmetro número.
   Como valor atribuído a função, colocamos uma condição: se o resto da divisão do número dividido por dois 
   for zero, vai ser retornado true, ou seja, o número é par, se não vai retornar false, ou seja, o número não
   é par, que nessa situção que dizer que ele é ímpar. 
*/


// Outra forma de fazer:
/*function myFunction (number) {
    return number % 2 === 0 ? 'true' : 'false'
}

console.log(myFunction(-111))
*/