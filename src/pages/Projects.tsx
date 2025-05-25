
import { ArrowLeft, ExternalLink, Github, BarChart3, TrendingUp, Eye, Brain, Database, Globe, Code, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const allProjects = [
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
      },
      liveDemo: "https://netflix-dashboard-demo.example.com",
      codeUrl: "https://github.com/yourusername/netflix-dashboard"
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
      },
      liveDemo: "https://ml-portfolio-demo.example.com",
      codeUrl: "https://github.com/yourusername/ml-portfolio"
    },
    {
      title: "Stock Price Predictor",
      description: "Machine learning model that predicts stock prices using historical data and technical indicators. Built with Python and scikit-learn, featuring data visualization and real-time predictions.",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
      features: [
        "Historical data analysis",
        "Technical indicators",
        "Price prediction models",
        "Interactive charts"
      ],
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: Brain,
      stats: {
        accuracy: "85%",
        features: "15+",
        predictions: "1000+"
      },
      liveDemo: "https://stock-predictor-demo.example.com",
      codeUrl: "https://github.com/yourusername/stock-predictor"
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Comprehensive Excel dashboard for sales performance tracking and analysis. Features pivot tables, charts, and automated reporting for business intelligence.",
      technologies: ["Excel", "Pivot Tables", "Charts", "VBA"],
      features: [
        "Sales trend analysis",
        "Performance metrics",
        "Automated reports",
        "Interactive filters"
      ],
      image: "bg-gradient-to-br from-blue-500 to-cyan-600",
      icon: Database,
      stats: {
        reports: "10+",
        metrics: "25+",
        automation: "80%"
      },
      liveDemo: "https://sales-dashboard-demo.example.com",
      codeUrl: "https://github.com/yourusername/sales-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "HTML", "CSS"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Contact form integration",
        "Mobile optimized"
      ],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: Globe,
      stats: {
        components: "20+",
        responsive: "100%",
        performance: "95+"
      },
      liveDemo: "https://portfolio-demo.example.com",
      codeUrl: "https://github.com/yourusername/portfolio-website"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application that visualizes various data structures and algorithms. Built to help understand complex algorithms through visual representation.",
      technologies: ["HTML", "CSS", "JavaScript", "Algorithms"],
      features: [
        "Sorting algorithms",
        "Search algorithms",
        "Tree traversals",
        "Graph algorithms"
      ],
      image: "bg-gradient-to-br from-pink-500 to-rose-600",
      icon: Code,
      stats: {
        algorithms: "12+",
        visualizations: "8+",
        interactive: "100%"
      },
      liveDemo: "https://algorithm-visualizer-demo.example.com",
      codeUrl: "https://github.com/yourusername/algorithm-visualizer"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my complete collection of projects spanning data analysis, machine learning, web development, and algorithm visualization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {allProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Project Preview */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <project.icon className="w-16 h-16 text-white mx-auto mb-4" />
                    <Button 
                      className="bg-white text-slate-900 hover:bg-gray-200"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
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
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white flex-1"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
