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
      info: 'contact@techforge.com',
      detail: 'We will respond within 24 hours',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      detail: 'Mon-Fri: 9 AM - 6 PM',
      gradient: 'from-teal-500 to-emerald-400',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Tech Street, Silicon Valley',
      detail: 'San Francisco, CA 94105',
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
      city: 'San Francisco',
      region: 'Headquarters',
      address: '123 Tech Street, CA 94105',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
    {
      city: 'New York',
      region: 'East Coast Office',
      address: '456 Madison Ave, NY 10022',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
    {
      city: 'London',
      region: 'European Office',
      address: '789 Oxford St, W1D 2HG',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    },
  ];

  const faqs = [
    {
      question: 'What services does TechForge offer?',
      answer: 'We offer comprehensive IT solutions including web & mobile development, UI/UX design, CRM software, cloud solutions, and cybersecurity services.',
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
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md mb-4">
            <Send className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's bring your ideas to life together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{method.info}</p>
                <p className="text-sm text-gray-600">{method.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 text-lg">{office.city}</h4>
                    <p className="text-sm text-blue-600 mb-2">{office.region}</p>
                    <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                    <p className="text-gray-500 text-sm">{office.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Multiple Locations in Bihar</h3>
              <p className="text-blue-100 mb-6">
                We have offices across Bihar to serve you better. Visit our nearest location or reach out online.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105">
                View All Locations
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-center mb-10">
            Get answers to common questions about our services
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
          <p className="text-gray-600 mb-6">Follow us on social media for updates and insights</p>
          <div className="flex justify-center space-x-4">
            {[
              { icon: Linkedin, gradient: 'from-blue-600 to-blue-700' },
              { icon: Twitter, gradient: 'from-sky-500 to-blue-500' },
              { icon: Instagram, gradient: 'from-pink-500 to-rose-500' },
              { icon: Facebook, gradient: 'from-blue-600 to-indigo-600' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <button
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5 text-white" />
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
