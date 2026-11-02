import { ArrowDownToLine } from "lucide-react"
import My1x1 from "../../src/assets/1x1_Generated.png"
const LandingPage = () => {
    return (
        <>
        <section className="h-screen w-full flex bg-black px-20">
            <div className="flex flex-col items-start justify-center h-full bg-amber-40 w-1/2 gap-1.5">
                <h1 className="text-stone-400 font-semibold text-xs px-4 py-2 bg-stone-900 rounded-full border-2 border-stone-800 justify-center items-center flex gap-2">
                    <span className="text-green-500 font-bold">•</span>Currently a 4th year BSIT Student</h1>
                <h1 className="text-white text-6xl font-bold">COLLINS MATELA</h1>
                <h1 className="text-white text-2xl font-bold">Aspiring Full-Stack Developer</h1>
                <p className="text-stone-500 text-sm w-100">I build modern, responsive, and user-friendly web applications with a focus on creating practical solutions to real-world problems. Passionate about learning new technologies, solving problems, and turning ideas into functional digital experiences.</p>
                <div>
                    <button className="bg-white hover:bg-stone-100 text-stone-800 py-2 px-4 rounded-lg shadow-sm mt-4 justify-center items-center gap-2 flex cursor-pointer">
                        <ArrowDownToLine size={15}/>
                        <h1 className="text-sm text-stone-800">Download CV</h1>
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full bg-amber-40 w-1/2">
                <div className="h-120 w-100 rounded-3xl shadow-stone-800 shadow-2xl overflow-hidden">
                   <img src={My1x1} alt="Profile Image" className="h-full w-full object-cover rounded-3xl"/> 
                </div>
                
            </div>
        </section>
        </>
    )
}

export default LandingPage