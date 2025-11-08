import type { IconType } from "react-icons";
import { useState } from "react";

interface skillProps {
  icon: IconType;
  name: string;
}

export function SkillIcon({ icon: Icon, name }: skillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/3 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Animated background effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg transition-all duration-300 ${
          isHovered ? 'opacity-30 scale-125' : 'opacity-0 scale-100'
        }`}></div>
        
        {/* Icon */}
        <Icon className={`text-5xl lg:text-6xl relative z-10 transition-all duration-300 ${
          isHovered 
            ? 'text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text scale-110' 
            : 'text-gray-400'
        }`} />
      </div>
      
      {/* Skill Name */}
      <h3 className={`text-lg font-semibold text-center transition-all duration-300 ${
        isHovered 
          ? 'text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text' 
          : 'text-gray-300'
      }`}>
        {name}
      </h3>
      
      {/* Hover indicator */}
      <div className={`w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}></div>
    </div>
  );
}