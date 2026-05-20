import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { usePageTransition } from './PageTransition';

interface HeaderProps {
    activePage: 'index' | 'projects' | 'about';
}

const navItems = [
    { to: '/', label: '01. INDEX', page: 'index' as const },
    { to: '/projects', label: '02. PROJECTS', page: 'projects' as const },
    { to: '/about', label: '03. ABOUT', page: 'about' as const },
];

const Header = ({ activePage }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { navigateWithTransition, isTransitioning } = usePageTransition();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
        e.preventDefault();
        // Don't navigate to current page or during transition
        if (to === location.pathname || isTransitioning) return;
        window.tactileFeedback?.playClickSound();
        setIsMenuOpen(false);
        navigateWithTransition(to);
    };

    return (
        <header className="sticky top-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-md border-b border-[#4a4a4a]">
            <div className="px-6 md:px-8 py-4 flex justify-between items-center">
                <a
                    href="/"
                    onClick={(e) => handleNavClick(e, '/')}
                    className="te-label font-bold text-[#f0f0f0] tracking-[0.2em] hover:text-[#ff6b1a] transition-colors"
                >
                    SYSTEM: 04.2
                </a>

                <nav className="hidden md:flex items-center gap-12 text-[10px] te-label font-bold">
                    {navItems.map((item) => (
                        <a
                            key={item.page}
                            href={item.to}
                            onClick={(e) => handleNavClick(e, item.to)}
                            className={
                                activePage === item.page
                                    ? 'text-[#ff6b1a] border-b border-[#ff6b1a] pb-1'
                                    : 'text-white/40 hover:text-[#f0f0f0] transition-colors'
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    
                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => {
                            window.tactileFeedback?.playClickSound();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        className="md:hidden te-button p-2 text-[10px] te-label font-bold border-[#4a4a4a] flex items-center justify-center min-w-[44px] min-h-[44px]"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <button
                        className="hidden md:flex te-button bg-[#ff6b1a] border-[#ff6b1a] text-white px-4 py-2 text-[10px] te-label font-bold items-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                    >
                        CONTACT <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown Panel */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0e0e0e] border-b border-[#4a4a4a] shadow-2xl flex flex-col p-6 gap-6 z-40 animate-[page-enter_250ms_ease-out] max-h-[calc(100dvh-73px)] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
                    <nav className="flex flex-col gap-2 text-[11px] te-label font-bold">
                        {navItems.map((item) => (
                            <a
                                key={item.page}
                                href={item.to}
                                onClick={(e) => {
                                    handleNavClick(e, item.to);
                                }}
                                className={`py-3 px-2 border-b border-white/5 flex justify-between items-center transition-colors min-h-[44px] ${
                                    activePage === item.page
                                        ? 'text-[#ff6b1a]'
                                        : 'text-white/40 hover:text-[#f0f0f0]'
                                }`}
                            >
                                <span>{item.label}</span>
                                {activePage === item.page && (
                                    <span className="text-[9px] px-1.5 py-0.5 bg-[#ff6b1a]/10 text-[#ff6b1a] border border-[#ff6b1a]/20 font-mono">
                                        ACTIVE
                                    </span>
                                )}
                            </a>
                        ))}
                    </nav>
                    <button
                        onClick={() => {
                            window.tactileFeedback?.playClickSound();
                            setIsMenuOpen(false);
                        }}
                        className="te-button bg-[#ff6b1a] border-[#ff6b1a] text-white px-4 py-3 text-[10px] te-label font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all w-full min-h-[44px]"
                    >
                        CONTACT <ArrowUpRight size={12} />
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
