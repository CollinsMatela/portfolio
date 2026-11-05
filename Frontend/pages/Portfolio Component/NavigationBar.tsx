import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Project", href: "#projects" },
    ];

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return(
        <>
        <header className="fixed top-0 z-20 w-full justify-center items-center flex bg-white/50 backdrop-blur-[2px] border-b border-stone-200">
            <div className="h-16 w-4xl justify-between items-center flex gap-2 px-4 lg:px-0">
                <div className="justify-center items-center flex gap-2">
                    <h1 className="text-stone-900 text-md font-bold uppercase">CM</h1>
                </div>


                <ul className="hidden md:flex gap-2">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a className="text-stone-600 text-xs p-2 rounded-lg cursor-pointer hover:text-stone-900 transition"
                            href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>


                <div className="flex gap-2 justify-center items-center">
                    <a className="bg-white text-stone-900 text-xs font-medium rounded-full p-1 hover:bg-stone-200 transition"
                    href="https://github.com/CollinsMatela"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile">
                        <FaGithub size={20}/>
                    </a>
                    <button className="hidden sm:inline-flex bg-stone-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-stone-700 transition"
                    onClick={() => alert('Not Yet Available')}>
                        Connect With Me
                    </button>
                    <button className="md:hidden p-1.5 rounded-lg text-stone-900 hover:bg-stone-200 transition"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu">
                        {isOpen ? <X size={20}/> : <Menu size={20}/>}
                    </button>
                </div>
            </div>
        </header>

        {/* Mobile sidebar backdrop */}
        <div
            className={`fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={closeMenu}
            aria-hidden="true" />

        {/* Mobile sidebar */}
        <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            inert={!isOpen}
            className={`fixed top-0 right-0 z-50 h-dvh w-72 max-w-[80vw] flex flex-col bg-white border-l border-stone-200 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <div className="h-16 shrink-0 justify-between items-center flex border-b border-stone-200 px-4">
                <h1 className="text-stone-900 text-md font-bold uppercase">CM</h1>
                <button className="p-1.5 rounded-lg text-stone-900 hover:bg-stone-200 transition"
                onClick={closeMenu}
                aria-label="Close navigation menu">
                    <X size={20}/>
                </button>
            </div>

            <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                    <a key={link.href}
                    className="text-stone-700 text-sm py-3 px-3 rounded-lg hover:bg-stone-100 hover:text-stone-900 transition"
                    href={link.href}
                    onClick={closeMenu}>{link.label}</a>
                ))}
            </nav>

            <div className="mt-auto flex flex-col gap-2 border-t border-stone-200 p-4">
                <a className="justify-center items-center flex gap-2 border border-stone-300 bg-white text-stone-900 text-xs font-medium py-2 rounded-full hover:bg-stone-100 transition"
                href="https://github.com/CollinsMatela"
                target="_blank"
                rel="noopener noreferrer">
                    <FaGithub size={18}/>
                    GitHub
                </a>
                <button className="bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-stone-700 transition"
                onClick={() => {
                    closeMenu();
                    alert('Not Yet Available');
                }}>
                    Connect With Me
                </button>
            </div>
        </aside>
        </>
    )
}
export default NavigationBar;
