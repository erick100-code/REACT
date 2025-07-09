import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(// fazendo a inserção no html por meio de javaScript 
  <StrictMode>
    <App />
  </StrictMode>,
)// SPA = SINGLE PAGE APLICATION é uma aplicação em que o conteúdo html é vazio e o conteúdo é inserido por meio de javaScript (react) 

// a gente diz para o raect criar nossa aplicação react(createRoot), diz para renderizar nossa aplicação react (.render) dentro do elemento com id='rooot'