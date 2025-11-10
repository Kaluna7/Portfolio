import { useNavigate } from "react-router-dom";

interface ProjectProps {
  icon: string;
  title: string;
  description: string;
  technology: string[];
  to: string;
}

export function ProjectBar({ icon, title, description, technology, to }: ProjectProps) {

  const navigate = useNavigate();
  const handleViewProject = () => {
    navigate(to)
  }

  return (
    <div className="group bg-gradient-to-b from-white/5 to-white/3 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
        <img 
          src={icon} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technology.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-end items-center pt-4 border-t border-white/10">
          <button className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center gap-1 group/btn transition-colors duration-300 cursor-pointer" onClick={handleViewProject} type="button">
            View Details
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}