import { FaGithub } from "react-icons/fa";

const NavigationBar = () => {
    return(
        <>
        <div className="fixed top-0 z-10 bg-white/50 backdrop-blur-[2px] h-16 w-full justify-between items-center flex gap-1 px-40 border-b border-stone-200">
            <div className="justify-center items-center flex gap-2">
                <h1 className="text-stone-900 text-lg font-bold lowercase">@Akosicllns</h1>
            </div>


            <ul className="flex gap-2">
                <a className="text-stone-600 text-xs p-2 rounded-lg cursor-pointer"
                href="#home">Home</a>
                <a className="text-stone-600 text-xs p-2 rounded-lgcursor-pointer"
                href="#about">About</a>
                <a className="text-stone-600 text-xs p-2 rounded-lg cursor-pointer"
                href="#projects">Project</a>
            </ul>


            <div className="flex gap-2 justify-center items-center">
                <a className="bg-white text-stone-900 text-xs font-medium rounded-full hover:bg-stone-200"
                href="https://github.com/CollinsMatela"
                target="_blank"
                rel="noopener noreferrer">
                    <FaGithub size={20}/>
                </a>
                <button className="bg-stone-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-stone-700"
                onClick={() => alert('Not Yet Available')}>
                    Connect With Me
                </button>
            </div>
            
        </div>
        </>
    )
}
export default NavigationBar;