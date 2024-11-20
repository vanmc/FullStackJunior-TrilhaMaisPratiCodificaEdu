import { useState, useEffect } from "react"
import './Timer.css'

function Timer() {
    // Estado para armazenar o tempo do temporizador
    const [time, setTime] = useState(0)
    
    // Estado para controlar se o temporizador está em execução
    const [isRunning, setIsRunning] = useState(true)

    // Atualiza o temporizador a cada segundo se estiver em execução
    useEffect(() => {
        let interval

        // Inicia o intervalo de 1 segundo se o temporizador estiver rodando
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        }

        // Limpa o intervalo quando o componente for desmontado ou se isRunning mudar
        return () => clearInterval(interval)
    }, [isRunning])

    // Função para reiniciar o temporizador
    function resetTimer() {
        setTime(0)
    }

    return (
        <div id="timer">
            <h1>⏱️ Temporizador</h1>
            <p>{time}</p>
            <div className="controls">
                {/* Mostra o botão de pausar ou continuar dependendo do estado */}
                {isRunning ? (
                    <button className="btnPause" onClick={() => setIsRunning(false)}>⏸️ Pausar</button>
                ) : (
                    <button className="btnContinue" onClick={() => setIsRunning(true)}>▶️ Continuar</button>
                )}
                {/* Botão para reiniciar o temporizador */}
                <button className="btnReset" onClick={resetTimer}>🔄 Reiniciar</button>
            </div>
        </div>
    )
}

export default Timer
