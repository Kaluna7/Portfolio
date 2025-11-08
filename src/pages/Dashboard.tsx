import Hero from "../components/layout/Hero";
import About from "../components/layout/About";
import Skill from "../components/layout/Skill/Skill";
import Project from "../components/layout/Project/Project";
import Contact from "../components/layout/Contact/Contact";
import Footer from "../components/layout/footer/Footer";


export default function Dashboard(){
    return(
        <main className="bg-black w-full">
        <Hero/>
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
        </main>
    );
}