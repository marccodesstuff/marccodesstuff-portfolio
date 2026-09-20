import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectsArchivePage from './pages/ProjectsArchivePage'
import AboutPage from './pages/AboutPage'
import PageTransition from './components/PageTransition'

const SITE_URL = 'https://marcvelasquez.appwrite.network'

const SITE_NAME = 'Marc Victor Velasquez'
const PAGE_TITLES: Record<string, string> = {
  '/': `${SITE_NAME} — AI & Automation Engineer`,
  '/projects': `Projects — ${SITE_NAME}`,
  '/projects/archive': `Project Archive — ${SITE_NAME}`,
  '/about': `About — ${SITE_NAME}`,
}

// Inner component that has access to router context
const AppRoutes = () => {
  const location = useLocation()
  const lastPath = useRef(location.pathname)

  // Client-side navigation doesn't reload the page, so update the title and move keyboard / screen reader
  // focus to the new page's heading. The initial load is left alone so the skip link stays the first tab stop.
  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? PAGE_TITLES['/']
    if (lastPath.current === location.pathname) return
    lastPath.current = location.pathname
    const heading = document.querySelector<HTMLElement>('main h1')
    heading?.setAttribute('tabindex', '-1')
    heading?.focus({ preventScroll: true })
  }, [location.pathname])

  // index.html is shared by every route, so keep canonical / og:url in step with the current page.
  useEffect(() => {
    const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '')
    const url = SITE_URL + path
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    document.head.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
  }, [location.pathname])

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout activePage="index" showFooter={false}><HomePage /></MainLayout>} />
        <Route path="/projects" element={<MainLayout activePage="projects"><ProjectsPage /></MainLayout>} />
        <Route path="/projects/archive" element={<MainLayout activePage="projects"><ProjectsArchivePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout activePage="about"><AboutPage /></MainLayout>} />
      </Routes>
    </PageTransition>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
