import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePageTransition } from './PageTransition';

interface HeaderProps {
    activePage: 'index' | 'projects' | 'about';
}

const navItems = [
    { to: '/', label: 'Home', number: '01', page: 'index' as const },
    { to: '/projects', label: 'Projects', number: '02', page: 'projects' as const },
    { to: '/about', label: 'About', number: '03', page: 'about' as const },
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
        <header className="sticky top-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-md border-b border-[#333333]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-3.5 flex justify-between items-center">
                <a
                    href="/"
                    onClick={(e) => handleNavClick(e, '/')}
                    className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#f0f0f0] hover:text-[#ff6b1a] transition-colors"
                >
                    <span className="w-2 h-2 rounded-full bg-[#ff6b1a] inline-block animate-pulse" />
                    <span className="font-mono text-xs text-white/50">MARC VICTOR</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-white/70">PORTFOLIO</span>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-xs font-medium">
                    {navItems.map((item) => (
                        <a
                            key={item.page}
                            href={item.to}
                            onClick={(e) => handleNavClick(e, item.to)}
                            className={`flex items-center gap-1.5 transition-colors py-1 ${
                                activePage === item.page
                                    ? 'text-[#ff6b1a] border-b-2 border-[#ff6b1a] font-semibold'
                                    : 'text-white/60 hover:text-[#f0f0f0]'
                            }`}
                        >
                            <span className="font-mono text-[10px] opacity-40">{item.number}.</span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => {
                            window.tactileFeedback?.playClickSound();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        className="md:hidden p-2 text-xs font-mono font-bold border border-[#333333] hover:border-[#ff6b1a] rounded text-white flex items-center justify-center min-w-[40px] min-h-[40px] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>

                    <a
                        href="mailto:velasquezmarcvictor@gmail.com"
                        onClick={() => window.tactileFeedback?.playClickSound()}
                        className="hidden md:inline-flex items-center gap-1.5 bg-[#ff6b1a] hover:bg-[#ff7d36] text-white px-3.5 py-1.5 text-xs font-semibold rounded-sm shadow-sm transition-all active:scale-95"
                    >
                        <span>Get In Touch</span>
                        <ArrowUpRight size={13} />
                    </a>
                </div>
            </div>

            {/* Mobile Menu Dropdown Panel */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0e0e0e] border-b border-[#333333] shadow-2xl flex flex-col p-6 gap-5 z-40 animate-[page-enter_200ms_ease-out] max-h-[calc(100dvh-73px)] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
                    <nav className="flex flex-col gap-1 text-sm font-medium">
                        {navItems.map((item) => (
                            <a
                                key={item.page}
                                href={item.to}
                                onClick={(e) => {
                                    handleNavClick(e, item.to);
                                }}
                                className={`py-3 px-3 rounded border-b border-white/5 flex justify-between items-center transition-colors min-h-[44px] ${
                                    activePage === item.page
                                        ? 'bg-white/5 text-[#ff6b1a] font-semibold'
                                        : 'text-white/60 hover:text-[#f0f0f0]'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs text-white/40">{item.number}.</span>
                                    <span>{item.label}</span>
                                </div>
                                {activePage === item.page && (
                                    <span className="text-[10px] px-2 py-0.5 bg-[#ff6b1a]/15 text-[#ff6b1a] border border-[#ff6b1a]/30 rounded font-mono">
                                        CURRENT
                                    </span>
                                )}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="mailto:velasquezmarcvictor@gmail.com"
                        onClick={() => {
                            window.tactileFeedback?.playClickSound();
                            setIsMenuOpen(false);
                        }}
                        className="bg-[#ff6b1a] hover:bg-[#ff7d36] text-white px-4 py-3 text-xs font-semibold rounded-sm flex items-center justify-center gap-2 transition-all w-full min-h-[44px]"
                    >
                        <span>Get In Touch</span>
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
