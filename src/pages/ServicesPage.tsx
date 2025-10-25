import { Smartphone, Globe, Palette, Code, Cloud, ShieldCheck, Database, Cpu, Layers, Settings } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native & cross-platform mobile applications with cutting-edge technology and seamless user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Development', 'App Store Optimization', 'Push Notifications'],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
      pricing: 'Starting from $5,000',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites with clean code and beautiful designs that engage and convert visitors.',
      features: ['Responsive Design', 'Single Page Apps', 'E-commerce Solutions', 'CMS Integration', 'Progressive Web Apps', 'Performance Optimization'],
      technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      pricing: 'Starting from $3,000',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      pricing: 'Starting from $2,000',
    },
    {
      icon: Code,
      title: 'CRM Software',
      description: 'Custom CRM solutions that streamline your business processes and enhance customer relationships.',
      features: ['Custom Workflows', 'Analytics Dashboard', 'Integration Support', 'Lead Management', 'Sales Automation', 'Report Generation'],
      technologies: ['Salesforce', 'HubSpot', 'Custom Solutions', 'API Integration'],
      pricing: 'Starting from $8,000',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and solutions that grow with your business needs.',
      features: ['AWS & Azure', 'Migration Services', 'DevOps Setup', 'Serverless Architecture', 'Auto-Scaling', 'Cost Optimization'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      pricing: 'Starting from $4,000',
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring', 'Incident Response', 'Security Training'],
      technologies: ['OWASP', 'ISO 27001', 'SOC 2', 'GDPR Compliance'],
      pricing: 'Starting from $3,500',
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design and management for efficient data storage and retrieval.',
      features: ['Database Design', 'Data Migration', 'Performance Tuning', 'Backup Solutions', 'Data Analytics', 'Real-time Sync'],
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
      pricing: 'Starting from $2,500',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Chatbots', 'Data Mining'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Python'],
      pricing: 'Starting from $10,000',
    },
    {
      icon: Layers,
      title: 'API Development',
      description: 'Robust and scalable APIs that power your applications and enable seamless integrations.',
      features: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Rate Limiting', 'Authentication', 'Webhooks'],
      technologies: ['Node.js', 'Express', 'FastAPI', 'Django', 'GraphQL'],
      pricing: 'Starting from $3,000',
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support to keep your applications running smoothly.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Updates & Upgrades', 'Performance Optimization', 'Security Patches', 'Technical Support'],
      technologies: ['Monitoring Tools', 'CI/CD', 'Version Control', 'Issue Tracking'],
      pricing: 'Custom Plans Available',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We understand your requirements, analyze target audience, plan the roadmap, and define project scope with clear milestones.',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Create beautiful visuals, user experiences aligned with your brand, and interactive prototypes for early feedback.',
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'Build robust solutions with clean code, best practices, and seamless integration with your existing systems.',
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous quality checks, automated testing, performance optimization, and security vulnerability assessments.',
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'Launch your product with comprehensive support, documentation, training, and smooth transition to production.',
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing maintenance, updates, support to keep everything running smoothly, and continuous improvement based on feedback.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs. From concept to deployment,
              we deliver excellence at every step of your digital journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-black/50 text-gray-300 text-xs rounded-full border border-yellow-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-yellow-400/20">
                    <p className="text-yellow-400 font-bold text-lg">{service.pricing}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 border-2 border-yellow-400/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A proven methodology that ensures quality, efficiency, and client satisfaction at every stage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
                >
                  <div className="text-6xl font-bold text-yellow-400 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-400 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to Start Your Project?
            </h2>
            <p className="text-black/80 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into reality with cutting-edge technology
              and expert development. Get a free consultation today.
            </p>
            <button className="bg-black text-yellow-400 px-10 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:scale-105 text-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
