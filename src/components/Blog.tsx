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
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Our Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutorials, insights, and tech stories from the TechForge team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${article.gradient} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <button className="flex items-center space-x-1 text-blue-600 font-medium text-sm group-hover:space-x-2 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
