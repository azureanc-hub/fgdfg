import { ArrowRight, CheckCircle2, Shield, Clock, Laptop, Smartphone, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">
                Complete IT Solution Provider Since 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Ideas
              </span>{' '}
              into Digital{' '}
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software,
              we bring innovation and excellence to every project with our expert team of developers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-600">
                Get Free Consultation
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-700">Secure & Scalable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-500" />
                <span className="text-sm text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>

            <div className="relative space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 float-animation">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-xl">
                    <Laptop className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Web Development</h3>
                    <p className="text-blue-600 font-bold">+10 Projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ml-12 float-animation-delay-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-400 p-3 rounded-xl">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Mobile Apps</h3>
                    <p className="text-cyan-600 font-bold">+4 Apps</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 float-animation-delay-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-yellow-400 p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                    <p className="text-orange-600 font-bold">On Time</p>
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
