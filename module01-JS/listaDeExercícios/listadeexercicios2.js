// Além de ter o NodeJs junto ao VSCode, é necessária a instalação no terminal do VSCode para funcionamento local da biblioteca prompt-sync do NodeJs: npm install prompt-sync;
// Copie todo esse arquivo e cole em um novo arquivo JavaScript (example.js) ou realize o seu download e abra-o no VSCode, selecionando a pasta ao qual ele está alocado e, em seguida, o arquivo;
// Para rodar localmente o código, instale a extensão no VSCode "Code Runner", selecione o código do exercício desejado e pressione o botão Run Code (ou Ctrl+Alt+N);
// Caso em algum momento o terminal pare de funcionar, exclua-o e inicie novamente pela extensão "Code Runner" para já executar o código desejado;
// As instruções e os códigos foram feitos em um S.O. Windows 10, teclado ABNT. Caso use algo diferente, faça as adaptações necessárias para conseguir rodar localmente os códigos.

// Exercício 1: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: 'BYD',
    modelo: 'Dolphin Mini',
    ano: '2024',
    cor: 'Verde'
}

// inicia um loop para iterar sobre as propriedades do objeto carro, usando info como variável que representa a chave/propriedade atual do objeto.
for (let info in carro){
        console.log(`${info}: ${carro[info]}.`)
    }


// Exercício 2: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "Mindhunter",
    autor: "John E. Douglas e Mark Olshaker",
    anoPublicacao: "2017 (tradução brasileira)",
    genero: 'Não-ficção',
}
// inicia um loop para iterar sobre as propriedades do objeto.
for (index in livro){
    //se as propriedades tiverem editora, define index como true, se não, false a cada propriedade.
    if (index === "editora") {
        index = true
    } else {
        index = false
    }
}

// Se a variável index for true, imprime uma mensagem. Se for false, imprime um erro e adiciona a propriedade editora e o seu  valor correspondente.
if (index === true){
    console.log('A informação editora está disponível.')
} else {
    console.error('A informação editora será adicionada.')
    livro.editora = 'Intrínseca'
}

// itera sobre as propriedades de livro e imprime cada uma e seu valor. 
for (dados in livro) {
    console.log(`${dados}: ${livro[dados]}.`)
}


// Exercício 3: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = [
    {nome: "PS1", valor: 1000.98}, {nome: "PS2", valor: 1850.00}, {nome: "PS3", valor: 2000.00}, {nome: "PS4", valor: 2599.90}
]

const prompt = require('prompt-sync')()

// loop para verificar se o valor inserido pelo usuário é um número e positivo.
let valorFiltro 
do {
    valorFiltro = Math.round(prompt('Digite o valor que deseja buscar: '))
    if (isNaN(valorFiltro) || valorFiltro < 0) {
        // se o valor de entrada não for um número ou for menor que 0, imprime uma mensagem de erro. 
        console.error("Digite um valor válido para busca.")
    }
} while (isNaN(valorFiltro) || valorFiltro < 0)
    
// função para filtrar os valores das propriedades do objeto.
function filtrarPropriedades () {
    let propriedadesFiltradas = [] // inicia um array para receber os produtos
    for (i in produto) { //itera sobre cada índice do produto.
        if (produto[i].valor >= valorFiltro) { // se o valor do produto for maior ou igual o valor do filtro do usuário, adiciona uma string ao array propriedadesFiltradas.
            propriedadesFiltradas.push (produto[i].nome + ', valor: ' + produto[i].valor)
        } 
    } 
    return propriedadesFiltradas
}

// chama a função e a armazena em uma novo array.
let produtosFiltrados = filtrarPropriedades()

// verifica se o array produtosFiltrados não está vazio, se não estiver, exibe no console. Se estiver, imprime uma mensagem de erro.
if (produtosFiltrados.length !== 0) {
    console.log(produtosFiltrados)
} else {
    console.error("Não há produtos com o valor mínimo buscado.")
} 
    
// Exercício 4: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    {nome: "Ana Silva", idade: 29, cidade: "São Paulo"},
    {nome: "Carlos Oliveira", idade: 34, cidade: "Rio de Janeiro"},
    {nome: "Mariana Costa", idade: 24, cidade: "Belo Horizonte"},
    {nome: "João Pereira", idade: 41, cidade: "Curitiba"},
    {nome: "Fernanda Almeida", idade: 30, cidade: "Porto Alegre"},
    {nome: "Lucas Santos", idade: 26, cidade: "Recife"},
    {nome: "Camila Rodrigues", idade: 22, cidade: "Salvador"},
    {nome: "Eduardo Lima", idade: 38, cidade: "Brasília"},
    {nome: "Isabela Fernandes", idade: 27, cidade: "Fortaleza"},
    {nome: "Ricardo Mendes", idade: 33, cidade: "Campinas"}
]

// acessa cada objeto individualmente dentro de uma array.
for (pessoa of pessoas) {
    // para cada objeto pessoa, imrpime uma string interpolada/template literals.
    console.log(`${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`)
}


// Exercício 5: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    {nome: "Alice Pereira", nota1: 8.5, nota2: 7.0},
    {nome: "Bruno Souza", nota1: 6.0, nota2: 9.0},
    {nome: "Carla Mendes", nota1: 7.5, nota2: 8.0},
    {nome: "Daniela Oliveira", nota1: 9.0, nota2: 8.5},
    {nome: "Eduardo Silva", nota1: 5.5, nota2: 6.5}
]

// itera sobre cada indice do array alunos, com posicaoAluno sendo a variável que representa o índice do array atual.
for (posicaoAluno in alunos){
    // acessa o objeto do aluno no índice atual e o armazena na variável aluno.
    let aluno = alunos[posicaoAluno]
    let media = (aluno.nota1 + aluno.nota2) / 2
    // após o calculo da média, adiciona o valor calculado como nova propriedade no objeto do aluno.
    aluno.media = media    
    }

// itera sobre cada objeto no array alunos, sendo aluno a variável que representa o aluno atual e exibe uma mensagem no console para cada objeto acessado.
for (aluno of alunos){
    console.log(`O aluno ${aluno.nome} possui notas ${aluno.nota1} e ${aluno.nota2} e média ${aluno.media}.`)
}


// Exercício 6: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    {nome: "Ana Silva", cargo: "Gerente de Projeto", salario: 11000 },
    {nome: "Pedro Oliveira", cargo: "Desenvolvedor Frontend", salario: 12000 },
    {nome: "Maria Santos", cargo: "Analista de Sistemas", salario: 9000 },
    {nome: "João Pereira", cargo: "Designer Gráfico", salario: 8000 },
    {nome: "Lucas Almeida", cargo: "Especialista em Marketing", salario: 14000 },
    {nome: "Laura Costa", cargo: "Assistente Administrativo", salario: 6000 },
    {nome: "Carlos Rodrigues", cargo: "Engenheiro de Software", salario: 18000 },
    {nome: "Fernanda Lima", cargo: "Coordenadora de Recursos Humanos", salario: 7000 },
    {nome: "Roberto Souza", cargo: "Analista de Dados", salario: 11500 },
    {nome: "Tatiane Martins", cargo: "Gerente de TI", salario: 20000 }
  ]

// usa o método map para criar um novo array com todos os salários.
let salarios = funcionarios.map(funcionarios => funcionarios.salario)
// determina o menor salário
let menorSalario = Math.min(...salarios)
// detertmina o maior salário
let maiorSalario = Math.max(...salarios)

const prompt = require('prompt-sync')()
let valorFiltro = Number(prompt('Digite o valor de sálario que deseja buscar: '))

// inicia uma variável como falsa para verificar se algum funcionário com o salário for encontrado.
let salarioEncontrado = false

// itera sobre cada funcionário no array.
for (funcionario of funcionarios){
    if (funcionario.salario >= valorFiltro){ // se o salario do funcionário for maior ou igual o valor do filtro, imprime uma mensagem e transforma a variável booleana em true.
        console.log(`O (a) funcionário (a) ${funcionario.nome}, que ocupa o cargo de ${funcionario.cargo}, possui salário de R$${funcionario.salario},00.`)
        salarioEncontrado = true
        }
}
if (salarioEncontrado === false) { //se nenhum funcionário maior ou igual ao filtro for encontrado, o salárioEncontrado permanecerá como false e, portanto, imprimirá uma mensagem de erro com as informações de mínimo e máximo salário.
    console.error(`Não existem funcionários com o salário buscado. O menor salário é de R$${menorSalario},00 e o maior salário é de R$${maiorSalario},00.`)
}


// Exercício 7: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    {nome: "Notebook", preco: 3500, desconto: 10},
    {nome: "Smartphone", preco: 1800, desconto: 15},
    {nome: "Televisão", preco: 2500, desconto: 8},
    {nome: "Cadeira Ergonomica", preco: 1200, desconto: 12},
    {nome: "Fone de Ouvido", preco: 400, desconto: 20},
    {nome: "Impressora", preco: 900, desconto: 5},
    {nome: "Teclado", preco: 150, desconto: 25},
    {nome: "Mouse", preco: 80, desconto: 30},
    {nome: "Monitor", preco: 1400, desconto: 10},
    {nome: "Webcam", preco: 300, desconto: 18}
]

// itera sobre cada produto no array produtos.
produtos.forEach(produto => {
    produto.novoDesconto = 10 // define o novo desconto como 10%.
    produto.novoPreco = produto.preco * (1 - (produto.novoDesconto / 100)) // calcula o novo valor.
    console.log(`O produto ${produto.nome} teve mais um desconto de 10% e agora custa R$${produto.novoPreco.toFixed(2)}.`) // imprime o nome do produto e seu novo valor.

})


// Exercício 8: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    {nome: 'Hércules', diretor: 'Ron Clements e john Musker' , anoLancamento: 1997},
    {nome: 'Livrando a Cara', diretor: 'Alice Wu', anoLancamento: 2004},
    {nome: 'As Panteras', diretor: 'Joseph McGinty Nichol', anoLancamento: 2000},
    {nome: 'A Criada', diretor: 'Park Chan-Wook', anoLancamento: 2016},
    {nome: 'Parasita', diretor: 'Bong Joon-Ho', anoLancamento: 2019},
    {nome: 'Mulan', diretor: 'Tony Bancroft e Barry Cook', anoLancamento: 1998},
    {nome: 'A Chegada', diretor: 'Denis Villeneuve', anoLancamento: 2016},
    {nome: 'A Origem', diretor: 'Christopher Nolan', anoLancamento: 2010},
    {nome: 'Os Homens que Não Amavam as Mulheres', diretor: 'David Fincher', anoLancamento: 2011},
    {nome: 'Missão Madrinha de Casamento', diretor: 'Paul Feig', anoLancamento: 2011},
]

// cria um array vazio para armazenar os nomes dos filmes.
let titulos = []

// itera sobre cada objeto no array filmes.
filmes.forEach (filmes  => {

    // adiciona o título ao array titulos
    titulos.push(filmes.nome)
})

console.log(titulos)

// Exercício 9: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    {nome: 'Ana Silva', idade: 28, cidade: 'São Paulo'},
    {nome: 'Carlos Oliveira', idade: 35, cidade: 'Rio de Janeiro'},
    {nome: 'Fernanda Costa', idade: 42, cidade: 'Belo Horizonte'},
    {nome: 'Gabriel Almeida', idade: 30, cidade: 'Porto Alegre'},
    {nome: 'Juliana Santos', idade: 25, cidade: 'Curitiba'},
    {nome: 'Lucas Pereira', idade: 33, cidade: 'Recife'},
    {nome: 'Mariana Lima', idade: 29, cidade: 'Salvador'},
    {nome: 'Pedro Fernandes', idade: 40, cidade: 'Fortaleza'},
    {nome: 'Roberta Menezes', idade: 31, cidade: 'Brasília'},
    {nome: 'Tiago Ribeiro', idade: 27, cidade: 'São Luís'}
] 

let age = 30 //Como o enunciado estipula essa idade, foi colocado uma nova variável para deixar clara a idade a ser buscada. Poderia ser também um prompt.
let clientesAcima = 0 // cria uma nova variável para armazenar os clientes filtrados.

// itera sobre cada objeto no array clientes.
clientes.forEach(cliente => {
    if (cliente.idade > age){ // se a idade de cada cliente for maior do que o filtro estipulado, imprime o objeto cliente do índice do momento e soma à variável criada.
        console.log(cliente)
        clientesAcima++       
    }
})

// se não houver nenhum cliente acima da idade buscada, imprime uma mensagem de erro. Caso tenha, imprime uma string com template literals.
if(clientesAcima === 0) {
    console.error('Não existem clientes com a idade buscada.')
} else {
    console.log(`Existem ${clientesAcima} cliente(s) acima da idade buscada de ${age} anos.`)
}


// Exercício 10: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    {produto: 'The Last of Us Part II', quantidade: 8, valor: 249.90},
    {produto: 'God of War', quantidade: 12, valor: 199.90},
    {produto: 'Spider-Man', quantidade: 15, valor: 179.90},
    {produto: 'Horizon Zero Dawn', quantidade: 10, valor: 169.90},
    {produto: 'Uncharted 4', quantidade: 5, valor: 189.90},
    {produto: 'Bloodborne', quantidade: 7, valor: 159.90},
    {produto: 'Ghost of Tsushima', quantidade: 6, valor: 229.90},
    {produto: 'Gran Turismo 7', quantidade: 4, valor: 269.90},
    {produto: 'Death Stranding', quantidade: 9, valor: 239.90},
    {produto: 'Days Gone', quantidade: 11, valor: 209.90}
]

let vendaTotal = 0 // cria uma variável para armazenar o valor total das vendas.

// itera sobre cada objeto da array vendas
vendas.forEach (venda => {
    //em cada objeto, adiciona-se o parâmetro valorVendas com o calculo das quantidades vezes o valor de cada produto.
    venda.valorVendas = venda.quantidade * venda.valor
    vendaTotal += venda.valorVendas // soma cada venda total do produto às vendas totais
})
console.log(vendas)
console.log(`O valor total das vendas foi de R$${vendaTotal.toFixed(2)}.`)


// Exercício 11: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    {nome: 'Ana Silva', produto: 'Picolé de Chocolate', quantidade: 10},
    {nome: 'Carlos Santos', produto: 'Picolé de Morango', quantidade: 5},
    {nome: 'Fernanda Oliveira', produto: 'Picolé de Manga', quantidade: 8},
    {nome: 'João Pereira', produto: 'Picolé de Limão', quantidade: 12},
    {nome: 'Mariana Costa', produto: 'Picolé de Coco', quantidade: 7},
    {nome: 'Pedro Lima', produto: 'Picolé de Framboesa', quantidade: 3},
    {nome: 'Ana Silva', produto: 'Picolé de Uva', quantidade: 6},
    {nome: 'Ricardo Fernandes', produto: 'Picolé de Abacaxi', quantidade: 9},
    {nome: 'Sandra Martins', produto: 'Picolé de Maracujá', quantidade: 4},
    {nome: 'Tiago Rocha', produto: 'Picolé de Baunilha', quantidade: 11},
    {nome: 'Carlos Santos', produto: 'Picolé de Chocolate', quantidade: 8},
    {nome: 'Fernanda Oliveira', produto: 'Picolé de Limão', quantidade: 5},
    {nome: 'João Pereira', produto: 'Picolé de Morango', quantidade: 7},
    {nome: 'Mariana Costa', produto: 'Picolé de Framboesa', quantidade: 3},
    {nome: 'Pedro Lima', produto: 'Picolé de Maracujá', quantidade: 6},
    {nome: 'Ana Silva', produto: 'Picolé de Coco', quantidade: 4},
    {nome: 'Ricardo Fernandes', produto: 'Picolé de Uva', quantidade: 10},
    {nome: 'Sandra Martins', produto: 'Picolé de Abacaxi', quantidade: 5},
    {nome: 'Tiago Rocha', produto: 'Picolé de Manga', quantidade: 7},
    {nome: 'Carlos Santos', produto: 'Picolé de Baunilha', quantidade: 2},
    {nome: 'Fernanda Oliveira', produto: 'Picolé de Chocolate', quantidade: 3}

]
let quantidadeCliente = {} //cria um objeto para armazenar os clientes e quantidades.

// itera sobre cada pedido para somar as quantidades/cliente.
pedidos.forEach(produto => {
    if (quantidadeCliente[produto.nome]) { // se o nome do cliente já existir, soma-se a quantidade de produtos ao cliente.
        quantidadeCliente[produto.nome] += produto.quantidade
    } else { //se o cliente não existir, cria uma nova somatória para ele.
        quantidadeCliente[produto.nome] = produto.quantidade
    }
})

console.log(quantidadeCliente)

// Exercício 12: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    {produto: 'Picolé de Chocolate', quantidade: 5, minimo: 10},
    {produto: 'Picolé de Morango', quantidade: 20, minimo: 15},   
    {produto: 'Picolé de Manga', quantidade: 12, minimo: 12},     
    {produto: 'Picolé de Limão', quantidade: 7, minimo: 8},       
    {produto: 'Picolé de Coco', quantidade: 15, minimo: 10},      
    {produto: 'Picolé de Framboesa', quantidade: 6, minimo: 5},   
    {produto: 'Picolé de Uva', quantidade: 8, minimo: 10},        
    {produto: 'Picolé de Abacaxi', quantidade: 22, minimo: 10},    
    {produto: 'Picolé de Maracujá', quantidade: 8, minimo: 8},
    {produto: 'Picolé de Baunilha', quantidade: 18, minimo: 15}
]

// itera sobre cada objeto da array
estoque.forEach(produto => {
    if (produto.quantidade < produto.minimo) { //se no objeto do indíce a quantidade for menor que o mínimo do parâmetro corresponde, cria um novo parâmetro que armazenará a nova quantidade duplicada.
        produto.quantidadeReabastecida = produto.quantidade * 2
    }
})

console.log(estoque)

// Exercício 13: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        {
            nome: "Arroz",
            quantidade: 2,
            precoUnitario: 6.00
        },
        {
            nome: "Feijao",
            quantidade: 1,
            precoUnitario: 8.00
        },
        {
            nome: "Creme de leite",
            quantidade: 5,
            precoUnitario: 3.00
        },
        {
            nome: "Leite condensado",
            quantidade: 2,
            precoUnitario: 4.00
        },
        {
            nome: "Oleo",
            quantidade: 1,
            precoUnitario: 7.00
        },
        {
            nome: "Macarrao",
            quantidade: 4,
            precoUnitario: 3.00
        }
    ]
}

let valorTotal = 0 // inicia uma variável para armazenar o valor total do carrinho.

// itera sobre cada objeto dentro da propriedade itens.
carrinho.itens.forEach(item => {
    // soma no valor total o valor de cada objeto/produto vezes o seu preço unitário. Interrompre a soma quando não há mais objetos na propriedade.
    valorTotal += item.quantidade * item.precoUnitario
})

console.log(`Valor total do carrinho: R$${valorTotal.toFixed(2)}.`)


// Exercício 14: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: [
                {nome: "Maria", cargo: "Gerente de RH"},
                {nome: "Carlos", cargo: "Assistente de RH"},
            ]
        },
        {
            nome: "Tecnologia da Informação",
            funcionarios: [
                {nome: "Joana", cargo: "Engenheira de Software"},
                {nome: "Marcelo", cargo: "Analista de Sistemas"}, 
                {nome: "Julia", cargo: "Especialista de Redes"}, 
            ]
        },
        {
            nome: "Financeiro",
            funcionarios: [
                {nome: "Mariana", cargo: "Contadora"},
                {nome: "Pedro", cargo: "Analista"},
                {nome: "Fernanda", cargo: "Coordenadora"},
            ]
        }
    ]
}

// itera sobre as chaves da propriedade departamentos.
for (index in empresa.departamentos) {
    let departamento = empresa.departamentos[index] // armazena o departamento atual.
    console.log(`Departamento: ${departamento.nome}`) // imprime o nome do departamento acessado atualmente.
    for (let funcionario of departamento.funcionarios) {
        console.log(`- Funcionário: ${funcionario.nome}; cargo: ${funcionario.cargo}.`) // para cada departamento acessado, imprime cada objeto da array funcionários.
    }
}


// Exercício 15: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
    {tipo: "entrada", valor: 1500}, {
        tipo: "entrada", valor: 251.66}, {tipo: "saida", valor: 489.22}, {tipo: "saida", valor: 23.44}, {tipo: "entrada", valor: 2.45}, {tipo: "saida",valor: 1222.49}, {tipo: "entrada", valor: 233.45}, {tipo: "saida",valor: 55}, {tipo: "entrada", valor: 44.34}
]

let valorFinal = 0 // cria uma variável para armazenar o valor total final.
let entradasTotais = 0 // cria uma variável para armazenar todas as entradas.
let saidasTotais = 0 // cria uma variável para armazenar todas as saídas.

// itera sobre cada transação.
transacoes.forEach(movimentacao => {
    if(movimentacao.tipo === "entrada") { //faz a soma da entrada ou saída linha a linha.
        entradasTotais += movimentacao.valor
    } else {
        saidasTotais += movimentacao.valor
    }
})

// calcula o valor final.
valorFinal = entradasTotais - saidasTotais

console.log(`O valor final de todas as transações é igual a R$${valorFinal.toFixed(2)}.`)
