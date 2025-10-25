import { Users, TrendingUp, Award, Heart, Briefcase, GraduationCap, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    position: '',
    portfolio: '',
    message: '',
  });

  const benefits = [
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work alongside 50+ talented developers and designers who are passionate about innovation and excellence.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities with mentorship programs, skill development workshops, and clear career paths.',
    },
    {
      icon: Award,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses, annual raises, and comprehensive benefits.',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote options, generous PTO, and a supportive work environment.',
    },
    {
      icon: Briefcase,
      title: 'Recognition',
      description: 'Your contributions matter. We celebrate achievements, reward excellence, and promote from within.',
    },
    {
      icon: GraduationCap,
      title: 'Learning Culture',
      description: 'Access to latest technologies, conferences, online courses, and continuous learning platforms.',
    },
  ];

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Patna, Bihar / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$80K - $120K',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and work on cutting-edge web applications.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with PostgreSQL or MongoDB',
        'Knowledge of cloud platforms (AWS, Azure, or GCP)',
        'Excellent problem-solving and communication skills',
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with product and design teams',
        'Mentor junior developers',
        'Participate in code reviews and architecture decisions',
      ],
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Motihari, Bihar / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$60K - $90K',
      description: 'Join our mobile team to build innovative iOS and Android applications using React Native or Flutter.',
      requirements: [
        'Proficiency in React Native or Flutter',
        'Experience with mobile app deployment',
        'Understanding of mobile UI/UX principles',
        'Strong debugging and optimization skills',
      ],
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Implement pixel-perfect UI designs',
        'Optimize app performance and battery usage',
        'Write clean, maintainable code',
      ],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Patna, Bihar',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$50K - $80K',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications.',
      requirements: [
        'Expertise in Figma, Adobe XD, or Sketch',
        'Strong portfolio demonstrating UI/UX skills',
        'Understanding of design systems and patterns',
        'Experience with user research and testing',
      ],
      responsibilities: [
        'Design user interfaces and experiences',
        'Create and maintain design systems',
        'Conduct user research and usability testing',
        'Collaborate with developers and product managers',
      ],
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$70K - $100K',
      description: 'Help us build and maintain scalable infrastructure and CI/CD pipelines.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Strong knowledge of Docker and Kubernetes',
        'Proficiency in automation and scripting',
        'Understanding of security best practices',
      ],
      responsibilities: [
        'Manage cloud infrastructure and deployments',
        'Build and maintain CI/CD pipelines',
        'Monitor system performance and reliability',
        'Implement security and compliance measures',
      ],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Patna, Bihar / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$90K - $130K',
      description: 'Lead product strategy and execution for our suite of IT solutions.',
      requirements: [
        'Proven experience in product management',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Technical background or understanding',
      ],
      responsibilities: [
        'Define product vision and roadmap',
        'Prioritize features and requirements',
        'Work closely with engineering and design teams',
        'Analyze metrics and user feedback',
      ],
    },
    {
      title: 'QA Engineer',
      department: 'Engineering',
      location: 'Banka, Bihar / Remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$45K - $70K',
      description: 'Ensure the quality and reliability of our applications through comprehensive testing.',
      requirements: [
        'Experience with manual and automated testing',
        'Knowledge of testing frameworks (Jest, Selenium, etc.)',
        'Strong attention to detail',
        'Understanding of QA best practices',
      ],
      responsibilities: [
        'Create and execute test plans',
        'Develop automated test scripts',
        'Identify and document bugs',
        'Work with developers to resolve issues',
      ],
    },
  ];

  const perks = [
    'Health Insurance',
    'Retirement Plans',
    'Flexible Hours',
    'Remote Work Options',
    'Paid Time Off',
    'Parental Leave',
    'Learning Budget',
    'Conference Tickets',
    'Team Events',
    'Free Snacks & Coffee',
    'Modern Equipment',
    'Gym Membership',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of our journey. Work on exciting projects, grow your skills, and shape the future
              of IT with Soul. We're always looking for talented individuals who share our passion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-yellow-400 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">Additional Perks & Benefits</h3>
            <p className="text-black/80 max-w-2xl mx-auto mb-8">
              We invest in our team's well-being and professional growth with comprehensive benefits
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="bg-black/10 backdrop-blur-sm rounded-lg px-4 py-3 text-black font-medium"
                >
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our current openings and find your perfect role
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {job.title}
                      </h3>
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2 lg:self-start">
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border-2 border-yellow-400/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              Don't See Your Role?
            </h2>
            <p className="text-gray-400 text-center mb-8">
              We're always looking for talented people. Submit your resume and we'll reach out when a suitable position opens up.
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
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    Portfolio/LinkedIn
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="https://..."
                  />
                </div>
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
                  rows={5}
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
      </section>
    </div>
  );
};

export default CareersPage;
