import { useState, useEffect } from "react"

import '../Counter/Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`O contador mudou para: ${count}.`)
    }, [count])

    return (
        <div id="counter">
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1)
                    } else {
                        alert('O contador deve ser maior que zero (0)!')
                    }
                }}>
                Decrementar
            </button>
        </div>
    )
}

export default Counter
