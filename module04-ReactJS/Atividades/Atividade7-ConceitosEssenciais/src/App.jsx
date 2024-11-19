import * as React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'

import CounterPage from './pages/CounterPage'
import BGColorChangerPage from './pages/BGColorChangerPage'
import ToDoListPage from './pages/ToDoListPage'
import TimerPage from './pages/TimerPage'
import ListFilterPage from './pages/ListFilterPage'
import RegistrationFormPage from './pages/RegistrationFormPage'

import './App.css'

function Navigation() {
  const location = useLocation() // Hook para acessar a localização atual

  return (
    <nav>
      <ul>
        <li id='one' className={location.pathname === '/Counter' ? 'active' : ''}>
          <Link to="/Counter">Contador Simples</Link>
        </li>
        <li id='two' className={location.pathname === '/BGColorChanger' ? 'active' : ''}>
          <Link to="/BGColorChanger">Alteração de Cor de Fundo</Link>
        </li>
        <li id='three' className={location.pathname === '/ToDoList' ? 'active' : ''}>
          <Link to="/ToDoList">Lista de Tarefas</Link>
        </li>
        <li id='four' className={location.pathname === '/Timer' ? 'active' : ''}>
          <Link to="/Timer">Temporizador</Link>
        </li>
        <li id='five' className={location.pathname === '/ListFilter' ? 'active' : ''}>
          <Link to="/ListFilter">Filtro de Lista</Link>
        </li>
        <li id='six' className={location.pathname === '/RegistrationForm' ? 'active' : ''}>
          <Link to="/RegistrationForm">Formulário de Registro Simples</Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Navigation /> {/* o elemento navigation precisa estar junto ao router */}
      <main>
        <Routes>
          <Route path="/Counter" element={<CounterPage />} />
          <Route path="/BGColorChanger" element={<BGColorChangerPage />} />
          <Route path="/ToDoList" element={<ToDoListPage />} />
          <Route path="/Timer" element={<TimerPage />} />
          <Route path="/ListFilter" element={<ListFilterPage />} />
          <Route path="/RegistrationForm" element={<RegistrationFormPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
