import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SwissPortfolio from './SwissPortfolio'
import ProjectsPage from './ProjectsPage'
import AboutPage from './AboutPage'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SwissPortfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
