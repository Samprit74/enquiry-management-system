import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'   // ✅ make sure App.jsx is in the same folder as this file
import 'sweetalert2/src/sweetalert2.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
