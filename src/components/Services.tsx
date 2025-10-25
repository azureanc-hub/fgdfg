import { Smartphone, Globe, Palette, Code, Cloud, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native & cross-platform mobile applications with cutting-edge technology and seamless user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter Development'],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites with clean code and beautiful designs that engage and convert visitors.',
      features: ['Responsive Design', 'Single Page Apps', 'E-commerce Solutions'],
      gradient: 'from-cyan-500 to-teal-400',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      gradient: 'from-pink-500 to-rose-400',
    },
    {
      icon: Code,
      title: 'CRM Software',
      description: 'Custom CRM solutions that streamline your business processes and enhance customer relationships.',
      features: ['Custom Workflows', 'Analytics Dashboard', 'Integration Support'],
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and solutions that grow with your business needs.',
      features: ['AWS & Azure', 'Migration Services', 'DevOps Setup'],
      gradient: 'from-violet-500 to-purple-400',
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      gradient: 'from-emerald-500 to-green-400',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your requirements, analyze target audience, and plan the roadmap.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create beautiful visuals and user experiences aligned with your brand.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build robust solutions with clean code and best practices.',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous quality checks and performance optimization.',
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Launch your product with comprehensive support and documentation.',
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep everything running smoothly.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text mb-3">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-blue-100 mb-6 max-w-xl">
              Ready to bring your ideas to life? Get in touch and let's discuss your project.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
