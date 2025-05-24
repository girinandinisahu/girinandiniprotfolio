
import { GraduationCap, Brain, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-slate-900" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing B.Tech in Computer Science Engineering with specialization in 
                <span className="text-purple-400 font-semibold"> Artificial Intelligence and Machine Learning</span> 
                at SUIIT, Sambalpur University (2023–2027). Maintaining an impressive 
                <span className="text-blue-400 font-semibold"> 9.2 CGPA</span>, reflecting dedication to academic excellence.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
                I thrive on exploring innovative technologies and applying theoretical knowledge to practical projects 
                that make a meaningful impact.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Goal</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Eager to secure internship opportunities and gain hands-on experience working on ML-based projects. 
                Looking forward to collaborating with industry professionals and contributing to innovative solutions 
                in the field of AI and machine learning.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">about_me.py</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="text-purple-400">
                  <span className="text-blue-400">class</span> Student:
                </div>
                <div className="ml-4 text-gray-300">
                  <span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span>(self):
                </div>
                <div className="ml-8 space-y-1 text-gray-300">
                  <div>self.name = <span className="text-green-400">"Girinandini Sahu"</span></div>
                  <div>self.university = <span className="text-green-400">"SUIIT, Sambalpur University"</span></div>
                  <div>self.degree = <span className="text-green-400">"B.Tech CSE (AI & ML)"</span></div>
                  <div>self.year = <span className="text-orange-400">3</span></div>
                  <div>self.cgpa = <span className="text-orange-400">9.2</span></div>
                  <div>self.batch = <span className="text-green-400">"2023-2027"</span></div>
                  <div>self.focus = [<span className="text-green-400">"AI"</span>, <span className="text-green-400">"ML"</span>, <span className="text-green-400">"Innovation"</span>]</div>
                  <div>self.seeking = <span className="text-green-400">"Internship Opportunities"</span></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
