import { Button } from "../features/button";

export default function Hero(){

    return(
       <div className="mt-6 flex flex-col items-center gap-16 h-screen">
        <h1 className="font-bold lg:text-9xl">KALUNA GADYANGA</h1>
        <h2 className="font-bold lg:text-5xl">Full-Stack Developer / Programer</h2>
        <p className="lg:text-2xl text-center">Passionate about creating innovative web solutions and bringing ideas to life through <br/> clean, efficient code.</p>
        <div className="flex flex-row gap-12">
            <Button to="" title="Get In Touch" style="bg-blue-500 px-12 py-2"/>
            <Button to="" title="My Project" style="bg-green-500 px-12 py-2"/>
        </div>
       </div>
    );
}