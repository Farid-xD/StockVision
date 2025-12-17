import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "support@uraanstudios.com",
      subdDetail: "We'll respond within 24 hours",
      link: "mailto:support@uraanstudios.com"
    },
    {
      icon: "🌐",
      title: "Visit Website",
      detail: "uraanstudios.vercel.app",
      subdDetail: "Check out our portfolio",
      link: "https://uraanstudios.vercel.app"
    },
    {
      icon: "📍",
      title: "Visit Us",
      detail: "Physical office coming soon...",
      subdDetail: "Stay tuned for updates"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-80 object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-8 py-24 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl font-extrabold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link?.startsWith('http') ? '_blank' : undefined}
              rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 transition-all duration-300 ${
                info.link ? 'hover:bg-white/20 hover:scale-105 cursor-pointer' : ''
              }`}
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-blue-300 text-lg mb-1">{info.detail}</p>
              <p className="text-gray-400 text-sm">{info.subdDetail}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Send a Message</h2>
            
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500 rounded-xl p-4 mb-6 text-green-200"
              >
                ✓ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                >
                  <option value="" className="bg-gray-900">Select a topic</option>
                  <option value="general" className="bg-gray-900">General Inquiry</option>
                  <option value="support" className="bg-gray-900">Technical Support</option>
                  <option value="business" className="bg-gray-900">Business Partnership</option>
                  <option value="feedback" className="bg-gray-900">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Image & Extra Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Office Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Office"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* FAQ Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">Quick Answers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">📊 How do I get started?</h4>
                  <p className="text-gray-300 text-sm">Sign up for a free account and explore our dashboard with real-time market data.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">💳 What payment methods do you accept?</h4>
                  <p className="text-gray-300 text-sm">We accept all major credit cards, PayPal, and bank transfers.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">🔒 Is my data secure?</h4>
                  <p className="text-gray-300 text-sm">Yes! We use bank-level encryption and never share your personal information.</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/farid-muhammad-3238132ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-blue-600/20 border border-white/20 hover:border-blue-500 text-white py-3 px-4 rounded-xl transition"
                >
                  <span className="text-xl">💼</span>
                  <span className="font-medium">LinkedIn - Farid Muhammad</span>
                </a>
                <a
                  href="https://github.com/Farid-xD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-purple-600/20 border border-white/20 hover:border-purple-500 text-white py-3 px-4 rounded-xl transition"
                >
                  <span className="text-xl">👨‍💻</span>
                  <span className="font-medium">GitHub - Personal</span>
                </a>
                <a
                  href="https://github.com/uraan-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-purple-600/20 border border-white/20 hover:border-purple-500 text-white py-3 px-4 rounded-xl transition"
                >
                  <span className="text-xl">🏢</span>
                  <span className="font-medium">GitHub - Uraan Studios</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}