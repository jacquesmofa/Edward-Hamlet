import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const TeamPage = () => {
  const team = [
    {
      name: 'Mr. Munaaba Edward',
      role: 'Director',
      bio: 'Visionary leader driving regenerative agriculture transformation in Busoga region',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/RCH7452ghd-scaled.jpg',
    },
    {
      name: 'Dr. Mara Huber',
      role: 'Educational Leader & Cognitive Psychologist',
      bio: 'Expert in experiential learning and mindset change methodologies',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/WhatsApp-Image-2025-09-04-at-10.26.26-PM.jpeg',
    },
    {
      name: 'Rashid Buyinza',
      role: 'I.T Manager',
      bio: 'Leading digital transformation and youth tech empowerment initiatives',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/WhatsApp-Image-2024-11-14-at-04.07.07_e8f98102hhhhfre.jpg',
    },
    {
      name: 'Mr. Buyinza Musa',
      role: 'Project Manager',
      bio: 'Coordinating field operations and community engagement programs',
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/WhatsApp-Image-2024-11-14-at-04.07.54_738936a0fggfrr.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20team%20of%20agricultural%20experts%20and%20community%20leaders%20working%20together%20in%20uganda%20diverse%20group%20collaboration%20outdoor%20meeting%20at%20sustainable%20farm%20busoga%20region%20teamwork%20leadership&width=1920&height=1080&seq=team-hero&orientation=landscape"
            alt="Our Team"
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
            Meet Our <span className="text-neon-growth">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Passionate leaders committed to regenerative agriculture and community empowerment
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 h-[500px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex space-x-3 mb-4">
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-neon-growth rounded-lg transition-all cursor-pointer"
                      >
                        <i className="ri-facebook-fill text-white text-lg"></i>
                      </a>
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
                <div>
                  <h3 className="text-2xl font-bold text-forest-dark mb-2">{member.name}</h3>
                  <p className="text-neon-growth font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-forest-vitality to-forest-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-neon-growth">Mission</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're always looking for passionate individuals to join our team and contribute to regenerative agriculture in Uganda. Whether you're an agronomist, educator, technologist, or community organizer, there's a place for you at Edwards Hamlet.
            </p>
            <a
              href="mailto:apccc.secretariat@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-neon-growth text-forest-dark font-semibold rounded-lg hover:bg-neon-light transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>Get In Touch</span>
              <i className="ri-mail-line text-xl"></i>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
