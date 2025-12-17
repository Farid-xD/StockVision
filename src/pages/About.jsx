import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "StockVision was founded with a mission to democratize investment insights for everyone.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Launched our proprietary AI prediction algorithm, achieving 87% accuracy in market forecasts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      year: "2021",
      title: "100K Users",
      description: "Reached our first 100,000 active users and expanded to international markets.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
    },
    {
      year: "2022",
      title: "Mobile Launch",
      description: "Released iOS and Android apps with real-time trading notifications and portfolio tracking.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      year: "2023",
      title: "Series B Funding",
      description: "Secured $50M in Series B funding to enhance our platform and expand our team.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 25+ countries with multilingual support and localized market insights.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "$2B+", label: "Assets Managed" },
    { number: "87%", label: "Prediction Accuracy" },
    { number: "25+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />
        <img
          src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1400&q=80"
          alt="About Hero"
          className="absolute inset-0 w-full h-96 object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-8 py-32 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl font-extrabold mb-6"
          >
            About StockVision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Empowering investors worldwide with AI-driven insights and cutting-edge technology
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-16"
      >
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-slate-100 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto text-center">
            At StockVision, we believe that everyone deserves access to sophisticated investment tools and insights. 
            Our platform combines advanced artificial intelligence, real-time market data, and intuitive design to 
            help both novice and experienced investors make informed decisions. We're committed to transparency, 
            accuracy, and continuous innovation in the financial technology space.
          </p>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-slate-100 mb-16 text-center"
        >
          Our Journey
        </motion.h2>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
                <div className="text-amber-400 text-6xl font-bold mb-4">{milestone.year}</div>
                <h3 className="text-3xl font-bold text-slate-100 mb-4">{milestone.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Uraan Studios Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-16 pb-24"
      >
        <h2 className="text-5xl font-bold text-slate-100 mb-16 text-center">Built By</h2>
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700 rounded-3xl p-12 hover:border-amber-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <svg className="w-20 h-20 text-slate-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.3L19.5 8.5V15.5L12 19.7L4.5 15.5V8.5L12 4.3ZM12 7L7 9.5V14.5L12 17L17 14.5V9.5L12 7Z"/>
              </svg>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-4xl font-bold text-slate-100 mb-3">Uraan Studios</h3>
              <p className="text-slate-400 text-lg mb-6">
                Innovative software development studio crafting cutting-edge web and mobile solutions
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="mailto:support@uraanstudios.com"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition-all"
                >
                  <span className="text-2xl">📧</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Email</div>
                    <div className="text-slate-200 font-medium">support@uraanstudios.com</div>
                  </div>
                </a>

                <a
                  href="https://uraanstudios.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition-all"
                >
                  <span className="text-2xl">🌐</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-500">Website</div>
                    <div className="text-slate-200 font-medium">uraanstudios.vercel.app</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}