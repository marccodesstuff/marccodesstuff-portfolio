import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SwissPortfolio from './SwissPortfolio'
import ProjectsPage from './ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SwissPortfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
