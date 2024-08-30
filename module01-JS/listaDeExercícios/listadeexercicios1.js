//Obs.: 1. Além de ter o NodeJs junto ao VSCode, é necessária a instalação no terminal para funcionamento local da biblioteca prompt-sync do NodeJs: npm prompt-sync;
//2. Para rodar localmente o código, instale a extensão no VSCode "Code Runner", selecione o código do exercício desejado e pressione o botão Run Code (ou Ctrl+Alt+N);
//3. Caso em algum momento o terminal pare de funcionar, exclua-o e inicie novamente pela extensão "Code Runner" para já executar o código desejado.
//4. As instruções e os códigos foram feitos em um S.O. Windows 10, teclado ABNT. Caso use algo diferente, faça as adaptações necessárias para conseguir rodar localmente os códigos. 

//Exercício 1: Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let num = Number(prompt("Digite o número que deseja verificar se é par ou ímpar: "),10) //Permite a entrada do usuário e transforma em um número.

if (num % 2 === 0) { //Se não houver resto em divisão por 2, o número será par. Caso tenha, será ímpar.
    console.log(`O número ${num} é par!`)
} 

if(num % 2 !== 0) {
    console.log(`O número ${num} é ímpar!`) //Imprime uma resposta de acordo com o resultado usando uma template string com interpolação.
}


//Exercício 2: Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let age = Math.floor(Number(prompt("Digite a idade que deseja categorizar: "))) //Permite a entrada do usuário e transforma em um número inteiro.

if (age >= 0 && age <= 110) { //Determina uma faixa etária limite para interpretação dos dados

if (age >= 60 && age <= 110) { //Cria as categorias de acorda com a entrada do usuário
    console.log(`A idade ${age} anos é categorizada como "Idoso".`)
}
if (age >= 18 && age <= 59) {
    console.log(`A idade ${age} anos é categorizada como "Adulto".`)
}
if (age >= 13 && age <=17) {
    console.log(`A idade ${age} anos é categorizada como "Adolescente".`)
} 
if (age <=12 && age >= 0) {
    console.log(`A idade ${age} ano(s) é categorizada como "Criança".`)
}}

else { //Se não se encaixar em nenhuma das categorias dentro da faixa determinada, retorna uma mensagem de erro, evitando mensagens duplicadas.
    console.error('Por favor, digite uma idade humanamente válida!')
}


//Exercício 3: Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
//Categorias: 8 a 10 = aprovado; 5 a 8 = recuperação; 0 a 5 = reprovado. 

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let grade = Number(prompt("Digite a nota recebida: ")) //Permite a entrada do usuário e transforma em um número.

if (grade >= 8 && grade <= 10 ) { //Determina as notas mínimas e máximas de cada categoria e seu resultado. 
    console.log(`A nota ${grade} pontos está acima de 80% e, portanto, está aprovada!`)
} else if (grade >= 5 && grade < 8) {
    console.log(`A nota ${grade} pontos está entre 50 e 80% e, portanto, está válida para recuperação.`)
} else if (grade >= 0 && grade < 5) {
    console.log(`A nota ${grade} ponto(s) está abaixo de 50% e está reprovada!`)
} else { //Retorna uma mensagem de erro caso o usuário entre um número fora da faixa de 0 a 10.
    console.error('Digite uma nota válida.')
}


//Exercício 4: Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let option = Number(prompt("Escolha a opção desejada - 1. Me conte uma curiosidade aleatória; 2. Me sugira uma opção de lanche; 3. Me sugira uma opção de jogo de PS4: ")) //Permite a entrada do usuário e transforma em um número.

//Cria um array com as opções de resposta para a entrada de usuário 1.
let option1 = [ 
    'O coração de um camarão está localizado na cabeça.',
    'Os morcegos são os únicos mamíferos capazes de voar.',
    'As abelhas podem reconhecer rostos humanos.',
    'O chocolate é tóxico para cães.',
    'A língua de um camaleão pode ser até duas vezes o comprimento do seu corpo.'
]

//Cria um array com as opções de resposta para a entrada de usuário 2.
let option2 = [ 
    'Misto quente.',
    'Pão de queijo.',
    'Pipoca.',
    'Bolinho de chuva.',
    'Chips com guacamole.'
]

//Cria um array com as opções de resposta para a entrada de usuário 3.
let option3 = [ 
    'The Last Of Us Part II',
    'God of War Ragnarok',
    'Red Dead Redemption 2',
    'Uncharted 4',
    'Ghost of Tsushima'
]

//Inicia o switch-case de acordo com a entrada do usuário.
switch(option) {
    case 1: 
        let randomIndex1 = Math.round(Math.random() * option1.length) //Determina uma posição aleatória que será buscada na array.
        let randomItem1 = option1[randomIndex1] //Cria uma nova variável correspondente à posição aleatória acessada na array corresponde à opção selecionada pelo usuário.
        console.log(`Curiosidade: ${randomItem1}`) //Imprime o item aleatório da array correspondente à opção desejada pelo usuário.
        break //Interrompe o código. 
        
        case 2:
            let randomIndex2 = Math.round(Math.random() * option2.length)
            let randomItem2 = option2[randomIndex2]
            console.log(`Lanche: ${randomItem2}`)
            break 

        case 3:
            let randomIndex3 = Math.round(Math.random() * option3.length)
            let randomItem3 = option3[randomIndex3]
            console.log(`Jogo: ${randomItem3}.`)
            break
        
        default: 
            console.error('Digite uma opção válida entre 1 e 3!') //Imprime uma mensagem de erro caso o usuário entre com um número inválido.
    } 


//Exercício 5: Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let weight = Number(prompt('Digite o seu peso em kg: ')) //Permite a entrada do usuário e transforma em um número.
let height = Number(prompt('Digite a sua altura em metros (use ponto para separar as casas decimais): ')) 

let imc = weight / (height*height) //Calcula o valor do imc 

if (imc > 10 && imc < 60) {//Fixa uma faixa de imc para o código rodar e evitar uma mensagem final dupla.
if (imc < 18.5 && imc > 10) { //Determina as categorias do imc de acordo com o resultado calculado. Determina também um valor mínimo para que sejam valores realistas.
    //Imprime e fixa o número máximo de casas decimais.
    console.log(`Seu IMC (Índice de Massa Corporal) é ${imc.toFixed(2)} e, portanto, sua categoria é "Abaixo do Peso".`)
} if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC (Índice de Massa Corporal) é ${imc.toFixed(2)} e, portanto, sua categoria é "Peso Normal".`)
} if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC (Índice de Massa Corporal) é ${imc.toFixed(2)} e, portanto, sua categoria é "Sobrepeso".`)
} if (imc >= 30 && imc <= 34.9) {
    console.log(`Seu IMC (Índice de Massa Corporal) é ${imc.toFixed(2)} e, portanto, sua categoria é "Obesidade Grau I".`)
} if (imc >= 35 && imc <= 39.9) {
    console.log(`Seu IMC (Índice de Massa Corporal) é ${imc.toFixed(2)} e, portanto, sua categoria é "Obesidade Grau II".`)
} if (imc >= 40 && imc < 60) { //Determina um valor máximo para que sejam valores realistas.
    console.log(`Seu IMC (Índice de Massa Corporal) é ${imc.toFixed(2)} e, portanto, sua categoria é "Obesidade Grau III".`)
}} else {
    //Imprime uma mensagem de erro caso os valores acima não sejam satisfeitos.
    console.error('Por favor, confira se os dados informados estão corretos.')
}

//Exercício 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let sideA = Number(prompt('Digite o lado A do seu possível triângulo: ')) //Permite a entrada do usuário e transforma em um número.
let sideB = Number(prompt('Digite o lado B do seu possível triângulo: ')) 
let sideC = Number(prompt('Digite o lado C do seu possível triângulo: ')) 

if (sideA < (sideB + sideC) && sideB < (sideA + sideC) && sideC < (sideA + sideB)) { //Verifica se os dados de entrada podem formar um triângulo.
    //Se sim, verifica se todos os lados da entrada do usuário são iguais.
    if (sideA === sideB && sideA === sideC) {
        console.log('Os números informados formam um triângulo equilátero (todos os lados são iguais).');
    }
    //Verifica se dois lados são iguais.
    else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log('Os números informados formam um triângulo isósceles (possui dois lados iguais).');
    }
    //Caso as duas condições anteriores não sejam cumpridas, resta a possibilidade de todas as entradas, sendo um triângulo, são diferentes.
    else {
        console.log('Os números informados formam um triângulo escaleno (todos os lados são diferentes).');
    }
} else {
    console.error('Informe valores que formem um triângulo.'); //Caso a condição de formar um triângulo não seja cumprida, imprime uma mensagem de erro.
}

//Exercício 7: 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let nApples = Math.round(Number(prompt('Digite o número de maçãs que deseja comprar: '))) //Permite a entrada do usuário e transforma em um número inteiro baseado no valor decimal.

if (nApples === 0) { //Se a entrada for zero, imprime uma mensagem de erro.
    console.error('Não vai querer levar nada mesmo não?')
} else { //Se a entrada for diferente de zero, cria uma função para calcular o custo baseado no valor de entrada do usuário.
calculateApplesCost = (nApples) => {
    if (nApples >= 0 && nApples < 12) {
        return nApples * 0.30
        
    } else {
        return nApples * 0.25
    }
}
//Imprime o resultado.
console.log(`Você deseja comprar ${nApples} maçã(s) e o valor total será de R$${calculateApplesCost(nApples).toFixed(2)}. Qual a forma de pagamento?`)
} 

//Exercício 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let num1 = Number(prompt('Digite um número (caso necessário, use ponto para as casas decimais): ')) //Permite a entrada do usuário e transforma em um número.
let num2 = Number(prompt('Digite o número que deseja ordenar com o anterior (caso necessário, use ponto para as casas decimais): ')) 

let numbers = [num1, num2] //Cria uma array com os números de entrada do usuário.

if (num1 !== num2){ //Se os números forem diferentes, cria e imprime uma função que os ordena de forma crescente.
function orderNumbers (numbers) {
    return numbers.sort((n1, n2) => n1 - n2)
    
}

console.log(orderNumbers(numbers))
} else { //Se forem números iguais, imprime uma mensagem de erro.
    console.error("Digite números diferentes.")
}


//Exercício 9: Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.
function countdown (n) { //Cria uma função para realizar a contagem regressiva de acordo com o número desejado.
    let arrayCoutdown = [] //Cria uma array que receberá os números da contagem.
    for (let i = n; i >= 1; i--) { 
    arrayCoutdown += i + ' ' //Acrescenta os números da contagem à array;
}
    return arrayCoutdown.trim() //Retorna a array com os números, retirando o espaço após o último número.
} 
console.log(countdown(10)) //Imprime a função estabelendo o número máximo que iniciará a contagem. Para alterar o número, altere o valor dentro dos parênteses após countdown.


//Exercício 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let num = Math.round(Number(prompt('Digite um número (caso necessário, use ponto para as casas decimais, será arredondado para um número inteiro): '))) //Permite a entrada do usuário e transforma em um número inteiro.

function repeat (num) { //Cria uma função para realizar a repetição do número de entrada do usuário.
    let arrayNum = [] //Cria uma array para receber essa repetição.
    for  (let i = 0; i < 10; i++) { 
        arrayNum += num + ' ' //Enquanto as posições forem menores que 10, será adicionado o número novamente, junto a um espaço.
    }
    return arrayNum //Retorna a array criada.
}
console.log(repeat(num)) //Imprime a array baseada no número de entrada do usuário. 

//Exercício 11: Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let num1 = Number(prompt('Digite um número (caso necessário, use ponto para as casas decimais): ')) //Permite a entrada do usuário e transforma em um número.
let num2 = Number(prompt('Digite o segundo número (caso necessário, use ponto para as casas decimais): ')) 
let num3 = Number(prompt('Digite o terceiro número (caso necessário, use ponto para as casas decimais): ')) 
let num4 = Number(prompt('Digite o quarto número (caso necessário, use ponto para as casas decimais): ')) 
let num5 = Number(prompt('Digite o quinto número (caso necessário, use ponto para as casas decimais): ')) 

let inputNumbers = [num1, num2, num3, num4, num5] //Cria uma array com os números de entrada do usuário.

//Cria uma função que calcula a soma dos valores da array criada.
function userSum (inputNumbers) {
    let sum = 0
    for (let i = 0; i <inputNumbers.length; i++) {
        sum += inputNumbers[i]
    }
    return sum.toFixed(2)
}
//Imprime o resultado da função.
console.log(`A soma dos números ${inputNumbers} é igual a ${userSum(inputNumbers)}.`)


//Exercício 12: Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) 
//utilizando um loop for.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let num = Number(prompt('Digite um número (caso necessário, use ponto para as casas decimais): ')) //Permite a entrada do usuário e transforma em um número.
//Cria função que recebe o número de entrada, calcula a tabuada e adiciona os passos do cálculo em uma array.
function multiplier (num) {
    let arrMultiplierNum = []
    for (let i = 0; i < 11; i++) {
        let math = num * i
        arrMultiplierNum += `${num} * ${i} = ${math.toFixed(1)} | `
    }
    return arrMultiplierNum //Retorna a array criada com a tabuada. 
}
//Imprime a função de acordo com o número de entrada do usuário.
console.log(multiplier(num))

//Exercício 13: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números. 

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let counter = 0 //Contador para o número de entradas válidas.
let sum = 0 //Inicializa a soma total.
let num //Cria uma variável que armazenará o número atual de entrada.
let numbers = [] //Cria uma array para armazenar os números inseridos.

do {
        num = parseFloat(prompt('Digite um número com casas decimais: ')) //Permite a entrada do usuário e transforma em um número flutuante.

        //Se o número for inteiro, imprime uma mensagem de erro e não permite a entrada do valor até que tenha casas decimais.
        if (Number.isInteger(num)){
            console.error('Digite números válidos com casas decimais e diferente de 0.')
        } else {
        numbers.push(' ' + num) //Cria um espaço entre os valores e adiciona o número a array.
        sum += num //Soma os números.
        counter++ //Acrescenta um ao contador a cada valor válido de entrada.
        } 
     } while (num !== 0) //Interrompe as entradas e cálculos caso a entrada seja 0. 
        
    if (num === 0 && counter === 0) { //Se o número for igual a zero e o contador for zero, imprime uma mensagem de erro.
    console.error('Você interrompeu o código usando 0 antes de acrescentar números válidos.')
} else if (counter > 0) { //Permite que a média só seja calculada se o contador for diferente de zero.
    let average = sum / counter
    console.log(`A média aritmética dos números ${numbers} é igual a ${average.toFixed(2)}.`)
}



//Exercício 14: Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require('prompt-sync')() //Importa a biblioteca instalada
let num = Math.round(Number(prompt('Digite um número (caso necessário, use ponto para as casas decimais): '))) //Permite a entrada do usuário e transforma em um número arredondando-o.
let factorial = 1 //Define o primeiro valor do fatorial como 1 para que seja possível iniciar o cálculo.

if (num === 0 || num < 0) { //Verifica se o número é diferente de 0 e positivo.
    console.error('Você precisa colocar um número positivo e que não seja zero.')
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i //Multiplica e soma ao fatorial inicial até que o último múltiplo seja alcançado.
    }
    console.log (`O número ${num} possui como resultado fatorial ${factorial}.`)
}

//ou

const prompt = require('prompt-sync')()
let n = Math.round(Number(prompt('Digite um número (caso necessário, use ponto para as casas decimais): '))) //Permite a entrada do usuário e transforma em um número arredondado.
let n2 = 1 //Define o primeiro valor do cálculo.
let fatorial = 1 //Define o primeiro valor do fatorial de forma que seja possível calculá-lo.

if (n === 0 || n < 0){ //Verifica se o número é diferente de 0 e positivo.
    console.error("Você precisa definir um número positivo e que não seja zero.")
} else {
    while (n2 <= n){ //Enquanto o valor do múltiplo do fatorial for menor ou igual ao valor de entrada, realiza o cálculo.
        fatorial *= n2
        n2++
    }
    console.log(`O fatorial de ${n} é`, fatorial)
    }

//Exercício 15: Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

//Define uma função que gera uma sequência de fibonacci com n termos.
function fibonacci (n) {
    let numbers = [] //Cria um array para receber números.
    let num1 = 0 //Inicializa os dois primeiros termos.
    let num2 = 1
    numbers.push(num1) //Acrescenta os dois primeiros termos no array.
    numbers.push(num2)
    for (let i = 2; i < n; i++) { //Enquanto a condicional for menor que o número de termos, realiza o cálculo de fibonacci e acrescenta-o ao final do array.
        let nextNumber = num1 +  num2
        numbers.push(nextNumber)
        num1 = num2 //Transforma os valores de forma a dar sequência.
        num2 = nextNumber
    }
    return numbers //Retorna o array com os números da sequência.
} 

console.log(fibonacci(10)) //Imprime o array da sequência de fibonacci a partir do número de termos na função.