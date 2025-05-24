
import { ExternalLink, Github, BarChart3, TrendingUp, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Netflix Movies Dashboard",
      description: "An interactive Power BI dashboard analyzing Netflix movie trends, genres, and ratings. This comprehensive dashboard provides insights into content distribution, viewer preferences, and platform analytics through dynamic visualizations.",
      technologies: ["Power BI", "Excel", "Data Analytics", "Visualization"],
      features: [
        "Interactive genre analysis",
        "Rating distribution charts",
        "Trend analysis over time",
        "Geographic content mapping"
      ],
      image: "bg-gradient-to-br from-red-500 to-pink-600",
      icon: BarChart3,
      stats: {
        dataPoints: "15K+",
        visualizations: "12",
        insights: "25+"
      }
    },
    {
      title: "ML Project Portfolio",
      description: "A collection of machine learning projects demonstrating various algorithms and techniques. From supervised learning to deep neural networks, showcasing practical applications of AI in real-world scenarios.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      features: [
        "Predictive modeling",
        "Classification algorithms",
        "Data preprocessing",
        "Model evaluation metrics"
      ],
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      icon: TrendingUp,
      stats: {
        models: "8+",
        accuracy: "92%",
        datasets: "5+"
      }
    }
  ];

  return (
    <section className="py-20 bg-slate-900" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Check out some of my design projects, meticulously crafted with love and dedication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Project Preview */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <project.icon className="w-16 h-16 text-white mx-auto mb-4" />
                    <Button className="bg-white text-slate-900 hover:bg-gray-200">
                      <Eye className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-4 right-4 space-y-2">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {value}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-slate-600 hover:border-purple-500 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm constantly working on new projects and exploring innovative solutions. 
              Check out my GitHub for more repositories and contributions.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
