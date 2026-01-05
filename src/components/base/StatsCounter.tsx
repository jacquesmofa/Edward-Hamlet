import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { value: 1000000, suffix: '+', label: 'Trees Planted', icon: 'ri-plant-line' },
    { value: 847, suffix: '+', label: 'Training Sessions', icon: 'ri-graduation-cap-line' },
    { value: 15, suffix: '+', label: 'Active Team Members', icon: 'ri-team-line' },
    { value: 5000, suffix: '+', label: 'Youth Empowered', icon: 'ri-user-star-line' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-forest-vitality to-forest-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20geometric%20pattern%20with%20nature%20elements%20leaves%20and%20technology%20circuit%20lines%20dark%20green%20background%20minimalist%20modern%20design%20subtle%20texture&width=1920&height=600&seq=stats-bg-pattern&orientation=landscape')] opacity-5 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-neon-growth">Impact</span> So Far
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Transforming communities through regenerative agriculture and sustainable practices
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-neon-growth/20 rounded-xl group-hover:bg-neon-growth/30 transition-all">
                <i className={`${stat.icon} text-3xl text-neon-growth`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
