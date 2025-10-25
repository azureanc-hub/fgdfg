import { Code2, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'CRM Software',
    'Cloud Solutions',
    'Cybersecurity',
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@techforge.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA 94105' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform rotate-12">
                <Code2 className="w-6 h-6 text-white -rotate-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TechForge</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Complete IT Solution
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert development.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <span className="text-sm font-bold">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <span className="text-sm font-bold">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-400 pt-2">{info.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>© {currentYear} TechForge - Complete IT Solution. All rights reserved.</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in USA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
