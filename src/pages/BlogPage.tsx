import { Calendar, User, ArrowRight, BookOpen, Clock, Tag, Search } from 'lucide-react';
import { useState } from 'react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Dev', 'Mobile', 'Design', 'Cloud', 'Security', 'AI/ML'];

  const articles = [
    {
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring the latest trends in web development including AI integration, web3, progressive web apps, and the evolution of JavaScript frameworks.',
      content: 'The web development landscape is rapidly evolving. From AI-powered code assistants to serverless architectures, developers are embracing new tools and methodologies. Progressive Web Apps continue to blur the line between web and native applications...',
      author: 'Soul Team',
      date: 'Mar 15, 2025',
      category: 'Web Dev',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '8 min read',
      tags: ['React', 'Next.js', 'AI', 'Web3'],
    },
    {
      title: 'Mobile App Security Best Practices',
      excerpt: 'Essential security measures every mobile app developer should implement to protect user data, prevent attacks, and ensure compliance.',
      content: 'Security is paramount in mobile app development. From secure authentication to encrypted data storage, developers must implement multiple layers of protection. Learn about OWASP Mobile Top 10, secure coding practices, and penetration testing...',
      author: 'Soul Team',
      date: 'Mar 10, 2025',
      category: 'Mobile',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '10 min read',
      tags: ['Security', 'Mobile', 'iOS', 'Android'],
    },
    {
      title: 'UI/UX Design Trends That Matter',
      excerpt: 'Modern design principles and user experience patterns that create engaging digital products and drive user satisfaction.',
      content: 'Design trends come and go, but fundamental UX principles remain constant. Discover how glassmorphism, micro-interactions, and inclusive design are shaping the future of digital interfaces...',
      author: 'Soul Team',
      date: 'Mar 5, 2025',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '6 min read',
      tags: ['UI/UX', 'Design', 'Figma', 'Prototyping'],
    },
    {
      title: 'Microservices vs Monolithic Architecture',
      excerpt: 'A comprehensive comparison of architectural patterns to help you choose the right approach for your next project.',
      content: 'Choosing the right architecture is crucial for scalability and maintainability. This guide explores the pros and cons of microservices and monolithic architectures, with real-world examples and migration strategies...',
      author: 'Soul Team',
      date: 'Feb 28, 2025',
      category: 'Web Dev',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '12 min read',
      tags: ['Architecture', 'Backend', 'Microservices', 'DevOps'],
    },
    {
      title: 'Cloud Cost Optimization Strategies',
      excerpt: 'Practical tips to reduce your cloud infrastructure costs without compromising performance or reliability.',
      content: 'Cloud costs can spiral out of control without proper management. Learn about reserved instances, auto-scaling, serverless architectures, and monitoring tools that can help you optimize your cloud spending...',
      author: 'Soul Team',
      date: 'Feb 20, 2025',
      category: 'Cloud',
      image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '9 min read',
      tags: ['AWS', 'Azure', 'Cloud', 'Cost Optimization'],
    },
    {
      title: 'Getting Started with Machine Learning',
      excerpt: 'A beginner-friendly introduction to machine learning concepts, tools, and practical applications in modern software.',
      content: 'Machine learning is transforming how we build software. From recommendation systems to predictive analytics, ML is becoming essential. This guide covers fundamental concepts, popular frameworks, and hands-on projects...',
      author: 'Soul Team',
      date: 'Feb 15, 2025',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '15 min read',
      tags: ['Machine Learning', 'Python', 'TensorFlow', 'AI'],
    },
    {
      title: 'React Server Components Explained',
      excerpt: 'Understanding React Server Components and how they revolutionize the way we build performant web applications.',
      content: 'React Server Components represent a paradigm shift in React development. Learn how they improve performance, reduce bundle size, and enable better data fetching patterns in your applications...',
      author: 'Soul Team',
      date: 'Feb 10, 2025',
      category: 'Web Dev',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '11 min read',
      tags: ['React', 'Next.js', 'Performance', 'JavaScript'],
    },
    {
      title: 'Building Accessible Mobile Apps',
      excerpt: 'Essential accessibility features and best practices to make your mobile apps usable by everyone.',
      content: 'Accessibility is not optional. Learn how to implement VoiceOver, TalkBack, dynamic type, and other accessibility features that make your apps inclusive for all users...',
      author: 'Soul Team',
      date: 'Feb 5, 2025',
      category: 'Mobile',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '7 min read',
      tags: ['Accessibility', 'Mobile', 'iOS', 'Android'],
    },
    {
      title: 'Zero Trust Security Architecture',
      excerpt: 'Implementing zero trust principles to protect your applications and infrastructure in the modern threat landscape.',
      content: 'Traditional perimeter-based security is no longer sufficient. Zero Trust Architecture provides a comprehensive security framework that verifies every access request. Learn how to implement it...',
      author: 'Soul Team',
      date: 'Jan 30, 2025',
      category: 'Security',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '10 min read',
      tags: ['Security', 'Zero Trust', 'Architecture', 'Cloud'],
    },
  ];

  const featuredArticle = articles[0];

  const filteredArticles = articles.slice(1).filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400">Latest Updates</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tech Insights & Articles
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay informed with our latest insights, tutorials, tech trends, and industry expertise.
              Learn from our team's experience building cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border-2 border-yellow-400/30 rounded-3xl overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold">
                  Featured Article
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-black/50 text-gray-300 border border-yellow-400/30 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 self-start">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-900 border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400 text-sm">Category:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50'
                      : 'bg-zinc-900 text-gray-400 border-2 border-yellow-400/20 hover:border-yellow-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="group bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-black/50 text-gray-300 border border-yellow-400/30 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-yellow-400/20">
                    <span className="text-sm text-gray-400 flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </span>
                    <button className="flex items-center space-x-1 text-yellow-400 font-medium text-sm group-hover:space-x-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-400 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-black/80 mb-8 text-lg max-w-2xl mx-auto">
              Get the latest articles, tutorials, and tech insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-black/10 backdrop-blur-sm text-black placeholder:text-black/60 border-2 border-black/20 focus:border-black focus:outline-none"
              />
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
