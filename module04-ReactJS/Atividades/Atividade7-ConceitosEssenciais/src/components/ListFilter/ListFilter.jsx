import { useEffect, useState } from "react"
import './ListFilter.css'

function ListFilter() {
  const [filter, setFilter] = useState('')
  const [names, setNames] = useState([])

  useEffect(() => {
    async function fetchNames() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=25&nat=br")
        const data = await response.json()
        const namesList = data.results.map((user) => user.name.first)
        setNames(namesList)
      } catch (error) {
        alert('Erro ao buscar os nomes.', error)
      }
    }

    fetchNames()
  }, [])

  const filteredNames = names.filter((name) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div id="nameFilter">
      <h1>Filtro de Lista:</h1>
      <input
        className="filterName"
        type="text"
        value={filter}
        onChange={(i) => setFilter(i.target.value)}
        placeholder="Digite o nome que deseja buscar... 🔍"
      />
      <div className="list">
        {filteredNames.length === 0 ? (
          <li className="nameNotFound">Nome não encontrado, tente novamente!</li>
        ) : (
          filteredNames.map((name, index) => (
            <li className="showNames" key={index}>{name}</li>
          ))
        )}
      </div>
    </div>
  )
}

export default ListFilter
