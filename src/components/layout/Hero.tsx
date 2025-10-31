import { Button } from "../features/button";

export default function Hero(){

    return(
       <main className="flex flex-col items-center gap-16 h-screen justify-center">
        <h1 className="font-bold lg:text-8xl xl:text-9xl md:text-7xl">KALUNA GADYANGA</h1>
        <h2 className="font-bold lg:text-5xl">Full-Stack Developer / Programer</h2>
        <p className="lg:text-2xl text-center">Passionate about creating innovative web solutions and bringing ideas to life through <br/> clean, efficient code.</p>
        <div className="flex flex-row gap-24">
            <Button to="" title="Get In Touch" style="bg-blue-500 px-12 py-3"/>
            <Button to="" title="My Project" style="bg-green-500 px-12 py-3"/>
        </div>
       </main>
    );
}