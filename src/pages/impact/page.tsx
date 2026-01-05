import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import StatsCounter from '../../components/base/StatsCounter';

const ImpactPage = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const stories = [
    {
      title: 'Quick 19-Minute Route to Edwards Hamlet',
      excerpt: 'Easy access via Kampala–Jinja Highway and Kamuli Road makes visiting our regeneration centre convenient for partners and visitors.',
      fullContent: `Getting to Edwards Hamlet Regeneration Centre has never been easier! Located in the heart of Busoga region, our centre is just a quick 19-minute drive from Jinja town via the well-maintained Kampala–Jinja Highway and Kamuli Road.

The journey takes you through scenic landscapes of Uganda's agricultural heartland, offering glimpses of local communities and thriving farmlands. The route is accessible year-round and suitable for all types of vehicles.

For visitors coming from Kampala, the total journey takes approximately 2 hours via the Kampala-Jinja Highway. International visitors can fly into Entebbe International Airport and arrange ground transportation through our partner networks.

We welcome partners, volunteers, researchers, and eco-tourists to visit our demonstration farm and experience firsthand the transformative work happening in regenerative agriculture. Prior booking is recommended to ensure our team can provide you with a comprehensive tour and meaningful engagement with our programs.

Contact us at apccc.secretariat@gmail.com or call +256 760 454324 to schedule your visit.`,
      image: 'https://edwardsregen.org/wp-content/uploads/2025/01/Capturehhggh-370x270.png',
      date: 'January 15, 2025',
    },
    {
      title: 'Edwards Hamlet: A Coffee Farm With A Difference',
      excerpt: 'Edward Munaaba trains community members and youth on good agronomic practices in coffee production in Busoga Sub Region.',
      fullContent: `Edwards Hamlet is not just another coffee farm—it's a living classroom where traditional wisdom meets modern sustainable practices. Founded by Edward Munaaba, this regeneration centre has become a beacon of hope for coffee farmers across the Busoga Sub Region.

Our approach to coffee farming goes beyond conventional methods. We integrate agroecology principles, combining coffee cultivation with shade trees, nitrogen-fixing plants, and biochar soil amendments. This creates a resilient ecosystem that produces premium quality coffee while regenerating the land.

Training programs at Edwards Hamlet focus on:
• Good agronomic practices for coffee production
• Soil health management and composting techniques
• Integrated pest management without harmful chemicals
• Post-harvest handling and quality control
• Climate-smart farming techniques
• Value addition and market linkages

Community members and youth receive hands-on training in our demonstration plots, learning by doing. We've trained over 847 farmers who have gone on to improve their yields by an average of 40% while reducing input costs.

The coffee produced at Edwards Hamlet tells a story—a story of regeneration, community empowerment, and sustainable livelihoods. Every cup represents a farmer's journey toward climate resilience and economic independence.

Join us in transforming coffee farming in Uganda, one farmer at a time.`,
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/Capturegggg-370x270.png',
      date: 'September 6, 2023',
    },
    {
      title: 'Building Bridges for Regeneration',
      excerpt: 'Regeneration Canada published insights on building bridges for regeneration, highlighting collaborative approaches to sustainable agriculture.',
      fullContent: `In November 2024, Regeneration Canada featured Edwards Hamlet Regeneration Centre in their publication "Building Bridges for Regeneration," recognizing our innovative approach to collaborative sustainable agriculture.

The feature highlighted how Edwards Hamlet serves as a model for cross-continental partnerships in regenerative agriculture. Our collaboration with international organizations like Regeneration Canada, Eco-Restoration Alliance, and Nardin Academy demonstrates the power of building bridges across borders, cultures, and disciplines.

Key insights from the publication include:

**Knowledge Exchange**: Our centre facilitates two-way learning between Canadian regenerative practitioners and Ugandan farmers, creating a rich tapestry of traditional and modern ecological knowledge.

**Youth Empowerment**: The digital empowerment program bridges the gap between agriculture and technology, preparing young people for careers in climate-smart agriculture and agri-tech innovation.

**Ecosystem Restoration**: Our microforest and agroforestry initiatives demonstrate how degraded lands can be transformed into thriving ecosystems that sequester carbon and support biodiversity.

**Community-Centered Approach**: Success in regeneration requires building bridges within communities—connecting elders with youth, farmers with researchers, and local knowledge with global best practices.

**Scalable Models**: The demonstration farm serves as a replicable model that other communities can adapt to their local contexts, creating a network of regeneration hubs across Africa.

This recognition from Regeneration Canada validates our approach and opens doors for expanded partnerships and knowledge sharing. Together, we're building bridges that span continents and generations, united in the mission of healing our planet through regenerative practices.

Read the full publication at regenerationcanada.org`,
      image: 'https://edwardsregen.org/wp-content/uploads/2023/09/Capturefgerg-1-370x270.png',
      date: 'November 11, 2024',
    },
  ];

  const testimonial = {
    quote: "I'm thrilled to share my experience with Edwards Regeneration Center, a pioneering farm redefining how we grow food and care for the land.",
    author: 'Owek. Machora N. Joan',
    role: 'Minister Of Foreign Affairs, Busoga Kingdom',
    image: 'https://edwardsregen.org/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-15-at-09.42.31_4617473b-1-e1731704868700.jpg',
  };

  const toggleStory = (index: number) => {
    setExpandedStory(expandedStory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=successful%20sustainable%20farm%20in%20uganda%20showing%20positive%20impact%20thriving%20crops%20happy%20farmers%20community%20gathering%20busoga%20region%20regenerative%20agriculture%20results%20green%20landscape%20transformation&width=1920&height=1080&seq=impact-hero&orientation=landscape"
            alt="Our Impact"
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
            Our <span className="text-neon-growth">Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Stories of transformation, community empowerment, and environmental restoration
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-forest-vitality to-forest-dark rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-8 right-8 opacity-20">
              <i className="ri-double-quotes-r text-9xl text-neon-growth"></i>
            </div>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover object-top border-4 border-neon-growth"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-digital-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">
              Latest <span className="text-neon-growth">Stories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Updates from the field, community stories, and insights from our regeneration journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <span className="text-neon-growth text-sm font-semibold">{story.date}</span>
                  <h3 className="text-xl font-bold text-forest-dark mt-2 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {expandedStory === index ? story.fullContent : story.excerpt}
                  </p>
                  <button
                    onClick={() => toggleStory(index)}
                    className="text-forest-vitality font-semibold text-sm hover:text-neon-growth transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
                  >
                    {expandedStory === index ? (
                      <>
                        Show Less <i className="ri-arrow-up-s-line"></i>
                      </>
                    ) : (
                      <>
                        Read More <i className="ri-arrow-right-s-line"></i>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
