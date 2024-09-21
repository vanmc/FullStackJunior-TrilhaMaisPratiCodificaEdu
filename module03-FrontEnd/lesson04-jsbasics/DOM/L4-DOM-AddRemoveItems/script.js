let botaoAddItem = document.getElementById('botaoAddItem')
let botaoRemoveItem = document.getElementById('botaoRemoveItem')
let titulo = document.getElementById('titulo')
let notificacaoItem = document.getElementById('notificacaoItem')
let lista = document.getElementById('lista')
let n = 1

botaoAddItem.addEventListener('click', () => {
    let novoItem = document.createElement('li')
    n++
    novoItem.innerHTML = `Item ${n}`
    lista.appendChild(novoItem)
    notificacaoItem.innerHTML = "Novo item adicionado!"
    notificacaoItem.style.color = 'green'
    titulo.innerHTML = "Bem-vindo ao Manipulador de DOM!"
    titulo.style.color = 'black'
})

botaoRemoveItem.addEventListener('click', () => {
    if (lista.children.length > 0) {
        n--
        lista.removeChild(lista.lastElementChild)
        notificacaoItem.innerHTML = "Item removido!"
        notificacaoItem.style.color = 'red'
    } else {
        titulo.innerHTML = "Não há mais itens a serem removidos!"
        titulo.style.color = "rgba(183, 113, 248, 0.473)"
        n = 0
    }
    })

    // poderia ser também novoItem.innerHTML = `Item ${lista.children.lenght + 1}