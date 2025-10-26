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
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-yellow-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-black border-2 border-yellow-400/30 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-yellow-400 mb-3">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-yellow-400 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Ready to Start Your Project?
            </h3>
            <p className="text-black/80 mb-6 max-w-xl">
              Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
            </p>
            <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-medium hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
