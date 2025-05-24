
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
              Girinandini Sahu
            </h3>
            <p className="text-gray-400">
              AI & ML Enthusiast • CSE Student • Future Innovator
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© 2024 Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>by Girinandini</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-500">
            <span>SUIIT, Sambalpur University</span>
            <span>•</span>
            <span>B.Tech CSE (AI & ML) 2023-2027</span>
            <span>•</span>
            <span>CGPA: 9.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
