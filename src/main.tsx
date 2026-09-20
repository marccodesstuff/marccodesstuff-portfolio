import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tactile-grid.css' // Import CSS Grid System
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
