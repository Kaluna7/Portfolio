import { ProjectBar } from "./project-bar";
import { projectData } from "./Project-config";

export default function Project(){
    return(
        <main className="h-screen">
            <div className="flex flex-col items-center">
                <h1 className="lg:text-5xl font-bold">Featured Project</h1>
                <p>Here are some of my recent projects that showcase my skills and expertise.</p>
                <div className="grid grid-cols-3">
                    {projectData.map((items , index) => (
                        <ProjectBar key={index} {...items}/>
                    ))}
                </div>
            </div>
        </main>
    );
}