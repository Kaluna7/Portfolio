import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const cardRef = useRef(null);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, { 
        rotationY: 0, 
        y: 0,
        opacity: 1 
      });

      const cardAnimation = gsap.to(cardRef.current, {
        rotationY: 180,
        y: 100,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: true,

        },
      });

      gsap.from(".background-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".background-text",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      gsap.from(".whoami-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".whoami-text",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      return () => {
        cardAnimation.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] mb-8">
            <div className="bg-gray-900/95 rounded-2xl px-8 py-6">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="flex flex-col gap-20 lg:gap-32">
          {/* Background Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="background-text flex flex-col gap-8 order-2 lg:order-1">
              <h1 className="font-bold text-4xl lg:text-5xl bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Background
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                I am from Bali, Indonesia, currently studying at the Institute 
                of Technology and Business STIKOM Bali, majoring in Information 
                Technology, while working as a software engineer.
              </p>
              <div className="flex gap-4 mt-4">
                <span className="px-4 py-2 bg-indigo-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/20">
                  Student
                </span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
                  Software Engineer
                </span>
                <span className="px-4 py-2 bg-pink-500/10 text-pink-300 rounded-full text-sm border border-pink-500/20">
                  Bali, Indonesia
                </span>
              </div>
            </div>

            <div ref={triggerRef} className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-md h-[500px] [perspective:1400px]">
                <div
                  ref={cardRef}
                  className="relative w-full h-full [transform-style:preserve-3d] rounded-2xl shadow-2xl border border-white/10"
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                    <img
                      src="/assets/back-card.jpg"
                      alt="Professional Background"
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-2">My Journey</h3>
                        <p className="text-white/80">Scroll to discover more</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl overflow-hidden">
                    <img
                      src="/assets/foto.jpg"
                      alt="I Made Kaluna Gadyanga"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">I Made Kaluna Gadyanga</h3>
                        <p className="text-white/80">Software Engineer & Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who I Am Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="whoami-text flex flex-col gap-8">
              <h1 className="font-bold text-4xl lg:text-5xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Who I Am?
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                <span className="font-bold text-white">I Made Kaluna Gadyanga</span>, 
                a passionate software engineer and technology student from Bali. 
                I love creating innovative solutions and continuously learning 
                new technologies to solve real-world problems.
              </p>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                I'm always excited to collaborate on interesting projects and 
                connect with like-minded individuals in the tech industry.
              </p>
              
              <div className="flex gap-4 mt-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-8 border border-white/10 w-full max-w-md">
                <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Current Role</p>
                      <p className="text-white font-semibold">Software Engineer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5-9-5-9 5 9 5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Education</p>
                      <p className="text-white font-semibold">STIKOM Bali</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-semibold">Bali, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}