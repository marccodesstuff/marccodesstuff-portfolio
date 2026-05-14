import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout activePage="index"><HomePage /></MainLayout>} />
        <Route path="/projects" element={<MainLayout activePage="projects"><ProjectsPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout activePage="about"><AboutPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
