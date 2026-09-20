import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CursorGlow from '../components/CursorGlow';

interface MainLayoutProps {
    activePage: 'index' | 'projects' | 'about';
    children: ReactNode;
    showFooter?: boolean;
}

const MainLayout = ({ activePage, children, showFooter = true }: MainLayoutProps) => {
    return (
        <div className="relative z-0 min-h-screen bg-te-bg text-te-fg font-sans selection:bg-te-accent selection:text-white">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:px-4 focus:py-2.5 focus:bg-[#ff6b1a] focus:text-[#0e0e0e] focus:text-xs focus:font-semibold focus:rounded-sm"
            >
                Skip to main content
            </a>
            <div className="tactile-grid-overlay" />
            <CursorGlow />
            <Header activePage={activePage} />
            <main id="main-content" tabIndex={-1}>
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
};

export default MainLayout;
