import { Button } from "../features/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(subheadingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
  }, []);

  return (
    <main 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 
          ref={headingRef}
          className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            KALUNA
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            GADYANGA
          </span>
        </h1>

        {/* Subheading */}
        <h2 
          ref={subheadingRef}
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-8"
        >
          Full-Stack Developer
          <span className="text-indigo-400 mx-4">•</span>
          Programmer
        </h2>

        {/* Description */}
        <p 
          ref={textRef}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative web solutions and bringing ideas to life through{" "}
          <span className="text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text font-semibold">
            clean, efficient code
          </span>
          .
        </p>

        {/* Buttons */}
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            to="#contact" 
            title="Get In Touch" 
            style="group relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border border-transparent hover:border-indigo-400/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            Get In Touch
          </Button>
          
          <Button 
            to="#projects" 
            title="View My Projects" 
            style="group border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm hover:border-white/30"
          >
            View My Projects
          </Button>
        </div>
      </div>
    </main>
  );
}