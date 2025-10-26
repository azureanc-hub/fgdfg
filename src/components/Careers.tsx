import { Users, TrendingUp, Award, Heart, Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    position: '',
    message: '',
  });

  const benefits = [
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work alongside 50+ talented developers and designers who are passionate about innovation.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities with mentorship programs and skill development workshops.',
      gradient: 'from-teal-500 to-emerald-400',
    },
    {
      icon: Award,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses and benefits.',
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote options, and a supportive work environment.',
      gradient: 'from-pink-500 to-rose-400',
    },
    {
      icon: Briefcase,
      title: 'Recognition',
      description: 'Your contributions matter. We celebrate achievements and reward excellence.',
      gradient: 'from-violet-500 to-purple-400',
    },
    {
      icon: GraduationCap,
      title: 'Learning Culture',
      description: 'Access to latest technologies, conferences, and continuous learning platforms.',
      gradient: 'from-cyan-500 to-blue-400',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="careers" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Join Our </span>
            <span className="text-yellow-400">Team</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be part of our journey. Work on exciting projects and shape the future of IT with Soul.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Why Work With Us?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-yellow-400 rounded-3xl p-12 mb-20 text-center">
          <h3 className="text-3xl font-bold mb-4 text-black">No Current Openings</h3>
          <p className="text-black/80 max-w-2xl mx-auto mb-6">
            We don't have any open positions at the moment, but we're always looking for talented people.
            Feel free to submit your resume and we'll reach out when a suitable position opens up.
          </p>
          <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-medium hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:scale-105">
            Submit Your Resume
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 border border-yellow-400/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-2 text-center">
              Submit Your Resume
            </h3>
            <p className="text-gray-400 text-center mb-8">
              We'd love to hear from you! Fill in your details and we'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                  placeholder="e.g., Full Stack Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why are you a great fit? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Tell us about your skills and what makes you a perfect fit..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
