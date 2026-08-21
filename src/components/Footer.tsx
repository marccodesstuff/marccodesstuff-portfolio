const Footer = () => {
    return (
        <div className="max-w-[1400px] mx-auto mt-8 mb-6 flex flex-col sm:flex-row justify-between items-center px-6 text-xs font-mono text-white/40 gap-2">
            <div>MARC VICTOR VELASQUEZ • AI & AUTOMATION ENGINEER</div>
            <div>© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
        </div>
    );
};

export default Footer;
