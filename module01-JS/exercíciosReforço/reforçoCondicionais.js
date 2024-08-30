// Exercício 01 - Verifique se um número é positivo ou negativo:
const prompt = require('prompt-sync')()
let n = Number(prompt('Digite um número: '))

if (n === 0) {
    console.log ("Digite um número diferente de zero!")
}
if (n > 0 && n !== 0) {
    console.log(`O número ${n} é positivo!`)
}
if (n < 0 && n !== 0) {
    console.log(`O número ${n} é negativo!`)
}

//Exercício 02 - Verifique se um ano é bissexto:
const prompt = require('prompt-sync')()
let ano = Number(prompt('Digite um ano que deseja saber se é bissexto ou não: '))

if (ano % 400 === 0) {
    console.log(`O ano ${ano} é bissexto`);
}

if (ano % 100 === 0 && ano % 400 !== 0) {
    console.log(`O ano ${ano} não é bissexto`);
}

if (ano % 4 === 0 && ano % 100 !== 0) {
    console.log(`O ano ${ano} é bissexto`);
}

if (ano % 4 !== 0) {
    console.log(`O ano ${ano} não é bissexto`);
}

//Exercício 03 - Calcule a média de três números e determine o conceito:
const prompt = require('prompt-sync')()
let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))

const media = (nota1 + nota2 + nota3) / 3

if (media > 3 && media <= 5){
    console.log(`A sua média foi ${media} e seu conceito é E`)
} else if (media > 5 && media <= 6){
    console.log(`A sua média foi ${media} e seu conceito é D`)
} else if (media > 6 && media <= 7){
    console.log(`A sua média foi ${media} e seu conceito é C`)
} else if (media > 7 && media <=9){
    console.log(`A sua média foi ${media} e seu conceito é B`)
} else if (media > 9 && media <= 10) {
    console.log(`A sua média foi ${media} e seu conceito é A`)
} else {
    console.log(`A sua média foi ${media} e seu conceito é F`)
}

//Exercício 04 - Verifique se um número é par ou ímpar: 
const prompt = require('prompt-sync')()
let n = Number(prompt('Digite um número: '))

if (n === 0) {
    console.log ("Digite um número diferente de zero!")
} else if (n % 2 === 0) {
    console.log (`O número ${n} é par!`)
} else {
    console.log (`O número ${n} é ímpar!`)
}

//Exercício 05 - Verifique a categoria de um nadador:
const prompt = require('prompt-sync')()
let idade = Number(prompt('Digite a idade do (a) nadador (a): '))

if (idade >= 5 && idade <= 7){
    console.log(`A categoria para a idade ${idade} é "Infantil A".`)
} else if (idade >= 8 && idade <= 10){
    console.log(`A categoria para a idade ${idade} é "Infantil B".`)
} else if (idade >= 11 && idade <= 13){
    console.log(`A categoria para a idade ${idade} é "Juvenil A".`)
} else if (idade >= 14 && idade <= 17){
    console.log(`A categoria para a idade ${idade} é "Juvenil B".`)
} else if (idade >= 18) {
    console.log(`A categoria para a idade ${idade} é "Adulto".`)
} else {
    console.log("A idade mínima é de 5 anos.")
}

//Exercício 06 - Verifique o dia da semana: 
const prompt = require('prompt-sync')()
let dia = Number(prompt('Digite um número para os dias da semana de 1 a 7: '))

switch (dia) {
    case 1: 
        console.log(`O número ${dia} corresponde à segunda-feira.`)
        break
    case 2: 
        console.log(`O número ${dia} corresponde à terça-feira.`)
        break
    case 3: 
        console.log(`O número ${dia} corresponde à quarta-feira.`)
        break
    case 4: 
        console.log(`O número ${dia} corresponde à quinta-feira.`)
        break
    case 5: 
        console.log(`O número ${dia} corresponde à sexta-feira.`)
        break
    case 6: 
        console.log(`O número ${dia} corresponde à sábado.`)
        break
    case 7: 
        console.log(`O número ${dia} corresponde à domingo.`)
        break
    default:
        console.log("Digite um número válido!")
}


//Exercício 07 - Calcule o valor de uma expressão matemática simples: 
const prompt = require('prompt-sync')()
let n1 = Number(prompt('Digite o primeiro número da conta: '))
let n2 = Number(prompt('Digite o segundo número da conta: '))
let conta = prompt('Digite o tipo de cálculo que deseja realizar entre "+", "-", "/" e "*": ')

switch (conta) {
    case "+":
        conta = n1 + n2
        console.log(`O seu resultado é ${conta}`)
        break
    case "-":
        conta = n1 - n2
        console.log(`O seu resultado é ${conta}`)
        break
    case "/":
        conta = n1 / n2
        console.log(`O seu resultado é ${conta}`)
        break
    case "*":
        conta = n1 * n2
        console.log(`O seu resultado é ${conta}`)
        break
    default:
        console.log("Digite o símbolo adequada ao cálculo que deseja realizar!")
}

//Exercício 08 - Verifique a estação do ano:
console.log("Janeiro - 1")
console.log("Fevereiro - 2")
console.log("Março - 3")
console.log("Abril - 4")
console.log("Maio - 5")
console.log("Junho - 6")
console.log("Julho - 7")
console.log("Agosto - 8")
console.log("Setembro - 9")
console.log("Outubro - 10")
console.log("Novembro - 11")
console.log("Dezembro - 12")

const prompt = require('prompt-sync')()
let season = Number(prompt('Digite o número do mês do ano que deseja saber a sua estação no Brasil: '))


switch (season) {
    case 1: 
    case 2: 
    case 12:
        console.log("Verão")
        break
    case 3: 
    case 4: 
    case 5:
        console.log("Outono")
        break
    case 6: 
    case 7: 
    case 8:
        console.log("Inverno")
        break
    case 9: 
    case 10: 
    case 11:
        console.log("Primavera")
        break
    default:
        console.log("Digite um número de mês válido - de 1 a 12!")
}

//Exercício 09 - Verifique a faixa etária de uma pessoa: 
const prompt = require('prompt-sync')()
let age = Number(prompt('Digite a sua idade: '))
let classificacao = age

if (classificacao <= 12 && classificacao >= 0) {
    classificacao = 1
} else if (classificacao >= 13 && classificacao <= 17) {
    classificacao = 2
} else if (classificacao >= 18 && classificacao <= 59) {
    classificacao = 3
} else if (classificacao >= 60 && classificacao > 0) {
    classificacao = 4
}

switch (classificacao) {
    case 1:
        console.log(`Parabéns! Com sua idade de ${age} ano (s), você é considerado uma criança!`) 
        break
    case 2:
        console.log(`Parabéns! Com sua idade de ${age} anos, você é considerado um adolescente!`)
        break
    case 3:
        console.log(`Que pena! Com sua idade de ${age} anos, você é considerado um adulto!`)
        break 
    case 4:
        console.log(`Parabéns! Com sua idade de ${age} anos, você é considerado um idoso!`)
        break
    default:
        console.log("Por favor, informe uma idade humanamente possível!")
}

//Exercício 10 - Calcule o IMC e determine a categoria: 
const prompt = require('prompt-sync')()
let weight = Number(prompt('Digite o seu peso em kg: '))
let height = Number(prompt('Digite a sua altura em metros (use ponto para separar as casas decimais): '))

let imc = weight / (height*height)
let categoria = imc

if (imc < 18.5) {
    categoria = 1
    
} else if (imc >= 18.5 && imc <=24.9) {
    categoria = 2
} else if (imc >= 25 && imc <=29.9) {
    categoria = 3
} else if (imc >= 30 && imc <=34.9) {
    categoria = 4
} else if (imc >= 35 && imc <=39.9) {
    categoria = 5
} else {
    categoria = 6
}

switch (categoria) {
    case 1:
        console.log(`Seu IMC (Índice de Massa Corporal) é ${imc} e, portanto, sua categoria é "Abaixo do Peso".`)
        break
    case 2:
        console.log(`Seu IMC (Índice de Massa Corporal) é ${imc} e, portanto, sua categoria é "Peso Normal".`)
        break
    case 3:
        console.log(`Seu IMC (Índice de Massa Corporal) é ${imc} e, portanto, sua categoria é "Sobrepeso".`)
        break
    case 4:
        console.log(`Seu IMC (Índice de Massa Corporal) é ${imc} e, portanto, sua categoria é "Obesidade Grau I".`)
        break
    case 5:
        console.log(`Seu IMC (Índice de Massa Corporal) é ${imc} e, portanto, sua categoria é "Obesidade Grau II".`)
        break
    case 6:
        console.log(`Seu IMC (Índice de Massa Corporal) é ${imc} e, portanto, sua categoria é "Obesidade Grau III".`)
        break
    default: 
    console.log('Por favor, confira se os dados estão corretos.')
}