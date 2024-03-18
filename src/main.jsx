import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AppContext } from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <AppContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContext> 
  </BrowserRouter>
)
