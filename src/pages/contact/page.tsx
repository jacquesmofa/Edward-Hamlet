import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20office%20meeting%20space%20with%20nature%20view%20professional%20consultation%20area%20green%20plants%20natural%20lighting%20welcoming%20environment%20uganda%20business%20setting%20contemporary%20design&width=1920&height=1080&seq=contact-hero&orientation=landscape"
            alt="Contact Us"
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
            Get In <span className="text-neon-growth">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            We'd love to hear from you. Reach out to learn more about our programs or visit our centre
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-forest-dark mb-8">
                Contact <span className="text-neon-growth">Information</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-neon-growth/10 rounded-xl flex-shrink-0">
                    <i className="ri-map-pin-line text-2xl text-neon-growth"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-forest-dark mb-2">Visit Us</h3>
                    <p className="text-gray-600">
                      G652+22 Jinja Butiiki Road Street<br />
                      Busoga Region, Uganda
                    </p>
                    <a
                      href="https://maps.app.goo.gl/zaXuFfWH9avop8hS6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-neon-growth hover:text-forest-vitality mt-2 font-semibold text-sm cursor-pointer"
                    >
                      <span>View on Map</span>
                      <i className="ri-external-link-line"></i>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-neon-growth/10 rounded-xl flex-shrink-0">
                    <i className="ri-phone-line text-2xl text-neon-growth"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-forest-dark mb-2">Call Us</h3>
                    <a href="tel:+256760454324" className="text-gray-600 hover:text-neon-growth transition-colors cursor-pointer">
                      +256 760 454324
                    </a>
                    <br />
                    <a href="tel:+256758650197" className="text-gray-600 hover:text-neon-growth transition-colors cursor-pointer">
                      +256 758 650197
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-neon-growth/10 rounded-xl flex-shrink-0">
                    <i className="ri-mail-line text-2xl text-neon-growth"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-forest-dark mb-2">Email Us</h3>
                    <a href="mailto:apccc.secretariat@gmail.com" className="text-gray-600 hover:text-neon-growth transition-colors cursor-pointer">
                      apccc.secretariat@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-neon-growth/10 rounded-xl flex-shrink-0">
                    <i className="ri-time-line text-2xl text-neon-growth"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-forest-dark mb-2">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-bold text-lg text-forest-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
                  >
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
                  >
                    <i className="ri-twitter-x-line text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
                  >
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7567890123456!2d33.2519!3d0.4189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjUnMDguMCJOIDMzwrAxNScwNi44IkU!5e0!3m2!1sen!2sug!4v1234567890123!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Edwards Hamlet Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-forest-vitality to-forest-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a <span className="text-neon-growth">Difference?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Whether you want to volunteer, partner with us, or support our mission, we're here to help you get involved in regenerative agriculture and climate action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.zeffy.com/en-US/donation-form/donation-to-edwards-hamlet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-neon-growth text-forest-dark font-semibold rounded-lg hover:bg-neon-light transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Support Our Mission
              </a>
              <a
                href="mailto:apccc.secretariat@gmail.com"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-forest-dark transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Send Us a Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
