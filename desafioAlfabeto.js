// Desafio: Encontre a palavra correta incrementando as letras do alfabeto

/* Problemática: Escreva uma função que recebe uma string como argumento. 
   Como está, a string não tem significado e incremente cada letra para a próxima letra do alfabet, 
   por fim retorne a palavra correta.
*/

function myFunction(string) {

    return string.replace(/[a-zA-Z]/g, function(x){
        return String.fromCharCode(x.charCodeAt(0) + 1)
    })
}

console.log(myFunction('bnchmf'))
console.log(myFunction('bgddrd'))
console.log(myFunction('sdrshmf'))


/* Solução: Primeiro criamos uma função chamada myFunction, que recebe como parâmetro uma string.
   Dentro da função temos um return, logo em seguinda o método replace onde como primeiro parâmetro, 
   direcionamos cada letra do alfabeto e no segundo parêmetro colocamos uma função, que passa o x 
   como valor para a string. Por fim, será retornado a string, a partir do código de caracteres
   da posição X, para o código no índice zero, incrematando com + 1, o que leva ao seu lugar no alfabeto.
*/
