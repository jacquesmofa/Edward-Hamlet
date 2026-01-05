import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://edwardsregen.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-02-at-21.33.44_e757d11eghhddxx.jpg"
            alt="About Us"
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
            About <span className="text-neon-growth">Edwards Hamlet</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            A Mindset Change Centre for Climate-Smart Agriculture
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-forest-vitality to-forest-dark rounded-2xl p-8 text-white"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-neon-growth rounded-xl mb-6">
                <i className="ri-target-line text-3xl text-forest-dark"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
              <p className="text-gray-200 leading-relaxed">
                To ensure the ability of the earth to nurture life in all its diversity: protect biodiversity, prevent pollution of land, air and water, promote forestation and protect wildlife.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-neon-growth to-forest-light rounded-2xl p-8 text-forest-dark"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-6">
                <i className="ri-eye-line text-3xl text-forest-dark"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                A regenerated Busoga region where communities thrive through sustainable agriculture, restored ecosystems, and empowered youth leading climate-smart innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-earth-rich to-earth-warm rounded-2xl p-8 text-white"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-neon-growth rounded-xl mb-6">
                <i className="ri-compass-line text-3xl text-forest-dark"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To transform agricultural practices through experiential learning, regenerative techniques, and digital empowerment, creating resilient communities and sustainable livelihoods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-digital-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-forest-dark mb-6">
                Our <span className="text-neon-growth">Journey</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Edwards Hamlet Regeneration Centre was established as a social enterprise under the Africa Partnership on Climate Change Coalition (APCCC) to address the urgent need for sustainable agricultural practices in Uganda's Busoga region.
                </p>
                <p>
                  From our inception, we recognized that true change requires more than just new techniques—it demands a fundamental shift in mindset. That's why we position ourselves as a "Mindset Change Centre," where learning by doing transforms how communities interact with their land.
                </p>
                <p>
                  Today, we operate as a demonstration farm and training hub, showcasing seven core programs that integrate regenerative agriculture, carbon farming, and digital technology. Our work has impacted thousands of farmers, planted over a million trees, and created new opportunities for youth in rural communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://readdy.ai/api/search-image?query=ugandan%20community%20working%20together%20on%20sustainable%20farm%20project%20diverse%20group%20of%20farmers%20and%20youth%20learning%20regenerative%20agriculture%20busoga%20region%20teamwork%20training%20session%20outdoor%20education%20green%20landscape&width=800&height=600&seq=about-story&orientation=landscape"
                alt="Our Journey"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">
              Our Core <span className="text-neon-growth">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ri-leaf-line', title: 'Sustainability', desc: 'Long-term thinking for people and planet' },
              { icon: 'ri-team-line', title: 'Community', desc: 'Empowering local leadership and ownership' },
              { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Blending traditional wisdom with modern tech' },
              { icon: 'ri-hand-heart-line', title: 'Integrity', desc: 'Transparent, ethical, and accountable practices' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-neon-growth/10 rounded-2xl mx-auto mb-6">
                  <i className={`${value.icon} text-4xl text-neon-growth`}></i>
                </div>
                <h3 className="text-xl font-bold text-forest-dark mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
