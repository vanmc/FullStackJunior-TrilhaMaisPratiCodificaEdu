//Exercício 1 - escreva a sequência de Fibonacci até o 10° termo:
const nTermos = 9
let termo1 = 0
let termo2 = 1
console.log(termo1)
console.log(termo2)

for(let t = 2; t <= nTermos; t++){
    let proximoTermo = termo1 + termo2
    console.log(proximoTermo)
    termo1 = termo2
    termo2=proximoTermo
}

//Exercício 2 - Verifique se o número é primo: 
const prompt = require('prompt-sync')()
let primo = Number(prompt('Digite o número que deseja saber se é primo: '))

for (let n = 2; n <= primo/2; n++){
    if (primo % n === 0){
        console.log(`O número ${primo} não é primo!`)
        break
    }
    else {
        console.log(`O número ${primo} é primo!`)
    }
}


//Exercício 2.2 = Imprima os 100 primeiros números primos após o 100
let count = 0 
ler num = 100

do {
    let primo = 0
    for (let i = 1; 1 <= num; i++){
        if (num% 1 === 0) {
            primo++
        }
    }
    if (primo === 2){
        console.log(num)
        count++
    }
    num++
} while (count < 50)

//Exercício 3 - Imprima um triângulo de números:
const prompt = require('prompt-sync')()
let nLines = Number(prompt('Digite o número de linhas que deseja que seu triângulo tenha: '))

for (let triangle = 0; triangle < nLines; triangle++){
    let drawing = ' '
    for (let line = 0; line <= triangle; line++){
        drawing += line
    }
    console.log(drawing)
}

//Exercício 4 - Calcule o fatorial de uma número:
const prompt = require('prompt-sync')()
let n = Number(prompt('Digite o número que deseja calcular o seu fatorial: '))
let n2 = 1
let fatorial = 1

if (n === 0 || n < 0){
    console.log("Você precisa definir um número positivo e que não seja zero.")
} else {
    while (n2 <= n){
        fatorial *=n2
        n2++
    }
    console.log(`O fatorial de ${n} é `, fatorial)
    }




//Exercício 5 - Inverta os dígitos de um número:
const prompt = require('prompt-sync')()
let nOriginal = Number(prompt('Digite um número: '))
let nInvertido = 0

while (nOriginal > 0){ 
    let ultimoDigito = nOriginal % 10
    nInvertido = (nInvertido * 10) + ultimoDigito
    nOriginal = (nOriginal - ultimoDigito) / 10

}
console.log (nInvertido)

//Exercício 6 - Verifique se um número é palíndromo:
const prompt = require('prompt-sync')()
let nOriginal = Number(prompt('Digite um número: '))
let nInvertido = 0
let nComparacao = nOriginal

while (nOriginal > 0){ 
    let ultimoDigito = nOriginal % 10
    nInvertido = (nInvertido * 10) + ultimoDigito
    nOriginal = (nOriginal - ultimoDigito) / 10
}
if (nInvertido === nComparacao) {
    console.log(`O número ${nComparacao} é um palíndromo!`)
} else {
    console.log(`O número ${nComparacao} não é um palíndromo!`)
}


//Exercício 7 - Conte o número de dígitos de um número: 
const prompt = require('prompt-sync')()
let n = Number(prompt('Digite um número: '))
let count = 0
let digito = 0

while (n > 0){
    digito =  n % 10
    n = (n-digito) / 10
    count++
}
console.log(count)

//Exercício 8 - Calcule a soma dos dígitos de um numero:
const prompt = require('prompt-sync')()
let n = Number(prompt('Digite um número: '))
let soma = 0


do {
    let digito = n % 10
    soma += 1
    n = (n - digito) / 10
} while (n > 0)
    console.log(soma)

//Exercício 9 - Imprime um padrão de estrela decrescente: 
const prompt = require('prompt-sync')()
let counter = Number(prompt('Digite um número: '))
let n = counter
let i

do {
    i = n
    let linha = ""
    do {
        linha += '*'
        i--
    } while (i > 0)
    console.log(linha)
    n--
} while (n > 0)

//Exercício 10 - Encontre o maior divisor comum de dois números: 
const prompt = require('prompt-sync')()
let a = Number(prompt('Digite um número: '))
let b = Number(prompt('Digite um número: '))

let mdc
let mdcA = a
let mdcB = b

do {
    mdc = mdcA
    mdcA = mdcB
    mdcB = mdc % mdcB
} while (mdcB !== 0)

    console.log(`O Maior Divisor Comum entre ${a} e ${b} é ${mdcA}`)

