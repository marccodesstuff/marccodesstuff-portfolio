import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SwissPortfolio from './SwissPortfolio'
import ProjectsPage from './ProjectsPage'
import AboutPage from './AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SwissPortfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
