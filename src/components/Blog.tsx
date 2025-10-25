import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring the latest trends in web development including AI integration, web3, and progressive web apps.',
      author: 'TechForge Team',
      date: 'Mar 15, 2025',
      category: 'Web Dev',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Mobile App Security Best Practices',
      excerpt: 'Essential security measures every mobile app developer should implement to protect user data.',
      author: 'TechForge Team',
      date: 'Mar 10, 2025',
      category: 'Mobile',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      gradient: 'from-teal-600 to-emerald-500',
    },
    {
      title: 'UI/UX Design Trends That Matter',
      excerpt: 'Modern design principles and user experience patterns that create engaging digital products.',
      author: 'TechForge Team',
      date: 'Mar 5, 2025',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      gradient: 'from-pink-600 to-rose-500',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights & Tech Articles
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed with our latest insights, tech trends, and industry expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-zinc-900 border border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
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
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>AppDost Team</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-yellow-400/20">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="flex items-center space-x-1 text-yellow-400 font-medium text-sm group-hover:space-x-2 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
