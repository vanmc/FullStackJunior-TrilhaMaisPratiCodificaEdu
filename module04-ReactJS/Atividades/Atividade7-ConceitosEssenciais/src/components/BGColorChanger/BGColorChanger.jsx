import { useState, useEffect } from "react";

import '../BGColorChanger/BGColorChanger.css'


function BGColorChanger() {
    const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

    const [color, setColor] = useState(0)
    
    useEffect(() => {
        document.body.style.backgroundColor = color
        document.body.style.transition = "background-color 0.3s ease-in-out"
        console.log('A cor de fundo mudou!')
    }, [color])
    
    return (
        <div id="BGColorChanger">
            <h1>Cor: {color}</h1>
            <button onClick={() => setColor(randomColor)}>Mudar cor?</button>
        </div>
    )
}


export default BGColorChanger