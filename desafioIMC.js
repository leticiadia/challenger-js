const name = 'Leticia'
const peso = 106
const altura = 1.56
const sexo = 'Feminino'

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log('Leticia você está acima do peso.')
}else{
    console.log('Leticia você não está acima do peso')
}
