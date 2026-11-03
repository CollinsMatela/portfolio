import { ArrowUpRight, Download, FileDown } from "lucide-react"
import profilepic from "../../src/assets/1x1NoBg.png"
const LandingPage = () => {
    interface Name {
        letter: string
    }
    let name: Name[] = [
        {letter: 'C'},
        {letter: 'O'},
        {letter: 'L'},
        {letter: 'L'},
        {letter: 'I'},
        {letter: 'N'},
        {letter: 'S'},
        {letter: 'M'},
        {letter: 'A'},
        {letter: 'T'},
        {letter: 'E'},
        {letter: 'L'},
        {letter: 'A'},

    ]
    return (
        <>
        <section className="relative h-screen w-full flex bg-stone-50 justify-center items-center"
        id="home">
            

            <div className="w-full overflow-hidden">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] ">
                {[...name, ...name, ...name].map((name, index) => (
                    <div key={index} className="mx-6 flex items-center">
                        <h1 className="text-stone-200 text-[600px] font-extrabold">{name.letter}</h1>
                    </div>
                ))}  
                </div> 
            </div> 
            <div className="absolute inset-0 bg-linear-to-t from-stone-50 to-transparent"></div>

            <div className="absolute w-fit justify-center items-center flex flex-col gap-2">
                  <h1 className="text-stone-500">4th Year College Student</h1>
                  <h1 className="text-stone-900 font-extrabold font-bodoni text-9xl">COLLINS</h1>
                  <h1 className="text-stone-900 font-extrabold font-bodoni text-9xl">MATELA</h1>
                  <p className="w-120 text-center text-[11px] text-stone-500 uppercase">
                    Aspiring Full-Stack Developer passionate about building modern,
                    functional, and user-friendly web applications. I enjoy turning
                    ideas into practical digital solutions through continuous learning
                    and hands-on development.
                  </p>
                  <div className="flex gap-1">
                     <button className="p-2 bg-stone-800 border border-stone-300 rounded-lg justify-center items-center flex gap-2 cursor-pointer hover:bg-stone-950 transition"
                     onClick={() => alert('Not Yet Available')}>
                        <Download size={15} className="text-white"/>
                        <h1 className="text-white text-xs">Download Resume</h1>
                    </button>
                    <a className="p-2 bg-white border border-stone-300 rounded-lg justify-center items-center flex gap-2 cursor-pointer hover:bg-stone-200 transition"
                    href="#about">
                        <ArrowUpRight size={15} className="text-stone-900"/>
                    <h1 className="text-stone-800 text-xs">Learn More</h1>
                  </a>
                  </div>
                  
            </div>

            
        </section>
        </>
    )
}

export default LandingPage