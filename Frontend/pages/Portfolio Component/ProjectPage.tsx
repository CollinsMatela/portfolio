import { ChevronsLeftRight } from "lucide-react"
import ProjectImage1 from "../../src/assets/ProjectImage1.png"
const ProjectPage = () => {

    interface Project {
        project_name: string,
        project_type: string,
        my_role: string,
        tech_stack: string[],
    }
    let project1: Project = {
        project_name: 'Web-Based Library Management System',
        project_type: 'Capstone Project | Client Based',
        my_role: 'Lead & Fullstack Developer',
        tech_stack: ['MongoDb', 'Express.js', 'React.js', 'Node.js'],
    } 
          
    
    return(
        <>
        <section className="min-h-screen w-full bg-stone-50 justify-center items-center flex flex-col py-20"
        id="projects">

                <div className="justify-center items-center flex flex-col gap-3 mb-10">
                    <h1 className="text-xs font-semibold text-stone-600 uppercase">Featured Projects</h1>
                    <h1 className="text-5xl font-bold text-stone-800 uppercase">A Collection of My Work</h1>
                    <p className="w-120 text-stone-500 text-xs text-center">A showcase of my development journey, featuring web applications and projects built through continuous learning and hands-on experience.</p>
                </div>
                <div className="w-4xl flex flex-col gap-2">

                    <div className="w-full border border-stone-300 p-2 rounded-lg bg-white">
                        <img src={ProjectImage1} alt="Project Image 1" className="w-full h-full object-cover rounded-lg border border-stone-300"/>
                    </div>

                    <div className="w-full justify-start items-center flex pb-2 border border-stone-300 rounded-lg p-2 bg-white">
                        <div className="w-full flex flex-col gap-4">
                          <div className="justify-start items-center flex gap-2 border-b border-stone-300 pb-2">
                                <ChevronsLeftRight size={15} className="text-stone-500"/>
                                <h1 className="text-stone-800 text-sm">Project 01</h1>
                            </div>
                          

                          <div className="w-full grid grid-cols-2 gap-2 border-b border-stone-300 pb-4 bg-white">

                               <div className="w-full flex gap-2">
                                <h1 className="text-stone-500  text-sm w-20">Project Name</h1>
                                <h1 className="text-stone-900 text-sm">{project1.project_name}</h1>
                               </div>

                               <div className="w-full flex gap-2">
                                <h1 className="text-stone-500  text-sm w-20">My Role</h1>
                                <h1 className="text-stone-900 text-sm">{project1.my_role}</h1>
                               </div>

                               <div className="w-full flex gap-2">
                                <h1 className="text-stone-500  text-sm w-20">Project Type</h1>
                                <h1 className="text-stone-900 text-sm">{project1.project_type}</h1>
                               </div>

                               <div className="w-full flex gap-2">
                                <h1 className="text-stone-500  text-sm w-20">Tech Stack</h1>
                                <div className="flex gap-1">
                                    {project1.tech_stack.map((stack) => (
                                        <h1 className="text-stone-900 text-sm font-medium border border-stone-300 bg-stone-200 px-2 rounded-lg">{stack}</h1>
                                    ))}
                                </div>
                                
                               </div>
                          </div> 

                          <div className="w-full grid grid-cols-1 gap-2">
                               <h1 className="text-stone-500  text-sm">Project Description</h1>
                               <p className="text-stone-900 text-sm leading-7 tracking-wide">
                                Led the development of a web-based Library Management System as a full-stack developer for a BSIT capstone project. 
                                Built responsive frontend interfaces and backend services using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.
                                <span className="font-semibold text-stone-800"> Integrated AI-powered features, including video generation, text summarization, and text-to-speech (TTS)</span>
                                , 
                                to enhance the digital reading experience and support reading comprehension. Collaborated with the client and team to gather requirements, implement system features, integrate APIs, and ensure application functionality through testing and debugging.
                               </p>
                          </div>
                        </div>
                        
                    </div>
                </div>
        </section>
        </>
    )
}
export default ProjectPage