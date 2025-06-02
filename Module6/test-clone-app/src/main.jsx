import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// This code in main.jsx handles rendering the App component
// into the DOM element with an id of 'root' (in index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* All routing components need this to work */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
) 
