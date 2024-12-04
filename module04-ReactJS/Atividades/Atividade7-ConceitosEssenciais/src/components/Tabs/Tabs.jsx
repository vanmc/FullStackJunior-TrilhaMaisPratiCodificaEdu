import React, { useState } from "react"
import "./Tabs.css"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("sobre")

  const renderContent = () => {
    switch (activeTab) {
      case "sobre":
        return (
          <div className="tab-content">
            <h2>Oi Oi!</h2>
            <p>
              Meu nome é Vanessa, tenho 26 anos e estou correndo atrás de uma transição de carreira para a área de programação e tecnologia! Já sou Bacharela em Educação Física pela UFMG e agora sou estudante de Engenharia de Software. Tenho criado muito gosto pela área de FrontEnd e espero poder me desenvolver como profissional dela.
            </p>
          </div>
        )
      case "github":
        return (
          <div className="tab-content">
            <a href="https://github.com/vanmc" target="_blank">Meu GitHub!</a>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "sobre" ? "active" : ""}`}
          onClick={() => setActiveTab("sobre")}
        >
          Sobre
        </button>
        <button
          className={`tab ${activeTab === "github" ? "active" : ""}`}
          onClick={() => setActiveTab("github")}
        >
          GitHub
        </button>
      </div>
      {renderContent()}
    </div>
  )
}

export default Tabs
