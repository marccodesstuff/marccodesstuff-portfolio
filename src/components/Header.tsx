import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    activePage: 'index' | 'projects' | 'about';
}

const navItems = [
    { to: '/', label: '01. INDEX', page: 'index' as const },
    { to: '/projects', label: '02. PROJECTS', page: 'projects' as const },
    { to: '/about', label: '03. ABOUT', page: 'about' as const },
];

const Header = ({ activePage }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center bg-te-bg/90 backdrop-blur-md border-b border-te-border">
            <Link to="/" className="te-label font-bold text-te-fg tracking-[0.2em] hover:text-te-accent transition-colors">SYSTEM: 04.2</Link>

            <nav className="hidden md:flex items-center gap-12 text-[10px] te-label font-bold">
                {navItems.map((item) => (
                    <Link
                        key={item.page}
                        to={item.to}
                        className={
                            activePage === item.page
                                ? 'text-te-accent border-b border-te-accent pb-1'
                                : 'text-te-muted hover:text-te-fg transition-colors'
                        }
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                    href="mailto:velasquezmarcvictor@gmail.com"
                    className="te-button bg-te-accent border-te-accent text-white px-4 py-2 text-[10px] te-label font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                >
                    CONTACT <ArrowUpRight size={12} />
                </a>
            </div>
        </header>
    );
};

export default Header;
