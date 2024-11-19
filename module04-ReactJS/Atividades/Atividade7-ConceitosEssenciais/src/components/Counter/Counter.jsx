import { useState, useEffect } from "react"

import '../Counter/Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    // Efeito para registrar no console sempre que o contador mudar
    useEffect(() => {
        console.log(`O contador mudou para: ${count}.`)
    }, [count]) // Dependência no count, o efeito é acionado sempre que o valor de count muda

    return (
        <div id="counter">
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button
                onClick={() => {
                    // Verifica se o contador é maior que 0 antes de decrementar
                    if (count > 0) {
                        setCount(count - 1)
                    } else {
                        alert('O contador deve ser maior que zero (0)!') // Exibe um alerta se o contador for 0 ou menor
                    }
                }}>
                Decrementar
            </button>
        </div>
    )
}

export default Counter
