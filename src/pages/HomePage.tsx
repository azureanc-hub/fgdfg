import Hero from '../components/Hero';
import { ArrowRight, CheckCircle2, Users, Award, Globe2, TrendingUp } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Soul?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional IT solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: '50+ Clients',
                description: 'Trusted by businesses worldwide',
              },
              {
                icon: Award,
                title: '100+ Projects',
                description: 'Successfully delivered solutions',
              },
              {
                icon: Globe2,
                title: 'Global Reach',
                description: 'Serving clients across continents',
              },
              {
                icon: TrendingUp,
                title: '98% Success Rate',
                description: 'Proven track record',
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Building the Future of Digital Innovation
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                At Soul, we're passionate about transforming ideas into powerful digital solutions.
                Our team of expert developers, designers, and strategists work together to create
                innovative products that drive business growth.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Whether you need a mobile app, web platform, or enterprise software, we have the
                expertise and experience to bring your vision to life with cutting-edge technology
                and best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl p-8 border-2 border-yellow-400/30">
                <div className="space-y-4">
                  {[
                    'Agile Development Methodology',
                    'Dedicated Project Managers',
                    'Regular Progress Updates',
                    'Post-Launch Support',
                    'Scalable Solutions',
                    'Security Best Practices',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-black/50 p-4 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Let's discuss your project and explore how Soul can help you achieve your digital goals
          </p>
          <button className="bg-yellow-400 text-black px-12 py-5 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 text-lg">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
