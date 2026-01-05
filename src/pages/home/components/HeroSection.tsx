import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Start with image for 2.5 seconds
    const imageTimer = setTimeout(() => {
      setShowVideo(true);
    }, 2500);

    return () => clearTimeout(imageTimer);
  }, []);

  useEffect(() => {
    if (showVideo) {
      // Show video for 15 seconds, then switch back to image
      const videoTimer = setTimeout(() => {
        setShowVideo(false);
      }, 15000);

      return () => clearTimeout(videoTimer);
    } else {
      // Show image for 2.5 seconds, then switch to video
      const imageTimer = setTimeout(() => {
        setShowVideo(true);
      }, 2500);

      return () => clearTimeout(imageTimer);
    }
  }, [showVideo]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20drone%20view%20of%20lush%20green%20ugandan%20farmland%20with%20coffee%20plantations%20and%20microforests%20in%20busoga%20region%20vibrant%20agricultural%20landscape%20with%20rolling%20hills%20sustainable%20farming%20terraces%20rich%20soil%20and%20dense%20vegetation%20golden%20hour%20lighting%20cinematic%20photography%20high%20definition%20nature%20meets%20technology%20aesthetic&width=1920&height=1080&seq=hero-bg-main&orientation=landscape"
          alt="Busoga Farmland"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Background Video with Overlay */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://www.pexels.com/download/video/35440604/"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Tech Overlay Elements */}
      <div className="absolute inset-0 z-10 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-6 py-2 bg-neon-growth/20 backdrop-blur-sm border border-neon-growth/30 rounded-full text-neon-growth font-semibold text-sm tracking-wide">
              AFRICA PARTNERSHIP ON CLIMATE CHANGE COALITION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Mindset Change for a<br />
            <span className="text-neon-growth">Climate-Smart Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering regenerative agriculture, carbon farming, and youth digital empowerment in Uganda's Busoga region
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link
              to="/programs"
              className="px-10 py-4 bg-neon-growth text-forest-dark font-bold text-lg rounded-lg hover:bg-neon-light transition-all duration-300 shadow-2xl hover:shadow-neon-growth/50 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Explore Our Programs
            </Link>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donation-to-edwards-hamlet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-forest-dark transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Support Our Mission
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
