import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContex from './contaxt/contaxt';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContex>
      <App />
    </AppContex>
  </React.StrictMode>,
)
