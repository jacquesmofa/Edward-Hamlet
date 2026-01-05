import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://edwardsregen.org/wp-content/uploads/2024/11/fresh-green-soy-plants-on-the-field-in-spring-row-2023-11-27-05-14-23-utc-min-1-scaled-e1730896045496-808x1024.jpg"
                alt="Sustainable Farming"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://edwardsregen.org/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-31-at-15.39.18_6d46e747-1-e1730895151216-150x150.jpg"
                alt="Community Work"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="text-neon-growth font-semibold text-sm tracking-wider uppercase">
                About Edwards Hamlet
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mt-4 mb-6">
                Regenerating Land,<br />
                <span className="text-forest-medium">Empowering Communities</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Edwards Hamlet Regeneration Centre (EHRC) is a pioneering social enterprise under the Africa Partnership on Climate Change Coalition (APCCC). We serve as a "Mindset Change Centre" in Uganda's Busoga region, focusing on transformative approaches to agriculture and community development.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 rounded-lg flex-shrink-0">
                  <i className="ri-leaf-line text-2xl text-neon-growth"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-dark text-lg mb-1">Regenerative Agriculture</h4>
                  <p className="text-gray-600 text-sm">Building soil health through biochar, composting, and agroecology practices</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 rounded-lg flex-shrink-0">
                  <i className="ri-global-line text-2xl text-neon-growth"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-dark text-lg mb-1">Carbon Farming</h4>
                  <p className="text-gray-600 text-sm">Sequestering carbon while improving agricultural productivity and resilience</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 rounded-lg flex-shrink-0">
                  <i className="ri-computer-line text-2xl text-neon-growth"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-dark text-lg mb-1">Youth Digital Empowerment</h4>
                  <p className="text-gray-600 text-sm">Equipping young people with tech skills for climate-smart agriculture</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-forest-vitality text-white font-semibold rounded-lg hover:bg-forest-dark transition-all duration-300 mt-8 whitespace-nowrap cursor-pointer"
            >
              <span>Learn More About Us</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
