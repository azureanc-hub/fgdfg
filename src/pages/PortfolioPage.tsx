import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import { useState } from 'react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Web Development', 'Mobile Development', 'CRM Software', 'UI/UX Design', 'Full Stack'];

  const projects = [
    {
      title: 'HealthCare Platform',
      category: 'Web Development',
      client: 'Medicare Solutions',
      year: '2024',
      description: 'Complete healthcare management platform with patient records, appointment scheduling, telemedicine integration, and real-time notifications.',
      longDescription: 'Built a comprehensive healthcare platform serving 10,000+ active users. Features include electronic health records, prescription management, video consultations, lab report integration, and automated appointment reminders.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io'],
      stats: { users: '10K+', rating: '4.8/5', performance: '99.9%' },
    },
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      client: 'Retail Group Inc',
      year: '2024',
      description: 'Full-featured online store with payment integration, inventory management, analytics dashboard, and multi-vendor support.',
      longDescription: 'Developed a scalable e-commerce solution handling 50K+ products with real-time inventory sync, multiple payment gateways, advanced search filters, personalized recommendations, and comprehensive admin dashboard.',
      image: 'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'AWS'],
      stats: { users: '50K+', rating: '4.9/5', performance: '98.5%' },
    },
    {
      title: 'Fitness Tracker App',
      category: 'Mobile Development',
      client: 'FitLife Studios',
      year: '2024',
      description: 'Cross-platform fitness app with workout plans, progress tracking, nutrition monitoring, and social features.',
      longDescription: 'Created an engaging fitness application with AI-powered workout recommendations, meal planning, calorie tracking, progress analytics, social challenges, and wearable device integration.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Flutter', 'Firebase', 'TensorFlow', 'HealthKit'],
      stats: { users: '25K+', rating: '4.7/5', performance: '99.2%' },
    },
    {
      title: 'Restaurant CRM',
      category: 'CRM Software',
      client: 'Gourmet Chain',
      year: '2024',
      description: 'Comprehensive solution for restaurant operations, orders, customer management, and analytics.',
      longDescription: 'Designed a complete restaurant management system with table reservations, order management, kitchen display system, inventory tracking, customer loyalty programs, and detailed business analytics.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Angular', 'Laravel', 'MySQL', 'PWA'],
      stats: { users: '5K+', rating: '4.9/5', performance: '99.7%' },
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Development',
      client: 'Finance Corp',
      year: '2024',
      description: 'Real-time analytics dashboard for financial data visualization and reporting with interactive charts.',
      longDescription: 'Built a sophisticated financial analytics platform with real-time market data, portfolio management, risk analysis, automated reporting, and customizable dashboards for institutional investors.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Vue.js', 'D3.js', 'Express', 'WebSocket'],
      stats: { users: '15K+', rating: '4.8/5', performance: '99.5%' },
    },
    {
      title: 'Social Media Platform',
      category: 'Full Stack',
      client: 'ConnectHub',
      year: '2023',
      description: 'Modern social networking platform with real-time messaging, content sharing, and community features.',
      longDescription: 'Developed a feature-rich social network with real-time chat, stories, video streaming, group communities, advanced privacy controls, and AI-powered content moderation.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Next.js', 'GraphQL', 'MongoDB', 'Redis'],
      stats: { users: '100K+', rating: '4.6/5', performance: '98.8%' },
    },
    {
      title: 'Learning Management System',
      category: 'Web Development',
      client: 'EduTech Solutions',
      year: '2023',
      description: 'Complete e-learning platform with course management, live classes, assessments, and certification.',
      longDescription: 'Created a comprehensive LMS with interactive courses, live video classes, assignment submissions, automated grading, progress tracking, discussion forums, and certificate generation.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['React', 'Django', 'PostgreSQL', 'Zoom API'],
      stats: { users: '30K+', rating: '4.9/5', performance: '99.1%' },
    },
    {
      title: 'Delivery App',
      category: 'Mobile Development',
      client: 'QuickDeliver',
      year: '2023',
      description: 'On-demand delivery application with real-time tracking, route optimization, and payment integration.',
      longDescription: 'Built a complete delivery ecosystem with customer, driver, and merchant apps. Features include real-time GPS tracking, automated dispatching, route optimization, in-app payments, and ratings system.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['React Native', 'Node.js', 'Google Maps', 'Stripe'],
      stats: { users: '40K+', rating: '4.7/5', performance: '99.0%' },
    },
    {
      title: 'Hotel Booking Platform',
      category: 'Full Stack',
      client: 'Hospitality Group',
      year: '2023',
      description: 'Complete hotel booking system with availability management, pricing engine, and guest portal.',
      longDescription: 'Developed an advanced hotel management platform with dynamic pricing, room inventory management, online booking, guest check-in/out, payment processing, and loyalty program integration.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Vue.js', 'Spring Boot', 'MySQL', 'PayPal'],
      stats: { users: '20K+', rating: '4.8/5', performance: '99.3%' },
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', description: 'Successfully delivered solutions' },
    { number: '98%', label: 'Client Satisfaction', description: 'Happy clients worldwide' },
    { number: '50+', label: 'Team Members', description: 'Expert professionals' },
    { number: '15+', label: 'Countries Served', description: 'Global presence' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our successful projects across various industries. Real solutions for real businesses,
              delivered with excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-900 border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400 text-sm">Filter:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50'
                      : 'bg-zinc-900 text-gray-400 border-2 border-yellow-400/20 hover:border-yellow-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-yellow-400/95 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-black text-yellow-400 p-4 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                    <button className="bg-black text-yellow-400 p-4 rounded-full hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-yellow-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2 font-medium">
                    Client: {project.client}
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-black/50 text-gray-300 border border-yellow-400/30 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-yellow-400/20 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-yellow-400 font-bold text-lg">{project.stats.users}</p>
                      <p className="text-gray-400 text-xs">Active Users</p>
                    </div>
                    <div>
                      <p className="text-yellow-400 font-bold text-lg">{project.stats.rating}</p>
                      <p className="text-gray-400 text-xs">Rating</p>
                    </div>
                    <div>
                      <p className="text-yellow-400 font-bold text-lg">{project.stats.performance}</p>
                      <p className="text-gray-400 text-xs">Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-400 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Let's Build Something Great Together
            </h2>
            <p className="text-black/80 mb-8 text-lg max-w-2xl mx-auto">
              Ready to turn your vision into reality? Let's discuss your project and create something amazing.
            </p>
            <button className="bg-black text-yellow-400 px-10 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:scale-105 text-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
