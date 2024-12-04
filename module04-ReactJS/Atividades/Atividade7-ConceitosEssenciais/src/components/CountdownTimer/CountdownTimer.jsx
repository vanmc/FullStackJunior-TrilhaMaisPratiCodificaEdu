import React, { useState, useEffect } from "react"
import "./CountdownTimer.css"

const CountdownTimer = () => {
  const [time, setTime] = useState(0)
  const [inputTime, setInputTime] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    } else if (time === 0 && isRunning) {
      alert("O tempo acabou!")
      setIsRunning(false)
    }

    return () => clearInterval(timer)
  }, [time, isRunning])

  const handleStart = () => {
    if (inputTime > 0) {
      setTime(parseInt(inputTime, 10))
      setInputTime("")
      setIsRunning(true)
    }
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
    setInputTime("")
  }

  return (
    <div className="timer-container">
      <h1>Timer com Intervalo</h1>
      <div className="timer-display">
        {String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </div>
      <div className="timer-input">
        <input
          type="number"
          placeholder="Digite os segundos"
          value={inputTime}
          onChange={e => setInputTime(e.target.value)}
          disabled={isRunning}
        />
        <button onClick={handleStart} disabled={isRunning || inputTime === ""}>
          Iniciar
        </button>
      </div>
      <div className="timer-controls">
        <button onClick={handlePause} disabled={!isRunning}>
          Pausar
        </button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  )
}

export default CountdownTimer
