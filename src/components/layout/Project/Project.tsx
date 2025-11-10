import { ProjectBar } from "./project-bar";
import { projectData } from "./Project-config";
import { useNavigate } from "react-router-dom";

export default function Project() {

  const navigate = useNavigate();
  const handleViewAllProject = () =>{
    navigate("/all-project")
  }

  return (
    <main className="h-fit py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] mb-8">
            <div className="bg-gray-900/95 rounded-2xl px-8 py-6">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and expertise in modern web development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projectData.map((items, index) => (
            <ProjectBar key={index} {...items} />
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-400 mb-8">Want to see more of my work?</p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-white/10" onClick={handleViewAllProject} type="button">
            View All Projects
          </button>
        </div>
      </div>
    </main>
  );
}