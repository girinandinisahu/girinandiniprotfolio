
import { Code, Database, Brain, Globe, Wrench, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++", "Java (Basics)"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV", "Pandas", "NumPy"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "Flask"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "Jupyter Notebook", "Google Colab", "VS Code"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analysis",
      icon: BarChart,
      skills: ["Power BI", "Excel", "Data Visualization"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered throughout my academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 group/skill"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/skill:scale-150 transition-transform duration-300`}></div>
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Skill level indicator */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm text-purple-400 font-semibold">Advanced</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:w-full`} style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brain visualization */}
        <div className="mt-20 relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Skill Network</h3>
            <p className="text-gray-400">My interconnected knowledge base</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto h-64 flex items-center justify-center">
            {/* Brain-like network visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Network connections */}
                <g className="opacity-30">
                  <line x1="50" y1="100" x2="150" y2="80" stroke="#8b5cf6" strokeWidth="2" className="animate-pulse" />
                  <line x1="150" y1="80" x2="250" y2="100" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                  <line x1="250" y1="100" x2="350" y2="120" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
                  <line x1="100" y1="150" x2="200" y2="140" stroke="#f59e0b" strokeWidth="2" className="animate-pulse" />
                  <line x1="200" y1="140" x2="300" y2="160" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                </g>
                
                {/* Skill nodes */}
                <circle cx="50" cy="100" r="8" fill="#8b5cf6" className="animate-pulse" />
                <circle cx="150" cy="80" r="10" fill="#3b82f6" className="animate-pulse" />
                <circle cx="250" cy="100" r="12" fill="#10b981" className="animate-pulse" />
                <circle cx="350" cy="120" r="8" fill="#f59e0b" className="animate-pulse" />
                <circle cx="200" cy="140" r="10" fill="#ef4444" className="animate-pulse" />
              </svg>
            </div>
            
            {/* Floating skill badges */}
            <div className="absolute top-4 left-8 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              Python
            </div>
            <div className="absolute top-8 right-12 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce animation-delay-1000">
              ML
            </div>
            <div className="absolute bottom-8 left-16 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce animation-delay-2000">
              AI
            </div>
            <div className="absolute bottom-4 right-8 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce animation-delay-3000">
              Data
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
