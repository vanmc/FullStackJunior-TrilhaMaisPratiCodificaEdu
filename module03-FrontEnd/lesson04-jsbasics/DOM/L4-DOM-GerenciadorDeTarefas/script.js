// Seleciona o elemento da lista de tarefas pelo ID 'task-list'
let taskList = document.getElementById('task-list')
// Seleciona o campo de entrada de texto pelo ID 'task-input'
let taskInput = document.getElementById('task-input')
// Seleciona o botão de adicionar tarefa pelo ID 'add-task-btn'
let addTaskBtn = document.getElementById('add-task-btn')

// Seleciona todos os botões de filtro com a classe 'filter-btn'
let filters = document.querySelectorAll('.filter-btn')

// Adiciona um evento de clique ao botão de adicionar tarefa
addTaskBtn.addEventListener('click', () => {
    // Obtém o texto da entrada, removendo espaços em branco
    let taskText = taskInput.value.trim()

    // Verifica se o texto da tarefa não está vazio
    if (taskText) {
        // Cria um novo elemento de tarefa
        let li = createTaskElement(taskText)

        // Adiciona o novo elemento de tarefa à lista
        taskList.appendChild(li)

        // Limpa o campo de entrada
        taskInput.value = ''
    }
})

// Função que cria um elemento de lista para uma tarefa
function createTaskElement(text) {
    // Cria um novo elemento <li>
    let li = document.createElement('li')

    // Define o conteúdo do <li> como o texto da tarefa
    li.textContent = text

    // Cria um botão de remover
    let removeBtn = document.createElement('span')
    removeBtn.textContent = 'Remover' // Define o texto do botão
    removeBtn.classList.add('remove-btn') // Adiciona uma classe ao botão

    // Adiciona um evento de clique que remove o elemento <li>
    removeBtn.addEventListener('click', () => li.remove())

    // Adiciona o botão de remover ao elemento <li>
    li.appendChild(removeBtn)

    // Cria um botão de editar
    let editBtn = document.createElement('span')
    editBtn.textContent = 'Editar' // Define o texto do botão
    editBtn.classList.add('edit-btn') // Adiciona uma classe ao botão

    // Adiciona um evento de clique que chama a função de edição
    editBtn.addEventListener('click', () => editTask(li))

    // Adiciona o botão de editar ao elemento <li>
    li.appendChild(editBtn)

    // Adiciona um evento de clique ao <li> para marcar a tarefa como concluída
    li.addEventListener('click', () => {
        if (!li.classList.contains('editing')) {
            li.classList.toggle('completed') // Alterna a classe 'completed'
        }
    })

    // Retorna o elemento <li> criado
    return li
}

// Função para editar uma tarefa
function editTask(li) {
    // Verifica se a tarefa não está sendo editada
    if (!li.classList.contains('editing')) {
        li.classList.add('editing') // Adiciona a classe 'editing'

        // Cria um campo de entrada para edição
        let input = document.createElement('input')
        input.type = 'text' // Define o tipo do input como texto
        input.value = li.firstChild.textContent // Define o valor do input como o texto da tarefa

        // Substitui o texto da tarefa pelo campo de entrada
        li.firstChild.replaceWith(input)

        // Adiciona um evento de perda de foco ao campo de entrada
        input.addEventListener('blur', () => {
            li.classList.remove('editing') // Remove a classe 'editing'

            // Obtém o novo texto, removendo espaços em branco
            let newText = input.value.trim()

            // Se o novo texto não estiver vazio, substitui o campo de entrada pelo texto
            if (newText) {
                input.replaceWith(document.createTextNode(newText))
            } else {
                li.remove() // Remove a tarefa se o texto estiver vazio
            }
        })

        input.focus() // Define o foco no campo de entrada
    }
}

// Adiciona eventos de clique a cada botão de filtro
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove a classe 'active-filter' de todos os filtros
        filters.forEach(f => f.classList.remove('active-filter'))
        // Adiciona a classe 'active-filter' ao filtro clicado
        filter.classList.add('active-filter')

        // Obtém o tipo de filtro com base no ID do botão
        let filterType = filter.id
        let allTasks = taskList.querySelectorAll('li') // Seleciona todas as tarefas

        // Filtra as tarefas com base no tipo de filtro selecionado
        allTasks.forEach(task => {
            switch (filterType) {
                case 'filter-all':
                    task.style.display = '' // Exibe todas as tarefas
                    break
                case 'filter-completed':
                    // Exibe apenas as tarefas concluídas
                    task.style.display = task.classList.contains('completed') ? '' : 'none'
                    break
                case 'filter-not-completed':
                    // Exibe apenas as tarefas não concluídas
                    task.style.display = task.classList.contains('completed') ? 'none' : ''
                    break
            }
        })
    })
})
