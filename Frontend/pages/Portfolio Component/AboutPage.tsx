import { ArrowRight, ChevronsLeftRight, Plus, SendHorizonal, User } from "lucide-react"
import My1x1 from "../../src/assets/1x1_Generated.png"
const AboutPage = () => {

    interface UserInfo {
        label: string;
        value: string;
    }
    interface TechnicalSkill {
        name: string;
        image: string;
    }
    const user_info: UserInfo[] = [
        { label: "Name", value: "Collins C. Matela" },
        { label: "Role", value: "Web Developer" },
        { label: "College", value: "STI College Rosario" },
        { label: "Degree", value: "Bachelor of Science in Information Technology" },
    ]
    const technical_skills: TechnicalSkill[] = [
    // Frontend
    { name: "HTML", image: My1x1 },
    { name: "CSS", image: My1x1 },
    { name: "JavaScript", image: My1x1 },
    { name: "TypeScript", image: My1x1 },
    { name: "React.js", image: My1x1 },
    { name: "Tailwind CSS", image: My1x1 },

    // Backend
    { name: "Node.js", image: My1x1 },
    { name: "Express.js", image: My1x1 },
    { name: "REST API", image: My1x1 },

    // Database
    { name: "MongoDB", image: My1x1 },
    { name: "Mongoose", image: My1x1 },

    // Tools & Services
    { name: "Git", image: My1x1 },
    { name: "GitHub", image: My1x1 },
    { name: "Postman", image: My1x1 },
    { name: "Cloudinary", image: My1x1 },
    { name: "Vercel", image: My1x1 },
    ];

    return(
        <>
        <section className="bg-stone-950 h-screen w-full justify-center items-center flex flex-col gap-2">
            
            <div className="h-90 w-4xl justify-start items-start flex gap-2">
                
                <div className="shrink-0 h-full w-2/3 rounded-lg border border-stone-600 px-4 flex flex-col gap-2 bg-stone-900">
                    <div className="justify-start items-center flex gap-2 border-b border-stone-700 py-2">
                        <ChevronsLeftRight size={15} className="text-stone-500"/>
                        <h1 className="text-white font-semibold">Me</h1>
                    </div>

                    <div className="shrink-0 grid grid-cols-2 gap-2 border-b border-stone-700 py-2">
                        {user_info.map((info) => (
                            <div className="flex justify-start items-start gap-4 w-full">
                                  <h1 className="text-stone-500 font-semibold text-sm w-12">{info.label}</h1>
                                  <h1 className="text-white text-sm">{info.value}</h1>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex-1 min-h-0">
                        <p className="text-white text-sm leading-7 tracking-wide">
                            I'm an aspiring Full-Stack Developer currently pursuing a degree in Information Technology. I have a strong passion for building innovative, responsive, and user-friendly web applications. Through my academic journey, I've gained hands-on experience with modern web technologies, particularly the MERN Stack (MongoDB, Express.js, React.js, and Node.js). As a capstone project leader and developer, I've had the opportunity to collaborate with a real client, transforming their requirements into a functional web application.
                        </p>
                    </div>
                    
                </div>

                <div className="w-1/3 h-full rounded-lg border border-stone-600 p-2 bg-stone-900">
                    <img src={My1x1} className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>

            <div className="w-4xl border border-stone-600 rounded-lg bg-stone-900 p-2">
               <div className="justify-start items-center flex gap-2 border-b border-stone-700 py-2">
                    <ChevronsLeftRight size={15} className="text-stone-500"/>
                    <h1 className="text-white font-semibold">My Technical Skills</h1>
                </div>
                <div className="grid grid-cols-4 gap-2 py-2 px-2">
                  {technical_skills.map((skill) => (
                    <div className="flex items-center gap-2 py-2 border border-stone-700 rounded-lg px-2">
                        <Plus size={15} className="text-stone-500"/>
                        <h1 className="text-white text-sm">{skill.name}</h1>
                    </div>
                ))}  
                </div>
                
            </div>

        </section>
        </>
    )
}
export default AboutPage