import { ChevronsLeftRight, MoveDown } from "lucide-react"
import My1x1 from "../../src/assets/1x1_Generated.png"
import reactLogo from "../../src/assets/react.svg"
import {GitHubCalendar} from 'react-github-calendar';
import { FaGithub } from "react-icons/fa";
const AboutPage = () => {

    interface UserInfo {
        label: string;
        value: string;
    }
    interface TechnicalSkill {
        name: string;
        image: string;
    }
    interface SoftSkill {
  name: string;
  description: string;
}

const softSkills: SoftSkill[] = [
  {
    name: "Problem-Solving",
    description: "Finding effective solutions to challenges.",
  },
  {
    name: "Critical Thinking",
    description: "Analyzing situations before making decisions.",
  },
  {
    name: "Teamwork",
    description: "Collaborating effectively with team members.",
  },
  {
    name: "Time Management",
    description: "Managing tasks and meeting deadlines.",
  },
  {
    name: "Adaptability",
    description: "Adjusting to new technologies and environments.",
  },
  {
    name: "Communication",
    description: "Expressing ideas clearly and effectively.",
  },
  {
    name: "Accountability",
    description: "Taking responsibility for assigned tasks.",
  },
  {
    name: "Willingness to Learn",
    description: "Continuously improving skills and knowledge.",
  },
];
    const user_info: UserInfo[] = [
        { label: "Name", value: "Collins C. Matela" },
        { label: "Role", value: "Web Developer" },
        { label: "College", value: "STI College Rosario" },
        { label: "Degree", value: "Bachelor of Science in Information Technology" },
    ]
    const technical_skills: TechnicalSkill[] = [
    // Frontend
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React.js", image: reactLogo },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

    // Backend
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },

    // Database
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Mongoose", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" },

    // Tools & Services
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Cloudinary", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    ];

    return(
        <>
        <section className="bg-stone-50 min-h-screen w-full justify-center items-center flex flex-col gap-2 py-20 px-4"
        id="about">

            <div className="justify-center items-center flex flex-col gap-3 mb-10 px-2">
                    <h1 className="text-xs font-semibold text-stone-600 uppercase">Learn about me</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 uppercase text-center">Let me introduce myself</h1>
                    <p className="w-full max-w-120 text-stone-500 text-xs text-center">A glimpse into who I am, my journey as an aspiring web developer,
        the skills I've developed, and my passion for building meaningful
        digital experiences.</p>
                </div>
            
            <div className="w-full max-w-4xl h-auto md:h-90 justify-start items-start flex flex-col md:flex-row gap-2">

                
                <div className="w-full md:w-1/3 h-64 md:h-full rounded-lg border border-stone-300 p-2 bg-white">
                    <img src={My1x1} className="w-full h-full object-cover rounded-lg" />
                </div>
                
                <div className="shrink-0 w-full md:w-2/3 md:h-full rounded-lg border border-stone-300 px-4 py-2 flex flex-col gap-2 bg-white">
                    <div className="justify-start items-center flex gap-2 border-b border-stone-300 py-2">
                        <ChevronsLeftRight size={15} className="text-stone-500"/>
                        <h1 className="text-stone-900 font-semibold">Me</h1>
                    </div>

                    <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-2 border-b border-stone-300 py-2">
                        {user_info.map((info) => (
                            <div className="flex justify-start items-start gap-4 w-full">
                                  <h1 className="text-stone-500 font-semibold text-sm w-12 shrink-0">{info.label}</h1>
                                  <h1 className="text-stone-900 text-sm break-words">{info.value}</h1>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex-1 min-h-0">
                        <p className="text-stone-900 text-sm leading-7 tracking-wide">
                            I'm an aspiring Full-Stack Developer currently pursuing a degree in Information Technology. I have a strong passion for building innovative, responsive, and user-friendly web applications. Through my academic journey, I've gained hands-on experience with modern web technologies, particularly the MERN Stack (MongoDB, Express.js, React.js, and Node.js). As a capstone project leader and developer, I've had the opportunity to collaborate with a real client, transforming their requirements into a functional web application.
                        </p>
                    </div>
                    
                </div>
            </div>

            
            <div className="w-full max-w-4xl border border-stone-300 rounded-lg bg-white p-2">
               <div className="justify-start items-center flex gap-2 mb-2">
                    <ChevronsLeftRight size={15} className="text-stone-500"/>
                    <div>
                     <h1 className="text-stone-900 font-semibold uppercase">Technical Skills</h1>
                    <h1 className="text-stone-500 font-semibold text-[11px] uppercase">[Programming Languages | Frameworks | Tools | ETC]</h1>   
                    </div>
                    
                </div>

                <div className="w-full overflow-hidden">
                    <div className="flex w-max animate-scroll hover:[animation-play-state:paused] ">
                    {[...technical_skills, ...technical_skills].map((skill) => (
                        <div key={skill.name} className="mx-1 flex items-center gap-2 rounded-lg border border-stone-300 bg-white py-2 px-4 text-stone-600 transition hover:text-stone-900">
                            <img src={skill.image} alt={skill.name} className="w-5 h-5 object-contain" />
                            <h1 className="text-stone-900 text-sm">{skill.name}</h1>
                        </div>
                    ))}  
                    </div> 
                </div>  
            </div>
            <div className="w-full max-w-4xl border border-stone-300 rounded-lg bg-white p-2">
               <div className="justify-start items-center flex gap-2 mb-2">
                    <ChevronsLeftRight size={15} className="text-stone-500"/>
                    <div>
                     <h1 className="text-stone-900 font-semibold uppercase">Soft Skills</h1>
                    <h1 className="text-stone-500 font-semibold text-[11px] uppercase">[Personal Qualities | Work Ethics | Interpersonal Skills]</h1>   
                    </div>
                    
                </div>

                <div className="w-full">
                    <div className="w-full gap-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                     {softSkills.map((skill) => (
                        <div key={skill.name} className="w-full flex flex-col items-center gap-2 rounded-lg border border-stone-300 bg-white py-2 px-4 text-stone-600 transition hover:text-stone-900">
                            <h1 className="text-stone-900 text-sm">{skill.name}</h1>
                            <p className="text-stone-500 text-xs text-center">{skill.description}</p>
                        </div>
                    ))}
                    </div> 
                </div>
            </div>

            <div className="w-full max-w-4xl border border-stone-300 rounded-lg bg-white p-2">
               <div className="justify-start items-center flex gap-2 mb-2">
                    <FaGithub size={15} className="text-stone-500"/>
                    <div>
                     <h1 className="text-stone-900 font-semibold uppercase">Github Avtivity</h1>
                    <h1 className="text-stone-500 font-semibold text-[11px] uppercase">A visual representation of my coding journey
            and contributions.</h1>   
                    </div>
                    
                </div>

                <div className="w-full p-2">
                    <GitHubCalendar 
                    username="CollinsMatela"
                    
                    />
                </div>
            </div>

            <a className="h-fit w-fit justify-center items-center flex flex-col mt-10 animate-pulse cursor-pointer"
            href="#projects">
                <h1 className="text-sm text-stone-500">View Project</h1>
                <MoveDown size={15} className="text-stone-500"/>
            </a>

        </section>
        </>
    )
}
export default AboutPage