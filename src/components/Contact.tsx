import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'contact@appdost.in',
      detail: 'We will respond within 24 hours',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 76350 75422',
      detail: 'Mon-Fri: 9 AM - 6 PM',
      gradient: 'from-teal-500 to-emerald-400',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'HQ: Patna, Bihar',
      detail: 'Motihari, Banka',
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      info: 'Available 24/7',
      detail: 'Instant support',
      gradient: 'from-pink-500 to-rose-400',
    },
  ];

  const offices = [
    {
      city: 'Patna',
      region: 'Headquarters',
      address: 'Patna, Bihar',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
    },
    {
      city: 'Motihari',
      region: 'Branch Office',
      address: 'Motihari, Bihar',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
    },
    {
      city: 'Banka',
      region: 'Branch Office',
      address: 'Banka, Bihar',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
    },
  ];

  const faqs = [
    {
      question: 'What services does AppDost offer?',
      answer: 'We offer comprehensive IT solutions including Android app development, web development, UI/UX design, CRM software, cloud solutions, and cybersecurity services.',
    },
    {
      question: 'What are your payment terms and pricing?',
      answer: 'Our pricing varies based on project scope and requirements. We offer flexible payment plans and provide detailed quotes after initial consultation.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We provide comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your product runs smoothly.',
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
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
            <Send className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900 border border-yellow-400/20 rounded-2xl p-6 text-center hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2">{method.title}</h3>
                <p className="text-yellow-400 font-medium mb-1">{method.info}</p>
                <p className="text-sm text-gray-400">{method.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-zinc-900 border border-yellow-400/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-2">
              Send Us a Message
            </h3>
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
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black border-2 border-yellow-400/30 text-white focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">New Project</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
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
            <div className="bg-zinc-900 border border-yellow-400/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white text-lg">{office.city}</h4>
                    <p className="text-sm text-yellow-400 mb-2">{office.region}</p>
                    <p className="text-gray-400 text-sm mb-1">{office.address}</p>
                    <p className="text-gray-500 text-sm">{office.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">3 Offices Across Bihar</h3>
              <p className="text-black/80 mb-6">
                HQ-Patna, Motihari, Banka. Visit our nearest location or reach out online.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-sm font-medium text-black">📧 contact@appdost.in</span>
                <span className="text-sm font-medium text-black">📞 +91 76350 75422</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-yellow-400/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-400 text-center mb-10">
            Get answers to common questions about our services
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-yellow-400 pl-6">
                <h4 className="font-bold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
          <p className="text-gray-400 mb-6">Follow us on social media for updates and insights</p>
          <div className="flex justify-center space-x-4">
            {[
              { icon: Linkedin },
              { icon: Twitter },
              { icon: Instagram },
              { icon: Facebook },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <button
                  key={index}
                  className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-black" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
