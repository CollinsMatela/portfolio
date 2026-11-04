import { useState } from "react";
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

    return(
        <>
        <header className="fixed top-0 z-20 w-full justify-center items-center flex bg-white/50 backdrop-blur-[2px] border-b border-stone-200">
            <div className="h-16 w-4xl justify-between items-center flex gap-2">
                <div className="justify-center items-center flex gap-2">
                    <h1 className="text-stone-900 text-md font-bold lowercase">@Akosicllns</h1>
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

            {isOpen && (
                <div id="mobile-menu" className="md:hidden w-full bg-white/95 backdrop-blur border-b border-stone-200 px-4 py-2 shadow-sm">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a className="block text-stone-700 text-sm py-3 px-2 rounded-lg hover:bg-stone-100 transition"
                                href={link.href}
                                onClick={closeMenu}>{link.label}</a>
                            </li>
                        ))}
                        <li>
                            <button className="sm:hidden w-full mt-1 bg-stone-900 text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-stone-700 transition"
                            onClick={() => {
                                closeMenu();
                                alert('Not Yet Available');
                            }}>
                                Connect With Me
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
        </>
    )
}
export default NavigationBar;
