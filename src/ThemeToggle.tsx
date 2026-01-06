import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-12 h-12 te-module flex items-center justify-center hover:brightness-110 active:scale-95 transition-all relative overflow-hidden group"
            aria-label="Toggle theme"
        >
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
                {theme === 'light' ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-te-accent">
                        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <line x1="8" y1="1" x2="8" y2="2.5" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="8" y1="13.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="1" y1="8" x2="2.5" y2="8" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="13.5" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="3.05" y1="3.05" x2="4.11" y2="4.11" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="11.89" y1="11.89" x2="12.95" y2="12.95" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="3.05" y1="12.95" x2="4.11" y2="11.89" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="11.89" y1="4.11" x2="12.95" y2="3.05" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-te-accent">
                        <path d="M14 8.5C13.5 11.5 10.5 14 7 14C3.5 14 1 11.5 1 8C1 4.5 3.5 2 7 2C7.5 2 8 2.1 8.5 2.2C6.5 3 5 5 5 7.5C5 10.5 7.5 13 10.5 13C12 13 13.3 12.3 14 11.2V8.5Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-te-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
};

export default ThemeToggle;
