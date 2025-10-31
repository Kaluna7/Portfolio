import Hero from "../components/layout/Hero";
import About from "../components/layout/About";
import Skill from "../components/layout/Skill/Skill";
import Project from "../components/layout/Project/Project";


export default function Dashboard(){
    return(
        <>
        <Hero/>
        <About />
        <Skill />
        <Project />
        </>
    );
}