// Seleção de elementos
const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

// Carrega tarefas do localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach(task => displayTask(task))
}

// Exibe uma tarefa na lista
function displayTask(task) {
    const taskItem = document.createElement('li')
    taskItem.className = `task-item ${task.completed ? 'completed' : ''}`
    taskItem.innerHTML = `
        <span class="task-text">${task.text}</span>
        <div class="task-buttons">
            <button onclick="toggleComplete('${task.id}')" class="btnComplete">${task.completed ? 'Desconcluir' : 'Concluir'}</button> 
            <button onclick="editTask('${task.id}')" class="btnEdit">Editar</button>
            <button onclick="deleteTask('${task.id}')" class="btnDelete">Excluir</button>
        </div>
    `
    taskList.appendChild(taskItem)
}

// Adiciona uma nova tarefa
function addTask() {
    const text = taskInput.value.trim()
    if (text) {
        const task = { id: Date.now().toString(), text, completed: false }
        displayTask(task)
        saveTask(task)
        taskInput.value = ''
    } else {
        Swal.fire({
            icon: "error",
            title: "Atenção",
            text: "Preencha com uma tarefa, por favor!"
        })
    }
}

// Salva a tarefa no localStorage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Alterna o status de conclusão da tarefa
function toggleComplete(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const task = tasks.find(task => task.id === id)
    if (task) {
        task.completed = !task.completed
        localStorage.setItem('tasks', JSON.stringify(tasks))
        refreshTasks()
    }
}

// Edita uma tarefa existente
function editTask(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const task = tasks.find(task => task.id === id)
    if (task) {
        const newText = prompt('Edit Task:', task.text)
        if (newText !== null) {
            task.text = newText
            localStorage.setItem('tasks', JSON.stringify(tasks))
            refreshTasks()
        }
    }
}

// Exclui uma tarefa
function deleteTask(id) {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Essa tarefa será excluída!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
        if (result.isConfirmed) {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || []
            tasks = tasks.filter(task => task.id !== id)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            refreshTasks()
            Swal.fire('Excluído!', 'Sua tarefa foi excluída.', 'success')
        }
    })
}

// Atualiza a lista de tarefas exibida
function refreshTasks() {
    taskList.innerHTML = ''
    loadTasks()
}

// Carrega tarefas ao iniciar
loadTasks()


// Utilizada a bibliteca SweetAlert2 para alterar o formato do alert exibido para um mais "bonitinho". Disponível em: https://sweetalert2.github.io/ 