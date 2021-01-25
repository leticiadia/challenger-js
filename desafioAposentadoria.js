const nome = 'Silvana'
const sexo = 'F'
const idade = 58
const contribuicao = 35

const calculoAposentadoria = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoAposentadoria >= 95
const mulherPodeAposentar = sexo == 'F' &&  contribuicao >= 30 && calculoAposentadoria >= 85

if(homemPodeAposentar || mulherPodeAposentar){
   console.log(`${nome}, você pode se aposentar`)
}else{
    console.log(`${nome}, você não pode se aposentar`)
}
