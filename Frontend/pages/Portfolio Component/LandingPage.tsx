import { ArrowUpRight, Download } from "lucide-react"
import FbProfile from "../../src/assets/FbProfile.png"
import IgProfile from "../../src/assets/IgProfile.png"
import { FaFacebook, FaInstagram } from "react-icons/fa"
const LandingPage = () => {
    interface Name {
        letter: string
    }
    const name: Name[] = [
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
        <section className="relative h-screen w-full flex bg-stone-50 justify-center items-center pt-16 overflow-hidden"
        id="home">
            

            <div className="w-full overflow-hidden">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] ">
                {[...name, ...name, ...name].map((name, index) => (
                    <div key={index} className="mx-6 flex items-center">
                        <h1 className="text-stone-200 text-[220px] sm:text-[400px] lg:text-[600px] font-extrabold">{name.letter}</h1>
                    </div>
                ))}  
                </div> 
            </div> 
            <div className="absolute inset-0 bg-linear-to-t from-stone-50 to-transparent"></div>

            <div className="absolute z-10 w-full max-w-fit px-6 justify-center items-center flex flex-col gap-2 text-center pointer-events-none">
                  <h1 className="text-stone-500 text-[11px] sm:text-sm">4th Year College Student</h1>
                  <h1 className="text-stone-900 font-extrabold font-bodoni text-5xl sm:text-7xl md:text-8xl lg:text-9xl">COLLINS</h1>
                  <h1 className="text-stone-900 font-extrabold font-bodoni text-5xl sm:text-7xl md:text-8xl lg:text-9xl">MATELA</h1>
                  <p className="w-full max-w-120 text-center text-[8px] sm:text-[11px] text-stone-500 uppercase">
                    Aspiring Full-Stack Developer passionate about building modern,
                    functional, and user-friendly web applications. I enjoy turning
                    ideas into practical digital solutions through continuous learning
                    and hands-on development.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                     <a className="p-2 bg-stone-800 border border-stone-300 rounded-lg justify-center items-center flex gap-2 cursor-pointer hover:bg-stone-950 transition"
                     href="../../src/assets/Collins_Resume.pdf"
                     target="_blank">
                        <Download size={15} className="text-white"/>
                        <h1 className="text-white text-xs"
                        >Download Resume</h1>
                    </a>
                    <a className="p-2 bg-white border border-stone-300 rounded-lg justify-center items-center flex gap-2 cursor-pointer hover:bg-stone-200 transition"
                    href="#about">
                        <ArrowUpRight size={15} className="text-stone-900"/>
                    <h1 className="text-stone-800 text-xs">Learn More</h1>
                  </a>
                  </div>
                  
            </div>

            <div className="absolute translate-x-10 translate-y-50 sm:translate-x-60 md:translate-x-70 lg:translate-x-80 sm:translate-y-0 rotate-0 sm:rotate-12 h-40 w-30 rounded-xl 
            justify-center items-center flex bg-white/50 border border-stone-300  shadow-xl backdrop-blur-xs p-2
            hover:rotate-0 hover:z-20 hover:scale-125 transition-transform duration-300 ">
                 <div className="relative h-full w-full">
                    <div className="relative bg-blue-400 h-1/2 w-full rounded-t-lg">
                          <div className="absolute inset-0 bg-linear-to-t from-stone-50 to-transparent"></div>
                    </div>
                    <div className="bg-white h-1/2 w-full rounded-b-lg justify-center items-end flex pb-4">
                        <div className="justify-center items-center flex gap-1">
                         <FaFacebook size={15} className="text-blue-500"/>
                        <a className="text-xs font-medium text-stone-500 underline"
                        href="https://www.facebook.com/collinsmatela"
                        target="_blank">Collins Matela</a>   
                        </div>
                        
                    </div>
                    <div className="absolute top-6 left-3 h-20 w-20 bg-stone-200 rounded-full p-0.5">
                        <img src={FbProfile} className="object-cover h-full w-full rounded-full" />
                    </div>
                 </div>
                 
            </div>

            <div className="absolute -translate-x-10 translate-y-50 sm:-translate-x-60 md:-translate-x-70 lg:-translate-x-80 sm:translate-y-0 rotate-0 sm:-rotate-12 h-40 w-30 rounded-xl 
            justify-center items-center flex bg-stone-800/50 border border-stone-600  shadow-xl backdrop-blur-xs p-2
            hover:rotate-0 hover:z-20 hover:scale-125 transition-transform duration-300 ">
                 <div className="relative h-full w-full">
                    <div className="relative bg-stone-900 h-1/2 w-full rounded-t-lg border-b border-stone-600">
                          <div className="absolute inset-0 bg-transparent"></div>
                    </div>
                    <div className="bg-stone-900 h-1/2 w-full rounded-b-lg justify-center items-end flex pb-4">
                        <div className="justify-center items-center flex gap-1">
                         <FaInstagram size={15} className="text-white"/>
                        <a className="text-xs font-medium text-white underline"
                        href="https://www.instagram.com/akosicllns/"
                        target="_blank">@akosicllns</a>   
                        </div>
                        
                    </div>
                    <div className="absolute top-6 left-3 h-20 w-20 bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] to-[#962fbf] rounded-full p-0.5">
                        <img src={IgProfile} className="object-cover h-full w-full rounded-full" />
                    </div>
                 </div>
                 
            </div>

            
        </section>
        </>
    )
}

export default LandingPage