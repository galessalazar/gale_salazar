import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  BrowserRouter as Router } from 'react-router-dom'
import '/src/output.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/galessalazar/gale_salazar'>
        <App />

    
    </Router>
  </StrictMode>,
)
