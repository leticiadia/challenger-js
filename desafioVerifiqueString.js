// Desafio: Verifque se uma string contém outra string e concatene

/* Problemática: Escreva uma função que recebe duas strings, digamos a e b, como argumentos, 
  se a contém b, anexe b ao início de a, se não, anexe b ao final e retorne a concatenação. 
*/
   
function myFunction(a, b){
  if(a.indexOf(b) !== -1){
      return b + a
  }else{
      return a + b
  }
}

console.log(myFunction("cheese", "cake"))
console.log(myFunction("lips", "s"))
console.log(myFunction("Java", "script"))
console.log(myFunction("think, therefore I am", "I "))


/* Solução: Iniciamos criando uma função chamada myFunction, que recebe como parâmetro a e b. 
  Em seguida, colocamos uma condição que vai verificar se a string (a) contém a string (b), 
  onde será retornado se o valor for verdadeiro a concatenação de b + a, se não vai ser retornado 
  a concatenação de a + b.

  Obs: o -1 significa que uma string não contém a outra string.
*/