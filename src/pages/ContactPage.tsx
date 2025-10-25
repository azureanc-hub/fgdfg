import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Instagram, Facebook, Clock, Globe } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    budget: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'contact@soul.dev',
      detail: 'We will respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 76350 75422',
      detail: 'Mon-Sat: 9 AM - 6 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'HQ: Patna, Bihar',
      detail: 'Motihari, Banka',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      info: 'Available 24/7',
      detail: 'Instant support',
    },
  ];

  const offices = [
    {
      city: 'Patna',
      region: 'Headquarters',
      address: 'Patna, Bihar, India',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
      phone: '+91 76350 75422',
      email: 'patna@soul.dev',
    },
    {
      city: 'Motihari',
      region: 'Branch Office',
      address: 'Motihari, Bihar, India',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
      phone: '+91 76350 75422',
      email: 'motihari@soul.dev',
    },
    {
      city: 'Banka',
      region: 'Branch Office',
      address: 'Banka, Bihar, India',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
      phone: '+91 76350 75422',
      email: 'banka@soul.dev',
    },
  ];

  const faqs = [
    {
      question: 'What services does Soul offer?',
      answer: 'We offer comprehensive IT solutions including mobile app development (iOS & Android), web development, UI/UX design, CRM software, cloud solutions, cybersecurity, database management, AI/ML solutions, and API development.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A simple mobile app might take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during the initial consultation.',
    },
    {
      question: 'What are your payment terms and pricing?',
      answer: 'Our pricing varies based on project scope and requirements. We offer flexible payment plans including milestone-based payments. Most projects start from $3,000 and we provide detailed quotes after initial consultation.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We provide comprehensive post-launch support including 24/7 monitoring, maintenance, updates, bug fixes, and technical assistance to ensure your product runs smoothly. Support plans are customized to your needs.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can integrate with your existing development team, provide staff augmentation, or work as an independent unit. We adapt to your preferred workflow and communication channels.',
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, we take confidentiality seriously. We are happy to sign NDAs and other confidentiality agreements before discussing your project details.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
              <Send className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Start Your Project
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it. Let's discuss how Soul can help
              transform your ideas into reality with cutting-edge technology and expert development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-yellow-400/20 rounded-2xl p-8 text-center hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">{method.title}</h3>
                  <p className="text-yellow-400 font-medium mb-1">{method.info}</p>
                  <p className="text-sm text-gray-400">{method.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900 border-2 border-yellow-400/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
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
                      Email Address *
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
                      Phone Number *
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
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="project">New Project</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none placeholder:text-gray-600"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900 border-2 border-yellow-400/30 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-6">
                      <h4 className="font-bold text-white text-lg">{office.city}</h4>
                      <p className="text-sm text-yellow-400 mb-2">{office.region}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-start text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-start text-gray-400">
                          <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                        <div className="flex items-start text-gray-400">
                          <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-start text-gray-400">
                          <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-400 rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-black" />
                  <h3 className="text-2xl font-bold text-black">Global Presence</h3>
                </div>
                <p className="text-black/80 mb-6">
                  With offices across Bihar and serving clients worldwide, we're always ready to help
                  transform your digital vision into reality.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium text-black">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>contact@soul.dev</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-black">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+91 76350 75422</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border-2 border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <h4 className="font-bold text-white mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Connect With Us</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Follow us on social media for updates, insights, and behind-the-scenes content
          </p>
          <div className="flex justify-center space-x-4">
            {[
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Facebook, label: 'Facebook' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <button
                  key={index}
                  className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-black" />
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
