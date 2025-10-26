import { Sparkles, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
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
    { icon: Mail, text: 'contact@soul.dev' },
    { icon: Phone, text: '+91 76350 75422' },
    { icon: MapPin, text: 'HQ: Patna, Bihar | Motihari, Banka' },
  ];

  return (
    <footer className="bg-black border-t-2 border-yellow-400/30 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center transform rotate-12">
                <Sparkles className="w-6 h-6 text-black -rotate-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Soul</h3>
                <p className="text-xs text-yellow-500/80 uppercase tracking-wide">
                  Complete IT Solution
                </p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p className="font-semibold text-yellow-400">150+ Projects Completed</p>
              <p className="font-semibold text-yellow-400">50+ Team Members</p>
              <p className="font-semibold text-yellow-400">15+ Countries Served</p>
            </div>
            <div className="flex space-x-3 mt-6">
              <div className="w-10 h-10 bg-zinc-900 border border-yellow-400/30 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
                <span className="text-sm font-bold text-yellow-400 group-hover:text-black">in</span>
              </div>
              <div className="w-10 h-10 bg-zinc-900 border border-yellow-400/30 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
                <span className="text-sm font-bold text-yellow-400 group-hover:text-black">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-zinc-900 border border-yellow-400/30 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
                <span className="text-sm font-bold text-yellow-400 group-hover:text-black">f</span>
              </div>
              <div className="w-10 h-10 bg-zinc-900 border border-yellow-400/30 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
                <span className="text-sm font-bold text-yellow-400 group-hover:text-black">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-yellow-400 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-yellow-400 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-yellow-400 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-zinc-900 border border-yellow-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-gray-400 pt-2">{info.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Sitemap</a>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>© {currentYear} Soul - Complete IT Solution. All rights reserved.</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-yellow-400 fill-current" />
              <span>in India</span>
            </p>
            <p className="text-xs text-gray-600 mt-2">www.soul.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
