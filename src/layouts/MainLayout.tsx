import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
    activePage: 'index' | 'projects' | 'about';
    children: ReactNode;
    showFooter?: boolean;
}

const MainLayout = ({ activePage, children, showFooter = true }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-te-bg text-te-fg font-sans selection:bg-te-accent selection:text-white">
            <Header activePage={activePage} />
            {children}
            {showFooter && <Footer />}
        </div>
    );
};

export default MainLayout;
