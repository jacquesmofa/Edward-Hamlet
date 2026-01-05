import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProgramsGrid = () => {
  const programs = [
    {
      icon: 'ri-plant-line',
      title: 'Agroecology',
      description: 'Sustainable farming practices that work with nature to build resilient food systems and restore biodiversity.',
      image: 'https://readdy.ai/api/search-image?query=ugandan%20farmer%20working%20in%20diverse%20agroecology%20farm%20with%20multiple%20crops%20intercropping%20system%20sustainable%20agriculture%20green%20plants%20natural%20farming%20methods%20african%20agriculture%20busoga%20region%20bright%20natural%20lighting&width=600&height=400&seq=prog-agroecology&orientation=landscape',
    },
    {
      icon: 'ri-fire-line',
      title: 'Biochar Production',
      description: 'Converting agricultural waste into biochar to improve soil fertility and sequester carbon for climate action.',
      image: 'https://readdy.ai/api/search-image?query=biochar%20production%20process%20in%20rural%20african%20setting%20charcoal%20making%20for%20soil%20improvement%20sustainable%20carbon%20farming%20traditional%20kiln%20with%20agricultural%20waste%20smoke%20and%20fire%20uganda%20farming%20innovation&width=600&height=400&seq=prog-biochar&orientation=landscape',
    },
    {
      icon: 'ri-water-flash-line',
      title: 'Aquaculture',
      description: 'Integrated fish farming systems that provide protein while creating closed-loop nutrient cycles.',
      image: 'https://readdy.ai/api/search-image?query=fish%20farming%20pond%20in%20uganda%20aquaculture%20system%20integrated%20with%20agriculture%20tilapia%20farming%20sustainable%20protein%20production%20rural%20african%20fish%20farm%20clear%20water%20natural%20environment&width=600&height=400&seq=prog-aquaculture&orientation=landscape',
    },
    {
      icon: 'ri-seedling-line',
      title: 'Community Micro Forestry',
      description: 'Empowering communities to establish and manage small-scale forests for ecosystem restoration and livelihoods.',
      image: 'https://readdy.ai/api/search-image?query=community%20tree%20planting%20in%20uganda%20micro%20forest%20project%20local%20people%20planting%20seedlings%20reforestation%20effort%20busoga%20region%20green%20landscape%20community%20engagement%20environmental%20restoration&width=600&height=400&seq=prog-forestry&orientation=landscape',
    },
    {
      icon: 'ri-cup-line',
      title: 'Coffee Tourism',
      description: 'Experience the journey from bean to cup while learning about sustainable coffee production in Busoga.',
      image: 'https://readdy.ai/api/search-image?query=coffee%20plantation%20in%20busoga%20uganda%20ripe%20red%20coffee%20cherries%20on%20plants%20arabica%20coffee%20farm%20lush%20green%20coffee%20trees%20sustainable%20coffee%20production%20african%20coffee%20growing%20tourism%20experience&width=600&height=400&seq=prog-coffee&orientation=landscape',
    },
    {
      icon: 'ri-computer-line',
      title: 'Youth Digital Empowerment',
      description: 'Tech training and digital skills development for young people to drive agricultural innovation.',
      image: 'https://readdy.ai/api/search-image?query=african%20youth%20learning%20computer%20skills%20in%20rural%20tech%20lab%20digital%20literacy%20training%20young%20people%20using%20laptops%20technology%20education%20in%20uganda%20modern%20classroom%20empowerment%20program&width=600&height=400&seq=prog-digital&orientation=landscape',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-digital-sky to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-growth font-semibold text-sm tracking-wider uppercase">
            Our Core Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mt-4 mb-6">
            Seven Pillars of <span className="text-forest-medium">Regeneration</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive programs designed to restore ecosystems, empower communities, and build climate resilience through experiential learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 flex items-center justify-center bg-neon-growth rounded-xl">
                  <i className={`${program.icon} text-3xl text-forest-dark`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-forest-dark mb-3 group-hover:text-neon-growth transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
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
            to="/programs"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-forest-vitality text-white font-semibold rounded-lg hover:bg-forest-dark transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span>Explore All Programs</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
