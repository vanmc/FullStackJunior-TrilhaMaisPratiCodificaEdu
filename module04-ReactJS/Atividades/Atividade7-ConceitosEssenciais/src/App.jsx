import * as React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'

import CounterPage from './pages/CounterPage'
import BGColorChangerPage from './pages/BGColorChangerPage'
import ToDoListPage from './pages/ToDoListPage'
import TimerPage from './pages/TimerPage'
import ListFilterPage from './pages/ListFilterPage'
import RegistrationFormPage from './pages/RegistrationFormPage'
import DataFetcherPage from './pages/DataFetcherPage'
import ImageGalleryPage from './pages/ImageGalleryPage'
import CountdownTimerPage from './pages/CountdownTimerPage'
import TabsPage from './pages/TabsPage'

import './App.css'

function Navigation() {
  const location = useLocation() // Hook para acessar a localização atual, permitindo o uso do css active

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
        <li id='seven' className={location.pathname === '/DataFetcher' ? 'active' : ''}><Link to="/DataFetcher">Aplicação de Requisição de Dados Simples</Link></li>
        <li id='eight' className={location.pathname === '/ImageGallery' ? 'active' : ''}><Link to="/ImageGallery">Galeria de Imagens</Link></li>
        <li id='nine' className={location.pathname === '/CountdownTimer' ? 'active' : ''}><Link to="/CountdownTimer">Timer com Intervalo e Alerta</Link></li>
        <li id='ten' className={location.pathname === '/Tabs' ? 'active' : ''}><Link to="/Tabs">Tabs Navegáveis</Link></li>
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
          <Route path="/DataFetcher" element={<DataFetcherPage />} />
          <Route path="/ImageGallery" element={<ImageGalleryPage />} />
          <Route path="/CountdownTimer" element={<CountdownTimerPage />} />
          <Route path="/Tabs" element={<TabsPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
