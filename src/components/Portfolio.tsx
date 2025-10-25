import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with payment integration, inventory management, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling, telemedicine, and health tracking features.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'WebRTC'],
      gradient: 'from-teal-600 to-emerald-500',
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'Real-time analytics dashboard for financial data visualization and reporting.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Express'],
      gradient: 'from-violet-600 to-purple-500',
    },
    {
      title: 'Social Media Platform',
      category: 'Full Stack',
      description: 'Modern social networking platform with real-time messaging and content sharing.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'GraphQL', 'MongoDB'],
      gradient: 'from-pink-600 to-rose-500',
    },
    {
      title: 'Restaurant Management',
      category: 'CRM Software',
      description: 'Comprehensive solution for restaurant operations, orders, and customer management.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Laravel', 'MySQL'],
      gradient: 'from-orange-600 to-amber-500',
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile App',
      description: 'Cross-platform fitness app with workout plans, progress tracking, and social features.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Python', 'TensorFlow'],
      gradient: 'from-cyan-600 to-blue-500',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Served' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of our successful projects and satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4`}>
                  <button className="bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
