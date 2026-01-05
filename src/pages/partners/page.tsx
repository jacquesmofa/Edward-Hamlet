import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const PartnersPage = () => {
  const partners = [
    {
      name: 'Africa Partnership on Climate Change Coalition (APCCC)',
      description: 'Our parent organization, APCCC provides strategic guidance and connects us to a network of climate action initiatives across Africa.',
      focus: 'Climate Change Coalition',
      icon: 'ri-global-line',
    },
    {
      name: 'Nardin Academy',
      description: 'Educational partnership focused on youth development, experiential learning methodologies, and curriculum development for sustainable agriculture.',
      focus: 'Education & Youth Development',
      icon: 'ri-graduation-cap-line',
    },
    {
      name: 'Jounce High',
      description: 'Technology and innovation collaboration bringing digital tools and modern agricultural technologies to rural communities.',
      focus: 'Technology & Innovation',
      icon: 'ri-lightbulb-line',
    },
    {
      name: 'Eco-Restoration Alliance',
      description: 'Environmental restoration partnership supporting our reforestation, biodiversity conservation, and ecosystem regeneration initiatives.',
      focus: 'Environmental Restoration',
      icon: 'ri-leaf-line',
    },
    {
      name: 'Heifer International',
      description: 'Sustainable agriculture support providing training, resources, and market linkages for smallholder farmers in the Busoga region.',
      focus: 'Sustainable Agriculture',
      icon: 'ri-plant-line',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20people%20shaking%20hands%20partnership%20collaboration%20international%20cooperation%20business%20meeting%20outdoor%20setting%20with%20nature%20background%20teamwork%20unity%20professional%20networking&width=1920&height=1080&seq=partners-hero&orientation=landscape"
            alt="Our Partners"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our <span className="text-neon-growth">Partners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Building a global network for regenerative agriculture and climate action
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">
              Strategic <span className="text-neon-growth">Collaborations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Working together with leading organizations to amplify our impact and drive sustainable change across Uganda and beyond
            </p>
          </motion.div>

          <div className="space-y-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-digital-sky to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-neon-growth/10 rounded-2xl group-hover:bg-neon-growth/20 transition-all">
                      <i className={`${partner.icon} text-4xl text-neon-growth`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-forest-dark group-hover:text-neon-growth transition-colors mb-2 md:mb-0">
                        {partner.name}
                      </h3>
                      <span className="inline-block px-4 py-2 bg-forest-vitality/10 text-forest-vitality rounded-lg text-sm font-semibold whitespace-nowrap">
                        {partner.focus}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-gradient-to-br from-forest-vitality to-forest-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become a <span className="text-neon-growth">Partner</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're always looking for strategic partners who share our vision of regenerative agriculture and sustainable development. Whether you're an NGO, educational institution, technology provider, or funding organization, let's explore how we can work together.
            </p>
            <a
              href="mailto:apccc.secretariat@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-neon-growth text-forest-dark font-semibold rounded-lg hover:bg-neon-light transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>Partner With Us</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;
