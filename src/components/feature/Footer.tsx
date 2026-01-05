import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src="https://edwardsregen.org/wp-content/uploads/2024/11/edwardhamlet-01ggggg-1-1.jpg"
                alt="Edwards Hamlet"
                className="h-16 w-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Edwards Hamlet Regeneration Centre is a social enterprise under the Africa Partnership on Climate Change Coalition (APCCC), pioneering regenerative agriculture, carbon farming, and youth digital empowerment in Uganda's Busoga region.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-neon-growth/10 hover:bg-neon-growth text-neon-growth hover:text-forest-dark rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-neon-growth">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-neon-growth transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-neon-growth transition-colors text-sm">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-neon-growth transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-neon-growth transition-colors text-sm">
                  Impact Hub
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-neon-growth transition-colors text-sm">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-neon-growth">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-neon-growth text-xl mt-0.5"></i>
                <span className="text-gray-300 text-sm">
                  G652+22 Jinja Butiiki Road Street, Busoga, Uganda
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-neon-growth text-xl"></i>
                <a href="tel:+256760454324" className="text-gray-300 hover:text-neon-growth transition-colors text-sm cursor-pointer">
                  +256 760 454324
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-neon-growth text-xl"></i>
                <a href="mailto:apccc.secretariat@gmail.com" className="text-gray-300 hover:text-neon-growth transition-colors text-sm cursor-pointer">
                  apccc.secretariat@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-forest-vitality">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-gray-300 text-sm text-center">
              © Copyright {currentYear} Edwards Hamlet Regeneration Centre. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
