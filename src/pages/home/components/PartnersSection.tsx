import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PartnersSection = () => {
  const partners = [
    { name: 'Nardin Academy', description: 'Educational partnership for youth development' },
    { name: 'Jounce High', description: 'Technology and innovation collaboration' },
    { name: 'Eco-Restoration Alliance', description: 'Environmental restoration initiatives' },
    { name: 'Heifer International', description: 'Sustainable agriculture support' },
    { name: 'APCCC', description: 'Africa Partnership on Climate Change Coalition' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-forest-vitality to-forest-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20network%20connection%20pattern%20with%20nodes%20and%20lines%20representing%20partnership%20collaboration%20technology%20mesh%20dark%20background%20minimalist%20modern%20design&width=1920&height=800&seq=partners-bg&orientation=landscape')] bg-cover bg-center"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-growth font-semibold text-sm tracking-wider uppercase">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Building a <span className="text-neon-growth">Global Network</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Collaborating with leading organizations to amplify our impact and drive sustainable change
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-neon-growth/20 rounded-lg flex-shrink-0 group-hover:bg-neon-growth/30 transition-all">
                  <i className="ri-links-line text-2xl text-neon-growth"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-growth transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/partners"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-neon-growth text-forest-dark font-semibold rounded-lg hover:bg-neon-light transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span>View All Partners</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
