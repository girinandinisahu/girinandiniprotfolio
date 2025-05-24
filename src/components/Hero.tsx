
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-lg opacity-75"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full p-1">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  GS
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          Hi, I am
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-fade-in">
          Girinandini Sahu
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          3rd-year B.Tech student specializing in Computer Science with a focus on 
          <span className="text-purple-400 font-semibold"> Artificial Intelligence and Machine Learning</span>. 
          Passionate about tech innovation and eager to contribute to cutting-edge projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a href="mailto:girinandini@example.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Phone className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/girinandini" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/girinandini" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
