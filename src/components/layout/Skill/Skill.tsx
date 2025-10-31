import { SkillIcon } from "./skill-Icon";
import { skillData } from "./Skill-config";

export default function Skill(){
    return(
        <main className="h-screen mt-60">
            <div className="flex flex-col items-center">
                <h1 className="font-bold lg:text-5xl">Skill & Technologies</h1>
                <p>Technologies I work with to bring ideas to life.</p>
                <div className="grid grid-cols-6">
                    {skillData.map((items , index) => (
                        <SkillIcon key={index} {...items} />
                    ))}
                </div>
            </div>
        </main>
    );
}