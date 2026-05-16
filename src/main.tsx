import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tactile-init' // Import Three.js + GSAP initialization
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
