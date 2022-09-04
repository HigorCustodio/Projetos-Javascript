alert("Escolha dois números para a operação a seguir:")

/* Construindo Estrutura de Operações Matemáticas*/

let numberOne = prompt("Insira o primeiro número desejado: ")
let numberTwo = prompt("Insira o primeiro número desejado:")

// Transformando as variaveis de string para Number
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

//  Criando variaveis constantes para as operações matemáticas

const sum= numberOne + numberTwo
const subt= numberOne - numberTwo
const mult= numberOne * numberTwo
const div= numberOne / numberTwo
const restOfDiv= numberOne % numberTwo

// Mostrando os resultados para o usúario

alert(`A soma dos números escolhido é: ${sum};`)
alert(`A subtração dos números escolhido é: ${subt};`)
alert(`A multiplicação dos números escolhido é: ${mult};`)
alert(`A divisão dos números escolhido é: ${div};`)
alert(`O resto da divição dos números escolhido é: ${restOfDiv};`)

//Verificando se a soma dos números é ímpar ou par

const divSum = sum % 2 

if(divSum == 0){
    alert(`A Soma dos dois números é Par : ${sum}`)
} else{
    alert(`A soma dos dois números é Impar: ${sum}`)
}

// Verificando se os números inseridos são iguais
     
if(numberOne != numberTwo){
    alert(`Os números inseridos são diferentes: ${numberOne}, ${numberTwo}! `)
} else{
    alert(`Os números inseridos são iguais: ${numberOne}, ${numberTwo}! `)
}