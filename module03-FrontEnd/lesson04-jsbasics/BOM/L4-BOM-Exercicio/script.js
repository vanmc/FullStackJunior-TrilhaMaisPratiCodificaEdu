let text = document.getElementById('texto')
let btnStart = document.getElementById('btnStart')
let btnChange = document.getElementById('btnChange')
let number = 0 // Variável global para manter a contagem
let countingInterval
let counter // Variável para armazenar o elemento do contador
let btnStop // Variável para armazenar o botão de interromper
let btnClean // Variável para armazenar o botão de limpar

let textos = [
    'Agora aqui há um novo texto!',
    'Opa, texto diferente!',
    'E aí, mais uma frase aqui!',
    'Olha só, um texto a mais!',
    'Surpresa! Mais um texto para você!',
    'Atenção, texto novo na área!',
    'Chegou mais um texto interessante!',
    'Aqui está outro texto para você!',
    'Mais um texto para alegrar o dia!'
]

// Seleciona a div container
const container = document.getElementById('container')

function randomText() {
    let randomIndex = Math.floor(Math.random() * textos.length)
    return textos[randomIndex]
}

function changeText() {
    setTimeout(() => {
        text.innerHTML = randomText()
        text.style.color = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')
    }, 3000)
}

function startCounting() {
    // Se o contador já existir, não faz nada
    if (countingInterval) return

    // Cria o elemento de contador se não existir
    if (!counter) {
        counter = document.createElement('p')
        counter.classList.add('pCounter')
        container.appendChild(counter) // Adiciona o contador à div container
    }

    countingInterval = setInterval(() => {
        counter.innerHTML = `${number}`
        number++
    }, 1000)

    // Cria o botão de parar se ainda não existir
    if (!btnStop) {
        btnStop = document.createElement('button')
        btnStop.classList.add('btnStop') // Adiciona a classe corretamente
        btnStop.innerHTML = 'Interromper contador'
        container.appendChild(btnStop) // Adiciona o botão à div container

        // Adiciona o evento de clique ao botão de parar
        btnStop.addEventListener('click', stopCounting)
    }

    btnStart.innerHTML = 'Contando...' // Atualiza o texto do botão de iniciar
}

function stopCounting() {
    if (countingInterval) {
        clearInterval(countingInterval)
        countingInterval = null // Reseta o intervalo
        btnStart.innerHTML = 'Continuar contagem' // Alterado

        // Remove o botão de limpar se existir
        if (btnClean) {
            container.removeChild(btnClean)
            btnClean = null // Limpa a referência
        }

        // Cria o botão de limpar contador
        if (number > 0) {
            btnClean = document.createElement('button')
            btnClean.innerHTML = 'Limpar contador?'
            btnClean.classList.add('btnClean')
            container.appendChild(btnClean) // Adiciona o botão à div container
            
            btnClean.addEventListener('click', () => {
                // Limpa o conteúdo do contador
                counter.innerHTML = ''
                number = 0 // Reseta a contagem
                
                // Reseta o botão de iniciar para "Iniciar contador"
                btnStart.innerHTML = 'Iniciar contador' 

                // Remove o botão de parar
                if (btnStop) {
                    container.removeChild(btnStop)
                    btnStop = null // Limpa a referência
                }

                // Remove o botão de limpar
                container.removeChild(btnClean) 
                btnClean = null // Limpa a referência
            })
        }
    }
}

// Adiciona o evento de clique ao botão de iniciar
btnStart.addEventListener('click', startCounting)

// Função para redirecionar a página
function redirectTo(url) {
    window.location.href = url
}