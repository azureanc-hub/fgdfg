import { ArrowRight, CheckCircle2, Shield, Clock, Laptop, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">
                Complete IT Solution Provider
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>{' '}
              <span className="text-yellow-400">
                Ideas
              </span>{' '}
              <span className="text-white">Into Digital</span>{' '}
              <span className="text-yellow-400">
                Reality
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software,
              we bring innovation and excellence to every project with our expert team of developers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-transparent text-yellow-400 px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black">
                Get Free Consultation
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">Secure & Scalable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl"></div>

            <div className="relative space-y-6">
              <div className="bg-zinc-900 border border-yellow-400/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2 float-animation">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <Laptop className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Web Development</h3>
                    <p className="text-yellow-400 font-bold">+10 Projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-yellow-400/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2 ml-12 float-animation-delay-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <Smartphone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Mobile Apps</h3>
                    <p className="text-yellow-400 font-bold">+4 Apps</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-yellow-400/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2 float-animation-delay-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fast Delivery</h3>
                    <p className="text-yellow-400 font-bold">On Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
