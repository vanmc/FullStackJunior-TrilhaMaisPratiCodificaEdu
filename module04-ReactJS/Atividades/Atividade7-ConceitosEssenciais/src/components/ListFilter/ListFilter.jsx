import { useEffect, useState } from "react"
import './ListFilter.css'

function ListFilter() {
    const [filter, setFilter] = useState('') // Estado para armazenar o texto do filtro
    const [names, setNames] = useState([]) // Estado para armazenar a lista de nomes

    useEffect(() => {
        // Função assíncrona para buscar os nomes
        async function fetchNames() {
            try {
                const response = await fetch("https://randomuser.me/api/?results=25&nat=br") // Faz a requisição à API
                const data = await response.json() // Converte a resposta para JSON

                // Mapeia os resultados para extrair os nomes
                const namesList = data.results.map((user) => user.name.first)
                setNames(namesList) // Atualiza o estado com os nomes obtidos
            } catch (error) {
                alert('Erro ao buscar os nomes.', error) // Exibe um alerta em caso de erro
            }
        }

        fetchNames() // Chama a função para buscar os nomes quando o componente for montado
    }, []) // O array vazio garante que o efeito só será executado uma vez (quando o componente for montado)

    // Filtra os nomes com base no texto do filtro
    const filteredNames = names.filter((name) => name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div id="nameFilter">
            <h1>Filtro de Lista:</h1>
            <input 
                className="filterName" 
                type="text" 
                value={filter} 
                onChange={(i) => setFilter(i.target.value)} // Atualiza o estado do filtro com o valor digitado
                placeholder="Digite o nome que deseja buscar... 🔍" 
            />
            <div className="list">
                {filteredNames.length === 0 ? ( // Verifica se a lista filtrada está vazia
                    <li className="nameNotFound">Nome não encontrado, tente novamente!</li> // Exibe mensagem caso nenhum nome seja encontrado
                ) : (
                    filteredNames.map((name, index) => ( // Exibe a lista de nomes filtrados
                        <li className="showNames" key={index}>{name}</li>
                    ))
                )}
            </div>
        </div>
    )
}

export default ListFilter
