import { CodeXml } from "lucide-react";

const NavigationBar = () => {
    return(
        <>
        <div className="absolute top-0 bg-white h-16 w-full justify-between items-center flex gap-1 px-20 border-b border-stone-200">
            <div className="justify-center items-center flex gap-2">
                <div className={"bg-stone-100 rounded-xl p-2 justify-center items-center flex"}>
                <CodeXml className="text-stone-900 animate-pulse" size={15}/>
                </div>
                <h1 className="text-stone-900 text-lg font-bold">Collins Matela</h1>
            </div>


            <ul className="flex gap-2">
                <li className="text-stone-600 text-xs p-2 rounded-lg hover:bg-stone-100 hover:text-stone-900 cursor-pointer">Home</li>
                <li className="text-stone-600 text-xs p-2 rounded-lg hover:bg-stone-100 hover:text-stone-900 cursor-pointer">About</li>
                <li className="text-stone-600 text-xs p-2 rounded-lg hover:bg-stone-100 hover:text-stone-900 cursor-pointer">Skills</li>
                <li className="text-stone-600 text-xs p-2 rounded-lg hover:bg-stone-100 hover:text-stone-900 cursor-pointer">Project</li>
            </ul>


            <div>
                <button className="bg-stone-900 text-white text-xs font-medium p-2 rounded-full hover:bg-stone-700">
                    Connect With Me
                </button>
            </div>
            
        </div>
        </>
    )
}
export default NavigationBar;