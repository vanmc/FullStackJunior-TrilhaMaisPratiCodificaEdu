import { useState, useEffect } from "react"
import './ToDoList.css'

function ToDoList() {
    // Recupera as tarefas do localStorage, ou inicia com um array vazio se não houver tarefas salvas
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(savedTasks)
    const [task, setTask] = useState('')
    const [filter, setFilter] = useState('all')

    // Função que salva as tarefas no localStorage sempre que elas mudam
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    // Adiciona uma nova tarefa
    function addTask() {
        // Verifica se a tarefa está vazia antes de adicionar
        if (task.trim() === '') {
            alert('A tarefa não pode ser enviada vazia, por favor, preencha-a corretamente!')
            return
        }
        const newTask = { text: task, completed: false }
        setTasks([...tasks, newTask])
        setTask('') // Limpa o campo de input após adicionar
    }

    // Marca ou desmarca uma tarefa como concluída
    function toggleTaskCompletion(index) {
        const updatedTasks = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        )
        setTasks(updatedTasks)
    }

    // Remove uma tarefa
    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    // Confirmação antes de remover uma tarefa
    const confirmDelete = (index) => {
        const confirmation = window.confirm("Você realmente deseja deletar essa tarefa da sua lista?")
        if (confirmation) {
            removeTask(index)
            alert("Tarefa removida com sucesso!")
        } else {
            alert("A tarefa não foi excluída!")
        }
    }

    // Filtra tarefas com base no estado do filtro
    const filteredTasks = tasks.filter((t) => {
        if (filter === 'all') return true
        if (filter === 'pending') return !t.completed
        if (filter === 'completed') return t.completed
        return true
    })

    return (
        <div id="ToDoList">
            <h1>Lista de Tarefas:</h1>
            <div className="taskInput">
                <input
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="Nova tarefa:"
                />
                <button className="addTask" onClick={addTask}>Adicionar</button>
            </div>

            <div className="tasksDisplay">
                <div className="filters">
                    <button className="filterAll" onClick={() => setFilter('all')}>🔎 Todas</button>
                    <button className="filterAll" onClick={() => setFilter('pending')}>⚠️ Pendentes</button>
                    <button className="filterAll" onClick={() => setFilter('completed')}>🎉 Feitas</button>
                </div>
                <ul className="tasks">
                    {/* Exibe as tarefas filtradas */}
                    {filteredTasks.map((t, index) => (
                        <li id="tasksList" key={index} className={t.completed ? 'completed' : ''}>
                            <span onClick={() => toggleTaskCompletion(index)}>{t.text}</span>
                            <button className="deleteTask" onClick={() => confirmDelete(index)}>🗑️ </button>
                            <button className="completedTask" onClick={() => toggleTaskCompletion(index)}>
                                {t.completed ? "❌" : "✔️"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList
