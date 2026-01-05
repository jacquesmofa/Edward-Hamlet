import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamPreview = () => {
  const team = [
    {
      name: 'Mr. Munaaba Edward',
      role: 'Director',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/RCH7452ghd-scaled.jpg',
    },
    {
      name: 'Dr. Mara Huber',
      role: 'Educational Leader & Cognitive Psychologist',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/WhatsApp-Image-2025-09-04-at-10.26.26-PM.jpeg',
    },
    {
      name: 'Rashid Buyinza',
      role: 'I.T Manager',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/WhatsApp-Image-2024-11-14-at-04.07.07_e8f98102hhhhfre.jpg',
    },
    {
      name: 'Mr. Buyinza Musa',
      role: 'Project Manager',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/WhatsApp-Image-2024-11-14-at-04.07.54_738936a0fggfrr.jpg',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-growth font-semibold text-sm tracking-wider uppercase">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mt-4 mb-6">
            Passionate Leaders Driving <span className="text-forest-medium">Change</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our dedicated team combines expertise in agriculture, technology, education, and community development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-neon-growth rounded-lg transition-all cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-white text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-neon-growth rounded-lg transition-all cursor-pointer"
                    >
                      <i className="ri-mail-line text-white text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-forest-dark mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/team"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-forest-vitality text-white font-semibold rounded-lg hover:bg-forest-dark transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span>Meet the Full Team</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
