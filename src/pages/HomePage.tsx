import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Laptop, Smartphone, Target, Rocket,
  Palette, Code, Globe, Monitor, Layers, Zap, Shield, Users,
  Award, TrendingUp, BookOpen, Calendar, User, Clock
} from 'lucide-react';

const HomePage = () => {
  const stats = [
    { icon: '💻', number: '10+', label: 'Web Projects' },
    { icon: '📱', number: '4+', label: 'Android Apps' },
    { icon: '🎯', number: '1', label: 'CRM Project' },
    { icon: '🚀', number: '2025', label: 'Founded Year' },
  ];

  const coreExpertise = [
    {
      icon: Palette,
      emoji: '🎨',
      title: 'UI/UX Design Excellence',
      description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.',
    },
    {
      icon: Code,
      emoji: '💻',
      title: 'Custom Software Development',
      description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.',
    },
    {
      icon: Globe,
      emoji: '🌐',
      title: 'Web Application Development',
      description: 'Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.',
    },
    {
      icon: Smartphone,
      emoji: '📱',
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we\'ve got you covered.',
    },
    {
      icon: Layers,
      emoji: '🔧',
      title: 'Full-Stack Development',
      description: 'End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure.',
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration.',
    },
  ];

  const whyChoose = [
    { icon: CheckCircle2, title: 'Complete Lifecycle Expertise', description: 'From ideation to deployment and beyond' },
    { icon: Zap, title: 'Cutting-Edge Technology Stack', description: 'We work with the latest tools and frameworks' },
    { icon: Target, title: 'Agile Development Process', description: 'Fast iterations, continuous feedback, rapid delivery' },
    { icon: Shield, title: 'Quality-First Approach', description: 'Rigorous testing and code reviews ensure excellence' },
    { icon: TrendingUp, title: 'Scalable Solutions', description: 'Built to grow with your business' },
    { icon: Users, title: 'Client-Centric Focus', description: 'Your success is our success' },
  ];

  const workCulture = [
    { emoji: '🎯', title: 'Innovation First', description: 'Encouraging creative problem-solving' },
    { emoji: '🤝', title: 'Collaborative Environment', description: 'Cross-functional teamwork' },
    { emoji: '📚', title: 'Continuous Learning', description: 'Regular training & workshops' },
    { emoji: '🌱', title: 'Growth Mindset', description: 'Diverse projects & new technologies' },
    { emoji: '⚖️', title: 'Work-Life Balance', description: 'Flexible arrangements' },
    { emoji: '🏆', title: 'Recognition & Rewards', description: 'Celebrating achievements' },
  ];

  const technologies = [
    { icon: '⚛️', name: 'React' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '🍃', name: 'MongoDB' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🐳', name: 'Docker' },
    { icon: '📱', name: 'Kotlin' },
    { icon: '💙', name: 'TypeScript' },
  ];

  const latestArticles = [
    {
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring the latest trends in web development including AI integration, web3, and progressive web apps.',
      author: 'Soul Team',
      date: 'Oct 12, 2025',
      category: 'Design',
      readTime: '12 min',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Mobile App Security Best Practices',
      excerpt: 'Essential security measures every mobile app developer should implement to protect user data.',
      author: 'Soul Team',
      date: 'Oct 10, 2025',
      category: 'Mobile',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'UI/UX Design Trends That Matter',
      excerpt: 'Modern design principles and user experience patterns that create engaging digital products.',
      author: 'Soul Team',
      date: 'Oct 8, 2025',
      category: 'Design',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Soul
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">
              Your Trusted Partner for Complete Digital Transformation
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-400 mb-6 leading-relaxed text-center">
              Soul is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, market-ready products. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and create lasting digital impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-yellow-400 font-semibold">
              Our Core Expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-4xl">{item.emoji}</div>
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Soul?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work Culture & Values
            </h2>
            <p className="text-xl text-gray-400">
              At Soul, we believe in:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workCulture.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border-2 border-yellow-400/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Get In Touch
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-bold text-yellow-400 mb-1">Website:</h4>
                <p className="text-gray-400 text-sm">www.soul.dev</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-bold text-yellow-400 mb-1">Email:</h4>
                <p className="text-gray-400 text-sm">contact@soul.dev</p>
                <p className="text-gray-400 text-sm">hr@soul.dev</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <h4 className="font-bold text-yellow-400 mb-1">Locations:</h4>
                <p className="text-gray-400 text-sm">HQ-Patna, Motihari, Banka</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="font-bold text-yellow-400 mb-1">Phone:</h4>
                <p className="text-gray-400 text-sm">+91 76350 75422</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link
                to="/careers"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                Join Our Team
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="bg-zinc-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-zinc-700 transition-all duration-300 hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-400">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <p className="text-white text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 px-6 py-2 rounded-full mb-6">
              <span className="text-blue-400 font-semibold uppercase tracking-wide text-sm">LATEST UPDATES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Insights & Tech Articles
            </h2>
            <p className="text-xl text-gray-400">
              Stay informed with our latest insights, tech trends, and industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <article
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-black" />
                      </div>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <Link
                    to="/blog"
                    className="flex items-center space-x-2 text-yellow-400 font-medium hover:space-x-3 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in working with us on your next project?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-10 py-5 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 text-lg"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
