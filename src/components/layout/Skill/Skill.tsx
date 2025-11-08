import { SkillIcon } from "./skill-Icon";
import { skillData } from "./Skill-config";

export default function Skill() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] mb-8">
            <div className="bg-gray-900/95 rounded-2xl px-8 py-6">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Skills & Technologies
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life and create amazing digital experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 px-4">
          {skillData.map((item, index) => (
            <SkillIcon key={index} {...item} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-b from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly exploring new technologies and frameworks to stay updated 
              with the latest trends in web development.
            </p>
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-indigo-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/20">
                Continuous Improvement
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
                Latest Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}